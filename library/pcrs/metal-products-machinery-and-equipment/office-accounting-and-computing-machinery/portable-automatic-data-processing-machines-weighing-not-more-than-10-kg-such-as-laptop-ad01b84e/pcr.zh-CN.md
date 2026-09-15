---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.portable-automatic-data-processing-machines-weighing-not-more-than-10-kg-such-as-laptop-ad01b84e
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 重量不超过 10 kg 的便携式自动数据处理机

## 1. 范围与适用性

本 PCR 适用于设备净质量不超过 10 kg 的完整便携式自动数据处理机，包括膝上型电脑、笔记本电脑、超便携笔记本电脑、加固型笔记本、移动工作站、移动瘦客户端，以及键盘与显示部分作为一件集成成品交付的二合一笔记本。它可支持型号特定、产品家族、工厂平均和按产量加权的前景数据包，但每个数据包都必须代表可投放市场的完整设备，不得以裸主板或单个零部件代替。

本 PCR 覆盖从摇篮到坟墓的产品系统：材料和零部件供应、入厂运输、总装、固件加载、测试、不合格品、包装和配送；所有相关功耗模式下的运行；适用时的维护、维修、再使用或翻新；以及收集、拆解、回收和处置。本 PCR 不预设单一物料清单、制造地点、使用寿命、使用负荷或报废率；这些数量取决于产品、场址、市场和情景，必须采集并披露。

不带集成实体键盘的独立平板或触控板、台式电脑、一体式台式电脑、计算机系统、服务器、电话、独立显示器，以及归入本便携式整机边界之外的自动数据处理单元均不在范围内。主板、印刷电路板组件、显示屏、电池、充电器、键盘、存储设备、机壳及其他部件或附件只能作为整机输入，不能代替参考产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.portable-automatic-data-processing-machines-weighing-not-more-than-10-kg-such-as-laptop-ad01b84e |
| classification_refs | CPC 3.0 45220，精确范围引用 |
| covered_products | 不超过 10 kg 的完整便携式自动数据处理机，包括膝上型电脑、笔记本电脑、超便携笔记本电脑、加固型笔记本、移动工作站、移动瘦客户端，以及作为集成成品交付的二合一笔记本 |
| excluded_products | 用单个型号代理整个类别；裸主板或 PCBA；显示屏、电池、充电器、键盘、存储单元、机壳及其他部件；无集成实体键盘的独立触控板或平板；台式机、服务器、计算机系统、电话及 CPC 45220 以外产品 |
| representative_product | 完整便携式计算机的申报型号、产品家族、工厂组合或按产量加权的市场组合；必须披露所代表配置及其权重依据 |
| production_route | 原材料和零部件生产、零部件运输、总装和固件加载、功能与安全测试、包装、配送、使用与维护，以及 WEEE 收集、拆解、回收和处置 |
| market_state | 已完成制造、测试和包装、可销售或交付的便携式计算机，仅包括申报销售配置内的附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由申报产品配置或按产量加权的配置组合所代表的完整便携式自动数据处理设备从摇篮到坟墓的供给 |
| How much | 制造商最后物流平台处 1 kg 成品便携式计算机设备净质量，不含配送包装和消费者包装 |
| How well | 完整、功能正常、经测试且可投放市场的不超过 10 kg 的设备；仅零部件、裸板和非便携式代理均不合格 |
| How long or cycle | 一个申报的参考使用寿命和使用剖面；必须说明 RSL、各功耗模式年小时数、市场电力组合、维护和报废情景 |
| reference_flow_link | 所有过程清单按 1 kg 所选成品参考产品流归一化；按型号或台数记录的数据用实测设备净质量换算 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品设备净质量 |
| 参考产品流 | 重量不超过 10 kg 的便携式自动数据处理机，如膝上型电脑、笔记本电脑和超便携笔记本电脑 `c4cb6070-944d-41be-a231-a0a2b9477174` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 所代表型号、家族或配置组合；按产量加权的方法；设备净质量；纳入的附件和外部电源；显示屏数量、尺寸和技术；CPU、GPU、内存和存储配置；电池化学体系和额定容量；制造与最终装配场址；生产期；目的市场；参考使用寿命及产品寿命依据；默认电源管理设置；实测功耗模式与使用剖面小时数；维护和更换假设；包装组成；配送路线；报废地理范围和情景 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品和所有归一化分母 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量完整配置设备的净质量，不含配送和消费者包装；单独记录纳入的附件和电源，并将所有结果归一化为 1 kg 成品设备净质量。 |
| `unit_to_mass_conversion` | 按台、批次或销售单元采集的记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用配置特定的实测净质量和产量权重换算；除非证明代表性，不得用单一型号质量换算多配置组合。 |
| `bom_mass_reconciliation` | BOM、电池、PCBA、显示屏、机壳和附件记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将零部件和材料质量与设备实测净质量核对；包装单列，并披露库存变化、水分、胶黏剂、涂层和未表征残差。 |
| `operational_energy_measurement` | 活跃、短闲置、长闲置、睡眠、替代低功耗和关机模式 | Energy | kWh | 按 IEC 62623:2022 或同等且可复现的方法测量模式功率，保留测试配置和默认设置，并由实测功率、模式小时数和申报 RSL 计算寿命期电耗。 |
| `transport_service_conversion` | 零部件入厂和产品出厂运输 | Transport service | tkm | 用货运质量、实际距离和路线计算吨公里；披露运输方式、装载率、分配和空运，不得采用无说明的通用距离。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 以配置可解析的 BOM 和产品净质量锚定的、离开最终装配和测试的完整可销售便携式设备；产品系统仍须向上游追溯材料和零部件，并延伸至使用和生命末期 |
| starting_condition_role | 最终装配和测试阶段是前景质量平衡锚点，不是摇篮到厂门的截断点 |
| product_classification_scope | 不超过 10 kg 的便携式自动数据处理整机；独立零部件和其他计算机类别仍是不同的上游或外部产品系统 |
| recursive_input_rule | 同类采购整机必须作为具有自身合规数据集的显式上游产品输入；不得仅为规避递归或重复计算而将其拆分或改标为通用零部件 |
| upstream_dataset_requirement | 所有采购材料、零部件、能源载体、包装和运输均连接有代表性的上游数据集。电池和蓄电池、PCBA、电子显示屏、微处理器、铜及合金、金、银、相关稀土和列明的高相关电子元件不得因截断而删除 |
| disclosure | 披露配置及产量权重、前景场址、供应商数据覆盖、电力建模、BOM 完整性、排除流、分配、配送、RSL 与使用剖面、维修与更换假设，以及报废地理范围和处理情景 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_grave` | 完整产品系统 | 纳入材料开采和零部件生产、运输、装配和测试、包装和配送、使用和维护，以及生命末期收集、拆解、回收和处置。 | `environdec-pcr-2024-06` |
| `boundary_component_completeness` | 产品 BOM 和上游清单 | 无论一般截断筛选结果如何，均纳入电子产品 PCR 识别的所有电池、PCBA、电子显示屏、微处理器及其他高相关材料和零部件。 | `environdec-pcr-2024-06` |
| `boundary_cutoff_disclosure` | 所有排除的清单流 | 使用所有可获得数据。任何截断都须有敏感性或保守的合理性证据，不得掩盖相关负荷，并至少保留能耗、产品内容质量和环境影响各 95% 的覆盖。 | `environdec-pcr-2024-06` |
| `boundary_use_scenario` | 运行电耗、维护和更换 | 按交付默认设置以及申报的使用地理范围和剖面建模；纳入 RSL 内所有相关功耗模式，如纳入 ICT 基础设施电耗则单独披露。 | `environdec-pcr-2024-06`; `iec-62623-2022`; `energy-star-computers-9-0` |
| `boundary_end_of_life` | 废弃设备和更换部件 | 单独收集的 WEEE 须在运输、去污染、拆解、回收和最终处置全过程可见；记录市场特定的收集与处理假设，不得无证据假定回收。 | `environdec-pcr-2024-06`; `eu-weee-2012-19` |
| `boundary_capital_goods` | 基础设施和生产设备 | 排除一般资本品，除非其仅使用一次或少数几次，或与所选通用数据集不可分；披露纳入的基础设施，并在其可能重要时做敏感性测试。 | `environdec-pcr-2024-06` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_supply` | 材料和零部件供应 | required | 始终 | 上游材料、电子元件、电池、显示屏、机壳、附件和入厂物流 | 每 1 kg 成品设备净质量 |
| `assembly_testing` | 最终装配、固件加载和测试 | required | 始终 | 前景生产和质量平衡锚点 | 1 kg 合格成品设备 |
| `packaging_distribution` | 包装和配送 | required | 始终 | 包装生产及向申报市场的交付 | 每 1 kg 已交付成品设备净质量 |
| `use_maintenance` | 使用、维护、维修和更换 | required | 始终；仅在有明确情景证据时，维修、再使用和翻新子活动可为零 | 运行电耗和使用寿命情景 | 每个申报 RSL 和使用剖面，归一化至 1 kg 设备 |
| `end_of_life` | 收集和生命末期处理 | required | 始终 | WEEE 运输、去污染、拆解、回收和处置 | 每 1 kg 进入申报报废情景的设备 |

### 过程：材料和零部件供应（`component_supply`）

#### 输入

##### 产品流

###### 采购材料、零部件和子组件（`purchased_components`）

记录半导体和微处理器、PCB 和 PCBA、显示模块、内存和存储、电芯和电池包、机壳和外壳、键盘和指点设备、线束、冷却系统、扬声器、摄像头、天线、外部电源和申报附件的配置可解析 BOM。供应商数据集保持独立输入，任何部件均不得代替成品参考产品。

- 选定流：产品特定的采购材料、零部件和子组件
- 流属性/单位：Mass / kg
- 数量规则：进入产品系统的供应商 BOM 质量，包括归属于合格产出的不合格品和更换投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_component_records`
- 来源：`environdec-pcr-2024-06`

###### 零部件入厂运输（`inbound_component_transport`）

记录实际供应商至装配场址路线、货运质量、距离、运输方式、燃料和装载率，并将空运保留为显式路线。

- 选定流：入厂货运服务
- 流属性/单位：Transport service / tkm
- 数量规则：货运质量乘以路线距离，并分配至所代表配置
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：运输服务（`transport_service`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply_chain_logistics`
- 来源：`environdec-pcr-2024-06`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 装配场址的合格零部件集合（`qualified_component_set`）

将完整的接收零部件集合以相同 BOM 身份带入最终装配，并显式平衡来料包装。

- 选定流：装配场址的合格材料、零部件和子组件
- 流属性/单位：Mass / kg
- 数量规则：接收零部件质量减去有记录的来料包装和装配前不合格品，并与库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_component_records`
- 来源：`environdec-pcr-2024-06`

##### 废物流

###### 来料包装和不合格零部件（`incoming_supply_waste`）

按材料、危险属性和实际处理路线记录全部来料包装以及不合格或损坏零部件。

- 选定流：供应商包装和不合格零部件废物
- 流属性/单位：Mass / kg
- 数量规则：称量或通过库存平衡核得并送往各处理路线的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_operations_records`
- 来源：`environdec-pcr-2024-06`

##### 基本流

### 过程：最终装配、固件加载和测试（`assembly_testing`）

#### 输入

##### 产品流

###### 合格材料和零部件（`assembly_components`）

记录机械装配、主板集成、电池安装、固件加载和测试消耗的配置特定零部件集合。

- 选定流：装配场址的合格材料、零部件和子组件
- 流属性/单位：Mass / kg
- 数量规则：实际零部件领用量加归属于装配不合格品的替换量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_component_records`
- 来源：`environdec-pcr-2024-06`

###### 装配和测试电力（`assembly_electricity`）

纳入装配、可归属生产的洁净室或环境控制、固件加载、老化以及常规功能或安全测试的电力。

- 选定流：场址电力供应
- 流属性/单位：Energy / kWh
- 数量规则：装配和测试实测电量，在计入不合格品后分配给合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_operations_records`
- 来源：`environdec-pcr-2024-06`

###### 装配辅料和水（`assembly_auxiliaries`）

记录焊料和助焊剂、胶黏剂、清洗剂、工艺气体、润滑剂、压缩空气、冷却与清洗用水以及其他跨越前景边界的消耗品。

- 选定流：场址特定的装配辅料和水
- 流属性/单位：Mass, volume or energy / declared unit
- 数量规则：按物质和用途实测、采购或库存平衡得到的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_operations_records`
- 来源：`environdec-pcr-2024-06`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 便携式自动数据处理成品机（`finished_portable_computer`）

这是唯一参考产品输出。它是完整、经测试且可投放市场的便携式计算机；除非数据集明确声明型号特定范围，否则不得用单一型号代理整个类别。

- 选定流：重量不超过 10 千克的便携式自动数据处理机，如笔记本电脑、笔记本和次级笔记本电脑 `c4cb6070-944d-41be-a231-a0a2b9477174`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：装配不合格品之后 1 kg 合格成品设备净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 装配不合格品和生产废物（`assembly_rejects`）

按实际处理路线记录不合格成品、缺陷部件、焊渣、废料、废水和其他生产废物；纳入生产不合格品消耗的投入和能源。

- 选定流：按材料和处理路线划分的装配不合格品和生产废物
- 流属性/单位：Mass / kg
- 数量规则：称量的废物和不合格品记录，与 BOM、采购、产出和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_operations_records`
- 来源：`environdec-pcr-2024-06`

##### 基本流

###### 场址直接排放（`assembly_direct_emissions`）

记录装配和测试中向空气、水和土壤的实测或许可支持排放；不得重复上游数据集已包含的基本流。

- 选定流：场址特定基本排放
- 流属性/单位：Substance-specific / declared unit
- 数量规则：按物质实测、监测或质量平衡推导的直接排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_operations_records`
- 来源：

### 过程：包装和配送（`packaging_distribution`）

#### 输入

##### 产品流

###### 进入包装的成品设备（`equipment_for_packaging`）

将相同成品身份和净质量带入包装，不把包装计入参考质量。

- 选定流：重量不超过 10 千克的便携式自动数据处理机，如笔记本电脑、笔记本和次级笔记本电脑 `c4cb6070-944d-41be-a231-a0a2b9477174`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 成品设备净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

###### 配送和消费者包装（`product_packaging`）

按材料和质量记录每层包装，包括托盘或按货运分配的可重复使用运输包装。

- 选定流：产品特定包装材料
- 流属性/单位：Mass / kg
- 数量规则：按材料实测包装质量，并在适用时按重复使用次数分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_distribution_records`
- 来源：`environdec-pcr-2024-06`

###### 出厂配送运输（`outbound_distribution_transport`）

使用实际路线或按销量加权的市场情景，表示从制造商最后物流平台到销售点或使用点的运输。

- 选定流：出厂货运服务
- 流属性/单位：Transport service / tkm
- 数量规则：包装后货运质量乘以路线距离，并分配至设备净质量参考流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已交付成品设备净质量
- 基准类型：运输服务（`transport_service`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_distribution_records`
- 来源：`environdec-pcr-2024-06`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已交付便携式计算机（`delivered_portable_computer`）

记录相同完整设备配置向申报市场的交付；包装仍为单独流。

- 选定流：重量不超过 10 千克的便携式自动数据处理机，如笔记本电脑、笔记本和次级笔记本电脑 `c4cb6070-944d-41be-a231-a0a2b9477174`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：交付至使用地理范围的 1 kg 成品设备净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 使用点包装废物（`packaging_waste`）

记录目的市场中配送和消费者包装的收集与处理。

- 选定流：按材料和处理路线划分的包装废物
- 流属性/单位：Mass / kg
- 数量规则：将包装质量分配给市场特定的再使用、回收、能量回收和处置路线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 已交付成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_distribution_records`
- 来源：`environdec-pcr-2024-06`

##### 基本流

### 过程：使用、维护、维修和更换（`use_maintenance`）

#### 输入

##### 产品流

###### 已交付设备（`equipment_in_use`）

使用申报配置或按产量加权的组合，并保留交付时默认电源管理设置和所含附件。

- 选定流：重量不超过 10 千克的便携式自动数据处理机，如笔记本电脑、笔记本和次级笔记本电脑 `c4cb6070-944d-41be-a231-a0a2b9477174`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入申报 RSL 的 1 kg 成品设备净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

###### 运行电力（`use_electricity`）

测量相关模式功率并结合模式小时数、RSL 和市场电力组合。不得用 ENERGY STAR 合格限值代替实测活动数据。

- 选定流：申报使用市场的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：各模式实测功率乘以相应小时数和 RSL 后求和，包括充电损耗和申报外部附件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个申报 RSL 和 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_use_profile_power_tests`
- 来源：`environdec-pcr-2024-06`; `iec-62623-2022`; `energy-star-computers-9-0`; `eu-reg-617-2013`

###### 维护和更换投入（`maintenance_replacements`）

记录实际或有情景支持的电池、外部电源、存储设备、显示屏、键盘及其他维修部件更换，并记录维修运输和能源。

- 选定流：产品特定的维护和更换投入
- 流属性/单位：Mass, energy or transport service / declared unit
- 数量规则：RSL 内事件次数乘以实测部件、能源和路线数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个申报 RSL 和 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_use_profile_power_tests`
- 来源：`environdec-pcr-2024-06`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### RSL 内的便携式计算功能（`portable_computing_function`）

记录申报产品配置在所述 RSL 和使用条件下提供预期便携式计算功能；不对这一宽类别推断通用性能评分。

- 选定流：申报的便携式计算功能
- 流属性/单位：Service / declared RSL
- 数量规则：所代表配置组合的一个申报 RSL
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_use_profile_power_tests`
- 来源：`environdec-pcr-2024-06`

##### 废物流

###### 更换部件和废弃设备（`discarded_equipment_and_parts`）

记录每个更换部件和离开使用阶段的完整设备的质量、时间和去向，并保留电池和危险部件身份。

- 选定流：废弃便携式设备和更换电子部件
- 流属性/单位：Mass / kg
- 数量规则：实测部件质量和设备质量，分配到有记录的收集路线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个申报 RSL 和 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`environdec-pcr-2024-06`; `eu-weee-2012-19`

##### 基本流

### 过程：收集和生命末期处理（`end_of_life`）

#### 输入

##### 产品流

##### 废物流

###### 已收集 WEEE 和更换部件（`collected_weee`）

表示为准备再使用或适当处理而单独收集的完整设备和更换部件；未收集比例仍显式分配到申报处置情景。

- 选定流：已收集的便携式计算机 WEEE 和更换部件
- 流属性/单位：Mass / kg
- 数量规则：情景比例乘以废弃设备和部件质量，并保留收集地理范围和证据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每个申报 RSL 和 1 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`environdec-pcr-2024-06`; `eu-weee-2012-19`

##### 基本流

#### 输出

##### 产品流

###### 可再使用零部件和回收材料（`recovered_products`）

仅记录到达有证据替代点并满足技术、法律、市场和环境标准的零部件和材料；潜在替代收益单独报告。

- 选定流：按实际输出类别划分的可再使用零部件和回收材料
- 流属性/单位：Mass / kg
- 数量规则：到达替代点的实测处理输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 进入处理的 WEEE
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`environdec-pcr-2024-06`; `eu-weee-2012-19`

##### 废物流

###### 处理残余物和最终处置（`eol_residues`）

记录去污染输出、未回收比例，以及送往危险废物处理、无能量回收焚烧或填埋的残余物。

- 选定流：按材料和去向划分的生命末期处理残余物
- 流属性/单位：Mass / kg
- 数量规则：扣除回收输出后的实测或有情景支持的处理质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 进入处理的 WEEE
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`environdec-pcr-2024-06`; `eu-weee-2012-19`

##### 基本流

###### 处理直接排放（`eol_direct_emissions`）

记录去污染、拆解、热处理和最终处置的直接排放，不重复背景处理数据集已包含的排放。

- 选定流：生命末期基本排放
- 流属性/单位：Substance-specific / declared unit
- 数量规则：按物质列示的设施实测值或代表性处理数据集数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 进入处理的 WEEE
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life_scenario`
- 来源：`eu-weee-2012-19`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享制造、装配、测试和物流 | 在可行时通过细分过程并采集配置、产线、批次或路线特定记录来避免分配。 | `environdec-pcr-2024-06` |
| `allocation_physical` | 具有因果物理关系的不可分共享过程 | 仅在质量、机器时间或能耗等物理基准能反映投入与产出变化，且单位质量或能量收入差异不显著时使用该基准。 | `environdec-pcr-2024-06` |
| `allocation_economic` | 不具合理物理关系的不可分共享过程 | 使用单元过程出口处的代表性经济价值并报告敏感性分析；不得仅因质量数据不便而使用价格。 | `environdec-pcr-2024-06` |
| `allocation_rejects` | 缺陷零部件和不合格成品机 | 将不合格品消耗的材料、零部件负荷、能源和废物处理分配给合格产出；除非有记录的回收输出到达替代点，不得将其作为独立可销售产品分走。 | `environdec-pcr-2024-06` |
| `allocation_waste_substitution` | 再使用、回收和能量回收 | 采用替代点边界：替代前全部处理归废物产生系统，后续加工归下一系统；替代不确定时，保守地将处理保留在所研究产品系统。 | `environdec-pcr-2024-06` |
| `allocation_mass_conservation` | 所有分配过程 | 分配后投入和产出的总和必须等于实测过程总量，不得重复或遗漏；披露分配基准和因子。 | `environdec-pcr-2024-06` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_records` | `component_supply`; `assembly_testing` | 零部件和产品净质量平衡 | 工程 BOM、供应商声明、称量单、ERP 领料和不合格记录 | 配置 id；产量；部件 id；供应商；材料或部件类别；部件质量；单机净质量；附件纳入；电池、PCBA 和显示屏身份；不合格数量；库存变化 | 受控 BOM 导出，与经校准的单机和批次称量及供应商组成证据核对 | kg and item | 每次配置修订和生产批次；至少每年汇总 | 至少一个代表性年份；偏差须说明 | 每个所代表型号、配置和最终装配场址 | 按产量加权各配置，将全部可归属部件质量归一化至合格产出净质量 | 批准的 BOM 版本、校准记录、供应商声明和签署的核对记录 |
| `cp_supply_chain_logistics` | `component_supply` | 入厂运输 | 采购单、提单、货运发票和仓储记录 | 供应商与起点；接收场址；部件质量；路线分段；距离；方式；燃料；装载率；空运标志；可归属仓储能源 | 将货运文件与 BOM 收货记录关联，计算路线特定 tkm | kg, km and tkm | 每次货运或每年更新的代表性线路 | 与所代表产出相同生产期 | 覆盖主要部件及数据集申报供应链质量覆盖的供应商 | 按配置汇总各路线分段 tkm，并按产量加权至 1 kg 产出 | 承运人文件、路线证据、质量核对和覆盖报告 |
| `cp_site_operations_records` | `assembly_testing` | 装配投入、能源、不合格品、废物和直接排放 | 仪表、发票、MES、维护、废物联单和环境监测记录 | 产线和场址；生产时间；台数和净质量；电力；燃料；水；辅料；测试能源；不合格原因和质量；废物类型和去向；直接排放；库存变化 | 有条件时分表计量，否则从场址总量作有记录的因果分配，并与生产核对 | kWh, MJ, kg, m3 and substance-specific units | 连续或发票周期，按月和年汇总 | 至少一个正常运行的代表性年份 | 申报组合中的每个最终装配、固件加载和测试场址 | 汇总可归属运行量并纳入不合格品，按产量加权场址，归一化至 1 kg 合格产出 | 仪表校准、发票、MES 计数、许可、联单和年度质量能源平衡 |
| `cp_packaging_distribution_records` | `packaging_distribution` | 包装和出厂交付 | 包装规范、称量记录、销售发运和货运记录 | 包装组件与材料；质量；重复使用次数；目的市场；货运质量；路线距离；方式；装载率；重新包装和包装处理 | 称量完整包装组并将按销量加权的路线连接到发运配置 | kg, km and tkm | 每次包装修订和货运线路，按年复核 | 代表性销售年份 | 范围内全部包装供应商和目的市场 | 按有记录的使用次数分配可重复包装，并按销售权重将路线结果归一化至 1 kg 设备净质量 | 包装图纸、秤校准、货运证据、销售权重和路线覆盖报告 |
| `cp_use_profile_power_tests` | `use_maintenance` | RSL、模式功率、模式时间、维护和更换 | 认可或受控功率测试、默认设置记录、现场遥测或调查、保修和维修记录 | 配置；操作系统和固件；显示设置；外部电源；电池状态；活跃、短闲置、长闲置、睡眠、替代低功耗和关机功率；模式小时数；RSL；市场；电力组合；维修事件和更换部件 | 按 IEC 62623:2022 或有记录的等效方法测试代表性配置；现场剖面有代表性时优先使用，否则采用披露的默认情景 | W, h/year, kWh, years, item and kg | 每次重大硬件或固件修订；数据集更新时复核使用剖面和 RSL | 说明测试日期和情景期间 | 数据集所代表的配置和使用市场 | 先计算各配置寿命期电耗，再按产量或销量加权至 1 kg 设备；加权前保持市场分开 | 完整测试报告、仪器不确定性、默认设置截图或记录、权重数据和维修证据 |
| `cp_end_of_life_scenario` | `use_maintenance`; `end_of_life` | 收集、再使用、拆解、回收和处置 | 生产者回收、回收商地磅、处理报告、市场统计和监管情景记录 | 地理范围；废弃和收集质量；路线；准备再使用；去污染；拆解投入与产出；回收材料；残余物；危险废物去向；替代证据 | 优先采用运营商质量平衡；否则采用当前市场特定监管情景，显式说明不确定性且不得虚构回收 | kg, km and tkm | 年度运营商数据或情景版本 | 对申报目的市场为当前状态，并与 RSL 情景相容 | 按销量加权范围内全部目的市场 | 在收集和处理全过程守恒质量；按销量或保有量加权情景，回收收益单独报告 | 回收商证明、许可、地磅记录、审计质量平衡、法规和情景溯源 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 可归属活动量除以合格成品设备净质量（kg） | 活动量；合格产出净质量；库存变化；不合格品归属 | 每 1 kg 参考流的活动量 | `environdec-pcr-2024-06` |
| `calc_configuration_weighting` | 产品家族、工厂组合和市场组合数据集 | 先计算各配置，再按合格产量或销量及实测净质量加权；保留权重表和覆盖 | 配置活动量；配置台数；单机质量；场址或市场份额 | 每 1 kg 参考流按产量或销量加权的活动量 | `environdec-pcr-2024-06` |
| `calc_transport_service` | 入厂和出厂物流 | tkm = 货运质量（t）乘以实际路线距离（km），仅按有记录的分配或返程约定调整 | 货运质量；距离；方式；装载率；分配 | 每 1 kg 参考流的路线特定 tkm | `environdec-pcr-2024-06` |
| `calc_lifetime_energy` | 运行电力 | 寿命期 kWh = 各模式实测功率（kW）乘以该模式年小时数后求和，再乘以 RSL；年模式小时数须内部一致，充电或外部电源损耗须遵循测试边界 | 实测模式功率；模式小时数；RSL；配置和市场权重 | 每 1 kg 参考流的寿命期运行电量 | `environdec-pcr-2024-06`; `iec-62623-2022`; `energy-star-computers-9-0`; `eu-reg-617-2013` |
| `calc_mass_balance` | BOM、装配、包装和生命末期处理 | 投入 + 期初库存 = 产品 + 废物 + 直接排放 + 期末库存；调查并披露残差，不得通过静默缩放关键部件消除残差 | 材料和零部件投入；产品产出；废物；排放；库存 | 已核对质量平衡和未解释残差 | `environdec-pcr-2024-06` |
| `calc_eol_scenario_weighting` | 生命末期地理组合 | 按有记录的销量、保有量或回收份额加权收集和处理路线；保守分配未收集和未知比例，替代收益单列 | 市场权重；收集比例；处理投入与产出；替代证据 | 每 1 kg 废弃设备的 WEEE 路线清单 | `environdec-pcr-2024-06`; `eu-weee-2012-19` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 证明为不超过 10 kg 的完整便携式设备，使用精确产品流 UUID 和 Mass 参考；拒绝仅零部件和错误 CPC 代理 | 产品规范、称量记录、配置清单和天工身份引用 |
| `dq_bom_completeness` | 产品内容和包装 | 在可获得时核对产品和包装 100% 总体内容声明，并满足 PCR 最低 95% 的能源、质量和影响覆盖；电池、PCBA、显示屏、微处理器和列明高相关材料不得截断 | BOM 核对、供应商证据、敏感性评估和排除流登记 |
| `dq_specific_data` | 直接控制的制造和物流 | 对受控过程使用场址特定数据，通常至少平均一个代表性年份；按产量加权多个场址，并确认特定数据代表性在五年内 | 仪表和发票记录、产量、确认日期和加权工作底稿 |
| `dq_generic_data` | 上游和背景数据集 | 使用与技术、地理和时间相匹配的归因型选定通用数据；可行时用数据库最新版，参考年通常不早于十年；识别代理数据及贡献 | 数据集元数据、版本、代表性评估和代理贡献报告 |
| `dq_use_measurement` | 运行电耗 | 保留可复现的功率测试配置、不确定性、默认设置、模式定义、模式小时数、RSL 和市场电力组合；不得把认证限值当作实测清单 | IEC 62623 或同等测试报告、ENERGY STAR 9.0 设置记录、使用剖面证据和计算底稿 |
| `dq_market_and_route` | 配送、使用和生命末期 | 地理覆盖须反映实际销售和物理路线；加权前保留空运、不同电力市场和受监管 WEEE 情景 | 销售数据、提单、路线证据、电力组合溯源和报废情景记录 |
| `dq_hazardous_and_circularity` | 产品内容和 WEEE | 保留材料声明，识别安全去污染、再使用和回收所需的电池、危险物质和处理去向 | RoHS 声明、供应商材料声明、处理信息和 WEEE 运营商证据 |
| `dq_uncertainty_and_gaps` | 所有场址特定数量 | 缺少可靠数量时，要求前景采集或将校验标为不确定；不得在可发布数据集中插入无引用点值或推理估计 | 缺口登记、采集请求、不确定性评估和审查决定 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_exact_reference_identity` | 数据集参考流 | 要求 UUID `c4cb6070-944d-41be-a231-a0a2b9477174`、与状态兼容的 Product flow 语义、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；零部件、仅型号家族或错误分类替代均失败。 | `unsd-cpc-3-0` |
| `validate_scope_and_qualifiers` | 前景数据包身份 | 要求不超过 10 kg 的完整便携式设备和所有必需限定信息；产品家族或平均数据集须发布配置清单、权重和覆盖。 | `unsd-cpc-3-0`; `energy-star-computers-9-0`; `eu-reg-617-2013` |
| `validate_reference_mass` | 归一化 | 要求实测设备净质量和单列包装质量；验证所有清单结果复现 1 kg 参考产出且包装未计入产品质量。 | `environdec-pcr-2024-06`; `eu-weee-2012-19` |
| `validate_lifecycle_completeness` | 系统边界 | 要求材料和零部件供应、装配和测试、包装和配送、使用和维护、生命末期阶段；任何为零或省略的活动均须有证据和适用性决定。 | `environdec-pcr-2024-06` |
| `validate_critical_components` | BOM 和上游连接 | 要求显式的电池、PCBA、显示屏和微处理器行，并独立于截断评估铜、贵金属、相关稀土和列明电子材料。 | `environdec-pcr-2024-06` |
| `validate_mass_balance` | 零部件供应、装配、包装和生命末期 | 核对投入、产品、废物、直接排放和库存变化；要求调查并披露残差和不合格品负荷。 | `environdec-pcr-2024-06` |
| `validate_operational_energy` | 使用阶段 | 要求实测模式功率、内部一致的年模式小时数、RSL、默认设置、测试不确定性和市场电力组合；用认证限值代替产品数据的计算须失败。 | `environdec-pcr-2024-06`; `iec-62623-2022`; `energy-star-computers-9-0`; `eu-reg-617-2013` |
| `validate_allocation` | 共享过程和废物处理 | 要求分配层级、因子、守恒总量，以及使用经济分配时的敏感性；回收输出跨越边界前须有替代点证据。 | `environdec-pcr-2024-06` |
| `validate_eol_traceability` | WEEE 情景 | 要求收集地理范围、废弃和收集质量、去污染和处理路线、回收输出、残余物及危险废物去向；不得把未知回收视为零负荷回收。 | `environdec-pcr-2024-06`; `eu-weee-2012-19` |
| `validate_quantity_evidence` | 所有定量清单 | 接受采集记录、连接采集的计算或有引用的外部证据；缺少可靠数量证据时，将检查报告为不确定并要求前景采集，不得虚构范围。 | `environdec-pcr-2024-06` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整便携式自动数据处理设备的产品、家族、工厂或按产量加权的前景数据集 |
| downstream_use | `secondary_dataset`；当配置覆盖、前景证据、分配、使用情景和生命末期情景已针对申报市场审查时可作 `background_dataset` |
| allowed_use | 型号特定产品研究；供应商和组织清单；参考质量、配置覆盖、RSL、使用剖面、地理范围、系统边界和数据质量等效的数据集之间的采购比较；下游 process 和 lifecyclemodel 构建 |
| excluded_use | 把零部件或裸板建模为整机；未声明型号特定范围却用单一窄型号代表该类别；比较不相容的 RSL、性能或配置组合、市场或边界；仅根据本 PCR 声称认证或法规合规 |
| required_metadata | PCR id 和版本上下文；精确参考 UUID；型号或配置清单；产量或销量权重；净质量；所含附件；BOM 和关键部件覆盖；场址和期间；电力与物流溯源；RSL 和模式剖面；维护；包装；报废地理范围；分配；截断；来源和数据集版本 |
| required_quality_disclosure | 可计算时的特定、选定通用和代理数据占比；时间、地理和技术代表性；质量与能源核对；排除流和敏感性；测量不确定性；供应商覆盖；使用和报废情景不确定性；未解决数据缺口 |
| update_trigger | 影响代表质量或主要部件的硬件或 BOM 修订；新 CPU、GPU、显示屏或电池平台；装配场址或电力供应变化；重大固件或默认电源管理变化；产量或销量组合变化；配送、RSL、维护或 WEEE 情景发生实质变化；来源、数据库或前景数据超出所述代表性期间 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0，CPC 45220 结构，https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml，检索于 2026-08-09 | 产品类别范围和分类边界 |
| `environdec-pcr-2024-06` | 标准（`standard`） | International EPD System，PCR 2024:06 Electronic and electric equipment, and electronic components (non-construction)，版本 1.0.1，有效期至 2029-10-28，https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f，检索于 2026-08-09 | 申报或参考单位、从摇篮到坟墓阶段、制造清单、关键部件完整性、截断、分配、数据质量、电力、使用和生命末期规则 |
| `iec-62623-2022` | 标准（`standard`） | IEC 62623:2022，Desktop and notebook computers - Measurement of energy consumption，https://webstore.iec.ch/en/publication/65120，检索于 2026-08-09 | 功耗模式和典型能耗的可复现测量 |
| `energy-star-computers-9-0` | 官方指南（`official_guidance`） | 美国 EPA，ENERGY STAR Program Requirements for Computers，Version 9.0，2025 年 1 月，https://www.energystar.gov/sites/default/files/2025-01/ENERGY%20STAR%20Computers%20Version%209.0%20Final%20Specification.pdf，检索于 2026-08-09 | 笔记本及相关子类型定义、交付配置、默认设置、测试配置和模式能耗指南 |
| `eu-reg-617-2013` | 标准（`standard`） | Commission Regulation (EU) No 617/2013 on ecodesign requirements for computers and computer servers，https://eur-lex.europa.eu/eli/reg/2013/617/oj/eng，检索于 2026-08-09 | 笔记本产品定义、技术披露及可靠、准确、可复现的能耗测量 |
| `eu-weee-2012-19` | 标准（`standard`） | Directive 2012/19/EU on waste electrical and electronic equipment，https://eur-lex.europa.eu/eli/dir/2012/19/oj/eng，检索于 2026-08-09 | 单独收集、准备再使用、适当处理、部件和材料信息、回收和处置可追溯性 |
| `eu-rohs-2011-65` | 标准（`standard`） | Directive 2011/65/EU on restriction of hazardous substances in electrical and electronic equipment，合并文本，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02011L0065-20220701，检索于 2026-08-09 | 危险物质和供应商材料声明质量证据 |
