import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Clock extends Component {
    @observable time = new Date().toLocaleTimeString();

    componentDidMount(){
        setInterval( () => {
            this.time = new Date().toLocaleTimeString();
        }, 1000);
    }

    render(){
        return(
            <h1>{this.time}</h1>
        );
    }
}

export default Clock;