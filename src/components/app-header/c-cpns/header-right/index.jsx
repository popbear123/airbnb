import React, { memo, useState, useEffect } from 'react'
import RightWrapper from './style'
import IconAvatar from '@/assets/svgs/icon_avatar'
import IconMenu from '@/assets/svgs/icon_menu'
import IconGlobal from '@/assets/svgs/icon_global'

const HeaderRight = memo(({ isReachTop }) => {
  const [showPanel, setShowPanel] = useState(false)

  function openPanel() {
    setShowPanel(true)
  }

  function cannelPanelHandle() {
    setShowPanel(false)
  }

  useEffect(() => {
    window.addEventListener("click", cannelPanelHandle, true)

    return () => {
      window.removeEventListener("click", cannelPanelHandle, true)
    }
  }, [])

  return (
    <RightWrapper $isReachTop={isReachTop}>
      <div className="btn">登录</div>
      <div className="btn">注册</div>
      <div className="btn">
        <IconGlobal />
      </div>
      <div className="profile" onClick={openPanel}>
        <div className="menu">
          <IconMenu />
        </div>
        <div className="avatar">
          <IconAvatar />
        </div>
        {
          showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item register">注册</div>
                <div className="item login">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight