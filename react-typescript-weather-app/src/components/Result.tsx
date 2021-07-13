import React from "react";

type ResultsPropsType = {
  results: {
    country:string;
    cityName:string;
    temperature:string;
    conditionText:string;
    icon:string;
  }
}

const Results = ({results}:ResultsPropsType) => {
  const {cityName, country, temperature, conditionText, icon} = results;
  return(
    <>
      {cityName && <div>{results.cityName}</div>}
      {country && <div>{results.country}</div>}
      {temperature && <div>{results.cityName}<span>℃</span></div>}
      {conditionText &&
      <div className="results-condition">
        <img src={icon} alt="icon" />
        <span>{conditionText}</span>
      </div>}
    </>
  )
}

export default Results