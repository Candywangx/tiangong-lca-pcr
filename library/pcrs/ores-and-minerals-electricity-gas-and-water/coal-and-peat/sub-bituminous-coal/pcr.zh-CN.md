---
status: candidate
content_maturity: authored_methodology
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.sub-bituminous-coal
language: zh-CN
sync_with: pcr.en-US.md
---

# 次烟煤

## 1. 范围与适用性

本PCR规定矿场交付点开采所得、未压块的次烟煤前景数据包，包含实际发生的物理选煤及机械脱水。必须识别煤阶、收到基水分、开采路线及产品质量；仅标注动力煤不能确定本类别。次烟煤煤阶介于褐煤与烟煤之间（`eia-coal-glossary`），官方分类将三者区分（`un-cpc-3-2025`）。

煤阶和水分影响资源核算、气体释放、选煤损失及下游能源换算，因此存在超出分类名称的实质方法需求。该质量交付单位是声明的产品单位，不表示各煤种提供等效有效热量。排除褐煤、烟煤、无烟煤、泥炭、制造型煤、焦炭、煤转化、专门热提质及用户端燃煤。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.sub-bituminous-coal |
| classification_refs | CPC 3.0: 11031; `un-cpc-3-2025` |
| covered_products | 开采次烟煤；同煤阶破碎、筛分或物理选煤及机械脱水煤 |
| excluded_products | 褐煤；烟煤；无烟煤；泥炭；型煤；焦炭；热提质煤；电力及热力 |
| representative_product | 矿场交付点收到基散装可销售次烟煤 |
| production_route | 露天或地下开采；条件性物理选煤；破碎、筛分、储存及装载 |
| market_state | 按声明水分和粒度规格交付的未压块散煤 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于后续燃料用途的可销售次烟煤 |
| How much | 矿场交付点净产品 1 千克 |
| How well | 声明次烟煤煤阶、实测收到基水分、灰分、硫分、低位发热量及粒度分布；不单凭发热量推定煤阶 |
| How long or cycle | 一个声明的生产报告期及对应交付前储存时长 |
| reference_flow_link | saleable_coal |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 次烟煤 `a3573912-328b-402e-8f64-f39e34a6a00c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 矿场及煤层；国家及煤田；报告期；煤阶判定方法；开采路线；选煤路线；交付点位置；收到基水分及采样基准；灰分、硫分基准；实测低位发热量及基准；粒度规格；储存时长；分配；土地及闭矿情景 |

在数据集元数据或等效产品、参考流说明中声明所有必需限定信息；缺失限定信息使产品单位不完整。IPCC官方中文版能源章节亦使用“次烟煤”（`ipcc-energy-zh-2000`）。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 | kg | 采用净可销售收到基煤 1 千克；排除运输包装，采用 cp_coal 以可销售库存变动调整发运质量。 |
| moisture_basis | coal_resource; saleable_coal; conditioning_gangue | 质量 | kg | 记录对应质量及水分样本；干质量等于湿质量乘以一减实测水分质量分数。不得混用干基与收到基分母（`eia-coal-glossary`）。 |
| electricity_units | 电力行 | 低位发热量 | MJ | 所选数据库属性以 MJ 表示能量；电表 kWh 乘以 3.6 转为 MJ。该单位恒等关系不表示电力具有可燃燃料组成。 |
| fuel_mass | mine_diesel | 质量 | kg | 按记录温度下实测或供应商认证密度换算体积柴油记录，不假定通用密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定矿场的原位煤层；外供投入位于其物理进入点 |
| starting_condition_role | 开采的自然资源起点；外购物料的技术圈进入点 |
| product_classification_scope | 仅限独立核实的次烟煤煤阶，再应用 CPC 11031 |
| recursive_input_rule | 外购同类别煤记录一次并链接上游供应数据集；内部煤循环不作为新开采投入 |
| upstream_dataset_requirement | 将电力、柴油、炸药、润滑油、供水及废物处理链接至相容背景数据集；披露缺失覆盖 |
| disclosure | 矿场边界、选煤位置、库存报告期、转移、上游链接、排除活动、土地覆盖及闭矿时间范围 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_production` | foreground | 纳入煤层进入、表土及剥离作业、开采、内部运输、通风及排水、物理选煤、储存、抑尘和装载，至声明矿场交付点。 | `epa-surface-coal-1998` |
| `boundary_reclamation` | mine | 纳入归属渐进复垦及披露的闭矿、后续管理情景；保留开采前后土地覆盖、占地面积及时长。分别列明实际场址特定的原土地转出及复垦交换。 | `ifc-mining-2007` |
| `boundary_gases` | mine; handling | 区分煤层气释放、开采和采后排放、回收及销毁。相关时纳入归属氧化、火灾及闭矿排放；低阶煤名称不证明甲烷为零。 | `ipcc-coal-fugitives-2019` |
| `boundary_links` | background | 通过链接数据集纳入上游供应和前景废物的后续管理。燃料供应数据集已含使用阶段时，不得重复核算现场燃烧。资本设备和基础设施必须另行披露纳入或截断评估。 | `ghgp-product-2011` |
| `boundary_exclusions` | downstream | 排除声明交付点后的用户运输及用户燃煤，并单独建模。记录交付点前纳入的场外选煤。热提质需要扩展且经审查的清单。 | `eia-coal-mining` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| mine | 开采及归属场址管理 | required |  | 前景开采 | 每 1 kg 参考流 |
| conditioning | 物理选煤及机械脱水 | conditional | 交付前进行物理选煤；仅在有记录时纳入湿法作业 | 前景选煤 | 每 1 kg 参考流 |
| handling | 破碎、筛分、储存及交付点装载 | required |  | 前景交付 | 1 千克可销售煤 |

这些卡片描述整合矿场交付系统的外部交换。原煤转移与工艺循环水属于内部台账，不重复作为基本流投入。共享电表仅分配一次。条件性卡片必须有明确适用性记录；须证明实际未发生，而不是填写猜测的零值。对实际新增炸药配方、选煤药剂、排放污染物、土地覆盖转变或回收气体产品，前景数据集应扩展为分别列示的原子交换。

### 过程：开采及归属场址管理 (`mine`)

#### 输入

##### 产品流

###### 柴油 (`mine_diesel`)

计量开采、运输、排水及归属复垦设备的柴油消耗；按每 1 kg 参考流报告。

纳入条件：使用柴油动力设备。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量开采、运输、排水及归属复垦设备的柴油消耗；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_diesel`
- 来源：`ifc-mining-2007`

###### 交流电 (`mine_electricity`)

计量挖掘、泵送及通风使用的外购电力；按每 1 kg 参考流报告。

- 选定流：交流电 `65ec3424-071f-42ab-8800-810364539813`
- 流属性/单位：低位发热量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量挖掘、泵送及通风使用的外购电力；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mine_power`
- 来源：`ifc-mining-2007`

###### 多孔粒状铵油炸药 (`mine_anfo`)

按爆破批次核对多孔粒状铵油炸药领用、退库及消耗；按每 1 kg 参考流报告。

纳入条件：爆破使用该规格的多孔粒状铵油炸药。

- 选定流：多孔粒状铵油炸药 `c136e796-f073-46c0-b3c5-5d54ed985fcf`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按爆破批次核对多孔粒状铵油炸药领用、退库及消耗；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`epa-surface-coal-1998`

###### 润滑油 (`mine_lubricant`)

核对矿物润滑油消耗与库存变动；按每 1 kg 参考流报告。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：核对矿物润滑油消耗与库存变动；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ifc-mining-2007`

###### 工艺用水 (`mine_water`)

计量抑尘用外供工艺水质量，排除内部循环；按每 1 kg 参考流报告。

纳入条件：外购工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量抑尘用外供工艺水质量，排除内部循环；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ifc-mining-2007`

##### 基本流

###### 河水 (`mine_river_water`)

计量开采及抑尘的河水取用量；按每 1 kg 参考流报告。

纳入条件：矿场直接取用河水。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量开采及抑尘的河水取用量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ifc-mining-2007`

###### 地下水 (`mine_groundwater`)

分别计量地下水取用与矿井疏排水；报告返还量与消耗量；按每 1 kg 参考流报告。

纳入条件：存在地下水取用或矿井疏排水。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：分别计量地下水取用与矿井疏排水；报告返还量与消耗量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ifc-mining-2007`

###### 地下次烟煤资源 (`coal_resource`)

按声明的水分与矿物质基准记录开采煤资源质量，并与原煤、损失及可销售煤核对；按每 1 kg 参考流报告。

- 选定流：地下次烟煤资源
- 流属性/单位：质量 / kg
- 数量规则：按声明的水分与矿物质基准记录开采煤资源质量，并与原煤、损失及可销售煤核对；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coal`
- 来源：`eia-coal-mining`

###### 矿产开采用地 (`mine_land_occupation`)

计量矿场占地面积与时间积分，用 cp_land 确定生产归属份额；按每 1 kg 参考流报告。

- 选定流：矿产开采用地 `b0744c5e-9859-470f-99dc-b117be5a32c5`
- 流属性/单位：面积*时间 `93a60a56-a3c8-21da-a746-0800200c9a66` / m2*a
- 数量规则：计量矿场占地面积与时间积分，用 cp_land 确定生产归属份额；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_land`
- 来源：`ifc-mining-2007`

###### 转变为矿产开采用地 (`mine_land_transformation`)

测绘新增转变为采矿用地的面积，用 cp_land 确定生产归属份额；按每 1 kg 参考流报告。

纳入条件：所代表矿场新增土地转用。

- 选定流：转变为矿产开采用地 `68f57e2a-2909-423c-ad8e-6a695f59a48f`
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：测绘新增转变为采矿用地的面积，用 cp_land 确定生产归属份额；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_land`
- 来源：`ifc-mining-2007`

#### 输出

##### 废物流

###### 煤矿剥离废石 (`mine_overburden`)

计量转入排土管理边界的剥离废石，排除单独保留的表土；按每 1 kg 参考流报告。

纳入条件：剥离废石跨越矿场作业边界。

- 选定流：煤矿剥离废石
- 流属性/单位：质量 / kg
- 数量规则：计量转入排土管理边界的剥离废石，排除单独保留的表土；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`ifc-mining-2007`

###### 废润滑油 (`mine_used_oil`)

称量单独收集并送往回收或处理的废润滑油；按每 1 kg 参考流报告。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量单独收集并送往回收或处理的废润滑油；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`ifc-mining-2007`

###### 待处理煤矿排水 (`mine_drainage`)

记录转交处理的单独煤矿排水质量、悬浮固体、酸度及溶解组分；按每 1 kg 参考流报告。

纳入条件：煤矿排水转交独立处理过程。

- 选定流：待处理煤矿排水
- 流属性/单位：质量 / kg
- 数量规则：记录转交处理的单独煤矿排水质量、悬浮固体、酸度及溶解组分；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`ifc-mining-2007`

##### 基本流

###### 甲烷 (化石源) (`mine_methane`)

采用通风流量和浓度实测或披露的煤田特定模型记录煤层甲烷排放，区分回收、销毁及泄漏气体；按每 1 kg 参考流报告。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用通风流量和浓度实测或披露的煤田特定模型记录煤层甲烷排放，区分回收、销毁及泄漏气体；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_mine_gas`
- 来源：`ipcc-coal-fugitives-2019`

###### 二氧化碳（化石源） (`mine_carbon_dioxide`)

分别核算发动机燃烧、煤层气及归属氧化或火炬燃烧，再汇总当前大气化石源二氧化碳，避免重复背景燃烧；按每 1 kg 参考流报告。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别核算发动机燃烧、煤层气及归属氧化或火炬燃烧，再汇总当前大气化石源二氧化碳，避免重复背景燃烧；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_mine_gas`
- 来源：`ipcc-coal-fugitives-2019`

###### 排入室外大气的氮氧化物，以二氧化氮计 (`mine_nitrogen_oxides`)

采用发动机或爆破测试，或明确适用的源特定因子，结合活动量及控制条件计算；保持氮氧化物报告基准；按每 1 kg 参考流报告。

- 选定流：排入室外大气的氮氧化物，以二氧化氮计
- 流属性/单位：质量 / kg
- 数量规则：采用发动机或爆破测试，或明确适用的源特定因子，结合活动量及控制条件计算；保持氮氧化物报告基准；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion`
- 来源：`ifc-mining-2007`

###### 排入室外大气的二氧化硫 (`mine_sulfur_dioxide`)

采用发动机测试或有记录的燃料硫燃烧核算，不以总硫氧化物替代；按每 1 kg 参考流报告。

- 选定流：排入室外大气的二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：采用发动机测试或有记录的燃料硫燃烧核算，不以总硫氧化物替代；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion`
- 来源：`ifc-mining-2007`

###### 颗粒物 (PM2.5) (`mine_fine_particles`)

根据实测源活动量及适用的受控扬尘或发动机模型估算所述粒径段；按每 1 kg 参考流报告。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测源活动量及适用的受控扬尘或发动机模型估算所述粒径段；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_mine_dust`
- 来源：`epa-surface-coal-1998`

###### 颗粒物 (PM2.5 - PM10) (`mine_coarse_particles`)

根据实测源活动量及适用的受控扬尘或发动机模型估算所述粒径段；按每 1 kg 参考流报告。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测源活动量及适用的受控扬尘或发动机模型估算所述粒径段；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_mine_dust`
- 来源：`epa-surface-coal-1998`

### 过程：物理选煤及机械脱水 (`conditioning`)

#### 输入

##### 产品流

###### 交流电 (`conditioning_electricity`)

计量选煤及机械脱水电力，避免与矿场电表重复；按每 1 kg 参考流报告。

- 选定流：交流电 `65ec3424-071f-42ab-8800-810364539813`
- 流属性/单位：低位发热量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量选煤及机械脱水电力，避免与矿场电表重复；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_power`
- 来源：`epa-coal-cleaning-1995`

###### 工艺用水 (`conditioning_water`)

计量外供补充水，排除边界内已有循环水；按每 1 kg 参考流报告。

纳入条件：湿法选煤使用外供工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量外供补充水，排除边界内已有循环水；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`epa-coal-cleaning-1995`

#### 输出

##### 废物流

###### 煤矸石 (`conditioning_gangue`)

按声明水分基准称量机械分选出的富岩煤矸石，不将可销售细煤作为废物；按每 1 kg 参考流报告。

- 选定流：煤矸石 `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明水分基准称量机械分选出的富岩煤矸石，不将可销售细煤作为废物；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`epa-coal-cleaning-1995`

###### 待处理洗煤排放水 (`conditioning_effluent`)

分别于煤矿排水计量转交处理的洗煤循环排放水，记录固体及溶解污染物；按每 1 kg 参考流报告。

纳入条件：湿法选煤将排放水转交处理。

- 选定流：待处理洗煤排放水
- 流属性/单位：质量 / kg
- 数量规则：分别于煤矿排水计量转交处理的洗煤循环排放水，记录固体及溶解污染物；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`ifc-mining-2007`

### 过程：破碎、筛分、储存及交付点装载 (`handling`)

#### 输入

##### 产品流

###### 交流电 (`handling_electricity`)

计量破碎、筛分、输送及装载电力；按每 1 kg 参考流报告。

- 选定流：交流电 `65ec3424-071f-42ab-8800-810364539813`
- 流属性/单位：低位发热量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量破碎、筛分、输送及装载电力；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_power`
- 来源：`epa-surface-coal-1998`

#### 输出

##### 产品流

###### 次烟煤 (`saleable_coal`)

1 千克

- 选定流：次烟煤 `a3573912-328b-402e-8f64-f39e34a6a00c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coal`
- 来源：`eia-coal-glossary`

##### 基本流

###### 甲烷 (化石源) (`handling_methane`)

按披露的装卸与储存时长及煤田特定数据，仅记录交付点前采后甲烷，排除开采阶段甲烷；按每 1 kg 参考流报告。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按披露的装卸与储存时长及煤田特定数据，仅记录交付点前采后甲烷，排除开采阶段甲烷；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_handling_gas`
- 来源：`ipcc-coal-fugitives-2019`

###### 颗粒物 (PM2.5) (`handling_fine_particles`)

根据转运、储存暴露及控制措施计算所述扬尘粒径段，不重复开采阶段源；按每 1 kg 参考流报告。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据转运、储存暴露及控制措施计算所述扬尘粒径段，不重复开采阶段源；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_handling_dust`
- 来源：`epa-surface-coal-1998`

###### 颗粒物 (PM2.5 - PM10) (`handling_coarse_particles`)

根据转运、储存暴露及控制措施计算所述扬尘粒径段，不重复开采阶段源；按每 1 kg 参考流报告。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据转运、储存暴露及控制措施计算所述扬尘粒径段，不重复开采阶段源；按每 1 kg 参考流报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_handling_dust`
- 来源：`epa-surface-coal-1998`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared processes | 分配前拆分可独立计量的开采、选煤及装载作业；识别不同品级和作为独立产品销售的回收气体。 | `ghgp-product-2011` |
| `allocation_basis` | residual common burden | 剩余共同负荷采用已证明的物理关系。对煤品级，依据实际过程关系和实测水分、低位发热量论证质量或能量分配；无可辩护物理关系时，采用有记录且价格期间一致的经济分配并给出敏感性结果。 | `ghgp-product-2011` |
| `allocation_waste` | waste treatment | 不得给废弃岩石或待处理废水分配产品收益份额。其管理负荷由产生它们的生产承担；披露实际可销售副产品，避免无依据的替代抵扣。 | `ghgp-product-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_coal | handling | 煤质量及煤质 | 计量及核对记录 | 矿场；煤层；煤阶证据；发运毛重及皮重；期初期末库存；原煤质量；水分；灰分；硫分；低位发热量；采样基准 | 经校准地磅和库存测量；代表性配对实验室样本及方法标识。 | kg | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_diesel | mine | 柴油消耗 | 计量及核对记录 | 交付；罐库存；设备；运行时数；密度；温度；维护及复垦用量 | 燃料计量及库存核对，保留体积转质量证据。 | kg | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_materials | mine | 铵油炸药和矿物润滑油分别记录 | 计量及核对记录 | 物料身份；配方；领用质量；退回；期初期末库存；任务 | 供应商规格、爆破记录及维护台账；分别核对每种物料。 | kg | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_water | mine | 外供水及疏排水分别回路记录 | 计量及核对记录 | 来源；取用；外购；仪表；回路；循环；返还；消耗；换算时的密度 | 经校准仪表及按来源划分的含选煤水平衡；不将取用量等同于消耗量。 | 按行使用 kg 或 m3 | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_wastes | mine | 分别废物转交 | 计量及核对记录 | 流；过程；质量；水分；组成；去向；转移记录；场内库存变动 | 逐项称量废物流；表征排水和排放水化学组成；核对处理接收记录及单独场内排土转移。 | kg | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_mine_gas | mine | 开采气体和化石源二氧化碳子源 | 计量及核对记录 | 源；通风或抽排流量；浓度；温度；压力；原煤产量；回收；销毁；火炬；氧化；发动机燃料；时间 | 采用时间积分实测，或披露煤田特定估算方法、因子来源和单位；分列回收及销毁。 | kg | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_handling_gas | handling | 采后甲烷 | 计量及核对记录 | 原煤；残余气体模型；处理量；储存时长；交付点；温度；损失 | 披露煤田特定采后估算及交付点前份额；与开采气体分别核对。 | kg | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_combustion | mine | 氮氧化物和二氧化硫分别核算 | 计量及核对记录 | 发动机或爆破；活动量；燃料硫分；测试；因子来源；控制；氮氧化物质量约定 | 源特定测试或有记录的适用模型；附燃料、控制记录及不确定性。 | kg | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_land | mine | 占地及土地转用 | 计量及核对记录 | GIS面积；原始覆盖；新增扰动；占用起止；复垦；生产时间范围；归属份额 | 测绘地块面积及期间；将全寿命负荷与同一矿场生产时间范围配对；分别保留计划及实际记录。 | 按行使用 m2 或 m2*a | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_mine_power | mine | 开采电力 | 计量及核对记录 | 电表；kWh；起止；分表份额；电网；电压；自发电区分 | 经校准电表；kWh换算为MJ；将每个分表与外购总量核对。 | MJ | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_conditioning_power | conditioning | 选煤电力 | 计量及核对记录 | 电表；kWh；起止；分表份额；电网；电压；自发电区分 | 经校准电表；kWh换算为MJ；将每个分表与外购总量核对。 | MJ | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_handling_power | handling | 装卸电力 | 计量及核对记录 | 电表；kWh；起止；分表份额；电网；电压；自发电区分 | 经校准电表；kWh换算为MJ；将每个分表与外购总量核对。 | MJ | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_mine_dust | mine | 分别 PM2.5 和 PM2.5–PM10 | 计量及核对记录 | 源活动量；车辆里程；物料质量；粉土；非结合水分；风；控制；粒径段；模型版本 | 源测试或采用场址参数的适用扬尘模型；检查地域及测试条件适用性；保留控制及粒径换算证据。 | kg | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |
| cp_handling_dust | handling | 分别 PM2.5 和 PM2.5–PM10 | 计量及核对记录 | 源活动量；车辆里程；物料质量；粉土；非结合水分；风；控制；粒径段；模型版本 | 源测试或采用场址参数的适用扬尘模型；检查地域及测试条件适用性；保留控制及粒径换算证据。 | kg | 按批次或月；保留年度总量 | 一个完整声明报告期；cp_land使用全寿命时间范围 | 指定矿场及纳入选煤场址 | 每 1 kg 参考流 | 校准；实验室报告；转移凭据；活动台账；方法及不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | 除土地及参考产品外的所有清单行 | 各期间归属交换除以同期间生产的收到基净可销售煤质量；产量为发运量加期末减期初可销售库存。除法前将吨换算为千克。 | cp_coal; cp_diesel, cp_materials, cp_water, cp_wastes, cp_mine_gas, cp_handling_gas, cp_combustion, cp_land, cp_mine_power, cp_conditioning_power, cp_handling_power, cp_mine_dust, cp_handling_dust | 每 1 kg 参考流交换 |  |
| land_normalization | mine_land_occupation; mine_land_transformation | 归属占地面积时间积或转用面积除以对应矿场生产时间范围的累计收到基可销售煤；披露未来产量假设并按实际产量更新。 | cp_land; cp_coal | 每 1 kg 参考流土地交换 |  |
| gas_activity_basis | mine_methane; handling_methane | 适用气体模型采用原煤吨数时，先以该原煤活动量计算气体总量，再除以可销售煤千克数；不得将原煤因子直接用于可销售煤吨数。 | cp_mine_gas; cp_handling_gas; cp_coal | 每 1 kg 参考流气体交换 | `ipcc-coal-fugitives-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| rank_quality | saleable_coal | 核实煤阶并报告各分析基准；单一发热量不得替代煤阶证据。 | cp_coal; `eia-coal-glossary` |
| mass_water_balance | all inventory rows | 分别核对煤、水分、煤矸石、库存及水；解释损失和计量缺口。 | cp_coal; cp_water; cp_wastes |
| evidence_scope | emissions | 披露模型来源、测试条件、开采路线、控制及不确定性；早期美国扬尘指导支持过程识别，不构成通用行业基准。 | cp_mine_dust; cp_handling_dust; `epa-surface-coal-1998` |
| completeness | foreground package | 扩展实际场址特定原子交换；记录缺失计量及上游覆盖。不得将未计量甲烷、水、废料或燃烧默认置零。 | activity logs; `ifc-mining-2007` |
| range_evidence | all inventory rows | 采集前景数值。由于尚无两项独立且边界相容的原始来源为本产品状态及路线建立数量范围，本PCR不规定外部清单范围。 | 仪表、检验、测绘及来源适用性审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | 拒绝非1千克净可销售收到基次烟煤参考，或缺失煤阶、水分及交付点限定信息。 | `eia-coal-glossary` |
| `validate_balances` | foreground | 核实仪表覆盖、库存核对、干湿基准及分配份额合计。检查气体计算原煤与可销售煤分母，并独立评估全部适用源类。 | `ipcc-coal-fugitives-2019` |
| `validate_particles` | dust | 不得将PM2.5与包含它的PM10作为互斥量相加；仅以相容计量或模型推导2.5至10微米粒径段。 | `epa-surface-coal-1998` |
| `validate_identity` | inventory | 每行必须为原子交换，具有相容属性、单位及环境介质。未解决UUID不构成代理依据。完成数据集时，废水转交必须链接处理，并分别记录最终污染物排放。 | `ifc-mining-2007` |
| `validate_disclosure` | dataset | 要求明确披露缺失数据、条件路线、闭矿及分配；区分实测总量、估算及外部证据。 | `ghgp-product-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset |
| allowed_use | 声明煤阶的矿场煤供应，用于另行建模的运输、燃料使用和能源系统 |
| excluded_use | 用户电力或热力；其他煤阶；热提质煤；未披露的全球通用煤 |
| required_metadata | 全部参考限定信息；过程与供应商链接；方法；单位；地域；时间；分配；土地及闭矿范围 |
| required_quality_disclosure | 实测或模型份额；完整性；未解决流身份；不确定性；范围缺失；库存及水平衡；截断 |
| update_trigger | 煤阶或状态改变；开采路线或源控制改变；气体模型修订；新增计量；分配、库存或闭矿假设改变 |

## 11. 数据源

| 来源id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 查阅2026-09-30 | 官方分类身份，CSV 第433–440行 |
| `eia-coal-glossary` | official_guidance | EIA Glossary: Coal; https://www.eia.gov/tools/glossary/?id=coal; 查阅2026-09-30 | 煤阶及收到基与实验室基准的区别；词条 Coal rank、Subbituminous coal、As-received condition |
| `eia-coal-mining` | official_guidance | Coal explained: Mining and transportation of coal; https://www.eia.gov/energyexplained/coal/mining-and-transportation.php; 查阅2026-09-30 | 露天、地下开采路线及条件性选煤；Removing coal、Processing coal 节 |
| `epa-surface-coal-1998` | official_guidance | AP-42 Section 11.9 Western Surface Coal Mining, October 1998; https://www.epa.gov/sites/default/files/2020-10/documents/c11s09.pdf; 查阅2026-09-30 | 采矿、装卸、复垦和扬尘活动，第11.9-1、11.9-4页；不移用数值排放因子 |
| `epa-coal-cleaning-1995` | official_guidance | AP-42 Section 11.10 Coal Cleaning, November 1995; https://www.epa.gov/sites/default/files/2020-10/documents/c11s10.pdf; 查阅2026-09-30 | 物理选煤与脱水阶段，第11.10-1至3页；热干燥不在本PCR范围内 |
| `ipcc-coal-fugitives-2019` | official_guidance | 2019 Refinement to the 2006 IPCC Guidelines, Volume 2 Chapter 4: Fugitive Emissions; https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/2_Volume2/19R_V2_4_Ch04_Fugitive_Emissions.pdf; 查阅2026-09-30 | 第4.1.1、4.1.3、4.1.4节：开采及采后气体核算，以及原煤活动量与可销售产量的区别；不采用因子范围 |
| `ifc-mining-2007` | official_guidance | Environmental, Health, and Safety Guidelines for Mining, 10 December 2007; https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf; 查阅2026-09-30 | 水平衡、矿井排水、废石、废油、大气和土地管理，第2至5、9至12页；管理指导而非清单数量范围 |
| `ghgp-product-2011` | standard | Product Life Cycle Accounting and Reporting Standard, WRI/WBCSD, 2011; https://docs.wbcsd.org/2011/09/Product_Life_Cycle_Accounting_Reporting_Standard.pdf; 查阅2026-09-30 | 第9章，第63至67页：分配层级和披露；用于本PCR的可归属前景交换 |
| `ipcc-energy-zh-2000` | official_guidance | IPCC Good Practice Guidance and Uncertainty Management, Chapter 2 Energy, Chinese edition, 2000; https://www.ipcc-nggip.iges.or.jp/public/gp/chinese/2_Energy_CN.pdf; 查阅2026-09-30 | 中文术语“次烟煤”，印刷页2.29；仅用于术语，不移用发热量数值 |
