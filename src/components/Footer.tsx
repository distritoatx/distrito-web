/*
 * File: Footer.tsx
 * Project: distrito-web
 * File Created: Thursday May 25th, 2023 | 1:44:46 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Thursday May 25th, 2023 | 1:44:46 pm
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

type footerProps = {
	brushAsset: {hash: string; ext: string; alternativeText: string}
	metaImageAsset: {hash: string; ext: string; alternativeText: string}
}

const Footer = ({brushAsset, metaImageAsset}: footerProps) => {
	const year = new Date()
	return (
		<FooterStyled>
			<MetaInfo>
				<div>
					<p>e: info@distritoatx.com</p>
					<p>ALL RIGHTS RESERVED © {year.getFullYear()}</p>
				</div>
				<MetaStyled
					src={metaImageAsset.hash.concat(metaImageAsset.ext)}
					alt={metaImageAsset.alternativeText}
					priority
					quality={40}
					width={35}
					height={35}
				/>
				<div>
					<p>en | es</p>
				</div>
			</MetaInfo>
			<BrushStyled
				src={brushAsset.hash.concat(brushAsset.ext)}
				alt={brushAsset.alternativeText}
				priority
				quality={40}
				fill
			/>
		</FooterStyled>
	)
}

const FooterStyled = styled.footer`
	text-align: center;
	overflow: hidden;
	width: 90%;
	position: relative;
	margin: 0 auto;
	display: flex;
	height: 7rem;

	${media('<=desktop')} {
		height: 5rem;
	}
	${media('<=desktop')} {
		height: 3rem;
	}
`

const MetaInfo = styled.div`
	position: absolute;
	display: flex;
	left: 33%;
	z-index: 1;
	color: white;
	margin-top: 2rem;
	text-align: left;
	justify-items: center;
	font-weight: 300;
	overflow: hidden;

	${media('<=desktop')} {
		margin-top: 0rem;
		right: 8rem;
	}
	${media('<=phone')} {
		margin-top: 0rem;
	}

	:first-child {
		margin-right: 5rem;

		${media('<=desktop')} {
			display: none;
		}
	}

	P {
		font-size: 10px;
		${media('<=desktop')} {
			font-size: 0.5rem;
		}
	}

	div {
		align-self: center;
	}
`

const MetaStyled = styled(Image)`
	width: 55px;
	height: 55px;
	object-fit: contain;
	transform: rotate(-30deg);
	margin-right: 6rem;
	z-index: 1;

	${media('<=desktop')} {
		margin-left: auto;
		margin-right: auto;
		margin-top: 0.4rem;
		width: 35px;
		height: 35px;
	}
	${media('<=phone')} {
		margin-top: 0.4rem;
	}
	${media('<=smallPhone')} {
		margin-top: 0.4rem;
	}
`
const BrushStyled = styled(Image)`
	object-fit: contain;
	width: 1000px;
	position: relative;
	height: 120px;

	${media('<=desktop')} {
		width: 800px;
	}
	${media('<=tablet')} {
		width: 450px;
	}
	${media('<=phone')} {
		width: 300px;
	}
	${media('<=smallPhone')} {
		width: 275px;
	}
`

export default Footer
