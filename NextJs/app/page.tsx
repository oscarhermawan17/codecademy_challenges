import styles from './page.module.css'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import SearchBar from '../components/SearchBar/SearchBar'
import Screenshot from '../components/Screenshot/Screenshot'

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = Array.isArray(searchParams.query) ? searchParams.query[0] : searchParams.query ?? '';
  
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img
          src={"https://static-assets.codecademy.com/Courses/learn-nextjs/optimization/images/localImage_banner.jpg"}
          alt={"Banner"} 
          width={400}
          height={100}
          className={styles.image}
        />
        <h1 className={styles.nunito}>Your Photo Studio</h1>
        <p className={styles.spaceMono}>This is your media gallery! This contains photos, images, and more!</p>
      </div>
      <SearchBar />
      <ImageGallery query={query}/>
      <Screenshot />
    </div>
  )
}