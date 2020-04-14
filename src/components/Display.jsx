import React from "react";

const Display = ({ value, totValue }) => {
	return (
		<div className='display'>
			<div className="display-1">{totValue}</div>
			<div className='display-2'>{value}</div>
		</div>
	);
};

export default Display;
