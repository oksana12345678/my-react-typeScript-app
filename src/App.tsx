import Panel from "./components/Panel";
import TextInput, { TextInputWithFocus } from "./components/TextInput";

const App = () => {
  const handleSave = (value: string) => {
    console.log("Saved value:", value);
  };

  return (
    <div>
      <TextInputWithFocus />
      <TextInput initialValue="Enter some text" onSave={handleSave} />
      <Panel>
        <div>"Hello world"</div>
      </Panel>
    </div>
  );
};
export default App;
