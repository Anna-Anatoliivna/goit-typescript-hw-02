import styles from './SearchBar.module.css'
import { useState, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';


interface SearchBarProps {
  onSubmit: (searchQuery: string) => void
}

export const SearchBar : React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
