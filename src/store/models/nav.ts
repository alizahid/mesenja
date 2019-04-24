import { Action, Thunk, action, thunk } from 'easy-peasy'

import { Team } from './teams'

export interface NavModel {
  team?: Team

  setTeam: Thunk<NavModel, string>
  updateTeam: Action<NavModel, Team>
}

const nav: NavModel = {
  team: undefined,

  setTeam: thunk(async (actions, payload, { getStoreState }) => {
    // @ts-ignore
    const {
      teams: { teams }
    }: {
      teams: {
        teams: Team[]
      }
    } = getStoreState()

    console.log(teams)

    const team = teams.find(({ id }) => id === payload)

    if (team) {
      actions.updateTeam(team)
    }
  }),
  updateTeam: action((state, payload) => {
    state.team = payload
  })
}

export default nav
