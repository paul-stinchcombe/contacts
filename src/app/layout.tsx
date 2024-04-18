import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const popins = Poppins({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Contacts',
	description: 'General contact management',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={popins.className}>{children}</body>
		</html>
	);
}
