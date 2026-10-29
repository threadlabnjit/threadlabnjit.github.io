import SiteShell from "./site-shell";
import Home from "./page";
import WorkPage from "./work-page";
import TeamPage from './team-page';
import ProfilePage from './profile-page';
import GetInvolved from './get-involved/page';
import News from './news/page';
import NotFound from './not-found';
import data from './content.json';
export default function App({path}:{path:string}){path=path.replace(/\/$/,'')||'/';let page;switch(path){case '/':page=<Home/>;break;case '/our-work':case '/projects':page=<WorkPage/>;break;case '/publications':page=<WorkPage initial="publications"/>;break;case '/presentations':page=<WorkPage initial="presentations"/>;break;case '/our-team':page=<TeamPage/>;break;case '/director':page=<ProfilePage slug="abriana-gresham"/>;break;case '/get-involved':page=<GetInvolved/>;break;case '/news':page=<News/>;break;default:{const slug=path.replace('/our-team/','');page=path.startsWith('/our-team/')&&data.people.some(p=>p.slug===slug)?<ProfilePage slug={slug}/>:<NotFound/>}}return <SiteShell path={path}>{page}</SiteShell>}
