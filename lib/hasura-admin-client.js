import { GraphQLClient } from 'graphql-request';

export const hasuraAdminClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT,
  {
    headers: {
      //   'content-type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
  }
);
