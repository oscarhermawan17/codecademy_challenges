'use client'

import { usePathname } from 'next/navigation'
import { navigate } from './actions'

import { useState, useEffect } from 'react';

import styles from './UrlBar.module.css'

export default function UrlBar({baseURL} : {baseURL: string}) {
  const pathname = usePathname();
  
  const [inputURL, setInputURL] = useState(baseURL)

  useEffect(() => {
    setInputURL(baseURL + pathname);
  }, [pathname])

  return(
    <form action={navigate}>
      <input
      className={styles.urlInput} 
      name='url'
      value={inputURL}
      onChange={(e) => setInputURL(e.target.value)}
      />
    </form>
  )
}