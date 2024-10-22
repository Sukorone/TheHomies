export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        isLoading: false
    }),
    actions: {
        async getAllProducts() {
            try {
                this.isLoading = true;
                const { $api } = useNuxtApp();
                const response = await $api.product.getAllProducts();
                this.products = response;
                return this.products;
            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false;
            }


        },
    },
})