---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-pelagic-fish-excluding-tunas-skipjack-or-stripe-bellied-bonito-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他冷冻远洋鱼类（金枪鱼、鲣鱼或条纹腹鲣鱼除外）

## 1. 范围与适用性

本 PCR 适用于符合条件的远洋有鳍鱼类以前景方式完成预处理、冷冻、整理、包装和冷冻贮藏，并以整鱼、原条、去头、去内脏、修整或其他非鱼片形态冷冻销售。产品可以单体冷冻或块冻，也可以上冰衣，但必须声明产品形态和冰衣状态。

本类别包括 CPC 3.0 子类 21216 所述的远洋鱼类群体，包括鲱鱼、沙丁鱼、沙丁鱼属鱼类、黍鲱或西鲱、鲭鱼、竹荚鱼和马鲹、军曹鱼、剑鱼，以及未归入被排除的金枪鱼/鲣鱼/条纹腹鲣鱼子类的其他远洋鱼类。物种身份、可得时的学名、捕捞区域、生产系统和产品形态仍是批次层面的必需限定信息。

排除金枪鱼、鲣鱼、条纹腹鲣鱼、冷冻鱼片、冷冻鱼肉（无论是否绞碎）、冷冻鱼肝和鱼卵、裹衣鱼制品、鱼罐头、熏鱼、干制或盐制鱼，以及参考产出包含烹调或冷冻之外其他保藏路线的产品。CXS 190-1995 只作为可比的质量和冷链参考；其鱼片适用范围不使鱼片进入本 PCR。

默认前景边界始于上岸或供应的合格鱼类在冷冻/加工设施接收，止于经过声明冷冻贮藏期后在设施发运门处的 1 kg 冷冻鱼净质量。捕捞或水产养殖、上岸、入厂运输、下游配送、零售、烹调、消费和生命末期均位于前景边界之外；研究纳入这些阶段时，应使用单独的上游或下游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-pelagic-fish-excluding-tunas-skipjack-or-stripe-bellied-bonito-frozen |
| classification_refs | CPC 3.0: 21216，精确范围参照 |
| covered_products | 整鱼、原条、去头、去内脏、修整或其他非鱼片形态的合格冷冻远洋有鳍鱼类；有冰衣或无冰衣；单体冷冻或块冻 |
| excluded_products | 金枪鱼、鲣鱼、条纹腹鲣鱼；鱼片；绞碎或其他鱼肉；鱼肝和鱼卵；裹衣、罐藏、熏制、干制、盐制、熟制或其他方式保藏的鱼 |
| representative_product | 在冷冻/加工设施发运的、按净质量计的合格冷冻远洋鱼类 |
| production_route | 接收和批次核验；视情况分选和预处理；冷冻；可选上冰衣；包装；冷冻贮藏；发运 |
| market_state | 供人类食用的冷冻食品，声明物种、产品形态、冰衣状态、贮藏制度和净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在冷冻/加工设施发运门提供供人类食用的合格冷冻远洋鱼类 |
| How much | 1 kg 鱼净质量，不含冰衣水和包装 |
| How well | 食品级、批次可追溯并符合所声明产品形态、物种、冷冻、贮藏和适用食品安全规范的产品 |
| How long or cycle | 一个完整生产批次经过声明冷冻贮藏期直至发运 |
| reference_flow_link | `rf_other_pelagic_fish_frozen_net_mass` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 冷冻鱼净质量 |
| 参考产品流 | 其他冷冻远洋鱼类（金枪鱼、鲣鱼或条纹腹鲣鱼除外） `c8aa403f-97b6-44b2-afa8-862d825fec2f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种常用名；可得时的学名；捕捞区域；野生捕捞或水产养殖来源；供应商或渔船及批次标识；产品形态；整鱼/原条/去头/去内脏/修整状态；单体冷冻或块冻；冷冻方式；冰衣状态和冰衣比例；包装配置；鱼净质量；接收温度；热中心冷冻终点；冷冻贮藏温度和时长；设施地理位置；生产期间 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 准确报告 1 kg 鱼净质量。参考数量不含冰衣水和包装，并分别披露两者的实测质量。 |
| `lot_mass_balance` | 接收鱼、产品、残余物、冰衣和废水 | Mass | kg | 采用经校准的批次质量记录，并保持一致的湿质量基准；核对投入、产品、留存中间品、残余物和实测液体排放。 |
| `energy_units` | 电力和燃料 | Energy | kWh 或 MJ | 保留计量单位和换算因子；没有明确换算记录时，不得混合电力 kWh 与按低位热值计的燃料能量。 |
| `temperature_records` | 接收、冷冻和冷冻贮藏 | Temperature | °C | 保留经校准的时间—温度记录。采用速冻路线时，核验热稳定后热中心温度达到 -18 °C 或更低，并持续保持深度冷冻。 |
| `storage_duration` | 冷冻贮藏 | Time | day | 报告按批次质量加权的实际贮藏时长，并用产品质量—天将贮藏能耗归一化到参考产品。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格的上岸或供应远洋鱼类在冷冻/加工设施接收，并声明物种、来源、产品形态、供应商/渔船批次、入厂质量和接收温度 |
| starting_condition_role | 前景冷冻鱼预处理和保藏的上游产品投入 |
| product_classification_scope | CPC 3.0 子类 21216 所代表语义范围内的冷冻非鱼片远洋鱼类；分类仅为外部范围参照，不构成 PCR 身份 |
| recursive_input_rule | 如果接收鱼已经冷冻且属于同一产品类别，将其记录为带有单独上游数据集引用的上游产品投入；本前景数据包不得递归重建其先前冷冻清单 |
| upstream_dataset_requirement | 为接收鱼和其他材料或能源投入提供或引用在物种、来源、捕捞/生产系统和产品形态方面具代表性的上游数据集 |
| disclosure | 声明前景门、上游截断、纳入的预处理步骤、冷冻技术、上冰衣、包装、贮藏时长、共享公用工程分配、共产品处理、排除项和数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 前景过程系统 | 纳入接收/核验、适用的预处理、冷冻、可选上冰衣、包装、冷冻贮藏、现场公用工程、废物、废水和直接制冷剂损失，直至设施发运。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_upstream_inputs` | 接收鱼和采购投入 | 将接收鱼、冰、水、能源载体、制冷剂和包装连接到具代表性的上游数据集；不得将缺失的上游负荷视为零。 | `eu-pef-2021-2279` |
| `sb_cold_chain` | 冷冻和冷冻贮藏 | 纳入受时间—温度控制的冷冻和贮藏作业，并保留足以证明所声明冷冻状态和食品安全控制的记录。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `sb_exclusions` | 研究边界 | 本前景数据包排除捕捞/水产养殖、入厂运输、下游配送、零售、烹调、消费和生命末期；明确纳入时必须使用单独数据集并披露。 | `unsd-cpc-3-2025`; `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | 接收、分选与预处理 | required | 始终纳入；单项预处理作业仅在报告设施实际执行时适用 | 前景材料接收和调理 | 每 1 kg 发运冷冻鱼净质量 |
| `freezing` | 冷冻 | required | 报告设施实施冷冻时始终纳入；对已冷冻的递归投入，仅记录实际发生的再次冷冻或温度恢复 | 前景保藏 | 每 1 kg 发运冷冻鱼净质量 |
| `finishing_packaging` | 上冰衣、整理与包装 | required | 包装始终纳入；上冰衣、清洗、分级和重新包装在实际执行时纳入 | 前景整理 | 每 1 kg 发运冷冻鱼净质量 |
| `frozen_storage` | 冷冻贮藏与发运 | required | 始终纳入；有证据支持直接发运时报告零天贮藏 | 前景冷库贮藏 | 每 1 kg 冷冻鱼净质量及声明贮藏时长 |

### 过程：接收、分选与预处理（`receipt_preparation`）

#### 输入

##### 产品流

###### 接收的野生远洋鱼类（`received_wild_fish`）

记录本 PCR 范围内野生捕捞远洋鱼类跨越设施门的湿质量，并连接到捕捞区域、物种、产品形态和温度状态匹配的上游数据集。

- 选定流：其他野生中上层鱼类，活的，新鲜的或冷藏的 `5e2db07e-9bba-476e-8c58-ff347637a51d`
- 流属性/单位：Mass / kg
- 数量规则：实测野生捕捞批次投入质量，归一化为每 1 kg 发运冷冻鱼净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_traceability`
- 来源：`unsd-cpc-3-2025`; `codex-cxc-52-2003`

###### 接收的养殖远洋鱼类（`received_farmed_fish`）

记录本 PCR 范围内养殖远洋鱼类跨越设施门的湿质量，并连接到生产系统、物种、产品形态和温度状态匹配的上游数据集。

- 选定流：其他养殖的中上层鱼类，活的，新鲜的或冷藏的 `f752adf8-9415-415a-98f8-df1dd78d7a11`
- 流属性/单位：Mass / kg
- 数量规则：实测养殖鱼批次投入质量，归一化为每 1 kg 发运冷冻鱼净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_traceability`
- 来源：`unsd-cpc-3-2025`; `codex-cxc-52-2003`

###### 预处理用水（`preparation_water`）

记录用于清洗、产品清洁或预处理的自来水；与产品接触的水必须满足适用的饮用水要求。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：分配到批次的实测用水量，扣除单独计量的再循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定预处理用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg net frozen fish
  - 基准：分配到每 1 kg 发运冷冻鱼净质量的设施预处理用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 操作和温度控制用冰（`handling_ice`）

记录批次操作和温度控制所消耗的冰；只有回收融水经过计量并在同一系统复用时才予以扣除。

- 选定流：冰 `24f9f87d-3f3e-49cb-9413-c7471f5d290b`
- 流属性/单位：Mass / kg
- 数量规则：实测领用冰量减去返回同一系统的实测回收冰量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定操作用冰 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg net frozen fish
  - 基准：每 1 kg 发运冷冻鱼净质量的耗冰量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理低压电网电力（`preparation_electricity_low_voltage`）

仅记录输送至本过程设备的交流低压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，低压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：过程电表或设施电表读数的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 预处理中压电网电力（`preparation_electricity_medium_voltage`）

仅记录输送至本过程设备的交流中压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，中压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：过程电表或设施电表读数的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 预处理高压电网电力（`preparation_electricity_high_voltage`）

仅记录输送至本过程设备的交流高压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，高压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：过程电表或设施电表读数的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

##### 废物流



##### 基本流



#### 输出

##### 产品流

###### 预处理远洋鱼中间品（`prepared_fish`）

记录实际预处理作业后转入冷冻的非金枪鱼远洋鱼中间品质量。

- 选定流：Prepared non-tuna pelagic-fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或按批次质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_traceability`

##### 废物流

###### 剔除的远洋鱼类（`rejected_fish`）

将从合格批次中剔除的整鱼作为独立废物交换记录。

- 选定流：Rejected non-tuna pelagic fish
- 流属性/单位：Mass / kg
- 数量规则：按去向实测剔除鱼质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_traceability`

###### 去除的鱼头（`fish_heads`）

将预处理时去除的鱼头作为独立废物交换记录。

- 选定流：Pelagic-fish heads
- 流属性/单位：Mass / kg
- 数量规则：按去向实测去除鱼头质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_traceability`

###### 去除的鱼内脏（`fish_viscera`）

将预处理时去除的鱼内脏作为独立废物交换记录。

- 选定流：Pelagic-fish viscera
- 流属性/单位：Mass / kg
- 数量规则：按去向实测去除内脏质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_traceability`

###### 鱼类修整料和切除料（`fish_trimmings`）

将预处理产生的鱼类修整料和切除料作为独立废物交换记录。

- 选定流：Pelagic-fish trimmings and offcuts
- 流属性/单位：Mass / kg
- 数量规则：按去向实测修整料和切除料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_traceability`

###### 预处理废水（`preparation_wastewater`）

记录离开预处理的废水，包括与产品接触的水和融冰水，并扣除实测复用和产品中留存的水。

- 选定流：Wastewater from pelagic-fish preparation
- 流属性/单位：Mass / kg
- 数量规则：实测排放或分配到批次的水量平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_ice_records`
- 数量范围：暂定预处理废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg net frozen fish
  - 基准：每 1 kg 发运冷冻鱼净质量排放的预处理废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流



### 过程：冷冻（`freezing`）

#### 输入

##### 产品流

###### 进入冷冻机的预处理鱼（`fish_to_freezer`）

记录装入冷冻机的预处理非金枪鱼远洋鱼中间品实测质量、产品形态和进入温度。

- 选定流：Prepared non-tuna pelagic-fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测冷冻机装载质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`codex-cxc-52-2003`

###### 冷冻低压电网电力（`freezing_electricity_low_voltage`）

仅记录输送至本过程设备的交流低压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，低压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：冷冻系统电表或共享制冷电力的书面物理分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 冷冻中压电网电力（`freezing_electricity_medium_voltage`）

仅记录输送至本过程设备的交流中压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，中压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：冷冻系统电表或共享制冷电力的书面物理分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 冷冻高压电网电力（`freezing_electricity_high_voltage`）

仅记录输送至本过程设备的交流高压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，高压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：冷冻系统电表或共享制冷电力的书面物理分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 冷冻制冷剂 R134a 补充量（`freezing_refrigerant_r134a_makeup`）

仅当服务于本过程的制冷设备使用 R134a 时适用本行；其补充量必须与其他制冷剂分别记录。

- 选定流：制冷剂，R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- 流属性/单位：Mass / kg
- 数量规则：分配的实测制冷剂补充量，并与期初充注、期末充注、回收和转移记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻制冷剂 R404A 补充量（`freezing_refrigerant_r404a_makeup`）

仅当服务于本过程的制冷设备使用 R404A 时适用本行；其补充量必须与其他制冷剂分别记录。

- 选定流：制冷剂R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位：Mass / kg
- 数量规则：分配的实测制冷剂补充量，并与期初充注、期末充注、回收和转移记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻制冷剂 R717 (ammonia) 补充量（`freezing_refrigerant_r717_makeup`）

仅当服务于本过程的制冷设备使用 R717 (ammonia) 时适用本行；其补充量必须与其他制冷剂分别记录。

- 选定流：Refrigerant R717 (ammonia)
- 流属性/单位：Mass / kg
- 数量规则：分配的实测制冷剂补充量，并与期初充注、期末充注、回收和转移记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻制冷剂 R744 (carbon dioxide) 补充量（`freezing_refrigerant_r744_makeup`）

仅当服务于本过程的制冷设备使用 R744 (carbon dioxide) 时适用本行；其补充量必须与其他制冷剂分别记录。

- 选定流：Refrigerant R744 (carbon dioxide)
- 流属性/单位：Mass / kg
- 数量规则：分配的实测制冷剂补充量，并与期初充注、期末充注、回收和转移记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

##### 废物流



##### 基本流



#### 输出

##### 产品流

###### 冷冻远洋鱼中间品（`frozen_fish_intermediate`）

记录离开冷冻机的冷冻非金枪鱼远洋鱼中间品，包括质量、冷冻方式、装载时间和经核验的热中心终点。

- 选定流：Frozen non-tuna pelagic-fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：与时间—温度记录关联的实测冷冻机卸载质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`codex-cxc-52-2003`; `codex-cxs-190-1995`

##### 废物流



##### 基本流

###### 冷冻制冷剂 R134a 向空气排放（`freezing_refrigerant_r134a_air`）

仅当使用 R134a 且其计算损失排放到空气时适用本基本流行；该物质必须与其他制冷剂分别记录。

- 选定流：HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配到冷冻的制冷剂质量平衡损失，扣除有文件证明的回收和转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻制冷剂 R404A 向空气排放（`freezing_refrigerant_r404a_air`）

仅当使用 R404A 且其计算损失排放到空气时适用本基本流行；该物质必须与其他制冷剂分别记录。

- 选定流：Refrigerant R404A, to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：分配到冷冻的制冷剂质量平衡损失，扣除有文件证明的回收和转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻制冷剂 R717 (ammonia) 向空气排放（`freezing_refrigerant_r717_air`）

仅当使用 R717 (ammonia) 且其计算损失排放到空气时适用本基本流行；该物质必须与其他制冷剂分别记录。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配到冷冻的制冷剂质量平衡损失，扣除有文件证明的回收和转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻制冷剂 R744 (carbon dioxide) 向空气排放（`freezing_refrigerant_r744_air`）

仅当使用 R744 (carbon dioxide) 且其计算损失排放到空气时适用本基本流行；该物质必须与其他制冷剂分别记录。

- 选定流：Carbon dioxide (R744), to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：分配到冷冻的制冷剂质量平衡损失，扣除有文件证明的回收和转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

### 过程：上冰衣、整理与包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 进入整理的冷冻鱼（`fish_to_finishing`）

记录转入整理的冷冻非金枪鱼远洋鱼中间品，并保持产品形态和批次关联。

- 选定流：Frozen non-tuna pelagic-fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`

###### 上冰衣用水（`glazing_water`）

实施上冰衣时，记录所施用的自来水并单独确定冰衣质量，使参考数量保持为鱼净质量；与产品接触的水必须满足适用的饮用水要求。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：分配到批次的实测上冰衣水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`
- 来源：`codex-cxs-190-1995`
- 数量范围：暂定冰衣水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg net frozen fish
  - 基准：每 1 kg 发运冷冻鱼净质量施用的冰衣水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 塑料薄膜包装组件（`packaging_plastic_film`）

声明的包装配置中存在该包装组件时单独记录；可复用返回量必须另行计量。

- 选定流：塑料薄膜 `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- 流属性/单位：Mass / kg
- 数量规则：物料清单或实测组件消耗量，扣除有文件证明的可复用返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`
- 来源：`codex-cxs-190-1995`

###### 瓦楞纸板箱（`packaging_corrugated_box`）

声明的包装配置中存在该包装组件时单独记录；可复用返回量必须另行计量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：物料清单或实测组件消耗量，扣除有文件证明的可复用返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`
- 来源：`codex-cxs-190-1995`

###### 发泡聚苯乙烯鱼箱（`packaging_expanded_polystyrene_box`）

声明的包装配置中存在该包装组件时单独记录；可复用返回量必须另行计量。

- 选定流：Expanded-polystyrene fish box
- 流属性/单位：Mass / kg
- 数量规则：物料清单或实测组件消耗量，扣除有文件证明的可复用返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`
- 来源：`codex-cxs-190-1995`

###### 木托盘（`packaging_wood_pallet`）

声明的包装配置中存在该包装组件时单独记录；可复用返回量必须另行计量。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：物料清单或实测组件消耗量，扣除有文件证明的可复用返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`
- 来源：`codex-cxs-190-1995`

###### 纸质包装标签（`packaging_paper_label`）

声明的包装配置中存在该包装组件时单独记录；可复用返回量必须另行计量。

- 选定流：包装标签，纸质 `d5890643-6859-42b5-9e05-556b072c6a8c`
- 流属性/单位：Mass / kg
- 数量规则：物料清单或实测组件消耗量，扣除有文件证明的可复用返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`
- 来源：`codex-cxs-190-1995`

###### 整理和包装低压电网电力（`packaging_electricity_low_voltage`）

仅记录输送至本过程设备的交流低压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，低压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：过程电表或设施电表读数的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 整理和包装中压电网电力（`packaging_electricity_medium_voltage`）

仅记录输送至本过程设备的交流中压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，中压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：过程电表或设施电表读数的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 整理和包装高压电网电力（`packaging_electricity_high_voltage`）

仅记录输送至本过程设备的交流高压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，高压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：过程电表或设施电表读数的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

##### 废物流



##### 基本流



#### 输出

##### 产品流

###### 入库前的包装冷冻鱼（`packaged_frozen_fish`）

记录包装后的冷冻非金枪鱼远洋鱼中间品，并分别保留包装后总质量、鱼净质量、冰衣质量、包装质量和批次身份。

- 选定流：Packaged frozen non-tuna pelagic-fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：依据经核验的产品、冰衣和包装测量值计算鱼净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_glaze_records`
- 来源：`codex-cxs-190-1995`

##### 废物流

###### 塑料薄膜包装边角料（`plastic_film_packaging_scrap`）

将该被剔除的包装组件作为独立废物交换记录，并保留其实测去向记录。

- 选定流：Plastic-film packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：按去向实测并分配到批次的组件边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`

###### 瓦楞纸板箱包装边角料（`corrugated_box_packaging_scrap`）

将该被剔除的包装组件作为独立废物交换记录，并保留其实测去向记录。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass / kg
- 数量规则：按去向实测并分配到批次的组件边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`

###### 发泡聚苯乙烯鱼箱边角料（`expanded_polystyrene_box_scrap`）

将该被剔除的包装组件作为独立废物交换记录，并保留其实测去向记录。

- 选定流：Expanded-polystyrene fish-box scrap
- 流属性/单位：Mass / kg
- 数量规则：按去向实测并分配到批次的组件边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`

###### 破损木托盘废物（`wood_pallet_scrap`）

将该被剔除的包装组件作为独立废物交换记录，并保留其实测去向记录。

- 选定流：Broken wood pallet
- 流属性/单位：Mass / kg
- 数量规则：按去向实测并分配到批次的组件边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`

###### 纸标签包装边角料（`paper_label_packaging_scrap`）

将该被剔除的包装组件作为独立废物交换记录，并保留其实测去向记录。

- 选定流：Paper-label packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：按去向实测并分配到批次的组件边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_glaze_records`

###### 整理废水（`finishing_wastewater`）

记录上冰衣和整理产生的废水，包括冰衣排水和分配到整理的清洁用水，并扣除实测复用量。

- 选定流：Wastewater from glazing and fish finishing
- 流属性/单位：Mass / kg
- 数量规则：实测排放或分配到批次的水量平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_glaze_records`
- 数量范围：暂定整理废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg net frozen fish
  - 基准：每 1 kg 发运冷冻鱼净质量的整理废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流



### 过程：冷冻贮藏与发运（`frozen_storage`）

#### 输入

##### 产品流

###### 进入贮藏的包装冷冻鱼（`fish_to_storage`）

记录进入冷冻贮藏的包装冷冻非金枪鱼远洋鱼中间品批次质量和入库温度。

- 选定流：Packaged frozen non-tuna pelagic-fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：进入冷冻贮藏的实测批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`

###### 冷冻贮藏低压电网电力（`storage_electricity_low_voltage`）

仅记录输送至本过程设备的交流低压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，低压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：按实测产品质量—天或更具因果性的书面驱动因子分配计量贮藏电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼净质量及声明贮藏日
- 基准类型：贮藏时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`

###### 冷冻贮藏中压电网电力（`storage_electricity_medium_voltage`）

仅记录输送至本过程设备的交流中压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，中压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：按实测产品质量—天或更具因果性的书面驱动因子分配计量贮藏电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼净质量及声明贮藏日
- 基准类型：贮藏时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`

###### 冷冻贮藏高压电网电力（`storage_electricity_high_voltage`）

仅记录输送至本过程设备的交流高压电网供电；其他电压等级和供电场景必须使用各自独立行。

- 选定流：交流电，高压电网供电
- 流属性/单位：Energy / kWh
- 数量规则：按实测产品质量—天或更具因果性的书面驱动因子分配计量贮藏电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼净质量及声明贮藏日
- 基准类型：贮藏时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`

###### 冷冻贮藏制冷剂 R134a 补充量（`storage_refrigerant_r134a_makeup`）

仅当服务于本过程的制冷设备使用 R134a 时适用本行；其补充量必须与其他制冷剂分别记录。

- 选定流：制冷剂，R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- 流属性/单位：Mass / kg
- 数量规则：按设备充注量和运行记录计算分配到贮藏的制冷剂补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻贮藏制冷剂 R404A 补充量（`storage_refrigerant_r404a_makeup`）

仅当服务于本过程的制冷设备使用 R404A 时适用本行；其补充量必须与其他制冷剂分别记录。

- 选定流：制冷剂，R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- 流属性/单位：Mass / kg
- 数量规则：按设备充注量和运行记录计算分配到贮藏的制冷剂补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻贮藏制冷剂 R717 (ammonia) 补充量（`storage_refrigerant_r717_makeup`）

仅当服务于本过程的制冷设备使用 R717 (ammonia) 时适用本行；其补充量必须与其他制冷剂分别记录。

- 选定流：Refrigerant R717 (ammonia)
- 流属性/单位：Mass / kg
- 数量规则：按设备充注量和运行记录计算分配到贮藏的制冷剂补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻贮藏制冷剂 R744 (carbon dioxide) 补充量（`storage_refrigerant_r744_makeup`）

仅当服务于本过程的制冷设备使用 R744 (carbon dioxide) 时适用本行；其补充量必须与其他制冷剂分别记录。

- 选定流：Refrigerant R744 (carbon dioxide)
- 流属性/单位：Mass / kg
- 数量规则：按设备充注量和运行记录计算分配到贮藏的制冷剂补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

##### 废物流



##### 基本流



#### 输出

##### 产品流

###### 发运的冷冻鱼净质量（`reference_frozen_fish_output`）

这是经过声明贮藏期后的参考产品产出。鱼净质量必须与冰衣和包装分开报告。

- 选定流：其他冷冻远洋鱼类（金枪鱼、鲣鱼或条纹腹鲣鱼除外） `c8aa403f-97b6-44b2-afa8-862d825fec2f`
- 流属性/单位：Mass / kg
- 数量规则：固定参考产出 1 kg 鱼净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-2025`

##### 废物流



##### 基本流

###### 冷冻贮藏制冷剂 R134a 向空气排放（`storage_refrigerant_r134a_air`）

仅当使用 R134a 且其计算损失排放到空气时适用本基本流行；该物质必须与其他制冷剂分别记录。

- 选定流：HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配到贮藏的制冷剂质量平衡损失，扣除有文件证明的回收和转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻贮藏制冷剂 R404A 向空气排放（`storage_refrigerant_r404a_air`）

仅当使用 R404A 且其计算损失排放到空气时适用本基本流行；该物质必须与其他制冷剂分别记录。

- 选定流：Refrigerant R404A, to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：分配到贮藏的制冷剂质量平衡损失，扣除有文件证明的回收和转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻贮藏制冷剂 R717 (ammonia) 向空气排放（`storage_refrigerant_r717_air`）

仅当使用 R717 (ammonia) 且其计算损失排放到空气时适用本基本流行；该物质必须与其他制冷剂分别记录。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配到贮藏的制冷剂质量平衡损失，扣除有文件证明的回收和转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 冷冻贮藏制冷剂 R744 (carbon dioxide) 向空气排放（`storage_refrigerant_r744_air`）

仅当使用 R744 (carbon dioxide) 且其计算损失排放到空气时适用本基本流行；该物质必须与其他制冷剂分别记录。

- 选定流：Carbon dioxide (R744), to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：分配到贮藏的制冷剂质量平衡损失，扣除有文件证明的回收和转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 发运冷冻鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | 多产品设施和共享生产线 | 优先采用过程细分、批次分离和直接计量。不得将批次直接实测的投入或排放分配给无关产品。 | `eu-pef-2021-2279` |
| `alloc_physical_driver` | 共享公用工程、水、制冷、贮藏和清洁 | 使用有文件证明的因果物理驱动因子分配剩余共享流，例如计量能量、设备运行时间、质量吞吐量、清洁事件或产品质量—天；披露驱动因子和分母。 | `eu-pef-2021-2279` |
| `alloc_coproducts` | 可销售鱼类部分或其他外售共产品 | 无法细分时，采用经证明的物理因果关系；不存在可辩护的物理关系时，依据记录数量和代表性价格进行批次或年度期间经济分配，并披露敏感性。 | `eu-pef-2021-2279` |
| `alloc_waste_and_recovery` | 残余物、废水、包装边角料、回收制冷剂和再生材料 | 按实际法律与商业状态和去向分类产出。除非明确声明并一致应用下游替代方法，否则不得在本前景数据包内计入避免负荷抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_traceability` | `receipt_preparation` | 接收鱼、预处理鱼、残余物、批次身份 | 磅单和批次记录 | 物种；可得时学名；来源；供应商/渔船；批次 id；产品形态；入厂质量；预处理质量；按去向记录残余物质量；时间戳 | 经校准秤具并与批次追溯记录关联 | kg | 每个批次和材料转移 | 代表性生产期间，至少覆盖所有纳入批次 | 范围内报告设施的所有生产线 | 按批次汇总质量并归一化至经核验的发运净质量 | 校准证书；核对记录；供应商/上岸记录；处置证据 |
| `cp_water_ice_records` | `receipt_preparation` | 预处理水、冰、废水 | 水表、采购、生产和排放记录 | 水表读数；领冰量；回收冰/水；废水表或平衡字段 | 优先使用过程计量表；否则采用设施书面平衡和分配 | kg 或 m3，并进行密度换算 | 每个生产日或批次 | 与生产清单相同期间 | 所有相关预处理作业 | 净用量和排放量按因果过程驱动因子分配 | 仪表检查；饮用水证据；平衡核对 |
| `cp_energy_records` | `receipt_preparation`; `freezing`; `finishing_packaging` | 过程电力 | 电表和设备记录 | 电表起止读数；设备；运行小时；分配驱动因子；换算因子 | 优先专用电表；否则采用书面物理分配 | kWh | 每批次、班次或日 | 与生产清单相同期间 | 所有范围内设备 | 按过程汇总并用书面因果驱动因子分配到批次 | 电表校准或账单核对；分配工作表 |
| `cp_freezing_records` | `freezing` | 冷冻机装载、温度、时间和产出 | 冷冻批次和连续记录仪记录 | 批次 id；装载质量；进入温度；起止时间；冷冻方式；热中心测量；卸载质量；报警；纠正措施 | 经校准探头及连续或批次时间—温度记录 | kg；°C；h | 每个冷冻批次或连续批次 | 所有纳入生产批次 | 范围内所有冷冻机 | 每批次关联实际冷冻记录；完成批次检查后才按质量加权汇总 | 探头校准；记录仪文件；HACCP/CCP 或等效控制记录 |
| `cp_packaging_glaze_records` | `finishing_packaging` | 冰衣、净质量、包装、边角料、废水 | 配方/物料清单、秤具、水表和废物记录 | 产品总质量；鱼净质量；冰衣质量；按材料记录包装质量；包装边角料；水投入；排放；标签声称 | 经校准秤具、包装领料记录和水量平衡 | kg | 每批次和包装配置 | 所有纳入生产批次 | 范围内所有整理和包装线 | 计算批次净质量和材料强度后按质量加权 | 秤具校准；标签/净含量检查；包装规范；水质证据 |
| `cp_storage_dispatch_records` | `frozen_storage` | 贮藏时长、温度、能耗和发运质量 | 仓储管理、温度记录仪和电表记录 | 批次进出库；质量；进出库温度；库房温度；报警；kWh；贮藏区域；发运净质量 | 连续库房温度记录并关联批次时间戳及计量电力 | kg；day；°C；kWh | 连续温度；每次批次移动；每日或计费期电力 | 所有纳入批次的完整贮藏期 | 范围内所有冷库和发运区域 | 按产品质量—天或更具因果性的驱动因子分配电力并归一化到发运净质量 | 记录仪校准；报警/纠正措施记录；电表/账单核对 |
| `cp_refrigerant_records` | `freezing`; `frozen_storage` | 制冷剂补充和排放 | 设备清单和服务记录 | 物质；设备 id；期初/期末充注量；补充；回收；转移；服务损失；分配驱动因子 | 年度或生产期质量平衡并与服务记录核对 | 按制冷剂物质计 kg | 每次服务事件和清单期间 | 与报告生产重叠的清单期间 | 范围内所有冷冻和贮藏制冷设备 | 按物质计算损失并用设备特定因果驱动因子分配 | 发票；技术人员报告；回收记录；充注核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 有冰衣或有包装产出 | 鱼净质量 = 包装后总质量 - 实测冰衣质量 - 包装质量；无冰衣产品将冰衣质量设为实测零 | 包装后总质量；冰衣质量；包装质量 | kg 冷冻鱼净质量 | `codex-cxs-190-1995` |
| `calc_preparation_yield` | 接收与预处理 | 预处理产率 = 预处理鱼质量 / 接收合格鱼质量；单独报告被排除或转移的批次 | 预处理鱼质量；接收鱼质量 | kg/kg |  |
| `calc_water_balance` | 预处理和整理 | 废水 = 水投入 + 融冰水 + 其他实测液体投入 - 产品/冰衣留存 - 实测复用 - 蒸发或其他实测去向 | 水、冰、留存、复用、排放记录 | kg 废水 |  |
| `calc_energy_intensity` | 各用能过程 | 过程能耗强度 = 过程计量或物理分配的能量 / 参考净产出 | 电表读数；分配驱动因子；鱼净质量 | kWh/kg 冷冻鱼净质量 | `eu-pef-2021-2279` |
| `calc_storage_energy` | 冷冻贮藏 | 贮藏能耗强度 = 分配的贮藏电力 / 产品质量—天之和；单独报告批次贮藏时长 | 库房电力；批次质量；进出库时间戳 | kWh/(kg·day) 和 kWh/kg 批次 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 制冷系统 | 制冷剂损失 = 期初充注 + 补充 + 转入 - 期末充注 - 回收 - 转出，按物质分别计算 | 充注清单和服务记录 | kg 制冷剂排放，须经核对 |  |
| `calc_shared_flow_allocation` | 共享过程 | 细分后仅对剩余共享流使用书面因果物理驱动因子分配；保留分子、分母和任何经济后备分配的敏感性 | 共享流总量；产品驱动因子值；需要时的价格/数量记录 | 分配到产品批次的流 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品和接收鱼 | 保持物种、来源、供应商/渔船、产品形态、生产系统和发运产品的一一批次关联；必须可检测并排除金枪鱼/鲣鱼类别和鱼片。 | 批次谱系；物种声明；供应商/上岸文件；产品规范 |
| `dq_measurement` | 质量、能量、水、温度和时间 | 可行时使用经校准仪器，保留单位换算，并在无法直接计量时记录估算和分配。 | 校准记录；仪表日志；换算工作表；分配记录 |
| `dq_temporal_coverage` | 前景清单 | 覆盖包括季节性物种组合和运行变化的代表性生产期间；披露排除的停机、异常批次和数据缺口。 | 生产日历；批次清单；完整性核对 |
| `dq_completeness` | 前景边界 | 核对接收鱼、产品净质量、残余物、水/废水、能源、包装、制冷剂和冷库记录；解释任何重要不平衡或缺失流。 | 签署的质量和公用工程平衡；异常日志 |
| `dq_food_safety_quality` | 产品接触作业和冷冻链 | 保留适用于所声明产品的饮用水证据、卫生前提方案、危害控制记录、冷冻终点、贮藏温度、报警、纠正措施和净含量检查。 | HACCP/CCP 或等效记录；水质检验；时间—温度日志；质量放行记录 |
| `dq_provisional_ranges` | 所有推理估算范围 | 暂定范围仅作为 QA 筛查，不得作为前景值正确性的证据；用于出版关键用途前，以经复核证据或累积前景分布替换。 | 范围复核记录和替换计划 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity_scope` | 产品身份 | 如果物种/类别或产品形态落入被排除的金枪鱼/鲣鱼、鱼片、鱼肉、鱼肝/鱼卵、裹衣、罐藏、熏制、干制、盐制或熟制范围，或缺少必需限定信息，则校验失败。 | `unsd-cpc-3-2025` |
| `val_reference_mass` | 参考流 | 核验准确的 1 kg 鱼净质量，并分开记录非负冰衣和包装质量；包装后总质量必须与声明组分核对一致。 | `codex-cxs-190-1995` |
| `val_mass_balance` | 批次和过程质量 | 核对接收鱼与预处理鱼、参考产品、冰衣留存、残余物、可测废水固体和留存中间品；无法解释的不平衡须标记复核。 |  |
| `val_freezing_cold_chain` | 冷冻和贮藏 | 要求批次关联的时间—温度证据、冷冻终点、贮藏时长、报警处置和发运状态；采用速冻路线时，核验热稳定后热中心达到 -18 °C 或更低并保持深度冷冻。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `val_food_safety_records` | 产品接触作业 | 要求适用于设施和目的市场的水质、卫生、危害控制、产品放行和追溯证据；缺失证据使校验结论为不确定。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `val_allocation` | 共享过程和共产品 | 核验已尝试细分、所选分配驱动因子具有因果性且可复现、外售共产品和废物按实际去向分类，并且任何经济后备分配包含数量、价格、期间和敏感性。 | `eu-pef-2021-2279` |
| `val_inventory_completeness` | 前景数据包 | 对鱼质量、水、冰、能源、包装、废物、废水、制冷剂、冷冻和贮藏报告接受的输入、已执行检查、跳过检查、发现和完整性；不得将跳过检查解释为通过。 | `eu-pef-2021-2279` |
| `val_provisional_estimates` | 推理估算范围 | 将每个暂定范围标记为可替换的复核证据；超出范围的值需要解释，处于范围内也不证明符合要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冷冻/加工设施发运门处合格冷冻远洋鱼类的前景生产数据包 |
| downstream_use | 完成方法学、身份、证据和翻译复核后作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 物种、来源、产品形态、技术、地理、时间和贮藏时长匹配的 LCA 过程或生命周期模型；补充兼容上游捕捞/养殖和运输数据集的供应链研究 |
| excluded_use | 未限定地替代金枪鱼/鲣鱼产品、鱼片或鱼肉、其他保藏路线、未知物种/来源、零售或熟制产品，或前景边界存在重大差异的冷冻产品 |
| required_metadata | PCR id 和版本；产品流 UUID；物种和可得时学名；来源和生产系统；捕捞区域；供应商/渔船批次；产品形态；冷冻方式；冰衣状态和比例；包装；净质量；地理；期间；贮藏温度和时长；分配方法；上游数据集引用 |
| required_quality_disclosure | 数据覆盖和代表性；秤具/仪表/记录仪校准；质量和公用工程平衡；冷链和食品安全证据；共享公用工程和共产品分配；暂定估算；未解决 UUID；排除过程和数据缺口 |
| update_trigger | 物种或来源组合、产品形态、冷冻或上冰衣技术、包装、制冷系统、贮藏时长、设施地理位置、分配基础、适用食品安全规范、Tiangong 身份发生变化，或以经复核证据替换暂定范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `standard` | 联合国统计司，《Central Product Classification Version 3.0, Explanatory Notes》，子类 21216，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 产品类别纳入与排除边界及分类措辞 |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius，CXC 52-2003，《Code of Practice for Fish and Fishery Products》，https://www.fao.org/4/i2382e/i2382e.pdf（检索日期 2026-08-11） | 鱼类操作和预处理过程结构、饮用/产品接触水、冷冻记录、冷冻贮藏、卫生、危害控制和食品安全证据 |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius，CXS 190-1995，《Standard for Quick-Frozen Fish Fillets》，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B190-1995%252FCXS_190e.pdf（检索日期 2026-08-11） | 可比的速冻、深度冷冻贮藏、冰衣用水质量、包装、标签和净质量实践；不用于将范围扩展到鱼片 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11） | 生命周期边界框架、高质量前景数据、可复现分配披露、数据集用途和验证 |
