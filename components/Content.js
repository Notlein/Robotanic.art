import styles from './Content.module.css'

export default function Content() {
  return (
    <>
      <div className={styles.content}>
      <div id="progress">
      <h3>The idea as of March 1st</h3>
        <p>
            The L-system as a generative tool to build a virtual plant can act as a bimodal interface between the plant and the audience. The virtual plant can receive chat prompts from the public in order to generate visual artifacts, echoing organic matter and data flux, and perhaps mix in some generative plant poetry in the visuals. To push the process further, the plant should require positive thoughts in the prompts as its ressource to grow and should transform negative thoughts, flaming, slurs, hate and other toxic form of behaviours into positive thoughts, therefore detoxifying the online interaction. However, it might be a good idea to give it real admin capabilities to block extreme forms of hateful content that may be harmful to the actual demonstration of the artwork.</p>
            <p>Currently working on the visual generation of L-Systems...</p>
            <p>TO DO : </p>
              <li>UI to chat with the plant</li>
              <li>Connect visual generation and stream</li>
              <li>Acquire/build the physical component to show the visuals</li>

      </div>
      <p></p>
      <h2 id="inspiration">A historical reference : Felix Guattari's <em>Les Trois Écologies</em></h2>
      <p><span><text>
      In the light of Félix Guattari’s book The Three Ecologies (Guattari, 1987), which proposes a philosophical framework to think of personal, social, and environmental ecologies as a single system, we can think of the virtual world as a fourth ecology, in which cyberculture and Nature can intersect and co-exist. We can then design sustainable solutions using the Internet of Things while being cautious about our own agency on ecosystems. In this sense, is an Internet of Plant (IoP) as an agricultural model  (Steeneken et al., 2023), feasible, viable and sustainable in the long term?</text>
        <text>
        Nature is a complex, self-balancing mechanism that achieves equilibrium throughout its entire ecosystem. While our technological apparatuses often give the illusion that we are dissociated from our natural environment, we should consider digital technologies as part of an all-encompassing ecology that operates between machines, data, living organisms, non-organic matter, natural forces, and humans. With interconnectivity at its core, this project stems from a need to connect back to the natural world, which is too often obfuscated by city skylines, highways, our perpetual online presence, etc. The goal is to encourage a symbiosis of nature and technology in non-intrusive ways, to explore the realm of ecological solutions within smart technologies, as well as to provide a reflection on repairing nature with art, as described in the book Un art écologique (Paul Ardenne, 2018).</text>
        </span>
        </p>
        <h2>Alice Jarry's work on sustainability of resources and the micro-electronic aesthetics</h2>
      <p><span>
        Jarry's work on sustainability and glass waste reflect my own concern with similar themes, such as energy efficiency, recycling design, and e-waste. As the inclusion of recycled material in Jarry's work fosters the idea of design for disassembly, we can draw the parallel with the current state of my work, which has been designed with the inclusion of recycled wood, obtained from a discarded bed bunk, and some recycled electronic components. Ultimately, my work echoes Jarry's work as they're both an ode to the micro-controller and the wire aesthetic, as all components and their interactions are revealed for the audience to see.
        </span>
        </p>
      <p><img src="/img/alicejarry.png" className={styles.img}></img></p>
      <h2>Michael Hansmeyer's work on L-systems in design and architecture</h2>
      <p><span>
      Hansmeyer's work on L-systems and computability in architecture inspires this project both in its design and aesthetic, as well as its 3D representation. The construction of L-systems, or Lindenmayer system, is used to reproduce organic qualities and attribute them to computational model. This can then be transferred into architecture, and abstract 3D modeling, but also can be fine-tuned to produce realistic biological models. Hansmeyer's experimentation with these systems is certainly similar to the final visual result I am aiming for. Ultimately, his writing on L-systems will prove to be a great resource for the development of this project.

        </span>
        </p>
      <p><img src="/img/michaelhansmeyer2.png" className={styles.img}></img></p>
      </div>
    </>
  )
}
