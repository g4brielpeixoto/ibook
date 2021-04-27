import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Books from '@/store/books'
import Auth from '@/store/auth'

// eslint-disable-next-line import/no-mutable-exports
let books: Books
// eslint-disable-next-line import/no-mutable-exports
let auth: Auth

function initializeStores(store: Store<any>): void {
  books = getModule(Books, store)
  auth = getModule(Auth, store)
}
export { initializeStores, books, auth }
