---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonia-anhydrous
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 无水氨

## 1. 范围与适用性

本 PCR 适用于生产厂门口作为可销售产品的无水氨（NH3）前景数据包，包括用作肥料原料、化工原料、制冷剂或能源载体的氨。本规则不预设生产路线：仅在声明实际路线和氢来源后，方可覆盖天然气或沼气重整、煤或其他原料气化、外供氢、水电解及其组合。

本 PCR 不包括氨水、氢氧化铵、氨溶液、下游氮肥与化学品、使用阶段排放，以及超出所声明厂门装载点的运输。特定低碳路线数据集不得代表全部无水氨。只有在碳捕集、利用、运输与封存设施与所声明生产系统实际连接并有独立证据时，才可将其纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonia-anhydrous |
| classification_refs | CPC 3.0：34651 - Ammonia, anhydrous |
| covered_products | 无水氨，包括冷冻或加压液化氨；须声明等级、纯度、水分和厂门状态 |
| excluded_products | 氨水；氢氧化铵；含氨混合物；下游肥料与化学品；未升级达到所声明无水规格的稀氨回收物 |
| representative_product | 生产厂门口以液化或加压状态交付的可销售无水氨 NH3 |
| production_route | 所声明的 Haber-Bosch 合成路线，包括路线特定的氢或合成气生产、净化、合成回路、产品冷凝和储存；不默认任何路线 |
| market_state | 厂门成品；须声明交付状态、储存温度、储存压力、纯度和水分 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产厂门口的无水氨产品 |
| How much | 按 100% NH3 当量质量计 1 kg NH3 |
| How well | 产品符合所声明等级或规格的无水氨要求；报告实际纯度和水分，并排除氨水 |
| How long or cycle | 代表所声明工厂、路线和运行周期的一个报告期 |
| reference_flow_link | 离开最终调质、进入厂门储存或装载的可销售无水氨净量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 无水氨 `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品等级或规格；NH3 纯度；水分；物理状态；生产路线；氢来源及生产路线；化石或生物质原料；工厂和地域；报告期；电力与热能供应；上游甲烷边界和数据源；碳捕集点、总捕集量、去向、运输、封存及永久性边界；联产品及分配方法；储存温度；储存压力；厂门状态 |

构建前景数据包时，`必需限定信息` 中各项必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失任一必需限定信息，即视为该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量厂门可销售无水氨净质量，并将全部清单结果归一化至 1 kg NH3 当量。 |
| `purity_correction` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | NH3 当量质量等于产品毛质量乘以实测 NH3 质量分数；保留毛质量、纯度、水分、采样方法和检测结果。 |
| `energy_separation` | 原料与能源输入 | 与各输入相适用的已声明属性 | kg、MJ 或 kWh | 将作为氢源或碳源的原料与作为能源使用的燃料、电力分开记录，不得合并为一个无说明数值。 |
| `storage_condition` | 最终调质与储存 | 质量与运行条件 | kg、deg C，以及注明基准的绝压或表压 | 在同一报告期内一致报告时间加权储存温度、压力及其基准、库存变化、装载损失、蒸发气或放空气回收。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 路线决定性原料、氢、电力、燃料、水及其他材料的开采或生产，以前景记录或可追溯上游数据集表示 |
| starting_condition_role | 用于路线比较和前景数据包生产的从摇篮到生产厂门起点 |
| product_classification_scope | 仅 CPC 3.0 代码 34651；CPC 34652 氨水及下游氨衍生物不在范围内 |
| recursive_input_rule | 同类别无水氨进入混配、调质或储存时，将其作为具有独立上游数据集的技术圈输入，不在接收过程中重复构建其上游生产。 |
| upstream_dataset_requirement | 路线特定数据集必须表示原料或氢生产、电力和燃料；使用烃类供应时表示上游甲烷；提出封存主张时表示碳捕集运输与封存。 |
| disclosure | 声明路线、氢来源、能源供应、上游甲烷处理、捕集边界、分配及储存条件；不得将未声明路线或单一路线结果标为通用无水氨。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `route_complete_boundary` | foreground_system_boundary | 包括路线决定性原料或氢生产、空气或氮气供应、适用时的合成气净化、氨合成、冷凝、制冷、储存及厂门装载。 | `iea-ammonia-roadmap-2021`; `us-epa-ap42-ammonia` |
| `feedstock_energy_separation` | foreground_system_boundary | 区分非能源用途原料与过程能源用燃料、蒸汽和电力，同时保持完整能源与碳平衡。 | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `upstream_methane_boundary` | hydrocarbon_supply | 纳入或明确链接天然气、沼气或其他含甲烷原料供应链的上游甲烷排放，并披露数据源、地域、期间以及实测或模型属性。 | `iea-ammonia-roadmap-2021` |
| `hydrogen_route_boundary` | hydrogen_supply | 识别氢为现场生产或外供，并识别蒸汽重整、气化、电解、氯碱、生物质或其他路线；外供氢须携带自身上游清单。 | `iea-ammonia-roadmap-2021`; `eu-cbam-2023-1773` |
| `carbon_capture_boundary` | carbon_dioxide_handling | 分别报告 CO2 的产生、分离、捕集、排放、利用、运输、注入和可证明封存量；无对应边界与证据时，不得把分离、销售、利用或暂时结合视为永久封存。 | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `storage_loading_boundary` | product_conditioning_and_storage | 包括截至所声明厂门的制冷或压缩、库存变化、储存损失、蒸发气回收、放空、火炬及装载；下游配送和使用仅可作为独立情景加入。 | `cdc-niosh-ammonia` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hydrogen_syngas_supply` | 氢或合成气供应 | `required` | 选择实际现场或外供氢路线；不纳入未使用的替代路线。 | 提供路线特定含氢原料及其上游负荷。 | 每 1 kg NH3 当量最终产品 |
| `gas_conditioning` | 合成气调质与氮气整合 | `required` | 采用与所声明原料路线相适用的净化步骤；外供纯氢路线可省略不适用的重整净化，但仍须记录氮气供应。 | 产生符合氨回路规格的合成气，并分离 CO2 或其他杂质。 | 每 1 kg NH3 当量最终产品 |
| `ammonia_synthesis` | 氨合成回路 | `required` | 始终纳入。 | 对氮氢回路进行压缩、反应、循环、冷凝和排放。 | 每 1 kg NH3 当量最终产品 |
| `product_conditioning_storage` | 产品调质、储存与装载 | `required` | 始终纳入至所声明厂门。 | 按所声明纯度、温度与压力条件交付可销售无水氨。 | 每 1 kg NH3 当量最终产品 |
| `carbon_handling` | CO2 利用、运输与封存 | `conditional` | 分离 CO2 离开核心工厂用于利用、外售、运输、注入、封存或提出捕集主张时纳入。 | 闭合碳平衡，且仅支持有证据的捕集或封存主张。 | 每 1 kg NH3 当量最终产品 |

### 过程：氢或合成气供应（`hydrogen_syngas_supply`）

#### 输入

##### 产品流

###### 路线决定性原料或外供氢（`route_feedstock_hydrogen`）

逐项记录为路线供应氢或碳的原料或外供氢，不合并不同来源。

- 选定流：所声明天然气、沼气、煤、石油原料、生物质、电解水或外供氢
- 流属性/单位：质量或能量含量 / kg 或 MJ；外供时另报氢质量 / kg
- 数量规则：按原料与氢路线分列的贸易交接或生产实测记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_materials`
- 来源：`iea-ammonia-roadmap-2021`; `eu-cbam-2023-1773`

###### 过程电力与热能（`route_energy`）

将电力、燃料、进口蒸汽和能源输出与非能源原料分开记录。

- 选定流：路线特定的电力、燃料和蒸汽供应
- 流属性/单位：能量 / kWh 或 MJ；燃料保留质量或体积及换算基准
- 数量规则：计量消耗减去有证据的输出，各载能体分列
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

##### 废物流

###### 废催化剂、吸附剂及处理残余物（`route_treatment_waste`）

路线特定固体或液体残余物离开前景系统处理或回收时予以记录。

- 选定流：所声明废催化剂、吸附剂、炉渣、灰或处理残余物
- 流属性/单位：质量 / kg
- 数量规则：按废物类型与去向称重的运单或库存变化记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-ap42-ammonia`

##### 基本流

###### 上游甲烷排放（`upstream_methane`）

表示所声明烃类供应链的甲烷排放，将供应商实测证据与模型上游数据集区分。

- 选定流：排放至空气的甲烷
- 流属性/单位：质量 / kg
- 数量规则：与原料量、地域、期间和来源链接的供应商特定清单或路线计算清单
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_upstream_methane`
- 来源：`iea-ammonia-roadmap-2021`

#### 输出

##### 产品流

###### 送往调质的含氢进料（`hydrogen_bearing_feed`）

报告转入调质的氢或粗合成气，并附组成和压力基准。

- 选定流：路线特定氢或粗合成气
- 流属性/单位：质量 / kg
- 数量规则：转移量实测，并报告干气组成和氢含量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每单位转入合成气调质的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_syngas_transfer`
- 来源：`us-epa-ap42-ammonia`

##### 废物流

##### 基本流

###### 路线直接温室气体排放（`route_direct_ghg`）

将原料转化与燃料燃烧产生的 CO2、CH4、N2O 按基本流分别记录。

- 选定流：所声明排放至空气的直接温室气体
- 流属性/单位：质量 / kg
- 数量规则：按气体与源采用烟道或连续监测、碳平衡或获准计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ghgrp-ammonia-tsd-2009`

### 过程：合成气调质与氮气整合（`gas_conditioning`）

#### 输入

##### 产品流

###### 含氢进料（`conditioning_feed`）

接收所声明粗合成气或氢流，并保留组成与上游数据集链接。

- 选定流：路线特定氢或粗合成气
- 流属性/单位：质量 / kg
- 数量规则：与上游过程输出核对的转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每单位调质合成气过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_syngas_transfer`
- 来源：`us-epa-ap42-ammonia`

###### 空气或氮气供应（`nitrogen_supply`）

记录氮源、适用时的空分路线及相关能源或上游数据集。

- 选定流：氨合成用空气或氮气
- 流属性/单位：质量 / kg
- 数量规则：实测流量与组成，或由合成回路记录作质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_syngas_transfer`
- 来源：`us-epa-ap42-ammonia`

##### 废物流

###### 调质残余物与工艺冷凝液（`conditioning_waste`）

按去向记录废吸附剂、处理残余物和工艺冷凝液，包括回收或废水处理。

- 选定流：所声明调质废物或废水
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：实测排放、运单或库存变化记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-ap42-ammonia`

##### 基本流

#### 输出

##### 产品流

###### 调质合成气（`conditioned_syngas`）

报告进入氨合成回路、满足所声明组成规格的氮氢进料。

- 选定流：调质后的氮氢合成气
- 流属性/单位：质量 / kg
- 数量规则：实测或经组成分析校核的流量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位送入氨合成的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_syngas_transfer`
- 来源：`us-epa-ap42-ammonia`

###### 分离二氧化碳（`separated_co2`）

将气体调质所分离 CO2 作为可追踪流报告，不预先视为储存或信用。

- 选定流：分离二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则：由流量和组成实测或闭合碳平衡得出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carbon_capture`
- 来源：`us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

##### 废物流

##### 基本流

###### 调质放空气（`conditioning_vents`）

分别记录净化和 CO2 分离阶段的直接放空与逸散排放。

- 选定流：所声明排放至空气的物质
- 流属性/单位：质量 / kg
- 数量规则：按污染物和排放点监测或作质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-ammonia`

### 过程：氨合成回路（`ammonia_synthesis`）

#### 输入

##### 产品流

###### 调质后的氮氢进料（`synthesis_feed`）

记录外部补充气；内部循环气不得重复计为外部输入。

- 选定流：调质后的氮氢合成气
- 流属性/单位：质量 / kg
- 数量规则：实测补充气，并以组成和回路平衡校核
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_synthesis_operations`
- 来源：`us-epa-ap42-ammonia`

###### 合成回路能源与冷却（`synthesis_energy`）

分别记录压缩、循环、冷凝与制冷用电力、蒸汽、燃料和冷却介质。

- 选定流：回路特定电力、蒸汽、燃料和冷却供应
- 流属性/单位：能量 / kWh 或 MJ；适用时质量 / kg
- 数量规则：按载能体和设备计量或经能源平衡分摊
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`us-epa-ap42-ammonia`

##### 废物流

###### 合成回路废催化剂（`synthesis_catalyst_waste`）

更换时记录废氨合成催化剂及其回收或处理去向。

- 选定流：废氨合成催化剂
- 流属性/单位：质量 / kg
- 数量规则：按报告期产量摊销的称重更换记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-ap42-ammonia`

##### 基本流

#### 输出

##### 产品流

###### 粗无水氨（`crude_ammonia`）

报告送往最终调质和储存的冷凝氨，并记录纯度和水分。

- 选定流：粗无水氨
- 流属性/单位：Mass / kg
- 数量规则：冷凝产品实测质量乘以实测 NH3 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位送往产品调质的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_quality`
- 来源：`iso-7103-1982`; `iso-7105-1985`

###### 回收吹扫气或输出能源（`purge_recovery`）

记录回收作燃料、氢源或外部能源的吹扫气，不将内部循环计为联产品。

- 选定流：回收吹扫气、氢、蒸汽或电力
- 流属性/单位：质量或能量 / kg、MJ 或 kWh
- 数量规则：按去向分别实测毛输出和内部使用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproducts`
- 来源：`us-epa-ap42-ammonia`

##### 废物流

##### 基本流

###### 合成回路放空与逸散（`synthesis_emissions`）

记录吹扫、放空、火炬、泄漏及异常释放；扣除回收流时不得重复计算。

- 选定流：NH3、H2、CH4、N2O、CO2 或其他所声明空气排放
- 流属性/单位：质量 / kg
- 数量规则：按源和污染物监测、事件记录或闭合质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-ammonia`

### 过程：产品调质、储存与装载（`product_conditioning_storage`）

#### 输入

##### 产品流

###### 粗无水氨输入（`conditioning_ammonia_input`）

接收合成回路产品，并将质量、纯度与库存转移相核对。

- 选定流：粗无水氨
- 流属性/单位：Mass / kg
- 数量规则：与合成回路输出核对的实测转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`iso-7103-1982`; `iso-7105-1985`

###### 制冷、压缩与装载能源（`storage_energy`）

记录维持所声明交付状态所需制冷、压缩、泵送和装载能源。

- 选定流：电力、制冷、燃料、蒸汽或其他载能体
- 流属性/单位：能量 / kWh 或 MJ
- 数量规则：储存和装载设备实测或经核对分摊的消耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`cdc-niosh-ammonia`

##### 废物流

###### 储存与装载废水或处理废物（`storage_waste`）

记录排水、洗涤液、油和维护废物及其去向。

- 选定流：所声明储存或装载废物
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：实测排放、称重运单或维护记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`cdc-niosh-ammonia`

##### 基本流

#### 输出

##### 产品流

###### 可销售无水氨（`reference_product_output`）

这是唯一默认参考产品输出；按 NH3 当量质量报告，并附全部必需限定信息。

- 选定流：无水氨 `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg，单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：厂门可销售毛质量乘以实测 NH3 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg NH3 当量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：`unsd-cpc-v3-2025`; `iso-7103-1982`; `iso-7105-1985`

##### 废物流

##### 基本流

###### 储存、装载与泄压损失（`storage_losses`）

记录常规和非常规 NH3 放空、蒸发、装载、泄漏、火炬或泄压损失及回收量。

- 选定流：排放至空气或水的氨，以及其他所声明排放
- 流属性/单位：质量 / kg
- 数量规则：按储罐质量平衡、监测、装载记录和事件核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_operations`
- 来源：`cdc-niosh-ammonia`

### 过程：CO2 利用、运输与封存（`carbon_handling`）

#### 输入

##### 产品流

###### 分离二氧化碳输入（`captured_co2_input`）

接收有来源标识的分离 CO2，并与气体调质输出及碳平衡核对。

- 选定流：分离二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则：贸易交接实测或经碳平衡核对的转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon_capture`
- 来源：`us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

###### 捕集、压缩、运输与封存能源（`capture_energy`）

按步骤记录与氨生产捕集主张相关的能源和辅助材料。

- 选定流：电力、燃料、热、溶剂、水及运输服务
- 流属性/单位：能量、质量或运输服务 / kWh、MJ、kg 或声明单位
- 数量规则：计量或由经核对的设备、运输与注入记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-cbam-2023-1773`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付利用的二氧化碳（`co2_for_use`）

将交付利用或销售的 CO2 与永久封存分开报告，不自动给予信用。

- 选定流：交付外部利用的二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则：经接收方记录核对的贸易交接量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon_capture`
- 来源：`us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

###### 交付永久封存的二氧化碳（`co2_stored`）

仅对有运输、注入、监测及永久性证据支持的 CO2 报告封存量。

- 选定流：交付已验证永久封存的二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则：注入量减去有记录损失和泄漏，并有保管链及封存证据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carbon_capture`
- 来源：`eu-cbam-2023-1773`

##### 废物流

##### 基本流

###### 放空或损失的二氧化碳（`co2_vented`）

记录捕集、压缩、运输、利用或封存链的放空、泄漏及未核对差额。

- 选定流：排放至空气的二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则：监测排放加事件损失及碳平衡未闭合差额，并分开标识
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg NH3 当量最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carbon_capture`
- 来源：`us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `subdivision_first` | foreground_burden_allocation | 分配共用公用工程或排放前，优先拆分路线步骤并计量专用输入；内部循环不是联产品，不分担负荷。 | `eu-cbam-2023-1773` |
| `oxygen_coproduct` | electrolysis_or_air_separation | 氧气放空时不计避免产品信用；氧气销售或用于建模步骤之外时，报告数量并一致采用所声明方法，不得假设零负荷氢或氮。 | `eu-cbam-2023-1773` |
| `energy_export` | purge_gas_and_energy_recovery | 吹扫气回收及蒸汽或电力输出优先采用系统拆分；仍需分配时，先采用有文件依据的物理关系，再采用经济分配，并报告分配基准敏感性。 | `us-epa-ap42-ammonia` |
| `carbon_dioxide_coproduct` | separated_carbon_dioxide | 在任何信用或扣除前报告 CO2 的产生、分离、放空、利用、外售和封存量。销售或利用信用须遵循所选研究方法，无永久性证据时不得表示为永久封存。 | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `allocation_closure` | all_multi_output_processes | 报告未分配总量、分配键、接收方、分配后结果及闭合检查；不得用分配规则掩盖路线、捕集或能源数据缺口。 | `eu-cbam-2023-1773` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route_materials` | `hydrogen_syngas_supply` | 路线原料和外供氢 | 仪表、发票、供应商证书、组成检测 | 材料标识；来源；质量；能量；碳和氢含量；路线；期初期末库存 | 校准贸易交接仪表或库存核对 | kg、m3 或 MJ，附换算基准 | 批次和月度 | 与产品输出同一报告期 | 所声明工厂的全部路线决定性供应 | 收入量加期初库存减期末库存，按来源及能源/非能源用途分列 | 校准、发票、实验室证书和核对记录 |
| `cp_energy_records` | all processes | 电力、燃料、蒸汽、冷却和能源输出 | 仪表、票据、发票、公用工程平衡 | 载能体；仪表；数量；单位；换算因子；输入；输出；过程归属 | 校准仪表和能源平衡 | kWh 或 MJ | 小时至月度 | 完整报告期 | 全部纳入装置 | 按载能体和过程汇总，净额前报告总输入输出 | 仪表校准、发票和能源闭合 |
| `cp_upstream_methane` | `hydrogen_syngas_supply` | 烃类上游甲烷 | 供应商清单或路线模型 | 原料来源；地域；期间；数量；甲烷阶段；排放因子或实测损失；不确定性 | 优先供应商特定数据，否则采用可追溯路线模型 | kg CH4 及 kg 原料或 MJ | 供应商期间，至少年度 | 期间一致或经时间调整 | 全部烃类供应商 | 数量加权；混用实测与模型结果时必须披露 | 供应商保证、模型版本、来源和不确定性 |
| `cp_syngas_transfer` | `hydrogen_syngas_supply`; `gas_conditioning` | 氢、粗合成气、氮气和调质合成气 | 流量计与组成分析 | 干湿流量；H2；N2；CO；CO2；CH4；水；压力；温度 | 校准流量与气体分析 | kg 或 Nm3，附参考条件 | 连续或班次 | 代表性运行周期并年度核对 | 路线步骤之间全部转移点 | 转为共同干气基准并核对 H、N、C 平衡 | 分析仪校准、参考条件和平衡闭合 |
| `cp_synthesis_operations` | `ammonia_synthesis` | 补充气、循环、吹扫和氨产量 | 控制系统和生产日志 | 补充、循环、吹扫流量；组成；压力；温度；催化剂期间；冷凝 NH3 | 连续过程仪表 | kg、Nm3、deg C 及注明基准的压力 | 连续 | 完整报告期并披露停机 | 合成回路及相关制冷 | 外部输入排除内部循环，按产量加权汇总运行期 | 仪表校准、停机日志和回路平衡 |
| `cp_product_quality` | `ammonia_synthesis`; `product_conditioning_storage` | NH3 纯度和水分 | 代表性产品样与实验室结果 | 样品；批次或储罐；时间；方法；NH3 分数；水分；等级参数 | 已声明安全采样程序和有效分析方法 | 质量分数、mg/kg 或等级单位 | 每批、每罐或有统计依据的周期 | 与所报产品同批次和期间 | 数据集代表的全部可销售产品 | 质量加权，单列不合格品处置 | 保管链、方法、实验室 QA 和重复性 |
| `cp_product_output` | `product_conditioning_storage` | 可销售净产品与库存 | 交接仪表、地磅、液位计、销售记录 | 毛质量；交付；退货；期初期末库存；纯度；温度；压力 | 校准质量计量及库存核对 | kg | 批次和月度 | 完整报告期 | 全部产品储罐和装载点 | 可销售净质量乘实测 NH3 质量分数 | 校准、销售核对和库存闭合 |
| `cp_direct_emissions` | all processes | 烟道、放空、火炬、逸散和废水排放 | 连续监测、烟道测试、泄漏检测、事件日志或计算 | 源；污染物；浓度；流量；时长；事件；回收；火炬效率；方法 | 与源相适用的监测或质量平衡 | kg 污染物 | 连续、事件或测试周期 | 包括启停的完整报告期 | 每个纳入排放点 | 按污染物和源计算后汇总，不重复计算转移流 | 监测 QA、测试、泄漏调查、事件和计算表 |
| `cp_carbon_capture` | `gas_conditioning`; `carbon_handling` | CO2 产生、分离、捕集、利用、运输、封存和排放 | 仪表、碳平衡、交接、运输与注入记录 | 流量；碳含量；捕集点；去向；运输损失；注入；泄漏；永久性证据 | 计量与保管链核对 | kg CO2 | 连续和批运 | 完整报告期及适用的封存监测期 | 与氨生产相连的全部 CO2 流 | 产生量等于排放、利用外售、封存、库存变化和有记录损失之和 | 仪表校准、接收方、注入验证和平衡闭合 |
| `cp_coproducts` | all multi-output processes | 氧、吹扫气、氢、蒸汽、电力及 CO2 联产品 | 仪表、发票和用途记录 | 产品；数量；质量；能量；去向；内用或外用；分配键 | 校准计量和交易记录 | kg、MJ 或 kWh | 批次和月度 | 完整报告期 | 全部重要联产品和输出 | 分配前报告毛量并核对内部使用 | 校准、发票、去向证据和分配表 |
| `cp_storage_operations` | `product_conditioning_storage` | 储存条件、库存变化、装载与释放 | 液位计、温压历史、装载、泄压和维护日志 | 储罐；期初期末质量；温度；压力及基准；收发；蒸发气回收；放空；泄压事件 | 校准储罐仪表和事件核对 | kg、deg C 及注明基准的压力 | 连续和事件 | 完整报告期 | 全部氨储存装载设备 | 按储罐及总系统作质量平衡，分别报告常规和非常规损失 | 液位计校准、历史完整性和签字事件记录 |
| `cp_waste_records` | all processes | 废水及固液废物 | 排放计、联单、实验室分析和库存 | 废物；质量或体积；组成；危险性；去向；回收或处理 | 实测排放或称重运单 | kg 或 m3 | 批运和月度 | 完整报告期 | 全部纳入过程区域 | 按废物与去向汇总并核对库存 | 联单、分析、处理回执和库存闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nh3_equivalent` | 参考产品 | NH3 当量质量 = 可销售毛质量净额 x 实测 NH3 质量分数。不得用此式把氨水纳入本 PCR。 | 可销售毛质量；NH3 分数；退货；库存变化 | kg NH3 当量 | `iso-7103-1982`; `iso-7105-1985` |
| `calc_route_material_balance` | 氢和合成路线 | 在一致干湿基准下核对路线步骤的原料、氢、氮、碳和氨；外部输入不含内部循环。 | 路线材料；合成气组成；合成记录；产品输出 | 路线特定物料平衡及闭合 | `us-epa-ap42-ammonia`; `us-epa-ghgrp-ammonia-tsd-2009` |
| `calc_energy_by_role` | 原料与能源 | 用所声明因子换算各载能体，并分列非能源原料、燃料、电力、进口热和输出能源。 | 能源仪表；原料记录；换算因子；输出 | 按载能体和用途的能源清单 | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `calc_upstream_methane` | 烃类供应 | 上游甲烷为各供应商原料活动量乘其特定实测损失或可追溯模型因子之和；保留供应商、地域、期间和不确定性。 | 原料量；供应商甲烷结果或模型因子 | 每参考流 kg CH4 | `iea-ammonia-roadmap-2021` |
| `calc_direct_emissions` | 工厂直接排放 | 按监测浓度和气流或有文件依据的碳/质量平衡计算各污染物；区分过程和燃烧 CO2。 | 监测、烟道测试、燃料原料碳、事件日志 | 每参考流 kg 污染物 | `us-epa-ap42-ammonia`; `us-epa-ghgrp-ammonia-tsd-2009` |
| `calc_capture_balance` | 二氧化碳处理 | 产生 CO2 = 排放 CO2 + 利用外售 CO2 + 交付验证封存 CO2 + 库存变化 + 有记录处理损失。分离不等于封存。 | 产生、分离、外售、利用、注入、泄漏、排放和库存 | 捕集平衡及去向份额 | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `calc_allocation_closure` | 多输出过程 | 拆分并核对内部使用后，氨与联产品获配负荷之和必须逐清单行等于未分配总量。 | 未分配清单；联产品量；分配键 | 已分配清单和闭合差额 | `eu-cbam-2023-1773` |
| `calc_storage_balance` | 产品调质与储存 | 期初库存 + 收入 + 生产 = 交付 + 期末库存 + 回收输出 + 实测释放 + 未解释差额；须调查差额，不得静默分配。 | 库存、收发、生产、回收和释放日志 | 储存质量平衡与损失量 | `cdc-niosh-ammonia` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明产品为无水氨而非氨水；报告等级、纯度、水分、物理状态和检测方法。 | 产品规格、代表性样品和实验室结果 |
| `dq_route_identity` | 全数据集 | 识别氢和合成气路线、原料、技术、工厂、地域、期间及步骤为现场或外供。 | 流程图、供应商记录和路线声明 |
| `dq_temporal_representativeness` | 全部前景记录 | 使用一致报告期，并披露停机、启停、异常事件及供应商与工厂期间差异。 | 生产日志、仪表覆盖、事件和时间调整记录 |
| `dq_completeness` | 全部纳入过程 | 证明材料、能源、氮、碳、捕集、储存、废物和排放平衡闭合；说明排除项及未解决差异。 | 签字平衡表和完整性审查 |
| `dq_upstream_methane` | 烃类路线 | 披露上游甲烷为供应商实测或模型，并报告来源、地域、年份、阶段和不确定性。 | 供应商保证或可追溯模型文件 |
| `dq_capture_claim` | 捕集相关数据集 | 捕集或低碳主张须有流级 CO2 平衡、捕集点、去向、运输、注入、封存、泄漏和与所选方法相适应的永久性证据。 | 计量、交接、注入验证、监测和方法说明 |
| `dq_allocation` | 多输出过程 | 保留分配前总量、联产品量、分配基准、接收方、敏感性和数学闭合。 | 分配表和联产品记录 |
| `dq_storage_conditions` | 最终产品 | 报告时间加权温度、压力及基准、库存变化、常规损失、异常释放、回收和装载状态。 | 储罐历史、校准和事件核对 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_product_not_aqueous` | foreground_dataset_conformance | 拒绝以氨水、氢氧化铵或仅按 NH3 含量归一化的溶液代表产品；物理产品必须满足所声明无水氨规格。 | `unsd-cpc-v3-2025`; `iso-7105-1985` |
| `validate_reference_identity` | foreground_dataset_conformance | 所选产品流 UUID、质量流属性 UUID、质量单位组 UUID、kg 参考单位和 1 kg NH3 当量必须与本 PCR 一致。 | `unsd-cpc-v3-2025` |
| `validate_required_qualifiers` | foreground_dataset_conformance | 缺失纯度、路线、氢来源、能源、上游甲烷、捕集、分配或储存条件任一限定信息时，拒绝不完整参考流。 | `iea-ammonia-roadmap-2021`; `cdc-niosh-ammonia` |
| `validate_route_consistency` | foreground_dataset_conformance | 所有纳入过程、输入、排放和上游数据集须与所声明路线一致，不得把未采用替代路线混成通用结果。 | `iea-ammonia-roadmap-2021`; `eu-cbam-2023-1773` |
| `validate_mass_energy_balance` | foreground_dataset_conformance | 要求材料、氮、氢、碳、产品储存及各载能体能源闭合；内部循环与能源输出不得重复计算。 | `us-epa-ap42-ammonia`; `us-epa-ghgrp-ammonia-tsd-2009` |
| `validate_upstream_methane` | foreground_dataset_conformance | 烃类路线必须纳入或链接具有原料来源、地域、期间、方法和不确定性的上游甲烷结果。 | `iea-ammonia-roadmap-2021` |
| `validate_capture_disposition` | foreground_dataset_conformance | CO2 的产生、分离、捕集、排放、利用、运输、注入、封存、泄漏及库存变化字段必须闭合；仅分离或销售不得认作永久封存。 | `us-epa-ghgrp-ammonia-tsd-2009`; `eu-cbam-2023-1773` |
| `validate_allocation_closure` | foreground_dataset_conformance | 要求分配前总量、联产品量、分配键、接收方、重要时的敏感性及零未解释分配差额。 | `eu-cbam-2023-1773` |
| `validate_storage_conditions` | foreground_dataset_conformance | 储存温度、压力及基准、库存变化、装载损失、回收和异常事件处理必须齐全并相互一致。 | `cdc-niosh-ammonia` |
| `validate_low_carbon_claim` | foreground_dataset_conformance | 所声明氢、电力、原料、甲烷、捕集、分配和封存证据不能支持该精确路线时，拒绝低碳、可再生、蓝氨、绿氨或等效主张。 | `iea-ammonia-roadmap-2021`; `eu-cbam-2023-1773` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产厂门口无水氨的路线特定前景数据包；不作为未声明路线的行业平均值 |
| downstream_use | 构建过程、生命周期模型、EPD/碳足迹研究及肥料、化工、制冷或能源载体供应链模型 |
| allowed_use | 在产品身份、路线、地域、期间、技术、氢来源、能源、甲烷、捕集、分配和储存限定信息匹配时使用 |
| excluded_use | 代表氨水；代表未建模的低碳路线；无证据声称捕集或永久封存；忽略下游用途差异而作性能主张 |
| required_metadata | PCR id 与版本；CPC 34651；产品流/属性/单位组 UUID；等级、纯度、水分、状态；路线和氢来源；工厂、地域和期间；能源；上游甲烷；CO2 去向；联产品与分配；储存温压 |
| required_quality_disclosure | 数据覆盖、仪表与实验室 QA、质量/氮/氢/碳/能源/储存闭合、供应商数据、模型版本、不确定性、排除项、估算值和异常事件 |
| update_trigger | 产品规格、路线、原料或氢来源、主要设备、能源供应、甲烷来源、捕集去向、分配、储存状态或代表期间发生实质变化 |

## 11. 数据源

| source_id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | 官方指南（`official_guidance`） | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, code 34651, updated 2025-06-30, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-08） | 产品类别身份及相邻氨水类别的排除 |
| `iea-ammonia-roadmap-2021` | 官方指南（`official_guidance`） | International Energy Agency, Ammonia Technology Roadmap, 2021, https://www.iea.org/reports/ammonia-technology-roadmap（检索于 2026-08-08） | 路线区分、氢源、能源意义、碳捕集和跨行业背景 |
| `us-epa-ap42-ammonia` | 官方指南（`official_guidance`） | U.S. EPA, AP-42 Final Background Document for Synthetic Ammonia, Section 8.1, https://www.epa.gov/sites/production/files/2020-09/documents/b08s01_1.pdf（检索于 2026-08-08） | 过程拆分、合成回路、净化、放空、冷凝液及排放清单结构 |
| `us-epa-ghgrp-ammonia-tsd-2009` | 官方指南（`official_guidance`） | U.S. EPA, Technical Support Document for Ammonia: Proposed Rule for Mandatory Reporting of Greenhouse Gases, 2009, https://www.epa.gov/sites/production/files/2015-02/documents/ti_g-tsd_ammonia_epa_1-22-09.pdf（检索于 2026-08-08） | 原料与燃烧分离、碳平衡、过程 CO2 和捕集 CO2 处理 |
| `eu-cbam-2023-1773` | 标准（`standard`） | Commission Implementing Regulation (EU) 2023/1773, Annex III, Sections 3.6-3.7, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1773（检索于 2026-08-08） | 路线特定氨边界、外供氢、能源原料处理、联产品分配和 CO2 去向 |
| `iso-7103-1982` | 标准（`standard`） | ISO 7103:1982, Liquefied anhydrous ammonia for industrial use - Sampling - Taking a laboratory sample, https://www.iso.org/standard/13688.html（检索于 2026-08-08） | 产品采样和质量证据协议 |
| `iso-7105-1985` | 标准（`standard`） | ISO 7105:1985, Liquefied anhydrous ammonia for industrial use - Determination of water content - Karl Fischer method, https://www.iso.org/standard/13690.html（检索于 2026-08-08） | 水分测量与无水产品质量披露 |
| `cdc-niosh-ammonia` | 官方指南（`official_guidance`） | U.S. CDC/NIOSH, Pocket Guide to Chemical Hazards - Ammonia, https://www.cdc.gov/niosh/npg/npgd0028.html（检索于 2026-08-08） | 物理状态、液化压缩储存、温压披露及释放路径 |
