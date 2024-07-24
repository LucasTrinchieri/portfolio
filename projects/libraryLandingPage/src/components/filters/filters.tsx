import React, { useState } from "react"
import FilterItem from "./filterItem";
import { EventsType } from "../../types/types";


export default function Filters(
  {onSubmit}
  :
  { onSubmit: (filters: Record<string,string>) => void }
  )
  {
  const [filters, setFilters] = useState({})

  const handleChange = (e: EventsType) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      if (value) {
        return {
          ...prevFilters,
          [name]: value
        }
      } else {
        const { [name]: omitted, ...rest} = prevFilters as { [key: string]: any }
        return {rest}
      }
    })
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSubmit(filters)
  }

  return (
    <section className="filters">
      <ul className="list">
        <FilterItem handleChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Filter</button>
      </ul>
    </section>
  )
}