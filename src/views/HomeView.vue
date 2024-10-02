<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-currency-text v-model="valor" name="valor" prefixo="R$" density="compact" variant="outlined"
                           :value="valor" @mudar="v => valor= v"
                           ref_currency="valor" id="valor"
                           label="Valor" v-bind="precisao" hide-details>
          </v-currency-text>
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
    precisao: {
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
});
</script>
