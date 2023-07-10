/*
 * File: Navigation.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 9:15:18 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 9:15:18 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

'use client'

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {usePathname} from 'next/navigation'
import Image from 'next/image'
import {media} from '@/lib/style-media'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const Navigation = (metaImageAsset: any) => {
	const pathname = usePathname()
	const [desktop, setDesktop] = useState(true)
	const [mobileStates, setMobileStates] = useState({
		isOpen: false,
		winHeight: 400,
	})

	useEffect(() => {
		const windowWidth = window.innerWidth
		if (windowWidth < 687) {
			setDesktop(false)
		}
	}, [])

	useEffect(() => {
		setMobileStates((s) => ({...s, ['isOpen']: false}))
	}, [pathname])

	useEffect(() => {
		setMobileStates((s) => ({...s, ['winHeight']: window.innerHeight}))
	}, [])

	const {ext, hash, alternativeText} =
		metaImageAsset.metaImageAsset.metaImageAsset

	return (
		<NavContainer>
			{!desktop && (
				<NavButton
					isopen={mobileStates.isOpen}
					onClick={() => {
						setMobileStates((e) => ({
							...e,
							['isOpen']: !e.isOpen,
						}))
					}}>
					<MetaStyled
						src={hash.concat(ext)}
						alt={alternativeText}
						width='35'
						height='35'
					/>
				</NavButton>
			)}
			{desktop ? (
				<DesktopNavigation metaImageAsset={metaImageAsset} />
			) : (
				<MobileNavigation
					isOpen={mobileStates.isOpen}
					winHeight={mobileStates.winHeight}
				/>
			)}
		</NavContainer>
	)
}

const NavContainer = styled.nav`
	z-index: 98;
	position: absolute;
	left: 5%;
	top: 25%;
	color: rgb(206, 208, 202);

	${media('<=tablet')} {
		top: 0%;
		left: 0%;
		position: fixed;
		width: 13rem;
	}
`

export default Navigation

const MetaStyled = styled(Image)`
	width: 55px;
	height: 55px;
	object-fit: contain;
	padding: 0.4rem;
	transform: rotate(-30deg);
	background-color: rgba(42, 42, 42, 0.8);
	border-radius: 5rem;
`

const NavButton = styled.a<{isopen: boolean}>`
	z-index: 99;
	transition: transform 0.3s ease-in-out;
	top: 5rem;
	left: 2em;
	position: absolute;
	transform: ${(p) =>
		!p.isopen ? 'translate(0px, 0px)' : 'translate(100%, 1000%)'};
`
