import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-gray-950 flex items-center justify-center h-48">
      <img src={logoImg} alt="" className="w-32 h-12 object-cover" />
    </header>
  )
}
