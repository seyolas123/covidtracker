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
      <q-card-section class="bg-grey">
          
       <h6 class="text-center text-dark ">
         You can change state below
       </h6>
        
      </q-card-section>

      <q-inner-loading v-if='loading'>
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
    </div>
      
   
    <div class="absolute-bottom custom-select" style="width:100%;">
      
      <select v-model="state_num">
        <option value="0">Lagos</option>
        <option value="1">FCT</option>
        <option value="2">Kaduna</option>
        <option value="3">Plateau</option>
        <option value="4">Rivers</option>
        <option value="5">Oyo</option>
        <option value="6">Edo</option>
        <option value="7">Ogun</option>
        <option value="8">Kano</option>
        <option value="9">Ondo</option>
        <option value="10">Kwara</option>
        <option value="11">Delta</option>
        <option value="12">Osun</option>
        <option value="13">Enugu</option>
        <option value="14">Nasarawa</option>
        <option value="15">Katsina</option>
        <option value="16">Gombe</option>
        <option value="17">Ebonyi</option>
        <option value="18">AkwaIbom</option>
        <option value="19">Anambra</option>
        <option value="20">Abia</option>
        <option value="21">Imo</option>
        <option value="22">Bauchi</option>
        <option value="23">Benue</option>
        <option value="24">Borno</option>
        <option value="25">Adamawa</option>
        <option value="26">Taraba</option>
        <option value="27">Niger</option>
        <option value="28">Bayelsa</option>
        <option value="29">Ekiti</option>
        <option value="30">Sokoto</option>
        <option value="31">Jigawa</option>
        <option value="32">Yobe</option>
        <option value="33">Kebbi</option>
        <option value="34">CrossRiver</option>
        <option value="35">Zamfara</option>
        <option value="36">Kogi</option>
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
  height: 60px;
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

