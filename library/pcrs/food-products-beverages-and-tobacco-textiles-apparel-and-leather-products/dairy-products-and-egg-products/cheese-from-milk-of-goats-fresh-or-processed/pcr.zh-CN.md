---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-goats-fresh-or-processed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 山羊乳制奶酪，鲜制或加工

## 1. 范围与适用性

本 PCR 适用于乳源成分全部来自山羊，并以鲜制或未成熟奶酪、成熟奶酪或加工奶酪状态离开报告乳品厂的奶酪。前景范围从乳品厂门接收山羊乳开始，涵盖乳料制备、凝乳制造、路线特定后处理、包装、冷藏以及场内清洗和废水处理，直至声明的工厂门产品。

前景数据包应识别每一种乳、奶酪、乳清、稀奶油、乳脂、乳蛋白及其他乳制投入的动物种属。含任何绵羊、牛、水牛或其他动物来源乳成分的产品均不适用本 PCR。即使山羊乳占多数，山羊乳与绵羊乳或其他种属乳混合的产品也应重新分类，不得以本参考流表示。

产品状态应声明为 `fresh_unripened`、`ripened` 或 `processed_cheese`。数据包还应声明是否盐水浸渍、参考质量是否包含游离盐水、所有特征性非乳配料和加工添加剂，以及声明门点的包装状态。Codex 产品描述与质量规定仅用于识别适用的奶酪状态和必需披露，不提供默认配方、收率、能耗、用水、盐含量或 LCI 数量。

乳品厂接收前的山羊养殖与乳生产以关联上游数据集表示。零售、使用和寿命终止阶段不属于本工厂门前景边界；若研究明确扩展系统，应单独报告这些模块。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-goats-fresh-or-processed |
| classification_refs | CPC 3.0 `22254`，山羊乳制奶酪，鲜制或加工 |
| covered_products | 仅由山羊来源乳及乳成分制成的奶酪，包括鲜制或未成熟奶酪、成熟奶酪、归入本类别的凝乳和乳清奶酪，以及乳源成分全部来自山羊的加工奶酪 |
| excluded_products | 绵羊乳奶酪；牛乳奶酪；水牛乳奶酪；其他动物乳奶酪；任何混合种属乳或奶酪产品；非乳奶酪类似物；无法核实动物来源的产品 |
| representative_product | 在乳品厂门以声明的鲜制、成熟或加工状态供应的可销售山羊乳奶酪 |
| production_route | 接收山羊乳或明确受控的同类山羊奶酪投入；制备；适用时凝固和乳清分离；状态特定的盐渍、盐水浸渍、成熟或加工；包装与冷藏 |
| market_state | 工厂门产品，并声明产品状态、盐水约定、配料组成、物理形态、热处理路线和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以声明的鲜制或未成熟、成熟或加工状态供应的山羊乳奶酪 |
| How much | 乳品厂门 1 kg 净奶酪产品 |
| How well | 符合声明的产品规格和适用奶酪描述；动物来源证据确认全部乳源成分来自山羊 |
| How long or cycle | 一个生产批次直至乳品厂放行；适用时记录成熟或冷藏时长 |
| reference_flow_link | `packaging_cold_storage_dispatch` 的净可销售输出，并与声明质量及盐水约定核对一致 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 新鲜或加工的山羊奶奶酪 `e321b953-83b8-4428-9cce-3ac3aee6aae3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 乳源全部来自山羊；产品状态（`fresh_unripened`、`ripened` 或 `processed_cheese`）；奶酪或商品类型；物理形态；热处理和乳料制备路线；盐水状态与参考质量约定；特征性配料和加工添加剂；包装状态；净质量基准；生产地域；生产批次期间；声明门点 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考数量以净可销售奶酪质量表示，不含包装。盐水奶酪应声明并一致采用沥干奶酪质量或奶酪加游离盐水质量，不得混用。 |
| `goat_origin_mass` | 所有乳制投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按接收批次记录质量和动物来源。任何非山羊种属乳制投入都会使数据集不符合本 PCR，必须重新分类。 |
| `ingredient_mass_basis` | 盐、菌种、凝乳剂、乳化盐、添加剂和特征性配料 | Mass | kg | 记录实际批次添加量，并注明各数量是购入产品质量、活性成分质量、溶液质量还是干固体质量。不得从 Codex 许可或产品质量限值推断配方。 |
| `water_and_brine_separation` | 工艺水、配制盐水、产品保留盐水和废盐水 | Volume or Mass | m3 or kg | 工艺水、盐水补加、声明产品中保留的盐水和废盐水应分别记录。质量与体积换算时记录盐浓度和密度。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽、热水和制冷 | Energy or Mass | kWh, MJ, or carrier-specific unit | 保留计量单位和能源载体身份，仅使用有文件依据的因子换算，不得把行业平均能耗强度用作场址值。 |
| `packaging_mass_separation` | 初级、次级和运输包装 | Mass | kg | 按材料和部件记录包装，并归一到 1 kg 净奶酪。包装质量不计入参考产品质量。 |
| `lot_normalization` | 所有前景流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | per 1 kg reference product | 仅在核对批次可销售奶酪输出、路线特定在制品、共产品、废物和库存变化后归一化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 乳品厂门接收的山羊乳，并记录供应商、动物种属声明、批次质量、场址使用的成分或固形物信息、温度或保存状态以及接收状态 |
| starting_condition_role | 确定山羊专属来源并把乳品厂前负荷关联至上游乳数据集的工厂门投入 |
| product_classification_scope | 仅限山羊乳制奶酪；产品状态可为鲜制或未成熟、成熟或加工，但混合种属乳制品不在范围内 |
| recursive_input_rule | 加工奶酪所用购入山羊奶酪或其他同类山羊奶酪中间品保留为显式产品投入；不在前景过程中递归分解，并要求兼容的上游数据集以确保负荷只计算一次 |
| upstream_dataset_requirement | 山羊乳、同类山羊奶酪投入、配料、能源载体、供水、包装、纳入时的进厂运输，以及外部处理废物或废水的供应商特定或其他具代表性数据集 |
| disclosure | 声明山羊来源证据、产品状态、路线、批次期间、设施、质量约定、盐水状态、配料与添加剂、包装状态、纳入过程、上游数据集选择、截断和分配决定 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有数据集 | 纳入从接受山羊乳或受控同类山羊奶酪投入直至声明可销售奶酪放行的全部场内操作，包括公用工程、制冷、清洗、损失、副产品、废物和场内废水处理。 | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `boundary_goat_origin` | 乳制原料和中间品 | 核实每种乳源成分全部来自山羊。任何绵羊乳或绵羊来源配料、其他非山羊乳制投入或混合种属投入均须重新分类，不能通过分配隐藏。 | `unsd-cpc-3-22254`; `codex-cxs-206-1999` |
| `boundary_product_state` | 参考产品 | 声明 `fresh_unripened`、`ripened` 或 `processed_cheese`，且只纳入实际实施的路线操作。Codex 成分或质量规定不得作为 LCI 数量。 | `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `boundary_brine_ingredients_packaging` | 参考产品与后处理路线 | 声明盐水状态、参考质量约定、特征性配料和加工添加剂以及包装状态；实际记录的投入和输出应分别建模。 | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `boundary_upstream_links` | 购入投入和场外服务 | 将排除的上游生产与场外处理关联到明确数据集。不得以 BAT 性能水平或通用配方替代供应商或场址记录。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `boundary_cutoff_disclosure` | 所有清单流 | 不得实施未披露的质量、能源、水、包装、盐水、废物或排放截断。若研究依据管理方案采用截断，应识别遗漏流、数量或估算、理由和预期影响。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| goat_milk_intake_and_preparation | 山羊乳接收与制备 | required |  | 前景接收、贮存、检验、标准化和实际实施的热处理 | 转入奶酪制造的 kg 已制备山羊乳 |
| curd_formation_and_drainage | 凝乳形成与排乳清 | required |  | 前景凝固、切割、加热、排乳清、成型和实际实施的压榨 | 转入后处理的 kg 凝乳 |
| route_specific_finishing | 路线特定后处理 | required |  | 实际实施的鲜制奶酪后处理、盐渍或盐水浸渍、成熟或加工奶酪操作 | 转入包装的 kg 山羊奶酪成品 |
| packaging_cold_storage_dispatch | 包装、冷藏与出厂 | required |  | 前景包装状态、制冷、贮存和乳品厂门放行 | kg 净可销售参考产品 |
| sanitation_and_effluent | 清洗与废水处理 | required |  | 服务于纳入奶酪过程的前景原位清洗或其他清洗，以及场内废水或废物处理 | 分配至建模批次的报告期服务 |

### 过程：山羊乳接收与制备（`goat_milk_intake_and_preparation`）

#### 输入

##### 产品流

###### 接收的山羊生乳 (`received_goat_milk`)

在声明过程与路线下，将 Raw milk of goats 作为一个原子交换记录。

- 选定流：生羊奶 `2c001731-6bd5-4e32-b3cf-15f4c67d4038`
- 流属性/单位：Mass / kg
- 数量规则：按批次计量接受质量，并记录设施使用的成分或固形物数据及库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_material_lots`
- 来源：`codex-cxs-206-1999`
- 数量范围：场址与批次观测包络；无跨场址默认值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入批次计算的归一化接受乳量最小值
  - 上限：根据纳入批次计算的归一化接受乳量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：仅纳入设施和产品状态批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备低压电力 (`intake_preparation_electricity_low_voltage`)

仅当 Alternating current, low-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，低压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备中压电力 (`intake_preparation_electricity_medium_voltage`)

仅当 Alternating current, medium-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，中压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备高压电力 (`intake_preparation_electricity_high_voltage`)

仅当 Alternating current, high-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，高压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备现场光伏电力 (`intake_preparation_electricity_onsite_pv`)

仅适用于本过程计量自用的现场光伏电力；排除外送电量，且不得与电网电力重复。

- 选定流：交流电 `a43f59bc-4263-40de-af1e-d067f0b792d2`
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备工业蒸汽 (`intake_preparation_steam`)

仅当 Heat, steam 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：蒸汽热 `fb513738-b5b1-46d6-8820-ae4009a097be`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备外购热水 (`intake_preparation_hot_water`)

仅当 Hot water for industrial process heat 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：Hot water for industrial process heat
- 流属性/单位：Energy / MJ
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备天然气 (`intake_preparation_natural_gas`)

仅当 natural gas in the gaseous state 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备柴油 (`intake_preparation_diesel`)

仅当 Diesel oil 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备液化石油气 (`intake_preparation_lpg`)

仅当 Liquefied petroleum gas 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备重燃料油 (`intake_preparation_heavy_fuel_oil`)

仅当 Heavy fuel oil 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：重质燃料油
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备沼气 (`intake_preparation_biogas`)

仅当 Biogas 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：生物天然气，沼气 `246d7fec-59ef-4032-8539-e47632b60a23`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备生物质成型燃料 (`intake_preparation_biomass_briquette`)

仅当 Biomass briquette fuel 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：生物质致密成型燃料 `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备压缩空气 (`intake_preparation_compressed_air`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Compressed air 时适用；其数量须与相邻卡片逐项分开。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备自来水 (`intake_preparation_tap_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Tap water 时适用；其数量须与相邻卡片逐项分开。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备去离子水 (`intake_preparation_deionized_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Water (desalinated; deionized) 时适用；其数量须与相邻卡片逐项分开。

- 选定流：水（脱盐；去离子） `c707e768-2a44-4b33-8218-e8dcdb345132`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备R134a 制冷剂补充 (`intake_preparation_refrigerant_r134a`)

仅当服务本过程的设备使用 Refrigerant, R134a 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：制冷剂，R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备R404A 制冷剂补充 (`intake_preparation_refrigerant_r404a`)

仅当服务本过程的设备使用 Refrigerant, R404A 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：制冷剂，R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备R717 制冷剂补充 (`intake_preparation_refrigerant_r717`)

仅当服务本过程的设备使用 Refrigerant R717 (ammonia) 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：Refrigerant R717 (ammonia)
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 接收与制备R744 制冷剂补充 (`intake_preparation_refrigerant_r744`)

仅当服务本过程的设备使用 Refrigerant R744 (carbon dioxide) 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：Refrigerant R744 (carbon dioxide)
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后，分配至实际实施的接收、贮存、冷却、分离、标准化和热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络；无通用强度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：报告设施同一载体和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制备山羊乳 (`prepared_goat_milk`)

在声明过程与路线下，将 Prepared goat milk 作为一个原子交换记录。

- 选定流：Prepared goat milk
- 流属性/单位：Mass / kg
- 数量规则：按批次计量转移质量，并与接收量、回收组分、损失和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批转入 `curd_formation_and_drainage`
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_material_lots`
- 数量范围：批次观测转移包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：纳入可比批次中计量转移质量最小值
  - 上限：纳入可比批次中计量转移质量最大值
  - 单位：kg/batch
  - 基准：声明的批次规模和制备路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 拒收山羊生乳 (`rejected_raw_goat_milk`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Rejected raw goat milk 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Rejected raw goat milk
- 流属性/单位：Mass / kg
- 数量规则：按去向记录计量的拒收或损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与批次观测损失包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入批次计算的归一化损失最小值
  - 上限：根据纳入批次计算的归一化损失最大值
  - 单位：kg/kg net saleable cheese
  - 基准：纳入设施和路线批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 山羊乳制备损失 (`goat_milk_preparation_loss`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Goat-milk preparation loss 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Goat-milk preparation loss
- 流属性/单位：Mass / kg
- 数量规则：按去向记录计量的拒收或损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与批次观测损失包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入批次计算的归一化损失最小值
  - 上限：根据纳入批次计算的归一化损失最大值
  - 单位：kg/kg net saleable cheese
  - 基准：纳入设施和路线批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 基本流

### 过程：凝乳形成与排乳清（`curd_formation_and_drainage`）

#### 输入

##### 产品流

###### 转入奶酪制造的已制备山羊乳 (`prepared_goat_milk_input`)

在声明过程与路线下，将 Prepared goat milk 作为一个原子交换记录。

- 选定流：Prepared goat milk
- 流属性/单位：Mass / kg
- 数量规则：计量批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个凝乳制造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_material_lots`

###### 奶酪发酵剂 (`curd_starter_culture`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Starter culture 时适用；其数量须与相邻卡片逐项分开。

- 选定流：发酵剂 `e9ab7eca-5240-43cb-84d1-069af92d1b03`
- 流属性/单位：Mass / kg
- 数量规则：记录每种添加物的批次领用或投加量，并适用时区分溶液质量、干固体和活性成分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredients_and_additives`
- 来源：`codex-cxs-283-1978`; `codex-cxs-221-2001`
- 数量范围：产品与批次观测添加包络；无标准推导配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入同配方批次计算的归一化用量最小值
  - 上限：根据纳入同配方批次计算的归一化用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一声明配方和添加质量约定
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳酶 (`curd_rennet`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Rennet 时适用；其数量须与相邻卡片逐项分开。

- 选定流：凝乳酶 `0cc2c20e-9c7d-4d03-b8b8-f347cd39bed4`
- 流属性/单位：Mass / kg
- 数量规则：记录每种添加物的批次领用或投加量，并适用时区分溶液质量、干固体和活性成分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredients_and_additives`
- 来源：`codex-cxs-283-1978`; `codex-cxs-221-2001`
- 数量范围：产品与批次观测添加包络；无标准推导配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入同配方批次计算的归一化用量最小值
  - 上限：根据纳入同配方批次计算的归一化用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一声明配方和添加质量约定
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造用食品级食盐 (`curd_food_grade_salt`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Salt 时适用；其数量须与相邻卡片逐项分开。

- 选定流：食盐 `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：Mass / kg
- 数量规则：记录每种添加物的批次领用或投加量，并适用时区分溶液质量、干固体和活性成分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredients_and_additives`
- 来源：`codex-cxs-283-1978`; `codex-cxs-221-2001`
- 数量范围：产品与批次观测添加包络；无标准推导配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入同配方批次计算的归一化用量最小值
  - 上限：根据纳入同配方批次计算的归一化用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一声明配方和添加质量约定
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造低压电力 (`curd_making_electricity_low_voltage`)

仅当 Alternating current, low-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，低压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造中压电力 (`curd_making_electricity_medium_voltage`)

仅当 Alternating current, medium-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，中压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造高压电力 (`curd_making_electricity_high_voltage`)

仅当 Alternating current, high-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，高压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造现场光伏电力 (`curd_making_electricity_onsite_pv`)

仅适用于本过程计量自用的现场光伏电力；排除外送电量，且不得与电网电力重复。

- 选定流：交流电 `a43f59bc-4263-40de-af1e-d067f0b792d2`
- 流属性/单位：Net calorific value / kWh
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造工业蒸汽 (`curd_making_steam`)

仅当 Heat, steam 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：蒸汽热 `fb513738-b5b1-46d6-8820-ae4009a097be`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造外购热水 (`curd_making_hot_water`)

仅当 Hot water for industrial process heat 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：Hot water for industrial process heat
- 流属性/单位：Energy / MJ
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造天然气 (`curd_making_natural_gas`)

仅当 natural gas in the gaseous state 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造柴油 (`curd_making_diesel`)

仅当 Diesel oil 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造液化石油气 (`curd_making_lpg`)

仅当 Liquefied petroleum gas 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass / kg
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造重燃料油 (`curd_making_heavy_fuel_oil`)

仅当 Heavy fuel oil 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：重质燃料油
- 流属性/单位：Mass / kg
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造沼气 (`curd_making_biogas`)

仅当 Biogas 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：生物天然气，沼气 `246d7fec-59ef-4032-8539-e47632b60a23`
- 流属性/单位：Volume / m3
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造生物质成型燃料 (`curd_making_biomass_briquette`)

仅当 Biomass briquette fuel 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：生物质致密成型燃料 `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- 流属性/单位：Mass / kg
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造压缩空气 (`curd_making_compressed_air`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Compressed air 时适用；其数量须与相邻卡片逐项分开。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造自来水 (`curd_making_tap_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Tap water 时适用；其数量须与相邻卡片逐项分开。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 凝乳制造去离子水 (`curd_making_deionized_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Water (desalinated; deionized) 时适用；其数量须与相邻卡片逐项分开。

- 选定流：水（脱盐；去离子） `c707e768-2a44-4b33-8218-e8dcdb345132`
- 流属性/单位：Volume / m3
- 数量规则：对建模批次计量使用量或从设施仪表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址与期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一载体、设施和产品路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 山羊乳奶酪凝乳 (`goat_cheese_curd`)

在声明过程与路线下，将 Goat-cheese curd 作为一个原子交换记录。

- 选定流：Goat-cheese curd
- 流属性/单位：Mass / kg
- 数量规则：按批次计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个凝乳制造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_material_lots`

###### 回收山羊乳清 (`goat_whey_coproduct`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Goat whey 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Goat whey
- 流属性/单位：Mass / kg
- 数量规则：按批次计量输出质量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与路线观测共产品包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入可比批次计算的归一化输出最小值
  - 上限：根据纳入可比批次计算的归一化输出最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一共产品身份和去向路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 回收山羊稀奶油 (`goat_cream_coproduct`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Goat cream 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Goat cream
- 流属性/单位：Mass / kg
- 数量规则：按批次计量输出质量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与路线观测共产品包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入可比批次计算的归一化输出最小值
  - 上限：根据纳入可比批次计算的归一化输出最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一共产品身份和去向路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 回收山羊奶酪凝乳细屑 (`recovered_goat_cheese_curd_fines`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Goat-cheese curd fines 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Goat-cheese curd fines
- 流属性/单位：Mass / kg
- 数量规则：按批次计量输出质量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与路线观测共产品包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入可比批次计算的归一化输出最小值
  - 上限：根据纳入可比批次计算的归一化输出最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一共产品身份和去向路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 废物流

###### 山羊奶酪凝乳细屑废物 (`goat_cheese_curd_fines_waste`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Goat-cheese curd fines waste 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Goat-cheese curd fines waste
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向计量损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与批次观测损失包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入批次计算的归一化损失最小值
  - 上限：根据纳入批次计算的归一化损失最大值
  - 单位：kg/kg net saleable cheese
  - 基准：纳入设施和路线批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 山羊奶酪产品损失 (`goat_cheese_product_loss`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Goat-cheese product loss 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Goat-cheese product loss
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向计量损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与批次观测损失包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入批次计算的归一化损失最小值
  - 上限：根据纳入批次计算的归一化损失最大值
  - 单位：kg/kg net saleable cheese
  - 基准：纳入设施和路线批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 基本流

### 过程：路线特定后处理（`route_specific_finishing`）

#### 输入

##### 产品流

###### 后处理山羊乳奶酪凝乳投入 (`finishing_goat_cheese_curd_input`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Goat-cheese curd 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Goat-cheese curd
- 流属性/单位：Mass / kg
- 数量规则：按产品身份和来源计量批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个后处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_material_lots`

###### 加工奶酪路线山羊乳奶酪投入 (`processed_cheese_goat_cheese_input`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Cheese from milk of goats, fresh or processed 时适用；其数量须与相邻卡片逐项分开。

- 选定流：新鲜或加工的山羊奶奶酪 `e321b953-83b8-4428-9cce-3ac3aee6aae3`
- 流属性/单位：Mass / kg
- 数量规则：按产品身份和来源计量批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个后处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_material_lots`

###### 后处理用食品级干盐 (`finishing_food_grade_salt`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Salt 时适用；其数量须与相邻卡片逐项分开。

- 选定流：食盐 `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：Mass / kg
- 数量规则：使用声明质量基准的批次领用、投加、盐水配制和浓度记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredients_and_additives`
- 来源：`codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`
- 数量范围：产品与批次观测添加包络；不把 Codex 限值用作 LCI
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入同配方批次计算的归一化用量最小值
  - 上限：根据纳入同配方批次计算的归一化用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一配方、盐水约定和添加质量基准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 食品级氯化钠盐水 (`finishing_food_grade_brine`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Food-grade sodium-chloride brine 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Food-grade sodium-chloride brine
- 流属性/单位：Mass / kg
- 数量规则：使用声明质量基准的批次领用、投加、盐水配制和浓度记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredients_and_additives`
- 来源：`codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`
- 数量范围：产品与批次观测添加包络；不把 Codex 限值用作 LCI
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入同配方批次计算的归一化用量最小值
  - 上限：根据纳入同配方批次计算的归一化用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一配方、盐水约定和添加质量基准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 柠檬酸钠乳化盐 (`finishing_sodium_citrate`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Sodium citrate 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Sodium citrate
- 流属性/单位：Mass / kg
- 数量规则：使用声明质量基准的批次领用、投加、盐水配制和浓度记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredients_and_additives`
- 来源：`codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`
- 数量范围：产品与批次观测添加包络；不把 Codex 限值用作 LCI
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入同配方批次计算的归一化用量最小值
  - 上限：根据纳入同配方批次计算的归一化用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一配方、盐水约定和添加质量基准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 磷酸氢二钠乳化盐 (`finishing_disodium_phosphate`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Disodium phosphate 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Disodium phosphate
- 流属性/单位：Mass / kg
- 数量规则：使用声明质量基准的批次领用、投加、盐水配制和浓度记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredients_and_additives`
- 来源：`codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`
- 数量范围：产品与批次观测添加包络；不把 Codex 限值用作 LCI
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入同配方批次计算的归一化用量最小值
  - 上限：根据纳入同配方批次计算的归一化用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一配方、盐水约定和添加质量基准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟低压电力 (`finishing_ripening_electricity_low_voltage`)

仅当 Alternating current, low-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，低压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟中压电力 (`finishing_ripening_electricity_medium_voltage`)

仅当 Alternating current, medium-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，中压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟高压电力 (`finishing_ripening_electricity_high_voltage`)

仅当 Alternating current, high-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，高压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟现场光伏电力 (`finishing_ripening_electricity_onsite_pv`)

仅适用于本过程计量自用的现场光伏电力；排除外送电量，且不得与电网电力重复。

- 选定流：交流电 `a43f59bc-4263-40de-af1e-d067f0b792d2`
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟工业蒸汽 (`finishing_ripening_steam`)

仅当 Heat, steam 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：蒸汽热 `fb513738-b5b1-46d6-8820-ae4009a097be`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟外购热水 (`finishing_ripening_hot_water`)

仅当 Hot water for industrial process heat 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：Hot water for industrial process heat
- 流属性/单位：Energy / MJ
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟天然气 (`finishing_ripening_natural_gas`)

仅当 natural gas in the gaseous state 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟柴油 (`finishing_ripening_diesel`)

仅当 Diesel oil 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟液化石油气 (`finishing_ripening_lpg`)

仅当 Liquefied petroleum gas 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟重燃料油 (`finishing_ripening_heavy_fuel_oil`)

仅当 Heavy fuel oil 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：重质燃料油
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟沼气 (`finishing_ripening_biogas`)

仅当 Biogas 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：生物天然气，沼气 `246d7fec-59ef-4032-8539-e47632b60a23`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟生物质成型燃料 (`finishing_ripening_biomass_briquette`)

仅当 Biomass briquette fuel 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：生物质致密成型燃料 `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟压缩空气 (`finishing_ripening_compressed_air`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Compressed air 时适用；其数量须与相邻卡片逐项分开。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟自来水 (`finishing_ripening_tap_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Tap water 时适用；其数量须与相邻卡片逐项分开。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟去离子水 (`finishing_ripening_deionized_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Water (desalinated; deionized) 时适用；其数量须与相邻卡片逐项分开。

- 选定流：水（脱盐；去离子） `c707e768-2a44-4b33-8218-e8dcdb345132`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟R134a 制冷剂补充 (`finishing_ripening_refrigerant_r134a`)

仅当服务本过程的设备使用 Refrigerant, R134a 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：制冷剂，R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟R404A 制冷剂补充 (`finishing_ripening_refrigerant_r404a`)

仅当服务本过程的设备使用 Refrigerant, R404A 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：制冷剂，R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟R717 制冷剂补充 (`finishing_ripening_refrigerant_r717`)

仅当服务本过程的设备使用 Refrigerant R717 (ammonia) 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：Refrigerant R717 (ammonia)
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 后处理与成熟R744 制冷剂补充 (`finishing_ripening_refrigerant_r744`)

仅当服务本过程的设备使用 Refrigerant R744 (carbon dioxide) 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：Refrigerant R744 (carbon dioxide)
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至声明的鲜制、成熟或加工路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按载体的场址、路线和时长观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入批次计算的归一化载体用量最小值
  - 上限：根据可比纳入批次计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、产品状态、路线和成熟时长类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 山羊乳奶酪成品 (`finished_goat_cheese`)

在声明过程与路线下，将 Cheese from milk of goats, fresh or processed 作为一个原子交换记录。

- 选定流：新鲜或加工的山羊奶奶酪 `e321b953-83b8-4428-9cce-3ac3aee6aae3`
- 流属性/单位：Mass / kg
- 数量规则：按成品批次计量包装前净转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个成品批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_release`

##### 废物流

###### 废食品级盐水 (`spent_food_grade_brine`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 High-concentration saline wastewater 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Spent food-grade brine
- 流属性/单位：Mass / kg
- 数量规则：按批次和路线计量排放、移除或库存损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与路线观测残余物包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入可比批次计算的归一化残余物最小值
  - 上限：根据纳入可比批次计算的归一化残余物最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一残余物身份和后处理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 奶酪表面处理残余物 (`cheese_surface_treatment_residue`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Cheese surface-treatment residue 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Cheese surface-treatment residue
- 流属性/单位：Mass / kg
- 数量规则：按批次和路线计量排放、移除或库存损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与路线观测残余物包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入可比批次计算的归一化残余物最小值
  - 上限：根据纳入可比批次计算的归一化残余物最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一残余物身份和后处理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 不合格山羊乳奶酪 (`off_spec_goat_cheese`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Off-specification goat-milk cheese 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Off-specification goat-milk cheese
- 流属性/单位：Mass / kg
- 数量规则：按批次和路线计量排放、移除或库存损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与路线观测残余物包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入可比批次计算的归一化残余物最小值
  - 上限：根据纳入可比批次计算的归一化残余物最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一残余物身份和后处理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 山羊奶酪修整损失 (`goat_cheese_trimming_loss`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Goat-cheese trimming loss 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Goat-cheese trimming loss
- 流属性/单位：Mass / kg
- 数量规则：按批次和路线计量排放、移除或库存损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与路线观测残余物包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入可比批次计算的归一化残余物最小值
  - 上限：根据纳入可比批次计算的归一化残余物最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一残余物身份和后处理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 山羊奶酪成熟损失 (`goat_cheese_ripening_loss`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Goat-cheese ripening loss 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Goat-cheese ripening loss
- 流属性/单位：Mass / kg
- 数量规则：按批次和路线计量排放、移除或库存损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与路线观测残余物包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入可比批次计算的归一化残余物最小值
  - 上限：根据纳入可比批次计算的归一化残余物最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一残余物身份和后处理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 基本流

### 过程：包装、冷藏与出厂（`packaging_cold_storage_dispatch`）

#### 输入

##### 产品流

###### 待包装山羊乳奶酪成品 (`finished_goat_cheese_input`)

在声明过程与路线下，将 Cheese from milk of goats, fresh or processed 作为一个原子交换记录。

- 选定流：新鲜或加工的山羊奶奶酪 `e321b953-83b8-4428-9cce-3ac3aee6aae3`
- 流属性/单位：Mass / kg
- 数量规则：按包装批次计量投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_release`

###### 聚乙烯薄膜包装部件 (`packaging_polyethylene_film`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Polyethylene film 时适用；其数量须与相邻卡片逐项分开。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单与领用、退回部件和可销售单元核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 数量范围：产品与期间观测包装包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入包装记录计算的归一化部件质量最小值
  - 上限：根据纳入包装记录计算的归一化部件质量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 聚丙烯奶酪容器 (`packaging_polypropylene_container`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Polypropylene cheese container 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Polypropylene cheese container
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单与领用、退回部件和可销售单元核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 数量范围：产品与期间观测包装包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入包装记录计算的归一化部件质量最小值
  - 上限：根据纳入包装记录计算的归一化部件质量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 铝箔包装部件 (`packaging_aluminium_foil`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Aluminum foil 时适用；其数量须与相邻卡片逐项分开。

- 选定流：铝箔材 `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单与领用、退回部件和可销售单元核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 数量范围：产品与期间观测包装包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入包装记录计算的归一化部件质量最小值
  - 上限：根据纳入包装记录计算的归一化部件质量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 瓦楞纸箱 (`packaging_corrugated_box`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 corrugated board boxes 时适用；其数量须与相邻卡片逐项分开。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单与领用、退回部件和可销售单元核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 数量范围：产品与期间观测包装包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入包装记录计算的归一化部件质量最小值
  - 上限：根据纳入包装记录计算的归一化部件质量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 木制托盘 (`packaging_wood_pallet`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Pallets, box pallets and other load boards, of wood, pallet collars of wood 时适用；其数量须与相邻卡片逐项分开。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单与领用、退回部件和可销售单元核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 数量范围：产品与期间观测包装包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入包装记录计算的归一化部件质量最小值
  - 上限：根据纳入包装记录计算的归一化部件质量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 纸质包装标签 (`packaging_paper_label`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Packaging label, paper 时适用；其数量须与相邻卡片逐项分开。

- 选定流：包装标签，纸质 `d5890643-6859-42b5-9e05-556b072c6a8c`
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单与领用、退回部件和可销售单元核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 数量范围：产品与期间观测包装包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入包装记录计算的归一化部件质量最小值
  - 上限：根据纳入包装记录计算的归一化部件质量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 包装与冷藏低压电力 (`packing_cold_storage_electricity_low_voltage`)

仅当 Alternating current, low-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，低压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后分配至纳入包装线和冷藏期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、贮存时长和载体观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一设施、贮存温度、时长类别和载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 包装与冷藏中压电力 (`packing_cold_storage_electricity_medium_voltage`)

仅当 Alternating current, medium-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，中压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后分配至纳入包装线和冷藏期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、贮存时长和载体观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一设施、贮存温度、时长类别和载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 包装与冷藏高压电力 (`packing_cold_storage_electricity_high_voltage`)

仅当 Alternating current, high-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，高压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后分配至纳入包装线和冷藏期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、贮存时长和载体观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一设施、贮存温度、时长类别和载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 包装与冷藏现场光伏电力 (`packing_cold_storage_electricity_onsite_pv`)

仅适用于本过程计量自用的现场光伏电力；排除外送电量，且不得与电网电力重复。

- 选定流：交流电 `a43f59bc-4263-40de-af1e-d067f0b792d2`
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或与发票核对后分配至纳入包装线和冷藏期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、贮存时长和载体观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一设施、贮存温度、时长类别和载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 包装压缩空气 (`packing_cold_storage_compressed_air`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Compressed air 时适用；其数量须与相邻卡片逐项分开。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：计量或与发票核对后分配至纳入包装线和冷藏期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、贮存时长和载体观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一设施、贮存温度、时长类别和载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 包装与冷藏R134a 制冷剂补充 (`packing_cold_storage_refrigerant_r134a`)

仅当服务本过程的设备使用 Refrigerant, R134a 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：制冷剂，R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至纳入包装线和冷藏期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、贮存时长和载体观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、贮存温度、时长类别和载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 包装与冷藏R404A 制冷剂补充 (`packing_cold_storage_refrigerant_r404a`)

仅当服务本过程的设备使用 Refrigerant, R404A 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：制冷剂，R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至纳入包装线和冷藏期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、贮存时长和载体观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、贮存温度、时长类别和载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 包装与冷藏R717 制冷剂补充 (`packing_cold_storage_refrigerant_r717`)

仅当服务本过程的设备使用 Refrigerant R717 (ammonia) 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：Refrigerant R717 (ammonia)
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至纳入包装线和冷藏期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、贮存时长和载体观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、贮存温度、时长类别和载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 包装与冷藏R744 制冷剂补充 (`packing_cold_storage_refrigerant_r744`)

仅当服务本过程的设备使用 Refrigerant R744 (carbon dioxide) 时适用；依据库存与维保记录计量补充量，不得把采购量直接视为排放。

- 选定流：Refrigerant R744 (carbon dioxide)
- 流属性/单位：Mass / kg
- 数量规则：计量或与发票核对后分配至纳入包装线和冷藏期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、贮存时长和载体观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化载体用量最小值
  - 上限：根据可比纳入期间计算的归一化载体用量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一设施、贮存温度、时长类别和载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净可销售山羊乳奶酪参考产品 (`reference_goat_cheese`)

在声明过程与路线下，将 Cheese from milk of goats, fresh or processed 作为一个原子交换记录。

- 选定流：新鲜或加工的山羊奶奶酪 `e321b953-83b8-4428-9cce-3ac3aee6aae3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明盐水约定的 1 kg 净可销售奶酪，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 聚乙烯薄膜包装废料 (`polyethylene_film_packaging_scrap`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Polyethylene-film packaging scrap 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Polyethylene-film packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与包装观测废品包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比包装记录计算的归一化废品量最小值
  - 上限：根据可比包装记录计算的归一化废品量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和废品身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 聚丙烯包装废料 (`polypropylene_packaging_scrap`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Polypropylene Wastes 时适用；其数量须与相邻卡片逐项分开。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与包装观测废品包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比包装记录计算的归一化废品量最小值
  - 上限：根据可比包装记录计算的归一化废品量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和废品身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 铝箔包装废料 (`aluminium_foil_packaging_scrap`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Aluminium scrap, new, loose 时适用；其数量须与相邻卡片逐项分开。

- 选定流：新铝废料 松散态 `0f5a6a98-22cc-4549-af43-6ed44014e5de`
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与包装观测废品包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比包装记录计算的归一化废品量最小值
  - 上限：根据可比包装记录计算的归一化废品量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和废品身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 瓦楞纸箱包装废物 (`corrugated_box_packaging_waste`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Packaging waste, cardboard 时适用；其数量须与相邻卡片逐项分开。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与包装观测废品包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比包装记录计算的归一化废品量最小值
  - 上限：根据可比包装记录计算的归一化废品量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和废品身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 纸标签包装废物 (`paper_label_packaging_waste`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Packaging waste, paper 时适用；其数量须与相邻卡片逐项分开。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与包装观测废品包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比包装记录计算的归一化废品量最小值
  - 上限：根据可比包装记录计算的归一化废品量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和废品身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 不可销售的已包装山羊乳奶酪 (`unsaleable_packed_goat_cheese`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Unsaleable goat-milk cheese 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Unsaleable goat-milk cheese
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量废品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproduct_and_waste`
- 数量范围：场址与包装观测废品包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比包装记录计算的归一化废品量最小值
  - 上限：根据可比包装记录计算的归一化废品量最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一包装配置和废品身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 基本流

###### HFC-134a 向空气排放 (`hfc134a_emission_to_air`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 HFC-134a 时适用；其数量须与相邻卡片逐项分开。

- 选定流：HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对服务于纳入操作和期间的设备进行制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-fdm-bat-2019`
- 数量范围：装置与期间观测排放包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化排放最小值
  - 上限：根据可比纳入期间计算的归一化排放最大值
  - 单位：kg HFC-134a/kg net saleable cheese
  - 基准：同一装置和制冷剂身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### R404A 向空气排放 (`r404a_emission_to_air`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Refrigerant R404A to air 时适用；其数量须与相邻卡片逐项分开。

- 选定流：制冷剂R404A，排入空气
- 流属性/单位：Mass / kg
- 数量规则：对服务于纳入操作和期间的设备进行制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-fdm-bat-2019`
- 数量范围：装置与期间观测排放包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化排放最小值
  - 上限：根据可比纳入期间计算的归一化排放最大值
  - 单位：kg R404A/kg net saleable cheese
  - 基准：同一装置和制冷剂身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 氨制冷剂向空气排放 (`ammonia_refrigerant_emission_to_air`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 ammonia 时适用；其数量须与相邻卡片逐项分开。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对服务于纳入操作和期间的设备进行制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-fdm-bat-2019`
- 数量范围：装置与期间观测排放包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化排放最小值
  - 上限：根据可比纳入期间计算的归一化排放最大值
  - 单位：kg ammonia/kg net saleable cheese
  - 基准：同一装置和制冷剂身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### R744 二氧化碳向空气排放 (`r744_carbon_dioxide_emission_to_air`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 carbon dioxide 时适用；其数量须与相邻卡片逐项分开。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-9c12-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对服务于纳入操作和期间的设备进行制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-fdm-bat-2019`
- 数量范围：装置与期间观测排放包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化排放最小值
  - 上限：根据可比纳入期间计算的归一化排放最大值
  - 单位：kg carbon dioxide/kg net saleable cheese
  - 基准：同一装置和制冷剂身份
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

### 过程：清洗与废水处理（`sanitation_and_effluent`）

#### 输入

##### 产品流

###### 清洗自来水 (`sanitation_tap_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Tap water 时适用；其数量须与相邻卡片逐项分开。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗去离子水 (`sanitation_deionized_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Water (desalinated; deionized) 时适用；其数量须与相邻卡片逐项分开。

- 选定流：水（脱盐；去离子） `c707e768-2a44-4b33-8218-e8dcdb345132`
- 流属性/单位：Volume / m3
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗用 30% 氢氧化钠溶液 (`sanitation_sodium_hydroxide_30pct`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Sodium hydroxide（30%） 时适用；其数量须与相邻卡片逐项分开。

- 选定流：氢氧化钠（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- 流属性/单位：Mass / kg
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗用 50% 硝酸溶液 (`sanitation_nitric_acid_50pct`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Nitric acid, 50% aqueous solution 时适用；其数量须与相邻卡片逐项分开。

- 选定流：硝酸，50%水溶液 `db613797-10b0-4252-b818-659b99ce85dd`
- 流属性/单位：Mass / kg
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗用过氧乙酸 (`sanitation_peracetic_acid`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Peracetic acid 时适用；其数量须与相邻卡片逐项分开。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗用次氯酸钠 (`sanitation_sodium_hypochlorite`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Sodium hypochlorite 时适用；其数量须与相邻卡片逐项分开。

- 选定流：次氯酸钠 `28c4ca0f-c924-4d2a-93dd-b9ac93009d25`
- 流属性/单位：Mass / kg
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗低压电力 (`sanitation_electricity_low_voltage`)

仅当 Alternating current, low-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，低压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗中压电力 (`sanitation_electricity_medium_voltage`)

仅当 Alternating current, medium-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，中压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗高压电力 (`sanitation_electricity_high_voltage`)

仅当 Alternating current, high-voltage grid supply 为本过程跨越前景边界的供电时适用。同一电表和供电量的低压、中压与高压电网卡片互斥。

- 选定流：交流电，高压电网供电
- 流属性/单位：Net calorific value / kWh
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗现场光伏电力 (`sanitation_electricity_onsite_pv`)

仅适用于本过程计量自用的现场光伏电力；排除外送电量，且不得与电网电力重复。

- 选定流：交流电 `a43f59bc-4263-40de-af1e-d067f0b792d2`
- 流属性/单位：Net calorific value / kWh
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kWh/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗工业蒸汽 (`sanitation_steam`)

仅当 Heat, steam 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：蒸汽热 `fb513738-b5b1-46d6-8820-ae4009a097be`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗外购热水 (`sanitation_hot_water`)

仅当 Hot water for industrial process heat 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：Hot water for industrial process heat
- 流属性/单位：Energy / MJ
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗天然气 (`sanitation_natural_gas`)

仅当 natural gas in the gaseous state 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗柴油 (`sanitation_diesel`)

仅当 Diesel oil 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Net calorific value / MJ
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：MJ/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗液化石油气 (`sanitation_lpg`)

仅当 Liquefied petroleum gas 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass / kg
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗重燃料油 (`sanitation_heavy_fuel_oil`)

仅当 Heavy fuel oil 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：重质燃料油
- 流属性/单位：Mass / kg
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗沼气 (`sanitation_biogas`)

仅当 Biogas 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：生物天然气，沼气 `246d7fec-59ef-4032-8539-e47632b60a23`
- 流属性/单位：Volume / m3
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗生物质成型燃料 (`sanitation_biomass_briquette`)

仅当 Biomass briquette fuel 为本过程供能时适用。同一交付热量的外购热力与现场燃料卡片互斥；并行供给应分别记录。

- 选定流：生物质致密成型燃料 `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- 流属性/单位：Mass / kg
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 清洗压缩空气 (`sanitation_compressed_air`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Compressed air 时适用；其数量须与相邻卡片逐项分开。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：根据清洗回路的计量、投加、采购和库存变化记录分配至纳入生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：按投入的场址、回路和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化投入最小值
  - 上限：根据可比纳入期间计算的归一化投入最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一清洗回路、投入身份和设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送场内处理的乳品工艺废水 (`dairy_wastewater_onsite_treatment`)

仅适用于 Dairy-process wastewater sent to on-site treatment。同一废水体积的场内与市政处理路线卡片互斥。

- 选定流：Dairy-process wastewater sent to on-site treatment
- 流属性/单位：Volume / m3
- 数量规则：报告期计量的废水体积、残余物质量和路线特定转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_and_residuals`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址与处理路线观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化输出最小值
  - 上限：根据可比纳入期间计算的归一化输出最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一废水或残余物身份及处理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 送市政处理的乳品工艺废水 (`dairy_wastewater_municipal_treatment`)

仅适用于 Dairy-process wastewater sent to municipal treatment。同一废水体积的场内与市政处理路线卡片互斥。

- 选定流：Dairy-process wastewater sent to municipal treatment
- 流属性/单位：Volume / m3
- 数量规则：报告期计量的废水体积、残余物质量和路线特定转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_and_residuals`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址与处理路线观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化输出最小值
  - 上限：根据可比纳入期间计算的归一化输出最大值
  - 单位：m3/kg net saleable cheese
  - 基准：同一废水或残余物身份及处理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 乳品废水处理污泥 (`dairy_wastewater_treatment_sludge`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Dairy wastewater-treatment sludge 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Dairy wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：报告期计量的废水体积、残余物质量和路线特定转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_and_residuals`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址与处理路线观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据可比纳入期间计算的归一化输出最小值
  - 上限：根据可比纳入期间计算的归一化输出最大值
  - 单位：kg/kg net saleable cheese
  - 基准：同一废水或残余物身份及处理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

##### 基本流

###### 向水体排放的化学需氧量 (`chemical_oxygen_demand_to_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Chemical Oxygen Demand 时适用；其数量须与相邻卡片逐项分开。

- 选定流：化学需氧量 `e57fc631-2c77-457a-aa30-be79e357792b`
- 流属性/单位：Mass / kg
- 数量规则：排水体积乘以有代表性的实测污染物浓度，并记录采样和未检出值处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_and_residuals`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、排口、污染物和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入有效样品和流量计算的归一化排放最小值
  - 上限：根据纳入有效样品和流量计算的归一化排放最大值
  - 单位：kg COD/kg net saleable cheese
  - 基准：同一排口、污染物、分析方法和报告期类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 向淡水排放的生化需氧量 (`biological_oxygen_demand_to_fresh_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 biological oxygen demand 时适用；其数量须与相邻卡片逐项分开。

- 选定流：生物需氧量 `08a91e70-3ddc-11dd-97de-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：排水体积乘以有代表性的实测污染物浓度，并记录采样和未检出值处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_and_residuals`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、排口、污染物和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入有效样品和流量计算的归一化排放最小值
  - 上限：根据纳入有效样品和流量计算的归一化排放最大值
  - 单位：kg BOD/kg net saleable cheese
  - 基准：同一排口、污染物、分析方法和报告期类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 向淡水排放的总氮 (`total_nitrogen_to_fresh_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 nitrogen, total (excluding N2) 时适用；其数量须与相邻卡片逐项分开。

- 选定流：总氮（不含N₂） `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- 流属性/单位：Mass / kg
- 数量规则：排水体积乘以有代表性的实测污染物浓度，并记录采样和未检出值处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_and_residuals`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、排口、污染物和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入有效样品和流量计算的归一化排放最小值
  - 上限：根据纳入有效样品和流量计算的归一化排放最大值
  - 单位：kg total nitrogen/kg net saleable cheese
  - 基准：同一排口、污染物、分析方法和报告期类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 向淡水排放的总磷 (`total_phosphorus_to_fresh_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 phosphorus, total 时适用；其数量须与相邻卡片逐项分开。

- 选定流：总磷 `f9df3107-6b59-4067-b920-3c61cf3630c7`
- 流属性/单位：Mass / kg
- 数量规则：排水体积乘以有代表性的实测污染物浓度，并记录采样和未检出值处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_and_residuals`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、排口、污染物和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入有效样品和流量计算的归一化排放最小值
  - 上限：根据纳入有效样品和流量计算的归一化排放最大值
  - 单位：kg total phosphorus/kg net saleable cheese
  - 基准：同一排口、污染物、分析方法和报告期类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 向淡水排放的铵 (`ammonium_to_fresh_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 ammonium 时适用；其数量须与相邻卡片逐项分开。

- 选定流：铵 `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：排水体积乘以有代表性的实测污染物浓度，并记录采样和未检出值处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_and_residuals`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、排口、污染物和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入有效样品和流量计算的归一化排放最小值
  - 上限：根据纳入有效样品和流量计算的归一化排放最大值
  - 单位：kg ammonium/kg net saleable cheese
  - 基准：同一排口、污染物、分析方法和报告期类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

###### 向淡水排放的氯化物 (`chloride_to_fresh_water`)

仅当声明路线、配方、包装配置、废物去向或实测排放中存在 Chloride to fresh water 时适用；其数量须与相邻卡片逐项分开。

- 选定流：Chloride to fresh water
- 流属性/单位：Mass / kg
- 数量规则：排水体积乘以有代表性的实测污染物浓度，并记录采样和未检出值处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_and_residuals`
- 来源：`eu-fdm-bat-2019`
- 数量范围：场址、排口、污染物和期间观测包络
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：根据纳入有效样品和流量计算的归一化排放最小值
  - 上限：根据纳入有效样品和流量计算的归一化排放最大值
  - 单位：kg chloride/kg net saleable cheese
  - 基准：同一排口、污染物、分析方法和报告期类别
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：根据采集计算（`calculated_from_collection`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 鲜制、成熟和加工产品路线 | 分配共同负荷前按产品状态、生产线、批次和单独计量操作细分。除非报告数据集明确代表该生产组合，不得平均鲜制、成熟和加工路线。 | `eu-pef-2021-2279` |
| `allocation_direct_measurement` | 可直接归属的投入与输出 | 尽可能根据批次或生产线记录直接归属山羊乳、同类奶酪投入、配料、盐水、包装、产品损失和路线特定公用工程。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_dairy_outputs` | 乳清、稀奶油和其他有用乳制输出 | 根据有文件依据的去向对每项输出分类。若为共产品，在细分后按研究管理方法要求的层级分配，并用场址期间数据披露选定的物理、经济或其他因果关系；若为废物，则分配处理且不给予共产品信用。 | `eu-pef-2021-2279` |
| `allocation_shared_services` | 共享制冷、蒸汽、水、清洗和废水系统 | 采用分表计量或由设施记录支持的工程因果服务驱动因子。若均不可得，披露替代基准并检验其影响；不得规定统一质量或经济因子。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_no_species_blending` | 混合种属乳制投入 | 分配不能把混合种属产品转化为山羊乳奶酪。任何非山羊乳源成分都会使本 PCR 不适用并须重新分类。 | `unsd-cpc-3-22254`; `codex-cxs-206-1999` |
| `allocation_brine_and_packaging` | 盐水与包装 | 包装不计入参考质量。按实测用量及声明的沥干奶酪或奶酪加游离盐水约定分配盐水生产和损失，不得重复计算保留盐水。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_dairy_material_lots` | goat_milk_intake_and_preparation; curd_formation_and_drainage; route_specific_finishing | 乳制物料接收与转移 | 供应商声明、接收单、批次单、罐或秤记录 | 批次号；供应商；动物种属；物料身份；质量；使用的成分或固形物基准；接收状态；来源和目的地；时间戳 | 校准罐、地磅或秤及批次核对 | kg | 每次接收和批次转移 | 报告期全部纳入批次 | 报告乳品厂和纳入生产线 | 汇总同类物料记录，核对库存变化后归一到放行参考产品 | 校准记录、供应商动物来源声明、批次谱系和核对签字 |
| `cp_process_utilities` | all production processes | 水、电力、热、制冷及其他公用工程 | 仪表、分表、发票、燃料和制冷剂库存记录 | 仪表号；载体；期初和期末读数；采购；库存变化；过程或生产线；运行时间；分配驱动因子 | 优先校准仪表，否则从设施总量进行有文件依据的工程分配 | carrier-specific unit | 连续、每批、每班或发票期间 | 覆盖纳入生产的代表性期间 | 报告乳品厂及识别的公用工程系统 | 按期间计算净载体用量，扣除排除用途，因果分配并归一到放行产品 | 仪表校准、发票核对、分配工作表和覆盖声明 |
| `cp_ingredients_and_additives` | curd_formation_and_drainage; route_specific_finishing | 菌种、凝乳剂、盐、盐水、添加剂和特征性配料 | 配方、批次领用、投加、库存和盐水控制记录 | 物料号；供应商；批次；乳源投入的动物来源；领用质量或体积；浓度；密度；活性或溶液基准；退回；批次号 | 校准投加系统、秤、体积仪表和库存核对 | kg or m3 | 每批和每次补加 | 全部纳入批次 | 报告乳品厂和纳入生产线 | 按材料和声明基准汇总净添加量；仅以记录的浓度或密度换算 | 配方批准、校准、批次可追溯性和库存核对 |
| `cp_byproduct_and_waste` | all production processes | 共产品、拒收物、奶酪损失、废盐水和固体废物 | 秤、罐、废物联单、转移、销售和去向记录 | 输出身份；质量或体积；使用时的水分或固形物基准；去向；产品或废物分类；时间戳；批次或期间 | 实测转移或校准容器及库存核对 | kg or m3 | 每次转移或每批；至少每报告期 | 全部纳入生产和清洗期间 | 报告乳品厂及各去向路线 | 按物料身份和去向分别汇总，核对库存变化并归一到放行产品 | 秤或仪表校准、转移单据、去向证据和质量平衡复核 |
| `cp_finished_product_release` | route_specific_finishing; packaging_cold_storage_dispatch | 成品和可销售山羊奶酪 | 批次、包装、仓库和放行记录 | 产品号；产品状态；山羊来源确认；批次；净质量；盐水约定；配料；物理形态；包装配置；贮存时长；放行状态 | 校准检重秤、秤或罐及仓库核对 | kg | 每个后处理和包装批次 | 报告期全部放行批次 | 报告乳品厂 | 使用一种声明盐水约定汇总放行净质量并排除包装质量 | 秤校准、标签或规格、放行证明和批次谱系 |
| `cp_packaging_bom` | packaging_cold_storage_dispatch | 包装材料 | 包装物料清单、领用、退回和废料记录 | 部件号；材料；单位质量；领用数量；退回；废料；包装产品号；批次 | 核实的部件质量和物料领用核对 | kg | 每种包装配置和报告期 | 全部纳入包装批次 | 报告乳品厂和包装线 | 净部件质量等于领用减退回，废料另记；归一到净放行奶酪 | 供应商规格、抽样部件质量、领用记录和核对 |
| `cp_refrigerant_balance` | packaging_cold_storage_dispatch | 制冷剂投入与排放 | 设备台账、维修日志、采购、回收和库存记录 | 设备号；制冷剂身份；充注量；补加量；回收质量；期初和期末库存；维修日期；运行范围 | 装置特定制冷剂质量平衡 | kg | 每次维修事件及年度或报告期核对 | 与纳入奶酪生产一致的期间 | 服务于纳入操作的制冷设备 | 期初库存加购入和接收补加，减回收、转移和期末库存；仅分配服务于纳入范围的设备 | 技师记录、发票、回收文件和设备台账 |
| `cp_sanitation_records` | sanitation_and_effluent | 清洗水、化学品和能源 | 原位清洗周期日志、投加、仪表和库存记录 | 回路；周期；水量；化学品身份和浓度；剂量；温度；时长；能源载体；关联生产线 | 自动周期日志及校准仪表或有文件依据的库存核对 | kg, m3, kWh, or MJ | 每个清洗周期 | 服务于纳入生产的全部周期 | 报告乳品厂和纳入清洗回路 | 按回路和投入汇总，排除无关生产，再按有文件依据的因果服务分配 | 周期完成日志、投加校准、仪表校准和清洗计划 |
| `cp_effluent_and_residuals` | sanitation_and_effluent | 废水、水体直接排放和处理残余物 | 流量计、采样、实验室、污泥和转移记录 | 排口或路线；体积；采样时间；污染物；浓度；分析方法；未检出规则；残余物质量；去向 | 依据适用设施管控进行校准流量测量和代表性采样 | m3, concentration unit, or kg | 可用时连续测流及计划采样或每次转移 | 与纳入生产及代表性运行条件一致的期间 | 报告乳品厂、各排口和各处理路线 | 由匹配流量与浓度计算污染物质量；按路线汇总残余物；归一到放行产品 | 仪表校准、样品交接、实验室质量控制、采样方案和处理记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景数量 | 归一化数量 = 纳入过程数量 / 声明盐水约定下的放行净奶酪质量 | 适用采集协议；`cp_finished_product_release` | 每 1 kg 参考产品的流数量 | `eu-pef-2021-2279` |
| `calc_material_balance` | 每批次和报告期 | 核对期初库存 + 接收量与转移量 + 放行产品 + 共产品 + 废物 + 期末库存；调查物料残差，不得静默分配 | `cp_dairy_material_lots`; `cp_ingredients_and_additives`; `cp_byproduct_and_waste`; `cp_finished_product_release` | 有文件依据的物料平衡核对 | `eu-fdm-bat-2019` |
| `calc_brine_basis` | 盐水产品 | 根据配制和补加记录分别计算保留盐水与废盐水；仅按声明质量约定把保留盐水映射至参考质量 | `cp_ingredients_and_additives`; `cp_finished_product_release`; `cp_byproduct_and_waste` | 不重复计算的盐水投入、保留量和废盐水输出 |  |
| `calc_packaging_mass` | 包装 | 部件质量 = 核实的单位质量 × 净消耗数量；按材料求和并从参考奶酪质量中排除全部包装 | `cp_packaging_bom`; `cp_finished_product_release` | 每 1 kg 参考产品的 kg 包装材料 |  |
| `calc_refrigerant_emission` | 制冷设备 | 直接排放 = 期初制冷剂库存 + 采购 + 接收补加 - 期末库存 - 回收或转移制冷剂，限于纳入设备和已核对期间 | `cp_refrigerant_balance`; `cp_finished_product_release` | 每 1 kg 参考产品排放的 kg 制冷剂 | `eu-fdm-bat-2019` |
| `calc_water_pollutant_mass` | 场内处理后直接排放 | 污染物质量 = 匹配的排水体积 × 有代表性的实测浓度，并应用有文件依据的单位换算和未检出规则 | `cp_effluent_and_residuals`; `cp_finished_product_release` | 每 1 kg 参考产品的 kg 污染物 | `eu-fdm-bat-2019` |
| `calc_observed_envelope` | 场址特定 QA 范围 | 上下界是在数据质量筛选后由可比纳入批次或期间的归一化观测值最小值和最大值构成；报告样本数和覆盖情况 | 适用采集协议；`cp_finished_product_release` | 场址特定观测 QA 包络，不是跨场址默认值 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_goat_origin` | 所有乳制物料 | 每个物料批次的动物种属均应可追溯；缺失证据或存在任何非山羊乳源成分都会使数据集不符合要求。 | 供应商声明、规格、标签、接收记录和批次谱系 |
| `dq_product_state` | 参考产品与路线 | 鲜制或未成熟、成熟或加工状态应与记录的操作、配料、适用时的成熟时长和放行规格相符。 | 产品规格、批次路线、配料领用和放行记录 |
| `dq_brine_mass_basis` | 盐水产品 | 记录应识别盐水配制、保留盐水、废盐水，以及参考质量是沥干奶酪还是奶酪加游离盐水。 | 盐水日志、浓度或密度记录、灌装记录、净含量检验和计算工作表 |
| `dq_completeness` | 前景清单 | 覆盖全部建模批次和所有相关班次、清洗周期、贮存期间、公用工程系统、共产品、废物和直接排放，并量化和说明缺口。 | 覆盖矩阵、仪表和发票核对、生产总量及缺口日志 |
| `dq_measurement` | 实测与计算值 | 计量设备、换算、分配驱动因子、采样方法和实验室结果应具有适合报告期的现行质量证据。 | 校准、方法、样品交接、实验室 QC 和计算复核记录 |
| `dq_temporal_geographic_technology` | 代表性 | 报告期、设施地域、生产技术、产品状态、包装配置和冷藏条件应代表数据集声明。 | 生产计划、设施描述、路线声明和代表性评估 |
| `dq_external_datasets` | 上游与处理关联 | 披露数据集身份、地域、技术、时间、分配和替代选择；不得以绵羊乳或通用混合乳数据替代山羊乳数据，除非明确声明不符合并重新分类。 | 数据集元数据和选择理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认 UUID `e321b953-83b8-4428-9cce-3ac3aee6aae3`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg，且不存储数据集版本。 |  |
| `validate_goat_only` | 所有乳制投入 | 动物来源缺失、出现绵羊或其他非山羊乳源成分，或混合种属产品未经重新分类即表示时，校验失败。 | `unsd-cpc-3-22254`; `codex-cxs-206-1999` |
| `validate_state_route` | 产品状态与过程图 | 要求只声明一种产品状态，并核实纳入过程记录支持该鲜制或未成熟、成熟或加工路线。 | `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `validate_brine_ingredients_packaging` | 参考限定信息 | 要求盐水状态与质量约定、特征性配料与添加剂以及包装状态；包装计入参考奶酪质量或沥干与游离盐水质量基准不一致时拒绝。 | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `validate_no_standard_as_lci` | 所有数量 | 确认未把 Codex 产品质量或成分规定和 EU BAT 性能信息复制为场址收率、能源、水、配方、盐、排放或废物数量。缺少直接定量证据的值应来自识别的场址或批次记录。 | `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |
| `validate_mass_reconciliation` | 物料流 | 对每个适用批次和报告期核对乳制投入、配料、盐水、参考产品、共产品、废物和库存变化，并调查无法解释的残差。 | `eu-fdm-bat-2019` |
| `validate_allocation` | 多功能与共享过程 | 核实首先尝试细分，选定分配驱动因子有场址期间证据支持，且共产品或废物分类与有文件依据的去向相符。 | `eu-pef-2021-2279` |
| `validate_temporal_coverage` | 前景数据 | 核实公用工程、清洗、贮存、废水、产品、共产品和废物记录覆盖同一纳入生产期间，或有文件依据的核对。 | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `validate_observed_ranges` | QA 包络 | 确认每个非数值观测范围仅由可比场址或批次记录计算，并包含样本数、期间、产品状态和路线；不得把它用作跨场址允许范围或默认值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程前景数据集，经评审后适合发布为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 用于构建产品状态、路线、盐水约定、配方、包装、地域、技术和门点相匹配的山羊乳奶酪 process 和 lifecyclemodel |
| allowed_use | 全部必需限定信息与前景记录齐备时，乳源全部来自山羊的鲜制或未成熟、成熟或加工奶酪工厂门数据集 |
| excluded_use | 绵羊乳奶酪；牛、水牛、其他动物或混合种属奶酪；非乳类似物；动物来源未经核实；不同盐水质量约定；数据未代表的路线或包装状态 |
| required_metadata | 规范 PCR id；参考 UUID；产品状态；奶酪类型和物理形态；山羊专属来源证据；制备和热处理路线；盐水状态和质量约定；配料和添加剂；包装；地域；技术；批次和报告期；门点；上游数据集；分配；截断 |
| required_quality_disclosure | 协议覆盖；实测值与计算值；观测范围样本数；校准和实验室证据；质量平衡残差；仪表和发票核对；缺失数据；分配敏感性；数据集代表性和不确定性 |
| update_trigger | 动物来源、产品状态、配方、盐水浸渍、成熟或加工路线、包装配置、设施技术、公用工程或处理系统、分配、上游数据集、参考质量约定或重大数据质量覆盖发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-22254` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0》，子类 22254，Cheese from milk of goats, fresh or processed，https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期 2026-08-12） | 分类上下文、山羊乳产品范围以及排除其他动物种属；不用于 LCI 数量 |
| `codex-cxs-206-1999` | standard | Codex Alimentarius，CXS 206-1999，《General Standard for the Use of Dairy Terms》，2022 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf（检索日期 2026-08-12） | 乳制术语、动物来源声明和特征性配料披露；不作为配方或 LCI 来源 |
| `codex-cxs-283-1978` | standard | Codex Alimentarius，CXS 283-1978，《General Standard for Cheese》，2024 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%20283-1978/CXS_283e.pdf（检索日期 2026-08-12） | 奶酪身份以及成熟和盐水状态声明；成分和质量规定不是 LCI 数值 |
| `codex-cxs-221-2001` | standard | Codex Alimentarius，CXS 221-2001，《Group Standard for Unripened Cheese including Fresh Cheese》，2022 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%20221-2001/CXS_221e.pdf（检索日期 2026-08-12） | 鲜制或未成熟产品状态适用性及可能的配料类别；不作为配方或 LCI 来源 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会，Recommendation (EU) 2021/2279，附件 I Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-12） | 功能单位、参考流、系统边界、清单、数据质量、多功能性和披露原则 |
| `eu-fdm-bat-2019` | official_guidance | 欧盟委员会，Implementing Decision (EU) 2019/2031，食品、饮料和乳品工业 BAT 结论，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-12） | 过程与环境清单覆盖、监测、资源记录、清洗、制冷、废水和质量平衡数据需求；BAT 水平不是默认 LCI 数值 |
