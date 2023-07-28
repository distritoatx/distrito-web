/*
 * File: container.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 7:41:32 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 7:41:32 pm
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

type reservationZoneTypes = {
	reservationZone: {
		Title: string
		Details: string
		Subtitle: string
		BookingLink: string
		BookingAvailable: boolean
		BookingStartDate: Date
		BookingEndDate: Date
		PageAssets: any
	}
}

const Container = ({reservationZone}: reservationZoneTypes) => {
	const {
		PageAssets,
		Details,
		Title,
		Subtitle,
		BookingLink,
		BookingAvailable,
		BookingStartDate,
		BookingEndDate,
	} = reservationZone

	const logoImage = PageAssets.data[0].attributes
	const heroImage = PageAssets.data[1].attributes

	return (
		<ReservationContainer>
			<ReservationHero>
				<ReservationHeroImage hero={heroImage.url}>
					<ReservationLogo
						width={1200}
						height={300}
						quality={40}
						priority
						alt={logoImage.alternativeText}
						src={logoImage.hash.concat(logoImage.ext)}
					/>
					<ReservationsDetails>
						{!BookingAvailable && <span>{Subtitle}</span>}
						<p>{Details}</p>
						{BookingAvailable && (
							<a href={BookingLink}>Book Now!</a>
						)}
					</ReservationsDetails>
				</ReservationHeroImage>
			</ReservationHero>
		</ReservationContainer>
	)
}

export default Container

const ReservationContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	flex-wrap: wrap;
`

const ReservationHero = styled.section`
	height: 100vh;
	background-color: rgba(42, 42, 42, 1);
`

const ReservationHeroImage = styled.div<{hero: string}>`
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

const ReservationLogo = styled(Image)`
	width: 50%;
	margin-left: 30%;
	margin-top: 15%;

	${media('<=desktop')} {
		width: 70%;
		margin-left: 20%;
		margin-top: 50%;
		height: 20%;
	}
`

const ReservationsDetails = styled.div`
	color: white;
	margin-left: 30%;
	width: 50rem;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	p {
		margin-bottom: 1rem;
		font-weight: 400;
		font-size: 12px;
		overflow: auto;
		display: block;
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
		top: 1rem;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		animation: reveal 1.5s forwards 0s;
	}
	span {
		font-weight: 500;
		margin-bottom: 1rem;
	}
	${media('<=desktop')} {
		width: 70%;
		margin: 0 auto;
		padding: 1rem;
	}
`

const ReservationsActive = styled.div``

const ReservationButton = styled.a``
