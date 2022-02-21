import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openSidebar = () => {
    isSidebarOpen(true);
  };

  const closeSidebar = () => {
    isSidebarOpen(false);
  };

  const openModal = () => {
    isModalOpen(true);
  };

  const closeModal = () => {
    isModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
