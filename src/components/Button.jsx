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
		const { name, color } = this.props;
		return (
			<div className="btn-group">
				<button
					type="button"
					onClick={this.handleClick}
					className={`btn ${color}`}
				>
					{name}
				</button>
			</div>
		);
	}
}

export default Button;
