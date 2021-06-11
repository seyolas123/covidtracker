<template>
  <q-page class="bg-grey">
    
    <div v-for="(records) in states" :key="records.index">
        <q-card class="col bg-brown-5 text-white ">
          <div>
            
          </div>
      <q-card-section class="bg-dark text-center q-pb-3">
        <div class="text-h4-lg">
          Affected cases in {{ records.states[state_num].state }} state
        </div>
      </q-card-section>
      <q-card-section class="bg-warning q-pb-3">
        <div class="text-h5">
          Confirmed Cases: {{ records.states[state_num].confirmedCases }}
        </div>
      </q-card-section>
      <q-card-section class="bg-primary q-pb-3">
        <div class="text-h5">
          Cases on Admission: {{ records.states[state_num].casesOnAdmission }}
        </div>
      </q-card-section>
      <q-card-section class="bg-positive text-white q-pb-3">
        <div class="text-h5">
          Discharged: {{ records.states[state_num].discharged }}
        </div>
      </q-card-section>
      <q-card-section class="bg-negative text-white q-pb-3">
        <div class="text-h5">
          Deaths: {{ records.states[state_num].death }}
        </div>
      </q-card-section>
      <q-card-section>
          
        <q-img
            class="absolute-right vertical-middle" 
            style="margin-top: -10px; color:white; height: 50px; max-width: 50px"
            src="../assets/cvd_logo.png">
          </q-img>
        
      </q-card-section>

      <q-inner-loading v-if='loading'>
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
    </div>

   
    <div class=" absolute-bottom custom-select" style="width:100%;">
  <select v-model="state_num">
    <option value="0">Lagos</option>
    <option value="1">FCT</option>
    <option value="2">BMW</option>
    <option value="3">Citroen</option>
    <option value="4">Ford</option>
    <option value="5">Honda</option>
    <option value="6">Jaguar</option>
    <option value="7">Land Rover</option>
    <option value="8">Mercedes</option>
    <option value="9">Mini</option>
    <option value="10">Nissan</option>
    <option value="11">Toyota</option>
    <option value="12">Volvo</option>
  </select>
</div>
   

  </q-page>
</template>

<script>
import axios from 'axios'
import { axiosInstance } from 'boot/axios'

export default {
  name: 'PageIndex',
  data() {
    return {
       options: [
        'Lagos', 'FCT'
      ],
      state_num: 0,
      slide: 'style',
      loading: true,
      states: [],
      counter: 0,
    }
  },
  mounted () {
    this.loadData()
    
  },
  methods: {
  incrementState() {
    this.state_num++;
  },
  decrementState() {
    this.state_num--;
  },
  async loadData () {
    await axiosInstance.get('/api')
      .then((response) => {
        this.states = response.data
       
         })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
}
  }
}

</script>
<style scoped>
 .custom-select {
  width: 100%;
  font-family: Arial;
}

.custom-select select {
  display: block; /*hide original SELECT element: */
  width: 100%;
  height: 50px;
}

.select-selected {
  background-color: DodgerBlue;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  width: 100%;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 99;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

