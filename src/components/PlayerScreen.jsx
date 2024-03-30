import ReactPlayer from "react-player"

const PlayerScreen = () => {
  return (
    <div className="min-vh-100 shadow-lg p-3 bg-s">
      <h1 className="fs-2 fw-bold text-center">Player</h1>
      <hr/>

      <ul className="list-group text-end">
        <div>
          <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
          <span>Reciter:</span>
          <span className="fs-6">Abdelbari Al-Toubayti</span>
          </li>
          <hr/>

          <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
          <span>Chapter in Arabic:</span>
          <span className="fs-5">المائدة</span>
          </li>
          <hr/>

          <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
          <span>Chapter in English:</span>
          <span className="fs-6">Al-Mā'idah</span>
          </li>
          <hr/>

          <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
          <span>Revelation Place:</span>
          <span className="fs-6">madinah</span>
          </li>
          <hr/>

          <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
          <span>Translated Name:</span>
          <span className="fs-6">The Table Spread</span>
          </li>
          <hr/>

          <div>
            <ReactPlayer url="ss" controls={true} playing={true} width="100%" height="100%"/>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default PlayerScreen
