# 后台API

#### 目录
[1. 获取config](#1-获取config)  
[2. 删除config](#2-删除config)  
[3. 更新config](#3-更新config)  
[4. 新增config](#4-新增config)

---
## 1. 获取config
+ ##### URL地址: `/config`
+ ##### 请求方式: `GET`

+ ##### response:
    ###### 样例
    ```Json
    [
      {
        "id": "c5fde1a9-4ca7-11ea-b776-0242ac160002",
        "type": "analysisScope",
        "key": "contains",
        "value": "com.thoughtworks",
        "order": 100
      }
    ]
    ```
  
    ###### 详细
    字段 | 说明 | 类型 | 备注 | 是否可空
    :-:|:-:|:-:|:-:|:-:
    `id` | 唯一标识ID | `String` | UUID | N
    `type` | 配置类型 | `String` | 可选值：`analysisScope` `nodeColor` `nodeHidden` | N
    `key` | 配置键值 | `String` | 当`type`为`analysisScope`时，可选值：`contains`<br>当`type`为`nodeHidden`时，可选值：`module` `clz` | N
    `value` | 配置值 | `String` |  | N
    `order` | 配置生效顺序 | `int` | 默认值：100 | N

+ #### Status
    状态码 | 说明 | 备注
    :-:|:-:|:-:
    `200` | 正常返回 |

---


## 2. 删除config
+ ##### URL地址: `/config`
+ ##### 请求方式: `DELETE`
+ ##### 请求参数:

    ###### 样例
    ```Json
    {
      "id": "c5fde1a9-4ca7-11ea-b776-0242ac160002"
    }
    ```
  
    ###### 详细
    字段 | 说明 | 类型 | 备注 | 是否必填
    :-:|:-:|:-:|:-:|:-:
    `id` | 配置id | `String` || Y

+ ##### response:
    ###### 样例
    ```Json
    {
      "success": true,
      "message": "Delete config success"
    }
    ```
  
    ###### 详细
    字段 | 说明 | 类型 | 备注 | 是否可空
    :-:|:-:|:-:|:-:|:-:
    `success` | 是否成功 | `Boolean` | | N
    `message` | 返回信息 | `String` || N

+ #### Status
    状态码 | 说明 | 备注
    :-:|:-:|:-:
    `200` | 正常返回 |

---

## 3. 更新config
+ ##### URL地址: `/config`
+ ##### 请求方式: `POST`
+ ##### 请求参数:
    ###### 样例
    ```Json
    {
        "id": "c5fde1a9-4ca7-11ea-b776-0242ac160002",
        "type": "analysisScope",
        "key": "contains",
        "value": "com.thoughtworks",
        "order": 100
    }
    ```

    ###### 详细
    字段 | 说明 | 类型 | 备注 | 是否必填
    :-:|:-:|:-:|:-:|:-:
    `id` | 唯一标识ID | `String` || Y
    `type` | 配置类型 | `String` | 可选值：`analysisScope` `nodeColor` `nodeHidden` | Y
    `key` | 配置键值 | `String` | 当`type`为`analysisScope`时，可选值：`contains`<br>当`type`为`nodeHidden`时，可选值：`module` `clz` | Y
    `value` | 配置值 | `String` |  | Y
    `order` | 配置生效顺序 | `int` | 默认值：100 | Y
    
    ##### ps
    如果对应字段为发生变化，传回原有值即可。


+ ##### response:
    ###### 样例
    ```Json
    {
      "success": true,
      "message": "Update config success"
    }
    ```
  
    ###### 详细
    字段 | 说明 | 类型 | 备注 | 是否可空
    :-:|:-:|:-:|:-:|:-:
    `success` | 是否成功 | `Boolean` | | N
    `message` | 返回信息 | `String` || N

+ #### Status
    状态码 | 说明 | 备注
    :-:|:-:|:-:
    `200` | 正常返回 |

---

## 4. 新增config
+ ##### URL地址: `/config`
+ ##### 请求方式: `PUT`
+ ##### 请求参数:
    ###### 样例
    ```Json
    {
        "type": "analysisScope",
        "key": "contains",
        "value": "com.thoughtworks",
        "order": 100
    }
    ```
  
    ###### 详细
    字段 | 说明 | 类型 | 备注 | 是否必填
    :-:|:-:|:-:|:-:|:-:
    `type` | 配置类型 | `String` | 可选值：`analysisScope` `nodeColor` `nodeHidden` | Y
    `key` | 配置键值 | `String` | 当`type`为`analysisScope`时，可选值：`contains`<br>当`type`为`nodeHidden`时，可选值：`module` `clz` | Y
    `value` | 配置值 | `String` |  | Y
    `order` | 配置生效顺序 | `int` | 默认值：100 | N


+ ##### response:
    ###### 样例
    ```Json
    {
      "success": true,
      "message": "Add a new config",
      "id": "c5fde1a9-4ca7-11ea-b776-0242ac160002"
    }
    ```

    ###### 详细
    字段 | 说明 | 类型 | 备注 | 是否可空
    :-:|:-:|:-:|:-:|:-:
    `success` | 是否成功 | `Boolean` || N
    `message` | 返回信息 | `String` || N
    `id` | 新增的配置id | `String` | 当且仅当`success`为`false`时,`id`为空 | Y

+ #### Status
    状态码 | 说明 | 备注
    :-:|:-:|:-:
    `200` | 正常返回 |