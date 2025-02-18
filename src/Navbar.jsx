import raffleLogo from "../src/assets/raffleLogo.png";
import logo from '../src/assets/logo.png'
export const Navbar =()=>{
    return <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 rounded-lg" style={{minHeight: "80vh"}}>
       <img
         src={logo}
         alt="Fondo de la sección de trabajo"
         className="absolute inset-0 -z-10 w-full h-full object-cover object-right  rounded-lg"
       />
       {/* Contenido principal */}
       <div className="mx-auto  px-6 lg:px-8">
        <div style={{display:'flex', justifyContent:'space-between', padding:'20px'}}>
        <div className="mx-auto max-w-2xl lg:mx-0 ">
           <img
                                   alt="Your Company"
                                   src={raffleLogo}
                                   className="h-8 w-auto "
                                 />
         </div>
         {/* Enlaces de navegación */}
         <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none rounded-lg">
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
               href="#comentarios"
               className="hover:text-primary transition-colors duration-200"
             >
               Comentarios <span aria-hidden="true">&rarr;</span>
             </a>
             <a
               href="#teamraffle"
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
           <dl style={{marginTop:'500px', padding:'20px'}} className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
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