import { useActionState, useState } from "react";
import { Planet } from "../../interfaces/planet.interface";
import { createPlanetActionForm } from "../../actions/create-planet.action";
import { SubmitButton } from "./SubmitButton";

interface Props {
  onAddPlanet: (planet: Planet) => void;
}

export const EditPlanetForm = ({ onAddPlanet }: Props) => {
  const [state, formAction, isPending] = useActionState(
    async (prevState: unknown, queryData: FormData) => {
      const planet = await createPlanetActionForm(prevState, queryData);
      onAddPlanet(planet);
    },
    null,
  );

  return (
    <form className="mb-4 flex flex-col md:flex-row" action={formAction}>
      <input
        type="text"
        placeholder="Nombre del planeta"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="name"
        required
      />
      <input
        type="text"
        placeholder="Tipo de astro"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="type"
        required
      />
      <input
        type="text"
        placeholder="Distancia del sol"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="distanceFromSun"
        required
      />

      <SubmitButton />

      {/* <button */}
      {/*   type="submit" */}
      {/*   disabled={isPending} */}
      {/*   className="bg-blue-500 text-white p-2 cursor-pointer rounded flex-1 opacity-100 sm:flex-none disabled:bg-gray-500" */}
      {/* > */}
      {/*   Agregar planeta */}
      {/* </button> */}
    </form>
  );
};
