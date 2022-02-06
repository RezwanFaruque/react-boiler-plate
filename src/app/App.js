import "../assets/sass/_common.scss";
import Button from "../components/Buttons/Button";

function App() {
  const onSubmit = () => {
    console.log("button clicked");
  };

  return (
    <div className="App">
      <h2>Splendid palate </h2>
      <Button onClick={onSubmit}>Accept and Continue</Button>
    </div>
  );
}

export default App;
