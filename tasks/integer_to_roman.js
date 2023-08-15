function convertIntegerToRoman(num) {
    const romanNumberSymbols = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" },
    ];

    if (num < 1 || num > 10000) {
        return "Number must be between 1 and 10,000";
    }

    let result = "";

    for (const symbolData of romanNumberSymbols) {
        while (num >= symbolData.value) {
            result += symbolData.symbol;
            num -= symbolData.value;
        }
    }

    return result;
}

console.log(convertIntegerToRoman(6));

