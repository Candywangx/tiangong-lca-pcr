---
pcr_id: pcr.constructions-and-construction-services.construction-services.plastering-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 室内石膏薄层抹灰服务

## 1. 范围与适用性

本方法涵盖已适用并验收的石膏板或底层表面上的室内手工石膏饰面薄抹，包括局部接缝及边缘处理、粉料加水拌和、薄层抹涂、凝结、压光，以及监测干燥至申明的可装饰状态验收关口。排除上游基层施工、板材制造及安装、底层施工、水泥抹面、涂装、拆除和危险清除。本路线属于现场工作批及拌和批次服务，不设通用厚度、配方、覆盖率或干燥时间。

## 2. 产品类别识别

| 字段 (Field) | 内容 (Value) |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.plastering-services |
| classification_refs | CPC 3.0 54720 Plastering services；拟议narrower关系 |
| covered_products | 在适用且已验收既有基层上的室内石膏薄层饰面服务 |
| excluded_products | 基层施工；石膏板安装；水泥抹面；涂装；危险清除；外墙抹灰 |
| representative_product | 在已验收室内石膏板上手工施作石膏饰面薄层 |
| production_route | 局部界面准备；粉料加水拌和；手工抹涂及凝结/压光；干燥与最终验收 |
| market_state | 在申明可装饰干燥关口完成交接的室内表面；基层及随后装饰责任独立 |

## 3. 参考流

| 字段 (Field) | 内容 (Value) |
| --- | --- |
| What | 验收可装饰干燥室内石膏薄层抹灰服务 |
| How much | 1 平方米净验收薄抹面积 |
| How well | 申明基层、饰面系统、实际厚度、表面质量及可装饰状态验收证据 |
| How long or cycle | 一个可识别工作批，从起始表面验收至实际干燥验收；不假定使用寿命等效性 |
| reference_flow_link | `accepted_skim` |

| 字段 (Field) | 内容 (Value) |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 验收可装饰干燥石膏薄层抹灰服务 |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | 场址和期间；验收基层及局部准备；饰面石膏等级；实际厚度及涂层次序；净面积测量及开口；分区/批次关联；质量关口；实际干燥判据及观测；气候/通风/供热；返工及废物去向；上下游边界责任 |

## 4. 计量与单位规则

| rule_id | 适用对象 (Applies to) | 必需属性 (Required property) | 必需单位 (Required unit) | 规则 (Rule) |
| --- | --- | --- | --- | --- |
| net_area | reference product | Area | m2 | 测量净验收表面，扣除开口及未验收分区；报告洞口侧面、折返面的处理，避免同一物理表面重复计数。 |
| wet_dry_water | gypsum_powder; mixed_paste; finish_paste; evaporated_water | Mass | kg | 区分交付干粉、湿浆、水化保留水、残余自由水、收集液及水蒸气；记录库存和转移变化。 |
| retain_energy | prep_electricity; mix_electricity; finish_electricity; dry_electricity; dry_heat | Energy | kWh; MJ | 分开保留计量电量及交付热量；申明换算和设备边界，不将kWh视为燃料质量。 |

## 5. 系统边界

### 边界概化

| 字段 (Field) | 内容 (Value) |
| --- | --- |
| declared_starting_condition | 既有基层已验收适合所选石膏饰面，基层施工完成，并已识别局部接缝及边缘 |
| starting_condition_role | 上游交接前提，随后纳入局部界面准备 |
| product_classification_scope | 抹灰服务中较窄的室内石膏薄层路线 |
| recursive_input_rule | 外购同类服务作为已识别上游活动仅进入一次；移除重叠前景作业，并披露递归截断。 |
| upstream_dataset_requirement | 将粉料、供水、准备材料、能源、设备及运输服务关联至相容上游数据集；基层为责任独立的明确上游前提，不得默认为零。 |
| disclosure | 记录排除的基层生产/修复及下游装饰；施工地点、期间、起始验收、实际系统、公用工程及废物责任；报告缺失的上游覆盖。 |

### 边界规则

| rule_id | 适用对象 (Applies to) | 规则 (Rule) | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本方法涵盖已适用并验收的石膏板或底层表面上的室内手工石膏饰面薄抹，包括局部接缝及边缘处理、粉料加水拌和、薄层抹涂、凝结、压光，以及监测干燥至申明的可装饰状态验收关口。排除上游基层施工、板材制造及安装、底层施工、水泥抹面、涂装、拆除和危险清除。本路线属于现场工作批及拌和批次服务，不设通用厚度、配方、覆盖率或干燥时间。 |  |
| scope_gate | substrate; finish | 核实所选抹灰产品对实际基层的适用性，并纳入局部准备；重大基层修复为上游前提。 | british-gypsum-multifinish-installation |
| reaction_gate | mix; finish; dry_accept | 粉料和水在mix形成浆料；finish内石膏凝结改变保留组成。报告交接处实际产品和水状态、未反应余料及残余物；不得臆造化学计量收率、气体副产物或完全反应。 |  |
| dryness_gate | dry_accept | 压光/凝结不证明可装饰干燥状态。相关实际通风/供热及监测持续至申明判据满足；制造商分阶段抹涂时间仅针对特定产品，不提供通用干燥终点。 | british-gypsum-multifinish-installation |
| utility_owner | prep; mix; finish; dry_accept | 识别共享照明、登高平台及设备、每个使用节点和服务期间；实测服务需求仅归属一次，并披露动员、租赁/资本及上游覆盖。完整工作批持续至实际跨日干燥完成；记录报告截止时未验收表面及含水状态，将其已有负荷结转至同一最终验收工作批，不重置、截断或重复计数。 |  |
| water_destination | mix; finish; dry_accept | 区分拌和/饰面/清洗供水、保留水、收集浆水/凝水及实际蒸气或直接排放；无物质及受纳介质证据时，不得将污水或粉尘类别假定为基本流排放。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 (process_name) | 纳入状态 (inclusion) | 纳入条件 (inclusion_condition) | 角色 (role) | 定量参考 (quantitative_reference) |
| --- | --- | --- | --- | --- | --- |
| prep | 局部基层界面准备 | required | 已验收适用既有基层 | 局部接缝/边缘及准备界面 | 按分区实测准备面积 |
| mix | 饰面石膏粉料加水拌和 | required | 实际所选石膏饰面系统 | 批次配制、粉料/水核对及新拌浆料交接 | 按批次实测新拌浆料质量 |
| finish | 手工抹涂、凝结及压光 | required | 已准备界面和可用新拌浆料 | 表面饰面及石膏凝结责任；整改回路返回本节点 | 按分区实测凝结/压光面积 |
| dry_accept | 干燥、检查及可装饰状态 | required | 凝结/压光面积等待实际最终验收 | 干燥监测、应归属公用工程及最终净验收服务 | 1 平方米accepted_skim |

工作批将分区和拌和批次关联至人工、库存变化、清洗、换批及验收。准备面积、浆料和凝结表面的转移分别实测，不必等于最终参考量。不合格浆料仍由mix负责；拒收表面返回finish，其清除材料由该节点出界。拒收或状态未明分区不得进入验收面积。

### 过程：局部基层界面准备（`prep`）

#### 输入

##### 产品流


###### 准备作业用电（`prep_electricity`）

记录本节点工具直测电量及共享照明分配份额。

- 选定流：准备作业用电
- 流属性/单位：Energy / kWh
- 数量规则：prep_kwh / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep`
- 数量范围：暂定筛选。暂定筛选允许手工作业零动力需求及应归属的照明。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备阶段完整生命周期通达服务 (`prep_access_access`)

准备阶段完整生命周期通达服务是原prep_access范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：纳入可归属局部准备的实际登高及动员服务；下游具体交换保留设备及服务单位。

- 选定流：准备阶段完整生命周期通达服务
- 流属性/单位：Duration / h
- 数量规则：独立采集本子服务实际归属作业小时actual_prep_access_access_quantity，固定Duration/h，以原参考分母accepted_area归一化一次；保留原资产/服务CP的任务、期间及全部消费者。上游每h负担必须覆盖相匹配完整生命周期制造、维护、更换和寿命终结，以相容完整寿命小时驱动量计算，不得把h交换乘资产等价份额再次分摊；自有资产的物理全寿命份额作为非交换核对。实际服务已含燃料、电力、运输或操作员责任按原覆盖矩阵只归一次。accepted_area=0或完整寿命/服务单位/覆盖缺失阻断完成，不以费用、班次或件数替代实际h。原数量约定：prep_service_hours / accepted_area
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。


#### 输出

##### 产品流

###### 已准备合适基层界面（`prepared_area`）

局部准备后的内部面积交接，记录基层验收和分区转移编号；既有基层制造属于上游背景。

- 选定流：已准备合适基层界面
- 流属性/单位：Area / m2
- 数量规则：prepared_area / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep`
- 数量范围：暂定筛选。暂定筛选允许待验收准备面积及返工；不是恒等数量。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流


### 过程：饰面石膏粉料加水拌和（`mix`）

#### 输入

##### 产品流

###### 石膏饰面抹灰粉料（`gypsum_powder`）

记录实际饰面石膏等级及供应商干粉，排除包装和未用库存。

- 选定流：石膏饰面抹灰粉料
- 流属性/单位：Mass / kg
- 数量规则：powder_net_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定宽泛筛选涵盖申明厚度、配方及损失；不存在通用覆盖率。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 石膏拌和供水（`mix_water`）

供水作为技术系统产品跨界，不假定直接取自自然。

- 选定流：石膏拌和供水
- 流属性/单位：Mass / kg
- 数量规则：mix_water_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定宽泛用水筛选；实际选用产品说明控制配比，现场实测投料控制清单。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 拌和用电（`mix_electricity`）

计量搅拌机用电，并仅一次向本用能节点分配共享照明。

- 选定流：拌和用电
- 流属性/单位：Energy / kWh
- 数量规则：mix_kwh / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定筛选包括手工零需求及实际搅拌机负荷。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 拌和设备清洗供水（`mix_clean_water`）

将清洗水与配方水分开，并关联拌和批次。

- 选定流：拌和设备清洗供水
- 流属性/单位：Mass / kg
- 数量规则：mix_clean_water_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定清洗筛选涵盖批次及班末清洗。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 新拌石膏浆料转移（`mixed_paste`）

凭批次编号将实测新拌浆料交给饰面节点；识别组分但不臆造水化收率。

- 选定流：新拌石膏浆料转移
- 流属性/单位：Mass / kg
- 数量规则：paste_transfer_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定浆料筛选须与实测粉料、水核对；内部供料绝不固定为1。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：40
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 失效石膏浆拒收料 (`mix_reject_stale`)

失效石膏浆拒收料是原mix_reject范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：失效或污染浆料不得计入合格生产；仅在供应商允许时记录获准返用。

- 选定流：失效石膏浆拒收料
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_mix_reject_stale_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母accepted_area归一化一次，accepted_area=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。 原数量约定（变量与原CP一致）：mix_reject_mass / accepted_area
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mix`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。

###### 污染石膏浆拒收料 (`mix_reject_contaminated`)

污染石膏浆拒收料是原mix_reject范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：失效或污染浆料不得计入合格生产；仅在供应商允许时记录获准返用。

- 选定流：污染石膏浆拒收料
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_mix_reject_contaminated_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母accepted_area归一化一次，accepted_area=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。 原数量约定（变量与原CP一致）：mix_reject_mass / accepted_area
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mix`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。



###### 拌和清洗浆水交收（`mix_slurry`）

记录收集清洗浆水的固液质量及废物接收方。

- 选定流：拌和清洗浆水交收
- 流属性/单位：Mass / kg
- 数量规则：mix_slurry_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定清洗浆水筛选；包括水和固体，不是直接水体排放。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 拌合阶段排入空气的水蒸气 (`mix_air_water_vapour`)

拌合阶段排入空气的水蒸气是原mix_air范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：仅在实际测得时纳入具名颗粒物、水蒸气或其他物种；有证据的拌和期水蒸气由本节点负责，不归入dry_accept；展开物种及粒径，不假定通用粉尘UUID。

- 选定流：拌合阶段排入空气的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_mix_air_water_vapour_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母accepted_area归一化一次，accepted_area=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。 原数量约定（变量与原CP一致）：mix_emission_mass / accepted_area
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mix`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。


### 过程：手工抹涂、凝结及压光（`finish`）

#### 输入

##### 产品流

###### 已准备合适基层供入（`finish_substrate`）

来自准备节点的内部界面，保持相同转移编号和合格基层状态。

- 选定流：已准备合适基层供入
- 流属性/单位：Area / m2
- 数量规则：finish_substrate_area / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。暂定面积筛选按分区与准备输出核对；本节点不生产基层。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 新拌石膏浆料供入（`finish_paste`）

拌和节点实际交付浆料；保留批次至分区分配和湿质量。

- 选定流：新拌石膏浆料供入
- 流属性/单位：Mass / kg
- 数量规则：finish_paste_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。暂定筛选须与拌和转移及已识别搬运损失匹配，绝非固定参考量。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：40
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饰面及工具清洗供水（`finish_water`）

将压光保留或蒸发用水与收集的工具清洗液分开。

- 选定流：饰面及工具清洗供水
- 流属性/单位：Mass / kg
- 数量规则：finish_water_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。等待分列压光与清洗记录的暂定筛选；不固定饰面用水量。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 抹涂作业用电（`finish_electricity`）

纳入记录的本节点耗能；人工工时为元数据，不据此创设代谢排放。

- 选定流：抹涂作业用电
- 流属性/单位：Energy / kWh
- 数量规则：finish_kwh / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。实际工具及分配照明暂定筛选；手工抹灰工具用电可为零。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饰面阶段完整生命周期通达服务 (`finish_access_access`)

饰面阶段完整生命周期通达服务是原finish_access范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：记录实际登高服务份额、设备身份和交付动员；避免与准备费用重复。

- 选定流：饰面阶段完整生命周期通达服务
- 流属性/单位：Duration / h
- 数量规则：独立采集本子服务实际归属作业小时actual_finish_access_access_quantity，固定Duration/h，以原参考分母accepted_area归一化一次；保留原资产/服务CP的任务、期间及全部消费者。上游每h负担必须覆盖相匹配完整生命周期制造、维护、更换和寿命终结，以相容完整寿命小时驱动量计算，不得把h交换乘资产等价份额再次分摊；自有资产的物理全寿命份额作为非交换核对。实际服务已含燃料、电力、运输或操作员责任按原覆盖矩阵只归一次。accepted_area=0或完整寿命/服务单位/覆盖缺失阻断完成，不以费用、班次或件数替代实际h。原数量约定：finish_service_hours / accepted_area
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。


#### 输出

##### 产品流

###### 已凝结压光薄层表面转移（`trowelled_area`）

本责任内发生抹涂石膏凝结；识别反应保留料、多余浆料和湿残余物，不假定完全反应或气体副产物。

- 选定流：已凝结压光薄层表面转移
- 流属性/单位：Area / m2
- 数量规则：trowelled_area / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。暂定中间面积筛选；凝结并非可装饰干燥证据。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拆除的不合格石膏废物 (`finish_waste_plaster`)

拆除的不合格石膏废物是原finish_waste范围内有原文依据的条件性独立对象，只在实际发生且单独供应、使用或发运时采集。按实际SKU、材质/配方、规格、状态及供应方或接收方分别记录。完整供货产品、配方、组件、服务或实际混合废物载体保持整体，已含组成不重复新增。可用外退必须匹配原投入同一property/unit，未出保管边界的期末库存不是外退；仍可使用且保持原供货状态的物品不得记为废物。真实废物保留产生节点、实际污染/物态、接收和处理边界，不能转为环境排放。相同实体电缆或同一SKU兼有不同用途时，分用途观测不得形成重复交换。未发生必须有证据；不能以此条件卡推定发生、材料比例、部件数量或通用损失。

原角色的特定边界与操作约束，仅对本子对象适用；原集合及筛选文本不构成新增交换或可继承Range：拒收分区返回饰面节点整改并保留重复人工和材料负荷；清除抹灰料按实测废物出界，拒收面积排除于accepted_area。

- 选定流：拆除的不合格石膏废物
- 流属性/单位：Mass / kg
- 数量规则：独立计量actual_finish_waste_plaster_quantity，单位kg；实称净质量，或以真实同SKU/状态单件或线质量证据，将实际件数或长度换算成kg，仅保留一个交换数量。按原CP追踪期初、接收、期末完整未用库存、安装/消耗、可用外退、废物、在制品、真实纠正及期间，保留原毛量/去向约定。以原PCR独立验收参考分母accepted_area归一化一次，accepted_area=0不得形成验收服务。不得复制父集合总量、假定比例或Range；需独立子流测量、转换和不确定性证据。 原数量约定（变量与原CP一致）：finish_waste_mass / accepted_area
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`

范围证据需求：此子流独立实际数量、身份/状态、换算、不确定性及可比较独立样本；不继承集合区间或默认系数。


###### 抹涂清洗浆水交收（`finish_slurry`）

捕集清洗液为废物转移；直接排放须在追加具体交换中逐一识别物质及介质。

- 选定流：抹涂清洗浆水交收
- 流属性/单位：Mass / kg
- 数量规则：finish_slurry_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。暂定浆水筛选须核对水及固体并记录实际接收方。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 抹涂及凝结期间释放水蒸气（`finish_vapour`）

仅在直测或完整finish节点水平衡支持时纳入向未指定大气释放的水蒸气。排除其后干燥阶段水蒸气，不假定其按默认量发生。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：fixed
- 流属性/单位：Mass / kg
- 数量规则：finish_vapour_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定宽泛抹涂期蒸发筛选；实际饰面含水交接决定数量。不是观测事实、允许限值或默认数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：干燥、检查及可装饰状态（`dry_accept`）

#### 输入

##### 产品流

###### 已凝结压光薄层表面供入（`dry_surface`）

接收凝结表面开展监测干燥及检查；实际保留水状态仍须记录不确定性。

- 选定流：已凝结压光薄层表面供入
- 流属性/单位：Area / m2
- 数量规则：dry_surface_area / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：暂定筛选。按分区与饰面输出核对的暂定交接面积筛选。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥及检查用电（`dry_electricity`）

计量或归属直到实际干燥验收的风机、除湿机及检查照明。

- 选定流：干燥及检查用电
- 流属性/单位：Energy / kWh
- 数量规则：dry_kwh / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：暂定筛选。暂定宽泛筛选允许自然干燥或较长监测通风时段；不是默认消耗。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥外购热（`dry_heat`）

仅纳入实际供应外购热；现场燃料加热须替换为具体燃料、燃烧及尾气交换，不同时计入外购热。

- 选定流：干燥外购热
- 流属性/单位：Energy / MJ
- 数量规则：dry_heat_mj / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：暂定筛选。条件性外购热的暂定宽泛筛选；实际系统及持续时间决定数量。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：MJ
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 验收可装饰干燥石膏薄层抹灰服务（`accepted_skim`）

仅满足申明可装饰状态及饰面验收关口的净面积进入分母；该服务不是制造石膏粉。

- 选定流：验收可装饰干燥石膏薄层抹灰服务
- 流属性/单位：Area / m2
- 数量规则：1 m2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：仅精确参考归一化恒等关系；不是经验收率、暂定筛选或规定层厚。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集计算（`calculated_from_collection`）

##### 废物流

###### 收集干燥凝水（`dry_condensate`）

条件性收集凝水交付具名接收方；与水蒸气区分，任何直接排放须实际去向证据。

- 选定流：收集干燥凝水
- 流属性/单位：Mass / kg
- 数量规则：condensate_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：暂定筛选。实际除湿收集的暂定凝水筛选；不得假定排放介质。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥期间向大气释放水蒸气（`evaporated_water`）

采用可辩护水衡算或实测，包含水化结合水、残余含水及收集除湿凝水，并报告不确定性。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：fixed
- 流属性/单位：Mass / kg
- 数量规则：evaporated_water_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：暂定筛选。暂定蒸发筛选取决于供入、保留及收集水；不假定全部加水蒸发。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 (Applies to) | 规则 (Rule) | source_ids |
| --- | --- | --- | --- |
| subdivision | work_lots | 分配前先细分实测分区、批次和公用工程事件；本路线无预期副产品。出现可售回收输出时，须申明实际状态并另行论证负荷决定。 |  |
| batch_owner | mix; finish | 用批次和分区索引所有组分、浆料转移、清洗和换批。无法直接计量时，按记录的批次消耗质量或实测工作时间仅一次归属班末清洗；保留分母及不确定性。 |  |
| shared_owner | prep; mix; finish; dry_accept | 识别每项共享资产、账单/仪表总量及期间；优先直测，否则用实测运行时间/负载或可归属服务小时。含其他工种的全部使用方份额须加总至实测总量，避免租赁/资本、照明及动员重复。 |  |
| reject_owner | mix; finish; dry_accept | 失败批次及返工负荷保留于产出工作批。获准返用料保留转移编号及既有负荷责任；返工属于额外实际活动，不得作为负的避免负荷或验收面积。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 (flow_role) | 记录类型 (record_type) | 原始字段 (raw_fields) | 采集方法 (collection_method) | 单位 (unit) | 频率 (frequency) | 时间覆盖 (temporal_coverage) | 场址范围 (site_scope) | 汇总规则 (aggregation_rule) | 质量证据 (quality_evidence) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep | prep | 准备投入、界面、公用工程及残余物 | 分区记录及仪表/服务日志 | lot_id; zone_id; substrate_acceptance; prep_material_mass; prep_metered_kwh; prep_shared_total_kwh; prep_shared_node_share; prep_direct_service_hours; prep_shared_service_hours; prep_service_share; prepared_area; prep_waste_mass; transfer_id; accepted_area; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | 测量净表面，称量材料/残余物，读取可归属仪表及设备日志；按分区及交收单关联最终面积。 对可归属准备原始量或关联派生量按唯一事件核对后求和，再除以正的同批accepted_area。 保留上述PCR原定库存、事件、分母、归属及闭合方法。按节点、期间和parent_ledger_id保留实际子流名册。每个有数量的交换只表示一个独立实物产品、完整配方/组件、已定义有界服务、实际废物载体或物种/介质，并使用唯一固定property/unit及独立采集的物理分子。保留原全部角色、纠正、库存/在制品和去向记录。原集合量仅为非交换保管或闭合诊断，不得将集合总量或Range复制或按比例分给子流，不得把不同单位加成交换。实际SKU、状态、供应方或接收方构成独立交换时分别记录。完整供货包及其已含组成互斥；同一实体电缆承担多用途时只计一次。实际子流名册、数量、发生/未发生证据、身份/状态/介质、方法或单位支持缺失均阻断前景数据完成，不得记零或默认不适用。现场记录提供操作数，不能另选参考分母、分配、库存或去向约定。 actual_<row_id>_quantity按atomic_flow_row_id引用本记录的独立物理量，严格沿用原CP方法及atomic_child_normalization，不新增父量。 实际子流记录保留legacy_parent_role和own_node_helper_id；child_quantity_operands按原role helper声明的每个操作数独立采集，按quantity_ledger_group_key的物料/来源状态/当前状态/期间/单位分组；真实内部发送与接收用paired_atomic_row_id及actual_transfer_event_id匹配，不从父总量或残差倒算。 内部配对的I=F是同实际物料/SKU、状态、事件、保管边界及gate的对账条件，不是给子流赋值的公式。每子卡保留自己的实际发送量和接收/保管证据；同一有签收的计量凭证可追溯复用，不虚构重新称量。不得复制父集合量给每个子流，不覆盖真实接收记录，不以未知强设相等。差异保留原值及单位、计量不确定性、真实转移损失、状态改变和责任方证据，未查清即阻断完成。全部内部数量为未归一化实物量，仅在各卡最后除原参考分母一次；父role求和仅QA。 | kg; kWh; h; m2 | 每个分区及公用工程/服务事件 | 包括返工、换批的完整工作批 | 具名项目及准备分区 | 每参考流 | 测量/开口表；供应商身份；仪器校准；共享份额核对 |
| cp_mix | mix | 配方组分、浆料、公用工程、拒收物及排放 | 批次称量及交收记录 | lot_id; batch_id; zone_id; opening_powder_mass; received_powder_mass; closing_powder_mass; returned_powder_mass; external_transfer_powder_mass; mix_water_mass; mix_metered_kwh; mix_shared_total_kwh; mix_shared_node_share; mix_clean_water_mass; paste_transfer_mass; mix_reject_mass; mix_packaging_mass; mix_slurry_mass; mix_emission_mass; opening_paste_mass; closing_paste_mass; supplied_process_water; paste_transfer_water; collected_slurry_water; rejected_water_mass; emitted_water_mass; bound_water_change; free_water_change; water_balance_uncertainty; transfer_id; accepted_area; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | 分别称量期初、收货、期末、退回和外部转移粉料；退回与外部转移为互斥出界，均不含期末库存。采用calc_powder_stock得到powder_net_mass。称量交付/退回库存，计量配方/清洗水，称量湿浆及残余物；适用时取得具名物种大气证据；分开捕集粉尘及清洗浆水。 将粉料和工艺水与湿浆、分别记录的废物/排放及库存变化核对；各可归属节点分子除以正的同批accepted_area，已记录废物不重复扣减。 保留上述PCR原定库存、事件、分母、归属及闭合方法。按节点、期间和parent_ledger_id保留实际子流名册。每个有数量的交换只表示一个独立实物产品、完整配方/组件、已定义有界服务、实际废物载体或物种/介质，并使用唯一固定property/unit及独立采集的物理分子。保留原全部角色、纠正、库存/在制品和去向记录。原集合量仅为非交换保管或闭合诊断，不得将集合总量或Range复制或按比例分给子流，不得把不同单位加成交换。实际SKU、状态、供应方或接收方构成独立交换时分别记录。完整供货包及其已含组成互斥；同一实体电缆承担多用途时只计一次。实际子流名册、数量、发生/未发生证据、身份/状态/介质、方法或单位支持缺失均阻断前景数据完成，不得记零或默认不适用。现场记录提供操作数，不能另选参考分母、分配、库存或去向约定。 actual_<row_id>_quantity按atomic_flow_row_id引用本记录的独立物理量，严格沿用原CP方法及atomic_child_normalization，不新增父量。 实际子流记录保留legacy_parent_role和own_node_helper_id；child_quantity_operands按原role helper声明的每个操作数独立采集，按quantity_ledger_group_key的物料/来源状态/当前状态/期间/单位分组；真实内部发送与接收用paired_atomic_row_id及actual_transfer_event_id匹配，不从父总量或残差倒算。 内部配对的I=F是同实际物料/SKU、状态、事件、保管边界及gate的对账条件，不是给子流赋值的公式。每子卡保留自己的实际发送量和接收/保管证据；同一有签收的计量凭证可追溯复用，不虚构重新称量。不得复制父集合量给每个子流，不覆盖真实接收记录，不以未知强设相等。差异保留原值及单位、计量不确定性、真实转移损失、状态改变和责任方证据，未查清即阻断完成。全部内部数量为未归一化实物量，仅在各卡最后除原参考分母一次；父role求和仅QA。 | kg; kWh; m2 | 每次批次、清洗及转移 | 包括不合格批次、最终清洗的整个工作批 | 向具名分区供料的实际拌和站 | 每参考流 | 秤/水表校准；袋装规格；批次/分区关联；废物交收；物种/介质证据 |
| cp_finish | finish | 基层/浆料供入、表面输出、公用工程及拒收物 | 分区抹涂及整改记录 | lot_id; batch_id; zone_id; finish_substrate_area; finish_paste_mass; finish_water_mass; trowel_water_mass; cleanup_water_mass; finish_metered_kwh; finish_shared_total_kwh; finish_shared_node_share; finish_direct_service_hours; finish_shared_service_hours; finish_service_share; trowelled_area; finish_waste_mass; finish_slurry_mass; thickness; transfer_id; reject_route; received_paste_water; received_finish_water; transferred_surface_water; residue_water; slurry_water; finish_evaporation_method; directly_measured_finish_vapour_mass; opening_finish_water_stock; closing_finish_water_stock; bound_water_change; free_water_change; water_balance_uncertainty; accepted_area; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | 测量分区供入/输出；称量收到浆料及收集残余物；分开压光/清洗水；测量接收/交接水状态以及直接水蒸气或完整水平衡证据并报告不确定性；记录凝结观测和缺陷及返回finish链接。 每个唯一物理事件仅累计一次，同时保留各次实际重复整改和返工事件及其负荷；各可归属分子除以正的同批accepted_area。 保留上述PCR原定库存、事件、分母、归属及闭合方法。按节点、期间和parent_ledger_id保留实际子流名册。每个有数量的交换只表示一个独立实物产品、完整配方/组件、已定义有界服务、实际废物载体或物种/介质，并使用唯一固定property/unit及独立采集的物理分子。保留原全部角色、纠正、库存/在制品和去向记录。原集合量仅为非交换保管或闭合诊断，不得将集合总量或Range复制或按比例分给子流，不得把不同单位加成交换。实际SKU、状态、供应方或接收方构成独立交换时分别记录。完整供货包及其已含组成互斥；同一实体电缆承担多用途时只计一次。实际子流名册、数量、发生/未发生证据、身份/状态/介质、方法或单位支持缺失均阻断前景数据完成，不得记零或默认不适用。现场记录提供操作数，不能另选参考分母、分配、库存或去向约定。 actual_<row_id>_quantity按atomic_flow_row_id引用本记录的独立物理量，严格沿用原CP方法及atomic_child_normalization，不新增父量。 实际子流记录保留legacy_parent_role和own_node_helper_id；child_quantity_operands按原role helper声明的每个操作数独立采集，按quantity_ledger_group_key的物料/来源状态/当前状态/期间/单位分组；真实内部发送与接收用paired_atomic_row_id及actual_transfer_event_id匹配，不从父总量或残差倒算。 内部配对的I=F是同实际物料/SKU、状态、事件、保管边界及gate的对账条件，不是给子流赋值的公式。每子卡保留自己的实际发送量和接收/保管证据；同一有签收的计量凭证可追溯复用，不虚构重新称量。不得复制父集合量给每个子流，不覆盖真实接收记录，不以未知强设相等。差异保留原值及单位、计量不确定性、真实转移损失、状态改变和责任方证据，未查清即阻断完成。全部内部数量为未归一化实物量，仅在各卡最后除原参考分母一次；父role求和仅QA。 | kg; kWh; h; m2; mm | 每个分区、浆料批次及整改 | 抹涂至凝结/压光交接，包含整改 | 具名工作分区及抹涂队伍 | 每参考流 | 厚度/饰面检查；转移核对；测量校准；拒收分区登记 |
| cp_dry_accept | dry_accept | 表面供入、干燥公用工程、水蒸气、凝水及最终服务 | 监测及最终验收记录 | lot_id; zone_id; dry_surface_area; dry_metered_kwh; dry_shared_total_kwh; dry_shared_node_share; dry_heat_mj; evaporation_method; directly_measured_vapour_mass; received_surface_water; added_drying_water; opening_water_stock; closing_water_stock; condensate_mass; collected_drying_slurry_water; other_evidenced_water_out; retained_bound_water; residual_free_water; water_balance_uncertainty; dry_start; dry_end; climate; dryness_criterion; dryness_observation; rejected_area; accepted_area | 测量验收净面积；保留实际干燥检查证据；按真实持续时间计量风机/除湿机/供热；按配对水状态交接记录供入表面水、实际保留结合/自由水以及全部收集或其他有证据出口。按calc_evaporation计算水蒸气，或使用校准仪器直接测量可辩护的风量/湿度差并报告不确定性；缺失去向的衡算残差为未量化量，不自动当作水蒸气。 跨实际监测持续期间累计完整工作批可归属干燥节点量，再除以正的同批accepted_area；最终验收服务 = accepted_area / accepted_area = 1 m2。 | m2; kg; kWh; MJ | 每个监测间隔及最终分区验收 | 从实际凝结表面接收到可装饰状态验收，覆盖所需全部天数 | 具名分区及分配的共享供热/通风系统 | 每参考流 | 验收签字及判据；标注日期的观测；气候日志；公用工程归属；水平衡不确定性 |

### 计算规则

| rule_id | 适用对象 (Applies to) | 公式或规则 (Formula or rule) | 输入 (Inputs) | 输出 (Output) | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_prep | atomic_prep_materials; prep_electricity; prep_access_access; atomic_prep_access; prepared_area; atomic_prep_waste | 每张prep卡分子为其申明原始或关联派生cp_prep分子，经唯一事件、库存/份额核对后，除以正的同批accepted_area。 | cp_prep; prep_material_mass; prep_kwh; prep_service_hours; prepared_area; prep_waste_mass; accepted_area | 每参考流prep交换量 |  |
| calc_mix | gypsum_powder; mix_water; mix_electricity; mix_clean_water; mixed_paste; mix_reject_stale; mix_reject_contaminated; atomic_mix_reject; atomic_mix_packaging; mix_slurry; mix_air_water_vapour; atomic_mix_air | 每张mix卡分子为其申明原始或关联派生cp_mix分子，除以正的同批accepted_area；湿浆衡算保留实测损失和库存变化。 | cp_mix; powder_net_mass; mix_water_mass; mix_kwh; mix_clean_water_mass; paste_transfer_mass; mix_reject_mass; mix_packaging_mass; mix_slurry_mass; mix_emission_mass; accepted_area | 每参考流mix交换量 |  |
| calc_finish | finish_vapour; finish_substrate; finish_paste; finish_water; finish_electricity; finish_access_access; atomic_finish_access; trowelled_area; finish_waste_plaster; atomic_finish_waste; finish_slurry | 每张finish卡分子累计其申明原始或关联派生cp_finish分子的唯一物理事件，每个事件计一次，并保留各次实际整改或返工事件及其负荷，再除以正的同批accepted_area；不得将中间浆料或表面供入固定为参考输出。 | cp_finish; finish_substrate_area; finish_paste_mass; finish_water_mass; finish_kwh; finish_service_hours; trowelled_area; finish_waste_mass; finish_slurry_mass; finish_vapour_mass; accepted_area | 每参考流finish交换量 |  |
| calc_dry_accept | dry_surface; dry_electricity; dry_heat; accepted_skim; evaporated_water; dry_condensate | 每张dry_accept卡分子为其申明原始或关联派生cp_dry_accept分子除以正的accepted_area；验收服务 = accepted_area / accepted_area = 1 m2。仅在核对实测收集液、水化结合水、残余含水及其他有证据去向后量化水蒸气。 | cp_dry_accept; dry_surface_area; dry_kwh; dry_heat_mj; evaporated_water_mass; condensate_mass; retained_bound_water; residual_free_water; accepted_area | 每参考流干燥量及归一化验收服务 |  |
| calc_powder_stock | gypsum_powder | powder_net_mass = opening_powder_mass + received_powder_mass - closing_powder_mass - returned_powder_mass - external_transfer_powder_mass。退回与外部转移为实测、互斥出界且均排除期末库存；耗用粉料包括批次损失，损失作为输出记录，不重复扣减。 | cp_mix; opening_powder_mass; received_powder_mass; closing_powder_mass; returned_powder_mass; external_transfer_powder_mass | powder_net_mass |  |
| calc_node_energy | prep_electricity; mix_electricity; finish_electricity; dry_electricity | prep_kwh = prep_metered_kwh + prep_shared_total_kwh * prep_shared_node_share; mix_kwh = mix_metered_kwh + mix_shared_total_kwh * mix_shared_node_share; finish_kwh = finish_metered_kwh + finish_shared_total_kwh * finish_shared_node_share; dry_kwh = dry_metered_kwh + dry_shared_total_kwh * dry_shared_node_share。共享总量排除直测需求；按运行时间/负载记录确定份额，并跨全部使用方核对。各结果采用各节点规则归一化。 | cp_prep; cp_mix; cp_finish; cp_dry_accept; prep_metered_kwh; prep_shared_total_kwh; prep_shared_node_share; mix_metered_kwh; mix_shared_total_kwh; mix_shared_node_share; finish_metered_kwh; finish_shared_total_kwh; finish_shared_node_share; dry_metered_kwh; dry_shared_total_kwh; dry_shared_node_share | 可归属节点用电分子 |  |
| calc_node_service | prep_access_access; atomic_prep_access; finish_access_access; atomic_finish_access | prep_service_hours = prep_direct_service_hours + prep_shared_service_hours * prep_service_share; finish_service_hours = finish_direct_service_hours + finish_shared_service_hours * finish_service_share。共享服务池排除直接服务，并跨全部使用方与账单/日志期间核对；各结果采用各节点规则归一化。 | cp_prep; cp_finish; prep_direct_service_hours; prep_shared_service_hours; prep_service_share; finish_direct_service_hours; finish_shared_service_hours; finish_service_share | 可归属登高/服务分子 |  |
| calc_evaporation | evaporated_water | 申明衡算法时：evaporated_water_mass = received_surface_water + added_drying_water + opening_water_stock - closing_water_stock - retained_bound_water - residual_free_water - condensate_mass - collected_drying_slurry_water - other_evidenced_water_out。各项采用同期间互斥水责任池：closing_water_stock仅包括其他未验收期末水库存，排除验收表面retained_bound_water/residual_free_water；opening_water_stock排除期间入口已计入的received_surface_water。保留表面水不重复计入其他出口。各项采用同一实测工艺水池；一致排除干粉原有结晶水，保留批次/分区配对含水交接，干燥前损失留在产出节点。直接法时：evaporated_water_mass = directly_measured_vapour_mass，并具备校准通风量/湿度证据。申明方法及water_balance_uncertainty；去向缺失或无法解释的负衡算须调查，不截断为零。 | cp_dry_accept; cp_mix; cp_finish; evaporation_method; directly_measured_vapour_mass; received_surface_water; added_drying_water; opening_water_stock; closing_water_stock; retained_bound_water; residual_free_water; condensate_mass; collected_drying_slurry_water; other_evidenced_water_out; water_balance_uncertainty | calc_dry_accept归一化前evaporated_water_mass |  |
| calc_finish_evaporation | finish_vapour | 衡算法：finish_vapour_mass = received_paste_water + received_finish_water + opening_finish_water_stock - transferred_surface_water - residue_water - slurry_water - closing_finish_water_stock。各项为同一工艺水池，排除干粉原有结晶水；表面交接含结合水和自由水，与dry_accept的received_surface_water配对。干燥节点仅接收扣除finish期水蒸气、浆水及残余物之后实际剩余的transferred_surface_water，绝非原始浆料加水投料总量；dry_accept不得重复计入此前损失。期初库存排除收到投入；期末库存排除已转移表面及其他已记录出口。直接法：finish_vapour_mass = directly_measured_finish_vapour_mass，采用校准通风量/湿度观测。记录finish_evaporation_method及water_balance_uncertainty；缺失去向或无法解释负残差仍为数据缺口。 | cp_finish; finish_evaporation_method; directly_measured_finish_vapour_mass; received_paste_water; received_finish_water; opening_finish_water_stock; transferred_surface_water; residue_water; slurry_water; closing_finish_water_stock; water_balance_uncertainty | calc_finish归一化前finish_vapour_mass |  |
| atomic_child_normalization | prep_access_access; mix_reject_stale; mix_reject_contaminated; mix_air_water_vapour; finish_access_access; finish_waste_plaster | 按atomic_flow_row_id分别记录independent_physical_quantity；actual_<row_id>_quantity仅为其具名别名，不是父集合复制量。材料沿用原CP逐身份状态的库存毛量/净量及外退约定；内转使用实际配对交接量；可用外退和废物用实际独立去向量。Number of items自有资产等价值使用本PCR原job_driver/full_life_driver完整生命周期份额，包含制造、维护、更换及寿命终结，全部消费者及正分母须完整；Duration/h服务子流则使用实际归属作业小时及匹配完整生命周期每小时负担，不得将h再次乘资产份额。外购服务仅用实际合同定义为Item(s)的完整物理任务数，按原实际归属计算，不能把小时、天数、价格变成次数。atomic_child_intensity = independent_physical_quantity / accepted_area，accepted_area为按net_area确定的最终唯一验收净批灰表面积，单位m2，遵守本PCR原验收规则，accepted_area=0阻断归一化。非交换父role台账和原CP字段仍用于库存、转移、闭合及归属，不添加第二交换或改变方法。 | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; accepted_area; cp_prep; cp_mix; cp_finish | atomic_child_intensity |  |

### 数据质量要求

| requirement_id | 适用对象 (Applies to) | 要求 (Requirement) | 证据 (Evidence) |
| --- | --- | --- | --- |
| dq_gate | accepted_skim | 必须记录实际系统、厚度、基层及饰面质量观测和申明干燥判据；固定制造商时间不能证明干燥。 | 供应商系统说明；分区验收签字及含水/目视判据 |
| dq_balance | all nodes | 核对批次、转移、库存及水去向并报告测量不确定性；不得仅为闭合衡算而反算未测内部数量。 | 节点记录、配对转移编号及残差说明 |
| dq_identity | all cards | 下游具体交换须核实产品/物质、属性/单位及去向身份；按实际前景记录展开条件性类别卡。 | 供应商/废物/排放记录及身份核实 |
| dq_period | all nodes | 代表实际场址工作批、天气及持续时间；记录缺失读数、估算和时间/地理覆盖。 | 全期间事件日志及覆盖声明 |
| dq_ranges | all cards | 暂定范围仅为调查筛选；调查超出范围的数值，并在更强复用前以独立复核可比证据替代。 | 原始数据、明确不确定性及独立对照集 |
| atomic_prep_materials | prep; cp_prep | 原prep_materials是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：按实际需要局部处理已验收基层的接缝和边缘；将此类别展开为实际识别的产品。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_prep; actual_child_register; parent_ledger_id |
| atomic_prep_access | prep; cp_prep | 原prep_access是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：纳入可归属局部准备的实际登高及动员服务；下游具体交换保留设备及服务单位。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_prep; actual_child_register; parent_ledger_id |
| atomic_prep_waste | prep; cp_prep | 原prep_waste是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：按组成和接收方记录收集边角料；收集残余物不得当作大气排放。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_prep; actual_child_register; parent_ledger_id |
| atomic_mix_reject | mix; cp_mix | 原mix_reject是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：失效或污染浆料不得计入合格生产；仅在供应商允许时记录获准返用。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_mix; actual_child_register; parent_ledger_id |
| atomic_mix_packaging | mix; cp_mix | 原mix_packaging是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：按材料和回收或处置接收方拆分包装。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_mix; actual_child_register; parent_ledger_id |
| atomic_mix_air | mix; cp_mix | 原mix_air是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：仅在实际测得时纳入具名颗粒物、水蒸气或其他物种；有证据的拌和期水蒸气由本节点负责，不归入dry_accept；展开物种及粒径，不假定通用粉尘UUID。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_mix; actual_child_register; parent_ledger_id |
| atomic_finish_access | finish; cp_finish | 原finish_access是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：记录实际登高服务份额、设备身份和交付动员；避免与准备费用重复。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_finish; actual_child_register; parent_ledger_id |
| atomic_finish_waste | finish; cp_finish | 原finish_waste是非交换细化范围和保管/闭合台账键，不再是混合数量流卡。保留原范围：拒收分区返回饰面节点整改并保留重复人工和材料负荷；清除抹灰料按实测废物出界，拒收面积排除于accepted_area。 明确子流仅覆盖已列条件对象，其余真实独立对象必须保留在实际名册中；在本节点按原CP逐对象独立采集身份/状态/介质或接收方、唯一固定property/unit、数量/换算、发生或未发生、源台账事件、归属和上游覆盖。原PCR分母、库存/去向、分配和闭合方法不变，现场不能另选方法。父量仅为非交换诊断，不复制给子流，不把不同单位求和成交换，不拆完整配方/组件/真实混合废物造成双计。实际名册、数量、身份、支持、方法或覆盖未齐时必须阻断前景数据完成，不得记零、默认不适用或只在manifest声明。 | cp_finish; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | prep; mix; finish; dry_accept | 旧role仅是原CP的非交换库存、活动、去向或闭合台账键；有数量的交换由独立子流表示，atomic_要求是余项强制细化与完成阻断。原raw字段、helper及原生单位操作数保留其原责任，按子流身份和单位分组核对，不得把父量或不同单位相加。当前源表适用对象迁移如下：prep_materials => atomic_prep_materials; prep_access => prep_access_access, atomic_prep_access; prep_waste => atomic_prep_waste; mix_reject => mix_reject_stale, mix_reject_contaminated, atomic_mix_reject; mix_packaging => atomic_mix_packaging; mix_air => mix_air_water_vapour, atomic_mix_air; finish_access => finish_access_access, atomic_finish_access; finish_waste => finish_waste_plaster, atomic_finish_waste | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | prep; mix; finish; dry_accept | 以下为每个子流的原role、节点、唯一单位及方法CP路由。对每个实际身份/状态子流独立执行其原role的计量、库存、来源/去向、返工、份额、单位转换与归一化方法：原helper/selector的role参数保留为legacy_parent_role，数量操作数改由该子流的独立记录提供；ROW_UNIT(child_row_id)为下列明确unit。只有同身份状态及相容原生单位可做库存或转移闭合；不同材料、介质、状态或单位分组核对。父总量只是非交换诊断，不能作为每个子流的输入或把不同单位相加。原helper方法不适用或所需实际转换、分母、证据缺失即阻断完成，不可由现场自选新方法。原量公式中的role命名变量仅保留为台账名，不能成为重复交换；如原role跨单位，按本映射和实际子流单位分别执行，不能沿用错误固定单位。路由：prep_access_access => role=prep_access, node=prep, property=Duration, unit=h, CP=cp_prep; mix_reject_stale => role=mix_reject, node=mix, property=Mass, unit=kg, CP=cp_mix; mix_reject_contaminated => role=mix_reject, node=mix, property=Mass, unit=kg, CP=cp_mix; mix_air_water_vapour => role=mix_air, node=mix, property=Mass, unit=kg, CP=cp_mix; finish_access_access => role=finish_access, node=finish, property=Duration, unit=h, CP=cp_finish; finish_waste_plaster => role=finish_waste, node=finish, property=Mass, unit=kg, CP=cp_finish | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| atomic_range_noninheritance | prep_access_access; mix_reject_stale; mix_reject_contaminated; mix_air_water_vapour; finish_access_access; finish_waste_plaster | 本轮退休父卡的原数值范围、逐交换筛选指令及理由只在实施审计中保存，不适用于任何新子卡或父集合合计，也不按比例分配。每个新子流只保留独立数量、身份状态、计量换算、不确定性及可比独立观测的证据需求；只有审查确认其确实适用于该独立对象时，才能新增自己的范围。不得用本批最大值自证本批。未变且语义兼容单一对象的原范围保持其原性质。 | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | 内部配对的I=F是同实际物料/SKU、状态、事件、保管边界及gate的对账条件，不是给子流赋值的公式。每子卡保留自己的实际发送量和接收/保管证据；同一有签收的计量凭证可追溯复用，不虚构重新称量。不得复制父集合量给每个子流，不覆盖真实接收记录，不以未知强设相等。差异保留原值及单位、计量不确定性、真实转移损失、状态改变和责任方证据，未查清即阻断完成。全部内部数量为未归一化实物量，仅在各卡最后除原参考分母一次；父role求和仅QA。 | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |

## 9. 校验规则

| rule_id | 适用对象 (Applies to) | 规则 (Rule) | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_skim | 要求正的净验收面积、开口/洞口侧面政策、申明实际系统/厚度及最终干燥证据；排除状态未明拒收物。 |  |
| validate_transfers | prep; mix; finish; dry_accept | 匹配界面、浆料、凝结表面的配对转移编号及实测数量；说明搬运损失和状态变化，不强制其等于最终验收面积。 |  |
| validate_batch | mix; finish | 要求批次/分区关联、不合格去向、清洗/换批责任及完整归属；批次清洗或失败材料不得消失。 |  |
| validate_shared | all nodes | 跨全部使用方和相关期间核对共享公用工程/设备/动员；每项负荷仅一责任方，避免上游设备服务重复。 |  |
| validate_rework | finish; dry_accept | 要求拒收分区记录及关联产出节点的实际整改/废弃路线；保留返工负荷且每个验收表面仅计一次面积。 |  |
| validate_water | mix; finish; dry_accept | 核对粉料/水/浆料及水保留、浆水、凝水、蒸气并报告不确定性；捕集固液为废物，不得臆造直接排放。 |  |
| validate_binding | all cards | 核实下游具体UUID/支持项及实际限定条件；准备材料、服务、废物或污染物含糊类别须前景拆分，不得继承通用UUID。 |  |
| validate_range | all cards | 暂定推理筛选仅提示调查，不是通用允许限值、实测值或替代清单。 |  |
| close_atomic_prep_materials | prep; cp_prep | 在atomic_prep_materials全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_prep_access | prep; cp_prep | 在atomic_prep_access全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_prep_waste | prep; cp_prep | 在atomic_prep_waste全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_mix_reject | mix; cp_mix | 在atomic_mix_reject全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_mix_packaging | mix; cp_mix | 在atomic_mix_packaging全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_mix_air | mix; cp_mix | 在atomic_mix_air全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_finish_access | finish; cp_finish | 在atomic_finish_access全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| close_atomic_finish_waste | finish; cp_finish | 在atomic_finish_waste全部实际对象由独立子交换或有证据未发生闭合之前，阻断最终数据完成。核对唯一property/unit、独立物理量到原参考分母的计算、源/去向/期间、一次负担归属和原库存/在制品/返工闭合。候选结构检查通过不能关闭此方法关口。 |  |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | 按同物料/状态/事件/gate核对实际发送及接收凭证、原始实物量及单位和责任；允许可追溯复用同一签收计量，禁止父量复制、覆盖实收或未知强制相等。差异未经不确定性、实际损失或状态改变责任证据解释即阻断完成；核对各卡仅归一化一次。 |  |

## 10. 发布数据集画像

| 字段 (Field) | 内容 (Value) |
| --- | --- |
| dataset_role | 前景施工服务数据包及其process和lifecyclemodel投影 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 起始表面、饰面系统、厚度、验收关口及场址条件等效的已申明室内石膏薄层服务 |
| excluded_use | 制造石膏粉；整墙施工；室外/水泥抹面；涂装；危险清除；宣称通用使用寿命或整栋建筑性能 |
| required_metadata | 参考面积/关口；基层/系统/厚度；场址/期间；分区/批次关联；起始和下游责任；公用工程及废物范围；地理/技术相容性 |
| required_quality_disclosure | 实测与估算量；暂定范围；缺失上游数据集；水平衡及干燥不确定性；共享/返工归属；未解决身份及具体交换解析 |
| update_trigger | 石膏配方、厚度、基层、验收判据、设备、干燥条件、能源供应、废物路线或代表性证据改变 |

## 11. 数据源

| 来源编号 (Source id) | 类型 (Type) | 参考 (Reference) | 用途 (Used for) |
| --- | --- | --- | --- |
| british-gypsum-multifinish-installation | handbook | British Gypsum，Thistle MultiFinish安装说明，https://www.british-gypsum.com/installation/installation-guidance-and-support/installation-guides/thistle-multifinish-installation-instructions | 所选产品路线示例：基层适用性、拌和、分阶段薄抹/压光及变化的抹涂时间。产品特定数量/时间不是通用PCR默认值，也不证明可装饰干燥状态。 |
