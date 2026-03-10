import { G } from '../../constants/theme.js';

export const Av = ({initials, size=36, color}) => {
  const isImg = initials && (initials.startsWith("data:") || initials.startsWith("http"));
  return isImg
    ? <img src={initials} alt="avatar" style={{width:size,height:size,borderRadius:"50%",objectFit:"cover",flexShrink:0}}/>
    : <div style={{width:size,height:size,borderRadius:"50%",background:color||G.copper,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <span style={{color:"#fff",fontWeight:700,fontSize:size*0.36,fontFamily:G.font}}>{initials||"?"}</span>
      </div>;
};

export const Badge = ({label,bg,text}) => (
  <span style={{background:bg,color:text,borderRadius:999,padding:"2px 10px",fontSize:12,fontWeight:600,whiteSpace:"nowrap"}}>{label}</span>
);

export const Lbl = ({label,children}) => (
  <div style={{marginBottom:12}}>
    <p style={{fontSize:11,fontWeight:600,color:G.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4}}>{label}</p>
    <div>{children}</div>
  </div>
);

export const SC = ({label,value,sub}) => (
  <div style={{background:G.surface,border:`1px solid ${G.border}`,borderRadius:12,padding:"20px 22px",transition:"box-shadow 0.2s,transform 0.2s",position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:G.copper,borderRadius:"12px 12px 0 0"}}/>
    <div style={{fontFamily:G.font,fontSize:13,fontWeight:600,color:G.muted,marginBottom:4,marginTop:4}}>{label}</div>
    <div style={{fontFamily:G.font,fontSize:28,fontWeight:700,color:G.text,lineHeight:1}}>{value}</div>
    {sub && <p style={{fontSize:12,color:G.muted,marginTop:4}}>{sub}</p>}
  </div>
);

export const PH = ({label,value,onChange,type="text",options,disabled,min,max,step,rows}) => {
  const base = {width:"100%",padding:"8px 12px",border:`1px solid ${G.border}`,borderRadius:8,fontSize:14,fontFamily:G.font,background:disabled?G.surface2:G.surface,color:G.text,boxSizing:"border-box"};
  if (options) return (
    <select value={value} onChange={e=>onChange(e.target.value)} disabled={disabled} style={base}>
      {options.map(o=><option key={o.value??o} value={o.value??o}>{o.label??o}</option>)}
    </select>
  );
  if (rows) return <textarea value={value} onChange={e=>onChange(e.target.value)} placeholder={label} disabled={disabled} rows={rows} style={{...base,resize:"vertical"}}/>;
  return <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={label} disabled={disabled} min={min} max={max} step={step} style={base}/>;
};

export const Card = ({children,style}) => <div style={{background:G.surface,border:`1px solid ${G.border}`,borderRadius:12,...style}}>{children}</div>;

export const Tbl = ({headers,children}) => (
  <Card>
    <table style={{width:"100%",borderCollapse:"collapse"}}>
      <thead><tr>{headers.map((h,i)=><th key={i} style={{padding:"10px 16px",textAlign:"left",fontSize:12,fontWeight:600,color:G.muted,borderBottom:`1px solid ${G.border}`}}>{h}</th>)}</tr></thead>
      <tbody>{children}</tbody>
    </table>
  </Card>
);

export const Td = ({children,style}) => <td style={{padding:"12px 16px",fontSize:14,color:G.text,borderBottom:`1px solid ${G.border}`,...style}}>{children}</td>;

export const SegTabs = ({tabs,active,onChange}) => (
  <div style={{display:"flex",background:G.surface2,borderRadius:8,padding:3,gap:2,width:"fit-content"}}>
    {tabs.map(t=>(
      <button key={t.id} onClick={()=>onChange(t.id)}
        style={{padding:"6px 16px",borderRadius:6,border:"none",cursor:"pointer",fontSize:13,fontWeight:600,
          background:active===t.id?G.surface:"transparent",
          color:active===t.id?G.text:G.muted,
          boxShadow:active===t.id?"0 1px 3px rgba(0,0,0,0.1)":"none"}}>
        {t.label}{t.count!=null&&<span style={{marginLeft:4,fontSize:11,color:active===t.id?G.muted:"#fff"}}>{t.count}</span>}
      </button>
    ))}
  </div>
);

export const Tog = ({on,onCl}) => (
  <div onClick={onCl} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:8}}>
    <div style={{width:36,height:20,borderRadius:10,background:on?G.copper:G.border,transition:"background 0.2s",position:"relative"}}>
      <div style={{position:"absolute",top:2,left:on?16:2,width:16,height:16,borderRadius:8,background:"#fff",transition:"left 0.2s"}}/>
    </div>
  </div>
);
