import axios from "axios";

const client = axios.create({ baseUrl: "http://localhost:4848/api" });

export default client;
