---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.network-software-packaged
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 套装网络软件

## 1. 范围与适用性

本 PCR 适用于作为可供市场销售的套装产品交付的已发布、标准化网络系统软件。该类软件从中央位置或网络中的集成位置，对操作系统、网络、网络服务、存储、数据库、中间件和网络化应用进行控制、监测、管理、保护或协同。适用示例包括作为套装系统软件销售的网络管理软件、服务器软件、安全与加密软件以及中间件。

核心数据集采用从摇篮到出版商发货口的边界，包括归属于所声明发行版本的软件设计与开发、构建与发布流水线、测试、安全扫描、发行母版制作、将软件写入所声明的实体载体，以及组装所声明的销售包装。不包括定制软件开发服务、操作系统、数据库管理软件、编程工具、终端用户应用软件、电子下载服务、托管访问或软件即服务、客户部署与运行、发货后的维护和报废处理。超出发货口的研究应分别建模这些模块，不得将其重新标作套装产品本身。

CPC 正式纳入说明确定了网络软件功能。CPC 3.0 将电子系统软件下载单独分类，因此本套装产品的载体和包装路线必须声明。本 PCR 不假定每种实体套装都使用光盘、纸盒、纸质说明书内页或聚丙烯光盘盒；相应原子流行仅在所声明销售包装中确有该组件时适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.network-software-packaged |
| classification_refs | CPC 3.0：47812，套装网络软件 |
| covered_products | 作为标准化套装系统软件供应的已发布网络管理、服务器、安全、加密和中间件软件 |
| excluded_products | 定制软件开发服务；操作系统；数据库管理软件；开发工具和编程语言；应用软件；电子软件下载；托管访问和软件即服务 |
| representative_product | 在所声明实体载体上提供、装入可供市场销售包装的某一发行版网络管理或安全软件 |
| production_route | 发行版本特定的设计、开发、构建、测试、安全扫描、母版制作、实体载体写入和包装组装 |
| market_state | 出版商发货口处已完工、已发布、有版本标识的实体套装软件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付可执行所声明网络控制、监测、管理、安全、中间件或通信功能的完工套装网络软件产品 |
| How much | 可供市场销售软件套装的毛重 1 kg |
| How well | 明确规定版本、发行号、支持平台、所声明网络功能、互操作范围、安全功能、实体载体、随附文档和包装配置 |
| How long or cycle | 发货时的一个声明发行版本；必须披露许可和支持期限，但发货后的客户运行不属于核心参考流 |
| reference_flow_link | `packaged_network_software` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 套装网络软件 `3e8b6cb5-99b4-4ba2-a970-f1e9052f9ad7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 软件版本和发行号；出版商；发布日期；所声明网络功能；支持的运行环境；许可与支持期限；实体载体；包装组件；毛重口径；开发与构建地理范围；载体写入与包装地理范围；发货口；时间覆盖 |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息的数据包，其参考流视为不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `packaged_product_mass` | 参考产品及每项实体载体或包装组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在发货口测量销售套装毛重。纳入已刻录载体、盒体、纸质说明书内页、纸盒和销售单元中实际包含的每一组件；托盘、运输容器和三级运输包装不属于销售单元时予以排除。 |
| `electricity_conversion` | 开发、构建、测试、扫描、载体写入和包装组装用电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 依据电表或供应商记录以 kWh 采集电量，纳入可归属的数据中心开销，再按 `MJ = kWh × 3.6` 换算。保留原始 kWh 记录和分配键。能耗计量边界遵循 `gsf-sci-1-1-0`。 |
| `package_component_mass_balance` | 完工套装及其已安装实体组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在相同批次和含水率口径下，将完工毛重与所有已安装载体和包装组件质量之和比较。调查并披露任何残差，不得将其隐藏在未指定包装流中。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_release_activities` | 核心前景生产 | 纳入可归属于该发行版本的需求与设计工作、编码、构建流水线、测试、安全扫描、发行母版制作、实体载体写入和销售包装组装，直至出版商发货口。 | `un-cpc-3-0-47812`; `gsf-sci-1-1-0` |
| `boundary_supporting_infrastructure` | 开发和发布基础设施 | 纳入对软件运行有显著贡献的计算、存储、内存、网络、监测、日志、空闲预留容量、冗余、故障转移、构建、扫描和测试基础设施的电力及已分配上游硬件负荷。适用时纳入数据中心开销。 | `gsf-sci-1-1-0` |
| `boundary_separate_modules` | 发货后的活动 | 从核心套装产品数据集中排除电子下载服务、托管访问、客户部署、运行、维护和报废处理。研究纳入这些活动时，应采用一致的使用功能单位和系统边界，将其建模为已披露的独立模块。 | `un-cpc-3-0-84341`; `gsf-sci-1-1-0` |
| `boundary_atomic_components` | 实体载体和包装 | 将跨越前景边界的每项载体和包装组件记录为独立的具体产品流。不得使用未指定包装材料或载体的集合行。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入所声明发行周期的已批准需求、源代码、第三方组件和构建配置；披露所有继承资产及其归属处理方法 |
| starting_condition_role | 发行版本特定的前景起始状态 |
| product_classification_scope | 主要功能符合 CPC 47812 纳入说明的已发布套装网络系统软件 |
| recursive_input_rule | 若另一项套装网络软件作为投入使用，应将其作为原子产品投入记录一次并关联上游数据集；不得在同一前景过程中递归展开其软件开发清单 |
| upstream_dataset_requirement | 对电力、已刻录载体、纸盒、纸质说明书内页、盒体、其他已声明原子包装组件及已分配信息技术硬件负荷，采用具有地理和时间代表性的上游数据集 |
| disclosure | 声明发行版本边界、继承代码与新增代码的处理、贡献基础设施、分配键、载体和包装配置、排除的下载或托管服务路线、出版商和供应商地理范围、参考期、发货口及数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `packaged_network_software_production` | 套装网络软件开发、发布、载体写入和包装组装 | required | 每个套装网络软件数据集均应纳入；组件卡片仅在所声明销售包装中存在相应实体组件时适用 | 前景生产 | 出版商发货口处 1 kg 套装网络软件 |

### 过程：套装网络软件开发、发布、载体写入和包装组装（`packaged_network_software_production`）

#### 输入

##### 产品流

###### 开发、构建、测试和发布用电（`electricity_development_release`）

归属于该发行版本的设计、编码、构建、测试、安全扫描、监测、存储和发行母版制作所使用的自有或预配硬件耗电跨越前景边界。纳入可分配的数据中心开销和对该版本有显著贡献的预留容量。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：依据计量或供应商记录的 kWh 及有文件记录的资源时间分配，计算可归属于发行版本的电量，再换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 套装网络软件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_development_release_electricity`
- 来源：`gsf-sci-1-1-0`

###### 载体写入和包装组装用电（`electricity_carrier_packaging`）

将发行版本写入或复制到载体以及组装实体销售包装所用电力，应与软件开发用电分开记录。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：依据计量或供应商记录及有文件记录的包装批次分配键，计算可归属于批次的电量，再换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 套装网络软件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_carrier_packaging_electricity`
- 来源：`gsf-sci-1-1-0`

###### 已刻录光学载体（`recorded_optical_disc`）

仅当所声明套装包含已刻录光盘时纳入本行。尚未确认能准确表示装载套装网络软件之已刻录光学载体的 Tiangong 公开 state-100 流；保留具体身份及未解决状态。

- 选定流：套装网络软件用已刻录光盘
- 流属性/单位：Mass / kg
- 数量规则：计量或根据供应商记录取得所声明包装批次中已安装光盘的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 套装网络软件输出；仅当所声明载体路线不使用光盘时为零
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical_package_components`
- 来源：

###### 纸盒（`paper_box`）

仅当所声明销售包装含纸或纸板盒时纳入本行。必须保留纸板等级、再生含量、印刷、尺寸和供应商等限定信息。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或根据供应商记录取得所声明包装批次中已安装纸盒的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 套装网络软件输出；仅当不存在纸盒时为零
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical_package_components`
- 来源：

###### 包装用纸质说明书内页（`paper_insert`）

仅当包装内实体提供印刷说明、许可信息或其他纸质内页时纳入本行。必须保留纸张等级、印刷、尺寸、页数和供应商等限定信息。

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或根据供应商记录取得所声明包装批次中已安装印刷纸质内页的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 套装网络软件输出；仅当不存在印刷纸质内页时为零
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical_package_components`
- 来源：

###### 聚丙烯光盘盒（`polypropylene_disc_case`）

仅当所声明包装使用完工聚丙烯盒时纳入本行。尚未确认该完工制品的准确 Tiangong 公开 state-100 流；聚丙烯树脂、织物、隔膜、颗粒和切片均不得替代。

- 选定流：聚丙烯光盘盒
- 流属性/单位：Mass / kg
- 数量规则：计量或根据供应商记录取得所声明包装批次中已安装完工聚丙烯盒的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 套装网络软件输出；仅当不存在聚丙烯光盘盒时为零
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical_package_components`
- 来源：

##### 废物流

本 PCR 不预设废物流。前景数据包应将实际载体不合格品、印刷不合格品、包装边角料或其他废物分别增列为原子废物流。

##### 基本流

本 PCR 不预设直接基本流投入。实际直接资源取用应作为独立基本流增列；上游资源使用归入所选产品投入数据集。

#### 输出

##### 产品流

###### 完工套装网络软件（`packaged_network_software`）

该流表示出版商发货口处可供市场销售的已发布套装网络软件。其毛重和包装组成必须采用与已安装组件记录相同的批次和称量口径。

- 选定流：套装网络软件 `3e8b6cb5-99b4-4ba2-a970-f1e9052f9ad7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测批次毛重归一化得到的恰好 1 kg 参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：出版商发货口处 1 kg 套装网络软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_finished_package_mass`
- 来源：`un-cpc-3-0-47812`

##### 废物流

本 PCR 不预设废物输出。存在前景不合格品和边角料时，应将其记录为具体废物流。

##### 基本流

本 PCR 不预设直接基本流排放。实际现场排放应按物质和环境介质分别增列基本流；不得重复计入电力或采购材料上游数据集已表示的排放。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_measurement` | 可归属于发行版本的前景活动 | 优先采用作业、项目、代码库、测试运行、电表和包装批次特定记录，使负荷能够直接归属并避免分配。 | `gsf-sci-1-1-0` |
| `allocation_shared_digital_infrastructure` | 共享开发、构建、测试、存储、监测和扫描基础设施 | 按能表示该发行版本预留计算、存储、内存或等效容量的有文件记录资源时间键分配实测电力。分子和分母必须覆盖相同时间、基础设施和活动边界。 | `gsf-sci-1-1-0` |
| `allocation_hardware_embodied_burden` | 共享信息技术硬件 | 纳入硬件隐含负荷时，按 `M = TE × (TiR/EL) × (RR/ToR)` 分配，并记录硬件寿命、预留时间、预留资源和总资源。不得使用市场化抵消降低已分配负荷。 | `gsf-sci-1-1-0` |
| `allocation_joint_release_and_package` | 联合构建、版本、语言变体或包装批次 | 在记录允许时细分开发和包装活动。无法细分时，数字活动按实测资源时间分配，实体包装活动按实测包装批次质量或件数分配；说明各分配键为何代表因果关系，并对任何重要替代方法进行敏感性检验。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_release_electricity` | `packaged_network_software_production` | 开发、构建、测试、扫描、存储、监测和母版制作用电 | 电表、供应商、调度器和遥测记录 | release_id; job_id; infrastructure_id; geography; start_time; end_time; metered_kWh; provider_kWh; reserved_compute; reserved_memory; reserved_storage; allocation_numerator; allocation_denominator; PUE_or_overhead_method | 优先按可获得的最细组件和时间粒度取得真实电表或供应商数据；将遥测与账单或电表总量核对并记录模型化缺口 | kWh | 按作业或计量间隔，汇总至发行版本 | 完整的声明发行周期；无法取得更细记录时，年度数据为最低时间粒度 | 对发行版本有显著贡献的全部自有、托管、云和合同基础设施 | 以有文件记录且边界一致的资源时间比率分配能耗，按发行版本求和，纳入设施开销并换算为 MJ | 电表标识；供应商导出；作业日志；遥测留存；分配工作表；地理和因子溯源；完整性核对 |
| `cp_carrier_packaging_electricity` | `packaged_network_software_production` | 载体写入和包装组装用电 | 电表、设备、批次和发票记录 | batch_id; facility; meter_id; start_time; end_time; meter_start; meter_end; purchased_kWh; packages_produced; gross_batch_mass_kg; rejects; allocation_key | 有专用电表时直接读取；否则将设备或设施记录与所声明包装批次核对 | kWh | 按生产批次或电表间隔 | 对参考期输出有贡献的所有载体写入和包装组装运行 | 所有载体写入或销售包装组装设施 | 扣除有文件记录的非生产负荷，按实测批次质量或件数分配共享能耗，汇总 kWh，按输出 kg 归一化并换算为 MJ | 电表校准；发票；设备日志；批次记录；与设施总量的核对 |
| `cp_physical_package_components` | `packaged_network_software_production` | 已刻录载体及每项已安装包装组件 | 供应商规格、采购、批次领用、件数和称量记录 | component_row_id; supplier; part_number; batch_id; material; finished_article_state; unit_mass_kg; count_installed; total_mass_kg; recycled_content; printing_or_coating; rejects; carrier_type | 称量有代表性的完工组件或采用经核实的供应商质量数据，再按所命名原子组件核对领用、安装和不合格数量 | kg | 按供应商批次和包装批次 | 参考期输出中安装的所有组件批次 | 所有声明的载体和包装供应商及组装场址 | 按 row_id 和批次汇总已安装质量，从已安装投入中排除不合格品，并归一化至 1 kg 完工套装 | 校准秤记录；供应商规格；采购记录；批次追踪；组件照片或物料清单；核对记录 |
| `cp_finished_package_mass` | `packaged_network_software_production` | 完工套装网络软件 | 批次生产、件数和毛重记录 | release_id; edition; version; batch_id; package_configuration; sample_count; sample_gross_mass_kg; total_packages; total_gross_mass_kg; dispatch_gate; weighing_date | 用校准秤称量包含全部组件的完整销售套装，并核对样品与批次总量 | kg | 按包装配置和批次 | 参考期内每个批次 | 每个出版商或合同包装发货场址 | 汇总批次毛重，与已安装组件核对，并将所有清单行归一化至恰好 1 kg 输出 | 校准记录；批次放行记录；包装物料清单；抽样方案；签署的质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | 两项电力行 | `electricity_MJ = allocated_kWh × 3.6` | 适用电力协议得到的已分配 kWh | 每 1 kg 输出的 MJ 电力 | `gsf-sci-1-1-0` |
| `calc_shared_energy_allocation` | 共享数字或包装基础设施 | `allocated_kWh = boundary-consistent total_kWh × allocation_numerator / allocation_denominator`；两个份额必须采用相同时间区间、基础设施和活动范围 | 电表或供应商 kWh；资源时间或批次分配分子与分母 | 可归属于发行版本或批次的 kWh | `gsf-sci-1-1-0` |
| `calc_hardware_embodied_share` | 纳入时的硬件背景贡献 | `M = TE × (TiR/EL) × (RR/ToR)`；保留每个输入、单位、硬件身份和假设 | 硬件全生命周期排放；预留时间；预期寿命；预留资源；总资源 | 所声明发行边界的已分配硬件隐含负荷 | `gsf-sci-1-1-0` |
| `calc_package_mass_balance` | 实体包装组成 | `residual_kg = finished_gross_mass_kg - sum(installed_component_mass_kg)`；验收前查明缺失原子组件或计量差异 | 同一批次完工毛重和所有已安装载体/包装组件质量 | 已披露包装质量平衡残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留版本、发行号、出版商、发布日期、网络功能、平台、载体、包装配置、许可/支持期限、CPC 参考、发货口和准确 Tiangong 流 UUID。 | 发行记录；产品规格；包装物料清单；CPC 纳入说明；Tiangong state-100 身份 |
| `dq_temporal_coverage` | 全部前景记录 | 覆盖完整声明发行周期及参考期内全部实体包装批次。优先采用组件级和时间分辨记录；无法取得时披露模型化缺口，且数字基础设施数据不得粗于年度。 | 作业与遥测覆盖报告；电表；供应商导出；批次台账；缺口日志；`gsf-sci-1-1-0` |
| `dq_geography_and_technology` | 电力、硬件、载体和包装投入 | 识别每个贡献设施、云区域、电网区域、硬件类别、载体技术、包装供应商和包装组装技术，并据此选择上游数据集。 | 供应商和供货记录；设施清单；基础设施清单；数据集选择日志 |
| `dq_completeness` | 过程清单 | 核对计量或计费电量、作业、包装批次、组件领用、已安装质量、不合格品和完工毛重。将缺失的实际交换增列为分别命名的原子流。 | 能耗核对；物料清单；质量平衡；废物记录；完整性检查表 |
| `dq_uncertainty_and_models` | 模型化数据和分配 | 披露计量缺口、模型、分配键、时间与地理代理、硬件寿命假设、排除的基础设施和敏感性结果。不得将模型化估算表述为实测记录。 | 模型文件；假设登记；分配工作表；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_qualifiers` | 参考流 | 确认产品是符合 CPC 47812 的已发布套装网络系统软件，参考流与输出 UUID 相同，且全部必需限定信息齐全。 | `un-cpc-3-0-47812` |
| `validate_scope_exclusions` | 系统边界 | 确认下载、托管访问、部署、运行、维护和报废模块未被暗中混入核心套装产品数据集，且任何单独纳入的模块使用已披露的一致功能单位。 | `un-cpc-3-0-84341`; `gsf-sci-1-1-0` |
| `validate_electricity_coverage` | 电力行 | 将开发/发布及载体/包装用电与电表或供应商总量核对，确认支持基础设施和数据中心开销覆盖情况，核实分配边界，并重新计算 kWh 至 MJ 的换算。 | `gsf-sci-1-1-0` |
| `validate_atomic_package_rows` | 实体载体和包装组件 | 确认每个存在的组件均为一项有名称的完工制品，记录不存在的条件组件，未解决 UUID 保持为空，且未使用未指定包装或载体的集合流。 |  |
| `validate_package_mass_balance` | 完工套装 | 使用相同批次和称量口径重新计算输出归一化和组件质量平衡残差；验收前调查并披露任何残差。 |  |
| `validate_allocation_reproducibility` | 共享基础设施和联合生产 | 根据留存的分子、分母、期间、基础设施范围和包装批次记录重新执行每项分配；确认硬件隐含负荷采用时间/资源份额。 | `gsf-sci-1-1-0` |
| `validate_bilingual_uuid_identity` | 中英文版本 | 确认 row_id 和 UUID 完全相同，且每个带 UUID 选定流采用准确的 Tiangong 中文 baseName。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已发布套装网络软件的发行版本和包装配置特定前景产品数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 对所声明实体套装网络软件产品进行从摇篮到出版商发货口建模；下游研究可衔接单独建模的配送、部署、运行、维护或报废模块 |
| excluded_use | 通用表示软件下载、托管访问、软件即服务、定制软件开发、操作系统、数据库软件、应用软件，或未披露地混合实体与电子交付路线 |
| required_metadata | PCR id；CPC 参考；软件版本和发行号；网络功能；支持平台；出版商；发行日期和参考日期；许可/支持期限；实体载体；包装物料清单；开发/构建和包装地理范围；发货口；分配键；上游数据集标识；未解决 UUID；数据缺口 |
| required_quality_disclosure | 电表和供应商覆盖；遥测粒度；模型化缺口；采用年度数据回退时的说明；数据中心开销；硬件时间/资源分配；组件供应商和质量证据；质量平衡残差；时间、地理和技术代表性；敏感性结果 |
| update_trigger | 软件架构、发布流水线、安全或测试范围、载体、包装配置、出版商或供应商地理范围、贡献基础设施、分配方法、参考期或重要数据缺口发生变化时重新评估数据集 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-47812` | `official_guidance` | 联合国统计司，CPC 3.0 版分类明细，代码 47812 “Network software, packaged”，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47812（检索日期：2026-09-11） | 产品身份、层级、适用网络软件功能以及与相邻产品类别比较得到的排除项 |
| `un-cpc-3-0-84341` | `official_guidance` | 联合国统计司，CPC 3.0 版分类明细，代码 84341 “System software downloads”，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341（检索日期：2026-09-11） | 区分电子系统软件下载文件与套装产品边界 |
| `gsf-sci-1-1-0` | `standard` | Green Software Foundation，Software Carbon Intensity (SCI) Specification，1.1.0 版，https://sci.greensoftware.foundation/（检索日期：2026-09-11） | 软件边界、功能单位一致性、电力计量、支持基础设施、真实数据与模型化量化、数据粒度，以及硬件时间/资源分配 |
| `cifa-lca-database-guideline-appendix` | `official_guidance` | 碳足迹产业技术创新联盟，《LCA/碳足迹数据库构建导则——第六章附录》，CPC 代码表，https://www.carbonfootprint.network/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix（检索日期：2026-09-11） | CPC 47812 的专业中文产品名称“套装网络软件” |
