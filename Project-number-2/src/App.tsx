import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <p>
        <Input label="Your Name" id="name" type="text" />
        <Input label="Course Goal" id="goal" type="week" />
        <Input label="Your Age" id="age" type="number" />
      </p>
      <p>
        <Button elem="button">Button</Button>
      </p>
      <Button elem="a" href="https://www.google.com">Link</Button>
    </main>
  );
}

export default App;
