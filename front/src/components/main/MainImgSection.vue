<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img
        :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="@/assets/main/h6.png"
        position="top"
      >
        <v-theme-provider dark>
          <v-container fluid class="fill-height">
            <!-- fill-height -->
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <!-- <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-light"
                  style="color:#333333"
                >
                  WELCOME TO
                </span>  
                <br>
                
                -->
                <span
                  class="font-weight-black cafep"
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'f-size80' : 'f-size130',
                  ]"
                >
                  <span class="h-bold1">농부네</span>
                  <span class="f-green h-bold2">텃밭</span>
                </span>
              </v-col>
            </v-row>
            <v-row></v-row>
            <v-row>
              <v-btn
                class="align-self-end mx-auto"
                fab
                color="#80AA6B"
                @click="$vuetify.goTo('#about-me')"
              >
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>


<script>
export default {
  name: "MainImgSection",
};
</script>

<style scoped>
.f-size130 {
  font-size: 130px;
}

.f-size80 {
  font-size: 75px;
}

.nanum {
  font-family: "Nanum Pen Script", cursive;
}

.f-green {
  color: #93c130;
}

.nbp {
  font-family: NanumBarunpen;
}

.cafep {
  font-family: "Cafe24Oneprettynight";
}
.h-bold1 {
  text-shadow: -1px 0 #fff, 0 1px#fff, 1px 0 #fff, 0 -1px #fff;
}

.h-bold2 {
  text-shadow: -1px 0 #93c130, 0 1px#93c130, 1px 0 #93c130, 0 -1px #93c130;
}
</style>  