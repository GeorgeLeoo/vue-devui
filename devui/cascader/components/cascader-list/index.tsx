import { defineComponent } from 'vue'
import { getRootClass } from './use-class'
import './index.scss'
import { cascaderulProps } from './cascader-list-types'
import { DCascaderItem } from '../cascader-item'
export default defineComponent({
  name: 'DCascaderList',
  props: cascaderulProps,
  setup(props) {
    const rootClasses = getRootClass()
    return () => (
      <ul class={rootClasses.value}>
        {props.cascaderItems.map((item, index) => {
          return <DCascaderItem cascaderItem={item} liIndex={index} {...props}></DCascaderItem>
        })}
      </ul>
    )
  }
})
