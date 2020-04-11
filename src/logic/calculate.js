import operate from "./operate";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {
	// total: this is the total value of the calculations
	// next: this is the present value displayed on screen
	// operation: this is the operation performed
	
	if (buttonName === "AC") {
		return {
			next: null,
			total: null,
			operation: null,
		};
	}

	if (isNumber(buttonName)) {
		if (buttonName === "0" && obj.next === "0") {
			return {};
		}
		// If no operation was there before

		if (obj.next) {
			const next = obj.next === "0" ? buttonName : obj.next + buttonName;
			return {
				next,
				total: null,
			};
		}
		// If there is an operation

		if (obj.operation) {
			if (obj.next) {
				return {
					next: obj.next + buttonName,
					total: obj.next,
				};
			}
			return {
				next: buttonName,
			};
		}

		// returns the button clicked in its initial state
		return {
			next: buttonName,
			total: null,
		};
	}

	if (buttonName === "=") {
		if (obj.next && obj.operation) {
			return {
				// performs the operation and returns the value

				total: operate(obj.total, obj.next, obj.operation),
				next: null,
				operation: null,
			};
		}
	}

	if (buttonName === "+/-") {
		if (obj.next) {
			return {
				next: (parseFloat(obj.next) * -1).toString(),
			};
		}
		return { total: (parseFloat(obj.total) * -1).toString() };
	}

	if (buttonName === "%") {
		if (obj.next) {
			return {
				next: obj.next / 100,
			};
		}
		if (obj.total) {
			return {
				total: obj.total / 100
			}
		}
		return {};
	}

	if (buttonName === '.') {
		if (obj.next) {
			if (obj.next.includes('.')) {
				return {
					next: obj.next
				}
			}
			return {
				next: `${obj.next  }.`
			}
		}
		return {
			next: '0.'
		}
	}

	if (obj.operation) {
		return {
			total: operate(obj.total, obj.next, obj.operation),
			next: null,
			operation: null
		}
	}

	// Handles a new operation after '=' has been clicked
	if (!obj.next) {
		return {
			operation: buttonName
		}
	}

	return {
		total: obj.next,
		next: null,
		operation: buttonName,
	};
}
