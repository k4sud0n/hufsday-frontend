export default function ({ store, redirect }) {
  if (store.$auth.user.authorized === 0) {
    return redirect('/authorization')
  }
}
