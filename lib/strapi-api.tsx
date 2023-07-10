/*
 * File: api.tsx
 * Project: distrito-web
 * File Created: Wednesday May 17th, 2023 | 6:46:46 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 17th, 2023 | 6:46:46 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
/*
 * File: api.tsx
 * Project: TBP-WEB
 * File Created: Monday March 27th, 2023 | 6:57:26 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Monday March 27th, 2023 | 6:57:26 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import qs from 'qs'

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = '') {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
	}${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

type apiVariables = {
	path: string
	urlParamsObject: {}
	options: {}
}

export async function fetchAPI({path, urlParamsObject, options}: apiVariables) {
	// Merge default and user options
	const mergedOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
		...options,
	}

	// Build request URL
	const queryString = qs.stringify(urlParamsObject, {
		encodeValuesOnly: true, // prettify URL
	})
	const requestUrl = `${getStrapiURL(
		`/api${path}${queryString ? `?${queryString}` : ''}`
	)}`

	// Trigger API call
	const response = await fetch(requestUrl, mergedOptions)

	// Handle response
	if (!response.ok) {
		console.error(response.statusText)
		throw new Error(`An error occured please try again`)
	}
	const data = await response.json()
	return data
}
