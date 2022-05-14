<template>
  <th scope="row">{{ employee.id }}</th>
  <td>{{ employee.name }}</td>
  <td>{{ employee.tel }}</td>
  <td>{{ employee.department }}</td>
</template>

<script>
export default {
  name: "EmployeeItem",
  props: {
    employee: [Object]
  }
}
</script>

<style scoped>

</style>