import productRepository from "../repositories/product.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";
import saleRepository from "../repositories/sale.repository.js";
import productInfoRepository from "../repositories/productInfo.repository.js";

async function createProduct(product){
    if(await supplierRepository.getSupplier(product.supplierId)){
        return await productRepository.insertProduct(product);
    }

    throw new Error("O supplier id informado não existe!");
    
}

async function getProducts(){
    return await productRepository.getProducts();
}

async function getProduct(id){
    const product =  await productRepository.getProduct(id);
    product.info = await productInfoRepository.getProductInfo(parseInt(id));

    return product;
}

async function deleteProduct(id){
    const sales= await saleRepository.getSalesByProductId(id);
    if(sales.length > 0){
        throw new Error("não é possivel excluir o produto, pois foi vendido! ");
    }
    await productRepository.deleteProduct(id);
}

async function updateProduct(product){
    if(await supplierRepository.getSupplier(product.supplierId)){
        return await productRepository.updateProduct(product);
    }

    throw new Error("O supplier id informado não existe!");
}

async function saveProductInfo(productInfo){
    await productInfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo){
    await productInfoRepository.updateProductInfo(productInfo);
} 

async function createReview(review, productId){
    await productInfoRepository.createReview(review,productId);
} 

async function deleteReview(productId, index){
    await productInfoRepository.deleteReview(parseInt(productId), parseInt(index));
} 

async function findAllProductInfo(){
    return await productInfoRepository.findAll();
} 

async function deleteProductInfo(productId){
    await productInfoRepository.deleteProductInfo(productId);
} 

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    saveProductInfo,
    updateProductInfo,
    createReview,
    deleteReview,
    findAllProductInfo,
    deleteProductInfo
}