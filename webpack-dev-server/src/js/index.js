import '../css/index.css'
import  text from './module.js'

text()

if(module.hot) {
  module.hot.accept('./module.js', function() {
    text()
  })
}