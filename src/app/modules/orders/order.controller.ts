import { Order } from './order.model';
import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { OrderValidationSchema } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  const zodParsedData = OrderValidationSchema.parse(orderData);
  const result = await orderServices.createOrder(zodParsedData);
  res.json({
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
};

const getAllorders = async (req: Request, res: Response) => {
  const email = req.query.email as string;
  try {
    let orders;

    if (email) {
      // Fetch orders for the specified email
      orders = await Order.find({ email });
      return res.json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: orders,
      });
    } else {
      // Fetch all orders
      orders = await Order.find();
      return res.json({
        success: true,
        message: 'All orders fetched successfully!',
        data: orders,
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching orders.',
      error: err,
    });
  }
};

export const orderControllers = {
  createOrder,
  getAllorders,
};
