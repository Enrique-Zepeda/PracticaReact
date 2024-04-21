import { useState } from "react";
import YoutubePlayer from "react-player/youtube"; //para mejorar un poco el rendimiento de la app le decimos con que vamos a trabajar
// import ReactPlayer from 'react-player'
function App() {
  const [playing, setPlaying] = useState(false);
  const handleRep = () => {
    setPlaying((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleRep}>Parar/Reproducir</button>
      <YoutubePlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        controls
        playing={playing}
        // con controls le damos los controles del video dependiendo la plataforma
      />
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />  */}
    </>
  );
}

export default App;
