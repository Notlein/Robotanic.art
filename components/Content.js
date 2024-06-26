import styles from './Content.module.css'


function fetchVideoAndPlay() {
  fetch('/vid/cp.mp4')
  .then(response => response.blob())
  .then(blob => {
    video.srcObject = blob;
    return video.play();
  })
  .then(_ => {
    // Video playback started ;)
  })
  .catch(e => {
    // Video playback failed ;(
  })
}
  
function loadvid() {
  // This will allow us to play video later...
  video.load();
  fetchVideoAndPlay();
}



export default function Content() {
  return (
    <>
      <div className={styles.content}>
      <div id="progress">
      <h3>The idea as of April 2024</h3>
      <p>
      This project explores the generation of L-systems, or Lindenmayer systems, and its rendering in openGL with a mechanism used for fractal generation. L-systems are composed of an alphabet, a starting axiom and a grammar (rules), which is implemented as an array of type char (or string) to be parsed by a fractal drawing system. The drawing mechanism used, referred to as ‘turtle graphics’, is designed to follow an axiom of symbols and execute each symbol in the string as an instruction. The instructions can draw lines, orient the drawing vector in space, draw different elements, and use the stack as a data structure for recursivity, allowing the generation of fractal structures. However, I found it hard to simulate specific types of biological plants, since the grammar to be used would be very complex and would require further refinements both in functionality and efficiency. Therefore, the different grammars used in this project mimic some visual qualities of botanical specimens, although loosely, with heavily abstracted and minimalist aesthetics. Additionally, a GUI provided allows for the manual control of different variables involved in the generation process - temperature, air humidity, soil humidity, light amount. The GUI also acts as a monitoring tool for when the system is in automatic mode, as it reads a JSON of data generated in real time by another system.
      </p>
      <video className={styles.vid} preload="none" autoPlay loop muted>
        <source src={"/vid/cp_low.mp4"} type='video/mp4'/>
      </video>

        <p>
            As such, the L-system as a generative tool to build a virtual plant can act as a bimodal interface between the plant and the audience. The virtual plant can receive chat prompts from the public in order to generate visual artifacts, echoing organic matter and data flux, and perhaps mix in some generative plant poetry in the visuals. To push the process further, the plant should require positive thoughts in the prompts as its ressource to grow and should transform negative thoughts, flaming, slurs, hate and other toxic form of behaviours into positive thoughts, therefore detoxifying the online interaction. However, it might be a good idea to give it real admin capabilities to block extreme forms of hateful content that may be harmful to the actual demonstration of the artwork.</p>

              
              
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
      {loadvid}
      
    </>
  )
}
