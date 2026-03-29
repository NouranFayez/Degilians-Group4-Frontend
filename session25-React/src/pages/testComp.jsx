
export const TestComp = ({ children }) => {
    // console.log(props.children)
    return <>
        <div className="w-50 alert alert-primary">
            {children}
        </div>
    </>
}