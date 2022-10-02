import { User } from "@prisma/client";
import { database } from "../database";
import { IUsersRepository } from "./interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {
  public async create(name: string, email: string): Promise<User> {
    const user = await database.user.create({
      data: {
        name: name,
        email: email
      }
    })

    return user
  }

  public async find(id: number): Promise<User | null> {
    const user = await database.user.findUnique({
      where: {
        id: Number(id)
      }
    })

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await database.user.findUnique({
      where: {
        email: email
      }
    })

    return user
  }
}

export { UsersRepository }