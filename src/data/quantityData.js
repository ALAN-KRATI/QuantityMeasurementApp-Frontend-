export const quantityTypes = [
  { id: "length", label: "Length", icon: "📏" },
  { id: "weight", label: "Weight", icon: "⚖️" },
  { id: "volume", label: "Volume", icon: "🧪" },
  { id: "temperature", label: "Temperature", icon: "🌡️" },
];

export const operationOptions = [
  { id: "comparison", label: "Comparison"},
  { id: "conversion", label: "Conversion" },
  { id: "addition", label: "Addition" },
  { id: "subtraction", label: "Subtraction" },
  { id: "division", label: "Division" },
];

export const unitsMap = {
  length: [
    { label: "Centimetre", value: "CENTIMETER" },
    { label: "Yards", value: "YARDS" },
    { label: "Inch", value: "INCH" },
    { label: "Feet", value: "FEET" },
  ],

  weight: [
    { label: "Gram", value: "GRAM" },
    { label: "Kilogram", value: "KILOGRAM" },
    { label: "Pound", value: "POUND" },
  ],

  volume: [
    { label: "Millilitre", value: "MILLILITRE" },
    { label: "Litre", value: "LITER" },
    { label: "Gallon", value: "GALLON" },
  ],

  temperature: [
    { label: "Celsius", value: "CELSIUS" },
    { label: "Fahrenheit", value: "FAHRENHEIT" },
  ],
};