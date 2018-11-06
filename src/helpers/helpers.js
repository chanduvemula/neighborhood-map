export const setInfoWindowContent = (place) => {
  const { name, location, categories, id } = place
  const address = location.address ? location.address : 'no address'
  const type = categories[0].name ? categories[0].name : ''
  const URLname = name.split(' ').join('-').toLowerCase()
  const foursquareURL = `https://foursquare.com/v/${URLname}/${id}`

  return (
    `<div>
      <h2>${name}</h2>
      <p>${type}</p>
      <h3>${address}</h3>
    </div>`
  )
}
