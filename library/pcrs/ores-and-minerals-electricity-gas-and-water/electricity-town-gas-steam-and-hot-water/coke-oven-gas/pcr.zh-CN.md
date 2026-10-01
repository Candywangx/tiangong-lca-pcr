---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coke-oven-gas
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 焦炉煤气

## 1. 范围与适用性

本 PCR 适用于副产回收型焦炉生产的净化燃料煤气，包括钢铁厂内经可计量转移后使用的煤气。前景从初冷前粗煤气接收开始，至厂门净化煤气计量点结束。煤干馏属于须承载环境负荷的上游过程。在源头燃烧粗煤气、只输出热或电的热回收焦炉不属于此煤气类别。排除天然气、煤气厂煤气、高炉煤气、甲醇、分离氢气及下游燃烧。此边界依据 BREF 第 5.1.4 节的工艺区分；CPC 确认类别名称，不构成完整生产配方。[`jrc-iron-steel-bref-2013`；`un-cpc-3-2025`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coke-oven-gas |
| classification_refs | CPC 3.0: 17201 |
| covered_products | 净化焦炉燃料煤气；厂内或厂外计量交付 |
| excluded_products | 未回收的热回收焦炉煤气；混合城市煤气；其他回收冶金煤气；分离化学品 |
| representative_product | 焦炉煤气 |
| production_route | 煤干馏后经煤气冷却、焦油分离、净化及计量交付 |
| market_state | 气态燃料；干基质量；声明组成及交付压力 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在厂门供应作为燃料的净化焦炉煤气 |
| How much | 1 kg 干基净化焦炉煤气 |
| How well | 实测组成、低位热值及受气燃料系统接受的污染物规格 |
| How long or cycle | 一个报告期生产周期；不假定使用寿命 |
| reference_flow_link | `reference_gas` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 焦炉煤气 `32ab44a2-c912-4c1f-98cf-856a24b3f99a` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址；报告期；煤炼焦来源；煤气组成；含水量及干基；低位热值及基准；使用体积时的参考温度及绝对压力；密度测定方法；污染物验收限值；煤气净化工艺；交付压力；上游及前景分配；厂内使用及外供比例 |

必须在数据包元数据或参考流备注中声明每项限定信息。质量参考为声明数量，不代表不同煤气组成提供等量能源服务。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `gas_mass` | reference product | 质量 | kg | 采用 cp_gas 测量报告期交付干煤气质量；reference_gas 为 1 kg。所有清单行均为每 1 kg 参考流。 |
| `gas_state` | raw_gas, reference_gas | 质量 | kg | 计量体积须以相同温度、绝对压力、组成及水分基准下可追溯的密度换算。不得假定通用密度，也不得使用未声明参考条件的 Nm3。 |
| `energy_basis` | electricity, steam_heat, reference_gas | 能量 | MJ | 电量以 MJ 记录；票据采用 kWh 时使用精确单位关系 1 kWh = 3.6 MJ。蒸汽供热按供回流焓测定。煤气低位热值另以 MJ/kg 干煤气报告，不得以高位热值替代。 |
| `chemical_basis` | sulfuric_acid, carbonate, ammonium_sulfate | 质量 | kg | 声明浓度、含水量及纯度。保持选定产品的配方基准；活性化学品质量作为补充数据，不得无标签替换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 集气管出口、初冷前的粗煤气，声明组成、水分、质量及上游炼焦负荷 |
| starting_condition_role | 承载上游负荷的中间产品输入，不是零负荷废物 |
| product_classification_scope | 煤干馏产生、经回收及净化的焦炉煤气 |
| recursive_input_rule | 同类别外购煤气须单独记录并连接上游供应；边界内部循环净额处理，不得创建自引用上游数据集 |
| upstream_dataset_requirement | 粗煤气须连接煤供应及干馏过程，并记录焦炭、煤气及其他回收产品间的分配；外购公用工程及试剂和外送废物须连接兼容供应或处理数据集 |
| disclosure | 列明接收及交付计量点、纳入的净化设备、排除的硫转化及废水处理、上游负荷接口、煤气损失、厂内燃料转移及各回收工艺 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_start | raw_gas | 纳入冷却、焦油回收、已安装的脱氨脱硫、运行的轻油回收、储气及厂门压缩。不得因煤气为共产品而省略上游炼焦负荷。 | `jrc-iron-steel-bref-2013`; `eu-environmental-footprint-2021` |
| boundary_loops | all inventory rows | 计入外部补加和外送流；内部洗涤液、冷却水及溶剂循环不跨越汇总前景边界。核对独立补加及排放记录。 | `jrc-iron-steel-bref-2013` |
| boundary_extensions | foreground package | 对下表未列但实际使用的每种试剂、溶剂、催化剂、直接接触蒸汽输入、残渣及实测排放增设独立原子行。所选边界内的火炬或燃烧须增设燃料及各项燃烧排放行；下游用户燃烧仍在边界外。缺失工艺应记录不适用证据，不得虚构零值。 | `jrc-iron-steel-bref-2013` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `gas-cooling` | 煤气冷却及焦油分离 | `required` |  | 前景生产 | 每 1 kg 参考流 |
| `gas-cleaning` | 煤气净化及洗涤液管理 | `required` |  | 前景生产 | 每 1 kg 参考流 |
| `sulfate-recovery` | 硫酸铵回收 | `conditional` | 运行使用硫酸吸收氨并产出硫酸铵的工艺 | 前景生产 | 每 1 kg 参考流 |
| `carbonate-scrubbing` | 碳酸钾洗涤 | `conditional` | 运行碳酸钾脱硫工艺 | 前景生产 | 每 1 kg 参考流 |
| `benzol-recovery` | 煤焦油洗油粗苯回收 | `conditional` | 运行采用煤焦油洗油的芳烃回收工艺 | 前景生产 | 每 1 kg 参考流 |
| `gas-dispatch` | 储气及计量交付 | `required` |  | 前景生产 | 每 1 kg 参考流 |
| `utilities` | 供电核算 | `required` |  | 前景生产 | 每 1 kg 参考流 |
| `gas-releases` | 煤气操作大气排放 | `conditional` | 存在泄漏、放散或开放式接触冷却排放 | 前景生产 | 每 1 kg 参考流 |

### 过程：煤气冷却及焦油分离（`gas-cooling`）

#### 输入

##### 产品流

###### 初冷前粗焦炉煤气 （`raw_gas`）

粗煤气通过声明的接收点。

- 选定流：初冷前粗焦炉煤气
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_raw_gas 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_raw_gas`
- 来源：`jrc-iron-steel-bref-2013`

###### 冷却水 （`cooling_water`）

存在外部冷却水供给或补水；排除内部循环量。

- 选定流：冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_water 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-iron-steel-bref-2013`

#### 输出

##### 产品流

###### 煤焦油 （`coal_tar`）

分离焦油作为产品离开前景边界。

- 选定流：煤焦油 `176de006-c7be-47ad-be03-2ce15e99c6ff`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_tar 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tar`
- 来源：`jrc-iron-steel-bref-2013`

### 过程：煤气净化及洗涤液管理（`gas-cleaning`）

#### 输入

##### 产品流

###### 蒸汽供热 （`steam_heat`）

汽提或溶剂再生使用间接蒸汽供热。

- 选定流：蒸汽供热 `c333ae82-c22d-4cb0-8f0a-b10017eec1f7`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66`; 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_heat 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_heat`
- 来源：`jrc-iron-steel-bref-2013`

#### 输出

##### 产品流

###### 氨和硫化氢汽提蒸气 （`stripping_vapour`）

汽提蒸气转移至单独建模的硫回收设施。

- 选定流：氨和硫化氢汽提蒸气
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-iron-steel-bref-2013`

##### 废物流

###### 焦炉含氨蒸氨废水 （`ammoniacal_effluent`）

蒸氨废水外送处理；连接下游处理过程。

- 选定流：焦炉含氨蒸氨废水
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_effluent 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`jrc-iron-steel-bref-2013`

### 过程：硫酸铵回收（`sulfate-recovery`）

#### 输入

##### 产品流

###### 硫酸 （`sulfuric_acid`）

采用使用硫酸的硫酸铵回收工艺；声明溶液浓度。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_sulfate 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sulfate`
- 来源：`jrc-iron-steel-bref-2013`

#### 输出

##### 产品流

###### 硫酸铵 （`ammonium_sulfate`）

实际回收并作为产品交付硫酸铵。

- 选定流：硫酸铵 `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_sulfate 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sulfate`
- 来源：`jrc-iron-steel-bref-2013`

### 过程：碳酸钾洗涤（`carbonate-scrubbing`）

#### 输入

##### 产品流

###### 碳酸钾 （`carbonate`）

运行碳酸钾洗涤工艺；记录补加量而非溶液循环量。

- 选定流：碳酸钾 `50187d31-fd0a-47c3-9aa2-84402ffb625e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_carbonate 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carbonate`
- 来源：`jrc-iron-steel-bref-2013`

### 过程：煤焦油洗油粗苯回收（`benzol-recovery`）

#### 输入

##### 产品流

###### 煤焦油洗油 （`wash_oil`）

采用煤焦油洗油回收轻油；记录新鲜补加量。

- 选定流：煤焦油洗油
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_benzol 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_benzol`
- 来源：`jrc-iron-steel-bref-2013`

#### 输出

##### 产品流

###### 焦炉煤气粗苯 （`crude_benzol`）

回收富含苯、甲苯及二甲苯的轻油；不得替代为纯苯。

- 选定流：粗苯 `521f59f8-548c-43c8-a6e5-51c11d153cb2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_benzol 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_benzol`
- 来源：`jrc-iron-steel-bref-2013`

### 过程：储气及计量交付（`gas-dispatch`）

#### 输出

##### 产品流

###### 焦炉煤气 （`reference_gas`）

在计量厂门交付的合格干基净化煤气。

- 选定流：焦炉煤气 `32ab44a2-c912-4c1f-98cf-856a24b3f99a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：`jrc-iron-steel-bref-2013`

### 过程：供电核算（`utilities`）

#### 输入

##### 产品流

###### 交流电 （`electricity`）

对鼓风机、泵、冷却及交付压缩用电计量一次。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_power 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`
- 来源：`jrc-iron-steel-bref-2013`

### 过程：煤气操作大气排放（`gas-releases`）

#### 输出

##### 基本流

###### 化石来源甲烷，排入空气 （`methane_air`）

泄漏或放散排放甲烷；以气体组成和泄漏记录确定数量。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_air 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 苯，排入空气 （`benzene_air`）

煤气操作或开放式直接冷却回路释放苯。

- 选定流：苯，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_air 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 硫化氢，排入空气 （`h2s_air`）

煤气操作或净化过程排放残余硫化氢。

- 选定流：硫化氢 `08a91e70-3ddc-11dd-94a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_air 采集；报告每 1 kg 参考流的归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocate_direct | foreground burdens | 首先评估过程细分或系统扩展。尽可能通过独立计量将专用冷却、净化及回收操作直接归属。扩展系统结果必须声明所有功能，不得冒充此单一煤气参考。 | `eu-environmental-footprint-2021` |
| allocate_shared | shared burdens | 无法采用前述方式时，须论证相关物理关系。只有能代表共享过程功能时才采用能量分配；硫酸铵等非燃料产品不得自动参加燃料能量分配。无法确定物理因果关系时，须论证其他关系；经济分配采用同一分离阶段、同一时期的价格及数量。保留敏感性分析和完整分配比例。 | `eu-environmental-footprint-2021` |
| allocate_interface | raw gas and coproducts | 将上游焦炭与煤气分配及下游回收分配分别记录为不同阶段。不得对已归属的上游负荷重复分配。厂内煤气使用记录为转移，不作为替代信用。废物连接处理过程；只有有证据的可销售共产品参加共产品分配。 | `eu-environmental-footprint-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_gas` | gas-dispatch | reference_gas | 计量及分析 | 质量或体积；温度；绝对压力；水分；组成；密度；低位热值；合格干基产量；外供及厂内使用计量 | 使用校准煤气计量仪表及代表性实验室样品；核对干湿基及相应密度条件、库存变化、外供与厂内交付煤气、放散及不合格气 | kg | 连续计量；组成按有代表性的生产周期取样 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_water` | gas-cooling | cooling_water | 水表 | 供水；补水；排污；回路库存变化；体积计量时的密度 | 计量外供冷却水及净补水；单独保留内部循环记录，并按测定条件核对体积质量换算 | kg | 连续计量及月度核对 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_material` | gas-cleaning | stripping_vapour | 库存及转移记录 | 具体物质；组成；纯度；进出质量；期初期末库存；工序；可销售性；分配决定及比例 | 核对称重转移、供应商及库存记录；分别测定各试剂及共产品；汽提蒸气使用可追溯气体质量和组成记录 | kg | 逐次转移；月度库存平衡 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_sulfate` | sulfate-recovery | sulfuric_acid; ammonium_sulfate | 库存及转移记录 | 具体物质；组成；纯度；进出质量；期初期末库存；工序；可销售性；分配决定及比例 | 核对称重转移、供应商及库存记录；分别测定各试剂及共产品；汽提蒸气使用可追溯气体质量和组成记录 | kg | 逐次转移；月度库存平衡 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_carbonate` | carbonate-scrubbing | carbonate | 库存及转移记录 | 具体物质；组成；纯度；进出质量；期初期末库存；工序；可销售性；分配决定及比例 | 核对称重转移、供应商及库存记录；分别测定各试剂及共产品；汽提蒸气使用可追溯气体质量和组成记录 | kg | 逐次转移；月度库存平衡 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_benzol` | benzol-recovery | wash_oil; crude_benzol | 库存及转移记录 | 具体物质；组成；纯度；进出质量；期初期末库存；工序；可销售性；分配决定及比例 | 核对称重转移、供应商及库存记录；分别测定各试剂及共产品；汽提蒸气使用可追溯气体质量和组成记录 | kg | 逐次转移；月度库存平衡 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_heat` | gas-cleaning | steam_heat | 热量表 | 蒸汽流量；压力；温度；供回流焓；供热量 | 在净化边界计量有效间接蒸汽供热；排除已计入供热数据集的锅炉燃料 | MJ | 连续计量；月度核对 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_power` | utilities | electricity | 电表 | 仪表读数；电压；供应商；设备范围；kWh 或 MJ | 分表计量或记录归属设备负荷；将 kWh 换算为 MJ；避免厂级总量与分表量重复计入 | MJ | 连续计量；月度核对 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_effluent` | gas-cleaning | ammoniacal_effluent | 废水转移 | 质量或体积；密度；氨；化学需氧量；酚；接收处理设施；取样日期 | 计量外送蒸氨废水并取样分析组成；本未含处理边界不得再计处理后的水排放 | kg | 连续流量；代表性取样 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_air` | gas-releases | methane_air; benzene_air; h2s_air | 排放测定 | 具体化学物质；放散或泄漏点；速率；运行时数；气体组成；控制效率；环境介质 | 使用现场排放测定或依据实测煤气组成的可追溯泄漏放散估算；确定物种及空气环境介质；不得将全部损失煤气报告为甲烷 | kg | 周期检测及连续放散日志 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_raw_gas` | gas-cooling | raw_gas | 计量及分析 | 接收粗煤气质量或体积；温度；压力；水分；密度；组成 | 接收点须与干基净化煤气交付点分别计量；采用收到的湿煤气状态，存在夹带冷凝液时另行记录 | kg | 连续计量及代表性取样 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |
| `cp_tar` | gas-cooling | coal_tar | 库存及转移记录 | 煤焦油质量；含水量；库存变化；转移去向 | 称量分离焦油并核对罐存、外供及厂内转移 | kg | 逐次转移；月度库存平衡 | 同一完整报告期 | 声明的煤气回收厂 | 每 1 kg 参考流 | 校准；原始记录；库存与计量核对；取样不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 报告期归属交换量除以报告期合格干煤气质量（kg）；reference_gas 固定为 1 kg。保留分配前共产品数量，另行记录负荷分配比例。 | cp_gas; relevant collection protocol | 每 1 kg 参考流的交换数量 | `eu-environmental-footprint-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_period | all inventory rows | 采用同一报告期及设备范围；说明记录缺失和估算，不得以假定零值替换。 | 源记录及计量点图 |
| quality_balance | raw_gas; reference_gas; recovered streams | 核对粗煤气接收、干煤气交付、水及冷凝液、共产品、库存变化和损失。结合测量不确定性调查差异；不提供通用产气率、密度或损失比例。 | 组分与物料平衡；不确定性记录 |
| quality_routes | gas-cleaning | 描述实际净化回收技术及所有具体新增交换。不得将欧洲技术说明作为通用配方或法律限值。 | `jrc-iron-steel-bref-2013` |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_gas | 须完整声明参考限定信息、1 kg 干基产品及两种语言中相同的清单分母。拒绝未指定体积参考条件或不兼容的干湿基换算。 | `jrc-iron-steel-bref-2013` |
| validate_completeness | foreground package | 须具有完整的工艺特定原子交换及协议、一致的厂门计量点、无内部循环重复计入、已连接的上游炼焦负荷及下游废物处理。数据集发布前须解决其他排放物种。 | `jrc-iron-steel-bref-2013` |
| validate_allocation | allocation stages | 须具有论证充分的分配决定、在声明精度内合计为一的分配比例、所采用的价格或物理关系证据，以及防止重复分配或信用的工序区分。 | `eu-environmental-footprint-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 经适用审查后作为 process 或 lifecyclemodel 投影的燃料供应输入 |
| allowed_use | 供应净化工艺、组成、干基、地域、时期、厂门及分配均匹配的焦炉煤气 |
| excluded_use | 通用天然气替代；热回收焦炉煤气生产；下游燃烧排放；氢气或甲醇生产 |
| required_metadata | 全部参考限定信息；来源及厂门范围；上游连接；工艺；共产品处理；采集方法 |
| required_quality_disclosure | 覆盖度；不确定性；煤气平衡；分配敏感性；缺失的身份或证据；实测及估算排放值区分 |
| update_trigger | 配煤、煤气组成、回收技术、压力、上游数据集、分配、供应商或重大运行变化 |

## 11. 数据源

### 中央产品分类（CPC）3.0 结构 (`un-cpc-3-2025`)

- 来源类型：`official_guidance`
- 参考文献：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv
- 版本：2025-06-30
- 获取日期：2026-10-01
- 用途：仅用于类别身份；原始 CSV 第 520–525 行

### 钢铁生产最佳可行技术参考文件 (`jrc-iron-steel-bref-2013`)

- 来源类型：`official_guidance`
- 参考文献：https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf
- 版本：2013
- 获取日期：2026-10-01
- 用途：第 5.1.4–5.1.5 节，印刷页 215、218–220；工艺区分、冷却、明确的回收化学品及共产品；欧洲技术证据，不作为默认数量范围

### 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279 (`eu-environmental-footprint-2021`)

- 来源类型：`official_guidance`
- 参考文献：https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230
- 版本：2021-12-30
- 获取日期：2026-10-01
- 用途：附件 I 第 4.5 节，原始 PDF 第 87–88 页；采用一般多功能性处理层级作为方法选择；不声称完全符合 PEF

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 中央产品分类（CPC）3.0 结构; 2025-06-30; 仅用于类别身份；原始 CSV 第 520–525 行 |
| jrc-iron-steel-bref-2013 | `official_guidance` | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | 钢铁生产最佳可行技术参考文件; 2013; 第 5.1.4–5.1.5 节，印刷页 215、218–220；工艺区分、冷却、明确的回收化学品及共产品；欧洲技术证据，不作为默认数量范围 |
| eu-environmental-footprint-2021 | `official_guidance` | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279; 2021-12-30; 附件 I 第 4.5 节，原始 PDF 第 87–88 页；采用一般多功能性处理层级作为方法选择；不声称完全符合 PEF |
