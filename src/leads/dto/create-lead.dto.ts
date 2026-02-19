export class CreateLeadDto {
  name!: string;
  email?: string;
  phone!: string;
  message?: string;

  origin?: string;
  destination?: string;
  departDate?: string;
  returnDate?: string;
  cabinClass?: string;
  passengersAdults?: number;
  passengersChildren?: number;
  passengersInfants?: number;

  quotedPrice?: number;

  formLocation?: string;
  abVariant?: string;
  source?: string;
  sourceUrl?: string;

  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}
