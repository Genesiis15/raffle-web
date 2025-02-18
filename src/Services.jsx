import comida from '../src/assets/comida.jpeg'
import comida1 from '../src/assets/comida1.jpeg'
import comida2 from '../src/assets/comida2.jpeg'
import comida3 from '../src/assets/comida3.jpeg'

export const Services =()=>{
    return <>
    <div className="bg-white">
  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Por que elegir a Raffle?</h2>
      <p style={{padding: "20px 0px"}} className="text-gray-500">Raffle es la plataforma digital que revoluciona la forma de organizar y participar en rifas y sorteos. Con una interfaz intuitiva y procesos automatizados, Raffle transforma la experiencia tradicional de las rifas en una experiencia moderna y accesible para todos.</p>

      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-primary">Regístrate</dt>
          <dd className="mt-2 text-sm text-gray-500">Crea tu cuenta en Raffle para acceder a todas las rifas disponibles.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-primary">Busca tu rifa ideal</dt>
          <dd className="mt-2 text-sm text-gray-500">Explora nuestra selección de rifas y encuentra la que más te interese.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-primary">Elige tu número de la suerte</dt>
          <dd className="mt-2 text-sm text-gray-500">Selecciona y compra tus boletos para la rifa elegida.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-primary">¡Ya estás participando!</dt>
          <dd className="mt-2 text-sm text-gray-500">Recibirás un correo de confirmación con los detalles de tu participación.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-primary">Espera la fecha del sorteo</dt>
          <dd className="mt-2 text-sm text-gray-500">Sigue el calendario de sorteos y espera el día de tu suerte.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-primary">Sorteo Realizado por Raffle</dt>
          <dd className="mt-2 text-sm text-gray-500">Solo participan los números vendidos, garantizando que siempre hay un ganador en cada rifa.</dd>
        </div>
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img src={comida} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100"/>
      <img src={comida1} alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100"/>
      <img src={comida2} alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100"/>
      <img src={comida3} alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100"/>
    </div>
  </div>
</div>
    </>
}