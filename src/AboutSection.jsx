import people2 from '../src/assets/aboutImage1.jpg'

export const AboutSection=()=> {
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 ">
          <div style={{padding:'10px'}} className="space-y-4">
            
            <h2 className="text-5xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl ">Sobre Raffle</h2>
            <p style={{marginTop:'50px'}} className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Raffle es la plataforma digital que revoluciona la forma de organizar y
        participar en rifas y sorteos. Con una interfaz intuitiva y procesos
        automatizados, Raffle transforma la experiencia tradicional de las rifas
        en una experiencia moderna y accesible para todos.{" "}
            </p>
            <p style={{marginTop:'50px'}} className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Únete ahora y descubre cómo Raffle está cambiando la forma de participar en rifas y sorteos. ¡Es momento de hacer que tus sueños se vuelvan realidad!
            </p>
            <div style={{marginTop:'50px'}} className=" flex flex-col gap-2 min-[400px]:flex-row">
            <a 
            target='_blank'
            href='https://raffleoffial.com'
    
          style={{padding:'10px'}}
            type="submit"
            className="w-full bg-primary text-white text-center py-2 px-4 rounded-md hover:bg-secondary cursor-pointer transition-colors duration-200 text-sm font-medium"
          >
            RAFFLE
          </a>
          <a
            href="#Contact"
          style={{padding:'10px'}}
            type="submit"
            className="w-full border border-input bg-background text-center text-primary py-2 px-4 rounded-md hover:bg-secondary cursor-pointer transition-colors duration-200 text-sm font-medium"
          >
            Contáctanos
          </a>
              
                
          
             
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden  lg:aspect-square ">
  
            <img
              src={people2}
              alt="Our team collaborating in the office"
              
              className="object-cover w-full h-full"
              // sizes="(max-width: 768px) 100vw, 50vw"
             
            />
          </div>
        </div>
      </div>
    </section>
  )
}

