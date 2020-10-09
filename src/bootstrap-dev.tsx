import { h, render } from 'preact'

import 'preact/debug'
import { createInspector } from 'effector-inspector'

createInspector()

export { globals } from './ui/global/global-styles'
import { App } from './app'

render(<App />, document.getElementById('app'))
