import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.scss";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import calculate from "./logic/calculate";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: null,
			next: null,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonName) {
		this.setState((prevState) => {
			return calculate(prevState, buttonName);
		});
	}

	render() {
		const { total, next } = this.state;
		return (
			<React.Fragment>
				<div className="con">
					<Display value={next || total || "0"} />
					<ButtonPanel clickHandler={this.handleClick} />
					<footer>codeLeaf</footer>
				</div>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
