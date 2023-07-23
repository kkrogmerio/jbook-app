import { useState } from "react";
import { useActions } from "../mainHooks/useActions";
import "./mainActionBar.css";
import ConfirmModal from "./confirmModal";
const MainActionBar: React.FC = () => {
  const { resetContent } = useActions();
  const [modalOpen, setModalOpen] = useState(false);

  const handleReset = () => {
    setModalOpen(false);
    resetContent();
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="main-action-bar-wrapper">
      <div className="main-action-bar">
      <button className="button is-link is-medium is-rounded" onClick={() => {}}>
          SHARE
        </button>
        <button className="button is-danger is-medium is-rounded" onClick={() => {handleOpenModal()}}>
          RESET
        </button>
      </div>
      <ConfirmModal isOpen={modalOpen} onConfirm={handleReset} onCancel={handleCloseModal} />


    </div>
  );
};
export default MainActionBar;
