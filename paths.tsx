import type {ComponentProps} from 'react';
export function withBase(value:string){const base=import.meta.env.BASE_URL;return value.startsWith('/')&&!value.startsWith('//')?base+value.slice(1):value}
export function SiteLink({href,...props}:ComponentProps<'a'>){return <a {...props} href={href?withBase(href):href}/>}
export function SiteImage({src,...props}:ComponentProps<'img'>){return <img {...props} src={typeof src==='string'?withBase(src):src}/>}
export function routePath(path:string){const base=import.meta.env.BASE_URL.replace(/\/$/,'');return base&&(path===base||path.startsWith(base+'/'))?path.slice(base.length)||'/':path}
