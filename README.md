# antd-form-mate

基于 ant design 的表单组件，配置化实现表单功能。

## 可配置类型

1. custom 自定义组件类型
2. date 日期
3. datetime 日期时间
4. datetime-range 时间范围
5. number
6. select
7. textarea
8. password
9. picture
10. switch
11. slider 滑动输入
12. file-dragger
13. string 默认类型
14. location 地址，基于高德地图

## API

## 表单项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 上述类型 | string | 'string' |
| field | 字段名 | string | - |
| formItemProps | Form.Item 支持的配置，新增 `dense` 属性配置 Form.Item `marginBottom` 为 0 | 扩展 [FormItemProps](https://ant.design/components/form-cn/#Form.Item) | - |
| fieldProps | 字段值配置  | [GetFieldDecoratorOptions](https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0) | - |
| component | 自定义的组件，仅当 `type` 为 `'custom'` 时可用 | React.ElementType | - |
