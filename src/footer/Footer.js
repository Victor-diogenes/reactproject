import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <section>
<p> </p>
    </section>
    <section><Nav defaultActiveKey="/home" className="flex-column">
      
<Nav.Link href="">Contact</Nav.Link>
<Nav.Link href=''>Terms</Nav.Link>
      <Nav.Link href='/privacy'>Privacy</Nav.Link>
      

</Nav></section>
    <section><Nav defaultActiveKey="/home" className="flex-column">
<Nav.Link href="/home">Portfolio</Nav.Link>
<Nav.Link eventKey="link-1">Projects</Nav.Link>
<Nav.Link eventKey="link-2">Github</Nav.Link>

</Nav></section>
</footer>
  )
}

export default Footer