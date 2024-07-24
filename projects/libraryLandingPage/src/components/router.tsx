import { useState, useEffect } from "react"
import { EVENTS } from "../const/const"
import { RoutesType } from "../types/types"
import { getCurrentPath, getHistoryState } from "../logic/utils"

export default function Router({routes} : {routes: RoutesType[]}){
  const [currentPath, setCurrentPath] = useState(getCurrentPath())
  const [data, setData] = useState(getHistoryState())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
      setData(getHistoryState())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])
  
  const Page = routes.find(route =>
    route.path === currentPath
  )?.component


  return Page ? <Page data={data}/> : <h1>404</h1>
}