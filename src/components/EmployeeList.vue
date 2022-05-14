<template>
  <div class="employee-table">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">№ п/п</th>
        <th scope="col">Прізвище Ім'я</th>
        <th scope="col">Телефон</th>
        <th scope="col">Відділ</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="employee in allEmployees" :key="employee.id">
        <employee-item :employee="employee"></employee-item>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters }from 'vuex'
import EmployeeItem from "@/components/EmployeeItem";
export default {
  name: "EmployeeList",
  components: {EmployeeItem},
  computed: mapGetters(['allEmployees'])
}
</script>

<style scoped>
.employee-table {
  max-width: 1170px;
  margin: 0 auto;
}
</style>