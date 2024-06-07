import React, {PropsWithChildren} from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// Singular Expressions
const client = new ApolloClient({
  uri: `https://localhost:${process.env.REACT_APP_GRAPHQL_API_PORT}`,
  cache: new InMemoryCache(),
});

interface Props extends PropsWithChildren{
  debug?: boolean;
}

function GraphQL({ children, debug = false }: Props): JSX.Element | null {
  if (debug) {
    // Implement sticky modal
    return <ApolloProvider client={client} >{children}</ApolloProvider>;
  }
  return null;
}
export default GraphQL;
