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
			operation: null,
			totValue:  null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonName) {
		this.setState((prevState) => {
			return calculate(prevState, buttonName)
		})
	}

	render() {
		const { total, next, totValue } = this.state;
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-6">
							<Display
								value={next || total || "0"}
								totValue={totValue || "0"}
							/>
							<ButtonPanel clickHandler={this.handleClick} />
							<footer><i className="fas fa-solid"></i> codeLeaf	&#128640;</footer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
