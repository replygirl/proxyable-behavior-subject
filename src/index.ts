import { BehaviorSubject } from 'rxjs'

export class ProxyableBehaviorSubject<T> extends BehaviorSubject<T> {
  private _proxy: ProxyConstructor =
    new Proxy<any>(this.value, {
      get: (_x, k) => this.value[k],
      set: (_x, k, v) => {
        this.next({ ...this.value as any, [k]: v })
        return true
      }
    })

  constructor(_value: T) {
    super(_value)
  }

  public get proxy(): ProxyConstructor { return this._proxy }
  public get p(): ProxyConstructor { return this.proxy }
}

export default ProxyableBehaviorSubject
