---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.video-recording-or-reproducing-apparatus
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 视频记录或重放设备

## 1. 范围与适用性

本 PCR 适用于以记录视频、重放视频或兼具两种功能为主要用途的完整设备。范围覆盖监控系统、媒体播放、家庭娱乐和专业视频链路使用的设备，包括多通道数字或网络视频记录设备、本地介质记录与播放设备、光盘视频记录与播放设备、固态或硬盘视频设备以及专业记录/播出机。前景数据集应代表明确声明的产品族或生产配置，不得以某一台默认 DVR、NVR 或其他单一型号代表整个类别。

声明的配置应区分仅记录、仅重放及记录/重放组合设备；网络与本地介质运行方式；通道数；支持的输入和输出分辨率；已安装和最大支持的存储；适用的运行、空闲、待机、网络待机和关机模式；以及印制电路板组件、存储设备、电源、外壳零件、随附附件、线缆和包装的质量与类型。

本 PCR 不包括摄像机和摄录一体机、电视接收机、监视器和投影机、纯音频记录或重放设备、单独交易的零部件、未录制或已录制介质，以及主要功能并非视频记录或重放的通用计算机或服务器。不得仅因这些排除产品与参考设备位于同一视频系统中就把它们合并进来。默认生产边界为工厂大门；使用阶段和寿命终结阶段属于条件性扩展，纳入时应遵循下述规则。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.video-recording-or-reproducing-apparatus |
| classification_refs | CPC 3.0:47323（exact） |
| covered_products | 用于监控、媒体播放、家庭娱乐或专业视频链路的完整视频记录、视频重放或记录/重放组合设备；当视频记录或重放为其主要功能时，网络设备和本地介质设备均在范围内。 |
| excluded_products | 摄像机和摄录一体机；电视接收机；监视器和投影机；纯音频设备；单独交易的零部件和记录介质；通用计算机和服务器；不完整组件；以及未声明代表性产品、仅由某一商业 DVR/NVR 型号定义的数据集。 |
| representative_product | 一个声明的成品配置或按产量加权的产品族，并按记录/重放功能、网络/本地介质、通道数与分辨率、存储配置、功耗模式以及组件/附件配置分型。 |
| production_route | 外购电子与机械组件接收和验证；装配与存储安装；固件加载和配置；功能与电气测试；包装和工厂大门放行。 |
| market_state | 声明的出厂配置下完整放行的设备，包括声明的内部或外部电源、已安装存储、外壳、线缆、遥控器和其他随附附件；包装单独记录。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合声明配置和放行要求的成品视频记录或重放设备。 |
| How much | 工厂大门处 1 kg 成品设备净质量。 |
| How well | 经过物料清单核对且功能完整并已放行的设备，已声明功能、连接方式、通道、分辨率、存储、功耗模式、电源、外壳和随附附件。 |
| How long or cycle | 声明报告期内的一个放行生产配置或按产量加权的产品族；使用寿命和工作循环不嵌入工厂大门参考数量。 |
| reference_flow_link | 天工 Product flow `72f5238b-6dc7-456f-bdd7-87c02608d719` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 录像或复制设备 `72f5238b-6dc7-456f-bdd7-87c02608d719` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仅记录、仅重放或记录/重放组合功能；网络和/或本地介质运行；通道数；支持的输入和输出分辨率；已安装和最大支持的存储及存储技术；适用的运行、空闲、待机、网络待机和关机模式定义及功率；内部或外部电源配置；PCB 组件、存储、电源、外壳、附件、线缆、电池和包装的质量拆分；随附附件；销售地域；生产期间；产品族加权方法 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量完整出厂设备及声明随附附件的净质量，不包括包装。把前景清单归一化为恰好 1 kg。声明可拆卸外部电源、遥控器、电池和线缆是否计入产品净质量。 |
| `configuration_identity` | 所代表的产品族 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录产品族平均中每个配置的质量和产量。对于记录/重放功能、网络/本地介质架构、通道或分辨率等级、存储配置或随附附件组合存在实质差异的产品，不得在未披露权重和保留差异的情况下合并平均。 |
| `component_mass_split` | 物料清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将参考质量与分别记录的 PCB 组件、存储设备、电源、外壳和机械零件、电池、集成显示器（如有）、线缆及随附附件核对。包装记录在产品净质量之外。 |
| `mode_power_measurement` | 设备及随附外部电源 | Electrical power | W | 在出厂或声明的默认配置下，于交流电源输入端测量。记录电压、频率、测量不确定度、连接端口、启用的网络/控制协议、通道与分辨率负载、存储状态和模式转换条件。分别测量适用的记录、播放、同时记录/播放、空闲、待机、网络待机和关机模式；不得用铭牌功率替代。 |
| `use_energy_conversion` | 使用阶段扩展 | Energy | kWh | 能耗按所有声明模式的功率 W 与时间 h 乘积求和后除以 1000。使用寿命、年度小时数、通道负载、存储活动及工作循环占比应作为情景输入，不得作为通用默认值。 |
| `packaging_mass` | 包装放行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料称量初级、次级和运输包装，并按每 1 kg 产品净质量报告；不得把包装加入参考数量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂验收的外购组件和材料输入，并记录供应商身份、地域、技术、声称再生含量的依据及上游数据集引用。 |
| starting_condition_role | 前景边界从工厂接收与验证开始；PCB 组件、存储设备、电源、外壳材料、附件、电力、燃料和包装的上游生产由链接的背景或供应商数据集表示。 |
| product_classification_scope | 仅限完整 CPC 3.0 子类 47323 设备；被排除的视频系统设备和单独交易零部件仍属不同产品类别。 |
| recursive_input_rule | 若某项输入本身满足本 PCR，则将其作为外购产品记录，附其供应商数据集和声明的起始条件；不得在接收方前景过程中递归重建其制造。 |
| upstream_dataset_requirement | 对高质量或高影响输入采用技术、地域和时期具有代表性的数据集；经验证时保留供应商特定数据。代理数据必须披露身份、代表性和替代关系。 |
| disclosure | 声明代表的功能/配置、工厂场址、报告期、产品族权重、所含组件与附件、包装约定、截断、代理、排除阶段，以及是否纳入使用和寿命终结扩展。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing` | 工厂大门前景 | 纳入组件接收与验证、装配、存储安装、固件加载与配置、功能/电气测试、返工与良率损失、包装、公用工程、现场排放和废物，以及工厂大门放行。链接外购组件、材料、能源和包装的上游供应数据集。 | `iec-63366-2025`; `iso-14044-2006` |
| `boundary_use_stage` | 使用阶段扩展 | 仅当声明的使用阶段或从摇篮到坟墓研究纳入范围时，计入运行、空闲、待机、网络待机和关机模式电力。使用实测模式功率和明确的使用寿命、工作循环、通道/分辨率负载、存储活动及网络状态假设；工厂大门结果须单独可见。 | `iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826`; `iec-62301-2026`; `iec-63474-2026` |
| `boundary_end_of_life` | 寿命终结扩展 | 纳入寿命终结时，使用声明的地域和情景，建模收集、适用的再使用准备、电池及其他选择性拆除、拆解、再生、回收和处置。再生含量输入与寿命终结信用应在方法上保持区分。 | `eu-weee-2012-19`; `iec-tr-62635-2012`; `iec-63366-2025` |
| `boundary_exclusions` | 产品与系统范围 | 排除摄像机/摄录一体机、电视机、监视器/投影机、纯音频设备、单独交易的零部件/介质、外部显示器和摄像机、用户网络与内容服务以及通用计算设备；扩展系统研究明确以单独数据集加入的除外。 | `unsd-cpc-3-0-structure` |
| `boundary_component_resolution` | 外购电子件与组件 | 对 PCB 组件、存储设备、电源、外壳/机械零件、附件/线缆、电池和包装保留独立清单分辨率。记录允许时不得折叠为未说明的电子件输入。 | `iec-62474-2018`; `eu-rohs-2011-65` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_supply` | 组件与材料供应 | required | 始终纳入外购组件、材料、附件与包装输入及来料拒收。 | 建立按 BOM 解析的起始条件并链接上游供应数据集。 | 每 1 kg 放行参考产品净质量。 |
| `equipment_assembly` | 设备装配与存储安装 | required | 始终纳入机械/电子装配、存储安装、内部布线、焊接或紧固、公用工程、废料和返工。 | 从已验证输入生产已装配设备。 | 每 kg 转出的已装配设备。 |
| `firmware_configuration` | 固件加载与配置 | required | 纳入固件加载、配置、数据擦除或初始化及配置特定良率。 | 建立记录/播放、网络/本地介质、通道、分辨率和存储功能。 | 每 kg 转出的已配置设备。 |
| `functional_test` | 功能与电气测试 | required | 纳入功能测试、实施时的老化测试、功率检查、测试能耗、故障及返工回流。 | 验证放行功能并形成实测功耗模式画像。 | 每 kg 转出的已测试设备。 |
| `packaging_release` | 包装与工厂大门放行 | required | 纳入包装材料、最终检验、随附附件汇集、包装损失和放行输出。 | 在工厂大门生产参考产品。 | 1 kg 放行参考产品净质量。 |
| `use_operation` | 使用阶段运行 | conditional | 仅在声明的使用阶段或从摇篮到坟墓研究中纳入。 | 将实测模式功率和声明的时间占比换算为使用电力。 | 每 1 kg 参考产品的声明使用寿命。 |
| `end_of_life` | 寿命终结处理 | conditional | 仅在声明的下游或从摇篮到坟墓研究中纳入。 | 表示收集、选择性拆除、拆解、回收和处置。 | 每 kg 进入声明情景的废弃参考产品。 |

### 过程：组件与材料供应（`component_supply`）

#### 输入

##### 产品流

###### PCB 组件（`pcb_assemblies`）

按功能和供应商记录已装联 PCB，包括主逻辑/视频处理板、接口板、存在时的调谐或采集板及控制板。

- 选定流：PCB assemblies（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：进入生产的前景 BOM 质量，包括来料拒收和返工所需毛输入，按 1 kg 放行产品归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass_reconciliation`
- 来源：`iec-62474-2018`; `eu-rohs-2011-65`

###### 存储设备（`storage_devices`）

按技术、容量、数量和供应商分别记录已安装硬盘、固态存储、光驱和可移除存储硬件。

- 选定流：Storage devices for video apparatus（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按存储技术和已安装配置记录前景 BOM 质量，并按 1 kg 放行产品归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_configuration`
- 来源：`iec-62474-2018`

###### 电源、外壳与附件（`other_component_inputs`）

将内部或外部电源、外壳与机械零件、冷却装置、电池、线缆、遥控器、机架件及其他随附附件记录为独立 BOM 行。

- 选定流：Power supply, enclosure, and accessory components（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按组件族记录前景 BOM 质量，包括毛输入和拒收，并按 1 kg 放行产品归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass_reconciliation`
- 来源：`iec-62474-2018`; `eu-rohs-2011-65`

#### 输出

##### 产品流

###### 已验证组件组合（`verified_component_set`）

将配置特定且质量已核对的组件组合转入装配。

- 选定流：Verified component set（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：移除来料拒收后转入装配的验收组件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收组件组合
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass_reconciliation`
- 来源：

##### 废物流

###### 来料拒收（`incoming_rejects`）

按材料或组件类型及实际处理路径记录被拒组件和包装。

- 选定流：Incoming rejected electronic and mechanical components（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：退回、回收或处置前实测的毛拒收质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收组件组合
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass_reconciliation`
- 来源：

### 过程：设备装配与存储安装（`equipment_assembly`）

#### 输入

##### 产品流

###### 已验证组件（`assembly_components`）

记录进入物理装配和存储安装的组件组合。

- 选定流：Verified component set（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：进入装配的实测验收质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已装配设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 装配电力（`assembly_electricity`）

记录装配、存储安装、紧固、焊接、清洁以及分配的共享产线服务所用计量电力。

- 选定流：Electricity supply for equipment assembly（语义候选；天工 UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：过程实测电力加上有记录的共享产线电力分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已装配设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

#### 输出

##### 产品流

###### 已装配设备（`assembled_apparatus`）

将带已安装存储的物理装配设备转入固件配置。

- 选定流：Assembled video apparatus（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出，并单独跟踪返工回流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已装配设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 废物流

###### 装配废料（`assembly_scrap`）

按实测处理路径记录 PCB、金属、塑料、线缆、紧固件、存储、焊料和混合废料。

- 选定流：Assembly scrap by material and treatment route（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：离开装配的实测毛废料，不包括内部返工设备。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已装配设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

### 过程：固件加载与配置（`firmware_configuration`）

#### 输入

##### 产品流

###### 已装配设备输入（`firmware_input`）

记录进入固件加载、初始化、通道/分辨率配置和存储设置的设备。

- 选定流：Assembled video apparatus（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：前景转移记录，包括因配置失败产生的重复处理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已配置设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_firmware_yield`
- 来源：

#### 输出

##### 产品流

###### 已配置设备（`configured_apparatus`）

将成功配置并记录了固件、功能、网络/本地介质、通道、分辨率和存储身份的设备转入测试。

- 选定流：Configured video apparatus（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：单独记录故障和返工设备后的合格配置输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已配置设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_firmware_yield`
- 来源：

### 过程：功能与电气测试（`functional_test`）

#### 输入

##### 产品流

###### 已配置设备输入（`test_input`）

记录进入功能、记录、播放、网络、接口、存储和功率测试的已配置设备。

- 选定流：Configured video apparatus（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：前景转移记录，包括重复测试和返工循环。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已测试设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_power_and_yield`
- 来源：

###### 测试电力（`test_electricity`）

记录测试台、实施时的老化测试、附加测试存储以及分配的共享测试基础设施所用电力。

- 选定流：Electricity supply for functional testing（语义候选；天工 UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：包括重复测试在内的实测测试电力，并按合格测试输出归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已测试设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

#### 输出

##### 产品流

###### 已测试设备（`tested_apparatus`）

将满足声明功能与电气放行要求的设备转入包装。

- 选定流：Tested video apparatus（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：单独记录故障和返工后的合格测试输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已测试设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_power_and_yield`
- 来源：

##### 废物流

###### 故障设备与测试拒收（`test_rejects`）

记录故障设备、替换组件和不可修复测试拒收，不得与内部返工净额抵销。

- 选定流：Failed video apparatus and replaced components（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：送往返工、组件回收、再生或处置的毛质量，并标明每条路径。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已测试设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_power_and_yield`
- 来源：

### 过程：包装与工厂大门放行（`packaging_release`）

#### 输入

##### 产品流

###### 已测试设备输入（`packaging_input`）

记录进入最终检验和包装的已测试设备及其声明附件。

- 选定流：Tested video apparatus（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：进入放行环节的设备实测净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：

###### 包装材料（`packaging_materials`）

按材料记录纸箱、模塑纤维、塑料薄膜和泡沫、托盘、标签、说明书及其他包装。

- 选定流：Packaging materials by material type（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 放行产品净质量所需的包装毛输入，包括过程损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：

#### 输出

##### 产品流

###### 放行参考产品（`reference_product`）

输出为本 PCR 选定的准确 CPC 3.0:47323 产品流，并满足声明的放行要求。

- 选定流：录像或复制设备 `72f5238b-6dc7-456f-bdd7-87c02608d719`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 放行设备净质量，不包括包装，只包括声明的随附组件和附件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 放行参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：

### 过程：使用阶段运行（`use_operation`）

#### 输入

##### 产品流

###### 使用电力（`use_electricity`）

记录由实测模式功率和明确情景小时数计算的电力。汇总前先报告各模式结果。

- 选定流：Electricity supply for declared use geography（语义候选；天工 UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：所有声明模式的实测功率乘以情景小时数后求和并除以 1000；不得使用铭牌功率或未声明的默认工作循环。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品的声明使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mode_power_profile`
- 来源：`iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826`; `iec-62301-2026`; `iec-63474-2026`

### 过程：寿命终结处理（`end_of_life`）

#### 输入

##### 废物流

###### 废弃设备（`discarded_apparatus`）

记录进入声明收集和处理情景的废弃设备，并分别识别再使用和收集损失。

- 选定流：Waste video recording or reproducing apparatus（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：声明使用寿命结束后，每 kg 参考产品进入各处理路径的废弃质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 参考产品的声明使用寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eol_records`
- 来源：`eu-weee-2012-19`; `iec-tr-62635-2012`

#### 输出

##### 产品流

###### 回收组分（`recovered_fractions`）

按实际去向和质量记录可再使用设备或零件，以及回收的金属、塑料、玻璃、PCB、存储和电池组分。

- 选定流：Reused products and recovered material fractions（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按组分和去向记录实测输出质量；除非所选 LCA 方法和情景另行声明，不得赋予避免产品信用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 进入处理的废弃设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eol_records`
- 来源：`eu-weee-2012-19`; `iec-tr-62635-2012`

##### 废物流

###### 处理残余物（`treatment_residues`）

按材料、处理方式和最终去向记录危险及非危险处理残余物。

- 选定流：End-of-life treatment residues（语义候选；天工 UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按处理路径和最终去向记录实测残余物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 进入处理的废弃设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eol_records`
- 来源：`eu-weee-2012-19`; `iec-tr-62635-2012`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有前景过程 | 通过过程细分、独立计量、配置特定 BOM 及明确记录返工循环来避免分配。不得仅因设备共享系统或产线就把被排除的摄像机、显示器、电视机或通用计算设备负荷分配给参考设备。 | `iso-14044-2006`; `iec-63366-2025` |
| `allocation_shared_resources` | 共享产线能源、公用工程和材料 | 采用实测周期时间和运行功率、机器小时或其他因果物理驱动量分配共享电力和公用工程。可直接归属的材料按 BOM 或实测质量分配。无法避免非物理依据时，记录原因、数据、结果和敏感性。 | `iso-14044-2006`; `iec-63366-2025` |
| `allocation_rework_and_recovery` | 返工、废料、共产品和寿命终结回收 | 分配前记录毛输入、合格输出、内部返工、拒收和处理路径。可销售共产品在可行时按声明的物理关系承担负荷；任何经济分配或避免产品信用须作为披露的替代情景，不得与前景质量平衡混合。 | `iso-14044-2006`; `iec-63366-2025`; `iec-tr-62635-2012` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass_reconciliation` | `component_supply` | 外购组件和参考产品净质量 | ERP/BOM、供应商声明、校准秤记录 | configuration id; component id; supplier; component family; material; quantity; unit mass; gross mass; net released mass; reject mass; inclusion in reference mass | 导出 BOM 和收货记录，用校准称量验证代表性单件质量，并与放行产品质量核对。 | kg | 每个配置和 BOM 修订；按月汇总 | 具有代表性的报告期，通常至少连续 12 个月或完整的较短生产期 | 每个代表工厂，并尽可能覆盖供应商特定输入 | 按配置产量加权；保留组件族小计和毛质量到净质量核对。 | BOM 修订、供应商声明、秤校准、核对签字 |
| `cp_storage_configuration` | `component_supply` | 存储设备 | BOM、序列号/配置日志、供应商规格 | configuration id; technology; device count; installed capacity; maximum supported capacity; removable/fixed status; unit mass; supplier; firmware dependence | 将已安装存储硬件与 BOM 和抽样成品核对；仅支持但未安装的容量只作元数据记录。 | kg 和声明容量单位 | 每个配置和存储选项 | 与参考生产相同期间 | 每个代表配置和工厂 | 按已安装配置的产量加权；不得把支持容量当作已安装质量。 | BOM、序列号/配置报告、供应商规格、抽样检查 |
| `cp_assembly_records` | `equipment_assembly` | 装配输入、输出、废料和返工 | MES 批次记录、称重单、废料日志 | batch; configuration; component input mass; good output mass; rework mass; scrap type; scrap mass; destination; timestamp | 收集批次毛流量，净额抵销前保留内部返工循环。 | kg | 每批次或班次 | 与参考生产相同期间 | 每条代表装配线 | 按配置汇总毛流量并按合格装配输出归一化。 | MES 审计轨迹、秤校准、废物转移记录 |
| `cp_energy_meters` | `equipment_assembly`; `functional_test` | 过程电力与共享公用工程 | 分表日志和设备运行时间记录 | meter id; process; start/end reading; voltage; power; runtime; batch; good output; rework cycles; allocation driver | 优先使用专用电表；否则结合实测设备功率和记录的运行时间，并记录共享资源分配。 | kWh | 每批/班次或连续记录 | 包含正常生产波动的代表性运行期 | 每条代表产线和测试区域 | 单独计量时扣除有记录的空闲/非生产用能；记录返工后按合格输出归一化。 | 电表校准、时间戳、运行日志、分配工作表 |
| `cp_firmware_yield` | `firmware_configuration` | 已配置输出、重试和故障 | 工位日志和固件部署记录 | configuration id; firmware version; function class; network/local-medium state; channel count; resolution; storage setup; pass; retry; failure; timestamp | 导出工位级部署结果，并核对通过、重试、故障和转移质量。 | kg 和 count | 每台或每批 | 与参考生产相同期间 | 每个代表配置工位 | 按配置和固件版本汇总；保留重试率和故障率。 | 已签署软件发布、工位日志、良率核对 |
| `cp_test_power_and_yield` | `functional_test` | 已测试输出、故障和放行功率检查 | 测试工位日志、故障报告、功率计记录 | configuration; test profile; channel load; resolution; storage state; network state; pass/fail; rework route; mode power; voltage; frequency; uncertainty | 导出附设备配置和测试条件的功能测试结果与功率检查，并将故障与返工或废物核对。 | kg、count、W | 每台或有统计依据的批次抽样 | 与参考生产相同期间 | 每条代表测试线和配置 | 按配置汇总良率；保留功率观测但不得替代专用使用模式协议。 | 测试规程、仪器校准、工位日志、故障处置 |
| `cp_packaging_release` | `packaging_release` | 放行参考产品与包装 | 包装 BOM、最终检验、称量记录、发运记录 | configuration; product mass; accessory mass; external PSU mass; battery mass; cable mass; packaging material; packaging mass; released count; reject/repack mass | 称量代表性完整放行产品和包装组件；核对包装数量、发运和产品净质量。 | kg 和 count | 每个配置和包装修订；按月汇总 | 与参考生产相同期间 | 每个代表包装场址 | 按配置产量加权；包装保持在产品净质量之外。 | 秤校准、包装规格、放行与发运核对 |
| `cp_mode_power_profile` | `use_operation` | 适用的运行与低功耗模式 | 受控功率测量 | configuration; supply voltage; frequency; power factor; connected ports; enabled protocols; channel load; resolution; storage state; mode; transition condition; stable power; uncertainty | 使用适用 IEC 和法规模式定义，在声明默认配置下测量交流输入功率；对实质不同的配置和模式重复测量。 | W | 每个代表配置以及固件/电源管理修订 | 当前销售配置和固件 | 使用可溯源仪器的实验室或生产场所 | 报告模式级观测；产品族平均需要产量权重，并应保留最小/最大观测而不虚构类别默认值。 | 测试方法、仪表校准、原始时间序列、配置照片/日志 |
| `cp_use_duty_cycle` | `use_operation` | 使用寿命与模式小时数 | 情景记录、现场遥测、客户研究或明确假设 | geography; application; annual hours by mode; channel occupancy; resolution; storage write/read duty; network state; service life; source; uncertainty | 采用代表性实测或有文件依据的情景数据；没有一手证据时标记假设并提供敏感性。 | h/year 和 years | 每个使用情景 | 声明的情景期间 | 声明的市场和应用 | 模式小时数之和须等于声明年度；仅在情景校验后乘以声明使用寿命。 | 遥测/研究引用或已签署情景假设及敏感性 |
| `cp_eol_records` | `end_of_life` | 收集、再使用、回收组分和残余物 | 运营商地磅、处理报告、情景数据集 | geography; collection rate; reuse share; dismantling input; removed battery/PCB/storage; recovered fraction; residue; destination; loss; credit method | 使用运营商或官方情景记录，并维持收集和处理全过程质量平衡。 | kg | 每个运营商/报告期或声明情景 | 代表处置地域的期间 | 声明情景中的所有处理路径 | 按路径占比加权；分别报告未收集质量、再使用、再生、回收和处置。 | 运营许可/报告、地磅记录、质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有制造清单 | 将各前景毛流量除以同一核对生产范围内的放行参考产品净 kg。 | 毛流量；放行产品质量 | 每 1 kg 参考产品的流量 | `iso-14044-2006`; `iec-63366-2025` |
| `calc_family_weighting` | 多配置数据集 | 将每个配置的归一化结果乘以其放行产量占比后求和；披露所含配置和权重。 | 配置结果；放行数量 | 产量加权产品族结果 | `iec-63366-2025` |
| `calc_mass_balance` | 制造与寿命终结 | 核对期初输入、合格输出、内部返工、拒收、回收组分、残余物、实测排放及库存变化；调查无法解释的失衡，不得强行闭合。 | 质量输入；输出；库存变化 | 质量平衡残差和完整性结果 | `iso-14044-2006`; `iec-tr-62635-2012` |
| `calc_use_energy` | 使用阶段情景 | 对所有声明模式 m，E = sum(P_m × t_m) / 1000；先分别计算各模式再求和，使用寿命乘算保留为情景步骤。 | 模式功率 P_m（W）；模式时间 t_m（h） | 电力（kWh） | `iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826`; `iec-62301-2026`; `iec-63474-2026` |
| `calc_yield_and_rework` | 装配、配置和测试 | 记录毛通过量和返工循环；良率等于验收输出除以进入适用判定点的总台数或质量。不得抹除失败尝试的能耗和组件损失。 | 输入；验收输出；返工；拒收 | 良率、毛资源使用和拒收流 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 必须具备准确 CPC 3.0:47323 身份及全部必需限定信息，并检查排除项。 | 产品规格、配置矩阵、CPC 判定记录、参考流 UUID 检查 |
| `dq_bom_completeness` | 组件供应 | PCB 组件、存储、电源、外壳/机械零件、附件/线缆、电池、集成显示器（如有）和包装须分别可见并完成核对。 | BOM 与称量核对、供应商声明、缺失行评审 |
| `dq_temporal_geographic_technology` | 所有链接数据 | 记录生产期间、工厂地域、配置/固件、供应商技术和代理差异。 | 数据质量评估和数据集元数据 |
| `dq_energy_coverage` | 装配、测试和使用 | 记录电表覆盖、校准、共享能源分配、重复测试、适用功耗模式、测试条件和测量不确定度。 | 电表图、校准证书、原始日志、分配工作表、模式功率报告 |
| `dq_mass_balance` | 制造与寿命终结 | 在可行的最细层级检查毛输入、合格输出、返工、拒收、回收组分、残余物及库存变化。 | 已签署质量平衡表和异常日志 |
| `dq_source_traceability` | 外部方法与情景证据 | 每个外部来源 ID 须解析到稳定引用；假设和未解析的语义流候选应保持显式。 | 来源登记、检索记录、未解析流评审 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 产品身份 | 若所代表产品的主要功能不是 CPC 3.0:47323 视频记录或重放，或无声明地纳入摄像机、电视机、监视器/投影机、纯音频设备、单独交易零部件/介质或通用计算机，则失败。 | `unsd-cpc-3-0-structure` |
| `val_reference_uuid_mass` | 参考流 | 要求 Product flow `72f5238b-6dc7-456f-bdd7-87c02608d719`、作者验证时 state code 100、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg，以及恰好 1 kg 放行参考产品净质量。 |  |
| `val_configuration` | 数据集元数据 | 要求记录/重放功能、网络/本地介质架构、通道、分辨率、已安装/支持存储、电源配置、适用功耗模式、组件/附件拆分、生产期间、地域和产品族权重。以单一型号数据集充当类别默认值则失败。 | `iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826` |
| `val_bom` | 组件与包装清单 | 要求核对产品净质量，并分别记录 PCB、存储、电源、外壳/机械、附件/线缆、电池和包装；具体数据集发布前应标记尚未解析的重要天工流 UUID。 | `iec-62474-2018`; `eu-rohs-2011-65` |
| `val_process_coverage` | 制造清单 | 要求组件供应、装配、固件配置、测试和包装/放行，包含良率、返工、拒收、过程能源、包装和废物处理。 | `iec-63366-2025`; `iso-14044-2006` |
| `val_power_modes` | 使用阶段扩展 | 要求对每个适用运行和低功耗模式进行交流输入功率测量，并记录电压、频率、网络/控制状态、通道/分辨率负载、存储状态、转换条件和不确定度。仅用铭牌功率的使用结果失败。 | `iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826`; `iec-62301-2026`; `iec-63474-2026` |
| `val_use_energy` | 使用阶段扩展 | 要求明确使用寿命及加总等于声明时间基准的模式小时数；从模式级 W 和 h 重新计算 kWh，并保持工厂大门结果可见。 | `iec-62087-4-2015`; `energy-star-av-v3-2014` |
| `val_boundary_allocation` | 系统模型 | 要求声明边界、截断、上游数据集、代理、分配驱动量、返工处理及任何回收信用。不得在未单独报告的情况下把扩展使用/寿命终结结果与工厂大门结果混合。 | `iso-14044-2006`; `iec-63366-2025` |
| `val_end_of_life` | 寿命终结扩展 | 纳入寿命终结时，要求地域、收集、再使用、选择性拆除、处理路径占比、回收组分、残余物、损失、质量平衡和信用方法。 | `eu-weee-2012-19`; `iec-tr-62635-2012` |
| `val_sources` | 证据可追溯性 | 要求每个使用的来源 ID 均存在于第 11 节；禁止把搜索摘要、未经验证的数值默认值或无记录估算作为最终证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整视频记录或重放设备的前景生产数据包，可附加单独声明的使用和寿命终结扩展。 |
| downstream_use | 构建天工 flow、process 和 lifecyclemodel 投影，以及范围与声明配置匹配的产品足迹或比较研究。 |
| allowed_use | CPC 3.0:47323 设备的工厂大门建模；在功能等效性、边界、数据质量、功耗模式、存储、附件和情景假设对齐时比较声明配置；使用和寿命终结结果单独可见的扩展研究。 |
| excluded_use | 摄像机、电视机、监视器/投影机、纯音频设备、单独交易的组件/介质或通用计算机；把某一 DVR/NVR 型号无披露外推到整个类别；使用铭牌功率或隐藏的工作循环、存储、寿命、分配或回收假设进行比较。 |
| required_metadata | 规范 PCR id；CPC 代码；参考流 UUID 和质量基准；全部必需限定信息；配置矩阵和权重；工厂/场址和期间；BOM/组件拆分；制造过程覆盖；边界/截断；上游数据集/代理；分配；适用功率测量和情景；纳入时的寿命终结情景；来源 ID；未解析语义流候选。 |
| required_quality_disclosure | 一手与二手数据占比；供应商/场址特定性；时间、地域和技术代表性；BOM 与质量平衡完整性；电表覆盖和不确定度；良率和返工；代理使用；产品族权重；排除阶段；情景敏感性；未解析定量证据和流 UUID。 |
| update_trigger | 产品架构、通道/分辨率等级、网络/本地介质功能、存储技术/配置、PCB 或电源、附件组合、固件电源管理、生产路线/场址、产品族组合、适用法规/标准或背景数据集发生对身份、清单、功耗或解释有实质影响的变化。 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure` | official_guidance | 联合国统计司，Proposed CPC Version 3.0 Structure，子类 47323 及相邻排除类别，https://unstats.un.org/unsd/classifications/CPC/Documents/3-Proposed-CPC-Ver3-Structure-20Nov2023.pdf（检索于 2026-08-09） | 准确类别身份，并与摄像机、电视机、监视器/投影机、零部件及记录介质区分。 |
| `iec-62087-4-2015` | standard | IEC 62087-4:2015, Audio, video and related equipment — Determination of power consumption — Part 4: Video recording equipment, https://webstore.iec.ch/en/publication/22584（检索于 2026-08-09） | 视频记录设备模式范围和功率测量设计。 |
| `energy-star-av-v3-2014` | official_guidance | 美国 EPA，ENERGY STAR Program Requirements Product Specification for Audio/Video, Version 3.0，2014 年 12 月修订，https://www.energystar.gov/sites/default/files/asset/document/Final%20Version%203.0%20AV%20Program%20Requirements%20%28Rev%20Dec-2014%29.pdf（检索于 2026-08-09） | 运行/空闲/睡眠/关机定义、网络/配置披露、交流输入测量及记录/播放测试条件。 |
| `eu-2023-826` | standard | Commission Regulation (EU) 2023/826, https://eur-lex.europa.eu/eli/reg/2023/826/oj/eng（检索于 2026-08-09） | 待机、关机、网络待机定义以及功率、转换、端口和测试条件披露。 |
| `iec-62301-2026` | standard | IEC 62301:2026, Household electrical appliances — Measurement of standby power, https://webstore.iec.ch/en/publication/90194（检索于 2026-08-09） | 待机、关机和其他非运行模式测量及稳定性与不确定度。 |
| `iec-63474-2026` | standard | IEC 63474:2026, Electrical and electronic household and office equipment — Measurement of networked standby power of edge equipment, https://webstore.iec.ch/en/publication/85393（检索于 2026-08-09） | 适用时的网络待机功率测量。 |
| `iec-62474-2018` | standard | IEC 62474:2018, Material declaration for products of and for the electrotechnical industry, https://webstore.iec.ch/en/publication/29857（检索于 2026-08-09） | 组件/材料声明结构和可追溯性。 |
| `eu-rohs-2011-65` | standard | Directive 2011/65/EU on restriction of hazardous substances in electrical and electronic equipment, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32011L0065（检索于 2026-08-09） | 电子产品均质材料和限用物质声明背景。 |
| `eu-weee-2012-19` | standard | Directive 2012/19/EU on waste electrical and electronic equipment, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32012L0019（检索于 2026-08-09） | 分类收集、选择性拆除、处理、再使用、再生和回收范围。 |
| `iec-tr-62635-2012` | official_guidance | IEC TR 62635:2012, Guidelines for end-of-life information provided by manufacturers and recyclers and for recyclability rate calculation of electrical and electronic equipment, https://webstore.iec.ch/en/publication/7292（检索于 2026-08-09） | 寿命终结信息交换、处理质量平衡、可再生性和可回收性。 |
| `iec-63366-2025` | standard | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691（检索于 2026-08-09） | 电气电子产品 LCA 边界、数据集、情景、报告和类别规则框架。 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html（检索于 2026-08-09） | 清单要求、边界、分配层级、数据质量和解释。 |
