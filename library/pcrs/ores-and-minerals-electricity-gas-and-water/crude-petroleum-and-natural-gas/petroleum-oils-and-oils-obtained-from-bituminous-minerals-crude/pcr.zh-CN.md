---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.petroleum-oils-and-oils-obtained-from-bituminous-minerals-crude
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 石油原油及从沥青矿物提取的原油

## 1. 范围与适用性

本 PCR 规定从油藏或沥青矿物取得原油的前景生产记录，终点为声明的原油生产门口，止于精炼燃料制造之前。油砂回收与油页岩干馏为不同的条件路线；达到声明原油原料状态所需的合成原油改质应纳入。本参考功能不是燃料燃烧功能比较。必须声明路线及国家，不得将不同技术合并为假定的代表性收率。来源：`un-cpc-3-structure`、`ifc-onshore-oil-gas-2007`、`nrcan-oil-sands-processing`、`epa-spent-oil-shale`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.petroleum-oils-and-oils-obtained-from-bituminous-minerals-crude |
| classification_refs | CPC 3.0: 12010 |
| covered_products | 油藏原油；回收的原始沥青矿物油；干馏页岩油；炼厂原料用合成原油 |
| excluded_products | 以天然气、未加工油页岩或油砂为参考产品的生产；精炼汽油、柴油、燃料油；煤制油及天然气制油产品 |
| representative_product | 生产门口已分离原油 |
| production_route | 油藏回收或声明的油砂/油页岩路线，继以分离、条件改质及门口储存 |
| market_state | 散装炼厂原油原料；明确稳定化、水及沉积物含量、稀释状态 |



## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供后续炼制用石油原油原料 |
| How much | 1 千克净原油 |
| How well | 声明原油牌号、硫含量、指定温度下的密度、水及沉积物含量和稳定化状态 |
| How long or cycle | 一个生产统计期的产出；不设服务寿命 |
| reference_flow_link | crude_dispatch |



| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 原油及沥青矿物油 `b7ce9d42-8843-4752-b408-040a32e6aa4e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 国家；油田或原料来源；生产统计期；开采路线；原油牌号；密度及温度；硫含量；水及沉积物；稳定化；外加稀释剂名称及质量；生产门口；共产品；分配 |



## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | 采用门口净原油质量，不含游离水、沉积物、外售气体及外加稀释剂。采用 cp_crude_dispatch 采集。 |
| volume_conversion | reference product | Mass | kg | 按相同温度下实测密度及水、沉积物修正将计量体积换算为质量；保留原始体积、温度及密度证据，不设通用桶至千克系数。 |
| gas_state | fuel_gas; natural_gas_coproduct | Volume | m3 | 保留气体组成、压力、温度及干湿基准，区分计量体积与标准体积；不得假定密度或热值。 |
| electric_energy | electricity | Net calorific value | MJ | 电力记录按 1 kWh = 3.6 MJ 换算；这是单位恒等式，不是燃料热值。 |



## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 地下油藏原油，或接收门口的外购开采油砂/油页岩原料；明确区分这些起点 |
| starting_condition_role | 物理前景起点，不代表上游负荷为零 |
| product_classification_scope | 炼制前的原油；矿物原料及伴生气为独立投入或产出 |
| recursive_input_rule | 外购原油投入须连接兼容上游数据集；内部原油转移须核对，不增加第二次外部投入或产出 |
| upstream_dataset_requirement | 电力、燃料、水、氢气及开采原料须连接兼容供应数据集。采矿或钻井不在前景时，连接并披露其上游负荷；不得默认为零负荷起点 |
| disclosure | 前景与背景的采矿及油井建设划分；门口、水管理、火炬、改质、基础设施及封井边界 |



| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | foreground | 纳入回收、集输、分离、处理、边界内储存、直接燃烧、火炬及逸散损失直至声明门口；海上作业须提供场址证据，不可将陆上指导作为海上实测数据。 | ifc-onshore-oil-gas-2007 |
| boundary_routes | bituminous_minerals | 纳入选定采矿/回收或干馏路线及达到规定原油状态所需的改质；独立识别内部重复使用的水、气及热。 | nrcan-oil-sands-processing; epa-spent-oil-shale |
| boundary_completeness | foreground | 本卡片集为采集核心，不能作为各油田的穷尽清单。实际使用的每项化学配方、稀释剂、钻井投入、土地占用、废物及具体物种排放若未列入核心，须逐项增加原子流行。保留不发生的证据；基础设施与封井负荷通过链接数据集或独立记录披露。前景排除门口后的运输、炼制及最终燃烧。 | ifc-onshore-oil-gas-2007 |



## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| recovery | 油藏或沥青矿物回收 | required | 声明的油藏开采、开采原料回收或干馏路线 | 前景采集分块 | 每 1 kg 参考流 |
| conditioning | 分离与残余物管理 | required | 发运前的原油分离及处理 | 前景采集分块 | 每 1 kg 参考流 |
| upgrading | 原油原料改质 | conditional | 声明生产门口之前合成原油需要加氢或脱碳 | 前景采集分块 | 每 1 kg 参考流 |
| development | 油井建设 | conditional | 油井钻井处于声明的前景边界内 | 前景采集分块 | 每 1 kg 参考流 |
| dispatch | 生产门口储存与发运 | required | 声明生产门口的净原油计量 | 前景采集分块 | 每 1 kg 参考流 |



过程分块共同构成一个前景系统，内部转移不计为外部交换。回收分块中的公用工程及直接排放卡片对全系统总量只采集一次，保留按作业分表归属的记录。各条件卡片仅在所述物理交换实际发生时纳入。

### 过程：油藏或沥青矿物回收（`recovery`）

#### 输入

##### 产品流

###### 开采油页岩（`oil_shale`）

使用外购开采页岩的地上干馏路线；连接采矿数据集，不重复计算资源开采。

- 选定流：开采油页岩
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_oil_shale 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_oil_shale`
- 来源：`epa-spent-oil-shale`

###### 开采油砂（`oil_sand`）

外购开采油砂的回收路线；声明原料含水率及沥青含量。

- 选定流：开采油砂
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_oil_sand 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_oil_sand`
- 来源：`nrcan-oil-sands-processing`

###### 电力（`electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

全部前景作业的外购电力；共用电表只分配一次。

- 选定流：电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集本交换的统计期实测总量，依 cp_electricity 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`
- 来源：`ifc-onshore-oil-gas-2007`

###### 柴油（`diesel`）

存在柴油设备时纳入；排除下游交付燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_diesel 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_diesel`
- 来源：`ifc-onshore-oil-gas-2007`

###### 气态天然气（`fuel_gas`）

场址燃烧外部供应气态天然气时纳入；内部回收气为内部转移，不是外购投入。

- 选定流：天然气，气态 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：采集本交换的统计期实测总量，依 cp_fuel_gas 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel_gas`
- 来源：`ifc-onshore-oil-gas-2007`

###### 自来水（`water`）

使用供应自来水时纳入；与地层水及内部循环水分开。

- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：Volume / m3
- 数量规则：采集本交换的统计期实测总量，依 cp_water 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`ifc-onshore-oil-gas-2007`

###### 蒸汽供热（`steam`）

热采或处理使用蒸汽输送的外购热量时纳入；报告压力及蒸汽品质。按 MJ 计量外购热能。自产蒸汽按燃料及水建模，不计为外购热量。

- 选定流：蒸汽供热 `c333ae82-c22d-4cb0-8f0a-b10017eec1f7`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：采集本交换的统计期实测总量，依 cp_steam 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steam`
- 来源：`nrcan-oil-sands-processing`

##### 基本流

###### 地下石油原油（`oil_resource`）

仅油藏原油开采；资源采出量与商品产量分开。

- 选定流：地下石油原油
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_oil_resource 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_oil_resource`
- 来源：`ifc-onshore-oil-gas-2007`

#### 输出

##### 基本流

###### 二氧化碳（化石源）（`co2`）

燃烧、火炬及处理的直接化石源二氧化碳；室外空气，未指定细分区室。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_co2 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_co2`
- 来源：`ifc-onshore-oil-gas-2007`

###### 甲烷 (化石源)（`methane`）

放空、泄漏、储罐及火炬未燃尽的直接化石源甲烷；不可将全部火炬进气视为排放甲烷。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_methane 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_methane`
- 来源：`ifc-onshore-oil-gas-2007`

###### 氮氧化物，以二氧化氮计（`nox`）

室外燃烧氮氧化物以二氧化氮当量质量报告；保留报告约定，不得替换为一氧化二氮。

- 选定流：氮氧化物，以二氧化氮计
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_nox 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_nox`
- 来源：`ifc-onshore-oil-gas-2007`

###### 排入室外空气的二氧化硫（`so2`）

处理含硫燃料或气体时的二氧化硫；仅室外排放。

- 选定流：排入室外空气的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_so2 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_so2`
- 来源：`ifc-onshore-oil-gas-2007`

###### 一氧化碳（化石源）（`co`）

燃烧或火炬向室外空气直接排放化石源一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_co 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_co`
- 来源：`ifc-onshore-oil-gas-2007`

###### 硫化氢（`h2s`）

存在含硫流体并向室外空气排放硫化氢时纳入。

- 选定流：硫化氢 `08a91e70-3ddc-11dd-94a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_h2s 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_h2s`
- 来源：`ifc-onshore-oil-gas-2007`

###### 颗粒物 (PM2.5)（`pm`）

燃烧或物料处理的实测 PM2.5；不可用总粉尘替代。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_pm 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pm`
- 来源：`ifc-onshore-oil-gas-2007`

### 过程：分离与残余物管理（`conditioning`）

#### 输出

##### 产品流

###### 气态天然气（`natural_gas_coproduct`）

跨越生产边界外售的分离气态天然气；内部使用、回注及火炬燃烧不属于共产品外售。

- 选定流：天然气，气态 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：采集本交换的统计期实测总量，依 cp_natural_gas_coproduct 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_natural_gas_coproduct`
- 来源：`ifc-onshore-oil-gas-2007`

##### 废物流

###### 送处理的含盐采出水（`produced_water`）

采出水转移至外部处理或处置时纳入；记录盐度、烃含量及去向。内部回注只记入水量平衡。

- 选定流：送处理的含盐采出水
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_produced_water 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_produced_water`
- 来源：`ifc-onshore-oil-gas-2007`

###### 干馏后废油页岩（`spent_shale`）

地上油页岩干馏路线；支持记录中分列干固体与水。

- 选定流：干馏后废油页岩
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_spent_shale 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_spent_shale`
- 来源：`epa-spent-oil-shale`

###### 油砂提取尾矿（`tailings`）

开采油砂提取路线；声明浆体固体质量分数及保留水量。

- 选定流：油砂提取尾矿
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_tailings 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tailings`
- 来源：`nrcan-oil-sands-processing`

### 过程：原油原料改质（`upgrading`）

#### 输入

##### 产品流

###### 氢气（`hydrogen`）

加氢改质以炼厂原料合成原油为终点时纳入；记录实际净氢气投入。

- 选定流：氢气
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_hydrogen 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hydrogen`
- 来源：`nrcan-oil-sands-processing`

#### 输出

##### 产品流

###### 石油焦（`coke`）

脱碳改质且商品石油焦离开边界时纳入；否则识别实际废物。

- 选定流：石油焦 `444ca42c-1a06-4089-adba-62640255cf25`
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_coke 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_coke`
- 来源：`nrcan-oil-sands-processing`

###### 回收元素硫，粗品（`sulfur`）

改质脱硫回收且外售商品单质硫时纳入。

- 选定流：回收元素硫，粗品 `586e1b09-2904-4b0a-b1ef-fc012259004f`
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_sulfur 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sulfur`
- 来源：`nrcan-oil-sands-processing`

### 过程：油井建设（`development`）

#### 输出

##### 废物流

###### 钻井岩屑（`drill_cuttings`）

前景边界内油井建设采用水基钻井液时纳入；保留钻井液污染及处置记录。

- 选定流：钻井岩屑 `a813d7ec-7db6-4922-be7e-130d41033c6c`
- 流属性/单位：Mass / kg
- 数量规则：采集本交换的统计期实测总量，依 cp_drill_cuttings 按净原油产出归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_drill_cuttings`
- 来源：`ifc-onshore-oil-gas-2007`

### 过程：生产门口储存与发运（`dispatch`）

#### 输出

##### 产品流

###### 原油及沥青矿物油（`crude_dispatch`）

声明生产门口的净原油；参考质量不含伴生气、游离水、矿物固体及外加稀释剂。

- 选定流：原油及沥青矿物油 `b7ce9d42-8843-4752-b408-040a32e6aa4e`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_crude_dispatch`
- 来源：`un-cpc-3-structure`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_operations | 通过 cp_allocation 先分开直接计量的原油专属、天然气专属及共用作业，再分配共用负荷。原油、天然气及回收产品分开记录；回用气体和水属于内部流。 |  |
| allocation_causal | shared_burdens | 采用 cp_allocation 中有证据的过程特定因果关系。不存在可辩护的物理关系时，按实际产品量及价格确定并声明统计期收入份额，同时报告物理分配敏感性。不得假定通用能量或质量份额；火炬与处置不获得替代信用。 |  |
| allocation_losses | losses | 按产品相同的声明分配方法，将损失及处理负荷归属于引起它们的作业。比较分配前总平衡，并保留未分配清单。 |  |



## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_oil_resource | recovery | 地下石油原油 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_oil_shale | recovery | 开采油页岩 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_oil_sand | recovery | 开采油砂 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_electricity | recovery | 电力 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | MJ | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_diesel | recovery | 柴油 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_fuel_gas | recovery | 气态天然气 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | m3 | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_water | recovery | 自来水 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | m3 | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_steam | recovery | 蒸汽供热 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 采用校准热量表记录外购蒸汽热量，单位 MJ；保留支持热量表输出的蒸汽质量流量、压力、温度、品质及凝结水回流条件。 | MJ | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_co2 | recovery | 二氧化碳（化石源） | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_methane | recovery | 甲烷 (化石源) | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_nox | recovery | 氮氧化物，以二氧化氮计 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_so2 | recovery | 排入室外空气的二氧化硫 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_co | recovery | 一氧化碳（化石源） | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_h2s | recovery | 硫化氢 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_pm | recovery | 颗粒物 (PM2.5) | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_natural_gas_coproduct | conditioning | 气态天然气 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | m3 | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_produced_water | conditioning | 送处理的含盐采出水 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_spent_shale | conditioning | 干馏后废油页岩 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_tailings | conditioning | 油砂提取尾矿 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_hydrogen | upgrading | 氢气 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_coke | upgrading | 石油焦 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_sulfur | upgrading | 回收元素硫，粗品 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_drill_cuttings | development | 钻井岩屑 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 对本项具名交换计量、称量或采用可追溯供应及废物转移记录；排放须采用分物种监测或基于实测活动的有记录排放源特定模型 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_crude_dispatch | dispatch | 原油及沥青矿物油 | measurement_record | 统计期；场址；作业；交换量；计量单位；不确定度；净原油产出千克；内部转移扣除；分配证据 | 校准原油质量/体积计量，按同温密度、水及沉积物、稀释剂修正；核对发运与储罐库存 | kg | 每班及月度核对 | 连续完整生产年度或有理由的代表性统计期 | 同一油田或生产场址与门口 | 每 1 kg 参考流 | 校准、原始记录及不确定度 |
| cp_allocation | conditioning | 共产品及共用负荷 | allocation_record | 产品量；价格；共用计量；物理关系；期间；货币 | 按作业核对共用负荷；记录物理因果关系及同期销售记录 | kg; m3; currency | 月度 | 相同生产年度 | 相同生产边界 | 分配至原油的负荷按每 1 kg 参考流归一化 | 未分配清单及敏感性结果 |



### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | 所有清单行 | 统计期净交换量除以同统计期净原油产出质量；共用负荷先按 cp_allocation 分配；参考产出为 1 千克 | 各交换采集协议及 cp_crude_dispatch；cp_allocation | 每 1 kg 参考流的交换量 |  |
| gas_balance | natural_gas_coproduct; methane | 核对采出气量与外售、内部燃烧、回注、放空及火炬；仅按实测组成和燃烧效率计算排放，不以总气量代替物种排放 | 气量、组成及去向记录 | 有物种区分的排放及气体平衡 | ifc-onshore-oil-gas-2007 |



### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference product | 核对所声明原油状态、路线及全部必需限定信息；不可将矿物原料或精炼燃料作为参考产品 | 产品检验及门口记录 |
| dq_completeness | foreground | 逐项核对全部实际交换与场址流程图；缺测须披露估算方法、误差及补测要求；缺测不是零 | 场址平衡、采购、转移与排放记录 |
| dq_range | important flows | 仅采用至少两个独立、边界及状态兼容且已核验原文来源支持的外推经验范围；当前不规定外部经验范围 | 前景记录及来源适用性分析 |



## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | crude_dispatch | 确认参考产出为 1 千克净原油，所有行及采集归一化采用相同门口、期间及净质量基准 |  |
| validate_balance | foreground | 核对油、气、水及固体的分配前平衡，披露盘存变化及测量不确定度；不得用产出量重复代表资源量 |  |
| validate_emissions | direct_emissions | 分别核对燃烧、火炬、放空及逸散；排放物种、质量单位及空气区室须相符；不可将氮氧化物替换为一氧化二氮 | ifc-onshore-oil-gas-2007 |
| validate_uuid | inventory | 逐行核对公共流身份、产品状态、流类型、属性及单位；未解决身份仅能保留为具名交换，未经核验不得采用代理 UUID |  |



## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 为相容路线、状态及边界的炼厂原料供应提供原油生产数据 |
| excluded_use | 燃料燃烧阶段、炼制阶段及无声明混合路线比较 |
| required_metadata | 油田、国家、路线、门口、期间、原油性质、稀释状态、共产品及分配、上游数据集 |
| required_quality_disclosure | 覆盖程度、缺测、未解决身份、测量及模型不确定度、分配敏感性、基础设施与封井边界 |
| update_trigger | 路线、原料、回收技术、门口状态、计量或上游供应发生实质变化 |



## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-structure | official_guidance | Central Product Classification (CPC) Version 3.0 Structure; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 获取日期 2026-09-30 | 类别识别；CSV 第 446-456 行 |
| ifc-onshore-oil-gas-2007 | official_guidance | Environmental, Health, and Safety Guidelines for Onshore Oil and Gas Development; https://www.ifc.org/content/dam/ifc/doc/2000/2007-onshore-oil-gas-development-ehs-guidelines-en.pdf; 获取日期 2026-09-30 | 生产分离、空气排放源、火炬记录及采出水；第 2、4-5、27 页 |
| nrcan-oil-sands-processing | official_guidance | Oil Sands Extraction and Processing; https://prod-natural-resources.azure.cloud.nrcan-rncan.gc.ca/energy-sources/fossil-fuels/oil-sands-extraction-processing; 获取日期 2026-09-30 | 原位及露天开采回收；原油改质；更新于 2025-01-16 |
| epa-spent-oil-shale | official_guidance | Spent Oil Shale; https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/html/oilshale.html; 获取日期 2026-09-30 | 干馏及废页岩；常见问题 8；历史技术说明，不作为现行法律依据 |
