import React, {createContext} from 'react';
import './App.css';

//4. Importação de componentes
import FirstComponent from './components/FirstComponent';

//5. Desestruturando Props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

//6. Using State
import State from './components/State';

//10. Utilizando Contexto
import Context from './components/Context';

//8. Types
type textOrNull = string | null

//9. COntext
interface IAppContext {
  language: string,
  framework: string;
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  //1. Variáveis
  const name: string = "Erick";
  const isWorking: boolean = false;

  //2. Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  const myText:textOrNull = "Tem algum texto aqui";
  const mySecondText:textOrNull = null;

  //9. Contexto
  const contextValue: IAppContext = {
    language: "TypeScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      {isWorking && (
        <div>
          <p>Estou trabalhando</p>
        </div>
        )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="segundo" />
      <Destructuring title="Primeiro post" content="Algum conteudo" commentQty={10} tags={["ts", "js"]} category={Category.TS}/>
      <State />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na segunda variável</p>}
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
