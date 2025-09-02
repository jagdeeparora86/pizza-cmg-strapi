/**
 * customer controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::customer.customer');


export default factories.createCoreController('api::customer.customer', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params; // id from URL /customers/:id

        // Use customerId field instead of DB primary key id
        const entity = await strapi.db.query('api::customer.customer').findOne({
            where: { customerId: id },
        });

        return this.transformResponse(entity);
    },

    async update(ctx) {
        const { id } = ctx.params; // id from URL /customers/:id

        // Find by customerId
        const entity = await strapi.db.query('api::customer.customer').update({
            where: { customerId: id },
            data: ctx.request.body.data,
        });

        return this.transformResponse(entity);
    },
}));