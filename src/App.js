import './App.css';
import User from './components/user/user';
import Link from './components/user/links/Link';

function App() {
  return (
    <div className="app-container">
      <div className="user_container">
        <User name="Franco Jara"/>
      </div>
      <Link/>
    </div>
  );
}

export default App;
