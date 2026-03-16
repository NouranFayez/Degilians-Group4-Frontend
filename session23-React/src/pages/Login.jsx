import { useForm } from "react-hook-form"

export const Login = ()=>{
    const {register , handleSubmit , formState:{errors}} = useForm()

    // errors: {
    //     userEmail : {
    //         required : {
    //             message : "email is Required"
    //         }
    //     }
    // }

    let obj = {
        type : "text" ,
        placeholder : "Enter your email",
        className : "form-control"
    }

    //  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // console.log(obj.type)
    // console.log(obj.placeholder)
    // console.log(obj.className)
    // spread operator
    console.log({...obj})

    function sendData(data){
        console.log(data)

    }

    console.log( useForm())
    return (
        <>
            <form onSubmit={handleSubmit(sendData)} className="row gy-3 mt-3">
                <div className="col-6">
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
                </div>
                <div className="col-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}