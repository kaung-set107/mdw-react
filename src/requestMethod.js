import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2RhYTcwODRjNDk3OWQ3OGFkOTgzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTg1OTI1MiwiZXhwIjoxNjYwMTE4NDUyfQ.nMWbwP8uE5CKtBJst4FSSmfkjD16Y4JGrC0H4ipTHiE";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});

