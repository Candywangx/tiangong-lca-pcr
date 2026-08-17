---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-poultry-fresh-chilled-or-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 家禽可食用内脏，鲜、冷藏或冷冻

## 1. 范围与适用性

本 PCR 覆盖从已关联屠宰和去内脏数据集接收的、按单一器官分别隔离的生鲜家禽可食用内脏之工厂门整理。前景包括接收、身份检验、清洗、修整、器官特定整理、鲜品处理或冷藏或冷冻、包装、储存、出厂、卫生清洗、废水管理，以及存在时的现场公用工程生成。

覆盖的家禽物种为鸡、火鸡、鹅、鸭和珍珠鸡。覆盖产品为食品级、具有具体名称的可食用器官，包括非肥肝、心和胗，以及代表产品规格允许的肥肝。一个前景数据包必须代表恰好一个家禽物种、恰好一个器官身份或肥肝身份，以及恰好一个市场状态：鲜、冷藏或冷冻。混合物种批次、混合器官产品以及跨市场状态聚合均不是合格参考产品。

活禽生产、饲料、孵化、活禽进厂运输、屠宰、放血、去羽和去内脏属于关联的上游过程，其负荷与共产品分配通过生器官输入数据集保持可见。出厂后的配送、零售、烹饪、消费和生命周期末端不在本前景边界内。哺乳动物内脏、不可食用器官、整禽胴体、禽肉分割品、熟制或其他方式保藏的内脏，以及未具名的残余“其他内脏”产品均不包括。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-poultry-fresh-chilled-or-frozen` |
| classification_refs | CPC 3.0：21160 家禽可食用内脏，鲜、冷藏或冷冻 |
| covered_products | 来自一类已声明鸡、火鸡、鹅、鸭或珍珠鸡群体的一个具体命名可食用器官或肥肝，以一个已声明鲜、冷藏或冷冻状态交付 |
| excluded_products | 混合家禽物种；混合器官身份；混合市场状态；哺乳动物内脏；不可食用器官；整胴体；肉类分割品；活禽；熟制、腌制、罐藏或其他方式保藏的内脏；未具名残余内脏类别 |
| representative_product | 具有一个已声明家禽物种、一个已声明器官身份和一个已声明市场状态的合格可食用内脏净产品 |
| production_route | 从关联屠宰数据集接收分别隔离的生器官；检验；清洗；修整；器官特定整理；确切市场状态调节；包装；储存；工厂门出厂 |
| market_state | 内脏加工厂门食品级鲜、冷藏或冷冻产品，并声明物种、器官、产品温度、包装、冰衣和批次状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产工厂门提供一个已声明家禽物种、一个已声明器官身份以及一个已声明鲜、冷藏或冷冻状态的食品级家禽可食用内脏 |
| How much | 1 kg 合格可食用内脏净质量，不含包装、残留包装气体、游离冰衣和托盘质量 |
| How well | 已声明物种；确切器官身份或肥肝身份；食品级放行状态；市场状态；产品温度；完整器官或修整形态；冰衣状态；包装形式 |
| How long or cycle | 一个放行生产批次，或仅含相同物种—器官—状态键的报告期聚合 |
| reference_flow_link | `state_conditioning_packaging` 中的 `reference_edible_poultry_offal` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Edible offal of poultry, fresh, chilled or frozen `c294500e-2de6-44fd-a578-a1534dafb1b4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | poultry_species：鸡、火鸡、鹅、鸭或珍珠鸡中恰好一个；organ_identity：恰好一个具体命名器官或肥肝；market_state：鲜、冷藏或冷冻中恰好一个；产品温度基准；食品级放行状态；完整器官或修整形态；冰衣状态；产品净质量；包装形式；来源屠宰数据集；工厂与地理；报告期；上游分配方法；共产品状态与去向 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息，或物种—器官—状态任一轴上存在多个值，均使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将定量参考固定为已声明物种—器官—状态键下 1 kg 合格可食用内脏净质量。 |
| `variant_key_cardinality` | 参考数据集 | 身份字段 | 已声明值 | 要求恰好一个家禽物种、恰好一个器官身份和恰好一个市场状态；禁止在任一轴上平均或求和。 |
| `net_product_mass` | 产品放行 | Mass | kg | 从参考产品质量中排除包装、残留包装气体、托盘、游离冰衣、游离排液和单独声明的共产品。 |
| `raw_organ_mass` | 生器官接收 | Mass | kg | 在接收秤记录确切物种—器官输入，并核对验收、拒收和库存变化质量。 |
| `market_state` | 参考产品 | Temperature | 已声明单位 | 保留实测放行温度和已声明鲜、冷藏或冷冻判据，不得在市场状态数据集之间转换。 |
| `glazing_basis` | 上冰衣冷冻产品 | Mass | kg | 声明冰衣，并根据适用产品规格将新增冰衣水或冰与可食用内脏净质量分开。 |
| `energy_basis` | 电力、蒸汽、热水、热量和燃料 | Energy | kWh 或 MJ | 保留每种实测能源载体及其换算基准；录入清单前不得合并不同公用工程。 |
| `chemical_mass_basis` | 清洗与处理化学品 | Mass | kg | 当前景记录为配制溶液时，按纯物质当量报告每种具名化学品。 |
| `packaging_mass_basis` | 包装 | Mass | kg | 分别报告每种包装材料，并从 1 kg 参考产品中排除其质量。 |
| `refrigerant_mass_basis` | 制冷 | Mass | kg | 分别核对每种已安装制冷剂，并将混合制冷剂排放组分计算为不同基本流。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_foreground_scope` | 内脏加工 | 纳入接收、检验、清洗、修整、器官特定整理、确切市场状态调节、包装、储存、卫生清洗及直接控制的环境管理，直至工厂门出厂。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_upstream_slaughter_link` | 生器官输入 | 将每个生器官链接至物种和器官特定的屠宰与去内脏数据集，该数据集携带适用的活禽、屠宰与联合生产负荷。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_company_specific_inventory` | 物料清单与制造 | 为所代表工厂、技术和报告期采集产品特定物料及公司特定过程数据。 | `eu-pef-method-2021` |
| `sb_variant_separation` | 所有过程 | 在记录、内部转移、分配和归一化中保持物种、器官身份和市场状态分离；拒绝混合参考数据集。 | `un-cpc-3-0-2025`; `eu-pef-method-2021` |
| `sb_atomic_exchanges` | 过程清单 | 将每种公用工程、燃料、制冷剂、冷却液、化学品、包装材料、共产品、废物和基本排放记录为一个具体交换。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_internal_transfers` | 中间产品、废水与公用工程 | 在每个关联边界各表示内部转移一次，避免等价外部输入、处置或抵扣重复计入。 | `eu-pef-method-2021` |
| `sb_conditional_technology` | 状态调节、包装、处理与能源 | 仅填报所代表技术使用的原子卡；记录不适用性，并在使用未列明确切器官、物料或制冷剂前增加新的具体卡。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_direct_releases` | 空气与水 | 纳入制冷、包装气体、废水处理和燃烧的实测或计算直接排放，不得用污染物集合选择器替代。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从关联屠宰与去内脏数据集验收的、分别隔离的生鲜可食用器官，并记录家禽物种、确切器官身份、屠宰批次、接收质量、温度和检验结果 |
| starting_condition_role | 前景加工门；活禽生产与屠宰作为关联上游保留，并保留其自身联合生产分配 |
| product_classification_scope | CPC 3.0 代码 21160 覆盖鲜、冷藏或冷冻状态的家禽可食用内脏，包括肥肝；每个具体数据包将该类别收窄到一个物种—器官—状态键 |
| recursive_input_rule | 进入本系统的购入可食用内脏仅通过匹配的确切生鲜物种—器官卡记录，并附来源数据集和数量；不得在前景系统内递归再生 |
| upstream_dataset_requirement | 将确切生器官、购入电力、水、蒸汽、热量、燃料、制冷剂、冷却液、化学品、包装与处理服务链接至代表性上游数据集 |
| disclosure | 声明物种、器官身份、肥肝状态、市场状态、屠宰来源、工厂、地理、报告期、整理技术、温度判据、储存时间、制冷系统、制冷剂、冰衣、包装、处理路线、共产品去向及分配 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `offal_receipt_preparation` | 内脏接收、检验、清洗、修整与器官特定整理 | `required` | 始终纳入；只能填报一个生鲜物种—器官输入及其对应的已整理器官输出 | `foreground_process` | `applicable_prepared_organ_row` |
| `state_conditioning_packaging` | 市场状态调节、包装、储存与出厂 | `required` | 始终纳入；必须且只能声明鲜、冷藏或冷冻中的一个市场状态路线 | `foreground_process` | `reference_edible_poultry_offal` |
| `sanitation_wastewater_management` | 清洗、消毒与废水管理 | `required` | 清洗始终纳入；仅当废水处理位于设施边界内时填报现场处理输出 | `foreground_process` | `treated_process_water` |
| `onsite_energy_generation` | 现场燃料燃烧与公用工程生成 | `conditional` | 当设施边界内燃烧燃料或生成蒸汽、热水、热量或电力时纳入 | `foreground_process` | `onsite_steam_output` |

### 过程：内脏接收、检验、清洗、修整与器官特定整理（`offal_receipt_preparation`）

#### 输入

##### 产品流

###### 生鸡肝（`raw_chicken_liver`）

生鸡肝进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw chicken liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鸡心（`raw_chicken_heart`）

生鸡心进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw chicken heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鸡胗（`raw_chicken_gizzard`）

生鸡胗进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw chicken gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生火鸡肝（`raw_turkey_liver`）

生火鸡肝进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw turkey liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生火鸡心（`raw_turkey_heart`）

生火鸡心进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw turkey heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生火鸡胗（`raw_turkey_gizzard`）

生火鸡胗进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw turkey gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鹅非肥肝（`raw_goose_liver_nonfatty`）

生鹅非肥肝进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw goose liver, non-fatty
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鹅心（`raw_goose_heart`）

生鹅心进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw goose heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鹅胗（`raw_goose_gizzard`）

生鹅胗进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw goose gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鹅肥肝（`raw_goose_fatty_liver`）

生鹅肥肝进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw goose fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鸭非肥肝（`raw_duck_liver_nonfatty`）

生鸭非肥肝进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw duck liver, non-fatty
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鸭心（`raw_duck_heart`）

生鸭心进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw duck heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鸭胗（`raw_duck_gizzard`）

生鸭胗进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw duck gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生鸭肥肝（`raw_duck_fatty_liver`）

生鸭肥肝进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw duck fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生珍珠鸡肝（`raw_guinea_fowl_liver`）

生珍珠鸡肝进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw guinea fowl liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生珍珠鸡心（`raw_guinea_fowl_heart`）

生珍珠鸡心进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw guinea fowl heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生珍珠鸡胗（`raw_guinea_fowl_gizzard`）

生珍珠鸡胗进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。仅当该候选的家禽物种和器官身份均与声明的变体键一致时使用。

- 选定流：Raw guinea fowl gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准批次秤和批次身份记录计量该确切物种—器官流，并与验收和拒收处置核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_offal_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电（`offal_preparation_electricity`）

设施供电进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：使用专用电表，或依据经核对的设施电力平衡对该确切交换进行有因果依据的分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 工艺水（`offal_preparation_process_water`）

工艺水进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水量平衡计量该确切水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 热水（`offal_preparation_hot_water`）

热水进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Hot water
- 流属性/单位：Energy / MJ
- 数量规则：使用专用热量表，或依据公用工程平衡计量该确切蒸汽、热水或热量交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 蒸汽（`offal_preparation_steam`）

蒸汽进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：使用专用热量表，或依据公用工程平衡计量该确切蒸汽、热水或热量交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 水冰（`offal_preparation_water_ice`）

水冰进入内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Water ice
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物料身份的采购、领用、退回和库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 已整理鸡肝（`prepared_chicken_liver`）

已整理鸡肝离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared chicken liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸡心（`prepared_chicken_heart`）

已整理鸡心离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared chicken heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸡胗（`prepared_chicken_gizzard`）

已整理鸡胗离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared chicken gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理火鸡肝（`prepared_turkey_liver`）

已整理火鸡肝离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared turkey liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理火鸡心（`prepared_turkey_heart`）

已整理火鸡心离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared turkey heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理火鸡胗（`prepared_turkey_gizzard`）

已整理火鸡胗离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared turkey gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鹅非肥肝（`prepared_goose_liver_nonfatty`）

已整理鹅非肥肝离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared goose liver, non-fatty
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鹅心（`prepared_goose_heart`）

已整理鹅心离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared goose heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鹅胗（`prepared_goose_gizzard`）

已整理鹅胗离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared goose gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鹅肥肝（`prepared_goose_fatty_liver`）

已整理鹅肥肝离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared goose fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸭非肥肝（`prepared_duck_liver_nonfatty`）

已整理鸭非肥肝离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared duck liver, non-fatty
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸭心（`prepared_duck_heart`）

已整理鸭心离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared duck heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸭胗（`prepared_duck_gizzard`）

已整理鸭胗离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared duck gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸭肥肝（`prepared_duck_fatty_liver`）

已整理鸭肥肝离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared duck fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理珍珠鸡肝（`prepared_guinea_fowl_liver`）

已整理珍珠鸡肝离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared guinea fowl liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理珍珠鸡心（`prepared_guinea_fowl_heart`）

已整理珍珠鸡心离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared guinea fowl heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理珍珠鸡胗（`prepared_guinea_fowl_gizzard`）

已整理珍珠鸡胗离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。该中间产品只能按与其原料输入相同的已声明物种—器官键转移。

- 选定流：Prepared guinea fowl gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收的可食用肝修整料（`recovered_edible_liver_trim`）

回收的可食用肝修整料离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered edible liver trim
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收的可食用肥肝修整料（`recovered_edible_fatty_liver_trim`）

回收的可食用肥肝修整料离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered edible fatty-liver trim
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收的可食用心修整料（`recovered_edible_heart_trim`）

回收的可食用心修整料离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered edible heart trim
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收的可食用胗修整料（`recovered_edible_gizzard_trim`）

回收的可食用胗修整料离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered edible gizzard trim
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 胆囊（`gall_bladder_waste`）

胆囊离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Gall bladder
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 胆汁（`bile_waste`）

胆汁离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Bile
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 胗内容物（`gizzard_contents_waste`）

胗内容物离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Gizzard contents
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 胗内膜（`gizzard_lining_waste`）

胗内膜离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Gizzard lining
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 肝修整废物（`liver_trimming_waste`）

肝修整废物离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Liver trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 肥肝修整废物（`fatty_liver_trimming_waste`）

肥肝修整废物离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Fatty-liver trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 心修整废物（`heart_trimming_waste`）

心修整废物离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Heart trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 胗修整废物（`gizzard_trimming_waste`）

胗修整废物离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Gizzard trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 判废肝（`condemned_liver_waste`）

判废肝离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Condemned liver
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 判废肥肝（`condemned_fatty_liver_waste`）

判废肥肝离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Condemned fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 判废心（`condemned_heart_waste`）

判废心离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Condemned heart
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 判废胗（`condemned_gizzard_waste`）

判废胗离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Condemned gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 内脏整理废水（`offal_preparation_wastewater`）

内脏整理废水离开内脏接收、检验、清洗、修整与器官特定整理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Offal-preparation wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


### 过程：市场状态调节、包装、储存与出厂（`state_conditioning_packaging`）

#### 输入

##### 产品流

###### 已整理鸡肝（`conditioning_input_chicken_liver`）

已整理鸡肝进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared chicken liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸡心（`conditioning_input_chicken_heart`）

已整理鸡心进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared chicken heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸡胗（`conditioning_input_chicken_gizzard`）

已整理鸡胗进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared chicken gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理火鸡肝（`conditioning_input_turkey_liver`）

已整理火鸡肝进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared turkey liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理火鸡心（`conditioning_input_turkey_heart`）

已整理火鸡心进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared turkey heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理火鸡胗（`conditioning_input_turkey_gizzard`）

已整理火鸡胗进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared turkey gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鹅非肥肝（`conditioning_input_goose_liver_nonfatty`）

已整理鹅非肥肝进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared goose liver, non-fatty
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鹅心（`conditioning_input_goose_heart`）

已整理鹅心进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared goose heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鹅胗（`conditioning_input_goose_gizzard`）

已整理鹅胗进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared goose gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鹅肥肝（`conditioning_input_goose_fatty_liver`）

已整理鹅肥肝进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared goose fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸭非肥肝（`conditioning_input_duck_liver_nonfatty`）

已整理鸭非肥肝进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared duck liver, non-fatty
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸭心（`conditioning_input_duck_heart`）

已整理鸭心进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared duck heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸭胗（`conditioning_input_duck_gizzard`）

已整理鸭胗进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared duck gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理鸭肥肝（`conditioning_input_duck_fatty_liver`）

已整理鸭肥肝进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared duck fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理珍珠鸡肝（`conditioning_input_guinea_fowl_liver`）

已整理珍珠鸡肝进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared guinea fowl liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理珍珠鸡心（`conditioning_input_guinea_fowl_heart`）

已整理珍珠鸡心进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared guinea fowl heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 已整理珍珠鸡胗（`conditioning_input_guinea_fowl_gizzard`）

已整理珍珠鸡胗进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。仅填报与已声明物种—器官键一致的已整理器官输入。

- 选定流：Prepared guinea fowl gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤和有记录的过程物料平衡计量该确切物料或中间产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电（`conditioning_electricity`）

设施供电进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：使用专用电表，或依据经核对的设施电力平衡对该确切交换进行有因果依据的分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 工艺水（`conditioning_process_water`）

工艺水进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水量平衡计量该确切水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 水冰（`conditioning_water_ice`）

水冰进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Water ice
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物料身份的采购、领用、退回和库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 区域供热（`conditioning_district_heat`）

区域供热进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Heat, district supply
- 流属性/单位：Energy / MJ
- 数量规则：使用专用热量表，或依据公用工程平衡计量该确切蒸汽、热水或热量交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氨制冷剂 R717（`refrigerant_ammonia_r717`）

氨制冷剂 R717进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Ammonia refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：根据该确切制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 二氧化碳制冷剂 R744（`refrigerant_carbon_dioxide_r744`）

二氧化碳制冷剂 R744进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Carbon dioxide refrigerant R744
- 流属性/单位：Mass / kg
- 数量规则：根据该确切制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 1,1,1,2-四氟乙烷制冷剂 R134a（`refrigerant_hfc134a`）

1,1,1,2-四氟乙烷制冷剂 R134a进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant R134a
- 流属性/单位：Mass / kg
- 数量规则：根据该确切制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 制冷剂 R404A（`refrigerant_r404a`）

制冷剂 R404A进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Refrigerant R404A
- 流属性/单位：Mass / kg
- 数量规则：根据该确切制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 制冷剂 R507A（`refrigerant_r507a`）

制冷剂 R507A进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Refrigerant R507A
- 流属性/单位：Mass / kg
- 数量规则：根据该确切制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 制冷剂 R448A（`refrigerant_r448a`）

制冷剂 R448A进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Refrigerant R448A
- 流属性/单位：Mass / kg
- 数量规则：根据该确切制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 制冷剂 R449A（`refrigerant_r449a`）

制冷剂 R449A进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Refrigerant R449A
- 流属性/单位：Mass / kg
- 数量规则：根据该确切制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 丙烷制冷剂 R290（`refrigerant_propane_r290`）

丙烷制冷剂 R290进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Propane refrigerant R290
- 流属性/单位：Mass / kg
- 数量规则：根据该确切制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 二氟一氯甲烷制冷剂 R22（`refrigerant_hcfc22`）

二氟一氯甲烷制冷剂 R22进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Chlorodifluoromethane refrigerant R22
- 流属性/单位：Mass / kg
- 数量规则：根据该确切制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 丙二醇冷却液（`coolant_propylene_glycol`）

丙二醇冷却液进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Propylene glycol coolant
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物料身份的采购、领用、退回和库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氯化钙盐水（`coolant_calcium_chloride_brine`）

氯化钙盐水进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Calcium chloride brine
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物料身份的采购、领用、退回和库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 瓦楞纸板箱（`packaging_corrugated_paperboard_box`）

瓦楞纸板箱进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Corrugated paperboard box
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 高密度聚乙烯周转箱（`packaging_hdpe_reusable_crate`）

高密度聚乙烯周转箱进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：High-density polyethylene crate
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 低密度聚乙烯袋（`packaging_ldpe_bag`）

低密度聚乙烯袋进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Low-density polyethylene bag
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 低密度聚乙烯包装膜（`packaging_ldpe_packaging_film`）

低密度聚乙烯包装膜进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 聚酰胺包装膜（`packaging_polyamide_packaging_film`）

聚酰胺包装膜进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Polyamide packaging film
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 发泡聚苯乙烯保温箱（`packaging_eps_insulated_box`）

发泡聚苯乙烯保温箱进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Expanded polystyrene insulated box
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 聚丙烯托盘（`packaging_pp_tray`）

聚丙烯托盘进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 纤维素吸液垫（`packaging_cellulose_absorbent_pad`）

纤维素吸液垫进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Cellulose absorbent pad
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 聚丙烯包装带（`packaging_pp_packaging_strap`）

聚丙烯包装带进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Polypropylene packaging strap
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 纸标签（`packaging_paper_label`）

纸标签进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Paper label
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 硅涂层离型纸（`packaging_silicone_release_paper`）

硅涂层离型纸进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Silicone-coated release paper
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 木托盘（`packaging_wood_pallet`）

木托盘进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Wood pallet
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 铝封口夹（`packaging_aluminium_closure_clip`）

铝封口夹进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Aluminium closure clip
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 食品级二氧化碳（`packaging_carbon_dioxide`）

食品级二氧化碳进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Carbon dioxide, food grade
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物料身份的采购、领用、退回和库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 食品级氮气（`packaging_nitrogen`）

食品级氮气进入市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Nitrogen, food grade
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物料身份的采购、领用、退回和库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 家禽可食用内脏，鲜、冷藏或冷冻（`reference_edible_poultry_offal`）

家禽可食用内脏，鲜、冷藏或冷冻离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的产品交换。该经核验的天工类别级身份仅在固定一个家禽物种、一个器官身份和一个市场状态后定量；不得据此建立混合数据集。

- 选定流：Edible offal of poultry, fresh, chilled or frozen `c294500e-2de6-44fd-a578-a1534dafb1b4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：固定为已声明物种—器官—状态键下 1 kg 合格家禽可食用内脏净质量；排除包装、残留包装气体、游离冰衣和托盘质量。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：`cp_product_release`
- 来源：`un-cpc-3-0-2025`

##### 废物流

###### 不合格鲜肝（`offspec_fresh_liver`）

不合格鲜肝离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification fresh liver
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格鲜肥肝（`offspec_fresh_fatty_liver`）

不合格鲜肥肝离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification fresh fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格鲜心（`offspec_fresh_heart`）

不合格鲜心离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification fresh heart
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格鲜胗（`offspec_fresh_gizzard`）

不合格鲜胗离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification fresh gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格冷藏肝（`offspec_chilled_liver`）

不合格冷藏肝离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification chilled liver
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格冷藏肥肝（`offspec_chilled_fatty_liver`）

不合格冷藏肥肝离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification chilled fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格冷藏心（`offspec_chilled_heart`）

不合格冷藏心离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification chilled heart
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格冷藏胗（`offspec_chilled_gizzard`）

不合格冷藏胗离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification chilled gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格冷冻肝（`offspec_frozen_liver`）

不合格冷冻肝离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification frozen liver
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格冷冻肥肝（`offspec_frozen_fatty_liver`）

不合格冷冻肥肝离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification frozen fatty liver
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格冷冻心（`offspec_frozen_heart`）

不合格冷冻心离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification frozen heart
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格冷冻胗（`offspec_frozen_gizzard`）

不合格冷冻胗离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。仅记录该判废器官—状态流所对应的确切已声明物种。

- 选定流：Off-specification frozen gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废瓦楞纸板箱（`waste_corrugated_paperboard_box`）

废瓦楞纸板箱离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste corrugated paperboard box
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废高密度聚乙烯周转箱（`waste_hdpe_reusable_crate`）

废高密度聚乙烯周转箱离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste high-density polyethylene crate
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废低密度聚乙烯袋（`waste_ldpe_bag`）

废低密度聚乙烯袋离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste low-density polyethylene bag
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废低密度聚乙烯包装膜（`waste_ldpe_packaging_film`）

废低密度聚乙烯包装膜离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废聚酰胺包装膜（`waste_polyamide_packaging_film`）

废聚酰胺包装膜离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste polyamide packaging film
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废发泡聚苯乙烯保温箱（`waste_eps_insulated_box`）

废发泡聚苯乙烯保温箱离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste expanded polystyrene insulated box
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废聚丙烯托盘（`waste_pp_tray`）

废聚丙烯托盘离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废纤维素吸液垫（`waste_cellulose_absorbent_pad`）

废纤维素吸液垫离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste cellulose absorbent pad
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废聚丙烯包装带（`waste_pp_packaging_strap`）

废聚丙烯包装带离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste polypropylene packaging strap
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废纸标签（`waste_paper_label`）

废纸标签离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste paper label
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废硅涂层离型纸（`waste_silicone_release_paper`）

废硅涂层离型纸离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste silicone-coated release paper
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废木托盘（`waste_wood_pallet`）

废木托盘离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste wood pallet
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废铝封口夹（`waste_aluminium_closure_clip`）

废铝封口夹离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste aluminium closure clip
- 流属性/单位：Mass / kg
- 数量规则：使用领用件数乘经核验单件质量，并核对退回、库存和废料，以计量该确切材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 状态调节冷凝废水（`conditioning_condensate_wastewater`）

状态调节冷凝废水离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Conditioning condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 上冰衣废水（`glazing_wastewater`）

上冰衣废水离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Glazing wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 融霜废水（`defrost_wastewater`）

融霜废水离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

###### 氨，排放至空气（`conditioning_ammonia_air`）

氨，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Ammonia, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 化石二氧化碳，排放至空气（`conditioning_carbon_dioxide_air`）

化石二氧化碳，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 1,1,1,2-四氟乙烷，排放至空气（`conditioning_hfc134a_air`）

1,1,1,2-四氟乙烷，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：1,1,1,2-Tetrafluoroethane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 五氟乙烷，排放至空气（`conditioning_hfc125_air`）

五氟乙烷，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Pentafluoroethane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 1,1,1-三氟乙烷，排放至空气（`conditioning_hfc143a_air`）

1,1,1-三氟乙烷，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：1,1,1-Trifluoroethane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 二氟甲烷，排放至空气（`conditioning_hfc32_air`）

二氟甲烷，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Difluoromethane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 2,3,3,3-四氟丙烯，排放至空气（`conditioning_hfo1234yf_air`）

2,3,3,3-四氟丙烯，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：2,3,3,3-Tetrafluoropropene, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 反式-1,3,3,3-四氟丙烯，排放至空气（`conditioning_hfo1234ze_air`）

反式-1,3,3,3-四氟丙烯，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：trans-1,3,3,3-Tetrafluoropropene, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 丙烷，排放至空气（`conditioning_propane_air`）

丙烷，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Propane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 二氟一氯甲烷，排放至空气（`conditioning_hcfc22_air`）

二氟一氯甲烷，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Chlorodifluoromethane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氮气，排放至空气（`conditioning_nitrogen_air`）

氮气，排放至空气离开市场状态调节、包装、储存与出厂边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Nitrogen, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`


### 过程：清洗、消毒与废水管理（`sanitation_wastewater_management`）

#### 输入

##### 产品流

###### 设施供电（`sanitation_electricity`）

设施供电进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：使用专用电表，或依据经核对的设施电力平衡对该确切交换进行有因果依据的分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 工艺水（`sanitation_process_water`）

工艺水进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水量平衡计量该确切水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 热水（`sanitation_hot_water`）

热水进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Hot water
- 流属性/单位：Energy / MJ
- 数量规则：使用专用热量表，或依据公用工程平衡计量该确切蒸汽、热水或热量交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 蒸汽（`sanitation_steam`）

蒸汽进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：使用专用热量表，或依据公用工程平衡计量该确切蒸汽、热水或热量交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氢氧化钠（`sanitation_sodium_hydroxide`）

氢氧化钠进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 硝酸（`sanitation_nitric_acid`）

硝酸进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 次氯酸钠（`sanitation_sodium_hypochlorite`）

次氯酸钠进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 过氧乙酸（`sanitation_peracetic_acid`）

过氧乙酸进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 过氧化氢（`sanitation_hydrogen_peroxide`）

过氧化氢进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 苯扎氯铵（`sanitation_benzalkonium_chloride`）

苯扎氯铵进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Benzalkonium chloride
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 碳酸钠（`sanitation_sodium_carbonate`）

碳酸钠进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Sodium carbonate
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 磷酸（`sanitation_phosphoric_acid`）

磷酸进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Phosphoric acid
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 磷酸三钠（`sanitation_trisodium_phosphate`）

磷酸三钠进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Trisodium phosphate
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氯化铁（`sanitation_ferric_chloride`）

氯化铁进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氢氧化钙（`sanitation_calcium_hydroxide`）

氢氧化钙进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 阴离子聚丙烯酰胺（`sanitation_anionic_polyacrylamide`）

阴离子聚丙烯酰胺进入清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Anionic polyacrylamide
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 内脏整理废水（`sanitation_offal_preparation_wastewater`）

内脏整理废水进入清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Offal-preparation wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 状态调节冷凝废水（`sanitation_conditioning_condensate`）

状态调节冷凝废水进入清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Conditioning condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 上冰衣废水（`sanitation_glazing_wastewater`）

上冰衣废水进入清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Glazing wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 融霜废水（`sanitation_defrost_wastewater`）

融霜废水进入清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 处理后工艺水（`treated_process_water`）

处理后工艺水离开清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Treated process water
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收沼气（`recovered_biogas`）

回收沼气离开清洗、消毒与废水管理边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered biogas
- 流属性/单位：Energy / MJ
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 送场外处理的未处理废水（`untreated_wastewater_offsite`）

送场外处理的未处理废水离开清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Untreated wastewater for off-site treatment
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 初级废水处理污泥（`primary_wastewater_sludge`）

初级废水处理污泥离开清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Primary wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生物废水处理污泥（`biological_wastewater_sludge`）

生物废水处理污泥离开清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Biological wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 溶气气浮油脂污泥（`daf_grease_sludge`）

溶气气浮油脂污泥离开清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Dissolved-air-flotation grease sludge
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废水筛渣（`screened_solids`）

废水筛渣离开清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Screened wastewater solids
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废清洗液（`spent_cleaning_solution`）

废清洗液离开清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Spent cleaning solution
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废高密度聚乙烯化学品桶（`waste_hdpe_chemical_drum`）

废高密度聚乙烯化学品桶离开清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste high-density polyethylene chemical drum
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废钢制化学品桶（`waste_steel_chemical_drum`）

废钢制化学品桶离开清洗、消毒与废水管理边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste steel chemical drum
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

###### 化学需氧量，排放至水体（`effluent_cod`）

化学需氧量，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Chemical oxygen demand, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生化需氧量，排放至水体（`effluent_bod`）

生化需氧量，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Biochemical oxygen demand, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 总氮，排放至水体（`effluent_total_nitrogen`）

总氮，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Total nitrogen, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氨氮，排放至水体（`effluent_ammonium_nitrogen`）

氨氮，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Ammonium nitrogen, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 硝态氮，排放至水体（`effluent_nitrate_nitrogen`）

硝态氮，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Nitrate nitrogen, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 总磷，排放至水体（`effluent_total_phosphorus`）

总磷，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Total phosphorus, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 正磷酸盐，排放至水体（`effluent_orthophosphate`）

正磷酸盐，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Orthophosphate, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 悬浮固体，排放至水体（`effluent_suspended_solids`）

悬浮固体，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Suspended solids, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 动物脂肪，排放至水体（`effluent_animal_fat`）

动物脂肪，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Animal fat, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氯化物，排放至水体（`effluent_chloride`）

氯化物，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Chloride, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 总溶解性固体，排放至水体（`effluent_total_dissolved_solids`）

总溶解性固体，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Total dissolved solids, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 游离氯，排放至水体（`effluent_free_chlorine`）

游离氯，排放至水体离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Free chlorine, to water
- 流属性/单位：Mass / kg
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生物源甲烷，排放至空气（`wastewater_methane_air`）

生物源甲烷，排放至空气离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Methane, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生物源二氧化碳，排放至空气（`wastewater_carbon_dioxide_air`）

生物源二氧化碳，排放至空气离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氨，排放至空气（`wastewater_ammonia_air`）

氨，排放至空气离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Ammonia, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 硫化氢，排放至空气（`wastewater_hydrogen_sulfide_air`）

硫化氢，排放至空气离开清洗、消毒与废水管理边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Hydrogen sulfide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`


### 过程：现场燃料燃烧与公用工程生成（`onsite_energy_generation`）

#### 输入

##### 产品流

###### 天然气（`onsite_natural_gas`）

天然气进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：按声明的能量基准，使用该确切燃料的计量表、发票和库存核对记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 柴油燃料（`onsite_diesel`）

柴油燃料进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：按声明的能量基准，使用该确切燃料的计量表、发票和库存核对记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 液化石油气（`onsite_lpg`）

液化石油气进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：按声明的能量基准，使用该确切燃料的计量表、发票和库存核对记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 燃料油（`onsite_fuel_oil`）

燃料油进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Fuel oil
- 流属性/单位：Energy / MJ
- 数量规则：按声明的能量基准，使用该确切燃料的计量表、发票和库存核对记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 木片（`onsite_wood_chips`）

木片进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Wood chips
- 流属性/单位：Energy / MJ
- 数量规则：按声明的能量基准，使用该确切燃料的计量表、发票和库存核对记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收沼气（`onsite_recovered_biogas`）

回收沼气进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered biogas
- 流属性/单位：Energy / MJ
- 数量规则：按声明的能量基准，使用该确切燃料的计量表、发票和库存核对记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 工艺水（`boiler_process_water`）

工艺水进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水量平衡计量该确切水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电（`onsite_auxiliary_electricity`）

设施供电进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：使用专用电表，或依据经核对的设施电力平衡对该确切交换进行有因果依据的分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氢氧化钠（`boiler_sodium_hydroxide`）

氢氧化钠进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 磷酸三钠（`boiler_trisodium_phosphate`）

磷酸三钠进入现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Trisodium phosphate
- 流属性/单位：Mass / kg
- 数量规则：使用该确切化学品的领用、浓度和库存记录，并换算为纯物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 蒸汽（`onsite_steam_output`）

蒸汽离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：使用专用热量表，或依据公用工程平衡计量该确切蒸汽、热水或热量交换。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 热水（`onsite_hot_water_output`）

热水离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Hot water
- 流属性/单位：Energy / MJ
- 数量规则：使用专用热量表，或依据公用工程平衡计量该确切蒸汽、热水或热量交换。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 现场供热（`onsite_heat_output`）

现场供热离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Heat, onsite supply
- 流属性/单位：Energy / MJ
- 数量规则：使用专用热量表，或依据公用工程平衡计量该确切蒸汽、热水或热量交换。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 电力（`onsite_electricity_output`）

电力离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的产品交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- 数量规则：使用专用电表，或依据经核对的设施电力平衡对该确切交换进行有因果依据的分摊。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 锅炉排污废水（`boiler_blowdown_wastewater`）

锅炉排污废水离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Boiler blowdown wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该确切废水或水排放流相匹配的流量计、采样、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废润滑油（`spent_lubricating_oil`）

废润滑油离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Spent lubricating oil
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 锅炉灰渣（`boiler_ash`）

锅炉灰渣离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的废物交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Boiler ash
- 流属性/单位：Mass / kg
- 数量规则：使用该确切物流的经校准容器称量、交运记录、产品或废物状态及去向证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

###### 化石二氧化碳，排放至空气（`onsite_carbon_dioxide_fossil_air`）

化石二氧化碳，排放至空气离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生物源二氧化碳，排放至空气（`onsite_carbon_dioxide_biogenic_air`）

生物源二氧化碳，排放至空气离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 以二氧化氮计的氮氧化物，排放至空气（`onsite_nitrogen_oxides_air`）

以二氧化氮计的氮氧化物，排放至空气离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Nitrogen oxides expressed as nitrogen dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 以二氧化硫计的硫氧化物，排放至空气（`onsite_sulfur_oxides_air`）

以二氧化硫计的硫氧化物，排放至空气离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Sulfur oxides expressed as sulfur dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 一氧化碳，排放至空气（`onsite_carbon_monoxide_air`）

一氧化碳，排放至空气离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Carbon monoxide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### PM10 颗粒物，排放至空气（`onsite_pm10_air`）

PM10 颗粒物，排放至空气离开现场燃料燃烧与公用工程生成边界，作为一个单独定量的基本交换。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Particulate matter PM10, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或依据已采集源记录的有文件计算，计量该确切基本排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门已声明物种—器官—状态键下的合格家禽可食用内脏净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `alloc_upstream_subdivision` | 关联屠宰与去内脏 | 在器官回收生产线与记录能够分开时，优先使用细分和直接计量。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `alloc_upstream_joint_production` | 生器官、胴体与屠宰共产品 | 保留关联屠宰数据集使用的分配，并披露共产品数量、状态、公式及报告期基准。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `alloc_direct_processing` | 内脏整理与状态调节 | 在分配任何不可避免联合负荷前，将直接实测的整理、状态调节、包装、储存和处理负荷赋予确切物种—器官—状态产品。 | `eu-pef-method-2021` |
| `alloc_co_product_status` | 回收可食用修整料与回收沼气 | 在实际交接点确定产品或废物状态，并仅使用相匹配的产品或废物交换；同一物理流不得在两种角色中重复计入。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `alloc_physical_relation` | 不可避免联合输出 | 若无法细分，仅当有证据的物理因果关系能反映输入与排放随联合产出变化时使用该关系。 | `eu-pef-method-2021` |
| `alloc_economic_fallback` | 其余联合输出 | 若不存在可辩护物理关系，使用与适用研究方案和报告期一致的有文件经济分配；不得编造默认因子。 | `eu-pef-method-2021` |
| `alloc_waste_no_credit` | 废物流 | 将处理负荷赋予已声明交接点，不得采用避免产品抵扣，除非下游模型明确要求并记录该情景。 | `eu-pef-method-2021` |
| `alloc_internal_recovery` | 处理后水、沼气、蒸汽、热水、热量与电力 | 将内部回收视为关联转移，不得对同一回收数量重复分配或抵扣。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_offal_records` | `offal_receipt_preparation` | 确切生鲜物种—器官接收 | 批次、供应商与秤记录 | lot_id; slaughter_source; poultry_species; organ_identity; fatty_liver_status; receipt_time; product_temperature; gross_mass; tare_mass; accepted_mass; rejected_mass | 经校准批次秤加身份与检验复核 | kg | 每批次 | 完整报告期 | 所有代表性接收 | 仅聚合相同物种—器官键并核对处置 | 校准；接收；检验；来源数据集 |
| `cp_process_mass_balance` | `offal_receipt_preparation`; `state_conditioning_packaging` | 器官输入、中间产品、修整料与产品 | 生产与秤记录 | batch_id; variant_key; input_mass; prepared_mass; trim_mass; reject_mass; glazing_mass; inventory_change | 经校准秤与批次记录 | kg | 每批次或班次 | 完整报告期 | 所有代表性生产线 | 归一化前分别核对每个物种—器官—状态键 | 校准；批次单；平衡异常日志 |
| `cp_product_release` | `state_conditioning_packaging` | 合格参考产品 | 批次放行记录 | lot_id; species; organ_identity; market_state; net_mass; product_temperature; glazing_status; package; release_decision | 经校准终秤加身份、温度与质量复核 | kg | 每批次 | 完整报告期 | 所有参考产品批次 | 仅汇总共享同一物种—器官—状态键的放行批次 | 校准；温度日志；放行证书 |
| `cp_energy_records` | 所有过程 | 电力 | 电表与公用工程记录 | meter_id; timestamp; opening_reading; closing_reading; source; destination | 专用电表或经核对场址电表的有文件因果分摊 | kWh | 连续或账单期 | 完整报告期 | 所有代表性设备 | 按过程分别汇总电力，并核对输入、生成与转移 | 电表校准；发票；核对 |
| `cp_heat_records` | 所有过程 | 蒸汽、热水与热量 | 热量表与公用工程记录 | meter_id; carrier_identity; temperature; pressure; opening_reading; closing_reading; source; destination | 专用热量表或有文件公用工程平衡 | MJ | 连续或班次 | 完整报告期 | 所有代表性公用工程回路 | 保持每种载体分开并核对内部转移 | 仪表校准；公用工程平衡 |
| `cp_water_balance` | 所有过程 | 工艺水 | 水表记录 | meter_id; source; destination; opening_reading; closing_reading; recirculation; discharge | 专用水表与有文件水量平衡 | m3 | 连续或每日 | 完整报告期 | 所有代表性水回路 | 分开外部补水、内部回用与排放 | 水表校准；平衡核对 |
| `cp_material_inventory` | 适用过程 | 冰、冷却液与包装气体 | 采购与库存记录 | material_identity; concentration; opening_stock; purchases; issues; returns; closing_stock | 物料特定库存核对 | kg | 每次领用与报告期 | 完整报告期 | 所有代表性库房与投加点 | 分别计算每种确切物料 | 发票；规格；库存记录 |
| `cp_refrigerant_balance` | `state_conditioning_packaging` | 每种制冷剂与排放组分 | 设备与服务记录 | equipment_id; refrigerant_identity; blend_composition; opening_stock; purchases; charge; recovery; returns; closing_stock; service_loss | 报告期制冷剂质量平衡 | kg | 每次服务事件与报告期 | 完整报告期 | 每个代表性制冷回路 | 分别计算每种制冷剂输入与排放组分 | 服务发票；钢瓶称量；组成规格 |
| `cp_packaging_inventory` | `state_conditioning_packaging` | 每种包装材料与废料 | 物料清单、领用与废料记录 | material_identity; units_issued; unit_mass; returns; stock_change; scrap_mass; reusable_cycles | 件数乘经核验单件质量并进行库存核对 | kg | 每批次与报告期 | 完整报告期 | 每条代表性包装线 | 分别计算每种材料及匹配废料流 | 供应商规格；秤核验；领用记录 |
| `cp_chemical_inventory` | 卫生与公用工程 | 每种具名化学品 | 领用、浓度与库存记录 | chemical_identity; formulation; active_fraction; opening_stock; purchases; issues; closing_stock | 库存核对并换算为纯物质当量质量 | kg | 每次领用与报告期 | 完整报告期 | 所有代表性化学品库 | 不跨化学品身份聚合 | 安全数据表；浓度测试；库存核对 |
| `cp_waste_byproduct_records` | 所有过程 | 每种共产品与废物 | 称量交运与处理记录 | stream_identity; variant_key; product_or_waste_status; container_tare; gross_mass; net_mass; destination; date | 经校准秤或经核验容器质量 | kg | 每次转移 | 完整报告期 | 每个声明物流与去向 | 保持每个物理身份与状态分开 | 称量票；联单；去向证据 |
| `cp_wastewater_records` | 适用过程 | 废水、污泥与水排放 | 流量计与实验室记录 | stream_identity; volume; sample_time; concentration; parameter; treatment_route; sludge_mass; destination | 匹配的流量计量与代表性采样 | m3; kg | 连续流量与基于风险的采样 | 完整报告期 | 每个排放与处理路线 | 按匹配体积与浓度计算每种负荷，并核对转移与污泥 | 仪表校准；实验室报告；许可记录 |
| `cp_air_emissions` | 制冷、处理与能源 | 每种直接空气排放 | 监测、质量平衡与服务记录 | emission_identity; source; activity; concentration; flow_rate; duration; composition; calculated_loss | 直接监测或根据已采集源记录进行有文件计算 | kg | 按适用情况连续、活动期或服务事件 | 完整报告期 | 每个直接排放源 | 分别计算并报告每种基本流 | 监测报告；服务记录；计算工作表 |
| `cp_fuel_inventory` | `onsite_energy_generation` | 每种燃料 | 燃料表、发票与库存记录 | fuel_identity; quantity; unit; energy_basis; opening_stock; purchases; issues; closing_stock | 按燃料进行计量或库存核对 | MJ | 每次交付与报告期 | 完整报告期 | 每个燃烧单元 | 分别计算每种燃料身份的消耗 | 发票；储罐校准；燃料规格 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_variant_lock` | 所有记录 | 由家禽物种、器官身份和市场状态构造一个不可变键；拒绝任一轴存在多个值的记录集。 | 身份与放行记录 | 一个合格物种—器官—状态键 | `un-cpc-3-0-2025`; `eu-pef-method-2021` |
| `calc_reference_normalization` | 所有清单行 | 将一个原子交换的报告期数量除以相同物种—器官—状态键的放行产品净质量。 | 交换量；放行产品净质量；变体键 | 每 1 kg 参考产品数量 | `eu-pef-method-2021` |
| `calc_organ_mass_balance` | 接收与整理 | 在相同物种—器官键下核对确切生器官质量与已整理器官、可食用修整料、废物、废水携带物及库存变化。 | 接收质量；已整理质量；修整料；废物；废水负荷；库存变化 | 经核对器官质量平衡 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_state_balance` | 状态调节与包装 | 对所选市场状态核对已整理器官、水或冰添加、放行产品、不合格产品、排液、冰衣和库存变化。 | 已整理质量；水；冰；放行质量；拒收；库存变化 | 经核对状态特定产品平衡 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_internal_transfer` | 中间产品、废水与公用工程 | 对相同身份和期间匹配发送过程输出与接收过程输入，并删除任何重复外部交换。 | 关联输出；关联输入；库存变化 | 经核对内部转移 | `eu-pef-method-2021` |
| `calc_refrigerant_loss` | 制冷 | 根据库存与服务记录计算每种制冷剂损失；使用有文件组成分别计算每种混合制冷剂排放组分。 | 制冷剂平衡；混合物组成 | 制冷剂输入与组分特定空气排放 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_packaging_mass` | 包装 | 将领用件数乘经核验单件质量，调整退回与库存变化，并保持每种材料及废料身份分开。 | 件数；单件质量；退回；库存；废料 | 材料特定包装输入与废物 | `eu-pef-method-2021` |
| `calc_wastewater_load` | 水排放 | 将匹配排放体积乘每个声明参数的代表性浓度，并记录单位换算。 | 出水体积；参数浓度 | 参数特定质量排放 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_combustion_emissions` | 现场燃烧 | 使用直接监测或与每种燃料清单及运行期关联的有文件计算；保持污染物身份分开。 | 燃料清单；监测；运行时间；组成 | 污染物特定空气排放 | `ec-jrc-sa-bref-jrc135916` |
| `calc_allocation` | 关联屠宰与联合输出 | 仅在细分和直接计量之后应用已声明层级；披露数据、公式和报告期基准。 | 联合清单；产出数量；物理或经济基准 | 按确切产品分配的清单 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 所有交换 | 保留确切流身份、方向、类型、单位和过程；未解决非参考 UUID 保持为空并在 manifest 登记。 | 清单审计与 UUID 复核 |
| `dq_variant_lock` | 所有记录 | 从接收、整理、放行、归一化到发布始终保留一个不可变物种—器官—状态键。 | 批次谱系与键基数检查 |
| `dq_primary_data` | 前景加工 | 使用所代表工厂、技术和报告期的公司特定记录。 | 仪表、秤、发票、日志与实验室报告 |
| `dq_upstream_traceability` | 生器官 | 保留屠宰来源、批次、物种、器官身份、转移质量与上游分配披露。 | 接收与关联数据集记录 |
| `dq_completeness` | 清单 | 覆盖确切物料、能源、产品、共产品、废物和直接排放；为每张条件卡记录不适用性。 | 完整性矩阵与过程巡查 |
| `dq_temporal` | 报告期 | 覆盖代表性运行期并披露停机、异常事件、库存变化和季节影响。 | 报告期核对 |
| `dq_mass_balance` | 整理与状态调节 | 核对生器官、已整理产品、可食用修整料、拒收、水或冰、废水携带物与库存变化，不得隐藏在组合残差流中。 | 批次与期间质量平衡 |
| `dq_refrigeration` | 冷藏、冷冻与储存 | 保留设备特定制冷剂身份、混合物组成、服务记录与组分损失计算。 | 制冷服务档案 |
| `dq_market_state` | 参考产品 | 保留状态判据、产品温度、冰衣状态、储存时间与放行决定。 | 温度日志与放行证书 |
| `dq_packaging` | 包装产品 | 保留变体特定包装物料清单和材料特定废料记录。 | 物料清单与领用记录 |
| `dq_wastewater` | 水管理 | 将代表性浓度样品与实测体积匹配，并披露处理或场外交接。 | 实验室、仪表与联单记录 |
| `dq_transparency` | 发布数据集 | 披露排除项、分配、数据缺口、代理、未解决身份与计算方法。 | 数据质量报告 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 使用 Edible offal of poultry, fresh, chilled or frozen `c294500e-2de6-44fd-a578-a1534dafb1b4`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `val_variant_lock` | 参考数据集 | 要求恰好一个家禽物种、恰好一个具体命名器官或肥肝，以及恰好一个鲜、冷藏或冷冻市场状态。 | `un-cpc-3-0-2025`; `eu-pef-method-2021` |
| `val_species_scope` | 家禽物种 | 接受鸡、火鸡、鹅、鸭或珍珠鸡；拒绝混合物种与非家禽物种。 | `un-cpc-3-0-2025` |
| `val_organ_scope` | 器官身份 | 要求具体器官名称；若确切器官缺少清单卡，须在数据集使用前增加一个原子行并完成身份复核；拒绝以“内脏”“器官混合物”或“其他内脏”作为选定身份。 | `un-cpc-3-0-2025`; `eu-pef-method-2021` |
| `val_market_state` | 产品状态 | 要求一个已声明状态判据与实测放行温度；禁止合并鲜、冷藏和冷冻批次。 | `un-cpc-3-0-2025`; `ec-jrc-sa-bref-jrc135916` |
| `val_atomic_inventory` | 所有清单行 | 要求每卡一个具体交换和非空说明；拒绝集合标签以及物料、公用工程、化学品、包装、废物或污染物选择器。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_uuid_closure` | 身份 | 仅允许双核确认 UUID，并要求每个空白非参考 UUID 在 manifest 审查元数据中具有相同 row_id。 |  |
| `val_no_inferred_quantities` | 数量 | 要求前景记录、计算值或固定参考量；拒绝仅基于推断的默认值与无支持范围。 | `eu-pef-method-2021` |
| `val_mass_balance` | 接收至放行 | 在相同变体键和期间内，核对生器官与产品、共产品、废物、水或冰添加、排放负荷及库存变化。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_upstream_allocation` | 关联屠宰数据集 | 要求披露细分或分配方法、共产品状态、来源数量、公式与期间。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_energy_water_balance` | 公用工程 | 核对输入、生成与内部转移的电力、蒸汽、热水、热量、燃料和水，避免重复计入。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_refrigerant_balance` | 制冷 | 要求分别识别每种已安装制冷剂与每种排放组分，并同服务记录核对。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_packaging` | 包装产品 | 匹配每种包装输入、废料流与已声明包装形式，并从参考产品质量中排除包装。 | `eu-pef-method-2021` |
| `val_wastewater` | 废水 | 将实测废水体积同内部转移、处理、场外交接和参数特定排放负荷匹配。 | `ec-jrc-sa-bref-jrc135916` |
| `val_co_product_status` | 回收修整料与沼气 | 要求每个物理流具有一个产品或废物状态及一个去向；拒绝产品—废物重复核算。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_allocation` | 联合输出 | 要求已声明细分与分配层级、输入数据、公式及报告期基准。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个确切家禽可食用内脏物种—器官—状态变体的工厂门前景加工数据集 |
| downstream_use | `secondary_dataset`；`background_dataset`；产品足迹与生命周期模型构建 |
| allowed_use | 与已声明家禽物种、器官身份、市场状态、屠宰来源、工厂、技术、地理、报告期、包装及分配相匹配的系统 |
| excluded_use | 混合物种；混合器官；混合市场状态；哺乳动物内脏；不可食用器官；整胴体；肉类分割品；熟制或保藏内脏；出厂后配送、制备、使用或生命周期末端 |
| required_metadata | PCR id；CPC 参考；UUID 链；物种；器官身份；肥肝状态；市场状态；产品温度；冰衣；净质量；屠宰来源；工厂；期间；整理；制冷；包装；处理；分配 |
| required_quality_disclosure | 一手数据覆盖；秤与仪表质量；质量、能源、水与制冷剂平衡；采样；不适用性；代理；未解决 UUID；分配；不确定性 |
| update_trigger | 物种、器官身份、市场状态、来源屠宰分配、整理、制冷、燃料、化学品、包装、处理、工厂、地理、期间、证据或 UUID 发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 数据集（`dataset`） | 联合国统计司，《中央产品分类》第 3.0 版，官方分类条目与保留原始文件 `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv`。https://unstats.un.org/unsd/classifications/Econ/CPC | CPC 21160 精确标题、覆盖家禽物种、肥肝纳入以及鲜、冷藏或冷冻范围 |
| `ec-jrc-sa-bref-jrc135916` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《屠宰场、动物副产品和/或可食用共产品行业最佳可行技术参考文件》，JRC135916。https://doi.org/10.2760/18199 | 器官处理与整理、能源、水、制冷、清洗、共产品、废物、废水与直接排放 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会建议 (EU) 2021/2279，合并版产品环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定物料清单、公司特定制造数据、生命周期清单完整性、分配、计算、数据质量与透明度 |
