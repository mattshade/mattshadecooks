import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="/"><img src="/grater.svg" alt="mattshadecooks" className={styles.logo} /></a>
      </footer>
    </>
  )
}
