import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const updatePlanetAction = async (planet: Planet) => {
  try {
    const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);

    return response.data;
  } catch (error) {
    console.error("Error al actualizar planeta", error);
    throw new Error("Error al actualizar planeta");
  }
};
