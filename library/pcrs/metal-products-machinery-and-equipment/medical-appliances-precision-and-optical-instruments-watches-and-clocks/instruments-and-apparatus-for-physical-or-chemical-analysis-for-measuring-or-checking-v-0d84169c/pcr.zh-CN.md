---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-physical-or-chemical-analysis-for-measuring-or-checking-v-0d84169c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 物理或化学分析及粘度、孔隙率、膨胀、表面张力、热量、声音或光量测量仪器与装置

## 1. 范围与适用性

本 PCR 适用于成品仪器和装置的前景制造及工厂门口放行，其主要功能为物理或化学分析，测量或检查粘度、孔隙率、膨胀、表面张力或类似属性，或测量或检查热量、声音或光量。只有当申报产品的主要功能和产品分类属于 CPC 48253 时，电力驱动及非电力产品才属于本 PCR 范围。

本 PCR 以生产数据包为优先，规定针对已申报型号或型号族、按质量归一化的前景数据包。它不提供默认使用情景、使用寿命、校准间隔、使用阶段耗材需求或生命周期末端情景。这些方面需要产品特定研究或适用的产品特定规则。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-physical-or-chemical-analysis-for-measuring-or-checking-v-0d84169c |
| classification_refs | CPC 3.0: 48253 (exact) |
| covered_products | 物理或化学分析成品仪器及装置；粘度计；孔隙率仪；膨胀仪；表面张力仪；属于 CPC 48253 的量热、声音测量和光量测量仪器及装置 |
| excluded_products | 温度计、高温计、气压计、湿度计和干湿球湿度计；流量、液位或压力仪器；电力供应计量表；电离辐射仪器；材料机械性能试验机；自动调节或控制装置；独立零部件、附件、校准服务和实验室耗材 |
| representative_product | 工厂门口处已经校准或通过放行测试的分析或测量成品仪器，以已申报产品型号或按质量加权的型号族表示 |
| production_route | 采购材料、部件、传感或光学模块及电子组件；条件性厂内制造；总装与集成；校准或放行测试；包装及工厂门口放行 |
| market_state | 成品，已制造；生产混合，在工厂；仪器净质量与运输包装分别报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门口提供属于本 PCR 范围的仪器或装置成品 |
| How much | 1 kg 放行成品净质量，不含单独报告的运输包装 |
| How well | 符合已申报的测量原理、被测量、工作范围、分辨率、准确度或不确定度说明以及适用的放行测试或校准准则 |
| How long or cycle | 一个制造和放行周期；不隐含使用阶段时长或使用寿命声明 |
| reference_flow_link | `analytical_measurement_instrument_at_factory_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 物理或化学分析用仪器及装置，测量或检查粘度、孔隙率、膨胀率、表面张力或类似性能的仪器及装置，或测量或检查热量、音量或光量用仪器及装置 `529b86b6-3103-4ca8-b9ae-0fbcadfb0a80` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 已申报产品型号或型号族规则；被测量或分析原理；仪器配置及所含附件；测量范围；分辨率；准确度或不确定度说明；供电类型；校准或放行测试依据；产品净质量；包装状态；制造场址和地理范围；生产期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 放行参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有报告的前景数量归一化至 1 kg 放行仪器净质量；单独报告的运输包装不计入分母。 |
| `item_to_mass_conversion` | 仅以件数记录的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/item 和 kg | 使用已申报型号的实测净质量或有文件记录的生产加权型号族平均值换算件数；保留称量记录和所代表的总体。 |
| `energy_quantity_preservation` | 电力和燃料 | 已申报能源或燃料属性 | kWh、MJ 或原始计量单位 | 保留计量单位和换算系数；除非记录了运行时间和负载，否则不得把设备额定功率当作能量。 |
| `packaging_mass_separation` | 运输包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将包装材料按材料类别和质量作为投入报告，但不得将其质量加入 1 kg 产品净质量参考分母。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate_to_gate` | 前景制造 | 纳入从采购材料和部件接收开始，经条件性厂内部件制造、总装、校准或放行测试、包装，直至成品在工厂门口放行的所有直接控制制造活动。 | `eu-pef-2021-2279`; `iec-63366-2025` |
| `boundary_complete_inputs_outputs` | 每个前景过程 | 采集所有已知材料、部件、能源、水、耗材、产品、共产品、废物以及向空气、水体或土壤的直接流；每一项省略都必须论证并披露。 | `eu-pef-2021-2279` |
| `boundary_upstream_linkage` | 采购产品和服务 | 将采购材料、部件、模块、电力、燃料、运输和废物处理保留为可见产品流或废物流，并链接具有地理与技术代表性的上游数据集。 | `eu-pef-2021-2279` |
| `boundary_use_end_of_life_exclusion` | 数据集声明 | 排除工厂门口后的配送、安装、使用阶段电力和耗材、维护、在役再校准以及生命周期末端；下游研究可增加明确的产品特定情景，但不得改变本前景清单。 | `iec-63366-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购材料、部件、子组件、传感或光学模块、电子组件、过程助剂、公用工程和包装已送达所申报制造场址 |
| starting_condition_role | 门到门前景进入条件；上游生产和进厂运输仍需链接背景数据 |
| product_classification_scope | 主要功能属于 CPC 48253 的仪器和装置成品 |
| recursive_input_rule | 如果某项投入本身也属于本产品类别，则将其保留为单独采购产品投入，链接其上游数据集并申报质量；不得将其制造清单递归吸收到前景过程中 |
| upstream_dataset_requirement | 每项采购产品、公用工程、运输服务和废物处理交换都需要代表性上游数据集或明确的数据缺口披露 |
| disclosure | 申报所纳入的型号或型号族、场址、报告期、厂内制造与采购部件的划分、仪器及附件配置、包装状态、分配方法、排除过程、代理数据和数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 厂内部件和子组件制造 | conditional | 当报告场址制造印制组件、传感器、光学组件、外壳、机加工件、涂覆件、线缆或其他产品部件时纳入 | 前景部件生产与准备 | 转入总装的合格部件或子组件 kg |
| `final_assembly` | 总装与集成 | required | 始终纳入 | 将采购部件和厂内部件装配为完整仪器的前景过程 | 转入放行测试的装配仪器 kg |
| `calibration_release_testing` | 校准与放行测试 | required | 始终纳入实际工厂放行路线；使用时区分校准、功能测试、光学或声学测试、老化和返工循环 | 对申报产品功能和放行状态的前景验证 | 合格受试仪器 kg |
| `packaging_factory_gate` | 包装与工厂门口放行 | required | 始终纳入 | 前景包装、标识、最终称量和参考产品放行 | 1 kg 放行成品净质量 |

### 过程：厂内部件和子组件制造（`component_fabrication`）

#### 输入

##### 产品流

###### 产品特定制造材料与部件（`fabrication_materials`）

使用产品特定物料清单和生产领料记录，记录发往厂内制造的全部材料、零件和部件。

- 选定流：按材料或部件身份申报的制造材料、电子零件、传感或光学零件和机械零件
- 流属性/单位：质量 / kg
- 数量规则：所申报产品总体消耗的实测或采购对账数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`eu-pef-2021-2279`; `iec-62474-2018`

###### 制造用电与燃料（`fabrication_energy`）

记录所纳入机加工、成形、印制组件制造、焊接、涂覆、清洗、固化和受控环境使用的计量电力与燃料。

- 选定流：按供应身份申报的电力和燃料
- 流属性/单位：能量 / kWh 或 MJ；燃料可保留原始开票单位并记录换算
- 数量规则：所申报产品总体的过程计量能量或按物理关系分配的共用能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_energy`
- 来源：`eu-pef-2021-2279`

###### 制造过程助剂与用水（`fabrication_aids_water`）

记录所纳入制造操作消耗的焊料和助焊剂、机加工液、电镀或涂覆化学品、清洗剂、粘合剂、过程气体和水。

- 选定流：按供应商和等级申报的过程助剂、化学品、气体或水
- 流属性/单位：质量或体积 / kg、m3 或有文件记录的原始单位
- 数量规则：领用量、计量值，或期初库存加采购量减期末库存得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_consumables`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格制造部件和子组件（`fabricated_subassemblies`）

报告通过适用过程内验收准则并转入总装的部件和子组件。

- 选定流：按申报身份区分的合格制造部件或子组件
- 流属性/单位：质量 / kg
- 数量规则：由验收数量和产品特定质量记录计算的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格部件或子组件输出，并与参考产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fabrication_output_waste`

##### 废物流

###### 制造废料与废过程材料（`fabrication_waste`）

记录离开制造过程的金属、聚合物、玻璃、陶瓷、印制板、线缆、光学材料、化学品、废水和其他废物，并按处理路线区分。

- 选定流：按组成和处理路线申报的废物
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：实测废物出运量或按所申报产品总体分配的容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_output_waste`

##### 基本流

###### 制造直接排放（`fabrication_direct_emissions`）

记录所纳入涂覆、电镀、清洗、焊接、燃烧或其他制造操作的实测或按许可证计算的释放；不得重复计入采购公用工程或处理数据集中已表示的排放。

- 选定流：向空气、水体或土壤的已申报基本流
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或利用采集的活动数据和有文件记录的适用因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fabrication_direct_emissions`
- 来源：`eu-pef-2021-2279`

### 过程：总装与集成（`final_assembly`）

#### 输入

##### 产品流

###### 采购及厂内部件与子组件（`assembly_components`）

记录放行配置中包含的全部机械、电子、传感、光学、声学、热学、流体、线缆、电源、显示、外壳和承载软件的硬件。

- 选定流：按零件号、材料类别、供应商及采购或厂内来源申报的部件或子组件
- 流属性/单位：质量 / kg
- 数量规则：产品特定物料清单数量乘以实测零件质量，并与生产领料记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_bom`
- 来源：`eu-pef-2021-2279`; `iec-62474-2018`

###### 装配能耗（`assembly_energy`）

记录紧固、连接、焊接、粘合剂固化、固件加载、清洗、搬运及受控装配环境所用电力和其他能源。

- 选定流：按供应身份申报的电力和能源载体
- 流属性/单位：能量 / kWh 或 MJ
- 数量规则：所申报产品总体的过程计量能量或按物理关系分配的共用能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：`eu-pef-2021-2279`

###### 装配耗材（`assembly_consumables`）

记录成为产品一部分或在装配中消耗的焊料、助焊剂、紧固件、粘合剂、清洗剂、擦拭物、过程气体、润滑剂和其他耗材。

- 选定流：按供应商和等级申报的装配耗材
- 流属性/单位：质量或体积 / kg、L 或有文件记录的原始单位
- 数量规则：所申报产品总体的领用量或库存对账数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_consumables_waste`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 等待放行测试的装配仪器（`assembled_instrument`）

报告转入校准和放行测试的完整仪器，包括属于申报产品配置的已安装附件。

- 选定流：按申报型号区分的已装配分析或测量仪器
- 流属性/单位：质量 / kg
- 数量规则：验收装配数量乘以单独报告包装前的实测净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_output`

##### 废物流

###### 装配废料与废弃耗材（`assembly_waste`）

记录废弃部件、焊接残渣、线缆和外壳边角料、粘合剂或清洗剂残余、擦拭物及其他装配废物，并按组成和处理路线区分。

- 选定流：按组成和处理路线申报的装配废物
- 流属性/单位：质量 / kg
- 数量规则：实测废物出运量或按所申报产品总体分配的容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_consumables_waste`

##### 基本流

### 过程：校准与放行测试（`calibration_release_testing`）

#### 输入

##### 产品流

###### 进入测试的装配仪器（`test_input_instruments`）

记录进入所申报校准、功能验证、老化和放行测试路线的装配仪器。

- 选定流：按申报型号区分的已装配分析或测量仪器
- 流属性/单位：质量 / kg
- 数量规则：进入测试单元的实测或计算质量，包括因返工而重复进入的单元
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_route_records`

###### 测试能耗和校准介质（`test_energy_media`）

记录实际放行路线使用的电力、标准物质、校准气体或液体、灯具或源、声学基准、热介质、冷却水、过滤器和其他耗材。

- 选定流：按身份申报的电力及校准或测试介质
- 流属性/单位：能量、质量或体积 / kWh、kg、L、m3 或有文件记录的原始单位
- 数量规则：首次测试、重复测试、老化和返工验证的计量或领用数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_energy_media`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 通过放行测试的合格仪器（`tested_instruments`）

报告满足申报放行准则的仪器；保留被测量、测试状态、返工历史以及校准或验证记录。

- 选定流：按申报型号区分的合格放行测试分析或测量仪器
- 流属性/单位：质量 / kg
- 数量规则：放行数量乘以实测产品净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格受试仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_calibration_release_records`

###### 送往返工的仪器（`test_rework_loop`）

将仍属于产品的非合格单元保留为可见内部返工循环，而不是作为最终废物；计入全部重复测试能耗和耗材。

- 选定流：返回所申报返工路线的仪器或子组件
- 流属性/单位：质量 / kg
- 数量规则：送往返工单元的实测质量和数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_route_records`

##### 废物流

###### 废测试介质与报废单元（`test_waste`）

记录废校准介质、测试样品、过滤器、冷却液、损坏零件以及放行测试失败后最终报废的单元，并按组成和处理路线区分。

- 选定流：按组成和处理路线申报的测试废物
- 流属性/单位：质量或体积 / kg、L 或 m3
- 数量规则：可归属于所申报产品总体的实测废物数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_energy_media`

##### 基本流

###### 测试直接排放（`test_direct_emissions`）

当校准或测试气体、蒸气、液体或其他物质跨越环境边界且未计入废物处理交换时，记录其直接释放。

- 选定流：向空气、水体或土壤的已申报基本流
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或利用所消耗测试介质和有文件记录的释放或捕集比例计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_direct_emissions`

### 过程：包装与工厂门口放行（`packaging_factory_gate`）

#### 输入

##### 产品流

###### 合格受试仪器（`packaging_instrument_input`）

记录进入包装的合格受试仪器，包括所有申报为参考产品配置组成部分的附件。

- 选定流：按申报型号区分的合格放行测试分析或测量仪器
- 流属性/单位：质量 / kg
- 数量规则：进入包装的实测产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass_release`

###### 运输包装材料（`distribution_packaging`）

按材料类别记录产品随附的一级、二级和三级包装，包括箱盒、纸箱、泡沫、薄膜、托盘、文件和防护材料。

- 选定流：按材料类别和可用再生含量声明区分的包装材料
- 流属性/单位：质量 / kg
- 数量规则：产品特定包装物料清单数量乘以实测材料质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行成品净质量，包装质量不计入分母
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`

###### 包装与放行用电（`packaging_energy`）

记录包装设备、标识、最终检查和其他所纳入放行操作的用电。

- 选定流：按供应身份申报的电力
- 流属性/单位：能量 / kWh
- 数量规则：所申报产品总体的过程计量能量或按物理关系分配的共用能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy_waste`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口放行参考产品（`analytical_measurement_instrument_at_factory_gate`）

这是规范参考产品输出。其净质量不含单独报告的运输包装，并且必须携带全部必需限定信息。

- 选定流：物理或化学分析用仪器及装置，测量或检查粘度、孔隙率、膨胀率、表面张力或类似性能的仪器及装置，或测量或检查热量、音量或光量用仪器及装置 `529b86b6-3103-4ca8-b9ae-0fbcadfb0a80`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 kg 放行成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装与放行废物（`packaging_waste`）

记录在工厂门口放行前产生的包装边角料、破损包装、标签、薄膜和其他废物，并按组成和处理路线区分。

- 选定流：按组成和处理路线申报的包装废物
- 流属性/单位：质量 / kg
- 数量规则：可归属于所申报产品总体的实测废物数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy_waste`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用制造过程和公用工程 | 在使用分配因子前，优先通过直接计量、分开的生产记录、过程细分或有论证的系统扩展来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_fallback` | 无法细分的共用过程 | 采用能够表示资源使用的、有文件记录的因果物理驱动量进行分配，例如机器时间、计量能量、加工质量、受控环境占用时间或测试时长；保留驱动量数值和计算。 | `eu-pef-2021-2279` |
| `allocation_other_relationship_last` | 缺少可辩护物理驱动量的共用负荷 | 只有在说明为何过程细分、系统扩展和物理分配均不可行后，才可使用包括经济分配在内的其他关系；披露方法和敏感性。 | `eu-pef-2021-2279` |
| `allocation_rework_and_scrap` | 返工循环、不合格品、废料和废物 | 将产品放行前的全部重复加工、测试能耗、耗材和所生废物归属于放行产品总体；将可销售共产品单独保留并应用上述层级。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `component_fabrication` | 制造材料和部件 | 物料清单、采购和领料记录 | 零件号；说明；供应商；材料类别；领用数量；实测单位质量；退料数量；产品型号；批次 | 将产品特定 BoM 与仓库发料和退料核对 | kg 和 item | 每个生产批次并进行期间核对 | 已申报代表性生产期间 | 报告场址全部所纳入制造操作 | 按身份汇总净领用质量；只有共用领料才用已申报物理驱动量分配；按放行产品净质量归一化 | 已批准 BoM 版本、称量记录、领退料记录、供应商声明 |
| `cp_fabrication_energy` | `component_fabrication` | 制造用电与燃料 | 分表、设备日志、燃料发票、运行记录 | 能源载体；仪表读数；设备；运行时间；负载；产品批次；共用分配驱动量 | 优先分表计量；否则核对工厂记录并应用因果物理驱动量 | kWh、MJ 或燃料原始单位 | 每个计量间隔或生产批次 | 与产品输出相同的代表性期间 | 所纳入制造设备和受控区域 | 汇总直接读数和已分配共用能量；用有文件记录的系数换算；按放行产品净质量归一化 | 仪表校准或发票、设备日志、分配计算 |
| `cp_fabrication_consumables` | `component_fabrication` | 过程助剂、化学品、气体和水 | 领用、采购、批次和计量记录 | 物质或混合物；供应商；等级；领用数量；期初期末库存；退回数量；水表；批次 | 对每项消耗投入进行测量或库存核对 | kg、L、m3 或原始单位 | 每次领用或计量间隔 | 已申报代表性生产期间 | 所纳入制造操作 | 净消耗等于期初库存加接收量减期末库存和有文件记录的退回量；按放行产品净质量归一化 | 库存核对、批次记录、仪表记录、安全或供应商数据表 |
| `cp_fabrication_output_waste` | `component_fabrication` | 合格子组件和制造废物 | 转移、检验和废物出运记录 | 输出身份；验收数量；单位质量；不合格数量；废物组成；容器皮重和毛重；处理路线 | 称量验收输出和废物，或使用经验证的件数转质量换算 | kg 或 m3 | 每批及每次废物出运 | 已申报代表性生产期间 | 所纳入制造操作 | 按身份汇总验收输出和废物；与材料投入和库存变化核对 | 转移记录、检验状态、经校准秤记录、废物联单 |
| `cp_fabrication_direct_emissions` | `component_fabrication` | 直接释放 | 烟道、废水、许可证和活动因子记录 | 物质；环境介质；浓度；流量；时长；活动量；因子；捕集比例 | 优先直接测量；否则使用采集活动数据和有文件记录的适用因子计算 | kg 或来源计量单位 | 每个监测间隔或运行批次 | 已申报代表性生产期间 | 所纳入直接排放点 | 汇总实测释放量或活动量乘因子及未捕集比例；避免与处理数据集重复 | 实验室报告、监测仪器校准、许可证报告、因子依据及计算 |
| `cp_assembly_bom` | `final_assembly` | 采购及制造装配内容 | 产品特定 BoM 和装配领料记录 | 型号；配置；零件号；供应商；采购或制造来源；数量；实测零件质量；安装数量；损失 | 将放行配置 BoM 与装配领料和验收输出核对 | kg 和 item | 每次型号修订和生产批次 | 已申报代表性生产期间 | 全部所纳入装配线 | 按零件身份和来源汇总安装质量；按放行产品净质量归一化 | 已批准 BoM 和工程变更级别、秤记录、领料记录 |
| `cp_assembly_energy` | `final_assembly` | 装配能源 | 分表和设备运行记录 | 仪表读数；设备；运行时间；负载；生产线；型号；批次；共用驱动量 | 优先生产线或设备分表；否则按因果物理驱动量分配共用能量 | kWh 或 MJ | 每个计量间隔或生产批次 | 已申报代表性生产期间 | 所纳入装配设备和受控区域 | 汇总直接和已分配共用能量；按放行产品净质量归一化 | 仪表记录、设备日志、分配计算 |
| `cp_assembly_consumables_waste` | `final_assembly` | 装配耗材和废物 | 领用和废物记录 | 耗材身份；领用及退回数量；废物身份；毛重和皮重；处理路线；批次 | 库存核对和称量废物记录 | kg、L 或原始单位 | 每批及每次废物出运 | 已申报代表性生产期间 | 所纳入装配线 | 计算耗材净用量并按路线汇总废物；按放行产品净质量归一化 | 领料记录、秤记录、废物联单 |
| `cp_assembly_output` | `final_assembly` | 装配仪器输出 | 生产转移和称量记录 | 型号；配置；验收数量；净单位质量；总质量；转移时间 | 统计验收单元并使用实测型号特定质量 | kg 和 item | 每个生产批次 | 已申报代表性生产期间 | 所纳入装配线 | 验收数量乘以经验证的单位质量；与测试投入核对 | 转移记录、经校准秤记录、配置记录 |
| `cp_test_route_records` | `calibration_release_testing` | 测试路线、投入、重复和返工 | 制造执行和测试路由记录 | 序列号或批次；型号；测试步骤；进入次数；重复次数；返工路线；最终状态；净质量 | 提取实际路线和状态记录，包括重复测试 | item、cycle、h 和 kg | 每个单元或生产批次 | 已申报代表性生产期间 | 全部所纳入放行测试站和返工循环 | 汇总首次及重复进入次数，并用经验证型号质量将件数换算为质量 | 可追溯路线历史、测试系统记录、返工处置 |
| `cp_test_energy_media` | `calibration_release_testing` | 测试能耗、校准介质和废介质 | 分表、设备、领用和处置记录 | 测试站；仪表读数；运行时间；负载；介质身份；领用数量；回收数量；废物数量；测试周期 | 对全部首次和重复测试计量能源并测量介质领用与回收 | kWh、kg、L、m3 或原始单位 | 每个测试批次或计量间隔 | 已申报代表性生产期间 | 全部所纳入测试和老化站 | 汇总能源和介质净消耗，包括重复测试；按放行产品净质量归一化 | 仪表记录、领用记录、设备日志、废物记录 |
| `cp_calibration_release_records` | `calibration_release_testing` | 合格受试输出 | 校准、验证和放行记录 | 型号；序列号或批次；被测量；范围；分辨率；准确度或不确定度；程序版本；参考标准；结果；放行状态；净质量 | 保留申报配置的实际放行证据 | item 和 kg | 每个单元或规定放行批次 | 已申报代表性生产期间 | 全部所纳入放行测试站 | 只汇总合格状态的放行净质量；分别保留失败和返工总体 | 签字或受控电子测试记录、参考标准状态、秤记录 |
| `cp_test_direct_emissions` | `calibration_release_testing` | 测试介质直接释放 | 介质使用、回收、排放和排放计算记录 | 物质；充入量；回收量；废物量；释放比例；环境介质；因子 | 优先物料衡算；可用时直接测量 | kg 或来源计量单位 | 每个测试批次或排放间隔 | 已申报代表性生产期间 | 所纳入测试排放点 | 释放量等于充入量减回收量、留存量和按废物管理量，或采用直接实测释放 | 批次记录、回收记录、排放报告、因子及计算 |
| `cp_product_mass_release` | `packaging_factory_gate` | 放行产品净质量 | 最终称量和放行记录 | 型号；配置；所含附件；序列号或批次；包装毛重；包装质量；产品净质量；放行数量 | 直接称量产品净质量，或从毛重中减去单独称量的包装 | kg 和 item | 每个型号和生产批次 | 已申报代表性生产期间 | 最终放行操作 | 汇总放行产品净质量；作为归一化分母 | 经校准秤记录、放行记录、配置清单 |
| `cp_packaging_materials` | `packaging_factory_gate` | 运输包装 | 包装 BoM、采购和称量记录 | 材料类别；供应商；再生含量声明；每包数量；实测单位质量；型号；包装配置 | 将包装 BoM 与领用数量和实测质量核对 | kg 和 item | 每种包装配置和批次 | 已申报代表性生产期间 | 所纳入包装操作 | 按材料类别汇总包装质量；按放行产品净质量归一化且不将包装加入分母 | 包装规范、秤记录、供应商声明 |
| `cp_packaging_energy_waste` | `packaging_factory_gate` | 包装能源和废物 | 仪表、领用和废物记录 | 电力；计量间隔；设备；运行时间；废物材料；毛重和皮重；处理路线 | 计量或按物理关系分配电力，并称量包装废物 | kWh 和 kg | 每个计量间隔和废物出运 | 已申报代表性生产期间 | 所纳入包装与放行操作 | 按路线汇总能源和废物；按放行产品净质量归一化 | 仪表记录、设备日志、秤记录、废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | 归一化数量 = 期间交换数量除以期间合格放行产品净质量 | 采集的交换数量；来自 `cp_product_mass_release` 的放行产品净质量 | 每 1 kg 放行成品净质量的交换数量 | `eu-pef-2021-2279` |
| `calc_item_to_mass` | 件数记录 | 质量 = 验收或消耗件数乘以实测型号特定单位质量；型号族平均值必须按生产质量加权并披露总体 | 件数；单位质量；型号总体 | 按产品或部件身份区分的 kg |  |
| `calc_shared_resource_allocation` | 共用公用工程和操作 | 优先直接计量；否则将共用总量乘以所申报产品的有文件记录因果物理驱动量份额 | 共用总量；产品驱动量；驱动量总值 | 已分配产品特定资源或排放数量 | `eu-pef-2021-2279` |
| `calc_material_reconciliation` | 每个制造过程 | 投入加期初在制品应与合格输出、转移、期末在制品、返工、废物及实测直接释放核对；调查并披露残差 | 材料投入；期初期末库存；产品转移；返工；废物；直接释放 | 物料衡算残差和完整性检查 | `eu-pef-2021-2279` |
| `calc_test_medium_release` | 具有直接释放的校准或测试介质 | 除非直接测量，直接释放 = 充入或消耗量减回收量、产品或设备留存量和按废物管理量 | 充入量；回收量；留存量；废物量；直接测量值 | 直接基本流数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品及全部产品输出 | 保留型号、配置、所含附件、被测量或分析原理、范围、分辨率、准确度或不确定度说明、放行依据、净质量和包装状态。 | 受控产品规范、BoM 版本、放行与称量记录 |
| `dq_complete_inventory` | 每个前景过程 | 纳入所有已知投入和输出并完成物料核对；披露每项排除、代理、未解决残差和缺失上游链接。 | 过程清单、核对计算、数据缺口登记；`eu-pef-2021-2279` |
| `dq_temporal_scope` | 全部前景记录 | 使用覆盖所纳入路线的一个已申报代表性生产期间；识别停机、启动、异常批次、工程试制和生产混合权重，并说明纳入或排除理由。 | 仪表期间、生产台账、批次清单、异常日志 |
| `dq_measurement_traceability` | 质量、能源、水、排放和测试记录 | 对每条实质性测量链保留仪器身份、校准或验证状态、计量单位、换算因子、数据责任人和提取时间。 | 校准证书、仪表和秤日志、受控计算 |
| `dq_supplier_material_identity` | 采购电工电子、传感、光学和机械内容 | 保留供应商和零件身份、材料类别和质量以及可用材料声明；对于电工电子内容，保留声明范围和版本，不得推断未报告物质。 | 供应商规范或 IEC 62474 兼容声明；`iec-62474-2018` |
| `dq_representativeness` | 前景与链接上游数据 | 评估并披露技术、地理、时间和精度代表性；使用产品特定 BoM 和企业特定制造数据。 | 数据质量评估和来源元数据；`eu-pef-2021-2279` |
| `dq_release_traceability` | 校准与放行测试 | 证明放行产品总体满足所申报放行准则，并且重复测试、返工和最终不合格品保留在清单中。 | 测试路线历史、校准或验证记录、不合格与返工记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品流 | 要求采用第 3 节给出的精确 Tiangong 产品流 UUID、Mass 流属性 UUID、Units of mass UUID 和 kg 单位；拒绝表示部件、耗材、服务或相邻仪器类别的替代流。 |  |
| `validate_scope_qualifiers` | 数据集身份 | 要求具备第 3 节全部限定信息，并验证主要产品功能属于 CPC 48253；缺失被测量、型号配置或包装状态时判定不符合。 | `un-cpc-3-0` |
| `validate_reference_mass` | 归一化 | 验证全部前景数量采用 1 kg 放行产品净质量，且单独报告的包装不计入分母。 |  |
| `validate_process_coverage` | 过程清单 | 要求纳入总装、校准或放行测试以及包装放行；在场址厂内制造部件时要求纳入部件制造，并披露采购与厂内部件覆盖。 | `eu-pef-2021-2279` |
| `validate_material_energy_waste_completeness` | 前景投入与输出 | 每个所纳入过程都要求产品特定 BoM 或部件记录、过程能源、耗材、合格输出、返工、废物和适用直接排放；未解决残差或省略必须作为明确发现。 | `eu-pef-2021-2279` |
| `validate_allocation` | 共用资源和多功能操作 | 可行时要求直接计量或细分；否则要求物理驱动量、因子计算、理由以及敏感性或限制披露。 | `eu-pef-2021-2279` |
| `validate_test_traceability` | 校准与放行测试 | 要求受控放行程序、适用时的参考标准或测试系统状态、实际测试结果、最终处置，并纳入重复测试和返工负荷。 |  |
| `validate_supplier_declarations` | 采购电工电子内容 | 当声明或使用材料声明时，要求供应商、零件、声明范围、清单或标准版本以及已申报材料或物质信息；不得把缺失条目视为零。 | `iec-62474-2018` |
| `validate_data_quality` | 发布前景数据包 | 要求申报场址、地理范围、生产期间、型号加权、数据来源、上游数据集链接、代理和缺口披露以及技术、地理、时间、完整性和精度证据。 | `eu-pef-2021-2279`; `iec-63366-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定或明确按生产质量加权的型号族前景制造数据集 |
| downstream_use | `secondary_dataset`；作为按质量需要工厂门口分析或测量仪器的下游产品系统的 `background_dataset` |
| allowed_use | 门到门制造清单及增加代表性上游数据集的摇篮到工厂门口模型；增加明确配送、使用、维护和生命周期末端情景的下游生命周期模型 |
| excluded_use | 对测量功能或性能不同的仪器进行直接比较；无经验证件数转质量换算的按件使用；未单独建模的使用寿命、使用阶段能源、耗材、维护、校准间隔或生命周期末端声明 |
| required_metadata | PCR id；产品型号或加权规则；CPC 范围；被测量或分析原理；测量范围；分辨率；准确度或不确定度说明；所含附件；供电类型；放行测试依据；产品净质量；包装状态；场址和地理范围；生产期间；厂内及采购部件划分；过程覆盖；分配方法；来源和上游数据集身份 |
| required_quality_disclosure | BoM 和材料声明覆盖；物料衡算残差；计量与分配覆盖；校准和放行记录覆盖；时间、技术、地理、完整性和精度评估；代理数据集；截断；未解决数据缺口；每项省略流或过程的理由 |
| update_trigger | 产品型号或配置变化；BoM 或供应商变化；材料声明修订；制造路线或场址变化；能源供应变化；校准或放行测试路线变化；包装变化；分配驱动量变化；或会实质改变归一化清单的证据 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, classification family and structure, https://unstats.un.org/unsd/classifications/Family/Detail/2100（检索日期 2026-08-09） | 产品类别范围和相邻类别排除 |
| `eu-pef-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, CELEX:32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索日期 2026-08-09） | 功能单位框架、产品特定 BoM、企业特定制造数据、完整前景投入与输出、分配层级、数据采集、归一化和数据质量 |
| `iec-63366-2025` | standard | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691（检索日期 2026-08-09） | 电气电子产品横向 PCR 基础、LCA 报告、默认情景和产品特定规则的限制 |
| `iec-62474-2018` | standard | IEC 62474:2018, Material declaration for products of and for the electrotechnical industry, https://webstore.iec.ch/en/publication/29857（检索日期 2026-08-09） | 供应商材料和物质声明记录、材料类别、声明范围和供应链可追溯性 |
