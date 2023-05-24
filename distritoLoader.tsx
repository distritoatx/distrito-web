/*
 * File: tbpLoader.tsx
 * Project: tbp-web
 * File Created: Wednesday May 10th, 2023 | 10:10:06 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 10th, 2023 | 10:10:06 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 *
 */

type loaderData = {
	src: string
	width: number
	quality: number
}

export default function distritoLoader({src, width, quality}: loaderData) {
	return `https://distrito-strapi-bucket.s3.amazonaws.com/${src}?w=${width}&q=${
		quality || 75
	}`
}
