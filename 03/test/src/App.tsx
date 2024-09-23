import React, { useState } from 'react'
import CountryList from './component/CountryList'
import AppCssModule from './App.module.css'
export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
}



const App = () => {


  const [msg, setMsg] = useState<String>("World");

  const [list, setList] = useState<Array<CountryType>>(
    [
      { no: 1, country: "이집트", visited: false },
      { no: 2, country: "일본", visited: true },
      { no: 3, country: "피지", visited: false },
      { no: 4, country: "콜롬비아", visited: false },
    ]
  )

  const addResult = (x: number, y: number) => {
    return (
      <div>
        {x} + {y} = {x + y}
      </div>
    );
  }


  return (
    <div>
      <h2 className={AppCssModule.test}>{msg}</h2>
      <hr />
      {addResult(4, 3)}
      <hr />
      <CountryList countries={list} test={setMsg} />
    </div>
  )
}

export default App