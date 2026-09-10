---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.apparatus-based-on-the-use-of-x-rays-or-of-alpha-beta-or-gamma-radiations
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 基于 X 射线或 α、β、γ 辐射的装置

## 1. 范围与适用性

本 PCR 适用于为完整装置构建前景数据包，这些装置利用 X 射线或 α、β、γ 辐射进行产生、容纳、控制、探测或成像。范围包括医学影像、工业无损检测（NDT）和安全检查设备。每个数据包必须同时标识辐射类型（`x_ray`、`alpha`、`beta`、`gamma` 或 `multi`）和用途（`medical`、`industrial_ndt` 或 `security_inspection`）。

本类别具有显著异质性。完整装置可以是固定式、移动式、柜式、机架式或源曝光设备，但不得用单一机型或单一用途代表整个类别。结果由前景产品配置、生产场址、参考年、工作负载和交付边界共同决定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.apparatus-based-on-the-use-of-x-rays-or-of-alpha-beta-or-gamma-radiations |
| classification_refs | CPC 3.0：48110 — 基于 X 射线或 α、β、γ 辐射的装置（exact） |
| covered_products | 用于医学影像、工业 NDT 或安全检查并以可运行设备交付的完整且经测试的 X 射线或 α、β、γ 辐射装置，包括固定式、移动式、柜式、机架式和源曝光配置。 |
| excluded_products | 交付设备之外的建筑、检查室、掩体、场址屏蔽、暖通空调和完整设施；放射性药物、造影剂、胶片、试件和替换用放射源耗材；独立辐射探测器或测量仪器；部件和分组件套件；影像、检测或辐照服务；非电离毫米波设备。 |
| representative_product | 按辐射类型和用途选定并声明的完整设备配置。任何单一医学扫描仪、工业射线照相设备、安检设备、部件或设施均不得作为全类别代理。 |
| production_route | 主要部件供应；外壳、框架、机架和屏蔽的制造或采购；辐射发生器或源容器、探测器、高压电源、控制和冷却系统集成；总装；校准与安全验收；包装；仅在声明的交付边界纳入时包括交付或安装。 |
| market_state | 声明交付边界处已完工并通过安全测试的装置。默认边界为制造商工厂门；已交付并安装的设备须作为单独声明的边界。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明辐射与用途配置下，基于 X 射线或 α、β、γ 辐射的完整装置。 |
| How much | 1,000 kg 完工装置。 |
| How well | 设备配置声明辐射源或发生器、探测器、高压电源、整体屏蔽、框架或机架、冷却系统、控制系统、工作负载情景和交付边界，并通过制造商适用的校准和安全验收。 |
| How long or cycle | 一个已完成生产批次，归一化至参考数量。若纳入使用、维护或生命周期末期，还须适用声明的使用寿命和工作负载情景。 |
| reference_flow_link | CPC 48110 装置在厂生产组合，UUID `f2980f85-95d2-48e8-9b72-8c0f38650d2f`，版本 01.01.000，已核验 state_code 100。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 基于利用X射线或利用α、β或γ射线装置 `f2980f85-95d2-48e8-9b72-8c0f38650d2f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | `radiation_basis`; `application`; `equipment_configuration`; `fixed_or_mobile`; `generator_or_sealed_source`; `detector_technology`; `high_voltage_power_supply`; `shielding_scope`; `frame_or_gantry_scope`; `cooling_system`; `workload_scenario`; `delivery_boundary`; `geography`; `reference_year` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 完工参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在声明的交付边界测量完工装置质量。纳入一体化流体、一体化屏蔽、已安装电子系统和任何一体化密封源组件；包装单独记录。所有生产数量归一化至 1,000 kg。 |
| `component_mass_balance` | 采购和制造的部件 | Mass | kg | 使用产品特定的物料清单和生产记录。分别报告辐射发生器或一体化源组件、探测器及信号链、高压电源、屏蔽及外壳、框架或机架、冷却系统以及控制与布线。 |
| `radioactive_source_descriptor` | 一体化或运行用放射源 | 活度及核素身份 | Bq | 声明核素、活度参考日期、放射源交付时是否为设备一体化部分，以及是否纳入更换。活度是配置描述信息，不得替代质量参考流。 |
| `workload_energy` | 纳入使用阶段时的电力 | Energy | kWh | 依据实测或制造商记录的各运行模式功率与持续时间计算用电量。按适用情况声明检查、扫描、曝光、运行小时、待机、冷却和关机假设；不得套用其他装置机型的工作负载。 |
| `delivery_transport` | 纳入时的出厂运输 | Transport service | tkm | 各运输段按包含包装的发运质量乘以路线距离计算。安装材料和能源与运输分开记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 主要采购部件和原材料进入装置制造边界，并将供应商数据集连接至上游。 |
| starting_condition_role | 在保留可见部件和材料投入的同时，防止对同类装置进行递归再制造。 |
| product_classification_scope | 完整 CPC 48110 装置；不是完整医学、工业或安检设施，也不是独立 CPC 48241 探测器或测量仪器。 |
| recursive_input_rule | 若完整同类装置作为投入消耗，则将其保留为采购产品流并连接经核验的上游数据集；不得再次展开本前景生产路线。 |
| upstream_dataset_requirement | 有供应商特定数据集时优先使用；否则使用地域、技术和时间上有代表性的数据集并披露替代。 |
| disclosure | 声明辐射类型、用途、设备配置、所有必需部件范围、工作负载情景、交付边界、地域、参考年、排除项和替代项。 |

以下边界规则为规范性要求：

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | 从摇篮到工厂门的生产 | 纳入主要部件供应、装置总装与集成、校准与安全验收以及包装和发运。 | `iaea-industrial-radiography`; `iaea-nuclear-medicine`; `epa-security-scanning` |
| `boundary_delivery` | 交付与安装 | 工厂门边界排除出厂交付和安装；仅当声明的交付边界延伸至客户场址时纳入并单独报告。 | `malta-healthcare-eee` |
| `boundary_source_consumables` | 放射性和成像耗材 | 放射性药物、替换密封源、造影剂、胶片和试件保持在参考产品之外。仅当声明阶段需要时，作为单独识别的运行或测试投入纳入；不得用其质量作为装置参考流。 | `iaea-industrial-radiography`; `iaea-nuclear-medicine` |
| `boundary_use_scenario` | 使用与维护 | 仅在声明使用寿命和工作负载情景后纳入使用与维护，并包括分模式电力、冷却、耗材、更换和维护记录。 | `malta-healthcare-eee`; `thiel-radiology-lca` |
| `boundary_facility_exclusion` | 建筑和场址基础设施 | 排除完整设施、房间屏蔽、掩体、建筑暖通空调及无关医院、工厂或机场运营。只纳入作为设备组成部分实际交付的屏蔽、外壳、冷却、框架、机架和控制系统。 | `iaea-industrial-radiography`; `epa-security-scanning` |
| `boundary_end_of_life` | 退役和生命周期末期 | 仅在声明下游阶段时纳入退役和生命周期末期；将受监管放射源管理与设备拆解及司法辖区特定的电气设备处理分开。 | `eu-weee` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_supply` | 主要部件和材料供应 | required | 始终 | 记录进入总装的产品特定辐射子系统、探测器、电源、屏蔽、机械、冷却和控制配置。 | 每 1,000 kg 完工装置的质量归一化采购和制造投入。 |
| `apparatus_assembly` | 装置总装与集成 | required | 始终 | 集成电气、辐射、屏蔽、机械、冷却和控制子系统。 | 集成装置输出质量。 |
| `calibration_acceptance` | 校准与安全验收 | required | 始终 | 发布前测试功能、影像或检测性能、联锁和适用的辐射安全特性。 | 经测试装置输出质量和测试记录。 |
| `packaging_dispatch` | 包装与发运 | required | 始终 | 在声明的工厂门边界包装并放行参考产品。 | 1,000 kg 完工装置。 |
| `outbound_delivery_installation` | 出厂交付与安装 | conditional | `delivery_boundary` 延伸至制造商工厂门之外时纳入。 | 对路线特定运输、现场装配、调试和安装材料建模，不加入完整设施。 | 已交付装置和运输服务。 |
| `use_maintenance` | 使用与维护 | conditional | 研究覆盖运行或交付后生命周期阶段时纳入。 | 对声明的工作负载、运行模式、冷却、耗材、放射源更换和维护建模。 | 声明的使用寿命和工作负载情景。 |
| `decommissioning_eol` | 退役与生命周期末期 | conditional | 研究覆盖退役或生命周期末期时纳入。 | 将设备拆解和材料处理与许可管理的放射源处置分开。 | 送往各处理路线的装置质量。 |

### 过程：主要部件和材料供应（`component_supply`）

#### 输入

##### 产品流

###### 辐射发生器或一体化源组件（`radiation_subsystem`）

记录进入总装的产品特定 X 射线管和发生器，或一体化密封源容器和曝光机构。区分发生器设备与放射源耗材；若交付一体化源，则记录核素及带日期的活度。

- 选定流：制造商特定的辐射发生器或一体化源组件；构建数据集时选择经核验的上游部件数据集。
- 流属性/单位：Mass / kg；适用时另将核素和活度 / Bq 作为描述信息
- 数量规则：根据物料清单记录净接收和消耗量，并针对库存变化和有记录的不合格品调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`iaea-industrial-radiography`; `iaea-nuclear-medicine`

###### 探测器和信号链（`detector_signal_chain`）

记录交付范围内的探测头、阵列、闪烁体或传感器、信号电子系统、影像或检测处理硬件以及设备专用工作站。

- 选定流：制造商特定的探测器和信号链部件；构建数据集时选择经核验的上游部件数据集。
- 流属性/单位：Mass / kg
- 数量规则：产品特定物料清单中的净接收和消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`fda-medical-xray`; `iaea-nuclear-medicine`

###### 高压电源和电力电子系统（`high_voltage_supply`）

记录高压发生器、变压器、电力电子器件、配电单元和设备专用电源调节硬件。

- 选定流：制造商特定的高压和电力电子部件；构建数据集时选择经核验的上游部件数据集。
- 流属性/单位：Mass / kg
- 数量规则：产品特定物料清单中的净接收和消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`iaea-industrial-radiography`

###### 一体化屏蔽和外壳（`shielding_enclosure`）

记录与装置实际交付的铅或其他屏蔽、准直器、柜体、防护帘、联锁外壳和壳体。排除房间和掩体屏蔽。

- 选定流：产品特定屏蔽材料和外壳部件；构建数据集时选择经核验的上游材料和部件数据集。
- 流属性/单位：Mass / kg
- 数量规则：物料清单和制造记录中的材料及部件净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`iaea-industrial-radiography`; `epa-security-scanning`

###### 框架、机架、柜体和运动系统（`frame_gantry`）

记录交付的机械框架、机架或柜体、患者或物体处理系统、执行器、轴承和结构支撑。

- 选定流：产品特定的框架、机架、柜体和运动部件；构建数据集时选择经核验的上游数据集。
- 流属性/单位：Mass / kg
- 数量规则：物料清单和制造记录中的净接收和消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`iaea-nuclear-medicine`

###### 一体化冷却系统（`cooling_system`）

记录作为装置组成部分实际交付的冷水机、泵、换热器、风扇、冷却剂回路和初始冷却剂充注量；排除建筑暖通空调。

- 选定流：产品特定冷却设备、部件和初始冷却剂；构建数据集时选择经核验的上游数据集。
- 流属性/单位：Mass / kg
- 数量规则：物料清单和初次加注记录中的净接收和消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`iaea-industrial-radiography`

###### 控制、联锁、布线和设备 IT（`controls_cabling`）

记录交付配置内的控制面板、安全联锁、嵌入式计算机、设备专用工作站、布线和通信硬件。

- 选定流：产品特定的控制、联锁、布线和设备 IT；构建数据集时选择经核验的上游数据集。
- 流属性/单位：Mass / kg
- 数量规则：产品特定物料清单中的净接收和消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`iaea-industrial-radiography`; `iaea-nuclear-medicine`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格主要部件和材料（`qualified_components`）

使用同一批次质量台账将所有已验收投入转移至总装。

- 选定流：用于装置总装的合格主要部件和材料
- 流属性/单位：Mass / kg
- 数量规则：转入总装的已验收部件和材料质量之和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：

##### 废物流

##### 基本流

### 过程：装置总装与集成（`apparatus_assembly`）

#### 输入

##### 产品流

###### 合格部件和材料（`assembly_components`）

记录进入总装的已验收部件和材料质量，并保留声明的子系统拆分。

- 选定流：用于装置总装的合格主要部件和材料
- 流属性/单位：Mass / kg
- 数量规则：来自 `component_supply` 的转移数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 总装公用工程和耗材（`assembly_utilities`）

记录分配至生产批次的计量电力以及实测焊接、钎焊、连接、清洗、涂覆、气体和其他耗材。

- 选定流：场址特定的总装电力和耗材；构建数据集时选择经核验的上游数据集。
- 流属性/单位：Energy / kWh 和 Mass / kg，作为独立清单交换报告
- 数量规则：计量或分配的场址记录，扣除有记录的非生产负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 集成装置输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待验收集成装置（`integrated_apparatus`）

记录转入校准和验收的集成装置质量。

- 选定流：待校准和安全验收的集成装置
- 流属性/单位：Mass / kg
- 数量规则：已验收投入质量加上并入的耗材，再减去单独记录的废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 集成装置输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 废物流

###### 总装不合格品和废料（`assembly_waste`）

按实测处理路线记录金属、电子、屏蔽、线缆、冷却剂和混合材料不合格品。

- 选定流：按材料和处理路线拆分的场址特定总装废物
- 流属性/单位：Mass / kg
- 数量规则：经称量或库存核对后离开总装过程的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 集成装置输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 基本流

### 过程：校准与安全验收（`calibration_acceptance`）

#### 输入

##### 产品流

###### 集成装置（`acceptance_apparatus`）

记录进入功能、影像或检测性能、联锁和辐射安全验收的集成装置。

- 选定流：待校准和安全验收的集成装置
- 流属性/单位：Mass / kg
- 数量规则：来自 `apparatus_assembly` 的批次转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格装置输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_records`
- 来源：`epa-security-scanning`; `iaea-nuclear-medicine`

###### 验收电力、冷却和测试耗材（`acceptance_inputs`）

记录计量测试电力、冷却、校准物、胶片、试件以及验收使用的任何临时放射源或放射性药物；各项作为独立投入，不作为参考产品组成部分。

- 选定流：场址和配置特定的验收公用工程及耗材；构建数据集时选择经核验的上游数据集。
- 流属性/单位：Energy / kWh、Volume / m3、Mass / kg 和 Activity / Bq，按适用情况分别报告
- 数量规则：批次内合格和不合格单元的计量公用工程及领用减退回耗材
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格装置输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_records`
- 来源：`iaea-industrial-radiography`; `epa-security-scanning`; `iaea-nuclear-medicine`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格装置（`accepted_apparatus`）

仅记录通过适用于相应配置的校准和安全验收的装置。

- 选定流：可供包装的验收合格装置
- 流属性/单位：Mass / kg
- 数量规则：由质量体系放行的验收合格装置实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格装置输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_records`
- 来源：

##### 废物流

###### 验收不合格品和已消耗测试材料（`acceptance_waste`）

按处理路线记录不合格部件、已消耗试件、胶片、冷却剂和其他废物。放射性材料保持单独识别，并进入适用的许可管理路线。

- 选定流：按材料和处理路线拆分的验收废物
- 流属性/单位：Mass / kg 和适用时的 Activity / Bq，分别报告
- 数量规则：生产批次的实测废物和不合格品记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 验收合格装置输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_records`
- 来源：

##### 基本流

### 过程：包装与发运（`packaging_dispatch`）

#### 输入

##### 产品流

###### 验收合格装置（`dispatch_apparatus`）

记录进入包装的验收合格装置，不得用包装后的总质量代替产品质量。

- 选定流：可供包装的验收合格装置
- 流属性/单位：Mass / kg
- 数量规则：来自 `calibration_acceptance` 的批次转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_dispatch`
- 来源：

###### 包装材料（`packaging_materials`）

按材料分别记录包装箱、托盘、缓冲物、薄膜、干燥剂、冲击或倾斜指示器以及可重复使用运输工装。

- 选定流：产品特定包装材料；构建数据集时选择经核验的上游数据集。
- 流属性/单位：Mass / kg
- 数量规则：发运批次包装材料领用量减退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_dispatch`
- 来源：`thiel-radiology-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明工厂门处的参考产品（`reference_apparatus`）

这是精确的 TianGong 参考产品流。报告装置净质量；包装作为独立清单投入和发运质量描述信息保留。

- 选定流：基于利用X射线或利用α、β或γ射线装置 `f2980f85-95d2-48e8-9b72-8c0f38650d2f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考数量 1,000 kg 完工装置
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 包装和发运废物（`packaging_waste`）

按实测材料和处理路线记录包装边角料、损坏包装和发运不合格品。

- 选定流：按材料和处理路线拆分的包装和发运废物
- 流属性/单位：Mass / kg
- 数量规则：发运批次经称量或库存核对的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 完工装置
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_dispatch`
- 来源：

##### 基本流

## 7. 分配与共产品处理

以下分配规则为规范性要求：

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 可分离的产品、批次和阶段 | 在可行时通过过程细分、产品特定物料清单、批次记录、分表计量和直接测试记录避免分配。 | `thiel-radiology-lca` |
| `allocation_shared_operations` | 共用总装、公用工程、测试和场址服务 | 首先按实测因果驱动因素分配共用负荷，例如机器时间、计量能源、测试时长或处理质量。若无因果驱动因素，则采用质量分配，说明理由，并用另一种合理驱动因素进行敏感性检验。 |  |
| `allocation_rework_rejects` | 返工、不合格品和收率损失 | 可追溯时，将返工能源、消耗部件、测试负荷和废物归入导致这些负荷的批次；否则使用与共用操作相同的已记录驱动因素分配。 |  |
| `allocation_recycling` | 再循环、回收和处置 | 声明所选再循环和生命周期末期约定，将投入端再生含量与输出端回收信用分开，并防止前景与上游数据集间重复计算。 | `eu-weee` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_supply` | 辐射子系统、探测器、高压电源、屏蔽、框架或机架、冷却、控制、验收部件 | 物料清单、采购、制造、库存和放射源证书记录 | part id; material; subsystem; quantity; net mass; supplier; reject; radionuclide; activity; activity date | 将产品特定工程 BOM 与采购、制造、库存移动和供应商证书核对；标记未称量或估算质量。 | kg；独立活度描述信息使用 Bq | 每个产品配置和生产批次 | 完整批次；披露参考期 | 供应声明配置的所有制造场址 | 按子系统汇总验收净数量；扣除退回；不合格品和活度描述信息分开。 | 经批准 BOM；质量或秤记录；供应商声明；放射源证书；核对签核 |
| `cp_assembly_records` | `apparatus_assembly` | 部件、公用工程、耗材、集成装置、废料 | 批次流转卡、仪表、领退料、生产和废物记录 | batch id; input mass; output mass; electricity; consumable; reject mass; waste route; operating time | 可用时使用专用仪表和批次领退料记录；否则依据声明的规则和驱动因素分配共用记录。 | kg；kWh；其他记录单位经换算并披露 | 每批次；无批次仪表时公用工程至少每月记录 | 覆盖该批次的代表性生产期 | 声明的总装场址 | 将核对后的批次总量归一化至 1,000 kg 集成输出；保留独立流行。 | 仪表记录；批次流转卡；材料台账；经校准秤；废物联单；分配工作表 |
| `cp_acceptance_records` | `calibration_acceptance` | 装置、测试公用工程、测试耗材、验收输出、不合格品 | 验收规程、仪表、领退料、校准、辐射安全和不合格品记录 | serial or batch id; test type; pass or fail; operating mode; duration; electricity; cooling; consumable; radionuclide; activity; waste | 将配置特定验收和校准记录与计量公用工程及测试耗材领用相连接，包括不合格测试和复测。 | kg；kWh；m3；适用时 Bq | 每个验收单元或生产批次 | 完整测试和复测序列 | 声明的验收场址 | 汇总批次验收和不合格测试负荷，并按验收合格装置质量归一化。 | 已签署验收记录；校准证书；安全测试；仪表日志；领退料记录；废物联单 |
| `cp_packaging_dispatch` | `packaging_dispatch` | 验收装置、包装、参考产品、发运废物 | 装箱单、秤、包装领退料和发运记录 | product net mass; packaging material; packaging mass; gross shipped mass; reusable fixture; waste mass; dispatch date | 将最终产品净质量与包装和发运记录核对，并将包装保留为独立材料投入。 | kg | 每次发运和批次 | 完整发运批次 | 声明的发运场址 | 将产品净质量与包装分开汇总，并归一化至 1,000 kg 参考产品。 | 经校准秤记录；装箱单；材料领退；发运记录；废物联单 |
| `cp_delivery_installation` | `outbound_delivery_installation` | 运输和安装 | 提单、路线、安装人员和调试记录 | shipped mass; origin; destination; mode; distance; load factor; installation materials; energy; commissioning tests | 交付在范围内时采集实际运输段和安装记录；除非作为设备供应，否则建筑工程和房间屏蔽保持在范围外。 | kg；km；tkm；kWh | 每次发运和安装 | 完整交付和调试期 | 声明的路线和客户场址 | 分别计算每个运输段；汇总安装投入但不并入装置质量。 | 承运人记录；路线证据；安装日志；调试验收 |
| `cp_workload_use` | `use_maintenance` | 工作负载、分模式电力、冷却、耗材、更换、维护 | 设备仪表、功率记录仪、服务日志、采购和工作负载记录 | radiation basis; application; examination or exposure count; mode; power; duration; standby; shutdown; cooling; consumable; part or source replacement; service life | 测量代表性运行模式，或使用经制造商验证的日志并连接至声明工作负载；不得转移其他机型的工作负载。 | kWh；h；count；kg；m3；适用时 Bq | 连续日志或代表性活动期；每次维护事件 | 声明的使用寿命或报告期 | 声明的使用场址和配置 | 针对声明工作负载和使用寿命计算分模式总量；更换和耗材单独报告。 | 仪表或经验证日志；工作负载摘录；服务记录；采购记录；放射源证书 |
| `cp_eol_records` | `decommissioning_eol` | 拆解、放射源路线和材料处理 | 退役计划、废物联单、回收商和放射源返还记录 | apparatus mass; component; radionuclide; activity; treatment route; recovery; disposal; transport | 将退役装置质量与拆解输出及适用司法辖区下许可管理的放射源返还或处置记录核对。 | kg；Bq；适用时 tkm | 每次退役事件 | 完整退役和处理链 | 声明的使用场址和处理路线 | 按处理路线汇总质量；放射源管理分开，并报告未核对质量。 | 退役证书；许可联单；回收商收据；质量平衡；运输记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | 所有生产清单 | 归一化数量 = 采集的批次数量 / 验收合格装置净质量 × 1,000 kg。 | 采集的批次数量；验收合格装置净质量 | 每 1,000 kg 完工装置的数量 |  |
| `calc_component_reconciliation` | 部件供应和总装 | 验收部件 + 并入耗材 = 集成装置 + 单独记录的不合格品和损失，差异处于声明的测量不确定度内。 | 部件质量；并入耗材；输出质量；废物和不合格品质量 | 经核对的子系统和过程质量平衡 |  |
| `calc_delivery_tkm` | 出厂交付 | 各运输段运输服务 = 发运总质量（t）× 实际运输段距离（km）。 | 产品净质量；包装质量；运输工装质量；距离 | 按模式和运输段拆分的 tkm |  |
| `calc_workload_energy` | 使用与维护 | 情景电力 = 对声明工作负载下各运行模式的实测或经验证模式功率 × 模式持续时间求和；单独测量的冷却和待机负荷只能加入一次。 | 分模式功率；分模式时长；工作负载；冷却和待机记录 | 每个声明工作负载和使用寿命的 kWh | `malta-healthcare-eee`; `thiel-radiology-lca` |
| `calc_replacement_inventory` | 维护和放射源更换 | 生命周期更换量 = 每次更换的记录数量 × 声明的更换次数；每个部件、冷却剂和放射源保留为独立交换。 | 更换事件记录；数量；使用寿命；更换次数 | 每个声明使用寿命的更换清单 |  |
| `calc_eol_balance` | 退役和生命周期末期 | 退役装置投入质量 = 回收材料 + 再利用输出 + 处理废物 + 处置 + 明确未核对质量，差异处于声明不确定度内。 | 退役质量；路线特定输出 | 生命周期末期质量平衡 | `eu-weee` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 产品身份 | 记录必须解析至一个声明的辐射类型、用途、完整设备配置、地域和参考年；混合产品组合须拆分或透明加权。 | 产品规格；序列号或配置清单；生产组合计算 |
| `dq_primary_data` | 必需生产阶段 | 使用产品和场址特定的 BOM、批次、仪表、校准、包装和废物记录。记录所有分配和二手数据集替代。 | 协议 `cp_component_bom` 至 `cp_packaging_dispatch`；分配工作表；数据集映射日志 |
| `dq_workload` | 条件性使用阶段 | 工作负载和模式数据必须匹配声明的装置配置及使用场址或情景；单一已发表扫描仪或设施结果不是类别默认证据。 | 协议 `cp_workload_use`；仪表记录；工作负载摘录；情景声明 |
| `dq_source_chain` | 所有外部和上游数据 | 记录来源 id、版本或发布日期、检索日期、地域、技术和所支持的决定。 | 来源登记表；上游数据集元数据；检索日志 |
| `dq_uncertainty` | 采集和分配值 | 报告测量不确定度、缺失记录、估算、时间覆盖以及对重要分配或工作负载假设的敏感性。 | 校准状态；数据缺口登记表；敏感性结果 |

## 9. 校验规则

以下校验规则为规范性要求：

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 类别和参考流 | 确认 CPC 3.0 代码 48110 和精确 TianGong 产品流 UUID `f2980f85-95d2-48e8-9b72-8c0f38650d2f`；拒绝将独立探测器、分组件套件、服务、完整设施、非电离扫描设备或窄单一机型作为本类别。 |  |
| `validate_variant_axes` | 必需限定信息 | 要求同时提供 `radiation_basis` 和 `application`，并提供设备配置、固定或移动状态、发生器或密封源状态、探测器技术、地域和参考年。 | `fda-medical-xray`; `iaea-industrial-radiography`; `iaea-nuclear-medicine`; `epa-security-scanning` |
| `validate_reference_uuid` | 定量参考 | 要求 Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、参考单位 kg 和恰好 1,000 kg 参考产品输出。 |  |
| `validate_component_completeness` | 部件声明 | 要求分别声明辐射发生器或源组件、探测器和信号链、高压电源、一体化屏蔽、框架或机架、冷却和控制系统；仅在提供配置特定说明时允许 `not_applicable`。 | `iaea-industrial-radiography`; `iaea-nuclear-medicine`; `epa-security-scanning` |
| `validate_mass_balance` | 生产清单 | 将部件、总装、验收和包装记录与参考产品净质量核对，包装和废物单独保留，并在声明不确定度内解释差异。 |  |
| `validate_workload` | 纳入时的使用与维护 | 要求配置特定的工作负载和模式计划、使用寿命、功率或用电证据、冷却、耗材、更换和维护假设；拒绝未声明的单机型或单设施代理。 | `malta-healthcare-eee`; `thiel-radiology-lca` |
| `validate_delivery_boundary` | 交付与安装 | 要求提供 `delivery_boundary`；若超出工厂门，则要求发运质量、路线、模式、距离、安装投入和调试记录，同时排除无关场址施工。 | `malta-healthcare-eee` |
| `validate_source_consumables` | 放射性和测试耗材 | 将放射性药物、替换源、造影剂、胶片和试件与装置质量分开；存在放射性材料时，要求核素、带日期的活度和许可管理路线。 | `iaea-industrial-radiography`; `iaea-nuclear-medicine` |
| `validate_facility_exclusion` | 设施边界 | 确认房间或掩体屏蔽、建筑暖通空调及无关医院、工厂或机场活动未被用作交付设备的代理。 | `iaea-industrial-radiography`; `epa-security-scanning` |
| `validate_source_traceability` | 证据和上游数据 | 外部规则须提供稳定来源 id 和检索日期；上游数据集须提供版本化身份、地域、技术和时间元数据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 用于制造完整 CPC 48110 装置的产品和场址特定前景数据包，并可按条件扩展交付、使用、维护和生命周期末期。 |
| downstream_use | 发布为 TianGong 前景 `process`，并为声明的装置配置和情景构建 `lifecyclemodel`。 |
| allowed_use | 当辐射类型、用途、配置、工作负载、地域、参考年、交付边界、系统边界和数据质量与研究相符时，用于比较性或归因性建模。 |
| excluded_use | 表示完整医学、工业或安检设施；将放射性药物或替换源表示为装置；表示独立探测器、部件、服务或非电离扫描设备；在没有披露生产组合的情况下将一个机型或使用场址外推至整个类别。 |
| required_metadata | PCR id；CPC 参考；TianGong 参考 UUID；辐射类型；用途；设备配置；发生器或密封源状态；探测器；高压电源；屏蔽；框架或机架；冷却；工作负载；交付边界；适用时的使用寿命；地域；参考年；生产场址；来源登记表。 |
| required_quality_disclosure | 一手数据比例；BOM 和质量平衡覆盖；仪表和校准覆盖；分配驱动因素；二手数据集替代；工作负载推导；缺失值；不确定度；估算；排除项；敏感性结果。 |
| update_trigger | 辐射或探测器技术、装置配置、屏蔽或冷却设计、生产路线或场址、能源与工作负载特征、交付边界、放射源管理实践、适用生命周期末期法律或任何参考 UUID 或来源证据发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-48110` | official_guidance | 联合国统计司，CPC 48110 详情，“Apparatus based on the use of X-rays or of alpha, beta or gamma radiations”。https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/48110（检索于 2026-08-09）。 | 官方类别标题和装置级身份语境；声明版本仍以仓库 CPC 3.0 来源为准。 |
| `fda-medical-xray` | official_guidance | 美国食品药品监督管理局，“Medical X-ray Imaging”。https://www.fda.gov/radiation-emitting-products/medical-imaging/medical-x-ray-imaging（检索于 2026-08-09）。 | 医学 X 射线模态分型及发生器至探测器的成像链。 |
| `iaea-industrial-radiography` | official_guidance | 国际原子能机构，*Radiation Safety in Industrial Radiography*，IAEA Safety Standards Series No. SSG-11，2011。https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1466_web.pdf（检索于 2026-08-09）。 | 工业 X 射线和 γ 射线照相配置；发生器、源容器、屏蔽、控制、线缆、准直、冷却和许可放射源管理边界。 |
| `iaea-nuclear-medicine` | handbook | 国际原子能机构，*Nuclear Medicine Resources Manual, 2020 Edition*，IAEA Human Health Series No. 37，2020。https://www-pub.iaea.org/MTCD/Publications/PDF/P1861_web.pdf（检索于 2026-08-09）。 | γ 相机和核医学影像设备部件、探测头、电子系统、工作站、机架、患者处理系统，以及放射性药物与设备的分离。 |
| `epa-security-scanning` | official_guidance | 美国环境保护署，“Radiation and Airport Security Scanning”。https://www.epa.gov/radtown/radiation-and-airport-security-scanning（检索于 2026-08-09）。 | 柜式 X 射线安检用途、一体化屏蔽和联锁，以及测试、校准和维护要求。 |
| `malta-healthcare-eee` | official_guidance | 马耳他政府，*Electric & Electronic Equipment Used in Health Care*，Green Public Procurement National Action Plan。https://gpp.gov.mt/wp-content/uploads/2023/05/Electric-and-Electronic-Equipment.pdf（检索于 2026-08-09）。 | 配置特定安装、运行模式、工作负载、能源、耗材、维护、备件和生命周期末期信息要求。不采用文件中的任何默认数值。 |
| `thiel-radiology-lca` | literature | Thiel 等，“Environmental Life Cycle Assessment of a U.S. Hospital-based Radiology Practice”，*Radiology* 313(2)，2024，e240398。https://doi.org/10.1148/radiol.240398（检索于 2026-08-09）。 | 前景 BOM、包装、交付、分模式电力和工作负载数据采集；其单一机构和设备结果不作为类别默认值。 |
| `eu-weee` | standard | 欧洲议会和理事会，关于废弃电气电子设备（WEEE）的 Directive 2012/19/EU，合并文本。https://eur-lex.europa.eu/eli/dir/2012/19/2018-07-04（检索于 2026-08-09）。 | 司法辖区特定的电气设备收集和处理边界；仅在设备和废物流属于适用法律范围时采用。 |
