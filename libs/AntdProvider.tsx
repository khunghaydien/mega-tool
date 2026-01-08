"use client";

import { ConfigProvider, ThemeConfig, theme } from "antd";
import { ReactNode } from "react";
import { useThemeContext } from "./ThemeContext";

interface AntdProviderProps {
  children: ReactNode;
}

// Cấu hình theme cho Ant Design - Light mode
const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: "#ff6600",
    // Có thể thêm các token khác ở đây
    // borderRadius: 6,
    // fontFamily: "...",
  },
  algorithm: theme.defaultAlgorithm, // Light mode
  // Có thể thêm các component config khác
  // components: {
  //   Button: {
  //     // ...
  //   },
  // },
};

// Cấu hình theme cho Ant Design - Dark mode
const darkTheme: ThemeConfig = {
  ...lightTheme,
  algorithm: theme.darkAlgorithm, // Dark mode
};

export function AntdProvider({ children }: AntdProviderProps) {
  const { theme: currentTheme } = useThemeContext();
  const antdTheme = currentTheme === "dark" ? darkTheme : lightTheme;
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
}

