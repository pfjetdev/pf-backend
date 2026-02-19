export class CreateBeatMyPriceDto {
  origin?: string;
  destination?: string;
  competitorPrice?: number;
  competitorUrl?: string;
  screenshotUrl?: string;
  phone?: string;
  email!: string;
}
