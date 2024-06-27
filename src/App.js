
import './App.css';
import { Navbar } from './components/navbar/navbar'
import { Picture } from './components/picture';
import { About, Curious } from './components/about';
import { Location } from './components/location';
import Profile from './assets/Pic-1.png';
import Selfie from './assets/Pic-2.png';
import { Social, Tools } from './components/renderSVG';
import { Tag } from './components/tag';
import { Ucard, Wcard } from './components/card';
import { tags } from './assets/tags';
import { timeline, job } from './assets/timeline';
import { bullet } from './assets/bullet';
import { Contact } from './components/contact';
import { Footer } from './components/footer';


function App() {

  return (
    <body>
      <div className=' bg-slate-950'>
        <Navbar />
      </div>

      {/* ===================Profile=================== */}

      <div className='bg-slate-950 px-4 py-10 sm:'>
        <Picture img={Profile} />

        <div>
          <About />

          <Location></Location>

          <Social />
        </div>

      </div>

      {/* ===================About me================== */}

      <div className='bg-slate-900 px-4 py-10'>
        <Tag tag={tags[0].tag} passage={tags[0].passage} />

        <div className=' sm:flex sm:w-full sm:px-12 sm:py-20 sm:justify-center sm:gap-20'>
          <div className='sm:w-auto'>
            <Picture img={Selfie} />
          </div>

          <div className='w-80 mx-auto sm:w-96 sm:mx-0'>
            <Curious />
          </div>
        </div>


      </div>

      {/* =====================Skills================= */}

      <div className='bg-slate-950 px-4 py-10 flex flex-col gap-y-4'>

        <Tag tag={tags[1].tag} passage={tags[1].passage} />

        <Tools />


      </div>

      {/* ====================Experience============== */}

      <div className='bg-slate-900 px-4 py-10 flex flex-col gap-y-4 sm:gap-y-12'>
        <Tag tag={tags[2].tag} passage={tags[2].passage} />

        {bullet.map((element, index) => {
          return (
            <Ucard timeline={timeline[index].time} job={job[index].jobtitle} points={element} />
          )
        })}

      </div>

      {/* ======================Work================== */}
      <div className='bg-slate-950 px-4 py-10 flex flex-col gap-y-4 sm:gap-8'>
        <Tag tag={tags[3].tag} passage={tags[3].passage} />

        <div className='flex flex-col gap-4 sm:gap-8'>
          <Wcard />
          <Wcard />
          <Wcard />
        </div>
      </div>

      {/* ================Get in touch================ */}

      <div className='bg-slate-950 px-4 py-10 flex flex-col gap-y-4'>
        <Tag tag={tags[4].tag} passage={tags[4].passage} />

        <Contact />
      </div>


      {/* ================Get in touch================ */}

      <div className='bg-slate-900 px-2 py-4 flex flex-col gap-y-4'>
        <Footer />
      </div>
    </body>
  );
}

export default App;
