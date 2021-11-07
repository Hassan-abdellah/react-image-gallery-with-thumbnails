import React , {useState} from 'react'

const Thumbnails = ({setSelectedImg , selectedImg}) => {

    const [thumbnails , setThumbnails] = useState([
     {id:1 , image:'img1.jpg'},   
     {id:2 , image:'img2.jpg'},   
     {id:3 , image:'img3.jpg'},   
     {id:4 , image:'img4.jpg'},   
     {id:5 , image:'img5.jpg'},   
     {id:6 , image:'img6.jpg'},   
     {id:7 , image:'img7.jpg'},   
     {id:8 , image:'img8.jpg'},   
     {id:9 , image:'img9.jpg'},   
     {id:10 , image:'img10.jpg'},   
     {id:11 , image:'img11.jpg'},   
     {id:12 , image:'img12.jpg'},   
     {id:13 , image:'img13.jpg'},   
     {id:14 , image:'img14.jpg'},   
     {id:16 , image:'img15.jpg'},   
     {id:15 , image:'img16.jpg'},   
     {id:17 , image:'img17.jpg'},   
    ]);

    return (
        <div className='small-images'>
            {thumbnails && thumbnails.map(thumbnail => (
                <img src={`images/${thumbnail.image}`} 
                     className={selectedImg === thumbnail.image ? 'active' : ''} 
                     key={thumbnail.id} alt={thumbnail.image} onClick={() => setSelectedImg(thumbnail.image)}/>
            ))}     
        </div>
    )
}

export default Thumbnails;
