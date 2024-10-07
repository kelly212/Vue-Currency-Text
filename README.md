![GIF](public/movie.gif)

# Vue-Currency-Text
Um componente de moeda com as funcionalidades do v-text-field. O componente é compatível com Vuetify 3.x. 
Ele utiliza a biblioteca v-money3 para garantir que os valores sejam exibidos e manipulados corretamente.
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
import vuetify from './plugins/vuetify';  // if you are already using Vuetify 
import VCurrencyText from 'v-currency-text';

const app = createApp(App);

app.use(vuetify);
app.component('VCurrencyText', VCurrencyText);
app.mount('#app');
```
## Exemplo de Uso
Você pode usar o componente da seguinte maneira:

```vue
<template>
<v-currency-text
v-model="value"
name="value"
prefix="R$"
density="compact"
variant="outlined"
:value="value"
@update="v => value = v"
ref_currency="value"
id="value"
label="Value"
v-bind="precision"
hide-details
/>
</template>

<script>
export default {
data() {
return {
value: 0, 
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
}; 
},
};
</script>
```
#### Props
* name: Define o nome do campo, usado em formulários.
* prefix: Prefixo da moeda (Ex: "R$").
* density: Define a densidade do campo, controlando o espaçamento. (Ex: "compact", "default").
* variant: Estilo do campo. (Ex: "outlined", "filled").
* value: O valor atual do input.
* @update: Evento emitido quando o valor muda, retornando o novo valor.
* ref_currency: Referência interna para o campo monetário.
* id: ID do elemento, útil para associar labels ou acessibilidade.
* label: Texto que será exibido como rótulo do campo.
* v-bind: Usado para passar configurações adicionais, como precisão (decimal).
* hide-details: Oculta detalhes adicionais do campo, como mensagens de erro.

## Props

O componente aceita as seguintes propriedades:

| Nome       | Tipo                     | Padrão          | Descrição                                    |
|------------|--------------------------|------------------|----------------------------------------------|
| `id`       | String                   | 'textField'      | Identificador único do campo.                |
| `prefixo`  | String                   | ''               | Prefixo a ser exibido antes do valor.       |
| `sufixo`   | String                   | null             | Sufixo a ser exibido após o valor.          |
| `density`  | String                   | 'compact'        | Densidade do campo.                          |
| `variant`  | String                   | 'outlined'       | Variantes de estilo do campo.                |
| `disabled`  | Boolean                  | false            | Define se o campo está desabilitado.        |
| `readonly`  | Boolean                  | false            | Define se o campo é somente leitura.         |
| `value`    | String | Number         | ''               | Valor inicial do campo.                      |
| `precision`| Object                   | Configurações padrão para formatação monetária. | Especificações de formatação.                |
| `locale`   | String                   | 'pt-BR'          | Define a localidade para formatação.         |
| `currency` | String                   | 'BRL'            | Código da moeda a ser usada.                 |


#### Events
* @update: Emite o novo valor monetário sempre que o campo for alterado.

#### Slots
Este componente atualmente não utiliza slots.

#### Referências
* https://github.com/jonathanpmartins/v-money3 (based on v-money)
