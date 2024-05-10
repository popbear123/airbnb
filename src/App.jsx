import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import routes from './router'

const App = memo(() => {
  return (
    <div>
      <AppHeader/>
      <div className="app-body">
        {
          useRoutes(routes)
        }
      </div>
      <AppFooter/>
    </div>
  )
})

export default App