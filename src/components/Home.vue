<template>
  <div>
    <div class="filter">
      <label> FILTERS : </label>
      <input type="button" @click="invalidIBANs" id="invalidIBANbtn" value="Show Invalid IBANs">
      <input type="button" @click="validIBANs" id="validIBANbtn" value="Show Valid IBANs">
      <input type="button" @click="allIBANs" id="allIBANbtn" value="Show All IBANs">
    </div>

    <div class="data-file-upload">
      <input type="file" @change="uploadFile" ref="file">
      <button @click="submitFile">Upload!</button>
    </div>

    <span class="err-msg">{{ errorMessage }}</span>
    <table>
      <thead>
      <tr>
        <th>IBAN</th>
        <th> Status </th>
      </tr>
      </thead>
      <tbody id="ibans">
      <tr v-for="ibanItem in ibanList" id="iban">
        <td>{{ ibanItem.iban }}</td>
        <td>{{ ibanItem.status }}</td>
      </tr>
      </tbody>
    </table>

    <div class="add-btn">
      <input type="text" id="country_code" name="country_code" @keydown="reset" v-model="inputValue" placeholder="EEXX XXXX XXXX XXXX">
      <input type="button" @click="addIBAN" value="Add IBAN" />
    </div>
  </div>
</template>

<script src="../assets/js/home.js"> </script>
<style>
.filter {
  position: absolute;
  left: 601px;
}

.err-msg {
  color: red;
  position: absolute;
  top: 39px;
  left: 448px;
}

.data-file-upload {
  position: absolute;
  left: 600px;
  top: 250px;
}

.add-btn {
  position: relative;
  top:30px
}

</style>
