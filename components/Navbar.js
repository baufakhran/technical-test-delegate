import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

export default function MyNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">BT-News</Navbar.Brand>
      <Nav className="mr-auto">
        <Link href="/">
          <a className="nav-link">Business</a>
        </Link>
        <Link href="/tech">
          <a className="nav-link">Tech</a>
        </Link>
      </Nav>
    </Navbar>
  )
}
