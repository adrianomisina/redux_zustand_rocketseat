import ReactPlayer from "react-player"
const Video = () => {
  return (
    <div className='w-full bg-zinc-950 aspect-video'>
        <ReactPlayer
            width="100%"
            height="100%"
            controls
            url='https://www.youtube.com/watch?v=Jai8w6K_GnY'
        />
    </div>

  )
}

export default Video