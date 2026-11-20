export const locales = ["uz", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const pages = ["biography", "academic", "projects", "public-life", "media"] as const;
export type Page = (typeof pages)[number];

type Project = { title: string; category: string; status: string; description: string; details: string[]; href?: string; website?: string };
type Data = {
  nav: [string,string,string,string,string,string]; k: string; meta:string; homeOverline:string;
  heroLead:string; heroSub:string; introductionTitle:string; introductionText:string;
  homeClosing:string; navLabel:string; section:string; year:string; city:string; openSource:string;
  bioTitle:string; bioSubtitle:string; bioOverline:string; officialParagraphs:string[];
  biographyFacts:{label:string;value:string}[]; sourceLabel:string;
  academicTitle:string; academicSubtitle:string; schoolTitle:string; schoolBody:string;
  admissionLabel:string; admissionBody:string; scoresTitle:string; scoreNote:string;
  certTitle:string; certBody:string; pending:string;
  projectsTitle:string; projectsSubtitle:string; projects:Project[];
  lifeTitle:string;lifeSubtitle:string; sportsTitle:string;sportsIntro:string;
  sports:[string,string,string]; sportsNote:string; initiativeTitle:string; initiativeBody:string;
  sourceTitle:string; sourceDesc:string; readingTime:string;
};
export const profile: Record<Locale, Data> = {
  uz: {
    nav:["Bosh sahifa","Tarjimai hol","Ta’lim","Loyihalar","Faoliyat","OAV"], k:"MUSTAQIL SHAXSIY NASHR",
    meta:"Mirodil Hayitov — dasturchi va sun’iy intellekt sohasida izlanuvchi. Tarjimai holi, ta’limi, texnologik loyihalari va faoliyati.",
    homeOverline:"SHAXSIY ARXIV / TOSHKENT · O‘ZBEKISTON",
    heroLead:"Bilim, izlanish va yaratilayotgan g‘oyalar tarixi.",
    heroSub:"Dasturlash · Sun’iy intellekt · Ta’lim · Til texnologiyalari",
    introductionTitle:"Bir yo‘nalish bilan cheklanmagan faoliyat.",
    introductionText:"Mirodil Hayitov — Toshkentda tug‘ilgan yosh full-stack dasturchi va sun’iy intellekt sohasida izlanuvchi. Uning faoliyati dasturiy mahsulotlar yaratish, o‘zbek tilini raqamlashtirish va ta’limga oid tashabbuslarni qamrab oladi.",
    homeClosing:"Ushbu mustaqil sayt uning tarjimai holi va faoliyatiga oid ma’lumotlarni izchil jamlaydi.",
    navLabel:"SAHIFALAR", section:"BO‘LIM",year:"2026",city:"Toshkent, O‘zbekiston",openSource:"Manbaga o‘tish",
    bioTitle:"МИРОДИЛ ҲАЙИТОВ",bioSubtitle:"Расмий услубдаги шахсий биография",bioOverline:"TARJIMAI HOL / ASOSIY MATN",
    officialParagraphs:[
      "Миродил Ҳайитов Тошкент шаҳрида туғилган. Ёш full-stack дастурчи ва сунъий интеллект соҳасида изланувчи.",
      "У Тошкент шаҳри Юнусобод туманидаги 246-сонли умумтаълим мактабида таҳсил олган. 2026 йилда Жаҳон иқтисодиёти ва дипломатия университети қошидаги академик лицейига 142,7 бал билан қабул қилинган.",
      "Миродил ахборот технологиялари, дастурлаш ва сунъий интеллект соҳаларида фаолият юритиб, бир қатор веб-сайтлар, дастурлар ва рақамли платформалар яратган. Унинг асосий ишланмаларидан бири — TAHRIR AI, ҳужжатлардаги имловий хатоларни аниқлаш ва матнларни таҳрирлашга мўлжалланган сунъий интеллект платформасидир.",
      "Шунингдек, у ўзбек тили ва адабиётини рақамлаштиришга қаратилган технологик лойиҳалар устида изланишлар олиб боради масалан Boburnoma Parallel Korpusi.",
      "Миродил шахмат, карате ва бокс билан шуғулланган ҳамда ушбу спорт турлари бўйича шаҳар ва республика миқёсидаги мусобақаларда ғолибликка эришган."
    ],
    biographyFacts:[{label:"Tug‘ilgan shahar",value:"Toshkent"},{label:"Ta’lim",value:"UWED akademik litseyi"},{label:"Qabul",value:"2026 · 142,7 ball"}],
    sourceLabel:"Biografiya sayt egasi taqdim etgan ma’lumotlar asosida yozilgan.",
    academicTitle:"Ta’lim va natijalar",academicSubtitle:"Maktab davridan akademik litseygacha bo‘lgan yo‘l.",
    schoolTitle:"246-sonli umumta’lim maktabi",schoolBody:"Mirodil Toshkent shahri Yunusobod tumanidagi 246-sonli umumta’lim maktabida tahsil olgan. Keyinchalik oliy o‘quv yurtiga qarashli akademik litseyda o‘qishni davom ettirgan.",
    admissionLabel:"AKADEMIK LITSEYGA QABUL",admissionBody:"2026-yilda Jahon iqtisodiyoti va diplomatiya universiteti qoshidagi akademik litseyga 142,7 ball bilan qabul qilingan (shaxsiy biografiyaga ko‘ra).",
    scoresTitle:"Imtihonlar va sertifikatlar",scoreNote:"SAT — 1440, IELTS — 6.5, matematika bo‘yicha Milliy sertifikat — B. Natijalar sayt egasi tomonidan bildirilgan, hujjatlar hozircha e’lon qilinmagan.",
    certTitle:"Hujjatlar arxivi",certBody:"Sertifikatlar shaxsiy raqamlar va QR-kodlar yashirilgach joylanadi.",
    pending:"Hujjat tasvirlari keyinroq qo‘shiladi.",
    projectsTitle:"Loyihalar va ishlanmalar",projectsSubtitle:"Yaratilgan texnologiyalar va davom etayotgan izlanishlar.",
    projects:[
      {title:"TAHRIR AI",category:"SUN’IY INTELLEKT · TIL TEXNOLOGIYALARI",status:"Ishlab chiqilgan loyiha",description:"Hujjatlardagi imloviy xatolarni aniqlash va o‘zbek tilidagi matnlarni tahrirlashga mo‘ljallangan sun’iy intellekt platformasi.",details:["O‘zbek tilidagi matnlar bilan ishlash","DOCX hujjatlarini tekshirish","Ochiq frontend repozitoriyasi"],href:"https://github.com/Mirodiluser/frontend",website:"https://tahrirai.uz"},
      {title:"Boburnoma Parallel Korpusi",category:"O‘ZBEK TILI VA ADABIYOTI",status:"Ilmiy-texnologik izlanish",description:"O‘zbek tili va adabiyotini raqamlashtirish yo‘nalishidagi izlanish. Boburnoma asari va parallel matnlar bilan ishlashga doir konsepsiya.",details:["Matnlarni raqamli shaklda o‘rganish","Parallel korpus g‘oyasi","Izlanish jarayoni"]},
      {title:"UWED AI",category:"TA’LIM TEXNOLOGIYALARI",status:"Norasmiy prototip",description:"Akademik litsey uchun ishlab chiqilayotgan shaxsiy, norasmiy raqamli ta’lim konsepsiyasi. Litseyning rasmiy mahsuloti emas.",details:["Ta’limga qaratilgan foydalanuvchi muhiti","Ichki sinov bosqichi","Rasmiy tizimga ulanmagan"]},
    ],
    lifeTitle:"Faoliyat va qiziqishlar",lifeSubtitle:"Texnologiyadan tashqaridagi tajriba va ishtirok.",
    sportsTitle:"Intellektual va sport yutuqlari",sportsIntro:"Mirodil shahmat, karate va boks bilan shug‘ullangan. Uning biografiyasiga ko‘ra, shahar va respublika miqyosidagi musobaqalarda g‘olib bo‘lgan.",
    sports:["Shaxmat","Karate","Boks"],sportsNote:"Musobaqalar sanasi va natijalarni tasdiqlovchi hujjatlar keyinroq qo‘shiladi.",
    initiativeTitle:"Nuriyat Ilmi vitse-prezidenti",initiativeBody:"Sayt egasining ma’lumotiga ko‘ra, Mirodil ALUWED akademik litseyidagi «Nuriyat Ilmi» partiyasining vitse-prezidenti bo‘lib, litseydagi turli tadbirlar, ta’limiy tashabbuslar va jamoat ishlarida faol qatnashadi. Bu universitetning rasmiy vakilligi degani emas.",
    sourceTitle:"Ma’lumot manbalari",sourceDesc:"Shaxsiy biografiya sayt egasi tomonidan taqdim etilgan; tashqi manbalar alohida keltiriladi.",
    readingTime:"SHAXSIY HUJJATLAR OCHIQ E’LON QILINMAGAN",
  },
  ru: {
    nav:["Главная","Биография","Образование","Проекты","Деятельность","СМИ"],k:"НЕЗАВИСИМОЕ ПЕРСОНАЛЬНОЕ ИЗДАНИЕ",
    meta:"Миродил Хайитов — молодой разработчик и исследователь искусственного интеллекта. Биография, образование, технологии и достижения.",
    homeOverline:"ЛИЧНЫЙ АРХИВ / ТАШКЕНТ · УЗБЕКИСТАН",
    heroLead:"История знаний, исследований и реализованных идей.",
    heroSub:"Разработка · Искусственный интеллект · Образование · Языковые технологии",
    introductionTitle:"За пределами одного направления.",
    introductionText:"Миродил Хайитов — молодой full-stack разработчик и исследователь искусственного интеллекта, родившийся в Ташкенте. Его интересы объединяют программные продукты, цифровые технологии узбекского языка и образовательные инициативы.",
    homeClosing:"Независимый персональный сайт, посвящённый его биографии и профессиональному развитию.",
    navLabel:"РАЗДЕЛЫ",section:"ГЛАВА",year:"2026",city:"Ташкент, Узбекистан",openSource:"Открыть источник",
    bioTitle:"МИРОДИЛ ХАЙИТОВ",bioSubtitle:"Официальная биографическая справка",bioOverline:"БИОГРАФИЯ / ОСНОВНОЙ ТЕКСТ",
    officialParagraphs:[
      "Миродил Хайитов родился в Ташкенте. Молодой full-stack разработчик и исследователь в области искусственного интеллекта.",
      "Обучался в общеобразовательной школе № 246 Юнусабадского района города Ташкента. В 2026 году поступил в Академический лицей при Университете мировой экономики и дипломатии, набрав 142,7 балла.",
      "Миродил занимается информационными технологиями, программированием и искусственным интеллектом. Он разработал ряд веб-сайтов, программ и цифровых платформ. Одна из его основных разработок — TAHRIR AI, платформа на основе искусственного интеллекта для выявления орфографических ошибок в документах и редактирования текстов.",
      "Также он исследует возможности цифровизации узбекского языка и литературы, в том числе в рамках проекта Boburnoma Parallel Korpusi.",
      "Миродил занимался шахматами, карате и боксом и, согласно представленной им биографии, побеждал на городских и республиканских соревнованиях по этим видам спорта."
    ],
    biographyFacts:[{label:"Место рождения",value:"Ташкент"},{label:"Образование",value:"Академический лицей UWED"},{label:"Поступление",value:"2026 · 142,7 балла"}],
    sourceLabel:"Биография подготовлена на основе сведений, предоставленных владельцем сайта.",
    academicTitle:"Образование и результаты",academicSubtitle:"Путь от общеобразовательной школы до академического лицея.",
    schoolTitle:"Общеобразовательная школа № 246",schoolBody:"Миродил учился в школе № 246 Юнусабадского района Ташкента. Затем продолжил обучение в академическом лицее при Университете мировой экономики и дипломатии.",
    admissionLabel:"ПОСТУПЛЕНИЕ В АКАДЕМИЧЕСКИЙ ЛИЦЕЙ",admissionBody:"В 2026 году поступил в Академический лицей UWED с результатом 142,7 балла (по личной биографии).",
    scoresTitle:"Экзамены и сертификаты",scoreNote:"SAT — 1440, IELTS — 6.5, национальный сертификат по математике — B. Результаты сообщены владельцем сайта; подтверждающие документы ещё не опубликованы.",
    certTitle:"Архив документов",certBody:"Изображения сертификатов будут добавлены после скрытия регистрационных номеров и QR-кодов.",
    pending:"Изображения сертификатов пока не опубликованы.",
    projectsTitle:"Проекты и разработки",projectsSubtitle:"Программные решения и продолжающиеся исследования.",
    projects:[
      {title:"TAHRIR AI",category:"ИИ · ЯЗЫКОВЫЕ ТЕХНОЛОГИИ",status:"Разработка",description:"Платформа на основе искусственного интеллекта для поиска орфографических ошибок в документах и редактирования текстов на узбекском языке.",details:["Работа с текстами на узбекском языке","Проверка DOCX-документов","Публичный GitHub-репозиторий фронтенда"],href:"https://github.com/Mirodiluser/frontend",website:"https://tahrirai.uz"},
      {title:"Boburnoma Parallel Korpusi",category:"УЗБЕКСКИЙ ЯЗЫК И ЛИТЕРАТУРА",status:"Исследовательский проект",description:"Исследование цифровизации узбекского языка и литературы, включая идею параллельного корпуса текстов, связанных с «Бабур-наме».",details:["Цифровизация литературных текстов","Концепция параллельного корпуса","Исследовательская стадия"]},
      {title:"UWED AI",category:"ОБРАЗОВАТЕЛЬНЫЕ ТЕХНОЛОГИИ",status:"Неофициальный прототип",description:"Личный экспериментальный проект образовательной цифровой среды для лицея. Не является официальной платформой UWED.",details:["Образовательный интерфейс","Закрытое тестирование","Без доступа к официальным данным лицея"]},
    ],
    lifeTitle:"Деятельность и интересы",lifeSubtitle:"Опыт за пределами разработки программного обеспечения.",
    sportsTitle:"Интеллектуальный спорт и единоборства",sportsIntro:"Миродил занимался шахматами, карате и боксом. Согласно предоставленной биографии, он становился победителем городских и республиканских соревнований.",
    sports:["Шахматы","Карате","Бокс"],sportsNote:"Даты, названия соревнований и подтверждающие документы будут добавлены позднее.",
    initiativeTitle:"Вице-президент Nuriyat Ilmi",initiativeBody:"По информации владельца сайта, Миродил занимает должность вице-президента лицейской партии ALUWED «Nuriyat Ilmi», которая активно участвует в организации мероприятий, образовательных инициатив и общественной жизни лицея. Это независимая ученическая деятельность, а не официальная позиция университета.",
    sourceTitle:"Источники",sourceDesc:"Личные факты предоставлены владельцем; внешние источники указываются отдельно.",
    readingTime:"ЛИЧНЫЕ НОМЕРА ДОКУМЕНТОВ НЕ ПУБЛИКУЮТСЯ",
  },
  en: {
    nav:["Home","Biography","Education","Projects","Activities","Media"],k:"INDEPENDENT PERSONAL PUBLICATION",
    meta:"Mirodil Hayitov — young developer and AI researcher. Official biography, education, technology projects and activities.",
    homeOverline:"PERSONAL ARCHIVE / TASHKENT · UZBEKISTAN",
    heroLead:"A story of learning, inquiry and ideas taking shape.",
    heroSub:"Software · Artificial Intelligence · Education · Language Technology",
    introductionTitle:"An identity beyond a single project.",
    introductionText:"Born in Tashkent, Mirodil Hayitov is a young full-stack developer and researcher exploring artificial intelligence. His work spans digital products, Uzbek-language technology and educational initiatives.",
    homeClosing:"An independent, evolving record of his biography, work and development.",
    navLabel:"CONTENTS",section:"CHAPTER",year:"2026",city:"Tashkent, Uzbekistan",openSource:"View source",
    bioTitle:"MIRODIL HAYITOV",bioSubtitle:"Official-style biographical profile",bioOverline:"BIOGRAPHY / MAIN TEXT",
    officialParagraphs:[
      "Mirodil Hayitov was born in Tashkent. He is a young full-stack developer and researcher in the field of artificial intelligence.",
      "He studied at General Education School No. 246 in the Yunusabad district of Tashkent. In 2026, he was admitted to the Academic Lyceum of the University of World Economy and Diplomacy with an entrance score of 142.7.",
      "Mirodil works in information technology, software development and artificial intelligence. He has created a number of websites, applications and digital platforms. One of his main projects is TAHRIR AI, an AI-powered platform designed to identify spelling errors in documents and help edit written texts.",
      "He also explores technologies for digitizing Uzbek language and literature, including the Boburnoma Parallel Korpusi project.",
      "Mirodil has practiced chess, karate and boxing and, according to his supplied biography, has won city-level and national competitions in these sports."
    ],
    biographyFacts:[{label:"Born in",value:"Tashkent"},{label:"Education",value:"Academic Lyceum of UWED"},{label:"Admission",value:"2026 · 142.7 points"}],
    sourceLabel:"This biographical profile is based on information supplied by its subject.",
    academicTitle:"Education & academic record",academicSubtitle:"From secondary school to academic lyceum.",
    schoolTitle:"General Education School No. 246",schoolBody:"Mirodil attended General Education School No. 246 in the Yunusabad district of Tashkent before continuing his education at the Academic Lyceum of UWED.",
    admissionLabel:"ACADEMIC LYCEUM ADMISSION",admissionBody:"Admitted to the Academic Lyceum of UWED in 2026 with an entrance score of 142.7 points (as reported in his biography).",
    scoresTitle:"Examinations & certificates",scoreNote:"SAT 1440, IELTS 6.5, and grade B on Uzbekistan’s Mathematics National Certificate. Results have been reported by the subject; supporting documents have not yet been published.",
    certTitle:"Certificate archive",certBody:"Scans will be added after registration numbers, QR codes and other personal identifiers are concealed.",
    pending:"Certificate scans are not yet available.",
    projectsTitle:"Projects & development",projectsSubtitle:"Digital products and ongoing research.",
    projects:[
      {title:"TAHRIR AI",category:"ARTIFICIAL INTELLIGENCE · LANGUAGE",status:"Developed project",description:"An AI-powered platform for identifying spelling mistakes in documents and assisting with the editing of Uzbek-language texts.",details:["Uzbek-language writing tools","DOCX document processing","Public frontend repository"],href:"https://github.com/Mirodiluser/frontend",website:"https://tahrirai.uz"},
      {title:"Boburnoma Parallel Korpusi",category:"UZBEK LANGUAGE & LITERATURE",status:"Research exploration",description:"An exploration of digitizing Uzbek literature, including the concept of a parallel text corpus connected with the Baburnama.",details:["Literary text digitization","Parallel corpus concept","Exploratory stage"]},
      {title:"UWED AI",category:"EDUCATION TECHNOLOGY",status:"Unofficial prototype",description:"A privately developed experimental concept for a digital student environment. It is not an official UWED product.",details:["Learning-focused interface","Private prototype","No access to official school records"]},
    ],
    lifeTitle:"Activities & interests",lifeSubtitle:"Experience beyond software development.",
    sportsTitle:"Intellectual sports & martial arts",sportsIntro:"Mirodil has practiced chess, karate and boxing. According to his biography, he has won city-level and national competitions in these disciplines.",
    sports:["Chess","Karate","Boxing"],sportsNote:"Competition names, dates and supporting documentation will be added when available.",
    initiativeTitle:"Vice President · Nuriyat Ilmi",initiativeBody:"According to the subject, Mirodil serves as vice president of the ALUWED lyceum student party «Nuriyat Ilmi», which takes an active role in organizing student events, educational initiatives and community activities. This is not an official university position.",
    sourceTitle:"Sources & notes",sourceDesc:"Personal details were supplied by the subject; public sources are identified separately.",
    readingTime:"PRIVATE CERTIFICATE IDENTIFIERS ARE NOT DISPLAYED",
  },
};

export const examRecords = [{label:"SAT",value:"1440"},{label:"IELTS",value:"6.5"},{label:"MATH",value:"B"}] as const;
export const sourceLinks=[{name:"UWED · Academic Lyceum",href:"https://www.uwed.uz/en/pages/lyceum-6"},{name:"GitHub · Mirodiluser",href:"https://github.com/Mirodiluser"},{name:"Tahrir AI · Frontend",href:"https://github.com/Mirodiluser/frontend"}] as const;
