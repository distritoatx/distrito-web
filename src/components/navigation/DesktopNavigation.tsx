/*
 * File: DesktopNavigation.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 7:56:56 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 7:56:56 pm
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
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const DesktopNavigation = (metaImageAsset: any) => {
	const {ext, hash, alternativeText} =
		metaImageAsset.metaImageAsset.metaImageAsset.metaImageAsset
	return (
		<NavBar>
			<NavItem>
				<Link href='/about'>About</Link>
			</NavItem>
			<NavItem>
				<Link href='/press'>Press</Link>
			</NavItem>
			<NavItem>
				<Link href='/reservations'>Reserve</Link>
			</NavItem>
			<NavItem>
				<Link href='/'>
					<MetaStyled
						src={hash.concat(ext)}
						alt={alternativeText}
						width={35}
						height={35}
					/>
				</Link>
			</NavItem>
		</NavBar>
	)
}

const NavBar = styled.ul`
	list-style: none;
`

const NavItem = styled.li`
	padding: 3rem 1rem;
	list-style: none;
`
const MetaStyled = styled(Image)`
	width: 55px;
	height: 55px;
	object-fit: contain;
	transform: rotate(-30deg);
`

export default DesktopNavigation
