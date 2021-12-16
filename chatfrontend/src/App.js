
import './App.css';
import Chatcomponent from './components/Chatcomponent';
import Topbar from './components/topbar/Topbar';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
     <Topbar/>
     <Users/>
    <Chatcomponent/> 

    </div>
  );
}

export default App;
