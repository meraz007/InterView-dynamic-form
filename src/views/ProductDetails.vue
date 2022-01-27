<template>
  <div class="contaner">
      <div class="row justify-content-center py-5">
        <div class="col-md-8">
          <div class="card">
          <div class="card-header">
            Form List
          </div>
          <div class="card-body">
            <div class="d-flex ms-auto mb-3">
              <label for="">Search:</label>
              <input type="search" class="rounded" name="" id="">
            </div>
            <table class="table table-dark table-striped">
              <thead>
                <tr v-for="(item1,index) in items" :key="index">
                  <th scope="col">{{item1.text}}</th>
                  <th scope="col">{{item1.number}}</th>
                  <th scope="col">{{item1.date}}</th>
                  <th scope="col">{{item1.textArea}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in itemsDetails" :key="index">
                  <td>{{item.itemName}}</td>
                  <td>{{item.quantity}}</td>
                  <td>{{item.date}}</td>
                  <td>{{item.details}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

  computed:{
    itemsDetails(){
      return this.$store.getters.getItemDetails
    },
    items(){
      return this.$store.getters.getItem
    },
  }

}
</script>

<style>

</style>