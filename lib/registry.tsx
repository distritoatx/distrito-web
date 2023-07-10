/*
 * File: registry.tsx
 * Project: distrito-web
 * File Created: Wednesday May 24th, 2023 | 8:54:16 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Wednesday May 24th, 2023 | 8:54:17 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2023
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
'use client'

import React, {useState} from 'react'
import {useServerInsertedHTML} from 'next/navigation'
import {media} from 'lib/style-media'
import {
	ServerStyleSheet,
	StyleSheetManager,
	createGlobalStyle,
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: Montserrat, ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

  --foreground-rgb: 42,42,42;
  --background-start-rgb: 26, 25, 26;
  --background-end-rgb: 26,26,26;

  /* --primary-glow: conic-gradient(
    #16abff33 0deg,
    #0885ff33 55deg,
    #54d6ff33 120deg,
    #0071ff33 160deg,
    transparent 360deg
  );
  --secondary-glow: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  ); */

  --tile-start-rgb: 239, 245, 249;
  --tile-end-rgb: 228, 232, 233;
  --tile-border: conic-gradient(
    #00000080,
    #00000040,
    #00000030,
    #00000020,
    #00000010,
    #00000010,
    #00000080
  );

  --callout-rgb: 238, 240, 241;
  --callout-border-rgb: 172, 175, 176;
  --card-rgb: 180, 185, 188;
  --card-border-rgb: 131, 134, 135;
  }
  html,
  body {
    max-width: 100vw;
    background-color: rgba(251, 251, 251, 1.0);
    color: rgb(var(--foreground-rgb));
    scroll-behavior: smooth;

    a {
      color: inherit;
      text-decoration: none;
    }
    p {
      font-size: 14px;

      ${media('<=tablet')}{
        font-size: 12px;
      }
    }

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
  }

  @media (max-width: 600px) {
      .grid {
        width: 100%;
        flex-direction: column;
      }
  }
`

export default function StyledComponentsRegistry({
	children,
}: {
	children: React.ReactNode
}) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement()
		styledComponentsStyleSheet.instance.clearTag()
		return <>{styles}</>
	})

	if (typeof window !== 'undefined') return <>{children}</>

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			<GlobalStyle />
			{children}
		</StyleSheetManager>
	)
}
