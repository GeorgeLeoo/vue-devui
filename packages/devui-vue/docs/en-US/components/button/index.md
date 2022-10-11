# Button

The button is used to start an instant operation.

#### When To Use

When users want to mark or encapsulate a group of operation commands that respond to user clicks, and trigger the corresponding logic.

### Button Variant

:::demo Through `variant` attribute settings button. Currently supported `solid`, `outline`, `text` three values, the default value is `outline`。

```vue
<template>
  <div class="demo-spacing">
    <d-button variant="solid">Solid Button</d-button>
    <d-button>Outline Button</d-button>
    <d-button variant="text">Text Button</d-button>
  </div>
</template>
```

:::

### Button Theme

<!-- :::demo 通过`color`设置按钮的主题色，目前支持`primary`、`secondary`、`danger`三种主题色，默认为`secondary`。<br>注意：如果`variant`设置成`solid`，则默认使用`primary`主题色。 -->

:::demo Through `color` attribute settings button theme, currently supported `primary`, `secondary`, `danger` three theme color, the default value is `secondary`. <br> Note: if the `variant` is set to `solid`, automatically using `primary` theme color.

```vue
<template>
  <div class="demo-spacing">
    <d-button variant="solid" color="primary">Primary</d-button>
    <d-button color="primary">Primary</d-button>
    <d-button variant="text" color="primary">Primary</d-button>
  </div>

  <div class="demo-spacing">
    <d-button variant="solid" color="secondary">Secondary</d-button>
    <d-button color="secondary">Secondary</d-button>
    <d-button variant="text" color="secondary">Secondary</d-button>
  </div>

  <div class="demo-spacing">
    <d-button variant="solid" color="danger">Danger</d-button>
    <d-button color="danger">Danger</d-button>
    <d-button variant="text" color="danger">Danger</d-button>
  </div>
</template>
```

:::

### Button Size

:::demo Through `size` attribute set button size，currently supported `sm`, `md`, `lg` three values, the default value is `md`。

```vue
<template>
  <div class="demo-spacing">
    <d-button size="sm">Small</d-button>
    <d-button>Medium</d-button>
    <d-button size="lg">Large</d-button>
  </div>
</template>
```

:::

### Disabled Buttons

:::demo Through `disabled` attribute set button disabled state.
<template>

  <div class="demo-spacing">
    <d-button variant="solid">Solid Button</d-button>
    <d-button>Outline Button</d-button>
    <d-button variant="text">Text Button</d-button>
  </div>

  <div class="demo-spacing">
    <d-button variant="solid" disabled>Solid Button</d-button>
    <d-button disabled>Outline Button</d-button>
    <d-button variant="text" disabled>Text Button</d-button>
  </div>
</template>
```

:::

### Loading Buttons

:::demo Through `loading` attribute set button loading state.

```vue
<template>
  <d-button variant="solid" :loading="showLoading" @click="handleClick">Click Me</d-button>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const showLoading = ref(false);

    const handleClick = () => {
      showLoading.value = true;

      setTimeout(() => {
        showLoading.value = false;
      }, 2000);
    };

    return { showLoading, handleClick };
  },
};
</script>
```

:::

### Icon Buttons

:::demo

```vue
<template>
  <div class="demo-spacing">
    <d-button icon="add" variant="solid">New</d-button>
    <d-button icon="filter">Filter</d-button>
    <d-button icon="connect" variant="text">Link</d-button>
    <d-button icon="delete" variant="text" title="Delete"></d-button>
    <d-button shape="round" title="Add">Add</d-button>
    <d-button icon="delete" shape="circle" title="Delete" size="sm"></d-button>
    <d-button icon="delete" shape="circle" title="Delete"></d-button>
    <d-button variant="solid" icon="filter" shape="circle" title="Add" size="lg"></d-button>
  </div>
</template>
```

:::

### Button Group

Put multiple buttons as a group into the button group container. The size of the button group can be set by size and mixed with the drop-down menu.

:::demo

```vue
<template>
  <d-button-group>
    <d-button variant="solid">BUTTON NAME</d-button>
    <d-button icon="icon-select-arrow" variant="solid"></d-button>
  </d-button-group>

  <p>size: sm</p>
  <d-button-group size="sm">
    <d-button color="primary" variant="solid">Shanghai</d-button>
    <d-button>Peking</d-button>
    <d-button>Shenzhen</d-button>
  </d-button-group>

  <p>size: default</p>
  <d-button-group>
    <d-button color="primary">Shanghai</d-button>
    <d-button>Peking</d-button>
    <d-button>Shenzhen</d-button>
  </d-button-group>

  <p>size: lg</p>
  <d-button-group size="lg">
    <d-button color="primary">Shanghai</d-button>
    <d-button>Peking</d-button>
    <d-button>Shenzhen</d-button>
  </d-button-group>

  <p>mixed with the drop-down menu</p>
  <d-button-group>
    <d-dropdown style="width: 100px;" :position="position" align="start">
      <d-button>Click Me 1</d-button>
      <template #menu>
        <ul class="list-menu">
          <li class="menu-item">Item 1</li>
          <li class="menu-item">Item 2</li>
          <li class="menu-item">Item 3</li>
          <li class="menu-item">Item 4</li>
        </ul>
      </template>
    </d-dropdown>
    <d-button icon="add" variant="solid">Shanghai</d-button>
    <d-dropdown style="width: 100px;" :position="position" align="start">
      <d-button>Click Me 2</d-button>
      <template #menu>
        <ul class="list-menu">
          <li class="menu-item">Item 1</li>
          <li class="menu-item">Item 2</li>
          <li class="menu-item">Item 3</li>
          <li class="menu-item">Item 4</li>
        </ul>
      </template>
    </d-dropdown>
    <d-button icon="filter">Peking</d-button>
    <d-dropdown style="width: 100px;" :position="position" align="start">
      <d-button>Click Me 3</d-button>
      <template #menu>
        <ul class="list-menu">
          <li class="menu-item">Item 1</li>
          <li class="menu-item">Item 2</li>
          <li class="menu-item">Item 3</li>
          <li class="menu-item">Item 4</li>
        </ul>
      </template>
    </d-dropdown>
  </d-button-group>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      position: ref(['bottom-start', 'top-start']),
    };
  },
});
</script>
```

:::

### Button Parameter

| Parameter | Type                              | Default     | Description                                                 | Jump to Demo                          |
| :-------- | :-------------------------------- | :---------- | :---------------------------------------------------------- | :------------------------------------ |
| variant   | [IButtonVariant](#ibuttonvariant) | 'outline'   | Optional. The variant of button.                            | [Button Variant](#button-variant)     |
| color     | [IButtonColor](#ibuttoncolor)     | 'secondary' | Optional. The theme of button.                              | [Button Theme](#button-theme)         |
| size      | [IButtonSize](#ibuttonsize)       | 'md'        | Optional. The size is `lg, md, sm, xs`.                     | [Button Size](#button-size)           |
| icon      | `string`                          | --          | Optional. Customized button icon.                           | [Icon Buttons](#icon-buttons)         |
| shape     | [IButtonShape](#ibuttonshape)     | --          | Optional. Customized button icon.                           | [Icon Buttons](#icon-buttons)         |
| disabled  | `boolean`                         | false       | Optional. Indicating whether to disable the button.         | [Disabled Buttons](#disabled-buttons) |
| loading   | `boolean`                         | false       | Optional. Indicating whether to display the loading prompt. | [Loading Buttons](#loading-buttons)   |

### IButton Type Definition

#### IButtonVariant

```ts
type IButtonVariant = 'solid' | 'outline' | 'text';
```

#### IButtonSize

```ts
type IButtonSize = 'lg' | 'md' | 'sm';
```

#### IButtonColor

```ts
type IButtonColor = 'primary' | 'secondary' | 'danger';
```

#### IButtonShape

```ts
type IButtonShape = 'circle' | 'round';
```

### ButtonGroup Parameter

| Parameter | Type                             | Default | Description                                   | Jump to Demo                  |
| :-------- | :------------------------------- | :------ | :-------------------------------------------- | :---------------------------- |
| size      | [IButtonSize](#iButtonGroupSize) | 'md'    | Optional. The size is 'lg', 'md', 'sm', 'xs'. | [Button Group](#button-group) |

### ButtonGroup Type Definition

#### IButtonGroupSize

```ts
type IButtonGroupSize = 'lg' | 'md' | 'sm';
```
