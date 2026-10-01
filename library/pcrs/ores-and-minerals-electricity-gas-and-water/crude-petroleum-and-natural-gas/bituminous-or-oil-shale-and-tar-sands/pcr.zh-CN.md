---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.bituminous-or-oil-shale-and-tar-sands
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 沥青页岩、油页岩及焦油砂

## 1. 范围与适用性

本规则适用于开采并在矿山交接点供应的沥青页岩、含干酪根油页岩及含天然沥青的焦油砂原矿。覆盖露天或地下开挖、钻孔爆破、矿内运输及实际发生的机械破碎和筛分。终点在干馏、热水分离沥青或升级加工之前；这些转化得到的油品以及原位热采得到的沥青均不属于本产品。不得以原砂质量代表可回收油量。依据 `un-cpc-3-2025`、`usgs-oil-shale-2018` 及 `usgs-natural-bitumen-2003`。本矿山方法以原矿质量、品位、水分和废石边界为必要信息，独立于油品生产方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.bituminous-or-oil-shale-and-tar-sands |
| classification_refs | CPC 3.0: 12030 |
| covered_products | 未干馏沥青页岩及油页岩；未经沥青分离的焦油砂 |
| excluded_products | 原油；页岩油；分离沥青；合成原油；炼制沥青；煤；路用沥青混合料 |
| representative_product | 矿山交接点原矿油页岩 |
| production_route | 露天或地下采矿；声明实际机械预处理 |
| market_state | 含实测水分的未干馏原矿，散装交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在矿山交接点供应的声明品位原矿油页岩 |
| How much | 1 kg |
| How well | 水分、矿物组成及油产率化验方法必须声明；不承诺油回收性能 |
| How long or cycle | 声明报告期的一次矿山产品交接 |
| reference_flow_link | `shale_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 原矿油页岩 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 原矿类别；矿床及国家；开采技术；交接点；报告期；湿基或干基；水分测试；粒度；干酪根或沥青含量；化验方法；废石与产品分界；分配方法 |

焦油砂数据包采用相同的 1 kg 原矿质量基准，但必须将上述产品名称及参考关联改为 `sand_output`，并提供含沥青原砂的品位化验。每个数据包只声明一个具体参考产品。限定信息必须写入元数据或参考流说明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_mass 的可追溯净交接质量；排除外加水和运输包装，保留声明的固有水分。 |
| `moisture_basis` | reference product | Mass | kg | 记录湿基质量及配套水分化验；仅用同一批次实测含水率计算干基质量，禁止以油产率代替原矿质量。 |
| `electricity_unit` | electricity | Energy | MJ | 电表以 kWh 记录时乘以 3.6 转为 MJ；燃料质量须与电量分开保存。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有地质及测量记录的地下原位矿床；或单独声明的外购原矿 |
| starting_condition_role | 采矿起点；外购原矿不得掩盖其上游采矿 |
| product_classification_scope | CPC 12030 原矿；不包含 CPC 12012 油品 |
| recursive_input_rule | 外购同类原矿作为独立产品投入记录；禁止将本过程产品输出再次展开为自身投入 |
| upstream_dataset_requirement | 外购原矿、电力、柴油、润滑油及炸药连接适配的上游数据集；本矿资源开采不重复链接采矿数据集 |
| disclosure | 起点、交接点、技术、上游链接、废物去向、场内循环及基础设施处理必须披露 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_raw_mineral` | mine-gate | 在任何热转化或沥青分离之前结束前景边界；原位热采油品不属于原矿输出。 | `un-cpc-3-2025`; `usgs-oil-shale-2018`; `usgs-natural-bitumen-2003` |
| `boundary_operations` | mine-gate; site-management | 纳入剥离、采掘、运输、机械调理、抽排水、废石管理及相应直接排放；实际新增化学品须单独设流行。 | `ifc-mining-2007` |
| `boundary_lifecycle` | site-management | 以寿命期产量分摊开发及关闭活动，注明依据；基础设施及土地转化单独披露，禁止用无说明截断删除。 | `ifc-mining-2007` |
| `boundary_water` | water; groundwater; mine_water | 记录新增取水、疏干、回用、存量及排放去向；循环流不重复计为外部取水；治理服务与直接环境排放分开。 | `ifc-mining-2007` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `mine-gate` | 采掘、矿内运输与矿山交接 | required | 全部数据包；破碎、筛分及爆破仅在实际发生时纳入 | foreground production | 1 kg reference flow |
| `site-management` | 矿区水、土地及废物管理 | required | 实际场址活动 | foreground environmental management | 1 kg reference flow |

本清单为最小采集框架，不是截断许可。按实际资源来源、剥离物组成、爆破配方及受纳介质增加必要的原子流行。两个路线互斥；不得将焦油砂与油页岩输出作为同一产品共同归一化。

### 过程：采掘、矿内运输与矿山交接（`mine-gate`）

#### 输入

##### 产品流

###### 电力（`electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

开挖、输送及实际破碎的外购电力；现场燃料发电不得同时作为外购电计入。

- 选定流：电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_energy 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`ifc-mining-2007`

###### 柴油（`diesel`）

矿山设备或现场发电机实际消耗柴油时纳入；记录设备及燃料规格。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-mining-2007`

###### 润滑油（`lubricant`）

矿山设备实际消耗矿物润滑油时纳入；核对库存变化。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-mining-2007`

###### 改性铵油炸药（`ammonium_nitrate`）

仅在钻孔爆破实际采用该配方的成品炸药时纳入。其他配方须另设原子流行。

- 选定流：改性铵油炸药 `2e5d50e4-c17c-4d76-87c0-6a14d0ba374b`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_material 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-mining-2007`

##### 废物流

##### 基本流

###### 地下原位油页岩（`shale_resource`）

油页岩采矿时纳入；确定剔除废料和损失前的含干酪根岩石开采质量。普通页岩不能替代油页岩身份。

- 选定流：地下原位油页岩
- 流属性/单位：Mass / kg
- 数量规则：按 cp_resource 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resource`
- 来源：`un-cpc-3-2025`

###### 地下原位焦油砂（`sand_resource`）

焦油砂采矿时纳入；确定开采矿物总质量，并另测沥青含量。石油质量或放射性参考量不能替代原砂质量。

- 选定流：地下原位焦油砂
- 流属性/单位：Mass / kg
- 数量规则：按 cp_resource 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resource`
- 来源：`un-cpc-3-2025`

#### 输出

##### 产品流

###### 原矿油页岩（`shale_output`）

声明的油页岩产品以 1 千克参考流计，包括实测固有水分；油页岩数据集采用本参考行。

- 选定流：原矿油页岩
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025`

###### 原矿焦油砂（`sand_output`）

仅焦油砂数据集采用 1 千克参考流；将代表性油页岩参考对象及 reference_flow_link 替换为本行，不得将两种输出合并成一个参考流。

- 选定流：原矿焦油砂
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025`

##### 废物流

##### 基本流

###### 二氧化碳（化石源）（`co2`）

纳入报告期内直接化石燃料燃烧的空气排放；排除外购电力的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_air 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-mining-2007`

###### 向空气排放的二氧化氮（`no2`）

纳入燃烧及爆破产生的实际二氧化氮；与一氧化氮、一氧化二氮和亚硝酸根分开。总氮氧化物因子用于本行前必须提供物种拆分依据。

- 选定流：向空气排放的二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：按 cp_air 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-mining-2007`

###### 向空气排放的可吸入颗粒物 PM10（`pm10`）

纳入跨越矿山边界的直接无组织及燃烧 PM10 排放；不得以粗颗粒粉尘、烟炱或城市高烟囱介质替代。

- 选定流：向空气排放的可吸入颗粒物 PM10
- 流属性/单位：Mass / kg
- 数量规则：按 cp_air 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-mining-2007`

### 过程：矿区水、土地及废物管理（`site-management`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

###### 河水（`water`）

从河流取用淡水用于抑尘或矿山运行时纳入；内部循环量不属于新增取水。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：Volume / m3
- 数量规则：按 cp_water 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ifc-mining-2007`

###### 地下水（`groundwater`）

地下水取用或疏干量与河流取水分开记录；识别含水层、排水去向及回用。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：Volume / m3
- 数量规则：按 cp_water 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ifc-mining-2007`

###### 矿产开采用地占用（`land`）

纳入矿区、堆场及废石场的面积时间占用；保留土地类别，并区分土地转化和占用。

- 选定流：矿产开采用地 `b0744c5e-9859-470f-99dc-b117be5a32c5`
- 流属性/单位：Area*time / m2*a
- 数量规则：按 cp_land 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land`
- 来源：`ifc-mining-2007`

#### 输出

##### 产品流

##### 废物流

###### 矿山废石（`overburden`）

纳入声明的采矿路线中剥离并交由废石场管理的无矿岩石；记录地质组成和去向。表土剥离物须另设独立原子流行。

- 选定流：矿山废石
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ifc-mining-2007`

###### 待处理矿山排水（`mine_water`）

仅纳入移交处理运营方的水；直接排入自然环境的水须按受纳介质及单项污染物另行记录。

- 选定流：待处理矿山排水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_water 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ifc-mining-2007`

###### 废润滑油（`used_oil`）

纳入收集后送往回收或处置的废矿物润滑油；区分移交和环境泄漏。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_waste 采集并归一化到每 1 kg 参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ifc-mining-2007`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocate_separate` | all inventory rows | 首先使用子计量和独立作业记录划分产品负荷；废石按废物管理，不自动赋予共产品收益。 |  |
| `allocate_joint` | all inventory rows | 未能划分的共同作业采用记录的物理因果关系分配；缺乏因果依据时按同一报告期可销售原矿干质量分配，披露水分、产品总量、分配比例及敏感性；另售矿物须独立描述。 |  |
| `allocate_integrated` | mine-gate | 一体化油品设施须以子计量隔离原矿采矿负荷；不得将干馏或沥青分离负荷倒灌至此原矿数据集。 | `usgs-oil-shale-2018`; `usgs-natural-bitumen-2003` |

分配方法是本规则的数据采集约定，不是上述地质或环境文件规定的 LCA 分配标准。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | mine-gate | reference product | weighbridge and assay | 净交接质量；类别；批次；水分；品位；期初期末库存 | 校准地磅及同批代表性化验；按矿种区分交接量 | kg | 每批 | 完整声明报告期；覆盖季节差异 | 同一矿床、路线及交接点 | 每 1 kg 参考流 | 校准、化验、账目及分配记录 |
| cp_energy | mine-gate | electricity | meter | 电表读数；子计量分配；自发电量；电压；供应地 | 区分购电和自发电；收集分过程电表及发票 | MJ | 每班及每月核对 | 完整声明报告期；覆盖季节差异 | 同一矿床、路线及交接点 | 每 1 kg 参考流 | 校准、化验、账目及分配记录 |
| cp_material | mine-gate | diesel; lubricant; ammonium_nitrate | stock ledger | 每种材料入库量；期初期末库存；领用；配方；设备 | 按每种材料盘存和领用凭证核对净消耗；体积按实测密度转质量 | kg | 每日及每月核对 | 完整声明报告期；覆盖季节差异 | 同一矿床、路线及交接点 | 每 1 kg 参考流 | 校准、化验、账目及分配记录 |
| cp_resource | mine-gate | shale_resource; sand_resource | survey and assay | 开采体积；原位密度；矿层；品位；贫化；损失 | 测量开挖体积与原位密度并与矿石交接、废石及库存核对 | kg | 每期开挖测量 | 完整声明报告期；覆盖季节差异 | 同一矿床、路线及交接点 | 每 1 kg 参考流 | 校准、化验、账目及分配记录 |
| cp_air | mine-gate | co2; no2; pm10 | monitoring or activity model | 燃料及碳含量；设备小时；排放因子来源；粒径；受纳介质；控制效率 | 保留实测排放或逐源活动模型及公开因子原文，说明不确定性；不得将环境浓度直接当排放量 | kg | 连续或按代表性作业 | 完整声明报告期；覆盖季节差异 | 同一矿床、路线及交接点 | 每 1 kg 参考流 | 校准、化验、账目及分配记录 |
| cp_water | site-management | water; groundwater; mine_water | water meters and transfer records | 来源；取水；疏干；回用；储存；排放；处理去向；采样 | 以校准流量计和移交凭证编制水量平衡，新增取水与内部回用分开 | m3 | 每日及每月平衡 | 完整声明报告期；覆盖季节差异 | 同一矿床、路线及交接点 | 每 1 kg 参考流 | 校准、化验、账目及分配记录 |
| cp_waste | site-management | overburden; used_oil | weighing and manifest | 废物质量；成分；危险性；接收方；运输；处理路线 | 称重记录或地形测量乘实测密度，并保留处置移交及泄漏记录 | kg | 每次移交 | 完整声明报告期；覆盖季节差异 | 同一矿床、路线及交接点 | 每 1 kg 参考流 | 校准、化验、账目及分配记录 |
| cp_land | site-management | land | GIS and mine plan | 土地类别；占用面积；起止日期；复垦；转化类型 | GIS 和采矿计划逐期测量面积时间；另记土地转化及复垦 | m2*a | 每年及重大变化 | 完整声明报告期；覆盖季节差异 | 同一矿床、路线及交接点 | 每 1 kg 参考流 | 校准、化验、账目及分配记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | 同口径、同期且可归属的交换总量除以净交接原矿质量；参考产品输出为 1 千克。 | exchange totals; cp_mass; attribution records | exchange amount per 1 kg reference flow |  |
| `dry_mass` | reference product | 干质量 = 实测湿质量 × (1 − 同批湿基水分质量分数)；干基数据集的全部归一化统一采用干质量。 | cp_mass; paired moisture assay | dry mass |  |
| `electricity_conversion` | electricity | kWh × 3.6 = MJ；单位换算，不是经验能耗因子。 | cp_energy; kWh | MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_traceability` | all inventory rows | 保留原始记录、单位、分配关系、时间、场址、技术和数据缺口；区分实测与模型结果。 | collection protocols |
| `quality_balance` | mine-gate; site-management | 核对原矿、废石、水及库存变化；调查差额，不以任意范围替代记录。 | cp_mass; cp_resource; cp_water; cp_waste |
| `quality_ranges` | all inventory rows | 此规则不设外部经验范围；不同矿床、品位、含水率和技术必须分别采集；至少两项独立且边界兼容的原文证据才能形成外部推断范围。 | foreground records and future source synthesis |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference` | reference product | 确认一个具体原矿参考流、1 kg 基准、全部限定信息及相应化验；原矿不得用石油、普通页岩或沥青代理。 | `un-cpc-3-2025` |
| `validate_measurement` | all inventory rows | 确认中英参考基准、采集汇总和单位一致；库存及湿干基换算采用可追溯记录；不明关系需审查。 |  |
| `validate_boundary` | mine-gate; site-management | 核对热转化排除、上游链接、废物处理及直接排放，避免外购电排放、循环水及废石重复计算。 | `ifc-mining-2007`; `usgs-natural-bitumen-2003` |
| `validate_identity` | all inventory rows | 每行一个具体交换；正式使用 UUID 前核实公开身份、属性、介质和单位；缺失 UUID 保持显式未解决，不得以近似项替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于原矿投入的过程或生命周期模型 |
| allowed_use | 相匹配矿种、含水基准及交接边界的上游原料供给 |
| excluded_use | 代表可回收油量、页岩油、分离沥青或原位热采油品 |
| required_metadata | 限定信息；参考流；场址；年度；路线；边界；上游链接；分配；处理去向 |
| required_quality_disclosure | 采集覆盖、平衡差、实测与模型比例、因子来源、UUID 及范围证据缺口 |
| update_trigger | 矿床、品位、开采技术、水分基准、能源、分配或交接边界变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, rows 447–456. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 原矿与油品分类边界；核验日期 2026-09-30 |
| `mof-serbia-tariff-2024` | official_guidance | 财政部，2024年对塞尔维亚实施的协定税率表，PDF 第30页，第1649项，HS 27141000. https://m.mof.gov.cn/zcfb/202406/P020240625320768010766.pdf | 仅用于专业中文术语；不采用税率或 HS 映射；核验日期 2026-09-30 |
| `usgs-oil-shale-2018` | official_guidance | USGS, Oil Shale, 7 December 2018, introductory kerogen description. https://www.usgs.gov/centers/central-energy-resources-science-center/science/oil-shale | 油页岩与转化油品的区分；核验日期 2026-09-30 |
| `usgs-natural-bitumen-2003` | official_guidance | USGS Fact Sheet 70-03, Heavy Oil and Natural Bitumen—Strategic Petroleum Resources, August 2003, Production Technology. https://pubs.usgs.gov/fs/fs070-03/fs070-03.html | 采砂、沥青分离及升级步骤的区分；不采用案例数量；获取日期 2026-09-30 |
| `ifc-mining-2007` | official_guidance | IFC / World Bank Group, Environmental, Health, and Safety Guidelines for Mining, 10 December 2007, pp. 1–2, 5, 12. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | 矿区水量平衡、废石、润滑油及空气排放采集框架；按现场适用性使用；不采用排放限值为经验范围；核验日期 2026-09-30 |
