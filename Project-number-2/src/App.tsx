import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <div>
        
          <Input label="Your Name" id="name" type="text" />
          <Input label="Course Goal" id="goal" type="week" />
          <Input label="Your Age" id="age" type="number" />
        
      </div>
      <div>
        <p>
          <Button elem="button">Button</Button>
        </p>
      </div>
      <div>
        <p>
          <Button elem="a" href="https://www.google.com">
            Link
          </Button>
        </p>
      </div>
      <div>
        <p>
          <Container as={Button} onClick={() => console.log(`I've been clicked!`)}>Click me beautiful</Container>
        </p>
      </div>
    </main>
  );
}

export default App;
