---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.operating-systems-packaged
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 套装操作系统

## 1. 范围与适用性

本 PCR 适用于以实体套装产品形式供应的、已发布的现成底层软件；其用途是连接外围硬件、调度任务、分配存储空间，并在没有应用程序运行时提供默认用户界面。范围包括客户端操作系统和网络操作系统。模型涵盖发布质量确认、向所声明实体载体的复制、零售包装组装，以及出版商交付边界处的套装产品。

本 PCR 不包括可下载的系统软件电子文件、在线执行的软件、定制软件开发、软件原件及其所有权、网络管理软件、数据库管理软件、开发工具、应用软件、计算硬件、批发和零售服务，也不包括下游配送、安装、使用、维护和寿命终止阶段。若研究增加下游阶段，应将其单独报告，且不得将结果表述为本 PCR 定义的出版商交付边界画像。

代表性路线为：操作系统发布版复制到光盘或 USB 闪存盘，并与纸质零售盒组装。必须声明实际载体、包装组件、操作系统版本、支持的体系结构、许可证和发布状态。实际包装使用的其他实体组件，应逐项增加为原子交换；不适用的条件行应有证据并标记为不适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.operating-systems-packaged |
| classification_refs | CPC 3.0：47811，Operating systems, packaged |
| covered_products | 以实体套装产品供应的、已发布的现成客户端操作系统和网络操作系统 |
| excluded_products | 系统软件下载；在线软件；定制软件开发；软件原件；网络管理软件、数据库软件、开发工具和应用软件；硬件；贸易服务 |
| representative_product | 使用所声明实体载体并装入纸质零售盒的、已通过发布质量确认的操作系统 |
| production_route | 发布质量确认与母版制作；实体载体复制；零售包装组装；出版商交付边界发布 |
| market_state | 可销售实体套装；已声明载体、包装、版本、体系结构、许可证和发布状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可安装的已发布操作系统，用于管理计算机资源并实现所声明的客户端或网络操作系统功能 |
| How much | 出版商交付边界处 1 kg 可销售套装操作系统产品 |
| How well | 已针对所声明的硬件体系结构及客户端或网络角色通过发布质量确认，并有包装完整性和可安装性记录 |
| How long or cycle | 一个已声明的发布版/版本及其许可证和支持期限；从摇篮到出版商交付边界的结果不模拟该期限内的使用 |
| reference_flow_link | 由 1 kg 所选套装操作系统产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 打包的操作系统 `6539b574-fb79-4d47-9618-06c83a56cdbf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 出版商和生产地域；发布版、版本和版本号；客户端或网络角色；支持的处理器体系结构；许可证类型和期限；支持期限；语言或区域设置；载体类型和容量；包装组件材料与质量；复制和包装技术；生产期间；出版商交付边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及实体载体/包装组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在出版商交付边界测量干态净质量。参考产品不包括二级运输和配送包装；应披露标签、说明书或激活卡是否计入。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按生产期间保留计量电量，并在归一化前按 1 kWh = 3.6 MJ 换算。不得把上游电网排放重复列为前景基本流。 |
| `component_mass_balance` | 合格载体和零售包装组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 汇总所有计入可销售产品的合格载体和包装组件干质量，与成品净质量核对，并解释标签、涂层、油墨、黏合剂或其他差异。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入前景发布与包装过程的已通过质量确认的操作系统母版、可归属于产品的出版商/复制商电力记录，以及外购实体载体和包装组件 |
| starting_condition_role | 出版商交付边界前景起点；载体、包装和电力的上游负荷由所链接的次级数据集提供 |
| product_classification_scope | CPC 3.0 子类 47811 语义边界内的已发布现成操作系统；分类仅为辅助信息，不拥有规范 PCR 身份 |
| recursive_input_rule | 套装操作系统作为投入再次使用或捆绑到另一套装时，以具有自身上游数据集的产品投入记录一次；不得在接收过程内再次展开其载体和包装清单 |
| upstream_dataset_requirement | 为电力、每种合格载体和每个纸盒链接地域和技术具有代表性的上游数据集；披露代理使用，不得以可下载文件候选项代替套装产品身份 |
| disclosure | 声明发布身份、载体和包装物料清单、生产场址与期间、电力分配、合同制造边界、不合格品处理及所有排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_publisher_gate` | publication_packaging | 纳入可归属于所发布套装的发布质量确认与母版制作活动、载体复制、包装组装、合格实体载体和纸盒投入、过程电力、可销售套装产品输出，以及实际发生的其他材料或废物交换。边界止于可销售套装在出版商交付边界的转移。 | `un-cpc-3-0-47811-detail`; `weber-2010-music-delivery` |
| `boundary_download_exclusion` | product_scope | 排除以下载方式供应的电子文件；该产品属于单独定义的系统软件下载边界，而非本实体套装产品 PCR。 | `un-cpc-3-0-84341-detail` |
| `boundary_upstream_links` | upstream_inputs | 通过所链接的上游数据集表示电力、载体和纸盒的生产。不得把其上游排放重复计作前景直接排放。 | `iso-14044-2006` |
| `boundary_component_completeness` | package_configuration | 实际使用的每种载体、盒、箱、说明书、标签、激活卡、油墨、涂层、黏合剂及不合格材料一旦跨越前景边界，均应作为独立原子交换增加；下列具名行只是最低通用清单，不构成截断许可。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `publication_packaging` | 操作系统发布、实体复制与零售包装 | `required` | 对实体套装产品边界始终纳入；特定路线载体行仅在实际使用时适用 | 前景生产 | 出版商交付边界处 1 kg 可销售套装操作系统输出 |

### 过程：操作系统发布、实体复制与零售包装（`publication_packaging`）

#### 输入

##### 产品流

###### 可归属的外购电力（`electricity`）

记录用于发布质量确认、母版制作、载体复制和包装组装的外购电能；不得把上游电网排放重复列为前景直接排放。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：经计量或发票核对、可归属于可销售套装输出的外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售套装操作系统输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：

###### 装有操作系统发布版的已刻录光盘（`recorded_optical_disc`）

所声明载体路线采用光学介质时，记录计入套装产品的合格已刻录光盘。因未确认到准确的操作系统介质候选项，Tiangong 流 UUID 保持未解决。

- 选定流：装有操作系统软件的已刻录光盘
- 流属性/单位：Mass / kg
- 数量规则：计入可销售套装的合格已刻录光盘实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售套装操作系统输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass`
- 来源：`weber-2010-music-delivery`

###### 装有操作系统发布版的 USB 闪存盘（`operating_system_usb_drive`）

所声明载体路线采用 USB 闪存时，记录计入套装产品的合格 USB 闪存盘。因未确认到准确的操作系统 USB 载体候选项，Tiangong 流 UUID 保持未解决。

- 选定流：装有操作系统软件的 USB 闪存盘
- 流属性/单位：Mass / kg
- 数量规则：计入可销售套装的合格操作系统 USB 闪存盘实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售套装操作系统输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass`
- 来源：

###### 纸质零售盒（`paper_box`）

记录计入套装产品的每个纸或纸板零售盒。印刷、纸板等级、再生料含量、涂层和折叠结构属于前景限定信息。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：计入可销售套装的合格纸盒实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售套装操作系统输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass`
- 来源：`weber-2010-music-delivery`

##### 废物流

不得设置通用废物流。实际发生的每种不合格载体、纸盒边角料、印刷纸废料、塑料废料或其他废物，均应按实测处理路线分别增加为原子废物交换。

##### 基本流

不得设置通用直接排放行。只记录前景场址实测的直接基本流；上游电力、载体和包装排放应保留在所链接的上游数据集中。

#### 输出

##### 产品流

###### 可销售套装操作系统（`packaged_operating_system`）

可销售参考输出包括出版商交付边界处所声明的实体载体和零售包装组件。

- 选定流：打包的操作系统 `6539b574-fb79-4d47-9618-06c83a56cdbf`
- 流属性/单位：Mass / kg
- 数量规则：固定参考输出 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 可销售套装操作系统输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-structure-2025`; `un-cpc-3-0-47811-detail`

##### 废物流

所声明参考产品不应包含废物输出。不合格产品应记录为独立废物流，不得从可销售输出中直接冲减。

##### 基本流

参考产品不包含基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_release_replication_packaging | 分配前先细分过程，并优先采用产品、批次或生产线专用计量表和物料清单。 | `iso-14044-2006` |
| `allocation_causal_shared_energy` | electricity | 无法直接计量时，按实测设备运行时间乘以额定或实测负荷等有文件支持的因果驱动量分配共享电力；不得把无关的办公、托管服务或开发用电分配给套装发布。 |  |
| `allocation_shared_materials` | carrier_and_packaging_inputs | 按计入每种可销售产品的合格质量分配共享载体和包装收货量。单独记录不合格品，不得将其隐藏在净材料系数中。 |  |
| `allocation_disclosure` | all_allocated_exchanges | 对每项重要分配交换报告分配比例、驱动量、共享该过程的产品、期间和敏感性检查。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_electricity` | `publication_packaging` | electricity | 电表时段记录和核对后的发票 | 场址；电表；时间戳；期初期末读数或时段 kWh；生产线；分配时的设备运行时间和负荷；可销售输出质量；分配比例 | 优先读取专用电表；否则把发票与所声明的因果分配进行核对 | kWh 和 kg 输出 | 每个生产批次或每月，以较细者为准 | 与输出相同的代表性生产期间，通常至少 12 个月；较短发布活动覆盖全部批次 | 前景边界内的每个出版商、复制和包装场址 | 汇总可归属 kWh，换算为 MJ 后除以可销售 kg；保持各场址电网地域独立 | 电表校准或发票；核对记录；分配工作表；生产日志；异常审查 |
| `cp_component_mass` | `publication_packaging` | accepted physical carrier or paper box | 采购凭证、物料清单、批次数量和称量记录 | 供应商；场址；批次；组件身份；材料；载体容量；合格数量；抽样或总干质量；不合格质量；可销售输出质量 | 称量合格组件批次，或用有代表性的校准抽样和批次数量核实供应商质量 | kg | 每个进货和生产批次 | 与套装输出相同的批次 | 范围内每个载体复制和包装场址 | 按准确组件分别汇总合格质量并除以可销售 kg；光盘与 USB 路线分别保留 | 供应商规格；校准称量记录；物料清单；验收和不合格日志 |
| `cp_output_mass` | `publication_packaging` | packaged operating-system output | 成品和称量记录 | 发布版；版本；体系结构；许可证；载体类型；包装物料清单；合格件数；干态净质量；生产日期；场址 | 对不含二级运输包装的合格成品称量，并与清单核对 | kg | 每批 | 完整代表性发布活动或报告年度 | 发布可销售套装的全部前景场址 | 汇总合格干态净质量；所有交换归一化到 1 kg | 校准称量记录；发布验收记录；包装物料清单；质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | `electricity` | 可归属电力强度 = 计量或分配的 kWh × 3.6 / 可销售输出 kg | 可归属 kWh；可销售套装输出 kg；分配比例 | 每 kg 参考输出的 MJ |  |
| `calc_component_intensity` | `recorded_optical_disc`; `operating_system_usb_drive`; `paper_box` | 组件强度 = 合格组件干质量 / 可销售套装输出质量 | 按准确身份和路线记录的合格组件 kg；可销售套装输出 kg | 每 kg 参考输出的组件 kg |  |
| `calc_package_mass_balance` | `publication_packaging` | 比较成品净输出质量与合格载体、纸盒和全部其他计入组件的质量之和；记录差异原因和测量不确定性 | 成品净输出 kg；合格组件 kg | 质量平衡核对结果 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 核实输出是功能边界内的已发布操作系统，而非下载文件、在线服务、定制开发成果、应用软件或其他系统软件类别。 | 发布清单、产品规格、CPC 边界审查和销售配置 |
| `dq_route_completeness` | process inventory | 声明准确载体和包装配置，把跨越前景边界的每种材料和废物增加为独立原子行；不得以通用包装或废物标签代替。 | 物料清单、过程核查、采购和废物记录 |
| `dq_temporal_alignment` | all foreground records | 电力、组件和输出记录应覆盖同一发布活动或报告期间；披露较短活动和排除批次。 | 带时间戳的电表、发票、批次和输出记录 |
| `dq_mass_balance` | physical components and output | 对每条路线核对合格组件质量、成品输出质量和实测不合格品，并调查无法解释的差异。 | `calc_package_mass_balance` 工作表和称量记录 |
| `dq_uuid_status` | unresolved carrier rows | 未解决的 Tiangong UUID 保持为空，不得提升分类、产品状态、流属性或单位代理。方法审查或发布前重新执行有收据支撑的检索。 | 最终确定的 UUID 检索收据和直读决策 |
| `dq_review_scope` | completed data package | 按预期下游用途报告目标与范围、清单方法、局限性、分配、检查及审查人身份。 | 与 ISO 14044 范围一致的研究报告和审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | 必须恰好使用 1 kg 打包的操作系统 `6539b574-fb79-4d47-9618-06c83a56cdbf`，并填写全部必需限定信息。 | `un-cpc-3-0-47811-detail` |
| `validate_boundary` | product scope and process map | 若参考产品为可下载电子文件、在线软件、定制开发成果或应用软件，或声称出版商交付边界却遗漏范围内发布、复制或包装活动，则校验失败。 | `un-cpc-3-0-47811-detail`; `un-cpc-3-0-84341-detail` |
| `validate_units` | inventory amounts | 参考产品和组件质量必须使用 kg，电力必须使用 MJ；核实全部 kWh 到 MJ 的换算系数为 3.6，且均按可销售 kg 归一化。 |  |
| `validate_atomic_inventory` | all exchanges | 合并的载体、包装材料、公用工程、废物或排放选择器均应判定失败。实际使用的每种实体组件、废物和直接基本流必须分别具有独立行、方向、类型、流属性、单位和路线条件。 |  |
| `validate_conditional_carriers` | `recorded_optical_disc`; `operating_system_usb_drive` | 每种套装配置至少声明一种实体载体。条件载体标记为不适用时，应由包装物料清单证明。 |  |
| `validate_allocation` | allocated exchanges | 必须披露分配驱动量、比例、共享产品、期间和敏感性；无法解释的分配或不合格品净额冲减应判定失败。 | `iso-14044-2006` |
| `validate_reconciliation` | physical package | 要求对所声明期间执行输出/组件/不合格品质量核对，以及电力与输出核对。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | 实体套装操作系统从摇篮到出版商交付边界的建模，以及需要按质量归一化套装软件投入的上游供应链研究 |
| allowed_use | 适用于与所声明操作系统角色、体系结构、许可证、载体、包装物料清单、地域、技术和生产期间相匹配的发布版和套装配置 |
| excluded_use | 系统软件下载、在线软件、软件即服务、定制软件、应用软件、未捆绑计算硬件，或未单独建模的下游安装/使用/寿命终止阶段 |
| required_metadata | 规范 PCR id；CPC 参考；发布版/版本/版本号；客户端或网络角色；支持的体系结构；许可证/支持期限；载体配置和容量；包装物料清单；场址；地域；技术；生产期间；参考流 UUID；未解决 UUID 状态；分配方法 |
| required_quality_disclosure | 数据覆盖度和代表性；电表/发票和称量证据；质量与电力核对；上游数据集身份和代理；条件行；排除项；分配和敏感性；局限性；审查人和审查日期 |
| update_trigger | 新载体或包装配置；重要物料清单变化；影响生产的发布版或体系结构变化；场址/电网/技术变化；分配变化；出现准确 Tiangong 载体 UUID；出现更新的产品边界证据；或重要数据质量发现 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，Central Product Classification Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 47811 正式英文名称和层级 |
| `un-cpc-3-0-47811-detail` | `official_guidance` | 联合国统计司，CPC Version 3.0 classification detail for 47811，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47811 | 操作系统功能边界，以及客户端和网络操作系统纳入范围 |
| `un-cpc-3-0-84341-detail` | `official_guidance` | 联合国统计司，CPC Version 3.0 classification detail for 84341，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341 | 独立的下载产品边界及下载排除项 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，第 1 版，2022 年确认继续有效，https://committee.iso.org/standard/38498.html | LCA 目标与范围、清单、报告、局限性和审查的高层框架 |
| `weber-2010-music-delivery` | `literature` | Weber、Koomey 和 Matthews，The Energy and Climate Change Implications of Different Music Delivery Methods，Journal of Industrial Ecology 14(5)，2010，DOI 10.1111/j.1530-9290.2010.00269.x；已核验全文副本：https://fepropaz.com/wp-content/uploads/2019/10/weber2010.pdf | 支持把实体光盘生产与包装分解为不同过程；未采用数量范围 |
