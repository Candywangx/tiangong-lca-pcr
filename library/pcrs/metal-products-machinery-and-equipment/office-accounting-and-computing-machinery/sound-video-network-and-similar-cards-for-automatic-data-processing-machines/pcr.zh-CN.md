---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.sound-video-network-and-similar-cards-for-automatic-data-processing-machines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 用于自动数据处理设备的声卡、视频卡、网络卡及类似卡

## 1. 范围与适用性

本 PCR 用于构建自动数据处理设备所用成品扩展卡从摇篮到制造厂门的前景数据包。所覆盖的卡型包括网络接口卡、声音或音频卡、图形或视频卡，以及以扩展卡形态供货的 AI、数据中心、高性能计算或其他加速卡。每个数据集应识别一种卡型及配置，并应分别说明主芯片与封装、印制电路板、板载内存、散热组件、外部接口组件和其余辅助部件。

本叶类别在技术上高度异质。单一 GPU 卡、网络卡、视频卡、声卡、芯片或通用电子组件均不得作为整个类别的代表性代理。仅当一个已声明产品系列的各成员具有相同主要功能、主机接口、生产路线和验收依据时，方可使用产量加权组合；必须披露权重和配置差异。

参考边界始于采购材料、部件和服务进入报告制造边界，终于成品卡在工厂门通过验收。当半导体或裸 PCB 制造由报告组织实施或受其运营控制时才作为前景过程纳入；否则作为供应商特定的上游产品数据集进入。使用阶段和寿命终结阶段不属于本从摇篮到工厂门数据包。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.sound-video-network-and-similar-cards-for-automatic-data-processing-machines` |
| classification_refs | CPC 3.0 `45281`，`Sound, video, network and similar cards for automatic data processing machines` |
| covered_products | 用于自动数据处理设备的成品扩展卡，包括网络卡、声音/音频卡、图形/视频卡、AI/数据中心/HPC 加速卡及功能类似卡 |
| excluded_products | 裸芯片、集成电路或半导体封装；裸印制电路板；完整计算机或服务器；集线器、路由器和网关；独立外部外围设备；存储单元；单独销售的电缆或电源；以及纯软件服务 |
| representative_product | 一种已声明卡型和配置的成品且通过验收测试的卡；任何子类型均不代表整个 CPC 叶 |
| production_route | 采购部件接收与配套、可选的受控裸 PCB 和半导体/封装制造、印制板组装、散热/机械/接口组装、固件加载、测试、验收和发运 |
| market_state | 制造工厂门的成品且已测试卡；可拆卸包装和单独供货附件不计入卡的净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产一种已声明卡型和配置、用于自动数据处理设备并通过电气、功能和验收测试的成品扩展卡 |
| How much | `1 kg` 验收合格卡净质量，不含可拆卸包装、单独供货电缆、备件和附件 |
| How well | 符合指定卡配置的电气、功能、热、主机接口、连接器、固件和工厂验收规范 |
| How long or cycle | 工厂门的一个已定义生产批次或报告年度；本从摇篮到工厂门参考流不包含使用寿命声明 |
| reference_flow_link | 定量参考为下述精确的天工 CPC 3.0 `45281` 产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | `1 kg` |
| 参考产品流 | `cc906112-5ebd-437c-b701-88faeeac2f81` — 用于自动数据处理设备的声卡、视频卡、网络卡和类似卡 |
| 参考流属性 | `93a60a56-a3c8-11da-a746-0800200b9a66` — Mass |
| 参考单位组 | `93a60a57-a4c8-11da-a746-0800200c9a66` — Units of mass |
| 参考单位 | `kg` |
| 必需限定信息 | `card_type`; `primary_function`; `host_interface_and_form_factor`; `performance_class`; `primary_chip_model_and_package_technology`; `die_or_package_count_and_mass_basis`; `pcb_area_layer_count_thickness_surface_finish_and_mass`; `onboard_memory_technology_capacity_device_count_and_mass`; `cooling_architecture_materials_and_mass`; `external_connector_and_port_type_count_and_included_modules`; `support_component_groups_and_mass`; `firmware_version_and_test_profile`; `net_card_mass`; `manufacturing_site_country_and_reporting_period`; `production_route`; `yield_and_allocation_basis`; `packaging_exclusion` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 验收合格参考产品 | Mass | `kg` | 对不含可拆卸包装、单独供货电缆、备件或附件的验收合格卡称重。将验收合格卡净质量总和归一化为 `1 kg`。 |
| `component_layer_mass` | 主芯片/封装、PCB、板载内存、散热、接口及辅助部件 | Mass | `kg` | 分别记录每个必需层的实测或供应商声明干质量；不得将任一层隐藏在通用电子部件总量中。 |
| `count_area_to_mass` | 最初以件数或 PCB 面积记录的部件 | Mass | `kg` | 使用批次特定称量或配置特定供应商数据将件数或面积换算为质量，并保留换算记录、样本量和不确定性。 |
| `process_energy_preservation` | 电力、热、燃料和压缩空气使用 | Energy | `kWh` 或 `MJ` | 换算前保留计量单位和能源载体，记录换算因子；不得将额定功率作为能源消耗。 |
| `water_and_process_materials` | 水、焊料、助焊剂、清洗剂、涂层、热界面材料及制造化学品 | Mass 或 volume | `kg`、`m3` 或记录中的兼容单位 | 使用与过程及报告期核对一致的采购、领用、退回、回收和库存变动记录。 |
| `waste_and_release_mass` | 废料、不合格品、废耗材、废水成分及直接排放 | Mass | `kg` | 在处理前测量或计算每种不同废物或排放流，并保留去向或接收环境区室。 |
| `performance_qualifiers` | 卡的功能和验收 | 已声明技术性能 | 已声明 SI 或接口单位 | 按卡型记录适用指标，例如链路速率及端口数、音频通道/采样规格、图形/计算吞吐等级、内存容量、热设计依据和测试方案；绝不得仅按质量比较不同卡型。 |
| `production_mix_control` | 产品系列或配置组合 | Mass share | `kg/kg` | 组合应采用同一路线和时期的验收合格净质量权重。披露每种纳入配置，禁止对不同主要功能或主机接口求平均。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告制造边界接收的采购原材料、部件、子组件、公用工程、燃料、水和运输服务 |
| starting_condition_role | 在接收处链接供应商特定的上游数据集；受控内部制造作为前景过程建模 |
| product_classification_scope | 仅限具有已声明卡型和配置的 CPC 3.0 `45281` 成品扩展卡 |
| recursive_input_rule | 采购芯片封装、PCB、内存、散热、接口和辅助部件需要上游数据集，但不递归地重新分类为成品卡 |
| upstream_dataset_requirement | 对半导体封装、PCB、内存、散热组件和连接器优先采用供应商及技术特定数据集；逐层单独披露任何替代数据 |
| disclosure | 声明运营控制、截断、地理、技术、报告期、良率、分配、排除包装和未解决流身份 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 全部数据集 | 纳入生产工厂门验收合格卡所需的接收、配套、组装、散热/机械/接口集成、固件加载、测试、返工、验收、内部搬运和发运活动。 | `itu-t-l1410-2024`; `eu-pef-2021-2279` |
| `boundary_component_hierarchy` | 物料清单和上游链接 | 保持主芯片/封装、PCB、板载内存、散热、接口和辅助部件各层分离。报告各层质量和数据来源；通用电子部件总量不得替代这些层。 | `itu-t-l1410-2024`; `ipc-1752a-2018`; `iec-62474-2018` |
| `boundary_controlled_fabrication` | 裸 PCB 和半导体/封装制造 | 仅当报告组织具有运营控制且存在场址记录时才作为前景纳入。否则使用供应商特定的上游产品数据集，不得虚构晶圆厂或 PCB 厂清单。 | `itu-t-l1410-2024`; `eu-pef-2021-2279` |
| `boundary_transport_packaging` | 入厂运输和发运包装 | 将入厂运输及包装生产或使用作为独立流纳入。可拆卸包装不计入 `1 kg` 参考产品质量，但保留其清单负荷。 | `eu-pef-2021-2279` |
| `boundary_use_eol` | 使用、维护、再使用、回收及处置 | 从本从摇篮到工厂门数据包中排除。下游生命周期模型仅可在提供卡型特定的功耗、工作负载、寿命、更换和寿命终结情景时加以纳入。 | `itu-t-l1410-2024` |
| `boundary_no_proxy` | 分类和代表性产品 | 不得以裸 IC、裸 PCB、完整计算机/服务器、集线器/路由器/网关、外部外围设备或单一 GPU/网络/视频/声卡替代本类别。 | `un-cpc-3-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_receipt_and_kitting` | 部件接收、核验与配套 | required | 始终 | 按必需层保留产品特定物料清单和供应商链接 | 每单位验收合格卡质量所领用各层部件质量 |
| `bare_pcb_fabrication` | 裸印制电路板制造 | conditional | 仅当由报告组织实施或受其运营控制时纳入 | 对受控层压、成像、蚀刻、电镀、表面处理和检验活动建模 | 发往组装的验收合格裸 PCB 质量 |
| `semiconductor_package_fabrication` | 半导体芯片与封装制造 | conditional | 仅当由报告组织实施或受其运营控制时纳入 | 对受控晶圆/芯片、基板、封装、测试和良率活动建模 | 发往组装的验收合格封装质量或件数，并与质量核对 |
| `printed_board_assembly` | 印制板组装 | required | 始终 | 安装、焊接、清洗、涂覆和检验 PCB 组件 | 验收合格 PCBA 质量 |
| `thermal_mechanical_interface_assembly` | 散热、机械与接口组装 | required | 始终 | 添加散热、支架、外壳、外部连接器和随附模块 | 机械完整卡质量 |
| `firmware_test_and_acceptance` | 固件加载、功能测试与验收 | required | 始终 | 确立成品卡功能、性能等级和验收良率 | 验收合格成品卡质量 |
| `packaging_and_dispatch` | 包装与工厂门发运 | required | 始终 | 记录保护包装，在不将包装计入净质量的情况下输出参考产品 | 工厂门 `1 kg` 验收合格卡净质量 |

### 过程：部件接收、核验与配套（`component_receipt_and_kitting`）

#### 输入

##### 产品流

###### 主芯片与封装（`primary_chip_package_input`）

按型号、封装技术、件数和干质量记录每个主处理器、控制器、加速器、编解码器或类似功能芯片。本层不得被平均 IC 代理替代。

- 选定流：数据集构建时选择的供应商特定主芯片或半导体封装产品流
- 流属性/单位：Mass / `kg`；保留件数作为限定信息
- 数量规则：与声明配置和验收合格产量核对的前景接收与领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：验收合格卡净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specific_bom`
- 来源：`itu-t-l1410-2024`; `eu-pef-2021-2279`; `ipc-1752a-2018`

###### 裸印制电路板（`bare_pcb_input`）

对具体卡设计记录板面积、层数、厚度、表面处理、拼板良率和验收合格干质量。

- 选定流：数据集构建时选择的供应商和技术特定裸 PCB 产品流
- 流属性/单位：Mass / `kg`；保留面积 `m2`
- 数量规则：前景领用质量加可归属来料不合格品，并按验收合格产量归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：验收合格卡净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specific_bom`
- 来源：`itu-t-l1410-2024`; `ipc-1752a-2018`

###### 板载内存（`onboard_memory_input`）

将内存技术、容量、器件数量、封装形式和质量与主芯片层分开记录。

- 选定流：数据集构建时选择的供应商特定板载内存产品流
- 流属性/单位：Mass / `kg`；保留容量和件数限定信息
- 数量规则：声明配置的前景领用质量，包括可归属来料不合格品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：验收合格卡净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specific_bom`
- 来源：`itu-t-l1410-2024`; `ipc-1752a-2018`

###### 散热组件（`cooling_assembly_input`）

按随附配置和质量记录散热器、热管或均热板、风扇、导风罩、冷板、液冷接头及热界面材料。

- 选定流：按材料和组件类型选择的供应商特定散热部件产品流
- 流属性/单位：Mass / `kg`
- 数量规则：声明散热架构的前景领用干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：验收合格卡净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specific_bom`
- 来源：`itu-t-l1410-2024`; `ipc-1752a-2018`

###### 外部接口和随附模块（`interface_component_input`）

按类型、件数和质量记录主机边缘连接器、网络/音频/视频端口、收发器笼或随附模块、支架及接口特定部件。

- 选定流：供应商特定连接器、端口、支架和随附模块产品流
- 流属性/单位：Mass / `kg`；保留件数和接口限定信息
- 数量规则：声明配置的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：验收合格卡净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specific_bom`
- 来源：`ipc-1752a-2018`; `iec-62474-2018`

###### 辅助电子与机械部件（`support_component_input`）

以披露的组别记录无源器件、供电部件、振荡器、辅助控制器、屏蔽件、紧固件及其他剩余部件；该剩余项不得吸收任何必需层。

- 选定流：在逐件建模不可行时按技术和材料分组的供应商特定辅助部件产品流
- 流属性/单位：Mass / `kg`
- 数量规则：完整卡实测质量与所有已分别测量必需层之差，并与采购和贴装记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：验收合格卡净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_specific_bom`
- 来源：`itu-t-l1410-2024`; `ipc-1752a-2018`

##### 废物流

###### 来料包装与不合格部件（`incoming_rejects_and_packaging`）

按材料或部件系列及处理去向记录收货包装和组装前拒收部件。

- 选定流：按材料和去向选择的场址特定废物流
- 流属性/单位：Mass / `kg`
- 数量规则：报告期内称量或有凭证的不合格质量和包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：验收合格卡净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_rework`
- 来源：`eu-pef-2021-2279`

##### 基本流

#### 输出

##### 产品流

###### 配套部件集合（`kitted_component_set`）

将经核验的部件层转移至印制板及最终组装，不将该配套件视为外部共产品。

- 选定流：内部中间配套部件集合
- 流属性/单位：Mass / `kg`
- 数量规则：扣除来料不合格品后各领用部件层质量之和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：验收合格卡净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_specific_bom`
- 来源：`mass-balance-identity`

##### 废物流

##### 基本流

### 过程：裸印制电路板制造（`bare_pcb_fabrication`）

#### 输入

##### 产品流

###### PCB 制造材料和公用工程（`pcb_fabrication_inputs`）

当本条件前景过程适用时，分别记录受控生产线的层压板、铜、胶片、掩膜、表面处理、电镀及蚀刻化学品、清洗剂、水和各能源载体。

- 选定流：数据集构建时选择的场址和技术特定材料、化学品、水及公用工程流
- 流属性/单位：Mass、volume 或 energy / `kg`、`m3`、`kWh` 或 `MJ`
- 数量规则：按声明板系列分配的计量值、采购领用值或库存平衡值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：发往卡组装的验收合格裸 PCB 质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_materials_water`
- 来源：`eu-pef-2021-2279`; `iec-62474-2018`

##### 废物流

###### PCB 废料、废槽液和废水（`pcb_fabrication_waste`）

按处理路线区分固体板废料、废工艺材料、处理残渣和废水。

- 选定流：按组成和去向选择的场址特定废物与废水流
- 流属性/单位：Mass 或 volume / `kg` 或 `m3`
- 数量规则：与受控制造线核对一致的称量、计量或处理记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：发往卡组装的验收合格裸 PCB 质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_rework`
- 来源：`mass-balance-identity`

##### 基本流

###### PCB 制造直接排放（`pcb_fabrication_direct_releases`）

按已命名物质和接收环境区室记录场址处理后的实测空气和水直接排放；绝不得仅由采购化学品质量推断。

- 选定流：数据集构建时选择的物质和区室特定基本流
- 流属性/单位：Mass / `kg`
- 数量规则：报告期场址监测值或符合要求的工程计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：发往卡组装的验收合格裸 PCB 质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_emissions`
- 来源：`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 验收合格裸 PCB（`accepted_bare_pcb`）

仅将符合声明设计和表面处理规范且经检验的裸板转移至组装。

- 选定流：声明卡配置的内部验收合格裸 PCB
- 流属性/单位：Mass / `kg`
- 数量规则：扣除制造良率损失后的实测验收合格干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_rework`
- 来源：`mass-balance-identity`

##### 废物流

##### 基本流

### 过程：半导体芯片与封装制造（`semiconductor_package_fabrication`）

#### 输入

##### 产品流

###### 半导体制造材料和公用工程（`semiconductor_fabrication_inputs`）

当本条件前景过程适用时，分别记录受控技术路线的晶圆或芯片、基板、引线框架、封装料、键合材料、工艺气体与化学品、超纯水和各项公用工程。

- 选定流：数据集构建时选择的场址和技术特定半导体材料、化学品、水及公用工程流
- 流属性/单位：Mass、volume 或 energy / 兼容记录单位
- 数量规则：利用有凭证设备和良率记录，按声明芯片/封装系列分配计量值或生产核算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：发往卡组装的验收合格封装质量或件数，并与质量核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_materials_water`
- 来源：`itu-t-l1410-2024`; `eu-pef-2021-2279`

##### 废物流

###### 半导体废料和废耗材（`semiconductor_fabrication_waste`）

按处理路线分别记录报废晶圆、芯片与封装、废化学品、减排处理残渣和废水。

- 选定流：按组成和去向选择的场址特定废物流
- 流属性/单位：Mass 或 volume / 兼容记录单位
- 数量规则：与受控制造良率核对的生产和处理记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：发往卡组装的验收合格封装质量或件数，并与质量核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_rework`
- 来源：`mass-balance-identity`

##### 基本流

###### 半导体制造直接排放（`semiconductor_direct_releases`）

按物质和区室记录减排处理后的实测排放，包括任何工艺气体销毁依据；不得仅由采购量推导排放。

- 选定流：数据集构建时选择的物质和区室特定基本流
- 流属性/单位：Mass / `kg`
- 数量规则：报告期场址监测值或有凭证的工程计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：发往卡组装的验收合格封装质量或件数，并与质量核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_emissions`
- 来源：`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 验收合格半导体封装（`accepted_semiconductor_packages`）

按型号和封装技术将已测试封装转移至卡组装。

- 选定流：声明卡配置的内部验收合格半导体封装
- 流属性/单位：Mass / `kg`；保留件数
- 数量规则：扣除制造和测试良率损失后的验收合格封装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_rework`
- 来源：`mass-balance-identity`

##### 废物流

##### 基本流

### 过程：印制板组装（`printed_board_assembly`）

#### 输入

##### 产品流

###### 电子部件与 PCB（`pcba_component_inputs`）

将分别记录的主芯片/封装、PCB、内存和辅助部件层领用到具体电路板配置。

- 选定流：配套部件层或受控制造的中间输出
- 流属性/单位：Mass / `kg`
- 数量规则：批次特定领用质量，包括可归属贴装和组装损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：验收合格 PCBA 质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specific_bom`
- 来源：`itu-t-l1410-2024`; `eu-pef-2021-2279`

###### 组装材料与能源（`pcba_assembly_materials_energy`）

分别记录焊接合金或锡膏、助焊剂、胶黏剂、清洗剂、三防涂层，以及印刷、贴装、回流、选择性或波峰焊、清洗、涂覆和检验的电力。

- 选定流：数据集构建时选择的场址特定组装材料和公用工程流
- 流属性/单位：Mass 或 energy / `kg`、`kWh` 或 `MJ`
- 数量规则：按声明组装路线和验收合格输出分配的材料领用量和计量能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：验收合格 PCBA 质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_materials_water`
- 来源：`ipc-jstd001j-a610j-2024`; `eu-pef-2021-2279`

##### 废物流

###### 组装废料和废耗材（`pcba_assembly_waste`）

将不合格板和部件、焊渣、废擦拭物、掩膜、清洗剂和涂层废物与系统内返工分开记录。

- 选定流：按材料和去向选择的场址特定组装废物流
- 流属性/单位：Mass / `kg`
- 数量规则：扣除成功内部返工后报告期内称量或有凭证的废物产生量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：验收合格 PCBA 质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_rework`
- 来源：`ipc-jstd001j-a610j-2024`; `mass-balance-identity`

##### 基本流

###### 组装直接排放（`pcba_direct_releases`）

在发生时按物质和区室记录焊接、清洗和涂覆的实测或许可排放。

- 选定流：数据集构建时选择的物质和区室特定基本流
- 流属性/单位：Mass / `kg`
- 数量规则：场址监测值或有凭证的工程计算值，并扣除被捕集且送处理的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：验收合格 PCBA 质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_emissions`
- 来源：`ipc-jstd001j-a610j-2024`

#### 输出

##### 产品流

###### 验收合格 PCBA（`accepted_assembled_pcba`）

将经检验的 PCB 组件转移至最终机械集成。

- 选定流：内部验收合格 PCBA
- 流属性/单位：Mass / `kg`
- 数量规则：扣除组装不合格品和不可回收损失后的实测验收合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_rework`
- 来源：`ipc-jstd001j-a610j-2024`

##### 废物流

##### 基本流

### 过程：散热、机械与接口组装（`thermal_mechanical_interface_assembly`）

#### 输入

##### 产品流

###### PCBA 与最终组装层（`final_assembly_inputs`）

将验收合格 PCBA 与分别测量的散热、热界面、支架、外壳、外部接口和随附模块层组合。

- 选定流：内部验收合格 PCBA 和供应商特定最终组装部件
- 流属性/单位：Mass / `kg`；保留部件数量
- 数量规则：声明最终配置的批次特定领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：机械完整卡质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specific_bom`
- 来源：`itu-t-l1410-2024`; `ipc-1752a-2018`

###### 最终组装能源与耗材（`final_assembly_energy_consumables`）

记录未计入采购子组件的电力、紧固件、胶黏剂、热界面材料和其他耗材。

- 选定流：数据集构建时选择的场址特定公用工程和耗材流
- 流属性/单位：Mass 或 energy / `kg`、`kWh` 或 `MJ`
- 数量规则：按验收合格机械完整卡分配的计量或领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：机械完整卡质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_materials_water`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 机械组装废物（`final_assembly_waste`）

按去向记录不合格散热部件、支架、连接器、模块、紧固件、衬垫和其他组装残余物。

- 选定流：按材料和去向选择的场址特定废物流
- 流属性/单位：Mass / `kg`
- 数量规则：扣除可回收部件和返工后的称量或有凭证废物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：机械完整卡质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_rework`
- 来源：`mass-balance-identity`

##### 基本流

#### 输出

##### 产品流

###### 机械完整卡（`mechanically_complete_card`）

将已组装配置转移至固件加载和验收测试。

- 选定流：内部机械完整卡
- 流属性/单位：Mass / `kg`
- 数量规则：发往测试的完整配置实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specific_bom`
- 来源：`mass-balance-identity`

##### 废物流

##### 基本流

### 过程：固件加载、功能测试与验收（`firmware_test_and_acceptance`）

#### 输入

##### 产品流

###### 完整卡与测试能源（`test_inputs`）

记录进入测试的卡、固件或配置镜像、测试设备电力和任何消耗的测试介质。测试时间本身不是能源。

- 选定流：内部机械完整卡和场址特定电力流
- 流属性/单位：Mass 和 energy / `kg` 和 `kWh`
- 数量规则：进入测试卡质量；无直接计量时，按实测测试时长和设备负载分配计量测试能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：验收合格成品卡质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_acceptance`
- 来源：`ipc-jstd001j-a610j-2024`; `eu-pef-2021-2279`

##### 废物流

###### 不可恢复测试不合格品（`test_reject_waste`）

仅记录离开内部返工而成为废物的单元和部件；返工卡留在系统内，其额外能源和材料保留在过程清单中。

- 选定流：按材料和去向选择的场址特定不合格卡或部件废物流
- 流属性/单位：Mass / `kg`
- 数量规则：返工处置后不可恢复不合格品的称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：验收合格成品卡质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_rework`
- 来源：`ipc-jstd001j-a610j-2024`

##### 基本流

#### 输出

##### 产品流

###### 验收合格成品卡（`accepted_finished_cards`）

仅放行符合声明电气、功能、热、主机接口、连接器、固件和验收规范的卡。

- 选定流：可拆卸包装前的精确成品卡配置
- 流属性/单位：Mass / `kg`
- 数量规则：测试和最终处置后的实测验收合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_identity_mass`
- 来源：`ipc-jstd001j-a610j-2024`

##### 废物流

##### 基本流

### 过程：包装与工厂门发运（`packaging_and_dispatch`）

#### 输入

##### 产品流

###### 验收合格卡与保护包装（`dispatch_inputs`）

分别记录验收合格卡质量及每种可拆卸防静电袋、托盘、缓冲材料、纸箱、标签和托盘材料；虽然包装质量不计入参考产品，但包装负荷保留在系统内。

- 选定流：内部验收合格卡和材料特定包装产品流
- 流属性/单位：Mass / `kg`
- 数量规则：同一发运总体的验收合格卡质量加采购并使用的包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：工厂门验收合格卡净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 包装边角料与损坏包装（`packaging_waste`）

按材料和去向记录包装废物。

- 选定流：按材料和去向选择的场址特定包装废物流
- 流属性/单位：Mass / `kg`
- 数量规则：包装损失的称量值或库存平衡值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：工厂门验收合格卡净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`mass-balance-identity`

##### 基本流

#### 输出

##### 产品流

###### 参考卡输出（`reference_card_output`）

输出为精确的天工 CPC 3.0 `45281` 产品流，并带有全部必需卡型特定限定信息。

- 选定流：`cc906112-5ebd-437c-b701-88faeeac2f81` — 用于自动数据处理设备的声卡、视频卡、网络卡和类似卡
- 流属性/单位：`93a60a56-a3c8-11da-a746-0800200b9a66` Mass / `kg`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：固定归一化输出为 `1 kg` 验收合格卡净质量；可拆卸包装和单独供货附件不计入输出质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_reference_identity_mass`
- 来源：`un-cpc-3-2025`; `tiangong-flow-verification-2026`

- 数量范围：参考数量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：`kg`
  - 基准：工厂门验收合格卡净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）
  - 来源：`tiangong-flow-verification-2026`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有前景过程 | 首先细分生产线、设备、仪表、批次和记录，以避免在卡配置与无关产品间分配。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | 共享组装、测试和设施活动 | 无法细分时，采用实测因果驱动量，例如设备时间乘实测负载、贴装件数、炉占用、测试时长及负载、处理体积，或对剩余设施服务采用面积时间。 | `eu-pef-2021-2279` |
| `allocation_yield_and_rework` | 不合格品、良率损失和返工 | 将正常不合格与返工相关材料、能源和处理归属同一配置和时期的验收合格输出。不得将内部返工作为共产品抵扣。 | `mass-balance-identity` |
| `allocation_recovered_material` | 售出废料或回收材料 | 将收集和处理负荷保留在产生过程。仅在下游方法明确要求时采用替代或回收抵扣，并单独披露方法。 | `eu-pef-2021-2279` |
| `allocation_no_category_average` | 产品系列 | 不得仅因同属 CPC `45281`，就在不同主要功能、主机接口、半导体技术、散热架构或验收方案之间分配或平均。 | `un-cpc-3-2025`; `itu-t-l1410-2024` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference_identity_mass` | `firmware_test_and_acceptance`; `packaging_and_dispatch` | 验收合格参考产品 | 称量和验收记录 | configuration_id, serial_or_lot, gross_card_mass, detachable_items_mass, net_card_mass, acceptance_status | 使用经校准称量并链接最终验收 | `kg` | 每批或统计上合理的抽样 | 同一报告期 | 每个制造场址 | 仅汇总验收合格净质量；报告抽样扩展 | 校准记录、抽样计划、验收日志 |
| `cp_product_specific_bom` | `component_receipt_and_kitting`; 所有组装过程 | 必需部件层 | 工程 BOM 和质量汇总 | part_number, revision, layer, quantity, measured_or_declared_mass, unit, source, effective_date | 冻结精确 BOM 修订并与实测卡质量核对 | `kg` 加件数 | 每个配置或工程变更 | 有效生产期 | 每个产品和场址 | 仅在六个必需层及披露的辅助组内汇总 | 批准 BOM、变更记录、质量核对 |
| `cp_supplier_layer_data` | `component_receipt_and_kitting` | 采购部件 | 供应商声明和上游数据集 | supplier, site, part_number, technology, composition, mass, declaration_standard, dataset_id, validity | 收集部件特定供应商声明和数据集；逐层记录替代方案 | 原始单位和 `kg` | 供应商或设计变更 | 报告期内有效 | 尽可能为具名供应商/场址 | 禁止跨层或跨技术替代 | 供应商声明、IEC/IPC 数据、数据集审查 |
| `cp_process_energy` | 受控制造、组装、测试和发运 | 公用工程 | 仪表、设备日志和计算 | meter_id, carrier, start, end, consumption, tool_state, load, operating_time, allocation_driver | 优先分表计量；否则由实测负载和运行时间计算，并与场址总表核对 | `kWh`, `MJ` | 连续、每批或每班 | 代表性报告期 | 每个受控场址/过程 | 按能源载体求和；用已声明因果驱动量分配 | 仪表校准、账单、设备日志、核对记录 |
| `cp_process_materials_water` | 受控制造和组装 | 耗材和水 | 采购、领用、退回、回收和库存记录 | material_id, composition, opening_stock, purchases, issues, returns, recovery, closing_stock, process | 对每种命名材料进行库存平衡并分配至过程 | `kg`, `m3` 或原始单位 | 每批或每月 | 完整报告期 | 每个受控场址/过程 | 期初加采购，减期末、退回和调拨 | 库存台账、领料单、组成记录 |
| `cp_water_emissions` | 受控制造和组装 | 水和直接排放 | 计量、监测及许可记录 | source_or_substance, quantity, unit, compartment, treatment, sampling_method, detection_limit, period | 测量取排水和直接排放；无监测时采用有凭证且合规的计算 | `m3`, `kg` | 许可或运营频率 | 完整报告期 | 每个排放点 | 按物质、区室和处理求和；明确处理未检出值 | 实验室报告、许可报表、计算表 |
| `cp_yield_waste_rework` | 所有制造过程 | 良率、不合格品、返工和废物 | 制造执行和废物记录 | input_count_mass, accepted_count_mass, reject_reason, rework_route, waste_mass, destination, recovery | 核对投入、验收合格输出、内部返工和离开系统的废物 | 件数和 `kg` | 每批、每月核对 | 完整报告期 | 每个过程/场址 | 不重复计算返工；按类型和去向汇总离开系统的废物 | 良率报告、称重单、废物联单、核对表 |
| `cp_test_acceptance` | `firmware_test_and_acceptance` | 功能和质量 | 测试系统和处置记录 | firmware_version, test_profile, interface, performance_metric, threshold, result, duration, power_or_energy, disposition | 将自动或受控手工测试链接至配置和验收合格质量 | 声明技术单位、秒、`kWh` | 每台或合理抽样计划 | 同一生产期 | 每条测试路线 | 分别报告通过、返工和报废总体 | 测试程序、校准、测试日志、处置记录 |
| `cp_packaging` | 接收和发运 | 包装 | 包装规范和库存平衡 | material, item_mass, item_count, recycled_content, reusable_cycles, issued, wasted, destination | 称量代表性物品并核对采购/领用数量 | `kg` | 包装变更或每月 | 完整报告期 | 每个发运场址 | 按材料和可复用使用依据汇总；绝不计入卡净质量 | 包装规范、称量记录、库存台账 |
| `cp_allocation_drivers` | 共享运营 | 分配 | 仪表、MES 和会计记录 | shared_resource, total_quantity, product_quantity, driver, driver_total, rationale | 分配前选择并记录物理因果驱动量 | 驱动量原始单位 | 每个报告期 | 与共享活动相同 | 每个共享过程/场址 | 分配量等于共享总量乘产品驱动量占比 | 驱动量研究、仪表/设备日志、分配计算 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | `normalized_amount = reporting_period_amount / accepted_net_card_mass_kg` | 报告期数量；验收合格卡净质量 | 每 `1 kg` 参考流数量 | `tiangong-flow-verification-2026` |
| `calc_layer_mass_reconciliation` | 产品特定 BOM | `residual_support_mass = measured_net_card_mass - sum(primary_chip_package, pcb, memory, cooling, interface)`；使用前调查负值或无法解释的剩余 | 实测卡质量；分别实测必需层 | 披露的辅助部件质量和核对差异 | `mass-balance-identity` |
| `calc_count_to_mass` | 按件数记录的部件 | `part_mass = accepted_part_count * configuration_specific_unit_mass`；仅在有样本量和变异记录时采用抽样称量 | 件数；单位质量 | 部件质量 `kg` | `mass-balance-identity` |
| `calc_area_to_pcb_mass` | 按面积记录的 PCB | `pcb_mass = accepted_board_area * measured_areal_mass`；保留层数、厚度和表面处理 | 验收合格面积；设计特定面密度 | PCB 质量 `kg` | `mass-balance-identity` |
| `calc_energy_from_load_time` | 未直接计量的设备能源 | `energy = measured_average_load * operating_time`；将设备总量与上级仪表核对，并明确分配待机 | 负载、时间、上级仪表 | 按载体的能源 | `eu-pef-2021-2279` |
| `calc_stock_balance` | 工艺材料和包装 | `consumed = opening_stock + purchases + inbound_transfers - closing_stock - returns - outbound_transfers - recovered_for_reuse` | 库存和交易记录 | 过程消耗 | `mass-balance-identity` |
| `calc_yield` | 每个过程 | `mass_yield = accepted_output_mass / total_input_mass_of_corresponding_product_material`；相关时另报件数良率 | 投入、验收合格输出、不合格品 | 质量良率和件数良率 | `mass-balance-identity` |
| `calc_shared_allocation` | 共享活动 | `allocated_amount = shared_amount * product_driver / sum(all_product_drivers)` | 共享量；因果驱动量值 | 分配的前景数量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration_specificity` | 参考产品和 BOM | 以清单所用粒度识别卡型、配置、芯片/封装、PCB、内存、散热和接口；不得采用通用叶平均值。 | BOM 修订、产品规格、配置清单 |
| `dq_technological_representativeness` | 上游部件数据集 | 匹配半导体技术/封装、PCB 构造、内存技术、散热设计和连接器/模块类型；逐层披露所有代理。 | 供应商声明、数据集元数据、代理理由 |
| `dq_geographical_representativeness` | 制造和上游电力 | 已知时采用实际场址和供电地理；披露供应商地点不确定性。 | 场址记录、供应商/场址元数据、电力合同 |
| `dq_temporal_representativeness` | 前景记录 | 使用一个一致且近期的生产期，并对齐 BOM、能源、良率、废物和测试总体。 | 报告期台账和核对 |
| `dq_completeness` | 所有必需过程和层 | 核算每个必需部件层、必需过程、适用的受控条件过程、能源载体、材料废物、废水和直接排放；记录合理的零值及排除。 | 完整性矩阵和签署审查 |
| `dq_mass_balance` | 产品层和每个过程 | 核对投入、输出、废物、返工和库存变化。调查无法解释的差异，不得静默分配至辅助部件。 | 质量平衡表和差异处置 |
| `dq_measurement_quality` | 质量、能源、水和排放 | 记录适合各记录的仪器、校准、抽样、检出限、换算和不确定性。 | 校准和抽样记录 |
| `dq_supplier_evidence` | 采购部件 | 优先部件特定材料声明和上游数据集。声明提供组成证据，但不能替代制造能源、良率、废物或排放数据。 | 供应商声明和独立上游数据集审查 |
| `dq_no_unreviewed_defaults` | 缺失定量数据 | 经审查数据集不得采用类别范围默认值或推理估计，除非其已单独批准、标记为可替换，并得到适用于声明卡型的支持。 | 缺口登记、批准和替换计划 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 数据集身份 | 确认 CPC 3.0 `45281`、精确参考产品 UUID、Mass 属性 UUID、Units of mass UUID 和 `kg`；拒绝狭义或宽义代理产品。 | `un-cpc-3-2025`; `tiangong-flow-verification-2026` |
| `validation_qualifiers` | 参考流 | 任一必需限定信息缺失，或卡型、主要功能、主机接口、配置、场址或报告期含糊时，完整性校验失败。 | `itu-t-l1410-2024` |
| `validation_layer_separation` | 物料清单 | 确认分别存在芯片/封装、PCB、内存、散热、接口和辅助部件记录，并与实测卡净质量核对。 | `itu-t-l1410-2024`; `ipc-1752a-2018`; `mass-balance-identity` |
| `validation_no_leaf_extrapolation` | 代表性 | 拒绝声称单一 GPU、网络、视频、声卡或加速卡代表全部 CPC `45281`；按同质性和加权规则校验任何产品系列组合。 | `un-cpc-3-2025`; `itu-t-l1410-2024` |
| `validation_boundary_control` | 条件制造 | 核验裸 PCB 或半导体/封装前景制造的运营控制证据；否则要求供应商上游链接并排除虚构前景清单。 | `eu-pef-2021-2279` |
| `validation_process_completeness` | 过程图 | 确认纳入全部必需过程和每个适用条件过程；对不适用行提供明确零值或排除证据。 | `eu-pef-2021-2279`; `ipc-jstd001j-a610j-2024` |
| `validation_yield_rework_waste` | 制造清单 | 核对验收合格输出、不合格品、内部返工和离开系统的废物；防止重复计算返工卡和回收部件。 | `mass-balance-identity` |
| `validation_energy_material_emissions` | 场址清单 | 确认能源不是仅由功率推断，材料经过库存平衡，直接排放按区室记录且不单由采购量推断。 | `eu-pef-2021-2279` |
| `validation_allocation` | 共享活动 | 确认已尝试细分，所选驱动量具有物理因果关系，总量核对一致，且平均值不跨越不同主要功能或主机接口。 | `eu-pef-2021-2279` |
| `validation_packaging_reference_mass` | 发运输出 | 确认可拆卸包装负荷纳入清单，而包装、单独供货电缆、备件和附件不计入 `1 kg` 参考产品质量。 | `eu-pef-2021-2279`; `mass-balance-identity` |
| `validation_source_and_uuid_status` | 发布审查 | 核验来源访问日期和精确流身份。将未解决非参考 UUID 与缺失定量证据视为已披露不完整性，不得据此替换为通用流或估计值。 | `tiangong-flow-verification-2026` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一种已声明 CPC 3.0 `45281` 卡型和配置的产品及场址特定从摇篮到制造厂门前景数据包 |
| downstream_use | 为电子设备、AI/数据中心基础设施及相关系统构建经审查的 `process` 和 `lifecyclemodel` 投影 |
| allowed_use | 仅在配置具有等效功能、性能依据、主机接口、边界、地理、时期和数据质量时比较或汇总；生命周期模型可添加明确使用和寿命终结情景 |
| excluded_use | 裸 IC、裸 PCB、完整计算机/服务器、集线器/路由器/网关或外部外围设备建模；以一个卡子类型代表整个 CPC 叶；仅凭本从摇篮到工厂门数据包作使用阶段声明 |
| required_metadata | 全部参考流限定信息；CPC 身份；精确 UUID 链；BOM 修订；卡型和配置；生产路线；场址/地理/时期；运营控制声明；良率；分配；供应商数据状态；包装排除 |
| required_quality_disclosure | 分层上游覆盖与代理；一手与二手数据；测量和抽样依据；缺失非参考 UUID；质量平衡差异；条件过程适用性；排除流；不确定性和数据缺口 |
| update_trigger | 卡架构、主芯片/封装、PCB 叠层、内存、散热、接口、固件/测试方案、供应商路线、场址、能源供应、良率、包装、分类、参考身份或证据依据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，官方 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；官方类别详情：https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/45281；检索于 2026-08-09 | 精确类别身份、所含扩展卡示例以及集线器、路由器和网关排除 |
| `tiangong-flow-verification-2026` | `dataset` | 2026-08-09 天工 LCA CLI 只读核验：状态码 `100` 的 Product flow `cc906112-5ebd-437c-b701-88faeeac2f81`，精确 CPC 3.0 `45281`；Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位 `kg` | 参考产品身份和单位链；未推断非参考清单 UUID |
| `itu-t-l1410-2024` | `standard` | ITU-T Recommendation L.1410，Methodology for environmental life cycle assessments of information and communication technology goods, networks and services，11/2024，https://handle.itu.int/11.1002/1000/16010；检索于 2026-08-09 | ICT 产品功能单位限定信息、电子/机械/散热/电缆及 PCBA 的分层部件结构、上游生命周期覆盖和从摇篮到工厂门报告 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会 Recommendation (EU) 2021/2279 关于 Environmental Footprint 方法，Annex I Product Environmental Footprint method，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279；检索于 2026-08-09 | 产品特定物料清单、公司特定制造数据、功能/声明单位、参考流、分配、完整性和数据质量控制 |
| `ipc-1752a-2018` | `standard` | IPC-1752A，Materials Declaration Management，IPC 官方材料声明页面，https://www.electronics.org/materials-declaration-data-exchange-standards-homepage；检索于 2026-08-09 | 大宗材料、部件、印制板、子组件和产品的供应商材料声明 |
| `iec-62474-2018` | `standard` | IEC 62474:2018，Material declaration for products of and for the electrotechnical industry，https://webstore.iec.ch/en/publication/29857；检索于 2026-08-09 | 供应商材料声明结构，以及组成声明不能替代工艺化学品或使用排放记录这一限制 |
| `ipc-jstd001j-a610j-2024` | `standard` | IPC，J-STD-001J 和 IPC-A-610J 发布公告，https://www.electronics.org/news-release/ipc-releases-j-revisions-two-leading-standards-electronics-assembly；检索于 2026-08-09 | 焊接材料/过程控制、印制板组装和组装后验收证据 |
| `mass-balance-identity` | `method_factor` | 物理质量平衡恒等式：同一声明过程边界和时期内，实测投入等于输出、库存变动、废物和实测排放之和 | 分层核对、良率、库存平衡、废物和校验计算；不含类别特定数值因子 |
