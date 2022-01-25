<template>
  <div class="home">
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
                  <th scope="col">SI</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><router-link class="text-white" to="/EditUserForm">Food</router-link></td>
                  <td><router-link class="btn btn-success" to="/ProductDetails">Report</router-link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td><router-link class="text-white" to="/EditUserForm">Contact</router-link></td>
                  <td><router-link class="btn btn-success" to="/ProductDetails">Report</router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped>
.navlink{
  text-decoration: none;
}
</style>
