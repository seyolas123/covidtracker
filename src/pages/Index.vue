<template>
  <q-page class="bg-white">
     <q-spinner-orbit style="font-size:50px;" class="absolute-center" v-if="loading" color="blue" />
   
    <div v-for="(records) in cases" :key="records.index"
    class="q-gutter-xs">

    <q-card class="col bg-brown-5 text-white ">
      <q-card-section class="q-pb-none">
        <div class="text-h6-lg">Samples Tested</div>
      </q-card-section>
      <q-card-section>
          
          <div class="text-h5">
           {{ records.totalSamplesTested }}
          
           
          </div>
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

    <q-card class="col bg-primary text-white ">
      <q-card-section class="q-pb-none">
        <div class="text-h6-lg">Total Number of Confirmed Cases</div>
      </q-card-section>

      <q-card-section>
        
          <div class="text-h5">
           {{ records.totalConfirmedCases }}
          </div>
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

    <q-card class="bg-warning black">
      <q-card-section class="q-pb-none">
        <div class="text-h6-lg">Total Number of Active Cases</div>
      </q-card-section>

      <q-card-section>
       
          <div class="text-h5">
           {{ records.totalActiveCases }}
          </div>
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

    <q-card class="bg-positive text-white">
      <q-card-section class="q-pb-none">
        <div class="text-h6-lg">Total Number of Discharged Cases</div>
      </q-card-section>

      <q-card-section>
        
          <div class="text-h6">
           {{ records.discharged }}
          </div>
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

    <q-card class="bg-negative text-white ">
      <q-card-section class="q-pb-none">
        <div class="text-h6">Death</div>
      </q-card-section>

      <q-card-section>
        
          <div class="text-h6">
           {{ records.totalSamplesTested }}
          </div>
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
  </q-page>
</template>

<script>
import axios from 'axios'
import { axiosInstance } from 'boot/axios'

export default {
  name: 'PageIndex',
  data() {
    return {
      cases: [],
      slide: 'style',
      loading:true,
      states: [],
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    
    getByStates () {
                this.$axios.get('/api')
                .then((resp) => {
                  this.states = resp.data
                })
                .catch((err) => {
                  this.$q.notify({
                    color: 'negative',
                    position: 'top',
                    message: 'Loading failed',
                    icon: 'report_problem'
                  })
                })
              },

  async loadData () {
    await axiosInstance.get('/api')
      .then((response) => {
        this.cases = response.data
        //this.cases.state = resonse.data
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

