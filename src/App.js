import LifeCycleMethod from "./components/Hook";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Screen/Home";
import Post from "./Screen/Post";
import ExampleComponent from "./Router";
import UseMemo from "./Hooks/UseMemo";
import Api from "./Screen/Api";
function App() {
  return ( 
   
<BrowserRouter>
<Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/api" element={<Api/>}/>
 <Route path="/post/:id" element={<Post/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
