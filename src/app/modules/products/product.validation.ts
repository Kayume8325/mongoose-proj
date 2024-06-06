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
