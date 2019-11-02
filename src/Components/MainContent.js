import React,{Component} from 'react'
import Cards from './Cards'
import data from '../DB/Database'

class MainContent extends Component{
    constructor(props) 
    {
        super(props);
        this.state={data:data}
    }
    ChangeStatus= (val)=>{
        console.log(val.target.value)
        var foundValue = data.filter(data=>data.id==val.target.value);
        console.log(foundValue[0])
       
        
    }
    render(){
        
    let optionsData = this.state.data.map((item, i) => {
        return (
            <option key={i} value={item.id}>{item.slug}</option>
        )
    }, this);
    let datafromdb = data.map(item=><Cards key={item.id} title={item.Title} description={item.description} image={item.image}/>)
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="form-group">
                        <label>Select Cards Category</label>
                        <select className="form-control" onChange={this.ChangeStatus} >
                            <option value="">Select Data</option>
                            {optionsData}
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                {datafromdb}    
            </div>
        </div>
    )
    }
}

export default MainContent