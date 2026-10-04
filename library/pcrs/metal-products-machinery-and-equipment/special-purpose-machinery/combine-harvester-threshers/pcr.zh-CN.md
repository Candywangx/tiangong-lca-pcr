---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.combine-harvester-threshers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 联合收割脱粒机

## 1. 范围与适用性

本方法覆盖将作物收获与脱粒、分离及清选结合的完整机器，包括自走式或牵引式。转子式、传统滚筒与逐稿器式、滚筒/转子混合式均为有条件配置，不以单一代表路线强加于类别。排除独立脱粒机、单独供应割台/零件、割草机、打捆机、根茎收获机、不含谷物综合脱粒的饲料收获机、拖拉机及固定收获后清理/分级工厂。不带另供割台交付的基本联合收割机须按该状态声明，不暗中将割台加入质量。声明产品随货割台仅计一次。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.combine-harvester-threshers |
| classification_refs | CPC 3.0:44122 |
| covered_products | 联合收割脱粒机 |
| excluded_products | 独立脱粒机；独供零件/割台；其他收获机械；拖拉机 |
| representative_product | 具有实际收获接口的声明验收谷物联合收割机 |
| production_route | 有条件结构制造/连接/涂装；外购或厂内自制系统；装配/加注/试验/发运 |
| market_state | 制造出口验收新完整机器、声明附件及保留加注物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造验收完整联合收割脱粒机 |
| How much | 1 kg |
| How well | 配置特定机械、液压及电气验收；不承诺田间产出 |
| How long or cycle | 工厂出口一次供应；不设服役寿命默认值 |
| reference_flow_link | `combine_harvester` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 联合收割机/脱粒机 `09941fc2-9cbe-480c-94f1-533065c78b66` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 工厂与期间；型号/配置；自走式或牵引式；作物与收获附件；交付割台是否包含；转子、逐稿器或混合架构；轮胎/履带及坡地系统；发动机或 PTO 驱动；驾驶室、空调、控制与蓄电池；交付加注量；验收净质量；试验协议；自制/外购边界；包装 |

声明全部限定信息。对同一期间与同一配置：N 为验收机器数量，D 为校准验收净质量之和，M = D/N，Q 为含不合格/返工负荷的可归属期间交换。先求 q_item = Q/N，再求 q_ref = q_item/M = Q/D。各配置分层分开。D 排除不合格机器、运输包装、复用工装及试验作物；包含声明交付附件与保留加注物。厂商工作/基本质量不是 D 的替代值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| species_basis | 物理材料与物种记录 | Mass | kg | 分别针对各含金属/物种 j，以各流质量乘其自身匹配化验并声明干湿基准。纳入购入物料、期初期末库存、合格产品、废料、粉尘、焊渣、污泥、废水及环境排放和反应转化。不将废料/污泥总质量等同金属含量，不将进料化验套用于产品/废物。 |
| water_balance | 物理水及水分记录 | Mass | kg | 核对实际水：外部水、进料水分与期初库存及反应生成水之和等于随货保留水、废物/废水水分、实测蒸发、反应消耗水及期末库存。配对并抵消内部回流。各水分项分别有匹配化验、基准及不确定性；循环水不是外部投入。 |
| carrier_conversion | 能源行 | 能量 | kWh; MJ | 分开保留计量电力；1 kWh = 3.6 MJ。气体体积须实际组成、低位热值及参考温压；流体体积须实际密度。不将材料化验应用于电力/运输。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际购入材料与总成到厂；识别成品/中间状态及供应方工序 |
| starting_condition_role | 前景供应接口 |
| product_classification_scope | 联合收割脱粒机 |
| recursive_input_rule | 购入同类完整机器单独携带一次供应负荷；内部返工不是另一个购入参考产出 |
| upstream_dataset_requirement | 各供应材料、模块、公用工程与处理须匹配地域/年份/技术及实际运输 |
| disclosure | 工厂与期间；型号/配置；自走式或牵引式；作物与收获附件；交付割台是否包含；转子、逐稿器或混合架构；轮胎/履带及坡地系统；发动机或 PTO 驱动；驾驶室、空调、控制与蓄电池；交付加注量；验收净质量；试验协议；自制/外购边界；包装 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| factory_gate | all processes | 纳入截至出口实际接收、制造、装配、加注、验收、搬运、污染治理及交付准备。后续收获服务、农场燃料、作物产量、磨损更换与报废在下游单独建模。 |  |
| make_buy | assembly | 每个实体子系统保留 BOM 自制/外购矩阵：供应模块边界、自有投入/工序、保留加注及随货配置。外购发动机/电机/变速器的嵌入金属、机加工及供应加注仅计一次，不再加入组成原料。自制驾驶室、输送槽、粮箱或分离系统须实际材料、零件及工序卡。每个另跨边界电机、齿轮、传感器、轮胎、轴承或化学品增设具名原子行；总成名称不得隐藏购入零件。 | `deere-s-series-4592208`; `claas-trion-walker`; `claas-trion-hybrid` |
| paint_kit_boundary | joining_coating | 仅在分别跨边界时分记基料树脂与固化剂：liquid 为不含固化剂的基料树脂。若供应产品为完整双组分套装，以包含实际固化剂一次数量及上游边界的套装卡替换两张分卡。外购预涂模块的涂层上游仅计一次；对照采购及组成校验套装/基料/固化剂互斥。 | |
| delivery_configuration | dispatch | 声明割台包含/不含；履带或装配车轮、坡地设备、驾驶室/空调及控制、后处理与流体。牵引配置纳入实际牵引杆/PTO，排除供动力拖拉机及后续拖拉机燃料；不强加柴油机或驾驶室。复用发运工装从 M 排除，但纳入其可归属服务、损耗与维护负荷。资本排除须声明依据与覆盖。 | `claas-history`; `deere-s-series-4592208` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 结构制造与机加工 | conditional | 仅实际厂内板/管切割、成形、机加工及热处理；外购成品结构保留供应方负荷。 | 前景生产 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| joining_coating | 连接、预处理与涂装 | conditional | 实际焊接、清洗、喷丸、液体或粉末涂装与固化；委外工序按购入接口核算。 | 前景生产 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| assembly | 系统及整机装配 | required | 核对配置特定结构、收获、脱粒、分离、清选、输送、行走、驱动及控制系统。 | 前景生产 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| filling_testing | 出厂加注与验收试验 | required | 实际出口前加注及机械/液压/电气验收；仅实际实施时纳入带作物负载试验。 | 前景生产 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| dispatch | 交付准备 | required | 声明工厂出口产品与附件，实际防护、包装与搬运。 | 前景生产 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| shared_services | 共享公用工程与污染控制 | conditional | 仅未分配剩余服务负荷，及实际废物/废水处理与治理介质。 | 前景生产 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

### 过程：结构制造与机加工 (`fabrication`)

#### 输入

##### 产品流

###### 碳钢结构板 (`steel_plate`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 碳钢结构板
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_steel_plate。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_plate`
- 来源:

###### 碳钢结构管 (`steel_tube`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 碳钢结构管
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_steel_tube。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_tube`
- 来源:

###### 合金钢轴用棒材 (`steel_bar`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 合金钢轴用棒材
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_steel_bar。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_bar`
- 来源:

###### 铝制外罩板 (`al_sheet`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 铝制外罩板
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_al_sheet。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_al_sheet`
- 来源:

###### 机加工冷却乳化液 (`coolant`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 机加工冷却乳化液
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_coolant。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_coolant`
- 来源:

###### 购入电网电力 (`fabrication_electricity`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 购入电网电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fabrication_electricity`
- 来源:

###### 工艺供热用天然气 (`fabrication_gas`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 工艺供热用天然气
- 流属性 / 单位: 能量 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication_gas。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fabrication_gas`
- 来源:

#### 输出

##### 废物流

###### 碳钢加工废料 (`steel_scrap`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 碳钢加工废料
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_steel_scrap。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_scrap`
- 来源:

###### 铝加工废料 (`al_scrap`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 铝加工废料
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_al_scrap。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_al_scrap`
- 来源:

###### 废机加工冷却乳化液 (`spent_coolant`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 废机加工冷却乳化液
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_spent_coolant。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_coolant`
- 来源:

##### 基本流

###### 化石二氧化碳，排入空气 (`fabrication_co2`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 化石二氧化碳，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication_co2。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fabrication_co2`
- 来源:

### 过程：连接、预处理与涂装 (`joining_coating`)

#### 输入

##### 产品流

###### 碳钢焊丝 (`weld_wire`)

本具名化学品须实际工单、供应方安全/配方资料及领料记录确认；历史许可仅证明有条件工艺路线，不证明该化学身份。

仅在场址所选路线与实际配方适用时纳入；本卡不表示所有工厂均采用此化学品。各不同实际组分另设卡片，不以本具名物质代替未知配方。

- 选定流: 碳钢焊丝
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_weld_wire。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_weld_wire`
- 来源:

###### 氩保护气体 (`argon`)

本具名化学品须实际工单、供应方安全/配方资料及领料记录确认；历史许可仅证明有条件工艺路线，不证明该化学身份。

仅在场址所选路线与实际配方适用时纳入；本卡不表示所有工厂均采用此化学品。各不同实际组分另设卡片，不以本具名物质代替未知配方。

- 选定流: 氩保护气体
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_argon。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_argon`
- 来源:

###### 二氧化碳保护气体 (`co2_shield`)

本具名化学品须实际工单、供应方安全/配方资料及领料记录确认；历史许可仅证明有条件工艺路线，不证明该化学身份。

仅在场址所选路线与实际配方适用时纳入；本卡不表示所有工厂均采用此化学品。各不同实际组分另设卡片，不以本具名物质代替未知配方。

- 选定流: 二氧化碳保护气体
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_co2_shield。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_shield`
- 来源:

###### 喷丸钢砂 (`grit`)

本具名化学品须实际工单、供应方安全/配方资料及领料记录确认；历史许可仅证明有条件工艺路线，不证明该化学身份。

仅在场址所选路线与实际配方适用时纳入；本卡不表示所有工厂均采用此化学品。各不同实际组分另设卡片，不以本具名物质代替未知配方。

- 选定流: 喷丸钢砂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_grit。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_grit`
- 来源:

###### 氢氧化钠清洗剂 (`naoh`)

本具名化学品须实际工单、供应方安全/配方资料及领料记录确认；历史许可仅证明有条件工艺路线，不证明该化学身份。

仅在场址所选路线与实际配方适用时纳入；本卡不表示所有工厂均采用此化学品。各不同实际组分另设卡片，不以本具名物质代替未知配方。

- 选定流: 氢氧化钠清洗剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_naoh。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_naoh`
- 来源:

###### 机械用聚酯粉末涂料 (`powder`)

本具名化学品须实际工单、供应方安全/配方资料及领料记录确认；历史许可仅证明有条件工艺路线，不证明该化学身份。

仅在场址所选路线与实际配方适用时纳入；本卡不表示所有工厂均采用此化学品。各不同实际组分另设卡片，不以本具名物质代替未知配方。

- 选定流: 机械用聚酯粉末涂料
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_powder。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_powder`
- 来源:

###### 聚氨酯机械涂料基料树脂 (`liquid`)

本具名化学品须实际工单、供应方安全/配方资料及领料记录确认；历史许可仅证明有条件工艺路线，不证明该化学身份。

仅在场址所选路线与实际配方适用时纳入；本卡不表示所有工厂均采用此化学品。各不同实际组分另设卡片，不以本具名物质代替未知配方。

- 选定流: 聚氨酯机械涂料基料树脂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_liquid。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_liquid`
- 来源:

###### 聚异氰酸酯涂料固化剂 (`hardener`)

本具名化学品须实际工单、供应方安全/配方资料及领料记录确认；历史许可仅证明有条件工艺路线，不证明该化学身份。

仅在场址所选路线与实际配方适用时纳入；本卡不表示所有工厂均采用此化学品。各不同实际组分另设卡片，不以本具名物质代替未知配方。

- 选定流: 聚异氰酸酯涂料固化剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_hardener。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hardener`
- 来源:

###### 二甲苯清洗溶剂 (`solvent`)

本具名化学品须实际工单、供应方安全/配方资料及领料记录确认；历史许可仅证明有条件工艺路线，不证明该化学身份。

仅在场址所选路线与实际配方适用时纳入；本卡不表示所有工厂均采用此化学品。各不同实际组分另设卡片，不以本具名物质代替未知配方。

- 选定流: 二甲苯清洗溶剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_solvent`
- 来源:

###### 购入电网电力 (`joining_coating_electricity`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 购入电网电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining_coating_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_joining_coating_electricity`
- 来源:

###### 工艺供热用天然气 (`joining_coating_gas`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 工艺供热用天然气
- 流属性 / 单位: 能量 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining_coating_gas。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_joining_coating_gas`
- 来源:

#### 输出

##### 废物流

###### 捕集焊接过滤粉尘 (`weld_dust`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 捕集焊接过滤粉尘
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_weld_dust。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_weld_dust`
- 来源: `new-holland-permit-1995`

###### 水帘漆房污泥 (`paint_sludge`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 水帘漆房污泥
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint_sludge。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_paint_sludge`
- 来源: `new-holland-permit-1995`

###### 废漆房干式过滤器 (`spent_filter`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 废漆房干式过滤器
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_spent_filter。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_filter`
- 来源: `new-holland-permit-1995`

###### 废聚酯粉末涂料 (`powder_waste`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 废聚酯粉末涂料
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_powder_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_powder_waste`
- 来源: `new-holland-permit-1995`

###### 外送处理的回收二甲苯溶剂 (`solvent_waste`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 外送处理的回收二甲苯溶剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_solvent_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_solvent_waste`
- 来源: `new-holland-permit-1995`

##### 基本流

###### 二甲苯，排入空气 (`xylene_air`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 二甲苯，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_xylene_air。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_xylene_air`
- 来源:

###### 小于10微米颗粒物，排入空气 (`weld_pm`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 小于10微米颗粒物，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_weld_pm。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_weld_pm`
- 来源:

###### 化石二氧化碳，排入空气 (`joining_coating_co2`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 化石二氧化碳，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining_coating_co2。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_joining_coating_co2`
- 来源:

### 过程：系统及整机装配 (`assembly`)

#### 输入

##### 产品流

###### 购入联合收割机结构机架 (`frame`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入联合收割机结构机架
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_frame`
- 来源: `deere-s-series-4592208`

###### 购入完整柴油发动机 (`engine`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入完整柴油发动机
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_engine。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_engine`
- 来源: `deere-s-series-4592208`

###### 购入联合收割机行走变速器 (`transmission`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入联合收割机行走变速器
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_transmission。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_transmission`
- 来源: `deere-s-series-4592208`

###### 购入联合收割机 PTO 传动系统 (`pto`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入联合收割机 PTO 传动系统
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_pto。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pto`
- 来源: `deere-s-series-4592208`

###### 购入谷物切割割台 (`header`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入谷物切割割台
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_header。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_header`
- 来源: `deere-s-series-4592208`

###### 购入玉米收获割台 (`maize_head`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入玉米收获割台
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_maize_head。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_maize_head`
- 来源: `deere-s-series-4592208`

###### 购入联合收割机输送槽 (`feeder`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入联合收割机输送槽
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_feeder。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feeder`
- 来源: `deere-s-series-4592208`

###### 购入转子脱粒分离模块 (`rotor`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入转子脱粒分离模块
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_rotor。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rotor`
- 来源: `deere-s-series-4592208`

###### 购入切向脱粒滚筒模块 (`drum`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入切向脱粒滚筒模块
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_drum。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_drum`
- 来源: `deere-s-series-4592208`

###### 购入逐稿器分离模块 (`walker`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入逐稿器分离模块
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_walker。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_walker`
- 来源: `deere-s-series-4592208`

###### 购入混合式二次分离转子模块 (`hybrid_rotor`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入混合式二次分离转子模块
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_hybrid_rotor。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hybrid_rotor`
- 来源: `deere-s-series-4592208`

###### 购入联合收割机清选筛及风机模块 (`cleaner`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入联合收割机清选筛及风机模块
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_cleaner。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cleaner`
- 来源: `deere-s-series-4592208`

###### 购入联合收割机粮箱 (`tank`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入联合收割机粮箱
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_tank。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_tank`
- 来源: `deere-s-series-4592208`

###### 购入卸粮螺旋模块 (`auger`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入卸粮螺旋模块
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_auger。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_auger`
- 来源: `deere-s-series-4592208`

###### 购入秸秆切碎模块 (`chopper`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入秸秆切碎模块
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_chopper。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_chopper`
- 来源: `deere-s-series-4592208`

###### 购入装配农用车轮与轮胎 (`wheel`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入装配农用车轮与轮胎
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wheel。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wheel`
- 来源: `deere-s-series-4592208`

###### 购入联合收割机橡胶履带底盘 (`track`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入联合收割机橡胶履带底盘
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_track。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_track`
- 来源: `deere-s-series-4592208`

###### 购入转向桥 (`axle`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入转向桥
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_axle。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_axle`
- 来源: `deere-s-series-4592208`

###### 购入液压泵 (`hydraulic`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入液压泵
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_hydraulic。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hydraulic`
- 来源: `deere-s-series-4592208`

###### 购入液压缸 (`cylinder`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入液压缸
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_cylinder。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cylinder`
- 来源: `deere-s-series-4592208`

###### 购入液压软管 (`hose`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入液压软管
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_hose。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hose`
- 来源: `deere-s-series-4592208`

###### 购入驾驶室模块 (`cab`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入驾驶室模块
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_cab。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cab`
- 来源: `deere-s-series-4592208`

###### 购入驾驶室空调模块 (`hvac`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入驾驶室空调模块
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_hvac。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hvac`
- 来源: `deere-s-series-4592208`

###### 购入电子整机控制器 (`controller`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入电子整机控制器
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_controller。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_controller`
- 来源: `deere-s-series-4592208`

###### 购入铜导体线束 (`harness`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入铜导体线束
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_harness。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_harness`
- 来源: `deere-s-series-4592208`

###### 购入操作显示器 (`display`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入操作显示器
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_display。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_display`
- 来源: `deere-s-series-4592208`

###### 购入 GNSS 接收机 (`gps`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入 GNSS 接收机
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_gps。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gps`
- 来源: `deere-s-series-4592208`

###### 购入铅酸启动蓄电池 (`battery`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入铅酸启动蓄电池
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_battery。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_battery`
- 来源: `deere-s-series-4592208`

###### 购入钢紧固件 (`fastener`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入钢紧固件
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fastener。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fastener`
- 来源: `deere-s-series-4592208`

###### 购入橡胶传动带 (`belt`)

匹配一项实际供应 BOM 项目与自制/外购状态。外购模块的嵌入材料/部件/加注物上游仅计一次；自制则以实际组成及工序卡代替模块输入。转子、逐稿器与混合模块、车轮/履带备选及割台类型均为配置特定项，不是累加默认项。

- 选定流: 购入橡胶传动带
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_belt。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_belt`
- 来源: `deere-s-series-4592208`

###### 购入电网电力 (`assembly_electricity`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 购入电网电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_assembly_electricity`
- 来源:

### 过程：出厂加注与验收试验 (`filling_testing`)

#### 输入

##### 产品流

###### 出厂验收用柴油 (`diesel`)

仅使用实际出口前消耗/加注量；分别记录留在交付整机的数量与燃烧、泄漏、排出或退回数量。识别实际流体化学品及外购模块已含加注量。试验作物为有条件实际批次，不是后续农场产量。

- 选定流: 出厂验收用柴油
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_diesel。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_diesel`
- 来源:

###### 出厂加注液压油 (`hydraulic_oil`)

仅使用实际出口前消耗/加注量；分别记录留在交付整机的数量与燃烧、泄漏、排出或退回数量。识别实际流体化学品及外购模块已含加注量。试验作物为有条件实际批次，不是后续农场产量。

- 选定流: 出厂加注液压油
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_hydraulic_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hydraulic_oil`
- 来源:

###### 柴油发动机出厂加注润滑油 (`engine_oil`)

仅使用实际出口前消耗/加注量；分别记录留在交付整机的数量与燃烧、泄漏、排出或退回数量。识别实际流体化学品及外购模块已含加注量。试验作物为有条件实际批次，不是后续农场产量。

- 选定流: 柴油发动机出厂加注润滑油
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_engine_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_engine_oil`
- 来源:

###### 变速器出厂加注齿轮油 (`gear_oil`)

仅使用实际出口前消耗/加注量；分别记录留在交付整机的数量与燃烧、泄漏、排出或退回数量。识别实际流体化学品及外购模块已含加注量。试验作物为有条件实际批次，不是后续农场产量。

- 选定流: 变速器出厂加注齿轮油
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_gear_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gear_oil`
- 来源:

###### 出厂加注乙二醇发动机冷却液 (`coolant_fill`)

仅使用实际出口前消耗/加注量；分别记录留在交付整机的数量与燃烧、泄漏、排出或退回数量。识别实际流体化学品及外购模块已含加注量。试验作物为有条件实际批次，不是后续农场产量。

- 选定流: 出厂加注乙二醇发动机冷却液
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_coolant_fill。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_coolant_fill`
- 来源:

###### 尿素水溶液柴油机尾气处理液 (`def`)

仅使用实际出口前消耗/加注量；分别记录留在交付整机的数量与燃烧、泄漏、排出或退回数量。识别实际流体化学品及外购模块已含加注量。试验作物为有条件实际批次，不是后续农场产量。

- 选定流: 尿素水溶液柴油机尾气处理液
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_def。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_def`
- 来源:

###### 驾驶室出厂充注 R134a 制冷剂 (`r134a`)

仅使用实际出口前消耗/加注量；分别记录留在交付整机的数量与燃烧、泄漏、排出或退回数量。识别实际流体化学品及外购模块已含加注量。试验作物为有条件实际批次，不是后续农场产量。

- 选定流: 驾驶室出厂充注 R134a 制冷剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_r134a。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_r134a`
- 来源:

###### 出厂验收试验用小麦籽粒 (`test_wheat`)

仅使用实际出口前消耗/加注量；分别记录留在交付整机的数量与燃烧、泄漏、排出或退回数量。识别实际流体化学品及外购模块已含加注量。试验作物为有条件实际批次，不是后续农场产量。

- 选定流: 出厂验收试验用小麦籽粒
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_wheat。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_wheat`
- 来源:

###### 购入电网电力 (`filling_testing_electricity`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 购入电网电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_filling_testing_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_filling_testing_electricity`
- 来源:

#### 输出

##### 废物流

###### 出厂试验废液压油 (`spent_oil`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 出厂试验废液压油
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_spent_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_oil`
- 来源:

###### 出厂试验废小麦籽粒 (`test_crop_waste`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 出厂试验废小麦籽粒
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_crop_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_crop_waste`
- 来源:

##### 基本流

###### 化石二氧化碳，排入空气 (`diesel_co2`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 化石二氧化碳，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_diesel_co2。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_diesel_co2`
- 来源:

###### 一氧化碳，排入空气 (`diesel_co`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 一氧化碳，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_diesel_co。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_diesel_co`
- 来源:

###### 一氧化氮，排入空气 (`diesel_no`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 一氧化氮，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_diesel_no。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_diesel_no`
- 来源:

###### 二氧化氮，排入空气 (`diesel_no2`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 二氧化氮，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_diesel_no2。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_diesel_no2`
- 来源:

###### R134a，排入空气 (`refrigerant_loss`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: R134a，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_refrigerant_loss。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_refrigerant_loss`
- 来源:

### 过程：交付准备 (`dispatch`)

#### 输入

##### 产品流

###### 木制运输支撑 (`wood_pack`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 木制运输支撑
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wood_pack。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wood_pack`
- 来源:

###### 聚乙烯运输防护膜 (`film_pack`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 聚乙烯运输防护膜
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_film_pack。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_film_pack`
- 来源:

###### 临时防腐油 (`rust_oil`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 临时防腐油
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_rust_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rust_oil`
- 来源:

###### 购入电网电力 (`dispatch_electricity`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 购入电网电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_dispatch_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dispatch_electricity`
- 来源:

#### 输出

##### 产品流

###### 联合收割机/脱粒机 (`combine_harvester`)

验收合格完整交付配置；净分母排除运输包装及不合格质量。仅包含声明随货附件与保留加注物。

- 选定流: 联合收割机/脱粒机 `09941fc2-9cbe-480c-94f1-533065c78b66`
- 流属性 / 单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源:

### 过程：共享公用工程与污染控制 (`shared_services`)

#### 输入

##### 产品流

###### 购入电网电力 (`shared_services_electricity`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 购入电网电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_shared_services_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_shared_services_electricity`
- 来源:

###### 购入工业工艺水 (`water`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 购入工业工艺水
- 流属性 / 单位: 体积 / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源:

#### 输出

##### 废物流

###### 外送处理工业废水 (`wastewater`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 外送处理工业废水
- 流属性 / 单位: 体积 / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wastewater。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源:

###### 含金属废水处理污泥 (`sludge`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 含金属废水处理污泥
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_sludge。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sludge`
- 来源:

##### 基本流

###### 水蒸气，排入空气 (`water_air`)

仅当该具体交换跨越实际路线边界时纳入；声明牌号、配方、供应接口与库存/退回状态。

- 选定流: 水蒸气，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water_air。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_air`
- 来源:

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint manufacturing | 优先细分；否则采用有据物理因果（工序时间、处理面积、机器/试验负荷）。经济后备须一致期间/价格与敏感性。保留未分配总量，不在未解释配置差异时仅按机器质量分配。 | `ef-allocation-2021` |
| rework_waste | all rows | Q 包含不合格/返工机器处理与复试；N 与 D 仅含合格产出。抵消内部转移，保留重复能源/材料损耗。实际外送废料与处理计一次，不自动获得避免金属抵扣。试验籽粒/秸秆为试验产出，不是默认机器联产品或农业产量。 | `ef-allocation-2021` |
| shared_residual | utilities | 各公用工程在同一场址期间/单位核对：购入、实际自发及期初储存之和等于已分配制造/涂装/装配/试验/发运使用、未分配剩余、外送及期末储存/损失。共享服务仅承担未分配剩余的因果份额。负剩余须核查期间、单位、库存及仪表不确定性，不截为零。购入热、自有燃料发能与回收转移分别记录。 计量实际回收试验室热量及配对内部转移；场址汇总抵消内部转移。仅按其导致的实际外购计量消耗减少外部热需求，不加入避免电力抵扣或第二次避免热量抵扣。若有外送，须单独计量去向及分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | combine_harvester | measurement_record | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收设备 | 同一报告期间 | 同一工厂及配置 | 每台验收净质量 | 校准；验收与 BOM；N 与 D 核对 |
| cp_steel_plate | fabrication | steel_plate | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_steel_tube | fabrication | steel_tube | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_steel_bar | fabrication | steel_bar | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_al_sheet | fabrication | al_sheet | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_coolant | fabrication | coolant | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_steel_scrap | fabrication | steel_scrap | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_al_scrap | fabrication | al_scrap | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_spent_coolant | fabrication | spent_coolant | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_weld_wire | joining_coating | weld_wire | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_argon | joining_coating | argon | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_co2_shield | joining_coating | co2_shield | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_grit | joining_coating | grit | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_naoh | joining_coating | naoh | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_powder | joining_coating | powder | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_liquid | joining_coating | liquid | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_hardener | joining_coating | hardener | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_solvent | joining_coating | solvent | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_weld_dust | joining_coating | weld_dust | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_paint_sludge | joining_coating | paint_sludge | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_spent_filter | joining_coating | spent_filter | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_powder_waste | joining_coating | powder_waste | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_solvent_waste | joining_coating | solvent_waste | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_xylene_air | joining_coating | xylene_air | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 测量治理后物种浓度及匹配排气流量/时间，加上单独有据的逸散量；核对物种库存、保留、回收、捕集与销毁。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_weld_pm | joining_coating | weld_pm | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 测量实际治理后粒径级分与排气量；捕集粉尘是单独废物，不是排放量。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_frame | assembly | frame | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_engine | assembly | engine | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_transmission | assembly | transmission | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_pto | assembly | pto | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_header | assembly | header | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_maize_head | assembly | maize_head | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_feeder | assembly | feeder | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_rotor | assembly | rotor | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_drum | assembly | drum | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_walker | assembly | walker | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_hybrid_rotor | assembly | hybrid_rotor | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_cleaner | assembly | cleaner | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_tank | assembly | tank | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_auger | assembly | auger | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_chopper | assembly | chopper | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_wheel | assembly | wheel | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_track | assembly | track | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_axle | assembly | axle | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_hydraulic | assembly | hydraulic | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_cylinder | assembly | cylinder | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_hose | assembly | hose | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_cab | assembly | cab | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_hvac | assembly | hvac | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_controller | assembly | controller | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_harness | assembly | harness | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_display | assembly | display | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_gps | assembly | gps | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_battery | assembly | battery | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_fastener | assembly | fastener | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_belt | assembly | belt | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_diesel | filling_testing | diesel | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_hydraulic_oil | filling_testing | hydraulic_oil | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_engine_oil | filling_testing | engine_oil | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_gear_oil | filling_testing | gear_oil | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_coolant_fill | filling_testing | coolant_fill | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_def | filling_testing | def | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_r134a | filling_testing | r134a | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_test_wheat | filling_testing | test_wheat | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_spent_oil | filling_testing | spent_oil | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_test_crop_waste | filling_testing | test_crop_waste | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_diesel_co2 | filling_testing | diesel_co2 | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用物种特定实际出厂试验/充注测量，匹配排气或泄漏数量与运行时间；燃料碳平衡仅支持碳核算，不能确定 CO 或 NO/NO2。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_diesel_co | filling_testing | diesel_co | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用物种特定实际出厂试验/充注测量，匹配排气或泄漏数量与运行时间；燃料碳平衡仅支持碳核算，不能确定 CO 或 NO/NO2。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_diesel_no | filling_testing | diesel_no | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用物种特定实际出厂试验/充注测量，匹配排气或泄漏数量与运行时间；燃料碳平衡仅支持碳核算，不能确定 CO 或 NO/NO2。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_diesel_no2 | filling_testing | diesel_no2 | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用物种特定实际出厂试验/充注测量，匹配排气或泄漏数量与运行时间；燃料碳平衡仅支持碳核算，不能确定 CO 或 NO/NO2。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_refrigerant_loss | filling_testing | refrigerant_loss | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用物种特定实际出厂试验/充注测量，匹配排气或泄漏数量与运行时间；燃料碳平衡仅支持碳核算，不能确定 CO 或 NO/NO2。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_wood_pack | dispatch | wood_pack | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_film_pack | dispatch | film_pack | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_rust_oil | dispatch | rust_oil | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 使用校准仪器称量领用、接收及外部退回；核对批次 BOM、期初期末库存、内部转移及不合格/返工。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_fabrication_electricity | fabrication | fabrication_electricity | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 采用匹配期间校准分表与因果分配；shared_services 仅接收已分配负荷之后剩余量，不再加整厂总量。识别电网供应方与电压。 | kWh | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_joining_coating_electricity | joining_coating | joining_coating_electricity | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 采用匹配期间校准分表与因果分配；shared_services 仅接收已分配负荷之后剩余量，不再加整厂总量。识别电网供应方与电压。 | kWh | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_assembly_electricity | assembly | assembly_electricity | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 采用匹配期间校准分表与因果分配；shared_services 仅接收已分配负荷之后剩余量，不再加整厂总量。识别电网供应方与电压。 | kWh | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_filling_testing_electricity | filling_testing | filling_testing_electricity | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 采用匹配期间校准分表与因果分配；shared_services 仅接收已分配负荷之后剩余量，不再加整厂总量。识别电网供应方与电压。 | kWh | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_dispatch_electricity | dispatch | dispatch_electricity | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 采用匹配期间校准分表与因果分配；shared_services 仅接收已分配负荷之后剩余量，不再加整厂总量。识别电网供应方与电压。 | kWh | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_shared_services_electricity | shared_services | shared_services_electricity | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 采用匹配期间校准分表与因果分配；shared_services 仅接收已分配负荷之后剩余量，不再加整厂总量。识别电网供应方与电压。 | kWh | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_fabrication_gas | fabrication | fabrication_gas | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 计量实际燃料数量、组成、参考温压、低位热值及燃烧器路线；供应天然气与购入热分开。 | MJ | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_fabrication_co2 | fabrication | fabrication_co2 | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 匹配实际燃料碳化验、消耗、燃烧状态及其他物种保留碳；不叠加上游燃料生产 CO2。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_joining_coating_gas | joining_coating | joining_coating_gas | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 计量实际燃料数量、组成、参考温压、低位热值及燃烧器路线；供应天然气与购入热分开。 | MJ | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_joining_coating_co2 | joining_coating | joining_coating_co2 | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 匹配实际燃料碳化验、消耗、燃烧状态及其他物种保留碳；不叠加上游燃料生产 CO2。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_water | shared_services | water | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 分别测量外部补水、实际转移、排放/蒸发与库存；匹配水分及各组分化验、干湿状态与处理去向。抵消配对内部回流。 | m3 | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_wastewater | shared_services | wastewater | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 分别测量外部补水、实际转移、排放/蒸发与库存；匹配水分及各组分化验、干湿状态与处理去向。抵消配对内部回流。 | m3 | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_sludge | shared_services | sludge | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 分别测量外部补水、实际转移、排放/蒸发与库存；匹配水分及各组分化验、干湿状态与处理去向。抵消配对内部回流。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |
| cp_water_air | shared_services | water_air | measurement_record | 场址；期间；型号/配置；序列号/批次；数量/单位；库存与退回；N；D；不确定性；分配；路线适用性 | 分别测量外部补水、实际转移、排放/蒸发与库存；匹配水分及各组分化验、干湿状态与处理去向。抵消配对内部回流。 | kg | 每批或计量区间 | 同一期间，含不合格/返工 | 声明工厂与配置 | 可归属交换数量 / 验收机器数量 | 原始记录；校准测量；匹配化验与分配证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all exchanges | 数据集完成前须解析实际产品/物种/供应方/介质身份及单位；不采用通用物料包，不将未知视零，不因 UUID 命中缩窄范围。 | 供应规格；直接流身份；BOM |
| finite_balance | physical streams | 分别针对各含金属/物种 j，以各流质量乘其自身匹配化验并声明干湿基准。纳入购入物料、期初期末库存、合格产品、废料、粉尘、焊渣、污泥、废水及环境排放和反应转化。不将废料/污泥总质量等同金属含量，不将进料化验套用于产品/废物。 核对实际水：外部水、进料水分与期初库存及反应生成水之和等于随货保留水、废物/废水水分、实测蒸发、反应消耗水及期末库存。配对并抵消内部回流。各水分项分别有匹配化验、基准及不确定性；循环水不是外部投入。 以配方化验核对各实际溶剂物种的购入投入、库存、涂层保留、回收溶剂、捕集介质、废物/液体转移、实际销毁及实测空气排放。未解释残差须调查，不自动作为空气排放。采用合成测量、采样及分配不确定性，不设通用闭合容差。 | 各项自身化验；库存；反应与不确定性记录 |
| no_defaults | all rows | 采集实测场址/配置数量；不设通用机器质量、制造能耗、成品率、作业生产率、寿命或排放因子。不适用须路线证据，与实测零/未知不同。 | 完整代表期间；路线登记；保留记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | combine_harvester | 核实 N>0、D>0 与 M 同期间/配置、校准净验收、声明随货割台/加注物、匹配参考与分母；拒绝质量/生产率替代值。 |  |
| validate_physical | physical water/material/species rows | 分别针对各含金属/物种 j，以各流质量乘其自身匹配化验并声明干湿基准。纳入购入物料、期初期末库存、合格产品、废料、粉尘、焊渣、污泥、废水及环境排放和反应转化。不将废料/污泥总质量等同金属含量，不将进料化验套用于产品/废物。 核对实际水：外部水、进料水分与期初库存及反应生成水之和等于随货保留水、废物/废水水分、实测蒸发、反应消耗水及期末库存。配对并抵消内部回流。各水分项分别有匹配化验、基准及不确定性；循环水不是外部投入。 以配方化验核对各实际溶剂物种的购入投入、库存、涂层保留、回收溶剂、捕集介质、废物/液体转移、实际销毁及实测空气排放。未解释残差须调查，不自动作为空气排放。采用合成测量、采样及分配不确定性，不设通用闭合容差。 |  |
| validate_energy | utility rows | 各公用工程在同一场址期间/单位核对：购入、实际自发及期初储存之和等于已分配制造/涂装/装配/试验/发运使用、未分配剩余、外送及期末储存/损失。共享服务仅承担未分配剩余的因果份额。负剩余须核查期间、单位、库存及仪表不确定性，不截为零。购入热、自有燃料发能与回收转移分别记录。 计量实际回收试验室热量及配对内部转移；场址汇总抵消内部转移。仅按其导致的实际外购计量消耗减少外部热需求，不加入避免电力抵扣或第二次避免热量抵扣。若有外送，须单独计量去向及分配。 |  |
| validate_test | filling_testing | 分开保留柴油/油/制冷剂与实际工厂消耗、回收及泄漏；采用物种证据解析 CO、NO 与 NO2，不仅凭燃料碳。纳入实际出口前试验作物及废物，排除后续农业使用/产量。 | `kappa-claas-test` |
| validate_coverage | dataset | 审计全部实际路线/BOM/交换与上游关联。UUID、数量、转换、物种或介质不完整阻止完整数据集状态；候选方法有限检查不是发布或事实工厂核实。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | process; lifecyclemodel |
| allowed_use | 声明联合收割机制造与合格上游关联 |
| excluded_use | 未进行下游建模的完整收获服务比较；独立脱粒机/零件/拖拉机 |
| required_metadata | 工厂与期间；型号/配置；自走式或牵引式；作物与收获附件；交付割台是否包含；转子、逐稿器或混合架构；轮胎/履带及坡地系统；发动机或 PTO 驱动；驾驶室、空调、控制与蓄电池；交付加注量；验收净质量；试验协议；自制/外购边界；包装 |
| required_quality_disclosure | 自制/外购、路线、数量/身份缺口、不确定性、分配、上游覆盖及废物去向 |
| update_trigger | 配置、供应方、制造/涂装/试验路线、验收或交货状态变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 44122 及相邻 44121–44129 身份；不提供制造数量。 |
| un-cpc-notes-2025 | official_guidance | UNSD, CPC 3.0 Explanatory Notes, 30 June 2025, PDF/printed page 229. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整联合收割机标签及相邻其他机械/零件。无子类特定解释段；独立脱粒机排除依据综合整机语义边界审查，而非明确引用的排除句。 |
| deere-s-series-4592208 | handbook | John Deere, S-Series Combines, brochure 4592208, PDF created February 2024, pp. 6, 14, 22–23. https://www.deere.com/assets/pdfs/region-4/products/harvesting/s-series-combines/4592208-s-series-combines.pdf | 转子发动机/喂入/清选/粮食处理、驾驶室/控制与轮胎/履带；基本规格排除割台。不采用质量、容量或油耗默认值；来源质量文字有异常数值。 |
| claas-trion-walker | handbook | CLAAS, TRION 600 / 500, original HTML snapshot 2 October 2026, APS WALKER and straw walker sections. https://www.claas.com/en-gb/agricultural-machinery/combine-harvesters/trion-600 | 逐稿器配置作为仅转子范围的反例；不采用性能因子。 |
| claas-trion-hybrid | handbook | CLAAS, TRION 700, original HTML snapshot 2 October 2026, APS HYBRID SYSTEM. https://www.claas.com/en-gb/agricultural-machinery/combine-harvesters/trion-700 | 切向脱粒及轴向二次分离；不采用性能因子。 |
| claas-history | handbook | CLAAS, History, original HTML snapshot 2 October 2026. https://www.claas.com/en-ca/about-claas/history-light | 历史牵引式 SUPER 及后续自走式联合收割机支持行走边界，不提供当前销售结构或制造强度。 |
| new-holland-permit-1995 | official_guidance | Pennsylvania DEP, Operating Permit 36-2028, New Holland North America Inc., issued 17 October 1995, original PDF pp. 2–3. https://www.epa.gov/sites/default/files/2017-08/documents/new_holland_north_america.pdf | 历史农机金属清洗、液体喷涂、水帘/干式过滤与烘干炉；组成/用量/废物记录。不证明所有联合收割机工厂均采用这些工序或具名配方；不将许可限值用作排放因子。 |
| kappa-claas-test | handbook | Kappa Filter Systems, Future-proof test bench technology at CLAAS, original supplier case HTML snapshot 2 October 2026. https://www.kappa-fs.com/en/blog/stories-5/lufttechnik-fur-agrarmaschinen-49 | 实际工厂试验案例：功能试验、柴油排气捕集、按需求控制试验室通风与废热回收。不采用通用时长、燃料、效率或排放因子。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 仅分配层级；不声明完整 PEF 符合性。 |
