import './header.css'

export default function Header(): JSX.Element {
  return (
    <header>
      <a
        href='https://github.com/doug-0/sl7-psi'
        target='_blank'
      >
        <img src="https://img.icons8.com/glyph-neue/40/EBEBEB/github.png" alt="github-icon" />
      </a>
      <a
        href='https://www.linkedin.com/in/douglas-d-oliveira/'
        target='_blank'
      >
        <img src="https://img.icons8.com/glyph-neue/40/EBEBEB/linkedin.png" alt="linkedin-icon" />
      </a>
    </header>
  )
}
