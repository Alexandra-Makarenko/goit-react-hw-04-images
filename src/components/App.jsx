import { useState, useEffect,useCallback  } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getImages } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ColorRing } from 'react-loader-spinner';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

const formSubmitHandler = data => {  
  setQuery(data)
  resetPage();
}

const incrementPage = () => {
  setPage(state => state + 1);
};


const resetPage=() =>{
  setPage(1);
} 
const fetchImg = useCallback(async () => {
  try {
    setIsLoading(true);
    const images = await getImages(query,page);
    setImages(images);
  } catch {
    setError('Failed to load dog :(');
  } finally {
    setIsLoading(false);   
  }
}, [query,page]);

useEffect(() => {
  if (query.length>0) {
    fetchImg();
  }
}, [fetchImg, query]);

useEffect(() => {
  if (error !== null) {
    toast.error(error);
  }
}, [error]);

 return (
    <div>
      <Searchbar onSubmit={formSubmitHandler}/>
       <div>
      
<ImageGallery images = {images}/>
{(!isLoading && (images.length>0)) && <button type='button' onClick={incrementPage}>Load more...</button>}
{(isLoading ) && <ColorRing
visible={true}
height="80"
width="80"
ariaLabel="blocks-loading"
wrapperStyle={{}}
wrapperClass="blocks-wrapper"
colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>}
     
        </div>    
         <Toaster position="bottom-right" />
    </div>
  );

}



