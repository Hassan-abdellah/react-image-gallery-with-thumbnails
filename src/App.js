import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import Thumbnails from './components/Thumbnails';
function App() {

  const [selectedImg , setSelectedImg] = useState('img1.jpg');
  return (
    <div className="container">
        <Card selectedImg = {selectedImg}/>
        <Thumbnails setSelectedImg={setSelectedImg} selectedImg={selectedImg}/>
    </div>
  );
}

export default App;
