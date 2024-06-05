import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';
// const OrderSchema = new Schema<TOrder>({
//   email: { type: String },
//   productId: { tye: String },
//   price: { type: Number },
//   quantity: {
//     type: Number,
//   },
//   inStock: { type: Boolean },
// });

// export const Order = model<TOrder>('Order', OrderSchema);

const OrderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String },
  price: { type: Number },
  quantity: { type: Number, required: true },
});

export const Order = model<TOrder>('Order', OrderSchema);
