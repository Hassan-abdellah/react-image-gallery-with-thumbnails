import React ,{useEffect , useRef}from 'react'

const Card = ({selectedImg}) => {
    const imgRef = useRef();
    useEffect(()=>{
        imgRef.current.classList.add('animate');
        setTimeout(()=> {
            imgRef.current.classList.remove('animate');
        },500);
    }, [selectedImg])
    return (
        <div className='card'>
            <img ref={imgRef} src={`images/${selectedImg}`} alt='main-img'/>
        </div>
    )
}

export default Card;
