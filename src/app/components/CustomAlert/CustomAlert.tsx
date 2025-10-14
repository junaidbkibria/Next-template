"use client";

import { Alert } from "antd";
import "./CustomAlert.css";

interface AlertOverlayProps {
  message: string;
  description?: string;
  type?: "success" | "info" | "warning" | "error";
}

export default function CustomAlert({
  message,
  description,
  type = "info",
}: AlertOverlayProps) {
  return (
    <div className="alert-overlay">
      <Alert
        message={message}
        description={description}
        type={type}
        showIcon
        closable
      />
    </div>
  );
}
