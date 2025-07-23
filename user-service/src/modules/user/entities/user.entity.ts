export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
  BLACKLISTED = "BLACKLISTED",
}

export class UserEntity {
  id: string;
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  address?: any;
  documents?: any;
  creditScore?: number;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}
