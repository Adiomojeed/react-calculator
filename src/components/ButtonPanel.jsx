import React, { Component } from "react";
import Button from "./Button";

class ButtonPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonName) {
		// eslint-disable-next-line react/destructuring-assignment
		this.props.clickHandler(buttonName);
	}

	render() {
		return (
			<div className="container">
				<div className="btn-row">
					<Button
						name="%"
						clickHandler={this.handleClick}
						color="text-grey"
					/>
					<Button
						name="+/-"
						clickHandler={this.handleClick}
						color="text-grey"
					/>
					<Button
						name="AC"
						clickHandler={this.handleClick}
						color="text-red"
					/>
					<Button
						name="÷"
						clickHandler={this.handleClick}
						color="text-grey"
					/>
				</div>
				<div className="btn-row">
					<Button name="7" clickHandler={this.handleClick} />
					<Button name="8" clickHandler={this.handleClick} />
					<Button name="9" clickHandler={this.handleClick} />
					<Button
						name="x"
						clickHandler={this.handleClick}
						color="text-grey"
					/>
				</div>
				<div className="btn-row">
					<Button name="4" clickHandler={this.handleClick} />
					<Button name="5" clickHandler={this.handleClick} />
					<Button name="6" clickHandler={this.handleClick} />
					<Button
						name="-"
						clickHandler={this.handleClick}
						color="text-grey"
					/>
				</div>
				<div className="btn-row">
					<Button name="1" clickHandler={this.handleClick} />
					<Button name="2" clickHandler={this.handleClick} />
					<Button name="3" clickHandler={this.handleClick} />
					<Button
						name="+"
						clickHandler={this.handleClick}
						color="text-grey"
					/>
				</div>
				<div className="btn-row">
					<Button name="." clickHandler={this.handleClick} />
					<Button name="0" clickHandler={this.handleClick} />
					<Button name="00" clickHandler={this.handleClick} />
					<Button
						name="="
						clickHandler={this.handleClick}
						color="text-grey"
					/>
				</div>
			</div>
		);
	}
}

export default ButtonPanel;
