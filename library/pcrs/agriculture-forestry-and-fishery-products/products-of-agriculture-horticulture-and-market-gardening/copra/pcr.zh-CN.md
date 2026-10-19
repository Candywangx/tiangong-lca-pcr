---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.copra
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 椰干

## 1. 范围与适用性

本 PCR 适用于成熟椰子经开壳取肉、干燥稳定化和分级后，在榨油前交接的椰干。必须声明含水率基准、实测终水分、干燥路线、热源、等级和交接点。排除整只鲜椰子、鲜椰肉、椰子油以及榨油后的压榨饼粕。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.copra |
| classification_refs | CPC 3.0: 01492 Copra; mapping relation: exact |
| covered_products | 榨油前的干燥椰肉/椰仁 |
| excluded_products | 整只鲜椰、椰油、压榨饼粕或椰粕 |
| representative_product | 生产者或初级加工交接处的椰干 |
| production_route | 椰子种植、独立采收、开壳取肉、日晒/太阳能/烟熏/热风/窑干或混合干燥、分级 |
| market_state | 稳定干椰肉，默认按湿基报告水分 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 榨油前椰干 |
| How much | 1 kg |
| How well | 实测水分、干燥路线、等级和污染状态已声明 |
| How long or cycle | 一个关联种植期与干燥批次的生产批 |
| reference_flow_link | copra_accepted_output |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Copra `65b49595-596f-42a7-91f4-d3722df073de` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dried kernel; moisture value and basis; drying route and heat source; grade; hand-off; before oil extraction |

数据库行的“鲜品，未加工”路线标签不适用于椰干；上述干燥状态限定信息具有优先效力。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Measure as-received mass and report moisture separately. |
| `moisture_basis` | kernel and copra | mass fraction | % wet basis | Use water mass divided by as-received mass; label and convert dry-basis results. |
| `dry_matter` | material balance | Mass | kg dry matter | as-received mass × (1 − wet-basis moisture fraction). |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | established coconut palms entering the assessed crop period |
| starting_condition_role | avoid repeating plantation establishment |
| product_classification_scope | mature coconuts and internal kernel intermediates leading to copra |
| recursive_input_rule | record purchased same-category material once with upstream dataset and hand-off |
| upstream_dataset_requirement | geography, technology, crop phase, moisture and non-overlap |
| disclosure | crop phase, harvest, drying route, moisture, grade, storage and hand-off |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `before_oil_extraction` | all routes | End at graded dry kernel hand-off; exclude crushing, pressing, extraction, refining and press-cake handling. | `fao-coconut-postharvest-compendium` |
| `separate_harvest` | harvest | Record harvest separately from biological production and conditioning. | `fao-coconut-postharvest-compendium` |
| `drying_gate` | drying | Start at opened nuts or fresh kernel; record route and end at measured stable copra moisture. | `fao-coconut-postharvest-compendium`; `fao-aflatoxin-copra` |
| `route_separation` | drying | Keep sun, solar, smoke, hot-air, kiln and hybrid route energy and output separate before output-weighted aggregation. | `fao-coconut-postharvest-compendium` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `coconut_production` | 椰子种植管理 | required | Always | foreground node | kg output |
| `coconut_harvest` | 椰子采收与田间转运 | required | Always | foreground node | kg output |
| `copra_drying` | 开壳、取肉与干燥 | required | Always | foreground node | kg output |
| `copra_grading` | 椰干分级与交接 | required | Always | foreground node | kg output |

### 过程：椰子种植管理（`coconut_production`）

#### 输入
##### 产品流

###### 尿素肥料投入（`crop_nutrients`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg mature coconuts.

- 归一化基准：每声明的参考流
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`

###### 磷酸一铵肥料投入（`crop_nutrients_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg mature coconuts.

- 归一化基准：每声明的参考流
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`

###### 氯化钾肥料投入（`crop_nutrients_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg mature coconuts.

- 归一化基准：每声明的参考流
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`

###### 施用的牛粪肥投入（`crop_nutrients_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg mature coconuts.

- 归一化基准：每声明的参考流
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`

###### 农业石灰石投入（`crop_nutrients_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg mature coconuts.

- 归一化基准：每声明的参考流
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`

###### 地下水灌溉用水投入（`irrigation_water`）

仅当本过程实际供应地下水灌溉用水时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：地下水灌溉用水
- 流属性/单位：体积 / m3
- 数量规则：计量本过程在声明期间实际使用的地下水灌溉用水数量；只有实际路线不使用时才记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg mature coconuts; zero when inactive.

- 归一化基准：每声明的参考流
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`

###### 中压电力投入（`crop_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg mature coconuts.

- 归一化基准：每声明的参考流
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`

###### 柴油投入（`crop_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg mature coconuts.

- 归一化基准：每声明的参考流
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 成熟整椰子（`mature_coconut`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——成熟整椰子
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg process output.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：per 1,000 kg process output
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 田间残余物和坏果（`field_residue`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：按去向延后确定的残余物流
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg mature coconuts.

- 归一化基准：每声明的参考流
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：per 1,000 kg mature coconuts
  - 基准类型：(`crop_cycle`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流


### 过程：椰子采收与田间转运（`coconut_harvest`）

#### 输入
##### 产品流

###### 来自种植的成熟椰子（`mature_coconut_input`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——成熟整椰子
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg delivered nuts.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_harvest`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1300
  - 单位：kg
  - 基准：per 1,000 kg delivered nuts
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中压电力投入（`harvest_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg delivered nuts.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_harvest`

###### 柴油投入（`harvest_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg delivered nuts.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_harvest`

###### 田间至干燥场运输服务（`field_transport`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的货运服务
- 流属性/单位: Transport work / t km
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg delivered nuts; zero when inactive.

- 归一化基准：每声明的参考流
- 基准类型：（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_harvest`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：t·km
  - 基准：per 1,000 kg delivered nuts; zero when inactive
  - 基准类型：(`transport_service`)
  - 证据类型：推理估算（`reasoned_estimate`）

运输功按实际净运输质量（吨）乘实际载货距离（千米）计算，披露空返和载荷分配；同一承包作业已经包含完整运输负荷时不得再次加入运输服务。

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 已采收整椰子（`harvested_nuts`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——已采收整椰子
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg process output.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_harvest`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：per 1,000 kg process output
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


### 过程：开壳、取肉与干燥（`copra_drying`）

#### 输入
##### 产品流

###### 已采收整椰子（`harvested_nuts_input`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——已采收整椰子
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg ungraded copra.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1500
  - 上限：8000
  - 单位：kg
  - 基准：per 1,000 kg ungraded copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初加工工艺水（`process_water`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的工艺水
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg ungraded copra; zero when inactive.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：per 1,000 kg ungraded copra; zero when inactive
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

单独保留计量水体积，按有记录的密度和条件换算为 kg：kg = m3 × 密度（kg/m3）。同一外供水不得再作为第二项资源取水重复计量。

###### 中压电力投入（`drying_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg ungraded copra by route.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`

###### 柴油投入（`drying_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg ungraded copra by route.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 未分级干椰肉（`ungraded_copra`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——未分级椰干
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：sampled dryer output.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：12
  - 单位：% wet-basis moisture
  - 基准：sampled dryer output
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 干燥不合格物（`drying_reject`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：待记录去向和处理后解析
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg ungraded copra.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg dry matter
  - 基准：per 1,000 kg ungraded copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流


### 过程：椰干分级与交接（`copra_grading`）

#### 输入
##### 产品流

###### 未分级椰干（`ungraded_copra_input`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——未分级椰干
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg accepted copra.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1400
  - 单位：kg
  - 基准：per 1,000 kg accepted copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中压电力投入（`grading_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg accepted copra.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`

###### 柴油投入（`grading_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg accepted copra.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 交接的合格椰干（`copra_accepted_output`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：椰干 `65b49595-596f-42a7-91f4-d3722df073de`
- 流属性/单位：质量 / kg

原参考状态单位说明：质量或适用服务属性 / 声明单位

原始产出计量与核对要求：关联批次的实测或核算数量

- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：one reference flow.

- 归一化基准：每声明的参考流
- 基准类型：（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：one reference flow
  - 基准类型：(`reference_flow`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级椰干（`downgraded_copra`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：按等级与去向延后确定的椰干流
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg accepted copra.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kg
  - 基准：per 1,000 kg accepted copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 分级不合格物（`grading_reject`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：待记录返工、回收或处置去向后解析
- 流属性/单位: Mass / kg
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：per 1,000 kg accepted copra.

- 归一化基准：每声明的参考流
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：per 1,000 kg accepted copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | all nodes | Subdivide by site, crop period, route and lot; use direct measurement first. |  |
| `multi_output` | production and drying | Enumerate accepted, downgraded, husk, shell, residue and waste hand-offs; use dry-matter mass only when physical causality cannot be established. |  |
| `internal_fuel` | husk or shell fuel | Count internal transfer and combustion once; do not also claim sold co-product output. |  |
| `rework` | rejects | Record rework, downgrade, recovery or disposal and incremental burdens once; exclude rejected mass from accepted output. |  |
| `multi_period` | crop and storage periods | Link events to the affected period and prevent double attribution to batch and annual totals. |  |

## 8. 前景数据采集、计算与质量规则

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coconut_production` | `coconut_production` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs；原始汇总与分配：sum by identity then normalize | declared | each lot/run | representative period | each site/route | 每声明的参考流 | calibration, invoices, traceability |
| `cp_coconut_harvest` | `coconut_harvest` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs；原始汇总与分配：sum by identity then normalize | declared | each lot/run | representative period | each site/route | 每声明的参考流 | calibration, invoices, traceability |
| `cp_copra_drying` | `copra_drying` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs；原始汇总与分配：sum by identity then normalize | declared | each lot/run | representative period | each site/route | 每声明的参考流 | calibration, invoices, traceability |
| `cp_copra_grading` | `copra_grading` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs；原始汇总与分配：sum by identity then normalize | declared | each lot/run | representative period | each site/route | 每声明的参考流 | calibration, invoices, traceability |
| `cp_phase1_environment_coverage` | coconut_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖; 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | kernel | 100 × (wet mass − oven-dry mass) / wet mass | wet and dry sample mass | % wet-basis moisture | `fao-coconut-postharvest-compendium` |
| `calc_dry_matter` | lots | mass × (1 − moisture/100) | mass and moisture | kg dry matter |  |
| `calc_transport` | field transfer | tonnes × loaded distance | mass, distance | t·km |  |
| `calc_route_mix` | route aggregate | output-weighted sum of route inventories | route inventory and output | aggregate |  |
| `husk_shell_identity_and_fate` | `copra_drying` | 对于本作业原有 husk_shell 采集角色，建立交换前须确定实际物理形态、物种／材料、组成、状态及供给／处理边界。与该角色相关且实际使用／产生的各种种子批次、移栽苗、根冠、插条、幼虫阶段、配方、包衣、保藏剂或分离残余物须各有具体卡片；这些例子是备选，不是必需配方。保留原采集记录和路线特定来源证据。计数种植记录匹配按质量的供应数据时，须使用实测或供应商支持的单位质量；计数与质量是关联属性，不是两次采购。不得合并独立果壳／外皮或不同药剂；真实混合物流须有组成与接收者证据且只计一次。完整性通过前，记录每项适用数量和原生单位、链接相容的已核验 UUID 或明确未解析身份，保留库存／退回归属，并将可归属原始数量按合格参考产出归一化一次。缺失记录不是零，原聚合范围不是单项投入默认值。 | `cp_copra_drying` | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm dried kernel before oil extraction and required qualifiers. | lot, moisture and dispatch records |
| `dq_route` | drying | Separate route, heat source, smoke contact and run mode. | dryer logs |
| `dq_balance` | processes | Reconcile as-received and dry-matter inputs, outputs, rejects and losses. | mass-balance sheet |
| `dq_completeness` | conditional cards | Report evidenced zero when inactive. | completeness review |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference | Fail whole fresh coconut, fresh meat, oil, press cake or meal and any fresh/unprocessed description lacking dry-state qualifiers. | `fao-coconut-postharvest-compendium` |
| `validate_moisture` | copra | Require measured value, basis, method and lot; investigate values outside 5–12% wet-basis screen. | `fao-coconut-postharvest-compendium`; `fao-aflatoxin-copra` |
| `validate_route` | drying | Require route, heat source, smoke contact, time and route-specific energy. | `fao-coconut-postharvest-compendium` |
| `validate_nutrients` | 养分投入 | 每一种实际使用的肥料或改良剂须分别建立原子产品交换，记录数量、组成及经核实或明确待核实的身份。 |  |
| `validate_bindings` | cards | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_rework` | rejects | Require destination and keep rejects out of accepted output. |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground copra production and primary-conditioning dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | oil-mill input systems requiring representative dried kernel |
| excluded_use | fresh coconut, food coconut, coconut oil, press cake or meal |
| required_metadata | geography; crop phase; drying route; heat source; moisture method and basis; grade; hand-off; allocation; destinations |
| required_quality_disclosure | coverage, measurement, sampling, route shares and mass balance |
| update_trigger | change in identity, hand-off, drying technology, moisture rule, route mix or primary data |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-coconut-postharvest-compendium` | official_guidance | FAO, Coconut: Post-harvest Operations, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Coconut.pdf | identity, drying route, moisture, process boundary and quality |
| `fao-aflatoxin-copra` | official_guidance | FAO, HACCP Manual, Example 3: Copra cake and meal, https://www.fao.org/4/y1390e/y1390e0l.htm | route-dependent safe moisture, mould prevention and validation |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
