<template>
  <div>
    <v-container>
      <br>
      <div style="text-align: center">
        <h1>Vue Currency Text</h1>
        <br>
      </div>
      <v-row justify="center">
        <v-col cols="4">
          <v-currency-text v-model="valor" name="valor" prefixo="R$" density="compact" variant="outlined"
                           :value="valor" @changing="(v) => valor=v"
                           ref_currency="valor" id="valor"
                           label="Valor"  hide-details>
          </v-currency-text>
          Valor sem mascara: {{valor}}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import VCurrencyText from '../components/VCurrencyText.vue';

export default defineComponent({
  name: 'HomeView',
  data:()=>({
    valor: 1234567.89,
    precision: {
      decimal: ',',
      thousands: '.',
      prefix: '',
      suffix: '',
      precision: 2,
      masked: false,
      allowBlank: false,
      min: Number.MIN_SAFE_INTEGER,
      max: Number.MAX_SAFE_INTEGER
    },
  }),

  components: {
    VCurrencyText,
  },
  mounted() {
  
  }
});
</script>
