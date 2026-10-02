---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 泥炭

## 1. 范围与适用性

本 PCR 适用于非团聚泥炭的开采及出厂供应，包括燃料、园艺或其他材料用途，覆盖未经团聚的铣采颗粒和经干燥的切采泥炭。声明单位为生产质量参考量，不表示燃料能量或园艺功能等效。排除泥炭块、泥炭焦炭、泥炭焦油及配制栽培基质。不同含水率及用途须在数据集限定信息中区分。 (`un-cpc-3-2025`; `ipcc-wetlands-2006`).

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat |
| classification_refs | CPC 3.0 11051 |
| covered_products | 非团聚铣采泥炭和切采泥炭 |
| excluded_products | 泥炭块；泥炭焦炭；泥炭焦油；配制栽培基质 |
| representative_product | 声明含水率下的散装非团聚泥炭 |
| production_route | 泥炭地开发及排水；铣采或切采；自然干燥；收集；堆存及出厂装载 |
| market_state | 散装泥炭，声明湿基含水率及用途；无添加剂 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产出厂端供应非团聚泥炭 |
| How much | 1 kg 参考流 |
| How well | 声明含水率、灰分、泥炭类型、颗粒状态及用途；燃料用途披露低位热值 |
| How long or cycle | 一次出厂供应；覆盖季节性排水的代表性完整生产年度 |
| reference_flow_link | peat_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 泥炭 `485febdb-01e0-47ad-8ebe-c500a35669bd` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址和来源泥炭地；原土地利用；气候；排水日期及沟渠比例；泥炭类型；铣采或切采；湿基含水率；灰分基准；用途；出厂端；堆存时间；生产年度；碳核算约定及修复情景 |

须在前景数据包中声明全部必需限定信息；信息缺失则参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 | kg | 采用声明湿基含水率下的出厂净质量；排除包装；通过 cp_mass 采集。全部清单采用每 1 kg 参考流基准。 |
| moisture_basis | peat_resource, peat_output | 质量 | kg | 同一样品基准记录湿质量及含水率 w；干质量等于湿质量乘以 (1-w)。不得以干质量替代声明的湿基参考质量。 |
| electricity_unit | electricity_input | 能量 | MJ | 保留计量千瓦时记录；乘以 3.6 得到兆焦；通过 cp_energy 采集。 |
| gas_basis | peatland_nitrous_oxide, soil_carbon_dioxide | 质量 | kg | 仅当原始因子采用元素质量基准时，按 44/12 将碳质量换算为二氧化碳，按 44/28 将一氧化二氮所含氮质量换算为一氧化二氮。不得重复换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有原土地利用及排水历史记录的来源泥炭矿床 |
| starting_condition_role | 天然资源进入；由泥炭开采造成的既有排水影响仍须归属 |
| product_classification_scope | 非团聚泥炭；CPC 参考不表示本方法适用于泥炭块 |
| recursive_input_rule | 外购泥炭作为产品投入，须关联其开采数据集；不得将其替换为基本资源开采流或递归重建供应商 |
| upstream_dataset_requirement | 关联地域匹配的燃料、电力生产、外部处理及外购泥炭；避免重复计入供应商开采 |
| disclosure | 披露生产、开发及非生产排水面积、历史土地转变、修复时限；披露全部排除项及输出碳储量 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_production | foreground | 纳入场地开发、排水维护、采收、干燥、堆存及装载；纳入场内温室气体及土地占用。数据集验收前须将实际使用但未列出的燃料、化学品、废物及排放逐项作为原子交换采集。 | ipcc-wetlands-2006 |
| boundary_carbon | peatland_management | 将土壤碳损失、燃料燃烧及输出泥炭碳分别核算。纳入土地转变及可归属的非生产排水地块；在年度运行清单之外单独披露场址特定的采后排水及修复情景，以及向采出泥炭的分摊方式。 | ipcc-wetlands-2006; ipcc-wetlands-2013 |
| boundary_downstream | gate | 排除下游泥炭燃烧、园艺使用氧化、栽培基质配制及向客户运输。不得将输出碳视为出厂排放，也不得自动给予固碳抵扣。 | ipcc-wetlands-2006 |
| boundary_water | drainage_doc, drainage_effluent | 送往处理的废水与直接排放环境的溶解性有机碳具有不同去向；不得将同一未经处理的有机碳同时计作处理投入及直接排放。下游有机碳氧化仅在明确的独立情景中量化。 | ipcc-wetlands-2013 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| peatland_management | 泥炭地土地及排水核算 | required | 全部来源场址 | 土地及直接排放核算 | 每 1 kg 参考流 |
| peat_production | 开采、自然干燥及出厂供应 | required | 全部生产路线 | 前景实物生产，包括场址公用设施 | 每 1 kg 参考流 |

### 过程：泥炭地管理 (`peatland_management`)

#### 输入

##### 基本流

###### 泥炭开采用地占用 (`land_occupation`)

采集泥炭开采占地面积及持续时间，包括仍受排水影响的非生产地块。

- 选定流: 泥炭开采用地占用
- 流属性/单位: 面积×时间 / m2*a
- 数量规则: 采集泥炭开采占地面积及持续时间，包括仍受排水影响的非生产地块。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_land`
- 来源: `ipcc-wetlands-2013`

###### 天然泥炭地向开采用地的转变 (`land_transformation`)

记录新转变面积及原泥炭地状态；依据有记录的可采产量分摊开发负担，不逐年重复计入。

- 选定流: 天然泥炭地向开采用地的转变
- 流属性/单位: 面积 / m2
- 数量规则: 记录新转变面积及原泥炭地状态；依据有记录的可采产量分摊开发负担，不逐年重复计入。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_land`
- 来源: `ipcc-wetlands-2013`

#### 输出

##### 废物流

###### 送往处理的泥炭开采排水废水 (`drainage_effluent`)

仅当排水废水送往外部处理时纳入；计量转移水质量并注明接收方及处理方式。

- 选定流: 送往处理的泥炭开采排水废水
- 流属性/单位: 质量 / kg
- 数量规则: 仅当排水废水送往外部处理时纳入；计量转移水质量并注明接收方及处理方式。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `ipcc-wetlands-2013`

##### 基本流

###### 泥炭地碳储量损失产生的二氧化碳排放至空气 (`soil_carbon_dioxide`)

量化开发、开采及可归属排水期间的场内土壤和植被碳损失；扣除随产品输出的碳。

- 选定流: 泥炭地碳储量损失产生的二氧化碳排放至空气
- 流属性/单位: 质量 / kg
- 数量规则: 量化开发、开采及可归属排水期间的场内土壤和植被碳损失；扣除随产品输出的碳。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_ghg`
- 来源: `ipcc-wetlands-2013`

###### 甲烷排放至非城市空气 (`peatland_methane`)

采集土壤和沟渠甲烷通量，或将有依据且适合本地区的因子应用于测绘面积及持续时间。

- 选定流: 甲烷排放至非城市空气
- 流属性/单位: 质量 / kg
- 数量规则: 采集土壤和沟渠甲烷通量，或将有依据且适合本地区的因子应用于测绘面积及持续时间。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_ghg`
- 来源: `ipcc-wetlands-2013`

###### 一氧化二氮排放至非城市空气 (`peatland_nitrous_oxide`)

采集一氧化二氮通量，或采用匹配的土地利用、气候和排水活动数据计算；区分一氧化二氮质量与其所含氮的质量。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c6-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集一氧化二氮通量，或采用匹配的土地利用、气候和排水活动数据计算；区分一氧化二氮质量与其所含氮的质量。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_ghg`
- 来源: `ipcc-wetlands-2013`

###### 溶解性有机碳排放至淡水 (`drainage_doc`)

当排水直接进入淡水时纳入；对排水体积与实测溶解性有机碳浓度积分；记录碳质量，而非水质量。

天工平台未提供该流的中文名称；保留规范英文名称。

- 选定流: DOC, Dissolved Organic Carbon `21291e2b-f570-4264-a430-1522a6d67805`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 当排水直接进入淡水时纳入；对排水体积与实测溶解性有机碳浓度积分；记录碳质量，而非水质量。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `ipcc-wetlands-2013`

### 过程：泥炭生产 (`peat_production`)

#### 输入

##### 产品流

###### 柴油 (`diesel_input`)

计量场地开发、泵送、铣采或切采、收集及堆场装卸耗用的柴油；区分自营燃烧与承包的完整服务。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 计量场地开发、泵送、铣采或切采、收集及堆场装卸耗用的柴油；区分自营燃烧与承包的完整服务。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `ipcc-wetlands-2006`

###### 电力 (`electricity_input`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

计量泵送及生产外购电力；按 3.6 MJ/kWh 将千瓦时换算为兆焦。仅在使用外购电力时纳入。

- 选定流: 电力
- 流属性/单位: 能量 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 计量泵送及生产外购电力；按 3.6 MJ/kWh 将千瓦时换算为兆焦。仅在使用外购电力时纳入。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `ipcc-wetlands-2006`

##### 基本流

###### 地下泥炭资源的开采质量 (`peat_resource`)

计量开采泥炭质量及含水率；将干物质与成品、库存变化及物理损失核对。不得假定资源开采量等于出厂湿质量。

- 选定流: 地下泥炭资源的开采质量
- 流属性/单位: 质量 / kg
- 数量规则: 计量开采泥炭质量及含水率；将干物质与成品、库存变化及物理损失核对。不得假定资源开采量等于出厂湿质量。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源: `ipcc-wetlands-2006`

#### 输出

##### 产品流

###### 泥炭 (`peat_output`)

1 千克参考流；采集声明出厂含水率下的非团聚泥炭净产量。

- 选定流: 泥炭 `485febdb-01e0-47ad-8ebe-c500a35669bd`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源: `ipcc-wetlands-2006`

##### 基本流

###### 化石源二氧化碳排放至非城市空气 (`diesel_carbon_dioxide`)

依据实测燃料含碳量及氧化程度或可追溯燃烧因子确定柴油燃烧二氧化碳；排除土壤碳损失。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-9c13-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 依据实测燃料含碳量及氧化程度或可追溯燃烧因子确定柴油燃烧二氧化碳；排除土壤碳损失。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_combustion`
- 来源: `ipcc-wetlands-2006`

###### PM10 排放至空气 (`peat_pm10`)

采用粒径特定监测或有依据的场址模型纳入开采及装卸的 PM10 排放；不得用总粉尘替代。

- 选定流: 颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用粒径特定监测或有依据的场址模型纳入开采及装卸的 PM10 排放；不得用总粉尘替代。 将实测期间总量除以出厂泥炭净产量（kg）。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_combustion`
- 来源: `ipcc-wetlands-2006`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | foreground | 优先采用独立场址及路线记录，再分摊共同负担；内部泥炭倒运不计入可销售产量。 |  |
| allocation_common | multiple_peat_grades | 对于不可分离的非团聚泥炭等级共同负担，采用实测干物质产量比例，避免含水率改变负担份额；披露比例、剔除物料及替代分配的敏感性。开发及关闭负担采用有记录的全寿命采出干物质产量，逐年核对。出厂数据集不采用避免产品抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | peat_production | 湿基泥炭质量 | 称重 | 出厂净质量；开采质量；含水率 w；干物质库存变化；剔除物料 | 采用经校准地磅或秤和配对代表性含水率样品；记录质量平衡及库存测量。 | kg | 每批次；年度核对 | 代表性完整年度及可归属开发和关闭阶段 | 来源泥炭地及生产出厂端 | 每 1 kg 参考流 | 校准；现场记录；模型及因子来源；边界核对 |
| cp_energy | peat_production | 柴油及电力记录 | 计量日志 | 柴油质量；升向质量换算所用密度；用电千瓦时；设备工时；承包服务边界 | 读取经校准仪表、燃料凭证及库存变化；将开发、泵送及开采耗用归属，避免重复计量。 | kg; kWh | 每月及生产季 | 代表性完整年度及可归属开发和关闭阶段 | 来源泥炭地及生产出厂端 | 每 1 kg 参考流 | 校准；现场记录；模型及因子来源；边界核对 |
| cp_land | peatland_management | 土地利用 | 调查 | 面积；占用年限；原土地状态；转变面积；生产及非生产排水面积；沟渠宽度及长度 | 采用地理信息测绘及排水历史；核对日期、权属及修复计划；保留生产寿命基准。 | m2; a | 每年及每次转变 | 代表性完整年度及可归属开发和关闭阶段 | 来源泥炭地及生产出厂端 | 每 1 kg 参考流 | 校准；现场记录；模型及因子来源；边界核对 |
| cp_ghg | peatland_management | 泥炭地气体 | 监测及模型 | 二氧化碳所含碳；甲烷；一氧化二氮所含氮；气候；养分等级；通量时段；沟渠比例；模型及因子；产量 | 采用覆盖季节变化的箱式或通量监测，或说明 IPCC 方法层级及匹配的活动数据和因子。区分土地转变、土壤损失及沟渠通量；纳入非生产季。 | kg; m2; a | 季节监测并整合完整年度 | 代表性完整年度及可归属开发和关闭阶段 | 来源泥炭地及生产出厂端 | 每 1 kg 参考流 | 校准；现场记录；模型及因子来源；边界核对 |
| cp_water | peatland_management | 排水 | 采样 | 排水体积；溶解性有机碳浓度；接收水体；转移处理质量；采样日期及暴雨事件 | 监测排水并在季节及暴雨事件中采集流量加权有机碳样品；保留处理凭证及接收水体识别信息。 | kg; m3; mg/L | 季节及暴雨事件覆盖 | 代表性完整年度及可归属开发和关闭阶段 | 来源泥炭地及生产出厂端 | 每 1 kg 参考流 | 校准；现场记录；模型及因子来源；边界核对 |
| cp_combustion | peat_production | 燃烧及粉尘 | 监测及模型 | 柴油含碳量；氧化程度；二氧化碳因子；实测 PM10；活动；控制措施；模型不确定性 | 采用燃料碳平衡确定二氧化碳，并以 PM10 专项监测或经验证场址模型确定粉尘。其他实际燃烧污染物须逐项新增原子行。 | kg | 生产季记录及年度核对 | 代表性完整年度及可归属开发和关闭阶段 | 来源泥炭地及生产出厂端 | 每 1 kg 参考流 | 校准；现场记录；模型及因子来源；边界核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | 所有清单行 | 清单强度 = 可归属期间交换总量 / 出厂泥炭净产量（kg）；参考产出为 1 千克。分子与分母采用同一期间及含水状态。 | cp_mass; cp_energy; cp_land; cp_ghg; cp_water; cp_combustion | 每 1 kg 参考流的交换量 |  |
| dry_matter_reconcile | peat_resource, peat_output | 干质量 = 湿质量 * (1-w)；资源干质量加期初库存等于出售干质量加期末库存加已核算损失；报告残差及采样不确定性。 | cp_mass | 干物质核对 |  |
| ghg_activity | soil_carbon_dioxide, peatland_methane, peatland_nitrous_oxide | 对实测通量 * 面积 * 时间积分，或逐层汇总匹配面积 * 时间 * 适用因子。保留单位及因子来源；区分沟渠面积与土壤表面，避免重叠。归一化前换算元素质量基准因子。 | cp_ghg; cp_land; cp_mass | 每参考流气体质量 | ipcc-wetlands-2013 |
| doc_mass | drainage_doc | 溶解性有机碳 kg = sum(排水 m3 * 有机碳浓度 mg/L) * 0.001；采用 normalize_period 归一化；保留采样不确定性及直接排放边界。 | cp_water; cp_mass | 每参考流溶解性有机碳质量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_site | all | 匹配泥炭类型、气候、排水历史及采收技术；采用完整代表性年度并披露产量波动。 | cp_land; cp_mass; ipcc-wetlands-2013 |
| quality_balance | all | 核对能源凭证、产量及库存；明确披露损失及缺失交换覆盖。场址采用热干燥或包装时，须增加已识别的逐项交换及匹配协议。 | cp_energy; cp_mass |
| quality_carbon | peatland_management | 保留碳储量边界及模型和因子版本；披露不确定性，避免把开采视为全部输出碳的即时排放。 | cp_ghg; ipcc-wetlands-2006; ipcc-wetlands-2013 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | peat_output | 要求 1 千克出厂泥炭净质量、声明含水率及全部参考限定信息；不得将湿基与干基数据集视为等效。 |  |
| validate_completeness | all | 要求每项适用原子交换、匹配采集记录及上游关联；未解决 UUID 须明确保留。缺项须有物理依据，不得虚构零值。 |  |
| validate_carbon | peatland_management | 检查土地面积及时间覆盖、沟渠比例、元素向气体的单位换算、有机碳去向及柴油与土壤碳区分；披露采后情景及分配。 | ipcc-wetlands-2013 |
| validate_balance | peat_resource, peat_output | 验收前检查干物质核对及残差不确定性；不规定通用损失或能耗范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 限定含水率及用途匹配的非团聚泥炭出厂供应 |
| excluded_use | 泥炭块制造；下游燃烧或园艺功能等效；泥炭碳中和声明 |
| required_metadata | 参考限定信息；场址；年度；路线；上游供应方；分配；土地历史；情景时限 |
| required_quality_disclosure | 缺失 UUID；数据覆盖；不确定性；含水率及碳平衡；遗漏流；关闭情景敏感性 |
| update_trigger | 排水或修复变化；新增采收路线；含水率或用途变化；更新场址测量或排放方法 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品识别，泥炭与泥炭块区分；查阅日期 2026-09-30 |
| ipcc-wetlands-2006 | official_guidance | IPCC, 2006 Guidelines, Volume 4 Chapter 7, section 7.2, p.7.8. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_07_Ch7_Wetlands.pdf | 开发、开采及采后阶段和出厂与下游碳区分；查阅日期 2026-09-30 |
| ipcc-wetlands-2013 | official_guidance | IPCC, 2014, 2013 Wetlands Supplement, Chapter 2, sections 2.2.1–2.2.3. https://www.ipcc-nggip.iges.or.jp/public/wetlands/pdf/Wetlands_Supplement_Entire_Report.pdf | 排水有机土壤温室气体、沟渠面积、活动数据采集及有机碳区分；未采用经验生产范围；查阅日期 2026-09-30 |
