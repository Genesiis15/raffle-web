export const Contact = () => {
  return (
    <div>
      <div style={{marginBottom:'50px'}}>
        <h2 className="text-5xl font-semibold text-primary">Contáctanos</h2>
      </div>
      <form action="mailto:mmsanchezraffle@gmail.com" method="post" encType="text/plain">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label className="block text-sm/6 font-medium text-primary">
                  Nombre
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      style={{padding:'10px'}}
                      type="text"
                      name="nombre"  // Cambiado de username a nombre
                      id="nombre"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm/6 font-medium text-primary">
                  Correo electrónico
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      style={{padding:'10px'}}
                      type="text"
                      name="email"  // Cambiado de username a email
                      id="email"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Ingresa tu email"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label className="block text-sm/6 font-medium text-primary">
                  Mensaje
                </label>
                <div className="mt-2">
                  <textarea
                    style={{marginBottom:'20px', padding:'10px'}}
                    name="mensaje"  // Cambiado de about a mensaje
                    id="mensaje"
                    rows="3"
                    placeholder="Escribe tu mensaje aqui..."
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <button
            style={{padding:'10px'}}
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary cursor-pointer transition-colors duration-200 text-sm font-medium"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};