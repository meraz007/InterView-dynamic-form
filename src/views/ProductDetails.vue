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
                  <th scope="col">{{item.text}}</th>
                  <th scope="col">{{item.number}}</th>
                  <th scope="col">{{item.date}}</th>
                  <th scope="col">{{item.textArea}}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{itemsDetails.itemName}}</td>
                  <td>{{itemsDetails.quantity}}</td>
                  <td>{{itemsDetails.date}}</td>
                  <td>{{itemsDetails.details}}</td>
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
      return this.$store.getters.getItemDetails[this.$route.params.id]
    },
    item(){
      return this.$store.getters.getItem[this.$route.params.id]
    },
  }

}
</script>

<style>

</style>