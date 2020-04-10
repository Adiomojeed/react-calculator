import React from "react";
import ReactDOM from "react-dom";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import calculate from './logic/calculate.js'

class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null
        }
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonName) {
        this.setState(prevState => {
            return calculate(prevState, buttonName)
        })
    }

	render() {
        const {total, next} = this.state
		return (
			<div>
				<Display value={next || total || '0'}  />
				<ButtonPanel clickHandler={this.handleClick} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
