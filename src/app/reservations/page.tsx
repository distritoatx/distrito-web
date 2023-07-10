/*
 * File: page.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 6:58:17 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 6:58:17 pm
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
import {fetchAPI} from 'lib/strapi-api'
import Container from './container'

const page = async () => {
	const res = await fetchAPI({
		path: `/reservation`,
		urlParamsObject: {
			populate: ['ReservationZone.PageAssets', 'ReservationZone.Details'],
		},
		options: {},
	})

	const reservationZone = res.data.attributes.ReservationZone[0]
	return <Container reservationZone={reservationZone} />
}

export default page
