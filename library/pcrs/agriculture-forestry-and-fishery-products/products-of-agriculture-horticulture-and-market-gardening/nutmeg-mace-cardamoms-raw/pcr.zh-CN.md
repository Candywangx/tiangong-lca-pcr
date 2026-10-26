---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.nutmeg-mace-cardamoms-raw
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未加工肉豆蔻、肉豆蔻衣和豆蔻

## 1. 范围与适用性

本 PCR 覆盖多年生管理植株生产带壳肉豆蔻种子、肉豆蔻衣假种皮或豆蔻蒴果，直至声明的农场门交付。纳入建园、生产期管理、收获、肉豆蔻果实分离、分级，以及仅在农场门前发生的清洗或干燥。每个数据集选择一种作物/器官路线和一种参考产品状态；没有记录组成和加权规则时不得平均肉豆蔻与豆蔻。

排除研磨、制粉、为生产商品肉豆蔻仁而进行的破壳/脱壳、精油或油树脂提取、混配、熏蒸、消费包装、香辛料制造以及门后运输。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.nutmeg-mace-cardamoms-raw |
| classification_refs | CPC 3.0 01653, Nutmeg, mace, cardamoms, raw; mapping relation: exact |
| covered_products | raw nutmeg seed with shell, separated raw mace aril, and raw cardamom capsules, fresh or farm-dried as declared |
| excluded_products | ground spice; commercial shelled nutmeg kernel; essential oils, oleoresins and nutmeg butter; blended, fumigated, retail-packed or manufactured spices |
| representative_product | one declared route: nutmeg seed with shell, mace aril, or cardamom capsule |
| production_route | perennial managed production; mutually exclusive nutmeg-tree or cardamom-stand route; optional ambient/shade or heated drying is a technology delta from fresh dispatch |
| market_state | raw at farm gate, with fresh/dried state, moisture basis, grade, organ state and conditioning route declared |

肉豆蔻树在同一分离节点有意产出种子和肉豆蔻衣。豆蔻具有不同的收获器官和初级处理路线。除非记录为连续阶段，鲜品交付、环境/阴干和加热烘制是批次层面互斥的路线。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | declared raw nutmeg seed with shell, mace aril, or cardamom capsules at farm gate |
| How much | 1,000 kg net product mass |
| How well | saleable under the declared grade and moisture specification, excluding foreign matter and rejects |
| How long or cycle | output from a declared harvest period, including documented stand-lifecycle attribution |
| reference_flow_link | raw_spice_reference_product |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | 实际鲜/干状态的所选肉豆蔻种子、肉豆蔻假种皮或豆蔻蒴果 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | crop/species; harvested organ; shell/aril/capsule state; fresh or dried state; moisture content and basis; grade; production system; geography; harvest period; farm-gate hand-off; drying technology when used |

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告净质量及实测含水率/基准；没有水分换算不得混用鲜质量与干质量。 |
| `land_time_basis` | establishment and management | area and time | ha, year | Separate establishment, non-bearing and productive phases. |
| `nutrient_active_mass` | nutrient inventory | product and nutrient mass | kg product, kg N/P/K | 在归集卡之下，分别采集每种实际养分产品及其组成。 |
| `lot_reconciliation` | harvest through grading | Mass | kg/lot | 按批次核对合格、降级、拒收、取样及水分损失状态。 |

## 5. 系统边界

前景从种植材料或有记录的现有植株开始，在农场门交付结束。纳入建园/未结果期、生产期管理、适用的土地利用变化、水、能源、植保和养分供应、田间直接排放、收获、分离、门前初级处理、分级、残余物、剔除物及重要资本品。苗圃和其他供应品作为上游数据集。

收获因移除已记录的生物产出而构成独立节点。肉豆蔻分离形成种子、肉豆蔻衣和果皮状态。初级处理接收鲜批次并交付声明的鲜品或稳定化状态。分级形成合格、降级和剔除去向。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | new establishment or existing stand of known age and establishment history |
| starting_condition_role | determines direct establishment records or remaining-life attribution |
| product_classification_scope | one nutmeg-seed, mace-aril, or cardamom-capsule route |
| recursive_input_rule | a same-category input is an upstream farm-gate product dataset and is not regenerated recursively |
| upstream_dataset_requirement | representative planting-material, nutrient, crop-protection, water, fuel and electricity datasets |
| disclosure | stand age, establishment source, crop/species, intercropping, area, harvest period, yield, co-products, conditioning, moisture basis and farm gate |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | all datasets | Preserve crop, harvested-organ and lot identity through every process. | `iisir-nutmeg-2005`; `iisir-cardamom-2022` |
| `boundary_perennial_phases` | establishment | Include establishment, non-bearing and productive phases; link replacement and termination to area and period. | `cerutti-perennial-crops-2016`; `spices-board-cardamom-cost-2021` |
| `boundary_nutmeg_separation` | nutmeg route | Include fruit collection and seed/aril/pericarp separation before distinct hand-offs. | `fao-nutmeg-handling` |
| `boundary_conditioning` | conditioning | Include washing, drying energy, moisture loss, rejects and re-drying before farm gate; omit for fresh direct dispatch. | `fao-nutmeg-handling`; `iisir-cardamom-2022` |
| `boundary_manufacture_exclusion` | downstream | Exclude grinding, extraction, commercial-kernel cracking, blending, fumigation and consumer packaging. | `fao-nutmeg-handling` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 作用 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Perennial stand establishment | required | direct for new stands or remaining-life attribution for existing stands | creates productive capacity | one established hectare |
| `productive_management` | Productive-year crop management | required | every harvest period | manages crop and records field emissions | one productive hectare-year |
| `harvest_separation` | Harvest and route-specific separation | required | every harvest lot | creates organ-specific outputs | one harvest lot |
| `primary_conditioning` | Primary conditioning and preservation stabilization | conditional | only when performed before farm gate | alternative technology delta among fresh, ambient/shade and heated routes | one batch |
| `grading_dispatch` | Grading and dispatch | required | every saleable lot | creates accepted, downgraded and rejected states | 1,000 kg accepted product |

收获、初级处理和分级按批次运行。将投入、清洁、产出、换批和再干燥关联至同一批次。共享批次负荷按实测处理质量仅分摊一次。

### 过程：多年生植株建园（`stand_establishment`）

#### 输入
##### 产品流

###### 种植材料（`planting_material`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 作物特定种植材料
- 流属性/单位：质量 / kg
- 数量规则： measured type, count and mass; separate replants
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per established hectare over establishment.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_establishment`
- 数量范围： Provisional completeness screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 5000
  - 单位： planting units/ha established
  - 基准： per established hectare over establishment
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 尿素肥料投入（`establishment_nutrients`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per established hectare over establishment.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_establishment`

###### 磷酸一铵肥料投入（`establishment_nutrients_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per established hectare over establishment.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_establishment`

###### 氯化钾肥料投入（`establishment_nutrients_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per established hectare over establishment.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_establishment`

###### 施用的牛粪肥投入（`establishment_nutrients_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per established hectare over establishment.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_establishment`

###### 农业石灰石投入（`establishment_nutrients_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per established hectare over establishment.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_establishment`

#### 输出
##### 产品流

###### 已建植株生产能力（`established_stand`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 已建成的肉豆蔻或豆蔻林分生产能力
- 流属性/单位：面积 / ha
- 数量规则： successfully established area after mortality/replant reconciliation
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per hectare entering establishment.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_establishment`
- 数量范围： Established-area reconciliation
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： ha established/ha entered
  - 基准： per hectare entering establishment
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `cerutti-perennial-crops-2016`

### 过程：生产期作物管理（`productive_management`）

#### 输入
##### 产品流

###### 尿素肥料投入（`productive_nutrients`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per productive hectare-year.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_management`

###### 磷酸一铵肥料投入（`productive_nutrients_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per productive hectare-year.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_management`

###### 氯化钾肥料投入（`productive_nutrients_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per productive hectare-year.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_management`

###### 施用的牛粪肥投入（`productive_nutrients_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per productive hectare-year.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_management`

###### 农业石灰石投入（`productive_nutrients_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per productive hectare-year.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_management`

###### 灌溉水 (`management_irrigation_water`)

记录输送至生产期种植园的补充灌溉水；降雨不计为产品流。

- 选定流： 灌溉水
- 流属性/单位： 体积 / m3
- 数量规则： 按计量或校准值记录输送到种植园的水量
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 场地特定（`site_specific`）
原始活动或阶段基准：每生产公顷年.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_management`
- 数量范围： 生产年灌溉水筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30000
  - 单位： m3/ha-year
  - 基准： 每生产公顷年；雨养管理为零
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 中压电力投入（`management_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 场地特定（`site_specific`）
原始活动或阶段基准：每生产公顷年.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_management`

###### 柴油投入（`management_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 场地特定（`site_specific`）
原始活动或阶段基准：每生产公顷年.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_management`

#### 输出
##### 产品流

###### 可收获作物材料（`harvestable_crop`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 可采收的肉豆蔻果实或豆蔻蒴果
- 流属性/单位：质量 / kg
- 数量规则： measured by crop and picking round; only the selected route is active
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：per productive hectare-year.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_harvest`
- 数量范围： Route-specific yield screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg harvestable material/ha-year
  - 基准： per productive hectare-year; inactive route contributes zero
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 管理土壤直接氧化亚氮（`soil_n2o`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 排放至空气的一氧化二氮
- 流属性/单位：质量 / kg N2O
- 数量规则：将所选 IPCC 层级用于所采合成、有机及残体氮；按 44/28 将 N2O-N 换算为 N2O，仅一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg N included in the direct managed-soil equation.

- 归一化基准：每声明的参考流
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议： `cp_management`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Provisional direct-N2O-N factor screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.05
  - 单位： kg N2O-N/kg N input
  - 基准： per kg N in the applicable direct-emission equation
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

计算方法对应第 8 节规则：`calc_soil_n2o`。

### 过程：收获与路线特定分离（`harvest_separation`）

#### 输入
##### 产品流

###### 可收获作物投入（`harvest_input`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 可采收的肉豆蔻果实或豆蔻蒴果
- 流属性/单位：质量 / kg
- 数量规则： measured mass entering the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：per harvest lot.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_harvest`
- 数量范围： Lot input screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.1
  - 上限： 100000
  - 单位： kg/lot
  - 基准： per declared harvest lot
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出
##### 产品流

###### 带壳肉豆蔻种子（`nutmeg_seed_output`）

本卡记录一种预期产出及其独立交接点。

- 选定流：未加工带壳肉豆蔻种子
- 流属性/单位：质量 / kg
- 数量规则：单独计量；非活动路线产出为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 收获投入.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`
- 数量范围：预期产出质量平衡校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0
  - 上限：1000
  - 单位：kg output
  - 基准：每 1,000 kg 收获投入；适用于肉豆蔻路线；豆蔻路线为零
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`

###### 肉豆蔻衣假种皮（`mace_aril_output`）

本卡记录一种预期产出及其独立交接点。

- 选定流：未加工肉豆蔻衣假种皮
- 流属性/单位：质量 / kg
- 数量规则：单独计量；非活动路线产出为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 收获投入.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`
- 数量范围：预期产出质量平衡校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0
  - 上限：1000
  - 单位：kg output
  - 基准：每 1,000 kg 收获投入；适用于肉豆蔻路线；豆蔻路线为零
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`

###### 豆蔻蒴果（`cardamom_capsule_output`）

本卡记录一种预期产出及其独立交接点。

- 选定流：未加工豆蔻蒴果
- 流属性/单位：质量 / kg
- 数量规则：单独计量；非活动路线产出为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 收获投入.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`
- 数量范围：预期产出质量平衡校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0
  - 上限：1000
  - 单位：kg output
  - 基准：每 1,000 kg 收获投入；适用于豆蔻路线；肉豆蔻路线为零
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`

##### 废物流

###### 果皮、穗梗和田间剔除物（`harvest_residues`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 路线特定采收残余物
- 流属性/单位：质量 / kg
- 数量规则： input minus intended outputs and measured losses; reclassify deliberately sold/used material as product
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：per 1,000 kg harvest input.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_harvest`
- 数量范围： Residue mass-balance
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg residues
  - 基准： per 1,000 kg harvest input
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `fao-nutmeg-handling`; `iisir-cardamom-2022`

### 过程：清洗和/或干燥（`primary_conditioning`）

#### 输入
##### 产品流

###### 进入初级处理的原料香辛料 (`conditioning_raw_spice`)

记录进入实际清洗或干燥阶段的原料香辛料批次。

- 选定流： 路线特定原料香辛料
- 流属性/单位： 质量 / kg
- 数量规则： 称量湿基投入并关联同一处理批次
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 进入处理的原料香辛料.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： 处理投入质量筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1000
  - 上限： 100000
  - 单位： kg raw spice
  - 基准： 每处理批次并归一化至 1,000 kg 原料香辛料
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 处理工艺水 (`conditioning_water`)

仅在实际清洗时记录供应水。

- 选定流： 工艺水
- 流属性/单位： 体积 / m3
- 数量规则： 按计量或校准值记录供应至处理批次的水
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 进入处理的原料香辛料.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： 条件性清洗水筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： m3
  - 基准： 每 1,000 kg 原料香辛料；无清洗时为零
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 中压电力投入（`conditioning_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 进入处理的原料香辛料.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`

###### 柴油投入（`conditioning_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 进入处理的原料香辛料.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`

#### 输出
##### 产品流

###### 初级处理后的原料香辛料（`conditioned_product`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 整备后的肉豆蔻种子、肉豆蔻衣或豆蔻蒴果
- 流属性/单位：质量 / kg
- 数量规则： measured final mass with moisture, time/temperature, method and rejected fraction
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：per 1,000 kg raw spice entering conditioning.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_conditioning`
- 来源： `fao-nutmeg-handling`; `iisir-cardamom-2022`
- 数量范围： Conditioned-product mass yield
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg conditioned product
  - 基准： per 1,000 kg raw spice entering conditioning
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `fao-nutmeg-handling`; `iisir-cardamom-2022`

##### 基本流

###### 释放的水分（`drying_moisture_loss`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 排放至空气的水
- 流属性/单位：质量 / kg
- 数量规则：在闭合水质量控制体上确定有据蒸发量：进入材料的水 + 实际加水 + 期初水库存 - 全部合格品/联产品/拒收物/残体出口带水 - 单独液体排出/转出水 - 期末水库存。逐材料流采用实测湿质量乘湿基含水率，液体体积采用兼容密度；内部循环抵销。适用时保留实际降雨/复湿，总鲜干质量差并非全为水。各项和蒸发路径须独立有据；未解释或负平衡需调查，不能强记为水蒸气释放或截为零。水量与干物质损失及其他挥发物分开，按原匹配最终参考量归属并归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：per 1,000 kg raw spice entering conditioning.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_conditioning`
- 数量范围： Moisture-loss balance
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg water
  - 基准： per 1,000 kg raw spice; zero without drying
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `iisir-cardamom-2022`; `fao-nutmeg-handling`

计算方法对应第 8 节规则：`calc_conditioning_balance`。

### 过程：分级与交付（`grading_dispatch`）

#### 输入
##### 产品流

###### 进入分级的香辛料批次（`grading_input`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 路线特定的新鲜或整备未加工香辛料
- 流属性/单位：质量 / kg
- 数量规则： measured lot mass with crop, organ and moisture identity
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：per grading lot.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_dispatch`
- 数量范围： Grading-lot screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.1
  - 上限： 100000
  - 单位： kg/lot
  - 基准： per declared grading lot
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出
##### 产品流

###### 合格原料香辛料参考产品（`raw_spice_reference_product`）

本卡记录该过程边界上的声明流及其数量。

- 选定流：实际鲜/干状态的所选肉豆蔻种子、肉豆蔻假种皮或豆蔻蒴果
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：1,000 kg net accepted product

- 数量规则：1000 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：per reference flow.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议： `cp_dispatch`
- 数量范围： Fixed reference quantity
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1000
  - 上限： 1000
  - 单位： kg accepted product
  - 基准： per 1,000 kg reference flow
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

身份适用性：按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。

###### 降级原料香辛料（`downgraded_product`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 降级的路线特定未加工香辛料
- 流属性/单位：质量 / kg
- 数量规则： measured lower-grade mass with destination and revenue; never count as accepted mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：per 1,000 kg grading input.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_dispatch`
- 数量范围： Downgrade balance
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg downgraded product
  - 基准： per 1,000 kg grading input
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分级剔除物（`grading_rejects`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： 路线特定香辛料拒收物
- 流属性/单位：质量 / kg
- 数量规则： measured final reject mass; retain re-drying loops under the producing lot until disposition
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：per 1,000 kg grading input.

- 归一化基准：每声明的参考流
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_dispatch`
- 数量范围： Reject balance
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg rejects
  - 基准： per 1,000 kg grading input
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `fao-nutmeg-handling`; `iisir-cardamom-2022`

## 7. 分配与共同产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | all shared operations | Subdivide route-specific and separately metered operations before allocation. | `iso-14044-2006` |
| `allocation_nutmeg_outputs` | nutmeg production/separation | 将种子和肉豆蔻衣视为预期共产品；不可分负担按匹配期间农场门经济价值分配，并报告质量分配敏感性。果皮仅在有意出售或使用时承接分配负担。 | `iso-14044-2006`; `fao-nutmeg-handling` |
| `allocation_establishment` | perennial establishment | 跨生命周期阶段，将建园负荷除以实际累计可售产出； for incomplete lives use a documented forecast and update for mortality, replacement or termination. Never charge one cohort twice. | `cerutti-perennial-crops-2016` |
| `allocation_batches` | conditioning/grading | 实测批次投入直接归属，共享运行/换线负担按处理质量分摊一次；复干批次承接既有负担，并增加实际复干负担。 | `iso-14044-2006` |
| `allocation_rejects` | downgrade/rework/waste | 返工返回其产生批次；有用途降级品按所选共产品规则承接负担；归属型数据集不向废物给予避免负担抵扣。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | 流作用 | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment` | `stand_establishment` | planting, nutrients, area, survival | invoices and field logs | cohort; crop; material type/count/mass; every nutrient product/composition/mass; area; mortality; replants; dates | reconcile purchases and field records；原始汇总与分配：sum by event; retain product detail | units; kg; ha | every event | full establishment/non-bearing phase | stand/cohort | 每声明的参考流 | invoices, labels, maps, counts |
| `cp_management` | `productive_management` | annual inputs and emission drivers | meters, invoices, application logs | stand age/area; every nutrient product and N; water; protection product; fuels; electricity; residues; soil class | direct records or documented runtime factors；原始汇总与分配：aggregate by ha-year; retain detail | kg; m3; L; kWh; ha | every event, annual aggregate | full represented year | stand/route | 每声明的参考流 | invoices, labels, meter calibration |
| `cp_harvest` | `harvest_separation` | harvest and separated states | lot tickets and scales | lot; crop; organ; date; area; input; seed; aril; capsules; residues; destination | weigh every lot/state；原始汇总与分配：aggregate after mass balance | kg | every lot | all harvest rounds | stand/lot | 每声明的参考流 | scale checks, tickets, receipts |
| `cp_conditioning` | `primary_conditioning` | washing, energy, moisture, yield | batch sheet and meters | lot; method; input mass/moisture; water; energy carrier; time/temperature; output mass/moisture; rejects; re-drying ；含拒收物/残体的全部进出水；实际加水/降雨；单独液体转出；期初期末水库存；含水率及密度；有据蒸发| meter and weigh/test every batch；原始汇总与分配：reconcile input, output, reject and water loss | kg; m3; kWh; MJ; % | every batch | all conditioned lots | farm/unit | 每声明的参考流 | scale, moisture method, meters, batch log |
| `cp_dispatch` | `grading_dispatch` | accepted/downgraded/reject | grading and sales records | lot; identity; state; moisture; grade; input; outputs; rework destination; price; gate/date | weigh and link each state；原始汇总与分配：reconcile, then normalize accepted output | kg; currency/kg | every lot | all represented production | farm/lot | 每声明的参考流 | scale, grade spec, invoice |
| `cp_phase1_environment_coverage` | stand_establishment | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_establishment_attribution` | establishment | 群组清单量×产品分配份额÷累计实际或预测可销售寿命期产出。 | cohort inputs, area, survival, productive years, outputs | inventory/kg saleable output | `cerutti-perennial-crops-2016` |
| `calc_soil_n2o` | managed soil | 将所选 IPCC 层级用于所采合成、有机及残体氮；按 44/28 将 N2O-N 换算为 N2O，仅一次。 | N inputs, soil/climate and factors | kg N2O with factor provenance | `ipcc-2019-managed-soils` |
| `calc_conditioning_balance` | conditioning | 在一致基准上：湿进料＝处理后产出＋拒收物＋样品＋水分损失。 | masses and moisture | reconciled yield/water loss | `iisir-cardamom-2022`; `fao-nutmeg-handling` |
| `calc_nutmeg_allocation` | seed/mace | 份额＝产出质量×匹配农场门价格÷全部预期产出收入；另按质量法作敏感性核算。 | saleable masses and prices | shares summing to one | `iso-14044-2006` |
| `calc_reference_normalization` | dataset | attributed inventory / accepted mass × 1,000 | attributed inventory; accepted mass | inventory/1,000 kg |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_management`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all records | 保留作物/物种、器官、群落、采收期间、批次、水分及路线；混合批次须有实测组成。 | maps, lot ledger, specification |
| `dq_temporal` | perennial phases | 覆盖完整代表年度，并保留建植历史或剩余寿命模型。 | cohort history and replacement plan |
| `dq_mass_balance` | separation/conditioning/grading | Investigate unexplained difference above 5% of input rather than forcing closure. | calibrated weights and reconciliation |
| `dq_moisture` | fresh/dried conversion | Use one documented moisture method and basis; record sampling time. | test and calibration record |
| `dq_completeness` | inventory | 将种植材料、每种实际肥料/改良剂配方、植保产品、水、能源、产出、降级/拒收、残余和排放驱动与原始记录核对。每种实际肥料/改良剂采用单独原子产品输入卡，保留产品质量、组成和施用记录；养分当量为属性/计算输入，不是重复产品数量。UUID缺失保留明确待核验状态。 | invoices, logs, meters, receipts |
| `dq_representativeness` | aggregation | 披露地理、系统、路线、年龄、间作及干燥技术，并论证农场汇总。 | sampling frame and weights |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | 按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。 |  |
| `validate_route_exclusivity` | graph | Fail if nutmeg/cardamom or fresh/ambient/heated routes are silently averaged. | `fao-nutmeg-handling`; `iisir-cardamom-2022` |
| `validate_period_attribution` | establishment | 缺少阶段、群落年龄、补植或终止处理，或发生双计时不通过。 | `cerutti-perennial-crops-2016` |
| `validate_output_set` | nutmeg separation | 除非声明种子、肉豆蔻衣及果皮去向，并对预期产品分配，否则不通过。 | `fao-nutmeg-handling` |
| `validate_batch_linkage` | harvest through dispatch | 投入、清洁、产出、复干或拒收缺少批次/期间关联，或共享负担重复时不通过。 |  |
| `validate_nutrient_cardinality` | each process | 每种实际肥料/改良剂配方须有一张原子产品输入卡，含产品质量、组成、施用记录和已核验或明确未决身份。拒绝组或异质产品合并交换、漏实际产品、产品与养分重复数量或虚构UUID；过程没有最多一张卡的限制。 |  |
| `validate_mass_balance` | separation/conditioning/grading | Fail when output states are not reconciled or rejects are accepted product. | `fao-nutmeg-handling`; `iisir-cardamom-2022` |
| `validate_boundary` | downstream | 纳入研磨、提取、商业取仁脱壳、混配、熏蒸或消费包装时不通过。 | `fao-nutmeg-handling` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground farm-gate dataset for one declared raw spice route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | lifecycle models needing raw nutmeg seed, mace aril or cardamom capsule supply at farm gate |
| excluded_use | manufactured spice or undisclosed average across unrelated crop routes |
| required_metadata | crop/species; organ; geography; system; stand age/phase; establishment attribution; intercropping; period; state/moisture; grade; allocation; conditioning; gate |
| required_quality_disclosure | coverage; measured/estimated shares; mass balance; allocation shares and price period; range exceedances; unresolved UUIDs; gaps |
| update_trigger | changed route/state/technology/life assumption/co-product destination/price relation; >10% change in yield, energy or nutrient intensity; new representative records |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-nutmeg-handling` | official_guidance | FAO, *Production, handling and processing of nutmeg and mace*, Section III, https://www.fao.org/4/x5047e/x5047E06.htm | harvest, separation, fresh/dry delivery, drying, grading, rejects |
| `iisir-nutmeg-2005` | extension_guidance | ICAR-IISR, *Nutmeg*, January 2005, https://www.indianspices.com/sites/default/files/cultivation_practices-nutmeg.pdf | perennial identity, seed/mace co-products, example yields |
| `iisir-cardamom-2022` | extension_guidance | ICAR-IISR, *Cardamom*, https://spices.res.in/storage/app/public/pdfs/CARDAMOM/1ENG-2022.pdf | establishment, harvest, washing, curing and moisture |
| `fao-cardamom-curing` | official_guidance | FAO, *Asia Industrial and Institutional Stove Compendium*, https://www.fao.org/4/ad378e/AD378E07.htm | batch curing, moisture and energy relevance |
| `spices-board-cardamom-cost-2021` | dataset | Spices Board India, *Cost of Cultivation of Cardamom (Kerala)*, https://indianspices.com/sites/default/files/SMALLCARDAMOM2021_new.pdf | phase/activity coverage |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O |
| `cerutti-perennial-crops-2016` | literature | Cerutti et al., Journal of Cleaner Production 127 (2016) 555–561, https://doi.org/10.1016/j.jclepro.2016.04.031 | perennial establishment attribution |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines* | allocation hierarchy and sensitivity |
