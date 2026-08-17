---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.yoghurt-and-other-fermented-or-acidified-milk-and-cream
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 酸奶及其他发酵或酸化乳和稀奶油

## 1. 范围与适用性

本 PCR 适用于以微生物发酵、直接酸化或两者结合作为决定性转化的酸奶及其他乳或稀奶油产品前景数据包。当产品仍属于发酵或酸化乳制品时，涵盖原味、调味、果料型、浓缩型、发酵后热处理型、饮用型、凝固或搅拌型以及其他市场形态；同时涵盖发酵稀奶油和酸化稀奶油。

本 PCR 不涵盖未发酵饮用乳、干酪、黄油和无水乳脂、干乳清配料、冷冻乳制甜品、植物基替代品，或乳成分不再定义产品属性的制品。原奶养殖与送达乳品厂前的运输属于上游而非前景过程。除非声明的研究扩展边界，否则配送、零售、消费者冷藏或使用以及生命末期不属于核心工厂门前景数据包。

规范前景结果为制造设施冷库或发运门处的未包装产品。产品配方、动物种属、脂肪与干物质含量、微生物发酵或直接酸化路线、发酵后热处理、浓缩、调味、包装状态、地理范围和参考期均为必需限定信息。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.yoghurt-and-other-fermented-or-acidified-milk-and-cream` |
| classification_refs | CPC 3.0：22230（精确映射语境；是否接受映射由独立治理决定） |
| covered_products | 酸奶；替代菌种酸奶；发酵乳；浓缩发酵乳；发酵乳饮料；调味或果料发酵乳；热处理发酵乳；发酵稀奶油；酸化乳；酸化稀奶油 |
| excluded_products | 未发酵液态乳；干酪；黄油及无水乳脂；干乳清产品；冰淇淋及冷冻乳制甜品；非乳替代品；农场门原奶 |
| representative_product | 在乳品厂发运门处、经标准化和培养的冷藏凝固或搅拌型发酵乳或酸奶，可为原味或调味产品 |
| production_route | 冷藏乳配料接收；标准化及可选均质；热处理；接种并发酵或受控直接酸化；可选浓缩、调配或发酵后热处理；冷却；灌装或散装发运；冷藏 |
| market_state | 冷藏液态、半流态、凝胶态或浓缩乳制品；按声明为包装或散装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足声明食品用途的发酵或酸化乳或稀奶油 |
| How much | 1 kg 净产品，不含包装 |
| How well | 符合声明的产品身份、配方、脂肪和干物质含量、处理路线、适用食品安全要求与货架期规格 |
| How long or cycle | 一个生产批次直至制造设施冷库放行或发运门；声明货架期和储存温度作为元数据限定信息 |
| reference_flow_link | `fermented_dairy_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Fermented Dairy Products `62cf4ac0-49ff-484a-9d1e-73e6df7f7743` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品名称；动物种属；原味/调味/果料型；乳脂和干物质含量；凝固或搅拌型/液态/浓缩状态；发酵菌种或酸化路线；酸化前后热处理；包装状态；储存温度；地理范围；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景清单归一化到 1 kg 发酵或酸化乳制品净产品。包装质量不计入参考数量，应单独记录。 |
| `wet_and_dry_matter` | 乳配料、产品和乳制共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 湿质量和 kg 干物质 | 分别记录湿质量和实测干物质分数；没有产品和温度特定的密度记录时，不得以体积替代质量。 |
| `energy_carriers_separate` | 设施能源 | Energy | kWh 和 MJ | 电力以 kWh 保存，燃料或外购热能按载能体以 MJ 保存；记录转换因子，转换为共同能源单位前不得直接相加。 |
| `water_volume_consistent` | 工艺水和清洗水 | Volume | L 或 m3 | 记录计量水体积并使用 1 m3 = 1,000 L。当蒸发、进入产品或回用量重要时，不得由进水量推定废水量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造设施已接收的冷藏乳配料和其他配方投入，并声明供应商身份、数量、组成、温度及上游数据集链接 |
| starting_condition_role | 工厂门前景投入 |
| product_classification_scope | 由产品身份和路线定义的发酵或酸化乳和稀奶油；CPC 3.0 编码 22230 仅作为分类语境 |
| recursive_input_rule | 外购发酵或酸化乳或稀奶油作为可见产品投入保留数量和上游数据集引用；不得递归地将其重新建模为由接收设施生产 |
| upstream_dataset_requirement | 将原奶、稀奶油、乳粉、其他乳配料、非乳配料、载能体、供水、包装、化学品以及声明范围内新增的运输链接到地理和时间适当的上游数据集 |
| disclosure | 声明种属、配方、起始配料状态、发酵或酸化路线、热处理、浓缩、包装纳入情况、冷藏终点、地理范围、参考期、排除阶段和任何代理数据集 |

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 核心前景数据包 | 纳入接收和储存、标准化、使用时的热处理和均质、发酵或直接酸化、使用时的浓缩或调配、冷却、灌装或散装发运、厂内冷藏、清洁、直接排放、产品损失、废物和废水，直至制造设施发运门。 | `ifc-dairy-processing-ehs-2007`; `dairy-pefcr-2025` |
| `boundary_upstream_links` | 外购投入 | 将养殖、原奶收集、入厂运输、配料制造、能源供应、包装制造和化学品制造置于前景操作之外，但在研究范围纳入时通过明确的上游数据集链接。 | `ifc-dairy-processing-ehs-2007`; `dairy-pefcr-2025` |
| `boundary_route_disclosure` | 产品身份 | 区分微生物发酵、直接酸化、组合路线和发酵后热处理，因为这些路线会改变必需投入、产品声明和储存条件。 | `codex-fermented-milks-243`; `codex-cream-288`; `ecfr-acidified-milk-131-111` |
| `boundary_optional_downstream` | 扩展研究 | 配送、零售、消费者冷藏和使用、食物损失及包装生命末期仅可作为单独声明的下游模块附加，不得并入工厂门前景结果。 | `dairy-pefcr-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `dairy_preparation` | 乳配料接收、标准化与热准备 | required | 始终纳入 | 前景生产 | kg 已准备乳混合物 |
| `fermentation_or_acidification` | 发酵或受控酸化 | required | 至少一种声明路线必须启用 | 前景转化 | kg 已处理散装产品 |
| `finishing_and_cold_storage` | 调理、灌装与冷藏 | required | 始终纳入；仅当包装在范围内时应用包装行 | 前景后处理与储存 | 1 kg 放行净产品 |
| `sanitation_and_wastewater` | 清洗、产品损失控制与废水处理 | required | 始终纳入 | 前景支持与排放控制 | 每 1 kg 放行净产品分配的活动量 |

### 过程：乳配料接收、标准化与热准备（`dairy_preparation`）

#### 输入

##### 产品流

###### 乳基配料（`dairy_base_ingredients`）

记录实际进入产品配方的乳、稀奶油、脱脂乳、乳粉、乳清来源乳配料及其他乳材料。每种供应商配料均须可单独识别。

- 选定流：声明的乳配料
- 流属性/单位：Mass / kg
- 数量规则：按配料和批次计量的接收湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 来源：`codex-fermented-milks-243`; `codex-cream-288`; `dairy-pefcr-2025`
- 数量范围：发酵乳代表性配方中乳配料总量 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.80
  - 上限：1.00
  - 单位：kg/kg 放行净产品
  - 基准：原味、调味和果料型凝固或搅拌产品示例的乳配料总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

###### 非乳配方配料（`non_dairy_ingredients`）

使用时分别记录糖、果料、香味料、稳定剂、盐、配方饮用水及其他允许的非乳配料。

- 选定流：声明的非乳配料
- 流属性/单位：Mass / kg
- 数量规则：按配料计量的批次领用或投料记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 来源：`codex-fermented-milks-243`; `dairy-pefcr-2025`
- 数量范围：Codex 调味发酵乳组成上限
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0
  - 上限：0.50
  - 单位：kg/kg 产品
  - 基准：调味发酵乳中非乳配料质量分数
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`codex-fermented-milks-243`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备乳混合物（`prepared_dairy_mix`）

已准备混合物是标准化、可选均质和声明热处理后的计量中间产品。

- 选定流：已准备乳混合物
- 流属性/单位：Mass / kg
- 数量规则：由实测配料投入、转移量和准备损失计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_materials`
- 来源：`dairy-pefcr-2025`
- 数量范围：已准备混合物质量平衡筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.80
  - 上限：1.10
  - 单位：kg/kg 放行净产品
  - 基准：发酵或直接酸化前转移的已准备混合物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：发酵或受控酸化（`fermentation_or_acidification`）

#### 输入

##### 产品流

###### 已准备乳混合物投入（`prepared_mix_input`）

记录进入发酵或酸化容器的已准备乳混合物转移量。

- 选定流：已准备乳混合物
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或以校准容器体积和产品特定密度计算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_operation`
- 来源：`codex-fermented-milks-243`; `ecfr-acidified-milk-131-111`

###### 发酵剂（`starter_culture`）

使用微生物发酵时，记录每种发酵剂或其他微生物的身份和用量。对于不使用菌种的纯直接酸化产品，不创建该行。

- 选定流：声明的发酵剂
- 流属性/单位：Mass / kg
- 数量规则：实测或供应商证明的菌种投加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_operation`
- 来源：`codex-fermented-milks-243`; `codex-cream-288`

###### 酸化配料（`acidifying_ingredient`）

使用直接酸化时，记录酸或酸度调节剂的身份和投加量。不得为仅由微生物发酵酸化的产品推定化学酸投入。

- 选定流：声明的食品级酸化配料
- 流属性/单位：Mass / kg
- 数量规则：按物质记录的实测投料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_operation`
- 来源：`codex-cream-288`; `ecfr-acidified-milk-131-111`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发酵或酸化散装产品（`treated_bulk_product`）

记录达到声明终点 pH 或酸度后的转移质量，包括灌装前发生的任何浓缩、发酵后热处理或调配。

- 选定流：发酵或酸化散装乳制品
- 流属性/单位：Mass / kg
- 数量规则：与容器和批次记录核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_operation`
- 来源：`codex-fermented-milks-243`; `codex-cream-288`; `ecfr-acidified-milk-131-111`

##### 废物流

##### 基本流

### 过程：调理、灌装与冷藏（`finishing_and_cold_storage`）

#### 输入

##### 产品流

###### 已处理散装产品投入（`treated_bulk_input`）

记录从发酵或酸化环节接收的散装产品，并与灌装或散装发运量核对。

- 选定流：发酵或酸化散装乳制品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_losses`
- 来源：`dairy-pefcr-2025`

###### 初级和次级包装（`packaging_materials`）

当声明范围包含包装时，按材料和部件记录包装。对规范未包装参考流，单独报告包装，不得将其加入 1 kg 产品数量。

- 选定流：声明的包装材料
- 流属性/单位：Mass / kg
- 数量规则：外购或领用包装质量减去经核验的库存变化，再按包装净产品归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`dairy-pefcr-2025`
- 数量范围：散装及常见消费包装的宽泛包装质量 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.10
  - 单位：kg 包装/kg 净产品
  - 基准：从散装产品到高质量一次性消费容器示例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

###### 设施电力（`facility_electricity`）

采集准备、发酵或酸化、泵送、灌装、制冷、储存、清洗及分配的支持运行所用电力，且不得与分表负荷重复计算。

- 选定流：电力，声明的供应组合
- 流属性/单位：Energy / kWh
- 数量规则：外购电力加厂内发电消耗量，扣除外送电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_utilities`
- 来源：`dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- 数量范围：Dairy PEFCR 发酵乳加工电力可替换默认值
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.137
  - 上限：0.137
  - 单位：kWh/kg 产品
  - 基准：每 kg 发酵乳产品的乳品加工设施电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

###### 设施热能（`facility_thermal_energy`）

按载能体采集热处理、热水、清洗和分配的支持运行所用燃料及外购热量。

- 选定流：声明的燃料或外购热能
- 流属性/单位：Energy / MJ
- 数量规则：按载能体计量或开票的低位热值能量，并记录转换过程
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_facility_utilities`
- 来源：`dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- 数量范围：Dairy PEFCR 发酵乳加工热能可替换默认值
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.590
  - 上限：0.590
  - 单位：MJ/kg 产品
  - 基准：每 kg 发酵乳产品的乳品加工设施热能
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

##### 废物流

###### 包装废料（`packaging_scrap`）

按材料和处理路线记录不合格容器、盖、标签、纸箱和薄膜。

- 选定流：包装废物，声明的材料
- 流属性/单位：Mass / kg
- 数量规则：实测废料或包装质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`dairy-pefcr-2025`
- 数量范围：暂定包装废料筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 已领用包装
  - 基准：发运前包装废料分数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 制冷剂向空气损失（`refrigerant_loss_air`）

记录服务前景设施的系统所用制冷剂物质和年度泄漏量。

- 选定流：声明的制冷剂向空气排放
- 流属性/单位：Mass / kg
- 数量规则：年度补加量加期初充注量，减去期末充注量和回收量，并分配到产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_facility_utilities`
- 来源：`dairy-pefcr-2025`
- 数量范围：Dairy PEFCR 制冷剂损失可替换默认值
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.000000005
  - 上限：0.000000005
  - 单位：kg/kg 产品
  - 基准：每 kg 发酵乳产品 5.00E-6 g 制冷剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

#### 输出

##### 产品流

###### 放行发酵乳制品（`fermented_dairy_product_output`）

这是在设施冷库或发运门经质量放行的声明参考产品。

- 选定流：Fermented Dairy Products `62cf4ac0-49ff-484a-9d1e-73e6df7f7743`
- 流属性/单位：Mass / kg
- 数量规则：放行净产品的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`dairy-pefcr-2025`
- 数量范围：参考流身份检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：规范参考数量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

##### 废物流

###### 不合格产品和过程损失（`off_spec_product`）

当溢漏、开机和切换损失、不合格产品及过期厂内库存可回收或作为物料流处理时，应与废水分开记录。

- 选定流：不合格发酵乳制品
- 流属性/单位：Mass / kg
- 数量规则：实测损失、不合格和回收记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_losses`
- 来源：`ifc-dairy-processing-ehs-2007`
- 数量范围：暂定产品损失筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 放行净产品
  - 基准：发运前全部前景产品损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清洗、产品损失控制与废水处理（`sanitation_and_wastewater`）

#### 输入

##### 产品流

###### 工艺水和清洗水（`process_cleaning_water`）

记录配方、冲洗、就地清洗、人工清洗、冷却系统和其他前景用途的补充水，并在计量时扣除厂内回用水。

- 选定流：工艺水，区域化供应
- 流属性/单位：Volume / L
- 数量规则：计量取水量减去单独计量的内部回用水，并识别配方水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- 数量范围：Dairy PEFCR 用水量可替换默认值
  - 范围角色：默认估计（`default_estimate`）
  - 下限：3.2
  - 上限：3.2
  - 单位：L/kg 产品
  - 基准：每 kg 发酵乳产品的乳品加工设施用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

###### 酸性清洗剂（`acid_cleaning_agents`）

按供应状态记录每种酸性清洗剂，并在可获得时保留活性浓度。

- 选定流：声明的酸性清洗剂
- 流属性/单位：Mass / kg
- 数量规则：外购或领用质量减库存变化，并分配到产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- 数量范围：Dairy PEFCR 酸性清洗剂用量可替换默认值
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.030
  - 上限：0.030
  - 单位：kg/kg 产品
  - 基准：每 kg 发酵乳产品的酸性清洗剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

###### 碱性清洗剂（`alkaline_cleaning_agents`）

按供应状态记录每种碱性清洗剂，并在可获得时保留活性浓度。

- 选定流：声明的碱性清洗剂
- 流属性/单位：Mass / kg
- 数量规则：外购或领用质量减库存变化，并分配到产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- 数量范围：Dairy PEFCR 碱性清洗剂用量可替换默认值
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.060
  - 上限：0.060
  - 单位：kg/kg 产品
  - 基准：每 kg 发酵乳产品的碱性清洗剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送处理的乳品加工废水（`dairy_wastewater`）

记录送往厂外或厂内处理前的废水体积和实测 COD 或其他当地重要负荷。回收产品及单独收集的高浓度物流不得计入本行。

- 选定流：乳品加工废水
- 流属性/单位：Volume / L
- 数量规则：送处理的计量废水；不得假设其等于进水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 放行净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007`
- 数量范围：Dairy PEFCR 废水体积可替换默认值
  - 范围角色：默认估计（`default_estimate`）
  - 下限：4.6
  - 上限：4.6
  - 单位：L/kg 产品
  - 基准：每 kg 发酵乳产品送处理的废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dairy-pefcr-2025`

##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 多输出前景操作 | 首先采用单独计量、过程细分或批次特定记录，将投入、公用工程、排放、废物和包装直接归属于造成它们的产品。 | `dairy-pefcr-2025` |
| `allocation_dry_matter` | 不可分乳制共产品和共享乳品加工负荷 | 无法直接归属时，按各乳制输出的实测干物质质量分配原奶上游负荷、共享能源、水、化学品和废水：产品 i 分配因子 = 产品 i 干物质分数 x 湿输出质量 / 所有乳制输出相应乘积之和。 | `dairy-pefcr-2025` |
| `allocation_direct_materials` | 产品特定配料和包装 | 使用批次与物料清单记录将配方配料和包装直接归属于产品；不得分配给无关产品。 | `dairy-pefcr-2025` |
| `allocation_losses` | 废物和产品损失 | 可知来源产品或批次时直接归属损失；否则采用产生该损失的操作所用且已记录的共享过程分配基准。 | `ifc-dairy-processing-ehs-2007`; `dairy-pefcr-2025` |
| `allocation_disclosure` | 所有已分配清单 | 报告分配层级、数据期、输出、湿质量、干物质分数、公式、所得因子以及对直接归属的任何偏离。 | `dairy-pefcr-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_materials` | `dairy_preparation` | 乳及非乳投入；已准备混合物 | 批次生产记录 | ingredient_id; supplier; lot_id; accepted_mass; dry_matter_fraction; dosing_mass; prepared_mix_mass; transfer_loss | 校准秤、罐体称重或体积加实测密度；与配方和库存移动核对 | kg 湿质量；kg 干物质 | 每批 | 代表性连续 12 个月 | 生产声明产品的全部产线 | 汇总接收投入和输出，再按放行净产品归一化 | 校准证书；供应商规格；批次核对；库存记录 |
| `cp_route_operation` | `fermentation_or_acidification` | 菌种、酸化剂、已处理散装产品及路线限定 | 批次日志和质量记录 | batch_id; culture_id; culture_dose; acidifier_id; acidifier_dose; starting_mass; endpoint_mass; pH; titratable_acidity; time; temperature; heat_treatment | 投料记录、校准 pH 或酸度测量、时间温度历史记录以及容器质量或体积记录 | kg; pH; acidity; deg C; h | 每批 | 与生产输出相同期间 | 每条纳入路线和产品系列 | 按路线汇总质量；归一化前保持路线限定信息分离 | 仪器校准；菌种或酸化剂证书；批次放行记录 |
| `cp_facility_utilities` | `finishing_and_cold_storage` | 电力、热能和制冷剂损失 | 仪表、账单和制冷剂维护记录 | electricity_import; onsite_generation; electricity_export; fuel_quantity; fuel_LHV; purchased_heat; opening_charge; additions; recovered_refrigerant; closing_charge; allocation_driver | 公用工程仪表和账单；记录低位热值转换；制冷剂质量平衡 | kWh; MJ; kg | 每月并年度核对 | 代表性连续 12 个月 | 完整设施并披露分表覆盖 | 扣除外送；避免重复计算；直接归属分表用量并按第 7 节分配余量 | 仪表标识；账单；转换因子；维护日志；生产总量 |
| `cp_packaging_records` | `finishing_and_cold_storage` | 包装投入和废料 | 物料清单、领用、库存和废料记录 | material_id; component; issued_mass; opening_stock; closing_stock; scrap_mass; packed_product_mass | 称量部件或供应商质量规格，并与库存及灌装单元核对 | kg | 每次包装活动；每月汇总 | 与产品输出相同期间 | 声明产品所用全部包装 | 消耗质量 = 领用量 + 期初库存 - 期末库存；按包装净产品归一化 | 供应商规格；库存核对；废料单据 |
| `cp_output_and_losses` | `finishing_and_cold_storage` | 放行产品和产品损失 | 批次放行、灌装、库存和废物记录 | batch_id; filled_net_mass; bulk_dispatch_mass; released_mass; reject_mass; spill_mass; recovered_mass; destination | 校准灌装检查、发运秤、罐体计量和废物记录 | kg | 每批 | 与投入及公用工程数据相同期间 | 数据集中的全部批次和路线 | 汇总放行产品；分类并核对各项损失；按放行质量归一化清单 | 校准记录；放行证书；发运记录；废物转移证据 |
| `cp_sanitation_records` | `sanitation_and_wastewater` | 水和清洗剂 | 仪表、CIP 配方、采购、领用和库存记录 | water_withdrawal; reused_water; formulation_water; cleaner_id; supplied_concentration; cleaner_mass; opening_stock; closing_stock; allocation_driver | 水表、CIP 控制日志、化学品领用和库存核对 | L 或 m3; kg | 可得时每个清洗周期；至少每月 | 代表性连续 12 个月 | 全部纳入过程线和共享清洗系统 | 直接归属产线记录；按第 7 节分配共享余量；不得重复扣除回用 | 仪表校准；CIP 历史记录；化学品规格；库存核对 |
| `cp_wastewater_records` | `sanitation_and_wastewater` | 废水体积和负荷 | 排水流量计、采样和处理记录 | discharge_volume; treatment_destination; COD_concentration; sampling_time; sample_method; recovered_high_strength_streams | 校准流量计和处理前代表性混合采样 | m3; mg/L COD | 体积连续计量；按许可或场址计划代表性采样 | 与生产和用水记录相同期间 | 全部前景排水口并披露排除项 | 以体积加权浓度计算年度负荷；按直接产线记录或第 7 节分配 | 仪表校准；实验室报告；样品流转记录；处理凭证 |

### 计算规则

| 规则编号 | 适用对象 | 规则 | 输入 | 输出 | 来源 |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 所有清单行 | 归一化数量 = 已归属前景数量 / 放行净产品质量 | 已归属数量；放行净产品质量 | 每 1 kg 放行净产品的数量 | `dairy-pefcr-2025` |
| `calculate_dry_matter_allocation` | 共享乳品加工负荷 | factor_i = dry_matter_fraction_i x wet_output_mass_i / sum(dry_matter_fraction_j x wet_output_mass_j)；attributed amount_i = shared amount x factor_i | 湿输出质量；干物质分数；共享数量 | 各输出的分配因子和归属数量 | `dairy-pefcr-2025` |
| `calculate_refrigerant_loss` | 制冷系统 | 制冷剂排放 = 期初充注量 + 补加量 - 期末充注量 - 回收量；负结果必须核对，不予接受 | 期初充注量；补加量；期末充注量；回收量 | 分配前制冷剂排放 kg | `dairy-pefcr-2025` |
| `calculate_cod_load` | 废水 | 在 L 和质量单位一致时，COD 负荷 = 废水体积 x 实测 COD 浓度 | 排放体积；COD 浓度 | 分配前 COD kg | `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007` |
| `reconcile_product_mass` | 每批及年度数据集 | 在声明的核对容差内，投入 = 放行产品 + 单独回收产品 + 物料废物 + 废水携带产品固形物 + 库存变化 | 投入质量；输出；损失；库存变化 | 质量平衡残差和相对差异 | `ifc-dairy-processing-ehs-2007` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品与路线 | 识别产品名称、种属、配方系列、脂肪和干物质含量、发酵菌种或酸化剂、热处理、浓缩、包装状态和储存条件。 | 规格；配方；批次放行和标签记录 |
| `dq_measurement` | 质量、公用工程、化学品和废水 | 尽可能使用校准计量；披露体积转质量密度、能量转换、采样方法、分表缺口和分配驱动因子。 | 校准证书；仪表清单；转换工作表；实验室方法 |
| `dq_temporal` | 前景数据集 | 使用代表正常运行的连续 12 个月期间，或记录较短覆盖、季节性、开停机和产品组合影响。 | 带日期源记录；生产日历；代表性声明 |
| `dq_completeness` | 全部前景过程 | 将物料投入与产品、回收物、废物、废水携带固形物及库存变化核对；覆盖全部纳入产线和共享公用工程。 | 质量平衡工作表；场址和产线覆盖图；排除流日志 |
| `dq_source_alignment` | 上游数据集 | 将配料、能源、包装、化学品和处理数据集与地理、技术和参考期匹配；披露代理和数据缺口。 | 数据集引用；选择理由；代理登记表 |
| `dq_default_replacement` | 来源支持的默认值 | Dairy PEFCR 示例或默认数量仅作为可替换筛查值。可共享前景数据集必须以采集或计算的场址特定值替换，并披露任何仍保留的默认值。 | 字段级来源和默认值替换日志 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 输出流 UUID、Mass 属性 UUID、Units of mass UUID 和归一化数量必须与声明的参考流对象及 1 kg 净产品一致。 |  |
| `validate_required_qualifiers` | 产品身份 | 拒绝缺失任何必需限定信息，或未区分微生物发酵、直接酸化、组合处理和发酵后热处理的数据包。 | `codex-fermented-milks-243`; `codex-cream-288`; `ecfr-acidified-milk-131-111` |
| `validate_route_inputs` | 发酵或酸化过程 | 微生物路线必须识别菌种和剂量；直接酸化路线必须识别酸化物质和剂量；不得虚构不存在的路线投入。 | `codex-fermented-milks-243`; `codex-cream-288`; `ecfr-acidified-milk-131-111` |
| `validate_no_double_count` | 公用工程、清洗和损失 | 拒绝在单元过程记录和共享设施总量之间重复计算公用工程、清洗、产品损失、废水或包装数量。 | `dairy-pefcr-2025` |
| `validate_allocation` | 多产品设施数据 | 拒绝没有直接归属证据，或没有披露干物质分配计算且分配因子在舍入容差内合计为 1 的共享负荷。 | `dairy-pefcr-2025` |
| `validate_mass_balance` | 批次及年度前景清单 | 要求披露质量平衡残差；调查并解释重大不平衡，不得强制调整参考输出以闭合。 | `ifc-dairy-processing-ehs-2007` |
| `validate_wastewater` | 清洗和废水 | 要求废水体积和处理去向；当 COD 重要或场址计划要求时，须有代表性实测浓度和计算负荷。 | `dairy-pefcr-2025`; `ifc-dairy-processing-ehs-2007` |
| `validate_defaults` | 所有来源支持的默认值 | 若仍有 Dairy PEFCR 默认值且无明确理由、不确定性披露和替换计划，则不得视为达到发布级完整性。 | `dairy-pefcr-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 乳品制造前景数据包，经审核后适合发布为次级或背景数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 作为 `process` 和 `lifecyclemodel` 投影的输入 |
| allowed_use | 发酵或酸化乳和稀奶油的产品特定工厂门建模；通过明确上下游链接扩展到更广生命周期模型 |
| excluded_use | 不同乳制品子类别间无限定比较；直接用于非乳替代品；养殖生产；未披露的消费阶段或摇篮到坟墓声明；依据已过有效期的外部 PEFCR 作符合性声明 |
| required_metadata | PCR id 和版本状态；产品名称和必需限定信息；设施地理；技术和路线；参考期；边界；数据源；上游数据集链接；分配；默认值使用；数据质量 |
| required_quality_disclosure | 初级数据占比和覆盖；仪表和采样覆盖；质量平衡残差；分配因子；默认值或代理值；地理、时间和技术代表性；排除项和不确定性 |
| update_trigger | 配方或路线重大变化；新增热处理或浓缩步骤；包装或制冷剂变化；设施或供应商变化；分配变化；参考数据更新；新审定类别规则；数据超过声明代表性窗口 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `codex-fermented-milks-243` | 标准（`standard`） | FAO/WHO Codex Alimentarius，CXS 243-2003，Standard for Fermented Milks，2024 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+243-2003%2FCXS_243e.pdf（检索于 2026-08-10） | 发酵乳范围、微生物路线、允许配料、产品限定信息、组成上限和热处理区分 |
| `codex-cream-288` | 标准（`standard`） | FAO/WHO Codex Alimentarius，CXS 288-1976，Standard for Cream and Prepared Creams，https://www.fao.org/input/download/standards/180/CXS_288e.pdf（检索于 2026-08-10） | 发酵稀奶油和酸化稀奶油定义、配料及路线区分 |
| `ecfr-acidified-milk-131-111` | 标准（`standard`） | 美国 Electronic Code of Federal Regulations，21 CFR 131.111，Acidified milk，https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-131/subpart-B/section-131.111（检索于 2026-08-10） | 官方直接酸化产品定义和酸化投入路线证据 |
| `dairy-pefcr-2025` | 官方指南（`official_guidance`） | European Dairy Association Technical Secretariat，Product Environmental Footprint Category Rules for Dairy Products，Final PEFCR，2025 年 2 月，https://eda.euromilk.org/wp-content/uploads/2025/02/PEFCR-DairyProducts_update_final.pdf（检索于 2026-08-10；文件声明有效期截至 2025 年 12 月，仅作技术证据而非当前符合性声明） | 前景过程分解、参考质量语境、企业特定数据字段、干物质分配、包装示例和可替换设施默认值 |
| `ifc-dairy-processing-ehs-2007` | 官方指南（`official_guidance`） | World Bank Group / IFC，Environmental, Health, and Safety Guidelines for Dairy Processing，2007-04-30，https://www.ifc.org/content/dam/ifc/doc/2000/2007-dairy-processing-ehs-guidelines-en.pdf（检索于 2026-08-10） | 工厂门加工边界、接收和储存、热处理、就地清洗、产品损失预防、废水、能源和监测规则 |
