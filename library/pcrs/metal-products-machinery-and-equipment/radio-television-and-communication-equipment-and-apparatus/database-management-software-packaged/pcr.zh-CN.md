---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.database-management-software-packaged
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 成套数据库管理软件

## 1. 范围与适用性

本 PCR 适用于已出版、能够对数据库中的信息进行存储、修改和提取，并以成套软件成品形式供应的数据库管理软件程序集合或套件。只要声明软件版本、支持的平台、许可范围、数据库功能和实物交付配置，其范围包括从个人计算机上运行的小型 DBMS 套件到大型机上运行的大型 DBMS 套件。

前景生产边界起始于由出版方控制并验收的源代码、第三方软件组件、构建说明和发布要求。边界包括开发、编译或构建、测试、安全扫描、发布准备，以及分配给这些活动的电力和硬件。对于实物发行单元，如果成品包含相应组件，还包括在声明的光学载体上刻录软件和装配直接零售包装。

操作系统、网络软件、开发工具、应用软件、定制软件开发服务、软件下载服务、在线软件、数据库使用权许可服务，以及未经改变的上游硬件或包装制造不属于本产品类别。除非增加单独声明的使用或报废模块，否则声明关口之后的下游配送、安装、运行、维护、用户硬件、数据中心运行和报废均不属于本生产数据集。纯下载或在线服务不得表示为本质量基准的成套软件产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.database-management-software-packaged |
| classification_refs | CPC 3.0 47813，成套数据库管理软件 |
| covered_products | 已出版、能够存储、修改和提取数据库信息，并作为成套系统软件成品供应的 DBMS 程序集合或套件 |
| excluded_products | 操作系统；网络软件；开发工具和编程语言软件；应用软件；定制软件开发服务；软件下载；在线软件；不包含成套产品的数据库许可服务 |
| representative_product | 具有声明版本、支持平台、许可范围、数据库工作负载能力和实物交付配置的已发布 DBMS 发行单元 |
| production_route | 软件开发、构建、测试、扫描、发布和直接零售包装装配；包含光学载体时，在外购已刻录载体路线与内部空白载体刻录路线之间二选一 |
| market_state | 位于出版方或包装关口的成套 DBMS 成品，按包含声明的直接载体和零售包装的合格产品毛质量计量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够对数据库信息进行存储、修改和提取的、已出版的 DBMS 程序集合或套件成品 |
| How much | 声明的出版方或包装关口处 1 kg 合格成套 DBMS 成品 |
| How well | 声明的发布版本通过针对规定数据库功能、工作负载、支持平台和许可范围的发布验收测试 |
| How long or cycle | 一个声明的发布版本及其规定的支持期；除非单独建模，否则关口后的支持活动不计入生产数量 |
| reference_flow_link | packaged_dbms_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 成套数据库管理软件 `3761b338-237c-4781-81f2-ecd23ed93283` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | DBMS 版本和版本档次；支持的操作平台；许可及用户或处理器范围；声明的数据库功能和代表性工作负载；发布验收准则；实物载体类型；直接包装组成；地域和时间范围；生产及包装关口 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品和实物包装组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量合格的发行单元成品，以及其中包含的直接载体、盒、说明书内页和零售纸盒。排除声明关口以外的运输纸箱和托盘。按合格产品毛质量将全部生产交换归一化为恰好 1 kg。 |
| `electricity_energy_conversion` | 电表或遥测得到的电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留以 kWh 表示的原始电力记录，并采用 1 kWh = 3.6 MJ 将分配后的总量换算为 MJ。应计入为前景活动预留或配置的硬件所消耗的全部电力，而不只计活动执行期间的用电。 |
| `hardware_allocation_basis` | 机架式服务器和台式工作站 | Mass | kg | 记录已安装硬件质量、预计寿命、为该发布版本预留的时间、预留资源和总资源。硬件分配质量等于已安装质量乘以时间份额再乘以资源份额，并归一化至 1 kg 合格产出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 出版方控制的源代码、第三方软件组件、构建说明、发布要求，以及前景开发和发布活动开始前声明的实物包装物料清单 |
| starting_condition_role | 前景软件生产和有条件实物包装装配的起始条件 |
| product_classification_scope | 核心功能为存储、修改和提取数据库信息的、已出版的成套数据库管理系统软件 |
| recursive_input_rule | 已采购或转入且属于同一成套 DBMS 类别的成品，应作为具有单独合规数据集的上游产品输入记录；不得在当前前景过程中再次展开其生产 |
| upstream_dataset_requirement | 对跨越前景边界的电力、计算机硬件、外购已刻录介质、空白光学介质、纸盒、印刷纸质说明书内页和聚丙烯盒，采用地域和时间上具有代表性的上游数据集 |
| disclosure | 声明纳入的软件组件、发布版本、合格产出质量、开发和构建期间、基础设施边界、硬件分配参数、交付配置、所选载体供应路线、包装物料清单、地域、数据缺口和所有排除的生命周期阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景软件生产 | 纳入对声明发布版本有显著支持作用的开发、构建、测试、安全扫描、发布准备、分配电力和分配计算机硬件。仅当声明的产品配置实际包含相应实物组件时，才纳入直接零售包装装配；仅在内部刻录路线中纳入光学载体刻录。 | green-software-foundation-sci-1-1-0 |
| `boundary_rule_2` | 产品类别区分 | 仅对由存储、修改和提取功能定义的成套 DBMS 成品建模。不得用纯下载软件、在线软件、许可服务、其他软件子类或发布候选中间产物替代参考产品。 | un-cpc-3-0-47813-detail |
| `boundary_rule_3` | 下游阶段 | 本生产数据集排除声明关口之后的配送、安装、运行、维护、用户设备、数据中心运行和报废。若研究纳入任何这些阶段，应采用声明的工作负载型功能单位和基础设施边界，将其作为单独模块报告。 | green-software-foundation-sci-1-1-0 |
| `boundary_rule_4` | 光学载体供应 | 产品包含光学载体时只能选择一条路线。外购已刻录路线把已刻录载体成品作为产品投入，并把刻录视为上游过程。内部路线应记录空白光学介质、前景刻录用电、每种实际刻录耗材及每种实际刻录废物，且不得同时记录外购已刻录载体。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `software_production_release` | 软件开发、发布和有条件实物包装 | required | 仅当声明的发行单元成品包含相应组件时，实物包装各行才适用；包含光学载体时，应在外购已刻录路线与内部刻录路线之间且仅选择一条 | 前景生产 | 1 kg 合格成套 DBMS 成品 |

### 过程：软件开发、发布和有条件实物包装（`software_production_release`）

#### 输入

##### 产品流

###### 软件生产和发布用电（`electricity_software_production`）

记录出版方控制的开发、构建、测试、扫描、发布和直接包装活动所购入的电力。仅在选择内部刻录路线时，才把单独识别的前景载体刻录用电加入本交换；外购已刻录载体的刻录属于上游过程，不得计入前景。分配范围应包括为所纳入活动预留或配置的硬件。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：汇总前景边界内通过计量或遥测获得的 kWh，仅在内部刻录路线中计入单独识别的载体刻录 kWh，采用因果活动记录把共用电力分配到声明的发布版本，将分配结果换算为 MJ，再除以合格产出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成套 DBMS 成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_records`
- 来源：`green-software-foundation-sci-1-1-0`

###### 分配的机架式服务器计算机（`rack_server_computer`）

仅当机架式服务器计算机被预留用于前景边界内的开发、构建、测试、扫描或发布工作时才记录。其 Tiangong 流 UUID 尚未解决。

- 选定流：机架式服务器计算机
- 流属性/单位：Mass / kg
- 数量规则：根据采集的硬件质量、预留时间、预计寿命、预留资源和总资源计算已安装质量的分配量，再按合格产出质量归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成套 DBMS 成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hardware_allocation_records`
- 来源：`green-software-foundation-sci-1-1-0`

###### 分配的台式工作站计算机（`desktop_workstation_computer`）

仅当前景开发、测试或发布工作预留完整的台式工作站计算机时才记录。其 Tiangong 流 UUID 尚未解决。

- 选定流：台式工作站计算机
- 流属性/单位：Mass / kg
- 数量规则：根据采集的工作站质量、预留时间、预计寿命、预留资源和总资源计算已安装质量的分配量，再按合格产出质量归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成套 DBMS 成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hardware_allocation_records`
- 来源：`green-software-foundation-sci-1-1-0`

###### 已刻录光盘（`recorded_optical_disc`）

仅当合格发行单元实际包含成品已刻录光学载体且选择外购已刻录路线时才记录。其采购仅包含一次上游刻录；不得同时计入前景载体刻录或空白光学介质。其 Tiangong 流 UUID 尚未解决。

- 选定流：已刻录光盘
- 流属性/单位：Mass / kg
- 数量规则：以该批次领用的已刻录光盘质量减去真正未使用且退回可用库存的光盘质量，再除以合格产出质量；计入已消耗后被拒收的光盘，并单独记录其废物流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格成套 DBMS 成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical_package_bom`

###### 空白光学介质（`blank_optical_media`）

仅当产品实际包含光学载体且选择内部刻录路线时，才记录未刻录的空白光学介质。前景中应计入刻录用电，把其他每种实际刻录耗材分别记录为具体产品流，并把每种实际刻录废物分别记录为原子型输出废物交换。不得同时记录外购已刻录载体成品。

- 选定流：未记录的光学介质 `714535e8-24d4-44bf-8496-4837f638fdd4`
- 流属性/单位：Mass / kg
- 数量规则：以刻录批次领用的空白光学介质质量减去真正未使用且退回可用库存的介质质量，再除以合格产出质量；计入已消耗后被拒收的介质，并单独记录其废物流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格成套 DBMS 成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical_package_bom`

###### 纸盒（`paper_box`）

仅当合格发行单元实际包含直接零售纸盒时才记录。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：以该批次领用的纸盒质量减去真正未使用且退回可用库存的纸盒质量，再除以合格产出质量；计入已消耗后被拒收的纸盒，并单独记录其废物流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格成套 DBMS 成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical_package_bom`

###### 印刷纸质说明书内页（`paper_insert`）

仅当合格发行单元实际包含印刷说明或许可内页时才记录。

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：Mass / kg
- 数量规则：以该批次领用的印刷纸质说明书内页质量减去真正未使用且退回可用库存的内页质量，再除以合格产出质量；计入已消耗后被拒收的内页，并单独记录其废物流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格成套 DBMS 成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical_package_bom`

###### 聚丙烯光盘盒（`polypropylene_disc_case`）

仅当合格发行单元实际包含成品聚丙烯光盘盒时才记录。其 Tiangong 流 UUID 尚未解决。

- 选定流：聚丙烯光盘盒
- 流属性/单位：Mass / kg
- 数量规则：以该批次领用的聚丙烯光盘盒质量减去真正未使用且退回可用库存的盒质量，再除以合格产出质量；计入已消耗后被拒收的盒，并单独记录其废物流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格成套 DBMS 成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_physical_package_bom`

##### 废物流

没有强制规定的废物输入。任何进入前景过程的外部处理废物，均应作为单独且具体的废物流记录。

##### 基本流

不规定直接基本流输入。上游资源开采属于链接的上游数据集。

#### 输出

##### 产品流

###### 合格的成套数据库管理软件成品（`packaged_dbms_output`）

这是通过发布验收并完成有条件实物包装装配后的参考产品。

- 选定流：成套数据库管理软件 `3761b338-237c-4781-81f2-ecd23ed93283`
- 流属性/单位：Mass / kg
- 数量规则：根据计量的合格产出毛质量归一化后恰好为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-47813-detail`

##### 废物流

不规定通用废物输出。凡发生拒收、裁切、损坏或准备废料，均应按实际材料和废物状态分别记录为独立的原子型输出废物交换，并注明质量、去向、处理路线和来源批次。不得把不合格已刻录光盘、不合格空白光学介质、纸盒、纸质说明书内页、聚丙烯盒或电子废物合并为一行。只有批次记录能够证明相应废物未发生时，才允许记录有证据的零值。

##### 基本流

不规定直接基本流输出。电力和上游材料相关排放应保留在相应上游数据集中，不得重复作为前景排放记录。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 单独计量的发布活动 | 应尽可能分别记录发布版本特定的构建任务、测试运行、扫描任务、载体刻录批次、包装批次和合格产出，从而避免分配。 | green-software-foundation-sci-1-1-0 |
| `allocation_rule_2` | 共用电力 | 采用同一期间计量的因果活动驱动因素分配共用的电表或遥测电力，例如任务运行时间乘以预留计算资源。披露驱动因素；有因果数据时不得采用收入分配。 | green-software-foundation-sci-1-1-0 |
| `allocation_rule_3` | 共用计算机硬件 | 按时间份额乘以资源份额分配已安装的机架式服务器和工作站质量：分配质量 = 已安装质量 × 预留时间 / 预计寿命 × 预留资源 / 总资源。汇总各组件时采用相同的组件边界和参考流。 | green-software-foundation-sci-1-1-0 |
| `allocation_rule_4` | 不合格包装和产品 | 将实测的不合格载体和包装材料归属到产生这些材料的生产批次。被拒收物品仍属于已消耗的产品投入，不得从该投入中扣除。每种实际材料废物均应作为独立的原子型输出交换记录；若未记录该交换及所选报废分配约定，不得扣除可回收废物。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_electricity_records` | `software_production_release` | electricity_software_production | 与发布活动及所选载体路线关联的电表或遥测记录 | meter_id, component_id, activity_id, activity_type, carrier_route, release_id, start_time, end_time, electricity_kwh, reserved_resource_quantity, accepted_output_kg | 导出设施电表、云端或设备遥测和构建流水线日志；协调时区、消除重复区间，并分别标记载体刻录区间 | kWh 和 kg | 按任务或可获得的最细时间间隔记录，再按发布版本和活动类型汇总 | 声明的全部开发、构建、测试、扫描、发布和包装期间，以及仅适用于内部刻录路线的载体刻录期间 | 纳入该发布版本的全部出版方控制或外包前景场址 | 汇总不重叠的 kWh，仅在内部刻录路线中计入已标记的载体刻录 kWh，采用声明的因果驱动因素分配共用区间，换算为 MJ，再除以合格产出 kg | 电表校准或供应商声明、原始导出文件、流水线日志链接、载体路线记录、区间协调记录、分配工作表 |
| `cp_hardware_allocation_records` | `software_production_release` | rack_server_computer; desktop_workstation_computer | 硬件资产和预留记录 | asset_id, hardware_type, installed_mass_kg, installation_date, expected_retirement_date, release_id, time_reserved, resources_reserved, total_resources | 协调资产台账、供应商质量规格、调度器预留日志和发布记录 | kg、小时和一致的资源单位 | 每次资产变更和预留区间记录，再按发布版本汇总 | 声明发布版本涉及的全部预留区间和完整已安装寿命估计 | 对声明发布版本有显著预留份额的每一项前景计算资产 | 逐项计算时间份额和资源份额，乘以已安装质量，按硬件类型汇总，再除以合格产出 kg | 资产台账导出、供应商规格、调度器日志、预计寿命依据、分配工作表 |
| `cp_physical_package_bom` | `software_production_release` | recorded_optical_disc; blank_optical_media; paper_box; paper_insert; polypropylene_disc_case | 载体路线声明、物料清单、收货、库存、批次领料、废物和合格产出质量记录 | carrier_route, component_id, material_description, supplier, batch_id, received_mass_kg, opening_stock_mass_kg, issued_mass_kg, unused_returned_mass_kg, retained_in_accepted_output_mass_kg, outgoing_waste_flow_id, outgoing_waste_mass_kg, closing_stock_mass_kg, accepted_output_kg | 先确认外购已刻录路线与内部刻录路线相互排斥，再将采购和收货记录与库存变动、批次秤记录、独立原子型废物记录及批准的包装物料清单相协调 | kg | 每个载体刻录或包装批次 | 为声明发布版本和报告期供货的全部批次 | 所有前景或外包实物包装装配场址 | 已消耗投入质量 = 领用质量减去真正未使用且退回可用库存的质量；不得扣除不合格质量。已消耗投入除以合格产出 kg。协调式为：跨越边界的净投入 = 合格产出中保留的质量 + 单独记录的输出废物质量 + 期末库存 − 期初库存。 | 载体路线批准记录、经校准的秤记录、批准的物料清单、供应商规格、库存台账、批次协调记录和分别识别的废物记录 |
| `cp_output_mass_acceptance` | `software_production_release` | packaged_dbms_output | 发布验收和成品质量记录 | release_id, version, edition, platform, licence_scope, acceptance_test_id, delivery_configuration, unit_count, gross_mass_kg, rejected_mass_kg, gate, acceptance_date | 将签署的发布验收与合格发行单元的经校准毛质量测量相关联 | kg | 每个合格发布版本和包装批次 | 完整声明报告期 | 生产合格参考产品的全部场址 | 仅汇总合格毛质量；作为归一化到 1 kg 的分母 | 签署的验收记录、测试报告、秤校准、批次标识符、包装物料清单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | electricity_software_production | 每 kg 的分配电力 MJ = 分配电力 kWh 之和 × 3.6 / 合格产出 kg | 不重叠的 kWh 区间、因果分配驱动因素、合格产出 kg | 每 kg 参考产品的电力 MJ | green-software-foundation-sci-1-1-0 |
| `calc_hardware_mass` | rack_server_computer; desktop_workstation_computer | 每 kg 产出的分配硬件 kg = 已安装质量 kg × 预留时间 / 预计寿命 × 预留资源 / 总资源的逐项总和 / 合格产出 kg | 已安装质量、预留时间、预计寿命、预留资源、总资源、合格产出 kg | 每 kg 参考产品的分配硬件 kg | green-software-foundation-sci-1-1-0 |
| `calc_package_component_mass` | recorded_optical_disc; blank_optical_media; paper_box; paper_insert; polypropylene_disc_case | 每 kg 产出的已消耗组件 kg = 领用质量减去真正未使用且退回可用库存的质量，再除以合格产出 kg；不合格材料仍计入已消耗投入，并另行记录为独立输出废物交换 | 所选载体路线、领用质量、未使用退回质量、合格产出中保留的质量、各独立输出废物质量、期初和期末库存及合格产出质量 | 每 kg 参考产品的已消耗组件 kg 及经协调的物料平衡 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留准确的 DBMS 版本、版本档次、支持平台、许可范围、数据库功能、工作负载验收准则、交付配置和生产关口。 | 发布清单、签署的验收测试、许可规格、产品说明 |
| `dq_temporal` | 电力、硬件和产出记录 | 采用覆盖完整声明发布生产期间的活动和资产记录；保留可获得的最细时间粒度，并把年度数据标识为最低粒度的替代数据。 | 原始遥测、电表导出、资产台账、报告期协调记录 |
| `dq_completeness` | 前景边界 | 协调声明软件边界内所有重要的构建、测试、扫描、发布、刻录和包装组件；说明排除的场址、组件和数据缺口。 | 边界清单、流水线清单、包装物料清单、完整性协调记录 |
| `dq_measurement` | 质量和电力 | 采用经校准的质量测量或供应商规格，以及可追溯的电表或供应商记录；保留换算和分配工作表。 | 校准记录、供应商规格、供应商声明、计算工作簿 |
| `dq_conditional_route` | 实物载体和包装各行 | 对每项有条件组件，记录其在声明交付配置中的实测用量或有证据的缺失状态。 | 批准的物料清单、产品照片或配置记录、批次领料记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份 | 若参考产品不是合格的 CPC 47813 DBMS 成品流、以发布候选中间产物替代，或缺失必需的版本、平台、许可、功能、工作负载、交付、地域、时间或关口限定信息，则校验失败。 | un-cpc-3-0-47813-detail |
| `validation_rule_2` | 清单完整性 | 要求恰好一行参考产出，并要求每项投入都是一个具体的电力、硬件、载体或包装交换。拒绝笼统的公用工程、硬件、包装、废物或排放行。 |  |
| `validation_rule_3` | 电力 | 确认电力区间覆盖声明的前景期间，纳入预留或配置的硬件，消除重复区间，披露分配驱动因素，并正确完成 kWh 到 MJ 的换算。 | green-software-foundation-sci-1-1-0 |
| `validation_rule_4` | 硬件分配 | 确认预计寿命和总资源为正数，预留时间和资源为非负数；除非明确说明理由，时间份额和资源份额不得大于一；对每项资产采用声明的分配公式。 | green-software-foundation-sci-1-1-0 |
| `validation_rule_5` | 实物包装配置 | 对每项载体和包装行要求实测数量或有证据的缺失状态；不得根据零值或空白记录推断组件不存在。包含光学载体时必须且只能选择一条路线：外购已刻录载体且前景不含刻录，或空白光学介质并计入前景刻录用电、每种实际附加耗材和每种实际刻录废物。 |  |
| `validation_rule_6` | 归一化和来源 | 确认全部数量采用同一合格产出分母，参考产出恰好为 1 kg，来源 id 可解析，未解决 UUID 保持空缺，且未引入无支持的经验范围。 |  |
| `validation_rule_7` | 包装材料平衡 | 对每种载体和包装材料，确认投入消耗量包含不合格材料，每种实际废物均作为独立原子型输出交换记录，并确认净投入等于合格产出中保留的质量加输出废物再加期末库存减期初库存。若通过从产品投入中扣除不合格材料使其消失，则校验失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成套数据库管理软件成品的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 需要以声明的出版方或包装关口为边界、按质量计量的成套 DBMS 生产投入的产品碳足迹和 LCA 模型；只有功能、发布版本、许可、工作负载、交付配置、地域、时间、边界和数据质量相当时才允许比较 |
| excluded_use | 纯下载或在线软件；不包含成套产品的许可服务；定制软件开发；关口后运行或维护；其他软件子类；功能能力不同而仅按产品质量进行的比较 |
| required_metadata | 规范 PCR id；产品 UUID；版本和版本档次；支持平台；许可范围；数据库功能和工作负载；支持期；载体和包装配置；合格产出质量；生产路线；场址；地域；报告期；边界；分配方法；来源 id |
| required_quality_disclosure | 电表和遥测覆盖；硬件资产和分配覆盖；包装物料清单协调；产出质量和验收证据；时间粒度；供应商数据质量；排除项；未解决 UUID；缺失的范围证据；不确定性和数据缺口 |
| update_trigger | 新发布版本或版本档次；重大架构或构建流水线变更；硬件分配改变；实物载体或包装改变；场址或电网改变；许可或工作负载改变；UUID 身份改进；新的独立范围证据；来源或方法修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《产品总分类 3.0 版结构》，结构日期 2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 47813 的正式英文名称及其在成套系统软件中的层级 |
| `un-cpc-3-0-47813-detail` | official_guidance | 联合国统计司，CPC 3.0 代码 47813 分类详情，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47813，检索日期 2026-09-11 | 产品身份、数据库管理功能和类别区分 |
| `green-software-foundation-sci-1-1-0` | standard | Green Software Foundation，Software Carbon Intensity Specification，1.1.0 版，https://sci.greensoftware.foundation/，检索日期 2026-09-11 | 软件边界披露、功能单位一致性、电力计量、基础设施纳入、硬件时间份额和资源份额分配及数据粒度 |
| `cifa-lca-database-guideline-appendix` | official_guidance | 碳足迹产业技术创新联盟，《LCA/碳足迹数据库构建导则——第六章附录》，https://www.carbonfootprint.network/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix，检索日期 2026-09-11 | CPC 47813 的专业中文分类名称 |
