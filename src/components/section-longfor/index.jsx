import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionLongforWrapper } from './style'

const SectionLongfor = memo((props) => {
  const { itemData } = props
  return (
    <SectionLongforWrapper>
      <div className="longfor-inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="bg-cover"></div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价 {itemData.price}</div>
        </div>
      </div>
    </SectionLongforWrapper>
  )
})

SectionLongfor.propTypes = {
  itemData: PropTypes.object
}

export default SectionLongfor