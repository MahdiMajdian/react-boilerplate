import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
