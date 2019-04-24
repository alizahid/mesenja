import fixtures from '../fixtures/users'

export interface User {
  email?: string
  id: string
  joined: object
  name: string
  role?: string
}

export interface UsersModel {
  users: User[]
}

const users: UsersModel = {
  users: fixtures
}

export default users
