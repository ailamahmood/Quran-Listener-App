import ReactPlayer from "react-player"

const PlayerScreen = ({ reciterDetail, chapterDetail, handleBookmark }) => {

  const audioLink = (reciter, number) => {
    return reciter + '/' + ('00' + number).slice(-3) + '.mp3'
  }

  return (
    <div className="min-vh-100 shadow-lg p-3 bg-s">
      <h1 className="fs-2 fw-bold text-center">Player</h1>
      <hr />
      {reciterDetail !== null && chapterDetail !== null ? (

        <ul className="list-group text-end">
          <div>
            <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
              <span><b>Reciter:</b></span>
              <span className="fs-6">{reciterDetail.name}</span>
            </li>
            <hr />

            <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
              <span><b>Chapter in Arabic:</b></span>
              <span className="fs-5">{chapterDetail.name_arabic}</span>
            </li>
            <hr />

            <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
              <span><b>Chapter in English:</b></span>
              <span className="fs-6">{chapterDetail.name_complex}</span>
            </li>
            <hr />

            <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
              <span><b>Revelation Place:</b></span>
              <span className="fs-6">{chapterDetail.revelation_place}</span>
            </li>
            <hr />

            <li className="list-group-item bg-transparent border-0 py-0 ps-0 fs-6 cursor d-flex justify-content-between">
              <span><b>Translated Name:</b></span>
              <span className="fs-6">{chapterDetail.translated_name.name}</span>
            </li>
            <hr />

            <div>
              <ReactPlayer
                url={audioLink(reciterDetail.Server, chapterDetail.id)}
                controls={true} playing={true} width="100%" height="60px" />
            </div>

          <button className="btn btn-primary mt-3" onClick={() => handleBookmark(reciterDetail, chapterDetail)}>
            Bookmark
          </button>
          </div>

        </ul>) : (
        <div className="text-center fs-5">
          <span><p>Please select a reciter and a chapter.</p></span>
        </div>
      )}
    </div>

  )
}

export default PlayerScreen
