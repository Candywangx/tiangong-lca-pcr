---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ignition-wiring-sets-and-other-wiring-sets-of-a-kind-used-in-vehicles-aircraft-or-ships
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 用于车辆、航空器或船舶的点火线束及其他线束

## 1. 范围与适用性

本 PCR 适用于为安装在车辆、航空器或船舶中而制造的完整电气接线装置或线束总成的前景生产。所覆盖产品是按声明设计完成装配和布线的绝缘导体集合，并包括设计要求的端接件、连接器壳体、密封件、接头、屏蔽件、防护覆盖物、标识件和固定件。线束可承载低压、高压、信号、数据、点火、控制或混合电路。

本 PCR 对道路车辆（包括纯电动和混合动力车辆）、航空器和船舶等应用保持中立。具体数据包可代表产品族或特定设计，但必须声明应用族及设计限定信息。本 PCR 不把单根电缆、电线、端子、连接器、套管或已准备的部件套件视为成品参考产品。本 PCR 也排除建筑、固定式机械、家用电器和电信设备用布线组件，除非其作为为所覆盖车辆、航空器或船舶安装而制造的成套产品供应。

前景门到门边界从线束制造场址接收外购电线、电缆、端子、连接器、密封件、防护材料、标签和其他部件开始。边界包括场内备料、端接、适用时的接续、线束成型、防护装配、标识、检验、电气测试、返工和包装。外购投入品的上游生产用关联的上游数据集表示；线束在车辆、航空器或船舶中的安装、运行、维护以及车辆、航空器、船舶或已安装线束的寿命终止均不属于此前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ignition-wiring-sets-and-other-wiring-sets-of-a-kind-used-in-vehicles-aircraft-or-ships |
| classification_refs | CPC 3.0：46330（精确分类语境；mapping 接受另行治理） |
| covered_products | 为车辆、航空器或船舶制造的完整点火线束及其他完整电气接线装置或线束总成，包括作为成套总成供应的低压、高压、信号、数据、控制和混合电路线束 |
| excluded_products | 单根绝缘电线或电缆；单独的端子、连接器、密封件、护线套、套管、胶带、扎带或其他零件；已准备的部件套件和不完整子总成；建筑、家电、固定式机械或电信设备用布线组件；完整车辆、航空器或船舶 |
| representative_product | 在制造工厂门口供应、带有永久连接部件和防护元件并完成测试且符合应用要求的成品线束 |
| production_route | 外购部件准备；裁线和剥皮；适用时的压接、焊接、熔接或接续；连接器装配；线束成型和防护；标识；检验和电气测试；返工；包装 |
| market_state | 安装到车辆、航空器或船舶之前，在工厂门口交付的制成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为车辆、航空器或船舶制造的合格成品点火线束或其他线束 |
| How much | 1 kg 合格成品线束净质量 |
| How well | 按声明的物料清单和图纸完整制造，并通过适用的检验和电气验收测试 |
| How long or cycle | 一个生产批次或报告期的产出，归一化为工厂门口 1 kg 合格产品 |
| reference_flow_link | 参考数量是下述 Tiangong 产品流的合格产出质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 点火接线装置和其他用于车辆、航空器或船只的点火接线装置 `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 应用族（道路车辆、航空器或船舶）；线束功能和电路类型；声明电压等级；导体材料和线规或截面积范围；绝缘和护套系统；连接器和端接技术；屏蔽和防护覆盖配置；生产地域和场址；生产时期；适用图纸或物料清单版本；适用验收和测试规范；随附包装的处理方式 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格成品线束产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准设备测量合格产品净质量。包括导体、绝缘层、永久连接器、端子、密封件、护线套、屏蔽件、标签、胶带、套管、管材、扎带、夹具和其他永久附着件；排除可重复使用工装和单独报告的包装。 |
| `lot_normalization` | 全部前景投入和产出 | 材料行采用质量；公用工程采用计量属性 | 材料行采用 kg；公用工程在换算前保留记录单位 | 对分子和分母汇总同一生产批次或报告期的数据，再除以合格成品质量，将各行报告为每 1 kg 参考流。 |
| `component_no_double_count` | 外购成套件、子总成和单独部件 | Mass | kg | 若外购子总成作为一个投入记录，则不得再把其所含电线、端子、连接器或防护材料分别作为投入记录，除非该子总成数据集明确排除了这些内含部件。 |
| `mass_reconciliation` | 材料投入、合格产出、废料、拒收品、在制品和库存变化 | Mass | kg | 对同一期间的实测材料投入与合格产品、外运废料或废物、拒收产品、在制品变化和库存变化进行核对；任何残差必须说明，不得强制闭合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在线束制造场址接收的外购电线、电缆、触点、端子、连接器壳体、密封件、防护材料、标签、包装及任何外购子总成 |
| starting_condition_role | 前景制造系统的上游产品投入 |
| product_classification_scope | 为车辆、航空器或船舶制造的完整线束；仅部件产品及非交通运输应用不属于参考产品范围 |
| recursive_input_rule | 同一产品类别中的外购完整线束或子线束，作为产品投入记录一次，并关联上游数据集，同时声明其质量和作用。除非供应商作业处于报告组织的运营边界内，否则不得递归重建供应商前景。 |
| upstream_dataset_requirement | 构成成品线束的每一种材料或部件投入必须具有适用的上游数据集或已披露的数据缺口；对成分或技术上重要的投入优先采用供应商特定数据。 |
| disclosure | 声明场址、报告期、产品族或设计基础、运营控制下的生产阶段、外包阶段、供应商已装配与场址新增部件、包装处理、返工循环、废料去向，以及排除的下游安装或使用阶段。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_manufacturing` | 前景过程范围 | 纳入场内部件准备、适用时的端接和接续、连接器装配、线束成型和防护覆盖、标识、检验、电气测试、返工和包装。 | ipc-whma-a-620; nasa-std-8739-4a-change-4 |
| `boundary_upstream_linking` | 外购投入 | 外购材料和部件的生产处于前景门到门系统之外，但必须把每一种材料投入关联至上游数据集，或披露数据缺口。 | iso-14044-2006; eu-pef-method-2021 |
| `boundary_recursive_wiring_sets` | 外购同类线束或子线束 | 在线束跨越前景边界时记录一次；除非供应商作业属于声明的前景控制边界，否则不得将其展开为供应商作业。 | eu-pef-method-2021 |
| `boundary_downstream_exclusions` | 下游阶段 | 排除线束在车辆、航空器或船舶中的安装、使用阶段电损耗、维护、拆卸和寿命终止；若更广泛研究需加入这些阶段，应在本门到门数据集之外明确扩展。 | iso-14044-2006; eu-pef-method-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | 电线、电缆和端接准备 | required | 始终纳入；仅在记录无法分离时合并，并披露聚合方式 | 为线束成型准备导体、屏蔽层、端子、密封件和带连接器引线 | 转移到线束装配的已准备引线和子总成 |
| `harness_assembly` | 线束成型和防护装配 | required | 始终纳入 | 对线束进行布线、分支、固定、防护、标识并完成物理装配 | 转移到最终测试和整理的已装配线束 |
| `testing_finishing_packaging` | 检验、电气测试、返工和包装 | required | 始终纳入；具体测试和包装作业遵循声明的设计和验收规范 | 确认符合性并在工厂门口产出合格成品线束 | 1 kg 合格成品线束 |

### 过程：电线、电缆和端接准备（`component_preparation`）

#### 输入

##### 产品流

###### 绝缘电线和电缆（`insulated_wires_cables`）

记录为线束裁切或准备的全部外购绝缘导体、多芯电缆、屏蔽电缆和专用电缆。数量来自与报告期核对的收货、领用、退料和库存变化记录。

- 选定流：依据声明材料和电缆构造从 Tiangong 选择与应用相适配的绝缘电线和电缆投入流
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减去未使用退料质量，并按库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：`ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

###### 端子、连接器、密封件和端接材料（`termination_components`）

记录准备过程中加入的触点、端子、连接器壳体、密封件、护线套、接续器件、焊料及其他端接材料。采用物项数量及实测或供应商声明的单件质量。

- 选定流：产品特定的端子、连接器、密封和端接材料流；不强制采用单一通用部件流
- 流属性/单位：Mass / kg
- 数量规则：物项数量乘以经核验的单件质量，或在可获得时采用直接领用质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_materials`
- 来源：`ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

###### 外购带连接器引线和子总成（`purchased_subassemblies`）

仅当完整外购引线、分支件或子线束作为可识别产品跨越场址边界时记录。应用递归投入和避免重复计算规则。

- 选定流：与外购物项匹配的供应商特定已准备引线或子总成流
- 流属性/单位：Mass / kg
- 数量规则：报告期内实测的收货并消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`

###### 准备工序电力和公用工程（`preparation_energy`）

记录裁线、剥皮、压接、熔接、焊接、清洗和局部抽风使用的电力及其他计量公用工程。共享计量表采用有记录的机器工时或其他物理驱动因素进行分配。

- 选定流：适配场址和时期的电力及公用工程产品流
- 流属性/单位：计量公用工程属性 / 计量单位
- 数量规则：准备工序的分表计量用量，或共享计量表分配用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 内部转移的已准备引线和子总成（`prepared_leads_output`）

将转移到线束装配的已准备导体、端接引线和子总成实测质量记录为内部中间产出。

- 选定流：内部已准备引线和子总成流
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或用准备投入减去已记录准备废料后核算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位转移到线束装配的过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_output_waste`

##### 废物流

###### 电线、绝缘、端子和连接器准备废料（`preparation_scrap`）

在记录允许时，按材料和去向记录导体边角料、剥除的绝缘层、不合格压接件、损坏端子、连接器零件和收集的工艺残留物。

- 选定流：去向和材料特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物流实测废料质量；不得将废料收入冲减材料投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_output_waste`

##### 基本流

### 过程：线束成型和防护装配（`harness_assembly`）

#### 输入

##### 产品流

###### 内部接收的已准备引线和子总成（`prepared_leads_input`）

记录从部件准备转移的同一内部中间数量，不得再次加入上游负荷。

- 选定流：内部已准备引线和子总成流
- 流属性/单位：Mass / kg
- 数量规则：经核对后与对应内部产出相等的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`

###### 防护、固定、标识和整理材料（`protective_materials`）

记录在线束成型期间永久加入的胶带、套管、管材、编织物、屏蔽件、扎带、夹具、标签、护套、模塑或灌封材料及其他物项。

- 选定流：产品特定的防护、固定、标识和整理材料流
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，或物项数量乘以经核验的单件质量，再减去未使用退料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_materials`
- 来源：`ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

###### 线束装配电力和公用工程（`assembly_energy`）

记录布局板、缠胶带、编织、热缩、适用时的模塑或灌封、标识、通风和装配设备所用的电力及其他计量公用工程。

- 选定流：适配场址和时期的电力及公用工程产品流
- 流属性/单位：计量公用工程属性 / 计量单位
- 数量规则：线束装配的分表计量用量，或共享计量表分配用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移到最终测试的已装配线束（`assembled_harness_output`）

记录转移到最终检验、测试和包装过程，但尚未验收的已装配线束质量。

- 选定流：内部已装配线束流
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或用装配投入减去已记录装配废物后核算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位转移到最终测试的过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_output_waste`

##### 废物流

###### 装配修边、防护材料废物和不合格零件（`assembly_scrap`）

在记录允许时，按材料和去向记录胶带、套管、扎带、标签、模塑材料、不合格分支件和其他装配废物。

- 选定流：去向和材料特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物流实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_output_waste`

##### 基本流

### 过程：检验、电气测试、返工和包装（`testing_finishing_packaging`）

#### 输入

##### 产品流

###### 接收用于测试的已装配线束（`assembled_harness_input`）

记录进入最终检验和电气测试的内部已装配线束质量，并与上游内部转移相匹配。

- 选定流：内部已装配线束流
- 流属性/单位：Mass / kg
- 数量规则：经核对后与对应内部产出相等的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_finish_inputs`

###### 包装和最终整理材料（`packaging_finishing_materials`）

记录测试后加入的包装以及最终标签、盖帽、保护件或防护剂。包装与产品净质量分开报告，并说明其是否纳入交付数据集范围。

- 选定流：材料特定的包装和整理产品流
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，或物项数量乘以经核验的单件质量，再减去未使用退料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_finish_inputs`

###### 测试、返工和包装电力（`test_finish_energy`）

记录导通测试及设计要求的绝缘、耐压、功能或自动化测试，以及返工和包装设备使用的计量电力。

- 选定流：适配场址和时期的电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：测试、返工和包装的分表计量用量，或共享计量表分配用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_finish_energy`
- 来源：`ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品线束（`finished_wiring_set`）

只有通过适用检验和电气验收要求的完整线束方可记录为参考产品产出。

- 选定流：点火接线装置和其他用于车辆、航空器或船只的点火接线装置 `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格成品线束实测净质量；参考数量等于 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_output_tests`
- 来源：`ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

##### 废物流

###### 报废的不合格线束和测试损坏零件（`rejected_finished_waste`）

记录离开返工循环并作为废物处置的不合格单元或零件，在已知时按材料和处理去向分类。仍在返工的单元不得计为废物。

- 选定流：去向和材料特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：从返工循环转出的最终不合格品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品线束
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_output_tests`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共享场址作业和计量表 | 在可行时通过分别计量或细分准备、装配、测试、返工和包装作业避免分配。 | iso-14044-2006; eu-pef-method-2021 |
| `allocation_internal_rework` | 内部返工和回收在制品 | 将负荷和材料回流保留在同一前景系统内；对返回生产的物项不得建立共产品抵扣。 | eu-pef-method-2021 |
| `allocation_multiple_products` | 不同可销售产品之间无法避免的共享负荷 | 使用有记录的物理因果驱动因素，例如机器时间、处理质量或测试时间。若物理关系不能合理表示负荷成因，则使用有记录的经济关系，并披露方法、时期、价格和敏感性。 | iso-14044-2006; eu-pef-method-2021 |
| `allocation_scrap_and_residues` | 出售废料、可回收残余物和废物 | 将质量和去向作为单独产出报告。除非更广泛研究声明并一致应用回收或替代方法，否则不得从前景投入中扣除废料收入或避免负荷。 | iso-14044-2006; eu-pef-method-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_preparation` | 电线、电缆、端子、连接器、密封件和外购子总成 | 收货、领用、退料、BOM、单件质量和库存记录 | item_id; material_or_component_description; supplier; quantity_received; quantity_issued; quantity_returned; unit_mass; opening_stock; closing_stock; lot_id; product_family | 将 ERP 或仓库流转记录与经核验的 BOM 和单件质量记录核对 | kg and item | 每次收货和领用；按月汇总 | 代表性报告期或完整生产活动期 | 声明场址内全部准备生产线 | 按物项和产品族汇总消耗质量；除非子总成数据集排除内含部件，否则将外购子总成保留为单一行 | 采购记录；BOM 版本；经校准秤或供应商质量证据；库存核对 |
| `cp_component_energy` | `component_preparation` | 准备工序电力和公用工程 | 计量表、分表、设备运行时间和公用工程发票记录 | meter_id; reading_start; reading_end; utility_type; machine_runtime; allocation_driver; production_lot | 读取分表；仅使用有记录的物理驱动因素分配共享消耗 | metered utility unit | 每班次或计量间隔；按月汇总 | 与材料和合格产出记录相同期间 | 声明场址内全部准备设备 | 计量读数相减，并按机器时间或其他合理物理驱动因素分配共享用量 | 计量表身份；校准或发票；分配工作表 |
| `cp_component_output_waste` | `component_preparation` | 已准备引线转移和准备废料 | 转移称量、废料箱、不合格品和废物外运记录 | lot_id; output_mass; scrap_material; scrap_mass; destination; date | 称量内部转移和分类废料；与材料投入核对 | kg | 每次转移和废物外运；按月汇总 | 与部件投入相同期间 | 声明场址内全部准备生产线 | 按产品族、材料和去向汇总转移和废料 | 秤校准；转移单；废物联单；核对记录 |
| `cp_assembly_materials` | `harness_assembly` | 已准备引线及防护、固定、标识和整理材料 | 转移、领用、退料、BOM、计数和单件质量记录 | item_id; description; quantity_issued; quantity_returned; unit_mass; transfer_mass; lot_id; product_family | 将内部转移和仓库领用与经核验 BOM 和单件质量核对 | kg and item | 每次转移和领用；按月汇总 | 与合格产出记录相同期间 | 声明场址内全部线束装配线 | 按物项和产品族汇总消耗质量 | BOM 和图纸版本；秤或单件质量证据；库存核对 |
| `cp_assembly_energy` | `harness_assembly` | 装配电力和公用工程 | 计量表、设备运行时间和公用工程记录 | meter_id; reading_start; reading_end; utility_type; runtime; allocation_driver; production_lot | 读取分表；用有记录的物理驱动因素分配共享消耗 | metered utility unit | 每班次或计量间隔；按月汇总 | 与装配材料记录相同期间 | 声明场址内全部装配设备 | 计量读数相减，并按机器时间或其他合理物理驱动因素分配共享用量 | 计量表身份；校准或发票；分配工作表 |
| `cp_assembly_output_waste` | `harness_assembly` | 已装配线束转移和装配废物 | 转移称量、废料箱、不合格品和废物外运记录 | lot_id; output_mass; waste_material; waste_mass; destination; date | 称量内部转移和分类废物 | kg | 每次转移和废物外运；按月汇总 | 与装配投入相同期间 | 声明场址内全部装配线 | 按产品族、材料和去向汇总转移和废物 | 秤校准；转移单；废物联单；核对记录 |
| `cp_test_finish_inputs` | `testing_finishing_packaging` | 已装配线束、包装、标签、盖帽和整理投入 | 转移、领用、退料、BOM、计数和单件质量记录 | item_id; description; quantity_issued; quantity_returned; unit_mass; transfer_mass; lot_id; product_family | 将内部转移和领用材料与经核验 BOM 和单件质量核对 | kg and item | 每次转移和领用；按月汇总 | 与合格产出记录相同期间 | 声明场址内全部测试、返工和包装区域 | 按物项和产品族汇总消耗质量；包装与参考产品净质量分开 | BOM 和包装规范；秤或单件质量证据；库存核对 |
| `cp_test_finish_energy` | `testing_finishing_packaging` | 测试、返工和包装电力 | 计量表、测试循环、设备运行时间和公用工程记录 | meter_id; reading_start; reading_end; test_cycles; runtime; allocation_driver; lot_id | 读取分表；用测试循环、机器时间或其他物理驱动因素分配共享消耗 | kWh | 每班次或计量间隔；按月汇总 | 与合格产出记录相同期间 | 声明场址内全部测试、返工和包装设备 | 计量读数相减，并按有记录的物理驱动因素分配共享用量 | 计量表身份；校准或发票；测试设备日志；分配工作表 |
| `cp_finished_output_tests` | `testing_finishing_packaging` | 合格产出、检验和测试状态、返工及最终不合格品 | 秤、生产、测试、不符合、返工和废物记录 | serial_or_lot_id; product_family; drawing_revision; net_mass; test_specification; test_result; rework_status; reject_mass; waste_destination; date | 称量合格和不合格产出，并将测试和检验记录关联到批次或序列身份 | kg and test status | 按验收规范对每批或每件采集；按月汇总 | 与全部前景投入相同期间 | 声明场址的全部合格产出和最终不合格品 | 汇总合格净质量和最终不合格质量；在处理结论明确前，不把未决在制品计入任一方 | 秤校准；现行图纸和 BOM；测试设备校准；可追溯检验和测试报告；不符合处理结论 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_count_to_mass` | 计数部件和包装 | 消耗质量 =（领用物项数量 - 退回物项数量）× 经核验的单件质量 | 领用数量；退回数量；经核验单件质量 | 各物项消耗质量，kg |  |
| `calc_net_material_consumption` | 按质量领用的材料 | 消耗质量 = 期初库存 + 收货 - 期末库存 - 有记录的退回或转出 | 期初库存；收货；期末库存；退回；转出 | 消耗投入质量，kg | eu-pef-method-2021 |
| `calc_normalize_reference_mass` | 每个前景清单行 | 归一化数量 = 报告期行数量 / 报告期合格成品质量 | 汇总行数量；合格成品质量 | 每 1 kg 合格线束的数量 | iso-14044-2006; eu-pef-method-2021 |
| `calc_mass_reconciliation` | 整个前景系统 | 残差 = 材料投入总量 - 合格产品净质量 - 外运废物和废料 - 最终不合格品 - 期末在制品增加 + 期初在制品减少；调查并披露残差，不得强制调整 | 材料投入；合格产品；废物；废料；不合格品；在制品变化；库存变化 | 质量核对及披露的残差，kg | eu-pef-method-2021 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_scope` | 产品身份和边界 | 保留现行图纸、物料清单、应用族、电路和电压等级、产品版本、场址、期间、纳入作业、外包作业和包装处理信息。 | 批准的图纸和 BOM；工艺路线；范围说明；产品元数据 |
| `dq_primary_records` | 材料、能源、废物和产出数量 | 前景数量采用场址记录。供应商或通用二手数据可描述上游生产，但不得替代实测前景消耗或产出。 | 收货和领用记录；计量表；发票；称量单；生产报告；废物联单 |
| `dq_temporal_alignment` | 全部前景行 | 使用一个代表性报告期，通常为连续 12 个月或完整生产活动期，并将投入、产出、返工、库存变化和废物记录对齐到该期间。披露停产、爬坡或异常生产。 | 期间登记；生产日历；计量日期；库存记录；活动期报告 |
| `dq_mass_completeness` | 质量平衡 | 纳入全部 BOM 物项和可测工艺添加物、合格产品、废料、最终不合格品、在制品变化及库存变化；说明未解决残差和缺失的供应商数据集。 | 质量核对工作表；BOM 覆盖检查；数据缺口登记 |
| `dq_test_traceability` | 检验和电气测试 | 保留现行验收程序和可追溯的检验、测试结果。至少记录导通测试；当声明的应用和规范要求时，记录绝缘电阻、耐压、屏蔽、功能或其他测试。 | 测试规范；校准设备记录；按批次或序列关联的测试报告；nasa-std-8739-4a-change-4；ipc-whma-a-620 |
| `dq_allocation` | 共享作业 | 记录每个共享计量表或共享过程的分配驱动因素，并保留计算；采用非物理关系时还须保留敏感性分析。 | 分配工作表；计量表地图；生产统计；iso-14044-2006；eu-pef-method-2021 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_complete_set_scope` | 产品身份 | 确认参考产品是用于车辆、航空器或船舶的完整线束，而不是单根电线、电缆、连接器、端子、部件套件、不完整子总成或完整交通运输设备。 | ipc-whma-a-620 |
| `validate_reference_identity` | 参考流 | 要求产品流 UUID `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和参考数量 1。 |  |
| `validate_required_qualifiers` | 功能单位和数据集元数据 | 任一必需限定信息缺失，或物料清单、图纸、测试规范或包装基础不可识别时，判定完整性失败。 | ipc-whma-a-620; nasa-std-8739-4a-change-4 |
| `validate_process_coverage` | 前景过程清单 | 要求纳入过程图的全部三个阶段；若合并，必须有文件说明并保持准备、装配、测试、返工、包装、投入、产出和废物的覆盖。 | ipc-whma-a-620; nasa-std-8739-4a-change-4 |
| `validate_internal_transfers` | 已准备引线和已装配线束内部流 | 确认每个内部产出具有匹配的下游投入，且不承载重复的上游负荷。 | eu-pef-method-2021 |
| `validate_mass_reconciliation` | 整个前景系统 | 要求质量核对工作表覆盖投入、合格产品、废物、废料、不合格品、在制品及库存变化；未解决残差必须披露，不得强制并入其他行。 | eu-pef-method-2021 |
| `validate_test_records` | 合格产出 | 要求合格产品具有可追溯的检验和导通测试证据，以及声明设计或验收规范要求的全部附加测试。 | ipc-whma-a-620; nasa-std-8739-4a-change-4 |
| `validate_allocation_disclosure` | 共享负荷和废料 | 要求披露分配驱动因素、数据期间、计算以及废料或废物处理；禁止无法解释的收入冲减或避免负荷抵扣。 | iso-14044-2006; eu-pef-method-2021 |
| `validate_no_unsourced_defaults` | 全部前景数量 | 拒绝将无记录的默认数量表述为实测值或有来源支持的值。前景数据缺口必须保持明确且可替换。 | iso-14044-2006; eu-pef-method-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造工厂门口成品线束的前景门到门生产数据集 |
| downstream_use | 可发布为 `secondary_dataset` 或 `background_dataset`，并用作车辆、航空器、船舶、过程或 `lifecyclemodel` 研究中的部件生产投入 |
| allowed_use | 应用、电压、材料、连接器、防护、地域、时期、测试和包装限定信息与数据集相容的产品族或设计特定研究 |
| excluded_use | 单根电线、电缆、连接器、端子、不完整套件或子总成；非交通运输布线应用；已安装系统的使用或寿命终止声明；未经额外归一化和审查的不同设计比较 |
| required_metadata | PCR id；产品流 UUID；应用族；线束功能；电路和电压等级；导体和绝缘系统；连接器和端接技术；屏蔽和防护；图纸和 BOM 版本；场址和地域；报告期；生产路线；外包阶段；适用测试规范；包装处理；分配方法 |
| required_quality_disclosure | 前景数据覆盖；计量表和质量测量基础；BOM 和供应商数据覆盖；质量核对残差；不合格和返工产出；测试覆盖及可追溯性；分配驱动因素；上游数据集缺口；时间、地域和技术代表性 |
| update_trigger | 图纸或 BOM 变更并实质改变组成；导体、绝缘、连接器、端接、屏蔽或防护技术变更；电压等级或应用变更；场址或路线变更；供应商组合、能源结构、废料处理、分配方法、测试制度、包装或报告期发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ipc-whma-a-620` | standard | IPC 与 WHMA，*Requirements and Acceptance for Cable and Wire Harness Assemblies*，IPC 官方说明：https://www.ipc.org/ipc-validation-services-qualified-manufacturing-companies-qml-ipcwhma-620（检索于 2026-08-09） | 类别含义；装配活动；压接、机械固定和焊接互连；检验和测试基础；过程控制和验收记录要求 |
| `nasa-std-8739-4a-change-4` | standard | NASA-STD-8739.4A Change 4，*Workmanship Standard for Crimping, Interconnecting Cables, Harnesses, and Wiring*：https://standards.nasa.gov/node/283（检索于 2026-08-09） | 成型、剥皮、屏蔽、压接、连接器装配、标识、清洁、搬运、测试、接续和质量保证的详细过程分解；关键应用的测试和记录可追溯性 |
| `iso-14044-2006` | standard | ISO 14044:2006，*Environmental management — Life cycle assessment — Requirements and guidelines*：https://www.iso.org/standard/38498.html（检索于 2026-08-09） | 目标和范围、清单、分配、报告、局限性和解释框架 |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279，Annex I，*Product Environmental Footprint Method*：https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-09） | 功能单位和参考流框架；系统边界；清单数据质量；分配层级；归一化和报告 |
