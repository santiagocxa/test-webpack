function render (data){
  const animal = document.createElement('img')
  animal.setAttribute('src', data.message)
  document.body.append(animal)
}

export default render