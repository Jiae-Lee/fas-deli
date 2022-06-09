import React from 'react'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware} from 'redux'
import reducer from '../store/reducer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
