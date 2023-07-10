/*
 * File: MobileNavigation.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 7:56:47 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 7:56:47 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import {media} from '@/lib/style-media'

const MobileNavigation = ({
	winHeight,
	isOpen,
}: {
	winHeight: number
	isOpen: boolean
}) => {
	return (
		<Nav windowheight={winHeight} open={isOpen}>
			<NavBar>
				<NavItem>
					<Link href='/'>Home</Link>
				</NavItem>
				<NavItem>
					<Link href='/about'>About</Link>
				</NavItem>
				<NavItem>
					<Link href='/reservations'>Reservations</Link>
				</NavItem>
				<NavItem>
					<Link href='/press'>Press</Link>
				</NavItem>
			</NavBar>
		</Nav>
	)
}

const Nav = styled.nav<{windowheight: number; open: boolean}>`
	display: flex;
	flex-direction: column;
	height: 200vh;
	text-align: right;
	padding: 2rem;
	position: absolute;
	top: 0;
	transition: transform 0.3s ease-in-out;
	color: white;
	background-color: rgb(46, 46, 46, 0.9);
	transform: ${(p) => (p.open ? 'translateX(0)' : 'translateX(-200%)')};

	${media('<=desktop')} {
		width: 100%;
	}
	ul {
		line-height: 5rem;
		padding-top: 5rem;
	}

	a {
		text-decoration: none;
	}
`

const NavBar = styled.ul`
	list-style: none;
`

const NavItem = styled.li``

const MetaStyled = styled(Image)`
	width: 55px;
	height: 55px;
	object-fit: contain;
	padding: 0.4rem;
	transform: rotate(-30deg);
	background-color: rgba(42, 42, 42, 0.8);
	border-radius: 5rem;
`

export default MobileNavigation
