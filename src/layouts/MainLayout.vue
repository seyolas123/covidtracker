<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
         
      </q-toolbar>

      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">
           Epidermic
        </div>
        
        <div class="text-subtitle1">
          {{ todayDate }}
        </div>
      </div>
     <q-img class="header-image absolute-top" height="192px" src="../assets/mountain.jpg" />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
            to="/"
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Epidermic App
              </q-item-section>
            </q-item>

            <q-item 
            to="/country"
            exact
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                Affected States
              </q-item-section>
            </q-item>
            <separator/>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Olawale Seyi</div>
            <div>@elipath</div>
          </div>
        </q-img>
      </q-drawer>


    <q-page-container>
      <keep-alive>
       <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>

  import { date } from 'quasar'
export default {

  name: "MainLayout",
  data () {
    return {
      leftDrawerOpen: false,
       
    }
  },

  computed: {
    todayDate() {
      let timeStamp = Date.now()
       return  date.formatDate(timeStamp, 'hh:mm A dddd Do MMM YYYY' )
    }
  },

  methods: {
    submitForm() {
      this.formData.push({
        title: this.newTask.title,
        descr: this.newTask.descr
      })
    }
  }
}
</script>

<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%);
  }
</style>
