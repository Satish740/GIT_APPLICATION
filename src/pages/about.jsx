import {FaLinkedin,FaWhatsappSquare} from "react-icons/fa"

function About() {
    return (
      <div className='card shadow-md compact side bg-base-100'> 
      <div className='flex-column items-center space-x-4 card-body'>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
          A React app to search GitHub profiles and see profile details. This
          project is part of my React learning journey. 
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
            Created by{' '}
            
          <a className='text-white' href='https://github.com/Satish740'>
            Satish Jagadish
          </a>
          <div className="flex justify-center ">
          <a  href="https://www.linkedin.com/in/satish-jagadish-b2916a167/" target="_blank" rel="noreferrer" class="mr-2 text-2xl"> <FaLinkedin /> </a>
          <a  href="http://api.whatsapp.com/send?phone=4146391388&text=Hello, I saw your github profile finder website. " target="_blank" rel="noreferrer" class=" text-2xl"> <FaWhatsappSquare /></a>
          </div>
        </p>
      </div>
      </div>
    )
  }
  
  export default About