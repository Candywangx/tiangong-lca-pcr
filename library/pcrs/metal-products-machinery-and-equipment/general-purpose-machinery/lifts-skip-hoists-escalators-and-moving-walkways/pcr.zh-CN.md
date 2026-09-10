---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.lifts-skip-hoists-escalators-and-moving-walkways
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 电梯、箕斗提升机、自动扶梯和自动人行道

## 1. 范围与适用性

本 PCR 规定完整电梯、箕斗提升机、自动扶梯和自动人行道制造前景数据包的编制要求。适用对象包括用于载人、载货、运料或混合用途，沿垂直、倾斜或水平方向运行，并以功能完整制造系统交付的设备。必须声明产品特定物料清单（BOM）、制造路线、出厂试验、设备子型和工厂门口状态。

共同方法边界止于制造工厂门口。报告制造商自行实施的零部件制造应纳入边界。安装与调试、运行与维护、现代化改造，以及拆除或寿命终止处理均为独立的条件过程，不得静默并入制造数据集。加入下游过程时，必须明确其情景、地域、使用寿命、负载或使用类别和能耗边界。

本类别不包括独立起重附件、起重机、绞车、千斤顶、叉车、归入 CPC 43540 之外的连续输送机、建筑井道与支撑土建工程，以及无关建筑服务。替换件或孤立子系统不属于完整设备范围；若研究对象确为零部件或子系统，必须明确声明，且不得将结果表述为完整设备结果。

现行电梯 c-PCR 仅适用于电梯，并明确不适用于箕斗提升机、自动扶梯或自动人行道。因此，电梯专用规则只可用于电梯子型；自动扶梯和自动人行道运行能耗采用 ISO 25745-3；电梯运行能耗采用 ISO 25745-2；箕斗提升机能耗应采用前景测量或有记录的工程计算，不得从前述任一标准外推。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.lifts-skip-hoists-escalators-and-moving-walkways |
| classification_refs | CPC 3.0: 43540 — 电梯、箕斗提升机、自动扶梯和自动人行道 |
| covered_products | 用于载人、载货、运料或混合用途的功能完整制造电梯、箕斗提升机、自动扶梯和自动人行道 |
| excluded_products | 独立零部件和替换件；起重附件；起重机；绞车；千斤顶；叉车；CPC 43540 之外的输送机；建筑井道、底坑、支撑结构和无关建筑服务 |
| representative_product | 制造工厂门口的一套已声明完整设备系统，按干产品质量归一化 |
| production_route | 外购和/或自制零部件 → 系统装配与集成 → 出厂试验与验收 → 包装与工厂门口放行 |
| market_state | 工厂门口功能完整的制造成品；仅在单独声明的条件过程中表示已安装或在用状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一套处于已声明工厂门口配置的功能完整电梯、箕斗提升机、自动扶梯或自动人行道 |
| How much | 完整工厂门口设备干质量 1 kg |
| How well | 符合所声明设备子型、额定载荷或载客量、运行几何、额定速度、驱动技术、负载或使用类别、出厂验收准则和适用市场规范 |
| How long or cycle | 一个制造报告期；共同制造参考不含使用寿命，只有加入条件性下游使用阶段模型时才必须声明使用寿命 |
| reference_flow_link | 1 kg 输出是一套完整验收设备的质量归一化份额；必须保留整机干质量，以便在 PCR 参考流与一套安装或销售设备之间换算 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 起重机、箕斗提升机、自动扶梯及自动通道 `71c9140f-5a21-4ba8-ac40-c272cdf45654` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | equipment_subtype; passenger_goods_or_material_service; complete_or_subsystem_scope; whole_unit_dry_mass_kg; rated_load_or_capacity; vertical_rise_inclined_length_or_horizontal_length; rated_speed; drive_or_traction_technology; duty_or_usage_category; manufacturing_geography; factory_gate_condition; reporting_period; installation_scope; reference_service_life_if_use_stage_included; operational_energy_method_if_use_stage_included |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 完整工厂门口参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考输出按 1 kg 设备干质量报告，并保留测量或 BOM 核对的整机干质量用于缩放。除非随产品销售，否则临时试验载荷、安装工具、运输包装和建筑工程不得计入设备质量。 |
| `bom_mass_basis` | 材料、外购零部件、内部组件和产品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录净装入质量、损耗前投入质量和废物或不合格品质量。不得依据通用设备设计推断零部件份额。 |
| `energy_carrier_preservation` | 制造、试验、安装和运行能耗 | 与流匹配的能量属性 | kWh 或 MJ | 保留实测能源载体和单位。只有在明确给出换算因子时才换算，并保留原始读数、因子、换算值及地域和电压匹配的 Tiangong 能源流。 |
| `operational_energy_boundary` | 条件性使用阶段能耗 | 与流匹配的能量属性 | 每个声明期间的 kWh | 按单台设备计量或计算设备相关能耗。声明辅助负载；除非情景明确纳入，否则不得把辅助负载计入设备结果。 |
| `lift_operational_energy` | 条件性电梯使用阶段 | 与流匹配的能量属性 | kWh/year | 对处于 ISO 25745-2 适用范围内的电梯，采用单台设备年度实测、计算或模拟方法，并声明所选方法和适用电梯子型。 |
| `escalator_walk_operational_energy` | 条件性自动扶梯或自动人行道使用阶段 | 与流匹配的能量属性 | kWh/year | 对处于 ISO 25745-3 适用范围内的自动扶梯和自动人行道应用该标准。设备若超出其规定提升高度或长度范围，必须披露；未获批准扩展时不得声称其分类可直接比较。 |
| `skip_hoist_operational_energy` | 条件性箕斗提升机使用阶段 | 与流匹配的能量属性 | 每个声明负载期间的 kWh 或 MJ | 使用前景计量能耗，或与载荷、行程、循环、待机和辅助设备关联的有记录工程计算。没有适用性证据时，不得套用 ISO 25745-2 或 ISO 25745-3 的默认行为。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告制造商接收边界处的产品特定 BOM 和验收合格外购材料、零部件及子组件，并为其生产和交付连接上游数据集 |
| starting_condition_role | 前景始于制造商控制的接收环节，覆盖其控制的准备、装配、试验、验收、包装和工厂门口放行活动 |
| product_classification_scope | 处于经审查语义范围内的完整设备；CPC 43540 仅为映射语境，不授权纳入无关起重或输送机械 |
| recursive_input_rule | 作为投入购入的电梯、箕斗提升机、自动扶梯、自动人行道子系统或同类完整设备，仅作为产品投入记录一次并连接上游数据集；不得在同一前景数据包中递归展开其内部制造 |
| upstream_dataset_requirement | 每项外购材料、零部件、能源载体、运输服务、处理服务和其他技术圈投入均需代表性上游数据集，或明确披露未解决数据缺口 |
| disclosure | 声明设备子型、完整设备或子系统范围、BOM 覆盖、自制和外包作业、地域、工厂门口状态、排除项、分配驱动因子，以及是否存在安装、使用、维护、现代化改造或寿命终止过程 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_product_specific_bom` | 产品与制造范围 | 对范围内设备使用产品特定 BOM 和公司或场址特定制造记录。通用零部件份额只能作为明确披露的临时数据缺口，不得作为合格前景结果。 | `eu-pef-method-2021`; `epd-intl-cpcr-008-lifts-v2-0-0` |
| `sb_factory_gate_core` | 共同前景边界 | 纳入制造商控制的零部件准备、装配、集成、出厂试验、验收、包装和工厂门口放行。识别跨越前景边界的共产品、副产品、不合格品和废物。 | `eu-pef-method-2021` |
| `sb_conditional_downstream` | 安装、使用、维护、现代化改造和寿命终止 | 下游阶段只有在明确条件过程及其情景、地域、时间基准和数据源时才建模。工厂门口数据集排除这些阶段时必须明示，且不得解释为零影响。 | `eu-pef-method-2021`; `epd-intl-pcr-2019-14-v2-0-1` |
| `sb_subtype_method_separation` | 设备子型 | 电梯专用 PCR 证据只适用于电梯；ISO 25745-2 只适用于其适用电梯；ISO 25745-3 只适用于其适用自动扶梯和自动人行道。箕斗提升机规则应以其前景记录或其他适用证据为基础。 | `epd-intl-cpcr-008-lifts-v2-0-0`; `iso-25745-2-2015`; `iso-25745-3-2015` |
| `sb_ancillary_energy_disclosure` | 条件性运行能耗 | 将设备相关运行能耗与建筑或场址辅助负载分开。列出所有纳入和排除辅助负载，并保留电表边界证据。 | `iso-25745-1-2023`; `iso-25745-3-2015` |
| `sb_exclusion_justification` | 所有排除与截断 | 记录每项被排除过程或流的原因及潜在重要性。不得仅因数量或 UUID 尚不可得而省略相关流。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_manufacturing_and_preparation` | 零部件制造与准备 | `conditional` | 纳入报告制造商控制的切割、成形、机加工、焊接、涂装、布线、控制器或驱动制造以及其他零部件作业 | 前景零部件生产 | 每 1 kg 完整工厂门口参考产品 |
| `final_assembly_and_integration` | 总装与系统集成 | `required` | 完整设备始终纳入 | 前景设备装配 | 每 1 kg 完整工厂门口参考产品 |
| `factory_testing_and_acceptance` | 出厂试验与验收 | `required` | 始终纳入工厂放行前要求的试验与返工 | 前景质量保证 | 每 1 kg 验收设备 |
| `packaging_and_factory_gate_release` | 包装与工厂门口放行 | `required` | 始终纳入包装和放行作业；只有证据支持时才可报告零包装 | 前景完工与放行 | 工厂门口 1 kg 完整验收设备 |
| `installation_and_commissioning` | 安装与调试 | `excluded_by_default` | 只有数据集明确覆盖已安装设备时才加入 | 条件性下游过程 | 每 1 kg 工厂门口设备及声明安装情景 |
| `operation_and_maintenance` | 运行与维护 | `conditional` | 仅用于已声明使用阶段数据集或生命周期模型 | 条件性下游使用过程 | 每 1 kg 工厂门口设备及声明使用寿命和负载情景 |
| `modernization` | 现代化改造 | `excluded_by_default` | 只有声明改造情景改变设备或使用寿命时才加入 | 条件性下游过程 | 每个声明改造事件 |
| `dismantling_and_end_of_life` | 拆除与寿命终止处理 | `excluded_by_default` | 只有数据集明确覆盖寿命终止时才加入 | 条件性下游过程 | 每 1 kg 工厂门口设备及声明寿命终止情景 |

### 过程：零部件制造与准备（`component_manufacturing_and_preparation`）

#### 输入

##### 产品流

###### 原材料、半成品和外购零部件投入（`component_material_inputs`）

记录进入制造商控制零部件准备过程的实际材料、外购零部件、电子件、驱动或液压件、绳索或带、结构件、梯级或托板、导向系统、外壳和辅助件。按材料和技术差异拆分。

- 选定流：选择与每项实录材料或零部件匹配的 Tiangong 产品流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：来自 BOM、采购、仓储或生产记录的产品特定接收和领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：

###### 零部件准备能耗与公用工程（`component_process_energy`）

记录已纳入自制零部件作业的计量电力、燃料、压缩空气、工艺热和其他公用工程。构建数据集时选择地域和载体匹配的 Tiangong 流。

- 选定流：选择与每项实测能源载体或公用工程匹配的 Tiangong 产品流；无类别通用 UUID
- 流属性/单位：载体特定能量或服务属性 / 原始计量单位
- 数量规则：直接归属于设备的计量用量，或按第 7 节分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入总装的已准备零部件（`prepared_components_output`）

记录放行至总装的自制零部件核对质量。内部转移不得重复计算上游材料负担。

- 选定流：选择与已准备零部件匹配的 Tiangong 产品流，或使用有记录内部中间流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据生产记录和零部件质量平衡计算的验收零部件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_materials`
- 来源：

##### 废物流

###### 零部件制造不合格品、废料和送处理废物（`component_process_waste`）

按去向和法规类别区分金属废料、切屑、废工艺化学品、涂装废物、废水和其他送处理输出。

- 选定流：选择与每项实录废物和处理路线匹配的 Tiangong 废物流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量废物、转移联单，或披露不确定性的批次核对差额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_waste_and_emissions`
- 来源：

##### 基本流

###### 零部件作业直接排放（`component_direct_emissions`）

记录已纳入焊接、涂装、清洗、燃烧或其他零部件过程向空气、水和土壤的实测或按许可计算排放。环境释放不得以废物流表示。

- 选定流：选择与每种实测或计算物质及环境介质匹配的 Tiangong 基本流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放，或由采集活动量与已识别方法因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_waste_and_emissions`
- 来源：

### 过程：总装与系统集成（`final_assembly_and_integration`）

#### 输入

##### 产品流

###### 产品特定 BOM 零部件和子组件（`assembly_bom_inputs`）

记录装入最终系统的全部外购和自制零部件，区分净装入质量、投入损耗和包装。

- 选定流：选择与每项 BOM 项目匹配的 Tiangong 产品流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：来自 BOM 和装配记录的产品特定领用与装入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 装配能耗、公用工程与耗材（`assembly_energy_and_consumables`）

记录可归属的电力、燃料、压缩空气、润滑剂、清洗剂、紧固件和其他装配投入，并按流拆分。

- 选定流：选择与每项实录载体或耗材匹配的 Tiangong 产品流；无类别通用 UUID
- 流属性/单位：流特定属性 / 原始记录单位
- 数量规则：直接计量、领用记录，或按第 7 节由共享记录分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入出厂试验的已装配设备（`assembled_equipment_output`）

记录转入出厂试验的集成设备干质量，不含临时试验介质或载荷。

- 选定流：起重机、箕斗提升机、自动扶梯及自动通道 `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：BOM 核对的装配后干质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 废物流

###### 装配不合格品与废物（`assembly_waste`）

分别记录不合格零部件、边角料、泄漏和其他装配废物；不得将其与可返工材料或内部转移混合。

- 选定流：选择与每项实录废物和处理路线匹配的 Tiangong 废物流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量废物或生产记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 基本流

### 过程：出厂试验与验收（`factory_testing_and_acceptance`）

#### 输入

##### 产品流

###### 进入试验的已装配设备（`test_equipment_input`）

将已装配设备质量带入试验，不得增加第二次上游生产负担。

- 选定流：起重机、箕斗提升机、自动扶梯及自动通道 `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入的装配后干质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_factory_testing`
- 来源：

###### 试验能耗、介质与耗材（`factory_test_inputs`）

记录出厂试验使用的电力、燃料、临时运行介质、液压油补充和耗材。原状返还的临时试验载荷或介质作为可重复使用试验资产跟踪，不计入产品质量。

- 选定流：选择与每项实录试验投入匹配的 Tiangong 产品流；无类别通用 UUID
- 流属性/单位：流特定属性 / 原始记录单位
- 数量规则：验收设备的试验计量读数，或领用量减退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_testing`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入包装的验收设备（`accepted_equipment_output`）

仅记录通过已声明出厂验收准则的设备；返工设备在验收前始终留在前景系统内。

- 选定流：起重机、箕斗提升机、自动扶梯及自动通道 `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：试验与返工核对后的验收干质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_factory_testing`
- 来源：

##### 废物流

###### 试验废物与未退回运行介质（`factory_test_waste`）

按处理路线记录废弃试验介质、送处理的泄漏或排空流体以及试验不合格品。

- 选定流：选择与每项实录废物和处理路线匹配的 Tiangong 废物流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量、计量或领用量减退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_testing`
- 来源：

##### 基本流

###### 出厂试验直接排放（`factory_test_direct_emissions`）

记录直接燃烧排放和液压油或其他运行流体向环境的释放。只有证据证明释放途径不存在时才允许为零。

- 选定流：选择与每种物质和环境介质匹配的 Tiangong 基本流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量，或由采集燃料或流体损失与已识别方法因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_factory_testing`
- 来源：

### 过程：包装与工厂门口放行（`packaging_and_factory_gate_release`）

#### 输入

##### 产品流

###### 进入包装的验收设备（`packaging_equipment_input`）

将验收设备带入包装，不得重复其上游负担。

- 选定流：起重机、箕斗提升机、自动扶梯及自动通道 `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：验收设备干质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：

###### 包装材料与放行耗材（`packaging_material_inputs`）

记录随产品交付或用于工厂门口包装的托盘、箱体、木材、纸板、塑料、防腐材料、标签等。包装质量与设备干质量分开。

- 选定流：选择与每种包装或放行材料匹配的 Tiangong 产品流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：装箱单、领用记录或称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整验收工厂门口设备（`factory_gate_reference_product`）

这是定量参考输出，仅表示设备干质量；随附包装应按数据包设计作为独立产品投入或输出报告。

- 选定流：起重机、箕斗提升机、自动扶梯及自动通道 `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测或 BOM 核对整机干质量归一化后恰为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：

##### 废物流

###### 包装作业废物（`packaging_operation_waste`）

按处理路线记录包装边角料、损坏包装和其他放行作业废物。

- 选定流：选择与每项实录废物和处理路线匹配的 Tiangong 废物流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量废物或包装材料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：

##### 基本流

### 过程：运行与维护（`operation_and_maintenance`）

#### 输入

##### 产品流

###### 进入使用情景的已安装设备（`installed_equipment_input`）

仅在独立下游模型包含安装和已声明使用寿命时使用此内部链接。工厂门口制造数据集仍应可独立使用。

- 选定流：起重机、箕斗提升机、自动扶梯及自动通道 `71c9140f-5a21-4ba8-ac40-c272cdf45654`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：连接到声明安装单元情景的工厂门口设备质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品及声明使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_scenario_identity`
- 来源：

###### 设备运行电力（`operational_electricity`）

按适用子型方法和声明负载情景记录设备相关能耗。电力流应匹配实际地域、电压等级和市场状态；搜索结果本身不构成通用电力 UUID 选择。

- 选定流：选择地域、电压和市场状态匹配的 Tiangong 电力产品流；无类别通用 UUID
- 流属性/单位：Energy / kWh
- 数量规则：适用电梯按 ISO 25745-2；适用自动扶梯或自动人行道按 ISO 25745-3；箕斗提升机按计量或有记录工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品及声明使用寿命和负载情景
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_operational_energy`
- 来源：`iso-25745-1-2023`; `iso-25745-2-2015`; `iso-25745-3-2015`

###### 维护零件与耗材（`maintenance_inputs`）

记录声明维护计划中的替换件、润滑剂、液压油、清洗材料和服务运输投入。无证据时不得使用类别平均替换率。

- 选定流：选择与每项维护记录匹配的 Tiangong 产品或服务流；无类别通用 UUID
- 流属性/单位：流特定属性 / 记录单位
- 数量规则：维护日志、发票、零件领用、服务运输或流体补充记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品及声明使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maintenance_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明运输服务（`transport_service_output`）

服务输出仅在子型特定下游模型中报告。必须声明服务计量；没有经审查共同功能等效关系时，不得用于比较不同设备子型。

- 选定流：选择或创建适合设备子型并经审查的服务流身份；无类别通用 UUID
- 流属性/单位：声明服务属性 / passenger-metre、tonne-metre、cycle 或其他经审查单位
- 数量规则：由声明载荷或乘客基准、行程、完成循环、可用率和服务期间计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个声明安装单元使用情景
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_operational_energy`
- 来源：`iso-25745-2-2015`; `iso-25745-3-2015`

##### 废物流

###### 维护废物与替换下来的零件（`maintenance_waste`）

按实际处理路线记录拆下零件、废流体、清洗废物和其他维护输出。

- 选定流：选择与每项实录废物和处理路线匹配的 Tiangong 废物流；无类别通用 UUID
- 流属性/单位：流特定属性 / 记录单位
- 数量规则：维护日志与废物转移联单
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品及声明使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maintenance_records`
- 来源：

##### 基本流

###### 运行流体向环境释放（`operational_fluid_releases`）

仅记录实际或计算进入环境介质的释放。送处理的排出流体是废物流，不是基本流排放。

- 选定流：选择与每种释放物质和环境介质匹配的 Tiangong 基本流；无类别通用 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：期初库存 + 补加量 − 期末库存 − 回收复用量 − 送处理量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 完整工厂门口参考产品及声明使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_maintenance_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | 共享和多功能制造过程 | 优先通过计量、生产订单跟踪或细分避免分配。确实不可行时，说明原因，并使用机器时间、能量需求、处理质量或试验台时等因果物理驱动因子。 | `eu-pef-method-2021` |
| `alloc_other_relationship_last` | 剩余共享负担 | 只有在细分、系统扩展和相关物理关系均被证明不可行后，才使用经济或其他非物理关系。记录数据期、因子计算、受影响过程和敏感性。 | `eu-pef-method-2021` |
| `alloc_internal_transfers` | 内部零部件和设备中间状态 | 内部转移不得重复上游负担。仅分配接收过程新增的过程投入与输出。 | `eu-pef-method-2021` |
| `alloc_rework_and_rejects` | 返工、不合格品和生产废料 | 返工负担归于验收参考产品。不合格品和废料作为输出记录；除非所选生命周期方法明确要求且全部参数已披露，否则不得在前景中计入回收或避免生产抵扣。 | `eu-pef-method-2021` |
| `alloc_packaging` | 设备与包装 | 设备干质量与包装质量分开。包装作业负担采用直接包装记录或因果驱动因子分配；包装质量不得加入设备参考输出。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_manufacturing_and_preparation` | 材料投入与已准备零部件输出 | BOM、采购、仓储、批次和生产记录 | item_id; description; material_or_component_type; supplier; received_mass; issued_mass; accepted_output_mass; lot; unit; date | 将产品特定 BOM 与收货、领用、验收输出和库存变化核对 | kg 和原始单位 | 每批次或生产订单 | 完整报告期 | 所有纳入零部件作业 | 按项目和生产订单求和，扣除有记录库存变化，再按验收工厂门口干质量归一化 | 批准 BOM 版本、秤校准、采购或仓储记录及核对日志 |
| `cp_component_energy` | `component_manufacturing_and_preparation` | 零部件过程能耗与公用工程 | 电表、燃料、公用工程和机器工时记录 | carrier; meter_id; opening; closing; unit; machine_time; production_order; allocation_driver; geography; voltage_or_grade | 可用时直接分表计量，否则按第 7 节分配已核对共享表 | kWh、MJ、m3、kg 或原始单位 | 连续、每班、每批或每月 | 完整报告期 | 所有纳入零部件作业 | 直接用量或共享总量乘有记录因果分配因子，再按验收干质量归一化 | 电表身份与校准、发票核对和分配工作表 |
| `cp_component_waste_and_emissions` | `component_manufacturing_and_preparation` | 零部件废物与直接排放 | 秤、废物联单、许可监测、实验室和因子计算记录 | material_or_substance; flow_type; compartment_or_treatment; amount; unit; date; method; factor_source | 废物采用测量；排放采用测量或由采集活动量和已识别方法因子计算 | kg 和原始单位 | 每批、每次转移、每个监测期或许可频次 | 完整报告期 | 所有纳入零部件作业 | 按流身份和去向或环境介质汇总，再按验收干质量归一化 | 秤记录、联单、实验室结果、许可报告或计算表 |
| `cp_assembly_records` | `final_assembly_and_integration` | BOM 投入、装配公用工程、输出与废物 | BOM、领用、电表、工单和废物记录 | equipment_id; item_id; issued_amount; incorporated_amount; utility_amount; output_mass; waste_amount; unit; date; driver | 将所有记录链接到设备或生产订单，并核对材料和共享资源使用 | kg 和原始单位 | 每台设备或生产订单 | 完整报告期 | 总装线及其支持作业 | 汇总直接记录；共享记录按第 7 节分配；按验收干质量归一化 | BOM 版本、工单、电表或领用记录、秤记录和废物记录 |
| `cp_factory_testing` | `factory_testing_and_acceptance` | 试验投入、验收输出、返工、废物和直接排放 | 试验计划、电表、领退、验收、返工和废物记录 | equipment_id; test_id; test_type; start; end; energy; test_media_issued; test_media_returned; accepted_mass; rework; waste; direct_release; unit | 将每次试验和返工事件链接至设备，并区分可复用试验资产与消耗介质 | kg、kWh、MJ 或原始单位 | 每个试验事件 | 报告期放行设备的全部试验 | 全部出厂试验台 | 汇总验收设备消耗投入、返工、废物和排放，再按验收干质量归一化 | 批准试验计划、电表记录、领退记录、验收证书和返工处置 |
| `cp_packaging_release` | `packaging_and_factory_gate_release` | 包装投入、参考输出与作业废物 | 装箱单、材料领用、秤、放行和废物记录 | equipment_id; dry_mass; packaging_item; packaging_mass; waste_mass; release_date; unit | 核对验收干质量、包装和放行记录，包装保持独立 | kg | 每台放行设备 | 报告期全部放行设备 | 工厂包装与放行边界 | 参考输出设为验收干质量，包装和废物分别汇总，再归一化到 1 kg 输出 | 校准秤或 BOM 质量核对、签署装箱单和放行记录 |
| `cp_use_scenario_identity` | `operation_and_maintenance` | 安装单元身份与使用情景 | 安装、调试和情景记录 | equipment_id; subtype; location; installed_mass; rise_or_length; speed; capacity; drive; duty_category; service_life; scenario_start; scenario_end | 将工厂门口产品绑定至一个声明安装单元情景 | kg、m、m/s、years 和声明容量单位 | 每个情景及变更事件 | 声明使用寿命或研究期 | 声明安装点 | 每个建模单元一份情景记录；记录每项影响功能或能耗的变更 | 调试记录、技术规格、情景批准和使用寿命依据 |
| `cp_operational_energy` | `operation_and_maintenance` | 设备相关运行能耗与服务 | 电表、控制器日志、模拟或工程计算 | equipment_id; subtype; method; meter_boundary; active_energy; standby_energy; cycles; payload_or_passenger_basis; travel; operating_time; ancillary_loads; period; unit | 适用电梯采用 ISO 25745-2，适用自动扶梯或自动人行道采用 ISO 25745-3，箕斗提升机采用前景测量或计算 | kWh 和声明服务单位 | 连续或代表性测量、年度计算及情景变更时 | 声明研究期 | 单台安装设备 | 将接受的测量或计算年化，分开辅助负载，并按声明使用寿命和参考质量缩放 | 电表校准、控制器导出、模型输入、方法版本、计算表和边界图 |
| `cp_maintenance_records` | `operation_and_maintenance` | 维护投入、废物、服务运输与释放 | 维护日志、发票、零件领用、流体库存、运输和废物记录 | date; equipment_id; part_or_fluid; input_amount; removed_amount; treatment; travel_distance; mode; opening_inventory; closing_inventory; unit | 采集每次维护事件并核对流体和拆下零件 | kg、L、km、tkm 和原始单位 | 每次维护事件 | 声明研究期 | 声明安装单元和服务网络 | 按流和路线汇总研究期记录，需要时按库存平衡计算释放并归一化 | 签署维护记录、发票或领用记录、流体库存、运输日志和联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部制造清单行 | normalized_amount = attributable_period_amount / accepted_factory_gate_dry_mass_kg | attributable_period_amount; accepted_factory_gate_dry_mass_kg | 每 1 kg 完整工厂门口参考产品的数量 | `eu-pef-method-2021` |
| `calc_shared_resource_allocation` | 共享能源、公用工程、耗材、废物和排放 | attributable_amount = reconciled_shared_total × causal_driver_for_product / sum_causal_drivers_for_all_products | reconciled_shared_total; product_driver; total_driver | 产品可归属前景数量 | `eu-pef-method-2021` |
| `calc_equipment_mass_balance` | 零部件准备、装配、试验和放行 | unexplained_mass = inputs + opening_inventory − incorporated_output − recorded_waste − closing_inventory；调查并披露非零残差 | input_mass; opening_inventory; incorporated_output_mass; recorded_waste_mass; closing_inventory | 过程质量平衡残差 | `eu-pef-method-2021` |
| `calc_lift_annual_energy` | 适用电梯使用情景 | 按 ISO 25745-2 由接受的测量、计算或模拟求单台年度能耗；保留方法输入并分开非电梯辅助负载 | active_energy; standby_energy; trips_or_cycles; usage_category; measurement_or_simulation_inputs | 每台安装电梯 kWh/year | `iso-25745-1-2023`; `iso-25745-2-2015` |
| `calc_escalator_walk_annual_energy` | 适用自动扶梯或自动人行道情景 | 按 ISO 25745-3 计算和分类年度设备能耗，保留运行模式、运行时间、几何和排除辅助负载 | measured_or_calculated_power; operating_time; operating_mode; rise_or_length; ancillary_loads | 每台安装自动扶梯或自动人行道 kWh/year | `iso-25745-1-2023`; `iso-25745-3-2015` |
| `calc_skip_hoist_energy` | 箕斗提升机使用情景 | annual_or_period_energy = 实测电表差，或由功率、待机、辅助设备、载荷、行程和循环记录求和；不得自动导入电梯或自动扶梯默认值 | meter_readings_or_power; operating_time; cycles; payload; travel; standby; auxiliaries | 每个声明负载期间的 kWh 或 MJ |  |
| `calc_fluid_release_balance` | 运行或液压流体释放 | environmental_release = opening_inventory + additions − closing_inventory − recovered_for_reuse − treatment_bound_removal；负值无效 | opening_inventory; additions; closing_inventory; recovered_amount; treatment_bound_amount | 释放到声明环境介质的质量 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与情景 | 使用一个产品特定设备配置和一个受控 BOM 版本；声明全部必需限定信息。 | 技术规格、BOM 版本、产品标识和放行记录 |
| `dq_primary_manufacturing_data` | 制造商控制过程 | 对产品 BOM 和已纳入制造过程使用公司或场址特定数据。 | 电表、工单、领用、试验、废物和放行记录；`eu-pef-method-2021` |
| `dq_temporal_representativeness` | 全部前景数据 | 覆盖代表性报告期，并披露停机、爬坡、异常试验、返工活动和替代。 | 有起止日期的记录和代表性说明 |
| `dq_geographical_technological_match` | 上游数据集与能源 | 匹配材料等级、零部件技术、能源载体、电压、市场状态、生产地域和处理路线；记录全部代理。 | 数据集元数据和代理理由 |
| `dq_completeness` | BOM、能源、废物和排放 | 核对产品质量与工厂公用工程；识别全部排除及潜在重要性，不得将缺失数据当作零。 | BOM 核对、公用工程核对、质量平衡、废物台账和排除日志 |
| `dq_operational_method` | 条件性使用阶段 | 保留适用 ISO 方法和版本、测量或模型边界、设备几何、使用类别、使用寿命和辅助负载处理。 | 方法报告、电表边界、计算表和情景记录 |
| `dq_uncertainty_and_estimates` | 估算与计算值 | 识别计算因子、不确定性、敏感性和替换触发条件。`reasoned_estimate` 必须保持临时状态，不得静默变成合格实测值。 | 计算表、来源、不确定性说明和审查处置 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity_and_scope` | 参考产品 | canonical PCR id、设备子型、完整设备或子系统范围、CPC 语境或必需参考限定信息缺失或冲突时失败。 | `unsd-cpc-3-2025`; `epd-intl-cpcr-008-lifts-v2-0-0` |
| `val_reference_uuid_and_mass` | 参考流 | 要求产品流 `71c9140f-5a21-4ba8-ac40-c272cdf45654`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg、参考输出 1 kg 和正的整机干质量。 |  |
| `val_bom_and_mass_balance` | 制造清单 | 要求产品特定 BOM、设备与包装质量分离、废物按路线拆分，并记录材料质量平衡残差调查。 | `eu-pef-method-2021` |
| `val_required_processes` | 过程覆盖 | 要求总装与系统集成、出厂试验与验收、包装与工厂门口放行。制造商控制任何所列零部件作业时还要求零部件准备过程。 | `eu-pef-method-2021` |
| `val_allocation_evidence` | 共享过程 | 缺少已核对总量、因果驱动因子、分母总体、数据期，或未说明为何未直接测量或细分时，共享资源分配失败。 | `eu-pef-method-2021` |
| `val_operational_subtype_method` | 条件性使用阶段能耗 | 要求声明子型特定方法。拒绝将电梯 c-PCR 或 ISO 25745-2 外推至箕斗提升机、自动扶梯或自动人行道；拒绝将 ISO 25745-3 外推至电梯或箕斗提升机。 | `epd-intl-cpcr-008-lifts-v2-0-0`; `iso-25745-2-2015`; `iso-25745-3-2015` |
| `val_operational_boundary` | 条件性使用阶段能耗 | 要求单台设备电表或模型边界、纳入与排除辅助负载、期间、几何、负载或使用类别和使用寿命。 | `iso-25745-1-2023`; `iso-25745-2-2015`; `iso-25745-3-2015` |
| `val_source_and_estimate_status` | 外部证据与估算 | 外部来源值没有已列 source id 时失败。任何 `reasoned_estimate` 均标记为临时，只有审查记录明确接受或替换后才可视为激活所需完整内容。 | `eu-pef-method-2021` |
| `val_completeness_and_exclusions` | 数据集完整性 | 静默遗漏、缺失上游数据集链接、缺失处理路线，或排除项没有原因和潜在重要性披露时失败。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查产品特定制造数据集可作为 secondary_dataset；只有独立方法与数据审查确认代表性后才可作为 background_dataset |
| downstream_use | 用于过程编制和 lifecyclemodel 构建的前景数据包；可选子型特定安装、使用、维护、现代化改造和寿命终止情景 |
| allowed_use | 用于已声明设备子型、制造路线、地域、工厂门口状态、时间期和质量水平的产品特定建模 |
| excluded_use | 在电梯、箕斗提升机、自动扶梯和自动人行道之间进行无限定比较；以零件或子系统结果代替完整设备数据集；在没有声明子型方法和服务情景时作使用阶段声明 |
| required_metadata | PCR id 与版本；设备子型；服务类型；完整设备或子系统范围；整机干质量；容量；提升高度或长度；速度；驱动技术；负载或使用类别；BOM 版本；制造地域和期间；工厂门口状态；过程覆盖；分配驱动因子；上游数据集引用；安装和使用阶段范围；适用时的使用寿命 |
| required_quality_disclosure | 原始数据占比；BOM 和公用工程核对；质量平衡残差；时间、地域和技术代表性；代理数据集；排除与潜在重要性；分配方法；运行能耗边界；不确定性；临时估算；来源与 UUID 缺口 |
| update_trigger | BOM 或设计重大变化；新驱动或控制技术；制造场址或能源供应变化；试验或包装路线变化；使用寿命或负载情景修订；运行能耗标准变化；新的经审查子型 PCR；代理或临时估算被替换；UUID 弃用 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0，代码 43540 “Lifts, skip hoists, escalators and moving walkways”，https://unstats.un.org/unsd/classifications/cpc/version3（检索于 2026-07-26） | 仅用于分类语境和类别名称范围 |
| `epd-intl-pcr-2019-14-v2-0-1` | 标准（`standard`） | EPD International，PCR 2019:14 Construction products (EN 15804+A2)，version 2.0.1，https://www.environdec.com/pcr-library/pcr_6b99d07c-4b75-4763-4485-08dd775d2e49（检索于 2026-07-26） | 建筑产品 PCR 语境，以及电梯和自动扶梯/自动人行道分别存在 c-PCR |
| `epd-intl-cpcr-008-lifts-v2-0-0` | 标准（`standard`） | EPD International，2019:14-c-PCR-008 Lifts (elevators)，version 2.0.0，https://www.environdec.com/pcr-library/pcr_bc9b668e-0689-4f7b-5d33-08de2daa222d（检索于 2026-07-26） | 仅限电梯的范围、完整电梯由子系统/零部件组成，以及禁止把电梯 c-PCR 用于箕斗提升机、自动扶梯或自动人行道 |
| `iso-25745-1-2023` | 标准（`standard`） | ISO 25745-1:2023，Energy performance of lifts, escalators and moving walks — Part 1: Energy measurement and verification，https://www.iso.org/standard/78245.html（检索于 2026-07-26） | 单台设备运行能耗测量边界与辅助负载披露 |
| `iso-25745-2-2015` | 标准（`standard`） | ISO 25745-2:2015 及适用修订，Energy performance of lifts, escalators and moving walks — Part 2: Energy calculation and classification for lifts (elevators)，https://www.iso.org/standard/60951.html（检索于 2026-07-26） | 适用电梯子型的年度实测、计算或模拟能耗方法 |
| `iso-25745-3-2015` | 标准（`standard`） | ISO 25745-3:2015，Energy performance of lifts, escalators and moving walks — Part 3: Energy calculation and classification of escalators and moving walks，https://www.iso.org/standard/60952.html（检索于 2026-07-26） | 自动扶梯和自动人行道运行能耗方法、适用性和辅助负载排除 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会，Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf（检索于 2026-07-26） | 产品特定 BOM 和公司数据、系统边界、排除披露、分配层级、前景采集、质量平衡和数据质量 |
