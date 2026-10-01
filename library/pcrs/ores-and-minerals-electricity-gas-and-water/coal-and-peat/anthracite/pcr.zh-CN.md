---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.anthracite
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 无烟煤

## 1. 范围与适用性

本PCR覆盖原生矿山生产的未煅烧散装无烟煤，直至声明的矿山或选煤厂出厂边界。应区分煤阶、物理选煤状态与验收市场品级。排除烟煤、褐煤、泥炭、型煤、焦炭、煅烧无烟煤、活性炭和未经处理的煤炭废弃物销售。下游运输和燃烧采用独立数据集。`un-ires-2018`。


分类背景：CPC 3.0的11011叶节点取自官方分类结构（2025年6月30日），https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；该资料用于分类识别，不作为方法学来源。IRES第三章SIEC 011采用含水无灰基高位发热量及镜质体反射率定义无烟煤。保留实验室煤阶证据及分析基准；交付产品的千克参考量不等同于该分析基准。上述排除项与生产出厂边界为本PCR的范围规定。`un-ires-2018`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.anthracite |
| classification_refs | CPC 3.0: 11011 |
| covered_products | 已声明品级的原煤或物理选后散装无烟煤 |
| excluded_products | 其他煤阶；团聚或化学、热转化产品；未经处理的废弃物燃料 |
| representative_product | 未煅烧可销售散装无烟煤 |
| production_route | 露天或地下开采；按条件纳入物理选煤；储存与装载 |
| market_state | 已声明水分、粒级与出厂边界的散装固体 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应作为材料或燃料投入的无烟煤；不声明有效供热功能 |
| How much | 1千克验收无烟煤净质量 |
| How well | 声明煤阶分析、粒级、水分、灰分、硫及低位发热量，并注明分析基准 |
| How long or cycle | 在声明生产出厂边界处的一次供应 |
| reference_flow_link | `anthracite_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 硬煤，无烟煤 `9ff1d63b-2eab-4f82-969a-71dd1474f0f1` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 矿山及选煤厂国家和位置；报告年份；开采方法；煤阶证据；原煤或洗选状态；水分与灰分基准；粒级；硫；低位发热量及其基准；出厂边界；水源；分配方法 |

数据集元数据和参考流备注必须披露这些限定信息；缺少限定信息时参考定义不完整。作为本PCR的可比性要求，质量比较要求水分和灰分基准相同；干基与收到基换算须记录实测水分。IRES区分煤阶高位发热量基准与燃料特定发热量；`un-ires-2018`。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `anthracite_output` | 质量 | kg | 按声明水分使用经校准的净质量称重；排除运输皮重。采用cp_anthracite_output将所有交换归一化为每1千克参考流。 |
| `energy_units` | 电力清单行 | 能量 | MJ | 按1 kWh = 3.6 MJ将计量电量转换为MJ；不得根据质量推定煤炭发热量。 |
| `water_basis` | 水清单行 | 质量或体积 | kg; m3 | 保留行单位。仅凭实测密度及温度将外购水体积转换为质量；分别记录总取水、消耗与循环水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化矿山以原位无烟煤为起点；独立选煤场址以外购原煤无烟煤为起点 |
| starting_condition_role | 分别为自然资源或外购进料 |
| product_classification_scope | 无烟煤；不得以分类替代煤阶和状态证据 |
| recursive_input_rule | 外购无烟煤作为连接独立上游数据集的一个投入；不得递归连接本前景数据集。抵销内部转移。 |
| upstream_dataset_requirement | 外购进料须包括开采负担；连接电力、燃料和材料生产以及废物处理，避免活动重复 |
| disclosure | 场址路线、起始状态、出厂边界、前景与上游划分及排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_coverage | production | 纳入前景开采、内部运输、通风、排水、适用的选煤、储存装载、污染控制及可归属的废物处理。采集可归属于产出的开发、闭矿和复垦负担，并披露摊销方法。 | `ifc-mining-ehs-2007` |
| boundary_routes | inventory | 仅在有不存在的记录时省略条件交换。完成数据集前，为实际使用的非柴油干燥燃料、其他炸药、絮凝剂、废油、覆盖层、土地占用与转化及各项水和空气污染物增加独立原子行。此最小路线清单不能替代场址审计。 | `ifc-mining-ehs-2007`, `epa-ap42-coal-cleaning-1995` |
| boundary_partition | emissions | 直接排放在前景核算时，外购柴油供应应排除燃烧。排除客户下游运输及使用；披露资本设备排除并检验重要性。现场处理水须分别记录受纳环境排放及污染物种类，不得以废水作为排放至自然环境的基本流。 | `ifc-mining-ehs-2007` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| mining | 开采与矿山物料处理 | `conditional` | 前景场址开采原生无烟煤；仅在外购进料的上游数据集完整覆盖时省略。 | 前景生产 | 每1千克参考流 |
| preparation | 物理选煤 | `conditional` | 声明出厂边界前进行破碎、筛分、分选或脱水。 | 前景生产 | 每1千克参考流 |
| dispatch | 储存与交付 | `required` | 始终纳入 | 前景生产 | 每1千克参考流 |

### 过程：开采与矿山物料处理（`mining`）

#### 输入

##### 产品流

###### 矿山电力（`mine_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

纳入通风、排水、采掘和内部运输的计量电量。

- 选定流：电力
- 流属性/单位：低位发热量 / MJ
- 数量规则：采用cp_mine_electricity采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_electricity`
- 来源：`ifc-mining-ehs-2007`

###### 移动设备柴油（`mine_diesel`）

使用柴油设备时纳入；已计入服务数据集的承包运输不得重复计入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_mine_diesel采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_diesel`
- 来源：`ifc-mining-ehs-2007`

###### 多孔粒状铵油炸药（`mine_anfo`）

仅在供应商记录确认采用多孔粒状铵油炸药爆破时纳入。

- 选定流：多孔粒状铵油炸药 `c136e796-f073-46c0-b3c5-5d54ed985fcf`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_mine_anfo采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_anfo`
- 来源：`ifc-mining-ehs-2007`

###### 矿物润滑油（`mine_oil`）

采矿设备消耗矿物润滑油时纳入。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_mine_oil采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_oil`
- 来源：`ifc-mining-ehs-2007`

##### 基本流

###### 河水取用（`mine_river_water`）

仅纳入直接取用的河水；外购水作为上游产品交换。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 / m3
- 数量规则：采用cp_mine_river_water采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_river_water`
- 来源：`ifc-mining-ehs-2007`

###### 地下水取用（`mine_groundwater`）

纳入直接取用的地下水，并单独识别矿井排水；不得将全部抽排量视为消耗量。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：体积 / m3
- 数量规则：采用cp_mine_groundwater采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_groundwater`
- 来源：`ifc-mining-ehs-2007`

###### 无烟煤资源开采（`coal_resource`）

记录移除的原位无烟煤，排除覆盖层；核对矿物质和水分基准。

- 选定流：原位无烟煤
- 流属性/单位：质量 / kg
- 数量规则：采用cp_coal_resource采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_coal_resource`
- 来源：`ifc-mining-ehs-2007`

#### 输出

##### 废物流

###### 采矿煤矸石（`mine_gangue`）

纳入转交废物管理的采矿煤矸石；记录去向和湿质量。

- 选定流：煤矸石 `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_mine_gangue采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_gangue`
- 来源：`ifc-mining-ehs-2007`

##### 基本流

###### 矿山逸散甲烷（`mine_methane`）

记录回收或氧化后实际释放至未特指空气的净化石甲烷；回收气体不作为排放。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_mine_methane采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_methane`
- 来源：`ifc-mining-ehs-2007`

###### 现场燃烧二氧化碳（`mine_co2`）

纳入现场燃烧经测量或经验证的燃料碳核算得到的化石二氧化碳；外购燃料供应数据应排除燃烧。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_mine_co2采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_co2`
- 来源：`ifc-mining-ehs-2007`

###### 逸散PM10（`mine_pm10`）

记录矿山作业控制措施后的未特指空气PM10排放；不得与粒径范围重叠的颗粒物总量合并。

- 选定流：PM10，排放至未特指空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_mine_pm10采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_pm10`
- 来源：`ifc-mining-ehs-2007`

### 过程：物理选煤（`preparation`）

#### 输入

##### 产品流

###### 选煤无烟煤进料（`prep_feed`）

仅纳入独立选煤场址的外购原煤无烟煤；供应商开采及原煤状态数据集必须兼容。内部转移记录于质量平衡记录，不作为外部交换。

- 选定流：硬煤，无烟煤 `9ff1d63b-2eab-4f82-969a-71dd1474f0f1`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_prep_feed采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_feed`
- 来源：`epa-ap42-coal-cleaning-1995`

###### 选煤电力（`prep_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

纳入破碎、筛分、分选和机械脱水的电量。

- 选定流：电力
- 流属性/单位：低位发热量 / MJ
- 数量规则：采用cp_prep_electricity采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_electricity`
- 来源：`epa-ap42-coal-cleaning-1995`

###### 外购工艺用水（`prep_water`）

纳入湿法选煤或抑尘所需的外供补充水；排除内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_prep_water采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_water`
- 来源：`epa-ap42-coal-cleaning-1995`

###### 磁铁矿补加（`prep_magnetite`）

仅在重介质分选使用磁铁矿时纳入；供应商发票应识别Fe3O4及补充损失量。

- 选定流：磁铁矿（Fe3O4）
- 流属性/单位：质量 / kg
- 数量规则：采用cp_prep_magnetite采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_magnetite`
- 来源：`epa-ap42-coal-cleaning-1995`

###### 干燥机柴油（`prep_diesel`）

仅在柴油燃烧式热力干燥机运行时纳入；仅采用机械脱水不意味着有燃料投入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_prep_diesel采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_diesel`
- 来源：`epa-ap42-coal-cleaning-1995`

#### 输出

##### 废物流

###### 粗粒煤矸石（`prep_gangue`）

将粗粒矿物煤矸石排弃物与细粒煤泥分开记录。

- 选定流：煤矸石 `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_prep_gangue采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_gangue`
- 来源：`epa-ap42-coal-cleaning-1995`

###### 选煤细粒煤泥（`prep_sludge`）

纳入外送处置的选煤细粒煤泥；采集固体比例及水分，并与可销售煤粉区分。

- 选定流：选煤细粒煤泥
- 流属性/单位：质量 / kg
- 数量规则：采用cp_prep_sludge采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_sludge`
- 来源：`epa-ap42-coal-cleaning-1995`

###### 未经处理的选煤废水（`prep_effluent`）

仅在将该单一选煤废水流转交外部处理时纳入；采集固体及污染物组成。

- 选定流：未经处理的选煤废水
- 流属性/单位：质量 / kg
- 数量规则：采用cp_prep_effluent采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_effluent`
- 来源：`epa-ap42-coal-cleaning-1995`

##### 基本流

###### 干燥机化石二氧化碳（`prep_co2`）

仅纳入现场燃料燃烧；不得与燃烧过程数据集重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用cp_prep_co2采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_co2`
- 来源：`epa-ap42-coal-cleaning-1995`

###### 选煤PM10（`prep_pm10`）

记录装卸、破碎及干燥控制措施后的未特指空气PM10排放；识别排放点。

- 选定流：PM10，排放至未特指空气
- 流属性/单位：质量 / kg
- 数量规则：采用cp_prep_pm10采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_prep_pm10`
- 来源：`epa-ap42-coal-cleaning-1995`

### 过程：储存与交付（`dispatch`）

#### 输入

##### 产品流

###### 储存装载电力（`gate_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

计量可归属的储存、输送和装载电量。

- 选定流：电力
- 流属性/单位：低位发热量 / MJ
- 数量规则：采用cp_gate_electricity采集可归属的期间数量；除以验收无烟煤净产出千克数。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_gate_electricity`
- 来源：`ifc-mining-ehs-2007`

#### 输出

##### 产品流

###### 验收无烟煤参考产品（`anthracite_output`）

生产出厂边界处按声明水分与品级计量的1千克验收散装产品净质量。

- 选定流：硬煤，无烟煤 `9ff1d63b-2eab-4f82-969a-71dd1474f0f1`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每1千克参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_anthracite_output`
- 来源：`ifc-mining-ehs-2007`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_processes | 优先采用分项计量活动进行过程细分，再考虑分配。本归因型供应数据集不得将避免产品抵扣净计入参考清单；系统扩展比较应单独披露。 | `ghg-product-standard-2011` |
| allocation_physical | saleable_outputs | 细分无法分离联产品级时，论证具有因果关系的物理分配驱动因素。仅当可比品级与状态证明质量能够反映负担时，使用同基准可销售质量；对明显不同的品级检验能量或价值替代方案。 | `ghg-product-standard-2011` |
| allocation_waste | gangue_and_sludge | 不向无经济价值废物分配产品负担；纳入可归属处理。如果煤矸石、煤粉或回收甲烷实际出售，采集数量与出厂价值，将其重新归为共产品，并一致论证物理分配或在物理关系不成立时的经济分配。 | `ghg-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mine_electricity` | `mining` | `mine_electricity` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 读取经校准的电力分表及发票；保留kWh读数、电压及3.6 MJ/kWh换算。 | MJ | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_mine_diesel` | `mining` | `mine_diesel` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_mine_anfo` | `mining` | `mine_anfo` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_mine_oil` | `mining` | `mine_oil` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_mine_river_water` | `mining` | `mine_river_water` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 读取取水表及水源记录；区分排水量和耗水量。 | m3 | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_mine_groundwater` | `mining` | `mine_groundwater` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 读取取水表及水源记录；区分排水量和耗水量。 | m3 | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_coal_resource` | `mining` | `coal_resource` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 核对地质开采测量、纯煤吨位、损失记录及水分和矿物质基准。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_mine_gangue` | `mining` | `mine_gangue` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_mine_methane` | `mining` | `mine_methane` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用场址监测的流量、浓度及运行时间；无法连续直接测量时保留经验证的物种特定方法。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_mine_co2` | `mining` | `mine_co2` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用场址监测的流量、浓度及运行时间；无法连续直接测量时保留经验证的物种特定方法。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_mine_pm10` | `mining` | `mine_pm10` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用场址监测的流量、浓度及运行时间；无法连续直接测量时保留经验证的物种特定方法。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_feed` | `preparation` | `prep_feed` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_electricity` | `preparation` | `prep_electricity` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 读取经校准的电力分表及发票；保留kWh读数、电压及3.6 MJ/kWh换算。 | MJ | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_water` | `preparation` | `prep_water` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_magnetite` | `preparation` | `prep_magnetite` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_diesel` | `preparation` | `prep_diesel` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_gangue` | `preparation` | `prep_gangue` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_sludge` | `preparation` | `prep_sludge` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_effluent` | `preparation` | `prep_effluent` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_co2` | `preparation` | `prep_co2` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用场址监测的流量、浓度及运行时间；无法连续直接测量时保留经验证的物种特定方法。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_prep_pm10` | `preparation` | `prep_pm10` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用场址监测的流量、浓度及运行时间；无法连续直接测量时保留经验证的物种特定方法。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_gate_electricity` | `dispatch` | `gate_electricity` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 读取经校准的电力分表及发票；保留kWh读数、电压及3.6 MJ/kWh换算。 | MJ | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |
| `cp_anthracite_output` | `dispatch` | `anthracite_output` | 原始活动记录 | 期间；场址；行数量；单位；品级或组成；期初期末库存；验收无烟煤净产出；分配比例；路线条件 | 采用经校准的地磅、秤或可追溯库存记录；核对期初、接收、转移和期末库存。 | kg | 逐次交付或计量间隔；汇总报告期 | 有代表性的完整年度或披露并覆盖季节变化的生产期 | 声明矿山、选煤厂及出厂边界 | 每1千克参考流 | 校准、发票、实验室报告、库存核对和分配工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `period_normalization` | 所有清单行 | 将可归属报告期交换除以验收无烟煤净产出千克数；内部转移对采用相同实测量，并在系统合并时抵销。 | 各行cp记录；cp_anthracite_output；分配工作表 | 每1千克参考流的交换 | `ghg-product-standard-2011` |
| `electricity_conversion` | 电力清单行 | 期间归一化前，将kWh读数乘以3.6换算为MJ。 | kWh | MJ | `un-ires-2018` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| rank_state | `anthracite_output` | 核验无烟煤煤阶、原煤或洗选状态及一致分析基准；质量不等同于有效能量。 | `un-ires-2018` |
| completeness | 所有清单行 | 进行场址交换审计、废物去向及水与煤平衡；区分实测零值、路线不存在和缺失观察。 | `ifc-mining-ehs-2007`; cp records |
| representativeness | dataset | 使用匹配的产出和交换期间；披露位置、不确定性、替代及未测闭矿负担。行业默认范围不能替代采集。 | cp records |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_flow | 核对1千克净产出、所有限定信息、kg/MJ/m3单位及分母一致性；仅在实测水分换算后比较干基与收到基数值。 | `un-ires-2018` |
| validate_balance | inventory | 核对进料、可销售品级、排弃物、水分变化、库存和转移。识别缺失排放与废物处理，确保资源、燃料燃烧与内部转移不重复。 | `ifc-mining-ehs-2007` |
| validate_evidence | dataset | 每个非零交换均须有兼容的上游数据集或直接排放、废物去向、采集证据及经审查身份。显式保留未解决身份与缺失范围；不得将代理当作已核验对象发布，不得将缺失记录填为零。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 向下游LCA供应声明品级与路线的无烟煤 |
| excluded_use | 未经追加建模的客户有效供热、其他煤阶或转化碳产品 |
| required_metadata | 参考限定信息；场址年份；边界；路线；来源数据集；分配；采集覆盖 |
| required_quality_disclosure | 身份缺口；缺失测量与范围；不确定性；路线不存在；闭矿与资本覆盖 |
| update_trigger | 矿山、品级、路线、水分基准、能源供应、分配或重要监测结果变化 |

## 11. 数据源

| 来源id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-ires-2018` | `official_guidance` | International Recommendations for Energy Statistics, 联合国，2018，第三章SIEC 011（第27页）；第四章4.21–4.24及4.33–4.38段（第44–47页）。https://unstats.un.org/unsd/energystats/methodology/documents/IRES-web.pdf。获取日期2026-10-01。 | 无烟煤煤阶与分析基准；能量单位及燃料特定发热量。质量可比性及声明原煤或洗选状态为本PCR编制要求；不采用默认发热量范围 |
| `epa-ap42-coal-cleaning-1995` | `official_guidance` | 11.10 Coal Cleaning, EPA AP-42, November 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c11s10.pdf. 获取日期2026-09-30。 | 物理选煤与粉尘采集；不采用默认因子 |
| `ifc-mining-ehs-2007` | `official_guidance` | Environmental, Health, and Safety Guidelines, IFC, Mining, 10 December 2007. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf. 获取日期2026-09-30。 | 采矿水、废物及生命周期覆盖；不采用数值限值 |
| `ghg-product-standard-2011` | `standard` | Product Life Cycle Accounting and Reporting Standard, WRI/WBCSD, 2011, chapter 9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf. 获取日期2026-09-30。 | 以分配层级为方法依据，而非完整LCA影响评价方法 |
