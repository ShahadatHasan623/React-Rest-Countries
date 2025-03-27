import { Suspense } from 'react'
import './App.css'
import Countries from './component/Countries'
import Countery from './Country/Countery'

const fetchCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all")
  return res.json()
}
function App() {
  const allData = fetchCountries();
  return (
    <>
      <Suspense fallback={<h1>Countries Data Load.... </h1>}>
        <Countries allData={allData}></Countries>
      </Suspense>



    </>
  )
}

export default App
