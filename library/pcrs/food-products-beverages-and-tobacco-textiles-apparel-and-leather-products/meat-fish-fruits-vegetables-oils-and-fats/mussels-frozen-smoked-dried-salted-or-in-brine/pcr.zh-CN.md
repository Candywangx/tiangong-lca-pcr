---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.mussels-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 贻贝，冷冻、烟熏、干制、盐渍或盐水浸泡

## 1. 范围与适用性

本 PCR 适用于带壳或去壳的食用贻贝，其上市前采用且仅采用一条声明的主要保藏路线：冷冻、烟熏、干制、盐渍或盐水浸泡。烟熏产品可以在烟熏前或烟熏过程中熟制。食用贻贝粉、粗粉和团粒仅在其保藏路线和可销售质量基准仍可追溯至本范围时纳入。

活、鲜或冷藏贻贝，其他加工或保藏的贻贝产品，不可食用的粉、粗粉或团粒，不适于人类食用的死贻贝，以及不属于上述五条声明路线的产品均不纳入。养殖或野生捕捞由上游数据集表示，不在前景加工边界内重复构建。

对具体前景数据包而言，五条保藏路线是互斥备选路线。除非实际上市产品有意采用多种处理，否则不得叠加冷冻、烟熏、干制、盐渍和盐水浸泡；这类组合处理在单独评审前不属于本 PCR。不同路线的水、能源、盐或盐水、烟熏介质、储存、得率和废物记录不得相互平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.mussels-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21263，exact |
| covered_products | 带壳或去壳、经冷冻、烟熏、干制、盐渍或盐水浸泡的食用贻贝；烟熏前或烟熏过程中可以熟制的烟熏贻贝；可追溯至所纳入路线的食用贻贝粉、粗粉和团粒 |
| excluded_products | 活、鲜或冷藏贻贝；其他加工或保藏的贻贝；不可食用的贻贝粉、粗粉或团粒；死的或不适于食用的贻贝；未经单独评审的组合保藏路线 |
| representative_product | 来自一条声明保藏路线的合格可销售贻贝产品 |
| production_route | 接收与整理；冷冻、烟熏、干制、盐渍或盐水浸泡五选一；包装与放行；需要时进行受控储存 |
| market_state | 加工设施门口的食用成品，已声明保藏路线、带壳状态和质量基准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过一条声明的纳入保藏路线生产的合格可销售贻贝食品 |
| How much | 按适用路线特定计量基准计量的 1 kg 贻贝产品净重 |
| How well | 符合声明的产品规格和适用食品安全放行要求，并记录路线、带壳状态、可食部分基准及适用的组成或沥干限定信息 |
| How long or cycle | 加工设施门口的一个生产批次；如发生受控储存，储存时长另行报告 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 贻贝，冷冻、烟熏、干制、盐渍或盐水浸泡 `b40a9b04-158a-4482-8c52-022d30f1a99a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | preservation_route; species_or_species_mix; shell_state; edible_portion_basis; packaging_inclusion; moisture_content_if_dried; salt_content_or_brine_strength_if_salted_or_in_brine; glaze_presence_and_net_mass_excluding_glaze_if_frozen; drained_weight_basis_if_packed_in_brine; smoking_and_cooking_state_if_smoked |

构建前景数据包时，每项适用的必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。该 Tiangong 流是精确的通用 CPC 21263 产品流；上述限定信息用于使具体产品实例无歧义。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 合格可销售产品，不含包装。仅当产品以带壳状态声明并销售时才计入壳重；否则采用可食贻贝肉质量。 |
| `frozen_net_mass` | 冷冻路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg 参考质量不含冰衣和包装；冰衣用水与包装分别记录。 |
| `brine_drained_mass` | 盐水包装产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用按声明且可复现的沥干程序得到的贻贝产品沥干质量；包装盐水另行记录，并披露沥干程序和盐水浓度。 |
| `route_composition_basis` | 干制、盐渍、盐水浸泡或烟熏路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在放行时计量产品；干制产品报告含水率，盐渍或盐水浸泡产品报告盐含量或盐水浓度，烟熏产品报告烟熏与熟制状态。带壳状态和质量/组成基准未协调时不得跨路线比较。 |
| `packaging_separation` | 所有路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 包装纳入生产清单，但绝不计入 1 kg 产品质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工设施接收的贻贝，已声明物种或物种组合、来源、活/生/鲜/冷藏/冷冻状态、带壳状态和接收质量 |
| starting_condition_role | 前景整理与保藏的上游产品投入 |
| product_classification_scope | 输出限于 CPC 3.0 21263 纳入的通用食用贻贝产品和一条声明的保藏路线 |
| recursive_input_rule | 若使用已纳入的保藏贻贝产品作为投入，则将其作为带兼容数据集的上游产品流记录，不在接收过程内重新展开其保藏清单 |
| upstream_dataset_requirement | 对跨越研究边界的贻贝生产或捕捞、接收前体、能源载体、保藏材料、包装、供水、至工厂运输和废物处理，要求可追溯的上游数据集 |
| disclosure | 声明地域、技术、报告期、物种、来源、带壳状态、保藏路线、得率基准、质量和组成基准、包装、储存条件、截断、代理、分配和所有推理估算 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_route` | 前景加工 | 纳入接收/整理、所选择的单一保藏路线、包装/放行，以及截至声明设施门口实际发生的受控储存。 | codex-cxc-52-2003; eu-pef-2021 |
| `sb_route_exclusivity` | 保藏备选路线 | 冷冻、烟熏、干制、盐渍和盐水浸泡作为互斥备选路线建模，除非有意组合的产品已单独评审；不得平均路线清单。 | unsd-cpc-30-21263; codex-cxc-52-2003 |
| `sb_upstream_completeness` | 上游投入 | 将所有重要产品与服务投入连接到代表性上游数据集并披露排除或代理；不得重复上游保藏贻贝过程。 | eu-pef-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_preparation` | 原料贻贝接收与整理 | required | 始终 | 前景接收、清洗、分级及适用的去壳或修整 | kg 整理后贻贝 |
| `route_preservation` | 路线特定保藏 | required | 冷冻、烟熏、干制、盐渍或盐水浸泡五选一 | 前景保藏 | kg 保藏后贻贝 |
| `packing_and_release` | 包装与放行 | required | 始终 | 前景包装、质量放行和参考产品输出 | 1 kg 可销售产品 |
| `controlled_storage` | 受控储存 | conditional | 设施门口前发生冷冻、冷藏、湿度控制或其他主动储存时纳入 | 前景存放 | kg 包装产品和储存时长 |

以下推理估算范围有意设得宽泛，仅为候选阶段筛查辅助，不是发布默认值或产品规格。它们仅在暂时缺少直接的路线与场址特定记录时适用。当选定代表性路线和设施、获得供应商/场址记录，或已经计量至少三个代表性生产批次时，必须替换。记录超出范围会触发复核与披露，而不是自动以估算值替换实测值。

### 过程：原料贻贝接收与整理（`raw_material_preparation`）

#### 输入

##### 产品流

###### 接收贻贝（`received_mussels`）

记录进入整理过程的贻贝实测质量和声明状态，包括带壳状态与来源。

- 选定流：接收的食用贻贝
- 流属性/单位：Mass / kg
- 数量规则：实测接收质量，并归一化至整理后输出和最终参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`
- 数量范围：暂定接收贻贝筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 最终参考产品
  - 基准：每 1 kg 最终产品的接收质量，取决于路线、带壳状态和得率
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理公用工程（`preparation_utilities`）

按实际流和单位分别记录清洗、暂养、分级、去壳及清洁的水和能源。

- 选定流：工艺用水和整理能源载体，各自单独记录
- 流属性/单位：水采用 Mass / kg；能源采用 Energy / kWh 或能源载体特定单位
- 数量规则：分配至批次的计量或发票推导用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后贻贝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`
- 来源：codex-cxc-52-2003
- 数量范围：暂定公用工程筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 水或 kWh 能源/kg 整理后贻贝，按流分别解释
  - 基准：宽泛的候选阶段公用工程筛查；绝不合计不同单位
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 整理后贻贝（`prepared_mussels`）

记录转移至所选保藏路线的整理后贻贝，保持带壳和可食部分基准不变，或明确记录换算。

- 选定流：整理后贻贝
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`

##### 废物流

###### 整理废物与废水（`preparation_losses`）

壳、不合格贻贝、固体和废水即使共用此角色，也应按不同废物流分别记录。

- 选定流：按去向分列的整理废物
- 流属性/单位：Mass / kg
- 数量规则：按类型和处理去向实测或通过质量平衡计算废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后贻贝
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_batch`
- 数量范围：暂定整理损失筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 整理后贻贝
  - 基准：按去向分列前的合计湿废物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：路线特定保藏（`route_preservation`）

#### 输入

##### 产品流

###### 转入保藏的整理后贻贝（`preservation_feed`）

仅记录进入所选路线的原料，并保留其整理批次关联。

- 选定流：整理后贻贝
- 流属性/单位：Mass / kg
- 数量规则：实测路线进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_batch`

###### 路线保藏投入（`preservation_inputs`）

分别记录每项实际投入：冷冻产品的制冷或冷冻能源；烟熏产品的烟熏燃料或介质及能源；干制产品的热能与气流能源；盐渍产品的盐；或盐水浸泡产品的盐、水和配制盐水。

- 选定流：路线特定能源载体与保藏材料，各自单独记录
- 流属性/单位：原始流属性与单位，能源可额外以 kWh 报告
- 数量规则：针对唯一所选路线的计量、采购或批次配方数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏后贻贝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_batch`
- 来源：codex-cxc-52-2003
- 数量范围：暂定路线投入筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 材料或 kWh 能源/kg 保藏后贻贝，按流分别解释
  - 基准：宽泛的路线特定候选筛查；不得合计不同单位，也不得应用于未选择路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 保藏后贻贝（`preserved_mussels`）

记录保藏后输出质量，并附所选路线及适用的含水率、盐/盐水、冰衣、带壳、沥干和烟熏/熟制限定信息。

- 选定流：路线限定的保藏贻贝
- 流属性/单位：Mass / kg
- 数量规则：路线完成时的实测保藏输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_batch`
- 数量范围：暂定路线得率筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：2
  - 单位：kg/kg 整理后贻贝
  - 基准：最终包装前、取决于路线的输出与进料质量比
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 保藏废物（`preservation_wastes`）

按实际路线和去向分别记录废盐水、废水、冷凝物、烟熏残渣、不合格品和规格外产品。

- 选定流：按类型和去向分列的路线特定保藏废物
- 流属性/单位：Mass / kg
- 数量规则：实测或通过质量平衡计算的路线废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏后贻贝
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_batch`
- 来源：codex-cxc-52-2003
- 数量范围：暂定保藏废物筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 保藏后贻贝
  - 基准：按废物类型分列前的湿路线废物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 路线直接排放（`direct_route_emissions`）

仅在直接烟气、燃烧、颗粒物或制冷剂排放在设施处跨越环境边界时记录其实测值或计算值；不得重复已在上游表示的处理排放。

- 选定流：路线特定直接基本流排放，各自单独记录
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或使用有记录的因子依据采集的燃料或制冷剂记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏后贻贝
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_batch`
- 数量范围：暂定直接排放筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 保藏后贻贝，按单项基本流计
  - 基准：现场直接排放的宽泛候选阶段筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装与放行（`packing_and_release`）

#### 输入

##### 产品流

###### 转入包装的保藏贻贝（`packing_feed`）

按相同路线和质量限定信息记录转入包装的保藏产品实测质量。

- 选定流：路线限定的保藏贻贝
- 流属性/单位：Mass / kg
- 数量规则：实测包装进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_batch`

###### 包装材料（`packaging_materials`）

按材料分别记录一级、二级和三级包装的采购或领用实测质量；所有包装均不计入参考产品质量。

- 选定流：包装材料，各自单独记录
- 流属性/单位：Mass / kg
- 数量规则：包装领用质量减去退回的可用库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_batch`
- 来源：eu-pef-2021
- 数量范围：暂定包装筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg/kg 最终参考产品
  - 基准：每 1 kg 产品投放市场的全部包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 合格可销售参考产品（`reference_product`）

这是通过放行检查并进行路线特定质量调整后的定量参考输出。

- 选定流：贻贝，冷冻、烟熏、干制、盐渍或盐水浸泡 `b40a9b04-158a-4482-8c52-022d30f1a99a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明计量基准计量的恰好 1 kg 合格可销售产品净重
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：eu-pef-2021

##### 废物流

###### 包装不合格品与包装废物（`packing_waste`）

按处理去向分别记录规格外产品以及未使用或损坏的包装。

- 选定流：按材料和去向分列的包装废物
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_batch`
- 数量范围：暂定包装废物筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 最终参考产品
  - 基准：分列前的产品废物和包装废物合计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：受控储存（`controlled_storage`）

#### 输入

##### 产品流

###### 进入储存的包装产品（`storage_feed`）

记录进入主动储存的包装产品，并保留其路线和批次关联。

- 选定流：包装后的路线限定贻贝产品
- 流属性/单位：Mass / kg
- 数量规则：进入受控储存的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个储存批次
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`

###### 储存能源（`storage_energy`）

按实际时长记录计量的制冷、冷冻、通风、湿度控制或其他主动储存能源；未发生主动储存时不纳入本过程。

- 选定流：储存能源载体，各自单独记录
- 流属性/单位：Energy / kWh 或能源载体特定单位
- 数量规则：按储存质量和时间分配的计量或发票推导能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 产品和声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`
- 来源：codex-cxc-52-2003
- 数量范围：暂定储存能源筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 产品
  - 基准：在声明时长内、截至设施门口的主动储存
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 储存后可销售产品（`stored_product`）

记录离开受控储存的可销售产品；归一化至参考流前，必须核对损失以及冰衣、含水率或沥干质量变化。

- 选定流：贻贝，冷冻、烟熏、干制、盐渍或盐水浸泡 `b40a9b04-158a-4482-8c52-022d30f1a99a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开储存的实测可销售净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个储存批次
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`

##### 基本流

###### 储存期间制冷剂损失（`storage_refrigerant_loss`）

仅对边界内制冷设备记录排入空气的制冷剂损失，并采用披露的物质特定方法依据充注与维修记录计算。

- 选定流：排入空气的制冷剂，按物质区分
- 流属性/单位：Mass / kg
- 数量规则：依据设备充注和维修记录计算损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 产品和声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`
- 数量范围：暂定制冷剂损失筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 储存产品
  - 基准：现场制冷剂损失的宽泛候选阶段筛查
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有前景过程 | 尽可能通过细分独立计量的作业并将路线特定投入、输出、废物和排放直接归属来避免分配。 | eu-pef-2021 |
| `allocation_residuals` | 壳、不合格品、回收材料或其他共产品 | 首先按适用研究规则区分废物与共产品。将处理负担归于废物；对共产品，在可辩护时采用有记录的物理因果关系，否则采用经济分配并披露价格、期间、地域和敏感性。 | eu-pef-2021 |
| `allocation_no_cross_route` | 共用设备或公用工程 | 共用服务仅在报告期内实际使用该服务的产品之间分配；不得把未选保藏路线的负担分给所选路线。 | eu-pef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preparation_batch` | `raw_material_preparation` | 接收质量、公用工程、整理后输出、废物与废水 | 批次单、秤量记录、仪表、发票、废物转移联单 | batch_id; species; origin; received_condition; shell_state; input_mass; water; energy_by_carrier; prepared_mass; waste_by_type | 经校准的秤和仪表，并与批次记录核对 | kg; kWh; 能源载体特定单位 | 每批，并每月核对 | 代表性报告年或披露的生产期 | 每个加工设施 | 按流求和，并按指定基准除以合格整理后输出或最终输出 | 校准记录、发票、批次追溯、废物凭证 |
| `cp_preservation_batch` | `route_preservation` | 路线进料、路线投入、保藏后输出、废物与直接排放 | 批次配方、仪表、秤、过程日志、实验室结果 | batch_id; preservation_route; feed_mass; energy_by_carrier; water; salt; brine; smoking_medium; output_mass; moisture; salt_content; glaze_mass; drained_mass; waste; direct_emission_inputs | 路线特定计量与秤量，结合实验室或规格检查 | kg; kWh; 能源载体特定单位；适用时为百分比 | 每批 | 有季节覆盖的代表性报告年 | 每个设施内的每条路线 | 仅合计路线和质量基准相同的数据；归一化至保藏后和最终输出 | 校准、配方、仪表、实验室、放行和追溯记录 |
| `cp_packing_batch` | `packing_and_release` | 保藏进料、包装、参考产品、包装废物 | 包装工单、物料清单、秤、放行记录 | batch_id; route; feed_mass; packaging_by_material; net_product_mass; shell_state; glaze_or_drained_adjustment; rejects; release_status | 将领用包装和实测净产品与已放行单元核对 | kg | 每个包装批次 | 代表性报告年 | 每条包装线和每个设施 | 合计合格输出，并将所有投入与废物归一化至 1 kg 参考产品 | 秤校准、包装规格、放行和核对记录 |
| `cp_storage_records` | `controlled_storage` | 储存质量、时长、能源、制冷剂损失 | 库存台账、温度日志、仪表、发票、制冷剂维修日志 | lot_id; route; mass_in; mass_out; time_in; time_out; temperature_or_humidity_setpoint; energy_by_carrier; refrigerant_type; charge; additions; recoveries | 将质量-时间库存与计量能源和设备维修记录核对 | kg; 小时或天; kWh; 制冷剂特定 kg | 连续记录或每个批次记录，并每月核对 | 代表性报告年内的实际储存期 | 每个受控库和制冷系统 | 用披露的质量-时间或因果驱动量分配计量能源；按物质计算制冷剂净损失 | 仪表记录、连续日志、库存核对、维修证明 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景流 | 归一化流量 = 批次流量除以按适用路线特定参考基准计量的合格可销售产品质量 | 批次流量；适用时不含包装、冰衣或包装盐水的合格产品净质量 | 每 1 kg 参考产品的流量 | eu-pef-2021 |
| `calc_route_yield` | 整理与保藏 | 得率 = 合格输出质量除以投入贻贝质量，并保留路线、带壳状态、含水率、盐/盐水、冰衣和沥干基准 | 投入质量；输出质量；限定信息 | 披露的过程得率 | codex-cxc-52-2003 |
| `calc_mass_reconciliation` | 每个过程和批次 | 核对质量投入、产品输出、废物、实测水分损失或增加、库存变化和未解释差额；披露残差和调查阈值 | 采集质量和组成调整 | 批次质量平衡与残差 | codex-cxc-52-2003 |
| `calc_storage_energy` | 受控储存 | 分配储存能源 = 储存计量能源乘以产品分配驱动量再除以总驱动量；优先采用因果性的质量-时间或设备分区驱动量 | 仪表能源；产品质量；停留时间；分区或设备数据 | 每 kg 产品储存能源 | eu-pef-2021 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品和路线 | 保留物种或组合、来源、路线、带壳状态、可食部分基准、包装纳入情况以及所有适用的路线特定限定信息。 | 批次追溯与放行规格 |
| `dq_measurement` | 质量、能源、水、材料、废物与排放 | 使用经校准或核验的计量系统，保留原始单位，记录换算，并保持路线特定记录相互分离。 | 校准、仪表、发票、秤量、实验室和维修记录 |
| `dq_temporal` | 前景数据集 | 在可用时覆盖代表性报告年；否则披露生产期日期、季节性、停机和偏差。 | 带日期的批次与运行记录 |
| `dq_completeness` | 前景与上游连接 | 核对产品和废物流，纳入重要公用工程与包装，连接上游和处理数据集，并披露排除、代理和未解决的质量平衡残差。 | 质量平衡、数据缺口登记、数据集连接和评审记录 |
| `dq_reasoned_estimate` | 所有暂定范围 | 仅在缺少直接数据时使用推理估算；披露其临时状态，并在获得路线/场址记录或计量三个代表性批次时替换。 | 估算登记与替换复核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 要求产品 UUID `b40a9b04-158a-4482-8c52-022d30f1a99a`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，以及恰好 1 kg 合格产品。 | unsd-cpc-30-21263 |
| `validation_qualifiers` | 产品元数据 | 缺少保藏路线、带壳状态、可食部分基准、包装纳入情况，或任何适用的含水率、盐/盐水、冰衣、沥干、烟熏或熟制限定信息时，完整性校验失败。 | unsd-cpc-30-21263; codex-cxc-52-2003 |
| `validation_route_exclusivity` | 过程清单 | 要求恰好一条纳入保藏路线并拒绝跨路线平均；有意组合的路线标记为需单独方法学评审。 | unsd-cpc-30-21263; codex-cxc-52-2003 |
| `validation_mass_basis` | 参考产品 | 要求排除包装；冷冻产品排除冰衣；盐水产品采用沥干产品质量并披露沥干程序；比较前协调带壳和组成基准。 | codex-cxc-52-2003 |
| `validation_inventory` | 前景过程 | 要求三个核心过程，在条件适用时要求受控储存；核对实测投入、输出、废物和库存变化，并披露残差及上游数据缺口。 | codex-cxc-52-2003; eu-pef-2021 |
| `validation_estimates` | 推理估算 | 要求每项推理估算保持暂定标记并说明适用性和替换触发条件；不得静默覆盖前景数据或成为发布关键的允许范围。 | eu-pef-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一条声明的贻贝保藏路线和设施门口输出的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当地域、技术、时间、带壳状态、质量基准、包装、储存、分配和数据质量兼容时，用于路线特定过程或生命周期建模 |
| excluded_use | 对保藏路线作通用平均；在带壳、可食部分、含水率、盐/盐水、冰衣、沥干或包装基准不同时进行比较；将候选推理估算用作已评审默认因子 |
| required_metadata | PCR id；产品 UUID；CPC 参考；物种或组合；来源；设施地域；技术；报告期；保藏路线；带壳状态；可食部分基准；包装；适用的含水率、盐/盐水、冰衣、沥干、烟熏和熟制限定信息；储存；分配；截断；上游数据集 |
| required_quality_disclosure | 初级数据占比；计量和校准证据；时间和路线代表性；质量平衡残差；排除；代理；分配敏感性；推理估算及其替换状态 |
| update_trigger | 新的已评审路线特定证据；产品规格、技术、法规、来源、UUID 或系统边界变化；代表性前景记录替换任何推理估算；重大质量平衡或校验失败 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-30-21263` | official_guidance | United Nations Statistics Division. CPC, Version 3.0, code 21263. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/2100/21263（检索日期 2026-08-11） | 精确类别范围、纳入与排除产品以及保藏路线识别 |
| `codex-cxc-52-2003` | standard | FAO and WHO. 2020. Code of Practice for Fish and Fishery Products, CXC 52-2003. https://doi.org/10.4060/cb0658en（检索日期 2026-08-11） | 双壳贝类接收与处理、路线特定冷冻/烟熏/干制/盐渍/盐水处理控制、包装、储存、卫生、追溯和质量记录 |
| `eu-pef-2021` | official_guidance | European Commission. Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-11） | 参考流定义、系统边界完整性、初级数据、分配层级、包装、数据质量和披露 |
