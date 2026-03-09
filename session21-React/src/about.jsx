
import './about.css'

export const About = ({userName , age , isGraduated , list})=>{
    // let userName = props.userName
    // let age = props.age

    // let {userName , age} = props
    console.log(list)
    // list.map(()=>{

    // })

    // console.log(props)
    return (
        <>
            <h1 style={{color:'red'}}>Welcome {userName}</h1>
            <h2 className={age == 20 ? 'text-blue' : 'text-red'}>age = {age}</h2>

            {
                isGraduated ? <h2>graduated = true</h2> :  <h2>graduated = false</h2>
            }

            <h3>Addresses </h3>
            <ul>
               {
                list.map((item , i)=>
                  (
                      <li style={{backgroundColor : item=='Nasr city' ? 'teal' : 'lightgray'}} key={i}>{item}</li>
                  )
                )
               }
            </ul>
            
           

        </>
    )
}

export const Contact= ()=>{
    return <h1>Contact</h1>
}