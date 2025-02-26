import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface SiteHeadProps {
	title?: string;
	description?: string;
	children: ReactNode;
}

export const DEFAULT_TITLE = 'React.js + Tailwind CSS + Typescript';

export const SiteHead: React.FC<SiteHeadProps> = ({
	title,
	description,
	children,
}) => {
	const computedTitle = title ? `${title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE;

	return (
		<>
			<Helmet>
				<title>{computedTitle}</title>
				{description && <meta name='description' content={description} />}
			</Helmet>
			{children}
		</>
	);
};
