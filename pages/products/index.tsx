import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import useProducts from '../../hook/use-hook'

type ProductProps = {
  products: any[]
}

const Products = () => {
  const { data, error, create } = useProducts();
  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed is load</div>
  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
      ))}
      <button onClick={() => create({name:"Product A"})}>Add Product</button>
    </div>
  )
}

//server
// export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
//   const reponse = await fetch('http://localhost:3001/products');
//   const data = await reponse.json();
//   return {
//     props: {
//       products: data.map((item: any) => ({ id: item.id, name: item.name }))
//     },
//     revalidate: 10
//   }
// }
export default Products