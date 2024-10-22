import axios from "axios"

class HttpRepository {
    constructor(baseURL, defaultHeaders) {
        this.client = axios.create({
            baseURL,
            headers: {
                ...defaultHeaders,
                "Content-Type": "application/json",
            },
        });

        this.client.interceptors.request.use(
            (config) => {
                return this.ReqInterceptorsController(config);
            },
            (err) => Promise.reject(err)
        );

        this.client.interceptors.response.use( // обрабатывает каждый запрос, респонс 
            (response) => response,
            (err) => {
                return this.ResInterceptorsController(err);
            }
        );
    }

    ReqInterceptorsController(config) {
        // Example of potentially injecting an auth token, commented out for brevity
        // const { token } = useAuthStore();
        // if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    }

    ResInterceptorsController(err) {
        return Promise.reject(err);
    }

    async get(url, params) {
        const response = await this.client.get(url, { params });
        return response.data;
    }

    async post(url, data) {
        const response = await this.client.post(url, data);
        return response.data;
    }

    async put(url, data) {
        const response = await this.client.put(url, data);
        return response.data;
    }

    async delete(url) {
        const response = await this.client.delete(url);
        return response.data;
    }

    async patch(url, data) {
        const response = await this.client.patch(url, data);
        return response.data;
    }

    async postFormData(url, data) {
        const response = await this.client.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    }

    async putFormData(url, data) {
        const response = await this.client.put(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    }
}

export default HttpRepository