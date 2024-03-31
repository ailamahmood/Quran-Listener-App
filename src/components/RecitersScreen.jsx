import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'

const RecitersScreen = ({ reciters, reciterHandler }) => {
  const [activeId, setActiveId] = useState('')

  return (
    <div className="min-vh-100 shadow-lg p-3 bg-s">
      <h1 className="fs-2 fw-bold text-center">Reciters</h1>
      <hr />
      <ul className="list-group text-start">

        {reciters && reciters.length > 0 ? (
          reciters.map((reciter) => (
            <div key={reciter.id}>
              <li onClick={(e) => {
                reciterHandler(reciter)
                setActiveId(reciter.id)
              }}
                className={`list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor 
                  ${reciter.id === activeId ? "active" : ''
                  }`}
              >
                <span><FaUserCircle className='fs-3 me-3' /></span>
                <span className={`${reciter.id === activeId ? "active" : ''
                  }`}>{reciter.name}</span>
              </li>
              <hr />
            </div>
          ))
        ) : (
          <div className="text-center">
            <span className="spinner-border"></span>
          </div>
        )}

      </ul>
    </div>
  )
}

export default RecitersScreen

