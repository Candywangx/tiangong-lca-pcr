---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-receivers-whether-or-not-combined-with-radio-broadcast-receivers-or-sound-or-510168d4
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电视接收机，不论是否与无线电广播接收机或声音或视频录制或重放设备组合

## 1. 范围与适用性

本 PCR 适用于具有电视广播接收器或调谐器的大众消费类电视接收机前景数据包，包括智能或网络连接电视，以及与无线电接收或声音、视频录制或重放功能组合的电视。本 PCR 覆盖已声明显示技术和尺寸等级的类别级制造模型，而非针对某一商业型号的规则。

从业者应声明显示技术、可视对角线与屏幕面积、原生分辨率、接收与智能/联网功能、已测功率状态，以及面板、适用时的背光、电子板、机壳与支架、扬声器和包装的构成。专业或广播参考显示器、无电视接收器这一界定特征的计算机显示器或数字标牌显示器、投影仪、独立显示面板及其他零部件不在范围内。

最小前景边界从零部件和材料投入开始，覆盖电视整机装配、生产环节的软件/固件加载、产品测试、制造废物，直至最终装配工厂门口的成品接收机。仅当研究目标与范围要求时才增加分销、使用和寿命终结模块。该边界遵循 `epd-international-pcr-2024-06` 的生命周期和制造原则；功率状态和产品限定惯例参考 `eu-2019-2021-electronic-displays` 与 `energy-star-tv-9-1`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-receivers-whether-or-not-combined-with-radio-broadcast-receivers-or-sound-or-510168d4 |
| classification_refs | CPC 3.0：47313（精确） |
| covered_products | 具有内置电视调谐器/接收器的消费类电视接收机，包括智能/网络电视，以及与无线电广播接收或声音/视频录制或重放功能组合的设备 |
| excluded_products | 专业、广播、医疗、母版制作或参考显示器；无电视接收器这一界定特征的计算机显示器和数字标牌；投影仪；投影屏幕；独立面板、背光、调谐器板、电子板、扬声器、机壳及其他零部件；仅代表一个型号却作为类别平均值发布的数据集 |
| representative_product | 按显示架构、尺寸或屏幕面积等级、原生分辨率、接收器与智能功能及市场进行限定的大众消费类成品电视接收机 |
| production_route | 采购的显示面板或模组、适用时的背光、电子组件、机壳/支架、扬声器、五金件和包装在电视最终装配场址完成装配、程序加载、测试、包装和放行 |
| market_state | 功能完好且已为分销包装的成品电视接收机；参考质量为不含分销包装的产品净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 最终装配工厂门口、属于本 PCR 范围的消费类成品电视接收机 |
| How much | 1 kg 成品电视接收机净质量，不含分销包装 |
| How well | 符合所声明的显示技术、可视屏幕尺寸、原生分辨率、接收器/智能功能、随附附件及功率状态测试配置 |
| How long or cycle | 工厂门口的一次生产输出；纳入使用模块时另行声明使用寿命和使用模式 |
| reference_flow_link | `television_final_assembly_and_test` 的输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 电视接收机，不论是否有无线电广播接收机或录音、录像、重放装置 `7ee7acef-9633-4d5f-9b53-20641c3b9b65` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 显示技术及自发光/背光架构；可视对角线和屏幕面积；原生水平与垂直分辨率；电视接收/调谐器配置；智能操作系统与网络功能；受支持的功率状态曲线（开机 / 待机 / 关机 / 网络待机）；面板/模组和背光类型；电子板与电源范围；机壳/支架材料；扬声器配置；随附附件；产品净质量；包装质量与材料构成；地理区域/市场；生产期；型号族和销量加权方法 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品电视接收机 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量功能完整接收机及通常随附的可拆卸部件/附件的净质量；排除分销包装并单独报告包装。所有制造交换均归一化为 1 kg 接收机净输出。 |
| `screen_geometry` | 有效/可视屏幕 | 长度与面积 | cm；m2 | 记录可视对角线和水平/垂直尺寸；用有效屏幕尺寸计算可视面积，并披露几何方法。不得以标称机壳尺寸替代可视尺寸。 |
| `native_resolution` | 显示面板/模组 | 像素数 | pixels | 记录原生水平和垂直像素数及声明的分辨率等级；不得把可接收的输入信号格式当作原生分辨率。 |
| `power_state_measurement` | 成品接收机用电需求 | 功率 | W | 对设备存在的开机、待机、关机和网络待机状态分别测量，并声明正常/家庭配置、信号/信源、自动亮度控制条件、快速启动或唤醒功能、网络端口、软件版本和测试方法。不得把这些状态合并为一个未限定值。 |
| `component_mass_balance` | 产品物料清单 | 质量 | kg | 将面板/模组、适用时的背光、电子板和电源、机壳/支架/五金件、扬声器、线缆、附件和其他产品材料与成品净质量核对，并说明无水分基准和废料边界。 |
| `packaging_separation` | 分销包装 | 质量 | kg | 按材料和组件记录包装，并与产品净质量分开；应识别可重复使用包装，并披露其复用或分配假设。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至电视最终装配场址的外购材料和零部件，包括显示面板/模组、适用时的背光、电子组件、机壳/支架、扬声器、五金件、附件及包装 |
| starting_condition_role | 这些项目作为前景装配投入；其上游制造用供应商特定数据集或适宜的次级产品数据集表示，而不在装配过程中递归重建 |
| product_classification_scope | 由产品功能界定的消费类成品电视接收机，不包括专业显示器、监视器、投影仪或电视单一零部件 |
| recursive_input_rule | 如投入中使用完整电视接收机，应将其记录为具有自身上游数据集的外部供应产品流，并披露再使用、翻新或集成目的；不得在同一装配记录内递归应用本 PCR |
| upstream_dataset_requirement | 面板/模组、背光、电子板、电源、机壳/支架、扬声器和包装优先采用供应商特定数据；否则采用在技术、地理和时期上有代表性的次级数据集，并披露替代关系 |
| disclosure | 声明纳入的制造场址与过程、零部件数据集来源、显示架构、包装边界、电力结构、运输假设、分配、截断及任何排除的附件或模块 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `include_manufacturing_chain` | 从摇篮到工厂门口的制造模型 | 纳入原材料与零部件供应、运至最终装配的运输、装配/程序加载/测试、制造能源与废物、包装供应和成品接收机；说明声明研究中省略的生命周期模块。 | `epd-international-pcr-2024-06` |
| `declare_display_architecture` | 产品和清单边界 | 声明显示器属于带 LED 或其他背光的 LCD、OLED 或其他自发光技术，还是另一种有文件支持的架构；纳入实际存在的技术特定面板/模组、光学层、驱动器和背光部件。 | `eu-2019-2021-electronic-displays`; `us-epa-display-lca-vol1-ch1` |
| `model_use_when_in_scope` | 条件性使用模块 | 纳入使用阶段时，用分别声明的功率状态、占空时间、使用寿命和市场电力计算用电；保留开机、待机、关机和网络待机测量，并披露自动状态转换。 | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1`; `epd-international-pcr-2024-06` |
| `model_end_of_life_when_in_scope` | 条件性寿命终结模块 | 纳入寿命终结时，根据所声明市场建立收集、拆解、处理、再循环、回收和处置情景，并保持对显示模组、电子板、机壳、扬声器和包装的明确处理。 | `eu-2019-2021-electronic-displays`; `epd-international-pcr-2024-06` |
| `exclude_adjacent_display_products` | 数据集适用性 | 拒绝投影仪以及任何不属于消费电视接收机范围的专业显示器、监视器、数字标牌、面板或零部件；不得把这些产品并入类别平均值。 | `energy-star-tv-9-1` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `television_final_assembly_and_test` | 电视最终装配、程序加载、测试与包装 | 必需 | 始终纳入 | 将外购零部件和材料连接到成品接收机的前景门到门过程 | 1 kg 成品电视接收机净质量 |
| `distribution` | 分销至市场 | 条件性 | 声明研究延伸至工厂门口之后时纳入 | 运输与仓储模块 | 每 1 kg 接收机净质量，加上单独记录的包装 |
| `use` | 电视使用 | 条件性 | 研究纳入消费者使用时纳入 | 按已测运行状态和声明占空时间计算用电 | 每个声明使用寿命和市场使用模式 |
| `end_of_life` | 寿命终结处理 | 条件性 | 研究纳入处置/回收时纳入 | 收集、拆解、再循环、回收和处置模块 | 每 1 kg 接收机净质量，包装单独处理 |

### 过程：电视最终装配、程序加载、测试与包装（`television_final_assembly_and_test`）

#### 输入

##### 产品流

###### 显示面板或显示模组（`display_panel_or_module`）

按技术、尺寸、原生分辨率及包含的驱动或光学部件记录完整的供应显示面板/模组。其技术特定上游数据集以外购产品投入跨越装配边界。

- 选定流：显示面板或模组，技术特定的供应商产品流
- 流属性/单位：Mass / kg
- 数量规则：按合格电视输出分配的供应商 BOM 或收货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`epd-international-pcr-2024-06`; `us-epa-display-lca-vol1-ch1`

###### 背光系统（`backlight_system`）

当 LED 或其他背光光源、导光板、扩散和光学膜、反射件、线缆及相关驱动部件未包含在供应面板/模组中时予以记录。对于无背光的自发光显示器，记录为零并声明不适用。

- 选定流：背光系统，技术特定的供应商产品流
- 流属性/单位：Mass / kg
- 数量规则：供应商 BOM 质量；避免重复计算已包含在显示模组内的部件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`eu-2019-2021-electronic-displays`; `us-epa-display-lca-vol1-ch1`

###### 电子板、调谐器、电源和线缆（`electronic_boards_and_power`）

记录主板、电视调谐器/接收器、智能系统电子件、未包含在面板内的时序/控制器和驱动板、电源板或电源单元、连接器、线缆、天线及其他电子组件，不得将其质量与机壳合并。

- 选定流：电子板和电源组件，供应商产品流
- 流属性/单位：Mass / kg
- 数量规则：每单位合格输出的供应商 BOM 或经核验的拆解质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`epd-international-pcr-2024-06`; `us-epa-display-lca-vol1-ch1`

###### 机壳、支架、紧固件和热管理五金件（`enclosure_stand_and_hardware`）

记录前后机壳件、支架或支脚、随接收机供应的壁挂五金件、内部框架、散热器、屏蔽件、紧固件及材料牌号。机壳/支架质量应与显示和电子组件分开。

- 选定流：机壳、支架和五金件供应商产品流
- 流属性/单位：Mass / kg
- 数量规则：按组件和材料牌号的 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`eu-2019-2021-electronic-displays`; `us-epa-display-lca-vol1-ch1`

###### 扬声器和音频组件（`loudspeaker_and_audio_assemblies`）

记录内置扬声器驱动单元、箱体、声学部件、未在电子板中计算的放大器及线缆。销售配置中包含捆绑的外部声音设备时应单独披露。

- 选定流：扬声器和音频组件供应商产品流
- 流属性/单位：Mass / kg
- 数量规则：每单位合格输出的供应商 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`eu-2019-2021-electronic-displays`; `epd-international-pcr-2024-06`

###### 分销包装材料（`packaging_materials`）

按材料和组件记录纸箱、模塑纤维或塑料缓冲件、薄膜、袋、胶带、标签、托盘及可重复使用运输包装。包装是装配投入，但不包含在参考产品净质量内。

- 选定流：按材料特定产品流记录的包装材料
- 流属性/单位：Mass / kg
- 数量规则：每单位已包装合格输出的包装 BOM 和收货记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom_mass`
- 来源：`epd-international-pcr-2024-06`

###### 装配辅助材料（`assembly_auxiliaries`）

记录跨越装配边界的焊料、胶黏剂、清洗剂、防护材料、油墨、润滑剂及其他工艺辅助材料。具有实质相关性的物质不得隐藏在未限定的汇总项中。

- 选定流：按材料或物质划分的装配辅助产品流
- 流属性/单位：Mass / kg
- 数量规则：按库存变化和制造废物调整的采购/领料记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom_mass`
- 来源：`epd-international-pcr-2024-06`

###### 装配及设施用电（`assembly_electricity`）

记录装配、程序加载、物料搬运、环境控制及可分配支持作业的计量用电；产品测试用电在下项单独计量时予以排除。

- 选定流：电力，场址和市场特定供应结构
- 流属性/单位：Energy / kWh
- 数量规则：使用有文件支持的细分或分配方法将计量用电分配给合格产量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：`epd-international-pcr-2024-06`

###### 产品测试用电（`product_test_electricity`）

记录老化、功能检查、显示校准及其他放行测试的用电。保留已测测试时长和运行配置。

- 选定流：电力，场址和市场特定供应结构
- 流属性/单位：Energy / kWh
- 数量规则：测试仪/产品的计量需求，或经验证功率乘以记录的测试时长
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_test_energy`
- 来源：`epd-international-pcr-2024-06`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品电视接收机（`finished_television_receiver`）

仅记录符合所声明类别和限定信息的合格消费类成品电视接收机。输出量为分销包装前的产品净质量。

- 选定流：电视接收机，不论是否有无线电广播接收机或录音、录像、重放装置 `7ee7acef-9633-4d5f-9b53-20641c3b9b65`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格接收机输出净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_mass`
- 来源：

##### 废物流

###### 制造废料与不合格组件（`manufacturing_waste`）

按处理路线记录面板/模组不合格品、电子废料、金属、塑料、玻璃、包装废料、危险残余物和混合废物。不得在未应用并披露废物分配规则的情况下将再生废料与材料投入净额抵销。

- 选定流：按材料和处理路线划分的制造废物流
- 流属性/单位：Mass / kg
- 数量规则：与生产相核对的实测废物外运和内部废料记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品电视接收机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_waste`
- 来源：`epd-international-pcr-2024-06`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation_by_subdivision` | 共用制造作业 | 在技术可行时，通过区分生产线、工序、计量表、批次和记录来避免分配，并保留直接测量关系。 | `epd-international-pcr-2024-06` |
| `physical_allocation` | 剩余共用投入、能源、排放和废物 | 如无法细分且物理关系能够代表因果性，应使用机器时间、测试时间、件数或质量等有文件支持的物理驱动因素分配；论证所选驱动因素，并在其影响结果时开展敏感性检验。 | `epd-international-pcr-2024-06` |
| `economic_allocation_last_resort` | 无合理物理驱动因素的剩余多功能作业 | 仅把经济分配作为最后手段，并采用同一时期有代表性的市场价值；披露价格来源，并对实质性结果开展敏感性检验。 | `epd-international-pcr-2024-06` |
| `waste_point_of_substitution` | 制造和寿命终结废物 | 在有文件支持的替代点或丧失产品属性时将材料视为废物；说明截断/再循环惯例，不得重复计算再循环收益或再生投入。 | `epd-international-pcr-2024-06` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom_mass` | `television_final_assembly_and_test` | 显示模组、背光、电子组件、机壳/支架/五金件、扬声器、附件和辅助材料 | BOM、供应商规格、收货记录、经核验的拆解 | 部件号；供应商；数量；单位质量；材料；显示技术；包含的子组件；生效日期 | 导出每个纳入型号族的已发布 BOM，依据供应商或收货数据核验高质量和关键电子/显示组件，并核对替换件 | kg | 每次 BOM 修订且至少每年一次 | 有代表性的生产期，通常连续 12 个月 | 每个纳入的最终装配场址和供应商配置 | 按产量或销量加权所纳入型号族；保留型号级记录，避免无权重平均 | 已批准 BOM；供应商声明；收货测量；质量核对 |
| `cp_packaging_bom_mass` | `television_final_assembly_and_test` | 按材料和组件划分的包装 | 包装规格、收货和复用记录 | 组件；材料；单位质量；每产品件数；有证据时的再生含量；复用次数；损耗率 | 称量各包装组件或获取供应商质量并与包装产品数量核对；记录可复用包装周转 | kg | 每次包装修订且至少每年一次 | 与产品输出相同的时期 | 每个包装配置和场址 | 按产量或销量加权配置；按有证据的循环次数分配可复用包装 | 包装图纸/BOM；称量记录；供应商规格；复用日志 |
| `cp_assembly_energy` | `television_final_assembly_and_test` | 装配和设施用电 | 结算级或经校准电表、带分表分配的账单 | 表头/表尾；kWh；生产线/场址；产品；输出质量；停机时间；分配驱动因素；电力供应商/结构 | 优先采用生产线/工序分表；否则核对场址账单，并按所声明规则排除或分配无关作业 | kWh | 每月或更高频率 | 至少连续 12 个有代表性的月份 | 每个纳入装配场址 | 汇总期间用电，并在有文件支持的分配后除以合格净输出 | 电表校准；账单；生产日志；核对记录 |
| `cp_product_test_energy` | `television_final_assembly_and_test` | 老化和放行测试用电 | 测试工位电表或经验证的功率—时间记录 | 测试类型；功率；时长；配置；测试台数；重测 | 测量有代表性的测试工位，或用经验证的配置特定功率乘以记录时长；一致纳入重测和不合格品 | kWh | 连续日志或每配置有代表性的测量活动 | 与产品输出相同的时期 | 每条测试路线 | 汇总合格产品的测试用电及一致分配的不合格输出用电，再按净输出归一化 | 电表记录；测试日志；抽样计划；仪器校准 |
| `cp_finished_product_mass` | `television_final_assembly_and_test` | 合格接收机净输出 | 生产放行和经校准秤记录 | 型号；台数；单位净质量；随附附件；排除包装；日期；场址 | 称量有代表性的成品，并将台数与已放行产量核对 | kg | 每次型号引入/变更及每月产量 | 与清单投入相同的时期 | 每个纳入场址和型号族 | 汇总合格净输出质量；按产量或销量进行类别聚合 | 秤校准；放行记录；输出核对 |
| `cp_manufacturing_waste` | `television_final_assembly_and_test` | 按材料和路线划分的废料与不合格组件 | 废物外运、回收商凭证、内部废料台账 | 材料；质量；危险属性；来源；处理路线；回收量；日期 | 将外运和内部再用废物与库存变化及生产不合格品核对；保留处理路线 | kg | 每月或更高频率 | 与产品输出相同的时期 | 每个纳入场址 | 按材料和处理路线汇总；未经分配披露不得与投入净额抵销 | 地磅单；回收商凭证；废料台账；平衡检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 所有制造交换 | 将分配给合格生产的交换总量除以相同场址和时期的成品接收机净输出质量。 | 已分配交换；合格台数；型号净质量 | 每 1 kg 成品接收机净质量的交换 | `epd-international-pcr-2024-06` |
| `screen_area` | 可视显示区域 | 用实测有效水平宽度乘以有效垂直高度计算可视屏幕面积，转换为 m2 并保留尺寸。非矩形有效区域采用有文件支持的有效面积几何方法。 | 有效宽度；有效高度；几何形状 | m2 可视屏幕面积 | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1` |
| `component_mass_reconciliation` | 产品 BOM | 汇总产品零部件质量并排除分销包装，与实测成品净质量比较。调查并披露残余质量，不得强行使用无法解释的平衡项。 | 零部件质量；产品净质量 | 经核对的 BOM 和残差 | `epd-international-pcr-2024-06` |
| `packaging_intensity` | 包装 | 在应用有证据的复用次数后汇总包装组件质量，并除以成品净输出质量；单独报告各材料总量。 | 包装组件质量；台数；复用次数；输出质量 | 按材料划分的 kg 包装/kg 接收机净质量 | `epd-international-pcr-2024-06` |
| `use_energy_by_power_state` | 条件性使用模块 | 将各受支持状态的功率乘以其声明年度时长后求和，一致纳入自动转换，将 Wh 换算为 kWh，再乘以声明使用寿命；市场电力结构另行应用。 | 开机/待机/关机/网络待机功率；各状态小时数；使用寿命 | 按状态划分的寿命期用电及总量 | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 纳入的型号族 | 证明每个纳入产品均为具有所声明调谐器/接收器和功能的消费电视接收机；保存对专业显示器、监视器、数字标牌和投影仪的排除审查。 | 产品规格；调谐器声明；型号清单；排除日志 |
| `dq_category_representativeness` | 类别聚合 | 使用产量或销量权重覆盖所声明市场、技术、尺寸和分辨率组合；披露覆盖份额，绝不得把单一型号标注为类别平均值。 | 型号级产量/销量数据；加权工作表；覆盖声明 |
| `dq_bom_completeness` | 零部件和材料 | 将面板/模组、背光、板卡/电源、机壳/支架、扬声器、附件和其他材料与产品净质量核对；记录供应商数据集替代。 | 已发布 BOM；供应商数据；称量/拆解检查；残差分析 |
| `dq_power_states` | 产品限定与使用模块 | 保存测试配置以及每个受支持功率状态的独立测量，包括网络和自动亮度设置；采用对纳入型号有代表性的测量值。 | 测试报告；仪器校准；软件/配置记录；型号权重 |
| `dq_packaging` | 包装 | 按材料、配置和复用状态单独报告包装，并与已包装产量核对。 | 包装 BOM；收货/称量数据；复用记录 |
| `dq_temporal_geographic_technology` | 前景和上游数据集 | 使用有代表性的生产期和地理范围；上游数据应匹配所声明显示架构和主要零部件技术，并披露时间、地理或技术代理。 | 数据质量评估；供应商/场址日期；数据集元数据；代理日志 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_scope` | 数据集身份 | 确认 CPC 3.0 47313 语义和电视接收器/调谐器的存在；如把专业显示器、监视器、数字标牌、投影仪或零部件混入所声明产品平均值，则判定不适用。 | `energy-star-tv-9-1` |
| `validate_reference_mass` | 定量参考 | 确认参考产品使用 UUID `7ee7acef-9633-4d5f-9b53-20641c3b9b65`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，并确认包装不计入参考净质量。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 确认已声明显示技术、对角线/面积、原生分辨率、接收器/智能功能、功率状态、面板/背光、电子板/电源、机壳/支架、扬声器、包装、附件、市场、时期和聚合方法。 | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1` |
| `validate_bom_reconciliation` | 产品清单 | 确认零部件/材料总量与实测产品净质量相核对，且显示器、背光、电子板、机壳/支架和扬声器明确列示，而非隐藏在一个无支持的汇总项中。 | `epd-international-pcr-2024-06`; `us-epa-display-lca-vol1-ch1` |
| `validate_power_states` | 功率与条件性使用建模 | 确认每个受支持状态均分别测量并附配置、方法和自动转换假设；拒绝把一个未限定功率值作为使用曲线。 | `eu-2019-2021-electronic-displays`; `energy-star-tv-9-1` |
| `validate_packaging` | 包装清单 | 确认包装与产品净质量分离、按材料划分并与已包装输出核对，且复用假设有证据支持。 | `epd-international-pcr-2024-06` |
| `validate_boundary_and_sources` | 系统模型 | 确认零部件供应、装配/程序加载/测试、能源、废物、包装供应和输出均被覆盖，并采用技术、地理和时间上有代表性的上游数据集或已披露代理。 | `epd-international-pcr-2024-06` |
| `validate_allocation` | 共用作业和废物 | 确认分配前已尝试细分、剩余驱动因素有论证、经济分配仅为最后手段，且废物/再循环惯例未重复计算负荷或收益。 | `epd-international-pcr-2024-06` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 消费类电视接收机最终装配、程序加载、测试与包装的前景单元过程数据集，可选链接分销、使用和寿命终结模块 |
| downstream_use | 在声明目标与范围兼容时，用于产品碳足迹、EPD、生态设计、采购、热点、循环性和生命周期模型构建 |
| allowed_use | 声明技术、尺寸/面积、分辨率、接收器/智能功能、零部件结构、包装、地理、时期和权重的电视类别或型号族制造数据集 |
| excluded_use | 专业或广播显示器、计算机显示器、数字标牌显示器、投影仪、面板/零部件，或把单一型号结果作为宽泛类别平均值 |
| required_metadata | PCR id/版本；参考 UUID/属性/单位；CPC 参考；显示技术；可视对角线/面积；原生分辨率；调谐器/接收器与智能/网络功能；功率状态配置；面板/背光/板卡/机壳/扬声器/附件；包装；场址；市场；时期；型号覆盖与权重；系统边界；电力结构；分配；截断；数据源 |
| required_quality_disclosure | 前景原始数据份额与时期；型号/市场覆盖；显示和电子件的供应商特定覆盖；代理数据集；BOM 残差；计量与测试代表性；包装复用证据；分配和再循环假设；排除的阶段或附件 |
| update_trigger | 显示架构、面板或背光供应、屏幕尺寸/分辨率或型号组合、调谐器/智能平台、电源或已测功率状态、机壳/支架或扬声器设计、包装、装配场址/电力结构、市场组合、法规/测试方法、分配发生实质变化，或数据超过声明的代表性时期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epd-international-pcr-2024-06` | standard | EPD International，PCR 2024:06，*Electrical, electronic and electro-mechanical products*，版本 1.0.1，2025。https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f | 制造与生命周期边界、零部件/PCB 和包装清单覆盖、原始/供应商数据要求、分配层级、电力/运输/废物数据质量及条件性使用/寿命终结模块 |
| `eu-2019-2021-electronic-displays` | official_guidance | 欧盟委员会，Commission Regulation (EU) 2019/2021 laying down ecodesign requirements for electronic displays，合并文本。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019R2021 | 电子显示器定义、OLED/microLED 与背光架构、开机/关机/待机/网络待机状态、自动状态转换、屏幕/产品声明、材料与拆解考虑 |
| `energy-star-tv-9-1` | official_guidance | 美国环境保护署，*ENERGY STAR Program Requirements Product Specification for Televisions, Eligibility Criteria Version 9.1*，2024。https://www.energystar.gov/sites/default/files/2024-03/ENERGY%20STAR%20Version%209.1%20Televisions%20Specification_0.pdf | 消费电视适用性、内置调谐器/接收器范围、显示器/投影仪排除、原生分辨率和屏幕面积术语、功率状态限定与测试配置 |
| `us-epa-display-lca-vol1-ch1` | official_guidance | 美国环境保护署，*Desktop Computer Displays: A Life-Cycle Assessment, Volume 1, Chapter 1*，2001。https://19january2021snapshot.epa.gov/sites/static/files/2015-04/documents/ch-1.pdf | LCD 面板/模组、背光、控制器/电子板、电源、机壳和支架制造的定性技术分解；不作为电视定量画像 |
