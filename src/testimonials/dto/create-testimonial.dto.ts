export class CreateTestimonialDto {
  name!: string;
  role?: string;
  location?: string;
  rating?: number;
  text!: string;
  isActive?: boolean;
  sortOrder?: number;
}
