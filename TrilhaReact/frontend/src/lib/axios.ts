import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})

// fazer cadastrar links, gerenciar convidados, alterar local/data no /trips/id