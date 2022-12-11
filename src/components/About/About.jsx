import { Outlet } from "react-router-dom";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about2}>
        <h2 className={styles.h2}>Rick and Morty</h2>
        <hr />
        <p className={styles.span}>
          About Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          nam porro excepturi eos necessitatibus amet laudantium fugiat quo
          voluptates eaque assumenda, et pariatur at in, asperiores est cumque
          molestias quam dolorem, similique quisquam architecto? Laboriosam
          deserunt ducimus minima iure quam!
        </p>
      </div>
      <Outlet />
    </div>
  );
}
