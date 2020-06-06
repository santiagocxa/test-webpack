async function getAnimal(){
  const response =  await fetch(`https://dog.ceo/api/breeds/image/random`)
  const animal = await response.json()
  return animal
}

export default getAnimal