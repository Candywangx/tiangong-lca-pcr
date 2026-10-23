---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-stimulant-spice-and-aromatic-crops-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他刺激性、香辛及芳香作物，未列明者

## 1. 范围与适用性

本 PCR 用于指导一种栽培香辛或芳香作物产品的前景数据包，范围从作物建立和管理到收获，以及在选定时的首次初级调理交接。每个数据包必须描述一个植物种、一个植物器官或产品部分、一条生产路线、一个物理状态和一个申报交接点。不得在同一清单中合并不同物种、器官、鲜干状态、收获日期或生产系统；类别级 PCR 不使这些产品可以互换。

覆盖路线包括受管理的作物生产、目标植物材料的收获或采集，以及可选的首次分选、清理、清洗、干燥或其他简单稳定化。申报交接点应为：(a) 农场交接处的收获作物，或 (b) 首次初级调理交接后的同一作物产品。数据集必须选择一个交接点；若纳入调理，则纳入其输入、输出、损失和适用的田间运输，不得再把原始收获物作为第二个参考输出。

本 PCR 排除咖喱粉和咖喱酱、混合或配制调味品、提取油或油树脂、后续研磨或碾磨、灭菌、混配、零售包装以及后续储存或分销，也排除野外采集物和分类中已有其他具体作物类别覆盖的产品。本 PCR 排除配制咖喱粉、咖喱酱和混合调味品。仓库中的 CPC 3.0 分类资料以标题标识 01699 叶类；本 PCR 的作物范围不构成对该叶类全部产品的精确覆盖。`docs/adr/cpc-01699.md` 已接受 `narrower` 映射；分类接受不代表产品流 UUID 已核实或方法学已获批准。

一年生作物、根茎作物和多年生草本或树木可能采用不同的种植、收获和生产期间路线。应依据当前场址和作物记录申报实际路线。多年生作物应分别报告建立期和生产期，或采用第 7 节的期间归属规则。若一项作物有多个预期植物产品，即使本 PCR 参考流只覆盖其中一个，也应披露每个产品及其交接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-stimulant-spice-and-aromatic-crops-n-e-c |
| classification_refs | CPC 3.0:01699；已接受 `narrower` 映射; mapping relation: narrower |
| covered_products | One cultivated, unmixed and unextracted spice or aromatic crop product, including a specified species and plant part such as saffron stigmas, turmeric rhizomes, dill herb or seed, thyme, bay leaves, Xylopia aethiopica seeds, or angelica stems, at the declared harvest or first primary-conditioning state |
| excluded_products | Curry powders and pastes; other mixed seasonings; extracts and essential oils; ground or milled products; sterilized, blended, or otherwise manufactured products; wild-collected material; products covered by another specific crop category |
| representative_product | One named crop species and plant organ, in one declared fresh or dried state, at either farm harvest handoff or first primary-conditioning handoff |
| production_route | Managed cultivation → crop-specific productive period → harvest/capture → optional primary sorting, cleaning, washing, drying, or simple stabilization → declared handoff |
| market_state | Bulk, unblended agricultural crop material with declared species, plant part, grade, and moisture or other relevant state; no retail presentation |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | One crop-specific spice or aromatic plant product at the selected handoff |
| How much | 1 kg net product at the declared state and gate |
| How well | One botanical species and product part; declared cultivar or variety when known; fresh or dried state; measured moisture content for dried material; declared grade and contamination or rejection criteria |
| How long or cycle | One identified crop lot and crop cycle. For perennial crops, include the establishment and productive periods or document how establishment burdens are attributed across productive output. |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Crop-specific spice or aromatic product at declared gate (UUID unresolved) |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Botanical species; plant organ or product part; cultivar or variety when known; country and production site; annual, rhizome, or perennial route; crop cycle and harvest lot; fresh/dried/other declared state; moisture content for dried product; grade; harvest or first-conditioning gate; whether washing, drying, stabilization, and off-farm transfer occurred |

不能从宽泛的作物家族标签推断所选 UUID。只有在数据集明确物种、植物部分、物理状态、交接点、地理位置和相关产品分类后，才能解析参考产品。候选面积时间流不是产品参考流。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| crop_product_mass | Reference product, intermediate crop batches, saleable grades and crop residues | Mass; use the verified property exposed by the selected flow | kg | 每次交接记录净质量和物料状态；没有实测含水率和明确计算，不得将鲜质量换算为干质量；各等级及物种数量分开。 |
| irrigation_volume | Irrigation water | Volume or mass compatible with the verified water flow | m3 preferred; kg permitted with documented conversion | 采用跨声明产品供水边界的计量或供应记录交付量，保留来源及测点。水源取水记录须先经供水损失、回水和存水核对，才能推得交付量。前景直接取水属于分水源基本流输入，内部交付不是另一笔外购。体积换质量须有据密度和条件；降雨仍为场址背景。 |
| product_moisture | Fresh or dried reference and intermediate crop products | Mass fraction of water or water activity, as appropriate | % wet basis and/or dimensionless aw | 记录测量方法、取样基准、日期及批次；声称干态时报告适用买方或产品规格，不得对全部物种和器官套用同一含水率阈值。 |
| land_occupation | Crop production | Area-time | ha·year | 按各声明生产期间计量作物占用面积及时间；区分年度作物占用与多年生群落建植及生产年度。 |
| transport_service | Field-to-conditioner transfer | Mass-distance | t·km | 按声明路线净运输作物质量和载货距离计算；车辆、载荷、路线及空返处理分列，不将自营燃料重复计作外购运输服务。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | The declared crop site and its pre-establishment condition, or the beginning of the explicitly selected crop period for an existing stand; report prior land conversion and perennial establishment when they are inside the study period or attributed to the reference product. |
| starting_condition_role | Primary crop producer and first-handoff product supplier |
| product_classification_scope | One CPC 01699 crop product only after species, plant part, physical state, and gate are identified; this PCR does not cover mixed curry powders or pastes and does not imply exact coverage of the full CPC leaf. |
| recursive_input_rule | Record purchased or transferred seed, rhizome, bulb, cutting, seedling, or other propagation material as an actual input. If propagation material is retained from the same site, disclose its source and avoid recursively linking the same crop output as both an upstream dataset and a foreground input. |
| upstream_dataset_requirement | Use verified upstream datasets for purchased propagation material, nutrient products, crop-protection products, water supply, energy carriers, and third-party transport or treatment services when included. Record the actual exchanged product and its composition; do not infer an upstream identity from a 具体流身份核验. |
| disclosure | State the crop and plant part, site and period, production and harvest route, area and yield basis, product state and moisture, selected gate, conditioning operations, measured grades, off-grade and residue destinations, and all period or shared-asset attribution choices. |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| crop_route_start | Crop establishment and management | Include crop establishment, productive management and field occupation for the declared crop periods. Include prior conversion only when it occurred within the selected accounting period or is explicitly attributed under the study goal; report the land history either way. | ipcc-2019-managed-soils |
| harvest_gate | Harvest and first handoff | Treat harvest as a distinct responsibility between managed plant growth and crop conditioning. Record the crop material collected, its state and handoff, plus incidental loss and non-target biomass by actual destination. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| conditioning_gate | First primary conditioning | Include only the operations performed before the selected first conditioning handoff. Washing is conditional on the actual route; do not add a wash step where the crop or contamination protocol does not require it. Drying and any stabilization are route-specific and require measured inputs and product-state checks. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| gate_exclusivity | Reference product | A dataset shall select the harvest gate or the first primary-conditioning gate. When conditioning is included, the harvested crop is an internal intermediate and shall not be counted again as the reference product. |  |
| route_alternatives | Crop and conditioning technology | Declare the selected crop life-history and technology route. Rainfed and irrigated cultivation, manual and mechanized harvest, and ambient/solar and mechanical drying are route alternatives; report observed coexistence where it occurs and never average distinct crop species or product states into one inventory. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| process_handoffs | Crop, harvest and conditioning nodes | Identify the input material state, output state, destination and responsible site for each process. Use measured lot transfer records to connect nodes and reconcile input, product, residue, reject and moisture changes. | codex-spice-mycotoxin-practice-2017 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| managed_crop_production | Managed crop establishment and production | required | Record annual, rhizome, or perennial route; separate establishment and productive periods for multi-year crops. | Managed biological production | Crop area and production period linked to net target-organ output |
| harvest_capture | Harvest and field capture | required | Identify manual or mechanized harvest and the actual target organ, collection state and handoff. | Harvest/capture | Net harvested lot by botanical product and grade |
| primary_conditioning | First primary conditioning and stabilization | conditional | Include when sorting, cleaning, washing, drying, or simple stabilization occurs before the selected gate. If absent, the reference flow leaves at the harvest gate. | Material treatment, preservation and primary conditioning | Net accepted conditioned output and material-state change by lot |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：作物建立与生产 (`managed_crop_production`)

本过程负责作物建立和生物生产，终点是待收获植物材料交接。收获前期间的输入应归入其实际生产期间。预期输出是申报物种和植物部分；其他预期输出、保留残余物、移除残余物和损失应按实际去向分类。

#### 输入
##### 产品流

###### 种子或其他繁殖材料 (`propagation_material`)

记录用于建立或更新该作物的实际种子、根茎、鳞茎、插条、幼苗或其他种植材料，注明植物来源、形态、数量、期间及采购或自留来源；没有外部或转入材料时省略该交换。

- 选定流: 作物特定种子或繁殖材料（身份依声明物种及繁殖形态确定；UUID 未解析）
- 流属性/单位: Mass / kg or item count as supported by the verified flow
- 数量规则: Measured or supplier-recorded planting material, normalized using the crop-period and reference-product records
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate, with the source crop period retained.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_propagation_material`
- 来源: `unsd-cpc-01699`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg propagation material/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 尿素肥料投入（`fertilizer_nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate, retaining field and crop-period records.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_nutrient_application`

###### 磷酸一铵肥料投入（`fertilizer_nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate, retaining field and crop-period records.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_nutrient_application`

###### 氯化钾肥料投入（`fertilizer_nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate, retaining field and crop-period records.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_nutrient_application`

###### 施用的牛粪肥投入（`fertilizer_nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate, retaining field and crop-period records.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_nutrient_application`

###### 农业石灰石投入（`fertilizer_nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate, retaining field and crop-period records.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_nutrient_application`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 地下水灌溉用水（`irrigation_water`）

条件性单物质交换：仅在实际路线和记录证明使用或排放地下水灌溉用水时纳入。其他产品、燃料、废物或排放物种须分别建立原子清单行，独立记录数量、状态和身份；不得从示例推定必然使用。

- 选定流：地下水灌溉用水
- 流属性/单位：体积 / m3
- 数量规则：依据实际路线记录，仅计量或计算本过程与期间的地下水灌溉用水；不得混合其他物种或能源。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
原始活动或阶段基准：Per 1 hectare and crop year, then normalize to the selected gate output.

- 归一化基准：每声明的参考流
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_irrigation`

###### 中压电力投入（`crop_production_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
原始活动或阶段基准：Per 1 hectare and crop year, then normalize to the selected gate output.

- 归一化基准：每声明的参考流
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_crop_energy`

###### 柴油投入（`crop_production_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
原始活动或阶段基准：Per 1 hectare and crop year, then normalize to the selected gate output.

- 归一化基准：每声明的参考流
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_crop_energy`

##### 废物流

##### 基本流

###### 作物土地占用 (`crop_land_occupation`)

记录申报产品路线占用的作物面积和时间。混合使用田块应测量或说明该作物的面积和期间，并在需要时应用共享设施或共产品规则。

- 选定流: 声明作物及土地覆盖状态的农业用地占用（土地类别确认前 UUID 未解析）
- 流属性/单位: Area-time / ha·year
- 数量规则: Measured crop area multiplied by the attributed occupation period
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_area_and_land_history`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: ha-year/t selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 土地转换 (`crop_land_transformation`)

仅当土地转换发生在研究期间内，或已明确归属于该产品时纳入。识别转换前后土地覆盖、面积、日期和证据；无符合条件的转换时省略，不得把占用报告为转换。

- 选定流: 记录的初始至最终土地覆盖类别转变（土地类别确认前 UUID 未解析）
- 流属性/单位: Area / ha
- 数量规则: Measured converted area; calculate zero only when the site history confirms no conversion in scope
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_area_and_land_history`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: ha transformed/t selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
#### 输出
##### 产品流

###### 待收获目标植物材料 (`harvest_ready_crop_material`)

记录交给独立收获操作的立株或已达收获状态的目标器官。数量和产品身份必须与收获输入采用相同批次基础；除非系统边界在收获处结束，否则它是内部交接。

- 选定流: 一种声明物种及植物器官的待采收状态（UUID 未解析）
- 流属性/单位: Mass / kg at measured moisture, or a declared count unit where mass cannot be measured
- 数量规则: Crop-specific harvestable target-organ amount linked to the lot and the harvest output record
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_harvest_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg harvest-ready material/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 废物流


###### 移除的非目标作物生物量 (`removed_crop_biomass`)

仅当非目标生物量离开作物系统并成为废弃物或残余物时记录。留在田间或还田的生物量按 crop_residue_to_soil_identity_and_fate 保留在内部残体及养分台账，不作为外运废物或集合生物量基本交换；仅核算实际物质特定释放及接收区室；销售或作为共产品使用时，应归入实际预期产品输出。

- 选定流: 送往声明废物去向的作物特定非目标植物生物质（UUID 未解析）
- 流属性/单位: Mass / kg dry matter where measured
- 数量规则: Measured removed mass and actual destination; distinguish dry matter from water loss
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_field_residues`
- 来源: `codex-spice-mycotoxin-practice-2017`
- 数量范围: Physical disposition mass-balance screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg discarded biomass/kg removed biomass
  - 基准: The measured discarded portion of the removed biomass lot
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`


###### 作物生产损失或移除残余物 (`production_loss_residue`)

仅用于以测量废弃物形式离开生产过程的生物量。应与收获目标作物、可销售产品以及留在或还田的残余物区分。

- 选定流: 采收前移除或废弃的作物特定生物质（UUID 未解析）
- 流属性/单位: Mass / kg dry matter where measured
- 数量规则: Measured amount and destination by crop period; omit if no such removal occurs
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_field_residues`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg loss or residue/kg harvest-ready material
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 基本流

###### 直接土壤一氧化二氮 (`soil_nitrous_oxide`)

只有在前景数据集具备活动数据并选定管理土壤方法时，才报告直接土壤 N₂O。按申报气候、土壤、氮输入和方法层级选择因子，区分直接排放、间接途径和上游肥料制造，并披露省略的途径。

- 选定流: 管理作物土壤向空气排放的一氧化二氮（UUID 未解析）
- 流属性/单位: Mass / kg N2O
- 数量规则: Calculate from collected nitrogen additions and the selected IPCC managed-soils method; retain factor choice and N-to-N2O conversion
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_nutrient_application`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg N2O/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
### 过程：收获与田间采集 (`harvest_capture`)

收获作为独立操作，是因为它从受管理作物中移除申报的植物器官，并在初级调理前形成可测量的采集批次。记录生产或田间背景、实际采集方法和交接，并将预期输出与偶发损失和田间残余物分开。

#### 输入
##### 产品流

###### 待收获作物批次 (`harvest_ready_batch_input`)

接收来自作物生产的待收获批次，将物种、器官、作物期间和批次编号与生产输出匹配；不得将其视为外购上游产品。

- 选定流: 作物特定待采收材料的内部转移（与生产产出使用相同未解析身份）
- 流属性/单位: Mass / kg at measured moisture, or the same declared count unit used by production output
- 数量规则: Reconciled to the harvest-ready output record for the same lot
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_harvest_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg harvest-ready batch/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 中压电力投入（`harvest_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_energy`

###### 柴油投入（`harvest_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_energy`

#### 输出
##### 产品流

###### 初次收获作物产品 (`harvested_target_product`)

记录实测的目标物种和植物器官的收获状态。只有选择收获交接点时才是参考输出；纳入初级调理时，它是内部中间流。

- 选定流: 声明物种及植物器官在采收时的实测新鲜或其他采收状态（UUID 未解析）
- 流属性/单位：质量 / kg

原参考状态单位说明：Mass / kg at measured moisture

原始产出计量与核对要求：Net harvested mass by lot after tare, linked to grade and moisture records

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`
- 数量范围: Harvest-lot reconciliation screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg accepted target product/kg gross target-organ mass handled
  - 基准: Measured gross target-organ mass entering harvest and classified lot outputs
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

###### 降级可销售作物产品 (`lower_grade_product`)

记录仍按申报用途销售或转移的降级目标作物。它是独立的预期输出和交接，不是废物流；注明等级和去向。

- 选定流: 同一声明作物物种及植物器官的实际较低等级可销售状态（UUID 未解析）
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Measured saleable downgraded mass by lot and destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg lower-grade product/kg harvested crop
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 废物流

###### 收获废弃物料 (`harvest_discard`)

记录收获时被拒收或废弃的物料，并与还田物料、可销售降级产品、返工物料和合格目标输出分开。返工时关联批次与返工过程，合格产品只计一次。

- 选定流: 采收时的作物特定拒收或废弃植物材料（UUID 未解析）
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Measured amount by reason and destination; omit a zero row only when the lot inspection record supports no discard
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `codex-spice-mycotoxin-practice-2017`
- 数量范围: Harvest discard mass-balance screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg discarded material/kg gross harvested material
  - 基准: Measured incoming harvest lot before grade and destination separation
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

##### 基本流

### 过程：首次初级调理与稳定化 (`primary_conditioning`)

只有当选定交接点前发生初级调理时才纳入本过程。过程从原始收获批次开始，以申报的分选、清理、清洗、干燥或其他稳定化作物产品结束。描述处理前状态、干预、处理后状态和交接。清洗是可选项，不必要时省略；合格、降级、拒收、回收和废弃状态分别记录，批次记录不得混合不同香料或收获日。

#### 输入
##### 产品流

###### 原始收获作物批次 (`raw_harvest_batch`)

只有在选定交接点前发生初级调理时纳入本过程。过程从原始收获批次开始，至分选、清理、清洗、干燥或其他稳定化后的申报产品结束；注明处理前后状态和交接。清洗是可选路线，不需要时省略；合格、降级、拒收、回收和废弃状态分开记录，不混合不同香料或收获日。

- 选定流: 声明作物特定原始采收批次（与采收产出使用相同未解析身份）
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Weighed net incoming lot, matched to the harvest handoff
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg raw harvest batch/kg conditioned product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 调理清洗水 (`conditioning_water`)

仅在实际清洗或湿法清理时纳入。按实际来源和数量记录新鲜或供应水；不要添加默认清洗交换，因为并非所有香料都需要清洗，非必要清洗还可能扩散污染。

- 选定流: 实际作物清洗或湿法清理所用供应水
- 流属性/单位: Volume / m3 preferred; use verified selected-flow property and unit
- 数量规则: Metered or supplier-recorded volume by batch, including any recirculation or reuse record
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
原始活动或阶段基准：Per 1 tonne of conditioned product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_water`
- 来源: `codex-spice-mycotoxin-practice-2017`; `fao-herb-spice-quality-handbook`
- 数量范围: Provisional first-pass screening estimate for an active wash route
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: m3/t conditioned product
  - 基准: One tonne of conditioned crop output; zero applies when no washing occurs
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 中压电力投入（`conditioning_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
原始活动或阶段基准：Per 1 tonne of conditioned product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_energy`

###### 柴油投入（`conditioning_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
原始活动或阶段基准：Per 1 tonne of conditioned product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_energy`

###### 田间至调理场的运输服务 (`raw_crop_transport`)

当原始作物由田间运往独立的初级调理场所且使用第三方货运时纳入本服务。自有运输应在责任过程中记录实际车辆燃料或能源，并省略本服务以避免重复计算。

- 选定流: 声明未加工农作物转移所需公路货运服务
- 流属性/单位: Mass-distance / t·km
- 数量规则: Net crop mass multiplied by loaded route distance; disclose vehicle, load, route and empty-return allocation
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Route-specific (`route_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_conditioner_transport`
- 来源: `iso-14044-lca-allocation`
- 数量范围: Provisional route screening estimate
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1000
  - 单位: t·km/t raw crop
  - 基准: One tonne of raw crop on its loaded field-to-conditioner route; zero applies when conditioning occurs at the field site
  - 基准类型: Transport service (`transport_service`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 外部废水处理服务 (`wastewater_treatment_service`)

仅当调理废水送往外部处理者且处理属于选定产品系统时纳入。记录实际服务和处理去向；同一废水不得同时计入外部服务和场内处理过程。

- 选定流: 整备出水的废水处理服务
- 流属性/单位: Mass or volume / native verified service unit
- 数量规则: Supplier invoice, treatment log or metered effluent amount by batch
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_wastewater`
- 来源: `fao-herb-spice-quality-handbook`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: m3 treated wastewater/t conditioned product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
#### 输出
##### 产品流

###### 初级调理作物产品 (`conditioned_reference_product`)

记录纳入的初级调理操作后的目标作物净产品，申报其物种、植物部分、鲜干状态、含水率和等级。只有选定初级调理交接点时才是参考输出。

- 选定流: 一种声明作物特定香辛或芳香产品的初次整备后状态（UUID 未解析）
- 流属性/单位：质量 / kg

原参考状态单位说明：Mass / kg at measured moisture

原始产出计量与核对要求：Net accepted output after tare and grading; record mass and lot-level moisture

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`
- 数量范围: Conditioning mass-balance screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg accepted output/kg raw crop input
  - 基准: Net accepted product compared with the incoming raw-crop lot; report removed water separately
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

###### 降级初级调理产品 (`conditioned_lower_grade_product`)

当降级产品按申报用途销售或交接时分别记录。它仍是预期产品输出，不得同时作为废物或合格参考产品。

- 选定流: 同一作物特定材料的实际较低等级整备状态（UUID 未解析）
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Measured net amount by grade and destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg lower-grade conditioned product/kg raw crop input
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 废物流

###### 调理拒收物和废弃残余物 (`conditioning_rejects`)

按去向记录清理拒料、异物、不合格损伤物料和废弃残余物。返工、回收和可销售降级产品保持独立；同一质量不得同时计为拒收废物和产品。

- 选定流: 送往声明废物去向的作物特定拒收材料及整备残余物（UUID 未解析）
- 流属性/单位: Mass / kg at measured moisture or dry matter, as reported
- 数量规则: Weighed or sampled amount by incoming batch and actual destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `codex-spice-mycotoxin-practice-2017`; `fao-herb-spice-quality-handbook`
- 数量范围: Conditioning reject mass-balance screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg discarded material/kg raw crop input
  - 基准: Measured incoming raw-crop lot before sorting, conditioning and destination separation
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

###### 调理废水 (`conditioning_wastewater`)

记录清洗或湿法清理产生的废水，注明实测体积或质量、必要时的悬浮或去除物、去向以及场内或外部处理。干法过程不产生废水时省略。

- 选定流: 声明作物整备批次产生的废水（UUID 未解析）
- 流属性/单位: Volume / m3 or mass / kg, matching the measured output
- 数量规则: Metered or measured wastewater amount by batch and destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
原始活动或阶段基准：Per 1 kg of product at the selected gate.

- 归一化基准：每声明的参考流
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_wastewater`
- 来源: `fao-herb-spice-quality-handbook`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: m3 wastewater/t conditioned product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 基本流


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：声明交接点的作物特定香辛或芳香产品（UUID 未解析）
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：声明交接点的作物特定香辛或芳香产品（UUID 未解析）
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | Shared crop and conditioning processes | 当作物特定投入、面积、设备使用、批次或产出可直接可靠计量时，细分共享作业；保持各作物、植物器官、等级及交接可识别。 | iso-14044-lca-allocation |
| allocation_coproducts | Multiple intended crop products | 识别全部预期产出及交接；细分后以能够解释共享负担的因果物理关系分配。无可辩护物理关系时，记录所选基准和期间；仅在研究目标支持时采用经济分配或系统扩展，并披露理由及敏感性。没有预期产品功能的残体和废物不作共产品分配。 | iso-14044-lca-allocation |
| allocation_productive_periods | Multi-year or perennial crops | 建植、未结果及生产期间分别报告；需要寿命归属且无法细分时，按实测或明确预测的作物特定产出，将建植负担归属声明生产寿命产出，并披露寿命证据及敏感性；不得在各生产年度重计同一建植负担。 | iso-14044-lca-allocation |
| allocation_shared_assets | Irrigation, harvest and conditioning infrastructure | 共享机械、泵、干燥器、储存场地及公用工程先按计量使用量或运行时间归属；缺失时使用有据吞吐量或容量使用等物理驱动，其他基准须有理由；记录所有使用过程和期间，防止双计。 | iso-14044-lca-allocation |
| allocation_reject_rework | Rework, downgrade, recovery and discard routes | 将每个拒收批次追踪至返工、回收、降级或废弃；返工增量投入只计一次，合格产品仅在最终交接计数；有用途降级物作为独立预期产出。没有处理或替代路线证据，不得给予废物处理抵扣。 | iso-14044-lca-allocation; codex-spice-mycotoxin-practice-2017 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_propagation_material | managed_crop_production | propagation_material | supplier, seed, nursery or transfer record | species, plant part, propagation form, variety, quantity, source, date, field, crop period | Reconcile invoices, nursery tickets or internal transfer records to planted area；原始汇总与分配：Sum by species, propagation form, field and period; normalize to selected gate output | kg or declared count | Each planting or replanting event | Establishment and replanting events in scope | Declared field and crop | 每声明的参考流 | Source documentation, unit check and lot traceability |
| cp_nutrient_application | managed_crop_production | fertilizer_nutrient_inputs; soil_nitrous_oxide | field application log, invoice, soil test | actual product, mass, nutrient grade, N form, organic/mineral status, application date, field, crop period, soil and climate fields used by selected method | 每项实际产品/配方分开采集，保留其原子输入卡、实物产品质量、组成、供应方、施用事件和原始单位。核对库存和实际施用，分析计算养分而不重复产品交换，每个有据数量通过匹配最终合格产出归属并归一化一次。 | kg product and kg nutrient | Every application; summarize by crop period | All included establishment and productive periods | Declared crop fields and shared application equipment | 每声明的参考流 | Invoices, application logs, calibration and source method record |
| cp_crop_protection | managed_crop_production | crop_protection_products | application log and supplier product record | product, active ingredient, amount, treated area, application date, target, crop stage, field, pre-harvest interval where applicable | Reconcile application records and purchased quantities; note unused stock；原始汇总与分配：Allocate actual applied amount to treated area and crop period; do not allocate unused stock as applied | kg product and active ingredient | Every application | All included crop periods | Declared crop fields and crop lot | 每声明的参考流 | Product label, application log, invoice and operator record |
| cp_irrigation | managed_crop_production | irrigation_water | meter or water-supplier record | water source, meter start/end, volume or mass, date, field, crop, irrigated area, pumping event | 在所定义接收边界计量实际外部交付灌溉产品，保留来源、责任方、计量位置、期间和损失。不将取水源表直接等同交付量，也不从已测外部交付量再扣内部循环/回用。水源供水网损失、回流和库存单独核对。实际自有直接取水采用单独相容基本资源流，声明边界内输水为内部转移；外购供水的上游取水只覆盖一次。有据原始数量按匹配合格产出归属并归一化一次。 | m3 preferred; verified native unit permitted | Each irrigation event or billing period | Each crop year and productive period | Declared crop field and water source | 每声明的参考流 | Meter calibration, invoice, water-source record and period reconciliation |
| cp_crop_energy | managed_crop_production | crop_production_energy | meter, fuel receipt and equipment log | carrier, amount, unit, equipment, operation, field, date, shared use, fuel quality or calorific value when converted | Reconcile fuel/electricity records and allocate shared use by measured operation；原始汇总与分配：Aggregate by actual process and carrier; normalize using crop-period output | Carrier-native unit; kWh-equivalent only with documented conversion | Each operation or billing period | Each crop year and productive period | Declared crop site and equipment | 每声明的参考流 | Meter or invoice, equipment log and conversion evidence |
| cp_area_and_land_history | managed_crop_production | crop_land_occupation; crop_land_transformation | field register, map, lease, land history or geospatial record | field boundary, crop area, land-cover class, occupation dates, conversion date and prior/final cover | Reconcile current field map with dated land-history evidence；原始汇总与分配：Calculate area-time by period; report transformation separately from occupation | ha, ha·year, date | Each crop period and each land change | Full declared crop period and any conversion in scope | Declared crop field | 每声明的参考流 | Geospatial or land register, dated records and area reconciliation |
| cp_harvest_batch | managed_crop_production; harvest_capture | harvest_ready_crop_material; harvest_ready_batch_input; harvested_target_product | crop lot, harvest ticket and scale record | species, plant organ, field, crop period, harvest date, gross/net/tare mass, moisture, quality state, transfer destination | Weigh or sample each lot using identified calibrated equipment; match inter-process lot id；原始汇总与分配：Reconcile production output, harvest input and harvested output without duplicate final output | kg and moisture basis | Each harvest lot | Each harvest date and crop period | Declared field and receiving process | 每声明的参考流 | Calibrated scale, lot identity, moisture measurement and signed handoff |
| cp_field_residues | managed_crop_production; harvest_capture | removed_crop_biomass; production_loss_residue; crop_residue_to_soil | field inspection, sample and residue disposition record | plant part, residue type, wet/dry mass, field, crop period, retained/removed/sold/discarded destination | Measure representative residue or disposal lots and document sampling method；原始汇总与分配：Partition the measured biomass among retained soil residue, intended output and discard; no duplicate destinations | kg dry matter preferred | Each crop period and material-disposition event | All included crop periods | Declared field and biomass type | 每声明的参考流 | Sampling records, dry-matter method and destination evidence |
| cp_harvest_energy | harvest_capture | harvest_energy | machinery meter, fuel receipt and harvest log | carrier, amount, equipment, operation, field, date, lot, shared use | Reconcile equipment and fuel logs to harvest operation；原始汇总与分配：Aggregate actual energy by harvest lot and normalize to selected gate output | Carrier-native unit | Each harvest operation or billing period | Each crop period | Declared harvest equipment and field | 每声明的参考流 | Meter/invoice, equipment log and lot cross-reference |
| cp_grade_and_disposition | harvest_capture; primary_conditioning | lower_grade_product; other_intended_crop_outputs; harvest_discard; conditioned_lower_grade_product; conditioned_coproducts; conditioning_rejects | grade inspection, packing/scale record, sales or disposal record | material identity, grade, mass, moisture, intended use, sale/transfer/discard/rework destination, lot and handoff |Inspect, weigh and record each declared grade and destination；原始汇总与分配：Mutually exclusive partition into intended product, rework, recovery, discard and waste; reconcile to incoming batch other_intended_crop_outputs_specific_output：保留原 other_intended_crop_outputs 所采集的每一实际预期产出，包括条件示例尚未表示的产品。这是必需的身份确认要求，不是交换。完成数据集前，每一实际产品须分别建立物理身份明确的卡片，记录材料或物种、物理状态、原生属性和单位、实测数量、接收方、交接点，以及兼容 UUID 或确切未解析身份。保留原批次、期间、产量关联及第 7 节分配义务；物理销售恰计一次，已计入所选参考产出分母的产品不得重复计入。不得从缺失记录推定产品配方、材料分离、数值范围或零数量。 conditioned_coproducts_specific_output：保留原 conditioned_coproducts 所采集的每一实际预期产出，包括条件示例尚未表示的产品。这是必需的身份确认要求，不是交换。完成数据集前，每一实际产品须分别建立物理身份明确的卡片，记录材料或物种、物理状态、原生属性和单位、实测数量、接收方、交接点，以及兼容 UUID 或确切未解析身份。保留原批次、期间、产量关联及第 7 节分配义务；物理销售恰计一次，已计入所选参考产出分母的产品不得重复计入。不得从缺失记录推定产品配方、材料分离、数值范围或零数量。 | kg at measured moisture | Each lot and destination event | Each harvest or conditioning lot | Crop species, organ, grade and handoff | 每声明的参考流 | Grade record, calibrated scale, sales/treatment documentation and lot ledger |
| cp_conditioning_batch | primary_conditioning | raw_harvest_batch; conditioned_reference_product | receiving, process and output lot records | incoming/output mass, tare, species, organ, crop date, moisture, quality, cleaning/drying route, handoff | Match intake and output lot records and measure moisture at declared points；原始汇总与分配：Reconcile inputs, output grades, rejects, removed water and measured process losses | kg, moisture % wet basis and/or aw | Each incoming and finished lot | Each included first-conditioning operation | Declared first-conditioning site and batch | 每声明的参考流 | Calibrated scales, sampling plan, moisture meter check and lot balance |
| cp_conditioning_water | primary_conditioning | conditioning_water | water meter, tank or supplier record | source, volume, meter reading, batch, wash operation, recirculation, reuse, date | Read a calibrated meter or reconcile batch tank volume and supplier record；原始汇总与分配：Sum fresh input separately from recirculated/reused water; normalize to output lot | m3 or verified native unit | Each washing batch | Each included washing operation | Declared conditioning site and crop lot | 每声明的参考流 | Meter/tank calibration, invoice and batch log |
| cp_conditioning_energy | primary_conditioning | conditioning_energy | equipment meter, fuel receipt and dryer log | carrier, amount, unit, dryer/cleaner, operation, batch, input/output moisture, operating time, shared use | Reconcile measured energy and operating records to each batch；原始汇总与分配：Aggregate by carrier and operation; allocate shared utilities by metered use or operating time | Carrier-native unit; kWh-equivalent only with documented conversion | Each batch or billing period | Each included conditioning season | Declared first-conditioning facility and equipment | 每声明的参考流 | Meter/invoice, dryer log, moisture measurements and calibration record |
| cp_conditioner_transport | primary_conditioning | raw_crop_transport | freight bill, vehicle and route record | crop mass, vehicle, loaded distance, origin, destination, load, date, third-party/own-account status, empty return | Reconcile waybill or vehicle log to weighed crop lot and route distance；原始汇总与分配：Loaded tonne-kilometres by lot; disclose return-trip allocation and exclude own-account fuel when service flow is used | t·km, t and km | Every transfer or shipment | Transfers within the selected boundary | Declared field and first-conditioning site | 每声明的参考流 | Waybill, vehicle log, route evidence and lot mass |
| cp_conditioning_wastewater | primary_conditioning | wastewater_treatment_service; conditioning_wastewater | wastewater meter, treatment invoice, discharge or treatment log | wastewater volume/mass, batch, source operation, destination, treatment route, provider and date | Meter, sample or reconcile service provider records to the crop batch；原始汇总与分配：Reconcile generated effluent with onsite reuse, discharge and treatment; avoid duplicate treatment routes | m3 or kg | Each washing batch or billing period | Each included wet-conditioning period | Declared site, discharge point and provider | 每声明的参考流 | Meter/sample, provider invoice, discharge permit or treatment log |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| crop_period_normalization | Managed crop production | 各作物期间投入按同期间选定交接点实测净产品产出归一化；建植、未结果、采收及生产期记录分开，仅在合并期间时执行第7节分配决定。 | Crop-period inputs, field area, product identity, period and net output | Inventory per 1 kg selected reference product plus period-specific source records |  |
| nitrogen_soil_n2o | Direct managed-soil N2O | 将所选 IPCC 管理土壤方程和因子用于有据氮添加及其他必需活动数据；按方法分子质量比将 N2O-N 换算为 N2O。记录因子、层级、气候/土壤条件及排除的间接路径，不将排放因子静默当作实测流。 | Nutrient composition and application, relevant soil/crop activity data, selected factor | Direct N2O to air per 1 kg selected reference product | ipcc-2019-managed-soils |
| harvested_lot_balance | Harvest and crop conditioning | 在一致含水率基准上核对进料作物、合格产品、低等级品、共产品、废物/拒收物、留存或移出残体、移出水及实测未解释损失；调查表观产出大于进料，并披露实际加水或添加物料。 | Gross and net batch weights, moisture, grades, residue and destination records | Reconciled product and residue exchanges by lot | mass-balance-identity |
| road_transport_work | Field-to-conditioner freight | 运输工作量＝净运输质量吨数×载货路线公里数；空返仅按明确、有据的分配处理，不将服务交换与同车直接燃料记录重复计入。 | Net crop mass, loaded route distance, vehicle and empty-return records | t·km by raw crop lot | iso-14044-lca-allocation |
| `crop_residue_to_soil_identity_and_fate` | `harvest_capture` | 按实测干湿基和实际去向核对作物残余物、收获损失和生物量。留田或还田生物量是支持分解与养分路径计算的内部残余物台账，不是外购资源或虚构的生物量基本交换。单独收集的材料须有实际产品／废物身份及去向；环境释放须识别物质与接收环境。 本规则替代含糊的聚合交换，不取消采集义务。数据集完整性通过前，每项实际交换须建立具体卡片、核实相容 UUID 或明确保留未解析身份，并记录数量、单位、阶段／期间、去向和证据。依据相连协议恢复可归属原始分子量，再按匹配的合格参考产出归一化一次。缺失数据不等于零，原聚合范围不得作为单项物流默认值。 | `cp_field_residues` | 按身份区分的交换和对账活动记录 | `codex-spice-mycotoxin-practice-2017` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrient_application`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| crop_identity_and_gate | Reference product and all process handoffs | 识别一个物种、植物部位、状态、等级、场址、期间及互斥的采收或初级处理交接点；仅在具体身份及支持行核实后记录产品 UUID。 | Crop/site records, lot identifier, product description and reviewed identity evidence |
| crop_period_completeness | Annual and perennial production periods | 适用时纳入建植、未结果及生产期间；披露准确时间窗口、生产寿命证据及所用分配。 | Planting and harvest dates, yield history, field register and calculation record |
| crop_input_completeness | Production and conditioning inputs | 将种植材料、每种实际肥料/改良剂配方、植保产品、水、能源、产出、降级/拒收、残余和排放驱动与原始记录核对。每种实际肥料/改良剂采用单独原子产品输入卡，保留产品质量、组成和施用记录；养分当量为属性/计算输入，不是重复产品数量。UUID缺失保留明确待核验状态。 | Invoices, application logs, meters, batch records and 具体流身份核验|
| harvest_and_grade_reconciliation | Harvest and conditioning outputs | 核对每项声明预期产出及交接；区分合格、低等级、其他共产品、返工、留田残体、废物和未解释损失，同一质量不计入两个去向。 | Lot balance, grade sheets, scale calibration, disposition and sales/treatment records |
| dried_product_state | Dried reference product | 记录所选交接点产品含水率及计量基准，以及适用稳定性/产品规格及取样方法；不得将干燥筛查范围当作强制产品限值。 | Moisture meter/oven results, calibration and the applicable buyer or official specification |
| shared_asset_and_period_attribution | Shared equipment, fields, dryers and utilities | 识别各使用过程及作物期间；尽可能按实测作业或物理使用量分配共享负担，记录所选分配及证据。 | Asset log, meter, operating time, capacity/use record and allocation worksheet |
| environmental_method_disclosure | Land, soil emissions and waste treatment | 识别土地覆盖、场址条件、排放方法和因子、直接/间接路径、废水路线及未解析基本流 UUID；原始证据缺失时说明排除及敏感性。 | Land history, activity data, selected IPCC method, method factor citation and treatment evidence |
| range_replacement | Provisional ranges | 推理估算仅作首轮筛查；审查/启用前用作物、地区、技术和交接点特定证据或前景记录替换，不视为通用允许值。 | Source-backed regional evidence or reviewed site records and range QA report |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_single_crop_lot | Product identity | 若清单合并多物种、植物器官、采收日、鲜/干状态或栽培系统，却没有独立交换和归属，则不通过。 | unsd-cpc-01699; codex-spice-mycotoxin-practice-2017 |
| validate_gate_and_reference | Reference product | 要求唯一选定交接点及参考产品身份；采收门不包括处理，初级处理门将收获物作为中间物，仅在参考交接点计处理后目标产品。 | codex-spice-mycotoxin-practice-2017 |
| validate_output_destinations | All production, harvest and conditioning outputs | 列举全部预期产出及交接；每个降级批次归类为有用途产品、返工、回收、废弃或废物；田间残体按留土、移出或预期产品区分。 | iso-14044-lca-allocation; codex-spice-mycotoxin-practice-2017 |
| validate_crop_periods | Annual, rhizome and perennial routes | 按作物期间核对投入产出；检查多年作物建植及生产寿命归属，防止建植或共享资产负担重复归属。 | iso-14044-lca-allocation |
| validate_flow_identity_bindings | Product inputs | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| validate_mass_and_moisture | Batch amounts and conditioned output | 检查秤皮重、质量单位、含水率基准、等级数量、移出水及产出质量平衡；产出/进料比超过1时，须有据物料添加或水分/状态解释。 | mass-balance-identity; codex-spice-mycotoxin-practice-2017 |
| validate_drying_stability | Dried product | 核实声明取样点的含水率或水活度测量及产品验收准则。Codex 指引将 aw 低于0.65列为足以防止香辛料霉菌毒素产生的条件；披露所选准则及适用性，不将单一含水率当作通用值。 | codex-spice-mycotoxin-practice-2017 |
| validate_conditioning_routes | Washing, drying and stabilization | 确认各条件作业实际发生，且投入、产出状态及去向有记录；省略未启用路线，未清洗时不添加清洗交换。 | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| validate_n2o_method | Soil nitrous oxide | 核算土壤直接 N2O 时要求活动数据、所选因子及方法层级；避免与上游产品数据集或间接路径双计，没有核实相容空气基本流时 UUID 保持未解析。 | ipcc-2019-managed-soils |
| validate_shared_assets | Shared equipment and facilities | 检查每项共享泵、干燥器、机械、田地或公用工程负担仅分配一次至实际使用过程及期间。 | iso-14044-lca-allocation |
| validate_range_status | Candidate amount ranges | 按各行数量规则、单位、分母及路线条件检查每项范围；推理估算是可替换筛查值。宽泛估算不适用时，审查/启用前须有证据支持的作物特定范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Primary foreground crop-production and first-handoff dataset for one spice or aromatic crop product |
| downstream_use | Secondary process data for foreground process packages and their lifecyclemodel projections; background_dataset use only when its source coverage and boundary are suitable |
| allowed_use | Site- and period-specific production of one identified species and plant part at the declared harvest or first primary-conditioning gate |
| excluded_use | An aggregate inventory for all CPC 01699 products; exact coverage of the full CPC leaf; curry powders/pastes, extracts, oils, milled goods, mixtures, wild collection, or post-gate storage and distribution |
| required_metadata | Species and variety when known; plant part; site and geography; cultivation and harvest route; crop period; area and output; gate; fresh/dried state and moisture; grades and co-products; irrigation, nutrient, crop-protection, energy and conditioning records; upstream and 具体流身份核验; attribution method |
| required_quality_disclosure | UUID gaps, source and measurement coverage, crop periods included, range evidence tier, moisture and grade basis, shared-asset allocation, output and waste reconciliation, emission method and factor, site and year representativeness |
| update_trigger | New route or gate; change in crop species/plant part or product state; new reference identity; new crop-period or allocation evidence; revised official spice handling or emissions methodology; replacement of candidate ranges with reviewed evidence |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-01699 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, code 01699, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification examples; the historical CPC 2.1 note and the current-leaf scope review are kept distinct |
| codex-spice-mycotoxin-practice-2017 | official_guidance | FAO/WHO Codex Alimentarius Commission, REP17/CF, Appendix VI, Code of Practice for the Prevention and Reduction of Mycotoxin Contamination in Spices (2017), https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FMeetings%252FCX-735-12%252FWD%252FREP17_CFe.aspx | Harvest timing, lot separation, crop handling, optional washing, drying, moisture/water-activity checks, grades, rejects and post-harvest route controls |
| fao-herb-spice-quality-handbook | handbook | FAO, Quality assurance for small-scale rural food industries, section 2.4 Herb and spice products, https://www.fao.org/4/V5380E/V5380E09.htm | Farm-to-primary-processing stages, washing, grading, cleaning, winnowing, drying and product-quality measurements |
| ipcc-2019-managed-soils | official_guidance | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct and indirect N2O method selection and nitrogen application activity data |
| iso-14044-lca-allocation | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | Subdivision, co-product attribution, shared process handling and documented allocation choices |
| mass-balance-identity | method_factor | Physical mass-balance identity: input material equals intended outputs, residues, waste, removed water and measured loss on a consistent moisture basis | Candidate QA guardrails for nonnegative mutually exclusive lot disposition; not an external source or product-specific yield factor |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
