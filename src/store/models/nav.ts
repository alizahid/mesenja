import { Action, Thunk, action, thunk } from 'easy-peasy'

import { StoreModel } from './index'
import { Team } from './teams'

export interface Scroll {
  team: Team
  column: string
  position: number
}

export interface NavModel {
  team?: Team
  scroll: Scroll[]

  setTeam: Thunk<NavModel, string, any, StoreModel>
  updateTeam: Action<NavModel, Team>

  setScroll: Action<NavModel, Scroll>
}

const nav: NavModel = {
  team: undefined,
  scroll: [],

  setTeam: thunk((actions, payload, { getStoreState }) => {
    const {
      teams: { teams }
    } = getStoreState()

    const team = teams.find(({ id }) => id === payload)

    if (team) {
      actions.updateTeam(team)
    }
  }),
  updateTeam: action((state, payload) => {
    state.team = payload
  }),

  setScroll: action((state, payload) => {
    const index = state.scroll.findIndex(
      ({ column, team }) =>
        team.id === payload.team.id && column === payload.column
    )

    if (index >= 0) {
      state.scroll[index] = payload
    } else {
      state.scroll.push(payload)
    }
  })
}

export default nav
