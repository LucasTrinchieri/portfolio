import { Suspense } from 'react'
import Router from './components/router'
import { routes } from './siteConfigs/routes'
import './styles/App.css'

function App() {
  return (
    <Suspense>
      <Router routes={routes} />
    </Suspense>
  )
}

export default App
