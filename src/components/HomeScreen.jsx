import { useEffect, useState } from "react"
import axios from 'axios'

import RecitersScreen from './RecitersScreen'
import ChaptersScreen from './ChaptersScreen'
import PlayerScreen from './PlayerScreen'

const HomeScreen = () => {

  const [reciters, setReciters] = useState([])
  const [chapters, setChapters] = useState([])

  const [reciterDetail, setReciterDetail] = useState(null)
  const [chapterDetail, setChapterDetail] = useState(null)

  //Get all reciters with audio
  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters }
      } = await axios.get("https://mp3quran.net/api/_english.php")
      setReciters(reciters)
    }
    fetchData();
  },[])

  //Get allchapters
useEffect(()=>{
  async function fetchData(){
    const{data:chapters}=await axios.get("https://api.quran.com/api/v4/chapters")
    setChapters(chapters)
}
    reciters && reciters.length >0 &&fetchData()
  
},[reciters])

console.log(chapters)
  //console.log(reciters)
  const reciterHandler = (reciter) => {
   // console.log(reciter.id)
    setReciterDetail(reciter)
  }
  const chapterHandler = (chapter) => {
    //console.log(chapter.id)
    setChapterDetail(chapter)
  }

  return (

    <div className="row p-5 home-body vh-100">
      <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12 col-12 scroll">
        <RecitersScreen reciters={reciters} reciterHandler={reciterHandler} />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12 col-12 scroll">
        <ChaptersScreen chapters={chapters && chapters.chapters} chapterHandler={chapterHandler}/>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-sm-12 col-12 scroll">
        <PlayerScreen reciterDetail={reciterDetail} chapterDetail={chapterDetail}/>
      </div>
    </div>

  )
}

export default HomeScreen
