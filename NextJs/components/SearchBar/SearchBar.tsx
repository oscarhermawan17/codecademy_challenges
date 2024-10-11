'use client'

import styles from './SearchBar.module.css'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <form className={styles.form}>
      <input 
        placeholder={"Search any image description..."} 
        onChange={(event) => {
          handleSearch(event.target.value);
          event.preventDefault();
        }}
        defaultValue={searchParams.get('query') ?? ''}
      />
    </form>
  );
}

export default SearchBar;