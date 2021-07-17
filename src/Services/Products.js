import axios from "axios";

const URLBase = "http://localhost:8080/product/";
const URLList = "/list/";
const URLInsert= "/insert/";
const URLUpdate = "/update/";
const URLDelete = "/delete/";

class Products {
    getProduct(seqProduct) {
        return axios.get(URLBase + seqProduct);
    }
    
    getProducts() {
        return axios.get(URLBase + URLList);
    }

    insertProduct(product) {
        return axios.post(URLBase + URLInsert, product);
    }

    updateProduct(product) {
        return axios.put(URLBase + URLUpdate + product.seqProduct, product);
    }

    deleteProduct(seqProduct) {
        return axios.delete(URLBase + URLDelete + seqProduct);
    }
}

export default new Products();