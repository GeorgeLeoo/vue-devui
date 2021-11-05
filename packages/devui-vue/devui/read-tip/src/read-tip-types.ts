import type { PropType, ExtractPropTypes } from 'vue'

export const readTipProps = {
  readTipOptions: {
    type: Object as PropType<ReadTipOptions>
  },
  defaultTemplateProps: {
    type: Object as PropType<DefaultTemplateProps>
  }
} as const

export type Position = 'top' | 'left' | 'right' | 'bottom'
export type Trigger = 'hover' | 'click'

export type DefaultTemplateProps = {
  title?: string
  content?: string
  top?: number
  selector?: string
  position?: string
  id? : string
  temp: string
}

export interface ReadTipOptions {
  trigger?: Trigger
  showAnimate?: boolean
  mouseenterTime?: number
  mouseleaveTime?: number
  position?: Position
  overlayClassName?: string
  appendToBody?: boolean
  rules: ReadTipRules
}

export type ReadTipRules = ReadTipRule | ReadTipRule[];

export interface ReadTipRule {
  key?: string
  selector: string
  trigger?: Trigger
  title?: string
  content?: string
  showAnimate?: boolean
  mouseenterTime?: number
  mouseleaveTime?: number
  position?: Position
  overlayClassName?: string
  appendToBody?: boolean
  //customData与template搭配使用，customData为传入模板的上下文，可以自定义模板内容
  // dataFn?: ({
  //   element,
  //   rule: ReadTipRule,
  // }) => Observable<{ title?: string; content?: string; template?: TemplateRef<any>; customData?: any }>
}


export type ReadTipProps = ExtractPropTypes<typeof readTipProps>
