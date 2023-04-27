import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/global'
import Routes from './Routes/Routes'


const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <Routes />
    <GlobalStyle/>
  </>
)