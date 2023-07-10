/*
 * File: container.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 7:41:15 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 7:41:15 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import {media} from '@/lib/style-media'

type aboutZoneTypes = {
	aboutZone: {
		Title: string
		Bio: string
		About: string
		Chef: any
		Asset: object
		AboutHero: any
	}
}

const Container = ({aboutZone}: aboutZoneTypes) => {
	// Image objects
	const heroImage = aboutZone.AboutHero.data.attributes
	const chefImage = aboutZone.Chef.data.attributes
	const {Title, Bio} = aboutZone

	return (
		<AboutContainer>
			<AboutHero>
				<HeroImage
					src={heroImage.hash.concat(heroImage.ext)}
					alt={heroImage.alternativeText}
					fill
					quality={40}
					priority
				/>
			</AboutHero>
			<AboutDetails>
				<AboutTitle>{Title}</AboutTitle>
				<AboutBio>{Bio}</AboutBio>
				<ChefImage
					src={chefImage.hash.concat(chefImage.ext)}
					alt={chefImage.alternativeText}
					quality={40}
					height={1102}
					width={689}
					priority
				/>
			</AboutDetails>
		</AboutContainer>
	)
}

const AboutContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
`

const AboutHero = styled.div`
	flex: 1;
	min-height: 100vh;
	align-items: center;
	object-fit: cover;
`

const AboutDetails = styled.div`
	padding: 10rem;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(8, 1fr);
	flex-direction: row;
	flex: 2;
	flex-wrap: wrap;

	${media('<=desktop')} {
		display: flex;
		align-items: center;
		padding: 3rem 1rem;
	}
`

const AboutTitle = styled.h1`
	font-weight: bold;
	font-size: 50px;
	left: 20%;
	width: 20%;
	margin-top: -5rem;
	overflow: auto;
	z-index: 2;
	position: absolute;
	overflow: hidden;

	span {
		font-weight: 400;
	}

	${media('<=desktop')} {
		width: 80%;
		left: 15%;
	}

	${media('<=tablet')} {
		margin-top: 0;
		position: relative;
		font-size: 50px;
		margin-top: 0rem;
		left: 10%;
	}
`

const AboutBio = styled.p`
	padding-top: 5rem;
	flex: 1;
	z-index: 1;
	grid-column-start: span 1;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 8;
	animation: reveal 1.5s forwards 0s;
	font-size: 12px;
	text-align: start;

	${media('<=desktop')} {
		width: 70vw;
		margin-bottom: 2rem;
		padding: 2rem;
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
`

const ChefImage = styled(Image)`
	flex: 2;
	flex-basis: auto;
	overflow: hidden;
	object-fit: cover;

	grid-column-start: 3;
	grid-column-end: 8;
	grid-row-start: 1;
	grid-row-end: 8;
	animation: reveal 1.5s forwards 0s;

	${media('<=tablet')} {
		object-fit: contain;
		grid-column-start: 2;
		grid-column-end: 2;
		grid-row-end: 6;
		height: 500px;
	}
	${media('<=phone')} {
		object-fit: contain;
		width: 20rem;
		height: 40rem;
	}
`

const HeroImage = styled(Image)`
	width: 100vw;
	object-fit: cover;
	${media('<=tablet')} {
		width: 50vw;
	}
`
export default Container
