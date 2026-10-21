---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.jellyfish-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水母，活、鲜或冷藏

## 1. 范围与适用性

本 PCR 用于构建以活、鲜或冷藏状态上市的水母前景数据包。它覆盖声明的捕捞或采集、船上分选、发生时的沥水、活体暂养或冷藏保持、上岸、分级、发生时的清洗、包装、加冰或温度控制、发运和在声明边界的放行。

覆盖产品包括以活、鲜或冷藏状态销售，并仍属于未加工初级水生无脊椎动物产品的食用或工业用途水母。排除产品包括观赏用活水母，冷冻水母，熏制、干制、盐渍、盐水浸渍、明矾腌制、发酵、熟制、罐装、预制、保藏、提取或其他加工水母产品，以及水母类别以外的其他水生无脊椎动物。

数据集必须保留短货架期湿产品状态。如果盐渍、明矾处理、干制、冷冻或其他保藏改变了产品身份，这些过程属于其他 PCR，或必须作为该参考产品之外的下游加工建模。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.jellyfish-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04530`, `Jellyfish, live, fresh or chilled` |
| covered_products | 作为未加工初级水生无脊椎动物产品被捕捞、采集、上岸、分选、活体暂养、鲜售或冷藏的水母 |
| excluded_products | 观赏用活水母；冷冻水母；熏制、干制、盐渍、盐水浸渍、明矾腌制、发酵、熟制、罐装、预制、保藏、提取或其他加工水母；非水母类水生无脊椎动物；作为单独产品的残余物、修整物、废水或剔除生物量 |
| representative_product | 在声明物种或物种组、捕捞区域、产品状态、湿质量基准、处理条件、包装状态和声明边界下的活、鲜或冷藏水母 |
| production_route | 野外捕捞或采集、船上分选或沥水、上岸、分级、发生时的清洗、活体或冷藏暂养、包装、加冰或温控，以及声明边界放行 |
| market_state | 已声明物种、捕捞区域、渔具或采集方法、上岸条件、沥水或湿质量基准、产品温度或活体暂养条件、包装状态和边界的活、鲜或冷藏水母 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为活、鲜或冷藏初级产品的水母 |
| How much | 1 kg |
| How well | 声明物种或物种组、活/鲜/冷藏状态、湿或沥水质量基准、捕捞区域、处理条件、包装状态和边界 |
| How long or cycle | 一个捕捞航次、上岸批次、处理批次、销售批次或报告期，并归一化至可销售水母产出 |
| reference_flow_link | 见下方参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种或物种组；捕捞或采集区域；野外捕捞、采集或声明生产路线；渔具或采集方法；上岸地点；活、鲜或冷藏状态；湿、沥水、整只、伞部、口腕或声明产品基准；可获得时的水分或沥水基准；暂养时长和温度或活体暂养条件；包装状态；声明边界；已知时的食品、饲料、工业或其他声明用途；捕捞文件、许可、可追溯性和未解决的 Tiangong UUID 替代项 |

构建前景数据包时，`Required qualifiers` 中列出的项目必须在数据集元数据、过程说明、参考流注释、产品描述或等效字段中声明。

质量是主要参考基准。篮、桶、周转箱、袋、箱、计数、体积或航次记录只有在保留净质量、皮重、沥水方法、产品状态和抽样方法时，才可使用。

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明活、鲜或冷藏产品形态下的水母 kg。 |
| `product_state_identity` | all datasets | Product state and handling evidence | declared records | 产品记录必须证明活、鲜或冷藏状态，不得将冷冻、干制、盐渍、盐水浸渍、明矾腌制、预制或保藏水母与参考产品混合。 |
| `wet_drained_mass_basis` | live, fresh, chilled, washed, drained, or iced records | Mass and drainage basis | kg | 产品质量必须说明湿整只质量、沥水质量、伞部质量、口腕质量、不含冰质量或其他声明基准。只有在有实测沥水或得率证据时才可换算。 |
| `catch_lot_identity` | harvest, landing, sorting, and sales records | Mass, count, or volume | kg, item, basket, tub, crate, or m3 | 捕捞记录必须保留物种或物种组、捕捞区域、渔具或采集方法、船舶或采集者、航次、批次、上岸日期、接受质量、剔除质量和已知时的预期用途。 |
| `water_temperature_and_holding` | washing, live holding, chilled holding, and discharge | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | 保留水源、受控水量、相关盐度、温度、暂养时间、沥水和排放基准。环境海水属于边界条件，除非在前景控制下被泵送、处理、交换或排放。 |
| `energy_fuel_and_ice_inventory` | vessel operation, landing, live holding, chilling, ice making or use, cold rooms, and dispatch | Energy, fuel, or mass | kWh, MJ, L, or kg | 在归一化到参考流前记录电力、燃料、冰和能源载体的原始单位。 |
| `packaging_basis` | baskets, tubs, crates, sacks, liners, labels, insulated containers, ice boxes, and pallets | Mass or item count | kg or item | 包装和容器必须在归一化前保留材料类型、件数、皮重或装填质量、重复使用率和目的地。 |

## 5. 系统边界

默认边界覆盖前景控制的水母捕捞或采集，直到声明的上岸、处理、发运、包装场或交付边界：

1. 捕鱼、捕捞或采集，包括船舶或采集者活动、渔具作业、捕获物处理、兼捕或非目标物料处理，以及发生时的船上沥水或分选。
2. 上岸、分级、发生时的清洗、活体暂养或冷藏暂养、沥水、剔除、残余物处理、温度控制、加冰、包装和声明边界放行。
3. 当参考流是超过上岸、发运或包装场边界的交付产品时，包括交付到声明边界。

资本品和长期船舶、渔具、暂养池、冷库和基础设施只有在声明数据包范围要求时才纳入。购买的冰、包装、电力、燃料、水、活体暂养氧气和运输服务需要上游数据集，除非同一运营方控制并在前景包中报告其生产。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_jellyfish_harvest_or_collection_lot |
| starting_condition_role | wild_aquatic_invertebrate_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04530`, `Jellyfish, live, fresh or chilled` |
| recursive_input_rule | 作为活、鲜或冷藏市场产品投入的捕捞或采集水母，记录为声明捕捞或采集批次，并披露区域、渔具、船舶或采集者、物种、产品状态和质量基准，而不是递归记录为成品参考产品输出 |
| upstream_dataset_requirement | 捕鱼或采集航次记录、供应方捕捞记录、上岸文件、许可或可追溯性证据，以及前景控制之外的包装、冰、燃料、电力、水和交付数据集 |
| disclosure | 披露物种或物种组、捕捞或采集区域、渔具或采集方法、船舶或采集者、上岸地点、活/鲜/冷藏状态、湿或沥水质量基准、分选和剔除、清洗或活体暂养水、温度或用冰、暂养时长、包装状态、已知时的预期用途、声明边界，以及未解决的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| harvest_collection_and_landing | 捕捞、采集和上岸 | required | 必须声明捕捞或采集批次 | foreground production | 进入活/鲜/冷藏处理的上岸水母批次 |
| sorting_holding_chilling_and_packout | 分选、暂养、冷藏和包装出货 | required |  | foreground conditioning and gate release | 可销售活、鲜或冷藏水母 |
| delivery_to_declared_gate | 交付到声明边界 | conditional | 当参考流是超过上岸、发运或包装场边界的交付产品时纳入 | foreground transport | 声明边界处的已交付水母 |

### Process: 捕捞、采集和上岸 (`harvest_collection_and_landing`)

#### Inputs

##### Product flows

###### 捕捞燃料、渔具服务和采集投入 (`fishing_fuel_gear_service_and_collection_inputs`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`；路线特定渔具、船舶服务、篮、桶、海水、冰或采集投入按前景记录选择
- 流属性/单位：燃料、质量、能量、体积、件数或服务量 / L、kg、MJ、kWh、m3、item 或 service unit
- 数量规则：按航次或批次计量或分配船舶燃料、渔具使用、采集投入、船上冰或水和上岸支持
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个捕捞航次或上岸批次，并在归一化后每 1,000 kg 可销售参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_collection_and_landing_records`
- 来源：`fao-jellyfish-commodity-profile`, `brotz-pauly-jellyfish-fisheries-2017`
- 数量范围：捕捞投入暂定筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10000
  - 单位：L, kg, MJ, kWh, m3, item, or service unit/1,000 kg marketable product
  - 基准：船舶、渔具、采集、船上水和上岸支持投入的宽泛首轮检查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 兼捕、剔除水母、沥水和上岸残余物 (`bycatch_rejected_jellyfish_drainage_and_landing_residues`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；路线特定兼捕、非目标生物量、剔除水母、沥水、废水和残余物流按场址记录选择
- 流属性/单位：质量、体积或尾数 / kg、m3 或 item
- 数量规则：计量剔除水母、兼捕、非目标物料、沥水或废水、残余物质量、去向、处置路线、回收路线和受纳环境
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个捕捞航次或上岸批次，并在归一化后每 1,000 kg 可销售参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_residue_bycatch_and_discharge_records`
- 数量范围：上岸残余物暂定筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg residue/kg accepted landed jellyfish
  - 基准：捕捞和上岸阶段剔除、兼捕、沥水和残余物的宽泛检查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### Outputs

##### Product flows

###### 已接受上岸水母 (`accepted_landed_jellyfish`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- 流属性/单位：质量 / kg
- 数量规则：分选、剔除、沥水和批次识别后的已接受上岸水母计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：进入活、鲜或冷藏处理的已接受上岸水母
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_collection_and_landing_records`
- 数量范围：上岸接受量质量平衡 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：kg accepted landed jellyfish/kg marketable product
  - 基准：最终分选和沥水前上岸至可销售产品质量平衡的宽泛检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### Process: 分选、暂养、冷藏和包装出货 (`sorting_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### 进入最终处理的已接受水母 (`accepted_jellyfish_entering_final_handling`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- 流属性/单位：质量 / kg
- 数量规则：计量进入分选、清洗、沥水、活体暂养、冷藏或包装的已接受水母
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packout_product_state_and_mass_records`
- 来源：`codex-cxc-52-2003`, `fao-jellyfish-commodity-profile`
- 数量范围：最终处理投入 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：kg accepted jellyfish/kg marketable product
  - 基准：湿、沥水、活、鲜或冷藏产品得率的宽泛检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水、冰、电力、包装和活体暂养投入 (`water_ice_electricity_packaging_and_live_holding_inputs`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Packaging, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`；路线特定冰、海水、氧气、容器、内衬、制冷剂服务或托盘按场址记录选择
- 流属性/单位：质量、体积、能量或件数 / kg、m3、kWh 或 item
- 数量规则：计量清洗或活体暂养水、冰、电力、氧气、包装、冷藏、容器和发运准备数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_ice_chilling_and_dispatch_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：最终处理投入暂定筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：kg, m3, kWh, or item/1,000 kg marketable product
  - 基准：水、冰、包装、活体暂养和冷藏投入的宽泛首轮检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 分选剔除物、沥水、废水和包装废物 (`sorting_rejects_drainage_wastewater_and_packaging_waste`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；路线特定剔除水母、沥水、废水、废冰、包装废物和有机残余物按场址记录选择
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：计量剔除水母、沥水、废水、废冰、包装废物、残余物质量、处置路线、回收路线和受纳环境
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_residue_bycatch_and_discharge_records`
- 数量范围：最终处理残余物 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg or m3/kg marketable product
  - 基准：剔除、沥水、废水、废冰、包装废物和残余物的宽泛检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### Outputs

##### Product flows

###### 可销售活、鲜或冷藏水母 (`marketable_live_fresh_or_chilled_jellyfish`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- 流属性/单位：质量 / kg
- 数量规则：在声明分选、沥水、冷藏、包装皮重排除和产品状态归一化后的固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 数量范围：固定参考输出 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：固定参考流输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：身份引用（`identity_reference`）

### Process: 交付到声明边界 (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### 交付燃料、电力、冰和温控支持 (`delivery_fuel_electricity_ice_and_temperature_control_support`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`；路线特定运输服务、冰、活体暂养水、氧气、制冷剂服务或可重复使用包装支持按场址记录选择
- 流属性/单位：燃料、能量、质量、体积或运输服务 / L、MJ、kWh、kg、m3 或 tonne-km
- 数量规则：仅当声明参考流交付超过上岸、发运或包装场边界时纳入；记录距离、方式、装载率、活体或冷藏条件和相关返程物流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 已交付参考产品或 tonne-km
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_records`
- 数量范围：交付暂定筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：tonne-km/1,000 kg reference product
  - 基准：交付纳入范围时的宽泛首轮交付活动检查
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### Outputs

##### Product flows

###### 声明边界处的已交付水母 (`delivered_jellyfish_at_declared_gate`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- 流属性/单位：质量 / kg
- 数量规则：声明边界处的交付质量，不包括运输包装皮重和冰，除非合同将其作为产品基准的一部分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：已交付参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_delivery_records`
- 数量范围：交付产品质量 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg delivered reference product
  - 基准：经过路线分配和产品状态归一化后的交付参考产品质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集记录计算（`calculated_from_collection`）

## 7. 分配与共产品处理

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | marketable live, fresh, or chilled jellyfish output | 除非剔除生物量、兼捕或残余物被有意回收为共产品，否则将声明参考产品作为唯一参考产品。 | 可销售质量、剔除质量、回收共产品质量、目的地，以及声明共产品时的收入或物理关系 | `mass-balance-identity` |
| `bycatch_and_reject_handling` | bycatch, non-target material, rejected jellyfish, and residues | 不得通过把兼捕、剔除、沥水或残余物排除在前景包之外来分摊掉这些负荷。记录去向，并且只有在记录了回收共产品时才分配。 | 兼捕质量、剔除质量、沥水或废水、目的地、处置或回收路线 | `brotz-pauly-jellyfish-fisheries-2017` |
| `shared_trip_and_landing_allocation` | multi-species trips or shared landing services | 共享船舶燃料、渔具服务、上岸能源、水、冰和包装，应先按直接计量、航次日志、捕获质量、暂养时间、包装件数或其他声明物理驱动因子分配，再使用经济分配。 | 航次记录、按物种上岸质量、服务日志、包装件数、暂养时间和分配驱动因子 | `mass-balance-identity` |
| `delivery_allocation` | mixed-product delivery | 交付燃料、冰、活体暂养、制冷和可重复使用包装负荷按产品质量、包装件数、行程、温控区域或 tonne-km 分配。 | 发运记录、包装件数、装载质量、距离、温度条件和返程物流 | `codex-cxc-52-2003` |

## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest_collection_and_landing_records` | `harvest_collection_and_landing` | harvest or collection, accepted landing, fuel, gear, landing inputs | vessel log, collector log, landing note, catch ticket, fuel invoice, gear log, permit | species, harvest area, gear, vessel or collector, trip, date, fuel, collection input, gross catch, rejected mass, accepted landed mass, landing site, intended use | 航次记录、上岸记录、称重单和许可或可追溯文件 | kg, L, MJ, item, date, area | 每个航次或上岸批次 | 完整报告期或声明季节 | vessel, collector, harvest area, landing site, or supplier | 捕获量加采购量减剔除和损失，与已接受上岸水母核对；归一化到可销售产出 | 上岸票据、称重记录、航次日志、许可、发票和操作员签字 |
| `cp_packout_product_state_and_mass_records` | `sorting_holding_chilling_and_packout` | sorting, drainage, product state, marketable output | sorting sheet, wash log, drainage record, temperature log, live-holding log, packout record, sales note | accepted mass, product state, wet or drained basis, washing, drainage time, temperature, holding duration, rejected mass, marketable mass, package count, destination | 校准秤、处理日志、温度记录、包装记录和销售核对 | kg, item, deg C, h, date | 每个处理或包装批次 | 完整处理和发运期间 | landing site, holding unit, packhouse, dispatch gate | 已接受上岸质量减剔除、沥水和处理损失，与可销售产出核对；全部流归一化到 1 kg 参考产品 | 秤校准、温度日志、包装单、销售记录和主管复核 |
| `cp_packaging_ice_chilling_and_dispatch_records` | `sorting_holding_chilling_and_packout` | water, ice, electricity, packaging, live holding, chilling | packaging invoice, ice log, water meter, electricity meter, temperature log, oxygen log, dispatch sheet | packaging material, item count, tare, ice mass, water, electricity, oxygen, temperature, holding time, lot, destination | 发票、计量表、温度记录和发运记录 | kg, item, m3, kWh, deg C, h | 每个包装批次和每月核对 | 处理和发运期间 | packhouse, live-holding unit, cold room, dispatch gate | 按实测 lot、包装件数、产品质量、暂养时长或温控区域分配到产品批次 | 发票、计量读数、温度日志、发运单和操作员复核 |
| `cp_reject_residue_bycatch_and_discharge_records` | `harvest_collection_and_landing`; `sorting_holding_chilling_and_packout` | bycatch, rejected jellyfish, drainage, wastewater, residues, packaging waste | reject log, bycatch record, wastewater record, disposal note, waste ticket | date, species or material, count, mass, volume, cause, fate, disposal route, recovery route, receiving environment | 上岸记录、处理记录、废物票据和排放记录 | kg, m3, item, date | 每次事件和每月核对 | 完整报告期或季节 | vessel, landing site, packhouse, discharge route, or waste route | 按物料和去向汇总；与捕获量、接受质量、可销售输出和处置路线核对 | 剔除日志、废物转运单、排放记录和主管复核 |
| `cp_delivery_records` | `delivery_to_declared_gate` | delivered product, transport energy, live or chilled delivery condition | delivery note, transport invoice, fuel record, route plan, temperature or live-holding log | origin, destination, distance, mode, load mass, fuel, electricity, ice, water, oxygen, temperature, live-holding duration, return logistics | 承运文件、车辆日志、计量记录和发运核对 | kg, km, tonne-km, L, kWh, h, deg C | 每条交付路线 | 声明范围内的交付期间 | delivery route, vehicle, vessel, or carrier | 计算 tonne-km，并按装载质量、距离、温控区域和相关返程物流分配燃料或服务 | 承运发票、路线记录、温度日志和发运签字 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = collected amount / marketable reference product mass，并保留单位和产品状态基准 | collected amount, marketable product mass, product basis | kg, kWh, L, item, m3, or tonne-km per kg reference product | `mass-balance-identity` |
| `accepted_landing_balance` | harvest and landing | accepted landed jellyfish = gross jellyfish catch or received mass - rejected jellyfish - documented onboard or landing losses | gross catch, received mass, rejects, drainage or loss | accepted landed jellyfish | `mass-balance-identity` |
| `product_state_yield` | sorting, drainage, and packout | marketable product mass = accepted landed mass - rejected mass - drainage or product-state loss - packaging tare and ice excluded from product basis | accepted mass, rejected mass, drainage, product-state records, packout records | marketable live, fresh, or chilled mass | `codex-cxc-52-2003` |
| `delivery_tonne_kilometres` | delivered reference product | tonne-km = delivered product mass in tonnes x one-way or contract-declared route distance；按装载占比分配温控或活体暂养投入 | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and harvest lot | 必须明确物种或物种组、CPC 类别、活/鲜/冷藏状态、湿或沥水质量基准、捕捞区域、上岸地点和声明边界。 | 参考流元数据、上岸记录、产品状态日志、包装记录以及销售或发运记录 |
| `dq_product_state` | all product rows | 数据集不得将活、鲜或冷藏水母与冷冻、干制、盐渍、盐水浸渍、明矾腌制、预制或保藏产品混合。 | 产品描述、温度日志、处理记录、保藏记录和销售文件 |
| `dq_mass_balance` | harvest, landing, sorting, drainage, and packout | 总捕获量、已接受上岸质量、剔除物、沥水、残余物和可销售产品记录必须在声明容差内核对；无法解释的差异需要披露。 | 质量平衡工作表、称重单、上岸记录、包装记录和主管复核 |
| `dq_temporal_coverage` | all foreground rows | 数据必须覆盖声明捕捞季、航次集合、处理批次和发运期间，或披露部分季节、部分批次或代理覆盖。 | 报告日历、航次日志、处理日志、发运记录和覆盖声明 |
| `dq_boundary_disclosure` | all datasets | 数据集必须披露捕鱼、采集、上岸、水、冰、包装、交付、资本品和基础设施是前景、链接上游数据集，还是按范围排除。 | 数据集边界声明、供应方记录、上游数据集链接和范围声明 |

## 9. 验证规则

| rule_id | Rule | Severity | Failure message |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | 参考产品流 UUID 等于 `f60402c9-806e-430e-bc77-851e2ff4dc59`，除非记录了更具体的 Tiangong 水母产品流。 | error | 参考流必须使用水母活、鲜或冷藏产品身份，或记录经审查的替代项。 |
| `val_product_state` | 产品状态为活、鲜或冷藏，并排除冷冻、干制、盐渍、盐水浸渍、明矾腌制、预制、保藏或观赏水母。 | error | 产品状态超出水母活、鲜或冷藏 PCR 范围。 |
| `val_mass_basis` | 产品质量基准声明为湿、沥水、整只、伞部、口腕、不含冰或其他已说明基准。 | error | 产品质量基准缺失或不清晰。 |
| `val_required_qualifiers` | 必需限定信息出现在元数据或过程说明中。 | warning | 参考流限定信息不完整。 |
| `val_structured_sync` | 编辑后从双语 Markdown 重新生成 `structured.yaml`。 | error | 结构化投影与已编写 PCR Markdown 不同步。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 活、鲜或冷藏水母的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 在保留捕捞和处理记录时作为 process 或 lifecyclemodel 构建的前景参考 |
| allowed_use | 对声明的活、鲜或冷藏水母产品，在上岸、发运、包装场或交付边界进行 LCA 建模 |
| excluded_use | 观赏用活水母；冷冻、干制、熏制、盐渍、盐水浸渍、明矾腌制、熟制、罐装、预制、保藏、提取或加工水母；非水母水生无脊椎动物；作为单独产品的残余物、废水、兼捕或剔除生物量；没有单独审查方法的生态系统服务声明 |
| required_metadata | canonical PCR id；CPC 3.0 代码；物种或物种组；捕捞或采集区域；渔具或采集方法；上岸地点；活/鲜/冷藏状态；湿或沥水质量基准；产品形态；暂养时长和温度；包装状态；声明边界；地理位置；报告期；数据所有者；未解决 UUID 替代项 |
| required_quality_disclosure | 产品状态证据、质量平衡闭合、湿/沥水基准、时间覆盖、分配基准、上游数据集链接、缺失前景记录、代理行，以及仅用于 QA 筛选的推理估算范围 |
| update_trigger | Tiangong 中新增水母渔具、船舶服务、冰、活体暂养氧气、盐水或盐渍排除项、兼捕、残余物、包装、制冷剂或交付服务流身份；关于燃料、得率、沥水、冰、包装或冷藏范围的经审查定量证据；Codex、FAO 或法律要求更新；分类映射变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-jellyfish-commodity-profile` | official_guidance | FAO Knowledge Repository, aquatic products chapter 4.2 Jellyfish, https://openknowledge.fao.org/server/api/core/bitstreams/0aa558d4-57c7-498d-87f7-b9e37577882f/content/src/html/chapter-4.2.html | 水母产品身份、产品用途和商品背景 |
| `brotz-pauly-jellyfish-fisheries-2017` | literature | Brotz and Pauly, studying jellyfish fisheries and global catch context, Sea Around Us PDF, https://legacy.seaaroundus.s3.amazonaws.com/researcher/dpauly/PDF/2017/Books%26Chapters/Brotz%2B%26%2BPauly%2B2017%2BStudying%2Bjellyfish%2Bfisheries.pdf | 水母渔业背景、捕捞和管理不确定性、兼捕和捕捞文件背景 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | 活、鲜、冷藏水产品处理、卫生、运输和产品状态背景 |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs minus rejects, drainage, and losses under declared product basis | 归一化、分配、上岸平衡、得率和交付计算 |
