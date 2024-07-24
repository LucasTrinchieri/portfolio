export function handleAnchorClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()  
  const url = event.currentTarget.href
    
  window.open(url, '_blank')
}

export function handleButtonClick(url: string | undefined) {
  window.open(url, '_blank')
}