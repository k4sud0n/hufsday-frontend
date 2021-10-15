export default function ({ $axios }, inject) {
  const client = $axios.create()
  inject('client', client)
}
