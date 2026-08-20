---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetables-pulses-and-potatoes-preserved-by-vinegar-or-acetic-acid
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 用醋或乙酸保藏的蔬菜、豆类和马铃薯

## 1. 范围与适用性

本 PCR 适用于以醋或乙酸为主要保藏方式的蔬菜、豆类和马铃薯的工厂门生产，包括处于酸性填充介质中的整颗、切分或其他预处理产品。它覆盖新鲜预处理原料直接酸化路线，以及先腌制或发酵、再最终调酸且单独声明的路线。前景边界始于保藏设施接收所声明的生鲜或已腌制原料，止于保藏设施门口经稳定化、灌装和密封的产品。

主要通过冷冻、干燥、糖、油或不含醋/乙酸保藏的单纯盐渍产品不在范围内。调味酱、泡菜（kimchi）、酸菜（sauerkraut）、食用橄榄以及主要转化属于其他产品类别的产品不在范围内。农业生产、醋和其他配料生产、进厂运输、分销、使用及生命周期末端作为关联的上游或下游系统，不属于本 PCR 的前景操作。

天工流 Cucumbers `54b947e7-ab56-45c8-8210-9c91b85eb845` 是范围窄于 CPC 21340 的代表流，可能仅识别黄瓜数据集。其他蔬菜、豆类或马铃薯的数据集在发布前必须选择语义适当的产品流；不得仅因共享更宽泛的 CPC 21340 类别而复用该黄瓜 UUID。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetables-pulses-and-potatoes-preserved-by-vinegar-or-acetic-acid |
| classification_refs | CPC 3.0：21340 — 用醋或乙酸保藏的蔬菜、豆类和马铃薯 |
| covered_products | 主要通过醋或乙酸酸化保藏的整颗、切分或预处理蔬菜、豆类和马铃薯；鲜装路线以及已声明的腌制或发酵路线；零售、餐饮或重新包装用包装产品 |
| excluded_products | 生鲜、冷冻、干燥、糖渍、油渍或单纯盐渍产品；调味酱；kimchi；sauerkraut；食用橄榄；拟进行实质不同主要转化的产品 |
| representative_product | 由天工流 Cucumbers 代表的醋酸保藏黄瓜；其范围窄于完整类别，不能作为其他蔬菜、豆类或马铃薯的通用流 |
| production_route | 每个前景数据集恰好选择一条路线：预处理新鲜原料直接酸化，或腌制/发酵后调酸；所选路线之后进行灌装、密封和稳定化 |
| market_state | 保藏设施门口的稳定化产品，并声明产品物种、呈现形式、填充介质、保藏路线、包装形式、净含量及适用时的沥干质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 主要以醋或乙酸保藏并交付至保藏设施门口的可食用蔬菜、豆类或马铃薯产品 |
| How much | 1 kg 产品净质量，包括与产品一同销售的可食用填充介质，不包括一级、二级和三级包装 |
| How well | 符合所声明的产品身份、路线、呈现形式、填充介质、法定适用质量和安全规范；按所引用 Codex 酸性保藏产品定义建模时，平衡 pH 不高于 4.6 |
| How long or cycle | 稳定化后工厂门口的一个生产批次；不声明使用期服务时长 |
| reference_flow_link | `filling_sealing_stabilization` 输出的 1 kg 最终保藏产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净质量 |
| 参考产品流 | 黄瓜 `54b947e7-ab56-45c8-8210-9c91b85eb845` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生物产品身份；黄瓜或非黄瓜状态；直接酸化或腌制/发酵路线；新鲜或已腌制起始状态；整颗或切分呈现形式；醋或乙酸介质；配方以及相关盐分或可溶性固形物规范；平衡 pH 测试基准；净质量；适用时的沥干质量；包装材料和规格；稳定化方式；生产地域；参考期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。所选天工 UUID 不能解决更宽泛类别的产品身份：它只能用于黄瓜数据集。非黄瓜数据集在选择并记录语义适当的产品流前，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准的质量计量确定可食用产品净质量。包括随产品销售的可食用填充介质并排除全部包装质量，将清单归一化至恰好 1 kg。 |
| `batch_material_mass` | 原料、配料、填充介质、产品、不合格物和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每一生产批次记录毛重、皮重和净重或有文件依据的等效数据；除非具有实测的批次特定密度和换算记录，不得混用体积与质量。 |
| `equilibrium_ph` | 稳定化产品及填充介质 | 无量纲 pH | pH units | 在所声明的平衡或稳定化条件后采用校准方法测量平衡 pH，识别取样相和批次，并保留测试结果及校准证据。 |
| `utility_conversion` | 电力、燃料、蒸汽、热力、制冷和压缩空气 | 能量或计量服务 | kWh、MJ、kg steam 或所声明的服务单位 | 保留计量单位和换算因子；共享公用工程只能按第 7 节分配，并以一致单位报告归一化能量，不得把能量换算视为质量换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 直接酸化路线为保藏设施接收的新鲜合格原料，腌制路线为接收的已腌制/发酵原料；声明物种、前处理、含水或填充状态及供应商状态 |
| starting_condition_role | 接收和预处理的前景入口；农业生产、供应商实施的前期腌制、配料制造和进厂运输为关联上游数据集 |
| product_classification_scope | 语义范围为用醋或乙酸保藏的蔬菜、豆类和马铃薯；CPC 3.0 编码 21340 仅为分类背景，不能扩大 Cucumbers UUID 的范围 |
| recursive_input_rule | 若酸性保藏投入已属于同一产品类别，将其作为外购产品投入记录一次并关联其独立生产的上游数据集；不得在消费该投入的前景数据包内重复构建其保藏操作 |
| upstream_dataset_requirement | 按实际采购关联种植或初级生产、供应商腌制、醋或乙酸、水、盐和其他配料、能源载体、包装材料、废物和废水处理以及进厂运输的代表性数据集 |
| disclosure | 声明产品物种、黄瓜/非黄瓜状态、所选路线、供应商起始状态、过程和储存地域、参考期、稳定化方式、包装、排除操作、截断、分配、数据缺口，以及所选产品流 UUID 对该产品在语义上是否有效 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_foreground_completeness` | 设施前景 | 纳入接收、预处理、唯一所选保藏路线、灌装、密封、稳定化、公用工程、清洗、产品损失、不合格物、废水、包装废料以及这些操作的已知直接排放。 | `eu-pef-2021-2279`; `codex-cxs-260-2007` |
| `sb_route_exclusivity` | 保藏路线 | 每一产品批次只能建模 `direct_acidulation` 或 `curing_fermentation_acid_adjustment` 之一。若报告期含两条路线，应分别建立路线清单，仅在按路线特定产出质量归一化后，使用有文件依据的产出质量份额合并。 | `codex-cxs-115-1981`; `codex-cxs-260-2007` |
| `sb_upstream_and_downstream` | 关联生命周期阶段 | 为所有外购投入和服务关联代表性上游数据集。分销、零售、消费者使用和生命周期末端不属于本工厂门前景数据集，开展从摇篮到坟墓研究时必须补充。 | `eu-pef-2021-2279` |
| `sb_exclusion_disclosure` | 截断和排除 | 不得采用未列明的截断。任何排除及其潜在重要性必须说明理由并记录；包装和前景废物处理不得被默默省略。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收与预处理 | required | 始终纳入 | 接收、检验、分选、清洗、修整、切分并预处理所声明产品原料 | 转移的预处理原料 kg |
| `direct_acidulation` | 直接酸化与配料 | conditional | 仅当新鲜或其他未腌制的预处理原料直接酸化时纳入；选择腌制/发酵路线时排除 | 用醋或乙酸介质及所声明配料配制预处理原料 | 转移的酸化批次 kg |
| `curing_fermentation_acid_adjustment` | 腌制或发酵与调酸 | conditional | 仅当前景边界内发生腌制或发酵时纳入；选择直接酸化时排除；若接收时已由供应商腌制，则把供应商腌制作为上游 | 腌制或发酵原料，再按声明用醋或乙酸调酸 | 转移的腌制调酸批次 kg |
| `filling_sealing_stabilization` | 灌装、密封与稳定化 | required | 始终纳入；使用唯一所选保藏路线的输出 | 灌装产品和介质、封口、采用所声明的加热或非加热稳定化、必要时冷却并放行成品 | 1 kg 产品净质量 |

下列全部范围均为基于推理估算的候选阶段宽泛 QA 筛查范围，不是行业平均值或发布默认值。范围仅适用于所述过程和归一化基准。在发布前，每个范围必须由代表性前景批次或经审查且可转移的定量证据替代；超出暂定范围的数值应调查并记录，而不是自动判为不合格。

### 过程：接收与预处理（`receiving_preparation`）

#### 输入

##### 产品流

###### 合格蔬菜、豆类或马铃薯原料（`accepted_product_material`）

记录实际跨越设施入口的生物原料，包括物种、新鲜或已腌制状态、供应商、批次和前处理。不得为非黄瓜原料分配 Cucumbers UUID。

- 选定流：设施特定的蔬菜、豆类或马铃薯原料
- 流属性/单位：Mass / kg
- 数量规则：投入接收和预处理的合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的预处理原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：`unsd-cpc-3-0-21340`; `codex-cxs-260-2007`; `codex-cxs-115-1981`
- 数量范围：暂定合格原料 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.4
  - 上限：5
  - 单位：kg
  - 基准：每 kg 转移的预处理原料；仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理用水（`preparation_water`）

记录进入清洗、漂洗、浸泡或预处理的计量或按批次推导用水，避免重复计算内部循环水。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：进入预处理边界的净补充水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的预处理原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：`eu-pef-2021-2279`; `codex-cxs-260-2007`
- 数量范围：暂定预处理用水 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 kg 转移的预处理原料；仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理能源（`preparation_energy`）

记录分选、清洗、修整、切分、泵送和内部搬运所用的计量电力及其他能源服务。

- 选定流：设施特定电力和能源载体
- 流属性/单位：Energy / 各能源载体的 kWh 或 MJ
- 数量规则：计量过程能源或有文件依据的分表总量份额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移的预处理原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定预处理能源 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh
  - 基准：每 kg 转移的预处理原料；能源载体一致换算后仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理产品原料（`prepared_product_material`）

记录转移至所选保藏路线的经检验、清洗、修整和切分原料净质量。

- 选定流：预处理蔬菜、豆类或马铃薯原料
- 流属性/单位：Mass / kg
- 数量规则：保藏过程接收的净转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程转移质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：`codex-cxs-260-2007`; `codex-cxs-115-1981`
- 数量范围：暂定预处理得率 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：1
  - 单位：kg
  - 基准：每 kg 合格产品原料；仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 预处理不合格物与修整废料（`preparation_rejects`）

分别称量并记录离开过程的不合格产品、果皮、茎、破损单元和修整物，声明去向和含水状态。

- 选定流：产品特定的有机预处理废物
- 流属性/单位：Mass / kg
- 数量规则：离开预处理的废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的预处理原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定预处理废物 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg
  - 基准：每 kg 转移的预处理原料；仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理废水（`preparation_wastewater`）

记录清洗、漂洗、浸泡及清洁排放的废水，扣除内部回用水，并声明去向和处理路线。

- 选定流：预处理废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放量或有文件依据的水平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的预处理原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定预处理废水 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 kg 转移的预处理原料；仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：直接酸化与配料（`direct_acidulation`）

#### 输入

##### 产品流

###### 直接酸化用预处理原料（`direct_route_prepared_material`）

仅使用分配至直接酸化路线的预处理原料，并保留其产品和批次身份。

- 选定流：预处理蔬菜、豆类或马铃薯原料
- 流属性/单位：Mass / kg
- 数量规则：投入直接酸化批次的预处理净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的酸化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_acidulation_records`
- 来源：`codex-cxs-260-2007`; `codex-cxs-115-1981`
- 数量范围：暂定直接路线原料 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：1.2
  - 单位：kg
  - 基准：每 kg 转移的酸化批次；仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 醋或乙酸介质（`direct_route_acid_medium`）

记录实际醋或食品级乙酸溶液、浓度、供应商和添加质量；不得仅由最终 pH 反推酸质量。

- 选定流：产品特定的醋或食品级乙酸溶液
- 流属性/单位：Mass / kg
- 数量规则：批次配方记录中的净投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的酸化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_acidulation_records`
- 来源：`codex-cxs-260-2007`; `codex-cxs-115-1981`
- 数量范围：暂定酸介质 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：2
  - 单位：kg
  - 基准：每 kg 转移的酸化批次；仅用于候选筛查且按浓度区分
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配方水、盐及其他配料（`direct_route_other_ingredients`）

尽管本紧凑 PCR 卡片合并了采集规则，前景数据集仍须逐项记录各配方投入，并保留配料身份、浓度和质量。

- 选定流：产品特定的配方水、盐、甜味料、香草、香辛料及允许的配料
- 流属性/单位：各配料 Mass / kg
- 数量规则：批准批次配方及领料记录中的各配料净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的酸化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_acidulation_records`
- 来源：`codex-cxs-260-2007`; `codex-cxs-115-1981`
- 数量范围：暂定其他配料 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg
  - 基准：每 kg 转移酸化批次的合计值；仅用于候选筛查，发布时保留分项配料行
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 直接酸化能源（`direct_route_energy`）

记录混合、泵送、加热、冷却、保温及其他路线特定能源，不包括后续灌装和稳定化阶段。

- 选定流：设施特定电力和能源载体
- 流属性/单位：Energy / 各能源载体的 kWh 或 MJ
- 数量规则：计量路线能源或有文件依据的分表能源份额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移的酸化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_acidulation_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定直接路线能源 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kWh
  - 基准：每 kg 转移的酸化批次；能源载体一致换算后仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 直接酸化批次（`direct_acidulated_lot`）

记录转移至灌装的产品和介质总质量，并保留配方、时间、温度和平衡 pH 的关联。

- 选定流：直接酸化的蔬菜、豆类或马铃薯批次
- 流属性/单位：Mass / kg
- 数量规则：转移至灌装的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程转移质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_acidulation_records`
- 来源：`codex-cxs-260-2007`; `codex-cxs-115-1981`
- 数量范围：暂定直接路线转移 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.5
  - 单位：kg
  - 基准：每 kg 过程实测总投入；仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 直接路线排出液和不合格产品（`direct_route_waste`）

前景数据集中应分别记录不合格混合物及排放的酸液或盐水，并声明处理或回收去向。

- 选定流：产品特定不合格混合物和过程排出液
- 流属性/单位：各废物流 Mass / kg
- 数量规则：按去向计量或经质量平衡核实的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的酸化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_acidulation_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定直接路线废物 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 转移酸化批次的合计值；仅用于候选筛查，发布时保留分项废物流
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：腌制或发酵与调酸（`curing_fermentation_acid_adjustment`）

#### 输入

##### 产品流

###### 腌制或发酵用预处理原料（`cured_route_prepared_material`）

仅使用分配至腌制或发酵路线的原料。若腌制发生在供应商处，则在 `receiving_preparation` 接收已腌制投入并关联其上游过程，不在此重复。

- 选定流：预处理蔬菜、豆类或马铃薯原料
- 流属性/单位：Mass / kg
- 数量规则：投入前景腌制或发酵批次的预处理净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的腌制调酸批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cured_route_records`
- 来源：`codex-cxs-115-1981`
- 数量范围：暂定腌制路线原料 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：2
  - 单位：kg
  - 基准：每 kg 转移的腌制调酸批次；仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 腌制盐水、盐和工艺用水（`curing_brine_inputs`）

分别记录补充水、盐、回用盐水及其他腌制介质投入，并记录浓度和回用周期。

- 选定流：产品特定的腌制盐水、盐和水
- 流属性/单位：各投入 Mass / kg
- 数量规则：批次和罐体记录中的各项净投料，内部循环不得重复计入投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的腌制调酸批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cured_route_records`
- 来源：`codex-cxs-115-1981`
- 数量范围：暂定腌制介质 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 转移腌制调酸批次的合计值；仅用于候选筛查，发布时保留分项投入行
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调酸介质和配方配料（`cured_route_acid_and_ingredients`）

记录腌制期间或之后添加的醋或食品级乙酸溶液及每种配料，包括浓度和实际质量。

- 选定流：产品特定的醋或乙酸介质及配方配料
- 流属性/单位：各投入 Mass / kg
- 数量规则：批准配方和领料记录中的各项净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的腌制调酸批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cured_route_records`
- 来源：`codex-cxs-115-1981`; `codex-cxs-260-2007`
- 数量范围：暂定腌制路线调酸和配料 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：3
  - 单位：kg
  - 基准：每 kg 转移腌制调酸批次的合计值；仅用于候选筛查，发布时保留分项投入行
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 腌制与发酵能源（`cured_route_energy`）

记录前景腌制或发酵罐及调酸所分摊的泵送、搅拌、温控、制冷、加热和保温能源。

- 选定流：设施特定电力和能源载体
- 流属性/单位：Energy / 各能源载体的 kWh 或 MJ
- 数量规则：计量路线能源或依据设备使用与占罐时间记录的份额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移的腌制调酸批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cured_route_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定腌制路线能源 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh
  - 基准：每 kg 转移的腌制调酸批次；能源载体一致换算后仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 腌制调酸批次（`cured_acid_adjusted_lot`）

记录转移至灌装的产品和介质总质量，并保留罐体、发酵或腌制时长、配方和平衡 pH 记录的关联。

- 选定流：腌制调酸的蔬菜、豆类或马铃薯批次
- 流属性/单位：Mass / kg
- 数量规则：转移至灌装的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程转移质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cured_route_records`
- 来源：`codex-cxs-115-1981`; `codex-cxs-260-2007`
- 数量范围：暂定腌制路线转移 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.5
  - 单位：kg
  - 基准：每 kg 过程实测总投入；仅用于候选筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废盐水、废水和不合格产品（`cured_route_waste`）

前景数据集中应分别记录废盐水、清洗或脱盐废水、罐体残留和不合格产品，并声明回收或处理去向。

- 选定流：产品特定废盐水、废水、残留和不合格产品
- 流属性/单位：各废物流 Mass / kg
- 数量规则：按去向计量或经质量平衡核实的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的腌制调酸批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cured_route_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定腌制路线废物 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg
  - 基准：每 kg 转移腌制调酸批次的合计值；仅用于候选筛查，发布时保留分项废物流
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：灌装、密封与稳定化（`filling_sealing_stabilization`）

#### 输入

##### 产品流

###### 所选路线的酸性保藏批次（`preserved_lot_to_filling`）

每个产品批次恰好接收一条路线的输出，并在灌装和放行过程中保留路线标识。

- 选定流：直接酸化或腌制调酸的产品批次
- 流属性/单位：Mass / kg
- 数量规则：投入灌装的产品及介质净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 最终产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_stabilization_records`
- 来源：`codex-cxs-260-2007`; `codex-cxs-115-1981`
- 数量范围：暂定灌装得率 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg
  - 基准：每 kg 最终产品净质量；仅用于候选筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料和质量分别记录一级容器、封盖、密封件、标签以及可归属的二级和三级包装。

- 选定流：按材料区分的设施特定包装组件
- 流属性/单位：Mass / kg
- 数量规则：发放包装扣除经核实退回量后，除以合格产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 最终产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_stabilization_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装质量 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：2
  - 单位：kg
  - 基准：每 kg 最终产品净质量；仅用于候选筛查且按包装形式区分
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌装与稳定化能源（`filling_stabilization_energy`）

按载体记录灌装、封口、巴氏杀菌或其他稳定化、冷却、制冷、输送和产线辅助能源。

- 选定流：设施特定电力和能源载体
- 流属性/单位：Energy / 各能源载体的 kWh 或 MJ
- 数量规则：计量产线能源或有文件依据的分表设备能源份额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 最终产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_stabilization_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定灌装与稳定化能源 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh
  - 基准：每 kg 最终产品净质量；能源载体一致换算后仅用于候选筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌装与清洁用水（`filling_cleaning_water`）

记录包装冲洗、稳定化、冷却和清洁的补充水，扣除有文件依据的内部循环量。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：计量或水平衡推导的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 最终产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_stabilization_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定灌装与清洁用水 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg
  - 基准：每 kg 最终产品净质量；仅用于候选筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终保藏产品（`final_preserved_product`）

这是定量参考。可食用净质量包括随产品销售的填充介质，不包括包装。

- 选定流：黄瓜 `54b947e7-ab56-45c8-8210-9c91b85eb845`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次归一化后恰好 1 kg 参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021-2279`
- 数量范围：精确归一化参考量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-pef-2021-2279`

##### 废物流

###### 包装废料和不合格包装（`packaging_scrap`）

按材料和去向分别记录破损容器、封盖和密封件损失、标签和薄膜废料以及不合格已灌装包装。

- 选定流：按材料区分的包装废料
- 流属性/单位：Mass / kg
- 数量规则：离开产线的包装废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 最终产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_stabilization_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装废料 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 kg 最终产品净质量；仅用于候选筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 产品损失和不合格包装产品（`filling_product_loss`）

按回收或处理路线记录溢出产品、开停机损失、未回用样品及不合格包装产品。

- 选定流：产品特定的灌装和稳定化废物
- 流属性/单位：Mass / kg
- 数量规则：离开产线的产品废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 最终产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_stabilization_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定产品损失 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 kg 最终产品净质量；仅用于候选筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌装与清洁废水（`filling_wastewater`）

记录离开过程的包装冲洗、冷却和清洁废水，扣除循环水并声明处理去向。

- 选定流：灌装与清洁废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放量或有文件依据的水平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 最终产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filling_stabilization_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定灌装废水 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg
  - 基准：每 kg 最终产品净质量；仅用于候选筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出或共享操作 | 尽可能通过拆分路线、产线或产品特定记录避免分配；当能够证明被替代功能合理时，也可采用系统扩展。 | `eu-pef-2021-2279` |
| `allocation_route_separation` | 直接路线和腌制/发酵路线 | 在批次层面将两条保藏路线视为互斥。报告期包含两条路线时，分别归一化各路线并按合格产品实测质量汇总；不得把两条路线清单都计入每一千克产品。 | `eu-pef-2021-2279`; `codex-cxs-115-1981` |
| `allocation_residual` | 不可拆分共产品和共享公用工程 | 在能够证明拆分和系统扩展不可行后，若能建立基础物理关系则采用该关系；否则采用有文件依据、价格和参考期一致的经济关系，并报告方法、因子、受影响流及敏感性。废物处理仅按所选生命周期方法和有文件依据的去向承担负荷与收益。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_preparation_records` | `receiving_preparation` | 全部接收原料、预处理水和能源、预处理输出、不合格物及废水 | 批次、秤量、仪表、领料、转移和废物记录 | 产品身份；供应商和批次；新鲜或已腌制状态；毛重、皮重和净重；水表；能源表和载体；预处理转移质量；不合格物质量；废水体积或质量；去向；时间戳 | 将校准秤单、批次表、公用工程仪表和废物联单对齐至同一批次或声明的分配期并核对 | kg；m3 采用实测密度换算；kWh；MJ | 原料和输出逐批；仪表区间与生产对齐 | 覆盖正常产品和运行变化的声明代表性生产期 | 数据集所含全部设施和产线 | 按产品和路线汇总批次记录，扣除有文件依据的退回和内部回用，再通过 `calc_reference_normalization` 归一化 | 秤和仪表校准；签字批次记录；供应商规范；核对和异常日志 |
| `cp_direct_acidulation_records` | `direct_acidulation` | 预处理原料、酸介质、每项配料、能源、转移输出、pH 和废物 | 批次配方、领料、仪表、转移、实验室和废物记录 | 路线 id；产品批次；配料 id 和浓度；各项投料质量；各载体能源；转移质量；平衡 pH、取样相和时间；废物流和去向 | 将批准配方和实际领料与校准质量、分项能源表、转移记录及批次测试结果关联 | kg；kWh；MJ；pH units | 每批；连续或区间公用工程数据按设备运行记录分配 | 声明的直接路线代表期 | 范围内全部直接酸化产线 | 保留配料分项行，核对投入和输出质量，仅归一化直接路线输出 | 批准配方；校准；实验室方法和校准；批次放行；质量平衡复核 |
| `cp_cured_route_records` | `curing_fermentation_acid_adjustment` | 预处理原料、盐水和盐、酸和配料、能源、罐体输出、时长、pH、废盐水、废水及产品废物 | 批次、罐体、配方、领料、仪表、实验室、转移和废物记录 | 路线 id；产品批次；罐体 id；投料和出料质量；盐水浓度和回用；配料浓度和质量；起止时间；温度；各载体能源；平衡 pH；各废物流和去向 | 核对罐体日志、批准配方、实际领料、校准质量、仪表、实验室结果和废物记录 | kg；h；degrees C；kWh；MJ；pH units | 每批或每罐；区间公用工程数据与占罐时间对齐 | 声明的腌制或发酵路线代表期 | 范围内全部腌制或发酵罐及调酸产线 | 内部盐水循环不得重复计入投入，废物流分开，核对质量并归一化路线输出 | 罐体和批次记录；校准；实验室方法和校准；放行记录；质量平衡和回用日志 |
| `cp_filling_stabilization_records` | `filling_sealing_stabilization` | 保藏批次、包装、水、能源、成品、包装废料、产品损失、废水、pH 和稳定化条件 | 批次、包装清单、领料、仪表、过程控制、放行、废物和实验室记录 | 来源路线和批次；产品与介质质量；包装组件和发放质量；合格单元数；净质量；适用时的沥干质量；时间温度或其他稳定化参数；水和能源；平衡 pH；各废物质量和去向 | 将路线转移与包装领料、校准检重秤或台秤、过程控制、公用工程表、废物记录及放行测试关联 | kg；count；kWh；MJ；degrees C 和 time；pH units | 每批；公用工程和过程控制区间与灌装批次对齐 | 覆盖包装和稳定化变体的声明代表期 | 范围内全部灌装和稳定化产线 | 计算合格产品净质量，分离包装质量，核对产品和包装损失并归一化至 1 kg | 包装规范；秤和仪表校准；过程控制记录；放行记录；实验室证据；核对日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单量 | q_normalized = q_attributable / conforming_net_product_mass_kg；按每 1 kg 参考产品报告 q_normalized。包装质量不进入分母，随产品销售的可食用填充介质进入分母。 | 可归属流量；合格产品净质量；包装皮重 | 每 1 kg 参考产品的归一化数量 | `eu-pef-2021-2279` |
| `calc_route_exclusivity` | 保藏路线清单 | 每一批次恰好分配一个 route id。仅按 sum(route-normalized amount × route conforming product mass) / total conforming product mass 汇总路线结果。 | 批次路线 id；路线特定流总量；路线特定合格产品质量 | 报告期路线质量加权清单 | `codex-cxs-115-1981`; `codex-cxs-260-2007`; `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | 每个过程和生产批次 | mass_balance_gap = 实测总质量投入 − 实测产品、废物、回收材料、留存库存变化和实测排放总量。调查并披露重要差额；不得仅为强制闭合而创建基本流排放。 | 投入质量；产品和废物质量；库存变化；排放质量 | 过程质量平衡差额和核对状态 | `eu-pef-2021-2279` |
| `calc_shared_utility` | 共享计量公用工程 | 尝试拆分后才能分配。采用实测设备消耗或运行时间与额定负荷等因果驱动因子；记录驱动因子并将分配份额与仪表总量核对。 | 仪表总量；设备实测或因果驱动因子；生产记录 | 按过程和路线归属的公用工程量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和全部产品流 | 保留生物产品身份、保藏路线、起始状态、呈现形式和填充介质。Cucumbers UUID 仅适用于黄瓜数据集；其他蔬菜、豆类或马铃薯在发布前必须使用语义适当的流。 | 产品规范、标签、供应商记录、批次记录和产品流审查 |
| `dq_primary_records` | 设施前景过程 | 对全部已知原料、水、能源、产品、废物和直接排放流使用设施特定记录。记录代理数据及无法获得直接记录的原因。 | 四项采集协议要求的记录和 `eu-pef-2021-2279` |
| `dq_representativeness` | 数据集参考期 | 选择并披露能够代表所声明产品、路线、技术、地域、包装形式和正常运行变化的时期；披露异常批次及排除的停机。 | 生产计划、路线和产品组合、设施范围、参考期理由及 PEF 代表性评估 |
| `dq_completeness` | 清单及关联数据集 | 核对已知投入和输出，为外购投入和废物处理关联上游数据集，并披露截断、数据缺口、分配及质量平衡差额。 | 质量和公用工程核对、来源清单、排除登记及 `eu-pef-2021-2279` |
| `dq_provisional_ranges` | 全部 `reasoned_estimate` 范围 | 暂定范围只能作为临时 QA 筛查。发布前应以代表性前景批次或经审查可转移证据的范围替代，记录适用性；当证据实质改变校验范围时修订 PCR。 | 范围替代登记、代表性批次汇总或经审查来源、批准记录和更新日志 |
| `dq_test_and_calibration` | 质量、pH、温度、时间、浓度和公用工程测量 | 保留仪器身份、方法、校准或核查状态、取样时间、取样相及检查失败的纠正措施。 | 校准证书、实验室方法、质量控制结果、过程控制日志和批次放行记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_identity_and_flow` | 参考产品 | 核验所声明产品属于语义类别，且 Cucumbers `54b947e7-ab56-45c8-8210-9c91b85eb845` 仅用于黄瓜数据集。其他蔬菜、豆类或马铃薯在选择语义适当产品流前不得发布。 | `unsd-cpc-3-0-21340`; `codex-cxs-115-1981`; `codex-cxs-260-2007` |
| `val_route_exclusive` | 过程图和每一批次 | 核验每批恰好启用一条保藏路线，路线特定投入和废物保留在该路线内，报告期汇总采用合格产品实测质量份额。 | `codex-cxs-115-1981`; `codex-cxs-260-2007` |
| `val_reference_mass` | 定量参考 | 核验分母恰好为 1 kg 可食用产品净质量，包括随售填充介质并排除包装；检查皮重扣除及批次归一化。 | `eu-pef-2021-2279`; `codex-cxs-260-2007` |
| `val_equilibrium_ph` | 放行的酸性保藏产品 | 对按所引 Codex 产品定义建模的产品，核验经校准且关联批次的平衡 pH 结果不高于 4.6，并具备取样相、时间、方法和放行决定。 | `codex-cxs-115-1981`; `codex-cxs-260-2007` |
| `val_foreground_completeness` | 四个前景过程 | 核验全部已知原料、水、能源、产品、废物、包装、废水和直接排放记录均已表示，或明确说明其不存在；核验关联上游数据集及废物去向。 | `eu-pef-2021-2279` |
| `val_mass_and_utility_reconciliation` | 每个过程和报告期 | 核验过程质量平衡差额已调查，共享公用工程与仪表核对，不存在重复计算或任意闭合流。 | `eu-pef-2021-2279` |
| `val_provisional_range_replacement` | 候选定量指导 | 当任何 `reasoned_estimate` 范围仍被用作默认量，或缺乏基于代表性批次或经审查证据的替代评估时，不得发布。超出暂定 QA 范围的数值需调查和披露，不得自动替代。 | `eu-pef-2021-2279` |
| `val_allocation_and_exclusions` | 分配、截断和报告 | 核验已尝试拆分，所选残余分配有文件依据且可复现，包装已纳入，排除有理由，并通过局限性声明防止无依据比较或比较性断言。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明酸性保藏蔬菜、豆类或马铃薯的设施特定前景数据包及工厂门产品数据集 |
| downstream_use | 完成方法审查和发布后的 `secondary_dataset`；`background_dataset` |
| allowed_use | 为所声明物种、路线、配方、地域、时期、包装和稳定化技术构建产品特定过程及生命周期模型；仅按规定规则跨路线汇总 |
| excluded_use | 使用 Cucumbers UUID 建模非黄瓜产品；对全部 CPC 21340 产品进行无限定通用建模；在功能、产品流、路线、系统边界、数据质量和审查未对齐时直接比较或作比较性断言 |
| required_metadata | 产品物种和通用名；所选产品流 UUID；CPC 背景；黄瓜/非黄瓜状态；路线；新鲜或已腌制起始状态；呈现形式；填充介质和配方；pH 方法与结果；净质量和沥干质量基准；包装组件；稳定化方法；设施地域；技术；参考期；分配；截断；上游数据集选择 |
| required_quality_disclosure | 前景覆盖；路线和产品代表性；校准与放行证据；质量和公用工程核对；共享服务分配；废物和废水去向；代理和数据缺口登记；暂定范围替代状态；范围较窄的黄瓜代表流的局限性 |
| update_trigger | 产品流语义或 UUID 变化；建模其他蔬菜、豆类或马铃薯；配方、路线、稳定化、包装、技术、地域或供应商实质变化；CPC、Codex 或 PEF 来源修订；代表性批次证据替代或实质改变暂定范围；影响边界、分配或校验的审查发现 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21340` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》第 3.0 版，子类 21340 “Vegetables, pulses and potatoes, preserved by vinegar or acetic acid”，官方结构文件：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-11） | 产品类别名称和分类背景；不作为定量过程证据 |
| `codex-cxs-260-2007` | 标准（`standard`） | FAO/WHO Codex Alimentarius，CXS 260-2007，Standard for Pickled Fruits and Vegetables，2023 年修订：https://workspace.fao.org/sites/codex/Standards/CXS%20260-2007/CXS_260e.pdf（检索于 2026-08-11） | 宽泛产品定义、过程分解、酸性填充介质、平衡 pH、质量、灌装、标签和卫生背景；该标准自身范围排除腌黄瓜 |
| `codex-cxs-115-1981` | 标准（`standard`） | FAO/WHO Codex Alimentarius，CXS 115-1981，Standard for Pickled Cucumbers (Cucumber Pickles)，2025 年修订：https://openknowledge.fao.org/handle/20.500.14283/cd8998en（检索于 2026-08-11） | 黄瓜特定的鲜装和腌制/发酵路线、酸化、平衡 pH、配料、产品质量、灌装及范围较窄的代表产品边界 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会，2021 年 12 月 15 日 Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，合并文本：https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-11） | 功能单位和参考流逻辑、生命周期及前景边界、企业特定清单、分配层级、排除、数据质量、记录和校验 |
