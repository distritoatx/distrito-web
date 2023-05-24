import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
	title: 'Distrito | Underground Dinning',
	description:
		'Underground dining out of Austin, Texas by Chef Arturo Navarrete.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
