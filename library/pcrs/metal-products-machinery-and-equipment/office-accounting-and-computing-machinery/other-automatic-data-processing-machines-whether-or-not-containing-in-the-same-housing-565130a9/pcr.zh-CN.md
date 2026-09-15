---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-automatic-data-processing-machines-whether-or-not-containing-in-the-same-housing-565130a9
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他自动数据处理机器，无论是否在同一机壳中包含存储单元、输入单元、输出单元中的一种或两种

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 45250 这一剩余类别中已明确声明的具体成品自动数据处理机器。该机器执行数据处理，并且可在同一机壳中不包含或包含存储、输入、输出三类单元中的一种或两种。仅当产品不属于相邻的便携式机器、同机壳中央处理/输入/输出组合机器、系统、外围设备、存储单元、其他单元或零部件等更具体子类时，方可使用本 PCR。

每个前景数据包均须识别具体计算架构、处理器布置、机壳形式、机壳内存储/输入/输出单元的准确组合、内存、扩展和加速器配置、电源和冷却设计、固件或操作环境、预期工作负载和用途、随附附件、可销售配置标识以及产品净质量。不得将单一服务器、工作站、瘦客户机、专用设备、大型机、嵌入式设备或其他狭义配置外推至整个 CPC 叶。只有在逐一识别所含配置并按经审计生产质量加权时，才允许建立生产加权的产品族数据集。

本 PCR 覆盖进入所声明制造系统的外购部件和子组件、接收与配套、可选板级装联、系统集成、固件或软件加载、配置、测试、返工、最终整理、包装以及生产者门口放行。上游部件生产由关联的供应商数据集表示。使用、维护、翻新和报废不属于默认前景边界；若建立从摇篮到坟墓的生命周期模型，则须显式衔接这些阶段。

排除产品包括 CPC 45220 便携式自动数据处理机器；CPC 45230 中同一机壳至少包含中央处理单元和输入、输出单元的机器；CPC 45240 以系统形式提供的机器；单独供应的输入/输出单元、存储单元、其他自动数据处理单元、零部件和附件；以及主要功能属于电信、消费电子、工业控制或其他更具体类别的产品。分类应依据交付时产品本身，不得依据便于建模的服务器或嵌入式计算机代理。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-automatic-data-processing-machines-whether-or-not-containing-in-the-same-housing-565130a9 |
| classification_refs | CPC 3.0：45250，精确分类语境 |
| covered_products | 未适用更具体计算机器子类、且已具体声明的剩余类自动数据处理机器；无论同一机壳中是否包含存储、输入和输出单元三类中的一种或两种 |
| excluded_products | CPC 45220 便携式机器；CPC 45230 中中央处理单元与输入和输出单元同机壳的机器；CPC 45240 系统；单独供应的输入/输出或存储单元；其他自动数据处理单元；零部件和附件；电信、消费电子、工业控制及其他分类更具体的产品 |
| representative_product | 一个已声明且在范围内的可销售自动数据处理机器配置，按生产者门口 1 kg 产品净质量归一化 |
| production_route | 外购部件和子组件接收；配套；板级与系统集成；固件或软件加载；配置与测试；需要时返工；最终整理、包装和生产者门口放行 |
| market_state | 在生产者门口完成制造、测试、配置和包装的自动数据处理机器，已声明其架构、机壳内单元组合、配置、预期用途和随附附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台属于范围内、且架构、机壳内单元组合、配置和预期用途均已显式声明的成品自动数据处理机器 |
| How much | 生产者门口所声明可销售机器配置的 1 kg 产品净质量 |
| How well | 满足指定配置的产品规范和最终测试；仅包含已声明的机壳内存储、输入、输出单元以及随附附件 |
| How long or cycle | 一个完整的制造与生产者门口放行周期；设计寿命和使用概况作为元数据，不嵌入 1 kg 参考数量 |
| reference_flow_link | 将一个已声明配置按实测合格单机质量归一化为 1 kg；报告对应机器台数，不得把狭义配置视作全叶平均值 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他自动数据处理机器，无论是否在同一外壳中包含一个或两个以下类型的单元：存储单元、输入单元、输出单元 `ea5779a6-4214-400c-b380-155efbd5b98e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 计算架构和处理器布置；机壳形式；机壳内存储单元是否存在及其规格；机壳内输入单元是否存在及其规格；机壳内输出单元是否存在及其规格；内存；加速器和扩展；电源；冷却；固件或操作环境；预期工作负载和用途；可销售配置标识；随附附件；单机净质量；制造场址和期间；生产者门口边界 |

构建前景数据包时，所有`必需限定信息`均须在数据集元数据、过程说明、参考流备注、产品规格或等效数据包字段中声明。缺少架构、机壳内单元组合、配置、预期用途或单机净质量时，参考流不完整。单一服务器、嵌入式设备或其他狭义设计的结果须保持该设计特定性；只有经审计生产权重支持已声明配置族时方可聚合。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 准确报告 1 kg 合格成品机器净质量，排除运输包装和单独供应附件；保留每台实体机器的实测净质量及对应机器台数。 |
| `component_mass` | 部件、子组件、耗材、产品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料或部件身份及配置保留实测质量；无配置特定实测质量或供应商声明质量时，不得将件数换算为质量。 |
| `electricity_measurement` | 装配、配置、测试、返工和整理用电 | Energy | kWh | 使用校准电表读数，或经核对的设备功率和运行时间；工厂用电与测试设备的使用阶段用电须分开。 |
| `unit_to_mass_normalization` | 实体机器产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以实测合格净产出质量除配置特定的批次输入和输出；另行报告机器台数，防止静默平均不同机器配置。 |

## 5. 系统边界

默认交付物是生产者门口前景制造数据包。下游 `lifecyclemodel` 可将其扩展到原材料取得、使用、维护、翻新和报废，但须保持已声明配置，并防止与关联部件或处理数据集重复。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在已声明制造场址接收的外购电子、机电、机械、电源、热管理、机壳、存储、输入、输出、包装及承载软件的部件或子组件 |
| starting_condition_role | 进入首个前景接收、配套、板级集成或系统装配操作的上游产品投入 |
| product_classification_scope | 仅由已声明架构、机壳内单元组合、配置和预期用途表示的 CPC 45250 剩余类自动数据处理机器 |
| recursive_input_rule | 已作为 CPC 45250 范围内成品机器的投入，应记录为上游产品流，不得在接收前景过程中再次分解；须披露其配置和上游数据集。 |
| upstream_dataset_requirement | 对半导体、印刷电路组件、内存、存储、电源、冷却、机壳、电缆、电池、所含显示或输入设备、包装、电力、运输和废物处理关联供应商与技术适配的数据集；披露所有代理及不匹配。 |
| disclosure | 声明架构、处理器布置、机壳形式、机壳内存储/输入/输出的准确组合、物料清单、配置标识、预期用途、场址、报告期、所含装配与测试操作、上游数据集、包装处理和准确生产者门口终点状态。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 生产者门口制造 | 纳入接收与配套、场内进行的板级装联、系统集成、固件或软件加载、配置、测试和老化（如实施）、返工、清洁、最终整理、包装、公用工程、直接排放、不合格品和制造废物。 | itu-l1410-2024 |
| `boundary_upstream_components` | 外购投入 | 每项材料部件和子组件均应使用上游数据集或已披露的未解决代理表示；不得将外购已装联电路板、存储单元、电源、机壳或冷却组件视为零负荷。 | itu-l1410-2024; ec-pef-method-2021 |
| `boundary_configuration_specificity` | 产品类别覆盖 | 保留架构、机壳内单元组合、已安装部件、固件或操作环境、预期用途和配置身份。不得将一个服务器、工作站、瘦客户机、专用设备、嵌入式设备或其他狭义设计外推到整个剩余叶。 | un-cpc-3-2025; energy-star-computers-9-2025 |
| `boundary_software_and_test` | 承载软件的产品与测试 | 纳入场内加载、配置、更新、测试的能源和材料。仅当所声明生命周期边界包含软件开发、远程服务和使用阶段运行时才建模，并单独披露其分配。 | itu-l1410-2024 |
| `boundary_downstream_extension` | 生命周期模型 | 声称包含使用、维护、翻新或报废时，添加配置特定情景和数据集，不得重复生产者门口或上游部件负荷。 | itu-l1410-2024 |
| `boundary_no_silent_cutoff` | 所有前景操作 | 不得仅因缺少匹配数据集而遗漏已知投入、产出、废物或直接排放；应记录该流、选择已披露代理，或说明排除及预期影响。 | itu-l1410-2024; ec-pef-method-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_receipt_and_kitting` | 部件接收、检验与配置特定配套 | required | 始终 | 建立所声明配置的经审计物料清单和进料部件集 | 合格产出所需的验收部件套件 |
| `board_and_system_integration` | 板级装联与系统集成 | required | 始终；板级装联行仅在已声明前景场址内实施时适用 | 集成处理器、内存、存储、输入/输出单元、电源、冷却、机壳和互连 | 转入配置与测试的已装配机器 |
| `configuration_and_testing` | 固件或软件加载、配置、测试、老化与返工 | required | 始终；老化和返工投入在实施时适用 | 生产受配置控制并通过测试的机器，记录不合格品与更换件 | 转入门口放行的合格已测试机器 |
| `finishing_and_gate_release` | 最终整理、包装与生产者门口放行 | required | 始终 | 完成标签、随附附件、包装、质量核验和可销售放行 | 1 kg 合格成品机器净质量 |

### 过程：部件接收、检验与配置特定配套（`component_receipt_and_kitting`）

#### 输入

##### 产品流

###### 电子部件与已装联组件（`electronic_components`）

按零件号和配置记录处理器与加速器器件、已装联印刷电路组件、内存、存储、接口控制器、属于机器一部分的网络硬件及其他电子件。

- 选定流：在具体数据集中选择供应商和技术特定的电子部件及已装联组件产品流
- 流属性/单位：Mass / kg；件数作为支持记录保留
- 数量规则：通过采购、库存、退回和报废核对，得到发往所声明配置的净验收数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位所声明配置的合格产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_and_component_records`
- 来源：`itu-l1410-2024`

###### 机械、电源、热管理与机壳组件（`mechanical_power_thermal_parts`）

记录底盘、外壳、紧固件、电缆、连接器、电源、所含电池、风扇、散热器、液冷部件及其他机械或热管理项目。

- 选定流：在具体数据集中选择材料、供应商和技术特定的部件产品流
- 流属性/单位：Mass / kg；件数作为支持记录保留
- 数量规则：通过采购、库存、退回和报废核对，得到发往所声明配置的净验收数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位所声明配置的合格产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_and_component_records`
- 来源：`itu-l1410-2024`

###### 机壳内存储、输入和输出单元（`housing_unit_combination`）

记录安装在同一机壳内的准确存储、输入和输出单元；每类未安装单元也须显式记录为不存在。

- 选定流：为具体配置选择单元特定的 Tiangong 产品流
- 流属性/单位：Mass / kg；保留件数以及容量或接口规格
- 数量规则：每个已安装机壳内单元的实测或供应商声明质量和发料件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位所声明配置的合格产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_component_records`
- 来源：`un-cpc-3-2025`; `energy-star-computers-9-2025`

##### 废物流

###### 进料包装和拒收部件废物（`incoming_component_waste`）

按材料、危险属性和处理路线记录进料包装和拒收部件。

- 选定流：在具体数据集中选择材料和处理特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：接收与配套环节离场废物的实测质量，扣除有凭证的供应商退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位验收部件套件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rework_and_yield`
- 来源：`itu-l1410-2024`

##### 基本流

#### 输出

##### 产品流

###### 验收的配置特定部件套件（`accepted_component_kit`）

将经审计部件套件转入集成，并保持零件号、质量、配置和供应商数据集关联。

- 选定流：内部验收部件套件；无需外部产品流 UUID
- 流属性/单位：Mass / kg
- 数量规则：库存、退回和拒收核对后验收发料部件之和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位验收部件套件
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_and_component_records`
- 来源：`itu-l1410-2024`

##### 废物流

##### 基本流

### 过程：板级装联与系统集成（`board_and_system_integration`）

#### 输入

##### 产品流

###### 验收部件套件投入（`component_kit_input`）

将完整配置特定套件带入装配。

- 选定流：内部验收部件套件
- 流属性/单位：Mass / kg
- 数量规则：转入集成的实测套件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位已装配机器产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_transfer_and_mass`
- 来源：`itu-l1410-2024`

###### 装配耗材（`assembly_consumables`）

使用时记录焊料、助焊剂、胶黏剂、导热界面材料、清洗剂、工艺气体及其他耗材；板级装联在场外时，将已装联电路板记录为外购投入。

- 选定流：在具体数据集中选择物质和配方特定的产品流
- 流属性/单位：Mass / kg；气体保留实测交付单位和有据换算
- 数量规则：发料量扣除回收的未使用库存，并归属于所声明配置
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位已装配机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_consumables_and_energy`
- 来源：`itu-l1410-2024`

###### 集成用电与公用工程（`integration_energy`）

记录板级装联、紧固、电缆安装、冷却系统充注、清洁和装配区域运行的电力及其他公用工程。

- 选定流：在具体数据集中选择供应商、电压和地域特定的电力及公用工程流
- 流属性/单位：Energy / kWh；其他公用工程使用其实测单位
- 数量规则：分表计量，或核对设备运行时间和功率；共享设施用量按第 7 节分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位已装配机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_consumables_and_energy`
- 来源：`itu-l1410-2024`

##### 废物流

###### 装配废料和残余物（`assembly_waste`）

按材料和路线记录电子废料、边角料、废耗材、废水和拒收组件。

- 选定流：在具体数据集中选择材料、危险属性和处理特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：转入内部回收、供应商退回或外部处理的实测废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位已装配机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rework_and_yield`
- 来源：`itu-l1410-2024`

##### 基本流

###### 装配直接排放（`assembly_direct_releases`）

按物质和环境介质记录焊接、清洗、涂覆、工艺气体及热管理充注产生的实测或基于来源计算的直接排放。

- 选定流：在具体数据集中选择物质和环境介质特定的基本流
- 流属性/单位：Mass / kg substance
- 数量规则：实测排放，或依据采集的耗材用量和有来源因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位已装配机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_consumables_and_energy`
- 来源：`itu-l1410-2024`

#### 输出

##### 产品流

###### 已装配机器（`assembled_machine`）

转移每台已装配机器时保留其架构、机壳内单元组合、配置标识以及实测或核对质量。

- 选定流：内部已装配自动数据处理机器
- 流属性/单位：Mass / kg
- 数量规则：转入配置与测试的实测已装配产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位已装配机器产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_transfer_and_mass`
- 来源：`itu-l1410-2024`

##### 废物流

##### 基本流

### 过程：固件或软件加载、配置、测试、老化与返工（`configuration_and_testing`）

#### 输入

##### 产品流

###### 已装配机器投入（`assembled_machine_input`）

将每台已装配机器带入配置与测试，不改变其身份。

- 选定流：内部已装配自动数据处理机器
- 流属性/单位：Mass / kg
- 数量规则：从集成环节接收的实测质量和台数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位已测试合格机器产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_transfer_and_mass`
- 来源：`itu-l1410-2024`

###### 配置、测试和老化用电（`test_electricity`）

记录场内固件或软件加载、功能测试、压力测试、实施时的老化、测试外围设备及测试支持设备能源。不得用使用阶段估算替代。

- 选定流：在具体数据集中选择供应商、电压和地域特定的电力流
- 流属性/单位：Energy / kWh
- 数量规则：测试单元实测用电，或设备和支持设备实测功率乘以记录测试时长并核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位已测试合格机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_configuration_and_test_records`
- 来源：`energy-star-computers-9-2025`; `ecma-383-2010`

###### 返工与更换部件（`rework_components`）

记录将测试失败机器转为合格产出所用的更换件和耗材。

- 选定流：为具体配置选择零件和材料特定的产品流
- 流属性/单位：Mass / kg；保留件数
- 数量规则：发往已记录返工工单的实测零件，扣除退回的可用零件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位已测试合格机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rework_and_yield`
- 来源：`itu-l1410-2024`

##### 废物流

###### 失败机器、更换件与测试废物（`test_and_rework_waste`）

按材料、危险属性和路线记录失败机器、未回收更换件、废测试耗材及其他测试废物。

- 选定流：在具体数据集中选择材料、危险属性和处理特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：从批次移出并转往回收、供应商退回或处理的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位已测试合格机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_rework_and_yield`
- 来源：`itu-l1410-2024`

##### 基本流

#### 输出

##### 产品流

###### 已测试且受配置控制的机器（`tested_machine`）

仅转移通过所声明配置特定测试的机器，并保留测试概况、固件或操作环境版本、结果和质量。

- 选定流：内部已测试自动数据处理机器
- 流属性/单位：Mass / kg
- 数量规则：通过最终测试并放行的合格机器实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位已测试合格机器产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_and_test_records`
- 来源：`energy-star-computers-9-2025`; `ecma-383-2010`

##### 废物流

##### 基本流

### 过程：最终整理、包装与生产者门口放行（`finishing_and_gate_release`）

#### 输入

##### 产品流

###### 已测试机器投入（`tested_machine_input`）

将已测试机器带入门口放行，并保持配置和测试身份完整。

- 选定流：内部已测试自动数据处理机器
- 流属性/单位：Mass / kg
- 数量规则：从测试环节接收的实测质量和台数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位成品机器产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_transfer_and_mass`
- 来源：`itu-l1410-2024`

###### 包装与随附附件（`packaging_and_accessories`）

记录一级、二级和三级包装，以及可销售配置随附的每条电缆、外置电源、输入/输出附件、手册或其他物品；运输包装不得计入产品净质量。

- 选定流：在具体数据集中选择材料和物品特定的产品流
- 流属性/单位：Mass / kg；保留件数
- 数量规则：配置装箱清单数量与已包装合格机器核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位成品机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_gate_records`
- 来源：`itu-l1410-2024`

###### 整理与包装能源（`finishing_energy`）

记录清洁、贴标、最终检验、包装和门口搬运所用能源。

- 选定流：在具体数据集中选择供应商、电压和地域特定的电力或公用工程流
- 流属性/单位：Energy / kWh；其他公用工程使用实测单位
- 数量规则：实测用量，或归属于所声明配置且经核对的设备运行时间与功率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位成品机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_gate_records`
- 来源：`itu-l1410-2024`

##### 废物流

###### 整理与包装废物（`packaging_waste`）

按材料和处理路线记录损坏包装、标签衬纸、保护膜、清洁废物和最终拒收附件。

- 选定流：在具体数据集中选择材料和处理特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：整理和包装产生的实测废物，扣除有凭证的再使用或退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位成品机器产出质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_gate_records`
- 来源：`itu-l1410-2024`

##### 基本流

#### 输出

##### 产品流

###### 成品自动数据处理机器（`reference_product`）

仅放行所声明的合格配置。类别层产品流身份不授权无配置聚合或代理。

- 选定流：其他自动数据处理机器，无论是否在同一外壳中包含一个或两个以下类型的单元：存储单元、输入单元、输出单元 `ea5779a6-4214-400c-b380-155efbd5b98e`
- 流属性/单位：Mass / kg
- 数量规则：依据合格单机实测质量计算的准确 1 kg 产品净质量；包装和单独供应附件保持为独立流
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品自动数据处理机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 所有共享制造操作 | 首先按产线、工单、配置、测试概况和过程时间细分，并使用直接计量。仅对剩余共享投入或排放进行分配。 | ec-pef-method-2021; itu-l1410-2024 |
| `allocation_shared_utilities` | 共享设施电力和公用工程 | 可用时使用配置特定分表；否则采用有据因果驱动因素，如设备运行时间乘以实测功率、机器时间或测试单元占用时间。只有不存在更好因果驱动因素时才使用产出质量，并披露限制。 | itu-l1410-2024; ec-pef-method-2021 |
| `allocation_rework_and_rejects` | 返工和不合格产出 | 将初始加工负荷、额外返工投入以及最终处置或回收负荷保留在产生合格产出的生产批次中；无明确且经审查方法时，不得通过把废料收入视为共产品而移除不合格品负荷。 | ec-pef-method-2021 |
| `allocation_configuration_family` | 多配置数据集 | 先分别计算各配置，随后仅按所声明场址和期间经审计的生产质量合并。报告所含配置、权重、离散程度和排除项；不得用一个服务器或嵌入式设备概况替代 CPC 叶。 | energy-star-computers-9-2025 |
| `allocation_recovered_material` | 回收制造材料 | 分别报告回收材料数量和处理路线。仅可在下游生命周期模型中应用替代或回收信用，并显式声明方法、质量和被避免产品。 | ec-pef-method-2021; itu-l1410-2024 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_component_records` | component_receipt_and_kitting | 电子、机械、电源、热管理、机壳、存储、输入和输出部件 | 配置 BOM、采购、库存、检验、供应商和退回记录 | 配置标识；零件号；功能；供应商；数量；质量；材料或技术；已安装机壳内单元类型；期初和期末库存；拒收；退回；上游数据集 | 将批准 BOM 与采购、库存、发料、退回和检验记录核对；供应商质量不可用时称量代表性部件 | item; kg | 每次接收和生产批次；每月库存核对 | 覆盖所有所含配置的代表性生产期 | 每个纳入制造场址和进料部件库 | 净发料量 = 期初库存 + 接收 - 期末库存 - 有凭证退回；按工单归属并除以合格配置产出质量 | 批准 BOM 版本、发票、库存台账、检验记录、秤校准、供应商规格和上游数据集登记表 |
| `cp_consumables_and_energy` | board_and_system_integration | 装配耗材、电力、公用工程和直接排放 | 发料、计量、设备、维护和环境记录 | 物质；数量；库存；仪表；设备标识；功率；运行时间；批次；配置；排放因子；来源 id；废物转移 | 分表计量材料操作；否则将耗材领用和设备日志与设施总量核对 | kg; kWh; measured utility unit | 每批次；每月设施核对 | 与产品产出相同的代表性期间 | 每条纳入产线、测试单元、公用工程系统和排放点 | 按工单直接归属；剩余共享用量按第 7 节分配；仅用采集活动数据和有来源因子计算排放 | 仪表和秤校准、发票、设备日志、库存台账、计算工作底稿和环境记录 |
| `cp_configuration_and_test_records` | configuration_and_testing | 固件或软件加载、测试、老化和合格产出 | 配置控制、测试单元、计量和工单记录 | 序列号或批次；配置标识；架构；固件或 OS 版本；测试概况；测试时长；设备功率；支持设备功率；通过/失败；返工单；最终质量 | 将配置和测试日志与测试单元实测能源及产出序列号关联；记录每项对默认设置的更改 | item; h; kWh; kg | 每台测试机器或可审计批次 | 与产品产出相同的代表性期间 | 每个纳入配置和测试单元 | 按测试概况汇总机器与支持设备能源，保留失败和返工，并除以合格产出质量 | 版本受控测试程序、仪表校准、机器日志、通过/失败记录和返工追踪 |
| `cp_waste_rework_and_yield` | component_receipt_and_kitting; board_and_system_integration; configuration_and_testing | 拒收、返工、退回零件、废料和处理路线 | 批次、质量、返工、称量、转移联单和处理记录 | 投入台数和质量；合格台数和质量；拒收原因；更换件；退回数量；废物材料；危险属性；目的地；回收数量 | 核对批次良率和质量转移；称量每股分离废物流或使用经核验容器总量 | item; kg | 每批次和每次废物运输 | 与产品产出相同的代表性期间 | 每项纳入操作和废物目的地 | 在有据不确定度内满足投入 = 合格转移 + 拒收或废物 + 退回 +/- 库存变化 | 质量记录、返工单、校准秤、废物联单、供应商退回、处理收据和质量平衡 |
| `cp_output_transfer_and_mass` | component_receipt_and_kitting; board_and_system_integration; configuration_and_testing; finishing_and_gate_release | 内部转移和合格产品质量 | 工单、转移、序列、计数和称量记录 | 配置标识；序列或批次；投入台数和质量；产出台数和质量；转移时间；库存变化；产品净质量 | 统计全部机器并使用校准秤称量成品配置；若抽样单机质量则保留抽样计划 | item; kg | 每批次和每次配置修订 | 与产品产出相同的代表性期间 | 每条纳入产线和最终门口 | 按配置核对转移，并以排除包装和单独供应附件的实测净质量计算 kg 产出 | 工单关闭、转移记录、秤校准、抽样计划和成品规格 |
| `cp_packaging_and_gate_records` | finishing_and_gate_release | 包装、随附附件、整理能源和门口放行 | 装箱清单、采购、库存、计量、包装和放行记录 | 配置标识；材料或附件；数量；质量；再生含量；包装层级；仪表；运行时间；包装台数；放行状态 | 将装箱清单和发料与已包装合格机器核对；称量代表性包装配置 | item; kg; kWh | 每种包装配置和生产批次 | 当前包装配置和代表性生产期间 | 每条纳入包装线和放行门口 | 以合格产出质量除归属的包装、附件和整理投入；运输包装不计入产品净质量 | 批准装箱清单、供应商规格、秤和仪表校准、包装记录及放行证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_component_use` | 外购部件与耗材 | 净用量 = 期初库存 + 接收 - 期末库存 - 有凭证供应商退回；将结果与工单发料和废物核对 | 库存、采购、退回、发料和废物记录 | 按零件或物质及配置的净投入 |  |
| `calc_reference_mass_normalization` | 所有清单行 | 归一化数量 = 归属于合格配置的数量 / 合格净产出实测质量（kg） | 归属数量；合格机器台数；实测单机或批次净质量 | 每 1 kg 成品机器的数量 |  |
| `calc_yield_and_rework` | 生产批次 | 合格良率 = 合格产出台数 / 投产台数；保留拒收机器、返工循环、更换件和废物，不采用无依据默认良率 | 投产、合格、拒收、返工及报废台数和质量 | 配置特定良率及每合格 kg 负荷 |  |
| `calc_test_energy` | 配置与测试 | 测试用电 = 测试单元实测电量之和；仅有设备日志时，汇总机器和支持设备实测功率乘以记录时长，并与设施用电核对 | 电表读数；机器和支持设备功率；测试时长；配置标识 | 按测试概况每合格 kg 的 kWh | energy-star-computers-9-2025; ecma-383-2010 |
| `calc_configuration_family` | 已声明配置族 | 产品族数量 = sum(配置每 kg 数量 x 经审计配置生产质量) / sum(经审计配置生产质量)；排除未测配置并披露覆盖率 | 配置特定结果；生产质量；场址和期间 | 含覆盖率的生产质量加权产品族结果 | energy-star-computers-9-2025 |
| `calc_mass_balance` | 每个前景过程和整个前景系统 | 在实测不确定度内，投入材料质量 = 产品与内部转移产出质量 + 废物与直接材料排放质量 +/- 有据库存变化；调查并披露残差 | 投入、产出、废物、排放、库存和不确定度记录 | 过程和系统质量平衡残差 | itu-l1410-2024 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留架构、处理器布置、机壳、机壳内存储/输入/输出准确组合、内存、加速器、扩展、电源、冷却、固件或操作环境、预期用途、配置标识、随附附件、单机净质量和生产者门口状态。 | 批准配置规格、BOM 版本、产品标签、测试概况和参考流元数据 |
| `dq_configuration_coverage` | 多配置生产 | 枚举配置总体并报告生产质量覆盖率；不得从单一代表服务器或嵌入式设计推断未测配置。 | 配置登记表、经审计生产质量、纳入表和覆盖率计算 |
| `dq_measurement` | 质量、能源、计数、时间和废物记录 | 使用校准秤和仪表、序列或批次计数、版本受控机器日志、发票和处理收据；保留原始单位、换算和不确定度。 | 校准证书、原始导出、工单、发票和核对工作底稿 |
| `dq_temporal` | 前景生产 | 使用可代表生产组合、良率、返工和运行条件的连续期间；通常至少连续十二个月，较短完整生产活动仅在有理由且覆盖配置时使用。 | 期间登记表、生产核对、季节性或生产活动理由及例外记录 |
| `dq_site_coverage` | 多场址数据集 | 定义场址总体、技术和产品分层、纳入场址及生产质量覆盖率；聚合前分别计算场址。 | 场址登记表、抽样理由、场址结果和生产质量核对 |
| `dq_upstream_traceability` | 部件与子组件 | 对重要投入保留供应商、零件号、技术或材料、地域、数据期间、上游数据集、代理不匹配和配置关联。 | 供应商证据、批准 BOM、上游数据集登记表和代理登记表 |
| `dq_completeness` | 前景清单 | 核对 BOM 质量、机器转移、能源、良率、返工、拒收、废物和库存变化；列明所有遗漏或未解决流及预期影响。 | 质量和计数平衡、公用工程核对、完整性清单和未解决流登记表 |
| `dq_source_traceability` | 计算值与外部规则 | 保存公式、原始投入、来源 id 和版本、分配驱动因素、假设及计算结果，使独立审查者可复现。 | 计算工作底稿、来源存档和独立复算 |
| `dq_uuid_readiness` | Tiangong 身份 | 激活或发布前回读公开参考产品流、Mass 属性、Units of mass 单位组和 kg 适配性；拒绝错误状态、流类型、分类、属性、单位组或狭义代理。 | PCR 内容之外保留的 Tiangong 身份回读记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | 参考产品 | 缺少架构、处理器布置、机壳形式、机壳内存储/输入/输出准确组合（含显式不存在）、配置标识、预期用途、随附附件或单机净质量时，判定不符合。 | un-cpc-3-2025; energy-star-computers-9-2025 |
| `validate_residual_class_scope` | CPC 分类 | 拒绝便携式机器、中央处理单元与输入和输出同机壳的机器、以系统形式提供的机器、单独供应的输入/输出或存储单元、其他自动数据处理单元、零部件及分类更具体的电信、消费电子或工业控制产品。 | un-cpc-3-2025 |
| `validate_no_leaf_extrapolation` | 数据集代表性 | 拒绝由一个服务器、工作站、瘦客户机、专用设备、嵌入式设备或其他狭义设计产生的无条件 CPC 叶结果。产品族结果须有单独配置结果和经审计生产质量权重。 | energy-star-computers-9-2025 |
| `validate_reference_flow` | 定量参考 | 要求使用 flow `ea5779a6-4214-400c-b380-155efbd5b98e`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg 的准确 1 kg 产品净质量；要求对应实测机器台数，并从净质量排除包装和单独供应附件。 |  |
| `validate_process_coverage` | 前景清单 | 要求部件接收与配套、板级与系统集成、配置与测试、整理与门口放行清单；仅板级装联、老化、返工和直接排放等条件行可显式声明不适用。 | itu-l1410-2024 |
| `validate_housing_unit_combination` | 配置 BOM | 要求存储、输入和输出单元分字段记录安装数量、规格、质量和显式不存在；拒绝未识别同机壳组合的笼统声明。 | un-cpc-3-2025 |
| `validate_transfer_and_mass_balance` | 前景过程 | 要求配置特定机器转移核对和材料质量平衡处于有据不确定度内；调查并披露每项残差和库存变化。 | itu-l1410-2024 |
| `validate_test_records` | 配置与测试 | 要求版本受控测试概况、固件或操作环境、测试时长、能源方法、通过/失败结果、失败品和返工。ENERGY STAR 或 ECMA 程序仅可支持其明示范围内产品，不得作为全叶能源因子。 | energy-star-computers-9-2025; ecma-383-2010 |
| `validate_allocation` | 共享操作 | 要求直接细分或有据因果分配驱动因素；配置族聚合前须分别计算配置，拒绝无解释质量或经济分配。 | ec-pef-method-2021; itu-l1410-2024 |
| `validate_source_and_proxy_traceability` | 上游及计算行 | 要求每项非默认方法、因子或情景引用已列来源 id；每个前景计算行须关联采集协议；披露每个代理和不匹配。 | ec-pef-method-2021; itu-l1410-2024 |
| `validate_data_quality` | 数据集画像 | 要求披露时间、场址、配置、技术、地域、测量、完整性、不确定度和生产质量覆盖率，足以进行独立核验。 | ec-pef-method-2021; itu-l1410-2024 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 范围内自动数据处理机器在生产者门口的配置特定前景制造数据包 |
| downstream_use | `secondary_dataset`; `background_dataset`; 作为 `process` 和 `lifecyclemodel` 投影的输入 |
| allowed_use | 对所声明架构和可销售配置建模，或对配置总体、场址、期间和生产者门口边界与研究匹配且透明按生产质量加权的产品族建模 |
| excluded_use | 无条件 CPC 叶平均；从一个服务器、工作站、瘦客户机、专用设备、嵌入式设备或其他狭义设计外推；无显式扩展的使用或报废阶段声明；属于更具体分类子类的产品 |
| required_metadata | PCR id 和版本；CPC 语境；架构；处理器布置；机壳；机壳内存储/输入/输出是否存在及规格；内存；加速器与扩展；电源和冷却；固件或操作环境；预期工作负载和用途；配置标识；随附附件；单机净质量和机器台数；场址和期间；边界；分配；配置覆盖率；来源、代理及 Tiangong UUID 回读状态 |
| required_quality_disclosure | 配置和生产质量覆盖率；场址与时间覆盖；测量与计算方法；校准和不确定度；BOM、机器、质量、能源、良率、返工、废物和库存核对；上游数据集及代理质量；遗漏流和预期影响；分配驱动因素 |
| update_trigger | 架构、处理器、内存、存储/输入/输出组合、加速器或扩展、电源、冷却、固件或操作环境、预期用途、BOM、供应商或上游数据集、制造场址或工艺、测试概况、良率或返工、包装、分配、生产组合或任何重要投入、废物、直接排放发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, Structure and Explanatory Notes, https://unstats.un.org/unsd/classifications/Econ/CPC, retrieved 2026-08-09 | CPC 45250 身份、剩余分类边界、层级以及相邻计算机器子类排除 |
| `itu-l1410-2024` | standard | ITU-T Recommendation L.1410 (11/2024), Methodology for environmental life cycle assessments of information and communication technology goods, networks and services, https://handle.itu.int/11.1002/1000/16010, retrieved 2026-08-09 | ICT 产品组成、生命周期与单元过程边界、部件及数量、数据采集与核验、分配、报告和下游扩展 |
| `energy-star-computers-9-2025` | official_guidance | U.S. EPA ENERGY STAR Program Requirements for Computers, Version 9.0, January 2025, https://www.energystar.gov/sites/default/files/2025-01/ENERGY%20STAR%20Computers%20Version%209.0%20Final%20Specification.pdf, retrieved 2026-08-09 | 产品类型区分、已安装部件与出厂配置记录、代表型号限制和配置特定测试；不作为全叶能源因子 |
| `ecma-383-2010` | standard | Ecma International, ECMA-383, 3rd edition, Measuring the Energy Consumption of Personal Computing Products, December 2010, https://ecma-international.org/wp-content/uploads/ECMA-383_3rd_edition_december_2010.pdf, retrieved 2026-08-09 | 在标准范围内对台式机和笔记本提供条件性配置与测试能源记录结构；不表示整个 CPC 叶，也不提供默认值 |
| `ec-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Official Journal L 471, http://data.europa.eu/eli/reco/2021/2279/oj, retrieved 2026-08-09 | 一般生命周期数据质量、可核验性、完整性、多功能性、分配和披露规则 |

来源限制：ENERGY STAR 9.0 和 ECMA-383 覆盖具名计算产品类型及测试条件，而非完整 CPC 45250 剩余叶。二者仅支持配置披露和条件性测试能源计量；不得将其任何数值或单一产品架构泛化到本类别。
