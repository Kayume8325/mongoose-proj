import { ProductServices } from './product.service';
import { Request, Response } from 'express';
import { Product } from './product.model';
import { productValidationSchema } from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const zodPersedData = productValidationSchema.parse(productData);
  const result = await ProductServices.createProduct(zodPersedData);
  res.json({
    success: true,
    message: 'Product created successfully After validation!',
    data: result,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm as string;

  try {
    let products;

    if (searchTerm) {
      // Fetch products that match the search term
      products = await Product.find({ name: new RegExp(searchTerm, 'i') });
      return res.json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: products,
      });
    } else {
      // Fetch all products
      products = await Product.find();
      return res.json({
        success: true,
        message: 'All products fetched successfully!',
        data: products,
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching products.',
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not Found Single product',
      error: err,
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.updateProductById(productId);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not update product',
      error: err,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductById(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error deleting product',
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProductById,
  deleteProductById,
};
