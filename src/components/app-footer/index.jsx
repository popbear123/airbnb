import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from '@/assets/data/footer'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="services">
        <div className="footer-list">
          {
            footerData.map(item => {
              return (
                <div className='footer-item' key={item.name}>
                  <div className="title">{item.name}</div>
                  <ul>
                    {
                      item.list.map(subItem => {
                        return <li key={subItem}>{subItem}</li>
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>

        <div className="statement">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter