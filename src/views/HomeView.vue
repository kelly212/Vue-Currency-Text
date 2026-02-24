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
																																:modelValue="valor" @update="(v) => valor=v"
																																ref_currency="valor" id="valor"
																																label="Valor" hide-details>
															</v-currency-text>
												</v-col>
												
												<v-col cols="4">
															<v-currency-text v-model="valor" name="valor" prefixo="R$" density="compact" variant="outlined"
																																:modelValue="valor" @update="(v) => valor=v"
																																ref_currency="valor" id="valor" validation="required"
																																label="Valor com required" hide-details>
															</v-currency-text>
												</v-col>
												
												<!--<v-col cols="4">-->
															<!--<v-currency-text v-model="valor2" name="valor" prefixo="R$" density="compact" variant="outlined"-->
																																<!--:value="valor2" @update="(v) => valor2=v"-->
																																<!--ref_currency="valor2" id="valor2"-->
																																<!--label="Valor2" hide-details>-->
															<!--</v-currency-text>-->
												<!--</v-col>-->
												<!--<v-col cols="4">-->
															<!--<v-currency-text v-model="valor3" name="valor" prefixo="R$" density="compact" variant="outlined"-->
																																<!--:value="valor3" @update="(v) => valor3=v"-->
																																<!--ref_currency="valor3" id="valor3"-->
																																<!--label="Valor3" hide-details>-->
															<!--</v-currency-text>-->
												<!--</v-col>-->
									</v-row>
						</v-container>
			</div>
</template>

<script>
   import {defineComponent} from 'vue';

   // Components
   import VCurrencyText from '../components/VCurrencyText.vue';

   export default defineComponent({
      name: 'HomeView',
      data: () => ({
         valor: 1000,
         valor2: 0,
         valor3: 0,
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

      },
      watch: {
         valor2: function f() {
            this.valor3 = this.valor - this.valor2

         }
      }
   });
</script>
