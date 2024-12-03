export interface ICityProps {
  id?: string;
  name?: string;
  latitude?: number;
  longitude?: number;
}

export interface ICityAPIResponse {
  id?: string;
  name?: string;
  sys?: { country?: string };
  coord?: { lat?: number; lon?: number };
}
