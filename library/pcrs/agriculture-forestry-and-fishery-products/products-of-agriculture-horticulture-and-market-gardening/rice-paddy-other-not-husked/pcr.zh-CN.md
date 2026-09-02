---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-paddy-other-not-husked
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他稻谷（未去壳）

## 1. 范围与适用性

本 PCR 适用于稻谷种植及农场门交付，产品保持谷壳完整，并归入 CPC 3.0 代码 01132“其他稻谷（未去壳）”。本 PCR 覆盖灌溉与雨养生产、直播与移栽种植，但必须声明生产路线、水分管理制度、地理范围、作季以及农场门产品状态。

前景边界始于本作物周期第一次整地或育秧活动之前，止于未加工稻谷在农场门完成交付。边界包括土地或苗床准备、建植、养分与植保管理、水分管理、田间作业、收获、脱粒，以及交付前发生的农场内清理、干燥或储存。外购投入品的上游生产通过关联数据集表示；田间直接排放纳入边界。碾米、去壳、蒸谷、农场外加工、包装以及农场门之后的运输不纳入边界。

本 PCR 以数据集生产为首要目的，规定构建稻谷种植前景数据包及其下游 `process` 或 `lifecyclemodel` 投影所需的前景记录。对于不存在可靠全球适用证据的清单量，本 PCR 不规定全球代表性的默认值。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-paddy-other-not-husked` |
| classification_refs | CPC 3.0 `01132`，精确映射 |
| covered_products | 农场门交付、谷壳完整的未加工稻谷，不含种用稻谷 |
| excluded_products | 稻种；糙米；半精米或精米；碎米；蒸谷米；包装大米；以及农场外加工后的稻米产品 |
| representative_product | 其他稻谷（未去壳） |
| production_route | 灌溉或雨养；直播或移栽；必须声明路线 |
| market_state | 农场门交付时按接收状态计量的未加工、未去壳稻谷；必须声明水分与杂质基准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | CPC 3.0 `01132` 范围内、谷壳完整的未加工稻谷 |
| How much | 农场门交付时按接收湿质量计的 1,000 kg |
| How well | 声明品种或物种、生产地理范围、作季、建植方式、水分管理制度、农场门状态、含水率、杂质基准、干燥或储存状态、秸秆去向及分配方法 |
| How long or cycle | 从声明的起始条件至农场门交付的一个完整作物周期 |
| reference_flow_link | 天工精确产品流 UUID `bdbb913b-620c-42a0-baf6-c5802a2b6c4b` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 按接收湿质量计的 1,000 kg |
| Reference product flow | 其他稻谷（未去壳），UUID `bdbb913b-620c-42a0-baf6-c5802a2b6c4b` |
| Reference flow property | 质量，UUID `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组，UUID `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种或物种；生产地理范围；作季或年份；建植方式；种植期间及种植前的水分管理制度；有机改良物类型与用量；农场门状态；湿基含水率及测量方法；杂质或异物基准；是否包括干燥或储存；秸秆去向；分配方法 |

构建前景数据包时，必须在数据集元数据、过程注释、参考流注释、产品描述或等效数据包字段中声明 `Required qualifiers` 所列项目。缺少任何必填限定项，均会使该数据包的参考流定义不完整。如声称产品“适宜储存”，还必须具有不高于湿基 14% 的实测含水率，并披露干燥时点和储存状态；14% 不得作为所有农场门稻谷的通用含水率默认值。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考稻谷输出 | 质量 | kg | 按接收湿质量报告。记录湿基含水率及测量方法；不得将参考量静默换算为干物质。 |
| `measurement_moisture_state` | 稻谷和生物质共产品 | 质量与水分分数 | kg，以及明确标识的湿基或干基 % | 记录取样时间、方法与基准。仅可将干物质换算作为单独计算字段。 |
| `measurement_area_cycle` | 土地、产量与田间排放 | 面积与作物周期时长 | ha，以及 day 或作物周期 | 记录种植和收获面积、播种或移栽日期、收获日期以及与参考输出关联的面积。 |
| `measurement_nitrogen_basis` | 肥料、有机改良物与秸秆 | 质量与氮含量 | kg 产品和 kg N | 分别记录产品量与氮含量。明确数值是产品质量、养分质量、鲜物质还是干物质。 |
| `measurement_energy_fuel` | 燃料与电力 | 适用的质量、体积或能量 | kg、L、kWh 或 MJ | 保留采购或仪表实测单位，并记录使用的密度、低位热值或换算因子。 |
| `measurement_water` | 灌溉水 | 体积或质量 | m3 或 kg | 尽可能测量输送至田间的水量；仅在所述条件下的水密度支持时才可按 1,000 kg/m3 换算，并须披露。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 稻谷种植前景 | 纳入土地或苗床准备、建植、养分和植保管理、灌排管理、其他田间作业、收获、脱粒，以及交付前实际发生的农场内清理、干燥或储存。 | `fao-rice-production-guidelines` |
| `boundary_upstream_inputs` | 外购投入品 | 对种子、肥料和土壤改良物、植保产品、灌溉水供应、燃料、电力及其他物料投入关联上游数据集。 | `epd-international-food-beverage-2025-03` |
| `boundary_direct_field_emissions` | 受管理稻田 | 纳入稻田甲烷以及受管理土壤直接和间接 N2O；相关时纳入尿素与施石灰产生的 CO2。 | `ipcc-2019-cropland-rice`; `ipcc-2019-managed-soils` |
| `boundary_postharvest_condition` | 农场内收获后作业 | 仅在清理、干燥和储存发生于声明的农场门交付之前时纳入；识别其能源、损失、持续时间及最终含水率。 | `fao-rice-postharvest-operations` |
| `boundary_exclusions` | 下游活动 | 排除去壳、碾米、蒸谷、农场外加工、消费包装以及农场门之后的运输。 | `epd-international-food-beverage-2025-03` |
| `boundary_same_category_input` | 再进入系统的稻谷或种子 | 将外部供应的稻种作为上游产品投入。不得将自留种或内部循环稻谷同时计为输出和外购投入；须记录其核算处理。 | `fao-rice-production-guidelines` |

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 归属于本作物周期的第一次整地或育秧活动开始前，处于可管理状态的田地 |
| starting_condition_role | 前景作物周期起点；适用时单独评估并关联此前的土地利用变化 |
| product_classification_scope | 仅限 CPC 3.0 `01132` |
| recursive_input_rule | 外购投入品仅穿越前景边界一次并须关联上游数据集；记录内部循环且不得重复计量 |
| upstream_dataset_requirement | 使用地理、技术与时间代表性匹配的上游数据集，并披露替代或代理 |
| disclosure | 声明所有纳入的农场内收获后作业、排除活动、截断及任何边界偏离 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `paddy_cultivation_and_farm_gate_handoff` | 稻谷种植与农场门交付 | `required` | 始终适用 | 前景生产 | 1,000 kg 参考稻谷 |

### 过程：稻谷种植与农场门交付（`paddy_cultivation_and_farm_gate_handoff`）

该单元过程覆盖完整作物周期及声明的农场门交付前发生的全部农场内作业。不选择默认天工过程，因为最接近的候选过程并未以精确稻谷产品流作为定量参考。

#### 输入

##### 产品流

###### 稻种（`seed_rice_input`）

记录投入本作物的种子，并区分外购种与自留种，避免重复计量。

- Selected flow: Rice Seeds，UUID `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- Flow property / unit: 质量 / kg，UUID `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 作物周期内实际施用的前景质量，归一化至参考输出
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_material_inputs`
- Sources: `fao-rice-production-guidelines`

###### 灌溉水（`irrigation_water_input`）

记录输送至田间的水，不将降雨计作灌溉投入。保留测量点和换算假设。

- Selected flow: Natural water used for irrigation，UUID `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- Flow property / unit: 质量 / kg，UUID `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 本作物周期计量或计算的田间供水量；体积换算须披露密度假设
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 由采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_water_management`
- Sources: `irri-alternate-wetting-drying`; `ipcc-2019-cropland-rice`

###### 肥料与土壤改良物（`fertilizer_amendment_inputs`）

分别记录每种商业矿质肥料、有机改良物、石灰与尿素。解析与实际产品匹配的天工产品流；不规定通用 UUID。

- Selected flow: 数据集特定的肥料或改良物产品流；构建时解析
- Flow property / unit: 质量 / kg 产品，相关时另记 kg 养分
- Amount rule: 按产品记录实际施用质量、养分含量、施用日期和方法
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_material_inputs`
- Sources: `ipcc-2019-managed-soils`; `fao-rice-production-guidelines`

###### 植保产品（`crop_protection_inputs`）

分别记录每种除草剂、杀虫剂、杀菌剂或其他植保产品，并说明数值是制剂量还是活性成分量。

- Selected flow: 数据集特定产品流；构建时解析
- Flow property / unit: 质量 / 明确标识的 kg 制剂或 kg 活性成分
- Amount rule: 按产品、活性物质、日期与施用方法记录前景施用量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_material_inputs`
- Sources: `fao-rice-production-guidelines`

###### 柴油（`diesel_fuel_input`）

记录拖拉机、水泵、收割机、干燥机及其他纳入的农场内作业所消耗的柴油。

- Selected flow: Diesel oil，UUID `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: 质量 / kg，UUID `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 归属于本作物周期的前景燃料消耗；如由体积换算，披露密度
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_energy_operations`
- Sources: `fao-rice-production-guidelines`

###### 电力（`electricity_input`）

记录灌溉抽水、干燥、储存和其他纳入作业的电表用电。构建时解析地理、电压和市场匹配的天工电力流；已调查候选流的属性和适用性不满足本 PCR 要求，不能作为默认值。

- Selected flow: 数据集特定电力流；构建时解析
- Flow property / unit: 能量 / 与所选流一致的 kWh 或 MJ
- Amount rule: 分配至本作物周期和纳入作业的实测用电量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_energy_operations`
- Sources: `fao-rice-production-guidelines`; `fao-rice-postharvest-operations`

##### 废物流

本 PCR 不规定废物投入。外来有机物料应依据其法律地位和数据集状态记录为产品投入或废物投入，并披露组成与氮含量。

##### 基本流

###### 土地占用或转化（`land_use_input`）

使用天工中适合具体地点的基本流记录种植面积及适用的土地占用或转化。不规定通用土地利用 UUID。

- Selected flow: 地点与土地类别特定的基本流；构建时解析
- Flow property / unit: 面积或面积时间 / 所选流要求的 ha、m2 或 m2·a
- Amount rule: 归属于本作物周期的前景面积；相关时记录此前土地利用状态与转化时点
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_crop_identity_yield`
- Sources: `ipcc-2019-cropland-rice`

#### 输出

##### 产品流

###### 参考稻谷（`reference_paddy_output`）

这是定量参考输出。记录交付时的按接收湿质量及实测含水率。

- Selected flow: 其他稻谷（未去壳），UUID `bdbb913b-620c-42a0-baf6-c5802a2b6c4b`
- Flow property / unit: 质量 / kg，UUID `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 先记录未归一化的作物周期输出，再将按接收湿质量的输出归一化至 1,000 kg
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 由采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_crop_identity_yield`
- Sources: `epd-international-food-beverage-2025-03`; `fao-rice-postharvest-operations`

###### 外售饲料级秸秆（`exported_straw_output`）

仅当秸秆作为饲料级产品离开前景系统时纳入。若去向或等级不同，应解析实际产品流或废物流。

- Selected flow: Straw，UUID `b1dd1313-1bc0-4baf-8cfb-50e8ea2a307c`，仅在饲料级外售时适用
- Flow property / unit: 质量 / kg 干物质，并记录水分
- Amount rule: 使用实测含水率将实测外售质量换算为干物质
- Value mode: 计算值（`calculated_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 由采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_residue_management`
- Sources: `ipcc-2019-managed-soils`

##### 废物流

###### 淘汰稻谷与外运残余物（`exported_waste_output`）

按实际去向和废物状态记录作为废物离开系统的淘汰或受损稻谷与残余物；不规定通用 UUID。

- Selected flow: 数据集特定废物流；构建时解析
- Flow property / unit: 质量 / kg，并声明水分或干物质基准
- Amount rule: 作为废物离开前景边界的实测质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_residue_management`
- Sources: `fao-rice-postharvest-operations`; `ipcc-2019-managed-soils`

##### 基本流

###### 生物源甲烷排入空气（`rice_methane_output`）

使用适用的 IPCC 层级以及当地适用的种植期水分管理、种植前水分管理、有机改良物、土壤和品种因子计算稻田甲烷。

- Selected flow: Methane, biogenic, to air, unspecified，UUID `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: 质量 / kg，UUID `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: `calc_rice_methane_ipcc`
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 方法公式（`method_formula`）
- Collection protocol: `cp_water_management`
- Sources: `ipcc-2019-cropland-rice`

###### 氧化亚氮排入空气（`soil_n2o_output`）

使用适用的 IPCC 层级和所采集的氮投入及秸秆记录，计算受管理土壤的直接和间接 N2O。

- Selected flow: Nitrous oxide, to air, unspecified，UUID `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: 质量 / kg，UUID `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: `calc_soil_n2o_ipcc`
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 方法公式（`method_formula`）
- Collection protocol: `cp_material_inputs`
- Sources: `ipcc-2019-managed-soils`

###### 化石二氧化碳排入空气（`lime_urea_co2_output`）

在使用石灰或尿素时计算其释放的 CO2。燃料燃烧排放属于适用的燃料使用建模路径，不得重复计算。

- Selected flow: Carbon dioxide, fossil, to air, unspecified，UUID `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: 质量 / kg，UUID `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: `calc_lime_urea_co2_ipcc`
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 1,000 kg 参考稻谷
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 方法公式（`method_formula`）
- Collection protocol: `cp_material_inputs`
- Sources: `ipcc-2019-managed-soils`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 多输出作业 | 首先通过过程细分或系统扩展避免分配，前提是技术上合理且建模一致。 | `eu-pef-2021-2279` |
| `allocation_residue_status` | 秸秆及其他残余物 | 留田、翻埋或田间焚烧的秸秆不是共产品输出；记录其去向及关联投入或排放。作为产品或废物离开系统的秸秆，必须按实际去向分类。 | `ipcc-2019-managed-soils` |
| `allocation_physical_relation` | 无法避免的分配 | 如无法避免分配，应采用投入、输出与功能之间相关的内在物理关系，并予以记录。 | `eu-pef-2021-2279` |
| `allocation_other_relation` | 不存在可辩护物理关系 | 仅在物理关系不可行时使用其他关系（包括经济分配）；披露价格、参考期和敏感性结果。 | `eu-pef-2021-2279` |
| `allocation_disclosure` | 所有已分配数据集 | 报告未分配总量、分配因子、分配后总量、方法理由与质量平衡核对。本 PCR 不规定通用秸秆分配因子。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_identity_yield` | `paddy_cultivation_and_farm_gate_handoff` | 作物身份、面积、日期、输出、土地 | 田间与收获记录 | 品种/物种；田块 ID；地理；面积；建植方式；播种/移栽与收获日期；收获湿质量；含水率；杂质；损失 | 田间日志、经校准秤、含水率仪及地理空间或地籍记录 | ha；day；kg；湿基 % | 每田块、每作物周期 | 完整作物周期 | 每个纳入农场或田块分层 | 保留田块分层后汇总质量和面积；报告加权水分方法 | 仪器 ID、校准、田间日志、地磅或秤票 |
| `cp_material_inputs` | `paddy_cultivation_and_farm_gate_handoff` | 种子、肥料、改良物、植保品 | 采购与施用记录 | 产品；供应商；数量；养分或活性成分；施用日期；方法；田块；自留种状态 | 发票、施用日志与库存核对 | kg 产品；kg 养分或活性成分 | 每次施用 | 完整作物周期 | 每个纳入农场或田块分层 | 按精确产品和田块汇总；不得混合产品质量与养分或活性成分质量 | 发票、标签、施用日志、库存记录 |
| `cp_water_management` | `paddy_cultivation_and_farm_gate_handoff` | 灌溉与甲烷控制 | 仪表、水泵与田间水分记录 | 供水量；水源；泵送能源；淹水/排水日期；水深；种植前制度；有机改良物；种植期 | 仪表或校准泵记录与田间观察；声称 AWD 时使用水位管 | m3 或 kg；day；cm | 每次灌溉和制度变化 | 种植前及完整作物周期 | 每个纳入田块或水分管理分层 | 汇总供水量；为甲烷计算保留制度-天数分层 | 仪表校准、泵曲线、田间日志、AWD 水位管观察 |
| `cp_energy_operations` | `paddy_cultivation_and_farm_gate_handoff` | 燃料、电力、机械、干燥 | 仪表、采购与运行小时记录 | 燃料类型和数量；电力；设备；小时；作业；干燥负荷；分配键 | 仪表、发票、燃料日志及设备小时记录 | kg、L、kWh、MJ、h | 每次作业或账期 | 完整作物周期及纳入的储存期 | 每个农场和共用设施 | 以有记录的物理驱动因子分配共用量；披露换算因子 | 发票、仪表读数、设备日志、校准或密度来源 |
| `cp_residue_management` | `paddy_cultivation_and_farm_gate_handoff` | 秸秆、残余物、淘汰物 | 质量与去向记录 | 残余物类型；鲜质量；水分；干质量；留田/翻埋/焚烧/外运去向；买方或废物去向 | 秤量或含水率实测的抽样产量比；去向凭证 | kg 鲜物；水分 %；kg 干物质 | 每次收获与移出 | 完整作物周期 | 每个纳入田块或设施 | 按去向与目的地汇总；估算量保持单独标记 | 秤票、抽样记录、销售或废物转移记录 |
| `cp_postharvest_condition` | `paddy_cultivation_and_farm_gate_handoff` | 清理、干燥、储存、交付 | 批次与设施记录 | 进出质量；干燥前后水分；淘汰物；能源；开始干燥时间；储存时长；交付状态 | 批次秤、含水率仪、干燥机与储存日志 | kg；湿基 %；kWh 或 MJ；day | 每批 | 收获至农场门交付 | 每个纳入农场内设施 | 核对批次质量、水分、淘汰物及参考输出 | 批次日志、仪表读数、校准、交付记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单流 | 归一化量 = 作物周期量 × 1,000 / 实测参考稻谷湿质量。保留未归一化记录与因子。 | 作物周期流量；参考稻谷湿质量 | 每 1,000 kg 稻谷的量 | `epd-international-food-beverage-2025-03` |
| `calc_yield` | 作物表现 | 湿产量 = 实测收获稻谷湿质量 / 收获面积；随产量报告含水率。 | 稻谷湿质量；收获面积；含水率 | 声明水分下的 kg/ha | `fao-rice-production-guidelines` |
| `calc_water_mass` | 灌溉水 | 水质量 = 实测体积 × 有记录的密度；降雨不得作为灌溉投入。 | 供水体积；密度 | kg 水 | `irri-alternate-wetting-drying` |
| `calc_rice_methane_ipcc` | 稻田甲烷 | 作物 CH4 = 各水分管理分层的调整后日排放因子 × 种植期 × 收获面积之和。按所选 IPCC 层级，从适用基准因子及种植期水分管理、种植前水分管理、有机改良物、土壤和品种因子推导调整因子。 | 面积；种植天数；水分管理分层；有机改良物；适用因子 | 每作物周期及每 1,000 kg 稻谷的 kg CH4 | `ipcc-2019-cropland-rice` |
| `calc_soil_n2o_ipcc` | 受管理土壤 N2O | 按所选 IPCC 层级，根据适用的合成氮、有机氮、作物残余物、矿化、挥发和淋溶项计算直接与间接 N2O-N；使用该方法的分子量比将 N2O-N 换算为 N2O，并仅归一化一次。 | 氮投入；残余物；面积；气候与管理因子 | 每作物周期及每 1,000 kg 稻谷的 kg N2O | `ipcc-2019-managed-soils` |
| `calc_lime_urea_co2_ipcc` | 石灰与尿素 CO2 | 对记录的石灰和尿素施用量使用所选 IPCC 碳排放因子，按方法规定将碳换算为 CO2，并仅归一化一次。 | 石灰和尿素数量及类型；因子 | 每作物周期及每 1,000 kg 稻谷的 kg 化石 CO2 | `ipcc-2019-managed-soils` |
| `calc_moisture_dry_matter` | 稻谷与生物质 | 干质量 = 湿质量 ×（1 − 湿基水分分数）。不得用干质量替换湿质量参考流。 | 湿质量；湿基水分分数 | kg 干物质 | `fao-rice-postharvest-operations` |
| `calc_allocation` | 共产品系统 | 将有记录的层级与因子应用于未分配总量；分配系统因子之和必须为一，且质量平衡须核对。 | 未分配清单；产出数量或其他合理驱动因子；因子 | 已分配清单与核对结果 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品与生产路线 | 声明精确 CPC 01132 稻谷身份、品种/物种、建植路线、灌溉类别、地理与作季。 | 数据集元数据与田间记录 |
| `dq_measurement` | 质量、水分、水、能源 | 秤、含水率仪、水表和电能表须经校准，或记录其不确定性。 | 校准证书、仪器日志、不确定性说明 |
| `dq_temporal` | 前景清单 | 数据覆盖完整作物周期及纳入的农场内储存；多年平均须保留逐年记录与气象背景。 | 带日期记录与汇总工作簿 |
| `dq_completeness` | 投入、输出与排放 | 物料、水、能源、秸秆、损失及直接排放记录与声明边界核对；明确排除项与缺测。 | 完整性清单与质量平衡 |
| `dq_geography_technology` | 前景与关联数据集 | 地理、灌溉与建植技术、电力及上游投入应匹配代表系统，否则披露为代理。 | 代表性评估与数据集链接 |
| `dq_ghg_method` | CH4、N2O 与 CO2 | 声明 IPCC 层级、公式版本、因子、水分管理分层、氮项及所有覆盖值；不得替换为未标记的通用排放值。 | 计算工作簿与来源引用 |
| `dq_residue_allocation` | 秸秆及其他输出 | 记录残余物去向、产品或废物状态、水分、目的地、分配层级与敏感性。 | 去向记录与分配工作表 |
| `dq_postharvest` | 清理、干燥、储存 | 按批次核对纳入作业、损失、能源、时间、持续期及处理前后含水率。 | 批次与设施记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 数据集身份 | 如产品为稻种、糙米、精米、碎米、蒸谷米或其他超出 CPC 01132 的产品，或参考流 UUID 不是 `bdbb913b-620c-42a0-baf6-c5802a2b6c4b`，则失败。 | `epd-international-food-beverage-2025-03` |
| `validate_reference_mass` | 定量参考 | 如参考输出不是使用规定质量属性与质量单位组、按接收湿质量计的 1,000 kg，或缺少含水率基准，则失败。 | `fao-rice-postharvest-operations` |
| `validate_qualifiers` | 必填元数据 | 缺少任何参考流必填限定项则失败；报告缺失项是否阻断可比性或计算。 | `fao-rice-production-guidelines`; `ipcc-2019-cropland-rice` |
| `validate_boundary` | 纳入与排除活动 | 必需前景作业或适用的田间直接排放无理由遗漏，或未明确声明边界偏离却纳入下游碾米或农场外加工，则失败。 | `fao-rice-production-guidelines`; `ipcc-2019-managed-soils` |
| `validate_activity_data` | 前景记录 | 种子、物料、水、能源、输出或秸秆记录依赖未标记默认值则失败；标记缺少的校准、单位基准、时间、田块或产品身份。 | `fao-rice-production-guidelines`; `irri-alternate-wetting-drying` |
| `validate_emissions` | CH4、N2O 与石灰/尿素 CO2 | 适用直接排放缺失、重复计量，或计算缺少可追溯活动数据、层级、因子、公式与归一化，则失败。 | `ipcc-2019-cropland-rice`; `ipcc-2019-managed-soils` |
| `validate_allocation` | 共产品与残余物 | 未先考虑避免分配即实施分配、残余物状态不清、因子不核对，或经济方法缺少价格期披露与敏感性，则失败。 | `eu-pef-2021-2279` |
| `validate_storage_ready` | 适宜储存声明 | 声称适宜储存时，如实测含水率超过湿基 14%，或未记录干燥时点及储存状态，则失败。对明确声明为刚收获或不适宜储存的稻谷不应用本规则。 | `fao-rice-postharvest-operations` |
| `validate_traceability` | 来源与计算 | 来源 ID、天工流 UUID、前景记录、换算因子或计算工作簿无法追溯至所提交数据包，则失败。 | `eu-pef-2021-2279` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 稻谷种植前景数据包及经评审的农场门过程投影 |
| downstream_use | 食品、饲料及其他稻谷供应链的 LCA 过程与生命周期模型构建 |
| allowed_use | 在声明农场门和水分基准下表示的 CPC 01132 未加工、未去壳稻谷 |
| excluded_use | 稻种；糙米、精米、碎米、蒸谷米或包装大米；无法核实产品与边界身份的通用稻米数据集 |
| required_metadata | 全部参考流限定项；过程边界；田块与作物周期身份；来源链接；前景采集协议；IPCC 层级和因子；秸秆去向；分配；数据质量披露 |
| required_quality_disclosure | 时间、地理和技术代表性；完整性；仪器校准或不确定性；代理；缺失记录；计算选择 |
| update_trigger | 产品分类、农场门状态、生产路线、水分管理制度、地理、作季、过程边界、排放方法、秸秆去向、分配或重要数据来源发生变化 |

## 11. 数据来源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `epd-international-food-beverage-2025-03` | standard | EPD International，PCR 2025:03 Food and beverage products，版本 1.0.1，有效至 2030-07-14，https://www.environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5（检索于 2026-08-07） | 行业 PCR 背景、声明单位基准、上下游边界框架 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021H2279R(01)（检索于 2026-08-07） | 分配层级、披露与敏感性 |
| `ipcc-2019-cropland-rice` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines，Volume 4，Chapter 5 Cropland，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf（检索于 2026-08-07） | 稻田甲烷公式、水分管理与有机改良物因子、作物周期分层 |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines，Volume 4，Chapter 11 N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf（检索于 2026-08-07） | 直接与间接 N2O、秸秆氮、石灰和尿素 CO2 |
| `fao-rice-production-guidelines` | extension_guidance | FAO，Production guidelines for rice，https://openknowledge.fao.org/bitstreams/2ca3d2f4-30d0-4080-b7fe-21f84e984db8/download（检索于 2026-08-07） | 种植过程分解与前景数据采集 |
| `fao-rice-postharvest-operations` | official_guidance | FAO，Rice Post-harvest Operations，https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_RICE.pdf（检索于 2026-08-07） | 含水率测量、条件性干燥与适宜储存判据、收获后记录 |
| `irri-alternate-wetting-drying` | extension_guidance | International Rice Research Institute，Alternate Wetting and Drying，https://ghgmitigation.irri.org/mitigation-technologies/alternate-wetting-and-drying（检索于 2026-08-07） | 条件性 AWD 田间协议与水分管理观察 |
