export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  createdAt: string;

  metadata?: {
    department?: string;
  };
}

export interface UserDto {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  created_at: string;
}


