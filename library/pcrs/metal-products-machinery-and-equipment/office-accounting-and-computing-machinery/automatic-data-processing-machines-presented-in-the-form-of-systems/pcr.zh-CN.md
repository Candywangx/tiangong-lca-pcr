---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.automatic-data-processing-machines-presented-in-the-form-of-systems
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 以系统形式呈现的自动数据处理机器

## 1. 范围与适用性

本 PCR 适用于作为一个完整工厂门交付物进行配置、集成、测试和放行的自动数据处理（ADP）系统。纳入范围的系统可以组合计算节点、存储、网络与控制单元、输入/输出单元、机箱或机架、电源转换或配电、集成热管理硬件、线缆，以及在同一配置和交付边界下供应的其他硬件。

本 PCR 必须按配置建模。不允许用单台服务器、台式机、便携式计算机、独立存储单元、显示器、打印机、网卡或其他外围设备代表完整系统。单独销售的硬件不属于参考产品；只有销售配置、物料清单（BOM）和验收记录证明其作为集成系统的一部分交付时，才可纳入。

前景边界包括部件和子组件接收、系统集成与装配、配置或固件加载、工厂验收与老化测试、可归因于合格产品的返工、随交付提供的包装，以及成品系统在制造厂放行。外购硬件和材料的上游生产由产品特定的上游数据集表示。工厂门后的配送、数据中心或客户现场安装、设施建设和共享设施基础设施、运行、维护、翻新及寿命终止阶段不纳入本生产数据集，除非在下游另行建模。机架、配电单元或冷却单元只有在属于合同约定的 ADP 系统交付物时才纳入；通用数据中心基础设施不纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.automatic-data-processing-machines-presented-in-the-form-of-systems |
| classification_refs | CPC 3.0: 45240 — Automatic data processing machines presented in the form of systems |
| covered_products | 在同一配置下交付的完整多单元 ADP 系统，包括企业计算系统、数据中心计算系统、集成计算与存储系统、连同交付机箱的刀片或多节点系统，以及 ADP 单元的其他配置组合。 |
| excluded_products | 单台服务器或计算机；便携式或台式计算机；同一机壳内的单台 ADP 机器；单独销售的存储、输入、输出、显示、打印、网络、控制器、加速器或外围单元；散件；纯软件产品；未纳入合同系统交付范围的数据中心建筑和设施基础设施。 |
| representative_product | 经明确记录且按产量加权的完整企业或数据中心 ADP 系统配置；任何单台服务器或外围设备都不是本类别的代表产品。 |
| production_route | 按配置接收硬件和子组件；系统集成与装配；软件或固件配置；工厂验收或老化测试；返工与废物处理；适用时的交付包装；工厂门放行。 |
| market_state | 在制造厂完成配置和测试的成品 ADP 系统，并声明所含硬件与包装边界。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按实际硬件配置完成配置、集成和验收测试的完整 ADP 系统工厂门交付。 |
| How much | 1 kg 成品系统硬件净质量；单独供应的运输包装不计入产品净质量，并单独列入清单。 |
| How well | 交付硬件集合与受配置控制的 BOM 和工厂验收记录完全一致，并披露所有纳入的计算、存储、网络/控制、I/O、机箱/机架、电源、热管理、线缆和随附外围设备类别。 |
| How long or cycle | 工厂门处一个验收合格的生产批次或配置放行；本质量参考不是使用年或计算服务功能单位。 |
| reference_flow_link | 与验收合格的参考产品输出交换一一对应，并由交付配置的实测净质量归一化至 1 kg。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 以系统形式呈现的自动数据处理机器 `5476c8d0-2b87-4bb4-8024-ec5c7e3213b4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | system configuration ID and BOM revision; product family or model range; number and type of compute, storage, network/control, and I/O units; installed processor/socket, accelerator, memory, and storage configuration; chassis/rack, power-supply/distribution, thermal-management, cabling, and bundled-peripheral inclusion; net hardware mass; packaging inclusion and mass; factory-gate geography; production period; acceptance-test basis |

构建前景数据包时，`必需限定信息` 中的每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少配置、BOM 或交付硬件披露时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将验收合格的系统输出归一化为 1 kg 实测成品系统硬件净质量。包装单独记录，不计入未交付的工厂夹具或通用数据中心基础设施。 |
| `configuration_mass_reconciliation` | 受配置控制的 BOM 与成品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对同一配置和生产批次的 BOM 行质量、并入产品的耗材、合格输出、废品及其他材料损失进行核对。调查并披露无法解释的不平衡，不得通过缩放不完整 BOM 来消除差异。 |
| `count_to_mass_conversion` | 以件数记录的 BOM 行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用配置特定的实测单件质量、供应商质量数据或有记录的工程 BOM 值把件数转换为质量，并保留件数、转换因子及来源记录。 |
| `family_weighting` | 产品族或生产混合数据集 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 从配置级清单与实际生产或出货权重计算产品族结果。保留每个配置 ID 与加权记录；不得以某个低端、典型、高端或单服务器配置替代产品族。 |
| `mass_is_not_service_equivalence` | 结果解释与比较 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | kg 参考仅用于归一化生产清单。系统间比较必须另行定义等效计算或存储功能、容量、性能、利用率情景及寿命。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在集成边界接收实际且受配置控制的硬件、子组件、耗材和包装，每项均具有数量与上游数据集身份；适用时链接技术特定的自制部件上游过程。 |
| starting_condition_role | 系统集成、测试与放行的摇篮到工厂门前景生产起点；外购硬件携带上游生产负荷。 |
| product_classification_scope | 作为单元配置组合交付的完整 ADP 系统。CPC 45240 是映射语境，不是纳入单台机器、独立单元、部件或外围设备的依据。 |
| recursive_input_rule | 如果某项输入已经是同一语义类别的完整 ADP 系统，则仅以其上游系统数据集记录一次，并只建模新增的前景集成或改造。不得对同一系统输入递归展开或重复应用本 PCR。 |
| upstream_dataset_requirement | 每个重要且有区别的 BOM 行或披露的汇总类别均应使用在产品、技术、地域和时间上具有代表性的上游数据集。通用单服务器、台式机或外围设备数据集不得代表完整系统或无关 BOM 类别。 |
| disclosure | 声明配置 ID、BOM 修订版、纳入和排除的交付硬件、产品净质量和包装质量、生产场址和期间、上游数据覆盖、自制与外购部件处理、测试工况、分配依据、截断及排除的下游阶段。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_system_delivery` | 参考产品和前景边界 | 纳入实际交付配置的集成、配置、验收测试、可归属返工、随附包装和工厂门放行。输出是完整系统，而非其中一个单元。 | `unsd-cpc-45240`; `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023` |
| `boundary_no_single_device_proxy` | 类别覆盖 | 拒绝以一台服务器、台式机、存储单元、显示器、打印机、网络单元或其他外围设备作为完整 ADP 系统的参考或清单代理。 | `unsd-cpc-45240`; `energy-star-computer-servers-v4-2023`; `smith-mann-lal-2026` |
| `boundary_component_and_assembly_coverage` | 外购和自制硬件 | 对每个适用硬件类别考虑原料获取、部件生产和装配。外购件使用上游数据集表示，技术特定的自制生产单独建模。 | `itu-t-l1410-2024`; `eu-2019-424-consolidated` |
| `boundary_included_hardware_test` | 机架、电源、冷却、I/O 和外围设备 | 只有受配置控制的 BOM 和交付合同将硬件置于成品系统内部时才纳入。排除通用客户现场或数据中心基础设施以及单独销售的外围设备。 | `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated` |
| `boundary_downstream_stages` | 配送、安装、使用、维护、翻新与寿命终止 | 从本生产数据集中排除工厂门后的阶段，并使用系统特定的服务、寿命、利用率、能源、维护及寿命终止情景作为独立下游过程加入。 | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `boundary_cutoff_disclosure` | 所有前景和上游流 | 在可行情况下避免截断。任何排除的过程或流均应按质量、能源和环境显著性加以识别与论证，并检验累积效应和配置依赖效应。 | `itu-t-l1410-2024`; `ec-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `system_integration_test_and_factory_release` | 系统集成、配置、测试与工厂门放行 | required | 对纳入范围的成品系统始终必需。包装、冷却介质和直接排放在适用于所声明交付与测试路线时记录。 | 前景生产与交付边界过程 | 工厂门处 1 kg 验收合格的成品系统硬件净质量 |

### 过程：系统集成、配置、测试与工厂门放行（`system_integration_test_and_factory_release`）

#### 输入

##### 产品流

###### 交付配置中的计算硬件（`compute_hardware_input`）

记录交付配置中包含的每个计算节点、处理器板、刀片、含加速器单元、大型机单元或其他计算组件。保留 BOM 行身份，不得把系统折叠成单服务器代理。

- 选定流：Configuration-specific compute hardware product flow(s); select an exact Tiangong UUID for each materially distinct BOM line or disclosed homogeneous aggregation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每个纳入的计算硬件 BOM 行的实测或供应商记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_bom`
- 来源：`itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`

###### 内存与存储硬件（`memory_storage_hardware_input`）

记录配置内安装的内存模块、存储设备、存储机箱、控制器及其他存储组件；当技术或上游数据集不同时应分开记录。

- 选定流：Configuration-specific memory and storage product flow(s); select exact Tiangong UUIDs during data-package construction
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：BOM 行数量乘以实测或供应商记录的单件质量，并与安装配置核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_configuration_bom`
- 来源：`itu-t-l1410-2024`; `eu-2019-424-consolidated`; `energy-star-computer-servers-v4-2023`

###### 网络、控制和输入/输出硬件（`network_control_io_hardware_input`）

仅在交换机、网络接口、控制单元、I/O 单元、互连模块、线缆和随附用户 I/O 硬件属于合同系统交付物时记录。

- 选定流：Configuration-specific network, control, I/O, and interconnect product flow(s); select exact Tiangong UUIDs during data-package construction
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每个纳入硬件类别的受配置控制 BOM 质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_configuration_bom`
- 来源：`itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`

###### 机箱、机架、电源和集成热管理硬件（`chassis_power_thermal_hardware_input`）

记录交付配置内的机箱、机架或框架、外壳、电源、配电硬件、风扇、冷板、换热器、泵或其他热管理硬件。除非作为系统的一部分销售，否则不纳入共享设施电源或冷却设备。

- 选定流：Configuration-specific chassis, rack, power, and integrated thermal-management product flow(s); select exact Tiangong UUIDs during data-package construction
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合同交付边界内硬件的受配置控制 BOM 质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_configuration_bom`
- 来源：`itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated`

###### 装配耗材与并入产品的辅助材料（`assembly_consumables_input`）

记录紧固件、支架、胶黏剂、焊料或连接材料、标签，以及并入系统或由集成消耗并可归因于合格输出的其他耗材。

- 选定流：Material-specific product flow(s); select exact Tiangong UUIDs by material and supply state during data-package construction
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次领料量减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_packaging_and_utilities`
- 来源：`itu-t-l1410-2024`

###### 交付包装（`delivery_packaging_input`）

按材料与重复使用状态记录随成品系统供应的初级、次级和可重复使用包装。包装质量不计入 1 kg 产品净质量参考。

- 选定流：Material-specific packaging product flow(s); select exact Tiangong UUIDs during data-package construction
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每个验收交付配置的包装 BOM 或包装实测领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_packaging_and_utilities`
- 来源：`itu-t-l1410-2024`; `ec-pef-2021-2279`

###### 集成与装配用电（`integration_electricity_input`）

记录机械装配、布线、固件或软件加载、内部物料搬运及其他集成活动的计量电力。在电表或生产控制允许时，与验收测试用电分开记录。

- 选定流：Geography-, voltage-, and supplier-specific electricity product flow; select an exact Tiangong UUID during data-package construction
- 流属性/单位：Energy / kWh
- 数量规则：集成阶段计量电力减去有记录的非生产基线，并按具有因果关系的阶段记录分配至合格输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_stage_energy`
- 来源：`itu-t-l1410-2024`; `ec-pef-2021-2279`

###### 工厂验收和老化测试用电（`acceptance_test_electricity_input`）

记录配置特定的诊断、功能测试、老化测试及复测所消耗的电力。保留测试时长、负载曲线和受测配置。

- 选定流：Geography-, voltage-, and supplier-specific electricity product flow; select an exact Tiangong UUID during data-package construction
- 流属性/单位：Energy / kWh
- 数量规则：合格批次的测试台或系统电表读数，包括可归属复测并排除无关实验室负载
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_energy`
- 来源：`itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`

###### 集成或测试使用的水、冷却液与制冷剂补充量（`test_media_input`）

仅记录前景集成、泄漏测试、热验证或工厂验收所消耗的介质。保留在产品中的硬件充注量同时纳入 BOM 质量平衡。

- 选定流：Medium-specific water, coolant, or refrigerant product flow; select an exact Tiangong UUID during data-package construction
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：所声明配置和生产批次的电表/水表、领料和退料记录；只有在有不适用证明时才可记为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_packaging_and_utilities`
- 来源：`itu-t-l1410-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门处验收合格的完整 ADP 系统（`finished_adp_system_output`）

输出是由 CPC 45240 精确通用产品流表示的完整配置与验收测试系统。包装与产品净质量分开列入清单。

- 选定流：以系统形式呈现的自动数据处理机器 `5476c8d0-2b87-4bb4-8024-ec5c7e3213b4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由验收合格系统实测净质量归一化后的固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_output_and_acceptance`
- 来源：

##### 废物流

###### 不合格电子硬件与装配废料（`electronic_hardware_scrap_output`）

按材料或处理路线记录不合格电路板、模块、驱动器、线缆、金属或塑料硬件，以及破坏性测试件。返工后回到合格产品的物项不是废物。

- 选定流：Treatment-route-specific electronic or material waste flow; select exact Tiangong UUIDs during data-package construction
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归因于生产批次的称重废物转移记录与生产不合格记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_acceptance`
- 来源：`itu-t-l1410-2024`

###### 包装、耗材和测试介质废物（`factory_waste_output`）

按物理状态与处理路线记录来料包装废物、废耗材、废水及废冷却液或制冷剂，不得以回收收入抵减清单数量。

- 选定流：Treatment-route-specific waste flow(s); select exact Tiangong UUIDs during data-package construction
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归因于合格批次的称重废物联单、服务记录或实测排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_acceptance`
- 来源：`itu-t-l1410-2024`; `ec-pef-2021-2279`

##### 基本流

###### 前景直接大气和水体排放（`direct_factory_emissions_output`）

记录由集成、测试、清洗或返工产生的实测或按许可计算的制冷剂释放、挥发性物质、颗粒物及直接水体排放。不得重复计算已嵌入电力、材料或废物处理数据集的排放。

- 选定流：Substance- and compartment-specific elementary flow(s); select exact Tiangong UUIDs during data-package construction
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次的计量、质量平衡或许可计算直接释放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品系统硬件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_acceptance`
- 来源：`itu-t-l1410-2024`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共享集成、测试、返工和包装作业 | 优先为每个配置或同质生产批次设置独立电表、生产订单、测试台日志和物料领用记录，以避免分配。 | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `allocation_causal_shared_resources` | 无法避免的共享工厂投入与排放 | 无法细分时，使用引起负荷的有记录物理驱动因子，例如测试台时间和实测功率、机器时间、处理质量或包装数量。仅在不存在可辩护的物理关系时才允许经济分配，并披露其影响。 | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `allocation_rework_and_rejects` | 返工、复测、不合格品和废料 | 将返工和复测归给引起它们的配置和批次。按实测废物质量与处理路线分配公共废料处理；不得在前景生产数量内计入回收收入抵扣。 | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `allocation_family_configuration_mix` | 产品族或生产混合结果 | 从独立配置清单出发，按声明期间的实际合格产量或出货量加权构建结果。单台服务器或一个代表配置不得承担整个产品族的负荷。 | `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated`; `smith-mann-lal-2026` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_configuration_bom` | `system_integration_test_and_factory_release` | 交付硬件与子组件投入 | 受配置控制的 BOM、供应商规格、收货记录与实测质量 | configuration_id; bom_revision; bom_line_id; component_class; supplier_model; quantity; unit_mass_kg; mass_source; upstream_dataset_uuid; integrated_or_bundled; production_lot | 导出已放行的实际制造 BOM；根据收货与制造记录核实数量；使用校准称重或供应商质量；把每个材料类别映射到上游数据集。 | item and kg | 每个配置修订和生产批次 | 完整声明报告期；保留 BOM 生效日期 | 范围内每个集成场址 | 在配置与批次内按数量 × 单件质量汇总行质量；仅汇总技术和上游数据集相同的同质行。 | 批准 BOM；工程变更记录；供应商规格；秤具校准；收货/制造记录；上游数据集映射 |
| `cp_materials_packaging_and_utilities` | `system_integration_test_and_factory_release` | 耗材、包装、水、冷却液和制冷剂 | 领退料记录、包装 BOM、计量表、采购记录和服务日志 | configuration_id; lot_id; material_id; material_state; issued_quantity; returned_quantity; incorporated_quantity; packaging_level; reusable_cycles; meter_start; meter_end; refill_or_recovery_mass | 核对仓库领退料；称量包装；有条件时读取专用计量表；核对冷却液与制冷剂的领用、回收及保留充注量。 | kg and m3 where the source record uses volume | 每个批次、交付、计量区间或服务事件 | 完整声明报告期 | 范围内每个集成与测试场址 | 净领用量 = 领用量 − 退回量；仅凭实测或有记录的密度和条件把体积转换为质量；按合格系统净质量归一化。 | 仓库台账；包装规格；校准计量表/秤具；采购发票；制冷剂或冷却液服务日志 |
| `cp_stage_energy` | `system_integration_test_and_factory_release` | 集成与验收测试电力 | 计量区间、设备日志、测试台日志和生产计划 | site_id; meter_id; stage_code; start_time; end_time; meter_start_kwh; meter_end_kwh; baseline_kwh; configuration_id; lot_id; test_profile; accepted_output_kg | 有条件时使用专用阶段或设备电表；否则用有记录的因果分配驱动因子把设施分表数据与生产及测试日志核对。 | kWh | 每个生产或测试区间 | 完整声明报告期，包括具有代表性的运行条件 | 范围内每个集成与测试场址 | 净阶段用电 = 结束读数 − 开始读数 − 有记录的非生产基线；按实测设备功率和时间或其他因果物理驱动因子分配。 | 电表校准；带时间戳读数；测试报告；生产计划；基线研究 |
| `cp_output_and_acceptance` | `system_integration_test_and_factory_release` | 合格系统输出、不合格品、废物与直接释放 | 工厂验收记录、校准净质量记录、不合格/返工日志、废物联单与排放或服务记录 | configuration_id; bom_revision; lot_id; accepted_units; net_system_mass_kg; packaging_mass_kg; acceptance_test_id; reject_id; rework_action; waste_type; waste_mass_kg; treatment_route; substance; compartment; released_mass_kg | 分别称量合格硬件净质量与包装；把每台或每批产品链接至验收测试；核对不合格品和返工；按路线和物质采集废物与直接释放记录。 | item and kg | 每个合格批次、不合格品、废物运输与释放事件 | 完整声明报告期 | 范围内每个集成与测试场址 | 按配置汇总合格净质量；包装单列；先把不合格品、返工、废物和释放归给引起它们的批次，再归一化。 | 秤具校准；签署的验收报告；序列号/批次追溯；不合格处置；废物转移单；许可或服务计算 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_configuration_bom_mass` | 配置硬件投入 | 每个 BOM 行的质量 = 数量 × 配置特定单件质量；分别按计算、内存/存储、网络/控制/I/O、机箱/机架/电源/热管理、线缆和随附外围设备类别求和。 | BOM 数量；单件质量；配置与数据集映射 | 每 kg 合格系统净质量对应的各硬件类别 kg | `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated` |
| `calc_stage_energy` | 集成与测试用电 | 净 kWh = 电表结束读数 − 开始读数 − 有记录的基线。仅以实测设备功率 × 时间或其他因果物理驱动因子分配剩余共享用电，再除以合格输出净质量。 | 电表读数；基线；设备功率；阶段时长；合格输出 kg | 每 kg 合格系统净质量的 kWh | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `calc_configuration_mass_balance` | 产品、并入材料、不合格品与废物 | 将配置硬件和并入材料与合格输出、不合格品、废物、直接材料释放及有记录的退库进行核对。记录并调查残差；不得通过改变参考产品强制平衡。 | BOM 质量；耗材；退库；输出质量；不合格品和废物质量；释放 | 质量平衡残差和完整性发现 | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `calc_family_weighted_mix` | 声明的产品族结果 | 产品族清单 = 各配置的配置清单 × 报告期实际合格产量或出货份额之和。报告每个纳入配置或有理据的同质层的份额与清单。 | 配置清单；合格产量或出货件数/质量；报告期 | 具有可追溯分层的产量加权产品族清单 | `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated`; `smith-mann-lal-2026` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration_identity` | 参考产品和所有清单行 | 每条记录都应解析到同一配置 ID、BOM 修订版、生产批次和验收边界；替代料和工程变更单独追踪。 | 已放行 BOM、工程变更记录、序列号/批次追溯和验收报告 |
| `dq_completeness` | 硬件 BOM 与前景作业 | 证明覆盖每个适用交付硬件类别及全部集成、测试、返工、包装、废物和直接排放活动；累积披露并论证截断。 | BOM 覆盖报告、过程图、质量平衡、截断清单和敏感性检验 |
| `dq_technological_representativeness` | 上游数据集与前景记录 | 使处理器/板卡代际、存储技术、内存、机箱/形态、电源和冷却设计、装配路线及测试工况与声明配置匹配；不得使用无关单设备代理。 | 供应商型号/规格、数据集技术说明、配置映射与测试工况 |
| `dq_geographical_temporal_representativeness` | 电力、材料、上游硬件与工厂数据 | 对每个生产场址和供应商路线使用具有地域和期间代表性的数据。记录数据年份、地域以及跨快速变化硬件代际的任何外推。 | 场址和供应商地域、报告日期、电力合同或电网来源、代表性评价 |
| `dq_precision_and_measurement` | 质量、能源、公用工程、废物和直接排放 | 保留校准、抽样、计算和不确定性证据。优先使用实测前景数据；识别模型值或次级数据并检验重要假设。 | 校准证书、电表和秤具日志、计算工作底稿、不确定性记录与来源层级 |
| `dq_upstream_dataset_coverage` | 外购硬件、材料、能源、包装与废物处理 | 将每个重要且有区别的流映射至具有身份和质量元数据的上游数据集。缺失数据保持为显式缺口，不得用完整系统或单服务器代理掩盖。 | 流到数据集映射、数据集 UUID、质量元数据和缺口清单 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow_identity` | 参考输出 | 产品流 UUID 应为 `5476c8d0-2b87-4bb4-8024-ec5c7e3213b4`，即分类至 CPC 45240、state-code-100 的 Product flow，并使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 | `unsd-cpc-45240` |
| `validate_complete_configuration` | 参考产品元数据 | 若缺少配置 ID、BOM 修订版、必需硬件类别披露、硬件净质量、包装边界、工厂门地域、生产期间或验收测试依据，则失败。 | `energy-star-computer-servers-v4-2023`; `eu-2019-424-consolidated` |
| `validate_no_single_device_proxy` | 产品范围与清单 | 若用一台服务器、台式机、存储单元、显示器、打印机、网络单元或外围设备代表整个交付 ADP 系统，或系统族结果缺少配置加权，则失败。 | `unsd-cpc-45240`; `energy-star-computer-servers-v4-2023`; `smith-mann-lal-2026` |
| `validate_bom_and_mass_balance` | 硬件投入与合格输出 | 若交付 BOM 未按硬件类别与合格净输出、不合格品、废物、退库和直接材料释放核对，或以静默缩放消除无法解释的残差，则失败。 | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `validate_upstream_coverage` | 外购投入 | 若重要且有区别的 BOM 类别既没有上游数据集也没有显式缺口，或以无关通用设备数据集替代配置特定硬件，则失败。 | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `validate_stage_energy_and_test_profile` | 集成与验收测试 | 若能源记录无法链接至场址、时间区间、配置、合格输出和测试工况，或共享能源没有有记录的因果分配，则失败。 | `itu-t-l1410-2024`; `energy-star-computer-servers-v4-2023` |
| `validate_boundary_and_cutoffs` | 前景与下游范围 | 若未披露纳入的交付硬件、自制部件过程、包装、下游排除或截断，则失败；对累积或环境显著的排除标记复核。 | `itu-t-l1410-2024`; `ec-pef-2021-2279` |
| `validate_mass_not_functional_comparison` | 结果解释 | 若仅根据 kg 归一化结果提出系统间环境优越性主张，而未另行建立等效服务、容量、性能、利用率和寿命，则失败。 | `itu-t-l1410-2024`; `smith-mann-lal-2026` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造厂处完整 ADP 系统的配置解析前景生产数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 对声明系统配置进行部件解析的摇篮到工厂门建模；在保留配置分层与权重时进行产量加权产品族建模；链接至单独建模的配送、安装、运行、维护、翻新和寿命终止情景。 |
| excluded_use | 作为单服务器、台式机或外围设备的代理；作为未披露产品族的代理；仅按 kg 进行使用阶段或计算服务比较；除非设施硬件明确处于交付系统边界内，否则不得作为数据中心设施模型。 |
| required_metadata | PCR id and version; exact reference flow/property/unit UUIDs; system configuration ID; BOM revision and hardware-class breakdown; product family and weighting basis; processor/accelerator, memory, storage, network/I/O, chassis/rack, power and thermal configuration; bundled peripherals; net and packaging mass; integration/test site and period; acceptance profile; upstream dataset map; allocation and cutoff rules. |
| required_quality_disclosure | BOM and mass-balance completeness; measured versus calculated values; technological, geographical, and temporal representativeness; meter and scale calibration; uncertainty; supplier coverage; configuration weighting; data gaps, proxies, cut-offs, and sensitivity findings. |
| update_trigger | New or materially changed BOM/configuration, processor or accelerator generation, memory/storage technology, chassis/rack, power or thermal design, bundled hardware boundary, assembly/test route, production site, electricity supply, supplier dataset, allocation driver, configuration mix, or evidence that changes a rule. |

## 11. 数据源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-45240` | dataset | United Nations Statistics Division, CPC detail 45240, “Automatic data processing machines presented in the form of systems”, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/45240（检索于 2026-08-09） | 官方类别身份与对应关系语境；支持排除相邻单设备和外围设备类别。 |
| `itu-t-l1410-2024` | standard | ITU-T Recommendation L.1410 (11/2024), “Methodology for environmental life cycle assessments of information and communication technology goods, networks and services”, https://handle.itu.int/11.1002/1000/16010（检索于 2026-08-09） | ICT 生命周期边界、必需部件生产与装配、参考流解释、截断、前景采集、分配及数据质量规则。 |
| `energy-star-computer-servers-v4-2023` | standard | U.S. EPA ENERGY STAR Program Requirements, Product Specification for Computer Servers, Eligibility Criteria, Version 4.0, 12 April 2023, https://www.energystar.gov/sites/default/files/asset/document/ENERGY%20STAR%20Version%204.0%20Computer%20Servers%20Final%20Specification.pdf（检索于 2026-08-09） | 产品族配置异质性、系统形态与部件、代表配置、系统特征和验收测试元数据。 |
| `eu-2019-424-consolidated` | official_guidance | Commission Regulation (EU) 2019/424, consolidated text of 1 May 2021, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02019R0424-20210501（检索于 2026-08-09） | 服务器与存储产品定义；按配置的部件、功率、材料、拆解及产品族低端/高端配置披露。 |
| `ec-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, OJ L 471, 30 December 2021, http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-09） | 完整生命周期视角、系统边界、分配层级、截断披露、数据集层级，以及完整性/代表性/精度质量要求。 |
| `smith-mann-lal-2026` | literature | Smith, M.; Mann, M.; Lal, P. (2026), “Carbon Accounting and Beyond: An Evidence-Based Life Cycle Assessment of the Environmental Impacts of Data Center IT Equipment”, Sustainability 18(11), 5671, https://doi.org/10.3390/su18115671 | 同行评审证据：数据中心设备清单包含多个资产，服务器类型不可互换，比较需按性能、服务和存储容量归一化。 |
