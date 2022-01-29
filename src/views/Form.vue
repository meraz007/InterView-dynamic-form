<template>
  <div class="about">
    <div class="container">
      <div class="row my-5 justify-content-center">
        <div class="col-md-10">
          <div class="row">
             <div class="col-md-4">
          <form @submit.prevent="submitForm">
            <label class="form-label">Form Name:</label>
            <input 
            class="form-control" 
            type="text"
            v-model="inputField.FormName"
            >
            <div v-show="isVisibleText">
              <label class="form-label">Text</label>
              <input 
              class="form-control" 
              type="text"
              v-model="inputField.text"
              >
            </div>
            <div v-show="isVisibleNumber">
              <label class="form-label">Number</label>
              <input 
              class="form-control" 
              type="text"
              v-model="inputField.number"
              >
            </div>
            <div v-show="isVisibleDate">
              <label class="form-label">Date</label>
              <input 
              class="form-control" 
              type="text"
              v-model="inputField.date"
              >
            </div>
            <div v-show="isVisibleTextArea">
              <label class="form-label">Text Area</label>
              <input 
              class="form-control"
               type="text"
               v-model="inputField.textArea"
               >
            </div>
            <button 
            class="btn btn-secondary my-3" 
            type="submit"
            @click="alert"
            >generate</button>
          </form>
          <div v-show="alertShow" class="alert alert-success" role="alert">
            Form Created!!Go to Home....
          </div>
        </div>
        <div class="col-md-4">
          <div class="style">
          <button class="btn btn-secondary mx-3" @click="showInputText">Text</button>
          <button class="btn btn-secondary mx-3" @click="showInputNumber">Number</button>
          <button class="btn btn-secondary mx-3 my-3" @click="showInputDate">Date</button>
          <button class="btn btn-secondary mx-3" @click="showInputTextarea">Textarea</button>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Form",
  data(){
    return{
      isVisibleText:false,
      isVisibleNumber:false,
      isVisibleDate:false,
      isVisibleTextArea:false,
      alertShow:false,
      inputField:{
        FormName:'',
        text:'',
        number:'',
        date:'',
        textArea:''
      }
    }
  },
  
  methods:{
    showInputText(){
      this.isVisibleText=true
    },
    showInputNumber(){
      this.isVisibleNumber=true
    },
    showInputDate(){
      this.isVisibleDate=true
    },
    showInputTextarea(){
      this.isVisibleTextArea=true
    },
    submitForm(){
      this.$store.commit('itemAdd',this.inputField)
      this.inputField=''
    },
    alert(){
      this.alertShow=true
    }
  }
  
}
</script>

<style scoped>
.style{
  width: 270px;
  height: 150px;
  border: 1px solid rgb(32, 16, 16);
  padding: 20px;
}
</style>
