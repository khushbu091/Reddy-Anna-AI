import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Main_Component/Layout";
import Home from "./Component/Home";
import Privacy_Policy from "./Component/Privacy_policy";
import Reddy_News from "./Component/ReddyNews";
import CricketLiveScores from "./Component/CricketLive";


const App =()=>{
  return (
    <>

      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="privacyPolicy" element={<Privacy_Policy/>}/>
              <Route path="reddyNews" element={<Reddy_News/>}/>
              <Route path="cricketLive" element={<CricketLiveScores/>}/>





              </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
