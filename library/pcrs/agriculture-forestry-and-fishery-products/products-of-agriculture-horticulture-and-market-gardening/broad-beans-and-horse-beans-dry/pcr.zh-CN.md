---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-dry
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 干蚕豆和干马豆

## 1. 范围与适用性

本 PCR 适用于在农场门口作为蚕豆、faba bean、field bean 或 horse bean 交付的成熟干燥 *Vicia faba* 籽粒。边界包括冷凉季田间生产、成熟收获、必要的预干、脱粒、清理、条件性水分控制干燥和分级；排除鲜青豆及豆荚、其他干豆类、按种子规格出售的播种用种子、未收获干籽粒的覆盖作物生物质，以及门后运输或加工。

应声明冬播/春播、雨养/灌溉、人工/机械收获、脱粒安排、自然/机械干燥、目标水分、等级、作物周期、场址和报告期。替代路线是相对其父活动的差异，仅可按独立计量批次或有记录的份额并存。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-dry |
| classification_refs | CPC 3.0 `01702` Broad beans and horse beans, dry; mapping relation: narrower |
| covered_products | mature dry *Vicia faba* grain sold as broad, faba, field, or horse bean |
| excluded_products | green/fresh beans; planting seed sold as seed; other dry pulses; forage, silage, cover crop or green manure; processed bean fractions |
| representative_product | cleaned and graded mature dry *Vicia faba* grain |
| production_route | managed cool-season field production, mature harvest, threshing/cleaning, conditional drying and grading; route deltas are declared from their parent node |
| market_state | harvested grain, unprocessed, at `Production mix, at farm gate`, with moisture, grade and intended food/feed market declared |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | cleaned, graded, mature dry *Vicia faba* grain accepted at farm gate |
| How much | 1,000 kg net grain mass |
| How well | declared moisture and market grade; excludes foreign matter, straw/hulls, shattering loss, downgraded grain, rejects and seed sold for planting |
| How long or cycle | one declared crop cycle and linked conditioning lots |
| reference_flow_link | accepted_dry_grain |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | Broad beans and horse beans, dry `b9ccab43-8330-44f4-b125-456e97ec6e87` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | *Vicia faba* identity; mature dry grain; production geography; winter/spring crop; rainfed/irrigated; harvest, threshing and drying route; wet-basis moisture; grade; market; accepted, downgraded, rejected, residue and loss quantities; crop cycle; farm-gate hand-off |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按农场门实测含水率报告净籽粒质量；剔除包装、异物、残体、降级籽粒及拒收物。 |
| `moisture_conversion` | grain before/after drying | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and % wet basis | 保全干物质：干物质＝湿质量×（1－含水率分数）；仅用成对质量及含水率观测换算。 |
| `nutrient_products` | 实际肥料与改良剂投入 | product mass and analysis | kg product and kg nutrient | 每种施用产品及分析数据分别采集；每种物理产品各有一张产品投入卡。养分总量另行计算，不得重复建立交换。 |
| `area_yield` | field production | area and accepted grain mass | ha and kg | 用同一作物周期种植面积和合格籽粒核算产量，并披露失败面积。 |
| `energy_identity` | all energy uses | carrier-specific property | original unit plus MJ or kWh | Preserve carrier, original quantity and conversion basis. |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | prepared field and purchased or retained planting material entering the declared crop cycle |
| starting_condition_role | foreground agricultural start; preceding crop, land occupation and retained-seed origin disclosed when material |
| product_classification_scope | mature dry *Vicia faba* grain represented by CPC 3.0 `01702` |
| recursive_input_rule | retained grain used for sowing is an input from a separately described prior-cycle or seed dataset, not current-cycle reference output |
| upstream_dataset_requirement | supplier/region-specific datasets for planting material, nutrients, crop protection, water and energy; actual identities retained |
| disclosure | site, season, cultivar class, prior crop, sowing, irrigation, management, harvest state, pre-drying, threshing, cleaning, drying, grading, moisture, destinations and hand-off |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | full route | Include field establishment and management through accepted graded dry grain, including route-specific pre-drying, threshing, cleaning, drying and grading. | `vce-faba-bean-2024`; `fao-grain-postharvest` |
| `boundary_identity` | reference output | Count only mature dry *Vicia faba* grain; exclude green harvest, planting-seed certification, other pulses and downstream processing. | `vce-faba-bean-2024`; `feedipedia-faba-bean` |
| `boundary_harvest_node` | harvest | Keep harvest distinct because standing crop becomes collected material and creates shattering, field-residue and hand-off records before conditioning. | `fao-predrying` |
| `boundary_conditioning_states` | post-harvest | Record harvested material, clean grain, stabilized grain, residues, removed water, rejects and losses at their actual hand-offs. | `fao-grain-postharvest` |
| `boundary_residue_destination` | residues | Separate returned, removed, burned and discarded residues in soil-emission calculations and prevent double counting. | `ipcc-2019-managed-soils` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `managed_field_production` | 蚕豆田间管理生产 | `required` | always | biological-production parent with winter/spring and rainfed/irrigated route delta records | crop cycle and cultivated hectare |
| `mature_crop_harvest` | 成熟收获与预干 | `required` | always; pre-drying may be zero | independent capture parent with manual, windrow and combine technology delta records | kg standing crop entering harvest |
| `threshing_cleaning` | 脱粒与清理 | `required` | may be physically integrated with harvest but quantitatively distinct | primary conditioning to clean grain | kg collected material |
| `moisture_stabilization` | 水分控制干燥 | `conditional` | grain above declared gate moisture or active drying/aeration | preservation to stable moisture | kg clean grain entering drying |
| `farm_gate_grading` | 分级与交接 | `required` | always | sorting to accepted, downgraded, rework and reject states | kg conditioned grain |

田间生产按作物周期索引，收获和调理按批次或运行索引。替代路线应分别计量或按合格产出加权；共享清洁、空转和换线负担只归属一次。

### 过程：蚕豆田间管理生产 (`managed_field_production`)

#### 输入
##### 产品流

###### 播种材料 (`planting_material`)

记录实际播种的外购种子或留用成熟籽粒。

- 选定流： 蚕豆（*Vicia faba*）种植材料
- 流属性/单位： Mass / kg
- 数量规则： measured mass sown, net of unused material
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`
- 数量范围： 暂定 sowing-input screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 50
  - 上限： 600
  - 单位： kg
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 尿素肥料投入（`nutrient_products`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`

###### 磷酸一铵肥料投入（`nutrient_products_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`

###### 氯化钾肥料投入（`nutrient_products_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`

###### 施用的牛粪肥投入（`nutrient_products_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`

###### 农业石灰石投入（`nutrient_products_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`

###### 灌溉水 (`irrigation_water`)

仅对灌溉批次记录取水量或到田水量，并保留水源及输送边界。

- 选定流： 灌溉水
- 流属性/单位： Volume / m3
- 数量规则：按事件/用途和匹配期间，计量实际跨此产品供水边界的供水量并保留声明原生单位。水源取水表不能自动当交付产品量，须核对两测点间输配损失、外部回水和存水变化。前景负责直接天然取水时，另设分水源基本流输入及本地供水作业，内部交付在聚合边界抵销，不能另加一笔外购水。外购水承接兼容供应商取水及供水负担一次。雨养/无供水须有据，缺少交付量或责任证据属于不完整而非零；归属后按合格最终产出归一化一次。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`
- 数量范围： 暂定 irrigation screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 10000
  - 单位： m3
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

处理材料必需记录：数据包完成前，按具体组成、产品身份、数量和使用事件逐项列出实际使用的田间处理产品或沤制助剂；不得发布通用处理材料交换，身份缺失时不得假定为零。

###### 中压电力投入（`field_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`

###### 柴油投入（`field_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 田间成熟植株 (`standing_mature_crop`)

成熟植株在此交付收获节点，尚不构成合格干籽粒。

- 选定流： 田间成熟蚕豆（*Vicia faba*）作物
- 流属性/单位： Mass / kg above-ground harvested fraction
- 数量规则： harvested material plus measured field/shattering losses, moisture state declared
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_lot`

本卡为质量交换，面积区间不能校验其数量。收获植株质量依据实测生物量、水分及损失确定。种植面积另算：匹配的合格籽粒质量（kg）除以实测合格得率（kg/ha），再乘 10,000 m2/ha。收获种子得率须先与干燥、拒收和损失对账，才能作为合格得率；此处不设通用场址面积界限。

##### 废物流

##### 基本流

###### 氧化亚氮，排放至空气（`managed_soil_emissions`）

仅在实测或所选适用方法确认该排放路径时，将氧化亚氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格干籽粒。

- 选定流：氧化亚氮，排放至空气
- 流属性/单位：质量 / kg N2O
- 数量规则：实测或按方法计算氧化亚氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以 N2O-N 报告时，按 44/28 换算为 N2O 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle`
- 来源：`ipcc-2019-managed-soils`

###### 氨，排放至空气（`managed_soil_emissions_nh3`）

仅在实测或所选适用方法确认该排放路径时，将氨，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格干籽粒。

- 选定流：氨，排放至空气
- 流属性/单位：质量 / kg NH3
- 数量规则：实测或按方法计算氨，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle`
- 来源：`ipcc-2019-managed-soils`

###### 一氧化氮，排放至空气（`managed_soil_emissions_no`）

仅在实测或所选适用方法确认该排放路径时，将一氧化氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格干籽粒。

- 选定流：一氧化氮，排放至空气
- 流属性/单位：质量 / kg NO
- 数量规则：实测或按方法计算一氧化氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle`
- 来源：`ipcc-2019-managed-soils`

###### 硝酸根，排放至水体（`managed_soil_emissions_nitrate`）

仅在实测或所选适用方法确认该排放路径时，将硝酸根，排放至水体作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格干籽粒。

- 选定流：硝酸根，排放至水体
- 流属性/单位：质量 / kg NO3-
- 数量规则：实测或按方法计算硝酸根，排放至水体的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以硝酸盐氮报告时，按 62/14 换算为 NO3- 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle`
- 来源：`ipcc-2019-managed-soils`

###### 化石二氧化碳，排放至空气（`managed_soil_emissions_co2_fossil`）

仅在实测或所选适用方法确认该排放路径时，将化石二氧化碳，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每 1,000 kg 合格干籽粒。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：质量 / kg CO2
- 数量规则：实测或按方法计算化石二氧化碳，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_cycle`
- 来源：`ipcc-2019-managed-soils`

### 过程：成熟收获与预干 (`mature_crop_harvest`)

#### 输入
##### 产品流

###### 中压电力投入（`harvest_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_lot`

###### 柴油投入（`harvest_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_lot`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 收集的收获物 (`collected_harvest_material`)

将收集的豆荚/植株或联合收获物记作预期产出，并记录其在调理交接点的预干状态。

- 选定流： 已收集的成熟蚕豆收获物
- 流属性/单位： Mass / kg
- 数量规则： measured wet mass with moisture and included plant fractions
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 路线特定 (`route_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_lot`
- 来源： `fao-grain-postharvest`; `fao-predrying`
- 数量范围： 暂定 collected-material screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1000
  - 上限： 6000
  - 单位： kg wet harvested material
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 有价值田间残余物 (`field_residue_product`)

仅当移出的秸秆/茎秆有有益去向且具正价值时记作共产品；返田部分留在残余物管理中。

- 选定流： 具有明确利用去向的蚕豆田间残余物
- 流属性/单位： Mass / kg dry matter
- 数量规则： measured/calculated removed dry matter by destination
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_lot`
- 来源： `vce-faba-bean-2024`; `ipcc-2019-managed-soils`
- 数量范围： 暂定 removed-residue screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： kg dry matter
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 裂荚和收获损失 (`harvest_grain_loss`)

记录裂荚、捡拾或收获作业造成的籽粒损失，绝不计入合格或降级产出。

- 选定流： 采收过程中损失的蚕豆籽粒
- 流属性/单位： Mass / kg
- 数量规则： measured loss sample or lot mass-balance estimate
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_lot`
- 来源： `fao-predrying`; `feedipedia-faba-bean`
- 数量范围： 暂定 harvest-loss screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg grain
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：脱粒与清理 (`threshing_cleaning`)

#### 输入
##### 产品流

###### 中压电力投入（`conditioning_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_lot`

###### 柴油投入（`conditioning_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_lot`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 清洁籽粒 (`cleaned_grain`)

将脱粒清理后的籽粒记作预期产出并记录进料水分；高于目标时送干燥，否则直接送分级。

- 选定流： 清理后的成熟蚕豆籽粒
- 流属性/单位： Mass / kg
- 数量规则： measured lot mass after foreign matter removal
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_lot`
- 来源： `fao-grain-postharvest`
- 数量范围： 暂定 clean-grain screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1000
  - 上限： 1800
  - 单位： kg at incoming moisture
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 有价值秸秆和荚壳 (`conditioning_residue_product`)

仅当分离秸秆/荚壳有有益去向且具正价值时记作共产品。

- 选定流： 具有明确利用去向的蚕豆秸秆和荚壳
- 流属性/单位： Mass / kg dry matter
- 数量规则： measured/moisture-corrected mass by destination
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning_lot`
- 数量范围： 暂定 residue-product screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 4000
  - 单位： kg dry matter
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 清理拒收物 (`conditioning_rejects`)

按类别和去向记录受污染秸秆/荚壳、土、石块、杂物和未回收籽粒。

- 选定流： 废弃的脱粒与清理残余物
- 流属性/单位： Mass / kg
- 数量规则： measured reject mass
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_lot`
- 数量范围： 暂定 conditioning-reject screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000
  - 单位： kg residues
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：水分控制干燥 (`moisture_stabilization`)

#### 输入
##### 产品流

###### 中压电力投入（`drying_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_lot`

###### 柴油投入（`drying_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_lot`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 稳定化籽粒 (`stabilized_grain`)

记录自然或机械干燥后交付分级的籽粒，并保留成对的质量和水分测量。

- 选定流： 水分稳定后的成熟蚕豆籽粒
- 流属性/单位： Mass / kg
- 数量规则： measured outgoing mass verified by dry-matter balance
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_lot`
- 来源： `fao-grain-postharvest`; `feedipedia-faba-bean`
- 数量范围： 来源支持的 moisture screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 14
  - 单位： percent moisture, wet basis
  - 基准： stabilized grain lot; above 12% requires aeration/destination justification and above 14% explicit non-storage hand-off
  - 基准类型： 过程产出 (`process_output`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `fao-grain-postharvest`; `feedipedia-faba-bean`

##### 废物流

###### 干燥损失 (`drying_loss`)

记录洒落、霉变、热损伤或虫害籽粒，不含计算所得的除水量。

- 选定流： 干燥过程中拒收的籽粒
- 流属性/单位： Mass / kg
- 数量规则：计量或代表性抽样估算实际已识别拒收、洒落或其他损失材料及有据去向。仅在其他产品、残余、水、库存和转移项均有据、相容且互斥时，方可用组分平衡估算该物流，并披露不确定性。未解释平衡差保留为调查/证据缺口，不能自动作为废物产出、干物质损失、水汽或排放。各实际材料/状态/去向分开，留存或返工材料作为配对转移或库存；有据转出量按最终合格产出归一化一次。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_drying_lot`
- 数量范围： 暂定 drying-loss screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： kg grain dry-matter equivalent
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

###### 干燠除水 (`removed_water`)

根据成对质量/水分测量计算除水量，并与干物质损失分开。

- 选定流： 籽粒干燥排放至空气的水
- 流属性/单位： Mass / kg
- 数量规则：在闭合水质量控制体上确定有据蒸发量：进入材料的水 + 实际加水 + 期初水库存 - 全部合格品/联产品/拒收物/残体出口带水 - 单独液体排出/转出水 - 期末水库存。逐材料流采用实测湿质量乘湿基含水率，液体体积采用兼容密度；内部循环抵销。适用时保留实际降雨/复湿，总鲜干质量差并非全为水。各项和蒸发路径须独立有据；未解释或负平衡需调查，不能强记为水蒸气释放或截为零。水量与干物质损失及其他挥发物分开，按原匹配最终参考量归属并归一化一次。
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_drying_lot`
- 来源： `fao-grain-drying`
- 数量范围： 暂定 removed-water screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1500
  - 单位： kg water
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

### 过程：分级与交接 (`farm_gate_grading`)

#### 输入
##### 产品流

###### 中压电力投入（`grading_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grading_lot`

###### 柴油投入（`grading_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grading_lot`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 合格干籽粒 (`accepted_dry_grain`)

预期参考产出是在声明等级、水分和农场门口交接条件下的合格籽粒。

- 选定流： Broad beans and horse beans, dry `b9ccab43-8330-44f4-b125-456e97ec6e87`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：1,000 kg net accepted grain

- 数量规则：1000 千克
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
原始活动或阶段基准：一个参考流.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 身份引用 (`identity_reference`)
- 数量范围： 参考产出恒等范围
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1000
  - 上限： 1000
  - 单位： kg
  - 基准： 一个参考流
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 身份引用 (`identity_reference`)

###### 降级籽粒 (`downgraded_grain`)

仅在有销售或有益去向时将破损、裂粒、过小或不合格籽粒记作共产品，并从合格产出中排除。

- 选定流： 按等级与去向区分的降级成熟蚕豆籽粒
- 流属性/单位： Mass / kg
- 数量规则： measured net mass at each beneficial hand-off
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grading_lot`
- 数量范围： 暂定 downgraded-grain screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000
  - 单位： kg grain
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 分级拒收物 (`grading_rejects`)

无有益去向的不合格籽粒和杂物记作废物；返工回到清理或分级，仅在最终交接点计数。

- 选定流： 分级拒收物与废弃不合格籽粒
- 流属性/单位： Mass / kg
- 数量规则： measured reject mass net of documented rework return
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
原始活动或阶段基准：每 1,000 kg 合格干籽粒.

- 归一化基准：每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grading_lot`
- 数量范围： 暂定 grading-reject screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg rejects
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_output_classification` | all outputs | 各数量在一处交接仅归属一次为合格产品、有价值共产品、还田残体、返工、降级品、废物或损失。 | `ipcc-2019-managed-soils` |
| `allocation_residue_default` | straw/stems/leaves/hulls | 还田物料不作共产品分配；移出物料仅在有益去向及正价值成立时作共产品，否则为废物。 | `vce-faba-bean-2024`; `ipcc-2019-managed-soils` |
| `allocation_economic_precedence` | independently valuable co-products | 先细分并直接归属可单独记录的作业。存在独立预期产品的剩余共同负担，在首次独立农场交接点按经济价值分配：share_i = (quantity_i * price_i) / sum(quantity_j * price_j)，纳入完整产出集合，并匹配期间、交接点和币种。披露代表性价格来源、交易记录、波动、含水基准及质量分配敏感性。价格缺失、不稳定或无代表性属于分配证据缺口，不得据此忽略实际联产品或声明为单一产出系统。仅在有据确认其他材料没有独立预期产品功能时，才能采用单一产出处理。不得编造价格或把未知价格当零；分配分母未解决时，完整分配结果不成立。 |  |
| `allocation_rework` | damaged/off-spec grain | 重清理/重分级承接原有负担，循环能耗只计一次，物料仅在最终交接归类。 |  |
| `allocation_route_period` | mixed routes/shared runs | 田间负担按作物周期归属，采后负担按批次计量或吞吐份额归属；共享清理/换线仅归属一次。 |  |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle` | `managed_field_production` | inputs, area and emission drivers | field log/invoice/meter | crop; field; dates; area; seed; each nutrient product/analysis; treatments; water; carriers; lime/urea; prior crop ；实际供水边界及测点；产品交付量；直接取水责任方；水源至交付的损失回水及存水；供应商覆盖| reconcile logs, invoices, meters and maps；原始汇总与分配：retain product rows; sum like identities; allocate shared use by documented driver | native units, kg, L, m3, MJ, kWh, ha | each operation | crop cycle | each field/route | 每声明的参考流 | invoices, calibration, map, application/meter log |
| `cp_harvest_lot` | `mature_crop_harvest` | crop, collected state, residues and losses | ticket/sample/log | lot; maturity; route; pre-drying; masses; moisture; fractions; shatter; residue dry matter/destination; energy | scales plus representative loss sampling；原始汇总与分配：reconcile standing, collected, residue and loss; weight routes by accepted output | kg, %, kg DM, MJ, kWh | field/lot | harvest period | field/route | 每声明的参考流 | calibration, sample design, log |
| `cp_conditioning_lot` | `threshing_cleaning` | clean grain, residues, rejects and energy | batch/meter/scale | lot; route; mass/moisture; residue mass/moisture/destination/value; rejects; energy/changeover | calibrated instruments and destination records；原始汇总与分配：close wet/dry mass balance; assign shared burdens once | kg, %, kg DM, MJ, kWh | lot/run | campaign | line/site | 每声明的参考流 | calibration, batch sheet, receipt |
| `cp_drying_lot` | `moisture_stabilization` | stable grain, energy, water and loss | dryer/meter/moisture log | lot; technology; paired mass/moisture; duration; temperature; airflow; carriers; losses ；含拒收物/残体的全部进出水；实际加水/降雨；单独液体转出；期初期末水库存；含水率及密度；有据蒸发; 实际材料/状态/去向；代表性物流计量；其他全部组分/库存项；未解释差额及不确定性| calibrated mass/moisture and energy records；原始汇总与分配：preserve dry matter; calculate water; assign energy/loss | kg, %, MJ, kWh, h, °C | lot | campaign | drying route | 每声明的参考流 | calibration, dryer/meter/inspection log |
| `cp_grading_lot` | `farm_gate_grading` | accepted, downgraded, rework and rejects | grading/scale/sales record | lot; incoming mass/moisture; criteria; each output mass/destination/value; rework; energy; date | scale/sorter reconciled to destination；原始汇总与分配：accepted + downgraded + rejects = input − measured loss; rework only at final hand-off | kg, %, currency/kg, MJ, kWh | lot | reporting period | grading site | 每声明的参考流 | calibration, ticket, invoice, receipt |
| `cp_phase1_environment_coverage` | managed_field_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_dry_matter` | moisture conversion | 干物质＝湿质量×（1－湿基含水率分数）；目标基准湿质量＝干物质÷（1－目标含水率分数）。 | paired mass/moisture | dry matter and normalized mass | `fao-grain-drying` |
| `calc_removed_water` | drying | incoming water minus outgoing water; do not count as dry-matter loss | paired mass/moisture | kg water | `fao-grain-drying` |
| `calc_accepted_yield` | field/reference | accepted net grain divided by cultivated area; disclose failed area and moisture | output, area, moisture | kg/ha |  |
| `calc_residue_n` | returned residue | 采用所选国家方法或 IPCC 方程11.6，区分地上/地下及移出/焚烧份额。 | yield, residue DM/N, destination fractions | kg residue N returned | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | post-harvest lots | 进料干物质＝合格＋降级＋有价值残体＋最终废物/损失的干物质；调查差额。 | all states/moisture | closure error/flag |  |
| `calc_route_mix` | route alternatives | sum(route result × accepted-output share); enter shared burdens once | route inventories/shares | production mix |  |
| `calc_economic_allocation` | valuable outputs | 产出价值÷同期间/含水率基准上所有独立有价值产出的总价值。 | masses/prices/moisture | allocation fractions |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_cycle`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | grain | 证明为 Vicia faba、成熟干籽粒用途、市场名称、等级及非种子交接。 | crop/lot/specification/invoice |
| `dq_temporal` | route | 将一个代表作物周期关联采后批次；论证平均处理并保留失败作物。 | dated records |
| `dq_measurement` | mass/moisture/energy/water | 使用校准仪器或有记录发票/仪表；保留基准、不确定性及替代数据。 | calibration and raw records |
| `dq_completeness` | output states | 核对合格、降级、返工、残体、废物、落粒、搬运及移出水状态。 | node balances/receipts |
| `dq_route_specificity` | alternatives | 冬/春作、雨养/灌溉、人工/机械及自然/机械干燥记录在混合汇总前分开。 | route-coded records |
| `dq_flow_identity` | parameterized/unmapped rows | TIDAS 发布前，将每项输出的 Product 交换及物质/接收区室特定基本交换解析为已核实 UUID。 | resolution record |
| `dq_range_review` | quantitative rows | Use ranges only as QA screens; investigate exceptions and retain foreground values. | QA note/raw record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference output | 要求声明产品/属性/单位组 UUID、1,000 kg、成熟干 Vicia faba、含水率、等级及农场门交接。 |  |
| `validate_scope` | package | 参考产出不得包括青豆、作为种子销售的播种种子、其他豆类、下游加工或交接后运输。 |  |
| `validate_processes` | graph | 要求田间生产、采收、脱粒/清理及分级；含水率超过目标或实际发生干燥/通风时要求干燥。 | `fao-grain-postharvest`; `fao-predrying` |
| `validate_route_delta` | alternatives | 说明母活动及实际拓扑/清单/计算/数据/验证变化；共存路线须有份额，不合格地合并互斥路线不予通过。 |  |
| `validate_mode_indexing` | cycles/lots/runs | 将投入、产出、清理及换线关联周期/批次/期间，防止共享运行负担双计。 |  |
| `validate_nutrient_cardinality` | each process | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_output_states` | all output nodes | 每种合格、降级、返工、有价值残体、还田残体、废物及损失须有唯一类别和交接；拒收物不计合格产出。 |  |
| `validate_allocation` | multi-output nodes | 要求明确单产出/经济分配决定、价值及期间；价值证据薄弱时要求质量敏感性，防止重复交接。 |  |
| `validate_moisture` | drying/final grain | 要求成对质量/水分、干物质保全、独立移出水及未解释损失调查。 | `fao-grain-drying` |
| `validate_rework` | rejects | 将返工指向清理或分级，承接既有负担，循环能耗只计一次并记录最终去向。 |  |
| `validate_ranges` | Flow Cards | 逐条检查已提供范围的上下限、单位、基准、证据及双语一致性。任何强制界限均须有相容定量证据；无支持界限时保留实测数量并明确报告范围筛查不可用，不得编造范围或宣称该项检查完整。调查偏离，不以范围覆盖实测值。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground production dataset for mature dry *Vicia faba* grain at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness review |
| allowed_use | farm-gate footprints and supply-chain models for unprocessed dry broad/faba/horse bean grain with declared moisture, grade and route |
| excluded_use | green beans; planting seed; other pulses; processed ingredients; undisclosed generic pulse proxy |
| required_metadata | identity; geography; crop cycle; season route; irrigation; prior crop; harvest/threshing/drying/grading; moisture; grade; market; route shares; destinations; allocation; hand-off |
| required_quality_disclosure | age/coverage; primary share; calibration; substitutions; range exceptions; mass balance; residue destinations; emission method; allocation/sensitivity; unresolved identities |
| update_trigger | material change in cultivar, route, input regime, yield/climate, technology, moisture/grade, destination/value, allocation/emission method, or data older than five years |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `vce-faba-bean-2024` | `extension_guidance` | Virginia Cooperative Extension, *Faba Bean: A Multipurpose Specialty Crop for the Mid-Atlantic USA*, SPES-590, https://www.pubs.ext.vt.edu/SPES/spes-590/spes-590.html | identity, green/dry distinction, cool-season production, residue return |
| `fao-grain-postharvest` | `official_guidance` | FAO, *Agricultural engineering in development: Grain and post-harvest systems*, https://www.fao.org/4/T0522E/T0522E03.htm | harvest, pre-drying, threshing, cleaning, drying and about 14% storage moisture |
| `fao-predrying` | `official_guidance` | FAO, *Agricultural engineering in development: Pre-drying*, https://www.fao.org/4/T0522E/T0522E06.htm | pre-drying boundary, route conditions and field-delay losses |
| `fao-grain-drying` | `handbook` | FAO, *Farm structures in tropical climates: Grain drying*, https://www.fao.org/4/s1250e/S1250E0u.htm | wet-basis moisture, dry-matter conversion and drying controls |
| `feedipedia-faba-bean` | `handbook` | Feedipedia (INRAE, CIRAD, AFZ and FAO), *Faba bean (Vicia faba)*, https://feedipedia.review.fao.org/node/4926 | identity, maturity, 1.1–9 t/ha yield span, shattering/splitting and 12% storage moisture |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, *2019 Refinement, Volume 4, Chapter 11*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil emissions, N-fixing pulse residue N and destination double-counting prevention |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
