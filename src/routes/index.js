import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Home', component: Home, layOut: 'defaultLayout' },
    { path: '/following', component: Following, layOut: null },
    { path: '/profile', component: Profile, layOut: null },
];

export const privateRoutes = [];
