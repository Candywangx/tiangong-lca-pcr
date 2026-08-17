---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-pigs-fresh-chilled-or-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 猪可食用内脏，鲜、冷藏或冷冻

## 1. 范围与适用性

本 PCR 适用于在报告设施大门处放行的一种身份明确的可食用猪器官前景数据包，且市场状态必须恰好声明为鲜、冷藏或冷冻中的一种。参考产品不得混合多种器官，也不得混合多种状态。

前景路线或者从报告设施一体化屠宰时的合格活猪开始，或者从一种外购已回收猪器官开始，并链接其上游屠宰数据集。范围覆盖器官检验与整理、恰好一条状态调理分支、包装、适合声明状态的储存、放行、清洗消毒以及条件性场内废水管理。猪养殖、入厂运输、配送、零售、烹饪、消费与寿命终止位于本前景边界之外。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-pigs-fresh-chilled-or-frozen |
| classification_refs | CPC 3.0 21153 — 猪可食用内脏，鲜、冷藏或冷冻 |
| covered_products | 一种在适用司法辖区合法可食用的猪器官，声明为猪肝、猪心、猪肾、猪舌、猪胃、猪小肠、猪大肠、猪肺或猪脾，并处于鲜、冷藏或冷冻中恰好一种市场状态。 |
| excluded_products | 作为参考产品的猪肉与猪胴体；不可食用或判废器官；其他物种器官；混合器官参考产品；盐渍、干燥、熏制、加工或保藏器官产品；包装。 |
| representative_product | 一种声明可食用猪器官在一种声明市场状态下的 1 kg 净合格质量，不含包装。 |
| production_route | 一体化屠宰与器官回收，或外购一种已回收器官并链接上游屠宰数据集；必须声明恰好一个路线起点。 |
| market_state | 设施大门放行时为鲜、冷藏或冷冻中恰好一种；必须声明适用温度—时间与卫生规格。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一种身份明确、适合声明市场状态与预期食品用途的可食用猪器官。 |
| How much | 设施大门放行时 1 kg 净合格产品质量，不含全部包装。 |
| How well | 批次满足声明的器官身份、合法可食用状态、产品形态、卫生放行准则、温度—时间规格与包装规格。 |
| How long or cycle | 一个生产批次通过设施大门放行；仅包含达到声明鲜、冷藏或冷冻放行条件之前的保鲜。 |
| reference_flow_link | 过程 `packaging_storage_and_release` 的输出行 `packaging_storage_and_release_reference_product`。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格产品，不含包装 |
| 参考产品流 | Edible offal of pigs, fresh, chilled or frozen `17a80845-90d9-42a4-8a70-fee47fe2b380` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 确切猪器官身份；合法可食用状态及司法辖区；鲜、冷藏或冷冻状态；产品形态与修整状态；放行温度与时间规格；净质量与包装排除；包装物料清单；一体化屠宰或外购器官路线起点；设施与地理；报告期；适用时的屠宰分配方法；安装制冷剂身份；废水去向与处理状态 |

构建前景数据包时，全部必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。限定信息缺失时，参考流实施不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用放行时净合格产品质量；保持 kg 参考单位，不得将参考对象换算为件数。 |
| `packaging_exclusion` | reference-product net mass | Mass | kg | 包装质量应单独计量或计算，并从 1 kg 参考量中排除。 |
| `organ_mass_separation` | organ input, output, co-product and reject | Mass | kg | 按确切器官身份和批次分别保持计量与质量平衡。 |
| `state_mass_separation` | fresh, chilled and frozen product | Mass | kg | 按恰好一种声明市场状态分别保持计量，不得汇总状态分支。 |
| `water_volume` | mains, ground and surface water | Volume | m3 | 保留来源特定的计量体积；任何质量换算均须声明密度与条件，且不得改变水源身份。 |
| `energy_carrier_units` | electricity and thermal carriers | Energy | kWh for electricity; MJ for steam, hot water and natural gas | 保留原始仪表读数与换算因子，且不得在一个清单行中合并不同载能品。 |
| `fuel_mass` | diesel and liquefied petroleum gas | Mass | kg | 保留燃料身份与计量质量；若换算为能量，应披露实测或供应商低位热值。 |
| `refrigerant_mass` | refrigerant make-up, recovery and release | Mass | kg | 逐种确切制冷剂物质分别平衡，并对制冷剂混合物保留供应商组成。 |
| `emission_mass` | single air or water pollutant | Mass | kg | 将匹配的监测结果换算为污染物质量，不得合并化学身份或环境隔室。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 恰好一种：一体化屠宰路线从报告设施的合格活猪开始；外购器官路线从报告设施的一种身份明确的已回收猪器官开始。 |
| starting_condition_role | 首个前景产品投入；其上游生产与入厂运输由链接数据集表示，而不在本数据包内重新展开。 |
| product_classification_scope | 放行时属于 CPC 3.0 21153；每个数据集限制为一种确切猪器官及鲜、冷藏或冷冻中一种确切状态。 |
| recursive_input_rule | 当进入产品已属于本类别时，将其确切器官与状态作为一个产品投入记录并链接独立上游数据集；不得在接收数据包中递归重建其上游前景过程。 |
| upstream_dataset_requirement | 一体化路线：链接猪生产与入厂运输数据集。外购器官路线：链接屠宰与器官回收数据集，并披露器官特定分配、地理、期间与质量。 |
| disclosure | 声明路线起点、器官身份、状态分支、设施边界、纳入的处理、共享服务键、上游链接、排除项及任何例外遗漏。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_start` | route start | 恰好声明一个前景起点：一体化屠宰路线采用合格活猪，外购器官路线采用一种身份明确的已回收猪器官；不得合并路线起点。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `boundary_integrated_slaughter` | integrated slaughter | 选择一体化屠宰时，应纳入报告边界内的接收、宰前控制、屠宰、放血、去内脏、器官分流、所有具名共产品、判废物、用水、能源、直接排放与废水。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `boundary_purchased_organ` | purchased recovered organ | 外购已回收器官时，应排除两个一体化屠宰前景过程，并要求独立上游屠宰数据集披露器官特定分配与质量。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `boundary_exact_organ` | product identity | 每个数据集仅选择一种确切猪器官身份；不得合并器官质量、价格、判废物或过程记录。 | `unsd-cpc-21153`；`eu-pef-2021-2279` |
| `boundary_exact_state` | market state | 鲜、冷藏或冷冻中恰好选择一种；仅纳入相应状态调理分支，并将其温度—时间规格保持至放行。 | `unsd-cpc-21153`；`eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `boundary_upstream` | upstream exclusions | 猪养殖、饲料、农场粪污管理与入厂运输保持为上游，通过链接的上游数据集表示，不得在本前景数据包内重新展开。 | `eu-pef-2021-2279` |
| `boundary_downstream` | downstream exclusions | 排除报告设施大门之后的配送、零售、烹饪、消费以及包装或产品寿命终止。 | `eu-pef-2021-2279` |
| `boundary_packaging` | packaging | 将放行前使用的每个一次、二次和三次包装组件分别作为产品投入与废物输出纳入，但包装质量不得计入 1 kg 参考量。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `boundary_wastewater` | sanitation and wastewater | 前景各过程均纳入清洗和消毒；场内废水处理仅在其位于报告边界内时纳入，否则逐项报告送往场外的废水流及去向。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `boundary_inventory_completeness` | LCI completeness | 将跨越所选边界的全部材料、能源、产品、共产品、废物和基本交换逐一记录为原子行；适用行不得静默省略，应披露经核验的零值或有记录的排除。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pig_receipt_and_ante_mortem` | 生猪接收与宰前控制 | `conditional` | 仅当报告设施内一体化屠宰时纳入；否则从一种外购已回收器官开始。 | 屠宰前接收、验收与隔离的前景过程。 | 转入屠宰的合格活猪质量 |
| `slaughter_and_organ_recovery` | 屠宰与器官回收 | `conditional` | 仅在一体化屠宰路线中纳入，并采用声明的屠宰分配。 | 屠宰、放血、烫毛或皮处理、去内脏及各器官分流的前景过程。 | 转入整理的各类已回收猪器官质量 |
| `edible_organ_preparation` | 可食用器官整理 | `required` | 对声明的一种器官始终纳入；外购器官路线从此过程进入。 | 检验、修整、必要时排空、清洗及卫生整理的前景过程。 | 声明的一种器官的整理后质量 |
| `fresh_state_conditioning` | 鲜品状态调理 | `conditional` | 当且仅当声明市场状态为鲜品时纳入。 | 不进行冷藏或冻结的鲜品沥水、分级与短时操作前景过程。 | 从鲜品调理放行的声明器官质量 |
| `chilled_state_conditioning` | 冷藏状态调理 | `conditional` | 当且仅当声明市场状态为冷藏品时纳入。 | 声明器官冷却及温控暂存的前景过程。 | 按冷藏规格放行的声明器官质量 |
| `frozen_state_conditioning` | 冷冻状态调理 | `conditional` | 当且仅当声明市场状态为冷冻品时纳入。 | 声明器官冻结及冻藏的前景过程。 | 按冷冻规格放行的声明器官质量 |
| `packaging_storage_and_release` | 包装、状态控制储存与放行 | `required` | 始终纳入；仅接收鲜、冷藏或冷冻三条分支中恰好一条的一种器官。 | 一次与二次包装、适合声明状态的储存及参考产品放行前景过程。 | 1 kg 净合格参考产品，不含包装 |
| `sanitation_and_wastewater_management` | 清洗消毒与废水管理 | `required` | 始终纳入清洗消毒；仅在处理位于报告边界内时纳入场内处理行。 | 就地清洗或开放式厂房清洗、消毒、排水分流及条件性场内处理前景过程。 | 归属于 1 kg 参考产品的清洗活动与废水负荷 |

### 过程：生猪接收与宰前控制（`pig_receipt_and_ante_mortem`）

#### 输入

##### 产品流

###### 活猪投入（`pig_receipt_and_ante_mortem_live_pig`）

记录在报告边界验收的活猪计量质量；养殖和入厂运输保持为上游。

- 选定流：Live pig
- 流属性/单位：Mass / kg
- 数量规则：声明生产批次接收的活猪计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_animal_receipt_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的自来饮用水（`pig_receipt_and_ante_mortem_potable_mains_water`）

仅记录作为单独计量产品投入输送至生猪接收与宰前控制的自来饮用水。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的自来水计量体积；不得采用类别默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的电网电力（`pig_receipt_and_ante_mortem_grid_electricity`）

记录跨越设施边界并专用于生猪接收与宰前控制的电网电力；与所有其他载能品分别记录。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本阶段的电网电力计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_electricity_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的外购蒸汽（`pig_receipt_and_ante_mortem_purchased_steam`）

记录跨越设施边界并专用于生猪接收与宰前控制的外购蒸汽；与所有其他载能品分别记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购蒸汽计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的外购热水（`pig_receipt_and_ante_mortem_purchased_hot_water`）

记录跨越设施边界并专用于生猪接收与宰前控制的外购热水；与所有其他载能品分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购热水计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的天然气（`pig_receipt_and_ante_mortem_natural_gas`）

记录跨越设施边界并专用于生猪接收与宰前控制的天然气；与所有其他载能品分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的天然气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的柴油（`pig_receipt_and_ante_mortem_diesel_fuel`）

记录跨越设施边界并专用于生猪接收与宰前控制的柴油；与所有其他载能品分别记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的柴油计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的液化石油气（`pig_receipt_and_ante_mortem_liquefied_petroleum_gas`）

记录跨越设施边界并专用于生猪接收与宰前控制的液化石油气；与所有其他载能品分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的液化石油气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

_本方向与流类型未定义原子交换。_

##### 基本流

###### 生猪接收与宰前控制的地下水取水（`pig_receipt_and_ante_mortem_water_ground`）

记录为生猪接收与宰前控制直接跨越基本流边界的地下水取水，不得与自来水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地下水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的地表水取水（`pig_receipt_and_ante_mortem_water_surface`）

记录为生猪接收与宰前控制直接跨越基本流边界的地表水取水，不得与自来水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地表水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 合格活猪转移（`pig_receipt_and_ante_mortem_accepted_live_pig`）

记录通过宰前控制并转入一体化屠宰过程的生猪。

- 选定流：Accepted live pig
- 流属性/单位：Mass / kg
- 数量规则：依据个体或批次接收及拒收记录，按 calc_receipt_mass_balance 计算合格质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按合格活猪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_animal_receipt_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

###### 接收时死亡猪（`pig_receipt_and_ante_mortem_dead_pig_at_reception`）

将离开接收过程的接收时死亡猪作为一个称量且去向明确的废物流记录。

- 选定流：Dead pig at reception
- 流属性/单位：Mass / kg
- 数量规则：声明批次及记录去向下的接收时死亡猪计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_receipt_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废活猪（`pig_receipt_and_ante_mortem_condemned_live_pig`）

将离开接收过程的判废活猪作为一个称量且去向明确的废物流记录。

- 选定流：Condemned live pig
- 流属性/单位：Mass / kg
- 数量规则：声明批次及记录去向下的判废活猪计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_receipt_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 接收阶段猪粪（`pig_receipt_and_ante_mortem_pig_manure`）

将离开接收过程的接收阶段猪粪作为一个称量且去向明确的废物流记录。

- 选定流：Pig manure
- 流属性/单位：Mass / kg
- 数量规则：声明批次及记录去向下的接收阶段猪粪计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_receipt_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 接收阶段污染稻草垫料（`pig_receipt_and_ante_mortem_soiled_straw_bedding`）

将离开接收过程的接收阶段污染稻草垫料作为一个称量且去向明确的废物流记录。

- 选定流：Soiled straw bedding
- 流属性/单位：Mass / kg
- 数量规则：声明批次及记录去向下的接收阶段污染稻草垫料计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_receipt_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 基本流

###### 生猪接收与宰前控制的直接化石二氧化碳排放（`pig_receipt_and_ante_mortem_carbon_dioxide_fossil_air`）

仅记录由场内燃烧产生并分配至生猪接收与宰前控制的直接化石二氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的直接一氧化碳排放（`pig_receipt_and_ante_mortem_carbon_monoxide_air`）

仅记录由场内燃烧产生并分配至生猪接收与宰前控制的直接一氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的直接化石甲烷排放（`pig_receipt_and_ante_mortem_methane_fossil_air`）

仅记录由场内燃烧产生并分配至生猪接收与宰前控制的直接化石甲烷排放；排除能源供应上游排放。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的直接氧化亚氮排放（`pig_receipt_and_ante_mortem_nitrous_oxide_air`）

仅记录由场内燃烧产生并分配至生猪接收与宰前控制的直接氧化亚氮排放；排除能源供应上游排放。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的直接一氧化氮排放（`pig_receipt_and_ante_mortem_nitric_oxide_air`）

仅记录由场内燃烧产生并分配至生猪接收与宰前控制的直接一氧化氮排放；排除能源供应上游排放。

- 选定流：Nitric oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的直接二氧化氮排放（`pig_receipt_and_ante_mortem_nitrogen_dioxide_air`）

仅记录由场内燃烧产生并分配至生猪接收与宰前控制的直接二氧化氮排放；排除能源供应上游排放。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的直接二氧化硫排放（`pig_receipt_and_ante_mortem_sulfur_dioxide_air`）

仅记录由场内燃烧产生并分配至生猪接收与宰前控制的直接二氧化硫排放；排除能源供应上游排放。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的直接小于 2.5 微米颗粒物排放（`pig_receipt_and_ante_mortem_pm_below_2_5_air`）

仅记录由场内燃烧产生并分配至生猪接收与宰前控制的直接小于 2.5 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪接收与宰前控制的直接2.5 至 10 微米颗粒物排放（`pig_receipt_and_ante_mortem_pm_2_5_to_10_air`）

仅记录由场内燃烧产生并分配至生猪接收与宰前控制的直接2.5 至 10 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pig_receipt_and_ante_mortem_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

### 过程：屠宰与器官回收（`slaughter_and_organ_recovery`）

#### 输入

##### 产品流

###### 进入屠宰的合格活猪（`slaughter_and_organ_recovery_accepted_live_pig`）

记录宰前验收后的转移量，不得重复上游活猪投入。

- 选定流：Accepted live pig
- 流属性/单位：Mass / kg
- 数量规则：由 pig_receipt_and_ante_mortem 转入的合格质量计算值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的自来饮用水（`slaughter_and_organ_recovery_potable_mains_water`）

仅记录作为单独计量产品投入输送至屠宰与器官回收的自来饮用水。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的自来水计量体积；不得采用类别默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的电网电力（`slaughter_and_organ_recovery_grid_electricity`）

记录跨越设施边界并专用于屠宰与器官回收的电网电力；与所有其他载能品分别记录。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本阶段的电网电力计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_electricity_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的外购蒸汽（`slaughter_and_organ_recovery_purchased_steam`）

记录跨越设施边界并专用于屠宰与器官回收的外购蒸汽；与所有其他载能品分别记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购蒸汽计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的外购热水（`slaughter_and_organ_recovery_purchased_hot_water`）

记录跨越设施边界并专用于屠宰与器官回收的外购热水；与所有其他载能品分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购热水计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的天然气（`slaughter_and_organ_recovery_natural_gas`）

记录跨越设施边界并专用于屠宰与器官回收的天然气；与所有其他载能品分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的天然气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的柴油（`slaughter_and_organ_recovery_diesel_fuel`）

记录跨越设施边界并专用于屠宰与器官回收的柴油；与所有其他载能品分别记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的柴油计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的液化石油气（`slaughter_and_organ_recovery_liquefied_petroleum_gas`）

记录跨越设施边界并专用于屠宰与器官回收的液化石油气；与所有其他载能品分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的液化石油气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

_本方向与流类型未定义原子交换。_

##### 基本流

###### 屠宰与器官回收的地下水取水（`slaughter_and_organ_recovery_water_ground`）

记录为屠宰与器官回收直接跨越基本流边界的地下水取水，不得与自来水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地下水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的地表水取水（`slaughter_and_organ_recovery_water_surface`）

记录为屠宰与器官回收直接跨越基本流边界的地表水取水，不得与自来水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地表水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 回收猪肝（`slaughter_and_organ_recovery_recovered_liver`）

记录回收并单独分流、进入整理前的可食用猪肝共产品。

- 选定流：Recovered pig liver
- 流属性/单位：Mass / kg
- 数量规则：依据器官称量记录，按 calc_slaughter_mass_balance 计算回收猪肝质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 回收猪心（`slaughter_and_organ_recovery_recovered_heart`）

记录回收并单独分流、进入整理前的可食用猪心共产品。

- 选定流：Recovered pig heart
- 流属性/单位：Mass / kg
- 数量规则：依据器官称量记录，按 calc_slaughter_mass_balance 计算回收猪心质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 回收猪肾（`slaughter_and_organ_recovery_recovered_kidney`）

记录回收并单独分流、进入整理前的可食用猪肾共产品。

- 选定流：Recovered pig kidney
- 流属性/单位：Mass / kg
- 数量规则：依据器官称量记录，按 calc_slaughter_mass_balance 计算回收猪肾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 回收猪舌（`slaughter_and_organ_recovery_recovered_tongue`）

记录回收并单独分流、进入整理前的可食用猪舌共产品。

- 选定流：Recovered pig tongue
- 流属性/单位：Mass / kg
- 数量规则：依据器官称量记录，按 calc_slaughter_mass_balance 计算回收猪舌质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 回收猪胃（`slaughter_and_organ_recovery_recovered_stomach`）

记录回收并单独分流、进入整理前的可食用猪胃共产品。

- 选定流：Recovered pig stomach
- 流属性/单位：Mass / kg
- 数量规则：依据器官称量记录，按 calc_slaughter_mass_balance 计算回收猪胃质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 回收猪小肠（`slaughter_and_organ_recovery_recovered_small_intestine`）

记录回收并单独分流、进入整理前的可食用猪小肠共产品。

- 选定流：Recovered pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：依据器官称量记录，按 calc_slaughter_mass_balance 计算回收猪小肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 回收猪大肠（`slaughter_and_organ_recovery_recovered_large_intestine`）

记录回收并单独分流、进入整理前的可食用猪大肠共产品。

- 选定流：Recovered pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：依据器官称量记录，按 calc_slaughter_mass_balance 计算回收猪大肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 回收猪肺（`slaughter_and_organ_recovery_recovered_lung`）

记录回收并单独分流、进入整理前的可食用猪肺共产品。

- 选定流：Recovered pig lung
- 流属性/单位：Mass / kg
- 数量规则：依据器官称量记录，按 calc_slaughter_mass_balance 计算回收猪肺质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 回收猪脾（`slaughter_and_organ_recovery_recovered_spleen`）

记录回收并单独分流、进入整理前的可食用猪脾共产品。

- 选定流：Recovered pig spleen
- 流属性/单位：Mass / kg
- 数量规则：依据器官称量记录，按 calc_slaughter_mass_balance 计算回收猪脾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪胴体（`slaughter_and_organ_recovery_pig_carcass`）

仅当猪胴体离开屠宰并有记录的有益用途、且参与声明分配时记录。

- 选定流：Pig carcass
- 流属性/单位：Mass / kg
- 数量规则：依据称量记录按 calc_slaughter_mass_balance 计算共产品质量；不得设置默认分配份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 作为产品回收的猪血（`slaughter_and_organ_recovery_pig_blood_for_recovery`）

仅当作为产品回收的猪血离开屠宰并有记录的有益用途、且参与声明分配时记录。

- 选定流：Pig blood for recovery
- 流属性/单位：Mass / kg
- 数量规则：依据称量记录按 calc_slaughter_mass_balance 计算共产品质量；不得设置默认分配份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 作为产品回收的猪皮（`slaughter_and_organ_recovery_pig_skin_for_recovery`）

仅当作为产品回收的猪皮离开屠宰并有记录的有益用途、且参与声明分配时记录。

- 选定流：Pig skin for recovery
- 流属性/单位：Mass / kg
- 数量规则：依据称量记录按 calc_slaughter_mass_balance 计算共产品质量；不得设置默认分配份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 作为产品回收的猪鬃（`slaughter_and_organ_recovery_pig_bristles_for_recovery`）

仅当作为产品回收的猪鬃离开屠宰并有记录的有益用途、且参与声明分配时记录。

- 选定流：Pig bristles for recovery
- 流属性/单位：Mass / kg
- 数量规则：依据称量记录按 calc_slaughter_mass_balance 计算共产品质量；不得设置默认分配份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 作为产品回收的猪蹄（`slaughter_and_organ_recovery_pig_feet_for_recovery`）

仅当作为产品回收的猪蹄离开屠宰并有记录的有益用途、且参与声明分配时记录。

- 选定流：Pig feet for recovery
- 流属性/单位：Mass / kg
- 数量规则：依据称量记录按 calc_slaughter_mass_balance 计算共产品质量；不得设置默认分配份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 去舌后的猪头（`slaughter_and_organ_recovery_pig_head_after_tongue_removal`）

仅当去舌后的猪头离开屠宰并有记录的有益用途、且参与声明分配时记录。

- 选定流：Pig head after tongue removal
- 流属性/单位：Mass / kg
- 数量规则：依据称量记录按 calc_slaughter_mass_balance 计算共产品质量；不得设置默认分配份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 作为产品回收的猪腹脂（`slaughter_and_organ_recovery_pig_abdominal_fat_for_recovery`）

仅当作为产品回收的猪腹脂离开屠宰并有记录的有益用途、且参与声明分配时记录。

- 选定流：Pig abdominal fat for recovery
- 流属性/单位：Mass / kg
- 数量规则：依据称量记录按 calc_slaughter_mass_balance 计算共产品质量；不得设置默认分配份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

###### 判废猪肝（`slaughter_and_organ_recovery_condemned_liver`）

将宰后检验中判定不可食用的猪肝作为独立废物流记录。

- 选定流：Condemned pig liver
- 流属性/单位：Mass / kg
- 数量规则：判废猪肝的计量质量及其记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废猪心（`slaughter_and_organ_recovery_condemned_heart`）

将宰后检验中判定不可食用的猪心作为独立废物流记录。

- 选定流：Condemned pig heart
- 流属性/单位：Mass / kg
- 数量规则：判废猪心的计量质量及其记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废猪肾（`slaughter_and_organ_recovery_condemned_kidney`）

将宰后检验中判定不可食用的猪肾作为独立废物流记录。

- 选定流：Condemned pig kidney
- 流属性/单位：Mass / kg
- 数量规则：判废猪肾的计量质量及其记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废猪舌（`slaughter_and_organ_recovery_condemned_tongue`）

将宰后检验中判定不可食用的猪舌作为独立废物流记录。

- 选定流：Condemned pig tongue
- 流属性/单位：Mass / kg
- 数量规则：判废猪舌的计量质量及其记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废猪胃（`slaughter_and_organ_recovery_condemned_stomach`）

将宰后检验中判定不可食用的猪胃作为独立废物流记录。

- 选定流：Condemned pig stomach
- 流属性/单位：Mass / kg
- 数量规则：判废猪胃的计量质量及其记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废猪小肠（`slaughter_and_organ_recovery_condemned_small_intestine`）

将宰后检验中判定不可食用的猪小肠作为独立废物流记录。

- 选定流：Condemned pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：判废猪小肠的计量质量及其记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废猪大肠（`slaughter_and_organ_recovery_condemned_large_intestine`）

将宰后检验中判定不可食用的猪大肠作为独立废物流记录。

- 选定流：Condemned pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：判废猪大肠的计量质量及其记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废猪肺（`slaughter_and_organ_recovery_condemned_lung`）

将宰后检验中判定不可食用的猪肺作为独立废物流记录。

- 选定流：Condemned pig lung
- 流属性/单位：Mass / kg
- 数量规则：判废猪肺的计量质量及其记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废猪脾（`slaughter_and_organ_recovery_condemned_spleen`）

将宰后检验中判定不可食用的猪脾作为独立废物流记录。

- 选定流：Condemned pig spleen
- 流属性/单位：Mass / kg
- 数量规则：判废猪脾的计量质量及其记录处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按合格活猪投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪胃内容物（`slaughter_and_organ_recovery_pig_stomach_contents`）

将离开屠宰的猪胃内容物作为单独流记录，并记录其去向与处理路线。

- 选定流：Pig stomach contents
- 流属性/单位：Mass / kg
- 数量规则：声明批次猪胃内容物的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪小肠内容物（`slaughter_and_organ_recovery_pig_small_intestinal_contents`）

将离开屠宰的猪小肠内容物作为单独流记录，并记录其去向与处理路线。

- 选定流：Pig small-intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：声明批次猪小肠内容物的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪大肠内容物（`slaughter_and_organ_recovery_pig_large_intestinal_contents`）

将离开屠宰的猪大肠内容物作为单独流记录，并记录其去向与处理路线。

- 选定流：Pig large-intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：声明批次猪大肠内容物的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废猪胴体（`slaughter_and_organ_recovery_condemned_pig_carcass`）

将离开屠宰的判废猪胴体作为单独流记录，并记录其去向与处理路线。

- 选定流：Condemned pig carcass
- 流属性/单位：Mass / kg
- 数量规则：声明批次判废猪胴体的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废弃猪血（`slaughter_and_organ_recovery_discarded_pig_blood`）

将离开屠宰的废弃猪血作为单独流记录，并记录其去向与处理路线。

- 选定流：Discarded pig blood
- 流属性/单位：Mass / kg
- 数量规则：声明批次废弃猪血的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废弃猪皮（`slaughter_and_organ_recovery_discarded_pig_skin`）

将离开屠宰的废弃猪皮作为单独流记录，并记录其去向与处理路线。

- 选定流：Discarded pig skin
- 流属性/单位：Mass / kg
- 数量规则：声明批次废弃猪皮的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废弃猪鬃（`slaughter_and_organ_recovery_discarded_pig_bristles`）

将离开屠宰的废弃猪鬃作为单独流记录，并记录其去向与处理路线。

- 选定流：Discarded pig bristles
- 流属性/单位：Mass / kg
- 数量规则：声明批次废弃猪鬃的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废弃猪蹄（`slaughter_and_organ_recovery_discarded_pig_feet`）

将离开屠宰的废弃猪蹄作为单独流记录，并记录其去向与处理路线。

- 选定流：Discarded pig feet
- 流属性/单位：Mass / kg
- 数量规则：声明批次废弃猪蹄的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废弃去舌猪头（`slaughter_and_organ_recovery_discarded_pig_head_after_tongue_removal`）

将离开屠宰的废弃去舌猪头作为单独流记录，并记录其去向与处理路线。

- 选定流：Discarded pig head after tongue removal
- 流属性/单位：Mass / kg
- 数量规则：声明批次废弃去舌猪头的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废弃猪腹脂（`slaughter_and_organ_recovery_discarded_pig_abdominal_fat`）

将离开屠宰的废弃猪腹脂作为单独流记录，并记录其去向与处理路线。

- 选定流：Discarded pig abdominal fat
- 流属性/单位：Mass / kg
- 数量规则：声明批次废弃猪腹脂的计量质量及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_slaughter_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生猪屠宰废水（`slaughter_and_organ_recovery_pig_slaughter_wastewater`）

将离开屠宰的生猪屠宰废水作为单独流记录，并记录其去向与处理路线。

- 选定流：Pig-slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：声明批次生猪屠宰废水的计量体积及记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_and_organ_recovery_wastewater_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 基本流

###### 屠宰与器官回收的直接化石二氧化碳排放（`slaughter_and_organ_recovery_carbon_dioxide_fossil_air`）

仅记录由场内燃烧产生并分配至屠宰与器官回收的直接化石二氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的直接一氧化碳排放（`slaughter_and_organ_recovery_carbon_monoxide_air`）

仅记录由场内燃烧产生并分配至屠宰与器官回收的直接一氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的直接化石甲烷排放（`slaughter_and_organ_recovery_methane_fossil_air`）

仅记录由场内燃烧产生并分配至屠宰与器官回收的直接化石甲烷排放；排除能源供应上游排放。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的直接氧化亚氮排放（`slaughter_and_organ_recovery_nitrous_oxide_air`）

仅记录由场内燃烧产生并分配至屠宰与器官回收的直接氧化亚氮排放；排除能源供应上游排放。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的直接一氧化氮排放（`slaughter_and_organ_recovery_nitric_oxide_air`）

仅记录由场内燃烧产生并分配至屠宰与器官回收的直接一氧化氮排放；排除能源供应上游排放。

- 选定流：Nitric oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的直接二氧化氮排放（`slaughter_and_organ_recovery_nitrogen_dioxide_air`）

仅记录由场内燃烧产生并分配至屠宰与器官回收的直接二氧化氮排放；排除能源供应上游排放。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的直接二氧化硫排放（`slaughter_and_organ_recovery_sulfur_dioxide_air`）

仅记录由场内燃烧产生并分配至屠宰与器官回收的直接二氧化硫排放；排除能源供应上游排放。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的直接小于 2.5 微米颗粒物排放（`slaughter_and_organ_recovery_pm_below_2_5_air`）

仅记录由场内燃烧产生并分配至屠宰与器官回收的直接小于 2.5 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 屠宰与器官回收的直接2.5 至 10 微米颗粒物排放（`slaughter_and_organ_recovery_pm_2_5_to_10_air`）

仅记录由场内燃烧产生并分配至屠宰与器官回收的直接2.5 至 10 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_and_organ_recovery_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

### 过程：可食用器官整理（`edible_organ_preparation`）

#### 输入

##### 产品流

###### 进入整理的回收猪肝（`edible_organ_preparation_recovered_liver`）

记录来自一体化屠宰或供应商数据集的一种声明回收猪肝；不得合并器官身份。

- 选定流：Recovered pig liver
- 流属性/单位：Mass / kg
- 数量规则：声明批次回收猪肝的接收计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入整理的回收猪心（`edible_organ_preparation_recovered_heart`）

记录来自一体化屠宰或供应商数据集的一种声明回收猪心；不得合并器官身份。

- 选定流：Recovered pig heart
- 流属性/单位：Mass / kg
- 数量规则：声明批次回收猪心的接收计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入整理的回收猪肾（`edible_organ_preparation_recovered_kidney`）

记录来自一体化屠宰或供应商数据集的一种声明回收猪肾；不得合并器官身份。

- 选定流：Recovered pig kidney
- 流属性/单位：Mass / kg
- 数量规则：声明批次回收猪肾的接收计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入整理的回收猪舌（`edible_organ_preparation_recovered_tongue`）

记录来自一体化屠宰或供应商数据集的一种声明回收猪舌；不得合并器官身份。

- 选定流：Recovered pig tongue
- 流属性/单位：Mass / kg
- 数量规则：声明批次回收猪舌的接收计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入整理的回收猪胃（`edible_organ_preparation_recovered_stomach`）

记录来自一体化屠宰或供应商数据集的一种声明回收猪胃；不得合并器官身份。

- 选定流：Recovered pig stomach
- 流属性/单位：Mass / kg
- 数量规则：声明批次回收猪胃的接收计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入整理的回收猪小肠（`edible_organ_preparation_recovered_small_intestine`）

记录来自一体化屠宰或供应商数据集的一种声明回收猪小肠；不得合并器官身份。

- 选定流：Recovered pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：声明批次回收猪小肠的接收计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入整理的回收猪大肠（`edible_organ_preparation_recovered_large_intestine`）

记录来自一体化屠宰或供应商数据集的一种声明回收猪大肠；不得合并器官身份。

- 选定流：Recovered pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：声明批次回收猪大肠的接收计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入整理的回收猪肺（`edible_organ_preparation_recovered_lung`）

记录来自一体化屠宰或供应商数据集的一种声明回收猪肺；不得合并器官身份。

- 选定流：Recovered pig lung
- 流属性/单位：Mass / kg
- 数量规则：声明批次回收猪肺的接收计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入整理的回收猪脾（`edible_organ_preparation_recovered_spleen`）

记录来自一体化屠宰或供应商数据集的一种声明回收猪脾；不得合并器官身份。

- 选定流：Recovered pig spleen
- 流属性/单位：Mass / kg
- 数量规则：声明批次回收猪脾的接收计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的自来饮用水（`edible_organ_preparation_potable_mains_water`）

仅记录作为单独计量产品投入输送至可食用器官整理的自来饮用水。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的自来水计量体积；不得采用类别默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的电网电力（`edible_organ_preparation_grid_electricity`）

记录跨越设施边界并专用于可食用器官整理的电网电力；与所有其他载能品分别记录。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本阶段的电网电力计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_electricity_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的外购蒸汽（`edible_organ_preparation_purchased_steam`）

记录跨越设施边界并专用于可食用器官整理的外购蒸汽；与所有其他载能品分别记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购蒸汽计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的外购热水（`edible_organ_preparation_purchased_hot_water`）

记录跨越设施边界并专用于可食用器官整理的外购热水；与所有其他载能品分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购热水计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的天然气（`edible_organ_preparation_natural_gas`）

记录跨越设施边界并专用于可食用器官整理的天然气；与所有其他载能品分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的天然气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的柴油（`edible_organ_preparation_diesel_fuel`）

记录跨越设施边界并专用于可食用器官整理的柴油；与所有其他载能品分别记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的柴油计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的液化石油气（`edible_organ_preparation_liquefied_petroleum_gas`）

记录跨越设施边界并专用于可食用器官整理的液化石油气；与所有其他载能品分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的液化石油气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

_本方向与流类型未定义原子交换。_

##### 基本流

###### 可食用器官整理的地下水取水（`edible_organ_preparation_water_ground`）

记录为可食用器官整理直接跨越基本流边界的地下水取水，不得与自来水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地下水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的地表水取水（`edible_organ_preparation_water_surface`）

记录为可食用器官整理直接跨越基本流边界的地表水取水，不得与自来水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地表水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 整理后猪肝（`edible_organ_preparation_prepared_liver`）

记录经卫生整理并转入恰好一条市场状态分支的猪肝。

- 选定流：Prepared pig liver
- 流属性/单位：Mass / kg
- 数量规则：依据接收与剔除质量记录，按 calc_organ_preparation_mass_balance 计算整理后猪肝质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 整理后猪心（`edible_organ_preparation_prepared_heart`）

记录经卫生整理并转入恰好一条市场状态分支的猪心。

- 选定流：Prepared pig heart
- 流属性/单位：Mass / kg
- 数量规则：依据接收与剔除质量记录，按 calc_organ_preparation_mass_balance 计算整理后猪心质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 整理后猪肾（`edible_organ_preparation_prepared_kidney`）

记录经卫生整理并转入恰好一条市场状态分支的猪肾。

- 选定流：Prepared pig kidney
- 流属性/单位：Mass / kg
- 数量规则：依据接收与剔除质量记录，按 calc_organ_preparation_mass_balance 计算整理后猪肾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 整理后猪舌（`edible_organ_preparation_prepared_tongue`）

记录经卫生整理并转入恰好一条市场状态分支的猪舌。

- 选定流：Prepared pig tongue
- 流属性/单位：Mass / kg
- 数量规则：依据接收与剔除质量记录，按 calc_organ_preparation_mass_balance 计算整理后猪舌质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 整理后猪胃（`edible_organ_preparation_prepared_stomach`）

记录经卫生整理并转入恰好一条市场状态分支的猪胃。

- 选定流：Prepared pig stomach
- 流属性/单位：Mass / kg
- 数量规则：依据接收与剔除质量记录，按 calc_organ_preparation_mass_balance 计算整理后猪胃质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 整理后猪小肠（`edible_organ_preparation_prepared_small_intestine`）

记录经卫生整理并转入恰好一条市场状态分支的猪小肠。

- 选定流：Prepared pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：依据接收与剔除质量记录，按 calc_organ_preparation_mass_balance 计算整理后猪小肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 整理后猪大肠（`edible_organ_preparation_prepared_large_intestine`）

记录经卫生整理并转入恰好一条市场状态分支的猪大肠。

- 选定流：Prepared pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：依据接收与剔除质量记录，按 calc_organ_preparation_mass_balance 计算整理后猪大肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 整理后猪肺（`edible_organ_preparation_prepared_lung`）

记录经卫生整理并转入恰好一条市场状态分支的猪肺。

- 选定流：Prepared pig lung
- 流属性/单位：Mass / kg
- 数量规则：依据接收与剔除质量记录，按 calc_organ_preparation_mass_balance 计算整理后猪肺质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 整理后猪脾（`edible_organ_preparation_prepared_spleen`）

记录经卫生整理并转入恰好一条市场状态分支的猪脾。

- 选定流：Prepared pig spleen
- 流属性/单位：Mass / kg
- 数量规则：依据接收与剔除质量记录，按 calc_organ_preparation_mass_balance 计算整理后猪脾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_organ_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

###### 猪肝修整废物（`edible_organ_preparation_liver_trimming_waste`）

记录专门从猪肝去除的不可食用或判废修整物，并与其他器官分别记录。

- 选定流：Pig liver trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录猪肝修整废物的计量质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_preparation_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪心修整废物（`edible_organ_preparation_heart_trimming_waste`）

记录专门从猪心去除的不可食用或判废修整物，并与其他器官分别记录。

- 选定流：Pig heart trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录猪心修整废物的计量质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_preparation_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪肾修整废物（`edible_organ_preparation_kidney_trimming_waste`）

记录专门从猪肾去除的不可食用或判废修整物，并与其他器官分别记录。

- 选定流：Pig kidney trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录猪肾修整废物的计量质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_preparation_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪舌修整废物（`edible_organ_preparation_tongue_trimming_waste`）

记录专门从猪舌去除的不可食用或判废修整物，并与其他器官分别记录。

- 选定流：Pig tongue trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录猪舌修整废物的计量质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_preparation_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪胃修整废物（`edible_organ_preparation_stomach_trimming_waste`）

记录专门从猪胃去除的不可食用或判废修整物，并与其他器官分别记录。

- 选定流：Pig stomach trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录猪胃修整废物的计量质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_preparation_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪小肠修整废物（`edible_organ_preparation_small_intestine_trimming_waste`）

记录专门从猪小肠去除的不可食用或判废修整物，并与其他器官分别记录。

- 选定流：Pig small intestine trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录猪小肠修整废物的计量质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_preparation_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪大肠修整废物（`edible_organ_preparation_large_intestine_trimming_waste`）

记录专门从猪大肠去除的不可食用或判废修整物，并与其他器官分别记录。

- 选定流：Pig large intestine trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录猪大肠修整废物的计量质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_preparation_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪肺修整废物（`edible_organ_preparation_lung_trimming_waste`）

记录专门从猪肺去除的不可食用或判废修整物，并与其他器官分别记录。

- 选定流：Pig lung trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录猪肺修整废物的计量质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_preparation_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪脾修整废物（`edible_organ_preparation_spleen_trimming_waste`）

记录专门从猪脾去除的不可食用或判废修整物，并与其他器官分别记录。

- 选定流：Pig spleen trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录猪脾修整废物的计量质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按整理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_edible_organ_preparation_preparation_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪器官整理废水（`edible_organ_preparation_pig_organ_preparation_wastewater`）

记录由器官排空、清洗与整理专门产生、进入清洗系统汇集前的废水。

- 选定流：Pig-organ-preparation wastewater
- 流属性/单位：Volume / m3
- 数量规则：依据采集的清洗周期记录计量或按批次计算体积；不得采用默认用水因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_wastewater_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 基本流

###### 可食用器官整理的直接化石二氧化碳排放（`edible_organ_preparation_carbon_dioxide_fossil_air`）

仅记录由场内燃烧产生并分配至可食用器官整理的直接化石二氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的直接一氧化碳排放（`edible_organ_preparation_carbon_monoxide_air`）

仅记录由场内燃烧产生并分配至可食用器官整理的直接一氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的直接化石甲烷排放（`edible_organ_preparation_methane_fossil_air`）

仅记录由场内燃烧产生并分配至可食用器官整理的直接化石甲烷排放；排除能源供应上游排放。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的直接氧化亚氮排放（`edible_organ_preparation_nitrous_oxide_air`）

仅记录由场内燃烧产生并分配至可食用器官整理的直接氧化亚氮排放；排除能源供应上游排放。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的直接一氧化氮排放（`edible_organ_preparation_nitric_oxide_air`）

仅记录由场内燃烧产生并分配至可食用器官整理的直接一氧化氮排放；排除能源供应上游排放。

- 选定流：Nitric oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的直接二氧化氮排放（`edible_organ_preparation_nitrogen_dioxide_air`）

仅记录由场内燃烧产生并分配至可食用器官整理的直接二氧化氮排放；排除能源供应上游排放。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的直接二氧化硫排放（`edible_organ_preparation_sulfur_dioxide_air`）

仅记录由场内燃烧产生并分配至可食用器官整理的直接二氧化硫排放；排除能源供应上游排放。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的直接小于 2.5 微米颗粒物排放（`edible_organ_preparation_pm_below_2_5_air`）

仅记录由场内燃烧产生并分配至可食用器官整理的直接小于 2.5 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 可食用器官整理的直接2.5 至 10 微米颗粒物排放（`edible_organ_preparation_pm_2_5_to_10_air`）

仅记录由场内燃烧产生并分配至可食用器官整理的直接2.5 至 10 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_edible_organ_preparation_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

### 过程：鲜品状态调理（`fresh_state_conditioning`）

#### 输入

##### 产品流

###### 进入鲜品分支的整理后猪肝（`fresh_state_conditioning_prepared_liver`）

仅当鲜品为唯一声明市场状态时记录整理后猪肝；另两条状态分支必须不存在。

- 选定流：Prepared pig liver
- 流属性/单位：Mass / kg
- 数量规则：进入鲜品分支的整理后猪肝计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入鲜品分支的整理后猪心（`fresh_state_conditioning_prepared_heart`）

仅当鲜品为唯一声明市场状态时记录整理后猪心；另两条状态分支必须不存在。

- 选定流：Prepared pig heart
- 流属性/单位：Mass / kg
- 数量规则：进入鲜品分支的整理后猪心计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入鲜品分支的整理后猪肾（`fresh_state_conditioning_prepared_kidney`）

仅当鲜品为唯一声明市场状态时记录整理后猪肾；另两条状态分支必须不存在。

- 选定流：Prepared pig kidney
- 流属性/单位：Mass / kg
- 数量规则：进入鲜品分支的整理后猪肾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入鲜品分支的整理后猪舌（`fresh_state_conditioning_prepared_tongue`）

仅当鲜品为唯一声明市场状态时记录整理后猪舌；另两条状态分支必须不存在。

- 选定流：Prepared pig tongue
- 流属性/单位：Mass / kg
- 数量规则：进入鲜品分支的整理后猪舌计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入鲜品分支的整理后猪胃（`fresh_state_conditioning_prepared_stomach`）

仅当鲜品为唯一声明市场状态时记录整理后猪胃；另两条状态分支必须不存在。

- 选定流：Prepared pig stomach
- 流属性/单位：Mass / kg
- 数量规则：进入鲜品分支的整理后猪胃计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入鲜品分支的整理后猪小肠（`fresh_state_conditioning_prepared_small_intestine`）

仅当鲜品为唯一声明市场状态时记录整理后猪小肠；另两条状态分支必须不存在。

- 选定流：Prepared pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：进入鲜品分支的整理后猪小肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入鲜品分支的整理后猪大肠（`fresh_state_conditioning_prepared_large_intestine`）

仅当鲜品为唯一声明市场状态时记录整理后猪大肠；另两条状态分支必须不存在。

- 选定流：Prepared pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：进入鲜品分支的整理后猪大肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入鲜品分支的整理后猪肺（`fresh_state_conditioning_prepared_lung`）

仅当鲜品为唯一声明市场状态时记录整理后猪肺；另两条状态分支必须不存在。

- 选定流：Prepared pig lung
- 流属性/单位：Mass / kg
- 数量规则：进入鲜品分支的整理后猪肺计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入鲜品分支的整理后猪脾（`fresh_state_conditioning_prepared_spleen`）

仅当鲜品为唯一声明市场状态时记录整理后猪脾；另两条状态分支必须不存在。

- 选定流：Prepared pig spleen
- 流属性/单位：Mass / kg
- 数量规则：进入鲜品分支的整理后猪脾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的自来饮用水（`fresh_state_conditioning_potable_mains_water`）

仅记录作为单独计量产品投入输送至鲜品状态调理的自来饮用水。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的自来水计量体积；不得采用类别默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的电网电力（`fresh_state_conditioning_grid_electricity`）

记录跨越设施边界并专用于鲜品状态调理的电网电力；与所有其他载能品分别记录。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本阶段的电网电力计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_electricity_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的外购蒸汽（`fresh_state_conditioning_purchased_steam`）

记录跨越设施边界并专用于鲜品状态调理的外购蒸汽；与所有其他载能品分别记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购蒸汽计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的外购热水（`fresh_state_conditioning_purchased_hot_water`）

记录跨越设施边界并专用于鲜品状态调理的外购热水；与所有其他载能品分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购热水计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的天然气（`fresh_state_conditioning_natural_gas`）

记录跨越设施边界并专用于鲜品状态调理的天然气；与所有其他载能品分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的天然气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的柴油（`fresh_state_conditioning_diesel_fuel`）

记录跨越设施边界并专用于鲜品状态调理的柴油；与所有其他载能品分别记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的柴油计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的液化石油气（`fresh_state_conditioning_liquefied_petroleum_gas`）

记录跨越设施边界并专用于鲜品状态调理的液化石油气；与所有其他载能品分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的液化石油气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

_本方向与流类型未定义原子交换。_

##### 基本流

###### 鲜品状态调理的地下水取水（`fresh_state_conditioning_water_ground`）

记录为鲜品状态调理直接跨越基本流边界的地下水取水，不得与自来水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地下水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的地表水取水（`fresh_state_conditioning_water_surface`）

记录为鲜品状态调理直接跨越基本流边界的地表水取水，不得与自来水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地表水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 鲜品猪肝（`fresh_state_conditioning_fresh_liver`）

记录满足声明器官、温度、时间与卫生规格的鲜品猪肝。

- 选定流：Fresh pig liver
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格鲜品猪肝质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品猪心（`fresh_state_conditioning_fresh_heart`）

记录满足声明器官、温度、时间与卫生规格的鲜品猪心。

- 选定流：Fresh pig heart
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格鲜品猪心质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品猪肾（`fresh_state_conditioning_fresh_kidney`）

记录满足声明器官、温度、时间与卫生规格的鲜品猪肾。

- 选定流：Fresh pig kidney
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格鲜品猪肾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品猪舌（`fresh_state_conditioning_fresh_tongue`）

记录满足声明器官、温度、时间与卫生规格的鲜品猪舌。

- 选定流：Fresh pig tongue
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格鲜品猪舌质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品猪胃（`fresh_state_conditioning_fresh_stomach`）

记录满足声明器官、温度、时间与卫生规格的鲜品猪胃。

- 选定流：Fresh pig stomach
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格鲜品猪胃质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品猪小肠（`fresh_state_conditioning_fresh_small_intestine`）

记录满足声明器官、温度、时间与卫生规格的鲜品猪小肠。

- 选定流：Fresh pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格鲜品猪小肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品猪大肠（`fresh_state_conditioning_fresh_large_intestine`）

记录满足声明器官、温度、时间与卫生规格的鲜品猪大肠。

- 选定流：Fresh pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格鲜品猪大肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品猪肺（`fresh_state_conditioning_fresh_lung`）

记录满足声明器官、温度、时间与卫生规格的鲜品猪肺。

- 选定流：Fresh pig lung
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格鲜品猪肺质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品猪脾（`fresh_state_conditioning_fresh_spleen`）

记录满足声明器官、温度、时间与卫生规格的鲜品猪脾。

- 选定流：Fresh pig spleen
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格鲜品猪脾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

###### 判废鲜品猪肝（`fresh_state_conditioning_rejected_fresh_liver`）

将本分支判废的鲜品猪肝作为独立废物流并记录处理去向。

- 选定流：Rejected fresh pig liver
- 流属性/单位：Mass / kg
- 数量规则：判废鲜品猪肝的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废鲜品猪心（`fresh_state_conditioning_rejected_fresh_heart`）

将本分支判废的鲜品猪心作为独立废物流并记录处理去向。

- 选定流：Rejected fresh pig heart
- 流属性/单位：Mass / kg
- 数量规则：判废鲜品猪心的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废鲜品猪肾（`fresh_state_conditioning_rejected_fresh_kidney`）

将本分支判废的鲜品猪肾作为独立废物流并记录处理去向。

- 选定流：Rejected fresh pig kidney
- 流属性/单位：Mass / kg
- 数量规则：判废鲜品猪肾的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废鲜品猪舌（`fresh_state_conditioning_rejected_fresh_tongue`）

将本分支判废的鲜品猪舌作为独立废物流并记录处理去向。

- 选定流：Rejected fresh pig tongue
- 流属性/单位：Mass / kg
- 数量规则：判废鲜品猪舌的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废鲜品猪胃（`fresh_state_conditioning_rejected_fresh_stomach`）

将本分支判废的鲜品猪胃作为独立废物流并记录处理去向。

- 选定流：Rejected fresh pig stomach
- 流属性/单位：Mass / kg
- 数量规则：判废鲜品猪胃的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废鲜品猪小肠（`fresh_state_conditioning_rejected_fresh_small_intestine`）

将本分支判废的鲜品猪小肠作为独立废物流并记录处理去向。

- 选定流：Rejected fresh pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：判废鲜品猪小肠的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废鲜品猪大肠（`fresh_state_conditioning_rejected_fresh_large_intestine`）

将本分支判废的鲜品猪大肠作为独立废物流并记录处理去向。

- 选定流：Rejected fresh pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：判废鲜品猪大肠的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废鲜品猪肺（`fresh_state_conditioning_rejected_fresh_lung`）

将本分支判废的鲜品猪肺作为独立废物流并记录处理去向。

- 选定流：Rejected fresh pig lung
- 流属性/单位：Mass / kg
- 数量规则：判废鲜品猪肺的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废鲜品猪脾（`fresh_state_conditioning_rejected_fresh_spleen`）

将本分支判废的鲜品猪脾作为独立废物流并记录处理去向。

- 选定流：Rejected fresh pig spleen
- 流属性/单位：Mass / kg
- 数量规则：判废鲜品猪脾的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按鲜品器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品猪器官调理废水（`fresh_state_conditioning_fresh_pig_organ_conditioning_wastewater`）

仅记录鲜品调理分支产生、进入清洗系统汇集前的废水。

- 选定流：Fresh-pig-organ-conditioning wastewater
- 流属性/单位：Volume / m3
- 数量规则：依据操作记录计量或计算该分支特定废水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_wastewater_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 基本流

###### 鲜品状态调理的直接化石二氧化碳排放（`fresh_state_conditioning_carbon_dioxide_fossil_air`）

仅记录由场内燃烧产生并分配至鲜品状态调理的直接化石二氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的直接一氧化碳排放（`fresh_state_conditioning_carbon_monoxide_air`）

仅记录由场内燃烧产生并分配至鲜品状态调理的直接一氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的直接化石甲烷排放（`fresh_state_conditioning_methane_fossil_air`）

仅记录由场内燃烧产生并分配至鲜品状态调理的直接化石甲烷排放；排除能源供应上游排放。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的直接氧化亚氮排放（`fresh_state_conditioning_nitrous_oxide_air`）

仅记录由场内燃烧产生并分配至鲜品状态调理的直接氧化亚氮排放；排除能源供应上游排放。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的直接一氧化氮排放（`fresh_state_conditioning_nitric_oxide_air`）

仅记录由场内燃烧产生并分配至鲜品状态调理的直接一氧化氮排放；排除能源供应上游排放。

- 选定流：Nitric oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的直接二氧化氮排放（`fresh_state_conditioning_nitrogen_dioxide_air`）

仅记录由场内燃烧产生并分配至鲜品状态调理的直接二氧化氮排放；排除能源供应上游排放。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的直接二氧化硫排放（`fresh_state_conditioning_sulfur_dioxide_air`）

仅记录由场内燃烧产生并分配至鲜品状态调理的直接二氧化硫排放；排除能源供应上游排放。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的直接小于 2.5 微米颗粒物排放（`fresh_state_conditioning_pm_below_2_5_air`）

仅记录由场内燃烧产生并分配至鲜品状态调理的直接小于 2.5 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 鲜品状态调理的直接2.5 至 10 微米颗粒物排放（`fresh_state_conditioning_pm_2_5_to_10_air`）

仅记录由场内燃烧产生并分配至鲜品状态调理的直接2.5 至 10 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fresh_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

### 过程：冷藏状态调理（`chilled_state_conditioning`）

#### 输入

##### 产品流

###### 进入冷藏分支的整理后猪肝（`chilled_state_conditioning_prepared_liver`）

仅当冷藏为唯一声明市场状态时记录整理后猪肝；另两条状态分支必须不存在。

- 选定流：Prepared pig liver
- 流属性/单位：Mass / kg
- 数量规则：进入冷藏分支的整理后猪肝计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷藏分支的整理后猪心（`chilled_state_conditioning_prepared_heart`）

仅当冷藏为唯一声明市场状态时记录整理后猪心；另两条状态分支必须不存在。

- 选定流：Prepared pig heart
- 流属性/单位：Mass / kg
- 数量规则：进入冷藏分支的整理后猪心计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷藏分支的整理后猪肾（`chilled_state_conditioning_prepared_kidney`）

仅当冷藏为唯一声明市场状态时记录整理后猪肾；另两条状态分支必须不存在。

- 选定流：Prepared pig kidney
- 流属性/单位：Mass / kg
- 数量规则：进入冷藏分支的整理后猪肾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷藏分支的整理后猪舌（`chilled_state_conditioning_prepared_tongue`）

仅当冷藏为唯一声明市场状态时记录整理后猪舌；另两条状态分支必须不存在。

- 选定流：Prepared pig tongue
- 流属性/单位：Mass / kg
- 数量规则：进入冷藏分支的整理后猪舌计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷藏分支的整理后猪胃（`chilled_state_conditioning_prepared_stomach`）

仅当冷藏为唯一声明市场状态时记录整理后猪胃；另两条状态分支必须不存在。

- 选定流：Prepared pig stomach
- 流属性/单位：Mass / kg
- 数量规则：进入冷藏分支的整理后猪胃计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷藏分支的整理后猪小肠（`chilled_state_conditioning_prepared_small_intestine`）

仅当冷藏为唯一声明市场状态时记录整理后猪小肠；另两条状态分支必须不存在。

- 选定流：Prepared pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：进入冷藏分支的整理后猪小肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷藏分支的整理后猪大肠（`chilled_state_conditioning_prepared_large_intestine`）

仅当冷藏为唯一声明市场状态时记录整理后猪大肠；另两条状态分支必须不存在。

- 选定流：Prepared pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：进入冷藏分支的整理后猪大肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷藏分支的整理后猪肺（`chilled_state_conditioning_prepared_lung`）

仅当冷藏为唯一声明市场状态时记录整理后猪肺；另两条状态分支必须不存在。

- 选定流：Prepared pig lung
- 流属性/单位：Mass / kg
- 数量规则：进入冷藏分支的整理后猪肺计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷藏分支的整理后猪脾（`chilled_state_conditioning_prepared_spleen`）

仅当冷藏为唯一声明市场状态时记录整理后猪脾；另两条状态分支必须不存在。

- 选定流：Prepared pig spleen
- 流属性/单位：Mass / kg
- 数量规则：进入冷藏分支的整理后猪脾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的自来饮用水（`chilled_state_conditioning_potable_mains_water`）

仅记录作为单独计量产品投入输送至冷藏状态调理的自来饮用水。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的自来水计量体积；不得采用类别默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的电网电力（`chilled_state_conditioning_grid_electricity`）

记录跨越设施边界并专用于冷藏状态调理的电网电力；与所有其他载能品分别记录。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本阶段的电网电力计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_electricity_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的外购蒸汽（`chilled_state_conditioning_purchased_steam`）

记录跨越设施边界并专用于冷藏状态调理的外购蒸汽；与所有其他载能品分别记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购蒸汽计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的外购热水（`chilled_state_conditioning_purchased_hot_water`）

记录跨越设施边界并专用于冷藏状态调理的外购热水；与所有其他载能品分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购热水计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的天然气（`chilled_state_conditioning_natural_gas`）

记录跨越设施边界并专用于冷藏状态调理的天然气；与所有其他载能品分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的天然气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的柴油（`chilled_state_conditioning_diesel_fuel`）

记录跨越设施边界并专用于冷藏状态调理的柴油；与所有其他载能品分别记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的柴油计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的液化石油气（`chilled_state_conditioning_liquefied_petroleum_gas`）

记录跨越设施边界并专用于冷藏状态调理的液化石油气；与所有其他载能品分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的液化石油气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的氨制冷剂（R-717）补充（`chilled_state_conditioning_ammonia_r717_makeup`）

仅当本阶段安装该确切制冷剂时，根据维护与库存记录记载氨制冷剂（R-717）补充量。

- 选定流：Ammonia refrigerant (R-717)
- 流属性/单位：Mass / kg
- 数量规则：通过本阶段制冷剂平衡核对的氨制冷剂（R-717）补充与回收质量；不得采用默认泄漏率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的HFC-134a 制冷剂补充（`chilled_state_conditioning_hfc134a_makeup`）

仅当本阶段安装该确切制冷剂时，根据维护与库存记录记载HFC-134a 制冷剂补充量。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- 流属性/单位：Mass / kg
- 数量规则：通过本阶段制冷剂平衡核对的HFC-134a 制冷剂补充与回收质量；不得采用默认泄漏率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的R-404A 制冷剂混合物补充（`chilled_state_conditioning_r404a_makeup`）

仅当本阶段安装该确切制冷剂时，根据维护与库存记录记载R-404A 制冷剂混合物补充量。

- 选定流：R-404A refrigerant mixture
- 流属性/单位：Mass / kg
- 数量规则：通过本阶段制冷剂平衡核对的R-404A 制冷剂混合物补充与回收质量；不得采用默认泄漏率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

_本方向与流类型未定义原子交换。_

##### 基本流

###### 冷藏状态调理的地下水取水（`chilled_state_conditioning_water_ground`）

记录为冷藏状态调理直接跨越基本流边界的地下水取水，不得与自来水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地下水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的地表水取水（`chilled_state_conditioning_water_surface`）

记录为冷藏状态调理直接跨越基本流边界的地表水取水，不得与自来水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地表水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 冷藏猪肝（`chilled_state_conditioning_chilled_liver`）

记录满足声明器官、温度、时间与卫生规格的冷藏猪肝。

- 选定流：Chilled pig liver
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷藏猪肝质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏猪心（`chilled_state_conditioning_chilled_heart`）

记录满足声明器官、温度、时间与卫生规格的冷藏猪心。

- 选定流：Chilled pig heart
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷藏猪心质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏猪肾（`chilled_state_conditioning_chilled_kidney`）

记录满足声明器官、温度、时间与卫生规格的冷藏猪肾。

- 选定流：Chilled pig kidney
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷藏猪肾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏猪舌（`chilled_state_conditioning_chilled_tongue`）

记录满足声明器官、温度、时间与卫生规格的冷藏猪舌。

- 选定流：Chilled pig tongue
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷藏猪舌质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏猪胃（`chilled_state_conditioning_chilled_stomach`）

记录满足声明器官、温度、时间与卫生规格的冷藏猪胃。

- 选定流：Chilled pig stomach
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷藏猪胃质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏猪小肠（`chilled_state_conditioning_chilled_small_intestine`）

记录满足声明器官、温度、时间与卫生规格的冷藏猪小肠。

- 选定流：Chilled pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷藏猪小肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏猪大肠（`chilled_state_conditioning_chilled_large_intestine`）

记录满足声明器官、温度、时间与卫生规格的冷藏猪大肠。

- 选定流：Chilled pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷藏猪大肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏猪肺（`chilled_state_conditioning_chilled_lung`）

记录满足声明器官、温度、时间与卫生规格的冷藏猪肺。

- 选定流：Chilled pig lung
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷藏猪肺质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏猪脾（`chilled_state_conditioning_chilled_spleen`）

记录满足声明器官、温度、时间与卫生规格的冷藏猪脾。

- 选定流：Chilled pig spleen
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷藏猪脾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

###### 判废冷藏猪肝（`chilled_state_conditioning_rejected_chilled_liver`）

将本分支判废的冷藏猪肝作为独立废物流并记录处理去向。

- 选定流：Rejected chilled pig liver
- 流属性/单位：Mass / kg
- 数量规则：判废冷藏猪肝的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷藏猪心（`chilled_state_conditioning_rejected_chilled_heart`）

将本分支判废的冷藏猪心作为独立废物流并记录处理去向。

- 选定流：Rejected chilled pig heart
- 流属性/单位：Mass / kg
- 数量规则：判废冷藏猪心的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷藏猪肾（`chilled_state_conditioning_rejected_chilled_kidney`）

将本分支判废的冷藏猪肾作为独立废物流并记录处理去向。

- 选定流：Rejected chilled pig kidney
- 流属性/单位：Mass / kg
- 数量规则：判废冷藏猪肾的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷藏猪舌（`chilled_state_conditioning_rejected_chilled_tongue`）

将本分支判废的冷藏猪舌作为独立废物流并记录处理去向。

- 选定流：Rejected chilled pig tongue
- 流属性/单位：Mass / kg
- 数量规则：判废冷藏猪舌的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷藏猪胃（`chilled_state_conditioning_rejected_chilled_stomach`）

将本分支判废的冷藏猪胃作为独立废物流并记录处理去向。

- 选定流：Rejected chilled pig stomach
- 流属性/单位：Mass / kg
- 数量规则：判废冷藏猪胃的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷藏猪小肠（`chilled_state_conditioning_rejected_chilled_small_intestine`）

将本分支判废的冷藏猪小肠作为独立废物流并记录处理去向。

- 选定流：Rejected chilled pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：判废冷藏猪小肠的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷藏猪大肠（`chilled_state_conditioning_rejected_chilled_large_intestine`）

将本分支判废的冷藏猪大肠作为独立废物流并记录处理去向。

- 选定流：Rejected chilled pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：判废冷藏猪大肠的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷藏猪肺（`chilled_state_conditioning_rejected_chilled_lung`）

将本分支判废的冷藏猪肺作为独立废物流并记录处理去向。

- 选定流：Rejected chilled pig lung
- 流属性/单位：Mass / kg
- 数量规则：判废冷藏猪肺的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷藏猪脾（`chilled_state_conditioning_rejected_chilled_spleen`）

将本分支判废的冷藏猪脾作为独立废物流并记录处理去向。

- 选定流：Rejected chilled pig spleen
- 流属性/单位：Mass / kg
- 数量规则：判废冷藏猪脾的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷藏器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏猪器官调理废水（`chilled_state_conditioning_chilled_pig_organ_conditioning_wastewater`）

仅记录冷藏调理分支产生、进入清洗系统汇集前的废水。

- 选定流：Chilled-pig-organ-conditioning wastewater
- 流属性/单位：Volume / m3
- 数量规则：依据操作记录计量或计算该分支特定废水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_wastewater_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 基本流

###### 冷藏状态调理的直接化石二氧化碳排放（`chilled_state_conditioning_carbon_dioxide_fossil_air`）

仅记录由场内燃烧产生并分配至冷藏状态调理的直接化石二氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的直接一氧化碳排放（`chilled_state_conditioning_carbon_monoxide_air`）

仅记录由场内燃烧产生并分配至冷藏状态调理的直接一氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的直接化石甲烷排放（`chilled_state_conditioning_methane_fossil_air`）

仅记录由场内燃烧产生并分配至冷藏状态调理的直接化石甲烷排放；排除能源供应上游排放。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的直接氧化亚氮排放（`chilled_state_conditioning_nitrous_oxide_air`）

仅记录由场内燃烧产生并分配至冷藏状态调理的直接氧化亚氮排放；排除能源供应上游排放。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的直接一氧化氮排放（`chilled_state_conditioning_nitric_oxide_air`）

仅记录由场内燃烧产生并分配至冷藏状态调理的直接一氧化氮排放；排除能源供应上游排放。

- 选定流：Nitric oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的直接二氧化氮排放（`chilled_state_conditioning_nitrogen_dioxide_air`）

仅记录由场内燃烧产生并分配至冷藏状态调理的直接二氧化氮排放；排除能源供应上游排放。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的直接二氧化硫排放（`chilled_state_conditioning_sulfur_dioxide_air`）

仅记录由场内燃烧产生并分配至冷藏状态调理的直接二氧化硫排放；排除能源供应上游排放。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的直接小于 2.5 微米颗粒物排放（`chilled_state_conditioning_pm_below_2_5_air`）

仅记录由场内燃烧产生并分配至冷藏状态调理的直接小于 2.5 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的直接2.5 至 10 微米颗粒物排放（`chilled_state_conditioning_pm_2_5_to_10_air`）

仅记录由场内燃烧产生并分配至冷藏状态调理的直接2.5 至 10 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的氨制冷剂释放（`chilled_state_conditioning_ammonia_refrigerant_air`）

将本阶段氨制冷剂直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的HFC-134a释放（`chilled_state_conditioning_hfc134a_air`）

将本阶段HFC-134a直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的HFC-125释放（`chilled_state_conditioning_hfc125_air`）

将本阶段HFC-125直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：Pentafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷藏状态调理的HFC-143a释放（`chilled_state_conditioning_hfc143a_air`）

将本阶段HFC-143a直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：1,1,1-Trifluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

### 过程：冷冻状态调理（`frozen_state_conditioning`）

#### 输入

##### 产品流

###### 进入冷冻分支的整理后猪肝（`frozen_state_conditioning_prepared_liver`）

仅当冷冻为唯一声明市场状态时记录整理后猪肝；另两条状态分支必须不存在。

- 选定流：Prepared pig liver
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻分支的整理后猪肝计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷冻分支的整理后猪心（`frozen_state_conditioning_prepared_heart`）

仅当冷冻为唯一声明市场状态时记录整理后猪心；另两条状态分支必须不存在。

- 选定流：Prepared pig heart
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻分支的整理后猪心计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷冻分支的整理后猪肾（`frozen_state_conditioning_prepared_kidney`）

仅当冷冻为唯一声明市场状态时记录整理后猪肾；另两条状态分支必须不存在。

- 选定流：Prepared pig kidney
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻分支的整理后猪肾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷冻分支的整理后猪舌（`frozen_state_conditioning_prepared_tongue`）

仅当冷冻为唯一声明市场状态时记录整理后猪舌；另两条状态分支必须不存在。

- 选定流：Prepared pig tongue
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻分支的整理后猪舌计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷冻分支的整理后猪胃（`frozen_state_conditioning_prepared_stomach`）

仅当冷冻为唯一声明市场状态时记录整理后猪胃；另两条状态分支必须不存在。

- 选定流：Prepared pig stomach
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻分支的整理后猪胃计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷冻分支的整理后猪小肠（`frozen_state_conditioning_prepared_small_intestine`）

仅当冷冻为唯一声明市场状态时记录整理后猪小肠；另两条状态分支必须不存在。

- 选定流：Prepared pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻分支的整理后猪小肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷冻分支的整理后猪大肠（`frozen_state_conditioning_prepared_large_intestine`）

仅当冷冻为唯一声明市场状态时记录整理后猪大肠；另两条状态分支必须不存在。

- 选定流：Prepared pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻分支的整理后猪大肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷冻分支的整理后猪肺（`frozen_state_conditioning_prepared_lung`）

仅当冷冻为唯一声明市场状态时记录整理后猪肺；另两条状态分支必须不存在。

- 选定流：Prepared pig lung
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻分支的整理后猪肺计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入冷冻分支的整理后猪脾（`frozen_state_conditioning_prepared_spleen`）

仅当冷冻为唯一声明市场状态时记录整理后猪脾；另两条状态分支必须不存在。

- 选定流：Prepared pig spleen
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻分支的整理后猪脾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的自来饮用水（`frozen_state_conditioning_potable_mains_water`）

仅记录作为单独计量产品投入输送至冷冻状态调理的自来饮用水。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的自来水计量体积；不得采用类别默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的电网电力（`frozen_state_conditioning_grid_electricity`）

记录跨越设施边界并专用于冷冻状态调理的电网电力；与所有其他载能品分别记录。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本阶段的电网电力计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_electricity_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的外购蒸汽（`frozen_state_conditioning_purchased_steam`）

记录跨越设施边界并专用于冷冻状态调理的外购蒸汽；与所有其他载能品分别记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购蒸汽计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的外购热水（`frozen_state_conditioning_purchased_hot_water`）

记录跨越设施边界并专用于冷冻状态调理的外购热水；与所有其他载能品分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购热水计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的天然气（`frozen_state_conditioning_natural_gas`）

记录跨越设施边界并专用于冷冻状态调理的天然气；与所有其他载能品分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的天然气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的柴油（`frozen_state_conditioning_diesel_fuel`）

记录跨越设施边界并专用于冷冻状态调理的柴油；与所有其他载能品分别记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的柴油计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的液化石油气（`frozen_state_conditioning_liquefied_petroleum_gas`）

记录跨越设施边界并专用于冷冻状态调理的液化石油气；与所有其他载能品分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的液化石油气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的氨制冷剂（R-717）补充（`frozen_state_conditioning_ammonia_r717_makeup`）

仅当本阶段安装该确切制冷剂时，根据维护与库存记录记载氨制冷剂（R-717）补充量。

- 选定流：Ammonia refrigerant (R-717)
- 流属性/单位：Mass / kg
- 数量规则：通过本阶段制冷剂平衡核对的氨制冷剂（R-717）补充与回收质量；不得采用默认泄漏率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的HFC-134a 制冷剂补充（`frozen_state_conditioning_hfc134a_makeup`）

仅当本阶段安装该确切制冷剂时，根据维护与库存记录记载HFC-134a 制冷剂补充量。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- 流属性/单位：Mass / kg
- 数量规则：通过本阶段制冷剂平衡核对的HFC-134a 制冷剂补充与回收质量；不得采用默认泄漏率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的R-404A 制冷剂混合物补充（`frozen_state_conditioning_r404a_makeup`）

仅当本阶段安装该确切制冷剂时，根据维护与库存记录记载R-404A 制冷剂混合物补充量。

- 选定流：R-404A refrigerant mixture
- 流属性/单位：Mass / kg
- 数量规则：通过本阶段制冷剂平衡核对的R-404A 制冷剂混合物补充与回收质量；不得采用默认泄漏率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

_本方向与流类型未定义原子交换。_

##### 基本流

###### 冷冻状态调理的地下水取水（`frozen_state_conditioning_water_ground`）

记录为冷冻状态调理直接跨越基本流边界的地下水取水，不得与自来水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地下水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的地表水取水（`frozen_state_conditioning_water_surface`）

记录为冷冻状态调理直接跨越基本流边界的地表水取水，不得与自来水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地表水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 冷冻猪肝（`frozen_state_conditioning_frozen_liver`）

记录满足声明器官、温度、时间与卫生规格的冷冻猪肝。

- 选定流：Frozen pig liver
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷冻猪肝质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻猪心（`frozen_state_conditioning_frozen_heart`）

记录满足声明器官、温度、时间与卫生规格的冷冻猪心。

- 选定流：Frozen pig heart
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷冻猪心质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻猪肾（`frozen_state_conditioning_frozen_kidney`）

记录满足声明器官、温度、时间与卫生规格的冷冻猪肾。

- 选定流：Frozen pig kidney
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷冻猪肾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻猪舌（`frozen_state_conditioning_frozen_tongue`）

记录满足声明器官、温度、时间与卫生规格的冷冻猪舌。

- 选定流：Frozen pig tongue
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷冻猪舌质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻猪胃（`frozen_state_conditioning_frozen_stomach`）

记录满足声明器官、温度、时间与卫生规格的冷冻猪胃。

- 选定流：Frozen pig stomach
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷冻猪胃质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻猪小肠（`frozen_state_conditioning_frozen_small_intestine`）

记录满足声明器官、温度、时间与卫生规格的冷冻猪小肠。

- 选定流：Frozen pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷冻猪小肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻猪大肠（`frozen_state_conditioning_frozen_large_intestine`）

记录满足声明器官、温度、时间与卫生规格的冷冻猪大肠。

- 选定流：Frozen pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷冻猪大肠质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻猪肺（`frozen_state_conditioning_frozen_lung`）

记录满足声明器官、温度、时间与卫生规格的冷冻猪肺。

- 选定流：Frozen pig lung
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷冻猪肺质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻猪脾（`frozen_state_conditioning_frozen_spleen`）

记录满足声明器官、温度、时间与卫生规格的冷冻猪脾。

- 选定流：Frozen pig spleen
- 流属性/单位：Mass / kg
- 数量规则：按 calc_state_conditioning_mass_balance 计算合格冷冻猪脾质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_state_mass_balance`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

###### 判废冷冻猪肝（`frozen_state_conditioning_rejected_frozen_liver`）

将本分支判废的冷冻猪肝作为独立废物流并记录处理去向。

- 选定流：Rejected frozen pig liver
- 流属性/单位：Mass / kg
- 数量规则：判废冷冻猪肝的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷冻猪心（`frozen_state_conditioning_rejected_frozen_heart`）

将本分支判废的冷冻猪心作为独立废物流并记录处理去向。

- 选定流：Rejected frozen pig heart
- 流属性/单位：Mass / kg
- 数量规则：判废冷冻猪心的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷冻猪肾（`frozen_state_conditioning_rejected_frozen_kidney`）

将本分支判废的冷冻猪肾作为独立废物流并记录处理去向。

- 选定流：Rejected frozen pig kidney
- 流属性/单位：Mass / kg
- 数量规则：判废冷冻猪肾的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷冻猪舌（`frozen_state_conditioning_rejected_frozen_tongue`）

将本分支判废的冷冻猪舌作为独立废物流并记录处理去向。

- 选定流：Rejected frozen pig tongue
- 流属性/单位：Mass / kg
- 数量规则：判废冷冻猪舌的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷冻猪胃（`frozen_state_conditioning_rejected_frozen_stomach`）

将本分支判废的冷冻猪胃作为独立废物流并记录处理去向。

- 选定流：Rejected frozen pig stomach
- 流属性/单位：Mass / kg
- 数量规则：判废冷冻猪胃的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷冻猪小肠（`frozen_state_conditioning_rejected_frozen_small_intestine`）

将本分支判废的冷冻猪小肠作为独立废物流并记录处理去向。

- 选定流：Rejected frozen pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：判废冷冻猪小肠的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷冻猪大肠（`frozen_state_conditioning_rejected_frozen_large_intestine`）

将本分支判废的冷冻猪大肠作为独立废物流并记录处理去向。

- 选定流：Rejected frozen pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：判废冷冻猪大肠的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷冻猪肺（`frozen_state_conditioning_rejected_frozen_lung`）

将本分支判废的冷冻猪肺作为独立废物流并记录处理去向。

- 选定流：Rejected frozen pig lung
- 流属性/单位：Mass / kg
- 数量规则：判废冷冻猪肺的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 判废冷冻猪脾（`frozen_state_conditioning_rejected_frozen_spleen`）

将本分支判废的冷冻猪脾作为独立废物流并记录处理去向。

- 选定流：Rejected frozen pig spleen
- 流属性/单位：Mass / kg
- 数量规则：判废冷冻猪脾的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按冷冻器官输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_state_conditioning_state_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻猪器官调理废水（`frozen_state_conditioning_frozen_pig_organ_conditioning_wastewater`）

仅记录冷冻调理分支产生、进入清洗系统汇集前的废水。

- 选定流：Frozen-pig-organ-conditioning wastewater
- 流属性/单位：Volume / m3
- 数量规则：依据操作记录计量或计算该分支特定废水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_wastewater_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 基本流

###### 冷冻状态调理的直接化石二氧化碳排放（`frozen_state_conditioning_carbon_dioxide_fossil_air`）

仅记录由场内燃烧产生并分配至冷冻状态调理的直接化石二氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的直接一氧化碳排放（`frozen_state_conditioning_carbon_monoxide_air`）

仅记录由场内燃烧产生并分配至冷冻状态调理的直接一氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的直接化石甲烷排放（`frozen_state_conditioning_methane_fossil_air`）

仅记录由场内燃烧产生并分配至冷冻状态调理的直接化石甲烷排放；排除能源供应上游排放。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的直接氧化亚氮排放（`frozen_state_conditioning_nitrous_oxide_air`）

仅记录由场内燃烧产生并分配至冷冻状态调理的直接氧化亚氮排放；排除能源供应上游排放。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的直接一氧化氮排放（`frozen_state_conditioning_nitric_oxide_air`）

仅记录由场内燃烧产生并分配至冷冻状态调理的直接一氧化氮排放；排除能源供应上游排放。

- 选定流：Nitric oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的直接二氧化氮排放（`frozen_state_conditioning_nitrogen_dioxide_air`）

仅记录由场内燃烧产生并分配至冷冻状态调理的直接二氧化氮排放；排除能源供应上游排放。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的直接二氧化硫排放（`frozen_state_conditioning_sulfur_dioxide_air`）

仅记录由场内燃烧产生并分配至冷冻状态调理的直接二氧化硫排放；排除能源供应上游排放。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的直接小于 2.5 微米颗粒物排放（`frozen_state_conditioning_pm_below_2_5_air`）

仅记录由场内燃烧产生并分配至冷冻状态调理的直接小于 2.5 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的直接2.5 至 10 微米颗粒物排放（`frozen_state_conditioning_pm_2_5_to_10_air`）

仅记录由场内燃烧产生并分配至冷冻状态调理的直接2.5 至 10 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的氨制冷剂释放（`frozen_state_conditioning_ammonia_refrigerant_air`）

将本阶段氨制冷剂直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的HFC-134a释放（`frozen_state_conditioning_hfc134a_air`）

将本阶段HFC-134a直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的HFC-125释放（`frozen_state_conditioning_hfc125_air`）

将本阶段HFC-125直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：Pentafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 冷冻状态调理的HFC-143a释放（`frozen_state_conditioning_hfc143a_air`）

将本阶段HFC-143a直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：1,1,1-Trifluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_state_conditioning_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

### 过程：包装、状态控制储存与放行（`packaging_storage_and_release`）

#### 输入

##### 产品流

###### 进入包装的鲜品猪肝（`packaging_storage_and_release_fresh_liver`）

仅当猪肝与鲜品共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Fresh pig liver
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格鲜品猪肝计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的鲜品猪心（`packaging_storage_and_release_fresh_heart`）

仅当猪心与鲜品共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Fresh pig heart
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格鲜品猪心计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的鲜品猪肾（`packaging_storage_and_release_fresh_kidney`）

仅当猪肾与鲜品共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Fresh pig kidney
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格鲜品猪肾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的鲜品猪舌（`packaging_storage_and_release_fresh_tongue`）

仅当猪舌与鲜品共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Fresh pig tongue
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格鲜品猪舌计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的鲜品猪胃（`packaging_storage_and_release_fresh_stomach`）

仅当猪胃与鲜品共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Fresh pig stomach
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格鲜品猪胃计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的鲜品猪小肠（`packaging_storage_and_release_fresh_small_intestine`）

仅当猪小肠与鲜品共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Fresh pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格鲜品猪小肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的鲜品猪大肠（`packaging_storage_and_release_fresh_large_intestine`）

仅当猪大肠与鲜品共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Fresh pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格鲜品猪大肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的鲜品猪肺（`packaging_storage_and_release_fresh_lung`）

仅当猪肺与鲜品共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Fresh pig lung
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格鲜品猪肺计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的鲜品猪脾（`packaging_storage_and_release_fresh_spleen`）

仅当猪脾与鲜品共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Fresh pig spleen
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格鲜品猪脾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷藏猪肝（`packaging_storage_and_release_chilled_liver`）

仅当猪肝与冷藏共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Chilled pig liver
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷藏猪肝计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷藏猪心（`packaging_storage_and_release_chilled_heart`）

仅当猪心与冷藏共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Chilled pig heart
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷藏猪心计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷藏猪肾（`packaging_storage_and_release_chilled_kidney`）

仅当猪肾与冷藏共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Chilled pig kidney
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷藏猪肾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷藏猪舌（`packaging_storage_and_release_chilled_tongue`）

仅当猪舌与冷藏共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Chilled pig tongue
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷藏猪舌计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷藏猪胃（`packaging_storage_and_release_chilled_stomach`）

仅当猪胃与冷藏共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Chilled pig stomach
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷藏猪胃计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷藏猪小肠（`packaging_storage_and_release_chilled_small_intestine`）

仅当猪小肠与冷藏共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Chilled pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷藏猪小肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷藏猪大肠（`packaging_storage_and_release_chilled_large_intestine`）

仅当猪大肠与冷藏共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Chilled pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷藏猪大肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷藏猪肺（`packaging_storage_and_release_chilled_lung`）

仅当猪肺与冷藏共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Chilled pig lung
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷藏猪肺计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷藏猪脾（`packaging_storage_and_release_chilled_spleen`）

仅当猪脾与冷藏共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Chilled pig spleen
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷藏猪脾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷冻猪肝（`packaging_storage_and_release_frozen_liver`）

仅当猪肝与冷冻共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Frozen pig liver
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷冻猪肝计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷冻猪心（`packaging_storage_and_release_frozen_heart`）

仅当猪心与冷冻共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Frozen pig heart
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷冻猪心计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷冻猪肾（`packaging_storage_and_release_frozen_kidney`）

仅当猪肾与冷冻共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Frozen pig kidney
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷冻猪肾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷冻猪舌（`packaging_storage_and_release_frozen_tongue`）

仅当猪舌与冷冻共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Frozen pig tongue
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷冻猪舌计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷冻猪胃（`packaging_storage_and_release_frozen_stomach`）

仅当猪胃与冷冻共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Frozen pig stomach
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷冻猪胃计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷冻猪小肠（`packaging_storage_and_release_frozen_small_intestine`）

仅当猪小肠与冷冻共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Frozen pig small intestine
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷冻猪小肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷冻猪大肠（`packaging_storage_and_release_frozen_large_intestine`）

仅当猪大肠与冷冻共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Frozen pig large intestine
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷冻猪大肠计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷冻猪肺（`packaging_storage_and_release_frozen_lung`）

仅当猪肺与冷冻共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Frozen pig lung
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷冻猪肺计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入包装的冷冻猪脾（`packaging_storage_and_release_frozen_spleen`）

仅当猪脾与冷冻共同构成唯一声明的器官—状态组合时记录该投入。

- 选定流：Frozen pig spleen
- 流属性/单位：Mass / kg
- 数量规则：进入包装与放行的合格冷冻猪脾计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_mass_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 低密度聚乙烯薄膜包装投入（`packaging_storage_and_release_ldpe_primary_film`）

依据产品特定包装物料清单记录低密度聚乙烯薄膜质量；不得与其他包装物质或制品合并。

- 选定流：Low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的低密度聚乙烯薄膜计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 聚酰胺阻隔膜包装投入（`packaging_storage_and_release_polyamide_barrier_film`）

依据产品特定包装物料清单记录聚酰胺阻隔膜质量；不得与其他包装物质或制品合并。

- 选定流：Polyamide barrier film
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的聚酰胺阻隔膜计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 聚对苯二甲酸乙二醇酯托盘包装投入（`packaging_storage_and_release_pet_tray`）

依据产品特定包装物料清单记录聚对苯二甲酸乙二醇酯托盘质量；不得与其他包装物质或制品合并。

- 选定流：Polyethylene terephthalate tray
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的聚对苯二甲酸乙二醇酯托盘计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 聚丙烯托盘包装投入（`packaging_storage_and_release_polypropylene_tray`）

依据产品特定包装物料清单记录聚丙烯托盘质量；不得与其他包装物质或制品合并。

- 选定流：Polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的聚丙烯托盘计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 发泡聚苯乙烯托盘包装投入（`packaging_storage_and_release_expanded_polystyrene_tray`）

依据产品特定包装物料清单记录发泡聚苯乙烯托盘质量；不得与其他包装物质或制品合并。

- 选定流：Expanded polystyrene tray
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的发泡聚苯乙烯托盘计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 纸板盒包装投入（`packaging_storage_and_release_paperboard_carton`）

依据产品特定包装物料清单记录纸板盒质量；不得与其他包装物质或制品合并。

- 选定流：Paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的纸板盒计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 瓦楞纸板箱包装投入（`packaging_storage_and_release_corrugated_fibreboard_box`）

依据产品特定包装物料清单记录瓦楞纸板箱质量；不得与其他包装物质或制品合并。

- 选定流：Corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的瓦楞纸板箱计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 铝箔包装投入（`packaging_storage_and_release_aluminium_foil`）

依据产品特定包装物料清单记录铝箔质量；不得与其他包装物质或制品合并。

- 选定流：Aluminium foil
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的铝箔计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 木托盘包装投入（`packaging_storage_and_release_wooden_pallet`）

依据产品特定包装物料清单记录木托盘质量；不得与其他包装物质或制品合并。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的木托盘计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 低密度聚乙烯缠绕膜包装投入（`packaging_storage_and_release_ldpe_stretch_film`）

依据产品特定包装物料清单记录低密度聚乙烯缠绕膜质量；不得与其他包装物质或制品合并。

- 选定流：Low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：放行批次使用的低密度聚乙烯缠绕膜计量或供应商声明质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_bom_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的自来饮用水（`packaging_storage_and_release_potable_mains_water`）

仅记录作为单独计量产品投入输送至包装、状态控制储存与放行的自来饮用水。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的自来水计量体积；不得采用类别默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的电网电力（`packaging_storage_and_release_grid_electricity`）

记录跨越设施边界并专用于包装、状态控制储存与放行的电网电力；与所有其他载能品分别记录。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本阶段的电网电力计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_electricity_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的外购蒸汽（`packaging_storage_and_release_purchased_steam`）

记录跨越设施边界并专用于包装、状态控制储存与放行的外购蒸汽；与所有其他载能品分别记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购蒸汽计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的外购热水（`packaging_storage_and_release_purchased_hot_water`）

记录跨越设施边界并专用于包装、状态控制储存与放行的外购热水；与所有其他载能品分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购热水计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的天然气（`packaging_storage_and_release_natural_gas`）

记录跨越设施边界并专用于包装、状态控制储存与放行的天然气；与所有其他载能品分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的天然气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的柴油（`packaging_storage_and_release_diesel_fuel`）

记录跨越设施边界并专用于包装、状态控制储存与放行的柴油；与所有其他载能品分别记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的柴油计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的液化石油气（`packaging_storage_and_release_liquefied_petroleum_gas`）

记录跨越设施边界并专用于包装、状态控制储存与放行的液化石油气；与所有其他载能品分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的液化石油气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的氨制冷剂（R-717）补充（`packaging_storage_and_release_ammonia_r717_makeup`）

仅当本阶段安装该确切制冷剂时，根据维护与库存记录记载氨制冷剂（R-717）补充量。

- 选定流：Ammonia refrigerant (R-717)
- 流属性/单位：Mass / kg
- 数量规则：通过本阶段制冷剂平衡核对的氨制冷剂（R-717）补充与回收质量；不得采用默认泄漏率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的HFC-134a 制冷剂补充（`packaging_storage_and_release_hfc134a_makeup`）

仅当本阶段安装该确切制冷剂时，根据维护与库存记录记载HFC-134a 制冷剂补充量。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- 流属性/单位：Mass / kg
- 数量规则：通过本阶段制冷剂平衡核对的HFC-134a 制冷剂补充与回收质量；不得采用默认泄漏率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的R-404A 制冷剂混合物补充（`packaging_storage_and_release_r404a_makeup`）

仅当本阶段安装该确切制冷剂时，根据维护与库存记录记载R-404A 制冷剂混合物补充量。

- 选定流：R-404A refrigerant mixture
- 流属性/单位：Mass / kg
- 数量规则：通过本阶段制冷剂平衡核对的R-404A 制冷剂混合物补充与回收质量；不得采用默认泄漏率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

_本方向与流类型未定义原子交换。_

##### 基本流

###### 包装、状态控制储存与放行的地下水取水（`packaging_storage_and_release_water_ground`）

记录为包装、状态控制储存与放行直接跨越基本流边界的地下水取水，不得与自来水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地下水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的地表水取水（`packaging_storage_and_release_water_surface`）

记录为包装、状态控制储存与放行直接跨越基本流边界的地表水取水，不得与自来水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地表水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 参考产品放行（`packaging_storage_and_release_reference_product`）

通过已核验的 CPC 21153 产品流身份放行恰好一种声明猪器官和恰好一种声明市场状态；包装质量不计入。

- 选定流：Edible offal of pigs, fresh, chilled or frozen `17a80845-90d9-42a4-8a70-fee47fe2b380`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 calc_reference_product_normalization 计算净合格放行质量并归一化为恰好 1 kg。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_reference_release_records`
- 来源：`unsd-cpc-21153`；`eu-pef-2021-2279`

##### 废物流

###### 放行时判废鲜品猪肝（`packaging_storage_and_release_rejected_at_release_fresh_liver`）

将包装、储存或最终放行时判废的鲜品猪肝作为独立废物流记录。

- 选定流：Rejected fresh pig liver at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废鲜品猪心（`packaging_storage_and_release_rejected_at_release_fresh_heart`）

将包装、储存或最终放行时判废的鲜品猪心作为独立废物流记录。

- 选定流：Rejected fresh pig heart at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废鲜品猪肾（`packaging_storage_and_release_rejected_at_release_fresh_kidney`）

将包装、储存或最终放行时判废的鲜品猪肾作为独立废物流记录。

- 选定流：Rejected fresh pig kidney at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废鲜品猪舌（`packaging_storage_and_release_rejected_at_release_fresh_tongue`）

将包装、储存或最终放行时判废的鲜品猪舌作为独立废物流记录。

- 选定流：Rejected fresh pig tongue at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废鲜品猪胃（`packaging_storage_and_release_rejected_at_release_fresh_stomach`）

将包装、储存或最终放行时判废的鲜品猪胃作为独立废物流记录。

- 选定流：Rejected fresh pig stomach at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废鲜品猪小肠（`packaging_storage_and_release_rejected_at_release_fresh_small_intestine`）

将包装、储存或最终放行时判废的鲜品猪小肠作为独立废物流记录。

- 选定流：Rejected fresh pig small intestine at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废鲜品猪大肠（`packaging_storage_and_release_rejected_at_release_fresh_large_intestine`）

将包装、储存或最终放行时判废的鲜品猪大肠作为独立废物流记录。

- 选定流：Rejected fresh pig large intestine at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废鲜品猪肺（`packaging_storage_and_release_rejected_at_release_fresh_lung`）

将包装、储存或最终放行时判废的鲜品猪肺作为独立废物流记录。

- 选定流：Rejected fresh pig lung at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废鲜品猪脾（`packaging_storage_and_release_rejected_at_release_fresh_spleen`）

将包装、储存或最终放行时判废的鲜品猪脾作为独立废物流记录。

- 选定流：Rejected fresh pig spleen at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷藏猪肝（`packaging_storage_and_release_rejected_at_release_chilled_liver`）

将包装、储存或最终放行时判废的冷藏猪肝作为独立废物流记录。

- 选定流：Rejected chilled pig liver at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷藏猪心（`packaging_storage_and_release_rejected_at_release_chilled_heart`）

将包装、储存或最终放行时判废的冷藏猪心作为独立废物流记录。

- 选定流：Rejected chilled pig heart at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷藏猪肾（`packaging_storage_and_release_rejected_at_release_chilled_kidney`）

将包装、储存或最终放行时判废的冷藏猪肾作为独立废物流记录。

- 选定流：Rejected chilled pig kidney at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷藏猪舌（`packaging_storage_and_release_rejected_at_release_chilled_tongue`）

将包装、储存或最终放行时判废的冷藏猪舌作为独立废物流记录。

- 选定流：Rejected chilled pig tongue at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷藏猪胃（`packaging_storage_and_release_rejected_at_release_chilled_stomach`）

将包装、储存或最终放行时判废的冷藏猪胃作为独立废物流记录。

- 选定流：Rejected chilled pig stomach at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷藏猪小肠（`packaging_storage_and_release_rejected_at_release_chilled_small_intestine`）

将包装、储存或最终放行时判废的冷藏猪小肠作为独立废物流记录。

- 选定流：Rejected chilled pig small intestine at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷藏猪大肠（`packaging_storage_and_release_rejected_at_release_chilled_large_intestine`）

将包装、储存或最终放行时判废的冷藏猪大肠作为独立废物流记录。

- 选定流：Rejected chilled pig large intestine at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷藏猪肺（`packaging_storage_and_release_rejected_at_release_chilled_lung`）

将包装、储存或最终放行时判废的冷藏猪肺作为独立废物流记录。

- 选定流：Rejected chilled pig lung at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷藏猪脾（`packaging_storage_and_release_rejected_at_release_chilled_spleen`）

将包装、储存或最终放行时判废的冷藏猪脾作为独立废物流记录。

- 选定流：Rejected chilled pig spleen at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷冻猪肝（`packaging_storage_and_release_rejected_at_release_frozen_liver`）

将包装、储存或最终放行时判废的冷冻猪肝作为独立废物流记录。

- 选定流：Rejected frozen pig liver at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷冻猪心（`packaging_storage_and_release_rejected_at_release_frozen_heart`）

将包装、储存或最终放行时判废的冷冻猪心作为独立废物流记录。

- 选定流：Rejected frozen pig heart at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷冻猪肾（`packaging_storage_and_release_rejected_at_release_frozen_kidney`）

将包装、储存或最终放行时判废的冷冻猪肾作为独立废物流记录。

- 选定流：Rejected frozen pig kidney at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷冻猪舌（`packaging_storage_and_release_rejected_at_release_frozen_tongue`）

将包装、储存或最终放行时判废的冷冻猪舌作为独立废物流记录。

- 选定流：Rejected frozen pig tongue at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷冻猪胃（`packaging_storage_and_release_rejected_at_release_frozen_stomach`）

将包装、储存或最终放行时判废的冷冻猪胃作为独立废物流记录。

- 选定流：Rejected frozen pig stomach at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷冻猪小肠（`packaging_storage_and_release_rejected_at_release_frozen_small_intestine`）

将包装、储存或最终放行时判废的冷冻猪小肠作为独立废物流记录。

- 选定流：Rejected frozen pig small intestine at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷冻猪大肠（`packaging_storage_and_release_rejected_at_release_frozen_large_intestine`）

将包装、储存或最终放行时判废的冷冻猪大肠作为独立废物流记录。

- 选定流：Rejected frozen pig large intestine at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷冻猪肺（`packaging_storage_and_release_rejected_at_release_frozen_lung`）

将包装、储存或最终放行时判废的冷冻猪肺作为独立废物流记录。

- 选定流：Rejected frozen pig lung at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 放行时判废冷冻猪脾（`packaging_storage_and_release_rejected_at_release_frozen_spleen`）

将包装、储存或最终放行时判废的冷冻猪脾作为独立废物流记录。

- 选定流：Rejected frozen pig spleen at release
- 流属性/单位：Mass / kg
- 数量规则：该确切器官—状态组合的判废计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_release_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废低密度聚乙烯薄膜（`packaging_storage_and_release_waste_ldpe_primary_film`）

将包装边界内产生的废低密度聚乙烯薄膜作为单独材料废物流记录。

- 选定流：Waste low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：废低密度聚乙烯薄膜的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废聚酰胺阻隔膜（`packaging_storage_and_release_waste_polyamide_barrier_film`）

将包装边界内产生的废聚酰胺阻隔膜作为单独材料废物流记录。

- 选定流：Waste polyamide barrier film
- 流属性/单位：Mass / kg
- 数量规则：废聚酰胺阻隔膜的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废聚对苯二甲酸乙二醇酯托盘（`packaging_storage_and_release_waste_pet_tray`）

将包装边界内产生的废聚对苯二甲酸乙二醇酯托盘作为单独材料废物流记录。

- 选定流：Waste polyethylene terephthalate tray
- 流属性/单位：Mass / kg
- 数量规则：废聚对苯二甲酸乙二醇酯托盘的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废聚丙烯托盘（`packaging_storage_and_release_waste_polypropylene_tray`）

将包装边界内产生的废聚丙烯托盘作为单独材料废物流记录。

- 选定流：Waste polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：废聚丙烯托盘的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废发泡聚苯乙烯托盘（`packaging_storage_and_release_waste_expanded_polystyrene_tray`）

将包装边界内产生的废发泡聚苯乙烯托盘作为单独材料废物流记录。

- 选定流：Waste expanded polystyrene tray
- 流属性/单位：Mass / kg
- 数量规则：废发泡聚苯乙烯托盘的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废纸板盒（`packaging_storage_and_release_waste_paperboard_carton`）

将包装边界内产生的废纸板盒作为单独材料废物流记录。

- 选定流：Waste paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：废纸板盒的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废瓦楞纸板箱（`packaging_storage_and_release_waste_corrugated_fibreboard_box`）

将包装边界内产生的废瓦楞纸板箱作为单独材料废物流记录。

- 选定流：Waste corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：废瓦楞纸板箱的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废铝箔（`packaging_storage_and_release_waste_aluminium_foil`）

将包装边界内产生的废铝箔作为单独材料废物流记录。

- 选定流：Waste aluminium foil
- 流属性/单位：Mass / kg
- 数量规则：废铝箔的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废木托盘（`packaging_storage_and_release_waste_wooden_pallet`）

将包装边界内产生的废木托盘作为单独材料废物流记录。

- 选定流：Waste wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：废木托盘的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废低密度聚乙烯缠绕膜（`packaging_storage_and_release_waste_ldpe_stretch_film`）

将包装边界内产生的废低密度聚乙烯缠绕膜作为单独材料废物流记录。

- 选定流：Waste low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：废低密度聚乙烯缠绕膜的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_and_release_packaging_waste_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 基本流

###### 包装、状态控制储存与放行的直接化石二氧化碳排放（`packaging_storage_and_release_carbon_dioxide_fossil_air`）

仅记录由场内燃烧产生并分配至包装、状态控制储存与放行的直接化石二氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的直接一氧化碳排放（`packaging_storage_and_release_carbon_monoxide_air`）

仅记录由场内燃烧产生并分配至包装、状态控制储存与放行的直接一氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的直接化石甲烷排放（`packaging_storage_and_release_methane_fossil_air`）

仅记录由场内燃烧产生并分配至包装、状态控制储存与放行的直接化石甲烷排放；排除能源供应上游排放。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的直接氧化亚氮排放（`packaging_storage_and_release_nitrous_oxide_air`）

仅记录由场内燃烧产生并分配至包装、状态控制储存与放行的直接氧化亚氮排放；排除能源供应上游排放。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的直接一氧化氮排放（`packaging_storage_and_release_nitric_oxide_air`）

仅记录由场内燃烧产生并分配至包装、状态控制储存与放行的直接一氧化氮排放；排除能源供应上游排放。

- 选定流：Nitric oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的直接二氧化氮排放（`packaging_storage_and_release_nitrogen_dioxide_air`）

仅记录由场内燃烧产生并分配至包装、状态控制储存与放行的直接二氧化氮排放；排除能源供应上游排放。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的直接二氧化硫排放（`packaging_storage_and_release_sulfur_dioxide_air`）

仅记录由场内燃烧产生并分配至包装、状态控制储存与放行的直接二氧化硫排放；排除能源供应上游排放。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的直接小于 2.5 微米颗粒物排放（`packaging_storage_and_release_pm_below_2_5_air`）

仅记录由场内燃烧产生并分配至包装、状态控制储存与放行的直接小于 2.5 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的直接2.5 至 10 微米颗粒物排放（`packaging_storage_and_release_pm_2_5_to_10_air`）

仅记录由场内燃烧产生并分配至包装、状态控制储存与放行的直接2.5 至 10 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的氨制冷剂释放（`packaging_storage_and_release_ammonia_refrigerant_air`）

将本阶段氨制冷剂直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的HFC-134a释放（`packaging_storage_and_release_hfc134a_air`）

将本阶段HFC-134a直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的HFC-125释放（`packaging_storage_and_release_hfc125_air`）

将本阶段HFC-125直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：Pentafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 包装、状态控制储存与放行的HFC-143a释放（`packaging_storage_and_release_hfc143a_air`）

将本阶段HFC-143a直接释放作为单独基本流记录；对于 R-404A，采用供应商组成而非 PCR 默认比例。

- 选定流：1,1,1-Trifluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据该确切物质的充注、补充、回收和维护记录，按 calc_refrigerant_mass_balance 计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_and_release_refrigerant_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

### 过程：清洗消毒与废水管理（`sanitation_and_wastewater_management`）

#### 输入

##### 产品流

###### 投入氢氧化钠（`sanitation_and_wastewater_management_sodium_hydroxide`）

依据化学品领用或投加记录，将氢氧化钠作为一个配方身份投入；不得与另一种物质合并。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：用于清洗、消毒或处理的氢氧化钠配制产品计量质量；有效浓度另在协议字段记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_chemical_dosing_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 投入硝酸（`sanitation_and_wastewater_management_nitric_acid`）

依据化学品领用或投加记录，将硝酸作为一个配方身份投入；不得与另一种物质合并。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：用于清洗、消毒或处理的硝酸配制产品计量质量；有效浓度另在协议字段记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_chemical_dosing_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 投入次氯酸钠（`sanitation_and_wastewater_management_sodium_hypochlorite`）

依据化学品领用或投加记录，将次氯酸钠作为一个配方身份投入；不得与另一种物质合并。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：用于清洗、消毒或处理的次氯酸钠配制产品计量质量；有效浓度另在协议字段记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_chemical_dosing_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 投入过氧乙酸（`sanitation_and_wastewater_management_peracetic_acid`）

依据化学品领用或投加记录，将过氧乙酸作为一个配方身份投入；不得与另一种物质合并。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：用于清洗、消毒或处理的过氧乙酸配制产品计量质量；有效浓度另在协议字段记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_chemical_dosing_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 投入过氧化氢（`sanitation_and_wastewater_management_hydrogen_peroxide`）

依据化学品领用或投加记录，将过氧化氢作为一个配方身份投入；不得与另一种物质合并。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：用于清洗、消毒或处理的过氧化氢配制产品计量质量；有效浓度另在协议字段记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_chemical_dosing_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 投入二氧化氯（`sanitation_and_wastewater_management_chlorine_dioxide`）

依据化学品领用或投加记录，将二氧化氯作为一个配方身份投入；不得与另一种物质合并。

- 选定流：Chlorine dioxide
- 流属性/单位：Mass / kg
- 数量规则：用于清洗、消毒或处理的二氧化氯配制产品计量质量；有效浓度另在协议字段记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_chemical_dosing_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 投入氯化铁（`sanitation_and_wastewater_management_ferric_chloride`）

依据化学品领用或投加记录，将氯化铁作为一个配方身份投入；不得与另一种物质合并。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：用于清洗、消毒或处理的氯化铁配制产品计量质量；有效浓度另在协议字段记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_chemical_dosing_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 投入氢氧化钙（`sanitation_and_wastewater_management_calcium_hydroxide`）

依据化学品领用或投加记录，将氢氧化钙作为一个配方身份投入；不得与另一种物质合并。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：用于清洗、消毒或处理的氢氧化钙配制产品计量质量；有效浓度另在协议字段记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_chemical_dosing_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 投入聚丙烯酰胺絮凝剂（`sanitation_and_wastewater_management_polyacrylamide_flocculant`）

依据化学品领用或投加记录，将聚丙烯酰胺絮凝剂作为一个配方身份投入；不得与另一种物质合并。

- 选定流：Polyacrylamide flocculant
- 流属性/单位：Mass / kg
- 数量规则：用于清洗、消毒或处理的聚丙烯酰胺絮凝剂配制产品计量质量；有效浓度另在协议字段记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_chemical_dosing_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的自来饮用水（`sanitation_and_wastewater_management_potable_mains_water`）

仅记录作为单独计量产品投入输送至清洗消毒与废水管理的自来饮用水。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的自来水计量体积；不得采用类别默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的电网电力（`sanitation_and_wastewater_management_grid_electricity`）

记录跨越设施边界并专用于清洗消毒与废水管理的电网电力；与所有其他载能品分别记录。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本阶段的电网电力计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_electricity_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的外购蒸汽（`sanitation_and_wastewater_management_purchased_steam`）

记录跨越设施边界并专用于清洗消毒与废水管理的外购蒸汽；与所有其他载能品分别记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购蒸汽计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的外购热水（`sanitation_and_wastewater_management_purchased_hot_water`）

记录跨越设施边界并专用于清洗消毒与废水管理的外购热水；与所有其他载能品分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的外购热水计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_thermal_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的天然气（`sanitation_and_wastewater_management_natural_gas`）

记录跨越设施边界并专用于清洗消毒与废水管理的天然气；与所有其他载能品分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本阶段的天然气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的柴油（`sanitation_and_wastewater_management_diesel_fuel`）

记录跨越设施边界并专用于清洗消毒与废水管理的柴油；与所有其他载能品分别记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的柴油计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的液化石油气（`sanitation_and_wastewater_management_liquefied_petroleum_gas`）

记录跨越设施边界并专用于清洗消毒与废水管理的液化石油气；与所有其他载能品分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本阶段的液化石油气计量、发票或库存平衡量；不得采用默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_fuel_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 废物流

###### 进入废水管理的生猪屠宰废水（`sanitation_and_wastewater_management_pig_slaughter_wastewater`）

仅当相应过程分支纳入且该流进入场内管理时，记录这一来源分离废水。

- 选定流：Pig-slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：与产生过程记录核对的转入废水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_balance_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入废水管理的猪器官整理废水（`sanitation_and_wastewater_management_pig_organ_preparation_wastewater`）

仅当相应过程分支纳入且该流进入场内管理时，记录这一来源分离废水。

- 选定流：Pig-organ-preparation wastewater
- 流属性/单位：Volume / m3
- 数量规则：与产生过程记录核对的转入废水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_balance_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入废水管理的鲜品猪器官调理废水（`sanitation_and_wastewater_management_fresh_pig_organ_conditioning_wastewater`）

仅当相应过程分支纳入且该流进入场内管理时，记录这一来源分离废水。

- 选定流：Fresh-pig-organ-conditioning wastewater
- 流属性/单位：Volume / m3
- 数量规则：与产生过程记录核对的转入废水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_balance_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入废水管理的冷藏猪器官调理废水（`sanitation_and_wastewater_management_chilled_pig_organ_conditioning_wastewater`）

仅当相应过程分支纳入且该流进入场内管理时，记录这一来源分离废水。

- 选定流：Chilled-pig-organ-conditioning wastewater
- 流属性/单位：Volume / m3
- 数量规则：与产生过程记录核对的转入废水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_balance_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 进入废水管理的冷冻猪器官调理废水（`sanitation_and_wastewater_management_frozen_pig_organ_conditioning_wastewater`）

仅当相应过程分支纳入且该流进入场内管理时，记录这一来源分离废水。

- 选定流：Frozen-pig-organ-conditioning wastewater
- 流属性/单位：Volume / m3
- 数量规则：与产生过程记录核对的转入废水体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_balance_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 基本流

###### 清洗消毒与废水管理的地下水取水（`sanitation_and_wastewater_management_water_ground`）

记录为清洗消毒与废水管理直接跨越基本流边界的地下水取水，不得与自来水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地下水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的地表水取水（`sanitation_and_wastewater_management_water_surface`）

记录为清洗消毒与废水管理直接跨越基本流边界的地表水取水，不得与自来水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本阶段的地表水取水计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_water_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

#### 输出

##### 产品流

_本方向与流类型未定义原子交换。_

##### 废物流

###### 分流高浓度猪器官加工废水（`sanitation_and_wastewater_management_segregated_high_strength_pig_organ_wastewater`）

将分流高浓度猪器官加工废水作为单独输出并记录实际处理或处置去向；不得与另一流净额相抵。

- 选定流：Segregated high-strength pig-organ-processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录分流高浓度猪器官加工废水的计量体积及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_output_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 分流低浓度猪器官加工废水（`sanitation_and_wastewater_management_segregated_low_strength_pig_organ_wastewater`）

将分流低浓度猪器官加工废水作为单独输出并记录实际处理或处置去向；不得与另一流净额相抵。

- 选定流：Segregated low-strength pig-organ-processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录分流低浓度猪器官加工废水的计量体积及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_output_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 处理后猪器官加工出水（`sanitation_and_wastewater_management_treated_pig_organ_effluent`）

将处理后猪器官加工出水作为单独输出并记录实际处理或处置去向；不得与另一流净额相抵。

- 选定流：Treated pig-organ-processing effluent
- 流属性/单位：Volume / m3
- 数量规则：记录处理后猪器官加工出水的计量体积及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_output_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 废水处理污泥（`sanitation_and_wastewater_management_wastewater_treatment_sludge`）

将废水处理污泥作为单独输出并记录实际处理或处置去向；不得与另一流净额相抵。

- 选定流：Wastewater-treatment sludge
- 流属性/单位：Volume / m3
- 数量规则：记录废水处理污泥的计量体积及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_output_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 猪器官加工筛渣（`sanitation_and_wastewater_management_pig_organ_screen_residue`）

将猪器官加工筛渣作为单独输出并记录实际处理或处置去向；不得与另一流净额相抵。

- 选定流：Pig-organ-processing screen residue
- 流属性/单位：Mass / kg
- 数量规则：记录猪器官加工筛渣的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_output_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 隔油产生的废猪脂（`sanitation_and_wastewater_management_grease_separation_pig_fat`）

将隔油产生的废猪脂作为单独输出并记录实际处理或处置去向；不得与另一流净额相抵。

- 选定流：Waste pig fat from grease separation
- 流属性/单位：Mass / kg
- 数量规则：记录隔油产生的废猪脂的计量质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_and_wastewater_management_wastewater_output_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

##### 基本流

###### 化学需氧量排放（`sanitation_and_wastewater_management_chemical_oxygen_demand_water`）

将任何场内处理后排入受纳水体的化学需氧量作为独立基本流记录。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：依据匹配的出水体积与浓度记录，按 calc_wastewater_pollutant_load 计算化学需氧量排放；不得采用默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_effluent_sampling_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 生化需氧量排放（`sanitation_and_wastewater_management_biochemical_oxygen_demand_water`）

将任何场内处理后排入受纳水体的生化需氧量作为独立基本流记录。

- 选定流：Biochemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：依据匹配的出水体积与浓度记录，按 calc_wastewater_pollutant_load 计算生化需氧量排放；不得采用默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_effluent_sampling_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 悬浮物排放（`sanitation_and_wastewater_management_suspended_solids_water`）

将任何场内处理后排入受纳水体的悬浮物作为独立基本流记录。

- 选定流：Suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：依据匹配的出水体积与浓度记录，按 calc_wastewater_pollutant_load 计算悬浮物排放；不得采用默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_effluent_sampling_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 以氮计铵排放（`sanitation_and_wastewater_management_ammonium_as_n_water`）

将任何场内处理后排入受纳水体的以氮计铵作为独立基本流记录。

- 选定流：Ammonium, as nitrogen, to water
- 流属性/单位：Mass / kg
- 数量规则：依据匹配的出水体积与浓度记录，按 calc_wastewater_pollutant_load 计算以氮计铵排放；不得采用默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_effluent_sampling_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 以氮计硝酸盐排放（`sanitation_and_wastewater_management_nitrate_as_n_water`）

将任何场内处理后排入受纳水体的以氮计硝酸盐作为独立基本流记录。

- 选定流：Nitrate, as nitrogen, to water
- 流属性/单位：Mass / kg
- 数量规则：依据匹配的出水体积与浓度记录，按 calc_wastewater_pollutant_load 计算以氮计硝酸盐排放；不得采用默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_effluent_sampling_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 以氮计亚硝酸盐排放（`sanitation_and_wastewater_management_nitrite_as_n_water`）

将任何场内处理后排入受纳水体的以氮计亚硝酸盐作为独立基本流记录。

- 选定流：Nitrite, as nitrogen, to water
- 流属性/单位：Mass / kg
- 数量规则：依据匹配的出水体积与浓度记录，按 calc_wastewater_pollutant_load 计算以氮计亚硝酸盐排放；不得采用默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_effluent_sampling_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 以磷计磷酸盐排放（`sanitation_and_wastewater_management_phosphate_as_p_water`）

将任何场内处理后排入受纳水体的以磷计磷酸盐作为独立基本流记录。

- 选定流：Phosphate, as phosphorus, to water
- 流属性/单位：Mass / kg
- 数量规则：依据匹配的出水体积与浓度记录，按 calc_wastewater_pollutant_load 计算以磷计磷酸盐排放；不得采用默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_effluent_sampling_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 氯化物排放（`sanitation_and_wastewater_management_chloride_water`）

将任何场内处理后排入受纳水体的氯化物作为独立基本流记录。

- 选定流：Chloride to water
- 流属性/单位：Mass / kg
- 数量规则：依据匹配的出水体积与浓度记录，按 calc_wastewater_pollutant_load 计算氯化物排放；不得采用默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_effluent_sampling_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的直接化石二氧化碳排放（`sanitation_and_wastewater_management_carbon_dioxide_fossil_air`）

仅记录由场内燃烧产生并分配至清洗消毒与废水管理的直接化石二氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的直接一氧化碳排放（`sanitation_and_wastewater_management_carbon_monoxide_air`）

仅记录由场内燃烧产生并分配至清洗消毒与废水管理的直接一氧化碳排放；排除能源供应上游排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的直接化石甲烷排放（`sanitation_and_wastewater_management_methane_fossil_air`）

仅记录由场内燃烧产生并分配至清洗消毒与废水管理的直接化石甲烷排放；排除能源供应上游排放。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的直接氧化亚氮排放（`sanitation_and_wastewater_management_nitrous_oxide_air`）

仅记录由场内燃烧产生并分配至清洗消毒与废水管理的直接氧化亚氮排放；排除能源供应上游排放。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的直接一氧化氮排放（`sanitation_and_wastewater_management_nitric_oxide_air`）

仅记录由场内燃烧产生并分配至清洗消毒与废水管理的直接一氧化氮排放；排除能源供应上游排放。

- 选定流：Nitric oxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的直接二氧化氮排放（`sanitation_and_wastewater_management_nitrogen_dioxide_air`）

仅记录由场内燃烧产生并分配至清洗消毒与废水管理的直接二氧化氮排放；排除能源供应上游排放。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的直接二氧化硫排放（`sanitation_and_wastewater_management_sulfur_dioxide_air`）

仅记录由场内燃烧产生并分配至清洗消毒与废水管理的直接二氧化硫排放；排除能源供应上游排放。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的直接小于 2.5 微米颗粒物排放（`sanitation_and_wastewater_management_pm_below_2_5_air`）

仅记录由场内燃烧产生并分配至清洗消毒与废水管理的直接小于 2.5 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`

###### 清洗消毒与废水管理的直接2.5 至 10 微米颗粒物排放（`sanitation_and_wastewater_management_pm_2_5_to_10_air`）

仅记录由场内燃烧产生并分配至清洗消毒与废水管理的直接2.5 至 10 微米颗粒物排放；排除能源供应上游排放。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：依据监测排放或已记录的单一燃料投入，按 calc_combustion_air_emissions 计算本阶段直接排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配至声明器官和市场状态后的每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_and_wastewater_management_air_emission_records`
- 来源：`eu-jrc-sa-bref`；`eu-pef-2021-2279`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground burden allocation | 在采用任何分配键前，优先细分可独立计量的器官整理、状态调理、包装、清洗和处理过程以避免分配。 | `eu-pef-2021-2279` |
| `allocation_direct_assignment` | direct process assignment | 记录允许时，将计量的电力、热载体、燃料、水、化学品、包装、废物与排放直接归属至造成该交换的过程及器官—状态批次。 | `eu-pef-2021-2279` |
| `allocation_slaughter_coproducts` | integrated slaughter | 将选定可食用器官、猪胴体及每个具有有益用途的具名输出分别视为屠宰共产品；判废或废弃输出保持为废物。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `allocation_slaughter_relation` | residual slaughter burden | 对无法分开的剩余屠宰负荷，在可证明时采用有文件支持的物理因果关系；无法证明时，对确切共产品采用报告期经济价值并披露敏感性。 | `eu-pef-2021-2279` |
| `allocation_no_defaults` | allocation factors | 依据前景共产品数量及采用时的同期价值计算分配份额；不得插入 PCR 默认份额或价格。 | `eu-pef-2021-2279` |
| `allocation_purchased_organ` | purchased-organ route | 外购器官采用供应商屠宰数据集中已披露的器官分配一次，接收方整理过程不得再次分配这些上游负荷。 | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | waste treatment | 将处理负荷归属于产生各具名废物或废水流的过程，除非必须采用有明确文件支持的全厂因果键；没有有记录的有益产品去向，不得把废物计作共产品并给予信用。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `allocation_mass_balance` | allocation verification | 将分配后的过程总量与未分配设施总量核对，并记录任何未分配差额、共享服务键与器官—状态分母。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pig_receipt_and_ante_mortem_animal_receipt_records` | `pig_receipt_and_ante_mortem` | 活猪接收与宰前处置 | 过磅与检验记录 | lot_id; supplier_id; receipt_time; animal_count; gross_mass; tare_mass; acceptance_status; disposition | 按批次核对经校准地磅读数与兽医验收记录。 | kg and count | 每个接收批次 | 报告期内全部接收批次 | 报告设施 | 分别汇总合格与拒收质量并保留批次身份。 | 地磅校准；兽医记录；核对签字 |
| `cp_pig_receipt_and_ante_mortem_receipt_waste_records` | `pig_receipt_and_ante_mortem` | 接收废物质量与去向 | 废物称量与转运记录 | lot_id; waste_identity; measured_mass; container_tare; destination; dispatch_date | 逐项称量具名废物流并与转运记录核对。 | kg | 每批次或每次转运 | 全部纳入的接收操作 | 报告设施 | 按确切废物身份与去向分别汇总后再分配。 | 秤具校准；废物转移记录；质量平衡复核 |
| `cp_pig_receipt_and_ante_mortem_water_records` | `pig_receipt_and_ante_mortem` | 单一来源用水或取水 | 水表与分配记录 | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 读取经校准的来源特定水表，共用水表与操作记录核对。 | m3 | 连续或每生产班次 | 归属于本阶段的全部生产与清洗时段 | 报告设施及声明取水点 | 以期末减期初读数计算，仅用有文件支持的因果键分配。 | 水表校准；水表图；读数日志；核对记录 |
| `cp_pig_receipt_and_ante_mortem_electricity_records` | `pig_receipt_and_ante_mortem` | 电网电力消耗 | 电表与发票记录 | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 将本阶段分表读数与设施电费发票核对。 | kWh | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 按电表计算净用电，共用电量采用已披露因果键。 | 电表校准；发票核对；分表覆盖 |
| `cp_pig_receipt_and_ante_mortem_thermal_records` | `pig_receipt_and_ante_mortem` | 单一外购热载体消耗 | 热量计量与供应商记录 | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | 蒸汽与热水分别计量，仅依据记录的热力条件换算。 | MJ with original meter unit retained | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 逐种载体分别汇总，绝不合并蒸汽与热水。 | 仪表校准；供应商记录；换算工作表 |
| `cp_pig_receipt_and_ante_mortem_fuel_records` | `pig_receipt_and_ante_mortem` | 单一燃料消耗 | 燃料计量、发票与库存平衡记录 | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | 依据储罐、仪表与发票逐种燃料身份独立核对。 | kg or MJ as recorded | 每次交付及每月核对 | 归属于本阶段的全部燃料 | 报告设施 | 按燃料身份计算期初库存加接收量减期末库存。 | 储罐校准；发票；库存核对；燃料规格 |
| `cp_pig_receipt_and_ante_mortem_air_emission_records` | `pig_receipt_and_ante_mortem` | 单项直接燃烧排放 | 烟气监测或燃料法计算记录 | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | 优先采用匹配烟气监测；无监测时依据已记录活动量和已披露因子逐种污染物与燃料计算。 | kg | 每次监测及报告期计算 | 归属于本阶段的全部场内燃烧 | 报告设施直接释放 | 按污染物和阶段应用 calc_combustion_air_emissions，不纳入上游排放。 | 监测报告；燃料记录；因子出处；计算复核 |
| `cp_slaughter_and_organ_recovery_slaughter_mass_balance` | `slaughter_and_organ_recovery` | 屠宰投入、回收器官与共产品质量平衡 | 屠宰批次得率记录 | lot_id; accepted_live_mass; exact_output_identity; gross_output_mass; tare_mass; edible_status; destination; timestamp | 逐一称量每种器官与共产品，并与合格活猪投入核对。 | kg | 每个屠宰批次 | 报告期内全部一体化屠宰批次 | 报告屠宰线 | 按确切输出身份应用 calc_slaughter_mass_balance，并保留未核对质量调查。 | 秤具校准；兽医处置；签字质量平衡 |
| `cp_slaughter_and_organ_recovery_slaughter_waste_records` | `slaughter_and_organ_recovery` | 单项屠宰废物质量与去向 | 废物称量与转运记录 | lot_id; exact_waste_identity; measured_mass; destination; treatment_route; timestamp | 逐项称量具名屠宰废物，并与转运或处理记录核对。 | kg | 每批次或每次转运 | 全部一体化屠宰批次 | 报告屠宰线 | 按确切废物身份与去向汇总，禁止产品—废物重复计数。 | 秤具校准；处置记录；质量平衡核对 |
| `cp_slaughter_and_organ_recovery_wastewater_records` | `slaughter_and_organ_recovery` | 过程特定废水产生 | 废水计量或批次清洗记录 | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | 计量具名过程废水，或依据已核验批次清洗记录计算体积。 | m3 | 每批次或连续计量区间 | 全部纳入生产批次 | 报告设施 | 应用已记录的来源过程链接，避免与清洗用水重复计数。 | 仪表校准；清洗周期日志；来源流核对 |
| `cp_slaughter_and_organ_recovery_water_records` | `slaughter_and_organ_recovery` | 单一来源用水或取水 | 水表与分配记录 | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 读取经校准的来源特定水表，共用水表与操作记录核对。 | m3 | 连续或每生产班次 | 归属于本阶段的全部生产与清洗时段 | 报告设施及声明取水点 | 以期末减期初读数计算，仅用有文件支持的因果键分配。 | 水表校准；水表图；读数日志；核对记录 |
| `cp_slaughter_and_organ_recovery_electricity_records` | `slaughter_and_organ_recovery` | 电网电力消耗 | 电表与发票记录 | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 将本阶段分表读数与设施电费发票核对。 | kWh | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 按电表计算净用电，共用电量采用已披露因果键。 | 电表校准；发票核对；分表覆盖 |
| `cp_slaughter_and_organ_recovery_thermal_records` | `slaughter_and_organ_recovery` | 单一外购热载体消耗 | 热量计量与供应商记录 | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | 蒸汽与热水分别计量，仅依据记录的热力条件换算。 | MJ with original meter unit retained | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 逐种载体分别汇总，绝不合并蒸汽与热水。 | 仪表校准；供应商记录；换算工作表 |
| `cp_slaughter_and_organ_recovery_fuel_records` | `slaughter_and_organ_recovery` | 单一燃料消耗 | 燃料计量、发票与库存平衡记录 | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | 依据储罐、仪表与发票逐种燃料身份独立核对。 | kg or MJ as recorded | 每次交付及每月核对 | 归属于本阶段的全部燃料 | 报告设施 | 按燃料身份计算期初库存加接收量减期末库存。 | 储罐校准；发票；库存核对；燃料规格 |
| `cp_slaughter_and_organ_recovery_air_emission_records` | `slaughter_and_organ_recovery` | 单项直接燃烧排放 | 烟气监测或燃料法计算记录 | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | 优先采用匹配烟气监测；无监测时依据已记录活动量和已披露因子逐种污染物与燃料计算。 | kg | 每次监测及报告期计算 | 归属于本阶段的全部场内燃烧 | 报告设施直接释放 | 按污染物和阶段应用 calc_combustion_air_emissions，不纳入上游排放。 | 监测报告；燃料记录；因子出处；计算复核 |
| `cp_edible_organ_preparation_organ_mass_balance` | `edible_organ_preparation` | 接收、整理后与修整器官质量 | 器官批次质量平衡记录 | lot_id; exact_organ_identity; received_mass; prepared_mass; trimming_waste_mass; hold_or_drain_change; disposition | 在接收、整理后和每个剔除点称量同一种声明器官。 | kg | 每个器官批次 | 全部整理批次 | 报告整理线 | 一次仅对一种器官身份应用 calc_organ_preparation_mass_balance。 | 秤具校准；器官身份可追溯性；签字质量平衡 |
| `cp_edible_organ_preparation_preparation_waste_records` | `edible_organ_preparation` | 器官特定整理剔除质量 | 剔除物称量与去向记录 | lot_id; exact_organ_identity; reject_identity; measured_mass; destination; timestamp | 对声明器官分别称量修整物并记录最终去向。 | kg | 每个器官批次 | 全部整理批次 | 报告整理线 | 按确切器官和废物身份汇总，并与器官质量平衡核对。 | 秤具校准；处置记录；质量平衡复核 |
| `cp_edible_organ_preparation_wastewater_records` | `edible_organ_preparation` | 过程特定废水产生 | 废水计量或批次清洗记录 | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | 计量具名过程废水，或依据已核验批次清洗记录计算体积。 | m3 | 每批次或连续计量区间 | 全部纳入生产批次 | 报告设施 | 应用已记录的来源过程链接，避免与清洗用水重复计数。 | 仪表校准；清洗周期日志；来源流核对 |
| `cp_edible_organ_preparation_water_records` | `edible_organ_preparation` | 单一来源用水或取水 | 水表与分配记录 | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 读取经校准的来源特定水表，共用水表与操作记录核对。 | m3 | 连续或每生产班次 | 归属于本阶段的全部生产与清洗时段 | 报告设施及声明取水点 | 以期末减期初读数计算，仅用有文件支持的因果键分配。 | 水表校准；水表图；读数日志；核对记录 |
| `cp_edible_organ_preparation_electricity_records` | `edible_organ_preparation` | 电网电力消耗 | 电表与发票记录 | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 将本阶段分表读数与设施电费发票核对。 | kWh | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 按电表计算净用电，共用电量采用已披露因果键。 | 电表校准；发票核对；分表覆盖 |
| `cp_edible_organ_preparation_thermal_records` | `edible_organ_preparation` | 单一外购热载体消耗 | 热量计量与供应商记录 | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | 蒸汽与热水分别计量，仅依据记录的热力条件换算。 | MJ with original meter unit retained | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 逐种载体分别汇总，绝不合并蒸汽与热水。 | 仪表校准；供应商记录；换算工作表 |
| `cp_edible_organ_preparation_fuel_records` | `edible_organ_preparation` | 单一燃料消耗 | 燃料计量、发票与库存平衡记录 | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | 依据储罐、仪表与发票逐种燃料身份独立核对。 | kg or MJ as recorded | 每次交付及每月核对 | 归属于本阶段的全部燃料 | 报告设施 | 按燃料身份计算期初库存加接收量减期末库存。 | 储罐校准；发票；库存核对；燃料规格 |
| `cp_edible_organ_preparation_air_emission_records` | `edible_organ_preparation` | 单项直接燃烧排放 | 烟气监测或燃料法计算记录 | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | 优先采用匹配烟气监测；无监测时依据已记录活动量和已披露因子逐种污染物与燃料计算。 | kg | 每次监测及报告期计算 | 归属于本阶段的全部场内燃烧 | 报告设施直接释放 | 按污染物和阶段应用 calc_combustion_air_emissions，不纳入上游排放。 | 监测报告；燃料记录；因子出处；计算复核 |
| `cp_fresh_state_conditioning_state_mass_balance` | `fresh_state_conditioning` | 单一器官状态调理质量平衡 | 状态调理批次记录 | lot_id; exact_organ_identity; declared_state; input_mass; conforming_output_mass; reject_mass; start_time; end_time; temperature_record | 称量一种器官进入和离开恰好一条声明状态分支的质量，并保留温度—时间记录。 | kg and degrees Celsius with time | 每个状态调理批次 | 选定状态分支内全部批次 | 报告状态调理线 | 仅在选定器官—状态组合内应用 calc_state_conditioning_mass_balance。 | 秤具校准；温度记录仪校准；分支选择复核 |
| `cp_fresh_state_conditioning_state_waste_records` | `fresh_state_conditioning` | 器官—状态特定判废质量 | 剔除物称量与去向记录 | lot_id; exact_organ_identity; declared_state; measured_reject_mass; rejection_reason; destination | 针对确切器官—状态组合单独称量判废产品。 | kg | 每个调理批次 | 选定状态分支内全部批次 | 报告状态调理线 | 按确切器官、状态和去向汇总，并与状态质量平衡核对。 | 秤具校准；判废记录；去向证据 |
| `cp_fresh_state_conditioning_wastewater_records` | `fresh_state_conditioning` | 过程特定废水产生 | 废水计量或批次清洗记录 | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | 计量具名过程废水，或依据已核验批次清洗记录计算体积。 | m3 | 每批次或连续计量区间 | 全部纳入生产批次 | 报告设施 | 应用已记录的来源过程链接，避免与清洗用水重复计数。 | 仪表校准；清洗周期日志；来源流核对 |
| `cp_fresh_state_conditioning_water_records` | `fresh_state_conditioning` | 单一来源用水或取水 | 水表与分配记录 | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 读取经校准的来源特定水表，共用水表与操作记录核对。 | m3 | 连续或每生产班次 | 归属于本阶段的全部生产与清洗时段 | 报告设施及声明取水点 | 以期末减期初读数计算，仅用有文件支持的因果键分配。 | 水表校准；水表图；读数日志；核对记录 |
| `cp_fresh_state_conditioning_electricity_records` | `fresh_state_conditioning` | 电网电力消耗 | 电表与发票记录 | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 将本阶段分表读数与设施电费发票核对。 | kWh | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 按电表计算净用电，共用电量采用已披露因果键。 | 电表校准；发票核对；分表覆盖 |
| `cp_fresh_state_conditioning_thermal_records` | `fresh_state_conditioning` | 单一外购热载体消耗 | 热量计量与供应商记录 | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | 蒸汽与热水分别计量，仅依据记录的热力条件换算。 | MJ with original meter unit retained | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 逐种载体分别汇总，绝不合并蒸汽与热水。 | 仪表校准；供应商记录；换算工作表 |
| `cp_fresh_state_conditioning_fuel_records` | `fresh_state_conditioning` | 单一燃料消耗 | 燃料计量、发票与库存平衡记录 | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | 依据储罐、仪表与发票逐种燃料身份独立核对。 | kg or MJ as recorded | 每次交付及每月核对 | 归属于本阶段的全部燃料 | 报告设施 | 按燃料身份计算期初库存加接收量减期末库存。 | 储罐校准；发票；库存核对；燃料规格 |
| `cp_fresh_state_conditioning_air_emission_records` | `fresh_state_conditioning` | 单项直接燃烧排放 | 烟气监测或燃料法计算记录 | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | 优先采用匹配烟气监测；无监测时依据已记录活动量和已披露因子逐种污染物与燃料计算。 | kg | 每次监测及报告期计算 | 归属于本阶段的全部场内燃烧 | 报告设施直接释放 | 按污染物和阶段应用 calc_combustion_air_emissions，不纳入上游排放。 | 监测报告；燃料记录；因子出处；计算复核 |
| `cp_chilled_state_conditioning_state_mass_balance` | `chilled_state_conditioning` | 单一器官状态调理质量平衡 | 状态调理批次记录 | lot_id; exact_organ_identity; declared_state; input_mass; conforming_output_mass; reject_mass; start_time; end_time; temperature_record | 称量一种器官进入和离开恰好一条声明状态分支的质量，并保留温度—时间记录。 | kg and degrees Celsius with time | 每个状态调理批次 | 选定状态分支内全部批次 | 报告状态调理线 | 仅在选定器官—状态组合内应用 calc_state_conditioning_mass_balance。 | 秤具校准；温度记录仪校准；分支选择复核 |
| `cp_chilled_state_conditioning_state_waste_records` | `chilled_state_conditioning` | 器官—状态特定判废质量 | 剔除物称量与去向记录 | lot_id; exact_organ_identity; declared_state; measured_reject_mass; rejection_reason; destination | 针对确切器官—状态组合单独称量判废产品。 | kg | 每个调理批次 | 选定状态分支内全部批次 | 报告状态调理线 | 按确切器官、状态和去向汇总，并与状态质量平衡核对。 | 秤具校准；判废记录；去向证据 |
| `cp_chilled_state_conditioning_wastewater_records` | `chilled_state_conditioning` | 过程特定废水产生 | 废水计量或批次清洗记录 | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | 计量具名过程废水，或依据已核验批次清洗记录计算体积。 | m3 | 每批次或连续计量区间 | 全部纳入生产批次 | 报告设施 | 应用已记录的来源过程链接，避免与清洗用水重复计数。 | 仪表校准；清洗周期日志；来源流核对 |
| `cp_chilled_state_conditioning_water_records` | `chilled_state_conditioning` | 单一来源用水或取水 | 水表与分配记录 | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 读取经校准的来源特定水表，共用水表与操作记录核对。 | m3 | 连续或每生产班次 | 归属于本阶段的全部生产与清洗时段 | 报告设施及声明取水点 | 以期末减期初读数计算，仅用有文件支持的因果键分配。 | 水表校准；水表图；读数日志；核对记录 |
| `cp_chilled_state_conditioning_electricity_records` | `chilled_state_conditioning` | 电网电力消耗 | 电表与发票记录 | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 将本阶段分表读数与设施电费发票核对。 | kWh | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 按电表计算净用电，共用电量采用已披露因果键。 | 电表校准；发票核对；分表覆盖 |
| `cp_chilled_state_conditioning_thermal_records` | `chilled_state_conditioning` | 单一外购热载体消耗 | 热量计量与供应商记录 | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | 蒸汽与热水分别计量，仅依据记录的热力条件换算。 | MJ with original meter unit retained | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 逐种载体分别汇总，绝不合并蒸汽与热水。 | 仪表校准；供应商记录；换算工作表 |
| `cp_chilled_state_conditioning_fuel_records` | `chilled_state_conditioning` | 单一燃料消耗 | 燃料计量、发票与库存平衡记录 | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | 依据储罐、仪表与发票逐种燃料身份独立核对。 | kg or MJ as recorded | 每次交付及每月核对 | 归属于本阶段的全部燃料 | 报告设施 | 按燃料身份计算期初库存加接收量减期末库存。 | 储罐校准；发票；库存核对；燃料规格 |
| `cp_chilled_state_conditioning_air_emission_records` | `chilled_state_conditioning` | 单项直接燃烧排放 | 烟气监测或燃料法计算记录 | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | 优先采用匹配烟气监测；无监测时依据已记录活动量和已披露因子逐种污染物与燃料计算。 | kg | 每次监测及报告期计算 | 归属于本阶段的全部场内燃烧 | 报告设施直接释放 | 按污染物和阶段应用 calc_combustion_air_emissions，不纳入上游排放。 | 监测报告；燃料记录；因子出处；计算复核 |
| `cp_chilled_state_conditioning_refrigerant_records` | `chilled_state_conditioning` | 单一制冷剂充注、补充、回收与释放平衡 | 制冷维护与库存记录 | equipment_id; exact_refrigerant_identity; opening_charge; make_up_mass; recovered_mass; closing_charge; service_date; supplier_composition | 依据维护日志和库存记录逐种安装制冷剂分别核对。 | kg | 每次维护及年度核对 | 归属于本阶段的全部制冷设备 | 报告设施 | 按确切物质应用 calc_refrigerant_mass_balance；R-404A 组分采用供应商组成。 | 维护证书；钢瓶秤校准；库存核对；供应商规格 |
| `cp_frozen_state_conditioning_state_mass_balance` | `frozen_state_conditioning` | 单一器官状态调理质量平衡 | 状态调理批次记录 | lot_id; exact_organ_identity; declared_state; input_mass; conforming_output_mass; reject_mass; start_time; end_time; temperature_record | 称量一种器官进入和离开恰好一条声明状态分支的质量，并保留温度—时间记录。 | kg and degrees Celsius with time | 每个状态调理批次 | 选定状态分支内全部批次 | 报告状态调理线 | 仅在选定器官—状态组合内应用 calc_state_conditioning_mass_balance。 | 秤具校准；温度记录仪校准；分支选择复核 |
| `cp_frozen_state_conditioning_state_waste_records` | `frozen_state_conditioning` | 器官—状态特定判废质量 | 剔除物称量与去向记录 | lot_id; exact_organ_identity; declared_state; measured_reject_mass; rejection_reason; destination | 针对确切器官—状态组合单独称量判废产品。 | kg | 每个调理批次 | 选定状态分支内全部批次 | 报告状态调理线 | 按确切器官、状态和去向汇总，并与状态质量平衡核对。 | 秤具校准；判废记录；去向证据 |
| `cp_frozen_state_conditioning_wastewater_records` | `frozen_state_conditioning` | 过程特定废水产生 | 废水计量或批次清洗记录 | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | 计量具名过程废水，或依据已核验批次清洗记录计算体积。 | m3 | 每批次或连续计量区间 | 全部纳入生产批次 | 报告设施 | 应用已记录的来源过程链接，避免与清洗用水重复计数。 | 仪表校准；清洗周期日志；来源流核对 |
| `cp_frozen_state_conditioning_water_records` | `frozen_state_conditioning` | 单一来源用水或取水 | 水表与分配记录 | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 读取经校准的来源特定水表，共用水表与操作记录核对。 | m3 | 连续或每生产班次 | 归属于本阶段的全部生产与清洗时段 | 报告设施及声明取水点 | 以期末减期初读数计算，仅用有文件支持的因果键分配。 | 水表校准；水表图；读数日志；核对记录 |
| `cp_frozen_state_conditioning_electricity_records` | `frozen_state_conditioning` | 电网电力消耗 | 电表与发票记录 | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 将本阶段分表读数与设施电费发票核对。 | kWh | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 按电表计算净用电，共用电量采用已披露因果键。 | 电表校准；发票核对；分表覆盖 |
| `cp_frozen_state_conditioning_thermal_records` | `frozen_state_conditioning` | 单一外购热载体消耗 | 热量计量与供应商记录 | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | 蒸汽与热水分别计量，仅依据记录的热力条件换算。 | MJ with original meter unit retained | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 逐种载体分别汇总，绝不合并蒸汽与热水。 | 仪表校准；供应商记录；换算工作表 |
| `cp_frozen_state_conditioning_fuel_records` | `frozen_state_conditioning` | 单一燃料消耗 | 燃料计量、发票与库存平衡记录 | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | 依据储罐、仪表与发票逐种燃料身份独立核对。 | kg or MJ as recorded | 每次交付及每月核对 | 归属于本阶段的全部燃料 | 报告设施 | 按燃料身份计算期初库存加接收量减期末库存。 | 储罐校准；发票；库存核对；燃料规格 |
| `cp_frozen_state_conditioning_air_emission_records` | `frozen_state_conditioning` | 单项直接燃烧排放 | 烟气监测或燃料法计算记录 | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | 优先采用匹配烟气监测；无监测时依据已记录活动量和已披露因子逐种污染物与燃料计算。 | kg | 每次监测及报告期计算 | 归属于本阶段的全部场内燃烧 | 报告设施直接释放 | 按污染物和阶段应用 calc_combustion_air_emissions，不纳入上游排放。 | 监测报告；燃料记录；因子出处；计算复核 |
| `cp_frozen_state_conditioning_refrigerant_records` | `frozen_state_conditioning` | 单一制冷剂充注、补充、回收与释放平衡 | 制冷维护与库存记录 | equipment_id; exact_refrigerant_identity; opening_charge; make_up_mass; recovered_mass; closing_charge; service_date; supplier_composition | 依据维护日志和库存记录逐种安装制冷剂分别核对。 | kg | 每次维护及年度核对 | 归属于本阶段的全部制冷设备 | 报告设施 | 按确切物质应用 calc_refrigerant_mass_balance；R-404A 组分采用供应商组成。 | 维护证书；钢瓶秤校准；库存核对；供应商规格 |
| `cp_packaging_storage_and_release_release_mass_records` | `packaging_storage_and_release` | 进入包装放行的一种器官—状态产品 | 批次放行与称量记录 | lot_id; exact_organ_identity; declared_state; input_net_mass; reject_mass; released_net_mass; packaging_mass; release_time | 放行时分别称量确切器官—状态产品和包装。 | kg | 每个放行批次 | 全部参考产品批次 | 报告包装与放行线 | 仅对净产品质量应用 calc_reference_product_normalization。 | 秤具校准；批次放行证书；产品—包装皮重记录 |
| `cp_packaging_storage_and_release_release_waste_records` | `packaging_storage_and_release` | 器官—状态特定放行判废质量 | 放行判废与去向记录 | lot_id; exact_organ_identity; declared_state; reject_mass; rejection_reason; destination | 针对确切器官—状态组合单独称量放行判废物。 | kg | 每个放行批次 | 全部参考产品批次 | 报告包装与放行线 | 按确切器官、状态和去向汇总，并与放行质量核对。 | 秤具校准；放行记录；去向证据 |
| `cp_packaging_storage_and_release_packaging_bom_records` | `packaging_storage_and_release` | 单一包装组件投入 | 产品特定包装物料清单与领用记录 | lot_id; packaging_component_identity; supplier; item_count; unit_mass; total_mass; recycled_content_if_claimed | 将领用包装与产品特定物料清单及实测或供应商声明单件质量核对。 | kg and item count | 每个包装规格及放行批次 | 参考产品使用的全部包装 | 报告包装线 | 逐个具名组件计算质量，并从参考产品净质量中排除包装。 | 批准物料清单；供应商规格；称量或件数核对 |
| `cp_packaging_storage_and_release_packaging_waste_records` | `packaging_storage_and_release` | 单一包装组件废物质量 | 包装判废与废物转运记录 | lot_id; exact_component_identity; measured_waste_mass; destination; timestamp | 按确切组件身份分别称量废弃包装。 | kg | 每班次或每次转运 | 全部包装操作 | 报告包装线 | 按确切组件与去向汇总，并与包装领用量核对。 | 秤具校准；转运记录；包装质量平衡 |
| `cp_packaging_storage_and_release_reference_release_records` | `packaging_storage_and_release` | 参考产品净放行与归一化 | 最终放行与归一化记录 | lot_id; exact_organ_identity; declared_state; conforming_net_mass; packaging_mass; reference_normalization_factor; release_specification | 核验一种器官和一种状态，排除包装质量，再将合格净质量归一化为 1 kg。 | kg | 每个放行批次及报告期汇总 | 全部参考产品批次 | 报告包装与放行线 | 应用 calc_reference_product_normalization，不得合并器官或状态身份。 | 放行证书；秤具校准；分支选择检查；归一化工作表 |
| `cp_packaging_storage_and_release_water_records` | `packaging_storage_and_release` | 单一来源用水或取水 | 水表与分配记录 | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 读取经校准的来源特定水表，共用水表与操作记录核对。 | m3 | 连续或每生产班次 | 归属于本阶段的全部生产与清洗时段 | 报告设施及声明取水点 | 以期末减期初读数计算，仅用有文件支持的因果键分配。 | 水表校准；水表图；读数日志；核对记录 |
| `cp_packaging_storage_and_release_electricity_records` | `packaging_storage_and_release` | 电网电力消耗 | 电表与发票记录 | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 将本阶段分表读数与设施电费发票核对。 | kWh | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 按电表计算净用电，共用电量采用已披露因果键。 | 电表校准；发票核对；分表覆盖 |
| `cp_packaging_storage_and_release_thermal_records` | `packaging_storage_and_release` | 单一外购热载体消耗 | 热量计量与供应商记录 | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | 蒸汽与热水分别计量，仅依据记录的热力条件换算。 | MJ with original meter unit retained | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 逐种载体分别汇总，绝不合并蒸汽与热水。 | 仪表校准；供应商记录；换算工作表 |
| `cp_packaging_storage_and_release_fuel_records` | `packaging_storage_and_release` | 单一燃料消耗 | 燃料计量、发票与库存平衡记录 | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | 依据储罐、仪表与发票逐种燃料身份独立核对。 | kg or MJ as recorded | 每次交付及每月核对 | 归属于本阶段的全部燃料 | 报告设施 | 按燃料身份计算期初库存加接收量减期末库存。 | 储罐校准；发票；库存核对；燃料规格 |
| `cp_packaging_storage_and_release_air_emission_records` | `packaging_storage_and_release` | 单项直接燃烧排放 | 烟气监测或燃料法计算记录 | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | 优先采用匹配烟气监测；无监测时依据已记录活动量和已披露因子逐种污染物与燃料计算。 | kg | 每次监测及报告期计算 | 归属于本阶段的全部场内燃烧 | 报告设施直接释放 | 按污染物和阶段应用 calc_combustion_air_emissions，不纳入上游排放。 | 监测报告；燃料记录；因子出处；计算复核 |
| `cp_packaging_storage_and_release_refrigerant_records` | `packaging_storage_and_release` | 单一制冷剂充注、补充、回收与释放平衡 | 制冷维护与库存记录 | equipment_id; exact_refrigerant_identity; opening_charge; make_up_mass; recovered_mass; closing_charge; service_date; supplier_composition | 依据维护日志和库存记录逐种安装制冷剂分别核对。 | kg | 每次维护及年度核对 | 归属于本阶段的全部制冷设备 | 报告设施 | 按确切物质应用 calc_refrigerant_mass_balance；R-404A 组分采用供应商组成。 | 维护证书；钢瓶秤校准；库存核对；供应商规格 |
| `cp_sanitation_and_wastewater_management_wastewater_balance_records` | `sanitation_and_wastewater_management` | 来源分离废水转移平衡 | 来源流仪表与转移记录 | source_process; exact_stream_identity; source_volume; transferred_volume; bypass_volume; destination; timestamp | 逐项核对每股具名来源流从产生到场内管理的体积。 | m3 | 每批次或连续区间 | 全部纳入废水流 | 报告设施 | 逐股平衡来源流并调查差异。 | 仪表校准；流程图；转移核对 |
| `cp_sanitation_and_wastewater_management_chemical_dosing_records` | `sanitation_and_wastewater_management` | 单一清洗、消毒或处理化学品投加 | 化学品领用与投加记录 | exact_chemical_identity; formulation_concentration; batch_or_meter_id; issued_mass; returned_mass; dose_time; target_operation | 依据库房领用、退库和投加记录逐种配方身份分别核对。 | kg formulated product | 每次投加及每月库存核对 | 全部清洗、消毒与场内处理操作 | 报告设施 | 按确切配方计算领用减退回质量，并将有效浓度保留为元数据。 | 供应商 SDS 或规格；投加校准；库存核对 |
| `cp_sanitation_and_wastewater_management_wastewater_output_records` | `sanitation_and_wastewater_management` | 单项废水处理输出质量或体积 | 处理输出与去向记录 | exact_output_identity; measured_mass_or_volume; sampling_or_dispatch_time; destination; treatment_status | 在处理点或转运点分别计量每项输出。 | kg or m3 as applicable | 每批次、采样事件或转运 | 全部场内废水管理 | 报告设施 | 按确切输出身份与去向汇总，不得将不同流净额相抵。 | 仪表或秤具校准；转运记录；处理日志 |
| `cp_sanitation_and_wastewater_management_effluent_sampling_records` | `sanitation_and_wastewater_management` | 单项出水污染物负荷 | 匹配的出水流量与实验室结果 | sample_id; pollutant_identity; concentration; concentration_unit; effluent_volume; discharge_compartment; sample_time; laboratory_method | 将有代表性的污染物浓度与对应排放出水体积匹配。 | kg after conversion | 每个规定采样事件及报告期计算 | 全部处理后或未处理排放出水 | 报告设施排放点 | 逐种污染物和受纳隔室应用 calc_wastewater_pollutant_load。 | 认可实验室报告；样品交接链；流量计校准；计算复核 |
| `cp_sanitation_and_wastewater_management_water_records` | `sanitation_and_wastewater_management` | 单一来源用水或取水 | 水表与分配记录 | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 读取经校准的来源特定水表，共用水表与操作记录核对。 | m3 | 连续或每生产班次 | 归属于本阶段的全部生产与清洗时段 | 报告设施及声明取水点 | 以期末减期初读数计算，仅用有文件支持的因果键分配。 | 水表校准；水表图；读数日志；核对记录 |
| `cp_sanitation_and_wastewater_management_electricity_records` | `sanitation_and_wastewater_management` | 电网电力消耗 | 电表与发票记录 | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | 将本阶段分表读数与设施电费发票核对。 | kWh | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 按电表计算净用电，共用电量采用已披露因果键。 | 电表校准；发票核对；分表覆盖 |
| `cp_sanitation_and_wastewater_management_thermal_records` | `sanitation_and_wastewater_management` | 单一外购热载体消耗 | 热量计量与供应商记录 | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | 蒸汽与热水分别计量，仅依据记录的热力条件换算。 | MJ with original meter unit retained | 连续或每生产班次 | 归属于本阶段的全部运行时段 | 报告设施 | 逐种载体分别汇总，绝不合并蒸汽与热水。 | 仪表校准；供应商记录；换算工作表 |
| `cp_sanitation_and_wastewater_management_fuel_records` | `sanitation_and_wastewater_management` | 单一燃料消耗 | 燃料计量、发票与库存平衡记录 | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | 依据储罐、仪表与发票逐种燃料身份独立核对。 | kg or MJ as recorded | 每次交付及每月核对 | 归属于本阶段的全部燃料 | 报告设施 | 按燃料身份计算期初库存加接收量减期末库存。 | 储罐校准；发票；库存核对；燃料规格 |
| `cp_sanitation_and_wastewater_management_air_emission_records` | `sanitation_and_wastewater_management` | 单项直接燃烧排放 | 烟气监测或燃料法计算记录 | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | 优先采用匹配烟气监测；无监测时依据已记录活动量和已披露因子逐种污染物与燃料计算。 | kg | 每次监测及报告期计算 | 归属于本阶段的全部场内燃烧 | 报告设施直接释放 | 按污染物和阶段应用 calc_combustion_air_emissions，不纳入上游排放。 | 监测报告；燃料记录；因子出处；计算复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_receipt_mass_balance` | pig_receipt_and_ante_mortem | 合格活猪质量等于接收活猪计量质量减去接收时死亡猪与判废猪质量；猪粪和垫料不计入动物质量。 | received live-pig mass; dead-pig mass; condemned-pig mass | accepted live-pig mass | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `calc_slaughter_mass_balance` | slaughter_and_organ_recovery | 将合格活猪质量与各自称量的器官、胴体、共产品和废物核对；在分配前调查并披露任何未核对质量。 | accepted live-pig mass; exact organ masses; carcass mass; co-product masses; waste masses | reconciled slaughter mass balance by exact output identity | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `calc_organ_preparation_mass_balance` | edible_organ_preparation | 对声明的一种器官，整理后质量等于接收回收器官质量减去单独记录的修整剔除物和其他实测质量损失，并披露保留水分或沥水变化。 | received exact-organ mass; exact-organ trimming waste; measured drain or moisture change | prepared exact-organ mass | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `calc_state_conditioning_mass_balance` | fresh_state_conditioning; chilled_state_conditioning; frozen_state_conditioning | 在恰好一条选定状态分支内，合格器官输出等于整理后器官投入减去状态特定判废物及实测调理质量变化；不得合并状态。 | prepared exact-organ mass; state-specific reject mass; measured conditioning mass change | conforming exact-organ mass in the declared state | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `calc_combustion_air_emissions` | direct on-site combustion emissions | 将每种具名污染物分别按匹配的烟气浓度乘排气体积计算；无监测时，可用一种确切燃料量乘已披露的认可因子计算；仅分配本阶段直接份额。 | pollutant-specific stack records or exact fuel quantity and disclosed factor; stage allocation key | stage-specific mass of one direct air pollutant | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `calc_refrigerant_mass_balance` | chilled_state_conditioning; frozen_state_conditioning; packaging_storage_and_release | 对每种确切制冷剂物质，释放量等于期初充注量加补充量减回收量和期末充注量，仅按有记录的转移调整；R-404A 组分排放采用供应商组成。 | opening charge; make-up; recovered mass; closing charge; documented transfers; supplier composition | mass released for one refrigerant substance | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `calc_wastewater_pollutant_load` | sanitation_and_wastewater_management | 对每种具名污染物和排放隔室，负荷等于匹配浓度乘排放出水体积并换算单位；仅在存在匹配进出水记录时才可扣除处理去除量。 | pollutant concentration; matched effluent volume; unit conversion; discharge compartment | mass of one pollutant discharged to water | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `calc_reference_product_normalization` | reference product release | 核验一种声明器官及鲜、冷藏或冷冻中恰好一条分支，从放行毛质量中扣除包装质量，再将所有已分配前景交换除以合格产品净质量，报告恰好 1 kg。 | exact organ identity; declared state; gross release mass; packaging mass; allocated foreground exchanges | inventory normalized to 1 kg net conforming reference product | `unsd-cpc-21153`；`eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 为每个批次保留确切猪器官身份、合法可食用状态、产品形态和一种市场状态。 | 批次规格；法定放行记录；器官—状态追溯 |
| `dq_route_traceability` | route start | 保留路线从合格活猪或外购已回收器官开始的声明，并链接相应上游数据集。 | 供应商数据集或一体化屠宰批次链接 |
| `dq_temporal_coverage` | all foreground records | 覆盖有代表性的报告期，并披露停机、季节性模式与缺失时段。 | 带日期的仪表、批次、发票与生产记录 |
| `dq_meter_quality` | mass, water and energy | 使用经校准设备，保留原始单位，并记录共用仪表分配键。 | 校准证书；仪表图；核对记录 |
| `dq_mass_balance` | material transformation | 按确切身份完成接收、适用时的屠宰、器官、状态与放行质量平衡。 | 签字平衡工作表；差异调查 |
| `dq_cold_chain` | chilled and frozen routes | 保留经校准的温度—时间记录、制冷设备身份与维护历史。 | 温度记录仪文件；维护证书 |
| `dq_packaging` | packaging | 保留产品特定物料清单、供应商规格、组件质量与包装废物去向。 | 批准物料清单；供应商声明；废物转运记录 |
| `dq_wastewater` | wastewater and pollutants | 保留流来源、体积、处理状态、采样方法、实验室结果与排放隔室。 | 流量记录；实验室报告；样品交接链 |
| `dq_allocation` | shared and co-product burdens | 保留未分配总量、直接归属、分配键、确切共产品数量及任何采用的经济价值。 | 分配工作表；销售或转移记录；敏感性披露 |
| `dq_completeness` | LCI coverage | 核对材料、水、能源、燃料、制冷剂、包装、产品、共产品、废物与排放记录；披露每项适用缺失。 | PEF 完整性检查表；设施核对 |
| `dq_supplier_data` | purchased organ and packaging | 为链接的上游数据集或规格记录供应商、地理、期间、技术、分配与质量元数据。 | 供应商数据集与质量复核 |
| `dq_change_control` | dataset maintenance | 保留器官范围、状态、路线、技术、制冷剂、包装、处理或分配变化的版本记录。 | 变更日志；批准记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | 参考对象必须采用 UUID 17a80845-90d9-42a4-8a70-fee47fe2b380、质量属性 UUID 93a60a56-a3c8-11da-a746-0800200b9a66、质量单位组 UUID 93a60a57-a4c8-11da-a746-0800200c9a66 及单位 kg。 | `unsd-cpc-21153` |
| `validation_reference_amount` | reference amount | 要求恰好 1 kg 净合格产品，并核验包装质量已排除。 | `eu-pef-2021-2279` |
| `validation_single_organ` | organ identity | 要求声明恰好一种猪器官身份；凡在参考量下合并多种器官身份的数据集均应拒绝。 | `unsd-cpc-21153`；`eu-pef-2021-2279` |
| `validation_single_state` | market state | 要求鲜、冷藏或冷冻中恰好一条分支；同时或含糊记录多条状态分支应拒绝。 | `unsd-cpc-21153`；`eu-pef-2021-2279` |
| `validation_route_exclusivity` | production route | 要求恰好一个路线起点；同一器官质量不得同时纳入外购已回收器官投入与一体化屠宰上游负荷。 | `eu-pef-2021-2279` |
| `validation_process_map` | process coverage | 要求提供 edible_organ_preparation、packaging_storage_and_release、sanitation_and_wastewater_management 以及适用路线和状态过程的详细清单。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `validation_atomic_selected_flow` | inventory identity | 除已核验类别参考流外，每个选定流必须描述一个具体交换；集合标签、选择指令与合并载能品应拒绝。 | `eu-pef-2021-2279` |
| `validation_uuid_policy` | Tiangong identity | 本候选 PCR 仅接受三个已核验参考 UUID；任何后续非参考 UUID 只有在精确 hybrid 匹配且直接读取到公开 state=100 记录后方可写入。 |  |
| `validation_mass_balance` | mass balance | 要求接收、适用时的屠宰、器官整理、选定状态与放行质量平衡全部核对，并调查差异。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `validation_energy_separation` | energy inventory | 在发生消耗的各处，电网电力、外购蒸汽、外购热水、天然气、柴油与液化石油气必须分别记录。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `validation_refrigerant` | refrigeration inventory | 对冷藏、冷冻及适用的状态控制储存，要求确切安装制冷剂身份、补充量和物质特定释放平衡；未指明制冷剂的总量应拒绝。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `validation_packaging` | packaging inventory | 要求每个使用的包装组件与每项产生的包装组件废物分别记录，并与产品特定物料清单核对。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `validation_wastewater` | wastewater inventory | 要求每股废水流、每项处理输出与每种排放污染物分别记录；污染物负荷应匹配浓度与体积。 | `eu-jrc-sa-bref`；`eu-pef-2021-2279` |
| `validation_no_defaults` | amount evidence | 拒绝类别默认量、无引用数值范围、模型估算和推理估算；要求由声明协议支持的 foreground_record 或 calculated_value。 | `eu-pef-2021-2279` |
| `validation_quality_disclosure` | data quality | 数据集放行前，必须披露报告期覆盖、地理、技术、分配、缺失数据、仪表、实验室、制冷剂与供应商数据质量。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种声明可食用猪器官在鲜、冷藏或冷冻中一种声明状态下的前景生产数据集。 |
| downstream_use | 经审查后，可在需要相同器官、状态、路线、地理、技术与期间的产品系统中用作 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 当参考身份、边界、分配、采集协议与质量披露均满足时，用于声明器官—状态组合的设施大门建模。 |
| excluded_use | 混合器官；混合鲜、冷藏与冷冻状态；以猪肉或胴体为参考产品；加工或保藏器官食品；零售、使用或寿命终止建模；未经可比性审查的替代。 |
| required_metadata | PCR id；CPC 坐标；确切器官；合法可食用状态；市场状态；产品形态；净质量；温度—时间规格；包装物料清单；路线起点；设施；地理；期间；技术；制冷剂；废水处理；分配；上游数据集链接。 |
| required_quality_disclosure | 完整性；质量平衡核对；仪表与秤具校准；温度覆盖；供应商数据质量；实验室方法；缺失数据；分配敏感性；非参考 UUID 缺口；不确定性与审查状态。 |
| update_trigger | 器官范围、合法可食用状态、状态规格、路线起点、屠宰分配、过程技术、制冷剂、包装、清洗化学品、废水处理、数据期间或已核验天工身份发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-21153` | `dataset` | United Nations Statistics Division, CPC Version 3.0 retained structure CSV, subclass 21153. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 官方类别标题，以及范围限定为鲜、冷藏或冷冻状态的猪可食用内脏。 |
| `eu-jrc-sa-bref` | `official_guidance` | European Commission Joint Research Centre, JRC135916, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries. https://doi.org/10.2760/18199 | 动物接收、屠宰、器官回收、冷藏或冻结、储存、清洗、能源、共产品、废物、废水与直接排放的过程分解；不引入默认数量。 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279, consolidated Product Environmental Footprint method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定前景记录、完整 LCI 覆盖、分配层级、透明度、数据质量、计算与验证要求。 |
