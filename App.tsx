import SiteShell from '../components/site-shell';
import Home from '../app/page';
import WorkPage from '../components/work-page';
import TeamPage from '../components/team-page';
import ProfilePage from '../components/profile-page';
import GetInvolved from '../app/get-involved/page';
import News from '../app/news/page';
import NotFound from '../app/not-found';
import data from '../data/content.json';
export default function App({path}:{path:string}){path=path.replace(/\/$/,'')||'/';let page;switch(path){case '/':page=<Home/>;break;case '/our-work':case '/projects':page=<WorkPage/>;break;case '/publications':page=<WorkPage initial="publications"/>;break;case '/presentations':page=<WorkPage initial="presentations"/>;break;case '/our-team':page=<TeamPage/>;break;case '/director':page=<ProfilePage slug="abriana-gresham"/>;break;case '/get-involved':page=<GetInvolved/>;break;case '/news':page=<News/>;break;default:{const slug=path.replace('/our-team/','');page=path.startsWith('/our-team/')&&data.people.some(p=>p.slug===slug)?<ProfilePage slug={slug}/>:<NotFound/>}}return <SiteShell path={path}>{page}</SiteShell>}
