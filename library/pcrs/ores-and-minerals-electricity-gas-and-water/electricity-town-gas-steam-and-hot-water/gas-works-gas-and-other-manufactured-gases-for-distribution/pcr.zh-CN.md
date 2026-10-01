---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.gas-works-gas-and-other-manufactured-gases-for-distribution
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 煤气厂煤气（及其他用于输配的人造燃气）

## 1. 范围与适用性

本 PCR 适用于煤气厂将原料转化、净化或掺混成供输配使用的人造燃气的前景数据包，参考出口为厂界交付计量点。煤气厂的主要产品是供输配燃气，而非钢铁生产回收气。涵盖干馏、气化、重整与掺混路线；实际路线必须声明。CPC 官方结构区分煤气厂煤气、焦炉煤气及回收气；IEA 2008 年定义提供多路线范围，CBS 的煤源城市煤气定义支持其代表性子类，但不代表所有路线均限于煤源。来源：`unsd-cpc-2025`、`iea-gasworks-2008`、`cbs-town-gas`。

不涵盖仅开采或输配天然气、独立钢铁焦炉的煤气副产品、未经处理的高炉或转炉回收气、化工合成专用合成气、纯氢及终端燃烧。上述气体如作为投入进入煤气厂，必须以其真实身份和上游负荷记录；不能仅因进入管网而改变来源身份。本 PCR 的净化、气柜、压缩及厂出口计量是生产边界的一部分，城市管网配送另建数据包。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.gas-works-gas-and-other-manufactured-gases-for-distribution |
| classification_refs | CPC 3.0:17202 |
| covered_products | 供输配的煤气厂人造燃气；声明干馏、气化、重整或掺混路线 |
| excluded_products | 直接供应天然气；钢铁厂回收气；化工合成气；纯氢 |
| representative_product | 由煤制取并净化、可供输配的城市煤气 |
| production_route | 按实际厂址选择制气、净化和最终掺混；不得将不同路线清单相加 |
| market_state | 厂出口气态燃气；气体组成、压力、温度、湿基或干基及质量验收条件均已声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供输配用人造燃气 |
| How much | 厂出口 1 m3 验收合格燃气 |
| How well | 满足声明的供气质量；注明组分、热值、杂质和互换性指标 |
| How long or cycle | 声明连续运行年度；包含开停机及异常运行 |
| reference_flow_link | reference_gas |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 燃气 `084a3bc0-51e3-4c71-bd26-236efaeba2b5` |
| 参考流属性 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 厂址；期间；制气路线；原料及混合比例；交付计量点；体积基准温度及绝对压力；干湿基；压缩因子及计量修正方法；气体组成；高低位热值及测定方法；硫及焦油含量；交付压力；产品验收规范；上游输入边界 |

构建前景数据包时，必需限定信息须在元数据、过程说明或参考流备注中明确。不同基准条件下的 1 m3 不可直接比较；必须提供可追溯转换，不能赋予通用热值或密度。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| volume_basis | reference product | Volume | m3 | 使用 cp_gas 采集的修正交付体积；计量条件与声明参考条件须可追溯对应。 |
| electricity_units | make_electricity; clean_electricity; export_electricity | Net calorific value | MJ | 若电表以 kWh 记录，采用定义换算 1 kWh = 3.6 MJ；仅换算电能，不用燃气热值替代。 |
| steam_quality | steam_feed | Mass | kg | 记录蒸汽质量和热力学状态；关联上游蒸汽数据的压力、温度及凝结水回流。 |
| chemical_basis | caustic; iron_sorbent | Mass | kg | 氢氧化钠行按固体质量采集；吸附剂按配方质量采集。溶液须另设浓度明确的流，不得重复计入溶剂水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 厂界接收的、身份与上游边界已声明的原料及投入气体 |
| starting_condition_role | 已记录上游供应的前景生产入口 |
| product_classification_scope | 煤气厂供输配人造燃气；不将焦炉或回收气输入重命名为输出类别 |
| recursive_input_rule | 外购同类别燃气单列计量并链接供应商数据；内部回流及自产燃气燃烧仅列内部台账，不作重复产品投入 |
| upstream_dataset_requirement | 每种购入原料、电力、蒸汽、水、化学品及外部废物处理均须匹配上游或下游数据；披露未覆盖供应链 |
| disclosure | 厂界、工艺图、来源、上游起点、内部物流、气柜库存变化、火炬、放空及配送排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | foreground | 纳入原料准备、实际制气或掺混、冷却净化、气柜、最终压缩计量、供能及污染治理；选择实际路线，保留开停机及损失记录。 | iea-gasworks-2008 |
| boundary_transfers | incoming_gases | 焦炉气及回收气作为外来原料时保留其供应商边界与负荷；仅计入本厂新增加工，禁止对同一生产负荷重复建模。 | unsd-cpc-2025; iea-gasworks-2008 |
| boundary_internal | all inventory rows | 内部煤气、冷却水及蒸汽循环不重复列外部交换；自产煤气燃烧和火炬排放仍纳入。厂外配送、终端燃烧与基础设施另披露，不能用厂出口清单声称完整生命周期。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| make | 原料准备及制气/初始掺混 | required | 按声明实际路线 | foreground production | 1 m3 参考燃气 |
| clean | 冷却净化及副产品分离 | conditional | 气体需冷却、除杂或副产品分离时 | conditioning | 1 m3 参考燃气 |
| export | 气柜、最终掺混、压缩及出口计量 | required | 实际交付工况 | conditioning | 1 m3 参考燃气 |

过程表示一个综合煤气厂的采集分组。内部原料气转移记入工艺台账，不重复列成外部交换。每一行仅在其条件成立时纳入；未使用的技术注明不适用，不能把备选路线求和。实际存在的额外溶剂、催化剂、废物及分物种排放须在数据包中增设独立交换，并采集身份、数量、条件和去向。

### 过程：原料准备及制气（`make`）

#### 输入

##### 产品流

###### 气煤原料（`coal_feed`）

采用气煤干馏或气化时；其他实际使用煤种须增设准确的独立流。

- 选定流：硬煤, 气煤 `ec4b882e-3ec8-4756-9689-fa8760c16811`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_feed 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：

###### 煤气焦（`coke_feed`）

购入煤气焦进行气化时；购入量不含内部回用焦。

- 选定流：煤气焦
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_feed 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：

###### 气态天然气（`natural_gas_feed`）

天然气用于重整或掺混时；分别标明原料与供热消耗份额。

- 选定流：天然气，气态 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_feed 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：

###### 石脑油（`naphtha_feed`）

采用石脑油重整或增热时。

- 选定流：石脑油 `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_feed 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：

###### 液化石油气（`lpg_feed`）

将丙烷/丁烷型液化石油气汽化后增热或掺混时。

- 选定流：液化石油气 `3786072f-d3ce-4941-9249-ed5d346b21a6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_feed 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：

###### 渣油燃料油（`oil_feed`）

渣油燃料油用于气化或增热时；披露硫及水分含量。

- 选定流：重质燃料油 `9490cf0e-a790-44a1-9c2f-3793bbdb452d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_feed 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：

###### 焦炉煤气（`coke_oven_gas_feed`）

外部焦炉煤气进入煤气厂并转为输配产品时；保留其上游负荷。

- 选定流：焦炉煤气 `32ab44a2-c912-4c1f-98cf-856a24b3f99a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_feed 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：

###### 电力（`make_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

采集制气及原料准备电量；区分购电与自发电。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 蒸汽（`steam_feed`）

外部蒸汽作为反应物或热源时；披露压力、温度及凝结水回流。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_energy 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 气态氧气（`oxygen_feed`）

采用富氧或纯氧气化时；注明纯度和气体基准条件。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_feed 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：

##### 废物流

无该类外部交换；实际新增交换须单列。

##### 基本流

###### 大气空气（`air_feed`）

从大气吸入空气用于气化或稀释时；与购入氧气分开记录。

- 选定流：空气 `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_feed 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed`
- 来源：

#### 输出

##### 产品流

###### 煤气焦（`gas_coke_coproduct`）

煤干馏产生可销售煤气焦并出厂时；不含内部回用。

- 选定流：煤气焦
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_products 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_products`
- 来源：

###### 煤焦油（`coal_tar_coproduct`）

分离的煤焦油作为产品销售时；送处置的受污染焦油须在数据包中另设废物流行。

- 选定流：煤焦油 `176de006-c7be-47ad-be03-2ce15e99c6ff`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_products 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_products`
- 来源：

##### 废物流

###### 煤气化灰渣（`gasification_ash`）

灰渣跨越厂界时；记录干质量、含水率及处理去向。

- 选定流：煤气化灰渣
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_waste 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 排入空气的化石二氧化碳（`make_co2`）

过程转化、加热及火炬产生并在捕集后排放的化石碳；区分过程与燃烧记录。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_emissions 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

###### 排入空气的一氧化碳（`make_co`）

制气或燃烧排放一氧化碳时；与留在产品煤气中的一氧化碳区分。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_emissions 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

###### 排入空气的二氧化硫（`make_so2`）

含硫燃料氧化并在治理后排放二氧化硫时。

- 选定流：排入空气的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_emissions 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

###### 排入空气的二氧化氮（`make_no2`）

排放二氧化氮时；采集分物种结果，不得重复计入总氮氧化物结果。

- 选定流：排入空气的二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_emissions 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

###### 排入空气的一氧化氮（`make_no`）

排放一氧化氮时；记录与二氧化氮分开的分析物种结果。

- 选定流：排入空气的一氧化氮
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_emissions 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

### 过程：煤气冷却净化（`clean`）

#### 输入

##### 产品流

###### 电力（`clean_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

用于泵、煤气冷却和净化；单独计量或记录归属方法。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 工艺用水（`process_water`）

外供新水进入冷却或洗涤时；不重复计入内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_water 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：

###### 氢氧化钠（`caustic`）

固体氢氧化钠配制溶液用于酸性气洗涤时；购入溶液须采用与浓度对应的专门流。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_chemicals 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemicals`
- 来源：

###### 氧化铁脱硫吸附剂（`iron_sorbent`）

采用氧化铁干法脱硫时；记录实际配方质量，不用纯氧化物当量替代。

- 选定流：氧化铁脱硫吸附剂
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_chemicals 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemicals`
- 来源：

##### 废物流

无该类外部交换；实际新增交换须单列。

##### 基本流

无该类外部交换；实际新增交换须单列。

#### 输出

##### 产品流

###### 回收硫磺（`recovered_sulfur`）

回收粗单质硫并作为产品销售时。

- 选定流：回收元素硫，粗品 `586e1b09-2904-4b0a-b1ef-fc012259004f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_products 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_products`
- 来源：

##### 废物流

###### 煤气洗涤废水（`gas_liquor`）

受污染煤气洗涤液送厂外处理时；厂内处理须在数据包中另记排水及污泥。

- 选定流：煤气洗涤废水
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_waste 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 废氧化铁脱硫吸附剂（`spent_sorbent`）

失效吸附剂出厂时；记录载硫量、含水率及危险废物分类。

- 选定流：废氧化铁脱硫吸附剂
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_waste 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 排入空气的硫化氢（`clean_h2s`）

洗涤或硫回收时硫化氢逸出并排入空气时；产品含硫量不是排放量。

- 选定流：硫化氢 `08a91e70-3ddc-11dd-94a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_emissions 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

### 过程：最终调质及出口交付（`export`）

#### 输入

##### 产品流

###### 电力（`export_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

用于厂界内最终掺混、压缩、气柜及出口计量。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

##### 废物流

无该类外部交换；实际新增交换须单列。

##### 基本流

无该类外部交换；实际新增交换须单列。

#### 输出

##### 产品流

###### 煤气厂煤气（`reference_gas`）

厂出口验收合格、可输配的煤气；不含不合格气、内部燃料消耗及回流。

- 选定流：燃气 `084a3bc0-51e3-4c71-bd26-236efaeba2b5`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：1 m3
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 采集协议：`cp_gas`
- 来源：`iea-gasworks-2008`

##### 废物流

无该类外部交换；实际新增交换须单列。

##### 基本流

###### 排入空气的化石甲烷（`handling_methane`）

记录各煤气处理环节逸散和放空的甲烷；核对设备台账，避免与火炬重复。

- 选定流：排入空气的化石甲烷
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_emissions 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

###### 排入空气的一氧化碳（`handling_co`）

记录煤气处理放空及泄漏损失的一氧化碳；与 make_co 燃烧排放分开。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_emissions 的可追溯实测记录，按交付参考流归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_avoid | joint operations | 优先用工艺分解及独立计量避免分配；系统扩展仅在声明全部扩展功能的单独研究中使用。单产品供应数据不得同时记入分配和替代收益。 | ec-pef-2021 |
| allocation_physical | gas; coke; tar; sulfur | 无法分解时，使用有依据的物理因果关系并记录全部共产品及参数。热值分配须说明各产品燃料用途和同一高低位热值基准；不能默认按气体体积与固体质量相加分配。 | ec-pef-2021 |
| allocation_other | joint operations | 无可支持的物理关系时，说明排除优先方法的理由并可采用共同期间及市场点的相对经济价值；披露价格、数量、分配份额及敏感性。废物处理负荷留在产废过程，不把处置量作为共产品价值。 | ec-pef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gas | export | 参考产品 | 计量及运行记录 | 出口体积；T；绝对 P；干湿基；修正系数；库存；组分；热值；质量证书 | 经校准流量计与质量化验；保留现场采用的修正公式及方法版本，按一致条件重算交付量。 | m3 | 逐班记录并按月核对 | 完整声明运行年度 | 同一厂界及路线 | 每参考流 | 校准、化验、联单及台账 |
| cp_feed | make | 原料 | 计量及运行记录 | 分物料供货量；库存；内部回用；原料/供热用途；组成及含水率；气体计量条件 | 称重、供应商记录或气体计量；通过期初、期末库存及内部转移核对净外部投入。 | kg; m3 | 逐班记录并按月核对 | 完整声明运行年度 | 同一厂界及路线 | 每参考流 | 校准、化验、联单及台账 |
| cp_energy | make; clean; export | 电力；蒸汽 | 计量及运行记录 | 分过程电量；蒸汽质量及状态；冷凝回流；自产供能；购入供能 | 用分表及蒸汽流量计采集；无法分表时记录归属依据，电量统一用 MJ。 | MJ; kg | 逐班记录并按月核对 | 完整声明运行年度 | 同一厂界及路线 | 每参考流 | 校准、化验、联单及台账 |
| cp_water | clean | 外供新水 | 计量及运行记录 | 供水质量；补水；循环；排水；蒸发；计量误差 | 用质量计量或有实测密度的体积计量核对外供新水；内部循环不重复计入。 | kg | 逐班记录并按月核对 | 完整声明运行年度 | 同一厂界及路线 | 每参考流 | 校准、化验、联单及台账 |
| cp_chemicals | clean | 单种化学品 | 计量及运行记录 | 配方；浓度；净消耗；库存；供应商；吸附剂载硫量 | 分品种称重并核对采购、领料和库存；浓度不同的溶液分别建流。 | kg | 逐班记录并按月核对 | 完整声明运行年度 | 同一厂界及路线 | 每参考流 | 校准、化验、联单及台账 |
| cp_products | make; clean | 单种共产品 | 计量及运行记录 | 共产品质量；含水率；质量规范；去向；价格；热值 | 称量并核对销售及库存；区分合格销售品、回用及送处置物料。 | kg | 逐班记录并按月核对 | 完整声明运行年度 | 同一厂界及路线 | 每参考流 | 校准、化验、联单及台账 |
| cp_waste | make; clean | 单种废物 | 计量及运行记录 | 废物质量；水分；危废分类；成分；联单；处理单位 | 分废物流称重并核对联单；液体以实测密度换算质量，披露处理边界。 | kg | 逐班记录并按月核对 | 完整声明运行年度 | 同一厂界及路线 | 每参考流 | 校准、化验、联单及台账 |
| cp_emissions | make; clean; export | 单种排放物质 | 计量及运行记录 | 排放点；物种；浓度；流量；时间；检测限；泄漏；火炬；捕集 | 以排放监测、物料平衡或有记录的工程估算计算每种物质；保留全部输入参数和不确定性；不得用产品气体组成直接当作排放量。 | kg | 逐班记录并按月核对 | 完整声明运行年度 | 同一厂界及路线 | 每参考流 | 校准、化验、联单及台账 |

所有协议均以同期间净验收交付体积为分母；对每一种交换，将归属该燃气的期间总量除以相同基准条件的净交付体积，得到每 1 m3 参考流数量。输出固定 1 m3 是归一化定义，不是实测产量。库存变化、自产燃料和废气损失在内部台账核对，不得既扣除交付量又重复作为购入燃气处理。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 采用上述同期间归属总量/净交付体积的采集归一化规则；保留未分配总量及分配后数量。 | cp_gas; cp_feed; cp_energy; cp_water; cp_chemicals; cp_products; cp_waste; cp_emissions | 每参考流数量 |  |
| electricity_conversion | make_electricity; clean_electricity; export_electricity | 1 kWh = 3.6 MJ；单位定义换算。 | cp_energy | MJ electricity per reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_quality | foreground | 保留真实工艺图，记录所有外部交换、内部转移及不适用原因；对额外物料与排放单列原子交换。 | 工艺图及台账 |
| volume_quality | reference_gas | 交付量、各气体计量、气柜库存及热值数据均须条件一致；若转换无法追溯，禁止比较。 | cp_gas; cp_feed |
| emission_quality | cp_emissions | 披露监测覆盖、检测限、未测物种及估算误差；氮氧化物合计结果不得同时分配给 NO 与 NO2。 | 监测和分析记录 |
| range_quality | all inventory rows | 实际数量须前景采集。本 PCR 不提供通用外推范围或默认排放因子；缺数据不得记作零；使用工程估算时，数据包须标明 modelled_estimate 并披露依据和不确定性。 | 采集协议与缺口披露 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_gas | 核对路线、交付状态、全部必需限定信息及气体条件；天然气仅直接输配的数据不适用。 | unsd-cpc-2025; iea-gasworks-2008 |
| validate_measurement | all inventory rows | 各行数量与同期间、同条件的 1 m3 验收出口燃气一致；校验属性单位及上游数据适配，核对电量换算及蒸汽状态。 |  |
| validate_balance | foreground | 在干湿基、库存及混合组成一致的前提下核对碳、硫及能量台账；不得把物料转为热值后重复计入原料。对不能闭合的差额说明计量或覆盖原因，不设无依据容差。 |  |
| validate_allocation | joint operations | 核对共同期间共产品、方法选择、价格或物理参数及所有份额；同一负荷不重复计入供应商输入、内部循环及本厂生产。 | ec-pef-2021 |
| validate_completeness | foreground | UUID 未解决须明确；身份、排放物种、废物处理及上游覆盖缺口不得隐藏。范围缺证据保留采集要求，不以单案例代替行业范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同产品状态及体积条件的煤气厂供应建模；作为 process 或 lifecyclemodel 输入 |
| excluded_use | 完整配送及燃烧生命周期；天然气开采；纯氢或化工合成气；无换算的跨路线比较 |
| required_metadata | 全部参考流限定信息；来源与上游边界；工艺图；分配方法；内部物流及库存；处理去向 |
| required_quality_disclosure | UUID 及范围缺口；估算；监测覆盖与误差；未覆盖供应链；排除的设施、配送及终端阶段 |
| update_trigger | 原料、路线、供气质量、治理技术、计量条件或分配市场发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 17200–17203 分类身份；原始 CSV 已核对，访问日期 2026-10-01。 |
| iea-gasworks-2008 | official_guidance | OECD/IEA, InterEnerStat: Harmonisation of Definitions of Energy Products and Flows, Products: Coal (2008), PDF pages 17–20. https://iea.blob.core.windows.net/assets/imports/events/39/Coal.pdf | 制气路线、煤气焦及焦炉气区别；历史定义不提供当今效率、排放因子或产品质量标准。访问日期 2026-10-01。 |
| cbs-town-gas | official_guidance | Statistics Netherlands (CBS), Gas works gas definition. https://www.cbs.nl/en-gb/our-services/methods/definitions/gas-works-gas | 煤源城市煤气代表子类及范围对照；定义窄于 IEA 多路线类别。访问日期 2026-10-01。 |
| ec-pef-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, Annex I section 4.5, PDF pages 87–88. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | 通用多功能分配层级；作为方法指导，非煤气专用分配因子或 PEF 合规声明。访问日期 2026-10-01。 |
