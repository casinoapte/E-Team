import React, { useState, useEffect } from 'react'
import API from './utils/API'
import UserContext from './contexts/UserContext'
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

/* Nav Bars */

import Sidebar from './components/sideBar/Sidebar'
import Navbar from './components/navBar/NavBar'

/* Main Pages */

import Test from './pages/home/Test'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Stats from './pages/stats/Stats'
import Shop from './pages/shop/Shop'
import Settings from './pages/settings/Settings'

/* Game Pages */

import CSGO from './pages/csgo/CSGO'
import Dota from './pages/dota/Dota'
import LOL from './pages/lol/LOL'
import Fortnite from './pages/fortnite/Fortnite'
import Starcraft from './pages/starcraft/Starcraft'

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await API.postToken(
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await API.getUsers(
          {
            headers: { "x-auth-token": token }
          });
        setUserData({
          token,
          user: userRes.data
        })
      }
    };
    checkLoggedIn()
  }, [])

  return (
    <>
      <BrowserRouter>

        <UserContext.Provider value={{ userData, setUserData }}>

          {/* Navigation Bars */}

          <Navbar />
          <Sidebar />

          <Switch>

            {/* Main Pages  */}

            <Route exact path="/" component={Home}></Route>
            <Route exact path="/test" component={Test}></Route>
            <Route exact path="/explore" component={Explore}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/stats" component={Stats}></Route>
            <Route exact path="/shop" component={Shop}></Route>
            <Route exact path="/settings" component={Settings}></Route>

            {/* Specific Game Pages  */}

            <Route exact path="/CSGO" component={CSGO}></Route>
            <Route exact path="/League-Of-Legends" component={LOL}></Route>
            <Route exact path="/Dota" component={Dota}></Route>
            <Route exact path="/Fortnite" component={Fortnite}></Route>
            <Route exact path="/Starcraft" component={Starcraft}></Route>

          </Switch>

        </UserContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
