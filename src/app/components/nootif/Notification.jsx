"use client"
import { useEffect } from "react";
import mystory from "./../../store/mystore";
import './Notification.css'
const Notification = () => {
  const { notification, clearNotification } = mystory();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        clearNotification();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  if (!notification) return null;

  return (
    <div
      className={`notification ${notification.type}`}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "15px",
        borderRadius: "5px",
        color: "white",
        zIndex: 1000,
        background: notification.type === "success" ? "#4CAF50" : "#FF9800",
      }}
    >
      {notification.message}
      <button
        onClick={clearNotification}
        style={{ marginLeft: "10px", background: "transparent", border: "none", color: "white" }}
      >
        ×
      </button>
    </div>
  );
};

export default Notification;