export interface Ships {
  docs: DocShip[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: number;
}

export interface DocShip {
  last_ais_update: null;
  legacy_id: string;
  model: null | string;
  type: Type;
  roles: string[];
  imo: number | null;
  mmsi: number | null;
  abs: number | null;
  class: number | null;
  mass_kg: number | null;
  mass_lbs: number | null;
  year_built: number | null;
  home_port: HomePort;
  status: null | string;
  speed_kn: null;
  course_deg: null;
  latitude: number | null;
  longitude: number | null;
  link: null | string;
  image: null | string;
  name: string;
  active: boolean;
  launches: string[];
  id: string;
}

export enum HomePort {
  FortLauderdale = "Fort Lauderdale",
  PortCanaveral = "Port Canaveral",
  PortOfLosAngeles = "Port of Los Angeles",
}

export enum Type {
  Barge = "Barge",
  Tug = "Tug",
}
