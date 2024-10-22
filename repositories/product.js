import HttpRepository from ".";
class ProductRepository extends HttpRepository {
    path = 'project';
    async getAllProducts() {
        const response = await this.get(`${this.path}/get`, {})
        return response
    }
}

export default ProductRepository