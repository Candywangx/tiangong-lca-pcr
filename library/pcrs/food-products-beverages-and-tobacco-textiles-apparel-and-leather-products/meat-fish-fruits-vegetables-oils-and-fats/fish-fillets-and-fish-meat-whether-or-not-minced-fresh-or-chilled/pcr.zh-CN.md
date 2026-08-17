---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-and-fish-meat-whether-or-not-minced-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鱼片和鱼肉（无论是否剁碎），新鲜或冷藏

## 1. 范围与适用性

本 PCR 适用于供人食用的鱼片和其他鱼肉（包括绞碎鱼肉），产品以新鲜或冷藏状态供应，且除冷藏外未经其他保藏处理。前景范围从鱼或鱼块进入加工设施开始，包括备料、切片或取肉、可选绞碎、按实际采用的清洗、冷却、包装、冷藏，以及在设施门口发运。

本 PCR 不包括未经切片或取肉而销售的整鱼；冷冻、干燥、盐渍、烟熏、熟制、罐装、发酵、裹粉或经其他方式保藏的鱼；鱼肝和鱼卵；以及主要原料为甲壳类、软体动物或其他水生无脊椎动物的产品。养殖或捕捞、卸鱼和进厂运输属于上游过程，除非由报告组织运营并明确作为附加过程纳入。必须声明鱼种、生产来源、来料形态、带皮/带骨状态、绞碎或非绞碎形态、冷却介质和包装形式，因为这些信息会实质影响出成率、能源、水耗和共产品处理。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-and-fish-meat-whether-or-not-minced-fresh-or-chilled |
| classification_refs | CPC 3.0: 21221, exact |
| covered_products | 新鲜或冷藏鱼片；新鲜或冷藏鱼肉，无论是否绞碎 |
| excluded_products | 整鱼；冷冻鱼或鱼肉；干燥、盐渍、烟熏、熟制、罐装、发酵、裹粉或经其他方式保藏的鱼；鱼肝和鱼卵；甲壳类、软体动物及其他水生无脊椎动物 |
| representative_product | 加工设施门口的已包装新鲜或冷藏可食鱼片 |
| production_route | 温控接收；备料及切片/取肉；可选去皮、去骨、修整或绞碎；按实际采用的清洗；冷却；包装；冷藏和发运 |
| market_state | 新鲜或冷藏、未冷冻，可供销售或进一步食品制备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供食品用途的可食鱼片或鱼肉 |
| How much | 1 kg 产品净质量 |
| How well | 新鲜或冷藏，声明鱼种与产品形态，并符合适用的食品安全和商品质量要求 |
| How long or cycle | 加工设施门口的一次产品交付；不赋予使用持续时间 |
| reference_flow_link | 参考流是离开前景系统的合格包装产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Fish fillets and fish meat (whether or not minced), fresh or chilled `a1c31d45-a225-426f-908a-f79eae6c071f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼种或鱼种组合；捕捞或养殖来源；来料形态；鱼片或其他鱼肉形态；绞碎或非绞碎；带皮和带骨状态；新鲜或冷藏声明；产品温度判据；冷却介质；包装形式；净质量基准；设施地理范围和报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 准确报告 1 kg 可销售产品净质量，不包括包装、游离沥水和散冰；若声明的产品规格明确包含冰衣或包装介质，则应单独披露纳入的介质。 |
| `wet_mass_basis` | 鱼投入、可食输出、边角料和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在各流跨越过程边界时记录实际湿质量；不得在活重、上岸重、去内脏重、鱼片重和绞碎鱼肉重之间换算，除非采用有记录的计算规则。 |
| `temperature_record` | 接收、冷却、储存和发运 | Temperature | deg C | 记录产品或代表性中心温度实测值、适用判据、测点、仪器标识和时间戳；温度是质量与安全限定信息，不转换为参考质量。 |
| `energy_conversion` | 电力和燃料 | Energy | kWh or MJ | 保留计量单位和换算因子；仅使用有记录的因子进行换算，并在分表计量或工程分配允许时单列制冷。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 鱼或鱼块进入加工设施时，声明鱼种、来源、来料形态、质量、温度条件、供应商或批次以及上游数据集引用 |
| starting_condition_role | 进入前景鱼类加工系统的上游产品投入 |
| product_classification_scope | 供人食用的新鲜或冷藏鱼片和鱼肉，无论是否绞碎 |
| recursive_input_rule | 已属于本类别的外购新鲜或冷藏鱼片或鱼肉，只记录一次上游产品投入，不在同一模型中递归重复加工；仅清单化实际新增的前景操作 |
| upstream_dataset_requirement | 来料鱼形态应采用与其捕捞或养殖来源和形态相匹配的代表性上游数据集；不得以鱼片数据集替代整鱼或去内脏鱼，除非记录质量和共产品后果 |
| disclosure | 声明捕捞或养殖来源、鱼种、来料形态、先前保藏处理、进厂温度条件、纳入的设施操作、外包加工、分配方法、共产品去向、包装、地理范围和报告期 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景系统 | 纳入将声明来料鱼形态转化为合格新鲜或冷藏鱼片/鱼肉并包装冷藏发运所需的全部现场操作，包括制冷、卫生清洁、用水、包装、边角料和废水管理。 | `codex-cxc-52-2003` |
| `boundary_upstream_identity` | 来料鱼 | 捕捞或养殖、卸鱼和进厂运输通常保留在上游，除非由报告组织运营或有意纳入；始终将来料形态链接到来源和形态匹配的上游数据集。 | `eu-pef-2021-2279` |
| `boundary_cold_chain` | 产品处理 | 从接收到发运将时间和温度控制纳入前景边界并记录偏差；不得把新鲜产品表示为冷冻产品或经其他处理保藏的产品。 | `codex-cxc-52-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_cold_holding` | 接收和温控暂存 | required | 始终 | 接收、称重、检查，并在加工前保持冷藏 | kg 合格来料鱼 |
| `filleting_meat_preparation` | 切片和鱼肉制备 | required | 始终；具体切割、去皮、去骨、修整和绞碎步骤按声明的产品路线适用 | 生产可食鱼片或鱼肉并分离共产品或残余物 | kg 制备后的可食输出 |
| `washing_chilling_packing` | 清洗、冷却、包装和冷藏发运 | required | 始终；清洗和加冰仅在实际采用时适用 | 使产品达到声明的新鲜或冷藏市场状态并包装 | kg 包装产品净质量 |
| `sanitation_wastewater_support` | 卫生清洁、制冷支持和废水处理 | required | 始终 | 记录共用水、能源、清洁剂、废水和废物管理 | kg 包装产品净质量 |

### 过程：接收和温控暂存（`receipt_cold_holding`）

#### 输入

##### 产品流

###### 来料鱼或鱼块（`received_fish`）

记录实际跨越设施边界的来料形态。身份审核前不赋予近似的 Tiangong UUID。

- 选定流：来料鱼或鱼块
- 流属性/单位：Mass / kg
- 数量规则：按批次实测合格湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_temperature`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定来料鱼投入出成率筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.25
  - 上限：4.00
  - 单位：kg 来料鱼/kg 包装产品净质量
  - 基准：每 1 kg 包装产品净质量；应替换为按鱼种、来料形态和路线审核的证据
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收环节的冷却冰或冷水（`receipt_chilling_medium`）

记录跨越接收过程边界的外购或内部供应冰/冷水。

- 选定流：冰或冷水
- 流属性/单位：Mass / kg
- 数量规则：实测质量，或由领用量和退回记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_materials`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 拒收鱼和接收残余物（`receiving_rejects`）

记录接收环节拒收的鱼和在合格投入称重前移除的残余物，并记录去向和原因。

- 选定流：拒收鱼和接收残余物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_destination_mass`
- 来源：`codex-cxc-52-2003`

##### 基本流

除非场址特定的制冷剂泄漏或其他直接排放分配到本过程，否则不预期直接基本流。

#### 输出

##### 产品流

###### 送往制备的合格冷藏鱼（`accepted_fish`）

记录转送制备工序的合格湿质量。

- 选定流：合格冷藏鱼
- 流属性/单位：Mass / kg
- 数量规则：实测或以质量平衡确定的转移湿质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_temperature`
- 来源：`codex-cxc-52-2003`

##### 废物流

除上文记录的接收拒收物流外无其他预期废物流。

##### 基本流

无预期基本流。

### 过程：切片和鱼肉制备（`filleting_meat_preparation`）

#### 输入

##### 产品流

###### 用于切割或取肉的合格鱼（`fish_for_preparation`）

记录从接收环节转入的合格冷藏鱼。

- 选定流：合格冷藏鱼
- 流属性/单位：Mass / kg
- 数量规则：转移湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后的可食输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_temperature`
- 来源：`codex-cxc-52-2003`

###### 制备过程用水（`preparation_water`）

记录本过程中用于接触产品的漂洗、清洗或生产线运行用水。

- 选定流：工艺用水
- 流属性/单位：Mass / kg
- 数量规则：分表计量体积按有记录的密度换算，或由设施总表记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_materials`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定工艺用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：20
  - 单位：kg 水/kg 包装产品净质量
  - 基准：宽泛首轮筛查；应替换为经审核的场址或来源证据
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无输入废物流；若将外部管理的残余物返回进一步加工，应单独披露该回流。

##### 基本流

无预期基本流。

#### 输出

##### 产品流

###### 制备后的可食鱼片或鱼肉（`prepared_edible_meat`）

记录切割、可选去皮或去骨、修整、取肉和可选绞碎后的可食产品。

- 选定流：制备后的可食鱼片或鱼肉
- 流属性/单位：Mass / kg
- 数量规则：放行至最终冷却包装环节的实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后的可食输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_destination_mass`
- 来源：`codex-cxc-52-2003`

###### 可销售鱼类共产品（`saleable_coproducts`）

按去向和质量状态记录作为产品离开的鱼头、鱼架、鱼皮、修整料、碎肉部分或其他材料。

- 选定流：可销售鱼类共产品
- 流属性/单位：Mass / kg
- 数量规则：按共产品和去向实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后的可食输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_destination_mass`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 不可销售边角料和腐败物料（`processing_residues`）

按处理路线记录非产品有机残余物，不得与可销售共产品合并。

- 选定流：鱼类加工残余物
- 流属性/单位：Mass / kg
- 数量规则：按处理路线实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备后的可食输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_destination_mass`
- 来源：`codex-cxc-52-2003`

##### 基本流

无预期基本流。

### 过程：清洗、冷却、包装和冷藏发运（`washing_chilling_packing`）

#### 输入

##### 产品流

###### 待包装的制备后可食鱼产品（`prepared_product_for_packing`）

记录转入最终状态调整和包装的制备后可食输出。

- 选定流：制备后的可食鱼片或鱼肉
- 流属性/单位：Mass / kg
- 数量规则：转移湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_temperature`
- 来源：`codex-cxc-52-2003`

###### 最终阶段用水和冰（`final_water_ice`）

记录用于最终清洗、冷却或包装的水和冰，在记录允许时分别核算。

- 选定流：工艺用水和冰
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量或计量体积按有记录的方式换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_materials`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定用冰量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 冰/kg 包装产品净质量
  - 基准：宽泛首轮筛查；应替换为经审核的产品和路线特定证据
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 一级和二级包装（`packaging_materials`）

按材料类型和实测领用质量记录每种包装材料，扣除有记录的退回量。

- 选定流：包装材料
- 流属性/单位：Mass / kg
- 数量规则：按包装组成实测或依据物料清单确定质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_materials`
- 来源：
- 数量范围：暂定包装质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 包装/kg 包装产品净质量
  - 基准：宽泛首轮筛查；应替换为经审核的包装形式证据
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无输入废物流。

##### 基本流

无预期基本流。

#### 输出

##### 产品流

###### 包装的新鲜或冷藏鱼片或鱼肉（`reference_product`）

这是离开设施门口的参考产品。

- 选定流：Fish fillets and fish meat (whether or not minced), fresh or chilled `a1c31d45-a225-426f-908a-f79eae6c071f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配并归一化后准确等于 1 kg 产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_lot_mass_temperature`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 包装拒收品和最终产品损失（`packing_losses`）

按材料和去向记录拒收产品及包装废物。

- 选定流：包装损失和包装废物
- 流属性/单位：Mass / kg
- 数量规则：实测质量，或按领用量减产品量进行平衡核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_destination_mass`
- 来源：

##### 基本流

无预期基本流。

### 过程：卫生清洁、制冷支持和废水处理（`sanitation_wastewater_support`）

#### 输入

##### 产品流

###### 电力和燃料（`facility_energy`）

记录制冷、切割、泵送、制冰、压缩空气、照明及其他纳入的设施操作所用能源。

- 选定流：按能源载体区分的电力和燃料
- 流属性/单位：Energy / kWh or MJ
- 数量规则：分表计量；否则使用有记录的工程驱动因子分配设施记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_materials`
- 来源：
- 数量范围：暂定电力使用量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：5
  - 单位：kWh/kg 包装产品净质量
  - 基准：设施电力的宽泛首轮筛查；应替换为经审核的场址或来源证据
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁用水和清洁剂（`sanitation_inputs`）

记录纳入的卫生清洁活动所用水、洗涤剂和消毒剂。

- 选定流：按材料区分的清洁用水、洗涤剂和消毒剂
- 流属性/单位：Mass / kg
- 数量规则：实测领用量或采购与库存平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_materials`
- 来源：`codex-cxc-52-2003`

##### 废物流

无输入废物流。

##### 基本流

无输入基本流。

#### 输出

##### 产品流

无预期产品流。

##### 废物流

###### 工艺废水（`process_wastewater`）

记录废水质量或体积以及处理去向；可获得时记录实测负荷指标。

- 选定流：鱼类加工废水
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量排放量或水平衡，并按处理路线区分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_refrigerant`
- 来源：`codex-cxc-52-2003`

##### 基本流

###### 制冷剂直接排放（`refrigerant_release`）

按制冷剂种类记录纳入的制冷设备向空气的直接制冷剂损失。

- 选定流：按种类区分的制冷剂向空气排放
- 流属性/单位：Mass / kg
- 数量规则：由充注量、补充量、回收量和库存变化计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_refrigerant`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 多输出加工 | 在技术可行时，通过单独计量或细分切片、绞碎、冷却和包装操作来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_relation` | 与可销售鱼类共产品共用的操作 | 若无法细分且某物理关系能代表资源使用，应使用该关系分配共用投入和排放；仅当湿质量能合理反映底层过程关系时才可采用质量分配。 | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | 不存在可辩护物理关系的联合输出 | 只有当细分和代表性物理关系均不可行时，才使用有记录的经济关系；报告价格、地理与时间基准、平均方式，以及分配选择的敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste_not_coproduct` | 边角料、腐败鱼、污泥和包装废物 | 只有当某输出作为产品离开且具有有记录的去向和价值或功能时，才将其列为共产品；否则作为废物建模并纳入可归属于前景系统的处理。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_temperature` | `receipt_cold_holding`; `filleting_meat_preparation`; `washing_chilling_packing` | 批次质量、产品形态和温度 | 地磅或秤记录；接收与发运日志；温度日志 | lot_id; species; origin; received_form; input_mass_kg; transferred_mass_kg; packed_net_mass_kg; temperature_deg_c; criterion; timestamp; instrument_id; rejection_mass_kg | 经校准的秤和温度仪器，并关联生产批次 | kg; deg C | 每批次及每个要求的控制点 | 有代表性的连续 12 个月，或完整的声明生产期 | 每个纳入的设施和外包前景步骤 | 按批次和产品汇总质量；计算质量加权的年度或生产期强度；保留异常批次并说明排除项 | 校准记录；批次追溯；温度监测记录；核对签字 |
| `cp_utilities_materials` | 所有过程 | 水、冰、能源、包装和清洁材料 | 仪表；发票；库存领用；物料清单 | period; meter_id; carrier_or_material; opening_stock; purchases; closing_stock; issued_quantity; returned_quantity; unit; allocation_driver | 优先使用分表计量；否则使用经核对的采购/库存记录，并采用有记录的工程分配 | kg; m3; kWh; MJ | 可获得时按批次，且至少每月 | 与产品输出相同的期间，通常为连续 12 个月 | 每个纳入设施；区分材料或能源载体 | 库存核对后的净用量除以分配后的包装产品产量 | 仪表校准；发票；库存台账；分配工作表 |
| `cp_output_destination_mass` | `receipt_cold_holding`; `filleting_meat_preparation`; `washing_chilling_packing` | 产品、共产品、拒收品和废物的质量与去向 | 称重单；发运记录；废物联单 | lot_id; output_type; product_or_waste_status; mass_kg; destination; value_or_function; treatment_route; timestamp | 对各物料流称重；直接称重不可行时使用有记录的质量平衡 | kg | 每次发运或处置事件 | 与参考产品相同的期间 | 每个纳入设施和外部去向类别 | 按输出身份和去向汇总；产品与废物不得相互抵销 | 秤校准；销售或转移记录；废物联单；质量平衡核对 |
| `cp_wastewater_refrigerant` | `sanitation_wastewater_support` | 废水和制冷剂排放 | 排放计量与采样记录；制冷剂维修日志 | discharge_volume; load_indicator; concentration; treatment_route; refrigerant_species; opening_charge; additions; recovery; closing_charge | 可获得时直接测量；否则采用有记录的水平衡和制冷剂质量平衡 | m3; kg; concentration unit | 每次排放采样和维修事件；按月汇总 | 与参考产品相同的期间 | 每个纳入设施 | 汇总实测排放并计算各制冷剂种类损失；仅分配共用支持量 | 实验室记录；仪表校准；维修发票；充注量核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 纳入期间已分配数量 / 包装参考产品净质量 | allocated amount; packed_net_mass_kg | 每 1 kg 参考产品的数量 |  |
| `calc_mass_balance` | 各过程和报告期 | 质量平衡差 = 总质量投入 - 产品总输出 - 共产品总输出 - 废物总输出 - 有记录的水分夹带或蒸发 | 实测投入和输出湿质量；有记录的水分或夹带项 | 绝对和相对核对差 | `codex-cxc-52-2003` |
| `calc_refrigerant_loss` | 制冷系统 | 制冷剂损失 = 期初充注量 + 补充量 - 回收量 - 期末充注量；若无有记录的更正，不得小于零 | opening_charge; additions; recovery; closing_charge | 按种类计算的制冷剂排放 kg |  |
| `calc_allocation` | 共用多输出操作 | 对所有共用投入和排放一致应用所选的细分、物理或经济分配规则；保留未分配总量和分配比例 | 共用总量；输出数量；物理驱动因子或价格 | 按输出分配的清单 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品和鱼投入 | 保留鱼种、来源、来料形态、温度记录、加工路线和包装输出之间的批次关联。 | 批次记录和追溯核对；`codex-cxc-52-2003` |
| `dq_temporal_representativeness` | 前景活动数据 | 连续生产时采用有代表性的连续 12 个月；季节性或批次生产时覆盖完整声明生产期，并说明其代表性。 | 期间覆盖表和生产汇总；`eu-pef-2021-2279` |
| `dq_geographic_technology_scope` | 设施和外包前景步骤 | 纳入数据集所代表的每个设施和技术，或披露排除项及其产量占比；不得在无分层或无理由的情况下合并差异显著的切片、绞碎、冷却或包装路线。 | 设施清单、路线说明、覆盖率计算；`eu-pef-2021-2279` |
| `dq_measurement_control` | 质量、温度、公用工程和排放 | 保留仪器标识、校准或核查状态、采样方法、缺失数据处理和核对证据。 | 校准证书、仪表日志、采样记录和 QA 签字 |
| `dq_food_safety_context` | 新鲜或冷藏产品 | 保留适用的时间-温度判据、监测结果、纠正措施和卫生控制证据；PCR 符合性不能替代食品安全合规。 | 温度日志、卫生记录、偏差和纠正措施记录；`codex-cxc-52-2003` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认准确为 1 kg 产品净质量、指定产品流 UUID、Mass 属性 UUID、单位组 UUID、kg 单位和全部必需限定信息。 |  |
| `validate_scope_state` | 产品身份和边界 | 拒绝冷冻或经其他方式保藏的产品数据集；核实来料形态和纳入的加工路线能够生产声明的新鲜或冷藏鱼片/鱼肉输出。 | `codex-cxc-52-2003` |
| `validate_cold_chain_records` | 从接收到发运 | 每个声明的控制点均须提供时间-温度记录和偏差处置记录。 | `codex-cxc-52-2003` |
| `validate_mass_balance` | 各过程和报告期 | 核对鱼投入与可食输出、可销售共产品、拒收品、废物及有记录的夹带量；超出暂定 QA 筛查范围时应调查，不得自动接受。 |  |
| `validate_allocation` | 多输出操作 | 确认已优先考虑细分，所选驱动因子有理由，输出未同时作为共产品和废物重复计算，且分配比例与未分配总量核对一致。 | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | QA 校验范围 | 所有 `reasoned_estimate` 范围仅作为非规范性筛查值；超出时标记复核，并在转 active 前以经审核证据替换或确认这些范围。 |  |
| `validate_data_completeness` | 前景数据包 | 要求完整披露设施、时间、路线、公用工程、包装、共产品、废物、废水、制冷剂和来源，或提供明确且有记录的排除说明。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜或冷藏鱼片和鱼肉的前景生产数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 鱼种或鱼种组合、来源、来料形态、加工路线、市场状态、地理、技术、分配和数据期间具有代表性的产品与过程 LCA |
| excluded_use | 冷冻、保藏、熟制或非鱼类产品；无链接上游数据集的捕捞或养殖影响；声明边界以外的零售、消费者制备或生命末期主张 |
| required_metadata | PCR id 和状态；产品流 UUID；鱼种和来源；来料形态；产品形态；带皮/带骨/绞碎状态；冷却介质和温度判据；包装；设施地理；技术路线；期间；分配方法；共产品和废物去向；上游数据集引用 |
| required_quality_disclosure | 时间、地理和技术代表性；设施和产量覆盖；测量与校准证据；质量平衡结果；缺失数据处理；暂定估算使用；分配敏感性；食品安全判据和偏差 |
| update_trigger | 鱼种组合、来源、来料形态、出成率、设备、制冷系统、冷却或包装方法、共产品去向、分配驱动因子、设施组合、法规或证据发生足以实质改变归一化结果或范围的变化 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | FAO/WHO Codex Alimentarius，CXC 52-2003，《鱼及渔业制品操作规范》，官方 PDF：https://www.fao.org/input/download/standards/10273/CXP_052e.pdf（检索日期 2026-08-11） | 新鲜/冷藏产品含义；切片、去皮、修整、清洗和卫生工序分解；时间-温度与冷链控制；质量和食品安全记录 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，Annex I Product Environmental Footprint method：https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索日期 2026-08-11） | 系统边界披露；分配层级；前景数据质量、代表性、完整性和校验要求 |
