import React, { useState } from 'react';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.min.css';

function GraphiQLExample() {
  const [apiUrl] = useState('/graphql');

  function graphQLFetcher(graphQLParams) {
    return fetch(apiUrl, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then((response) => response.json());
  }

  return <GraphiQL fetcher={graphQLFetcher} />;
}

export default GraphiQLExample;
