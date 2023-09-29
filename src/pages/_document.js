import { check_token } from '@/Redux/AuthSlice'
import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Document() {
  
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
