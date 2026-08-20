---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-refined
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 精炼油菜籽、芥菜籽及芥末籽油

## 1. 范围与适用性

本 PCR 适用于以油菜籽或芥菜籽生产的精炼固定油前景数据包，其中油菜籽包括低芥酸 canola 品种。默认前景边界是独立精炼厂门：从接收粗油开始，至散装精炼成品油为止。化学精炼和物理精炼均可适用，但必须声明所选路线、原料身份、等级以及实际发生的单元操作。

只有在所声明产品仍为本命名类别中的精炼固定甘油三酯油时，本 PCR 才覆盖食用、饲用或技术级产品。供人类食用的产品应关联适用的产品规格；Codex CXS 210-1999 为菜籽油、低芥酸菜籽油或 canola 油以及芥菜籽油提供国际产品身份依据。本 PCR 本身不构成食品安全或市场法规符合性认证。

默认产品系统不包括粗油、未经精炼而销售的初榨或冷榨油、氢化或酯交换油脂、生物柴油、分离的烯丙基异硫氰酸酯或挥发性芥子油、油籽粕、人造黄油、未以本命名油为参考产品的配方混合物、零售包装、分销、使用和寿命终结。种子种植、油籽破碎、压榨和溶剂萃取由上游粗油数据集表示，不在本精炼厂门前景数据包中重复建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-refined |
| classification_refs | CPC 3.0: 21642 Rape, colza and mustard oil, refined |
| covered_products | 油菜籽精炼固定油；低芥酸菜籽油或 canola 精炼油；白芥、褐芥、黄芥或黑芥籽精炼固定油；已声明的食用、饲用或技术等级 |
| excluded_products | 粗油；未经精炼的初榨或冷榨油；氢化、酯交换或其他化学改性油；生物柴油；挥发性芥子油或烯丙基异硫氰酸酯；油饼和油粕；人造黄油与配方混合物；包装和下游分销 |
| representative_product | 精炼厂门的散装精炼油菜籽油 |
| production_route | 接收命名粗油后采用已声明的化学精炼或物理精炼，通常包括脱胶或预处理、脱色和脱臭；化学中和为路线条件性步骤 |
| market_state | 工厂生产混合、零售包装前的散装液态精炼成品油 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为精炼厂门散装成品供应的精炼油菜籽、canola 或芥菜籽固定油 |
| How much | 净重 1 kg 精炼油 |
| How well | 满足所声明的油品身份、等级、精炼路线和市场规格；食用级油关联适用的命名油与食品安全规格 |
| How long or cycle | 一个生产批次，或已声明日期与平均期的代表性生产周期 |
| reference_flow_link | `refining_train` 过程的参考输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 精炼油菜籽油、芥子油和芥末油 `e30cf6ff-7dfb-4972-affc-6cab3ae17283` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 油料来源：油菜籽、低芥酸 canola 或芥菜籽；物种或商业油品名称；食用、饲用或技术等级；化学或物理精炼路线；粗油预处理状态；生产地域；生产期；散装交付状态；分配处理；适用产品规格 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品、粗油投入、共产品和含油残余物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按场址采用的计量温度及水分或挥发物约定报告净质量；所有质量行归一化到 1 kg 净精炼油。 |
| `energy_carrier_separation` | 电力、蒸汽、热和燃料 | 载能体原生能量属性 | kWh 或 MJ | 电力和各热能载体分别保留采集记录；仅为场址级 BAT 筛查计算而折算最终能源，并保留换算因子。 |
| `water_volume_and_mass` | 工艺水、洗涤水和冷却水 | 已声明的体积或质量属性 | m3 或 kg | 按用途和循环方式记录水；循环冷却水不得计为新鲜水取用，并披露任何密度换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 精炼厂门接收的命名油菜籽、canola 或芥菜籽粗固定油，并声明质量、预处理状态、质量指标、供应地理和上游数据集引用 |
| starting_condition_role | 独立前景精炼流程的上游产品投入 |
| product_classification_scope | CPC 3.0 子类 21642 内的精炼固定油；canonical PCR 含义不由 CPC 所有 |
| recursive_input_rule | 作为返工或调和投入的任何精炼命名油，应记录为产品投入并链接兼容上游数据集；不得在同一精炼流程记录中递归重建其生产 |
| upstream_dataset_requirement | 可追溯的粗油数据集，按适用情况包括种植和油料提取，并披露参考流、地理、技术、分配和数据质量 |
| disclosure | 声明粗油来源与预处理、精炼路线、纳入和旁路单元操作、与压榨的场址集成、能源系统、共产品去向、废水处理、包装排除、生产期以及对默认精炼厂门边界的任何偏离 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | 前景产品系统 | 纳入接收与储存损失、脱胶或预处理、路线条件性的中和、脱色、脱臭、内部循环、能源使用、直接排放、残余物处理、送往处理的废水，以及直至精炼厂门的散装精炼油输出。 | `eu-fdm-bref-2019` |
| `boundary_route_declaration` | 化学和物理精炼 | 声明实际路线。化学精炼包括脱胶或中和、脱色和脱臭；物理精炼包括充分的脱胶或预处理、脱色以及蒸馏脱酸或脱臭。不得添加未实际发生的路线条件性操作。 | `eu-fdm-bref-2019` |
| `boundary_upstream_crude_oil` | 粗油投入 | 种子种植、破碎、压榨和溶剂萃取保留在链接的上游粗油数据集中；若集成场址研究明确扩展边界，则应单独报告新增过程。 | `eu-fdm-bref-2019` |
| `boundary_material_completeness` | 所列材料流和排放流 | 采集本 PCR 所列全部材料流。任何省略均须识别、尽可能量化、证明环境不显著并纳入质量披露；不得用笼统截断声明隐藏省略流。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `refining_train` | 命名籽油精炼流程 | 必需（`required`） | 始终纳入；声明化学或物理路线及所有旁路操作 | 从接收粗油到散装精炼成品油的前景精炼 | 精炼厂门净重 1 kg 精炼油 |

即使场址发布一个聚合精炼过程，`refining_train` 记录也应保留脱胶或预处理、使用时的中和、脱色和脱臭阶段测量值。未规定精炼 process UUID，是因为没有 Tiangong 已评审候选同时满足本产品范围和一致定量参考。

### 过程：命名籽油精炼流程（`refining_train`）

#### 输入

##### 产品流

###### 接收的命名粗油（`crude_named_oil`）

记录进入精炼厂的油菜籽、canola 或芥菜籽粗固定油，包括供应商、产地、物种或商业名称、脱胶状态、可用时的游离脂肪酸和磷指标，以及链接的上游数据集。

- 选定流：场址特定的命名粗油产品流；按已声明油品身份和预处理选择 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次或周期的实测净粗油投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净精炼油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：
- 数量范围：暂定粗油投入质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.3
  - 单位：kg/kg 精炼油
  - 基准：每 1 kg 净精炼油输出的粗油投入；在取得已评审场址证据前刻意采用宽范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺水与洗涤水（`refinery_water`）

分别采集脱胶、中和洗涤、蒸汽补水、清洗和冷却的新鲜水与回用水。该范围是年度场址级筛查，不得代替计量的前景数据。

- 选定流：场址特定工艺水产品流；按水源和处理状态选择 UUID
- 流属性/单位：Volume / m3
- 数量规则：分配至精炼流程的计量净取水量，不含循环体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 tonne 净精炼油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：独立精炼特定用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.15
  - 上限：0.9
  - 单位：m3/t 精炼油
  - 基准：独立精炼厂年度每吨产油净用水量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bat-2019`

###### 中和碱（`neutralising_alkali`）

仅在发生化学中和时纳入氢氧化钠或实际使用的碱；保留浓度，并将清单同时换算为溶液质量和活性碱质量。

- 选定流：场址特定氢氧化钠或其他碱产品流；按浓度和市场状态选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：根据批次投料记录计算的实测溶液消耗与活性碱质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 tonne 进入化学中和的油
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_dosing`
- 来源：`eu-fdm-bref-2019`
- 数量范围：化学中和的氢氧化钠用量
  - 范围角色：典型范围（`typical_range`）
  - 下限：1
  - 上限：6
  - 单位：kg NaOH/t 油
  - 基准：每吨进入化学中和的油所用活性氢氧化钠
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bref-2019`

###### 脱胶酸（`degumming_acid`）

在酸脱胶或预处理使用时纳入磷酸或柠檬酸。保留酸的身份和浓度；没有独立计算字段时不得合并不同酸。

- 选定流：场址特定磷酸或柠檬酸产品流；按酸身份和浓度选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：根据投料记录计算的实测酸溶液消耗与活性酸质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 tonne 采用所声明酸处理的油
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_dosing`
- 来源：`eu-fdm-bref-2019`
- 数量范围：脱胶活性酸用量
  - 范围角色：典型范围（`typical_range`）
  - 下限：0.1
  - 上限：2.0
  - 单位：kg 活性酸/t 油
  - 基准：磷酸范围为 0.1-2.0 kg/t，柠檬酸范围为 0.1-1.0 kg/t；声明柠檬酸时使用较窄上限
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bref-2019`

###### 脱色土与助滤剂（`bleaching_media`）

分别记录脱色土、活性炭和助滤剂。本行覆盖脱色土质量；其他介质在前景记录中保持为独立产品流。

- 选定流：场址特定脱色土产品流；按活化或未活化等级选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：根据批次配方或料仓质量平衡计量的脱色土投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 tonne 进入脱色的油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_dosing`
- 来源：`eu-fdm-bref-2019`
- 数量范围：脱色土投加筛查
  - 范围角色：典型范围（`typical_range`）
  - 下限：1
  - 上限：30
  - 单位：kg/t 油
  - 基准：每吨进入脱色的油使用 0.1-3 percent 脱色土
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bref-2019`

###### 电力与热能载体（`refining_energy`）

在计算最终能源总量前，分别采集电力、蒸汽、直接燃料和外购热。该筛查区间是独立精炼厂年度总量，不是单批默认数量。

- 选定流：场址特定电力、蒸汽、热和燃料产品流；每种载体分别选择 UUID
- 流属性/单位：载能体原生能量属性 / kWh 或 MJ
- 数量规则：分配至精炼的计量或发票核对最终能源，按载体分开并采用有记录的换算因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 tonne 净精炼油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：独立精炼最终能源总量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：0.45
  - 单位：MWh/t 精炼油
  - 基准：独立精炼厂年度每吨产油最终能源消耗
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bat-2019`

##### 废物流

本 PCR 不规定废物投入。若接收场外残余物协同处理，应按废物身份、来源、污染控制和处理功能分别记录为废物投入；不得与粗油投入合并。

##### 基本流

###### 直接取水（`direct_water_withdrawal`）

只有直接从环境取用的水记录为基本流输入。采购的市政或工业用水仍作为产品流投入 `refinery_water`。

- 选定流：场址特定淡水或其他环境水体流；按来源环境分区选择 UUID
- 流属性/单位：Volume / m3
- 数量规则：分配至精炼流程的计量直接取水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 tonne 净精炼油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：

#### 输出

##### 产品流

###### 精炼命名成品油（`refined_named_oil`）

该流是定量参考输出。其应符合声明的油品身份、等级和产品规格，并在精炼损失后、排除的零售包装前计量。

- 选定流：精炼油菜籽油、芥子油和芥末油 `e30cf6ff-7dfb-4972-affc-6cab3ae17283`
- 流属性/单位：Mass / kg
- 数量规则：归一化参考输出严格为 1 kg 净精炼油
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：参考输出恒等
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：归一化参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 可销售精炼共产品（`refining_coproducts`）

只有在有记录的有益用途或市场且作为产品离开系统时，才将胶质或卵磷脂、皂脚或回收酸化油、脱臭馏出物分别记录为产品输出。每项输出保留身份、质量、去向和收入证据。

- 选定流：每项已声明输出的场址特定共产品流；胶质或卵磷脂、皂脚或酸化油、脱臭馏出物分别选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：按共产品身份计量销售或转移质量；未生产或按废物处理的共产品为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净精炼油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_residue_mass`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定可销售共产品合计筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg 精炼油
  - 基准：每 1 kg 净精炼油的可销售精炼共产品合计；以已评审路线特定证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 不可销售精炼残余物（`refining_residues`）

按废物身份和去向分别记录废脱色土、不可销售胶质或皂脚、助滤剂、污泥和不合格油。废脱色土应保留含油量和自热风险信息。

- 选定流：每种残余物的场址特定废物流；按废物身份和处理去向分别选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：按残余物类型计量外运质量或罐体与容器质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净精炼油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_residue_mass`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定残余物产生筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 精炼油
  - 基准：每 1 kg 净精炼油的不可销售残余物合计；以已评审路线特定证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 精炼废水（`refinery_wastewater`）

将送往场内或场外处理的工艺废水与未受污染冷却水排放分开记录。适用时包括流量、接收处理和实测污染物负荷。

- 选定流：场址特定废水流；按废水身份和处理去向选择 UUID
- 流属性/单位：Volume / m3
- 数量规则：分配至精炼流程的计量废水排放，按水流和处理去向分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 tonne 净精炼油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定废水体积筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：m3/t 精炼油
  - 基准：每吨净精炼油的工艺废水总量；以已评审路线特定证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 精炼直接排放（`direct_refining_emissions`）

量化精炼流程导致的场址排放，包括燃烧排放以及脱臭或真空系统的任何残余挥发性有机物。不得重复计算外购能源或场外处理数据集中已有的排放。

- 选定流：实际空气或水环境分区的场址特定基本流；按每种实测物质和环境分区选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据实测活动数据和有引用的方法因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 tonne 净精炼油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-fdm-bat-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 精炼流程与共享能源 | 首先细分阶段测量并将材料和能源记录直接归属精炼流程。仅在附加功能和被替代产品能够一致表示时使用系统扩展。 | `eu-pef-2021` |
| `allocation_output_status` | 胶质、卵磷脂、皂脚、酸化油、脱臭馏出物、废土和残余物 | 仅在输出具有有记录的有益用途或市场并作为产品离开边界时，才将其视为共产品；否则将其归类为废物并纳入处理，不得仅为获得分配抵扣而改变分类。 | `eu-fdm-bref-2019` |
| `allocation_physical_residual` | 存在多个可销售油源输出时未细分的负荷 | 若细分和有依据的系统扩展均不可行，则按精炼油与可销售油源共产品的实测干基或净质量分配剩余共享负荷。分母不包括废水、循环水和废物。 | `eu-pef-2021`; `mass-balance-identity` |
| `allocation_disclosure` | 发布的前景数据包 | 报告输出质量、分配比例、共产品状态与去向、采用经济敏感性时的价格期、排除的废物处理负荷，以及无抵扣敏感性下的结果变化。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `refining_train` | 粗油投入与内部油品转移 | 地磅、校准罐表、批次单和库存核对 | 材料身份；供应商；批次；期初库存；接收；转移；期末库存；净质量；温度；水分或挥发物约定 | 将校准质量或体积密度记录核对至每个批次和月度库存 | kg | 每次接收和批次；月度核对 | 至少连续 12 个代表性月份或完整声明周期 | 为所报告精炼厂输出供料的所有单元 | 按油品身份汇总净投入并仅分配至合格输出批次；记录库存变化和返工 | 校准证书；罐容表；称重票；签署的核对表；规格或检验报告 |
| `cp_water_records` | `refining_train` | 新鲜水、回用水、冷却水和直接取水 | 水表与水平衡记录 | 来源；仪表 id；期初和期末读数；取水；循环；排放；用途；批次或期间 | 读取源表和分表；核对新鲜水、回用、蒸发、产品夹带和排放 | m3 | 每日或批次读数；月度核对 | 与产品输出相同期间 | 整个精炼厂，并以分表分配至精炼 | 净新鲜水等于取水减去外输或返还的未污染水；循环体积单独披露 | 仪表校准；能源账单；水平衡签核 |
| `cp_chemical_dosing` | `refining_train` | 碱、酸、脱色土、活性炭和助滤剂 | 配方、投料仪表、采购和库存记录 | 化学品身份；浓度；批号；溶液总质量；活性分数；批次；期初和期末库存 | 将自动投料或称量批次加料与采购及库存记录核对 | kg | 每批次；月度核对 | 与产品输出相同期间 | 范围内所有精炼线 | 活性试剂等于溶液质量乘经认证的活性质量分数；各种化学品分别保留 | 投料校准；供应商证书；批次配方；库存核对 |
| `cp_energy_records` | `refining_train` | 电力、蒸汽、外购热和燃料 | 仪表、发票、锅炉日志和能源平衡记录 | 载能体；仪表 id；数量；单位；热值；蒸汽状态；生成效率；分配键；期间 | 有分表时读取分表并与发票或燃料库存核对 | kWh 或 MJ | 连续或每日；月度核对 | 至少连续 12 个代表性月份或完整周期 | 精炼流程及已声明共享能源设施 | 保留各载能体；以有记录的因子换算最终能源；在任何分配前按计量需求分配共享能源 | 仪表校准；发票；锅炉日志；换算因子记录；能源平衡评审 |
| `cp_output_and_residue_mass` | `refining_train` | 精炼油、共产品和固液残余物 | 罐体、秤、发运、销售和废物转移记录 | 输出身份；产品或废物状态；批次；净质量；水分；适用时含油量；去向；收入或处置路线 | 核对生产罐、散装发运、共产品销售和废物转移 | kg | 每批次或发运；月度核对 | 与投入和能源记录相同期间 | 范围内所有输出和残余物处理区域 | 按身份和去向汇总；可销售共产品与废物及内部循环分开 | 校准秤或罐容表；发运单；销售记录；废物转移联单；实验室含油量结果 |
| `cp_wastewater_records` | `refining_train` | 工艺废水与污染物负荷 | 流量计、混合样和处理记录 | 水流；流量；COD；BOD；悬浮物；总氮；总磷；油脂；pH；处理去向 | 按适用许可或场址监测计划计量排放并采样 | m3 和 kg 污染物 | 流量连续或每日；实验室频率按变异性论证 | 与产品输出相同期间和代表性运行条件 | 范围内所有精炼废水出口 | 污染物负荷等于浓度乘以兼容的实测流量；未污染冷却水分开 | 仪表校准；认可实验室报告；样品流转记录；处理运营方记录 |
| `cp_direct_emissions` | `refining_train` | 直接空气和水排放 | 烟道测试、连续监测、泄漏记录和方法计算 | 物质；环境分区；浓度；流量；运行时间；燃料活动；因子；治理状态 | 有条件时采用实测排放和气流；否则根据采集活动和有引用因子计算 | kg | 许可频率和重大过程变化后 | 与产品输出相同期间或有依据的代表性测试 | 服务精炼流程的所有直接排放点 | 对实测速率按运行时间积分，或以实测活动乘有引用因子；避免与能源数据集重复 | 认可测试报告；监测 QA；活动记录；因子引用；不确定性说明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个清单行 | 归一化数量 = 期间数量 / 同期合格净精炼油输出 | 期间流量；净精炼油输出 | 每 1 kg 或 1 tonne 精炼油的数量 | `mass-balance-identity` |
| `calc_active_reagent` | 碱和酸溶液 | 活性试剂质量 = 溶液质量 x 认证的活性质量分数 | 溶液质量；证书浓度 | kg 活性试剂 | `eu-fdm-bref-2019` |
| `calc_final_energy` | 精炼能源筛查 | 最终能源总量 = 外购电力 + 外购热 + 燃料低位热值投入 + 净输入蒸汽能量；保留载能体行 | 计量载能体数量；热值；蒸汽焓；输出能源 | 每吨精炼油的 MWh 最终能源 | `eu-fdm-bat-2019` |
| `calc_oil_phase_closure` | 含油投入与输出 | 闭合率 =（精炼油 + 共产品含油 + 废物含油 + 实测油损失）/ 粗油投入 x 100 | 粗油投入；输出质量；实测含油量；已识别损失 | 油相质量闭合率百分比 | `mass-balance-identity` |
| `calc_physical_allocation` | 剩余共享负荷 | 输出 i 分配比例 = 可销售输出 i 净质量 / 所有可销售输出净质量之和 | 精炼油与可销售共产品实测质量 | 合计为 1 的输出特定分配比例 | `eu-pef-2021`; `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和粗油投入 | 对每个贡献批次保留命名油料来源、物种或商业名称、声称时的低芥酸状态、等级、路线、预处理状态和适用规格。 | 产品规格；检验报告；供应商声明；批次谱系 |
| `dq_measurement` | 质量、水、能源、化学品和输出 | 对重要量采用校准测量；记录分辨率、换算因子、库存修正和不确定性；估算应单独标记并开展敏感性分析。 | 校准证书；仪表台账；核对记录；不确定性记录 |
| `dq_temporal` | 发布平均值 | 采用至少连续 12 个代表性月份或完整声明周期；解释停机、异常批次以及季节或原料变化。 | 生产日历；批次清单；维护和异常日志 |
| `dq_completeness` | 前景清单 | 将所有实测粗油、化学品、能源和水记录与所选生产基准核对，并明确评估每项遗漏或未核对余额的环境显著性。 | 按流类别的完整性核对；遗漏登记；评审签署 |
| `dq_route_and_site` | 技术和地理 | 识别化学或物理精炼、实际脱胶、中和、脱色和脱臭配置、真空与废水系统、场址集成和地理。 | 工艺流程图；设备清单；场址说明；运营方确认 |
| `dq_source_currency` | 外部范围和方法规则 | 记录来源版本和检索日期；将 BAT 范围作为 QA 筛查，并在重大技术、原料或法规变化后重新评估适用性。 | 来源登记；适用性评审；变更日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 参考输出 UUID 应为 `e30cf6ff-7dfb-4972-affc-6cab3ae17283`，其定量流属性应为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，归一化数量严格为 1 kg。 | |
| `validation_product_scope` | 产品身份 | 若数据包未声明命名油料来源、等级、精炼路线、粗油预处理、地理、期间和散装交付状态，或表示本范围外的粗油、氢化油、酯交换油、挥发性油、混合物或生物柴油，则拒绝。 | `codex-cxs-210-1999`; `unsd-cpc-v3-2025` |
| `validation_route_inventory` | 过程完整性 | 化学精炼应包括脱胶或中和、脱色和脱臭的采集记录。物理精炼应包括充分预处理或脱胶、脱色以及蒸馏脱酸或脱臭的采集记录。旁路步骤需明确说明理由。 | `eu-fdm-bref-2019` |
| `validation_mass_closure` | 油相质量平衡 | 调查 95-105 percent 之外的油相闭合率；不得通过改变固定参考输出或隐藏未测残余物来强制闭合。该区间是暂定 QA 容差，不是允许的过程损失。 | `mass-balance-identity` |
| `validation_bat_screens` | 独立精炼厂年度总量 | 对最终能源超出 0.1-0.45 MWh/t 油或净用水超出 0.15-0.9 m3/t 油进行标记，但不自动拒绝。在认定数据错误前核实装置类型、边界、路线和运行背景。 | `eu-fdm-bat-2019` |
| `validation_coproduct_allocation` | 共产品和废物 | 分配比例在舍入范围内合计为 1；每项纳入的共产品均有实测质量和有记录的有益去向，每项排除的残余物均链接废物处理且不取得分配抵扣。 | `eu-pef-2021`; `eu-fdm-bref-2019` |
| `validation_no_double_count` | 上游和下游数据集 | 不得重复计算粗油数据集中已有的种子种植、破碎或提取负荷，不得重复计算外购能源数据集中已有的直接排放，也不得同时在场内和场外处理数据集中计算废水处理。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 独立精炼厂门命名精炼油的前景生产数据集 |
| downstream_use | 完成方法学和翻译评审及发布后，可作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 当地理、期间、等级、路线、上游粗油数据集和分配兼容时，用于需要精炼厂门散装油菜籽、canola 或芥菜籽固定油的产品与过程 LCA |
| excluded_use | 粗油或初榨油；农场门种子；未明确扩展边界的集成破碎与精炼；氢化或酯交换油；生物柴油；挥发性芥子油；零售包装油；未单独核验的比较性食品安全或法规符合性声明 |
| required_metadata | PCR id 和版本状态；参考流 UUID；命名油料来源及适用时的低芥酸状态；等级和规格；化学或物理路线；粗油预处理与上游数据集；地理；技术；生产期；散装交付状态；共产品状态与分配；废水处理；数据所有者和评审状态 |
| required_quality_disclosure | 前景占比；测量与估算占比；时间覆盖；按流类别的完整性；质量闭合；能源和水 BAT 筛查结果；省略流；使用的暂定推理范围；来源适用性；分配敏感性；未解决 UUID |
| update_trigger | 原料身份或产地、精炼路线或设备、能源或水系统、共产品去向、分配、产品规格、法规、场址地理发生重大变化，或归一化主要投入或输出超出已记录的不确定性或过程控制限 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | Codex Alimentarius，CXS 210-1999《命名植物油标准》，官方标准清单标示 2024 年最后修订及官方正文；https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ ；检索日期 2026-08-10 | 油菜籽、低芥酸或 canola 及芥菜籽油身份；食用油适用性与产品规格关联 |
| `unsd-cpc-v3-2025` | `official_guidance` | 联合国统计司，Central Product Classification Version 3.0 explanatory notes，子类 21642；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ；检索日期 2026-08-10 | 分类背景与命名精炼油产品边界 |
| `eu-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，JRC118627，2019；https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf ；检索日期 2026-08-10 | 化学和物理精炼序列；脱胶、中和、脱色和脱臭；试剂范围；共产品、残余物和排放 |
| `eu-fdm-bat-2019` | `standard` | Commission Implementing Decision (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论，尤其第 10 节油籽加工和植物油精炼；https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj ；检索日期 2026-08-10 | 独立精炼能源和水 QA 筛查；监测与环境绩效背景 |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods，Annex I；https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 ；检索日期 2026-08-10 | 多功能层级、分配披露、材料完整性、数据采集和质量原则 |
| `mass-balance-identity` | `method_factor` | 应用于前景精炼流程实测油相的质量守恒恒等式 | 参考归一化、油相闭合和物理质量分配计算 |
