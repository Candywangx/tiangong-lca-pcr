---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.point-of-sale-terminals-atms-and-similar-machines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 销售终端、自动取款机和类似机器

## 1. 范围与适用性

本 PCR 适用于联网销售终端（POS 终端）、自动取款机（ATM）以及具有相同计算和交易处理功能的类似成品机器的工厂门前景数据包。范围包括申报工厂实施的最终硬件装配、软件/固件配置、功能与安全测试以及包装。外购组件和材料以产品流进入，并连接上游数据集。

边界包括 POS 终端、可联网收银机、ATM 及类似成品机器；不包括不可联网收银机、出票机、邮资盖印机、赛马场赌金计算机、独立磁卡验证/控制系统以及散装零部件和附件。除非组件制造在申报场址内实施，否则其制造属于上游。安装、交易网络基础设施、现金物流、使用阶段电力、维护和报废处理不属于默认工厂门边界，若纳入须作为单独扩展情景申报。CPC 3.0 正式结构确定子类名称；CPC 2.1 对同一子类身份的解释性说明用于审查纳入与排除范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.point-of-sale-terminals-atms-and-similar-machines |
| classification_refs | CPC 3.0：45142，Point-of-sale terminals, ATMs and similar machines（`exact`） |
| covered_products | 联网 POS 终端；可联网收银机；自动取款机；具有同等计算与交易处理功能的成品机器 |
| excluded_products | 不可联网收银机；出票机；邮资盖印机；赛马场赌金计算机；独立磁卡验证/控制系统；散装零部件和附件 |
| representative_product | 申报工厂门处完成配置、功能测试且按申报状态包装的 POS 终端或 ATM 成品 |
| production_route | 外购电子、显示、电源、外壳和包装组件的装配；配置；功能/安全测试；包装 |
| market_state | 工厂门处的新制成品设备；产品按包装状态销售时包括包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具备所申报 POS、现金存取和/或类似交易处理功能的成品机器 |
| How much | 工厂门处 1 kg 成品参考产品 |
| How well | 符合所申报型号配置，并通过制造商放行、功能和安全测试 |
| How long or cycle | 一个申报生产期；使用寿命与使用阶段负载周期须单独申报，不属于本工厂门功能单位 |
| reference_flow_link | 归一化输出行 `finished_terminal_output` 提供参考产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 销售终端、自动取款机和类似机器 `2c387020-8faf-4bc5-bdc3-a3111560c91b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品系列（POS 终端、可联网收银机、ATM 或类似机器）；型号与硬件配置；单机质量；显示器类型；外壳材料；电源类型；是否集成打印机、读卡器、键盘、现金分配器和保险柜；软件/固件版本；测试覆盖；是否包括包装；生产地域；申报期；工厂门边界 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | 参考产品及所有质量归一化行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按包装状态申报一致地确定成品净质量。以已放行产品质量归一化批次总量；没有实测型号特定的件数-质量换算时不得直接使用件数。 |
| `mu_electricity_conversion` | 装配与测试用电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始能量记录，并按 1 kWh = 3.6 MJ 换算；不得把电力作为质量流。 |
| `mu_scrap_mass` | 生产废物输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 必要时记录湿态/污染状态，并分别记录钢、ABS 塑料、装配印制线路板和纸板废物；仅扣除有文件证明且从未成为废物的退货。 |

## 5. 系统边界

默认边界是成品机器从摇篮到工厂门：外购组件、包装和能源跨入申报工厂时开始前景过程，合格成品和分类废物离开时结束。外购组件的上游生产必须连接适宜的上游数据集。安装、使用、维护和报废阶段默认排除，除非以单独标识的扩展情景申报。法规来源用于符合性和情景规则，不作为经验数量范围。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | default_system_boundary | 纳入申报工厂的最终装配、配置、功能/安全测试和包装；每个外购组件、材料与电力流均须连接上游数据集。 |  |
| `sb_product_scope` | product_identity | 本 PCR 仅适用于审查后纳入和排除范围内的 CPC 45142 产品；不得用于被排除的办公机器或散装零部件。 | `un-cpc-3-0-structure-2025`; `un-cpc-2-1-2013` |
| `sb_rohs_disclosure` | regulated_hazardous_substances | 所申报市场受 2011/65/EU 指令约束时，保留均质材料层级的供应商声明或测试证据并披露适用豁免；这是符合性披露，不是清单范围。 | `eu-rohs-2011-65` |
| `sb_downstream_extension` | optional_use_and_end_of_life | 使用阶段电力、维护、收集和处理仅在单独扩展情景中申报。适用 2012/19/EU 指令时，明确区分单独收集以及处理/再使用/再循环路线，不得与工厂生产废物合并。 | `eu-weee-2012-19` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 带有供应商身份及质量/能量记录、已交付申报工厂的外购组件、包装和能源 |
| starting_condition_role | 最终设备装配的前景入口；上游组件制造由相连接的上游数据集表示 |
| product_classification_scope | 仅限 CPC 45142 成品机器；零部件、附件及被排除的办公机器不属于参考产品身份 |
| recursive_input_rule | 同类别成品机器作为投入时，须作为具有独立上游数据集的再使用/再制造投入记录；不得在同一过程中递归应用本 PCR |
| upstream_dataset_requirement | 针对外购 PCB 组件、显示模组、电源、外壳、包装和电力使用与技术、地域和产品状态相适配的数据集；披露代理数据 |
| disclosure | 申报产品配置、单机质量、包装状态、工厂操作、被排除的现场操作、上游代理、受监管市场假设及任何可选下游扩展 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `terminal_final_assembly` | 最终装配、配置、功能测试和包装 | `required` | 始终纳入；经核实 BOM 中不存在的产品特定组件标记为不适用，不得用其他材料替代 | 成品参考产品的前景生产 | 工厂门处 1 kg 已放行终端成品 |

### 过程：最终装配、配置、功能测试和包装（`terminal_final_assembly`）

#### 输入

##### 产品流

###### 装配印制电路板组件（`populated_pcb_assembly_input`）

根据 BOM 和收货记录，记录安装在成品中的装配印制电路板组件质量。审核候选项未确认一个准确的装配组件身份，故 UUID 留空。

- 选定流：装配印制电路板组件
- 流属性/单位：Mass / kg
- 数量规则：实测净安装质量加有文件证明的装配损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_packaging_mass`
- 来源：

###### 液晶显示模组（`lcd_display_module_input`）

对含 LCD 模组的产品记录每个已安装模组的质量；仅在经核实型号 BOM 不含 LCD 模组时标记为不适用。

- 选定流：液晶显示模组 `264605c6-41b8-4baa-82b0-e27e815063a0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净安装质量加有文件证明的装配损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_packaging_mass`
- 来源：

###### 交直流电源单元（`ac_dc_power_supply_input`）

记录内置或随附交直流电源单元的质量。因没有审核候选项准确表示一个完整电源单元，UUID 留空。

- 选定流：交直流电源单元
- 流属性/单位：Mass / kg
- 数量规则：实测净安装或随附质量加有文件证明的装配损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_packaging_mass`
- 来源：

###### 涂装钢制终端外壳（`painted_steel_enclosure_input`）

记录所申报型号安装的涂装钢制外壳或保险柜柜体质量；仅在经核实 BOM 不含钢制外壳时标记为不适用。

- 选定流：涂装钢制终端外壳
- 流属性/单位：Mass / kg
- 数量规则：实测净安装质量加有文件证明的制造或装配损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_packaging_mass`
- 来源：

###### 注塑 ABS 终端外壳（`moulded_abs_enclosure_input`）

记录所申报型号安装的注塑 ABS 外壳质量。除非注塑确实位于前景边界内，不得以 ABS 粒料替代该流。

- 选定流：注塑 ABS 终端外壳
- 流属性/单位：Mass / kg
- 数量规则：实测净安装质量加有文件证明的装配损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_packaging_mass`
- 来源：

###### 装配与测试用电（`assembly_test_electricity_input`）

记录用于装配、配置、功能/安全测试和包装的外购电力；共用电表须采用有依据的分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：归属于申报期的计量电力，换算为 MJ 后按已放行产品质量归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_metering`
- 来源：

###### 瓦楞纸箱（`corrugated_board_box_input`）

对工厂门参考状态包括包装的产品记录消耗的瓦楞纸箱；明确不包括包装时标记为不适用。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放至合格产品的实测纸箱质量，扣除有文件证明的未使用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_packaging_mass`
- 来源：

###### 发泡聚乙烯包装衬垫（`expanded_pe_foam_insert_input`）

记录用于保护成品的发泡聚乙烯衬垫质量。审核候选项未同时确认聚乙烯化学组成与成型衬垫状态，故 UUID 留空。

- 选定流：发泡聚乙烯包装衬垫
- 流属性/单位：Mass / kg
- 数量规则：发放至合格产品的实测衬垫质量，扣除有文件证明的未使用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_packaging_mass`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行终端成品（`finished_terminal_output`）

仅记录在工厂门放行的合格成品，使用准确的 Tiangong 公开状态 100 参考产品流。

- 选定流：销售终端、自动取款机和类似机器 `2c387020-8faf-4bc5-bdc3-a3111560c91b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测放行产品质量，归一化为准确的 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_output_mass`
- 来源：

##### 废物流

###### 废弃装配印制线路板（`populated_pcb_waste_output`）

记录在申报工厂成为废物的报废或损坏装配线路板；不包括从未进入废物管理的供应商退货。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量送往储存或处理的分类装配线路板废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_segregated_waste_mass`
- 来源：

###### 钢废料，边角料（`steel_offcut_scrap_output`）

记录外壳装配或现场制造产生的钢制边角料；现场不切割钢材且无装配损失时标记为不适用。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量作为废物离开过程的分类钢制边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_segregated_waste_mass`
- 来源：

###### 分类 ABS 塑料生产废料（`abs_plastic_scrap_output`）

将 ABS 外壳修边、装配或破损废料作为单一分类聚合物流记录。因未确认准确的 ABS 生产废料身份，UUID 留空。

- 选定流：分类 ABS 塑料生产废料
- 流属性/单位：Mass / kg
- 数量规则：称量作为废物离开过程的分类 ABS 废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_segregated_waste_mass`
- 来源：

###### 包装废弃物，纸板（`cardboard_packaging_waste_output`）

记录在申报工厂成为废物的损坏纸箱和纸板边角料；不包括随合格产品发运的纸箱。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量离开过程的纸板包装废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行终端成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_segregated_waste_mass`
- 来源：

##### 基本流

本装配过程不规定直接基本流。仅当具有核实身份和计量记录时，才能把场址直接排放作为按化学物质分别列示的行加入；上游排放保留在上游数据集中。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | shared_assembly_and_test_operations | 记录允许时，首先按生产线、型号、测试程序或申报期细分。 |  |
| `al_mass_energy_driver` | residual_shared_inputs_and_wastes | 组件和包装质量按 BOM/领料记录归属；电力按计量测试时间或其他有文件证明的因果能源驱动因素分配；分类废物按实测来源记录归属。仅在没有更具因果性的核实驱动因素时使用成品质量。 |  |
| `al_no_avoided_burden` | recyclable_production_waste | 在工厂门处报告废物，不计入避免负担抵扣。任何下游再循环替代属于单独申报情景，不得减少前景装配清单。 | `eu-weee-2012-19` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_packaging_mass` | `terminal_final_assembly` | 已安装组件及随产品发运的包装 | BOM、领料、收货及校准秤记录 | 型号；组件标识；发放数量；退回数量；实测单件质量；报废质量；是否包括包装 | 将已放行型号 BOM 与仓库发放/退回记录及型号特定称量核对 | kg | 每个型号/修订版及每个申报期 | 完整申报期 | 申报场址全部装配和包装线 | 汇总归属于放行产品的净发放质量；有文件证明的现场损失仅加计一次 | 经批准 BOM 修订版、领退料核对、秤校准、差异调查 |
| `cp_electricity_metering` | `terminal_final_assembly` | 装配与测试用电 | 电表及设备运行记录 | 电表起止读数；倍率；生产线/测试工位；运行时间；型号；放行质量；分配驱动因素 | 优先读取专用电表；否则核对共用电表与有文件证明的因果分配驱动因素 | kWh 和 MJ | 至少每月一次，并在型号/测试程序变更时采集 | 完整申报期 | 所有纳入的装配、配置、测试和包装设备 | kWh 换算 MJ，扣除有文件证明的排除负载，分配其余共用电量，再除以放行质量 | 电表标识与校准、账单核对、负载边界图、分配记录 |
| `cp_product_output_mass` | `terminal_final_assembly` | 已放行成品 | 放行记录和校准秤记录 | 型号；序列号/批次；放行数量；未包装质量；包装后质量；包装申报 | 将放行记录与型号特定实测质量及报废记录核对 | kg | 每个型号/修订版及每个申报期 | 完整申报期 | 所有纳入生产线 | 仅按所申报包装状态汇总合格放行质量 | 放行授权、秤校准、包装前后质量核对 |
| `cp_segregated_waste_mass` | `terminal_final_assembly` | PCB、钢、ABS 和纸板废物 | 废物容器称量单和转移联单 | 废物身份；容器皮重/毛重；污染；日期；来源生产线；去向；供应商退货标记 | 称量每个分类流，并核对场内储存量变化和外运联单 | kg | 每次转移；按月汇总 | 包含期初和期末库存的完整申报期 | 所有纳入生产和废物储存区域 | 净产生废物 = 外运量 + 期末库存 - 期初库存；排除有文件证明的非废物供应商退货 | 秤校准、照片/标签、联单、库存核对、污染说明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | mass inventory rows | 归一化 kg/kg = 归属行质量（kg）/ 已放行成品质量（kg） | 已核对行质量；已放行成品质量 | 每 kg 参考产品的 kg 数 |  |
| `calc_electricity_normalization` | `assembly_test_electricity_input` | 归一化 MJ/kg = 归属计量 kWh × 3.6 / 已放行成品质量（kg） | 计量 kWh；排除负载；分配驱动因素；放行质量 | 每 kg 参考产品的 MJ 数 |  |
| `calc_waste_stock_balance` | waste outputs | 产生废物 = 外运转移质量 + 期末场内库存 - 期初场内库存，排除有文件证明的供应商退货 | 称量单；联单；库存记录；退货记录 | 归一化前申报期废物 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and component identity | 将产品型号、硬件/固件修订版、组件身份和包装状态关联至经批准 BOM 与放行记录；披露每个 UUID 留空流及代理数据集。 | BOM 修订版、配置记录、放行授权、供应商规格 |
| `dq_temporal` | all foreground rows | 覆盖一个有代表性的连续申报期，并披露停机、返工活动、新型号爬坡和缺失时段。 | 带日期的电表、仓库、生产和废物记录 |
| `dq_completeness` | mass and energy balance | 核对组件发放、产品放行、报废、供应商退货和分类废物；解释材料差异和被排除的共用负载。 | 签署的核对表和差异日志 |
| `dq_measurement` | scales and electricity meters | 使用已标识且经校准的仪器，并保存原始读数、倍率、换算和分配计算。 | 校准证书、原始导出文件和计算工作簿 |
| `dq_regulatory` | regulated market declarations | 适用时保留均质材料物质声明/豁免，并单独记录下游扩展采用的 WEEE 收集/处理假设。 | 供应商声明或测试证据；适用合规记录；情景文件 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | reference_product | 确认 `finished_terminal_output` 使用准确参考 UUID、Mass 属性和 kg 单位，归一化后等于 1 kg。 |  |
| `val_scope_identity` | product_scope | 被排除的办公机器、散装组件或不可联网收银机的数据包不予接受；核实所申报 POS/ATM/类似机器功能及联网能力。 | `un-cpc-3-0-structure-2025`; `un-cpc-2-1-2013` |
| `val_inventory_atomicity` | process_inventory | 确认每行是一个原子交换；缺失的产品特定组件标记为不适用，不得以集合流替代。 |  |
| `val_reconciliation` | foreground_records | 重新计算质量和电力归一化，核查放行产品分母，核对废物库存与退货，并标记无法解释的负数或重复数量。 |  |
| `val_boundary_disclosure` | system_boundary | 确认工厂门边界、包装状态、纳入的现场操作、上游数据集链接、被排除的使用/报废阶段及任何监管扩展情景均已明确。 | `eu-rohs-2011-65`; `eu-weee-2012-19` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；在代表性和上游链接审查后可作为 `background_dataset` |
| downstream_use | 用于所申报 POS 终端、ATM 或类似机器配置的产品足迹和生命周期模型前景/背景模块 |
| allowed_use | 产品配置、质量、地域、申报期、包装状态和前景边界相容时的工厂门比较或建模 |
| excluded_use | 直接替代被排除的 CPC 产品；在没有单独情景时提出使用或报废阶段主张；未进行功能调整即比较不同 POS/ATM 配置 |
| required_metadata | PCR id 与版本；产品/型号配置；参考 UUID；单机质量；包装状态；生产场址/地域；申报期；纳入操作；上游数据集身份；分配；未解决 UUID；监管市场假设 |
| required_quality_disclosure | 数据覆盖与缺口；电表/秤校准；BOM 与质量核对；共用能源分配；废物库存平衡；上游代理使用；组件与包装不适用决定 |
| update_trigger | 硬件、外壳、显示器、电源、包装、软件/测试程序、生产场址、能源供应、分配驱动因素或监管范围发生足以实质改变清单的变化 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-07） | CPC 45142 正式名称与分类身份 |
| `un-cpc-2-1-2013` | `official_guidance` | 联合国统计司，Central Product Classification Version 2.1，https://unstats.un.org/unsd/statcom/doc13/BG-CPC-Version21.pdf（检索日期：2026-09-07） | 子类 45142 原文解释性纳入与排除范围 |
| `eu-rohs-2011-65` | `standard` | 关于限制在电气电子设备中使用某些有害物质的 2011/65/EU 指令，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32011L0065（检索日期：2026-09-07） | 条件性均质材料合规证据与披露规则；不作为经验范围 |
| `eu-weee-2012-19` | `standard` | 关于废弃电气电子设备的 2012/19/EU 指令，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012L0019（检索日期：2026-09-07） | 条件性单独收集及处理/再使用/再循环情景规则；不作为经验范围 |
