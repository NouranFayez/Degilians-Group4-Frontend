import { useParams } from "react-router-dom"
import { TestComp } from "./testComp"

export const SingleProduct = ()=>{

    const params = useParams()
    console.log(params.productID)
    return (
        <>
            <h1>Single Product</h1>
            <TestComp>
                <h2 className="text-primary">h2 inside alert</h2>
            </TestComp>
             <TestComp>
                <h1 className="text-danger">h1 inside alert</h1>
                
            </TestComp>
        </>
    )
}