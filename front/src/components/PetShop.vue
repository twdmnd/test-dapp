<template>
  <div class="hello">
    <pet v-for="pet in Pets" :key="pet.id" :petData="pet"></pet>
  </div>
</template>

<script>
import Pets from '../pets.json'
import Pet from '@/components/Pet'

export default {
  name: 'PetShop',
  components: {
    Pet
  },
  data () {
    return {
      Pets
    }
  }
}
</script>

<style scoped>
</style>
