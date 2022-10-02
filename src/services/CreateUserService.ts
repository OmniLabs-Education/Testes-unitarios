import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";

class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  public async execute(name: string, email: string) {
    const alreadyExistentUser = await this.usersRepository.findByEmail(email)

    if(alreadyExistentUser) {
      throw Error('Already existent User')
    }

    const user = await this.usersRepository.create(name, email)

    return user;
  }
}

export { CreateUserService }