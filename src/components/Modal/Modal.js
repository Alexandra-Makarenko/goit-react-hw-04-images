import {  useEffect  } from 'react';
import PropTypes from 'prop-types';
import { Backdrop,Content } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = (props) => {
  
   useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
       props.onClose();
       }       
     };
 
     window.addEventListener('keydown', handleKeyDown);
     return () => {
      window.addEventListener('keydown', handleKeyDown);
    };
  }, [props]);
 


  
  const handleBackdropClick = event => {
     if (event.currentTarget === event.target) {
      props.onClose();
    }
  };


    return createPortal(
       <Backdrop onClick={handleBackdropClick}>
        <Content>{props.children}
        </Content>
      </Backdrop>,
      modalRoot
    );
 

}

Modal.propTypes = {
  image: PropTypes.shape({
    id:PropTypes.number.isRequired,
    webformatURL:PropTypes.string.isRequired,
    largeImageURL:PropTypes.string.isRequired,
    }).isRequired,
    onClose:PropTypes.func.isRequired
  }