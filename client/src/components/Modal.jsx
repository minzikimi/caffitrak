import React from 'react';
import styled from 'styled-components';

const Modal = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null; 

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalMessage>{message}</ModalMessage>
        <ModalButtons>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </ModalButtons>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

const ModalMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #47261f;
  color: white;
  &:hover {
    background-color: #6c3e24;
  }
`;

export default Modal;
