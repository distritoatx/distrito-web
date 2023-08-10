import StyledComponentsRegistry from 'lib/registry'
import Navigation from '@/components/navigation/Navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Social from '@/components/Social'
import {fetchAPI} from '@/lib/strapi-api'
import {Montserrat} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'

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
				'InternationalGlobal.Favicon',
			],
		},
		options: {},
	})

	const {
		keywords,
		metaDescription,
		Logo,
		PageAssets,
		metaImage,
		metaTitle,
		metaSocial,
		Favicon,
	} = res.data.attributes.InternationalGlobal[0]

	const brushAsset = PageAssets.data[1].attributes
	const metaImageAsset = metaImage.data.attributes
	const logoImg = Logo.data.attributes
	const favicon = Favicon.data.attributes
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
					<link rel='shortcut icon' href={favicon.url} />
					<link
						rel='canonical'
						href={'https://www.distritoatx.com'}
					/>
					<meta
						name='instagram:card'
						content='summary_large_image'
						key='instagram:card'
					/>
					<meta
						name='Description'
						content={metaDescription}
						key='description'
					/>
					<meta name='keywords' content={metaDescription} />

					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:image' content={logoImg.url} />
					<meta name='twitter:title' content={metaTitle} />
					<meta name='twitter:creator' content='' />
					<meta name='twitter:site' content='' />
					<meta
						name='twitter:description'
						content={metaDescription}
					/>
					<meta property='og:type' content='website' />
					<meta property='og:url' content='www.distritoatx.com' />
					<meta property='og:title' content={metaTitle} />
					<meta property='og:description' content={metaDescription} />
					<meta property='og:image' content={logoImg.url} />
					<link rel='canonical' href={'https://distritoatx.com'} />
				</Head>
				<Header metaImageAsset={metaImageAsset} />
				<Social socials={metaSocial} />
				<StyledComponentsRegistry>
					{children}
					<Analytics />
				</StyledComponentsRegistry>
				<Footer
					brushAsset={brushAsset}
					metaImageAsset={metaImageAsset}
				/>
			</body>
		</html>
	)
}
