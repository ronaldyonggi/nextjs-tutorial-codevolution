import { Metadata } from "next"

interface ProductDetailsProps {
  params: {
    productId: string
  }
}

// export const generateMetadata = ({ params }: ProductDetailsProps ) : Metadata => {
//   return {
//     title: `Product ${params.productId}`
//   }
// }

export const generateMetadata = async ({ params }: ProductDetailsProps ) : Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 180)
  })
  return {
    title: `Product ${title}`
  }
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return (
    <h1>Details about product {params.productId}</h1>
  )
}