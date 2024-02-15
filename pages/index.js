import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Plantobject from '@components/Plant'
import Content from '@components/Content'
import Growth from '@components/Growth'
import Timeline from '@components/Timeline'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cyber_AGRI_culture</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <Timeline/>
        <Header title="Cyber_AGRI_culture" />
        <p className="description">
          <code>The cyberplant welcomes you.</code>
        </p>
      <Growth/>
      <Content/>
      <Plantobject/>
      {/* <Footer /> */}
      </main>
      <script src="/custom/custom.js" />
    </div>
    
  )
}
