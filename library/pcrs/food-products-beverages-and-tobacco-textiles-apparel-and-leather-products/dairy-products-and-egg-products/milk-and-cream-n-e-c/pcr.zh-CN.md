---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.milk-and-cream-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类的乳和稀奶油

## 1. 范围与适用性

本 PCR 仅适用于通过 CPC 3.0 层级 gate `222 > 2222 > 22229` 的动物乳或稀奶油产品：产品属于乳或稀奶油，经过浓缩或含添加糖或其他甜味物质，仍为非固体形态，且不归入淡炼乳（`22221`）或甜炼乳（`22222`）。必须声明实际商品、组成、浓缩或加甜路线、物理状态、热处理、包装和工厂门口状态。

须按顺序应用以下 gate。任一项失败或结论未解决，均不得自动选择本 PCR。

| gate_id | 问题 | 通过条件 | 失败处理 | source_ids |
| --- | --- | --- | --- | --- |
| `scope_gate_1_dairy_identity` | 产品是否为动物乳、稀奶油或正确使用乳品术语的乳制品？ | 产品身份和配料记录支持其符合 CXS 206-1999 下的乳或稀奶油身份。 | 排除非乳饮料、仿制品及乳品身份未解决的产品。 | `codex-cxs-206-1999` |
| `scope_gate_2_cpc_parent` | 产品是否符合 CPC 3.0 类 2222？ | 产品经过浓缩或含添加糖或其他甜味物质，且并非固体形态。 | 加工液态乳、新鲜稀奶油、乳清或其他类别须转用各自 PCR。 | `unsd-cpc-22229` |
| `scope_gate_3_named_siblings` | 产品是否不属于具名子类 22221 和 22222？ | 按已声明的分类决定，产品既非淡炼乳也非甜炼乳。 | 使用淡炼乳或甜炼乳 PCR。 | `unsd-cpc-22229` |
| `scope_gate_4_non_solid` | 放行产品是否保持非固体形态？ | 放行形态为液体、黏稠液体或膏状，而非奶粉或稀奶油粉。 | 排除固体形态；CXS 207-1999 仅用于识别粉状产品边界，不用于设定 CPC 22229 配方。 | `unsd-cpc-22229`; `codex-cxs-207-1999` |
| `scope_gate_5_nec_review` | 是否记录了剩余的 n.e.c. 归类理由？ | 已记录产品名称、组成、路线、物理状态，以及不属于 22221 或 22222 的理由，并经人工复核。 | 保持 `manual_review`；n.e.c. 不能作为未知产品的快捷分类。 | `unsd-cpc-22229` |

本范围不包括原料乳、普通加工液态乳、新鲜稀奶油、乳清、所有乳和稀奶油粉、淡炼乳、甜炼乳、发酵或酸化乳和稀奶油、黄油和其他乳脂、奶酪、酪蛋白、冰淇淋、植物基饮料及乳品仿制品。养殖和原料乳生产、外购配料、能源、包装和化学品的制造、入厂运输、出厂后配送、零售、使用和生命末期在研究范围需要时由上游或下游数据集连接，不在本前景数据包中重复建模。

天工流 Milk/牛奶 `84a8c346-2832-400b-a2a6-421ef7701958` 仅是 CPC 22229 中牛奶子集的代表产品流身份，不能代表稀奶油或整个 n.e.c. 子类。实际产品若为稀奶油，或在语义上不匹配 Milk/牛奶，必须在建模或发布前替换为准确产品流并完成人工身份复核。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.milk-and-cream-n-e-c |
| classification_refs | CPC 3.0：22229，Milk and cream, n.e.c.，exact；仅结合父类 2222 及同级 22221/22222 排除关系解释 |
| covered_products | 经浓缩或含添加糖或其他甜味物质、保持非固体形态、不属于淡炼乳或甜炼乳，且已记录 CPC 22229 剩余归类决定的动物乳或稀奶油产品 |
| excluded_products | 原料乳或普通加工液态乳；新鲜稀奶油；乳清；乳或稀奶油粉；淡炼乳；甜炼乳；发酵或酸化产品；黄油或其他乳脂；奶酪；酪蛋白；冰淇淋；植物基产品；n.e.c. 归类未解决的产品 |
| representative_product | 工厂门口符合条件的非固体浓缩或加甜乳产品；天工 Milk 流仅代表实际为牛奶的产品 |
| production_route | 乳基料接收和身份检查；按实际情况进行标准化、混合、浓缩或加甜；适用时热处理和冷却；灌装或散装发运；工厂门口储存；清洗和废水管理 |
| market_state | 工厂门口已声明散装或包装的非固体乳或稀奶油产品；冷藏或常温稳定状态依据实际放行记录声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在乳品工厂门口供应已明确声明的 CPC 22229 乳或稀奶油产品 |
| How much | 1 kg 净放行产品，不含包装质量 |
| How well | 通过全部五项范围 gate，并满足所声明的组成、浓缩或加甜基准、物理状态、热处理、包装和放行规格 |
| How long or cycle | 工厂门口放行的一个生产批次或代表性生产期间；保质期和储存条件是限定信息，不增加产品数量 |
| reference_flow_link | `cpc_22229_product_at_factory_gate` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Milk/牛奶 `84a8c346-2832-400b-a2a6-421ef7701958`——仅在实际 CPC 22229 产品为牛奶时作为代表；稀奶油或其他不匹配产品必须换流并人工复核 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 商品名称；乳或稀奶油身份；动物种类和乳基料来源；CPC 父级路径与同级排除决定；浓缩方法和浓缩基准；适用时添加糖或其他甜味剂身份及含量；放行物理状态；产品规格采用的脂肪、蛋白质、总固形物或干物质基准；热处理路线；均质状态；配料；散装或包装配置；净质量；设施地域；参考期；工厂门口温度或储存条件；保质期；实际产品流 UUID；代表流匹配决定及需要换流时的人工复核人 |

每项必需限定信息都必须出现在元数据、产品描述、过程说明、参考流注释或等效前景数据包字段中。对稀奶油或其他不匹配的 n.e.c. 产品，给定 Milk UUID 不能满足产品流要求。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 放行参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅报告净放行产品质量。包装须作为独立清单投入，不计入 1 kg 参考量。 |
| `volume_to_mass` | 乳、稀奶油、液体配料、水和液体废物 | 质量或体积及实测密度 | kg 或 m3 | 仅使用适用于实际物料、组成、温度和期间的实测或核实密度将体积换算为质量，并保留原始体积、密度、温度和计算。 |
| `composition_and_concentration` | 乳品投入、中间产品、最终产品和乳品共产品 | 按声明湿基或干物质基准的质量分数 | kg/kg 或质量 % | 对用于身份、质量平衡、浓缩控制或分配的组成字段使用实测或经核实的批次特定值。不得根据通用 Milk 流名称推断组成。 |
| `sweetener_basis` | 添加糖和其他甜味物质 | 质量 | kg | 按采购、投料或批记录分别记录每种甜味剂，并声明其含量采用配料质量、固形物或其他经核实的分析基准。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽、热水和制冷 | 能量 | kWh、MJ 或其他声明单位 | 每种载能体保持独立交换并保留换算因子；在连接背景数据集前不得合并电力和热能。 |
| `water_and_wastewater` | 工艺水、清洗水、回收水和废水 | 体积 | m3 或 L | 区分水源、用途、回收和排放测量点。使用 1 m3 = 1,000 L；无采集记录不得由产品质量推断废水量。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造设施接收的乳基料和其他配料，须声明身份、供应商、数量、适用时的组成和温度、验收状态及上游数据集引用 |
| starting_condition_role | 前景采集从设施接收开始；农业生产和外购投入制造由上游数据集表示 |
| product_classification_scope | 仅包括通过第 1 节有序 CPC 22229 gate 的产品；类别选择独立于代表性 Milk 流 |
| recursive_input_rule | 同类别转入产品或返工料作为独立技术圈投入，记录来源、数量、组成和供给数据集；递归终止于该数据集，并避免重复其先前生产 |
| upstream_dataset_requirement | 研究范围包括时，为每种乳基料、甜味剂、其他配料、载能体、供水、清洗剂、制冷剂、包装材料、运输服务和场外处理连接有代表性的上游数据集 |
| disclosure | 声明五项 gate 结果、产品流适配或换流复核、设施、期间、产品路线、所含及外包步骤、组成基准、储存条件、分配方法、共产品、损失、处理去向、数据缺口和所有排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_scope_gate` | 产品类别选择 | 仅在五项 CPC 22229 范围 gate 全部通过后纳入产品。n.e.c. 决定未解决或代表流不匹配时须人工复核，不能视为自动覆盖。 | `unsd-cpc-22229`; `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `boundary_factory_gate_operations` | 前景乳品制造 | 纳入接收和储存、适用的标准化与混合、使产品符合 CPC 类 2222 的浓缩或加甜操作、实际采用的热处理和冷却、灌装或散装发运、场内储存、清洗、产品损失、废物、废水及适用的直接排放，直至工厂门口放行。 | `eu-fdm-bref-2019` |
| `boundary_upstream_links` | 外购投入和服务 | 农业生产及配料、公用工程、化学品、包装和制冷剂制造保持在前景操作之外，但在从摇篮到工厂门口或更宽研究中必须通过明确上游数据集连接。 | `eu-pef-2021-2279` |
| `boundary_downstream_separation` | 下游生命周期阶段 | 出厂后配送、零售、使用、食品损失、包装生命末期和产品生命末期是独立下游模块，不得并入工厂门口前景结果。 | `eu-pef-2021-2279` |
| `boundary_no_missing_as_zero` | 所有前景活动数据 | 采集适用的材料、能源、水、化学品、制冷剂、包装、共产品、损失、废水、废物和直接排放。缺失记录是数据缺口而非零流；零值须有该活动或交换未发生的证据。 | `eu-pef-2021-2279`; `eu-fdm-bref-2019` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | 乳基料接收、身份控制、标准化和配料 | `required` | 始终纳入接收和身份控制；实际发生时纳入分离、标准化、混合、复原或配料 | 建立合格产品投入和预制混合料 | 每 kg 实测转序预制乳混合料 |
| `qualifying_treatment` | 浓缩或加甜、热处理和冷却 | `required` | 纳入使产品符合 CPC 类 2222 的实际浓缩或添加甜味剂路线；实际发生时纳入热处理和冷却 | 生成所声明的非固体 CPC 22229 中间产品 | 每 kg 实测处理后中间产品 |
| `filling_and_storage` | 灌装或散装发运及工厂门口储存 | `required` | 始终纳入；仅有散装发运记录时包装投入可为零 | 生成放行参考产品 | 每 1 kg 净放行产品 |
| `sanitation_and_effluent` | 清洗、卫生和废水管理 | `required` | 纳入所有可归属的 CIP、管线清洗、消毒、废水收集和场内处理 | 跨过程前景支持 | 直接归属或分配后每 1 kg 净放行产品 |

### 过程：乳基料接收、身份控制、标准化和配料（`receipt_and_preparation`）

#### 输入

##### 产品流

###### 生牛乳投入（`raw_cow_milk_input`）

Raw cow milk 跨越接收边界时作为一项验收乳品投入记录；保留供应商身份、适用时的动物种类、组成、批次和净验收质量。

- 选定流：Raw cow milk
- 流属性/单位：Mass / kg
- 数量规则：该乳品投入扣除拒收并计入库存变化后的实测净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_identity_and_mass`
- 来源：`codex-cxs-206-1999`; `unsd-cpc-22229`

###### 生水牛乳投入（`raw_buffalo_milk_input`）

Raw buffalo milk 跨越接收边界时作为一项验收乳品投入记录；保留供应商身份、适用时的动物种类、组成、批次和净验收质量。

- 选定流：Raw buffalo milk
- 流属性/单位：Mass / kg
- 数量规则：该乳品投入扣除拒收并计入库存变化后的实测净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_identity_and_mass`
- 来源：`codex-cxs-206-1999`; `unsd-cpc-22229`

###### 生山羊乳投入（`raw_goat_milk_input`）

Raw goat milk 跨越接收边界时作为一项验收乳品投入记录；保留供应商身份、适用时的动物种类、组成、批次和净验收质量。

- 选定流：Raw goat milk
- 流属性/单位：Mass / kg
- 数量规则：该乳品投入扣除拒收并计入库存变化后的实测净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_identity_and_mass`
- 来源：`codex-cxs-206-1999`; `unsd-cpc-22229`

###### 生绵羊乳投入（`raw_sheep_milk_input`）

Raw sheep milk 跨越接收边界时作为一项验收乳品投入记录；保留供应商身份、适用时的动物种类、组成、批次和净验收质量。

- 选定流：Raw sheep milk
- 流属性/单位：Mass / kg
- 数量规则：该乳品投入扣除拒收并计入库存变化后的实测净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_identity_and_mass`
- 来源：`codex-cxs-206-1999`; `unsd-cpc-22229`

###### 生骆驼乳投入（`raw_camel_milk_input`）

Raw camel milk 跨越接收边界时作为一项验收乳品投入记录；保留供应商身份、适用时的动物种类、组成、批次和净验收质量。

- 选定流：Raw camel milk
- 流属性/单位：Mass / kg
- 数量规则：该乳品投入扣除拒收并计入库存变化后的实测净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_identity_and_mass`
- 来源：`codex-cxs-206-1999`; `unsd-cpc-22229`

###### 牛乳稀奶油投入（`cow_milk_cream_input`）

Cow-milk cream 跨越接收边界时作为一项验收乳品投入记录；保留供应商身份、适用时的动物种类、组成、批次和净验收质量。

- 选定流：Cow-milk cream
- 流属性/单位：Mass / kg
- 数量规则：该乳品投入扣除拒收并计入库存变化后的实测净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_identity_and_mass`
- 来源：`codex-cxs-206-1999`; `unsd-cpc-22229`

###### 脱脂乳投入（`skim_milk_input`）

Skim milk 跨越接收边界时作为一项验收乳品投入记录；保留供应商身份、适用时的动物种类、组成、批次和净验收质量。

- 选定流：Skim milk
- 流属性/单位：Mass / kg
- 数量规则：该乳品投入扣除拒收并计入库存变化后的实测净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_identity_and_mass`
- 来源：`codex-cxs-206-1999`; `unsd-cpc-22229`

###### 浓缩乳投入（`concentrated_milk_input`）

Concentrated milk 跨越接收边界时作为一项验收乳品投入记录；保留供应商身份、适用时的动物种类、组成、批次和净验收质量。

- 选定流：Concentrated milk
- 流属性/单位：Mass / kg
- 数量规则：该乳品投入扣除拒收并计入库存变化后的实测净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_identity_and_mass`
- 来源：`codex-cxs-206-1999`; `unsd-cpc-22229`

###### 浓缩稀奶油投入（`concentrated_cream_input`）

Concentrated cream 跨越接收边界时作为一项验收乳品投入记录；保留供应商身份、适用时的动物种类、组成、批次和净验收质量。

- 选定流：Concentrated cream
- 流属性/单位：Mass / kg
- 数量规则：该乳品投入扣除拒收并计入库存变化后的实测净验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_identity_and_mass`
- 来源：`codex-cxs-206-1999`; `unsd-cpc-22229`

###### 蔗糖投入（`sucrose_input`）

Sucrose 在投配至所代表生产批次时作为一项配料或加工助剂投入记录。

- 选定流：Sucrose
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测领用质量，或由经核实配方和产量计算的批次投配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`unsd-cpc-22229`

###### 葡萄糖浆投入（`glucose_syrup_input`）

Glucose syrup 在投配至所代表生产批次时作为一项配料或加工助剂投入记录。

- 选定流：Glucose syrup
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测领用质量，或由经核实配方和产量计算的批次投配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`unsd-cpc-22229`

###### 果糖投入（`fructose_input`）

Fructose 在投配至所代表生产批次时作为一项配料或加工助剂投入记录。

- 选定流：Fructose
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测领用质量，或由经核实配方和产量计算的批次投配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`unsd-cpc-22229`

###### 乳糖投入（`lactose_input`）

Lactose 在投配至所代表生产批次时作为一项配料或加工助剂投入记录。

- 选定流：Lactose
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测领用质量，或由经核实配方和产量计算的批次投配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`unsd-cpc-22229`

###### 柠檬酸钠投入（`sodium_citrate_input`）

Sodium citrate 在投配至所代表生产批次时作为一项配料或加工助剂投入记录。

- 选定流：Sodium citrate
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测领用质量，或由经核实配方和产量计算的批次投配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`eu-fdm-bref-2019`

###### 聚二甲基硅氧烷消泡剂投入（`pdms_antifoam_input`）

Polydimethylsiloxane antifoam 在投配至所代表生产批次时作为一项配料或加工助剂投入记录。

- 选定流：Polydimethylsiloxane antifoam
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测领用质量，或由经核实配方和产量计算的批次投配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段管网水（`preparation_mains_water`）

跨越设施边界供应给接收与制备的 Potable mains water 与直接环境取水及回收水分别记录。

- 选定流：市政饮用水
- 流属性/单位：Volume / m3
- 数量规则：直接归属给接收与制备的管网水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段电网电力（`preparation_grid_electricity`）

接收与制备消耗的 Electricity, medium voltage, grid mix 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：中压电力，电网组合
- 流属性/单位：Energy / kWh
- 数量规则：实测用电量并直接归属给接收与制备；共享总量仅分配一次并进行核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段外购蒸汽（`preparation_purchased_steam`）

接收与制备消耗的 Purchased steam 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量并直接归属给接收与制备；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段外购热水（`preparation_purchased_hot_water`）

接收与制备消耗的 Purchased hot water 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量并直接归属给接收与制备；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段天然气（`preparation_natural_gas`）

接收与制备消耗的 Natural gas 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量并直接归属给接收与制备；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段柴油（`preparation_diesel`）

接收与制备消耗的 Diesel fuel 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量并直接归属给接收与制备；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段液化石油气（`preparation_lpg`）

接收与制备消耗的 Liquefied petroleum gas 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量并直接归属给接收与制备；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段 R-717 制冷剂补充（`preparation_r717_makeup`）

向服务于接收与制备的制冷设备补充的 Ammonia refrigerant (R-717) 作为一项产品投入记录。

- 选定流：氨制冷剂（R-717）
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂维修与库存记录实测的补充质量；不得把系统总充注量当作补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段 HFC-134a 制冷剂补充（`preparation_hfc134a_makeup`）

向服务于接收与制备的制冷设备补充的 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) 作为一项产品投入记录。

- 选定流：1,1,1,2-四氟乙烷制冷剂（HFC-134a）
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂维修与库存记录实测的补充质量；不得把系统总充注量当作补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段 R-404A 制冷剂补充（`preparation_r404a_makeup`）

向服务于接收与制备的制冷设备补充的 R-404A refrigerant 作为一项产品投入记录。

- 选定流：R-404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂维修与库存记录实测的补充质量；不得把系统总充注量当作补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

##### 废物流

##### 基本流

###### 地下水直接取用（`preparation_groundwater`）

为接收与制备从环境直接取用的 Water, ground 作为一项基本流投入记录，不与管网供水重复。

- 选定流：地下水
- 流属性/单位：Volume / m3
- 数量规则：归属给接收与制备的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 地表水直接取用（`preparation_surface_water`）

为接收与制备从环境直接取用的 Water, surface 作为一项基本流投入记录，不与管网供水重复。

- 选定流：地表水
- 流属性/单位：Volume / m3
- 数量规则：归属给接收与制备的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 产品流

###### 预制乳混合料（`prepared_mix_output`）

Prepared dairy mix 是从接收与制备转入符合条件处理的一项内部产品。

- 选定流：Prepared dairy mix
- 流属性/单位：Mass / kg
- 数量规则：与乳品投入、配料、留存库存、共产品和已记录损失核对后的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-pef-2021-2279`

###### 稀奶油共产品（`cream_coproduct_output`）

标准化过程中作为可销售共产品离开的 Cream 作为一项正产品输出记录。

- 选定流：Cream
- 流属性/单位：Mass / kg
- 数量规则：同一生产期间的实测输出质量，并保留组成和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-pef-2021-2279`

###### 脱脂乳共产品（`skim_milk_coproduct_output`）

标准化过程中作为可销售共产品离开的 Skim milk 作为一项正产品输出记录。

- 选定流：Skim milk
- 流属性/单位：Mass / kg
- 数量规则：同一生产期间的实测输出质量，并保留组成和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 拒收生乳（`rejected_raw_milk_waste`）

离开接收或制备过程的 Rejected raw milk 作为一项废物交换记录，并保留其实测去向。

- 选定流：Rejected raw milk
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-fdm-bref-2019`

###### 拒收乳稀奶油（`rejected_cream_waste`）

离开接收或制备过程的 Rejected dairy cream 作为一项废物交换记录，并保留其实测去向。

- 选定流：Rejected dairy cream
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-fdm-bref-2019`

###### 乳品配料混合物溢漏（`preparation_dairy_spill_waste`）

离开接收或制备过程的 Dairy formulation spill 作为一项废物交换记录，并保留其实测去向。

- 选定流：Dairy formulation spill
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-fdm-bref-2019`

##### 基本流

###### 制备阶段化石二氧化碳排入空气（`preparation_fossil_co2_air`）

服务于接收与制备的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段甲烷排入空气（`preparation_methane_air`）

服务于接收与制备的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段氧化亚氮排入空气（`preparation_nitrous_oxide_air`）

服务于接收与制备的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段一氧化氮排入空气（`preparation_nitrogen_monoxide_air`）

服务于接收与制备的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：一氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段二氧化氮排入空气（`preparation_nitrogen_dioxide_air`）

服务于接收与制备的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：二氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段一氧化碳排入空气（`preparation_carbon_monoxide_air`）

服务于接收与制备的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：一氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段二氧化硫排入空气（`preparation_sulfur_dioxide_air`）

服务于接收与制备的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段氨制冷剂排入空气（`preparation_ammonia_air`）

服务于接收与制备的制冷设备释放的 Ammonia to air 作为一项基本流输出报告。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段 HFC-134a 排入空气（`preparation_hfc134a_air`）

服务于接收与制备的制冷设备释放的 1,1,1,2-Tetrafluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段 HFC-125 排入空气（`preparation_hfc125_air`）

服务于接收与制备的制冷设备释放的 Pentafluoroethane to air 作为一项基本流输出报告。

- 选定流：五氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 制备阶段 HFC-143a 排入空气（`preparation_hfc143a_air`）

服务于接收与制备的制冷设备释放的 1,1,1-Trifluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1-三氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测预制乳混合料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

### 过程：浓缩或加甜、热处理和冷却（`qualifying_treatment`）

#### 输入

##### 产品流

###### 预制乳混合料投入（`prepared_mix_input`）

进入符合条件处理的 Prepared dairy mix 与制备阶段输出为同一项内部产品。

- 选定流：Prepared dairy mix
- 流属性/单位：Mass / kg
- 数量规则：所代表批次或期间的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-pef-2021-2279`

###### 处理阶段管网水（`treatment_mains_water`）

跨越设施边界供应给符合条件处理的 Potable mains water 与直接环境取水及回收水分别记录。

- 选定流：市政饮用水
- 流属性/单位：Volume / m3
- 数量规则：直接归属给符合条件处理的管网水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段电网电力（`treatment_grid_electricity`）

符合条件处理消耗的 Electricity, medium voltage, grid mix 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：中压电力，电网组合
- 流属性/单位：Energy / kWh
- 数量规则：实测用电量并直接归属给符合条件处理；共享总量仅分配一次并进行核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段外购蒸汽（`treatment_purchased_steam`）

符合条件处理消耗的 Purchased steam 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量并直接归属给符合条件处理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段外购热水（`treatment_purchased_hot_water`）

符合条件处理消耗的 Purchased hot water 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量并直接归属给符合条件处理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段天然气（`treatment_natural_gas`）

符合条件处理消耗的 Natural gas 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量并直接归属给符合条件处理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段柴油（`treatment_diesel`）

符合条件处理消耗的 Diesel fuel 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量并直接归属给符合条件处理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段液化石油气（`treatment_lpg`）

符合条件处理消耗的 Liquefied petroleum gas 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量并直接归属给符合条件处理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段 R-717 制冷剂补充（`treatment_r717_makeup`）

向服务于符合条件处理的制冷设备补充的 Ammonia refrigerant (R-717) 作为一项产品投入记录。

- 选定流：氨制冷剂（R-717）
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂维修与库存记录实测的补充质量；不得把系统总充注量当作补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段 HFC-134a 制冷剂补充（`treatment_hfc134a_makeup`）

向服务于符合条件处理的制冷设备补充的 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) 作为一项产品投入记录。

- 选定流：1,1,1,2-四氟乙烷制冷剂（HFC-134a）
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂维修与库存记录实测的补充质量；不得把系统总充注量当作补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段 R-404A 制冷剂补充（`treatment_r404a_makeup`）

向服务于符合条件处理的制冷设备补充的 R-404A refrigerant 作为一项产品投入记录。

- 选定流：R-404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂维修与库存记录实测的补充质量；不得把系统总充注量当作补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

##### 废物流

##### 基本流

###### 处理阶段地下水直接取用（`treatment_groundwater`）

为符合条件处理从环境直接取用的 Water, ground 作为一项基本流投入记录，不与管网供水重复。

- 选定流：地下水
- 流属性/单位：Volume / m3
- 数量规则：归属给符合条件处理的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段地表水直接取用（`treatment_surface_water`）

为符合条件处理从环境直接取用的 Water, surface 作为一项基本流投入记录，不与管网供水重复。

- 选定流：地表水
- 流属性/单位：Volume / m3
- 数量规则：归属给符合条件处理的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 产品流

###### 处理后非固体乳品（`treated_intermediate_output`）

Treated non-solid dairy product 是在灌装前离开所声明浓缩或加甜及热处理路线的一项内部产品。

- 选定流：Treated non-solid dairy product
- 流属性/单位：Mass / kg
- 数量规则：与预制混合料、除水量、留存库存、共产品和已记录损失核对后的实测输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 工艺冷凝水（`process_condensate_output`）

浓缩过程中回收的 Process condensate 在复用或离开处理核算边界时作为一项产品输出。

- 选定流：Process condensate
- 流属性/单位：Volume / m3
- 数量规则：实测输出量，并保留质量、去向以及复用或市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 乳渗透液共产品（`milk_permeate_output`）

膜浓缩操作产生并作为可用共产品离开的 Milk permeate 作为一项正产品输出记录。

- 选定流：Milk permeate
- 流属性/单位：Mass / kg
- 数量规则：实测输出量，并保留质量、去向以及复用或市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-fdm-bref-2019`

##### 废物流

###### 不合格处理后乳品（`off_spec_treated_product_waste`）

从处理阶段转出的 Off-specification treated dairy product 作为一项废物交换记录。

- 选定流：Off-specification treated dairy product
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测转出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_solids_balance`
- 来源：`eu-fdm-bref-2019`

##### 基本流

###### 处理阶段化石二氧化碳排入空气（`treatment_fossil_co2_air`）

服务于符合条件处理的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段甲烷排入空气（`treatment_methane_air`）

服务于符合条件处理的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段氧化亚氮排入空气（`treatment_nitrous_oxide_air`）

服务于符合条件处理的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段一氧化氮排入空气（`treatment_nitrogen_monoxide_air`）

服务于符合条件处理的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：一氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段二氧化氮排入空气（`treatment_nitrogen_dioxide_air`）

服务于符合条件处理的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：二氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段一氧化碳排入空气（`treatment_carbon_monoxide_air`）

服务于符合条件处理的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：一氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段二氧化硫排入空气（`treatment_sulfur_dioxide_air`）

服务于符合条件处理的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段氨制冷剂排入空气（`treatment_ammonia_air`）

服务于符合条件处理的制冷设备释放的 Ammonia to air 作为一项基本流输出报告。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段 HFC-134a 排入空气（`treatment_hfc134a_air`）

服务于符合条件处理的制冷设备释放的 1,1,1,2-Tetrafluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段 HFC-125 排入空气（`treatment_hfc125_air`）

服务于符合条件处理的制冷设备释放的 Pentafluoroethane to air 作为一项基本流输出报告。

- 选定流：五氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 处理阶段 HFC-143a 排入空气（`treatment_hfc143a_air`）

服务于符合条件处理的制冷设备释放的 1,1,1-Trifluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1-三氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 实测处理后中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

### 过程：灌装或散装发运及工厂门口储存（`filling_and_storage`）

#### 输入

##### 产品流

###### 处理后乳品投入（`treated_product_input`）

进入灌装或散装发运的 Treated non-solid dairy product 与处理阶段输出为同一项内部产品。

- 选定流：Treated non-solid dairy product
- 流属性/单位：Mass / kg
- 数量规则：转入灌装或散装发运的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_released_product`
- 来源：`eu-pef-2021-2279`

###### PET 瓶（`pet_bottle_input`）

为放行包装配置跨越设施边界的 Polyethylene terephthalate bottle 作为一项包装组件投入记录。

- 选定流：Polyethylene terephthalate bottle
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### HDPE 瓶（`hdpe_bottle_input`）

为放行包装配置跨越设施边界的 High-density polyethylene bottle 作为一项包装组件投入记录。

- 选定流：High-density polyethylene bottle
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 玻璃瓶（`glass_bottle_input`）

为放行包装配置跨越设施边界的 Glass bottle 作为一项包装组件投入记录。

- 选定流：Glass bottle
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 镀锡钢罐（`tinplate_can_input`）

为放行包装配置跨越设施边界的 Tinplate steel can 作为一项包装组件投入记录。

- 选定流：Tinplate steel can
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 液体食品纸板盒（`paperboard_carton_input`）

为放行包装配置跨越设施边界的 Paperboard liquid-food carton 作为一项包装组件投入记录。

- 选定流：Paperboard liquid-food carton
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### LDPE 袋（`ldpe_pouch_input`）

为放行包装配置跨越设施边界的 Low-density polyethylene pouch 作为一项包装组件投入记录。

- 选定流：Low-density polyethylene pouch
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 聚丙烯封盖（`pp_closure_input`）

为放行包装配置跨越设施边界的 Polypropylene closure 作为一项包装组件投入记录。

- 选定流：Polypropylene closure
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 铝箔封口（`aluminium_seal_input`）

为放行包装配置跨越设施边界的 Aluminium foil seal 作为一项包装组件投入记录。

- 选定流：Aluminium foil seal
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 瓦楞纸箱（`corrugated_box_input`）

为放行包装配置跨越设施边界的 Corrugated board box 作为一项包装组件投入记录。

- 选定流：Corrugated board box
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 木托盘（`wooden_pallet_input`）

为放行包装配置跨越设施边界的 Wooden pallet 作为一项包装组件投入记录。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### LDPE 缠绕膜（`ldpe_stretch_film_input`）

为放行包装配置跨越设施边界的 Low-density polyethylene stretch film 作为一项包装组件投入记录。

- 选定流：低密度聚乙烯拉伸膜
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与灌装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 灌装与储存阶段电网电力（`filling_storage_grid_electricity`）

灌装与工厂门口储存消耗的 Electricity, medium voltage, grid mix 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：中压电力，电网组合
- 流属性/单位：Energy / kWh
- 数量规则：实测用电量并直接归属给灌装与工厂门口储存；共享总量仅分配一次并进行核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段外购蒸汽（`filling_storage_purchased_steam`）

灌装与工厂门口储存消耗的 Purchased steam 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量并直接归属给灌装与工厂门口储存；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段外购热水（`filling_storage_purchased_hot_water`）

灌装与工厂门口储存消耗的 Purchased hot water 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量并直接归属给灌装与工厂门口储存；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段天然气（`filling_storage_natural_gas`）

灌装与工厂门口储存消耗的 Natural gas 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量并直接归属给灌装与工厂门口储存；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段柴油（`filling_storage_diesel`）

灌装与工厂门口储存消耗的 Diesel fuel 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量并直接归属给灌装与工厂门口储存；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段液化石油气（`filling_storage_lpg`）

灌装与工厂门口储存消耗的 Liquefied petroleum gas 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量并直接归属给灌装与工厂门口储存；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段 R-717 制冷剂补充（`filling_storage_r717_makeup`）

向服务于灌装与工厂门口储存的制冷设备补充的 Ammonia refrigerant (R-717) 作为一项产品投入记录。

- 选定流：氨制冷剂（R-717）
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂维修与库存记录实测的补充质量；不得把系统总充注量当作补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段 HFC-134a 制冷剂补充（`filling_storage_hfc134a_makeup`）

向服务于灌装与工厂门口储存的制冷设备补充的 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) 作为一项产品投入记录。

- 选定流：1,1,1,2-四氟乙烷制冷剂（HFC-134a）
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂维修与库存记录实测的补充质量；不得把系统总充注量当作补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段 R-404A 制冷剂补充（`filling_storage_r404a_makeup`）

向服务于灌装与工厂门口储存的制冷设备补充的 R-404A refrigerant 作为一项产品投入记录。

- 选定流：R-404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂维修与库存记录实测的补充质量；不得把系统总充注量当作补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行 CPC 22229 产品（`reference_product_output`）

仅当放行的符合条件产品为乳时，才保留带 UUID 的 Milk 参考流。稀奶油或语义不同的产品在建模或发布前必须采用另行复核的替代流。

- 选定流：牛奶 `84a8c346-2832-400b-a2a6-421ef7701958`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：作为定量参考的恰好 1 kg 净放行产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_released_product`
- 来源：`unsd-cpc-22229`; `codex-cxs-206-1999`

##### 废物流

###### 拒收灌装乳品（`rejected_filled_product_waste`）

离开灌装过程的 Rejected filled dairy product 与每项包装废物组件分别记录。

- 选定流：Rejected filled dairy product
- 流属性/单位：Mass / kg
- 数量规则：不含已分别记录包装质量的实测拒收产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-fdm-bref-2019`

###### PET 包装废物（`pet_bottle_waste`）

灌装过程中产生的 Waste polyethylene terephthalate packaging 作为一项单一材料废物交换记录。

- 选定流：Waste polyethylene terephthalate packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### HDPE 包装废物（`hdpe_bottle_waste`）

灌装过程中产生的 Waste high-density polyethylene packaging 作为一项单一材料废物交换记录。

- 选定流：Waste high-density polyethylene packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 玻璃包装废物（`glass_bottle_waste`）

灌装过程中产生的 Waste glass packaging 作为一项单一材料废物交换记录。

- 选定流：Waste glass packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 镀锡钢包装废物（`tinplate_can_waste`）

灌装过程中产生的 Waste tinplate steel packaging 作为一项单一材料废物交换记录。

- 选定流：Waste tinplate steel packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 纸板包装废物（`paperboard_carton_waste`）

灌装过程中产生的 Waste paperboard packaging 作为一项单一材料废物交换记录。

- 选定流：Waste paperboard packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### LDPE 包装废物（`ldpe_pouch_waste`）

灌装过程中产生的 Waste low-density polyethylene packaging 作为一项单一材料废物交换记录。

- 选定流：Waste low-density polyethylene packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 聚丙烯包装废物（`pp_closure_waste`）

灌装过程中产生的 Waste polypropylene packaging 作为一项单一材料废物交换记录。

- 选定流：Waste polypropylene packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 铝包装废物（`aluminium_seal_waste`）

灌装过程中产生的 Waste aluminium packaging 作为一项单一材料废物交换记录。

- 选定流：Waste aluminium packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 瓦楞纸板包装废物（`corrugated_box_waste`）

灌装过程中产生的 Waste corrugated board packaging 作为一项单一材料废物交换记录。

- 选定流：Waste corrugated board packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### 木包装废物（`wooden_pallet_waste`）

灌装过程中产生的 Waste wooden packaging 作为一项单一材料废物交换记录。

- 选定流：Waste wooden packaging
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

###### LDPE 缠绕膜废物（`ldpe_stretch_film_waste`）

灌装过程中产生的 Waste low-density polyethylene stretch film 作为一项单一材料废物交换记录。

- 选定流：Waste low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bref-2019`

##### 基本流

###### 灌装与储存阶段化石二氧化碳排入空气（`filling_storage_fossil_co2_air`）

服务于灌装与工厂门口储存的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段甲烷排入空气（`filling_storage_methane_air`）

服务于灌装与工厂门口储存的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段氧化亚氮排入空气（`filling_storage_nitrous_oxide_air`）

服务于灌装与工厂门口储存的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段一氧化氮排入空气（`filling_storage_nitrogen_monoxide_air`）

服务于灌装与工厂门口储存的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：一氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段二氧化氮排入空气（`filling_storage_nitrogen_dioxide_air`）

服务于灌装与工厂门口储存的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：二氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段一氧化碳排入空气（`filling_storage_carbon_monoxide_air`）

服务于灌装与工厂门口储存的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：一氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段二氧化硫排入空气（`filling_storage_sulfur_dioxide_air`）

服务于灌装与工厂门口储存的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段氨制冷剂排入空气（`filling_storage_ammonia_air`）

服务于灌装与工厂门口储存的制冷设备释放的 Ammonia to air 作为一项基本流输出报告。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段 HFC-134a 排入空气（`filling_storage_hfc134a_air`）

服务于灌装与工厂门口储存的制冷设备释放的 1,1,1,2-Tetrafluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段 HFC-125 排入空气（`filling_storage_hfc125_air`）

服务于灌装与工厂门口储存的制冷设备释放的 Pentafluoroethane to air 作为一项基本流输出报告。

- 选定流：五氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 灌装与储存阶段 HFC-143a 排入空气（`filling_storage_hfc143a_air`）

服务于灌装与工厂门口储存的制冷设备释放的 1,1,1-Trifluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1-三氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

### 过程：清洗、卫生和废水管理（`sanitation_and_effluent`）

#### 输入

##### 产品流

###### 卫生阶段管网水（`sanitation_mains_water`）

跨越设施边界供应给清洗与卫生的 Potable mains water 与直接环境取水及回收水分别记录。

- 选定流：市政饮用水
- 流属性/单位：Volume / m3
- 数量规则：直接归属给清洗与卫生的管网水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### CIP 用氢氧化钠（`sodium_hydroxide_input`）

用于清洗或卫生的 Sodium hydroxide 按有效物质基础作为一项化学品投入记录。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：用保留的经核实浓度把实测商品领用量换算为有效物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bref-2019`

###### CIP 用硝酸（`nitric_acid_input`）

用于清洗或卫生的 Nitric acid 按有效物质基础作为一项化学品投入记录。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：用保留的经核实浓度把实测商品领用量换算为有效物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bref-2019`

###### 过乙酸消毒剂（`peracetic_acid_input`）

用于清洗或卫生的 Peracetic acid 按有效物质基础作为一项化学品投入记录。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：用保留的经核实浓度把实测商品领用量换算为有效物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bref-2019`

###### 次氯酸钠消毒剂（`sodium_hypochlorite_input`）

用于清洗或卫生的 Sodium hypochlorite 按有效物质基础作为一项化学品投入记录。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：用保留的经核实浓度把实测商品领用量换算为有效物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段电网电力（`sanitation_grid_electricity`）

清洗、卫生和废水管理消耗的 Electricity, medium voltage, grid mix 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：中压电力，电网组合
- 流属性/单位：Energy / kWh
- 数量规则：实测用电量并直接归属给清洗、卫生和废水管理；共享总量仅分配一次并进行核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段外购蒸汽（`sanitation_purchased_steam`）

清洗、卫生和废水管理消耗的 Purchased steam 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量并直接归属给清洗、卫生和废水管理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段外购热水（`sanitation_purchased_hot_water`）

清洗、卫生和废水管理消耗的 Purchased hot water 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量并直接归属给清洗、卫生和废水管理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段天然气（`sanitation_natural_gas`）

清洗、卫生和废水管理消耗的 Natural gas 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量并直接归属给清洗、卫生和废水管理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段柴油（`sanitation_diesel`）

清洗、卫生和废水管理消耗的 Diesel fuel 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量并直接归属给清洗、卫生和废水管理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段液化石油气（`sanitation_lpg`）

清洗、卫生和废水管理消耗的 Liquefied petroleum gas 作为一项载能交换记录，并与所有其他能源投入分开。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量并直接归属给清洗、卫生和废水管理；共享总量仅分配一次并进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`

##### 废物流

##### 基本流

###### 卫生阶段地下水直接取用（`sanitation_groundwater`）

为清洗与卫生从环境直接取用的 Water, ground 作为一项基本流投入记录，不与管网供水重复。

- 选定流：地下水
- 流属性/单位：Volume / m3
- 数量规则：归属给清洗与卫生的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段地表水直接取用（`sanitation_surface_water`）

为清洗与卫生从环境直接取用的 Water, surface 作为一项基本流投入记录，不与管网供水重复。

- 选定流：地表水
- 流属性/单位：Volume / m3
- 数量规则：归属给清洗与卫生的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

#### 输出

##### 产品流

##### 废物流

###### 乳品工艺废水（`dairy_process_wastewater`）

离开卫生或废水管理的 Dairy process wastewater 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Dairy process wastewater
- 流属性/单位：Volume / m3
- 数量规则：仅一次转入已记录厂内或厂外处理交换的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 废氢氧化钠清洗液（`spent_sodium_hydroxide_solution`）

离开卫生或废水管理的 Spent sodium hydroxide cleaning solution 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Spent sodium hydroxide cleaning solution
- 流属性/单位：Mass / kg
- 数量规则：实测单独收集质量；排入废水系统的溶液只计入废水卡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bref-2019`

###### 废硝酸清洗液（`spent_nitric_acid_solution`）

离开卫生或废水管理的 Spent nitric acid cleaning solution 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Spent nitric acid cleaning solution
- 流属性/单位：Mass / kg
- 数量规则：实测单独收集质量；排入废水系统的溶液只计入废水卡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bref-2019`

###### 废过乙酸消毒液（`spent_peracetic_acid_solution`）

离开卫生或废水管理的 Spent peracetic acid sanitizer solution 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Spent peracetic acid sanitizer solution
- 流属性/单位：Mass / kg
- 数量规则：实测单独收集质量；排入废水系统的溶液只计入废水卡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bref-2019`

###### 废次氯酸钠消毒液（`spent_sodium_hypochlorite_solution`）

离开卫生或废水管理的 Spent sodium hypochlorite sanitizer solution 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Spent sodium hypochlorite sanitizer solution
- 流属性/单位：Mass / kg
- 数量规则：实测单独收集质量；排入废水系统的溶液只计入废水卡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bref-2019`

###### 废水处理污泥（`wastewater_treatment_sludge`）

离开卫生或废水管理的 Wastewater-treatment sludge 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，以及用于处理链接或分配时的实测干物质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 筛除乳品固形物（`screened_dairy_solids`）

离开卫生或废水管理的 Screened dairy solids 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Screened dairy solids
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给已记录回收或处理去向的实测收集质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

##### 基本流

###### 卫生阶段化石二氧化碳排入空气（`sanitation_fossil_co2_air`）

服务于清洗、卫生和废水管理的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段甲烷排入空气（`sanitation_methane_air`）

服务于清洗、卫生和废水管理的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段氧化亚氮排入空气（`sanitation_nitrous_oxide_air`）

服务于清洗、卫生和废水管理的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段一氧化氮排入空气（`sanitation_nitrogen_monoxide_air`）

服务于清洗、卫生和废水管理的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：一氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段二氧化氮排入空气（`sanitation_nitrogen_dioxide_air`）

服务于清洗、卫生和废水管理的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：二氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段一氧化碳排入空气（`sanitation_carbon_monoxide_air`）

服务于清洗、卫生和废水管理的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：一氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 卫生阶段二氧化硫排入空气（`sanitation_sulfur_dioxide_air`）

服务于清洗、卫生和废水管理的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：实测烟气质量，或由分别记录的燃料投入和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-fdm-bref-2019`

###### 化学需氧量排入水体（`direct_cod_water`）

仅当前景设施直接排放处理后废水时，才把 Chemical oxygen demand to water 作为一项基本流输出报告。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 生化需氧量排入水体（`direct_bod5_water`）

仅当前景设施直接排放处理后废水时，才把 Biochemical oxygen demand to water 作为一项基本流输出报告。

- 选定流：Biochemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 总氮排入水体（`direct_total_nitrogen_water`）

仅当前景设施直接排放处理后废水时，才把 Total nitrogen to water 作为一项基本流输出报告。

- 选定流：总氮，排入水体
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 总磷排入水体（`direct_total_phosphorus_water`）

仅当前景设施直接排放处理后废水时，才把 Total phosphorus to water 作为一项基本流输出报告。

- 选定流：总磷，排入水体
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 总悬浮固体排入水体（`direct_suspended_solids_water`）

仅当前景设施直接排放处理后废水时，才把 Total suspended solids to water 作为一项基本流输出报告。

- 选定流：总悬浮固体，排入水体
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

###### 氯化物排入水体（`direct_chloride_water`）

仅当前景设施直接排放处理后废水时，才把 Chloride to water 作为一项基本流输出报告。

- 选定流：氯化物，排入水体
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：经直接归属或分配后每 1 kg 净放行产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 所有多输出和共享操作 | 首先通过细分、独立计量、批次记录或扩展过程描述避免分配；将产品特定的配料、包装、能源、损失和处理记录直接归属。 | `eu-pef-2021-2279` |
| `allocation_physical_then_economic` | 不可分割共产品和剩余共享负担 | 细分无法解决共享负担时，采用反映底层过程因果关系且有记录的物理关系。不存在可辩护物理关系时，采用有记录的经济关系并开展敏感性检查。 | `eu-pef-2021-2279` |
| `allocation_foreground_factors` | 每项分配量 | 数量、组成、物理参数、价格和分配因子均取自同一代表性前景期间；本 PCR 不提供类别通用默认因子。 | `eu-pef-2021-2279` |
| `allocation_positive_outputs` | 乳品共产品和回收物料 | 共产品按正输出记录身份、数量、组成、去向和经济状态。除非所声明研究方法另有要求并完整记录，否则不得采用避免产品替代。 | `eu-pef-2021-2279` |
| `allocation_reconciliation` | 分配结果 | 每项共享负担的因子在有记录的舍入容差内合计为 1，分配量须与未分配总量核对一致。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_identity_and_mass` | `receipt_and_preparation` | 乳基料和验收物料 | 接收、供应商、合格证、衡器、储罐和库存记录 | 产品身份；供应商；物种；批次；毛/净质量；组成；温度；拒收；期初/期末库存 | 校准衡器或储罐，并与供应商和验收记录核对 | kg；组成单位 | 每次交付和每批 | 代表性生产期间 | 所有供料点和接收罐 | 验收投入加库存变化后归属至代表批次 | 校准；合格证；验收记录；核对表 |
| `cp_formulation_records` | `receipt_and_preparation` | 甜味剂和配料 | 物料清单、批记录、领料和退料记录 | 配料身份；批次；领料质量；退料；投料量；配方版本；产量 | 仓库领料和批次投料与放行批次核对 | kg | 每批 | 代表性生产期间 | 所有配料线 | 每批净领料质量直接归属 | 批准配方；衡器校准；批次签字 |
| `cp_mass_and_solids_balance` | `receipt_and_preparation`; `qualifying_treatment` | 中间产品、共产品、除水和损失 | 储罐、仪表、实验室、库存、回收和废物记录 | 期初/期末库存；湿质量；组成；转序；回收水；共产品；损失 | 对每个有界过程核对湿质量和实测组成 | kg；kg 固形物；m3 | 每批或每日 | 代表性生产期间 | 所有纳入的容器和管线 | 仅在批次/过程核对后汇总 | 签字平衡表；实验室 QA；异常记录 |
| `cp_utility_records` | 所有过程 | 电力、燃料、热、蒸汽、制冷和压缩空气 | 分表、发票、燃料、运行时间和设备记录 | 载能体；表计起止；数量；单位；设备；运行时间；分配键 | 优先分表；否则由设备记录计算或分配剩余设施总量 | kWh；MJ；载能体单位 | 连续、每批或每月 | 与产品输出相同期间 | 所有纳入操作 | 优先直接归属，仅分配剩余共享总量 | 表计校准；发票核对；计算工作簿 |
| `cp_released_product` | `filling_and_storage` | 处理后投入和放行参考产品 | 灌装、散装发运、衡器、放行、仓库和库存记录 | 实际产品名称；产品流 UUID；gate 结果；净质量；组成；包装；放行状态；温度；库存 | 校准灌装或发运计量并与放行批次核对 | kg | 每批 | 代表性生产期间 | 所有灌装和散装发运线 | 仅汇总验收放行净质量 | 放行合格证；衡器校准；人工流适配复核 |
| `cp_packaging_records` | `filling_and_storage` | 包装和包装废物 | 物料清单、领料、退料、废料和灌装件数记录 | 材料；组件；件均质量；领料数量；退料；废料；灌装件数 | 质量记录或件数乘以实测组件质量 | kg；件数 | 每批或每班 | 代表性生产期间 | 所有包装线 | 按组件计算单位放行质量的净材料 | 供应商规格；件数质量检查；核对表 |
| `cp_cleaning_records` | `sanitation_and_effluent` | 水和清洗剂 | CIP 配方、流量计、投加、采购和周期记录 | 回路；周期；水；化学品身份；浓度；投加量；持续时间；回收体积 | 按回路计量水和化学品投加，并核对采购和库存 | m3；kg | 每周期或每班 | 代表性生产期间 | 所有产品接触回路和清洗区域 | 优先直接归属周期，透明分配共享周期 | 仪表校准；配方控制；领料核对 |
| `cp_water_and_wastewater_records` | `receipt_and_preparation`; `qualifying_treatment`; `sanitation_and_effluent` | 管网水、直接取水、回收水、废水、污泥和水体排放 | 流量计、采样、实验室、污泥和发运记录 | 来源；体积；去向；浓度；采样时间；污泥湿/干质量；处理路线 | 计量流量，并用代表性采样计算负荷 | m3；kg；浓度单位 | 连续计量体积并按计划采样 | 代表性生产期间 | 所有排水口、回收点和处理出口 | 防止场外废物流与直接排放重复计量 | 校准；样品流转；实验室 QA；发运凭证 |
| `cp_direct_emission_records` | `receipt_and_preparation`; `qualifying_treatment`; `filling_and_storage`; `sanitation_and_effluent` | 直接燃烧和制冷剂排放 | 燃料、烟气、制冷剂充注、维修、回收和事件记录 | 物质；区室；燃料；实测排放；充注；补充；回收；因子 | 直接测量或由采集记录透明计算 | kg | 事件、维修或报告期 | 代表性生产期间 | 所有纳入的燃烧和制冷设备 | 按物质汇总并归属至致因操作 | 监测报告；维修记录；因子/版本记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | 所有清单交换 | 归一化量 = 已归属前景量 / 净放行参考产品质量 | 已归属量；净放行质量 | 每 1 kg 净放行产品的量 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 每个有界过程 | 期初库存 + 实测投入 = 实测输出 + 期末库存 + 实测或计算损失；未解决差额单列 | 投入/输出质量；库存；共产品；损失 | 质量平衡结果和未解决差额 | `eu-fdm-bref-2019` |
| `calc_solids_balance` | 浓缩、配料和分配 | 当固形物用于身份、控制或物理分配关系时，对实测总固形物或干物质应用相同平衡结构 | 湿质量；实测固形物分数；配料固形物；损失 | 固形物平衡和未解决差额 | `eu-pef-2021-2279` |
| `calc_allocation` | 剩余共享负担 | 产品 i 归属量 = 共享量 × 产品 i 的有记录因子；因子来自同期间前景物理或经济记录且合计为 1 | 共享总量；输出记录；因子基准 | 按输出归属的量 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 制冷系统 | 制冷剂排放 = 期初充注 + 补充 - 期末充注 - 回收量；负值或无法解释结果须核对 | 充注、补充、期末充注、回收 | 按制冷剂种类的 kg 排放量 | `eu-fdm-bref-2019` |
| `calc_direct_water_load` | 废水直接排放 | 排放物质负荷 = 实测排水体积 × 代表性实测浓度，单位须一致 | 体积；浓度；换算 | kg 排放物质 | `eu-fdm-bref-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_scope_identity` | 产品和参考流 | 保留全部五项范围 gate 决定、实际商品身份、准确产品流 UUID，以及拒绝或替换代表性 Milk 流时的人工复核证据。 | 分类记录；规格；配料表；流元数据；签字复核 |
| `dq_temporal` | 所有前景记录 | 使用一致的代表性期间，并解释季节性、停机、异常批次、库存跨期和替代。 | 带日期表计；生产日历；异常记录 |
| `dq_technological` | 过程路线 | 识别实际代表的浓缩、加甜、热处理、冷却、灌装、储存、清洗、回收和处理技术。 | 流程图；设备清单；批次和运行记录 |
| `dq_geographical` | 投入及关联数据集 | 使乳基料、配料、能源、水、包装、运输和处理数据集与声明地域匹配，或说明每项代理。 | 供应商来源；数据集元数据；代理理由 |
| `dq_completeness` | 质量、固形物、能源、水、废物和排放 | 核对过程和设施记录，披露截断项和未解决差额，并将缺失数据视为缺口而不是零值。 | 签字平衡表；表计/发票核对；排除登记 |
| `dq_measurement` | 采集值和计算值 | 保留仪器、校准、采样、分析方法、适用时的检出限、公式、因子版本和责任记录人。 | 校准；实验室 QA；计算工作簿；审计轨迹 |
| `dq_no_defaults` | 所有非参考数量 | 使用前景记录或由采集记录计算的值。本 PCR 不为 CPC 22229 提供类别通用数值默认值或范围。 | 字段级来源；采集协议链接；数据缺口登记 |
| `dq_allocation` | 共产品和共享操作 | 保留细分证据、共享总量、因子基准、输出数据、计算、需要时的敏感性和核对结果。 | 分配工作簿；产量和价格记录；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_scope_path` | 产品类别 | 除非产品通过 `scope_gate_1_dairy_identity` 至 `scope_gate_5_nec_review` 且所记录 CPC 路径为 `222 > 2222 > 22229`，否则拒绝自动适用。 | `unsd-cpc-22229`; `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `validation_named_exclusions` | 分类决定 | 将淡炼乳、甜炼乳、所有固体乳或稀奶油产品、加工液态乳、新鲜稀奶油、乳清、发酵或酸化产品及非乳品排除在本 PCR 外。 | `unsd-cpc-22229`; `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `validation_reference_flow_fit` | 参考产品身份 | 仅在实际合格产品为牛奶时允许使用 Milk `84a8c346-2832-400b-a2a6-421ef7701958`。对稀奶油或其他语义不匹配产品，必须替换流 UUID 并人工复核，否则身份完整性失败。 | `unsd-cpc-22229`; `codex-cxs-206-1999` |
| `validation_reference_quantity` | 参考流 | 要求恰好 1 kg 净放行产品，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；包装质量另计。 | `eu-pef-2021-2279` |
| `validation_required_qualifiers` | 前景数据包元数据 | 第 3 节任一必需限定信息缺失、含混或与声明产品、范围 gate、路线或实际产品流不一致时，完整性失败。 | `unsd-cpc-22229`; `codex-cxs-206-1999` |
| `validation_process_coverage` | 前景清单 | 要求全部四项过程图记录及所有适用材料、公用工程、包装、清洗、损失、废物、废水、共产品和直接排放记录；零值须有证据，缺失记录仍为缺口。 | `eu-fdm-bref-2019`; `eu-pef-2021-2279` |
| `validation_foreground_only` | 非参考数量 | 非参考量若采用不受支持的默认值、代理值或推理数值估算，而不是前景记录或由采集记录计算的值，则不得视为达到发布级完整性。 | `eu-pef-2021-2279` |
| `validation_balances` | 质量和固形物 | 要求同期间质量平衡；固形物用于身份或分配时还须固形物平衡；报告并解释未解决差额和留存库存。 | `eu-fdm-bref-2019`; `eu-pef-2021-2279` |
| `validation_allocation` | 多输出和共享操作 | 要求优先直接归属；剩余负担采用有记录的物理或经济因子基准；因子在舍入容差内合计为 1；与共享总量核对；采用经济分配时进行敏感性分析。 | `eu-pef-2021-2279` |
| `validation_no_double_count` | 回收、废水、公用工程和共享总量 | 拒绝内部转序与最终输出、回收水与外购水、场外废水处理与直接水排放、或已归属过程数据与剩余设施总量之间的重复计量。 | `eu-pef-2021-2279`; `eu-fdm-bref-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个明确声明的 CPC 22229 乳或稀奶油产品的工厂门口前景数据包和产品数据集 |
| downstream_use | 经复核并连接有代表性的上游乳品、配料、能源、材料、运输和处理数据集后，可作为 `secondary_dataset` 或 `background_dataset` 使用；下游生命周期阶段保持独立 |
| allowed_use | 仅用于通过五项 gate，且与所声明乳/稀奶油身份、浓缩或加甜路线、组成、物理状态、技术、地域、包装、储存条件、期间和分配方法相匹配的归因型工厂门口建模 |
| excluded_use | 作为全部 milk and cream n.e.c. 的通用代表；用 Milk UUID 代表稀奶油；淡炼乳或甜炼乳；固体、普通液态、新鲜稀奶油、乳清、发酵、非乳品或未解决产品；身份、边界、分配和数据质量不等价的比较声明；无明确下游模块的从摇篮到消费者使用 |
| required_metadata | PCR id 及分配后版本；全部五项 gate 结果；实际产品流 UUID；代表流适配和复核人；商品身份；物种和乳基料来源；组成与浓缩/加甜基准；路线和技术；物理状态；包装；储存条件；设施；期间；上游数据集身份；所含过程；分配；数据所有者；复核状态 |
| required_quality_disclosure | 测量和采样覆盖；质量和固形物平衡；前景来源；分配因子和敏感性；时间、地域和技术代表性；数据缺口、代理、排除、不确定性、未解决身份，以及支持每个零值或不适用操作的证据 |
| update_trigger | UNSD CPC 范围或同级结构变化；CXS 乳品术语或粉状产品边界变化；Tiangong 参考身份变化；产品流适配变化；配方、浓缩、加甜、热处理、包装、储存、公用工程、水、回收、处理、分配、设施或期间变化；EU PEF 或 FDM 方法修订；新的经复核产品特定证据 |

## 11. 数据来源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-22229` | dataset | 联合国统计司，CPC 3.0 版结构，代码 22229“Milk and cream, n.e.c.”，位于类 2222“Milk and cream, concentrated or containing added sugar or other sweetening matter, other than in solid forms”之下，2025-06-30 官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-06-23） | 分类身份、父级路径、具名同级排除项和 n.e.c. 人工复核 gate |
| `codex-cxs-206-1999` | standard | Codex Alimentarius，CXS 206-1999，General Standard for the Use of Dairy Terms，官方英文文本，https://www.fao.org/input/download/standards/332/CXS_206e.pdf（检索于 2026-08-11） | 动物乳和乳制品术语、乳品身份及从自动覆盖中排除非乳品 |
| `codex-cxs-207-1999` | standard | Codex Alimentarius，CXS 207-1999，Standard for Milk Powders and Cream Powder，官方英文文本，https://www.fao.org/input/download/standards/333/CXS_207e.pdf（检索于 2026-08-10） | 识别 CPC 22229 排除的乳粉和稀奶油粉固体形态；不用于 CPC 22229 配方或数值默认值 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会，Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，包括附件一 Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-11） | 功能单位和参考流、系统边界披露、数据质量、多功能层级、分配、完整性和核查原则 |
| `eu-fdm-bref-2019` | official_guidance | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，EUR 29978 EN，JRC118627，2019，DOI 10.2760/243911，https://publications.jrc.ec.europa.eu/repository/handle/JRC118627（检索于 2026-08-11） | 乳品制造过程分解，以及材料、能源、水、清洗、回收、废水、废物、监测和直接排放的前景采集范围 |
