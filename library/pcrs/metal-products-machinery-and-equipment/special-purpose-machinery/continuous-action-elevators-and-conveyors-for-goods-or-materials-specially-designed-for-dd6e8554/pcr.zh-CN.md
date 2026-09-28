---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.continuous-action-elevators-and-conveyors-for-goods-or-materials-specially-designed-for-dd6e8554
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 专为地下使用设计的货物或物料连续运行升降机和输送机

## 1. 范围与适用性

本规则适用于专为地下环境设计、连续运送货物或物料的完整升降机或输送机的制造与工厂交付。声明交付配置时可采用输送带式或刮板链式路线。前景边界止于工厂验收；地下安装、运行、维护、更换和报废不在其中。单独销售的橡胶输送带、通用输送机和采掘机械属于其他产品。[un-cpc-3-2025; cowan-1975-face-haulage]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.continuous-action-elevators-and-conveyors-for-goods-or-materials-specially-designed-for-dd6e8554 |
| classification_refs | CPC 3.0:44411，仅作为分类背景 |
| covered_products | 专为地下使用设计的完整连续式货物或物料输送机及升降机，包括声明配置的带式或刮板链式系统 |
| excluded_products | 通用输送机；单独的输送带或备件；载人升降机和箕斗提升机；采煤机或掘进机；矿井现场土建工程 |
| representative_product | 一台已验收、配置已声明的地下带式或链式货物输送机 |
| production_route | 结构件制造、驱动集成、所选带式或链式机构集成、工厂验收；外购部件以其上游数据集进入 |
| market_state | 工厂门口交付的已验收配置机器，不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的地下环境中连续运送货物或物料 |
| How much | 一台已验收的完整配置机器 |
| How well | 带式或链式路线、设计能力、长度、驱动和地下使用要求由验收记录核实 |
| How long or cycle | 一次工厂验收与放行；运行寿命另行披露，不在此假定 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 按专门设计用于地下运送货物及原料的连动升降机和输送机 `609af8a1-d52f-4af9-9baf-fefe36a22a50` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 验收配置；地下应用；带式或链式路线；能力；长度；驱动规格；所含模块；净质量 M 及称重记录 |

M 在数据集生产时实测。所有清单数量采用同一配置、同一台验收成品机器为基准；本规则不预设机器质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_unit` | `factory_electricity` | 能量 | MJ | 将可归属的电表电量以 MJ 报告；用 1 kWh = 3.6 MJ 换算，并保留原电表记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购钢板、焊丝、驱动部件、输送带或钢链总成以规定状态进入；记录供应商状态及数据集。 |
| starting_condition_role | 工厂门口产品制造前景，含配置集成与验收。 |
| product_classification_scope | 地下专用连续式物料运输机器；不得以通用输送机类别替代。 |
| recursive_input_rule | 如外购完整地下输送机被用作子总成，应明确记录同类输入及其上游数据集，不在当前前景再次制造。 |
| upstream_dataset_requirement | 为每种外购材料和部件提供上游生产数据集，尤其是钢材、输送带、电机、链条和托辊。 |
| disclosure | 披露路线、所含模块、材料牌号、地下使用规格、验收基准及排除项。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | 纳入所供机器的制造、部件集成、计量的生产电力、边角料及工厂验收；排除矿井安装与使用。 | `djordjevic-2018-conveyor-lca`; `cowan-1975-face-haulage` |
| `boundary_route` | belt_or_chain_route | 仅纳入已声明的带式或链式路线及其原子部件行；不适用的路线须披露。 | `cowan-1975-face-haulage` |
| `boundary_belt_upstream` | purchased_belt | 外购输送带时，将橡胶混炼、压延和硫化置于供应商上游数据集。 | `unido-1990-rubber-belts` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabricate_frame` | 结构件制造 | `required` | 始终纳入 | 制造所配置的支架与机架 | 每台验收成品机器 |
| `fit_drive` | 驱动装置集成 | `required` | 始终纳入 | 安装声明的驱动及初始润滑油 | 每台验收成品机器 |
| `fit_belt` | 输送带与托辊集成 | `conditional` | 声明机器采用带式输送路线时纳入 | 安装指定输送带与托辊 | 每台验收成品机器 |
| `fit_chain` | 链式输送机构集成 | `conditional` | 声明机器采用刮板链式输送路线时纳入 | 安装指定钢链总成 | 每台验收成品机器 |
| `factory_energy` | 工厂共用电力 | `required` | 始终纳入 | 工厂生产与验收电量只分摊一次 | 每台验收成品机器 |
| `accept_machine` | 验收与出厂 | `required` | 始终纳入 | 确认完整配置机器及其净质量 | 每台验收成品机器 |

### 过程：结构件制造（`fabricate_frame`）

#### 输入

##### 产品流

###### 结构件制造用钢板（`steel_plate`）

钢板进入机架切割、成形与连接工序；记录实际牌号和厚度。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：计量投入该验收成品机器的钢板质量，包括切割边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_materials`
- 来源：`djordjevic-2018-conveyor-lca`

###### 药芯焊丝（`flux_wire`）

条件路线：结构接头采用药芯焊丝焊接；其他焊材工艺需另列原子交换。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：仅当声明的制造路线采用药芯焊丝电弧焊时，计量实际消耗的焊丝。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_materials`
- 来源：`djordjevic-2018-conveyor-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钢结构制造边角料（`steel_scrap`）

此项为单独计量的工业后钢废物流。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：计量离开制造工序的分类钢边角料；不得从钢板投入量中直接抵减。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_scrap`
- 来源：`djordjevic-2018-conveyor-lca`

##### 基本流

### 过程：驱动装置集成（`fit_drive`）

#### 输入

##### 产品流

###### 矿用输送机驱动电动机（`drive_motor`）

电驱动装置属于供应的机器；数据集发布前须审查其天工流身份。

- 选定流：矿用输送机驱动电动机
- 流属性/单位：Mass / kg
- 数量规则：计量验收配置中外购驱动电动机的质量，并记录地下使用规格。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drive_components`
- 来源：`cowan-1975-face-haulage`; `djordjevic-2018-conveyor-lca`

###### 工业润滑油（`lubricating_oil`）

记录实际润滑油牌号和加注质量，不假定通用油数据集完全适用。

- 选定流：工业润滑油
- 流属性/单位：Mass / kg
- 数量规则：计量交付时加注到驱动装置或减速器的润滑油；不含后续维护补加量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drive_components`
- 来源：`djordjevic-2018-conveyor-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：输送带与托辊集成（`fit_belt`）

#### 输入

##### 产品流

###### 硫化橡胶输送带（`rubber_belt`）

条件输送带路线；另行记录增强材料、地下使用阻燃规格和供应商数据集。

- 选定流：硫化橡胶制的传动、输送带或胶带 `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- 流属性/单位：Mass / kg
- 数量规则：采用输送带路线时，计量装入验收成品机器的输送带质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_belt_components`
- 来源：`cowan-1975-face-haulage`; `unido-1990-rubber-belts`

###### 输送机托辊总成（`idler_roller`）

条件输送带路线。仅表示轴承的候选流不能代表完整托辊总成。

- 选定流：输送机托辊总成
- 流属性/单位：Mass / kg
- 数量规则：计量装入验收输送带式机器的完整托辊总成质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_belt_components`
- 来源：`rondum-1982-conveyor-installation`; `djordjevic-2018-conveyor-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：链式输送机构集成（`fit_chain`）

#### 输入

##### 产品流

###### 矿用刮板输送机钢链总成（`steel_chain`）

条件链式路线；记录钢链类型和地下输送机配置。

- 选定流：矿用刮板输送机钢链总成
- 流属性/单位：Mass / kg
- 数量规则：采用刮板链式路线时，计量安装的钢链总成质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chain_components`
- 来源：`cowan-1975-face-haulage`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂共用电力（`factory_energy`）

#### 输入

##### 产品流

###### 工厂交流电（`factory_electricity`）

使用计量电量并披露供电结构；公开候选流身份冲突有待审查。

- 选定流：交流电
- 流属性/单位：Energy / MJ
- 数量规则：计量机架制造、驱动安装、输送带或链条安装及验收所分摊的工厂电力；每台验收机器只分配一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_electricity`
- 来源：`djordjevic-2018-conveyor-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：验收与出厂（`accept_machine`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收完整地下输送机（`finished_machine`）

产出为已验收供应的机器，包含声明的模块、驱动和输送带或链条，不含运输包装。

- 选定流：按专门设计用于地下运送货物及原料的连动升降机和输送机 `609af8a1-d52f-4af9-9baf-fefe36a22a50`
- 流属性/单位：Mass / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025`; `cowan-1975-face-haulage`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | material_and_component_inputs | 先将物料清单和采购记录归属于验收配置，再处理共用车间分配。 | `djordjevic-2018-conveyor-lca` |
| `allocation_energy` | shared_factory_electricity | 优先分表计量；否则按相同纳入工序的记录机器工时分配期间电量，再除以该配置验收机器数量。报告规则及分母。 | `djordjevic-2018-conveyor-lca` |
| `allocation_scrap` | steel_scrap | 分类钢边角料作为废物产出单列；回收收益只在另行声明的下游模型中处理。 | `djordjevic-2018-conveyor-lca` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_frame_materials` | `fabricate_frame` | 钢板及条件适用的药芯焊丝 | 物料清单和领料记录 | 型号；配置；材料牌号；领料质量；退料质量；验收数量 | 将领料与退料核对到同一验收配置。 | kg | 每生产批次 | 当前代表性生产期 | 制造场址 | 每台验收成品机器 | 采购及仓库领料记录 |
| `cp_frame_scrap` | `fabricate_frame` | 钢边角料 | 称重废物记录 | 配置；分类钢废料质量；验收数量 | 称量离开结构件制造工序的分类边角料。 | kg | 每批次 | 与机架投入相同的期间 | 制造场址 | 每台验收成品机器 | 经校准的秤及转移单据 |
| `cp_drive_components` | `fit_drive` | 电机和初始润滑油 | 供应商与装配记录 | 配置；电机质量；润滑油牌号；加注油质量；验收数量 | 将供应商部件质量和加注记录关联到验收序列号。 | kg | 每台机器 | 验收期间 | 制造场址 | 每台验收成品机器 | 供应商规格与装配记录 |
| `cp_belt_components` | `fit_belt` | 输送带与托辊 | 供应商与装配记录 | 配置；输送带质量；托辊总成质量；验收数量 | 将外购输送带及托辊关联到验收带式机器。 | kg | 每台机器 | 验收期间 | 制造场址 | 每台验收成品机器 | 供应商物料清单与装配记录 |
| `cp_chain_components` | `fit_chain` | 钢链总成 | 供应商与装配记录 | 配置；钢链总成质量；验收数量 | 将外购钢链总成关联到验收链式机器。 | kg | 每台机器 | 验收期间 | 制造场址 | 每台验收成品机器 | 供应商物料清单与装配记录 |
| `cp_factory_electricity` | `factory_energy` | 生产电力 | 电表与分配记录 | 起始读数；终止读数；kWh；机器工时；验收数量 | 读取经校准的电表，纳入生产与验收电量仅分配一次，并将 kWh 换算为 MJ。 | MJ | 生产期间 | 与验收机器相同的期间 | 制造场址 | 每台验收成品机器 | 电表记录和分配工作表 |
| `cp_mass` | `accept_machine` | 已验收完整机器 | 验收称重记录 | 型号；配置；序列号；验收净质量 M | 使用可追溯的称重记录核对同一配置的验收机器。 | kg | 每台验收机器 | 验收事件 | 制造场址 | 每台验收净质量 | 可追溯称重与验收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `energy_per_machine` | `factory_electricity` | 记录工时归属后，以同一配置的验收机器数量除可归属的期间电量。 | 期间电表 MJ；机器工时；验收数量；`cp_factory_electricity` | 每台验收机器的 MJ | `djordjevic-2018-conveyor-lca` |
| `scrap_fraction_check` | `steel_scrap` | 将同一配置的实测钢废料除以实测钢板领用量，用作非规范性质量核查。 | `steel_scrap`；`steel_plate`；`cp_frame_scrap`；`cp_frame_materials` | 废料比例 | `djordjevic-2018-conveyor-lca` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 所有行 | 将材料、部件、电量与产出记录关联到同一验收配置和路线。 | 物料清单、序列号与验收记录 |
| `dq_upstream` | 外购投入 | 记录供应商材料牌号、部件规格、地域、数据年份与上游数据集身份。 | 供应商资料与数据集元数据 |
| `dq_completeness` | 所有行 | 对不适用的条件路线明确记录零或不适用；适用废物与电量不得遗漏。 | 路线声明与核对日志 |
| `dq_mass` | `finished_machine` | 以可追溯的净质量称重记录 M，并排除运输包装。 | 称重与验收记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_product | 要求参考产品为 CPC 44411 地下专用机器，并具备验收配置和匹配的参考流 UUID。 | `un-cpc-3-2025` |
| `validate_mass` | all_inventory_rows | 核查每项数量均以同一台验收成品机器为基准，产出为实测 M kg。 | `djordjevic-2018-conveyor-lca` |
| `validate_routes` | belt_and_chain_rows | 核查仅适用声明的带式或链式路线行，并披露部件规格。 | `cowan-1975-face-haulage` |
| `validate_evidence` | external_ranges | 不得将案例研究数值直接作为地下机器范围；采用外部范围前须取得相互独立且边界可比的原文。 | `djordjevic-2018-conveyor-lca`; `cowan-1975-face-haulage` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已配置地下连续式物料输送机的前景生产数据包 |
| downstream_use | 经审查后用作二次数据集或背景数据集；过程与生命周期模型投影使用同一前景记录 |
| allowed_use | 按每台验收机器实测 M kg 基准，比较已披露配置的地下机器从原料到工厂门口的生产 |
| excluded_use | 未限定的通用输送机；运行中的运输服务；矿井安装、使用与报废 |
| required_metadata | 路线；型号；配置；验收数量；长度；能力；驱动；材料牌号；所含模块；净质量 M；地域；数据年份 |
| required_quality_disclosure | 每个上游数据集的来源和年份；UUID 缺口；范围证据缺口；分配方法；实测完整性 |
| update_trigger | 设计变化、带式与链式路线变化、供应商变化、材料牌号变化或取得新的实测生产数据 |

## 11. 数据源

| source_id | title | type | reference | retrieved | used_for |
| --- | --- | --- | --- | --- | --- |
| `un-cpc-3-2025` | CPC Version 3.0 Structure | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 2026-09-26 | 官方分类身份，第 2194 与 2296 行 |
| `cowan-1975-face-haulage` | Study of Continuous Face Haulage Systems | `literature` | https://stacks.cdc.gov/view/cdc/235385/cdc_235385_DS1.pdf | 2026-09-26 | 地下带式与链式配置，印刷页 44 与 54 |
| `rondum-1982-conveyor-installation` | Belt Conveyor Maintenance and Installation Procedures | `handbook` | https://stacks.cdc.gov/view/cdc/234436/cdc_234436_DS1.pdf | 2026-09-26 | 地下输送机部件与验收背景，印刷页 8 与 32 |
| `djordjevic-2018-conveyor-lca` | LCA of the Manufacturing Stage of the Laboratory Belt Conveyor | `literature` | https://www.mas.bg.ac.rs/_media/istrazivanje/fme/vol46/3/18_m_djordjevic_et.pdf | 2026-09-26 | 仅支持制造工序与部件类型；实验室尺度，不转用数值 |
| `unido-1990-rubber-belts` | Manufacture of Rubber Conveyor Belts: Final Report | `official_guidance` | https://downloads.unido.org/ot/48/40/4840936/15001-20000_18498.pdf | 2026-09-26 | 外购输送带上游生产顺序，印刷页 35 |
