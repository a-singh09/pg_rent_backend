const Constants = {
    PROPERTY_COLLECTION: "properties",
    TENANT_COLLECTION: "tenants",
    OWNER_ID: "ownerId",
    EMAIL: "email",
    OWNER_COLLECTION: "owners",
    SECRET_KEY: process.env.JWT_SECRET,
    JWT_TOKEN_EXPIRY: "7d",
    PROPERTY_ID: "propertyId"
  };
  
  module.exports = { Constants };
  