
import { useState } from 'react';
import ComingSoonModal from '@/components/ComingSoonModal';

export function useComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "Magic Eden Coming Soon",
    description: "The SAINTS ARMY NFT will be available on Magic Eden soon. Stay tuned!"
  });

  const openModal = (title?: string, description?: string) => {
    if (title || description) {
      setModalConfig({
        title: title || modalConfig.title,
        description: description || modalConfig.description
      });
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ComingSoonButton: React.FC<{
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }> = ({ children, className = "", onClick }) => {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onClick) onClick();
      openModal();
    };

    return (
      <>
        <button onClick={handleClick} className={className}>
          {children}
        </button>
        <ComingSoonModal 
          isOpen={isOpen}
          onClose={closeModal}
          title={modalConfig.title}
          description={modalConfig.description}
        />
      </>
    );
  };

  return {
    openModal,
    closeModal,
    isOpen,
    ComingSoonButton,
    ComingSoonModal: () => (
      <ComingSoonModal 
        isOpen={isOpen}
        onClose={closeModal}
        title={modalConfig.title}
        description={modalConfig.description}
      />
    )
  };
}
