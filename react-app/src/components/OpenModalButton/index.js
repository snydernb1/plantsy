import React from 'react';
import { useModal } from '../../context/Modal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  modalType, //
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
    <>
    {
      modalType === 'text' &&
      <button onClick={onClick} className='modalText' >{buttonText}</button>
    }
    {
      modalType === 'button' &&
      <button onClick={onClick} className='modalButton' >{buttonText}</button>
    }
    {
      modalType === 'buttonSmall' &&
      <button onClick={onClick} className='modalButtonSmall' >{buttonText}</button>
    }
    {
      modalType === 'buttonDelete' &&
      <button onClick={onClick} className='modalButtonDelete' >{buttonText}</button>
    }
    {
      modalType === 'buttonLarge' &&
      <button onClick={onClick} className='modalButtonLarge' >{buttonText}</button>
    }
    {
      modalType === 'img' &&
      <button onClick={onClick} className='modalImg' >{buttonText}</button>
    }
    </>
  );
}

export default OpenModalButton;
