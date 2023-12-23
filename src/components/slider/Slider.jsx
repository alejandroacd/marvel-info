import './styles.scss'
import { useEffect, useState } from 'react';
const Slider = ({images}) => {
    useEffect(() => {
        console.log(images)
    }, [])
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />

      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Slider;