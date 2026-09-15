---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.natural-sponges-of-aquatic-animal-origin
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水生动物源天然海绵

## 1. 范围与适用性

本 PCR 用于构建作为采收、上岸或初级整理海绵产品上市的水生动物源天然海绵前景数据包。它覆盖声明的潜水、切割、手工采集、合法拖采或钩采、船上处理、上岸、清洗或冲洗、沥水、不可用组织修剪、在仍保持初级天然海绵产品身份下的干燥或简单保藏、包装、储存、发运和在声明边界的放行。

覆盖产品包括以未加工、上岸、清洗、沥水、干燥或简单整理初级生物质销售的声明物种或商业等级天然海洋或淡水动物海绵。排除产品包括合成海绵、塑料泡沫海绵、成形浴用制品、化学精整或制造海绵制品、复合清洁产品、化妆品或医疗成品、提取物，以及作为单独产品建模的残余物或受损海绵生物量。

合规数据集必须保留物种或商业等级、采集区域、采集方法、湿或干质量基准、清洗或干燥状态和边界。相关时必须披露海绵床管理、许可、受保护栖息地和再生采收实践。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.natural-sponges-of-aquatic-animal-origin` |
| classification_refs | CPC 3.0 `04920`, `Natural sponges of aquatic animal origin` |
| covered_products | 作为初级天然海绵产品被捕捞、采集、上岸、清洗、沥水、干燥或简单整理的天然水生动物海绵 |
| excluded_products | 合成海绵；塑料泡沫海绵；成形、零售切割、化学精整、制造、复合、化妆品、医疗或工业海绵制品；提取物；作为单独产品的受损生物量、废物、清洗水或修剪残余物 |
| representative_product | 在声明物种或等级、采集区域、湿或干质量基准、清洗或干燥状态、包装状态和声明边界下的天然水生动物海绵 |
| production_route | 由潜水员、船舶、手工、钩具、拖具或声明合法方法捕捞或采集，上岸、清洗/冲洗、沥水、修剪，在保持初级产品身份时简单干燥或保藏，包装、储存和声明边界放行 |
| market_state | 已声明物种或等级、采集方法、湿/干/清洗/干燥基准、质量等级、包装状态和边界的采收或初级整理天然海绵 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为采收或初级整理产品的水生动物源天然海绵 |
| How much | 1 kg |
| How well | 声明物种或商业等级、天然动物来源、采集区域、采集方法、湿或干质量基准、清洗/干燥状态、包装状态和边界 |
| How long or cycle | 一个采收航次、采集批次、上岸批次、处理批次、销售批次或报告期，并归一化至可销售海绵产出 |
| reference_flow_link | 见下方参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种或商业等级；天然水生动物来源；捕捞或采集区域；采集方法；相关时的许可或进入权；湿、沥水、干、清洗或简单整理质量基准；干燥或保藏状态；质量等级；包装状态；声明边界；栖息地、保护区、海绵床再生和未解决的 Tiangong UUID 替代项 |

质量是主要参考基准。件、捆、袋、篮、箱、潜水员批次或航次记录只有在保留净质量、湿或干基准、等级、皮重和抽样方法时，才可使用。

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明湿、沥水、清洗、干燥或初级整理产品基准下的天然海绵 kg。 |
| `natural_origin_identity` | all datasets | Product identity and origin evidence | declared records | 数据集记录必须证明天然水生动物海绵来源，不得将合成、塑料、成形制造或化学精整海绵制品与参考产品混合。 |
| `wet_dry_cleaned_basis` | harvested, washed, drained, dried, or cleaned sponge lots | Mass and moisture or drying state | kg, %, or kg dry sponge | 产品质量必须说明湿、沥水、清洗、干燥或声明基准。只有在有实测水分、干燥得率或保留批次证据时才可在湿基和干基之间换算。 |
| `harvest_lot_identity` | collection, landing, grading, and sales records | Mass, count, or lot | kg, item, bundle, sack, basket, or crate | 采收记录必须保留物种或等级、采收区域、方法、潜水员/船舶/采集者、航次、批次、上岸日期、接受质量、剔除质量和相关时的许可或进入记录。 |
| `cleaning_preservation_basis` | washing, trimming, drying, disinfecting, bleaching, or preservation | Mass, volume, concentration, or energy | kg, L, %, kWh, MJ, or h | 简单初级整理只有在保持天然海绵身份时才可纳入。记录水、化学品、干燥能耗、时间、剔除组织和产品状态换算基准。 |
| `energy_fuel_and_delivery_inventory` | diving, vessel operation, air compression, landing, drying, storage, and dispatch | Energy or fuel quantity | kWh, MJ, L, or kg | 在归一化到参考流前记录电力、燃料、压缩空气、干燥、储存和交付的原始单位。 |
| `packaging_basis` | sacks, bales, cartons, liners, labels, reusable crates, and pallets | Mass or item count | kg or item | 包装记录必须在归一化前保留材料类型、件数、皮重或装填质量、重复使用率和目的地。 |

## 5. 系统边界

默认边界覆盖前景控制的海绵采收或采集，直到声明的上岸、干燥、发运、包装场或交付边界：

1. 海绵捕捞或采集，包括潜水员、船舶、手工、钩具、拖具或合法采集方法、渔具作业、进入或许可合规，以及船上处理。
2. 上岸、分级、清洗、冲洗、沥水、修剪、在产品仍为初级天然海绵时的简单干燥或保藏、残余物处理、包装、储存和声明边界放行。
3. 当参考流是超过上岸、干燥场、发运或包装场边界的交付产品时，包括交付到声明边界。

资本品和长期船舶、潜水设备、空气压缩机、渔具、池槽、干燥设施和基础设施只有在声明数据包范围要求时才纳入。购买的燃料、电力、压缩空气、水、清洗化学品、包装和运输服务需要上游数据集，除非同一运营方控制并在前景包中报告其生产。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_natural_sponge_harvest_or_collection_lot |
| starting_condition_role | aquatic_animal_sponge_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04920`, `Natural sponges of aquatic animal origin` |
| recursive_input_rule | 作为初级海绵产品投入的天然海绵采集物，记录为声明采收或采集批次，并披露区域、方法、物种或等级、湿/干基准和边界，而不是递归记录为成品参考产品输出 |
| upstream_dataset_requirement | 捕鱼或采集航次记录、供应方采收记录、上岸文件、许可或可追溯证据，以及前景控制之外的燃料、电力、水、化学品、包装和交付数据集 |
| disclosure | 披露物种或商业等级、捕捞或采集区域、采集方法、潜水员或船舶、许可或进入权、相关时的栖息地或保护区状态、湿/干/清洗/干燥基准、清洗、修剪、干燥或保藏路线、剔除物和残余物、包装状态、声明边界，以及未解决的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| harvest_collection_and_landing | 捕捞、采集和上岸 | required | 必须声明采收或采集批次 | foreground production | 进入初级整理的上岸天然海绵 |
| primary_preparation_drying_and_packout | 初级整理、干燥和包装出货 | required | 在声明边界前发生清洗、修剪、干燥或简单保藏时纳入 | foreground conditioning and gate release | 可销售天然海绵 |
| delivery_to_declared_gate | 交付到声明边界 | conditional | 当参考流是超过上岸、干燥、发运或包装场边界的交付产品时纳入 | foreground transport | 声明边界处的已交付天然海绵 |

### Process: 捕捞、采集和上岸 (`harvest_collection_and_landing`)

#### Inputs

##### Product flows

###### 采收燃料、潜水、渔具和采集投入 (`harvest_fuel_diving_gear_and_collection_inputs`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`；路线特定潜水服务、压缩空气、渔具、篮、船舶服务、海水或采集投入按前景记录选择
- 流属性/单位：燃料、能量、质量、体积、件数、时间或服务量 / L、kWh、MJ、kg、m3、item、h 或 service unit
- 数量规则：按航次或批次计量或分配船舶燃料、空气压缩、潜水服务、渔具使用、采集投入和上岸支持
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收航次或上岸批次，并在归一化后每 1,000 kg 可销售参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_collection_and_landing_records`
- 来源：`fao-sponge-production`, `martinangeli-commercial-sponges-2022`
- 数量范围：采收投入暂定筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10000
  - 单位：L, kWh, MJ, kg, m3, item, h, or service unit/1,000 kg marketable product
  - 基准：船舶、潜水员、渔具、空气压缩和上岸支持投入的宽泛首轮检查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 受损海绵、非目标物料和上岸残余物 (`damaged_sponges_non_target_material_and_landing_residues`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；路线特定受损海绵、剔除海绵、非目标物料、组织残余物、废水和处置流按场址记录选择
- 流属性/单位：质量、体积或件数 / kg、m3 或 item
- 数量规则：计量剔除或受损海绵、非目标物料、残余物质量、去向、处置路线、回收路线和受纳环境
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收航次或上岸批次，并在归一化后每 1,000 kg 可销售参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_residue_and_discharge_records`
- 数量范围：上岸残余物暂定筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg residue/kg accepted landed sponge
  - 基准：采收和上岸阶段剔除物、受损海绵、组织和残余物的宽泛检查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### Outputs

##### Product flows

###### 已接受上岸天然海绵 (`accepted_landed_natural_sponge`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
- 流属性/单位：质量 / kg
- 数量规则：分选、剔除、沥水和批次识别后的已接受上岸海绵计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：进入初级整理的已接受上岸海绵
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_collection_and_landing_records`
- 数量范围：上岸接受量质量平衡 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：kg accepted landed sponge/kg marketable product
  - 基准：清洗和干燥前上岸至可销售产品质量平衡的宽泛检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### Process: 初级整理、干燥和包装出货 (`primary_preparation_drying_and_packout`)

#### Inputs

##### Product flows

###### 进入初级整理的已接受海绵 (`accepted_sponge_entering_primary_preparation`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
- 流属性/单位：质量 / kg
- 数量规则：计量进入清洗、冲洗、修剪、干燥、简单保藏、分级或包装的已接受海绵
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_product_state_and_mass_records`
- 来源：`fao-sponge-production`, `martinangeli-commercial-sponges-2022`
- 数量范围：初级整理投入 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：kg accepted sponge/kg marketable product
  - 基准：湿至清洗或湿至干产品得率的宽泛检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水、化学品、能源、干燥和包装投入 (`water_chemicals_energy_drying_and_packaging_inputs`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Packaging, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`；路线特定海水、消毒剂、漂白剂、保藏投入、干燥燃料、袋、包、纸箱或托盘按场址记录选择
- 流属性/单位：质量、体积、能量、浓度或件数 / kg、L、m3、kWh、MJ、% 或 item
- 数量规则：计量清洗水、清洗或保藏化学品、干燥能源、电力、包装、储存和发运准备数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_packaging_and_storage_records`
- 来源：`fao-sponge-production`
- 数量范围：整理投入暂定筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：kg, L, m3, kWh, MJ, %, or item/1,000 kg marketable product
  - 基准：清洗、干燥、包装和储存投入的宽泛首轮检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 修剪残余物、清洗水和包装废物 (`trimming_residues_wash_water_and_packaging_waste`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；路线特定修剪残余物、组织残余物、清洗水、化学浴液、废水、包装废物和处置流按场址记录选择
- 流属性/单位：质量或体积 / kg、L 或 m3
- 数量规则：计量修剪残余物、清洗水、废浴液、废水、包装废物、处置路线、回收路线和受纳环境
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_residue_and_discharge_records`
- 数量范围：初级整理残余物 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg or m3/kg marketable product
  - 基准：剔除、修剪、清洗水、废浴液、包装废物和残余物的宽泛检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### Outputs

##### Product flows

###### 可销售天然海绵 (`marketable_natural_sponge`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
- 流属性/单位：质量 / kg
- 数量规则：在声明清洗、修剪、干燥、包装皮重排除和产品状态归一化后的固定参考输出
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

###### 交付燃料、电力和包装支持 (`delivery_fuel_electricity_and_packaging_support`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`；路线特定运输服务、储存、干燥保护、可重复使用包装或托盘支持按场址记录选择
- 流属性/单位：燃料、能量、质量或运输服务 / L、MJ、kWh、kg 或 tonne-km
- 数量规则：仅当声明参考流交付超过上岸、干燥场、发运或包装场边界时纳入；记录距离、方式、装载率、防潮条件和相关返程物流
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

###### 声明边界处的已交付天然海绵 (`delivered_natural_sponge_at_declared_gate`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
- 流属性/单位：质量 / kg
- 数量规则：声明边界处的交付质量，不包括运输包装皮重，除非合同将其作为产品基准的一部分
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
| `single_reference_product_default` | marketable natural sponge output | 除非修剪残余物、受损海绵或非目标物料被有意回收为共产品，否则将声明参考产品作为唯一参考产品。 | 可销售质量、剔除质量、回收共产品质量、目的地，以及声明共产品时的收入或物理关系 | `mass-balance-identity` |
| `habitat_and_reject_handling` | damaged sponge, non-target material, residues, and protected habitat disclosure | 不得通过把剔除海绵、受损物料或栖息地扰动排除在前景包之外来分摊掉这些负荷。记录去向，并在相关时披露海绵床或保护区状态。 | 受损质量、剔除质量、非目标物料、采集区域、处置或回收路线、许可和栖息地披露 | `fao-sponge-production` |
| `shared_trip_and_preparation_allocation` | multi-product trips or shared preparation services | 共享船舶燃料、潜水支持、电力、水、干燥、储存和包装，应先按直接计量、航次日志、接受质量、干质量产出、暂养或干燥时间、包装件数或其他声明物理驱动因子分配，再使用经济分配。 | 航次记录、上岸质量、接受质量、干质量、服务日志、包装件数、干燥时间和分配驱动因子 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest_collection_and_landing_records` | `harvest_collection_and_landing` | harvest or collection, accepted landing, fuel, diver, gear, landing inputs | vessel log, diver log, collector log, landing note, catch ticket, fuel invoice, gear log, permit | species or grade, harvest area, method, diver, vessel or collector, trip, date, fuel, air compression, gear, gross sponge, rejected mass, accepted landed mass, landing site, permit | 航次记录、上岸记录、称重单、潜水日志和许可或可追溯文件 | kg, L, kWh, MJ, item, h, date, area | 每个航次或上岸批次 | 完整报告期或声明季节 | diver, vessel, collector, harvest area, landing site, or supplier | 采集质量加采购量减剔除和损失，与已接受上岸海绵核对；归一化到可销售产出 | 上岸票据、称重记录、航次日志、潜水日志、许可、发票和操作员签字 |
| `cp_preparation_product_state_and_mass_records` | `primary_preparation_drying_and_packout` | cleaning, drying, trimming, product state, marketable output | wash log, drying log, trimming record, grade sheet, packout record, sales note | accepted mass, wet/dry/cleaned basis, washing, drying time, drying temperature where relevant, rejected mass, grade, marketable mass, package count, destination | 校准秤、处理日志、干燥记录、包装记录和销售核对 | kg, %, item, h, date | 每个整理或包装批次 | 完整处理和发运期间 | landing site, drying yard, packhouse, dispatch gate | 已接受上岸质量减剔除、修剪、水分损失和处理损失，与可销售产出核对；全部流归一化到 1 kg 参考产品 | 秤校准、干燥日志、包装单、销售记录和主管复核 |
| `cp_preparation_packaging_and_storage_records` | `primary_preparation_drying_and_packout` | water, chemicals, electricity, drying fuel, packaging, storage | water meter, chemical invoice, electricity meter, drying fuel record, packaging invoice, storage log, dispatch sheet | water, chemical type, concentration, electricity, fuel, drying time, packaging material, item count, tare, lot, destination | 发票、计量表、干燥日志和发运记录 | kg, L, m3, kWh, MJ, %, item, h | 每个整理批次和每月核对 | 处理、储存和发运期间 | preparation site, drying yard, storage room, dispatch gate | 按实测 lot、产品质量、干质量产出、干燥时间或包装件数分配到产品批次 | 发票、计量读数、干燥日志、发运单和操作员复核 |
| `cp_reject_residue_and_discharge_records` | `harvest_collection_and_landing`; `primary_preparation_drying_and_packout` | damaged sponge, rejected sponge, trimming residue, wash water, wastewater, packaging waste | reject log, residue record, wastewater record, disposal note, waste ticket | date, species or material, count, mass, volume, cause, fate, disposal route, recovery route, receiving environment | 上岸记录、处理记录、废物票据和排放记录 | kg, L, m3, item, date | 每次事件和每月核对 | 完整报告期或季节 | vessel, landing site, preparation site, discharge route, or waste route | 按物料和去向汇总；与采集质量、接受质量、可销售输出和处置路线核对 | 剔除日志、废物转运单、排放记录和主管复核 |
| `cp_delivery_records` | `delivery_to_declared_gate` | delivered product, transport energy, moisture-protection condition | delivery note, transport invoice, fuel record, route plan, storage or moisture log | origin, destination, distance, mode, load mass, fuel, electricity, packaging support, moisture protection, return logistics | 承运文件、车辆日志、计量记录和发运核对 | kg, km, tonne-km, L, kWh, h | 每条交付路线 | 声明范围内的交付期间 | delivery route, vehicle, vessel, or carrier | 计算 tonne-km，并按装载质量、距离、储存条件和相关返程物流分配燃料或服务 | 承运发票、路线记录、储存日志和发运签字 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = collected amount / marketable reference product mass，并保留单位和产品状态基准 | collected amount, marketable product mass, product basis | kg, kWh, L, item, m3, or tonne-km per kg reference product | `mass-balance-identity` |
| `accepted_landing_balance` | harvest and landing | accepted landed sponge = gross collected or received mass - rejected sponge - documented onboard or landing losses | gross collection, received mass, rejects, loss | accepted landed sponge | `mass-balance-identity` |
| `wet_to_dry_or_cleaned_yield` | cleaning, trimming, drying, and packout | marketable product mass = accepted landed mass - rejected mass - trimming - moisture loss according to declared wet, cleaned, or dry basis | accepted mass, rejected mass, trimming, moisture or drying records, packout records | marketable natural sponge mass | `fao-sponge-production` |
| `delivery_tonne_kilometres` | delivered reference product | tonne-km = delivered product mass in tonnes x one-way or contract-declared route distance；按装载占比分配储存或保护投入 | delivered mass, distance, route, load factor, moisture-protection condition | tonne-km and delivered product inventory | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and harvest lot | 必须明确物种或商业等级、CPC 类别、天然水生动物来源、采收区域、方法、湿/干/清洗基准和声明边界。 | 参考流元数据、上岸记录、产品状态日志、包装记录以及销售或发运记录 |
| `dq_origin_and_habitat` | harvest or collection | 数据集必须在适用时保留许可、进入权、海绵床、栖息地、保护区和再生或切割实践披露。 | 许可、采收日志、管理记录、区域地图和可追溯文件 |
| `dq_mass_balance` | harvest, landing, cleaning, drying, trimming, and packout | 采集质量、已接受上岸质量、剔除物、修剪、水分损失、残余物和可销售产品记录必须在声明容差内核对；无法解释的差异需要披露。 | 质量平衡工作表、称重单、上岸记录、干燥记录、包装记录和主管复核 |
| `dq_temporal_coverage` | all foreground rows | 数据必须覆盖声明采收季、航次集合、处理批次、干燥批次和发运期间，或披露部分季节、部分批次或代理覆盖。 | 报告日历、航次日志、处理日志、发运记录和覆盖声明 |
| `dq_boundary_disclosure` | all datasets | 数据集必须披露采集、上岸、清洗、干燥、包装、交付、资本品和基础设施是前景、链接上游数据集，还是按范围排除。 | 数据集边界声明、供应方记录、上游数据集链接和范围声明 |

## 9. 验证规则

| rule_id | Rule | Severity | Failure message |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | 参考产品流 UUID 等于 `972e9d63-d123-4b6e-ad97-5b72d0735453`，除非记录了更具体的 Tiangong 天然海绵产品流。 | error | 参考流必须使用水生动物源天然海绵产品身份，或记录经审查的替代项。 |
| `val_natural_origin` | 产品为天然水生动物海绵，不是合成、塑料、成形制造、化学精整或复合海绵制品。 | error | 产品身份超出天然水生动物海绵 PCR 范围。 |
| `val_mass_basis` | 产品质量基准声明为湿、沥水、清洗、干燥或其他已说明基准。 | error | 产品质量基准缺失或不清晰。 |
| `val_required_qualifiers` | 必需限定信息出现在元数据或过程说明中。 | warning | 参考流限定信息不完整。 |
| `val_structured_sync` | 编辑后从双语 Markdown 重新生成 `structured.yaml`。 | error | 结构化投影与已编写 PCR Markdown 不同步。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 水生动物源天然海绵的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 在保留采收和初级整理记录时作为 process 或 lifecyclemodel 构建的前景参考 |
| allowed_use | 对声明的天然水生动物海绵，在上岸、干燥、发运、包装场或交付边界进行 LCA 建模 |
| excluded_use | 合成海绵；塑料泡沫海绵；成形浴用制品；化学精整或制造海绵制品；复合清洁产品；化妆品或医疗成品；提取物；作为单独产品的受损海绵生物量、残余物、废水或修剪物；没有单独审查方法的生态系统服务或再生声明 |
| required_metadata | canonical PCR id；CPC 3.0 代码；物种或商业等级；天然动物来源；捕捞或采集区域；采集方法；许可或进入权；湿/干/清洗/干燥质量基准；产品等级；包装状态；声明边界；地理位置；报告期；数据所有者；未解决 UUID 替代项 |
| required_quality_disclosure | 天然来源证据、相关时的栖息地和许可披露、质量平衡闭合、湿/干/清洗基准、时间覆盖、分配基准、上游数据集链接、缺失前景记录、代理行，以及仅用于 QA 筛选的推理估算范围 |
| update_trigger | Tiangong 中新增海绵物种、采集渔具、潜水员服务、压缩空气、清洗化学品、干燥能源、残余物、包装或交付服务流身份；关于燃料、得率、水分损失、修剪、干燥、包装或栖息地范围的经审查定量证据；FAO、渔业管理或法律要求更新；分类映射变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sponge-production` | official_guidance | FAO, Sponge production chapter, https://www.fao.org/4/ac286e/AC286E02.htm | 海绵渔业路线、生产背景、采收和处理边界 |
| `martinangeli-commercial-sponges-2022` | literature | Martinangeli et al., The global catch of commercial sponges (1950 to 2019), Sea Around Us PDF, https://s3.us-west-2.amazonaws.com/legacy.seaaroundus/researcher/dpauly/PDF/2022/Book%2C%2Bchapters%2C%2Breports/Martinangeli%2C%2BL.%2C%2BM.%2BFourt%2C%2BM.%2BButler%2C%2BA.%2BC.%2BTsikliras%2C%2BN.%2BSmith%2C%2BM.L.D.%2BPalomares%2C%2BB.%2BDerrick%2C%2BE.%2BChu%2Band%2BD.%2BPauly.%2B2022.%2B2022.%2BThe%2Bglobal%2Bcatch%2Bof%2Bcommercial%2Bsponges.pdf | 商业海绵捕获背景、物种和渔业记录不确定性 |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs minus rejects, trimming, moisture loss, and losses under declared product basis | 归一化、分配、上岸平衡、得率和交付计算 |
