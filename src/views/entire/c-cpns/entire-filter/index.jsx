import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data'

const EntireFilter = memo(() => {
  const [selector, setSelector] = useState([])

  function filterItemClick(item) {
    const findIndex = selector.findIndex(selectItem => selectItem === item)

    let newSelector = [...selector]
    if (findIndex > -1) {
      newSelector.splice(findIndex, 1)
    } else {
      newSelector.push(item)
    }
    setSelector(newSelector)
  }

  return (
    <EntireFilterWrapper>
      <div className="filter-list">
        {
          filterData.map((item) => {
            return (
              <div 
                className={classNames("filter-item", {"active": selector.includes(item) })}
                key={item}
                onClick={() => filterItemClick(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})

export default EntireFilter