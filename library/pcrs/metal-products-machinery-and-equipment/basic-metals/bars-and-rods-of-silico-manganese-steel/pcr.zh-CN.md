---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-silico-manganese-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 硅锰钢制条及杆

## 1. 范围与适用性

本 PCR 适用于将复热的硅锰钢方坯或大方坯转化为可销售实心条材及杆材的前景生产。门到门边界始于已识别钢种的复热半成品钢进入轧制或成形生产线，止于经检验、切断或其他精整后可离开轧钢厂的条材及杆材。上游合金钢生产和原料复热以关联的供应商数据集表示。

本类别包括直条或定尺实心硅锰钢条材及杆材，包括特定路线的热成形以及仍符合所售产品规格的已声明后续矫直、热处理、冷加工或表面处理。类别不包括不规则盘卷的热轧盘条、钢丝、高速钢条及杆、空心钻杆、未核实硅锰钢钢种的通用其他合金钢产品、制成品、使用阶段及寿命终结阶段。CPC 正式来源和中国正式税则资料均将本产品与不规则盘卷的硅锰钢热轧盘条区分开来。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-silico-manganese-steel |
| classification_refs | CPC 3.0：41272，精确语义参考 |
| covered_products | 已声明钢种为硅锰钢的实心直条或定尺条材及杆材；热成形产品和已声明的后续精整仍属本范围 |
| excluded_products | 不规则盘卷的盘条；钢丝；空心钻杆；高速钢；不锈钢；未核实硅锰钢成分的其他合金钢钢种；钢管、型材、扁平材、制成品和下游涂层产品 |
| representative_product | 符合已声明钢种、截面、尺寸、表面和交货状态的经检验硅锰钢条材或杆材 |
| production_route | 以复热的硅锰钢方坯或大方坯进行轧制或其他已声明条杆成形，随后进行路线特定的冷却、矫直、切断、热处理、冷加工和表面处理 |
| market_state | 轧钢厂门口准备发运的实心条材或杆材；钢材净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在轧钢厂门口生产符合规格的硅锰钢条材或杆材 |
| How much | 1,000 kg 可销售产品净质量 |
| How well | 符合已声明的硅锰钢钢种、成分、力学性能、尺寸、公差、表面状态和交货规范 |
| How long or cycle | 一个报告期的生产汇总，可追溯至炉次、批次或生产期，并归一化至 1,000 kg 可销售产品 |
| reference_flow_link | 功能单位由下列唯一参考产品流实现；参考数量不含包装或上游半成品钢 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 硅锰钢棒材和杆材 `41d463a0-f0b7-42cd-a183-f69f39a31b01` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 硅锰钢钢种和适用规范；炉次或批次标识；条材或杆材形态；实心截面及公称尺寸；成形路线；任何冷加工、热处理或表面处理；力学性能和公差；表面及交货状态；场址和地理范围；报告期；上游方坯或大方坯及复热数据集；电力电压和供电地理范围；天然气和氧气参考条件；水循环边界；废钢和氧化铁皮去向；产品净质量；包装排除；轧钢厂门口边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有含钢输入和输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用已声明称量点的钢材净干质量。1,000 kg 参考数量不含包装，并分别报告氧化铁皮、切头切尾废钢和不合格品。 |
| `energy_basis` | 外购电力和燃料能量 | Energy | MJ | 保留仪表原始单位和换算因子。按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ；没有记录参考条件和热值时，不得混合燃料体积与能量。 |
| `gas_reference_conditions` | 天然气和工业氧气 | Volume | m3 | 记录各气体体积使用的温度、压力、干湿基准和仪表修正；不得比较或汇总不同参考条件下的体积。 |
| `period_normalization` | 所有可变清单交换 | 行特定流属性 | 行特定单位 | 在同一代表性期间汇总记录，然后将各交换归一化至 1,000 kg 合格参考产品。不合格输出和停机记录应保留在核算中。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 复热的硅锰钢方坯或大方坯，并按钢种、炉次或批次、质量、尺寸、温度状态、供应商和上游数据集识别 |
| starting_condition_role | 轧制或成形生产线入口的上游产品输入 |
| product_classification_scope | 实心硅锰钢条材及杆材；不规则盘卷的盘条、钢丝、空心钻杆和其他合金钢钢种不在本类别内 |
| recursive_input_rule | 已符合本 PCR 条杆产品身份的外购输入，应作为带供应商数据集的上游产品输入记录，不再递归建模为前景生产 |
| upstream_dataset_requirement | 关联钢种及地理范围具有代表性的合金钢方坯或大方坯生产和原料复热数据集；披露技术、再生含量核算、分配方法及供应商边界与前景边界之间的差距 |
| disclosure | 披露成形和精整路线、所含设备、冷加工或热处理步骤、场址和期间、上游数据集链接、内部循环、能源输出、水回用、废钢/氧化铁皮回收、废水处理、包装排除及任何被排除的前景过程 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | 前景转化 | 始于接收复热且已识别钢种的方坯或大方坯，止于合格条材或杆材在轧钢厂门口放行；更早的炼钢和复热用关联上游数据集表示。 | `worldsteel-lci-methodology-2017` |
| `boundary_route_disclosure` | 路线相关作业 | 纳入所声明产品实际使用的全部场内轧制、成形、冷却、矫直、切断、热处理、冷加工、表面处理、排放控制和废水处理作业；明确标记未采用的作业。 | `eu-ferrous-metals-bat-2022` |
| `boundary_direct_exchanges` | 直接排放和回收残余物 | 各直接排放、废水流、废钢流和氧化铁皮流应在越过前景边界时作为单独交换记录；不得隐藏内部回收，也不得将不同流净额合并。 | `eu-ferrous-metals-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `bar_rod_conversion` | 条杆轧制、精整和发运 | `required` | 始终纳入；根据生产记录将路线特定单元作业及其原子交换标为适用或不适用 | 将复热硅锰钢方坯或大方坯转化为可销售条材或杆材的前景过程 | 1,000 kg 合格产品净质量 |

### 过程：条杆轧制、精整和发运（`bar_rod_conversion`）

该综合前景过程覆盖所声明产品实际采用的成形生产线及全部场内路线作业。数据生产者必须把下列清单之外的任何实质性直接交换新增为另一条原子流；下列各行是共同最低要求，并不允许省略场址实测交换。

#### 输入

##### 产品流

###### 复热硅锰钢方坯或大方坯（`received_reheated_billet`）

记录进入成形生产线且钢种匹配的复热半成品钢。接收质量、返回物料和库存变化应与同一报告期核对。

- 选定流：轧制用复热方坯或大方坯，硅锰钢 `6a4763f3-b854-41b4-9780-6e06eedeb322`
- 流属性/单位：Mass / kg
- 数量规则：进入前景成形生产线的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格硅锰钢条材或杆材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`worldsteel-lci-methodology-2017`

###### 外购电力（`purchased_electricity`）

记录轧制、传动、冷却、切断、精整、控制和已分配辅助设施消耗的中压交付电能。Tiangong 精确 UUID 尚未解决；应声明电压、电网地理范围、供应商和计量边界。

- 选定流：中压电力
- 流属性/单位：Energy / MJ
- 数量规则：外购电力计量值减去单独计量的输出电量，并在不改变已记录供电属性的前提下换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格硅锰钢条材或杆材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gases`
- 来源：`eu-ferrous-metals-bat-2022`

###### 气态天然气（`natural_gas`）

仅在天然气跨越边界并用于后加热、热处理、直接燃烧表面处理或其他已声明场内作业时纳入。不得纳入上游发电燃料。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在已声明参考条件下计量的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 采用天然气路线的合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gases`
- 来源：`eu-ferrous-metals-bat-2022`

###### 工业氧气（`industrial_oxygen`）

仅针对已声明的富氧燃烧、氧助火焰清理或其他实测路线作业，纳入外购或跨边界的工业氧气。排除已包含在上游数据集中的氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在已声明纯度和参考条件下计量的氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 采用工业氧气路线的合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gases`
- 来源：`eu-ferrous-metals-bat-2022`

###### 工艺用水（`process_water`）

记录进入湿式除鳞、轧辊冷却、产品冷却、淬火、清洗或排放控制的新水。补充水应与内部循环水分开计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的补充水计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格硅锰钢条材或杆材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`eu-ferrous-metals-bat-2022`

##### 废物流

本 PCR 不规定必须存在的废物输入。若场址消耗废物衍生材料或燃料，应将其作为一个化学和物理身份明确的废物交换新增，并单独记录采集方法和身份审核。

##### 基本流

本 PCR 不规定必须存在的基本流输入。跨越前景边界的任何实测资源开采，应作为单独基本流新增，不得嵌入工艺用水或上游产品数据集。

#### 输出

##### 产品流

###### 合格硅锰钢条材或杆材（`reference_product`）

记录通过所声明规格和检验要求的可销售产品净质量。该质量不含包装。

- 选定流：硅锰钢棒材和杆材 `41d463a0-f0b7-42cd-a183-f69f39a31b01`
- 流属性/单位：Mass / kg
- 数量规则：报告期归一化后的固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finished_product`
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录作为工业后废钢离开产品系统的切头切尾、轧废、不合格试样和不合格钢材。内部循环钢应在质量平衡中保持可见，并另行披露处理方式。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的称量废钢，扣除有记录的库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格硅锰钢条材或杆材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_and_wastewater`
- 来源：`eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### 轧制氧化铁皮（`mill_scale`）

记录从产品表面清除或从水处理系统回收的氧化铁皮。披露含油量、收集点及回用或处置去向。

- 选定流：轧制氧化铁皮 `763bdad1-b443-428a-89b6-371a6807fc6c`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的回收氧化铁皮称量值；只有在含水修正有记录时才作修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格硅锰钢条材或杆材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_and_wastewater`
- 来源：`eu-ferrous-metals-bat-2022`

###### 经处理的钢轧制废水（`rolling_wastewater`）

只有经处理废水离开前景边界时才纳入。工艺用水循环保持在内部，并声明处理程度、去向和监测特性；Tiangong 精确 UUID 尚未解决。

- 选定流：经处理的钢轧制废水
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的废水排放计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格硅锰钢条材或杆材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_and_wastewater`
- 来源：`eu-ferrous-metals-bat-2022`

##### 基本流

###### 二氧化碳（化石源）向空气排放（`fossil_co2_to_air`）

记录本前景过程场内天然气燃烧产生的直接化石源二氧化碳。排除已在外购电力或上游数据集中表示的排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接烟气实测质量，或根据燃料计量和经核实碳数据进行的已披露场址计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 场内使用化石燃料路线的合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-ferrous-metals-bat-2022`

###### 颗粒物，粒径未特指，向空气排放（`particulate_matter_to_air`）

记录边界内机械加工、火焰清理、除鳞、轧制或精整在治理后的粒径未特指颗粒物直接排放总量。不得与单独报告的粒径级分重复计算。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：按排放源计量或由质量流量计算的治理后直接排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格硅锰钢条材或杆材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-ferrous-metals-bat-2022`

###### 氮氧化物向空气排放（`nox_to_air`）

只有边界内天然气燃烧或其他已声明燃烧过程直接排放氮氧化物时才纳入。Tiangong 精确 UUID 尚未解决；应声明监测或因子是否按 NO2 当量报告。

- 选定流：氮氧化物向空气排放
- 流属性/单位：Mass / kg
- 数量规则：按排放源实测，或由监测浓度和烟气流量进行已披露计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 存在边界内燃烧路线的合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-ferrous-metals-bat-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 多产品轧钢厂记录 | 优先采用直接计量、炉次/批次追踪和单元过程细分。在进行任何分配前，将钢种特定的方坯、能源、气体、水、残余物和排放归属至所声明硅锰钢产品。 | `worldsteel-lci-methodology-2017` |
| `allocation_remaining_shared` | 共用公用工程和辅助设施 | 如不能细分，应按导致共用交换的物理驱动因素分配，例如计量运行时间、加工质量或设备能耗；记录驱动因素并测试实质性替代方案。不得默认按收入分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_scrap_scale` | 废钢、氧化铁皮和其他回收残余物 | 报告残余物总质量及去向。本门到门清单内不得扣除避免生产抵扣；任何回收扩展或系统扩展抵扣应连同方法和假设单独报告。 | `worldsteel-lci-methodology-2017`; `eu-ferrous-metals-bat-2022` |
| `allocation_internal_recycling` | 内部返回钢和氧化铁皮 | 内部返回物应在过程质量平衡中保持可见，但不得将内部转移计作第二个边界输出或外部废钢输入。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `bar_rod_conversion` | 复热方坯输入和钢材质量核算 | 地磅、秤、炉次和库存记录 | heat_or_lot_id; grade; input_mass; return_mass; stock_open; stock_close; timestamp; meter_id | 将校准秤记录与炉次/批次和报告期库存变动核对 | kg | 每次接收或每炉次；每月结算 | 完整代表性报告期 | 生产所声明产品的全部生产线 | 汇总钢种特定边界输入，核对库存变动后归一化 | 校准证书；炉次谱系；库存核对；异常记录 |
| `cp_energy_and_gases` | `bar_rod_conversion` | 电力、天然气和工业氧气 | 公用工程仪表、账单和设备分表 | carrier; meter_id; opening; closing; export; unit; voltage; supplier; geography; temperature; pressure; heating_value; purity; operating_route | 读取边界仪表和分表并与账单核对；区分路线及非生产负荷 | MJ, kWh, m3 | 每班或每日；每月账单结算 | 与产品质量相同期间 | 全部边界内设备和已分配辅助设施 | 按载能体和路线汇总，仅扣除单独计量的输出，然后归一化 | 仪表校准；账单；换算表；停机和分配记录 |
| `cp_water_balance` | `bar_rod_conversion` | 工艺补充水和内部循环 | 入口仪表和水平衡记录 | inlet_mass_or_volume; source; recirculated_volume; blowdown; leak; meter_id; timestamp | 计量边界补充水并核对闭路或半闭路循环 | kg or m3 | 每日或每班；每月平衡 | 与产品质量相同期间 | 全部边界内水循环 | 仅将跨边界补充水计作输入；内部回用量作为披露指标保留 | 仪表校准；年度水审计；平衡闭合；维护记录 |
| `cp_finished_product` | `bar_rod_conversion` | 合格参考产品 | 经检定产品秤、检验和发运记录 | heat_or_lot_id; grade; product_form; dimensions; net_mass; disposition; inspection_status; timestamp | 仅汇总符合规格的产品净质量；排除包装和不合格输出 | kg | 每批或每次发运；每月结算 | 完整代表性报告期 | 全部边界内生产线 | 按所声明产品汇总合格质量，并将清单归一化至 1,000 kg | 校准；检验证书；发运记录；拒收记录 |
| `cp_residues_and_wastewater` | `bar_rod_conversion` | 废钢、氧化铁皮和废水 | 废物秤、转移联单、处理记录和出口仪表 | stream_id; material_or_water_identity; gross_mass; tare; moisture; oil_content; treatment; destination; outlet_reading; timestamp | 分别称量各固体流并计量各液体排放；核对库存变动 | kg | 每次转移或连续计量；每月结算 | 与产品质量相同期间 | 服务边界内作业的全部残余物储存点和废水出口 | 不得将不同流净额合并；区分内部返回、外部回收和处置 | 经校准秤/仪表；转移联单；实验室结果；处理和库存记录 |
| `cp_direct_air_emissions` | `bar_rod_conversion` | 化石源 CO2、颗粒物和氮氧化物 | 连续监测、烟道测试、燃料仪表和运行记录 | source_id; pollutant; concentration; gas_flow; duration; measured_mass; fuel_use; factor; factor_basis; control_status; timestamp | 由有效监测数据或有记录的燃料/排放计算获得排放源特定质量；排除上游排放 | kg | 可用时连续监测或代表性监测期；每月汇总 | 覆盖报告期正常工况和有记录的异常工况 | 每个边界内直接排放源 | 按排放源汇总污染物质量，避免颗粒物总量与粒径级分重叠，然后归一化 | 监测 QA/QC；有资质烟道测试；燃料分析；因子来源；治理设施停运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_period_normalization` | 每个可变清单行 | 归一化数量 = 报告期边界交换量 / 报告期合格产品净质量 × 1,000 kg | 经核对的行总量；合格产品净质量 | 每 1,000 kg 参考产品的行数量 |  |
| `calc_steel_mass_balance` | 含钢流 | 质量平衡差 = 复热方坯输入 - 合格产品 - 外排废钢 - 回收氧化铁皮 - 其他单独计量含钢输出 - 库存变化；调查差值，不得强制归零 | `cp_material_mass_balance`、`cp_finished_product` 和 `cp_residues_and_wastewater` 的质量记录 | 已披露核对差值及其占方坯输入比例 | `eu-ferrous-metals-bat-2022` |
| `calc_energy_conversion` | 外购电力 | MJ = 计量 kWh × 3.6；保留原始 kWh 和电压/供电元数据 | 计量 kWh | 以 MJ 表示的外购电力 |  |
| `calc_stack_mass` | 颗粒物和氮氧化物 | 排放源质量 = 有效浓度 × 标准化干烟气流量 × 运行时间，并记录单位、氧和水分修正；只汇总不重叠的污染物定义 | 监测或测试数据；烟气流量；持续时间；修正基准 | 各排放源直接污染物质量 | `eu-ferrous-metals-bat-2022` |
| `calc_fossil_co2` | 化石源二氧化碳 | 优先使用实测排放源质量；否则由计量化石燃料及场址核实的碳数据或排放因子计算，并披露氧化率、热值和参考条件基准 | 燃料记录；经核实因子或碳数据 | 直接化石源 CO2 质量 | `eu-ferrous-metals-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和方坯输入 | 从原料接收到成品检验，保留钢种、炉次/批次谱系、形态、尺寸、表面和交货状态。 | 供应商证书；炉次记录；检验证书 |
| `dq_representativeness` | 全部前景记录 | 使用同一代表性期间和全部边界内生产线；披露停产、异常工况、外包精整和任何被排除的生产期。 | 生产日历；生产线清单；异常记录 |
| `dq_meter_control` | 质量、能源、气体和水 | 使用经校准仪表或有记录的账单核对，并保留原始读数、单位、参考条件和换算因子。 | 校准证书；账单；仪表导出；换算表 |
| `dq_completeness` | 材料、废物、水和直接排放 | 用过程流程图核对化学品、废水和废气流清单；将每项实质性直接交换新增为原子流行。 | 过程流程图；化学品清单；废水图；排放源清册 |
| `dq_upstream_links` | 方坯/大方坯和复热数据集 | 使用供应商和地理范围具有代表性的上游数据集，并披露技术、再生含量和分配差距。 | 供应商数据集元数据；差距评估 |
| `dq_unresolved_identity` | 电力、废水和 NOx 行 | 保留可读原子流名称和前景计量，但在确认与属性及单位匹配的精确 state-100 Tiangong 身份前不得填写 UUID。 | 清单中的未解决项；未来最终确定的检索回执 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 产品类别 | 未证实硅锰钢钢种和实心条杆形态，或表示不规则盘卷盘条、钢丝、空心钻杆或其他合金钢族的数据集应拒绝。 | `unsd-cpc-3-0-structure-2025`; `china-serbia-tariff-2024` |
| `validation_reference_flow` | 功能单位 | 要求参考产品净质量恰为 1,000 kg，排除包装，并声明全部必需限定信息。 |  |
| `validation_boundary` | 起止边界 | 要求存在已识别钢种的复热方坯或大方坯输入、明确的上游方坯和复热数据集，并披露每项纳入的成形和精整作业。 | `worldsteel-lci-methodology-2017` |
| `validation_atomic_inventory` | 清单行 | 拒绝合并载能体、公用工程、废物集合或排放组。每项边界交换必须具有一个物理或化学身份、方向、流类型、属性、单位、数量规则和适用条件。 | `eu-ferrous-metals-bat-2022` |
| `validation_mass_balance` | 含钢流 | 要求合格产品、废钢、氧化铁皮、其他含钢输出和库存变化与方坯输入核对；调查并披露差值。 | `eu-ferrous-metals-bat-2022` |
| `validation_no_double_count` | 能源、水、残余物和排放 | 拒绝将上游排放再次报告为直接排放、将循环水计作补充水、将内部废钢计作边界输出，或将颗粒物总量与已报告粒径级分重叠。 | `worldsteel-lci-methodology-2017`; `eu-ferrous-metals-bat-2022` |
| `validation_data_period` | 前景记录 | 分子交换量和合格产品分母应使用相同代表性期间和场址范围，并披露异常工况处理。 | `eu-ferrous-metals-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审核和发布后为 `secondary_dataset` 和 `background_dataset` |
| downstream_use | 用于产品 LCI 以及需要轧钢厂门口硅锰钢条材或杆材供应的下游 process 或 lifecyclemodel 构建的前景数据包 |
| allowed_use | 钢种、路线、地理范围、技术和期间兼容，且用户保留已声明起始条件、上游链接和分配方法的建模 |
| excluded_use | 不规则盘卷的盘条、钢丝、高速钢、空心钻杆、未核实钢种的通用合金钢、制成品、缺少上游链接的从摇篮到大门声明，或未统一功能等效性且未经审核的公开比较声明 |
| required_metadata | PCR id 和版本；产品 UUID；钢种/规范；炉次/批次覆盖；尺寸和交货状态；成形和精整路线；场址/地理范围；期间；上游方坯和复热数据集；电压/供电组合；气体参考条件；水边界；分配；废钢/氧化铁皮/废水去向；直接排放方法；未解决 UUID |
| required_quality_disclosure | 数据覆盖和排除；仪表和实验室 QA/QC；质量平衡差；代表性；供应商数据差距；分配敏感性；异常工况处理；精确与未解决流身份 |
| update_trigger | 钢种族、起始进料状态、成形或精整路线、设备、场址、能源供应、水系统、排放治理、分配方法、上游数据集发生变化，或质量/能量平衡发生实质变化；任何未解决 UUID 获确认 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，代码 41272。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | 正式分类身份和参考产品类别 |
| `china-serbia-tariff-2024` | `official_guidance` | 中华人民共和国财政部，《2024年对塞尔维亚实施的协定税率表》，税则号列 72272000 和 72282000。https://m.mof.gov.cn/zcfb/202406/P020240625320768010766.pdf（检索日期：2026-09-04） | 专业中文产品术语，以及与不规则盘卷硅锰钢盘条的区分 |
| `eu-ferrous-metals-bat-2022` | `standard` | 欧盟委员会，Commission Implementing Decision (EU) 2022/2110，黑色金属加工行业 BAT 结论。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110（检索日期：2026-09-04） | 热轧过程分解；能源、水、化学品、废水、残余物和直接排放监测要求；BAT 水平不作为 PCR 经验范围 |
| `worldsteel-lci-methodology-2017` | `method_factor` | 世界钢铁协会，《Life Cycle Inventory Methodology Report》，2017。https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914（检索日期：2026-09-04） | 钢铁产品工厂门口边界、长材适用性、技术/地理披露、分配和废钢核算原则 |
