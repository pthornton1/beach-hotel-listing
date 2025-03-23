export interface HotelImage {
  url: string;
  description: string;
}

export interface Resort {
  id: string;
  name: string;
  regionName: string;
  countryName: string;
  starRating: number;
  overview: string;
  image: HotelImage;
}

export interface FlightDetails {
  departureAirport: string;
  departureDate: string; // ISO string
}

export interface Party {
  adults: number;
  children?: number;
  infants?: number;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface BookingDetails {
  party: Party;
  lengthOfStay: number;
  price: Price;
}

export interface Hotel {
  resort: Resort;
  flightDetails: FlightDetails;
  bookingDetails: BookingDetails;
}

export type sortApplied = "alphabetically" | "price" | "rating";
export interface sortResultProps {
    sortHotels: (by:sortApplied) => void;
  };