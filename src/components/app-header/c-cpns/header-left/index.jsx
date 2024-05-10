import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftWrapper from './style'
import IconLogo from '@/assets/svgs/icon_logo'

const HeaderLeft = memo(({ isReachTop }) => {
  const navigate = useNavigate()

  function backHomePage() {
    navigate("/home")
  }

  return (
    <LeftWrapper $isReachTop={isReachTop}>
      <span className="logo" onClick={backHomePage}>
        <IconLogo />
      </span>
    </LeftWrapper>
  )
})

export default HeaderLeft