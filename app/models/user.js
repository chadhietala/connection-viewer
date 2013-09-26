var User = DS.Model.extend({
  firstName: DS.attr( 'string' ),
  lastName: DS.attr( 'string' ),
  fullName: function () {
    return this.get( 'firstName' ) + ' ' + this.get( 'lastName' );
  }.property( 'fullName', 'lastName' ),
  image: DS.attr( 'string' ),
  description: DS.attr( 'string' ),
  addConnection: DS.attr( 'boolean' )
});

User.FIXTURES = [
  {
    id: 1,
    firstName: 'Prachi',
    lastName: 'Gupta',
    image: 'http://m3.c.lnkd.licdn.com/mpr/mpr/shrink_50_50/p/3/005/00f/066/1d73739.jpg',
    description: 'Engineering Manager & incubator co-founder at LinkedIn',
    addConnection: true
  },
  {
    id: 2,
    firstName: 'Dennis',
    lastName: 'Hengeveld',
    image: 'http://m4.c.lnkd.licdn.com/mpr/mpr/shrink_50_50/p/6/000/1ab/1de/04fa76c.jpg',
    description: 'Manager, International Web Development',
    addConnection: true
  },
  {
    id: 3,
    firstName: 'Xin',
    lastName: 'Fu',
    image: 'http://s.c.lnkd.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_60x60_v1.png',
    description: 'Principal Data Scientist Lead at LinkedIn',
    addConnection: true
  },
  {
    id: 4,
    firstName: 'Peter',
    lastName: 'Rusev',
    image: 'http://m3.c.lnkd.licdn.com/mpr/mpr/shrink_50_50/p/8/000/25b/3be/286306d.jpg',
    description: 'Product Manager at LinkedIn',
    addConnection: true
  },
  {
    id: 5,
    firstName: 'Steve',
    lastName: 'McClung',
    image: 'http://m3.c.lnkd.licdn.com/mpr/mpr/shrink_50_50/p/3/000/064/3d6/10ae629.jpg',
    description: 'Web Developer @ LinkedIn',
    addConnection: true
  },
  {
    id: 6,
    firstName: 'Caryn',
    lastName: 'Cardello',
    image: 'http://m4.c.lnkd.licdn.com/mpr/mpr/shrink_50_50/p/3/000/0c2/3b4/313c8df.jpg',
    description: 'Content Editor at LinkedIn',
    addConnection: true
  },
  {
    id: 7,
    firstName: 'Jim',
    lastName: 'Dumont',
    image: 'http://s.c.lnkd.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_60x60_v1.png',
    description: 'Program Manager at LinkedIn',
    addConnection: true
  },
  {
    id: 8,
    firstName: 'Adam',
    lastName: 'Cataldo',
    image: 'http://m3.c.lnkd.licdn.com/mpr/mpr/shrink_50_50/p/3/000/00d/141/26e1546.jpg',
    description: 'Hacker and Quant',
    addConnection: true
  }
];

export default User;