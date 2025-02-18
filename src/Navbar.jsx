import raffleLogo from "../src/assets/raffleLogo.png";

export const Navbar =()=>{

   
    return <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" style={{minHeight: "80vh"}}>
       
       <img
         src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
         alt="Fondo de la sección de trabajo"
         className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
       />

     

       {/* Contenido principal */}
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div style={{display:'flex', justifyContent:'space-between', padding:'20px'}}>
        <div className="mx-auto max-w-2xl lg:mx-0 ">
           <img
                                   alt="Your Company"
                                   src={raffleLogo}
                                   className="h-8 w-auto "
                                 />
          
         </div>
         

         {/* Enlaces de navegación */}
         <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
             <a
               href="#AboutSection"
               className="hover:text-primary transition-colors duration-200"
             >
               Sobre nosotros <span aria-hidden="true">&rarr;</span>
             </a>
             <a
               href="#Services"
               className="hover:text-primary transition-colors duration-200"
             >
               Servicios <span aria-hidden="true">&rarr;</span>
             </a>
             <a
               href="#TeamRaffle"
               className="hover:text-primary transition-colors duration-200"
             >
               Equipo <span aria-hidden="true">&rarr;</span>
             </a>
             <a
               href="#Contact"
               className="hover:text-primary transition-colors duration-200"
             >
               Contacto <span aria-hidden="true">&rarr;</span>
             </a>
           </div>
        </div>
        </div>
           
           <dl style={{marginTop:'400px', padding:'20px'}} className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
             <div className="flex flex-col-reverse gap-1">
               <dt className="text-base text-gray-300">Destaca nuestra base sólida de 12 colaboradores full-time, garantizando una atención profesional constante a nuestros usuarios.</dt>
               <dd className="text-4xl font-semibold tracking-tight text-white">
                 Equipo
               </dd>
             </div>
             <div className="flex flex-col-reverse gap-1">
               <dt className="text-base text-gray-300">
               Con más de 300 horas semanales dedicadas, podemos manejar un volumen significativo de rifas y transacciones simultáneas.
               </dt>
               <dd className="text-4xl font-semibold tracking-tight text-white">
               Tiempo
               </dd>
             </div>
             <div className="flex flex-col-reverse gap-1">
               <dt className="text-base text-gray-300">Esto nos permite mantener un equipo motivado y enfocado en brindar la mejor experiencia posible a nuestros participantes.
</dt>
               <dd className="text-4xl font-semibold tracking-tight text-white">
               Beneficios
               </dd>
             </div>
           
           </dl>
        
       </div>
     </div>
    </div>
}