import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductById = async (id: string) => {
  const result = await Product.findByIdAndUpdate(id);
  return result;
};
const deleteProductById = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProductById,
  deleteProductById,
};
