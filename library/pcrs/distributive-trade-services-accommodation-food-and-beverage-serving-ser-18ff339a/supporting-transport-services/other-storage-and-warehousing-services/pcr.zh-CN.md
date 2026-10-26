---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-storage-and-warehousing-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 其他仓储服务

## 1. 范围与适用性

本PCR涵盖粮食储存及其他非冷藏仓储，包括包装货物、干散粮及自助仓储物品，须知实际储存净质量及停留时间。设施、货类、货物水分、包装及安保要求界定不同情景，不采用通用仓库平均值。CPC67290说明明确包括粮食储存及其他仓储。[来源：`un-cpc3-67290`]

排除冷藏或冷冻储存（67210）、散装液体或气体储存（67220）、货物制造、独立销售的干燥或加工、货物运输及独立销售的装卸。接收、入库、内部移位、保管及出库仅按仓储合同的可归属范围纳入。未实测储存质量的出租空面积，不得借虚构装载密度变成质量时间服务。粮食通气是按实际发生纳入的条件性保管操作；冷藏仓储仍排除。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-storage-and-warehousing-services |
| classification_refs | CPC 3.0 67290 |
| covered_products | 粮食及其他货物的非冷藏储存；实测质量及期间，各情景分别限定 |
| excluded_products | 冷藏储存；散液或散气储存；货物加工；干线运输；无质量证据的空面积服务 |
| representative_product | 1吨日指定非冷藏仓储服务 |
| production_route | 接收称量→入库→实际储存保管及内部搬运→释放及库存核对 |
| market_state | 在有凭据条件下为明确货物提供的合同保管服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在指定非冷藏仓库保管明确货物 |
| How much | 将实测储存净质量按实际停留时间积分得到1吨日 |
| How well | 明确货物特定水分、温度、湿度、安全安保及验收条件；不虚构通用储存限值 |
| How long or cycle | 接收至释放的实际保管期间；保留不足整日的时间 |
| reference_flow_link | `storage_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 非冷藏仓储服务 |
| 参考流属性 | 质量*时间 `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` |
| 参考单位组 | 质量*时间 `59f191d6-5dd3-4553-af88-1a32accfe308` |
| 参考单位 | tday |
| 必需限定信息 | 场址及报告期间；货类及危险性类别；净质量与水分基准；包装状态；实测库存变化；接收释放时间戳；温度湿度及通风；虫害控制及食品安全要求；安保等级；吞吐量及内部移位；面积及货架占用；货损原因及去向；资产范围；分包边界；电力地区电压 |

tday是已核实单位t*d的明确显示及解析别名，表示一吨储存一天，即1,000千克乘以24小时。归档列出t*d及其相对于kg*a参考单位的换算；不声称别名为新数据库单位。按实际储存区间对批次净质量积分，保留不足整日及库存变化。不默认将托盘、立方米、地板面积、费用、入库吞吐量或内部移位次数换为tday。相同质量时间不意味着不同货物具有等价保管功能。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `storage_mass_time` | 参考产品 | 质量*时间 `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` | tday | 采集cp_stock批次质量及时间戳；按停留时间积分实际储存净质量。分开货类及储存条件。 |
| `no_density_default` | 参考产品 | 质量*时间 `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` | tday | 托盘、体积或面积合同需实际内容物质量和时间。不得由通用密度或额定容量推算质量；内部移位不增加储存质量时间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 明确货物被指定仓库接收；此前制造及运输保留为上游背景，不作为新仓储生产 |
| starting_condition_role | foreground_start |
| product_classification_scope | 包括粮食在内的其他非冷藏仓储 |
| recursive_input_rule | 同类别外包保管作为具有可追溯供应商范围的服务投入；不得重计其公用工程、设施及搬运 |
| upstream_dataset_requirement | 核实能源、材料、资产制造报废及处理数据集；明确排除及缺项 |
| disclosure | 保管期间；空间占用；货物水分基准；保管路线；搬运划分；货损；资产分母；缺失上游边界 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_storage` | 纳入可归属接收释放核验、库内移动、照明、通风、湿度控制、清洁、维护及实际保管。粮食通气取决于环境及水分，不强制所有粮食通气。 | fao-grain-aeration |
| `boundary_energy` | 筛查实际照明、空间供暖、设备驱动、充电及控制负荷。EIA建筑调查仅作为背景证据，不将国家能耗强度或用途份额强加于场址。 | eia-warehouse-energy |
| `boundary_assets` | 纳入实际建筑、货架及搬运保管设备分配后的制造、维护及报废。明确建筑上游清单是否已含组件，防止重复。 |  |
| `boundary_atomic` | 将实际存在的各燃料、制冷剂、农药制剂、维护零件、包装组件、污染物及废物各列为一个原子交换。本清单不允许遗漏实际交换；不存在的作业须有不适用记录。 |  |

## 6. 过程清单结构

以下统一列示保管作业一次。粮库可能通气及防治虫害，托盘仓库可能使用货架和叉车，个人自助仓储需要实际内容物质量。没有明确组成及合理分配不得混合这些情景。客户货物处于保管状态，不是服务生产投入或制造产出。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| storage | 接收、储存、保管及释放货物 | required | 实际仓库情景及各条件行 | foreground_production | 每参考流 |

### 过程：接收、储存、保管及释放货物 (`storage`)

#### 输入

##### 产品流

###### 低压交流电 (`electricity`)

计量仓库实际照明、控制、通风、通气、湿度控制及充电；排除独立计量的制冷。记录地区及供电电压。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 柴油 (`diesel`)

适用于实际柴油叉车或备用发电；核对燃料领退及库存变化，包括可归属怠速。

- 选定流：柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 天然气 (`natural_gas`)

适用于满足指定储存条件所需的实际仓库供暖；记录组成及计量基准，不假定体积转质量系数。

- 选定流：天然气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 自来水 (`water`)

实际可归属清洗及湿度控制用水；另行识别未消耗消防储备及无关生活用水。

- 选定流：自来水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 液压润滑油 (`hydraulic_oil`)

适用于指定搬运设备实际维护补充或更换；区分库存、补充及排出油。

- 选定流：液压润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 低密度聚乙烯缠绕膜 (`stretch_film`)

适用于仓库消耗的新缠绕膜；区分客户随货包装并计量领退质量。

- 选定流：低密度聚乙烯缠绕膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 锯材托盘 (`wood_pallet`)

适用于仓库实际供应木托盘；按有凭据的重复使用及维修分配，不得每次内部移动计入新托盘。

- 选定流：锯材托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 磷化铝熏蒸片剂 (`aluminium_phosphide`)

仅在粮食仓储虫害处理实际合规使用时适用；记录准确制剂及活性成分含量、施用记录、回收和专业服务边界。计量完整配方片剂质量并记录活性成分比例；不得将制剂质量视为纯磷化铝。不规定必用化学品或剂量。

- 选定流：磷化铝熏蒸片剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 非冷藏仓库建筑 (`building`)

实际建筑生产及报废份额，明确施工范围及有凭据寿命与面积时间利用量；单列货架和设备时须排除对应重复负担。

- 选定流：非冷藏仓库建筑
- 流属性/单位：物品数量 / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 钢制托盘货架 (`rack`)

适用于实际货架使用；保留配置、承载能力、制造清单、维护及有依据寿命利用量。

- 选定流：钢制托盘货架
- 流属性/单位：物品数量 / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 平衡重式叉车 (`forklift`)

按运行小时台账及有依据寿命小时分配实际动力型式及型号的生产份额；不默认功率、设备质量或寿命。

- 选定流：平衡重式叉车
- 流属性/单位：物品数量 / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 粮食通气风机 (`grain_fan`)

适用于实际粮食通气；根据实际使用及寿命分母分配制造份额，与计量电力分开。

- 选定流：粮食通气风机
- 流属性/单位：物品数量 / item
- 数量规则：每参考流的可归属实测交换量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

#### 输出

##### 产品流

###### 非冷藏仓储服务 (`storage_output`)

根据批次记录积分的实际仓储活动；实际储存质量时间只计一次，不按每次内部移位重计。

- 选定流：非冷藏仓储服务
- 流属性/单位：质量*时间 `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` / tday
- 数量规则：1 tday
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stock`
- 来源：

##### 废物流

###### 废弃低密度聚乙烯缠绕膜 (`waste_film`)

分开实际废弃缠绕膜，记录处理及污染，不采用默认回收抵扣。

- 选定流：废弃低密度聚乙烯缠绕膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废弃锯材托盘 (`waste_pallet`)

记录实际不可修复托盘质量及去向；待修库存或退回周转托盘不是废物。

- 选定流：废弃锯材托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废液压油 (`waste_oil`)

适用于分类收集的排出维护油，保留处理证据，不与设备内仍持有油量重叠。

- 选定流：废液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 磷化铝熏蒸片剂使用后残渣 (`spent_fumigant`)

仅在实际使用该片剂且形成残渣时适用；记录反应后组成、未反应活性成分、实测质量及专业处理去向。不得假设残渣完全无害，也不得与磷化氢释放重复。

- 选定流：磷化铝熏蒸片剂使用后残渣
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 仓库清洗废水 (`wastewater`)

实际收集后送往处理的清洗废水；识别污染物并区分蒸发水及雨水。

- 选定流：仓库清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 变质小麦籽粒 (`spoiled_wheat`)

仅适用于实际存在损失的小麦情景；其他货物需采用各自具体货损流。记录保管责任、原因、去向及处理，不得将水分损失视为变质干物质。

- 选定流：变质小麦籽粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`fossil_co2`)

仅实际现场化石燃烧，来自实测或有依据的燃料特定碳平衡；上游燃料供应单独计量一次。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 生物源二氧化碳，排入空气 (`biogenic_co2`)

适用于有实测或质量平衡依据的实际粮食呼吸或生物劣变；不假定零排放或碳中和。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

###### 磷化氢，排入空气 (`phosphine_air`)

适用于经核实的粮食熏蒸释放；保留制剂、密闭、实测回收或释放及环境介质。化学品投入质量不等于释放质量。

- 选定流：磷化氢，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的可归属实测交换量；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_tasks` | 优先采用直接仪表及任务记录。搬运能耗依据实际吊运、小时及负荷；保管能耗依据实测分区及货类使用。仅在等价声明条件且因果基准合理时允许质量时间分配。 |  |
| `allocate_space` | 共同照明及建筑负担在有因果依据时可按实测占用面积时间分配，再按实测质量时间归一。保留运营储存系统可归属待机及空置负担；不得仅计通电小时以消除低利用率。 |  |
| `allocate_assets` | 各资产按实际使用除以有凭据的全寿命利用量分母归属，核对既往及当前份额，累计归属不得超过一个完整资产寿命。租赁资产及外包服务负担同样须核对边界。 |  |
| `allocate_goods_loss` | 货物所有权及内含制造与服务参考分开。记录实际货损、水分变化、客户或运营方责任及处理。额外替换生产情景须另行声明；不自动抵扣，也不将全部存货清单赋给仓储。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_stock | storage | storage_output | stock_time_record | 批次；货类；实测净质量；水分基准；接收释放时间；库存修正；条件记录；货损 | 校准称重及带时间戳批次平衡的库存核对。将净吨数按经过日数积分；保留部分区间及实际库存变化。内部移位不增加产出。 | tday | 每批次事件 | 完整声明保管及报告期间 | 一种货类及条件情景 | 每参考流 | 秤校准；库存台账；时间日志 |
| cp_utilities | storage | electricity; diesel; natural_gas; water | meter_record | 行；表读数；单位；库存；任务；分区；温度；湿度；占用；运行小时 | 分表或实测任务归属，并核对供应账单及库存；公用工程分别记录。燃料密度及组成换算需要实际证据。 | 各行单位 | 匹配账期及任务期间 | 与库存积分同期间 | 仓储及实际支持 | 每参考流 | 校准；账单；分区记录 |
| cp_materials | storage | hydraulic_oil; stretch_film; wood_pallet; aluminium_phosphide | issue_return_record | 具体材料；制剂；领退质量；重用；维修；处理记录；任务 | 称量实际材料领退并记录库存和重用分配。虫害处理保留准确活性成分、实际授权及服务边界，不设默认剂量。 | kg | 每次领用及期间 | 与库存积分同期间 | 实际仓库材料 | 每参考流 | 领用记录；库存及重用台账 |
| cp_assets | storage | building; rack; forklift; grain_fan | asset_record | 资产编号；配置；制造范围；施工数量；寿命利用量；实际使用；既往份额；维护；报废 | 根据有依据的寿命分母及供应商边界，核对资产台账、施工范围、占用面积时间及小时计。 | item | 资产变动及期间 | 资产寿命及报告期间 | 使用的建筑及设备 | 每参考流 | 台账；施工清单；分母证据 |
| cp_waste | storage | waste_film; waste_pallet; waste_oil; spent_fumigant; wastewater; spoiled_wheat | waste_record | 行；质量；组成；污染；去向；货损原因；保管责任；处理；日期 | 分流称重并核对处置联单；区分客户货物、水分损失及运营耗材。 | kg | 每次废物事件 | 与库存积分同期间 | 可归属仓储损失及废物 | 每参考流 | 秤；联单；责任记录 |
| cp_emissions | storage | fossil_co2; biogenic_co2; phosphine_air | emission_record | 物种；来源；介质；活动；测量；碳平衡；制剂；回收；模型及因子来源 | 实测实际物种，或采用有可追溯来源的场址特定模型和活动。分开呼吸、燃烧及处理，不将化学品投入等同排放质量。 | kg | 测试及活动期间 | 与库存积分同期间 | 实际现场源 | 每参考流 | 测试；模型及因子文件 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stock_integral` | storage_output | 每批次区间按实际净质量吨数乘以经过日数，之后各区间仅累加一次。核对进出库、水分变化及库存修正。期间可归属交换量除以得到的tday参考流数。 | cp_stock | 每参考流 |  |
| `calc_utilities` | electricity; diesel; natural_gas; water | 将allocate_tasks及allocate_space应用于期间计量数量，保留待机及共用范围；按cp_stock归一。不默认由面积推算能耗或托盘质量。 | cp_utilities; cp_stock | 每参考流 |  |
| `calc_asset_share` | building; rack; forklift; grain_fan | 按实际利用量与寿命利用量份额分配有依据资产生产报废清单；限制累计寿命归属并按cp_stock归一期间份额。未知寿命或利用量保留为明确审查缺口。 | cp_assets; cp_stock | 每参考流 |  |
| `calc_emission_species` | fossil_co2; biogenic_co2; phosphine_air | 采用实测物种质量或有来源的方法、实测活动及实际捕集回收。记录碳来源和介质并保留计量单位；不默认呼吸、熏蒸释放或碳中和。 | cp_emissions; cp_stock | 每参考流 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_stock | storage_output | 质量时间台账须与批次事件及库存核对；水分基准不得暗中由湿基改为干基。不得由托盘数或额定容量推断质量。 | cp_stock |
| dq_preservation | 所有清单行 | 保留实际货类、条件及期间边界；记录保管失败和货损，不将全部收货视为成功保管。 | cp_stock；条件记录 |
| dq_assets | building; rack; forklift; grain_fan | 要求有依据的寿命利用量及组件边界；披露不确定性及缺失上游负担。 | cp_assets |
| dq_identity | 所有清单行 | 采用前核实精确流属性单位及中文名。原子流UUID缺失保持明确；名称相似或解析成功不能证明数据库身份。 | 直读证据及身份缺口 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_mass_time` | 要求唯一storage_output产品流1tday，与实测质量时间、限定信息及保管期间关联。拒绝用吞吐、内部移位次数、空面积或吨公里替代参考。 |  |
| `validate_scope` | 核实粮食或普通仓库的货物特定路线。排除冷藏及散液散气储存；额外独立销售装卸及加工须核对边界。 | un-cpc3-67290 |
| `validate_atomicity` | 每个实际交换具有一种具体身份、采集记录及相同参考分母。核实资产制造重叠、保管损失和化学品回收；完整生命周期主张前披露全部缺失UUID及因子。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | storage_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 货类、条件及期间匹配的可追溯产品或物流链中的明确仓储组成 |
| excluded_use | 通用仓库平均；冷藏或罐储；货物制造或完整产品足迹；纯面积租赁等价 |
| required_metadata | 参考限定信息；货类及水分基准；库存时间记录；占用；吞吐；保管及供应商边界；资产分母及上游数据集身份 |
| required_quality_disclosure | 缺失UUID；质量时间不确定性；保管及货损表现；资产寿命敏感性；上游缺项；分配及排放方法限制 |
| update_trigger | 货物、条件、仓库配置、保管处理、能源供应、利用量分母或保管合同变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-67290 | official_guidance | UNSD CPC Version 3.0, subclass 67290 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67290 | 粮食及其他仓储范围，不提供环境因子 |
| fao-grain-aeration | handbook | FAO, Grain storage techniques, Bulk storage: Aeration, Ambient Aeration. https://www.fao.org/4/t1838e/T1838E1b.htm | 条件性环境空气通气、水分温度及实际风机管理；不采用数值默认值 |
| eia-warehouse-energy | official_guidance | US EIA, 2018 CBECS: Principal Building Activities, Warehouse and Storage, Energy use. https://www.eia.gov/consumption/commercial/pba/warehouse-and-storage.php | 仓库照明供暖设备能耗筛查；美国调查背景，不作为场址因子或完整生命周期方法 |
