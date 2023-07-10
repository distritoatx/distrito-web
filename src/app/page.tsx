'use client'
import Image from 'next/image'
import * as styles from './page.styled'
import {fetchAPI} from 'lib/strapi-api'
import ImageGallery from '../components/ImageGallery'

export default async function Home() {
	const res = await fetchAPI({
		path: `/global`,
		urlParamsObject: {
			populate: [
				'InternationalGlobal.metaImage',
				'InternationalGlobal.Favicon',
				'InternationalGlobal.Logo',
			],
		},
		options: {},
	})

	const homeRes = await fetchAPI({
		path: `/home`,
		urlParamsObject: {
			populate: ['HomeZone.HeroImage', 'HomeZone.FoodGallery'],
		},
		options: {},
	})

	const {keywords, metaTitle, Logo, Favicon, metaImage} =
		res.data.attributes.InternationalGlobal[0]

	const {
		HeroImage,
		FoodGallery,
		Title,
		Subtitle,
		Keywords,
		WelcomeParagraph,
	} = homeRes.data.attributes.HomeZone[0]

	const logoMeta = Logo.data.attributes
	const metaImageMeta = metaImage.data.attributes

	const heroImage = HeroImage.data.attributes

	return (
		<styles.Main>
			<styles.First>
				<styles.Hero
					src={heroImage.hash.concat(heroImage.ext)}
					alt={heroImage.alternativeText}
					quality={40}
					priority
					fill
				/>
				<styles.Center>
					<styles.Logo
						src={logoMeta.hash.concat(logoMeta.ext)}
						alt={heroImage.alternativeText}
						width={750}
						quality={40}
						height={200}
						priority
					/>
				</styles.Center>
			</styles.First>
			<styles.Second>
				<h1>{Title}</h1>
				<ImageGallery gallery={FoodGallery} />
				<p>{WelcomeParagraph}</p>
			</styles.Second>
		</styles.Main>
	)
}
