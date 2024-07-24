import { EVENTS } from "../const/const"
import { LinkProps } from "../types/types"

export function navigate (href: string, state: any = {}) {
  window.history.pushState(state, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({state, to, ...props }: LinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey

    if (!isModifiedEvent) {
      event.preventDefault()
      navigate(to, state)
      window.scrollTo(0, 0)
    }
  }

  return <a onClick={handleClick} href={to} {...props} />
}