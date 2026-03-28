function InputSection({
  selectedType,
  selectedOperation,
  unitsMap,
  value1,
  setValue1,
  unit1,
  setUnit1,
  value2,
  setValue2,
  unit2,
  setUnit2,
  targetUnit,
  setTargetUnit,
  result,
}) {
  return (
    <div className="input-section">
      {selectedOperation === "conversion" ? (
        <>
          <div className="input-box">
            <label>FROM</label>

            <input
              type="number"
              placeholder="Enter value"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />

            <select
              value={unit1}
              onChange={(e) => setUnit1(e.target.value)}
            >
              <option value="">Select Unit</option>

              {unitsMap[selectedType].map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <label>TO</label>

            <input
              type="text"
              placeholder="Converted value"
              value={value2}
              readOnly
            />

            <select
              value={targetUnit}
              onChange={(e) => setTargetUnit(e.target.value)}
            >
              <option value="">Select Unit</option>

              {unitsMap[selectedType].map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <>
          <div className="input-box">
            <label>VALUE 1</label>

            <input
              type="number"
              placeholder="Enter first value"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />

            <select
              value={unit1}
              onChange={(e) => setUnit1(e.target.value)}
            >
              <option value="">Select Unit</option>

              {unitsMap[selectedType].map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <label>VALUE 2</label>

            <input
              type="number"
              placeholder="Enter second value"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            />

            <select
              value={unit2}
              onChange={(e) => setUnit2(e.target.value)}
            >
              <option value="">Select Unit</option>

              {unitsMap[selectedType].map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input-box full-width">
            <label>RESULT</label>

            <input
              type="text"
              readOnly
              value={
                result
                  ? typeof result === "object"
                    ? result.result || result.error || ""
                    : result
                  : ""
              }
              placeholder="Result will appear here"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default InputSection;