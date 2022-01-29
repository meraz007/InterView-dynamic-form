<template>
  <div class="container">
      <div class="row justify-content-center my-5">
          <div class="col-md-10">
              <div class="card">
                <div class="card-header">
                    {{item.FormName}}
                </div>
                <div class="card-body">
                   <form @submit.prevent="submitProductDetails">
                       <div>
                        <div v-show="item.text !=''">
                        <label class="form-label">{{item.text}}</label>
                        <input class="form-control" type="text" v-model="prductInput.itemName">
                        </div>
                        <div v-show="item.number !=''">
                        <label class="form-label">{{item.number}}</label>
                        <input class="form-control" type="number" v-model="prductInput.quantity">
                        </div>
                        <div v-show="item.date !=''">
                        <label class="form-label">{{item.date}}</label>
                        <input class="form-control" type="date" v-model="prductInput.date">
                        </div>
                        <div v-show="item.textArea !=''">
                        <label class="form-label">{{item.textArea}}</label>
                        <textarea class="form-control" cols="30" rows="5" v-model="prductInput.details"></textarea>
                        </div>
                       </div>
                        <button  @click="alert" class="btn btn-secondary my-3" type="submit">Submit</button>
                    </form>
                    <div v-show="alertShow" class="alert alert-success" role="alert">
                        Item Added
                    </div>
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
            alertShow:false,
            prductInput:{
                itemName:'',
                quantity:'',
                date:'',
                details:''
            }
        }
    },
    computed:{
    item(){
      return this.$store.getters.getItem[this.$route.params.id]
    },
  },
  methods:{
      submitProductDetails(){
        this.$store.commit('itemDetailsAdd',this.prductInput)
        this.prductInput=''
      },
    alert(){
        this.alertShow=true
    }
  }

}
</script>

<style>

</style>