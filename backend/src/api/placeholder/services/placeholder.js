'use strict';

/**
 * placeholder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::placeholder.placeholder');
