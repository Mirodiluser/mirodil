import type {Locale} from "@/lib/profile";

export type Certificate = {id:string;score:string;name:string;kind:string;tagline:string;accent:string;image:string;facts:{label:string;value:string}[]};
type CertificateCopy={title:string;description:string;disclaimer:string;archive:string;pending:string;docNote:string;marsTitle:string;marsSubtitle:string;marsDescription:string;marsPending:string;certificates:Certificate[]};
export const certifications:Record<Locale,CertificateCopy>={
 ru:{
  title:"Сертификаты и результаты",description:"Отдельные достижения с собственными показателями и обезличенными копиями документов.",
  disclaimer:"Персональные данные, фотографии и идентификаторы закрыты для конфиденциальности.",archive:"АРХИВ СЕРТИФИКАТОВ",pending:"Подготовленный документ будет добавлен",docNote:"Показаны только сведения об экзамене, без личных идентификаторов.",
  marsTitle:"MARS IT",marsSubtitle:"Full-stack development",marsDescription:"Программа Full-Stack Development завершена. Сертификат MARS IT будет добавлен в архив.",marsPending:"Место для сертификата MARS IT",
  certificates:[
  {id:"ielts",score:"6.5",name:"IELTS Academic",kind:"ENGLISH PROFICIENCY",tagline:"Английский язык · уровень B2 (указан в отчёте)",accent:"blue",image:"/media/certificate-ielts-redacted.webp",facts:[{label:"Listening",value:"7.0"},{label:"Reading",value:"6.0"},{label:"Writing",value:"6.5"},{label:"Speaking",value:"6.0"}]},
  {id:"sat",score:"1440",name:"SAT",kind:"STANDARDIZED EXAM",tagline:"Математика и академическое чтение",accent:"silver",image:"/media/certificate-sat-redacted.webp",facts:[{label:"Mathematics",value:"770 / 800"},{label:"Reading & Writing",value:"670 / 800"},{label:"Total",value:"1440 / 1600"},{label:"Percentile",value:"95th"}]},
  {id:"math",score:"B",name:"Milliy Sertifikat",kind:"MATHEMATICS",tagline:"Национальный сертификат · математика (на русском)",accent:"gold",image:"/media/certificate-math-redacted.webp",facts:[{label:"Итоговый балл",value:"55.08"},{label:"Процент",value:"84.74%"},{label:"Выдан",value:"26.03.2026"},{label:"Действует до",value:"25.03.2029"}]}
  ]
 },
 uz:{
  title:"Sertifikatlar va natijalar",description:"Har bir natija va sertifikat xavfsiz nusxa bilan alohida ko‘rsatiladi.",
  disclaimer:"Shaxsiy ma’lumotlar, suratlar va identifikatorlar maxfiylik uchun yopilgan.",archive:"SERTIFIKATLAR ARXIVI",pending:"Hujjat nusxasi keyin qo‘shiladi",docNote:"Faqat o‘quv natijalari ko‘rsatiladi, shaxsiy raqamlar yashirilgan.",
  marsTitle:"MARS IT",marsSubtitle:"Full-stack development",marsDescription:"Full-Stack Development kursi yakunlangan. MARS IT sertifikati arxivga keyin qo‘shiladi.",marsPending:"MARS IT sertifikati uchun joy",
  certificates:[
  {id:"ielts",score:"6.5",name:"IELTS Academic",kind:"INGLIZ TILI",tagline:"Ingliz tili · B2 darajasi",accent:"blue",image:"/media/certificate-ielts-redacted.webp",facts:[{label:"Listening",value:"7.0"},{label:"Reading",value:"6.0"},{label:"Writing",value:"6.5"},{label:"Speaking",value:"6.0"}]},
  {id:"sat",score:"1440",name:"SAT",kind:"XALQARO IMTIHON",tagline:"Matematika va akademik o‘qish",accent:"silver",image:"/media/certificate-sat-redacted.webp",facts:[{label:"Mathematics",value:"770 / 800"},{label:"Reading & Writing",value:"670 / 800"},{label:"Total",value:"1440 / 1600"},{label:"Percentile",value:"95th"}]},
  {id:"math",score:"B",name:"Milliy Sertifikat",kind:"MATEMATIKA",tagline:"Matematika (rus tilida)",accent:"gold",image:"/media/certificate-math-redacted.webp",facts:[{label:"Umumiy ball",value:"55.08"},{label:"Foiz",value:"84.74%"},{label:"Berilgan",value:"26.03.2026"},{label:"Amal muddati",value:"25.03.2029"}]}
  ]
 },
 en:{
  title:"Certificates & qualifications",description:"Each credential is presented with its own results and a privacy-safe document scan.",
  disclaimer:"Personal identification details and portraits have been concealed for privacy.",archive:"CERTIFICATE ARCHIVE",pending:"The document preview will be added",docNote:"Academic scores only; personal identifying numbers are hidden.",
  marsTitle:"MARS IT",marsSubtitle:"Full-stack development",marsDescription:"Full-Stack Development programme completed. The MARS IT certificate will be added to the archive.",marsPending:"Reserved space for MARS IT certificate",
  certificates:[
  {id:"ielts",score:"6.5",name:"IELTS Academic",kind:"ENGLISH PROFICIENCY",tagline:"English language · B2 as shown on report",accent:"blue",image:"/media/certificate-ielts-redacted.webp",facts:[{label:"Listening",value:"7.0"},{label:"Reading",value:"6.0"},{label:"Writing",value:"6.5"},{label:"Speaking",value:"6.0"}]},
  {id:"sat",score:"1440",name:"SAT",kind:"STANDARDIZED EXAM",tagline:"Mathematics and academic reading",accent:"silver",image:"/media/certificate-sat-redacted.webp",facts:[{label:"Mathematics",value:"770 / 800"},{label:"Reading & Writing",value:"670 / 800"},{label:"Total",value:"1440 / 1600"},{label:"Percentile",value:"95th"}]},
  {id:"math",score:"B",name:"Milliy Sertifikat",kind:"MATHEMATICS",tagline:"National Certificate · Russian-language Mathematics",accent:"gold",image:"/media/certificate-math-redacted.webp",facts:[{label:"Total score",value:"55.08"},{label:"Percentage",value:"84.74%"},{label:"Issued",value:"26.03.2026"},{label:"Valid until",value:"25.03.2029"}]}
  ]
 }
};
