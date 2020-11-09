export default function({ store, redirect, app }) {
  if (store.state.loginModule.userloggedin && Object.keys(store.state.loginModule.userloggedin).length) {
    return
  } else {
    redirect('/login')
  }
}