import intance from "./config"

export const add = (product: any) => {
    return intance.post('/products', product)
}

export const getAll = () => {
    return intance.get('/products')
}