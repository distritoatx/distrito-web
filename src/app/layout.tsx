import StyledComponentsRegistry from 'lib/registry'
import Navigation from '@/components/navigation/Navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Social from '@/components/Social'
import {fetchAPI} from '@/lib/strapi-api'
import {Montserrat} from 'next/font/google'

export const metadata = {
	title: 'Distrito | Underground Dinning',
	description:
		'Underground dining out of Austin, Texas by Chef Arturo Navarrete.',
}

const montserrat = Montserrat({
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['cyrillic', 'latin'],
})

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const res = await fetchAPI({
		path: `/global`,
		urlParamsObject: {
			populate: [
				'InternationalGlobal.metaImage',
				'InternationalGlobal.Logo',
				'InternationalGlobal.PageAssets',
				'InternationalGlobal.metaSocial.logo',
			],
		},
		options: {},
	})

	const {keywords, metaDescription, Logo, PageAssets, metaImage, metaSocial} =
		res.data.attributes.InternationalGlobal[0]

	const brushAsset = PageAssets.data[1].attributes
	const metaImageAsset = metaImage.data.attributes
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Head>
					<meta
						name='Description'
						content={metaDescription}
						key='description'
					/>
					<meta name='keywords' content='{keywords}' />
					<meta property='og:image' content={Logo} key='og:image' />
					<meta
						name='instagram:card'
						content='summary_large_image'
						key='instagram:card'
					/>
					<link rel='canonical' href={'https://distritoatx.com'} />
				</Head>
				<Header metaImageAsset={metaImageAsset} />
				<Social socials={metaSocial} />
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				<Footer
					brushAsset={brushAsset}
					metaImageAsset={metaImageAsset}
				/>
			</body>
		</html>
	)
}
