import ImageAndText from '../Image/ImageAndText'
import { images } from '../../data/images'
import styles from './ImageGallery.module.css'

function ImageGallery(props: { query: string }) {
  const filteredImages = images.filter(image => image.description.toLowerCase().includes(props.query.toLowerCase()))
  
  return (
    <div className={styles.imageGallery}>
      {filteredImages.map((image, index) => (
        <ImageAndText
          key={image.src}
          src={image.src}
          alt={`Image ${index}`} 
          width={350}
          height={350}
          text={image.description}
        />
      ))}
    </div>
  );
}

export default ImageGallery;