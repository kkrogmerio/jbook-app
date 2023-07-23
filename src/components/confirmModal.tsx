// ConfirmModal.tsx
import React from 'react';
import './confirmModal.css';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal is-active">
      <div className="modal-card modal-card-custom">
        <header className="modal-card-head has-text-centered">
          <p className="modal-card-title">Confirm Reset</p>
        
        </header>
        <section className="modal-card-body modal-card-body-bg-color">
          <p className="has-text-centered">Are you sure you want to reset all content?</p>
        </section>
        <footer className="modal-card-foot modal-card-foot-custom">
          <button className="button is-danger is-rounded" onClick={onConfirm}>
            Confirm
          </button>
          <button className="button is-rounded cancel-button-custom" onClick={onCancel}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ConfirmModal;
