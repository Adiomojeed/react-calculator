import React from "react";
import ReactDOM from 'react-dom'
import Calculator from './calculator'

const App = () => {
	return (
        <Calculator />
    )
};

ReactDOM.render(<App />, document.getElementById('root'))