import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const IncidentPage = Loadable(lazy(() => import('pages/extra-pages/IncidentPage')));

// render - utilities
const Insert = Loadable(lazy(() => import('pages/components-overview/Insert')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'incident-page',
      element: <IncidentPage />
    },

    {
      path: 'insert',
      element: <Insert />
    }
  ]
};

export default MainRoutes;
