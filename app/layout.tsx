import type {Metadata,Viewport} from 'next';
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/800.css';
import '@fontsource/be-vietnam-pro/900.css';
import '@fontsource/source-serif-4/400.css';
import '@fontsource/source-serif-4/600.css';
import '@fontsource/jetbrains-mono/400.css';
import 'katex/dist/katex.min.css';
import './globals.css';
import '@/components/studio-theme.css';
import '@/components/atelier.css';
import '@/components/finance.css';
import {FinanceState} from '@/components/finance-state';
import {Providers} from '@/components/providers';
import {Header} from '@/components/header';
import {PortalTransition} from '@/components/portal-transition';
import {PageTransition} from '@/components/page-transition';

export const metadata:Metadata={title:{default:'Finance — Quant Learning',template:'%s · Finance'},description:'Học tài chính, toán và xây hệ thống giao dịch. Bài học Việt–Anh, bài tập, ôn tập và dự án Python.',robots:{index:true,follow:true}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#1947e5'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi" suppressHydrationWarning><body><Providers><FinanceState><PortalTransition><a className="skip-link" href="#main-content">Đi tới nội dung / Skip to content</a><Header/><div id="main-content"><PageTransition>{children}</PageTransition></div></PortalTransition></FinanceState></Providers></body></html>}
