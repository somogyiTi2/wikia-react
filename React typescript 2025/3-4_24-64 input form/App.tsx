
import Polimofic from './component/Polimorfic';
import Input from './component/Input';
import { useRef } from 'react';
import Form, {type FormHandler} from './component/Form';

function App() {
  const input = useRef<HTMLInputElement>(null);

  const customForm =useRef<FormHandler>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string; };
    console.log(extractedData)
    //az as átalakítja másik típussá
    customForm.current?.clear();
  }
  return (
    <div className="App">
      <Polimofic as="h1">Ez most egy H1</Polimofic>
      <Polimofic as="input" type="number" ></Polimofic>
      <Polimofic as="button" onClick={() => console.log(input.current?.value)}>hello world</Polimofic>
      {/* <Input label="test" id="test" ref={input} /> */}
      <p />
      <Form onSave={handleSave} ref={customForm}>
        <Input label="test" id="test" ref={input} />
        <Input label="text" id="Name" type='text' />
        <Input label="age" id="Age" type='number' />
        <p>
          <button>Save</button>
        </p>
      </Form>

    </div>
  );
}

export default App;
