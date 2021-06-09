<template>
  <q-page class="bg-white">
   
     <q-card style="margin-top: -42px;" v-for="(records) in states" :key="records.index" class="bg-grey-3 text-blue my-card">
      <h4 class="relative-top q-mb-none">{{ records.states[0].state }}</h4>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="local_bar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>No. of Deaths</q-item-label>
            <q-item-label>{{ records.states[0].death }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="local_gas_station" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Gas Station</q-item-label>
            <q-item-label caption>Fill your gas tank.</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="local_movies" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Cinema XYZ</q-item-label>
            <q-item-label caption>Watch a movie.</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios'
import { axiosInstance } from 'boot/axios'

export default {
  name: 'PageIndex',
  data() {
    return {
      slide: 'style',
      loading: true,
      states: [],
      counter: 0,
    }
  },
  mounted () {
    this.loadData(),
    this.incrementCounter()
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

