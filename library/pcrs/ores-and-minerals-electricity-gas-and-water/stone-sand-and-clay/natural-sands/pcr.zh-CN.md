---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.natural-sands
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 天然砂

## 1. 范围与适用性

本 PCR 适用于声明采出、洗选分级或工业选矿装载出口供应的天然矿物砂。覆盖陆地矿床及依法许可河湖海疏浚产出的天然硅质、钙质及其他矿物砂，包括原砂、洗砂、分级砂或实际干燥品级。区分仅采出、一体化采选与接收带负荷砂料的独立加工。天然胶结砂的解离仅在有天然砂粒来源记录时纳入；将非砂岩石特意破碎制造砂归于碎石类别。声明实际筛分、擦洗、脱泥、分离、脱水、提纯及干燥工序，不要求所有路线都发生。纳入场址开发复垦、装载、水、粉尘及废物管理。下游混凝土、玻璃、铸造用途及服务性能为独立数据集。 `epa-sand-gravel-1995`, `ifc-construction-2007`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.natural-sands |
| classification_refs | CPC 3.0:15310 |
| covered_products | 天然原砂、洗选分级或干燥建筑及工业矿物砂；各数据集固定矿物组成、来源及出口状态 |
| excluded_products | 非砂岩石制造的机制砂；再生混凝土骨料；以砾石为参考产品；涂覆或树脂粘结铸造砂；合成二氧化硅；含砂砂浆混凝土玻璃及采挖服务 |
| representative_product | 声明供应出口的天然砂 |
| production_route | 矿床开发及修复; 天然砂采挖及疏浚; 筛分洗选及分级; 工业提纯及干燥; 水细粉及粉尘控制; 净验收砂装载 |
| market_state | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明水分及级配供应 1 kg 合格天然砂，不宣称不同品级等强度或最终用途性能等效 |
| How much | 1 kg |
| How well | 场址及年份；陆地河湖海来源及许可采挖范围；实际矿物组成及石英碳酸盐比例；天然砂粒来源；采出加工路线；筛分分布及细粉；纯度及杂质；盐分氯化物；市场品级；水分及干固体基准；净装载出口；水源退水流域；沉积物及废物去向；分配及寿命产量基准 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明供应出口的天然砂 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址及年份；陆地河湖海来源及许可采挖范围；实际矿物组成及石英碳酸盐比例；天然砂粒来源；采出加工路线；筛分分布及细粉；纯度及杂质；盐分氯化物；市场品级；水分及干固体基准；净装载出口；水源退水流域；沉积物及废物去向；分配及寿命产量基准 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | D 为出口独立测量的正验收净收到基砂质量（kg），排除包装及拒收。按明确湿基记录水分比例 w，0 <= w < 1；干固体 = D*(1-w)，不另换分母。干基记录仅用匹配实测水分转换为收到基；按体积销售需实测松散或压实堆积密度及水分，不采用通用砂密度。核对原矿干固体、验收品级、单独出售砾石、细粉矿泥、库存及释放；另核对新水、固有水分、内部回用水、蒸发及排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采出从实际天然沉积或矿物矿床开始，独立加工从承担上游负荷的供给天然原砂开始 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 天然原砂、洗选分级或干燥建筑及工业矿物砂；各数据集固定矿物组成、来源及出口状态 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址及年份；陆地河湖海来源及许可采挖范围；实际矿物组成及石英碳酸盐比例；天然砂粒来源；采出加工路线；筛分分布及细粉；纯度及杂质；盐分氯化物；市场品级；水分及干固体基准；净装载出口；水源退水流域；沉积物及废物去向；分配及寿命产量基准 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于声明采出、洗选分级或工业选矿装载出口供应的天然矿物砂。覆盖陆地矿床及依法许可河湖海疏浚产出的天然硅质、钙质及其他矿物砂，包括原砂、洗砂、分级砂或实际干燥品级。区分仅采出、一体化采选与接收带负荷砂料的独立加工。天然胶结砂的解离仅在有天然砂粒来源记录时纳入；将非砂岩石特意破碎制造砂归于碎石类别。声明实际筛分、擦洗、脱泥、分离、脱水、提纯及干燥工序，不要求所有路线都发生。纳入场址开发复垦、装载、水、粉尘及废物管理。下游混凝土、玻璃、铸造用途及服务性能为独立数据集。 | `epa-sand-gravel-1995`, `ifc-construction-2007` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| development | 矿床开发及修复 | conditional | 实际一体化采出及可归属陆地水域修复 | 前景生产 | per 1 kg reference flow |
| extraction | 天然砂采挖及疏浚 | conditional | 实际天然矿床原生采出 | 前景生产 | per 1 kg reference flow |
| washing | 筛分洗选及分级 | conditional | 实际天然砂粒加工；原砂未洗供应可旁路 | 前景生产 | per 1 kg reference flow |
| purification | 工业提纯及干燥 | conditional | 仅实际工业砂路线，不默认使用药剂或干燥 | 前景生产 | per 1 kg reference flow |
| controls | 水细粉及粉尘控制 | conditional | 实际来源特定控制及管理 | 前景生产 | per 1 kg reference flow |
| dispatch | 净验收砂装载 | required | 各声明出口 | 前景生产 | per 1 kg reference flow |

### 过程：矿床开发及修复 (`development`)

#### 输入

##### 产品流

###### 矿床开发柴油 (`development_diesel`)

实际剥离修复设备，披露寿命产量，不逐年重复全额计入。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_development_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_development_diesel`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### 输出

##### 废物流

###### 砂矿覆盖层 (`overburden`)

实际剥离覆盖物；另记录保留回覆表土及生境特定陆地水域转变。

- 选定流: 砂矿覆盖层
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_overburden 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_overburden`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

### 过程：天然砂采挖及疏浚 (`extraction`)

#### 输入

##### 产品流

###### 采挖及疏浚柴油 (`extraction_diesel`)

实际挖掘机疏浚机船舶燃料，区分泵送运输及装载计量边界。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_extraction_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_diesel`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### 采出泵用电 (`extraction_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅实际电驱采出吸砂设备，不为柴油设备虚构电力疏浚。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_extraction_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_power`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

##### 基本流

###### 矿床中的石英砂 (`quartz_resource`)

仅实际石英砂矿床采出，以天然资源质量计；其他矿物砂须独立资源身份，不在购入进料下重复资源。

- 选定流: 石英砂 `0d7a3ad3-6556-11dd-ad8b-0800200c9a66`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_quartz_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_quartz_resource`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

### 过程：筛分洗选及分级 (`washing`)

#### 输入

##### 产品流

###### 供给天然原砂 (`supplied_raw_sand`)

独立洗选分级接收供应负荷及天然来源记录，一体化内部进料抵消。

- 选定流: 供给天然原砂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_raw_sand 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_raw_sand`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### 洗砂及分级用电 (`washing_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际筛机擦洗机分级机及脱水泵，记录旁路工序及共用表计。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_washing_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_washing_power`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### 购入洗砂补充水 (`wash_water`)

仅购入新水；直接取水及盐水来源须独立资源身份及流域记录，排除内部循环。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_wash_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wash_water`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### 输出

##### 产品流

###### 可售分离天然砾石 (`gravel_coproduct`)

仅真实同时产出合格天然砾石，记录销售状态及分配，不纳入砂 D。

- 选定流: 可售分离天然砾石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_gravel_coproduct 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gravel_coproduct`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

##### 废物流

###### 洗砂矿泥 (`sand_slime`)

实际转交管理细粉黏土有机固体，记录湿质量及实测固含，不设通用组成。

- 选定流: 洗砂矿泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sand_slime 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sand_slime`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

### 过程：工业提纯及干燥 (`purification`)

#### 输入

##### 产品流

###### 砂提纯用电 (`purification_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际擦洗磁选浮选或干燥辅助设备，各实际使用药剂须独立列行。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_purification_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purification_power`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### 硅酸钠药剂 (`sodium_silicate`)

仅已确认使用硅酸钠的选矿路线，采集溶液质量及实际有效比例，不设通用剂量。

- 选定流: 硅酸钠药剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sodium_silicate 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_silicate`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### 硫酸药剂 (`sulfuric_acid`)

仅实际硫酸选矿，保留浓度及残余去向，无关砂路线排除。

- 选定流: 硫酸药剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sulfuric_acid 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sulfuric_acid`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### 干燥天然气 (`dryer_natural_gas`)

仅实际天然气砂干燥炉，保留表计燃气实际组成及热值基准，其他实际燃料热源逐项另列。

- 选定流: 干燥天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_dryer_natural_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dryer_natural_gas`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### 输出

##### 废物流

###### 砂选矿杂质残渣 (`beneficiation_reject`)

仅实际分离杂质残渣，表征矿物药剂残余及实际处理，不假定危险属性。

- 选定流: 砂选矿杂质残渣
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_beneficiation_reject 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_beneficiation_reject`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

### 过程：水细粉及粉尘控制 (`controls`)

#### 输入

##### 产品流

###### 水及粉尘控制用电 (`controls_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际沉淀脱水回用泵或除尘风机，不重复洗砂表计。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_controls_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_controls_power`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### 输出

##### 废物流

###### 转交处理的砂工艺废水 (`wastewater`)

仅实际排污及转交处理，带水体积及固体盐分药剂化验；环境排放须独立去向体积及具名化学物释放。

- 选定流: 转交处理的砂工艺废水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_wastewater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

##### 基本流

###### 矿物 PM10 排入室外空气 (`pm10_air`)

实际控制后采挖运输筛分干燥释放，湿物料不允许假定零，保留粒径及硅组成。

- 选定流: 矿物 PM10 排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pm10_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm10_air`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### 化石二氧化碳排入室外空气 (`co2_air`)

仅实际前景燃烧，采用实测燃料碳及适配因子；排除重复上游燃烧，无煅烧过程不计碳酸盐煅烧。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### 氯化物排入受纳水体 (`chloride_water`)

仅实际盐水洗砂排放，指定受纳水体，测量溶解氯化物浓度及净排水体积，区分天然背景。

- 选定流: 氯化物排入受纳水体
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_chloride_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_chloride_water`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

### 过程：净验收砂装载 (`dispatch`)

#### 输入

##### 产品流

###### 砂装载柴油 (`loading_diesel`)

实际验收产品装载设备，排除独立计量疏浚运输及出口外下游交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_loading_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_loading_diesel`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### 输出

##### 产品流

###### 声明供应出口的天然砂 (`final_product`)

一种天然来源矿物组成及品级，带规定实际水分及加工状态，排除砾石拒收包装。

- 选定流: 声明供应出口的天然砂
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `epa-sand-gravel-1995`, `ifc-construction-2007`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 尽可能细分采出、洗砂及工业选矿。共同产出的天然砂砾及品级保留未分配清单，并采用实测物理因果关系或有据替代；干固体与经济敏感性分析须采用一致品级水分期间。开发复垦按实测寿命验收产量计入一次。矿泥或覆盖层去向不自动产生联产品或避免回填抵扣。原砂及内部循环不自动承担零负荷。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_overburden | development | `overburden` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 称量匹配期间转交物并采样水分固含及实际矿物化学组成。测量体积需实测堆积密度，核对回用库存及最终管理去向，不重复回用固体。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_quartz_resource | extraction | `quartz_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_extraction_diesel | extraction | `extraction_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_extraction_power | extraction | `extraction_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_raw_sand | washing | `supplied_raw_sand` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_washing_power | washing | `washing_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wash_water | washing | `wash_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_gravel_coproduct | washing | `gravel_coproduct` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sand_slime | washing | `sand_slime` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 称量匹配期间转交物并采样水分固含及实际矿物化学组成。测量体积需实测堆积密度，核对回用库存及最终管理去向，不重复回用固体。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_purification_power | purification | `purification_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sodium_silicate | purification | `sodium_silicate` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sulfuric_acid | purification | `sulfuric_acid` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_dryer_natural_gas | purification | `dryer_natural_gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_beneficiation_reject | purification | `beneficiation_reject` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 称量匹配期间转交物并采样水分固含及实际矿物化学组成。测量体积需实测堆积密度，核对回用库存及最终管理去向，不重复回用固体。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_controls_power | controls | `controls_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wastewater | controls | `wastewater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pm10_air | controls | `pm10_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | controls | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_chloride_water | controls | `chloride_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 将校准净排水体积与同一区间受纳介质的代表溶解氯化物样本配对。氯化物 kg = 浓度 mg/L * 排水 m3 / 1000；保留背景采样并分别披露扣除及不确定性。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按校准秤地磅独立称量验收净装载砂 D，核对出货退货及库存；采样匹配湿基水分与筛分矿物化学质量。体积记录需该批实测堆积密度压实及水分，干质量按同一匹配 w 换算，不以干 kg 替代收到基 kg。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明天然砂品级，明确原砂洗砂分级干燥状态及实测水分，位于净装载供应出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D 为出口独立测量的正验收净收到基砂质量（kg），排除包装及拒收。按明确湿基记录水分比例 w，0 <= w < 1；干固体 = D*(1-w)，不另换分母。干基记录仅用匹配实测水分转换为收到基；按体积销售需实测松散或压实堆积密度及水分，不采用通用砂密度。核对原矿干固体、验收品级、单独出售砾石、细粉矿泥、库存及释放；另核对新水、固有水分、内部回用水、蒸发及排放。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为出口独立测量的正验收净收到基砂质量（kg），排除包装及拒收。按明确湿基记录水分比例 w，0 <= w < 1；干固体 = D*(1-w)，不另换分母。干基记录仅用匹配实测水分转换为收到基；按体积销售需实测松散或压实堆积密度及水分，不采用通用砂密度。核对原矿干固体、验收品级、单独出售砾石、细粉矿泥、库存及释放；另核对新水、固有水分、内部回用水、蒸发及排放。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按声明水分及级配供应 1 kg 合格天然砂，不宣称不同品级等强度或最终用途性能等效 |
| excluded_use | 非砂岩石制造的机制砂；再生混凝土骨料；以砾石为参考产品；涂覆或树脂粘结铸造砂；合成二氧化硅；含砂砂浆混凝土玻璃及采挖服务 |
| required_metadata | 场址及年份；陆地河湖海来源及许可采挖范围；实际矿物组成及石英碳酸盐比例；天然砂粒来源；采出加工路线；筛分分布及细粉；纯度及杂质；盐分氯化物；市场品级；水分及干固体基准；净装载出口；水源退水流域；沉积物及废物去向；分配及寿命产量基准 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| epa-sand-gravel-1995 | official_guidance | US EPA, AP-42 section 11.19.1 Sand and Gravel Processing, November 1995, original PDF pp.1–3, process description and construction-sand diagram. https://www.epa.gov/sites/default/files/2020-10/documents/c11s19-1.pdf | 天然建筑及工业砂采出、洗选、分级、脱水及可选提纯干燥，仅采用定性路线，不采用历史粒径、水分、固含或排放数值。 |
| ifc-construction-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Construction Materials Extraction, 30 April 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-construction-materials-extraction-ehs-guidelines-en.pdf | 采石路线、粉尘、水、废物及土地范围；不采用通用消耗区间。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
