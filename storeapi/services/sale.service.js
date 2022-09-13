import saleRepository from "../repositories/sale.repository.js"
import clientRepository from "../repositories/client.repository.js"
import productRepository from "../repositories/product.repository.js"

async function createSale(sale){
    let error = "";
    if(!await clientRepository.getClient(sale.clientId)){
        error = " o cliente_id não existe!";
    }

    const product = await productRepository.getProduct(sale.productId);
    if(!product){
        error += " o produto id não existe!";
    }
    if (error){
        throw new Error(error);
    }

    if (product.stock > 0 ){
        sale = await saleRepository.insertSale(sale);
        product.stock--;
        await productRepository.updateProduct(product);
        return sale;

    }else{
        throw new Error(" o produto informado esta indisponivel")
    }
    

}

async function getSales(productId, supplierId){
    if (productId){
        return await saleRepository.getSalesByProductId(productId);
    }
    if (supplierId){
        return await saleRepository.getSalesBySupplierId(supplierId);
    }
    return await saleRepository.getSales();
    
}

async function getSale(id){
    return await saleRepository.getSale(id);
}

async function deleteSale(id){

    const sale = await saleRepository.getSale(id);
    if(sale){

        const product = await productRepository.getProduct(sale.productId); 
        await saleRepository.deleteSale(id);
        product.stock++;
        await productRepository.updateProduct(product);

    }else{
        throw new Error("a venda informada não existe");
    }
    
}

async function updateSale(sale){
    let error = "";
    if(!await clientRepository.getClient(sale.clientId)){
        error = " o cliente_id não existe!";
    }

    const product = await productRepository.getProduct(sale.productId);
    if(!product){
        error += " o produto id não existe!";
    }
    if (error){
        throw new Error(error);
    }
    return await saleRepository.updateSale(sale);
}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}