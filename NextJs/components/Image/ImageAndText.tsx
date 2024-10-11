import styles from './ImageAndText.module.css'

function ImageAndText(props: { src: string; alt: string; width: number; height: number; text: string; }) {
  return (
    <div className={styles.imageContainer} style={{width: props.width}}>
      <img
        src={props.src}
        alt={props.alt} 
        width={props.width}
        height={props.height}
        style={{objectFit: 'contain'}}
      />
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}
   
export default ImageAndText;