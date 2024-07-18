import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import client from './ApolloClient.ts'
import { ApolloProvider } from '@apollo/react-hooks'
import {AuthProvider} from './contexts/authContext.tsx'

/*
Our React application needs access to ...
1. Client 
2. Authorization Context 
3. Browser Router (react router )  /login  /register

*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>

    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>
)
