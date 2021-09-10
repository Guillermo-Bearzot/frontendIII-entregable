import React, {Component}  from "react";
import data from "./data.json";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";


class Layout extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            contador: 0,
            seleccionAnterior: "",
            historial :[]
        }
        
    }
    
    componentDidUpdate () {
        if(this.state.seleccionAnterior !== ""){ 
             this.state.historial.push(this.state.seleccionAnterior);
        }
        
    }

     handlerClick = (e) => {
        const id = e.target.id;
        if(this.state.contador >= 7){
            alert("FIN .");
        }else if (id === "A" && this.state.seleccionAnterior === ""){
        this.setState({
            contador:this.state.contador + 1,
            seleccionAnterior:"A",
        })
        }else if( id==="B" && this.state.seleccionAnterior === ""){
            this.setState({
                contador : this.state.contador + 2,
                seleccionAnterior: "B"
            })
        }else if(id ==="A" && this.state.seleccionAnterior === "A"){
            this.setState({
                contador:this.state.contador + 2,
                seleccionAnterior:"A",
        })
        }else if(id ==="B" && this.state.seleccionAnterior === "A"){
            this.setState({
                contador:this.state.contador + 3,
                seleccionAnterior:"B",
        })
        }else if(id ==="A" && this.state.seleccionAnterior === "B"){
            this.setState({
                contador:this.state.contador + 1,
                seleccionAnterior:"A",
        })
        }else if(id ==="B" && this.state.seleccionAnterior === "B"){
            this.setState({
                contador:this.state.contador + 2,
                seleccionAnterior:"B",
        })
    }
        
    }
    
    
    render(){
        return (
            <>
            <div className="layout">
            <h1 class="historia">{data[this.state.contador].historia}
            </h1>
            <div>
                <Opciones handlerClick={this.handlerClick}
                opcionA={data[this.state.contador].opciones.a}
                opcionB={data[this.state.contador].opciones.b} />
            </div>
            <div>
                <Recordatorio seleccionAnterior={this.state.seleccionAnterior} 
                     historial={this.state.historial.map((e,index) => <li key={index}>{e}</li>)}/>
            </div>
            </div>
            </>
        )
    }
}


export default Layout;