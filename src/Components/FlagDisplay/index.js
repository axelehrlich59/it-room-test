import React, {useEffect, useState} from "react";
import {MainContainerDisplay} from "./index.style"
import FlagCard from "../FlagCard";

const FlagDisplay = () => {

  const [flags, setFlags] = useState([])


  useEffect(() => {
    const fetchData = async() => {
      await fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setFlags(data))
      .catch(err => console.log(err))
    }
    fetchData()
  }, []);


  return (
    <MainContainerDisplay>
      {flags.map((elem, i) => {
        return (
          <FlagCard 
            data={elem}
            continent={elem?.continents[0]}
            country={elem?.name?.common}
          />
        )
      })}
    </MainContainerDisplay>
  )
}

export default FlagDisplay