import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-primary text-text-primary antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
