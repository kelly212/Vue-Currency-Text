# Vue-Currency-Text
 A currency component (&lt;v-currency-text>) with all features of v-text-field. The component is compatible with vuetify 3.x and dynamic binds the props and listeners to v-text-field component.

## Install

#### NPM

Para usar o componente em seu projeto Vue 3, instale o pacote via NPM:

```bash
npm install v-currency-text
```

## Uso
No seu projeto Vue, importe e registre o componente:
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // se você já estiver usando Vuetify
import VCurrencyText from 'v-currency-text';

const app = createApp(App);

app.use(vuetify);
app.component('VCurrencyText', VCurrencyText);

app.mount('#app');
```
## Exemplo de Uso
Você pode utilizar o componente da seguinte maneira:
```vue
<template>
  <v-currency-text 
    v-model="valor" 
    name="valor" 
    prefixo="R$" 
    density="compact" 
    variant="outlined"
    :value="valor" 
    @mudar="v => valor = v"
    ref_currency="valor" 
    id="valor"
    label="Valor" 
    v-bind="precisao" 
    hide-details
  />
</template>

<script>
export default {
  data() {
    return {
      valor: 0,
      precisao: { precision: 2 } // Exemplo de como usar bind para precisão
    };
  },
  methods: {
    // Método disparado quando o valor muda
    atualizarValor(novoValor) {
      this.valor = novoValor;
    }
  }
};
</script>
```
#### Props
* v-model: Controla o valor do input.
* name: Define o nome do campo, usado em formulários.
* prefixo: Prefixo da moeda (Ex: "R$").
* density: Define a densidade do campo, controlando o espaçamento. (Ex: "compact", "default").
* variant: Estilo do campo. (Ex: "outlined", "filled").
* value: O valor atual do input.
* @mudar: Evento emitido quando o valor muda, retornando o novo valor.
* ref_currency: Referência interna para o campo monetário.
* id: ID do elemento, útil para associar rótulos ou acessibilidade.
* label: Texto que será exibido como rótulo do campo.
* v-bind: Utilizado para passar configurações adicionais, como precision (precisão decimal).
* hide-details: Esconde os detalhes adicionais do campo, como mensagens de erro.

#### Eventos
* @mudar: Emite o novo valor monetário sempre que o campo sofre alterações.

#### Slots
Este componente não utiliza slots no momento.
