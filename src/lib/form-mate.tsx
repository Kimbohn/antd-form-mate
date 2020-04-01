import React from "react";
import _get from 'lodash/get';
import _isFunction from 'lodash/isFunction';
import { Form } from 'antd';
import { FormProps } from 'antd/lib/form';

import RenderItem from "./item-components/RenderItem";
import { ItemConfig, Layout, WithCol } from "./props";
import { renderCol } from './utils';
import { createFormItems } from "..";
// import { setInitialValue } from './setValue';

export default (
  itemsConfig: ItemConfig[],
  formLayout?: Layout,
  withCol?: WithCol,
) => (
    itemsConfig.map((config) => {
      const formItem = (
        <RenderItem
          key={`${config.name}`}
          formLayout={formLayout}
          config={config}
          withCol={withCol}
        />
      )

      return renderCol(config, withCol)(formItem);
    })
  );

export interface FormMateProps extends FormProps {
  items: ItemConfig[];
  itemsLayout?: Layout;
  withCol?: WithCol;
}

export const FormMate = (props: FormMateProps) => {
  const { initialValues, items, itemsLayout, withCol, ...rest } = props;
  return (
    <Form
      initialValues={initialValues}  // TODO: setInitialValue
      {...rest}
    >
      {createFormItems(items, itemsLayout, withCol)}
    </Form>
  )
}
