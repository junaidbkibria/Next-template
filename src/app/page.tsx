"use client";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { decrement, increment } from "./store/slices/counterSlice";
import CustomAlert from "./components/CustomAlert/CustomAlert";
import { useTranslation } from "react-i18next";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  return (
    <div
      style={{
        height: "25vh",
        width: "30vw",
        margin: "0 auto",
        background: "gray",
      }}
    >
      <h1>{t("welcome")}</h1>

      <Button type="primary" onClick={() => i18n.changeLanguage("en")}>
        English
      </Button>
      <Button onClick={() => i18n.changeLanguage("bn")}>বাংলা</Button>
      <h3>{count}</h3>
      <Button type="primary" onClick={() => dispatch(increment())}>
        Increase
      </Button>
      <Button type="primary" onClick={() => dispatch(decrement())}>
        Decrease
      </Button>

      <CustomAlert message="error" />
    </div>
  );
}
