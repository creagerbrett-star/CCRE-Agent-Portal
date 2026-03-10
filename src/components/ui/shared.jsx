import { G, statusColor } from '../../constants/theme.js';

export const Av = ({initials, size=36, color}) => {
  const isImg = initials && (initials.startsWith("data:") || initials.startsWith("http"));
  return isImg
    ? <img src={initials} alt="avatar" style={{width:size,height:size,borderRadius:"50%",objectFit:"cover",flexShrink:0}}/>
    : <div style={{width:size,height:size,borderRadius:"50%",background:color||G.copper,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <span style={{color:"#fff",fontWeight:700,fontSize:size*0.36,fontFamily:G.font}}>{initials||"?"}</span>
      </div>;
};

export const Badge = ({status}) => <span style={{fontFamily:G.font,fontSize:10,fontWeight:600,letterSpacing:"0.06em",padding:"3px 10px",borderRadius:20,background:statusColor[status]?.bg,color:statusColor[status]?.text,display:"inline-block"}}>{status?.toUpperCase()}</span>;

export const Lbl = ({children}) => <div style={{fontFamily:G.font,fontSize:10,fontWeight:600,letterSpacing:"0.1em",color:G.muted,marginBottom:6,textTransform:"uppercase"}}>{children}</div>;

export const SC = ({label,value,sub,accent,count}) => (
  <div style={{background:G.surface,border:`1px solid ${G.border}`,borderRadius:12,padding:"20px 22px",transition:"box-shadow 0.2s,transform 0.2s",position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:accent||G.copper,borderRadius:"12px 12px 0 0"}}/>
    <div style={{fontFamily:G.font,fontSize:13,fontWeight:600,color:G.muted,marginBottom:4,marginTop:4}}>{label}</div>
    <div style={{fontFamily:G.font,fontSize:28,fontWeight:700,color:G.text,lineHeight:1}}>{value}</div>
    {sub && <p style={{fontSize:12,color:G.muted,marginTop:4}}>{sub}</p>}
    {count!=null && <p style={{fontSize:12,color:G.muted,marginTop:4}}>{count}</p>}
  </div>
);

export const PH = ({title,sub}) => (
  <div style={{marginBottom:28}}>
    <h1 style={{fontFamily:G.font,fontSize:22,fontWeight:700,color:G.text}}>{title}</h1>
    {sub && <p style={{fontFamily:G.font,fontSize:14,color:G.muted,marginTop:4}}>{sub}</p>}
  </div>
);

export const Card = ({children,style}) => <div style={{background:G.surface,border:`1px solid ${G.border}`,borderRadius:12,...style}}>{children}</div>;

export const Tbl = ({headers,children}) => (
  <Card>
    <table style={{width:"100%",borderCollapse:"collapse"}}>
      <thead><tr>{headers.map((h,i)=><th key={i} style={{padding:"10px 16px",textAlign:"left",fontSize:12,fontWeight:600,color:G.muted,borderBottom:`1px solid ${G.border}`}}>{h}</th>)}</tr></thead>
      <tbody>{children}</tbody>
    </table>
  </Card>
);

export const Td = ({children,navy,muted,bold}) => <td style={{padding:"14px 20px",fontFamily:G.font,fontSize:13,color:navy?G.navy:muted?G.muted:G.text,fontWeight:bold?600:400}}>{children}</td>;

export const SegTabs = ({tabs, active, setActive, style={}}) => (
  <div style={{display:"flex",gap:0,background:G.surface2,borderRadius:10,padding:4,width:"fit-content",...style}}>
    {tabs.map(t=>{
      const on = active===t.id;
      return (
        <button key={t.id} onClick={()=>setActive(t.id)}
          style={{padding:"6px 16px",borderRadius:7,border:"none",cursor:"pointer",fontSize:13,fontWeight:600,
            background:on?G.surface:"transparent",
            color:on?G.text:G.muted,
            boxShadow:on?"0 1px 3px rgba(0,0,0,0.1)":"none",
            transition:"all 0.15s"}}>
          {t.label}{t.count!=null&&<span style={{marginLeft:4,fontSize:11,color:on?"#fff":G.muted}}>{t.count}</span>}
        </button>
      );
    })}
  </div>
);

export const Tog = ({on,onClick}) => (
  <div onClick={onClick} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:8}}>
    <div style={{width:36,height:20,borderRadius:10,background:on?G.copper:G.dim,position:"relative",transition:"background 0.2s"}}>
      <div style={{position:"absolute",top:2,left:on?16:2,width:16,height:16,borderRadius:8,background:"#fff",transition:"left 0.2s"}}/>
    </div>
  </div>
);
