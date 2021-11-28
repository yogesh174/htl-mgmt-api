"use strict";
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities = await strapi.services.hostel.find(ctx.query, [
      "allocation",
      {
        path: "allocation",
        populate: {
          path: "allocatedBy",
        },
      },
      {
        path: "allocation",
        populate: {
          path: "allocatedTo",
        },
      },
    ]);

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.hostel })
    );
  },
};
