"use client";
import styles from "./page.module.css";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { decrement, increment } from "./store/slices/counterSlice";
import CustomAlert from "./components/CustomAlert/CustomAlert";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        height: "25vh",
        width: "30vw",
        margin: "0 auto",
        background: "gray",
      }}
    >
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
