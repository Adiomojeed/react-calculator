import operate from "./operate";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {
	// total: this is the total value of the calculations
	// next: this is the present value displayed on screen
	// operation: this is the operation performed

	if (buttonName === "del") {
		if (obj.next) {
			let a = obj.next
				.split("")
				.splice(0, obj.next.length - 1)
				.join("");
			let b = obj.totValue
				.split("")
				.splice(0, obj.totValue.length - 1)
				.join("");
			return {
				next: a,
				totValue: b,
			};
		}
		return {};
	}

	if (buttonName === "AC") {
		return {
			next: null,
			total: null,
			operation: null,
			totValue: null,
		};
	}

	if (isNumber(buttonName)) {
		if (buttonName === "0" && obj.next === "0") {
			return {};
		}
		// If there is an operation

		if (obj.operation) {
			if (obj.next) {
				return {
					next: obj.next + buttonName,
					totValue: obj.totValue + buttonName,
				};
			}
			return {
				next: buttonName,
				totValue: obj.totValue + buttonName,
			};
		}

		// If no operation was there before

		if (obj.next) {
			const next = obj.next === "0" ? buttonName : obj.next + buttonName;
			return {
				next,
				total: null,
				totValue: next,
			};
		}

		// returns the button clicked in its initial state
		return {
			next: buttonName,
			total: null,
			totValue: buttonName,
		};
	}

	if (buttonName === "=") {
		if (obj.next && obj.operation) {
			return {
				// performs the operation and returns the value
				total: operate(obj.total, obj.next, obj.operation),
				next: null,
				operation: null,
				totValue: operate(obj.total, obj.next, obj.operation),
			};
		}
		return {};
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
				total: obj.total / 100,
			};
		}
		return {};
	}

	if (buttonName === ".") {
		if (obj.next) {
			if (obj.next.includes(".")) {
				return {
					next: obj.next,
					totValue: obj.next,
				};
			}
			return {
				next: `${obj.next}.`,
				totValue: `${obj.totValue}.`,
			};
		}
		return {
			next: "0.",
			totValue: "0.",
		};
	}

	if (obj.operation) {
		let lastVal = obj.totValue.length-1
		if (buttonName === obj.totValue[lastVal]) {
			return {
				totValue: obj.totValue
			}
		}
		
		return {
			total: operate(obj.total, obj.next, obj.operation),
			next: null,
			operation: buttonName,
			totValue: obj.totValue + buttonName,
		};
	}

	// Handles a new operation after '=' has been clicked
	if (!obj.next) {
		return {
			operation: buttonName,
			totValue: obj.totValue,
		};
	}

	return {
		total: obj.next,
		next: null,
		operation: buttonName,
		totValue: obj.next + buttonName,
	};
}
