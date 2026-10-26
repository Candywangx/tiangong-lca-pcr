---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cloves-whole-stems-raw
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 丁香（整梗），未加工

## 1. 范围与适用性

本 PCR 涵盖 *Syzygium aromaticum* 的受管理生产、多年生树体建园及生产寿命归属、成熟未开放花蕾簇采收、花蕾/梗分离、分级，以及仅限农场门口交付前完成的调理。接受批次可为声明梗状态的鲜态未加工整花蕾；若干燥属于农场门口路线，也可为农场干燥整花蕾。每个数据集只能声明一种交付状态。

不包括精油提取或蒸馏、研磨、混配、食品或烟制品制造、零售包装和门后运输。脱落梗、已开放花、果实、叶片、腐败花蕾和降级物料不得计入接受参考质量，除非按目的地单独建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cloves-whole-stems-raw |
| classification_refs | CPC 3.0: 01656, Cloves (whole stems), raw; mapping relation: exact |
| covered_products | Whole, unground clove flower buds harvested before opening, with lot-specific attached-stem condition declared, supplied at farm gate as fresh raw or farm-dried raw product |
| excluded_products | Clove oil or oleoresin; ground or blended cloves; detached stems sold for oil; leaves; fruits or mother cloves; opened flowers; manufactured spice preparations; retail-packed product |
| representative_product | Accepted whole unopened clove buds from managed perennial clove trees |
| production_route | Parent activity: managed perennial biological production. Production-route delta: sole/mixed crop and rainfed/supplemental-irrigation stands alter shared-land attribution, irrigation inventory, and records and are separate weighted strata. Technology-route delta: fresh hand-off, sun drying, and assisted drying alter topology, energy, water-loss, quality, and moisture records; one lot follows exactly one route. |
| market_state | Fresh raw or farm-dried raw whole buds at farm gate; moisture, maturity, grade, attached-stem condition, production system, and drying route declared |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | Accepted whole unopened clove buds at the declared farm-gate state |
| How much | 1 kg net accepted product |
| How well | Meets declared grade and moisture specification; excludes detached stems, opened flowers, spoiled buds, foreign matter, and unresolved rejects |
| How long or cycle | One reporting year of a productive perennial stand, with establishment, immature years, productive years, replacements, and termination indexed across the declared productive life |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 丁香（整梗），未加工 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; unopened-bud maturity criterion; fresh or farm-dried state; moisture content and basis; attached-stem condition; accepted grade; production system; stand age; reporting year; drying technology if used; farm-gate location |

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 交接时计量净质量，记录含水率及湿/干基准；没有实测含水率不得换算鲜、干批次。 |
| `intermediate_mass` | clusters, buds, stems, residues, rejects, moisture loss | Mass | kg | 称量每种状态，或按有据同批次质量平衡核对；同一状态不得计数两次。 |
| `nutrient_content` | 每项养分投入 | Mass | kg product and kg nutrient | 每一种实际矿质肥料、有机肥、石灰、堆肥、粪肥或其他改良剂分别记录为产品交换；保留其质量、水分和养分分析。养分汇总只能作为计算结果，不得作为合并物理流。 |
| `energy_carrier` | fuel and electricity | Energy or carrier mass/volume | MJ, kWh, kg, or L | 保留载能体身份、原始数量、换算因子、使用节点、批次及期间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Propagation material and prepared site enter establishment; an existing stand enters with age, density, prior establishment history, and remaining productive life declared |
| starting_condition_role | Starting condition for managed perennial production, not a zero-burden assumption |
| product_classification_scope | CPC 3.0 01656 whole raw cloves at farm gate |
| recursive_input_rule | Purchased raw cloves of this category in an aggregated lot remain separately quantified upstream inputs with conforming datasets and are not relabelled as on-farm production |
| upstream_dataset_requirement | Each purchased input and service uses representative upstream data; mixed-crop shared burdens retain the declared causal or allocation basis |
| disclosure | Declare geography, planting stock, sole/mixed crop, density, stand age, establishment year, productive-life assumption, replacement/termination, irrigation, harvest maturity, grade states, fresh/dried hand-off, drying method, moisture basis, and every residue/reject destination |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_phases` | establishment to farm gate | Include propagation, site preparation, planting, immature management, productive management, replacements, harvest, separation, grading, and route-dependent drying. Attribute establishment and long-lived assets across actual output over their service life. | `fao-ecocrop-clove`; `kau-clove-practices-2016` |
| `boundary_harvest_state` | harvest | Harvest mature unopened buds before flowering; keep clusters and incidental material distinct. Harvest is separate because it removes output while the perennial tree remains productive. | `icar-iisr-clove`; `kau-clove-harvesting` |
| `boundary_conditioning` | post-harvest | Include bud/stem separation and grading. Fresh lots bypass drying; dried lots record method, energy, duration, input/output moisture, mass loss, rejects, and stabilized hand-off. | `kau-clove-harvesting`; `unido-spice-postharvest-2015` |
| `boundary_downstream_exclusion` | downstream | Exclude extraction, distillation, grinding, blending, manufacture, retail packing, and post-gate transport. | `icar-iisr-clove`; `fao-ecocrop-clove` |
| `boundary_route_stratification` | alternative routes | Keep sole/mixed crop and rainfed/irrigated strata separate. Fresh, sun-dried, and assisted-dried lots are mutually exclusive routes and may only be output-weighted from route records. | `kau-clove-practices-2016`; `unido-spice-postharvest-2015` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Stand establishment and immature years | required | New, inherited, or replacement burden applies | Establish trees and shared infrastructure | Lifetime accepted output |
| `annual_tree_management` | Productive-year tree management | required | Every productive year | Manage trees and generate harvestable buds | Annual harvested cluster mass |
| `harvest_grade` | Harvest, separation, and grading | required | Every harvest lot | Pick clusters, separate buds/stems, classify accepted/downgraded/rejected states | Accepted fresh bud mass |
| `conditional_drying` | Farm-gate drying and stabilization | conditional | Declared farm-gate product is dried | Stabilize accepted buds by sun, solar, or assisted drying | Accepted dried mass |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：树体建园与未结果期（`stand_establishment`）

种植、未结果期作业、补植、终止，以及共享灌溉、道路、处理和干燥资产按时期索引，并仅在实际寿命接受产出上年化一次。

#### 输入
##### 产品流

资产清单必需记录：按具体材质和实测材料清单分别记录实际使用的立柱、金属丝、锚固件、支撑件、灌溉资产、安装及更换；按有记录的服务寿命及所有受益作物和过程分摊每项资产一次。不得以种植材料代替基础设施。

###### 丁香苗木（`establishment_materials`）

仅在丁香苗木跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。 建植和补植仅归属于其服务的生产期间；没有相应事件的既有种植地不得虚构此投入。
原始活动或阶段基准：per 1 kg accepted product over the serviced stand life。

- 选定流：丁香苗木
- 流属性/单位：质量 / kg
- 数量规则：实测丁香苗木的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_establishment_assets`
- 来源：`kau-clove-practices-2016`

###### 尿素肥料投入（`establishment_nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg accepted product after productive-life attribution.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 磷酸一铵肥料投入（`establishment_nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg accepted product after productive-life attribution.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 氯化钾肥料投入（`establishment_nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg accepted product after productive-life attribution.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 施用的牛粪肥投入（`establishment_nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg accepted product after productive-life attribution.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 农业石灰石投入（`establishment_nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg accepted product after productive-life attribution.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 建园及未结果期灌溉水 (`establishment_water`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 灌溉水
- 流属性/单位： Volume / m3
- 数量规则： Metered or validated supplemental water, annualized over lifetime accepted output
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg accepted product after productive-life attribution.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_water_records`
- 来源： `kau-clove-practices-2016`
- 数量范围： 暂定建园用水校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 50
  - 单位： m3/kg accepted product
  - 基准： annualized supplemental water per 1 kg accepted product
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出
##### 产品流

##### 废物流

##### 基本流

### 过程：结果期树体管理（`annual_tree_management`）

#### 输入
##### 产品流

###### 尿素肥料投入（`annual_nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg harvested cluster output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 磷酸一铵肥料投入（`annual_nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg harvested cluster output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 氯化钾肥料投入（`annual_nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg harvested cluster output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 施用的牛粪肥投入（`annual_nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg harvested cluster output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 农业石灰石投入（`annual_nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg harvested cluster output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`

###### 生产年灌溉水 (`annual_irrigation_water`)

将补充灌溉水与植保产品分开记录。

- 选定流： 灌溉水
- 流属性/单位： 体积 / m3
- 数量规则： 计量或核实输送至生产期种植园的水量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场地特定（`site_specific`）
原始活动或阶段基准：每 1 kg 收获花簇产出.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由收集数据计算（`calculated_from_collection`）
- 采集协议： `cp_annual_management_inputs`
- 数量范围： 生产年灌溉水筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30
  - 单位： m3/kg harvested clusters
  - 基准： 每 1 kg 收获花簇产出
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 中压电力（`annual_field_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per 1 kg harvested cluster output。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_records`

###### 柴油（`annual_field_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per 1 kg harvested cluster output。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 可采收未开放花蕾簇 (`harvestable_clusters`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 管理树木上成熟未开放的丁香花蕾簇
- 流属性/单位： Mass / kg
- 数量规则： Measured cluster mass handed to the harvest node by stand and harvest batch
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per productive tree and reporting year.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_harvest_grade_records`
- 来源： `fao-ecocrop-clove`
- 数量范围： 来源支持的单株产量范围
  - 范围角色： 典型范围（`typical_range`）
  - 下限： 1
  - 上限： 12
  - 单位： kg/tree/year
  - 基准： harvestable clove output per productive tree and year
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 外部来源（`external_source`）
  - 来源： `fao-ecocrop-clove`

##### 废物流

###### 田间生物质残余 (`field_residues`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 修剪、脱落、受损或以其他方式移除的丁香树生物质
- 流属性/单位： Mass / kg dry matter
- 数量规则： Measure or sample dry mass and distinguish retained mulch, composting, burning, disposal, and recovery destinations
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg harvested clusters.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_residue_records`
- 数量范围： 暂定田间残余物校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kg dry matter/kg harvested clusters
  - 基准： field biomass residues per 1 kg harvested clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 管理土壤氧化亚氮 (`managed_soil_n2o`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 排放至空气的一氧化二氮
- 流属性/单位： Mass / kg N2O
- 数量规则： Calculate direct and indirect N2O from collected mineral-N, organic-N, residue-N, volatilization, and leaching data using the selected geographically appropriate IPCC tier; convert N2O-N to N2O
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg harvested clusters.

- 归一化基准：每声明的参考流
- 基准类型： 氮投入（`n_input`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： 暂定管理土壤 N2O 校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.2
  - 单位： kg N2O/kg harvested clusters
  - 基准： calculated N2O per 1 kg harvested clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：采收、分离与分级（`harvest_grade`）

采收批次把采摘和设备服务关联至收集花蕾簇质量。随后分离整花蕾、脱落梗和附带物料。分级区分接受、降级和拒收状态；每种状态均有交付点，拒收物不得在没有记录回路时返回上游，未解决拒收物不得进入接受质量。

#### 输入
##### 产品流

###### 中压电力（`harvest_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per 1 kg harvested clusters。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_records`

###### 柴油（`harvest_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per 1 kg harvested clusters。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 接受的鲜态未加工整丁香 (`accepted_fresh_cloves`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 丁香（全茎），生的 `53a5a137-db87-42e1-a85d-4b187eb5281a`
- 流属性/单位： Mass / kg
原始产出计量与核对要求：Net accepted fresh output equals 1 kg for fresh hand-off; for a dried route it is measured input to drying and is not also counted as reference output

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 路线特定（`route_specific`）
原始活动或阶段基准：per 1 kg accepted farm-gate product.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_harvest_grade_records`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `iso-14044-2006`

###### 降级整丁香 (`downgraded_cloves`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 声明去向的降级完整丁香
- 流属性/单位： Mass / kg
- 数量规则： Weighed separately and treated as product only when destination and economic function are documented
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg incoming harvested clusters.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_harvest_grade_records`
- 数量范围： 等级状态质量平衡范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg incoming harvested clusters
  - 基准： downgraded cloves per 1 kg incoming clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

###### 脱落梗、采收损失与分级拒收物 (`harvest_grade_residues`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 脱落花梗、开放花、母丁香、受损或腐败花蕾、杂质及伴生植物材料
- 流属性/单位： Mass / kg
- 数量规则： Weigh each physical state and destination separately; a sold stem or recovered output is separately modelled, while composting, disposal, or field return remains a destination-specific residue/waste route
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg incoming harvested clusters.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_harvest_grade_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- 数量范围： 采收/分级残余物质量平衡范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg incoming harvested clusters
  - 基准： all non-accepted states per 1 kg incoming clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 基本流

### 过程：农场门口干燥与稳定化（`conditional_drying`）

鲜态交付时本节点不启用。干燥路线以接受鲜花蕾为干预前可用状态，以接受干燥整花蕾为稳定化交付状态。日晒、太阳能和辅助干燥保持为独立技术层。

#### 输入
##### 产品流

###### 进入干燥的接受鲜花蕾 (`drying_fresh_input`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 合格的新鲜未加工完整丁香花蕾
- 流属性/单位： Mass / kg
- 数量规则： Weighed fresh accepted mass entering the same drying batch
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 路线特定（`route_specific`）
原始活动或阶段基准：per 1 kg accepted dried output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_drying_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- 数量范围： 来源支持的干燥投入范围
  - 范围角色： 典型范围（`typical_range`）
  - 下限： 2.5
  - 上限： 3.5
  - 单位： kg/kg accepted dried output
  - 基准： fresh buds entering drying per 1 kg accepted dried output
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 外部来源（`external_source`）
  - 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`

###### 中压电力（`drying_energy`）

条件性单物质交换：仅在实际路线和记录证明使用或排放中压电力时纳入。其他产品、燃料、废物或排放物种须分别建立原子清单行，独立记录数量、状态和身份；不得从示例推定必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：依据实际路线记录，仅计量或计算本过程与期间的中压电力；不得混合其他物种或能源。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：per 1 kg accepted dried output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_drying_records`

###### 柴油（`drying_energy_diesel`）

条件性单物质交换：仅在实际路线和记录证明使用或排放柴油时纳入。其他产品、燃料、废物或排放物种须分别建立原子清单行，独立记录数量、状态和身份；不得从示例推定必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：依据实际路线记录，仅计量或计算本过程与期间的柴油；不得混合其他物种或能源。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：per 1 kg accepted dried output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_drying_records`

###### 外购区域供热（`drying_energy_district_heat`）

条件性单物质交换：仅在实际路线和记录证明使用或排放外购区域供热时纳入。其他产品、燃料、废物或排放物种须分别建立原子清单行，独立记录数量、状态和身份；不得从示例推定必然使用。

- 选定流：外购区域供热
- 流属性/单位：能量 / MJ
- 数量规则：依据实际路线记录，仅计量或计算本过程与期间的外购区域供热；不得混合其他物种或能源。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：per 1 kg accepted dried output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_drying_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 接受的干燥未加工整丁香 (`accepted_dried_cloves`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流：干燥的完整未开放丁香花蕾
- 流属性/单位： Mass / kg
原始产出计量与核对要求：Net accepted dried output equals 1 kg when dried hand-off is selected; record final moisture and method

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 路线特定（`route_specific`）
原始活动或阶段基准：per 1 kg accepted farm-gate product.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_drying_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `iso-14044-2006`

身份适用性：按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。

##### 废物流

###### 干燥拒收物 (`drying_rejects`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 发霉、发酵、焦损、破碎或其他拒收花蕾
- 流属性/单位： Mass / kg
- 数量规则： Weigh by recovery, composting, disposal, or other destination; no reject returns to accepted output
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：per 1 kg fresh buds entering drying.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_drying_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- 数量范围： 干燥拒收物质量平衡范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg fresh buds entering drying
  - 基准： drying rejects per 1 kg fresh input
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 基本流

###### 干燥去除水分 (`drying_water_loss`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： 排放至空气的水
- 流属性/单位： Mass / kg
- 数量规则： 实际水蒸气按匹配入场花蕾含水 + 实际加水 + 期初存水，减去全部合格/降级/拒收固体、液体出口及期末库存含水计算。采用实测湿基含水率和兼容质量记录，归属并归一化一次，干固体另行平衡。鲜干质量差、脱落固体和其他挥发物不能全部当水；文献鲜干产品比不能建立水排放数值范围。缺少含水或去向时保留未解析水释放，不能填平衡排放。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 路线特定（`route_specific`）
原始活动或阶段基准：per 1 kg accepted dried output.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_drying_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`

### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：丁香（整梗），未加工
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
- 选定流：丁香（整梗），未加工
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

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_measured` | all nodes | 分配前对路线、批次、等级、残体及去向状态细分并计量；合格产出剔除拒收物、损失、脱落梗及降级物。 | `iso-14044-2006` |
| `allocation_perennial_life` | establishment and long-lived assets | 按声明服务/生产寿命内实际合格产出，将建植、未结果年、补植及终止负担归属一次，不在年度管理中重计。 | `fao-ecocrop-clove`; `kau-clove-practices-2016` |
| `allocation_mixed_crop` | mixed stands and shared infrastructure | 优先采用实测使用量、面积时间、灌溉体积、运行时间或其他因果驱动；无法建立因果且各产品具有经济功能时，使用有据经济分配并披露敏感性。 | `iso-14044-2006`; `kau-clove-practices-2016` |
| `allocation_batches_routes` | harvest and drying | 将投入、产出、清洁/换线及共享运行服务关联批次或期间；按合格产出加权各路线分层，共享负担只计一次。 | `iso-14044-2006` |
| `allocation_rejects` | stems, residues, downgraded and rejected material | 有据回收或产品功能开始前，负担保留于产生节点；独立销售产出须细分或分配，废物不触发共产品分配。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_assets` | `stand_establishment` | planting, immature management, replacement, termination, shared assets | invoice, stand log, asset register | dates; planting identity/mass/count; density; site inputs; replacements; removals; materials; service life; consuming crops/nodes/periods; driver | Reconcile invoices, field logs, and asset register to cohorts；原始汇总与分配：Divide causal share by accepted output over same service period | kg, count, ha, year | each event and annual review | establishment through termination/cut-off | each cohort and asset | 每声明的参考流 | invoices, georeferenced register, dated logs, maintenance record |
| `cp_nutrient_ledger` | `stand_establishment`; `annual_tree_management` | all mineral/organic fertilizers and nutrient amendments | invoice, application log, certificate | product; mass; N/P2O5/K2O/other nutrients; form; moisture; date; area/trees; phase | 每项实际产品/配方分开采集，保留其原子输入卡、实物产品质量、组成、供应方、施用事件和原始单位。核对库存和实际施用，分析计算养分而不重复产品交换，每个有据数量通过匹配最终合格产出归属并归一化一次。 | kg product, kg nutrient, fraction | each application | every establishment and productive year | each stand/block | 每声明的参考流 | invoice, label, lab result, scale, application log |
| `cp_water_records` | `stand_establishment` | supplemental water | meter/runtime log | source; volume; reading; runtime; pump; stand; date | Meter or validated discharge × runtime；原始汇总与分配：Sum by phase and normalize after lifetime attribution | m3 | each event | establishment and immature years | each source/stand | 每声明的参考流 | calibration, pump curve, dated log |
| `cp_annual_management_inputs` | `annual_tree_management` | water and crop protection | meter, invoice, stock/application log | water volume; product and active ingredient; quantity; treated area; date; leftovers | Collect water and each product independently；原始汇总与分配：Retain concrete exchanges; normalize to harvested clusters | m3, kg, L | each event | full year | each block | 每声明的参考流 | calibration, invoices, labels, stock reconciliation |
| `cp_energy_records` | `annual_tree_management`; `harvest_grade` | field and harvest energy | receipt, meter, runtime, contractor log | carrier; original quantity; conversion; equipment; runtime; node; batch/period; shared driver | Meter or reconcile purchases and stock；原始汇总与分配：Convert while preserving carrier identity; allocate shared use once | MJ, kWh, kg, L, h | each operation/month | full year and all harvests | each carrier/node | 每声明的参考流 | calibration, receipts, machine logs |
| `cp_harvest_grade_records` | `annual_tree_management`; `harvest_grade` | clusters, buds, stems, grades, losses and rejects | lot mass-balance sheet | stand; date; maturity; batch; cluster input; bud/stem condition; accepted fresh or drying input; downgraded/reject states and destinations; moisture | Weigh and inspect every state in the same lot；原始汇总与分配：Input = accepted + downgraded + all residues ± documented difference; one accepted hand-off route | kg, moisture fraction | each lot | all harvests in year | each block/station | 每声明的参考流 | calibrated scales, inspection, moisture test, destination receipt |
| `cp_residue_records` | `annual_tree_management` | field biomass | weighing/sampling and destination log | residue type; wet/dry mass; moisture; origin; destination; recovery | Weigh or representative sampling；原始汇总与分配：Normalize dry matter to harvested clusters; preserve destination rows | kg wet/dry | each event/campaign | full year | each stand/destination | 每声明的参考流 | scales, sampling plan, moisture and receipts |
| `cp_drying_records` | `conditional_drying` | fresh input, energy, dried output, water loss, rejects | batch sheet, meter, moisture test | input/output/reject mass; input/final moisture and basis; method; dates; duration; carrier; temperature; weather/dryer state | Weigh and moisture-test each batch; meter energy；原始汇总与分配：Fresh input = dried output + rejects + water/other loss; keep sun/solar/assisted routes separate | kg, fraction, MJ, kWh, h, °C | each batch | all dried lots | each dryer/mat/station | 每声明的参考流 | scale/meter calibration, moisture method, batch and weather/dryer log |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_lifetime_attribution` | perennial phases and assets | 按服务期间及因果份额归属的群组/资产负担之和，除以该期间合格产出。 | events; service years; driver; annual output | burden per kg accepted product | `fao-ecocrop-clove`; `iso-14044-2006` |
| `calc_nutrients` | 各项养分产品 | 逐项声明养分分数基准。收到基养分分数：养分质量＝实测收到基产品质量×养分分数。干物质基养分分数：养分质量＝实测收到基产品质量×实测干物质分数×干物质基养分分数。不得重复进行干物质校正；分别保留元素与氧化物报告基准及适用换算。逐项计算后仅在分析层汇总养分，不合并物理产品交换。 | mass; moisture; composition | kg product and nutrient by form | `kau-clove-practices-2016` |
| `calc_soil_n2o` | managed-soil N2O | 将所选 IPCC 层级用于合成/有机/残体氮、挥发及淋失；N2O-N 乘 44/28 换算。 | nutrient ledger; residue N; selected factors | kg N2O per kg clusters | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest/grading/drying | 同批次进料＝产品产出＋废物＋基本流损失±有据差额；身份或状态未决物料不计合格产出。 | masses and moisture | reconciliation and normalized flows | `mass-balance-identity` |
| `calc_route_weighting` | route strata | 分别核算各路线后，汇总“路线单位数量×路线合格产出”，再除以总合格产出。 | route inventories and outputs | weighted inventory | `iso-14044-2006` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrient_ledger`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 每批确认物种、未开放成熟度、完整状态、附梗状况、等级、鲜/干状态、含水率基准及农场门。 | specification, inspection/photo, moisture test, ticket |
| `dq_periods` | perennial system | 覆盖建植、未结果/生产年、补植及终止；否则披露被截断阶段及寿命敏感性。 | cohort, multi-year yield/input, asset records |
| `dq_completeness` | harvest/grading/drying | Account for at least 95% of same-batch input/output mass or explain and correct the gap. | mass-balance and calibration records |
| `dq_route` | alternatives | 单作/混作、雨养/灌溉、鲜态/日晒/辅助干燥记录在按产出加权前保持分开。 | stratified records and worksheet |
| `dq_temporal` | foreground | 覆盖完整年度及全部采收；大小年影响显著时使用至少三个代表生产年度，否则披露限制。 | dated input, yield, and lot records |
| `dq_fertilizer` | 养分投入 | 每种实际产品及其组成单独成卡；缺少天工 UUID 时须在 manifest 中明确登记，直至独立核实。 | ledger, label, invoice, lab certificate, resolution record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | 按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。 | `icar-iisr-clove`; `kau-clove-harvesting` |
| `validate_period_attribution` | perennial life/shared assets | 要求阶段、期间、补植、终止、使用节点及归属记录；拒绝建植、年度管理、混作和资产之间的重复归属。 | `fao-ecocrop-clove`; `iso-14044-2006` |
| `validate_route_delta` | production/drying alternatives | 要求母活动、变化的拓扑/清单/计算/数据/验证字段、互斥批次路线及各分层证据。 | `kau-clove-practices-2016`; `unido-spice-postharvest-2015` |
| `validate_batch_reconciliation` | harvest through drying | 要求批次/期间标识、存在时的投入产出及清洁/换线关联、质量核对，且无重复共享运行负担。 | `mass-balance-identity` |
| `validate_reject_routes` | grading/drying | 每种合格、降级、拒收、残体、回收及处置状态须有质量及交接记录；未决物料不得进入合格产出，禁止无记录返工。 | `kau-clove-harvesting`; `unido-spice-postharvest-2015` |
| `validate_nutrient_cardinality` | nutrient inputs | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | `kau-clove-practices-2016` |
| `validate_drying_condition` | drying | 干燥未启用时，干燥投入及干态参考产出不存在或为零；启用时要求方法、能源、鲜/干质量、含水率、拒收物、时长及稳定交接，产出只计一次。 | `kau-clove-harvesting`; `unido-spice-postharvest-2015` |
| `validate_ranges` | all quantitative cards | 对每个已提供的数量筛查核对具体交换、上下界、相容单位和分母、基准、适用性、证据类型及外部来源，中英文和投影保持等义。临时推理范围仅为非强制复核提示，不是默认数量、允许损失或完整性证据。没有相容数量界限依据时明确报告无法进行范围筛查，复核计量、匹配组分平衡和不确定性；不得为满足检查虚构范围。最终参照归一化保持精确，并非实证产率。实际交换数量、采集协议及相容单位/换算证据独立于范围要求。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground production package for accepted whole raw cloves at farm gate |
| downstream_use | Reviewed secondary or background datasets for products using farm-gate whole cloves after methodology, identity, route, and quality review |
| allowed_use | Farm-gate LCA of declared fresh or farm-dried whole raw cloves; output-weighted aggregation of evidenced strata |
| excluded_use | Oil, oleoresin, detached stems, ground spice, blends, manufactured products, retail packs, or fresh-to-dried conversion without moisture and route records |
| required_metadata | Geography; planting stock; crop system; stand age/density; establishment/life treatment; reporting years; irrigation; maturity; grade; stem condition; fresh/dried state; moisture basis; drying route; all grade, reject, residue, and recovery destinations |
| required_quality_disclosure | Perennial-phase coverage; data age; measured/estimated shares; route weights; mass-balance closure; nutrient coverage; shared-asset allocation; IPCC tier/factors; unresolved upstream identities; uncertainty/sensitivity |
| update_trigger | Change in identity, productive-life assumption, crop/input regime, harvest/grading, drying, moisture specification, allocation, emission method, or material data refresh |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `icar-iisr-clove` | official_guidance | ICAR-IISR, “Clove – Syzygium aromaticum”, https://spices.res.in/products/spices/clove.html | Identity, perennial growth, pre-opening harvest, downstream oil distinction |
| `fao-ecocrop-clove` | dataset | FAO Ecocrop crop 2462, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=2462 | Perennial phases, 60–100 year economic life, 1–12 kg/tree/year yield, route context |
| `kau-clove-practices-2016` | official_guidance | Kerala Agricultural University, *Package of Practices Recommendations: Crops 2016*, clove section, https://www.celkau.in/library/pop2016.pdf | Establishment, mixed cropping, irrigation, nutrients, harvest and drying |
| `kau-clove-harvesting` | extension_guidance | Kerala Agricultural University, “Clove: Harvesting”, https://celkau.in/crops/spices/clove/harvesting.php | Harvest maturity, bud/stem separation, sorting, immediate drying, 4–5 days and about two-thirds weight loss |
| `tnau-clove-practices-2013` | official_guidance | Tamil Nadu Agricultural University, *Crop Production Guide: Horticulture Crops 2013*, clove section, https://agritech.tnau.ac.in/ta/pdf/2013/cpg_horti_2013.pdf | Establishment/productive-tree nutrient guidance, harvest and yield context |
| `tnau-clove-practices-web` | extension_guidance | TNAU Agritech Portal, “Horticulture: Spice Crops: Clove”, https://agritech.tnau.ac.in/horticulture/horti_spice%20crops_clove.html | Supplemental irrigation and productive-tree management |
| `unido-spice-postharvest-2015` | handbook | UNIDO/FAO, *Herbs, Spices and Essential Oils: Post-harvest Operations in Developing Countries*, https://downloads.unido.org/ot/47/88/4788781/20001-_23603.PDF | Clove drying, turning, mould prevention, 4–6 days, about two-thirds weight loss, rejects/cleaning |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O method |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | Functional-unit normalization, subdivision and allocation hierarchy |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity for a bounded process batch | Harvest/grading/drying reconciliation and QA ranges |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
