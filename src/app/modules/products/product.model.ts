import { TVarient, TProduct } from './product.interface';
import { Schema, model } from 'mongoose';

const varientSchema = new Schema<TVarient>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  variants: { type: [varientSchema], required: true },
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

export const Product = model<TProduct>('Product', productSchema);
