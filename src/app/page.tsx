import Image from 'next/image'
import styles from './page.module.css'
import {fetchAPI} from '../../util/strapi-api'

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

	// const locale = res.data.attributes.InternationalGlobal

	// if (res.da)
	const {
		keywords,
		metaTitle,
		WelcomeParagrapgh,
		Subtitle,
		Title,
		Logo,
		Favicon,
		metaImage,
	} = res.data.attributes.InternationalGlobal[0]

	const logoMeta = Logo.data.attributes
	const metaImageMeta = metaImage.data.attributes
	const faviconMeta = Favicon.data.attributes

	return (
		<main className={styles.main}>
			{/* <div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>src/app/page.tsx</code>
				</p>
				<div>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'>
						By{' '}
						<Image
							src={logoMeta.hash.concat(logoMeta.ext)}
							alt={logoMeta.alternativeText}
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div> */}

			<div className={styles.center}>
				<p>COMING SOON</p>
				<Image
					className={styles.logo}
					src={logoMeta.hash.concat(logoMeta.ext)}
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>

			<Image
				className={styles.logo}
				src={metaImageMeta.hash.concat(metaImageMeta.ext)}
				alt='Next.js Logo'
				width={100}
				height={70}
				priority
			/>
			{/* <div className={styles.grid}>
				<a
					href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>
						Find in-depth information about Next.js features and
						API.
					</p>
				</a>

				<a
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>
						Learn about Next.js in an interactive course
						with&nbsp;quizzes!
					</p>
				</a>

				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore the Next.js 13 playground.</p>
				</a>

				<a
					href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>
						Instantly deploy your Next.js site to a shareable URL
						with Vercel.
					</p>
				</a>
			</div> */}
		</main>
	)
}
