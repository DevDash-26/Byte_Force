export type UserRole =
  | "STUDENT"
  | "STAFF"

export type Profile = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  faculty: string;
  programme: string;
  yearGroup: number | null;
  department: string | null;
};