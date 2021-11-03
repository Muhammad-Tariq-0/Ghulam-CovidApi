import React,{useEffect, useState} from 'react'
import GlobalData from './components/GlobalData'
import Bar from './components/Bar'
import CountryWiseData from './components/CountryWiseData'
const App = () => {
  const [globalData, setglobalData] = useState({})
  const [countryData, setcountryData] = useState([])

  useEffect(() => {
     async function ApiFetch() {
         let api = await fetch("https://api.covid19api.com/summary");
         let data = await api.json();
         delete data.Global.NewRecovered
         delete data.Global.Date
         delete data.Global.TotalRecovered
         delete data.Global.NewDeaths
         setglobalData(data.Global)
         setcountryData(data.Countries)
     }
     ApiFetch();
  }, [])

  return (
    <div>
      <Bar/>
      <GlobalData globalData={globalData}/>
      <CountryWiseData countryData={countryData}/>
    </div>
  )
}

export default App
