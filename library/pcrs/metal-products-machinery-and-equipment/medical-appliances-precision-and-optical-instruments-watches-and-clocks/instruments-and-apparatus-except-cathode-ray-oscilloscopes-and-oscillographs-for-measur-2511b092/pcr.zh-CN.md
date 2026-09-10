---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-except-cathode-ray-oscilloscopes-and-oscillographs-for-measur-2511b092
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 不带记录装置（电力生产或供应表计除外）的电压、电流、电阻或功率测量或检验仪器和器械（阴极射线示波器和录波器除外）

## 1. 范围与适用性

本 PCR 适用于成品仪器和器械的前景制造；其主要功能是测量或检验电压、电流、电阻或电功率，且不带记录装置。当产品身份符合本边界时，典型产品包括不带记录功能的数字或模拟万用表、电压表、电流表、欧姆表和功率表。

本 PCR 不包括阴极射线示波器和录波器、以记录测量值为定义功能的仪器、电力生产或供应表计、测量或检验上述四种量以外其他电量的仪器、分类在本类别之外的电信测试仪器，以及与成品仪器分开供应的附件、备件、校准服务或软件。多功能产品仅在其声明的主要产品身份符合本范围且不存在记录功能时才属于本 PCR。

默认前景边界从制造场址接收外购物料、元件、子组件、包装和能源开始，到合格成品在工厂大门交付为止。外购投入的上游生产由链接的上游数据集表示。除非研究明确扩展边界并单独报告新增阶段，否则分销、使用、维护和寿命终止不属于默认前景数据包。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-except-cathode-ray-oscilloscopes-and-oscillographs-for-measur-2511b092 |
| classification_refs | CPC 3.0：48243（精确分类参考；分类映射仍在本 PCR 之外治理） |
| covered_products | 测量或检验电压、电流、电阻或功率的不带记录功能成品仪器和器械 |
| excluded_products | 阴极射线示波器和录波器；记录仪器；电力生产或供应表计；其他电量仪器；独立供应的零部件、附件、软件和服务 |
| representative_product | 在工厂大门交付的不带记录功能成品电气测量仪器，例如手持式或台式万用表 |
| production_route | 外购电子和机械投入，可选的场内元件制造，最终机电装配，适用的校准、功能/安全/EMC 验证，以及包装 |
| market_state | 成品，已制造；生产混合，在工厂 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台能够执行所声明电压、电流、电阻或功率测量/检验功能且不带记录装置的成品仪器 |
| How much | 工厂大门处 1 kg 成品仪器 |
| How well | 满足所代表型号或产品系列声明的测量功能、量程、准确度规格、安全测量类别和适用合规要求 |
| How long or cycle | 一个生产报告期；本从摇篮到大门参考流不表示使用寿命，用于使用阶段比较时必须另行声明 |
| reference_flow_link | 下表定义的天工参考产品流 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 不带记录装置（电力生产或供应中的
表计除外）的测量或检验电压、电流、电阻或功率用仪器和器械（阴极射线示波器和录波器除外） `7ecc1c5a-4a45-4d93-8648-9a86405e3d20` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仪器类型以及型号或产品系列；被测量；测量量程；准确度规格或等级；适用时的安全测量类别和额定电压；模拟或数字指示；明确不存在记录装置；供电和随附电池状态；所含测试线、探头、附件、手册和包装；生产路线；制造地理范围；报告期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺少限定信息会使类别身份或参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和所有质量归一化清单结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将前景数据包归一化到恰好 1 kg 合格参考成品。报告随附电池、测试线、探头、手册、附件和销售包装是否包含在该质量中。 |
| `count_to_mass_conversion` | 仅以仪器、组件或包装件数提供的源记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只有使用所代表型号和批次的实测净质量或毛质量时，才把件数换算为质量；保留件数、实测质量、样本量和包装约定。 |
| `energy_normalization` | 场内制造、装配、校准、测试和包装所用电力及其他能源 | Energy | kWh 或 MJ | 保留计量单位和换算因子，分开记录能源载体，并用同一报告期合格成品质量归一化可归属能源。 |
| `measurement_quality_identity` | 产品合格性记录 | 声明的测量结果以及不确定度或容差 | 声明的工程单位 | 保留被测量、量程、设定点、观测结果、容差或不确定度、设备标识、校准状态和通过/失败判定；不得把产品性能结果换算为清单质量或能量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址收到的外购物料、电子和机电元件、外壳、子组件、包装和能源 |
| starting_condition_role | 前景制造入口；外购投入的上游负荷由链接的次级或背景数据集提供 |
| product_classification_scope | CPC 3.0 代码 48243 所表示语义产品边界内，测量或检验电压、电流、电阻或功率的不带记录功能成品仪器 |
| recursive_input_rule | 若某投入本身属于同一产品类别，将其记录为可见产品投入并链接上游数据集；不得在接收过程中递归重建其制造 |
| upstream_dataset_requirement | 跨越前景边界的每项物料、元件、子组件、包装、能源、运输和处理投入，都必须有具名上游数据集或披露的未解决数据缺口 |
| disclosure | 声明制造场址和路线、所含产品内容和包装、场内制造与外购子组件、分配和截断决定、测试范围、数据期、地理范围及所有排除的生命周期阶段 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_foreground_manufacturing` | foreground_system_boundary | 纳入所有直接控制且可归属的场内元件制造、机电装配、作为制造组成部分的固件加载、校准、功能验证、适用的安全和 EMC 测试、质量控制、返工、清洁及包装，直至成品工厂大门。 | `iec-63366-2025`; `eu-pef-2021-2279` |
| `sb_purchased_inputs` | purchased_input_boundary | 记录完整的产品特定物料清单和包装、外购子组件、能源、辅助材料、场内搬运及废物/处理输出；每项外购投入应链接上游数据集，不得从前景数据包中省略。 | `eu-pef-2021-2279` |
| `sb_compliance_evidence` | product_conformance_boundary | 纳入所代表产品路线实际执行测试的活动数据，并保留产品安全、EMC、校准和限用物质文件；引用标准不能替代产品测试或供应商记录。 | `iec-61010-1-2010-amd1-2016`; `iec-61326-1-2020`; `iec-63000-2016-amd1-2022` |
| `sb_no_silent_cutoff` | foreground_cutoff | 不得静默省略已知生产投入、输出或过程阶段。任何排除都必须说明被省略流或阶段、原因和重要性依据、适用研究方法及对完整性的预期影响。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `sb_extended_stages` | downstream_extension | 默认前景数据包不含分销、使用、维护和寿命终止；特定研究如增加这些阶段，应作为明确边界扩展建模和披露，不得改变规范的从摇篮到大门参考流身份。 | `iec-63366-2025`; `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `inhouse_component_manufacture` | 场内元件和子组件制造 | conditional | 报告设施制造或实质性转化电路组件、传感器、分流器、外壳、端子、线束或其他产品元件时纳入 | 前景元件制造 | 1 kg 合格场内元件或子组件输出 |
| `final_instrument_assembly` | 最终仪器装配与配置 | required | 制造成品仪器时始终纳入 | 前景机电装配 | 最终校准和放行前 1 kg 已装配仪器 |
| `calibration_test_packaging` | 校准、验证、放行与包装 | required | 始终纳入；仅记录所代表路线适用的测试和包装活动 | 前景校准、合格性验证、质量放行和包装 | 1 kg 合格参考成品 |

### 过程：场内元件和子组件制造（`inhouse_component_manufacture`）

#### 输入

##### 产品流

###### 场内制造用原材料、零件和工艺材料（`inhouse_material_inputs`）

记录从采购、仓储或另一场址进入各项场内元件或子组件作业的产品特定物料和零件。

- 选定流：供应商特定物料、零件或工艺材料；构建数据集时逐项解析具体流
- 流属性/单位：Mass / kg
- 数量规则：归属于合格元件或子组件输出的实测收货量和经库存调整的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格场内元件或子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inhouse_materials`
- 来源：`eu-pef-2021-2279`; `iec-63000-2016-amd1-2022`

###### 场内制造能源供应（`inhouse_energy`）

按能源载体和供应数据集分开记录纳入的场内作业所消耗电力和其他能源。

- 选定流：场址和载体特定的能源供应；构建数据集时解析
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分表计量；没有分表时，从完整场址表计按有文件依据的规则分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格场内元件或子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inhouse_energy`
- 来源：`eu-pef-2021-2279`

##### 废物流

本 PCR 不预设废物投入。只有实际的回收物或废物衍生材料进入过程时才记录废物投入，并披露其处理状态和上游负荷约定。

##### 基本流

仅当资源直接从环境进入场内过程且未由产品流供应数据集表示时，记录直接资源投入。

#### 输出

##### 产品流

###### 合格场内元件和子组件（`inhouse_component_output`）

记录转入最终仪器装配的合格元件或子组件质量。

- 选定流：产品特定元件或子组件；构建数据集时解析
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格场内元件或子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inhouse_outputs`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 场内制造废料、不合格品和处理残余物（`inhouse_waste_outputs`）

按物料记录各项废料、不合格元件、废水、废液及其他废物输出，并记录去向及回收或处置路线。

- 选定流：物料和处理特定的废物流；构建数据集时解析
- 流属性/单位：Mass / kg
- 数量规则：按废物类型实测的废物发运、处理或内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格场内元件或子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inhouse_outputs`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### 场内元件制造直接排放（`inhouse_direct_emissions`）

记录纳入的场内作业向空气、水或土壤的实测或依法报告排放，不得重复记录已由上游能源或物料数据集表示的排放。

- 选定流：物质和环境区室特定的基本流；构建数据集时解析
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或按声明监测方法用实测浓度和排放体积计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格场内元件或子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_inhouse_outputs`
- 来源：`eu-pef-2021-2279`

### 过程：最终仪器装配与配置（`final_instrument_assembly`）

#### 输入

##### 产品流

###### 电子、传感和机电物料清单投入（`assembly_electronic_inputs`）

按供应商和零件身份记录已装配或裸电路组件、传感器、分流器、显示器、开关、端子、连接器、布线、电源模块、随附电池以及其他电子或机电件。

- 选定流：供应商和零件特定的产品流；构建数据集时解析
- 流属性/单位：Mass / kg
- 数量规则：产品特定 BOM 数量，与实际领用、退回和库存变动记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`eu-pef-2021-2279`; `iec-63000-2016-amd1-2022`

###### 外壳、机械零件、紧固件和标签（`assembly_mechanical_inputs`）

按材料和零件身份记录外壳、框架、屏蔽件、旋钮、按钮、紧固件、标签及其他机械件。

- 选定流：供应商和零件特定的产品流；构建数据集时解析
- 流属性/单位：Mass / kg
- 数量规则：产品特定 BOM 数量，与实际领用、退回和库存变动记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`eu-pef-2021-2279`; `iec-63000-2016-amd1-2022`

###### 装配能源和直接消耗辅助材料（`assembly_energy_auxiliaries`）

分开记录电力、压缩空气、焊接或连接材料、胶黏剂、清洁剂、润滑剂及其他可直接归属的装配投入。

- 选定流：场址和材料特定的产品流；构建数据集时解析
- 流属性/单位：能源用 Energy / kWh 或 MJ；材料用 Mass / kg
- 数量规则：归属于装配过程的计量能源和经库存调整的辅助材料消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy_auxiliaries`
- 来源：`eu-pef-2021-2279`

##### 废物流

本 PCR 不预设废物投入。重复使用或回收的装配投入必须根据实际供应状态保持为可见产品投入或废物衍生投入。

##### 基本流

仅当装配过程实测且未由产品供应流表示时，记录直接基本流投入。

#### 输出

##### 产品流

###### 等待校准和放行的已装配仪器（`assembled_instrument_output`）

记录转入最终校准、验证和产品放行的实测质量。

- 选定流：产品特定的未校准已装配仪器；不规定类别通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_outputs`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 装配废料、不合格品和更换零件（`assembly_waste_outputs`）

记录装配废料、不合格组件、拆下零件、废辅助材料及其实际去向，不得与物料投入相抵销。

- 选定流：物料和处理特定的废物流；构建数据集时解析
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向实测的废物、不合格品和退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_outputs`
- 来源：`eu-pef-2021-2279`

##### 基本流

仅当清洁、连接或其他装配活动发生直接排放且有场址测量或采集记录计算支持时记录。

### 过程：校准、验证、放行与包装（`calibration_test_packaging`）

#### 输入

##### 产品流

###### 已装配仪器投入（`test_assembled_input`）

记录进入校准和验证的已装配仪器质量；保留返工循环，但不得把重复通过量重复计为新产品投入。

- 选定流：产品特定的未校准已装配仪器；不规定类别通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测唯一投入质量，返工次数另行披露
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_inputs`
- 来源：`eu-pef-2021-2279`

###### 测试、校准和包装能源及消耗品（`test_energy_consumables`）

记录校准和测试设备、条件处理、作为制造组成部分的固件编程、实际执行的老化以及包装所用能源，并记录直接消耗的校准和清洁材料。

- 选定流：场址和载体特定的能源或材料流；构建数据集时解析
- 流属性/单位：能源用 Energy / kWh 或 MJ；材料用 Mass / kg
- 数量规则：计量消耗量，或按文件化规则分配到测试和放行产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_energy_consumables`
- 来源：`eu-pef-2021-2279`; `iec-61010-1-2010-amd1-2016`; `iec-61326-1-2020`

###### 销售包装和随附附件（`packaging_accessory_inputs`）

记录一、二级销售包装以及随参考产品提供的所有测试线、探头、适配器、电池、手册和附件；清楚区分所含产品质量和包装质量。

- 选定流：材料和供应商特定的包装或附件流；构建数据集时解析
- 流属性/单位：Mass / kg
- 数量规则：产品特定包装和附件 BOM，与领用和库存变动记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_inputs`
- 来源：`eu-pef-2021-2279`

##### 废物流

本 PCR 不预设废物投入。进入再制造或翻新的退回仪器不属于本原生制造路线，除非单独声明和建模该路线。

##### 基本流

只有实际校准、条件处理或测试作业直接从环境获取资源时，才记录直接基本流投入。

#### 输出

##### 产品流

###### 合格不带记录功能电气测量成品仪器（`reference_product_output`）

使用精确的天工参考产品流记录放行成品质量，并保留型号、功能、准确度、测试、附件、电池和包装限定信息。

- 选定流：不带记录装置（电力生产或供应中的
表计除外）的测量或检验电压、电流、电阻或功率用仪器和器械（阴极射线示波器和录波器除外） `7ecc1c5a-4a45-4d93-8648-9a86405e3d20`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 合格放行参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：

##### 废物流

###### 失败单元、更换零件和测试不合格品（`test_reject_outputs`）

记录离开返工循环的失败单元和零件，包括实测质量、处置决定、回收或处理路线。

- 选定流：物料和处理特定的废物流；构建数据集时解析
- 流属性/单位：Mass / kg
- 数量规则：离开前景系统的不合格品和更换零件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_outputs`
- 来源：`eu-pef-2021-2279`

###### 包装过程废物（`packaging_waste_outputs`）

记录成品离开工厂大门前产生的边角料、损坏包装、衬里、卷芯及其他包装废物。

- 选定流：物料和处理特定的包装废物流；构建数据集时解析
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_outputs`
- 来源：`eu-pef-2021-2279`

##### 基本流

仅当测试、条件处理、清洁或包装发生直接排放且有测量或采集记录计算支持时记录。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `alloc_avoid` | shared_manufacturing_processes | 通过独立计量、批次或产线细分，或其他能够可靠分离所代表产品直接归属过程和记录的方法避免分配。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `alloc_physical` | inseparable_shared_burdens | 无法避免分配时，使用能够反映共享投入或输出驱动因素的有文件依据因果物理关系，例如机器时间、测试时间、能源需求，或质量确有因果相关性时的质量。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `alloc_other_relationship` | no_defensible_physical_relationship | 无法证明相关物理关系时，采用经济分配或其他合理关系，披露数据期和计算，并针对一种实质性不同且可辩护的方法报告敏感性结果。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `alloc_scrap_and_recycling` | scrap_recycling_and_recovery | 将废料和回收材料报告为可见输出流，并声明上游和寿命终止约定。除非声明的适用方法明确要求，否则不得在本从摇篮到大门前景数据包内采用避免负荷抵扣。 | `iec-63366-2025`; `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_inhouse_materials` | `inhouse_component_manufacture` | 原材料、零件和工艺材料 | 采购、领用、退回、库存和成分记录 | part_id; supplier; material; opening_stock; receipts; issues; returns; closing_stock; measured_mass; lot_id | 将 ERP 或仓储移动与生产批次核对，并用秤量或供应商记录验证质量 | kg | 每批，按月核对 | 有代表性的连续报告期，通常不少于 12 个月；较短生产活动需说明理由 | 每个纳入的制造场址和场内作业 | 净归属消耗量除以合格元件输出质量 | BOM 版本、供应商声明、秤具校准、库存核对及适用的限用物质文件 |
| `cp_inhouse_energy` | `inhouse_component_manufacture` | 场内制造能源 | 表计和生产记录 | meter_id; carrier; opening_reading; closing_reading; submeter_scope; operating_time; allocation_driver; accepted_output_mass | 读取专用分表；无分表时核对完整场址表计并应用声明的分配规则 | kWh 或 MJ | 表计间隔，按月汇总 | 与生产输出相同期间 | 每个纳入场址和能源载体 | 可归属消耗量除以合格元件输出质量 | 表计校准或公用事业发票、表计覆盖图和分配证据 |
| `cp_inhouse_outputs` | `inhouse_component_manufacture` | 合格输出、废物和直接排放 | 生产、地磅、废物、排放和排放监测记录 | output_mass; reject_mass; waste_type; destination; recovery_status; concentration; discharge_volume; emission_period | 测量合格输出和各类废物；直接排放仅按实测活动和浓度数据计算 | kg; m3; 实测浓度单位 | 每批或每次发运；按监测频率记录排放 | 与生产输出相同期间 | 每个纳入场内作业 | 按流和去向汇总，再按合格输出质量归一化 | 校准秤具、废物联单、实验室报告、许可证和质量平衡核对 |
| `cp_assembly_bom` | `final_instrument_assembly` | 电子和机械 BOM 投入 | 产品 BOM 和物料领用记录 | product_model; BOM_revision; part_id; supplier; quantity_per_unit; issued_quantity; returned_quantity; stock_change; unit_mass; included_battery_flag | 将产品特定 BOM 与实际领用、退回、替代和库存变动核对，并验证零件质量 | kg 和件数 | 每生产批，按月核对 | 与已装配输出相同期间 | 每个最终装配场址 | 净归属零件质量除以已装配输出质量 | 批准 BOM、变更通知、供应商声明、实测零件质量和库存核对 |
| `cp_assembly_energy_auxiliaries` | `final_instrument_assembly` | 装配能源和辅助材料 | 表计、采购、领用和库存记录 | meter_id; carrier; reading; auxiliary_id; opening_stock; receipts; issues; closing_stock; allocation_driver | 分表计量装配能源，并将辅助材料消耗与生产记录核对 | kWh 或 MJ; kg | 表计间隔和每批，按月汇总 | 与已装配输出相同期间 | 每个最终装配场址 | 可归属能源或辅助材料量除以已装配输出质量 | 表计证据、发票、校准秤具和分配工作表 |
| `cp_assembly_outputs` | `final_instrument_assembly` | 已装配输出、废料、不合格品和返工 | 生产和废物记录 | assembled_output_mass; reject_mass; scrap_type; rework_entry; rework_exit; destination | 测量唯一合格输出和废物；跟踪返工循环且不重复计算输出 | kg | 每批 | 与装配投入相同期间 | 每条最终装配线 | 按合格已装配输出归一化合格质量及各类废物质量 | 校准秤具、批次谱系、不合格记录和废物联单 |
| `cp_test_inputs` | `calibration_test_packaging` | 已装配投入、附件和包装 | 测试接收、包装 BOM 和领用记录 | serial_or_lot; assembled_mass; rework_passes; accessory_id; packaging_material; quantity; unit_mass; included_in_reference_mass | 将唯一仪器链接到测试接收，并将随附件和包装与产品特定领用记录核对 | kg 和件数 | 每批或每序列批 | 与放行产品相同期间 | 每个校准、测试和包装场址 | 唯一投入及所含材料质量除以合格放行产品质量 | 追溯记录、包装 BOM、校准秤具和库存核对 |
| `cp_test_energy_consumables` | `calibration_test_packaging` | 校准、验证和包装能源及消耗品 | 设备表计、运行时长和消耗品记录 | test_station_id; test_type; meter_reading; runtime; conditioning_time; consumable_id; issued_quantity; allocation_driver | 有条件时使用测试台或区域专用表计；否则使用有文件依据的完整表计分配 | kWh 或 MJ; kg | 每测试批，按月核对 | 与放行产品相同期间 | 每项纳入的测试和包装作业 | 可归属能源和消耗品除以合格放行产品质量 | 表计校准、设备日志、公用事业发票和分配工作表 |
| `cp_final_output_quality` | `calibration_test_packaging` | 合格成品及合格状态 | 放行、校准、安全、EMC 和质量记录 | model; serial_or_lot; measured_quantities; ranges; set_points; observed_results; accuracy_or_tolerance; uncertainty_if_reported; test_standard; equipment_id; equipment_calibration_status; pass_fail; released_mass | 将产品放行与所代表路线实际要求和执行的测试相链接 | kg 和声明工程单位 | 按适用测试计划逐序列单元或统计合理批次 | 与放行产品相同期间 | 每个放行场址和所代表产品系列 | 汇总合格放行质量，并保留未汇总合格性证据 | 批准测试计划、设备校准记录、测试结果、不合格处置和放行授权 |
| `cp_test_outputs` | `calibration_test_packaging` | 测试不合格品和包装过程废物 | 不合格和废物记录 | reject_id; part_or_unit; measured_mass; cause; rework_status; final_disposition; waste_material; destination | 跟踪不合格品至返工或最终废物处置，并按材料测量废物 | kg | 每批和每次废物发运 | 与放行产品相同期间 | 每个测试和包装场址 | 离开返工循环的最终废物除以合格放行产品质量 | 不合格报告、校准秤具、废物联单和返工谱系 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景清单行 | 归一化量 = 报告期可归属流量 / 同期合格成品质量；将分母换算为 kg 并缩放到 1 kg | 可归属流量; 合格成品质量; 单位换算因子 | 每 1 kg 参考产品的量 | `eu-pef-2021-2279` |
| `calc_stock_adjusted_consumption` | 物料、元件、包装和消耗品 | 净消耗量 = 期初库存 + 收货 - 期末库存 - 有文件依据的退回或转出；结果与批次领用和替代核对 | 期初库存; 收货; 期末库存; 退回; 转移; 领用记录 | 经库存调整的前景消耗量 | `eu-pef-2021-2279` |
| `calc_shared_meter_allocation` | 无专用分表的能源或辅助材料 | 使用第 7 节第一个可辩护的分配规则分配完整实测总量，并记录分子、分母、覆盖范围以及与完整表计总量的核对 | 表计总消耗; 选定物理或其他分配驱动因素; 所代表输出 | 可归属能源或辅助材料量 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `calc_direct_emission` | 实测直接排放 | 排放质量 = 实测浓度 × 实测排放体积，明确保留量纲换算和采样期覆盖范围 | 浓度; 排放体积; 单位换算; 监测覆盖 | 排放物质质量 | `eu-pef-2021-2279` |
| `calc_reject_rate` | 装配和测试不合格品 | 不合格率 = 离开返工循环的最终不合格质量 / 唯一毛投入质量；重复返工不得增加唯一毛投入 | 最终不合格质量; 唯一毛投入质量; 返工谱系 | 披露的不合格比例及每 kg 参考产品废物质量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明所代表型号测量或检验电压、电流、电阻或功率中的一种或多种，不带记录装置，且不属于电力生产或供应表计以及排除的示波器/录波器。 | 产品规格、批准 BOM、用户文件、铭牌以及按 `unsd-cpc-3-0` 所做分类复核 |
| `dq_temporal_consistency` | 所有前景记录 | 投入、输出、表计、库存移动和放行产品质量必须覆盖同一代表性期间；说明短于 12 个月生产活动的理由，并披露季节性或产能爬坡影响。 | 带日期的生产、库存、表计和发运记录 |
| `dq_technological_geographical_representativeness` | 过程和上游数据集 | 技术、元件状态、电力供应、处理路线、地理范围和生产期须与所代表路线匹配；披露代理项以及实质性不同的场址或产品系列。 | 数据集元数据、供应商/场址映射以及按 `eu-pef-2021-2279` 所做代表性评估 |
| `dq_bom_and_mass_reconciliation` | 产品和包装材料 | 核对当前产品特定 BOM、替代、经库存调整的消耗、合格输出、不合格品、废物以及随附包装/附件约定；解释未核对质量。 | BOM 版本、库存核对、秤具记录、输出记录和质量平衡工作表 |
| `dq_measurement_traceability` | 产品校准和合格性测试 | 保留实际执行测试的方法、设备标识、校准状态、设定点、结果、容差或不确定度以及通过/失败状态；识别适用安全和 EMC 标准，但不得声称执行未进行的测试。 | 测试计划和结果、设备校准记录，以及适用的 `iec-61010-1-2010-amd1-2016` 和 `iec-61326-1-2020` 证据 |
| `dq_substance_documentation` | 物料和元件 | 保留用于评估限用物质的供应商和制造商文件，并明确区分声明、分析结果和未解决证据缺口。 | 按 `iec-63000-2016-amd1-2022` 组织的供应商声明和技术文件 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_identity_scope` | reference_product_identity | 产品带记录装置、属于电力生产或供应表计、属于阴极射线示波器或录波器，或以其他方式落在声明产品边界之外时，拒绝数据包。 | `unsd-cpc-3-0` |
| `val_reference_flow` | reference_flow_consistency | 要求精确的参考产品流 UUID、Mass 流属性 UUID、Units of mass 单位组 UUID、kg 参考单位、恰好 1 kg 归一化输出及所有必需限定信息。 |  |
| `val_process_coverage` | foreground_process_completeness | 要求最终装配和校准/验证/放行/包装记录；声明场址执行场内元件制造时也必须纳入。每个纳入过程必须有投入、输出、废物去向和链接的采集协议。 | `iec-63366-2025`; `eu-pef-2021-2279` |
| `val_bom_energy_waste` | inventory_completeness | 要求产品特定 BOM 和包装/附件约定、每个纳入过程的能源和辅助材料记录、最终产品输出、不合格品和废物，以及实际发生的直接排放；未解决上游数据集必须披露为数据缺口。 | `eu-pef-2021-2279` |
| `val_quality_release` | product_conformance | 要求声明测量功能以及适用校准、安全和 EMC 测试计划的放行证据；元数据引用标准不能作为实际执行测试的证据。 | `iec-61010-1-2010-amd1-2016`; `iec-61326-1-2020` |
| `val_allocation_disclosure` | shared_burdens | 要求每项共享负荷说明分配决定、驱动因素、分子、分母、数据期、源记录、与完整总量的核对，以及未采用更早层级步骤的理由。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `val_no_unsupported_values` | quantitative_evidence | 拒绝虚构的类别默认量、无文件依据的代理 UUID 或从不同产品/过程中复制的值。数值必须来自声明的采集/计算协议或引用的非默认证据。 | `iso-14044-2006`; `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定的从摇篮到大门前景制造数据集，按 1 kg 合格不带记录功能电气测量成品仪器归一化 |
| downstream_use | 当产品身份、路线、地理范围、期间及所含产品约定匹配时，作为构建 process 或 lifecyclemodel 的次级数据集和背景数据集 |
| allowed_use | 对覆盖仪器制造建模；在统一范围和限定信息下比较供应商或场址；以透明的上游和下游扩展纳入更广产品系统 |
| excluded_use | 无代表性抽样的类别平均声明；没有声明寿命和性能的使用阶段服务比较；对排除的记录仪器、供应表计、示波器、录波器、独立零部件或服务建模；仅依据本 LCA 数据集作监管合规声明 |
| required_metadata | 规范 PCR id；产品型号或系列；被测量、量程和准确度；不存在记录装置；适用时的安全类别和额定电压；地理范围；技术及场内/外购路线；报告期；产品、附件、电池、手册和包装质量约定；上游数据集；分配和截断决定；测试计划覆盖范围 |
| required_quality_disclosure | 前景比例和一次数据覆盖；时间、地理和技术代表性；BOM 和质量核对；表计和分配覆盖；测试与校准证据；代理和上游数据缺口；不合格/返工处理；排除和不确定性局限 |
| update_trigger | 产品或 BOM 修订；增加记录功能；主要被测量或准确度/安全类别改变；场址、技术、供应混合、包装、随附件或电池改变；关键供应商替代；测试计划或适用标准改变；报告数据超过声明有效期；重大未解决数据缺口关闭 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | 数据集（`dataset`） | 联合国统计司，《产品总分类 3.0 版》结构和解释性说明资源（包括子类 48243），https://unstats.un.org/unsd/classifications/econ（检索日期：2026-08-09） | 产品类别纳入和排除边界 |
| `iec-63366-2025` | 标准（`standard`） | IEC 63366:2025，Product category rules for life cycle assessment of electrical and electronic products and systems，https://webstore.iec.ch/en/publication/67691（检索日期：2026-08-09） | 电子电气产品 PCR 框架、记录补充规格、系统边界和报告语境 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006 及修订 1:2017、2:2020，Environmental management — Life cycle assessment — Requirements and guidelines，https://www.iso.org/standard/38498.html（检索日期：2026-08-09） | LCI 完整性、分配层级、报告、解释和局限 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会建议 (EU) 2021/2279 及勘误，Product Environmental Footprint Method，http://data.europa.eu/eli/reco/2021/2279/oj（检索日期：2026-08-09） | 功能单位/参考流结构、公司特定 BOM 和制造数据、过程投入输出、数据质量、分配、计算和截断披露 |
| `iec-61010-1-2010-amd1-2016` | 标准（`standard`） | IEC 61010-1:2010+AMD1:2016，Safety requirements for electrical equipment for measurement, control, and laboratory use — Part 1: General requirements，https://webstore.iec.ch/en/publication/4279（检索日期：2026-08-09） | 电气测试测量设备安全要求的适用性及产品特定安全测试证据 |
| `iec-61326-1-2020` | 标准（`standard`） | IEC 61326-1:2020，Electrical equipment for measurement, control and laboratory use — EMC requirements — Part 1: General requirements，https://webstore.iec.ch/en/publication/62793（检索日期：2026-08-09） | 发射和抗扰度验证的适用性，以及保留路线特定 EMC 测试证据 |
| `iec-63000-2016-amd1-2022` | 标准（`standard`） | IEC 63000:2016+AMD1:2022，Technical documentation for the assessment of electrical and electronic products with respect to the restriction of hazardous substances，https://webstore.iec.ch/en/publication/25985（检索日期：2026-08-09） | 供应商和制造商限用物质技术文件证据 |
