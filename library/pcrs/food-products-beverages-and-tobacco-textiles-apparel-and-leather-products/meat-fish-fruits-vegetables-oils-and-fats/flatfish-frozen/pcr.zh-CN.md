---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flatfish-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻鲽形目鱼类

## 1. 范围与适用性

本 PCR 适用于以鲽形目鱼类为原料，生产冷冻未去内脏或已去内脏鱼类的前景加工；产品可带头或去头。边界从原料接收、整理、冷冻、可选冰衣、包装和冷冻储存延伸至加工设施出厂。数据包应声明物种或物种组、捕捞或养殖来源、上游数据集、接收状态、去内脏和头部形态、冰衣、包装、冷冻路线、生产地域与期间，以及所代表的冷冻储存期。

本 PCR 不包括活、鲜或冷藏鲽形目鱼类；冷冻鱼片；冷冻鱼肉（无论是否切碎）；鱼肝和鱼卵；供进一步加工的盐水冷冻鱼；配制、裹衣、熟制、熏制、干制、盐渍、罐藏或其他保藏产品；以及非鲽形目鱼类。接收原料中包含的捕捞、养殖、卸鱼和先前加工应由独立上游数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flatfish-frozen |
| classification_refs | CPC 3.0: 21213, Flatfish, frozen（精确映射语境） |
| covered_products | 以未去内脏或已去内脏、带头或去头鱼类形态呈现的冷冻鲽形目鱼类，包括已声明的冰衣和包装 |
| excluded_products | 活、鲜或冷藏鲽形目鱼类；鱼片；鱼肉（无论是否切碎）；鱼肝和鱼卵；供进一步加工的盐水冷冻鱼；配制、裹衣、熟制、熏制、干制、盐渍、罐藏或其他保藏鱼制品；非鲽形目鱼类 |
| representative_product | 供人类食用的已包装、去内脏冷冻鲽形目鱼类，并声明头部和冰衣状态 |
| production_route | 接收与检验；分选及可选清洗、去内脏、去头、修整和分级；冷冻；可选冰衣；包装；冷冻储存；加工设施出厂 |
| market_state | 加工设施出厂的冷冻鲽形目鱼类，并声明物种、形态、冰衣、包装和储存状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供已声明未去内脏或已去内脏、带头或去头形态的冷冻鲽形目鱼类 |
| How much | 1 kg 冷冻鲽形目鱼类净质量 |
| How well | 符合已声明的物种、形态、冰衣、包装、市场规格和适用食品安全控制 |
| How long or cycle | 一个生产批次经历已声明的场内冷冻储存期直至设施出厂 |
| reference_flow_link | `frozen_flatfish_reference` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净质量，不计运输包装，且外部冰衣不计入鱼体质量 |
| 参考产品流 | Flatfish, frozen `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或物种组；捕捞或养殖来源及上游数据集；接收形态和温度状态；未去内脏或已去内脏；带头或去头；其他修整或分级；冰衣是否存在及其质量；包装形式和纳入的包装层；冷冻技术；冷冻储存控制制度和时长；生产地域和期间；设施出厂状态 |

构建前景数据包时，所有`必需限定信息`均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息将使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化为 1 kg 鲽形目鱼类净质量。外部冰衣和包装不计入产品质量，并应单独报告。 |
| `presentation_mass_separation` | 整理后和冷冻产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别保留接收毛质量、去除的内脏/鱼头/修整物、保留鱼体质量、冰衣、皮重和包装的计量或计算量。 |
| `energy_consistency` | 电力和燃料 | 精确选定流所声明的能量属性 | kWh、MJ 或已声明可换算单位 | 保留原始计量表和发票单位，记录换算因子；无显式换算时不得合并购入电力与燃料能量。 |
| `storage_time_basis` | 冷冻储存 | 质量和经过时间 | kg 和 day | 按吞吐量和已声明储存时长记录冷冻储存能耗，并披露共享冷库分配驱动量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工设施接收的鲽形目鱼类，并声明物种、来源、上游数据集、接收质量、形态、温度状态和先前加工 |
| starting_condition_role | 冷冻鲽形目鱼类前景加工系统的上游产品投入 |
| product_classification_scope | CPC 3.0 子类 21213 及其父类 2121 内的冷冻鲽形目鱼类；父类排除鱼片和鱼肉 |
| recursive_input_rule | 同类别冷冻鲽形目鱼类投入应使用独立上游数据集，并标识为重新包装、再加工或混合投入；不得在本前景系统内递归重建其生产。 |
| upstream_dataset_requirement | 将每项接收的鲽形目鱼类投入链接至可追溯的捕捞或养殖、卸鱼和先前加工数据集；披露代理使用和上游缺口。 |
| disclosure | 声明物种、来源、接收状态、整理、冷冻和冰衣路线、包装范围、储存时长和控制制度、共产品和废物、分配、公用工程、地域、数据期以及排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_facility_gate` | foreground_system | 纳入接收、整理、冷冻、可选冰衣、包装、场内冷冻储存、内部搬运、清洁、废水与残余物处理，以及截至设施出厂可归属的制冷剂损失。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_product_form` | product_scope | 将参考产品限制为未去内脏或已去内脏、带头或去头的鱼类；排除鱼片、鱼肉、鱼肝和鱼卵，以及供进一步加工的盐水冷冻鱼。 | `unsd-cpc-v3-21213`; `codex-cxs-36-1981` |
| `sb_cold_chain` | freezing_and_storage | 纳入维持已声明状态所需的冷冻操作及所有场内冷冻暂存和转移；保留监控和纠正措施记录。 | `codex-cxc-52-2003`; `codex-cxs-36-1981` |
| `sb_upstream_traceability` | received_flatfish | 通过上游数据集表示捕捞或养殖、卸鱼和先前加工，不得以未记录的前景截断替代。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `reception_preparation` | 接收与整理 | `required` | 始终 | 前景接收、检验、分选、按需清洗，以及已声明的去内脏、去头、修整和分级 | kg 整理后鲽形目鱼类 |
| `freezing_glazing` | 冷冻与可选冰衣 | `required` | 始终；仅在使用冰衣时适用冰衣流 | 前景冷冻、温度控制、施加冰衣和制冷 | kg 冷冻鲽形目鱼类净质量 |
| `packaging_storage` | 包装、冷冻储存与出厂 | `required` | 始终；包装流按已声明包装范围适用 | 前景包装、冷冻储存、内部搬运和设施出厂 | kg 参考产品 |

### 过程：接收与整理（`reception_preparation`）

#### 输入

##### 产品流

###### 接收的鲽形目鱼类（`received_flatfish`）

按物种或物种组、来源、生产系统、接收形态和温度状态以及上游数据集记录每项投入。

- 选定流：精确 Tiangong 产品流待审
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次的实测接收毛质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻鲽形目鱼类净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 数量范围：暂定接收原料质量平衡 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：4
  - 单位：kg 接收鲽形目鱼类/kg 净参考产品
  - 基准：每 1 kg 冷冻鲽形目鱼类净参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用水和冰（`preparation_water_ice`）

记录用于清洗、搬运和温度控制的水和冰，不包括可选冰衣用水。

- 选定流：精确 Tiangong 产品流待审
- 流属性/单位：Mass / kg
- 数量规则：分配至整理批次的实测或核对水和冰
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鲽形目鱼类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice`
- 数量范围：暂定整理用水和冰 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 水和冰/kg 整理后鲽形目鱼类
  - 基准：每 1 kg 整理后鲽形目鱼类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 整理后鲽形目鱼类（`prepared_flatfish`）

记录完成已声明整理步骤后转入冷冻的鲽形目鱼类。

- 选定流：精确 Tiangong 产品流待审
- 流属性/单位：Mass / kg
- 数量规则：实测整理后鲽形目鱼类质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 数量范围：暂定整理产率 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.25
  - 上限：1
  - 单位：kg 整理后鲽形目鱼类/kg 接收鲽形目鱼类
  - 基准：相对于接收鲽形目鱼类的质量比
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 去除的内脏、鱼头、修整物和不合格品（`preparation_residues`）

按物理形态、去向以及共产品或废物状态记录各分离物；可销售共产品应与废物分开。

- 选定流：精确 Tiangong 废物或共产品流待审
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的分离物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接收鲽形目鱼类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater`
- 数量范围：暂定整理残余物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.75
  - 单位：kg 分离物/kg 接收鲽形目鱼类
  - 基准：相对于接收鲽形目鱼类的质量比
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理废水（`preparation_wastewater`）

将排往处理或其他去向的废水与固体残余物分开记录。

- 选定流：精确 Tiangong 废物流待审
- 流属性/单位：Mass / kg
- 数量规则：分配至整理批次的实测排放或计算水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鲽形目鱼类
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_wastewater`
- 数量范围：暂定废水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 废水/kg 整理后鲽形目鱼类
  - 基准：每 1 kg 整理后鲽形目鱼类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：冷冻与可选冰衣（`freezing_glazing`）

#### 输入

##### 产品流

###### 进入冷冻的整理后鲽形目鱼类（`freezing_input`）

记录转入冷冻设备的实测批次。

- 选定流：精确 Tiangong 产品流待审
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个冷冻批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 冷冻用电（`freezing_electricity`）

通过分表或有记录的共享计量计算，记录冷冻机、压缩机、泵、风机和可归属辅助用电。

- 选定流：精确 Tiangong 电力产品流待地域审查
- 流属性/单位：Energy / kWh
- 数量规则：实测或计算用电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻鲽形目鱼类净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_storage`
- 数量范围：暂定冷冻用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：5
  - 单位：kWh/kg 冷冻鲽形目鱼类净质量
  - 基准：每 1 kg 冷冻鲽形目鱼类净质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冰衣用水（`glazing_water`）

仅在施加冰衣时纳入；分别测量供水量和保留冰衣质量。

- 选定流：精确 Tiangong 水产品流待审
- 流属性/单位：Mass / kg
- 数量规则：实测冰衣供水量和保留冰衣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻鲽形目鱼类净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice`
- 数量范围：暂定冰衣用水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 冰衣供水/kg 冷冻鲽形目鱼类净质量
  - 基准：每 1 kg 冷冻鲽形目鱼类净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 冷冻鲽形目鱼类净产品（`frozen_flatfish_reference`）

记录包装前的冷冻产品，并将保留冰衣排除在鱼体净质量之外。

- 选定流：Flatfish, frozen `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考数量 1 kg 冷冻鲽形目鱼类净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 冷冻不合格品和未保留冰衣水（`freezing_rejects`）

在记录允许时，按去向分别记录不合格鱼和未保留冰衣水。

- 选定流：精确 Tiangong 废物流待审
- 流属性/单位：Mass / kg
- 数量规则：实测或核对的不合格品质量和未保留水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鲽形目鱼类净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater`
- 数量范围：暂定冷冻损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 不合格品和未保留水/kg 冷冻鲽形目鱼类净质量
  - 基准：每 1 kg 冷冻鲽形目鱼类净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 制冷剂向空气损失（`freezing_refrigerant_loss`）

按制冷剂名称，根据维修、补充、回收和充注平衡记录计算损失；不得使用未说明成分的制冷剂汇总。

- 选定流：精确 Tiangong 基本流待制冷剂特定审查
- 流属性/单位：Mass / kg
- 数量规则：按物质计算可归属制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻鲽形目鱼类净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 数量范围：暂定制冷剂损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 制冷剂/kg 冷冻鲽形目鱼类净质量
  - 基准：每 1 kg 冷冻鲽形目鱼类净质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装、冷冻储存与出厂（`packaging_storage`）

#### 输入

##### 产品流

###### 进入包装的冷冻鲽形目鱼类（`packaging_input`）

记录转入包装的冷冻产品净质量。

- 选定流：Flatfish, frozen `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：不计冰衣和包装的实测净转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 包装材料（`packaging_materials`）

按材料分别记录初级、次级和三级包装，仅纳入已声明范围内的包装层。

- 选定流：精确 Tiangong 包装产品流待材料审查
- 流属性/单位：Mass / kg
- 数量规则：包装领用量减去核对的未使用退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻鲽形目鱼类净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 数量范围：暂定包装质量 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 包装/kg 净参考产品
  - 基准：每 1 kg 冷冻鲽形目鱼类净参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻储存与搬运用电（`storage_electricity`）

记录冷库和内部搬运用电，并使用包含储存时长的已披露物理驱动量分配共享计量。

- 选定流：精确 Tiangong 电力产品流待地域审查
- 流属性/单位：Energy / kWh
- 数量规则：根据计量记录、吞吐量或占用容量以及储存时长计算用电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：已声明储存期内每 1 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_storage`
- 数量范围：暂定冷冻储存用电 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kWh/kg 参考产品/已声明储存周期
  - 基准：已声明储存期内每 1 kg 参考产品
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 出厂的已包装冷冻鲽形目鱼类（`dispatched_frozen_flatfish`）

记录出厂产品，并核对为恰好 1 kg 鲽形目鱼类净质量，不将冰衣或包装加入参考质量。

- 选定流：Flatfish, frozen `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测出厂净质量并归一化为 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass`

##### 废物流

###### 包装废料（`packaging_scrap`）

按材料和去向记录包装废料。

- 选定流：精确 Tiangong 废物流待材料审查
- 流属性/单位：Mass / kg
- 数量规则：实测或核对的包装废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 数量范围：暂定包装废料 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 包装废料/kg 参考产品
  - 基准：每 1 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional_foreground_processes | 首先通过采集独立过程数据、细分操作或采用可辩护的系统扩展方法避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical` | joint_products_and_co-products | 无法避免时，使用有记录的因果物理关系。仅在质量能代表该关系时使用质量分配，并披露分配因子。 | `eu-pef-2021-2279` |
| `allocation_economic` | residual_multifunctionality | 仅在不存在可辩护的因果物理关系时使用经济分配；记录代表性价格期，并对重要共产品进行敏感性检验。 | `eu-pef-2021-2279` |
| `allocation_status` | heads_viscera_trimmings_rejects_and_recovered_material | 根据适用司法辖区声明每项分离物为共产品、动物饲料投入、回收材料、处理投入或废物，并披露抵扣或负担转移。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `reception_preparation`; `freezing_glazing`; `packaging_storage` | 接收、整理、冷冻、冰衣、皮重和出厂质量 | 校准秤、批次、生产或库存记录 | timestamp; lot_id; species; origin; presentation; gross_mass; tare_mass; removed_mass; glaze_mass; net_mass | 核对批次关联秤记录，分别保留鱼体、冰衣、皮重和包装 | kg | 每批次并定期核对 | 已声明的代表性生产期 | 所有纳入设施和生产线 | 汇总实质等效批次并按净参考质量归一化 | 校准；批次追溯；核对；操作员复核 |
| `cp_water_ice` | `reception_preparation`; `freezing_glazing` | 整理用水、冰和冰衣用水 | 计量表、制冰记录、采购记录和冰衣测试 | meter_start; meter_end; ice_mass; supplied_water; retained_glaze; lot_id | 使用已披露物理驱动量将供水和冰核对至操作 | kg 或 m3，并保留换算记录 | 每班次或批次并定期核对 | 与产品质量相同期间 | 所有纳入的整理和冰衣操作 | 扣除无关用量，并按过程输出或参考产品归一化 | 计量检查；发票核对；冰衣测试 |
| `cp_energy_storage` | `freezing_glazing`; `packaging_storage` | 冷冻、储存和搬运能源 | 分表、公用工程表、发票、设备运行时间和储存记录 | meter_start; meter_end; equipment_id; runtime; rated_power; throughput; storage_days; occupied_capacity | 优先分表，否则使用有记录的物理分配 | kWh、MJ 或已声明燃料单位 | 连续、每班次或定期 | 与生产和储存相同期间 | 所有纳入设备和共享公用工程 | 与发票核对，并按过程输出或储存基准归一化 | 计量校准；发票核对；分配工作表 |
| `cp_residue_wastewater` | `reception_preparation`; `freezing_glazing` | 残余物、不合格品、废水和去向 | 秤、容器、计量表、联单、销售、处理或处置记录 | material_type; mass; water_volume; destination; regulatory_status; revenue; lot_id | 按去向称量或计量，并与物料和水量平衡核对 | kg 或 m3，并保留换算记录 | 每次清运或排放并定期核对 | 与生产相同期间 | 所有纳入的残余物和排放点 | 按材料和去向汇总，不混合共产品与废物 | 秤/计量检查；联单；销售或处理记录 |
| `cp_packaging` | `packaging_storage` | 使用的包装和废料 | 物料清单、领退、供应商和废料记录 | material; layer; units_issued; units_returned; unit_mass; scrap_mass; destination | 根据核对数量和经验证单件质量计算包装使用量 | kg | 每种形式并定期核对 | 与出厂相同期间 | 所有包装线和纳入包装层 | 按材料汇总并按产品净质量归一化 | 供应商规格；单件质量检查；库存核对 |
| `cp_refrigerant` | `freezing_glazing`; `packaging_storage` | 按物质的制冷剂损失 | 维修、采购、补充、回收、充注和修理记录 | refrigerant_name; added_mass; recovered_mass; opening_charge; closing_charge; service_date; equipment_id; operating_driver | 计算物质特定平衡，并用已披露物理驱动量分配共享系统 | kg | 每次维修事件并按期间核对 | 与生产数据集重叠的期间 | 为纳入操作服务的所有制冷系统 | 按命名物质汇总可归属损失 | 技师记录；采购记录；充注平衡；修理闭环 |
| `cp_cold_chain_quality` | `freezing_glazing`; `packaging_storage` | 冷冻和冷冻储存控制 | 经验证传感器、批次记录、报警、纠正措施和包装检查 | lot_id; timestamp; process_stage; product_temperature_or_validated_proxy; set_point; alarm; action; package_integrity | 条件允许时保留连续监测，并按食品安全计划保留批次关联检查 | 已声明温度单位和时间 | 按适用情况连续或每批次 | 整个纳入的冷冻和储存周期 | 所有纳入冷冻机、冷库和转移阶段 | 分别报告偏差和受影响质量 | 传感器校准；HACCP 记录；报警历史；措施闭环；检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品 | 鲽形目鱼类净质量 = 冷冻产品毛质量 - 外部冰衣质量；包装另行排除 | 冷冻毛质量；冰衣质量；包装质量 | kg 冷冻鲽形目鱼类净质量 | `codex-cxs-36-1981`; `codex-cxs-190-1995` |
| `calc_normalized_inventory` | 所有清单行 | 归一化量 = 纳入期间的流量 / 出厂鲽形目鱼类净质量 | 核对后的流量；出厂净质量 | 每 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_process_yield` | 整理和冷冻 | 产率 = 同一批次或核对期间的实测净输出质量 / 实测输入质量 | 输入质量；输出质量；批次或期间关联 | kg/kg 过程产率 |  |
| `calc_mass_balance` | 各过程和前景系统 | 核对鲽形目鱼类、去除物、产品、冰衣、废水关联物料、废物和库存变化；调查无法解释的残差 | 输入、输出、废物、水、冰衣和库存变化记录 | 平衡残差和解释 |  |
| `calc_shared_energy` | 共享公用工程 | 使用有记录的物理驱动量分配共享能源，例如运行时间、吞吐量、制冷负荷、占用容量和储存时长 | 共享计量；驱动量；纳入输出 | 每过程输出或参考产品的能源 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 制冷系统 | 可归属损失 = 添加制冷剂 - 回收制冷剂 - 有记录的充注增加量；按命名物质和已披露分配驱动量计算 | 维修和充注记录；运行驱动量 | 纳入操作可归属的 kg 制冷剂 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 产品和物料记录 | 保留物种或物种组、来源、上游数据集、未去内脏/已去内脏和带头/去头形态、冰衣及包装，达到避免混合实质不同产品的粒度。 | 批次追溯、供应商和产品规格、上游数据集；`unsd-cpc-v3-21213`; `codex-cxs-36-1981` |
| `dq_temporal_representativeness` | 前景活动数据 | 使用代表生产和储存条件的已声明期间；披露季节性、停机、异常批次、缺失期间和外推。 | 带日期的生产、计量、储存和公用工程记录；`eu-pef-2021-2279` |
| `dq_technology_geography` | 过程和公用工程 | 识别整理、冷冻、冰衣、包装、制冷和废水技术，并使用地域适当的公用工程和上游数据集。 | 设备台账、场址记录、供应商数据、数据集元数据；`eu-pef-2021-2279` |
| `dq_completeness` | 前景系统 | 核对主要物料、水/冰、能源、包装、制冷剂、残余物、废水、共产品和产品；列出每项排除及理由。 | 物料/能源核对和排除日志；`eu-pef-2021-2279` |
| `dq_food_safety_quality` | 从接收到出厂 | 保留适用的卫生、危害控制、冷冻、冷冻储存、冰衣水、包装完整性、偏差和纠正措施证据。 | 食品安全计划、监测、校准、报警、检查和措施记录；`codex-cxc-52-2003`; `codex-cxs-36-1981` |
| `dq_estimate_replacement` | 暂定范围 | 将每项 `reasoned_estimate` 范围仅作为筛查标记，并在关键发布用途前予以替换或显式评审。 | 评审记录和代表性前景或来源支持的替换证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 要求产品流 UUID `d99b0e6e-06c2-4c08-8ae2-15a6dc1f0116`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，以及恰好 1 kg 净参考质量。 |  |
| `validate_scope_qualifiers` | dataset_identity | 缺少物种/来源、上游数据集、产品形态、冰衣、包装、冷冻路线、储存制度/时长、地域或数据期时，将数据集视为不完整。 | `unsd-cpc-v3-21213`; `codex-cxs-36-1981` |
| `validate_process_coverage` | process_inventory | 要求包含每个必需过程和完整场内冷冻链，或提供由设施证据支持的零值/不适用声明。 | `codex-cxc-52-2003`; `codex-cxs-36-1981` |
| `validate_mass_reconciliation` | mass_balance | 要求在批次或期间一致的范围内核对接收鲽形目鱼类、整理后和净产品、冰衣、共产品、残余物、不合格品、废水关联物料及库存变化；标记无法解释的残差。 |  |
| `validate_allocation` | multifunctionality | 要求提供避免分配的证据，或所选物理/经济方法、因子、材料状态、适用时的价格期和敏感性披露。 | `eu-pef-2021-2279` |
| `validate_cold_chain_quality` | food_safety_and_quality | 要求适用规定下关联的冷冻、储存、包装完整性、偏差和纠正措施记录；不得仅由平均温度推断符合性。 | `codex-cxc-52-2003`; `codex-cxs-36-1981` |
| `validate_data_quality` | foreground_dataset | 要求披露时间、技术、地域、完整性、追溯、校准、缺失数据、不确定性和暂定估算。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 加工设施出厂边界的冷冻鲽形目鱼类前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当物种/来源、上游生产、形态、设施技术、冰衣、包装、储存时长、地域、数据期和分配具有代表性时，用于已声明冷冻鲽形目鱼类的 LCA |
| excluded_use | 未添加数据集时，不得直接表示捕捞或养殖、活/鲜/冷藏鲽形目鱼类、鱼片、鱼肉、鱼肝或鱼卵、供进一步加工的盐水冷冻投入、其他保藏路线、下游分销、零售、烹饪、消费或生命末期 |
| required_metadata | PCR id 和版本语境；产品流 UUID；物种/来源；上游数据集；接收与出厂形态；冰衣；包装范围；纳入操作；冷冻和制冷技术；储存制度和时长；地域；数据期；分配；共产品/废物状态；排除/代理；数据所有者和评审状态 |
| required_quality_disclosure | 来源至清单行追溯；计量和计算方法；校准与核对；时间、技术和地域代表性；质量平衡；食品安全证据；分配敏感性；缺失数据；暂定估算；不确定性和局限性 |
| update_trigger | 鲽形目鱼类物种或来源、接收形态、产品规格、整理/冷冻/冰衣技术、制冷剂、能源供应、包装、储存时长、分配或共产品路线、法规、设施配置或代表性数据期发生实质变化 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-v3-21213` | `official_guidance` | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21213, Flatfish, frozen, https://unstats.un.org/unsd/classifications/Econ/cpc（检索于 2026-08-11） | 产品类别身份，以及通过 CPC 层级排除鱼片和鱼肉 |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/4/i2382e/i2382e.pdf（检索于 2026-08-11） | 过程分解、卫生处理、冷冻与储存控制、危害控制记录和质量证据 |
| `codex-cxs-36-1981` | `standard` | Codex Alimentarius, Standard for Quick-Frozen Finfish, Uneviscerated and Eviscerated, CXS 36-1981, https://workspace.fao.org/sites/codex/Standards/CXS%2036-1981/CXS_036e.pdf（检索于 2026-08-11） | 产品形态边界、冷冻和深度冷冻状态、冰衣水质量、冰衣不计入净含量、标签和储存控制 |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius, Standard for Quick-Frozen Fish Fillets, CXS 190-1995, https://workspace.fao.org/sites/codex/Standards/CXS%20190-1995/CXS_190e.pdf（检索于 2026-08-11） | 仅用于交叉佐证速冻、冰衣不计入净含量和冷冻链质量；不作为本 PCR 产品范围依据 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-11） | 边界完整性、归一化、多功能性和分配层级、代表性、数据质量及披露 |
