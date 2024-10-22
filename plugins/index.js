import ProductRepository from '~/repositories/product';
export default defineNuxtPlugin(({ $config }) => {
    const runtimeConfig = useRuntimeConfig();

    const baseURL = runtimeConfig.public.API_BASE_URL;

    const api = {
        product: new ProductRepository(baseURL, {}),
    };


    return { provide: { api } };
});