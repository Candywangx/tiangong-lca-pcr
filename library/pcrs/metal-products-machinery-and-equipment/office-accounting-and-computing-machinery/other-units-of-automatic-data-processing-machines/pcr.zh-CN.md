---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-units-of-automatic-data-processing-machines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他自动数据处理设备

## 1. 适用范围

本 PCR 适用于经语义边界复核、单独呈现的 CPC 3.0 子类 45289 自动数据处理设备：算术运算单元；图形加速器以外的加速器；打印处理器；控制及适配单元；磁盘—磁带或磁带—磁盘转换器；将数据解码并以明文形式呈现结果的机器；向集成电路写入固定程序的机器；以及将数据以编码形式转录到介质上的机器。

每个前景数据包必须从上述清单中选择一个设备族，并说明该设备的数据处理功能。无法明确归入某一所列设备族，或组合功能导致主要身份可能落入另一子类的产品，在使用本 PCR 前必须进入 `manual_review`。

默认数据集边界为制造工厂门口的成品生产，包括可归属的零部件与子组件、PCBA 和最终装配、配置与功能测试、仓储和包装。默认不包括出厂后交付、使用阶段电力或数据中心开销、维护和寿命终结；任何扩展都必须单独建模并披露。

服务器及其他完整自动数据处理机器；作为完整系统呈现的系统；固定式或可移动式存储单元；输入或输出外围设备；视频、图形、声卡或网络扩展卡；集成电路；通用网络通信设备；以及本身不执行所列数据处理功能的通用零部件或附件，均不在本 PCR 范围内。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-units-of-automatic-data-processing-machines |
| classification_refs | CPC 3.0: 45289，其他自动数据处理设备 |
| covered_products | 单独呈现的算术运算单元；非图形加速器；打印处理器；控制及适配单元；磁盘—磁带或磁带—磁盘转换器；明文数据解码机；固定程序写入机；编码介质转录机 |
| excluded_products | 服务器及其他完整计算机；自动数据处理系统；固定式或可移动式存储单元；输入或输出外围设备；图形、视频、声卡或网络卡；集成电路；网络通信设备；无源零部件和附件 |
| representative_product | 一个已声明设备族、具有完整配置记录并按成品净质量归一化的 CPC 45289 设备单元 |
| production_route | 供应商零部件与子组件；齐套；PCBA 或模块集成；最终装配；适用时加载固件或固定程序；功能与功率测试；厂内仓储；包装 |
| market_state | 制造工厂门口的已完成并通过测试的设备；包装单独清单化，并声明交付或未包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产一个执行已声明设备族功能、单独呈现的 CPC 45289 自动数据处理设备单元 |
| How much | 制造工厂门口 1 kg 成品净产品 |
| How well | 符合已声明功能、原生容量指标、测试配置、接口、功率特征、热设计和验收准则 |
| How long or cycle | 一个制造批次按 1 kg 合格产品归一化；若建模使用阶段扩展，则另行声明运行寿命和模式—时间分布 |
| reference_flow_link | 所有生产投入、废物和排放均按合格净产品质量归一化；件数采用每件合格产品的实测净质量换算 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 其他自动数据处理设备 `b3854d4e-54f5-4fad-9457-2f899c4a1653` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 设备族; 主要数据处理功能; 原生功能或容量额定值及测试方法; 支持时的额定 / 活动 / 空闲 / 睡眠 / 关闭功率状态; 机箱或外壳形式及机架或板卡形态; PCB 和子组件配置; 附带集成存储的类型和容量（如有）; 接口类型和数量; 集成冷却类型和冷却剂充注量（如有）; 电源配置; 固件或固定程序状态; 单件净质量; 是否包含包装; 交付边界; 制造地域; 报告期; 批次和良率基准 |

构建前景数据包时，`Required qualifiers` 中各项必须在数据集元数据、过程备注、参考流注释、产品说明或等效数据包字段中声明。缺少必需限定信息会使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量不含运输包装的合格产品净质量。若需要包装后参考状态，产品和包装质量分别报告，参考量仍以产品净质量为准。 |
| `count_to_mass` | 以件数记录的生产数据 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用同一报告期、特定配置的每件实测质量换算合格品和不合格品件数；有批次实测质量时不得使用目录标称质量。 |
| `functional_capacity` | 产品身份和测试结果 | 设备族特有的原生容量 | 已声明原生单位 | 说明设备族功能及其原生额定值或吞吐测试。不得虚构统一容量因子合并不同设备族；不等效或身份含糊的设备进入 `manual_review`。 |
| `power_and_energy` | 生产测试及任何使用阶段扩展 | 能量和功率 | kWh 和 W | 按支持的运行状态、工作负载或容量设置、测试方法和持续时间记录实测功率。由各状态功率和时间计算能量；不得把数据中心冷却、UPS 或其他场地开销并入设备用电，除非另行声明分配。 |
| `bom_mass_balance` | 零部件、子组件、成品、不合格品和废料 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一批次和报告期内，将可归属的来料质量与合格产品、单独处理的包装、不合格品、可回收废料和其他废物核对。 |
| `delivery_service` | 条件性出厂交付 | 运输服务和质量 | tonne-km 和 kg | 分别记录运输方式、起点、终点、距离、装载率和发运质量。交付位于默认工厂门口参考流之外，不得隐含在产品质量或制造能耗中。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购零部件、PCBA、模块、外壳和机械件、电缆与连接器、电源和集成冷却部件、适用的附带存储、辅助材料及包装到达制造或集成场所，并已声明供应商数据集身份。 |
| starting_condition_role | 供应商生产零部件及子组件的上游数据集边界；前景数据采集从接收、齐套、厂内装配、测试、仓储和包装开始。 |
| product_classification_scope | 仅包括经复核的 CPC 45289 设备族中单独呈现的单元；设备族和主要功能为必填身份字段。 |
| recursive_input_rule | 已符合相同 CPC 45289 产品身份的外购项目，以供应商数据集和配置作为上游产品投入记录；不得在接收方前景过程中重建其生产。 |
| upstream_dataset_requirement | PCBAs、集成电路及其他电子件、外壳和机械件、接口和电缆、电源部件、集成冷却部件与冷却剂、附带存储、辅助材料、包装、电力和废物处理应采用技术、地域和时间有代表性的数据集。 |
| disclosure | 声明设备族；功能与容量；配置；BOM 覆盖；集成存储与接口；冷却和电源架构；固件状态；工厂门口或交付状态；包装；地域；时期；良率；分配；排除项；以及任何使用、维护、交付或寿命终结扩展。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | 产品身份 | 仅纳入主要身份符合某一 CPC 45289 设备族的单元。多功能或身份不明确的产品在建模前进入 `manual_review`。 | `unstats-cpc-3-0-45289` |
| `boundary_production` | 默认前景系统 | 纳入可归属的零部件和子组件、适用时的 PCBA 或模块装配、最终装配、功能与功率测试、仓储和包装，直至制造工厂门口。 | `etsi-es-203-199-v1-3-1` |
| `boundary_parts` | 产品构成 | 从特定配置 BOM 识别适用的电子、机械、冷却、电缆、电源、存储、接口和包装部件；披露排除的部件类别及理由。 | `etsi-es-203-199-v1-3-1` |
| `boundary_cooling` | 冷却与供电支持 | BOM 纳入随设备实体发运的冷却硬件和冷却剂。制造设施的冷却和供电支持负荷分配给生产；数据中心或客户现场的冷却、UPS 和建筑开销不计入工厂门口产品，除非另建并声明下游扩展。 | `etsi-es-203-199-v1-3-1` |
| `boundary_delivery` | 包装与分销 | 在工厂内清单化包装。出厂交付从工厂门口后开始，默认排除；纳入时作为条件性、路线特定过程建模，并保留工厂门口结果。 | `etsi-es-203-199-v1-3-1` |
| `boundary_exclusions` | 重叠控制 | 排除完整计算机和服务器、完整系统、存储单元、输入或输出外围设备、扩展卡、集成电路、网络通信设备，以及由其他产品身份覆盖的无源零部件或附件。 | `unstats-cpc-3-0-45289` |
| `boundary_use_and_end_of_life` | 下游扩展 | 默认生产数据集不包括使用电力、维护更换、再使用、回收或处置。生命周期模型若增加这些内容，须分别披露运行寿命、状态—时间分布、电力地域、维护和寿命终结情景。 | `etsi-es-203-199-v1-3-1` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parts_supply_and_kitting` | 零部件、子组件与齐套 | required | 所有前景数据包 | 供应商数据集接口及从接收到上线的准备 | 每 kg 合格净产品对应的齐套零部件 kg |
| `assembly_and_integration` | PCBA、模块与最终装配 | required | 所有前景数据包；外购完整模块仍作为上游产品投入 | 前景生产和配置集成 | 每 kg 合格净产品对应的装配单元 kg |
| `functional_test` | 功能、容量、热与功率测试 | required | 所有前景数据包 | 验收测试与不合格品核算 | 每 kg 测试投入对应的合格测试单元 kg |
| `packaging_and_factory_gate` | 仓储、包装与工厂门口放行 | required | 所有前景数据包 | 参考产品完成 | 工厂门口 1 kg 成品净产品 |
| `outbound_delivery` | 出厂交付扩展 | conditional | 仅当已声明数据集边界超出制造工厂门口时纳入 | 路线特定交付扩展 | tonne-km 和交付产品 kg |

### 过程：零部件、子组件与齐套（`parts_supply_and_kitting`）

#### 输入

##### 产品流

###### 电子件、PCBA 与处理模块（`electronic_parts_and_pcbas`）

记录所选配置可归属的全部外购电子零部件及组件，包括处理器或加速模块、印制板、已装联 PCBA、内存与控制电子件。集成电路是投入，而不是 CPC 45289 参考产品。

- Selected flow: 供应商特定的电子件和 PCBA 产品流
- Flow property / unit: 质量 / kg；板面积或芯片面积可保留为分配证据
- Amount rule: 可归属于合格生产的 BOM 和收货质量；已知时包括经良率修正的上游数量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 工厂门口合格净产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

###### 机箱、外壳与机械件（`chassis_and_mechanics`）

记录作为设备组成发运的外壳、机架或板卡承载件、支架、紧固件、屏蔽件、均热件及其他机械件。

- Selected flow: 供应商特定的机械件产品流
- Flow property / unit: 质量 / kg
- Amount rule: 特定配置 BOM 质量和收货记录
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 工厂门口合格净产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

###### 接口、连接器与电缆（`interfaces_connectors_cabling`）

记录已安装的物理接口、设备一体化收发器、内部电缆以及销售包装内的外部电缆。独立网络通信设备不在范围内。

- Selected flow: 供应商特定的连接器、电缆和一体化接口产品流
- Flow property / unit: 质量 / kg
- Amount rule: 按接口类型和随附电缆组统计的 BOM 质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 工厂门口合格净产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

###### 电源与集成冷却部件（`power_and_integrated_cooling_parts`）

记录随设备实体发运的电源模块、电压转换、风扇、散热器、冷板、泵、密闭冷却回路和冷却剂。设施与数据中心支持系统不是产品部件。

- Selected flow: 供应商特定的电源和集成冷却产品流
- Flow property / unit: 质量 / kg；冷却剂按质量或体积记录并保留密度换算
- Amount rule: 发运配置的 BOM 质量和充注记录
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 工厂门口合格净产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

###### 附带集成存储（`incidental_integrated_storage`）

仅当存储在实体上集成且从属于已声明 CPC 45289 功能时记录。单独呈现的存储单元或主要功能为存储的产品不适用本 PCR。

- Selected flow: 供应商特定的集成存储部件流
- Flow property / unit: 质量 / kg，并以原生存储单位声明容量
- Amount rule: 从属集成存储的 BOM 质量和配置记录
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 工厂门口合格净产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `unstats-cpc-3-0-45289`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 齐套零部件与子组件（`kitted_parts_and_subassemblies`）

记录转入装配的完整特定配置套件，并保留所选设备族和 BOM 修订版的可追溯性。

- Selected flow: 已声明设备的齐套零部件与子组件
- Flow property / unit: 质量 / kg
- Amount rule: 合格发料零部件质量之和减去有记录的收货或齐套损失
- Value mode: 计算值（`calculated_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 转入装配的齐套输出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

##### 废物流

###### 来料与齐套废物（`incoming_and_kitting_waste`）

按材料和处理路线记录装配前产生的损坏零部件、保护膜、卷盘、托盘、来料包装及其他废物。

- Selected flow: 按材料和处理路线划分的场地特定废物流
- Flow property / unit: 质量 / kg
- Amount rule: 与零部件和齐套同一报告期的称量或核对废物
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1 kg 工厂门口合格净产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_bom_mass_and_kitting`
- Sources: `etsi-es-203-199-v1-3-1`

##### 基本流

### 过程：PCBA、模块与最终装配（`assembly_and_integration`）

#### 输入

##### 产品流

###### 转入装配的齐套零部件（`assembly_kitted_input`）

记录厂内 PCBA、模块与最终装配所消耗套件的质量和配置。

- Selected flow: 已声明设备的齐套零部件与子组件
- Flow property / unit: 质量 / kg
- Amount rule: 将产线发料和退料记录与装配输出及废料核对
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 装配单元输出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `etsi-es-203-199-v1-3-1`

###### 装配电力与设施支持（`assembly_electricity`）

记录装配线计量电力及可归属设施供电和冷却的明确分配份额。计量负荷与分配计算须可分离。

- Selected flow: 与制造地域和报告期匹配的电力供应
- Flow property / unit: 能量 / kWh
- Amount rule: 产线计量电力加有记录的共享设施电力和冷却物理分配
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 kg 装配单元输出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `etsi-es-203-199-v1-3-1`

###### 装配辅助材料与冷却剂充注（`assembly_auxiliaries_and_coolant`）

记录焊料、胶黏剂、清洗剂、热界面材料、润滑剂，以及适用时充入随设备发运集成冷却系统的冷却剂。

- Selected flow: 场地和材料特定的辅助产品流
- Flow property / unit: 质量 / kg，或按体积记录并提供密度换算
- Amount rule: 采购发料、加料或充注记录减有记录的退料
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 装配单元输出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `etsi-es-203-199-v1-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已装配并配置的设备（`assembled_configured_unit`）

记录转入功能测试的装配单元，并保留设备族、配置、接口、供电、冷却、存储和固件标识。

- Selected flow: 等待验收测试的已装配 CPC 45289 设备
- Flow property / unit: 质量 / kg
- Amount rule: 装配单元的实测转移质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 装配单元输出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `unstats-cpc-3-0-45289`

##### 废物流

###### 装配废料与残余物（`assembly_scrap_and_residues`）

按材料和处理路线记录报废零部件、板材与金属废料、废辅助材料、废冷却剂及其他装配残余物。

- Selected flow: 按材料和处理路线划分的场地特定废物流
- Flow property / unit: 质量 / kg
- Amount rule: 装配报告期的称量废物和物料平衡核对
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 kg 装配单元输出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_assembly_energy_and_yield`
- Sources: `etsi-es-203-199-v1-3-1`

##### 基本流

### 过程：功能、容量、热与功率测试（`functional_test`）

#### 输入

##### 产品流

###### 进入测试的装配单元（`assembled_units_for_test`）

记录进入验收测试序列的设备配置和质量。

- Selected flow: 等待验收测试的已装配 CPC 45289 设备
- Flow property / unit: 质量 / kg
- Amount rule: 进入测试件数乘以特定配置实测质量
- Value mode: 计算值（`calculated_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 合格测试单元
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_test_configuration_power`
- Sources: `unstats-cpc-3-0-45289`

###### 测试电力（`test_electricity`）

记录受测设备及可归属测试设备的用电，保留实测功率状态、工作负载或容量设置、持续时间和共享测试台分配。

- Selected flow: 与测试场地地域和报告期匹配的电力供应
- Flow property / unit: 能量 / kWh
- Amount rule: 各状态实测功率乘测试时间之和，加共享测试台电力的有记录物理分配
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 kg 合格测试单元
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_test_configuration_power`
- Sources: `etsi-es-203-199-v1-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格测试单元（`accepted_tested_unit`）

记录通过已声明功能、容量、接口、热、功率和固件验收准则的设备。

- Selected flow: 包装前合格 CPC 45289 设备
- Flow property / unit: 质量 / kg
- Amount rule: 合格件数乘以特定配置实测净质量
- Value mode: 计算值（`calculated_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 合格测试单元
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_test_configuration_power`
- Sources: `unstats-cpc-3-0-45289`

##### 废物流

###### 测试不合格品与失效零件（`test_rejects_and_failed_parts`）

记录送往返工、回收或废物处理的失效设备和零件，不得将返工品计作新产品输出。

- Selected flow: 场地特定的不合格、返工和废物流
- Flow property / unit: 质量 / kg
- Amount rule: 按去向统计失效件数与实测质量，扣除成功返工并返回同一批次的设备
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 kg 合格测试单元
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_test_configuration_power`
- Sources: `etsi-es-203-199-v1-3-1`

##### 基本流

### 过程：仓储、包装与工厂门口放行（`packaging_and_factory_gate`）

#### 输入

##### 产品流

###### 进入包装的合格设备（`accepted_units_for_packaging`）

记录从测试转入的合格设备，不改变其产品身份或净质量基准。

- Selected flow: 包装前合格 CPC 45289 设备
- Flow property / unit: 质量 / kg
- Amount rule: 转移质量与工厂门口放行产品核对
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 工厂门口参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_packaging_and_warehouse`
- Sources: `unstats-cpc-3-0-45289`

###### 包装材料（`packaging_materials`）

按材料记录可归属于放行产品的初级、次级和三级包装。包装不计入净参考质量。

- Selected flow: 按材料和再生含量规格划分的包装材料产品流
- Flow property / unit: 质量 / kg
- Amount rule: 已发包装减退回或未用材料，并与已包装放行设备核对
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 工厂门口参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_packaging_and_warehouse`
- Sources: `etsi-es-203-199-v1-3-1`

###### 仓储与包装电力（`packaging_warehouse_electricity`）

记录产品仓储、包装和工厂门口放行的计量或物理分配电力。

- Selected flow: 与制造地域和报告期匹配的电力供应
- Flow property / unit: 能量 / kWh
- Amount rule: 计量电力或按放行产品质量有记录的物理分配
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1 kg 工厂门口参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_packaging_and_warehouse`
- Sources: `etsi-es-203-199-v1-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口参考产品（`factory_gate_reference_product`）

记录制造工厂门口的合格成品净产品，包装质量单独报告。

- Selected flow: 其他自动数据处理设备 `b3854d4e-54f5-4fad-9457-2f899c4a1653`
- Flow property / unit: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 固定参考输出 1 kg 合格净产品
- Value mode: 固定值（`fixed_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 工厂门口 1 kg 合格净产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 身份参考（`identity_reference`）
- Collection protocol:
- Sources:

##### 废物流

###### 包装与仓储废物（`packaging_and_warehouse_waste`）

按处理路线记录损坏包装、标签、托盘、防护材料和其他仓储或包装废物。

- Selected flow: 按材料和处理路线划分的场地特定废物流
- Flow property / unit: 质量 / kg
- Amount rule: 称量废物与包装发放和退回记录核对
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1 kg 工厂门口参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_packaging_and_warehouse`
- Sources: `etsi-es-203-199-v1-3-1`

##### 基本流

### 过程：出厂交付扩展（`outbound_delivery`）

#### 输入

##### 产品流

###### 进入交付的工厂门口产品（`factory_gate_product_for_delivery`）

记录进入已声明交付路线的工厂门口产品和包装质量，并保留工厂门口结果。

- Selected flow: 其他自动数据处理设备 `b3854d4e-54f5-4fad-9457-2f899c4a1653`
- Flow property / unit: 质量 / kg
- Amount rule: 发运记录中的净产品质量和包装质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 路线特定（`route_specific`）
- Normalization basis: 每个已声明交付批次
- Basis kind: 运输服务（`transport_service`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_delivery_route`
- Sources: `etsi-es-203-199-v1-3-1`

###### 出厂运输服务（`outbound_transport_service`）

按实际运输方式、距离、发运质量、利用率以及温控或特殊处理要求记录每个运输区段。

- Selected flow: 路线和方式特定的货运服务
- Flow property / unit: 运输服务 / tonne-km
- Amount rule: 吨计发运质量乘以区段公里数，仅按所选运输数据集约定调整
- Value mode: 计算值（`calculated_value`）
- Specificity: 路线特定（`route_specific`）
- Normalization basis: 每个已声明交付批次
- Basis kind: 运输服务（`transport_service`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_delivery_route`
- Sources: `etsi-es-203-199-v1-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已交付产品（`delivered_product`）

将已交付产品记录为明确的下游扩展；不得替换或遮蔽工厂门口参考输出。

- Selected flow: 已声明路线的交付后 CPC 45289 设备
- Flow property / unit: 质量 / kg
- Amount rule: 由发运和收货记录确认的交付净产品质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 路线特定（`route_specific`）
- Normalization basis: 每个已声明交付批次
- Basis kind: 运输服务（`transport_service`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_delivery_route`
- Sources: `etsi-es-203-199-v1-3-1`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用生产和测试过程 | 可行时按配置或生产批次细分产线、仪表、测试台和记录，以避免分配。 | `etsi-es-203-199-v1-3-1` |
| `allocation_physical` | 共用设施电力、冷却、仓储和装配支持 | 无法细分时采用有因果关系的物理驱动因子。PCB 过程优先用板面积，集成电路过程用良品芯片面积，装配和测试用机器时间或计量能量，其他部件和仓储用质量。 | `etsi-es-203-199-v1-3-1` |
| `allocation_economic_fallback` | 无可辩护物理关系的共用过程 | 仅在物理关系不足时采用经济分配；披露价格、时期、币种、共产品和敏感性检查。 | `etsi-es-203-199-v1-3-1` |
| `allocation_rework` | 不合格品与返工 | 成功返工设备返回原批次，不得重复给予产品收益。实测返工投入和未回收不合格品处理归于其产生批次。 | `etsi-es-203-199-v1-3-1` |
| `allocation_recycling` | 生产废料与可回收材料 | 明确记录废料质量和处理输出。除非下游研究声明并一致采用回收方法，不得在前景清单内部计入避免负荷或回收收益。 | `etsi-es-203-199-v1-3-1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass_and_kitting` | `parts_supply_and_kitting` | 产品 BOM、收货、发料套件和来料废物 | BOM 导出；收货记录；称量记录；物料处置记录 | 设备族；产品和 BOM 修订版；供应商零件号；部件类别；数量；实测单件质量；板面积；可得时芯片面积；存储容量；接口数量；冷却和电源配置；废物质量与路线 | 导出受控 BOM，核对收货和产线发料，并用校准秤称量代表性零部件与废物 | kg；件；m2 板；mm2 芯片；原生容量单位 | 每次 BOM 修订和生产批次 | 与装配输出相同报告期 | 已声明配置涉及的全部场地和供应商 | 按配置汇总可归属投入与废物，用实测单件质量换算件数，并按合格净产品质量归一化 | 批准 BOM；收货记录；校准证书；供应商数据集引用；核对报告 |
| `cp_assembly_energy_and_yield` | `assembly_and_integration` | 装配投入、电力、辅助材料、输出与废料 | 产线电表；生产执行记录；发退料日志；废物联单 | 产线；配置；起止表数；输出件数和质量；机器时间；设施冷却和供电分配因子；辅助材料与冷却剂发料；废料及路线 | 可得时读取专用仪表并记录共享设施负荷的物理分配；核对物料发放、输出、退料和废料 | kWh；kg；件；机器小时 | 每批次，并按月核对仪表 | 有代表性的连续生产期，通常不少于一个月 | 范围内每个装配场地 | 用已声明物理因子分配共享负荷，并按装配输出 kg 归一化净投入 | 仪表校准；生产日志；分配工作表；质量平衡闭合；废物凭证 |
| `cp_test_configuration_power` | `functional_test` | 功能、容量、热、功率、验收和不合格记录 | 测试系统导出；功率分析仪；热日志；返工与处置日志 | 设备族；配置；固件；原生容量和测试方法；接口状态；冷却状态；功率模式；工作负载；W；持续时间；环境条件；通过或失败；不合格质量及去向 | 用校准仪器运行已声明验收序列，并保留模式—时间和工作负载设置 | W；kWh；原生容量单位；摄氏度；kg；件 | 每个受测批次和配置 | 与报告测试输出相同期间 | 范围内每个测试场地和测试台类型 | 汇总各状态能量，按实测测试时间分配共享测试台能量，并按合格测试质量归一化 | 测试程序；校准记录；原始结果文件；通过—失败日志；返工闭合 |
| `cp_packaging_and_warehouse` | `packaging_and_factory_gate` | 合格产品、包装、仓库能源与包装废物 | 发运放行；包装发料；称量记录；仓库电表；废物联单 | 净产品质量；合格件数；包装材料和质量；托盘复用；仪表或分配因子；放行数量；包装废物及路线 | 将合格产品与发运放行核对，按材料称量包装，并计量或物理分配仓储与包装能源 | kg；件；kWh | 每批次，并按月核对 | 与工厂门口放行相同报告期 | 范围内全部包装和仓储场地 | 包装、能耗和废物按 1 kg 放行净产品归一化，同时单独保留包装 | 发运记录；包装规格；秤和仪表校准；废物凭证 |
| `cp_delivery_route` | `outbound_delivery` | 条件性出厂交付 | 提单；承运商记录；发运和收货确认 | 起点；终点；方式；区段距离；净重和毛重；利用率；特殊处理；交付质量；损失或损坏 | 采集实际路线区段和承运商数据；仅在标注为情景时使用建模路线 | kg；tonne-km；km | 每票运输或代表性路线类别 | 已声明交付期 | 扩展中全部路线 | 逐段计算 tonne-km，汇总路线结果，并使交付与工厂门口生产分离 | 提单；承运商发票；路线证据；收货确认 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_count_to_mass` | 按件记录的生产和不合格数据 | 质量 = 件数乘以同一时期特定配置的实测单件质量 | 件数；实测单件质量 | 按流和配置统计的 kg |  |
| `calc_bom_mass_balance` | 零部件、产品与废物核对 | 可归属来料质量 = 合格净产品质量 + 退回物料 + 可回收废料 + 其他废物 + 实测库存变化；调查并披露残余差额 | BOM 与发料质量；产品质量；退料；废料；废物；库存变化 | 质量平衡说明和残差 |  |
| `calc_process_energy` | 装配、测试、仓储与包装 | 归一化能量 =（实测专用能量 + 物理分配的共享能量）/ 合格过程输出质量 | 起止表数；共享负荷总量；分配因子；合格输出质量 | 每 kg 过程输出的 kWh | `etsi-es-203-199-v1-3-1` |
| `calc_power_profile` | 设备功率限定信息和可选使用阶段扩展 | 使用能量 = 各状态特定功率乘以该状态时间之和；保留工作负载、容量、冷却和接口设置 | 各状态 W；各状态小时；工作负载与配置 | 已声明特征的 kWh | `etsi-es-203-199-v1-3-1` |
| `calc_delivery` | 条件性出厂交付 | 运输服务 = 各路线区段发运吨数乘以区段公里数之和 | 发运质量；距离；方式；路线区段 | 按方式和路线统计的 tonne-km | `etsi-es-203-199-v1-3-1` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品身份 | 证据必须表明一个 CPC 45289 设备族和主要功能；身份含糊或多功能产品需要 `manual_review`。 | 产品规格；功能框图；依据 `unstats-cpc-3-0-45289` 的分类复核 |
| `dq_configuration` | 功能与可比性 | 为每个报告配置保留原生容量、测试方法、固件、接口、PCB 与子组件配置、附带存储、电源和集成冷却信息。 | 受控配置与测试记录 |
| `dq_bom` | 产品构成 | 覆盖适用的电子、机械、电缆、电源、冷却、存储、接口、辅助材料和包装类别，并说明任何排除类别。 | 受控 BOM；供应商数据集；质量平衡核对；`etsi-es-203-199-v1-3-1` |
| `dq_energy` | 生产与功率特征 | 可行时使用校准测量；披露仪表覆盖、共享负荷分配、运行状态、工作负载、测试时间和电力地域。 | 仪表与分析仪校准；原始日志；分配工作表；`etsi-es-203-199-v1-3-1` |
| `dq_temporal_geographic` | 全部前景和上游数据 | 说明报告期、制造场地、供应商地域、电力地域和技术代表性，并解释替代。 | 场地与供应商记录；数据集元数据 |
| `dq_yield_and_waste` | 全部生产过程 | 将合格输出、不合格品、返工、废料和废物处理与同一批次和时期核对，不得重复计算返工产品。 | 生产日志；返工闭合；废物凭证；质量平衡 |
| `dq_boundary` | 包装、交付、冷却、使用和寿命终结 | 披露各边界要素是否纳入，并使任何下游扩展与工厂门口结果可分离。 | 边界说明；过程图；路线或情景记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 分类与产品名称 | 产品必须符合一个已列明的 CPC 45289 设备族，不得只用“其他设备”这一剩余类标题表示。 | `unstats-cpc-3-0-45289` |
| `validate_reference_flow` | 定量参考 | 参考输出必须使用产品流 `b3854d4e-54f5-4fad-9457-2f899c4a1653`、质量 `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，并按合格净产品质量归一化。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 设备族、功能、原生容量与测试、功率状态、机箱或板卡形式、PCB 与子组件配置、附带存储、接口、集成冷却、电源、固件状态、净质量、包装、交付边界、地域、时期、批次、良率和分配必须存在或明确标注不适用。 | `etsi-es-203-199-v1-3-1` |
| `validate_no_overlap` | 类别排除 | 拒绝服务器或完整计算机数据集、完整系统、独立存储单元、输入或输出外围设备、图形/视频/声卡/网络卡、集成电路、网络通信设备以及无源零部件或附件。 | `unstats-cpc-3-0-45289` |
| `validate_bom_and_mass_balance` | 清单完整性 | BOM 类别和过程质量平衡必须核对合格净产品、包装、退料、不合格品、废料、废物和库存变化；披露排除项和残余差额。 | `etsi-es-203-199-v1-3-1` |
| `validate_power_and_cooling` | 能源与热边界 | 功率必须关联运行状态、工作负载或容量、持续时间和仪器方法。随设备发运的集成冷却必须列入 BOM；制造设施和下游数据中心冷却须分别识别。 | `etsi-es-203-199-v1-3-1` |
| `validate_delivery_boundary` | 工厂门口与交付结果 | 包装须与净参考质量分开；出厂交付须不出现在默认结果中，或作为可分离的路线特定扩展报告。 | `etsi-es-203-199-v1-3-1` |
| `validate_allocation` | 共用过程 | 数据集须说明每个共用过程、分配层级、物理驱动因子和后备敏感性；未解释的经济分配或通用质量分配验证失败。 | `etsi-es-203-199-v1-3-1` |
| `validate_manual_review` | 宽叶身份含糊 | 若无法判定设备族、主要功能或与排除的服务器、完整机器、存储、外围设备、扩展卡、集成电路、通信设备或无源零件的边界，验证结果不确定，记录必须进入 `manual_review`。 | `unstats-cpc-3-0-45289` |

## 10. 发布数据集档案

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造工厂门口、一个已声明 CPC 45289 设备族和配置的前景生产数据集 |
| downstream_use | 在身份、配置、容量和边界兼容时，作为产品、过程和 lifecyclemodel 构建的次级数据集或背景数据集 |
| allowed_use | 特定配置的产品足迹；供应链建模；数据中心或计算系统部件清单；另建交付、使用、维护和寿命终结扩展的情景分析 |
| excluded_use | 不同设备族或容量间直接比较；表示服务器、完整计算机或系统、存储单元、外围设备、扩展卡、集成电路、通信设备或无源零部件；由仅工厂门口数据集提出使用阶段或交付声明 |
| required_metadata | 设备族；主要功能；原生容量与测试方法；功率模式；使用时的运行特征；机箱或板卡形式；PCB 与子组件配置；附带存储；接口；集成冷却及冷却剂；电源；固件状态；净质量；包装；交付边界；制造和电力地域；报告期；批次；良率；分配；BOM 覆盖；排除项；数据来源 |
| required_quality_disclosure | 前景与上游数据占比；供应商数据集覆盖；测量与校准覆盖；BOM 与质量平衡残差；共享负荷分配；时间、地域和技术代表性；缺失部件类别；返工和废物闭合；下游情景假设 |
| update_trigger | 设备族、主要功能、原生容量测试、主要 PCB 或半导体代际、机箱或接口架构、集成存储、冷却或供电设计、改变功能或功率的固件、制造场地或电力供应、供应商路线、包装、交付边界、分配方法或来源证据发生变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0-45289` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类 3.0 版解释性说明》，子类 45289，2025-06-30 更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索于 2026-08-09 | 设备族语义边界；纳入与排除产品；分类含糊检查 |
| `etsi-es-203-199-v1-3-1` | 标准（`standard`） | ETSI ES 203 199 V1.3.1，《信息与通信技术产品、网络和服务环境生命周期评价方法》，2015-02，https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.03.01_60/es_203199v010301p.pdf，检索于 2026-08-09 | 功能单位限定信息；产品组成与 BOM 覆盖；装配、仓储与包装边界；功率模式；冷却及支持物品；数据采集；分配；报告与质量规则 |
