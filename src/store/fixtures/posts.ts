import moment from 'moment'

import { Post } from '../models/posts'

const fixtures: Post[] = [
  {
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut massa felis.

Pellentesque tempor, nisl at consectetur finibus, elit nulla rutrum nibh, et iaculis felis dolor a enim. Sed lacinia dapibus vestibulum.

Morbi ornare molestie odio, [eu laoreet neque porttitor sed](https://designplox.com). Integer pretium purus pulvinar dignissim varius. Ut sed mi vitae odio luctus tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Nullam euismod nulla sem, at gravida mauris malesuada ut. Nam eu aliquam dolor. Ut consequat sem quis nulla condimentum, ut congue tellus mollis. Suspendisse eu ultrices ipsum. Quisque ut tincidunt ex. Curabitur semper accumsan condimentum.

In pharetra nisi turpis, scelerisque tincidunt ex imperdiet eget.`,
    created: moment().subtract(1, 'month'),
    tagged: [
      {
        id: '2',
        name: 'Janet Paul'
      }
    ],
    user: {
      id: '1',
      name: 'Ali Zahid'
    }
  },
  {
    body: `Sed auctor tortor in ipsum finibus, in gravida turpis aliquet. Integer id odio turpis. Duis venenatis lectus ut mollis blandit.

Sed vestibulum pharetra elementum. Pellentesque at sollicitudin lectus. Nulla finibus egestas lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Vestibulum blandit diam sollicitudin, commodo dui non, accumsan sapien. Proin viverra sagittis convallis. Fusce id risus convallis, placerat augue at, laoreet felis.`,
    created: moment().subtract(24, 'minutes'),
    tagged: [
      {
        id: '1',
        name: 'Ali Zahid'
      }
    ],
    user: {
      id: '2',
      name: 'Janet Paul'
    }
  },
  {
    attachments: [
      {
        caption:
          'Sed tempor placerat tortor ac maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin hendrerit, massa ac egestas pharetra, odio lorem pulvinar eros, nec commodo arcu nunc quis lectus.',
        type: 'image',
        uri:
          'https://images.unsplash.com/photo-1553531384-b5837c479d87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      }
    ],
    body: `Sed consequat, eros sit amet scelerisque eleifend, diam risus consectetur est, id rutrum nisi velit sit amet enim. Mauris purus tellus, mattis ac diam ut, tincidunt rutrum est.

Curabitur elementum dictum erat, vel posuere risus porta id. Nullam elementum, nunc eget convallis convallis, odio nisi aliquet leo, quis lobortis nulla est vitae mi. Duis vestibulum sapien eu risus scelerisque, sed consectetur lorem cursus.

**Maecenas mi nisl, tincidunt eu porta eu**

Pellentesque posuere ullamcorper enim at suscipit. Maecenas mi nisl, tincidunt eu porta eu, gravida sit amet purus. Nulla quis urna sed quam varius tincidunt. Nullam congue, metus id volutpat aliquet, risus diam vulputate tellus, vitae condimentum ipsum metus ut metus. Donec viverra leo in velit porttitor feugiat at vel sapien.

Nulla ultrices eros a commodo varius. Sed condimentum nunc sed laoreet commodo. Phasellus nec consequat augue. Praesent sit amet tortor vel augue aliquet mattis. Quisque fermentum metus lectus, id commodo sapien mattis porta.`,
    created: moment().subtract(45, 'minutes'),
    user: {
      id: '3',
      name: 'Danyal Zahid'
    }
  },
  {
    body: `Mauris quis bibendum elit. Nulla facilisi. Mauris auctor justo et lacus dictum mattis.

# Curabitur risus magna, ullamcorper in neque quis, aliquam sodales nisl.

Nam suscipit non tellus sit amet rutrum. Phasellus et sollicitudin mauris, a dictum nunc. Pellentesque eu lectus luctus, porttitor nisl eu, scelerisque lorem.`,
    created: moment().subtract(2, 'hours'),
    tagged: [
      {
        id: '1',
        name: 'Ali Zahid'
      },
      {
        id: '2',
        name: 'Janet Paul'
      }
    ],
    user: {
      id: '4',
      name: 'Sara Zahid'
    }
  },
  {
    attachments: [
      {
        caption: 'Ali Zahid',
        type: 'link',
        uri: 'https://designplox.com'
      }
    ],
    body: `Fusce pretium metus id nisi placerat malesuada. Proin accumsan ullamcorper sem. Mauris ultricies mauris sit amet ex dictum, sed egestas urna laoreet.

Ut tristique lorem dui, non posuere est lacinia vestibulum. Nunc pellentesque ligula sed vehicula commodo. Proin commodo blandit tortor, id gravida dui facilisis quis.

Nulla cursus vitae risus et dictum. Sed vel nulla risus. Sed nec iaculis risus, sit amet scelerisque metus. Mauris vel diam lacinia, maximus mi at, sagittis ante. Vivamus id odio magna. Aliquam urna orci, accumsan a tincidunt a, hendrerit vel tortor.

Nullam tempor magna ex, vel suscipit tellus rhoncus sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    created: moment().subtract(4, 'hours'),
    user: {
      id: '1',
      name: 'Ali Zahid'
    }
  }
]

export default fixtures
