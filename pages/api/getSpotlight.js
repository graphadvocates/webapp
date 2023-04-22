import { gql } from 'graphql-request';
import { hasuraAdminClient } from '../../lib/hasura-admin-client';

const GetSpotlight = gql`
  query GetSpotlight {
    spotlights(order_by: { created_at: desc }, limit: 1) {
      spotlight_detail
    }
  }
`;

export default async function handler(req, res) {
  //Get most recent spotlight
  try {
    const getSpotlightOne = await hasuraAdminClient.request(GetSpotlight);
    res.status(200).json({ ...getSpotlightOne, success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
