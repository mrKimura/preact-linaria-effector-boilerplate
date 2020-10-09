import { h, render } from 'preact'

export { globals } from './ui/global/global-styles'
import { App } from './app'

render(<App />, document.getElementById('app'))
