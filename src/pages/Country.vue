<template>
  <q-page class="bg-white">
    <div v-for="(records) in states" :key="records.index">
        <q-card class="col bg-brown-5 text-white ">
      <q-card-section class="q-pb-none">
        <div class="text-h6-lg">
          {{ records.states[0].state }}
        </div>
      </q-card-section>
      <q-card-section>
          
          <div class="text-h5">
           Deaths: {{ records.states[0].state }}
          </div>
          <hr>
          <div class="text-h5">
           Deaths: {{ records.states[0].state }}
          </div>
          <hr>
          <div class="text-h5">
           Deaths: {{ records.states[0].state }}
          </div>
          <hr>
          <div class="text-h5">
           Deaths: {{ records.states[0].state }}
          </div>
          <hr>
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
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'State',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { deaths: 'calories', align: 'center', label: 'Deaths', field: 'calories', sortable: true },
        { name: 'fat', label: 'Active Cases', field: 'fat', sortable: true },
       
      ],

      
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
  incrementCounter() {
    this.counter++;
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

