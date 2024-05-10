import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { SectionTabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const { tabNames = [], tabChange: tabChangeHandle } = props

  function tabChange(index, item) {
    setCurrentIndex(index)
    tabChangeHandle(item)
  }
  return (
    <SectionTabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                key={item}
                className={classNames("tab", {active: currentIndex === index})}
                onClick={() => tabChange(index, item)}
              >
              {item}</div>
            )
          })
        }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs