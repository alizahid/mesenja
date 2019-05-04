import { Action, Thunk, action, thunk } from 'easy-peasy'

import { StoreModel } from './index'
import { Team } from './teams'

export interface NavModel {
  team?: Team
  scroll: {
    [key: string]: number
  }

  setTeam: Thunk<NavModel, string, any, StoreModel>
  updateTeam: Action<NavModel, Team>

  setScroll: Action<
    NavModel,
    {
      column: string
      position: number
    }
  >
}

const nav: NavModel = {
  team: undefined,
  scroll: {},

  setTeam: thunk(async (actions, payload, { getStoreState }) => {
    const {
      teams: { teams }
    }: {
      teams: {
        teams: Team[]
      }
    } = getStoreState()

    const team = teams.find(({ id }) => id === payload)

    if (team) {
      actions.updateTeam(team)
    }
  }),
  updateTeam: action((state, payload) => {
    state.team = payload
  }),

  setScroll: action((state, { column, position }) => {
    state.scroll[column] = position
  })
}

export default nav
