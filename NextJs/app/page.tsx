import styles from './page.module.css'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import Image from 'next/image'
import SearchBar from '../components/SearchBar/SearchBar'
import Screenshot from '../components/Screenshot/Screenshot'
import { spaceMono, inter, nunito } from './fonts'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Oscar's Image Gallery`,
  description: 'Gallery to hold all of your media',
} 

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = Array.isArray(searchParams.query) ? searchParams.query[0] : searchParams.query ?? '';
  
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src={"https://static-assets.codecademy.com/Courses/learn-nextjs/optimization/images/localImage_banner.jpg"}
          alt={"Banner"} 
          className={styles.image}
          fill
          sizes="(max-width: 768px) 100vw"
          priority={true}
        />
        <h1 className={nunito.className}>Your Photo Studio</h1>
        <p className={spaceMono.className}>This is your media gallery! This contains photos, images, and more!</p>
      </div>
      <SearchBar />
      <ImageGallery query={query}/>
      <Screenshot />
    </div>
  )
}