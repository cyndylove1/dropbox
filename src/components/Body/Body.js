import React from 'react'
import emoji from '../images/emoji smile.svg'
import cloud from '../images/cloud done.svg'
import twinkle from '../images/twinkle.svg'
import shield from '../images/shield.svg'
import dropbox from '../images/Dropbox - Copy.svg'
import sign from '../images/Sign.svg'
import docsend from '../images/Docsend.svg'
import backup from '../images/Backup.svg'
import capture from '../images/Capture.svg'
import transfer from '../images/Transfer.svg'
import paper from '../images/Paper.svg'
import password from '../images/Passwords.svg'
import segement from '../images/Segmentation_1@2x.webp'
import segement2 from '../images/Segmentation_2@2x.webp'
import integration1 from '../images/Integrations_1@2x.webp'
import integration2 from '../images/Integrations_2@2x.webp'
import integration3 from '../images/Integrations_3@2x.webp'
import integration4 from '../images/Integrations_4@2x.webp'
import integration5 from '../images/Integrations_5@2x.webp'
import integration6 from '../images/Integrations_6@2x.webp'
import integration7 from '../images/Integrations_7@2x.webp'
import integration8 from '../images/Integrations_8@2x.webp'
import digital from '../images/DigitalNomads2_1440x960.webp'
import video from '../../assets/Dropbox_Homepage.mp4'
// import ScrollReveal from 'scrollreveal'



 const Body = () => {
//   const sr = ScrollReveal ({
//     distance: '60px',
//     duration: 3000,
//     reset: true

//   });
      
    // sr.reveal('.pt-20 text-5xl text-white,.pt-7 text-base text-white,.bg-[rgb(57,132,255)] hover:bg-bluelight transition px-10 py-6 mt-4 hover:bg-skyblue',{delay:350, origin:'top'});
    // sr.reveal('.w-90 ml-96 h-72 mt-10,.bg-brown ml-7 h-96 flex pt-16 text-left,.grid grid-cols-4 ml-20,.bg-brown,.pt-20 text-4xl text-center',{delay:350, origin:'bottom'});
    



 
  return (
    <div>
        <div className='bg-brown w-90 text-center'>
            <h1 className='pt-20 text-5xl text-white'>Join over 700 million registered <br/> users who trust Dropbox</h1>
            <h6 className='pt-7 text-base text-white'>Easy to use, reliable, private, and secure. It’s no wonder Dropbox is the choice for storing and sharing <br/> your most important files.</h6>



            <button className='bg-[rgb(57,132,255)] hover:bg-bluelight transition px-10 py-6 mt-4 hover:bg-skyblue'>Find Your Plan &rarr;</button>
            
          <div>
            <video src={video} autoPlay loop muted className='w-90 ml-96 h-72 mt-10'/>
          </div>

            
            <div className=' pt-10 text-4xl text-white'>See what sets Dropbox apart</div>


          <div>
            <div className='bg-brown ml-7 h-96 flex pt-16 text-left'>
              <div className='px-10 text-white'>
                <img src={emoji} className='w-22 pb-7 h-20 pr-20' alt=''/>
                <h5 className='pb-7'>Your files, not ours</h5>
                <h5>With Dropbox, your files belong <br/>to you, not us, so you can be<br/> sure we’re not reselling your<br/> data.</h5>
                
              </div>
              <div className='px-10 text-white'>
                <img src={cloud} className='w-22 pb-7 h-20 pr-20' alt=''/>
                <h5 className='pb-7'>All your files in one place</h5>
                <h5>Store computer backups, photo<br/> libraries, thousands of <br/>documents—all your files, in the<br/> same place.</h5>
                
              </div>
              <div className='px-10 text-white'>
                <img src={twinkle} className='w-22 pb-7 h-20 pr-20' alt=''/>
                <h5 className='pb-7'>One-of-a-kind functionality</h5>
                <h5>Store files as large as 2 TB <br/>each, sync at light speed, and<br/> allow anyone to preview nearly<br/> 200 file types.</h5>
                
              </div>
              <div className='px-10 text-white'>
                <img src={shield} className=' w-22 pb-7 h-20 pr-20' alt=''/>
                <h5 className='pb-7'>Ease of use and security</h5>
                <h5>2/3 of surveyed users say<br/> Dropbox keeps their files more <br/>secure and we’re a leader in<br/> ease of use.</h5>
                
              </div>
              
                
            </div>
              
          </div>

           
            
        </div>



        <div className='bg-grey'>
          <div className=' pt-20 text-4xl text-center'>
            <h1>A set of products to help you do more</h1>
          </div>
          <div className=' grid grid-cols-4 ml-20'>
            <div>
              <img src={dropbox} className='w-14 pt-16'alt=''/>
              <h6 className='pt-7'>Dropbox</h6>
              <h5 className='pt-7'>Securely store, organize, and<br/> share all your files.</h5>
              <h3 className='pt-7'>Learn More &rarr;</h3>
              
            </div>
            <div>
              <img src={sign} className='w-10 pt-16' alt=''/>
              <h6 className='pt-7'>Sign</h6>
              <h5 className='pt-7'>Streamline your document<br/> workflows with legally-binding,<br/> eSignatures..</h5>
              <h3 className='pt-7'>Learn More &rarr;</h3>
              
            </div>
            <div>
              <img src={docsend} className='w-10 pt-16'alt=''/>
              <h6 className='pt-7'>DocSend</h6>
              <h5 className='pt-7'>Securely share your documents<br/> with real-time insights, so you<br/> know what's most impactful.</h5>
              <h3 className='pt-7'>Learn More &rarr;</h3>
              
            </div>
            <div>
              <img src={backup}className=' w-12 pt-16' alt=''/>
              <h6 className='pt-7'>Backup</h6>
              <h5 className='pt-7'>Automatically back up <br/>important files on your devices<br/> to the cloud and easily restore<br/> them..</h5>
              <h3 className='pt-7'>Learn More &rarr;</h3>
              
            </div>
            <div>
              <img src={capture} className='w-14 pt-16'alt=''/>
              <h6 className='pt-7'>Capture</h6>
              <h5 className='pt-7'>Get your message across with<br/> screenshots, GIFs, or videos<br/> recorded right on your screen.</h5>
              <h3 className='pt-7'>Learn More &rarr;</h3>
              
            </div>
            <div>
              <img src={transfer} className='w-12 pt-16'alt=''/>
              <h6 className='pt-7'>Transfer</h6>
              <h5 className='pt-7'>Quickly and securely deliver<br/> large files—up to<br/> 100 GB—to anyone.</h5>
              <h3 className='pt-7'>Learn More &rarr;</h3>
              
            </div>
            <div>
              <img src={paper} className='w-12 pt-16'alt=''/>
              <h6 className='pt-7'>Paper</h6>
              <h5 className='pt-7'>Create collaborative documents<br/> to coordinate work and drive <br/>projects forward.</h5>
              <h3 className='pt-7'>Learn More &rarr;</h3>
              
            </div>
            <div>
              <img src={password} className='w-12 pt-16'alt=''/>
              <h6 className='pt-7'>Passwords</h6>
              <h5 className='pt-7'>Automatically store unlimited<br/> passwords in one central,<br/> secure place..</h5>
              <h3 className='pt-7 '>Learn More &rarr;</h3>
              
            </div>
          </div>
        </div>

        <div className='bg-brown'>
          <div className=''>
            <h2 className=' py-20 text-4xl text-center text-white'>How will you use Dropbox?</h2>
          </div>
        <div className=' w-90 flex'>
          <div className='mx-7'>
            <img src={segement} className='h-60 w-screen' alt=''/>

          <div className='bg-light h-80'>
            <h3 className=' py-7 pl-10 text-2xl text-white'>For Work</h3>
            <h5 className=' pl-10 text-base text-white'>Work efficiently with teammates and clients, stay in sync on<br/> projects, and keep company data safe—all in one place.</h5>
            <button className=' bg-lightblue hover:bg-bluelight px-6 py-2 mt-16 ml-10 transition'>Get Drop For Work   &rarr;</button>
          </div>
          </div>
          <div className='mr-7'>
            <img src={segement2} className='h-60 w-screen' alt=''/>

          <div className='bg-light h-80'>
            <h3 className=' py-7 pl-10 text-2xl text-white'>For personal use</h3>
            <h5 className=' pl-10 text-base text-white'>Keep everything that’s important to you and your family shareable<br/> and safe in one place. Back up files in the cloud, share photos and<br/> videos, and more.</h5>
            <button className=' px-7 bg-lightblue hover:bg-bluelight px-6 py-2 mt-10 ml-10 transition'>Get Drop For Personal Use  &rarr;</button>
            
          </div>
        </div>
          
            
      </div>
          
        </div>

        <div className='bg-brown'>
          <div className='py-20 text-4xl text-center text-white'>
            <h1>Cloud storage you can count on</h1>
          </div>
          <div className=' h-80 flex px-4'>
            <div className='mx-10'>
              <h2 className='text-5xl text-white'>56%</h2>
              <h4 className='py-4 text-2xl text-white'>of Fortune 500<br/> companies</h4>
              <h5 className='text-white'>have at least one Dropbox team<br/> plan.</h5>
            </div>
            <div className='mx-10'>
              <h2 className='text-5xl text-white'>1B+</h2>
              <h4 className='py-4 text-2xl text-white'>mobile app downloads</h4>
              <h5 className='text-white'>with Editors’ Choice Awards <br/>from the Google Play and Apple<br/> App Store.</h5>
            </div>
            <div className='mx-10'>
              <h2 className='text-5xl text-white'>600k</h2>
              <h4  className='py-4 text-2xl text-white'>teams globally</h4>
              <h5  className='text-white'>use Dropbox to share work,<br/> safeguard content, and grow<br/> their business.</h5>
            </div>
            <div className='mx-10'>
              <h2 className='text-5xl text-white'>4.5GB</h2>
              <h4 className='py-4 text-2xl text-white'>connections and<br/> counting</h4>
              <h5 className='text-white'>created through Dropbox file<br/> sharing.</h5>
            </div>
          </div>
        </div>
        
        <div className='bg-grey' >
          <div>
            <h1 className=' pt-20 text-4xl text-center'>Get more out of Dropbox by<br/> connecting with the tools you love</h1>
          </div>
          <div className=' grid grid-cols-4 ml-24'>
            <div>
              <img src={integration1} className='w-12 pt-20' alt=''/>
              <h6 className='pt-7'>Zoom</h6>
              <h5 className='pt-7'>Enhance remote collaboration<br/> with Zoom instant meetings<br/> and video recordings.</h5>
              
            </div>
            <div>
              <img src={integration2}className='w-12 pt-20'  alt=''/>
              <h6 className='pt-7'>Slack</h6>
              <h5 className='pt-7'>Bring Slack conversations and <br/>Dropbox content together to<br/> keep teams in sync.</h5>
              
            </div>
            <div>
              <img src={integration3} className='w-12 pt-20' alt=''/>
              <h6 className='pt-7'>Adobe Creative Cloud</h6>
              <h5 className='pt-7'>Easily and securely send files to <br/>clients and vendors from within <br/>Adobe Photoshop.</h5>
              
            </div>
            <div>
              <img src={integration4}className='w-12 pt-20'  alt=''/>
              <h6 className='pt-7'>Microsoft Office</h6>
              <h5 className='pt-7'>Easily access, edit, and share<br/> Office docs online in Dropbox.</h5>
              
            </div>
            <div>
              <img src={integration5}className='w-12 pt-20'  alt=''/>
              <h6 className='pt-7'>Google Workspace</h6>
              <h5 className='pt-7'>Create, edit, and share Google<br/> Docs, Sheets, and Slides in<br/> Dropbox.</h5>
              
            </div>
            <div>
              <img src={integration6} className='w-12 pt-20'  alt='hey'/>
              <h6 className='pt-7'>Trello</h6>
              <h5 className='pt-7'>Collaborate on team projects in<br/> Trello with Dropbox content.</h5>
              
            </div>
            <div>
              <img src={integration7} className='w-12 pt-20' alt=''/>
              <h6 className='pt-7'>Canvas</h6>
              <h5 className='pt-7'>Upload course files or<br/> assignments straight from<br/> Dropbox to Canvas.</h5>
              
            </div>
            <div>
              <img src={integration8}className='w-12 pt-20'  alt=''/>
              <h6 className='pt-7'>Asana</h6>
              <h5 className='pt-7'>Track all of your team’s work<br/> with Asana while keeping <br/>Dropbox content alongside..</h5>
              
            </div>
            
          </div>
          
        </div>

        <div className='bg-brown'>
          <div className=' py-7 text-center text-white'>
            <h1 className=' py-7 text-4xl'>Trusted by over 700 million<br/> registered users and 600,000 teams</h1>
            <h6>View more customer stories</h6>
          </div>
          <div className=' mx-14 flex'>
          <div>
            <img src={digital} className='h-86 w-screen' alt=''/>
          </div>
          <div className='h-86 bg-red pl-7 w-screen pt-4'>
            <h2 className='text-3xl text-white'>“Dropbox has been tremendously <br/>helpful for social media. I can hop on<br/> anytime and pull whatever photo is<br/> inspiring me to post.”</h2>

            <h6 className=' py-4 text-white'>Read the full story</h6>
            <h6 className='pt-32 text-white'>Mary Ashley Krogh (MAK), Illustrator and Graphic Designer</h6>
        </div>
          
            
      </div>
          
          
        </div>
        
          <div className='bg-brown flex items-center justify-between py-20 pl-10'>
            <div>
              <h2 className=' px-6 text-4xl text-white'>For all things worth sharing.</h2>
            </div>
            <div>
              <button className='bg-lightblue hover:bg-bluelight px-16 py-4 mr-40 transition'>Refer a friend</button>
            </div>
          </div>


         
    </div>
  )
}

export default Body