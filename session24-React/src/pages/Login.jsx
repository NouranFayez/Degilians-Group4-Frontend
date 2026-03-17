import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error , setError] = useState(null)
    const navigate = useNavigate()

    // errors: {
    //     userEmail : {
    //         required : {
    //             message : "email is Required"
    //         }
    //     }
    // }

    let obj = {
        type: "text",
        placeholder: "Enter your email",
        className: "form-control"
    }

    //  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // console.log(obj.type)
    // console.log(obj.placeholder)
    // console.log(obj.className)
    // spread operator
    // console.log({...obj})

    async function sendData(data) {

        try {
            const response = await axios.post("https://erp.techsexperts.cloud/api/admins/login", data)
            // console.log(response.data.data.accessToken)
            localStorage.setItem('token', response.data.data.accessToken)
            navigate("/products")

        }
        catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)
        }
    }
   
    function handleInput (){
        setError(null)
        console.log(error)
    }

    // console.log( useForm())
    return (
        <>
        {/* && operator */}
        {
            error && <div className="alert alert-danger my-3"> <p>{error}</p></div> 
        }
            <form onSubmit={handleSubmit(sendData)} className="row gy-3 mt-3">
                {/* <div className="col-6">
                    <input type="text" className="form-control" placeholder="enter your name"
                    {...register('userName' , {
                        required : "Name is Required" ,
                        minLength :{
                            value : 3 ,
                            message : "min 3 character"
                        },
                        maxLength :{
                            value:10 ,
                            message : "max 10 character"
                        }
                    })}
                     />
                    <p className="text-danger">{errors.userName?.message}</p>
                </div>
                <div className="col-6">
                    <input  {...obj} {...register("userEmail" ,
                     {required : "Email is Required" ,
                        pattern :{
                            value :  /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,
                            message : "invalid email"
                        }
                    } )} />
                    <p className="text-danger">{errors.userEmail?.message}</p>
                </div> */}

                <div className="col-6">
                    <input type="text" className="form-control" placeholder="enter your phone" {...register("phone", { required: "Phone is required" })} />
                    <p className="text-danger">{errors.phone?.message}</p>
                </div>
                <div className="col-6">
                    <input type="text" onInput={handleInput} className="form-control" placeholder="enter your password" {...register("password", { required: "password required" })} />
                    <p className="text-danger">{errors.password?.message}</p>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary">
                        Submit
                        {/* <Link to="/products">Submit</Link> */}
                    </button>
                </div>
            </form>
        </>
    )
}