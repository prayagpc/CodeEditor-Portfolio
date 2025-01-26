
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
     
       <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>


      <p className={styles.title}><span className={styles.navCover}>Prayag Choudhary - Visual Studio Code</span></p>

    </section>
  );
};

export default Titlebar;
