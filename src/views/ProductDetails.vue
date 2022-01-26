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
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Made At</th>
                  <th scope="col">About</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in items" :key="index">
                  <td>{{item.itemName}}</td>
                  <td>{{item.quantity}}</td>
                  <td>{{item.date}}</td>
                  <td>{{item.details}}</td>
                </tr>
                <tr>
                  <th scope="row">Saiful</th>
                  <td>1200</td>
                  <td>12-3-2020</td>
                  <td>Lorem ipsum, dolor sit amet consectetur</td>
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
    items(){
      return this.$store.getters.getItemDetails
    }
  }

}
</script>

<style>

</style>