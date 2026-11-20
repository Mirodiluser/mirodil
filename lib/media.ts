import type { Locale } from "@/lib/profile";

type Entry = {
  overline:string; title:string; intro:string; image:string; alt:string;
};
type MediaCopy = {
  title:string; lead:string; issue:string; issueLabel:string;
  television:string; broadcastNote:string; sourcesNote:string;
  programs:Entry[]; newspaperTitle:string; newspaperSummary:string;
  frontTitle:string; featureTitle:string; openPhoto:string; close:string;
};
export const press:Record<Locale,MediaCopy>={
  uz:{
    title:"OAV va nashrlar",lead:"Televizion suhbatlar va yosh dasturchi haqidagi gazeta nashri.",
    issue:"28-oktabr, 2026 · №31 (16737)",issueLabel:"BOSMA NASHR / ARXIV",
    television:"Televideniye",broadcastNote:"Suhbatlarning sanasi va asl video havolalari keyinroq qo‘shiladi.",
    sourcesNote:"Televizion suhbatlardan arxiv lavhalari.",
    programs:[
      {overline:"01 / O‘ZBEKISTON 24",title:"O‘zbekiston 24",intro:"Televizion suhbatga taklif etilgan mehmon sifatida yosh dasturchi o‘z izlanishlari, sun’iy intellektga qiziqishi va kelgusidagi rejalari haqida fikr bildirgan.",image:"/media/interview-ozbekiston24.jpeg",alt:"O‘zbekiston 24 uchun intervyu yozib olinayotgan jarayon: kamera, suhbatdosh va noutbuk."},
      {overline:"02 / MAHALLA",title:"Mahalla telekanali",intro:"Mahalla telekanalidagi suhbatda dasturlash, o‘z ustida ishlash, shaxsiy maqsadlar va tengdoshlariga tavsiyalar mavzulari muhokama qilingan.",image:"/media/interview-mahalla.jpg",alt:"Mahalla telekanali studiyasida ikki suhbatdosh qatnashgan teleintervyu kadri."},
    ],
    newspaperTitle:"Yoshlar Ovozi",newspaperSummary:"2026-yil 28-oktabr kungi №31 (16737) sonida «15 yoshli dasturchi» haqidagi material chop etilgan. Maqolada «Boburnoma» va zamonaviy texnologiyalar yo‘nalishidagi izlanishlar yoritilgan.",
    frontTitle:"Gazetaning birinchi sahifasi",featureTitle:"Maqola · 3-sahifa",openPhoto:"Suratni ko‘rish",close:"Yopish"
  },
  ru:{
    title:"СМИ и публикации",lead:"Телевизионные интервью и публикация о молодом разработчике в прессе.",
    issue:"28 октября 2026 · №31 (16737)",issueLabel:"ПЕЧАТНАЯ ПУБЛИКАЦИЯ / АРХИВ",
    television:"Телевизионные интервью",broadcastNote:"Точные даты эфиров и оригинальные видеозаписи можно будет добавить позднее.",
    sourcesNote:"Фотографии из архива телевизионных интервью.",
    programs:[
      {overline:"01 / O‘ZBEKISTON 24",title:"O‘zbekiston 24",intro:"В качестве приглашённого гостя Миродил рассказал о своём пути, разработках, интересе к искусственному интеллекту и целях. На фотографии — процесс записи интервью.",image:"/media/interview-ozbekiston24.jpeg",alt:"Съёмка интервью O‘zbekiston 24: видеокамера в переднем плане, интервьюируемый и собеседница за столом."},
      {overline:"02 / MAHALLA",title:"Mahalla Telekanali",intro:"В телевизионной беседе Миродил поделился опытом молодого разработчика, своими планами и советами тем, кто хочет развиваться в технологиях.",image:"/media/interview-mahalla.jpg",alt:"Кадр беседы в студии телеканала Mahalla с двумя участниками."}
    ],
    newspaperTitle:"Yoshlar Ovozi",newspaperSummary:"В выпуске №31 (16737) от 28 октября 2026 года опубликован материал «15 yoshli dasturchi». Публикация рассказывает о молодом программисте и интересе к «Бабур-наме» и современным технологиям.",
    frontTitle:"Анонс на обложке",featureTitle:"Статья · страница 3",openPhoto:"Открыть фотографию",close:"Закрыть"
  },
  en:{
    title:"Media & press",lead:"Television conversations and a newspaper feature on a young developer.",
    issue:"28 October 2026 · Issue 31 (16737)",issueLabel:"PRINT FEATURE / ARCHIVE",
    television:"Television interviews",broadcastNote:"Broadcast dates and original video links will be added when available.",
    sourcesNote:"Photographs from the television interview archive.",
    programs:[
      {overline:"01 / O‘ZBEKISTON 24",title:"O‘zbekiston 24",intro:"Invited as a guest for a television conversation, Mirodil spoke about his development work, interest in artificial intelligence, and ambitions. The photo shows the interview recording.",image:"/media/interview-ozbekiston24.jpeg",alt:"Behind-the-scenes image from an O‘zbekiston 24 interview: television camera, interviewer and guest at a table."},
      {overline:"02 / MAHALLA",title:"Mahalla TV",intro:"During a television interview, Mirodil discussed his experience as a young developer, future plans, and advice for others interested in technology.",image:"/media/interview-mahalla.jpg",alt:"Studio conversation on Mahalla television, with the two guests seated opposite one another."}
    ],
    newspaperTitle:"Yoshlar Ovozi",newspaperSummary:"The 28 October 2026 edition, issue 31 (16737), featured an article titled “15 yoshli dasturchi,” on a young programmer and his exploration of the Baburnama and modern technology.",
    frontTitle:"Front-page feature",featureTitle:"Article · page 3",openPhoto:"View photo",close:"Close"
  }
};
export const newspaperImages=[
{src:"/media/press-yoshlar-ovozi-cover.jpg",key:"frontTitle"},
{src:"/media/press-yoshlar-ovozi-feature.jpg",key:"featureTitle"}
] as const;
