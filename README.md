# Vue-Currency-Text
 A currency component (&lt;v-currency-text>) with all features of v-text-field. The component is compatible with vuetify 3.x and dynamic binds the props and listeners to v-text-field component.

## Install 
#### NPM 
To use the component in your Vue 3 project, install the package via NPM: 
```bash 
npm install v-currency-text 
``` 
## Usage 
In your Vue project, import and register the component: 
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
## Usage Example
You can use the component as follows:
```vue
<template>
<v-currency-text
v-model="value"
name="value"
prefix="R$"
density="compact"
variant="outlined"
:value="value"
@mudar="v => value = v"
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
* v-model: Controls the value of the input .
* name: Defines the name of the field, used in forms.
* prefix: Currency prefix (Ex: "R$").
* density: Defines the density of the field, controlling the spacing. (Ex: "compact", " default").
* variant: Field style. (Ex: "outlined", "filled").
* value: The current value of the input.
* @change: Event emitted when the value changes, returning the new value.
* ref_currency : Internal reference to the monetary field.
* id: ID of the element, useful for associating labels or accessibility.
* label: Text that will be displayed as the field label. * v-bind: Used to pass additional settings, such as precision (decimal precision).
* hide-details: Hides additional details of the field, such as error messages.

#### Events
* @change: Emits the new monetary value every time that the field is subject to change.

#### Slots
This component does not currently use slots
