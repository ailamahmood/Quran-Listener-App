import { useState } from 'react'

const ChaptersScreen = ({ chapters, chapterHandler }) => {
  const [activeId, setActiveId] = useState('')

  return (
    <div className="min-vh-100 shadow-lg p-3 bg-s">
      <h1 className="fs-2 fw-bold text-center">Chapters</h1><hr />
      <ul className="list-group text-end">

        {chapters && chapters.length > 0 ? (
          chapters.map((chapter) => (
            <div key={chapter.id}>
              <li onClick={(e) => {
                chapterHandler(chapter)
                setActiveId(chapter.id)
              }}
                className={`list-group-item bg-transparent border-0 py-0 d-flex justify-content-between fs-5 cursor 
                ${chapter.id === activeId ? "active" : ''
                  }`}
              >
                <span>{chapter.id}</span>
                <span className={`${chapter.id === activeId ? "active" : ''
                  }`}>{chapter.name_arabic}</span>{''}
              </li>
              <hr />
            </div>
          ))

        ) : (
          <div className="text-center">
            <span className="spinner-border"></span>
          </div>
        )
        }
      </ul>
    </div>
  )
}

export default ChaptersScreen
