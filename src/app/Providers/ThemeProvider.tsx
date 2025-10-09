"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import { ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  tenant?: string; // optional, if you’ll theme by tenant
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000000",
        },
        components: {
          Button: { controlHeight: 45 },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
