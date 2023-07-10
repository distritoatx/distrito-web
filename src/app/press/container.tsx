/*
 * File: container.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 7:41:25 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 7:41:25 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
'use client'

import React, {useEffect} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import {useAnimation, motion} from 'framer-motion'
import {media} from '@/lib/style-media'
import {useInView} from 'react-intersection-observer'

type pressZoneTypes = {
	pressZone: {
		Title: string
		Subtitle: string
		Details: string
		ReservationLink: string
		Logo: any
		PressHero: any
	}
}

const Container = ({pressZone}: pressZoneTypes) => {
	const {Title, Details, Logo, PressHero} = pressZone
	const {hash, ext, alternativeText} = Logo.data.attributes
	const pressHero = PressHero.data.attributes
	const animationControl = useAnimation()
	const {ref, inView} = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	const characterAnimation = {
		hidden: {
			opacity: 0,
			y: `0.25em`,
		},
		visible: {
			opacity: 1,
			y: `0em`,
			transition: {
				duration: 1,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	}

	useEffect(() => {
		if (inView) {
			animationControl.start('visible')
		}
		if (!inView) {
			animationControl.start('hidden')
		}
	}, [animationControl, inView])

	return (
		<PressContainer>
			<PressHeroCont>
				<PressHeroImage hero={pressHero.url}>
					<PressDetails>
						<PressMetaLogo
							src={hash.concat(ext)}
							alt={alternativeText}
							quality={40}
							width={50}
							height={50}
							priority
						/>
						<h4>{Title}</h4>
						<p>
							<span>{Details}</span>
						</p>
						<a href='mailto: info@distritoatx.com?subject = Press Request'>
							info@distritoatx.com
						</a>
					</PressDetails>
				</PressHeroImage>
			</PressHeroCont>
		</PressContainer>
	)
}

export default Container

const PressContainer = styled.main`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	overflow: hidden;
	color: white;
`

const PressHeroCont = styled.section`
	height: 100vh;
	background-color: rgba(42, 42, 42, 1);
	width: 100vw;
`

const PressHeroImage = styled.div<{hero: string}>`
	background: local;
	background-image: linear-gradient(
			0deg,
			rgba(46, 46, 46, 0.9) 100%,
			rgba(255, 255, 255, 0) 50%
		),
		url(${(p) => p.hero});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 100vh;
`

const PressMetaLogo = styled(Image)`
	margin-bottom: 5rem;
	transform: rotate(330deg);
	position: relative;
	width: 100%;
`

const PressDetails = styled.div`
	justify-content: center;
	align-self: center;
	width: 40vw;
	justify-items: stretch;
	position: relative;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 0 auto;
	top: 25%;

	${media('<=desktop')} {
		width: 60vw;
	}
	${media('<=phone')} {
		width: 100vw;
	}

	p {
		display: block;
		opacity: 0;
		margin-bottom: 5rem;
		font-size: 12px;
		animation: reveal 1.5s forwards 0s;
	}

	@keyframes reveal {
		from {
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	a {
		font-weight: 400;
		font-style: italic;
		font-size: 12px;
		cursor: pointer;
		left: 42%;
		position: relative;

		${media('<=tablet')} {
			left: 25%;
		}

		${media('<=phone')} {
			left: 10%;
		}
	}

	h4 {
		margin-bottom: 1rem;
		left: 5rem;
	}
`
