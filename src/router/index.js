import NewsList from '../components/NewsList';
import Contents from '../components/Contents';

export default [
  {
    path: '/',
    component: NewsList,
  },
  {
    path: '/item/:id',
    component: Contents,
  },
];

