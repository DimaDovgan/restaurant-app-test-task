import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Компонент для відображення повідомлень
const ToastNotification = ({ message }: { message: string }) => {
  const showErrorToast = () => {
    toast.error(message); // Відображення повідомлення
  };

  React.useEffect(() => {
    if (message) {
      showErrorToast(); // Відображення повідомлення, коли воно змінюється
    }
  }, [message]);

  return null; // Цей компонент не рендерить нічого, тільки викликає toast
};

export default ToastNotification;