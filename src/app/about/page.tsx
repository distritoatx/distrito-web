/*
 * File: page.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 6:10:27 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 6:10:27 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import React from 'react'
import {fetchAPI} from 'lib/strapi-api'
import Container from './container'

const page = async () => {
	const res = await fetchAPI({
		path: `/about`,
		urlParamsObject: {
			populate: [
				'AboutZone.Chef',
				'AboutZone.Title',
				'AboutZone.Asset',
				'AboutZone.AboutHero',
			],
		},
		options: {},
	})

	const aboutZone = res.data.attributes.AboutZone[0]

	return <Container aboutZone={aboutZone} />
}

export default page
