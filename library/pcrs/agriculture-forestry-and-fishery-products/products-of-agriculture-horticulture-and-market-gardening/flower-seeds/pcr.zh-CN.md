---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.flower-seeds
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 花卉种子

## 1. 范围与适用性

本 PCR 适用于专门为播种而生产并放行的开花植物种子。边界追踪一个明确物种、品种和批次，从亲本材料与受控繁育开始，经采收、提取、干燥、清选、检测、可选处理和包装，止于种子生产者或调制者交付点。

不包括切花、球根和其他营养繁殖材料、食用或榨油用途种子、无受控生产记录的野生采集种子，以及未声明播种用途的种子。若无透明加权，不得合并不同物种、品种、生产路线或处理状态。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.flower-seeds |
| classification_refs | CPC 3.0 `01963`; mapping relation: exact |
| covered_products | Conditioned seed of declared flowering-plant species intended for sowing |
| excluded_products | Cut flowers; vegetative propagules; seed sold for food, feed or oil; unidentified mixtures; unmanaged wild collection |
| representative_product | One accepted lot of a declared flower species and cultivar |
| production_route | Parent stock → managed seed crop → harvest/extraction → drying/cleaning/grading → testing, optional treatment and packaging |
| market_state | Conditioned sowing seed with lot, species/cultivar, purity, germination or viability, moisture, treatment and certification status declared |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 对象 | Conditioned flower seed released for sowing at producer or conditioner hand-off |
| 数量 | 1 kg |
| 质量要求 | Species, cultivar, lot, purity, germination/viability, moisture, treatment and certification status declared |
| 时间或周期 | One traceable multiplication and conditioning lot; multi-period burdens cover the declared productive period |
| reference_flow_link | released_flower_seed |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Flower seed for sowing; UUID unresolved |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必填限定信息 | species; cultivar; lot; multiplication route; purity; germination or viability; moisture; treatment; certification; geography; hand-off gate |

现有 `Seed of H. annuus` 身份仅限该物种，不作为全类别参考流。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference and intermediate seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用同批次报告含水率下的净种子质量，剔除包装质量。 |
| `quality_alignment` | released seed | lot-specific test result | declared test unit | Purity, germination/viability and moisture shall refer to the same sampled lot. |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Parent-stock identity, multiplication class, field or protected-production state, and perennial stand age when applicable |
| starting_condition_role | Traceable starting condition for the multiplication lot |
| product_classification_scope | One flower-seed product within CPC 3.0 01963 |
| recursive_input_rule | Parent flower seed is a linked upstream product input and is not recursively produced inside the current lot |
| upstream_dataset_requirement | Match species/cultivar, class, treatment, geography and supplier gate of received parent seed |
| disclosure | Declare production system, crop cycle, pollination management, sites, conditioning route, storage, treatment and reject destinations |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_route` | all datasets | Include evidenced multiplication, harvest/extraction, drying, cleaning, testing and pre-hand-off treatment, packaging and storage. | `fao-seed-handling`; `fao-seed-portal` |
| `boundary_parent_stock` | parent seed | Represent parent seed as a separate upstream exchange with lot identity and stop recursion there. |  |
| `boundary_market_state` | reference product | Release only seed intended for sowing and distinguish treated, coated, pelleted and untreated states. |  |
| `boundary_reject_route` | rejected material | Report off-spec seed, screenings and foreign matter by recovery, downgraded use or disposal destination. | `fao-seed-handling` |
| `boundary_multi_period` | perennial crops and shared assets | Attribute establishment and shared assets over documented productive output without double charging. |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | Parent-stock establishment and seed-crop production | `required` | Managed production of the declared flowering plant for seed | biological production | 1 kg harvested seed-bearing material |
| `harvest_extraction` | Harvest and seed extraction | `required` | Collection and separation of seed from heads, capsules, pods or fruit | harvest/capture | 1 kg raw extracted seed |
| `dry_clean` | Drying, cleaning and grading | `required` | Moisture stabilization and separation of accepted seed | conditioning/grading | 1 kg conditioned seed |
| `release_pack` | Testing, optional treatment, packaging and hand-off | `required` | Lot testing, release, presentation and pre-dispatch storage | material treatment/presentation | 1 kg released flower seed |

### Process: Parent-stock establishment and seed-crop production (`seed_crop_production`)

#### 输入
##### 产品流

###### Parent flower seed (`parent_seed`)

Declared parent seed enters the managed multiplication lot.

- 选定流： Parent flower seed for sowing; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured mass assigned to the production lot
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：per kg harvested seed-bearing material.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parent_stock`

- 数量范围： Provisional parent-seed QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.0001
  - 上限： 0.5
  - 单位： kg
  - 基准： per kg harvested seed-bearing material
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 尿素肥料投入（`nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg harvested seed-bearing material.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_crop_inputs`


###### 磷酸一铵肥料投入（`nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg harvested seed-bearing material.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_crop_inputs`


###### 氯化钾肥料投入（`nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg harvested seed-bearing material.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_crop_inputs`


###### 施用的牛粪肥投入（`nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg harvested seed-bearing material.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_crop_inputs`


###### 农业石灰石投入（`nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg harvested seed-bearing material.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_crop_inputs`


###### Irrigation water (`irrigation_water`)

Water delivered for irrigation is recorded when that route is active.

- 选定流： Irrigation water
- 流属性/单位： Volume / m3
- 数量规则： metered delivery or verified pump-flow calculation
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg harvested seed-bearing material.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_irrigation`

- 数量范围： Provisional irrigation QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： m3
  - 基准： per kg harvested seed-bearing material; zero only for documented rainfed production
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 中压电力（`production_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg harvested seed-bearing material。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 柴油（`production_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg harvested seed-bearing material。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

##### 废物流

不要求设置通用卡。

##### 基本流

Route-specific field emissions are calculated in the concrete package from recorded inputs and the declared method.

#### 输出
##### 产品流

###### Harvested seed-bearing material (`harvested_seed_material`)

Mature heads, capsules, pods, fruit or other declared material transferred to extraction.

- 选定流： Harvested flower seed-bearing material; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured net mass with material form and moisture
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：per crop lot.

- 归一化基准：每声明的参考流
- 基准类型： `crop_cycle`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional harvested-material QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 100
  - 单位： kg
  - 基准： per kg raw extracted seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不要求设置通用卡。

##### 基本流

不要求设置通用卡。

### Process: Harvest and seed extraction (`harvest_extraction`)

#### 输入
##### 产品流

###### Harvested material received (`harvested_material_input`)

可追溯采收批次进入分离过程，不得替换为另一作物。

- 选定流： Harvested flower seed-bearing material; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： linked measured mass from production
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：per kg raw extracted seed.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional extraction-input QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 100
  - 单位： kg
  - 基准： per kg raw extracted seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 中压电力（`extraction_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg raw extracted seed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 柴油（`extraction_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg raw extracted seed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

##### 废物流

不要求设置通用输入卡。

##### 基本流

不要求设置通用卡。

#### 输出
##### 产品流

###### Raw extracted flower seed (`raw_seed`)

分离后尚未调理的种子转入干燥和清选。

- 选定流： Raw extracted flower seed; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured output mass and moisture by lot
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：per extraction lot.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional raw-seed QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 2
  - 单位： kg
  - 基准： per kg conditioned seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

###### Extraction residues (`extraction_residue`)

非种子作物材料及未回收部分按有记录的去向离开。

- 选定流： Flower-seed extraction residue; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured residue mass or moisture-corrected mass balance
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg raw extracted seed.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_residue_reject`

- 数量范围： Provisional extraction-residue QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg
  - 基准： per kg raw extracted seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 基本流

不要求设置通用卡。

### Process: Drying, cleaning and grading (`dry_clean`)

#### 输入
##### 产品流

###### Raw flower seed received (`raw_seed_input`)

相连的原始种子批次进入水分稳定和清选。

- 选定流： Raw extracted flower seed; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： linked measured input mass and moisture
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：per kg conditioned seed.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional raw-seed input QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 2
  - 单位： kg
  - 基准： per kg conditioned seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 中压电力（`conditioning_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg conditioned seed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 柴油（`conditioning_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg conditioned seed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

##### 废物流

不要求设置通用输入卡。

##### 基本流

不要求设置通用卡。

#### 输出
##### 产品流

###### Conditioned flower seed (`conditioned_seed`)

含水率稳定且已清选的种子转入放行检验。

- 选定流： Conditioned flower seed for sowing; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured conditioned mass at declared moisture
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：per conditioning batch.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional conditioned-seed QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 1.5
  - 单位： kg
  - 基准： per kg released flower seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

###### Cleaning and grading rejects (`cleaning_rejects`)

不合格种子、颖壳及惰性杂质不计入合格种子。

- 选定流： Flower-seed cleaning rejects; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured reject mass by reason and destination
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg conditioned seed.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_residue_reject`

- 数量范围： Provisional cleaning-reject QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg
  - 基准： per kg conditioned seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 基本流

不要求设置通用卡。

### Process: Testing, optional treatment, packaging and hand-off (`release_pack`)

#### 输入
##### 产品流

###### Conditioned seed received (`conditioned_seed_input`)

相连的调理后批次进入取样、检验及最终准备。

- 选定流： Conditioned flower seed for sowing; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： linked measured mass from conditioning
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：per kg released flower seed.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional conditioned-input QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 1.5
  - 单位： kg
  - 基准： per kg released flower seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Seed treatment material (`seed_treatment`)

Treatment, coating or pelleting material is recorded only when applied before hand-off.

- 选定流： Seed treatment material; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured material applied net of returned stock
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：per kg released treated seed.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_treatment_packaging`

- 数量范围： Provisional treatment-material QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg
  - 基准： per kg released seed; zero for an untreated lot
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Seed packaging (`seed_packaging`)

记录放行批次实际使用的包装组件。

- 选定流： Flexible packaging for flower seed
- 流属性/单位： Mass / kg
- 数量规则： measured packaging mass by component; use another permitted group when the actual package is not flexible
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg released flower seed.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_treatment_packaging`

- 数量范围： Provisional packaging QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.001
  - 上限： 2
  - 单位： kg
  - 基准： per kg released flower seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 中压电力（`final_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg released flower seed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 柴油（`final_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg released flower seed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

##### 废物流

不要求设置通用输入卡。

##### 基本流

不要求设置通用卡。

#### 输出
##### 产品流

###### Released flower seed (`released_flower_seed`)

只有放行决定所覆盖的种子净质量才能成为参考产出。

- 选定流： Flower seed for sowing; UUID unresolved
- 流属性/单位： Mass / kg
原始产出计量与核对要求：measured net mass covered by the release decision

- 数量规则：1 千克
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：per released lot.

- 归一化基准：每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_release_quality`

- 数量范围： Reference-flow mass identity
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： per 1 kg reference flow
  - 基准类型： `reference_flow`
  - 证据类型： `collected_record`

##### 废物流

###### Failed-test or treatment rejects (`release_rejects`)

未通过放行或处理控制的材料不计入参考产出。

- 选定流： Rejected flower seed; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured rejected mass by failure reason and destination
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：per kg released flower seed.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_residue_reject`

- 数量范围： Provisional release-reject QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.5
  - 单位： kg
  - 基准： per kg released flower seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 基本流

不要求设置通用卡。

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_reconciliation` | each process | 在同一基准上核对期初库存、投入、产出、水分变化、残体、拒收物及期末库存。 |  |
| `allocation_secondary_outputs` | saleable plant material or downgraded seed | 优先细分或直接物理归属；仍须分配时，披露产出、因果基准、公式及敏感性。 |  |
| `allocation_rejects` | all rejects | 拒收种子不计放行产出；没有有据去向前不得给予抵扣。 |  |
| `allocation_periods` | perennial crops and shared assets | 按有据生产产出归属建植及基础设施，采用一致期间规则。 |  |
| `allocation_batches` | shared processing, storage and changeovers | 共享负担按实测时间、占用储存量、吞吐量或其他因果驱动分配，禁止双计。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_parent_stock` | `seed_crop_production` | parent seed | supplier/sowing record | species, cultivar, class, lot, treatment, mass, date, plot | invoice, label and calibrated scale；原始汇总与分配：sum traceable parent stock | kg | each sowing | crop cycle | production lot | 每声明的参考流 | label, invoice, scale check |
| `cp_crop_inputs` | `seed_crop_production` | nutrients and crop protection | purchase/application record | product, composition or active, mass, date, plot, purpose | invoice plus application log；原始汇总与分配：retain actual products and composition | kg | each application | crop cycle | plot/lot | 每声明的参考流 | invoice and log |
| `cp_irrigation` | `seed_crop_production` | irrigation | meter/pump record | volume, source, meter, runtime, plot, date | meter or documented pump calculation；原始汇总与分配：sum delivered volume | m3 | each event | crop cycle | plot/lot | 每声明的参考流 | calibration or pump specification |
| `cp_energy` | `all processes` | energy | meter, fuel and run record | carrier, quantity, equipment, node, lot, runtime | invoices, meters and equipment logs；原始汇总与分配：convert and allocate by causal driver | MJ; kWh | each run/interval | complete route | site/process | 每声明的参考流 | invoice, reading, run log |
| `cp_stage_mass_quality` | `all processes` | product/intermediate mass | batch/lot record | lot, stage, input, output, tare, moisture, form, time | weighing and moisture test；原始汇总与分配：preserve stage mass and moisture | kg; % | each transfer/batch | complete route | lot/node | 每声明的参考流 | ticket, calibration, sample id |
| `cp_residue_reject` | `harvest_extraction; dry_clean; release_pack` | residues/rejects | disposition record | type, mass, reason, destination, date, lot | scale plus dispatch/receiver record；原始汇总与分配：sum by material and destination | kg | each removal/lot | complete route | node/lot | 每声明的参考流 | scale, dispatch, mass balance |
| `cp_treatment_packaging` | `release_pack` | treatment/packaging | batch/stock record | formulation, applied mass, package type, component mass, count, returns, lot | equipment record and stock reconciliation；原始汇总与分配：net consumed by component | kg | each lot | final preparation | line/lot | 每声明的参考流 | stock and equipment check |
| `cp_release_quality` | `release_pack` | released seed | sampling/test/release record | identity, lot, purity, germination/viability, moisture, treatment, certification, mass | representative sampling and recognized test method；原始汇总与分配：include only released mass | kg; % | each lot | hand-off | lot | 每声明的参考流 | test, certificate, chain of custody |
| `cp_phase1_environment_coverage` | seed_crop_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖; 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | normalized amount = lot-attributed amount / net released seed mass | attributed amount; released mass | amount per kg reference seed |  |
| `calc_irrigation` | irrigation | delivered volume = meter difference, or verified pump rate × runtime | meter or pump data | m3 delivered |  |
| `calc_energy` | energy | convert carriers to declared energy and assign by evidenced driver | quantity; conversion; driver | MJ per process output |  |
| `calc_stage_balance` | each process | loss = opening stock + inputs − intended outputs − closing stock, adjusted for moisture | mass, stock, moisture | reconciled loss/residue |  |
| `calc_multi_period` | perennial/shared production | attributed burden = total burden × lot output / documented productive output | burden; outputs | lot burden |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference lot | 明确物种、品种、批次、播种用途及状态；物种 UUID 仅代表该物种。 | label, release record, binding review |
| `dq_quality_tests` | released seed | 纯度、发芽率/活力及含水率须覆盖放行批次，并说明方法及日期。 | laboratory record and sample chain |
| `dq_completeness` | foreground route | Include all released/rejected lots and at least 95% of operating days; quantify gaps. | coverage reconciliation |
| `dq_mass_balance` | each node | Reconcile material on a consistent moisture basis and disclose tolerance. | stage balance and calibration |
| `dq_binding` | emitted exchanges | 最终 TIDAS 发布前，将参数化和未绑定卡解析为已核实 UUID。 | expansion and identity review |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | 非播种种子、营养繁殖材料、切花及没有物种、品种或批次的记录不通过。 |  |
| `validate_reference` | reference flow | Require exactly 1 kg net released seed and the required quality qualifiers. |  |
| `validate_species_uuid` | reference identity | 类别 UUID 在相容性确认前保持空白；仅对明确声明的 H. annuus，在重新核对详情相容性后使用 50835e31-8359-4b7c-a818-81ef48e5ed42。 |  |
| `validate_nutrient_cardinality` | `seed_crop_production` | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_lot_chain` | all processes | 要求不间断的亲本材料、生产、提取、调理及放行批次链。 |  |
| `validate_rework_rejects` | rework/rejects | 返工经有记录节点重新进入；拒收质量不能同时作放行产出。 |  |
| `validate_ranges` | all flow cards | 要求有序界限、单位、基准、基准类型及证据类型；数量取自前景记录。 |  |
| `validate_binding` | all cards | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |

## 10. 发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground flower-seed data package and process projection |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Studies matching species/cultivar, route, geography, quality state and conditioner hand-off |
| excluded_use | Proxy for another species, cut flowers, food/oil seed, vegetative propagules or an unqualified species average |
| required_metadata | species; cultivar; lot; parent class; field/protected route; crop period; sites; purity; germination/viability; moisture; treatment; certification; storage; gate |
| required_quality_disclosure | record coverage; gaps; range exceedances; unresolved UUIDs; mass-balance tolerance; allocation; reject/rework destinations |
| update_trigger | new reviewed route evidence, compatible category UUID, changed 具体流身份核验|

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-portal` | `official_guidance` | FAO, Seeds portal, https://www.fao.org/seeds/en | conditioning, packaging, storage, sampling and testing stages |
| `fao-seed-handling` | `handbook` | FAO, *A Guide to Forest Seed Handling*, https://www.fao.org/4/ad232e/ad232e00.htm | collection, extraction, drying, cleaning, storage and seed-quality testing |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
