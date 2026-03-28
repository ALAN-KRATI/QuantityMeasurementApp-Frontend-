import { useState } from "react";
import {
  quantityTypes,
  operationOptions,
  unitsMap,
} from "../data/quantityData";
import QuantityTypeCard from "./QuantityTypeCard";
import OperationSelector from "./OperationSelector";
import InputSection from "./InputSection";
import { quantityService } from "../services/quantityService";

function Dashboard({ onLogout }) {
  const [selectedType, setSelectedType] = useState("length");
  const [selectedOperation, setSelectedOperation] = useState("conversion");

  const [value1, setValue1] = useState("");
  const [unit1, setUnit1] = useState("");
  const [value2, setValue2] = useState("");
  const [unit2, setUnit2] = useState("");
  const [targetUnit, setTargetUnit] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const availableOperations =
    selectedType === "temperature"
      ? operationOptions.filter((operation) => operation.id === "conversion")
      : operationOptions;

  const handleTypeChange = (type) => {
    setSelectedType(type);

    // reset values when type changes
    setValue1("");
    setUnit1("");
    setValue2("");
    setUnit2("");
    setTargetUnit("");
    setResult(null);

    if (type === "temperature") {
      setSelectedOperation("conversion");
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setResult(null);

      let payload;

      if (selectedOperation === "conversion") {
        payload = {
          thisQuantityDTO: {
            value: Number(value1),
            unit: unit1,
          },
          thatQuantityDTO: {
            value: 0,
            unit: targetUnit,
          },
        };
      } else {
        payload = {
          thisQuantityDTO: {
            value: Number(value1),
            unit: unit1,
          },
          thatQuantityDTO: {
            value: Number(value2),
            unit: unit2,
          },
        };
      }

      let response;

      switch (selectedOperation) {
        case "addition":
          response = await quantityService.add(payload);
          break;

        case "subtraction":
          response = await quantityService.subtract(payload);
          break;

        case "division":
          response = await quantityService.divide(payload);
          break;

        case "comparison":
          response = await quantityService.compare(payload);
          break;

        case "conversion":
          response = await quantityService.convert(payload);
          const convertedResult = response.result || "";
          const numericValue = convertedResult.split(" ")[0];
          setValue2(numericValue);
          break;
          
        default:
          return;
      }

      setResult(response);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-wrapper">
        <header className="top-bar">
          <div className="top-bar-left">
            <div className="app-logo">⚙️</div>
            <h2>Welcome To Quantity Measurement</h2>
          </div>

          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </header>

        <div className="dashboard-content">
          <h3 className="section-title">CHOOSE TYPE</h3>

          <div className="type-card-container">
            {quantityTypes.map((type) => (
              <QuantityTypeCard
                key={type.id}
                type={type}
                selectedType={selectedType}
                onSelectType={handleTypeChange}
              />
            ))}
          </div>

          <h3 className="section-title">CHOOSE OPERATION</h3>

          <OperationSelector
            availableOperations={availableOperations}
            selectedOperation={selectedOperation}
            onSelectOperation={(operation) => {
              setSelectedOperation(operation);
              setResult(null);
            }}
          />

          <InputSection
            selectedType={selectedType}
            selectedOperation={selectedOperation}
            unitsMap={unitsMap}
            value1={value1}
            setValue1={setValue1}
            unit1={unit1}
            setUnit1={setUnit1}
            value2={value2}
            setValue2={setValue2}
            unit2={unit2}
            setUnit2={setUnit2}
            targetUnit={targetUnit}
            setTargetUnit={setTargetUnit}
            result={result}
          />

          {selectedType === "temperature" && (
            <p className="note-text">Temperature supports conversion only.</p>
          )}

          <button
            className="primary-action-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : selectedOperation === "conversion"
                ? "Convert"
                : selectedOperation === "comparison"
                  ? "Compare"
                  : "Calculate"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;