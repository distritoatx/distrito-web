/*
 * File: Social.tsx
 * Project: distrito-web
 * File Created: Wednesday June 28th, 2023 | 8:24:41 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday June 28th, 2023 | 8:24:41 pm
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
import Image from 'next/image'
import Link from 'next/link'
import {media} from '@/lib/style-media'
import {useAnimation} from 'framer-motion'

const Social = ({socials}: {socials: any}) => {
	return (
		<SocialContainer>
			{socials.map((value: any, index: number) => {
				const {logo, description, SocialLink, socialNetwork, subTitle} =
					value

				const {hash, ext, alternativeText} = logo.data.attributes
				return (
					<ImageContainer key={index}>
						<ScLink href={SocialLink}>
							<SocialItem
								src={hash.concat(ext)}
								alt={alternativeText}
								width={25}
								height={25}
							/>
						</ScLink>
					</ImageContainer>
				)
			})}
		</SocialContainer>
	)
}

export default Social

const SocialContainer = styled.div`
	position: absolute;
	display: flex;
	bottom: 2%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
`

const ImageContainer = styled.div`
	padding: 0.5rem;
`

const SocialItem = styled(Image)``

const ScLink = styled(Link)``
