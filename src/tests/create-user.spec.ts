import { CreateUserService } from "../services/CreateUserService"
import { FakeUsersRepository } from "./fakes/FakeUserRepository"

let createUser: CreateUserService;
let fakeUserRepository: FakeUsersRepository;
describe('Create User', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository()

    createUser = new CreateUserService(
      fakeUserRepository
    )
  })
  test('should be able to create a user', async () => {
    const user = await createUser.execute('user', 'user@gmail.com')

    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
  })

  test('should not be able to create a user if email already in use', async () => {
    await createUser.execute('user', 'user@gmail.com')

    await expect(createUser.execute(
      'user',
      'user@gmail.com'
    )).rejects.toBeInstanceOf(Error)
  })
})