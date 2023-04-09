import moment from 'moment';

const m = moment();

console.log(m.toString());

// Getting units
console.log(m.minutes());
console.log(m.hours());
console.log(m.week());
console.log(m.get('quarter'));
console.log(m.quarter());

// Setting
m.minutes(52)
m.set('day', )
console.log(m)

const differentMoment = moment('2022-12-05')

console.log(moment.min(m, differentMoment).toString())

const m1 = moment().add(58, 'day');

console.log(moment.duration(3, 'minutes').subtract(1, 'second').add(3, 'minutes').as('milliseconds'))

console.log(m1.calendar())