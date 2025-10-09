import styles from "./page.module.css";
import { Button } from "antd";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button type="primary">Button</Button>
    </div>
  );
}
