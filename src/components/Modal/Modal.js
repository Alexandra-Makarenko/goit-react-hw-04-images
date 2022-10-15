import {  useEffect  } from 'react';
import PropTypes from 'prop-types';
import { Backdrop,Content } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = (props)=> {
  // componentDidMount() {
  //  window.addEventListener('keydown', this.handleKeyDown);
  // }
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
       props.onClose();
      }
    });
  }, [props]);

  
  useEffect(() => {
       return () => {
      window.removeEventListener('keydown',  e => {
        if (e.code === 'Escape') {
         props.onClose();
        }
      });
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