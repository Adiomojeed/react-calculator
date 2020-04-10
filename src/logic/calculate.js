import Big from "big.js";

import operate from "./operate";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {
	// total: this is the total value of the calculations
	// next: this is the present value displayed on screen
	// operation: this is the operation performed
	if (buttonName === "AC") {
		return {
			total: null,
			next: null,
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
			// Adds the new value to the existing value on screen
			if (obj.next) {
				return { next: obj.next + buttonName };
			}
			// Renders the value if no value was there before
			return { next: buttonName };
		}

		return {
			next: buttonName,
			total: null,
		};
	}

	if (buttonName === "=") {
		if (obj.next && obj.operation) {
			return {
				total: operate(obj.total, obj.next, obj.operation),
				next: null,
				operation: null,
			};
		}
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {}
      }
      return {
        next: obj.next + buttonName
      }
    }
    return {
      next: '0.'
    }
  }

  if (buttonName === '%') {
    if (obj.next) {
      return {
        next: obj.next / 100
      }
    }
    return {}
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return {
        next: (parseFloat(obj.next) * -1).toString()
      }
    }
    if (obj.total) {
      return {
        total: (parseFloat(obj.total) * -1).toString()
      }
    }
    return {
      next: 0
    }
  }
  
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName
    }
  }

  if (!obj.next) {
    return {operation: buttonName}
  }

	return {
		total: obj.next,
		next: null,
		operation: buttonName,
	};
}
