import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/*"
              element={<Profile state={props.state.profilePage} />} />
            <Route path="/dialogs/*"
              element={<Dialogs state={props.state.messagesPage} />} />
          </Routes>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
