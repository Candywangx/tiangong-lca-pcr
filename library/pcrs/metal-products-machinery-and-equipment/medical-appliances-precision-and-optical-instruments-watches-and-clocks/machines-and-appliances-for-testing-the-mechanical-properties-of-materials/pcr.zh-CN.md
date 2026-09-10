---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.machines-and-appliances-for-testing-the-mechanical-properties-of-materials
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 材料机械性能试验机器及器械

## 1. 范围与适用性

本 PCR 适用于以测试材料机械性能为主要功能的完整机器及器械制造前景数据包。覆盖的配置包括静态拉伸、压缩、弯曲、硬度、冲击、扭转、疲劳及类似机械性能试验系统，但须以完整机器或器械的形式供应。代表性产品是万能材料试验机；声明的配置可以采用机电式、伺服液压式或其他试验原理。

前景边界始于制造场址接收外购材料、零件、子组件、传感器、控制器、含软件硬件和包装，止于完整机器在工厂大门完成适用的检查、校准、验证和放行。外购投入的上游生产由关联的上游数据集表示。除非声明的研究明确扩展边界，否则分销、客户现场安装、使用阶段试验、维护、交付后校准和报废处理均不属于本制造数据包。

单独供应的零部件和附件不在范围内，因为 CPC 3.0 将该子类的零部件和附件归入 48285。试验服务、实验室运营、材料试样、光学显微镜、物理或化学分析仪器以及一般过程控制设备也不在范围内。夹具、夹头、引伸计、载荷传感器、控制器和含软件硬件仅在其属于交付的完整机器配置时纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.machines-and-appliances-for-testing-the-mechanical-properties-of-materials` |
| classification_refs | CPC 3.0:48262，精确范围参考 |
| covered_products | 测试材料机械性能的完整机器及器械，包括交付的载荷框架或机体、驱动与控制系统、力或位移测量链、所需含软件硬件及配置特定的集成附件 |
| excluded_products | CPC 3.0:48285 中单独供应的零部件和附件；材料试验服务；试样；光学显微镜；物理或化学分析仪器；一般过程控制设备；客户现场使用、维护和报废服务 |
| representative_product | 配置用于静态拉伸和压缩试验的完整万能材料试验机 |
| production_route | 产品特定零件和子组件的接收与准备；有条件的场内制造与表面处理；机械和电气装配；控制器与软件集成；检查、校准、验证与最终放行；有条件的销售包装 |
| market_state | 制造完成的成品；工厂生产混合；按声明的交付配置完成放行 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造工厂大门处、按声明交付配置完成的材料机械性能试验机器或器械 |
| How much | 1 kg 已放行完整机器净质量；单独供应的附件和出厂包装不计入，除非声明的销售配置明确纳入 |
| How well | 完整、功能正常，并已通过适用的一般检查、测量系统校准或验证以及配置特定性能检查后放行 |
| How long or cycle | 一个声明的生产期间或生产批次；已知时将使用寿命和可完成试验次数作为元数据报告，但不改变质量参考流 |
| reference_flow_link | 过程 `calibration_verification_and_release` 的输出 `released_testing_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 试验材料机械性能用机器及器械 `f88ff979-7acf-4c6d-8a10-710337b61179` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 试验原理和支持的试验模式；额定力或容量；驱动类型；框架或机体配置；力测量等级或声明准确度；位移和应变测量配置；纳入的载荷传感器、夹头、夹具、引伸计、控制器、计算机和含软件硬件；产品净质量；纳入和排除的附件；包装是否纳入；生产地域；生产期间；适用的放行和校准标准 |

构建前景数据包时，`必需限定信息` 中列出的每项信息都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 已放行的完整试验机器 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景清单归一化到 1 kg 已放行产品净质量。应称量净质量，或依据经核对的产品特定物料清单推导净质量，并说明是否纳入集成附件。 |
| `input_mass_consistency` | 材料、部件、耗材、包装、废料和废物质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 换算记录的质量单位；在前景记录中保留原单位和换算因子。 |
| `energy_carrier_measurement` | 外购电力和燃料 | 所选精确能源载体流的能量属性 | kWh、MJ 或该载体的参考单位 | 按能源载体记录计量或发票支持的数量。不得将电力换算为质量，也不得在关联其精确上游数据集之前合并不同能源载体。 |
| `configuration_denominator` | 多型号或多配置生产 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分配分母只能包含代表型号或有合理依据的产品族中的合格放行质量；返工品和不合格品不得虚增放行产出。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_purchased_inputs` | 外购材料、零件、子组件、电子件、传感器、驱动器、控制器和包装 | 记录跨越制造边界的每项材料投入，并关联与材料、技术、地域和供应商状态一致的最具体可用上游数据集。不得将外购部件视为无负荷投入。 | `eu-pef-2021` |
| `boundary_foreground_operations` | 制造场址控制的作业 | 纳入接收与准备、适用的机加工或制造、表面处理、装配、布线、控制器与软件集成、校准与验证、返工、最终检查，以及为交付配置执行的包装。 | `eu-pef-2021`; `instron-3340-system-support` |
| `boundary_direct_flows` | 场址能源、水、耗材、废物和直接排放 | 纳入可计量或可追溯的电力、燃料、工艺用水、耗材、废物和废料，以及纳入作业产生的直接基本流排放。没有默认数量不构成省略某流的许可。 | `eu-pef-2021` |
| `boundary_release_evidence` | 校准、验证与放行 | 纳入适用的一般检查、力测量验证、引伸计校准和性能等级确认所归属的资源以及不合格或返工产出；保留适用放行标准和记录标识。 | `iso-7500-1-2018`; `iso-9513-2012` |
| `boundary_exclusions` | 制造以外活动 | 排除出厂分销、客户现场安装、产品使用、交付后的常规校准与维护以及报废，除非研究明确扩展边界。披露研发、办公、销售、基础设施和资本设备的排除；若声明的研究方法要求纳入或其具有实质性，则应纳入。 | `eu-pef-2021` |
| `boundary_no_data_cutoff` | 潜在相关前景流 | 不得仅因缺少数据而省略材料或能源流。记录每项排除、原因和使用的实质性检查；尚未解决的潜在重大排除将使验证结论不确定。 | `eu-pef-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、零件、子组件、电子件、传感器、驱动器、控制器和包装以有记录的供应商状态到达制造场址 |
| starting_condition_role | 制造大门投入；上游生产由关联的供应商特定或适当次级数据集表示，而不在前景过程中重复建模 |
| product_classification_scope | 完整 CPC 3.0:48262 试验机器及器械；单独供应的 CPC 3.0:48285 零部件和附件不属于参考产品 |
| recursive_input_rule | 本身属于完整 CPC 3.0:48262 机器的外购或转移投入应作为显式产品投入并具有自己的上游数据集；不得递归重建其制造，也不得将其质量静默并入通用机械 |
| upstream_dataset_requirement | 将每个外购材料和部件组关联到最具体的可用上游数据集，优先采用供应商特定数据，并匹配材料、制造技术、地域和交付状态 |
| disclosure | 声明所代表型号或产品族逻辑、试验原理、额定容量、驱动和框架配置、交付的测量与附件组合、产品净质量、包装处理、生产场址和期间、场内与外购作业、分配方法、排除项和数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_receipt_and_preparation` | 部件接收与准备 | required | 始终纳入；仅当报告场址执行时，纳入场内机加工、制造、清洗和表面处理 | 将外购材料、零件和子组件转化为经检验并可用于装配的准备投入 | 转移至装配的准备部件和子组件 kg |
| `machine_assembly_and_integration` | 机器装配与集成 | required | 始终纳入；包括交付的机械、电气、传感、控制和含软件配置 | 装配载荷框架或机体、驱动器、载荷与位移测量链、控制器、布线、安全装置和集成附件 | 转移至放行试验的已装配机器 kg |
| `calibration_verification_and_release` | 校准、验证与放行 | required | 始终纳入；具体检查取决于试验原理、测量系统和声明标准 | 检查并验证机器，修正或记录返工，放行合格成品；声明时纳入销售包装 | 1 kg 已放行完整机器净质量 |

### 过程：部件接收与准备（`component_receipt_and_preparation`）

#### 输入

##### 产品流

###### 产品特定材料、零件和子组件（`purchased_materials_components`）

按产品 BOM 和上游数据集支持的聚合层级，记录所有接收的结构金属、铸件、机加工件、立柱、丝杠或执行器、液压或气动件、外壳、紧固件、电缆、电路板、电源、传感器、载荷传感器、控制器、计算机及其他产品特定投入。

- 选定流：在构建前景数据包时选择的精确供应商特定或技术匹配产品流
- 流属性/单位：质量 / kg；若部件数据集采用其他精确参考属性和单位，则保留质量换算
- 数量规则：归属于合格生产的接收数量，并与采购、库存和 BOM 记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_receipts`
- 来源：`eu-pef-2021`; `instron-3340-system-support`

###### 准备作业能源和运行物料（`preparation_energy_supplies`）

记录前景场址内接收、检验、清洗、机加工、制造和表面处理所使用的电力、燃料、水、切削液、清洗剂、磨料、涂料、处理化学品及其他物料。

- 选定流：针对场址和期间选择的精确电力、燃料、水和耗材流
- 流属性/单位：所选精确流的参考属性 / 参考单位
- 数量规则：依据计量、发票、批次领用或其他可追溯记录，将消耗归属到代表性生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_operations_energy_consumables`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备部件和子组件（`prepared_components`）

记录从准备过程转移至最终装配的实测或核对质量。该内部产品流用于防止准备与装配之间重复计算。

- 选定流：为前景数据包创建的内部已准备部件转移流
- 流属性/单位：质量 / kg
- 数量规则：扣除已记录准备损失后、经 BOM 核对的转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_and_receipts`

##### 废物流

###### 准备作业废料和废物（`preparation_scrap_waste`）

当场内执行准备作业时，按处理去向记录金属切屑与边角料、不合格零件、废磨料与废液、废水、涂装废物和包装废物。

- 选定流：构建前景数据包时按材料和处理路线选择的精确废物流
- 流属性/单位：质量 / kg；无法直接获得质量时，可采用具有记录密度换算的体积
- 数量规则：归属于代表性生产的称量或联单废物；场内可重复利用的返回物应单独可见，不计为送出场外的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_direct_emissions`

##### 基本流

###### 准备作业直接排放（`preparation_direct_emissions`）

记录纳入的机加工、清洗、涂装、固化或燃料燃烧产生的实测或计算排放，包括相关大气和水体排放。不得为适用作业虚构零排放。

- 选定流：与排放物质和环境介质匹配的精确基本流
- 流属性/单位：质量 / kg
- 数量规则：场址测量，或依据采集的活动数据及有引用的适用方法或因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_direct_emissions`

### 过程：机器装配与集成（`machine_assembly_and_integration`）

#### 输入

##### 产品流

###### 已准备部件和子组件投入（`prepared_components_input`）

将准备好的框架或机体、驱动器、测量链部件、控制器、布线、安全装置、计算机和配置特定的集成附件转入装配，不得再次添加上游负荷。

- 选定流：与 `prepared_components` 相同的内部已准备部件转移流
- 流属性/单位：质量 / kg
- 数量规则：在考虑有记录的过程间库存变化后，等于上游内部转移数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_integration`

###### 装配能源和耗材（`assembly_energy_consumables`）

记录归属于交付产品的电力、压缩空气、燃料、润滑剂、胶黏剂、焊料、布线耗材、清洗材料、含软件介质或硬件及其他装配与集成投入。

- 选定流：针对场址和期间选择的精确能源载体与耗材产品流
- 流属性/单位：所选精确流的参考属性 / 参考单位
- 数量规则：依据计量、发票、工单领用或其他可追溯记录，将消耗分配至代表性生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_integration`
- 来源：`eu-pef-2021`; `instron-3340-system-support`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待放行试验的已装配机器（`assembled_machine`）

记录进入最终检查和校准的完整装配配置，包括声明的载荷框架或机体、控制器、测量链、安全装置、含软件硬件和集成附件。

- 选定流：为前景数据包创建的内部已装配机器转移流
- 流属性/单位：质量 / kg
- 数量规则：转移至放行试验的实测或 BOM 核对装配质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_integration`
- 来源：`instron-3340-system-support`

##### 废物流

###### 装配废物和不合格部件（`assembly_waste`）

按材料和处理去向记录离开装配过程的不合格电子或机械零件、电缆和金属边角料、废耗材及其他废物。返工物保留在返工循环中，不得作为场外废物重复计算。

- 选定流：构建前景数据包时按材料和处理路线选择的精确废物流
- 流属性/单位：质量 / kg
- 数量规则：归属于代表性生产的称量废物、按实测代表质量换算的计数废物或联单废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_integration`

##### 基本流

### 过程：校准、验证与放行（`calibration_verification_and_release`）

#### 输入

##### 产品流

###### 已装配机器投入（`assembled_machine_input`）

将已装配机器转入最终检查和校准，不得重复部件负荷。

- 选定流：与 `assembled_machine` 相同的内部已装配机器转移流
- 流属性/单位：质量 / kg
- 数量规则：在考虑有记录的库存变化后，等于进入放行试验的内部输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_calibration_release`

###### 放行试验能源、试样、耗材和包装（`release_inputs`）

记录电力、液压或气动能源、试样和一次性夹具、校准相关耗材、返工替换件，以及在工厂大门前纳入的销售包装。参考标准器和可重复使用的校准设备作为设备元数据报告，除非声明的研究方法要求计入其资本负荷。

- 选定流：针对场址和交付配置选择的精确能源、耗材、试验材料、替换件和包装流
- 流属性/单位：所选精确流的参考属性 / 参考单位
- 数量规则：依据计量、领用或采购记录，归属于检查、校准、验证、返工和声明包装的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_release`
- 来源：`iso-7500-1-2018`; `iso-9513-2012`; `eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行试验机器（`released_testing_machine`）

这是定量参考产品。该产品是按声明交付配置完成的 CPC 3.0:48262 机器或器械，并已通过适用的放行检查。

- 选定流：试验材料机械性能用机器及器械 `f88ff979-7acf-4c6d-8a10-710337b61179`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg 已放行产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：`unsd-cpc-3-0-2025`

##### 废物流

###### 放行试验废物和最终不合格品（`release_test_waste`）

按处理去向记录消耗或损坏的试样、替换部件、废弃包装、废液以及最终不合格机器或零件。返工投入和能源仍归属于合格放行产出。

- 选定流：构建前景数据包时按材料和处理路线选择的精确废物流
- 流属性/单位：质量 / kg
- 数量规则：归属于代表性生产的称量废物、按实测代表质量换算的计数废物或联单废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_release`

##### 基本流

###### 放行试验直接排放（`release_test_direct_emissions`）

记录燃料使用、液压油损失、制冷剂或其他适用放行作业产生的直接释放。若不存在适用排放源，不创建零值基本流，而应保留适用性评估。

- 选定流：与排放物质和环境介质匹配的精确基本流
- 流属性/单位：质量 / kg
- 数量规则：场址测量，或依据采集的活动数据及有引用的适用方法或因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已放行完整机器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_calibration_release`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共享制造线、公用设施和放行试验作业 | 首先通过过程细分、型号或工单特定 BOM，以及分表计量或其他活动数据追踪方式避免分配。 | `eu-pef-2021` |
| `allocation_physical_relationship` | 细分后仍然共享的投入和排放 | 无法实际细分时，采用能够反映资源使用的有记录物理关系进行分配，例如机器小时、试验小时、实测能源需求、处理质量或工单工时。不同配置在质量或加工上存在重大差异时，不得采用产品件数。 | `eu-pef-2021` |
| `allocation_other_relationship` | 缺乏可辩护物理关系的共享负荷 | 仅在说明过程细分和物理分配均不可行后，才采用经济关系或其他有依据关系；披露分配基准、期间、产品池和结果敏感性。 | `eu-pef-2021` |
| `allocation_scrap_rework` | 废料、可重复使用返回物、返工和不合格品 | 将返工所用耗材和能源归属于合格放行产出；区分场内返回废料与离场废物，防止内部转移重复计算。任何再循环或避免负荷建模均属于声明的下游方法，并应单独披露。 | `eu-pef-2021` |
| `allocation_no_unreported_coproduct` | 可销售副产品或回收材料 | 识别所有可销售共产品或回收材料。若不存在，应明确说明；若存在，应采用声明的分配层级并保留数量、去向和分配证据。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_receipts` | `component_receipt_and_preparation` | 外购投入和已准备部件转移 | 产品特定 BOM、采购与接收记录、库存移动、零件质量记录、供应商规格 | model_id; configuration_id; part_id; material_or_component; supplier; supplier_state; quantity_received; unit; measured_or_spec_mass; opening_stock; closing_stock; quantity_transferred; upstream_dataset_ref | 将放行序列号或工单与 BOM、接收、库存和实测或受控零件质量记录核对 | 原始记录单位和 kg | 每批次或工单；至少每月汇总 | 与放行产出相同的代表期间，通常为连续 12 个月；较短完整生产活动可覆盖其全周期 | 对代表产品执行前景准备的全部场址 | 汇总归属投入，调整库存变化，通过 `calc_reference_normalization` 归一化，并保留型号和配置分层 | 批准的 BOM 版本、采购或接收记录、库存台账、称量/校准证据、供应商规格、上游数据集选择记录 |
| `cp_operations_energy_consumables` | `component_receipt_and_preparation` | 准备能源、水、物料和适用场内作业 | 仪表、发票、批次领料、工单和运行日志 | operation_id; work_order; energy_or_supply_id; opening_reading; closing_reading; quantity; unit; allocation_driver; downtime; included_models | 优先使用分表计量和工单领料；否则将场址仪表或发票与运行日志及有依据的分配驱动核对 | 精确来源单位 | 连续或每批次；每月汇总 | 与放行产出相同的代表期间 | 每个前景准备场址 | 有证据时扣除非生产用途，按第 7 节分配，并通过 `calc_reference_normalization` 归一化 | 仪表校准、发票、领料单、工单、运行小时、分配工作表 |
| `cp_waste_and_direct_emissions` | `component_receipt_and_preparation` | 准备废物、废料和直接排放 | 称重单、废物联单、处理记录、排放监测、活动记录和因子 | waste_or_substance_id; quantity; unit; destination_or_compartment; treatment_route; internal_return; activity_data; factor; factor_source; calculation | 按路线称量或联单记录废物；测量排放，或采用有引用的适用方法依据采集活动数据计算 | kg 或精确监测单位 | 每次运输、批次或监测间隔；每月汇总 | 与放行产出相同的代表期间 | 每个前景准备场址 | 区分场内返回物与场外废物，按物质和介质计算排放，并通过 `calc_reference_normalization` 归一化 | 称重单、联单、实验室或连续监测记录、计算表、因子来源 |
| `cp_assembly_integration` | `machine_assembly_and_integration` | 内部部件转移、装配投入、能源、废物和已装配机器产出 | 工单、序列号制造记录、领料记录、仪表、BOM 核对、不符合项和废物记录 | serial_or_lot; configuration_id; input_transfer_mass; assembly_input_id; quantity; unit; energy_reading; assembly_hours; rework_quantity; waste_quantity; waste_route; assembled_mass | 将记录追溯至代表性序列号、配置或工单；核对内部转移和装配质量 | 原始记录单位和 kg | 每工单或班次；每月汇总 | 与放行产出相同的代表期间 | 执行最终机械或电气集成的每个场址 | 汇总配置特定数量，仅按第 7 节分配剩余共享负荷，并通过 `calc_reference_normalization` 归一化 | 工单、BOM 领料记录、经校准仪表、不符合项报告、称量记录、废物联单 |
| `cp_calibration_release` | `calibration_verification_and_release` | 放行试验投入、校准证据、包装、返工、不合格品和已放行产品 | 序列号级检查与校准记录、适用标准和等级、试验日志、仪表与领料记录、包装 BOM、放行证书、净质量 | serial_id; configuration_id; applicable_standard; force_or_measurement_class; inspection_record; calibration_record; verification_result; test_energy; specimen_or_consumable; rework_parts; reject_mass; packaging_item; packaging_mass; net_released_mass; release_date | 将每个放行序列号或抽样批次关联到适用检查、校准、验证、返工、包装和净质量记录 | 精确来源单位和 kg | 每个放行序列号或定义批次；无法按序列号计量能源时至少每月汇总 | 与放行产出相同的代表期间 | 每个放行和包装场址 | 将合格产出所归属的失败尝试和返工纳入，单列包装，并通过 `calc_reference_normalization` 归一化 | 校准证书、可追溯标准或程序、检查清单、试验日志、放行证书、经校准秤记录、包装规格 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景投入、废物和直接排放 | 归一化数量 = 代表期间归属数量 / 同一代表产品池内合格放行机器净质量。相除前将分子与分母换算为兼容单位。 | 归属数量；合格放行净质量；单位换算；分配证据 | 每 1 kg 已放行完整机器净质量的数量 | `eu-pef-2021` |
| `calc_stock_adjusted_input` | 跨期间的外购投入 | 消耗投入 = 期初库存 + 接收量 - 期末库存 - 有记录退货；按相同零件、材料、场址和期间计算。 | 期初库存；接收量；期末库存；退货 | 归属消耗投入 | `eu-pef-2021` |
| `calc_mass_reconciliation` | 产品、废料、废物、排放和库存变化 | 将含质量投入与放行产品、场外废物、直接质量排放、有记录场内返回物及库存或在制品变化核对。应调查并披露残差，不得强制归零。 | 质量投入；放行质量；废物；质量排放；场内返回物；库存和在制品变化 | 质量平衡残差和核对说明 | `eu-pef-2021` |
| `calc_shared_activity_allocation` | 共享公用设施与作业 | 分配数量 = 共享实测数量 × 代表产品的有记录驱动量 / 相同设备、场址和期间的驱动量总计。驱动量应满足第 7 节。 | 共享数量；产品驱动量；总驱动量；分配期间 | 归属共享数量 | `eu-pef-2021` |
| `calc_internal_transfer_consistency` | 已准备部件和已装配机器转移 | 在考虑有记录的库存变化后，供给前景过程的输出应等于接收过程的输入；内部转移不附加上游负荷。 | 供给过程输出；接收过程输入；过程间库存变化 | 转移核对结果 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_product_identity` | 参考产品和产品池 | 记录应识别所代表的型号、配置、试验原理、额定容量、驱动和框架类型、测量系统、集成附件、包装处理以及序列号或批次总体。 | 产品规格、BOM 版本、配置记录、序列号或批次登记 |
| `dqr_measurement_traceability` | 质量、能源、校准、排放和分配驱动量 | 保留仪器身份、校准状态、读数期间、单位、换算和记录责任人；校准与验证证据应注明适用标准、程序以及达到的等级或结果。 | 校准证书、仪表日志、试验报告、受控程序、换算工作表 |
| `dqr_temporal_consistency` | 全部前景记录 | 投入、产出、库存变化、废物和放行质量应覆盖相同代表期间。较短生产活动仅在覆盖完整活动且已披露时可接受。 | 期间核对与覆盖报告 |
| `dqr_site_completeness` | 多场址制造 | 纳入在声明前景边界内执行作业的每个场址并识别场址间转移；无合理依据时不得用一个场址代表完整路线。 | 场址图、工艺路线、转移记录、场址覆盖矩阵 |
| `dqr_bom_and_supplier_data` | 外购投入 | 使用产品特定 BOM，并优先采用供应商特定或技术、地域和状态匹配的上游数据集。披露代理数据及其质量占比。 | BOM、供应商规格、数据集选择与代理登记 |
| `dqr_completeness_and_gaps` | 潜在相关流 | 记录纳入和排除的作业与流、缺失数据处理、实质性评估、分配和未解决缺口。不得用未标记估算替代不存在的类别级默认值。 | 完整性检查表、排除日志、缺口登记、分配工作表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品 UUID 应为 `f88ff979-7acf-4c6d-8a10-710337b61179`，参考流属性 UUID 应为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 应为 `93a60a57-a4c8-11da-a746-0800200c9a66`，归一化参考数量应恰为 1 kg。 | `unsd-cpc-3-0-2025` |
| `validate_category_scope` | 产品身份 | 代表产出应为 CPC 3.0:48262 范围内的完整机械性能试验机器或器械。CPC 3.0:48285 范围内单独供应的零件或附件、试验服务或非机械分析仪器均不符合类别要求。 | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | 数据集元数据和参考流备注 | 第 3 节列出的每项限定信息均应存在，并与产品规格、BOM 和放行证据一致。 | `iso-7500-1-2018`; `iso-9513-2012`; `instron-3340-system-support` |
| `validate_process_coverage` | 前景过程图 | 三个必需过程均应得到表示。每项适用的场内制造、表面处理、装配、软件或控制器集成、校准、验证、返工和包装作业均应纳入，或明确说明其不属于交付配置。 | `eu-pef-2021`; `instron-3340-system-support` |
| `validate_release_evidence` | 已放行产品 | 保留一般检查、适用的力测量校准或验证证据、达到的性能等级或结果；纳入引伸计时还应保留引伸计校准证据。缺少适用放行证据即不符合要求。 | `iso-7500-1-2018`; `iso-9513-2012` |
| `validate_bom_and_upstream_links` | 外购材料与部件 | 产品特定 BOM 应与代表配置核对，每个材料或部件组应具有关联上游数据集，或明确披露尚未解决的缺口。潜在重大无负荷投入不符合要求。 | `eu-pef-2021` |
| `validate_allocation` | 共享投入和作业 | 分配应遵循第 7 节，并保留共享实测数量、驱动量、分母、期间、产品池和理由。无支持的分配，或对存在重大差异配置采用产品件数分配，均不符合要求。 | `eu-pef-2021` |
| `validate_mass_and_internal_transfers` | 含质量清单和前景链接 | 内部转移输出和输入应在考虑库存变化后核对，并应计算、调查和披露第 8 节质量平衡残差。强制或无法解释的残差使验证结论不确定。 | `eu-pef-2021` |
| `validate_temporal_site_completeness` | 前景证据 | 投入、产出、库存、废物和放行质量应具有一致期间并覆盖全部前景场址。无合理说明的场址或期间覆盖缺失使验证结论不确定。 | `eu-pef-2021` |
| `validate_no_unlabelled_estimates` | 前景数量 | 每项数量均应来自采集、依据采集数据计算，或按批准的建模方法明确识别。未标记估算、虚构零值和无支持类别默认值均不符合要求。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂大门处完整机械性能试验机器的产品特定或明确定义的产品族制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 作为完整试验机械的上游供给用于产品系统；仅在产品配置、边界、地域、期间、数据质量和分配兼容时用于比较或筛选 |
| excluded_use | 单独零部件或附件；实验室试验服务；使用阶段电力或耗材；交付后维护和校准服务；报废建模；未做功能调整而比较容量、准确度、配置或纳入附件存在重大差异的机器 |
| required_metadata | 使用的规范 PCR id 和版本；CPC 3.0:48262；型号或产品族定义；试验原理和模式；额定容量；驱动和框架类型；力与应变测量配置；纳入的控制器、硬件、含软件设备、载荷传感器、夹头、夹具、引伸计及其他附件；净质量；包装处理；场址和地域；生产期间；分配；上游数据集选择；放行标准与结果；数据缺口与排除项 |
| required_quality_disclosure | BOM 覆盖；供应商特定和代理数据集的质量占比；前景场址和时间覆盖；仪表和质量测量可追溯性；校准与放行证据；废物路线覆盖；质量平衡残差；分配驱动量；排除项；缺失数据处理；与预期用途相关的不确定性或敏感性 |
| update_trigger | 产品配置或额定容量变化；驱动、框架、控制器、测量链或附件重新设计；材料或供应商路线变化；制造场址或过程变化；放行或校准标准变化；分配或包装变化；代表性数据超过声明有效期；获得新的供应商数据；未解决缺口变得重大 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | 联合国统计司，*Central Product Classification Version 3.0 Explanatory Notes*，2025-06-30 更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-09） | CPC 48262 官方身份，以及零部件和附件归入 CPC 48285 的边界 |
| `iso-7500-1-2018` | `standard` | ISO 7500-1:2018，*Metallic materials — Calibration and verification of static uniaxial testing machines — Part 1: Tension/compression testing machines — Calibration and verification of the force-measuring system*，https://www.iso.org/standard/72572.html（检索日期 2026-08-09） | 适用静态拉伸/压缩机器的一般检查、力测量校准或验证、施力附件和性能等级证据 |
| `iso-9513-2012` | `standard` | ISO 9513:2012，*Metallic materials — Calibration of extensometer systems used in uniaxial testing*，https://www.iso.org/standard/41619.html（检索日期 2026-08-09） | 纳入接触式或非接触式轴向/径向引伸计系统时的校准证据 |
| `instron-3340-system-support` | `handbook` | Instron，*3340 Series Single Column Table Frames — System Support*，M10-16280-EN，https://www.instron.com/en/resources/literature/3340-single-column-table-frames-system-support/（检索日期 2026-08-09） | 代表性试验系统部件分解：载荷框架、控制器、载荷链、载荷传感器、夹头或夹具、引伸计和试验软件 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会，Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods，CELEX:32021H2279，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-09） | 产品特定 BOM 和公司特定制造数据、前景与上游数据边界、分配层级、数据质量、完整性、验证和披露规则 |
