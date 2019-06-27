import { createStore, createTypedHooks } from 'easy-peasy'

import model, { StoreModel } from './models'

const { useStoreActions, useStoreState, useDispatch } = createTypedHooks<
  StoreModel
>()

const store = createStore(model)

export { store, useStoreActions, useDispatch, useStoreState }
