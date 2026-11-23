'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useState} from 'react';
import {Menu,X} from 'lucide-react';
import {useLanguage} from './providers';
import {QuantMark} from './quant-mark';
export function Header(){
 const {language,setLanguage}=useLanguage();const path=usePathname();const [menu,setMenu]=useState(false);
 useEffect(()=>setMenu(false),[path]);
 return <header className="site-header"><Link href="/" className="wordmark" aria-label="Finance home"><QuantMark/><span>FINANCE<span className="brand-dot">.</span><small className="brand-caption">Quant learning / Tienkhoaa2908</small></span></Link><nav id="primary-navigation" className={menu?'nav-links is-open':'nav-links'} aria-label={language==='vi'?'Điều hướng chính':'Main navigation'}>{[['/path','Lộ trình','Path'],['/daily','Ôn tập','Review'],['/lab','Thực hành','Lab'],['/projects','Dự án','Projects'],['/resources','Tài liệu','Library']].map(([href,vi,en])=><Link key={href} href={href} onClick={()=>setMenu(false)} className={path.startsWith(href)?'active':''} aria-current={path.startsWith(href)?'page':undefined}>{language==='vi'?vi:en}</Link>)}</nav><div className="header-tools"><div className="language-toggle" aria-label={language==='vi'?'Ngôn ngữ':'Language'}><button type="button" className={language==='vi'?'selected':''} onClick={()=>setLanguage('vi')} aria-pressed={language==='vi'}>VI</button><button type="button" className={language==='en'?'selected':''} onClick={()=>setLanguage('en')} aria-pressed={language==='en'}>EN</button></div><button type="button" className="icon-button mobile-menu" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="primary-navigation" aria-label={language==='vi'?(menu?'Đóng điều hướng':'Mở điều hướng'):(menu?'Close navigation':'Open navigation')}>{menu?<X/>:<Menu/>}</button></div></header>;
}