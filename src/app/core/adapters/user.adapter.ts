import { UserRole } from "../enums/user-role.enum";
import { User, UserDto } from "../interfaces/user.interface";

 

export const mapUserDtoToUser = (dto: UserDto): User => ({
  id: dto.id,
  name: dto.name,
  email: dto.email,
  role: dto.role as UserRole,
  avatar: dto.avatar,
  createdAt: dto.created_at,
});

