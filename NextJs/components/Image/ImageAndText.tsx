import styles from './ImageAndText.module.css'
import Image from 'next/image';

function ImageAndText(props: { src: string; alt: string; width: number; height: number; text: string; }) {
  return (
    <div className={styles.imageContainer} style={{width: props.width}}>
      <div style={{width: props.width, height: props.height, position: 'relative'}}>
        <Image
          src={props.src}
          alt={props.alt}
          fill
          style={{objectFit: 'contain'}}
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}
   
export default ImageAndText;