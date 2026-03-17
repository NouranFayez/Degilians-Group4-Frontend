import { useParams } from "react-router-dom"

export const SingleProduct = ()=>{

    const params = useParams()
    console.log(params.productID)
    return (
        <>
            <h1>Single Product</h1>
        </>
    )
}