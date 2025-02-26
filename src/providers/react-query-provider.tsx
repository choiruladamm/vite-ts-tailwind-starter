import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

interface ReactQueryProviderProps {
	children: React.ReactNode;
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 2,
			staleTime: 1000 * 60 * 2,
		},
	},
});

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
	children,
}) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default ReactQueryProvider;
