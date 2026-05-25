
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

import {
  normalTest1,
  normalTest2,
  normalTest3,
  edgeTest1,
  edgeTest2,
  edgeTest3,
} from "./testCases";

function App() {

  // 👇 ADD IT HERE
  const renderTest = (test) => {
    return (
      <p className={test.pass ? "pass" : "fail"}>
        {test.pass ? "✔ PASS" : "❌ FAIL"} - {test.name}
      </p>
    );
  };

  return (
    <div className="app">

      <RegistrationForm />

      <div className="test-section">
        <h2>Test Cases</h2>

        <h3>Normal Test Cases</h3>
        {renderTest(normalTest1())}
        {renderTest(normalTest2())}
        {renderTest(normalTest3())}

        <h3>Edge Test Cases</h3>
        {renderTest(edgeTest1())}
        {renderTest(edgeTest2())}
        {renderTest(edgeTest3())}
      </div>

    </div>
  );
}

export default App;
