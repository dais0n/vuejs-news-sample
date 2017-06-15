import NewsListView from '../components/NewsListView';
import NewsDetailView from '../components/NewsDetailView';

export default [
  {
    path: '/',
    component: NewsListView,
  },
  {
    path: '/news/:id',
    component: NewsDetailView,
  },
];

