---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.computer-game-software-packaged
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 计算机游戏软件，打包

## 1. 范围与适用性

本 PCR 适用于以磁性或光学物理介质提供，并作为完整可销售包装产品发布的计算机游戏软件。前景边界始于已接受的软件源代码/构建输入以及购入的未记录介质和单件包装组件，纳入归属于开发与构建活动的电力、物理介质复制、检验和单件包装，止于出版商分销门处的包装产品。

产品身份依据 CPC 3.0 代码 47822。为特定游戏机设计的游戏卡带、仅通过下载交付的软件以及在线游戏服务不在本 PCR 范围内。默认从摇篮到出版商门的数据集不纳入下游分销、游戏运行电力与硬件、维护、账户服务和产品生命末期；如需纳入，必须另行声明边界扩展。

必须声明光学或磁性介质路线。仅纳入所建模产品和批次中实际存在的组件与不合格物流。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.computer-game-software-packaged |
| classification_refs | CPC 3.0: 47822，计算机游戏软件，打包 |
| covered_products | 以磁性或光学物理介质呈现并作为包装产品销售的已发布计算机游戏软件 |
| excluded_products | 游戏机专用卡带；计算机游戏软件下载；在线游戏；系统软件；非游戏应用软件 |
| representative_product | 一份完整可销售包装副本，包含已记录的光学或磁性介质以及生产商声明的单件包装 |
| production_route | 软件开发/构建，随后进行光学或磁性介质复制、检验和单件包装 |
| market_state | 出版商分销门处的已完成、已记录、已包装软件产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采用所声明光学或磁性物理介质路线的完整可销售包装计算机游戏软件 |
| How much | 1 kg 成品包装产品，包括已记录介质和随产品提供的全部单件包装 |
| How well | 可在所声明平台和介质格式上运行或安装，并通过生产商的发布、可读性和包装验收要求 |
| How long or cycle | 出版商分销门处的一个已完成生产批次；不表示游戏运行或服务寿命 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 计算机游戏软件，打包 `b4e24ad6-6c52-4158-b19f-a30bdf4da53a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 软件名称或发布系列；声明平台；光学或磁性介质路线；介质格式；所含单件包装组件；生产地域；生产期间；出版商分销门边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 包装成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对包含已记录介质及全部单件包装的合格成品计量；除非明确扩展边界，否则排除运输箱、托盘和下游分销包装。 |
| `electricity_energy` | 开发/构建及复制/包装电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表或账单原始单位，并按 MJ = kWh × 3.6 将 kWh 转为 MJ；仅记录归属于声明生产期间和前景活动的电力。 |
| `component_mass` | 未记录介质和包装投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 投入、不合格品和合格产出采用一致的接收状态质量基准；必要时记录去皮和含水率假设。 |
| `count_to_mass` | 仅有件数记录的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用具有批次代表性的实测单件平均质量换算件数，并保留样本量、采样日期和计算过程。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已接受的软件源代码/构建输入，以及为声明生产批次接收的购入未记录物理介质和单件包装组件 |
| starting_condition_role | 前景起始条件；购入电力、介质和包装的上游负荷仍通过供应商数据集链接 |
| product_classification_scope | CPC 3.0 代码 47822 下，以磁性或光学介质提供的包装计算机游戏软件 |
| recursive_input_rule | 生产中使用的购入包装游戏软件仍作为独立产品投入记录并链接上游数据集；不得在本前景系统内递归重建其生产 |
| upstream_dataset_requirement | 每项购入电力、介质、包装组件及实质性开发/构建硬件交换均链接具有地域和技术代表性的上游数据集，并披露任何代理数据 |
| disclosure | 声明软件发布版本、平台、物理介质路线、所含包装配置、生产地域和期间、分配基准、开发硬件实质性评估、截断及任何边界扩展 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_product_identity` | 产品选择 | 仅纳入以磁性或光学物理介质呈现的包装计算机游戏产品；排除卡带、下载和在线游戏服务。 | `un-cpc-3-0-explanatory-notes-2025` |
| `boundary_foreground_gate` | 前景系统 | 纳入归属于发布版本的开发/构建、物理介质复制、检验、不合格品和单件包装，直至出版商分销门。 |  |
| `boundary_software_infrastructure` | 支持性计算和基础设施 | 仅纳入声明软件生产工作实际使用的支持性资源之电力和其他交换，并透明分配共享资源。 | `green-software-foundation-sci-1-1-0` |
| `boundary_development_hardware` | 开发/构建硬件 | 评估用于生成发布版本的所有服务器、台式工作站、便携式计算机、存储与网络设备，以及测试用游戏机或其他测试设备。每项实质性设备均按实际设备身份作为独立原子产品投入，并链接上游硬件 LCA 数据集；每项排除均须依据所声明的实质性截断阈值披露并说明理由。 | `green-software-foundation-sci-1-1-0` |
| `boundary_downstream_exclusions` | 下游阶段 | 除非明确建模并单独报告边界扩展，否则排除下游分销、游戏运行、维护、在线服务和生命末期。 |  |
| `boundary_recursive_input` | 同类别购入投入 | 将购入的包装游戏软件投入保留为链接上游数据集的产品交换，不得递归创建本 PCR 的另一个前景副本。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `software_development_build` | 软件开发与发布构建 | required | 始终纳入归属于开发、编译、集成、测试和发布构建工作的电力，完成开发硬件实质性评估，并为声明发布版本使用的每项实质性设备添加独立原子硬件产品交换。 | foreground production | 分配至声明批次合格包装产品质量 |
| `media_replication_packaging` | 物理介质复制与单件包装 | required | 始终纳入所选光学或磁性路线、检验、不合格介质、合格产品以及实际使用的单件包装组件。 | foreground production | 1 kg 合格包装产品 |
| `downstream_distribution` | 下游分销 | excluded_by_default | 仅在另行声明的边界扩展中纳入。 | downstream optional | 声明的扩展参考流 |
| `gameplay_and_maintenance` | 游戏运行、硬件使用与维护 | excluded_by_default | 仅在采用服务功能单位的另行声明使用阶段研究中纳入。 | downstream optional | 声明的扩展功能单位 |
| `end_of_life` | 产品生命末期 | excluded_by_default | 仅在另行声明且具有去向特定流的生命末期扩展中纳入。 | downstream optional | 声明的扩展参考流 |

### 过程：软件开发与发布构建（`software_development_build`）

#### 输入

##### 产品流

###### 开发与发布构建电力（`development_electricity`）

购入电力用于可归属于声明软件发布版本的开发工作站、构建服务器、测试设备和支持性基础设施，并跨越前景边界。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量或账单电力中归属于声明活动和期间的部分，并分配至合格包装产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_development_electricity`
- 来源：`green-software-foundation-sci-1-1-0`

**开发硬件实质性评估及数据集新增原子交换。** 对声明发布边界内的每个场址、云资源分配和测试环境执行
`cp_development_hardware_materiality`。对每项实质性服务器、台式工作站、便携式计算机、存储设备、
网络设备、测试用游戏机或其他测试设备，按照实际 Tiangong 设备身份分别添加产品投入交换，并采用该
设备自己的流属性和供应商数据集参考单位。按有记录的时间份额和预留资源份额分配每项设备交换。不得
把不同设备合并为“开发硬件”等选定流。若排除某项设备，应保留其身份、筛选结果、声明截断阈值、
定量依据和批准记录。

##### 废物流

本 PCR 不规定必需的废物投入。任何实际跨越过程边界的具体废物流均应作为独立原子交换记录。

##### 基本流

本 PCR 不预设基本流。发生直接基本交换时必须逐项计量和添加；购入电力的上游排放保留在所链接的电力数据集中。

#### 输出

##### 产品流

本 PCR 不规定单独交换的产品产出。发布构建为转入 `media_replication_packaging` 的内部结果，其共享负荷分配至最终包装参考产品。

##### 废物流

无预设废物流。

##### 基本流

无预设基本流。

### 过程：物理介质复制与单件包装（`media_replication_packaging`）

#### 输入

##### 产品流

###### 复制与包装电力（`replication_packaging_electricity`）

记录、复制、检验和单件包装设备使用的电力跨越前景边界。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：批次计量电力扣除有记录的非生产负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_replication_electricity`
- 来源：

###### 未记录的光学介质（`unrecorded_optical_media`）

仅在光学介质产品路线中纳入该投入。该流是为复制而接收的未记录物理介质。

- 选定流：未记录的光学介质 `714535e8-24d4-44bf-8496-4837f638fdd4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：向批次发放的接收状态光学介质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_media_mass`
- 来源：

###### 未记录的磁性介质（`unrecorded_magnetic_media`）

仅在磁性介质产品路线中纳入该投入，并排除带磁条的卡。

- 选定流：未记录的磁性介质，带磁条的卡除外 `40bcd8b1-541d-4314-9e57-fc1250fd692e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：向批次发放的接收状态磁性介质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_media_mass`
- 来源：

###### 刚性聚丙烯介质盒（`rigid_polypropylene_media_case`）

仅当可销售单件产品含刚性聚丙烯介质盒时纳入。其 Tiangong 精确 UUID 尚未解决。

- 选定流：刚性聚丙烯介质盒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：向批次发放的合格及不合格介质盒净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_case_mass`
- 来源：

###### 纸盒（`paper_box`）

仅当纸盒构成可销售单件产品的一部分时纳入。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：向批次发放的纸盒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_paper_box_mass`
- 来源：

###### 包装纸质说明书内页（`packaging_paper_insert`）

仅当纸质手册、传单或印刷内页随可销售包装提供时纳入。

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：向批次发放的纸质内页质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_paper_insert_mass`
- 来源：

##### 废物流

无预设废物投入。

##### 基本流

无预设基本流。发生直接基本交换时必须逐项记录。

#### 输出

##### 产品流

###### 合格包装计算机游戏软件（`reference_product`）

合格产出为出版商分销门处的完整已记录介质及随可销售产品提供的全部单件包装。

- 选定流：计算机游戏软件，打包 `b4e24ad6-6c52-4158-b19f-a30bdf4da53a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：恰好 1 kg 合格包装成品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`un-cpc-3-0-structure-2025`；`un-cpc-3-0-explanatory-notes-2025`

##### 废物流

###### 废弃光学介质（`rejected_optical_media`）

仅在光学介质路线中，且不合格的已记录或未记录光学介质作为废物离开前景过程时纳入。其 Tiangong 精确 UUID 尚未解决。

- 选定流：废弃光学介质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：转移至有记录废物去向的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_mass`
- 来源：

###### 废弃磁性介质（`rejected_magnetic_media`）

仅在磁性介质路线中，且不合格的已记录或未记录磁性介质作为废物离开前景过程时纳入。其 Tiangong 精确 UUID 尚未解决。

- 选定流：废弃磁性介质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：转移至有记录废物去向的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_mass`
- 来源：

###### 聚丙烯介质盒废料（`polypropylene_case_waste`）

仅当不合格或损坏的聚丙烯介质盒作为废物离开前景过程时纳入。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：转移至有记录去向的实测废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_mass`
- 来源：

###### 纸包装废弃物（`paper_packaging_waste`）

当不合格纸盒、内页或其他纸质单件包装组件作为废物离开前景过程时纳入。

- 选定流：纸和纸板包装废弃物 `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：转移至有记录去向的实测废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_mass`
- 来源：

##### 基本流

本 PCR 不预设基本流。仅将单独计量的直接排放作为物种特定流添加。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有前景过程 | 在进行分配前，优先按软件发布版本、生产线和批次细分过程并直接计量。 |  |
| `allocation_development` | 共享开发/构建电力 | 按可归属于声明发布版本且有记录的 CPU 时间、工作站小时或其他因果活动指标分配支持性资源电力；无因果指标时，采用披露且有理由支持的时间份额。 | `green-software-foundation-sci-1-1-0` |
| `allocation_development_hardware` | 实质性开发/构建硬件 | 对每项单独识别的设备，按预期设备寿命中为发布版本预留的时间份额及设备资源中为发布版本预留的资源份额共同分配所链接的硬件清单。保留实际设备身份；除非下游游戏运行硬件也用于生成或测试该发布版本，否则不得将其分配至本前景过程。 | `green-software-foundation-sci-1-1-0` |
| `allocation_replication` | 共享复制和包装作业 | 产品使用相同设备时，按合格包装产品质量分配共享批次电力和材料；路线存在实质差异时，采用有记录的因果机器时间基准。 |  |
| `allocation_recycling` | 废物和回收产出 | 默认在废物离开前景边界时采用截断法；除非明确声明避免负荷扩展，否则不得计入潜在回收信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_electricity` | `software_development_build` | `development_electricity` | 电表、公用事业账单和工作负荷分配记录 | 电表期间；kWh；场址；设备范围；发布标识；CPU 时间或工作站小时；分配份额 | 将电表或账单总量与声明期间核对，扣除排除负荷，再应用有记录的发布版本特定分配因子。 | kWh 原始；MJ 报告 | 每月及发布结束时 | 完整声明开发/构建期间 | 所有纳入的开发和构建场址 | 先按场址和期间汇总归属 kWh，再转换并按参考流归一化 | 电表导出或账单；设备范围；分配工作表；核对签字 |
| `cp_development_hardware_materiality` | `software_development_build` | 数据集新增的原子开发硬件产品投入 | 设备台账、实质性筛选、上游 LCA 链接和分配记录 | 实际设备类型；制造商和型号或提供方资源身份；功能；场址或云区域；有精确匹配时的 Tiangong 产品流 UUID；上游数据集；供应商参考单位；设备清单总量；投运和退役日期或预期寿命；为发布版本预留的时间；预留资源；总资源；筛选结果；截断阈值；理由 | 筛选用于开发、构建、存储、联网和测试的每项设备。为每项实质性设备添加独立原子产品交换，并采用有记录的时间份额和资源份额分配；每项截断均保留定量理由和批准。 | 各设备供应商数据集参考单位；分配比例为无量纲 | 发布结束时，以及硬件范围或分配发生变化时 | 完整声明开发/构建期间 | 每个纳入场址、云资源分配和测试环境 | 保留设备层级记录；仅在分别确定身份、上游链接和分配后汇总 | 设备或提供方台账；采购/配置记录；上游 LCA 元数据；预期寿命证据；预留日志；实质性工作表；截断批准 |
| `cp_replication_electricity` | `media_replication_packaging` | `replication_packaging_electricity` | 电表和生产批次记录 | 起止读数；kWh；批次 id；运行时间；排除负荷；合格质量 | 将区间电力与生产记录核对，并扣除有记录的非生产负荷。 | kWh 原始；MJ 报告 | 每批或计量生产期 | 代表性生产期间 | 每个复制和包装场址 | 汇总批次归属 kWh，再按合格包装产品质量归一化 | 电表记录；批次日志；停机及排除记录 |
| `cp_media_mass` | `media_replication_packaging` | `unrecorded_optical_media; unrecorded_magnetic_media` | 领用、退回和秤量记录 | 路线；供应商物项；批号；领用件数；退回件数；单件平均质量；领用质量；不合格质量 | 将仓库领退记录与秤量记录核对；只纳入一个声明介质路线。 | kg | 每批 | 代表性生产期间 | 每个复制场址 | 领用质量扣除有记录退回量；不合格品单独保留 | 校准秤记录；库存核对；路线声明 |
| `cp_case_mass` | `media_replication_packaging` | `rigid_polypropylene_media_case` | 领用和秤量记录 | 盒规格；领用件数；退回件数；单盒平均质量；不合格件数 | 测量代表性样本，并将件数与领用质量核对。 | kg | 适用时每个包装批次 | 代表性生产期间 | 每个包装场址 | 净领用件数 × 实测平均质量；不合格盒废物单独保留 | 样本记录；秤校准；库存核对 |
| `cp_paper_box_mass` | `media_replication_packaging` | `paper_box` | 领用和秤量记录 | 纸盒规格；领用件数；退回件数；单盒平均质量；不合格件数 | 测量代表性样本，并将件数与领用质量核对。 | kg | 适用时每个包装批次 | 代表性生产期间 | 每个包装场址 | 净领用件数 × 实测平均质量；纸质不合格品单独保留 | 样本记录；秤校准；库存核对 |
| `cp_paper_insert_mass` | `media_replication_packaging` | `packaging_paper_insert` | 领用和秤量记录 | 内页规格；页数；领用件数；退回件数；内页平均质量 | 测量每个包装所含完整内页并核对件数。 | kg | 适用时每个包装批次 | 代表性生产期间 | 每个包装场址 | 净领用件数 × 实测内页平均质量；纸质不合格品单独保留 | 样本记录；秤校准；库存核对 |
| `cp_reject_mass` | `media_replication_packaging` | `rejected_optical_media; rejected_magnetic_media; polypropylene_case_waste; paper_packaging_waste` | 秤量、不合格品和废物转移记录 | 材料身份；路线；批次 id；毛重；皮重；净重；去向；转移日期 | 按原子材料分开，扣除皮重，并将不合格品日志与废物转移记录核对。 | kg | 每批及每次转移 | 代表性生产期间 | 每个复制和包装场址 | 按 row_id 和去向汇总净质量；不得合并材料身份 | 校准秤记录；不合格品日志；废物转移文件 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_kwh_to_mj` | 两项电力流 | MJ = 实测 kWh × 3.6 | 归属电力 kWh | 电力 MJ |  |
| `calc_development_allocation` | `development_electricity` | 归属电力 = 纳入的支持性资源电力 × 有记录的发布活动份额 | 核对后电力；CPU 时间、工作站小时或有理由支持的时间份额 | 发布版本归属 kWh | `green-software-foundation-sci-1-1-0` |
| `calc_development_hardware_share` | 每项数据集新增的原子开发硬件产品投入 | 分配设备投入 = 设备清单参考数量 ×（发布版本预留时间 ÷ 设备预期寿命）×（发布版本预留资源 ÷ 设备总资源）。时间单位须一致，并保留未舍入因子。 | 实际设备身份和上游参考数量；预留时间；预期寿命；预留资源；总资源 | 按上游数据集参考单位分配至发布版本的设备特定产品投入数量 | `green-software-foundation-sci-1-1-0` |
| `calc_batch_normalization` | 每个前景记录清单行 | 归一化数量 = 批次归属数量 ÷ 合格包装产品质量（kg） | 归属数量；合格产品质量 | 每 1 kg 参考产品的数量 |  |
| `calc_media_balance` | 所选介质路线 | 核对领用介质质量 = 未使用退回质量 + 合格产出中的已记录介质质量 + 不合格介质质量，仅允许有记录的测量差异调整。 | 领用、退回、合格产品组件和不合格质量 | 路线特定质量平衡残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | 所有前景记录 | 记录应覆盖代表性生产期间，并标识所代表的软件发布版本和批次。 | 带日期的电表、账单、批次日志和发布标识 |
| `dq_geography_technology` | 电力、介质和包装投入 | 可行时，供应商数据集应匹配生产地域、电网、介质技术和包装规格，并披露每项代理数据。 | 供应商数据集元数据和代理理由 |
| `dq_completeness` | 过程清单 | 核对所选介质路线、所有单件包装组件和分开的不合格品；不存在的条件行记录为不适用。 | 路线声明、物料清单、库存核对和不合格品日志 |
| `dq_measurement` | 件数到质量换算 | 每项件数到质量换算均保留校准秤证据、采样日期、样本量、平均值和变异性。 | 秤校准和采样工作表 |
| `dq_traceability` | 计算和分配 | 保留原始值、排除项、公式、分配因子、换算因子和签字，使报告值可复现。 | 计算工作簿和批准记录 |
| `dq_development_hardware` | 开发/构建硬件 | 实质性评估应覆盖完整设备台账，并记录实际设备身份、功能、上游 LCA 链接、预期寿命、发布版本预留时间、预留与总资源、分配结果，以及每项截断的定量依据。 | 设备台账；采购或提供方配置；上游数据集元数据；预留日志；实质性与分配工作表；截断批准 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_boundary` | 产品和边界 | 确认为 CPC 47822 下采用磁性或光学介质的包装游戏软件，并拒绝卡带、下载、在线游戏和非游戏软件。 | `un-cpc-3-0-structure-2025`；`un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_mass` | 参考流 | 确认合格产出恰为 1 kg，并包含已记录介质及全部声明单件包装，且排除运输包装。 |  |
| `validate_route_exclusivity` | 介质投入和不合格品 | 确认只声明一个光学或磁性介质路线，且只纳入该路线适用的介质行。 |  |
| `validate_atomic_flows` | 清单 | 确认每项纳入交换均为一个原子流，并将不存在的条件组件标记为不适用。 |  |
| `validate_energy_allocation` | 电力 | 核对原始能源记录、3.6 MJ/kWh 换算、排除负荷以及有记录的开发与批次分配因子。 | `green-software-foundation-sci-1-1-0` |
| `validate_development_hardware` | 开发/构建硬件 | 确认实质性评估覆盖声明发布边界内每项开发、构建、存储、网络和测试设备。每项实质性设备应以独立原子产品交换记录实际身份、上游 LCA 链接、预期寿命、时间份额和资源份额；每项被排除设备应具有定量截断依据和批准。 | `green-software-foundation-sci-1-1-0` |
| `validate_mass_balance` | 介质和包装 | 对所选路线的投入、退回、合格产品组件和不合格质量进行核对；调查并披露残差。 |  |
| `validate_unresolved_uuid` | UUID 为空的行 | 确认未解决 UUID 的行仍使用具体名称，并在审查元数据中记录无精确候选结论；不得替换为代理 UUID。 |  |
| `validate_source_traceability` | 来源支持的规则 | 确认每个来源 id 均可解析至第 11 节，且已审查原文位置和适用性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 包装计算机游戏软件从摇篮到出版商门的前景数据集 |
| downstream_use | 用于产品碳足迹、具有等效介质/包装配置的比较 LCA，以及显式添加分销、使用和生命末期阶段的生命周期模型 |
| allowed_use | 具有匹配平台、包装配置、地域、期间和分配元数据的声明光学或磁性物理介质路线 |
| excluded_use | 下载、在线游戏、游戏机卡带、软件即服务，或未采用另行建模使用阶段功能单位的游戏运行/服务性能主张 |
| required_metadata | 软件发布版本；平台；介质路线和格式；包装物料清单；生产场址和期间；合格质量；分配方法；开发硬件设备台账及实质性评估；上游数据集链接；截断；未解决 UUID |
| required_quality_disclosure | 测量覆盖；件数到质量采样；电力分配；设备层级硬件时间/资源分配；路线和质量平衡残差；供应商代理；排除负荷；条件行；数据缺口 |
| update_trigger | 软件发布构建范围、平台、物理介质格式、包装配置、复制技术、生产地域、分配基准或材料供应商数据集发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Structure》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 47822 正式代码及英文产品名称 |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Explanatory Notes》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 物理介质包装游戏边界及明确排除项 |
| `green-software-foundation-sci-1-1-0` | standard | Green Software Foundation，《Software Carbon Intensity Specification》，版本 1.1.0，https://sci.greensoftware.foundation/ | 软件边界、支持性资源能源归属、开发硬件时间/资源分配、功能单位一致性及计算可追溯性 |
| `cifa-lca-database-guideline-cpc-appendix` | official_guidance | 中国国际货运代理协会，《LCA/碳足迹数据库构建导则——第六章附录》，https://www.carbonfootprint.network/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix | 仅用 CPC 2.1 分类表第 47822 行核验专业中文产品名称术语；产品身份和边界仍以 CPC 3.0 来源为准 |
