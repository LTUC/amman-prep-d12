import Child from './Child'
import Kitten1 from './assets/kitten1.jpg'
import Kitten2 from './assets/kitten2.jpg'
import {useState} from 'react';

function Parent(){
    const [totalTuna,setTotalTuna] = useState(20)

    const [boolValue,setBoolValue] = useState(true)

    function decrementTotalTuna(value){
        setTotalTuna(totalTuna - 1)
        console.log(value)
        setBoolValue(value)
    }
    console.log(boolValue)
    return(
        <>
        <h3>This is the Parent comp</h3>
        <p> The total number of Tuna is: {totalTuna} </p>

        <div style={{display:'flex',justifyContent:'space-around'}}> 
        <Child name="Gigi" age="2" image={Kitten1} decrementFun={decrementTotalTuna}/>
        <Child name="Rose" age="3" image={Kitten2} decrementFun={decrementTotalTuna}/>
        <Child name="Rose" age="3" image={Kitten2} decrementFun={decrementTotalTuna}/>
        <Child name="Rose" age="3" image={Kitten2} decrementFun={decrementTotalTuna}/>
        
        </div>

        {/* Ternary if */}
        {boolValue ? "Hello" : "Bye Bye"}
        </>
    )
}   

export default Parent;