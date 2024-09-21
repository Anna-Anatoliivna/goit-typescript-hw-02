import styles from './SearchBar.module.css'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';




export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('')
 
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()){
      console.log('error');
      toast.error('Search field can not be empty');
          }
    onSubmit(searchQuery)
    setSearchQuery('')
  }
  return (
      <>
        <header className={styles.card}>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster
      position="top-right"
        reverseOrder={false}
      />
      </>
    );
};
