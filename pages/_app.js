import 'tailwindcss/tailwind.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <> 
        <h1> 
            HOME
        </h1>
        <Component {...pageProps} />
    </>
  )
}
export default MyApp
