import { GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type ProductProps = {
  product: any
}

const ProductsDetail = ({ product }: ProductProps) => {
  // const router = useRouter();
  // const id = router.query;
  // console.log(id)
  if (!product) return null
  return (
    <div> ProductsDetail {product.name}</div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:3001/products`)).json();
  const paths = data.map((product: any) => (
    { params: { id: product.id.toString() } }
  ))
  return {
    paths,
    fallback: false
  }
}

//server
export const getStaticProps: GetServerSideProps<ProductProps> = async (context: GetStaticPropsContext) => {
  const product = await (await fetch(`http://localhost:3001/products/${context.params?.id}`)).json();
  return {
    props: {
      product
    },
    revalidate: 60
  }
}
export default ProductsDetail