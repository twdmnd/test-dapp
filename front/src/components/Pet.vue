<template>
  <div class="pet">
    <label>Age: </label>{{petData.age}}<br />
    <label>Breed: </label>{{petData.breed}}<br />
    <label>Id: </label>{{petData.id}}<br />
    <label>Location: </label>{{petData.location}}<br />
    <label>Name: </label>{{petData.name}}<br />
    <br />
    <button class="btn btn-default btn-adopt" type="button" v-on:click="adopt(0)">Adopt</button>
  </div>
</template>

<script>
import AdoptionArtifact from '../../../build/contracts/Adoption.json'
import contract from 'truffle-contract'

export default {
  name: 'Pet',
  props: ['petData', 'adoptionContract'],
  data: function () {
    this.init()
    return {
      instance: null,
      adopters: null
    }
  },
  methods: {
    init: function () {
      const self = this
      return new Promise(function (resolve, reject) {
        let adoptionContract = contract(AdoptionArtifact)
        adoptionContract.setProvider(window.web3.currentProvider)
        adoptionContract.deployed().then(instance => {
          self.instance = instance
          return instance.getAdopters.call()
        })
          .then(adopters => {
            console.log('toto')
            console.log(adopters)
          }, err => {
            console.log('tata')
            console.log(err)
          }).catch(error => {
            console.log('error')
            console.log(error)
          })
      })
    },

    adopt: function (petId) {
      const self = this
      window.web3.eth.getAccounts(function (error, accounts) {
        console.log(accounts)
        if (error) {
          console.log(error)
        }
        self.instance.adopt(petId, {from: accounts[0]}).then(result => {
          self.init()
        })
      })
    }
  }
}
</script>

<style scoped>
  .pet {
    float:left;
    width: 250px;
    border: 1px solid #000000;
  }
</style>
