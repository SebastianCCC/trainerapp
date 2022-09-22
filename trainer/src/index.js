import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import { StateProvider } from './Util/StateContext'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { Online } from 'react-detect-offline'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        <Layout>
          <Online>
            <App />
          </Online>
        </Layout>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
)

serviceWorkerRegistration.register()
