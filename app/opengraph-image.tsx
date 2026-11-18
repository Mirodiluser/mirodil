import {ImageResponse} from "next/og";
export const alt="Mirodil Hayitov — Personal Archive";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){
return new ImageResponse(
<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"70px 85px",color:"#f2eee1",background:"radial-gradient(circle at 85% 20%,#393327 0%,#101613 50%,#080d0a 100%)",border:"1px solid #5c503c"}}>
<div style={{display:"flex",alignItems:"center",gap:18,color:"#c9aa78",fontSize:22,letterSpacing:5}}><div style={{width:50,height:50,border:"1px solid #c9aa78",display:"flex",alignItems:"center",justifyContent:"center",fontSize:23,letterSpacing:0}}>MH</div>PERSONAL ARCHIVE · 2026</div>
<div style={{display:"flex",flexDirection:"column",gap:0}}><div style={{fontSize:122,lineHeight:1,letterSpacing:-7,fontFamily:"Georgia"}}>Mirodil</div><div style={{fontSize:122,lineHeight:1,letterSpacing:-7,fontFamily:"Georgia",color:"#cdb184"}}>Hayitov.</div></div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"#c0b7a0",fontSize:19,letterSpacing:1}}><span>EDUCATION · TECHNOLOGY · INITIATIVES</span><span>UZBEKISTAN</span></div>
</div>,size);
}
