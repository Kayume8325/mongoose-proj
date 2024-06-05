// import { z } from 'zod';

// const varientSchema = z.object({
//   type: z.string(),
//   value: z.string(),
// });

// const tagsSchema = z.object({
//   type: z.string(),
// });

// const inventorySchema = z.object({
//   quantity: z.number(),
//   inStock: z.boolean(),
// });

// const productValidationSchema = z.object({
//   name: z.string(),
//   description: z.string(),
//   price: z.number(),
//   category: z.string(),
//   tags: z.array(tagsSchema),
//   variants: z.array(varientSchema),
//   inventory: inventorySchema,
// });

// export { productValidationSchema, varientSchema, tagsSchema, inventorySchema };

import { z } from 'zod';

const varientSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(varientSchema),
  inventory: z.object({
    quantity: z.number(),
    inStock: z.boolean(),
  }),
});

export { varientSchema, productValidationSchema };
