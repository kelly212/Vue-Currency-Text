<template>
			<div class="decimal">
						<!--<v-text-field v-model="money"-->
																				<!--:id="id"-->
																				<!--:label="label"-->
																				<!--:prefix="prefixo"-->
																				<!--:ref="ref_currency"-->
																				<!--:rules="rulesValidation"-->
																				<!--:disabled="disabled"-->
																				<!--:variant="variant"-->
																				<!--:density="density"-->
																				<!--:hide-details="hideDetails"-->
																				<!--:readonly="readonly"-->
																				<!--style="z-index: 1"-->
																				<!--@keypress="CheckNumeric(event)"-->
																				<!--@blur="onblurField">-->
									<!--<div class="show_money">-->
												<!--<money3  v-model="money" :value="value" v-bind="precision" @blur.native="onBlur"-->
																					<!--@input="$emit('input', money)" :rules=rulesValidation @focus.native="onFocus($event)">-->
												<!--</money3>-->
									<!--</div>-->
						<!--</v-text-field>-->
						
						<div  :class=" (disabled ? 'v-input--disabled' : '')+' v-input v-input--horizontal v-input--center-affix v-input--density-'+density+' v-locale--is-ltr v-input--dirty v-text-field inp '">
									<div class="v-input__control">
												<div :class="(disabled ? 'v-field--disabled' : '')+'  v-field v-field--active v-field--center-affix v-field--dirty v-field--variant-'+variant+' v-theme--dark v-locale--is-ltr'">
															<div class="v-field__field" data-no-activator="">
																		<label class="v-label v-field-label" :for="id">{{label}}</label>
																		<span class="v-text-field__prefix" style="color: inherit">{{prefixo}}</span>
																		<money3 :id="id"
																										v-model.lazy="money"
																										v-bind="precision"
																										:disabled="disabled"
																										:rules=rulesValidation
																										class="v-field__input money3">
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
         value: {type: [String, Number]},
         regras: {type: Array, default: () => []},
         options: {type: Object, default: () => ({})},
         precision: {
            default: {
               decimal: ',',
               thousands: '.',
               prefix: '',
               precision: 2,
               masked: true,
               disableNegative: true,
               focusOnRight: true,
               shouldRound: true,
               min: Number.MIN_SAFE_INTEGER,
               max: Number.MAX_SAFE_INTEGER
             
               // ...this.options
            }
         },
      },
      component: {money3: Money3Component},
      data() {
         return {
            // v_input_error: '',
            // v_field_error: '',
            errorMessages: [],
            rulesValidation: [],
            money: 0,
            min: {type: String | Number},
            input_active: false,
         }
      },
      methods: {
         appendClick() {
            this.$emit('appendClick')
         },
         // onblurField() {
         //    this.$emit('blur')
         // },
         // toDecimal(v, tam = 2, valida_nan = false) {
         //    try {
         //       if (valida_nan) {
         //          if (isNaN(parseFloat(v))) {
         //             return 0
         //          } else {
         //             if (this.validarCampo(v)) {
         //                return parseFloat(parseFloat(v).toFixed(tam))
         //             } else {
         //                return 0
         //             }
         //          }
         //       } else {
         //          let ret = 0;
         //          if (this.validarCampo(v)) {
         //             if (!this.validarCampo(tam)) tam = 2;
         //             ret = parseFloat(parseFloat(v).toFixed(tam))
         //          }
         //          return ret
         //       }
         //    } catch (e) {
         //       console.log(e)
         //    }
         // },
         validarCampo(campo) {
            return (campo !== undefined && campo !== null && campo !== '')
         },
         // setClasseErro() {
         //    var v = this.removeMascaraMoney(this.money.replace(this.prefixo, ''))
									//
         //    if (this.validation === 'requerid') {
         //       if (!this.validarCampo(v) || this.toDecimal(v) <= 0) {
         //          this.v_input_error = 'v-input--error'
         //          this.v_field_error = 'v-field--error'
         //          this.errorMessages.push('Campo obrigatório')
         //       } else {
         //          this.v_input_error = ''
         //          this.v_field_error = ''
         //          this.errorMessages = []
         //       }
         //    } else {
         //       this.v_input_error = ''
         //       this.v_field_error = ''
         //       this.errorMessages = []
         //    }
									//
         // },
         // onFocus(event) {
         //    event.target.select();
         //    this.v_input_error = ''
         //    this.v_field_error = ''
									//
         //    if (this.input_active) {
         //       this.setClasseErro()
         //    }
									//
         // },
         // onBlur(event) {
         //    this.v_input_error = 'v-input--error'
         //    this.v_field_error = 'v-field--error'
         //    this.input_active = true;
         //    this.setClasseErro()
         // },
         // buildRules(obj) {
         //    const regras = obj.validation.split('|');
         //    for (let i = 0; i < regras.length; i++) {
         //       const regra = regras[i].split(':');
         //       switch (regra[0]) {
         //          case 'required':
         //             obj.rulesValidation.push(v => !!v || 'Campo Obrigatório.');
         //             break;
         //          case 'min_value':
         //             obj.rulesValidation.push(v => (parseFloat(v) >= parseFloat(regra[1])) || 'Valor mínimo ' + regra[1] + ' ');
         //             break;
         //       }
         //    }
         // },
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
         // CheckNumeric(e) {
         //    e = e || window.event;
         //    const code = e.which || e.keyCode;
         //    if ((code < 48 || code > 57)) {
         //       e.preventDefault()
         //    }
         // },
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
         // if (this.validation !== '') {
         //    this.buildRules(this)
         // }
      },
      mounted() {
         if (this.validarCampo(this.value) && this.value > 0) {
            this.money = this.mascaraValor(this.value, 2)
         }
      },
      computed: {
         // disabledClass() {
         //    return this.disabled ? 'v-input--disabled' : ''
         // }
      },
      watch: {
         value: function () {
            if (this.validarCampo(this.value) && this.value > 0) {
               this.money = this.mascaraValor(this.value, 2)
            }
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
