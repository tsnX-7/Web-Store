import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res)=> {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch(error) {
        console.log("Get all products error ", error.message);
        res.status(500).json({success: false, message: "Server failed"});
        
    }
};

export const createProduct = async (req, res)=>{
    const product = req.body; //user will send this data
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please fill all the fields"});
    }
    
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct, message: "Product created successfully"});
    } catch(error) {
        console.log('Error in create product: ', error.message);
        res.status(500).json({success: false, message: "Server error. Try Again"});
    }

};

export const updateProduct = async (req, res)=> {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid product id"});
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct, message: "Product Updated succesfully"});
    } catch (error) {
        console.log("Updated unsuccessful");
        
        res.status(500).json({success: false, message: "Could not update. Try Again"});
    }
};

export const deleteProduct = async (req, res)=> {
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted succesfully"});
    }catch (error) {
        res.status(500).json({success: false, message: "No product found"});
    }
};