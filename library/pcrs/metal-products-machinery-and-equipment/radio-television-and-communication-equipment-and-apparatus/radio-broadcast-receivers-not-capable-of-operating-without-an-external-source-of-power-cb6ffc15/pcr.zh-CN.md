---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-not-capable-of-operating-without-an-external-source-of-power-cb6ffc15
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 用于机动车辆、不能在无外部电源情况下工作的无线电广播接收机

## 1. 范围与适用性

本 PCR 适用于为安装和使用于道路机动车辆而设计、依赖车辆外部电源的无线电广播接收机成品。包括独立主机，以及以无线电接收为声明功能的集成式接收/音频/信息娱乐单元。产品可集成显示、音频放大、媒体播放、连接或导航功能，但必须声明组合功能及交付配置。

前景制造数据包从采购的电子元器件与组件、机械件、显示器、放大或导航模块、线束、安装附件、耗材和包装材料进入报告组织收货门开始，覆盖交付制造商大门成品所需的受控装配、集成、编程、功能与电气测试、返工、废物准备和包装。若材料与采购部件生产不受报告组织控制，应使用上游数据集；组织自行实施的步骤则应纳入前景。

不包括可不依赖外部电源工作的便携式或电池供电接收机、非车载接收机、单独交付的天线/扬声器/显示器/放大器/导航设备/线束/安装件、整车、维修服务，以及仅适用于单一车型或专有 SKU 的类别规则。产品特定数据集可以代表单一型号，但必须说明其如何符合本类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-not-capable-of-operating-without-an-external-source-of-power-cb6ffc15 |
| classification_refs | CPC 3.0: 47312, exact |
| covered_products | 道路机动车辆用、依赖车辆外部电源的无线电广播接收机成品，包括独立主机，以及可选集成显示、放大、媒体、连接或导航功能的无线电/音频/信息娱乐单元。 |
| excluded_products | 自供电或便携式接收机；非车载接收机；单独的天线、扬声器、显示器、放大器、导航设备、线束或安装件；整车；维修服务；仅限单一车型的方法学。 |
| representative_product | 经测试、配置并在制造商大门交付的车载无线电广播接收机成品或集成式接收/音频/信息娱乐单元。 |
| production_route | 采购部件与材料收货；适用时进行电子装配；机械及功能模块集成；固件配置；功能与电气测试；返工和废物准备；包装与出厂。 |
| market_state | 制造商大门处的制造完成单元；随附线束和安装附件以及包装/交付状态分别声明。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 道路机动车辆用、依赖车辆外部电源的无线电广播接收机成品。 |
| How much | 制造商大门处 1 kg 合格成品接收机净质量；包括作为产品组成交付的线束与安装附件，不包括单独报告的运输包装。 |
| How well | 已完成声明的无线电、组合功能和外部供电测试，并按独立主机或集成单元形态放行；支持频段、车辆外部电源要求、组合功能和交付配置均已声明。 |
| How long or cycle | 一个声明的制造报告期；使用寿命和车内运行不属于此前景制造参考流，若纳入须另行声明使用情景。 |
| reference_flow_link | `packaging_and_delivery` 的合格成品输出，归一化为 1 kg 交付接收机净质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 无需外接电源即可运行的无线电广播接收器，属于机动车辆中使用的那种接收器 `0d100766-4820-4747-aea0-1185a8c4383a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态：独立主机或集成单元；支持的无线电频段；车辆外部电源规格；集成的显示、放大、导航、媒体与连接功能；随附线束与安装附件；适用时的运行、空闲或待机及自动关机模式和实测功率；单元净质量；单独报告的包装质量；交付状态；生产地域；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格接收机成品及随附线束/安装附件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过称量或受控 BOM 与发运记录确定合格接收机净质量。纳入作为单元组成交付的线束和安装附件；运输包装须排除并单独报告。 |
| `manufacturing_energy` | 装配、集成、编程、测试、返工和包装用电 | Energy | kWh | 按过程和报告期记录分表计量或与发票核对的电量，并按合格接收机净输出质量归一化。保留所用电力数据集的地域和电压等级。 |
| `power_modes` | 运行、解码、空闲或待机以及自动关机行为 | Power | W | 在声明的车辆外部直流供电条件下测量功率。记录输入电压、电流或直接功率、频段与信号条件、音频输出/负载条件、显示/放大/导航/连接状态和模式持续时间。不得以铭牌最大功率替代运行或空闲/待机实测功率。 |
| `variant_aggregation` | 多型号或多配置前景数据集 | Mass 和各过程相应属性 | 声明单位 | 按各变体生产质量加权。保留变体级形态、功能、功率、附件和交付状态记录并披露生产组合；不得将单一车型外推至整个类别。 |
| `mass_balance` | 材料投入、合格产品、返工、拒收品和废物 | Mass | kg | 每个报告期核对期初库存、收货、期末库存、合格输出、可回用返工和废物；披露未解决差额及返回过程物料的处理。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的电子元器件与组件、印制电路板、机械件、显示器、放大/导航/连接模块、线束、安装附件、耗材和包装材料到达报告组织大门时的状态。 |
| starting_condition_role | 用于部件收货、受控转化、集成、测试和成品接收机交付的前景制造入口。 |
| product_classification_scope | 机动车辆用外部供电无线电广播接收机成品；仅当组合功能物理集成于交付接收机时纳入。 |
| recursive_input_rule | 采购的成品接收机或功能等同的集成接收单元，作为具有独立合规数据集的上游产品输入记录，不在前景过程图中重复构造。 |
| upstream_dataset_requirement | 对采购部件、材料、电力、耗材、包装和外部废物处理使用上游数据集；可获得时优先供应商特定部件和材料声明。 |
| disclosure | 声明组织控制范围、制造地域、纳入和排除的部件生产步骤、独立或集成形态、支持频段、外部电源规格、组合功能、交付线束/附件集合、包装状态、是否纳入使用阶段以及任何截断或数据缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | 前景制造数据包 | 纳入形成合格接收机输出所需的全部受控收货、装配、集成、配置、测试、返工、废物准备、包装和出厂活动；组织控制外采购投入使用上游数据集。 | `iec-63366-2025`; `iso-14044-2006` |
| `boundary_vehicle_exclusion` | 下游车辆系统 | 除非增加单独声明的下游情景，否则排除整车装配、车辆运行、维护和报废；不得把接收机数据集报告为整车。 | `unsd-cpc-3-0` |
| `boundary_external_power` | 车辆电气接口 | 声明与交付单元及功率测量有关的车辆外部供电和线束/连接条件，因为车辆电气负载受线束及连接系统影响。 | `iso-16750-2-2023` |
| `boundary_combined_functions` | 集成显示、放大、导航、媒体或连接功能 | 纳入物理集成于交付接收机的功能所对应材料与受控制造负荷；披露排除的远端模块，不得申报其功能或负荷。 | `iec-63366-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `incoming_component_control` | 来料部件、材料与附件控制 | required | 对跨越报告组织边界的采购投入始终纳入。 | 前景收货、身份、数量和供应商证据控制。 | 每报告期投入 kg 及每 kg 合格接收机输出 |
| `electronic_assembly` | 电子装配 | conditional | 报告组织控制印制电路装配、焊接、涂覆、粘接或类似电子装配时纳入。 | 电子投入的前景转化。 | 电子组件输出 kg |
| `unit_integration` | 接收机与功能模块集成 | required | 始终纳入报告组织控制的最终机械/电气集成。 | 接收机电子件、外壳、显示、放大、导航/连接模块、线束与附件的前景集成。 | 集成单元输出 kg |
| `configuration_and_test` | 固件配置及功能/电气测试 | required | 始终纳入成品配置和放行测试。 | 前景编程、无线电/音频/功能验证和外部电源模式测试。 | 合格受测单元输出 kg |
| `rework_waste_handling` | 返工与废物准备 | conditional | 前景边界内发生返工、拒收、废料分选或处理准备时纳入。 | 保留返工负荷并为外部处理准备废物。 | 每 kg 合格接收机输出的返工与废物 kg |
| `packaging_and_delivery` | 包装与制造商大门交付 | required | 始终纳入包装和制造商大门放行。 | 交付状态定义与参考产品输出。 | 1 kg 接收机合格净输出 |

### 过程：来料部件、材料与附件控制（`incoming_component_control`）

#### 输入

##### 产品流

###### 采购部件与组件（`purchased_components`）

按供应商零件和质量记录收到的印制板及其组件、调谐器、半导体、无源件、显示器、放大器、导航/连接模块、存储装置、连接器和机械件。

- 选定流：车载接收机制造用采购电子与机械部件
- 流属性/单位：Mass / kg
- 数量规则：与库存移动及合格生产核对的前景收货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incoming_component_records`
- 来源：`iec-62474-2018`

###### 线束与安装附件（`received_harness_accessories`）

记录随接收机交付的线束、适配器、支架、紧固件、饰件和其他安装附件，并保留其是否计入净参考质量。

- 选定流：车载接收机线束与安装附件
- 流属性/单位：Mass / kg
- 数量规则：按附件料号和交付配置记录的前景收货与领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incoming_component_records`
- 来源：`iso-16750-2-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行生产投入（`released_components`）

记录通过来料控制并移交前景装配与集成的部件、材料、线束和附件。

- 选定流：已检验并放行的车载接收机生产投入
- 流属性/单位：Mass / kg
- 数量规则：移交生产的合格收货质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_incoming_component_records`
- 来源：`iec-62474-2018`

##### 废物流

###### 来料不合格物料（`incoming_nonconforming_material`）

记录跨越前景边界进入退货、回收或处置的拒收或受损来料。

- 选定流：不合格来料电子与机械物料
- 流属性/单位：Mass / kg
- 数量规则：按处置方式称量的不合格物料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incoming_component_records`
- 来源：

##### 基本流

### 过程：电子装配（`electronic_assembly`）

#### 输入

##### 产品流

###### 电子元件、电路板与装配耗材（`electronic_assembly_inputs`）

报告组织控制电子装配时，记录领用的电路板、元件、焊料、助焊剂、清洗剂、涂层、粘合剂及其他过程耗材。

- 选定流：电子装配投入与耗材
- 流属性/单位：Mass / kg
- 数量规则：各物料和耗材领用质量减去有记录的退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 电子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronic_assembly_records`
- 来源：`iec-62474-2018`

###### 电子装配用电（`electronic_assembly_electricity`）

记录贴装、焊接、清洗、涂覆、检验、局部通风和可直接归属辅助设备的电量。

- 选定流：电子装配用电
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或有记录的设施总表分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 电子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronic_assembly_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已装配接收机电子件（`assembled_electronics`）

记录移交单元集成的合格电子组件。

- 选定流：已装配车载接收机电子件
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 电子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronic_assembly_records`
- 来源：

##### 废物流

###### 电子装配废料（`electronic_assembly_scrap`）

按实际下游去向分别记录电路板、元件、含焊料、清洗、涂覆及混合废料。

- 选定流：按声明废物类别区分的电子装配废料
- 流属性/单位：Mass / kg
- 数量规则：按废物代码和处理目的地称量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 电子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronic_assembly_records`
- 来源：

##### 基本流

###### 电子装配直接排放（`electronic_assembly_emissions`）

仅在焊接、清洗或涂覆释放物跨越环境边界时记录定量的空气或水直接排放；不得以工作场所浓度替代排放质量。

- 选定流：受控电子装配的实测直接排放
- 流属性/单位：Mass / kg
- 数量规则：污染物特定的实测或按许可方法计算的排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 电子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronic_assembly_records`
- 来源：

### 过程：接收机与功能模块集成（`unit_integration`）

#### 输入

##### 产品流

###### 接收机模块、外壳与声明的组合功能部件（`integration_parts`）

记录物理集成或随产品交付的接收机电子件、外壳、控制件、显示器、放大器、导航/连接模块、存储或媒体硬件、线束与附件。

- 选定流：车载接收机集成部件与功能模块
- 流属性/单位：Mass / kg
- 数量规则：按 BOM 位置记录的领用质量减去有记录退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 集成单元输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_unit_integration_records`
- 来源：`iec-62474-2018`

###### 集成用电（`integration_electricity`）

记录机械与电气集成及可直接归属辅助设备使用的电量。

- 选定流：接收机集成用电
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或有记录的设施总表分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 集成单元输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_unit_integration_records`
- 来源：

###### 集成耗材（`integration_consumables`）

记录机械与电气集成中消耗的粘合剂、紧固件、标签、清洁材料和其他材料投入。

- 选定流：按声明材料区分的接收机集成耗材
- 流属性/单位：Mass / kg
- 数量规则：各耗材领用质量减去有记录退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 集成单元输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_unit_integration_records`
- 来源：`iec-62474-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 集成接收机单元（`integrated_receiver_unit`）

记录移交编程与最终功能/电气测试的装配单元。

- 选定流：集成式车辆外部供电无线电接收单元
- 流属性/单位：Mass / kg
- 数量规则：实测集成单元输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 集成单元输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_unit_integration_records`
- 来源：

##### 废物流

###### 集成废料与受损部件（`integration_scrap`）

按材料或废物代码及去向记录受损模块、外壳件、线束、紧固件、粘合剂废物和混合废料。

- 选定流：按声明废物类别区分的接收机集成废料
- 流属性/单位：Mass / kg
- 数量规则：按材料或废物代码及目的地称量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 集成单元输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_unit_integration_records`
- 来源：

##### 基本流

### 过程：固件配置及功能/电气测试（`configuration_and_test`）

#### 输入

##### 产品流

###### 待配置与测试集成单元（`units_for_test`）

记录进入固件加载、配置、无线电/功能检查和电气测试的集成单元。

- 选定流：集成式车辆外部供电无线电接收单元
- 流属性/单位：Mass / kg
- 数量规则：进入配置与测试的实测单元质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格受测单元输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_test_records`
- 来源：

###### 配置与测试用电（`configuration_test_electricity`）

记录编程、无线电信号、显示、放大、导航/连接、适用的老化及最终电气测试和可归属测试设备的用电。

- 选定流：接收机配置与测试用电
- 流属性/单位：Energy / kWh
- 数量规则：与测试日志核对的实测或按测试周期计算电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格受测单元输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_configuration_test_records`
- 来源：`iec-62087-6-2015`; `iso-16750-2-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格受测接收机（`accepted_tested_receiver`）

记录通过声明的无线电接收、组合功能和外部电源检查并放行至包装的单元。

- 选定流：合格受测车辆外部供电无线电接收机
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格受测单元输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_test_records`
- 来源：`iec-62087-6-2015`; `iso-16750-2-2023`

###### 转入返工单元（`test_rework_units`）

记录移交受控返工的失败单元，不得将其作为共产品或无负荷投入。

- 选定流：转入返工的车载接收机单元
- 流属性/单位：Mass / kg
- 数量规则：移交返工的实测失败单元质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格受测单元输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_configuration_test_records`
- 来源：

##### 废物流

##### 基本流

### 过程：返工与废物准备（`rework_waste_handling`）

#### 输入

##### 产品流

###### 返工失败单元与可回收部件（`rework_inputs`）

记录进入诊断、修理、清洁、重新编程和复测的失败单元及回收部件。

- 选定流：返工用失败接收机单元与可回收部件
- 流属性/单位：Mass / kg
- 数量规则：按返工路线称量的投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rework_waste_records`
- 来源：

###### 返工用电（`rework_electricity`）

记录诊断、修理、清洁、重新编程和复测消耗的电量。

- 选定流：接收机返工与复测用电
- 流属性/单位：Energy / kWh
- 数量规则：与返工及复测日志核对的分表或按周期计算电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rework_waste_records`
- 来源：

###### 返工替换材料（`rework_replacement_materials`）

记录返工消耗的替换部件、焊料、清洗剂和其他材料。

- 选定流：按声明材料区分的接收机返工替换件与耗材
- 流属性/单位：Mass / kg
- 数量规则：各替换部件与耗材领用质量减去有记录退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rework_waste_records`
- 来源：`iec-62474-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 返回测试的返工单元（`reworked_units`）

记录修复后返回配置与测试过程的单元；保留原始与返工全部负荷。

- 选定流：返回测试的返工车载接收机单元
- 流属性/单位：Mass / kg
- 数量规则：返回测试的实测修复单元质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rework_waste_records`
- 来源：

##### 废物流

###### 已准备制造废物（`prepared_manufacturing_wastes`）

分别记录不可回用的电子、金属、塑料、玻璃、电缆、含焊料、包装和混合废物，并将各类别关联至实际外部处理路线。

- 选定流：按声明类别分选的车载接收机制造废物
- 流属性/单位：Mass / kg
- 数量规则：按废物代码和处理目的地称量的发运废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rework_waste_records`
- 来源：

##### 基本流

### 过程：包装与制造商大门交付（`packaging_and_delivery`）

#### 输入

##### 产品流

###### 合格接收机、线束与安装附件（`delivery_configuration`）

记录合格接收机以及准确包含在交付配置中的线束和安装附件集合。

- 选定流：合格接收机及随附交付附件
- 流属性/单位：Mass / kg
- 数量规则：不含单独报告包装的实测交付净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_delivery_records`
- 来源：

###### 运输包装材料（`distribution_packaging`）

按材料和质量记录纸箱、托盘、袋、保护膜、标签、说明书、栈板等包装，不将其质量计入接收机净参考流。

- 选定流：按声明材料区分的运输包装材料
- 流属性/单位：Mass / kg
- 数量规则：领用包装质量减有记录退料并按合格包装输出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_delivery_records`
- 来源：`iec-63366-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 车辆外部供电无线电接收机成品（`finished_vehicle_radio_receiver`）

这是制造商大门处的接收机合格净输出，纳入声明为产品组成的交付线束与安装附件，不含单独报告的运输包装。

- 选定流：无需外接电源即可运行的无线电广播接收器，属于机动车辆中使用的那种接收器 `0d100766-4820-4747-aea0-1185a8c4383a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 接收机合格成品净输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 包装操作废物（`packaging_operation_waste`）

按材料和下游处理记录边角料、受损包装、标签和报废说明书。

- 选定流：按声明材料区分的包装操作废物
- 流属性/单位：Mass / kg
- 数量规则：实测包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格接收机成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_delivery_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共用装配、测试、返工、公用工程和包装操作 | 优先直接计量、批次记录和过程细分。仍需分配时，使用反映资源使用的物理驱动因子，记录该因子并一致应用。 | `iso-14044-2006`; `iec-63366-2025` |
| `allocation_variant_mix` | 一个数据集中的多个接收机型号或配置 | 根据变体级输出质量和过程记录计算生产质量加权前景数量。披露纳入变体及组合功能构成；除非数据集范围明确为该型号，否则不得以单一型号代表整个类别。 | `iso-14044-2006` |
| `allocation_rework` | 失败、修复及复测单元 | 将原始与返工负荷保留给合格输出；返回过程的部件和单元不是无负荷共产品。 | `iso-14044-2006` |
| `allocation_waste_recycling` | 送往回收、资源化或处置的废料与废物 | 记录废物数量和实际处理路线。仅依声明的下游 LCA 方法使用回收抵扣或避免负荷，并披露替代假设和敏感性；不得在前景清单中隐含创建抵扣。 | `iso-14044-2006`; `iec-63366-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_incoming_component_records` | `incoming_component_control` | 采购和放行部件、线束、附件与来料拒收 | ERP 收货、供应商声明、库存移动、检验和处置记录 | 供应商料号；描述；部件/功能类别；供应商；收货、合格、拒收、退货、领用与退库质量；IEC 62474 声明引用；是否随产品交付 | 按零件和报告期核对收货、库存、检验和生产领用。 | kg | 每次收货并按报告期核对 | 声明的代表性制造期 | 每个纳入制造场址和供应商流 | 按零件汇总合格与拒收质量，核对期初期末库存并按接收机合格净输出归一化。 | 供应商材料声明、校准秤、ERP 审计轨迹、检验处置记录 |
| `cp_electronic_assembly_records` | `electronic_assembly` | 装配投入、用电、输出、废料与直接排放 | 领退料、分表、设备日志、产量/质量、废物票据、排放测量或许可计算 | 批次；产线；板/零件；投入与退料质量；电量；合格输出；废料质量/代码；污染物与排放质量；运行时间 | 按装配路线核对领料、仪表、设备日志、合格输出、废物和定量直接排放。 | kg; kWh; 污染物特定 kg | 每批或班次并按报告期汇总 | 声明的代表性制造期 | 组织控制的每条电子装配线 | 按技术路线和场址汇总，减有记录退料，并按电子组件和参考输出归一化。 | 仪表与校准记录、批次流转卡、废物联单、排放方法记录 |
| `cp_unit_integration_records` | `unit_integration` | 功能模块、外壳、组合功能部件、线束、附件、能源、输出与废料 | 变体 BOM、领退料、仪表、生产流转、产量与废物记录 | 变体；独立/集成形态；支持频段；显示/放大/导航/媒体/连接标志；零件及质量；附件标志；电量；耗材；合格输出；废料 | 将变体 BOM 和实际领料与实测能源、集成合格输出和废料核对。 | kg; kWh | 每批并按报告期汇总 | 声明的代表性制造期 | 每条集成线及纳入场址 | 按变体和路线汇总并按集成输出归一化，多变体数据集再按生产质量加权。 | 受控 BOM 版本、领退料、校准秤、仪表、生产放行记录 |
| `cp_configuration_test_records` | `configuration_and_test` | 编程、功能放行、外部电源模式、测试电量、合格与返工 | 固件/配置、测试台日志、功率测量、仪表、通过/失败与返工记录 | 单元/变体；固件/配置；频段；输入电压；电流或功率；模式；信号；音频负载/输出；显示/放大/导航/连接状态；模式时间；测试电量；合格与失败质量；返工路线 | 采集自动或受控测试台记录并与合格、失败单元核对。 | W; V; A; h; kWh; kg | 每台受测单元或有统计依据的批次，并按报告期核对 | 声明的代表性制造期 | 每个配置与终检工位 | 由实测值计算模式功率和测试电量，按变体和生产质量汇总，制造测试电量按合格输出归一化。 | 校准功率分析仪或可追溯直流测量、测试程序版本、通过/失败日志、仪表核对 |
| `cp_rework_waste_records` | `rework_waste_handling` | 返工投入、替换材料、能源、恢复单元与已准备废物 | 返工单、领料、仪表、复测、废物称量和联单 | 失败代码；单元质量；返工路线；替换件及质量；耗材；电量；恢复单元质量；废物代码/质量/目的地/处理 | 跟踪每条返工路线和废物类别至关闭，核对返回复测单元及联单发运废物。 | kg; kWh | 每个返工批次和废物发运 | 声明的代表性制造期 | 全部纳入返工区和废物准备点 | 按路线汇总投入输出，将负荷保留给合格输出并按参考输出归一化。 | 返工关闭、校准秤、仪表、复测日志、签署废物联单 |
| `cp_packaging_delivery_records` | `packaging_and_delivery` | 接收机净体、随附附件、包装、包装输出与包装废物 | 放行 BOM、包装规范、秤、包装领退料、发运和废物记录 | 单元/变体；接收机质量；线束/附件及质量；计入参考标志；包装材料与质量；交付状态；合格包装数量；包装废物 | 核对放行、包装、发运和废物记录，区分净参考质量与包装。 | kg | 每份包装规范并按报告期核对 | 声明的代表性制造期 | 每个纳入包装与发运场址 | 分别汇总接收机及随附附件净质量与包装，包装和包装废物按 1 kg 合格净输出归一化。 | 校准秤、受控包装规范、BOM 放行、发运核对、废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output_mass` | 接收机合格净参考输出 | 净参考质量 = 合格接收机质量 + 标记为产品组成的交付线束/附件质量；运输包装排除并单独报告。 | 合格接收机质量；随附附件质量；计入参考标志；包装质量 | 接收机合格净输出 kg | `unsd-cpc-3-0` |
| `calc_inventory_normalization` | 每项前景数量 | 归一化数量 = 报告期过程数量 / 报告期接收机合格净输出质量；保留原单位并报告每 1 kg 参考输出的数量。 | 过程数量；合格输出质量 | 每 kg 参考输出的清单数量 | `iso-14044-2006`; `iec-63366-2025` |
| `calc_variant_weighting` | 多变体数据集 | 加权数量 = 各变体归一化数量与其合格输出质量乘积之和 / 合格输出总质量。 | 变体数量；变体合格质量；变体限定信息 | 生产质量加权清单及披露的变体组合 | `iso-14044-2006` |
| `calc_mode_power` | 运行、空闲/待机及自动关机模式 | 优先直接测量功率；否则功率 = 时间对齐的直流电压 × 电流。按模式与变体报告测量窗口、信号和功能状态、负载条件及平均规则。 | 电压；电流或直接功率；时间；频段/信号；音频/显示/放大/导航/连接状态 | 声明模式和变体的 W | `iec-62087-6-2015`; `iso-16750-2-2023` |
| `calc_mass_reconciliation` | 各材料过程和报告期 | 差额 = 期初库存 + 收货 - 期末库存 - 合格输出 - 有记录退回 - 废物输出。调查并披露未解决差额，不得通过更改实测流强制归零。 | 库存、收货、产品、退回和废物质量 | kg 差额和核对状态 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与变体 | 对每个代表变体保留独立/集成形态、支持频段、车辆外部电源规格、组合功能配置、随附线束/附件集合、净质量、包装状态、地域和报告期。 | 产品主数据、受控 BOM、技术规格、包装规范、放行记录 |
| `dq_material_traceability` | 采购电子与机械投入 | 保留供应商、零件、材料或部件类别、声明质量、声明版本和数据缺口。可获得时使用 IEC 62474 兼容供应商声明；不得将其作为过程排放证据。 | 供应商声明、收货记录、BOM 版本、缺口日志 |
| `dq_energy` | 制造用电 | 将分表或分配电量与设施总量核对；记录分配驱动因子、仪表覆盖、排除负载、电力数据集地域和测试周期计算。 | 仪表与发票、设备日志、分配工作表、校准记录 |
| `dq_power_modes` | 产品运行及空闲/待机数据 | 使用可追溯直流测量，并保留供电电压、信号和频段、音频负载/输出、显示/放大/导航/连接状态、测量时间、平均方法和仪器校准。 | 功率测试方法、原始日志、校准证书、变体配置 |
| `dq_mass_balance` | 材料、产品、返工与废物流 | 核对各纳入过程和整体前景系统；记录库存变化、退回供应商或过程、废物目的地及未解决差额。 | 质量平衡表、库存台账、生产与废物记录 |
| `dq_temporal_geographical_technology` | 全部前景与上游数据 | 声明数据期、场址地域、生产路线、技术、数据年龄、供应商覆盖和替代/代理使用；解释报告期是否代表正常生产并识别重大缺口。 | 数据集元数据、场址清单、生产记录、供应商覆盖表、缺口评估 |
| `dq_completeness` | 前景数据包 | 纳入所有适用的 required 或 conditional 过程，以及已知跨越边界的材料、能源、产品、废物和直接排放；量化并说明截断，不得无说明遗漏。 | 过程适用性矩阵、清单完整性检查、截断与缺口日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_category_scope` | 产品身份 | 确认产品是为机动车辆设计且不能在无外部电源情况下工作的无线电广播接收机。拒绝便携/自供电接收机、非车载接收机、单独部件、整车和单车型独占类别声明。 | `unsd-cpc-3-0` |
| `validate_reference_identity` | 参考流 | 必须使用产品流 UUID `0d100766-4820-4747-aea0-1185a8c4383a`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和参考数量 1。 |  |
| `validate_required_qualifiers` | 产品和数据集元数据 | 形态、支持频段、外部电源规格、组合功能、线束/附件内容、功率模式、净质量、包装质量、交付状态、地域或报告期任一缺失时完整性失败。 | `iso-16750-2-2023`; `iec-62087-6-2015` |
| `validate_power_measurement` | 运行、空闲/待机与自动关机记录 | 拒绝缺少外部直流供电条件和功能模式的功率声明，或以铭牌最大功率替代模式实测功率。 | `iec-62087-6-2015`; `iso-16750-2-2023` |
| `validate_delivery_mass` | 参考输出与包装 | 确认随附线束/附件符合声明交付配置，且运输包装与 1 kg 净参考输出分开列账。 |  |
| `validate_process_coverage` | 前景过程图 | 必须纳入来料控制、单元集成、配置/测试和包装/交付；满足条件时必须纳入电子装配和返工/废物准备。 | `iec-63366-2025`; `iso-14044-2006` |
| `validate_material_and_energy_records` | 前景清单 | 要求可追溯部件/材料数量、制造用电、合格输出、返工、废物和适用直接排放，且协议链接和归一化一致。 | `iec-62474-2018`; `iso-14044-2006` |
| `validate_allocation` | 共用操作与变体 | 要求过程细分或有记录的物理分配驱动因子，多变体按生产质量加权并保留返工负荷；拒绝未披露回收抵扣。 | `iso-14044-2006`; `iec-63366-2025` |
| `validate_mass_balance_and_gaps` | 过程和系统总量 | 要求报告质量核对状态、量化未解决差额、截断、代理数据、供应商覆盖和重大数据缺口。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 车辆外部供电无线电接收机前景制造数据集；经评审后可作为 `secondary_dataset` 发布，并供下游部件、信息娱乐系统或车辆研究作为 `background_dataset` 使用。 |
| downstream_use | 部件供应链 LCA、产品碳足迹、接收机或信息娱乐装配建模，以及另行增加运输、使用、维护和报废情景的下游车辆系统模型。 |
| allowed_use | 用于声明的独立或集成接收机配置、生产地域、技术、报告期、功能模块集合、线束/附件交付状态和包装处理。 |
| excluded_use | 不得作为整车、便携接收机、非车载接收机、单独显示/放大/导航/线束数据集、无代表性生产组合的通用类别平均，或无车辆供电及运行情景的使用阶段数据集。 |
| required_metadata | 规范 PCR id；产品流 UUID；Mass 与 Units of mass UUID；独立/集成形态；支持频段；车辆外部电源规格；组合功能；随附线束/附件；净质量；包装质量；交付状态；变体组合；生产路线；场址地域；报告期；上游数据集版本；分配；截断；数据缺口；报告功率时的运行/空闲/待机测试条件 |
| required_quality_disclosure | 供应商与 BOM 覆盖、前景仪表和质量覆盖、功率测试方法与校准、变体加权、质量平衡状态、返工与废物处理、直接排放适用性、代理数据、截断、不确定性或缺失范围证据和评审状态。 |
| update_trigger | 接收机形态或支持频段、外部供电架构、显示/放大/导航/连接配置、交付线束/附件、BOM 或包装、装配/测试技术、场址或供电、分配或变体组合、功率测试方法、废物路线，或前景/供应商数据发生重大变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-63366-2025` | standard | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691（检索于 2026-08-09） | 电气电子产品 PCR/LCA 框架、前景边界、产品特定声明、分配和报告。 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines（2022 年确认，含已发布修订），https://www.iso.org/standard/38498.html（检索于 2026-08-09） | LCI 目标与范围、清单完整性、分配、归一化、报告和数据质量。 |
| `iso-16750-2-2023` | standard | ISO 16750-2:2023, Road vehicles — Environmental conditions and testing for electrical and electronic equipment — Part 2: Electrical loads, https://www.iso.org/standard/76119.html（检索于 2026-08-09） | 道路车辆电气/电子单元的适用性、外部电气负载和线束/连接条件。 |
| `iec-62087-6-2015` | standard | IEC 62087-6:2015, Audio, video, and related equipment — Determination of power consumption — Part 6: Audio equipment, https://webstore.iec.ch/en/publication/22586（检索于 2026-08-09） | 接收机/音频功率报告的运行、解码、空闲和自动关机模式测量概念。 |
| `iec-62474-2018` | standard | IEC 62474:2018, Material declaration for products of and for the electrotechnical industry, consolidated with AMD1:2020, https://webstore.iec.ch/en/publication/29857（检索于 2026-08-09） | 供应商材料声明、部件/材料追溯和供应链数据交换；不用于证明过程化学品或使用排放。 |
| `unsd-cpc-3-0` | official_guidance | 联合国统计司，Central Product Classification Version 3.0 结构与分类资料，https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml（检索于 2026-08-09） | CPC 3.0 类别身份，以及从本叶范围排除整车、单独部件和非车载接收机。 |
