import React from 'react'

const Contact = () => {
  return (
    <>
   
   <>
  <section className="content">
    <form action="#" method="post">
      <label htmlFor="name">Your Name:</label>
      <input type="text" id="name" name="name" required="" />
      <label htmlFor="email">Your Email:</label>
      <input type="email" id="email" name="email" required="" />
      <label htmlFor="message">Your Message:</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required=""
        defaultValue={""}
      />
      <input type="submit" defaultValue="Send Message" />
    </form>
  </section>
  <footer>
    <p>© 2024 Our Company. All rights reserved.</p>
  </footer>
</>

    </>
  )
}

export default Contact
