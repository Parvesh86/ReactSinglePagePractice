import React,{Component} from 'react'
import logo from '../logo.svg';

class Navbar extends Component{
    gettime(){
        let time = new Date
        let timeofday = time.getHours();
        let timetoprint ='';
            
        if(timeofday>=0 && timeofday<=12){
            timetoprint='Good Morning'
        }else if(timeofday>12 && timeofday<=16){
            timetoprint='Good AfterNoon'
        }else if(timeofday>16 && timeofday<=19){
            timetoprint='Good Evening'
        }else{
            timetoprint='Good Night'
        }
        return timetoprint
  }
    render(){
       return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src={logo} width="50" height="50" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                    <span>{this.gettime()}</span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar