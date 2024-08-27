import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

export default function Home() {
  return (
    <>
<AddTodo />
<DisplayTodo />
    </>
  );
}
