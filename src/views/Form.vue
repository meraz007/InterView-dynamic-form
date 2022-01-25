<template>
  <div class="about">
    <div class="container">
      <div class="row my-5 justify-content-center">
        <div class="col-md-10">
          <div class="row">
             <div class="col-md-4">
          <form>
            <label class="form-label">Form Name:</label>
            <input class="form-control" type="text">
            <label class="form-label">Text</label>
            <input class="form-control" type="text">
            <label class="form-label">Number</label>
            <input class="form-control" type="text">
            <label class="form-label">Date</label>
            <input class="form-control" type="text">
            <label class="form-label">Text Area</label>
            <input class="form-control" type="text">
            <button class="btn btn-secondary my-3" type="submit">Submit</button>
          </form>
        </div>
        <div class="col-md-4">
          <div class="style">
          <button class="btn btn-secondary mx-3">Text</button>
          <button class="btn btn-secondary mx-3">Number</button>
          <button class="btn btn-secondary mx-3 my-3">Date</button>
          <button class="btn btn-secondary mx-3">Textarea</button>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.style{
  width: 270px;
  height: 150px;
  border: 1px solid rgb(32, 16, 16);
  padding: 20px;
}
</style>
