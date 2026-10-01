---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.ice-and-snow
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冰和雪

## 1. 范围与适用性

本 PCR 适用于生产出口的冻结水供应，包括人工块冰、片冰、管冰、人工雪，或单独声明的天然冰雪采集。固定一种路线、形态、温度及夹带液态水比例。纳入实际进料水调质、冻结、采集、分离、储存和装运。天然采集不套用人工冻结用电量，质量参考不代表冷却能力或服务时长。 `fao-ice-2004`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.ice-and-snow |
| classification_refs | CPC 3.0:17400 |
| covered_products | 用于非食用用途的天然冰雪及人工冻结水 |
| excluded_products | 食用冰；二氧化碳干冰；制冷设备；下游冷却服务 |
| representative_product | 非食用冻结水 |
| production_route | 进料水调质; 冻结与产品分离; 天然冰雪采集; 冷藏及出口装运 |
| market_state | 声明采集点或制冰场装运出口的冻结水 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明状态的固态水物料，不宣称等效冷却服务 |
| How much | 1 kg |
| How well | 场址及年份；天然或人工路线；淡水或盐水来源；形态；固态及夹带液态比例；温度；非食用用途；水质；制冷剂种类；储存时长；出口；分配 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 非食用冻结水 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址及年份；天然或人工路线；淡水或盐水来源；形态；固态及夹带液态比例；温度；非食用用途；水质；制冷剂种类；储存时长；出口；分配 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | 核对进料水、冰固体、夹带液体、排出或融化水、蒸发及库存变化。分别计量冻结、除霜及储存电力。声明固态比例及实测温度，不按相同堆积体积推断冷却能力。结合充注、购入、回收、期末库存及泄漏记录核对制冷剂损失；闭式盐水浴不按每周期新增产品进料计入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 人工制造从购入适用液态水开始，或从已识别采集地点的天然冰雪开始 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 用于非食用用途的天然冰雪及人工冻结水 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址及年份；天然或人工路线；淡水或盐水来源；形态；固态及夹带液态比例；温度；非食用用途；水质；制冷剂种类；储存时长；出口；分配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于生产出口的冻结水供应，包括人工块冰、片冰、管冰、人工雪，或单独声明的天然冰雪采集。固定一种路线、形态、温度及夹带液态水比例。纳入实际进料水调质、冻结、采集、分离、储存和装运。天然采集不套用人工冻结用电量，质量参考不代表冷却能力或服务时长。 | `fao-ice-2004` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| water_prep | 进料水调质 | conditional | 人工制造且购入水 | 前景生产 | per 1 kg reference flow |
| freezing | 冻结与产品分离 | conditional | 人工冻结或造雪 | 前景生产 | per 1 kg reference flow |
| harvest | 天然冰雪采集 | conditional | 仅天然采集路线 | 前景生产 | per 1 kg reference flow |
| storage | 冷藏及出口装运 | required | 所有路线；主动冷却仅在实际运行时计入 | 前景生产 | per 1 kg reference flow |

### 过程：进料水调质 (`water_prep`)

#### 输入

##### 产品流

###### 自来水进料 (`feed_water`)

购入自来水；需要时须证明食品接触适用性，内部回用融水仅作为平衡记录。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_feed_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed_water`
- 来源: `fao-ice-2004`

#### 输出

##### 废物流

###### 水过滤污泥 (`filter_sludge`)

仅水调质产生并转交污泥时计入，表征固体及处理去向。

- 选定流: 水过滤污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_filter_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_filter_sludge`
- 来源: `fao-ice-2004`

### 过程：冻结与产品分离 (`freezing`)

#### 输入

##### 产品流

###### 冻结用电 (`freezing_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

纳入压缩机、泵、风机、造雪及除霜负荷，使用一套核对台账并区分实际路线。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_freezing_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_freezing_power`
- 来源: `fao-ice-2004`

###### 氯化钠盐水浴补充料 (`brine_salt`)

仅氯化钠二次盐水浴路线；记录新增补充量，不记录循环浴质量。

- 选定流: 氯化钠 `a413ea86-0887-42c8-be77-3bee86d5863b`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_brine_salt 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_brine_salt`
- 来源: `fao-ice-2004`

###### 制冷氨补充料 (`ammonia_charge`)

仅实际采用氨制冷时；其他制冷剂须建立各自具体卡片。

- 选定流: 制冷氨补充料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_ammonia_charge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ammonia_charge`
- 来源: `fao-ice-2004`

#### 输出

##### 废物流

###### 废氯化钠制冷盐水 (`spent_brine`)

仅转交处理的排出浴液；须记录浓度及污染物。

- 选定流: 废氯化钠制冷盐水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_spent_brine 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_brine`
- 来源: `fao-ice-2004`

##### 基本流

###### 氨排入室外空气 (`ammonia_air`)

仅计入实测或模型核定到达室外空气的直接氨泄漏，回收氨不作为排放。

- 选定流: 氨排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_ammonia_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ammonia_air`
- 来源: `fao-ice-2004`

### 过程：天然冰雪采集 (`harvest`)

#### 输入

##### 产品流

###### 采集设备柴油 (`harvest_diesel`)

仅天然采集中柴油驱动切割、采集及内部运输。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_harvest_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_diesel`
- 来源: `fao-ice-2004`

##### 基本流

###### 天然冻结水取用 (`natural_ice_resource`)

记录取用天然冰雪质量及地点，区分资源取用与购入冰。

- 选定流: 天然冻结水取用
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_natural_ice_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_natural_ice_resource`
- 来源: `fao-ice-2004`

#### 输出

##### 基本流

###### 化石燃烧二氧化碳 (`harvest_co2`)

仅前景柴油燃烧；柴油供应生产排放保留在上游。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_harvest_co2 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_co2`
- 来源: `fao-ice-2004`

### 过程：冷藏及出口装运 (`storage`)

#### 输入

##### 产品流

###### 储存用电 (`storage_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅主动冷藏运行、装运及出口设备，测量融化损失及储存时长。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_storage_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_storage_power`
- 来源: `fao-ice-2004`

#### 输出

##### 产品流

###### 非食用冻结水 (`final_product`)

一种声明冰雪产品及路线，验收净质量排除包装及单独排出的水。

- 选定流: 非食用冻结水
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `fao-ice-2004`

##### 废物流

###### 转交处理的融水 (`meltwater`)

仅不适用、送往处理的融水，内部回收可用水不作为废物输出。

- 选定流: 转交处理的融水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_meltwater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_meltwater`
- 来源: `fao-ice-2004`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 分离产品等级及天然、人工路线，再按实测用量分配共用制冷和储存计量。不可避免共用负荷采用有据的物理基准；排出冷水及内部融水回用不获得抵扣。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feed_water | water_prep | `feed_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_filter_sludge | water_prep | `filter_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_freezing_power | freezing | `freezing_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_brine_salt | freezing | `brine_salt` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_ammonia_charge | freezing | `ammonia_charge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_ammonia_air | freezing | `ammonia_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用泄漏记录及充注回收库存平衡，记录去向与不确定性，区分回收及容器残留。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_spent_brine | freezing | `spent_brine` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_harvest_diesel | harvest | `harvest_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_natural_ice_resource | harvest | `natural_ice_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_harvest_co2 | harvest | `harvest_co2` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_storage_power | storage | `storage_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | storage | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_meltwater | storage | `meltwater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 声明采集点或制冰场装运出口的冻结水 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | 核对进料水、冰固体、夹带液体、排出或融化水、蒸发及库存变化。分别计量冻结、除霜及储存电力。声明固态比例及实测温度，不按相同堆积体积推断冷却能力。结合充注、购入、回收、期末库存及泄漏记录核对制冷剂损失；闭式盐水浴不按每周期新增产品进料计入。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | 核对进料水、冰固体、夹带液体、排出或融化水、蒸发及库存变化。分别计量冻结、除霜及储存电力。声明固态比例及实测温度，不按相同堆积体积推断冷却能力。结合充注、购入、回收、期末库存及泄漏记录核对制冷剂损失；闭式盐水浴不按每周期新增产品进料计入。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供应声明状态的固态水物料，不宣称等效冷却服务 |
| excluded_use | 食用冰；二氧化碳干冰；制冷设备；下游冷却服务 |
| required_metadata | 场址及年份；天然或人工路线；淡水或盐水来源；形态；固态及夹带液态比例；温度；非食用用途；水质；制冷剂种类；储存时长；出口；分配 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| fao-ice-2004 | official_guidance | FAO Fisheries Technical Paper 436, The Use of Ice on Small Fishing Vessels, 2004, chapter 2. https://www.fao.org/4/y5013e/y5013e05.htm | 块冰、片冰、管冰冻结及储存过程描述；历史设备值不作为当前场址强度。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
