// if exports is an array, it will be the same like loading multiple files...
//module.exports = require('cqrs-domain').defineEvent({
module.exports = require('../../../../../../../../').defineEvent({
  name: 'enteredNewPerson',
  version: 1
}, function (data, aggregate) {
  // console.log('NNNNEEEEEWWWWWWW');
  aggregate.get('persons').push(data);
});
