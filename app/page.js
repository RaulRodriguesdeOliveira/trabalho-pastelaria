import Image from "next/image";
import styles from "./page.module.css";
import Item from "./components/Item";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.nameContainer}>
        <div className={styles.name}>Pastelaria do seu Zé</div>
      </div>
      <div className={styles.menu}>
        <Item name="Carne" valor="12,00" />
        <Item name="Queijo" valor="10,00" />
        <Item name="Pizza" valor="12,00" esgotado/>
        <Item name="Frango" valor="10,00" />
        <Item name="Calabresa" valor="12,00" esgotado/>
        <Item name="Chocolate" valor="14,00" esgotado/>
        <Item name="Morango" valor="12,00" esgotado />
        <Item name="Goiabada" valor="14,00" />
      </div>
    </div>
  );
}
