import './App.css';
import User from './components/user/user';
import Link from './components/user/links/Link';
import Navbar from './components/user/navbar/Navbar';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="user_container">
        <User name="Franco Jara" img="https://rickandmortyapi.com/api/character/avatar/630.jpeg"/>
      </div>
      <Link />
    </div>
  );
}

export default App;