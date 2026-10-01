---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat-briquettes
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 泥炭压块

## 1. 范围与适用性

本 PCR 适用于不添加粘结剂、未经炭化、干燥后压制成块的泥炭燃料。其专有生产要求是脱水和机械压制，而非仅开采泥炭。排除含粘结剂的混合燃料、泥炭颗粒、原泥炭、泥炭焦炭、煤压块及园艺栽培基质。产品定义依据 `un-energy-peat-products-2024`，分类依据 `un-cpc-structure-2025`。类别名称“泥炭压块”描述机械压制的燃料；带 UUID 的流展示保留数据库名称“泥炭团块”。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat-briquettes |
| classification_refs | CPC 3.0: 11052; `un-cpc-structure-2025` |
| covered_products | 无粘结剂干燥泥炭燃料压块 |
| excluded_products | 原泥炭；泥炭颗粒；泥炭焦炭；煤压块；含粘结剂混合燃料；栽培基质 |
| representative_product | 合格无粘结剂泥炭压块 |
| production_route | 泥炭接收和预处理；干燥；压制；冷却和成品处理；按适用情况包装 |
| market_state | 出厂时未燃烧的固体燃料，声明含水率，净质量不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应用于下游燃烧的泥炭压块燃料 |
| How much | 出厂合格产品净质量 1 kg |
| How well | 声明销售状态含水率、灰分、低位热值和机械验收条件；不假设统一供热性能 |
| How long or cycle | 一个生产报告期；下游燃烧持续时间不属于本生产数据集 |
| reference_flow_link | briquettes |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 泥炭团块 `0035aeea-b20b-4287-abac-d501f59c957f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 泥炭来源和开采边界；场址及年份；无粘结剂；产品湿基含水率；灰分和热值检测基准；压块形态及验收条件；热源路线；包装材料；上游排水影响覆盖情况 |

前景数据包必须声明上述必需限定信息。本质量参考为生产声明单位；比较供热量还需实测热值和下游效率。

## 4. 计量与单位规则

能源单位换算及燃料特定热值基准依据 `un-ires-2018` 第 4.23、4.33–4.38 段。热值须与实际含水率、组成及计量状态一致；高位和低位热值不得混用。

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass | kg | 使用经校准的称重设备测定合格压块净质量，不含包装。所有清单数量均按每 1 kg 参考流计。 |
| moisture_basis | peat_feed; peat_fuel; briquettes | Mass | kg | 为每个称重物流记录湿基含水率。区分接收质量和干物质质量；不得用干质量代替销售状态参考质量。 |
| electricity_conversion | prep_electricity; dry_electricity; press_electricity | Net calorific value | MJ | 按 1 kWh = 3.6 MJ 将电表记录换算为 MJ。这是准确的单位换算，不是燃料热值估算。 |
| gas_volume | natural_gas_fuel | Volume | m3 | 声明气体计量温度、压力和参考体积约定。没有相同基准的供应商实测热值，不得把气体体积换算为热量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 压块工厂收到未成型泥炭；声明含水率和来源 |
| starting_condition_role | 前景从大门到大门生产的起始投入 |
| product_classification_scope | 无粘结剂泥炭压块燃料；CPC 11052 为分类背景 |
| recursive_input_rule | 外购压块作为燃料时要求供应商数据集；内部回流用于物料平衡记录，但不是新投入或共产品。不得递归引用本数据集。 |
| upstream_dataset_requirement | 链接泥炭供应数据，包括开采、土地影响及排水温室气体；链接公用工程、燃料、包装及废物处理。联合国指导文件不将泥炭视为可再生资源；IPCC 湿地指南指出开采区域和排水沟的活动数据要求。 |
| disclosure | 声明前景起点、上游链接及缺口、报告期、泥炭地来源、热供应商或场内燃料路线、回收、空气排放位置和废物去向。仅覆盖工厂的数据集不得标为从摇篮到大门。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | foreground | 纳入接收、预处理、干燥、压制、冷却、成品处理、实际包装、除尘及场内热源。按物质和状态分别记录每项实际发生的额外交换。 | `un-energy-peat-products-2024` |
| boundary_upstream | peat_supply | 在链接的上游数据集中保留开采和排水负荷；不得假设泥炭无负荷或排水排放为零。IPCC 国家清单指南用于上游覆盖要求，不作为工厂排放因子。 | `ipcc-wetlands-2013` |
| boundary_internal | internal_transfers | 工序间泥炭和场内产生的蒸汽属于内部转移。计量用于核对，不重复作为外部投入；外购热量排除场内产生的热量。 |  |
| boundary_use | downstream | 排除客户配送、最终燃料燃烧及消费者灰渣处理；供热服务比较时另行建模。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| prepare | 泥炭接收及预处理 | required | 全部无粘结剂压块生产线 | 前景生产 | 每 1 kg 参考流 |
| dry | 干燥及水分控制 | required | 压制前的水分调节 | 前景生产 | 每 1 kg 参考流 |
| finish | 压制、成品处理及包装 | required | 合格压块生产 | 前景生产 | 每 1 kg 参考流 |
| boiler | 场内热源 | conditional | 场内燃烧燃料供应生产热量 | 前景生产 | 每 1 kg 参考流 |

### 过程：泥炭接收及预处理（`prepare`）

#### 输入

##### 产品流

###### 泥炭原料（`peat_feed`）

始终纳入；外部供应的未成型泥炭。

- inclusion_condition: 始终纳入；外部供应的未成型泥炭。
- 选定流：泥炭 `485febdb-01e0-47ad-8ebe-c500a35669bd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_prepare。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prepare`

###### 预处理电力（`prep_electricity`）

始终纳入；输送、粉碎和筛分。

- inclusion_condition: 始终纳入；输送、粉碎和筛分。
- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_prepare。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prepare`

### 过程：干燥及水分控制（`dry`）

#### 输入

##### 产品流

###### 干燥电力（`dry_electricity`）

始终纳入；风机和干燥机驱动。

- inclusion_condition: 始终纳入；风机和干燥机驱动。
- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_dry。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dry`

###### 外购蒸汽热（`purchased_heat`）

仅在蒸汽热跨越工厂边界购入时纳入；排除内部产生的热量。

- inclusion_condition: 仅在蒸汽热跨越工厂边界购入时纳入；排除内部产生的热量。
- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：高位热值 `93a60a56-a3c8-14da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_dry。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dry`

###### 自来水补给（`tap_water`）

仅在冷却或蒸汽系统补给消耗自来水时纳入。

- inclusion_condition: 仅在冷却或蒸汽系统补给消耗自来水时纳入。
- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_dry。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dry`

#### 输出

##### 基本流

###### 泥炭水分蒸发（`evaporated_water`）

当水分蒸发进入空气时纳入；与液体排水分开。

- inclusion_condition: 当水分蒸发进入空气时纳入；与液体排水分开。
- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_dry，根据实测原料及产品含水率和经核对的水平衡确定蒸发水量。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算 (`calculated_from_collection`)
- 采集协议：`cp_dry`

###### 向空气排放的 PM10（`pm10_air`）

当干燥或搬运产生实测颗粒物排放时纳入；记录实际空气排放位置。

- inclusion_condition: 当干燥或搬运产生实测颗粒物排放时纳入；记录实际空气排放位置。
- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_dry。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dry`

### 过程：压制、成品处理及包装（`finish`）

#### 输入

##### 产品流

###### 压制及成品处理电力（`press_electricity`）

始终纳入；压机、冷却及成品处理设备。

- inclusion_condition: 始终纳入；压机、冷却及成品处理设备。
- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_finish`

###### 聚乙烯包装薄膜（`polyethylene_film`）

仅在销售包装使用聚乙烯薄膜时纳入。

- inclusion_condition: 仅在销售包装使用聚乙烯薄膜时纳入。
- 选定流：聚乙烯包装薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_finish`

#### 输出

##### 产品流

###### 合格压块产出（`briquettes`）

始终纳入；成品处理后合格净质量，不含包装。

- inclusion_condition: 始终纳入；成品处理后合格净质量，不含包装。
- 选定流：泥炭团块 `0035aeea-b20b-4287-abac-d501f59c957f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_finish`

##### 废物流

###### 废弃泥炭细粉（`peat_reject`）

仅在泥炭细粉送出进行废物处理时纳入；内部返工不是交换。

- inclusion_condition: 仅在泥炭细粉送出进行废物处理时纳入；内部返工不是交换。
- 选定流：废弃泥炭细粉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_finish`

### 过程：场内热源（`boiler`）

#### 输入

##### 产品流

###### 天然气燃料（`natural_gas_fuel`）

仅用于供应生产热量的场内天然气燃烧器。

- inclusion_condition: 仅用于供应生产热量的场内天然气燃烧器。
- 选定流：天然气，气态 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

###### 泥炭燃料（`peat_fuel`）

仅在场内燃烧原泥炭供应生产热量时纳入；该质量不得计入 peat_feed。

- inclusion_condition: 仅在场内燃烧原泥炭供应生产热量时纳入；该质量不得计入 peat_feed。
- 选定流：泥炭 `485febdb-01e0-47ad-8ebe-c500a35669bd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

#### 输出

##### 废物流

###### 泥炭燃烧飞灰（`peat_fly_ash`）

仅在泥炭燃烧设备单独收集飞灰时纳入。

- inclusion_condition: 仅在泥炭燃烧设备单独收集飞灰时纳入。
- 选定流：泥炭燃烧飞灰
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

###### 泥炭燃烧底灰（`peat_bottom_ash`）

仅在泥炭燃烧设备单独收集底灰时纳入。

- inclusion_condition: 仅在泥炭燃烧设备单独收集底灰时纳入。
- 选定流：泥炭燃烧底灰
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

##### 基本流

###### 直接化石源二氧化碳（`combustion_co2`）

仅在发生场内燃料燃烧时纳入；披露泥炭碳分类和实际空气排放位置。

- inclusion_condition: 仅在发生场内燃料燃烧时纳入；披露泥炭碳分类和实际空气排放位置。
- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

###### 直接二氧化氮（`combustion_no2`）

当排放二氧化氮时纳入；以二氧化氮当量报告的总氮氧化物不得直接视为纯二氧化氮。

- inclusion_condition: 当排放二氧化氮时纳入；以二氧化氮当量报告的总氮氧化物不得直接视为纯二氧化氮。
- 选定流：向空气排放的二氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

###### 直接一氧化碳（`combustion_co`）

当场内燃烧排放一氧化碳时纳入。

- inclusion_condition: 当场内燃烧排放一氧化碳时纳入。
- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

###### 直接二氧化硫（`combustion_so2`）

当场内燃烧排放二氧化硫时纳入。

- inclusion_condition: 当场内燃烧排放二氧化硫时纳入。
- 选定流：向空气排放的二氧化硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

###### 直接甲烷（`combustion_ch4`）

当场内燃料燃烧排放甲烷时纳入。

- inclusion_condition: 当场内燃料燃烧排放甲烷时纳入。
- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

###### 直接一氧化二氮（`combustion_n2o`）

当场内燃料燃烧排放一氧化二氮时纳入。

- inclusion_condition: 当场内燃料燃烧排放一氧化二氮时纳入。
- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：报告期实测交换量除以合格压块净产量；采用 cp_boiler。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_boiler`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | shared_operations | 首先按生产线计量、称重产量和热源记录拆分。共用供热按实测供热量分配，电力按分表读数分配。记录剩余分配并进行敏感性分析。 | `ghg-product-standard-2011` |
| allocate_rework | peat_reject | 内部细粉回流不获取避免产品信用。废弃细粉及灰渣按废物处理，除非销售记录证明为共产品；优先拆分，再按已证明的物理关系分配；仅在无法建立或使用物理基准时采用披露并说明理由的经济关系。 | `ghg-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

`ghg-product-standard-2011` 第 8 章支持前景活动数据采集和质量评估，第 9 章支持拆分及分配层级。该标准用于温室气体核算；本 PCR 将逐项采集和公开数据质量的方法延伸至水、材料及废物记录。仅知道成品参考质量不足以作为投入或排放的活动数据。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prepare | prepare | 本过程每项交换 | 计量、称重及实验室记录 | 泥炭来源；接收质量；含水率；电力；库存变化；报告日期 | 使用经校准的秤及计量表、可追溯的供应商凭据和代表性含水率检测；按物质、空气介质及方法量化治理后的实际排放。分别保留零值、不发生及缺失数据。 | 按各行使用 kg、MJ、m3 | 每批次和计量周期；代表性排放检测 | 一个完整声明生产年度；披露较短生产周期和季节覆盖 | 指定压块线及可归属的场内服务 | 每 1 kg 参考流 | 校准记录；称重单；检测方法；分配记录；平衡闭合 |
| cp_dry | dry | 本过程每项交换 | 计量、称重及实验室记录 | 进出质量及含水率；电力；外购热量；自来水；液体排水；冷凝水；PM10 检测；采样时间 | 使用经校准的秤及计量表、可追溯的供应商凭据和代表性含水率检测；按物质、空气介质及方法量化治理后的实际排放。分别保留零值、不发生及缺失数据。 | 按各行使用 kg、MJ、m3 | 每批次和计量周期；代表性排放检测 | 一个完整声明生产年度；披露较短生产周期和季节覆盖 | 指定压块线及可归属的场内服务 | 每 1 kg 参考流 | 校准记录；称重单；检测方法；分配记录；平衡闭合 |
| cp_finish | finish | 本过程每项交换 | 计量、称重及实验室记录 | 合格压块净质量；含水率；灰分；低位热值；包装薄膜质量；压制电力；不合格品；库存变化 | 使用经校准的秤及计量表、可追溯的供应商凭据和代表性含水率检测；按物质、空气介质及方法量化治理后的实际排放。分别保留零值、不发生及缺失数据。 | 按各行使用 kg、MJ、m3 | 每批次和计量周期；代表性排放检测 | 一个完整声明生产年度；披露较短生产周期和季节覆盖 | 指定压块线及可归属的场内服务 | 每 1 kg 参考流 | 校准记录；称重单；检测方法；分配记录；平衡闭合 |
| cp_boiler | boiler | 本过程每项交换 | 计量、称重及实验室记录 | 燃料泥炭质量及含水率；气体体积、压力及温度；供热量；燃料碳和硫；每种实测排放物；飞灰；底灰 | 使用经校准的秤及计量表、可追溯的供应商凭据和代表性含水率检测；按物质、空气介质及方法量化治理后的实际排放。分别保留零值、不发生及缺失数据。 | 按各行使用 kg、MJ、m3 | 每批次和计量周期；代表性排放检测 | 一个完整声明生产年度；披露较短生产周期和季节覆盖 | 指定压块线及可归属的场内服务 | 每 1 kg 参考流 | 校准记录；称重单；检测方法；分配记录；平衡闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | 所有清单行 | 将报告期可归属交换总量除以合格压块净质量 kg。briquettes 参考产出准确为 1 kg。 | cp_prepare; cp_dry; cp_finish; cp_boiler | 每 1 kg 参考流的各项数量 |  |
| water_balance | evaporated_water | 蒸发水量为泥炭和补给水中的进水量，减去产品、废弃物、液体排水及外排冷凝水中的水量，再修正库存变化。防止锅炉水分和干燥水分重复计入。 | cp_prepare; cp_dry; cp_finish | 每 1 kg 参考流的蒸发水量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | briquettes | 确认无粘结剂、未经炭化的泥炭块和声明含水率；参考质量排除包装。 | `un-energy-peat-products-2024`; cp_finish |
| quality_upstream | peat_feed; peat_fuel | 披露泥炭开采地理位置、来源时期和排水排放覆盖；不得假设碳中性。 | `un-energy-peat-products-2024`; `ipcc-wetlands-2013` |
| quality_complete | all inventory rows | 核对干物质、水、能源和废弃物。实际额外燃料、排水、包装组件和排放物种分别记录为独立交换，并独立核查身份；不得隐藏在材料总量行中。说明缺失值和未解决的流身份。 | cp_prepare; cp_dry; cp_finish; cp_boiler |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_basis | all inventory rows | 每行须使用一致的 1 kg 合格压块净质量分母、相同报告期和链接采集协议。 |  |
| validate_route | foreground | 核验无粘结剂、产品状态、实际热源路线和公用工程来源区分。场内热量和外购热量不得重复计入同一负荷。 | `un-energy-peat-products-2024` |
| validate_balance | foreground | 要求记录质量和水分核对、废物去向及排放完整性。无法解释的偏差和缺失污染物数量须补充采集，不得用零替代。 |  |
| validate_identity | all inventory rows | 解决或明确披露每项流 UUID 缺口；供应商背景数据须匹配地理、年份、技术和声明状态。不得用煤灰流替代泥炭灰或用一氧化二氮替代二氧化氮。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 无粘结剂泥炭压块生产；明确开采边界的燃料供应链接建模 |
| excluded_use | 含粘结剂混合物、炭化泥炭、栽培基质、碳中性声明、未经下游建模直接比较有效供热 |
| required_metadata | 场址；年份；泥炭来源；含水率；灰分；热值基准；路线；参考单位；上游链接；包装；分配 |
| required_quality_disclosure | 计量及检测覆盖；季节覆盖；不确定性；未解决 UUID；缺失的上游排水数据；缺失的外部强度基准 |
| update_trigger | 泥炭来源、热源路线、含水率规格、产品验收、公用工程供应商或重要排放数据变化 |

## 11. 数据来源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-structure-2025 | official_guidance | CPC Version 3.0 Structure (UNSD), 30 June 2025, rows 443-445. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 分类身份；原始来源保存于 2026-09-10 |
| un-energy-peat-products-2024 | official_guidance | Guidelines for the 2022 United Nations Statistics Division Annual Questionnaire on Energy Statistics, May 2024, p. 8, Peat and Peat products. https://unstats.un.org/unsd/energy/energy-questionnaire-guidelines.pdf | 无粘结剂干燥压制燃料定义；泥炭非可再生资源背景；检索日期 2026-09-30 |
| ipcc-wetlands-2013 | official_guidance | 2013 Supplement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories: Wetlands, 2014 published edition, Chapter 2, p. 2.28. https://www.ipcc-nggip.iges.or.jp/public/wetlands/pdf/Wetlands_Supplement_Entire_Report.pdf | 仅用于上游泥炭开采和排水活动覆盖；未采用排放因子；检索日期 2026-09-30 |
| un-ires-2018 | official_guidance | International Recommendations for Energy Statistics. United Nations, 2018; Chapter IV, paragraphs 4.23 and 4.33–4.38 (printed pp. 44, 46–47). https://unstats.un.org/unsd/energystats/methodology/documents/IRES-web.pdf | 能源单位换算、实测热值与含水率基准；原件检索日期 2026-10-01 |
| ghg-product-standard-2011 | standard | Product Life Cycle Accounting and Reporting Standard. WRI/WBCSD, 2011; Chapters 8 and 9 (printed pp. 47–48 and 63). https://docs.wbcsd.org/2011/09/Product_Life_Cycle_Accounting_Reporting_Standard.pdf | 温室气体前景数据质量、拆分及优先物理关系的分配层级；原件检索日期 2026-09-30 |
