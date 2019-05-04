import moment from 'moment'
// @ts-ignore
import { loremIpsum as lorem } from 'lorem-ipsum'

import { Post } from '../models/posts'

import teams from './teams'
import users from './users'

const [mesenja] = teams
const [ali, janet, danyal, sara] = users

const id_ali = ali.id
const id_janet = janet.id

const fixtures: Post[] = [
  {
    attachments: [
      {
        caption: 'Ali Zahid',
        type: 'link',
        uri: 'https://designplox.com'
      }
    ],
    body: lorem({
      count: 2,
      units: 'paragraphs'
    }),
    created: moment().subtract(4, 'hours'),
    id: 'ZsgiMhAS3M',
    likes: [ali, janet, danyal, sara],
    seen: [ali],
    tagged: [janet],
    team: mesenja,
    user: ali
  },
  {
    attachments: [],
    body: `${lorem({
      count: 2,
      units: 'paragraphs'
    })}       

{user:${id_ali}}`,
    created: moment().subtract(24, 'minutes'),
    id: 'Mel0MW6Ygx',
    likes: [],
    seen: [janet],
    tagged: [ali],
    team: mesenja,
    user: janet
  },
  {
    attachments: [
      {
        caption: lorem(),
        type: 'image',
        uri:
          'https://images.unsplash.com/photo-1553531384-b5837c479d87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      }
    ],
    body: lorem({
      count: 2,
      units: 'paragraphs'
    }),
    created: moment().subtract(45, 'minutes'),
    id: 'EShhJme9Bi',
    likes: [ali, sara],
    seen: [],
    tagged: [],
    team: mesenja,
    user: danyal
  },
  {
    attachments: [],
    body: `${lorem()}

{user:${id_ali}} ${lorem()}

{user:${id_janet}} ${lorem()}`,
    created: moment().subtract(2, 'hours'),
    id: 'NqVElnvwSz',
    likes: [ali, janet, sara],
    seen: [],
    tagged: [ali, janet],
    team: mesenja,
    user: sara
  },
  {
    attachments: [],
    body: lorem({
      count: 2,
      units: 'paragraph'
    }),
    created: moment().subtract(4, 'hours'),
    id: 'lz6OX_9EZw',
    likes: [janet, danyal, sara],
    pinned: true,
    seen: [],
    tagged: [],
    team: mesenja,
    user: ali
  }
]

export default fixtures
