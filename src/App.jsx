import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App(){
return <div className="h-screen bg-black">

  <div className="h-[90%] flex">
    <Sidebar/>
    <Display/>
   
  </div>

  <Player/>
  <audio prelode = 'auto'></audio>

</div>
}


export default App;