---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-for-forage-and-silage
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 饲草与青贮用玉米

## 1. 范围与适用性

本PCR涵盖拟作饲草或后续青贮制造的新鲜全株玉米的受管理生产、收获和装载，边界终止于农场门交接。范围不含青贮、发酵、储存、干草或人工干燥、打捆、饲料配制、下游运输和动物饲喂。数据集必须代表实际田块季和收获批次；雨养与灌溉生产以及具有实质差异的收获技术应在汇总前分层。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-for-forage-and-silage |
| classification_refs | CPC 3.0: 0 > 01 > 019 > 0191 > 01911; mapping relation: narrower |
| covered_products | 收获后拟作饲草或后续青贮制造的新鲜未加工全株玉米 |
| excluded_products | 玉米籽粒；甜玉米；玉米种子；已青贮或发酵玉米；干草或干燥饲草；配合饲料；作为独立产品的谷物秸秆 |
| representative_product | 青贮前农场门新鲜全株玉米 |
| production_route | 受管理的一年生田间生产，随后切割/切碎、装载并在农场门交接；雨养或灌溉田间路线及声明的收获技术仅能作为分别记录的分层并存 |
| market_state | Production mix, at farm gate的新鲜未加工农产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 内容 | 用于饲草或后续青贮制造的合格新鲜全株玉米 |
| 数量 | 1,000 kg fresh matter |
| 质量要求 | 声明全株水分或干物质、杂交种/品种、成熟或收获阶段、杂质、损伤和验收规格 |
| 时间或周期 | 一个一年生作物周期及其关联收获批次 |
| reference_flow_link | fresh_forage_maize |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | Maize for forage and silage `719047d6-29cc-4b2c-b61e-0bb407d6eeaf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定条件 | Production mix, at farm gate；Fresh, unprocessed produce；地理；作物年份；田块/批次覆盖；杂交种或品种；收获阶段；全株水分或干物质基准；雨养或灌溉路线；收获技术；合格与替代去向 |

## 4. 计量与单位规则
| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在农场门交接时计量鲜质量；报告同一批次有代表性的全株水分或干物质比例。 |
| `moisture_alignment` | 所有作物生物量交接 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg fresh matter; kg dry matter | 在声明水分基准前不得比较或汇总鲜质量记录；干物质按湿质量乘以干物质比例换算。 |
| `area_normalization` | 田间与收获记录 | Area | ha | 按田块季或收获批次采集，再按合格参考质量归一化一次；保留面积基数值以供审计。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 玉米作物周期开始、投入种子和本周期管理投入之前的已准备农业田块 |
| starting_condition_role | 前景进入条件；为本作物实施的前茬与整地负荷应计入，否则予以披露 |
| product_classification_scope | CPC 3.0 `01911` |
| recursive_input_rule | 若同类别新鲜饲草玉米重新进入本边界，应作为带供应数据集的外部产品投入记录，不得递归重建其种植过程。 |
| upstream_dataset_requirement | 每项外购产品或服务投入使用具有地理与技术代表性的上游数据集，或明确留待前景选择时解析。 |
| disclosure | 声明田块准备归属、前茬、耕作、雨养/灌溉路线、收获技术、水分基准、合格与拒收去向以及任何排除操作。 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 受管理田间生产 | 计入一个田块季归属于本作物的整地、播种、养分与作物保护管理、灌溉、田间能源、田间直接排放和田间生物量转交。 | `ipcc-2019-managed-soils`; `fao-crop-water-needs` |
| `boundary_harvest` | 收获节点 | 将切割或切碎、装载、实测收获损失及合格、降级或弃置去向作为独立节点建模，因为其设备、批次记录、损失和交接不同于作物生长。 | `fao-forage-maize-harvest-stage`; `mass-balance-identity` |
| `boundary_fresh_gate` | 参考产品 | 终止于新鲜未加工的农场门交接。排除青贮、发酵、储存、干燥、打捆、饲料制造、下游运输和饲喂。 | `fao-forage-maize-harvest-stage` |
| `boundary_route_strata` | 替代路线 | 以受管理田间生产为父活动。灌溉路线增加输送水、泵送能源和灌溉记录；雨养路线省略这些交换。收获技术改变机械能源、切割/切碎状态和损失记录。互斥路线分层在加权汇总前保持分离。 | `fao-crop-water-needs`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 受管理田间生产 | required | 一个实际田块季；声明雨养或灌溉分层 | 从已准备田块至可收获田间作物的受管理一年生生物生产，并具有灌溉替代生物生产路线差异 | 播种公顷及关联田间鲜生物量 |
| `harvest_handoff` | 收获与农场门交接 | required | 一个关联收获批次和一种声明的收获技术 | 独立切割/切碎、装载、去向分流及新鲜农场门交接，并具有所选机械的替代技术路线差异 | 1,000 kg 合格新鲜产品 |

### 过程：受管理田间生产 (`field_production`)

#### 输入
##### 产品流

###### 播种用玉米种子 (`maize_seed`)

记录跨入田间生产节点的外购或留用可育玉米种子；保留杂交种或品种、种子处理、发芽率、种子质量和播种面积。

- 选定流: Corn Seeds `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- 流属性/单位: Mass / kg
- 数量规则: 实测播种种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源:
- 数量范围: 暂定种子质量筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/ha crop cycle
  - 基准: seed mass per planted hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 尿素肥料投入（`nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 磷酸一铵肥料投入（`nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 氯化钾肥料投入（`nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 施用的牛粪肥投入（`nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

###### 农业石灰石投入（`nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 灌溉水供应 (`irrigation_water`)

仅对灌溉田块分层记录输送的灌溉水；雨养田块记录为零且不创建交换。

- 选定流: 灌溉水供应
- 流属性/单位: Volume / m3
- 数量规则: 计量或计算的田间供水量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的灌溉面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_irrigation`
- 来源: `fao-crop-water-needs`

灌溉须区分作物蒸散需求、净灌溉量与总供水／取水量，核对有效降雨、土壤水库存变化、毛管补给、施用效率及实际供水边界，采用场址计量或有记录的水平衡。通用作物需水表不能确立通用灌溉上限。

###### 中压电力投入（`field_machinery_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_operations`

###### 柴油投入（`field_machinery_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_operations`

###### 田间及灌溉设备用电 (`field_electricity`)

记录泵、控制设备或其他田间设备在适用时的计量用电；未启用路线不创建交换。

- 选定流: 电力供应
- 流属性/单位: Energy / kWh
- 数量规则: 归属于田块和作物周期的计量电量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_operations`
- 来源:
- 数量范围: 暂定用电筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kWh/ha crop cycle
  - 基准: field and irrigation electricity per planted hectare when electrically powered equipment is used
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 基本流

###### 农业用地占用 (`land_occupation`)

记录玉米作物周期占用的农业用地面积和持续时间，不包括声明时间边界以外的无关轮作。

- 选定流: arable `b88d3b6d-229e-477e-bce1-e16376f75c7b`
- 流属性/单位: Area*time / ha*a
- 数量规则: 播种面积乘以占用持续时间
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 根据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_field_and_lot_trace`
- 来源:
- 数量范围: 作物周期土地占用筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: ha*a/ha crop cycle
  - 基准: occupation duration per hectare of planted maize
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

#### 输出
##### 产品流

###### 转交收获的田间饲草玉米 (`standing_forage_crop`)

记录从受管理生产内部转交至独立收获节点的新鲜田间作物生物量，不包括未收获残体和损失。

- 选定流: 田间生长的饲用玉米生物质
- 流属性/单位: Mass / kg fresh matter
- 数量规则: 按收获产出、实测收获损失和去向分流计算
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 根据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `mass-balance-identity`
- 数量范围: 暂定田间生物量筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150000
  - 单位: kg fresh matter/ha crop cycle
  - 基准: standing fresh biomass transferred to harvest per planted hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 基本流

###### 管理土壤向空气的直接氧化亚氮排放 (`direct_n2o`)

采用披露的IPCC层级和田块特定氮活动数据计算管理土壤的直接氧化亚氮排放。

- 选定流: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 数量规则: 依据采集的氮活动数据和所选排放因子进行IPCC计算
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 根据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 暂定直接氧化亚氮筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg N2O/ha crop cycle
  - 基准: direct N2O emitted from managed soil per planted hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 田间氮向空气的氨排放 (`ammonia_to_air`)

按氮源和施用事件记录或计算氨挥发；保留报告的氮基或物质基准。

- 选定流: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 数量规则: 以NH3表示的场址模型或实测损失；必要时按17/14将NH3-N换算为NH3
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 根据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 暂定氨损失筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 200
  - 单位: kg NH3/ha crop cycle
  - 基准: ammonia mass as NH3 per planted hectare after any disclosed nitrogen-basis conversion
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 田间氮向水体的硝酸盐排放 (`nitrate_to_water`)

按受纳水体分区记录或计算硝酸盐淋失或径流，并保留数量是硝酸盐还是硝酸盐氮。

- 选定流: 排放至水体的硝酸根
- 流属性/单位: Mass / kg NO3-
- 数量规则: 保留受纳分区和基准的场址模型或测量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 根据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 暂定硝酸盐损失筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg NO3 or NO3-N/ha crop cycle
  - 基准: reported nitrate loss per planted hectare with substance basis disclosed
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

最终交换质量为 kg NO3-；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 62/14，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### 向水体的磷排放 (`phosphorus_to_water`)

在可得时分别记录实测或模拟的溶解态和颗粒态磷损失，并注明受纳分区和化学基准。

- 选定流: 排放至水体的磷
- 流属性/单位: Mass / kg P or reported phosphate basis
- 数量规则: 保留形态与受纳分区的场址模型或测量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的播种面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 根据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源:
- 数量范围: 暂定磷损失筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg P or reported phosphate/ha crop cycle
  - 基准: reported phosphorus loss per planted hectare with chemical basis disclosed
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

物质释放必需记录：依据实际记录的制剂及所选归趋方法推导每项适用的作物保护物质释放。每一种已识别物质和接收区室分别建立交换，保留化学形态及物质质量基准。物质或区室未解析属于完整性缺口，不得用通用基本流或假定为零替代。

### 过程：收获与农场门交接 (`harvest_handoff`)

#### 输入
##### 产品流

###### 收获节点接收的田间饲草玉米 (`standing_crop_input`)

按同一田块和作物周期基准接收田间生产转交的田间作物内部流。

- 选定流: 田间生长的饲用玉米生物质
- 流属性/单位: Mass / kg fresh matter
- 数量规则: 等于关联的standing_forage_crop产出
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的收获面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 根据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `mass-balance-identity`
- 数量范围: 关联田间生物量筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150000
  - 单位: kg fresh matter/ha crop cycle
  - 基准: internal standing biomass received per harvested hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 中压电力投入（`harvest_machinery_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每公顷一个作物周期的收获面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_operations`

###### 柴油投入（`harvest_machinery_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每公顷一个作物周期的收获面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_operations`

#### 输出
##### 产品流

###### 农场门新鲜未加工饲草玉米 (`fresh_forage_maize`)

记录田间收获和装载后、青贮发酵、储存、干燥或饲料制造前的合格新鲜全株玉米。本流为定量参考产出。

- 选定流: Maize for forage and silage `719047d6-29cc-4b2c-b61e-0bb407d6eeaf`
- 流属性/单位：质量 / kg

原参考状态单位说明：Mass / kg fresh matter

原始产出计量与核对要求：农场门交接时实测的合格新鲜质量

- 数量规则：1000 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的收获面积；换算至1000 kg参考流.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `fao-forage-maize-harvest-stage`
- 数量范围: 暂定鲜产量筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150000
  - 单位: kg fresh matter/ha crop cycle
  - 基准: accepted fresh unprocessed forage maize at farm gate per harvested hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 送往其他声明用途的降级收获生物量 (`downgraded_biomass`)

记录不符合参考产品规格但送往其他声明用途的收获生物量。其不计入合格参考产出，且必须声明去向。

- 选定流: 降级的已收获玉米生物质
- 流属性/单位: Mass / kg fresh matter
- 数量规则: 按去向实测的降级质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的收获面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `mass-balance-identity`
- 数量范围: 暂定降级产出筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150000
  - 单位: kg fresh matter/ha crop cycle
  - 基准: downgraded harvested biomass per harvested hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

###### 未收集或弃置的收获生物量 (`harvest_loss_residue`)

记录未被接收或转往其他产品用途的切割或损伤生物量，包括其田间留存、收集或处置去向。

- 选定流: 采收生物质损失或残余物
- 流属性/单位: Mass / kg fresh matter
- 数量规则: 按去向实测或抽样的互斥损失质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每公顷一个作物周期的收获面积.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `mass-balance-identity`
- 数量范围: 暂定收获损失筛查
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50000
  - 单位: kg fresh matter/ha crop cycle
  - 基准: uncollected or discarded fresh biomass per harvested hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


## 7. 分配与共产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 田间与收获节点 | 优先按田块季、灌溉路线和收获技术细分；实测负荷仅按合格新鲜产出归一化一次。 | `mass-balance-identity` |
| `allocation_output_destinations` | 合格、降级及弃置生物量 | 将合格参考产出、降级产品和废物/损失作为互斥去向。若降级生物量是独立预期共产品，在有因果关系时采用披露的研究特定干质量分配；否则采用并论证其他方法。无有据替代主张时不得给未收集残体抵扣。 | `mass-balance-identity` |
| `allocation_run_period` | 田块、运行和批次 | 采用单一期间的作物周期边界。将投入、产出、清洁和换线事件关联到田块季或收获批次；共享机械负荷按实测面积、运行时间或吞吐量分配一次，并防止跨分层重复计算。 | `mass-balance-identity` |
| `allocation_rejects` | 不合格与拒收生物量 | 本新鲜农场门路线无边界内返工环。每项不合格质量须在有据复评后转为合格、降级替代用途、田间留存或处置；保留既有负荷，并仅在最终去向计量质量。 | `mass-balance-identity` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_production` | 种子、养分和作物保护投入 | 发票、田间日志和产品分析 | 田块；日期；产品；配方；数量；面积；养分或有效成分含量 | 按田块核对采购和施用记录；原始汇总与分配：每种实际产品仅汇总一次；保留组成 | kg; L; m3; ha | 每次施用 | 作物周期 | 每个田块 | 每声明的参考流 | 发票、标签、分析和签字日志 |
| `cp_irrigation` | `field_production` | 输送灌溉水 | 水表或泵日志 | 田块；事件；体积；水源；运行时间；灌溉面积 | 优先水表；否则采用有据泵流量计算；原始汇总与分配：汇总输送体积；雨养分层为零 | m3; h; ha | 每次事件 | 作物周期 | 每个灌溉田块 | 每声明的参考流 | 水表校准或泵曲线 |
| `cp_energy_operations` | all | 田间与收获能源 | 燃料票据、仪表和机械日志 | 过程；田块/批次；载体；数量；运行时间；面积或吞吐量 | 核对采购、仪表和运行时间；原始汇总与分配：按有据因子换算并仅分配一次 | L; kg; kWh; MJ; h | 每次作业 | 作物周期至交接 | 田块与收获批次 | 每声明的参考流 | 发票、仪表校准和机械日志 |
| `cp_field_and_lot_trace` | all | 面积、路线和批次关联 | 田块GIS/记录和批次登记 | 田块；面积；日期；作物；路线；收获批次；去向 | 在同一兼容路线/产品/状态内，先逐田块核算应归属原始总量。汇总最终强度=应归属原始数量之和×声明参考量/匹配最终合格产出之和。来源为每公顷率 e_h、y_h 时，先以 e_h×面积、y_h×面积还原原始总量，不能再对田块总量作面积加权。每产品强度按匹配产出加权，不能按面积或不加权平均。原分配仅执行一次，保留期间/吞吐和全部来源单位换算，不兼容路线分开。 | ha; date; id | 田块季与批次 | 作物周期至交接 | 全部代表田块 | 每声明的参考流 | 地图、田块登记和批次票据 |
| `cp_field_emissions` | `field_production` | 管理土壤和施用物质排放 | 计算表、模型或测量 | 按来源的氮；残体氮；肥料形态；事件；天气；土壤；因子；有效物质；环境分区 | 采用披露的IPCC层级及有据场址模型或测量；原始汇总与分配：汇总前按田块和物质计算 | kg N; kg substance; ha | 每次事件及作物周期 | 作物周期 | 每个田块分层 | 每声明的参考流 | 因子版本、模型输入和计算审计 |
| `cp_harvest_mass_balance` | `harvest_handoff` | 田间投入、合格、降级和损失产出 | 秤、产量监测器、水分样品和去向票据 | 田块；批次；技术；投入估计；合格质量；降级质量；损失样品；水分；去向 | 称量产出并对损失和全株水分进行代表性抽样；原始汇总与分配：水分对齐并核对互斥去向 | kg; %; ha | 每个田块和批次 | 收获至即时农场门交接 | 每个收获批次 | 每声明的参考流 | 秤校准、抽样计划和闭合工作表 |

### 计算规则

| rule_id | 适用于 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | 所有清单行 | normalized amount = stratum amount × 1,000 / accepted fresh mass | 分层数量；合格鲜质量 | 每1000 kg参考流数量 | `mass-balance-identity` |
| `calc_dry_matter` | 生物量比较 | dry matter = fresh mass × (1 − moisture fraction) | 鲜质量；湿基水分比例 | 干物质质量 | `mass-balance-identity` |
| `calc_n2o` | 管理土壤 | 对采集的氮投入采用披露的IPCC层级，必要时按44/28将N2O-N换算为N2O。 | 氮活动数据；排放因子；间接损失参数 | kg N2O | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | `harvest_handoff` | 在同一水分基准和声明不确定度内，田间生物量=合格+降级+弃置/未收集+实测库存变化 | 关联质量、水分和去向 | 质量闭合 | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用于 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留杂交种/品种、作物年份、收获阶段、全株水分或干物质、验收规格和新鲜未加工交付门。 | 田块登记、样品和批次票据 |
| `dq_completeness` | 作物周期与收获 | 覆盖全部代表田间作业、施用、灌溉事件、收获作业及互斥生物量去向。 | 田块至批次追溯及完整性核对 |
| `dq_representativeness` | 汇总数据集 | 报告地理、作物年份、田块、路线份额、收获技术、水分基准、合格产量和汇总权重。 | 元数据和分层索引 |
| `dq_uncertainty` | 计算与模拟行 | 保留因子版本、模型输入、测量不确定度、缺失数据替代及任何数量范围例外的原因。 | 计算工作簿和QA日志 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | 要求固定产品、质量属性和单位组UUID、1000 kg参考数量及全部必需限定条件。 |  |
| `validate_gate` | 系统边界 | 拒绝在新鲜农场门参考过程内包含青贮、发酵、储存、干燥、打捆、饲料制造、下游运输或饲喂的清单。 | `fao-forage-maize-harvest-stage` |
| `validate_routes` | 田间与收获分层 | 每个分层声明雨养或灌溉状态及一种收获技术；保持互斥替代路线分离，并纳入其有据清单与记录差异。 | `fao-crop-water-needs`; `mass-balance-identity` |
| `validate_nutrient_cardinality` | `field_production` | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_batch_period` | 田块、作业和收获批次 | 将投入、产出、清洁和换线关联至一个田块季或收获批次，并按实测面积、运行时间或吞吐量对共享负荷分配一次。 | `mass-balance-identity` |
| `validate_reject_routing` | 不合格生物量 | 要求一个互斥的合格、降级、田间留存或弃置去向；不得将未解析拒收物计为合格产出，也不得创建未记录的返工环。 | `mass-balance-identity` |
| `validate_mass_balance` | `harvest_handoff` | 在共同水分基准和声明不确定度内核对田间投入、合格产品、降级产品、废物/损失及库存变化。 | `mass-balance-identity` |
| `validate_ranges` | 所有流卡 | 逐条检查已提供范围的上下限、单位、基准、证据及双语一致性。任何强制界限均须有相容定量证据；无支持界限时保留实测数量并明确报告范围筛查不可用，不得编造范围或宣称该项检查完整。调查偏离，不以范围覆盖实测值。 | |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门新鲜饲草玉米前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` 经代表性审查后 |
| allowed_use | 需要农场门新鲜未加工全株玉米作为饲草或独立建模青贮过程投入的LCA和足迹 |
| excluded_use | 玉米籽粒、种子、甜玉米、已青贮/发酵材料、干燥饲草、配合饲料或未披露下游加工 |
| required_metadata | 地理；作物年份；田块/批次；杂交种/品种；前茬；耕作；雨养/灌溉路线；收获技术与阶段；水分/干物质；验收规格；去向；分配 |
| required_quality_disclosure | 初级数据覆盖；校准；缺失数据；模型与因子版本；路线权重；质量平衡；不确定度；数量范围例外 |
| update_trigger | 地理、作物年份、杂交种、管理、灌溉份额、收获技术/阶段、水分规格、去向、分配或排放方法变化 |

## 11. 数据来源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-forage-maize-harvest-stage` | official_guidance | FAO, Silage from tropical cereals and forage crops, https://www.fao.org/4/x8486e/x8486e0q.htm | 玉米饲草语境与收获阶段证据；青贮仍在本PCR边界之外 |
| `fao-crop-water-needs` | official_guidance | FAO, Crop Water Needs, Chapter 3, https://www.fao.org/4/s2022e/s2022e07.htm | 玉米季节作物需水范围与当地作物系数语境 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤氧化亚氮计算和氮活动数据 |
| `mass-balance-identity` | method_factor | 质量守恒应用于水分对齐的田间生物量、合格产品、降级生物量、损失和库存变化 | 交接、质量闭合、去向互斥、分配和拒收路由 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
