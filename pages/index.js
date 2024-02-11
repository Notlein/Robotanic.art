import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cyber_AGRI_culture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Cyber_AGRI_culture" />
        <p className="description">
          The cyberplant welcomes you. Here are the latest iterations to the <code>struct plant<text>{}</text>(coming soon...)</code>
        </p>
        <div style="display:flex">
          <img src="/img/20231212_175730.jpg" width="auto" height="30vh"></img>
          <img src="/img/20231212_175730.jpg" width="auto" height="30vh"></img>
          <img src="/img/20231212_175730.jpg" width="auto" height="30vh"></img>
          <img src="/img/20231212_175730.jpg" width="auto" height="30vh"></img>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
