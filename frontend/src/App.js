import React from 'react';

import './global.css';

import Routes from './routes';
//JSX (Javascript e XML)

function App() {

  /*const [counter, setCounter] = useState(0);

  //retorna um array : Array[valor, functionAtualização]

  function increment(){
    setCounter(counter + 1);
    console.log(counter);
  }*/

  return (
    /*<div>
    <Header>Contador: {counter}</Header>
    <button onClick={increment}>Incrementar</button>
    </div>
    */
    <Routes/>

  );
}

export default App;
