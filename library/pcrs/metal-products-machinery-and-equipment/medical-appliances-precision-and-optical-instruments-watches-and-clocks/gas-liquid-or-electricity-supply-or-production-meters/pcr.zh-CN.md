---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.gas-liquid-or-electricity-supply-or-production-meters
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 气体、液体或电力供应或生产计量表

## 1. 范围与适用性

本 PCR 适用于为供应或生产核算而测量气体、液体或有功电能的成品计量表前景制造数据包。范围包括机械表、电子表和智能表；并包括计量元件、计算器或计数器、显示器，以及在产品上配置的通信和电源功能、外壳、封印和随表交付的安装附件。

每个数据包应选定并披露一个具体产品变型。至少应区分被测介质（电力、气体、水或其他液体）、供给或生产用途、计量原理与技术（机械、电子或智能/联网）、适用计量等级与额定计量范围、通信配置、电源配置、外壳等级和所含安装附件。除非以生产量加权的前景记录保留上述差异，不得平均具有实质差异的变型结果。

本 PCR 不包括并非完整供应或生产计量表的独立流量、压力、液位、电压、电流、电阻或功率传感器；单独销售的计量表零部件和分总成；数据集中器、主站系统、计费平台和其他计量服务；未随产品交付的安装作业；以及热能表。不得用单一智能电表、流量传感器或后台服务代理整个类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.gas-liquid-or-electricity-supply-or-production-meters` |
| classification_refs | CPC 3.0: 48263 (exact) |
| covered_products | 气体、水、其他液体或有功电能供应或生产用成品计量表；机械、电子和智能/联网变型；表内显示、通信与电源功能；外壳、封印和随表交付的安装附件 |
| excluded_products | 独立传感器或测试仪器；单独销售的零部件和分总成；热能表；未作为计量表组成部分交付的数据集中器、网关、主站系统、计费或能源管理软件与服务；现场安装和网络运行 |
| representative_product | 制造商工厂大门处的已完成、已校准且符合法定要求的供应或生产计量表，并声明选定介质、用途、计量技术、计量等级、接口、电源方案、外壳和随附附件 |
| production_route | 表体和计量元件制造或采购；机械/电子分总成；最终装配与配置；校准、检定和最终测试；清洁、标识、包装与发运 |
| market_state | 现场安装和使用前、制造商工厂大门处已完成校准和包装的计量表 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台符合所声明产品变型的气体、液体或有功电能供应或生产用成品校准计量表 |
| How much | 1 kg 成品净质量 |
| How well | 符合所声明的适用法定计量制度、计量或准确度等级、额定计量范围、介质相容性、安装配置、外壳等级、通信配置和电源配置 |
| How long or cycle | 一个声明的生产批次和型号或配置修订版；使用寿命和运行用能不在本制造参考流内，需要时应另行建模 |
| reference_flow_link | `packaging_and_dispatch` 的参考输出，按 1 kg 不含包装的成品净质量归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 气体、液体或电力供应或生产中用的表计 `138fcae3-ed55-4a92-a456-38674b3e0d47` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 被测介质，液体表还须声明液体类别；供给或生产用途；机械、电子或智能/联网技术；计量原理；计量或准确度等级及适用制度；额定计量范围以及适用的压力、电压/电流、温度或其他额定条件；通信协议和模块边界；内部、主电源、外部或电池供电方案；外壳材料及防护/环境等级；安装方式；所含封印、接头、电缆、天线、通信模块、电源、电池和安装附件；产品净质量；生产地域和批次期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

1 kg 参考量是质量归一化的制造声明单位，并不表示电力、气体、水、其他液体、机械、电子或智能变型提供相等的计量服务。比较性服务研究还应建模所声明的计量功能、准确度、容量、使用寿命、自耗电、通信基础设施、维护和更换情景。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 计量表成品净质量。排除包装质量、未随表交付的安装消耗品，以及声明产品边界外的远程通信或后台设备。 |
| `count_to_mass_conversion` | 以台数报告的生产记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用相同型号和配置修订版经测量或受控 BOM 的单台净质量换算。保留台数、抽样或规定的单台质量、抽样依据和换算过程。 |
| `delivered_accessory_mass` | 随表交付的附件、电池、外置电源、天线、接头、电缆、封印和安装件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将随附附件计入部件投入和产品质量，并分别识别各附件类别。除非明确作为声明计量表的一部分交付，不包括现场提供的物品或共享网络设备。 |
| `variant_weighting` | 多型号或多场址汇总 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅使用声明期间的生产质量进行加权，并按介质、用途、技术、计量等级、通信、电源、外壳和附件配置保留结果。 |
| `test_media_units` | 校准与检定介质或电气测试能量 | 原始测量属性及有文件支持的换算属性 | 原始校准单位和报告的归一化单位 | 保留测试记录原始单位。气体或液体体积、质量及电能只有在条件、密度或换算因子和不确定度有文件支持时才换算；参考产品始终采用 kg。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_scope` | 从摇篮到制造商大门的计量表生产 | 纳入材料、部件和分总成的生产与进厂运输，产品和包装装配、配置、校准和检定、最终测试、清洁、标识、包装、制造废物和直接排放，直至交付至制造商最后一个物流平台。 | `pep-ecopassport-pcr-ed4` |
| `boundary_variant_integrity` | 产品族覆盖 | 保留必需的介质、用途、技术、计量等级、通信、电源、外壳、安装和附件限定信息。不得用智能电表、独立传感器、部件或后台服务代理整个类别。 | `eu-mid-2014-32-eu`; `oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012` |
| `boundary_cutoff_control` | 可评估的输入与输出 | 使用原始或次级数据纳入所有可评估输入和输出。任何排除均须记录，并在不隐瞒显著材料或部件的前提下满足适用的质量、能量和影响截断检验。 | `pep-ecopassport-pcr-ed4` |
| `boundary_use_and_services` | 现场安装、使用、通信基础设施和生命末期 | 本制造数据包不包括现场安装、被计量的公用事业供给、运行自耗电、数据集中器、电信和后台服务、维护、更换及生命末期；研究需要时将其作为明确的下游情景建模。 | `pep-ecopassport-pcr-ed4`; `iea-4e-smart-metering-consumption-2013` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 供应商大门处采购的原材料、零部件和分总成，并具有介质、技术和型号特定的身份与数量 |
| starting_condition_role | 进入计量表部件制造、分总成和最终装配的上游产品投入 |
| product_classification_scope | 仅限 CPC 3.0 48263 成品计量表；单独销售的零件、独立传感器和服务系统不属于规范产品范围 |
| recursive_input_rule | 若本类别完整计量表被用作投入，应作为明确的再使用或再制造完整计量表投入记录，附其上游数据集并声明原状态；不得在当前计量表过程中递归重建其制造 |
| upstream_dataset_requirement | 每种材料、部件、分总成、包装物、能源载体、测试介质和处理服务均需要具有地域和技术代表性的上游数据集，或记录数据缺口 |
| disclosure | 声明工厂场址、生产期间、介质和用途、计量原理、机械/电子/智能技术、计量等级和额定条件、通信与电源配置、外壳与安装方式、随附附件、供应商数据覆盖、排除项、分配、良率及校准或测试边界 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication_and_subassembly` | 部件制造与分总成 | `required` |  | 机械计量元件、表体、电子、通信和电源功能、外壳及随附附件的前景制造与供应商关联生产 | 转入最终装配的合格计量表分总成 kg |
| `final_assembly_and_configuration` | 最终装配与配置 | `required` |  | 声明计量表的装配、固件或计数器配置、封印准备与标识 | 未检定组装计量表 kg |
| `calibration_verification_and_test` | 校准、法定计量检定与最终测试 | `required` |  | 介质与技术特定的校准、检定、环境或功能测试、调整、封印和验收 | 验收的已校准计量表 kg |
| `packaging_and_dispatch` | 清洁、标识、包装与发运 | `required` |  | 最终清洁与标识、加入声明附件和文件、包装并交付至制造商物流平台 | 1 kg 不含包装质量的成品包装计量表输出 |

### 过程：部件制造与分总成（`component_fabrication_and_subassembly`）

#### 输入

##### 产品流

###### 机械表体、计量元件与接液部件（`mechanical_meter_components`）

记录适用于所选介质和原理的全部采购或内部生产表体、计量腔、转子、膜片、涡轮、超声通道、电流或电压感测元件、端子、阀门和其他计量元件。

- 选定流：机械计量表表体与计量元件，变型特定
- 流属性/单位：Mass / kg
- 数量规则：按声明型号和批次，从受控 BOM 与生产领料记录汇总合格投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 计量表成品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_component_mass`
- 来源：`pep-ecopassport-pcr-ed4`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012`

###### 电子、显示与计数器部件（`electronic_register_components`）

所选计量表为电子或智能表时，记录印制电路组件、计量芯片、显示器、存储器、计数器、传感器和连接器；纯机械变型应记录为零并说明不适用理由。

- 选定流：电子、显示与计数器部件，变型特定
- 流属性/单位：Mass / kg
- 数量规则：从受控 BOM 及采购或领料记录汇总部件合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 计量表成品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_component_mass`
- 来源：`pep-ecopassport-pcr-ed4`; `oiml-r46-2012`; `iea-4e-smart-metering-consumption-2013`

###### 通信模块与接口（`communication_components`）

记录集成或随表交付的无线、电信、电力线载波、有线总线、光学或本地接口硬件和天线。排除未随表交付的远程网关、集中器、电信网络和后台系统。

- 选定流：通信模块与接口，变型特定
- 流属性/单位：Mass / kg
- 数量规则：按声明通信配置，从 BOM 与采购记录取得实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 计量表成品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_component_mass`
- 来源：`iea-4e-smart-metering-consumption-2013`

###### 电源与电池（`power_supply_components`）

按照声明电源配置，记录内部或随附的主电源、电源适配器、备用电池、原电池和能量采集部件。

- 选定流：电源与电池部件，变型特定
- 流属性/单位：Mass / kg
- 数量规则：从受控 BOM 与采购记录取得实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 计量表成品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_component_mass`
- 来源：`pep-ecopassport-pcr-ed4`; `iea-4e-smart-metering-consumption-2013`

###### 外壳、封印和随附安装附件（`enclosure_and_accessories`）

记录外壳部件、视窗、垫片、封印、端子盖、接头、法兰、电缆、安装五金及其他随声明计量表交付的安装附件。

- 选定流：外壳、封印与安装附件，变型特定
- 流属性/单位：Mass / kg
- 数量规则：从 BOM、成套清单和领料记录取得合格实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 计量表成品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_component_mass`
- 来源：`pep-ecopassport-pcr-ed4`; `oiml-r49-2024`

###### 制造用电（`fabrication_electricity`）

记录本过程机加工、成型、注塑、表面处理、印制电路或电子分总成、焊接和分总成操作的计量用电。

- 选定流：电力，工厂供电组合
- 流属性/单位：Energy / kWh
- 数量规则：过程计量用电减去有依据的非产品负荷，并按第 7 节分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格计量表分总成输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`pep-ecopassport-pcr-ed4`

###### 制造用水与过程辅助材料（`fabrication_water_auxiliaries`）

记录跨越前景边界的水、清洗剂、机加工液、电镀化学品、焊料和其他过程辅助材料。

- 选定流：制造用水与过程辅助材料，场址特定
- 流属性/单位：供应商属性与单位；水以 kg 或 m3 报告并保留换算条件
- 数量规则：归属于部件制造与分总成的计量、采购或库存变化数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格计量表分总成输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_materials_and_water`
- 来源：`pep-ecopassport-pcr-ed4`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格计量表分总成（`conforming_meter_subassemblies`）

记录转入最终装配的实测质量，并保留机械、电子、通信、电源、外壳和附件配置标识。

- 选定流：合格计量表分总成，变型特定
- 流属性/单位：Mass / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格计量表分总成输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_output_and_scrap`

##### 废物流

###### 制造废料与不合格部件（`fabrication_scrap`）

区分金属、塑料、电子、电池、危险及其他废物流并记录处理去向；不得在前景过程内计入避免原生材料生产的抵扣。

- 选定流：制造废料与不合格部件，废物类别特定
- 流属性/单位：Mass / kg
- 数量规则：称量的废物发运量加库存变化，并与过程物料平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格计量表分总成输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_output_and_scrap`
- 来源：`pep-ecopassport-pcr-ed4`

##### 基本流

###### 制造直接排放（`fabrication_direct_emissions`）

按基本流身份记录涂覆、电镀、焊接、清洗、燃烧或其他纳入前景操作的实测或按许可证方法计算的排放。

- 选定流：向空气、水或土壤的直接排放，物质特定
- 流属性/单位：Mass / kg
- 数量规则：归属于纳入生产的实测量或许可证方法计算量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格计量表分总成输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`

### 过程：最终装配与配置（`final_assembly_and_configuration`）

#### 输入

##### 产品流

###### 计量表分总成与采购的最终装配零件（`assembly_components`）

记录进入最终装配的配置特定机械、电子、通信、电源、外壳、封印和附件投入，不得以通用智能表代理。

- 选定流：计量表分总成与采购装配零件，变型特定
- 流属性/单位：Mass / kg
- 数量规则：实测领料质量并与合格装配输出和废物核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未检定组装计量表输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

###### 装配能源与辅助材料（`assembly_energy_auxiliaries`）

记录装配、固件或计数器加载、配置和标识所用电力、压缩空气、紧固件、焊料、胶黏剂、润滑剂和清洗材料。

- 选定流：装配能源与辅助材料，场址特定
- 流属性/单位：供应商属性与单位
- 数量规则：归属于装配线的计量、采购或库存变化数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未检定组装计量表输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`pep-ecopassport-pcr-ed4`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未检定组装计量表（`assembled_unverified_meter`）

记录转入校准和检定的组装计量表，并保留型号、介质、用途、技术、目标计量等级、通信、电源、外壳和附件标识。

- 选定流：未检定的组装供应或生产计量表
- 流属性/单位：Mass / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未检定组装计量表输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

##### 废物流

###### 装配不合格品与废物（`assembly_waste`）

按处理路线记录不合格零件、焊料和胶黏剂废物、清洗废物及其他装配废物。

- 选定流：装配不合格品与废物，废物类别特定
- 流属性/单位：Mass / kg
- 数量规则：称量或受控处置量，并与装配物料平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未检定组装计量表输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_output_and_scrap`

##### 基本流

### 过程：校准、法定计量检定与最终测试（`calibration_verification_and_test`）

#### 输入

##### 产品流

###### 待检定组装计量表（`meters_for_verification`）

按产品变型和测试路线记录进入校准与测试的质量和台数。

- 选定流：未检定的组装供应或生产计量表
- 流属性/单位：Mass / kg，并补充台数
- 数量规则：实测转移质量和台数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收的已校准计量表输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_batch_records`

###### 校准介质、测试能量与消耗品（`calibration_media_energy`）

按照适用计量表类型和测试计划，记录电力或模拟电气负载、水、空气、气体、液体测试介质、参考标准器运行、封印及其他消耗品。保留原始计量单位与测试条件。

- 选定流：校准介质、测试能量与消耗品，介质特定
- 流属性/单位：原始校准属性与单位
- 数量规则：分配至批次合格与不合格计量表的测试台计量消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收的已校准计量表输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_resources`
- 来源：`oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收的已校准计量表（`accepted_calibrated_meter`）

仅在完成适用准确度、额定条件、软件或计数器、通信、电源和封印检查后记录验收输出。

- 选定流：验收的已校准供应或生产计量表
- 流属性/单位：Mass / kg
- 数量规则：与校准和检定记录关联的实测合格质量和台数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收的已校准计量表输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_batch_records`
- 来源：`eu-mid-2014-32-eu`; `oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012`

##### 废物流

###### 不合格计量表与废测试消耗品（`calibration_rejects`）

按返工、回收、处理或处置路线记录不合格品、更换零件、废封印和测试消耗品；返工返回不得重复计为新材料投入。

- 选定流：校准不合格品与废消耗品，废物类别特定
- 流属性/单位：Mass / kg
- 数量规则：与测试批次处置记录关联的称量或受控数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收的已校准计量表输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_batch_records`

##### 基本流

###### 释放的校准介质（`released_calibration_media`）

只有测试水、气体或其他液体跨越技术系统边界时才记录为直接环境释放；否则将回收、再循环或处理记录为产品流或废物流。

- 选定流：释放的校准介质，物质特定
- 流属性/单位：原始测量属性与单位
- 数量规则：计量排放量减去回收或再循环量，并记录条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收的已校准计量表输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_calibration_resources`

### 过程：清洁、标识、包装与发运（`packaging_and_dispatch`）

#### 输入

##### 产品流

###### 验收计量表与随附附件（`accepted_meter_and_accessories`）

记录已校准计量表以及在声明配置中交付的准确封印、接头、电缆、天线、电源、电池、安装件和文件。

- 选定流：验收的已校准计量表与随附附件包
- 流属性/单位：Mass / kg
- 数量规则：从包装记录取得附件包实测质量和数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 计量表成品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`

###### 包装材料与发运能源（`packaging_materials_energy`）

记录直至制造商最后物流平台的初级和次级包装、标签、手册、托盘、可复用包装损耗、清洗材料、电力和燃料。

- 选定流：包装材料与发运能源，材料或载体特定
- 流属性/单位：供应商属性与单位
- 数量规则：归属于发运产品的采购或领用包装数量及计量能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 计量表成品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：`pep-ecopassport-pcr-ed4`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 气体、液体或电力供应或生产用成品计量表（`reference_meter_output`）

这是 PCR 参考输出，包含选定成品计量表及随附附件，但 1 kg 参考量不含包装质量。

- 选定流：气体、液体或电力供应或生产中用的表计 `138fcae3-ed55-4a92-a456-38674b3e0d47`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 计量表成品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装与发运废物（`packaging_dispatch_waste`）

按材料与处理路线记录发运前产生的边角料、损坏包装、不合格标签和其他废物。

- 选定流：包装与发运废物，废物类别特定
- 流属性/单位：Mass / kg
- 数量规则：称量或受控处置数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 计量表成品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：`pep-ecopassport-pcr-ed4`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多产品部件、装配、校准与包装线 | 优先进行计量表、产线、批次或过程层面的计量与细分。有直接记录时分别计量电力、水、辅助材料、不合格品和排放。 | `pep-ecopassport-pcr-ed4` |
| `allocation_physical_then_economic` | 无法避免的共享前景负荷 | 使用能表示过程因果关系的物理驱动因子，如机器时间、测试台时间、处理质量或台数。仅在不存在可辩护的物理驱动因子时使用经济分配，并披露方法与敏感性。 | `pep-ecopassport-pcr-ed4` |
| `allocation_rework_and_scrap` | 返工、制造废料与废物处理 | 将内部返工返回原过程，不重复计量。分配负荷直至废物离开前景边界；不得在参考产品清单内计入避免原生材料生产的抵扣。 | `pep-ecopassport-pcr-ed4` |
| `allocation_variant_weighting` | 产品族和多场址数据集 | 按声明期间成品净生产质量加权场址和变型记录，并保留各必需限定信息的生产总量。若会掩盖 BOM、测试路线或用能的实质差异，不得跨介质或技术平均。 | `pep-ecopassport-pcr-ed4` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_mass` | `component_fabrication_and_subassembly` | 变型特定的材料、部件、通信、电源、外壳和附件投入 | 受控 BOM、采购与领料记录、部件质量测量 | model_revision; medium; duty; technology; metrological_class; component_family; material; supplier; quantity; mass_per_item; accepted_mass; communication_configuration; power_configuration; enclosure; accessory_inclusion | 将受控 BOM 与采购或领料记录核对；无供应商质量时称量代表性零件；保留型号和修订版 | kg and item | 每次 BOM 修订与生产批次 | 至少覆盖声明生产期间 | 每个贡献工厂及供应商数据范围 | 逐部件类别汇总合格投入质量并除以成品净质量；仅在限定信息分层后按生产质量加权场址与变型 | 批准 BOM；秤校准；采购或领料记录；抽样记录；供应商声明 |
| `cp_process_energy` | `component_fabrication_and_subassembly`; `final_assembly_and_configuration`; `packaging_and_dispatch` | 电力、燃料、压缩空气和其他过程能源 | 分表、公用事业账单和运行日志 | meter_id; energy_carrier; opening_reading; closing_reading; operating_hours; line; batch; non_product_load; allocation_driver | 优先分表计量；否则将账单与产线运行记录核对并记录分配 | kWh, MJ, kg or m3 in original carrier unit | 每班或每批，按月汇总 | 至少连续 12 个代表性月，或完整的较短生产期 | 每个贡献生产场址 | 扣除有依据的非产品负荷，按因果驱动因子分配，再对合格过程输出归一化 | 仪表校准；账单核对；运行日志；分配工作表 |
| `cp_process_materials_and_water` | `component_fabrication_and_subassembly`; `final_assembly_and_configuration` | 水、化学品和过程辅助材料 | 仪表、采购、领料、罐存与库存记录 | material_id; opening_stock; purchases; closing_stock; process_return; water_meter; batch; concentration; density; temperature | 使用直接计量或质量平衡；保留原单位和换算条件 | kg, L or m3 as measured | 每批或每月 | 声明生产期间 | 每个贡献生产场址 | 消耗量等于期初库存加采购减期末库存再减有记录的退回量；对合格过程输出归一化 | 校准仪表；库存核对；供应商规格；换算记录 |
| `cp_process_output_and_scrap` | `component_fabrication_and_subassembly`; `final_assembly_and_configuration` | 合格输出、不合格品、废料与废物 | 生产台数、称量单、废物联单和库存记录 | process_id; model_revision; input_mass; accepted_mass; accepted_count; rework_return; waste_mass; waste_family; treatment_route | 称量合格输出和分类废物；核对台数-质量换算与内部返工 | kg and item | 每批 | 声明生产期间 | 每个贡献生产场址 | 合格输出加废物加有记录的库存变化应在所述不确定度内与实测投入核对 | 秤校准；批次流转单；废物联单；核对报告 |
| `cp_direct_emissions` | `component_fabrication_and_subassembly`; `final_assembly_and_configuration` | 向空气、水和土壤的直接排放 | 连续监测、烟道或废水检测、许可证计算和运行记录 | substance; compartment; concentration; flow_rate; operating_time; calculation_method; detection_limit; batch_or_period | 使用实测排放或适用的有文件支持许可证方法；除非实际测量，不扣除控制抵扣 | kg or original regulated unit | 按监测或许可证频率 | 声明生产期间 | 每个排放场址 | 在运行期间积分浓度和流量；按因果过程驱动分配并对合格输出归一化 | 校准与实验室报告；许可证方法；运行日志；不确定度说明 |
| `cp_assembly_records` | `final_assembly_and_configuration` | 装配投入、配置输出与装配不合格品 | 批次流转单、领料记录、配置日志和质量记录 | model_revision; medium; duty; technology; metrological_class_target; communication; power; enclosure; accessory_kit; input_mass; output_mass; count; reject_mass | 将部件领料与各批次配置日志关联；称量转移输出和不合格品 | kg and item | 每批 | 声明生产期间 | 每个装配场址 | 按准确配置汇总并核对质量，再对组装输出归一化 | 可追溯批次标识；批准配置；秤校准；不合格处置 |
| `cp_calibration_batch_records` | `calibration_verification_and_test` | 校准投入、合格计量表、返工和不合格品 | 校准证书、测试台日志、检定记录与处置日志 | meter_serial_or_batch; model_revision; medium; duty; principle; metrological_class; rated_range; rated_conditions; test_standard; test_result; adjustment; seal; software_or_register_version; input_mass; accepted_mass; reject_mass | 将每台表或受统计控制批次关联至适用测试计划和验收记录 | kg, item and original metrology units | 每台表或受控批次 | 声明生产期间 | 每个校准或测试场址 | 仅汇总测试路线和必需限定信息相同的合格表；分别保留返工与不合格品 | 参考标准器溯源；测试台校准；证书或检定记录；验收签字 |
| `cp_calibration_resources` | `calibration_verification_and_test` | 测试介质、电气负载、参考标准器运行和消耗品 | 测试台仪表与资源日志 | medium; source; opening_reading; closing_reading; recirculated_quantity; recovered_quantity; discharged_quantity; pressure; temperature; density; electrical_energy; test_hours; accepted_mass | 计量批次资源用量；分别记录再循环和回收；保留原条件和单位 | Original calibrated unit | 每测试批次 | 声明生产期间 | 每个校准或测试场址 | 净投入等于总供给减回收返回；排放量等于再循环后的实测释放；对合格输出归一化 | 仪表校准；环境条件；换算因子；平衡检查 |
| `cp_packaging_and_dispatch` | `packaging_and_dispatch` | 随附产品包、包装、标签、手册、能源与发运前废物 | 包装清单、BOM、采购或领料记录、称量与物流记录 | model_revision; meter_mass; accessory_mass; packaging_material; packaging_mass; reusable_packaging; label_and_manual_mass; energy; dispatched_count; waste_mass | 将计量表净产品包与包装分别称量；核对领用包装和发运记录 | kg, item and energy carrier unit | 每批或每发运批次 | 声明生产期间 | 每个包装与发运场址 | 将产品和包装分别归一化到 1 kg 成品净质量；不得将包装质量加入参考量 | 秤校准；包装清单；包装规格；发运记录；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 包装后的参考产品 | 参考净质量等于成品计量表加随附附件质量，不含全部初级、次级和运输包装 | meter_mass; delivered_accessory_mass; packaging_mass | kg net finished product | `pep-ecopassport-pcr-ed4` |
| `calc_count_to_mass` | 基于台数的生产记录 | 质量等于合格台数乘以相同型号和修订版经测量或受控的单台净质量 | accepted_count; mass_per_item; sampling_basis | kg product or component |  |
| `calc_process_normalization` | 每个过程清单行 | 归一化数量等于归属过程数量除以合格过程输出质量，再乘以 1 kg | attributable_amount; accepted_output_mass | amount per kg accepted output |  |
| `calc_test_media_balance` | 校准气体或液体 | 净消耗或排放介质等于总供给减实测回收或再循环返回；体积-质量换算仅在温度、压力及密度或换算方法有记录时进行 | gross_supply; recovered_return; recirculated_quantity; discharge; temperature; pressure; density_or_factor | net medium amount per kg accepted meter | `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012` |
| `calc_variant_site_weighting` | 多变型或多场址数据集 | 加权结果等于各分层场址-变型结果乘其成品净生产质量之和，再除以成品净生产总质量 | site_variant_result; site_variant_production_mass; qualifier_stratum | production-mass-weighted result with retained qualifier distribution | `pep-ecopassport-pcr-ed4` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与所有汇总变型 | 保留介质、供给或生产用途、机械/电子/智能技术、计量原理、计量等级与额定范围、通信、电源、外壳、安装及随附附件配置 | 批准的产品规格、受控 BOM、型式批准或合格记录及生产量表 |
| `dq_metrological_traceability` | 校准、检定与最终测试 | 使用可溯源参考标准器和适用测试计划；保留环境和运行条件、适用时的软件或计数器版本、调整、验收和不确定度记录 | 校准证书、测试台校准、检定报告及批次或序列可追溯性 |
| `dq_mass_balance` | 部件制造、装配、校准和包装 | 核对实测投入、合格输出、内部返工、库存变化、废物和直接排放；记录不确定度和未解决差异 | 过程级质量平衡表、秤校准和处置记录 |
| `dq_temporal_and_site_coverage` | 前景生产 | 覆盖全部贡献场址和至少连续 12 个代表性月；完整生产期较短时覆盖该完整期间；披露爬坡、异常停机和缺失时段 | 场址清单、生产日历、仪表覆盖表和例外日志 |
| `dq_supplier_and_background_coverage` | 材料、部件、分总成、包装、能源、测试介质和处理 | 使用有代表性的上游数据集，披露供应商特定数据覆盖、地域、技术、数据年龄和代理；不得将窄智能表数据集视为所有变型的代表 | 供应商声明、数据集登记表、数据缺口表和代理理由 |
| `dq_completeness_and_cutoff` | 所有可评估输入与输出 | 根据适用质量、能量和环境影响截断准则量化并论证排除项，并系统纳入显著材料与部件 | 完整性计算、排除登记与敏感性检查；`pep-ecopassport-pcr-ed4` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 产品流 UUID、Mass 属性 UUID、Units of mass UUID 和 kg 单位应与第 3 节一致；输出应为成品计量表，而非零件、传感器或服务。 |  |
| `validation_required_qualifiers` | 数据集身份 | 拒绝缺失被测介质、用途、技术、原理、计量等级与额定条件、通信、电源、外壳、安装、随附附件、净质量、地域或期间的数据包。 | `eu-mid-2014-32-eu`; `oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012` |
| `validation_process_coverage` | 前景清单 | 必须包含部件与分总成、最终装配与配置、校准与检定、包装与发运过程，并明确包含有条件的电子、通信、电源和介质特定资源，或记录不适用。 | `pep-ecopassport-pcr-ed4`; `iea-4e-smart-metering-consumption-2013` |
| `validation_mass_and_yield` | 过程平衡 | 确认投入、合格输出、返工、库存变化、废物和直接排放在记录的测量不确定度内核对一致，且不合格品未被隐藏在合格良率中。 | `pep-ecopassport-pcr-ed4` |
| `validation_calibration_traceability` | 合格产品输出 | 确认每台合格计量表或受控批次均关联适用测试计划、可溯源标准器、额定条件、计量等级、测试结果、调整、适用时的软件或计数器版本、封印和验收记录。 | `eu-mid-2014-32-eu`; `oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012` |
| `validation_cutoff_and_sources` | 完整性与证据 | 确认每项排除均已量化并论证，显著材料和部件均被保留，所有非默认方法约束引用有效 source id，且所有前景行关联记录或计算。 | `pep-ecopassport-pcr-ed4` |
| `validation_variant_aggregation` | 产品族与场址 | 若未提供按限定信息分层的记录、生产质量权重及敏感性或变异披露，拒绝合并具有实质不同介质、用途、技术或配置的数据。 | `pep-ecopassport-pcr-ed4` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明的成品供应或生产计量表变型前景制造数据包 |
| downstream_use | `secondary_dataset`; `background_dataset`; 作为下游 `process` 或 `lifecyclemodel` 的投入，由其加入分销、安装、被计量公用事业服务、运行自耗电与通信、维护、更换和生命末期情景 |
| allowed_use | 声明的准确计量表变型从摇篮到制造商大门建模，或透明保留全部必需限定信息的生产加权产品族建模 |
| excluded_use | 以一个智能电表、一个气表或水表、独立传感器、部件或后台服务代理整个类别；在未提供功能、准确度、容量、寿命和使用阶段情景时作计量服务比较声明 |
| required_metadata | PCR id 与版本状态；产品型号与修订版；介质与液体类别；供给或生产用途；机械/电子/智能技术与原理；计量等级、额定范围和适用制度；通信与电源配置；外壳与安装；随附附件；净质量；场址与期间；参考流 UUID；分配；数据源与前景记录沿袭 |
| required_quality_disclosure | BOM 与供应商数据覆盖；前景仪表覆盖；场址与时间代表性；校准和检定可追溯性；质量平衡闭合与不确定度；排除与截断检查；分配；代理数据集；变型权重；缺失数据与敏感性 |
| update_trigger | 被测介质或用途、计量原理、计量等级或额定范围、材料或部件设计、通信或电源配置、外壳或随附附件、工厂路线、校准方法、供应商或背景数据集、分配或生产组合发生实质改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `pep-ecopassport-pcr-ed4` | `standard` | PEP Ecopassport, Product Category Rules for Electrical, Electronic and HVAC-R Products, PEP-PCR-ed4-EN-2021 09 06, https://register.pep-ecopassport.org/documents/public/PCR-4-EN（检索于 2026-08-09） | 制造与生命周期边界、材料和部件、包装、截断、分配、前景报告与数据质量 |
| `eu-mid-2014-32-eu` | `official_guidance` | European Parliament and Council, Directive 2014/32/EU on measuring instruments, https://eur-lex.europa.eu/eli/dir/2014/32/oj（检索于 2026-08-09） | 计量表类别范围、合格评定、额定条件、准确度等级和制造商文件要求 |
| `oiml-r46-2012` | `standard` | OIML R 46-1/-2:2012, Active electrical energy meters, https://www.oiml.org/en/files/pdf_r/r046-1-2-e12.pdf/@@download/file/R046-1-2-e12.pdf（检索于 2026-08-09） | 电能表技术、计量与性能测试、额定条件、双向与软件控制配置 |
| `oiml-r49-2024` | `standard` | OIML R 49-1:2024, Water meters for cold potable water and hot water, https://www.oiml.org/en/files/pdf_r/r049-1-e24.pdf（检索于 2026-08-09） | 水表材料、结构、安装、计量要求与测试 |
| `oiml-r117-2019` | `standard` | OIML R 117-1:2019, Dynamic measuring systems for liquids other than water, https://www.oiml.org/en/files/pdf_r/r117-1-e19.pdf（检索于 2026-08-09） | 其他液体计量表范围、计量系统组成、额定条件、计量要求与测试 |
| `oiml-r137-2012` | `standard` | OIML R 137-1&2:2012, Gas meters, https://www.oiml.org/en/files/pdf_r/r137-1-2-e12.pdf/@@download/file/R137-1-2-e12.pdf（检索于 2026-08-09） | 气体类别、压力与流量范围、准确度等级、额定条件、计量测试和软件控制气表要求 |
| `iea-4e-smart-metering-consumption-2013` | `official_guidance` | IEA 4E, Smart Metering Consumption, Appendix C English report, 2013, https://www.iea-4e.org/wp-content/uploads/2021/01/APPENDIX_C_Smart_Metering_Consumption_english.pdf（检索于 2026-08-09） | 仅用于智能/电子表条件分支：计量、通信、硬件、附加功能、电源、自耗电和下游通信基础设施分离 |
