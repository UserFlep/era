import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import {MSTProvider} from './context';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    name: 'db-app',
    version: '0.1'
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <MSTProvider>
              <App />
          </MSTProvider>
      </ApolloProvider>
  </React.StrictMode>
);

