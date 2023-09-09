import React from 'react'
import drop from '../images/Dropbox.svg'

const Navbar = () => {
  return (
    <div className=' w-90 fixed z-10 flex bg-white'>
        <div className=''>
            <div className=' w-90 flex'>
                <img src={drop} className='h-7 bg-color-white mx-2 my-3' alt=''/>
                <span className='py-3 pl-4 text-black'>DROPBOX</span>

                
                <div className='mx-7'>

                    <ul className=' flex py-3'>
                        <li className='mx-4'>Why Box?</li>
                        <li className='mx-4'>Products</li>
                        <li className='mx-4'>Solutions</li>
                        <li className='mx-4'>Pricing</li>
                            
                            
                    </ul>
                </div>

                <div>
                    <ul className='flex items-center py-2 ml-48'>
                        <li className='mx-4'>Contact</li>
                        <li className='mx-4'>Get App</li>
                        <li className='mx-4'>Sign up</li>
                        <li className='mx-4'>Login</li>

                        <button className='bg-darkblue hover:bg-blue mr-18 px-6 py-2 text-white transition'>Get Started   &rarr;</button>
                            
                    </ul>
                    
                    
                    
                </div>
            
            </div>
            
                
           
        </div>
        

        {/* <div>
            <div>
                <h1>bbbbbbbb</h1>
            </div>
        </div>
         */}
        
          
    </div>

    
  )
  
}

export default Navbar