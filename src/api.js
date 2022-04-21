import axios from "axios";

const API_fetchPackage = axios.create({
    baseURL: "https://registry.npmjs.org/-/v1",
});

export {API_fetchPackage};