import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import GlobalStyle from '../styles/GlobalStyles'
import { storeWrapper } from "../store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  )
}

export default storeWrapper.withRedux(MyApp)
