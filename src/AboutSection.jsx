import people from "../src/assets/people.png";

export const AboutSection = () => {
  return (
    <>
      <h1 className="text-white text-7xl font-bold ">Quien es Raffle...</h1>
      <div style={{ padding: "70px" }}>
        <img src={people} />
      </div>

      <p className="text-white text-center">
        Raffle es la plataforma digital que revoluciona la forma de organizar y
        participar en rifas y sorteos. Con una interfaz intuitiva y procesos
        automatizados, Raffle transforma la experiencia tradicional de las rifas
        en una experiencia moderna y accesible para todos.{" "}
      </p>
    </>
  );
};
