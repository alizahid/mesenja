import fixtures from '../fixtures/users'

export interface User {
  id: string
  name: string
}

export interface UsersModel {
  users: User[]
}

const users: UsersModel = {
  users: fixtures
}

export default users
