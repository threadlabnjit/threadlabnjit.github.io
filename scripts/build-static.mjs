import {build} from 'vite';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {pathToFileURL} from 'node:url';
await build();
await build({build:{ssr:'web/render.tsx',outDir:'.build/prerender',emptyOutDir:true}});
const {render}=await import(pathToFileURL(resolve('.build/prerender/render.js')).href);
const data=JSON.parse(await readFile('data/content.json','utf8'));
const routes=['/','/our-work','/projects','/publications','/presentations','/our-team','/director','/get-involved','/news',...data.people.map(p=>`/our-team/${p.slug}`)];
const template=await readFile('dist/index.html','utf8');
for(const path of routes){const file=resolve('dist',path.slice(1),'index.html');await mkdir(dirname(file),{recursive:true});const html=template.replace('<!--page-content-->',render(path));await writeFile(file,html);if(!html.includes('<main'))throw Error(`Missing page content: ${path}`)}
await writeFile('dist/404.html',template.replace('<!--page-content-->',render('/404')));
console.log(`Rendered and verified ${routes.length} standalone page documents.`);

await writeFile('dist/.nojekyll','');
