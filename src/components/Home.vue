<template>
  <div>
    <div class="filter">
      <label> FILTERS : </label>
      <input type="button" @click="invalidIBANs" value="Show Invalid IBANs">
      <input type="button" @click="validIBANs" value="Show Valid IBANs">
      <input type="button" @click="allIBANs" value="Show All IBANs">
    </div>

    <div class="data-file-upload">
      <input type="file" @change="uploadFile" ref="file">
      <button @click="submitFile">Upload!</button>
    </div>

    <span class="err-msg">{{ errorMessage }}</span>
    <b-table v-if = "ibanList.length > 1" striped :items="ibanList" class="table table-dark"></b-table>
    <div class="add-btn">
      <input type="text" id="country_code" name="country_code" @keydown="reset" v-model="inputValue" placeholder="EEXX XXXX XXXX XXXX">
      <input type="button" @click="addIBAN" value="Add IBAN" />
    </div>
  </div>
</template>

<script src="../assets/home.js"> </script>
<link href="../style/home.css" type="text/css">
