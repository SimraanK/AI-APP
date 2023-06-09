import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Configuration, OpenAIApi } from "openai";


import OptionSelection from './components/OptionSelection'
import Translation from './components/Translation'
import { arrayItems } from './AIOptions'

function App() {
  // const [count, setCount] = useState(0)

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});

  const [input, setInput] = useState("");

  const [result, setResult] = useState ('');



  // console.log(import.meta.env.VITE_OPEN_AI_KEY);
 
  const selectOption = (option) => {
    setOption(option)
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  


  return (
    <div className='app' >

    

    {Object.values(option).length === 0 ? ( <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/> ) : 

    ( <Translation doStuff={doStuff} setInput={setInput} result={result} />) }
    

      
    </div>
  )
}

export default App
