import '../css/index.css'
import getAnimal from './getAnimal.js'
import  render from './render.js'



getAnimal()
  .then((data)=> {
    render(data);
  })
  .catch(()=>{
    console.log('error get')
  })