export const languages = ["en","ru","uz"] as const;
export type Lang = typeof languages[number];
export const sections = ["biography","academic","projects","public-life"] as const;
export type Section = typeof sections[number];
export const records = [{key:"SAT",value:"1440"},{key:"IELTS",value:"6.5"},{key:"MATH",value:"B"}] as const;
export const dictionary = {
  en: {
    nav:["Biography","Academic record","Projects","Public life"],
    languages:"Language",meta:"The independent personal archive of Mirodil Hayitov: education, academic results, software projects and initiatives.",
    topline:"THE PERSONAL ARCHIVE",edition:"EST. 2026 · UZBEKISTAN",
    eyebrow:"A DOCUMENTED JOURNEY",first:"Mirodil",last:"Hayitov",
    hero:"A personal record of curiosity, education and the pursuit of ideas.",
    heronote:"Not a portfolio of appearances. A record of the work, learning and initiatives behind a developing story.",
    scroll:"SCROLL TO EXPLORE", number:"01 / THE PROFILE",aboutTitle:"The person behind the work.",
    about:"A student and software developer in Uzbekistan, studying at the Academic Lyceum of UWED. His interests span language technology, artificial intelligence, education and student-led initiatives.",
    biographyLink:"Read the biography",
    measure:"02 / ACADEMIC RECORD",measureTitle:"An academic foundation.",
    measureNote:"Self-reported exam results; supporting documents will appear here only after verification and redaction.",
    fullAcademic:"Academic record and certificates", reported:"REPORTED RESULT",
    work:"03 / SELECTED WORK",workTitle:"Ideas, developed into systems.",
    projectDescriptions:["Uzbek-language writing assistance and text review.","A digital learning ecosystem currently being developed.","Student-led educational and cultural initiatives."],
    fullProjects:"Explore the projects",
    closing:"04 / BEYOND TECHNOLOGY",closingTitle:"A wider story is being written.",
    closingText:"Education, collaboration and public initiatives form the other side of the archive. Publications will be added only when original sources can be verified.",
    fullPublic:"Public initiatives & media",footerNote:"An independent personal website. Not affiliated with or endorsed by any educational institution.",
    source:"Sources and documents will be added after verification.", home:"Overview",chapter:"CHAPTER",back:"Back to overview",archive:"THE ARCHIVE",next:"Further records",
    detail:{
      biography:{heading:"A biography in progress.",intro:"A biographical record of education, technical interests and personal development.",paras:["Mirodil Hayitov is a student and software developer from Uzbekistan. He studies at the Academic Lyceum of the University of World Economy and Diplomacy (UWED).","His work brings together software development, artificial intelligence, Uzbek-language technology and practical educational tools.","This biography is intentionally focused on public work and academic milestones; it does not disclose private identity documents, contact details or a personal portrait."],blocks:[["Education","Academic Lyceum of UWED · Uzbekistan"],["Areas of interest","Software engineering · Artificial intelligence · Language technology"],["Current chapter","2026 · Projects and educational initiatives"]]},
      academic:{heading:"The academic record.",intro:"Selected examination outcomes and qualifications, documented with care.",paras:["Reported results: SAT 1440; IELTS overall band 6.5; Mathematics National Certificate grade B.","Certificates and awarding information will be displayed when the original records have been reviewed and sensitive details removed.","Competition results and additional honours will be listed only with accurate dates and supporting evidence."],blocks:[["SAT","1440 · reported score"],["IELTS","6.5 · reported overall band"],["National Certificate","Mathematics · B · reported grade"]]},
      projects:{heading:"Work with a purpose.",intro:"Software and educational projects at different stages of development.",paras:["Tahrir AI focuses on helping people review and improve written Uzbek text.","UWED AI is an educational digital ecosystem under active development. Its scope and features may evolve.","Projects are documented by their objectives, development status and public releases rather than inflated claims."],blocks:[["Tahrir AI","Uzbek language technology · software product"],["UWED AI","Educational ecosystem · in development"],["Further work","New case studies will be added when released"]]},
      "public-life":{heading:"Beyond the screen.",intro:"Initiatives, collaboration and a carefully sourced public record.",paras:["Participation in Nuriyat Ilmi, a student initiative at the Academic Lyceum of UWED, includes educational and cultural activities.","Events and individual contributions will be documented when there are appropriate public references.","A reported Uzbekistan 24 appearance is not presented as a verified media publication until an original link is available."],blocks:[["Nuriyat Ilmi","Student initiative · academic and cultural activities"],["Press archive","Original coverage and interviews · awaiting sourced entries"],["Timeline","A chronology of confirmed public milestones"]]}
    }
  },
  ru: {
    nav:["Биография","Академические результаты","Проекты","Общественная деятельность"],
    languages:"Язык",meta:"Независимый персональный архив Миродила Хайитова: образование, экзамены, технологические проекты и инициативы.",
    topline:"ПЕРСОНАЛЬНЫЙ АРХИВ",edition:"ОСН. 2026 · УЗБЕКИСТАН",
    eyebrow:"ИСТОРИЯ РАЗВИТИЯ",first:"Mirodil",last:"Hayitov",
    hero:"Личная история любознательности, образования и воплощения идей.",
    heronote:"Не портфолио фотографий, а собрание реальных работ, знаний и инициатив, из которых складывается биография.",
    scroll:"ЛИСТАЙТЕ НИЖЕ",number:"01 / О ЛИЧНОСТИ",aboutTitle:"Человек за проектами.",
    about:"Учащийся и разработчик программного обеспечения из Узбекистана. Учится в Академическом лицее UWED. Основные направления интересов — языковые технологии, искусственный интеллект, образование и инициативы учащихся.",
    biographyLink:"Читать биографию",
    measure:"02 / ОБРАЗОВАНИЕ",measureTitle:"Академическая основа.",
    measureNote:"Результаты экзаменов сообщены владельцем сайта. Документы будут добавлены после проверки и скрытия персональных данных.",
    fullAcademic:"Результаты и сертификаты",reported:"ЗАЯВЛЕННЫЙ РЕЗУЛЬТАТ",
    work:"03 / ИЗБРАННЫЕ ПРОЕКТЫ",workTitle:"Когда идеи становятся системами.",
    projectDescriptions:["Помощь в проверке и улучшении письменного узбекского языка.","Цифровая образовательная экосистема в разработке.","Образовательные и культурные инициативы учащихся."],
    fullProjects:"Изучить проекты",closing:"04 / ДРУГАЯ СТОРОНА",closingTitle:"История шире технологий.",
    closingText:"Образование, сотрудничество и общественные инициативы — важная часть этого архива. Публикации появятся только после проверки исходных материалов.",
    fullPublic:"Инициативы и публикации",footerNote:"Независимый персональный сайт. Не является официальным ресурсом образовательного учреждения.",
    source:"Источники и документы будут добавлены после проверки.",home:"Главная",chapter:"ГЛАВА",back:"На главную",archive:"АРХИВ",next:"Другие разделы",
    detail:{
      biography:{heading:"Биография в развитии.",intro:"История образования, технических интересов и личного роста.",paras:["Миродил Хайитов — учащийся и разработчик программного обеспечения из Узбекистана. Он учится в Академическом лицее Университета мировой экономики и дипломатии (UWED).","Его деятельность объединяет разработку программного обеспечения, искусственный интеллект, языковые технологии и практические инструменты для образования.","Биография посвящена открытым достижениям и учебным этапам: без публикации личных документов, контактов и портретных фотографий."],blocks:[["Образование","Академический лицей UWED · Узбекистан"],["Интересы","Разработка ПО · Искусственный интеллект · Языковые технологии"],["Текущий этап","2026 · Проекты и образовательные инициативы"]]},
      academic:{heading:"Академические результаты.",intro:"Результаты экзаменов и квалификации с вниманием к достоверности.",paras:["Заявленные результаты: SAT — 1440, IELTS — 6.5, национальный сертификат по математике — оценка B.","Фотографии сертификатов появятся после проверки оригиналов и удаления персональных номеров и кодов.","Результаты конкурсов и новые награды будут опубликованы с точными датами и подтверждающими источниками."],blocks:[["SAT","1440 · заявленный балл"],["IELTS","6.5 · заявленный общий балл"],["Национальный сертификат","Математика · B · заявленная оценка"]]},
      projects:{heading:"Работа с конкретной целью.",intro:"Технологические и образовательные проекты на разных стадиях реализации.",paras:["Tahrir AI разрабатывается для проверки и улучшения письменных текстов на узбекском языке.","UWED AI — цифровая образовательная экосистема, которая находится в разработке. Её функции могут дополняться.","Каждый проект описывается через цели, статус и фактические результаты, без преувеличений."],blocks:[["Tahrir AI","Технологии узбекского языка · программный продукт"],["UWED AI","Образовательная экосистема · в разработке"],["Другие проекты","Новые кейсы будут добавлены после публикации"]]},
      "public-life":{heading:"За пределами экрана.",intro:"Инициативы, сотрудничество и проверяемая публичная деятельность.",paras:["Участие в Nuriyat Ilmi — инициативе учащихся Академического лицея UWED — включает подготовку образовательных и культурных мероприятий.","События и личный вклад будут описаны после появления подходящих публичных подтверждений.","Интервью для Uzbekistan 24 не включено в подтверждённые публикации, пока нет прямой ссылки на оригинальный материал."],blocks:[["Nuriyat Ilmi","Инициативы учащихся · образовательная и культурная деятельность"],["Публикации","Официальные источники · подборка готовится"],["Хронология","Последовательность подтверждённых достижений"]]}
    }
  },
  uz: {
    nav:["Tarjimai hol","Akademik natijalar","Loyihalar","Jamoat faoliyati"],
    languages:"Til",meta:"Mirodil Hayitovning shaxsiy arxivi: ta’lim, imtihon natijalari, dasturiy loyihalar va tashabbuslar.",
    topline:"SHAXSIY ARXIV",edition:"2026-YILDAN · O‘ZBEKISTON",
    eyebrow:"RIVOJLANISH TARIXI",first:"Mirodil",last:"Hayitov",
    hero:"Qiziquvchanlik, ta’lim va g‘oyalarni amalga oshirish haqidagi hikoya.",
    heronote:"Suratlardan iborat portfolio emas, balki ishlar, bilim va tashabbuslarning izchil tarixi.",
    scroll:"PASTGA TUSHING",number:"01 / SHAXS HAQIDA",aboutTitle:"Loyihalar ortidagi inson.",
    about:"O‘zbekistondagi o‘quvchi va dasturiy ta’minot ishlab chiquvchisi. UWED akademik litseyida tahsil oladi. Til texnologiyalari, sun’iy intellekt, ta’lim va o‘quvchi tashabbuslariga qiziqadi.",
    biographyLink:"Tarjimai holni o‘qish",
    measure:"02 / AKADEMIK NATIJALAR",measureTitle:"Ta’lim poydevori.",
    measureNote:"Imtihon natijalari sayt egasi tomonidan bildirilgan. Hujjatlar tekshirilgach va shaxsiy ma’lumotlar yashirilgach joylanadi.",
    fullAcademic:"Natijalar va sertifikatlar",reported:"BILDIRILGAN NATIJA",
    work:"03 / TANLANGAN LOYIHALAR",workTitle:"G‘oyalar amaliy tizimga aylanganda.",
    projectDescriptions:["O‘zbekcha yozma matnni tekshirish va yaxshilash.","Ishlab chiqilayotgan raqamli ta’lim ekotizimi.","O‘quvchilarning ta’limiy va madaniy tashabbuslari."],
    fullProjects:"Loyihalarni ko‘rish",closing:"04 / TEXNOLOGIYADAN TASHQARI",closingTitle:"Bu tarix kengroq.",
    closingText:"Ta’lim, hamkorlik va jamoaviy tashabbuslar ham arxivning muhim qismidir. Maqolalar faqat asl manba tasdiqlangach joylanadi.",
    fullPublic:"Tashabbuslar va OAV",footerNote:"Mustaqil shaxsiy sayt. Hech bir ta’lim muassasasining rasmiy sayti emas.",
    source:"Manbalar va hujjatlar tekshirilgach qo‘shiladi.",home:"Asosiy sahifa",chapter:"BO‘LIM",back:"Asosiy sahifaga",archive:"ARXIV",next:"Boshqa bo‘limlar",
    detail:{
      biography:{heading:"Davom etayotgan tarjimai hol.",intro:"Ta’lim, texnologik qiziqishlar va shaxsiy rivojlanish tarixi.",paras:["Mirodil Hayitov — O‘zbekistondagi o‘quvchi va dasturiy ta’minot ishlab chiquvchisi. U Jahon iqtisodiyoti va diplomatiya universiteti (UWED) akademik litseyida tahsil oladi.","Faoliyati dasturlash, sun’iy intellekt, til texnologiyalari va ta’limga oid amaliy vositalarni birlashtiradi.","Tarjimai hol faqat ochiq natijalar va ta’lim bosqichlariga bag‘ishlangan; shaxsiy hujjatlar, aloqa ma’lumotlari yoki portretlar e’lon qilinmaydi."],blocks:[["Ta’lim","UWED akademik litseyi · O‘zbekiston"],["Qiziqishlar","Dasturlash · Sun’iy intellekt · Til texnologiyalari"],["Hozirgi bosqich","2026 · Loyihalar va ta’lim tashabbuslari"]]},
      academic:{heading:"Akademik natijalar.",intro:"Imtihon natijalari va malaka ko‘rsatkichlari.",paras:["Bildirilgan natijalar: SAT — 1440, IELTS — 6.5, matematika bo‘yicha Milliy sertifikat — B baho.","Sertifikat tasvirlari asl hujjatlar tekshirilib, shaxsiy raqamlar va kodlar yashirilgach joylanadi.","Tanlovlar va yangi mukofotlar sanalari bilan, ishonchli dalillar asosida qo‘shiladi."],blocks:[["SAT","1440 · bildirilgan ball"],["IELTS","6.5 · bildirilgan umumiy ball"],["Milliy sertifikat","Matematika · B · bildirilgan baho"]]},
      projects:{heading:"Maqsadga yo‘naltirilgan ishlar.",intro:"Turli rivojlanish bosqichidagi texnologik va ta’lim loyihalari.",paras:["Tahrir AI o‘zbekcha yozma matnlarni tekshirish va yaxshilashga qaratilgan.","UWED AI — ishlab chiqilayotgan raqamli ta’lim ekotizimi. Uning imkoniyatlari kengayishi mumkin.","Har bir loyiha maqsadi, holati va amaliy natijalari bilan tanishtiriladi."],blocks:[["Tahrir AI","O‘zbek tili texnologiyalari · dasturiy mahsulot"],["UWED AI","Ta’lim ekotizimi · ishlab chiqilmoqda"],["Keyingi ishlar","Yangi loyihalar e’lon qilingach qo‘shiladi"]]},
      "public-life":{heading:"Ekrandan tashqarida.",intro:"Tashabbuslar, hamkorlik va tasdiqlangan ommaviy faoliyat.",paras:["UWED akademik litseyidagi Nuriyat Ilmi o‘quvchi tashabbusida ishtirok etish ta’limiy va madaniy tadbirlarni qamrab oladi.","Voqealar va shaxsiy hissa ommaviy dalillar mavjud bo‘lgach batafsil yoritiladi.","Uzbekistan 24 intervyusi uchun asl manba havolasi olinmaguncha u tasdiqlangan nashr sifatida ko‘rsatilmaydi."],blocks:[["Nuriyat Ilmi","O‘quvchi tashabbuslari · ta’limiy va madaniy tadbirlar"],["OAV","Asl manbalar · to‘plam tayyorlanmoqda"],["Xronologiya","Tasdiqlangan yutuqlar ketma-ketligi"]]}
    }
  }
} as const;
