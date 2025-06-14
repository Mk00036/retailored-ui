// src/services/graphqlService.js
import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.retailored.skylinebiz.in/graphql';

const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GraphQLService = {
  async query(query, variables = {}) {
    return await client.request(query, variables);
  },
};
