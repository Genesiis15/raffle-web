export const Lottery = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-12">
      {/* Título y descripción */}
      <div className="text-center flex flex-col gap-5">
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          🎉 Sorteo Garantizado con Raffle 🎉
        </h2>
        <p className="mt-2 text-xl font-semibold tracking-tight text-pretty text-white sm:text-4xl lg:text-balance hidden md:block">
          ¡Todos los números vendidos tienen su oportunidad!
        </p>
        {/* Este texto se ocultará en dispositivos móviles */}
        <p className="mt-6 text-lg/8 text-white hidden md:block">
          El sistema Raffle implementa un método innovador de sorteos que
          garantiza la existencia de un ganador en cada evento. Este proceso
          transparente combina tecnología moderna con un diseño inteligente
          que asegura la participación exclusiva de números vendidos.
        </p>
      </div>

      {/* Secciones del sorteo */}
      <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-10">
        {[
          {
            title: "Sistema de Venta Inteligente",
            description:
              "Los tickets se venden hasta alcanzar el límite máximo disponible (por ejemplo, 100 números). Solo los números vendidos participan en el sorteo. En nuestro ejemplo, si se vendieron 40 números, estos son los únicos que tienen posibilidades de ganar.",
          },
          {
            title: "Período de Espera Controlado",
            description:
              "Una vez iniciada la venta de tickets, el sistema activa automáticamente un contador regresivo. Este contador comienza a mostrar el tiempo restante 24 horas antes del sorteo. Durante este período, los participantes pueden ver exactamente cuánto tiempo falta para conocer al ganador.",
          },
          {
            title: "Garantía de Ganador",
            description:
              "La selección aleatoria se realiza únicamente entre los números vendidos. Como solo participan números comprados, siempre habrá un ganador válido. Por ejemplo, si se vendieron 40 números, el sistema seleccionará uno de esos 40 números como ganador.",
          },
        ].map(({ title, description }, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 text-center flex flex-col items-center 
            border-gray-200 pt-4 
            md:border-none md:p-0 md:shadow-none 
            bg-white md:bg-transparent 
            p-6 rounded-lg shadow-lg"
          >
            <dt className="font-bold text-gray-600 md:text-white text-xl sm:text-2xl">{title}</dt>
            <dd className="mt-2 text-sm sm:text-base text-gray-600 md:text-white">{description}</dd>
          </div>
        ))}
      </div>
    </div>
  );
};
