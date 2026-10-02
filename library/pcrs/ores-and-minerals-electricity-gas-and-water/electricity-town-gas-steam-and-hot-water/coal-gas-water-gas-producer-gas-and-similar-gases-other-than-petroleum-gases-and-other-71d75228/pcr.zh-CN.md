---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coal-gas-water-gas-producer-gas-and-similar-gases-other-than-petroleum-gases-and-other-71d75228
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 煤气、水煤气、发生炉煤气及类似煤气（石油气及其他气态烃除外）

## 1. 范围与适用性

本 PCR 适用于在计量交付出口制造或回收一种具有来源限定的煤气、水煤气或发生炉煤气，排除石油气及天然气。区分空气、氧气或蒸汽气化，煤干馏和工业副产煤气。焦炉、分销煤气厂或钢铁回收气数据集须使用相应较具体 PCR 的来源特定上游负荷及处理规则，不为这些来源另增气化清单。本规则气化单元仅适用于实际固体进料气化，净化、储存及压缩仅按实际发生纳入。无计量外供燃料气转移而就地燃烧的煤气属于热电生产燃料投入，不作为煤气产品供应。 `netl-gasification-2002`, `un-energy-2024`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coal-gas-water-gas-producer-gas-and-similar-gases-other-than-petroleum-gases-and-other-71d75228 |
| classification_refs | CPC 3.0:17200 |
| covered_products | 一种已识别的非石油制造或回收燃料煤气 |
| excluded_products | 天然气；炼厂气；石油气态烃；独立氢产品；未计量的仅供热生产 |
| representative_product | 声明出口的制造燃料煤气 |
| production_route | 固体进料气化; 母过程原料气回收; 煤气净化及调质; 计量储存与交付 |
| market_state | 具有声明来源、组成及压力的计量出口干气 |

### 子类方法选择

| 来源 | 适用 PCR |
| --- | --- |
| 焦炉来源 | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.coke-oven-gas` |
| 分销煤气厂来源 | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.gas-works-gas-and-other-manufactured-gases-for-distribution` |
| 工业回收气来源 | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.recovered-gases` |

按实际来源应用相应子类，保留其母过程及供应方边界。子类引用不新增第二套气化炉、第二份母过程负荷或避免燃料抵扣。其他固体进料气化采用下述有条件气化单元及实际进料身份。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应具有来源及组成限定的燃料煤气物料或能量载体 |
| How much | 1 kg |
| How well | 场址及年份；来源及子类；进料；气化介质；干湿基准；气体组成；压力及温度；密度；低位热值；母过程负荷分配；净化技术；出口；自用及损失；压缩性及气体体积参考条件；化石或生物源碳比例；适用子类 PCR |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明出口的制造燃料煤气 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址及年份；来源及子类；进料；气化介质；干湿基准；气体组成；压力及温度；密度；低位热值；母过程负荷分配；净化技术；出口；自用及损失；压缩性及气体体积参考条件；化石或生物源碳比例；适用子类 PCR |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | 按实测进料碳、产品组成、焦油及炭碳、燃烧和排放闭合干气质量及碳平衡，单独记录水分及蒸汽。煤气质量等于校正体积乘相同参考条件下组成相关实测密度。发生炉煤气热值或密度不能替代水煤气、焦炉煤气或回收气，抵消内部回用煤气及冷却水循环。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 气化从购入固体进料开始，或从已单独表征干馏或工业母过程的带负荷原料气开始 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 一种已识别的非石油制造或回收燃料煤气 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址及年份；来源及子类；进料；气化介质；干湿基准；气体组成；压力及温度；密度；低位热值；母过程负荷分配；净化技术；出口；自用及损失；压缩性及气体体积参考条件；化石或生物源碳比例；适用子类 PCR |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于在计量交付出口制造或回收一种具有来源限定的煤气、水煤气或发生炉煤气，排除石油气及天然气。区分空气、氧气或蒸汽气化，煤干馏和工业副产煤气。焦炉、分销煤气厂或钢铁回收气数据集须使用相应较具体 PCR 的来源特定上游负荷及处理规则，不为这些来源另增气化清单。本规则气化单元仅适用于实际固体进料气化，净化、储存及压缩仅按实际发生纳入。无计量外供燃料气转移而就地燃烧的煤气属于热电生产燃料投入，不作为煤气产品供应。 | `netl-gasification-2002`, `un-energy-2024` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| gasification | 固体进料气化 | conditional | 空气、氧气或蒸汽气化路线 | 前景生产 | per 1 kg reference flow |
| recovery | 母过程原料气回收 | conditional | 干馏或工业副产气路线，应用具体子类 PCR | 前景生产 | per 1 kg reference flow |
| cleanup | 煤气净化及调质 | conditional | 实际发生净化 | 前景生产 | per 1 kg reference flow |
| delivery | 计量储存与交付 | required | 所有声明场址 | 前景生产 | per 1 kg reference flow |

### 过程：固体进料气化 (`gasification`)

#### 输入

##### 产品流

###### 烟煤气化进料 (`coal_feed`)

仅实际烟煤进料，测量水分、灰分及碳；每种其他固体进料须独立原子卡片和匹配路线证据。

- 选定流: 烟煤 `f10e7264-fc49-491a-a886-f717e3c7a437`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_coal_feed 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_coal_feed`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 气化氧气 (`oxygen_feed`)

仅实际氧吹路线的购入氧气，记录纯度及供应状态；场内空分以其投入及分配电力替代购氧供应方，不重复负荷。

- 选定流: 氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_oxygen_feed 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_oxygen_feed`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 气化蒸汽 (`steam_feed`)

仅购入蒸汽，记录实际压力、温度及相态质量；场内制汽使用实际燃料及水清单。

- 选定流: 气化蒸汽
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_steam_feed 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steam_feed`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 气化用电 (`gasifier_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

进料准备、鼓风及气化辅助设备，共用计量分配一次。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_gasifier_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gasifier_power`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 水煤气生产焦炭进料 (`coke_feed`)

仅实际焦炭蒸汽路线，记录供应方、碳及灰；此边界不同时计入焦炭及其供应方煤。

- 选定流: 水煤气生产焦炭进料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_coke_feed 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_coke_feed`
- 来源: `netl-gasification-2002`, `un-energy-2024`

##### 基本流

###### 气化环境空气 (`gasifier_air`)

仅空气气化炉，测量进气及氮平衡，制备氧气另列。

- 选定流: 空气 `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_gasifier_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gasifier_air`
- 来源: `netl-gasification-2002`, `un-energy-2024`

#### 输出

##### 废物流

###### 气化灰 (`gasifier_ash`)

仅弃置灰，记录干质量、碳、浸出性及处理；熔渣需独立状态特定行。

- 选定流: 气化灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_gasifier_ash 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gasifier_ash`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 转交管理的气化熔渣 (`gasifier_slag`)

仅实际排渣气化炉，区分灰及炭、干固体、残余碳及最终去向。

- 选定流: 转交管理的气化熔渣
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_gasifier_slag 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gasifier_slag`
- 来源: `netl-gasification-2002`, `un-energy-2024`

### 过程：母过程原料气回收 (`recovery`)

#### 输入

##### 产品流

###### 原始工业燃料煤气 (`parent_raw_gas`)

仅实际回收气路线，声明母过程、具体子类、污染物及已分配上游供应数据。

- 选定流: 原始工业燃料煤气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_parent_raw_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_parent_raw_gas`
- 来源: `netl-gasification-2002`, `un-energy-2024`

### 过程：煤气净化及调质 (`cleanup`)

#### 输入

##### 产品流

###### 煤气洗涤工艺水 (`scrubber_water`)

仅购入新鲜补充水，循环水不重复作为供给。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_scrubber_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_scrubber_water`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 煤气净化用电 (`cleanup_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际颗粒去除、脱酸气及循环。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_cleanup_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cleanup_power`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 甲基二乙醇胺溶剂补充料 (`mdea_makeup`)

仅实际 MDEA 系统，循环溶剂属于内部；每种其他溶剂须独立身份及有效浓度。

- 选定流: 甲基二乙醇胺溶剂补充料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mdea_makeup 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mdea_makeup`
- 来源: `netl-gasification-2002`, `un-energy-2024`

#### 输出

##### 废物流

###### 煤气净化焦油残渣 (`tar_residue`)

仅弃置焦油残渣，可销售回收焦油需独立产品行及分配。

- 选定流: 煤气净化焦油残渣
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_tar_residue 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_tar_residue`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 转交处理的煤气洗涤废液 (`scrubber_effluent`)

仅外部处理转移，最终物种及受纳水排放须独立行。

- 选定流: 转交处理的煤气洗涤废液
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_scrubber_effluent 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_scrubber_effluent`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 废甲基二乙醇胺溶剂 (`spent_mdea`)

仅实际转交处理的溶剂排污，记录水及酸性气含量和去向。

- 选定流: 废甲基二乙醇胺溶剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_spent_mdea 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_mdea`
- 来源: `netl-gasification-2002`, `un-energy-2024`

##### 基本流

###### 化石二氧化碳排入室外空气 (`co2_air`)

仅脱除酸气和场内燃烧实测直接化石 CO2；捕集气及供应方排放不属于本直接排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `netl-gasification-2002`, `un-energy-2024`

### 过程：计量储存与交付 (`delivery`)

#### 输入

##### 产品流

###### 煤气交付用电 (`delivery_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际气柜及压缩计量，排除与上游净化重复。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_delivery_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_delivery_power`
- 来源: `netl-gasification-2002`, `un-energy-2024`

#### 输出

##### 产品流

###### 声明出口的制造燃料煤气 (`final_product`)

一种已识别来源及干气组成，参考代表供应而非燃烧热。

- 选定流: 声明出口的制造燃料煤气
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `netl-gasification-2002`, `un-energy-2024`

##### 基本流

###### 化石一氧化碳排入室外空气 (`carbon_monoxide_air`)

仅实测泄漏、放空或实际场内燃烧的未回收化石一氧化碳；生物源 CO 须独立匹配身份。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_carbon_monoxide_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_carbon_monoxide_air`
- 来源: `netl-gasification-2002`, `un-energy-2024`

###### 化石甲烷排入室外空气 (`methane_air`)

仅实际未回收化石甲烷，测量组成及泄漏，不以甲烷代表全部混合气。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_methane_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_methane_air`
- 来源: `netl-gasification-2002`, `un-energy-2024`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 回收煤气须保留实际母过程负荷，不因副产身份视为无负荷。先细分气化及外供热电，再按已证明因果关系分配不可避免联产品，不同时宣称避免燃料及已分配联产品抵扣。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_coal_feed | gasification | `coal_feed` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_gasifier_air | gasification | `gasifier_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_oxygen_feed | gasification | `oxygen_feed` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_steam_feed | gasification | `steam_feed` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_gasifier_power | gasification | `gasifier_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_gasifier_ash | gasification | `gasifier_ash` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_parent_raw_gas | recovery | `parent_raw_gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准净气体质量，或按实测组成、温度、绝对压力及压缩性换算匹配条件体积；保留干湿基准及热值化验，核对库存、自用及回用；cp_output 独立记录正的验收煤气质量 D，排除燃烧或火炬气。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_scrubber_water | cleanup | `scrubber_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_cleanup_power | cleanup | `cleanup_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_tar_residue | cleanup | `tar_residue` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_scrubber_effluent | cleanup | `scrubber_effluent` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_delivery_power | delivery | `delivery_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_carbon_monoxide_air | delivery | `carbon_monoxide_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按运行时长积分校准气量及实测物种浓度，记录温压和环境介质。需要模型时保留源特定实测活动、碳或物种平衡、因子出处及不确定性，不假设通用因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | delivery | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准净气体质量，或按实测组成、温度、绝对压力及压缩性换算匹配条件体积；保留干湿基准及热值化验，核对库存、自用及回用；cp_output 独立记录正的验收煤气质量 D，排除燃烧或火炬气。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_coke_feed | gasification | `coke_feed` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_gasifier_slag | gasification | `gasifier_slag` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mdea_makeup | cleanup | `mdea_makeup` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_spent_mdea | cleanup | `spent_mdea` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | cleanup | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配时长、温度及压力积分校准气量和实测物种浓度；无直接计量时保留实测源活动、可追溯因子、碳或物种平衡和不确定性，不采用通用因子或转化效率。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_methane_air | delivery | `methane_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配时长、温度及压力积分校准气量和实测物种浓度；无直接计量时保留实测源活动、可追溯因子、碳或物种平衡和不确定性，不采用通用因子或转化效率。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有声明来源、组成及压力的计量出口干气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | 按实测进料碳、产品组成、焦油及炭碳、燃烧和排放闭合干气质量及碳平衡，单独记录水分及蒸汽。煤气质量等于校正体积乘相同参考条件下组成相关实测密度。发生炉煤气热值或密度不能替代水煤气、焦炉煤气或回收气，抵消内部回用煤气及冷却水循环。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | 按实测进料碳、产品组成、焦油及炭碳、燃烧和排放闭合干气质量及碳平衡，单独记录水分及蒸汽。煤气质量等于校正体积乘相同参考条件下组成相关实测密度。发生炉煤气热值或密度不能替代水煤气、焦炉煤气或回收气，抵消内部回用煤气及冷却水循环。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供应具有来源及组成限定的燃料煤气物料或能量载体 |
| excluded_use | 天然气；炼厂气；石油气态烃；独立氢产品；未计量的仅供热生产 |
| required_metadata | 场址及年份；来源及子类；进料；气化介质；干湿基准；气体组成；压力及温度；密度；低位热值；母过程负荷分配；净化技术；出口；自用及损失；压缩性及气体体积参考条件；化石或生物源碳比例；适用子类 PCR |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| netl-gasification-2002 | official_guidance | DOE/NETL, Major Environmental Aspects of Gasification-Based Power Generation Technologies, Final Report, December 2002, sections 1.1.2–1.1.5, printed pp.1-6 and 1-11–1-12 (PDF pp.44,49–50). https://www.netl.doe.gov/sites/default/files/netl-file/final-env.pdf | 气化介质、颗粒及酸性气净化、灰及废水，仅作为历史过程证据。 |
| un-energy-2024 | official_guidance | UNSD, Guidelines for the Annual Questionnaire on Energy Statistics, May 2024, fuel definitions. https://unstats.un.org/unsd/energy/energy-questionnaire-guidelines.pdf | 燃料身份及热值基准；不假设煤气组成。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
