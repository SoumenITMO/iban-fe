import { BootstrapVue } from 'bootstrap-vue'
import axios from "axios";
import Vue from 'vue';

Vue.use(BootstrapVue)

export default {
    name: 'Home',
    data() {
        return {
            ibanList: [{
                id: String,
                iban: String,
                status: String
            }],
            apiResponse: String,
            inputValue: null,
            errorMessage: null,
            fileData: null
        }
    },
    methods: {
        invalidIBANs() {
            this.reset();
            this.getIbanList('INVALID');
        },
        validIBANs() {
            this.getIbanList('VALID');
            this.reset();
        },
        allIBANs() {
            this.getIbanList(null);
            this.reset();
        },
        addIBAN() {
            axios
                .post('iban/add', { iban: this.inputValue })
                .then(response => { this.ibanList = response.data  })
                .catch((error) => { this.errorMessage = error.response.data.apiResponse })
                .finally( this.getIbanList )
        },
        uploadFile() {
            this.reset()
            this.fileData = this.$refs.file.files[0];
        },
        submitFile() {
            if(this.fileData) {
                const formData = new FormData();
                formData.append('file', this.fileData);
                const headers = { 'Content-Type': 'multipart/form-data' };
                axios.post('iban/uploadibanfile', formData, { headers })
                    .catch((error) => { this.errorMessage = error.response.data.apiResponse })
                    .finally( this.getIbanList )
            } else {
                this.errorMessage = "Please select a file.";
            }
        },
        reset() {
            this.errorMessage = null;
        },
        getIbanList(filter) {
            axios
                .get(filter == null ? 'iban/list' : 'iban/list?filter_type=' + filter)
                .then(response => { this.ibanList = response.data  })
                .catch((error) => { this.errorMessage = error.response.data });
        }
    },
    mounted() {
        this.getIbanList();
    }
}
