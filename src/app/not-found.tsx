"use client";

import { Result, Button } from "antd";
import { useRouter } from "next/navigation";
import { FrownOutlined } from "@ant-design/icons";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <Result
        icon={<FrownOutlined style={{ color: "#1677ff" }} />}
        status="404"
        title="404 - Page Not Found"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => router.push("/")}>
            Back Home
          </Button>
        }
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
}
