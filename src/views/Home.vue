<template>
  <div class="home"></div>
</template>

<script>
// import { getTicket } from "@/server/index";
import { getQm } from "@/server/index";

export default {
  name: "home",
  created() {
    // getTicket();
    getQm()
  }
};
</script>
