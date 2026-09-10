---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.hydrometers-and-similar-floating-instruments-thermometers-pyrometers-barometers-hygrome-9da9d72c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 比重计及类似浮式仪器、温度计、高温计、气压计、湿度计和干湿球湿度计

## 1. 范围与适用性

本 PCR 适用于比重计及类似浮式仪器、温度计、高温计、气压计、湿度计和干湿球湿度计成品制造的前景数据包。声明产品属于该语义类别时，覆盖模拟式、玻璃液体式、机械式、电气式和电子式产品。数据包必须识别仪器族和传感原理，不得将类别级生产混合流解释为所有型号具有相同物料清单或制造路线。

默认前景边界在装配、校准或性能测试及包装完成后的制造工厂门结束。分销、安装、使用、维护和生命末期阶段不属于默认前景边界，除非研究明确扩展边界。外购材料、零部件、能源载体、包装和处理服务的上游生产由所链接的上游数据集表示。

本 PCR 不包括不属于上述具名仪器族的液体或气体流量、液位、一般压力或其他变量测量/检验仪器，不包括物理或化学分析仪器、医用血压计、自动调节或控制设备以及单独供应的零部件和附件。产品跨越上述边界时，必须使用经单独评审的 PCR 或明确披露代理关系。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.hydrometers-and-similar-floating-instruments-thermometers-pyrometers-barometers-hygrome-9da9d72c |
| classification_refs | CPC 3.0：48251（精确分类参考；映射接受由独立治理流程决定） |
| covered_products | 比重计及类似浮式仪器；接触式和非接触式温度计；高温计；气压计；湿度计；干湿球湿度计；属于该语义类别的模拟式、机械式、电气式和电子式产品 |
| excluded_products | 不属于具名仪器族的流量、液位和一般压力测量仪器；物理或化学分析仪器；医用血压计；自动控制器；导航仪器；单独销售的零部件和附件 |
| representative_product | 所覆盖仪器族成品的声明生产混合，并报告仪器族和传感原理构成 |
| production_route | 外购或现场制造的传感元件、壳体、显示部件、电子部件、玻璃或金属本体及填充介质；装配；校准与性能测试；适用时的表面处理；包装 |
| market_state | 制造完成的成品；工厂内生产混合 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造工厂门处、属于所覆盖类别的仪器成品 |
| How much | 1 kg 合格仪器成品净质量，不含单独清单化的包装 |
| How well | 声明仪器族、传感原理、测量区间、准确度或最大允许误差、分辨力、校准或检定状态及适用产品规范 |
| How long or cycle | 由声明报告期或生产批次代表的生产；使用阶段寿命不属于默认前景边界 |
| reference_flow_link | 1 kg 声明参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 比重计及类似飘浮仪器、温度计、高温计、气压计、湿度计及干湿球湿度计 `7d4fdf4e-5846-4fc5-b373-e360c312974b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仪器族；传感原理与测量介质；模拟式或电气/电子式设计；测量区间；声明准确度或最大允许误差与分辨力；校准或检定状态；添加汞状态；产品净质量；生产地域与报告期；包装纳入状态 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化为 1 kg 合格仪器成品净质量。参考产品质量不含单独清单化的包装。 |
| `item_to_mass_conversion` | 以件数记录的生产与发运记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按仪器族和批次使用实测净质量换算件数。保留件数、抽样方法、称量样本和换算系数；不得采用无来源的类别平均单件质量。 |
| `energy_conversion` | 外购电力和燃料 | Energy | kWh 或 MJ | 保留计量或发票原始单位及换算系数。仅在需要统一能量单位时使用 1 kWh = 3.6 MJ；没有文件化系数时，不得将燃料质量或体积与能量混用。 |
| `calibration_result_identity` | 校准和性能测试记录 | 声明被测量与计量单位 | 产品特定 | 记录仪器族对应的被测量、测量区间、测试点、参考标准器、示值或误差结果、报告时的测量不确定度、接受准则及通过/返工/报废决定。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | 前景制造系统 | 包括实际发生的现场零部件制造、仪器装配、适用时的充填或灌注、适用时的清洗和表面处理、校准和性能测试、返工、包装、现场公用工程、直接排放，以及制造工厂门前的废物交付。 | `eu-pef-2021` |
| `boundary_upstream_inputs` | 外购产品与服务 | 外购材料、零部件、能源载体、包装、校准介质和废物处理服务必须链接具有技术、地域和时间代表性披露的上游数据集。不得以无文件记录的截断吸收其上游负荷。 | `eu-pef-2021` |
| `boundary_completeness` | 所有前景过程 | 记录跨越各前景过程边界的全部材料和能源投入、产品和共产品产出、废物、废水以及实测或依法报告的直接排放。披露排除项及理由。 | `eu-pef-2021` |
| `boundary_mercury` | 添加汞的仪器或零部件 | 识别有意添加的汞及汞化合物。仅在该制造路线适用且合法时，分别记录汞投入、产品中所含汞、泄漏或损失以及含汞废物；本 PCR 不构成对制造、进口、出口或豁免的授权。 | `minamata-mercury-2024` |
| `boundary_electronic_variants` | 电气或电子仪器 | 对电气或电子产品，保留物料清单以及监测和控制仪器适用的受限物质或豁免声明；记录实际材料质量，不得将法规浓度限值当作清单数量。 | `eu-rohs-2011-65` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址收货门处的外购材料和零部件，以及上游材料投入进入前景边界的现场制造零部件 |
| starting_condition_role | 前景仪器制造的上游产品投入 |
| product_classification_scope | 声明产品族混合范围内的比重计及类似浮式仪器、温度计、高温计、气压计、湿度计和干湿球湿度计成品 |
| recursive_input_rule | 作为外购品进入、属于同一语义类别的成品或半成品仪器，按其加工状态记录为产品投入并链接自身上游数据集；不得递归地将其重建为另一个本前景数据包实例。 |
| upstream_dataset_requirement | 对主要材料、传感元件、电子部件、所含电池、玻璃或金属本体、填充介质、包装、能源、纳入范围的进厂运输和处理服务使用特定上游数据集；披露所有代理。 |
| disclosure | 声明产品族份额、传感原理、现场制造与外购零部件边界、添加汞状态、电子含量、校准依据、报告期、地域、包装处理、排除项及分配选择。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_component_fabrication` | 现场零部件制造与表面处理 | conditional | 传感元件、玻璃或金属本体、壳体、刻度、电子组件、充填工序、涂层或其他零部件在现场制造或处理时纳入。 | 前景零部件生产 | 转入装配的合格零部件质量 |
| `p_instrument_assembly` | 仪器装配 | required | 始终纳入最终机械、玻璃、电气或电子装配及相关清洗或充填工序。 | 前景产品装配 | 转入校准和测试的已装配仪器质量 |
| `p_calibration_testing` | 校准、检定和性能测试 | required | 始终纳入用于放行合格产品的产品特定校准或检定及最终验收测试。 | 前景质量保证 | 放行的合格仪器净质量 |
| `p_packaging` | 产品包装与工厂门放行 | required | 始终纳入声明工厂门前使用的初级、次级和运输包装。 | 前景包装与放行 | 1 kg 仪器成品净质量，包装单独报告 |

### 过程：现场零部件制造与表面处理（`p_component_fabrication`）

#### 输入

##### 产品流

###### 材料与外购零部件投入（`component_material_inputs`）

按仪器族分别记录跨越本过程边界的每种材料或外购零部件，包括玻璃、金属、聚合物、传感元件、电子部件、显示部件、线材、所含电池、填充介质、涂层、胶黏剂和紧固件。

- 选定流：为每种材料或零部件选择匹配的天工产品流；本 PCR 不固定类别级 UUID
- 流属性/单位：Mass / kg
- 数量规则：合格生产的实测领用量减文件化退库量，并核对库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：受限物质声明适用时为 `eu-rohs-2011-65`

###### 汞或添加汞零部件投入（`mercury_input`）

仅对适用且合法的产品路线，单独记录有意添加的汞或含汞零部件。不得因采购记录中没有单独条目而推断含汞量为零。

- 选定流：完成身份评审后选择匹配的天工汞或含汞零部件产品流；本 PCR 不固定 UUID
- 流属性/单位：Mass / kg
- 数量规则：进入过程的实测或供应商证明的汞质量，并与产品、损失和废物记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：`minamata-mercury-2024`

###### 零部件制造用电（`component_fabrication_electricity`）

记录成形、机械加工、玻璃加工、电子制造、清洗、充填、表面处理及纳入本过程的现场辅助设备所用计量电力。

- 选定流：选择匹配地域和电压等级的电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：过程计量用电，或从场址电表按文件化方法分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 工艺水与制造化学品（`component_fabrication_water_chemicals`）

清洗、蚀刻、电镀、涂覆、玻璃加工、充填或其他现场零部件工序使用水和工艺化学品时，分别记录各项投入。

- 选定流：为水和每种工艺化学品选择匹配的天工产品流
- 流属性/单位：Mass 或 volume / kg 或 m3，并保留来源记录单位
- 数量规则：按过程计量、称量或采购与库存核对的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

##### 废物流

###### 制造边角料与危险残余物（`component_fabrication_waste`）

按处理路线分别记录金属、玻璃、聚合物、电子、涂层、化学品及含汞废物。含汞废物不得与普通边角料合并。

- 选定流：为各材料及处理路线选择匹配的天工废物流
- 流属性/单位：Mass / kg
- 数量规则：实测转移废物加文件化库存变化，按废物种类和去向拆分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`
- 来源：含汞废物分类为 `minamata-mercury-2024`

##### 基本流

#### 输出

##### 产品流

###### 合格的现场制造零部件（`accepted_components`）

记录转入装配的合格零部件实测质量；内部质量平衡需要时按零部件族拆分。

- 选定流：与现场制造零部件身份匹配的内部中间产品流
- 流属性/单位：Mass / kg
- 数量规则：转入装配的合格零部件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：

##### 废物流

##### 基本流

###### 应报告的制造排放（`component_fabrication_emissions`）

记录现场燃烧、涂覆、电镀、玻璃加工、充填和清洗工序的实测、监测或许可证报告排放。分别保留污染物身份和计量基准。

- 选定流：为每种排放物质和环境介质选择匹配的天工基本流
- 流属性/单位：Mass / kg
- 数量规则：归属于该过程的实测或有计算依据的场址排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入装配的合格零部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`
- 来源：

### 过程：仪器装配（`p_instrument_assembly`）

#### 输入

##### 产品流

###### 用于装配的现场制造与外购零部件（`assembly_component_inputs`）

按仪器族和零部件身份分别记录进入最终装配的合格现场制造零部件和外购零部件。

- 选定流：为各零部件选择匹配的天工产品流；现场内部转移使用合格零部件内部流
- 流属性/单位：Mass / kg
- 数量规则：零部件实测领用量减文件化退料量，并与已装配产品和装配废物核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入校准和测试的已装配仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 装配用电与消耗品（`assembly_energy_consumables`）

装配用电以及焊料、胶黏剂、密封件、紧固件、清洗剂和保护气体等材料消耗品跨越过程边界时，分别记录。

- 选定流：为电力和每种消耗品选择匹配的天工产品流
- 流属性/单位：Energy 或 mass / kWh 或 kg
- 数量规则：计量用电以及实测或库存核对的消耗品用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入校准和测试的已装配仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待校准的已装配仪器（`assembled_instruments`）

记录转入校准和测试的仪器净质量，不含包装。

- 选定流：内部已装配仪器产品流
- 流属性/单位：Mass / kg
- 数量规则：转入校准和测试的已装配仪器实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入校准和测试的已装配仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：

##### 废物流

###### 装配不合格品与边角料（`assembly_waste`）

按材料和处理去向分别记录被拒零部件、泄漏填充介质、边角料、清洗残余物和不合格组件；与有记录的内部返工回路分开。

- 选定流：为各废物身份和处理路线选择匹配的天工废物流
- 流属性/单位：Mass / kg
- 数量规则：从装配转移的实测废物质量，扣除文件化内部返工返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入校准和测试的已装配仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`
- 来源：

##### 基本流

### 过程：校准、检定和性能测试（`p_calibration_testing`）

#### 输入

##### 产品流

###### 用于测试的已装配仪器（`instruments_for_testing`）

按仪器族记录进入校准、检定和最终性能测试的净质量及件数。

- 选定流：内部已装配仪器产品流
- 流属性/单位：Mass / kg
- 数量规则：进入测试的实测净质量，并按仪器族保留件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行的合格仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_test_records`
- 来源：`wmo-no-8`；`ilac-p10-2020`

###### 校准和测试能源与介质（`calibration_test_inputs`）

电力、受控温度或湿度公用工程、校准液体、参考介质和消耗性测试材料跨越过程边界时记录。

- 选定流：为每种能源或材料投入选择匹配的天工产品流
- 流属性/单位：Energy、mass 或 volume / kWh、kg 或 m3
- 数量规则：归属于校准和测试的计量或实测用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 放行的合格仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_test_records`
- 来源：`wmo-no-8`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的已校准或检定仪器（`conforming_instruments`）

记录完成产品特定验收测试后放行的仪器。保留测试点、参考标准器、结果、报告时的不确定度及接受决定。

- 选定流：内部合格仪器产品流
- 流属性/单位：Mass / kg
- 数量规则：具有文件化通过决定的仪器实测净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行的合格仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_calibration_test_records`
- 来源：`wmo-no-8`；`ilac-p10-2020`

##### 废物流

###### 测试报废品与不可恢复故障品（`calibration_test_rejects`）

将转入废物处理的不合格品与进入有文件记录返工回路的产品分开记录。

- 选定流：按不合格产品材料和处理路线选择匹配的天工废物流
- 流属性/单位：Mass / kg
- 数量规则：转入废物处理的不合格品实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行的合格仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calibration_test_records`
- 来源：

##### 基本流

### 过程：产品包装与工厂门放行（`p_packaging`）

#### 输入

##### 产品流

###### 转入包装的合格仪器（`conforming_instruments_to_packaging`）

记录从最终验收转入包装的合格仪器净质量。

- 选定流：内部合格仪器产品流
- 流属性/单位：Mass / kg
- 数量规则：转入包装的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行的参考产品成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：

###### 包装材料投入（`packaging_material_inputs`）

按材料和可重复使用状态分别记录初级、次级及运输包装。包装质量不计入 1 kg 参考产品质量。

- 选定流：选择匹配的天工包装材料产品流
- 流属性/单位：Mass / kg
- 数量规则：实测或采购与库存核对的包装消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行的参考产品成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门处的仪器成品（`finished_instrument_output`）

本行为参考产品产出。报告仪器净质量，不含单独清单化的包装，并保留产品族混合与必需限定信息。

- 选定流：比重计及类似飘浮仪器、温度计、高温计、气压计、湿度计及干湿球湿度计 `7d4fdf4e-5846-4fc5-b373-e360c312974b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格仪器成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 包装过程废物（`packaging_waste`）

按材料和处理路线分别记录边角料、损坏包装及废弃保护材料。

- 选定流：为各包装废物及处理路线选择匹配的天工废物流
- 流属性/单位：Mass / kg
- 数量规则：转入处理的实测包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行的参考产品成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享前景过程与混合产品族 | 首先通过过程细分、单独计量、独立生产记录，或在有依据时扩展所记录的过程边界来避免分配。 | `eu-pef-2021` |
| `allocation_physical` | 仍然共享的公用工程、设备时间和消耗品 | 无法细分时，采用设备时间、计量能耗、加工质量、测试时长或件数等文件化因果物理驱动；仅当该驱动能代表资源使用时方可采用。对于由时间或测试程序驱动的校准/测试活动，不得默认按质量分配。 | `eu-pef-2021` |
| `allocation_economic` | 没有合理物理关系的多功能过程 | 只有在不存在合理物理关系时才使用经济分配。记录价格、币种、地域、时间基准及对分配选择的敏感性。 | `eu-pef-2021` |
| `allocation_scrap_rework` | 边角料、回收材料与返工仪器 | 分别报告材料总投入、内部返工返回、外部回收材料产出和处理。统一采用一个声明的再生成分与生命末期约定，不得重复计入内部边角料收益。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `p_component_fabrication`；`p_instrument_assembly` | 材料、零部件、填充介质、化学品及适用时的汞 | 采购、BOM、库房领退料、供应商声明、批次记录 | 材料或零部件标识；产品族；批次；领用质量；退回质量；库存变化；供应商；组成；含汞状态；受限物质状态 | 将 BOM 和批次记录与库房及供应商文件核对 | kg，并保留原始单位 | 每批；按报告期汇总 | 完整声明报告期或代表性生产批次 | 每个纳入的制造场址 | 按材料/零部件和产品族汇总净消耗量，仅按第 7 节分配 | 经批准 BOM；称量记录；库存核对；供应商组成或合规声明 |
| `cp_energy_records` | `p_component_fabrication`；`p_instrument_assembly`；`p_calibration_testing` | 电力和燃料 | 电表、分表、发票、燃料领用日志 | 仪表标识；起止读数；燃料数量；单位；过程；停机；分配驱动 | 优先使用过程表计；否则核对场址总量并记录分配 | kWh、MJ、kg 或 m3，以原记录为准 | 连续或每个账单期 | 完整声明报告期或代表性生产批次 | 每个纳入场址和过程 | 扣除排除用途，并按适用过程产出归一化所分配过程总量 | 仪表校准或发票；场址总量核对；分配工作表 |
| `cp_production_output_records` | `p_component_fabrication`；`p_instrument_assembly`；`p_packaging` | 合格零部件、已装配产品和成品产出 | 生产、转移、称量和发运记录 | 产品族；传感原理；批次；件数；毛重；皮重；净重；合格、返工与报废状态 | 按批称量，或采用文件化的批次特定件数-质量换算 | kg 和件 | 每批 | 完整声明报告期或代表性生产批次 | 每个纳入的生产与放行点 | 按产品族汇总合格净质量；参考产品质量排除包装 | 经校准秤记录；批次谱系；放行与发运核对 |
| `cp_calibration_test_records` | `p_calibration_testing` | 校准、检定、测试投入、放行、返工与报废 | 校准证书、测试报告、设备日志、验收记录 | 仪器族；序列号/批次；被测量；测量区间；测试点；参考标准器；参考证书；示值/误差；报告时的不确定度；准则；决定；测试时长；能源/材料用量 | 执行声明的产品特定程序并保留可追溯性证据 | 被测量特定单位、kg、件、kWh | 每台受试仪器或有统计依据的批次 | 完整声明报告期或代表性生产批次 | 每条纳入的校准/测试线 | 按产品族汇总通过、返工和报废质量及资源使用，不得平均不相容的被测量 | 程序版本；参考标准器身份；校准状态；可追溯链；审核批准 |
| `cp_packaging_records` | `p_packaging` | 包装材料 | 包装 BOM、采购、领退料、可重复使用包装日志 | 包装材料；供应商；批次；领用与退回质量；有证据的再生成分；重复使用次数；产品族 | 将包装 BOM 和库存与放行产品核对 | kg | 每批；按报告期汇总 | 完整声明报告期或代表性生产批次 | 每条纳入的包装线 | 按材料和可重复使用状态汇总每 kg 参考产品的包装净消耗 | 包装规范；称量记录；库存核对 |
| `cp_waste_emission_records` | 所有纳入过程 | 废物、废水与直接排放 | 废物转移联单、地磅、废水计量/采样、排放监测、许可证报告 | 废物或污染物身份；危险状态；适用时含汞量；质量/体积；环境介质；去向；处理；日期；过程 | 使用实测转移或监测数据；无法直接测量时才采用有文件依据的计算 | kg、m3 或污染物特定单位 | 每次转移或监测间隔 | 完整声明报告期或代表性生产批次 | 每个纳入场址和过程 | 按身份、环境介质、危险状态和去向汇总；核对汞及主要材料平衡 | 转移文件；实验室结果；监测仪校准；许可证报告；质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品成品 | 汇总合格仪器实测净质量；以件数换算时，将件数乘以实测批次特定平均净质量；排除包装质量。 | 合格件数；批次特定净质量；批次直接称量；包装皮重 | 参考产品成品净质量 kg |  |
| `calc_normalized_inventory` | 每个前景清单行 | 将分配后的报告期数量除以报告期参考产品成品净质量 kg，并保留原始记录和换算系数。 | 采集数量；适用时的分配结果；参考产品净质量 | 每 kg 参考产品的数量 | `eu-pef-2021` |
| `calc_process_mass_balance` | 制造、装配、测试与包装 | 对每个材料族核对期初库存加投入与合格产出、返工转移、废物、排放、期末库存及文件化测量差异。必须调查而非静默分摊无法解释的差异。 | 库存；投入；产出；返工；废物；排放记录 | 披露的过程质量平衡及无法解释的差异 |  |
| `calc_product_family_mix` | 类别生产混合 | 各仪器族和传感原理的合格净产出质量除以合格净产出总质量；报告期零产量的仪器族保留为范围外。 | 仪器族层级合格净质量 | 声明生产混合份额 |  |
| `calc_allocation` | 共享前景数量 | 对核对后的共享总量应用第 7 节声明的层级和驱动，并验证分配量之和等于该总量。 | 共享数量；驱动值；产品族产出 | 分配后的前景数量及分配残差 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品与产品族混合 | 产品名称、仪器族、传感原理、UUID 参考与 CPC 语境必须内部一致；不得静默纳入 CPC 48252/48253 仪器或单独零部件。 | 产品规范；BOM；分类评审；放行记录 |
| `dq_temporal` | 所有前景数据 | 声明报告期并证明生产、材料、公用工程、废物和产出记录覆盖相同期间，或记录经核对的例外。 | 带日期的来源记录；生产日历；核对记录 |
| `dq_completeness` | 所有纳入过程 | 对照声明边界证明过程及输入/输出完整，包括返工、不合格品、包装、废水、直接排放和适用时的含汞物流。 | 过程图；质量和能量核对；排除项日志；`eu-pef-2021` |
| `dq_measurement` | 表计、秤和测试设备 | 保留设备身份、单位、校准状态、数据缺口、替代方法及可获得的不确定度信息。用于声称计量可追溯性的校准证据必须识别文件化链条及声明不确定度。 | 校准证书；仪表台账；不确定度或数据缺口记录；`ilac-p10-2020` |
| `dq_calibration_performance` | 仪器成品验收 | 保留产品特定的被测量、区间、测试点、参考标准器、结果、准则和决定；不得将不相容仪器族合并为一个性能声明。 | 校准/测试报告；放行批准；`wmo-no-8` |
| `dq_supplier_upstream` | 外购材料、零部件与服务 | 记录主要上游数据集的供应商、地域、技术、数据期间、产品状态及代理理由。 | 供应商记录；数据集元数据；代理评审 |
| `dq_mercury_electronics` | 添加汞或电气/电子产品 | 声明添加汞状态及适用的受限物质或豁免证据。法规适用性必须按司法辖区和日期判断，不得从法规限值推断清单质量。 | 供应商声明；组成记录；法规适用性评审；`minamata-mercury-2024`；`eu-rohs-2011-65` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID 必须为 `7d4fdf4e-5846-4fc5-b373-e360c312974b`，参考流属性 UUID 必须为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位必须为 kg。 |  |
| `validate_required_qualifiers` | 前景数据包 | 缺少仪器族、传感原理、测量区间、准确度或误差声明、校准或检定状态、添加汞状态、净质量基准、地域、报告期或包装纳入状态的任何数据包均判为不完整。 | `wmo-no-8` |
| `validate_scope` | 产品类别识别 | 确认每项纳入的成品属于具名仪器族。流量/液位/一般压力仪器、物理或化学分析仪器、医用血压计、控制器及单独零部件必须标记为人工范围评审。 | `un-cpc-3-0` |
| `validate_process_coverage` | 过程清单 | 要求装配、校准/测试和包装记录；现场发生零部件制造/表面处理时要求相应记录；外购零部件要求上游数据集。 | `eu-pef-2021` |
| `validate_inventory_reconciliation` | 前景总量 | 确认产出质量、材料平衡、能源总量、废物转移及分配总量与来源记录一致。报告无法解释的残差和数据缺口；不得强制归零。 | `eu-pef-2021` |
| `validate_calibration_traceability` | 校准与性能测试 | 确认所声称的计量可追溯性由文件化的不中断校准链、声明不确定度及合适参考服务或文件化的可接受替代方案支持。 | `ilac-p10-2020` |
| `validate_mercury_status` | 汞相关产品 | 要求明确的添加汞声明。存在汞时，要求分别记录投入、产品所含量、损失、废物、处理及司法辖区/日期适用性；不得将本 PCR 解释为法规授权。 | `minamata-mercury-2024` |
| `validate_electronic_variant` | 电气或电子产品 | 要求电气/电子适用性决定、材料或供应商声明及所依赖的豁免标识；不得把物质限值换算为前景数量。 | `eu-rohs-2011-65` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明仪器族或已披露类别生产混合的前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明工厂门处的制造足迹建模；特定仪器族或已披露生产混合的供应链清单；明确补充分销、使用、维护和生命末期的下游生命周期模型 |
| excluded_use | 仪器族或传感原理间无依据的比较；性能或法规符合性认证；使用阶段测量声明；作为 CPC 48252/48253 仪器或零部件的未披露代理；对添加汞产品的法规授权 |
| required_metadata | 规范 PCR id；参考 UUID；仪器族和传感原理；产品族混合；测量区间；准确度/误差和分辨力；校准/检定状态；添加汞和电子状态；净质量基准；场址地域；报告期；技术路线；包装处理；分配；上游数据集；排除项 |
| required_quality_disclosure | 原始数据覆盖；仪表和秤状态；校准可追溯性；BOM 与供应商数据完整性；质量、能量、废物和分配核对；代理使用；数据缺口；可获得的不确定度信息；汞或电子限制的法规适用日期与司法辖区 |
| update_trigger | 产品族混合、传感原理、添加汞状态、电子架构、主要材料或供应商、现场制造范围、校准/测试程序、能源系统、包装、分配方法、生产地域或适用物质控制要求变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | 联合国统计司，《产品总分类第 3.0 版》结构与说明，https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期：2026-08-10） | CPC 48251 类别身份及与相邻产品范围的排除关系 |
| `eu-pef-2021` | official_guidance | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期：2026-08-10） | 功能单位和参考流框架；制造边界；清单完整性；原始数据、分配、包装与数据质量规则 |
| `wmo-no-8` | official_guidance | 世界气象组织，《仪器和观测方法指南》（WMO-No. 8），2021/2018 版，https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8（检索日期：2026-08-10） | 温度、大气压力和湿度仪器限定信息；测试、校准、比对和质量管理记录 |
| `ilac-p10-2020` | official_guidance | ILAC-P10:07/2020，《测量结果计量可追溯性政策》，https://ilac.org/?ddownload=123220（检索日期：2026-08-10） | 校准可追溯链、声明不确定度、合适校准服务及保留证据 |
| `minamata-mercury-2024` | standard | 《关于汞的水俣公约》文本与附件，2024 年 10 月手册，https://minamataconvention.org/en/documents/minamata-convention-mercury-text-and-annexes（检索日期：2026-08-10） | 添加汞气压计、湿度计、温度计及相关含汞投入和废物的识别与单独核算；法规适用性披露 |
| `eu-rohs-2011-65` | standard | 关于限制电气电子设备中某些有害物质的指令 2011/65/EU，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0065（检索日期：2026-08-10） | 电气/电子监测和控制仪器产品的条件性 BOM、受限物质和豁免声明 |
