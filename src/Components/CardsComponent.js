import React,{Component} from 'react'
import Cards from './Cards'
import data from '../DB/Database'

class CardsComponent extends Component{
    render(){
        let datafromdb = data.map(item=><Cards key={item.id} title={item.Title} description={item.description} image={item.image}/>)
        console.log(datafromdb.length)
        return(
            <div className="row clearfix">
                {datafromdb}
            </div>
            
                     
        )
    }
}
export default CardsComponent