---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.milking-machines
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 挤奶机

## 1. 范围与适用性

本规则涵盖一台完成真空与脉动挤奶功能、经工厂验收的完整挤奶机在出厂门口的生产，并包含声明配置中已装配的挤奶组件。桶式、管道式和计量式配置须由物料清单及验收记录界定。乳品加工和冷却机械、单独销售的零件、安装服务、牧场使用期、使用期清洗及报废处理不在本前景边界内。前景清单包括可归属的部件加工、装配和验收测试；外购部件须链接上游数据集。类别边界依据 `un-cpc-3-2025`，设备构成依据 `fao-milking-machine`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.milking-machines |
| classification_refs | CPC 3.0 44131 挤奶机（`un-cpc-3-2025`） |
| covered_products | 完整的真空脉动式挤奶机，包括桶式和管道式配置 |
| excluded_products | 乳品加工机械；单售零件；安装服务；牧场使用 |
| representative_product | 一台已验收且配置已声明的完整挤奶机 |
| production_route | 适用时的部件加工、外购件接收、装配和验收测试 |
| market_state | 不含运输包装的出厂门口验收成品机器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台完整的验收成品挤奶机 |
| How much | 同一验收配置的 M kg |
| How well | 达到已声明配置的工厂验收要求 |
| How long or cycle | 一台交付机器；使用寿命不计入本生产清单 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 挤奶机 `39d43e6f-0404-4124-bbea-9999523eddb4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；配置；真空与脉动布置；所含接触乳液组件；验收净质量 M；出厂状态 |

构建前景数据包时，应在数据集或等效过程说明中声明必需限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |

## 5. 系统边界

纳入可归属的外购部件和材料、工厂电力、验收成品机器以及单独记录的生产废物。外购流的上游负担通过相应数据集链接，不递归重建本产品类别。使用、牧场安装及报废处理排除在外；扩展边界时应单独声明。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购件及原板材进入工厂时开始；声明供应状态及现场加工路径 |
| starting_condition_role | 制造记录的前景起点 |
| product_classification_scope | 完整挤奶机；CPC 3.0 44131 仅作分类背景 |
| recursive_input_rule | 若投入完整挤奶机，作为上游产品输入记录并披露其数据集，不递归重分类为新产品 |
| upstream_dataset_requirement | 为各外购部件及材料链接上游数据集并记录地域及技术信息 |
| disclosure | 披露配置、外购与自制部件、缺失的部件记录、测试电力、废物去向及出厂截断点 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| manufacture_assembly | 制造、装配和验收测试 | required | 所有验收的完整挤奶机 | 前景生产 | 每台验收成品机器 |

### 过程：制造、装配和验收测试（`manufacture_assembly`）

#### 输入

##### 产品流

###### 不锈钢板材（`steel_sheet`）

仅在现场用板材制造本型号零件时纳入；记录领用板材，不重复计算外购部件内的板材。

- 选定流：不锈钢板材
- 流属性/单位：质量 / kg
- 数量规则：仅在现场用板材制造本型号零件时纳入；记录领用板材，不重复计算外购部件内的板材。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：

###### 真空泵（`vacuum_pump`）

记录装入验收挤奶机的外购真空泵。

- 选定流：真空泵
- 流属性/单位：质量 / kg
- 数量规则：记录装入验收挤奶机的外购真空泵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`fao-milking-machine`

###### 挤奶脉动器（`pulsator`）

记录装入验收挤奶机的外购脉动器。

- 选定流：挤奶脉动器
- 流属性/单位：质量 / kg
- 数量规则：记录装入验收挤奶机的外购脉动器。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`fao-milking-machine`

###### 奶杯组（`teatcup_cluster`）

记录装入验收挤奶机的外购奶杯组；单列的软管不计入本数量。

- 选定流：奶杯组
- 流属性/单位：质量 / kg
- 数量规则：记录装入验收挤奶机的外购奶杯组；单列的软管不计入本数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`fao-milking-machine`

###### 硅胶输奶软管（`milk_tube`）

仅在硅胶输奶软管与奶杯组分开供货时纳入；记录已装软管质量。

- 选定流：硅胶输奶软管
- 流属性/单位：质量 / kg
- 数量规则：仅在硅胶输奶软管与奶杯组分开供货时纳入；记录已装软管质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 来源：`fao-milking-machine`

###### 电力（`electricity`）

记录可归属制造、装配及验收测试的计量电力，按每台验收成品机器汇总。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：净热值 / MJ
- 数量规则：记录可归属制造、装配及验收测试的计量电力，按每台验收成品机器汇总。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 挤奶机（`finished_machine`）

作为已验收成品离开前景过程。

- 选定流：挤奶机 `39d43e6f-0404-4124-bbea-9999523eddb4`
- 流属性/单位：质量 / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：

##### 废物流

###### 不锈钢板边角料（`steel_scrap`）

仅在现场加工板材时纳入；单独称量作为废物离开过程的板材边角料。

- 选定流：不锈钢板边角料
- 流属性/单位：质量 / kg
- 数量规则：仅在现场加工板材时纳入；单独称量作为废物离开过程的板材边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_1 | shared_factory_inputs | 优先依据可追溯记录拆分共享生产过程；无法拆分时依据可验证的物理因果关系分配并披露基准。 | eu-pef-2021 |
| allocation_2 | steel_offcuts | 将单独计量的不锈钢边角料作为废物流报告；不得凭未经核实的回收替代量抵扣本产品负担。 | eu-pef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | manufacture_assembly | reference product | 验收称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台机器 | 同一生产期 | 本工厂 | 每台验收净质量 | 校准证明及验收记录 |
| cp_bom | manufacture_assembly | 物料投入 | 物料清单及领料记录 | 型号；配置；部件号；质量；领料数；已验收机器数 | 按装入本型号机器的实际领用记录逐项核对，外购集成部件不得与单列软管重复。 | kg | 每批 | 同一生产期 | 本工厂 | 每台验收成品机器 | 物料清单、供应票据及领料记录 |
| cp_energy | manufacture_assembly | 电力投入 | 电表及工单 | 电表读数；工单；已验收机器数；计量单位 | 读取可归属电表和验收测试记录；记录从电表单位到 MJ 的换算。 | MJ | 每批 | 同一生产期 | 本工厂 | 每台验收成品机器 | 电表校验及工单 |
| cp_scrap | manufacture_assembly | 板材废物 | 废物称重记录 | 废物类别；净质量；批次；去向；已验收机器数 | 分开称量板材边角料并核对领料批次。 | kg | 每批 | 同一生产期 | 本工厂 | 每台验收成品机器 | 称重票据及废物转移记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_1 | all inventory rows | 同一型号和配置的物料、能源、废物及验收记录必须可追溯；缺项逐项披露。 | 物料清单、工单、计量记录 |
| dq_2 | reference product | 净质量排除运输包装并与验收配置一致。 | 校准称重及验收记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_1 | reference_product | 核对 `finished_machine` 的 M 千克与 `cp_mass` 同一配置的验收净质量一致。 |  |
| validation_2 | component_mass | 核对外购集成件与单列软管不重复计量，现场板材和边角料仅在实际加工时纳入。 | fao-milking-machine |
| validation_3 | inventory_completeness | 披露缺失的部件、能源及废物记录，不以空白当作零。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据包 |
| downstream_use | 作为过程和生命周期模型的生产阶段投影 |
| allowed_use | 声明配置和出厂边界内的机器生产清单 |
| excluded_use | 不得代表牧场使用、安装或报废阶段 |
| required_metadata | 型号、配置、生产地点和期间、M、验收状态、部件边界 |
| required_quality_disclosure | 数据缺口、上游数据集代表性、能源分摊和废物去向 |
| update_trigger | 配置、主要供应商或制造工艺发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品分类边界 |
| fao-milking-machine | official_guidance | https://www.fao.org/4/T0218E/T0218E02.htm | 真空泵、脉动器及奶杯组构成 |
| eu-pef-2021 | official_guidance | https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf | 共享过程的分配层级 |
