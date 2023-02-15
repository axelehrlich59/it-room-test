import React from "react";  
import { FlagCardContainer } from "./index.style";

const FlagCard = ({
  data,
  continent,
  country,
  language,
}) => {
  const firstKey = Object.keys(data.languages || {})
  
  return (
    <FlagCardContainer>
      <h5>{continent}</h5>
      <h2>{country}</h2>
      <label>Liste des langues parlées : {data?.languages?.[firstKey]}</label>
    </FlagCardContainer>
  )  
}

export default FlagCard 