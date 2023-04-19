
function MemesList(props){
    console.log(props)
    return(
        <>
            <h2>Memes list</h2>
            {props.data.map((meme)=>{
                return(
                    <div key={meme.ID}>
                        <h3>{meme.name}</h3>
                        <img src={meme.image} alt={meme.name}></img>
                        <p>{meme.bottomText}</p>
                    </div>
                )
            })}
        </>
    )
}

export default MemesList;