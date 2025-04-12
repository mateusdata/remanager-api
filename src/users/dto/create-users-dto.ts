export class CreateUsersDto {
  name: string;
  email: string
  password: string
  age: number;
  profileImage: string;
  phoneNumber: string;
  role: string;
  isActive: boolean;
  deleteAt: boolean;
  createdAt: Date;
  updateAt: Date;
}

