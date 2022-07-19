import useSWR from 'swr';
import { add, getAll } from '../api/products';


interface TProduct {
    id?: number;
    name: string;
}

const useProducts = () => {
    
    const { data, error, mutate } = useSWR('/products')

    const create = async (item: TProduct) => {
        const product  = await add(item)
        mutate([...data,product])
    }

    return {
        create,
        data,
        error
    }
}

export default useProducts