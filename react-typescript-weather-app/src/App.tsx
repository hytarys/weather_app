import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Result';
import React, {useState} from "react"
import Loading from './components/Loading';
import './App.css'

type ResultStateType = {
  country:string;
  cityName:string;
  temperature:string;
  conditionText:string;
  icon:string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultStateType>({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon: ""
  })
  const getWeather = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.weatherapi.com/v1/current.json?key=73cce7b4eb724e01b66161901211207&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data =>{
      setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.text,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
      })
      setCity("");
      setLoading(false);
    }
    )
    .catch(err => alert("エラーが発生！"))
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        {loading ? <Loading />:<Results results={results} />}
      </div>
    </div>
  );
}

export default App;
