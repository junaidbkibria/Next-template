"use client";

import React from "react";
import { Result, Button } from "antd";
import { useRouter } from "next/navigation";
import { FrownOutlined } from "@ant-design/icons";
import "./Unauthorized.css";

const Unauthorized: React.FC = () => {
  const router = useRouter();

  const handleGoLogin = () => {
    router.replace("/");
  };

  return (
    <div className="unauthorized-container">
      <Result
        icon={<FrownOutlined className="unauthorized-icon" />}
        status="403"
        title="403 - Unauthorized"
        subTitle="Sorry, you don’t have access to this page."
        extra={[
          <Button type="primary" key="login" onClick={handleGoLogin}>
            Go to Login
          </Button>,
        ]}
        className="unauthorized-result"
      />
    </div>
  );
};

export default Unauthorized;
