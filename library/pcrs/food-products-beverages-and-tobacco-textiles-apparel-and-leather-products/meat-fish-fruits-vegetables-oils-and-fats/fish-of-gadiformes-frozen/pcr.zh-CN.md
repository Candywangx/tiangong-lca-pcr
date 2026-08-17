---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-of-gadiformes-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻鳕形目鱼类

## 1. 范围与适用性

本 PCR 适用于以整条、去内脏、去头或其他已声明的非鱼片形态供应的冷冻鳕形目鱼类的工厂门生产。边界从鱼类进入冷冻或加工设施开始，到合格冷冻产品完成包装或以其他方式准备好从冷库出厂为止。上游捕捞或养殖、卸港以及运至工厂的运输应通过供应商关联数据集表示，不在前景工厂清单中重复构建。

本 PCR 不适用于鲜鱼或冷藏鱼、鱼片、碎鱼肉、由鱼片或碎鱼肉制成的鱼块，以及烟熏、干制、盐渍、盐水浸渍、熟制、罐藏或其他加工产品。不得仅因产品处于冷冻状态而使用本 PCR；物种目别和产品形态均须符合。工厂出货后的配送、零售、消费者储存、烹饪和生命末期不属于默认前景边界。

必需的前景路线包括接收与冷藏暂存、实际发生时的产品形态整理、冷冻与可选冰衣、包装、冷冻储存和工厂出货。食品安全控制、不合格品、废水、制冷剂损失、共产品和残余物在发生时均保持可见。`codex-cxs-190-1995` 仅用于可转用于本类别的速冻、冷链、冰衣、净含量、卫生和质量原则；由于其直接适用范围为鱼片，任何用于整条或整理后鳕形目鱼类的应用均须在数据集中说明理由。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-of-gadiformes-frozen |
| classification_refs | CPC 3.0 `21214` — Fish of Gadiformes, frozen |
| covered_products | 以整条、去内脏、去头或其他已声明的非鱼片/非碎鱼肉形态销售的冷冻鳕形目鱼类 |
| excluded_products | 非鳕形目鱼类；活鱼、鲜鱼或冷藏鱼；鱼片；碎鱼肉；重组鱼块；烟熏、干制、盐渍、盐水浸渍、熟制、罐藏或其他加工鱼产品 |
| representative_product | 具有已声明物种、来源系统、整理状态、冰衣状态和销售配置的冷冻鳕形目鱼类 |
| production_route | 接收与冷藏暂存；可选清洗、分级、去内脏或去头；冷冻；可选冰衣；包装；冷冻储存和工厂出货 |
| market_state | 加工设施门口的冷冻产品；1 kg 鱼净质量不含包装和添加的冰衣水 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以已声明整条或整理后的非鱼片形态供应的冷冻鳕形目鱼类 |
| How much | 1 kg 鱼净质量，不含包装和添加的冰衣 |
| How well | 符合已声明市场规格和食品安全放行要求；声明物种、来源、整理状态、冷冻方法、冰衣状态和储存条件 |
| How long or cycle | 一个生产批次直至工厂出货；声明所代表批次的冷冻储存时长 |
| reference_flow_link | `frozen_gadiformes_reference_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 冷冻鱼净质量 |
| 参考产品流 | Fish of Gadiformes, frozen `d2a5f478-6f93-455d-83df-ddfd9e622c9d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或已声明物种组合；野生捕捞或养殖来源；捕捞/养殖和卸港区域；整条/去内脏/去头或其他非鱼片形态；带/不带皮和头；冷冻技术；冰衣状态和冰衣扣除方法；包装配置；冷冻储存温度和时长；工厂门地理范围和期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考冷冻产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按冷冻后经去冰衣或其他已声明冰衣扣除方法确定的恰好 1 kg 合格鱼净质量归一化；不含包装和添加的冰衣水。 |
| `material_mass_basis` | 原料鱼、整理后鱼、产品、共产品、残余物、不合格品、冰衣和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留报告期总量，并说明每项数量是接收质量、沥干质量、去冰衣质量、冷冻质量、湿质量或干质量；仅依据批次实测证据换算。 |
| `water_measurement` | 工艺水、清洗水和冰衣水 | Mass | kg | 按用途分别计量或计算用水；记录体积转质量换算，且不得将产品保留冰衣并入鱼净质量。 |
| `energy_measurement` | 整理、冷冻、包装和冷冻储存 | Energy | kWh or MJ | 按能源载体和过程记录交付能源；以有记录的系数换算单位，且在保留载体身份前不得合并电力、燃料和外购冷量。 |
| `temperature_time_record` | 产品冷冻和冷冻储存 | Temperature and time | °C and h or day | 保留带时间戳的中心或代表性产品温度和储存记录，足以证明已声明冷冻与冷链条件；若声称满足 CXS 190 基准，应核验热稳定后热中心达到 -18 °C 或更低，并符合已声明储存说明。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 鳕形目鱼类以已声明物种、来源系统、温度、保鲜和整理状态进入加工或冷冻设施 |
| starting_condition_role | 供应商关联产品投入，也是直接控制前景操作的起点 |
| product_classification_scope | 以整条或已声明整理后的非鱼片/非碎鱼肉形态供应的冷冻鳕形目鱼类 |
| recursive_input_rule | 若以前已冷冻的鳕形目鱼类作为投入，则将其保留为关联上游数据集的可见产品投入，不在本前景数据包内递归重建其生产。 |
| upstream_dataset_requirement | 捕捞或养殖、卸港、接收前用冰或冷藏以及入厂运输均需代表性上游数据集，且物种、来源、技术、地理和期间相容。 |
| disclosure | 声明接收鱼形态和温度、来源系统、纳入的整理步骤、冷冻和冰衣方法、包装配置、冷冻储存时长、出货条件、共产品处理、分配基准和所有实质性排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 设施直接控制的操作 | 纳入接收与暂存、所需整理、冷冻、可选冰衣、包装、冷冻储存、可归属于本路线的清洗、质量不合格品、移交前废水处理和制冷剂损失。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `boundary_upstream_links` | 外购鱼、能源、水、冰、包装、清洗材料、制冷剂和运输 | 将每项上游物料投入关联到适当数据集并保留其数量与身份；不得因供应商投入在工厂外生产而视为无负荷。 | `eu-pef-2021-2279` |
| `boundary_cold_chain` | 冷冻以及直至工厂出货的冷冻储存 | 纳入建立并维持已声明冷冻条件直至出货门所需的能源和制冷剂相关交换。 | `codex-cxs-190-1995` |
| `boundary_exclusions` | 下游生命周期阶段 | 默认排除出货后配送、零售、消费者储存与制备以及生命末期；若研究明确扩展边界，应单独报告这些阶段。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_holding` | 接收、检验与冷藏暂存 | required | 所有路线 | 确立合格原料鱼投入并保持批次身份和温度 | kg 合格原料鱼 |
| `fish_preparation` | 清洗、分级与产品形态整理 | conditional | 纳入实际发生的每项整理步骤，包括可选去内脏或去头 | 将接收鱼转为已声明的冷冻前形态并分离残余物 | kg 整理后鱼 |
| `freezing_glazing` | 冷冻与可选冰衣 | required | 仅发生冰衣时适用冰衣投入和产出 | 建立冷冻条件和已声明冰衣状态 | kg 不含添加冰衣的冷冻鱼净质量 |
| `packing_storage` | 包装、冷冻储存与工厂出货 | required | 包装行反映所代表销售配置 | 放行并交付冷冻参考产品 | 1 kg 参考产品净质量 |

### 过程：接收、检验与冷藏暂存（`receipt_holding`）

#### 输入

##### 产品流

###### 接收的鳕形目鱼类（`raw_gadiformes_input`）

按物种或已声明物种组合、野生或养殖来源、产地、供应商批次、保鲜状态、整理状态和实测接收质量记录入厂鱼类。

- 选定流：已声明接收状态的鳕形目鱼类（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：归一化前实测合格与不合格接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`unsd-cpc-3-21214`; `codex-cxc-52-2003`
- 数量范围：暂定原料鱼投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：3
  - 单位：kg
  - 基准：每 1 kg 冷冻参考产品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入整理或冷冻的合格鱼（`accepted_fish_output`）

记录从接收环节转入下一个边界内操作的质量，并保持批次身份。

- 选定流：合格鳕形目鱼类（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：接收质量减去不合格或转流质量，并与转移称重核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 不合格鱼与接收残余物（`receipt_rejects`）

按原因和去向分别记录不合格鱼、受损物料和接收残余物；有益销售的转流应作为产品或共产品，而非废物。

- 选定流：按去向区分的不合格鱼或接收残余物（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：按不合格原因和处理路线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_destination`
- 来源：`codex-cxc-52-2003`

##### 基本流

### 过程：清洗、分级与产品形态整理（`fish_preparation`）

#### 输入

##### 产品流

###### 工艺水与清洗水（`preparation_water`）

记录可归属于本路线的鱼体清洗、设备清洁和卫生处理计量用水，并与冰衣水分开。

- 选定流：Process water（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：计量用量，或依据校准共享仪表进行有记录的批次分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定工艺用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 整理后鱼产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用电（`preparation_electricity`）

当输送、泵送、分级、切割、卫生支持及其他整理设备负荷未单独计量时，记录其用电。

- 选定流：Electricity, supplied（UUID 待精确审核）
- 流属性/单位：Energy / kWh
- 数量规则：分表用电或依据设备负荷和生产工时进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定整理用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh
  - 基准：每 1 kg 整理后鱼产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入冷冻的整理后鱼（`prepared_fish_output`）

记录实际清洗、分级和整理步骤后、冷冻前的鱼质量。

- 选定流：整理后鳕形目鱼类（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，并与原料鱼、保留共产品、残余物和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 整理后鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定整理产率 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.3
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 合格原料鱼对应的整理后鱼 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 可销售鱼类共产品（`fish_coproducts`）

仅当头、内脏、骨架、修切物、鱼籽、鱼肝或其他产出具有有记录的有益去向、交易或内部用途时，才作为共产品记录。

- 选定流：按物料和去向区分的鱼类共产品（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：按共产品类型和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_destination`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 整理残余物（`preparation_residues`）

按物料状态和处理去向记录不可销售有机残余物及不合格鱼。

- 选定流：按去向区分的鱼加工残余物（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：按各处理路线实测或由质量平衡计算的残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_destination`
- 来源：
- 数量范围：暂定残余物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 整理后鱼产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理废水（`preparation_wastewater`）

记录转移至处理的废水，并保留测量值是排放体积、质量还是污染物负荷的信息。

- 选定流：Wastewater to treatment（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：计量排放或有记录的水平衡计算，并声明处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater_balance`
- 来源：
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 整理后鱼产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：冷冻与可选冰衣（`freezing_glazing`）

#### 输入

##### 产品流

###### 冷冻能源（`freezing_energy`）

记录用于冷冻产品的电力、燃料、外购冷量或其他能源，并保持各载体分开。

- 选定流：用于冷冻的能源载体（UUID 待精确审核）
- 流属性/单位：Energy / kWh or MJ
- 数量规则：分表能耗，或依据实测负荷和运行时间进行工程分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻鱼净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxs-190-1995`
- 数量范围：暂定冷冻能源 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：5
  - 单位：kWh
  - 基准：每 1 kg 冷冻鱼净产出；其他载体单独换算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冰衣水（`glaze_water`）

发生冰衣时，记录施加的水或冰衣溶液，并将实测保留冰衣与鱼净质量分开。

- 选定流：用于冰衣的饮用水或清洁海水（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：按批次计量冰衣水和实测保留冰衣
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 不含冰衣的冷冻鱼净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glaze_net_mass`
- 来源：`codex-cxs-190-1995`
- 数量范围：暂定保留冰衣 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 不含冰衣的冷冻鱼净质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充（`refrigerant_makeup`）

记录服务于冷冻和边界内冷冻储存设备的制冷剂添加量，并依据有记录的运行证据分配共享系统。

- 选定流：按化学品身份区分的制冷剂（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：采购与维修记录，经库存变化调整并分配至所代表设备
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻鱼净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前鳕形目鱼类冷冻净产出（`net_frozen_fish_output`）

按已声明去冰衣或其他扣除冰衣后的鱼净质量记录合格冷冻鱼。

- 选定流：Fish of Gadiformes, frozen `d2a5f478-6f93-455d-83df-ddfd9e622c9d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格冷冻鱼质量，不含添加冰衣和包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 冷冻鱼净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glaze_net_mass`
- 来源：`codex-cxs-190-1995`

##### 废物流

##### 基本流

###### 制冷剂逸散排放（`refrigerant_loss_to_air`）

按制冷剂化学品身份记录计算的空气损失；不得使用未明确种类的通用制冷剂排放。

- 选定流：按化学品身份区分的制冷剂空气排放（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：制冷剂补充量加期初库存，减期末库存和有记录的回收或转移量，并分配至边界内设备
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻鱼净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定制冷剂损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 冷冻鱼净产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装、冷冻储存与工厂出货（`packing_storage`）

#### 输入

##### 产品流

###### 包装材料（`packaging_materials`）

按材料和可重复使用状态记录初级、二级和三级包装，且不得将包装并入鱼净质量。

- 选定流：按材料类型区分的包装材料（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：物料清单或领用记录，并与包装单元和包装废料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 参考产品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装与冷冻储存用电（`storage_electricity`）

记录直至工厂出货的包装线与冷冻储存用电；共享冷库按实测电量及相容的占用或产品-时间驱动因素分配。

- 选定流：Electricity, supplied（UUID 待精确审核）
- 流属性/单位：Energy / kWh
- 数量规则：分表用电或依据设施仪表进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量及已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`codex-cxs-190-1995`
- 数量范围：暂定包装与储存用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：所声明工厂储存时长内每 1 kg 参考产品净质量
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷冻鳕形目鱼类参考产出（`frozen_gadiformes_reference_output`）

这是经放行后、下游配送前离开工厂系统的定量参考。

- 选定流：Fish of Gadiformes, frozen `d2a5f478-6f93-455d-83df-ddfd9e622c9d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 合格冷冻鱼净质量，不含包装和添加冰衣
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`unsd-cpc-3-21214`; `codex-cxs-190-1995`

##### 废物流

###### 包装废料与包装后不合格品（`packing_waste`）

按材料、原因和去向分别记录包装废料和包装后不合格品。

- 选定流：按去向区分的包装或产品废物（UUID 待精确审核）
- 流属性/单位：Mass / kg
- 数量规则：实测废物，或领用、装入、退回和库存物料之间的核对差额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_destination`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 物种、产品形态、批次和可分离整理线 | 首先通过单独采集记录或细分操作避免分配；前提是投入和产出可因果归属且不会人为产生无负荷产品。 | `eu-pef-2021-2279` |
| `allocation_reuse_closed_loop` | 返回同一产品路线的内部返工 | 内部返工不建立共产品抵扣；其能源、处理、损失和库存移动保留在前景质量平衡中。 | `eu-pef-2021-2279` |
| `allocation_physical_relation` | 无法细分的鱼产品与共产品联合生产 | 仅当物理关系代表联合产出的因果使用或生成关系时采用有记录的物理分配；不得假定质量分配天然具有因果性。 | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | 缺乏可辩护物理因果关系的可销售共产品 | 若仍需分配，采用同期净经济价值，并声明地理、期间、价格来源、零值或负值处理及敏感性分析。 | `eu-pef-2021-2279` |
| `allocation_waste_destination` | 废物、残余物、废水和不合格品 | 记录处理投入、回收产出、费用或收入以及责任转移点；不得仅因物流离场而将共产品改称废物或省略负荷。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receipt_holding`; `fish_preparation`; `freezing_glazing`; `packing_storage` | 鱼类投入、转移、产品、库存、不合格品和共产品 | 秤、ERP、批次和库存记录 | lot_id; species; source_system; origin; product_form; gross_mass; tare; glaze_basis; accepted_mass; rejected_mass; opening_stock; closing_stock | 与批次和生产记录关联的校准秤 | kg | 每批次及报告期结账 | 至少覆盖所代表生产期间，包括期初和期末库存 | 所有代表设施和生产线 | 汇总相容批次；归一化前核对投入 + 期初库存 = 产出 + 损失 + 期末库存 | 秤校准、签字批次记录、ERP 导出及有记录的核对 |
| `cp_utility_records` | `fish_preparation` | 水和共享整理公用工程 | 仪表和发票记录 | meter_id; opening_reading; closing_reading; calibration; use_area; production_hours; allocation_driver | 优先直接分表，否则依据校准共享仪表有记录地分配 | kg, m3, kWh, or MJ | 可用时每批次，至少每月 | 与生产分母相同期间 | 所有代表整理操作 | 按载体和用途汇总；用有记录系数换算；仅分配剩余共享用量 | 仪表校准、发票、分配工作表和异常日志 |
| `cp_energy_records` | `fish_preparation`; `freezing_glazing`; `packing_storage` | 电力、燃料、外购冷量和储存能源 | 分表、燃料和设备记录 | carrier; meter_id; reading; fuel_mass_or_volume; load; operating_time; cooling_purchase; process; storage_days | 优先直接测量，否则有记录地工程分配 | kWh, MJ, kg, L | 连续或每班，并按月核对 | 与生产期间及所代表储存相同 | 所有相关冷冻、包装和冷库设备 | 按载体和过程分别汇总；共享冷库依据实测能源和相容产品-时间分配 | 仪表校准、发票、负荷测试、运行小时日志和分配工作表 |
| `cp_glaze_net_mass` | `freezing_glazing`; `packing_storage` | 冰衣施加和鱼净质量 | 批次配方、水表、毛重/净重和去冰衣测试 | lot_id; pre_glaze_mass; applied_water; post_glaze_mass; deglazed_mass; test_method; sample_count | 按批次采用有记录的冰衣扣除方法测量 | kg | 每个代表性冰衣生产活动和放行批次 | 与参考产出相同期间 | 所有代表冰衣线和产品形态 | 按批次计算保留冰衣和鱼净质量；仅对相容产品按产量加权汇总 | 秤校准、样品记录、测试方法和放行记录 |
| `cp_residue_destination` | `receipt_holding`; `fish_preparation`; `packing_storage` | 不合格品、共产品、有机残余物和包装废物 | 地磅、容器、销售和废物转移记录 | material; mass; wet_or_dry_basis; destination; sale_or_fee; transporter; treatment | 称量每次发运，或使用有记录容器皮重和数量 | kg and currency where relevant | 每次转移 | 完整代表生产期间 | 所有代表生产线和承包去向 | 按物料和去向分别汇总；将可销售共产品与废物分开 | 票据、发票、联单、去向确认及采用时的含水率记录 |
| `cp_water_wastewater_balance` | `fish_preparation` | 用水投入和废水转移 | 水表、排放表、采样和处理记录 | water_input; product_retention; evaporation; wastewater_mass_or_volume; pollutant_load; destination | 计量与有记录水平衡；按适用许可或工厂计划采样污染物负荷 | kg, m3, and measured load units | 仪表读数至少每月；按要求频率采样 | 与生产相同期间 | 所有代表湿加工区和排放点 | 核对用水与保留、蒸发、回用和排放量，不虚构缺失污染物浓度 | 仪表校准、实验室结果、许可记录和水平衡闭合 |
| `cp_refrigerant_balance` | `freezing_glazing`; `packing_storage` | 制冷剂补充、回收、库存和逸散损失 | 采购、维修、钢瓶和设备记录 | refrigerant_identity; opening_stock; purchases; additions; recovery; transfer; closing_stock; equipment_id; service_date | 技术人员记录及按化学品质量平衡 | kg | 每次维修和年度/报告期结账 | 与生产相同期间，边界库存一致 | 所有边界内冷冻和冷库设备 | 按化学品计算损失；共享设备依据有记录运行或冷负荷证据分配 | 维修证书、采购记录、钢瓶称重、回收记录和签字平衡 |
| `cp_packaging_records` | `packing_storage` | 初级、二级和三级包装 | BOM、领用、退回、废料和包装单元记录 | material; unit_mass; units_issued; units_returned; units_packed; scrap; reusable_cycles | 经核验 BOM 加定期称重和库存核对 | kg | 每种配置和报告期 | 与包装产品相同期间 | 所有代表销售配置 | 按材料汇总；核对领用 = 装入 + 废料 + 退回 + 库存变化 | 供应商规格、复核称重、库存记录和可复用资产日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景交换 | 归一化数量 = 报告期交换量 / 报告期合格冷冻鱼净质量（不含包装和添加冰衣） | 交换总量；合格冷冻鱼净质量 | 每 1 kg 参考产品的交换量 | `codex-cxs-190-1995` |
| `calc_mass_balance` | 每个过程和完整设施路线 | 期初库存 + 实测投入 = 实测产出 + 有记录损失 + 期末库存；调查差异，不强制将未解释差额闭合 | 鱼、水（相关时）、共产品、残余物、不合格品、冰衣、包装和库存 | 已核对平衡与披露的闭合差异 | `codex-cxc-52-2003` |
| `calc_glaze_exclusion` | 带冰衣冷冻产品 | 鱼净质量 = 带冰衣产品毛重 - 采用已声明测试方法测得的保留冰衣质量 | 毛重；去冰衣质量或保留冰衣测量 | 鱼净质量和冰衣质量 | `codex-cxs-190-1995` |
| `calc_refrigerant_loss` | 冷冻与冷库设备 | 损失 = 制冷剂期初库存 + 采购 + 转入 - 期末库存 - 回收制冷剂 - 转出 | 制冷剂库存、采购、维修、回收和转移记录 | 按制冷剂化学品身份区分的空气损失 | `eu-pef-2021-2279` |
| `calc_allocation_factor` | 不可避免的联合生产 | 物理因子 = 产出的所选因果物理量 / 所选因果物理量总和；经济因子 = 产出净价值 / 正净价值总和，并明确处理零值或负值 | 产出数量；因果度量或同期净价值 | 已声明分配因子和敏感性结果 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和原料鱼 | 保留物种或物种组合、野生/养殖来源、产地、产品形态、冰衣状态、批次和供应商关联；未经披露权重不得汇总实质不同产品。 | 产品规格、供应商记录、批次追溯和 `unsd-cpc-3-21214` |
| `dq_temporal_geographic_technology` | 所有投入和产出 | 使用能代表已声明生产期间、设施地理、捕捞/养殖系统、整理路线、冷冻技术和储存时长的前景记录与上游数据集。 | 覆盖矩阵、数据集元数据和差异说明 |
| `dq_completeness` | 过程图 | 证明已评估所有必需和适用条件过程、产品流、废物、基本排放、公用工程、制冷剂和去向；量化任何排除项。 | 完成的清单检查表和质量/能源核对 |
| `dq_food_safety_release` | 合格参考产出 | 将每个代表批次关联到适用卫生、危害控制、温度、感官/物理和放行记录；符合 PCR 不替代法定食品安全合规。 | HACCP 或等效记录、温度日志、检验与放行记录，以及 `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `dq_estimate_replacement` | 暂定 QA 范围 | 将每个 `reasoned_estimate` 范围视为筛查标志而非默认真值；激活前以代表性前景证据或经审核来源证据替换或明确批准。 | 审核决定、前景分布或来源支持的替代值 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 Product flow `d2a5f478-6f93-455d-83df-ddfd9e622c9d`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg，以及恰好 1 kg 不含包装和添加冰衣的合格冷冻鱼净质量。 | `unsd-cpc-3-21214`; `codex-cxs-190-1995` |
| `validate_scope_identity` | 产品类别 | 拒绝不能证明鳕形目身份及冷冻整条或已声明整理后非鱼片/非碎鱼肉形态的记录；排除形态必须使用其他 PCR。 | `unsd-cpc-3-21214` |
| `validate_required_qualifiers` | 数据集元数据 | 要求每项参考流限定信息或明确不适用说明，包括物种、来源系统、产地、形态、冷冻技术、冰衣基准、包装配置、储存条件、地理和期间。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `validate_process_coverage` | 前景清单 | 要求接收、适用整理、冷冻、可选冰衣披露、包装、冷冻储存、出货、清洗分配、不合格品、残余物、废水和制冷剂审核；识别每个跳过的条件过程。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `validate_mass_balance` | 过程和路线质量平衡 | 要求按一致期间和基准实测或计算闭合；报告未解释差异，不得静默归入产品、废物或蒸发。 | `codex-cxc-52-2003` |
| `validate_cold_chain` | 冷冻和冷冻储存 | 要求已声明冷冻与储存条件的时间-温度证据；若声称满足 CXS 190 基准，应核验热稳定后热中心达到 -18 °C 或更低及所述储存说明。 | `codex-cxs-190-1995` |
| `validate_glaze_net_content` | 带冰衣产品 | 要求分别实测冰衣与鱼净质量，并防止添加冰衣水进入 1 kg 参考数量。 | `codex-cxs-190-1995` |
| `validate_allocation` | 多产出操作 | 要求分配层级、所选基准、输入数据、因子、零值/负值处理和敏感性结果；若可销售共产品被省略或无证据按废物处理，则校验失败。 | `eu-pef-2021-2279` |
| `validate_reasoned_estimates` | 所有暂定范围 | 标记超出暂定 QA 范围的每个值以供调查，并在激活前标记每个未替换的 `reasoned_estimate`；落在宽泛范围内并不证明质量。 |  |
| `validate_uuid_completeness` | Tiangong 引用 | 仅接受参考流、Mass 属性和 Units of mass 单位组的精确 UUID；其他语义清单流在 Tiangong 精确审核前保持未解决，并拒绝近似 UUID 替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冷冻鳕形目鱼类加工设施门口前景生产数据集 |
| downstream_use | 经独立审核、校验和发布后，可用于 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 当物种/形态、来源系统、地理、技术、冰衣基准、储存时长、分配和数据质量相容时，用于产品足迹、过程比较、供应链和生命周期建模 |
| excluded_use | 不得无条件替代其他鱼类目别、鱼片或碎鱼肉、鲜/冷藏或其他保存鱼类、单独的渔业或养殖生产、出货后冷链、零售、烹饪、营养或食品安全认证 |
| required_metadata | PCR id 和版本；参考流 UUID；物种/组合；野生/养殖来源；产地；接收与销售形态；冷冻和冰衣方法；净质量方法；包装配置；设施地理；期间；储存温度/时长；过程覆盖；分配方法；上游数据集身份 |
| required_quality_disclosure | 前景与上游覆盖、样本和仪表质量、质量/能源闭合、估算占比、数据缺口、分配敏感性、共产品和废物去向、温度证据、冰衣扣除、制冷剂计算和未解决 UUID |
| update_trigger | 物种组合、来源系统、设施或生产线、整理形态、冷冻技术、冰衣做法、包装、储存时长、共产品市场、分配基准、制冷剂、上游数据集、法规、Codex 指南或经审核范围证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21214` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21214 “Fish of Gadiformes, frozen”, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-08-11) | 分类身份及与其他鱼产品形态的范围区分 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official Codex listing https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (accessed 2026-08-11) | 鱼产品卫生与过程控制框架；不从该来源采用未经核读的数值标准 |
| `codex-cxs-190-1995` | standard | Codex Alimentarius, CXS 190-1995, Standard for Quick-Frozen Fish Fillets, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%252B190-1995%252FCXS_190e.pdf (accessed 2026-08-11) | 可转用的速冻、冷链、冰衣/净含量、卫生、标签和质量控制原则；明确披露其直接范围仅为鱼片 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (accessed 2026-08-11) | 生命周期边界完整性、上游关联、多功能性层级、分配披露、数据质量和制冷剂清单处理 |
