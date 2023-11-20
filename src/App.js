import './App.css';
import profile from './assets/white.jpg'
import portfolio from './assets/portfolio-icon.png'
import cloud from './assets/icloud-color.svg'
import personal from './assets/personal-data.png'
import resume from './assets/information.png'
import disableicon from './assets/disable-icon.png'
import github from './assets/github-color.svg'
import linkedin from './assets/linkedin-color.svg'
import outlook from './assets/microsoftoutlook-color.svg'
import replit from './assets/replit-color.svg'
import twitter from './assets/x-color.svg'
import telegram from './assets/telegram-color.svg'
import discord from './assets/discord-color.svg'


function App() {
  return (
      <div className="w-full h-screen lg:flex">
        <div className="h-[25%] bg-bodya flex justify-center items-center gap-3 lg:h-full lg:w-[35%] lg:flex-col">
          <img src={profile} alt="Profile" className='w-[20%] rounded-full border-[4px] border-white sm:w-[30%] sm:ml-4 lg:w-[45%]' />
          <div className='flex-row sm:w-[70%]'>
            <div className='text-white font-semibold text-[20px] sm:text-[15px] lg:text-center lg:text-[25px]'>
              Karthik R
            </div>
            <div className='text-gray-300 font-semibold text-[12px] sm:text-[10px] lg:text-center lg:text-[18px] lg:text-gray-500'>
              Vidyavardhaka College of Engineering
            </div>
            <div className='text-gray-300 font-semibold text-[12px] inline-flex items-center gap-2 sm:text-[10px] lg:flex lg:items-center lg:justify-center lg:text-[18px] lg:text-gray-500'>
              <img src={cloud} alt="Cal" className='h-[11px] w-[11px] lg:h-[15px] lg:w-[15px]' />
              Cloud | CS | Stocks |
            </div>
          </div>
        </div>

        <div className=" bg-bodyb flex-col justify-center lg:h-full lg:w-[65%] lg:flex-col">

          <div className='text-white text-center font-medium text-[20px] m-6 sm:hidden md:hidden'>
            Details,
          </div>

          <div className='py-4 lg:w-[100%] lg:grid lg:grid-cols-2 '>
            <div className='text-white text-center font-medium lg:hidden'>
              Details,
            </div>

            <div className='w-screen flex justify-center lg:w-[100%]'>
              <button type="button"
                disabled='true'
                onClick={() => { window.open("https://k-arthik-r.github.io/Portfolio/", "_blank"); }}
                className="h-12 w-[70%]  m-4 inline-flex items-center justify-center gap-4 text-white bg-gray-500  shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm">
                <img src={disableicon} alt="P" className='h-[20px] w-[20px] sm:hidden' />
                <img src={personal} alt="P" className='h-[20px] w-[20px]' />
                Personal Details
              </button>
            </div>

            <div className='w-screen flex justify-center lg:w-[100%]'>
              <button type="button"
                disabled='true'
                onClick={() => { window.open("https://k-arthik-r.github.io/Portfolio/", "_blank"); }}
                className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white bg-gray-500  shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm">
                <img src={disableicon} alt="P" className='h-[20px] w-[20px] sm:hidden' />
                <img src={resume} alt="P" className='h-[20px] w-[20px]' />
                Resume
              </button>
            </div>

            <div className='w-screen flex justify-center lg:w-[100%]'>
              <button type="button"
                onClick={() => { window.open("https://k-arthik-r.github.io/Portfolio/", "_blank"); }}
                className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-700 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm">
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
                className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-gray-900 shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm">
                <img src={github} alt="P" className='h-[20px] w-[20px]' />
                Github
              </button>
            </div>

            <div className='w-screen flex justify-center lg:w-[100%]'>
              <button type="button"
                onClick={() => { window.open("https://www.linkedin.com/in/k-arthik", "_blank"); }}
                className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white bg-gradient-to-b from-sky-500 to-sky-300 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-sky-500 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm">
                <img src={linkedin} alt="P" className='h-[20px] w-[20px]' />
                Linked In
              </button>
            </div>

            <div className='w-screen flex justify-center lg:w-[100%]'>
              <button type="button"
                onClick={() => { window.open("https://mail.google.com/mail/u/0/?to=karthik_r_@outlook.com&fs=1&tf=cm", "_blank"); }}
                className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-fuchsia-500 shadow-lg shadow-fuchsia-500/50 font-medium rounded-lg text-sm">
                <img src={outlook} alt="P" className='h-[20px] w-[20px]' />
                Outlook
              </button>
            </div>

            <div className='w-screen flex justify-center lg:w-[100%]'>
              <button type="button"
                onClick={() => { window.open("https://twitter.com/r_karthik__?t=qCYUBHYTrQUKm36LYTE7zw&s=08", "_blank"); }}
                className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm">
                <img src={twitter} alt="P" className='h-[20px] w-[20px]' />
                Twitter
              </button>
            </div>

            <div className='w-screen flex justify-center lg:w-[100%]'>
              <button type="button"
                onClick={() => { window.open("https://t.me/karthik_r_gowda", "_blank"); }}
                className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white bg-gradient-to-r from-blue-400 to-emerald-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-emerald-500 shadow-lg shadow-emerald-500/50 font-medium rounded-lg text-sm">
                <img src={telegram} alt="P" className='h-[20px] w-[20px]' />
                Telegram
              </button>
            </div>

            <div className='w-screen flex justify-center lg:w-[100%]'>
              <button type="button"
                onClick={() => { window.open("https://replit.com/@Karthik-R-Gowda", "_blank"); }}
                className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-400 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm">
                <img src={replit} alt="P" className='h-[20px] w-[20px]' />
                Replit
              </button>
            </div>

            <div className='w-screen flex justify-center lg:w-[100%]'>
              <button type="button"
                onClick={() => { window.open("https://drive.google.com/file/d/14PmV-X-qTj5ZptcBfDYgs2BixPIH7Clw/view?usp=drivesdk", "_blank"); }}
                className="h-12 w-[70%] m-4 inline-flex items-center justify-center gap-4 text-white bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-indigo-400 shadow-lg shadow-indigo-500/50 font-medium rounded-lg text-sm">
                <img src={discord} alt="P" className='h-[20px] w-[20px]' />
                Discord
              </button>
            </div>
          </div>

          <div className=' h-[5.3%] bg-bodya flex justify-center items-center text-xs text-white sm:hidden md:hidden lg:hidden'>
          Copyrights © 2023 Karthik R | All Rights Reserved
        </div>

        </div>
        <div className=' h-[10%] bg-bodya flex justify-center items-center text-xs text-white lg:hidden'>
          Copyrights © 2023 Karthik R | All Rights Reserved
        </div>
      </div>

  );
}

export default App;
