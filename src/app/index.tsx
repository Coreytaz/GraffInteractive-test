import Routing from '../pages'
import { withHocs } from './hocs'
import './index.scss'

function App() {
  return (
    <>
      <Routing />
    </>
  )
}

export default withHocs(App)
