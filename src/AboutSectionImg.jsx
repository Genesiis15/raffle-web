import video1 from '../src/assets/WhatsApp Video 2025-02-14 at 3.40.42 PM.mp4'
import people from '../src/assets/people.png'

export const AboutSectionImg =()=>{
    return <>
 <div >
     <video 
      src={video1} 
      controls 
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto max-w-2xl mx-auto min-h-[700px] max-h-[700px]"
      alt="Descripción del video"
    />
     </div>
   <div className="flex flex-col gap-5" >
   <div >
       <img width={900} height={400} src={people}/>
      </div>
      <div>
      <img width={900} height={400} src={people}/>
      </div>
   </div>
    </>
}