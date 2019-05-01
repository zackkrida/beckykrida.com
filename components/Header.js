import Link from 'next/link'

function Header() {
  return (
    <header>
      <h1>Beckyhu4hu</h1>
      <nav>
        <ul>
          <li>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/services">
              <a>Services</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
