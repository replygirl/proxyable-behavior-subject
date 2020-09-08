# `ProxyableBehaviorsubject`

A `BehaviorSubject` that returns a `Proxy`. All the reactivity, without having to call `next`!

_Note: I literally haven't tested this_

## Installation

```bash
yarn add @replygirl/proxyable-behavior-subject
```

## Usage

```ts
import ProxyableBehaviorsubject from '@replygirl/proxyable-behavior-subject'

const foo = new ProxyableBehaviorsubject({ bar: true })
const f = foo.proxy

console.info(f.bar, foo.value.bar) // true, true

foo.next({ bar: false })

console.info(f.bar, foo.value.bar) // false, false

f.bar = true

console.info(f.bar, foo.value.bar) // true, true
```

## License

[ISC (c) 2020 replygirl](https://github.com/replygirl/proxyable-behavior-subject/blob/main/LICENSE.md)
