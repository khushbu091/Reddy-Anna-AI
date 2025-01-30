import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Main_Component/Layout";
import Home from "./Component/Home";


const App =()=>{
  return (
    <>

      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home/>}/>


              </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
