<template>
  <Form v-slot="{ errors }" @submit="addEmployee">
    <div class="main d-flex flex-column align-items-center">
      <div class="input-group w-50 mt-2">
        <Field :rules="isRequired" class="form-control" v-model="employee.name" placeholder="Прізвище Ім'я"
               name="name"/>
      </div>
      <span>{{ errors.name }}</span>
      <div class="input-group w-50 mt-2">
        <Field :rules="checkTel" class="form-control" v-model="employee.tel" placeholder="Телефон" name="tel"/>
      </div>
      <span>{{ errors.tel }}</span>
      <div class="input-group w-50 mt-2">
        <Field :rules="isRequired" class="form-control" v-model="employee.department" placeholder="Відділ"
               name="department"/>
      </div>
      <span>{{ errors.department }}</span>
      <button type="submit" class="btn btn-primary mt-2">Додати</button>
    </div>
  </Form>
</template>

<script>
import {Field, Form} from 'vee-validate';

export default {
  name: "CreateEmployeeForm",
  components: {
    Field,
    Form,
  },
  data() {
    return {
      employee: {
        name: '',
        tel: '',
        department: ''
      }
    }
  },
  methods: {
    isRequired(value) {
      return value ? true : 'This field is required';
    },
    checkTel(value) {
      if (!value) {
        return 'This field is required';
      }
      const regex = /^([+]{0,1}380)\d{9}$/;

      if (!regex.test(value)) {
        return 'Номер телефону повинен починатися з +380'
      }
      return true;
    },
    addEmployee() {
      this.employee.id = Date.now();
      this.$store.commit('addEmployee', this.employee)
      this.employee = {
        name: '',
        tel: '',
        department: ''
      }
    },
  }
}
</script>

<style scoped>
.main {
  max-width: 1170px;
  margin: 0 auto;
}
</style>