
import React ,{useContext} from 'react'
import { BlogContext } from '../../context'


function Tracks() {
    const trackList = useContext(BlogContext);
  
  return (
    <div>
    <h1>Tracks</h1>
    <h1>{trackList}</h1>
   <button>heyou</button>
    </div>
  )
}

export default Tracks