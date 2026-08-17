---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-dried-salted-or-in-brine-but-not-smoked
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 干制、盐腌或盐水浸泡但未熏制的鱼片

## 1. 范围与适用性

本 PCR 适用于通过干燥、干盐腌、湿盐腌、盐水浸泡、盐水注射或上述工艺组合进行保藏，且不采用熏制或烟熏调味的可食鱼片。前景产品是在加工厂门口交付、按生产者声明以干制、盐腌或浸于盐水状态销售的成品鱼片。

本 PCR 不包括熏鱼、烟熏调味鱼、烟熏干鱼；不作为鱼片销售的整鱼或剖开鱼；碎鱼肉；鱼肝和鱼卵；罐藏或熟制鱼制品；以及仅冷冻而未盐腌或干燥的鱼片。必须声明鱼种、捕捞或养殖来源、进厂鲜/冷藏/冷冻状态、盐腌路线、干燥状态、成品是否带盐水、包装形式、储存温度，以及可食产品的水分或水分活度控制，因为这些信息会实质影响清单解释和食品安全控制。

前景边界始于原料鱼或预切鱼片以声明的温度状态进入加工设施，止于 1 kg 可食成品净质量（不含包装）完成包装并可离开加工厂。研究纳入上游时，鱼类生产或捕捞、冰、盐、包装、电力、燃料、供水和进厂运输由关联的上游数据集表示；默认前景边界不包括下游配送、零售、烹调、消费和报废阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-dried-salted-or-in-brine-but-not-smoked |
| classification_refs | CPC 3.0: 21224, exact |
| covered_products | 经干燥、盐腌、湿盐腌、干盐腌、盐水注射或盐水浸泡的可食鱼片，包括干燥与盐腌组合，但不采用熏制或烟熏调味 |
| excluded_products | 熏制、烟熏调味或烟熏干鱼；非鱼片形态的整鱼或剖开鱼；碎鱼肉；鱼肝或鱼卵；罐藏或熟制品；未经盐腌或干燥的仅冷冻鱼片 |
| representative_product | 采用已声明的干盐腌或盐水浸泡路线保藏、可选择干燥、未经熏制并完成包装的可食鱼片 |
| production_route | 控温接收；检查及必要时解冻；可选的切片、修整、清洗和沥水；盐腌或盐水浸泡与熟成；条件性卫生干燥；整理、包装和受控储存 |
| market_state | 加工厂门口的可食成品；按声明为干制、盐腌或盐水浸泡状态；已包装；只有在产品特定食品安全计划支持时才声明为冷藏、冷冻或常温稳定 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过干燥、盐腌或盐水浸泡保藏且未经熏制的可食鱼片 |
| How much | 1 kg 可食鱼片成品净质量，不含包装及非产品运输用冰 |
| How well | 符合所声明的鱼种、保藏路线、盐/盐水状态、干燥状态、水分或水分活度控制、食品安全计划和市场规格 |
| How long or cycle | 在加工厂门口交付的一个生产批次；保质期和所需储存温度是已声明的批次属性，不属于参考数量本身 |
| reference_flow_link | `reference_finished_fish_fillets` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | Fish fillets, dried, salted or in brine, but not smoked `b41d734d-e255-404c-b6bb-b2c408f653c6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼种或鱼种组；捕捞或养殖来源；进厂产品形态和鲜/冷藏/冷冻状态；切片在场内或上游完成；盐腌技术；盐和盐水规格；干制或非干制状态；成品沥干销售或带盐水销售；适用时的水分或水分活度控制；包装形式；储存温度和保质期依据；地理和时间代表性 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 鱼片参考成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景清单归一化到 1 kg 可食成品净质量；不计包装、运输用冰和沥除的游离盐水，除非上市产品定义明确将盐水计入销售净含量。 |
| `incoming_mass_state` | 进厂原料鱼或鱼片 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录称量的接收质量，并分别声明是否包含冰衣、表面冰、游离液体、鱼头、鱼皮、鱼骨或其他非鱼片材料；不得将接收毛质量静默换算为可食鱼片质量。 |
| `brine_component_accounting` | 盐水配制及成品盐水 | Mass | kg | 将水和食品级盐分别记录为投入。成品保留盐水与废盐水或排放盐水分开记录，并说明参考净含量是否包括保留盐水。 |
| `moisture_and_dry_matter` | 干燥及熟成 | Mass；无量纲分数 | kg；kg/kg 或百分比 | 使用熟成或干燥前后的成对湿基质量记录。声明水分或盐浓度采用湿基、干基还是水相基准，并保留实验室方法。 |
| `energy_conversion` | 制冷、泵送、干燥和包装 | Energy | kWh 或 MJ | 保留计量单位；仅采用显式因子换算，分别识别电力与燃料，并在归一化前用有文件依据的物理驱动因子分配共享公用工程计量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原料鱼或预切鱼片进入加工设施时，已披露鱼种、来源、形态、温度状态、冰衣或游离液体处理及既往保藏方式 |
| starting_condition_role | 以前景门口投入的接收数量和状态作为收率、损失、冷链及加工记录的锚点 |
| product_classification_scope | 经干燥、盐腌或盐水浸泡且未经熏制的可食鱼片；CPC 3.0 代码 21224 仅为分类语境，不是 canonical PCR identity |
| recursive_input_rule | 同类别盐腌、干制或盐水浸泡鱼片作为配料或中间品进入时，按其上游数据集和声明状态一次性记录为产品投入；不得在当前前景系统内递归重建其上游保藏过程 |
| upstream_dataset_requirement | 当进厂鱼或鱼片、盐、水、冰、包装、电力、燃料、制冷剂和运输跨越研究边界时，关联具代表性的上游数据集，并披露代理数据的地理、技术、年代和分配 |
| disclosure | 声明设施地理、报告期、鱼种与来源、原料状态、加工路线、纳入的条件性过程、包装、冷藏条件、收率基准、共产品处理、排除项、截断及全部上游代理 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | 前景加工 | 对报告设施实际执行的每项作业，纳入接收和控温处理、检查、适用时的解冻和准备、盐腌或盐水浸泡及熟成、条件性干燥、整理、包装、储存、直接公用工程、拒收品、废水或废盐水及其他场内废物。 | `codex-cxc-52-2003` |
| `boundary_conditional_routes` | 条件性作业 | 仅在场内处理整鱼、去内脏鱼或其他非鱼片原料时纳入切片和修整；仅在干制产品路线中纳入干燥；仅在产品带盐水销售时纳入成品盐水配制；披露未纳入的条件性作业。 | `codex-cxc-52-2003` |
| `boundary_food_safety_controls` | 过程控制记录 | 保留产品特定 HACCP 或等效危害控制证据，覆盖原料适用性、时间温度、饮用水和食品级盐、适用时的盐水浓度、卫生干燥、防污染、包装与储存。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `boundary_upstream_downstream` | 生命周期关联 | 将上游生产或捕捞及供应链负荷置于前景门口之外，并通过具代表性的数据集关联；默认前景包排除下游配送、零售、烹调、消费和报废，除非声明的研究扩大边界。 | `eu-pef-2021-2279` |
| `boundary_cutoff_disclosure` | 完整性 | 不得仅因 Tiangong UUID 待审而省略流。量化全部实测材料、能源、水、产品、共产品、废物、废水和直接基本流，并披露研究特定截断及其质量、能源和预期环境相关性。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_cold_handling` | 接收与控温处理 | `required` | 始终 | 前景接收、身份与适用性检查、解冻判断及冷链处理 | kg 接收原料鱼或鱼片 |
| `preparation_filleting` | 准备、切片、修整、清洗和沥水 | `conditional` | 进厂材料需在场内切片、去皮、去骨、修整、清洗或沥水时纳入 | 转化为准备鱼片的前景过程 | kg 准备鱼片 |
| `salting_curing` | 盐腌、盐水浸泡与熟成 | `required` | 始终；选择并声明适用盐腌路线 | 前景保藏和熟成 | kg 熟成鱼片 |
| `hygienic_drying` | 卫生干燥 | `conditional` | 成品声明为干制或实际执行干燥步骤时纳入 | 前景水分去除 | kg 干制鱼片 |
| `finishing_packaging_storage` | 整理、包装与受控储存 | `required` | 始终 | 成品准备与加工厂门口输出 | 1 kg 净参考产品 |

### 过程：接收与控温处理（`receiving_cold_handling`）

#### 输入

##### 产品流

###### 进厂新鲜或冷藏整鱼（`incoming_whole_fish_fresh_chilled`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：新鲜或冷藏整鱼
- 适用条件：仅用于新鲜或冷藏整鱼进厂；记录物种和来源。
- 流属性/单位：Mass / kg
- 数量规则：归属于本过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`; `codex-cxs-190-1995`
- 数量范围：暂定原料质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：4.0
  - 单位：kg/kg 净成品
  - 基准：覆盖预切鱼片、场内切片和干燥路线的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进厂冷冻整鱼（`incoming_whole_fish_frozen`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：冷冻整鱼
- 适用条件：仅用于冷冻整鱼进厂。
- 流属性/单位：Mass / kg
- 数量规则：归属于本过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`; `codex-cxs-190-1995`
- 数量范围：暂定原料质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：4.0
  - 单位：kg/kg 净成品
  - 基准：覆盖预切鱼片、场内切片和干燥路线的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进厂新鲜或冷藏鱼片（`incoming_fish_fillets_fresh_chilled`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Fish fillets and fish meat (whether or not minced), fresh or chilled `a1c31d45-a225-426f-908a-f79eae6c071f`
- 适用条件：仅用于新鲜或冷藏鱼片进厂。
- 流属性/单位：Mass / kg
- 数量规则：归属于本过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`; `codex-cxs-190-1995`
- 数量范围：暂定原料质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：4.0
  - 单位：kg/kg 净成品
  - 基准：覆盖预切鱼片、场内切片和干燥路线的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进厂冷冻鱼片（`incoming_fish_fillets_frozen`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Frozen fish fillets `130aa38f-8c63-4d0b-ad05-0b2c4426cdd8`
- 适用条件：仅用于冷冻鱼片进厂。
- 流属性/单位：Mass / kg
- 数量规则：归属于本过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`; `codex-cxs-190-1995`
- 数量范围：暂定原料质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：4.0
  - 单位：kg/kg 净成品
  - 基准：覆盖预切鱼片、场内切片和干燥路线的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收过程低压电网电力（`receiving_grid_electricity_low_voltage`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- 适用条件：仅用于低于 1 kV 的消费混合供电；不得与中压供电重复。
- 流属性/单位：Energy / kWh
- 数量规则：归属于接收、解冻控制和冷藏且以低于 1 kV 供给的计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_energy`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定接收和冷藏用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 净成品
  - 基准：路线、气候、电压和时长证据审查前的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收过程中压电网电力（`receiving_grid_electricity_medium_voltage`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- 适用条件：仅用于 1–35 kV 的消费混合供电；不得与低压供电重复。
- 流属性/单位：Energy / kWh
- 数量规则：归属于接收、解冻控制和冷藏且以 1–35 kV 供给的计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_energy`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定接收和冷藏用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 净成品
  - 基准：路线、气候、电压和时长证据审查前的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 鱼类冷藏用食品级冰（`receiving_food_grade_ice`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：鱼类冷藏用食品级冰
- 流属性/单位：Mass / kg
- 数量规则：该批次使用的实测外购或现场制备食品级冰质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_energy`
- 来源：`codex-cxc-52-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收整鱼（`accepted_whole_fish`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：验收整鱼
- 流属性/单位：Mass / kg
- 数量规则：接收整鱼质量减对应拒收物及未进入加工的实测游离液体
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`

###### 验收鱼片（`accepted_fish_fillets`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：验收鱼片
- 流属性/单位：Mass / kg
- 数量规则：接收鱼片质量减对应拒收物及未进入加工的实测游离液体
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 拒收整鱼（`receiving_rejected_whole_fish`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：拒收整鱼
- 流属性/单位：Mass / kg
- 数量规则：按去向实测拒收或隔离整鱼质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定接收拒收筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg/kg 接收材料
  - 基准：对应接收材料的拒收比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 拒收鱼片（`receiving_rejected_fish_fillets`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：拒收鱼片
- 流属性/单位：Mass / kg
- 数量规则：按去向实测拒收或隔离鱼片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定接收拒收筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg/kg 接收材料
  - 基准：对应接收材料的拒收比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 破损聚乙烯进厂包装（`receiving_damaged_polyethylene_packaging`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：破损聚乙烯进厂包装
- 流属性/单位：Mass / kg
- 数量规则：按去向实测破损聚乙烯包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`

###### 破损瓦楞纸板进厂包装（`receiving_damaged_corrugated_packaging`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：破损瓦楞纸板进厂包装
- 流属性/单位：Mass / kg
- 数量规则：按去向实测破损瓦楞纸板包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`

###### 分离冰衣（`receiving_separated_ice_glaze`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：进厂鱼料分离冰衣
- 流属性/单位：Mass / kg
- 数量规则：未进入加工的实测分离冰衣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`

###### 解冻析出液（`receiving_thaw_purge_liquid`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：进厂鱼料解冻析出液
- 流属性/单位：Mass / kg
- 数量规则：未进入加工的实测解冻析出液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxc-52-2003`

##### 基本流

### 过程：准备、切片、修整、清洗和沥水（`preparation_filleting`）

#### 输入

##### 产品流

###### 用于准备的验收整鱼（`accepted_whole_fish_to_preparation`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：验收整鱼
- 适用条件：仅在场内准备整鱼时使用。
- 流属性/单位：Mass / kg
- 数量规则：归属于本过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`
- 来源：`codex-cxc-52-2003`

###### 用于准备的验收鱼片（`accepted_fish_fillets_to_preparation`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：验收鱼片
- 适用条件：仅在进厂鱼片仍需场内准备时使用。
- 流属性/单位：Mass / kg
- 数量规则：归属于本过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`
- 来源：`codex-cxc-52-2003`

###### 准备用工艺水（`preparation_process_water`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于准备过程清洗、漂洗和卫生作业的计量或计算工艺用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water_waste`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定准备用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg 净成品
  - 基准：归属于准备过程清洗和卫生作业的宽泛首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备鱼片（`prepared_fillets`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：准备鱼片
- 流属性/单位：Mass / kg
- 数量规则：实测沥水后准备鱼片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 鱼修整料（`preparation_fish_trimmings`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：鱼修整料
- 流属性/单位：Mass / kg
- 数量规则：按去向实测鱼修整料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water_waste`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 鱼皮（`preparation_fish_skin`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：鱼皮
- 流属性/单位：Mass / kg
- 数量规则：按去向实测鱼皮质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water_waste`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 鱼骨（`preparation_fish_bones`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：鱼骨
- 流属性/单位：Mass / kg
- 数量规则：按去向实测鱼骨质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water_waste`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 鱼内脏（`preparation_fish_offal`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：鱼内脏
- 流属性/单位：Mass / kg
- 数量规则：按去向实测鱼内脏质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water_waste`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 鱼类准备废水（`preparation_wastewater`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：鱼类准备废水
- 流属性/单位：Volume / m3
- 数量规则：归属于准备过程的计量废水排放量或水量平衡体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water_waste`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定准备废水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：m3/kg 净成品
  - 基准：在获得计量排放和回用证据前的宽泛首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：盐腌、盐水浸泡与熟成（`salting_curing`）

#### 输入

##### 产品流

###### 用于熟成的准备鱼片（`prepared_fillets_to_curing`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：准备鱼片
- 流属性/单位：Mass / kg
- 数量规则：进入熟成过程的实测准备鱼片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每熟成批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_batch`
- 来源：`codex-cxc-52-2003`

###### 食品级盐（`food_grade_salt`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Salt, food-grade, for brine preparation `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：Mass / kg
- 数量规则：批次领用新鲜盐减实测退库可回收未用盐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定盐投入筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：1.5
  - 单位：kg/kg 净成品
  - 基准：覆盖干盐腌、湿盐腌和盐水浸泡路线的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐水配制用工艺水（`brine_process_water`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 适用条件：仅用于湿盐腌、盐水浸泡、注射或补充盐水。
- 流属性/单位：Mass / kg
- 数量规则：配制或补充盐水所用的实测工艺水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定盐水用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净成品
  - 基准：覆盖盐水用水为零的干盐路线和采用批次盐水的湿法路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 熟成过程低压电网电力（`curing_grid_electricity_low_voltage`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- 适用条件：仅用于低于 1 kV 的供电；不得与中压供电重复。
- 流属性/单位：Energy / kWh
- 数量规则：归属于泵送、盐水配制、注射、搬运和控温熟成的计量低压电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_energy_waste`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定熟成用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 净成品
  - 基准：路线、电压和熟成时长证据形成前的宽泛首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 熟成过程中压电网电力（`curing_grid_electricity_medium_voltage`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- 适用条件：仅用于 1–35 kV 的供电；不得与低压供电重复。
- 流属性/单位：Energy / kWh
- 数量规则：归属于泵送、盐水配制、注射、搬运和控温熟成的计量中压电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_energy_waste`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定熟成用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 净成品
  - 基准：路线、电压和熟成时长证据形成前的宽泛首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 熟成鱼片（`cured_fillets`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：熟成鱼片
- 流属性/单位：Mass / kg
- 数量规则：实测沥水后熟成鱼片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每熟成批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_batch`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 废熟成盐水（`curing_spent_brine`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：废熟成盐水
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废盐水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_energy_waste`
- 来源：`codex-cxc-52-2003`

###### 熟成析出液（`curing_purge_liquid`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：熟成析出液
- 流属性/单位：Mass / kg
- 数量规则：按去向实测熟成析出液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_energy_waste`
- 来源：`codex-cxc-52-2003`

###### 废弃受污染盐（`curing_discarded_salt`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：废弃受污染盐
- 流属性/单位：Mass / kg
- 数量规则：从批次中去除的实测受污染盐质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_energy_waste`
- 来源：`codex-cxc-52-2003`

###### 熟成清洗废水（`curing_cleaning_wastewater`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：熟成清洗废水
- 流属性/单位：Volume / m3
- 数量规则：归属于熟成过程的计量清洗废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salting_energy_waste`
- 来源：`codex-cxc-52-2003`

##### 基本流

### 过程：卫生干燥（`hygienic_drying`）

#### 输入

##### 产品流

###### 用于干燥的熟成鱼片（`cured_fillets_to_drying`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：熟成鱼片
- 流属性/单位：Mass / kg
- 数量规则：装入干燥机的实测熟成鱼片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 来源：`codex-cxc-52-2003`

###### 干燥过程低压电网电力（`drying_grid_electricity_low_voltage`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- 适用条件：仅用于低于 1 kV 的供电。
- 流属性/单位：Energy / kWh
- 数量规则：归属于干燥机风机、电加热器、除湿和控制装置的计量低压电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_energy`
- 来源：`codex-cxc-52-2003`

###### 干燥过程中压电网电力（`drying_grid_electricity_medium_voltage`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- 适用条件：仅用于 1–35 kV 的供电。
- 流属性/单位：Energy / kWh
- 数量规则：归属于干燥机风机、电加热器、除湿和控制装置的计量中压电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_energy`
- 来源：`codex-cxc-52-2003`

###### 干燥用蒸汽（`drying_steam`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 适用条件：仅用于外购蒸汽干燥；避免与锅炉燃料重复。
- 流属性/单位：Mass / kg
- 数量规则：供应干燥机的实测外购蒸汽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_energy`
- 来源：`codex-cxc-52-2003`

###### 干燥用热水（`drying_hot_water`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：声明进回水温度的工业热水
- 适用条件：仅用于热水供热路线。
- 流属性/单位：Energy / MJ
- 数量规则：归属于干燥过程的计量热水交付热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_energy`
- 来源：`codex-cxc-52-2003`

###### 干燥用天然气（`drying_natural_gas`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 适用条件：仅在燃烧天然气提供干燥热时使用。
- 流属性/单位：Energy / MJ
- 数量规则：归属于干燥过程的计量天然气高位热值能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_energy`
- 来源：`codex-cxc-52-2003`

###### 干燥用液化石油气（`drying_lpg`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 适用条件：仅在燃烧 LPG 提供干燥热时使用。
- 流属性/单位：Mass / kg
- 数量规则：归属于干燥过程的实测液化石油气质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_energy`
- 来源：`codex-cxc-52-2003`

###### 干燥用柴油（`drying_diesel_oil`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 适用条件：仅在燃烧柴油提供干燥热时使用。
- 流属性/单位：Mass / kg
- 数量规则：归属于干燥过程的实测柴油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_energy`
- 来源：`codex-cxc-52-2003`

###### 干燥用燃料油（`drying_fuel_oil`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：重质燃料油
- 适用条件：仅在燃烧重质燃料油提供干燥热时使用。
- 流属性/单位：Mass / kg
- 数量规则：归属于干燥过程的实测重质燃料油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_energy`
- 来源：`codex-cxc-52-2003`

###### 干燥用木颗粒（`drying_wood_pellets`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Wood pellets `4905586c-0722-4c91-923f-112215546a41`
- 适用条件：仅在未处理木颗粒提供干燥热时使用；熏制燃料仍被排除。
- 流属性/单位：Mass / kg
- 数量规则：归属于干燥过程的实测木颗粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_energy`
- 来源：`codex-cxc-52-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干制鱼片（`dried_fillets`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：干制鱼片
- 流属性/单位：Mass / kg
- 数量规则：实测冷却并平衡后的干制鱼片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 来源：`codex-cxc-52-2003`

##### 废物流

##### 基本流

###### 干燥排向空气的水蒸气（`drying_water_vapour_to_air`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Water vapour, to air, unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_drying_water_removed` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定干燥损失质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg 水/kg 净成品
  - 基准：覆盖轻度干燥和强干燥鱼片的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：整理、包装与受控储存（`finishing_packaging_storage`）

#### 输入

##### 产品流

###### 用于包装的熟成鱼片（`cured_fillets_to_packing`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：熟成鱼片
- 适用条件：用于未经过干燥的盐腌或盐水浸泡产品。
- 流属性/单位：Mass / kg
- 数量规则：转入包装的实测熟成鱼片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`

###### 用于包装的干制鱼片（`dried_fillets_to_packing`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：干制鱼片
- 适用条件：用于经过卫生干燥的产品。
- 流属性/单位：Mass / kg
- 数量规则：转入包装的实测干制鱼片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`

###### 包装产品保留的食品级盐水（`retained_food_grade_brine_to_packing`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：保留的食品级盐水
- 适用条件：仅在上市鱼片以盐水浸泡状态销售时使用。
- 流属性/单位：Mass / kg
- 数量规则：随上市产品包装的实测保留盐水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`

###### 聚乙烯包装膜（`packaging_polyethylene_film`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：聚乙烯食品包装膜
- 适用条件：仅用于聚乙烯膜包装。
- 流属性/单位：Mass / kg
- 数量规则：聚乙烯膜领用量减未用退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`eu-pef-2021-2279`

###### 瓦楞纸板包装（`packaging_corrugated_cardboard`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：瓦楞纸板包装领用量减未用退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`eu-pef-2021-2279`

###### 玻璃罐包装（`packaging_glass_jar`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- 适用条件：仅用于玻璃罐包装。
- 流属性/单位：Mass / kg
- 数量规则：玻璃罐领用质量减未用退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`eu-pef-2021-2279`

###### 钢制食品罐包装（`packaging_steel_food_can`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Steel food can `f09b782f-b3db-4b1e-8473-597edcc5b6d7`
- 适用条件：仅用于钢罐包装。
- 流属性/单位：Mass / kg
- 数量规则：钢制食品罐领用质量减未用退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`eu-pef-2021-2279`

###### 木托盘三级包装（`packaging_wood_pallet`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Wood pallet `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 适用条件：仅用于非周转托盘消耗；周转托盘服务应另行建模。
- 流属性/单位：Mass / kg
- 数量规则：归属于批次的实测非周转木托盘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`eu-pef-2021-2279`

###### 包装和储存低压电网电力（`packaging_grid_electricity_low_voltage`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- 适用条件：仅用于低于 1 kV 的供电。
- 流属性/单位：Energy / kWh
- 数量规则：分配至包装和受控储存的计量低压电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定包装和储存用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 净成品
  - 基准：储存温度、时长、气候、电压和设备证据形成前的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装和储存中压电网电力（`packaging_grid_electricity_medium_voltage`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- 适用条件：仅用于 1–35 kV 的供电。
- 流属性/单位：Energy / kWh
- 数量规则：分配至包装和受控储存的计量中压电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定包装和储存用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 净成品
  - 基准：储存温度、时长、气候、电压和设备证据形成前的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考鱼片成品（`reference_finished_fish_fillets`）

这是唯一参考产品输出，不含包装质量和非产品运输用冰。

- 选定流：Fish fillets, dried, salted or in brine, but not smoked `b41d734d-e255-404c-b6bb-b2c408f653c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg 净成品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021-2279`
- 数量范围：参考流恒等校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：归一化参考产品输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-pef-2021-2279`

##### 废物流

###### 不合格成品鱼片（`finishing_offspec_fish_fillets`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：不合格成品鱼片
- 流属性/单位：Mass / kg
- 数量规则：按去向实测不合格成品鱼片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 成品沥除盐水（`finishing_drained_product_brine`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：成品沥除盐水
- 流属性/单位：Mass / kg
- 数量规则：从产品沥除且未返回上市产品的实测盐水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 聚乙烯包装废料（`finishing_polyethylene_packaging_scrap`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：聚乙烯包装废料
- 流属性/单位：Mass / kg
- 数量规则：按去向实测聚乙烯包装边角料和拒收膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 瓦楞纸板包装废物（`finishing_corrugated_cardboard_waste`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass / kg
- 数量规则：按去向实测瓦楞纸板边角料和拒收包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 破损或拒收玻璃罐（`finishing_broken_glass_jars`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：破损或拒收玻璃罐
- 流属性/单位：Mass / kg
- 数量规则：按去向实测破损或拒收玻璃罐质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 拒收钢制食品罐（`finishing_rejected_steel_food_cans`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：拒收钢制食品罐
- 流属性/单位：Mass / kg
- 数量规则：按去向实测拒收钢制食品罐质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

###### 拒收木托盘（`finishing_rejected_wood_pallets`）

在所述适用条件成立时单独记录该原子交换。

- 选定流：拒收木托盘
- 流属性/单位：Mass / kg
- 数量规则：按去向实测拒收非周转木托盘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出前景过程 | 首先通过对独立计量的接收、准备、熟成、干燥、包装、储存和残余物处理作业进行细分来避免分配；只有在被替代功能可证明且与研究目标一致时才采用系统扩展。 | `eu-pef-2021-2279` |
| `allocation_waste_co_product_status` | 鱼类修整料、内脏、回收盐和其他输出 | 根据设施门口的实际去向、法律状态和经济功能，确定并记录每项非参考输出属于废物、可回收材料还是共产品；没有证据时不得给废物流分配共产品抵扣。 | `eu-pef-2021-2279` |
| `allocation_physical_then_economic` | 无法避免的联合负荷 | 不能细分或合理系统扩展时，采用反映因果关系的物理关系，如实测质量、干物质或其他有文件依据的过程驱动因子。没有可辩护物理关系时，采用同期净收入进行经济分配，并报告价格期、币种和敏感性。 | `eu-pef-2021-2279` |
| `allocation_shared_utilities` | 共享制冷、供水、卫生、干燥和储存 | 使用分表读数、设备运行时间与额定负荷、质量吞吐量、储存质量-时间或干燥批次能源等有文件依据的物理驱动因子分配共享公用工程；存在物理驱动因子时不得按收入分配公用工程。 | `eu-pef-2021-2279` |
| `allocation_upstream_consistency` | 进厂鱼类及背景数据集 | 保留上游鱼类生产或捕捞数据集内含的分配方法，披露该方法和代理错配，不得在前景加工模型内重新分配上游负荷。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_batch` | `receiving_cold_handling` | 进厂、验收和拒收鱼类质量 | 地磅或校准秤记录；接收检查；供应商和批次记录 | lot_id; species; origin; supplier; incoming_form; temperature; gross_mass; glaze_or_free_liquid; accepted_mass; rejected_mass; disposition | 按批次核对接收单、校准称量及检查记录 | kg; deg C | 每批 | 有代表性的连续 12 个月，或已声明较短生产期内的全部批次 | 声明数据集内的全部设施 | 按批次汇总质量，并通过批次谱系归一化验收、拒收和最终输出 | 校准记录；接收日志；供应商规格；拒收去向；温度记录 |
| `cp_receiving_energy` | `receiving_cold_handling` | 接收、解冻控制、制冰和冷藏公用工程 | 电表；购冰发票或制冰日志；设备日志 | meter_start; meter_end; ice_mass; equipment_hours; rated_load; lots_served | 优先使用分表数据，否则采用有文件依据的设备小时分配 | kWh; kg | 每批或每日计量区间 | 与生产清单相同期间 | 范围内全部接收和冷藏设备 | 按实测设备时间、质量-时间或其他有文件依据的物理驱动因子分配共享公用工程 | 电表身份；发票；设备日志；分配工作表 |
| `cp_preparation_batch` | `preparation_filleting` | 验收投入及准备鱼片输出 | 校准批次称量和生产记录 | batch_id; input_mass; prepared_fillet_mass; species; operations_performed; start_time; end_time | 在一致定义状态下称量沥水投入和输出 | kg | 每批 | 与生产清单相同期间 | 范围内全部准备线 | 汇总成对批次投入和输出，保留路线特定收率 | 校准；批次表；操作员签字；状态定义记录 |
| `cp_preparation_water_waste` | `preparation_filleting` | 加工用水、固体残余和废水 | 水表；废物秤；排放表；去向记录 | water_in; recirculated_water; wastewater_out; residue_type; residue_mass; destination; pollutant_measurements | 计量水和废水并称量残余物容器；仅在缺少排放表时采用有文件依据的平衡 | kg; m3 | 每日或每批 | 与生产清单相同期间 | 可归属于生产线的全部准备和卫生作业 | 按物流和去向汇总，避免重复计算循环水 | 计量记录；秤校准；废物转移单；实验室报告 |
| `cp_salting_batch` | `salting_curing` | 鱼片、盐、盐水用水、熟成输出及产品状态 | 批次配方；校准秤；罐体记录；盐度计或实验室记录 | batch_id; fillet_input; salt_added; water_added; brine_reused; brine_concentration; curing_time; temperature; cured_mass; retained_brine; moisture_or_salt_result | 核对领用材料、实测罐体添加量、沥水输出及产品检测 | kg; hours; deg C; 按声明的浓度单位 | 每批 | 与生产清单相同期间 | 范围内每条盐腌或盐水浸泡路线 | 计算路线特定总量，分别报告新鲜盐水和回用盐水 | 配方授权；校准；盐度计或实验室记录；时间温度日志 |
| `cp_salting_energy_waste` | `salting_curing` | 熟成公用工程、废盐水、析出液和废弃盐 | 电表；设备日志；罐体排放及废物记录 | electricity; pump_hours; cooling_hours; spent_brine_mass_or_volume; purge; discarded_salt; destination | 计量公用工程并称量或计量每项排放 | kWh; kg; m3 | 每批或每日区间 | 与生产清单相同期间 | 范围内全部熟成罐、泵和冷却设备 | 用物理因子分配共享公用工程，并按去向汇总废物 | 电表身份；罐体记录；废物转移单；排放记录 |
| `cp_drying_batch` | `hygienic_drying` | 干燥机投入、输出、水分、水分活度及计算除水量 | 校准秤；水分或水分活度检测；干燥批次记录 | batch_id; input_mass; output_mass; inlet_moisture_basis; inlet_moisture; outlet_moisture_basis; outlet_moisture; water_activity; time; temperature; humidity; airflow | 将冷却、平衡后的质量测量与已识别的实验室或仪器方法配对 | kg; percent 或 kg/kg; dimensionless; hours; deg C | 每干燥批次 | 与生产清单相同期间 | 范围内每种干燥技术 | 使用 `calc_drying_water_removed` 计算除水量；仅汇总水分基准兼容的批次 | 秤校准；仪器校准；实验室方法；干燥日志 |
| `cp_drying_energy` | `hygienic_drying` | 电力和燃料 | 电表；燃料计量或发票；干燥控制日志 | electricity; fuel_quantity; fuel_unit; energy_factor; batch_id; shared_batches | 优先使用批次直接计量，否则按有文件依据的运行时间和负荷分配 | kWh; MJ; 燃料原单位 | 每批或计量区间 | 与生产清单相同期间 | 范围内全部干燥机及辅助设备 | 显式换算单位并按批次运行时间和负荷分配共享能源 | 计量表；发票；燃料因子来源；分配工作表 |
| `cp_packaging_batch` | `finishing_packaging_storage` | 加工投入、保留盐水、包装、成品及整理废物 | 生产线批次记录；校准秤；包装领用记录 | lot_id; processed_input; retained_brine; packaging_by_material; net_product; reject_product; packaging_waste; units_packed | 核对产品和包装的领用、退库、包装和拒收 | kg; item count | 每批 | 与生产清单相同期间 | 范围内全部包装形式和生产线 | 按包装材料和产品形式分别汇总，将可食产品净质量归一化到 1 kg | 校准；包装物料清单；领退记录；包装单元重量检查 |
| `cp_packaging_energy` | `finishing_packaging_storage` | 包装线和储存电力 | 电表；设备日志；储存库存 | meter_start; meter_end; equipment_hours; storage_mass; storage_days; temperature_setpoint; lots_served | 直接分表或按生产线时间和储存质量-时间分配共享能源 | kWh; kg-day | 每日或计量区间 | 与生产清单相同期间 | 范围内全部包装和加工厂门口储存设备 | 包装按运行时间、储存按同一温区内质量-时间分配 | 电表身份；设备日志；储存记录；分配工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景清单 | 归一化数量 = 报告期数量除以报告期净参考产品质量 | 流数量; 净参考产品质量 | 每 1 kg 净成品的数量 | `eu-pef-2021-2279` |
| `calc_receiving_acceptance` | 接收 | 验收质量 = 接收毛质量减去分别实测的拒收质量、分离冰衣或游离液体及其他排除的接收组分 | 毛质量; 拒收质量; 排除的游离液体或冰衣 | 验收鱼类材料 | `codex-cxc-52-2003` |
| `calc_brine_balance` | 盐腌和熟成 | 新鲜盐水投入 + 回用盐水投入 = 成品保留盐水 + 返回回用盐水 + 废盐水和析出液 + 实测或披露的平衡差 | 盐; 水; 进入的回用盐水; 保留盐水; 返回盐水; 排放 | 盐水质量平衡核对 | `codex-cxc-52-2003` |
| `calc_drying_water_removed` | 卫生干燥 | 除水量 = 入口湿质量乘入口水分分数减出口湿质量乘出口水分分数，并采用相同声明水分基准 | 入口质量; 入口水分; 出口质量; 出口水分; 水分基准 | kg 除去水量 | `codex-cxc-52-2003` |
| `calc_shared_utility_allocation` | 共享公用工程 | 分配公用工程 = 实测共享总量乘本批物理驱动量，再除以全部服务批次物理驱动量之和 | 共享总量; 本批驱动量; 驱动量总和 | 归属于本批的公用工程量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品和原料身份 | 保留从进厂鱼类到最终包装产品的批次关联，包括鱼种或鱼种组、来源、供应商、捕捞或养殖状态、进厂状态、加工路线和产品去向。 | 供应商规格；接收记录；批次谱系；最终批号；`codex-cxc-52-2003` |
| `dq_measurement_control` | 质量、水、能源、时间、温度、盐度、水分和水分活度 | 使用适合测量的已校准或核验仪器；保留校准状态、读数频率、缺失数据处理、单位换算及分析结果的湿基/干基/水相基准。 | 校准证书；计量日志；实验室方法；计算工作表；`codex-cxc-52-2003` |
| `dq_temporal_representativeness` | 报告期 | 可行时采用具代表性的连续 12 个月，或披露较短生产期和季节性；使分子和分母期间一致，并说明停机、非典型批次和缺失期间。 | 生产日历；计量覆盖；批次数；代表性评估；`eu-pef-2021-2279` |
| `dq_completeness_balance` | 材料和公用工程清单 | 在兼容的批次边界内核对接收鱼类、准备和熟成中间品、成品、保留盐水、残余物、废水、盐、水和主要能源；调查无法解释的差异，不得强制闭合。 | 批次质量平衡报告；盐水平衡；公用工程核对；异常日志 |
| `dq_food_safety_control` | 产品特定加工 | 保留适用的危害分析和监控控制，覆盖原料适用性、适用时的寄生虫和组胺、时间温度、饮用水、食品级盐、盐水浓度、卫生干燥、防污染、包装和储存。 | HACCP 或等效计划；控制点日志；纠正措施；实验室检测；`codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `dq_background_proxies` | 上游数据集 | 记录进厂鱼类、公用工程、盐、水、包装、处理和运输数据的提供方、PCR UUID 字段之外的数据集版本、地理、技术、时期、分配方法和已知代理局限。 | 来源登记；代理理由；数据质量评级；`eu-pef-2021-2279` |
| `dq_estimate_replacement` | 暂定 QA 范围 | 将每个 `reasoned_estimate` 区间视为可替换的筛查标志，而非默认前景值或行业基准；发布前用采集数据评审并替换或批准。 | 评审记录；采集分布；来源更新 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 核验恰有一个参考产品输出，其 UUID 为 `b41d734d-e255-404c-b6bb-b2c408f653c6`、Mass 属性为 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`、单位为 kg、归一化数量为 1；该质量不得包含包装和非产品冰。 | `eu-pef-2021-2279` |
| `validation_scope_exclusions` | 产品类别身份 | 使用熏制、烟熏调味或烟熏干燥，或者输出不是经干燥、盐腌或盐水浸泡保藏的可食鱼片时，判定类别不符合。 | `codex-cxc-52-2003` |
| `validation_qualifiers` | 数据集元数据 | 核验全部必需限定信息存在且与过程记录一致，尤其是鱼种、来源、进厂状态、场内切片、盐腌路线、干燥状态、成品盐水处理、包装和储存条件。 | `codex-cxc-52-2003` |
| `validation_process_coverage` | 过程清单 | 核验全部必需过程和每项适用的条件性过程均有清单行、批次记录、公用工程、输出、废物和直接排放；未执行的条件性过程必须明确声明不适用。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validation_mass_brine_balance` | 批次计算 | 检查接收、准备、熟成、干燥和包装的兼容状态质量平衡以及独立盐水平衡；标记缺失流、水分基准不一致、循环盐水重复计算和无法解释的差异。 | `codex-cxc-52-2003` |
| `validation_food_safety_evidence` | 过程控制 | 核验产品特定食品安全证据支持进厂材料、时间温度、饮用水、食品级盐、适用时盐水浓度、卫生干燥、包装和储存；不得根据宽泛 QA 范围推断符合性。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `validation_allocation` | 多输出和共享过程 | 核验已首先尝试细分，每项非参考输出按实际状态和去向分类，所选物理或经济分配有文件依据，共享公用工程在可行时采用物理驱动因子，且上游分配已披露。 | `eu-pef-2021-2279` |
| `validation_data_quality` | 前景和背景证据 | 核验仪器控制、时间和场址覆盖、分子分母一致性、批次追溯、完整性核对、背景代理元数据和估算替换评审均已提供；缺失维度报告为校验 finding。 | `eu-pef-2021-2279` |
| `validation_uuid_review` | 非参考清单流 | 发布前，要求对每个以 UUID 表示的非参考流完成 Tiangong 精确身份评审；不得仅为填充身份字段而替换近似或语义错误的流。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 未熏制干制、盐腌或盐水浸泡鱼片成品的门到门前景生产数据集 |
| downstream_use | `secondary_dataset`; 方法学评审和发布后可为 `background_dataset` |
| allowed_use | 在必需限定信息、前景记录、上游关联、分配、食品安全控制证据和数据质量披露完整时，用于产品特定过程建模 |
| excluded_use | 熏制或烟熏调味鱼；整鱼或碎鱼肉；鱼肝或鱼卵；仅冷冻鱼片；替代捕捞或养殖生产；将暂定推理估算用作经核实行业平均值 |
| required_metadata | canonical PCR id；参考流 UUID 和单位支持；鱼种和来源；原料状态；盐腌和干燥路线；产品水分或水分活度控制；保留盐水处理；包装；设施地理；报告期；储存条件；过程覆盖；分配方法；上游数据集身份 |
| required_quality_disclosure | 测量和校准覆盖；批次和时间完整性；质量和盐水平衡；HACCP 或等效控制证据；代理地理、技术、年代和分配；截断；缺失 UUID；暂定估算；不确定性和已知局限 |
| update_trigger | 鱼种组合、来源渔业或养殖系统、原料状态、切片收率、盐腌或盐水浸泡技术、干燥技术或燃料、产品水分规格、包装、储存制度、共产品去向、分配、设施地理或证据发生会实质改变清单的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | 官方指南（`official_guidance`） | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf（官方正文访问于 2026-08-11） | 产品和过程范围；鱼片、盐水浸泡、干盐腌、湿盐腌、盐腌和干燥定义；接收、准备、熟成、水和盐、时间温度、卫生干燥、包装、储存、HACCP 及质量记录 |
| `codex-cxs-190-1995` | 标准（`standard`） | Codex Alimentarius, CXS 190-1995, Standard for Quick Frozen Fish Fillets（官方标准标识；仅适用于进厂速冻鱼片） | 原料路线采用速冻鱼片时的进厂鱼片身份、状态、处理和质量控制 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj（官方正文访问于 2026-08-11） | 参考流归一化、前景与背景边界关联、分配层级、共享过程分配、截断披露、数据质量、代理记录和报告 |
