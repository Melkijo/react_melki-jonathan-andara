import styles from "./FormulirPage.module.css";
export default function FormulirPage() {
  return (
    <>
      <form id="fomrBuku" className={styles.form}>
        <h1>Formulir Buku Baru</h1>
        <label>
          Judul:
          <input type="text" name="" id="" className={styles.input} />
        </label>
        <label>
          Pengarang
          <input type="text" name="" id="" className={styles.input} />
        </label>
        <label htmlFor="">
          Cetakan
          <input type="text" name="" id="" className={styles.input} />
        </label>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>
    </>
  );
}
