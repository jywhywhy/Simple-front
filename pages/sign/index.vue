<script>
export default {
  fetch(context) {
    context.redirect(301, {
      name: 'sign-in',
    })
  },
}
</script>
