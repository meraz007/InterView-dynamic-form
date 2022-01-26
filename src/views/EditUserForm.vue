<template>
  <div class="container">
      <div class="row justify-content-center my-5">
          <div class="col-md-10">
              <div class="card">
                <div class="card-header">
                    Food
                </div>
                <div class="card-body">
                   <form @submit.prevent="submitProductDetails">
                       <div v-for="(item,index) in items" :key="index">
                        <label class="form-label">{{item.text}}</label>
                        <input class="form-control" type="text" v-model="prductInput.itemName">
                        <label class="form-label">{{item.number}}</label>
                        <input class="form-control" type="number" v-model="prductInput.quantity">
                        <label class="form-label">{{item.date}}</label>
                        <input class="form-control" type="date" v-model="prductInput.date">
                        <label class="form-label">{{item.textArea}}</label>
                        <textarea class="form-control" cols="30" rows="5" v-model="prductInput.details"></textarea>
                       </div>
                        <button class="btn btn-secondary my-3" type="submit">Submit</button>
                    </form>
                </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'EditUserForm',
    data(){
        return{
            prductInput:{
                itemName:'',
                quantity:'',
                date:'',
                details:''
            }
        }
    },
    computed:{
    items(){
      return this.$store.getters.getItem
    }
  },
  methods:{
      submitProductDetails(){
        this.$store.commit('itemDetailsAdd',this.prductInput)
        this.prductInput=''
      }
  }

}
</script>

<style>

</style>