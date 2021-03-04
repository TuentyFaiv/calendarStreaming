import Head from 'next/head';

import styles from '../styles/Home.module.css';

import Day from '../components/Day';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TuentyFaiv</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className={styles.header}>
        <h1>
          <img src="/logo.png" alt="Logo"/>
          Tonalli |
        </h1>
        <h2>TuentyFaiv en <a href="https://www.twitch.tv/tuentyfaiv" target="_blank" rel="noopener noreferrer">Twitch</a></h2>
      </header>
      <main className={styles.main}>
        <section className={styles.schedule}>
          <Day title="Hora">
            <span>8:00 - 9:00 am</span>
            <span>9:00 - 10:00 am</span>
            <span>10:00 - 11:00 am</span>
            <span>12:00 - 1:00 pm</span>
            <span>7:00 - 8:00 pm</span>
            <span>8:00 - 9:00 pm</span>
            <span>9:00 - 10:00 pm</span>
            <span>10:00 - 11:00 pm</span>
          </Day>
          <Day title="Domingo">
          </Day>
          <Day title="Lunes">
          </Day>
          <Day title="Martes">
            <p data-day="tuesday">EN VIVO</p>
          </Day>
          <Day title="Miércoles">
            <p data-day="wednesday">EN VIVO</p>
          </Day>
          <Day title="Jueves">
          </Day>
          <Day title="Viernes">
            <p data-day="friday">EN VIVO</p>
          </Day>
          <Day title="Sabado">
            <p data-day="saturday">EN VIVO</p>
          </Day>
        </section>
      </main>
      <footer className={styles.footer}>
        <h4>
          <a href="https://tuentyfaiv.vercel.app/" target="_blank" rel="noopener noreferrer">Portafolio</a>
        </h4>
      </footer>
    </div>
  )
}
