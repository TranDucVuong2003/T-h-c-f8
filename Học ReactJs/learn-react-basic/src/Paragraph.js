import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {
    const context = useContext(ThemeContext)
  return (  
    <p className={context.theme}>
      HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it! Study our free HTML Tutorial »
    </p>
  )
}

export default Paragraph
