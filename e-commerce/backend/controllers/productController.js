import product from "../models/product.js";


//Create a new product
export const createProduct = async(req, res)=>{
    try{
        const products = await product.create(req.body);
        res.json({
            message : "Product created successfully",
            products
        })
    }
    catch(err){
        res.status(500).json({message : 'Server Error', err});
    }
}

//Get all products
export const getProducts = async (req, res)=>{
    try{
        const products = await product.find().sort({createdAt : -1});
        res.json(products)
    }
    catch(err){
        res.status(500).json({
            message : 'Server Error', err
        })
    }
}

//Delete a product 
export const updateProduct = async (req, res)=>{
    try{
        const updated = await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        );
        res.json({
            message : "Product updated successfully",
            updated
        })
    }
    catch(err){
        res.status(500).json({
            message : "Server error", err
        })
    }
}
export const deleteProduct = async (req, res)=>{
    try{
        const updated = await product.findByIdAndDelete(
            req.params.id,
            req.body,
            {new : true}
        );
        res.json({
            message : "Product deleted successfully",
            updated
        })
    }
    catch(err){
        res.status(500).json({
            message : "Server error", err
        })
    }
}
