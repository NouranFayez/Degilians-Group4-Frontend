

export const Welcome = () => {
    let userName = "Ahmed"
    let num = 20
    let flag = false
    return (
        <>
            <h2>Welcome {userName} </h2>
            <h2>{num + 40}</h2>
            {/* <div> */}
            {
                flag ? (
                    <div>
                        <h2>Flag = true</h2>
                        <a href="">Flag = true</a>
                    </div>

                )
                    : (
                        <div>
                            <h2>Flag = false</h2>
                            <a href="">Flag = false</a>
                        </div>
                    )
            }

            {/* </div> */}

            {/* <h2>Flag = true</h2>
            <h2>Flag = false</h2> */}
        </>

    )


}

// export default Welcome