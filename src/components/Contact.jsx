export default function Contact(){
  return(
    <section className="contact" id="contact">
      <h2>Send Us a Message</h2>
      <form onSubmit={e=>e.preventDefault()}>
        <input placeholder="Name" />
        <input placeholder="Phone" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </section>
  )
}
