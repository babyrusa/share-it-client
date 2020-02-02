import Home from './Pages/Home';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';

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
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'notfound',
    path: '*',
    component: NotFound
  }
];
