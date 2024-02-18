import styles from './Content.module.css'

export default function Content() {
  return (
    <>
      <div className={styles.content}>
      <h2>A historical framework : Felix Guattari's <em>Les Trois Écologies</em></h2>
      <p><span><text>
      In the light of Félix Guattari’s book The Three Ecologies (Guattari, 1987), which proposes a philosophical framework to think of personal, social, and environmental ecologies as a single system, we can think of the virtual world as a fourth ecology, in which cyberculture and Nature can intersect and co-exist. We can then design sustainable solutions using the Internet of Things while being cautious about our own agency on ecosystems. In this sense, is an Internet of Plant (IoP) as an agricultural model  (Steeneken et al., 2023), feasible, viable and sustainable in the long term?</text>
        <text>
        Nature is a complex, self-balancing mechanism that achieves equilibrium throughout its entire ecosystem. While our technological apparatuses often give the illusion that we are dissociated from our natural environment, we should consider digital technologies as part of an all-encompassing ecology that operates between machines, data, living organisms, non-organic matter, natural forces, and humans. With interconnectivity at its core, this project stems from a need to connect back to the natural world, which is too often obfuscated by city skylines, highways, our perpetual online presence, etc. The goal is to encourage a symbiosis of nature and technology in non-intrusive ways, to explore the realm of ecological solutions within smart technologies, as well as to provide a reflection on repairing nature with art, as described in the book Un art écologique (Paul Ardenne, 2018).</text>
        </span>
        </p>
        <h2>Alice Jarry's work on sustainability of resources and the micro-electronic aesthetics</h2>
      <p><span>
        Jarry's work on sustainability and glass waste reflect my own concern with similar themes, such as energy efficiency, recycling design, and e-waste. As the inclusion of recycled material in Jarry's work fosters the idea of design for disassembly, we can draw the parallel with the current state of my work, which has been designed from recycled wood obtained from a discarded bed bunk.
        </span>
        </p>
      <p><img src="/img/alicejarry.png" className={styles.img}></img></p>
      <h2>Michael Hansmeyer's work on L-systems in design and architecture</h2>
      <p><span>
      Hansmeyer's work on L-systems and computability in architecture inspires this project both in its design and aesthetic, as well as its 3D representation. The construction of L-systems, or Lindenmayer system, is used to reproduce organic qualities and attribute them to computational model. This can then be transferred into architecture, and abstract 3D modeling, but also can be fine-tuned to realistic models.

        </span>
        </p>
      <p><img src="/img/michaelhansmeyer2.png" className={styles.img}></img></p>
      </div>
    </>
  )
}
