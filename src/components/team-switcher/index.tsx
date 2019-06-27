import React, { FunctionComponent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import useRouter from 'use-react-router'
import clsx from 'clsx'

import { Team } from '../../store/models/teams'

import { Avatar } from '../../components'
import { useStoreState } from '../../store'

import users from '../../store/fixtures/users'

import './index.scss'

const [ali] = users

const buildPath = (team: Team, current: undefined | Team, path: string) => {
  if (current && path.length > 1) {
    return path.replace(current.id, team.id)
  }

  return `/teams/${team.id}`
}

const TeamSwitcher: FunctionComponent = () => {
  const current = useStoreState(state => state.nav.team)
  const { teams } = ali

  const [visible, setVisible] = useState(false)

  const {
    location: { pathname }
  } = useRouter()

  return (
    <div className="team-switcher">
      <button onClick={() => setVisible(!visible)} />
      {visible && (
        <div onClick={() => setVisible(false)}>
          <section>
            <h2>Switch teams</h2>
            {teams.map((team, index) => (
              <NavLink
                key={index}
                className={clsx(team === current && 'current')}
                to={buildPath(team, current, pathname)}
              >
                <Avatar data={team} />
                {team.name}
              </NavLink>
            ))}
          </section>
        </div>
      )}
    </div>
  )
}

export default TeamSwitcher
