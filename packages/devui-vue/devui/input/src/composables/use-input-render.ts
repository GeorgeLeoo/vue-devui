import { computed, inject, toRefs, ref, shallowRef } from 'vue';
import type { SetupContext } from 'vue';
import { FORM_TOKEN, FormContext, FORM_ITEM_TOKEN, FormItemContext } from '../../../form';
import { InputProps, UseInputRender } from '../input-types';
import { useNamespace } from '../../../shared/hooks/use-namespace';

export function useInputRender(props: InputProps, ctx: SetupContext): UseInputRender {
  const formContext = inject(FORM_TOKEN, undefined) as FormContext;
  const formItemContext = inject(FORM_ITEM_TOKEN, undefined) as FormItemContext;
  const isValidateError = computed(() => formItemContext?.validateState === 'error');
  const ns = useNamespace('input');
  const slotNs = useNamespace('input-slot');
  const isFocus = ref(false);
  const { error, size, disabled, modelValue, labelInput } = toRefs(props);
  const slots = ctx.slots;
  const inputDisabled = computed(() => disabled.value || formContext?.disabled);
  const inputSize = computed(() => size?.value || formContext?.size || '');

  const { style, class: customClass, ...otherAttrs } = ctx.attrs;
  const customStyle = { style };
  const labelInputPreset = ['', 'border'];
  const useLabelInput = labelInputPreset.includes(labelInput.value);
  const wrapClasses = computed(() => ({
    [ns.e('wrapper')]: true,
    [ns.e('wrapper-border')]: useLabelInput,
    [ns.e('wrapper-border-line')]: !useLabelInput,
    [ns.e('wrapper-border-line-active')]: !useLabelInput && isFocus.value,
    [ns.m('focus')]: isFocus.value,
    [ns.m('disabled')]: inputDisabled.value,
    [ns.m('error')]: error.value || isValidateError.value,
    [ns.m('feedback')]: Boolean(formItemContext?.validateState) && formItemContext?.showFeedback,
  }));

  const inputClasses = computed(() => [
    {
      [ns.b()]: true,
      [ns.m(inputSize.value)]: Boolean(inputSize.value),
      [slotNs.b()]: slots.prepend || slots.append,
      [ns.m('append')]: slots.append,
      [ns.m('prepend')]: slots.prepend,
    },
    customClass,
  ]);

  const labelClassName = computed(() => [
    ns.e('label'),
    {
      [ns.e('label-active')]: useLabelInput && isFocus.value ? isFocus.value : modelValue.value,
      [ns.e('label-active-color')]: useLabelInput && isFocus.value,
      [ns.e('label-active-error')]: useLabelInput && (error.value || isValidateError.value),
      [ns.e('label-active-no-bg')]: !useLabelInput,
    },
  ]);

  return { inputDisabled, inputSize, isFocus, wrapClasses, inputClasses, customStyle, otherAttrs, labelClassName };
}
