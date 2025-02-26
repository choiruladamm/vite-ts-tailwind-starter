import { Nav } from '@/components';
import { Outlet } from 'react-router-dom';
import React from 'react';
import ReactQueryProvider from '@/providers/react-query-provider';

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
	return (
		<React.Fragment>
			<ReactQueryProvider>
				<Nav />
				<div>
					<Outlet />
				</div>
			</ReactQueryProvider>
		</React.Fragment>
	);
};

export default RootLayout;
