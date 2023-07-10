/*
 * File: Header.tsx
 * Project: distrito-web
 * File Created: Thursday May 25th, 2023 | 1:45:24 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Thursday May 25th, 2023 | 1:45:24 pm
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
import Navigation from './navigation/Navigation'

const Header = (metaImageAsset: any) => {
	return <Navigation metaImageAsset={metaImageAsset} />
}

export default Header
