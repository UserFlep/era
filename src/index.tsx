import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import { StoreProvider } from './context';
import {Provider, rootStore} from "./store/mst/Root";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Provider value={rootStore}>{/*Закомментировать*/}
              <StoreProvider>
                <App />
              </StoreProvider>
          </Provider>{/*Закомментировать*/}
      </ApolloProvider>
  </React.StrictMode>
);

