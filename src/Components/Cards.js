import React,{Component} from 'react'
// import pizza from '../images/pizza.jpg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class Cards extends Component{
    constructor(){
        super()
   }
   buttonclickHandlerInside(){
        alert('this is Clicked Inside Class')
    }
    render(){
        return(
            <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                    <img className="card-img-top" src={require('../'+this.props.image)} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description.length>250?this.props.description.substring(0,150)+'.....':this.props.description}</p>
                        <button className="btn btn-primary" onClick={this.buttonclickHandlerInside}>Inside </button>
                        &nbsp;&nbsp;<button className="btn btn-primary" onClick={()=> buttonclickHandlerOutside(this.props.title,this.props.description)}>Outside </button>
                    </div>
                </div>
            </div>
            
        )
    }
}

function buttonclickHandlerOutside(title,description){
    // alert('This is Clicked')
    const MySwal = withReactContent(Swal)
    // MySwal.fire({
    //     type:'success',
    //     title: 'Demo Alert',
    //     footer: 'Copyright 2018',
        
    //   })
      MySwal.fire({
        type: 'success',
        title: 'Ola....',
        text: title
        // footer: '<a href>Why do I have this issue?</a>'
      })
}
export default Cards