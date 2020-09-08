import { BehaviorSubject } from 'rxjs'

export class ProxyableBehaviorSubject<T> extends BehaviorSubject<T> {
  public get proxy(): T {
    return new Proxy<any>(this.value, {
      get: (_x, k) => this.value[k],
      set: (_x, k, v) => {
        this.next({ ...this.value as any, [k]: v })
        return true
      }
    })
  }
}
