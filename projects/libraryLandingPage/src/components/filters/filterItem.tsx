import { navbarConfig } from "../../siteConfigs/navbarConfig"
import { EventsType } from "../../types/types"

const TYPES = {
  INPUT: 'input',
  SELECT: 'select'
}

export default function FilterItem(
  {handleChange}
  :
  {handleChange: (e: EventsType) => void}
) {
  return (
    <>
    {
      navbarConfig.filters.map((filter, index) => {
        switch (filter.type) {
          case TYPES.INPUT:
            return (
              <li key={index}>
                <input
                  type={filter.inputType}
                  placeholder={filter.placeholder}
                  name={filter.name}
                  onChange={handleChange}
                  className="item"
                />
              </li>
            )        
          case TYPES.SELECT:
            return (
              <li key={index}>
                <select 
                  name={filter.name} 
                  id={index.toString()} 
                  onChange={handleChange}
                  className="item"
                >
                  {
                    filter.options && filter.options.map((opt, index) => {
                      return (
                        <option 
                          key={index}
                          value={opt}
                          >
                            {opt}
                          </option>
                      )
                    })
                  }
                </select>
              </li>
            )

          default:
            break;
        }
      })
    }
    </>
  )
}