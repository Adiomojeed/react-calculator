import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (e) {
        this.setState({value: (this.state.value + e.target.value)})
    }

    render() {
        const {value} = this.state
        return (
            <div>
                <input type="text" disabled value={value} />
                <button type='button' onClick={this.handleClick}>1</button>
            </div>
        )
    }
}

export default Calculator
