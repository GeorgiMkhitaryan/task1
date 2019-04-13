import React from 'react';
import Container from "./container"
import "./App.css"


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            displayData: []
        }
    };

    getNewColor = () => {
        let a = Math.floor(Math.random() * 10);
        let b = Math.floor(Math.random() * 10);
        let c = Math.floor(Math.random() * 10);

        return `#${a}${c}${b}`;
    };

    changeColor=(index)=>{
        let data = this.state.displayData;
        data[index].color = this.getNewColor();
        this.setState({
            displayData: data
        })
    }
    delete = (index) =>{
        let displayData = this.state.displayData;
        displayData.splice(index, 1);
        this.setState({
            displayData
        })
    }

    appendData=(index)=> {
        let data = this.state.displayData;
        data.push({
            color: this.getNewColor(),
            text: 'Hello World',
            is_edit: false
        });

        this.setState({
            displayData : data
        });
    }

    toggleEdit = (index) => {
        let data = this.state.displayData;
        data[index].is_edit = !data[index].is_edit;
        console.log(data)
        this.setState({
            displayData: data
        })
    }
    onchange=(name,index) =>{
        let data = this.state.displayData;
        data[index].text = name;
        this.setState({
            displayData: data
        })
    }

    render() {
        return (
            <div className={"main"}>
                <div className={"button"}>
                    <button onClick={this.appendData} className={"buttonAdd"}>
                        Add Hello World {this.state.displayData.length ? this.state.displayData.length : '' }
                    </button>
                </div>
                <div className="display-data-Container">
                    {this.state.displayData.map((item, index) => (
                        <Container
                            key={index}
                            item={item}
                            index={index}
                            changeColor={this.changeColor}
                            toggleEdit={this.toggleEdit}
                            delete={this.delete}
                            onchange={event => this.onchange(event.target.value, index)}
                        />
                    ))}
                </div>
            </div>
    );
    }
}


export default App;