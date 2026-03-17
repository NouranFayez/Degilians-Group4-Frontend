import { useEffect, useState } from "react"
import api from "../api/axios"
import naturalImg from "../assets/images.jpg"
import { Link } from "react-router-dom"

export const Products = () => {
    // const name = "Nouran"
    const [products, setProducts] = useState([])

    async function getData() {
        // const response = await api.get("/admins/products/all-products?only_volt=1")
        const response = await api.get("products")
        const data = await response.data.products
        setProducts(data)
        // console.log(data)

        // console.log(response.data)



    }


    useEffect(() => {
        getData()
    }, [])




    return (
        <>
            <div className="row">
                {
                    products.map((item) => {
                        return (
                            <div className="col-3" key={item.id}>
                                <div className="card">
                                    <img src={item.thumbnail} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h3>{item.title}</h3>
                                        <p>
                                            {item.description}
                                        </p>
                                        {/* localhost:556/products/3 */}
                                        <button className="btn btn-warning">
                                            <Link to={`/products/${item.id}`}>Single Product</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        )

                    })

                }

            </div>
        </>
    )
}

// https://erp.techsexperts.cloud/api/admins/products/all-products?only_volt=1