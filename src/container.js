import React, {Component} from "react";
export default class Container extends Component{

    render() {
        let style={
            backgroundColor: this.props.item.color
        }
        return(
            <div className="Container" style={style}>
                <p>#{this.props.index + 1}</p>
                {
                    this.props.item.is_edit ?
                    <input type="text" onChange={this.props.onchange}  value={this.props.item.text}/>               
                    :           
                    <p>{this.props.item.text}</p>    
                }
                
                {
                    this.props.item.is_edit ?
                    <button onClick={event => this.props.toggleEdit(this.props.index)}>save</button> :
                    <button onClick={event => this.props.toggleEdit(this.props.index)}>edit</button>
                }

                <button onClick={event => this.props.changeColor(this.props.index)}>press</button>
                <button onClick={event => this.props.delete(this.props.index)}>delete</button>                
            </div>
        )
    }
}