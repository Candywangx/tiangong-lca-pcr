---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.fixed-media-storage-units
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 固定媒体存储单元

## 1. 范围与适用性

本 PCR 适用于投放市场、供自动数据处理设备、企业系统或数据中心安装使用的固定媒体数据存储成品单元。
范围包括硬盘驱动器（HDD）；非易失介质、控制器和读写接口组成一个交付存储单元的组装完成的固定式
固态硬盘或闪存存储单元；混合 HDD/固态单元；以及作为一个固定媒体存储产品交付的已装载存储阵列或
机箱，包括所装驱动器、控制器、背板、电源、冷却装置、嵌入式网络元件、固件和内部连接。

前景数据包止于制造商工厂大门，纳入适用路线下的设备制造或采购、机械和电子装配、适用时已装载阵列
或机箱的集成、固件加载、配置、功能和功耗测试、质量放行及包装。数据集必须区分独立 HDD、独立固定
SSD 或闪存单元、混合设备以及已装载阵列或机箱交付；必须声明容量、接口、介质、控制器、冗余、驱动器
数量、电源和冷却配置、制造路线、固件或配置状态以及实测功耗特性。

裸半导体芯片或封装 NAND 元件；闪存卡或 CPC 47550 下的其他单一固态介质；可移动磁盘、磁带、光学
介质及其驱动器；未装载的空机箱；外部存储区域网络基础设施；计算机服务器；消费级可移动存储产品；
以及数据中心建筑、冷却、不间断电源、网络、安装、运行、维护和报废阶段均不在范围内。组装完成的固定
SSD 仅在其为包含读写控制器和接口的完整存储单元时纳入；裸芯片、封装、存储卡或其他 CPC 47550 介质
的证据不得外推为整个 CPC 45271 叶的证据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.fixed-media-storage-units |
| classification_refs | CPC 3.0：45271，精确映射语境 |
| covered_products | HDD；包含控制器和接口的组装完成固定 SSD 或闪存存储单元；混合固定媒体驱动器；随所装驱动器、控制器、内部互连、电源、冷却、固件和声明冗余配置一并交付的已装载阵列或机箱 |
| excluded_products | 裸芯片和封装存储元件；CPC 47550 下的闪存卡和单一固态介质；可移动磁性、磁带、光学或闪存介质及其可移动介质驱动器；空机箱；外部 SAN 基础设施；计算机服务器；消费级可移动存储；使用和报废服务 |
| representative_product | 在制造商工厂大门完成测试并可销售、采用一种声明交付配置的固定媒体存储单元：独立 HDD、独立固定 SSD 或闪存单元、混合驱动器或已装载阵列或机箱 |
| production_route | 路线特定的介质和电子元件供应；HDD 或固定 SSD 设备制造或外购设备资格确认；适用时的已装载阵列或机箱集成；固件加载；配置；功能和功耗测试；质量放行；包装 |
| market_state | 制造商工厂大门处的完工包装状态，声明原始和格式化可用容量、接口、介质、控制器、冗余、驱动器数量、电源、冷却、固件、制造路线和测试功耗状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 能够按其声明交付配置提供非易失数据存储及读写访问的固定媒体存储成品单元 |
| How much | 制造商工厂大门处 1 kg 净成品存储单元，不含可拆分运输包装 |
| How well | 对确切交付型号和配置通过声明的功能、容量、接口、固件、数据保护、冗余、安全、质量和功耗测试 |
| How long or cycle | 一个在制造商工厂大门完成放行的生产批次；声明所代表生产期和任何老化测试时长；不隐含使用寿命 |
| reference_flow_link | 参考流为 `final_configuration_test_packaging` 的最终放行输出，归一化为 1 kg 净成品存储单元 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 固定媒体存储单元 `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 交付配置：独立 HDD、独立固定 SSD 或闪存单元、混合设备或已装载阵列或机箱；制造商和型号；外形规格；介质技术；原始和格式化可用容量及十进制或二进制约定；接口和传输协议；控制器型号和数量；驱动器数量和单盘容量；缓存；冗余或数据保护配置；所含机箱、背板、电源、风扇和网络元件；AC 或 DC 输入；主动、就绪空闲和所支持深度空闲功率及测试配置和工作负载；固件和容量优化功能；制造路线和场址；生产期；老化或测试时长；产品净质量和排除的包装 |

构建前景数据包时，`必需限定信息` 中每个适用项目必须在数据集元数据、过程说明、参考流备注、产品说明
或等效数据包字段中声明。缺失限定信息会使参考流不完整。质量相同并不表示不同容量、存储介质、接口、
控制器、冗余级别、性能等级或交付配置具有功能等价性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 最终参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化为 1 kg 净成品单元。纳入作为所配置存储单元一部分交付的所有元件，包括已安装驱动器、控制器、机箱、背板、内部线缆、电源和冷却；排除可拆分运输包装并单独记录。 |
| `capacity_declaration` | 存储容量 | 数字信息容量 | byte、MB 或 MiB、GB 或 GiB、TB 或 TiB | 分别声明原始可寻址容量和格式化可用容量，标明十进制或二进制前缀，并披露为奇偶校验、校验和、备用、重映射、缓存、快照和系统用途保留的空间。不得使用未声明的容量约定比较产品。 |
| `component_count_and_mass` | 驱动器、控制器、电源、风扇、电路板和其他按件记录的元件 | 质量和件数 | kg 和 item | 针对同一物料清单记录元件数量以及实测或供应商特定质量。不得跨型号或路线应用通用件数到质量换算因子。 |
| `power_state_measurement` | 主动、就绪空闲和所支持深度空闲状态 | 功率 | W | 对完整声明单元和配置测量输入功率。记录输入电压和频率、AC 或 DC 供电、电源数量和冗余、已安装驱动器和控制器、固件、环境条件、工作负载、平均时段、仪表精度以及节能功能是否启用。 |
| `test_energy_calculation` | 老化、调节、功能测试和功耗测试 | 能量 | kWh | 使用计量电量，或按 kWh = sum(W × 小时) / 1000 从时间分辨功率计算测试用电。工厂测试用电与报告的产品运行功率属性必须分开。 |
| `energy_carrier_preservation` | 制造用电、燃料、热和外供冷却 | 能量或载能体特定属性 | kWh 或 MJ；保留燃料原始单位 | 按载能体和场址保留数量。仅在需要时按 1 kWh = 3.6 MJ 换算，不得把电、热、燃料或外供冷却合并成一个无差别能量数值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 路线特定的外购介质、半导体和电子元件、机械零件、子组件或完整固定媒体设备进入报告制造商边界时的状态 |
| starting_condition_role | 进入设备制造、同类设备供应或已装载阵列和机箱集成的上游产品投入 |
| product_classification_scope | CPC 3.0 代码 45271 语义边界内的固定媒体存储成品单元；CPC 仅为映射语境，不授权纳入 CPC 47550 裸介质或单一固态介质 |
| recursive_input_rule | 已购买并用于已装载阵列或机箱的 HDD、组装完成固定 SSD 或其他完整固定媒体单元，只作为同类上游产品投入记录一次。已有上游数据集承载其负荷时，不在集成过程内递归重建其制造。 |
| upstream_dataset_requirement | 对存储介质、半导体封装、控制器、印刷电路板、电机、磁头、盘片、外壳、电源、冷却、线缆、包装、化学品、公用工程和外购固定媒体设备使用供应商特定或有代表性的上游数据集；披露代理以及地理、技术、容量和时间错配。 |
| disclosure | 声明交付配置、系统边界、设备制造或外购设备路线、HDD 或 SSD 或混合介质、容量约定、接口、控制器和冗余、所含硬件和固件、制造和集成场址、老化和功耗测试条件、排除的基础设施和下游阶段，以及按递归规则处理的同类投入。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_delivered_unit` | 所有数据集 | 纳入交付存储单元架构不可分割的每个元件和子系统。对已装载阵列或机箱，纳入已安装驱动器、控制器、背板、内部网络元件、机箱、电源、风扇、线缆、固件和集成；排除外部 SAN 和数据中心基础设施。 | `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign` |
| `boundary_route_distinction` | HDD、固定 SSD、混合以及阵列或机箱路线 | 将 HDD 介质、磁头、电机和外壳制造与固定 SSD 的 NAND 封装、控制器、电路板和外壳制造分开。将外购驱动器阵列集成与内部驱动器制造分开，并通过递归投入规则防止重复计算。 | `unsd-cpc-3-2025`; `epa-energy-star-storage-2-1-2022`; `seagate-enterprise-hdd-2016` |
| `boundary_foreground_operations` | 报告制造商 | 当由报告制造商实施或委托实施时，纳入路线特定的装配、清洗、连接、固件加载、格式化、配置、功能测试、老化、功耗测试、质量放行、内部搬运、制造公用工程、过程废物、废水、直接排放和包装。 | `eu-2019-424-storage-ecodesign`; `seagate-enterprise-hdd-2016` |
| `boundary_power_attribute_only` | 产品功耗数据 | 在声明配置和测试下，把主动、就绪空闲和所支持深度空闲功率记录为强制产品属性。不得把客户使用阶段用电、数据中心冷却、UPS 或外部网络能耗加入制造商工厂大门前景清单。 | `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign` |
| `boundary_exclusions` | 范围外产品和阶段 | 排除裸芯片和封装、闪存卡和 CPC 47550 单一介质、可移动介质产品、空机箱、服务器、外部 SAN 设备、安装、运行、维护、翻新和报废；扩展研究若纳入这些内容，必须单独报告且不得改变本生产者大门结果。 | `unsd-cpc-3-2025`; `epa-energy-star-storage-2-1-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fixed_media_device_supply` | 固定媒体设备制造或外购设备供应 | required | 始终需要；选择内部 HDD、内部固定 SSD 或混合设备制造、外购完整设备供应或声明的组合 | 建立路线特定的固定媒体设备，并防止外购同类单元重复计算 | 进入最终放行或系统集成的合格固定媒体设备组 |
| `array_enclosure_integration` | 已装载阵列或机箱集成 | conditional | 仅当交付参考产品包含多个驱动器、控制器、机箱或外壳、背板、电源、冷却、内部网络元件或配置冗余时需要 | 将合格驱动器和系统硬件集成为声明交付配置 | 进入最终配置和测试的集成存储单元 |
| `final_configuration_test_packaging` | 最终配置、测试、质量放行和包装 | required | 始终需要 | 加载固件，配置容量和冗余，执行功能、老化和功耗测试，质量放行，测量净质量并包装产品 | 制造商工厂大门处 1 kg 净成品固定媒体存储单元 |

### 过程：固定媒体设备制造或外购设备供应（`fixed_media_device_supply`）

#### 输入

##### 产品流

###### 路线特定的存储介质和电子元件（`media_electronics_components`）

记录进入内部设备制造的元件。HDD 路线包括声明的盘片、磁头、主轴电机、磁体、控制器电子件和电路板；
固定 SSD 路线包括组装完成的 NAND 封装、控制器、存储器、印刷电路板和接口元件。裸存储元件证据不代表
存储成品单元。

- 选定流：路线特定的存储介质和电子元件；数据集构建时选择经核实的 Tiangong 产品流
- 流属性/单位：质量 / kg；保留元件件数
- 数量规则：按元件、供应商、型号和路线计量收货、物料清单和生产领用数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每组合格固定媒体设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components_bom`
- 来源：`seagate-enterprise-hdd-2016`

###### 机械零件、外壳和连接材料（`mechanical_enclosure_inputs`）

记录独立设备使用的路线特定壳体、盖板、底座、紧固件、密封件、胶黏剂、内部线缆、连接器、导热材料、
标签和其他机械投入。

- 选定流：机械和外壳投入；数据集构建时选择材料和地理特定的 Tiangong 流
- 流属性/单位：质量 / kg
- 数量规则：按材料和零件计量物料清单与生产领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每组合格固定媒体设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components_bom`
- 来源：`seagate-enterprise-hdd-2016`

###### 外购完整固定媒体设备（`purchased_fixed_media_devices`）

当报告场址对完整设备进行资格确认或集成而非制造设备时，记录外购 HDD、组装完成固定 SSD 或混合驱动器。
每项投入均关联上游数据集并应用递归投入规则。

- 选定流：固定媒体存储单元 `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按供应商、型号、介质、容量、接口和目标配置计量收货净质量与件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每组合格固定媒体设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components_bom`
- 来源：`epa-energy-star-storage-2-1-2022`

###### 设备制造公用工程和过程材料（`device_process_inputs`）

记录内部元件准备、装配、清洗、连接和设备测试实际使用的电、燃料、热、外供冷却、水、清洗剂、过程
化学品、气体、润滑剂和其他耗材。

- 选定流：路线和场址特定的公用工程与过程材料；数据集构建时选择经核实的 Tiangong 流
- 流属性/单位：载能体或材料特定属性 / kWh、MJ、m3、kg 或原始单位
- 数量规则：分配至所代表路线和生产批次的计量用量，或经采购与库存记录核对的用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每组合格固定媒体设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_process_materials`

##### 废物流

#### 输出

##### 产品流

###### 合格固定媒体设备组（`qualified_device_set`）

记录转入最终放行或阵列和机箱集成的合格独立设备实测净输出质量与件数，并保留介质、容量、接口、
控制器和路线标识。

- 选定流：合格固定媒体设备；内部产品流
- 流属性/单位：质量 / kg；保留 item 件数
- 数量规则：同一生产批次的实测转移质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个固定媒体设备供应批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_quality`

##### 废物流

###### 设备制造不合格品和废物（`device_rejects_waste`）

按类型和去向毛额记录不合格元件、缺陷设备、金属、玻璃、电子、化学品和包装废物；不得将回收收益或
回收材料与投入净额相抵。

- 选定流：路线特定制造废物；数据集构建时选择经核实的 Tiangong 废物流
- 流属性/单位：质量 / kg
- 数量规则：按来源批次、废物类型、处理和去向称量或有凭证记录的废物毛额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每组合格固定媒体设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`

##### 基本流

###### 设备制造直接排放和排放水（`device_direct_emissions`）

按物质和环境区室记录内部制造的实测直接空气排放、废水物质及其他基本流。不得仅从外购物料数量推断
排放。

- 选定流：物质和环境区室特定基本流；数据集构建时选择经核实的 Tiangong 流
- 流属性/单位：质量 / kg
- 数量规则：实测释放量，或依据 `calc_discharge_emission` 从匹配流量和浓度记录计算的数值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每组合格固定媒体设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`

### 过程：已装载阵列或机箱集成（`array_enclosure_integration`）

#### 输入

##### 产品流

###### 合格或外购固定媒体设备（`integration_device_inputs`）

记录交付阵列或机箱中安装设备的确切驱动器数量、质量、介质、型号、容量、接口和上游数据集。

- 选定流：固定媒体存储单元 `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从配置和物料清单记录获得已安装净质量与件数实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个集成存储单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_configuration`
- 来源：`epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign`

###### 控制器、机箱、电源、冷却和互连硬件（`integration_system_hardware`）

按确切配置记录所含存储控制器、缓存、电路板、背板、机箱、电源、风扇、内部网络元件、线缆、紧固件、
导热材料和承载固件的硬件。

- 选定流：配置特定的系统硬件；数据集构建时选择经核实的 Tiangong 流
- 流属性/单位：质量 / kg；保留 item 件数
- 数量规则：交付配置的实测物料清单质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个集成存储单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_integration_configuration`
- 来源：`epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign`

###### 集成用电和耗材（`integration_inputs`）

记录机械和电气集成的计量或核对用电、清洗剂、连接材料及其他耗材。

- 选定流：场址特定用电和集成耗材；数据集构建时选择经核实的 Tiangong 流
- 流属性/单位：能量或材料特定属性 / kWh 或 kg
- 数量规则：分配至集成批次的计量或核对用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个集成存储单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_process_materials`

##### 废物流

#### 输出

##### 产品流

###### 集成存储单元（`integrated_storage_unit`）

记录转入最终配置和测试的集成单元，保留其全部已装硬件、固件、容量、控制器、电源、冷却和冗余配置。

- 选定流：集成固定媒体存储单元；内部产品流
- 流属性/单位：质量 / kg
- 数量规则：按确切配置实测转移质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个阵列或机箱集成批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_quality`

##### 废物流

###### 集成不合格品和废物（`integration_rejects_waste`）

按类型和去向毛额记录不合格硬件、更换零件、切屑、电子废物和其他集成废物。

- 选定流：配置特定集成废物；数据集构建时选择经核实的 Tiangong 废物流
- 流属性/单位：质量 / kg
- 数量规则：按批次和去向称量或有凭证记录的废物毛额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个集成存储单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`

##### 基本流

### 过程：最终配置、测试、质量放行和包装（`final_configuration_test_packaging`）

#### 输入

##### 产品流

###### 进入最终放行的设备或集成单元（`final_unit_input`）

记录进入固件加载、最终配置、测试、放行、质量测量和包装的合格独立设备或集成存储单元。

- 选定流：固定媒体设备或集成存储单元；内部产品流
- 流属性/单位：质量 / kg
- 数量规则：与同一放行批次核对的实测投入质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个放行固定媒体存储单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_quality`

###### 测试用电和放行耗材（`test_release_inputs`）

记录调节、格式化、固件加载、功能测试、老化和功耗测试所用电量，以及最终质量放行使用的耗材。

- 选定流：场址特定用电和放行耗材；数据集构建时选择经核实的 Tiangong 流
- 流属性/单位：能量或材料特定属性 / kWh 或 kg
- 数量规则：计量用电或依据 `calc_test_energy` 从时间分辨功率计算的用电，加上实测耗材领用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个放行固定媒体存储单元
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_power_functional_test`
- 来源：`epa-energy-star-storage-2-1-2022`

###### 产品和运输包装（`product_packaging`）

将纸箱、缓冲材料、薄膜、袋、托盘、标签、手册及其他包装与净参考产品质量分开记录。

- 选定流：材料特定包装；数据集构建时选择经核实的 Tiangong 产品流
- 流属性/单位：质量 / kg
- 数量规则：经核实的单件包装质量乘以领用件数，并与放行批次核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个放行固定媒体存储单元
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`seagate-enterprise-hdd-2016`

##### 废物流

#### 输出

##### 产品流

###### 放行固定媒体存储单元（`reference_product`）

记录在制造商工厂大门通过声明容量、接口、固件、功能、数据保护、冗余、安全、质量和功耗测试的单元
净成品质量与件数。

- 选定流：固定媒体存储单元 `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 净放行固定媒体存储单元，由放行批次实测质量扣除可拆分包装得到
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 最终测试不合格品和包装废物（`final_rejects_waste`）

按类型、原因、返工状态和去向毛额记录测试失败单元、更换零件、测试耗材和包装废物。

- 选定流：测试和包装特定废物；数据集构建时选择经核实的 Tiangong 废物流
- 流属性/单位：质量 / kg
- 数量规则：放行批次中称量或有凭证记录的废物和不合格品毛额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享生产线、设备、公用工程、测试和场址 | 首先按产品路线、型号、批次、过程和场址细分，并采用直接仪表、物料清单、生产领用、设备日志或测试记录。记录允许时，将 HDD、固定 SSD、混合以及阵列或机箱路线分开。 | `eu-pef-2021-2279` |
| `allocation_causal_driver` | 未单独计量的共享负荷 | 无法细分时，采用最接近且有记录的因果驱动因素，例如机器时间、测试工位时间、实测功率时间、洁净室面积时间、生产线吞吐量、元件数量或处理质量。报告份额并确认其和为一。 | `eu-pef-2021-2279` |
| `allocation_multi_model_output` | 多个可销售型号或配置 | 优先使用批次或型号特定记录。共享负荷无法物理分离时，采用经证明的物理关系分配；仅在没有可辩护物理关系时使用经济分配，并披露价格依据、期间、币种、份额和敏感性。 | `eu-pef-2021-2279` |
| `allocation_rejects_rework` | 不合格单元、返工、回收零件和废料 | 将返工和不合格品负荷归于造成它们的过程和型号。无预期产品功能或收入的输出按废物处理，不得将回收收入、回收材料或避免负荷与毛投入静默相抵。 | `eu-pef-2021-2279` |
| `allocation_same_category_inputs` | 安装在阵列或机箱中的外购固定媒体设备 | 对每个外购完整设备仅承载一次上游数据集，并只增加集成商前景负荷。不得再次加入上游已表示的设备制造负荷。 | `epa-energy-star-storage-2-1-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_components_bom` | `fixed_media_device_supply` | 存储介质、电子件、机械零件、外壳和外购设备 | 批准物料清单、供应商收货、生产领退料记录 | 零件号；供应商；材料或元件说明；HDD 或 SSD 路线；容量；接口；控制器；数量；实测或供应商质量；期初库存；收货；退料；期末库存；目标批次；上游数据集 | 对每个同质批次核对批准物料清单与库存移动、领用和退料数量 | kg；item | 每次物料清单修订和每个生产批次 | 完整代表生产期 | 范围内所有收货和设备制造场址 | 按零件、供应商、路线和批次求和；将外购完整设备与元件分开 | 批准 BOM、供应商规格、收货记录、秤重记录、库存核对和上游数据集链接 |
| `cp_utilities_process_materials` | `fixed_media_device_supply`; `array_enclosure_integration` | 电、燃料、热、冷却、水、化学品、气体、润滑剂、清洗和连接材料 | 仪表、发票、库存、批次、设备和生产线日志 | 载能体或材料；数量；单位；仪表区间；设备；生产线；路线；批次；运行时间；生产输出；分配驱动因素 | 优先使用专用仪表和批次领料；否则核对场址总量并记录因果分配 | kWh；MJ；m3；kg；载能体原始单位 | 仪表区间和每次材料领用；至少每月核对 | 完整代表生产期 | 所有纳入的生产和集成场址 | 保留载能体和材料；按过程、路线和批次求和；报告分配份额 | 仪表校准、发票、库存平衡、批次单、设备日志和分配工作表 |
| `cp_integration_configuration` | `array_enclosure_integration` | 已安装驱动器、控制器、机箱、背板、电源、冷却、线缆、网络元件、固件和冗余 | 配置 BOM、装配流转单、固件和测试配置记录 | SKU；已安装驱动器型号和数量；单盘容量；控制器型号和数量；缓存；背板；机箱；电源型号、数量和冗余；风扇数量；内部网络元件；线缆；固件；RAID 或数据保护模式；质量；序列号 | 对每个单元或同质配置批次核对配置 BOM、序列扫描、装配和测试记录 | kg；item；byte | 每个集成单元或同质配置批次 | 完整代表生产期 | 所有纳入的集成场址 | 仅汇总相同配置；保留元件数量和容量约定 | 批准配置、序列记录、秤重结果、固件记录、装配签字和测试报告 |
| `cp_power_functional_test` | `final_configuration_test_packaging` | 功能、容量、老化、主动、就绪空闲和深度空闲测试 | 自动测试日志、校准功率计文件、测试工位仪表和放行记录 | 型号；序列号或批次；已安装配置；固件；容量结果和约定；接口；工作负载；输入电压和频率；电源数量和模式；环境温度；功率样本；平均时段；主动、就绪空闲和深度空闲功率；测试时长；缺陷；处置 | 使用校准真有效值功率测量或专用测试工位计量；将全部结果链接到确切测试配置 | W；kWh；hour；byte | 每个放行配置；仅可按声明抽样方案和覆盖率抽样 | 完整代表生产期以及完整老化或测试周期 | 所有最终测试和老化区域 | 计算配置特定平均值；单独汇总测试能耗；不得把产品功率属性与工厂能耗合并 | 校准证书、原始时间序列、测试方法、配置导出、放行签字和抽样方案 |
| `cp_output_quality` | all processes | 内部转移、放行产品质量、件数、容量、配置、质量和收率 | 转移、秤重、序列、测试、放行和包装记录 | 投入质量；输出质量；单元件数；序列号；型号；配置；原始和可用容量；通过的测试；不合格品；返工；库存变化；包装质量；日期 | 称量并核对同一批次或单元边界，关联测试和配置记录 | kg；item；byte | 每个生产和放行批次 | 完整代表生产期 | 所有纳入的生产、集成、测试和放行场址 | 仅汇总同质产品；按过程和批次计算收率与残差 | 校准秤、序列谱系、转移记录、放行报告和质量平衡复核 |
| `cp_packaging` | `final_configuration_test_packaging` | 产品和运输包装 | 包装 BOM、供应商规格、样品称量、领用和退回记录 | 物品；材料；供应商；单件质量；件数；再生含量；重复使用周转次数；退回；损耗；目标批次 | 称量代表性物品并核对领用、退回和报废件数 | kg；item；trip | 每个包装规格和放行批次 | 完整代表生产期 | 范围内所有包装和发运点 | 经核实单件质量乘以净领用件数；可重复包装仅按有记录的已完成周转次数分摊 | 供应商规格、样品称量、包装 BOM、库存核对和退回日志 |
| `cp_waste_emissions` | all processes | 不合格品、废料、废水、直接排放、处理和去向 | 废物联单、秤重、处理日志、排放水仪表、实验室样品和排放记录 | 过程；批次；废物或物质标识；毛质量或体积；环境区室；浓度；处理；去向；回收；日期；计算方法 | 称量废物转移；计量排放水；将样品与匹配流量和运行状态配对；保留毛量 | kg；m3；kg substance | 每次转移或处理批次；按声明频率采样 | 完整代表生产期 | 所有纳入的废物、排放水和直接排放点 | 按类型、过程、环境区室和去向汇总毛输出；不得将抵扣与投入相抵 | 秤单、持证转移记录、处理凭证、仪表数据、实验室结果和质量或水平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 放行参考产品 | 净参考质量 = 包装后发运总质量 - 可拆分产品和运输包装质量。纳入交付配置中全部已安装不可分割元件。 | `cp_output_quality`; `cp_packaging` | kg 净成品存储单元 | `epa-energy-star-storage-2-1-2022` |
| `calc_inventory_normalization` | 每个清单行 | 归一化数量 = 分配至同质产品、批次、路线或配置的毛数量 / 同一代表边界的净放行参考质量。 | 适用采集协议；`cp_output_quality` | 每 kg 参考产品的数量 |  |
| `calc_test_energy` | 调节、老化和测试用电 | 测试用电 = 计量 kWh，或时间分辨输入功率 W × 区间小时后求和再除以 1000。保留测试配置、仪表不确定性和测试时长。 | `cp_power_functional_test` | 每放行单元 kWh 和每 kg 参考产品 kWh | `epa-energy-star-storage-2-1-2022` |
| `calc_power_state` | 产品功率属性 | 对每个声明状态和工作负载，报告声明稳定平均时段内有效输入功率样本的算术或时间加权平均值；保留配置和不确定性。没有声明情景时长不得将 W 转为 kWh。 | `cp_power_functional_test` | 按状态、工作负载和配置的 W | `epa-energy-star-storage-2-1-2022` |
| `calc_mass_balance` | 每个制造、集成和放行批次 | 使用一致的产品和包装边界核对：期初库存 + 收到投入 = 转移或放行产品 + 不合格品 + 废物 + 期末库存 + 有记录残差。 | `cp_components_bom`; `cp_integration_configuration`; `cp_output_quality`; `cp_packaging`; `cp_waste_emissions` | 各过程和批次的 kg 与残差百分比 |  |
| `calc_discharge_emission` | 实测废水或空气物质 | 排放质量 = 匹配的排水或排气流量 × 经单位换算的代表性实测浓度。没有代表性证据时，不得使用另一条路线或运行状态的样品。 | `cp_waste_emissions` | 按环境区室的 kg substance |  |
| `calc_shared_burden` | 未单独计量的共享操作 | 分配数量 = 共享毛量 × 声明因果份额。份额必须采用第 7 节层级并对共享总量求和为一。 | 适用采集协议；生产、机器、时间、面积、吞吐量或价格记录 | 分配数量和分配份额 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_configuration` | 产品和参考流 | 每项结果必须识别交付配置、型号、介质、原始和可用容量约定、接口、控制器、驱动器数量、冗余、所含硬件、固件、制造路线、场址、功率配置和净质量边界。 | 批准规格、配置 BOM、序列谱系、固件导出、测试报告和秤重记录 |
| `dq_measurement` | 质量、件数、容量、公用工程、功率、测试能量、废物和排放 | 使用适合测量范围的校准或核实仪器。保留原始读数、换算、抽样设计、分配、可得的不确定性和核对残差。 | 校准证书、原始仪表文件、秤检、测试方法、抽样记录和计算工作表 |
| `dq_temporal` | 前景清单 | 覆盖每条路线和配置的完整代表生产与测试周期。连续运行应采用至少 12 个月的代表期，或披露并说明更短的生产活动、启动或产品导入期。 | 有日期的生产、仪表、采购、库存、测试、废物、放行和销售记录 |
| `dq_completeness` | 前景边界 | 纳入所有适用过程及重要存储介质、电子件、机械零件、同类设备投入、系统硬件、公用工程、过程材料、包装、收率、不合格品、废水和直接排放；量化或说明每项遗漏。 | 过程图、BOM 核对、质量和能量平衡、遗漏清单和审核签字 |
| `dq_upstream_representativeness` | 上游数据集 | 尽可能匹配介质技术、元件类型、容量、型号代际、接口、控制器、地理、电力系统、供应商和时间。披露每个代理及其预期偏差方向。 | 供应商数据、上游数据集元数据、技术比较和代理评估 |
| `dq_power_test_configuration` | 产品功率属性 | 功率值必须可追溯到确切交付或明确有代表性的配置、工作负载、主动或空闲状态、输入电源、固件、节能设置、环境条件、平均时段和校准仪表。 | 测试配置导出、原始时间序列、校准记录、测试报告和代表性说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_product_scope` | 产品标识 | 当产品为裸芯片或封装、闪存卡或其他 CPC 47550 单一介质、可移动介质单元、空机箱、服务器、外部 SAN 设备或其他排除产品时失败；组装固定 SSD 无法证明为包含控制器和接口的完整读写单元时失败。 | `unsd-cpc-3-2025`; `epa-energy-star-storage-2-1-2022` |
| `validation_reference_identity` | 参考流 | 当通用参考标识未使用产品流 UUID `ba7ecdd7-4b59-4793-b8a6-c65d7874eeb3`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，或产品分类无法解析到 CPC 3.0 45271 时失败。 |  |
| `validation_configuration` | 必需限定信息 | 当交付配置、介质、原始和可用容量约定、接口、控制器、驱动器数量、冗余、所含硬件、固件、制造路线、净质量和功耗测试配置缺失或内部不一致时失败。 | `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign` |
| `validation_process_coverage` | 过程清单 | 当缺少 `fixed_media_device_supply` 或 `final_configuration_test_packaging`，适用时缺少 `array_enclosure_integration`，或内部设备制造与外购设备上游负荷重复计算时失败。 | `epa-energy-star-storage-2-1-2022`; `eu-2019-424-storage-ecodesign` |
| `validation_mass_balance` | 元件、产品、包装、不合格品和废物 | 当过程和批次质量平衡未核对、包装计入净参考产品质量、已安装不可分割元件被排除，或回收和处理抵扣被静默相抵时失败。 | `seagate-enterprise-hdd-2016` |
| `validation_power` | 产品功率和工厂测试能量 | 当报告的 W 缺少状态、工作负载和确切配置，工厂测试能量与客户使用阶段能量混合，或没有声明时长便将 W 转为 kWh 时失败。 | `epa-energy-star-storage-2-1-2022` |
| `validation_capacity` | 容量和冗余 | 当原始和可用容量混同、十进制和二进制单位未经换算混用，或对可用容量有重要影响的奇偶校验、备用、校验和、缓存、重映射、快照和系统保留空间未披露时失败。 | `epa-energy-star-storage-2-1-2022` |
| `validation_allocation` | 共享和多输出操作 | 当可细分但未尝试细分、分配驱动因素缺乏因果或记录关系、份额和不为一，或经济分配缺少价格依据、期间、币种和敏感性时失败。 | `eu-pef-2021-2279` |
| `validation_no_media_extrapolation` | 解释和比较 | 将裸 NAND、封装存储器、闪存卡或其他 CPC 47550 证据作为 CPC 45271 整机产品清单时失败；仅按相同 kg 或相同标称容量宣称 HDD、SSD、混合或阵列配置等价时失败。 | `unsd-cpc-3-2025`; `epa-energy-star-storage-2-1-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个同质固定媒体存储单元型号、路线、场址和交付配置的制造商工厂大门前景数据包 |
| downstream_use | 审核后可发布为设备、企业系统和数据中心产品模型的 `secondary_dataset` 或 `background_dataset`，并可支持下游 `process` 和 `lifecyclemodel` 投影 |
| allowed_use | 在容量、介质、接口、控制器、冗余、硬件、固件、功率、地理、技术、路线、时间和质量限定信息具有代表性时，用于产品足迹、供应链清单、采购、制造改进和背景建模 |
| excluded_use | 裸芯片或 CPC 47550 外推；可移动介质建模；仅按 kg 或标称容量断言功能等价；无声明工作负载和时长的使用阶段用电；数据中心基础设施断言；无代表性证据时用于其他型号、路线、容量、冗余级别或阵列配置 |
| required_metadata | PCR id 和版本；制造商和型号；交付配置；HDD、固定 SSD、混合或阵列路线；原始和可用容量及单位约定；接口和协议；控制器；驱动器数量；缓存；冗余和数据保护模式；所含机箱、背板、电源、冷却和网络元件；固件；功率状态和测试条件；制造和集成场址；参考期；净质量和包装边界；分配；上游代理；Tiangong 标识 |
| required_quality_disclosure | 一手数据占比；时间、地理和技术代表性；BOM 和序列覆盖率；校准和测试证据；质量和能量平衡残差；功耗测试配置和不确定性；废物和排放完整性；分配；供应商和上游数据缺口；代理局限；未解决的路线特定定量证据 |
| update_trigger | 介质技术、型号代际、容量、接口、控制器、驱动器数量、冗余、机箱、电源、冷却、固件、制造路线或场址、供应商 BOM、测试程序、功率管理设置、分配、包装、上游数据集或 Tiangong 标识发生变化 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | 联合国统计司，*Central Product Classification (CPC) Version 3.0 Explanatory Notes*，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-09） | CPC 45271 标识与排除项；将固定媒体存储单元与可移动介质及 CPC 47550 单一固态介质分开 |
| `epa-energy-star-storage-2-1-2022` | standard | 美国环境保护署，*ENERGY STAR Program Requirements for Data Center Storage, Eligibility Criteria Version 2.1*，2022 年 1 月 19 日，https://www.energystar.gov/sites/default/files/asset/document/ENERGY%20STAR%20Data%20Center%20Storage%20Version%202.1%20Final%20Specification_0.pdf（检索于 2026-08-09） | 完整存储产品边界、存储设备和控制器区分、HDD/SSD 与阵列配置、原始和可用容量、冗余、功率状态、测试配置和报告字段 |
| `eu-2019-424-storage-ecodesign` | standard | 欧盟委员会，*Commission Regulation (EU) 2019/424 of 15 March 2019 laying down ecodesign requirements for servers and data storage products*，CELEX 32019R0424，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019R0424（检索于 2026-08-09） | 数据存储产品架构、HDD 和 SSD 定义、内部不可分割元件与外部基础设施边界、电源、资源效率、可维修性和产品信息要求 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会，*Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods*，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32021H2279（检索于 2026-08-09） | 分配层级：优先细分或系统扩展，其次物理关系，仅在必要时采用其他关系；数据质量和披露设计 |
| `seagate-enterprise-hdd-2016` | dataset | Seagate Technology，*Enterprise Performance 10K HDD Sustainability Report*，DS1663.4-0911GB，2016 年 3 月，https://www.seagate.com/gb/en/global-citizenship/product-sustainability/enterprise-performance-10k-hdd-sustainability-report/（检索于 2026-08-09） | HDD 物料清单按外壳、介质、电子件、其他零件和包装分组；容量限定产品报告；佐证元件和包装质量必须保持配置特定 |
