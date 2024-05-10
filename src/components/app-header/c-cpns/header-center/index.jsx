import React, { memo, useState } from 'react'
import classNames from 'classnames'

import CenterWrapper from './style'
import IconSearchBar from '@/assets/svgs/icon-search-bar'
import SearchTitles from "@/assets/data/search_titles.json"
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const HeaderCenter = memo(({ isReachTop }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  console.log("isReachTop", isReachTop);

  const searchBarEl = <div className="search-bar">
    <div className="text">搜索房源和体验</div>
    <div className="search-icon">
      <IconSearchBar/>
    </div>
  </div>

  const tabBarEl = <div className="tab-bar">
    <div className="tabs">
      {
        SearchTitles.map((item, index) => (
          <div
            key={item.title}
            className={classNames("tab", {"active": currentIndex === index})}
            onClick={() => setCurrentIndex(index)}
          >
            {item.title}
            <div className="bridge"></div>
          </div>
        ))
      }
    </div>

    <div className="infos">
      {
        SearchTitles[currentIndex].searchInfos.map((item, index) => {
          return <div className="info-item" key={item.title}>
            <div className="item-inner">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            {index !== SearchTitles[currentIndex].searchInfos.length - 1 && <div className="divider"></div>}
          </div>
        })
      }
    </div>
  </div>

  return (
    <CenterWrapper $isReachTop={isReachTop}>
      <SwitchTransition>
        <CSSTransition key={isReachTop} timeout={150} classNames="app-header-bar">
          { isReachTop ? tabBarEl : searchBarEl }
        </CSSTransition>
      </SwitchTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter