import { getCurrentScope, onScopeDispose } from 'vue-demi'
import type { Fn } from '../utils'

/**
 * Call onScopeDispose() if it's inside an effect scope lifecycle, if not, do nothing
 *
 * @param fn
 */
export function tryOnScopeDispose(fn: Fn) {
  // note: 获取当前作用域
  // note: vue-demi 兼容vue2 vue3 getCurrentScope onScopeDispose 都是vue3的api
  // note: https://cn.vuejs.org/api/reactivity-advanced#onscopedispose
  if (getCurrentScope()) {
    onScopeDispose(fn)
    return true
  }
  return false
}
