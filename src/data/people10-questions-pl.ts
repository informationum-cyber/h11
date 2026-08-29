export interface People10TranslationPl {
  id: number
  prompt: string
  options: { key: 'a' | 'b' | 'c' | 'd'; text: string }[]
  explanation: string
}

export const people10QuestionsPl: People10TranslationPl[] = [
  {
    id: 1,
    prompt:
      "Twój projekt trwa już sześć miesięcy. Podchodzi do Ciebie osoba, której wcześniej nie spotkałeś/aś, i mówi, że nie była wystarczająco zaangażowana, mimo że uważa, iż jej zespół jest silnie dotknięty zmianą. Ostrzega, że może zablokować projekt. Co zrobisz w następnej kolejności?",
    options: [
      { key: 'a', text: 'Przeprowadzić ocenę zaangażowania z tym interesariuszem' },
      { key: 'b', text: 'Dodać go do rejestru interesariuszy, uwzględniając jego wynagrodzenie i zainteresowania' },
      { key: 'c', text: 'Dodać go do rejestru interesariuszy, uwzględniając jego wpływ i oddziaływanie (impact i influence)' },
      { key: 'd', text: 'Zgłosić ryzyko dla realizacji projektu ze względu na charakter jego działań' },
    ],
    explanation:
      'Wcześniej niezidentyfikowanego interesariusza należy najpierw wpisać do rejestru interesariuszy, odnotowując jego wpływ (impact) i oddziaływanie (influence) — to podstawowy krok, zanim będzie można przeprowadzić ocenę zaangażowania, eskalować ryzyko czy planować dalsze działania. Wynagrodzenie nie jest istotną informacją w rejestrze interesariuszy, a przechodzenie od razu do zgłaszania ryzyka lub oceny zaangażowania z pominięciem właściwego zarejestrowania interesariusza pomija podstawowy pierwszy krok.',
  },
  {
    id: 2,
    prompt:
      "Kierownik projektu zauważa, że interesy interesariuszy będą ze sobą kolidować, i decyduje się użyć macierzy oceny zaangażowania interesariuszy. Macierz wskazuje wpływowego interesariusza, który jest oporny wobec zmiany. Kierownik projektu musi dostosować oczekiwania tego interesariusza. Co powinien zrobić?",
    options: [
      { key: 'a', text: 'Opracować plan zaangażowania interesariuszy' },
      { key: 'b', text: 'Przekazać (zakomunikować) plan zaangażowania interesariuszy' },
      { key: 'c', text: 'Uzyskać konsensus co do celów, spotykając się ze wszystkimi interesariuszami' },
      { key: 'd', text: 'Upewnić się, że rejestr interesariuszy jest kompletny i aktualny' },
    ],
    explanation:
      'Po zidentyfikowaniu opornego, wpływowego interesariusza za pomocą macierzy oceny, kolejnym krokiem jest opracowanie planu zaangażowania interesariuszy — dokumentu określającego strategie mające przybliżyć tego interesariusza do pożądanego poziomu zaangażowania. Przekazywanie planu, który jeszcze nie istnieje, jest przedwczesne, spotkanie ze wszystkimi interesariuszami w celu uzyskania ogólnego konsensusu pomija ukierunkowane planowanie dla tego konkretnego interesariusza, a rejestr interesariuszy jest już kompletny na tym etapie (macierz oceny powstała właśnie na jego podstawie).',
  },
  {
    id: 3,
    prompt:
      'Twój zespół projektowy jest rozproszony w różnych krajach, a problemy komunikacyjne powodują nieporozumienia. Co powinieneś/aś zrobić NAJPIERW?',
    options: [
      { key: 'a', text: 'Zastąpić zespół zdalny członkami lokalnymi' },
      { key: 'b', text: 'Przeprowadzić warsztat integracyjny (team-building), aby zwiększyć zaufanie' },
      { key: 'c', text: 'Przejrzeć i zaktualizować plan zarządzania komunikacją' },
      { key: 'd', text: 'Eskalować problem do działu HR' },
    ],
    explanation:
      'Powtarzające się nieporozumienia w rozproszonym zespole wskazują na lukę w planowaniu komunikacji — przegląd i aktualizacja planu zarządzania komunikacją odnosi się do przyczyny źródłowej. Zastąpienie członków zespołu jest drastycznym krokiem i nie naprawia samego podejścia do komunikacji, warsztat integracyjny może pomóc w budowaniu morale, ale nie usuwa bezpośrednio luki w planowaniu, a eskalacja do HR nie jest właściwą ścieżką dla problemu dotyczącego procesu komunikacji.',
  },
  {
    id: 4,
    prompt:
      'Projekt ma obecnie 8 interesariuszy. Po rozszerzeniu dołącza 4 kolejnych interesariuszy. Ile dodatkowych kanałów komunikacji zostaje utworzonych?',
    options: [
      { key: 'a', text: 'Liczba kanałów wzrasta z 28 do 55, czyli o 27 nowych kanałów' },
      { key: 'b', text: 'Liczba kanałów wzrasta z 28 do 66, czyli o 38 nowych kanałów' },
      { key: 'c', text: 'Liczba kanałów wzrasta z 36 do 66, czyli o 30 nowych kanałów' },
      { key: 'd', text: 'Liczba kanałów wzrasta z 28 do 78, czyli o 50 nowych kanałów' },
    ],
    explanation:
      'Stosując wzór n(n-1)/2: przy 8 interesariuszach liczba kanałów = 8x7/2 = 28. Po dodaniu 4 kolejnych (łącznie 12) liczba kanałów = 12x11/2 = 66. Wzrost wynosi 66 - 28 = 38 nowych kanałów.',
  },
  {
    id: 5,
    prompt:
      'Dwóch starszych programistów nie zgadza się co do architektury technicznej. Spór zaczyna szkodzić morale zespołu i tempu pracy sprintu (velocity), a oba stanowiska mają swoje uzasadnienie. Co kierownik projektu powinien zrobić NAJPIERW?',
    options: [
      { key: 'a', text: 'Eskalować sprawę do kierownika funkcjonalnego i doprowadzić do przeniesienia jednego z programistów' },
      { key: 'b', text: 'Samodzielnie podjąć decyzję o architekturze i nakazać obu programistom jej stosowanie' },
      { key: 'c', text: 'Pozwolić, by spór rozwiązał się samoistnie, ponieważ doświadczeni specjaliści sami sobie z tym poradzą' },
      { key: 'd', text: 'Moderować wspólną dyskusję, aby połączyć oba punkty widzenia w jedno rozwiązanie' },
    ],
    explanation:
      "Ponieważ oba punkty widzenia mają realne uzasadnienie, moderowanie wspólnej dyskusji w celu wypracowania wspólnego rozwiązania jest właściwym pierwszym krokiem — to tryb rozwiązywania konfliktu poprzez współpracę i wspólne rozwiązywanie problemu, preferowany przez PMI, gdy zależy nam na trwałym rozwiązaniu wysokiej jakości. Eskalacja do kierownika funkcjonalnego z przeniesieniem programisty jest krokiem zbyt drastycznym i przedwczesnym, samodzielne podjęcie decyzji o architekturze pomija wiedzę ekspercką zespołu, a pozostawienie sporu bez interwencji ignoruje realne szkody, jakie już wyrządza morale i tempu pracy zespołu.",
  },
  {
    id: 6,
    prompt:
      'Między dwoma liderami zespołów doszło do skomplikowanego, delikatnego nieporozumienia, a kierownik projektu musi upewnić się, że obaj w pełni rozumieją wypracowane rozwiązanie. Która metoda komunikacji jest NAJBARDZIEJ odpowiednia?',
    options: [
      { key: 'a', text: 'Komunikacja interaktywna, np. moderowane spotkanie na żywo' },
      { key: 'b', text: 'Komunikacja typu push, np. wysłanie szczegółowego podsumowania e-mailem' },
      { key: 'c', text: 'Komunikacja typu pull, np. artykuł opublikowany w bazie wiedzy' },
      { key: 'd', text: 'Formalna komunikacja pisemna, np. podpisana notatka służbowa' },
    ],
    explanation:
      'Komunikacja interaktywna to jedyna metoda pozwalająca kierownikowi projektu na bieżąco potwierdzić, że obie strony rzeczywiście rozumieją wypracowane rozwiązanie, ponieważ umożliwia natychmiastową dwustronną wymianę i wyjaśnianie wątpliwości. Komunikacja typu push i pull jest jednokierunkowa i nie pozwala potwierdzić wzajemnego zrozumienia, a formalna notatka pisemna dokumentuje ustalenia, ale sama w sobie nie weryfikuje ich zrozumienia tak, jak rozmowa na żywo.',
  },
  {
    id: 7,
    prompt:
      'Kierownik projektu koresponduje z organami regulacyjnymi (rządowymi) spoza organizacji w sprawie obowiązków zgodności z przepisami (compliance). Jak NAJLEPIEJ sklasyfikować ten rodzaj komunikacji?',
    options: [
      { key: 'a', text: 'Komunikacja wewnętrzna w ramach organizacji realizującej projekt' },
      { key: 'b', text: 'Komunikacja zewnętrzna ze stronami spoza organizacji' },
      { key: 'c', text: 'Komunikacja pionowa, przepływająca w górę przez poziomy nadzoru (governance)' },
      { key: 'd', text: 'Komunikacja formalna, dokumentowana na potrzeby audytu regulacyjnego' },
    ],
    explanation:
      'Organy regulacyjne znajdują się poza organizacją realizującą projekt, więc ta korespondencja z definicji jest komunikacją zewnętrzną. Nie jest to komunikacja wewnętrzna (regulator nie jest częścią organizacji), ani pionowa (ta opisuje komunikację płynącą w górę lub w dół w ramach hierarchii organizacyjnej), a choć może ona być również dokumentowana formalnie, kluczową testowaną tu cechą jest to, że odbiorca znajduje się na zewnątrz organizacji.',
  },
  {
    id: 8,
    prompt:
      'Kierowniczka projektu działa w organizacji o strukturze słabej macierzowej i nie ma formalnej władzy nad członkami zespołu. Członkowie zespołu konsekwentnie dostarczają wyniki, ponieważ ufają jej głębokiej wiedzy technicznej i osądowi. Jaki rodzaj władzy (power) wykorzystuje?',
    options: [
      { key: 'a', text: 'Władza formalna/stanowiskowa wynikająca z jej tytułu/stanowiska w organizacji' },
      { key: 'b', text: 'Władza wymuszająca (coercive), oparta na konsekwencjach za brak realizacji' },
      { key: 'c', text: 'Władza nagradzająca (reward), związana z premiami za wyniki i systemami uznania' },
      { key: 'd', text: 'Władza ekspercka (expert power), oparta na wiedzy, umiejętnościach i udowodnionych kompetencjach' },
    ],
    explanation:
      'Ponieważ nie ma formalnej władzy w słabej strukturze macierzowej, a zespół podąża za nią, bo ufa jej głębokiej wiedzy technicznej i osądowi, jest to władza ekspercka — wpływ zdobyty dzięki udowodnionej wiedzy i kompetencjom, a nie władzy formalnej, konsekwencjom czy nagrodom.',
  },
  {
    id: 9,
    prompt:
      "Kierownik projektu wdraża nowego członka zespołu z Tajlandii do globalnego zespołu Agile. Podczas pierwszego planowania sprintu nowy członek zgadza się na wszystkie szacunki zadań proponowane przez innych i nie zgłasza żadnych zastrzeżeń, nawet gdy terminy wydają się nierealistyczne. Co powinien zrobić kierownik projektu, aby uzyskać jego szczere opinie?",
    options: [
      { key: 'a', text: 'Wysyłać anonimową ankietę do całego zespołu po każdym planowaniu sprintu, aby zebrać szczere opinie na temat szacunków' },
      { key: 'b', text: 'Przydzielić nowego członka w parę z bardziej doświadczonym kolegą o podobnym tle kulturowym, aby zachęcić do otwartej dyskusji podczas planowania' },
      { key: 'c', text: 'Poprosić członka zespołu o podzielenie się wątpliwościami podczas kolejnego planowania sprintu, zwracając się do niego bezpośrednio na spotkaniu' },
      { key: 'd', text: 'Porozmawiać z nim indywidualnie, w prywatnej rozmowie "w cztery oczy", pytając o jego rzeczywisty komfort związany z szacunkami' },
    ],
    explanation:
      'Prywatna rozmowa w cztery oczy tworzy bezpieczną przestrzeń, w której członek zespołu może wyrazić prawdziwe obawy bez presji społecznej — jest to zgodne z kolektywistycznymi normami kulturowymi powszechnymi w wielu kulturach azjatyckich, gdzie unika się otwartego sprzeciwu w grupie. Anonimowa ankieta dla całego zespołu jest mniej ukierunkowana i wolniejsza, przydzielenie do pary z kolegą o podobnym tle kulturowym nie gwarantuje otwartości podczas samego spotkania planistycznego, a zwracanie się do członka indywidualnie na forum grupy odtwarza dokładnie tę samą presję społeczną, która spowodowała milczenie w pierwszej kolejności.',
  },
  {
    id: 10,
    prompt:
      'Kierownik projektu opracowuje nowe podejście do zarządzania zasobami dla zespołu hybrydowego, łączącego stałych członków z rotującymi specjalistami. Rotacja pracowników jest wysoka, a każde odejście pozostawia luki w odpowiedzialności. Co powinien zbudować kierownik, aby osiągnąć stabilność?',
    options: [
      { key: 'a', text: 'Ramy odpowiedzialności powiązane z określonymi rolami, a nie konkretnymi osobami, tak aby nowo przychodzący specjaliści automatycznie przejmowali jasno określone obowiązki' },
      { key: 'b', text: 'Rotacyjną macierz RACI, aktualizowaną za każdym razem, gdy specjalista odchodzi, zawierającą wszystkie aktualne osoby przypisane do każdego zadania projektowego' },
      { key: 'c', text: 'Sekcję karty projektu przypisującą odpowiedzialność temu starszemu członkowi zespołu, który ma najdłuższy pozostały staż w zespole' },
      { key: 'd', text: 'Szczegółowy rejestr kompetencji, mapujący każdego wskazanego z imienia specjalistę do jego umiejętności i wkładu w dotychczasowe dostarczone rezultaty' },
    ],
    explanation:
      'Odpowiedzialność oparta na rolach oddziela obowiązki od konkretnych osób, dzięki czemu nowo przychodzący specjaliści automatycznie przejmują jasno określone obowiązki po odejściu poprzednika — w środowisku o wysokiej rotacji role trwają dłużej niż ludzie. Macierz RACI, którą trzeba ręcznie przebudowywać przy każdym odejściu, nie skaluje się i łatwo w niej o luki, przypisanie odpowiedzialności osobie o najdłuższym stażu tworzy arbitralną i niestabilną zasadę, a rejestr kompetencji powiązany z konkretnymi osobami cierpi na ten sam problem rotacji, który miał rozwiązać.',
  },
]
