---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.development-tools-and-programming-languages-software-packaged
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 成套开发工具和编程语言软件

## 1. 范围与适用性

本 PCR 适用于主要功能为协助专业开发人员设计、编写、构建、测试或实现计算机程序及软件解决方案的已发布成套系统软件。适用产品包括以明确产品版本供应的成套编程语言实现、编译器、解释器、汇编器、集成开发环境、调试器、构建工具和软件开发工具包。

产品必须是具有明确版本和授权权益的成套发行版。不包括仅以下载方式供应的系统软件文件、定制软件开发服务、托管式开发环境、操作系统、网络软件、数据库管理软件，以及主要功能直接面向最终用户的应用软件。默认前景边界包括软件开发和产品发布。只有实际使用时才纳入实体光学介质和纸盒投入。运行阶段属于条件性扩展，仅在所声明的研究边界涵盖安装、执行、维护或规定评估期内的代表性基准测试时纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.development-tools-and-programming-languages-software-packaged |
| classification_refs | CPC 3.0: 47814（精确分类引用；映射接受另行治理） |
| covered_products | 用于协助专业软件设计、编写、构建、测试或实现的已发布成套编程语言软件和开发工具 |
| excluded_products | 仅下载供应的系统软件；定制开发服务；托管式开发环境；操作系统；网络软件；数据库管理软件；最终用户应用软件 |
| representative_product | 一个可安装的成套开发工具或编程语言实现发行版 |
| production_route | 软件设计与开发；构建、测试、发布和软件包制备；条件性的实体介质刻录和纸盒包装；条件性的受支持运行 |
| market_state | 已发布的成套软件，明确声明版本、授权权益、支持平台、开发功能、载体和包装配置 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个可安装、能够执行所声明专业软件开发功能的成套开发工具或编程语言软件发行版 |
| How much | 一个已供应的成套副本或授权权益，以其完整实体包装的实测质量表示 |
| How well | 满足所声明的支持平台、体系结构、开发能力、安装状态和发布验收准则 |
| How long or cycle | 一个声明的产品版本及授权权益期；纳入运行时，另声明一个明确的评估期和工作负载 |
| reference_flow_link | `packaged_software_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一个完整成套副本的实测质量（kg） |
| 参考产品流 | 成套开发工具和编程语言软件 `0771060f-3f5c-45f4-a914-cec63115361d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 软件产品名称和版本；工具或编程语言功能；授权权益类型；支持的操作系统、体系结构和运行时；发布验收准则；安装状态；实体载体类型；包装组件；生产与供应地域；报告期；纳入的生命周期阶段；纳入运行时的运行工作负载和评估期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_package_mass` | 成套参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量一个副本所代表的完整供应包装配置。记录称量副本数、皮重处理、秤分辨率和每个合格副本的平均质量；不得仅以授权数量代替质量。 |
| `electricity_energy_conversion` | 开发、发布和运行用电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 以 kWh 采集电表或遥测电量，并严格按 1 kWh = 3.6 MJ 转换为 TianGong 参考单位。保留原始 kWh 记录，并说明计量覆盖范围、预留或配置资源及换算。 |
| `functional_unit_consistency` | 所有纳入的软件组件和阶段 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将开发和发布记录归一化到同一发行副本总体。报告运行结果时，所有纳入组件必须使用一致的声明工作负载和评估期，并披露向成套副本参考基准的每项换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 发布周期开始时已批准的产品需求、源代码基线和第三方组件锁定文件 |
| starting_condition_role | 界定发行版特定的起点；除非资源能够因果归属于声明发行版，否则此前的一般性研究和已完成发行版不属于前景 |
| product_classification_scope | 已发布的成套开发工具和编程语言软件；相邻系统软件、应用软件、下载产品和软件开发服务不属于本类别 |
| recursive_input_rule | 用于生产本发行版的同类别工具，在其跨越前景边界处仅作为上游产品投入数据集记录一次；不得在本前景数据包内递归展开其自身开发链 |
| upstream_dataset_requirement | 电力、光学介质、纸盒及任何其他实际原子投入须使用地域和技术具有代表性的上游数据集；不得将上游排放改标为前景直接排放 |
| disclosure | 声明发行周期日期、纳入的代码库和组件、构建/测试环境、实体载体和包装物料清单、分配依据、排除的基础设施、地域以及是否纳入运行阶段 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_release_cycle` | 软件开发和产品发布 | 纳入报告组织内可直接归属于需求实现、编码、编译、测试、构建、发布验收、软件包制备和发行交付的资源。排除无关的组织管理开销、营销、客户定制开发服务以及归属于其他发行版的工作。 | `un-cpc-3-0-explanatory-notes-2025`; `un-cpc-3-0-system-software-downloads-84341`; `green-software-foundation-sci-1-1-0` |
| `boundary_supporting_infrastructure` | 纳入的软件系统活动 | 当配置或预留的计算、存储、网络、监控、日志、扫描、构建流水线和测试资源对声明发行版或运行工作负载有实质支持时，纳入其用电。 | `green-software-foundation-sci-1-1-0` |
| `boundary_hardware_materiality` | 开发人员工作站及构建或运行服务器 | 使用设备或供应商特定清单以及声明的时间与资源分配，对硬件隐含负荷进行筛查。对研究目标具有实质影响时，须纳入每项具体硬件交换；否则须保留并披露筛查结果、证据、截断决定和遗漏负荷。可选排放标量不得替代具有实质影响的实体硬件交换。 | `green-software-foundation-sci-1-1-0` |
| `boundary_physical_package` | 载体和包装配置 | 将实际构成供应产品的每种实体载体和包装制品分别作为原子投入纳入。所列光学介质和纸盒行仅为条件性示例；任何不同的实际载体或包装制品都必须作为独立、具体的前景交换加入。仅下载供应的电子文件属于独立的下载边界，不纳入本 PCR。 | `un-cpc-3-0-explanatory-notes-2025`; `un-cpc-3-0-system-software-downloads-84341` |
| `boundary_operation_extension` | 受支持运行 | 仅当研究声明已安装组件、工作负载、平台、地点和评估期时纳入运行阶段。纳入对执行有重大贡献的支持基础设施，并披露排除的组件。 | `green-software-foundation-sci-1-1-0` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `software_development` | 软件设计与开发 | required | 声明发行周期始终纳入 | 前景开发 | 声明版本的发行副本总体 |
| `product_release` | 构建、测试、发布和软件包制备 | required | 始终纳入；实体载体和纸盒行仅在实际存在时适用 | 前景产品发布 | 一个合格成套副本及其完整包装实测质量 |
| `supported_operation` | 受支持的软件运行 | conditional | 仅当声明研究边界涵盖安装、执行、维护或代表性基准测试时纳入 | 条件性使用阶段扩展 | 声明评估期内的声明工作负载，并与一个供应副本关联 |

### 过程：软件设计与开发（`software_development`）

#### 输入

##### 产品流

###### 软件开发用电（`development_electricity`）

开发人员工作站和已分配开发基础设施在声明发行周期消耗的电力跨越前景边界。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量或遥测可归属于设计与开发的电量，从 kWh 换算为 MJ，并按合格发行副本总体归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一个声明发行版供应副本
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_development_electricity`
- 来源：`green-software-foundation-sci-1-1-0`

###### 开发人员工作站计算机硬件（`developer_workstation_hardware`）

当有记录的硬件隐含负荷筛查认定其具有实质影响时，记录用于发行版特定开发的工作站实体硬件分配量。只有筛查认定分配负荷对研究目标不具有实质影响时，方可采用有证据支持并已披露的截断。

- 选定流：开发人员工作站计算机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：工作站分配质量等于设备质量乘以发行版特定的预留时间份额和预留资源份额；须逐台识别设备，不得以排放标量替代该交换
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一个声明发行版供应副本
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 纳入条件：有记录的筛查认定工作站硬件隐含负荷具有实质影响时纳入；否则记录实测或供应商支持的筛查结果及已披露截断
- 采集协议：`cp_developer_workstation_hardware`
- 来源：`green-software-foundation-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：构建、测试、发布和软件包制备（`product_release`）

#### 输入

##### 产品流

###### 构建、测试和发布用电（`release_electricity`）

采集预留或配置的构建、测试、扫描、发布和内部介质写入资源所消耗的电力，且不得与开发或运行阶段重复计算。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量或遥测可归属于构建、测试、发布验收和软件包制备的电量，从 kWh 换算为 MJ，并按合格成套副本归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一个合格成套副本
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_release_electricity`
- 来源：`green-software-foundation-sci-1-1-0`

###### 构建与测试服务器计算机硬件（`build_server_hardware`）

当有记录的硬件隐含负荷筛查认定其具有实质影响时，记录支持构建、测试、扫描和发布活动的服务器实体硬件分配量。筛查排除时须保留已论证并披露的截断。

- 选定流：服务器计算机硬件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：服务器分配质量等于设备质量乘以发行版特定的预留时间份额和预留资源份额；识别每台服务器或同质服务器组，并防止与运行阶段重叠
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一个合格成套副本
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 纳入条件：有记录的筛查认定构建与测试服务器硬件具有实质影响时纳入；否则披露筛查证据、截断和遗漏负荷
- 采集协议：`cp_build_server_hardware`
- 来源：`green-software-foundation-sci-1-1-0`

###### 光学载体路线用未记录光学介质（`optical_media_input`）

仅当声明的成套产品写入由报告组织控制的光学载体时，才记录未记录的光学介质。

- 选定流：未记录的光学介质 `714535e8-24d4-44bf-8496-4837f638fdd4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用的光学介质净采购质量，包括可归属的刻录废品，除以合格成套副本数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：光学载体路线每一个合格成套副本
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_optical_media`
- 来源：

###### 纸盒包装路线用纸盒（`paper_box_input`）

仅当纸盒是所供应包装配置的实际组件时，才记录该纸盒。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用的纸盒净采购质量，包括可归属的包装废品，除以合格成套副本数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：存在纸盒时每一个合格成套副本
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_paper_box`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的成套开发工具或编程语言软件（`packaged_software_output`）

这是发布验收并完成声明实体包装配置后的成套软件发行版成品。

- 选定流：成套开发工具和编程语言软件 `0771060f-3f5c-45f4-a914-cec63115361d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一个合格供应副本的完整包装实测质量；同时报告用于归一化的副本数和实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一个声明发行版的合格供应副本
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product_mass`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

##### 废物流

###### 被拒收的光学数据存储介质（`rejected_optical_media_waste`）

将刻录、验证或软件包制备期间被拒收的光学介质实际质量作为独立的外送生产废物交换记录。不得根据报废情景推断该生产废品。

- 选定流：被拒收的光学数据存储介质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发行批次外送的被拒光学介质实际称量质量除以合格成套副本数；仅当完整批次记录证明无被拒介质时方可报告为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：光学载体路线每一个合格成套副本
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 纳入条件：使用光学介质路线时适用；记录实际数量、废物承运方、目的地和处理路线
- 采集协议：`cp_rejected_optical_media_waste`
- 来源：

###### 被拒收的纸或纸板盒（`rejected_paper_box_waste`）

将软件包制备中被拒收的纸或纸板盒作为外送生产废物交换记录，并与供应包装和下游报废假设区分。

- 选定流：纸和纸板包装废弃物 `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：包装批次外送的被拒纸盒实际称量质量除以合格成套副本数；仅当完整批次记录证明无被拒纸盒时方可报告为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：存在纸或纸板盒时每一个合格成套副本
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 纳入条件：使用纸或纸板盒时适用；记录实际数量、材料等级、废物承运方、目的地和处理路线
- 采集协议：`cp_rejected_paper_box_waste`
- 来源：

##### 基本流

### 过程：受支持的软件运行（`supported_operation`）

#### 输入

##### 产品流

###### 声明软件运行用电（`operation_electricity`）

仅对声明的工作负载、平台、地点和评估期纳入运行用电，并包括具有实质支持作用的已配置或预留基础设施。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：声明运行工作负载及其支持基础设施的计量电量，从 kWh 换算为 MJ，并与一个供应副本关联，且不与发布活动重复计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：声明评估期内每个声明工作负载，并与一个供应副本关联
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_operation_electricity`
- 来源：`green-software-foundation-sci-1-1-0`

###### 运行服务器计算机硬件（`operation_server_hardware`）

纳入运行扩展时，若有记录的硬件隐含负荷筛查认定支持声明工作负载的服务器实体硬件具有实质影响，则记录其分配量。采用已披露截断时须保留筛查证据。

- 选定流：服务器计算机硬件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：服务器分配质量等于设备质量乘以评估期预留时间份额和工作负载特定的预留资源份额；识别每台服务器或同质服务器组，并防止与构建和发布阶段重叠
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：声明评估期内每个声明工作负载，并与一个供应副本关联
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 纳入条件：仅在纳入运行扩展且运行服务器硬件具有实质影响时纳入；否则披露筛查证据、截断和遗漏负荷
- 采集协议：`cp_operation_server_hardware`
- 来源：`green-software-foundation-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | 发行版特定前景活动 | 优先通过区分可归属于声明发行版的代码库、构建作业、测试运行、包装批次和电表来避免分配。 | `green-software-foundation-sci-1-1-0` |
| `allocation_shared_electricity` | 共享计算与设施用电 | 按与活动记录相同的时间区间，采用有记录的因果资源份额分配共享计量电量，例如预留处理器时间、内存、存储或作业运行时间。预留给发行版或工作负载的闲置但已配置资源不得排除在分配之外。 | `green-software-foundation-sci-1-1-0` |
| `allocation_hardware_embodied` | 硬件隐含负荷 | 纳入硬件隐含负荷时，发行版或工作负载份额等于硬件总隐含排放乘以预留时间与预期寿命之比，再乘以预留资源与总资源之比。优先使用设备特定 LCA 数据并披露所有因子。 | `green-software-foundation-sci-1-1-0` |
| `allocation_multiple_releases` | 共享开发与发布活动 | 对每个发行版使用计量得到的因果资源消耗。不存在可辩护的因果关系时，应报告共享量和分配缺口供审查，不得仅为方便而选择收入、授权价格或副本数。 | `green-software-foundation-sci-1-1-0` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_electricity` | `software_development` | `development_electricity` | 电表、设备遥测和发行活动记录 | meter_id; device_or_resource_id; timestamp_start; timestamp_end; kWh; reserved_resource_share; repository; release_id; geography | 导出经校准的电表或供应商遥测数据，并与发行版特定开发活动关联；记录任何模型补缺 | kWh | 每个计量区间和发行活动 | 完整的声明发行开发周期 | 所有纳入的开发场址和已配置基础设施 | 剔除与发布和运行电表的重叠；按因果关系分配共享区间；汇总 kWh 后除以合格发行副本数 | 电表校准或供应商方法；遥测导出；发行/活动关联；分配工作表 |
| `cp_developer_workstation_hardware` | `software_development` | `developer_workstation_hardware` | 设备清单、采购和分配记录 | device_id; manufacturer; model; configuration; device_mass_kg; commissioning_date; expected_life; release_time_reserved; total_available_time; resources_reserved; total_resources; release_id; supplier_LCA_reference; screening_result; cutoff_decision | 将每台工作站与资产记录关联，筛查其分配隐含负荷，并仅在具有实质影响时计算发行版可归属质量 | kg | 每台设备和声明发行周期 | 完整的声明发行开发周期 | 对开发具有实质支持作用的所有自有、租赁或专用工作站 | 将有记录的时间和资源份额应用于设备质量；除以合格副本数；对排除设备保留筛查证据 | 资产登记；发票或规格；称量或制造商质量；供应商/设备 LCA；分配工作表；截断记录 |
| `cp_release_electricity` | `product_release` | `release_electricity` | 构建/测试流水线遥测、电表和批次记录 | job_id; stage; timestamp_start; timestamp_end; kWh; reserved_resource_share; release_id; package_batch_id; conforming_copy_count; geography | 导出编译、测试、扫描、发布验收和软件包制备的流水线或设施能源数据 | kWh | 每个作业、测试运行或包装批次 | 声明版本完整的构建、测试和发布周期 | 所有纳入的构建、测试和软件包制备基础设施 | 对重叠电表去重；汇总可归属 kWh 后除以合格副本数 | 流水线日志；电表/供应商证据；批次核对；分配工作表 |
| `cp_build_server_hardware` | `product_release` | `build_server_hardware` | 服务器清单、采购、作业和分配记录 | server_id_or_group; manufacturer; model; configuration; device_count; device_mass_kg; commissioning_date; expected_life; release_time_reserved; total_available_time; resources_reserved; total_resources; release_id; supplier_LCA_reference; screening_result; cutoff_decision | 将实体服务器或同质服务器组与构建测试作业关联，筛查分配隐含负荷，并仅在具有实质影响时计算发行版可归属质量 | kg | 每个服务器组和声明发行周期 | 完整的构建、测试和发布周期 | 对构建、测试、扫描或发布具有实质支持作用的所有自有、租赁或专用服务器硬件 | 将有记录的时间和资源份额应用于设备质量；防止与运行阶段重叠；除以合格副本数；对排除项保留筛查证据 | 资产/供应商清单；规格；供应商/设备 LCA；作业日志；分配工作表；截断记录 |
| `cp_optical_media` | `product_release` | `optical_media_input` | 采购、领用和废品记录 | supplier; media_format; composition; capacity; lot_id; purchased_kg; issued_kg; rejected_kg; conforming_copy_count; geography | 将采购和领用介质与刻录批次及废品记录核对 | kg | 每次收货和刻录批次 | 供应声明发行版的所有批次 | 所有受控光学介质刻录场址和供应商 | 纳入可归属的刻录废品；领用质量除以合格副本数；非光学路线标记为不适用 | 发票；规格书；称量记录；批次与废品日志 |
| `cp_paper_box` | `product_release` | `paper_box_input` | 采购、物料清单和包装批次记录 | supplier; paper_grade; recycled_content; printing; dimensions; lot_id; purchased_kg; issued_kg; rejected_kg; conforming_copy_count; geography | 将纸盒采购及物料清单与包装批次核对 | kg | 每次收货和包装批次 | 供应声明包装配置的所有批次 | 所有受控包装场址和供应商 | 纳入可归属的包装废品；领用质量除以合格副本数；不使用纸盒时标记为不适用 | 发票；供应商规格书；物料清单；称量记录；批次与废品日志 |
| `cp_reference_product_mass` | `product_release` | `packaged_software_output` | 发布验收、计数和称量记录 | product_name; version; entitlement; carrier; package_components; batch_id; conforming_copy_count; weighed_copy_count; gross_mass_kg; tare_treatment; scale_id; resolution | 最终验收后使用经校准的秤对代表性完整合格包装进行称量 | kg | 每种包装配置和发行批次 | 数据集代表的每种包装配置 | 所有受控最终发布和包装场址 | 计算每个合格副本的平均成品质量；同时保留数量和质量；不得扣除已包含的载体或包装 | 发布验收记录；包装物料清单；校准秤证据；抽样记录 |
| `cp_rejected_optical_media_waste` | `product_release` | `rejected_optical_media_waste` | 刻录批次废品、称量和废物转移记录 | batch_id; media_format; composition; rejected_count; rejected_mass_kg; scale_id; waste_carrier_id; transfer_date; treatment_provider; destination; treatment_route; conforming_copy_count | 单独称量被拒光学介质，并与领用介质、合格载体、库存变化和转移记录核对 | kg | 每个刻录批次和废物转移 | 供应声明发行版的所有光学介质批次 | 所有受控刻录、分拣和废物转移地点 | 按处理路线汇总实际外送的被拒介质质量并除以合格副本数；仅依据完整批次记录报告零值 | 批次废品日志；称量记录；库存台账；废物转移单；处理合同或回执 |
| `cp_rejected_paper_box_waste` | `product_release` | `rejected_paper_box_waste` | 包装批次废品、称量和废物转移记录 | batch_id; paper_grade; paperboard_composition; rejected_count; rejected_mass_kg; scale_id; waste_carrier_id; transfer_date; treatment_provider; destination; treatment_route; conforming_copy_count | 单独称量被拒纸或纸板盒，并与领用纸盒、合格包装、库存变化和转移记录核对 | kg | 每个包装批次和废物转移 | 供应声明发行版的所有纸盒包装批次 | 所有受控包装、分拣和废物转移地点 | 按处理路线汇总实际外送的被拒纸盒质量并除以合格副本数；仅依据完整批次记录报告零值 | 批次废品日志；称量记录；库存台账；废物转移单；处理合同或回执 |
| `cp_operation_electricity` | `supported_operation` | `operation_electricity` | 设备、云或数据中心遥测和工作负载日志 | software_version; component; workload; functional_unit_count; timestamp_start; timestamp_end; kWh; reserved_resource_share; platform; location; PUE_if_used | 测量实际运行或受控基准测试；纳入有实质支持作用的已配置基础设施并记录模型 | kWh | 每次工作负载运行或计量区间 | 完整的声明运行评估期；无法获得更细粒度数据时，年度数据为最低可接受时间粒度 | 每个纳入的执行地点和支持基础设施组件 | 对一致工作负载单元汇总电量；因果资源份额和 PUE 各仅应用一次；将结果与供应副本关联 | 遥测导出；基准脚本；工作负载日志；供应商方法；分配工作表 |
| `cp_operation_server_hardware` | `supported_operation` | `operation_server_hardware` | 服务器清单、工作负载和分配记录 | server_id_or_group; manufacturer; model; configuration; device_count; device_mass_kg; commissioning_date; expected_life; assessment_time_reserved; total_available_time; resources_reserved; total_resources; workload; supplier_LCA_reference; screening_result; cutoff_decision | 将实体服务器或同质服务器组与声明工作负载关联，筛查分配隐含负荷，并仅在具有实质影响时计算工作负载可归属质量 | kg | 每个服务器组和评估期 | 完整的声明运行评估期 | 对声明工作负载具有实质支持作用的所有自有、租赁或专用服务器硬件 | 将有记录的时间和工作负载资源份额应用于设备质量；防止与构建和发布阶段重叠；对排除项保留筛查证据 | 资产/供应商清单；规格；供应商/设备 LCA；工作负载日志；分配工作表；截断记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_kwh_to_mj` | 每个电力行 | MJ = kWh × 3.6 | 采集的 kWh | MJ 电量 |  |
| `calc_per_copy_normalization` | 开发、发布、光学介质和纸盒数量 | 每副本数量 = 可归属的发行或批次数量 ÷ 合格供应副本数 | 可归属数量；合格副本数 | 每供应副本数量 |  |
| `calc_shared_resource_share` | 共享用电 | 可归属电量 = 区间电量 × 有记录的预留资源份额；闲置但预留给发行版或工作负载的已配置资源仍计入份额 | 区间 kWh；预留资源；总资源；活动区间 | 可归属 kWh | `green-software-foundation-sci-1-1-0` |
| `calc_hardware_allocated_mass` | 开发工作站、构建服务器和运行服务器硬件行 | 硬件分配质量 = 设备质量 ×（预留时间 ÷ 预期寿命）×（预留资源 ÷ 总资源） | 设备质量；预留时间；预期寿命；预留资源；总资源；发行副本或工作负载分母 | 每供应副本或声明工作负载的硬件分配质量 | `green-software-foundation-sci-1-1-0` |
| `calc_hardware_embodied_share` | 可选硬件隐含负荷 | M = TE × (TiR ÷ EL) × (RR ÷ ToR) | 总隐含排放 TE；预留时间 TiR；预期寿命 EL；预留资源 RR；总资源 ToR | 声明发行版或工作负载分得的硬件隐含排放 | `green-software-foundation-sci-1-1-0` |
| `calc_release_material_balance` | 光学介质和纸盒路线 | 领用投入质量 = 合格包装中纳入的质量 + 外送的被拒废物质量 + 批次归属期末库存 − 批次归属期初库存 | 领用材料质量；合格产出和组件质量；被拒废物质量；期初和期末库存 | 路线特定的发布批次质量平衡残差 |  |
| `calc_operational_emissions_metric` | 可选运行碳强度披露 | O = E × I，其中电量采用地域和时间适当的所在地口径电力碳强度因子；明确保留因子标识和单位 | 运行 kWh E；所在地口径碳强度 I；声明工作负载数 | 声明工作负载单元和评估期的运行 gCO2e | `green-software-foundation-sci-1-1-0` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_release_traceability` | 所有前景记录 | 每条记录必须标明产品版本、发行版或包装批次，以及用于归一化的合格副本总体。 | 发行清单、源代码版本、构建标识、批次记录和副本数核对 |
| `dq_temporal_granularity` | 电力和运行记录 | 使用切实可行的最高时间粒度。采用 SCI 风格计算运行结果时，无法获得更细时间粒度数据的情况下年度数据为最低可接受粒度；披露所有模型补缺。 | 带时间戳的电表/遥测导出及补缺日志；`green-software-foundation-sci-1-1-0` |
| `dq_boundary_completeness` | 软件及支持基础设施 | 保留组件和基础设施清单，列明纳入的计算、存储、网络、监控、日志、扫描、构建、测试和运行资源，并说明每项实质性排除。 | 边界清单及体系结构/构建流水线证据；`green-software-foundation-sci-1-1-0` |
| `dq_physical_package_completeness` | 供应包装 | 将成品包装质量与声明载体及每个实际包装组件核对。任何未列出的实际组件都应作为独立的原子前景交换加入。 | 包装物料清单、供应商规格、批次记录和称量证据 |
| `dq_release_waste_closure` | 光学介质和纸盒生产废品 | 分别将每种领用材料与合格包装组件、外送生产废物和库存变化核对。识别实际废物数量及处理路线；仅当完整批次记录证明零废品时方可接受零值。 | 材料台账；批次和废品日志；称量记录；库存核对；废物转移和处理证据 |
| `dq_hardware_materiality` | 开发人员工作站及构建或运行服务器 | 对每类纳入或排除硬件保留设备清单、供应商/设备证据、实质性筛查、分配因子和明确截断决定。具有实质影响的设备类别必须作为具体硬件交换出现。 | 资产或供应商清单；采购/规格；供应商/设备 LCA；分配工作表；签署的截断记录 |
| `dq_allocation_reproducibility` | 共享用电和硬件 | 保留区间边界、预留资源与总资源、预期硬件寿命、源隐含排放数据和公式，使独立审查者能够复现每项分配。 | 分配工作表和源设备或供应商证据；`green-software-foundation-sci-1-1-0` |
| `dq_no_offset_substitution` | 碳强度披露 | 不得使用抵消或市场化声明来减少实测能源、运行排放或分配的硬件隐含排放。 | 计算工作簿和因子来源；`green-software-foundation-sci-1-1-0` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 要求且仅要求一个参考输出，使用 UUID `0771060f-3f5c-45f4-a914-cec63115361d`、质量属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。拒绝下载、服务或相邻软件标识。 | `un-cpc-3-0-explanatory-notes-2025`; `un-cpc-3-0-system-software-downloads-84341` |
| `validate_reference_qualifiers` | 前景数据包 | 缺失产品版本、开发功能、授权权益、支持平台/运行时、发布验收准则、载体、包装配置、地域、报告期或纳入阶段时，完整性校验失败。纳入运行时还必须提供工作负载和评估期。 | `un-cpc-3-0-explanatory-notes-2025`; `green-software-foundation-sci-1-1-0` |
| `validate_process_and_rows` | 过程清单 | 要求开发和产品发布过程。运行过程只有满足纳入条件时才允许。检查每个所列行均为一个原子交换，采用声明的方向、属性和单位，且不存在跨重叠电表或阶段重复计算。 |  |
| `validate_conditional_package_inputs` | 光学介质和纸盒 | `optical_media_input` 仅适用于光学载体路线，`paper_box_input` 仅适用于存在纸盒的配置。任何不同的实际载体或包装制品都必须作为独立、具体的附加交换记录。 |  |
| `validate_release_waste_closure` | 光学介质和纸盒生产废品 | 对每个适用路线要求相应外送废物流、实际数量和处理路线。根据合格包装中的纳入质量、被拒废物和库存变化重新核算领用投入。仅依据完整批次记录接受零值，并拒绝以报废假设作为生产废品证据。 |  |
| `validate_electricity` | 电力行 | 使用 3.6 MJ/kWh 从保留的 kWh 重新计算 MJ；核验计量区间、地域、预留/配置资源处理、阶段归属、副本或工作负载归一化以及无重复计算。 | `green-software-foundation-sci-1-1-0` |
| `validate_hardware_materiality` | 开发工作站、构建服务器和运行服务器硬件 | 要求设备清单和有记录的实质性筛查。具有实质影响时，要求相应具体硬件交换并核验设备质量、预期寿命、时间份额和资源份额；排除时，要求披露筛查证据、截断理由和估算遗漏负荷。仅有可选排放结果不能满足交换要求。 | `green-software-foundation-sci-1-1-0` |
| `validate_allocation` | 共享资源和硬件隐含负荷 | 要求提供因果分配工作表。对于硬件隐含负荷，核验 TE、TiR、EL、RR 和 ToR 及其单位一致性；任一必需因子缺少证据时，将结果报告为不确定。 | `green-software-foundation-sci-1-1-0` |
| `validate_boundary_disclosure` | 发布数据集 | 要求明确披露软件/组件边界、发行周期、支持基础设施、实体包装、排除项、运行扩展状态、分配方法和数据缺口。 | `green-software-foundation-sci-1-1-0` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 用于声明的成套开发工具或编程语言软件发行版之过程和 lifecyclemodel 投影的前景数据包 |
| allowed_use | 比较或建模主要开发功能、版本/授权权益基准、实体包装状态、系统边界、地域，以及适用时运行工作负载和评估期相同的产品 |
| excluded_use | 仅下载供应的软件、定制开发服务、托管式开发环境、功能不同的软件、未披露的包装配置，或混合从摇篮到发布与含运行扩展边界的比较 |
| required_metadata | PCR id；产品名称和版本；开发功能；授权权益；支持平台、体系结构和运行时；发行周期日期；源代码/构建标识；发布验收准则；载体和包装物料清单；生产与供应地域；合格副本数；完整包装质量；发布废物数量及处理路线；硬件清单及实质性决定；报告期；纳入过程和基础设施；纳入运行时的工作负载及评估期 |
| required_quality_disclosure | 原始数据与模型数据占比；电表和遥测覆盖；时间粒度；包装抽样；上游数据集地域和技术；分配因子；硬件寿命和资源份额；硬件筛查和已披露截断；生产废物质量平衡闭合及处理证据；排除项；数据缺口；不确定性和校验发现 |
| update_trigger | 产品主版本更新、构建/测试体系结构发生实质变化、载体或包装配置变化、授权权益或平台变化、运行工作负载变化、供应商或电网地域变化、分配方法变化，或数据早于代表性发行周期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，*Central Product Classification (CPC) Version 3.0 Explanatory Notes*，2025 年 6 月 30 日，第 262 页。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品边界、开发工具功能的纳入范围以及与相邻软件类别的区分 |
| `un-cpc-3-0-system-software-downloads-84341` | official_guidance | 联合国统计司，*CPC Version 3.0 classification detail: 84341 System software downloads*，检索于 2026 年 9 月 11 日。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341 | 独立的仅下载供应产品状态边界 |
| `green-software-foundation-sci-1-1-0` | standard | Green Software Foundation，*Software Carbon Intensity (SCI) Specification*，1.1.0 版。https://sci.greensoftware.foundation/ | 软件边界、功能单位一致性、电量计量、运行计算、共享资源和硬件分配、时间粒度及披露规则 |
| `carbonfootprint-network-cpc-zh-appendix` | handbook | LCA/碳足迹数据库构建导则——第六章附录，产品流分类表，CPC 47814。https://www.carbonfootprint.network/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix | 产品标题的专业中文术语；不作为定量或方法学证据 |
