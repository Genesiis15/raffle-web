export const Lottery = () => {
  return (
    <>
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        style={{ display: "flex", flexDirection: "column", gap: "50px" }}
      >
        <div className="text-center flex flex-col gap-17">
          <h2 className="text-7xl font-bold tracking-tight text-white sm:text-5xl">
            Sorteo Garantizado con Raffle
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-balance">
            ¡Todos los números vendidos tienen su oportunidad!
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            El sistema Raffle implementa un método innovador de sorteos que
            garantiza la existencia de un ganador en cada evento. Este proceso
            transparente combina tecnología moderna con un diseño inteligente
            que asegura la participación exclusiva de números vendidos.
          </p>
        </div>
        <div className="flex" style={{ gap: "20px" }}>
          <div className=" border-gray-200 pt-4">
            <dt className="font-medium text-white">
              Sistema de Venta Inteligente
            </dt>
            <dd className="mt-2 text-sm text-gray-600">
              Los tickets se venden hasta alcanzar el límite máximo disponible
              (por ejemplo, 100 números) Solo los números vendidos participan en
              el sorteo En nuestro ejemplo, si se vendieron 40 números, estos
              son los únicos que tienen posibilidades de ganar
            </dd>
          </div>
          <div className=" border-gray-200 pt-4">
            <dt className="font-medium text-white">
              Período de Espera Controlado
            </dt>
            <dd className="mt-2 text-sm text-gray-600">
              Una vez iniciada la venta de tickets, el sistema activa
              automáticamente un contador regresivo Este contador comienza a
              mostrar el tiempo restante 24 horas antes del sorteo Durante este
              período, los participantes pueden ver exactamente cuánto tiempo
              falta para conocer al ganador
            </dd>
          </div>
          <div className=" border-gray-200 pt-4">
            <dt className="font-medium text-white">Garantía de Ganador</dt>
            <dd className="mt-2 text-sm text-gray-600">
              La selección aleatoria se realiza únicamente entre los números
              vendidos Como solo participan números comprados, siempre habrá un
              ganador válido Por ejemplo, si se vendieron 40 números, el sistema
              seleccionará uno de esos 40 números como ganador
            </dd>
          </div>
        </div>
      </div>
    </>
  );
};
