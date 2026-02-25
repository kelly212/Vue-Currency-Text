<template>
			<div class="decimal">
						<div
								:class=" (disabled ? 'v-input--disabled' : '')+' v-input v-input--horizontal v-input--center-affix v-input--density-'+density+' v-locale--is-ltr v-input--dirty v-text-field inp '+isRequired">
															<div class="v-input__control ">
												<div
														:class="(disabled ? 'v-field--disabled' : '')+'   v-field v-field--active v-field--center-affix v-field--dirty v-field--variant-'+variant+' v-theme--dark v-locale--is-ltr'">
															<div class="v-field__field  " data-no-activator="">
																		<label class="v-label v-field-label" :for="id">{{label}}</label>
																		<span class="v-text-field__prefix" style="color: inherit">{{prefixo}}</span>
																		<money3 :id="id"
																										v-model.lazy="money"
																										v-bind="precisao"
																										:disabled="disabled"
																										:rules=rulesValidation
																										@blur="onBlur"
																										class="v-field__input  money3">
																		</money3>
																		<span v-if="sufixo!==null" class="v-text-field__suffix" style="color: inherit">{{sufixo}}</span>
															</div>
															
															<div class="v-field__outline">
																		<div class="v-field__outline__start"></div>
																		<div class="v-field__outline__notch">
																					<label class=" v-input--disabled v-label v-field-label v-field-label--floating" aria-hidden="true"
																												:for="id">{{label}}</label></div>
																		<div class="v-field__outline__end"></div>
															</div>
												</div>
									</div>
									<div class="v-input__append" v-if="validarCampo(append)">
												<v-icon @click="appendClick()" :color="showHint ?'blue':'inherit'">{{append}}</v-icon>
									</div>
						</div>
			</div>
</template>

<script>
   import {Money3Component} from "v-money3";


   export default {
      name: 'VCurrencyText',
      props: {
         id: {type: String, default: 'textFild'},
         prefixo: {type: String, default: () => ''},
         sufixo: {type: String, default: () => null},
         density: {type: String, default: 'compact'},
         variant: {type: String, default: 'outlined'},
         disabled: {type: Boolean, default: false},
         isDark: {type: Boolean, default: false},
         hideDetails: {type: Boolean, default: true},
         showHint: {type: Boolean, default: false},
         readonly: {type: Boolean, default: false},
         ref_currency: {type: String, default: 'ref_currency'},
         validation: {type: String, default: ''},
         hint: {type: String, default: ''},
         append: {type: String, default: ''},
         locale: {type: String, default: 'pt-BR'},
         currency: {type: String, default: 'BRL'},
         label: {type: String},
         // value: {type: [String, Number]},
         value: { type: [String, Number], default: 0 },
         regras: {type: Array, default: () => []},
         options: {type: Object, default: () => ({})},
         precisao: {
            type: Object,
            default: () => ({
               decimal: ',',
               thousands: '.',
               prefix: '',
               precision: 2,
               masked: true,
               disableNegative: true,
               focusOnRight: true,
               shouldRound: true,
															//Não use MIN_SAFE_INTEGER / MAX_SAFE_INTEGER por causa do Vue Cli.
               // min: Number.MIN_SAFE_INTEGER,
               // max: Number.MAX_SAFE_INTEGER
            })
         }
      },
      components: {
         money3: Money3Component
      },
      data() {
         return {
            isRequired: '',
            // v_field_error: '',
            errorMessages: [],
            rulesValidation: [],
            money: 0,
            min: {type: String | Number},
            input_active: false,
            rules: {
               required: value => !!value || 'O campo é obrigatório',
            },
         }
      },
      methods: {
         appendClick() {
            this.$emit('appendClick')
         },
         validarCampo(campo) {
            return (campo !== undefined && campo !== null && campo !== '')
         },
       
         setClassRequired() {
            if (this.validation === 'required') {
               this.isRequired = this.validarCampo(this.value) && this.value > 0 ? '' : (this.isDark ? 'isRequired-dark':'isRequired')
            } else {
               this.isRequired = ''
            }
         },
         onBlur(event) {
            this.setClassRequired()
            // this.isRequired = this.validarCampo(this.value) && this.value > 0 ? '' : 'isRequired'
            this.input_active = true;
            // this.setClasseErro()
         },
         
         removeMascaraMoney(x) {

            if (this.validarCampo(x)) {
               // Remove os pontos que são usados como separadores de milhar
               let valorSemPontos = x.replace(/\./g, '');

               // Substitui a vírgula pelo ponto, para seguir o padrão numérico
               let valorConvertido = valorSemPontos.replace(',', '.');

               // Converte para número e retorna
               return parseFloat(valorConvertido);

            } else {
               return ''
            }
         },
       
         mascaraValor(valor, decimais, comPrefixo) {
            var _this = this
            const numDecimais = (decimais !== null && decimais !== undefined) ? decimais : 2;
            if (valor !== undefined && valor !== null) {
               if (comPrefixo !== null && comPrefixo !== undefined && comPrefixo) {
                  return Number(valor).toLocaleString(_this.locale, {
                     style: 'currency',
                     currency: _this.currency,
                     minimumFractionDigits: numDecimais
                  })
               } else {

                  return Number(valor).toLocaleString(this.locale, {minimumFractionDigits: numDecimais})
               }
            }
            return ''
         },
      },
      created() {
      },
      mounted() {
         if (this.validarCampo(this.value) && this.value >= 0) {
            this.money = this.mascaraValor(this.value, this.precisao.precision)
         }
      },
      computed: {
      },
      watch: {
         value: function () {
            if (this.validarCampo(this.value) && this.value >= 0) {
               this.money = this.mascaraValor(this.value, this.precisao.precision)
            } else {
               this.money = this.mascaraValor(0, this.precisao.precision)
            }
            this.setClassRequired()
         },

         money: function () {
            if (this.validarCampo(this.money)) {
               var v = this.removeMascaraMoney(this.money.replace(this.prefixo, ''))

               this.$emit('update', v)
            }
            // if (this.input_active) {
            //    this.setClasseErro()
            // }
         },
      },
   }
</script>

<style lang="scss">
			.isRequired {
						/*v-field__outline*/
						.v-field-label{
									color: red;
						}
								.v-field__outline__start,
								.v-field__outline__notch,
								.v-field__outline__end,
								.v-field--variant-outlined .v-field__outline__notch::after{
											border-color: red;
								}
						/*.v-text-field {*/
						/*border: red 1px dashed !important;*/
						/*}*/
			}
			
			.isRequired-dark {
						.v-field-label{
									color: #CF6679!important;
									font-weight: inherit!important;
									opacity: 1!important;
						}
						.v-field__outline__start,
						.v-field__outline__notch,
						.v-field__outline__end,
						.v-field--variant-outlined .v-field__outline__notch::after{
									border-color: #CF6679!important;
									opacity: 1!important;
						}
			}
			
			.decimal {
						.v-text-field input {
									text-align: right !important;
						}
			}
			
			.show_money {
						visibility: hidden;
						font-size: 10px;
						z-index: 0;
						
						input {
									width: 10px !important;
									
						}
			}
			
			.money3 {
						text-align: right !important;
						font-size: 13px !important;
						/*height: 32px;*/
			}
</style>
