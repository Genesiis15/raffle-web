import mariangel from '../src/assets/mariangel.jpg'
import genesis from '../src/assets/genesis.jpg'
import maikol from '../src/assets/maikol.jpg'
import diango from '../src/assets/diango.jpg'
import jean from '../src/assets/jean.png'

export const TeamRaffle =()=>{
    return <>
        <div className=" py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl" style={{display:'flex', flexDirection:'column',
            gap:'20px'}}>
              <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:text-4xl">
                Conozca al equipo de Raffle
              </h1>
              <p className="mt-6 text-lg/8 text-white">
                Somos un grupo dinámico de personas apasionadas por lo que
                hacemos y dedicadas a brindar los mejores resultados para
                nuestros clientes. En Raffle, nos enorgullece presentar un
                equipo diverso y apasionado que comparte una visión común: hacer
                que los sorteos sean más accesibles, transparentes y
                emocionantes para todos.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              <li>
                <div className="flex items-center gap-x-6 bg-white/90 p-8 rounded-lg shadow-lg" style={{padding:'20px'}}>
                  <img
                    className=" w-16 h-16 rounded-full object-cover"
src={maikol}                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-primary">
                      Maikol
                    </h3>
                    <p className="text-sm/6 font-semibold text-secondary">
                    Ingeniero Informático Frontend / CEO
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6 bg-white/90 p-8 rounded-lg shadow-lg" style={{padding:'20px'}}>
                  <img
                    className="size-16 rounded-full"
                    src={jean}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-primary">
                      Jean C.
                    </h3>
                    <p className="text-sm/6 font-semibold text-secondary">
                    Desarrollador Software / Frontend
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6 bg-white/90 p-8 rounded-lg shadow-lg" style={{padding:'20px'}}>
                  <img
                    className="size-16 object-cover rounded-full"
                    src={genesis}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-primary">
                      Genesis
                    </h3>
                    <p className="text-sm/6 font-semibold text-secondary">
                      Desarrollador Software / Frontend
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6 bg-white/90 p-8 rounded-lg shadow-lg" style={{padding:'20px'}}>
                  <img
                    className="size-16 object-cover rounded-full"
                    src={mariangel}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-primary">
                      Mariangel
                    </h3>
                    <p className="text-sm/6 font-semibold text-secondary">
                    Community manager / CM
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6 bg-white/90 p-8 rounded-lg shadow-lg" style={{padding:'20px'}}>
                  <img
                    className="size-16 rounded-full"
                    src={diango}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-primary">
                      Diango
                    </h3>
                    <p className="text-sm/6 font-semibold text-secondary">
                    Ingeniero Informático Backend/ CEO
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </>
}