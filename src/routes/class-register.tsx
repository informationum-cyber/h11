import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import { Lock, Plus, Trash2, BookOpen, AlertCircle } from 'lucide-react'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'
import {
  getRegisterData,
  addStudent,
  deleteStudent,
  addClassLog,
  deleteClassLog,
  type ClassLogEntry,
} from '../server/classRegister.functions'

export const Route = createFileRoute('/class-register')({
  component: RouteComponent,
})

const UNLOCK_KEY = 'pmp_unlocked_class-register'
const NEW_STUDENT_VALUE = '__new__'

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function RouteComponent() {
  const [unlocked, setUnlocked] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [students, setStudents] = useState<string[]>([])
  const [entries, setEntries] = useState<ClassLogEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Log-a-class form state
  const [selectedStudent, setSelectedStudent] = useState('')
  const [newStudentName, setNewStudentName] = useState('')
  const [lessonLabel, setLessonLabel] = useState('')
  const [date, setDate] = useState(todayISO())
  const [materialCovered, setMaterialCovered] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')

  const [filterStudent, setFilterStudent] = useState('All')
  const [quickAddName, setQuickAddName] = useState('')

  async function loadData(pw: string) {
    setLoading(true)
    setError('')
    try {
      const result = await getRegisterData({ data: { password: pw } })
      setStudents(result.students)
      setEntries(result.entries)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load register.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const stored = sessionStorage.getItem(UNLOCK_KEY)
    if (stored) {
      setPassword(stored)
      setUnlocked(true)
      loadData(stored)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    const pw = passwordInput.trim()
    setPasswordError('')
    setLoading(true)
    try {
      const result = await getRegisterData({ data: { password: pw } })
      setStudents(result.students)
      setEntries(result.entries)
      sessionStorage.setItem(UNLOCK_KEY, pw)
      setPassword(pw)
      setUnlocked(true)
    } catch (err) {
      const message = err instanceof Error ? err.message : ''
      if (message === 'Unauthorized' || !message) {
        setPasswordError('Incorrect password.')
      } else {
        sessionStorage.setItem(UNLOCK_KEY, pw)
        setPassword(pw)
        setUnlocked(true)
        setError(message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleLogClass(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')

    const studentName = selectedStudent === NEW_STUDENT_VALUE ? newStudentName.trim() : selectedStudent
    if (!studentName) {
      setFormError('Please choose or enter a student.')
      return
    }

    setSubmitting(true)
    try {
      await addClassLog({
        data: { password, studentName, lessonLabel, date, materialCovered },
      })
      await loadData(password)
      setSelectedStudent(studentName)
      setNewStudentName('')
      setLessonLabel('')
      setMaterialCovered('')
      setDate(todayISO())
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Failed to save this class log.')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleDeleteEntry(id: string) {
    if (!window.confirm('Delete this class log entry? This cannot be undone.')) return
    try {
      await deleteClassLog({ data: { password, entryId: id } })
      await loadData(password)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete entry.')
    }
  }

  async function handleAddStudentOnly(name: string) {
    const trimmed = name.trim()
    if (!trimmed) return
    try {
      const result = await addStudent({ data: { password, name: trimmed } })
      setStudents(result.students)
      setSelectedStudent(trimmed)
      setNewStudentName('')
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Failed to add student.')
    }
  }

  async function handleDeleteStudent(name: string) {
    if (!window.confirm(`Remove "${name}" from your student list? Their past class logs will stay in the history.`))
      return
    try {
      const result = await deleteStudent({ data: { password, name } })
      setStudents(result.students)
      if (filterStudent === name) setFilterStudent('All')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove student.')
    }
  }

  const filteredEntries = useMemo(
    () => (filterStudent === 'All' ? entries : entries.filter((e) => e.studentName === filterStudent)),
    [entries, filterStudent],
  )

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <QuizHeader />

      <main className="w-full max-w-4xl mx-auto px-6 py-16">
        {!unlocked ? (
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-[#143D2D] flex items-center justify-center mx-auto mb-6">
              <Lock className="text-white" size={22} />
            </div>
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Class Register</h1>
            <p className="text-gray-600 mb-8 font-light">Private — admin access only.</p>
            <form onSubmit={handleUnlock} className="space-y-4">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Admin password"
                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A] text-center"
                autoFocus
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1E5C3A] hover:bg-[#144D2E] disabled:opacity-60 text-white px-6 py-3 rounded-sm font-medium transition-colors"
              >
                {loading ? 'Checking…' : 'Unlock'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-[#143D2D] mb-1">Class Register</h1>
              <p className="text-gray-600 font-light text-sm">
                Log each lesson so you always know where you left off with every student.
              </p>
            </div>

            {error && (
              <div className="flex items-start gap-3 bg-red-50 text-red-700 rounded-lg p-4 mb-8 text-sm">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            {/* Log a class form */}
            <div className="rounded-2xl border border-gray-100 p-6 mb-10">
              <h2 className="text-lg font-bold text-[#143D2D] mb-4 flex items-center gap-2">
                <BookOpen size={18} /> Log a Class
              </h2>
              <form onSubmit={handleLogClass} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      Student
                    </label>
                    <select
                      value={selectedStudent}
                      onChange={(e) => setSelectedStudent(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A] bg-white"
                    >
                      <option value="" disabled>
                        Select a student
                      </option>
                      {students.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                      <option value={NEW_STUDENT_VALUE}>+ Add new student…</option>
                    </select>
                    {selectedStudent === NEW_STUDENT_VALUE && (
                      <input
                        type="text"
                        value={newStudentName}
                        onChange={(e) => setNewStudentName(e.target.value)}
                        placeholder="New student's name"
                        className="w-full mt-2 px-4 py-2.5 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                        autoFocus
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    Lesson # / label
                  </label>
                  <input
                    type="text"
                    value={lessonLabel}
                    onChange={(e) => setLessonLabel(e.target.value)}
                    placeholder="e.g. Lesson 5"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    Material covered
                  </label>
                  <textarea
                    value={materialCovered}
                    onChange={(e) => setMaterialCovered(e.target.value)}
                    placeholder="What did you cover this session?"
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                  />
                </div>

                {formError && <p className="text-red-500 text-sm">{formError}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-[#1E5C3A] hover:bg-[#144D2E] disabled:opacity-60 text-white px-6 py-2.5 rounded-sm font-medium transition-colors"
                >
                  <Plus size={16} />
                  {submitting ? 'Saving…' : 'Save Class Log'}
                </button>
              </form>
            </div>

            {/* Students management */}
            <div className="mb-10">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">Students</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {students.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 bg-[#f0f7f2] text-[#143D2D] text-sm px-3 py-1.5 rounded-full"
                  >
                    {s}
                    <button
                      onClick={() => handleDeleteStudent(s)}
                      className="text-[#1E5C3A]/50 hover:text-red-600"
                      aria-label={`Remove ${s}`}
                    >
                      <Trash2 size={13} />
                    </button>
                  </span>
                ))}
                {students.length === 0 && <p className="text-gray-400 text-sm">No students yet.</p>}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleAddStudentOnly(quickAddName)
                  setQuickAddName('')
                }}
                className="flex gap-2 max-w-xs"
              >
                <input
                  type="text"
                  value={quickAddName}
                  onChange={(e) => setQuickAddName(e.target.value)}
                  placeholder="Add a student to the list"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#1E5C3A]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-[#143D2D] text-sm px-3 py-2 rounded-sm font-medium transition-colors"
                >
                  <Plus size={14} /> Add
                </button>
              </form>
            </div>

            {/* History */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-[#143D2D]">History</h2>
                <select
                  value={filterStudent}
                  onChange={(e) => setFilterStudent(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#1E5C3A] bg-white"
                >
                  <option value="All">All students</option>
                  {students.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {loading && entries.length === 0 && <p className="text-gray-500 text-sm">Loading…</p>}
              {!loading && filteredEntries.length === 0 && (
                <p className="text-gray-500 text-sm">No class logs yet.</p>
              )}

              <div className="space-y-3">
                {filteredEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-start justify-between gap-4 rounded-xl border border-gray-100 p-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#143D2D]">
                        {entry.studentName}
                        {entry.lessonLabel && (
                          <span className="text-xs font-normal text-gray-400">· {entry.lessonLabel}</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mb-1">
                        {new Date(entry.date + 'T00:00:00').toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      {entry.materialCovered && (
                        <p className="text-sm text-gray-700">{entry.materialCovered}</p>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-gray-300 hover:text-red-600 shrink-0"
                      aria-label="Delete entry"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
