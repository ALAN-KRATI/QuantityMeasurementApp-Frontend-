function InputSection({ selectedType, selectedOperation, unitsMap }) {
  return (
    <div className="input-section">
      {selectedOperation === "conversion" ? (
        <>
          <div className="input-box">
            <label>FROM</label>
            <input type="number" placeholder="Enter value" />
            <select>
              {unitsMap[selectedType].map((unit) => (
                <option key={unit}>{unit}</option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <label>TO</label>
            <input type="number" placeholder="Converted value" />
            <select>
              {unitsMap[selectedType].map((unit) => (
                <option key={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <>
          <div className="input-box">
            <label>VALUE 1</label>
            <input type="number" placeholder="Enter first value" />
            <select>
              {unitsMap[selectedType].map((unit) => (
                <option key={unit}>{unit}</option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <label>VALUE 2</label>
            <input type="number" placeholder="Enter second value" />
            <select>
              {unitsMap[selectedType].map((unit) => (
                <option key={unit}>{unit}</option>
              ))}
            </select>
          </div>

          <div className="input-box full-width">
            <label>RESULT</label>
            <input
              type="text"
              placeholder={
                selectedOperation === "comparison"
                  ? "Comparison result will appear here"
                  : "Result will appear here"
              }
            />
          </div>
        </>
      )}
    </div>
  );
}

export default InputSection;