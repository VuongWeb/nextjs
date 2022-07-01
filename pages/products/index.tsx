import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

type ProductProps = {
  products: any[]
}

const Products = ({ products }: ProductProps) => {
  return (
    <div>{products.map(item => (
      <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
    ))}</div>
  )
}

//server
export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  const reponse = await fetch('http://localhost:3001/products');
  const data = await reponse.json();
  return {
    props: {
      products: data.map((item: any) => ({ id: item.id, name: item.name }))
    }
  }
}
export default Products