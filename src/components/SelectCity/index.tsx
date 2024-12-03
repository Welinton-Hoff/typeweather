import "./styles.css";
import { useEffect, useState } from "react";

import { Input } from "../Input";
import { useFetchCity } from "./hooks/useFetchCity";
import { ICityProps } from "../../@types/network/city";

interface ISelectCityProps {
  onSelect(city: ICityProps): void;
}

export function SelectCity({ onSelect }: Readonly<ISelectCityProps>) {
  const { onFetch } = useFetchCity();

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState<ICityProps[]>([]);

  async function getCities(name: string) {
    setIsLoading(true);

    const response = await onFetch(name);

    setCity(response);
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) return;

    const debounce = setTimeout(() => getCities(search), 500);
    return () => clearInterval(debounce);
  }, [search]);

  return (
    <div className="select">
      <Input
        isLoading={isLoading}
        placeholder="Search place"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="select-list">
        {!!city?.length &&
          city?.map((item) => (
            <button type="button" key={item?.id} onClick={() => onSelect(item)}>
              <p>{item?.name}</p>
            </button>
          ))}
      </div>
    </div>
  );
}
