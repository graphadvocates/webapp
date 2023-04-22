import { gql } from 'graphql-request';
import { hasuraAdminClient } from '../../lib/hasura-admin-client';
import Joi from 'joi';

const spotlightSchema = Joi.object({
  name: Joi.string().max(50).required(),
  discord: Joi.string().max(20).required(),
  twitter: Joi.string().max(50).required(),
  region: Joi.string().max(20).required(),
  picUrl: Joi.string().max(500).required(),
  role: Joi.string().max(100).required(),
  background: Joi.string().required(),
  q1: Joi.string().required(),
  fullArticle: Joi.string().required(),
});

const insertSpotlight = gql`
  mutation insertSpotlght($details: json) {
    insert_spotlights_one(object: { spotlight_detail: $details }) {
      id
      spotlight_detail
    }
  }
`;

export default async (req, res) => {
  try {
    // Validate and sanitize the input data
    const { error, value: sanitizedData } = spotlightSchema.validate(
      req.body.details,
      {
        abortEarly: false,
      }
    );
    if (error) {
      // If the input data is invalid, return a 400 Bad Request response
      res
        .status(400)
        .json({ error: error.details.map((detail) => detail.message) });
      return;
    }

    // Insert the sanitized data into the database
    const insertSpotlightOne = await hasuraAdminClient.request(
      insertSpotlight,
      { details: sanitizedData }
    );
    res.status(200).json({ ...insertSpotlightOne, success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
