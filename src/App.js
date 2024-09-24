import './App.css';
import video from "./assets/video.mp4";
import profile from './assets/white.jpg';
import portfolio from './assets/portfolio-icon.png';
import cloud from './assets/icloud-color.svg';
import personal from './assets/details.svg';
import resume from './assets/resume.png';
import disableicon from './assets/disable-icon.png';
import github from './assets/github-color.svg';
import linkedin from './assets/linkedin-color.svg';
import outlook from './assets/microsoftoutlook-color.svg';
import replit from './assets/replit-color.svg';
import twitter from './assets/x-color.svg';
import telegram from './assets/telegram-color.svg';


function App() {
  return (
    <>
      <div className="relative">
        <video
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 w-full h-full object-cover"
          style={{
            zIndex: -1,
          }}
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="w-full h-screen divide-y lg:flex divide-x">
          <div className="h-[25%] flex justify-center items-center gap-3 lg:h-full lg:w-[35%] lg:flex-col">
            <img src={profile} alt="Profile" className='w-[20%] rounded-full border-[4px] border-white sm:w-[30%] sm:ml-4 lg:w-[45%]' />
            <div className='flex-row sm:w-[70%]'>
              <div className='text-white font-semibold text-[20px] sm:text-[15px] lg:text-center lg:text-[25px]'>
                Karthik R
              </div>
              <div className='text-gray-300 font-semibold text-[12px] sm:text-[10px] lg:text-center lg:text-[18px] lg:text-gray-500'>
                Software Engineer
              </div>
              <div className='text-gray-300 font-semibold text-[12px] inline-flex items-center gap-2 sm:text-[10px] lg:flex lg:items-center lg:justify-center lg:text-[18px] lg:text-gray-500'>
                <img src={cloud} alt="Cal" className='h-[11px] w-[11px] lg:h-[15px] lg:w-[15px]' />
                Cloud | Machine Learning | Automations
              </div>
            </div>
          </div>

          <div className="flex-col backdrop-blur-sm  justify-center lg:h-full lg:w-[65%] lg:flex-col">

            <div className='text-white text-center font-medium text-[20px] m-6 sm:hidden md:hidden'>
              Details,
            </div>

            <div className='py-4 lg:w-[100%] lg:grid lg:grid-cols-2 '>
              <div className='text-white text-center font-medium lg:hidden'>
                Details,
              </div>

              <div className='w-screen flex justify-center lg:w-[100%]'>
                <button type="button"
                  disabled={true}
                  onClick={() => { window.open("https://k-arthik-r.github.io/Portfolio/", "_blank"); }}
                  className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white font-medium rounded-lg text-sm border border-white border-2 backdrop-blur-md hover:bg-white hover:bg-opacity-25 hover:text-black hover:font-bold">
                  <img src={disableicon} alt="P" className='h-[20px] w-[20px] sm:hidden' />
                  <img src={personal} alt="P" className='h-[20px] w-[20px]' />
                  Personal Details
                </button>
              </div>

              <div className='w-screen flex justify-center lg:w-[100%]'>
                <button type="button"
                  disabled={false}
                  onClick={() => { window.open("https://drive.google.com/file/d/11406JD8aFe5I-hQcHlvrt18GyK-71hry/view?usp=drivesdk", "_blank"); }}
                  className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white font-medium rounded-lg text-sm border border-white border-2 backdrop-blur-md hover:bg-white hover:bg-opacity-25 hover:text-black hover:font-bold">
                  {/* <img src={disableicon} alt="P" className='h-[20px] w-[20px] sm:hidden' /> */}
                  <img src={resume} alt="P" className='h-[20px] w-[20px]' />
                  Resume
                </button>
              </div>

              <div className='w-screen flex justify-center lg:w-[100%]'>
                <button type="button"
                  onClick={() => { window.open("https://k-arthik-r.github.io/Portfolio/", "_blank"); }}
                  className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white font-medium rounded-lg text-sm border border-white border-2 backdrop-blur-md hover:bg-white hover:bg-opacity-25 hover:text-black hover:font-bold">
                  <img src={portfolio} alt="P" className='h-[20px] w-[20px]' />
                  Portfolio
                </button>
              </div>
            </div>

            <div className='text-white text-center font-medium text-[20px] m-6 sm:hidden md:hidden'>
              Find Me @,
            </div>

            <div className='py-4 lg:grid lg:grid-cols-2'>

              <div className='text-white text-center font-medium m-4 lg:hidden'>
                Find Me @,
              </div>

              <div className='w-screen flex justify-center lg:w-[100%]'>
                <button type="button"
                  onClick={() => { window.open("https://github.com/k-arthik-r", "_blank"); }}
                  className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white font-medium rounded-lg text-sm border border-white border-2 backdrop-blur-md hover:bg-white hover:bg-opacity-25 hover:text-black hover:font-bold">
                  <img src={github} alt="P" className='h-[20px] w-[20px]' />
                  Github
                </button>
              </div>

              <div className='w-screen flex justify-center lg:w-[100%]'>
                <button type="button"
                  onClick={() => { window.open("https://www.linkedin.com/in/k-arthik", "_blank"); }}
                  className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white font-medium rounded-lg text-sm border border-white border-2 backdrop-blur-md hover:bg-white hover:bg-opacity-25 hover:text-black hover:font-bold">
                  <img src={linkedin} alt="P" className='h-[20px] w-[20px]' />
                  Linked In
                </button>
              </div>

              <div className='w-screen flex justify-center lg:w-[100%]'>
                <button type="button"
                  onClick={() => { window.open("https://mail.google.com/mail/u/0/?to=karthik_r_@outlook.com&fs=1&tf=cm", "_blank"); }}
                  className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white font-medium rounded-lg text-sm border border-white border-2 backdrop-blur-md hover:bg-white hover:bg-opacity-25 hover:text-black hover:font-bold">
                  <img src={outlook} alt="P" className='h-[20px] w-[20px]' />
                  Outlook
                </button>
              </div>

              <div className='w-screen flex justify-center lg:w-[100%]'>
                <button type="button"
                  onClick={() => { window.open("https://twitter.com/r_karthik__?t=qCYUBHYTrQUKm36LYTE7zw&s=08", "_blank"); }}
                  className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white font-medium rounded-lg text-sm border border-white border-2 backdrop-blur-md hover:bg-white hover:bg-opacity-25 hover:text-black hover:font-bold">
                  <img src={twitter} alt="P" className='h-[20px] w-[20px]' />
                  Twitter
                </button>
              </div>

              <div className='w-screen flex justify-center lg:w-[100%]'>
                <button type="button"
                  onClick={() => { window.open("https://t.me/karthik_r", "_blank"); }}
                  className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white font-medium rounded-lg text-sm border border-white border-2 backdrop-blur-md hover:bg-white hover:bg-opacity-25 hover:text-black hover:font-bold">
                  <img src={telegram} alt="P" className='h-[20px] w-[20px]' />
                  Telegram
                </button>
              </div>

              <div className='w-screen flex justify-center lg:w-[100%]'>
                <button type="button"
                  onClick={() => { window.open("https://replit.com/@Karthik-R", "_blank"); }}
                  className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white font-medium rounded-lg text-sm border border-white border-2 backdrop-blur-md hover:bg-white hover:bg-opacity-25 hover:text-black hover:font-bold">
                  <img src={replit} alt="P" className='h-[20px] w-[20px]' />
                  Replit
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
