import { FaUserCircle } from 'react-icons/fa'

const RecitersScreen = () => {
  return (
    <div className="min-vh-100 shadow-lg p-3 bg-s">
      <h1 className="fs-2 fw-bold text-center">Reciters</h1>
      <hr/>

      <ul className="list-group text-start">
        <div>
          <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor">
          <span><FaUserCircle className='fs-3 me-3'/></span>
          <span className="fs-6">Abdelbari Al-Toubayti</span>
          </li>
          <hr/>
        </div>
      </ul>
    </div>
  )
}

export default RecitersScreen

