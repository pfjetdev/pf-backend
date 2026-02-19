export class CreateAgentDto {
  name!: string;
  email!: string;
  phone?: string;
  avatarUrl?: string;
  role?: string;
  password?: string;
  isActive?: boolean;
}
