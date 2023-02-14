import styles from "../styles/styles";

const Video1 = () => {
  return (
    <div name='video' className='bg-[#F8F9FA] w-full mt-24 relative'>
      <div className='max-w-[1240px] mx-auto'>

        <div className="flex flex-col justify-center items-center max-w-[1240px] m-auto relative z-[1]">  
          <div className='px-4 py-12'>  
            <h2>
              <span className="text-main-blue">JOVE </span> VE SNÍDANI S NOVOU
            </h2>
            <p>Udělejte si &#9749; a mrkněte na sice poměrně staré, ale velice informativní video (lyže od té doby prošly opravdu velkým vývojem)</p>
          </div>

          <div className="padding_video embed-responsive embed-responsive-16by9 relative w-full overflow-hidden px-12">
            <iframe
              className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/CQQ4pquG4HQ"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video1