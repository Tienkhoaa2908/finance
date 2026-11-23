import {HomePortals} from '@/components/home-portals';
import Link from 'next/link';
import {Text} from '@/components/providers';
export default function Home(){return <><aside style={{padding:'18px 24px',textAlign:'center',borderBottom:'2px solid var(--ink)',background:'var(--yellow)'}}><Link href="/finance" style={{textDecoration:'underline',fontWeight:600}}><Text vi="Học thử bài tài chính mới: từ dòng tiền đến lợi suất" en="Try the new finance lesson: from cash flows to returns"/></Link><p><Text vi="Bản thử nghiệm cách học. Các mục bên dưới vẫn là giáo trình toán gốc." en="A learning-design pilot. The sections below still contain the original mathematics curriculum."/></p></aside><HomePortals/></>}
