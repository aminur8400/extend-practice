<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="12" >
        <v-card class="square" :style="{ paddingBottom: `${item.width}%` }">
          <!-- Your card content goes here -->
          <v-card-text class="text-xs-center">
            This is a square div with Vuetify!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

// Components

export default {
  name: 'Welcome',
  data: () => ({
    items: [
        { id: 1, width: 50 },
      ],
  })
};
</script>

<style scoped>
.square {
  width: 100%;
  position: relative;
}
.square::after {
  content: "";
  display: block;
}
</style>

