import { useState } from 'react';

import {data} from "./data/data";

import ImcCalc from './components/ImcCalc';

import ImcTable from "./components/ImcTable"

import './App.css';



function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!weight || !height) return;

    // eslint-disable-next-line no-unused-vars
    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weight /(heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult)

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass);
      }
    });

    if(!info) return;
  };

  const resetCalc =(e) => {
    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
      <div className='container'>
        {!imc ? (
        <ImcCalc calcImc={calcImc}/>
        ) : (
        <ImcTable 
        data={data} 
        imc={imc} 
        info={info} 
        infoClass={infoClass} 
        resetCalc={resetCalc}
        />
        )}
      </div>
  )
}

export default App
