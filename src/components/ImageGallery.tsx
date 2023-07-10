/*
 * File: ImageGallery.tsx
 * Project: distrito-web
 * File Created: Saturday May 27th, 2023 | 3:20:41 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday May 27th, 2023 | 3:20:41 pm
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

type galleryTypes = {
	gallery: any
}

const ImageGallery = ({gallery}: galleryTypes) => {
	const data = gallery.data

	return (
		<Gallery>
			{data.map((item: any, index: number) => {
				const {hash, ext, alternativeText} = item.attributes
				return (
					<ImageContainer key={index}>
						{index == 0 ? (
							<ImageAsset
								src={hash.concat(ext)}
								priority
								fill
								alt={alternativeText || 'Food Item'}
							/>
						) : (
							<ImageAsset
								src={hash.concat(ext)}
								priority
								fill
								alt={alternativeText || 'Food Item'}
							/>
						)}
					</ImageContainer>
				)
			})}
		</Gallery>
	)
}

const Gallery = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(10, 5vw);
	justify-items: center;
	padding: 2rem;

	${media('<=tablet')} {
	}
	:first-child {
		grid-column-start: 1;
		grid-column-end: 5;
		grid-row-start: 1;
		grid-row-end: 10;

		${media('<=tablet')} {
			grid-column-end: 6;
		}
	}

	:nth-child(2) {
		grid-column-start: 5;
		grid-column-end: 9;
		grid-row-start: 1;
		grid-row-end: 4;
		${media('<=tablet')} {
			grid-column-start: 6;
			grid-column-end: 10;
		}
	}

	:nth-child(3) {
		grid-column-start: 5;
		grid-column-end: 9;
		grid-row-start: 4;
		grid-row-end: 6;
		${media('<=tablet')} {
			grid-column-start: 6;
			grid-column-end: 10;
		}
	}

	:nth-child(4) {
		grid-column-start: 5;
		grid-column-end: 9;
		grid-row-start: 6;
		grid-row-end: 10;
		${media('<=tablet')} {
			grid-column-start: 6;
			grid-column-end: 10;
		}
	}
`

const ImageAsset = styled(Image)`
	object-fit: cover;
	${media('<=phone')} {
		object-fit: scale-down;
		width: 20rem;
	}
`

const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	object-fit: cover;
	margin: 1rem;
	overflow: hidden;
	position: relative;

	${media('<=phone')} {
		height: 10rem;
	}
`

export default ImageGallery
