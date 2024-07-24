import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { requestPermissionAndToken, onMessageListener } from '../utils/FireBase';

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    requestPermissionAndToken();

    const unsubscribe = onMessageListener().then(payload => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body
      });
    });

    // Unsubscribe from the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []); // Add an empty dependency array to run this effect only once

  return (
    <div>
      <Toaster />
      {notification.title && (
        <div>
          <h2>{notification.title}</h2>
          <p>{notification.body}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
