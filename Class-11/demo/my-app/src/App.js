import MemesList from "./components/MemesList";
// import NewComp from "./components/NewComp";
import PropsExample from "./components/PropsExample";

import DataJson from './components/data.json';
// const memesData = require('./components/data.json')
function App() {
  return (
    <>
      {/* <h1 style={{color:"red"}} className={"firstHeading"}>My first react app</h1> */}
      <p>This is a paragarph</p>
      {/* <NewComp/> */}
      {/* <PropsExample name="Rana" age="26"/>
      <PropsExample name="Hala" age="20"/> */}
      

      <MemesList data={DataJson}/>
    </>
  )
}

export default App;