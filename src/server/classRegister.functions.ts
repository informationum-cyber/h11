import { createServerFn } from '@tanstack/react-start'
import { getStore } from '@netlify/blobs'

const ADMIN_PASSWORD = 'DeepakAdmin123*'

export type ClassLogEntry = {
  id: string
  studentName: string
  lessonLabel: string
  date: string
  materialCovered: string
  createdAt: string
}

function requireAuth(password: string) {
  if (password !== ADMIN_PASSWORD) {
    throw new Error('Unauthorized')
  }
}

function store() {
  return getStore({ name: 'class-register', consistency: 'strong' })
}

async function readStudents(): Promise<string[]> {
  const data = await store().get('students', { type: 'json' })
  return Array.isArray(data) ? (data as string[]) : []
}

async function readEntries(): Promise<ClassLogEntry[]> {
  const data = await store().get('entries', { type: 'json' })
  return Array.isArray(data) ? (data as ClassLogEntry[]) : []
}

export const getRegisterData = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    requireAuth(data.password)
    const [students, entries] = await Promise.all([readStudents(), readEntries()])
    return {
      students: students.sort((a, b) => a.localeCompare(b)),
      entries: entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    }
  })

export const addStudent = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string; name: string }) => data)
  .handler(async ({ data }) => {
    requireAuth(data.password)
    const name = data.name.trim()
    if (!name) throw new Error('Student name cannot be empty.')

    const students = await readStudents()
    if (students.some((s) => s.toLowerCase() === name.toLowerCase())) {
      throw new Error('That student already exists.')
    }
    students.push(name)
    await store().setJSON('students', students)
    return { students: students.sort((a, b) => a.localeCompare(b)) }
  })

export const deleteStudent = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string; name: string }) => data)
  .handler(async ({ data }) => {
    requireAuth(data.password)
    const students = (await readStudents()).filter((s) => s !== data.name)
    await store().setJSON('students', students)
    return { students: students.sort((a, b) => a.localeCompare(b)) }
  })

export const addClassLog = createServerFn({ method: 'POST' })
  .inputValidator(
    (data: { password: string; studentName: string; lessonLabel: string; date: string; materialCovered: string }) =>
      data,
  )
  .handler(async ({ data }) => {
    requireAuth(data.password)
    const studentName = data.studentName.trim()
    if (!studentName) throw new Error('Student is required.')
    if (!data.date) throw new Error('Date is required.')

    const entry: ClassLogEntry = {
      id: crypto.randomUUID(),
      studentName,
      lessonLabel: data.lessonLabel.trim(),
      date: data.date,
      materialCovered: data.materialCovered.trim(),
      createdAt: new Date().toISOString(),
    }

    const entries = await readEntries()
    entries.push(entry)
    await store().setJSON('entries', entries)

    // Auto-add the student to the roster if they're new.
    const students = await readStudents()
    if (!students.some((s) => s.toLowerCase() === studentName.toLowerCase())) {
      students.push(studentName)
      await store().setJSON('students', students)
    }

    return { entry }
  })

export const deleteClassLog = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string; entryId: string }) => data)
  .handler(async ({ data }) => {
    requireAuth(data.password)
    const entries = (await readEntries()).filter((e) => e.id !== data.entryId)
    await store().setJSON('entries', entries)
    return { success: true }
  })
