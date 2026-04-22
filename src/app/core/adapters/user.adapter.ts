import { UserRole } from '../enums/user-role.enum';
import { UserStatus } from '../enums/user-status.enum';
import { User, UserDto } from '../interfaces/user.interface';

const DEFAULT_DEPARTMENT = 'General';
const DEFAULT_AVATAR_BASE = 'https://ui-avatars.com/api/?background=0f172a&color=f59e0b&name=';
const RECENT_LOGIN_OFFSETS_IN_DAYS = [1, 2, 3, 5, 7];

const normalizeRole = (role: string): UserRole => {
  const normalized = role.trim().toLowerCase().replace(/[\s-]+/g, '_');

  switch (normalized) {
    case UserRole.ADMIN:
      return UserRole.ADMIN;
    case UserRole.MANAGER:
      return UserRole.MANAGER;
    case UserRole.SUPER_ADMIN:
      return UserRole.SUPER_ADMIN;
    default:
      return UserRole.USER;
  }
};

const normalizeStatus = (status: UserDto['status'] | string | undefined): UserStatus => {
  switch ((status ?? '').trim().toLowerCase()) {
    case UserStatus.ACTIVE:
      return UserStatus.ACTIVE;
    case UserStatus.INACTIVE:
      return UserStatus.INACTIVE;
    case UserStatus.PENDING:
      return UserStatus.PENDING;
    default:
      return UserStatus.PENDING;
  }
};

const parseDate = (value: string | undefined, fallback: Date): Date => {
  if (!value) {
    return fallback;
  }

  const parsed = new Date(value);

  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
};

const getDeterministicRecentDate = (seed: string): Date => {
  const offsetIndex =
    seed.split('').reduce((total, char) => total + char.charCodeAt(0), 0) %
    RECENT_LOGIN_OFFSETS_IN_DAYS.length;
  const result = new Date();

  result.setDate(result.getDate() - RECENT_LOGIN_OFFSETS_IN_DAYS[offsetIndex]);
  result.setHours(9 + offsetIndex * 2, 15, 0, 0);

  return result;
};

export const mapUserDtoToUser = (dto: UserDto): User => {
  const createdAt = parseDate(dto.created_at, new Date());
  const fallbackLastLogin = getDeterministicRecentDate(dto.id);

  return {
    id: dto.id,
    name: dto.name,
    email: dto.email,
    role: normalizeRole(dto.role),
    avatar:
      dto.avatar ||
      `${DEFAULT_AVATAR_BASE}${encodeURIComponent(dto.name || dto.email || 'User')}`,
    status: normalizeStatus(dto.status),
    createdAt,
    metadata: {
      department: dto.metadata?.department?.trim() || DEFAULT_DEPARTMENT,
    },
    lastLogin: parseDate(dto.lastLogin, fallbackLastLogin),
  };
};

