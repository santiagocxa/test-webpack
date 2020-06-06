import React, { useState }from 'react'
import data from './data.json'
import Loader from './loader'

function App() {
  const [loaderList, setLoaderList] = useState([])
  function handleClick() {
    setLoaderList(data.loaders)
  }
  return(
    <div>
      <p>test webpack at React.js</p>
      <ul>
      {
        loaderList.map(item => <Loader {...item} key={item.id}/>)
      }
      </ul>
      <button onClick={handleClick}>View Data</button>
    </div>
  )
}

export default App