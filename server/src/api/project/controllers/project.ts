/**
 * project controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::project.project', ({ strapi }) => ({
    async findOne(ctx) {
        const result = await super.findOne(ctx);
        if (result.data.attributes.video?.embed) {
            result.data.attributes.video.embed = JSON.parse(result.data.attributes.video.embed)
        }
        return result
    }
}));
