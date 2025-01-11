import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Компонент для відображення повідомлень
const ToastNotification = ({ message }: { message: string }) => {
  const showErrorToast = useCallback(() => {
    toast.error(message); // Відображення повідомлення
  }, [message]); // Функція залежить від `message`

  useEffect(() => {
    if (message) {
      showErrorToast(); // Відображення повідомлення, коли воно змінюється
    }
  }, [message, showErrorToast]); // Додаємо `showErrorToast` до залежностей

  return null; // Цей компонент не рендерить нічого, тільки викликає toast
};

export default ToastNotification;