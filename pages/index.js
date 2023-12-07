import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'
import styles from '../components/Footer.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>mattshadecooks</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
      </Head>

      <main className="mainContainer">
        {/* <Header title="Welcome to my app!" /> */}
        <img src="/grater.svg" alt="mattshadecooks" className={styles.logo} />
        <p className="description">
          MATT SHADE COOKS
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
