import React from 'react'


const Gallery = () => {

  const gimg="https://picsum.photos/350/650"
  const gimg2="https://picsum.photos/350/350"
  const gimg3="https://picsum.photos/350/450"
  const gimg4="https://picsum.photos/350/550"
  return (
    <>
      
<div className='gallery'>

  <img src={gimg} alt="" />
  <img src={gimg2} alt="" />
  <img src={gimg3} alt="" />
  <img src={gimg4} alt="" />
  <img src={gimg3} alt="" />
  <img src={gimg} alt="" />
  <img src={gimg2 } alt="" />
  <img src={gimg3} alt="" />
  <img src={gimg} alt="" />
  <img src={gimg4} alt="" />
  <img src={gimg} alt="" />
  <img src={gimg2} alt="" />
</div>

    </>
  )
}

export default Gallery

