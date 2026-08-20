---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 火鸡肉，冷冻

## 1. 范围与适用性

本 PCR 适用于屠宰场或肉类加工厂门口以冷冻状态销售的火鸡肉前景数据包。当可销售参考产品精确归类为 CPC 21144“火鸡肉，冷冻”时，范围覆盖整只整理后胴体及分割肉，并要求申报带骨或带皮状态。

前景边界始于屠宰场门口接收活火鸡，继而覆盖暂养、屠宰、放血、浸烫、去羽、去内脏、胴体整理、条件性分割、预冷、冻结、包装、冻藏、质量放行、可归属的清洗消毒，以及条件性场内废水处理。火鸡养殖、饲料生产、孵化及活禽入厂运输属于上游。出厂运输、零售、消费者储存、烹饪或使用以及产品寿命终止属于下游。

鲜或冷藏火鸡肉、禽类食用内脏、其他禽种肉、机械分离肉以及加工或保藏火鸡产品均不属于参考产品。具名食用器官及可回收产出可作为独立副产品跨越前景边界，但不得计入参考产品质量。

本文件为候选已编写方法学。其规定前景采集与计算规则，不提供默认数量或 AI 推导范围，也不为未解析的非参考流赋予 UUID。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-frozen |
| classification_refs | CPC 3.0：21144，精确映射语境 |
| covered_products | 在工厂门口放行的冷冻整只火鸡胴体及冷冻火鸡分割肉，并申报产品形式、带骨状态、带皮状态及冷冻状态判据 |
| excluded_products | 鲜或冷藏火鸡肉；禽类食用内脏；鸡、鸭、鹅或珍珠鸡肉；机械分离火鸡肉；加工或保藏火鸡产品 |
| representative_product | 扣除包装皮重后的可销售冷冻火鸡肉净质量 |
| production_route | 活火鸡接收；屠宰与整理；条件性分割；预冷与冻结；包装与冻藏；清洗消毒；条件性场内废水处理 |
| market_state | 在屠宰场或加工厂门口放行的冷冻产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门口提供符合申报食品市场规格的冷冻火鸡肉 |
| How much | 1 kg 可销售冷冻火鸡肉净质量，不含包装 |
| How well | 精确 CPC 21144 产品；满足冷冻状态及放行规格；申报产品形式、带骨状态、带皮状态、包装及排除项 |
| How long or cycle | 一个放行生产批次；申报截至工厂门口交接的冻藏时长 |
| reference_flow_link | 功能单位由下列唯一参考产品流对象实现 |

| 字段 | 值 |
| --- | --- |
| Reference amount / 参考数量 | 1 kg 放行净产品，不含包装 |
| Reference product flow / 参考产品流 | Meat of turkeys, frozen `2cf4dbce-c2cf-4ca6-a1bc-5366fad13063` |
| Reference flow property / 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group / 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit / 参考单位 | kg |
| Required qualifiers / 必需限定信息 | CPC 21144; turkey species identity; whole carcass or cut form; bone status; skin status; product composition; frozen-state criterion; product-core temperature measurement point; freezing technology; release temperature; frozen-storage temperature; frozen-storage duration; packaging configuration; packaging tare; facility geography; reporting period; edible-offal exclusion |

构建前景数据包时，`必需限定信息` 中的每一项均须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中申报。缺失必需限定信息时，数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_net_mass` | reference_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 扣除包装皮重后确定可销售冷冻火鸡肉净质量；归一化参考数量恰好为 1 kg。 | `un-cpc-3-0-2025`, `eu-pef-recommendation-2021-2279` |
| `frozen_state_declaration` | reference_product | Temperature state | declared site unit | 申报用于识别冷冻市场状态的产品中心温度判据、测点、冻结技术、冻藏温度及储存时长。 | `un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `energy_unit_conversion` | energy_inventory_rows | Energy | kWh | 保留计量能源单位；记录每次换算为 kWh 的过程及换算因子来源。不得把电力、蒸汽、热水或燃料合并为一个交换。 | `eu-pef-recommendation-2021-2279` |
| `mass_carrier_conversion` | mass_inventory_rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 载体、液体、废水、制冷剂、化学品或包装记录以体积或件数表示时，仅可依据有文件支持的密度或单件质量记录换算为 kg。 | `eu-pef-recommendation-2021-2279` |
| `chemical_formulation_basis` | cleaning_and_treatment_chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录每一种具名化学品配方并申报浓度；除非明确换算，不得以活性成分质量替代配方质量。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `refrigerant_identity_balance` | refrigerant_rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对每一种具名制冷剂分别建立设备质量平衡；不得合并 R717、R744、R404A 或 R507A。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `packaging_tare_basis` | packaging_rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录每个包装部件，从参考产品质量中排除全部包装皮重，并申报可重复使用物品的周转次数分配。 | `eu-pef-recommendation-2021-2279` |
| `wastewater_load_basis` | wastewater_and_water_emission_rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保持各具名废水流相互独立；依据时间匹配的流量和浓度数据计算每项水污染负荷，不得合并污染物参数。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场门口接收活火鸡，并记录供应商批次、禽只数量及合格活重 |
| starting_condition_role | `live_turkey_receiving_lairage` 的实测产品投入 |
| product_classification_scope | 精确 CPC 21144 冷冻火鸡肉；鲜或冷藏火鸡肉及禽类食用内脏不属于参考产品范围 |
| recursive_input_rule | CPC 21144 冷冻火鸡肉投入仅作为转移或采购产品投入记录一次，不递归重开其生产边界 |
| upstream_dataset_requirement | 对活火鸡生产、饲料、孵化、入厂运输、外购公用工程、水、燃料、制冷剂、化学品、包装及场外处理使用具有代表性的上游数据集 |
| disclosure | 申报设施地域、禽只来源、产品形式、屠宰与冻结技术、冷冻状态判据、制冷系统、包装、过程适用性、副产品去向、分配、废水路径、储存条件及数据缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_start` | foreground_system | 当前景系统在屠宰场门口接收活火鸡时开始。养殖、饲料生产、孵化及入厂运输属于上游。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `boundary_included_operations` | foreground_system | 纳入接收暂养、屠宰整理、条件性分割、预冷冻结、包装冻藏、可归属的清洗消毒，以及条件性场内废水处理。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `boundary_purchased_inputs` | upstream_inputs | 将外购电力、蒸汽、热水、每种燃料、水、制冷剂、化学品及包装部件分别记录为技术圈输入，并链接具有代表性的上游数据集。 | `eu-pef-recommendation-2021-2279` |
| `boundary_downstream_exclusions` | downstream_system | 排除出厂运输、零售、消费者储存、烹饪或使用以及寿命终止；研究另行在本前景数据包外扩展时除外。 | `eu-pef-recommendation-2021-2279` |
| `boundary_same_category_input` | same_category_input | 若 CPC 21144 冷冻火鸡肉再次进入某前景过程，应仅作为采购或转移产品输入记录一次，不得递归重开其生产边界。 | `un-cpc-3-0-2025`, `eu-pef-recommendation-2021-2279` |
| `boundary_conditional_processes` | conditional_processes | 申报是否适用胴体分割与场内废水处理；仅在有不适用说明及边界证据时方可省略其行。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `boundary_scope_exclusions` | product_scope | 从参考产品中排除鲜或冷藏火鸡肉、禽类食用内脏、其他禽种肉、机械分离肉以及加工或保藏火鸡产品。 | `un-cpc-3-0-2025` |

## 6. 过程清单结构

全部行均使用“per 1 kg net frozen turkey meat reference product”作为归一化基准。条件性公用工程、制冷剂、化学品、包装、废物或排放卡仍须保持原子性：记录适用交换，或说明该单一交换为何不存在。不得以选择器替代独立卡片。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `live_turkey_receiving_lairage` | 活火鸡接收与暂养 | `required` | 自活火鸡在屠宰场门口完成交接起始终纳入。 | foreground_production | 可归属于参考生产批次的合格活火鸡质量 |
| `turkey_slaughter_dressing` | 火鸡屠宰与胴体整理 | `required` | 始终纳入屠宰、放血、浸烫、去羽、去内脏、冲洗及胴体整理。 | foreground_production | 分割或冻结前的鲜火鸡胴体质量 |
| `turkey_carcass_cutting` | 火鸡胴体分割 | `conditional` | 当申报产品在冻结前进行分割、去骨、去皮或修整时纳入。 | foreground_production | 离开分割过程的鲜火鸡分割肉质量 |
| `turkey_prechilling_freezing` | 火鸡肉预冷与冻结 | `required` | 始终纳入预冷以及将范围内火鸡肉转变为申报冷冻状态的过程。 | foreground_conditioning | 离开冻结过程的冷冻火鸡胴体或分割肉质量 |
| `turkey_packaging_frozen_storage` | 火鸡肉包装与冻藏 | `required` | 始终纳入包装、冻藏、质量放行以及在工厂门口完成交接。 | foreground_conditioning | 排除包装皮重后的冷冻火鸡肉放行净质量 |
| `plant_cleaning_sanitation` | 工厂清洗与消毒 | `required` | 始终纳入可归属于前景屠宰、分割、冻结、包装及冻藏作业的清洗消毒。 | foreground_support | 按放行参考产品归一化的批次归属清洗消毒活动 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 当前景设施在排放或转移前于场内处理废水时纳入。 | foreground_support | 可归属于参考生产批次的废水处理活动 |

### 过程：活火鸡接收与暂养（`live_turkey_receiving_lairage`）

#### 输入

##### 产品流

###### Live turkeys 输入（`receiving_live_turkeys`）

Live turkeys 作为一个具体输入跨越“活火鸡接收与暂养”过程边界。须以 `receiving_live_turkeys` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Live turkeys
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Drinking water 输入（`receiving_drinking_water`）

Drinking water 作为一个具体输入跨越“活火鸡接收与暂养”过程边界。须以 `receiving_drinking_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Drinking water
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity 输入（`receiving_grid_electricity`）

Grid electricity 作为一个具体输入跨越“活火鸡接收与暂养”过程边界。须以 `receiving_grid_electricity` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：电网电力
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas 输入（`receiving_natural_gas`）

Natural gas 作为一个具体输入跨越“活火鸡接收与暂养”过程边界。须以 `receiving_natural_gas` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：天然气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel 输入（`receiving_diesel`）

Diesel fuel 作为一个具体输入跨越“活火鸡接收与暂养”过程边界。须以 `receiving_diesel` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：柴油燃料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas 输入（`receiving_lpg`）

Liquefied petroleum gas 作为一个具体输入跨越“活火鸡接收与暂养”过程边界。须以 `receiving_lpg` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：液化石油气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

本申报过程在该组中未规定原子交换。

##### 基本流

本申报过程在该组中未规定原子交换。

#### 输出

##### 产品流

###### Accepted live turkeys 输出（`receiving_accepted_live_turkeys`）

Accepted live turkeys 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_accepted_live_turkeys` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Accepted live turkeys
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

###### Dead turkeys 输出（`receiving_dead_turkeys`）

Dead turkeys 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_dead_turkeys` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Dead turkeys
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey manure 输出（`receiving_turkey_manure`）

Turkey manure 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_turkey_manure` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey manure
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Contaminated wood-shaving litter 输出（`receiving_wood_shaving_litter`）

Contaminated wood-shaving litter 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_wood_shaving_litter` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Contaminated wood-shaving litter
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey lairage wastewater 输出（`receiving_lairage_wastewater`）

Turkey lairage wastewater 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_lairage_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey lairage wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 基本流

###### Ammonia to air 输出（`receiving_ammonia_air`）

Ammonia to air 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_ammonia_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：氨，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, fossil, to air 输出（`receiving_co2_air`）

Carbon dioxide, fossil, to air 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_co2_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air 输出（`receiving_nox_air`）

Nitrogen oxides to air 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_nox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air 输出（`receiving_sox_air`）

Sulfur oxides to air 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_sox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air 输出（`receiving_pm25_air`）

Particulate matter, less than 2.5 µm, to air 作为一个具体输出跨越“活火鸡接收与暂养”过程边界。须以 `receiving_pm25_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Particulate matter, less than 2.5 µm, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### 过程：火鸡屠宰与胴体整理（`turkey_slaughter_dressing`）

#### 输入

##### 产品流

###### Accepted live turkeys 输入（`slaughter_accepted_live_turkeys`）

Accepted live turkeys 作为一个具体输入跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_accepted_live_turkeys` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Accepted live turkeys
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Process water 输入（`slaughter_process_water`）

Process water 作为一个具体输入跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_process_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：过程用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity 输入（`slaughter_grid_electricity`）

Grid electricity 作为一个具体输入跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_grid_electricity` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：电网电力
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam 输入（`slaughter_purchased_steam`）

Purchased steam 作为一个具体输入跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_purchased_steam` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water 输入（`slaughter_purchased_hot_water`）

Purchased hot water 作为一个具体输入跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_purchased_hot_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas 输入（`slaughter_natural_gas`）

Natural gas 作为一个具体输入跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_natural_gas` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：天然气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel 输入（`slaughter_diesel`）

Diesel fuel 作为一个具体输入跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_diesel` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：柴油燃料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas 输入（`slaughter_lpg`）

Liquefied petroleum gas 作为一个具体输入跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_lpg` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：液化石油气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

本申报过程在该组中未规定原子交换。

##### 基本流

本申报过程在该组中未规定原子交换。

#### 输出

##### 产品流

###### Dressed turkey carcass, fresh 输出（`slaughter_fresh_carcass`）

Dressed turkey carcass, fresh 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_fresh_carcass` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Dressed turkey carcass, fresh
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey blood for recovery 输出（`slaughter_blood_recovery`）

Turkey blood for recovery 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_blood_recovery` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey blood for recovery
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey feathers for recovery 输出（`slaughter_feathers_recovery`）

Turkey feathers for recovery 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_feathers_recovery` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey feathers for recovery
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey liver, edible 输出（`slaughter_edible_liver`）

Turkey liver, edible 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_edible_liver` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey liver, edible
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey heart, edible 输出（`slaughter_edible_heart`）

Turkey heart, edible 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_edible_heart` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey heart, edible
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey gizzard, edible 输出（`slaughter_edible_gizzard`）

Turkey gizzard, edible 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_edible_gizzard` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey gizzard, edible
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey neck 输出（`slaughter_turkey_neck`）

Turkey neck 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_turkey_neck` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey neck
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey feet 输出（`slaughter_turkey_feet`）

Turkey feet 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_turkey_feet` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey feet
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Recovered turkey fat 输出（`slaughter_recovered_fat`）

Recovered turkey fat 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_recovered_fat` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Recovered turkey fat
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

###### Waste turkey blood 输出（`slaughter_waste_blood`）

Waste turkey blood 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_waste_blood` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste turkey blood
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste turkey feathers 输出（`slaughter_waste_feathers`）

Waste turkey feathers 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_waste_feathers` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste turkey feathers
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Condemned turkey liver 输出（`slaughter_condemned_liver`）

Condemned turkey liver 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_condemned_liver` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Condemned turkey liver
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Condemned turkey heart 输出（`slaughter_condemned_heart`）

Condemned turkey heart 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_condemned_heart` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Condemned turkey heart
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Condemned turkey gizzard 输出（`slaughter_condemned_gizzard`）

Condemned turkey gizzard 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_condemned_gizzard` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Condemned turkey gizzard
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey lung waste 输出（`slaughter_lung_waste`）

Turkey lung waste 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_lung_waste` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey lung waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey kidney waste 输出（`slaughter_kidney_waste`）

Turkey kidney waste 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_kidney_waste` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey kidney waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey head waste 输出（`slaughter_head_waste`）

Turkey head waste 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_head_waste` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey head waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey stomach contents 输出（`slaughter_stomach_contents`）

Turkey stomach contents 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_stomach_contents` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey stomach contents
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey intestinal contents 输出（`slaughter_intestinal_contents`）

Turkey intestinal contents 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_intestinal_contents` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey intestinal contents
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey intestinal tissue waste 输出（`slaughter_intestinal_tissue`）

Turkey intestinal tissue waste 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_intestinal_tissue` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey intestinal tissue waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey fat waste 输出（`slaughter_fat_waste`）

Turkey fat waste 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_fat_waste` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey fat waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Condemned turkey carcass 输出（`slaughter_condemned_carcass`）

Condemned turkey carcass 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_condemned_carcass` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Condemned turkey carcass
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey slaughter wastewater, high organic load 输出（`slaughter_high_load_wastewater`）

Turkey slaughter wastewater, high organic load 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_high_load_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey slaughter wastewater, high organic load
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_wastewater_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey slaughter wastewater, ordinary load 输出（`slaughter_ordinary_wastewater`）

Turkey slaughter wastewater, ordinary load 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_ordinary_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey slaughter wastewater, ordinary load
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_wastewater_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 基本流

###### Carbon dioxide, fossil, to air 输出（`slaughter_co2_air`）

Carbon dioxide, fossil, to air 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_co2_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air 输出（`slaughter_nox_air`）

Nitrogen oxides to air 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_nox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air 输出（`slaughter_sox_air`）

Sulfur oxides to air 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_sox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air 输出（`slaughter_pm25_air`）

Particulate matter, less than 2.5 µm, to air 作为一个具体输出跨越“火鸡屠宰与胴体整理”过程边界。须以 `slaughter_pm25_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Particulate matter, less than 2.5 µm, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### 过程：火鸡胴体分割（`turkey_carcass_cutting`）

#### 输入

##### 产品流

###### Dressed turkey carcass, fresh 输入（`cutting_fresh_carcass`）

Dressed turkey carcass, fresh 作为一个具体输入跨越“火鸡胴体分割”过程边界。须以 `cutting_fresh_carcass` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Dressed turkey carcass, fresh
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Process water 输入（`cutting_process_water`）

Process water 作为一个具体输入跨越“火鸡胴体分割”过程边界。须以 `cutting_process_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：过程用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity 输入（`cutting_grid_electricity`）

Grid electricity 作为一个具体输入跨越“火鸡胴体分割”过程边界。须以 `cutting_grid_electricity` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：电网电力
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam 输入（`cutting_purchased_steam`）

Purchased steam 作为一个具体输入跨越“火鸡胴体分割”过程边界。须以 `cutting_purchased_steam` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water 输入（`cutting_purchased_hot_water`）

Purchased hot water 作为一个具体输入跨越“火鸡胴体分割”过程边界。须以 `cutting_purchased_hot_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas 输入（`cutting_natural_gas`）

Natural gas 作为一个具体输入跨越“火鸡胴体分割”过程边界。须以 `cutting_natural_gas` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：天然气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

本申报过程在该组中未规定原子交换。

##### 基本流

本申报过程在该组中未规定原子交换。

#### 输出

##### 产品流

###### Turkey meat cuts, fresh 输出（`cutting_fresh_meat_cuts`）

Turkey meat cuts, fresh 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_fresh_meat_cuts` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey meat cuts, fresh
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey bone for recovery 输出（`cutting_bone_recovery`）

Turkey bone for recovery 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_bone_recovery` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey bone for recovery
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey skin for recovery 输出（`cutting_skin_recovery`）

Turkey skin for recovery 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_skin_recovery` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey skin for recovery
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey fat for recovery 输出（`cutting_fat_recovery`）

Turkey fat for recovery 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_fat_recovery` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey fat for recovery
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat trim for recovery 输出（`cutting_trim_recovery`）

Turkey meat trim for recovery 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_trim_recovery` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey meat trim for recovery
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

###### Turkey bone waste 输出（`cutting_bone_waste`）

Turkey bone waste 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_bone_waste` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey bone waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey skin waste 输出（`cutting_skin_waste`）

Turkey skin waste 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_skin_waste` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey skin waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey fat waste 输出（`cutting_fat_waste`）

Turkey fat waste 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_fat_waste` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey fat waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat trim waste 输出（`cutting_trim_waste`）

Turkey meat trim waste 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_trim_waste` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey meat trim waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey cutting wastewater 输出（`cutting_wastewater`）

Turkey cutting wastewater 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey cutting wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 基本流

###### Carbon dioxide, fossil, to air 输出（`cutting_co2_air`）

Carbon dioxide, fossil, to air 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_co2_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air 输出（`cutting_nox_air`）

Nitrogen oxides to air 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_nox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air 输出（`cutting_sox_air`）

Sulfur oxides to air 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_sox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air 输出（`cutting_pm25_air`）

Particulate matter, less than 2.5 µm, to air 作为一个具体输出跨越“火鸡胴体分割”过程边界。须以 `cutting_pm25_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Particulate matter, less than 2.5 µm, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### 过程：火鸡肉预冷与冻结（`turkey_prechilling_freezing`）

#### 输入

##### 产品流

###### Dressed turkey carcass, fresh 输入（`freezing_fresh_carcass`）

Dressed turkey carcass, fresh 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_fresh_carcass` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Dressed turkey carcass, fresh
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat cuts, fresh 输入（`freezing_fresh_meat_cuts`）

Turkey meat cuts, fresh 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_fresh_meat_cuts` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey meat cuts, fresh
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Process water 输入（`freezing_process_water`）

Process water 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_process_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：过程用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity 输入（`freezing_grid_electricity`）

Grid electricity 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_grid_electricity` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：电网电力
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam 输入（`freezing_purchased_steam`）

Purchased steam 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_purchased_steam` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water 输入（`freezing_purchased_hot_water`）

Purchased hot water 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_purchased_hot_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas 输入（`freezing_natural_gas`）

Natural gas 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_natural_gas` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：天然气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel 输入（`freezing_diesel`）

Diesel fuel 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_diesel` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：柴油燃料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas 输入（`freezing_lpg`）

Liquefied petroleum gas 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_lpg` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：液化石油气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Ammonia refrigerant, R717 输入（`freezing_r717_makeup`）

Ammonia refrigerant, R717 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_r717_makeup` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Ammonia refrigerant, R717
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类记录可归属于指定设备的采购、充注、回收、退回及库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide refrigerant, R744 输入（`freezing_r744_makeup`）

Carbon dioxide refrigerant, R744 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_r744_makeup` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Carbon dioxide refrigerant, R744
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类记录可归属于指定设备的采购、充注、回收、退回及库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R404A 输入（`freezing_r404a_makeup`）

Refrigerant R404A 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_r404a_makeup` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：制冷剂R404A
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类记录可归属于指定设备的采购、充注、回收、退回及库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R507A 输入（`freezing_r507a_makeup`）

Refrigerant R507A 作为一个具体输入跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_r507a_makeup` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Refrigerant R507A
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类记录可归属于指定设备的采购、充注、回收、退回及库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

本申报过程在该组中未规定原子交换。

##### 基本流

本申报过程在该组中未规定原子交换。

#### 输出

##### 产品流

###### Turkey carcass, frozen 输出（`freezing_frozen_carcass`）

Turkey carcass, frozen 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_frozen_carcass` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey carcass, frozen
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat cuts, frozen 输出（`freezing_frozen_meat_cuts`）

Turkey meat cuts, frozen 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_frozen_meat_cuts` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey meat cuts, frozen
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

###### Off-specification frozen turkey meat 输出（`freezing_offspec_meat`）

Off-specification frozen turkey meat 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_offspec_meat` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Off-specification frozen turkey meat
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Used refrigeration compressor oil 输出（`freezing_compressor_oil`）

Used refrigeration compressor oil 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_compressor_oil` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Used refrigeration compressor oil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey freezing defrost wastewater 输出（`freezing_defrost_wastewater`）

Turkey freezing defrost wastewater 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_defrost_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey freezing defrost wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 基本流

###### Ammonia, refrigerant, to air 输出（`freezing_r717_air`）

Ammonia, refrigerant, to air 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_r717_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Ammonia, refrigerant, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类以期初库存加采购量减期末库存、回收量及退回量计算释放，并与维护事件核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, refrigerant-grade, to air 输出（`freezing_r744_air`）

Carbon dioxide, refrigerant-grade, to air 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_r744_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Carbon dioxide, refrigerant-grade, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类以期初库存加采购量减期末库存、回收量及退回量计算释放，并与维护事件核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R404A to air 输出（`freezing_r404a_air`）

Refrigerant R404A to air 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_r404a_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：制冷剂R404A，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类以期初库存加采购量减期末库存、回收量及退回量计算释放，并与维护事件核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R507A to air 输出（`freezing_r507a_air`）

Refrigerant R507A to air 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_r507a_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Refrigerant R507A to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类以期初库存加采购量减期末库存、回收量及退回量计算释放，并与维护事件核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_mass_balance`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, fossil, to air 输出（`freezing_co2_air`）

Carbon dioxide, fossil, to air 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_co2_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air 输出（`freezing_nox_air`）

Nitrogen oxides to air 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_nox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air 输出（`freezing_sox_air`）

Sulfur oxides to air 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_sox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air 输出（`freezing_pm25_air`）

Particulate matter, less than 2.5 µm, to air 作为一个具体输出跨越“火鸡肉预冷与冻结”过程边界。须以 `freezing_pm25_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Particulate matter, less than 2.5 µm, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### 过程：火鸡肉包装与冻藏（`turkey_packaging_frozen_storage`）

#### 输入

##### 产品流

###### Turkey carcass, frozen 输入（`packaging_frozen_carcass`）

Turkey carcass, frozen 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_frozen_carcass` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey carcass, frozen
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_mass_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat cuts, frozen 输入（`packaging_frozen_meat_cuts`）

Turkey meat cuts, frozen 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_frozen_meat_cuts` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey meat cuts, frozen
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据称量后的批次转移记录计算数量，并在相应过程质量平衡中核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_mass_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity 输入（`packaging_grid_electricity`）

Grid electricity 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_grid_electricity` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：电网电力
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam 输入（`packaging_purchased_steam`）

Purchased steam 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_purchased_steam` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water 输入（`packaging_purchased_hot_water`）

Purchased hot water 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_purchased_hot_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas 输入（`packaging_natural_gas`）

Natural gas 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_natural_gas` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：天然气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel 输入（`packaging_diesel`）

Diesel fuel 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_diesel` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：柴油燃料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas 输入（`packaging_lpg`）

Liquefied petroleum gas 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_lpg` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：液化石油气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Ammonia refrigerant, R717 输入（`packaging_r717_makeup`）

Ammonia refrigerant, R717 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_r717_makeup` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Ammonia refrigerant, R717
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类记录可归属于指定设备的采购、充注、回收、退回及库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide refrigerant, R744 输入（`packaging_r744_makeup`）

Carbon dioxide refrigerant, R744 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_r744_makeup` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Carbon dioxide refrigerant, R744
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类记录可归属于指定设备的采购、充注、回收、退回及库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R404A 输入（`packaging_r404a_makeup`）

Refrigerant R404A 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_r404a_makeup` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：制冷剂R404A
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类记录可归属于指定设备的采购、充注、回收、退回及库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R507A 输入（`packaging_r507a_makeup`）

Refrigerant R507A 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_r507a_makeup` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Refrigerant R507A
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类记录可归属于指定设备的采购、充注、回收、退回及库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Low-density polyethylene packaging bag 输入（`packaging_ldpe_bag`）

Low-density polyethylene packaging bag 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_ldpe_bag` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Low-density polyethylene packaging bag
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据领用、退回、称量及重复使用记录，记录该包装部件的净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Polyamide-polyethylene vacuum pouch 输入（`packaging_pape_pouch`）

Polyamide-polyethylene vacuum pouch 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_pape_pouch` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Polyamide-polyethylene vacuum pouch
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据领用、退回、称量及重复使用记录，记录该包装部件的净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Polypropylene packaging tray 输入（`packaging_pp_tray`）

Polypropylene packaging tray 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_pp_tray` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Polypropylene packaging tray
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据领用、退回、称量及重复使用记录，记录该包装部件的净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Corrugated fibreboard box 输入（`packaging_corrugated_box`）

Corrugated fibreboard box 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_corrugated_box` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据领用、退回、称量及重复使用记录，记录该包装部件的净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### High-density polyethylene reusable crate 输入（`packaging_hdpe_crate`）

High-density polyethylene reusable crate 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_hdpe_crate` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：High-density polyethylene reusable crate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据领用、退回、称量及重复使用记录，记录该包装部件的净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Wood pallet 输入（`packaging_wood_pallet`）

Wood pallet 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_wood_pallet` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据领用、退回、称量及重复使用记录，记录该包装部件的净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Polypropylene strap 输入（`packaging_pp_strap`）

Polypropylene strap 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_pp_strap` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Polypropylene strap
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据领用、退回、称量及重复使用记录，记录该包装部件的净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Paper label 输入（`packaging_paper_label`）

Paper label 作为一个具体输入跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_paper_label` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：纸质标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据领用、退回、称量及重复使用记录，记录该包装部件的净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

本申报过程在该组中未规定原子交换。

##### 基本流

本申报过程在该组中未规定原子交换。

#### 输出

##### 产品流

###### Meat of turkeys, frozen 输出（`packaging_reference_frozen_turkey_meat`）

Meat of turkeys, frozen 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_reference_frozen_turkey_meat` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：冷冻火鸡肉 `2cf4dbce-c2cf-4ca6-a1bc-5366fad13063`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：将放行净产品质量归一化为恰好 1 kg；产品质量中排除全部包装部件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_mass_records`
- 来源：`un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

###### Off-specification packaged frozen turkey meat 输出（`packaging_offspec_meat`）

Off-specification packaged frozen turkey meat 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_offspec_meat` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Off-specification packaged frozen turkey meat
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_mass_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste low-density polyethylene packaging bag 输出（`packaging_waste_ldpe_bag`）

Waste low-density polyethylene packaging bag 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_waste_ldpe_bag` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste low-density polyethylene packaging bag
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste polyamide-polyethylene vacuum pouch 输出（`packaging_waste_pape_pouch`）

Waste polyamide-polyethylene vacuum pouch 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_waste_pape_pouch` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste polyamide-polyethylene vacuum pouch
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste polypropylene packaging tray 输出（`packaging_waste_pp_tray`）

Waste polypropylene packaging tray 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_waste_pp_tray` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste polypropylene packaging tray
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste corrugated fibreboard box 输出（`packaging_waste_corrugated_box`）

Waste corrugated fibreboard box 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_waste_corrugated_box` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste corrugated fibreboard box
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste high-density polyethylene reusable crate 输出（`packaging_waste_hdpe_crate`）

Waste high-density polyethylene reusable crate 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_waste_hdpe_crate` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste high-density polyethylene reusable crate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste wood pallet 输出（`packaging_waste_wood_pallet`）

Waste wood pallet 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_waste_wood_pallet` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste wood pallet
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste polypropylene strap 输出（`packaging_waste_pp_strap`）

Waste polypropylene strap 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_waste_pp_strap` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste polypropylene strap
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste paper label 输出（`packaging_waste_paper_label`）

Waste paper label 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_waste_paper_label` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：废纸质标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Used frozen-storage compressor oil 输出（`packaging_compressor_oil`）

Used frozen-storage compressor oil 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_compressor_oil` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Used frozen-storage compressor oil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 基本流

###### Ammonia, refrigerant, to air 输出（`packaging_r717_air`）

Ammonia, refrigerant, to air 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_r717_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Ammonia, refrigerant, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类以期初库存加采购量减期末库存、回收量及退回量计算释放，并与维护事件核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, refrigerant-grade, to air 输出（`packaging_r744_air`）

Carbon dioxide, refrigerant-grade, to air 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_r744_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Carbon dioxide, refrigerant-grade, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类以期初库存加采购量减期末库存、回收量及退回量计算释放，并与维护事件核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R404A to air 输出（`packaging_r404a_air`）

Refrigerant R404A to air 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_r404a_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：制冷剂R404A，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类以期初库存加采购量减期末库存、回收量及退回量计算释放，并与维护事件核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R507A to air 输出（`packaging_r507a_air`）

Refrigerant R507A to air 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_r507a_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Refrigerant R507A to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按制冷剂种类以期初库存加采购量减期末库存、回收量及退回量计算释放，并与维护事件核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, fossil, to air 输出（`packaging_co2_air`）

Carbon dioxide, fossil, to air 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_co2_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air 输出（`packaging_nox_air`）

Nitrogen oxides to air 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_nox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air 输出（`packaging_sox_air`）

Sulfur oxides to air 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_sox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air 输出（`packaging_pm25_air`）

Particulate matter, less than 2.5 µm, to air 作为一个具体输出跨越“火鸡肉包装与冻藏”过程边界。须以 `packaging_pm25_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Particulate matter, less than 2.5 µm, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_utility_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### 过程：工厂清洗与消毒（`plant_cleaning_sanitation`）

#### 输入

##### 产品流

###### Process water 输入（`cleaning_process_water`）

Process water 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_process_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：过程用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity 输入（`cleaning_grid_electricity`）

Grid electricity 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_grid_electricity` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：电网电力
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam 输入（`cleaning_purchased_steam`）

Purchased steam 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_purchased_steam` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water 输入（`cleaning_purchased_hot_water`）

Purchased hot water 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_purchased_hot_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：外购热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas 输入（`cleaning_natural_gas`）

Natural gas 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_natural_gas` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：天然气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel 输入（`cleaning_diesel`）

Diesel fuel 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_diesel` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：柴油燃料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas 输入（`cleaning_lpg`）

Liquefied petroleum gas 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_lpg` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：液化石油气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hydroxide solution 输入（`cleaning_sodium_hydroxide`）

Sodium hydroxide solution 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_sodium_hydroxide` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Sodium hydroxide solution
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitric acid solution 输入（`cleaning_nitric_acid`）

Nitric acid solution 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_nitric_acid` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Nitric acid solution
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Peracetic acid solution 输入（`cleaning_peracetic_acid`）

Peracetic acid solution 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_peracetic_acid` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Peracetic acid solution
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hypochlorite solution 输入（`cleaning_sodium_hypochlorite`）

Sodium hypochlorite solution 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_sodium_hypochlorite` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Sodium hypochlorite solution
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Benzalkonium chloride solution 输入（`cleaning_benzalkonium_chloride`）

Benzalkonium chloride solution 作为一个具体输入跨越“工厂清洗与消毒”过程边界。须以 `cleaning_benzalkonium_chloride` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Benzalkonium chloride solution
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

本申报过程在该组中未规定原子交换。

##### 基本流

本申报过程在该组中未规定原子交换。

#### 输出

##### 产品流

本申报过程在该组中未规定原子交换。

##### 废物流

###### Sodium hydroxide cleaning wastewater 输出（`cleaning_sodium_hydroxide_wastewater`）

Sodium hydroxide cleaning wastewater 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_sodium_hydroxide_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Sodium hydroxide cleaning wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitric acid cleaning wastewater 输出（`cleaning_nitric_acid_wastewater`）

Nitric acid cleaning wastewater 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_nitric_acid_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Nitric acid cleaning wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Peracetic acid disinfection wastewater 输出（`cleaning_peracetic_acid_wastewater`）

Peracetic acid disinfection wastewater 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_peracetic_acid_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Peracetic acid disinfection wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hypochlorite disinfection wastewater 输出（`cleaning_sodium_hypochlorite_wastewater`）

Sodium hypochlorite disinfection wastewater 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_sodium_hypochlorite_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Sodium hypochlorite disinfection wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Benzalkonium chloride disinfection wastewater 输出（`cleaning_benzalkonium_wastewater`）

Benzalkonium chloride disinfection wastewater 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_benzalkonium_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Benzalkonium chloride disinfection wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Final-rinse sanitation wastewater 输出（`cleaning_final_rinse_wastewater`）

Final-rinse sanitation wastewater 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_final_rinse_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：末次冲洗消毒废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Used cellulose cleaning cloth 输出（`cleaning_used_cloth`）

Used cellulose cleaning cloth 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_used_cloth` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Used cellulose cleaning cloth
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste high-density polyethylene chemical container 输出（`cleaning_waste_hdpe_container`）

Waste high-density polyethylene chemical container 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_waste_hdpe_container` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Waste high-density polyethylene chemical container
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 基本流

###### Carbon dioxide, fossil, to air 输出（`cleaning_co2_air`）

Carbon dioxide, fossil, to air 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_co2_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air 输出（`cleaning_nox_air`）

Nitrogen oxides to air 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_nox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air 输出（`cleaning_sox_air`）

Sulfur oxides to air 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_sox_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air 输出（`cleaning_pm25_air`）

Particulate matter, less than 2.5 µm, to air 作为一个具体输出跨越“工厂清洗与消毒”过程边界。须以 `cleaning_pm25_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Particulate matter, less than 2.5 µm, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### Grid electricity 输入（`wwt_grid_electricity`）

Grid electricity 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_grid_electricity` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：电网电力
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Ferric chloride solution 输入（`wwt_ferric_chloride`）

Ferric chloride solution 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_ferric_chloride` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Ferric chloride solution
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Anionic polyacrylamide solution 输入（`wwt_anionic_polyacrylamide`）

Anionic polyacrylamide solution 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_anionic_polyacrylamide` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Anionic polyacrylamide solution
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hydroxide solution 输入（`wwt_sodium_hydroxide`）

Sodium hydroxide solution 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_sodium_hydroxide` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Sodium hydroxide solution
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据经校准计量、称量、发票、领用记录或库存核对记录，记录可归属于该批次的数量；该交换不存在时须说明不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 废物流

###### Turkey lairage wastewater 输入（`wwt_lairage_wastewater`）

Turkey lairage wastewater 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_lairage_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey lairage wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey slaughter wastewater, high organic load 输入（`wwt_high_load_slaughter_wastewater`）

Turkey slaughter wastewater, high organic load 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_high_load_slaughter_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey slaughter wastewater, high organic load
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey slaughter wastewater, ordinary load 输入（`wwt_ordinary_slaughter_wastewater`）

Turkey slaughter wastewater, ordinary load 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_ordinary_slaughter_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey slaughter wastewater, ordinary load
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey cutting wastewater 输入（`wwt_cutting_wastewater`）

Turkey cutting wastewater 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_cutting_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey cutting wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey freezing defrost wastewater 输入（`wwt_freezing_defrost_wastewater`）

Turkey freezing defrost wastewater 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_freezing_defrost_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Turkey freezing defrost wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hydroxide cleaning wastewater 输入（`wwt_sodium_hydroxide_wastewater`）

Sodium hydroxide cleaning wastewater 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_sodium_hydroxide_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Sodium hydroxide cleaning wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitric acid cleaning wastewater 输入（`wwt_nitric_acid_wastewater`）

Nitric acid cleaning wastewater 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_nitric_acid_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Nitric acid cleaning wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Peracetic acid disinfection wastewater 输入（`wwt_peracetic_acid_wastewater`）

Peracetic acid disinfection wastewater 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_peracetic_acid_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Peracetic acid disinfection wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hypochlorite disinfection wastewater 输入（`wwt_sodium_hypochlorite_wastewater`）

Sodium hypochlorite disinfection wastewater 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_sodium_hypochlorite_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Sodium hypochlorite disinfection wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Benzalkonium chloride disinfection wastewater 输入（`wwt_benzalkonium_wastewater`）

Benzalkonium chloride disinfection wastewater 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_benzalkonium_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Benzalkonium chloride disinfection wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Final-rinse sanitation wastewater 输入（`wwt_final_rinse_wastewater`）

Final-rinse sanitation wastewater 作为一个具体输入跨越“场内废水处理”过程边界。须以 `wwt_final_rinse_wastewater` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：末次冲洗消毒废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 基本流

本申报过程在该组中未规定原子交换。

#### 输出

##### 产品流

本申报过程在该组中未规定原子交换。

##### 废物流

###### Treated turkey-slaughterhouse effluent 输出（`wwt_treated_effluent`）

Treated turkey-slaughterhouse effluent 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_treated_effluent` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Treated turkey-slaughterhouse effluent
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接记录该水流质量，或以有文件依据的流体密度将实测体积换算为质量；该水流须与其他废水流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Dewatered biological sludge 输出（`wwt_dewatered_sludge`）

Dewatered biological sludge 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_dewatered_sludge` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Dewatered biological sludge
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Coarse wastewater screenings 输出（`wwt_coarse_screenings`）

Coarse wastewater screenings 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_coarse_screenings` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Coarse wastewater screenings
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Dissolved-air-flotation turkey fat waste 输出（`wwt_daf_fat`）

Dissolved-air-flotation turkey fat waste 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_daf_fat` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Dissolved-air-flotation turkey fat waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Wastewater-treatment grit 输出（`wwt_grit`）

Wastewater-treatment grit 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_grit` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Wastewater-treatment grit
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录单独称量或以其他方式量化并送往申报去向的数量，同时保留去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### 基本流

###### Water to receiving water 输出（`wwt_water_release`）

Water to receiving water 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_water_release` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Water to receiving water
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据时间匹配的排水流量和分析记录单独计算该排放，并保留采样点、方法及时间匹配信息。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_sampling`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Chemical oxygen demand to water 输出（`wwt_cod_water`）

Chemical oxygen demand to water 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_cod_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据时间匹配的排水流量和分析记录单独计算该排放，并保留采样点、方法及时间匹配信息。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_sampling`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Biochemical oxygen demand, 5-day, to water 输出（`wwt_bod5_water`）

Biochemical oxygen demand, 5-day, to water 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_bod5_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Biochemical oxygen demand, 5-day, to water
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据时间匹配的排水流量和分析记录单独计算该排放，并保留采样点、方法及时间匹配信息。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_sampling`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Total nitrogen to water 输出（`wwt_total_n_water`）

Total nitrogen to water 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_total_n_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：总氮，排入水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据时间匹配的排水流量和分析记录单独计算该排放，并保留采样点、方法及时间匹配信息。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_sampling`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Total phosphorus to water 输出（`wwt_total_p_water`）

Total phosphorus to water 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_total_p_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：总磷，排入水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据时间匹配的排水流量和分析记录单独计算该排放，并保留采样点、方法及时间匹配信息。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_sampling`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Suspended solids to water 输出（`wwt_suspended_solids_water`）

Suspended solids to water 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_suspended_solids_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：悬浮固体，排入水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据时间匹配的排水流量和分析记录单独计算该排放，并保留采样点、方法及时间匹配信息。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_sampling`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Animal fat to water 输出（`wwt_animal_fat_water`）

Animal fat to water 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_animal_fat_water` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：Animal fat to water
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据时间匹配的排水流量和分析记录单独计算该排放，并保留采样点、方法及时间匹配信息。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_sampling`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Methane, biogenic, to air 输出（`wwt_methane_air`）

Methane, biogenic, to air 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_methane_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：生物源甲烷，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Dinitrogen monoxide to air 输出（`wwt_n2o_air`）

Dinitrogen monoxide to air 作为一个具体输出跨越“场内废水处理”过程边界。须以 `wwt_n2o_air` 独立记录，以保持适用的质量、能源、废物或排放平衡。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：依据采集的燃料、运行、监测或质量平衡记录，采用有文件依据的方法计算批次归属排放；不得与实测排放重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg net frozen turkey meat reference product
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all_foreground_processes | 采用过程细分、独立计量、批次追踪及直接归属，之后方可实施分配。 | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_relation` | joint_process_outputs | 过程细分仍不能避免分配时，采用能够反映投入、作业与各独立销售产出之间因果关系的、有文件支持的物理关系。 | `eu-pef-recommendation-2021-2279` |
| `allocation_economic_fallback` | joint_process_outputs | 仅在无法建立可辩护物理关系时采用经济分配；使用同期净价值，并记录价格来源、期间、币种及敏感性。 | `eu-pef-recommendation-2021-2279` |
| `allocation_named_coproducts` | blood_feathers_offal_fat_bone_skin_trim | 分配前按实际去向将每一具名产出分类为产品、副产品、可回收物或废物；不得合并去向。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `allocation_waste_treatment` | waste_and_wastewater | 将处理负荷归属于产生相应具名废物或废水流的过程；除非一致采用有文件依据的共用处理因果驱动因素。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `allocation_reusable_packaging` | reusable_packaging | 依据有文件支持的实际或预期周转次数分配可重复使用周转箱和托盘的制造负荷，并申报损失及回收地域。 | `eu-pef-recommendation-2021-2279` |
| `allocation_mass_balance_check` | all_material_outputs | 用同一批次质量平衡核对已分配与未分配数量；分配不得创造或消除物理质量。 | `eu-pef-recommendation-2021-2279` |
| `allocation_disclosure` | dataset_metadata | 申报过程细分、分配层级、分配因子、因子来源、副产品去向、排除的抵扣及敏感性结果。 | `eu-pef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_lairage_records` | `live_turkey_receiving_lairage` | received_birds; drinking_water; utilities; mortality; manure; litter; wastewater; air_releases | weighbridge_log; bird_count_log; meter_log; waste_transfer_record | supplier_lot_id; bird_count; live_mass_kg; water_kg; electricity_kwh; fuel_kg; mortality_kg; manure_kg; litter_kg; wastewater_kg; operating_hours | 使用经校准的接收秤、计量表、库存核对、环境监测及去向记录。 | kg; kWh; count | per_batch | reporting_period | foreground_site | 将记录归属于接收批次，并通过放行产品质量归一化。 | 校准记录；批次核对；废物去向证据；监测方法 |
| `cp_slaughter_utility_records` | `turkey_slaughter_dressing` | water; electricity; steam; hot_water; fuels; combustion_releases | meter_log; invoice; fuel_issue_log; stack_test | water_kg; electricity_kwh; steam_kg; hot_water_kg; natural_gas_kg; diesel_kg; lpg_kg; stack_result_kg | 优先使用过程计量表；否则以有文件依据的因果分配驱动因素核对设施记录。 | kg; kWh | per_batch_or_shift | reporting_period | foreground_site | 仅归属屠宰份额，并通过放行产品质量归一化。 | 计量覆盖；校准；发票核对；分配工作表 |
| `cp_slaughter_mass_balance` | `turkey_slaughter_dressing` | live_birds; carcass; blood; feathers; named_organs; neck; feet; fat; contents; condemned_parts | batch_mass_balance | accepted_live_mass_kg; carcass_mass_kg; each_output_mass_kg; each_waste_mass_kg | 分别称量每一种具名产品、副产品及废物流，或依据可审计批次转移记录推导。 | kg | per_batch | reporting_period | foreground_site | 核对各独立具名流，不得将食用内脏并入参考产品。 | 秤校准；批次核对；去向记录 |
| `cp_slaughter_wastewater_records` | `turkey_slaughter_dressing` | high_load_wastewater; ordinary_load_wastewater | flow_meter_log; segregation_log | stream_mass_kg; stream_volume_m3; density_kg_per_m3; segregation_period | 计量分流废水；仅可依据有文件支持的密度将实测体积换算为质量。 | kg; m3 | per_batch_or_day | reporting_period | foreground_site | 按与生产批次关联的时间、生产线或实测排水量归属。 | 流量计校准；密度依据；分流记录 |
| `cp_cutting_records` | `turkey_carcass_cutting` | carcass; utilities; cuts; bone; skin; fat; trim; wastewater; combustion_releases | batch_mass_balance; meter_log; waste_transfer_record | carcass_mass_kg; utility_quantity; cut_mass_kg; each_recovery_mass_kg; each_waste_mass_kg; wastewater_kg | 使用分割线秤、计量表以及独立编码的回收或处置记录。 | kg; kWh | per_batch | reporting_period | foreground_site | 仅对实际分割产品纳入该过程，并通过放行产品质量归一化。 | 秤校准；计量记录；产品代码；去向证据 |
| `cp_freezing_mass_balance` | `turkey_prechilling_freezing` | fresh_meat; frozen_meat; offspec_meat | batch_mass_balance; release_log | fresh_input_mass_kg; frozen_output_mass_kg; offspec_mass_kg; product_form; freezing_method | 按产品形式和冻结批次核对称量投入与冷冻产出。 | kg | per_batch | reporting_period | foreground_site | 各批次均通过放行参考产品净质量归一化。 | 秤校准；放行记录；批次核对 |
| `cp_freezing_utility_records` | `turkey_prechilling_freezing` | water; electricity; steam; hot_water; fuels; defrost_wastewater; combustion_releases | meter_log; invoice; fuel_issue_log; defrost_log | water_kg; electricity_kwh; steam_kg; hot_water_kg; natural_gas_kg; diesel_kg; lpg_kg; defrost_wastewater_kg | 使用冻结系统及公用工程计量表；记录任何共用计量表分配。 | kg; kWh | per_freezing_campaign | reporting_period | foreground_site | 以计量或因果设备时间驱动因素将公用工程归属于冻结批次。 | 计量表校准；设备运行时间；分配工作表 |
| `cp_refrigerant_mass_balance` | `turkey_prechilling_freezing` | refrigerant_makeup; refrigerant_release; compressor_oil | refrigerant_inventory; maintenance_log | refrigerant_identity; opening_stock_kg; purchases_kg; closing_stock_kg; recovered_kg; returned_kg; oil_waste_kg | 对每一种具名制冷剂建立专门质量平衡，并区分冻结设备与冻藏设备。 | kg | per_reporting_period | reporting_period | foreground_site | 将设备特定损失归属于相关生产批次，并通过放行质量归一化。 | 采购记录；维护记录；回收记录；签字核对表 |
| `cp_frozen_storage_utility_records` | `turkey_packaging_frozen_storage` | electricity; steam; hot_water; fuels; refrigerant_makeup; refrigerant_release; compressor_oil | meter_log; fuel_issue_log; refrigerant_inventory; maintenance_log | electricity_kwh; steam_kg; hot_water_kg; natural_gas_kg; diesel_kg; lpg_kg; refrigerant_balance_fields; oil_waste_kg; storage_duration_h | 计量冻藏公用工程，并保留制冷剂特定库存及维护记录。 | kg; kWh; h | per_storage_campaign | reporting_period | foreground_site | 依据实测产品占用量及持续时间归属冻藏公用工程，并通过放行质量归一化。 | 计量表校准；占用日志；制冷剂核对；维护记录 |
| `cp_packaging_material_records` | `turkey_packaging_frozen_storage` | packaging_inputs; packaging_wastes | stock_issue_record; packaging_specification; waste_transfer_record | packaging_component_id; material_identity; issued_mass_kg; returned_mass_kg; waste_mass_kg; reuse_cycles | 依据库存领用、称量及废物记录分别记录每个包装部件。 | kg; count | per_batch | reporting_period | foreground_site | 计算各部件净消耗质量；申报可重复使用物品的周转次数分配。 | 供应商规格；称量记录；库存核对；废物去向 |
| `cp_release_mass_records` | `turkey_packaging_frozen_storage` | frozen_intermediate; released_reference_product; offspec_product | batch_release_log; scale_record | gross_mass_kg; packaging_tare_kg; net_released_mass_kg; frozen_state; product_form; offspec_mass_kg; storage_temperature; storage_duration | 通过经校准的放行称量扣除包装皮重后确定参考质量。 | kg | per_batch | reporting_period | foreground_site | 将归一化参考产出设为恰好 1 kg 放行净产品。 | 秤校准；皮重记录；放行证明；温度日志 |
| `cp_cleaning_sanitation_records` | `plant_cleaning_sanitation` | water; electricity; steam; hot_water; fuels; named_chemicals; named_wastewaters; cleaning_wastes; combustion_releases | sanitation_log; meter_log; chemical_issue_log; waste_transfer_record | water_kg; utility_quantity; each_chemical_kg; formulation_concentration; each_wastewater_kg; cloth_waste_kg; container_waste_kg | 使用清洗消毒计划、计量、化学品领用记录、配方规格及独立编码的废物记录。 | kg; kWh | per_sanitation_cycle | reporting_period | foreground_site | 将清洗消毒活动归属于所清洁的生产线，并通过放行质量归一化。 | 计量表校准；化学品规格；清洗消毒验证；废物去向 |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | influent_streams; electricity; treatment_chemicals; treated_effluent; sludge; screenings; fat_waste; grit; air_releases | treatment_log; flow_meter_log; chemical_issue_log; waste_transfer_record | each_influent_mass_kg; electricity_kwh; each_chemical_kg; effluent_mass_kg; each_residue_mass_kg; methane_kg; nitrous_oxide_kg | 保持各进水流及处理化学品相互独立；按场内处理工艺测量处理产出与残余物。 | kg; kWh | per_day_or_batch | reporting_period | foreground_site | 依据实测进水负荷或其他有文件依据的因果驱动因素将处理归属于参考批次。 | 流量计校准；化学品记录；残余物去向；计算工作表 |
| `cp_effluent_sampling` | `onsite_wastewater_treatment` | water_release; cod; bod5; total_nitrogen; total_phosphorus; suspended_solids; animal_fat | laboratory_result; discharge_flow_log | discharge_volume_m3; density_kg_per_m3; each_concentration_kg_per_m3; sample_time; sampling_point | 采用具有代表性的排放采样及经认可或有文件支持的分析方法，并匹配排水流量。 | kg; m3; kg_per_m3 | per_discharge_period | reporting_period | foreground_site | 依据匹配的浓度与流量记录分别计算每项污染物负荷。 | 实验室报告；方法标识；样品交接记录；流量计校准 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all_inventory_rows | 将每个批次归属数量除以扣除包装皮重后的冷冻火鸡肉放行净质量。 | batch_quantity; net_released_product_mass_kg | quantity_per_1_kg_reference_product | `eu-pef-recommendation-2021-2279` |
| `calc_reference_output` | packaging_reference_frozen_turkey_meat | 放行质量及包装皮重检查通过后，将归一化产品产出设为恰好 1 kg。 | net_released_product_mass_kg; packaging_tare_kg | reference_output_kg | `un-cpc-3-0-2025`, `eu-pef-recommendation-2021-2279` |
| `calc_process_mass_balance` | slaughter_cutting_freezing_packaging | 对每个过程，在同一批次边界内核对称量投入与分别具名的产品、副产品、废物、库存变化及实测损失。 | each_input_mass_kg; each_output_mass_kg; stock_change_kg; measured_loss_kg | process_mass_balance_difference_kg | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_shared_utility_attribution` | shared_utility_meters | 采用设备运行时间、实测负荷或产品占用量等有文件依据的因果驱动因素归属共用计量公用工程；不得合并载体。 | meter_quantity; causal_driver_reference_batch; causal_driver_total | batch_attributable_utility_quantity | `eu-pef-recommendation-2021-2279` |
| `calc_combustion_release` | fuel_emission_rows | 依据批次归属燃料消耗及设施特定测量或申报的认可因子计算每项具名空气排放；烟道实测结果优先且不得重复计算。 | fuel_quantity; emission_measurement_or_factor | named_air_release_kg | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_refrigerant_release` | refrigerant_emission_rows | 对每种制冷剂及设备组，以期初库存加采购量减期末库存、回收量及退回量计算释放，并核对维护充注。 | opening_stock_kg; purchases_kg; closing_stock_kg; recovered_kg; returned_kg | refrigerant_release_kg | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_packaging_consumption` | packaging_rows | 对每个包装部件，以领用质量减去退回未用质量计算消耗，并对可重复使用部件采用已申报的周转次数分配。 | issued_mass_kg; returned_mass_kg; use_cycle_factor | packaging_mass_per_batch_kg | `eu-pef-recommendation-2021-2279` |
| `calc_effluent_load` | water_emission_rows | 将匹配的排水体积乘以实测浓度，分别计算每项污染物负荷；仅可依据有文件支持的密度将体积换算为水质量。 | discharge_volume_m3; pollutant_concentration_kg_per_m3; water_density_kg_per_m3 | pollutant_load_kg; discharged_water_kg | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_frozen_yield` | freezing_outputs | 将同一批次冷冻净产出质量除以相应鲜胴体或分割肉投入质量；不合格产出须另行报告。 | frozen_output_mass_kg; fresh_input_mass_kg; offspec_mass_kg | freezing_yield_ratio | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_allocation_factor` | joint_process_outputs | 应用已申报的物理关系；无法应用时，根据同期产出净价值计算经济份额并保留敏感性数据。 | output_quantity_or_value; total_quantity_or_value | allocation_factor | `eu-pef-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference_product | 证明精确 CPC 21144 冷冻火鸡肉范围，并分别识别产品形式、带骨状态、带皮状态、冷冻状态判据及内脏排除。 | product specification; release certificate; classification record |
| `dq_temporal_coverage` | all_foreground_records | 使用覆盖申报报告期及代表性生产批次的记录；季节性运行具有实质影响时亦须覆盖。 | dated logs; reporting-period reconciliation |
| `dq_meter_calibration` | metered_resources | 保留秤、公用工程计量表、废水流量计、温度传感器及分析仪器的校准或核验证据。 | calibration certificates; verification logs |
| `dq_mass_completeness` | material_balance_rows | 分别核算活禽、可销售肉、每项具名副产品、每项具名废物、库存变化及实测损失。 | batch mass-balance worksheet; destination records |
| `dq_refrigerant_specificity` | refrigerant_rows | 保留设备特定且制冷剂特定的库存、采购、回收、退回及维护记录。 | refrigerant ledger; maintenance work orders |
| `dq_chemical_specificity` | chemical_rows | 为每一种具名化学品保留产品标识、配方浓度、领用数量及供应商规格。 | supplier specification; issue log |
| `dq_packaging_specificity` | packaging_rows | 为每个包装部件保留材料标识、质量、供应商规格、周转次数、损失率及去向。 | packaging specification; stock reconciliation |
| `dq_effluent_quality` | water_emission_rows | 将采样时间及采样点与排水流量记录匹配；识别分析方法、检出限、实验室及处理运行条件。 | laboratory report; chain of custody; flow log |
| `dq_allocation_transparency` | allocated_processes | 保留从过程细分、物理关系到任何经济后备分配的决策路径，以及因子来源和敏感性。 | allocation worksheet; source records; sensitivity result |
| `dq_data_gap_disclosure` | all_inventory_rows | 识别缺失、估算、共用计量、低于检出限及不适用记录，不得以未经评审的默认范围替代。 | data-gap register; reviewer note |
| `dq_geographic_technology_fit` | upstream_and_foreground_data | 申报设施地域、屠宰与冻结技术、电网及燃料供应情景、废水路径、制冷系统及上游数据集代表性。 | dataset metadata; technology description; upstream dataset metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_cpc_scope` | reference_product | 参考产品标识必须为精确 CPC 21144 冷冻火鸡肉；拒绝鲜或冷藏火鸡肉、食用内脏、其他禽种肉、机械分离肉及加工产品。 | `un-cpc-3-0-2025` |
| `validate_reference_uuid` | reference_product | 参考产品流 UUID 必须为 2cf4dbce-c2cf-4ca6-a1bc-5366fad13063，并使用已核验的 Mass 属性、Units of mass 单位组及 kg 参考单位。 | `un-cpc-3-0-2025` |
| `validate_reference_amount` | reference_product | 排除包装皮重后，归一化参考产出必须恰好等于 1 kg 放行净产品。 | `eu-pef-recommendation-2021-2279` |
| `validate_frozen_state` | reference_product | 必须申报冷冻状态判据、产品中心测点、放行温度记录、储存温度及储存时长。 | `un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_boundary_start` | foreground_system | 确认屠宰场门口接收活火鸡为前景起点，并将养殖、饲料、孵化及入厂运输保持在上游。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_process_coverage` | process_map | 所有必需过程必须存在；条件性分割及场内废水处理必须有适用性说明。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_atomic_rows` | all_inventory_rows | 每张卡必须仅含一个具体交换。拒绝载体、化学品、包装、废物、副产品、制冷剂或排放选择器及组合标签。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_nonreference_uuid_status` | all_nonreference_inventory_rows | 所有非参考流 UUID 在精确 flow-hybrid-search 与公开 state-100 直接回读一致前必须留空；未解析 row_id 必须与 manifest 评审元数据闭合。 | `eu-pef-recommendation-2021-2279` |
| `validate_mass_balance` | material_balance_rows | 在申报批次边界内核对活禽投入、肉类产出、每项具名副产品、每项具名废物、库存变化及实测损失。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_utility_separation` | utility_rows | 在每个适用阶段，将电力、外购蒸汽、外购热水、天然气、柴油及液化石油气作为独立交换验证。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_refrigerant_balance` | refrigerant_rows | 分别验证 R717、R744、R404A 及 R507A 的补充与释放平衡；拒绝任何合并制冷剂行。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_chemical_separation` | chemical_rows | 将每种清洗、消毒及废水处理化学品作为具有浓度和数量的独立配方验证。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_packaging_tare` | packaging_rows | 验证各包装部件独立记录、产品质量排除包装皮重，以及可重复使用物品的已申报分配。 | `eu-pef-recommendation-2021-2279` |
| `validate_byproduct_destinations` | co_product_rows | 分别验证血、羽毛、每种食用器官、颈、爪、脂肪、骨、皮及修整料的标识、质量、去向及分配处理。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_wastewater_separation` | wastewater_rows | 分别验证每一具名废水流，并防止在产生过程与场内处理投入之间重复计算。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_waterborne_loads` | water_emission_rows | 验证每项具名水污染负荷所匹配的排水流量和浓度，包括方法及采样点。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_air_releases` | air_emission_rows | 适用时分别验证二氧化碳、氮氧化物、硫氧化物、颗粒物、制冷剂、甲烷、氧化亚氮及氨行。 | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_allocation` | allocated_processes | 验证过程细分、分配层级、因子计算、副产品去向、可重复使用包装处理及敏感性申报。 | `eu-pef-recommendation-2021-2279` |
| `validate_source_traceability` | all_rules_and_rows | 所有 source_ids 必须解析至第 11 节；前景记录、公式、分配、换算及数据缺口必须保留可审计证据。 | `eu-pef-recommendation-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冷冻火鸡肉产品特定前景生产数据集 |
| downstream_use | 经评审后，可作为 `secondary_dataset` 或 `background_dataset` 用于产品、技术、地域、冷冻状态及边界相匹配的研究 |
| allowed_use | 在必需限定信息、过程适用性、上游链接、分配及数据质量申报完整时，用于精确 CPC 21144 冷冻火鸡肉的工厂门口 LCA 建模 |
| excluded_use | 鲜或冷藏火鸡肉；食用内脏；其他禽种肉；机械分离肉；加工产品；仅养殖数据集；未增加下游建模的零售、使用阶段或寿命终止声明 |
| required_metadata | PCR id；CPC 代码；参考 UUID；净质量基准；火鸡物种；产品形式；带骨及带皮状态；冷冻状态判据；冻结技术；放行及储存温度；储存时长；包装及皮重；设施地域；报告期；过程适用性；制冷剂标识；副产品去向；废水路径 |
| required_quality_disclosure | 一手数据占比；计量覆盖及校准；质量平衡差；共用计量归属；制冷剂平衡；分析方法；分配层级及敏感性；包装周转次数；数据缺口；上游数据集代表性 |
| update_trigger | 产品范围、屠宰或分割路径、冻结技术、制冷系统、包装、冻藏制度、副产品去向、废水处理、分配方法、设施地域或重要数据质量证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | 联合国统计司，《中央产品分类》3.0 版结构，2025 年 6 月 30 日，仓库保留原始 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 精确 CPC 21144 冷冻火鸡肉范围，以及与 CPC 21124 鲜或冷藏火鸡肉、CPC 21160 禽类食用内脏的区分 |
| `eu-jrc-sa-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，《屠宰场、动物副产品和/或食用副产品行业最佳可行技术参考文件》，JRC135916，2024，DOI 10.2760/18199：https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 过程分解、屠宰作业、制冷、清洗消毒、公用工程、废水、具名动物产出、废物及排放；不复制默认数量 |
| `eu-pef-recommendation-2021-2279` | `official_guidance` | 欧盟委员会，关于使用环境足迹方法的建议（EU）2021/2279，合并文本：https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230 | 产品特定物料清单、企业特定前景数据、完整生命周期清单、分配层级、透明度、数据质量及验证 |
