import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Main_Component/Layout";
import Home from "./Component/Home";
import Privacy_Policy from "./Component/Privacy_policy";
import Reddy_News from "./Component/ReddyNews";
import CricketLiveScores from "./Component/CricketLive";
import Betting_Tips from "./Sub_components/Betting_tips";
import Betting_Tips_Tricks from "./Sub_components/TipsTricks";
import CasinoGames from "./Sub_components/CasinoGames";
import CricketBetting from "./Sub_components/Cricket_betting";
import OnlineBetting from "./Sub_components/Online_betting";
import LegalAndSafety from "./Sub_components/Legal&safety";
import LiveMatch from "./Sub_components/LiveMatch";
import OfferAndBonus from "./Sub_components/Offer&bonus";
import OnlinePlatforms from "./Sub_components/OnlinePlatforms";
import Promotions from "./Sub_components/Promotions";
import Sports from "./Sub_components/Sport";


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
              <Route path="bettingTips" element={<Betting_Tips/>}/>
              <Route path="Tips&Tricks" element={<Betting_Tips_Tricks/>}/>
              <Route path="casinoGames" element={<CasinoGames/>}/>
              <Route path="cricketBetting" element={<CricketBetting/>}/>
              <Route path="online_betting" element={<OnlineBetting/>}/>
              <Route path="legal&safety" element={<LegalAndSafety/>}/>
              <Route path="liveMatch" element={<LiveMatch/>}/>
              <Route path="offer&bonus" element={<OfferAndBonus/>}/>
              <Route path="onlinePlatform" element={<OnlinePlatforms/>}/>
              <Route path="promotions" element={<Promotions/>}/>
              <Route path="sport" element={<Sports/>}/>











              </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
