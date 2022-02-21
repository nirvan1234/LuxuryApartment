import React,{useState ,useEffect} from 'react'
import axios from 'axios';

export const BlogContext = React.createContext({});

export const BlogProvider = (props) => {
    const [trackList , setTrackList] = useState();

    async function getMusic(){
      try{
        const trackList = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=1&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        setTrackList(trackList.data)
        console.log(trackList.data)
      }catch(error){
        console.log("something is wrong");
      }
    }

    // useEffect(() => {

    // },[])

// axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=1&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
// .then(res => {
//   setTrackList(res.data)
//   //console.log(res.data)
// })
// .catch(err => console.log(err))

  return (
      <BlogContext.Provider value={[trackList]}>
        {props.children}
      </BlogContext.Provider>
    
  )
}

