---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 绵羊肉，鲜或冷藏

## 1. 范围与适用性

本 PCR 适用于按 CPC 3.0 代码 21115 投放市场的净重合格鲜或冷藏绵羊肉。前景边界始于屠宰场接收活绵羊，涵盖待宰、屠宰与胴体整理、胴体冷却、分割、包装、冷藏、清洗消毒及现场废水处理，止于工厂门。

本 PCR 不包括冷冻绵羊肉、以食用或非食用内脏为参考产品的产品、炼制产品、调制肉及其他物种肉类。绵羊养殖、饲料生产、活畜运输、分销、零售、烹饪、使用和寿命终止均在前景边界外；更广研究纳入这些阶段时应使用单独的可追溯数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-fresh-or-chilled |
| classification_refs | CPC 3.0：21115，精确范围参考 |
| covered_products | 符合声明产品规范的鲜或冷藏绵羊肉，包括胴体、分割肉或份装肉 |
| excluded_products | 冷冻绵羊肉；以内脏为参考产品的绵羊产品；炼制或调制绵羊产品；山羊或其他物种肉类；养殖、运输、零售、使用和寿命终止服务 |
| representative_product | 屠宰场或分割厂工厂门处一个已声明规格的鲜或冷藏绵羊肉产品 |
| production_route | 活畜接收与待宰；屠宰与胴体整理；冷却；适用时分割与包装；冷藏；清洗消毒与废水处理 |
| market_state | 工厂门净重鲜或冷藏绵羊肉，声明温度状态、分割形式、带骨状态和包装配置 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明鲜或冷藏状态和分割形式的可食用绵羊肉 |
| How much | 工厂门 1 kg 净重合格产品 |
| How well | 符合声明的物种、分割、带骨状态、温度、卫生、质量等级和包装规范 |
| How long or cycle | 工厂门放行时点；报告声明的冷藏时间，但不规定默认货架期 |
| reference_flow_link | 实现声明产品功能所需的合格鲜或冷藏绵羊肉净质量；包装不计入产品质量并单独记录 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 新鲜或冷藏的绵羊肉 `f77c69e0-fe2f-421a-9f33-23b4a09bd9ba` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 绵羊物种确认；产品分割或胴体形式；带骨或去骨状态；鲜或冷藏状态；放行温度；产品净质量；食用规范与等级；屠宰和分割场址；生产期；冷藏时间；包装配置；分配方法；共产品去向；废水路线 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告合格鲜或冷藏绵羊肉净质量；排除包装、游离液体、内脏和不合格物料。 |
| `live_mass` | 活绵羊输入 | Mass | kg 活重 | 使用校准的到场或验收活重记录，并声明禁食或失重是否影响计量基准。 |
| `product_state` | 肉和中间胴体流 | Mass | kg | 记录称重点、温度状态、带骨状态，以及质量属于热胴体、冷胴体还是可销售肉。 |
| `carrier_conversion` | 电力、蒸汽、热水、天然气、柴油和 LPG | Energy 或载体数量 | 原始计量单位及 kWh 或 MJ | 保留原始读数并记录热值和换算因子；不得合并不同载体。 |
| `water_balance` | 水和废水 | Mass 或 Volume | kg 或 m3 | 在一致期间基准上核对供水、保留水、蒸发、产品带出及每种废水。 |

## 5. 系统边界

前景边界始于屠宰场门接收活绵羊，止于合格鲜或冷藏绵羊肉从工厂门冷藏环节放行。畜牧养殖和入厂活畜运输属于上游。直接运营和分包的屠宰、冷却、分割、包装、清洗消毒及废水作业只要对声明产品有贡献即应纳入。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | 前景系统 | 从验收活绵羊开始，到工厂门冷藏放行的净重合格鲜或冷藏绵羊肉结束。 | `un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916` |
| `boundary_exclusions` | 更广生命周期 | 养殖、饲料、入厂运输、分销、零售、烹饪、使用和寿命终止不纳入本前景数据包；需要时单独关联。 | `un-cpc-3-2025`; `eu-pef-2021` |
| `boundary_product_state` | 参考产品 | 拒绝以冷冻肉或内脏为参考产品，并披露温度状态、分割形式和带骨状态。 | `un-cpc-3-2025` |
| `boundary_site_coverage` | 制造场址 | 纳入负责屠宰、冷却、分割、包装、清洗消毒或废水处理的所有运营及分包前景场址。 | `eu-pef-2021` |
| `boundary_complete_lci` | 清单 | 分别记录相关材料、能源、产品、共产品、废物及空气和水交换，并透明披露排除项。 | `eu-pef-2021`; `ec-jrc-sa-bref-jrc135916` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 完成身份和宰前控制后验收的活绵羊，记录供应商、来源、活重、批次和运输交接。 |
| starting_condition_role | 活绵羊是外购生物产品输入；养殖和入厂运输使用单独上游数据集表示。 |
| product_classification_scope | CPC 3.0 代码 21115 下鲜或冷藏绵羊肉；排除冷冻肉和内脏参考产品。 |
| recursive_input_rule | 外购的本类别鲜或冷藏绵羊肉作为一个带独立数据集的上游产品输入记录，不在当前前景数据包内递归拆解。 |
| upstream_dataset_requirement | 对活绵羊、养殖、入厂运输、水、电力、燃料、蒸汽、热水、制冷剂、化学品和包装关联可追溯上游数据集；披露所有代理和地理不匹配。 |
| disclosure | 声明物种证据、活重基准、屠宰和分割配置、产品形式、带骨状态、冷却路线、温度、保存时间、场址和分包方、共产品去向、分配、清洗消毒、废水处理、地理位置、期间和数据缺口。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `animal_receiving_lairage` | 活绵羊接收与待宰 | `required` | 从屠宰场验收到转入屠宰始终纳入 | 前景生产 | kg 验收活绵羊及 kg 转出的待宰绵羊 |
| `slaughter_dressing` | 屠宰与胴体整理 | `required` | 屠宰场生产始终纳入 | 前景生产 | kg 热绵羊胴体 |
| `carcass_chilling` | 胴体冷却 | `required` | 为建立鲜或冷藏状态始终纳入 | 前景调理 | kg 冷却绵羊胴体 |
| `cutting_packaging` | 分割与包装 | `conditional` | 胴体在放行前经过分割、去骨、份装或包装时纳入 | 前景生产 | kg 包装鲜或冷藏绵羊肉 |
| `chilled_storage` | 工厂门冷藏 | `required` | 纳入至产品从前景门放行的储存 | 前景调理 | kg 放行的合格鲜或冷藏绵羊肉 |
| `sanitation_wastewater` | 清洗消毒与废水处理 | `required` | 纳入现场清洗消毒和实际现场处理或转移废水路线 | 前景辅助 | 接收并处理或转移的 m3 分阶段废水 |

### 过程：活绵羊接收与待宰（`animal_receiving_lairage`）

#### 输入

##### 产品流

###### 验收活绵羊（`live_sheep_input`）

活绵羊验收后跨越前景门，并关联供应商和上游养殖记录。

- 选定流：Live sheep for slaughter
- 流属性/单位：Mass / kg live mass
- 数量规则：生产批次经校准的验收活重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving_lairage`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 待宰工艺水（`process_water_lairage`）

动物饮水和待宰区清洗供水仅在本阶段计量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：计量或分配的待宰用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转出待宰绵羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving_lairage`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 接收与待宰电力（`electricity_receiving`）

卸载设备、通风、照明和阶段泵用电单独记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或从总表有记录地分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转出待宰绵羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving_lairage`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### 接收设备柴油（`diesel_receiving`）

柴油仅在直接运营柴油设备或现场发电机时适用；只有文件证明不存在时才记为不适用。

- 选定流：柴油燃料
- 流属性/单位：Mass or volume / kg or L
- 数量规则：适用时本阶段计量或库存核对的柴油消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转出待宰绵羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving_lairage`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入屠宰的待宰绵羊（`rested_sheep_output`）

从待宰区放行的绵羊保留接收批次身份，并通过计数和活重称量或核对。

- 选定流：Rested live sheep for slaughter
- 流属性/单位：Mass / kg live mass
- 数量规则：转入屠宰的实测或核对活重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving_lairage`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 废物流

###### 待宰绵羊粪便（`lairage_manure`）

收集的绵羊粪便与冲洗水分开称重，并关联实际回收或处理去向。

- 选定流：Sheep manure from lairage
- 流属性/单位：Mass / kg
- 数量规则：送往声明去向的收集粪便实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转出待宰绵羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving_lairage`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 待宰区冲洗水（`lairage_wastewater`）

离开待宰区的冲洗水单独计量并转入声明废水路线。

- 选定流：Sheep-lairage wash water
- 流属性/单位：Volume / m3
- 数量规则：待宰区计量排水量或水量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转出待宰绵羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving_lairage`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 死亡绵羊尸体废物（`dead_sheep_carcass_waste`）

屠宰前拒收或死亡的动物作为独立废物流称重并关联合法去向。

- 选定流：Dead sheep carcass waste
- 流属性/单位：Mass / kg
- 数量规则：适用时送往有记录处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_receiving_lairage`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 基本流

###### 接收柴油的化石二氧化碳（`carbon_dioxide_diesel_air`）

仅对前景设备燃烧的柴油计算直接化石二氧化碳。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据核对柴油用量及有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转出待宰绵羊
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_animal_receiving_lairage`
- 来源：`eu-pef-2021`

### 过程：屠宰与胴体整理（`slaughter_dressing`）

#### 输入

##### 产品流

###### 待宰绵羊输入（`rested_sheep_input`）

待宰绵羊以接收阶段相同的批次身份进入屠宰。

- 选定流：Rested live sheep for slaughter
- 流属性/单位：Mass / kg live mass
- 数量规则：从待宰区接收的实测或核对质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 屠宰工艺水（`process_water_slaughter`）

屠宰和胴体整理用水与待宰及清洗消毒用水分开计量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：计量或分配的屠宰工艺用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 屠宰电力（`electricity_slaughter`）

致昏、提升、整理设备、抽风和泵用电仅在屠宰阶段记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或从总表有记录地分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### 外购屠宰蒸汽（`purchased_steam_slaughter`）

外购蒸汽仅在实际供热系统适用时记录，并与热水和燃料分离。

- 选定流：外购蒸汽
- 流属性/单位：Mass or energy / kg or MJ
- 数量规则：适用时屠宰使用的计量外购蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 屠宰供热天然气（`natural_gas_slaughter`）

天然气仅在现场直接燃烧供热时适用，并与 LPG 分开核对。

- 选定流：天然气
- 流属性/单位：Energy or volume / MJ or m3
- 数量规则：适用时计量的屠宰天然气及声明热值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 屠宰供热 LPG（`lpg_slaughter`）

LPG 仅在直接燃烧供热时适用，并与天然气和蒸汽分开记录。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：适用时经库存核对的屠宰供热 LPG 消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热绵羊胴体（`dressed_sheep_carcass`）

整理后的胴体在冷却前声明的热胴体称重点称重。

- 选定流：Hot dressed sheep carcass
- 流属性/单位：Mass / kg
- 数量规则：批次经校准的热胴体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 收集的绵羊血（`sheep_blood`）

作为可销售或可用产出的血液单独称重并记录去向。

- 选定流：Sheep blood
- 流属性/单位：Mass / kg
- 数量规则：送往声明产品去向的血液实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 鲜绵羊肝（`fresh_sheep_liver`）

批准食用的肝脏作为独立共产品称重，不计入 CPC 21115 参考质量。

- 选定流：Fresh sheep liver
- 流属性/单位：Mass / kg
- 数量规则：送往声明去向的批准食用肝脏实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### 鲜绵羊肾（`fresh_sheep_kidney`）

批准食用的肾脏与肝脏和心脏分开称重。

- 选定流：Fresh sheep kidney
- 流属性/单位：Mass / kg
- 数量规则：送往声明去向的批准食用肾脏实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### 鲜绵羊心（`fresh_sheep_heart`）

批准食用的心脏与其他解剖产出分开称重。

- 选定流：Fresh sheep heart
- 流属性/单位：Mass / kg
- 数量规则：送往声明去向的批准食用心脏实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### 生绵羊皮（`raw_sheepskin`）

剥离的绵羊皮在防腐或转移前称重并保留实际去向。

- 选定流：Raw sheepskin
- 流属性/单位：Mass / kg
- 数量规则：从整理过程转出的生绵羊皮实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 整理绵羊脂肪组织（`sheep_fat_slaughter`）

整理时移除的脂肪与肉、血、皮和判废组织分开称重。

- 选定流：Sheep adipose tissue from dressing
- 流属性/单位：Mass / kg
- 数量规则：送往声明产品去向的脂肪实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 废物流

###### 绵羊瘤胃内容物（`sheep_rumen_content`）

瘤胃内容物作为单一有机废物流称重或质量平衡，并记录处理路线。

- 选定流：Sheep rumen content
- 流属性/单位：Mass / kg
- 数量规则：送往声明路线的瘤胃内容物实测或平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 判废绵羊肺（`condemned_sheep_lung`）

判废肺脏单独称重并关联受控处理路线。

- 选定流：Condemned sheep lung
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的判废肺脏实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每屠宰批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 绵羊屠宰废水（`slaughter_wastewater`）

屠宰和胴体整理废水与待宰及分割废水分开计量。

- 选定流：Sheep-slaughter process wastewater
- 流属性/单位：Volume / m3
- 数量规则：屠宰阶段计量排水量或水量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 基本流

###### 天然气化石二氧化碳（`carbon_dioxide_natural_gas_air`）

屠宰天然气燃烧的直接化石二氧化碳单独计算。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据核对天然气用量及有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`eu-pef-2021`

###### LPG 化石二氧化碳（`carbon_dioxide_lpg_air`）

屠宰 LPG 燃烧的直接化石二氧化碳与天然气分开计算。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据核对 LPG 用量及有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing`
- 来源：`eu-pef-2021`

### 过程：胴体冷却（`carcass_chilling`）

#### 输入

##### 产品流

###### 热胴体输入（`dressed_carcass_input`）

热胴体进入冷却时保留批次、质量和时间记录。

- 选定流：Hot dressed sheep carcass
- 流属性/单位：Mass / kg
- 数量规则：从整理接收的热胴体实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每冷却批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_chilling`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 胴体冷却电力（`electricity_chilling`）

制冷、风机、控制和冷却室运行用电仅在本阶段记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或有记录的制冷负荷分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_chilling`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### 胴体冷却 R-717 制冷剂（`ammonia_r717_chilling`）

氨制冷剂仅适用于 R-717 系统，并依据充注、采购、回收和维修记录核对。

- 选定流：氨制冷剂（R-717）
- 流属性/单位：Mass / kg
- 数量规则：适用时胴体冷却系统的 R-717 净补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carcass_chilling`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷却绵羊胴体（`chilled_sheep_carcass`）

胴体在声明冷却期后称重并关联温度记录。

- 选定流：Chilled sheep carcass
- 流属性/单位：Mass / kg
- 数量规则：从冷却放行的经校准冷胴体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每冷却批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_chilling`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 废物流

###### 胴体冷却冷凝水（`chilling_condensate`）

胴体冷却区收集的冷凝水与其他废水分开计量。

- 选定流：Carcass-chilling condensate
- 流属性/单位：Volume / m3
- 数量规则：转入声明路线的计量或收集冷凝水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_chilling`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 基本流

###### 胴体冷却 R-717 损失（`ammonia_r717_chilling_air`）

氨制冷剂直接损失依据胴体冷却制冷剂平衡计算。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：分配给胴体冷却的未回收 R-717 损失计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carcass_chilling`
- 来源：`ec-jrc-sa-bref-jrc135916`

### 过程：分割与包装（`cutting_packaging`）

#### 输入

##### 产品流

###### 冷胴体输入（`chilled_carcass_input`）

进入分割的冷胴体保留冷却批次身份和实测质量。

- 选定流：Chilled sheep carcass
- 流属性/单位：Mass / kg
- 数量规则：分割接收的冷胴体实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每分割批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 分割工艺水（`process_water_cutting`）

分割区直接用水与清洗消毒用水分开计量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：计量或分配的分割阶段用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 分割与包装电力（`electricity_cutting`）

分割、去骨、输送、真空设备和包装用电在本阶段记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或有记录的设备分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### 瓦楞肉品纸箱（`corrugated_carton`）

声明产品使用的瓦楞纸板与塑料膜分开记录。

- 选定流：Corrugated paperboard meat carton
- 流属性/单位：Mass / kg
- 数量规则：纸箱实测领用质量减有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### LDPE 肉品包装膜（`ldpe_packaging_film`）

低密度聚乙烯膜作为一种具体包装材料记录，不与纸板合并。

- 选定流：Low-density polyethylene meat-packaging film
- 流属性/单位：Mass / kg
- 数量规则：薄膜实测领用质量减有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装绵羊肉中间品（`packaged_sheep_meat`）

合格包装肉在工厂门冷藏前称重，净肉质量不含包装。

- 选定流：Packaged fresh or chilled sheep meat
- 流属性/单位：Mass / kg net meat
- 数量规则：转入冷藏的合格净肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每分割批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### 可食用绵羊肉修整料（`edible_sheep_meat_trimming`）

转入另一产品的可食用修整料与声明参考分割肉分开称重。

- 选定流：Edible sheep-meat trimming
- 流属性/单位：Mass / kg
- 数量规则：送往声明产品去向的可食用修整料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每分割批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 分割绵羊骨（`sheep_bone`）

分割移除的骨作为独立产出称重并关联实际去向。

- 选定流：Sheep bone from cutting
- 流属性/单位：Mass / kg
- 数量规则：送往声明产品去向的骨实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每分割批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 分割绵羊脂肪组织（`sheep_fat_cutting`）

分割移除的脂肪与可食用修整料和骨分开称重。

- 选定流：Sheep adipose tissue from cutting
- 流属性/单位：Mass / kg
- 数量规则：送往声明产品去向的脂肪实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每分割批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 废物流

###### 绵羊肉分割废水（`cutting_wastewater`）

分割废水与屠宰和清洗消毒废水分开计量。

- 选定流：Sheep-meat cutting wastewater
- 流属性/单位：Volume / m3
- 数量规则：分割阶段计量排水量或水量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 不合格鲜绵羊肉（`rejected_sheep_meat`）

分割环节不合格肉与可食用修整料分开称重并关联处理路线。

- 选定流：Rejected fresh sheep meat
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的不合格肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分割批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 废瓦楞纸箱（`corrugated_carton_waste`）

包装时废弃的损坏或未用瓦楞纸箱与塑料废物分开称重。

- 选定流：Waste corrugated paperboard meat carton
- 流属性/单位：Mass / kg
- 数量规则：送往声明路线的废瓦楞纸箱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 废 LDPE 包装膜（`ldpe_film_waste`）

废低密度聚乙烯膜与纸板废物分开称重。

- 选定流：废低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：送往声明路线的废 LDPE 膜实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 基本流

### 过程：工厂门冷藏（`chilled_storage`）

#### 输入

##### 产品流

###### 包装绵羊肉输入（`packaged_sheep_meat_input`）

包装肉进入冷藏时关联净质量、包装、时间和温度记录。

- 选定流：Packaged fresh or chilled sheep meat
- 流属性/单位：Mass / kg net meat
- 数量规则：从分割或胴体放行接收的合格净肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每冷藏放行批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_storage`
- 来源：`un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### 冷藏电力（`electricity_cold_storage`）

冷库、风机、控制和产品搬运用电与胴体冷却分开记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：工厂门冷藏分表计量或按时间和负荷分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_storage`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### 冷藏 R-717 制冷剂（`ammonia_r717_storage`）

氨制冷剂仅适用于 R-717 冷藏系统，并与胴体冷却独立核对。

- 选定流：氨制冷剂（R-717）
- 流属性/单位：Mass / kg
- 数量规则：适用时分配给冷藏的 R-717 净补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_storage`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 鲜或冷藏绵羊肉参考输出（`fresh_chilled_sheep_meat`）

这是在声明鲜或冷藏状态下从工厂门放行的净重合格绵羊肉。

- 选定流：新鲜或冷藏的绵羊肉 `f77c69e0-fe2f-421a-9f33-23b4a09bd9ba`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净重参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重合格鲜或冷藏绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：

##### 废物流

###### 不合格冷藏绵羊肉（`rejected_chilled_sheep_meat`）

冷藏或放行时不合格的产品单独称重并关联实际处理路线。

- 选定流：Rejected chilled sheep meat
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的不合格冷藏肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilled_storage`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 基本流

###### 冷藏 R-717 损失（`ammonia_r717_storage_air`）

氨制冷剂直接损失依据冷藏系统的充注和维修记录计算。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：分配给冷藏的未回收 R-717 损失计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chilled_storage`
- 来源：`ec-jrc-sa-bref-jrc135916`

### 过程：清洗消毒与废水处理（`sanitation_wastewater`）

#### 输入

##### 产品流

###### 清洗消毒工艺水（`process_water_sanitation`）

清洗消毒用水与各生产阶段工艺水分开计量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：声明生产期的清洗消毒计量用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 废水和清洗消毒电力（`electricity_wastewater`）

清洗系统、筛分、泵送、曝气和污泥处理用电在本辅助过程记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或有记录的设备分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### 外购清洗消毒热水（`purchased_hot_water_sanitation`）

外购热水仅在外部供应时适用，并与蒸汽和直接燃烧燃料分离。

- 选定流：外购热水
- 流属性/单位：Mass or energy / kg or MJ
- 数量规则：适用时计量的外购热水及供回水温度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 氢氧化钠清洗液（`sodium_hydroxide_cleaner`）

配方氢氧化钠清洗剂按产品质量和有效浓度记录，并与消毒剂分离。

- 选定流：氢氧化钠清洗液
- 流属性/单位：Mass / kg formulated product
- 数量规则：清洗剂实测领用质量减有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 过氧乙酸消毒剂（`peracetic_acid_disinfectant`）

配方过氧乙酸消毒剂与碱性清洗剂和其他化学品分开记录。

- 选定流：过氧乙酸消毒剂
- 流属性/单位：Mass / kg formulated product
- 数量规则：消毒剂实测领用质量减有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 废物流

###### 接收待宰废水（`lairage_wastewater_input`）

待宰区冲洗水作为独立废水进入实际现场处理或转移路线。

- 选定流：Sheep-lairage wash water
- 流属性/单位：Volume / m3
- 数量规则：接收的待宰废水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 接收屠宰废水（`slaughter_wastewater_input`）

屠宰废水作为独立水流进入处理，清单中不与待宰废水合并。

- 选定流：Sheep-slaughter process wastewater
- 流属性/单位：Volume / m3
- 数量规则：接收的屠宰废水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 接收冷却冷凝水（`chilling_condensate_input`）

胴体冷却冷凝水转入废水处理时单独记录。

- 选定流：Carcass-chilling condensate
- 流属性/单位：Volume / m3
- 数量规则：适用时接收的冷却冷凝水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 接收分割废水（`cutting_wastewater_input`）

分割废水作为独立计量水流进入处理。

- 选定流：Sheep-meat cutting wastewater
- 流属性/单位：Volume / m3
- 数量规则：适用时接收的分割废水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 经处理屠宰场出水（`treated_slaughterhouse_effluent`）

转移至场外处理的出水作为一个具体废物输出计量；直接排放则用水体基本流表示。

- 选定流：Treated sheep-slaughterhouse effluent
- 流属性/单位：Volume / m3
- 数量规则：适用时送往声明场外路线的经处理出水计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 废水筛渣（`wastewater_screenings`）

废水处理筛渣与处理污泥分开称重。

- 选定流：Sheep-slaughterhouse wastewater screenings
- 流属性/单位：Mass / kg
- 数量规则：送往有记录处理路线的筛渣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 废水处理污泥（`wastewater_sludge`）

脱水污泥与筛渣分开称重，并关联含水率和去向记录。

- 选定流：Sheep-slaughterhouse wastewater-treatment sludge
- 流属性/单位：Mass / kg wet sludge
- 数量规则：污泥实测质量、干物质含量及处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

##### 基本流

###### 排入水体的化学需氧量（`chemical_oxygen_demand_water`）

COD 仅对可归属于前景系统的监测最终排口作为独立水体排放报告。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg COD
- 数量规则：根据最终出水实测体积和代表性 COD 浓度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 排入水体的总氮（`total_nitrogen_water`）

最终排口总氮与 COD 和磷分别报告。

- 选定流：Nitrogen, total, to water
- 流属性/单位：Mass / kg N
- 数量规则：根据最终出水实测体积和代表性总氮浓度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

###### 排入水体的总磷（`total_phosphorus_water`）

总磷作为独立监测水体排放报告。

- 选定流：Phosphorus, total, to water
- 流属性/单位：Mass / kg P
- 数量规则：根据最终出水实测体积和代表性总磷浓度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行合格肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用屠宰场作业 | 首先在独立计量数据可直接分配负荷时细分过程、仪表、批次和处理记录。 | `eu-pef-2021` |
| `allocation_avoid` | 多产出过程 | 通过过程细分或与研究目标和 PEF 方法一致且有论证的系统功能方法避免分配。 | `eu-pef-2021` |
| `allocation_physical` | 无法避免的共生产 | 无法避免分配时，仅在物理因果关系能表示投入和排放随产出变化时使用该关系。 | `eu-pef-2021` |
| `allocation_economic` | 无可辩护物理因果关系的产出 | 若不存在可辩护物理关系，则用产品特定价格进行经济分配，声明代表期间并披露敏感性。 | `eu-pef-2021` |
| `allocation_disposition` | 血、器官、皮、脂肪、骨、修整料和判废物料 | 决定共产品、可回收材料或废物前，按实际合法和商业去向分类每个解剖产出；除非所选方法要求，不向废物输出分配负荷。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021` |
| `allocation_consistency` | 参考产品和共产品 | 核对产出质量、分配键、适用时的收入及分配给 1 kg 参考产品的份额；披露零价值和缺失价格处理。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_receiving_lairage` | `animal_receiving_lairage` | 活绵羊、水、电力、柴油、待宰绵羊、粪便、废水、尸体废物、柴油 CO2 | 接收和批次记录、仪表、燃料日志、秤和废物记录 | batch_id; supplier; species; accepted_live_kg; rejected_live_kg; rested_live_kg; water_m3; electricity_kWh; diesel_quantity; manure_kg; wash_water_m3; dead_carcass_kg; destination | 按批次和期间关联校准地磅或计数转质量记录、阶段仪表、库存变动和废物文件 | kg; m3; kWh; L or kg | 每批次；公用工程按仪表间隔 | 经论证的代表性生产期或完整生产期，并披露缺口 | 所有纳入的接收和待宰场址 | 汇总关联记录并按待宰绵羊及最终参考输出归一化，不重复计算 | 秤和仪表校准；供应商和验收记录；燃料核对；废物转移记录 |
| `cp_slaughter_dressing` | `slaughter_dressing` | 绵羊输入、水、电力、蒸汽、燃料、胴体、解剖产出、废物、废水、燃烧 CO2 | 屠宰批次、仪表、秤、燃料、产品、检验和废物记录 | batch_id; sheep_input_kg; water_m3; electricity_kWh; steam_kg; natural_gas_quantity; gas_calorific_value; lpg_kg; carcass_kg; blood_kg; liver_kg; kidney_kg; heart_kg; skin_kg; fat_kg; rumen_content_kg; condemned_lung_kg; wastewater_m3; destinations | 将每种计量载体和解剖产出与屠宰批次及检验去向关联 | kg; m3; kWh; MJ | 每批次；公用工程按仪表间隔 | 经论证的代表性生产期或完整生产期，并披露缺口 | 所有纳入的屠宰和胴体整理场址 | 归一化前核对输入、胴体、每种共产品、废物、废水和分配键 | 秤和仪表校准；检验记录；产品发运；燃料发票；废物联单 |
| `cp_carcass_chilling` | `carcass_chilling` | 胴体输入、电力、R-717、冷胴体、冷凝水、R-717 损失 | 批次、温度、仪表、制冷剂、维修、秤和冷凝水记录 | batch_id; hot_carcass_kg; chilled_carcass_kg; inlet_temperature; release_temperature; start_time; release_time; electricity_kWh; r717_charge_kg; r717_purchase_kg; r717_recovery_kg; condensate_m3 | 将胴体质量和时间温度记录与制冷仪表及封闭制冷剂平衡关联 | kg; kWh; m3 | 每批次；制冷剂按维修事件 | 经论证的代表性生产期或完整生产期，并披露缺口 | 所有纳入的胴体冷却系统 | 仅从核对记录计算冷却损失和未回收制冷剂，并按冷胴体归一化 | 秤和温度校准；仪表检查；维修报告；制冷剂库存核对 |
| `cp_cutting_packaging` | `cutting_packaging` | 胴体、水、电力、纸箱、LDPE、包装肉、修整料、骨、脂肪、废水、不合格品、包装废物 | 分割批次、BOM、仪表、领退、秤、检验和废物记录 | batch_id; carcass_input_kg; water_m3; electricity_kWh; carton_input_kg; carton_return_kg; ldpe_input_kg; ldpe_return_kg; packaged_meat_kg; trimming_kg; bone_kg; fat_kg; wastewater_m3; rejected_meat_kg; carton_waste_kg; ldpe_waste_kg; destinations | 按批次核对分割产率、包装领退、仪表和按去向区分的产出 | kg; m3; kWh | 每批次；公用工程按仪表间隔 | 经论证的代表性生产期或完整生产期，并披露缺口 | 所有纳入的分割和包装场址 | 核对输入质量与所有产品和废物产出，再按包装净肉归一化 | 秤和仪表校准；BOM 和包装规范；检验和发运记录；废物联单 |
| `cp_chilled_storage` | `chilled_storage` | 包装肉、电力、R-717、参考输出、不合格品、R-717 损失 | 冷藏批次、温度、时间、仪表、秤、制冷剂、维修和放行记录 | batch_id; input_meat_kg; output_meat_kg; rejected_kg; entry_temperature; release_temperature; storage_hours; electricity_kWh; r717_charge_kg; r717_purchase_kg; r717_recovery_kg | 将产品净质量和时间温度历史与冷藏电力及制冷剂记录关联 | kg; kWh; h | 每放行批次；制冷剂按维修事件 | 经论证的代表性生产期或完整生产期，并披露缺口 | 所有纳入的工厂门冷库 | 汇总批次特定记录并按净重合格参考输出归一化 | 秤、温度和仪表校准；放行记录；维修报告；制冷剂核对 |
| `cp_sanitation_wastewater` | `sanitation_wastewater` | 水、电力、热水、清洗剂、消毒剂、阶段废水、出水、筛渣、污泥、水体排放 | 清洗日志、化学品领退、仪表、实验室、处理、污泥和转移记录 | period_id; water_m3; electricity_kWh; hot_water_quantity; supply_temperature; return_temperature; sodium_hydroxide_product_kg; sodium_hydroxide_concentration; peracetic_product_kg; peracetic_concentration; lairage_wastewater_m3; slaughter_wastewater_m3; condensate_m3; cutting_wastewater_m3; offsite_effluent_m3; screenings_kg; sludge_kg; sludge_dry_matter; discharge_m3; cod_concentration; total_n_concentration; total_p_concentration | 核对化学品用量和阶段水流；将受控或认可采样与最终排水量配对 | kg; m3; kWh; MJ | 每清洗周期或仪表间隔；排放按采样计划 | 经论证的代表性生产期或完整生产期，并披露缺口 | 所有纳入的清洗消毒和废水系统 | 保留阶段废水身份；分别从排水量和浓度计算每种直接水体排放 | 仪表校准；化学品库存；采样计划；实验室 QA；处理日志；废物和场外转移记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景交换 | 将同一期间分配给参考产品的核对交换量除以净重合格 CPC 21115 输出。 | 已分配交换；净重参考输出 kg | 每 1 kg 参考产品的交换量 | `eu-pef-2021` |
| `calc_mass_balance` | 从活绵羊到产品和废物 | 核对活畜输入、胴体和肉产出、解剖共产品、废物、库存变化、水分变化和记录缺口，不强迫不同称重点相等。 | 校准质量；库存变化；水分状态记录 | 披露的批次和期间质量核对 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021` |
| `calc_energy` | 蒸汽、热水、天然气、柴油和 LPG | 保留采购数量，仅使用适用于已记录载体的压力、温度、密度和热值计算能量。 | 仪表或发票数量；载体属性 | 载体特定能耗 | `eu-pef-2021` |
| `calc_refrigerant_loss` | R-717 系统 | 根据期初库存、采购、补充、回收、转移和期末库存计算未回收损失；按系统记录或负荷分配。 | 制冷剂库存和维修字段 | kg R-717 空气排放及补充输入 | `ec-jrc-sa-bref-jrc135916` |
| `calc_water_emission` | 最终废水直接排放 | 对每种污染物，将代表性最终出水浓度乘匹配排水量并换算单位，不汇总不同物质。 | 排水量；COD、总氮或总磷浓度 | 指定水体排放的 kg 数量 | `ec-jrc-sa-bref-jrc135916` |
| `calc_allocation` | 多产出过程 | 对核对共享负荷应用声明分配层级和分配键；保留分配前总量、产出数量、适用时价格和分配份额。 | 共享清单；产出质量；因果参数或价格 | 分配给参考产品的清单 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 证明绵羊物种、CPC 21115 鲜或冷藏状态、分割形式、带骨状态和净质量，并排除冷冻肉和内脏参考产品。 | 产品规范；追溯和温度记录；放行标签 |
| `dq_primary_data` | 前景制造 | 对每个纳入的运营和分包前景过程使用企业特定记录，并披露缺失的一手数据。 | 场址和分包记录；仪表和批次覆盖矩阵 |
| `dq_temporal` | 声明生产期间 | 使用经论证的代表性期间或完整生产期，并披露季节性、停产、异常运行和数据缺口。 | 生产日历；期间完整性报告；缺口日志 |
| `dq_measurement` | 质量、公用工程、温度、化学品和排放数据 | 保留适合每种测量量的校准、采样、实验室、换算和核对证据。 | 校准证书；采样计划；实验室 QA；签署核对记录 |
| `dq_completeness` | 完整 LCI | 计入相关原材料、公用工程、产品、每种共产品、废物、制冷剂和直接空气及水体排放；声明所有排除项和未解析 UUID。 | 完整性矩阵；质量、水、能源、化学品和制冷剂平衡 |
| `dq_transparency` | 数据包 | 披露上游数据集、分配、代理、废水路线、共产品去向、不确定性及对本 PCR 的偏离。 | 数据集元数据；计算工作簿；偏离和不确定性日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 UUID `f77c69e0-fe2f-421a-9f33-23b4a09bd9ba`、Product 流类型、精确 CPC 21115 身份、Mass 属性和 kg 单位。 | `un-cpc-3-2025` |
| `validate_reference_amount` | 参考流 | 要求恰好 1 kg 净重合格鲜或冷藏绵羊肉；包装、内脏、不合格物料和游离液体不计入参考质量。 | `un-cpc-3-2025`; `eu-pef-2021` |
| `validate_product_state` | 产品元数据 | 若参考输出是冷冻肉、内脏、其他物种，或未声明分割、带骨、温度和工厂门状态，则拒绝数据集。 | `un-cpc-3-2025` |
| `validate_process_coverage` | 前景边界 | 要求接收、屠宰、冷却、冷藏放行、清洗消毒、废水路线及所有适用的分割、包装、燃料或制冷剂作业。 | `ec-jrc-sa-bref-jrc135916` |
| `validate_atomic_inventory` | 清单 | 拒绝合并载体、化学品、包装、解剖产出、废物、废水、制冷剂或排放；任何新增解剖产出必须作为独立交换增加。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021` |
| `validate_balances` | 前景记录 | 要求核对质量、水、能源、化学品和制冷剂平衡，并明确库存变化和缺口。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021` |
| `validate_allocation` | 多产出清单 | 要求分配层级、产出去向、分配键、期间、分配前总量、分配份额，以及使用价格时的经济敏感性。 | `eu-pef-2021` |
| `validate_completeness` | 数据包 | 要求企业特定制造数据及完整相关 LCI，并透明披露排除项、代理、质量证据和未解析身份。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 21115 鲜或冷藏绵羊肉产品特定前景生产数据集 |
| downstream_use | 当物种、产品形式、带骨状态、温度状态、技术、地理、分配和期间兼容时，可作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 声明鲜或冷藏绵羊肉的工厂门建模，并使用单独上下游数据集聚合至更广生命周期模型 |
| excluded_use | 冷冻肉；以内脏为参考产品；山羊或其他物种肉；未单独建模的养殖、运输、零售、烹饪、使用或寿命终止；未经调整的实质不同屠宰或产品路线 |
| required_metadata | PCR id 和版本；物种；产品形式；带骨状态；温度；净质量；场址和分包方；活重基准；过程路线；保存时间；包装；地理；期间；共产品去向；分配；废水路线；上游数据集 |
| required_quality_disclosure | 一手数据覆盖；校准和采样；质量、水、能源、化学品和制冷剂平衡；分配敏感性；代理；未解析 UUID；排除项；不确定性；异常运行；审查状态 |
| update_trigger | 物种或来源、产品形式、带骨状态、温度状态、场址、分包方、屠宰或分割路线、制冷、燃料、清洗消毒、包装、废水处理、共产品去向、分配、上游数据集或生产期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | 联合国统计司，CPC Ver. 3.0 官方资源及解释性说明，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/CPC；仓库留存原始结构 `CPC_Ver_3.0_Structure_30Jun2025.csv` | CPC 21115 鲜或冷藏绵羊肉精确范围，以及冷冻肉和内脏参考产品排除 |
| `ec-jrc-sa-bref-jrc135916` | `official_guidance` | 欧盟委员会联合研究中心，《屠宰场、动物副产品和/或食用共产品行业最佳可行技术参考文件》，JRC135916，DOI 10.2760/18199，https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 从动物接收到屠宰、整理、冷却、分割、清洗消毒和废水处理的过程结构；公用工程；制冷剂；具体共产品、废物和排放；未采用默认数量 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，合并版产品环境足迹方法，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定和企业特定数据、完整 LCI、分配层级、透明度、数据质量、计算和校验规则 |
