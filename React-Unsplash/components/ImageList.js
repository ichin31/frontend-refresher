import React from 'react'
import './ImageList.css';


const ImageList = (props) => {
  
  const image = props.images.map(({id,description,urls}) => {
    return  (
      <div key={id} className="ui card">
        <div  className="image">
          <img  alt={description} src={urls.regular}/>
        </div>
      </div>
    )
  });

    return (
      <div className='image-list'>{image}</div>
        
    )
}



export default ImageList



