import fixtures from '../fixtures/users'

import { Team } from './teams'

export interface User {
  email?: string
  id: string
  joined: object
  name: string
  role?: string
  teams: Team[]
}

export interface UsersModel {
  users: User[]
}

const users: UsersModel = {
  users: fixtures
}

export default users
