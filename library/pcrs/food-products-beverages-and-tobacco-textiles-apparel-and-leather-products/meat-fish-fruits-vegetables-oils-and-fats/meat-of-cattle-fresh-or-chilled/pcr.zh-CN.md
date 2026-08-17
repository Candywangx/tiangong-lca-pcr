---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-cattle-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鲜或冷藏牛肉

## 1. 范围与适用性

本 PCR 适用于生产设施出厂时处于鲜或冷藏状态的牛肉前景数据包。通常边界从屠宰设施门口验收活牛开始，到经过屠宰和胴体整理，并在适用时经过冷却、分割或剔骨、包装及冷藏后，合格牛肉离开生产设施为止。

覆盖牛胴体肉以及已声明鲜或冷藏状态的带骨或去骨合格分割肉。不作为参考产品的范围包括活牛、水牛肉、食用内脏、原皮、炼制产品、冷冻牛肉、调制或保藏牛肉及零售或餐饮产品。养牛和进厂运输属于上游，出厂后的分销属于下游。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-cattle-fresh-or-chilled |
| classification_refs | CPC 3.0：21111，鲜或冷藏牛肉，精确对应 |
| covered_products | 鲜或冷藏牛胴体肉，以及合格的带骨或去骨牛肉分割品 |
| excluded_products | 活牛；水牛肉；作为参考产品的食用内脏；原皮；炼制产品；冷冻、调制或保藏牛肉；出厂后分销 |
| representative_product | 生产设施门口的合格冷藏牛肉分割品 |
| production_route | 验收活牛；屠宰和胴体整理；条件性冷却；条件性分割或剔骨；条件性包装和冷藏 |
| market_state | 鲜或冷藏，并声明产品形态、等级、带骨状态、包装状态和发运温度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产设施门口处于已声明鲜或冷藏状态的合格牛肉 |
| How much | 净产品质量 1 kg，不含包装 |
| How well | 声明产品形态、已知时的牛类别、预期用途等级、带骨状态、包装状态、热状态、发运温度和所含路线 |
| How long or cycle | 一个生产批次或生产周期归一化到 1 kg；覆盖已声明报告期 |
| reference_flow_link | 所选前景路线的最终合格牛肉输出 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Beef `06f53118-716c-472d-b6f2-c5924840395c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 鲜或冷藏状态；产品形态或分割部位；已知时的牛类别；预期用途等级；带骨状态；净质量基准；包装状态；发运温度；设施门口；所含路线；报告期 |

所选天工流仅提供身份。每个前景数据包必须声明上述限定信息，不得继承未声明的数据库路线限定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 扣除包装和不合格材料后计量合格净产品质量，并将所选路线输出归一化为 1 kg。 |
| `market_state_temperature` | 参考产品和中间品 | 温度和时间记录 | °C 和时间单位 | 声明鲜或冷藏状态、发运温度、保持时长和测量位置。 |
| `live_cattle_mass` | 活牛输入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 活重 | 优先使用校准后的活重记录；按头数换算时必须采用批次特定的实测平均活重并保留计算。 |
| `energy_units` | 电力、热量和燃料 | 适用能源属性 | kWh 或 MJ | 保留原始单位和换算因子；电力与热量或燃料分开报告。 |
| `water_units` | 工艺水和清洗水 | 质量或体积 | kg 或 m3 | 保留实测单位并记录任何密度换算。 |
| `packaging_mass` | 包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 各包装材料分别记录，且不计入 1 kg 净产品质量。 |
| `material_balance_units` | 牛、肉、共产品、废物和损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 除非声明并换算其他基准，否则按统一湿基质量核对。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景路线 | 从屠宰设施门口验收活牛开始，到鲜或冷藏合格牛肉离开生产设施为止。下游模型包含养牛和进厂运输时，应链接相应上游数据集。 | `tiangong-beef-slaughter-process` |
| `boundary_required_and_conditional_stages` | 过程纳入 | 必须纳入屠宰和胴体整理；产品出厂前发生冷却、分割或剔骨、包装和冷藏时必须纳入。 | `tiangong-beef-slaughter-process` |
| `boundary_utilities_and_releases` | 已纳入操作 | 纳入可归属的水、电力、热量或燃料、清洗消毒剂、制冷剂补充、包装、废水、处置残余物和直接排放。 |  |
| `boundary_capital_goods` | 基础设施 | 默认排除资本品；如纳入，作为单独的范围扩展报告。 |  |
| `boundary_same_category_input` | 鲜或冷藏牛肉输入 | 同类别中间品仅记录一次，并链接其上游合规过程或数据集；不得递归重建上游清单。 |  |
| `boundary_transport` | 运输 | 排除出厂后分销；纳入并披露已纳入前景设施之间的厂际运输。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 屠宰设施门口验收的活牛，声明活重、已知时的牛类别、供应商或来源、时间和进厂暂养 |
| starting_condition_role | 屠宰和胴体整理前景路线的上游锚点 |
| product_classification_scope | CPC 3.0 代码 21111，仅限鲜或冷藏状态离厂的牛肉 |
| recursive_input_rule | 将进厂鲜或冷藏牛肉记录为链接的同类别产品输入，不在接收过程中递归展开 |
| upstream_dataset_requirement | 将活牛链接到适用的养牛数据集，并披露生产体系、活重基准、地域、时间和进厂运输处理 |
| disclosure | 声明起始门口、产品限定信息、所含阶段、厂际移动以及每项扩展或排除 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `slaughter_dressing` | 牛接收、屠宰和胴体整理 | required | 以活牛为起始条件时始终纳入 | 前景转化和多输出分离 | 每 1 kg 合格牛肉输出 |
| `chilling_cold_holding` | 冷却和冷藏 | conditional | 产品为冷藏状态或发运前发生受控冷却或保持时纳入 | 温度调节 | 每 1 kg 冷藏牛肉输出 |
| `cutting_packaging` | 分割、剔骨、包装和包装后冷藏 | conditional | 发运前发生任一所列操作时纳入 | 产品形态转化和发运准备 | 每 1 kg 净合格输出 |

### 过程：牛接收、屠宰和胴体整理（`slaughter_dressing`）

#### 输入

##### 产品流

###### 验收活牛（`accepted_live_cattle`）

- 选定流：Cow `aba9fdf6-b7e4-45cc-a0dd-034cec2b4fc0`
- 流属性/单位：Mass / kg 活重
- 数量规则：批次验收活重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格牛肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_outputs`
- 来源：
- 数量范围：暂定活重筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kg 活重/kg 肉
  - 基准：每 1 kg 合格牛肉的验收活重
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺和清洗水（`slaughter_water`）

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：扣除有据内部循环后的计量或发票供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格牛肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：
- 数量范围：暂定用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg 水/kg 肉
  - 基准：每 1 kg 合格牛肉的净供水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 屠宰用电（`slaughter_electricity`）

- 选定流：Electricity, medium voltage `460ac059-9bff-49b1-9d19-503be31bd127`
- 流属性/单位：能源 / kWh 或 MJ
- 数量规则：可归属的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格牛肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：
- 数量范围：暂定电力筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 肉
  - 基准：每 1 kg 合格牛肉的用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 屠宰热量或燃料（`slaughter_heat`）

- 选定流：Heat `260672cc-62f0-48c3-b09e-22e71519be74`
- 流属性/单位：能源 / MJ
- 数量规则：计量热量或按净热值计算的燃料能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格牛肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：
- 数量范围：暂定热能筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：MJ/kg 肉
  - 基准：每 1 kg 合格牛肉的热量或燃料能量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格牛肉（`slaughter_meat_output`）

- 选定流：Beef `06f53118-716c-472d-b6f2-c5924840395c`
- 流属性/单位：Mass / kg
- 数量规则：归一化输出 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`mass-balance-identity`
- 数量范围：参考流恒等
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：声明参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 牛原皮（`raw_hides_output`）

- 选定流：Rawhide `440c2098-2f4e-4632-9dcf-32329bcbe4de`
- 流属性/单位：Mass / kg 湿皮
- 数量规则：有有益利用去向证据的实测产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格牛肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_outputs`
- 来源：
- 数量范围：暂定牛原皮筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 湿皮/kg 肉
  - 基准：每 1 kg 合格牛肉的牛原皮
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 牛食用内脏（`edible_offal_output`）

- 选定流：Edible offal of cattle, fresh, chilled or frozen `a6673976-2ef4-4502-b9f5-bbc57099bb40`
- 流属性/单位：Mass / kg
- 数量规则：作为产品转移的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格牛肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_mass_outputs`
- 来源：
- 数量范围：暂定食用内脏筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 内脏/kg 肉
  - 基准：每 1 kg 合格牛肉的食用内脏
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 屠宰废水（`slaughter_wastewater`）

- 选定流：送往处理的屠宰废水
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：扣除循环量后的计量排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格牛肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_wastes`
- 来源：
- 数量范围：暂定废水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg 废水/kg 肉
  - 基准：每 1 kg 合格牛肉的废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 不可食动物材料（`inedible_animal_material`）

- 选定流：送往处理的不可食动物材料
- 流属性/单位：Mass / kg
- 数量规则：按材料和处理路线计量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格牛肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_wastes`
- 来源：
- 数量范围：暂定残余物筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg 废物/kg 肉
  - 基准：每 1 kg 合格牛肉的处置动物材料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 现场燃料使用的直接排放（`slaughter_direct_releases`）

- 选定流：逐项选择适用的空气基本流
- 流属性/单位：Mass / kg 排放物
- 数量规则：采集燃料量乘适用且有据的因子，或直接测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格牛肉输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_direct_releases`
- 来源：
- 数量范围：暂定单物质排放筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 排放物/kg 肉
  - 基准：每 1 kg 合格牛肉的各项直接排放
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：冷却和冷藏（`chilling_cold_holding`）

#### 输入

##### 产品流

###### 冷却牛肉输入（`chilling_meat_input`）

- 选定流：Beef `06f53118-716c-472d-b6f2-c5924840395c`
- 流属性/单位：Mass / kg
- 数量规则：链接上游屠宰输出的实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷藏输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_mass_energy`
- 来源：
- 数量范围：暂定冷却得率筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg 输入/kg 冷藏输出
  - 基准：每 1 kg 冷藏输出的进料质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却用电（`chilling_electricity`）

- 选定流：Electricity, medium voltage `460ac059-9bff-49b1-9d19-503be31bd127`
- 流属性/单位：能源 / kWh 或 MJ
- 数量规则：制冷、风机、泵和冷库的计量用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷藏输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_mass_energy`
- 来源：
- 数量范围：暂定冷却电力筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 冷藏输出
  - 基准：每 1 kg 冷藏输出的用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充（`chilling_refrigerant_makeup`）

- 选定流：Refrigerant, R134a `210b4222-adda-4097-9e79-f2c9a6c172e4`
- 流属性/单位：Mass / kg 制冷剂
- 数量规则：期初加购入减期末、转移和回收
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷藏输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_refrigerant`
- 来源：
- 数量范围：暂定制冷剂筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg 制冷剂/kg 冷藏输出
  - 基准：每 1 kg 冷藏输出的净补充量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏牛肉（`chilled_meat_output`）

- 选定流：Beef `06f53118-716c-472d-b6f2-c5924840395c`
- 流属性/单位：Mass / kg
- 数量规则：归一化冷藏输出 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：冷却过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`mass-balance-identity`
- 数量范围：冷却输出恒等
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：冷却过程输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

##### 基本流

###### 排入空气的制冷剂（`chilling_refrigerant_release`）

- 选定流：选择适用的制冷剂空气基本流
- 流属性/单位：Mass / kg 制冷剂
- 数量规则：未回收的设备特定净损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷藏输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_refrigerant`
- 来源：
- 数量范围：暂定制冷剂排放筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg 制冷剂/kg 冷藏输出
  - 基准：每 1 kg 冷藏输出的排放量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：分割、剔骨、包装和包装后冷藏（`cutting_packaging`）

#### 输入

##### 产品流

###### 分割或包装牛肉输入（`cutting_meat_input`）

- 选定流：Beef `06f53118-716c-472d-b6f2-c5924840395c`
- 流属性/单位：Mass / kg
- 数量规则：链接上游过程的实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging_outputs`
- 来源：
- 数量范围：暂定转化得率筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：3
  - 单位：kg 输入/kg 净输出
  - 基准：每 1 kg 净合格输出的牛肉输入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分割和包装用电（`cutting_packaging_electricity`）

- 选定流：Electricity, medium voltage `460ac059-9bff-49b1-9d19-503be31bd127`
- 流属性/单位：能源 / kWh 或 MJ
- 数量规则：分割、包装、环境调节和包装后冷藏的计量用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging_utilities`
- 来源：
- 数量范围：暂定电力筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：MJ/kg 净输出
  - 基准：每 1 kg 净合格输出的用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分割用水（`cutting_water`）

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：计量净供水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging_utilities`
- 来源：
- 数量范围：暂定分割用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 水/kg 净输出
  - 基准：每 1 kg 净合格输出的供水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 塑料初级包装（`primary_packaging`）

- 选定流：Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：领用量减有据退回未用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging_outputs`
- 来源：
- 数量范围：暂定包装筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 包装/kg 净输出
  - 基准：每 1 kg 净合格输出的初级包装
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 瓦楞纸次级包装（`secondary_packaging`）

- 选定流：Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：领用量减有据退回未用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging_outputs`
- 来源：
- 数量范围：暂定纸板筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg 包装/kg 净输出
  - 基准：每 1 kg 净合格输出的纸板
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格鲜或冷藏牛肉（`final_meat_output`）

- 选定流：Beef `06f53118-716c-472d-b6f2-c5924840395c`
- 流属性/单位：Mass / kg 净产品
- 数量规则：归一化净输出 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`mass-balance-identity`
- 数量范围：参考流恒等
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg 净产品
  - 基准：声明参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 合格修整肉和回收脂肪（`cutting_coproducts`）

- 选定流：Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- 流属性/单位：Mass / kg
- 数量规则：按实际产品身份计量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging_outputs`
- 来源：

##### 废物流

###### 分割和包装残余物（`cutting_packaging_waste`）

- 选定流：送往处理的分割和包装残余物
- 流属性/单位：Mass / kg
- 数量规则：按材料和处理路线计量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging_outputs`
- 来源：
- 数量范围：暂定残余物筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 废物/kg 净输出
  - 基准：每 1 kg 净合格输出的处置残余物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分割废水（`cutting_wastewater`）

- 选定流：送往处理的分割废水
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：扣除循环量后的计量排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packaging_utilities`
- 来源：
- 数量范围：暂定废水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 废水/kg 净输出
  - 基准：每 1 kg 净合格输出的排放
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷藏制冷剂排入空气（`packaged_refrigerant_release`）

- 选定流：选择适用的制冷剂空气基本流
- 流属性/单位：Mass / kg 制冷剂
- 数量规则：未回收的设备特定净损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaged_refrigerant`
- 来源：
- 数量范围：暂定制冷剂排放筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg 制冷剂/kg 净输出
  - 基准：每 1 kg 净合格输出的排放量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_preserve_multi_output` | 屠宰、胴体整理、分割和修整 | 将牛肉、原皮、食用内脏、回收脂肪和其他转移共产品保留为实测输出；不得对核心前景清单预分配。 | `mass-balance-identity` |
| `allocation_subdivide_first` | 可分过程 | 在考虑分配前，优先细分可独立计量的冷却、分割、包装、冷藏和处理操作。 |  |
| `allocation_product_waste_status` | 残余材料 | 仅在报告期记录证明转移用于有益用途时作为产品，否则按实际废物处理路线报告。 |  |
| `allocation_single_output_projection` | 下游研究 | 任何研究特定单输出分配均在未分配核心数据集之外实施，并披露方法、公式、共产品、因子输入、时间地域和敏感性。 |  |
| `allocation_no_avoided_burden_default` | 共产品和废物 | 默认不采用避免产品或避免处理抵扣；仅作为单独声明的后果型扩展。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_slaughter_mass_outputs` | `slaughter_dressing` | 活牛、牛肉、原皮、内脏和共产品 | 称量及生产/发运记录 | batch_id; cattle_class; head_count; live_mass; output_id; output_mass; destination; time | 导出校准批次称量和去向记录 | kg 和 count | 每批或每次发运 | 完整报告期 | 所有接收和输出点 | 按批次和去向求和并对牛肉归一化 | 校准、批次核对、去向证据 |
| `cp_slaughter_utilities` | `slaughter_dressing` | 水、电力、热量或燃料 | 仪表、发票和库存记录 | meter_id; opening; closing; quantity; unit; fuel_ncv; allocation_basis | 专用仪表或有据物理分摊 | kg; m3; kWh; MJ | 仪表周期，按月至少汇总 | 完整报告期 | 屠宰和清洗系统 | 净消耗对输出归一化 | 校准、发票和库存核对 |
| `cp_slaughter_wastes` | `slaughter_dressing` | 废水和动物残余物 | 排水仪表、废物称量和联单 | stream_id; mass_or_volume; recirculation; route; manifest_id | 计量排水并按路线称量固体 | kg 或 m3 | 连续或每次发运 | 完整报告期 | 所有排放和转移点 | 扣除循环并按路线汇总归一化 | 校准、联单、处理凭证 |
| `cp_slaughter_direct_releases` | `slaughter_dressing` | 燃料直接排放 | 燃料、因子或测量记录 | fuel_id; quantity; pollutant_id; factor; factor_unit; factor_source; measured_release | 按采集燃料和因子逐污染物计算或直接测量 | kg 物质 | 每燃料周期或监测事件 | 完整报告期 | 范围内现场燃烧 | 各基本流分别汇总归一化 | 燃料核对、因子引用、监测报告 |
| `cp_chilling_mass_energy` | `chilling_cold_holding` | 肉、温度、时间和电力 | 称量、温度、时间和仪表记录 | batch_id; input_mass; output_mass; entry_temp; exit_temp; entry_time; exit_time; electricity | 将批次链接到校准记录和仪表 | kg; °C; time; kWh | 每批和每仪表周期 | 完整报告期和保持时段 | 所有冷却设备和冷库 | 将质量和能源对冷藏输出归一化 | 校准、批次链接、仪表核对 |
| `cp_chilling_refrigerant` | `chilling_cold_holding` | 制冷剂补充和排放 | 库存和维修记录 | type; opening; purchases; additions; closing; transfers; recovery; equipment_id | 设备特定库存平衡 | kg 制冷剂 | 每次维修和期末 | 完整报告期 | 仅冷却设备 | 每台设备只计算一次未回收损失 | 采购、维修、回收凭证 |
| `cp_cutting_packaging_outputs` | `cutting_packaging` | 肉、包装、共产品和残余物 | 称量、BOM、库存和去向记录 | batch_id; meat_input; product_output; material_id; opening; receipts; issues; returns; closing; scrap; destination | 按批次和材料核对称量及库存 | kg | 每批和库存周期 | 完整报告期 | 分割和包装线 | 按身份和去向汇总并对净输出归一化 | 校准、库存和质量核对 |
| `cp_cutting_packaging_utilities` | `cutting_packaging` | 电力、水和废水 | 仪表和发票记录 | meter_id; opening; closing; unit; allocation_basis; discharge; recirculation | 专用仪表或有据共享负荷分摊 | kg; m3; kWh; MJ | 仪表周期，按月至少汇总 | 完整报告期 | 已纳入操作和清洗 | 净供应/排放对净输出归一化 | 校准、发票核对、分摊表 |
| `cp_packaged_refrigerant` | `cutting_packaging` | 包装后冷藏制冷剂排放 | 库存和维修记录 | type; opening; purchases; additions; closing; transfers; recovery; equipment_id | 仅平衡未分配给冷却过程的设备 | kg 制冷剂 | 每次维修和期末 | 完整报告期 | 包装后冷藏 | 每台设备只计算一次未回收损失 | 维修、回收、范围核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | 每个清单行 | 归一化量 = 报告期流量 / 定量参考输出质量 | flow quantity; output mass | 每 kg 输出的量 | `mass-balance-identity` |
| `calc_live_to_meat_ratio` | 屠宰得率 | 验收活重 / 合格牛肉质量 | live mass; meat mass | kg 活重/kg 肉 | `mass-balance-identity` |
| `calc_mass_balance` | 各转化过程 | 未解释差额 = 质量输入 - 产品输出 - 废物输出 - 实测质量排放；水分或蒸发单列 | mass inputs; products; wastes; releases | 质量平衡说明 | `mass-balance-identity` |
| `calc_energy_conversion` | 能源 | 用有据因子换算，并保留原单位和能源载体 | quantity; unit; factor | 按载体的 kWh 或 MJ |  |
| `calc_refrigerant_loss` | 制冷 | 期初 + 购入 + 补加 - 期末 - 转移 - 回收 | stock and service fields | kg 未回收制冷剂 | `mass-balance-identity` |
| `calc_packaging_consumption` | 包装 | 期初 + 入库 - 期末 - 未用退回；废料和随产品包装单列 | stock and output fields | 消耗、废料和发运包装质量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 对应 CPC 3.0 代码 21111 并声明全部必需限定信息。 | 分类和产品记录 |
| `dq_measurement` | 实测字段 | 标识校准仪器、单位、周期、换算和共享负荷分摊。 | 校准和计算记录 |
| `dq_temporal` | 报告期 | 覆盖完整周期或生产期，包括异常批次和季节性冷藏影响；排除项须说明。 | 生产日历和覆盖检查 |
| `dq_site_scope` | 设施 | 标识所含设施、生产线、冷库、厂际转移和共享公用工程。 | 场址和设备记录 |
| `dq_completeness` | 清单 | 核对输入、产品、共产品、废物、公用工程和排放，并披露遗漏。 | 过程图和核对记录 |
| `dq_disposition` | 产品和废物 | 用报告期去向证据支持产品或废物状态。 | 转移记录或废物联单 |
| `dq_traceability` | 计算值 | 保留原始字段、公式、因子身份、换算、审核人和协议链接。 | 计算审计链 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_identity` | 产品类别 | 参考产品不是已声明鲜或冷藏状态的牛肉，或属于排除产品时判定不合规。 | `unsd-cpc-3-21111` |
| `validation_reference_flow` | 参考流 | 必须采用已声明 Beef、Mass、Units of mass 和 kg 身份的 1 kg 净产品；包装质量单列。 |  |
| `validation_qualifiers` | 元数据 | 必须声明热状态、产品形态、已知时的牛类别、等级、带骨状态、包装、温度、门口、路线和报告期。 |  |
| `validation_boundary` | 系统边界 | 除明确使用已链接同类别输入的下游过程外，必须以屠宰设施门口活牛为起点。 |  |
| `validation_processes` | 过程图 | 必须纳入屠宰和胴体整理，以及条件已经发生的所有条件性过程。 | `tiangong-beef-slaughter-process` |
| `validation_recursive_input` | 同类别输入 | 必须链接一个上游数据集，并禁止递归重复。 |  |
| `validation_mass_balance` | 各过程 | 必须核对实测输入、产品、共产品、废物和排放，并解释每项非零差额。 | `mass-balance-identity` |
| `validation_multi_output` | 分配 | 必须明确报告共产品输出，核心前景量中不得嵌入分配因子。 |  |
| `validation_inventory_coverage` | 已纳入操作 | 要求适用的公用工程、清洗、包装、废水、残余物和直接排放，或有证据的不适用声明。 |  |
| `validation_refrigeration` | 冷却和冷藏 | 必须有温度/时间记录及设备特定制冷剂核算。 |  |
| `validation_protocol_links` | 采集或计算行 | 必须链接包含原始字段和质量证据的采集协议。 |  |
| `validation_evidence` | 范围和因子 | 推理估算范围仅作为候选期 QA 筛查；出版关键因子和范围需要经审查证据。 |  |
| `validation_dataset_profile` | 下游使用 | 保留门口、多输出状态、路线、限定信息、上游链接、质量披露和排除项。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 鲜或冷藏牛肉生产的前景多输出设施门口数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 保留路线、起始门口、限定信息、多输出结构、上游活牛链接和质量披露的门到门及下游模型 |
| excluded_use | 养牛、水牛肉、以内脏为参考产品、冷冻或调制牛肉、出厂后分销或未披露预分配单输出数据 |
| required_metadata | canonical PCR id；CPC 参考；设施和地域；报告期；热状态；发运温度；产品形态；已知时的牛类别；等级；带骨状态；包装；路线；上游养牛数据集；厂际运输；去向 |
| required_quality_disclosure | 校准和覆盖；共享仪表分摊；质量平衡；去向证据；制冷剂平衡；来源适用性；暂定范围状态；排除项和不确定性 |
| update_trigger | 产品状态或形态、等级、起始门口、过程路线、冷却、包装、能源或制冷系统、去向、上游链接、测量或证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21111` | 数据集（`dataset`） | 联合国统计司《产品总分类》3.0 版代码 21111，见仓库 CPC 源和规范化分类工件 | 产品身份和分类范围 |
| `tiangong-beef-slaughter-process` | 数据集（`dataset`） | 天工过程 `9fdaf060-a29c-4f22-9146-86439bc8a256`，Beef slaughtering and carcass dressing | 候选过程分解和流族覆盖，不作为通用数量 |
| `tiangong-beef-slaughter-stage` | 数据集（`dataset`） | 天工过程 `f6465ff5-255b-4143-9364-10ca7828577c`，牛屠宰阶段 | 佐证屠宰阶段和候选电力输入，不作为通用数量 |
| `mass-balance-identity` | 方法因子（`method_factor`） | 对实测前景和库存记录应用质量守恒恒等式 | 参考归一化、得率、质量平衡、制冷剂和包装平衡 |
