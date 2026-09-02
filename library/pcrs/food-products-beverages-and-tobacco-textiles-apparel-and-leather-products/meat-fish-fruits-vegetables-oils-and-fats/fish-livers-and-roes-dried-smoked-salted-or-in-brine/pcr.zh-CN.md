---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-dried-smoked-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 干制、熏制、腌制或盐渍的鱼肝和鱼籽

## 1. 范围与适用性

本 PCR 适用于通过干燥、熏制、干盐腌、湿盐腌或盐水浸渍中的一种或多种方式保藏，并以保藏设施门口成品交付的可食用鱼肝和鱼籽。产品可为完整、分切、散装、成形或包装形态，但鱼肝或鱼籽必须仍是产品的定义性成分，且必须声明保藏路线。

前景边界从已识别的鱼肝或鱼籽以已声明的鲜、冷藏或冷冻状态进入保藏设施开始。边界包括接收和准备、实际保藏路线、路线特定的中间暂存、包装以及发运前的设施内储存。上游捕捞或养殖、鱼类初级加工、配料和包装生产以及入厂运输通过投入的上游数据集表示，不在前景过程中重复构建。

范围不包括鲜制或仅冷藏的鱼肝和鱼籽；未经干燥、熏制、腌制或盐水浸渍的冷冻产品；罐藏或其他密封热加工产品；其定义性处理或配方不属于已声明保藏路线的鱼子酱或其他鱼籽制品；鱼肝或鱼籽不是定义性产品的复合食品；以及非鱼类水生动物的肝或籽。

本候选 PCR 规定 LCA 数据生产规则，不规定法定食品安全验收限值。数据包必须针对其物种、产品形态、保藏路线、包装气氛、储存条件和市场，识别适用的产品规范与食品安全控制。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-dried-smoked-salted-or-in-brine |
| classification_refs | CPC 3.0：21227，精确映射语境（`unsd-cpc-3-0-21227`） |
| covered_products | 通过干燥、熏制、腌制或盐水浸渍保藏的可食用鱼肝和鱼籽，包括采用多种上述保藏操作的产品 |
| excluded_products | 鲜制、仅冷藏或仅冷冻的鱼肝和鱼籽；罐藏产品；非鱼类肝或籽；不以保藏鱼肝或鱼籽为定义的复合食品；定义性转化不属于所列保藏路线的产品 |
| representative_product | 采用已声明的盐腌或盐水浸渍并结合干燥或熏制进行保藏、已包装且可从保藏设施发运的可食用鱼籽或鱼肝 |
| production_route | 接收和准备；已声明的干盐腌或盐水浸渍和/或干燥和/或熏制；路线特定暂存；包装；设施内储存 |
| market_state | 保藏设施门口的保藏成品；声明包装气氛、储存温度类别以及预期冷藏、冷冻或常温稳定的处理方式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供以干燥、熏制、腌制或盐水浸渍方式保藏、处于已声明产品和包装状态的可食用鱼肝或鱼籽 |
| How much | 1 kg 成品净质量；除非运输包装属于销售单元，否则不计入该净质量 |
| How well | 符合已声明的物种、解剖产品、保藏路线、盐或盐水条件、水分或干燥状态、熏制处理、包装气氛和储存条件 |
| How long or cycle | 一个生产批次直至保藏设施门口放行；声明发运前纳入边界的任何储存时长 |
| reference_flow_link | `rf_preserved_fish_livers_roes_net_mass` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 鱼肝或鱼籽成品净质量 |
| 参考产品流 | 干制、熏制、腌制或盐渍的鱼肝和鱼籽 `ab283f96-8c07-4a11-8904-4d5a6542d1fe` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼类物种或物种组；鱼肝或鱼籽；入厂状态（鲜或冷藏或冷冻）；保藏路线或路线组合；盐腌状态（干盐腌或湿盐腌或盐水浸渍）；适用时的干燥和熏制技术；产品水分或等效干燥状态规范；包装材料和气氛；储存温度类别和时长；产品净质量基准；生产地域和时期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在已声明保藏操作后、发运前报告 1 kg 成品净质量。单独的运输包装不计入产品质量，应作为清单投入单列。 |
| `wet_dry_basis_disclosure` | 产品水分、盐分和产率观测 | 与实测属性相适应的质量分数或浓度 | 已声明单位 | 声明每项水分、干物质、盐分或浓度结果采用湿产品、干物质、水相或溶液基准；没有记录的输入和明确公式不得在基准间换算。 |
| `ingredient_solution_mass` | 盐水及其他水性配料溶液 | 质量 | kg | 分别记录进入过程的新配溶液质量、回用溶液和离开过程的废溶液；不得仅报告名义槽容量。 |
| `energy_carrier_separation` | 电力、热能和直接燃料 | 与载能体相适应的能量或质量 | kWh、MJ 或 kg | 分开记录购入电力、购入热力和燃烧燃料。记录实际载能体、数量和换算因子；没有明确计算规则不得合并不同能量单位。 |
| `packaging_mass_separation` | 初级、次级和运输包装 | 质量 | kg | 按材料和层级测量每参考流的包装。销售单元中的包装仍作为清单投入，但不计入鱼肝或鱼籽净质量。 |

## 5. 系统边界

前景系统覆盖保藏设施控制的操作，从鱼肝或鱼籽接收直至包装成品放行。纳入实际发生的清洁、分选、膜或组织去除、沥水、解冻、盐腌、盐水浸渍、干燥、熏制、冷却、中间储存、包装、成品储存、卫生相关过程用水、场内废物处理，以及实际发生并可归属的场内废水处理。

入厂鱼肝或鱼籽、盐和其他配料、水、能源载体、燃料、包装材料、制冷剂、运输服务与处理服务应使用上游数据集。设施门口之后的分销、零售、消费者准备、消费和包装寿命终结不属于前景边界，除非研究明确将其作为下游情景加入。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_actual_route` | 前景保藏系统 | 纳入已声明批次实际使用的每项准备、保藏、包装、暂存和场内处理操作；不得添加未使用的干燥、熏制、腌制或盐水浸渍路线。 | `codex-cxc-52-2003`; `fao-fish-processing-storage` |
| `boundary_upstream_inputs` | 跨越设施门口的投入 | 通过可追溯上游数据集表示上游生产和入厂运输，并披露缺失或代理数据集；不得给入厂鱼肝、鱼籽、盐、燃料、包装或公用工程赋予零负荷。 | `eu-pef-2021-2279` |
| `boundary_food_safety_controls` | 产品和生产线特定控制 | 记录实际产品和生产线适用的危害分析、控制点、监测记录和放行准则。食品安全记录支持过程身份和质量，但不能替代环境清单测量。 | `codex-cxc-52-2003` |
| `boundary_storage_losses` | 中间和成品储存 | 纳入边界和时段内可归属于设施储存的电力、制冷剂损失、产品损失和废物处理。 | `fao-fish-processing-storage`; `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别的可食用鱼肝或鱼籽以已声明的鲜、冷藏或冷冻状态在保藏设施接收，并记录物种或物种组、来源、供应商、批次、上游数据集和接收净质量 |
| starting_condition_role | 前景保藏系统的上游产品投入 |
| product_classification_scope | 在 CPC 3.0 代码 21227 映射语境内，通过干燥、熏制、腌制或盐水浸渍形成成品状态的鱼肝和鱼籽 |
| recursive_input_rule | 若本类别内已经保藏的鱼肝或鱼籽作为投入，则使用其自身数据集将其一次记录为上游产品流。除非前景设施执行进一步的具名保藏转化，否则不得递归重复应用本 PCR。 |
| upstream_dataset_requirement | 每项入厂鱼肝或鱼籽投入均需可追溯上游数据集，声明捕捞或养殖来源、物种、初级加工边界、共产品或副产品处理、分配方法、地域、时期和入厂保藏状态。其他物质和能源投入需采用代表性上游数据集或披露的代理。 |
| disclosure | 声明设施位置、报告期、物种或物种组、鱼肝或鱼籽、入厂状态、实际保藏顺序、产品配方、净质量基准、包装、储存条件和时长、剔除物、共产品、废物、场内处理、上游数据集选择、分配、代理以及保留的推理估算。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | 鱼肝或鱼籽接收和准备 | `required` | 始终纳入接收、检查、质量测量及实际准备操作 | 确立投入身份、去除非产品物质并产生保藏准备料 | kg 准备后鱼肝或鱼籽 |
| `preservation_processing` | 盐腌、盐水浸渍、干燥或熏制 | `required` | 至少纳入一项具名保藏路线，并纳入实际使用的每项路线操作 | 将准备后的鱼肝或鱼籽转化为已声明保藏产品 | kg 最终包装前保藏产品 |
| `packaging_storage` | 包装和设施内储存 | `required` | 纳入实际包装操作和设施门口参考流放行前的全部储存 | 产生成品包装产品并核算包装、储存能源、制冷剂和损失 | kg 成品净质量 |

### 过程：鱼肝或鱼籽接收和准备（`receipt_preparation`）

#### 输入

##### 产品流

###### 鲜鱼肝入厂（`incoming_fresh_fish_liver`）

将验收的鲜可食用鱼肝作为独立入厂产品交换记录。

- 选定流：Fresh fish liver
- 流属性/单位：Mass / kg
- 数量规则：生产批次接收并验收的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`unsd-cpc-3-0-21227`

###### 冷藏鱼肝入厂（`incoming_chilled_fish_liver`）

将验收的冷藏可食用鱼肝作为独立入厂产品交换记录。

- 选定流：Chilled fish liver
- 流属性/单位：Mass / kg
- 数量规则：生产批次接收并验收的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`unsd-cpc-3-0-21227`

###### 冷冻鱼肝入厂（`incoming_frozen_fish_liver`）

将验收的冷冻可食用鱼肝作为独立入厂产品交换记录。

- 选定流：Frozen fish liver
- 流属性/单位：Mass / kg
- 数量规则：生产批次接收并验收的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`unsd-cpc-3-0-21227`

###### 鲜鱼籽入厂（`incoming_fresh_fish_roe`）

将验收的鲜可食用鱼籽作为独立入厂产品交换记录。

- 选定流：Fresh fish roe
- 流属性/单位：Mass / kg
- 数量规则：生产批次接收并验收的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`unsd-cpc-3-0-21227`

###### 冷藏鱼籽入厂（`incoming_chilled_fish_roe`）

将验收的冷藏可食用鱼籽作为独立入厂产品交换记录。

- 选定流：Chilled fish roe
- 流属性/单位：Mass / kg
- 数量规则：生产批次接收并验收的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`unsd-cpc-3-0-21227`

###### 冷冻鱼籽入厂（`incoming_frozen_fish_roe`）

将验收的冷冻可食用鱼籽作为独立入厂产品交换记录。

- 选定流：Frozen fish roe
- 流属性/单位：Mass / kg
- 数量规则：生产批次接收并验收的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`unsd-cpc-3-0-21227`

###### 准备用水（`preparation_water`）

用于清洗、辅助解冻、冲洗或产品清洁的水在跨越过程边界时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归属产品准备的计量或批次估算用水，扣除单独测量的回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后鱼肝或鱼籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 数量范围：准备用水暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 50
  - 单位: kg/kg prepared product
  - 基准: 每 1 kg 准备后鱼肝或鱼籽
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 低压电网电力（`preparation_electricity_low_voltage_grid`）

记录以低于 1 kV 消费组合供给的公共电网电力；其他电压或供给场景不得使用本行。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：可归属接收和准备阶段的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 准备后鱼肝或鱼籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 中压电网电力（`preparation_electricity_medium_voltage_grid`）

记录以 1–35 kV 消费组合供给的公共电网电力；其他电压或供给场景不得使用本行。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：可归属接收和准备阶段的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 准备后鱼肝或鱼籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 场内低压光伏电力（`preparation_electricity_onsite_photovoltaic`）

将场内光伏系统直接供给的低于 1 kV 交流电作为独立供给场景记录。

- 选定流：Alternating current, on-site photovoltaic generation, less than 1 kV
- 流属性/单位：Net calorific value / kWh
- 数量规则：可归属接收和准备阶段的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 准备后鱼肝或鱼籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 准备冷却用冷冻水（`preparation_chilled_water`）

将跨越准备过程边界的冷冻水作为购入冷却载体记录，并与电力分开。

- 选定流：Chilled water
- 流属性/单位：Energy / MJ
- 数量规则：可归属接收和准备阶段的冷冻水计量能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 准备后鱼肝或鱼籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备后的鱼肝（`prepared_fish_liver`）

记录转入保藏加工的实测准备后的鱼肝质量。

- 选定流：Prepared fish liver
- 流属性/单位：Mass / kg
- 数量规则：准备和沥水后实测的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 准备后的鱼籽（`prepared_fish_roe`）

记录转入保藏加工的实测准备后的鱼籽质量。

- 选定流：Prepared fish roe
- 流属性/单位：Mass / kg
- 数量规则：准备和沥水后实测的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

##### 废物流

###### 去除的鱼肝组织（`preparation_residual_fish_liver_tissue`）

按实测质量和去向记录离开准备阶段的去除的鱼肝组织。

- 选定流：Removed fish liver tissue
- 流属性/单位：Mass / kg
- 数量规则：按去向实测质量，区分废物处理和回收共产品用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 入厂鱼肝或鱼籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 破损鱼籽（`preparation_residual_damaged_fish_roe`）

按实测质量和去向记录离开准备阶段的破损鱼籽。

- 选定流：Damaged fish roe
- 流属性/单位：Mass / kg
- 数量规则：按去向实测质量，区分废物处理和回收共产品用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 入厂鱼肝或鱼籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 去除的鱼类结缔组织膜（`preparation_residual_fish_membrane`）

按实测质量和去向记录离开准备阶段的去除的鱼类结缔组织膜。

- 选定流：Fish connective-tissue membrane
- 流属性/单位：Mass / kg
- 数量规则：按去向实测质量，区分废物处理和回收共产品用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 入厂鱼肝或鱼籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 准备阶段废水（`preparation_wastewater`）

准备阶段产生的废水在进入场内处理或离开设施时记录。

- 选定流：Fish-liver-or-roe preparation wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量或通过水量平衡归属准备阶段的数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后鱼肝或鱼籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_records`
- 数量范围：准备阶段废水暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 50
  - 单位: kg/kg prepared product
  - 基准: 每 1 kg 准备后鱼肝或鱼籽
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：盐腌、盐水浸渍、干燥或熏制（`preservation_processing`）

#### 输入

##### 产品流

###### 准备后的鱼肝进料（`preservation_fish_liver_feed`）

记录进入已声明保藏路线的准备后的鱼肝进料，不重复其上游负荷。

- 选定流：Prepared fish liver
- 流属性/单位：Mass / kg
- 数量规则：保藏加工投料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 准备后的鱼籽进料（`preservation_fish_roe_feed`）

记录进入已声明保藏路线的准备后的鱼籽进料，不重复其上游负荷。

- 选定流：Prepared fish roe
- 流属性/单位：Mass / kg
- 数量规则：保藏加工投料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 食品级盐（`preservation_salt`）

记录用于干盐腌、盐水配制、补盐或熏制前盐腌的盐。

- 选定流：食盐 `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属批次的购入或领用质量，扣除有记录退回库存的回收盐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：用盐量暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 2
  - 单位: kg/kg preserved product
  - 基准: 每 1 kg 保藏产品；不是食品安全或配方限值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐水配制用水（`brine_makeup_water`）

采用湿盐腌或盐水浸渍时，将盐水新补水与回用盐水分开记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：加入盐水系统并归属批次的新配用水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 数量范围：盐水用水暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 50
  - 单位: kg/kg preserved product
  - 基准: 每 1 kg 保藏产品；仅适用于湿盐腌或盐水浸渍
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 低压电网电力（`preservation_electricity_low_voltage_grid`）

记录以低于 1 kV 消费组合供给的公共电网电力；其他电压或供给场景不得使用本行。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：按已声明保藏批次计量或工程分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 中压电网电力（`preservation_electricity_medium_voltage_grid`）

记录以 1–35 kV 消费组合供给的公共电网电力；其他电压或供给场景不得使用本行。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：按已声明保藏批次计量或工程分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 场内低压光伏电力（`preservation_electricity_onsite_photovoltaic`）

将场内光伏系统直接供给的低于 1 kV 交流电作为独立供给场景记录。

- 选定流：Alternating current, on-site photovoltaic generation, less than 1 kV
- 流属性/单位：Net calorific value / kWh
- 数量规则：按已声明保藏批次计量或工程分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 购入工艺蒸汽（`preservation_steam`）

将跨越保藏边界的购入蒸汽与热水和直接燃料分开记录。

- 选定流：热量，蒸汽 `2e727825-ba09-4dde-bab5-2d4f04c1daf6`
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：归属已声明保藏批次的蒸汽计量能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 购入热水（`preservation_hot_water`）

将跨越保藏边界的热水作为独立热载体记录，并披露供回水条件。

- 选定流：热水
- 流属性/单位：Energy / MJ
- 数量规则：归属已声明保藏批次的热水计量能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 管道天然气（`preservation_natural_gas`）

将场内燃烧的管道天然气作为独立燃料载体记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属已声明保藏批次的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 液化石油气（`preservation_lpg`）

将场内燃烧的液化石油气作为独立燃料载体记录。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属已声明保藏批次的液化石油气实测领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 柴油（`preservation_diesel`）

将场内燃烧的柴油作为独立燃料载体记录。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属已声明保藏批次的柴油实测领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 重质燃料油（`preservation_fuel_oil`）

将场内燃烧的重质燃料油作为独立燃料载体记录。

- 选定流：重质燃料油
- 流属性/单位：Mass / kg
- 数量规则：归属已声明保藏批次的燃料油实测领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 产烟用未处理硬木木片（`smoking_hardwood_chips`）

记录进入场内产烟设备的未处理硬木木片，并声明树种和水分基准。

- 选定流：Untreated hardwood chips for food smoke generation
- 流属性/单位：Mass / kg
- 数量规则：熏制操作投入的木片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxc-52-2003`; `fao-fish-processing-storage`
- 数量范围：产烟燃料暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 20
  - 单位: kg/kg smoked product
  - 基准: 每 1 kg 熏制产品；仅适用于直接熏制路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 压缩空气（`preservation_compressed_air`）

将供给保藏设备的压缩空气作为独立公用工程载体记录。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属已声明保藏批次的压缩空气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-fish-processing-storage`

###### 食品级液体烟熏制剂（`preservation_liquid_smoke`）

使用液体烟熏配方时将液体烟熏制剂作为配料记录，不得作为燃料。

- 选定流：Food-grade liquid smoke preparation
- 流属性/单位：Mass / kg
- 数量规则：归属批次的液体烟熏制剂实测投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`codex-cxc-52-2003`; `fao-fish-processing-storage`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前保藏鱼肝（`preserved_fish_liver_intermediate`）

记录转入包装的合格包装前保藏鱼肝质量。

- 选定流：Preserved fish liver intermediate
- 流属性/单位：Mass / kg
- 数量规则：转入包装的合格保藏产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 包装前保藏鱼籽（`preserved_fish_roe_intermediate`）

记录转入包装的合格包装前保藏鱼籽质量。

- 选定流：Preserved fish roe intermediate
- 流属性/单位：Mass / kg
- 数量规则：转入包装的合格保藏产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

##### 废物流

###### 废高盐盐水（`spent_brine`）

将离开回用回路的废盐水与其他保藏废水分开记录。

- 选定流：浓水 `76ab69b6-6fa7-461c-be07-bc54e581a699`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：废盐水的计量排放量或水和溶液平衡计算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_records`

###### 非盐性保藏废水（`preservation_wastewater`）

将冷凝水、洗水和其他非盐性保藏废水与废盐水分开记录。

- 选定流：Non-saline fish-preservation wastewater
- 流属性/单位：Mass / kg
- 数量规则：非盐性保藏废水的计量排放量或水量平衡计算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_records`

###### 不合格保藏鱼肝（`rejected_preserved_fish_liver`）

按批次和去向记录不合格保藏鱼肝，不得将其隐藏在产率中。

- 选定流：Rejected preserved fish liver
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向实测损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 保藏进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 不合格保藏鱼籽（`rejected_preserved_fish_roe`）

按批次和去向记录不合格保藏鱼籽，不得将其隐藏在产率中。

- 选定流：Rejected preserved fish roe
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向实测损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 保藏进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

##### 基本流

###### 化石二氧化碳排入空气（`onsite_fossil_co2`）

发生直接熏制或燃烧时，将化石二氧化碳排入空气作为独立基本流交换记录。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放，或化石燃料用量乘以有文件依据的碳含量和氧化因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

###### 生物源二氧化碳排入空气（`onsite_biogenic_co2`）

发生直接熏制或燃烧时，将生物源二氧化碳排入空气作为独立基本流交换记录。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放，或生物质用量乘以有文件依据的生物源碳含量和氧化因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

###### 化石源一氧化碳排入空气（`onsite_carbon_monoxide_fossil`）

发生直接熏制或燃烧时，将化石源一氧化碳排入空气作为独立基本流交换记录。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟道排放或燃料特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

###### 化石源甲烷排入空气（`onsite_methane_fossil`）

发生直接熏制或燃烧时，将化石源甲烷排入空气作为独立基本流交换记录。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟道排放或燃料特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

###### 一氧化氮排入空气（`onsite_nitrogen_monoxide`）

发生直接熏制或燃烧时，将一氧化氮排入空气作为独立基本流交换记录。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟道排放或物质特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

###### 二氧化氮排入空气（`onsite_nitrogen_dioxide`）

发生直接熏制或燃烧时，将二氧化氮排入空气作为独立基本流交换记录。

- 选定流：Nitrogen dioxide, to air, unspecified
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟道排放或物质特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

###### 氧化亚氮排入空气（`onsite_nitrous_oxide`）

发生直接熏制或燃烧时，将氧化亚氮排入空气作为独立基本流交换记录。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟道排放或物质特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

###### 二氧化硫排入空气（`onsite_sulfur_dioxide`）

发生直接熏制或燃烧时，将二氧化硫排入空气作为独立基本流交换记录。

- 选定流：Sulfur dioxide, to air, unspecified
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟道排放或有文件依据保留量的燃料硫平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

###### PM2.5 排入空气（`onsite_pm25`）

发生直接熏制或燃烧时，将PM2.5 排入空气作为独立基本流交换记录。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：控制后实测烟道排放或设备特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

###### 非甲烷挥发性有机物排入空气（`onsite_nmvoc`）

发生直接熏制或燃烧时，将非甲烷挥发性有机物排入空气作为独立基本流交换记录。

- 选定流：Non-methane volatile organic compounds, to air, unspecified
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟道排放或该基本流特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`codex-cxc-52-2003`

### 过程：包装和设施内储存（`packaging_storage`）

#### 输入

##### 产品流

###### 进入包装的保藏鱼肝（`packaging_fish_liver_feed`）

记录进入实际初级包装操作的合格进入包装的保藏鱼肝。

- 选定流：Preserved fish liver intermediate
- 流属性/单位：Mass / kg
- 数量规则：放行至包装的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 进入包装的保藏鱼籽（`packaging_fish_roe_feed`）

记录进入实际初级包装操作的合格进入包装的保藏鱼籽。

- 选定流：Preserved fish roe intermediate
- 流属性/单位：Mass / kg
- 数量规则：放行至包装的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 聚乙烯薄膜或袋（`packaging_polyethylene_film`）

使用时将聚乙烯薄膜或袋作为独立包装组件交换记录。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用聚乙烯薄膜质量扣除有记录退回库存的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 聚丙烯硬质盒（`packaging_polypropylene_tub`）

使用时将聚丙烯硬质盒作为独立包装组件交换记录。

- 选定流：Polypropylene rigid food-packaging tub
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用聚丙烯硬质盒质量扣除有记录退回库存的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 玻璃罐（`packaging_glass_jar`）

使用时将玻璃罐作为独立包装组件交换记录。

- 选定流：玻璃瓶罐 `eca48ea8-ab83-444f-98b2-15ab82570c80`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用玻璃罐质量扣除有记录退回库存的未用容器
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 铝盖（`packaging_aluminium_lid`）

使用时将铝盖作为独立包装组件交换记录。

- 选定流：Aluminium food-package lid
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用铝盖质量扣除有记录退回库存的未用铝盖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 纸板折叠盒（`packaging_paperboard_carton`）

使用时将纸板折叠盒作为独立包装组件交换记录。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用纸板折叠盒质量扣除有记录退回库存的未用纸盒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 瓦楞纸箱（`packaging_corrugated_box`）

使用时将瓦楞纸箱作为独立包装组件交换记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用瓦楞纸箱质量扣除有记录退回库存的未用纸箱
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 木托盘（`packaging_wood_pallet`）

使用时将木托盘作为独立包装组件交换记录。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用木托盘质量扣除有记录退回库存的未用托盘
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 低压电网电力（`storage_electricity_low_voltage_grid`）

记录以低于 1 kV 消费组合供给的公共电网电力；其他电压或供给场景不得使用本行。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：按照占用容量、质量-时间或其他已披露因果驱动因素分配的储存计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量和已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`
- 来源：`fao-fish-processing-storage`

###### 中压电网电力（`storage_electricity_medium_voltage_grid`）

记录以 1–35 kV 消费组合供给的公共电网电力；其他电压或供给场景不得使用本行。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：按照占用容量、质量-时间或其他已披露因果驱动因素分配的储存计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量和已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`
- 来源：`fao-fish-processing-storage`

###### 场内低压光伏电力（`storage_electricity_onsite_photovoltaic`）

将场内光伏系统直接供给的低于 1 kV 交流电作为独立供给场景记录。

- 选定流：Alternating current, on-site photovoltaic generation, less than 1 kV
- 流属性/单位：Net calorific value / kWh
- 数量规则：按照占用容量、质量-时间或其他已披露因果驱动因素分配的储存计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量和已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`
- 来源：`fao-fish-processing-storage`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考成品（`finished_reference_product`）

记录以已声明包装和储存状态放行的保藏鱼肝或鱼籽成品。

- 选定流：干制、熏制、腌制或盐渍的鱼肝和鱼籽 `ab283f96-8c07-4a11-8904-4d5a6542d1fe`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 聚乙烯包装废料（`packaging_polyethylene_scrap`）

按材料和去向单独记录聚乙烯包装废料。

- 选定流：Polyethylene film packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 聚丙烯包装废料（`packaging_polypropylene_scrap`）

按材料和去向单独记录聚丙烯包装废料。

- 选定流：Polypropylene rigid-packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 玻璃罐包装废物（`packaging_glass_waste`）

按材料和去向单独记录玻璃罐包装废物。

- 选定流：Broken glass-jar packaging waste
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 铝盖包装废料（`packaging_aluminium_scrap`）

按材料和去向单独记录铝盖包装废料。

- 选定流：Aluminium-lid packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 纸板盒废料（`packaging_paperboard_scrap`）

按材料和去向单独记录纸板盒废料。

- 选定流：Paperboard-carton packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 瓦楞纸箱废料（`packaging_corrugated_scrap`）

按材料和去向单独记录瓦楞纸箱废料。

- 选定流：Corrugated-board-box packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 木托盘包装废物（`packaging_wood_waste`）

按材料和去向单独记录木托盘包装废物。

- 选定流：Damaged wooden-pallet packaging waste
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 不合格保藏鱼肝成品（`rejected_finished_fish_liver`）

按材料和去向单独记录不合格保藏鱼肝成品。

- 选定流：Rejected finished preserved fish liver
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 不合格保藏鱼籽成品（`rejected_finished_fish_roe`）

按材料和去向单独记录不合格保藏鱼籽成品。

- 选定流：Rejected finished preserved fish roe
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 基本流

###### R717 制冷剂排入空气（`storage_r717_emission`）

仅对使用该制冷剂的设备记录R717 制冷剂排入空气。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：制冷剂充注量减去有记录回收量和库存变化，并分配至纳入的储存服务
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量和已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`

###### R404A 制冷剂排入空气（`storage_r404a_emission`）

仅对使用该制冷剂的设备记录R404A 制冷剂排入空气。

- 选定流：Refrigerant R404A, to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：制冷剂充注量减去有记录回收量和库存变化，并分配至纳入的储存服务
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量和已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`

###### R134a 制冷剂排入空气（`storage_r134a_emission`）

仅对使用该制冷剂的设备记录R134a 制冷剂排入空气。

- 选定流：HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：制冷剂充注量减去有记录回收量和库存变化，并分配至纳入的储存服务
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量和已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`

###### R507A 制冷剂排入空气（`storage_r507a_emission`）

仅对使用该制冷剂的设备记录R507A 制冷剂排入空气。

- 选定流：Refrigerant R507A, to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：制冷剂充注量减去有记录回收量和库存变化，并分配至纳入的储存服务
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量和已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`

###### R744 制冷剂排入空气（`storage_r744_emission`）

仅对使用该制冷剂的设备记录R744 制冷剂排入空气。

- 选定流：Carbon dioxide from R744 refrigerant, to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：制冷剂充注量减去有记录回收量和库存变化，并分配至纳入的储存服务
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量和已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多输出准备、保藏、包装和公用工程系统 | 可通过过程细分或直接计量将投入、能源、排放、废物和损失归属鱼肝或鱼籽产品时，避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_relation` | 无法避免且产生多个有价值输出的联合过程 | 无法细分时，采用能反映联合过程随输出生产变化的、已有文件依据的物理因果关系。仅当质量是适当因果代理时使用质量分配。 | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | 缺少可辩护物理因果关系的联合有价值输出 | 仅将经济分配作为后备方法。记录价格、币种、地域、平均时期、产品状态以及异常或缺失价格的处理，并检验重大敏感性。 | `eu-pef-2021-2279` |
| `allocation_incoming_material` | 上游鱼肝或鱼籽数据集 | 保留并披露上游数据集对与鱼肉或其他共产品共同产生的鱼肝或鱼籽的处理。不得在保藏设施门口以零负荷替代上游分配。 | `eu-pef-2021-2279` |
| `allocation_residual_destination` | 去除组织、不合格产品、废盐水和包装残余物 | 根据实际去向和适用规则将每项输出分类为废物或回收共产品。前景清单外没有明确下游替代模型时，不得给予避免负荷抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receipt_preparation`; `preservation_processing`; `packaging_storage` | 入厂、转移、成品、剔除和损失的鱼肝或鱼籽物料 | 地磅、批次秤、生产和去向记录 | 批次 id；物种；鱼肝或鱼籽；入厂状态；毛质量；皮重；验收质量；转移质量；成品净质量；剔除质量；去向；时间戳 | 每次转移使用校准称重，或使用经核对的批次记录 | kg | 每批次和每次转移 | 完整的已声明报告期 | 全部纳入的生产线、班次和场址 | 按批次和过程汇总；核对转移并归一化到成品净质量 | 秤校准；签字批记录；核对记录；去向证据 |
| `cp_water_records` | `receipt_preparation`; `preservation_processing` | 准备用水、盐水用水、冷凝水和废水 | 水表、批次配方、槽和排放记录 | 表 id；期初期末读数；批次补水；回用；排放；冷凝水；过程；批次；时间戳 | 优先分表；否则根据实测批次补水建立有文件依据的水量平衡 | kg 或采用密度换算的 m3 | 每批次或表计区间 | 完整的已声明报告期 | 全部纳入的用水点和排放点 | 扣除有记录回用和非过程用水；按已披露因果驱动因素分配共享总量 | 表计校准；配方；槽记录；排放记录；平衡闭合 |
| `cp_ingredient_records` | `preservation_processing` | 盐、盐水成分和其他已声明保藏配料 | 采购、领用、配方、退回和库存记录 | 配料；供应商；批次；组成；领用质量；退回质量；溶液质量；浓度基准；生产批次 | 按配料和批次进行质量核对 | kg | 每批次 | 完整的已声明报告期 | 全部纳入的保藏生产线 | 净领用质量等于领用减去有记录退回；保持溶液水和溶质可分开计算 | 发票；规范；校准秤；批准配方；库存核对 |
| `cp_energy_records` | `receipt_preparation`; `preservation_processing` | 电力、购入热力、直接燃料和产烟材料 | 表计、燃料领用、运行小时和设备记录 | 载能体；表计；读数；燃料质量或体积；热值来源；运行时间；设备；过程；批次 | 优先直接计量；仅按有文件依据的驱动因素进行工程分配 | kWh、MJ 或按载能体记录的 kg | 表计区间或批次 | 完整的已声明报告期 | 全部纳入的过程设备 | 保持载能体分开；按实测运行参数分配共享用量并归一化至过程输出 | 表计校准；发票；燃料规范；运行记录；分配工作表 |
| `cp_packaging_records` | `packaging_storage` | 包装投入、边角料、不合格包装和成品损失 | 物料清单、领用、退回、废料和剔除记录 | 材料；包装层级；单件质量；领用件数；退回件数；废料质量；不合格产品；去向 | 件数乘以核实单件质量，或直接质量核对 | kg | 每包装批次 | 完整的已声明报告期 | 全部包装形式和生产线 | 净材料等于领用减去退回；分开材料和层级；归一化至成品净质量 | 供应商规范；单件质量核查；领用和废料记录 |
| `cp_storage_records` | `packaging_storage` | 储存时长、电力、占用量和制冷剂服务 | 仓库、表计、库存和维护记录 | 产品质量；入库和出库时间；温度类别；表计读数；占用容量；制冷剂类型；充注；回收；库存变化；服务日期 | 将质量-时间库存与表计和维护平衡关联 | kg·day、kWh 和 kg refrigerant | 每次储存移动和维护事件 | 完整的已声明报告期 | 全部纳入的储存室和制冷系统 | 采用已披露的质量-时间、容量或实测负荷驱动因素分配共享电力和制冷剂平衡 | 温度记录；表计记录；库存移动；维护发票；制冷剂平衡 |
| `cp_direct_emission_records` | `preservation_processing` | 直接燃料燃烧或产烟排放 | 燃料记录、烟道测量和因子文件 | 燃料类型；燃料数量；排放物质；实测浓度和流量或因子；因子来源；控制设备；运行时间 | 可用时直接测量；否则使用有来源的燃料特定计算 | kg substance | 每次监测活动或计算期 | 代表性的纳入操作 | 全部直接熏制或燃烧单元 | 分别计算每种物质并归一化至熏制输出 | 监测报告；因子来源；燃料记录；计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_flow` | 全部清单行 | 归一化数量 = 可归属过程数量 / 放行成品净质量 | 可归属数量；放行成品净质量 | 每 1 kg 参考流的数量 |  |
| `calc_preparation_yield` | `receipt_preparation` | 准备产率 = 准备后转移质量 / 验收入厂质量 | 验收入厂质量；准备后转移质量 | kg 准备后产品/kg 验收投入 |  |
| `calc_preservation_yield` | `preservation_processing` | 保藏产率 = 合格保藏中间产品质量 / 准备后进料质量 | 准备后进料质量；保藏中间产品质量 | kg 保藏中间产品/kg 准备后进料 |  |
| `calc_water_balance` | 准备和保藏用水 | 废水估算 = 实测水和溶液投入 + 相关产品释水 - 产品留水或回用水 - 实测蒸发；声明每项，并单列无法闭合的差额 | 水投入；盐水投入；回用；产品质量和水分观测；冷凝水；蒸发信息 | 废水或明确未解决的水量平衡差额 |  |
| `calc_shared_energy` | 共享公用工程 | 可归属能源 = 表计总量 × 已声明因果分配份额；报告驱动因素并核对至表计总量的 100% | 表计总量；运行时间、负荷、质量-时间或其他因果驱动因素 | 按载能体归属至过程的能源 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 纳入的制冷系统 | 制冷剂损失 = 期间充注 - 有记录回收 - 期末库存增加 + 设备充注量的期初至期末减少；采用设施一致的质量平衡惯例 | 制冷剂采购、充注、回收、库存和设备维护记录 | 分配至产品前的 kg 制冷剂排放 |  |
| `calc_direct_emissions` | 场内燃料燃烧或产烟 | 物质排放 = 实测排放，或燃料数量 × 有来源的物质特定因子 × 适用控制调整 | 燃料数量；实测排放或有来源因子；控制记录 | 按物质记录的 kg 基本流 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和入厂物料 | 在源记录和数据集元数据中保持物种或物种组、解剖产品、来源、入厂状态、保藏路线、包装、储存条件、批次和净质量基准。 | 供应商规范、批次记录、产品规范、参考流元数据 |
| `dq_technology` | 保藏和包装过程 | 数据应代表实际使用的设备和路线；代理应识别缺失技术并说明其适用理由。 | 过程流程图、设备清单、运行记录、代理说明 |
| `dq_time` | 前景记录 | 声明报告期并覆盖代表性生产；在季节性或活动式生产重大时纳入相应期间；解释停产、异常批次和缺口。 | 带日期记录、生产计划、完整性核对 |
| `dq_geography` | 设施和上游数据集 | 声明设施地域和上游来源地域；评估并披露电力、热力、运输、配料或入厂鱼肝/鱼籽数据集的地域不匹配。 | 场址元数据、供应商来源、数据集元数据、不匹配评估 |
| `dq_completeness` | 清单和质量平衡 | 核对实际路线已识别的所有物料转移、配料、水、能源载体、包装、共产品、废物和直接排放。量化或解释缺失项。 | 质量、水、能源和包装核对；缺口清单 |
| `dq_food_safety_process_identity` | 产品和生产线特定控制 | 保留适用的危害分析和监测证据，以说明实际运行的保藏、包装和储存条件；不得仅从合规性推断环境数量。 | HACCP 或等效计划、监测记录、放行记录（`codex-cxc-52-2003`） |
| `dq_estimate_disclosure` | 暂定数量 | 保留的 `reasoned_estimate` 必须与实测或前景计算数据可区分，说明其对结果的影响，并在评审中优先替换。 | 数据集质量披露、敏感性结果、替换行动 |
| `dq_pef_dimensions` | 数据集质量评估 | 对重要数据评估技术、地域和时间代表性以及精度或不确定性，并记录评估依据。 | 数据质量评估（`eu-pef-2021-2279`） |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求参考数量为 1 kg、产品流 UUID 为 `ab283f96-8c07-4a11-8904-4d5a6542d1fe`、Mass UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66` 且单位为 kg。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 缺少任何必需限定信息，或无法确定鱼肝/鱼籽、物种、路线、包装、储存状态或净质量基准时，完整性校验失败。 | `unsd-cpc-3-0-21227` |
| `validate_route_presence` | 过程清单 | 至少要求干燥、熏制、干盐腌、湿盐腌或盐水浸渍中的一种，并要求每项已声明路线操作出现在过程图和记录中。 | `codex-cxc-52-2003`; `fao-fish-processing-storage` |
| `validate_route_conditional_flows` | 保藏投入和输出 | 声明盐腌或盐水浸渍时要求盐，声明盐水路线时要求配制用水和废盐水核算，直接熏制时要求产烟材料和直接排放审查，干燥时要求能源或环境条件披露。对不适用路线流应明确标记，而不是给出无解释的零。 | `codex-cxc-52-2003`; `fao-fish-processing-storage` |
| `validate_mass_balance` | 每个过程和生产批次 | 检查入厂物料 = 转移产品 + 实测残余物 + 产品损失 + 已解释的质量变化，允许已声明水分增减和有记录库存变化。报告平衡差额和基准。 |  |
| `validate_collection_links` | 前景和计算清单行 | 每项 `foreground_record` 和 `calculated_value` 行均需有效采集协议，并具备重现数值所需的全部计算规则输入。 |  |
| `validate_allocation` | 多输出过程和上游投入 | 要求分配层级、驱动因素、因子、共产品或废物分类、上游鱼肝或鱼籽分配处理，并在使用经济分配时披露敏感性。 | `eu-pef-2021-2279` |
| `validate_food_safety_records` | 保藏、包装和储存过程身份 | 要求适用的产品和生产线特定危害控制记录及实际运行条件记录；不得从本 LCA 校验声称产品合规。 | `codex-cxc-52-2003` |
| `validate_estimate_status` | 暂定范围和数值 | 禁止将 `reasoned_estimate` 表述为实测、有来源、典型或行业允许范围；要求披露并确定替换优先级。 |  |
| `validate_source_integrity` | 来源引用和定量因子 | 要求每个非空 source id 均能在数据源中解析。非完全来自采集记录的排放因子、换算因子或定量约束必须有实际外部来源。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 保藏设施门口保藏鱼肝或鱼籽的前景生产数据集 |
| downstream_use | `secondary_dataset`；在范围和代表性评审后可作 `background_dataset` |
| allowed_use | 与已声明物种或物种组、鱼肝或鱼籽产品、保藏路线、包装、储存条件、地域、时期、净质量基准和上游分配语境匹配的产品、过程或生命周期模型研究 |
| excluded_use | 鲜制、仅冷藏、仅冷冻、罐藏、非鱼类或复合产品；未声明保藏路线；法定食品安全合规声称；没有敏感性分析时跨实质不同的物种、产品形态、技术、包装气氛或储存制度替代 |
| required_metadata | 使用的 canonical PCR id 和版本；产品流 UUID；物种或物种组；鱼肝或鱼籽；上游来源和数据集；入厂状态；实际路线顺序；产品规范；净质量；水分或干燥状态基准；盐或盐水基准；熏制技术；包装材料和气氛；储存温度类别和时长；设施地域；报告期；分配；数据源；估算状态 |
| required_quality_disclosure | 前景覆盖和缺口；质量、水、能源和包装核对；技术、地域和时间代表性；不确定性；代理数据集；上游共产品处理；缺失 UUID；保留的推理估算；食品安全记录可用性；分配和重要估算的敏感性 |
| update_trigger | 物种或来源组合、入厂状态、保藏路线、设备、配方或盐水管理、能源载体、产烟燃料、包装、储存制度、设施、报告期、上游分配、重要数据集、已解析 UUID、有来源基准或重大校验 finding 发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21227` | `official_guidance` | 联合国统计司，Central Product Classification Version 3.0，代码 21227，“Fish livers and roes dried, smoked, salted or in brine”，https://unstats.un.org/unsd/classifications/Econ/cpc，检索日期 2026-08-11 | 产品类别边界和分类映射语境 |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius，CXC 52-2003，Code of Practice for Fish and Fishery Products，https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf，检索日期 2026-08-11 | 鱼和渔业产品过程分解；产品和生产线特定卫生、危害控制、保藏、包装与储存记录 |
| `fao-fish-processing-storage` | `official_guidance` | 联合国粮食及农业组织，“Processing & Storage”，Food Loss and Waste in Fish Value Chains，https://www.fao.org/flw-in-fish-value-chains/value-chain/processing-storage/en/，检索日期 2026-08-11 | 干燥、盐腌、熏制、冷却、储存、废物和损失过程覆盖 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods，CELEX 32021H2279，http://data.europa.eu/eli/reco/2021/2279/oj | 系统边界、分配层级、企业特定数据、数据集质量、代表性和披露规则 |
