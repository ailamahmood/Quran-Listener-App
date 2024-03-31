import React, { useState, useEffect } from 'react';
//import localStorage from 'localStorage';
//import { useEffect, useState } from "react"
import axios from 'axios'

import RecitersScreen from './RecitersScreen'
import ChaptersScreen from './ChaptersScreen'
import PlayerScreen from './PlayerScreen'

const HomeScreen = () => {

  const [reciters, setReciters] = useState([])
  const [chapters, setChapters] = useState([])

  const [reciterDetail, setReciterDetail] = useState(null)
  const [chapterDetail, setChapterDetail] = useState(null)
  const [bookmarks, setBookmarks] = useState([]); // State for bookmarks

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

 // Fetch bookmarks from LocalStorage on mount
useEffect(() => {
  const storedBookmarks = localStorage.getItem('bookmarks');
  if (storedBookmarks) {
    setBookmarks(JSON.parse(storedBookmarks));
  }
}, []);

//console.log(chapters)
  //console.log(reciters)
  const reciterHandler = (reciter) => {
    setReciterDetail(reciter)
  }
  const chapterHandler = (chapter) => {
    setChapterDetail(chapter)
  }

  const handleBookmark = (reciter, chapter) => {
    console.log('handleBookmark called!');
    const bookmark = { reciter, chapter };
    setBookmarks([...bookmarks, bookmark]); 
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // Store in LocalStorage
    alert('Bookmark Added!'); 
  }


  return (

    <div className="row py-3 px-5  home-body vh-100">
      <div className="col-lg-4 scroll">
        <RecitersScreen reciters={reciters} reciterHandler={reciterHandler} handleBookmark={handleBookmark}/>
      </div>
      <div className="col-lg-4 scroll">
        <ChaptersScreen chapters={chapters && chapters.chapters} chapterHandler={chapterHandler}/>
      </div>
      <div className="col-lg-4 scroll">
        <PlayerScreen reciterDetail={reciterDetail} chapterDetail={chapterDetail}/>
      </div>
    </div>

  )
}

export default HomeScreen
