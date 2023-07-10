/*
 * File: media.tsx
 * Project: TBP-WEB
 * File Created: Monday March 27th, 2023 | 7:05:39 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Monday March 27th, 2023 | 7:05:40 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import {getStrapiURL} from './strapi-api'

type mediaProps = {
	media: {
		data: {
			attributes: {
				url: string
			}
		}
	}
}

export function getStrapiMedia({media}: mediaProps) {
	const {url} = media.data.attributes
	const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
	return imageUrl
}

export function controlledStrapiMedia(url: string) {
	const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
	return imageUrl
}
