import { NotFoundPage } from '@/components';
import HomePage from '@/features/home/_pages/home-page';
import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './root-layout';
import BlogPage from '@/features/blog/_pages/blog-page';

interface RootRouterProps {}

const RootRouter: FC<RootRouterProps> = ({}) => {
	const router = createBrowserRouter(
		[
			{
				path: '/',
				element: <RootLayout />,
				children: [
					{
						index: true,
						element: <HomePage />,
					},
					{
						path: 'blogs',
						element: <BlogPage />,
					},
					{
						path: '*',
						element: <NotFoundPage />,
					},
				],
			},
		],
		{
			future: {
				v7_relativeSplatPath: true,
			},
		},
	);

	return (
		<RouterProvider
			router={router}
			future={{
				v7_startTransition: true,
			}}
		/>
	);
};

export default RootRouter;
