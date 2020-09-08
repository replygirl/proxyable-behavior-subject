# `ProxyableBehaviorSubject`

A `BehaviorSubject` that returns a `Proxy`. All the reactivity, without having to call `next`!

_Note: I literally haven't tested this_

## Installation

```bash
yarn add @replygirl/proxyable-behavior-subject
```

## Usage

```ts
import ProxyableBehaviorSubject from '@replygirl/proxyable-behavior-subject'

const foo = new ProxyableBehaviorSubject({ bar: true })
const f = foo.proxy
console.info(f.bar, foo.value.bar) // true, true

// set with the proxy and the value will stay in sync
f.bar = true
console.info(f.bar, foo.value.bar) // true, true

// call next as usual and the proxy will stay in sync
foo.next({ bar: false })
console.info(f.bar, foo.value.bar) // false, false

// use the p alias to skip assignment
foo.p.bar = true
console.info(foo.p.bar, foo.value.bar) // true, true
```

## License

[ISC (c) 2020 replygirl](https://github.com/replygirl/proxyable-behavior-subject/blob/main/LICENSE.md)
