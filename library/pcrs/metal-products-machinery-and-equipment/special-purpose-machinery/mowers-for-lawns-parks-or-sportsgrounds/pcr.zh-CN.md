---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mowers-for-lawns-parks-or-sportsgrounds
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 用于草坪、公园或运动场的割草机

## 1. 范围与适用性

本 PCR 适用于以修剪草坪、公园或运动场草地为主要用途的完整割草机生产，包括手推式、乘坐式及自主式机型，以及汽油、柴油和电驱动配置。本规则定义工厂门口的产品数据集，不直接比较割草服务。应声明型号、切割机构、驱动方式、动力来源、随机器安装的电池及附件、制造场址和验收状态。拖拉机悬挂式割刀等其他割草机、手持式修草机、单独销售的刀片、独立充电器和草地修剪服务均不属于本产品边界。联合国 CPC 将 44121 与 44123 分列；割草机生命周期评价中的机型案例不能据此推定全类别的用量。`un-cpc-3-2025`；`un-cpc-exp-3-2025`；`ramboll-husqvarna-2022`；`chalmers-lan-liu-2010`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mowers-for-lawns-parks-or-sportsgrounds` |
| classification_refs | CPC 3.0 44121；仅表示分类身份，不声称已接受分类映射。 |
| covered_products | 工厂门口的完整草坪、公园及运动场用割草机，包括手推式、乘坐式及自主式配置。 |
| excluded_products | 拖拉机悬挂式割刀及其他非草坪割草机（CPC 44123）、单独销售的零件、修草机、服务和二手或再制造机器。 |
| representative_product | 同一声明型号与配置的一台完整验收割草机。 |
| production_route | 外购部件及条件性厂内金属件或塑料件制造，随后装配、验收测试和包装；披露汽油或电动路线。 |
| market_state | 全新、完整、已验收、可出厂的机器；运输包装不计入机器净质量。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台能够修剪草坪、公园或运动场管理草地的完整割草机。 |
| How much | 同一声明配置的一台完整验收机器。 |
| How well | 满足制造商声明的切割和验收规格；记录切割宽度、驱动方式及动力来源。 |
| How long or cycle | 以工厂门口验收为时点；使用寿命及修剪频次属于下游情景参数。 |
| reference_flow_link | `finished_mower` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 用于草坪、公园或运动场的割草机 `2855f6db-d009-4af5-a3de-b01c75d14cd9` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；配置；切割机构；驱动方式与动力来源；适用时已安装电池的化学体系与容量；随附附件；验收记录；实测净质量 M；工厂所在地与基准年。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_conversion` | `site_electricity` | 低位热值 | MJ | 若工厂电表记录为 kWh，应按 1 kWh = 3.6 MJ 将可归属电量转换为 MJ 后报告该选定流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在工厂门口验收的全新完整割草机；披露随附附件及包装是否单独核算。 |
| starting_condition_role | 前景制造的产品输出；外购材料及部件的上游生产保留供应商数据集。 |
| product_classification_scope | CPC 3.0 44121 标识适用产品，不将所有投入一概归入该类别。 |
| recursive_input_rule | 进入返工的完整割草机应作为单独识别的投入并链接原始上游数据集；不得将本 PCR 递归套用到自身输出。 |
| upstream_dataset_requirement | 为购入板材、树脂、部件、燃料、电力和包装链接地域及技术上有代表性的上游数据集；披露替代数据。 |
| disclosure | 报告场址、年份、型号、路线、所含部件、质量范围、直接计量与分配记录、遗漏流和上游数据集来源。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | 产品系统 | 纳入所记录投入的上游生产及进厂运输、可归属的厂内制造、装配、验收测试和出厂包装；边界止于工厂门口。 | `ramboll-husqvarna-2022`; `chalmers-lan-liu-2010` |
| `boundary_downstream` | 下游使用 | 用户修剪时的燃料或电力、维护、出厂后的分销和寿命终结不计入本生产清单；如需评价，应在单独声明的下游阶段建模。 | `ramboll-husqvarna-2022` |
| `boundary_no_double_count` | 外购部件 | 外购涂装件或注塑外壳的供应商生产由其上游数据集承担；不得再将其所含钢板或树脂记为本厂投入。 | `ramboll-husqvarna-2022`; `chalmers-lan-liu-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `mower_manufacture` | 割草机部件制造、装配、验收测试及出厂包装 | `required` | 所有适用路线；逐项执行流卡中的路线条件。 | 前景生产过程 | 同一声明配置的一台完整验收机器。 |

### 过程：割草机制造（`mower_manufacture`）

#### 输入

##### 产品流

###### 热轧钢板（`steel_sheet`）

当工厂自行切割和成形钢制底盘或割台时纳入；记录购入钢板质量，而非成形件质量。

- 选定流：热轧钢板
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`chalmers-lan-liu-2010`

###### ABS 粒料（`abs_granulate`）

仅在本厂注塑 ABS 外壳件时纳入；已计入外购外壳的树脂不得重复计算。

- 选定流：丙烯腈-丁二烯-苯乙烯共聚物（ABS），粒料 `8f1317c1-aa51-4524-8692-74079c923e2c`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`ramboll-husqvarna-2022`

###### 外购涂装金属部件（`painted_metal_parts`）

仅在外购割台或底盘涂装金属件时纳入；若同一部件在本厂由钢板制造并已计入，则不得重复计入。

- 选定流：割草机用涂装金属部件 `8eb07159-a8e1-4d36-9a53-098a20f6fba7`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`chalmers-lan-liu-2010`

###### 汽油内燃机（`gasoline_engine`）

仅汽油驱动割草机纳入外购完整发动机；纯电动机型不适用。

- 选定流：小型汽油内燃机 `139afa12-e131-4bed-8e26-9ab59c89f101`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`chalmers-lan-liu-2010`

###### 电动机（`electric_motor`）

电动割草机安装切割或驱动电机时纳入；记录实际装机电机质量。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`ramboll-husqvarna-2022`

###### 锂离子电池（`liion_battery`）

仅电池驱动机型纳入已安装的完整锂离子电池；按件计数，并另行披露化学体系和容量。

- 选定流：锂离子电池 `5554faa4-1ae2-459a-959a-b2180ab3cedc`
- 流属性/单位：件数 / Item(s)
- 数量规则：每台验收成品机器的已安装电池件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_battery`
- 来源：`ramboll-husqvarna-2022`

###### 外购注塑外壳（`purchased_housing`）

仅外购注塑塑料外壳时纳入；若相同外壳已由本厂记录的 ABS 粒料制成，则不得重复计入。

- 选定流：注塑塑料外壳部件 `42e17f3b-3473-4b98-a766-f11ce51c2669`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`ramboll-husqvarna-2022`

###### 工厂电力（`site_electricity`）

记录本厂可归属的制造、装配和验收测试用电；采用电表或有物理依据的分配方法。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：低位热值 / MJ
- 数量规则：每台验收成品机器实测 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`ramboll-husqvarna-2022`

###### 出厂测试用汽油（`gasoline_test`）

仅汽油割草机在验收测试中运行时纳入；排除用户使用阶段燃油，并披露尾气建模方式。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test`
- 来源：`ramboll-husqvarna-2022`

###### 瓦楞运输纸箱（`corrugated_box`）

仅在出厂割草机随附瓦楞运输纸箱时纳入；可重复使用托盘另行核算，不并入纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ramboll-husqvarna-2022`

###### 柴油发动机（`diesel_engine`）

仅在柴油驱动乘坐式割草机安装完整柴油发动机时纳入；按件计数并披露额定功率。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：件数 / Item(s)
- 数量规则：每台验收成品机器实测 Item(s)
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_engine_count`
- 来源：`ramboll-husqvarna-2022`

###### 柴油验收测试燃油（`diesel_test`）

仅柴油割草机在工厂验收测试中运行时纳入柴油；排除用户使用阶段燃油。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test`
- 来源：`ramboll-husqvarna-2022`

###### 割草机切割刀片（`cutting_blade`）

记录验收割草机上安装的钢制草地切割刀片的实际质量与配置；不得用通用锯片代替。

- 选定流：钢制割草机切割刀片
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`ramboll-husqvarna-2022`

#### 输出

##### 产品流

###### 验收成品割草机（`finished_mower`）

输出为工厂门口同一声明配置的一台完整验收割草机；净质量 M 排除运输包装及独立附件。

- 选定流：用于草坪、公园或运动场的割草机 `2855f6db-d009-4af5-a3de-b01c75d14cd9`
- 流属性/单位：质量 / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025`

##### 废物流

###### 钢制件制造废料（`steel_scrap`）

仅在本厂钢板切割或成形产生并单独收集工业后钢废料时纳入；记录运出质量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：`chalmers-lan-liu-2010`

###### ABS 注塑废料（`abs_moulding_scrap`）

仅本厂注塑产生并单独收集 ABS 浇口料及不合格 ABS 外壳时纳入；不得与塑料包装废物混合。

- 选定流：ABS 注塑废料
- 流属性/单位：质量 / kg
- 数量规则：每台验收成品机器实测 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：`ramboll-husqvarna-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocate_subdivide` | 共用制造过程 | 优先按型号或产线拆分材料、能源、测试及废物记录，保留直接计量结果。 | `eu-pef-2021` |
| `allocate_causal` | 共用制造过程 | 无法拆分时，采用有记录的物理驱动因素，例如按设备运行时间分配电力、按实测材料吞吐量分配废料；证明因果关系并披露分母和敏感性。 | `eu-pef-2021` |
| `allocate_recycling` | 输出废料 | 记录分类废料质量和实际去向；若未单独声明下游方法，不得在本生产清单内主张替代原生材料的抵扣。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `mower_manufacture` | 成品参考机器 | 校准称重与验收记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 各抽样验收配置 | 报告年度 | 场址最终验收 | 每台验收净质量 | 秤校准及验收记录 |
| `cp_bom` | `mower_manufacture` | 钢板、树脂及外购部件 | 受控物料清单及收货称重 | 型号；配置；零件号；材料；收货质量；验收机器数量 | 将外购或消耗的部件质量与已验收型号的物料清单和库存变动核对。 | kg | 每生产批次 | 报告年度 | 制造场址及一级供应商 | 可归属材料质量 / 已验收机器数 | 签核物料清单版本及收货记录 |
| `cp_battery` | `mower_manufacture` | 已安装锂离子电池 | 序列化物料清单和装配记录 | 型号；电池零件号；化学体系；容量；已安装件数；验收机器数量 | 按序列化验收记录和供应商记录核对已安装的完整电池件数。 | Item(s) | 每生产批次 | 报告年度 | 配备电池的路线 | 已安装电池件数 / 已验收机器数 | 电池物料清单及验收记录 |
| `cp_engine_count` | `mower_manufacture` | 已安装柴油发动机 | 发动机物料清单及验收记录 | 型号；发动机零件号；额定功率；已安装件数；验收机器数量 | 按签核物料清单和验收记录核对已安装的完整柴油发动机件数。 | Item(s) | 每生产批次 | 报告年度 | 柴油驱动路线 | 已安装发动机件数 / 已验收机器数 | 发动机物料清单及验收记录 |
| `cp_energy` | `mower_manufacture` | 场址电力 | 电表及生产日志 | 电表时段；kWh；产线运行小时；验收机器数量 | 计量可归属的工厂用电；按产线分表，或对共用电表采用有记录的因果运行小时。 | MJ | 每月 | 报告年度 | 制造场址 | 可归属电量 / 已验收机器数 | 校准电表、电费单及生产工时 |
| `cp_test` | `mower_manufacture` | 汽油或柴油验收测试 | 领油及测试记录 | 燃油种类；燃油质量；测试运行；型号；验收机器数量 | 称量或追溯验收测试领用的汽油或柴油，并扣除退回燃油。 | kg | 每测试批次 | 报告年度 | 制造场址的汽油或柴油路线 | 测试燃油质量 / 已验收机器数 | 领油单及验收日志 |
| `cp_pack` | `mower_manufacture` | 瓦楞纸箱 | 包装物料清单及领用记录 | 纸箱规格；干质量；纸箱数量；验收机器数量 | 称量实际瓦楞纸箱，并将领用数量与验收机器数量核对。 | kg | 每生产批次 | 报告年度 | 出厂包装 | 瓦楞纸箱质量 / 已验收机器数 | 包装规格及领用记录 |
| `cp_scrap` | `mower_manufacture` | 分别收集的钢及 ABS 废料 | 废物称重与分类记录 | 废物代码；材料；称重质量；批次；验收机器数量 | 在转运前分别称量钢及 ABS 废料，并核对批次来源及去向。 | kg | 每次废物转运 | 报告年度 | 厂内制造 | 可归属分类废料 / 已验收机器数 | 校准地磅单及废物转运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_mj` | `site_electricity` | 可归属 MJ = 电表 kWh × 3.6，并先按有记录的共用电表分配规则确定可归属电量。 | 电表 kWh；验收机器数量；共用时的因果产线运行小时 | 每台验收机器的 MJ | `eu-pef-2021` |
| `activity_per_machine` | 所记录投入及废物 | 将实测批次数量归属至声明型号，再除以该型号验收机器数量；批次平衡中保留不合格品与返工。 | 批次数量；验收机器数量；型号记录 | 每台验收机器的交换量 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 所有清单行 | 每项来源记录均须与参考机器采用同一型号、路线、配置和报告期。 | 物料清单版本、序列号与验收记录。 |
| `dq_mass` | 参考流及材料 | 测定净质量 M，核对主要材料及部件数量，不将运输包装并入机器。 | 称重记录、物料清单及包装记录。 |
| `dq_route` | 条件性清单行 | 说明各汽油、柴油、电动、电池、外购外壳及厂内制造清单行适用或缺失的原因。 | 路线及过程记录。 |
| `dq_gap` | 未解决清单行及数量 | 保留 UUID 与范围证据缺口；不得以替代流身份或单个案例数值冒充类别基准。 | 检索审查及前景记录。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 确认仅有一个完整验收的 CPC 44121 割草机输出、准确的参考 UUID，以及同一配置的 M kg。 | `un-cpc-3-2025` |
| `validate_material_route` | 清单 | 核对外购部件与厂内钢板、树脂路线；拒绝重复计入，并记录每项条件是否适用。 | `ramboll-husqvarna-2022`; `chalmers-lan-liu-2010` |
| `validate_utilities` | 电力及测试燃油 | 确认计量电力、适用时的汽油或柴油测试用量、相应单位及有因果依据的场址共用量分配；披露尾气建模且不计入用户使用。 | `eu-pef-2021`; `ramboll-husqvarna-2022` |
| `validate_scrap` | 废物 | 以单独转运记录核对钢及 ABS 废料质量和声明的处理方式；ABS 废物流 UUID 未解决时保持空缺。 | `ramboll-husqvarna-2022`; `chalmers-lan-liu-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景产品制造数据集。 |
| downstream_use | `secondary_dataset`；在供应链边界明确兼容时可作 `background_dataset`。 |
| allowed_use | 声明配置的割草机从摇篮到工厂门口清单，并分别链接上游数据集。 |
| excluded_use | 未提供匹配的使用阶段和质量数据时，不用于割草服务、全寿命影响、比较优越性或其他机型配置的主张。 |
| required_metadata | 型号、路线、切割宽度、电机或发动机、电池化学体系与容量、工厂、年份、M、随附附件、包装范围及上游数据集版本。 |
| required_quality_disclosure | 电表覆盖情况、物料清单完整性、分配驱动因素、缺失的 UUID、数量范围证据缺口、替代数据集、不合格品及废物去向。 |
| update_trigger | 设计或物料清单、动力系统、供应商或场址变更，出现新实测数据，或 UUID 身份得到解决。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，44121 行；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（访问日期 2026-09-24）。 | 产品类别识别。 |
| `un-cpc-exp-3-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版解释说明》，2025 年 6 月 30 日，44121 与 44123 条；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问日期 2026-09-24）。 | 相邻割草机类别边界。 |
| `ramboll-husqvarna-2022` | `literature` | Ramboll Sweden AB 为 Husqvarna Group 编写，《CEORA™ 546 EPOS™ 与 Rider P525DX 生命周期评价》，1.3 版，2022 年 6 月 7 日，第 2、7、12–13 页；https://www.husqvarna.com/-/files/aprimo/husqvarna/robotic-mowers/documents/guideline/qk-274541.pdf?v=3a59cbf2（访问日期 2026-09-24）。 | 机型路线、过程拆分和条件性投入；仅作为案例观察。 |
| `chalmers-lan-liu-2010` | `literature` | Xing Lan、Yu Liu，《割草机生命周期评价：两种割草机案例研究》，查尔姆斯理工大学硕士论文 2010:11，§3.1，第 7 页；https://odr.chalmers.se/bitstreams/286ce17b-0137-4137-82fd-9183f9e1bdf1/download（访问日期 2026-09-24）。 | 手推式机型的金属件制造、外购部件和装配；仅作为案例观察。 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会，《产品环境足迹方法》附件 I §4.5，建议 (EU) 2021/2279，2021 年 12 月 16 日；https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf（访问日期 2026-09-24）。 | 共用过程分配层级。 |
