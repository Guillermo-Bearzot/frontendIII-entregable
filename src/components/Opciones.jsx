import React, {Component} from "react";


class Opciones extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="opciones">
                <div  class="opcion"><button id="A" className="botones" onClick={this.props.handlerClick} >A</button><h2 >{this.props.opcionA}</h2></div>
                <div class="opcion"><button id="B" className="botones" onClick={this.props.handlerClick}>B</button><h2 >{this.props.opcionB}</h2></div>
            
            </div>
        )
    }
}


export default Opciones;