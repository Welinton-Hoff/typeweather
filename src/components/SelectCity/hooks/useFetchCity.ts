import { getCityByName } from "../../../services/network/city";

export function useFetchCity() {
  async function onFetch(name: string) {
    try {
      const { data } = await getCityByName(name);

      const city = {
        id: data.id,
        latitude: data?.coord?.lat,
        longitude: data?.coord?.lon,
        name: data?.sys?.country
          ? `${data.name}, ${data.sys.country}`
          : data.name,
      };

      return [city];
    } catch (error) {
      return [];
    }
  }

  return { onFetch };
}
