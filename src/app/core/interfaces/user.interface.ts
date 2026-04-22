import { UserRole } from '../enums/user-role.enum';
import { UserStatus } from '../enums/user-status.enum';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  status: UserStatus;
  createdAt: Date;
  metadata: {
    department: string;
  };
  lastLogin: Date;
}

export interface UserDto {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  status: UserStatus;
  created_at: string;
  metadata?: {
    department?: string;
  };
  lastLogin?: string;
}

