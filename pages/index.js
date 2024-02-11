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
          The cyberplant welcomes you. Here are the latest iterations to the <code>struct plant (coming soon...)</code>
        </p>
        <div><img src="/img/20231212_175730.jpg"></img><img src="/img/20231216_132417.jpg"></img><img src="/img/20231220_162928.jpg"></img><img src="/img/20240109_172754.jpg"></img></div> 
      </main>

      <Footer />
    </div>
  )
}
