import {hydrateRoot} from 'react-dom/client';
import App from './App';
import {routePath} from './paths';
import '../app/globals.css';
hydrateRoot(document.getElementById('root')!,<App path={routePath(window.location.pathname)}/>);
