# `ProxiedBehaviorSubject`

A `BehaviorSubject` that returns a `Proxy`. All the reactivity, without having to call `next`!

_Note: I literally haven't tested this_

## Installation

```bash
yarn add @replygirl/change-case-object
```

## Usage

```ts
import ProxiedBehaviorSubject from '@replygirl/proxied-behavior-subject'

const foo = new ProxiedBehaviorSubject({
  bar: true
})

const f = foo.proxy

console.info(f.bar, foo.value.bar) // true, true

foo.next({ bar: false })

console.info(f.bar, foo.value.bar) // false, false

f.bar = true

console.info(f.bar, foo.value.bar) // true, true
```

## License

[ISC (c) 2020 replygirl](https://github.com/replygirl/change-case-object/blob/main/LICENSE.md)
