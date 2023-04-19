

function PropsExample(props){
    console.log(props)
    // De-structuring assignment
    const {name,age} = props;
    // const nama = props.name;
    // const age = props.age;
    return(
        <>
        {/* <h1>Name is: {props.name}</h1> */}
        {/* <p>Age is: {props.age}</p> */}

        <h1>Name is: {name}</h1>
        <p>Age is: {age}</p>
        </>
    )
}

export default PropsExample;