import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Clock from './Clock';

@observer
class App extends Component {
    @observable val = "Initial State";
    @observable values = [];

    handleChange = e => {
        this.val = e.target.value;
    }

    enterVal = () => {
        this.values.push(this.val);
    }

    render(){
        return(
            <div>
                <Clock/>
                <input value={this.val} onChange={this.handleChange}/>
                <button onClick={this.enterVal}>add</button>
                <ul>
                    {this.values.map( x => <li>{x}</li>)}
                </ul>
            </div>
        );
    }
}

export default App;