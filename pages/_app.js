import '../styles/globals.scss'
import { AppWrapper } from '../src/context/state'; // import based on where you put it

export default function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component { ...pageProps } />
    </AppWrapper>
  )
}