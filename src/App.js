import React,{Component} from 'react';
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
class App extends Component {
  render(){
    return (
    <div>
      <Navbar />
      <br />
      <MainContent />
    </div>
    );
  }
  
}

export default App;
