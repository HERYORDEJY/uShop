import moment from 'moment';

export function compareValues(key, order = 'ascending') {
  return function innerSorta(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'descending' ? comparison * -1 : comparison;
  };
}

export function compareTimes(key, order = 'ascending') {
  return function innerSorta(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (moment(varA).isAfter(varB)) {
      comparison = 1;
    } else if (moment(varA).isBefore(varB)) {
      comparison = -1;
    }
    return order === 'descending' ? comparison * -1 : comparison;
  };
}

const todos = [
  {
    category: 'study',
    id: 1,
    start_time: '12 AM',
    stop_time: '2 AM',
    title: 'Project Reserch',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, non.',
  },
  {
    category: 'home',
    id: 2,
    start_time: '3:45 AM',
    stop_time: '4:15 AM',
    title: 'Project Reserch',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, non.',
  },
  {
    category: 'office',
    id: 3,
    start_time: '4:30 AM',
    stop_time: '5 AM',
    title: 'Project Reserch',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, non.',
  },
  {
    category: 'sport',
    id: 4,
    start_time: '5 AM',
    stop_time: '7 AM',
    title: 'Morning Prayer',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, non.',
  },
  {
    category: 'club',
    id: 5,
    start_time: '8 AM',
    stop_time: '10 AM',
    title: 'Read News Media',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, non.',
  },
  {
    category: 'relaxation',
    id: 6,
    start_time: '10 AM',
    stop_time: '1 PM',
    title: 'Project Reserch',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, non.',
  },
];

let arr = [];
//For unique ID in an array
// arr = arr.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i)
//For multiple properties in an array e.g, firstname, lastname
// arr = arr.filter((v, i, a) => a.findIndex(t => t.firstname === v.firstname && t.lastname === v.lastname) === i)
//For all properties in an array
// arr = arr.filter((v, i, a) => a.findIndex(t => JSON.stringify(t) === JSON.stringify(v)) === i)
