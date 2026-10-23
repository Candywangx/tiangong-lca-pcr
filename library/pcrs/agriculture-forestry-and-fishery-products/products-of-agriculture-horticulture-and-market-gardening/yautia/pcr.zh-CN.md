---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yautia
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 牙芋（Yautia）

## 1. 范围与适用性

本 PCR 覆盖栽培 *Xanthosoma* 的田间生产、起收、有限农场门整理和鲜食球茎分级，包括以 yautia、tannia、malanga、macabo、new cocoyam 或 tiquisque 名称交易的产品。边界终点为农场门处已声明等级的鲜、未加工产品。

不包括 *Colocasia esculenta* 芋头/dasheen、观赏用 *Xanthosoma*、作为独立蔬菜出售的叶片，以及煮制、去皮、冷冻、切片、磨粉、制淀粉、储藏、包装或农场门后运输的产品。“Cocoyam”单独使用含义不明确；数据集必须确认 *Xanthosoma*，不得无披露地替用 *Colocasia* 数据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yautia` |
| classification_refs | CPC 3.0 `01591` Yautia; mapping relation: narrower |
| covered_products | Fresh edible *Xanthosoma* cormels/tubercles, including yautia, tannia and malanga trade names |
| excluded_products | *Colocasia* taro/dasheen; edible leaves as reference product; ornamental, processed, preserved, packaged, or post-farm products |
| representative_product | Sound fresh *Xanthosoma sagittifolium* cormels accepted for the declared market grade |
| production_route | Vegetative planting material → managed cultivation → lifting → limited primary conditioning → grading and dispatch |
| market_state | Fresh, unprocessed produce at farm gate; cultivar/species, grade, wet basis, washing/trimming state and gate declared |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门处符合已声明等级的鲜食牙芋球茎 |
| How much | 1,000 kg 鲜质量 |
| How well | 完好、坚实、达到生理成熟并符合已声明等级，排除腐烂球茎 |
| How long or cycle | 一个已声明作物周期，终止于农场门分级 |
| reference_flow_link | accepted_fresh_yautia |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | Yautia `72013e1f-538d-4031-b97a-03bfaa42b37d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | *Xanthosoma* 物种/品种；地理范围；作物年度；生产系统；收获部位；等级；湿基；水洗/修整状态；门点；纳入的整理操作 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted fresh yautia | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted cormels on the fresh wet basis after included trimming and cleaning. |
| `field_area_cycle` | cultivation inputs and emissions | Area; crop cycle | ha; cycle | Record actual area and dates; normalize only after linked mass balances close. |
| `nutrient_content` | fertilizers | Product mass and nutrient content | kg product; kg N; kg P2O5 or P; kg K2O or K | Retain product mass and assay separately and state oxide-to-element conversions. |
| `water_energy` | irrigation and utilities | Volume or energy | m3; kWh; L; MJ | 各项公用工程分别记录，披露来源、泵送边界及上游覆盖。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Land prepared for the crop cycle; planting material and external supplies enter as product flows |
| starting_condition_role | Foreground begins before establishment and ends when accepted fresh yautia leaves farm-gate grading |
| product_classification_scope | Fresh edible *Xanthosoma* cormels corresponding to CPC 3.0 `01591`, distinct from *Colocasia* taro |
| recursive_input_rule | Internally retained corms/cormels used for planting are internal transfers; purchased planting material requires an upstream dataset and is not reference output |
| upstream_dataset_requirement | Require upstream datasets for purchased planting material, fertilizers, amendments, pesticides, fuels, electricity, irrigation supply and external services |
| disclosure | Declare geography, cycle, species/cultivar, field and irrigation system, planting-material origin, included operations, wet basis, grades, destinations, allocation and gate |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_crop` | cultivation | Include establishment, soil/crop management, inputs, irrigation where used, field energy and direct field emissions until harvest-ready biomass is handed to lifting. | `fao-qds-2010`; `sri-lanka-doa-kiri-ala` |
| `boundary_harvest` | lifting | Model lifting separately because it creates raw collected material, soil carryover, damage and uncollected loss before conditioning. | `sri-lanka-doa-kiri-ala`; `fao-aroids-postharvest` |
| `boundary_conditioning` | conditioning | Include trimming, dry cleaning and washing only when performed; keep utilities, wastewater, removed soil and trimmings explicit. Curing, storage and packaging are extensions. | `codex-tannia-224-2001` |
| `boundary_grading` | grading | Sort prepared material into accepted product, downgraded edible product, propagation material and rejects, and record one hand-off for every state. | `codex-tannia-224-2001` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | Managed yautia cultivation | required | Always | foreground | one hectare and crop cycle |
| `lifting_harvest` | Lifting and harvest | required | Always | foreground | kg raw lifted crop |
| `farm_gate_conditioning` | Limited primary conditioning | required | Utilities may be zero for manual dry conditioning | foreground | kg raw material received |
| `farm_gate_grading` | Grading and destination sorting | required | Always | foreground | kg prepared material graded |

### 过程：牙芋管理种植（`field_cultivation`）

管理对象是营养繁殖的 *Xanthosoma* 作物。预期交接状态为可收获地下生物量；地上部、未收获生物量和损失分别作为残余物或损失。

#### 输入
##### 产品流

###### 营养繁殖种植材料（`planting_material_count`）

记录已定植的母球茎切块、球茎或育苗植株，并记录来源和健康状态。

- 选定流： 牙芋种植材料
- 流属性/单位： Number of items / plant or piece
- 数量规则： Count planting units established
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per ha and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_inputs`
- 来源： `fao-qds-2010`; `sri-lanka-doa-kiri-ala`
- 数量范围： Sri Lankan planting-density example
  - 范围角色： 典型范围 (`typical_range`)
  - 下限： 9000
  - 上限： 10000
  - 单位： planting units/ha/cycle
  - 基准： established units per occupied hectare for the documented Sri Lankan route
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `sri-lanka-doa-kiri-ala`

###### 尿素肥料投入（`field_cultivation_agricultural_nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per ha and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 磷酸一铵肥料投入（`field_cultivation_agricultural_nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per ha and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 氯化钾肥料投入（`field_cultivation_agricultural_nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per ha and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 施用的牛粪肥投入（`field_cultivation_agricultural_nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per ha and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 农业石灰石投入（`field_cultivation_agricultural_nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per ha and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`

###### 灌溉水（`irrigation_water`）

记录取水量、输送量、水源、扬程和灌溉方式；雨养路线记录为零。

- 选定流： 灌溉水
- 流属性/单位： Volume / m3
- 数量规则： Metered delivery or pump-flow calculation
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per ha and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_water_energy`
- 数量范围： Provisional irrigation screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 10000
  - 单位： m3/ha/cycle
  - 基准： delivered water per occupied hectare; zero is valid for rainfed production
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 柴油（`field_fuel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per ha and crop cycle。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_water_energy`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 可收获牙芋作物（`harvest_ready_crop`）

记录发生起收损失前可收获球茎的总质量。

- 选定流： 待采收的牙芋球茎及子球茎
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Field estimate reconciled to lifted mass and documented loss
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per ha and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_mass`
- 来源： `fao-ecocrop-xanthosoma`
- 数量范围： Published yield context
  - 范围角色： 典型范围 (`typical_range`)
  - 下限： 6000
  - 上限： 37000
  - 单位： kg fresh corms and cormels/ha/cycle
  - 基准： broad context spanning reported average and optimum yields; foreground mass governs
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `fao-ecocrop-xanthosoma`

##### 废物流

###### 田间残余物与未收获损失（`field_residues_losses`）

按去向记录地上部、根、损伤生物量和未收获作物。

- 选定流： 牙芋田间残余物及损失
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Measured or sampled mass by fate
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg gross harvestable corm/cormel mass.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residue_destinations`
- 数量范围： Provisional residue-and-loss screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5
  - 单位： kg fresh residue/kg gross harvestable output
  - 基准： all crop residues and uncollected loss per kg gross harvestable corm/cormel mass
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

###### 管理土壤直接氧化亚氮（`direct_soil_n2o`）

使用已声明方法根据所有适用氮源计算直接 N2O。

- 选定流： 排放至空气的一氧化二氮
- 流属性/单位： Mass / kg N2O
- 数量规则： Apply the selected factor to recorded 氮投入 and convert N2O-N to N2O by 44/28
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg 氮投入, then per 1,000 kg accepted yautia.

- 归一化基准：每声明的参考流
- 基准类型： 氮投入 (`n_input`)
- 证据类型： 方法公式 (`method_formula`)
- 采集协议： `cp_field_inputs`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Corrected IPCC Tier 1 EF1 uncertainty screen
  - 范围角色： 不确定性范围 (`uncertainty_range`)
  - 下限： 0.002
  - 上限： 0.018
  - 单位： kg N2O-N/kg N input
  - 基准： managed-soil direct-emission factor per kg applicable 氮投入 before 44/28 conversion
  - 基准类型： 氮投入 (`n_input`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `ipcc-2019-managed-soils`

### 过程：起收与收获（`lifting_harvest`）

该节点将作物从田间移除，并在整理前形成已收集原始球茎、夹带土壤、损伤和损失。

#### 输入
##### 产品流

###### 进入起收的可收获作物（`crop_entering_lifting`）

该卡片将种植环节同一待采收批次链接至起收边界。

- 选定流： 待采收的牙芋球茎及子球茎
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Equal `harvest_ready_crop` for the represented field
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per harvest operation.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_mass`
- 数量范围： Node transfer identity
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg input/kg cultivation-node output
  - 基准： same represented lot crossing into lifting
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

###### 柴油（`harvest_fuel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 1,000 kg 起收原料输出。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_mass`

###### 收获用电（`harvest_electricity`）

记录电动起收、收集或田间搬运设备使用的电力；人工或纯燃料路线记录为零。

- 选定流： 收获设备用电
- 流属性/单位： 能量 / kWh
- 数量规则： 按电表计量或设备功率乘记录工时计算，并分配至起收原料输出
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1,000 kg 起收原料输出.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_mass`
- 数量范围： 暂定收获用电筛选范围
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kWh/1,000 kg raw lifted output
  - 基准： 每 1,000 kg 起收原料输出的收获设备直接用电；未使用电动收获设备时为零
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 起收原始牙芋（`raw_lifted_yautia`）

已收集的原始起收状态含附着土壤，位于修整或清洗之前。

- 选定流： 刚起获的牙芋球茎及子球茎
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Weighed collected mass before conditioning
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg crop entering lifting.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_mass`
- 数量范围： Provisional lifting recovery
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.7
  - 上限： 1
  - 单位： kg raw output/kg harvest-ready crop input
  - 基准： collected raw crop per kg estimated harvest-ready crop
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 起收损失与损伤物料（`lifting_loss`）

记录留在田间或已受损而未进入原始收集状态的作物，并声明去向。

- 选定流： 牙芋起获损失及受损材料
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Difference between crop entering lifting and collected raw mass after soil adjustment
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg crop entering lifting.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_mass`
- 数量范围： Provisional lifting-loss screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.3
  - 单位： kg loss/kg harvest-ready crop input
  - 基准： uncollected and damaged crop per kg crop entering lifting
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：有限初级整理（`farm_gate_conditioning`）

该节点接收起收原料并交接修整、清洁后的球茎。水洗和动力清洁为条件路线；愈伤、冷藏、包装和加工位于默认边界之外。

#### 输入
##### 产品流

###### 进入整理的原始物料（`raw_material_conditioning_input`）

该卡片将同一原始起收批次链接至初级调理边界。

- 选定流： 刚起获的牙芋球茎及子球茎
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Equal `raw_lifted_yautia` for the represented lot
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per conditioning lot.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Node transfer identity
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg input/kg raw lifted output
  - 基准： same represented lot crossing into conditioning
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

###### 整理用水（`conditioning_water`）

仅在实际湿法清洗时记录供水；干法调理记为零。

- 选定流： 过程水
- 流属性/单位： Volume / m3
- 数量规则： Metered water supplied; dry-cleaned lots report zero
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per 1,000 kg raw material received.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional optional-washing water screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 2
  - 单位： m3/1,000 kg raw material received
  - 基准： supplied water per 1,000 kg raw input; zero when washing is absent
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 整理用电（`conditioning_electricity`）

仅在实际使用泵、清洗机或输送机时记录其用电。

- 选定流： 电力
- 流属性/单位： Energy / kWh
- 数量规则： Metered or equipment-rated electricity allocated to the lot
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：per 1,000 kg raw material received.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional conditioning-electricity screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kWh/1,000 kg raw material received
  - 基准： direct electricity per 1,000 kg raw input; zero for manual dry conditioning
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 进入分级的已整理牙芋（`prepared_yautia`）

准备好的状态为已经修整和清洁、即将按去向分级的材料。

- 选定流： 整备后的新鲜牙芋子球茎
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Weighed prepared mass after included trimming/cleaning
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg raw material received.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional conditioning yield
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.75
  - 上限： 1
  - 单位： kg prepared material/kg raw material received
  - 基准： prepared cormels per kg raw input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 整理剔除物与移除物料（`conditioning_rejects`）

记录允许时，将移除土壤与作物修整物分开，并声明各自去向。

- 选定流： 移除泥土、修整物及整备拒收物
- 流属性/单位： Mass / kg
- 数量规则： Weighed outputs or mass-balance difference, distinguishing soil and crop material
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg raw material received.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional conditioning-reject screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.25
  - 单位： kg removed material/kg raw material received
  - 基准： all removed soil, trimmings and rejects per kg raw input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 整理废水（`conditioning_wastewater`）

仅在湿法清洗时记录排水，并与供水和回用水核对。

- 选定流： 牙芋清洗废水
- 流属性/单位： Volume / m3
- 数量规则： Measured discharge or water balance; zero without washing
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per 1,000 kg raw material received.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional wastewater screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 2
  - 单位： m3/1,000 kg raw material received
  - 基准： discharge per 1,000 kg raw input; zero without washing
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：分级与去向分选（`farm_gate_grading`）

输入状态为已整理球茎。必须声明合格等级、降级食用输出、繁殖材料和剔除物，并为每一状态指定一个去向。

#### 输入
##### 产品流

###### 进入分级的已整理物料（`prepared_material_grading_input`）

该卡片将同一准备好的批次链接至按去向分级环节。

- 选定流： 整备后的新鲜牙芋子球茎
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Equal `prepared_yautia` for the represented lot
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per grading lot.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_grade_destinations`
- 数量范围： Node transfer identity
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg input/kg prepared output
  - 基准： same represented lot crossing into grading
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 合格鲜牙芋（`accepted_fresh_yautia`）

这是完好合格的等级，也是农场门唯一的参考产品交接点。

- 选定流： Yautia `72013e1f-538d-4031-b97a-03bfaa42b37d`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：Weighed accepted mass; normalize final dataset to exactly 1,000 kg

- 数量规则：1000 千克
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg prepared material and final 1,000 kg reference product.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grade_destinations`
- 来源： `codex-tannia-224-2001`
- 数量范围： Provisional accepted-grade recovery
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.6
  - 上限： 1
  - 单位： kg accepted product/kg prepared material graded
  - 基准： accepted fresh mass per kg prepared input; actual grade records govern
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 降级食用牙芋（`downgraded_edible_yautia`）

仅在有食用用途及交接证据时记录为产品产出。

- 选定流： 降级新鲜牙芋
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Weighed downgraded mass by buyer or use
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg prepared material graded.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grade_destinations`
- 数量范围： Provisional downgraded-output screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.35
  - 单位： kg downgraded edible output/kg prepared material graded
  - 基准： downgraded output with documented use per kg prepared input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 留用或出售的种植材料（`planting_material_output`）

将有意留作或出售用于繁殖的球茎或小球茎记为独立的预期产出。

- 选定流： 牙芋种植材料
- 流属性/单位： Mass and number / kg and item
- 数量规则： Weighed and counted propagation material by retention or sale destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg prepared material graded.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grade_destinations`
- 来源： `fao-qds-2010`
- 数量范围： Provisional propagation-output screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.25
  - 单位： kg planting material/kg prepared material graded
  - 基准： intentionally retained or sold propagation material per kg prepared input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 分级剔除物与残余物（`grading_rejects`）

按饲料、堆肥、还田、处理或处置去向记录拒收材料。

- 选定流： 牙芋分级拒收物及残余物
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Weighed reject mass or mass-balance residual, with destination stated
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：per kg prepared material graded.

- 归一化基准：每声明的参考流
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_grade_destinations`
- 来源： `codex-tannia-224-2001`
- 数量范围： Provisional grading-reject screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.2
  - 单位： kg rejects/kg prepared material graded
  - 基准： rejects after product outputs per kg prepared input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_output_classification` | all outputs | 各产出仅归类一次为参考产品、降级产品、繁殖材料、残体、废物或损失，记录一处交接并禁止双计。 | `mass-balance-identity` |
| `allocation_planting_material` | propagation output | 内部留用物料视为内部转移；独立销售的预期产品优先细分，否则按鲜质量分配剩余共享负担，价值显著不同时披露经济分配敏感性。 |  |
| `allocation_residue` | residues and rejects | 没有有据产品功能的还田或废弃物料不作共产品分配；纳入其处理负担。 |  |
| `allocation_shared_operations` | shared operations | 先直接归属可分离投入，再分配剩余共享负担；披露产出数量、使用时的价格、方法及优先级。 |  |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_cultivation` | planting and crop inputs | invoices, labels, field logs, assays | identity; quantity; nutrient assay; date; area; planting count; origin | reconcile purchase, stock and application logs；原始汇总与分配：sum by product and nutrient | kg product; kg nutrient; item; ha | every event | complete crop cycle | each field | 每声明的参考流 | invoice, label, assay, operator log |
| `cp_water_energy` | `field_cultivation` | water and energy | meters, pump logs, invoices, machine hours | source; volume; lift; energy; fuel; operation | meter or engineering calculation；原始汇总与分配：sum direct use; documented shared allocation | m3; kWh; L; MJ | each event/interval | complete cycle | each field/shared asset | 每声明的参考流 | calibration, invoice, runtime log |
| `cp_harvest_mass` | `lifting_harvest` | crop, raw output, loss and energy | weigh tickets, samples, harvest logs | area; crop estimate; raw mass; damage; loss; soil; energy | calibrated weighing and documented sampling；原始汇总与分配：reconcile crop to raw output and loss | kg; L; kWh | each field/lot | entire harvest | each field/lot | 每声明的参考流 | scale check, sampling record, operator log |
| `cp_residue_destinations` | `field_cultivation` | residues and loss | sampling, load weights, destination logs | material; mass; moisture; fate; recipient | representative sampling or weighed loads；原始汇总与分配：sum by material and fate | kg fresh/dry mass | each event | complete cycle | each field | 每声明的参考流 | sample, scale and destination evidence |
| `cp_conditioning_records` | `farm_gate_conditioning` | material, utilities and rejects | lot weights, meters, batch and discharge logs | raw mass; operation; water; electricity; prepared mass; rejects; wastewater | weigh before/after and meter utilities；原始汇总与分配：close mass and water balances | kg; m3; kWh | each lot | all conditioning | each conditioning line or station | 每声明的参考流 | calibrated scale/meter and destination log |
| `cp_grade_destinations` | `farm_gate_grading` | all grade states | grade sheets, scale tickets, invoices | input; specification; output masses; count; use; price | weigh each state and link to same lot；原始汇总与分配：sum by state/destination | kg; item; currency/kg | each lot | all grading | each grading line or station | 每声明的参考流 | scale, grade and destination evidence |
| `cp_phase1_environment_coverage` | field_cultivation | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | cycle or lot amount × 1,000 / accepted fresh yautia mass, after balances close | amount; accepted mass | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_nutrients` | fertilizer | nutrient mass = product mass × assay; state P/P2O5 and K/K2O conversion | product mass; assay | kg nutrient |  |
| `calc_direct_n2o` | soil N | selected factor × applicable N; multiply N2O-N by 44/28 to report N2O | kg N; factor | kg N2O | `ipcc-2019-managed-soils` |
| `calc_conditioning_balance` | conditioning | raw input = prepared output + removed soil/trimmings/rejects + unexplained difference | lot masses | closed balance | `mass-balance-identity` |
| `calc_grade_balance` | grading | prepared input = accepted + downgraded + propagation material + rejects | state masses | closed output balance | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_inputs`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Verify *Xanthosoma* identity and prohibit silent *Colocasia* substitution. | planting-material, crop inspection or agronomist record |
| `dq_temporal` | foreground | Cover one complete cycle and all contributing lots. | dated field and lot records |
| `dq_mass_balance` | harvest through grading | Reconcile each hand-off and explain differences exceeding 2% of the relevant input. | calibrated weights and worksheet |
| `dq_range_review` | every inventory card | Use ranges as QA context, retain foreground values, and explain outliers. | range review and linked evidence |
| `dq_co_products` | multiple outputs | Enumerate every intended output/destination and prevent double counting. | transfers, invoices and destination receipts |
| `dq_completeness` | inventory | 覆盖至少 95% 的外部非水物料质量，并披露缺少的水、能源、农药、养分、排放、拒收或去向记录。 | completeness and missing-data logs |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | 恰好一个 1,000 kg 产出采用 Yautia 流 72013e1f-538d-4031-b97a-03bfaa42b37d、质量属性 93a60a56-a3c8-11da-a746-0800200b9a66 及全部限定项。 |  |
| `validate_species_boundary` | identity | 没有经审查的代理披露时，拒绝含混“cocoyam”身份或以 Colocasia 替代。 | `fao-aroids-postharvest`; `codex-tannia-224-2001` |
| `validate_node_handoffs` | process map | 要求栽培→挖收、挖收→处理及处理→分级的批次精确关联。 | `mass-balance-identity` |
| `validate_destinations` | grading | 合格、降级、繁殖及拒收状态均须有明确零值或实测值，且各有一次交接。 | `codex-tannia-224-2001` |
| `validate_conditional_routes` | conditioning | 未使用的清洗/动力路线流量为零，使用路线报告公用工程和废物；储存/包装须扩展边界。 |  |
| `validate_ranges` | all cards | 要求有序非负界限、单位、分母、基准类型及证据类型；外部范围须有来源 id，区域示例不是通用限值。 |  |
| `validate_multi_output` | intended outputs | 要求完整产出集合及明确归属；不得将内部转移种植材料作为销售给予抵扣。 |  |
| `validate_flow_identity_bindings` | 参数化身份的产品输入 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_direct_emissions` | field emissions | 要求所选土壤排放方法、氮投入、因子、换算及流归属；不得仅由肥料产品质量推算排放。 | `ipcc-2019-managed-soils` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground farm-gate dataset for fresh unprocessed yautia |
| downstream_use | Reviewed `secondary_dataset` or `background_dataset` for systems requiring fresh *Xanthosoma* at farm gate |
| allowed_use | Geography-, cycle-, cultivar-, grade-, irrigation- and conditioning-matched attributional modelling |
| excluded_use | *Colocasia* taro, edible-leaf production, processed/preserved yautia, or post-farm transport/storage/packaging unless added |
| required_metadata | geography; crop year/cycle; species/cultivar; system; irrigation; planting origin; area; yield; grade; wet basis; lifting; conditioning; washing; gate; destinations; allocation |
| required_quality_disclosure | record coverage; range evidence status; mass-balance closure; missing data/proxies; assays; emissions method; utility allocation; co-product records; boundary extensions |
| update_trigger | material change in identity, geography, management, yield, irrigation, harvest, conditioning, grade, destinations, allocation, emissions method or reference UUID |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-qds-2010` | official_guidance | FAO, *Quality Declared Planting Material: Protocols and Standards for Vegetatively Propagated Crops*, 2010, https://www.fao.org/4/i1195e/i1195e00.pdf | *Xanthosoma* identity, synonyms and propagation material |
| `sri-lanka-doa-kiri-ala` | extension_guidance | Sri Lanka Department of Agriculture, “Kiri Ala – Xanthosoma sagittifolium,” https://doa.gov.lk/hordi-crop-kiri-ala/ | route, planting density, fertilizer schedule, harvest and regional yield |
| `fao-ecocrop-xanthosoma` | dataset | FAO Ecocrop, “Xanthosoma sagittifolium,” crop id 2168, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=2168 | identity, growing period and broad yield context |
| `codex-tannia-224-2001` | standard | Codex Alimentarius, CODEX STAN 224-2001, https://www.fao.org/4/a1389e/a1389e00.pdf | fresh tannia identity, quality, harvest care and grading |
| `fao-aroids-postharvest` | handbook | FAO INPhO, *Edible Aroids: Post-harvest Operations*, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Edible_aroids.pdf | *Xanthosoma* versus *Colocasia* and post-harvest route |
| `ipcc-2019-managed-soils` | method_factor | IPCC, *2019 Refinement*, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O method and EF1 uncertainty |
| `mass-balance-identity` | method_factor | Conservation of mass for linked foreground nodes | transfer, conditioning and grading balances |
