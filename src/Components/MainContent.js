import React,{Component} from 'react'
import CardsComponent from './CardsComponent'
class MainContent extends Component{
    render(){
        return(
            <div className="container">
                    <CardsComponent />
            </div>
        )
    }
}
export default MainContent