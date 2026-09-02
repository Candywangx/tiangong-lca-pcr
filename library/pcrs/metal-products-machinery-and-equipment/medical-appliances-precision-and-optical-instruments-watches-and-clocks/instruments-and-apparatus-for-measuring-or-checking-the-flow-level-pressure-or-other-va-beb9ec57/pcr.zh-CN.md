---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-the-flow-level-pressure-or-other-va-beb9ec57
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 测量或检验液体或气体流量、液位、压力或其他变量的仪器和装置

## 1. 范围与适用性

本 PCR 适用于主要功能为测量或检验液体或气体流量、液位、压力或其他物理过程变量的完整、可销售仪器和装置。范围包括接触式和非接触式仪表、机械式和电子式仪表、就地指示仪表和变送器，以及带一体式显示或通信功能的仪表。声明产品必须是经过校准和配置后能够独立完成预定测量或检验功能的完整仪表。

产品配置应按被测变量类别（`flow`、`level`、`pressure` 或 `other_liquid_or_gas_variable`）、接触模式（`contact` 或 `non_contact`）、工作架构（`mechanical` 或 `electronic`）、过程连接、外壳防护等级和预定介质进行分型。电子式配置还应声明输出或通信类型及供电安排。IEC 62828-1 区分压力、液位和流量过程测量变送器以及模拟和数字变送器；IEC 60529 为声明的 IP 等级提供外壳防护分类。

范围不包括用于贸易或公用事业结算的供气、供液或供电生产/供应计量表；自动调节或控制仪器和装置；导航、水文或气象仪器；物理或化学分析仪器；以及无法独立完成完整测量功能的单独敏感元件、换能器、壳体、电子模块、显示器、通信模块、过程连接件、备件或其他部件。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-the-flow-level-pressure-or-other-va-beb9ec57 |
| classification_refs | CPC 3.0: 48252（精确分类语境） |
| covered_products | 测量或检验液体或气体流量、液位、压力或其他物理过程变量的完整工业或专业仪表；接触式或非接触式；机械式或电子式；就地指示或变送配置 |
| excluded_products | 贸易或公用事业供应计量表；自动控制器或调节器；导航、水文、气象或物理/化学分析仪器；单独传感器、换能器、零件、模块和附件 |
| representative_product | 完整且经校准的过程仪表，包含其销售配置所需的敏感或测量机构、适用时的过程接口、壳体以及全部电子、显示或通信和电源接口元件 |
| production_route | 供应商部件生产与进厂供应；条件性厂内机械或敏感部件制造；条件性电子装配；仪表装配与密封；配置、校准与功能测试；包装 |
| market_state | 制造厂门处已完成、经校准、可销售的仪表，参考产品质量不含外部分销包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 测量或检验已声明液体或气体过程变量的完整、经校准仪表或装置 |
| How much | 1 kg 成品仪表净质量，不含外部分销包装 |
| How well | 已通过规定的校准、功能测试、适用时的泄漏或承压完整性测试以及外壳或密封检查的可销售配置；不是单独敏感元件或部件 |
| How long or cycle | 一个完整制造和工厂验收周期；使用寿命不嵌入从摇篮到工厂大门的参考量，供下游使用阶段建模时另行声明 |
| reference_flow_link | `packaging_and_release` 的参考输出，由实测成品净质量归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品仪表净质量 |
| 参考产品流 | 测量或检验液体或气体的流量、界位、压力或其他变量的仪器和装置，导航、水文或气象仪器及装置除外，供气或供液中用的表计及自动调节或控制仪器及装置 `7af33061-607c-44d5-bafb-cb4efe98f0ec` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 被测变量类别；接触式或非接触式模式；机械式或电子式架构；测量原理和量程；预定液体或气体介质；接液或敏感元件材料；壳体材料；过程连接类型、尺寸和材料；外壳防护等级及测试依据；电子部分有无；显示和通信配置；供电安排以及额定功率或电流；校准方法、标准、准确度等级和验收状态；制造场址与地域；产品净质量；包装质量 |

构建前景数据包时，`必需限定信息` 中的每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。任何限定信息缺失都会使具体参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景数量归一化到 1 kg 经实测的放行成品仪表净质量；外部分销包装不计入参考产品质量并单独报告。 |
| `component_mass_reconciliation` | 产品物料清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将敏感或测量机构、接液或过程连接部件、壳体、电子、显示或通信、电源接口部件、密封件、紧固件及其他留存材料与实测产品净质量核对；记录水分、填充液、涂层、胶黏剂和舍入处理。 |
| `configuration_weighting` | 产品族或生产混合数据集 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按经核实的生产质量对配置特定清单加权，不得按销售价值或未加权型号平均；保留每个配置的被测变量、接触模式、架构、连接、防护、电子、通信、供电和校准属性。 |
| `item_to_mass_conversion` | 仅按仪表件数提供的记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一型号、批次、场址和报告期的实测净质量与放行件数，将按件记录的部件、能源、测试介质、废物和包装换算为质量基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的原材料、部件、子组件、辅助材料和包装到达报告制造场址时，已声明供应商身份、来源、质量和上游数据集引用。 |
| starting_condition_role | 仪表制造与放行的从摇篮到工厂大门前景起始条件 |
| product_classification_scope | 仅限完整 CPC 48252 仪表；公用事业或贸易结算表、自动控制器、排除的仪器类别以及单独敏感元件或其他零件不属于参考产品。 |
| recursive_input_rule | 同类别完整仪表作为系统内采购件时，只作为上游产品输入记录一次，并声明其质量、供应商、配置和功能；不得在同一前景数据包内递归展开其制造。 |
| upstream_dataset_requirement | 对敏感元件、过程接触硬件、壳体、印刷电路组件、显示器、通信模块、电源部件和主要材料优先使用供应商特定上游数据集；否则记录所选背景代理及其代表的质量和技术。 |
| disclosure | 声明场址、报告期、生产混合、被测变量/接触模式/架构划分、过程连接和防护等级、完整部件组质量平衡、电子/显示/通信/供电配置、校准与测试依据、进厂运输、制造能源与辅助材料、废物、净产出和包装。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_complete_instrument` | product_scope | 参考输出只纳入完整、经校准仪表；单独敏感元件、换能器、零件和模块可作为部件输入，但不得作为参考产品报告。 | `iec-62828-1-2026`; `abb-pgs300-epd-2024` |
| `system_boundary_cradle_to_gate` | foreground_system_boundary | 纳入上游材料和部件供应、进厂运输、实际发生的厂内部件和电子作业、最终装配与密封、工厂校准与功能测试、包装作业、制造能源与辅助材料、过程废物和放行产品。 | `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023` |
| `system_boundary_configuration` | configuration_coverage | 当被测变量类别、接触模式、机械/电子架构、过程连接、外壳防护、电子、显示/通信、供电、校准路线或材料组成变化时，应保持分开清单或明确加权。 | `iec-62828-1-2026`; `iec-60529-2013`; `abb-pgs300-epd-2024` |
| `system_boundary_downstream` | downstream_scenarios | 分销、安装、运行用能、现场再校准或维护、寿命期更换、拆除和报废不属于从摇篮到工厂大门参考数据集；需要时作为明确下游情景建模，不得混入工厂门生产。 | `siemens-sitrans-lr250-epd-2023`; `eu-weee-2012-consolidated-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_supply_and_manufacture` | 部件供应及条件性厂内制造 | required | 始终纳入部件接收和上游供应；仅当报告场址实际开展时纳入厂内机加工、成形、涂覆、敏感元件制造或其他部件作业。 | 敏感或测量机构、过程接触件、壳体、电子及其他留存部件的前景和相连上游生产 | 每 kg 放行仪表的实测合格部件质量 |
| `electronics_assembly` | 电子、显示、通信和电源接口装配 | conditional | 电子式仪表或包含印刷电路组件、显示、通信或一体式电源模块的配置应纳入。 | 电子子组件的贴装、连接、清洗、检验与配置 | 每 kg 放行仪表的实测合格电子子组件质量 |
| `instrument_assembly` | 仪表装配、连接与密封 | required | 始终纳入完整产品装配；机械式配置明确记录无电子部分。 | 将敏感或测量机构、过程接口、壳体和配置特定模块组合为完整仪表 | 每 kg 放行仪表在校准前的实测装配仪表质量 |
| `calibration_and_testing` | 配置、校准与功能测试 | required | 始终纳入校准和工厂验收；设计或规范要求时纳入泄漏、承压完整性、外壳防护或介质特定测试。 | 建立计量性能和可销售验收状态 | 每 kg 放行仪表的实测合格仪表质量和测试件数 |
| `packaging_and_release` | 包装与工厂门放行 | required | 始终纳入包装作业，并将外部包装与产品净质量分开记录。 | 产出已包装可销售产品和参考流 | 1 kg 放行仪表净质量 |

### 过程：部件供应及条件性厂内制造（`component_supply_and_manufacture`）

#### 输入

##### 产品流

###### 敏感元件或机械测量机构（`sensing_mechanism_input`）

记录进入仪表装配的完整敏感或机械测量机构，包括其工作原理、接触模式、接液材料、适用时的填充液、供应商、零件号、来源和合格质量。单独敏感元件是投入部件，绝不是参考产品。

- 选定流：前景供应商特定敏感元件或机械测量机构
- 流属性/单位：Mass / kg
- 数量规则：来自接收记录和物料清单的合格部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`abb-pgs300-epd-2024`

###### 过程接触硬件、密封件和连接部件（`process_contact_parts_input`）

按材料和连接规范记录本体、膜片、管件、探头、天线、法兰、螺纹或卫生连接、密封件、垫片、填充液及其他介质接触部件。

- 选定流：前景供应商特定过程接触硬件和密封件
- 流属性/单位：Mass / kg
- 数量规则：按部件和材料，从物料清单及接收记录获得合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`abb-pgs300-epd-2024`

###### 壳体、紧固件和防护部件（`housing_parts_input`）

按材料、质量和声明外壳防护配置记录外壳、盖、视窗、电缆密封套、紧固件、防护涂层、灌封或密封部件。

- 选定流：前景供应商特定壳体和防护部件
- 流属性/单位：Mass / kg
- 数量规则：按材料和防护配置从物料清单获得合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`iec-60529-2013`; `abb-pgs300-epd-2024`

###### 厂内部件所用原材料和制造辅助材料（`in_house_material_input`）

仅对报告边界内实施的部件作业纳入金属、聚合物、陶瓷、玻璃、弹性体、涂层、胶黏剂、润滑剂和加工化学品。

- 选定流：前景材料特定原材料或制造辅助材料
- 流属性/单位：Mass / kg
- 数量规则：报告期领用量减经核实的退库量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_issue_and_return`
- 来源：`abb-pgs300-epd-2024`

###### 部件和材料进厂运输服务（`inbound_transport_service`）

记录主要部件、材料和子组件的供应商来源、质量、运输方式和实际距离或路线；仅在避免重复计算时将运输保留在上游数据集中。

- 选定流：前景路线特定货运服务
- 流属性/单位：运输服务 / tkm 或运输方式适用单位
- 数量规则：货运质量乘实际路线距离，或经核实承运人记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：运输服务（`transport_service`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_inbound_transport`
- 来源：`abb-pgs300-epd-2024`

###### 制造能源和公用工程（`component_manufacturing_energy`）

记录厂内部件作业使用的计量电力、燃料、压缩空气、工艺水和其他公用工程；共享消耗仅按第 7 节分配。

- 选定流：前景场址和载能体特定能源或公用工程流
- 流属性/单位：载能体特定属性 / 计量单位
- 数量规则：可归属于所纳入厂内部件作业的计量或分表消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测合格部件产出，再折算到每 1 kg 放行仪表净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`abb-pgs300-epd-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 供仪表装配的合格部件组（`accepted_component_set`）

按配置和检验后质量记录通过进货及过程检验的厂内制造和采购部件。

- 选定流：前景合格部件组
- 流属性/单位：Mass / kg
- 数量规则：转入仪表装配的合格部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每合格部件组产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`abb-pgs300-epd-2024`

##### 废物流

###### 部件制造边角料和废辅助材料（`component_fabrication_waste`）

厂内部件作业发生时，按实测质量和处理路线分别记录金属、聚合物、陶瓷、电子、化学品、废水和混合废物。

- 选定流：前景废物特定处理输出
- 流属性/单位：Mass / kg
- 数量规则：归属于所纳入作业的称量或有凭证废物发运量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`abb-pgs300-epd-2024`

##### 基本流

###### 厂内制造直接排放（`component_direct_releases`）

记录所纳入部件作业对空气、水或土壤的实测或按许可证计算的直接排放；不得重复已包含在采购能源或处理数据集中的排放。

- 选定流：前景物质和环境介质特定基本流
- 流属性/单位：Mass / kg
- 数量规则：监测或按许可证方法计算的直接排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_release_records`
- 来源：

### 过程：电子、显示、通信和电源接口装配（`electronics_assembly`）

#### 输入

##### 产品流

###### 电子元件和裸印刷电路板（`electronic_parts_input`）

按供应商、零件号、质量和合规状态记录裸板、已贴装或分立电子元件、连接器、电缆和带固件模块。

- 选定流：前景供应商特定电子元件和印刷电路板
- 流属性/单位：Mass / kg
- 数量规则：发往生产的合格电子零件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行电子式仪表
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics_bom`
- 来源：`eu-rohs-2011-consolidated-2026`

###### 显示、通信和电源接口部件（`display_communication_power_input`）

记录销售配置包含的显示器或指示器、键盘、通信硬件、天线、端子、电源调理部件、一体式电池以及外部电源附件；未安装时明确记录缺省状态。

- 选定流：前景供应商特定显示、通信和电源接口部件
- 流属性/单位：Mass / kg
- 数量规则：按销售配置获得合格部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行电子式仪表
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics_bom`
- 来源：`abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023`

###### 焊料、清洗剂和电子装配辅助材料（`electronics_auxiliaries`）

从领用和退库记录中采集焊料、助焊剂、清洗剂、胶黏剂、敷形涂层及其他装配辅助材料。

- 选定流：前景材料特定电子装配辅助材料
- 流属性/单位：Mass / kg
- 数量规则：领用量减经核实退库量和单独回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每合格电子模块产出，再折算到每 1 kg 放行仪表
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_issue_and_return`
- 来源：

###### 电子装配电力和公用工程（`electronics_energy`）

记录电路板贴装、焊接、清洗、涂覆、检验和编程的计量电力及公用工程。

- 选定流：前景场址特定电力和公用工程流
- 流属性/单位：能量或载能体特定属性 / 计量单位
- 数量规则：可归属于电子装配的计量或分表消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每合格电子模块产出，再折算到每 1 kg 放行仪表
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`siemens-sitrans-lr250-epd-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格电子模块（`accepted_electronics_module`）

记录转入仪表装配的合格已贴装电路板、显示、通信和电源接口组件质量及配置。

- 选定流：前景合格电子模块
- 流属性/单位：Mass / kg
- 数量规则：转入装配的合格模块质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每合格电子模块产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics_bom`
- 来源：

##### 废物流

###### 电子装配废物（`electronics_assembly_waste`）

按处理路线分别记录不合格电路板和元件、焊料残渣、废清洗材料及其他电子废物。

- 选定流：前景废物特定电子输出至处理
- 流属性/单位：Mass / kg
- 数量规则：可归属于电子装配的称量或有凭证废物发运量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行电子式仪表
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-weee-2012-consolidated-2024`

##### 基本流

### 过程：仪表装配、连接与密封（`instrument_assembly`）

#### 输入

##### 产品流

###### 合格敏感、过程接触和壳体部件（`assembly_component_input`）

将合格敏感或测量机构、过程接触和连接部件、壳体、密封件及紧固件转入装配，并保留配置身份。

- 选定流：前景合格机械和敏感部件组
- 流属性/单位：Mass / kg
- 数量规则：发往最终装配的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`abb-pgs300-epd-2024`

###### 合格电子、显示、通信和电源模块（`assembly_electronics_input`）

电子式配置转入合格电子模块，并保留显示、通信、输出和供电属性。机械式配置应记录 `not_fitted` 和零质量，不得选择代理模块。

- 选定流：前景合格电子模块或有凭证未安装状态
- 流属性/单位：Mass / kg
- 数量规则：销售配置的实测安装质量；仅对有凭证机械式或非电子配置记零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics_bom`
- 来源：`iec-62828-1-2026`

###### 装配耗材和能源（`assembly_consumables_energy`）

记录物料清单未计入的胶黏剂、密封剂、润滑剂、紧固件以及电力、压缩空气和其他装配资源。

- 选定流：前景材料或载能体特定装配投入
- 流属性/单位：载能体特定属性 / 实测单位
- 数量规则：可归属于所纳入生产的领用耗材和计量装配能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每实测装配仪表产出，再折算到每 1 kg 放行仪表净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：`abb-pgs300-epd-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待校准装配仪表（`assembled_instrument`）

记录校准前完整装配仪表的质量、配置代码、连接、外壳、电子、显示或通信以及供电安排。

- 选定流：前景待校准装配仪表
- 流属性/单位：Mass / kg
- 数量规则：转入校准的实测装配仪表质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每装配仪表产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_output`
- 来源：

##### 废物流

###### 装配不合格品和材料废物（`assembly_waste`）

按材料和处理路线分别记录不再返工的不合格品、修边密封件、胶黏剂容器、清洗废物和其他装配废物。

- 选定流：前景废物特定装配输出至处理
- 流属性/单位：Mass / kg
- 数量规则：可归属于装配的称量废物和处置记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

### 过程：配置、校准与功能测试（`calibration_and_testing`）

#### 输入

##### 产品流

###### 提交校准的装配仪表（`calibration_instrument_input`）

对每台提交仪表或统计合理的批次记录序列号或批次身份、被测变量类别、测量原理、量程、准确度要求、接触模式、过程连接、防护等级和电子配置。

- 选定流：前景待校准装配仪表
- 流属性/单位：Mass / kg
- 数量规则：实测提交仪表质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每校准批次，再折算到每 1 kg 放行仪表净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_records`
- 来源：`iec-62828-1-2026`

###### 校准介质、服务和测试能源（`calibration_media_energy`）

记录实际消耗的电力、压力或真空发生、液体或气体测试介质、参考仪器服务，以及泄漏、承压完整性或外壳测试资源。

- 选定流：前景载能体、介质或服务特定校准投入
- 流属性/单位：载能体或介质特定属性 / 实测单位
- 数量规则：可归属于合格和不合格测试的计量消耗或试验台记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每测试件或批次，再折算到每 1 kg 放行仪表净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_records`
- 来源：`iec-62828-1-2026`; `iec-60529-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经校准合格仪表（`calibrated_instrument`）

记录最终配置、校准方法与引用、测试点、验收限值、结果、不确定度或准确度等级、校准日期和合格质量。送返工的不合格单元仍属内部流，不计入放行产品。

- 选定流：前景经校准合格完整仪表
- 流属性/单位：Mass / kg
- 数量规则：具有通过校准和工厂验收记录的仪表实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每合格校准产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_records`
- 来源：`iec-62828-1-2026`

##### 废物流

###### 废校准介质和不可返工测试不合格品（`calibration_waste`）

按实测数量和处理路线记录排放测试介质和不可返工单元；可重复使用或循环介质只记录跨越边界的净补充量和处置量。

- 选定流：前景废物特定校准或测试输出
- 流属性/单位：介质特定属性 / 实测单位
- 数量规则：净排放测试介质和称量的不可返工不合格品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

### 过程：包装与工厂门放行（`packaging_and_release`）

#### 输入

##### 产品流

###### 经校准仪表投入（`packaging_instrument_input`）

只有通过校准和验收的仪表才转入包装。

- 选定流：前景经校准合格完整仪表
- 流属性/单位：Mass / kg
- 数量规则：转入包装的实测合格仪表质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_output`
- 来源：

###### 外部分销包装（`packaging_material_input`）

按材料和质量记录纸箱、纸张、薄膜、泡沫、托盘、标签、说明书、干燥剂和其他包装；其质量不计入产品净参考质量。

- 选定流：前景材料特定包装投入
- 流属性/单位：Mass / kg
- 数量规则：放行产品的包装 BOM 质量和领用数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 来源：`abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023`

###### 包装作业能源（`packaging_energy`）

记录计量或分配的包装线电力和公用工程。

- 选定流：前景场址特定电力或公用工程流
- 流属性/单位：能量或载能体特定属性 / 计量单位
- 数量规则：计量包装消耗或按物理关系分配的共享消耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行成品仪表参考输出（`released_finished_instrument`）

这是完整、经校准、可销售的仪表，也是唯一参考输出。数量由实测产品净质量归一化；外部包装单独报告。

- 选定流：测量或检验液体或气体的流量、界位、压力或其他变量的仪器和装置，导航、水文或气象仪器及装置除外，供气或供液中用的表计及自动调节或控制仪器及装置 `7af33061-607c-44d5-bafb-cb4efe98f0ec`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将实测放行产品净质量和全部纳入的前景数量除以实测放行产品净质量，使参考输出等于 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_output`
- 来源：

##### 废物流

###### 包装线废物（`packaging_waste`）

按材料和处理路线分别记录边角料、损坏包装和不合格标签或说明书。

- 选定流：前景废物特定包装输出至处理
- 流属性/单位：Mass / kg
- 数量规则：可归属于放行产品的称量或有凭证包装废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行仪表净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | multi_product_manufacturing | 只要仪表和生产记录允许，应按生产线、型号、配置、批次或时间段分开部件制造、电子装配、仪表装配、校准和包装记录，以避免分配。 | `abb-pgs300-epd-2024` |
| `allocation_physical_fallback` | shared_energy_auxiliaries_and_waste | 无法细分时，按因果物理驱动分配共享电力、公用工程、辅助材料和废物：优先采用计量机器时间或能源，其次采用合格加工时间、部件质量或放行产品质量；披露驱动因素，并对重要共享负荷开展敏感性测试。经济分配不是默认方法。 | `abb-pgs300-epd-2024` |
| `allocation_rework_and_scrap` | rework_scrap_and_recycling | 将返工负荷归回造成返工的配置。废物处理归于产生过程，工厂门数据集内部不给回收材料抵扣；任何回收替代或收益应属于明确声明的下游情景。 | `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023` |
| `allocation_no_controller_service_credit` | measurement_service_benefits | 不得以仪表可能带来的过程能源、水、安全或控制系统收益抵扣其制造负荷；此类避免影响声明应属于单独的后果型或下游系统研究。 | `iec-62828-1-2026` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_supply_and_manufacture` | 敏感机构、过程接触件、壳体和留存部件 | ERP BOM、图纸、接收和称量记录 | 型号；配置；部件组；供应商；零件号；材料；接液状态；接触模式；过程连接；IP 配置；来源；数量；单位质量；合格质量 | 导出受版本控制 BOM，并将抽样或生产称量与合格接收和产品净质量核对 | kg 和 item | 每次 BOM 修订和每个报告期 | 与放行生产相同期间 | 每一制造场址和配置族 | 按部件组和配置汇总合格质量；仅在配置分别核对后按生产质量加权 | 批准 BOM 版本、供应商规范、秤校准、进货检验和质量平衡签字 |
| `cp_material_issue_and_return` | `component_supply_and_manufacture` | 厂内原材料、制造和装配辅助材料 | 仓储领用、退库和批次记录 | 材料 id；批号；领用质量；退库质量；回收质量；过程；批次；日期 | 将领用量与退库、回收量和废物处置核对 | kg 或材料特定单位 | 每批次，按月汇总 | 至少一个代表性年度或完整较短生产期 | 每个报告场址和所纳入作业 | 净投入等于领用减经核实退库和单独回收量，并归一化到合格过程产出 | 库存交易轨迹和批次核对 |
| `cp_inbound_transport` | `component_supply_and_manufacture` | 部件和材料进厂运输 | 货运、供应商和承运人记录 | 供应商来源；目的地；部件组；货运质量；方式；路线距离；已知时的装载率；嵌入运输标志 | 使用实际承运距离和方式；只有披露时才估计路线，并防止与供应商数据集重复计算 | kg、km、tkm | 每票货运或供应商路线 | 与部件接收相同期间 | 通往每个报告场址的全部主要供应商路线 | 按方式汇总质量距离并归一化到合格部件或放行产品质量 | 提单、承运记录、供应商发票和路线方法 |
| `cp_process_energy` | all_processes | 电力、燃料、压缩空气、工艺水和公用工程 | 仪表、分表、发票和设备日志 | 载能体；仪表 id；期初和期末读数；单位；过程；运行时间；生产产出；分配驱动 | 优先过程分表；与场址发票核对，并按第 7 节分配剩余共享消耗 | 载能体特定计量单位 | 连续或每批次，按月汇总 | 至少一个代表性年度或完整较短生产期 | 每个报告场址和过程 | 按过程汇总消耗并归一化到合格过程产出，再归一化到参考流 | 仪表校准、发票核对和分配工作表 |
| `cp_electronics_bom` | `electronics_assembly` | 电子、显示、通信和电源接口部件 | 电子 BOM、拣料单、供应商声明和检验记录 | 配置；PCB id；元件 id；供应商；材料或声明组成；数量；单位质量；显示；通信；供电安排；一体式电池；RoHS 状态 | 导出配置特定电子 BOM，核对拣料数量和合格模块质量，并保留合规声明 | kg 和 item | 每次电子 BOM 修订和每个报告期 | 与电子式仪表生产相同期间 | 每个电子装配场址和配置 | 按模块角色汇总合格安装质量；机械式配置记录未安装状态 | BOM 版本、供应商声明、拣料单核对和合格模块称量 |
| `cp_assembly_records` | `instrument_assembly` | 装配部件、耗材和装配产出 | 工单、领用记录、产线日志和称量记录 | 配置；序列号或批次；领用部件质量；耗材数量；装配质量；返工；不合格；运行时间 | 将领用零部件和耗材关联到装配产出并保留配置属性 | kg、item、hour 和载能体特定单位 | 每批次或工单 | 与放行生产相同期间 | 每条装配线和场址 | 按配置汇总并归一化到合格装配质量，再归一化到放行净质量 | 工单关闭、校准秤、返工日志和主管签字 |
| `cp_calibration_records` | `calibration_and_testing` | 校准、功能、密封和防护测试及其资源 | 校准证书、试验台日志、参考仪器记录和仪表读数 | 序列号或批次；变量类别；原理；量程；测试点；参考标准；参考仪器 id 和有效性；验收限；结果；不确定度或准确度等级；校准日期；介质；能源；泄漏或完整性测试；IP 测试依据；返工状态 | 采集数字试验台输出或受控证书，并将全部消耗介质和能源关联到测试及合格产品 | item、kg 和测试或载能体特定单位 | 每台产品，除非采用有依据的批次方案 | 与放行生产相同期间 | 每个校准和测试工位 | 分别计数合格、返工和不合格产品；将资源归一化到合格质量，不丢弃失败测试负荷 | 可追溯证书、参考仪器状态、受控程序和测试系统审计轨迹 |
| `cp_waste_records` | all_processes | 制造、电子、装配、校准和包装废物 | 废物秤、容器日志、联单和处理发票 | 过程；废物类型；材料；危险状态；质量；日期；目的地；处理路线；回收量 | 尽可能按过程称量，并将发运质量与处理文件核对 | kg 或介质特定单位 | 每个容器或每票发运，按月汇总 | 与生产相同期间 | 每个报告场址和过程 | 按废物类型和处理路线汇总；共享容器按有凭证质量贡献分配 | 校准秤、废物联单、发票和危险废物分类 |
| `cp_direct_release_records` | `component_supply_and_manufacture` | 对空气、水或土壤的直接排放 | 连续监测、实验室结果、许可证计算和运行日志 | 物质；环境介质；浓度；流量；持续时间；计算方法；过程；日期 | 根据实测浓度和流量或批准许可证方法计算排放；不得扣除已作为技术系统处理流表示的内容 | kg 或物质特定单位 | 许可证或监测频率 | 与所纳入作业相同期间 | 每个报告场址的每个排放点 | 按环境介质汇总物质并归一化到放行净质量 | 校准、实验室 QA、许可证方法和计算工作表 |
| `cp_reference_output` | `packaging_and_release` | 合格仪表净产出和配置混合 | 放行、序列号、生产和经校准称量记录 | 型号；配置；变量类别；接触模式；架构；过程连接；IP 等级；电子；显示；通信；电源；校准状态；件数；净质量；包装质量；场址；日期 | 只汇总通过验收的放行仪表；分别称量或计算仪表净质量和包装质量 | kg 和 item | 每个放行批次，按月汇总 | 与全部前景投入相同期间 | 每个报告场址和配置 | 将全部纳入前景数量除以放行产品净质量；按生产质量加权配置清单 | 校准秤、放行记录、校准验收和包装 BOM 核对 |
| `cp_packaging_bom` | `packaging_and_release` | 外部分销包装 | 包装 BOM、领用和放行记录 | 材料；包装部件；数量；单位质量；有证据时的再生含量；放行批次；废物 | 将包装领用与已包装产出和单独收集的包装废物核对 | kg 和 item | 每次包装修订和每个报告期 | 与放行生产相同期间 | 每个包装场址和配置 | 按材料汇总每净 kg 放行产品的包装质量 | 包装规范、秤校准、领用记录和供应商声明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 纳入的前景数量 / 放行合格仪表实测净质量 | 纳入数量；放行产品净质量 | 每 1 kg 放行仪表净质量的数量 |  |
| `calc_component_mass_balance` | 产品 BOM | 质量平衡残差 = 放行产品净质量 - 留存部件组质量之和；应调查残差，不得静默分配任何材料残差 | 产品净质量；敏感机构；过程接触件；壳体；电子；显示/通信；电源部件；密封件；紧固件；涂层；填充液；其他留存材料 | 部件质量平衡残差和核对状态 | `abb-pgs300-epd-2024` |
| `calc_item_to_mass` | 按件生产记录 | 每 kg 数量 = 同一型号、批次、场址和期间按件总量 / 放行实测净质量 | 按件数量；放行件数；放行净质量 | 每 kg 放行仪表净质量的数量 |  |
| `calc_transport_service` | 进厂运输 | 吨公里 = 货运质量（吨）× 实际路线距离（公里）；按方式汇总并避免与嵌入供应商运输重复 | 货运质量；路线距离；运输方式；嵌入运输标志 | 每 kg 放行仪表净质量按方式的 tkm | `abb-pgs300-epd-2024` |
| `calc_configuration_mix` | 多配置数据集 | 混合清单 = 各配置清单 × 其经核实生产净质量份额之和；不得使用销售价值或未加权型号数量 | 配置特定清单；配置生产净质量 | 按生产质量加权的混合清单 | `abb-pgs300-epd-2024` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | 参考产品 | 证明每项参考输出是完整 CPC 48252 仪表，而不是排除的贸易计量表、自动控制器、仪器类别或单独敏感元件或零件。 | 产品规范、功能说明、配置代码和放行产品检验 |
| `dq_configuration_completeness` | 产品族和配置混合 | 为每个配置保留被测变量、接触模式、机械/电子架构、测量原理与量程、介质、敏感/接液材料、壳体、过程连接、防护等级、电子、显示/通信、供电和校准属性。 | 受版本控制 BOM、图纸、技术规范、校准记录和配置加权文件 |
| `dq_mass_balance` | 部件、废物和产出 | 将留存部件组质量与实测产品净质量核对，并将领用材料与产品、退库、回收材料和废物核对；调查材料残差。 | 校准称量记录、BOM 核对和废物联单 |
| `dq_temporal_site_match` | 前景记录 | 生产产出、能源、材料、校准资源、废物和包装采用同一场址和报告期；披露替代以及不具代表性的停产或投产期间。 | 仪表期间、生产台账、场址标识和代表性说明 |
| `dq_calibration_traceability` | 校准与测试 | 将合格产品关联到受控校准或测试记录、参考仪器有效性、验收限、结果和日期；没有配置或批次关联的通用证书不充分。 | 校准证书、参考仪器状态和试验台审计轨迹 |
| `dq_electronics_and_substances` | 电子式配置 | 采集配置特定电子/显示/通信/电源 BOM 及适用危险物质合规证据；不得将电子式仪表表示为通用机械装置。 | 电子 BOM 和供应商声明，包括适用 RoHS 证据 |
| `dq_proxy_disclosure` | 上游和背景数据集 | 识别每个代理及其代表的部件/材料/技术、地域、时间和质量份额；供应商特定证据可用时替换重要代理。 | 数据集映射登记和代理理由 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope_gate` | reference_product | 若参考输出为贸易或公用事业供应计量表、自动调节或控制装置、导航/水文/气象或物理/化学分析仪器、单独传感器或换能器、零件、模块或附件，则拒绝数据集。 | `iec-62828-1-2026` |
| `validation_reference_identity` | reference_flow | 要求产品流 `7af33061-607c-44d5-bafb-cb4efe98f0ec`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，以及不含外部包装的 1 kg 实测放行产品净质量。 |  |
| `validation_required_qualifiers` | dataset_metadata | 任一必需的被测变量、接触模式、架构、测量原理/量程、介质、敏感/接液材料、壳体、过程连接、防护、电子、显示/通信、供电、校准、场址、质量或包装限定信息缺失时，完整性校验失败。 | `iec-62828-1-2026`; `iec-60529-2013`; `abb-pgs300-epd-2024` |
| `validation_complete_bom` | component_inventory | 要求明确的敏感或测量机构、过程接触硬件、壳体、电子、显示/通信、电源接口及其他留存部件记录；不适用电子组使用有凭证的未安装状态；要求部件质量与产品净质量核对。 | `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023` |
| `validation_process_coverage` | process_inventory | 要求部件供应、仪表装配、校准/测试和包装；声明路线实际开展厂内部件和电子作业时也应纳入，并将能源、辅助材料和废物关联到前景协议。 | `abb-pgs300-epd-2024` |
| `validation_calibration_acceptance` | released_output | 只有通过配置特定校准和工厂验收的仪表才计入放行产出；在生产期间保留失败测试的能源、介质、返工和处置负荷。 | `iec-62828-1-2026` |
| `validation_no_double_counting` | upstream_and_downstream | 拒绝重复计入已嵌入上游数据集的部件生产或运输，也拒绝工厂门清单嵌入未披露的使用、维护或报废负荷。 | `abb-pgs300-epd-2024`; `siemens-sitrans-lr250-epd-2023` |
| `validation_electronic_end_of_life_disclosure` | downstream_profile | 对电子式配置，要求下游使用者披露适用的分类收集、危险物质和处理假设，不得把仪表视为未分类城市废物。 | `eu-rohs-2011-consolidated-2026`; `eu-weee-2012-consolidated-2024`; `siemens-sitrans-lr250-epd-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整经校准仪表的从摇篮到工厂大门生产数据集，包含配置特定或按生产质量加权的前景证据 |
| downstream_use | 过程仪表制造的 secondary_dataset 或 background_dataset；作为增加明确分销、运行用电、维护/再校准、更换和报废情景的生命周期模型投入 |
| allowed_use | 声明范围和配置混合内的完整仪表；仅当参考量、边界、地域、技术、变量/接触/架构混合、连接/防护、电子/电源和数据质量等同时才能比较 |
| excluded_use | 单独传感器或零件；贸易或公用事业计量表；自动控制器；排除的仪器类别；避免过程能源、水或安全影响的声明；未披露混合工厂门与使用/报废负荷 |
| required_metadata | PCR id；产品流 UUID；场址；地域；期间；被测变量/接触/架构和原理混合；预定介质；敏感/接液和壳体材料；过程连接；IP 或其他防护等级及依据；电子/显示/通信/供电配置；校准与验收依据；净质量；包装质量；生产路线；分配；上游数据集和代理登记 |
| required_quality_disclosure | BOM 与质量平衡覆盖；仪表和秤校准；配置加权；校准可追溯性；供应商与运输覆盖；代理质量份额；废物和直接排放覆盖；下游电子式配置适用 RoHS/WEEE 假设 |
| update_trigger | BOM、敏感原理、接液或壳体材料、过程连接、防护等级、电子/显示/通信/电源设计、校准路线、制造场址或能源供应变化；重要供应商或运输变化；配置混合转移；新的前景期间；或适用标准/法律要求修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-62828-1-2026` | standard | IEC 62828-1:2026, Reference conditions and procedures for testing industrial and process measurement transmitters — Part 1: General procedures for all types of transmitters, https://webstore.iec.ch/en/publication/86735（检索日期 2026-08-09） | 完整变送器范围；压力/液位/流量及模拟/数字分型；校准与性能测试记录 |
| `iec-60529-2013` | standard | IEC 60529:1989+A1:1999+A2:2013, Degrees of protection provided by enclosures (IP Code), https://webstore.iec.ch/en/publication/2452（检索日期 2026-08-09） | 外壳防护配置和声明依据 |
| `abb-pgs300-epd-2024` | dataset | ABB, Pre-Certified Environmental Product Declaration: PGS300 Gauge Pressure Transmitter, 9AAU00000000030 EN 03-2024, https://library.e.abb.com/public/a89aadb4c1954668a80dbb7f76dbb5a8/EPD%20Declaration.pdf（检索日期 2026-08-09） | 部件和配置组；敏感机构、过程连接、壳体、显示与通信声明；制造/装配边界；前景 BOM、能源、运输、废物和质量平衡证据；分配方法示例 |
| `siemens-sitrans-lr250-epd-2023` | dataset | Siemens, Environmental Product Declaration: SITRANS LR250, DI_PA_EPD30008.01, 26 September 2023, https://support.industry.siemens.com/cs/attachments/109962931/LR2000B0_LR250-EPDecl-Siemens-DI_PA_EPD30008.01-Sept_26_2023.pdf（检索日期 2026-08-09） | 非接触雷达液位仪表示例；产品与包装分离；制造/使用/报废边界；优先初级数据和报废处理披露 |
| `eu-rohs-2011-consolidated-2026` | official_guidance | European Union, Directive 2011/65/EU on restriction of hazardous substances in electrical and electronic equipment, consolidated version current 2026-07-01, http://data.europa.eu/eli/dir/2011/65/2026-07-01（检索日期 2026-08-09） | 工业监测仪表的电子部件物质和合规证据 |
| `eu-weee-2012-consolidated-2024` | official_guidance | European Union, Directive 2012/19/EU on waste electrical and electronic equipment, consolidated version 2024-04-08, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:02012L0019-20240408（检索日期 2026-08-09） | 电子监测仪表的分类收集和下游处理披露 |
