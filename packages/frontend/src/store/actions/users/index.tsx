import { USER_LOGIN, USER_RESET } from '../'

export const userLogin = user => ({
  type: USER_LOGIN,
  payload: user
})

export const userReset = () => {
  return {
    type: USER_RESET
  }
}
