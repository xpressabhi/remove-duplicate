# remove-duplicate

> Returns array after removing duplicates.


## Contributors ✨

Many thanks goes to these people for helping me maintain and upgrade the project:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/xpressabhi">Abhishek Maurya</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save remove-duplicate
```

## Usage

Works with integers.


```js
import removeDuplicate from 'remove-duplicate'; // web

OR;

const removeDuplicate = require('remove-duplicate'); // server

console.log(removeDuplicate([])); //=> []
console.log(removeDuplicate([1,1,1,1,1])); //=> [1]
console.log(removeDuplicate([1,2,3,4,5])); //=> [1,2,3,4,5]

```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

### License

Copyright © 2020, [Abhishek Maurya](https://github.com/xpressabhi).
Released under the [MIT License](https://github.com/xpressabhi/is-same/blob/master/LICENSE.md).
