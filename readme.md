# check-number
`Check if something is a number`

## Install
```
$ npm install --save check-number
```

## Usage
```
const checkNumber = require('check-number');

checkNumber(1);
//=> true

checkNumber('0');
//=> false

checkNumber(-1);
//=> true

checkNumber('a');
//=> false
```

## License
MIT © [Yoshihiro Asada](http://github.com/yoshihiro1992)
