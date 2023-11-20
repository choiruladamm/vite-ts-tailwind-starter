import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage, BlogPage, HomePage, ProjectsPage, RootLayout } from './pages';

interface RootRouterProps {}

const RootRouter: FC<RootRouterProps> = ({}) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/projects',
          element: <ProjectsPage />,
        },
        {
          path: '/blog',
          element: <BlogPage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RootRouter;
