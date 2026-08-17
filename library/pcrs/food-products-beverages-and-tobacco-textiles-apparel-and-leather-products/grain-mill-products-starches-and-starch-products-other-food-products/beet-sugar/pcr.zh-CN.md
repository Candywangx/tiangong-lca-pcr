---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.beet-sugar
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 甜菜糖

## 1. 范围与适用性

本 PCR 覆盖由甜菜制造市场化糖的工厂门过程：接收与清洗、切丝、逆流渗出、糖汁加灰/碳酸化与过滤、蒸发、结晶、离心、成品整理以及适用的包装。场内实施时，还纳入甜菜粕处理、场内能源转换和废水处理。甜菜种植、入厂运输及购入材料和能源生产为链接上游；工厂门后的配送、使用和寿命终止不在前景边界内。不覆盖甘蔗糖或主要以外购原糖为原料的精炼。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.beet-sugar` |
| classification_refs | CPC 3.0：23512 甜菜糖 |
| covered_products | 蔗糖从甜菜中提取的市场化糖 |
| excluded_products | 甘蔗糖；外购原糖精炼；以糖浆、糖蜜、甜菜粕或碳酸化石灰为参考产品 |
| representative_product | 甜菜来源晶体糖，工厂生产混合 |
| production_route | 接收清洗；切丝渗出；净化；蒸发结晶；成品整理；适用的甜菜粕、能源、处理和包装操作 |
| market_state | 工厂门处合格甜菜糖净产品，散装或包装状态另行声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产工厂门提供市场化甜菜糖 |
| How much | 1 kg 合格甜菜糖净质量，不含包装 |
| How well | 声明等级、蔗糖含量基准、水分、物理形态和包装状态 |
| How long or cycle | 一个放行批次或声明的榨季平均生产混合 |
| reference_flow_link | `sugar_finishing` 中的 `reference_beet_sugar` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Beet sugar `f6141c1d-e50a-4f80-9125-cc7eb82eb51a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 甜菜原料来源；路线；等级；蔗糖与水分基准；物理形态；散装或包装；场址/地域；榨季；分配；共产品状态与去向 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告合格糖净质量并排除所有包装。 |
| `wet_dry_basis` | 甜菜、甜菜粕、糖蜜、石灰和污泥 | Mass | kg | 分别记录湿质量和干物质。 |
| `sucrose_basis` | 甜菜、糖汁、糖蜜和糖 | Mass fraction | kg/kg | 声明分析方法、取样点和湿/干基准。 |
| `carrier_specific_energy` | 电力、蒸汽、热水和各燃料 | Energy | kWh or MJ | 分别计量各载体，防止燃料投入与自产能源重复计算。 |
| `water_balance` | 外部、物料内含、回收、蒸发和排放水 | Mass or volume | kg or m3 | 将外部取水、内部循环和排放分开。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂门处已接收的甜菜 |
| starting_condition_role | 前景制造门 |
| product_classification_scope | CPC 3.0 code 23512 |
| recursive_input_rule | 重新进入的甜菜糖或中间产品保持为可见产品投入，并链接来源数据集。 |
| upstream_dataset_requirement | 将甜菜、每种购入能源载体、每种化学品、水和每种包装材料链接至具体上游数据集。 |
| disclosure | 声明榨季、技术、内部循环、甜菜粕路线、能源系统、处理、包装、共产品、分配和排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate_scope` | 前景制造 | 纳入全部必需和适用的条件性工厂操作及其直接控制的公用工程、废物与排放。 | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `sb_atomic_exchanges` | 清单 | 每种材料、化学品、电力、蒸汽、热水、燃料、制冷剂、包装、废物和排放均保持为独立交换。 | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `sb_internal_recycling` | 内部水、冷凝水、糖汁、糖和能源 | 每项内部转移只表示一次，并防止等量外部投入或抵扣。 | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974` |
| `sb_conditional_routes` | 甜菜粕、能源、化学品、制冷和包装 | 仅在确有该技术或材料时纳入条件性原子卡；否则记录不适用。 | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `sb_upstream_downstream` | 链接生命周期阶段 | 链接购入投入的上游，并从本工厂门数据集排除配送、使用和寿命终止。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `beet_reception_cleaning` | 甜菜接收、水力输送、清洗与杂质去除 | `required` | 所有交付甜菜均须纳入 | `foreground_process` | `cleaned_sugar_beets` |
| `slicing_diffusion` | 甜菜切丝与逆流渗出 | `required` | 始终纳入 | `foreground_process` | `raw_diffusion_juice` |
| `juice_purification` | 糖汁加灰、碳酸化、澄清与过滤 | `required` | 始终纳入；条件试剂卡仅适用于实际路线 | `foreground_process` | `purified_thin_juice` |
| `evaporation_crystallisation` | 糖汁蒸发、真空结晶与离心 | `required` | 始终纳入 | `foreground_process` | `sugar_crystals` |
| `sugar_finishing` | 糖干燥、冷却、储存、质量放行与包装 | `required` | 始终纳入；包装卡仅适用于包装参考产品 | `foreground_process` | `reference_beet_sugar` |
| `pulp_handling` | 甜菜粕压榨、干燥与共产品制备 | `conditional` | 仅纳入场址边界内实际实施的操作 | `foreground_process` | `pressed_beet_pulp` |
| `onsite_energy_supply` | 场内蒸汽、电力与热水生产 | `conditional` | 仅在场内转换能源载体时纳入 | `foreground_process` | `onsite_steam_output` |
| `wastewater_treatment` | 废水收集、处理、排放与残余物管理 | `required` | 纳入场内处理；否则建模场外移交 | `foreground_process` | `treated_process_water` |

### 过程：甜菜接收、水力输送、清洗与杂质去除（`beet_reception_cleaning`）

#### 输入

##### 产品流

###### Sugar beet（`sugar_beets_received`）

Sugar beet 作为一个单独定量的产品流跨越甜菜接收、水力输送、清洗与杂质去除边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Sugar beet
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`
- 数量范围：甜菜投入产率 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：6
  - 上限：8
  - 单位：kg accepted sugar beet
  - 基准：每 1 kg 合格甜菜糖净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ec-jrc-fdm-bref-2019`

###### Process water（`reception_makeup_water`）

Process water 作为一个单独定量的产品流跨越甜菜接收、水力输送、清洗与杂质去除边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Electricity, facility supply（`reception_electricity`）

Electricity, facility supply 作为一个单独定量的产品流跨越甜菜接收、水力输送、清洗与杂质去除边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`


##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


#### 输出

##### 产品流

###### Cleaned sugar beet（`cleaned_sugar_beets`）

Cleaned sugar beet 作为一个单独定量的产品流跨越甜菜接收、水力输送、清洗与杂质去除边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Cleaned sugar beet
- 流属性/单位：Mass / kg
- 数量规则：由采集记录按物料、水量或能源平衡单独计算本流数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`us-epa-beet-sugar-1974`


##### 废物流

###### Soil from sugar beet cleaning（`beet_soil_waste`）

Soil from sugar beet cleaning 作为一个单独定量的废物流跨越甜菜接收、水力输送、清洗与杂质去除边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Soil from sugar beet cleaning
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Stones from sugar beet cleaning（`beet_stone_waste`）

Stones from sugar beet cleaning 作为一个单独定量的废物流跨越甜菜接收、水力输送、清洗与杂质去除边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Stones from sugar beet cleaning
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`us-epa-beet-sugar-1974`

###### Weeds from sugar beet cleaning（`beet_weed_waste`）

Weeds from sugar beet cleaning 作为一个单独定量的废物流跨越甜菜接收、水力输送、清洗与杂质去除边界。该植物杂质的身份、数量与去向必须同甜菜顶叶及其他杂质分开记录。

- 选定流：Weeds from sugar beet cleaning
- 流属性/单位：Mass / kg
- 数量规则：称量离开过程的杂草质量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`us-epa-beet-sugar-1974`

###### Beet tops from sugar beet cleaning（`beet_top_waste`）

Beet tops from sugar beet cleaning 作为一个单独定量的废物流跨越甜菜接收、水力输送、清洗与杂质去除边界。该植物杂质的身份、数量与去向必须同杂草及其他杂质分开记录。

- 选定流：Beet tops from sugar beet cleaning
- 流属性/单位：Mass / kg
- 数量规则：称量离开过程的甜菜顶叶质量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`us-epa-beet-sugar-1974`

###### Sugar-beet cleaning wastewater（`cleaning_wastewater`）

Sugar-beet cleaning wastewater 作为一个单独定量的废物流跨越甜菜接收、水力输送、清洗与杂质去除边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Sugar-beet cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


### 过程：甜菜切丝与逆流渗出（`slicing_diffusion`）

#### 输入

##### 产品流

###### Cleaned sugar beet（`diffusion_beet_input`）

Cleaned sugar beet 作为一个单独定量的产品流跨越甜菜切丝与逆流渗出边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Cleaned sugar beet
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`us-epa-beet-sugar-1974`

###### Process water（`diffusion_fresh_water`）

Process water 作为一个单独定量的产品流跨越甜菜切丝与逆流渗出边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Recovered process condensate（`diffusion_recovered_condensate`）

Recovered process condensate 作为一个单独定量的产品流跨越甜菜切丝与逆流渗出边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Recovered process condensate
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Beet-pulp press water（`diffusion_pulp_press_water`）

Beet-pulp press water 作为一个单独定量的产品流跨越甜菜切丝与逆流渗出边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Beet-pulp press water
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`us-epa-beet-sugar-1974`

###### Steam（`diffusion_steam`）

Steam 作为一个单独定量的产品流跨越甜菜切丝与逆流渗出边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Electricity, facility supply（`diffusion_electricity`）

Electricity, facility supply 作为一个单独定量的产品流跨越甜菜切丝与逆流渗出边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`


##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


#### 输出

##### 产品流

###### Raw sugar-beet diffusion juice（`raw_diffusion_juice`）

Raw sugar-beet diffusion juice 作为一个单独定量的产品流跨越甜菜切丝与逆流渗出边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Raw sugar-beet diffusion juice
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Wet beet pulp（`wet_beet_pulp`）

Wet beet pulp 作为一个单独定量的产品流跨越甜菜切丝与逆流渗出边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Wet beet pulp
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`


##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


### 过程：糖汁加灰、碳酸化、澄清与过滤（`juice_purification`）

#### 输入

##### 产品流

###### Raw sugar-beet diffusion juice（`purification_raw_juice`）

Raw sugar-beet diffusion juice 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Raw sugar-beet diffusion juice
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`us-epa-beet-sugar-1974`

###### Calcium oxide（`purification_quicklime`）

Calcium oxide 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Calcium oxide
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Carbon dioxide（`purification_carbon_dioxide`）

Carbon dioxide 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Carbon dioxide
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Sulfur dioxide（`purification_sulfur_dioxide`）

Sulfur dioxide 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Sulfur dioxide
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`us-epa-beet-sugar-1974`

###### Diatomaceous earth filter aid（`purification_diatomaceous_earth`）

Diatomaceous earth filter aid 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Diatomaceous earth filter aid
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-fdm-bref-2019`

###### Process water（`purification_process_water`）

Process water 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Steam（`purification_steam`）

Steam 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Electricity, facility supply（`purification_electricity`）

Electricity, facility supply 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`


##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


#### 输出

##### 产品流

###### Purified sugar-beet thin juice（`purified_thin_juice`）

Purified sugar-beet thin juice 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Purified sugar-beet thin juice
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Carbonatation lime（`carbonatation_lime_product`）

Carbonatation lime 作为一个单独定量的产品流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Carbonatation lime
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### 废物流

###### Waste carbonatation lime（`carbonatation_lime_waste`）

Waste carbonatation lime 作为一个单独定量的废物流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Waste carbonatation lime
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Spent diatomaceous earth filter aid（`spent_diatomaceous_earth`）

Spent diatomaceous earth filter aid 作为一个单独定量的废物流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Spent diatomaceous earth filter aid
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Sugar-juice purification wastewater（`purification_wastewater`）

Sugar-juice purification wastewater 作为一个单独定量的废物流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Sugar-juice purification wastewater
- 流属性/单位：Volume / m3
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### 基本流

###### Ammonia, to air（`purification_ammonia_air`）

Ammonia, to air 作为一个单独定量的基本流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Ammonia, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`us-epa-beet-sugar-1974`

###### Sulfur dioxide, to air（`purification_sulfur_dioxide_air`）

Sulfur dioxide, to air 作为一个单独定量的基本流跨越糖汁加灰、碳酸化、澄清与过滤边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Sulfur dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`us-epa-beet-sugar-1974`


### 过程：糖汁蒸发、真空结晶与离心（`evaporation_crystallisation`）

#### 输入

##### 产品流

###### Purified sugar-beet thin juice（`evaporation_juice_input`）

Purified sugar-beet thin juice 作为一个单独定量的产品流跨越糖汁蒸发、真空结晶与离心边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Purified sugar-beet thin juice
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Steam（`evaporation_steam`）

Steam 作为一个单独定量的产品流跨越糖汁蒸发、真空结晶与离心边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Electricity, facility supply（`evaporation_electricity`）

Electricity, facility supply 作为一个单独定量的产品流跨越糖汁蒸发、真空结晶与离心边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Cooling water（`evaporation_cooling_water`）

Cooling water 作为一个单独定量的产品流跨越糖汁蒸发、真空结晶与离心边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Cooling water
- 流属性/单位：Volume / m3
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`us-epa-beet-sugar-1974`


##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


#### 输出

##### 产品流

###### Beet-sugar crystals（`sugar_crystals`）

Beet-sugar crystals 作为一个单独定量的产品流跨越糖汁蒸发、真空结晶与离心边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Beet-sugar crystals
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_release`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Beet molasses（`beet_molasses`）

Beet molasses 作为一个单独定量的产品流跨越糖汁蒸发、真空结晶与离心边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Beet molasses
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`

###### Recovered process condensate（`recovered_condensate`）

Recovered process condensate 作为一个单独定量的产品流跨越糖汁蒸发、真空结晶与离心边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Recovered process condensate
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### 废物流

###### Evaporation and crystallisation wastewater（`evaporation_wastewater`）

Evaporation and crystallisation wastewater 作为一个单独定量的废物流跨越糖汁蒸发、真空结晶与离心边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Evaporation and crystallisation wastewater
- 流属性/单位：Volume / m3
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### 基本流

###### Water, to air（`process_water_vapour`）

Water, to air 作为一个单独定量的基本流跨越糖汁蒸发、真空结晶与离心边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Water, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


### 过程：糖干燥、冷却、储存、质量放行与包装（`sugar_finishing`）

#### 输入

##### 产品流

###### Beet-sugar crystals（`finishing_sugar_crystals`）

Beet-sugar crystals 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Beet-sugar crystals
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_release`
- 来源：`us-epa-beet-sugar-1974`

###### Electricity, facility supply（`finishing_electricity`）

Electricity, facility supply 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Steam（`finishing_steam`）

Steam 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Hot water（`finishing_hot_water`）

Hot water 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Hot water
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Ammonia refrigerant（`finishing_ammonia_refrigerant`）

Ammonia refrigerant 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Ammonia refrigerant
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Kraft paper sugar sack（`packaging_paper_sack`）

Kraft paper sugar sack 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Kraft paper sugar sack
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Woven polypropylene sugar sack（`packaging_polypropylene_woven_sack`）

Woven polypropylene sugar sack 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Woven polypropylene sugar sack
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Low-density polyethylene bag liner（`packaging_ldpe_liner`）

Low-density polyethylene bag liner 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Low-density polyethylene bag liner
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Corrugated paperboard carton（`packaging_corrugated_carton`）

Corrugated paperboard carton 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Corrugated paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Wood pallet（`packaging_wood_pallet`）

Wood pallet 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Wood pallet
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ec-jrc-fdm-bref-2019`


##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


#### 输出

##### 产品流

###### Beet sugar（`reference_beet_sugar`）

Beet sugar 作为一个单独定量的产品流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Beet sugar `f6141c1d-e50a-4f80-9125-cc7eb82eb51a`
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：固定为 1 kg 合格甜菜糖净质量；不含包装质量。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：`cp_product_quality_release`
- 来源：


##### 废物流

###### Off-specification beet sugar（`offspec_beet_sugar_waste`）

Off-specification beet sugar 作为一个单独定量的废物流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Off-specification beet sugar
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Waste kraft paper sugar sack（`waste_kraft_paper_sack`）

Waste kraft paper sugar sack 作为一个单独定量的废物流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Waste kraft paper sugar sack
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Waste woven polypropylene sugar sack（`waste_polypropylene_woven_sack`）

Waste woven polypropylene sugar sack 作为一个单独定量的废物流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Waste woven polypropylene sugar sack
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Waste low-density polyethylene liner（`waste_ldpe_liner`）

Waste low-density polyethylene liner 作为一个单独定量的废物流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Waste low-density polyethylene liner
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Waste corrugated paperboard carton（`waste_corrugated_carton`）

Waste corrugated paperboard carton 作为一个单独定量的废物流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Waste corrugated paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Waste wood pallet（`waste_wood_pallet`）

Waste wood pallet 作为一个单独定量的废物流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Waste wood pallet
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`


##### 基本流

###### Particulate matter, PM10, to air（`sugar_particulate_matter_air`）

Particulate matter, PM10, to air 作为一个单独定量的基本流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Particulate matter, PM10, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-fdm-bref-2019`

###### Ammonia, to air（`finishing_ammonia_air`）

Ammonia, to air 作为一个单独定量的基本流跨越糖干燥、冷却、储存、质量放行与包装边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Ammonia, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-jrc-fdm-bref-2019`


### 过程：甜菜粕压榨、干燥与共产品制备（`pulp_handling`）

#### 输入

##### 产品流

###### Wet beet pulp（`pulp_wet_input`）

Wet beet pulp 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Wet beet pulp
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Electricity, facility supply（`pulp_electricity`）

Electricity, facility supply 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Steam（`pulp_drying_steam`）

Steam 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`eu-fdm-bat-2019`

###### Natural gas（`pulp_drying_natural_gas`）

Natural gas 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`eu-fdm-bat-2019`

###### Diesel fuel（`pulp_drying_diesel`）

Diesel fuel 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`eu-fdm-bat-2019`

###### Liquefied petroleum gas（`pulp_drying_lpg`）

Liquefied petroleum gas 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`eu-fdm-bat-2019`

###### Beet molasses（`pulp_molasses_input`）

Beet molasses 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Beet molasses
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


#### 输出

##### 产品流

###### Pressed beet pulp（`pressed_beet_pulp`）

Pressed beet pulp 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Pressed beet pulp
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Dried beet pulp（`dried_beet_pulp`）

Dried beet pulp 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Dried beet pulp
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Molassed beet pulp（`molassed_beet_pulp`）

Molassed beet pulp 作为一个单独定量的产品流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Molassed beet pulp
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_dispatch`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### 废物流

###### Off-specification beet pulp（`offspec_beet_pulp_waste`）

Off-specification beet pulp 作为一个单独定量的废物流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Off-specification beet pulp
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`


##### 基本流

###### Particulate matter, PM10, to air（`pulp_dryer_pm10_air`）

Particulate matter, PM10, to air 作为一个单独定量的基本流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Particulate matter, PM10, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-fdm-bat-2019`

###### Nitrogen oxides, to air（`pulp_dryer_nitrogen_oxides_air`）

Nitrogen oxides, to air 作为一个单独定量的基本流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Nitrogen oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-fdm-bat-2019`

###### Carbon monoxide, to air（`pulp_dryer_carbon_monoxide_air`）

Carbon monoxide, to air 作为一个单独定量的基本流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Carbon monoxide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-fdm-bat-2019`

###### Sulfur oxides, to air（`pulp_dryer_sulfur_oxides_air`）

Sulfur oxides, to air 作为一个单独定量的基本流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Sulfur oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-fdm-bat-2019`

###### Non-methane volatile organic compounds, to air（`pulp_dryer_tvoc_air`）

Non-methane volatile organic compounds, to air 作为一个单独定量的基本流跨越甜菜粕压榨、干燥与共产品制备边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Non-methane volatile organic compounds, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-fdm-bat-2019`


### 过程：场内蒸汽、电力与热水生产（`onsite_energy_supply`）

#### 输入

##### 产品流

###### Process water（`boiler_process_water`）

Process water 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Electricity, facility supply（`onsite_auxiliary_electricity`）

Electricity, facility supply 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Natural gas（`onsite_natural_gas`）

Natural gas 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Diesel fuel（`onsite_diesel`）

Diesel fuel 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Liquefied petroleum gas（`onsite_lpg`）

Liquefied petroleum gas 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Hard coal（`onsite_hard_coal`）

Hard coal 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Hard coal
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Biogas（`onsite_recovered_biogas`）

Biogas 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Biogas
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Sodium hydroxide（`boiler_sodium_hydroxide`）

Sodium hydroxide 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-fdm-bref-2019`

###### Trisodium phosphate（`boiler_trisodium_phosphate`）

Trisodium phosphate 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Trisodium phosphate
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-fdm-bref-2019`


##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


#### 输出

##### 产品流

###### Steam（`onsite_steam_output`）

Steam 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Steam
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Electricity（`onsite_electricity_output`）

Electricity 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### Hot water（`onsite_hot_water_output`）

Hot water 作为一个单独定量的产品流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Hot water
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`


##### 废物流

###### Boiler bottom ash（`boiler_bottom_ash_waste`）

Boiler bottom ash 作为一个单独定量的废物流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Boiler bottom ash
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Boiler fly ash（`boiler_fly_ash_waste`）

Boiler fly ash 作为一个单独定量的废物流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Boiler fly ash
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### Boiler blowdown wastewater（`boiler_blowdown_wastewater`）

Boiler blowdown wastewater 作为一个单独定量的废物流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Boiler blowdown wastewater
- 流属性/单位：Volume / m3
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`ec-jrc-fdm-bref-2019`


##### 基本流

###### Carbon dioxide, fossil, to air（`onsite_carbon_dioxide_fossil_air`）

Carbon dioxide, fossil, to air 作为一个单独定量的基本流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-fdm-bref-2019`

###### Carbon dioxide, biogenic, to air（`onsite_carbon_dioxide_biogenic_air`）

Carbon dioxide, biogenic, to air 作为一个单独定量的基本流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-fdm-bref-2019`

###### Nitrogen oxides, to air（`onsite_nitrogen_oxides_air`）

Nitrogen oxides, to air 作为一个单独定量的基本流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Nitrogen oxides, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-fdm-bref-2019`

###### Sulfur dioxide, to air（`onsite_sulfur_dioxide_air`）

Sulfur dioxide, to air 作为一个单独定量的基本流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Sulfur dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-fdm-bref-2019`

###### Carbon monoxide, to air（`onsite_carbon_monoxide_air`）

Carbon monoxide, to air 作为一个单独定量的基本流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Carbon monoxide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-fdm-bref-2019`

###### Particulate matter, PM10, to air（`onsite_pm10_air`）

Particulate matter, PM10, to air 作为一个单独定量的基本流跨越场内蒸汽、电力与热水生产边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Particulate matter, PM10, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-fdm-bref-2019`


### 过程：废水收集、处理、排放与残余物管理（`wastewater_treatment`）

#### 输入

##### 产品流

###### Electricity, facility supply（`wastewater_treatment_electricity`）

Electricity, facility supply 作为一个单独定量的产品流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Electricity, facility supply
- 流属性/单位：Energy / kWh
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Calcium hydroxide（`wastewater_calcium_hydroxide`）

Calcium hydroxide 作为一个单独定量的产品流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-fdm-bref-2019`

###### Ferric chloride（`wastewater_ferric_chloride`）

Ferric chloride 作为一个单独定量的产品流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-fdm-bref-2019`

###### Anionic polyacrylamide（`wastewater_polyacrylamide`）

Anionic polyacrylamide 作为一个单独定量的产品流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Anionic polyacrylamide
- 流属性/单位：Mass / kg
- 数量规则：按采集协议计量、称量或库存核对本具体投入跨越过程边界的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-fdm-bref-2019`


##### 废物流

###### Beet-sugar manufacturing wastewater（`wastewater_received`）

Beet-sugar manufacturing wastewater 作为一个单独定量的废物流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Beet-sugar manufacturing wastewater
- 流属性/单位：Volume / m3
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`


##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。


#### 输出

##### 产品流

###### Treated process water（`treated_process_water`）

Treated process water 作为一个单独定量的产品流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Treated process water
- 流属性/单位：Volume / m3
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Biogas（`recovered_biogas`）

Biogas 作为一个单独定量的产品流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Biogas
- 流属性/单位：Energy / MJ
- 数量规则：按采集协议称量或计量本产品流离开过程或转移至下一过程的数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_balance`
- 来源：`ec-jrc-fdm-bref-2019`


##### 废物流

###### Wastewater-treatment sludge（`wastewater_treatment_sludge`）

Wastewater-treatment sludge 作为一个单独定量的废物流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：按采集协议称量或计量本废物流离开过程的数量，并记录实际去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_residue_records`
- 来源：`ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`


##### 基本流

###### Biochemical oxygen demand, BOD5, to water（`effluent_bod5_water`）

Biochemical oxygen demand, BOD5, to water 作为一个单独定量的基本流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Biochemical oxygen demand, BOD5, to water
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Chemical oxygen demand, to water（`effluent_cod_water`）

Chemical oxygen demand, to water 作为一个单独定量的基本流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Chemical oxygen demand, to water
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### Suspended solids, to water（`effluent_suspended_solids_water`）

Suspended solids, to water 作为一个单独定量的基本流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Suspended solids, to water
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`eu-fdm-bat-2019`; `us-epa-beet-sugar-1974`

###### Nitrogen, total, to water（`effluent_total_nitrogen_water`）

Nitrogen, total, to water 作为一个单独定量的基本流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Nitrogen, total, to water
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`ec-jrc-fdm-bref-2019`

###### Phosphorus, total, to water（`effluent_total_phosphorus_water`）

Phosphorus, total, to water 作为一个单独定量的基本流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Phosphorus, total, to water
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_quantity_quality`
- 来源：`ec-jrc-fdm-bref-2019`

###### Methane, to air（`wastewater_methane_air`）

Methane, to air 作为一个单独定量的基本流跨越废水收集、处理、排放与残余物管理边界。其身份、数量以及来源或去向必须与任何替代材料、能源载体、包装、废物或污染物保持分开；不适用时应记录具体理由。

- 选定流：Methane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用匹配报告期的监测数据或透明计算规则，单独计算该排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格甜菜糖净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-fdm-bref-2019`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | 可分过程 | 通过计量、批次记录和过程细分避免分配。 | `iso-14044-2006` |
| `alloc_internal_recycling` | 内部循环 | 不得把内部回收流作为共产品，也不得重复抵扣。 | `ec-jrc-fdm-bref-2019`; `iso-14044-2006` |
| `alloc_output_classification` | 甜菜粕、糖蜜、石灰和回收沼气 | 仅在具有规格、有益去向和经济状态记录时使用产品行；否则使用相应废物行。 | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974`; `iso-14044-2006` |
| `alloc_economic_coproducts` | 不可分共用负荷 | 细分后仅在无可辩护物理关系时使用同期工厂门净收入，并披露价格与敏感性。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | all | 原料与中间产品 | 秤、罐、库存和实验室记录 | 流；质量；库存；水分；蔗糖；时间 | 校准计量与库存核对 | kg | 每次转移 | 完整榨季 | 场址 | 各原子流求和并归一化 | 校准、台账和分析 |
| `cp_water_balance` | all | 水与冷凝水 | 流量计、储罐和水分记录 | 来源；去向；体积；密度；回用标识 | 分开计量外部与内部流 | m3; kg | 连续/班次 | 完整榨季 | 场址 | 闭合场址净平衡 | 校准和水循环图 |
| `cp_energy_balance` | all | 电力、蒸汽、热水和燃料 | 仪表、交付与库存 | 载体；数量；低位热值；来源；去向 | 载体特定计量与库存核对 | kWh; MJ | 连续/每日 | 完整榨季 | 场址 | 保留载体身份 | 仪表、发票和燃料分析 |
| `cp_chemical_inventory` | 净化、能源和处理 | 每种化学品 | 采购、库存和投加记录 | 化学品；等级；纯度；库存；投加量 | 期初加接收减期末和转移 | kg | 批次/每日 | 完整榨季 | 消耗单元 | 每种化学品单独求和 | 供应商规格和投加日志 |
| `cp_refrigerant_records` | `sugar_finishing` | 制冷剂充注与损失 | 维护和库存记录 | 制冷剂；充注；回收；补充；转移 | 制冷剂质量平衡 | kg | 每次维护；年度 | 报告期 | 制冷系统 | 补充减回收和库存变化 | 维护日志 |
| `cp_product_quality_release` | 结晶与成品 | 晶体与参考糖 | 秤和实验室放行 | 批次；质量；蔗糖；水分；等级；状态 | 校准质量与声明分析方法 | kg; fraction | 每批 | 完整榨季 | 产品系统 | 净放行质量 | 校准和放行证书 |
| `cp_coproduct_dispatch` | 甜菜粕、石灰、糖蜜和沼气 | 有用产出 | 秤、质量、去向与发票 | 产品；状态；质量；干物质；去向；价值 | 核对发运与库存 | kg; MJ | 每次发运 | 同一清单期 | 场址 | 各产品状态分开 | 规格和接收 |
| `cp_packaging_records` | `sugar_finishing` | 每个包装组件 | BOM、领用和库存 | 组件；材料；质量；数量；废料 | 组件质量和库存核对 | kg | 每批 | 同一产品期 | 包装线 | 各材料分开 | 供应商规格和库存 |
| `cp_waste_and_residue_records` | all | 每种废物 | 转移联单、秤和承包商 | 废物；来源；质量；去向；处理 | 称量发运并核对储存 | kg | 每次发运 | 完整榨季 | 场址 | 各废物与去向分开 | 联单和接收 |
| `cp_wastewater_quantity_quality` | 清洗、净化、能源和处理 | 废水与水污染物 | 流量与实验室取样 | 流；体积；分析物；浓度；期间 | 匹配流量和代表性样品 | m3; kg | 连续/许可 | 完整榨季 | 各水流 | 污染物特定负荷 | 校准和实验室报告 |
| `cp_air_emissions` | 净化、成品、干燥、能源和处理 | 每种空气污染物 | 烟道、监测、燃料与运行日志 | 来源；污染物；浓度；流量；时间；燃料；因子 | 直接测量或透明计算 | kg | 连续/许可 | 代表性榨季 | 各排放源 | 污染物特定质量 | 监测/烟道报告和因子引用 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 所有行 | 分配后的期间数量 / 合格甜菜糖净质量 | 原子流数量；参考质量 | 数量/kg 糖 | `iso-14044-2006` |
| `calc_mass_sucrose_balance` | 物料阶段 | 在产品、废物、排放和库存变化之间核对质量与实测蔗糖 | 质量；分析；库存 | 闭合度 | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974` |
| `calc_water_balance` | 场址与用水过程 | 外部加内含水 = 产品加废物加排放加蒸发加库存变化；内部循环抵消 | 水记录 | 闭合度 | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974` |
| `calc_energy_balance` | 场址能源 | 核对每个载体的进口、生产、使用、回收和出口；燃料能量 = 数量 × 已引用低位热值 | 仪表；燃料；低位热值 | 载体平衡 | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019` |
| `calc_pollutant_load` | 空气与水排放 | 匹配浓度 × 流量 × 时间，或实测载体 × 已引用因子 | 测量与因子 | 污染物质量 | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有行 | 仅解决精确 Tiangong 身份；未解决 UUID 保持空白并在 manifest 登记。 | 双核身份审查 |
| `dq_atomicity` | 所有行 | 任何卡不得合并载体、备选项、包装类型、废物或污染物。 | 解析器审计和适用性日志 |
| `dq_primary` | 前景 | 使用完整公司特定榨季记录，包括启停和库存变化。 | 带日期原始记录 |
| `dq_balance` | 质量、蔗糖、能源和水 | 在声明测量不确定性内闭合并调查余量。 | 核对工作表 |
| `dq_background` | 上游链接 | 匹配材料、技术、地域和时间并披露每个代理。 | 数据集选择记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 参考 | 使用 Beet sugar `f6141c1d-e50a-4f80-9125-cc7eb82eb51a`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg 和 CPC 23512。 |  |
| `val_atomic_inventory` | 清单 | 每个选定流均应为一个具体交换，每卡均应有非空说明。 | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `val_no_provisional_ranges` | 数量 | 不得保留仅凭推断的定量范围；数量须来自前景记录、计算规则或已引用外部证据。 |  |
| `val_route_completeness` | 条件路线 | 对每项化学品、能源、制冷、甜菜粕、处理和包装行声明适用性。 | `ec-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `us-epa-beet-sugar-1974` |
| `val_balances` | 物料、蔗糖、能源和水 | 核对全部进口、内部转移、产品、废物、排放和库存变化，避免重复计算。 | `ec-jrc-fdm-bref-2019`; `us-epa-beet-sugar-1974` |
| `val_uuid_resolution` | 身份 | 仅双核确认的 UUID 可填写；其余行保持空白并在 manifest 登记。 |  |
| `val_allocation` | 共产品 | 为每项合格共产品声明状态、去向、经济状态和分配。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门甜菜糖制造前景数据集 |
| downstream_use | LCA 过程、生命周期模型和产品足迹研究 |
| allowed_use | 与声明场址、榨季、技术、产品和包装匹配的甜菜糖路线 |
| excluded_use | 甘蔗糖、原糖精炼、种植、配送、使用或寿命终止 |
| required_metadata | PCR id；CPC；参考 UUID 链；等级；蔗糖/水分；路线；场址；榨季；能源；水；处理；包装；共产品；分配 |
| required_quality_disclosure | 一手数据覆盖；平衡；仪表；分析；代理；适用性；未解决 UUID；分配与不确定性 |
| update_trigger | 产品、甜菜来源、过程、燃料、制冷剂、处理、包装、共产品市场、分配、场址、期间、来源或 UUID 变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `ec-jrc-fdm-bref-2019` | 官方指南（`official_guidance`） | 欧盟委员会 JRC，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，JRC118627，2019。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf | 过程边界、水/能源循环、化学品、共产品、废物和排放；甜菜投入 QA 范围 |
| `eu-fdm-bat-2019` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论。https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | 甜菜粕压榨/干燥路线；能源与废水绩效背景；PM10、NOx、CO、SOx 和 NMVOC 监测 |
| `us-epa-beet-sugar-1974` | 官方指南（`official_guidance`） | US EPA，Development Document for Effluent Limitations Guidelines and Standards of Performance for New Sources: Beet Sugar Processing Subcategory，EPA 440/1-74-002-b，1974。https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10004HMU.TXT | 独立过程分解；甜菜、石灰石/石灰、硫、燃料和水投入；渗出、压粕水回流、碳酸化、亚硫酸化、废水和水量平衡 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines。https://www.iso.org/standard/38498.html | 边界、分配、计算、质量与报告 |
