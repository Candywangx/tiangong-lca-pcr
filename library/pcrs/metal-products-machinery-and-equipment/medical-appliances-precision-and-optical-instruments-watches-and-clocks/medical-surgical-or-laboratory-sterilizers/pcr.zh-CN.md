---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.medical-surgical-or-laboratory-sterilizers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 医疗、外科或实验室用灭菌器

## 1. 范围与适用性

本 PCR 适用于医疗、外科或实验室负载所用成品灭菌器（包括蒸汽灭菌器、干热灭菌器和低温灭菌器）的从摇篮到工厂大门生产。边界包括物料清单原材料和外购组件的上游生产、前景制造与装配、工厂测试与清洁，以及直至制造商工厂大门的运输包装。

代表路线为配有不锈钢压力腔体、电子控制系统和可选内置蒸汽发生器的可配置实验室蒸汽灭菌器。采用其他灭菌技术时，必须声明技术，并以独立原子交换实例化其技术特定的 BOM、过程投入、废物和测试要求，不得重复公共规则。

使用阶段灭菌周期、客户场址安装、工厂大门后的配送、维护、更换用耗材和报废阶段均不在范围内。不具备灭菌功能的清洗消毒器、家用器具，以及超出医疗、外科或实验室边界的食品或制药工业处理设备不适用。可拆卸附件和装载设备仅在随申报产品交付时纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.medical-surgical-or-laboratory-sterilizers |
| classification_refs | CPC 3.0：48140，精确语境参考 |
| covered_products | 使用蒸汽、干热或低温灭菌因子的医疗、外科和实验室用成品灭菌器 |
| excluded_products | 不具备灭菌功能的清洗消毒器；家用灭菌器；灭菌服务；单独销售的使用耗材；非医疗工业热处理设备 |
| representative_product | 配有不锈钢腔体、电子控制系统和可选内置蒸汽发生器的可配置实验室蒸汽灭菌器 |
| production_route | 基于 BOM 的组件供应、适用时的场内金属制造、装配、工厂功能与安全测试、清洁及运输包装 |
| market_state | 制造商工厂大门处已完工、测试并包装的资本设备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产可离开制造商工厂大门的医疗、外科或实验室用成品灭菌器 |
| How much | 1 kg 成品灭菌器净重，不含可拆卸运输包装 |
| How well | 符合所声明预期用途、灭菌技术、经验证的工厂测试计划和适用市场要求 |
| How long or cycle | 一次工厂大门产品交付；设计寿命和额定周期能力属于元数据，不摊入本参考流 |
| reference_flow_link | 参考产品输出行 `finished_sterilizer` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品灭菌器净重 |
| 参考产品流 | 医疗、外科或实验室用灭菌器（Tiangong UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 灭菌技术和灭菌因子；预期应用和经验证负载；型号和可用腔体容积；压力容器和主要材料；内置或外部公用工程发生方式；已安装选件和随附附件；净重；工厂地域和年份；包装纳入与复用基准 |

构建前景数据包时，所有`必需限定信息`必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_product_mass` | 参考产品和 BOM 归一化 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或核算不含可拆卸运输包装的成品灭菌器净重；所有数量归一化至 1 kg 成品净重。 |
| `packaging_separation` | 运输包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录每个包装交换，并从产品净重中排除；复用托盘按有记录的周转次数计算每次运输净耗用量。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留 kWh 电表记录并按 1 kWh = 3.6 MJ 换算；不得混合工厂电力和客户使用阶段电力。 |
| `water_mass_conversion` | 工艺用水和清洗废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量记录；仅有体积时采用实测或供应商声明密度，并保留换算记录。 |

## 5. 系统边界

从摇篮到工厂大门系统包括通过上游数据集连接的原材料开采和组件生产、组件入厂供应、制造商控制的制造、装配、工厂测试、清洁和最终包装。经核验的 Getinge PEP 采用基于 BOM 的材料模型，并区分供应商生产与工厂及最终包装；FDA 记录支持代表性蒸汽路线的不锈钢压力容器结构。

工厂大门后的配送、运行、客户消耗的场址公用工程、服务、维护和报废不在本 PCR 范围内。工厂测试周期仍在边界内。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告工厂大门接收的外购原材料、组件和包装，并连接其从摇篮到供应商的上游数据集 |
| starting_condition_role | 制造、装配、测试、清洁和包装的前景进入条件 |
| product_classification_scope | 对医疗、外科或实验室负载实施灭菌的成品设备 |
| recursive_input_rule | 若投入本身是完整或接近完整的灭菌器，则在该转移点终止递归并连接单独记录的上游灭菌器数据集。 |
| upstream_dataset_requirement | 金属、电子件、电缆、塑料和包装优先采用供应商特定数据集；否则使用有代表性的背景数据集并披露替代。 |
| disclosure | 声明工厂地域/年份、型号、净重、技术、纳入的制造、供应商数据覆盖率、测试边界、包装、再生含量和分配。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | product_system | 纳入上游 BOM/组件生产、制造商作业、工厂测试及直至工厂大门的最终包装；排除下游配送、使用、服务和报废。 | `getinge-lancer-lss-pep-2025` |
| `boundary_route_disclosure` | technology_route | 声明技术、预期负载、腔体容量、内置公用工程和纳入的制造，因为配置会改变 BOM 和工厂要求。 | `getinge-lancer-lss-pep-2025`; `fda-getinge-k122071-2013` |
| `boundary_test_utilities` | factory_testing | 纳入工厂验收、安全和泄漏测试消耗的公用工程；排除客户灭菌周期。 | `fda-getinge-k122071-2013` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `sterilizer_manufacturing` | 灭菌器制造、装配、工厂测试和包装 | `required` | 始终纳入；条件交换仅在所述作业位于前景边界内时适用。 | 前景生产 | 1 kg 成品灭菌器净重 |

### 过程：灭菌器制造、装配、工厂测试和包装（`sterilizer_manufacturing`）

#### 输入

##### 产品流

###### 腔体和外壳用不锈钢板材（`stainless_steel_sheet`）

记录进入制造商控制成形或装配的不锈钢板材。使用实际合金和厚度；代表性压力容器采用 316 系不锈钢。

- 选定流：不锈钢板材（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：发放给产品的采购质量，包括计量的制造废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`getinge-lancer-lss-pep-2025`; `fda-getinge-k122071-2013`

###### 铝板材（`aluminium_sheet`）

记录进入产品特定制造或装配的铝板材，并在前景记录中保留合金、状态和厚度。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：发放给产品的采购质量，包括计量的铝废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`getinge-lancer-lss-pep-2025`

###### 场内成型用 ABS 粒料（`abs_granulate`）

仅在前景工厂成型 ABS 零件时纳入；其他树脂的外购零件在实例化数据集中建立独立产品行。

- 选定流：丙烯腈丁二烯苯乙烯共聚物（ABS）粒料 `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- 流属性/单位：Mass / kg
- 数量规则：发放给场内成型的外购 ABS 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重；不存在时以零记录并说明不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`getinge-lancer-lss-pep-2025`

###### 印制线路板（`printed_wire_board`）

按实测质量或 BOM 质量记录声明控制系统配置中安装的印制线路板。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：安装在所声明控制配置中的 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`getinge-lancer-lss-pep-2025`

###### 低压电缆（`low_voltage_cable`）

依据批准的下料清单记录已安装低压电缆长度，并保留导体和绝缘规格。

- 选定流：低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位：Length / m
- 数量规则：安装的下料清单或 BOM 长度；保留导体和绝缘规格
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cable_length`
- 来源：`getinge-lancer-lss-pep-2025`

###### 外购电力（`electricity`）

记录可归属于所纳入制造、装配、工厂测试和包装作业的外购电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或按因果关系分配并从 kWh 换算的工厂电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_electricity`
- 来源：`getinge-lancer-lss-pep-2025`

###### 工艺用水（`process_water`）

记录所纳入制造、清洗和工厂测试消耗的工艺用水，并保留水源、水质和换算依据。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量的纳入制造、清洁和工厂测试用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_water`
- 来源：`getinge-lancer-lss-pep-2025`

###### 场内制造用工业氧气（`industrial_oxygen`）

仅当切割、钎焊或其他耗氧制造作业位于前景边界内时纳入工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：纳入切割或钎焊作业使用的外购或计量氧气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重；不存在时以零记录并说明不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：

###### 场内焊接用二氧化碳保护气（`carbon_dioxide_shielding_gas`）

仅当二氧化碳在前景边界内的焊接作业中作为保护气消耗时纳入。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：作为焊接保护气消耗的钢瓶或散装采购质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重；不存在时以零记录并说明不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：

###### 木质运输托盘（`wooden_pallet`）

记录随产品发运的木托盘质量，并明确核算有记录的复用和损耗。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：托盘干重除以有记录的复用次数，并按损耗调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`
- 来源：`getinge-lancer-lss-pep-2025`

###### 瓦楞纸运输箱（`corrugated_board_boxes`）

记录在声明包装配置下随成品灭菌器发运的瓦楞纸箱质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：随产品交付的实测或按规格计算的纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：`getinge-lancer-lss-pep-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂大门处成品灭菌器（`finished_sterilizer`）

参考产品为在工厂大门处放行的完整灭菌器净重，不含可拆卸运输包装。

- 选定流：医疗、外科或实验室用灭菌器（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按参考流定义为 1 kg 成品灭菌器净重
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 成品灭菌器净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 采集协议：
- 来源：`un-cpc-3-0-structure-2025`; `getinge-lancer-lss-pep-2025`; `fda-getinge-k122071-2013`

##### 废物流

###### 316 系不锈钢制造废料（`stainless_steel_scrap`）

记录离开所纳入前景制造环节的分类 316 系不锈钢废料；除非背景模型要求，否则不计入替代原生金属抵扣。

- 选定流：316 型不锈钢废料（外部供应） `f20af980-11c6-4a6b-8dbc-4aa7683bfd98`
- 流属性/单位：Mass / kg
- 数量规则：称量的分类废料，外送回收
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重；不锈钢制造在场外时以零记录并说明不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_waste`
- 来源：`fda-getinge-k122071-2013`

###### 铝制造废料（`aluminium_scrap`）

记录离开所纳入前景制造环节的分类铝废料，并保留其实测去向。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：称量的分类铝废料，外送出厂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重；铝制造在场外时以零记录并说明不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_waste`
- 来源：`getinge-lancer-lss-pep-2025`

###### 设备清洗废水（`cleaning_wastewater`）

记录所纳入设备清洗作业排放的废水，并与工艺用水投入和单独计量的损失核对。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：纳入清洗的计量排放量或水量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品灭菌器净重；无湿法清洗排放时以零记录并说明不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`getinge-lancer-lss-pep-2025`

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_factory_processes | 在分配共享负荷前，先细分产品特定的制造、装配和测试。 |  |
| `allocation_shared_utilities` | shared_electricity_water_and_gases | 优先采用专用记录；否则按机器时间、测试周期时长或产线吞吐量等因果驱动因素分配。仅在无更佳驱动因素时采用质量分配并披露。 |  |
| `allocation_scrap` | metal_scrap_and_recovery | 在工厂边界报告废料质量和去向。除非所选背景模型明确采用并披露该约定，不得计入替代原生金属抵扣。 |  |
| `allocation_reusable_packaging` | wooden_pallet | 托盘质量除以经记录且按损耗调整的预计周转次数；周转次数未知时将完整托盘计入该次运输。 | `getinge-lancer-lss-pep-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass` | `sterilizer_manufacturing` | 基于质量的 BOM 投入和成品 | 批准 BOM 和领料记录 | 型号；版本；材料；采购、领用和安装质量；产品净重；数量 | 核对 BOM、采购、领料和产品称量 | kg | 每次版本和批次 | 代表年份 | 工厂及声明供应商 | 原子流质量除以成品总净重 | 批准 BOM、发票、称量票、校准 |
| `cp_cable_length` | `sterilizer_manufacturing` | 低压电缆 | 电缆下料清单和 BOM | 规格；导体；绝缘；电压；安装长度；数量 | 核对下料清单和安装长度 | m | 每次版本和批次 | 代表年份 | 工厂 | 安装长度除以成品净重 | 批准下料清单和领料记录 |
| `cp_factory_electricity` | `sterilizer_manufacturing` | 电力 | 电表和生产记录 | 电表读数；kWh；区域；测试周期；数量；净重 | 专用电表或按因果关系分配的总表核算 | kWh | 每月 | 一个完整且有代表性的生产年度 | 纳入的工厂作业 | 扣除排除负荷、分配、换算 MJ 并归一化 | 校准、发票、分配核对 |
| `cp_factory_water` | `sterilizer_manufacturing` | 工艺用水 | 水表、批次和测试记录 | 体积或质量；来源；水质；作业；密度；净重 | 计量或核对发票和批次记录 | kg 或 m3 | 每月及测试活动 | 一个完整且有代表性的生产年度 | 纳入的工厂作业 | 分配纳入用水、换算质量并归一化 | 校准、发票、批次日志、密度证据 |
| `cp_process_gases` | `sterilizer_manufacturing` | 氧气和二氧化碳保护气 | 钢瓶/散装和作业记录 | 气体；纯度；交付；库存变化；作业；参考条件 | 将供应量和库存变化核对至作业 | kg 或 m3 | 每次交付和批次 | 代表年份 | 场内制造 | 可归属消耗量除以产品净重 | 合格证、发票、钢瓶日志 |
| `cp_packaging_mass` | `sterilizer_manufacturing` | 托盘和瓦楞纸箱 | 规格和发运记录 | 标识；干重；型号；数量；周转；损耗 | 称量或采用经核验包装规格 | kg | 每次设计变更和抽样 | 代表年份 | 最终包装 | 净耗用质量除以产品净重 | 图纸、校准、发运和复用证据 |
| `cp_factory_waste` | `sterilizer_manufacturing` | 金属废料 | 分类发运记录 | 合金；毛重/皮重；去向；批次；净重 | 地磅或容器称量并核对转移单据 | kg | 每次发运 | 一个完整且有代表性的生产年度 | 工厂 | 纳入原子废物除以产品净重 | 称量票、转移记录、分类 |
| `cp_cleaning_wastewater` | `sterilizer_manufacturing` | 清洗废水 | 排放和清洗记录 | 用水；排放；残留水；损失；化学组成；去向；净重 | 计量或计算水量平衡 | kg 或 m3 | 每次活动并按月汇总 | 一个完整且有代表性的生产年度 | 清洗作业 | 将废水与用水核对并归一化 | 校准、平衡、分析、处理凭证 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | 基于质量的行 | 归一化数量 = 纳入行质量 / 成品灭菌器总净重 | 行质量；产品净重 | kg/kg 净产品 | `getinge-lancer-lss-pep-2025` |
| `calc_cable_normalization` | `low_voltage_cable` | 安装电缆长度 / 成品灭菌器总净重 | 电缆长度；净重 | m/kg 净产品 | `getinge-lancer-lss-pep-2025` |
| `calc_electricity` | `electricity` | 纳入 kWh × 3.6 / 成品灭菌器总净重 | kWh；净重 | MJ/kg 净产品 | `getinge-lancer-lss-pep-2025` |
| `calc_reusable_pallet` | `wooden_pallet` | 干重 ×（1 + 损耗率）/ 预计周转次数 / 产品净重 | 托盘质量；周转；损耗；净重 | kg/kg 净产品 | `getinge-lancer-lss-pep-2025` |
| `calc_cleaning_wastewater` | `cleaning_wastewater` | 用水投入 − 残留水 − 单独计量损失 | 水量记录；净重 | kg/kg 净产品 | `getinge-lancer-lss-pep-2025` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 识别型号、技术、预期负载、腔体容积、公用工程、选件和合规依据。 | 技术文件、符合性声明、型号 BOM |
| `dq_bom_completeness` | 材料和组件行 | 将所有具有实质意义的产品净重核对至原子 BOM 投入；以命名行解释每一项排除或未量化的余量，禁止伞形流。 | BOM 核对和完整性复核 |
| `dq_temporal` | 公用工程和废物 | 采用一个完整且有代表性的生产年度，或论证能捕捉生产和测试变化的较短活动。 | 注日期的仪表、生产和发运记录 |
| `dq_supplier_coverage` | 上游数据集 | 报告供应商特定质量覆盖率和所有通用背景替代。 | 供应商数据登记表和数据集映射 |
| `dq_mass_balance` | 材料、产品和废物 | 核对领用材料与安装产品、废料、退料和损失，且不得重复计入供应商废料。 | 批次材料平衡 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference_product | 确认输出恰为 1 kg 成品灭菌器净重，并排除可拆卸运输包装。 | `getinge-lancer-lss-pep-2025` |
| `validation_required_qualifiers` | dataset_metadata | 缺失技术、预期负载、型号、腔体容积、公用工程配置、净重、工厂地域/年份或包装基准时拒绝数据包。 | `getinge-lancer-lss-pep-2025`; `fda-getinge-k122071-2013` |
| `validation_atomic_inventory` | process_inventory | 确认每行仅为一个物理、化学、废物或能源交换；拒绝伞形流和路线选择器。 |  |
| `validation_uuid_and_unit` | tiangong_references | 核验 UUID 行的公开状态 100、流类型、baseName、属性和单位组；每个空 UUID 均须登记在 manifest 未解决元数据中。 |  |
| `validation_boundary` | product_system | 确认纳入上游 BOM 生产和工厂测试，排除客户运行、下游配送、服务和报废。 | `getinge-lancer-lss-pep-2025` |
| `validation_balance` | mass_and_water_balance | 核对产品净重、领用材料、分类废料、包装分离和清洗水量平衡；调查差额。 |  |

## 10. 发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | 经复核和发布后用作 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 用于采购、产品 LCA 和另行添加下游阶段的生命周期模型的从摇篮到工厂大门清单 |
| allowed_use | 技术、型号、腔体容积、BOM 覆盖率、工厂地域/年份和包装基准相匹配或经透明调整的声明配置 |
| excluded_use | 比较灭菌周期性能、声称使用阶段影响、代表清洗消毒器，或用于未披露且有实质差异的技术 |
| required_metadata | PCR/版本；型号；技术/因子；预期负载；腔体容积；公用工程；选件/附件；净重；工厂地域/年份；供应商覆盖率；包装；分配 |
| required_quality_disclosure | BOM 覆盖率；时间覆盖率；计量/分配；未解决 UUID；背景替代；再生含量；废料去向；水量平衡；核验状态 |
| update_trigger | 型号或技术变化；BOM/腔体重新设计；工厂或供应商变化；公用工程变化；包装重新设计；出现新的精确参考 UUID；前景期过时 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（已核验哈希的原文；检索日期 2026-09-06） | CPC 48140 官方产品分类身份 |
| `getinge-lancer-lss-pep-2025` | `literature` | Getinge，《Getinge Lancer LSS 实验室蒸汽灭菌器产品环境概况》，DMS-0011032，2025，https://www.getinge.com/dam/life-science/documents/english/getinge-lancer-lss-pep-107396-en.pdf（已核验 PDF 原文；检索日期 2026-09-06） | 代表产品、基于 BOM 的从摇篮到工厂大门模型、材料/组件类别、包装、工厂能源和用水 |
| `fda-getinge-k122071-2013` | `official_guidance` | 美国 FDA，510(k) 摘要 K122071，Getinge 400HC-E/500HC-E 系列蒸汽灭菌器，2013，https://www.accessdata.fda.gov/cdrh_docs/pdf12/k122071.pdf（已核验 PDF 原文；检索日期 2026-09-06） | 预期用途、蒸汽原理、不锈钢压力容器和工厂测试语境 |
| `samr-sterilizer-terminology` | `official_guidance` | 国家市场监督管理总局，用于处理医用材料的灭菌器和清洗消毒器安全要求国家标准记录，https://std.samr.gov.cn/gb/search/gbDetailed?id=bThFnEWwh9Q%3D&mode=p（已核验官方页面；检索日期 2026-09-06） | 专业中文术语“灭菌器”及其与清洗消毒器的区分 |
