import React from 'react';


const GifList = (props) => {
  const images = props.images.map(image => {
    return <img key={image.id} src={image.images.original.url} alt={image.slug}></img>
  })


  return(
    <div>
      {images}
    </div>

  )
}

export default GifList
