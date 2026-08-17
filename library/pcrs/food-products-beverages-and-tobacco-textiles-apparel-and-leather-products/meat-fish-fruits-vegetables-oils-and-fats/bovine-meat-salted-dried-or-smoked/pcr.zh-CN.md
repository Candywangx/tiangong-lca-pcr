---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.bovine-meat-salted-dried-or-smoked
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 盐渍、干制或熏制牛肉

## 1. 范围与适用性

本 PCR 适用于牛肌肉产品的前景数据包，其声明的成品身份由一种具体盐渍、干制、熏制路线，或一个明确排序的上述作业组合形成。每个数据包须在清单采集前锁定一个路线标识和一个成品规格。参考数量为可食产品净质量。

本类别包括采用干盐、盐水、受控干制、直接木烟、一种具体识别的液体烟熏液或有序组合保存的牛肉。排除未采用这些保存作业销售的鲜、冷藏或冷冻牛肉；食用杂碎；猪肉；其他物种肉；香肠；浸膏；预制菜肴；肉粉；以及主要身份属于另一保存肉类别的产品。屠宰与入厂运输属于上游。分销、零售、制备、使用、食物损失与包装寿命终止属于下游。

FAO 手册仅支持过程分解与路线控制。其示例配方、尺寸、时间、温度、产率与贮存说明不构成本 PCR 的默认值或允许范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.bovine-meat-salted-dried-or-smoked` |
| classification_refs | CPC 3.0 `21182` — Bovine meat, salted, dried or smoked（`exact`） |
| covered_products | 以已声明盐渍、干制、直接木烟或已识别液体烟身份销售的牛肌肉；当每项作业与中间状态均有声明时，覆盖有序组合。 |
| excluded_products | 未保存的鲜、冷藏或冷冻牛肉；牛杂碎；其他物种肉；猪培根或火腿；香肠；浸膏；预制菜肴；肉粉；缺少确切保存路线与成品规格的产品。 |
| representative_product | 一个已放行批次的可食牛肉净产品，符合一个锁定保存路线以及一项制造商或法规成品规格。 |
| production_route | 仅声明一个路线代码，例如 `salted_only`、`dried_only`、`direct_wood_smoked_only`、`liquid_smoke_only`，或一个明确有序组合，例如 `salted_then_dried_then_direct_wood_smoked`。记录实际技术、配料、烟熏介质与中间顺序。不得合并路线。 |
| market_state | 在已声明放行温度与贮存条件下的工厂门散装或包装产品。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供由一个锁定盐渍、干制、熏制或有序组合路线保存的牛肉。 |
| How much | 1 kg 净合格可食产品；不含包装质量。 |
| How well | 符合已声明路线特定成品规格、配料声明、保存终点、微生物与感官放行准则、贮存条件及合法市场要求。 |
| How long or cycle | 一个已放行生产批次；已声明保质期与贮存条件是产品限定信息，不增加服务数量。 |
| reference_flow_link | 一一对应：1 kg 净合格放行产品等于 1 kg 参考产品流。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 `reference_amount` | 1 kg |
| 参考产品流 `reference_product_flow` | Bovine meat, salted, dried or smoked `b022bdb0-0f92-4323-b5eb-2c5fb085bd19` |
| 参考流属性 `reference_flow_property` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 `reference_unit_group` | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 `reference_unit` | kg |
| 必需限定信息 `required_qualifiers` | 锁定路线标识；有序过程顺序；牛肉切块与带骨状态；投入牛肉状态；具有确切身份的配料清单；盐渍方法；干制技术；适用的直接木材树种或确切液体烟熏液；适用的热处理终点；适用的最终水分或水分活度规格；产品净质量；包装组分；放行温度；贮存条件；地理；生产期间；设施与产线 |

每项`必需限定信息`须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终放行检查后计量净合格可食产品。排除包装、标签、托盘与不合格产品。 |
| `incoming_meat_mass` | 每种投入牛肉状态 | Mass | kg | 按确切鲜、冷藏、冷冻、盐渍、干制或熏制状态分别称量每个验收供应商批次。 |
| `recipe_component_mass` | 每种食盐、腌制化学品、酸、香辛料、油或烟熏液 | Mass | kg | 根据批次配料与库存核对分别记录每个实际组分；无有据可查换算时不得混用活性物质与配制产品。 |
| `water_and_wastewater` | 每股水流 | Volume；实测时为 Mass | m3；kg | 保留实测数量与密度基准。使每股产生废水在转移或处理核对中保持独立。 |
| `energy_carrier_identity` | 每项电力、蒸汽、热水或燃料流 | 按卡片规定的 Energy 或 Mass | kWh；MJ；kg | 保留物理载体以及原始仪表或账单单位。仅用有据可查因子换算；不得合并为保存能量。 |
| `packaging_component_mass` | 每项包装组分 | Mass | kg | 记录每项确切组分的消耗质量。采用计件记录时，以件数乘实测或供应商声明单件质量，并保留两项记录。 |
| `refrigerant_mass` | 每种具名制冷剂 | Mass | kg | 按确切制冷剂记录补充与回收。仅按存量平衡或直接测量计算排放；不提供默认泄漏率。 |
| `moisture_endpoint` | 干制或热处理成品 | 质量分数或水分活度 | 已声明单位 | 记录产品特定终点与测试方法。本 PCR 不提供默认水分、水分活度、时间或温度。 |
| `normalization` | 全部清单数量 | 卡片属性 | 每 kg 的卡片单位 | 仅在路线/规格归属与核对后应用 `calc_reference_normalization`。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在设施门接收一种确切牛肉状态：鲜去骨、冷藏去骨、冷冻去骨，或供进一步加工并单独识别的外购盐渍、干制或熏制牛肉投入。 |
| starting_condition_role | 前景制造门；供应商生产、屠宰与入厂运输是衔接的上游活动。 |
| product_classification_scope | 仅 CPC 3.0 `21182`：成品身份为盐渍、干制或熏制的牛肉。 |
| recursive_input_rule | 将每个外购 CPC 21182 投入保留为一种确切盐渍、干制或熏制产品投入并衔接上游数据集；不得在本数据包内重建其生产。 |
| upstream_dataset_requirement | 对牛生产、屠宰、初级冷藏或冷冻、配料制造、包装制造、公用工程与入厂运输采用代表性数据集，并披露地理、技术与分配。 |
| disclosure | 声明路线标识、作业顺序、产品规格、全部实际配料、烟熏技术与介质、适用保存终点、包装、放行与贮存条件、设施、产线、地理、期间、分配与排除项。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_lock` | 前景数据包 | 采集前声明一个路线标识：一种具体盐渍、干制、直接木烟或液体烟路线，或一个明确排序的组合。声明确切成品规格。不得汇总不同组合。 | `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279` |
| `boundary_start` | 前景系统 | 从设施门接收一种确切状态的牛肉投入或一种确切外购保存牛肉投入开始。供应商生产与入厂运输保留在衔接的上游数据集中。 | `un-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `boundary_end` | 前景系统 | 在已声明保存、包装与条件化贮存步骤后，以工厂门放行 1 kg 净合格产品结束。包装质量不计入参考产品质量。 | `un-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `boundary_upstream` | 上游建模 | 牛饲养、饲料生产、屠宰、初级冷藏或冷冻以及入厂运输不在前景采集范围；衔接代表性上游数据集并披露地理、技术与分配。 | `jrc-sa-bref-2024`; `eu-pef-2021-2279` |
| `boundary_downstream` | 下游建模 | 分销、零售、消费者制备、使用、食物损失与包装寿命终止不在本前景边界，除非研究将其作为独立下游阶段加入。 | `eu-pef-2021-2279` |
| `boundary_conditional_processes` | 过程图 | 仅纳入锁定路线中物理发生的保存与公用工程过程。用场址证据记录每个省略的条件性过程。 | `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279` |
| `boundary_recursive_input` | 同类投入 | 当投入流已符合 CPC 21182 时，将其确切盐渍、干制或熏制身份保留为外购投入并要求独立上游数据集；不得在本数据包内递归重建。 | `un-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `boundary_atomic_extensions` | 未列交换 | 若场址使用本 PCR 未列出的配料、化学品、木材树种、制冷剂、包装组分、废物或排放，应为该确切单一流新增一张卡。不得在一个选定流中放置多个候选。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `meat_receiving_preparation` | 牛肉接收与整理 | `required` | 始终纳入。仅声明一种投入牛肉状态；保留任何外购已保存牛肉投入的身份。 | 接收、检验、条件性解冻、去骨、修整与备料。 | 每 1 kg 净合格参考产品 |
| `salt_curing` | 盐渍与腌制 | `conditional` | 仅对干盐渍、盐水浸渍、注射腌制或已声明盐预处理纳入。 | 干盐渍、盐水腌制、腌制、排液与表面处理。 | 每 1 kg 净合格参考产品 |
| `controlled_drying` | 受控干制 | `conditional` | 仅在实际干制时纳入。声明干制技术以及成品水分或水分活度规格。 | 采用批次控制的空气、日晒、干燥室或其他已声明干制作业。 | 每 1 kg 净合格参考产品 |
| `direct_wood_smoking` | 直接木烟熏制 | `conditional` | 仅在牛肉接触由一种或多种明确木材树种产生的烟气时纳入。 | 产烟、熏制、烟熏干燥与烟房停留。 | 每 1 kg 净合格参考产品 |
| `liquid_smoke_application` | 液体烟熏液施用 | `conditional` | 仅在施用一种已识别食品级液体烟熏液时纳入。不得与直接木烟熏制合并。 | 对已识别烟熏液进行浸渍、喷淋、雾化或混合。 | 每 1 kg 净合格参考产品 |
| `thermal_finishing_cooling` | 热处理与冷却 | `conditional` | 仅对已声明蒸煮、烘烤、巴氏处理或其他可计量热处理纳入；实际发生时纳入受控冷却。 | 热处理、产品冷却与中间停留。 | 每 1 kg 净合格参考产品 |
| `packaging_conditioned_storage` | 包装与条件化贮存 | `required` | 始终纳入产品放行。仅在锁定规格实际使用时纳入每项包装组分与制冷交换。 | 终检、包装、贴标、条件化贮存与工厂门放行。 | 每 1 kg 净合格参考产品 |
| `cleaning_sanitation` | 清洗与消毒 | `required` | 始终纳入生产活动清洗。每种实际使用化学品作为独立交换记录。 | 原位清洗、开放式设备清洗、消毒与漂洗。 | 每 1 kg 净合格参考产品 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 当场址处理或预处理废水时纳入。直接排放时，用本过程量化排放，再衔接任何外部处理。 | 均衡、物理去除、化学处理、生物处理与排放监测。 | 每 1 kg 净合格参考产品 |

### 过程：牛肉接收与整理（`meat_receiving_preparation`）

#### 输入

##### 产品流

###### 接收鲜去骨牛肉（`receiving_fresh_boneless_beef_input`）

Fresh boneless bovine meat 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Fresh boneless bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Fresh boneless bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收冷藏去骨牛肉（`receiving_chilled_boneless_beef_input`）

Chilled boneless bovine meat 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Chilled boneless bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Chilled boneless bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收冷冻去骨牛肉（`receiving_frozen_boneless_beef_input`）

Frozen boneless bovine meat 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Frozen boneless bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Frozen boneless bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收外购盐渍牛肉（`receiving_purchased_salted_beef_input`）

Purchased salted bovine meat 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased salted bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Purchased salted bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收外购干制牛肉（`receiving_purchased_dried_beef_input`）

Purchased dried bovine meat 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased dried bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Purchased dried bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收外购熏制牛肉（`receiving_purchased_smoked_beef_input`）

Purchased smoked bovine meat 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased smoked bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Purchased smoked bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 解冻与整理用工艺水（`receiving_process_water_input`）

Process water 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Process water 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收与整理用电网电力（`receiving_grid_electricity_input`）

Grid electricity, medium voltage 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于锁定批次本过程的 Grid electricity, medium voltage 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收制冷 R717 氨补充（`receiving_r717_makeup_input`）

Ammonia refrigerant (R717) 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia refrigerant (R717)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Ammonia refrigerant (R717) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收制冷 R744 二氧化碳补充（`receiving_r744_makeup_input`）

Carbon dioxide refrigerant (R744) 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide refrigerant (R744)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Carbon dioxide refrigerant (R744) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收制冷 R404A 制冷剂补充（`receiving_r404a_makeup_input`）

R404A refrigerant 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 R404A refrigerant 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入保存工序的已整理牛肉切块（`receiving_prepared_beef_output`）

Prepared bovine meat cuts 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Prepared bovine meat cuts
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Prepared bovine meat cuts 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 回收的食用级牛肉修整料（`receiving_food_grade_trim_output`）

Food-grade bovine meat trimmings 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Food-grade bovine meat trimmings
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Food-grade bovine meat trimmings 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 回收牛脂共产品（`receiving_recovered_bovine_fat_output`）

Recovered bovine fat 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Recovered bovine fat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Recovered bovine fat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

###### 拒收牛肉（`receiving_rejected_meat_waste`）

Rejected incoming bovine meat 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Rejected incoming bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Rejected incoming bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 非食用牛肉修整废物（`receiving_nonfood_trim_waste`）

Non-food bovine trimming waste 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Non-food bovine trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Non-food bovine trimming waste 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 牛肉整理废水（`receiving_wastewater_output`）

Meat-preparation wastewater 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Meat-preparation wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Meat-preparation wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废低密度聚乙烯运输衬袋（`receiving_ldpe_liner_waste`）

Waste low-density polyethylene transport liner 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste low-density polyethylene transport liner
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste low-density polyethylene transport liner 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废瓦楞纤维板运输箱（`receiving_corrugated_box_waste`）

Waste corrugated fibreboard shipping box 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste corrugated fibreboard shipping box
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste corrugated fibreboard shipping box 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 基本流

###### 接收制冷 R717 氨排放（`receiving_r717_emission_air`）

Ammonia (R717) to air 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收制冷 R744 二氧化碳排放（`receiving_r744_emission_air`）

Carbon dioxide (R744) to air 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 接收制冷 R404A 排放（`receiving_r404a_emission_air`）

R404A refrigerant to air 作为一个原子交换记录在牛肉接收与整理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_meat_receiving_preparation`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### 过程：盐渍与腌制（`salt_curing`）

#### 输入

##### 产品流

###### 进入盐渍腌制的已整理牛肉（`curing_prepared_beef_input`）

Prepared bovine meat cuts 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Prepared bovine meat cuts
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Prepared bovine meat cuts 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 盐渍用氯化钠（`curing_sodium_chloride_input`）

Sodium chloride 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Sodium chloride 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明配方用亚硝酸钠（`curing_sodium_nitrite_input`）

Sodium nitrite 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sodium nitrite
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Sodium nitrite 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明配方用硝酸钠（`curing_sodium_nitrate_input`）

Sodium nitrate 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sodium nitrate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Sodium nitrate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明配方用蔗糖（`curing_sucrose_input`）

Sucrose 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sucrose
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Sucrose 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明配方用葡萄糖（`curing_dextrose_input`）

Dextrose 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Dextrose
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Dextrose 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明配方用抗坏血酸钠（`curing_sodium_ascorbate_input`）

Sodium ascorbate 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sodium ascorbate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Sodium ascorbate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明表面处理用乳酸（`curing_lactic_acid_input`）

Lactic acid 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Lactic acid
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Lactic acid 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明表面处理用乙酸（`curing_acetic_acid_input`）

Acetic acid 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Acetic acid
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Acetic acid 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明配方用黑胡椒（`curing_black_pepper_input`）

Black pepper 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Black pepper
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Black pepper 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明配方用大蒜粉（`curing_garlic_powder_input`）

Garlic powder 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Garlic powder
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Garlic powder 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 已声明配方用红椒粉（`curing_paprika_powder_input`）

Paprika powder 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Paprika powder
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Paprika powder 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 配制盐水用工艺水（`curing_process_water_input`）

Process water 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Process water 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 盐渍腌制用电网电力（`curing_grid_electricity_input`）

Grid electricity, medium voltage 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于锁定批次本过程的 Grid electricity, medium voltage 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 腌制制冷 R717 氨补充（`curing_r717_makeup_input`）

Ammonia refrigerant (R717) 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia refrigerant (R717)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Ammonia refrigerant (R717) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 腌制制冷 R744 二氧化碳补充（`curing_r744_makeup_input`）

Carbon dioxide refrigerant (R744) 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide refrigerant (R744)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Carbon dioxide refrigerant (R744) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 腌制制冷 R404A 补充（`curing_r404a_makeup_input`）

R404A refrigerant 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 R404A refrigerant 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 盐渍牛肉中间产品（`curing_salted_beef_output`）

Salted bovine meat intermediate 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Salted bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Salted bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

###### 废腌制盐水（`curing_spent_brine_waste`）

Spent curing brine 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Spent curing brine
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Spent curing brine 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废氯化钠（`curing_used_salt_waste`）

Used sodium chloride 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Used sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Used sodium chloride 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 含盐肉汁废水（`curing_meat_juice_wastewater`）

Salt-bearing meat-juice wastewater 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Salt-bearing meat-juice wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Salt-bearing meat-juice wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 不合格盐渍牛肉（`curing_rejected_beef_waste`）

Rejected salted bovine meat 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Rejected salted bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Rejected salted bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 基本流

###### 腌制制冷 R717 氨排放（`curing_r717_emission_air`）

Ammonia (R717) to air 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 腌制制冷 R744 二氧化碳排放（`curing_r744_emission_air`）

Carbon dioxide (R744) to air 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 腌制制冷 R404A 排放（`curing_r404a_emission_air`）

R404A refrigerant to air 作为一个原子交换记录在盐渍与腌制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_salt_curing`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### 过程：受控干制（`controlled_drying`）

#### 输入

##### 产品流

###### 进入干制的已整理牛肉（`drying_prepared_beef_input`）

Prepared bovine meat cuts 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Prepared bovine meat cuts
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Prepared bovine meat cuts 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入干制的盐渍牛肉中间产品（`drying_salted_beef_input`）

Salted bovine meat intermediate 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Salted bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Salted bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 作为已声明表面涂层的豆油（`drying_soybean_oil_input`）

Soybean oil 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Soybean oil
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Soybean oil 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 受控干制用电网电力（`drying_grid_electricity_input`）

Grid electricity, medium voltage 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于锁定批次本过程的 Grid electricity, medium voltage 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 受控干制用外购饱和蒸汽（`drying_purchased_steam_input`）

Purchased saturated steam 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Purchased saturated steam 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 受控干制用外购热水（`drying_purchased_hot_water_input`）

Purchased hot water 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Purchased hot water 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 受控干制燃烧天然气（`drying_natural_gas_input`）

Natural gas 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Natural gas 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 受控干制燃烧低硫柴油（`drying_diesel_input`）

Low-sulfur diesel fuel 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Low-sulfur diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Low-sulfur diesel fuel 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 受控干制燃烧液化石油气（`drying_lpg_input`）

Liquefied petroleum gas 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Liquefied petroleum gas 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干燥空气调节 R717 氨补充（`drying_r717_makeup_input`）

Ammonia refrigerant (R717) 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia refrigerant (R717)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Ammonia refrigerant (R717) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干燥空气调节 R744 二氧化碳补充（`drying_r744_makeup_input`）

Carbon dioxide refrigerant (R744) 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide refrigerant (R744)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Carbon dioxide refrigerant (R744) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干燥空气调节 R404A 补充（`drying_r404a_makeup_input`）

R404A refrigerant 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 R404A refrigerant 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干制牛肉中间产品（`drying_dried_beef_output`）

Dried bovine meat intermediate 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Dried bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Dried bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

###### 干燥凝结废水（`drying_condensate_wastewater`）

Drying condensate wastewater 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Drying condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Drying condensate wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 不合格干制牛肉（`drying_rejected_beef_waste`）

Rejected dried bovine meat 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Rejected dried bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Rejected dried bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干牛肉颗粒废物（`drying_meat_particle_waste`）

Dried bovine meat particles 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Dried bovine meat particles
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Dried bovine meat particles 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 基本流

###### 干制蒸发至空气的水（`drying_water_emission_air`）

Water to air 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Water to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_evaporated_water` 由实测批次质量和水分数据计算；不得采用默认干制损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干燥空气调节 R717 氨排放（`drying_r717_emission_air`）

Ammonia (R717) to air 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干燥空气调节 R744 二氧化碳排放（`drying_r744_emission_air`）

Carbon dioxide (R744) to air 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干燥空气调节 R404A 排放（`drying_r404a_emission_air`）

R404A refrigerant to air 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干制燃料化石二氧化碳排放（`drying_fossil_co2_emission_air`）

Carbon dioxide, fossil to air 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干制燃料氮氧化物排放（`drying_nox_emission_air`）

Nitrogen oxides to air 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干制燃料二氧化硫排放（`drying_so2_emission_air`）

Sulfur dioxide to air 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 干制燃料细颗粒物排放（`drying_pm25_emission_air`）

Particulate matter, <2.5 µm to air 作为一个原子交换记录在受控干制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Particulate matter, <2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_controlled_drying`
- 来源：`fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### 过程：直接木烟熏制（`direct_wood_smoking`）

#### 输入

##### 产品流

###### 进入直接木烟熏制的已整理牛肉（`wood_smoking_prepared_beef_input`）

Prepared bovine meat cuts 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Prepared bovine meat cuts
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Prepared bovine meat cuts 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入直接木烟熏制的盐渍牛肉（`wood_smoking_salted_beef_input`）

Salted bovine meat intermediate 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Salted bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Salted bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入直接木烟熏制的干制牛肉（`wood_smoking_dried_beef_input`）

Dried bovine meat intermediate 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Dried bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Dried bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 用于产烟的山毛榉木片（`wood_smoking_beech_chips_input`）

Beech wood chips 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Beech wood chips
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Beech wood chips 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 用于产烟的橡木片（`wood_smoking_oak_chips_input`）

Oak wood chips 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Oak wood chips
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Oak wood chips 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 用于产烟的山核桃木片（`wood_smoking_hickory_chips_input`）

Hickory wood chips 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Hickory wood chips
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Hickory wood chips 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 烟房湿度控制用工艺水（`wood_smoking_process_water_input`）

Process water 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Process water 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制用电网电力（`wood_smoking_grid_electricity_input`）

Grid electricity, medium voltage 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于锁定批次本过程的 Grid electricity, medium voltage 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制用外购饱和蒸汽（`wood_smoking_purchased_steam_input`）

Purchased saturated steam 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Purchased saturated steam 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制用外购热水（`wood_smoking_purchased_hot_water_input`）

Purchased hot water 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Purchased hot water 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制燃烧天然气（`wood_smoking_natural_gas_input`）

Natural gas 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Natural gas 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制燃烧低硫柴油（`wood_smoking_diesel_input`）

Low-sulfur diesel fuel 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Low-sulfur diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Low-sulfur diesel fuel 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制燃烧液化石油气（`wood_smoking_lpg_input`）

Liquefied petroleum gas 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Liquefied petroleum gas 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 烟房调节R717 氨补充（`wood_smoking_r717_makeup_input`）

Ammonia refrigerant (R717) 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia refrigerant (R717)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Ammonia refrigerant (R717) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 烟房调节R744 二氧化碳补充（`wood_smoking_r744_makeup_input`）

Carbon dioxide refrigerant (R744) 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide refrigerant (R744)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Carbon dioxide refrigerant (R744) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 烟房调节R404A 制冷剂补充（`wood_smoking_r404a_makeup_input`）

R404A refrigerant 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 R404A refrigerant 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 直接木烟熏牛肉中间产品（`wood_smoking_beef_output`）

Direct wood-smoked bovine meat intermediate 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Direct wood-smoked bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Direct wood-smoked bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

###### 山毛榉木灰（`wood_smoking_beech_ash_waste`）

Beech wood ash 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Beech wood ash
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Beech wood ash 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 橡木灰（`wood_smoking_oak_ash_waste`）

Oak wood ash 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Oak wood ash
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Oak wood ash 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 山核桃木灰（`wood_smoking_hickory_ash_waste`）

Hickory wood ash 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Hickory wood ash
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Hickory wood ash 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 烟房烟炱（`wood_smoking_soot_waste`）

Smokehouse soot 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Smokehouse soot
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Smokehouse soot 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 烟房废水（`wood_smoking_wastewater`）

Smokehouse wastewater 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Smokehouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Smokehouse wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 不合格直接木烟熏牛肉（`wood_smoking_rejected_beef_waste`）

Rejected direct wood-smoked bovine meat 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Rejected direct wood-smoked bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Rejected direct wood-smoked bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 基本流

###### 烟房调节R717 氨排放（`wood_smoking_r717_emission_air`）

Ammonia (R717) to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 烟房调节R744 二氧化碳排放（`wood_smoking_r744_emission_air`）

Carbon dioxide (R744) to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 烟房调节R404A 制冷剂排放（`wood_smoking_r404a_emission_air`）

R404A refrigerant to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 熏烟木材生物源二氧化碳排放（`wood_smoking_biogenic_co2_emission_air`）

Carbon dioxide, biogenic to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide, biogenic to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种具名木材实测投入量与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制一氧化碳排放（`wood_smoking_carbon_monoxide_emission_air`）

Carbon monoxide to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种具名木材实测投入量与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制非甲烷挥发性有机物排放（`wood_smoking_nmvoc_emission_air`）

Non-methane volatile organic compounds to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种具名木材实测投入量与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制化石二氧化碳排放（`wood_smoking_fossil_co2_emission_air`）

Carbon dioxide, fossil to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料或具名熏烟木材与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制氮氧化物排放（`wood_smoking_nox_emission_air`）

Nitrogen oxides to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料或具名熏烟木材与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制二氧化硫排放（`wood_smoking_so2_emission_air`）

Sulfur dioxide to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料或具名熏烟木材与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 直接木烟熏制细颗粒物排放（`wood_smoking_pm25_emission_air`）

Particulate matter, <2.5 µm to air 作为一个原子交换记录在直接木烟熏制边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Particulate matter, <2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料或具名熏烟木材与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_wood_smoking`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### 过程：液体烟熏液施用（`liquid_smoke_application`）

#### 输入

##### 产品流

###### 进入液体烟熏液施用的已整理牛肉（`liquid_smoke_prepared_beef_input`）

Prepared bovine meat cuts 作为一个原子交换记录在液体烟熏液施用边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Prepared bovine meat cuts
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Prepared bovine meat cuts 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_smoke_application`
- 来源：`eu-pef-2021-2279`

###### 进入液体烟熏液施用的盐渍牛肉（`liquid_smoke_salted_beef_input`）

Salted bovine meat intermediate 作为一个原子交换记录在液体烟熏液施用边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Salted bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Salted bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_smoke_application`
- 来源：`eu-pef-2021-2279`

###### 进入液体烟熏液施用的干制牛肉（`liquid_smoke_dried_beef_input`）

Dried bovine meat intermediate 作为一个原子交换记录在液体烟熏液施用边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Dried bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Dried bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_smoke_application`
- 来源：`eu-pef-2021-2279`

###### 食品级液体烟熏液（`liquid_smoke_condensate_input`）

Food-grade liquid smoke condensate 作为一个原子交换记录在液体烟熏液施用边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Food-grade liquid smoke condensate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Food-grade liquid smoke condensate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_smoke_application`
- 来源：`eu-pef-2021-2279`

###### 液体烟熏液稀释用工艺水（`liquid_smoke_process_water_input`）

Process water 作为一个原子交换记录在液体烟熏液施用边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Process water 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_smoke_application`
- 来源：`eu-pef-2021-2279`

###### 液体烟熏液施用用电网电力（`liquid_smoke_grid_electricity_input`）

Grid electricity, medium voltage 作为一个原子交换记录在液体烟熏液施用边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于锁定批次本过程的 Grid electricity, medium voltage 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_smoke_application`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 液体烟熏液处理牛肉中间产品（`liquid_smoke_beef_output`）

Liquid-smoke-treated bovine meat intermediate 作为一个原子交换记录在液体烟熏液施用边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Liquid-smoke-treated bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Liquid-smoke-treated bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_smoke_application`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 废液体烟熏液废水（`liquid_smoke_solution_wastewater`）

Spent liquid smoke solution wastewater 作为一个原子交换记录在液体烟熏液施用边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Spent liquid smoke solution wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Spent liquid smoke solution wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_smoke_application`
- 来源：`eu-pef-2021-2279`

###### 不合格液体烟熏液处理牛肉（`liquid_smoke_rejected_beef_waste`）

Rejected liquid-smoke-treated bovine meat 作为一个原子交换记录在液体烟熏液施用边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Rejected liquid-smoke-treated bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Rejected liquid-smoke-treated bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_smoke_application`
- 来源：`eu-pef-2021-2279`

##### 基本流


### 过程：热处理与冷却（`thermal_finishing_cooling`）

#### 输入

##### 产品流

###### 进入热处理的盐渍牛肉（`thermal_salted_beef_input`）

Salted bovine meat intermediate 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Salted bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Salted bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入热处理的干制牛肉（`thermal_dried_beef_input`）

Dried bovine meat intermediate 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Dried bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Dried bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入热处理的直接木烟熏牛肉（`thermal_wood_smoked_beef_input`）

Direct wood-smoked bovine meat intermediate 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Direct wood-smoked bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Direct wood-smoked bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入热处理的液体烟熏液处理牛肉（`thermal_liquid_smoked_beef_input`）

Liquid-smoke-treated bovine meat intermediate 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Liquid-smoke-treated bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Liquid-smoke-treated bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理用工艺水（`thermal_process_water_input`）

Process water 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Process water 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理用电网电力（`thermal_grid_electricity_input`）

Grid electricity, medium voltage 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于锁定批次本过程的 Grid electricity, medium voltage 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理用外购饱和蒸汽（`thermal_purchased_steam_input`）

Purchased saturated steam 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Purchased saturated steam 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理用外购热水（`thermal_purchased_hot_water_input`）

Purchased hot water 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Purchased hot water 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理燃烧天然气（`thermal_natural_gas_input`）

Natural gas 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Natural gas 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理燃烧低硫柴油（`thermal_diesel_input`）

Low-sulfur diesel fuel 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Low-sulfur diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Low-sulfur diesel fuel 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理燃烧液化石油气（`thermal_lpg_input`）

Liquefied petroleum gas 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Liquefied petroleum gas 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理后冷却R717 氨补充（`thermal_r717_makeup_input`）

Ammonia refrigerant (R717) 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia refrigerant (R717)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Ammonia refrigerant (R717) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理后冷却R744 二氧化碳补充（`thermal_r744_makeup_input`）

Carbon dioxide refrigerant (R744) 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide refrigerant (R744)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Carbon dioxide refrigerant (R744) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理后冷却R404A 制冷剂补充（`thermal_r404a_makeup_input`）

R404A refrigerant 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 R404A refrigerant 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热处理完成的保存牛肉（`thermal_finished_beef_output`）

Thermally finished preserved bovine meat 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Thermally finished preserved bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Thermally finished preserved bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

###### 热加工液废水（`thermal_liquor_wastewater`）

Thermal-processing liquor wastewater 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Thermal-processing liquor wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Thermal-processing liquor wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 不合格热处理牛肉（`thermal_rejected_beef_waste`）

Rejected thermally finished bovine meat 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Rejected thermally finished bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Rejected thermally finished bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 基本流

###### 热处理后冷却R717 氨排放（`thermal_r717_emission_air`）

Ammonia (R717) to air 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理后冷却R744 二氧化碳排放（`thermal_r744_emission_air`）

Carbon dioxide (R744) to air 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理后冷却R404A 制冷剂排放（`thermal_r404a_emission_air`）

R404A refrigerant to air 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理蒸发至空气的水（`thermal_water_emission_air`）

Water to air 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Water to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_evaporated_water` 由实测批次质量和水分数据计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理化石二氧化碳排放（`thermal_fossil_co2_emission_air`）

Carbon dioxide, fossil to air 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料或具名熏烟木材与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理氮氧化物排放（`thermal_nox_emission_air`）

Nitrogen oxides to air 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料或具名熏烟木材与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理二氧化硫排放（`thermal_so2_emission_air`）

Sulfur dioxide to air 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料或具名熏烟木材与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 热处理细颗粒物排放（`thermal_pm25_emission_air`）

Particulate matter, <2.5 µm to air 作为一个原子交换记录在热处理与冷却边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Particulate matter, <2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料或具名熏烟木材与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_finishing_cooling`
- 来源：`fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### 过程：包装与条件化贮存（`packaging_conditioned_storage`）

#### 输入

##### 产品流

###### 进入包装的盐渍牛肉（`packaging_salted_beef_input`）

Salted bovine meat intermediate 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Salted bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Salted bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入包装的干制牛肉（`packaging_dried_beef_input`）

Dried bovine meat intermediate 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Dried bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Dried bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入包装的直接木烟熏牛肉（`packaging_wood_smoked_beef_input`）

Direct wood-smoked bovine meat intermediate 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Direct wood-smoked bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Direct wood-smoked bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入包装的液体烟熏液处理牛肉（`packaging_liquid_smoked_beef_input`）

Liquid-smoke-treated bovine meat intermediate 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Liquid-smoke-treated bovine meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Liquid-smoke-treated bovine meat intermediate 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入包装的热处理保存牛肉（`packaging_thermal_beef_input`）

Thermally finished preserved bovine meat 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Thermally finished preserved bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Thermally finished preserved bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 包装与条件化贮存用电网电力（`packaging_grid_electricity_input`）

Grid electricity, medium voltage 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于锁定批次本过程的 Grid electricity, medium voltage 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 产品条件化贮存R717 氨补充（`packaging_r717_makeup_input`）

Ammonia refrigerant (R717) 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia refrigerant (R717)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Ammonia refrigerant (R717) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 产品条件化贮存R744 二氧化碳补充（`packaging_r744_makeup_input`）

Carbon dioxide refrigerant (R744) 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide refrigerant (R744)
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Carbon dioxide refrigerant (R744) 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 产品条件化贮存R404A 制冷剂补充（`packaging_r404a_makeup_input`）

R404A refrigerant 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 R404A refrigerant 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 聚酰胺/聚乙烯多层真空袋（`packaging_pa_pe_vacuum_pouch_input`）

Polyamide/polyethylene multilayer vacuum pouch 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Polyamide/polyethylene multilayer vacuum pouch
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Polyamide/polyethylene multilayer vacuum pouch 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 低密度聚乙烯薄膜（`packaging_ldpe_film_input`）

Low-density polyethylene film 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Low-density polyethylene film 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 铝箔（`packaging_aluminium_foil_input`）

Aluminium foil 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Aluminium foil
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Aluminium foil 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 再生纤维素薄膜（`packaging_cellulose_film_input`）

Regenerated cellulose film 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Regenerated cellulose film
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Regenerated cellulose film 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 黄麻袋（`packaging_jute_sack_input`）

Jute sack 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Jute sack
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Jute sack 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 瓦楞纤维板箱（`packaging_corrugated_box_input`）

Corrugated fibreboard box 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Corrugated fibreboard box 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 聚丙烯捆扎带（`packaging_polypropylene_strap_input`）

Polypropylene strapping 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Polypropylene strapping
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Polypropylene strapping 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 纸标签（`packaging_paper_label_input`）

Paper label 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Paper label
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Paper label 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 木托盘（`packaging_wood_pallet_input`）

Wooden pallet 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Wooden pallet 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净合格牛肉参考产品（`reference_product_output`）

Bovine meat, salted, dried or smoked 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Bovine meat, salted, dried or smoked `b022bdb0-0f92-4323-b5eb-2c5fb085bd19`
- 流属性/单位：Mass / kg
- 数量规则：恰为 1 kg 净合格产品；包装质量不计入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `eu-pef-2021-2279`

##### 废物流

###### 废聚酰胺/聚乙烯多层真空袋（`packaging_waste_pa_pe_vacuum_pouch`）

Waste polyamide/polyethylene multilayer vacuum pouch 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste polyamide/polyethylene multilayer vacuum pouch
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste polyamide/polyethylene multilayer vacuum pouch 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废低密度聚乙烯薄膜（`packaging_waste_ldpe_film`）

Waste low-density polyethylene film 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste low-density polyethylene film 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废铝箔（`packaging_waste_aluminium_foil`）

Waste aluminium foil 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste aluminium foil
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste aluminium foil 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废再生纤维素薄膜（`packaging_waste_cellulose_film`）

Waste regenerated cellulose film 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste regenerated cellulose film
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste regenerated cellulose film 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废黄麻袋（`packaging_waste_jute_sack`）

Waste jute sack 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste jute sack
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste jute sack 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废瓦楞纤维板箱（`packaging_waste_corrugated_box`）

Waste corrugated fibreboard box 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste corrugated fibreboard box 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废聚丙烯捆扎带（`packaging_waste_polypropylene_strap`）

Waste polypropylene strapping 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste polypropylene strapping
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste polypropylene strapping 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废纸标签（`packaging_waste_paper_label`）

Waste paper label 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste paper label
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste paper label 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废木托盘（`packaging_waste_wood_pallet`）

Waste wooden pallet 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste wooden pallet 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 不合格已包装保存牛肉（`packaging_rejected_product_waste`）

Rejected packaged preserved bovine meat 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Rejected packaged preserved bovine meat
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Rejected packaged preserved bovine meat 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 基本流

###### 产品条件化贮存R717 氨排放（`packaging_r717_emission_air`）

Ammonia (R717) to air 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 产品条件化贮存R744 二氧化碳排放（`packaging_r744_emission_air`）

Carbon dioxide (R744) to air 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 产品条件化贮存R404A 制冷剂排放（`packaging_r404a_emission_air`）

R404A refrigerant to air 作为一个原子交换记录在包装与条件化贮存边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：R404A refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_refrigerant_stock_balance` 由期初充注、补充、期末充注与回收质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_conditioned_storage`
- 来源：`un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### 过程：清洗与消毒（`cleaning_sanitation`）

#### 输入

##### 产品流

###### 清洗与漂洗用工艺水（`cleaning_process_water_input`）

Process water 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Process water 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 清洗与消毒用电网电力（`cleaning_grid_electricity_input`）

Grid electricity, medium voltage 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于锁定批次本过程的 Grid electricity, medium voltage 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 清洗与消毒用外购饱和蒸汽（`cleaning_purchased_steam_input`）

Purchased saturated steam 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Purchased saturated steam 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 清洗与消毒用外购热水（`cleaning_purchased_hot_water_input`）

Purchased hot water 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Purchased hot water 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 清洗与消毒燃烧天然气（`cleaning_natural_gas_input`）

Natural gas 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录可归属于锁定批次本过程的 Natural gas 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 清洗与消毒燃烧低硫柴油（`cleaning_diesel_input`）

Low-sulfur diesel fuel 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Low-sulfur diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Low-sulfur diesel fuel 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 清洗与消毒燃烧液化石油气（`cleaning_lpg_input`）

Liquefied petroleum gas 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Liquefied petroleum gas 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 氢氧化钠清洗化学品（`cleaning_sodium_hydroxide_input`）

Sodium hydroxide 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Sodium hydroxide 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 硝酸清洗化学品（`cleaning_nitric_acid_input`）

Nitric acid 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Nitric acid 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 磷酸清洗化学品（`cleaning_phosphoric_acid_input`）

Phosphoric acid 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Phosphoric acid
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Phosphoric acid 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 次氯酸钠消毒剂（`cleaning_sodium_hypochlorite_input`）

Sodium hypochlorite 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Sodium hypochlorite 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 过氧乙酸消毒剂（`cleaning_peracetic_acid_input`）

Peracetic acid 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Peracetic acid 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 过氧化氢消毒剂（`cleaning_hydrogen_peroxide_input`）

Hydrogen peroxide 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Hydrogen peroxide 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 苯扎氯铵消毒剂（`cleaning_benzalkonium_chloride_input`）

Benzalkonium chloride 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Benzalkonium chloride
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Benzalkonium chloride 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗消毒废水（`cleaning_wastewater_output`）

Cleaning and sanitation wastewater 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Cleaning and sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Cleaning and sanitation wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废高密度聚乙烯化学品桶（`cleaning_waste_hdpe_drum`）

Waste high-density polyethylene chemical drum 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste high-density polyethylene chemical drum
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste high-density polyethylene chemical drum 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废聚丙烯化学品提桶（`cleaning_waste_pp_pail`）

Waste polypropylene chemical pail 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste polypropylene chemical pail
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste polypropylene chemical pail 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废聚酯清洁布（`cleaning_used_polyester_cloth`）

Used polyester cleaning cloth 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Used polyester cleaning cloth
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Used polyester cleaning cloth 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 基本流

###### 清洗与消毒化石二氧化碳排放（`cleaning_fossil_co2_emission_air`）

Carbon dioxide, fossil to air 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 清洗与消毒氮氧化物排放（`cleaning_nox_emission_air`）

Nitrogen oxides to air 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 清洗与消毒二氧化硫排放（`cleaning_so2_emission_air`）

Sulfur dioxide to air 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 清洗与消毒细颗粒物排放（`cleaning_pm25_emission_air`）

Particulate matter, <2.5 µm to air 作为一个原子交换记录在清洗与消毒边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Particulate matter, <2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_stationary_combustion_emission` 由每种实测燃料与有据可查的适用因子计算，或采用直接监测。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation`
- 来源：`fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 场内废水处理用电网电力（`wwt_grid_electricity_input`）

Grid electricity, medium voltage 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录可归属于锁定批次本过程的 Grid electricity, medium voltage 分表能量或供应商账单能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 三氯化铁处理化学品（`wwt_ferric_chloride_input`）

Ferric chloride 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Ferric chloride 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 氢氧化钠处理化学品（`wwt_sodium_hydroxide_input`）

Sodium hydroxide 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Sodium hydroxide 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 氢氧化钙处理化学品（`wwt_calcium_hydroxide_input`）

Calcium hydroxide 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Calcium hydroxide 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 阴离子聚丙烯酰胺处理化学品（`wwt_anionic_polyacrylamide_input`）

Anionic polyacrylamide 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Anionic polyacrylamide
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Anionic polyacrylamide 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 废物流

###### 进入处理的牛肉整理废水（`wwt_meat_preparation_wastewater_input`）

Meat-preparation wastewater 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Meat-preparation wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Meat-preparation wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入处理的废腌制盐水（`wwt_spent_curing_brine_wastewater_input`）

Spent curing brine 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Spent curing brine
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Spent curing brine 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入处理的含盐肉汁废水（`wwt_salt_meat_juice_wastewater_input`）

Salt-bearing meat-juice wastewater 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Salt-bearing meat-juice wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Salt-bearing meat-juice wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入处理的干燥凝结废水（`wwt_drying_condensate_wastewater_input`）

Drying condensate wastewater 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Drying condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Drying condensate wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入处理的烟房废水（`wwt_smokehouse_wastewater_input`）

Smokehouse wastewater 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Smokehouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Smokehouse wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入处理的废液体烟熏液废水（`wwt_liquid_smoke_solution_wastewater_input`）

Spent liquid smoke solution wastewater 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Spent liquid smoke solution wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Spent liquid smoke solution wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入处理的热加工液废水（`wwt_thermal_liquor_wastewater_input`）

Thermal-processing liquor wastewater 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Thermal-processing liquor wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Thermal-processing liquor wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 进入处理的清洗消毒废水（`wwt_cleaning_wastewater_input`）

Cleaning and sanitation wastewater 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Cleaning and sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Cleaning and sanitation wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理后肉类加工废水（`wwt_treated_effluent_output`）

Treated meat-processing wastewater 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Treated meat-processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录可归属于锁定批次的 Treated meat-processing wastewater 计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 脱水生物废水污泥（`wwt_dewatered_sludge_output`）

Dewatered biological wastewater sludge 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Dewatered biological wastewater sludge
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Dewatered biological wastewater sludge 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 肉类加工废水筛渣（`wwt_screenings_output`）

Meat-processing wastewater screenings 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Meat-processing wastewater screenings
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Meat-processing wastewater screenings 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废水处理废牛脂（`wwt_fat_grease_waste_output`）

Waste bovine fat from wastewater treatment 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Waste bovine fat from wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Waste bovine fat from wastewater treatment 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废水处理沉砂（`wwt_grit_output`）

Wastewater-treatment grit 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Wastewater-treatment grit
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于锁定批次的 Wastewater-treatment grit 实测质量或库存核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### 基本流

###### 排入地表水的水（`wwt_water_emission_water`）

Water to surface water 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Water to surface water
- 流属性/单位：Mass / kg
- 数量规则：采用实测排水质量，或使用有据可查的密度换算实测体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 排入水体的化学需氧量（`wwt_cod_emission_water`）

Chemical oxygen demand to water 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 由匹配的排水体积与实测浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 排入水体的五日生化需氧量（`wwt_bod5_emission_water`）

Biochemical oxygen demand, 5 days to water 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Biochemical oxygen demand, 5 days to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 由匹配的排水体积与实测浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 排入水体的悬浮物（`wwt_tss_emission_water`）

Suspended solids to water 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 由匹配的排水体积与实测浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 排入水体的氯化物（`wwt_chloride_emission_water`）

Chloride to water 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Chloride to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 由匹配的排水体积与实测浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 排入水体的总氮（`wwt_total_nitrogen_emission_water`）

Total nitrogen to water 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Total nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 由匹配的排水体积与实测浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 排入水体的总磷（`wwt_total_phosphorus_emission_water`）

Total phosphorus to water 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Total phosphorus to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 由匹配的排水体积与实测浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 排入水体的硝酸盐（`wwt_nitrate_emission_water`）

Nitrate to water 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Nitrate to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 由匹配的排水体积与实测浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 排入水体的亚硝酸盐（`wwt_nitrite_emission_water`）

Nitrite to water 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Nitrite to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 由匹配的排水体积与实测浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废水处理生物源甲烷排放（`wwt_methane_emission_air`）

Methane, biogenic to air 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Methane, biogenic to air
- 流属性/单位：Mass / kg
- 数量规则：采用直接监测，或用实测处理活动量与有据可查的适用因子计算；PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### 废水处理氧化亚氮排放（`wwt_nitrous_oxide_emission_air`）

Dinitrogen monoxide to air 作为一个原子交换记录在场内废水处理边界。仅在锁定路线与成品规格实际发生该具体流时记录。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：采用直接监测，或用实测处理活动量与有据可查的适用因子计算；PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_treatment`
- 来源：`eu-pef-2021-2279`; `jrc-sa-bref-2024`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共享作业 | 在技术可行处，首先按锁定路线与成品规格细分产线、房间、仪表及批次记录。 | `eu-pef-2021-2279` |
| `allocation_causal` | 共享公用工程 | 无法细分时，对每项共享公用工程或处理作业采用有据可查的物理因果驱动因素，并将分配值与实测总量核对。 | `eu-pef-2021-2279` |
| `allocation_coproduct_identity` | 修整料与回收脂肪 | 仅当存在有文件证明的有益去向与正向产品功能时，才将食用级牛肉修整料或回收牛脂归为共产品；否则保留确切废物流。 | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `allocation_joint_process` | 联合共产品 | 细分与因果建模后仍存在联合过程时，以有理据的物理驱动因素应用 `calc_allocation_factor`；仅在没有可辩护物理关系时采用经济驱动因素。披露数值、期间与敏感性。 | `eu-pef-2021-2279` |
| `allocation_no_hidden_credit` | 废物与回收 | 不得在前景数量中扣除避免负担或隐藏回收抵扣。将替代、再循环或处理后果作为本归因前景清单之外的显式下游情景建模。 | `eu-pef-2021-2279` |
| `allocation_mass_balance` | 全部阶段 | 对每个锁定批次，将投入牛肉、配料与水同合格产品、共产品、废物、废水及计算蒸发量核对；调查并披露残差。 | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_meat_receiving_preparation` | `meat_receiving_preparation` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | 采集签字批次单、配方与领料记录、校准秤与仪表、维护台账、实验室报告、废物转移单及经核验因子记录。每个原子流分别保存。 | 原始记录单位；按每参考流归一化到 kg、m3、kWh 或 MJ | 每个批次；连续或账单周期仪表按同一生产活动分配 | 代表性生产活动，声明报告期与停机 | 服务于锁定路线与规格的全部产线、房间、公用工程与处理设施 | 仅汇总相同路线与规格；用有据可查因果键分配共享记录，再应用 `calc_reference_normalization` | 路线批准；原始凭证；校准；完整性核对；签字；因子溯源 |
| `cp_salt_curing` | `salt_curing` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | 采集签字批次单、配方与领料记录、校准秤与仪表、维护台账、实验室报告、废物转移单及经核验因子记录。每个原子流分别保存。 | 原始记录单位；按每参考流归一化到 kg、m3、kWh 或 MJ | 每个批次；连续或账单周期仪表按同一生产活动分配 | 代表性生产活动，声明报告期与停机 | 服务于锁定路线与规格的全部产线、房间、公用工程与处理设施 | 仅汇总相同路线与规格；用有据可查因果键分配共享记录，再应用 `calc_reference_normalization` | 路线批准；原始凭证；校准；完整性核对；签字；因子溯源 |
| `cp_controlled_drying` | `controlled_drying` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | 采集签字批次单、配方与领料记录、校准秤与仪表、维护台账、实验室报告、废物转移单及经核验因子记录。每个原子流分别保存。 | 原始记录单位；按每参考流归一化到 kg、m3、kWh 或 MJ | 每个批次；连续或账单周期仪表按同一生产活动分配 | 代表性生产活动，声明报告期与停机 | 服务于锁定路线与规格的全部产线、房间、公用工程与处理设施 | 仅汇总相同路线与规格；用有据可查因果键分配共享记录，再应用 `calc_reference_normalization` | 路线批准；原始凭证；校准；完整性核对；签字；因子溯源 |
| `cp_direct_wood_smoking` | `direct_wood_smoking` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | 采集签字批次单、配方与领料记录、校准秤与仪表、维护台账、实验室报告、废物转移单及经核验因子记录。每个原子流分别保存。 | 原始记录单位；按每参考流归一化到 kg、m3、kWh 或 MJ | 每个批次；连续或账单周期仪表按同一生产活动分配 | 代表性生产活动，声明报告期与停机 | 服务于锁定路线与规格的全部产线、房间、公用工程与处理设施 | 仅汇总相同路线与规格；用有据可查因果键分配共享记录，再应用 `calc_reference_normalization` | 路线批准；原始凭证；校准；完整性核对；签字；因子溯源 |
| `cp_liquid_smoke_application` | `liquid_smoke_application` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | 采集签字批次单、配方与领料记录、校准秤与仪表、维护台账、实验室报告、废物转移单及经核验因子记录。每个原子流分别保存。 | 原始记录单位；按每参考流归一化到 kg、m3、kWh 或 MJ | 每个批次；连续或账单周期仪表按同一生产活动分配 | 代表性生产活动，声明报告期与停机 | 服务于锁定路线与规格的全部产线、房间、公用工程与处理设施 | 仅汇总相同路线与规格；用有据可查因果键分配共享记录，再应用 `calc_reference_normalization` | 路线批准；原始凭证；校准；完整性核对；签字；因子溯源 |
| `cp_thermal_finishing_cooling` | `thermal_finishing_cooling` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | 采集签字批次单、配方与领料记录、校准秤与仪表、维护台账、实验室报告、废物转移单及经核验因子记录。每个原子流分别保存。 | 原始记录单位；按每参考流归一化到 kg、m3、kWh 或 MJ | 每个批次；连续或账单周期仪表按同一生产活动分配 | 代表性生产活动，声明报告期与停机 | 服务于锁定路线与规格的全部产线、房间、公用工程与处理设施 | 仅汇总相同路线与规格；用有据可查因果键分配共享记录，再应用 `calc_reference_normalization` | 路线批准；原始凭证；校准；完整性核对；签字；因子溯源 |
| `cp_packaging_conditioned_storage` | `packaging_conditioned_storage` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | 采集签字批次单、配方与领料记录、校准秤与仪表、维护台账、实验室报告、废物转移单及经核验因子记录。每个原子流分别保存。 | 原始记录单位；按每参考流归一化到 kg、m3、kWh 或 MJ | 每个批次；连续或账单周期仪表按同一生产活动分配 | 代表性生产活动，声明报告期与停机 | 服务于锁定路线与规格的全部产线、房间、公用工程与处理设施 | 仅汇总相同路线与规格；用有据可查因果键分配共享记录，再应用 `calc_reference_normalization` | 路线批准；原始凭证；校准；完整性核对；签字；因子溯源 |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | 采集签字批次单、配方与领料记录、校准秤与仪表、维护台账、实验室报告、废物转移单及经核验因子记录。每个原子流分别保存。 | 原始记录单位；按每参考流归一化到 kg、m3、kWh 或 MJ | 每个批次；连续或账单周期仪表按同一生产活动分配 | 代表性生产活动，声明报告期与停机 | 服务于锁定路线与规格的全部产线、房间、公用工程与处理设施 | 仅汇总相同路线与规格；用有据可查因果键分配共享记录，再应用 `calc_reference_normalization` | 路线批准；原始凭证；校准；完整性核对；签字；因子溯源 |
| `cp_onsite_wastewater_treatment` | `onsite_wastewater_treatment` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | 采集签字批次单、配方与领料记录、校准秤与仪表、维护台账、实验室报告、废物转移单及经核验因子记录。每个原子流分别保存。 | 原始记录单位；按每参考流归一化到 kg、m3、kWh 或 MJ | 每个批次；连续或账单周期仪表按同一生产活动分配 | 代表性生产活动，声明报告期与停机 | 服务于锁定路线与规格的全部产线、房间、公用工程与处理设施 | 仅汇总相同路线与规格；用有据可查因果键分配共享记录，再应用 `calc_reference_normalization` | 路线批准；原始凭证；校准；完整性核对；签字；因子溯源 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单卡 | 归一化数量 = 可归属于锁定路线与产品规格的原子交换数量 / 同一生产活动放行的净合格参考产品质量。 | 可归属原子交换数量；净合格产品质量 | 每 1 kg 净合格产品的数量 | `eu-pef-2021-2279` |
| `calc_stage_utility_allocation` | 共享公用工程仪表 | 有专用分表时使用分表。否则仅以有据可查的因果驱动因素分配共享仪表，例如实测运行时间乘经核验负荷；保留总量核对。 | 共享仪表总量；分表或因果驱动记录；路线与规格标识 | 阶段特定载体数量 | `eu-pef-2021-2279` |
| `calc_recipe_input` | 配料与包装 | 原子投入 = 期初库存 + 入库 - 期末库存 - 有据可查退料，并同锁定批次的配料或领料记录核对。 | 期初库存；入库；期末库存；退料；配料记录 | 产品特定原子投入质量 | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |
| `calc_product_yield` | 每个保存阶段 | 产率 = 同一锁定批次的合格输出实测质量 / 投入牛肉实测质量。共产品、不合格品、废水与蒸发量分别报告。 | 投入牛肉；合格输出；共产品；废物；废水；蒸发量 | 阶段产率与质量平衡残差 | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |
| `calc_evaporated_water` | 干制与热处理 | 蒸发水 = 实测投入中的水质量 - 实测产品中的水质量 - 单独记录液体与固体输出中的水质量，采用批次特定水分结果。 | 批次质量；水分结果；液体输出；固体输出 | 排入空气的水 | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |
| `calc_refrigerant_stock_balance` | 每种具名制冷剂 | 排放 = 设备期初充注 + 补充 - 期末充注 - 回收质量。调查负值或未核对结果；不得替代为默认泄漏率。 | 期初充注；补充；期末充注；回收质量 | 具名制冷剂排入空气 | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `calc_stationary_combustion_emission` | 每种直接空气污染物 | 排放 = 每种确切燃料或具名木材燃烧量乘有据可查的污染物特定因子之和，除非采用直接监测。每种污染物分别存储。 | 燃料或具名木材数量；污染物因子与溯源；直接监测 | 一个具名基础流排放 | `eu-pef-2021-2279`; `jrc-sa-bref-2024`; `fao-meat-preservation-manual-1990` |
| `calc_wastewater_pollutant_load` | 每种废水污染物 | 污染物负荷 = 匹配排水体积乘其实验室浓度，并记录单位换算与采样代表性。 | 排水体积；污染物浓度；采样时间；换算 | 一种具名污染物排入水体的质量 | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `calc_allocation_factor` | 共享作业与共产品 | 穷尽细分与因果分配后，分配因子 = 已声明产品特定驱动量 / 全部联合产出同一驱动量之和。记录驱动因素、期间、产出、因子与敏感性。 | 联合清单；产出身份；物理或经济驱动因素；期间 | 有据可查的分配因子 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | 每个数据包 | 汇总前批准路线标识、作业顺序与成品规格；不得跨路线平均。 | 经批准规格、路线图与批次链接。 |
| `dq_primary_records` | 前景数量 | 采用代表已声明期间的校准测量、账单、库存核对、批次记录、实验室结果或签字废物记录。 | 原始记录、校准或供应商证据及签字。 |
| `dq_completeness` | 全部过程 | 对每个启用过程核对配料、公用工程、产品、共产品、包装、废物、废水与直接排放。 | 过程检查表与质量或能量核对。 |
| `dq_temporal_alignment` | 生产活动数据 | 将配方、产品质量、仪表、维护、废物与样品对齐至一个代表性生产活动；披露停机与异常批次。 | 带时间戳记录与纳入日志。 |
| `dq_representativeness` | 全部数据 | 评估技术、地理与时间代表性，并记录重大缺口或代理。 | 数据质量评价与来源元数据。 |
| `dq_calculation_traceability` | 计算值 | 为每项计算保留原始输入、公式版本、单位、换算因子、来源溯源与评审检查。 | 可复现计算与评审记录。 |
| `dq_no_default_substitution` | 缺失数量 | 不得填入 PCR 配方、时间、温度、产率、能量、排放因子或数值范围。取得前景记录或记录数据缺口。 | 缺口登记与采集行动。 |
| `dq_uuid_review` | 非参考流 | 在 flow-hybrid-search 与公开 state-100 直接读取均确认确切语义、流类型、属性与单位前，保持 UUID 空白。 | PCR 内容之外的双重核验记录。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | 确认唯一参考产品 UUID、质量 UUID、质量单位组 UUID 与 kg 单位同本 PCR 精确匹配；拒绝任何非 CPC 21182 参考产品。 | `un-cpc-3-0-2025` |
| `validate_route_spec` | 数据集身份 | 拒绝缺少一个锁定路线标识、确切作业顺序、成品规格、配料清单、适用烟熏介质、保存终点、贮存条件或包装声明的数据包。 | `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279` |
| `validate_atomic_flows` | 清单卡 | 拒绝包含备选项、复数类别、未具名载体、未具名配料、未具名化学品、未具名包装、混合废物或合并排放的选定流。所有非参考 UUID 在双重精确核验前保持空白。 | `eu-pef-2021-2279` |
| `validate_process_applicability` | 过程图 | 确认每个启用路线作业均有过程章节，且每个省略条件性过程均有不适用文件证据。不得合并直接木烟与液体烟熏液施用。 | `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279` |
| `validate_reference_mass` | 定量清单 | 确认全部数量归一化到 1 kg 净合格产品且排除包装质量。将放行净质量同批次与包装记录核对。 | `eu-pef-2021-2279` |
| `validate_recipe_completeness` | 配料与包装 | 将产品特定配料表与每项包装组分同库存、领料、退料及批次记录核对。任何未列实际流均需新增原子卡。 | `eu-pef-2021-2279` |
| `validate_utility_reconciliation` | 公用工程 | 将电力、蒸汽、热水及每种燃料同仪表或账单核对。记录共享记录的因果分配，并禁止外购热与上游供应商燃料重复计算。 | `eu-pef-2021-2279` |
| `validate_refrigerants_emissions` | 制冷与直接排放 | 按存量平衡核对每种具名制冷剂。对每种污染物保留直接监测，或保留确切活动记录、因子、因子来源、单位换算与计算。 | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `validate_wastewater` | 废水 | 将每股产生废水同处理进水与排放核对。对每种具名污染物负荷匹配体积与浓度期间。 | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `validate_mass_balance` | 全部生产阶段 | 检查牛肉、配料、产品、共产品、废物、废水与蒸发量的阶段及生产活动质量平衡。调查残差，不得强行归入集合流。 | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |
| `validate_temporal_scope` | 前景证据 | 确认路线、规格、配方、仪表、废物记录与实验室样品覆盖同一代表性期间，并识别停机、异常批次与排除项。 | `eu-pef-2021-2279` |
| `validate_quality_verification` | 发布数据集 | 保留完整性、精度、时间/技术/地理代表性、计算、来源溯源及评审人签字证据。对外传播须采用适用 PEF 核证与验证程序。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经方法学与数据评审后可为 `background_dataset` |
| downstream_use | 用于确切已声明路线与成品规格的前景保存过程建模及衔接生命周期模型。 |
| allowed_use | 地理、技术、期间、路线、配料、烟熏介质、保存终点、包装与贮存状态同元数据匹配的归因研究。 |
| excluded_use | 跨盐渍、干制与熏制路线的通用平均；替代未保存牛肉、杂碎、其他物种或其他肉制品；未进行适用评审与核证的比较性声明。 |
| required_metadata | PCR 标识；CPC 参考；参考 UUID；路线标识；作业顺序；产品规格；完整配料表与包装表；烟熏技术及确切介质；保存终点；设施与产线；地理；期间；分配；来源；数据质量评价；排除项。 |
| required_quality_disclosure | 一手数据占比；仪表与质量平衡覆盖；计算与因子溯源；制冷剂核对；排放与废水监测；时间、技术与地理代表性；不确定性与缺口；评审与核证状态。 |
| update_trigger | 路线、配方、烟熏介质、木材树种、热处理终点、干制终点、设备、制冷剂、能源供应、包装、废水处理、分配、法规、参考流身份或重大数据质量发现发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | 联合国统计司，*Central Product Classification (CPC) Version 3.0 Structure*，2025 年 6 月 30 日，保留原始第 21182 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（访问日期 2026-08-13）。 | 确切产品边界以及与相邻保存肉类别的排除关系。 |
| `fao-dried-salted-meats-1985` | `official_guidance` | FAO Animal Production and Health Paper 51，G. A. Norman 与 O. O. Corte，*Dried salted meats: charque and carne-de-sol*，ISBN 92-5-102219-4，1985。https://www.fao.org/4/x6555e/x6555e00.htm（访问日期 2026-08-13）。 | 牛肉原料整理、不同盐渍干制路线、盐和水投入、盐水与废盐、干制、包装及卫生结构；不采用示例数量。 |
| `fao-meat-preservation-manual-1990` | `official_guidance` | FAO Animal Production and Health Paper 79，*Manual on simple methods of meat preservation*，ISBN 92-5-102744-7，1990，第 2 章。https://www.fao.org/4/x6932e/x6932e02.htm（访问日期 2026-08-13）。 | 干制与直接木烟结构、控制、确切盐处理、烟熏介质声明及包装候选；不采用示例数量。 |
| `jrc-sa-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，*Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries*，JRC135916，EUR 31752 EN，2024，DOI 10.2760/18199。https://publications.jrc.ec.europa.eu/repository/handle/JRC135916（访问日期 2026-08-13）。 | 动物产品场址公用工程、清洗、制冷、废水、废物与直接排放采集候选；不把 BREF 水平作为腌制牛肉默认值。 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279，附件 I，Product Environmental Footprint Method，合并文本。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（访问日期 2026-08-13）。 | 产品特定物料清单、企业特定前景数据、完整 LCI、分配、透明度、数据质量、报告、核证与验证。 |
