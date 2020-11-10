import React, {Component} from 'react';

class Form2 extends Component {

    state = {
        inputValue : 'default'
    }

    render() {
        return (
            <div>
                <input onChange={this.inputChange} value={this.state.inputValue}/>
            </div>
        );
    }

    inputChange = (e) => {
        console.log(e.target.value);
        this.setState({inputValue: e.target.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
        console.log(this.props);
    }
}

export default Form2;