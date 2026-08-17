---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 马及其他马科动物肉，冷冻

## 1. 范围与适用性

本 PCR 规范 CPC 3.0 子类 21138 马及其他马科动物冷冻肉的前景数据生产。范围覆盖报告设施放行的净合格冷冻肉，不包括鲜或冷藏马科动物肉和作为参考产品的食用内脏。类别边界依据 `un-cpc-3-0`，过程结构依据 `ec-jrc-sa-bref-2024`，前景清单完整性、分配、数据质量、透明度与核查规则依据 `eu-recommendation-2021-2279-pef`。

参考数量为 1 kg 净冷冻产品。马科动物养殖与入厂运输属于前景边界上游。出厂配送、零售、解冻、烹饪、使用与寿命终止属于下游。本 PCR 不提供来源衍生默认数量或作者估算范围。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-frozen |
| classification_refs | CPC 3.0 子类 21138，精确 |
| covered_products | CPC 21138 范围内的马及其他马科动物冷冻肉，须声明物种、胴体或分割形态及带骨状态 |
| excluded_products | 鲜或冷藏马科动物肉；食用内脏；非马科动物肉；CPC 21138 范围外的调制或保藏产品 |
| representative_product | 冷冻库放行时的净合格冷冻马科动物肉 |
| production_route | 活体动物接收；屠宰；放血；剥皮；去内脏；胴体整理；分割；预冷；冻结；包装；冷冻储存；卫生清洗；条件性场内废水处理 |
| market_state | 由报告设施放行的冷冻产品 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 冷冻库放行时的净合格马或其他马科动物冷冻肉 |
| How much | 1 kg 净产品，不含每项包装组件 |
| How well | 符合声明的商业与食品安全放行规范；声明物种、胴体或分割形态、带骨状态与放行时冷冻状态 |
| How long or cycle | 一个生产批次直至冷冻库放行；声明储存持续时间与放行条件 |
| reference_flow_link | 过程 `packaging_frozen_storage_and_release` 中的参考输出行 `pkg_reference_frozen_equine_meat` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg 净合格冷冻产品；不含包装质量 |
| Reference product flow | Meat of horses and other equines, frozen `b1d61fc0-90f2-4ef0-959b-b62596caca1a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | equine species; carcass or cut form; bone state; frozen state at release; reporting facility; geography; reporting period; frozen-storage duration; frozen-storage condition; packaging configuration; co-product status; allocation method |

构建前景数据包时，每项必需限定信息必须出现在数据集元数据、过程说明、参考流备注、产品说明或等效字段中。缺失任一限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 扣除每项包装组件后，将参考输出固定为恰好 1 kg 净合格冷冻肉。 |
| `product_mass` | 活体动物、胴体、肉、共产品、固体废物 | Mass | kg | 使用校准后的毛重、皮重与净重记录；相关时声明活重或湿物质基准。 |
| `water_volume` | 工艺用水与每项废水流 | Volume | m3 | 使用计量体积或有文件依据的阶段水平衡；每项产生端废水保持独立。 |
| `electricity_energy` | 阶段电力 | Energy | kWh | 每个过程阶段分别记录电力，并披露任何共用仪表分配驱动量。 |
| `purchased_steam_mass` | 外购蒸汽 | Mass | kg | 每阶段分别记录交付蒸汽质量；不得与热水或燃料合并。 |
| `purchased_hot_water_mass` | 外购热水 | Mass | kg | 每阶段分别记录交付热水质量；不得与蒸汽或燃料合并。 |
| `natural_gas_energy` | 天然气 | Energy | MJ | 使用声明的热值基准换算计量数量，并保留原始记录。 |
| `diesel_mass` | 柴油 | Mass | kg | 仅使用适用于该记录的有文件依据密度换算体积，并保留原始单位。 |
| `lpg_mass` | 液化石油气 | Mass | kg | 仅使用适用于该记录的有文件依据密度换算体积，并保留原始单位。 |
| `refrigerant_mass` | 每种制冷剂补充量与排放 | Mass | kg | 按阶段分别平衡每种具名制冷剂；不得使用默认泄漏率。 |
| `packaging_mass` | 每项包装投入或废物 | Mass | kg | 每种材料分别记录，并从 1 kg 净参考产品中扣除全部包装质量。 |
| `emission_mass` | 每项空气或水体排放 | Mass | kg or the card-specific equivalent | 依据匹配的前景记录分别计算每项具名排放，并披露单位与因子基准。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 在屠宰设施门口接收的活体马科动物，声明物种、供应批次、净活重与接收时间 |
| starting_condition_role | 前景产品投入；养殖与入厂运输作为链接的上游活动 |
| product_classification_scope | CPC 3.0 子类 21138 马及其他马科动物冷冻肉；排除鲜或冷藏马科动物肉与食用内脏 |
| recursive_input_rule | 同一类别的冷冻马科动物肉投入仅作为明确产品投入记录一次并链接其上游数据集；不得在前景系统内递归重入本 PCR |
| upstream_dataset_requirement | 研究向上游扩展时，链接动物养殖、饲料、兽医投入、死亡与入厂运输的透明上游数据集 |
| disclosure | 声明门口位置、马科动物物种、入厂状态、批次基准、前景起始时间、上游链接、排除项与数据缺口 |

### 规范性边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate_to_gate` | foreground_system_boundary | 前景边界始于屠宰设施门口接收活体马科动物，终于冷冻库放行 1 kg 净合格冷冻马科动物肉；纳入接收、屠宰、整理、分割、预冷、冻结、包装、冷冻储存、卫生清洗，以及条件性场内废水处理。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `sb_upstream_exclusions` | upstream_boundary | 马科动物养殖与入厂运输位于前景边界之外；从摇篮到工厂门研究应链接透明的上游数据集，不得将这些活动折入本前景过程记录。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `sb_downstream_exclusions` | downstream_boundary | 出厂配送、零售、解冻、烹饪、使用与寿命终止活动位于前景边界之外。 | `un-cpc-3-0`; `eu-recommendation-2021-2279-pef` |
| `sb_product_scope` | product_classification_scope | 参考产品为 CPC 3.0 子类 21138 马及其他马科动物冷冻肉；鲜或冷藏马科动物肉与食用内脏不得作为参考产品。 | `un-cpc-3-0` |
| `sb_same_category_recursion` | recursive_product_input | 若同一类别的冷冻马科动物肉投入进入前景系统，应作为明确产品投入记录一次并链接其上游数据集；不得在同一前景边界内对该投入递归套用本 PCR。 | `eu-recommendation-2021-2279-pef` |
| `sb_inventory_completeness` | foreground_inventory | 采集每个纳入过程的全部已知原材料、公用工程、产品、共产品、废物与基本交换；电力、蒸汽、热水、每种燃料、每种制冷剂、每种化学品、每种包装材料、每项废物与每项排放均须保持独立记录。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `sb_conditional_treatment` | onsite_wastewater_treatment | 仅当报告设施为范围内废水运行场内处理时纳入该过程；否则每项废水保持为离开前景系统的转移，并披露其去向。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `live_equine_receiving_and_lairage` | 活体马科动物接收与待宰 | `required` | 始终纳入，从设施门口接收到放行进入屠宰为止。 | 前景接收阶段 | kg 已接收活体马科动物 |
| `equine_slaughter_bleeding_skinning_evisceration` | 马科动物屠宰、放血、剥皮与去内脏 | `required` | 始终纳入屠宰以及胴体、血液、皮、器官与消化道内容物的初步分离。 | 前景屠宰阶段 | kg 马科动物胴体输出 |
| `equine_carcass_dressing_and_cutting` | 马科动物胴体整理与分割 | `required` | 始终纳入，从接收胴体到未冻结肉块放行进入预冷与冻结为止。 | 前景整理与分割阶段 | kg 未冻结马科动物肉块 |
| `prechilling_and_freezing` | 预冷与冻结 | `required` | 始终纳入，从接收未冻结肉块到冷冻肉放行进入包装为止。 | 前景冻结阶段 | kg 包装前冷冻马科动物肉 |
| `packaging_frozen_storage_and_release` | 包装、冷冻储存与放行 | `required` | 始终纳入，从接收冷冻肉到净产品在冷冻库门口放行为止。 | 前景包装与冷冻储存阶段 | 1 kg 净冷冻参考产品 |
| `cleaning_and_disinfection` | 清洗与消毒 | `required` | 始终纳入归属于范围内屠宰、分割、冻结、包装与储存作业的卫生清洗。 | 共享前景卫生阶段 | 1 kg 净冷冻参考产品 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 报告设施在排放或转移前处理任何范围内废水时纳入；否则记录每项离开前景系统的废水流。 | 条件性前景废水处理阶段 | 1 kg 净冷冻参考产品 |

### 过程：活体马科动物接收与待宰（`live_equine_receiving_and_lairage`）

#### 输入

##### 产品流

###### 设施门口接收的活体马科动物（`rec_live_equine_input`）

活体马科动物在屠宰设施门口跨入前景边界；物种与供应批次作为这一项投入的声明属性保留。

- 选定流：Live equine animal
- 流属性/单位：Mass / kg live weight
- 数量规则：依据校准衡器并扣除皮重，按批次记录经核实的净活重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰工艺用水（`rec_process_water`）

工艺用水进入活体马科动物接收与待宰边界，用于归属于该阶段的设备运行、冲洗或卫生作业。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录报告期内该阶段经计量或核对的耗水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰电网电力（`rec_electricity`）

电网电力进入活体马科动物接收与待宰边界，用于运行归属于该阶段的设备。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：记录阶段电表读数；仅有共用电表时，使用有文件依据的运行驱动量分配实测总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰外购蒸汽（`rec_purchased_steam`）

设施向活体马科动物接收与待宰阶段供应外购蒸汽时，该蒸汽进入本阶段边界。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：记录归属于该阶段的计量或供应商核对蒸汽质量；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰外购热水（`rec_purchased_hot_water`）

热水作为独立供应的公用工程进入活体马科动物接收与待宰阶段时，记录此外购热水。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：依据仪表、交付记录或有文件依据的平衡，记录归属于该阶段的热水质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰天然气（`rec_natural_gas`）

归属于活体马科动物接收与待宰阶段的设备直接燃烧天然气时，该天然气进入本阶段边界。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录燃料消耗量，并按声明的计量与热值基准换算为能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰柴油（`rec_diesel`）

归属于活体马科动物接收与待宰阶段的固定或移动设备在场内消耗柴油时，该柴油进入本阶段边界。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的领用或计量柴油质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰液化石油气（`rec_lpg`）

归属于活体马科动物接收与待宰阶段的设备在场内消耗液化石油气时，该燃料进入本阶段边界。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的交付或领用液化石油气质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行进入屠宰的已接收活体马科动物（`rec_accepted_live_equine`）

已接收动物作为定量内部产品离开接收阶段并转入屠宰阶段。

- 选定流：Accepted live equine animal
- 流属性/单位：Mass / kg live weight
- 数量规则：在记录接收拒收与死亡调整后，记录净已接收活重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 接收期间产生的死亡马科动物尸体（`rec_dead_equine_carcass`）

死亡马科动物尸体作为独立称量废物流离开接收阶段，并记录其处理去向。

- 选定流：Dead equine carcass from reception
- 流属性/单位：Mass / kg
- 数量规则：按事件记录实际尸体质量，或记录有文件依据的衡器质量平衡结果。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 待宰圈粪污（`rec_lairage_manure`）

待宰圈粪污在任何场外处理之前，作为独立固体或半固体废物流离开接收区域。

- 选定流：Lairage manure
- 流属性/单位：Mass / kg wet matter
- 数量规则：记录报告期内收集的湿质量及其有文件依据的去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 待宰圈冲洗废水（`rec_lairage_wash_wastewater`）

待宰圈冲洗废水在场内或场外处理之前，作为一项独立定量液体废物流离开接收阶段。

- 选定流：Lairage wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录计量排放体积，或依据该区域有文件依据的水平衡计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 活体马科动物接收与待宰化石二氧化碳排放（`rec_carbon_dioxide_to_air`）

化石二氧化碳排放由活体马科动物接收与待宰设备进入空气，作为一项独立基本流报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰氮氧化物排放（`rec_nitrogen_oxides_to_air`）

氮氧化物排放由活体马科动物接收与待宰设备进入空气，作为一项独立基本流报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰二氧化硫排放（`rec_sulfur_dioxide_to_air`）

二氧化硫排放由活体马科动物接收与待宰设备进入空气，作为一项独立基本流报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 活体马科动物接收与待宰细颗粒物排放（`rec_particulate_matter_to_air`）

细颗粒物排放由活体马科动物接收与待宰设备进入空气，作为一项独立基本流报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接收活体马科动物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_live_equine_receiving_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：马科动物屠宰、放血、剥皮与去内脏（`equine_slaughter_bleeding_skinning_evisceration`）

#### 输入

##### 产品流

###### 由接收阶段转入的已接收活体马科动物（`sla_accepted_live_equine`）

已接收活体动物作为由接收阶段转入的定量内部投入进入屠宰阶段。

- 选定流：Accepted live equine animal
- 流属性/单位：Mass / kg live weight
- 数量规则：使用按批次与接收阶段核对的已接收活重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏工艺用水（`sla_process_water`）

工艺用水进入马科动物屠宰、放血、剥皮与去内脏边界，用于归属于该阶段的设备运行、冲洗或卫生作业。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录报告期内该阶段经计量或核对的耗水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏电网电力（`sla_electricity`）

电网电力进入马科动物屠宰、放血、剥皮与去内脏边界，用于运行归属于该阶段的设备。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：记录阶段电表读数；仅有共用电表时，使用有文件依据的运行驱动量分配实测总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏外购蒸汽（`sla_purchased_steam`）

设施向马科动物屠宰、放血、剥皮与去内脏阶段供应外购蒸汽时，该蒸汽进入本阶段边界。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：记录归属于该阶段的计量或供应商核对蒸汽质量；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏外购热水（`sla_purchased_hot_water`）

热水作为独立供应的公用工程进入马科动物屠宰、放血、剥皮与去内脏阶段时，记录此外购热水。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：依据仪表、交付记录或有文件依据的平衡，记录归属于该阶段的热水质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏天然气（`sla_natural_gas`）

归属于马科动物屠宰、放血、剥皮与去内脏阶段的设备直接燃烧天然气时，该天然气进入本阶段边界。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录燃料消耗量，并按声明的计量与热值基准换算为能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏柴油（`sla_diesel`）

归属于马科动物屠宰、放血、剥皮与去内脏阶段的固定或移动设备在场内消耗柴油时，该柴油进入本阶段边界。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的领用或计量柴油质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏液化石油气（`sla_lpg`）

归属于马科动物屠宰、放血、剥皮与去内脏阶段的设备在场内消耗液化石油气时，该燃料进入本阶段边界。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的交付或领用液化石油气质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行进入整理的马科动物胴体（`sla_equine_carcass`）

经初步整理但尚未分割的马科动物胴体作为内部产品离开屠宰阶段并转入胴体整理。

- 选定流：Equine carcass
- 流属性/单位：Mass / kg
- 数量规则：在声明的胴体整理点之后按批次记录经核实的热胴体质量.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 回收的马科动物血液（`sla_equine_blood`）

仅在产品状态与去向有文件依据时，马科动物血液才作为独立回收共产品离开放血工序。

- 选定流：Equine blood
- 流属性/单位：Mass / kg
- 数量规则：记录交付至有文件依据产品去向的已收集血液质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 回收的马科动物生皮（`sla_raw_equine_hide`）

马科动物生皮在转入有文件依据的产品用途时，作为一项独立称量共产品离开剥皮工序。

- 选定流：Raw equine hide
- 流属性/单位：Mass / kg
- 数量规则：按批次记录扣除无关异物后的净皮质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 回收的马科动物食用器官（`sla_equine_edible_organs`）

马科动物食用器官在获准进入声明的产品去向时，作为一项隔离共产品流离开去内脏工序。

- 选定流：Equine edible organs
- 流属性/单位：Mass / kg
- 数量规则：依据检验与发运记录记录获准器官质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 废弃马科动物血液（`sla_discarded_equine_blood`）

未获产品接收的血液作为独立定量废物流离开放血工序。

- 选定流：Discarded equine blood
- 流属性/单位：Mass / kg
- 数量规则：依据批次或发运记录，记录隔离湿质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 不合格马科动物皮（`sla_rejected_equine_hide`）

未获产品使用接收的皮作为独立称量废物流离开剥皮工序。

- 选定流：Rejected equine hide
- 流属性/单位：Mass / kg
- 数量规则：依据批次或发运记录，记录隔离湿质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物非食用器官（`sla_inedible_equine_organs`）

被判定为非食用的器官作为一项独立记录废物流离开去内脏工序。

- 选定流：Inedible equine organs
- 流属性/单位：Mass / kg
- 数量规则：依据批次或发运记录，记录隔离湿质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胃内容物（`sla_equine_stomach_contents`）

胃内容物在处理前作为独立湿废物流离开去内脏工序。

- 选定流：Equine stomach contents
- 流属性/单位：Mass / kg
- 数量规则：依据批次或发运记录，记录隔离湿质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物肠内容物（`sla_equine_intestinal_contents`）

肠内容物在处理前作为独立湿废物流离开去内脏工序。

- 选定流：Equine intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：依据批次或发运记录，记录隔离湿质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 判废马科动物胴体（`sla_condemned_equine_carcass`）

屠宰时判废的胴体作为独立称量废物流离开，并记录其去向。

- 选定流：Condemned equine carcass
- 流属性/单位：Mass / kg
- 数量规则：依据批次或发运记录，记录隔离湿质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 高有机负荷屠宰废水（`sla_high_organic_load_wastewater`）

受血液污染的屠宰废水在处理前作为一项独立定量液体废物流离开本阶段。

- 选定流：High-organic-load slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录隔离流量计体积，或依据有文件依据的区域水平衡计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 马科动物屠宰、放血、剥皮与去内脏化石二氧化碳排放（`sla_carbon_dioxide_to_air`）

化石二氧化碳排放由马科动物屠宰、放血、剥皮与去内脏设备进入空气，作为一项独立基本流报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏氮氧化物排放（`sla_nitrogen_oxides_to_air`）

氮氧化物排放由马科动物屠宰、放血、剥皮与去内脏设备进入空气，作为一项独立基本流报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏二氧化硫排放（`sla_sulfur_dioxide_to_air`）

二氧化硫排放由马科动物屠宰、放血、剥皮与去内脏设备进入空气，作为一项独立基本流报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物屠宰、放血、剥皮与去内脏细颗粒物排放（`sla_particulate_matter_to_air`）

细颗粒物排放由马科动物屠宰、放血、剥皮与去内脏设备进入空气，作为一项独立基本流报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 马科动物胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_equine_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：马科动物胴体整理与分割（`equine_carcass_dressing_and_cutting`）

#### 输入

##### 产品流

###### 由屠宰阶段转入的马科动物胴体（`cut_equine_carcass`）

马科动物胴体作为由屠宰阶段转入的定量内部产品进入整理与分割阶段。

- 选定流：Equine carcass
- 流属性/单位：Mass / kg
- 数量规则：使用按批次与屠宰阶段核对的胴体质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割工艺用水（`cut_process_water`）

工艺用水进入马科动物胴体整理与分割边界，用于归属于该阶段的设备运行、冲洗或卫生作业。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录报告期内该阶段经计量或核对的耗水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割电网电力（`cut_electricity`）

电网电力进入马科动物胴体整理与分割边界，用于运行归属于该阶段的设备。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：记录阶段电表读数；仅有共用电表时，使用有文件依据的运行驱动量分配实测总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割外购蒸汽（`cut_purchased_steam`）

设施向马科动物胴体整理与分割阶段供应外购蒸汽时，该蒸汽进入本阶段边界。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：记录归属于该阶段的计量或供应商核对蒸汽质量；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割外购热水（`cut_purchased_hot_water`）

热水作为独立供应的公用工程进入马科动物胴体整理与分割阶段时，记录此外购热水。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：依据仪表、交付记录或有文件依据的平衡，记录归属于该阶段的热水质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割天然气（`cut_natural_gas`）

归属于马科动物胴体整理与分割阶段的设备直接燃烧天然气时，该天然气进入本阶段边界。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录燃料消耗量，并按声明的计量与热值基准换算为能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割柴油（`cut_diesel`）

归属于马科动物胴体整理与分割阶段的固定或移动设备在场内消耗柴油时，该柴油进入本阶段边界。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的领用或计量柴油质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割液化石油气（`cut_lpg`）

归属于马科动物胴体整理与分割阶段的设备在场内消耗液化石油气时，该燃料进入本阶段边界。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的交付或领用液化石油气质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行进入冻结的未冻结马科动物肉块（`cut_unfrozen_equine_meat`）

合格未冻结马科动物肉块作为内部产品离开分割阶段并转入预冷与冻结。

- 选定流：Unfrozen equine meat cuts
- 流属性/单位：Mass / kg
- 数量规则：按批次记录修整后、预冷前经核实的净肉质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 回收的马科动物脂肪（`cut_recovered_equine_fat`）

仅在有文件依据的产品去向接收时，隔离的马科动物脂肪才作为共产品离开分割阶段。

- 选定流：Recovered equine fat
- 流属性/单位：Mass / kg
- 数量规则：记录称量的获准脂肪质量及其发运去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 回收的马科动物骨（`cut_recovered_equine_bones`）

仅在有文件依据的产品去向接收时，隔离的马科动物骨才作为共产品离开分割阶段。

- 选定流：Recovered equine bones
- 流属性/单位：Mass / kg
- 数量规则：记录称量的获准骨质量及其发运去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 回收的马科动物食用肉修整料（`cut_edible_equine_trimmings`）

食用肉修整料在获准进入有文件依据的食品用途时，作为隔离共产品离开分割阶段。

- 选定流：Edible equine meat trimmings
- 流属性/单位：Mass / kg
- 数量规则：按批次记录称量的获准修整料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 马科动物非食用脂肪（`cut_inedible_equine_fat`）

未获产品接收的脂肪作为独立称量废物流离开分割阶段。

- 选定流：Inedible equine fat
- 流属性/单位：Mass / kg
- 数量规则：记录隔离湿质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废弃马科动物骨（`cut_discarded_equine_bones`）

未获产品接收的骨作为独立称量废物流离开分割阶段。

- 选定流：Discarded equine bones
- 流属性/单位：Mass / kg
- 数量规则：记录隔离湿质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 判废马科动物肉（`cut_condemned_equine_meat`）

整理或分割期间判废的肉作为独立称量废物流离开。

- 选定流：Condemned equine meat
- 流属性/单位：Mass / kg
- 数量规则：记录隔离湿质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物非食用肌肉组织（`cut_inedible_equine_muscle_tissue`）

修整期间去除的非食用肌肉组织作为一项独立记录固体废物流离开。

- 选定流：Inedible equine muscle tissue
- 流属性/单位：Mass / kg
- 数量规则：记录隔离湿质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 分割车间地面冲洗废水（`cut_floor_wash_wastewater`）

分割车间地面冲洗废水在处理前作为一项独立定量液体废物流离开本阶段。

- 选定流：Cutting-floor wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录计量排放体积，或依据有文件依据的分割区域水平衡计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 马科动物胴体整理与分割化石二氧化碳排放（`cut_carbon_dioxide_to_air`）

化石二氧化碳排放由马科动物胴体整理与分割设备进入空气，作为一项独立基本流报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割氮氧化物排放（`cut_nitrogen_oxides_to_air`）

氮氧化物排放由马科动物胴体整理与分割设备进入空气，作为一项独立基本流报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割二氧化硫排放（`cut_sulfur_dioxide_to_air`）

二氧化硫排放由马科动物胴体整理与分割设备进入空气，作为一项独立基本流报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 马科动物胴体整理与分割细颗粒物排放（`cut_particulate_matter_to_air`）

细颗粒物排放由马科动物胴体整理与分割设备进入空气，作为一项独立基本流报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未冻结马科动物肉块
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_equine_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：预冷与冻结（`prechilling_and_freezing`）

#### 输入

##### 产品流

###### 由分割阶段转入的未冻结马科动物肉块（`frz_unfrozen_equine_meat`）

未冻结马科动物肉块作为由分割阶段转入的定量内部产品进入预冷与冻结阶段。

- 选定流：Unfrozen equine meat cuts
- 流属性/单位：Mass / kg
- 数量规则：使用按批次与分割阶段核对的净肉质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结工艺用水（`frz_process_water`）

工艺用水进入预冷与冻结边界，用于归属于该阶段的设备运行、冲洗或卫生作业。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录报告期内该阶段经计量或核对的耗水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结电网电力（`frz_electricity`）

电网电力进入预冷与冻结边界，用于运行归属于该阶段的设备。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：记录阶段电表读数；仅有共用电表时，使用有文件依据的运行驱动量分配实测总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结外购蒸汽（`frz_purchased_steam`）

设施向预冷与冻结阶段供应外购蒸汽时，该蒸汽进入本阶段边界。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：记录归属于该阶段的计量或供应商核对蒸汽质量；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结外购热水（`frz_purchased_hot_water`）

热水作为独立供应的公用工程进入预冷与冻结阶段时，记录此外购热水。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：依据仪表、交付记录或有文件依据的平衡，记录归属于该阶段的热水质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结天然气（`frz_natural_gas`）

归属于预冷与冻结阶段的设备直接燃烧天然气时，该天然气进入本阶段边界。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录燃料消耗量，并按声明的计量与热值基准换算为能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结柴油（`frz_diesel`）

归属于预冷与冻结阶段的固定或移动设备在场内消耗柴油时，该柴油进入本阶段边界。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的领用或计量柴油质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结液化石油气（`frz_lpg`）

归属于预冷与冻结阶段的设备在场内消耗液化石油气时，该燃料进入本阶段边界。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的交付或领用液化石油气质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 氨制冷剂补充量（`frz_ammonia_refrigerant`）

仅当场址 R-717 回路发生有记录的补充时，氨制冷剂补充量才进入冻结边界。

- 选定流：Ammonia refrigerant (R-717)
- 流属性/单位：Mass / kg
- 数量规则：依据制冷剂维护日志记录归属于本阶段的采购或领用补充质量；仅在有系统完好记录时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### R-134a 制冷剂补充量（`frz_r134a_refrigerant`）

仅当场址 R-134a 回路发生有记录的补充时，R-134a 制冷剂补充量才进入冻结边界。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- 流属性/单位：Mass / kg
- 数量规则：依据制冷剂维护日志记录归属于本阶段的采购或领用补充质量；仅在有系统完好记录时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行进入包装的冷冻马科动物肉（`frz_frozen_equine_meat`）

合格冷冻马科动物肉作为内部产品离开冻结阶段并转入包装阶段。

- 选定流：Frozen equine meat before packaging
- 流属性/单位：Mass / kg
- 数量规则：按批次记录放行进入包装时经核实的冷冻肉净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 冻结设备除霜废水（`frz_freezer_defrost_wastewater`）

冻结设备除霜废水在处理前作为一项独立定量液体废物流离开冻结阶段。

- 选定流：Freezer defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录计量体积，或依据有文件依据的除霜周期用水记录计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 氨制冷剂排放（`frz_ammonia_to_air`）

氨制冷剂排放由冻结制冷回路进入空气，作为一项独立基本流报告。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：依据期初库存、记录补充量、期末库存与回收量计算阶段损失；不指定默认泄漏率。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### R-134a 制冷剂排放（`frz_r134a_to_air`）

R-134a 制冷剂排放由冻结制冷回路进入空气，作为一项独立基本流报告。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据期初库存、记录补充量、期末库存与回收量计算阶段损失；不指定默认泄漏率。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结化石二氧化碳排放（`frz_carbon_dioxide_to_air`）

化石二氧化碳排放由预冷与冻结设备进入空气，作为一项独立基本流报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结氮氧化物排放（`frz_nitrogen_oxides_to_air`）

氮氧化物排放由预冷与冻结设备进入空气，作为一项独立基本流报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结二氧化硫排放（`frz_sulfur_dioxide_to_air`）

二氧化硫排放由预冷与冻结设备进入空气，作为一项独立基本流报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结细颗粒物排放（`frz_particulate_matter_to_air`）

细颗粒物排放由预冷与冻结设备进入空气，作为一项独立基本流报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装前冷冻马科动物肉
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_prechilling_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：包装、冷冻储存与放行（`packaging_frozen_storage_and_release`）

#### 输入

##### 产品流

###### 由冻结阶段转入的冷冻马科动物肉（`pkg_frozen_equine_meat_input`）

冷冻马科动物肉作为由冻结阶段转入的定量内部产品进入包装阶段。

- 选定流：Frozen equine meat before packaging
- 流属性/单位：Mass / kg
- 数量规则：使用按批次与冻结阶段核对的冷冻肉净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行工艺用水（`pkg_process_water`）

工艺用水进入包装、冷冻储存与放行边界，用于归属于该阶段的设备运行、冲洗或卫生作业。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录报告期内该阶段经计量或核对的耗水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行电网电力（`pkg_electricity`）

电网电力进入包装、冷冻储存与放行边界，用于运行归属于该阶段的设备。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：记录阶段电表读数；仅有共用电表时，使用有文件依据的运行驱动量分配实测总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行外购蒸汽（`pkg_purchased_steam`）

设施向包装、冷冻储存与放行阶段供应外购蒸汽时，该蒸汽进入本阶段边界。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：记录归属于该阶段的计量或供应商核对蒸汽质量；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行外购热水（`pkg_purchased_hot_water`）

热水作为独立供应的公用工程进入包装、冷冻储存与放行阶段时，记录此外购热水。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：依据仪表、交付记录或有文件依据的平衡，记录归属于该阶段的热水质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行天然气（`pkg_natural_gas`）

归属于包装、冷冻储存与放行阶段的设备直接燃烧天然气时，该天然气进入本阶段边界。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录燃料消耗量，并按声明的计量与热值基准换算为能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行柴油（`pkg_diesel`）

归属于包装、冷冻储存与放行阶段的固定或移动设备在场内消耗柴油时，该柴油进入本阶段边界。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的领用或计量柴油质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行液化石油气（`pkg_lpg`）

归属于包装、冷冻储存与放行阶段的设备在场内消耗液化石油气时，该燃料进入本阶段边界。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的交付或领用液化石油气质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 氨制冷剂补充量（冷冻储存）（`pkg_ammonia_refrigerant`）

仅当场址 R-717 回路发生有记录的补充时，氨制冷剂补充量才进入冷冻储存边界。

- 选定流：Ammonia refrigerant (R-717)
- 流属性/单位：Mass / kg
- 数量规则：依据制冷剂维护日志记录归属于冷冻库的采购或领用补充质量；仅在有系统完好记录时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### R-134a 制冷剂补充量（冷冻储存）（`pkg_r134a_refrigerant`）

仅当场址 R-134a 回路发生有记录的补充时，R-134a 制冷剂补充量才进入冷冻储存边界。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- 流属性/单位：Mass / kg
- 数量规则：依据制冷剂维护日志记录归属于冷冻库的采购或领用补充质量；仅在有系统完好记录时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 低密度聚乙烯包装膜（`pkg_ldpe_film`）

低密度聚乙烯包装膜作为一项材料明确的包装组件进入包装边界；可重复使用组件按场址记录披露周转分摊。

- 选定流：Low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：记录归属于放行产品的领用净材料质量；相关时采用有文件依据的重复使用分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 聚酰胺包装膜（`pkg_polyamide_film`）

聚酰胺包装膜作为一项材料明确的包装组件进入包装边界；可重复使用组件按场址记录披露周转分摊。

- 选定流：Polyamide packaging film
- 流属性/单位：Mass / kg
- 数量规则：记录归属于放行产品的领用净材料质量；相关时采用有文件依据的重复使用分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 瓦楞纸板箱（`pkg_paperboard_carton`）

瓦楞纸板箱作为一项材料明确的包装组件进入包装边界；可重复使用组件按场址记录披露周转分摊。

- 选定流：Corrugated paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：记录归属于放行产品的领用净材料质量；相关时采用有文件依据的重复使用分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 高密度聚乙烯可重复使用周转箱（`pkg_hdpe_crate`）

高密度聚乙烯可重复使用周转箱作为一项材料明确的包装组件进入包装边界；可重复使用组件按场址记录披露周转分摊。

- 选定流：High-density polyethylene reusable crate
- 流属性/单位：Mass / kg
- 数量规则：记录归属于放行产品的领用净材料质量；相关时采用有文件依据的重复使用分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 木托盘（`pkg_wooden_pallet`）

木托盘作为一项材料明确的包装组件进入包装边界；可重复使用组件按场址记录披露周转分摊。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：记录归属于放行产品的领用净材料质量；相关时采用有文件依据的重复使用分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 由冷冻库放行的参考冷冻马科动物肉（`pkg_reference_frozen_equine_meat`）

经核验的天工 Product 流是唯一参考输出；表示冷冻库放行时的净合格冷冻马科动物肉，不含包装质量。

- 选定流：Meat of horses and other equines, frozen `b1d61fc0-90f2-4ef0-959b-b62596caca1a`
- 流属性/单位：Mass / kg
- 数量规则：扣除全部包装质量后，固定为 1 kg 净参考产品。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`un-cpc-3-0`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 包装区域冲洗废水（`pkg_packaging_area_wash_wastewater`）

包装区域冲洗废水作为一项独立定量废物流离开包装与冷冻储存阶段，并记录其处理去向。

- 选定流：Packaging-area wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录计量体积，或依据有文件依据的区域水平衡计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 冷冻库除霜废水（`pkg_frozen_store_defrost_wastewater`）

冷冻库除霜废水作为一项独立定量废物流离开包装与冷冻储存阶段，并记录其处理去向。

- 选定流：Frozen-store defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录计量体积，或依据有文件依据的区域水平衡计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废低密度聚乙烯包装膜（`pkg_waste_ldpe_film`）

废低密度聚乙烯包装膜作为一项独立定量废物流离开包装与冷冻储存阶段，并记录其处理去向。

- 选定流：Waste low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：记录隔离净质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废聚酰胺包装膜（`pkg_waste_polyamide_film`）

废聚酰胺包装膜作为一项独立定量废物流离开包装与冷冻储存阶段，并记录其处理去向。

- 选定流：Waste polyamide packaging film
- 流属性/单位：Mass / kg
- 数量规则：记录隔离净质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废瓦楞纸板箱（`pkg_waste_paperboard_carton`）

废瓦楞纸板箱作为一项独立定量废物流离开包装与冷冻储存阶段，并记录其处理去向。

- 选定流：Waste corrugated paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：记录隔离净质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 损坏的高密度聚乙烯周转箱（`pkg_damaged_hdpe_crate`）

损坏的高密度聚乙烯周转箱作为一项独立定量废物流离开包装与冷冻储存阶段，并记录其处理去向。

- 选定流：Damaged high-density polyethylene crate
- 流属性/单位：Mass / kg
- 数量规则：记录隔离净质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废木托盘（`pkg_waste_wooden_pallet`）

废木托盘作为一项独立定量废物流离开包装与冷冻储存阶段，并记录其处理去向。

- 选定流：Waste wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：记录隔离净质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 判废冷冻马科动物肉（`pkg_condemned_frozen_equine_meat`）

判废冷冻马科动物肉作为一项独立定量废物流离开包装与冷冻储存阶段，并记录其处理去向。

- 选定流：Condemned frozen equine meat
- 流属性/单位：Mass / kg
- 数量规则：记录隔离净质量及有文件依据的处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 氨制冷剂排放（冷冻储存）（`pkg_ammonia_to_air`）

氨制冷剂排放由冷冻储存制冷回路进入空气，作为一项独立基本流报告。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：依据期初库存、记录补充量、期末库存与回收量计算冷冻库损失；不指定默认泄漏率。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### R-134a 制冷剂排放（冷冻储存）（`pkg_r134a_to_air`）

R-134a 制冷剂排放由冷冻储存制冷回路进入空气，作为一项独立基本流报告。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：依据期初库存、记录补充量、期末库存与回收量计算冷冻库损失；不指定默认泄漏率。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行化石二氧化碳排放（`pkg_carbon_dioxide_to_air`）

化石二氧化碳排放由包装、冷冻储存与放行设备进入空气，作为一项独立基本流报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行氮氧化物排放（`pkg_nitrogen_oxides_to_air`）

氮氧化物排放由包装、冷冻储存与放行设备进入空气，作为一项独立基本流报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行二氧化硫排放（`pkg_sulfur_dioxide_to_air`）

二氧化硫排放由包装、冷冻储存与放行设备进入空气，作为一项独立基本流报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装、冷冻储存与放行细颗粒物排放（`pkg_particulate_matter_to_air`）

细颗粒物排放由包装、冷冻储存与放行设备进入空气，作为一项独立基本流报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_frozen_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：清洗与消毒（`cleaning_and_disinfection`）

#### 输入

##### 产品流

###### 清洗与消毒工艺用水（`cip_process_water`）

工艺用水进入清洗与消毒边界，用于归属于该阶段的设备运行、冲洗或卫生作业。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录报告期内该阶段经计量或核对的耗水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒电网电力（`cip_electricity`）

电网电力进入清洗与消毒边界，用于运行归属于该阶段的设备。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：记录阶段电表读数；仅有共用电表时，使用有文件依据的运行驱动量分配实测总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒外购蒸汽（`cip_purchased_steam`）

设施向清洗与消毒阶段供应外购蒸汽时，该蒸汽进入本阶段边界。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：记录归属于该阶段的计量或供应商核对蒸汽质量；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒外购热水（`cip_purchased_hot_water`）

热水作为独立供应的公用工程进入清洗与消毒阶段时，记录此外购热水。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：依据仪表、交付记录或有文件依据的平衡，记录归属于该阶段的热水质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒天然气（`cip_natural_gas`）

归属于清洗与消毒阶段的设备直接燃烧天然气时，该天然气进入本阶段边界。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录燃料消耗量，并按声明的计量与热值基准换算为能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒柴油（`cip_diesel`）

归属于清洗与消毒阶段的固定或移动设备在场内消耗柴油时，该柴油进入本阶段边界。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的领用或计量柴油质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒液化石油气（`cip_lpg`）

归属于清洗与消毒阶段的设备在场内消耗液化石油气时，该燃料进入本阶段边界。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的交付或领用液化石油气质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 氢氧化钠清洗液（`cip_sodium_hydroxide`）

氢氧化钠清洗液仅在场址记录确认使用时进入卫生阶段边界。

- 选定流：Sodium hydroxide cleaning solution
- 流属性/单位：Mass / kg solution
- 数量规则：依据库存、投配与批次记录记录领用溶液质量及浓度；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 硝酸清洗液（`cip_nitric_acid`）

硝酸清洗液仅在场址记录确认使用时进入卫生阶段边界。

- 选定流：Nitric acid cleaning solution
- 流属性/单位：Mass / kg solution
- 数量规则：依据库存、投配与批次记录记录领用溶液质量及浓度；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 次氯酸钠消毒剂（`cip_sodium_hypochlorite`）

次氯酸钠消毒剂仅在场址记录确认使用时进入卫生阶段边界。

- 选定流：Sodium hypochlorite disinfectant
- 流属性/单位：Mass / kg solution
- 数量规则：依据库存、投配与批次记录记录领用溶液质量及浓度；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 过氧乙酸消毒剂（`cip_peracetic_acid`）

过氧乙酸消毒剂仅在场址记录确认使用时进入卫生阶段边界。

- 选定流：Peracetic acid disinfectant
- 流属性/单位：Mass / kg solution
- 数量规则：依据库存、投配与批次记录记录领用溶液质量及浓度；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 卫生清洗废水（`cip_sanitation_wastewater`）

卫生清洗废水在处理前作为一项独立定量液体废物流离开清洗与消毒阶段。

- 选定流：Sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录计量排放体积，或依据有文件依据的卫生用水平衡计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 清洗与消毒化石二氧化碳排放（`cip_carbon_dioxide_to_air`）

化石二氧化碳排放由清洗与消毒设备进入空气，作为一项独立基本流报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒氮氧化物排放（`cip_nitrogen_oxides_to_air`）

氮氧化物排放由清洗与消毒设备进入空气，作为一项独立基本流报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒二氧化硫排放（`cip_sulfur_dioxide_to_air`）

二氧化硫排放由清洗与消毒设备进入空气，作为一项独立基本流报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒细颗粒物排放（`cip_particulate_matter_to_air`）

细颗粒物排放由清洗与消毒设备进入空气，作为一项独立基本流报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有文件依据的卫生分配驱动量折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 场内废水处理工艺用水（`wwt_process_water`）

工艺用水进入场内废水处理边界，用于归属于该阶段的设备运行、冲洗或卫生作业。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录报告期内该阶段经计量或核对的耗水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理电网电力（`wwt_electricity`）

电网电力进入场内废水处理边界，用于运行归属于该阶段的设备。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：记录阶段电表读数；仅有共用电表时，使用有文件依据的运行驱动量分配实测总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理外购蒸汽（`wwt_purchased_steam`）

设施向场内废水处理阶段供应外购蒸汽时，该蒸汽进入本阶段边界。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：记录归属于该阶段的计量或供应商核对蒸汽质量；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理外购热水（`wwt_purchased_hot_water`）

热水作为独立供应的公用工程进入场内废水处理阶段时，记录此外购热水。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：依据仪表、交付记录或有文件依据的平衡，记录归属于该阶段的热水质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理天然气（`wwt_natural_gas`）

归属于场内废水处理阶段的设备直接燃烧天然气时，该天然气进入本阶段边界。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录燃料消耗量，并按声明的计量与热值基准换算为能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理柴油（`wwt_diesel`）

归属于场内废水处理阶段的固定或移动设备在场内消耗柴油时，该柴油进入本阶段边界。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的领用或计量柴油质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理液化石油气（`wwt_lpg`）

归属于场内废水处理阶段的设备在场内消耗液化石油气时，该燃料进入本阶段边界。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录分配至该阶段的交付或领用液化石油气质量，并与库存记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 氯化铁处理溶液（`wwt_ferric_chloride`）

氯化铁处理溶液仅在投配记录确认使用时进入废水处理边界。

- 选定流：Ferric chloride solution
- 流属性/单位：Mass / kg solution
- 数量规则：依据处理日志记录投配溶液质量及浓度；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 聚丙烯酰胺絮凝剂（`wwt_polyacrylamide`）

聚丙烯酰胺絮凝剂仅在投配记录确认使用时进入废水处理边界。

- 选定流：Polyacrylamide flocculant
- 流属性/单位：Mass / kg solution
- 数量规则：依据处理日志记录投配溶液质量及浓度；仅在有不存在证据时填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 进入处理的待宰圈冲洗废水（`wwt_lairage_wash_wastewater`）

进入处理的待宰圈冲洗废水作为来自其前景产生阶段的一项独立核对废物投入进入场内处理。

- 选定流：Lairage wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用产生阶段的体积，并与处理入口流量平衡核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 进入处理的高有机负荷屠宰废水（`wwt_high_organic_load_wastewater`）

进入处理的高有机负荷屠宰废水作为来自其前景产生阶段的一项独立核对废物投入进入场内处理。

- 选定流：High-organic-load slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用产生阶段的体积，并与处理入口流量平衡核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 进入处理的分割车间地面冲洗废水（`wwt_cutting_floor_wastewater`）

进入处理的分割车间地面冲洗废水作为来自其前景产生阶段的一项独立核对废物投入进入场内处理。

- 选定流：Cutting-floor wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用产生阶段的体积，并与处理入口流量平衡核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 进入处理的冻结设备除霜废水（`wwt_freezer_defrost_wastewater`）

进入处理的冻结设备除霜废水作为来自其前景产生阶段的一项独立核对废物投入进入场内处理。

- 选定流：Freezer defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用产生阶段的体积，并与处理入口流量平衡核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 进入处理的包装区域冲洗废水（`wwt_packaging_area_wastewater`）

进入处理的包装区域冲洗废水作为来自其前景产生阶段的一项独立核对废物投入进入场内处理。

- 选定流：Packaging-area wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用产生阶段的体积，并与处理入口流量平衡核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 进入处理的冷冻库除霜废水（`wwt_frozen_store_defrost_wastewater`）

进入处理的冷冻库除霜废水作为来自其前景产生阶段的一项独立核对废物投入进入场内处理。

- 选定流：Frozen-store defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用产生阶段的体积，并与处理入口流量平衡核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 进入处理的卫生清洗废水（`wwt_sanitation_wastewater`）

进入处理的卫生清洗废水作为来自其前景产生阶段的一项独立核对废物投入进入场内处理。

- 选定流：Sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用产生阶段的体积，并与处理入口流量平衡核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理后屠宰场废水（`wwt_treated_wastewater`）

处理后屠宰场废水作为一项独立定量废物流离开场内废水处理，并记录其排放或处理去向。

- 选定流：Treated slaughterhouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录最终出水流量计体积及排放或转移去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰场废水处理污泥（`wwt_sludge`）

屠宰场废水处理污泥作为一项独立定量废物流离开场内废水处理，并记录其排放或处理去向。

- 选定流：Slaughterhouse wastewater-treatment sludge
- 流属性/单位：Mass / kg wet matter
- 数量规则：依据运行记录记录脱水后湿质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰场废水格栅渣（`wwt_screenings`）

屠宰场废水格栅渣作为一项独立定量废物流离开场内废水处理，并记录其排放或处理去向。

- 选定流：Slaughterhouse wastewater screenings
- 流属性/单位：Mass / kg wet matter
- 数量规则：依据运行记录记录脱水后湿质量及处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 化学需氧量水体排放（`wwt_cod_to_water`）

化学需氧量水体排放由场内处理出口进入受纳水体，作为一项独立基本流报告。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg O2-equivalent
- 数量规则：在完成空白、单位与时间对齐检查后，依据匹配的出水体积及实验室浓度记录计算化学需氧量水体排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 总氮水体排放（`wwt_total_nitrogen_to_water`）

总氮水体排放由场内处理出口进入受纳水体，作为一项独立基本流报告。

- 选定流：Total nitrogen to water
- 流属性/单位：Mass / kg N
- 数量规则：在完成空白、单位与时间对齐检查后，依据匹配的出水体积及实验室浓度记录计算总氮水体排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 总磷水体排放（`wwt_total_phosphorus_to_water`）

总磷水体排放由场内处理出口进入受纳水体，作为一项独立基本流报告。

- 选定流：Total phosphorus to water
- 流属性/单位：Mass / kg P
- 数量规则：在完成空白、单位与时间对齐检查后，依据匹配的出水体积及实验室浓度记录计算总磷水体排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 总悬浮固体水体排放（`wwt_total_suspended_solids_to_water`）

总悬浮固体水体排放由场内处理出口进入受纳水体，作为一项独立基本流报告。

- 选定流：Total suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：在完成空白、单位与时间对齐检查后，依据匹配的出水体积及实验室浓度记录计算总悬浮固体水体排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理化石二氧化碳排放（`wwt_carbon_dioxide_to_air`）

化石二氧化碳排放由场内废水处理设备进入空气，作为一项独立基本流报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理氮氧化物排放（`wwt_nitrogen_oxides_to_air`）

氮氧化物排放由场内废水处理设备进入空气，作为一项独立基本流报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理二氧化硫排放（`wwt_sulfur_dioxide_to_air`）

二氧化硫排放由场内废水处理设备进入空气，作为一项独立基本流报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理细颗粒物排放（`wwt_particulate_matter_to_air`）

细颗粒物排放由场内废水处理设备进入空气，作为一项独立基本流报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：依据采集的阶段燃料记录以及数据集披露的实测或排放因子基准计算；本 PCR 不指定默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按实测处理体积折算至每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`


## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | separable_processes | 首先通过细分计量作业并将阶段公用工程、包装、化学品、废物与排放直接归属于导致其发生的过程输出来避免分配。 | `eu-recommendation-2021-2279-pef` |
| `alloc_product_waste_status` | all_non_reference_outputs | 依据有文件依据的法律、技术与去向证据，将每项血液、皮、器官、脂肪、骨、修整料、判废物、消化道内容物、污泥、格栅渣与包装输出判定为产品、共产品或废物；不得推定可销售状态。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `alloc_physical_relation` | joint_products | 无法通过过程细分避免负担分担且可证明因果物理关系时，使用该有文件依据的物理关系分配剩余负担，并报告驱动量数值。 | `eu-recommendation-2021-2279-pef` |
| `alloc_economic_fallback` | joint_products | 不存在可辩护物理关系时，使用同一代表期有文件依据的经济关系，并披露价格、币种、地域、期间与敏感性；本 PCR 不提供默认份额。 | `eu-recommendation-2021-2279-pef` |
| `alloc_waste_no_credit` | waste_outputs | 除非前景记录证明回收产品状态与接收产品用途，否则不得给予废物输出共产品抵扣；其他情形保留处理负担与去向记录。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `alloc_reference_consistency` | reference_product | 仅在整个报告期一致应用一项有文件依据的分配方法后进行归一化，并将已分配负担与未分配前景总量核对。 | `eu-recommendation-2021-2279-pef` |

## 8. 前景数据采集、计算与质量规则

前景数量来自设施测量、日志、发票、库存变动、实验室报告与核对计算。来源文件定义方法与完整性要求，不提供默认数量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_equine_receiving_records` | `live_equine_receiving_and_lairage` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;gross_amount;tare_amount;net_amount;meter_reading;unit;destination;evidence_ref | direct_measurement_plus_record_reconciliation | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_process_output | calibration_log;weigh_ticket;meter_log;invoice;stock_record;dispatch_record |
| `cp_equine_slaughter_records` | `equine_slaughter_bleeding_skinning_evisceration` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;gross_amount;tare_amount;net_amount;meter_reading;unit;destination;inspection_status;evidence_ref | direct_measurement_plus_mass_balance_reconciliation | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_process_output | calibration_log;weigh_ticket;meter_log;invoice;inspection_record;dispatch_record |
| `cp_equine_cutting_records` | `equine_carcass_dressing_and_cutting` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;input_mass;output_mass;meter_reading;unit;destination;inspection_status;evidence_ref | direct_measurement_plus_mass_balance_reconciliation | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_process_output | calibration_log;weigh_ticket;meter_log;invoice;inspection_record;dispatch_record |
| `cp_prechilling_freezing_records` | `prechilling_and_freezing` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;input_mass;output_mass;meter_reading;refrigerant_opening_stock;refrigerant_addition;refrigerant_closing_stock;refrigerant_recovery;unit;evidence_ref | direct_measurement_plus_inventory_balance | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_process_output | calibration_log;weigh_ticket;meter_log;invoice;refrigerant_service_log;stock_record |
| `cp_packaging_frozen_storage_release_records` | `packaging_frozen_storage_and_release` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;issued_mass;returned_mass;waste_mass;product_net_mass;meter_reading;storage_duration;refrigerant_opening_stock;refrigerant_addition;refrigerant_closing_stock;refrigerant_recovery;unit;evidence_ref | direct_measurement_plus_inventory_balance | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_reference_output | calibration_log;weigh_ticket;meter_log;invoice;packaging_issue_record;release_record;refrigerant_service_log |
| `cp_cleaning_disinfection_records` | `cleaning_and_disinfection` | all_atomic_exchanges | site_measurement_record | timestamp;cleaning_event;flow_name;issued_mass;solution_concentration;meter_reading;discharge_volume;unit;served_area;served_process;evidence_ref | direct_measurement_plus_sanitation_allocation | native_record_unit_then_card_unit | per_cleaning_event_plus_continuous_meter | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_allocate_with_documented_sanitation_driver | meter_log;dosing_log;stock_record;cleaning_schedule;calibration_log |
| `cp_onsite_wastewater_treatment_records` | `onsite_wastewater_treatment` | all_atomic_exchanges | site_measurement_record | timestamp;flow_name;inlet_volume;outlet_volume;chemical_dose;wet_residue_mass;sample_time;concentration;unit;destination;evidence_ref | direct_measurement_plus_matched_flow_concentration_calculation | native_record_unit_then_card_unit | continuous_flow_plus_each_compliance_sample | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | time_align_valid_records_then_normalize_to_reference_output | flow_meter_log;laboratory_report;chain_of_custody;dosing_log;residue_dispatch_record;calibration_log |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_receiving_mass_balance` | 活体马科动物接收 | 已接收活重 = 接收活重 - 死亡尸体质量 - 有文件依据的接收质量调整；保留批次级核对 | 接收活重；死亡尸体质量；有文件依据的调整 | 已接收活体马科动物质量 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_slaughter_mass_balance` | 屠宰输出 | 将已接收活重与胴体、血液、皮、器官、消化道内容物、判废物、废水固形物及有文件依据的过程损失记录核对，不指定默认得率 | 已接收活重；每项称量屠宰输出；有文件依据的库存变化 | 屠宰质量平衡残差 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_cutting_mass_balance` | 整理与分割输出 | 将胴体投入与未冻结肉、脂肪、骨、修整料、判废肉、非食用组织及库存变化记录核对，不指定默认得率 | 胴体质量；每项称量分割输出；有文件依据的库存变化 | 分割质量平衡残差 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_stage_utility_normalization` | 阶段公用工程 | 阶段单位基准量 = 经核实的阶段仪表、发票或库存数量除以匹配的过程输出或参考产品质量 | 经核实的阶段数量；匹配的分母质量 | 归一化原子公用工程数量 | `eu-recommendation-2021-2279-pef` |
| `calc_refrigerant_loss` | 每个制冷剂回路 | 制冷剂损失 = 期初库存 + 记录补充量 - 期末库存 - 记录回收或转移量；按每种具名制冷剂及阶段分别计算 | 期初库存；补充量；期末库存；回收量；转移量 | 具名制冷剂排放质量 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_packaging_material_balance` | 每种包装材料 | 包装消耗 = 领用质量 - 未使用退回质量 - 期末在制库存；可重复使用包装按记录周转次数分摊并披露方法 | 领用质量；退回质量；库存变化；记录周转次数 | 每参考产品的材料明确包装投入 | `eu-recommendation-2021-2279-pef` |
| `calc_combustion_emission` | 每项阶段燃烧排放 | 排放质量 = 阶段燃料量乘以披露的场址实测或因子基准；每项具名空气排放分别计算，且不指定 PCR 默认因子 | 阶段燃料量；披露的实测或因子；氧化与单位换算记录 | 单项空气排放质量 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_wastewater_flow_balance` | 场内废水处理 | 处理体积平衡 = 分别记录的入口废水体积之和 + 处理用水 - 处理后废水体积 - 污泥中有文件依据的持水量 - 有文件依据的蒸发量 | 每项入口体积；处理用水；出水体积；污泥含水量；蒸发记录 | 废水处理体积平衡残差 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_effluent_pollutant_load` | 每项水体排放 | 排放质量 = 时间匹配的最终出水体积乘以经核实的最终出水浓度并进行单位换算；每项分析物分别计算 | 最终出水体积；分析物浓度；采样时间；单位换算 | 单项水体排放质量 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_reference_product_mass` | 参考产品 | 净参考质量 = 放行包装批次毛质量 - 全部包装组件质量；将前景清单归一化为恰好 1 kg 净合格冷冻产品 | 放行毛质量；每项包装组件质量；放行状态 | 1 kg 净参考产品 | `un-cpc-3-0`; `eu-recommendation-2021-2279-pef` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technological` | 全部前景阶段 | 表示声明报告期内实际使用的屠宰、分割、冻结、包装、卫生与废水处理技术。 | 设备清单；过程图；运行日志 |
| `dq_temporal` | 全部采集记录 | 使用覆盖全部范围内作业的一个声明报告期，并披露停产、非典型批次、缺失区间与替代数据。 | 带日期仪表日志；生产日历；缺口登记 |
| `dq_geographical` | 设施与公用工程 | 声明设施位置、电力供应地域、供水来源、燃料供应基准、废水去向与共产品去向。 | 场址元数据；发票；许可；发运记录 |
| `dq_completeness` | 全部原子交换 | 采集每项已知材料、公用工程、产品、共产品、废物以及空气、水体或土壤排放；解释任何经核实的零值，不得通过聚合隐藏流。 | 流登记；完整性核对；零值证据记录 |
| `dq_mass_balance` | 动物、胴体、肉、共产品与废物质量 | 维持批次或报告期质量平衡，保留足以解释残差的毛重、皮重、净重、库存变化、水分与去向记录。 | 称量单；库存记录；平衡工作表 |
| `dq_energy` | 电力、蒸汽、热水、天然气、柴油与液化石油气 | 按阶段分别保存每种载体，并核对仪表、发票、库存变动、分配驱动量与单位换算。 | 仪表日志；发票；罐存记录；分配工作表 |
| `dq_refrigerant` | 每种具名制冷剂 | 按制冷剂并按冻结或冷冻储存阶段分别保存补充量与排放平衡；披露维护、回收与数据缺口。 | 维护日志；钢瓶记录；库存平衡 |
| `dq_wastewater` | 每项废水与水体排放 | 保留废水产生阶段、处理流量平衡、匹配采样时间、分析方法、检出限处理与排放去向。 | 流量日志；实验室报告；样品流转记录；许可记录 |
| `dq_allocation` | 参考产品与回收输出 | 对每项负担分担决定披露过程细分、物理关系、使用经济数据时的数据期、废物分类、去向与敏感性。 | 分配工作表；销售或物理驱动证据；敏感性结果 |
| `dq_verification` | 发布的前景数据包 | 保留可追溯源记录、计算公式、审查检查、更正与未决身份记录，使独立审查者能够复现每项报告交换。 | 审计轨迹；公式工作簿；审查记录；manifest 审查元数据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | reference_flow | 唯一参考流 UUID 必须为 b1d61fc0-90f2-4ef0-959b-b62596caca1a，公开 state 100、版本 01.01.000、Product、精确 CPC 21138、Mass 属性 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66，单位 kg。 | `un-cpc-3-0` |
| `val_reference_mass` | reference_quantity | 定量参考必须恰好等于 1 kg 净合格冷冻产品，且每项包装组件质量均须从该净质量中扣除。 | `un-cpc-3-0`; `eu-recommendation-2021-2279-pef` |
| `val_scope_state` | product_scope | 数据集元数据必须识别冷冻马科动物肉，且不得将鲜或冷藏肉或食用内脏作为参考产品。 | `un-cpc-3-0` |
| `val_process_coverage` | process_map | 全部六个必需过程必须含有记录；满足纳入条件时必须包含场内废水处理，否则须以证据明确标记不适用。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_atomic_inventory` | process_inventory | 每张清单卡必须只含一项具名原子交换；不得以公用工程、制冷剂、化学品、包装、废物或排放选择器代替流身份。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_uuid_integrity` | inventory_flow_identity | 依据已提供证据仅可填写经核验参考 UUID；每个非参考 UUID 均保持空白，直至混合发现与公开 state-100 直读分别确认精确语义、类型、属性、单位组与单位，并同步更新未决行元数据。 | `eu-recommendation-2021-2279-pef` |
| `val_value_mode` | inventory_amounts | 仅参考输出使用 fixed_value；实测记录使用 foreground_record，派生平衡使用 calculated_value，且不得使用作者估算范围或默认数量。 | `eu-recommendation-2021-2279-pef` |
| `val_card_completeness` | process_inventory | 每张卡必须具有非空说明、选定流、属性与单位、数量规则、受控数值模式、适用范围、基准、基准类型、证据类型、采集协议与来源编号。 | `eu-recommendation-2021-2279-pef` |
| `val_mass_balance` | foreground_mass_flows | 接收、屠宰、分割、冻结、包装以及废水体积或质量平衡必须完成核对并解释残差，不得插入默认得率。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_stage_energy` | energy_inventory | 电力、外购蒸汽、外购热水、天然气、柴油与液化石油气必须按阶段分别保留，并记录共用仪表的分配驱动量。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_refrigerants` | refrigeration_inventory | 冻结与冷冻储存阶段的每种具名制冷剂补充量及空气排放必须分别平衡；场址使用的任何新增制冷剂在放行前均须增加独立原子投入与排放记录。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_wastewater` | wastewater_inventory | 每项产生端废水、处理后废水、污泥、格栅渣与每项水体排放必须分别与流量及分析记录核对，并披露去向。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_allocation` | allocation | 每项联合输出负担决定必须遵循声明层级，披露数据与期间，保留废物状态证据，并核对已分配总量。 | `eu-recommendation-2021-2279-pef` |
| `val_sources` | evidence | 方法主张仅可引用三项已声明来源；前景数量必须追溯至设施记录，而不是来源衍生默认值。 | `un-cpc-3-0`; `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_bilingual_alignment` | localized_markdown | 英文与中文文件必须保持完全相同的有序 process_id、row_id、direction、flow_type、UUID、受控数量字段、采集协议与来源编号序列。 | `eu-recommendation-2021-2279-pef` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 冷冻库放行时每 1 kg 净合格马或其他马科动物冷冻肉的场址特定前景数据包 |
| downstream_use | 需要 CPC 21138 前景制造清单的经审查过程数据集与生命周期模型投入 |
| allowed_use | 场址特定门到门建模；链接透明上游数据集时的从摇篮到工厂门建模；仅在范围、质量、分配与产品限定信息等效后用于比较 |
| excluded_use | 表示鲜或冷藏马科动物肉、食用内脏、非马科动物肉、零售、烹饪、消费或未披露的通用行业平均 |
| required_metadata | canonical PCR id; CPC code; reference UUID; species; carcass or cut form; bone state; frozen state; facility; geography; reporting period; technology; storage duration; storage condition; packaging; process inclusion; allocation; destinations |
| required_quality_disclosure | Primary-data coverage; meter allocation; mass-balance residuals; refrigerant balances; wastewater sampling; analytical methods; source records; zero evidence; data gaps; substitutions; allocation sensitivity; reviewer findings |
| update_trigger | 产品范围、设施技术、冻结系统、制冷剂、包装、储存条件、废水处理、共产品去向、分配关系、报告期或经核验天工身份发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | 联合国统计司，《产品总分类》第 3.0 版结构与解释性说明，子类 21138，2025-06-30。仓库保留原始文件：classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 精确冷冻马科动物肉分类边界，以及排除鲜或冷藏肉与食用内脏 |
| `ec-jrc-sa-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，《屠宰场、动物副产品及/或食用共产品行业最佳可行技术参考文件》。JRC135916，2024。DOI: 10.2760/18199。https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 接收、屠宰、整理、分割、预冷、冻结、卫生、公用工程、废水、共产品、废物与排放过程结构；未采用默认数量 |
| `eu-recommendation-2021-2279-pef` | `official_guidance` | 欧盟委员会，《关于使用环境足迹方法的建议 (EU) 2021/2279》合并文本。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定物料清单、企业特定前景数据、完整生命周期清单、分配层级、数据质量、透明度与核查 |
