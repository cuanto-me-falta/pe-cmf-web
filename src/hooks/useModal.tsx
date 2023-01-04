import { useState } from "react";
const useModal = () => {
  const [modal, setModal] = useState(false);
  const settingModal = () => {
    modal ? setModal(false) : setModal(true);
  };
  return { modal, settingModal };
};

export default useModal;
