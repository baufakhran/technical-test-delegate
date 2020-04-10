import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

export default function MyNavbar() {
  return (
    <Navbar bg="light" variant="light" fixed="top" style={{ height: '55px' }}>
      <Navbar.Brand>
        <Link href="/">
          <a className="nav-link" style={{ color: 'black', fontWeight: '500' }}>
            BT-News
          </a>
        </Link>
      </Navbar.Brand>
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
