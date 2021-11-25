import logo from './logo.svg';
import './App.css';
import Profilephoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
     <Profilephoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
