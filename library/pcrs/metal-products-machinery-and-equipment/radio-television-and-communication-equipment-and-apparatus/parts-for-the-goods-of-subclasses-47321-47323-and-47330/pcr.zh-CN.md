---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47321-47323-and-47330
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类47321、47323和47330所列产品的零部件

## 1. 范围与适用性

本PCR适用于录音或声音重放设备、视频记录或重放设备，以及传声器及其支架、扬声器、耳机或音频放大器专用零部件的制造。产品边界为供上述设备装配使用、具有独立零件号、图样版本和验收规范的可识别零部件。本PCR不涵盖完整设备；通用电子元器件也不会仅因客户生产音频设备而归入本类别。官方分类确定了所属整机类别[un-cpc-3-0-structure-2025; un-cpc-3-0-notes-2025]。

代表路线为无骨架环氧粘结铜线扬声器音圈的制造：外购绝缘绕组线绕制、施加配制胶粘剂、固化、移除可重复使用的工装、检验和包装。技术公开文献证明此类路线存在，并不证明其行业普及程度、环境基准、强制设计要求[us20170223463a1-voice-coil]。

记录设备机芯、放大器专用装联电路板、保留骨架的音圈和模塑声学零件，须先依据自身图样建立物料清单、工艺条件及原子交换，才能形成可用前景数据集。应用本PCR共用的采集、边界和分配规则，再按实际作业实例化过程。不得把代表音圈的物料清单或数量移用于其他零件。本文件是包含一个具体过程结构的类别方法学，不代表所有零件均采用绕线工艺。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47321-47323-and-47330 |
| classification_refs | CPC 3.0: 47402；仅表示分类身份，映射接受决定另行维护 |
| covered_products | 录音、录像或声音、视频重放装置及电声设备的专用制造零部件，以所属整机和零件图样识别 |
| excluded_products | 完整记录设备、扬声器、传声器及其支架和放大器；以自身产品身份销售的通用裸印制电路、集成电路、电阻器、电容器、电线和磁体；所属整机范围以外的广播电视接收及通信设备零部件；已录制介质；维修服务 |
| representative_product | 已固化并检验合格的无骨架环氧粘结铜线扬声器音圈，带绕组一体引出端，不含振膜或磁路组件 |
| production_route | 绝缘绕组线绕制及环氧胶粘剂施加；电加热固化和脱模；电气、尺寸检验及包装 |
| market_state | 零部件制造厂发运门口的新制合格零件；内包装和运输包装与零件净质量分别记录 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供指定扬声器装配使用的合格无骨架环氧粘结铜线扬声器音圈 |
| How much | 同一零件号和图样版本的合格音圈净质量1 kg；同时报告对应件数 |
| How well | 符合声明的图样、指定试验温度下的绕组电阻、绝缘及尺寸验收要求；验收准则和实测结果均由前景记录提供 |
| How long or cycle | 一个制造及验收周期；不为该中间产品指定整机扬声器使用寿命 |
| reference_flow_link | `accepted_voice_coil` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 无骨架环氧粘结铜线扬声器音圈 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件号; 图样版本; 所属整机; 导体组成和绝缘层; 线径和匝数; 音圈几何尺寸; 胶粘剂配方及供货状态; 固化路线; 无骨架结构; 零件净质量和件数; 电阻试验温度及验收准则; 绝缘试验方法; 不合格品及返工处理; 包装配置; 生产场址和国家; 记录期间; 外购与自产工序; 上游数据集边界 |

全部必需限定信息均须在数据包中声明。参考数量是归一化约定，不是实测成品率或经验范围。其他零件须使用不同的具体参考交换及自身性能限定信息，不得用笼统的“设备零部件”交换替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_reference_mass` | 合格产出 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量已干燥固化的合格零件，不含包装、临时套筒或不合格品。记录校准衡器的分辨率和皮重。 |
| `piece_mass_conversion` | 按件记录的生产和包装 | 质量 | kg | 采用同一零件版本及批次实测平均质量换算件数。不得使用通用音圈或纸箱单件质量。保留样本量及变异记录。 |
| `energy_conversion` | 电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表kWh原始数据，按1 kWh = 3.6 MJ换算。不得将电能当作燃料质量，也不得把电网排放列作场址直接排放。 |
| `wire_and_adhesive_basis` | 绕制投入 | 质量 | kg | 电线数量包含供货时已有的绝缘层。胶粘剂数量为供货配方总质量；单独记录固含量及挥发性组分。不得重复计入外购投入中已有的树脂或绝缘材料。 |
| `batch_matching` | 全部清单行 | 行内规定的质量或能量 | kg或MJ | 采用一致的闭合生产期间，核算在制品及返工，以合格品净质量M归一化已分配的交换总量。M必须大于零。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购绝缘绕组线及配制环氧胶粘剂在零部件工厂收货；代表路线中可重复使用的绕制套筒是工装，不是产品保留部分 |
| starting_condition_role | 中间零部件制造的前景入口条件 |
| product_classification_scope | 音视频及电声设备专用零部件；相关通用元器件保留自身产品身份 |
| recursive_input_rule | 按实际来料状态记录外购音圈或同类别中间件，并关联供应商身份及上游数据集。仅计入后续厂内作业；不得递归展开同一投入或重复计算其隐含制造负荷。 |
| upstream_dataset_requirement | 为外购物料、电力、包装、运输及外运废物处理关联边界兼容的上下游支持数据集，并披露地域、技术、时间和分配。单独的门到门前景数据包不等于从摇篮到大门的结果。 |
| disclosure | 声明自产及外购工序、内部转移关系、外协作业、运输环节、废物流向、工装寿命、公用工程、排除项和预期下游用途。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_part_gate` | 系统模型 | 提供明确标识的中间零部件生产清单。从摇篮到大门的结果包括上游供应及生产废物处理，不含整机使用和报废阶段；须说明采用该部分生命周期边界的理由。 | `wri-wbcsd-product-standard-2011` |
| `boundary_processes` | 代表前景过程 | 纳入绕线、施胶、实际固化能耗、脱模、检验、试验不合格、返工和包装。本参考状态下，连接振膜及磁路装配属于下游扬声器制造。 | `us20170223463a1-voice-coil` |
| `boundary_conditional_exchanges` | 路线实例化 | 依据实际物料清单、安全数据表及场址记录核对各路线。实际使用的每种溶剂、各物种排放、清洗剂、燃料、水流、工装更换和外协服务均须单独建行；不得因代表卡片中未列而默认为零。代表配方以无溶剂状态供货并采用电加热固化，须证实这些条件。 | |
| `boundary_tooling` | 可重复使用套筒和设备 | 记录工装材料、更换数量、重复使用寿命及服务产量。纳入可归属的更换负荷，或记录排除项并说明理由。不得将可移除套筒计入音圈保留质量。 | `us20170223463a1-voice-coil` |
| `boundary_support` | 物流及废物处理 | 采集收货质量、运距、运输方式、装载分配和废物交接去向。按实际边界关联运输及处理数据集，不得重复计入供应商数据集中已有的服务。 | |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `winding` | 绕制与施胶 | conditional | 代表无骨架音圈在前景范围内绕制 | 前景生产 | 已绕制未固化音圈质量 |
| `curing` | 电加热固化与脱模 | conditional | 代表已绕制音圈在前景范围内固化 | 前景加工 | 已固化待检音圈质量 |
| `release` | 检验与包装 | required | 所有制造零件均须按声明要求验收；以下详细卡片实例化音圈路线 | 前景放行 | 合格音圈净质量1 kg |

内部转移配对属于守恒链接，过程汇总时必须抵消。废物卡片仅在该具体废物流产生时纳入。包装后产出质量始终指音圈净质量，包装负荷保留在独立投入行。其他零件路线须完成过程图及原子清单实例化校验后方可使用数据集。

### 过程：绕制与施胶（`winding`）

#### 输入

##### 产品流

###### 铜绝缘绕组线（`winding_wire`）

纳入条件（inclusion_condition）：绕制代表音圈时。该条件仅决定本具体交换是否存在。

- 选定流：铜绝缘绕组线
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实耗供货电线，包含涂层及绕组引出端；Q_wire/M
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`us20170223463a1-voice-coil`

###### 配制热固化环氧胶粘剂（`epoxy_adhesive`）

纳入条件（inclusion_condition）：单独供货胶粘剂施用时；不得重复计入预涂粘结层。该条件仅决定本具体交换是否存在。

- 选定流：配制热固化环氧胶粘剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量实耗完整供货胶粘剂配方；Q_adhesive/M；须证实无溶剂条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`us20170223463a1-voice-coil`

###### 电力（`winding_electricity`）

纳入条件（inclusion_condition）：绕制及施胶耗电时。该条件仅决定本具体交换是否存在。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：已分配绕制及施胶电表总量换算MJ后除以M
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_winding`
- 来源：

#### 输出

##### 产品流

###### 已绕制未固化环氧涂覆铜线音圈（`uncured_coil_out`）

纳入条件（inclusion_condition）：绕制音圈转入固化时。该条件仅决定本具体交换是否存在。

- 选定流：已绕制未固化环氧涂覆铜线音圈
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量输出未固化音圈并除以M；与uncured_coil_in配对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transfer_winding`
- 来源：`us20170223463a1-voice-coil`

##### 废物流

###### 铜绝缘绕组线边角废料（`winding_wire_scrap`）

纳入条件（inclusion_condition）：剪线产生外运边角废料时。该条件仅决定本具体交换是否存在。

- 选定流：铜绝缘绕组线边角废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量外运电线边角废料，包含绝缘层，除以M；记录回收去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_winding`
- 来源：

###### 未固化环氧胶粘剂废物（`uncured_adhesive_waste`）

纳入条件（inclusion_condition）：胶粘剂在固化前弃置时。该条件仅决定本具体交换是否存在。

- 选定流：未固化环氧胶粘剂废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量弃置未用胶粘剂并除以M；保留未固化状态及危害评估
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_winding`
- 来源：

### 过程：电加热固化与脱模（`curing`）

#### 输入

##### 产品流

###### 已绕制未固化环氧涂覆铜线音圈（`uncured_coil_in`）

纳入条件（inclusion_condition）：接收已绕制未固化音圈时。该条件仅决定本具体交换是否存在。

- 选定流：已绕制未固化环氧涂覆铜线音圈
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：转入质量除以M；与uncured_coil_out保持同批次及状态
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transfer_curing`
- 来源：`us20170223463a1-voice-coil`

###### 电力（`curing_electricity`）

纳入条件（inclusion_condition）：采用电加热固化时。该条件仅决定本具体交换是否存在。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：实测电固化、通风及可归属抽真空电量换算MJ并除以M
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_curing`
- 来源：

#### 输出

##### 产品流

###### 已固化待检无骨架铜线音圈（`cured_coil_out`）

纳入条件（inclusion_condition）：脱模音圈转入检验时。该条件仅决定本具体交换是否存在。

- 选定流：已固化待检无骨架铜线音圈
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：脱模转出音圈净质量除以M；不含可重复使用套筒；与cured_coil_in配对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transfer_curing`
- 来源：`us20170223463a1-voice-coil`

##### 废物流

###### 已固化环氧树脂飞边废物（`cured_epoxy_flash`）

纳入条件（inclusion_condition）：脱模或修边产生固化树脂飞边时。该条件仅决定本具体交换是否存在。

- 选定流：已固化环氧树脂飞边废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分类称量弃置固化飞边并除以M；不含产品保留胶粘剂
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_curing`
- 来源：

### 过程：检验与包装（`release`）

#### 输入

##### 产品流

###### 已固化待检无骨架铜线音圈（`cured_coil_in`）

纳入条件（inclusion_condition）：接收代表已固化音圈时。该条件仅决定本具体交换是否存在。

- 选定流：已固化待检无骨架铜线音圈
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：转入音圈净质量除以M；与cured_coil_out配对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transfer_release`
- 来源：`us20170223463a1-voice-coil`

###### 电力（`release_electricity`）

纳入条件（inclusion_condition）：检验或包装耗电时。该条件仅决定本具体交换是否存在。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：实测检验及包装电量换算MJ并除以M
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_release`
- 来源：

###### 瓦楞纸箱（`corrugated_box`）

纳入条件（inclusion_condition）：使用瓦楞运输纸箱时。该条件仅决定本具体交换是否存在。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：瓦楞纸箱实际消耗量包含弃置纸箱，除以M；采用实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

###### 低密度聚乙烯包装袋（`polyethylene_bag`）

纳入条件（inclusion_condition）：使用LDPE袋时。该条件仅决定本具体交换是否存在。

- 选定流：低密度聚乙烯包装袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：LDPE袋实际消耗量包含弃置包装袋，除以M；核验聚合物及密度牌号
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

#### 输出

##### 产品流

###### 无骨架环氧粘结铜线扬声器音圈（`accepted_voice_coil`）

纳入条件（inclusion_condition）：代表成品在声明的发运大门交付时。该条件仅决定本具体交换是否存在。

- 选定流：无骨架环氧粘结铜线扬声器音圈
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：合格音圈净质量M/M = 1 kg；保留实测M及对应合格件数；不含包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`us20170223463a1-voice-coil`

##### 废物流

###### 不合格固化环氧粘结铜线音圈（`rejected_voice_coil`）

纳入条件（inclusion_condition）：固化音圈最终判废并外运时。该条件仅决定本具体交换是否存在。

- 选定流：不合格固化环氧粘结铜线音圈
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量送废物处理的不合格音圈并除以M；内部返工另行追踪
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_release`
- 来源：

###### 废瓦楞纸箱（`corrugated_box_waste`）

纳入条件（inclusion_condition）：纸箱在工厂破损或弃置时。该条件仅决定本具体交换是否存在。

- 选定流：废瓦楞纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量弃置瓦楞纸箱并除以M；不含随合格音圈发出的包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_release`
- 来源：

###### 废低密度聚乙烯包装袋（`polyethylene_bag_waste`）

纳入条件（inclusion_condition）：LDPE袋在工厂破损或弃置时。该条件仅决定本具体交换是否存在。

- 选定流：废低密度聚乙烯包装袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量弃置LDPE袋并除以M；保留聚合物及污染状态
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格音圈净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_release`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用作业 | 优先采用可分别计量的作业。无法拆分时，采用经证实的物理驱动因素；无法建立物理关系时，披露其他方法并说明理由。 | `wri-wbcsd-product-standard-2011` |
| `allocation_factory` | 绕制、固化和检验 | 按实测设备运行时间与负载，或经电表核对的固化设备占用容量分配共用电力。未说明因果关系时，不得仅凭收入或净质量分配不同零件设计的负荷。全部服务产品的分配比例之和须为一。 | |
| `allocation_rework` | 不合格及返工音圈 | 不合格品及所有重复作业的负荷保留在相应生产批群中，以合格产出归一化。内部返工不是负投入或可销售共产品。 | |
| `allocation_scrap` | 电线废料及外运废物 | 声明每种产出是废物还是可销售共产品，并说明分配依据。回收处理及分配方法须一致，不得自动从制造负荷中扣除避免原生铜生产的信用。 | `wri-wbcsd-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色（flow_role） | 记录类型（record_type） | 原始字段（raw_fields） | 采集方法（collection_method） | 单位（unit） | 频率（frequency） | 时间覆盖（temporal_coverage） | 场址范围（site_scope） | 汇总规则（aggregation_rule） | 质量证据（quality_evidence） |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | winding | 电线和胶粘剂 | 称量及库存台账 | 批号；零件版本；供货组成；总领用量；退库量；期初库存；期末库存；皮重 | 校准称量并与仓储和供应商规格核对 | kg | 每批及库存结算时 | 声明的代表生产期间全部批次 | 指定工厂绕制线 | 汇总实际消耗，调整库存及退库后应用`calc_normalize` | 校准；发票；SDS；批次记录；库存核对 |
| `cp_transfer_winding` | winding | 内部音圈 | 转移登记 | 来源批次；去向批次；零件版本；投入质量；产出质量；期初在制品；期末在制品；返工质量 | 配对称量转移量并核对生产记录 | kg | 每次转移 | 与合格产出同期，核对在制品 | 声明场址的关联工位 | 相同转移量在两侧各记录一次，汇总时抵消 | 可追溯交接单；批次闭合 |
| `cp_transfer_curing` | curing | 内部音圈 | 转移登记 | 来源批次；去向批次；零件版本；投入质量；产出质量；期初在制品；期末在制品；返工质量 | 配对称量转移量并核对生产记录 | kg | 每次转移 | 与合格产出同期，核对在制品 | 声明场址的关联工位 | 相同转移量在两侧各记录一次，汇总时抵消 | 可追溯交接单；批次闭合 |
| `cp_transfer_release` | release | 内部音圈 | 转移登记 | 来源批次；去向批次；零件版本；投入质量；产出质量；期初在制品；期末在制品；返工质量 | 配对称量转移量并核对生产记录 | kg | 每次转移 | 与合格产出同期，核对在制品 | 声明场址的关联工位 | 相同转移量在两侧各记录一次，汇总时抵消 | 可追溯交接单；批次闭合 |
| `cp_energy_winding` | winding | 电能 | 电表记录 | 电表编号；起始kWh；终止kWh；设备；时间；负载；零件批次；共用分配比例 | 分表计量实际运行，包括可归属待机及实际使用的抽真空和加热 | kWh；换算后MJ | 每次运行或计量生产期间 | 涵盖常规生产、启动、失败运行和返工 | 声明设备及共用供电 | 表差乘以有依据的分配比例，再换算并归一化 | 电表校准；排产记录；与厂区账单核对 |
| `cp_energy_curing` | curing | 电能 | 电表记录 | 电表编号；起始kWh；终止kWh；设备；时间；负载；零件批次；共用分配比例 | 分表计量实际运行，包括可归属待机及实际使用的抽真空和加热 | kWh；换算后MJ | 每次运行或计量生产期间 | 涵盖常规生产、启动、失败运行和返工 | 声明设备及共用供电 | 表差乘以有依据的分配比例，再换算并归一化 | 电表校准；排产记录；与厂区账单核对 |
| `cp_energy_release` | release | 电能 | 电表记录 | 电表编号；起始kWh；终止kWh；设备；时间；负载；零件批次；共用分配比例 | 分表计量实际运行，包括可归属待机及实际使用的抽真空和加热 | kWh；换算后MJ | 每次运行或计量生产期间 | 涵盖常规生产、启动、失败运行和返工 | 声明设备及共用供电 | 表差乘以有依据的分配比例，再换算并归一化 | 电表校准；排产记录；与厂区账单核对 |
| `cp_waste_winding` | winding | 各具名废物 | 废物称量及交接 | 废物身份；固化状态；污染情况；毛重；皮重；批次；去向；处理；回收量 | 分类称量并留存有资质接收方或等效去向记录 | kg | 每批或每次清运 | 同一生产批群，调整暂存废物 | 指定产生工位及废物库 | 分别汇总各实际废物流；外运废物不含内部回用 | 过磅单；联单；危害评估；处理记录 |
| `cp_waste_curing` | curing | 各具名废物 | 废物称量及交接 | 废物身份；固化状态；污染情况；毛重；皮重；批次；去向；处理；回收量 | 分类称量并留存有资质接收方或等效去向记录 | kg | 每批或每次清运 | 同一生产批群，调整暂存废物 | 指定产生工位及废物库 | 分别汇总各实际废物流；外运废物不含内部回用 | 过磅单；联单；危害评估；处理记录 |
| `cp_waste_release` | release | 各具名废物 | 废物称量及交接 | 废物身份；固化状态；污染情况；毛重；皮重；批次；去向；处理；回收量 | 分类称量并留存有资质接收方或等效去向记录 | kg | 每批或每次清运 | 同一生产批群，调整暂存废物 | 指定产生工位及废物库 | 分别汇总各实际废物流；外运废物不含内部回用 | 过磅单；联单；危害评估；处理记录 |
| `cp_release` | release | 合格音圈 | 质量及产出登记 | 零件版本；试验件数；合格件数；不合格件数；净质量；电阻；试验温度；绝缘结果；尺寸；准则；返工 | 校准衡器及产品专属电气、尺寸验收试验 | kg；件；ohm；degC；图样单位 | 每个生产批次；声明验收抽样方案 | 同期全部合格批次 | 声明放行工位 | 合格净质量M作为分母；核对受检、合格、不合格及返工件数 | 签署放行记录；试验方法；仪器校准；抽样方案 |
| `cp_pack` | release | 瓦楞纸箱及聚乙烯袋 | 包装消耗登记 | 材料；牌号；厚度；箱或袋件数；实测单件质量；退库；不合格品；重复使用次数 | 分别称量各包装组件并核对采购与包装记录 | kg；件 | 每批包装及库存结算时 | 与合格产出同期 | 声明包装工位 | 实际总消耗减退库；分别核对保留及废弃包装 | 包装规格；抽样称重；发票；库存闭合 |

### 计算规则

| rule_id | 适用对象 | 公式或规则（formula_or_rule） | 输入（inputs） | 输出（output） | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | 外部交换 | q_i = Q_i / M；Q_i为经库存修正及有依据的共用过程分配后的实测批群交换量；M为合格产品净质量 | 实测Q_i；M；分配比例 | 每kg合格零件的kg或MJ | |
| `calc_energy` | 计量电力 | Q_MJ = (end_kWh - start_kWh) × 3.6 × allocated_fraction；再除以M | 电表；分配记录；M | 每kg合格零件的MJ | |
| `calc_transfer` | 内部链接 | 明确记录在制品变动后，输出转移量等于对应输入转移量；工厂汇总时抵消两侧 | 交接单；在制品质量 | 核对后的内部质量 | |
| `calc_yield_balance` | 音圈制造 | 投入物料质量加期初在制品，等于合格音圈、外运过程废物、已识别释放及期末在制品之和。内部转移及返工不是新增工厂投入。根据记录的测量不确定度调查差额。 | 电线；胶粘剂；音圈产出；废物；在制品；已识别释放 | 批次质量平衡和实测成品率 | |
| `calc_pack_balance` | 各包装材料 | 消耗等于随货保留包装加已记录废弃包装，调整库存及重复使用 | 件数；实测质量；废物称重 | 包装核对 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求（requirement） | 证据（evidence） |
| --- | --- | --- | --- |
| `dq_identity` | 全部零件 | 每个参考数据集保持一个零件号及版本；区分音圈与完整换能器，区分裸电路与设备专用装联电路板。 | 图样；BOM；所属整机声明；官方分类 |
| `dq_completeness` | 实际路线 | 现场核对实际工艺、物料平衡、SDS、维护及公用工程记录。补充缺失的具体交换，记录每条条件卡片的适用性。 | 签署路线核对表；日志；质量平衡 |
| `dq_representativeness` | 测量期间 | 声明起止日期、产量、地域及技术；覆盖对该零件有实质影响的运行模式。说明停机、季节影响及排除批次。 | 生产记录；期间选择理由 |
| `dq_uncertainty` | 全部数量 | 保留不确定度、缺失记录、分配敏感性及供应商数据质量。不得用专利实例或未经核验的“典型”范围代替缺失观察值。 | 校准记录；不确定度评估；数据缺口登记 |
| `dq_sources` | 支持数据集 | 核对交付状态和上游边界；前景数据包保留数据源版本，PCR流UUID不带版本。 | 供应商声明；数据集说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产品 | 要求全部声明限定信息、M大于零、合格产品状态及净质量与件数核对。未实例化的通用零件描述视为不完整。 | |
| `validate_atomic` | 每项交换 | 每行须为单一物理或化学交换，流类型为正确的产品、废物或基本流，属性及单位兼容，且具有已核验身份或明确的未解决身份。UUID缺失不表示数量为零。 | |
| `validate_conservation` | 生产及包装 | 检查`calc_transfer`、`calc_yield_balance`和`calc_pack_balance`。依据测量不确定度设置接受容差并报告偏差；本PCR不提供虚构的通用容差。 | |
| `validate_energy` | 三个过程 | 核对各电表及分配比例；排除重复电量，不得将上游发电排放列为场址直接释放。 | |
| `validate_route` | 适用性 | 代表路线须证实胶粘剂无溶剂、电加热固化、工装可移除及音圈未装配到振膜的交付状态。其他路线须在使用前建立自身原子交换、直接释放及成品参考。 | `us20170223463a1-voice-coil` |
| `validate_boundary` | 下游结果 | 明确区分门到门数据与完整的从摇篮到大门模型。不得把零部件数据集表述为完整扬声器生命周期，也不得无条件比较不同设备功能。 | `wri-wbcsd-product-standard-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；仅在声明代表性并经审查后作为background_dataset |
| downstream_use | 用于指定音视频或电声设备装配投入；作为所采集前景数据包的process和lifecyclemodel投影 |
| allowed_use | 零件版本及供货状态匹配，或有明确技术兼容性依据并披露调整的零件 |
| excluded_use | 自动替代完整设备、铜线、通用电路板、其他零件功能、最终声学服务或产品使用及报废阶段 |
| required_metadata | 零件身份及版本；声明单位及件数换算；所属设备；场址、地域及日期；自产与外购工序；过程图；分配；供应商；物流；废物处理；支持数据集 |
| required_quality_disclosure | 覆盖程度、不确定度、数据缺口、未解决身份、范围证据缺口、一手与二手数据贡献、计量基准及排除项 |
| update_trigger | 图样、导体、绝缘、胶粘剂、固化路线、工厂、供电、成品率、供应商边界或包装变化；新记录表明原代表性失效 |

## 11. 数据源

| 来源标识（source_id） | 类型（type） | 参考文献（reference） | 用途（used_for） |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0结构，2025年6月30日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ；检索日期2026-09-09；independence_key: unsd-cpc-3-0-2025 | 核验47402、47321、47323、47330及独立元器件类别原始条目；分类及中文翻译范围 |
| `un-cpc-3-0-notes-2025` | official_guidance | 联合国统计司，CPC 3.0解释性说明，2025年6月30日，印刷页码255–259。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ；检索日期2026-09-09；independence_key: unsd-cpc-3-0-2025 | 核验所属整机和零部件条目原文；与CSV属于同一分类出版物，不是独立定量证据 |
| `us20170223463a1-voice-coil` | literature | US20170223463A1，Voice coil having epoxy-bound winding layers（具有环氧粘结绕组层的音圈），公开日2017年8月3日；图4A及图9说明，作业902–908。https://patents.google.com/patent/US20170223463A1/en ；原始PDF https://patentimages.storage.googleapis.com/10/88/c4/0487e5cb54c040/US20170223463A1.pdf ；检索日期2026-09-09；independence_key: us20170223463a1-patent-family | 核验绝缘导体、施胶、绕制、固化、可移除套筒及后续振膜连接的技术原文；仅支持代表过程分解，不支持定量范围或强制设计 |
| `wri-wbcsd-product-standard-2011` | standard | WRI/WBCSD，Product Life Cycle Accounting and Reporting Standard（产品生命周期核算与报告标准），2011年，第7–9及13章。https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ；检索日期2026-09-09；independence_key: wri-wbcsd-product-standard-2011 | 核验中间产品部分边界、分配和透明报告原文；这些原则支持本PCR声明的采集规则，不表示完全符合温室气体标准或构成完整LCIA方法 |
