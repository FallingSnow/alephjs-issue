import type { ComponentType } from 'react'
import React from 'react'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <main>
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="https://esm.sh/tailwindcss/dist/tailwind.min.css" />
      </head>
      <Page {...pageProps} />
    </main>
  )
}
