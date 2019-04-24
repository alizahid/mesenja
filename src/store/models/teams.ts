import fixtures from '../fixtures/teams'

export interface Team {
  id: string
  name: string
}

export interface TeamsModel {
  teams: Team[]
}

const teams: TeamsModel = {
  teams: fixtures
}

export default teams
