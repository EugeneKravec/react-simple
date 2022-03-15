import Header from "./components/Header";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div >
  );
}


export default App;
