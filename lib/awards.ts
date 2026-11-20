import type {Locale} from "@/lib/profile";

export type Award = {
  id:"english"|"chess"|"boxing";
  title:string;
  result:string;
  level:string;
  date:string;
  summary:string;
  footnote:string;
  image:string;
  alt:string;
  accent:"sapphire"|"gold"|"copper";
};
type Copy = {
  academicKicker:string;academicHeading:string;academicIntro:string;
  sportKicker:string;sportHeading:string;sportIntro:string;
  documentationNote:string;viewImage:string;awardType:string;
  english:Award; sports:[Award,Award];
};

const imagePaths={
  english:"/media/award-english-district-2026.webp",
  chess:"/media/award-chess-spartakiad-2022.webp",
  boxing:"/media/award-boxing-tashkent-2025.webp"
};

export const awards:Record<Locale,Copy>={
  ru:{
    academicKicker:"04 / LANGUAGE ACHIEVEMENTS",
    academicHeading:"Английский язык: отдельное достижение.",
    academicIntro:"Помимо международных экзаменов, в архив включена награда за участие в районном состязании по английскому языку.",
    sportKicker:"SPORT / DOCUMENTED RESULTS",
    sportHeading:"Результаты соревнований.",
    sportIntro:"Спортивные достижения представлены отдельно от основной биографии, с оригинальными фотографиями наград и краткими архивными подписями.",
    documentationNote:"Фотографии и данные предоставлены владельцем сайта. Часть реквизитов на документах скрыта; независимая проверка наград не проводилась.",
    viewImage:"Посмотреть награду",awardType:"АРХИВНАЯ НАГРАДА",
    english:{
      id:"english",title:"The Best English School 2026",result:"III",level:"3-е место · районный этап · Юнусабад, Ташкент",
      date:"21 мая 2026",summary:"Сертификат достижения за 3-е место на районном этапе конкурса по английскому языку «The Best English School 2026».",
      footnote:"Сведения приведены по предоставленному сертификату.",
      image:imagePaths.english,alt:"Сертификат The Best English School 2026: 3-е место на районном этапе, вручён Миродилу Хайитову.",
      accent:"sapphire"
    },
    sports:[
      {
        id:"chess",title:"Шахматы",result:"I",level:"1-е место · спартакиада",date:"2022 · Яни-Курган",
        summary:"Диплом II степени за участие в спортивной спартакиаде; в рукописной записи указано I место в шахматах.",
        footnote:"Степень диплома и занятое место указаны отдельно, как в документе.",
        image:imagePaths.chess,alt:"Диплом II степени по шахматам, с рукописным указанием I места, 2022 год.",
        accent:"gold"
      },
      {
        id:"boxing",title:"Бокс",result:"III",level:"3-е место · первенство Ташкента",date:"2025 · Ташкент",
        summary:"Награда за 3-е место в соревновании по боксу, проведённом в рамках первенства города Ташкента.",
        footnote:"Название организатора на предоставленном изображении частично скрыто.",
        image:imagePaths.boxing,alt:"Диплом по боксу: III место на городском первенстве Ташкента в 2025 году.",
        accent:"copper"
      }
    ]
  },
  uz:{
    academicKicker:"04 / INGLIZ TILI YUTUQLARI",
    academicHeading:"Ingliz tili bo‘yicha yutuq.",
    academicIntro:"Xalqaro imtihonlar bilan bir qatorda, ingliz tili bo‘yicha tuman bosqichidagi tanlov natijasi ham arxivga kiritildi.",
    sportKicker:"SPORT / HUJJATLAR",
    sportHeading:"Musobaqa natijalari.",
    sportIntro:"Sport yutuqlari asosiy tarjimai holdan alohida, mukofot suratlari va izohlar bilan taqdim etiladi.",
    documentationNote:"Suratlar va ma’lumotlar sayt egasi tomonidan taqdim etilgan. Hujjatlardagi ayrim rekvizitlar yashirilgan, mustaqil tasdiqlash amalga oshirilmagan.",
    viewImage:"Hujjatni ko‘rish",awardType:"ARXIV MUKOFOTI",
    english:{
      id:"english",title:"The Best English School 2026",result:"III",level:"3-o‘rin · tuman bosqichi · Yunusobod, Toshkent",
      date:"21-may 2026",summary:"«The Best English School 2026» ingliz tili tanlovining tuman bosqichida 3-o‘rinni egallagani uchun berilgan sertifikat.",
      footnote:"Ma’lumotlar taqdim etilgan sertifikatdan olindi.",
      image:imagePaths.english,alt:"The Best English School 2026 tanlovi sertifikati, tuman bosqichida 3-o‘rin.",
      accent:"sapphire"
    },
    sports:[
      {
        id:"chess",title:"Shaxmat",result:"I",level:"1-o‘rin · spartakiada",date:"2022 · Yani-Qo‘rg‘on",
        summary:"Sport spartakiadasida ishtirok etgani uchun II darajali diplom. Qo‘lda to‘ldirilgan qismda shaxmat bo‘yicha I o‘rin ko‘rsatilgan.",
        footnote:"Diplom darajasi va egallangan o‘rin hujjatda alohida berilgan.",
        image:imagePaths.chess,alt:"2022-yilgi spartakiadada shaxmat bo‘yicha I o‘rin ko‘rsatilgan II darajali diplom.",
        accent:"gold"
      },
      {
        id:"boxing",title:"Boks",result:"III",level:"3-o‘rin · Toshkent shahar birinchiligi",date:"2025 · Toshkent",
        summary:"Toshkent shahri birinchiligi doirasida o‘tkazilgan boks musobaqasida III o‘rinni egallagani uchun berilgan mukofot.",
        footnote:"Hujjatda tashkilotchiga oid ayrim ma’lumotlar yashirilgan.",
        image:imagePaths.boxing,alt:"Toshkent shahri birinchiligi doirasidagi boks musobaqasida 3-o‘rin diplomi.",
        accent:"copper"
      }
    ]
  },
  en:{
    academicKicker:"04 / ENGLISH LANGUAGE AWARDS",
    academicHeading:"English: a separate achievement.",
    academicIntro:"Alongside international test results, the archive records a district-level English-language competition award.",
    sportKicker:"SPORT / AWARD RECORDS",
    sportHeading:"Competition results.",
    sportIntro:"Sporting achievements are displayed separately from the principal biography, with photographs and precise archival descriptions.",
    documentationNote:"Images and information are subject-provided. Some document details have been concealed; the awards have not been independently authenticated.",
    viewImage:"View award",awardType:"ARCHIVE AWARD",
    english:{
      id:"english",title:"The Best English School 2026",result:"III",level:"3rd place · district level · Yunusabad, Tashkent",
      date:"21 May 2026",summary:"Certificate of achievement for third place at the district-level English-language competition, The Best English School 2026.",
      footnote:"Details are taken from the certificate supplied by the subject.",
      image:imagePaths.english,alt:"The Best English School 2026 certificate showing third place at district level.",
      accent:"sapphire"
    },
    sports:[
      {
        id:"chess",title:"Chess",result:"I",level:"1st place · Spartakiad",date:"2022 · Yani-Kurgan",
        summary:"A second-degree diploma from a sports Spartakiad; the handwritten entry records first place in chess.",
        footnote:"Diploma classification and competition placement are distinct fields on the source image.",
        image:imagePaths.chess,alt:"Second-degree diploma with a handwritten first-place result in chess, 2022.",
        accent:"gold"
      },
      {
        id:"boxing",title:"Boxing",result:"III",level:"3rd place · Tashkent city championship",date:"2025 · Tashkent",
        summary:"Third-place award in a boxing competition held within the Tashkent city championship.",
        footnote:"Some organizer information is concealed in the supplied photograph.",
        image:imagePaths.boxing,alt:"Third-place boxing certificate from a Tashkent city championship competition, 2025.",
        accent:"copper"
      }
    ]
  }
};
