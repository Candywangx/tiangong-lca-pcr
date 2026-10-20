---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.natural-rubber-in-primary-forms-or-in-plates-sheets-or-strip
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 初级形态或板、片、带状天然橡胶

## 1. 范围与适用性

本 PCR 覆盖从受管理的橡胶树生产和割胶，到一条已声明的初级加工路线及其交接点的天然橡胶。允许的终端形态为浓缩胶乳、烟胶片或其他声明胶片等级、绉片胶，以及技术分类橡胶（TSR）或其他声明的块状/粒状初级形态。每个数据集只能选择一种终端形态和路线；不得把这些物理状态不同的产品平均成同一参考状态。排除合成橡胶、加入填料或硫化剂的混炼胶、硫化胶、再生胶和橡胶制成品。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.natural-rubber-in-primary-forms-or-in-plates-sheets-or-strip |
| classification_refs | CPC 3.0: 01950 Natural rubber in primary forms or in plates, sheets or strip; mapping relation: exact |
| covered_products | 在初级加工交接点的已声明天然橡胶浓缩胶乳、RSS 或其他胶片等级、绉片胶、TSR/块状/粒状橡胶 |
| excluded_products | 合成橡胶；天然/合成橡胶混合物；混炼胶或硫化胶；再生胶；胶黏剂；轮胎、手套及其他制成品 |
| representative_product | 由一条可追溯路线生产的一种已声明商品天然橡胶形态 |
| production_route | 多年生橡胶树经营与割胶，随后只连接胶乳浓缩、胶片/RSS、绉片或 TSR/块胶加工中的一条路线 |
| market_state | 已声明的液态或干态初级形态、等级、干胶含量或收到态基准、保存状态和初级加工交接点 |

各替代路线在参考流层面互斥。不同路线清单只能作为分别定量的数据集共存于同一报告包；只有转换到相同物理形态、等级和质量基准后才可汇总，禁止建立通用混合形态参考产品。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在初级加工交接点满足所声明商品等级的一种天然橡胶初级形态 |
| How much | 按声明的干胶或收到态质量基准计 1 kg |
| How well | 声明路线、形态、等级、干胶含量或水分、保存剂/凝固剂状态、合格批状态和交接点 |
| How long or cycle | 覆盖种植园归属、割胶轮次以及产生参考量的加工批次或生产期的声明报告期 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 天然橡胶 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 天然橡胶树种或已知无性系；终端形态和路线；商品等级；液态/干态；干胶含量或水分基准；保存或凝固化学品；批次/生产期；地理；交接点 |

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用于 | 要求属性 | 要求单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明 1 kg 参考量是干胶质量还是收到态质量。没有记录干胶含量和明确换算时不得合并两种基准。 |
| `dry_rubber_conversion` | field latex, concentrate and wet coagulum | Mass and measured dry-rubber content | kg | 干胶质量 = 收到态质量 × 干胶质量分数；保留检测方法、取样时间和批次。 |
| `route_mass_balance` | every tapping and processing batch | Mass | kg | 在同一基准上核对合格橡胶、水、移除的乳清或水分、次级橡胶、保留返工料和损失。 |
| `period_attribution` | establishment and productive years | Mass | kg | 将建园、未投产年份、补植和终止负担在声明生产期的合格产出上仅归属一次。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明无性系/树种、树龄或生产阶段、建园结转负担和土地管理历史的受管理橡胶林 |
| starting_condition_role | 多年生生物生产存量；建园和补植负担被纳入或链接，并在生产期归属 |
| product_classification_scope | 初级加工交接点的一种已声明浓缩胶乳、胶片/RSS、绉片或 TSR/块胶形态天然橡胶 |
| recursive_input_rule | 内部转移的田间胶乳、凝块或次级胶保留上游负担，不得表示为零负担回路；外购同类别材料需要兼容上游数据集 |
| upstream_dataset_requirement | 外购养分、水、能源、化学品、包装和运输服务需要兼容上游数据集；具体流身份核验|
| disclosure | 声明种植园阶段、割胶制度和轮次、路线、终端形态、等级、干胶/水分基准、化学品、能源来源、批次/生产期、拒收/返工去向和交接点 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_plantation` | `plantation_management` | 纳入受管理树木建园归属、维护、养分和供水、能源、病虫草管理及生产性胶乳形成。 | `fao-rubber-products-classification` |
| `boundary_tapping` | `latex_tapping_collection` | 纳入割胶、胶杯收集、采用时的田间保存、收集损失以及实测田间胶乳向初级加工的交付。 | `rubber-board-natural-rubber-forms` |
| `boundary_single_route` | 终端加工 | 参考产品只纳入一条终端路线；其他路线节点不活动且负担为零。 | `rubber-board-natural-rubber-forms` |
| `boundary_latex_concentrate` | `latex_concentration` | 纳入保存、分离/浓缩、稳定、储存和合格浓缩胶乳交接；不纳入下游混炼或制品制造。 | `rubber-board-natural-rubber-forms` |
| `boundary_sheet_rss` | `sheet_rss_processing` | 纳入过滤、受控凝固、压片/成型、干燥或烟熏、分级和胶片交接。 | `rubber-board-natural-rubber-forms` |
| `boundary_crepe` | `crepe_processing` | 纳入凝块制备、洗涤、反复辊炼/绉片、干燥、分级和绉片交接。 | `rubber-board-natural-rubber-forms` |
| `boundary_tsr_block` | `tsr_block_processing` | 纳入原料分选、破碎、洗涤、干燥、压块/块状成型、分级和块胶交接。 | `rubber-board-natural-rubber-forms` |
| `boundary_exclusions` | downstream system | 排除合成聚合物制造、天然/合成橡胶混配、混炼、硫化、制成品加工以及使用/生命末期。 | `fao-rubber-products-classification` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `plantation_management` | 多年生橡胶树经营生产 | `required` | 始终；声明任何替代技术或生物生产路线差异 | 受管理生物生产和跨期归属 | 收集田间胶乳中的 kg 干胶 |
| `latex_tapping_collection` | 胶乳割采、保存与收集 | `required` | 始终；按批次模式记录割胶轮次 | 收获/采集与初级调理 | 交付加工田间胶乳中的 kg 干胶 |
| `latex_concentration` | 胶乳浓缩与稳定 | `conditional` | 批次模式；仅浓缩胶乳参考形态 | 材料处理与稳定 | 1 kg 声明浓缩胶乳 |
| `sheet_rss_processing` | 胶片成型、干燥或烟熏与分级 | `conditional` | 批次模式；仅 RSS 或其他声明胶片参考形态 | 凝固、成型、保存与分级 | 1 kg 合格胶片/RSS |
| `crepe_processing` | 绉片制备、辊炼、干燥与分级 | `conditional` | 批次模式；仅绉片参考形态 | 处理、成型与分级 | 1 kg 合格绉片胶 |
| `tsr_block_processing` | TSR/块胶制备、干燥、压块与分级 | `conditional` | 批次模式；仅 TSR/块状/粒状参考形态 | 处理、成型与分级 | 1 kg 合格 TSR/块胶 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：多年生橡胶树经营生产 (`plantation_management`)

#### 输入
##### 产品流

###### 尿素肥料投入（`plantation_nutrients`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered in field latex.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_plantation_period`

###### 磷酸一铵肥料投入（`plantation_nutrients_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered in field latex.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_plantation_period`

###### 氯化钾肥料投入（`plantation_nutrients_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered in field latex.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_plantation_period`

###### 施用的牛粪肥投入（`plantation_nutrients_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered in field latex.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_plantation_period`

###### 农业石灰石投入（`plantation_nutrients_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered in field latex.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_plantation_period`

###### 种植园供水 (`plantation_water`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际供水产品
- 流属性/单位： 体积/m3 or 质量/kg
- 数量规则： 实测供应的灌溉或育苗用水；降雨不是产品投入
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered in field latex.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_plantation_period`
- 数量范围： 暂定供水筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10
  - 单位： m3/kg dry rubber
  - 基准： 仅供应水
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 中压电力投入（`plantation_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered in field latex.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_plantation_period`

###### 柴油投入（`plantation_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered in field latex.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_plantation_period`

##### 废物流

不预设通用废物身份。只有当前景记录确定材料、状态、目的地和处理路线时，才增加单独识别的废物交换。

##### 基本流

仅依据具有接收环境舱和经核实 UUID 的场址实测或模型记录，增加物质特定的土地占用/转化、水资源和直接排放交换。

#### 输出
##### 产品流

###### 可割胶乳中的干胶 (`plantation_latex_output`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 数量规则： 由胶乳质量和检测干胶含量计算
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：过程输出.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_latex_batches`
- 数量范围： 输出身份范围
  - 范围角色： `allowed_range`
  - 下限： 1
  - 上限： 1
  - 单位： kg dry rubber
  - 基准： 每 kg 干胶 过程输出
  - 基准类型： `process_output`
  - 证据类型： `method_formula`
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：胶乳割采、保存与收集 (`latex_tapping_collection`)

#### 输入
##### 产品流

###### 种植园胶乳转移 (`field_latex_input`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 数量规则： 来自种植园生产、携带负担的内部转移
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered to primary processing.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_latex_batches`
- 数量范围： 内部转移核对范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.2
  - 单位： kg dry rubber/kg delivered dry rubber
  - 基准： 记录收集损失前的已收集干胶
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 田间胶乳保存用氨水 (`field_latex_ammonia`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- 流属性/单位： 质量/kg 溶液
- 数量规则： 实测溶液质量和浓度；声明路线不使用氨时为零
- 数值来源模式： `foreground_record`
- 适用范围： `route_specific`
原始活动或阶段基准：每 kg 干胶 delivered to primary processing.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_latex_batches`
- 数量范围： 暂定保存剂筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.1
  - 单位： kg solution/kg dry rubber
  - 基准： 仅在使用氨水时适用
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 胶乳收集运输服务 (`latex_collection_transport`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际运输服务
- 流属性/单位： Transport work / tkm or compatible service unit
- 数量规则： 湿胶乳质量 × 按运输方式实测的路线距离
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
原始活动或阶段基准：每 kg 干胶 delivered.

- 归一化基准：每声明的参考流
- 基准类型： `transport_service`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_latex_batches`
- 数量范围： 暂定收集距离筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 2
  - 单位： tkm/kg dry rubber
  - 基准： 按干胶归一化的湿胶乳运输功
  - 基准类型： `transport_service`
  - 证据类型： `reasoned_estimate`

##### 废物流

不预设通用废物身份；拒收凝块要么作为携带负担的投入保留到已声明干胶路线，要么按实际去向记录。

##### 基本流

不预设通用基本流输入。

#### 输出
##### 产品流

###### 交付加工的已收集田间胶乳 (`collected_field_latex`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 数量规则： 湿胶乳质量 × 批次干胶质量分数
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 干胶 delivered.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_latex_batches`
- 数量范围： 干胶转移恒等范围
  - 范围角色： `allowed_range`
  - 下限： 1
  - 上限： 1
  - 单位： kg dry rubber
  - 基准： 每 kg 干胶 delivered to the selected terminal route
  - 基准类型： `process_output`
  - 证据类型： `method_formula`
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：胶乳浓缩与稳定 (`latex_concentration`)

#### 输入
##### 产品流

###### 浓缩用田间胶乳 (`latex_concentrate_feed`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 数量规则： 合格田间胶乳中携带负担的干胶质量
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
原始活动或阶段基准：每 kg 干胶 in accepted concentrate.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定干胶收率筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.15
  - 单位： kg feed dry rubber/kg accepted dry rubber
  - 基准： 不含乳清水质量
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 浓缩胶乳稳定用氨水 (`concentrate_ammonia`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- 流属性/单位： 质量/kg 溶液
- 数量规则： 浓缩批次中实测的溶液质量和浓度
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：每 kg 合格 concentrate on declared basis.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定稳定剂筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.1
  - 单位： kg solution/kg dry rubber
  - 基准： 必须保留实际溶液浓度
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 自来水工艺用水投入（`concentrate_water`）

仅当本过程实际供应自来水工艺用水时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：自来水工艺用水
- 流属性/单位：体积 / m3
- 数量规则：计量本过程在声明期间实际使用的自来水工艺用水数量；只有实际路线不使用时才记为不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 合格 concentrate.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

###### 中压电力投入（`concentrate_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
原始活动或阶段基准：每 kg 合格 concentrate.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

###### 柴油投入（`concentrate_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
原始活动或阶段基准：每 kg 合格 concentrate.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

##### 废物流

不预设通用废物身份。乳清和废水在创建交换前必须有实测组成和实际处理去向。

##### 基本流

不预设通用基本流输入。

#### 输出
##### 产品流

###### 合格浓缩胶乳 (`latex_concentrate_reference`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg
原始产出计量与核对要求：恰好 1 kg accepted concentrate on the declared dry-rubber or as-received basis

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
原始活动或阶段基准：参考流.

- 归一化基准：每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 来源： `reference-normalization-definition`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：胶片成型、干燥或烟熏与分级 (`sheet_rss_processing`)

#### 输入
##### 产品流

###### 胶片生产用田间胶乳 (`sheet_latex_feed`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 数量规则： 进入凝固的田间胶乳干胶质量
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
原始活动或阶段基准：每 kg 合格 dry sheet.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定干胶收率筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.2
  - 单位： kg feed dry rubber/kg accepted sheet
  - 基准： 干胶质量平衡
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 甲酸凝固剂 (`sheet_formic_acid`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： Formic acid `b2fe4c3e-d4e6-40be-93ee-e47d512b8309`
- 流属性/单位： 质量/kg
- 数量规则： 实测酸产品质量和浓度；声明其他经核实凝固剂时为零
- 数值来源模式： `foreground_record`
- 适用范围： `route_specific`
原始活动或阶段基准：每 kg 合格 dry sheet.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定凝固剂筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.05
  - 单位： kg product/kg dry sheet
  - 基准： 必须保留实际酸浓度
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 自来水工艺用水投入（`sheet_water`）

仅当本过程实际供应自来水工艺用水时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：自来水工艺用水
- 流属性/单位：体积 / m3
- 数量规则：计量本过程在声明期间实际使用的自来水工艺用水数量；只有实际路线不使用时才记为不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 合格 dry sheet.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

###### 中压电力投入（`sheet_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `calculated_value`
- 适用范围： `technology_specific`
原始活动或阶段基准：每 kg 合格 dry sheet.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`

###### 柴油投入（`sheet_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `calculated_value`
- 适用范围： `technology_specific`
原始活动或阶段基准：每 kg 合格 dry sheet.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`

##### 废物流

不预设通用废物身份。凝固乳清、洗涤水和次级胶片需要实际身份和去向。

##### 基本流

不预设通用基本流输入。

#### 输出
##### 产品流

###### 合格胶片或 RSS (`sheet_rss_reference`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg
原始产出计量与核对要求：恰好 1 kg accepted sheet of the declared grade and moisture basis

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
原始活动或阶段基准：参考流.

- 归一化基准：每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 来源： `reference-normalization-definition`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：绉片制备、辊炼、干燥与分级 (`crepe_processing`)

#### 输入
##### 产品流

###### 绉片路线天然橡胶原料 (`crepe_feed`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 数量规则： 声明的胶乳或凝块原料中的干胶质量
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
原始活动或阶段基准：每 kg 合格 dry crepe.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定原料收率筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.25
  - 单位： kg feed dry rubber/kg accepted crepe
  - 基准： 干胶质量平衡
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 自来水工艺用水投入（`crepe_water`）

仅当本过程实际供应自来水工艺用水时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：自来水工艺用水
- 流属性/单位：体积 / m3
- 数量规则：计量本过程在声明期间实际使用的自来水工艺用水数量；只有实际路线不使用时才记为不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 合格 dry crepe.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

###### 中压电力投入（`crepe_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
原始活动或阶段基准：每 kg 合格 dry crepe.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

###### 柴油投入（`crepe_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
原始活动或阶段基准：每 kg 合格 dry crepe.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

##### 废物流

不预设通用废物身份。洗涤水、杂质和次级绉片需要实际身份和去向。

##### 基本流

不预设通用基本流输入。

#### 输出
##### 产品流

###### 合格绉片胶 (`crepe_reference`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg
原始产出计量与核对要求：恰好 1 kg accepted crepe rubber of declared grade and moisture basis

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
原始活动或阶段基准：参考流.

- 归一化基准：每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 来源： `reference-normalization-definition`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：TSR/块胶制备、干燥、压块与分级 (`tsr_block_processing`)

#### 输入
##### 产品流

###### TSR/块胶路线天然橡胶原料 (`tsr_feed`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 数量规则： 分别记录的胶乳、杯凝胶或凝块原料干胶质量
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
原始活动或阶段基准：每 kg 合格 TSR/block rubber.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定原料收率筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.3
  - 单位： kg feed dry rubber/kg accepted TSR
  - 基准： 干胶质量平衡
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 自来水工艺用水投入（`tsr_water`）

仅当本过程实际供应自来水工艺用水时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：自来水工艺用水
- 流属性/单位：体积 / m3
- 数量规则：计量本过程在声明期间实际使用的自来水工艺用水数量；只有实际路线不使用时才记为不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
原始活动或阶段基准：每 kg 合格 TSR/block rubber.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

###### 中压电力投入（`tsr_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
原始活动或阶段基准：每 kg 合格 TSR/block rubber.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

###### 柴油投入（`tsr_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
原始活动或阶段基准：每 kg 合格 TSR/block rubber.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

###### 瓦楞纸箱投入（`tsr_packaging`）

仅当本过程实际供应瓦楞纸箱时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：计量本过程在声明期间实际使用的瓦楞纸箱数量；只有实际路线不使用时才记为不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：每 kg 合格 TSR/block rubber.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

###### 聚乙烯包装薄膜投入（`tsr_packaging_plastic_film`）

仅当本过程实际供应聚乙烯包装薄膜时记录这一单独交换。其他能源、水源或材料须分别建立原子清单行，身份经核实或明确标记待核实。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：计量本过程在声明期间实际使用的聚乙烯包装薄膜数量；只有实际路线不使用时才记为不适用。
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
原始活动或阶段基准：每 kg 合格 TSR/block rubber.

- 归一化基准：每声明的参考流
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`

##### 废物流

不预设通用废物身份。洗涤水、杂质、次级块胶和包装废料需要实际身份和去向。

##### 基本流

不预设通用基本流输入。

#### 输出
##### 产品流

###### 合格 TSR/块胶 (`tsr_block_reference`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg
原始产出计量与核对要求：恰好 1 kg accepted TSR/block/granular rubber of declared grade and moisture basis

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
原始活动或阶段基准：参考流.

- 归一化基准：每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 来源： `reference-normalization-definition`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：天然橡胶
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：天然橡胶
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与共同产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_perennial_period` | plantation establishment and replacement | 将建园、未投产年份、补植和终止作业归属到声明生产期及合格干胶产出；披露寿命和产量基准并防止重复年化。 |  |
| `allocation_route_separation` | alternative terminal routes | 保持浓缩胶乳、胶片/RSS、绉片和 TSR/块胶清单分离。不得仅因同属 CPC 01950 而跨形态分配或平均。 | `rubber-board-natural-rubber-forms` |
| `allocation_internal_rubber` | 田间胶乳、凝块、次级料与返工料 | 所有内部橡胶转移均携带既有负担。返工料仅一次返回消费批次；降级销售橡胶作为单独定量产品，绝不计入合格参考输出。 |  |
| `allocation_serum_residues` | serum, wastewater and separated non-rubber material | 除非证据证明其为具有独立功能和可测数量的有意共同产品，否则按残余物或废物处理；使用任何分配驱动前必须记录。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | 频次 | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_plantation_period` | `plantation_management` | perennial inputs and accepted latex output | farm log, invoice, asset and yield record | stand area; clone/species; phase; establishment inputs; nutrient products; supplied water; energy; replacements; dry-rubber output | reconcile farm records and calibrated meters/scales；原始汇总与分配：attribute period burdens once to dry-rubber output | native units and kg dry rubber | monthly and annual | complete declared productive period | each plantation and route | 每声明的参考流 | record completeness, calibration and period reconciliation |
| `cp_latex_batches` | `latex_tapping_collection` | tapping, preservation, collection and latex transfer | tapping-round and batch log | date; plot; wet latex mass; dry-rubber test; preservative product/concentration; coagulum; loss; distance and mode | batch weighing, sampling and route log；原始汇总与分配：aggregate dry-rubber mass without losing batch identity | kg, fraction, km, tkm | every tapping round/batch | all rounds supplying reported output | plot and collection route | 每声明的参考流 | scale/test calibration and signed transfer record |
| `cp_processing_batch` | conditional terminal route | feedstock, chemicals, water, energy, outputs and rejects | batch sheet, meter, invoice and laboratory certificate | route; feedstock state; wet/dry mass; DRC/moisture; chemicals/concentrations; water; energy; grade; accepted/rework/reject mass; packaging | direct measurement and batch mass balance；原始汇总与分配：aggregate only identical terminal form, grade and basis | native units and kg | every batch/campaign | all batches producing reference output | each processing facility and technology | 每声明的参考流 | meter calibration, laboratory method and closed batch balance |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |
| `cp_phase1_environment_coverage` | plantation_management | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖; 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用于 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_rubber` | latex and wet coagulum | 干胶质量 = 收到态质量 × 干胶质量分数 | measured mass; representative DRC test | kg dry rubber | `reference-normalization-definition` |
| `calc_reference_normalization` | all inventory rows | 归一化数量 = 归属数量 ÷ 同基准合格参考产品质量 | attributed amount; accepted mass; basis conversion | amount 每 kg 参考流 | `reference-normalization-definition` |
| `calc_transport` | collection transport | tkm = 运输湿质量（t）× 实际距离（km）；再按合格参考质量归一化 | wet mass; distance; mode; accepted output | tkm/kg 参考流 |  |
| `calc_period_burden` | plantation multi-period inputs | 各阶段负担 × 归属份额求和 ÷ 对应生产期合格产出 | phase records; service life; output; attribution driver | burden/kg dry rubber |  |
| `calc_batch_balance` | each processing batch | 投入干胶 = 合格干胶 + 次级/返工干胶 + 实测干胶损失 | feed and output mass/DRC | reconciled batch balance |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用于 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考流 and every rubber transfer | 声明形态、路线、等级、基准、化学组成、交接点及 UUID 相容性；不得替换为合成橡胶或混炼橡胶。 | product certificate, batch record and identity audit |
| `dq_route_completeness` | process map | 只能启用一条终端路线；未启用路线没有交换或负担。 | route declaration and process graph |
| `dq_mass_basis` | liquid and wet materials | 保留收到态质量、DRC/水分、检测方法和取样时间；换算必须可复现。 | laboratory certificate and calculation record |
| `dq_temporal` | plantation and processing | 覆盖建园归属、所有割胶轮次和对产出有贡献的每个加工批次。 | period and batch completeness report |
| `dq_mass_balance` | tapping and processing | 逐批核对橡胶质量；调查超过场址声明容差的差异。 | signed mass-balance record |
| `dq_binding` | all inventory cards | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | 具体流身份核验证据 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | 要求天然橡胶 UUID、质量属性/单位组和所有必需限定信息；拒绝合成、混合、混炼、硫化、再生或制成品橡胶。 | `fao-rubber-products-classification` |
| `validate_one_terminal_form` | process map and reference link | 浓缩胶乳、胶片/RSS、绉片或 TSR/块胶终端节点中只能有一个供应参考流。 | `rubber-board-natural-rubber-forms` |
| `validate_basis_conversion` | wet and dry states | 合并或比较质量基准前，必须有实测 DRC/水分和明确换算。 | `reference-normalization-definition` |
| `validate_nutrient_cardinality` | plantation inputs | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_fixed_bindings` | fixed cards | 天然橡胶、甲酸和氨水只使用经详情确认的 UUID 及兼容质量属性；不得从身份核实推导数量证据。 |  |
| `validate_rework_reject` | 次级或拒收橡胶 | 声明返工、降级/回收或废弃去向；保留返工料仅计一次，所有非合格橡胶均排除在参考输出外。 |  |
| `validate_period_attribution` | plantation burdens | 要求阶段、生产寿命、合格产量和归属证据；建园负担遗漏或重复均不通过。 |  |
| `validate_batch_balance` | each terminal route | 核对原料干胶与合格、返工/次级及损失干胶；保持批次和路线可追溯。 |  |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 初级加工交接点一种已声明天然橡胶初级形态的前景生产包 |
| downstream_use | `secondary_dataset`；经独立审查并匹配地理、时间、等级和技术后可作 `background_dataset` |
| allowed_use | 用于终端形态、等级、质量基准和交接点相匹配的 LCA 上游天然橡胶供应 |
| excluded_use | 通用混合形态；合成/混合/混炼/硫化/再生橡胶；橡胶制成品；未增加过程的下游转换 |
| required_metadata | 已知时的树种/无性系；种植园阶段；割胶制度；路线；形态；等级；DRC/水分；化学品；批次/生产期；地理；交接点；拒收/返工去向 |
| required_quality_disclosure | 路线和期间覆盖；质量基准换算；暂定范围；计量/检测质量；质量平衡闭合；具体流身份核验 展开；固定身份依据 |
| update_trigger | 产品形态、等级、质量基准、路线拓扑、保存/凝固技术、交接点、参考 UUID、具体流身份核验|

## 11. 数据来源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `fao-rubber-products-classification` | `official_guidance` | Food and Agriculture Organization of the United Nations, rubber-products classification material, https://www.fao.org/4/x2613e/x2613e2w.htm | Category boundary including natural latex, sheets/crepes and technically specified primary forms; exclusion of downstream rubber products |
| `rubber-board-natural-rubber-forms` | `official_guidance` | Rubber Board, natural-rubber grades and forms guidance, https://www.rubberboard.gov.in/rbfilereader?fileid=1013 | Distinct latex concentrate, RSS, TSR and related market forms; route and grade declaration |
| `reference-normalization-definition` | `method_factor` | This PCR's 1 kg declared-form normalization, DRC conversion and rubber-mass balance | 参考量, exact-output ranges and calculation formulas |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
