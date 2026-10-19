---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.wood-charcoal
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 工业干馏未压块木炭

## 1. 范围与适用性

适用于未处理非针叶原木经工业密闭干馏、尾气内部燃烧供热、冷却、筛分和散装装运形成的未活化、未压块木炭。电动搬运及低压电网供电；辅助供热可用同类原木或管输天然气。水循环、冷凝液收集及场外废水处理按实际设备有条件纳入。木炭是含固定碳、挥发分、矿物灰及水的实物混合物，不是单一纯碳物种；不得以固定碳含量代替产品质量。依据 fao-industrial-charcoal-1985、epa-charcoal-1995。

排除露天坑窑／土窑、连续多层炉制粉炭后压块、活化、粘结剂／矿煤混合炭块、非木材原料、处理或胶合木料、化学副产品商业回收及精制、场外使用和直接液态环境排放。proFagus原件证明化学回收确实存在，但其单厂配方、产率及环保宣传不能外推；该路线不纳入本单产品方法（profagus-retort-biochemicals）。其他燃料、包装或商业共产品须先补足具体原子流及方法再扩展适用性。CPC34510只确定木炭分类，不能证明本路线覆盖全部木炭（un-cpc-34510）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.wood-charcoal |
| classification_refs | CPC 3.0:34510; narrower |
| covered_products | 本稿限定路线的散装未压块木炭 |
| excluded_products | 活性炭、炭块、矿煤焦炭、化学回收产品、土壤生物炭性能声明 |
| representative_product | 非针叶原木干馏块状木炭，实际树种及等级须声明 |
| production_route | 原木接收及切割→干燥→密闭干馏及尾气供热→冷却→筛分→散装装运 |
| market_state | 按声明水分和质量等级验收的未活化散装块炭 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产者厂界交付限定木炭；不声明等同的烹饪、吸附或还原功能 |
| How much | 1 千克验收净交付木炭 |
| How well | 实际树种、筛分等级、水分、灰分、挥发分、固定碳及用途质量规格 |
| How long or cycle | 声明代表性生产周期至散装装运点，不规定寿命 |
| reference_flow_link | charcoal_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木炭 `d05420ab-1fe9-4a24-91fa-b877460920cc` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 未处理非针叶原木树种及来源；实际干馏设备和热回收；未活化／未压块；散装；交付水分湿基；粒径等级；灰分／挥发分／固定碳基准；供热燃料及尾气处理；地点／周期／供方；净质量皮重；单产品及废物接收条件 |

缺少必需限定信息时，数据包参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | charcoal_output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 千克验收净交付木炭；cp_product使用校准称量减实测皮重，记录同批交付水分。 |
| moisture_basis | wood_input; charcoal_output | Mass | kg | cp_wood和cp_product独立测水分湿基w；诊断干质量m_dry = m_wet × (1 − w)。干基收率另列，不改变交付质量分母；不移植历史体积、堆积或产率系数（fao-industrial-charcoal-1985，2.3及2.9.1）。 |
| energy_basis | electricity_input; gas_input | Net calorific value; Volume | MJ; m3 | 电量按实测千瓦时×3.6换为兆焦；保留数据库具体净热值属性名称，不能推断燃烧效率。天然气温压、湿干基、组成及压缩因子需与供方背景立方米基准兼容；未知时背景链接未完成。 |
| emissions_basis | all elementary outputs | Mass | kg | 浓度、流量和时长先统一温压湿干及采样基准；报告各实际物种质量。NOx当量不是NO或NO2质量；分来源CO2／CO／CH4，不重复总量与分项。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已送达厂界的未处理非针叶原木、实际供货电／气／水 |
| starting_condition_role | 前景接收点；并非零上游负荷 |
| product_classification_scope | CPC34510的限定干馏未压块木炭子集 |
| recursive_input_rule | 内部粉炭／木材／尾气回用记实物账，不能作为新的外部参考输出；外购木炭不属于本原木炭化路线 |
| upstream_dataset_requirement | 木材经营／采伐、到林道及进厂运输，地域年份电网、管输气和水供给的相容背景；逐一披露缺口 |
| disclosure | 设备、炭化及供热燃料、控制装置、水去向、内部链接、单产品状态、前景／背景责任、异常运行 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_stages | retort_unit | 纳入原木加工、干燥、干馏、尾气供热／处理、冷却、筛分、场内装运；合为一个前景单元但各阶段独立计量。内部链接两端同量。 | fao-industrial-charcoal-1985 |
| boundary_emissions | retort_unit | 计处理后排出及无组织泄漏、启停和故障；捕集液体／粉尘和内部燃气不能同时作为外排。WGC的BAT2、3和8用于有条件监测设计；不因CPC化工标签自动宣称欧盟法律适用或以BAT限值代实测。 | epa-charcoal-1995; jrc-wgc-2023 |
| boundary_exclusions | applicability | 仅本单产品内部热回收路线；发现商业化学回收、粉炭销售、供热外送、外购蒸汽、其他燃料或直接液态排放时停止适用性判定，先补足独立计量及具体方法。 | fao-industrial-charcoal-1985; profagus-retort-biochemicals |

### 实物核对与分析覆盖

保留未分配的开闭库存及阶段转移账，逐项覆盖接收原木、干燥／干馏装料、验收及拒收木炭、细粉、水相冷凝液、溶解及分离焦油、不可凝干馏气、辅助燃料、冷却水和捕集残渣。实际燃烧空气及其水分、烟气通量／组成和水蒸气排出采用兼容时段及温压基准。内部转移在发送与接收端同量；只有实际外部交换进入归一化清单。产品中残留、冷凝液中溶解、倾析分离、燃烧或排出的焦油分别记录去向，不能按化学回收实例推定数量。独立转移的焦油废物或任何新增实际产品须有自己的具体交换及适用性评估，不得藏入水相冷凝液行（fao-industrial-charcoal-1985，2.4–2.6及2.9.2）。

逐批保留实测水分、灰分、挥发分及其湿／干检测基准；工业分析差减所得固定碳不是元素碳测量。采用有记录的代表性干木材、木炭、焦油和残渣元素分析及气体组成实测，独立核对C、H、O守恒，涵盖水、助燃氧及库存变化。水账区分原木／空气水分、冷却补水与反应生成水，核对产品、冷凝液、废水和蒸气中的实测水。热解及燃烧生成水用阶段实测及H/O守恒归属；未分辨归属和差额不确定性须披露，不能强行闭合、将全部冷凝水当作原木水分，或采用通用木材分子式及反应水产率。逐种基质记录实验室方法、采样、校准、回收率及不确定性（fao-industrial-charcoal-1985，2.3–2.6及2.9.1）。

分配前保留高位热值基准热量账：记录实际木材、木炭、干馏气及焦油／冷凝液燃料的实测高位热值及水分基准；在同一声明约定下核对辅助供热及电力、内部热回收、显热／潜热、反应热、产品留存能量、库存变化和损失。说明量热或热量计量方法及高低位热值间的换算。数据库电力属性名称不使电力成为可燃燃料；FAO热值实例及能量图不能作默认值。内部回收热是转移，不是避免产品信用（fao-industrial-charcoal-1985，2.6及2.9.1）。

针对实际处理后废气、泄漏及捕集相选择有记录的采样和分析方法。WGC的BAT8给出有条件的EN／等效科学质量方法框架，不是通用干馏物种分析方法。须证明分析物／基质覆盖、采样位置及持续时间、回收率／空白、校准、检出限及不确定性。总有机碳不能填作甲醇、乙醇、丙酮或乙酸质量；NOx当量不能确立独立NO／NO2质量。分别记录蒸气、气溶胶、可凝结部分及互斥粒径实测；EPA压块控制和未控制窑炉因子不能提供干馏粒径份额或捕集效率。捕集与排出部分独立实测，核对相态重叠，将新增检出物种保留为原子交换。分析覆盖无支持时，数据包不完整（epa-charcoal-1995，10.7.2；jrc-wgc-2023，BAT2、3及8）。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retort_unit | 原木接收到木炭散装装运的聚合单元 | required | 本稿限定路线 | foreground | charcoal_output |

各有条件清单行仅在实际发生时填量；不存在需有设备／测量证据，不以未测量作为零。清单不是固定配方。对监测发现的其他特定排放物，须追加单物种原子行及身份，不可把未分辨总VOC或POM当作一个已验证物种。

### 过程：工业干馏木炭（`retort_unit`）

#### 输入

##### 产品流

###### 非针叶树木柴 (`wood_input`)

在生产者厂界按实际天然含水状态接收未处理非针叶原木；逐批净质量配对水分、树皮、灰分／泥沙污染及元素分析基准。实物账区分炭化装料、外部木材燃烧供热和未炭化返料。林道供货身份须另有进厂运输链接。排除处理木材和胶合板材。

- 选定流：非针叶树木柴 `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_wood采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_wood
- 来源：fao-industrial-charcoal-1985

###### 交流电 (`electricity_input`)

电动搬运、切割、风机和筛分消耗的外购低压（<1千伏）电网平均交流电。核对实际接入点及供方地域和年份；其他电压供货须另核身份。计量千瓦时按3.6换算为兆焦，不把电力作为燃烧燃料。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：由cp_utilities采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_utilities
- 来源：fao-industrial-charcoal-1985

###### 气态天然气 (`gas_input`)

管输气态天然气仅用于记录明确的启动或补充供热。体积须有温度、压力、湿干基、组成及压缩因子，并核对供方／背景立方米基准；次级质量属性不是密度测量。不规定固定热值或甲烷比例。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：由cp_utilities采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_utilities
- 来源：fao-industrial-charcoal-1985

###### 自来水 (`water_input`)

实际使用的外购处理后自来水，用于冷却补水和清洗。入口计量一次；循环冷却水为内部转移。体积转质量采用有记录的当地水密度，不把数据库次级换算作为通用默认值。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_water采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_water
- 来源：fao-industrial-charcoal-1985

#### 输出

##### 产品流

###### 木炭 (`charcoal_output`)

散装装运点唯一的验收冷却筛分未压块木炭输出，按声明的交付水分计量。排除容器皮重、不合格粉炭及其他产品。广义身份包含木炭；附带活性炭描述不授权活化路线或纯碳假设。

- 选定流：木炭 `d05420ab-1fe9-4a24-91fa-b877460920cc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：cp_product
- 来源：fao-industrial-charcoal-1985

##### 废物流

###### 废弃未压块木炭细粉 (`charcoal_fines_waste`)

仅计送往场外废物处理的收集粉炭；记录粒径、水分、灰分、污染及接收方。内部返料不是外排废物或空气排放。作为产品出售时改变本稿声明的单产品路线。

- 选定流：废弃未压块木炭细粉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_residues采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_residues
- 来源：fao-industrial-charcoal-1985

###### 废弃木材炭化木醋冷凝液 (`condensate_waste`)

一股收集的水相热解冷凝液，记录实际焦油、有机酸、醇和水组成；不是纯乙酸或纯甲醇。仅计场外废物转移，不计内部燃烧冷凝液。

- 选定流：废弃木材炭化木醋冷凝液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_residues采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_residues
- 来源：fao-industrial-charcoal-1985

###### 干馏供热木材燃烧灰 (`wood_ash_waste`)

实际辅助木材燃烧产生灰时纳入；与保留在产品中的灰分和捕集粉炭分开称量，记录水分、矿物组成及接收方。

- 选定流：干馏供热木材燃烧灰
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_residues采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_residues
- 来源：fao-industrial-charcoal-1985

###### 木炭冷却清洗废水 (`wastewater_output`)

实际产生时，纳入送往场外处理的一股独立冷却清洗废水；记录水质量、溶解／悬浮组分、浓度和接收处理。本文不覆盖直接淡水排放。独立收集的冷凝液不得在此重复计入。

- 选定流：木炭冷却清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_water采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_water
- 来源：fao-industrial-charcoal-1985

##### 基本流

###### 二氧化碳（生物源） (`co2_biogenic`)

木材／尾气燃烧后到达室外空气的生物源二氧化碳；无论温室气体报告是否排除，均保留在生命周期清单中。区分产品碳、内部燃气碳与实际排放。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 二氧化碳（化石源） (`co2_fossil`)

实际使用天然气时的化石源二氧化碳；不得把全部烟囱二氧化碳映射为生物源。依据燃料碳实测值及兼容监测进行来源区分。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 一氧化碳（生物源） (`co_biogenic`)

木材热解、燃气燃烧及泄漏后残余的生物源一氧化碳；仅计实际跨越环境边界的部分。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 一氧化碳（化石源） (`co_fossil`)

天然气燃烧残余化石源一氧化碳，在检出或有方法定量时纳入；不得重复计入已分来源的一氧化碳总量。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 甲烷 (生物源) (`methane_biogenic`)

热解及未燃木煤气的生物源甲烷，计处理后排放及泄漏；内部燃气循环不是排放。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 甲烷 (化石源) (`methane_fossil`)

实际适用的管输天然气泄漏或燃烧逃逸化石源甲烷；延迟排放校正流不是该交换。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 一氧化氮 (`nitrogen_monoxide`)

到室外空气的实际一氧化氮质量，与二氧化氮及氧化亚氮区分。按二氧化氮当量报告的氮氧化物，未有物种分辨实测及明确换算时不能填入本行。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 二氧化氮 (`nitrogen_dioxide`)

到室外空气的实际二氧化氮质量。不能在一氧化氮及二氧化氮之外另加氮氧化物总量交换；仅有氮氧化物总量时，保留物种／基准未决，不假定为零。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 颗粒物 (PM2.5) (`pm_fine`)

实际废气及搬运监测的排出PM2.5。捕集粉尘不是排放颗粒物；说明可过滤／可凝结覆盖范围。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 颗粒物 (PM2.5 - PM10) (`pm_coarse`)

排出互斥PM2.5至PM10区间，不是累积PM10。仅由兼容的配对监测推导；不能从总颗粒物虚构粒径比例。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 颗粒物（> PM10） (`pm_large`)

排出大于PM10的颗粒物，与两个较小区间互斥。总颗粒物核对须涵盖可凝结部分；化学物种分辨的气溶胶质量不得重复计入。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 甲醇 (`methanol_air`)

处理后残留或泄漏的甲醇蒸气，CAS67-56-1；不是捕集冷凝液中的甲醇含量。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 乙酸 (`acetic_acid_air`)

实际排放的乙酸蒸气，CAS64-19-7；排除已收集木醋液及颗粒物基准中已经核算的酸性气溶胶。

- 选定流：乙酸 `08a91e70-3ddc-11dd-92c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 乙烷 (`ethane_air`)

实际由热解气排出的乙烷蒸气，CAS74-84-0；采用物种特定监测，不把总挥发性有机物作为乙烷。

- 选定流：乙烷 `4d9a8790-3ddd-11dd-9219-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 乙醇 (`ethanol_air`)

实际排出的乙醇蒸气，CAS64-17-5；来源筛查只建立潜在物种，不建立正排放量。

- 选定流：乙醇 `08a91e70-3ddc-11dd-9349-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 丙酮 (`acetone_air`)

实际排出的丙酮蒸气，CAS67-64-1；捕集冷凝液组成与空气交换分开。

- 选定流：丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 氢 (`hydrogen_air`)

热解气中逸出的氢，CAS1333-74-0；计量逸出部分，不计内部燃烧燃气。

- 选定流：氢 `08a91e70-3ddc-11dd-949c-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

###### 水蒸气 (`water_vapour_air`)

木材干燥、炭化、燃烧及冷却后到室外空气的水蒸气；利用实测水及C/H/O账分别核对木材水分、热解反应生成水、燃烧生成水和冷却损失，不把捕集冷凝液作为蒸气重复计入。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由cp_air采集并按同周期验收交付净木炭质量归一；每 1 kg 参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：cp_air
- 来源：epa-charcoal-1995; fao-industrial-charcoal-1985; jrc-wgc-2023

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_single_product | retort_unit | 本稿路线只有验收木炭为商业产品；全部相应外部负荷归木炭，不因内部燃气热回收给替代信用。实物账保留所有实际输出和损失。 | jrc-ilcd-2010; fao-industrial-charcoal-1985 |
| allocation_physical_ledger | physical_balance | 物理木材、水、碳及热量平衡不乘分配份额；内部循环不得变成新增物料或免费输出。不能把木醋液当纯酸，把焦油当纯组分，或按潜在成分定共产品产量。 | fao-industrial-charcoal-1985 |
| allocation_scope_change | commercial_cooutputs | 如有商业化学产品、粉炭或净外送热，先重新界定路线并分拆独立计量；不可分过程需按目标／范围选择和论证物理因果或后续适当准则，披露敏感性。本稿不给质量份额或价格默认值。 | jrc-ilcd-2010; profagus-retort-biochemicals |

## 8. 前景数据采集、计算与质量规则

所有外部行采用同场址、同路线、同产品状态／等级的一个完整匹配报告池，纳入失败及零产出运行、返工、启停与清洗。保留未经归一化的期间原始总量、阶段转移、期初／期末库存及在制品（WIP），并保留其可归属负荷。统一分母Q是验收装运净木炭千克，库存、在制品、拒收量和细粉另账核对。报告池外生产的期初库存从Q排除，或携带其匹配的以前生产负荷；不得用不匹配装运量分摊本期负荷或遗漏失败运行负荷。零产出子时段的负荷保留在有据且Q为正的匹配池中；完整池无正Q时，每千克结果报告不可用，不报为零或除以零。逐批称量配对实测水分。各协议保留原始总量，aggregation_rule列仅说明最终每1千克输出基准。先核对实物总量和阶段归属，再仅应用一次campaign_normalization。 核对退回和再次验收后，每份验收净批次只确认一次；内部返工不构成新增成品产出。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | retort_unit | charcoal_output | 前景实测记录 | 批号、校准净称量、实测皮重、交付水分、粒径、灰／挥发分／固定碳及各基准、开闭库存、拒收量 | 装运校准称量；配对实验室水分及质量检测 | kg | 每批 | 声明完整代表周期及其起止日 | 实际场址及本路线设备 | 每 1 kg 参考流 | 校准、采样、批号、库存核对、缺失及不确定性记录 |
| cp_wood | retort_unit | wood_input | 前景实测记录 | 原木树种／处理状态、供方、接收净质量和水分、装料／外供热木材／返料、开闭库存、运输记录 | 校准接收及装料称量；代表性水分样本；物料批号追踪 | kg | 每接收批及炭化周期 | 声明完整代表周期及其起止日 | 实际场址及本路线设备 | 每 1 kg 参考流 | 校准、采样、批号、库存核对、缺失及不确定性记录 |
| cp_utilities | retort_unit | electricity_input; gas_input | 前景实测记录 | 电表／气表读数、阶段／设备／时长、接入电压、供方、电网年份、天然气温压湿干组成压缩因子及热值基准 | 分设备校准计量，核对账单及供方背景定义，启停单列 | MJ; m3 | 连续并逐周期汇总 | 声明完整代表周期及其起止日 | 实际场址及本路线设备 | 每 1 kg 参考流 | 校准、采样、批号、库存核对、缺失及不确定性记录 |
| cp_water | retort_unit | water_input; wastewater_output | 前景实测记录 | 入口质量或体积及密度、补水、内循环、冷却／清洗、废水质量／组分浓度、接收方 | 校准水表／罐称量及实验室样本，区分循环、外排及冷凝液 | kg | 连续及每废水移交批 | 声明完整代表周期及其起止日 | 实际场址及本路线设备 | 每 1 kg 参考流 | 校准、采样、批号、库存核对、缺失及不确定性记录 |
| cp_residues | retort_unit | charcoal_fines_waste; condensate_waste; wood_ash_waste | 前景实测记录 | 逐流净质量、皮重、水分／实际组成、内部回用、转移单、废物状态及接收处理 | 独立称量粉炭／冷凝液／供热灰；按批样本及接收文件核对 | kg | 每生成及转移批 | 声明完整代表周期及其起止日 | 实际场址及本路线设备 | 每 1 kg 参考流 | 校准、采样、批号、库存核对、缺失及不确定性记录 |
| cp_air | retort_unit | elementary outputs | 前景实测记录 | 物种／CAS／来源、出口及泄漏点、物种质量浓度或经核实换算、气体体积流量率F（m3／时间）或已积分体积V（m3）、时段／时间／启停故障、匹配温压湿干基准、粒径及凝结覆盖、检出限、NO与NO2分辨、燃料碳 | 代表性全过程出口与无组织监测，纳入异常事件；按emission_integration及实际物种／来源归属得到期间原始物种质量，再仅应用一次campaign_normalization。已积分气体体积不得再乘时间，不以AP42历史因子补零 | kg | 代表性全过程及每异常事件 | 声明完整代表周期及其起止日 | 实际场址及本路线设备 | 每 1 kg 参考流 | 校准、采样、批号、库存核对、缺失及不确定性记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | 对每个非参考外部流i，在上文定义的完整匹配池内核对期间原始可归属量X_i、库存、在制品及回用；仅计算一次q_i = X_i / Q。X_i尚未除以Q。保留全部匹配失败／零产出／返工负荷；内部转移不构成新增外部交换。charcoal_output保持恰好1千克。Q不为正时每千克结果不可用，不得删除失败运行或报告零负荷。 所有外部行采用同场址、同路线、同产品状态／等级的一个完整匹配报告池，纳入失败及零产出运行、返工、启停与清洗。保留未经归一化的期间原始总量、阶段转移、期初／期末库存及在制品（WIP），并保留其可归属负荷。统一分母Q是验收装运净木炭千克，库存、在制品、拒收量和细粉另账核对。报告池外生产的期初库存从Q排除，或携带其匹配的以前生产负荷；不得用不匹配装运量分摊本期负荷或遗漏失败运行负荷。零产出子时段的负荷保留在有据且Q为正的匹配池中；完整池无正Q时，每千克结果报告不可用，不报为零或除以零。逐批称量配对实测水分。各协议保留原始总量，aggregation_rule列仅说明最终每1千克输出基准。先核对实物总量和阶段归属，再仅应用一次campaign_normalization。 核对退回和再次验收后，每份验收净批次只确认一次；内部返工不构成新增成品产出。 | cp_product; cp_wood; cp_utilities; cp_water; cp_residues; cp_air | 由匹配池原始总量生成的归一化清单；Q不为正时不可用 | fao-industrial-charcoal-1985 |
| dry_yield | wood_input; charcoal_output | 逐批m_dry = m_wet × (1 − w_wet_basis)。分别报告干装料收率和包含外部木材供热消耗的干木材总耗；未转化回用独立列，勿重复消耗。 | cp_wood; cp_product | 干基诊断；不改变参考分母 | fao-industrial-charcoal-1985 |
| emission_integration | all elementary outputs | 期间原始物种质量按时间积分E_i = integral C_i(t) F(t) dt计算，其中C_i为物种质量浓度，F为气体体积流量率。气体时段体积V_j已作时间积分时，汇总流量加权时段浓度C_i,j与V_j的乘积，不得再将V_j乘以时长。仅在有据恒定或兼容时段平均基准下，才使用浓度乘体积流量率乘时段时长。浓度与流量匹配温压及湿干基准，明确换算单位为千克。匹配运行阶段及来源，披露检出限处理和未分辨物种缺口。 | cp_air; cp_utilities; cp_product | 同周期实际原始排放质量；随后仅应用一次campaign_normalization | jrc-wgc-2023; epa-charcoal-1995 |
| physical_balances | retort_unit | 保留湿质量、干木材、总碳、水和热量账；记录燃烧空气与烟气通量、反应生成水、产品及残渣碳、CO2／CO／CH4及其他含碳物、开闭库存和未测差额。内部燃气／冷凝液链接两端同量，不能同时作为外部燃料输入或空气排放。 | cp_wood; cp_product; cp_utilities; cp_water; cp_residues; cp_air | 未分配实物平衡及差额说明 | fao-industrial-charcoal-1985 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity | all inventory rows | 记录实际树种／路线／供货状态；UUID身份成功不代表背景数据完整。 | 供方原件、直接身份及数量基准核对 |
| completeness | retort_unit | 筛查全部外部交换及新增实测物种；缺测、未分辨、无精确UUID或不兼容背景逐项披露，不能宣称零或完整校验。 | 流程图、全周期监测、物理平衡及接收记录 |
| representativeness | retort_unit | 记录地点、设备、批次权重、季节、水分和启停负荷；单厂、历史FAO／EPA数据不用作行业默认量。 | cp_product; cp_wood; cp_utilities; cp_air |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | charcoal_output | 恰好一个产品参考输出：1千克净交付木炭；全部行与采集协议均用同一参考分母，按批水分限定；不混入包装皮重或固定碳质量。 | fao-industrial-charcoal-1985 |
| validation_boundary | retort_unit | 核对本路线排除项和现场设备；每种废物／排放是一行原子流，实际介质与来源及供方基准相容。未决身份或数量须显示，不能用邻近行业候选顶替。 | fao-industrial-charcoal-1985; jrc-wgc-2023 |
| validation_emissions | elementary outputs | 三个粒径区间互斥；累计PM10／总PM仅为核对量不额外加和；NOx汇总须有NO／NO2分辨，N2O不含在二者内；总VOC／POM不能替代实际物种。不能删除生物CO2或重复捕集与排出物。 | epa-charcoal-1995; jrc-wgc-2023 |
| validation_balances | retort_unit | 保留第5节规定的未分配库存、相态、水、独立C/H/O及高位热值基准热量账、内部回用等量链接及差额；缺失浓度或流量、未兼容天然气体积、未落实废物接收或未分辨来源时，数据包校验不完整。 | fao-industrial-charcoal-1985 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 本稿限定的交付木炭生产清单；背景链接须先完成数量兼容 |
| allowed_use | 声明树种／路线／水分／等级匹配的木炭输入 |
| excluded_use | 活性炭性能、压块配方、土壤碳封存信用、纯碳替代、其他路线及直接液态排放 |
| required_metadata | 参考限定信息、场址及周期、单产品状态、排放介质／来源、供方及数量基准、全部废物去向 |
| required_quality_disclosure | 实测覆盖、物理平衡差额、身份／物种／背景未决、代表性和不确定性；未实测不是零 |
| update_trigger | 原料或路线、共产品或外送热、质量等级、水分、电压／供方、控制／排放及废物接收条件改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-34510` | `official_guidance` | UNSD CPC Version 3.0, subclass 34510 — Wood charcoal. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34510 | 只支持分类标签；不确立工艺、纯度或数量。 |
| `fao-industrial-charcoal-1985` | `handbook` | FAO Forestry Paper 63, Industrial charcoal making (1985), chapters 2 and 3. https://www.fao.org/4/X5555E/x5555e03.htm ; https://www.fao.org/4/X5555E/x5555e04.htm | 2.3收率及计量；2.4–2.8炭化／热回收；2.9.1产品质量／组成／高位热值基准；2.9.2水相及分离焦油；3.2–3.4干馏。历史技术实例仅定物理方法，不移植温度、产率、配方或能耗默认值。 |
| `epa-charcoal-1995` | `official_guidance` | US EPA AP-42, Section 10.7 Charcoal, September 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c10s07.pdf | 10.7.1制造、10.7.2排放；印刷10.7-1、10.7-5及10.7-6。用于物种／控制筛查。表10.7-1/2为历史未控制且E级因子，不是本干馏设备排放默认值，压块数量排除。 |
| `jrc-wgc-2023` | `official_guidance` | European Commission JRC, WGC BREF (2023), Scope and BAT 2, 3, 8. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/WGC_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 印刷xx–xxii及267–274（PDF26–28及295–302）；化工范围条件审查后用于废气清单、异常工况、匹配监测设计；不自动断言法律适用，不采纳限值、排除CO2统计或频率作为LCI默认值。 |
| `profagus-retort-biochemicals` | `literature` | proFagus, Biochemicals — Products for industry, producer primary webpage. https://profagus.de/en/biochemicals/ | 单厂木材干馏及化学回收原件，用于明确需要排除或重新界定的商业副产品路线；环保宣传不是实测零排放或一般产率证据。 |
| `jrc-ilcd-2010` | `official_guidance` | JRC ILCD Handbook, General guide for LCA — Detailed guidance, first edition March 2010, 7.9.3. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 印刷257/PDF277；不可分多功能过程的物理因果及后续市场价值准则，受目标／范围约束；本单产品路线不借内部燃气创造共产品信用。 |
