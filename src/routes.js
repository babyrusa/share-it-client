import Home from './Pages/Home';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';

export default [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'register',
    path: '/register',
    component: Register
  },
  {
    name: 'notfound',
    path: '*',
    component: NotFound
  }
];
