import cors from 'cors';

import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/products/product.route';
import { OrderRoutes } from './app/modules/orders/order.routes';

const app: Application = express();

//Perser
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);

//Perser from Orders
app.use('/api/orders', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  res.send();
};

app.get('/', getAController);

export default app;
