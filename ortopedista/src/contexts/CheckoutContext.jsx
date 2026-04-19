import React, { createContext, useContext, useState } from 'react';

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCheckoutModal = () => setIsModalOpen(true);
  const closeCheckoutModal = () => setIsModalOpen(false);

  return (
    <CheckoutContext.Provider value={{ isModalOpen, openCheckoutModal, closeCheckoutModal }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
}
