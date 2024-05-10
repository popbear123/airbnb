import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate} from 'react-router-dom'

import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svgs/icon-more-arrow'

const SectionFooter = memo((props) => {
  const { name } = props

  let showName = "显示全部"
  if (name) showName = `查看更多${name}房源`

  const navigate = useNavigate()
  function handleMoreClick() {
    navigate("/entire")
  }

  return (
    <SectionFooterWrapper name={name}>
      <div className="footer-content" onClick={handleMoreClick}>
        <span className='text'>{showName}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter