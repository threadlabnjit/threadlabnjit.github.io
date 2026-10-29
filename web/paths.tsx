import type {ComponentProps} from 'react';
export function withBase(value:string){const base=import.meta.env.BASE_URL;return value.startsWith('/')&&!value.startsWith('//')?base+value.slice(1):value}
export function SiteLink({href,...props}:ComponentProps<'a'>){return <a {...props} href={href?withBase(href):href}/>}
export function SiteImage({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const base = import.meta.env.BASE_URL;

  const imageSrc =
    typeof src === 'string' && src.startsWith('/')
      ? `${base}${src.replace(/^\/+/, '')}`
      : src;

  return <img src={imageSrc} alt={alt} {...props} />;
}
export function routePath(path:string){const base=import.meta.env.BASE_URL.replace(/\/$/,'');return base&&(path===base||path.startsWith(base+'/'))?path.slice(base.length)||'/':path}
