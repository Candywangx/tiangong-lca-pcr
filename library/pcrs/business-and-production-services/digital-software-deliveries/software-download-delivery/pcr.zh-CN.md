---
pcr_id: pcr.business-and-production-services.digital-software-deliveries.software-download-delivery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 软件下载交付


## 1. 范围与适用性

本 PCR 涵盖以电子文件形式下载、本地保存、供以后安装或执行的版本明确的系统软件与应用软件。系统示例包括操作系统镜像及系统级网络、数据库管理或实用工具版本；应用示例包括文档处理、电子表格、图形及其他有声明用户任务的程序。发行方定义真实功能、平台、架构、版本、所含组件与先决条件。分类码以及系统/应用标签均不构成另立制造或交付方法的依据。二者共用已发布母版准备、存储/复制、实际传输与本地完整性验收。来源：`un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers`。

按真实原始记录涵盖发行方直传、镜像/CDN、软件包仓库和点对点交付架构。完整/离线安装包、安装镜像、引导/在线安装包、组件/语言/帮助包及增量更新包是本方法中的不同完整性画像。一件指声明画像的完整交付，并不一定包括安装所需的全部软件。单个已下载引导文件不能代表完整应用或操作系统交付。更新须声明先决已安装版本、改变内容及另行获取的依赖。保留真实设备、网络、存储、重试与原件负担；不假定固定字节、技术、能耗或寿命。

参考输出排除软件原件本身、实体包装载体、单独许可权益交易、仅受托开发活动、托管执行/SaaS、远程在线游戏以及单纯电信服务。安装、执行、用户工作负载和交付后支持为独立下游活动。下载型应用/游戏文件按真实本地软件文件交付与声明功能判断，不因营销名称任意排除。本方法不提供通用软件功能等效或安全认证规则。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.digital-software-deliveries.software-download-delivery |
| classification_refs | CPC 3.0：84341 系统软件下载；84342 应用软件下载；仅为分类背景，不构成已接受正向映射 |
| covered_products | 在本地存储验收的声明系统/应用软件文件包，包括分别识别的完整、引导、组件与更新交付画像 |
| excluded_products | 原件资产；实体包装载体；单独许可；单独受托开发；托管执行/SaaS；持续软件运行；单纯电信活动 |
| representative_product | 一个有发行方功能及完整性声明的本地验收特定版本/平台软件包；不假定平均软件或安装器路线 |
| production_route | 已验收发布母版 → 分发准备 → 源站/缓存/仓库存储 → 实际传输 → 本地写入与完整性验收 |
| market_state | 完整声明下载文件画像已在本地验收、尚未安装/执行；完整引导包画像不等于完整已安装软件系统 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 将声明的软件发行版本/画像交付本地存储供以后安装/执行，明确系统或应用功能 |
| How much | 一个已完成验收的声明文件包，1 件；文件数量和字节仅为描述，不是参考数量 |
| How well | 实际发行方清单、完整性验收、功能/平台/版本以及组件/先决条件完整性；无通用性能、安全或监管批准 |
| How long or cycle | 在声明发行分发观察期内的一次验收交付；不假设已安装服务寿命 |
| reference_flow_link | `download_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收软件下载包 |
| 参考流属性 | 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 件数单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 发行方；系统/应用功能；发行版本/版本/渠道；目标操作系统/平台/架构；安装包/镜像/引导包/组件/更新画像；先决版本与依赖清单；所含语言/帮助/扩展；完整画像文件清单/哈希及实测字节；本地验收；交付路径；权利/复用条件；观察期/群组；原件/组件份额账本；实际场址/电网/电压；供应商及硬件/网络覆盖；安装/使用分界 |

item 是公开原件 Item(s) 的单件显示别名。实际数据包须声明全部限定信息，缺失则参考定义不完整。件数、字节或软件类别相同不证明功能或完整性等效。不同画像分别建数据集；本共享方法不将操作系统镜像与小型引导程序任意平均。来源：`un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers`。

Debian netinst 为系统示例，初始镜像包含基础子集，后续获取其余软件包；Firefox 引导/完整安装器对应用软件同样要求区分初始画像、后续交付与安装。因此这些是跨类别交付配置，不是建立重复系统/应用方法的理由。逐个声明有效载荷记录真实本地保存与验收，不把流式远程执行或无法分开的已安装软件结果视为已核验本地存储下载包。来源：`debian-netinst`；`mozilla-installers`。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 仅以一个版本、平台和完整性范围固定的验收下载包为参考件。按 cp_delivery 记录；权利、收入、用户、字节及设备 kg 不替代件数。 |
| `energy_unit` | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 cp_energy 实测可归属 kWh，再换算 MJ = kWh × 3.6；保留真实净热值属性，不改为质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_delivery` | all stages | 从已发布可复用软件母版采集至验收本地保存。覆盖分发准备、源站/缓存副本保存、实际传输路径、失败/重试与接收检查。明确列出不完整网络/供应商环节；此前景本身不是完整从摇篮到大门。 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `boundary_original` | master_input | 将原创制作作为上游份额连接，声明复用总体与归属计划。不得在每次下载内部重做源代码编写/测试清单。实际发生的发布专用重新打包或交付核验仍属前景。 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `boundary_use` | reference output | 参考交付单位排除安装、启动、持续运行、用户服务、交付后支持及最终硬件处置；需要时另行建模。投入设备制造份额不代表已覆盖安装/运行。 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `boundary_conditions` | conditional exchanges | 若声明边界内实际发生备用发电燃料、制冷剂损失、取水、直接排放、冷却添加剂或设备处置，须凭原始证据各设原子行。外购电力不默认直接燃烧排放。若供应商服务替代分解阶段，须按原始活动单位增加一个边界明确的具体交付投入并连接上游清单，移除重复组成。 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `boundary_profiles` | download_output and dependency delivery | 计量前确定确切文件画像与验收点。离线安装包/镜像交付止于声明文件本地验收；仅引导画像止于引导文件验收并披露缺失有效载荷/依赖。引导器获取实际有效载荷或仓库依赖时，完整交付画像须将这些下载阶段计入一次，即使它们与安装交织发生。分别计量/归属网络获取、本地写入及完整性作业与解包、配置、安装和首次运行。不能分开时保留明确实测/建模分界与不确定性，不得称交付清单完整。 | `libreoffice-install`; `mozilla-installers`; `debian-verify` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 验收的版本化可复用母版及声明上游原创份额 |
| starting_condition_role | 分发前景起始状态 |
| product_classification_scope | 本地保存的系统/应用软件可下载文件；CPC 84341 与 84342 仅为分类背景 |
| recursive_input_rule | 先前软件副本/原件按边界明确的上游复用清单计入一次；不递归重开嵌套开发/分发 |
| upstream_dataset_requirement | 相符原创份额、实际地域电力、设备制造和条件适用公用工程/处理投入；未知环节保留缺口 |
| disclosure | 原创与交付覆盖；完整网络/本地路径；存储期间；缓存/复制策略；尝试记录；供应商；硬件/冷却；条件交换；排除安装/使用 |

## 6. 过程清单结构

四个交付阶段同时适用于系统和应用画像。基础设施阶段以实际支持设备和公用工程为条件，并非允许忽略其负担。供应商打包清单仅在边界核对后替代其已含成分。若移动设备、独立显示器、光链路、备用发电机、制冷剂或冷却化学品实际贡献，应增设各自真实单项交换和协议；初始卡片不是完整通用设备/公用工程目录。依赖原件与额外文件包须逐项识别上游份额，不设未指定集合行。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `preparation` | 发布分发准备 | required | 冻结已验收母版、分发清单、发行方实际提供的签名及真实镜像发布作业；避免重复原件开发作业。 | 前景交付 | 每声明的参考流 |
| `storage` | 源站存储与缓存复制 | required | 纳入声明分发期间实际源站文件保存、副本、缓存填充、冗余、监控和预留容量。 | 前景交付 | 每声明的参考流 |
| `transfer` | 下载传输 | required | 按实测架构纳入源站/CDN、骨干、接入网络及重试；采用点对点分发时纳入对等端上传。 | 前景交付 | 每声明的参考流 |
| `receipt` | 本地接收与完整性验证 | required | 纳入接收设备下载、本地写入与完整性检查，终点为验收本地文件保存，早于安装或执行。 | 前景交付 | 每声明的参考流 |
| `infrastructure` | 可归属支持基础设施 | conditional | 仅纳入实际自有或可透明分解的供应商设备与冷却；避免重复打包服务清单。 | 前景交付 | 每声明的参考流 |

### 过程：发布分发准备 (`preparation`)

#### 输入

##### 产品流

###### 交流电 (`preparation_lv_electricity`)

仅适用于中国实际用户端低于 1 kV 的电网平均供电。仅记录本阶段可归属电量；预留闲置容量和实测冷却附加电量各计一次。两种供电身份是条件分支，不能对同一电表重复相加。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy，实测可归属 kWh × 3.6，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci`

###### 交流电 (`preparation_mv_electricity`)

仅适用于中国实际用户端 1–35 kV 的电网平均供电。仅记录本阶段可归属电量；预留闲置容量和实测冷却附加电量各计一次。两种供电身份是条件分支，不能对同一电表重复相加。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy，实测可归属 kWh × 3.6，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci`

###### 已发布软件母版 (`master_input`)

一个可复用的版本化母版携带上游原件制作清单的分摊份额进入。不能在每次下载中再次计入整个原件。若无法确定原创归属，保留该投入，单独报告交付阶段结果并披露缺失的上游负荷。

- 选定流：已发布软件母版
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_master 记录该验收交付对应的有证据母版份额，每声明的参考流；不默认每份副本占用一个完整原件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_master`
- 来源：`gsf-sci`

##### 废物流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

#### 输出

##### 产品流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 废物流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。


### 过程：源站存储与缓存复制 (`storage`)

#### 输入

##### 产品流

###### 交流电 (`storage_lv_electricity`)

仅适用于中国实际用户端低于 1 kV 的电网平均供电。仅记录本阶段可归属电量；预留闲置容量和实测冷却附加电量各计一次。两种供电身份是条件分支，不能对同一电表重复相加。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy，实测可归属 kWh × 3.6，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci`

###### 交流电 (`storage_mv_electricity`)

仅适用于中国实际用户端 1–35 kV 的电网平均供电。仅记录本阶段可归属电量；预留闲置容量和实测冷却附加电量各计一次。两种供电身份是条件分支，不能对同一电表重复相加。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy，实测可归属 kWh × 3.6，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci`

##### 废物流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

#### 输出

##### 产品流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 废物流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。


### 过程：下载传输 (`transfer`)

#### 输入

##### 产品流

###### 交流电 (`transfer_lv_electricity`)

仅适用于中国实际用户端低于 1 kV 的电网平均供电。仅记录本阶段可归属电量；预留闲置容量和实测冷却附加电量各计一次。两种供电身份是条件分支，不能对同一电表重复相加。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy，实测可归属 kWh × 3.6，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci`

###### 交流电 (`transfer_mv_electricity`)

仅适用于中国实际用户端 1–35 kV 的电网平均供电。仅记录本阶段可归属电量；预留闲置容量和实测冷却附加电量各计一次。两种供电身份是条件分支，不能对同一电表重复相加。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy，实测可归属 kWh × 3.6，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci`

##### 废物流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

#### 输出

##### 产品流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 废物流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。


### 过程：本地接收与完整性验证 (`receipt`)

#### 输入

##### 产品流

###### 交流电 (`receipt_lv_electricity`)

仅适用于中国实际用户端低于 1 kV 的电网平均供电。仅记录本阶段可归属电量；预留闲置容量和实测冷却附加电量各计一次。两种供电身份是条件分支，不能对同一电表重复相加。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy，实测可归属 kWh × 3.6，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci`

###### 交流电 (`receipt_mv_electricity`)

仅适用于中国实际用户端 1–35 kV 的电网平均供电。仅记录本阶段可归属电量；预留闲置容量和实测冷却附加电量各计一次。两种供电身份是条件分支，不能对同一电表重复相加。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy，实测可归属 kWh × 3.6，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci`

##### 废物流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

#### 输出

##### 产品流

###### 已验收软件下载包 (`download_output`)

输出为一个在本地保存并验收、供以后安装/执行的完整声明软件文件画像。cp_delivery 固定功能、发行版本/渠道、平台/架构、组件、语言/帮助内容、依赖及先决状态。完整包、引导文件与增量补丁范围不同；引导下载完成不证明后续完整安装器已到达。完整软件交付汇总画像须在验收该输出之前，计入所有后续获取的声明组件及其原件份额、存储和真实传输/重试/写入/校验负担。安装或运行活动不加入下载单位。

- 选定流：已验收软件下载包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`gsf-sci`

##### 废物流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。


### 过程：可归属支持基础设施 (`infrastructure`)

#### 输入

##### 产品流

###### 重量不超过 10 千克的便携式自动数据处理机，如笔记本电脑、笔记本和次级笔记本电脑 (`portable_computer_share`)

仅适用于与此身份相符、实际用于准备或接收且不超过 10 kg 的便携式计算机。设备净质量是硬件质量，不是软件质量。若独立显示器或外设未包括在设备数据集中，须分别增加具体行。

- 选定流：重量不超过 10 千克的便携式自动数据处理机，如笔记本电脑、笔记本和次级笔记本电脑 `c4cb6070-944d-41be-a231-a0a2b9477174`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_hardware，实测设备净质量 kg × 可归属预留时间份额 × 预留资源份额，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware`
- 来源：`gsf-sci`

###### 用于传输或接收语音、图像或其他数据的其他电话机和设备，包括用于有线或无线网络（如局域网或广域网）通信的设备 (`router_share`)

仅适用于符合此身份的实际独立数据路由设备；排除网卡及已计入供应商清单的设备。硬件归属采用明确配置与原始预留记录。

- 选定流：用于传输或接收语音、图像或其他数据的其他电话机和设备，包括用于有线或无线网络（如局域网或广域网）通信的设备 `8b57a042-ffa4-4f3d-a5c7-556fce28e7b3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_hardware，实测设备净质量 kg × 可归属预留时间份额 × 预留资源份额，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware`
- 来源：`gsf-sci`

###### 其他自动数据处理机器，无论是否在同一外壳中包含一个或两个以下类型的单元：存储单元、输入单元、输出单元 (`server_share`)

仅适用于符合其他自动数据处理机身份的实际源站/缓存机架服务器（不是同机壳集成输入输出系统）；记录 CPU、内存、存储、机箱及实测配置。上游制造计入一次；供应商已含设备不能再次加入。

- 选定流：其他自动数据处理机器，无论是否在同一外壳中包含一个或两个以下类型的单元：存储单元、输入单元、输出单元 `ea5779a6-4214-400c-b380-155efbd5b98e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_hardware，实测设备净质量 kg × 可归属预留时间份额 × 预留资源份额，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware`
- 来源：`gsf-sci`

###### 自来水 (`cooling_water`)

仅适用于与供应商状态和地域相符的实际外购经处理自来水冷却补水。它不是淡水基础资源；不默认冷却技术或用水要求。排除已计入供应商清单的用水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_water，实测可归属水质量，每声明的参考流；任何体积转质量换算均保留密度与状态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`gsf-sci`

##### 废物流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

#### 输出

##### 产品流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。

##### 废物流

###### 未经处理的冷却塔排污水 (`cooling_blowdown`)

仅适用于实际送往明确处理供应商的冷却塔排污；表征溶解盐与实际添加剂。不假设直接环境排放或通用废水组成。

- 选定流：未经处理的冷却塔排污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_water，实测可归属排污水输出质量，每声明的参考流；核对进水、蒸发与库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`gsf-sci`

##### 基本流

本组不预设交换；仅在实际原始证据支持时增补具体原子行，上游电力排放不重复列为直接排放。


## 7. 分配与共产品处理

下述原件受益者账本为通过 cp_master 实施的前景记账要求；SCI 提供资源归属概念，不提供软件副本数量或原件负担分配因子。设备质量仅用于缩放相容上游制造清单，绝不是软件质量；硬件处置范围须单独披露。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_resource` | electricity and infrastructure | 优先采用阶段/场址/作业直接电表。共享存储电量采用实测预留容量、时长与经校准资源归属；传输采用核对后的设备电量及作业/流量遥测，不用通用 kWh/GB 因子。预留闲置和冷却各计一次。核对分配总量与设备/供应商总量并披露缺失环节。 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `allocation_copy` | master and publication overhead | 对所有受益系统/应用版本、引导/完整/更新画像、实体副本渠道及适用托管服务复用保持唯一母版/组件负担账本。区分原件制作、版本专属开发、打包/签名与交付校验，每项活动仅计一次。记录有界观察截止点、实际可比验收交付、已分配份额、尚未分配负担及单列预测受益者；各原件已分配和剩余份额与原件总量核对，累计分配不得超过总量。同一发行版本/画像群组按实测验收数量归一化其有依据分配份额。不同受益者之间的份额须有原始因果/资源贡献依据及敏感性，不采用通用副本因子、售价、用户或文件字节。未知原创归属阻止含上游完整结果；不得每次下载计整份原件或默认零负荷。 | `gsf-sci` |
| `allocation_hardware` | hardware shares | 将 SCI 时间/资源归属方法适配到交付架构：实测硬件净质量乘预留时间/有证据在用寿命份额，再乘预留资源/总资源份额。时间单位一致；不默认设备寿命或利用率。供应商已含隐含负荷时不再追加硬件份额。 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_delivery` | receipt | download_output | acceptance_record | release/channel; architecture/platform; system/application function; profile; component/language/help manifest; dependency and prerequisite version; file list; hash/signature; bytes; licence/reuse conditions; local receipt id; accepted delivery count; failures/retries; bootstrap payload fetches; installation activity split | 核对发行方发布/组件清单、接收文件、有支持的完整性核验与唯一完成传输记录。记录引导/完整/更新状态、依赖获取与确切本地验收。计一个声明完整画像，不计 HTTP 请求、文件分块、许可、用户或安装机器；失败重试保留在同一观察边界。 | item | each accepted delivery | complete declared observation period | publisher, mirrors, actual local recipients | 每声明的参考流 | acceptance; manifest/hash; transfer ledger |
| `cp_energy` | preparation; storage; transfer; receipt | stage electricity | meter_record | stage; site; meter; region; voltage; time interval; kWh; jobs; bytes transferred/stored; reserved resources; idle; cooling; allocation ledger | 采集经校准分表或供应商原始遥测；核对阶段/作业电量、存储保存/缓存填充、网络路径及接收写入/校验作业。字节/时间仅在实测或经校准资源电量关系支持下作为归属证据；无通用换算。 | kWh | each meter/job interval | including unsuccessful attempts and idle reservation | all contributing sites/providers/recipients | 每声明的参考流 | calibration; provider boundary; reconciliation |
| `cp_master` | preparation | master_input | asset_record | master/component id/version; system/application function; original inventory and creation boundary; release acceptance; preparation jobs; beneficiaries across releases/channels; cohort/cutoff; assigned/residual original shares; actual/projected delivery population; rights; cumulative shares | 读取版本/组件溯源、原创清单和复用原始记录。将各原件总量与跨系统/应用渠道全部已分配和剩余受益份额核对，连接群组份额及实际验收数量。记录原件开发之外的打包/签名作业并避免重复。未来总体和跨画像归属未决不确定性与实测交付清单分别保留。 | item | each release/cohort | original scope and declared delivery window | actual publisher/upstream original author | 每声明的参考流 | upstream inventory; rights; cumulative schedule |
| `cp_hardware` | infrastructure | portable_computer_share; router_share; server_share | device_record | device id; CPU/memory/storage/chassis; net mass; scale/supplier record; reserved time; installed life evidence; reserved/total resources; provider coverage | 采用经校准设备净称重或可追溯同配置供应商质量；记录在用寿命证据及预留日志，时间/容量定义一致。不设软件质量或默认寿命。 | kg | device configuration/reservation change | distribution window and hardware-life evidence | actual owned or transparently decomposed provider devices | 每声明的参考流 | weighing/configuration; life basis; no duplication |
| `cp_water` | infrastructure | cooling_water; cooling_blowdown | utility_record | input water mass; outgoing blowdown mass; supplier quality; additives; density/state; evaporation; stocks; treatment destination; cooling allocation | 读取实际冷却供水/排污计量和原始水质记录。以可归属作业核对进水、蒸发、库存和排污；体积须凭实测密度/状态换算，不能任意等同质量。 | kg | each utility interval | full applicable distribution window | actual cooling sites and treatment providers | 每声明的参考流 | meters; quality/density; receiving treatment; balance |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | all electricity rows | MJ = 实测可归属 kWh × 3.6；资源归属必须先由实测记录完成，不以字节替代电量。 | cp_energy | 每声明的参考流 MJ | `gsf-sci` |
| `delivery_basis` | all inventory rows | 所有交换直接记录为每声明的参考流。多个同版本/平台/完整性验收交付的群组，须先核对原始资源归属与失败记录，再用实测验收数量求每件均值；不得混合不同画像。 | cp_delivery; cp_energy; cp_master; cp_hardware; cp_water | 每声明的参考流 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `hardware_share` | portable_computer_share; router_share; server_share | 归属硬件 kg = 实测设备净质量 kg × (预留时间 / 有证据在用寿命) × (预留资源 / 总资源)。统一时间单位；寿命和容量大于零；各份额不超过一，核对跨作业合计。 | cp_hardware | 每声明的参考流 kg | `gsf-sci` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | download_output | 固定系统/应用功能、发行版本/渠道、操作系统/平台/架构、安装包/补丁完整性、依赖、可选组件、权利与本地验收。发行方证据界定所含功能及兼容性，不构成通用代码质量；实测字节不能替代验收。 | cp_delivery; publisher manifest |
| `quality_coverage` | all stages | 覆盖真实存储期间、复制/缓存、网络段、接收与重试；记录缺失供应商数据和实测/建模分界，缺失不是零。 | primary job/meter ledger; provider boundaries |
| `quality_representative` | dataset reuse | 声明实际分发架构、地域、电网、电压、文件容量/完整性、存储窗口、用户端设备与网络条件；单个发行版本不是全行业平均。 | dataset profile; uncertainty and original-share sensitivity |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | download_output | 要求一个完整本地保存的验收文件包，含确切版本/平台、文件清单、发行方支持的校验和/签名核验、软件功能与依赖/先决条件范围。完整镜像、引导安装包和增量补丁是不同画像；仅引导包不等于完整已安装系统。校验和核验不构成通用安全或合规批准。 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `validate_basis` | all inventory rows | 检查共同完成交付分母、阶段/作业范围、重试归属、实测交付数量、母版计划与电量换算。流量字节、存储字节、用户、收入、许可权益及硬件质量不能替代参考件数或直接变为电力。电力地域/电压和各硬件/水身份须与实际原始记录相符。 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |
| `validate_profiles` | download_output and linked original/component inputs | 要求来源支持的系统/应用功能及真实发行方版本/平台/组件记录。离线完整安装包、引导画像、增量更新或可选语言/帮助包不得视为等价。补丁须有相容先决版本；完整画像须包含每个声明已下载依赖。核对全部受益画像的母版/组件账本分配与剩余份额，拒绝重复整份原件、遗漏复用组件及以未观察未来副本作分母。 | `un-system-download`; `un-application-download`; `libreoffice-install`; `mozilla-installers` |
| `validate_completeness` | dataset release | 缺失网络或接收记录、适用但未解决的流身份、未经核验原件份额及无支持供应商归属均保留明确缺口。报告实测/建模覆盖与不确定性；不能将仅交付数据集称为全生命周期、完整从摇篮到大门或已批准方法。仅比较软件功能、版本完整性和交付边界等效的数据集。 | `un-system-download`; `un-application-download`; `gsf-sci`; `debian-verify`; `libreoffice-install`; `mozilla-installers` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 软件下载交付前景；仅在连接投入核验后形成含上游结果 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相符软件交付模块；功能与完整性等效的另行连接安装/使用研究 |
| excluded_use | 全生命周期系统运行；原创/供应商未连接时声称完整从摇篮到大门；权利估值；安全/方法学批准；通用 GB 影响因子 |
| required_metadata | 全部参考限定信息、群组/期间、原创份额计划、实际传输/存储/接收边界、供应商清单和条件交换 |
| required_quality_disclosure | 实测/建模分界、缺失环节/身份、分配不确定性、缓存/重试处理、硬件寿命假设、上游排除 |
| update_trigger | 发布/软件功能/完整性、交付架构、电网、保存策略、供应商实测数据或原创复用总体变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-system-download` | official_guidance | UNSD，CPC Version 3.0，84341 子类解释。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341 | 系统软件本地保存文件身份；不提供清单数量或方法学批准 |
| `un-application-download` | official_guidance | UNSD，CPC Version 3.0，84342 子类解释。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84342 | 应用软件本地保存文件身份；交付状态定义相同，不以分类建立重复方法 |
| `gsf-sci` | standard | Green Software Foundation，Software Carbon Intensity Specification 1.1.0，Energy；Embodied emissions；Software boundary；Quantification method。https://sci.greensoftware.foundation/ | 将预留资源电量及时间/资源硬件归属概念适配交付；不采用 SCI 分数、默认寿命、字节电量或原件副本因子 |
| `debian-verify` | official_guidance | Debian Project，Verifying authenticity of Debian images，签名校验和及相应哈希/签名工具说明。https://www.debian.org/CD/verify | 系统镜像完整性示例；发行方支持核验不证明已安装功能/安全，不要求所有产品使用 Debian 工具 |
| `libreoffice-install` | official_guidance | The Document Foundation，LibreOffice Installation Instructions，macOS/Linux/Windows 及附加语言/帮助组件。https://www.libreoffice.org/installation-instructions/ | 应用平台和组件完整性、下载与安装分界；仅为示例，不要求统一包装格式或依赖清单 |
| `mozilla-installers` | official_guidance | Mozilla，Firefox Source Docs，Stub Installer 与 Full Installer。https://firefox-source-docs.mozilla.org/browser/installer/windows/installer/StubInstaller.html ; https://firefox-source-docs.mozilla.org/browser/installer/windows/installer/FullInstaller.html | 引导器下载完整安装器，后者安装浏览器；区分已下载画像/有效载荷与安装；仅为示例，不采用下载大小或默认电量 |
| `debian-netinst` | official_guidance | Debian Project，Network install from a minimal USB, CD，基础镜像及后续互联网软件包说明。https://www.debian.org/CD/netinst/ | 系统镜像与后续有效载荷完整性及安装分界；仅下载镜像，不要求实体 USB/CD 制造或统一软件包清单 |
