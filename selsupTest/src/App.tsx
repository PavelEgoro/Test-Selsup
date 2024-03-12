import './App.css';

import ParamEditor, { Param } from './component/ParamEditor'; 

function App() {
  const params: Param[] = [
    { id: 1, name: "Назначение", type: 'string' },
    { id: 2, name: "Длина", type: 'string' } 
  ];
  

  const model = {
    paramValues: [
      { paramId: 1, value: "повседневное" },
      { paramId: 2, value: "макси" }
    ]
  };

  return (
    <div className="App">
      <header className="App-header">
        <ParamEditor params={params} model={model} />
      </header>
    </div>
  );
}


export default App;
