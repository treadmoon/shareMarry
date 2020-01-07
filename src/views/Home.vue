<template>
  <div class="home"></div>
</template>

<script>
import { getTicket } from "@/server/index";

export default {
  name: "home",
  created() {
    console.log('this==>', this.$wx);
    
    getTicket();
  }
};
</script>
