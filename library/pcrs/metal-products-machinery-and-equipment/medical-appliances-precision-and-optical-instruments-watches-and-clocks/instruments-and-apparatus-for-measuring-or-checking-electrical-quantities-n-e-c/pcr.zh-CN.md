---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-electrical-quantities-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未另列明的测量或检验电量用仪器和器械

## 1. 范围与适用性

本 PCR 适用于以测量或检验电量为主要用途、且未在相关电量测量产品组内其他类别列明的成品仪器和器械的前景制造数据包。它覆盖从材料、零部件和分总成接收，经准备、装配、校准或功能测试、包装，直至成品仪器在制造商厂门放行的工厂活动。

不得把这一剩余类别用作更具体产品身份的通用替代项。其排除测量或探测电离辐射的仪器；阴极射线示波器和录波器；已专门归类的不带记录装置的电压、电流、电阻或功率测量仪器；电信用仪器；气体、液体或电力供应或生产表计；以零件或附件形式单独供应的产品；以及主要测量变量属于其他产品类别的仪器。具体数据包应说明所选产品为何仍处于本 n.e.c. 语义边界内。

本制造 PCR 不规定统一的使用阶段功能单位、参考使用寿命、负荷周期、功耗、维护制度或报废处理。这些事实在剩余类别内随产品而异，生成下游从摇篮到坟墓的 `lifecyclemodel` 时应作为产品特定情景补充。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-electrical-quantities-n-e-c |
| classification_refs | CPC 3.0：48249，精确分类参考 |
| covered_products | 主要用于测量或检验电量、且未在相关电量测量产品组内其他类别列明的成品仪器和器械 |
| excluded_products | 电离辐射仪器；阴极射线示波器或录波器；已专门归类的不带记录装置的电压、电流、电阻或功率仪器；电信用仪器；供应或生产表计；单独供应的零件或附件；主要按其他测量变量或功能归类的产品 |
| representative_product | 以质量表示、在制造商厂门放行的已完成校准或功能验证的电量测量或检验成品仪器 |
| production_route | 材料/零部件/分总成接收与检验；有条件的厂内零件或电子部件准备；总装；校准与功能测试；包装与放行 |
| market_state | 已制造、包装并在制造商厂门放行的成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造商厂门生产并放行未另列明的测量或检验电量用成品仪器或器械 |
| How much | 1 kg 成品仪器净质量，不含包装 |
| How well | 符合声明的产品规范以及校准或功能验收准则；应声明被测电量、功能、量程、准确度等级或不确定度、记录能力和产品配置 |
| How long or cycle | 一个完整制造批次或报告期，按放行产品质量归一化；不暗示统一的使用阶段寿命 |
| reference_flow_link | `reference_product_mass` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 未另列明的测量或检验电量用仪器和器械 `cf601a2b-131a-41c5-a82f-b20a0c90cdad` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 被测电量；仪器功能；测量范围；准确度等级或声明不确定度；记录能力；型号或产品族标识；硬件配置；随附附件；校准或验收标准及结果；产品净质量；制造场址；报告期；放行产品数量；市场地域 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和所有归一化分母 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量不含包装的合格放行仪器净质量。将全部前景清单值归一化到 1 kg 放行产品。 |
| `count_to_mass_conversion` | 以件数、批次或批量提供的记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可依据所代表型号和期间的实测净质量将件数换算为质量；保留件数、抽样或总质量、样本量及换算计算。 |
| `packaging_mass_separation` | 初级和次级包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料和质量将包装与参考产品净质量分开记录；包装不得增加 1 kg 参考数量。 |
| `energy_unit_preservation` | 电力、燃料和其他能源载体 | 为已解析流选择的能量属性 | kWh 或 MJ | 保留计量的能量单位并记录每个换算因子；不得把能量换算为产品质量。 |
| `process_water_unit` | 工艺水和清洗水 | 为已解析流选择的质量或体积属性 | kg 或 m3 | 保留实测属性和单位。如需密度换算，应记录温度、密度来源和公式。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_start_end` | 前景制造数据集 | 从制造商厂门接收材料、零部件、分总成和包装开始，到最终制造场址放行已包装成品仪器结束。纳入接收检验、有条件的零件/电子部件准备、装配、校准或功能测试、包装、直接控制的内部运输、公用工程、拒收品、废物和直接排放。 | `pep-ecopassport-pcr-2021` |
| `boundary_upstream_links` | 外购产品投入 | 将每项外购材料、零部件、分总成、能源载体、供水和包装投入链接到地域与技术具有代表性的上游数据集；不得在本前景数据集中重新创建上游生产。 | `pep-ecopassport-pcr-2021`; `eu-pef-method-2021` |
| `boundary_material_components` | 物料清单和随附要素 | 纳入产品净质量、电子线路板、存在时的电芯或电池、金属、塑料、电缆、显示器、传感器、外壳、紧固件、随附附件、说明书、标签、初级包装和次级包装。适用时单独披露危险物质或部件。 | `pep-ecopassport-pcr-2021` |
| `boundary_waste_to_handoff` | 制造废物和拒收品 | 记录制造废物、报废分总成、废水和危险废物的产生、内部处理及向第一个外部处理经营者的交接；处理和最终处置应通过单独的下游数据集连接。 | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `boundary_downstream_scenarios` | 下游生命周期模型 | 分销、安装、使用、维护、维修、更换、拆解、收集、再使用、回收和最终处置均不属于前景制造数据集。摇篮到坟墓的生命周期模型应添加产品特定情景，不得仅从 1 kg 制造参考量推断这些情景。 | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `boundary_cutoff_disclosure` | 完整性和截断 | 纳入所有可评估的前景投入和产出。任何排除均应尽可能量化、论证，检验其质量、能量和环境显著性，并予以披露；截断不得隐藏显著的电子部件、危险物质、直接排放或废物流。 | `pep-ecopassport-pcr-2021`; `iso-14044-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | materials_components_subassemblies_and_packaging_received_at_manufacturer_gate |
| starting_condition_role | 在前景准备和装配开始前，接收并识别上游产品，并将其链接至供应商特定或具有代表性的背景数据集。 |
| product_classification_scope | 符合 CPC 3.0 子类 48249 语义边界的成品；分类仅是范围参考，不能替代产品特定身份。 |
| recursive_input_rule | 如果外购投入本身是本类别内的成品或半成品，应将其作为单独产品投入记录，配置其上游数据集和供应商厂门；不得把当前前景制造过程递归展开到该投入中。 |
| upstream_dataset_requirement | 上游数据集应匹配材料/零部件身份、技术、地域、时间期间、参考属性和供应状态；代理数据集应披露并评审。 |
| disclosure | 声明制造场址、报告期、所代表的产品型号、产品净质量、BOM 覆盖率、随附附件、包装范围、外包步骤、内部步骤、分配基准、截断、代理数据集以及本前景数据包排除的下游阶段。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `materials_component_receipt` | 材料、零部件、分总成和包装接收 | required | 制造数据包始终纳入 | 前景接收、身份控制、称量和已接受投入核算 | 每 kg 放行产品的已接受投入 kg |
| `parts_electronics_preparation` | 厂内零件和电子部件准备 | conditional | 当报告场址制造、机加工、清洗、涂覆、焊接、贴装或以其他方式准备零件、线路板、传感器或分总成时纳入 | 总装前的前景转化 | 每 kg 放行产品的已准备分总成 kg |
| `final_assembly` | 机械和电气总装 | required | 始终纳入 | 前景装配与集成 | 每 kg 放行产品送检的已装配仪器 kg |
| `calibration_functional_testing` | 校准、功能测试和质量验收 | required | 始终纳入；适用时将校准与仅功能测试分开记录 | 前景符合性验证和拒收判定 | 每 kg 放行产品的合格仪器 kg |
| `packaging_release` | 包装、标识和放行 | required | 始终纳入 | 前景最终包装与参考产品放行 | 1 kg 净放行产品 |

### 过程：材料、零部件、分总成和包装接收（`materials_component_receipt`）

#### 输入

##### 产品流

###### 外购材料、零部件、分总成和包装（`received_inputs`）

按能够保留材料、零部件、供应商和上游数据集差异所需的身份和汇总层级，分别记录每项外购投入。不得为不同投入选择通用电气仪器流。

- 选定流：供应商特定的材料、零部件、分总成、附件、说明书、标签或包装流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg，除非已解析投入要求其他有记录的属性
- 数量规则：报告期内按投入身份和批次计量的已接受质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_received_inputs`
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行至生产的已接受投入（`accepted_inputs`）

在扣除退回和接收拒收品后，按材料或零部件身份将已接受投入质量结转至后续过程。

- 选定流：与 `received_inputs` 相同的已解析投入身份
- 流属性/单位：质量 / kg
- 数量规则：按投入身份计算的已接受质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_received_inputs`
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

###### 接收拒收品、退回品和损坏包装（`receipt_rejects`）

记录接收时成为废物的拒收投入和包装的实测质量及去向。仍属于产品的供应商退回应与废物分开记录。

- 选定流：与实际材料和法规分类匹配的废物流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：按废物身份和去向计量的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_rejects`
- 来源：`pep-ecopassport-pcr-2021`

##### 基本流

### 过程：厂内零件和电子部件准备（`parts_electronics_preparation`）

#### 输入

##### 产品流

###### 进入准备过程的已接受零件和材料（`preparation_material_inputs`）

记录每条厂内准备路线实际消耗的已接受零件、印制线路板或裸板、电子元件、传感器、外壳、电缆、紧固件、焊料、涂料、粘合剂和清洗剂。

- 选定流：产品特定的已解析材料或零部件流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg，或已解析流要求的有记录属性
- 数量规则：按投入身份计量的领用量减去实测退库量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_materials`
- 来源：`pep-ecopassport-pcr-2021`

###### 准备用电和其他公用工程（`preparation_energy`）

记录所纳入机加工、清洗、涂覆、焊接、贴装和准备设备使用的计量电力及其他能源载体。共享公用工程的分配应遵循第 7 节。

- 选定流：场址和地域特定的能源载体流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：能量 / 按计量保留 kWh 或 MJ
- 数量规则：直接电表读数或有记录的共享电表分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_energy`
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备零件和电子分总成（`prepared_subassemblies`）

记录转移至总装的已准备零件和分总成的实测质量，并保留路线和产品型号身份。

- 选定流：产品特定的中间零件或分总成流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：转移至总装的实测已接受产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepared_subassemblies`
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

###### 准备废料、废消耗品和报废分总成（`preparation_waste`）

记录每种废物的身份、质量、危险属性和第一个外部处理去向。

- 选定流：与实际废料、废化学品、废水处理残渣或报废电子分总成匹配的废物流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：按废物身份和去向计量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_waste`
- 来源：`pep-ecopassport-pcr-2021`

##### 基本流

###### 准备过程直接排放（`preparation_emissions`）

当准备过程产生受监测、计算或许可约束的排放时，记录过程特定的向空气、水或土壤直接排放。如果没有直接基本流越过场址边界，则不创建排放行。

- 选定流：物质和环境介质特定的基本流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：已解析基本流的属性和单位
- 数量规则：实测排放量或根据监测浓度与排放体积计算的排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_emissions`
- 来源：`pep-ecopassport-pcr-2021`

### 过程：机械和电气总装（`final_assembly`）

#### 输入

##### 产品流

###### 进入总装的零件和分总成（`assembly_inputs`）

记录总装实际消耗的每种外购或内部准备的外壳、线路板、传感器、换能器、显示器、连接器、电缆、紧固件、电池、附件和其他分总成。

- 选定流：产品特定的已解析零件或分总成流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：按零部件身份计量的领用量减去退库量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_inputs`
- 来源：`pep-ecopassport-pcr-2021`

###### 装配用电和公用工程（`assembly_energy`）

记录装配、连接、清洗、软件加载和直接控制的内部移动所用的直接或分配电力及其他能源载体。

- 选定流：场址和地域特定的能源载体流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：能量 / 按计量保留 kWh 或 MJ
- 数量规则：直接电表读数或有记录的共享电表分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 送往校准或测试的已装配仪器（`assembled_instrument`）

记录在剔除测试拒收品之前转移至校准或功能测试的已装配仪器质量。

- 选定流：产品特定的中间已装配仪器流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：转移至测试的实测装配产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembled_output`
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

###### 装配废料和报废零部件（`assembly_waste`）

按身份和去向记录废弃零部件、边角料、废连接材料和无法修复的装配拒收品。

- 选定流：与实际装配废物匹配的废物流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：按废物身份和去向计量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste`
- 来源：`pep-ecopassport-pcr-2021`

##### 基本流

### 过程：校准、功能测试和质量验收（`calibration_functional_testing`）

#### 输入

##### 产品流

###### 进入校准或测试的已装配仪器（`test_input_instruments`）

将已装配仪器质量和型号身份结转到每条适用的校准、功能测试、安全测试和质量验收路线。

- 选定流：与 `assembled_instrument` 相同的已解析中间已装配仪器流
- 流属性/单位：质量 / kg
- 数量规则：进入测试的实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_inputs`
- 来源：`pep-ecopassport-pcr-2021`

###### 测试用电和校准消耗品（`test_energy_consumables`）

记录测试台、条件处理、适用时的老化试验所用电力，以及产品特定的校准消耗品或标准物质。在具体数据包中将能量和消耗品保留为单独的已解析流。

- 选定流：场址特定电力或产品特定校准消耗品流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：能量使用 kWh 或 MJ；消耗品使用已解析属性
- 数量规则：直接计量、设备功率乘记录运行时间，或实测消耗品领用量减去退库量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_energy_consumables`
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的已校准或功能验证仪器（`conforming_instrument`）

仅记录满足声明校准或功能验收准则的仪器。保留产品型号、测试程序、结果和校准状态。

- 选定流：未另列明的测量或检验电量用仪器和器械 `cf601a2b-131a-41c5-a82f-b20a0c90cdad`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：包装前实测的合格仪器净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conforming_output`
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

###### 失败仪器、更换零件和废测试消耗品（`test_rejects`）

将可返工产品与废物分开。按质量、危险属性和去向记录无法修复的失败仪器、更换零件和废测试消耗品。

- 选定流：与实际失败产品、零部件或消耗品匹配的废物流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：剔除返工或退回库存项目后的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_rejects`
- 来源：`pep-ecopassport-pcr-2021`

##### 基本流

### 过程：包装、标识和放行（`packaging_release`）

#### 输入

##### 产品流

###### 进入包装的合格仪器（`packaging_product_input`）

结转不含包装的合格仪器净质量。随附附件应明确为产品配置的一部分或单独供应要素。

- 选定流：未另列明的测量或检验电量用仪器和器械 `cf601a2b-131a-41c5-a82f-b20a0c90cdad`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往包装的实测合格产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_input`
- 来源：`pep-ecopassport-pcr-2021`

###### 初级和次级包装、说明书和标签（`packaging_inputs`）

按材料身份和质量分别记录每种包装材料、说明书和标签。应识别可重复使用的运输包装并披露其重复使用核算。

- 选定流：材料特定的包装、纸张、标签、托盘、薄膜或可重复使用容器流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：按包装身份计量的领用质量减去未用退库质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行参考产品（`released_reference_product`）

这是定量参考产出，即从制造场址放行的合格成品仪器净质量，不含包装质量。

- 选定流：未另列明的测量或检验电量用仪器和器械 `cf601a2b-131a-41c5-a82f-b20a0c90cdad`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据实测放行产品净质量归一化后恰好为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`pep-ecopassport-pcr-2021`

##### 废物流

###### 制造场址的包装和标识废物（`packaging_waste`）

记录放行前产生的边角料、损坏包装、作废标签或说明书及其他包装废物。

- 选定流：与实际包装或纸张废物匹配的废物流；在构建数据包时应解析精确的 Tiangong UUID
- 流属性/单位：质量 / kg
- 数量规则：按材料和去向计量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`pep-ecopassport-pcr-2021`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可分离的产品、路线、批次和单元过程 | 只要直接记录能够代表产品，就应通过细分生产线、路线、批次和计量表来避免分配。 | `iso-14044-2006`; `pep-ecopassport-pcr-2021` |
| `allocation_physical_causality` | 共享公用工程、场址服务、设备和废物 | 无法细分时，采用最能代表资源使用或排放的有记录物理或因果驱动因素，例如计量能量、机器时间、测试台时间、处理质量或合格件数。只有在不存在充分物理关系时，经济分配才可在论证后使用。 | `pep-ecopassport-pcr-2021`; `eu-pef-method-2021` |
| `allocation_rework_returns` | 返工循环和退库 | 将可返工仪器和未用材料返回原过程或库存平衡；不得同时把它们计作废物或额外产品产出。 | `pep-ecopassport-pcr-2021` |
| `allocation_recycling_handoff` | 可回收制造废物 | 按实测交接量和去向记录废物。不得在前景制造数据集中计入替代原生生产的抵扣；交接后的任何回收收益或负荷应在下游情景中透明建模。 | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `allocation_disclosure` | 每个已分配清单行 | 披露共享总量、分配驱动因素、分子、分母、所得分配因子、受影响的过程和流、期间，以及分配具有实质影响时的敏感性。 | `iso-14044-2006`; `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_inputs` | `materials_component_receipt` | 接收和已接受投入核算 | ERP 接收、物料清单、供应商单据和秤量记录 | 投入身份；供应商；批次；Tiangong 流 UUID；数量；单位；毛质量；皮重；净质量；接受质量；退回质量；日期 | 按投入身份核对采购接收、BOM 领用和校准秤量记录 | kg 或已解析投入单位 | 每批；按月汇总 | 完整报告期，有条件时通常为连续 12 个月 | 范围内每个制造场址 | 按身份和场址汇总已接受质量；按净放行产品质量归一化 | 采购接收；BOM 版本；供应商规范；秤校准；核对签字 |
| `cp_receipt_rejects` | `materials_component_receipt` | 接收拒收品和损坏包装 | 不合格品和废物转移记录 | 废物身份；危险属性；质量；单位；退回或废物状态；去向；日期 | 称量每种拒收物流，并单独核对供应商退回 | kg | 每次事件；按月汇总 | 完整报告期 | 范围内每个接收区域 | 按废物身份和去向汇总质量；排除仍属于产品的供应商退回 | 不合格报告；秤量记录；废物联单；退货授权 |
| `cp_preparation_materials` | `parts_electronics_preparation` | 厂内准备消耗材料 | 材料领用和退库记录 | 路线；投入身份；领用量；退库量；单位；批次；日期 | 对每条纳入路线核对领用量和退库量 | kg 或已解析投入单位 | 每批；按月汇总 | 完整报告期 | 每条纳入的厂内准备路线 | 消耗量等于领用量减去未用退库量；按放行质量归一化 | ERP 领用/退库记录；路线卡；库存核对 |
| `cp_preparation_energy` | `parts_electronics_preparation` | 准备用电和能源载体 | 电表、设备日志和生产记录 | 表计 id；起止读数；能源载体；单位；路线；运行时间；分配驱动因素；期间 | 优先直接分表计量；否则计算有记录的共享电表份额 | kWh 或 MJ | 连续或每批；按月汇总 | 完整报告期 | 每条纳入的准备路线 | 汇总直接能耗或应用披露的因果分配；按放行质量归一化 | 电表校准；公用工程账单；设备日志；分配工作表 |
| `cp_prepared_subassemblies` | `parts_electronics_preparation` | 已接受准备产出 | 路线卡和秤量记录 | 分总成身份；型号；路线；合格数量；净质量；单位；转移日期 | 在转移时称量，或通过已验证的件数转质量方法换算 | kg | 每批 | 完整报告期 | 每条纳入的准备路线 | 按路线和型号汇总已接受产出；按放行质量归一化 | 转移记录；秤校准；检验放行 |
| `cp_preparation_waste` | `parts_electronics_preparation` | 准备废物 | 废物日志和转移单据 | 废物身份；危险属性；质量；单位；路线；去向；日期 | 按废物流称量，并与外部转移单据核对 | kg | 每次事件；按月汇总 | 完整报告期 | 每条纳入的准备路线 | 按废物身份和去向汇总；按放行质量归一化 | 秤量记录；废物联单；处理接收单 |
| `cp_preparation_emissions` | `parts_electronics_preparation` | 准备过程直接排放 | 监测和排放记录 | 物质；环境介质；浓度；流量或体积；实测质量；计算因子；期间 | 使用校准的直接监测，或根据监测浓度和排放体积计算 | 已解析基本流单位 | 过程控制或许可要求的监测频率 | 完整报告期 | 范围内每个直接排放点 | 按物质和介质汇总实测或计算排放；按放行质量归一化 | 校准记录；实验室报告；许可证报告；计算表 |
| `cp_assembly_inputs` | `final_assembly` | 装配零部件消耗 | BOM、领用、退库和路线记录 | 零部件身份；型号；领用量；退库量；单位；批次；日期 | 将产品型号 BOM 与领用量和退库量核对 | kg 或已解析零部件单位 | 每批；按月汇总 | 完整报告期 | 范围内每条总装线 | 消耗量等于按零部件统计的领用量减去未用退库量；按放行质量归一化 | BOM 版本；领用/退库记录；路线卡；核对签字 |
| `cp_assembly_energy` | `final_assembly` | 装配用电和公用工程 | 电表和生产记录 | 表计 id；起止读数；能源载体；单位；产线；运行时间；分配驱动因素；期间 | 优先直接分表计量；否则使用有记录的因果分配 | kWh 或 MJ | 连续或每批；按月汇总 | 完整报告期 | 范围内每条总装线 | 汇总直接能耗或应用披露的分配；按放行质量归一化 | 电表校准；公用工程账单；设备日志；分配工作表 |
| `cp_assembled_output` | `final_assembly` | 已装配仪器产出 | 转移和秤量记录 | 型号；批次；装配件数；净质量；单位；测试路线去向；日期 | 称量转移批次或应用已验证的件数转质量方法 | kg | 每批 | 完整报告期 | 范围内每条总装线 | 汇总转移至测试的已装配质量；按放行质量归一化 | 转移记录；秤校准；件数转质量工作表 |
| `cp_assembly_waste` | `final_assembly` | 装配废物和拒收品 | 废物和不合格记录 | 废物身份；零部件身份；危险属性；质量；返工状态；去向；日期 | 称量废物；将返工和退库记录分开保存 | kg | 每次事件；按月汇总 | 完整报告期 | 范围内每条总装线 | 仅汇总离开产品或返工循环的废物；按放行质量归一化 | 废物日志；不合格报告；废物联单 |
| `cp_test_inputs` | `calibration_functional_testing` | 进入校准或功能测试的仪器 | 测试路线和转移记录 | 型号；批次；测试程序；投入件数；投入净质量；日期 | 将转移记录与测试系统批记录核对 | kg | 每批 | 完整报告期 | 范围内每条校准和测试路线 | 按路线和型号汇总投入质量；按放行质量归一化 | 转移记录；测试系统日志；秤量或换算证据 |
| `cp_test_energy_consumables` | `calibration_functional_testing` | 测试能量和消耗品 | 电表、设备、测试系统和库存记录 | 测试路线；设备 id；功率；运行时间；计量能量；消耗品身份；领用/退回量；单位；期间 | 直接电表读数或功率乘记录运行时间；消耗品按领用减退回计算 | kWh、MJ、kg 或已解析单位 | 每批或连续；按月汇总 | 完整报告期 | 范围内每条校准和测试路线 | 按路线计算能量和消耗品使用；按合格放行质量归一化 | 电表校准；设备规范；运行日志；库存记录；计算表 |
| `cp_conforming_output` | `calibration_functional_testing` | 合格的已校准或验证产出 | 校准证书和验收记录 | 型号；序列号或批次 id；测量功能；量程；准确度或不确定度；记录能力；测试标准；结果；合格件数；净质量；日期 | 仅接受满足声明准则的单元；称量或使用已验证的件数转质量方法 | kg | 每批 | 完整报告期 | 范围内每条校准和测试路线 | 按型号和路线汇总合格净质量；按放行质量归一化 | 校准证书；测试报告；验收记录；秤量或换算证据 |
| `cp_test_rejects` | `calibration_functional_testing` | 失败单元、零件和废消耗品 | 不合格、返工和废物记录 | 身份；失效模式；质量；返工状态；退库状态；废物状态；去向；日期 | 将失败项核对到返工、退回零件和废物，避免重复计数 | kg | 每次事件；按月汇总 | 完整报告期 | 范围内每条校准和测试路线 | 剔除成功返工和退库数量后才汇总废物；按放行质量归一化 | 测试日志；不合格报告；返工闭环；废物联单 |
| `cp_packaging_product_input` | `packaging_release` | 进入包装的合格产品 | 转移和秤量记录 | 型号；批次；合格件数；净质量；随附附件；日期 | 包装前称量净产品，或应用已验证的件数转质量方法 | kg | 每批 | 完整报告期 | 范围内每条包装线 | 汇总进入包装的净产品质量；与放行质量和包装拒收品核对 | 转移记录；秤校准；产品配置记录 |
| `cp_packaging_inputs` | `packaging_release` | 包装、说明书和标签消耗 | 包装 BOM 和领用/退库记录 | 材料身份；包装层级；可重用状态；领用质量；退库质量；单位；型号；日期 | 将包装 BOM 与领用和退库质量核对 | kg | 每批；按月汇总 | 完整报告期 | 范围内每条包装线 | 消耗质量等于按材料统计的领用减未用退库；按净放行质量归一化 | 包装 BOM；供应商规范；领用/退库记录；秤校准 |
| `cp_packaging_waste` | `packaging_release` | 包装和标识废物 | 废物和作废库存记录 | 废物身份；质量；危险属性；去向；原因；日期 | 按材料称量废物，并核对作废库存销毁 | kg | 每次事件；按月汇总 | 完整报告期 | 范围内每条包装线 | 按废物材料和去向汇总；按净放行质量归一化 | 秤量记录；废物日志；销毁授权；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景清单行 | 归一化数量 = 报告期数量 / 报告期合格放行产品净质量（kg） | 报告期清单行数量；放行产品净质量 | 每 1 kg 放行参考产品的数量 | `pep-ecopassport-pcr-2021` |
| `calc_count_to_mass` | 件数记录 | 代表质量 = 件数 × 同型号和期间的实测单件平均净质量；可用时优先使用总量称重 | 件数；抽样或总净质量；样本量；型号标识 | 代表质量 kg | `pep-ecopassport-pcr-2021` |
| `calc_consumed_input` | 材料、零部件、消耗品和包装 | 消耗数量 = 领用或接收数量 − 未用退回 − 供应商退回 | 领用或接收数量；未用退回；供应商退回 | 前景消耗投入数量 | `pep-ecopassport-pcr-2021` |
| `calc_shared_utility_allocation` | 共享电力、水、燃料和公用工程 | 分配数量 = 共享实测总量 × 产品因果驱动因素数量 / 因果驱动因素总量；披露驱动因素和期间 | 共享总量；产品驱动因素；总驱动因素 | 分配的公用工程数量 | `iso-14044-2006`; `pep-ecopassport-pcr-2021` |
| `calc_test_energy` | 有运行记录的未分表测试设备 | 测试能耗 = 经验证设备功率 × 记录运行时间；另加直接计量的辅助能耗 | 设备功率；运行时间；直接计量的辅助能耗 | kWh 或 MJ 测试能耗 | `pep-ecopassport-pcr-2021` |
| `calc_mass_reconciliation` | 每个过程和报告期 | 投入 + 期初在制品 = 合格产出 + 废物 + 退回 + 期末在制品 + 有记录的质量变化；调查未解决残差 | 投入质量；期初和期末在制品；产出质量；废物；退回；有记录质量变化 | 质量平衡残差和核对状态 | `pep-ecopassport-pcr-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和全部外购投入 | 保留型号/产品族身份、被测电量、功能、量程、准确度或不确定度、记录能力、硬件配置、BOM 版本、供应商身份和精确已解析流 UUID。 | 产品规范；校准或验收记录；BOM；供应商记录；Tiangong 身份核查 |
| `dq_temporal` | 全部前景记录 | 使用一个一致的报告期，有条件时优先采用连续 12 个月；披露更短期间以及季节或批次局限。 | 带日期记录；报告期核对；代表性声明 |
| `dq_geography_technology` | 每个场址和上游链接 | 代表每个纳入制造场址和技术路线；记录汇总方法，并尽可能采用匹配实际供应地域和技术的上游数据集。 | 场址清单；路线图；生产份额；上游数据集元数据；代理论证 |
| `dq_measurement` | 表计、秤、测试系统和计算 | 为每个实测或计算量保留校准状态、精度、单位、原始读数、换算、公式和责任源系统。 | 校准证书；原始日志；计算工作表；审计轨迹 |
| `dq_completeness` | 材料、能量、水、排放和废物 | 证明对 BOM、采购、公用工程、生产、放行和废物总量的覆盖；量化并论证排除项和未解决质量平衡残差。 | 完整性矩阵；核对；截断登记；残差调查 |
| `dq_allocation` | 共享过程和公用工程 | 保留未分配总量、所选因果驱动因素、分子、分母、分配因子、受影响产品以及敏感性或论证。 | 分配工作表；表计图；生产记录；敏感性记录 |
| `dq_secondary_data` | 上下游链接数据集 | 记录来源、版本或参考日期、时间/地域/技术代表性以及每个代理或替代项。 | 数据集元数据；来源登记；代理评审 |
| `dq_reproducibility` | 完整数据包 | 独立评审者应能依据保留的原始记录、公式、映射和分配决策复现归一化数值。 | 计算工作簿或脚本；不可变提取；评审清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 参考产出应使用产品流 `cf601a2b-131a-41c5-a82f-b20a0c90cdad`、Mass 流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，且不存储数据集版本。 |  |
| `validation_reference_amount` | 归一化前景数据包 | 归一化后合格放行产品净质量应恰好等于 1 kg；包装质量应保持分离。 | `pep-ecopassport-pcr-2021` |
| `validation_category_qualifiers` | 产品身份 | 应声明被测电量、仪器功能、量程、准确度等级或不确定度、记录能力、型号或产品族、硬件配置、随附附件、校准或验收依据、场址、期间和市场地域。 | `un-cpc-3-2025`; `pep-ecopassport-pcr-2021` |
| `validation_process_coverage` | 过程图和清单 | 每个必需过程和每条适用的条件路线均应具有产品投入、能量和公用工程、产出、拒收品、废物以及存在时直接排放的关联前景记录。 | `pep-ecopassport-pcr-2021` |
| `validation_mass_reconciliation` | 每个过程和报告期 | 质量投入、合格产出、退回、在制品变化、废物和有记录的质量变化应核对平衡；每个未解决残差均应量化并评审。 | `pep-ecopassport-pcr-2021` |
| `validation_no_double_counting` | 返工、退回、废物和回收 | 同一数量不得同时计作退回产品、返工、废物和回收产出；所有交接及下游处理链接应明确。 | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `validation_allocation_disclosure` | 已分配前景数据 | 每个分配数量应暴露共享总量、驱动因素、因子、期间、受影响产品和过程，以及无法细分的原因。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `validation_downstream_separation` | 制造数据集和生命周期模型 | 不得把产品特定的分销、安装、使用、维护、使用寿命和报废情景嵌入为通用 CPC 48249 制造默认值；下游生命周期模型应明确识别并给出这些情景的来源。 | `pep-ecopassport-pcr-2021`; `eu-weee-directive-2012-19` |
| `validation_no_approximate_uuid` | 非参考清单流 | 每个具体材料、零部件、能源、废物和基本流均应使用语义精确的已解析 Tiangong 流 UUID；不得静默替代近似流或相邻 CPC 流。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 未另列明的电量测量或检验成品仪器的前景制造数据包；仅在评审后可发布为 secondary_dataset 或 background_dataset |
| downstream_use | 构建产品特定的 `process` 数据集以及下游从摇篮到厂门或从摇篮到坟墓的 `lifecyclemodel` 投影 |
| allowed_use | 用于已证明符合本语义类别边界、并由声明型号/配置、场址、技术、地域和报告期代表的产品制造清单 |
| excluded_use | 不同功能或性能仪器的直接比较；通用使用阶段或使用寿命建模；更具体 CPC 类别的产品；仅零件数据集；未披露的代理；未经评审跨异质产品族外推 |
| required_metadata | canonical PCR id；CPC 参考；产品型号或同质产品族；被测电量；功能；量程；准确度或不确定度；记录能力；硬件配置；随附附件；产品净质量；校准或验收依据；场址；路线；报告期；地域；BOM 覆盖；包装范围；上游数据集参考；截断；分配；数据质量证据 |
| required_quality_disclosure | 原始数据期间和覆盖；场址和产量覆盖；测量和校准状态；完整性和质量平衡结果；共享资源分配；上游代理选择；未解决残差；废物去向；排除的下游阶段；评审状态 |
| update_trigger | 被测功能或产品类别变化；产品或 BOM 重新设计；材料或供应商变化；制造路线、场址、技术、成品率、能源来源、包装、校准、使用情景、使用寿命或报废情景发生实质性改变；时间代表性过期；UUID 或分类身份纠正 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `pep-ecopassport-pcr-2021` | official_guidance | PEP ecopassport Program，Product Category Rules for Electrical, Electronic and HVAC-R Products，PCR-ed4-EN-2021 09 06，https://register.pep-ecopassport.org/documents（检索日期：2026-08-09） | 类别相关参考流、制造与包装边界、过程和废物覆盖、分配、原始数据采集、单位、构成材料、数据质量及下游生命周期阶段 |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279，Annex I，Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期：2026-08-09） | 生命周期系统边界、上游数据代表性、分配层级、实质性、数据质量和披露 |
| `eu-weee-directive-2012-19` | official_guidance | Directive 2012/19/EU on waste electrical and electronic equipment，合并文本，https://eur-lex.europa.eu/eli/dir/2012/19/2024-04-08（检索日期：2026-08-09） | 将监测和控制仪器识别为电气电子设备，并明确下游收集、处理、回收、再循环和处置情景要求 |
| `iso-14044-2006` | standard | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，https://www.iso.org/standard/38498.html（2022 年确认仍现行；检索日期：2026-08-09） | 目标与范围、清单、分配、数据质量、报告、解释和评审原则 |
| `un-cpc-3-2025` | dataset | United Nations Statistics Division，Central Product Classification Version 3.0 structure，2025 年通过，https://unstats.un.org/unsd/classifications/econ（检索日期：2026-08-09） | CPC 48249 的官方分类坐标和剩余产品类别身份 |
