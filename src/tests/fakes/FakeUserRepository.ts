import { User } from "@prisma/client";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = []

  async create(name: string, email: string): Promise<User> {
    const user: User = {
      id: Math.random(),
      email,
      name
    }

    this.users.push(user)

    return user
  }

  find(id: number): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }
}

export { FakeUsersRepository }