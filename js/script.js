class UnitConverter {
  constructor() {
    this.inputValue = document.getElementById("inputValue");
    this.fromUnit = document.getElementById("fromUnit");
    this.toUnit = document.getElementById("toUnit");
    this.resultField = document.getElementById("result");
    this.convertBtn = document.getElementById("convertBtn");
    this.bindEvents();
  }

  bindEvents() {
    this.convertBtn.addEventListener("click", () => this.convertUnits());
  }

  convertUnits() {
    const inputValue = parseFloat(this.inputValue.value);
    const fromUnit = this.fromUnit.value;
    const toUnit = this.toUnit.value;

    if (isNaN(inputValue)) {
      this.resultField.value = "Please enter a valid number";
      return;
    }

    let result = this.convertLength(inputValue, fromUnit, toUnit);
    this.resultField.value = result.toFixed(2);
  }

  convertLength(value, fromUnit, toUnit) {
    let meters;

    switch (fromUnit) {
      case "km":
        meters = value * 1000;
        break;
      case "m":
        meters = value;
        break;
      case "cm":
        meters = value / 100;
        break;
      default:
        meters = value;
    }

    switch (toUnit) {
      case "km":
        return meters / 1000;
      case "m":
        return meters;
      case "cm":
        return meters * 100;
      default:
        return meters;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new UnitConverter();
});
