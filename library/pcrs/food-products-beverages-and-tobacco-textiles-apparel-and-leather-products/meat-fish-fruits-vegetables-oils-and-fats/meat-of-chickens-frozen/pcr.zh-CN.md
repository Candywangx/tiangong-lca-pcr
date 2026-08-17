---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-chickens-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 冷冻鸡肉

## 1. 范围与适用性

本 PCR 适用于以下前景数据包：家鸡原料经过屠宰、整理、必要时冷却、可选的分割或去骨、冷冻，并在生产工厂内保持冷冻直至发运的生鸡肉。产品以冷冻鸡肉销售时，整胴体与分割肉、带骨或去骨、带皮或去皮均在覆盖范围内。

前景边界始于经屠宰工厂验收的活鸡进入屠宰设施，止于合格冷冻鸡肉离开工厂门口冷库。养殖、饲料生产以及验收前运输以相连接的上游数据集表示。工厂门口之后的配送、零售、烹饪、消费和生命周期末端不在范围内。单独销售的可食用杂碎、机械分离肉、熟制或其他深加工鸡肉产品、鲜或冷藏鸡肉以及非鸡类禽肉不属于本产品类别。

数据生产者应对实际工厂路线建模。若声明的产品和技术需要，则分割或去骨、挂冰衣、初级包装、次级包装和制冷剂使用为条件性纳入。除参考产品流外，所有清单 UUID 在选定精确 Tiangong 身份前均保持 unresolved；本 PCR 的语义候选不构成复用无关 UUID 的依据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-chickens-frozen |
| classification_refs | CPC 3.0: 21141 — Meat of chickens, frozen |
| covered_products | 家鸡的生冷冻肉，包括整胴体和分割肉、带骨或去骨、带皮或去皮，并声明挂冰衣与包装状态 |
| excluded_products | 鲜或冷藏鸡肉；单独销售的鸡可食用杂碎；机械分离肉；熟制、调味、腌制、罐藏或其他深加工鸡肉产品；其他禽类的肉 |
| representative_product | 工厂生产混合的生冷冻鸡肉 |
| production_route | 活禽接收、屠宰和整理、冷却、条件性分割或去骨、冷冻、条件性挂冰衣和包装、冷冻储存以及工厂门口发运 |
| market_state | 生产工厂门口的冷冻成品；除非声明更严格的适用规范，否则保持在 -18 °C 或更低温度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产工厂门口供应的家鸡生冷冻肉 |
| How much | 1 kg 鸡肉净重，不含包装和单独销售的共产品 |
| How well | 声明产品身份、分割形式、带骨状态、带皮状态、挂冰衣比例、是否含包装和冷冻温度条件；产品符合适用的食品安全和商业规格 |
| How long or cycle | 覆盖至工厂发运为止的已声明厂内冷冻储存期；报告储存时长 |
| reference_flow_link | `frozen_chicken_meat_at_plant_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Meat of chickens, frozen `00dbb94a-580a-4aae-979b-a7b1f4278116` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种：家鸡；产品形态和分割形式；带骨状态；带皮状态；鸡肉净重基准；挂冰衣质量分数；是否计入包装；冷冻技术；工厂地理位置；生产期；冷冻储存时长；发运温度；分配方法 |

构建前景数据包时，`必需限定信息` 中每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息会使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以恰好 1 kg 冷冻鸡肉净重作为定量参考。参考质量不含包装和单独销售的共产品。 |
| `glaze_mass_separation` | 挂冰衣产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别测量冷冻毛重与冰衣质量；扣除冰衣水后计算鸡肉净重。声明测量方法和抽样计划。 |
| `input_output_mass_consistency` | 活鸡、肉类中间产品、最终鸡肉、共产品、废物和废水固体 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有质量记录换算为 kg，并保留湿基/干基和测量点。针对已声明的质量平衡边界核对每个生产期。 |
| `frozen_temperature_condition` | 参考产品和冷冻储存 | Temperature | °C | 记录出冻机温度、发运温度以及连续或具代表性的冷库记录。声明的冷冻产品应保持在 -18 °C 或更低温度，仅允许适用文件明确规定的公差。 |
| `storage_duration_basis` | 冷冻储存用电和制冷剂损失 | Time | day | 记录平均停留时间和范围。先将时长相关清单归一化为实际 kg-day 服务量，再按 1 kg 参考产品报告。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽、热和制冷 | Energy or carrier-specific property | kWh, MJ, or carrier mass/volume | 保留实测能源载体单位和换算因子。不得把电力、热能和制冷剂补充量合并为未区分的单一能源总量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | 工厂前景操作 | 纳入设施验收后的活禽接收、屠宰、整理、使用时的胴体清洗、冷却、条件性分割或去骨、冷冻、条件性挂冰衣与包装、冷冻储存、清洁和卫生、分配给这些阶段的现场公用工程，以及跨越前景边界的输出管理。 | codex-cxc-58-2005; codex-cxc-8-1976 |
| `boundary_upstream_live_birds` | 活鸡供应 | 通过可追溯的上游数据集表示养殖、饲料、适用时的孵化场负荷以及屠宰设施验收前运输；不得无说明地把活鸡视为零负荷。 | fao-leap-poultry-2016 |
| `boundary_cold_chain` | 冷冻和工厂冷冻储存 | 纳入直至工厂门口发运的用电、热负荷、制冷剂补充和直接损失、除霜以及与时长相关的冷冻储存。声明冻机技术、制冷剂、储存时长和温度记录。 | codex-cxc-8-1976 |
| `boundary_packaging` | 包装操作 | 若包装发生在已声明工厂门口之前，则纳入包装材料和包装废物。即使包装不计入参考产品质量，只要在边界内仍应作为清单投入。 | codex-cxc-8-1976 |
| `boundary_wastewater_and_byproducts` | 屠宰、分割、清洁和冷冻 | 对跨越前景边界的废水、可食用共产品、动物副产品、不合格物、羽毛、血液、骨、修整料、产品损失和包装废物分别记录；使用适当数据集连接场外处理或回收。 | codex-cxc-58-2005 |
| `boundary_downstream_exclusion` | 下游生命周期阶段 | 排除工厂发运后的配送、零售、烹饪、消费和消费后生命周期末端。研究如扩展范围，应予披露，不得将其表述为符合本 PCR 的工厂门口范围。 | fao-leap-poultry-2016 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰设施接收点验收的家鸡活禽，并记录验收质量、死亡或拒收、供应商、来源和运输交接信息 |
| starting_condition_role | 前景工厂门口投入，以及与上游家禽生产和进厂运输数据集的连接点 |
| product_classification_scope | 与 CPC 3.0 代码 21141 对应的家鸡生冷冻肉；分类只是映射语境，不定义 canonical PCR identity |
| recursive_input_rule | 本产品类别内采购的冷冻鸡肉投入，应作为上游产品投入记录供应商、产品形态、质量和数据集引用；不得在同一前景过程中递归重建其上游生产 |
| upstream_dataset_requirement | 对适用的活鸡生产、饲料和孵化负荷、进厂运输、外购能源和材料、包装以及场外废物或废水处理使用可追溯的上游数据集 |
| disclosure | 声明工厂地理位置、报告期、产品混合、产品形态、分配方法、分割及带骨/带皮状态、挂冰衣比例、包装边界、冻机与制冷剂技术、冷冻储存时长、发运温度、上游数据集选择、排除项和数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `slaughter_dressing_chilling` | 活禽接收、屠宰、整理和初步冷却 | required | 报告工厂从活禽生产鸡肉时始终纳入 | 将验收活鸡转换为冷却整理鸡肉和共产品的前景过程 | kg 冷却整理鸡肉输出 |
| `cutting_deboning` | 分割和去骨 | conditional | 参考产品为分割肉、小份产品或去骨产品，或者冷冻前发生分割损失时纳入 | 前景产品制备 | kg 制备鸡肉输出 |
| `freezing_glazing_packaging` | 冷冻、条件性挂冰衣和包装 | required | 冷冻必须纳入；挂冰衣及各层级包装仅在已声明工厂门口前实际进行时纳入 | 转换为冷冻可售形态的前景过程 | kg 进入冷冻储存前的冷冻鸡肉 |
| `frozen_storage_dispatch` | 冷冻储存和工厂门口发运 | required | 始终纳入出冻机至发运之间的储存；仅在有证据时允许时长为零 | 前景冷库服务和最终参考输出 | kg 已发运参考产品及 kg-day 储存服务 |

### 过程：活禽接收、屠宰、整理和初步冷却（`slaughter_dressing_chilling`）

#### 输入

##### 产品流

###### 验收活鸡（`live_chickens_input`）

记录设施验收后的活鸡，包括接收质量、拒收或到厂死亡质量、供应商、来源及上游数据集连接。

- 选定流：Unresolved — 发布前选择精确 Tiangong 活鸡产品流
- 流属性/单位：Mass / kg
- 数量规则：分配给报告产品组的验收活鸡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_bird_intake`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定活鸡投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.1
  - 上限：4.0
  - 单位：kg/kg reference product
  - 基准：每 1 kg 已发运冷冻鸡肉对应的验收活鸡质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺和卫生用水（`slaughter_water`）

记录烫毛、清洗、掏膛、适用时的冷却、清洁和卫生消毒用计量水量，并扣除单独计量的回用水。

- 选定流：Unresolved — 发布前选择精确 Tiangong 水产品流
- 流属性/单位：Volume or Mass / m3 or kg
- 数量规则：分配给本过程的计量用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却整理鸡肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 数量范围：暂定用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.05
  - 单位：m3/kg process output
  - 基准：每 kg 冷却整理鸡肉的工艺和卫生计量用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购电力（`slaughter_electricity`）

记录接收、屠宰、整理、泵送、通风、冷却、清洁以及所分配共享公用工程的分时计量或与发票核对的电力。

- 选定流：Unresolved — 发布前选择地理位置和电压适用的 Tiangong 电力流
- 流属性/单位：Energy / kWh
- 数量规则：分配给本过程的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却整理鸡肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 数量范围：暂定用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：1.5
  - 单位：kWh/kg process output
  - 基准：每 kg 冷却整理鸡肉用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热能载体（`slaughter_thermal_energy`）

按载体分别记录用于烫毛、热水、卫生消毒和其他热负荷的燃料、蒸汽或外购热。

- 选定流：Unresolved — 发布前选择每一种精确 Tiangong 燃料、蒸汽或热流
- 流属性/单位：Energy or carrier property / MJ or native carrier unit
- 数量规则：使用文件化因子换算实测能源载体用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却整理鸡肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_records`
- 数量范围：暂定热能 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：MJ/kg process output
  - 基准：每 kg 冷却整理鸡肉的供给热能
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 冷却整理鸡肉中间产品（`chilled_chicken_intermediate`）

记录转入分割或冷冻的可售冷却胴体或鸡肉质量，以及温度和带骨/带皮状态。

- 选定流：Unresolved — 仅在存在精确 Tiangong 中间产品流时选择
- 流属性/单位：Mass / kg
- 数量规则：称量离开本过程的冷却整理鸡肉
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个过程批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 数量范围：暂定冷却产品得率 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.25
  - 上限：0.95
  - 单位：kg/kg accepted live chickens
  - 基准：冷却整理鸡肉质量除以验收活鸡质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 可食用共产品（`edible_coproducts`）

按产品类型记录单独销售的可食用共产品及实测质量；不将其计入参考产品质量。

- 选定流：Unresolved — 发布前选择精确 Tiangong 共产品流
- 流属性/单位：Mass / kg
- 数量规则：按类型实测的可食用共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却整理鸡肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 数量范围：暂定可食用共产品 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg process output
  - 基准：每 kg 冷却整理鸡肉的可食用共产品质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 动物副产品和不合格物（`animal_byproducts_waste`）

按去向和监管状态分别记录血液、羽毛、不可食内脏、不合格物、死亡物和其他动物副产品。

- 选定流：Unresolved — 根据实际去向选择精确 Tiangong 废物流或可回收产品流
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却整理鸡肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`codex-cxc-58-2005`
- 数量范围：暂定动物副产品 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：2.5
  - 单位：kg/kg process output
  - 基准：每 kg 冷却整理鸡肉的动物副产品和不合格物质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 屠宰废水（`slaughter_wastewater`）

记录过程边界处的废水体积或质量；可获得时保留固体、有机负荷、营养物、油脂和处理去向的采样数据。

- 选定流：Unresolved — 发布前选择精确 Tiangong 废水流或处理投入
- 流属性/单位：Volume or Mass / m3 or kg
- 数量规则：计量排放量加有文件记录的内部处理转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷却整理鸡肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.0005
  - 上限：0.06
  - 单位：m3/kg process output
  - 基准：每 kg 冷却整理鸡肉离开本过程的废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：分割和去骨（`cutting_deboning`）

#### 输入

##### 产品流

###### 分割用冷却鸡肉（`cutting_chilled_input`）

记录进入分割或去骨的冷却鸡肉质量和已声明产品状态。

- 选定流：Unresolved — 仅在存在精确 Tiangong 中间产品流时选择
- 流属性/单位：Mass / kg
- 数量规则：称量发放至分割的冷却鸡肉
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个分割批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`

###### 分割用电和用水（`cutting_utilities`）

将电力和水作为单独清单流记录；本合并流卡定义共同采集要求，但在具体交换中应分别投影。

- 选定流：Unresolved — 发布前选择精确 Tiangong 电力和水流
- 流属性/单位：Energy and Volume or Mass / kWh and m3 or kg
- 数量规则：分配给分割和卫生清洁的计量公用工程
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备鸡肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 数量范围：暂定组合公用工程 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh-equivalent or m3 reported separately per kg process output
  - 基准：电力与水分别报告，并以此宽泛单流上限筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 制备鸡肉中间产品（`prepared_chicken_intermediate`）

记录转入冷冻的制备鸡肉，以及分割、带骨、带皮和净肉状态。

- 选定流：Unresolved — 仅在存在精确 Tiangong 中间产品流时选择
- 流属性/单位：Mass / kg
- 数量规则：称量转入冷冻的制备鸡肉
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个分割批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 数量范围：暂定分割得率 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.3
  - 上限：1.0
  - 单位：kg/kg chilled chicken input
  - 基准：制备鸡肉质量除以冷却鸡肉投入质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 骨、皮和修整料（`cutting_residues`）

按共产品、可回收材料、动物副产品或废物的实际属性，分别记录骨、皮、脂肪、修整料和不合格肉及其去向。

- 选定流：Unresolved — 根据实际去向选择精确 Tiangong 产品流或废物流
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测的残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 制备鸡肉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 数量范围：暂定分割残余物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg process output
  - 基准：每 kg 制备鸡肉的分割残余物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：冷冻、条件性挂冰衣和包装（`freezing_glazing_packaging`）

#### 输入

##### 产品流

###### 冷冻用制备鸡肉（`freezing_meat_input`）

记录进入冻机的鸡肉净重，不含随后增加的冰衣和包装。

- 选定流：Unresolved — 仅在存在精确 Tiangong 冷却鸡肉中间产品流时选择
- 流属性/单位：Mass / kg
- 数量规则：称量进入冷冻的鸡肉净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个冷冻批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_packaging_records`

###### 冷冻用电（`freezing_electricity`）

记录冻机、输送机、泵、风机、除霜以及分配的制冷辅助设备用电，并与冷库用电分开。

- 选定流：Unresolved — 发布前选择地理位置和电压适用的 Tiangong 电力流
- 流属性/单位：Energy / kWh
- 数量规则：分配给冷冻和包装的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 进入储存前的冷冻鸡肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_packaging_records`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定冷冻用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：3.0
  - 单位：kWh/kg process output
  - 基准：每 kg 进入储存前冷冻鸡肉的冷冻和包装用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 挂冰衣用水（`glazing_water`）

使用冰衣时，将作为冰衣保留的饮用水与工艺用水分别记录。

- 选定流：Unresolved — 发布前选择精确 Tiangong 水产品流
- 流属性/单位：Mass / kg
- 数量规则：冷冻毛重减去实测鸡肉净重，并与施加的冰衣水核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_packaging_records`
- 数量范围：暂定挂冰衣比例 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg net chicken meat
  - 基准：每 kg 净重参考产品的保留冰衣水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

若包装发生在工厂门口前，按材料和质量分别记录初级、次级和三级包装。

- 选定流：Unresolved — 发布前选择精确 Tiangong 包装材料流
- 流属性/单位：Mass / kg
- 数量规则：领用包装减去退回和单独计量的未用包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_packaging_records`
- 数量范围：暂定包装 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg net chicken meat
  - 基准：每 kg 净重参考产品的全部包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻系统制冷剂补充（`freezing_refrigerant_makeup`）

使用有文件记录的场址制冷剂平衡分配，记录冷冻设备制冷剂类型及补充量。

- 选定流：Unresolved — 发布前选择精确 Tiangong 制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂库存核对得到的年度分配补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 进入储存前的冷冻鸡肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 数量范围：暂定制冷剂补充 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg process output
  - 基准：每 kg 进入储存前冷冻鸡肉的分配制冷剂补充量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 工厂储存前冷冻鸡肉（`frozen_chicken_before_storage`）

分别记录离开冷冻过程的鸡肉净重、冰衣和包装质量，并记录出冻机温度。

- 选定流：Unresolved — 内部中间产品；除非该交换是最终工厂门口输出，否则不得复用参考产品 UUID
- 流属性/单位：Mass / kg
- 数量规则：扣除冰衣和包装后的冷冻鸡肉净重
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个冷冻批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_packaging_records`
- 来源：`codex-cxc-8-1976`

##### 废物流

###### 包装和产品损失（`freezing_packaging_waste`）

按材料和去向分别记录破损包装、不合格冷冻产品、流失液、洒落冰衣和其他过程损失。

- 选定流：Unresolved — 发布前选择精确 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：实测损失与库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入储存前的冷冻鸡肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_packaging_records`
- 数量范围：暂定冷冻和包装损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg process output
  - 基准：每 kg 进入储存前冷冻鸡肉的材料损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷冻系统制冷剂直接排放（`freezing_refrigerant_emissions`）

除非泄漏测量提供更好依据，否则根据核对后的补充量平衡按制冷剂种类计算直接排放。

- 选定流：Unresolved — 发布前为每种排放制冷剂选择精确 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：扣除回收和转移量后按种类分配的制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 进入储存前的冷冻鸡肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 数量范围：暂定制冷剂直接排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg process output
  - 基准：每 kg 进入储存前冷冻鸡肉的制冷剂直接排放
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：冷冻储存和工厂门口发运（`frozen_storage_dispatch`）

#### 输入

##### 产品流

###### 进入储存的冷冻鸡肉（`stored_frozen_chicken_input`）

记录鸡肉净重、冰衣、包装、入库温度、储存位置和入库时间。

- 选定流：Unresolved — 内部中间产品；未应用递归投入规则时不得将参考产品 UUID 用作投入
- 流属性/单位：Mass / kg
- 数量规则：称量或库存核对的入库鸡肉净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个储存批次
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_store_records`

###### 冷库用电（`cold_store_electricity`）

记录已声明厂内储存期中制冷、风机、照明、除霜、开门以及所分配辅助设备的用电。

- 选定流：Unresolved — 发布前选择地理位置和电压适用的 Tiangong 电力流
- 流属性/单位：Energy / kWh
- 数量规则：按实测负荷或 kg-day 占用分配的冷库计量用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：先按每 1 kg-day 冷冻鸡肉储存，再用实际停留时间换算至每 1 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_store_records`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定冷库用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.0001
  - 上限：0.2
  - 单位：kWh/kg-day
  - 基准：每 kg-day 占用的冷库用电
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷库制冷剂补充（`cold_store_refrigerant_makeup`）

记录制冷剂类型以及经核对的场址补充量中分配给冷库的份额。

- 选定流：Unresolved — 发布前选择精确 Tiangong 制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：按设备或冷负荷分配的年度制冷剂补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：使用实际停留时间换算至每 1 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 数量范围：暂定冷库制冷剂补充 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg reference product
  - 基准：已声明厂内储存期的分配制冷剂补充量
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 工厂门口冷冻鸡肉（`frozen_chicken_meat_at_plant_gate`）

这是唯一的参考产品输出。报告不含冰衣和包装的鸡肉净重，并提供全部必需限定信息和发运温度。

- 选定流：Meat of chickens, frozen `00dbb94a-580a-4aae-979b-a7b1f4278116`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定定量参考为 1 kg 已发运冷冻鸡肉净重
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`codex-cxc-8-1976`

##### 废物流

###### 冷库产品损失（`cold_store_product_loss`）

按去向分别记录破损、解冻、不合格或盘亏的冷冻产品。

- 选定流：Unresolved — 根据实际去向选择精确 Tiangong 产品流或废物流
- 流属性/单位：Mass / kg
- 数量规则：库存核对和拒收记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_store_records`
- 数量范围：暂定冷库产品损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg reference product
  - 基准：每 kg 已发运产品的冷库产品损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 冷库制冷剂直接排放（`cold_store_refrigerant_emissions`）

除非有直接泄漏测量，否则根据核对后的冷库补充量平衡按制冷剂种类计算直接排放。

- 选定流：Unresolved — 发布前为每种排放制冷剂选择精确 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：扣除回收和转移量后按种类分配的制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：使用实际停留时间换算至每 1 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 数量范围：暂定冷库制冷剂排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg reference product
  - 基准：已声明厂内储存期的制冷剂直接排放
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 单独计量的过程和产品线 | 在技术可行时，通过细分过程并把实测材料、能源、排放和废物直接归属到产品线来避免分配。 | iso-14044-2006 |
| `allocation_co_products` | 可食用共产品、可回收动物副产品和可售分割输出 | 过程细分后，如能证明物理因果关系，剩余共享负荷按该关系分配。若不存在可辩护的因果关系，则基于一致湿重产品输出采用质量分配，并报告经济分配敏感性。 | iso-14044-2006; fao-leap-poultry-2016 |
| `allocation_waste_treatment` | 送往处理的废物和动物副产品 | 未明确声明替代方法及接收系统边界时，不得赋予避免产品信用。纳入处理负荷，并单独披露任何回收信用。 | iso-14044-2006 |
| `allocation_shared_utilities` | 制冷、锅炉、供水、卫生清洁、废水处理和场址服务 | 可获得时使用分表计量分配共享公用工程；否则使用有文件记录的因果驱动量，例如设备负荷、运行小时、用水量、有机负荷、冷库占用 kg-day 或吞吐量。 | iso-14044-2006 |
| `allocation_consistency` | 参考产品及全部共产品 | 在整个报告期一致应用所选分配层级，并披露产品数量、分配因子、因子总和、使用经济敏感性时的价格与参考期，以及任何实质性排除项。 | iso-14044-2006; fao-leap-poultry-2016 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_bird_intake` | `slaughter_dressing_chilling` | 验收活鸡和接收损失 | 地磅、接收、供应商和拒收记录 | 接收毛重；皮重；验收质量；拒收质量；到厂死亡质量；供应商；来源；到达时间；上游数据集引用 | 经校准地磅或已验证秤，并与接收记录核对 | kg | 每次交付 | 完整报告期 | 服务于产品组的全部供应商和接收点 | 按供应商和产品组汇总验收质量；分别保留拒收和到厂死亡质量 | 秤校准；票据 ID；供应商可追溯性；完整性核对 |
| `cp_slaughter_records` | `slaughter_dressing_chilling` | 公用工程、肉类输出、共产品、动物副产品和废水 | 仪表、生产日志、发票、秤、废物联单和实验室记录 | 水；电力；燃料/蒸汽/热；冷却输出质量；共产品质量；废物质量；废水体积；废水水质；运行小时 | 优先直接计量和称重；共享公用工程与发票及库存变化核对 | native unit and kg output | 生产按班次或批次；核对至少每月 | 覆盖季节性的代表性连续期间，通常至少 12 个月 | 所有相关屠宰、整理、冷却、卫生和公用工程区域 | 使用声明的因果驱动量分配共享总量；归一化至 kg 冷却输出 | 仪表校准；发票核对；质量平衡；实验室 QA；处理联单 |
| `cp_cutting_records` | `cutting_deboning` | 冷却投入、制备输出、公用工程和残余物 | 批次单、秤、仪表和废物记录 | 冷却投入质量；制备输出质量；分割形式；带骨和带皮状态；电力；水；骨；皮；修整料；不合格物 | 经校准批次秤以及分表计量，或从场址总量进行有文件记录的分配 | kg, kWh, m3 | 每批或每班 | 报告期内全部分割生产 | 全部纳入的分割和去骨线 | 计算得率，并将公用工程和残余物归一化至 kg 制备输出 | 秤校准；批次核对；产品规格；残余物去向证据 |
| `cp_freezing_packaging_records` | `freezing_glazing_packaging` | 冻机投入/输出、电力、冰衣、包装、损失和温度 | 批次秤、电表、包装领用记录、温度记录仪和不合格记录 | 鸡肉净投入；冷冻净输出；挂冰衣毛重；冰衣质量；按材料的包装；电力；出冻机温度；损失；冻机技术 | 经校准秤、分表计量、材料领用核对和温度记录 | kg, kWh, °C | 每批及连续温度记录 | 报告期内全部冷冻生产 | 服务于参考产品的全部冻机和包装线 | 归一化至 kg 冷冻鸡肉净重；冰衣和包装不计入鸡肉净重 | 秤和仪表校准；包装库存核对；记录仪校准；批次质量平衡 |
| `cp_cold_store_records` | `frozen_storage_dispatch` | 占用、停留时间、电力、温度、发运和损失 | 仓库管理系统、电表、温度记录仪、发运秤和盘点 | 批次质量；进出库时间；位置；电力；温度；除霜事件；发运净重；损失 | 批次跟踪、经校准发运秤、分表计量以及连续或有理由的代表性温度记录 | kg, day, kg-day, kWh, °C | 每批；连续温度；每月能源核对 | 包括季节性环境条件的完整报告期 | 服务于参考产品的全部厂内冷库 | 按实测负荷或 kg-day 分配电力；用实际批次停留时间和发运 kg 归一化 | 仓储可追溯性；仪表和记录仪校准；库存核对；温度偏离记录 |
| `cp_refrigerant_balance` | `freezing_glazing_packaging`; `frozen_storage_dispatch` | 制冷剂补充和直接排放 | 制冷剂采购、充注、回收、维护、转移和设备记录 | 制冷剂种类；期初库存；采购；充注；回收；转移；期末库存；设备身份；冷负荷或运行小时 | 年度质量平衡核对，并辅以泄漏检测和维护记录 | kg refrigerant | 每次维护并进行年度核对 | 完整报告年度 | 服务于纳入过程的全部制冷设备 | 按种类计算损失，并按直接设备记录、冷负荷或运行小时分配 | 采购发票；技术人员记录；钢瓶核对；泄漏测试证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景交换 | 归一化数量 = 分配给产品组的交换数量 / 已发运参考产品净重 | 已分配交换数量；已发运鸡肉净重 | 每 1 kg 参考产品的交换数量 | iso-14044-2006 |
| `calc_net_meat_mass` | 挂冰衣和包装产品 | 鸡肉净重 = 包装产品毛重 - 包装质量 - 保留冰衣质量；使用直接产品规格和抽样验证 | 毛重；包装质量；冰衣质量；抽样结果 | kg 鸡肉净重 | codex-cxc-8-1976 |
| `calc_process_yield` | 屠宰、分割、冷冻和储存 | 得率 = 合格过程输出质量 / 合格过程投入质量；共产品、废物、增水和损失作为单独项保留 | 投入质量；输出质量；共产品质量；废物质量；增水；库存变化 | 无量纲得率和核对后的质量平衡 | codex-cxc-58-2005 |
| `calc_storage_service` | 冷冻储存 | kg-day = 各批次鸡肉净重乘停留时间后求和；分配储存电力 = 冷库电力乘产品组 kg-day / 全部兼容产品 kg-day | 批次质量；进库时间；出库时间；冷库电力；总占用 | kg-day 及每 kg 参考产品的 kWh | codex-cxc-8-1976 |
| `calc_refrigerant_loss` | 冷冻和冷库 | 按种类的制冷剂损失 = 期初库存 + 采购 + 接收转移 - 期末库存 - 回收库存 - 转出；只分配服务于纳入设备的份额 | 制冷剂库存和维护记录；设备分配驱动量 | 每 kg 参考产品的制冷剂直接排放 kg |  |
| `calc_allocation_factors` | 共产品和共享公用工程 | 由声明的因果驱动量计算因子；验证完整因子集在舍入公差内合计为 1，并保留未舍入因子 | 产品数量；因果驱动量；可选市场价值；共享清单 | 有文件记录的分配因子和敏感性结果 | iso-14044-2006; fao-leap-poultry-2016 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和清单流 | 按规定精确核验参考 UUID。发布前对所有其他产品流、废物流、基本流、流属性和单位组身份进行 Tiangong 核验；身份仍 unresolved 时保留语义描述。 | Tiangong 回读；身份评审记录 |
| `dq_temporal` | 全部前景记录 | 使用一个代表正常运行且覆盖相关季节性的连贯报告期；通常以至少 12 个月为目标，较短生产期须说明理由。 | 记录覆盖表；运行日历；例外说明 |
| `dq_geographic_technology` | 设施和上游数据集 | 声明设施地理位置、冻机和制冷技术、制冷剂种类、产品路线以及物料上游数据集的地理和技术。 | 设施元数据；设备台账；数据集元数据 |
| `dq_completeness` | 质量、能源、水、共产品、废物、废水和制冷剂 | 核对生产、公用工程、库存和废物记录。说明缺失仪表、估算份额、排除项及任何 unresolved 质量平衡差异。 | 仪表和发票核对；质量平衡；废物联单；数据缺口日志 |
| `dq_temperature_traceability` | 冷冻和冷库 | 保留经校准的出冻机和发运温度，以及连续或有理由的代表性储存记录，包括偏离和纠正措施。 | 温度日志；校准记录；偏离报告；codex-cxc-8-1976 |
| `dq_hygiene_route` | 屠宰和整理边界 | 确认所纳入操作与实际屠宰、整理、冷却、分割和处理路线一致，并表示不合格物和卫生相关清洁流。 | 过程流程图；生产记录；codex-cxc-58-2005 |
| `dq_provisional_ranges` | 全部 reasoned_estimate 范围 | 宽泛范围只用作 QA 筛选。作为发布关键约束前，以实测或来源支持范围替换，或取得评审者明确接受。 | 范围评审日志；已接受证据引用 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求产品流 UUID `00dbb94a-580a-4aae-979b-a7b1f4278116`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和参考数量 1。 |  |
| `validate_reference_qualifiers` | 参考流元数据 | 任一必需限定信息缺失，或者使用产品毛重、冰衣或包装质量代替鸡肉净重时，完整性校验失败。 | codex-cxc-8-1976 |
| `validate_product_scope` | 产品身份 | 拒绝将鲜或冷藏肉、单独销售的可食用杂碎、机械分离肉、熟制或深加工产品以及非鸡类禽肉纳入本 PCR 范围。 |  |
| `validate_process_coverage` | 过程图和清单 | 要求屠宰/整理/冷却、冷冻/挂冰衣/包装以及冷冻储存/发运的详细清单；已声明产品路线包含分割/去骨时也必须纳入该过程。 | codex-cxc-58-2005; codex-cxc-8-1976 |
| `validate_frozen_condition` | 出冻机、储存和发运 | 要求温度记录证明已声明冷冻状态为 -18 °C 或更低，仅允许有文件记录的适用公差；标记未解释的温度偏离。 | codex-cxc-8-1976 |
| `validate_mass_balance` | 各过程和报告期 | 核验投入质量、鸡肉输出、共产品、废物、增加的冰衣水、可测量时的废水项和库存变化；要求说明实质性不平衡，并防止中间产品重复计数。 | codex-cxc-58-2005 |
| `validate_inventory_identity` | 非参考交换 | 当语义候选未经精确 UUID 核验却被表示为已解析 Tiangong 流时，发布就绪校验失败。只有生命周期状态保持 candidate 时才允许清单 UUID unresolved。 |  |
| `validate_allocation` | 共享负荷和共产品 | 要求声明分配层级、驱动量、完整因子集、未舍入因子、因子总和核验、产品数量；无物理因果关系而采用质量分配时，还应提供经济敏感性。 | iso-14044-2006; fao-leap-poultry-2016 |
| `validate_cold_store_service` | 储存清单 | 要求储存时长和 kg-day 基准；产品组停留时间存在实质差异且未提供替代因果测量时，拒绝与时长无关的分配。 | codex-cxc-8-1976 |
| `validate_refrigerants` | 冷冻和冷库 | 要求制冷剂种类、设备范围、补充/回收平衡、分配方法和相应直接基本流排放，或有证据支持的零损失声明。 |  |
| `validate_packaging_glaze` | 包装或挂冰衣产品 | 要求分别记录鸡肉净重、冰衣和各包装材料质量；确认 1 kg 参考数量只由鸡肉净重构成。 | codex-cxc-8-1976 |
| `validate_provisional_ranges` | reasoned_estimate QA 校验范围 | 实测值超出暂定校验范围时产生评审发现；不得自动替换实测值，也不得把校验范围视作 allowed range。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冷冻鸡肉的前景工厂门口生产数据包；经评审后适合发布为 secondary_dataset 或 background_dataset |
| downstream_use | 在产品形态、地理、技术、分配、挂冰衣、包装、储存和温度条件兼容时，用于构建冷冻鸡肉 process 数据集和 lifecyclemodel 投影 |
| allowed_use | 已声明范围和数据质量内的产品碳足迹或 LCA 建模、供应链清单构建、基准比较和情景分析 |
| excluded_use | 未明确适配时，不得用于鲜/冷藏鸡肉、可食用杂碎、其他禽类、熟制或深加工产品、零售或消费者阶段，以及未被表示的地理和技术 |
| required_metadata | PCR id 和版本状态；CPC 映射语境；设施地理；报告期；生产路线；产品形态；分割形式；带骨和带皮状态；净重方法；挂冰衣比例；包装边界；冻机技术；制冷剂；储存时长；发运温度；分配方法；上游数据集；unresolved 身份；排除项 |
| required_quality_disclosure | 原始数据覆盖；仪表和秤校准；时间和场址覆盖；质量平衡结果；分配因子和敏感性；冷链记录；制冷剂核对；废水和废物覆盖；来源支持与推理估算范围的区分；不确定性和数据缺口 |
| update_trigger | 产品范围、工厂路线、冻机或制冷技术、制冷剂、包装或挂冰衣做法、分配方法、地理、上游活鸡供应、储存时长、适用法规、已核验 Tiangong 身份或替代暂定范围的证据发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxc-58-2005` | official_guidance | FAO/WHO Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005, https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf（检索日期 2026-08-11） | 屠宰、整理、分割、冷却、卫生过程分解、产品与废物处理、温度可追溯性和校验要求 |
| `codex-cxc-8-1976` | official_guidance | FAO/WHO Codex Alimentarius, Code of Practice for the Processing and Handling of Quick Frozen Foods, CXC 8-1976, https://workspace.fao.org/sites/codex/Standards/CXC%208-1976/CXC_008e.pdf（检索日期 2026-08-11） | 速冻与冷链边界、-18 °C 冷冻条件、储存、温度记录、包装/挂冰衣处理和校验 |
| `fao-leap-poultry-2016` | official_guidance | FAO LEAP Partnership, Greenhouse gas emissions and fossil energy use from poultry supply chains: Guidelines for assessment, 2016, https://openknowledge.fao.org/handle/20.500.14283/i6421en（检索日期 2026-08-11） | 家禽供应链边界、上游数据集要求、共产品与共享负荷方法语境及数据质量框架 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html（检索日期 2026-08-11） | LCI 范围、分配层级、一致性、计算、报告和评审规则 |
