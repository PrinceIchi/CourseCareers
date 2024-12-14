<const x = 2;

try {
   console.log('try');
   throw 'this is an error'
} catch (err) {
   console.log(err);
} finally {
   console.log('finally')
}>