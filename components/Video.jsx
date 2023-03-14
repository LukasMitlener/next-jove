
const Video = () => {
  return (
    <div name='video' className='w-full mt-36 '>
      <div className='max-w-[1240px] mx-auto px-6'>
        <div className="flex flex-col justify-center items-center">  
          <div className='py-12'>  
            <h2>
              <span className="text-main-blue">JOVE </span> VE SNÍDANI S NOVOU
            </h2>
            <p className="pt-4">Udělejte si ☕ a mrkněte na sice poměrně letité, ale velice informativní video (lyže od té doby prošly opravdu velkým vývojem)</p>
          </div>

          <div className="padding_video embed-responsive-16by9 relative w-full overflow-hidden">
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

export default Video