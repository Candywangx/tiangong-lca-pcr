---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electrical-equipment-n-e-c-including-electro-magnets-electro-magnetic-couplings-c-7e8fa7bd
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类的电气设备（包括电磁铁；电磁联轴器、离合器和制动器；电磁起重吸盘；电粒子加速器；电信号发生器；以及用于电镀、电解或电泳的设备）

## 1. 范围与适用性

本 PCR 适用于下述语义边界内未另分类的成套电气设备从摇篮到工厂门的前景数据包。所涵盖的配置包括电磁铁、电磁联轴器、电磁离合器和制动器、电磁起重吸盘、电粒子加速器、电信号发生器，以及用于电镀、电解或电泳的设备。由于这些产品在功能和结构上差异显著，每个数据包均须声明一个具体产品型号或同质产品族、物料清单状态、制造路线、额定功能以及工厂门状态。

作为产品销售的永磁金属磁体和永磁陶瓷或铁氧体磁体不在本 PCR 范围内，因为 CPC 3.0 将其列为同级子类。接线盒、单独销售的印制线路板、电动机、发电机、变压器、电池、报警器、照明设备以及已有更具体 PCR 的其他产品亦不在范围内。除非研究依据兼容的更具体规则明确增加相关阶段，否则使用、维护、配送、安装和寿命终止阶段均不属于本工厂门规则。本宽类别 PCR 不得用于不同设备功能或寿命性能之间的比较性论断。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electrical-equipment-n-e-c-including-electro-magnets-electro-magnetic-couplings-c-7e8fa7bd |
| classification_refs | CPC 3.0:46939（精确映射语境） |
| covered_products | 成套电磁铁；电磁联轴器、离合器和制动器；电磁起重吸盘；电粒子加速器；电信号发生器；电镀、电解或电泳设备；具有相同剩余类别边界的其他成套电气设备 |
| excluded_products | 永磁金属磁体；永磁陶瓷或铁氧体磁体；单独供应的零部件；接线盒；单独供应的印制线路板；由更具体电气设备 PCR 管理的产品；安装、配送、使用、维护和寿命终止服务 |
| representative_product | 满足已记录电气或机电规格的一个已声明成套设备型号或同质产品族 |
| production_route | 已声明的外购部件接收、可选磁芯制造和绕组、可选电子装配、可选水基清洗或表面预处理，以及必需最终装配和测试的组合 |
| market_state | 工厂门处验收合格的成套设备；除非运输包装是所供产品不可分割的一部分，否则不含运输包装；质量包括所有整体部件，不含单独发运的消耗品和安装材料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供一个已声明的成套电气设备型号或同质产品族 |
| How much | 1 kg 验收合格成套设备净质量 |
| How well | 符合所声明的型号、额定电气或机电功能、验收测试规范、配置和供应状态 |
| How long or cycle | 一个生产报告期；本从摇篮到工厂门的质量功能单位不表述使用寿命或使用循环性能 |
| reference_flow_link | `finished_equipment` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他未另分类的成套电气设备 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 已声明产品类型及型号或同质产品族；额定功能及主要性能规范；物料清单版本；整体部件与单独供应部件的界定；净质量确定方法；制造场址和地理范围；生产技术和路线；报告期；合格品测试准则；工厂门包装状态 |

构建前景数据包时，所有必需限定信息均须在元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少任一限定信息即表示参考流不完整。公开的天工 state-100 产品流中没有能够精确表示该“声明配置的跨产品族参考产品”的流，因此产品流 UUID 保持未解决状态；不得以更窄的产品流作为代理。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 验收合格成套设备 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过经校准称量或可审计的部件质量平衡确定验收合格产品净质量。排除可重复使用工装、运输包装、单独发运的消耗品、安装材料、废品和废料。 |
| `electricity_energy` | 外购电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按过程保留计量电能。按 1 kWh = 3.6 MJ 将 kWh 转换为 MJ，并披露电表覆盖范围、分配、电压等级、地理范围、电网组合及所含损耗。 |
| `mass_input_output` | 以质量为基准的产品流和废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用各过程边界处的接收状态质量。当水分、涂层、绝缘、附着部件和污染状态实质影响流身份或质量平衡时予以记录。 |
| `gas_reference_conditions` | 工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告供应商或仪表采用的基准温度、压力和干湿基准。未记录组成和密度方法时，不得将体积换算为质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料和部件进入前景工厂门时的接收状态，并声明供应商状态、组成、地理范围和交付边界 |
| starting_condition_role | 当前景制造商控制的过程接收外购材料、部件、电力、水和过程化学品时，前景边界开始 |
| product_classification_scope | 由一个已声明配置表示的未另分类成套电气设备；CPC 3.0:46939 仅为映射语境，不能替代语义边界 |
| recursive_input_rule | 若某一外购投入本身符合本 PCR 边界，应将其作为一个单独供应部件记录，并链接自身上游数据集和声明功能；不得在同一前景系统中对其递归应用成套设备参考产品 |
| upstream_dataset_requirement | 每一种外购材料、部件、公用工程和化学品均须链接到地理和技术上具有代表性的从摇篮到供应点背景数据集；身份未解决时须明确保留，不得静默使用代理 |
| disclosure | 声明所含场址和过程、外包与现场步骤、截断决定、基础设施处理、包装状态、废料去向、废水移交点、电力建模，以及任何新增配送、使用或寿命终止阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_control` | 所有前景过程 | 纳入工厂门之前发生的所有已声明现场或直接控制的制造、绕组、电子装配、清洗或表面预处理、最终装配、测试、返工、合格输出、废品、废物和直接基本流。 | `eu-jrc-pef-methods-2022` |
| `boundary_known_exchanges` | 过程清单 | 量化跨越各纳入过程边界的每一种已知材料、能源、水、化学品、产品、共产品、废物和直接排放；不存在的交换须记录，不得用总括流表示。 | `eu-jrc-pef-methods-2022` |
| `boundary_conditional_routes` | 条件过程 | 仅在相应过程发生于报告场址或受制造商控制时纳入各条件过程；外包等效过程通过外购投入数据集披露。 | `un-cpc-3-0-2025` |
| `boundary_exclusions` | 下游过程和资本设备 | 本工厂门数据包排除配送、安装、使用、维护和寿命终止。默认排除资本设备；若研究目标要求纳入实质相关资本设备，须予以披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `core_fabrication_winding` | 磁芯制造和绕组 | conditional | 当场内制造或绕制磁芯、线圈、电磁铁、电磁执行器、联轴器、离合器、制动器或起重吸盘时纳入。 | 前景部件制造 | 每 1 kg 验收合格成套设备 |
| `electronic_assembly` | 印制线路板和电子装配 | conditional | 当场内安装、装联、焊接、返修或测试印制线路板时纳入。 | 前景电子装配 | 每 1 kg 验收合格成套设备 |
| `aqueous_cleaning_surface_prep` | 水基清洗和表面预处理 | conditional | 当场内使用水和氢氧化钠清洗、脱脂、预处理或维护设备零件或电化学设备时纳入。 | 前景清洗和表面预处理 | 每 1 kg 验收合格成套设备 |
| `final_assembly_test` | 最终装配和验收测试 | required | 始终纳入形成并验收所供应成套配置的操作。 | 前景最终生产 | 1 kg 验收合格成套设备 |

### 过程：磁芯制造和绕组（`core_fabrication_winding`）

#### 输入

##### 产品流

###### 用于磁芯的电工硅钢（`electrical_steel_input`）

当场内将电工硅钢切割、叠片、堆叠或以其他方式纳入磁芯时，记录相应压延产品。

- 选定流：电硅钢的压延产品 `8863bbb7-7bc4-4ff1-ab21-4a01addf2ad4`
- 流属性/单位：Mass / kg
- 数量规则：纳入过程中领用的接收状态实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_core_fabrication_batch`

###### 绝缘电磁线（`magnet_wire_input`）

记录领用于场内线圈绕制的绝缘绕组线质量。声明导体金属、绝缘体系、耐热等级和线材尺寸。

- 选定流：电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：Mass / kg
- 数量规则：领用于绕组的接收状态实测线材质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_core_fabrication_batch`

###### 场内切割或连接用工业氧气（`industrial_oxygen_input`）

仅当工业氧气为已声明制造路线中的场内氧燃料切割、钎焊或连接而跨越过程边界时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：可归属于纳入制造过程的供应发票、气瓶平衡或经校准仪表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_core_fabrication_batch`

###### 磁芯制造和绕组用电力（`core_fabrication_electricity`）

记录本过程用于切割、冲压、绕线、连接、固化、局部抽排及直接相关辅助设施的计量外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：报告期过程分表电量或可审计设备负荷计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_core_fabrication_batch`

#### 输出

##### 废物流

###### 分类收集的含铁制造废料（`steel_scrap_output`）

记录作为废物离开过程的含铁边角料、冲片、叠片和报废钢件实测质量。声明合金和涂层污染以及去向。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：Mass / kg
- 数量规则：作为含铁废物移出过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_core_fabrication_batch`

###### 分类收集的铜绕组废料（`copper_scrap_output`）

记录作为废物离开过程的含铜绕组边角料和报废线材实测质量。声明残留绝缘和污染状态。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：作为铜废料移出过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_core_fabrication_batch`

### 过程：印制线路板和电子装配（`electronic_assembly`）

#### 输入

##### 产品流

###### 安装到产品中的印制线路板（`printed_wire_board_input`）

记录领用于所声明设备的印制线路板质量。声明裸板或装配板状态、层数、基材、表面处理及所含元器件。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：领用于合格单元的线路板实测质量加可归属报废量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronic_assembly_batch`

###### 电子装配用电力（`electronic_assembly_electricity`）

记录线路板安装、焊接、返修、抽排和直接相关电子测试的计量外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：报告期过程分表电量或可审计设备负荷计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronic_assembly_batch`

#### 输出

##### 废物流

###### 印制线路板废料（`printed_wire_board_scrap`）

记录作为独立废物流离开过程的报废、损坏或不合格印制线路板。声明裸板或装配板状态及危险成分。

- 选定流：废料，印制线路板 `fe1d2a9b-bdb0-498a-9b5f-4836ec35f883`
- 流属性/单位：Mass / kg
- 数量规则：从电子装配移交的印制线路板废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronic_assembly_batch`

### 过程：水基清洗和表面预处理（`aqueous_cleaning_surface_prep`）

#### 输入

##### 产品流

###### 清洗用工艺用水（`process_water_input`）

记录供应给所纳入水基清洗、脱脂、漂洗或电化学设备维护步骤的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：经校准的补水和漂洗水仪表读数或槽体平衡记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_batch`

###### 碱性清洗用氢氧化钠（`sodium_hydroxide_input`）

仅在已声明碱性清洗或表面预处理路线中使用时记录氢氧化钠。报告溶液浓度，并将溶液质量换算为所含氢氧化钠质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测或发票溶液质量乘以经核实浓度所得氢氧化钠含量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_batch`

###### 水基清洗用电力（`cleaning_electricity`）

记录本过程边界内浴槽循环、加热、抽排、泵送及直接相关处理设备的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：报告期过程分表电量或可审计设备负荷计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_batch`

#### 输出

##### 废物流

###### 含金属清洗废水（`metal_bearing_cleaning_wastewater`）

当清洗、漂洗或浴槽维护产生的水性废物含有金属或含金属固体时，记录移交量。该流须与生活污水分开，并声明溶解金属和悬浮金属、pH、处理状态和移交去向。

- 选定流：含金属清洗废水
- 流属性/单位：Mass / kg
- 数量规则：移出过程的废水实测质量，或用已记录密度将实测体积换算所得质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_batch`

### 过程：最终装配和验收测试（`final_assembly_test`）

#### 输入

##### 产品流

###### 最终装配和验收测试用电力（`final_assembly_test_electricity`）

记录最终机械和电气装配、功能测试、调理、返工及直接相关辅助设施的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：报告期过程分表电量或可审计设备负荷计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_batch`

#### 输出

##### 产品流

###### 验收合格成套设备（`finished_equipment`）

仅记录符合所声明配置和工厂验收准则的合格设备。废品和返工在制品不得计入参考产品质量。

- 选定流：其他未另分类的成套电气设备
- 流属性/单位：Mass / kg
- 数量规则：在工厂门放行的验收合格成套设备实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格成套设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_batch`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 多功能前景操作 | 优先通过细分独立计量的操作，向所声明设备族归属材料、能源、废物和排放记录，从而避免分配。若无法细分，应在实施分配前评估系统扩展。 | `eu-jrc-pef-methods-2022` |
| `allocation_physical_then_other` | 剩余共享负荷 | 在已记录细分和系统扩展尝试之后，使用机器时间、能源需求或质量等具有因果性的物理关系分配剩余共享负荷。仅在不存在相关物理关系时使用其他关系，并披露理由和敏感性。 | `eu-jrc-pef-methods-2022` |
| `allocation_scrap_outputs` | 钢、铜和印制线路板废料 | 将实测废料作为跨越前景边界的废物报告。不得从前景清单扣除避免负荷；任何回收信用或负荷均属于明确声明的下游模型。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_core_fabrication_batch` | `core_fabrication_winding` | 电工硅钢、电磁线、工业氧气、电力、废钢、废铜 | 批次领料、仪表、气瓶、发票和废物移交记录 | product_model; batch_id; accepted_product_mass_kg; electrical_steel_kg; magnet_wire_kg; oxygen_m3; oxygen_reference_conditions; electricity_kwh; steel_scrap_kg; copper_scrap_kg; material_state; destination | 将经校准秤表、物料领退和废物转移票据与同一生产批次核对 | kg; m3; kWh | 每批次并按月核对 | 至少连续 12 个代表性月份；按活动生产时覆盖完整活动 | 每个纳入制造和绕组场址 | 汇总可归属记录，将电力换算为 MJ，并除以合格产品净质量 | 校准记录；发票；领退料记录；批次谱系；废物转移票据 |
| `cp_electronic_assembly_batch` | `electronic_assembly` | 印制线路板、电力、印制线路板废料 | 批次领料、分表、报废和废物移交记录 | product_model; batch_id; accepted_product_mass_kg; board_mass_kg; board_state; electricity_kwh; board_scrap_kg; destination | 将线路板领用、退回、报废、分表读数和废物移交与合格单元核对 | kg; kWh | 每批次并按月核对 | 至少连续 12 个代表性月份或完整生产活动 | 每个纳入电子装配场址 | 汇总可归属记录，将电力换算为 MJ，并除以合格产品净质量 | 秤表校准；物料清单；报废日志；废物转移票据 |
| `cp_cleaning_batch` | `aqueous_cleaning_surface_prep` | 工艺用水、氢氧化钠、电力、含金属清洗废水 | 仪表、槽体平衡、化学品领用、分析和废物移交记录 | product_model; batch_id; accepted_product_mass_kg; water_kg; sodium_hydroxide_solution_kg; sodium_hydroxide_mass_fraction; electricity_kwh; wastewater_kg_or_m3; density; pH; dissolved_metals; suspended_metals; treatment_state; destination | 将经校准仪表和槽体平衡与化学品领用、实验室分析和废水移交记录核对 | kg; kWh; mass fraction | 每批次或每次换浴并按月核对 | 至少连续 12 个代表性月份或完整生产活动 | 每个纳入清洗和表面预处理场址 | 计算氢氧化钠含量，将电力换算为 MJ；仅用已记录密度将废水体积换算为质量，然后除以合格产品净质量 | 校准；供应商浓度证书；浴槽日志；实验室报告；移交票据 |
| `cp_final_assembly_batch` | `final_assembly_test` | 最终用电和验收合格成套设备 | 分表、生产放行、称量、测试和返工记录 | product_model; configuration_revision; batch_id; accepted_units; accepted_net_mass_kg; rejected_mass_kg; rework_status; electricity_kwh; test_specification; test_result; packaging_condition | 将经校准产品秤和过程分表与放行及验收测试记录核对 | kg; kWh | 每个放行批次并按月核对 | 至少连续 12 个代表性月份或完整生产活动 | 每个最终装配和验收测试场址 | 将电力换算为 MJ，排除未处置废品和返工在制品，并按合格净质量归一化所有纳入过程合计 | 秤表校准；放行记录；测试报告；受配置控制的物料清单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 可归属过程数量 / 验收合格成套设备净质量 | 可归属行数量；accepted_product_mass_kg | 每 1 kg 验收合格成套设备的数量 |  |
| `calc_electricity_mj` | 所有电力行 | electricity_MJ = electricity_kWh × 3.6 | 经校准的 electricity_kWh | MJ 电能 |  |
| `calc_sodium_hydroxide_content` | `sodium_hydroxide_input` | contained_NaOH_kg = solution_mass_kg × verified_NaOH_mass_fraction | sodium_hydroxide_solution_kg; sodium_hydroxide_mass_fraction | kg 氢氧化钠 |  |
| `calc_wastewater_mass` | `metal_bearing_cleaning_wastewater` | wastewater_kg = measured_mass_kg，或 measured_volume_m3 × recorded_density_kg_per_m3 | 废水质量或体积；同期密度 | kg 含金属清洗废水 |  |
| `calc_mass_balance_check` | 含材料过程 | 投入质量 = 合格产品中所含质量 + 退料 + 分类废物 + 实测排放 + 库存变化；调查未解释残差 | 领料；退料；合格物料清单质量；废物；排放；期初和期末库存 | 经核对的过程质量平衡残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_configuration` | 参考产品和材料投入 | 为每个所表示产品族保留受配置控制的产品身份、物料清单、材料状态、合格输出质量、额定功能和测试规范。 | 已发布图纸；物料清单；产品数据表；验收测试记录 |
| `dq_foreground_coverage` | 所有纳入过程 | 对直接控制范围内每一种已知投入和产出采集企业特定记录；记录为零或不适用的路线决定并说明数据缺口，不得合并原子交换。 | 过程图；仪表图；采购台账；物料平衡；废物和排放登记；`eu-jrc-pef-methods-2022` |
| `dq_temporal_representativeness` | 前景记录 | 覆盖至少连续 12 个代表性月份；活动式生产则覆盖完整活动。披露停产、投产、异常批次和外推。 | 带日期的批次、仪表、生产和维护记录 |
| `dq_geography_technology` | 前景及背景链接 | 匹配场址地理范围、过程技术、材料牌号、部件状态、电力供应、水源和废物去向；披露每一项不匹配和替代。 | 供应商声明；数据集元数据；场址记录 |
| `dq_measurement_traceability` | 实测和计算行 | 保留仪表和秤标识、校准状态、原始单位、换算因子、浓度证书、密度记录、分配键和计算版本。 | 校准证书；原始数据摘录；计算工作簿审计轨迹 |
| `dq_completeness_reconciliation` | 每个报告期 | 核对采购及领用材料、合格输出、库存变化、退料、废物和已知直接排放；调查物料残差和电力重复覆盖。 | 签署的核对记录和异常日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 若缺少已声明设备类型、型号或产品族、额定功能、配置版本、净质量方法、制造路线、场址、报告期、测试准则或工厂门状态，则校验失败。 | `un-cpc-3-0-2025` |
| `validate_route_inventory` | 过程图和清单 | 必须纳入最终装配和验收测试。每条标记为适用的条件路线均须提供详细原子投入和产出记录；每条标记为不适用的路线均须提供不存在证据或外包上游数据集。 |  |
| `validate_uuid_semantics` | 含 UUID 的行 | 确认公开 state code 100、精确中英文 baseName、流类型、分类、属性、单位组和参考单位。拒绝代理、排名靠后的重复身份和未经核实的 UUID。 |  |
| `validate_reference_balance` | 合格产品和归一化 | 要求验收合格成套设备质量大于零，排除废品和返工在制品，并核实每个归一化数量使用同一合格净质量分母。 |  |
| `validate_energy_overlap` | 电力行 | 核实制造、电子装配、清洗和最终装配之间的分表边界不重叠。将过程合计与场址总表核对，并说明剩余共享电力。 |  |
| `validate_material_waste_balance` | 含材料过程 | 将领用材料与合格产品中所含质量、退料、废物、直接排放和库存变化核对。标记未解释残差以及裸板/装配板或绝缘线状态不一致。 | `eu-jrc-pef-methods-2022` |
| `validate_unresolved_identities` | UUID 为空的行 | 在直接核实精确 state-100 身份之前，`finished_equipment` 和 `metal_bearing_cleaning_wastewater` 的 UUID 保持为空；不得替换为更窄的成品或通用废水。 |  |
| `validate_comparison_limits` | 下游使用 | 本质量基准工厂门规则不得用于不同设备功能、额定性能、配置或使用寿命之间的比较性论断。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明配置的从摇篮到工厂门前景产品数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在兼容过程或生命周期模型中模拟所声明电气设备型号或同质产品族的工厂门供应；在所声明边界内开展热点和改进评估 |
| excluded_use | 不同设备功能或寿命之间的比较性论断；未声明配置时通用表示全部 CPC 46939 产品；替代永磁体、单独销售部件、使用阶段服务、安装或寿命终止 |
| required_metadata | 规范 PCR id；产品类型和型号或同质产品族；额定功能和主要性能；配置和物料清单版本；净质量和合格输出基准；场址和地理范围；技术和路线适用性；报告期；背景数据集身份；电力供应；水源；化学品浓度；废物状态和去向；分配决定；截断和基础设施处理；工厂门包装状态 |
| required_quality_disclosure | 前景覆盖；时间、地理和技术代表性；仪表和秤校准；质量和能源核对；数据缺口；UUID 缺口；背景替代；外包步骤；分配及敏感性；异常生产；不确定性和局限性 |
| update_trigger | 产品功能、配置或物料清单；制造路线、场址或技术；能源供应；清洗化学品；供应商或废物去向；分配；背景数据集；报告期发生变化，或任何变化超过研究的实质性阈值 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | dataset | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05；已核实 SHA-256 `sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 官方分类身份、所含示例及永磁体同级子类排除项 |
| `eu-jrc-pef-methods-2022` | official_guidance | Damiani, M.; Ferrara, N.; Ardente, F. (2022), Understanding Product Environmental Footprint and Organisation Environmental Footprint methods, EUR 31236 EN, JRC129907, doi:10.2760/11564, https://publications.jrc.ec.europa.eu/repository/bitstream/JRC129907/JRC129907_01.pdf（检索日期 2026-09-05） | 功能单位框架、前景投入产出采集、数据质量、过程边界及分配层级 |
