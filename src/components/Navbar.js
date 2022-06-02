import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white flex flex-wrap items-center justify-between px-4 py-3">
      <Link to={'/'} className="font-bold text-2xl">UPayments Store</Link>
      <h3 className="font-medium text-xl">Register</h3>
    </nav>
  )
}