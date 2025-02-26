import { SiteHead } from '@/components';
import React from 'react';

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = ({}) => {
	return (
		<SiteHead title='Blog'>
			<div className='grid min-h-dvh place-items-center'>Blog Page</div>
		</SiteHead>
	);
};

export default BlogPage;
