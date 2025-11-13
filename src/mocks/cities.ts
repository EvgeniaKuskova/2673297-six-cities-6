export type Cities = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export const Cities: Record<string, Cities> = {
  Paris: {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 12,
  },
  Cologne: {
    title: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 12,
  },
  Brussels: {
    title: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 12,
  },
  Amsterdam: {
    title: 'Amsterdam',
    lat: 52.3909553943508,
    lng: 4.88969,
    zoom: 12,
  },
  Hamburg: {
    title: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 12,
  },
  Dusseldorf: {
    title: 'Dusseldorf',
    lat: 51.227741,
    lng: 6.773456,
    zoom: 12,
  },
};
