---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.alfalfa-for-forage-and-silage
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 饲草及青贮用苜蓿

## 1. 范围与适用性

本 PCR 适用于苜蓿（*Medicago sativa*）的多年生受控生产和刈割，产品以鲜态、未加工状态在农场门交付，用作直接饲草或在边界外进一步青贮。前景边界始于植株建植的田地准备，涵盖建植年度和已建植植株管理，止于合格鲜刈生物质在农场门称量或采用可信方法估算。

不包括青贮、发酵、田间制干草、人工干燥、打捆、制粒、饲料配制、动物饲喂、场外运输及农场门交付后的储存。放牧苜蓿、苜蓿种子生产、苜蓿草粉、干草、青贮料以及无法分离苜蓿份额的混合饲草均不属于本产品类别。

苜蓿是多年生固氮饲草，管理阶段包括建植、反复再生和多次刈割。雨养与灌溉路线可作为声明的替代路线并存；常规、有机、少耕及不同刈割计划也可并存，但在没有产量加权证据时，不得合并平均路线特定投入、产量、田间排放和植株持续年限。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.alfalfa-for-forage-and-silage |
| classification_refs | CPC 3.0 `01912`, path `0 > 01 > 019 > 0191 > 01912`; mapping relation: narrower |
| covered_products | freshly cut, unprocessed alfalfa forage at farm gate; fresh alfalfa intended for subsequent ensiling outside this boundary |
| excluded_products | alfalfa hay; silage; dried meal; pellets; seed; grazed biomass; inseparable alfalfa-grass mixtures |
| representative_product | accepted freshly cut alfalfa biomass |
| production_route | managed perennial stand establishment, regrowth management, repeated cutting and fresh farm-gate hand-off |
| market_state | fresh, unprocessed, unbaled biomass at farm gate |

受控生物生产的父活动为多年生田间生产。相对于雨养路线，灌溉会改变供水和泵送能源要求；少耕、有机管理和刈割技术会改变田间作业能源、养分产品、植保产品及损失记录。这些路线仅能作为分别声明的分层并存。青贮和干草制造会在农场门后改变产品状态，因此与本参考产品路线互斥。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | accepted freshly cut alfalfa forage at farm gate |
| How much | 1,000 kg fresh mass |
| How well | unensiled, unfermented, undried and unbaled; declared dry-matter fraction and harvest quality basis; foreign material and rejected biomass excluded |
| How long or cycle | one declared production year and its identified cuts, with establishment burdens annualized over the actual stand life |
| reference_flow_link | accepted_fresh_alfalfa |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | Alfalfa for forage and silage `bff9b03b-b5c0-486e-99f6-0a2ab67d725c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | production mix, at farm gate; fresh unprocessed produce; harvest date and cut number; stand age and establishment year; fresh mass and dry-matter fraction; pure alfalfa or declared separable alfalfa share; rainfed or irrigation route |
| 绑定模式 | Fixed (`fixed`) |

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在农场门交接计量或计算鲜质量，不得替换为干草等效质量或干物质质量。 |
| `dry_matter_disclosure` | every accepted cut | mass fraction | kg dry matter/kg fresh matter | 采用代表样品或有记录实验室结果确定，并保留取样基准。 |
| `area_time_basis` | stand establishment and annual production | area and time | ha, stand-year | 建植面积、生产面积、群落年龄、生产寿命及报告年度份额分开记录。 |
| `cut_indexing` | harvest and regrowth periods | count and date | cut, date | 每项合格产出、田间作业及损失归属某一割次或整个群落年度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | prepared field before the target alfalfa stand is seeded |
| starting_condition_role | foreground starting condition for stand establishment; prior crop and soil state are disclosed context |
| product_classification_scope | fresh unprocessed alfalfa forage under CPC 3.0 `01912` |
| recursive_input_rule | purchased fresh alfalfa of the same category is not treated as a production input; if blended or resold, model it as a separately traced upstream product and exclude it from on-farm yield |
| upstream_dataset_requirement | use supplier-specific or representative datasets for seed, nutrient products, crop-protection products, water supply and energy carriers selected from foreground records |
| disclosure | field location, stand establishment year, stand age, expected and realized stand life, production year, cut schedule, irrigation route, management route, previous crop, dry-matter method and farm-gate hand-off |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_fresh_gate` | reference product | Stop at accepted freshly cut biomass at farm gate; exclude curing, drying, baling, ensiling, fermentation and downstream feed manufacture. | `uc-alfalfa-establishment`; `usda-ars-alfalfa-management-2024` |
| `boundary_establishment` | stand establishment | Include seedbed preparation, seed and inoculation, establishment inputs, field operations and establishment losses; annualize them only across the actual productive output of that stand. | `umn-alfalfa-establishment` |
| `boundary_regrowth_periods` | established stand | Include production-year management and index operations by stand-year and, where attributable, by regrowth period or cut. | `usda-ars-alfalfa-management-2024` |
| `boundary_water_route` | irrigated production | Include supplied irrigation water and pumping energy only when irrigation occurs; rainfed production records zero supplied irrigation water rather than an imputed requirement. | `umn-alfalfa-drought-2024`; `uc-alfalfa-irrigation` |
| `boundary_direct_field_emissions` | managed soil | Include direct and indirect nitrogen-related field emissions and amendment-related carbon dioxide where the relevant inputs or residue-renewal events occur; avoid double counting returned and removed biomass. | `ipcc-2019-managed-soils` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Perennial stand establishment | required | new stand or replacement stand is established | managed biological production preparation and establishment phase | one hectare established stand and its actual productive life |
| `annual_regrowth_management` | 已建植植株再生管理 | required | 每个生产年度 | 跨季连续生产，并划分为可归属的再生期；替代技术与生物生产路线差异保留为分别声明的分层 | 一个生产公顷年及其合格鲜产量 |
| `forage_harvest_handoff` | Repeated cutting and farm-gate hand-off | required | each accepted cut | independent harvest/capture and acceptance node | accepted fresh mass by cut, summed to 1,000 kg reference product |

### 过程：多年生植株建植（`stand_establishment`）

#### 输入
##### 产品流

###### 播种用苜蓿种子（`establishment_seed`）

以纯活种子为基准记录经认证或具有其他文件证明的苜蓿种子。种子标签允许时，应单独记录种衣质量。

- 选定流： 播种用苜蓿种子
- 流属性/单位： Mass / kg
- 身份解析：一次初搜和一次精炼搜索后仍未解析；返回候选为饲草苜蓿、加工苜蓿或其他饲草物种，不是播种用苜蓿种子。
- 数量规则：记录实际使用的实体种子产品质量，扣除有据未用退回，保留供应商/批次、处理、纯度及发芽/活力属性。纯活种子当量=实体种子质量×纯度比例×活力比例，仅为独立质量/播量属性，不是外购产品交换质量，也不是另一笔购买。只有纯活种子播量时，须用有据非零批次比例反推实体数量，否则实体种子用量仍不完整；保留原库存、期间和参考产出归属。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `umn-alfalfa-establishment`
- 数量范围： Establishment seeding QA range
  - 范围角色： Typical range (`typical_range`)
  - 下限： 10
  - 上限： 30
  - 单位： kg pure live seed/ha established
  - 基准： per hectare newly established stand
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： External source (`external_source`)
  - 来源： `umn-alfalfa-establishment`

###### 根瘤菌接种剂（`establishment_inoculant`）

将用于拌种或沟施的接种剂产品与种子质量分开记录；未供应接种剂时记为零。

- 选定流： Rhizobium inoculant `ead26d6b-6270-4b4f-92a9-e81927e6a718`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按播种面积记录购入并施用的接种剂产品质量
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：每公顷新建植植株，随后再按植株寿命分摊.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `umn-alfalfa-establishment`
- 数量范围：暂定接种剂产品 QA 校验范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5
  - 单位： kg inoculant product/ha established
  - 基准： inoculant product supplied per hectare newly established stand
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 尿素肥料投入（`establishment_nutrients`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`

###### 磷酸一铵肥料投入（`establishment_nutrients_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`

###### 氯化钾肥料投入（`establishment_nutrients_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`

###### 施用的牛粪肥投入（`establishment_nutrients_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`

###### 农业石灰石投入（`establishment_nutrients_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`

###### 建植灌溉水（`establishment_irrigation_water`）

按水源和事件记录用于萌发与建植的供水总量；雨养路线记为零。

- 选定流： 灌溉水
- 流属性/单位： Volume / m3
- 数量规则： metered delivery or calculated volume from flow rate and operating time
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `uc-alfalfa-establishment`
- 数量范围： Provisional establishment-water screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： m3/ha established
  - 基准： gross supplied establishment water per hectare
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 中压电力投入（`establishment_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_establishment_records`

###### 柴油投入（`establishment_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_establishment_records`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

##### 废物流

##### 基本流

###### 建植期土地占用（`establishment_land_occupation`）

记录建植阶段占用的农业土地，不得将其作为产品流投入处理。

- 选定流： Agriculture land occupation `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- 流属性/单位： Area*time `93a60a56-a3c8-21da-a746-0800200c9a66` / ha*a
- 数量规则： established area multiplied by establishment-phase duration in years
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per hectare newly established stand before stand-life annualization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_establishment_records`
- 来源：
- 数量范围： Physical establishment land-time range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 1
  - 单位： ha*a/ha established
  - 基准： establishment duration cannot exceed the first stand-year
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `area-time-identity`

#### 输出
##### 产品流

###### 转入生产期的已建植苜蓿植株（`established_stand`）

将成功建植的植株及其已归属建植负荷转入后续生产年度；这是前景内部状态，不是参考产品。

- 选定流： 已建成的苜蓿草地，内部转移
- 流属性/单位： Area / ha
- 身份解析：前景内部转移；不适用外部数据库 UUID。
- 数量规则： surveyed successfully established area
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per hectare seeded area.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `uc-alfalfa-establishment`
- 数量范围： Established-area mass-balance range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 1
  - 单位： ha established/ha seeded
  - 基准： successfully established fraction of seeded area
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `area-balance-identity`

##### 废物流

##### 基本流

### 过程：已建植植株再生管理（`annual_regrowth_management`）

#### 输入
##### 产品流

###### 转入生产年度的已建植植株（`stand_year_input`）

记录由建植阶段或上一生产年度转入的生产面积和植株年龄。

- 选定流： 已建成的苜蓿草地，内部转移
- 流属性/单位： Area / ha
- 身份解析：前景内部转移；不适用外部数据库 UUID。
- 数量规则： productive alfalfa area at the start of the reporting year
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive stand-year.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`
- 来源：
- 数量范围： Productive-area consistency range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 1
  - 单位： ha productive/ha enrolled
  - 基准： productive fraction of enrolled stand area
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `area-balance-identity`

###### 尿素肥料投入（`annual_nutrients`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`

###### 磷酸一铵肥料投入（`annual_nutrients_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`

###### 氯化钾肥料投入（`annual_nutrients_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`

###### 施用的牛粪肥投入（`annual_nutrients_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`

###### 农业石灰石投入（`annual_nutrients_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`

###### 年度灌溉水（`annual_irrigation_water`）

按水源、事件和再生期记录灌溉供水总量；雨养生产记为零。

- 选定流： 灌溉水
- 流属性/单位： Volume / m3
- 数量规则： metered delivery or calculated volume from flow rate and operating time
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`
- 来源： `umn-alfalfa-drought-2024`; `usda-ars-alfalfa-irrigation`

所引作物需水量或降水加灌溉背景不是实际灌溉供水量，也不是其有效性上下限。采集声明测点/边界的实际供水；采用计算时须给出完整场址水量平衡，区分有效降雨、土壤蓄水、输配/施用效率及回水。本处不规定供水数值范围；雨养零值须有据，实测量不得被裁剪到文献需水背景内。

###### 中压电力投入（`annual_field_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_stand_year_records`

###### 柴油投入（`annual_field_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_stand_year_records`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

##### 废物流

##### 基本流

###### 生产性农业土地占用（`annual_land_occupation`）

记录报告生产年度所占用的苜蓿生产面积。

- 选定流： Agriculture land occupation `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- 流属性/单位： Area*time `93a60a56-a3c8-21da-a746-0800200c9a66` / ha*a
- 数量规则： productive area multiplied by reporting-year fraction
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_stand_year_records`
- 来源：
- 数量范围： Physical stand-year land-time range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 1
  - 单位： ha*a/ha*a enrolled
  - 基准： productive fraction of the reporting hectare-year
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `area-time-identity`

#### 输出
##### 产品流

###### 待收获鲜苜蓿生物质（`harvest_ready_biomass`）

按刈割编号将获准刈割的田间生物质转入收获节点；该内部状态不包括未收获再生物和被拒收地块。

- 选定流： 待收割的新鲜苜蓿生物质，内部转移
- 流属性/单位： Mass / kg fresh matter
- 身份解析：前景内部转移；不适用外部数据库 UUID。
- 数量规则： measured or estimated standing fresh biomass released to each cut
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive hectare and identified cut.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_cut_records`
- 来源：
- 数量范围： Provisional fresh standing-biomass screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100000
  - 单位： kg fresh matter/ha per cut
  - 基准： biomass released from one productive hectare to an identified cut
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 氧化亚氮，排放至空气（`managed_soil_n_emissions`）

仅在实测或所选适用方法确认该排放路径时，将氧化亚氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：per productive hectare-year before yield normalization。

- 选定流：氧化亚氮，排放至空气
- 流属性/单位：质量 / kg N2O
- 数量规则：实测或按方法计算氧化亚氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以 N2O-N 报告时，按 44/28 换算为 N2O 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`n_input`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stand_year_records`
- 来源：`ipcc-2019-managed-soils`

###### 氨，排放至空气（`managed_soil_n_emissions_nh3`）

仅在实测或所选适用方法确认该排放路径时，将氨，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：per productive hectare-year before yield normalization。

- 选定流：氨，排放至空气
- 流属性/单位：质量 / kg NH3
- 数量规则：实测或按方法计算氨，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`n_input`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stand_year_records`
- 来源：`ipcc-2019-managed-soils`

###### 一氧化氮，排放至空气（`managed_soil_n_emissions_no`）

仅在实测或所选适用方法确认该排放路径时，将一氧化氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：per productive hectare-year before yield normalization。

- 选定流：一氧化氮，排放至空气
- 流属性/单位：质量 / kg NO
- 数量规则：实测或按方法计算一氧化氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`n_input`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stand_year_records`
- 来源：`ipcc-2019-managed-soils`

###### 硝酸根，排放至水体（`managed_soil_n_emissions_nitrate`）

仅在实测或所选适用方法确认该排放路径时，将硝酸根，排放至水体作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：per productive hectare-year before yield normalization。

- 选定流：硝酸根，排放至水体
- 流属性/单位：质量 / kg NO3-
- 数量规则：实测或按方法计算硝酸根，排放至水体的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以硝酸盐氮报告时，按 62/14 换算为 NO3- 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`n_input`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stand_year_records`
- 来源：`ipcc-2019-managed-soils`

###### 化石二氧化碳，排放至空气（`managed_soil_n_emissions_co2_fossil`）

仅在实测或所选适用方法确认该排放路径时，将化石二氧化碳，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：per productive hectare-year before yield normalization。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：质量 / kg CO2
- 数量规则：实测或按方法计算化石二氧化碳，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`n_input`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stand_year_records`
- 来源：`ipcc-2019-managed-soils`

###### 改良剂相关二氧化碳（`amendment_co2`）

仅在施用相应产品时计算尿素或碳酸盐改良剂产生的二氧化碳。

- 选定流： Carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO2
- 数量规则： selected method factor multiplied by recorded urea or carbonate amendment mass
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per productive hectare-year before yield normalization.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_stand_year_records`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Nonnegative amendment-carbon screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg CO2/kg applicable amendment product
  - 基准： carbon-dioxide result per kilogram applicable amendment before yield normalization
  - 基准类型： Process output (`process_output`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `ipcc-2019-managed-soils`

### 过程：重复刈割与农场门交付（`forage_harvest_handoff`）

#### 输入
##### 产品流

###### 从田间接收的待收获生物质（`harvest_biomass_input`）

记录进入每次刈割的内部生物质，并保留其生产年度和刈割标识。

- 选定流： 待收割的新鲜苜蓿生物质，内部转移
- 流属性/单位： Mass / kg fresh matter
- 身份解析：前景内部转移；不适用外部数据库 UUID。
- 数量规则： mass released by `harvest_ready_biomass` for the identified cut
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per identified cut.

- 归一化基准：每声明的参考流
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_cut_records`
- 来源：
- 数量范围： Internal-transfer consistency range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 100000
  - 单位： kg fresh matter/ha per cut
  - 基准： biomass entering one identified cut
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 中压电力投入（`harvest_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
原始活动或阶段基准：per 1,000 kg accepted fresh reference product.

- 归一化基准：每声明的参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_cut_records`

###### 柴油投入（`harvest_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
原始活动或阶段基准：per 1,000 kg accepted fresh reference product.

- 归一化基准：每声明的参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_cut_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 合格鲜苜蓿饲草（`accepted_fresh_alfalfa`）

这是唯一参考产品输出。记录鲜质量、干物质比例和拒收状态后，方可汇总各次刈割的合格批次。

- 选定流： Alfalfa for forage and silage `bff9b03b-b5c0-486e-99f6-0a2ab67d725c`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：exactly 1,000 kg accepted fresh mass after normalization

- 数量规则：1000 千克
- 数值来源模式： Fixed value (`fixed_value`)
- 适用范围： Generic (`generic`)
原始活动或阶段基准：reference flow.

- 归一化基准：每声明的参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Identity reference (`identity_reference`)
- 来源：
- 数量范围： Reference-flow identity
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 1000
  - 上限： 1000
  - 单位： kg fresh matter
  - 基准： one normalized reference flow
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `reference-flow-identity`

##### 废物流

###### 被拒收或损失的刈割生物质（`rejected_cut_biomass`）

记录被拒收、刈割后留在田间、送往单独追踪的回收去向或废弃的生物质。返工或降级物料必须继续关联产生它的刈割批次，且不得计入合格输出。

- 选定流： 拒收或损失的新鲜苜蓿生物质
- 流属性/单位： Mass / kg fresh matter
- 身份解析：一次初搜和一次精炼搜索后仍未解析；返回的废物流候选为废热、金属/电气废料、废木料、马铃薯拒收物或通用厨余/园林生物废物，并非拒收鲜苜蓿生物质。
- 数量规则： incoming harvest biomass minus accepted fresh output and other measured destinations
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
原始活动或阶段基准：per 1,000 kg accepted fresh reference product.

- 归一化基准：每声明的参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_cut_records`
- 来源： `umn-alfalfa-harvest-loss`
- 数量范围： Provisional rejected/lost biomass screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg fresh biomass/1,000 kg accepted product
  - 基准： rejected and lost fresh biomass relative to accepted fresh output
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_establishment_life` | establishment burdens | 建植投入、排放及损失归属实际群落寿命内全部合格鲜产出；已知时采用实际终止及产出，未完成群落须披露预测寿命；同一建植负担不得在后续群落年度重分配。 | `umn-alfalfa-establishment`; `usda-ars-alfalfa-management-2024` |
| `allocation_stand_year` | annual management burdens | 先将群落年度投入归属报告公顷年，再除以该年度合格鲜产出；不得跨其他生产年度摊分年度投入。 | `area-time-identity` |
| `allocation_cut` | cut-specific operations | 采收能源、割次特定灌溉及损失归属对应割次；共享年度作业采用有据面积或各割次合格鲜质量等物理基准。 | `usda-ars-alfalfa-management-2024` |
| `allocation_rejects` | rejected or downgraded biomass | 除声明有据回收产品分配外，负担保留于产生的群落年度及割次；拒收生物量不计合格参考产出。 |  |
| `allocation_no_double_count` | all periods | 建植、群落年度及割次记录须有唯一阶段和期间标识，每项投入、产出、损失及田间事件仅进入归一化结果一次。 |  |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `stand_establishment` | establishment inputs and successful area | invoices, field-operation logs, seed tags, meter records, soil tests and stand survey | field_id, seeded_area, established_area, seed_mass, pure_live_seed_fraction, inoculant_mass, nutrient_product_mass, nutrient_composition, water_volume, energy_carrier_quantity, operation_date, product_application | reconcile purchase and application records to the target field and survey establishment；原始汇总与分配：sum event quantities; retain product identity; annualize only through `calc_establishment_attribution` | stated row units | each event and end-of-establishment survey | entire establishment phase | each target field | 每声明的参考流 | invoices, seed certificates, calibrated meters, soil analyses and dated field logs |
| `cp_stand_year_records` | `annual_regrowth_management` | 生产面积、管理投入与田间排放 | 田间日志、计量记录、发票、土壤和植株检测、天气与排放模型输入 | field_id, stand_age, productive_area, date, regrowth_period, nutrient_product, nutrient_composition, irrigation_volume, energy_quantity, crop_protection_mass, residue_return, amendment_mass | 将每一事件关联到田块、生产年度，并尽可能关联到再生期；原始汇总与分配：在生产年度内求和；保留再生期标签；按年度合格产量归一化 | 各行所述单位 | 完整生产年度内的每一事件 | 完整报告生产年度 | 每个生产田块 | 每声明的参考流 | 完整事件日志、计量校准、发票和方法版本 |
| `cp_cut_records` | `forage_harvest_handoff` | 刈割投入、合格鲜质量、干物质、能源与拒收物 | 收获机或地磅记录、装运单、燃料记录和代表性样品 | field_id, stand_year, cut_number, harvest_date, incoming_biomass, accepted_fresh_mass, rejected_mass, destination, dry_matter_fraction, energy_quantity | 识别每次刈割并核对进入、合格和拒收质量；原始汇总与分配：按刈割和年度汇总合格载荷；保留刈割特定拒收与能源；归一化为1,000 kg合格鲜质量 | kg, kg/kg, MJ | 每次刈割和每个载荷 | 报告生产年度的全部刈割 | 每个目标田块和农场门交付点 | 每声明的参考流 | 经校准地磅或有文件记录的产量估算方法、样品链和质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_establishment_attribution` | establishment cards | 建植数量×报告年度合格产出÷实际群落寿命合格产出；已终止群落采用已实现寿命期产出。 | establishment quantity, stand-year outputs, termination date | establishment burden assigned to reporting output | `area-time-identity` |
| `calc_fresh_normalization` | all cards | attributed row quantity ÷ accepted fresh mass × 1,000 kg | attributed row quantity, accepted fresh mass | row quantity per reference flow | `reference-flow-identity` |
| `calc_energy` | energy cards | 汇总各载能体数量×声明净能量换算因子；保留载能体身份，不将同一作业的服务及燃料表示相加。 | carrier quantities, electricity, conversion factors, operation ids | MJ by process and period |  |
| `calc_cut_mass_balance` | each cut | 在声明计量不确定性内：待采收进料＝合格鲜产出＋拒收/损失生物量＋独立追踪去向。 | incoming biomass, accepted mass, rejected mass, other destinations | reconciled cut mass balance | `mass-balance-identity` |
| `calc_managed_soil_emissions` | nitrogen and amendment emissions | 将声明清单方法的方程和因子用于实际相关氮、尿素、石灰、残体及更新活动数据，物质及区室分开。 | recorded activity data, method version and factors | species-specific elementary exchanges | `ipcc-2019-managed-soils` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_stand_year_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 确认农场门交接为鲜态、未加工、未青贮、未干燥及未打捆状态。 | product description, harvest and dispatch records |
| `dq_period_completeness` | multi-period attribution | 识别建植阶段、每个生产群落年度、全部纳入割次、群落终止及缺失记录，并记录预测寿命假设。 | period index and stand history |
| `dq_mass_and_moisture` | accepted output | 每割次采用校准鲜质量测量或有记录田间估算，并有代表性干物质样品。 | calibration, sample and laboratory records |
| `dq_input_completeness` | all processes | 将种子、养分产品、水、能源及植保记录与田间面积、作业及报告期核对。 | invoice-to-field reconciliation |
| `dq_route_separation` | alternative routes | 雨养/灌溉、管理系统和采收技术分层保持分开，除非证明按产出加权汇总。 | stratum records and weighting calculation |
| `dq_flow_resolution` | parameterized cards | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | 具体流身份核验证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_gate` | reference product | 参考产品过程纳入青贮、发酵、干燥、打捆或饲料制造时不通过。 |  |
| `validate_stand_periods` | all processes | 要求建植年份、群落年龄、报告群落年度、割次标识、实际或预测群落寿命及终止处理，跨期间双重归属不通过。 |  |
| `validate_nutrient_consolidation` | 每个适用过程 | 每种实际肥料或改良剂须有单独原子卡，保留实测产品量和组成；不得将笼统养分组绑定为一项交换。 |  |
| `validate_n_fixing_crop` | annual nutrient records | 没有路线特定需求证据时不接受常规矿质氮投入；报告矿质氮时须有根瘤或土壤/植物证据。 | `umn-alfalfa-fertilizer` |
| `validate_cut_balance` | each cut | 要求合格产出、拒收物及其他去向与待采收进料在披露计量不确定性内闭合。 | `mass-balance-identity` |
| `validate_irrigation_route` | water card | 雨养分层要求供应灌溉水为零；灌溉分层要求关联事件的实测或计算供水量。 |  |
| `validate_reject_path` | rejected biomass | 每种拒收状态须有声明去向，区分留田、回收、降级或废弃，不计入合格产出。 |  |
| `validate_route_delta` | alternative routes | 声称拓扑、清单、计算或验证发生变化时要求证据，禁止将互斥采后产品状态直接平均。 |  |
| `validate_range_shape` | 带数量范围的卡片 | 已提供的范围须包含角色、上下限、单位、基准、基准类型、证据类型及适用来源 id；重要流缺少范围须作为候选证据缺口披露。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground production dataset for fresh farm-gate alfalfa forage |
| downstream_use | secondary dataset and background dataset after review |
| allowed_use | crop-production inventories, livestock-feed supply chains and later silage systems that add downstream transformation explicitly |
| excluded_use | direct representation of hay, silage, pellets, meal, grazed forage, seed production or feed manufacturing |
| required_metadata | location, field, establishment year, stand age and life, reporting year, cut schedule, irrigation and management route, accepted fresh mass, dry-matter fraction, reject destinations and reference-gate evidence |
| required_quality_disclosure | record completeness by phase and cut, mass estimation method, dry-matter sampling, route separation, prospective stand-life assumptions, 具体流身份核验 and emission-method version |
| update_trigger | changed product gate, new route, revised stand-life attribution, changed cutting schedule, material yield or moisture change, new emission method, or newly verified flow identity |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `umn-alfalfa-establishment` | extension_guidance | University of Minnesota Extension, “Alfalfa establishment: Management strategies”, https://extension.umn.edu/agriculture/crop-production/forages/alfalfa-establishment-management-strategies | pure-live-seed basis, seed rate, coating/inoculation, establishment nutrients and perennial establishment records |
| `umn-alfalfa-fertilizer` | extension_guidance | University of Minnesota Extension, “Alfalfa fertilizer recommendations”, https://extension.umn.edu/agriculture/crop-production/nutrient-management-for-minnesota-crops/fertilizing-alfalfa | soil-test and yield-goal nutrient decisions, lime timing and limits on routine N fertilizer |
| `uc-alfalfa-establishment` | extension_guidance | UC Statewide IPM Program, “Planting and Establishing a Stand”, https://ipm.ucanr.edu/agriculture/alfalfa/planting-and-establishing-a-stand-stand-establishment/ | establishment operations, irrigation, seedbed and stand acceptance |
| `uc-alfalfa-irrigation` | extension_guidance | UC Statewide IPM Program, “Irrigation and Wheel Traffic Considerations”, https://ipm.ucanr.edu/PMG/C001/m001scirrwheel.html | irrigation timing, field traffic and regrowth management |
| `uc-alfalfa-established-ipm` | extension_guidance | UC Statewide IPM Program, “Integrated Weed Management in Established Alfalfa”, https://ipm.ucanr.edu/agriculture/alfalfa/integrated-weed-management-in-established-alfalfa/ | established-stand management, irrigation timing and crop-protection records |
| `umn-alfalfa-drought-2024` | extension_guidance | University of Minnesota Extension, “Alfalfa during drought”, reviewed 2024, https://extension.umn.edu/agriculture/crop-production/forages/alfalfa-during-drought | crop water-use rate, irrigation scheduling and rainfed/irrigated route separation |
| `umn-alfalfa-harvest-loss` | extension_guidance | University of Minnesota Extension, “Alfalfa scissors cut sampling procedure”, https://extension.umn.edu/agriculture/crop-production/forages/alfalfa-scissors-cut-sampling-procedure | harvest quality sampling and harvest-loss evidence |
| `usda-ars-alfalfa-irrigation` | literature | USDA Agricultural Research Service, “Effect of sprinkler irrigation depth and uniformity on alfalfa yield and quality”, https://www.ars.usda.gov/research/publications/publication/?seqNo115=337586 | seasonal water use, multiple cuts and water-productivity context |
| `usda-ars-alfalfa-management-2024` | dataset | USDA Agricultural Research Service project report 440524, FY2024, https://www.ars.usda.gov/research/project/?accnNo=440524&fy=2024 | perennial stand life, cutting schedules, cut contribution and route-specific management |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O, indirect nitrogen emissions, lime/urea CO2 and forage-renewal residue N |
| `area-time-identity` | method_factor | Physical area-time identity | establishment and stand-year attribution |
| `area-balance-identity` | method_factor | Physical area balance identity | seeded, established and productive area checks |
| `mass-balance-identity` | method_factor | Physical mass-conservation identity | cut mass reconciliation and rejected biomass |
| `reference-flow-identity` | method_factor | PCR normalization identity | exact reference output and normalization |
