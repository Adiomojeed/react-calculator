import React, { Component } from "react";

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// eslint-disable-next-line react/destructuring-assignment
		this.props.clickHandler(this.props.name);
	}

	render() {
		const { name } = this.props;
		return (
			<div>
				<button type="button" onClick={this.handleClick}>
					{name}
				</button>
			</div>
		);
	}
}

export default Button;
