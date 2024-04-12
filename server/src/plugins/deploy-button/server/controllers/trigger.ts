import { Strapi } from '@strapi/strapi';
import { ofetch } from 'ofetch'

export default ({ strapi }: { strapi: Strapi }) => ({
  async index(ctx) {
    if (!process.env.STRAPI_ADMIN_DEPLOY_WEBHOOK) {
      ctx.body = 'fail';
      return
    }
    await ofetch(process.env.STRAPI_ADMIN_DEPLOY_WEBHOOK, {
      method: 'post'
    })
    ctx.body = 'ok';
  },
});
