import {ImageResponse} from "next/og";
import {readFile} from "node:fs/promises";
import {join} from "node:path";

export const alt="Mirodil Hayitov — Personal Archive";
export const size={width:1200,height:630};
export const contentType="image/png";
export const runtime="nodejs";

export default async function Image(){
  const logo=await readFile(join(process.cwd(),"public","brand","mh-monogram.webp"));
  const logoSrc="data:image/webp;base64,"+logo.toString("base64");
  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"64px 85px",color:"#f2eee1",background:"#0a0f0c",border:"1px solid #5c503c"}}>
      <div style={{display:"flex",alignItems:"center",gap:20,color:"#c9aa78",fontSize:20,letterSpacing:4}}>
        <img src={logoSrc} width={82} height={73} alt="MH monogram" style={{objectFit:"contain"}} />
        PERSONAL ARCHIVE · 2026
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:0}}>
        <div style={{fontSize:122,lineHeight:1,letterSpacing:-7,fontFamily:"Georgia"}}>Mirodil</div>
        <div style={{fontSize:122,lineHeight:1,letterSpacing:-7,fontFamily:"Georgia",color:"#cdb184"}}>Hayitov.</div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"#c0b7a0",fontSize:19,letterSpacing:1}}>
        <span>EDUCATION · TECHNOLOGY · INITIATIVES</span><span>UZBEKISTAN</span>
      </div>
    </div>,size);
}
