/*
 * File: page.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 6:58:01 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 6:58:01 pm
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
		path: `/press`,
		urlParamsObject: {
			populate: ['PressZone.Logo', 'PressZone.PressHero', 'PressZone.*'],
		},
		options: {},
	})

	const pressZone = res.data.attributes.PressZone[0]
	return <Container pressZone={pressZone} />
}

export default page
