export const testMd = '# 后台API\n' +
    '---\n' +
    '## 1. 获取config\n' +
    '+ ##### URL地址: `/config`\n' +
    '+ ##### 请求方式: `GET`\n' +
    '\n' +
    '+ ##### response:\n' +
    '    ###### 样例\n' +
    '    ```Json\n' +
    '    [\n' +
    '      {\n' +
    '        "id": "c5fde1a9-4ca7-11ea-b776-0242ac160002",\n' +
    '        "type": "analysisScope",\n' +
    '        "key": "contains",\n' +
    '        "value": "com.thoughtworks",\n' +
    '        "order": 100\n' +
    '      }\n' +
    '    ]\n' +
    '    ```\n' +
    '  \n' +
    '    ###### 详细\n' +
    '    字段 | 说明 | 类型 | 备注 | 是否可空\n' +
    '    :-:|:-:|:-:|:-:|:-:\n' +
    '    `id` | 唯一标识ID | `String` | UUID | N\n' +
    '    `type` | 配置类型 | `String` | 可选值：`analysisScope` `nodeColor` `nodeHidden` | N\n' +
    '    `key` | 配置键值 | `String` | 当`type`为`analysisScope`时，可选值：`contains`<br>当`type`为`nodeHidden`时，可选值：`module` `clz` | N\n' +
    '    `value` | 配置值 | `String` |  | N\n' +
    '    `order` | 配置生效顺序 | `int` | 默认值：100 | N\n' +
    '\n' +
    '+ #### Status\n' +
    '    状态码 | 说明 | 备注\n' +
    '    :-:|:-:|:-:\n' +
    '    `200` | 正常返回 |\n' +
    '\n' +
    '---\n' +
    '\n' +
    '\n' +
    '## 2. 删除config\n' +
    '+ ##### URL地址: `/config`\n' +
    '+ ##### 请求方式: `DELETE`\n' +
    '+ ##### 请求参数:\n' +
    '\n' +
    '    ###### 样例\n' +
    '    ```Json\n' +
    '    {\n' +
    '      "id": "c5fde1a9-4ca7-11ea-b776-0242ac160002"\n' +
    '    }\n' +
    '    ```\n' +
    '  \n' +
    '    ###### 详细\n' +
    '    字段 | 说明 | 类型 | 备注 | 是否必填\n' +
    '    :-:|:-:|:-:|:-:|:-:\n' +
    '    `id` | 配置id | `String` || Y\n' +
    '\n' +
    '+ ##### response:\n' +
    '    ###### 样例\n' +
    '    ```Json\n' +
    '    {\n' +
    '      "success": true,\n' +
    '      "message": "Delete config success"\n' +
    '    }\n' +
    '    ```\n' +
    '  \n' +
    '    ###### 详细\n' +
    '    字段 | 说明 | 类型 | 备注 | 是否可空\n' +
    '    :-:|:-:|:-:|:-:|:-:\n' +
    '    `success` | 是否成功 | `Boolean` | | N\n' +
    '    `message` | 返回信息 | `String` || N\n' +
    '\n' +
    '+ #### Status\n' +
    '    状态码 | 说明 | 备注\n' +
    '    :-:|:-:|:-:\n' +
    '    `200` | 正常返回 |\n' +
    '\n' +
    '---\n' +
    '\n' +
    '## 3. 更新config\n' +
    '+ ##### URL地址: `/config`\n' +
    '+ ##### 请求方式: `POST`\n' +
    '+ ##### 请求参数:\n' +
    '    ###### 样例\n' +
    '    ```Json\n' +
    '    {\n' +
    '        "id": "c5fde1a9-4ca7-11ea-b776-0242ac160002",\n' +
    '        "type": "analysisScope",\n' +
    '        "key": "contains",\n' +
    '        "value": "com.thoughtworks",\n' +
    '        "order": 100\n' +
    '    }\n' +
    '    ```\n' +
    '\n' +
    '    ###### 详细\n' +
    '    字段 | 说明 | 类型 | 备注 | 是否必填\n' +
    '    :-:|:-:|:-:|:-:|:-:\n' +
    '    `id` | 唯一标识ID | `String` || Y\n' +
    '    `type` | 配置类型 | `String` | 可选值：`analysisScope` `nodeColor` `nodeHidden` | Y\n' +
    '    `key` | 配置键值 | `String` | 当`type`为`analysisScope`时，可选值：`contains`<br>当`type`为`nodeHidden`时，可选值：`module` `clz` | Y\n' +
    '    `value` | 配置值 | `String` |  | Y\n' +
    '    `order` | 配置生效顺序 | `int` | 默认值：100 | Y\n' +
    '    \n' +
    '    ##### ps\n' +
    '    如果对应字段为发生变化，传回原有值即可。\n' +
    '\n' +
    '\n' +
    '+ ##### response:\n' +
    '    ###### 样例\n' +
    '    ```Json\n' +
    '    {\n' +
    '      "success": true,\n' +
    '      "message": "Update config success"\n' +
    '    }\n' +
    '    ```\n' +
    '  \n' +
    '    ###### 详细\n' +
    '    字段 | 说明 | 类型 | 备注 | 是否可空\n' +
    '    :-:|:-:|:-:|:-:|:-:\n' +
    '    `success` | 是否成功 | `Boolean` | | N\n' +
    '    `message` | 返回信息 | `String` || N\n' +
    '\n' +
    '+ #### Status\n' +
    '    状态码 | 说明 | 备注\n' +
    '    :-:|:-:|:-:\n' +
    '    `200` | 正常返回 |\n' +
    '\n' +
    '---\n' +
    '\n' +
    '## 4. 新增config\n' +
    '+ ##### URL地址: `/config`\n' +
    '+ ##### 请求方式: `PUT`\n' +
    '+ ##### 请求参数:\n' +
    '    ###### 样例\n' +
    '    ```Json\n' +
    '    {\n' +
    '        "type": "analysisScope",\n' +
    '        "key": "contains",\n' +
    '        "value": "com.thoughtworks",\n' +
    '        "order": 100\n' +
    '    }\n' +
    '    ```\n' +
    '  \n' +
    '    ###### 详细\n' +
    '    字段 | 说明 | 类型 | 备注 | 是否必填\n' +
    '    :-:|:-:|:-:|:-:|:-:\n' +
    '    `type` | 配置类型 | `String` | 可选值：`analysisScope` `nodeColor` `nodeHidden` | Y\n' +
    '    `key` | 配置键值 | `String` | 当`type`为`analysisScope`时，可选值：`contains`<br>当`type`为`nodeHidden`时，可选值：`module` `clz` | Y\n' +
    '    `value` | 配置值 | `String` |  | Y\n' +
    '    `order` | 配置生效顺序 | `int` | 默认值：100 | N\n' +
    '\n' +
    '\n' +
    '+ ##### response:\n' +
    '    ###### 样例\n' +
    '    ```Json\n' +
    '    {\n' +
    '      "success": true,\n' +
    '      "message": "Add a new config",\n' +
    '      "id": "c5fde1a9-4ca7-11ea-b776-0242ac160002"\n' +
    '    }\n' +
    '    ```\n' +
    '\n' +
    '    ###### 详细\n' +
    '    字段 | 说明 | 类型 | 备注 | 是否可空\n' +
    '    :-:|:-:|:-:|:-:|:-:\n' +
    '    `success` | 是否成功 | `Boolean` || N\n' +
    '    `message` | 返回信息 | `String` || N\n' +
    '    `id` | 新增的配置id | `String` | 当且仅当`success`为`false`时,`id`为空 | Y\n' +
    '\n' +
    '+ #### Status\n' +
    '    状态码 | 说明 | 备注\n' +
    '    :-:|:-:|:-:\n' +
    '    `200` | 正常返回 ||'