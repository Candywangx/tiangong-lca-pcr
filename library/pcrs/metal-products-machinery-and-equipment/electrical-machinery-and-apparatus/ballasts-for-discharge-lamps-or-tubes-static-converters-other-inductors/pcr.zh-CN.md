---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ballasts-for-discharge-lamps-or-tubes-static-converters-other-inductors
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 放电灯或放电管用镇流器、静态变流器及其他电感器

## 1. 范围与适用性

本 PCR 规范放电灯或放电管用成品镇流器、静态电力变流器及其他电感器的前景生产数据。静态变流器包括整流器、逆变器、双向电力变换系统（PCS）、充电器、稳压电源，以及其他以无旋转机械的电力变换为主要功能的设备。本类别有意保持较宽范围，因此应用本 PCR 前，每个数据包均应声明产品子类型及其电气接口。

本 PCR 覆盖所声明产品型号或经证明同质的产品系列在工厂门口的生产。范围包括进厂材料和部件、适用时的电子装配与磁性元件制造、机械与热集成、最终装配、测试和包装。外购零部件应作为可见的产品输入并链接上游数据集。

本 PCR 不覆盖作为成品的电气变压器、旋转变流器、电动机或发电机、电池、完整灯具或灯、主要功能并非电力变换的开关和保护设备，以及单独销售的零部件。安装、分销、使用阶段电能损耗、维护和寿命终结处理不在前景生产边界内；下游生命周期模型应采用产品特定情景补充这些阶段。

光伏逆变器、灯用镇流器、充电器或任何其他单一子类型均不得代表整个类别。仅当产品具有相同主要功能、适用产品标准、材料架构、制造技术和性能基准，且明确的敏感性或缩放规则覆盖功率范围、质量、损耗、冷却和寿命差异时，方可采用产品系列或代理数据。该限制遵循 `pep-ecopassport-pcr-ed4-2021` 的同质产品系列原则。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ballasts-for-discharge-lamps-or-tubes-static-converters-other-inductors |
| classification_refs | CPC 3.0: 46122, Ballasts for discharge lamps or tubes; static converters; other inductors (`exact`) |
| covered_products | 成品静态变流器、整流器、逆变器、双向 PCS、充电器、稳压电源、放电灯或放电管用电子或电磁镇流器，以及其他成品电感器 |
| excluded_products | 成品变压器；旋转变流器；电动机和发电机；电池；完整灯和灯具；不以电力变换为主要功能的开关/保护设备；单独销售的零部件 |
| representative_product | 仅属于一个已声明产品子类型的成品型号；不存在全类别默认设计或光伏逆变器代理 |
| production_route | 产品特定的电子装配、磁性元件制造、机械与热集成、最终装配、测试和包装组合 |
| market_state | 制造工厂门口的成品且已通过符合性测试，不含分销、安装、使用、维护和寿命终结处理 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造工厂门口、属于一个已声明子类型和型号/系列的成品镇流器、静态变流器或电感器 |
| How much | 1 kg 产品净质量，不含外包装和单独销售的附件 |
| How well | 可销售且已通过符合性测试，并已声明额定电气接口、功率或电流/电感基准、效率或损耗指标、隔离、冷却和预期使用寿命 |
| How long or cycle | 一个生产报告期并归一化至合格产出；预期使用寿命是必需产品限定信息，但不嵌入 1 kg 工厂门口数量 |
| reference_flow_link | 产品质量是制造参考；任何下游服务功能单位均应明确关联产品数量、负载曲线、效率/损耗、维护和使用寿命 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 放电灯或放电管用镇流器，静止换流器，其他感应器 `2753fd9b-d904-40b2-9cae-4642fd5fc5fc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型；型号或同质产品系列标识；额定功率及其为有功或视在功率，或者无源电感器的额定电流和电感；输入和输出电压范围；每个端口的 AC/DC 类型及频率；每个 AC 端口的相数；电力变换方向；效率或损耗指标及其负载点、测试方法、温度和辅助功率处理；电气隔离拓扑；冷却方式及所含冷却液；净质量；所含控制器、固件、电缆和辅助设备；预期使用寿命及其运行曲线和证据；适用产品标准；制造地域和参考年份 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。若额定功率或效率对无源电感器无实际意义，数据包应声明 `not applicable`，并改为提供额定电流、电感、频率以及损耗或品质因数数据。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及材料/废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以一致方式报告产品净质量和全部质量清单；包装不计入 1 kg 参考产品，须单独记录。 |
| `rated_power_basis` | 变流器、充电器和镇流器 | 按声明采用有功功率或视在功率 | W, kW, VA or kVA | 声明额定值是输入、输出、有功、视在、连续、峰值还是灯功率；没有声明功率因数、负载制度和持续时间时不得换算。 |
| `inductor_rating_basis` | 无源电感器 | 电感和额定电流，以及损耗指标 | H and A, with Hz and W where applicable | 声明电感、电流、测试频率、温度以及磁芯损耗或绕组损耗基准；只有提供等效损耗指标时，变换效率才可填 `not applicable`。 |
| `electrical_interfaces` | 每个电气端口 | 电压、电流类型、频率和相数 | V; Hz; dimensionless phase count | 分别记录每个端口的输入/输出电压范围、AC 或 DC、AC 频率、相数和变换方向。 |
| `efficiency_and_losses` | 变流器、充电器、PCS 和镇流器性能 | 无量纲效率及电能/功率损耗 | % and W or kWh | 在已声明工况点用配对的输入/输出测量计算效率；声明方向、负载率、电压、适用时的功率因数、环境/冷却液温度、待机/空载模式及辅助设备边界。采用子类型特定方法，不使用通用效率曲线。 |
| `service_life` | 下游使用关联 | 时间或运行循环 | years, h or cycles | 声明预期使用寿命、运行小时或循环、负载曲线、环境条件、维护假设和证据；不得采用无引证的全类别寿命默认值。 |
| `production_normalization` | 前景清单 | 质量 | kg per kg reference product | 分配并核对返工后，将报告期投入、产出、废物和排放归一化至合格净产出。 |

对于光伏功率调节器，仅可在 IEC 61683 的适用范围内用其支持已声明的效率测试方法。对属于 EU Regulation 2019/1782 范围并投放相关市场的外部电源，应保留法规规定的负载条件和空载报告；这些条件不是全类别阈值。其他子类型采用适用产品标准或完整披露的测试规程。

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_manufacturing_inputs` | 工厂门口生产 | 纳入材料、部件和子组件的上游生产及供应商运输、工厂转换与装配、产品测试以及一次/二次包装；外购项目应链接上游数据集。 | `pep-ecopassport-pcr-ed4-2021` |
| `sb_sensitive_components` | 电子与磁性部分 | 不得仅因质量占比小而截断印刷电路板、功率半导体/模块、铜铝导体、磁芯、电容器、冷却硬件或其他环境影响显著的部件。 | `pep-ecopassport-pcr-ed4-2021` |
| `sb_subtype_specificity` | 产品系列与代理建模 | 若无经证明的同质产品系列条件及有文件依据的缩放/敏感性证据，单一光伏逆变器、镇流器、充电器或电感器不得代表另一子类型或整个类别。 | `pep-ecopassport-pcr-ed4-2021`; `iec-62477-1-2022`; `iec-62909-1-2025`; `iec-61683-1999`; `iec-61347-2-12-2024` |
| `sb_use_stage_separate` | 下游生命周期模型 | 前景制造过程不含运行中的变换损耗；下游应根据子类型特定的效率/损耗图、方向、负载制度、辅助功率和声明寿命建模。 | `pep-ecopassport-pcr-ed4-2021` |
| `sb_end_of_life_separate` | 下游生命周期模型 | 工厂门口生产不含寿命终结处理和回收信用；拆卸、收集、去污染、分选、回收和处置应作为独立情景建模。 | `pep-ecopassport-pcr-ed4-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告制造场址接收的材料、部件和子组件，并保留供应商身份、质量及上游数据集链接 |
| starting_condition_role | 前景制造从收料开始；上游生产和供应商运输仍通过已链接产品输入表示 |
| product_classification_scope | 成品镇流器、静态变流器和其他电感器的语义范围；CPC 3.0 代码 46122 是分类参考，不消除子类型差异 |
| recursive_input_rule | 本身属于该类别的外购输入仍是明确的产品输入，保留子类型、质量和上游数据集；不得在没有停止规则时把它重标为参考产出或递归展开 |
| upstream_dataset_requirement | 有供应商特定数据时优先使用；否则使用技术、地域和时间上具有代表性的数据。关键电子件、磁性材料、导体、热管理硬件和包装须明确覆盖或披露数据缺口 |
| disclosure | 声明子类型、型号/系列、工厂地域/年份、生产路线、过程纳入决定、BOM 覆盖、供应商数据覆盖、额定接口、性能测试基准、隔离、冷却、预期寿命及代理/缩放规则 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `electronic_assembly` | 电子与功率级装配 | conditional | 产品含已安装印刷电路板、功率半导体、控制电子件或电子点火/控制级时纳入 | 构建受控电子和电力变换子组件 | 每 kg 合格最终产品的合格电子组件 kg |
| `magnetic_component_assembly` | 磁性元件与绕组装配 | conditional | 电感器、电磁镇流器及含厂内绕制/磁芯部件的产品纳入 | 生产绕组/磁芯组件并采集导体、磁芯、绝缘和浸渍负荷 | 每 kg 合格最终产品的合格磁性组件 kg |
| `mechanical_thermal_integration` | 机械、绝缘与热集成 | required | 按实际采用外壳、母排、散热器、风扇、泵、液路、绝缘或灌封路线；零流声明须有该特征不存在的证据 | 将电气子组件与机械防护、绝缘和冷却集成 | 每 kg 合格最终产品的集成单元 kg |
| `final_test_packaging` | 最终装配、配置、测试与包装 | required | 始终纳入 | 生产可销售的工厂门口参考产品，并记录测试能耗、不合格品、返工和包装 | 1 kg 合格净参考产品 |

### 过程：电子与功率级装配（`electronic_assembly`）

#### 输入

##### 产品流

###### 电子板、功率半导体与元件（`electronic_components`）

按供应商零件系列和质量记录外购印刷电路板、功率模块/半导体、电容器、传感器、控制器及其他已安装元件；不得推定通用 BOM。

- 选定流：电子板、功率半导体与元件
- 流属性/单位：Mass / kg
- 数量规则：来自 BOM、收料和库存记录的实测合格投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格电子组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`pep-ecopassport-pcr-ed4-2021`

###### 装配耗材（`electronic_consumables`）

记录跨越过程边界的焊料、助焊剂、胶黏剂、三防漆、清洗剂和工艺气体。

- 选定流：电子装配耗材
- 流属性/单位：Mass / kg
- 数量规则：领用量减有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格电子组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`pep-ecopassport-pcr-ed4-2021`

###### 电子装配用电（`electronic_assembly_electricity`）

记录贴装、焊接、固化、涂覆、清洗和局部抽排的计量电力。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电力，或按 `calc_shared_resource_allocation` 分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格电子组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

###### 电子不合格品、焊渣和废耗材（`electronic_waste`）

组成或去向不同时，分别记录各个与处理相关的废物分流。

- 选定流：电子制造废物，已声明分流
- 流属性/单位：Mass / kg
- 数量规则：离开过程的实测废物，扣除有记录并返回同一过程的返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格电子组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

##### 基本流

###### 装配直接排放（`electronic_direct_emissions`）

记录焊接、涂覆和清洗产生的实测或按许可方法计算的 VOC、颗粒物等直接释放；不存在排放时应提供记录，不得用假定零值表示。

- 选定流：按物质和环境介质声明的基本流排放
- 流属性/单位：Mass / kg
- 数量规则：分配至本过程的实测或许可方法释放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格电子组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

#### 输出

##### 产品流

###### 合格电子组件（`electronic_assembly_output`）

记录转入集成的合格子组件质量，包括已纳入的耗材。

- 选定流：合格电子与功率级组件
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格电子组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_rework`
- 来源：

##### 废物流

##### 基本流

### 过程：磁性元件与绕组装配（`magnetic_component_assembly`）

#### 输入

##### 产品流

###### 导体、磁芯与绝缘材料（`magnetic_materials`）

若上游数据集不同，分别记录铜或铝绕组导体、铁氧体/钢/粉末磁芯、骨架、绝缘、漆、树脂和灌封材料。

- 选定流：按声明材料系列的磁性元件材料
- 流属性/单位：Mass / kg
- 数量规则：来自 BOM 和库存记录的实测合格投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格磁性组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`pep-ecopassport-pcr-ed4-2021`

###### 绕制与固化用电（`magnetic_assembly_electricity`）

记录绕制、磁芯装配、浸渍、固化和局部通风用电。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电力，或按 `calc_shared_resource_allocation` 分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格磁性组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

###### 导体、磁芯与绝缘废物（`magnetic_waste`）

按去向分别记录金属、磁芯、树脂和绝缘废物。

- 选定流：磁性元件制造废物，已声明分流
- 流属性/单位：Mass / kg
- 数量规则：离开过程的实测废物，扣除有记录的同过程再利用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格磁性组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

##### 基本流

###### 浸渍与固化排放（`magnetic_direct_emissions`）

使用漆、树脂、溶剂或热处理时，记录物质特定的直接排放。

- 选定流：按物质和环境介质声明的基本流排放
- 流属性/单位：Mass / kg
- 数量规则：分配至本过程的实测或许可方法释放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格磁性组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

#### 输出

##### 产品流

###### 合格磁性组件（`magnetic_assembly_output`）

记录转入集成的合格绕组/磁芯组件质量。

- 选定流：合格磁性元件组件
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格磁性组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_rework`
- 来源：

##### 废物流

##### 基本流

### 过程：机械、绝缘与热集成（`mechanical_thermal_integration`）

#### 输入

##### 产品流

###### 机械、绝缘与冷却部件（`mechanical_thermal_components`）

按质量和供应商数据集记录外壳、框架、母排、端子、连接器、散热器、风扇、泵、换热器、热界面材料、绝缘和灌封。仅当冷却液随产品供应时才纳入。

- 选定流：机械、电气接口、绝缘与冷却部件
- 流属性/单位：Mass / kg
- 数量规则：来自 BOM 和收料记录的实测合格投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 集成单元产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`pep-ecopassport-pcr-ed4-2021`

###### 电子与磁性子组件（`declared_subassemblies`）

将厂内或外购的电子和磁性子组件作为独立输入记录；外购的同类别组件遵循递归输入规则。

- 选定流：已声明电子或磁性子组件
- 流属性/单位：Mass / kg
- 数量规则：实测转入或采购质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 集成单元产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 集成用电（`integration_electricity`）

记录成形、紧固、焊接、灌封、固化和热管理系统充注用电。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电力，或按 `calc_shared_resource_allocation` 分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 集成单元产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

###### 集成废料和废冷却液（`integration_waste`）

按处理路线分别记录金属/塑料边角料、绝缘或灌封废物、废冷却液或清洗液。

- 选定流：集成废物，已声明分流
- 流属性/单位：Mass / kg
- 数量规则：离开过程的实测废物，扣除有记录的返工/再利用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 集成单元产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

##### 基本流

###### 集成直接排放（`integration_direct_emissions`）

存在焊接、涂覆、灌封、固化、冷却液充注或清洗时，记录物质特定的直接释放。

- 选定流：按物质和环境介质声明的基本流排放
- 流属性/单位：Mass / kg
- 数量规则：分配至本过程的实测或许可方法释放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 集成单元产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

#### 输出

##### 产品流

###### 待最终测试的集成单元（`integrated_unit_output`）

记录最终配置、测试和包装前的合格集成单元质量。

- 选定流：集成镇流器、变流器或电感器单元
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 集成单元产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_rework`
- 来源：

##### 废物流

##### 基本流

### 过程：最终装配、配置、测试与包装（`final_test_packaging`）

#### 输入

##### 产品流

###### 集成单元与外购末级零件（`final_stage_components`）

记录集成单元及外购控制器、显示器、电缆、连接器、标签、含固件模块和其他随附辅助设备。

- 选定流：集成单元与末级部件
- 流属性/单位：Mass / kg
- 数量规则：来自生产订单和 BOM 记录的实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 测试与老化用电（`test_electricity`）

分别记录测试/老化总输入电力和输出或回收的测试电力。没有两侧电表时不得净额处理测试能耗。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：实测测试系统输入，不扣减无记录的信用；输出/回收电力作为独立产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

###### 包装材料（`packaging_materials`）

一次和二次包装、标签及说明书应与参考产品净质量分开记录。

- 选定流：按材料系列区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：发放给合格产品的实测包装量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

###### 测试不合格品与包装废物（`final_stage_waste`）

按返工或处理去向记录不合格单元、更换零件和包装废物。

- 选定流：末级废物，已声明分流
- 流属性/单位：Mass / kg
- 数量规则：离开过程的实测废物，不含有记录并返回具名过程的返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_rework`
- 来源：

##### 基本流

###### 测试直接释放（`test_direct_emissions`）

记录测试引起的冷却液、制冷剂、气体或其他直接释放；测试路线不存在直接释放机制时记录不适用。

- 选定流：按物质和环境介质声明的基本流排放
- 流属性/单位：Mass / kg
- 数量规则：分配至最终测试的实测释放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

#### 输出

##### 产品流

###### 合格工厂门口参考产品（`reference_product_output`）

仅记录通过已声明最终验收测试的产品。产品质量不含外包装。

- 选定流：放电灯或放电管用镇流器，静止换流器，其他感应器 `2753fd9b-d904-40b2-9cae-4642fd5fc5fc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定归一化产出 1 kg 合格净产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_output_and_rework`
- 来源：

###### 输出或回收的测试电力（`recovered_test_electricity`）

仅当单独计量且证明在测试回路外使用时，记录双向测试输出的电力。

- 选定流：产品测试输出电力
- 流属性/单位：Energy / kWh
- 数量规则：单独计量的输出；没有电表时不得假定为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | 可分离的产品、生产线和过程步骤 | 优先采用产品特定 BOM、计量表、生产订单和过程细分以避免分配。 | `pep-ecopassport-pcr-ed4-2021` |
| `alloc_shared_resources` | 共用公用工程和生产线投入 | 无法细分时，采用机器时间、测试电能、材料吞吐量或生产时间等实测因果驱动量分配。仅当质量或件数最能代表资源使用时方可采用；披露选择，并对功率范围或子类型差异显著的产品进行敏感性测试。 | `pep-ecopassport-pcr-ed4-2021` |
| `alloc_rework_and_scrap` | 不合格品、返工和回收材料 | 将返工能耗和材料损失归入来源产品/过程。内部再利用仅按实测返回同一系统的数量计入；保持出售废料和处理流可见。 | `pep-ecopassport-pcr-ed4-2021` |
| `alloc_exported_test_energy` | 双向或再生式产品测试 | 将测试总输入电力和单独计量的输出作为不同流；不得用铭牌功率、模拟输出或未计量回收抵减输入。 |  |
| `alloc_recycling_separate` | 回收与资源化 | 不得从工厂门口生产中扣减潜在寿命终结回收收益；系统边界外的下游收益/负荷须单独报告。 | `pep-ecopassport-pcr-ed4-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | all applicable processes | 材料、部件、子组件和末级零件 | BOM、采购/收料和库存记录 | part id; material family; supplier; accepted quantity; unit mass; incorporated quantity; upstream dataset id; same-category subtype | 将已发布 BOM 与收料及生产领退料记录核对 | kg | 每次型号修订并每月核对 | 与生产产出相同报告期 | 每个纳入的制造场址和供应路线 | 合格投入减有记录的退回，映射至产品/过程并按合格产出归一化 | 已批准 BOM 修订；称量时的校准秤记录；供应商声明；库存核对 |
| `cp_process_energy` | all applicable processes | 电力、燃料、热和回收测试电力 | 分表、设备日志和发票 | meter id; start/end reading; energy carrier; process; product family; operating time; exported energy meter | 优先专用电表；否则按因果驱动量分配经核对的设施总量 | kWh or MJ | 连续/每月，适用时每次测试活动 | 至少 12 个有代表性的月份，或有依据的完整生产活动 | 每个纳入的制造场址 | 总消耗与输出分开；分配后归一化 | 电表校准；发票核对；停机和共用负荷日志 |
| `cp_waste_and_emissions` | all applicable processes | 废物和直接基本流排放 | 废物票据、转移联单、烟道/无组织测量及许可计算 | substance/material; mass; compartment; treatment destination; measurement method; process; date | 称量废物；直接释放采用物质特定监测或批准计算方法 | kg | 每次转运及规定监测间隔 | 与生产产出相同报告期 | 每个纳入的制造场址 | 按过程、分流/物质和去向求和；仅扣除有记录的同过程再利用 | 称重票；承运/处理记录；实验室/监测报告；方法及检出限 |
| `cp_output_and_rework` | all applicable processes | 合格产出、不合格品和返工 | 生产订单、测试记录和秤 | model; subtype; gross output; accepted output; net mass; reject mass; rework destination; test disposition | 将序列号/批次验收记录与称量产出和返工流转核对 | kg | 每批次；每月核对 | 与投入相同报告期 | 每个纳入的制造场址 | 合格净产出为分母；返工仍归属来源过程 | 最终验收报告；秤校准；批次谱系；返工闭环 |
| `cp_packaging` | `final_test_packaging` | 一次/二次包装、标签和说明书 | 包装 BOM 和领用记录 | packaging part id; material; recycled content if evidenced; issued mass; return/waste mass | 将包装 BOM 与领用和废弃量核对 | kg | 每次包装设计修订并每月 | 与生产产出相同报告期 | 每个纳入的包装场址 | 每合格产品净质量的包装，独立于参考产品质量 | 已批准包装规格；供应商质量数据；领用核对 |
| `cp_product_performance` | `final_test_packaging` | 额定接口、效率/损耗、隔离与冷却 | 铭牌/规格、型式/例行试验及校准记录 | subtype; model; input/output voltage; AC/DC; frequency; phases; direction; rated power/current/inductance; load point; input/output power; auxiliaries; temperature; isolation; cooling | 使用适用产品标准或完整披露的测试程序；保留原始配对测量 | V, A, Hz, W, VA, H, %, °C | 每个型号/型式试验及生产例行试验计划 | 当前型号修订 | 每个声明的产品系列和测试设施 | 仅计算相同工况点；保留方向和辅助设备边界 | 可得时的认可/型式试验报告；程序版本；仪器校准；合格/不合格记录 |
| `cp_service_life_evidence` | published dataset metadata | 预期使用寿命和维护曲线 | 可靠性试验、现场退货、质保或工程寿命记录 | life metric; operating profile; load; temperature; humidity; cooling maintenance; failure criterion; sample size; confidence; source period | 选择与型号相关的证据层级并记录外推 | years, h or cycles | 每次型号修订或证据更新 | 明确声明证据期 | 目标市场/使用条件 | 报告声明值及运行维护条件；无全类别默认值 | 试验/现场研究、质保分析、工程签署和不确定性披露 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_inventory_normalization` | 每个前景清单行 | 归一化数量 = 分配后的报告期数量 / 合格净参考产品质量 | 已分配投入/产出/废物/排放；来自 `cp_output_and_rework` 的合格净质量 | 每 1 kg 参考产品的数量 |  |
| `calc_efficiency` | 变流器、充电器、PCS 或电子镇流器工况点 | 效率 = 实测有用输出功率 / 实测输入功率；按方向和工况点分别计算，并披露辅助功率是否纳入 | 来自 `cp_product_performance` 的配对输入/输出功率、方向、负载、电压、频率、相数、温度和辅助边界 | 无量纲效率（%）及损耗功率（W） | `iec-61683-1999`; `eu-2019-1782` |
| `calc_mass_balance` | 各制造过程及前景总计 | 平衡差 = 质量投入 - 产品产出 - 废物产出 - 实测直接质量排放 - 有记录的库存变化；调查而非强制闭合差异 | BOM/收料质量、产出/返工、废物和直接排放记录 | 过程及总质量平衡差和解释 |  |
| `calc_shared_resource_allocation` | 共用公用工程和生产线投入 | 分配量 = 实测共用总量 × 已声明因果驱动份额；分配池份额之和须为 1 | 共用计量表/发票总量和产品特定因果驱动量 | 产品/过程分配量 | `pep-ecopassport-pcr-ed4-2021` |
| `calc_family_scaling` | 仅同质产品系列 | 应用由代表产品得出的经审查方程或插值；验证高端、低端和中位/销量代表情形，并披露敏感参数 | 产品 LCA、质量、功率范围、部件架构、损耗、冷却和寿命 | 含不确定性/敏感性证据的产品特定清单 | `pep-ecopassport-pcr-ed4-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 所有必需限定信息及精确产品子类型/型号或同质系列范围均完整。 | 产品规格、铭牌、分类和测试程序 |
| `dq_bom_coverage` | 材料/部件投入 | BOM 覆盖与产品净质量核对，并明确覆盖有影响的电子件、导体、磁芯、冷却硬件、绝缘/灌封和包装，或披露量化缺口。 | BOM 核对和 `calc_mass_balance` |
| `dq_temporal_site` | 前景记录 | 投入、产出、能源、废物和排放覆盖相同代表期及范围内所有场址；量化部分报告期和场址排除。 | 带日期记录、生产计划和场址清单 |
| `dq_upstream_data` | 外购投入 | 可得时采用供应商特定上游数据，否则在技术、地域和时间上具代表性；披露代理选择和同类别投入。 | 供应商声明、数据集元数据和代理审查 |
| `dq_performance` | 效率/损耗及电气限定信息 | 保留测试方法、工况点、方向、温度、仪器校准和辅助边界；无证据不得泛化子类型特定结果。 | 原始试验数据和 `cp_product_performance` 记录 |
| `dq_service_life` | 下游使用关联 | 寿命声明应说明运行/维护条件、证据类型、样本基础和不确定性；缺少证据时披露，不得以默认值替代。 | `cp_service_life_evidence` 记录 |
| `dq_completeness` | 建模清单 | 纳入全部可评估流或给出流特定排除理由；不得用截断隐藏高影响或有害材料/部件。 | 完整性检查表、贡献筛查和来源支持的理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 参考产出恰为 1 kg 流 `2753fd9b-d904-40b2-9cae-4642fd5fc5fc`，采用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `val_required_qualifiers` | 数据集元数据 | 声明产品子类型、额定功率或电感器额定值、输入/输出电压、电流类型、相数、效率/损耗测试基准、隔离、冷却和预期寿命，或明确标为不适用并提供等效相关属性。 | `iec-62477-1-2022`; `iec-62909-1-2025`; `iec-61683-1999`; `iec-61347-2-12-2024`; `eu-2019-1782` |
| `val_process_route` | 过程图 | 纳入所有必需过程及每个适用的条件过程；每项排除均有产品特定证据。 |  |
| `val_no_cross_subtype_proxy` | 代表和代理数据 | 不得用光伏逆变器或任何单一子类型代表整个类别；系列缩放满足同质功能、标准、技术和敏感性要求。 | `pep-ecopassport-pcr-ed4-2021` |
| `val_mass_and_rework` | 前景清单 | 产品、废物、直接排放和返工记录按 `calc_mass_balance` 核对；无法解释的差异属于问题，不得强制调整。 |  |
| `val_energy_and_efficiency` | 制造与性能数据 | 制造/测试用电与运行变换损耗分开；效率/损耗结果保留方向、负载点、电气接口、温度和辅助边界。 | `iec-61683-1999`; `eu-2019-1782` |
| `val_upstream_and_recursive_inputs` | 外购部件和子组件 | 每项外购材料投入均有上游数据集或已披露缺口；每项同类别投入保持可见，并声明子类型和停止规则。 | `pep-ecopassport-pcr-ed4-2021` |
| `val_sources_and_collection` | 所有受约束值和规则 | 每个采集/计算行均链接采集协议，每个非默认外部方法约束均引用已列来源 ID；不得引入无引证数值默认值或法律阈值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；当代表性和审查支持报告组织外复用时为 `background_dataset` |
| downstream_use | 前景数据包生产和工厂门口过程发布；为采用已声明镇流器、变流器、充电器、PCS 或电感器的产品系统构建下游 process 或 lifecyclemodel |
| allowed_use | 带明确子类型/性能限定信息的产品特定或经审查同质产品系列制造建模；使用另行提供的负载制度、效率/损耗和寿命情景开展下游使用阶段建模 |
| excluded_use | 以单一光伏逆变器或其他子类型作为全类别默认值；法律合规声明；在功能不同的变流器/镇流器/电感器间替代；用工厂测试用电建模运行损耗；在功能和服务不等价时进行产品比较 |
| required_metadata | PCR id/version；产品子类型/型号/系列；CPC 参考；工厂地域/年份；生产路线；额定电气接口及功率/电流/电感基准；变换方向；效率/损耗测试基准；隔离；冷却；使用寿命；净质量；包装质量；所含辅助设备/固件；分配；BOM/上游覆盖；数据源 |
| required_quality_disclosure | 一手数据占比；BOM 和质量平衡覆盖；计量/分配基准；供应商数据集代表性；过程排除；直接排放和废物覆盖；性能测试证据；使用寿命证据和不确定性；代理/缩放限制；审查状态 |
| update_trigger | 产品子类型或主要功能变化；额定功率/接口、拓扑、隔离或冷却发生实质变化；BOM 或供应路线变化；固件改变运行损耗；效率或寿命证据变化；生产场址/技术变化；适用标准/法规或上游数据集修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-08) | CPC 46122 身份及其在电气变压器、静态变流器和电感器下的位置 |
| `pep-ecopassport-pcr-ed4-2021` | `standard` | PEP ecopassport Program, *Product Category Rules for Electrical, Electronic and HVAC-R Products*, edition 4, 6 September 2021, https://pep-ecopassport.org/site/wp-content/uploads/2026/06/PCR-4-ed4-EN-2021-09-06-PCR-edition-4.pdf (retrieved 2026-08-08) | 生命周期边界、制造投入和包装、分配、截断保障、同质产品系列外推、性能/寿命披露及寿命终结分离 |
| `iec-62477-1-2022` | `standard` | IEC 62477-1:2022, *Safety requirements for power electronic converter systems and equipment - Part 1: General*, https://webstore.iec.ch/en/publication/28936 (retrieved 2026-08-08) | PECS 通用范围及变速驱动器、UPS、稳压 DC 电源和双向变流器的区分 |
| `iec-62909-1-2025` | `standard` | IEC 62909-1:2025, *Bi-directional grid-connected power converters - Part 1: General and safety requirements*, https://webstore.iec.ch/en/publication/69114 (retrieved 2026-08-08) | 双向 PCS 身份及其与 UPS、光伏和电动汽车充电产品标准的明确区分 |
| `iec-61683-1999` | `standard` | IEC 61683:1999, *Photovoltaic systems - Power conditioners - Procedure for measuring efficiency*, https://webstore.iec.ch/en/publication/5720 (retrieved 2026-08-08) | 仅对光伏功率调节器有条件适用的效率测量方法 |
| `iec-61347-2-12-2024` | `standard` | IEC 61347-2-12:2024, *Controlgear for electric light sources - Safety - Part 2-12: Particular requirements - DC or AC supplied electronic controlgear for discharge lamps (excluding fluorescent lamps)*, https://webstore.iec.ch/en/publication/64710 (retrieved 2026-08-08) | 电子放电灯控制装置的子类型身份及供电方式区分 |
| `eu-2019-1782` | `standard` | European Commission, Commission Regulation (EU) 2019/1782 laying down ecodesign requirements for external power supplies, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32019R1782 (retrieved 2026-08-08) | 外部电源输入/输出声明、负载点效率和空载报告的条件适用要求；不是全类别阈值 |
