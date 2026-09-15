---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-of-alloy-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 合金钢制角材、型材及异型材

## 1. 范围与适用性

本 PCR 覆盖以钢厂发运门为交付点的实心不锈钢及其他合金钢角材、型材及异型材，包括热成形产品以及具有明确冷成形或冷精整阶段的产品。前景边界始于合金钢半成品原料；对于独立冷精整场址，则始于接收的热成形型材。

本 PCR 不包括铁或非合金钢型材、焊接型材、钢板桩、轨道材料、空心型材及管材、钢丝、条杆，以及已为特定结构预制加工的型材。上游钢生产、下游运输、制造加工、安装、使用及寿命终止须由其他连接数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-of-alloy-steel |
| classification_refs | CPC 3.0 41266，“Angles, shapes and sections, of alloy steel”（`unsd-cpc-3-0-structure-2025`） |
| covered_products | 作为未经结构预制加工的钢厂产品供应的实心不锈钢或其他合金钢角材、型材及异型材；包括热成形及已声明的冷成形或冷精整变体 |
| excluded_products | 非合金钢、焊接、空心、轨道、钢丝、条杆及结构预制加工产品 |
| representative_product | 发运状态下具有明确合金钢牌号和截面规格的一种产品 |
| production_route | 热轧、热拉拔或热挤压；仅在实际实施时纳入冷成形或冷精整；须声明实际路线 |
| market_state | 生产钢厂发运门处经检验合格的实心型材，具有已声明表面和热处理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供满足已声明牌号、几何形状和发运状态要求的合金钢角材、型材或异型材 |
| How much | 生产钢厂发运门处 1,000 kg 合格产品净质量 |
| How well | 符合已声明的合金类别、牌号/成分规范、截面规格、尺寸公差、力学性能状态、热处理和表面状态 |
| How long or cycle | 一个生产批次直至发运；不表示使用寿命 |
| reference_flow_link | 无后续冷精整阶段时使用 `hot_formed_alloy_steel_section_output`；否则使用 `reference_product_cold_route` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 合格合金钢型材净质量 |
| 参考产品流 | 合金钢制角材、型材及异型材 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金类别和牌号；成分或产品标准；截面规格和尺寸；成形路线；热处理状态；表面状态；生产场址和地理范围；生产期间；再生含量核算方法；发运门 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用合格产品净质量，不计可重复使用工装和外部包装，将适用的最终产品输出归一化为 1,000 kg。 |
| `steel_mass_consistency` | 含钢产品流和废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 原料、产品、废钢和氧化铁皮采用一致质量基准；披露具有实质影响的水分或附着油。 |
| `electricity_energy` | 交流电输入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电力原始单位并披露精确换算；不得合并电力和燃料能量。 |
| `gas_reference_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 随计量体积记录参考温度、压力和干湿状态。 |
| `process_water_mass` | 外部供应的工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按质量记录跨边界补充水；仅计量体积时，应采用计量温度与压力下有记录的密度换算。 |
| `wastewater_volume` | 热轧废水 | Volume | m3 | 计量跨越边界的废水；内部循环水单独报告。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_gate` | 前景系统边界 | 纳入从已声明合金钢原料开始，经过实际实施的表面修整、再加热、除鳞、成形、冷却、矫直、切割、冷精整、检验直至发运的全部场内作业。 | `eu-jrc-fmp-bref-2022` |
| `boundary_upstream_link` | 上游钢材供应 | 用具有代表性的上游数据集表示钢坯、大方坯或接收的热成形型材；不得把上游炼钢隐含并入未报告的前景假设。 | `eu-jrc-fmp-bref-2022` |
| `boundary_route_disclosure` | 条件过程选择 | 仅在相应纳入条件成立时纳入 `hot_section_forming` 和 `cold_section_finishing`，并声明两个阶段是场内连接还是通过上游数据集连接。 | `unsd-cpc-3-0-structure-2025`, `eu-jrc-fmp-bref-2022` |
| `boundary_completeness` | 前景清单 | 采集企业特定数据，纳入跨边界的所有环境相关物料、能源、废物和基本流；披露排除项及显著性。 | `ec-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化热成形钢厂接收的合金钢钢坯或大方坯；独立冷精整场址接收的热成形合金钢型材 |
| starting_condition_role | 上游生产由连接数据集表示的产品输入 |
| product_classification_scope | 对应 CPC 3.0 41266 的实心合金钢角材、型材及异型材，排除焊接、空心、非合金钢和结构预制加工产品 |
| recursive_input_rule | 接收的同类别型材作为产品输入并连接其上游数据集；不得形成无边界前景递归链 |
| upstream_dataset_requirement | 声明合金类别/牌号、路线、地理范围、再生含量核算、产品状态和交付边界，且不与前景作业重叠 |
| disclosure | 声明原料形态、牌号、质量基准、供应商地理范围、热装状态、场址配置、纳入阶段和最终发运状态 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hot_section_forming` | 型材热成形与精整 | conditional | 当前景边界内进行热轧、热拉拔或热挤压时纳入；可作为场内冷精整的前序阶段。 | 将钢坯或大方坯转化为热成形型材并记录场址投入、废物和直接排放。 | kg 热成形合金钢型材输出 |
| `cold_section_finishing` | 型材冷成形与精整 | conditional | 热成形型材在发运前进行冷成形、冷精整或进一步加工时纳入。 | 将热成形型材转化为最终冷精整参考产品。 | kg 冷精整合金钢型材输出 |

至少纳入一个过程。若两者均纳入，须连接热工序输出和冷工序输入，不得重复负荷。

### 过程：型材热成形与精整（`hot_section_forming`）

#### 输入

##### 产品流

###### 合金钢钢坯输入（`alloy_steel_billet_input`）

仅当钢坯跨越前景边界时记录。

- 选定流：合金钢钢坯
- 流属性/单位：Mass / kg
- 数量规则：投入生产批次的钢坯净质量计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 合金钢大方坯输入（`alloy_steel_bloom_input`）

仅当大方坯跨越前景边界时记录。

- 选定流：合金钢大方坯
- 流属性/单位：Mass / kg
- 数量规则：投入生产批次的大方坯净质量计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 再加热用天然气（`natural_gas_input`）

仅当边界内燃烧气态天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配给生产批次的供应商计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：已声明参考体积条件下每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 热成形用交流电（`hot_forming_electricity`）

记录成形、再加热辅助、除鳞、冷却和精整设备用电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配给热成形与精整的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 工艺水（`process_water_input`）

记录除鳞、冷却或精整的外部补充水；不计内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配给生产批次的边界计量补充水质量；仅计量体积时，应采用计量温度与压力下有记录的密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 热轧润滑剂（`hot_rolling_lubricant`）

仅在使用时记录已声明润滑剂；不得与液压油或清洗剂合并。

- 选定流：热轧油 `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- 流属性/单位：Mass / kg
- 数量规则：领用质量减去有记录的可复用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热成形合金钢型材输出（`hot_formed_alloy_steel_section_output`）

无冷工序时为参考产品；否则为连接的中间产品。

- 选定流：合金钢制角材、型材及异型材
- 流属性/单位：Mass / kg
- 数量规则：合格输出计量值；作为最终产品时归一化为 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

###### 氧化铁皮（`mill_scale_waste`）

按已声明含水含油状态记录分质氧化铁皮。

- 选定流：合金钢氧化铁皮
- 流属性/单位：Mass / kg
- 数量规则：转移质量计量值及有记录的状态修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfer_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 热成形合金钢切头切尾废钢（`hot_process_alloy_steel_scrap`）

记录离开本过程回收或处理的分质切割料及不合格废钢。

- 选定流：合金钢切头切尾废钢
- 流属性/单位：Mass / kg
- 数量规则：离开热成形过程的废钢计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：

###### 含油及氧化铁皮热轧废水（`hot_rolling_wastewater`）

仅记录内部回用后跨越边界的废水。

- 选定流：含油及氧化铁皮热轧废水
- 流属性/单位：Volume / m3
- 数量规则：边界计量废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

###### 排入空气的化石源二氧化碳（`fossil_co2_air`）

记录天然气燃烧产生的监测值或场址计算值。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或依据燃料量、碳含量及氧化数据进行有记录的场址计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emission_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 排入空气的氮氧化物（`nitrogen_oxides_air`）

按设施已声明物种基准记录氮氧化物监测值。

- 选定流：排入未指定空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：分配给生产批次的监测或源测试质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emission_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 排入空气的颗粒物（`particulate_matter_air`）

按设施已声明粒径基准记录颗粒物监测值。

- 选定流：排入未指定空气的颗粒物
- 流属性/单位：Mass / kg
- 数量规则：分配给生产批次的监测或源测试质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适用最终参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emission_records`
- 来源：`eu-jrc-fmp-bref-2022`

### 过程：型材冷成形与精整（`cold_section_finishing`）

#### 输入

##### 产品流

###### 热成形合金钢型材输入（`hot_formed_alloy_steel_section_input`）

记录进入冷成形或冷精整的热成形型材。

- 选定流：合金钢制角材、型材及异型材
- 流属性/单位：Mass / kg
- 数量规则：输入净质量计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 冷精整参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_records`
- 来源：`unsd-cpc-3-0-structure-2025`

###### 冷精整用交流电（`cold_forming_electricity`）

记录冷成形、矫直、切割和精整设备用电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配给冷精整的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷精整参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`ec-pef-method-2021`

###### 冷成形润滑剂（`cold_forming_lubricant`）

仅在使用时记录已声明润滑剂；不得与清洗剂合并。

- 选定流：冷成形润滑剂
- 流属性/单位：Mass / kg
- 数量规则：领用质量减去有记录的可复用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 冷精整参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricant_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷精整参考产品（`reference_product_cold_route`）

纳入冷精整路线时，本流为参考产品。

- 选定流：合金钢制角材、型材及异型材
- 流属性/单位：Mass / kg
- 数量规则：合格输出计量值并归一化为 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 冷精整参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

###### 冷精整合金钢切头切尾废钢（`cold_process_alloy_steel_scrap`）

记录离开冷精整过程的分质切割料和不合格废钢。

- 选定流：合金钢切头切尾废钢
- 流属性/单位：Mass / kg
- 数量规则：离开冷精整过程的废钢计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 冷精整参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_scrap_mass`
- 来源：

###### 废冷成形润滑剂（`spent_cold_forming_lubricant`）

将转移出前景系统的废润滑剂作为独立废物流记录。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：废物转移质量计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 冷精整参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfer_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享作业 | 在可行时通过分表计量或过程细分避免分配，只采集直接归属于已声明产品的数据。 | `ec-pef-method-2021` |
| `allocation_physical_fallback` | 无法细分的多功能过程 | 无法细分或系统扩展时采用有记录的因果物理关系；仅在证明产品质量驱动共享输入和输出时采用质量分配。 | `ec-pef-method-2021` |
| `allocation_scrap_disclosure` | 回收输出 | 将废钢和氧化铁皮作为计量输出记录，本门到门数据集内不计避免负荷；下游研究可采用并披露一致的回收方法。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steel_mass_records` | `hot_section_forming`; `cold_section_finishing` | 钢材输入 | 地磅、投料和库存记录 | 形态；牌号；炉/批号；毛重；皮重；净重；库存变化；时间 | 按批次核对接收、投料和库存。 | kg | 每次事件 | 至少 12 个月或完整生产周期 | 纳入生产线 | 汇总可归属净质量并按最终产品归一化。 | 校准、追溯和核对 |
| `cp_natural_gas_records` | `hot_section_forming` | 天然气 | 供应商及分表记录 | 体积；温度；压力；干湿；热值；分配 | 将校准仪表与账单核对。 | m3 | 连续或计费周期 | 产品期间 | 纳入炉窑 | 汇总可归属修正体积。 | 校准和账单核对 |
| `cp_electricity_records` | 两个路线过程 id | 交流电 | 结算表和分表记录 | kWh；电压；供应商；地理；分配 | 将校准仪表与账单核对。 | kWh 和 MJ | 连续或计费周期 | 产品期间 | 生产和控制设备 | 汇总可归属 kWh，换算 MJ 并归一化。 | 校准、账单和仪表图 |
| `cp_water_records` | `hot_section_forming` | 工艺水 | 边界仪表 | 水源；体积；循环；水质；分配 | 计量外部补充水。 | m3 | 连续或每日 | 产品期间 | 纳入水路 | 汇总可归属输入并核对排放。 | 校准和水平衡 |
| `cp_lubricant_records` | 两个路线过程 id | 润滑剂 | 领用、退回和库存记录 | 身份；规格；领用；退回；库存 | 核对每种具名产品。 | kg | 每次事件 | 产品期间 | 纳入生产线 | 领用加库存减少减可复用退回。 | 批次和库存核对 |
| `cp_product_and_scrap_mass` | 两个路线过程 id | 产品和废钢 | 认证重量和转移记录 | 牌号；截面；批次；产品；废钢；库存 | 核对合格、转移和废钢质量。 | kg | 每批 | 输入期间 | 纳入生产线 | 汇总输出并将最终产品归一化为 1,000 kg。 | 校准、合格和质量平衡 |
| `cp_waste_transfer_records` | 两个路线过程 id | 氧化铁皮和废润滑剂 | 废物转移记录 | 身份；质量；状态；去向；日期 | 使用转移质量计量值。 | kg | 每次转移 | 产品期间 | 废物点 | 分别汇总，不冲减回收收益。 | 称量和接收确认 |
| `cp_wastewater_records` | `hot_section_forming` | 热轧废水 | 排放记录 | 体积；去向；回用；采样期 | 计量回用后的边界流。 | m3 | 连续或事件 | 产品期间 | 排放点 | 汇总可归属边界体积。 | 校准、水平衡和许可记录 |
| `cp_stack_emission_records` | `hot_section_forming` | 二氧化碳、氮氧化物和颗粒物 | 监测、源测试或场址计算 | 污染物；基准；浓度；烟气量；时间；燃料/碳数据 | 使用验证监测；仅凭有记录输入计算二氧化碳。 | kg | 连续或测试期 | 产品期间 | 纳入排放点 | 积分质量、分配并归一化。 | QA、测试和运行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 所有行 | 归一化量 = 可归属期间量 × 1,000 kg / 适用最终合格产品净质量 | 行数量；最终产品质量 | 每 1,000 kg 数量 | `ec-pef-method-2021` |
| `steel_mass_reconciliation` | 每条路线 | 原料 + 期初在制品 = 产品 + 废钢 + 氧化铁皮 + 其他已声明含钢输出 + 期末在制品；调查残差 | 钢材质量和库存变化 | 残差和完整性证据 | |
| `electricity_unit_conversion` | 电力 | MJ = kWh × 3.6 | kWh | MJ | |
| `route_linking` | 连接路线 | 核对热工序输出和冷工序输入及库存变化，上游负荷只计一次。 | 热输出；冷输入；库存变化 | 连接量和残差 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 产品和钢材输入 | 保留合金类别、牌号/成分、炉/批号、截面规格、尺寸、热处理、表面和合格信息。 | 材质和合格证书 |
| `dq_temporal_scope` | 活动数据 | 使用至少连续 12 个月代表性数据或较短的完整生产周期；披露异常运行。 | 覆盖表和运行日志 |
| `dq_meter_coverage` | 能源、水和排放 | 证明仪表及排放点覆盖完整且无重叠。 | 仪表图、校准和核对 |
| `dq_mass_balance` | 含钢流 | 核对原料、产品、废钢、氧化铁皮及库存变化；解释残差。 | 签署的质量平衡表 |
| `dq_upstream_dataset` | 钢材输入 | 匹配上游合金类别、路线、再生含量方法、地理范围和交付边界。 | 供应商声明和数据集元数据 |
| `dq_completeness` | 所有交换 | 为每项排除交换和未解决 Tiangong 身份保留理由。 | 完整性检查表和身份登记表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_identity` | 产品符合性 | 缺少牌号、截面、路线、状态、场址、地理、期间或门信息的数据集不通过校验；焊接、空心、非合金钢或结构预制加工产品不通过校验。 | `unsd-cpc-3-0-structure-2025`, `china-mof-tariff-terminology-2024` |
| `validation_reference_mass` | 参考流 | 确认恰有一个适用最终输出归一化为 1,000 kg 合格产品净质量。 | `ec-pef-method-2021` |
| `validation_route_link` | 过程图 | 确认至少一个条件路线适用，连接的热工序至冷工序产品只计一次。 | `eu-jrc-fmp-bref-2022` |
| `validation_inventory_balance` | 清单 | 确认质量核对、仪表覆盖、废物去向、排放点覆盖及残差或排除项解释。 | `ec-pef-method-2021`, `eu-jrc-fmp-bref-2022` |
| `validation_allocation` | 共享作业 | 确认过程细分证据或有记录的因果物理分配基准。 | `ec-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 具有明确合金钢型材和路线的前景门到门生产数据集 |
| downstream_use | `secondary_dataset`；仅在连接上游数据集并解决全部身份后作为 `background_dataset` |
| allowed_use | 与牌号、路线、地理、期间和分配方法相匹配的钢厂门建模 |
| excluded_use | 非合金钢、焊接、空心或预制产品；无上游钢数据集的从摇篮到大门声明；未建模的施工、使用或寿命终止 |
| required_metadata | PCR id；产品；牌号；标准；截面；尺寸；路线；热处理；表面；场址；地理；期间；原料；上游数据集 id；分配；参考流；流 UUID |
| required_quality_disclosure | 记录覆盖；时间代表性；质量平衡残差；缺口；分配；上游代表性；未解决身份；排除项；不确定性；审查状态 |
| update_trigger | 牌号分组、路线、燃料、设备、边界、供电、上游钢、分配、控制、能源、水、成材率、废物或排放发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41266 身份和类别上下文 |
| `eu-jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Ferrous Metals Processing Industry BREF，2022 年 12 月通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry | 半成品钢下游边界、过程分解、水、废物及受监测排放 |
| `ec-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会，Recommendation (EU) 2021/2279 附件一 Product Environmental Footprint Method，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 功能单位、企业特定数据、完整性、分配和质量 |
| `china-mof-tariff-terminology-2024` | 官方指南（`official_guidance`） | 中华人民共和国财政部，《2024年对塞尔维亚实施的协定税率表》，2024，https://gss.mof.gov.cn/gzdt/zhengcefabu/202406/P020240625320768010766.pdf | HS 72224000 和 72287090 合金钢角材、型材及异型材的中文术语 |
