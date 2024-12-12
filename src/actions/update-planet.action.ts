import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

const sleep = async () => {
  return new Promise((r) => setTimeout(r, 2000));
};

export const updatePlanetAction = async (planet: Planet) => {
  try {
    sleep(); // Ralentizar 2 segundos

    throw new Error("Error de prueba");

    const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
    console.log("🚀 update-planet.action.ts -> #7 ~", "Planeta actualizado");

    return response.data;
  } catch (error) {
    console.error("Error al actualizar planeta", error);
    throw new Error("Error al actualizar planeta");
  }
};
