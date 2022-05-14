<template>
  <div class="main">
    <div v-show="getVisibleStatus">
      <create-employee-form></create-employee-form>
      <button class="btn btn-warning" @click="addEmployee">Скрити</button>
    </div>
    <button class="btn btn-primary" @click="addEmployee" v-show="!getVisibleStatus">Додати співробітника</button>
  </div>
  <div>
    <employee-list></employee-list>
  </div>
</template>

<style>
.main {
  max-width: 1170px;
  margin: 10px auto 0 auto;
}
</style>
<script>
import createEmployeeForm from "@/components/CreateEmployeeForm";
import EmployeeList from "@/components/EmployeeList";
import {mapGetters} from 'vuex'


export default {
  components: {
    EmployeeList,
    createEmployeeForm,
  },
  computed: mapGetters(['getVisibleStatus']),
  methods: {
    addEmployee() {
      this.$store.commit('changeVisibleForm')
    }
  }
}
</script>