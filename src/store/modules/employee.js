export default {
    getters: {
        allEmployees(state) {
            return state.employees
        },

        getVisibleStatus(state) {
            return state.createFormVisible;
        }
    },
    state: {
        employees: [],
        createFormVisible: false
    },
    mutations: {
        addEmployee(state, employee) {
            state.employees.push(employee);
        },

        changeVisibleForm(state) {
            state.createFormVisible = state.createFormVisible !== true;
        }
    },
    actions: {}
}