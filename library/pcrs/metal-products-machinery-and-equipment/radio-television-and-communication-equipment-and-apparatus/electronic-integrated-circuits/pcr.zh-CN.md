---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electronic-integrated-circuits
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电子集成电路

## 1. 范围与适用性

本 PCR 适用于在声明的制造厂门交付、可销售且通过电气测试的电子集成电路。覆盖通用集成电路家族，包括逻辑与微处理器件、存储器件、模拟器件，以及按主导功能归类的混合信号器件。合规数据集应描述具有代表性的产品家族与生产组合；不得把单一芯片设计、单片晶圆或狭义规格器件作为整个类别的未声明代理。

前景边界覆盖从声明的输入半导体衬底或晶圆开始的晶圆制造、晶圆测试与切割、组装与封装、最终电气测试，以及合格产品的交付准备。采购的衬底生产、化学品、气体、电力、水、封装材料及废物处理服务，除非作为前景工序采集，否则应由可追溯的上游数据集表示。产品设计、软件、制造设备生产、下游设备使用、制造厂门后的配送和生命末期默认位于前景边界之外；如纳入应明确披露。

分立半导体器件、光伏电池、LED、没有集成功能电路的裸半导体晶圆、印刷电路板、智能卡卡体、单独销售的连接器或引线框架部件以及完整电子设备不在范围内。裸片仅在它是通过电气测试并作为可销售最终交付状态时才纳入，且必须明确声明该状态；未测试晶圆或中间裸片不得替代成品集成电路。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electronic-integrated-circuits |
| classification_refs | CPC 3.0：47160 Electronic integrated circuits（精确分类上下文；本 PCR 不主张已有接受的 mapping edge） |
| covered_products | 逻辑与微处理、存储、模拟及混合信号家族的可销售电子集成电路；封装的单片、多裸片、芯粒和晶圆级封装器件；仅在声明为最终交付状态时纳入通过电气测试的裸片 |
| excluded_products | 未形成功能集成电路的未加工或已加工晶圆；未测试中间裸片；分立二极管、晶体管、传感器、LED 和光伏器件；单独销售的引线框架、衬底、连接器和智能卡模块；印刷电路板及完整设备 |
| representative_product | 在声明的一个家族、工艺节点范围、衬底材料、晶圆直径、裸片构造、封装路线、交付状态、地理范围和报告期内，按产量加权的合格电子集成电路组合 |
| production_route | 半导体衬底或晶圆供应；重复沉积、光刻、刻蚀、掺杂、清洗、平坦化和金属化；晶圆测试与切割；组装与封装；最终电气测试；制造厂门交付准备 |
| market_state | 制造厂门处可销售且通过电气测试的集成电路；封装形式或通过测试的裸片交付状态明确声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足声明的身份、电气验收准则和交付状态规格的电子集成电路 |
| How much | 1 kg 合格成品集成电路净质量 |
| How well | 通过声明的最终电气测试和出厂质量准则；声明家族与主导功能、工艺节点、衬底、裸片面积与数量、封装或裸片形式以及地理范围 |
| How long or cycle | 一个声明的报告期，通常为连续 12 个月，或覆盖有代表性晶圆制造、组装和测试的合理生产批次 |
| reference_flow_link | TianGong Product flow `bc98e461-2434-4229-8788-7ffb5c4b9a2e` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 电子集成电路，未指定 `bc98e461-2434-4229-8788-7ffb5c4b9a2e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | IC 家族及主导功能（逻辑/微处理、存储、模拟或混合信号）；上市器件功能与应用类别；工艺节点或工艺代际；半导体衬底材料；晶圆直径；每个交付器件的总有源裸片面积；单片、多裸片或芯粒构造及裸片数量；封装类型或通过测试的裸片交付状态；最终测试验收准则；晶圆厂、组装和测试地理范围；报告期；电力供应组合；含氟气体与 N2O 减排配置 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量合格交付 IC 的净质量。纳入属于交付器件组成的裸片、包封料、封装衬底或引线框架、互连、端子、盖板及集成散热片；运输包装单独记录。 |
| `count_to_mass` | 件数生产记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同批次或同产品家族的实测单个合格器件净质量将合格件数换算为质量。不得对多产品生产组合使用单一目录器件质量。 |
| `wafer_area_traceability` | 晶圆制造与裸片良率 | Area and Mass | m2 and kg | 保留晶圆直径、加工晶圆面积、理论裸片数、良品裸片数、裸片面积及各阶段良率。晶圆级记录只能通过可追溯的合格产出计算换算到参考质量。 |
| `family_parameterization` | 所有前景记录 | Not applicable | declared metadata | 记录至少按 IC 家族或主导功能、工艺节点或代际、衬底材料、晶圆直径、裸片面积、裸片数量、封装路线和交付状态分层；仅使用声明报告期的产量权重汇总。 |
| `energy_conversion` | 电力与燃料 | Energy | kWh or MJ | 保留发票或计量原始单位。需要换算时使用 1 kWh = 3.6 MJ，保留原始记录，且不得把电力与燃料热能混合。 |
| `gas_and_liquid_conversion` | 工艺气体、化学品、水与废水 | Mass or Volume | kg or m3 | 保留实测质量或体积及物态；需要换算时使用批次特定密度与条件，并保留原数量和换算依据。 |
| `direct_emission_speciation` | 晶圆厂和测试直接排放 | Mass | kg per emitted substance | 将每种含氟温室气体、N2O、受监管有害空气污染物和逸散传热流体作为单独基本流记录。没有实测或基于方法的利用率、副产物和减排处理时，不得把采购气体直接当作排放气体。 |

## 5. 系统边界

数据集采用声明 IC 生产组合的摇篮到制造厂门边界。前景记录应纳入洁净室和生产工具公用工程、工艺材料与气体、良率损失、内部物料转移、直接排放、废水、废物以及现场减排或处理。所有跨越边界的采购产品或服务均应有上游数据集。制造厂门后的运输、下游电路板组装、器件使用及生命末期默认排除，除非明确声明更宽的研究范围。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入首个前景制造门的半导体衬底或晶圆以及所有采购材料、公用工程和服务，并声明供应商身份、物态、生产地理范围和上游数据集引用 |
| starting_condition_role | 进入晶圆制造的可追溯上游输入；仅当报告组织运营并计量该阶段时，衬底或晶圆生产才可作为前景过程 |
| product_classification_scope | 覆盖逻辑/微处理、存储、模拟和混合信号家族的电子集成电路；具体数据集限定于其声明的家族、工艺代际和交付状态组合 |
| recursive_input_rule | 内部转移的已制造晶圆、良品裸片或封装 IC 仅作为前景过程间中间产品流记录一次，不得重复携带上游负荷。采购的同类别 IC 是上游产品数据集，不得视为自产参考产出。 |
| upstream_dataset_requirement | 对半导体衬底或晶圆、电力、燃料、超纯水供应、化学品、大宗与特种气体、封装材料、到首个前景门的运输以及外部废物或废水处理，要求地理与技术相适配的数据集 |
| disclosure | 声明纳入场址与工序；IC 家族份额；工艺节点；衬底与晶圆直径；封装和测试裸片份额；良率；截断；上游数据集版本；分配驱动因素；电力组合；减排技术、运行时间及去除效率证据；以及任何边界偏离 |

### 规范性边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_route` | foreground_process_chain | 对参考产品所代表的每条路线，纳入晶圆制造、晶圆测试与切割、组装与封装、最终电气测试、良率损失、直接排放和合格产品交付准备。 | `us-epa-semiconductor-neshap`; `epd-international-pcr-2024-06` |
| `boundary_upstream_inputs` | purchased_inputs | 将每项采购衬底、晶圆、化学品、气体、公用工程、封装材料和处理服务链接至上游数据集或有记录的前景工序；不得因缺少通用 IC 数量而省略主要输入。 | `iso-14044-2006`; `iec-63366-2025` |
| `boundary_family_strata` | category_mix | 在按产量加权汇总前，分别保留逻辑/微处理、存储、模拟和混合信号分层，以及存在实质差异的节点、衬底、裸片面积、封装和地理路线。 | `wsts-product-classification-2021`; `proske-et-al-2024-die-area` |
| `boundary_no_proxy` | representativeness | 不得把单一器件、单片晶圆、单一封装技术、单一应用或单一制造路线作为这一宽类别的未声明代理。 | `wsts-product-classification-2021`; `proske-et-al-2024-die-area` |
| `boundary_direct_gases` | wafer_fabrication_and_test | 适用时纳入含氟工艺气体、含氟传热流体、N2O、其副产物以及减排系统运行与停机；保留物质级排放。 | `us-epa-semiconductor-industry`; `us-epa-ghgrp-subpart-i` |
| `boundary_excluded_stages` | downstream_and_capital | 从本数据集排除下游电路板组装、产品使用、制造厂门后配送和生命末期。披露并论证设计、研发、建筑和资本设备的处理，仅在明确扩展范围时纳入。 | `epd-international-pcr-2024-06`; `iec-63366-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `wafer_fabrication` | 晶圆制造 | required | 对参考产品代表的集成功能电路始终纳入；仅对只从事组装的报告组织，采购成品裸片才可用可追溯上游数据集表示 | 前景电路形成与晶圆加工 | 加工晶圆面积和良品裸片产出，归一化至合格参考产品质量 |
| `wafer_sort_dicing` | 晶圆测试与切割 | required | 始终纳入；采购测试裸片时由供应商数据集表示 | 前景晶圆电测、单粒化与裸片验收 | 每单位合格参考产品质量转移至组装的良品裸片质量与面积 |
| `assembly_packaging` | 组装与封装 | required | 对封装器件纳入；对测试裸片交付，明确记录不适用的封装路线，同时保留搬运和最终测试工序 | 前景固晶或键合、互连、包封或晶圆级封装 | 最终验收前每单位合格参考产品质量的封装器件产出 |
| `final_test_delivery` | 最终测试与交付准备 | required | 对可销售交付状态始终纳入 | 前景老化测试（如适用）、最终电气测试、标识、合格产出计量和出货准备 | 1 kg 合格电子集成电路 |

### 过程：晶圆制造（`wafer_fabrication`）

#### 输入

##### 产品流

###### 半导体衬底或输入晶圆（`fab_substrate`）

记录进入电路制造的衬底或晶圆，包括材料、直径、厚度、供应地理范围及上游生产数据集。

- 选定流：按材料与交付状态明确的半导体衬底或晶圆
- 流属性/单位：Mass / kg and area / m2
- 数量规则：归属于声明生产分层的实测接收与领用质量及加工面积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：通过可追溯阶段良率归一至每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fab_materials`
- 来源：

###### 晶圆制造电力（`fab_electricity`）

记录服务于沉积、光刻、刻蚀、注入或扩散、清洗、平坦化、金属化及晶圆厂辅助工序的洁净室系统和工艺工具计量电力。

- 选定流：按电压等级与地理市场明确的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：使用有记录因果驱动因素分配至声明生产分层的晶圆厂计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fab_utilities`
- 来源：

###### 超纯水与工艺用水（`fab_water`）

分别记录进入超纯水制备和其他晶圆制造用途的补充水与循环水，并保留取水和排水记录。

- 选定流：按来源与处理状态明确的水供应
- 流属性/单位：Mass / kg
- 数量规则：归属于声明晶圆制造分层的实测补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fab_utilities`
- 来源：

###### 工艺化学品与图形化材料（`fab_process_chemicals`）

按物质或采购混合物记录酸、碱、溶剂、光刻胶、显影液、掺杂源、沉积前驱体、清洗剂、电镀化学品和平坦化浆料。

- 选定流：每种采购工艺化学品或配方材料作为单独产品流
- 流属性/单位：Mass / kg
- 数量规则：归属于声明生产分层的库存领用、采购核对或工具输送记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fab_materials`
- 来源：`us-epa-semiconductor-neshap`

###### 大宗、特种与含氟工艺气体（`fab_process_gases`）

分别记录每种气体，包括大宗气体、沉积与掺杂气体、含氟刻蚀或腔室清洗气体和 N2O；保留钢瓶、储罐供气、使用点及减排路由记录。

- 选定流：每种采购工艺气体作为单独产品流
- 流属性/单位：Mass / kg
- 数量规则：按气体和工艺类型计量或核对声明生产分层的气体消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fab_gases_emissions`
- 来源：`us-epa-semiconductor-industry`; `us-epa-ghgrp-subpart-i`

#### 输出

##### 产品流

###### 转移至晶圆测试的已制造晶圆（`fabricated_wafer`）

记录完成声明前段与互连工序后的晶圆产出，保留晶圆数量、加工面积、理论裸片数和路线身份。

- 选定流：带集成电路的已制造半导体晶圆，内部中间流
- 流属性/单位：Mass / kg and area / m2
- 数量规则：由完工晶圆记录计算，并通过阶段良率追溯至合格产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fab_output_yield`
- 来源：`proske-et-al-2024-die-area`

##### 废物流

###### 晶圆制造废物与废水（`fab_wastes`）

按废物身份与去向记录废工艺槽液、溶剂和光刻胶废物、浆料、污染固体、不合格晶圆、废水及处理残渣。

- 选定流：每项晶圆制造废物或废水流作为单独废物流
- 流属性/单位：Mass / kg
- 数量规则：归属于声明生产分层的实测废物出运、处理系统和废水记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fab_waste`
- 来源：

##### 基本流

###### 晶圆厂直接空气排放（`fab_direct_air_emissions`）

在考虑适用的利用率、副产物形成和减排之后，分别记录排放的含氟温室气体、N2O、含氟传热流体和受监管有害空气污染物。

- 选定流：每种排放物质对应的单独基本流
- 流属性/单位：Mass / kg
- 数量规则：烟道测量，或使用实测气体投入、利用率、副产物形成、减排效率和停机时间的物质与工艺特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fab_gases_emissions`
- 来源：`us-epa-semiconductor-industry`; `us-epa-ghgrp-subpart-i`; `us-epa-semiconductor-neshap`

### 过程：晶圆测试与切割（`wafer_sort_dicing`）

#### 输入

##### 产品流

###### 接收用于测试的已制造晶圆（`sort_fabricated_wafer_input`）

记录内部已制造晶圆转移，不重复其上游负荷。

- 选定流：带集成电路的已制造半导体晶圆，内部中间流
- 流属性/单位：Mass / kg and area / m2
- 数量规则：等于晶圆测试接收的可追溯已制造晶圆产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sort_yield`
- 来源：`proske-et-al-2024-die-area`

###### 测试与切割公用工程和耗材（`sort_utilities_consumables`）

记录晶圆电测和单粒化使用的电力、测试设备公用工程、切割水、刀片或切割线、胶带、载具及清洗材料。

- 选定流：每项公用工程和耗材作为单独产品流
- 流属性/单位：Energy / kWh or Mass / kg
- 数量规则：归属于声明测试和切割分层的计量、领用或采购数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sort_inputs`
- 来源：

#### 输出

##### 产品流

###### 转移至组装的良品裸片（`known_good_die`）

按产品家族和路线记录晶圆测试与切割后的合格裸片数量、面积和质量。

- 选定流：良品集成电路裸片，内部中间流
- 流属性/单位：Mass / kg and area / m2
- 数量规则：由合格裸片数量、实测或工程受控裸片面积与质量以及可追溯测试良率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sort_yield`
- 来源：`proske-et-al-2024-die-area`

##### 废物流

###### 测试与切割不合格品和残留物（`sort_dicing_waste`）

按处理路线记录电气不合格裸片、边缘和切割损失、受损晶圆、切割浆料或废水、废胶带及其他残留物。

- 选定流：每项测试或切割废物流作为单独废物流
- 流属性/单位：Mass / kg
- 数量规则：由不合格质量计算并与实测废物及良率记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sort_yield`
- 来源：

### 过程：组装与封装（`assembly_packaging`）

#### 输入

##### 产品流

###### 接收用于组装的良品裸片（`assembly_die_input`）

按裸片数量、总有源裸片面积和质量记录内部良品裸片转移，不重复晶圆制造负荷。

- 选定流：良品集成电路裸片，内部中间流
- 流属性/单位：Mass / kg and area / m2
- 数量规则：等于领用于声明封装路线的良品裸片，并核对组装良率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_materials_yield`
- 来源：`proske-et-al-2024-die-area`

###### 封装与互连材料（`assembly_package_materials`）

按封装路线记录封装衬底或引线框架、中介层、键合线、凸点或焊料、固晶材料、底部填充胶、模封料、盖板、散热片、端子及其他交付器件材料。

- 选定流：每种封装与互连材料或部件作为单独产品流
- 流属性/单位：Mass / kg
- 数量规则：物料清单、领用或采购记录，并与组装及合格产出核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials_yield`
- 来源：

###### 组装能源、水和工艺耗材（`assembly_utilities`）

记录固晶、键合、包封、固化、电镀和封装切割使用的电力、燃料、水、清洗剂、电镀化学品、工艺气体及其他公用工程。

- 选定流：每项组装公用工程或工艺耗材作为单独产品流
- 流属性/单位：Energy / kWh or Mass / kg
- 数量规则：归属于声明封装路线的计量或领用数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_utilities`
- 来源：

#### 输出

##### 产品流

###### 最终测试前的封装 IC（`packaged_ic_intermediate`）

按封装路线记录最终电气验收前的组装器件产出。

- 选定流：封装电子集成电路，内部中间流
- 流属性/单位：Mass / kg
- 数量规则：由组装件数和封装路线实测净质量计算，并与组装良率核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_materials_yield`
- 来源：

##### 废物流

###### 组装不合格品与材料废物（`assembly_waste`）

按去向记录不合格裸片和封装件、多余模封料、衬底或引线框架边料、电镀废物、废化学品、废水及其他组装残留物。

- 选定流：每项组装废物或废水流作为单独废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物和不合格记录，并与材料投入及组装良率核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_materials_yield`
- 来源：

### 过程：最终测试与交付准备（`final_test_delivery`）

#### 输入

##### 产品流

###### 进入最终验收的封装 IC 或测试裸片批次（`test_device_input`）

记录进入老化与最终电气测试的内部器件转移；对裸片交付，应明确标识测试裸片路线。

- 选定流：按声明交付状态确定的封装 IC 或良品裸片，内部中间流
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量与件数，并与最终测试验收核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_test_output`
- 来源：

###### 最终测试电力与传热公用工程（`test_utilities`）

记录测试和老化用电，以及温控和测试使用的燃料、冷却介质或含氟传热流体。

- 选定流：每种最终测试能源载体和传热流体作为单独产品流
- 流属性/单位：Energy / kWh or Mass / kg
- 数量规则：归属于声明测试路线和合格产量的计量或领用数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_utilities_emissions`
- 来源：`us-epa-ghgrp-subpart-i`

###### 交付包装（`delivery_packaging`）

记录随合格器件供应的托盘、卷盘、管、载具、防潮袋、干燥剂、标签和纸箱；其质量不计入参考产品净质量。

- 选定流：每种交付包装材料或部件作为单独产品流
- 流属性/单位：Mass / kg
- 数量规则：归属于合格产品交付的物料清单或领用记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_packaging`
- 来源：

#### 输出

##### 产品流

###### 合格电子集成电路（`accepted_integrated_circuit`）

仅将满足声明的最终电气与出厂质量准则的器件记录为参考产品产出。

- 选定流：电子集成电路，未指定 `bc98e461-2434-4229-8788-7ffb5c4b9a2e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：最终测试不合格核对后恰好 1 kg 合格成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 最终测试不合格品与交付准备废物（`test_delivery_waste`）

按去向记录测试失败器件、老化不合格品、损坏载具、包装边料和其他最终阶段废物。

- 选定流：每项最终测试不合格品或交付准备废物流作为单独废物流
- 流属性/单位：Mass / kg
- 数量规则：实测不合格与废物质量，并与投入及合格产出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_test_output`
- 来源：

##### 基本流

###### 最终测试传热流体逸散排放（`test_htf_emissions`）

使用含氟传热流体时，根据库存变动、采购、回收和处置记录，按物质记录逸散排放。

- 选定流：每种排放传热流体物质对应的单独基本流
- 流属性/单位：Mass / kg
- 数量规则：由采集的库存与处置记录计算物质特定逸散损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_utilities_emissions`
- 来源：`us-epa-ghgrp-subpart-i`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_manufacturing | 只要可以独立计量，首先按场址、报告期、IC 家族或主导功能、工艺节点或代际、衬底和晶圆直径、裸片面积等级、封装路线及交付状态细分记录。 | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `allocation_wafer_fab_driver` | shared_wafer_fabrication | 使用有记录的因果工程驱动因素分配共享晶圆制造投入与排放，例如加工晶圆面积并结合路线特定工艺步骤、掩膜层数、工具时间或实测腔室消耗。不得由单片晶圆或单个器件分配宽泛晶圆厂组合。 | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `allocation_assembly_test_driver` | shared_assembly_and_test | 使用路线特定的实测材料领用、设备时间、测试时间、能源或其他经证明的因果驱动因素分配封装、组装和测试负荷；仅对物质上等同的路线允许使用合格件数。 | `iso-14044-2006` |
| `allocation_yield_losses` | sequential_yield | 通过阶段良率核对，把不合格晶圆、裸片和封装件的衬底、材料、公用工程、直接排放及处理负荷分配给同一生产分层的合格产出。 | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `allocation_category_aggregation` | reference_product_mix | 每个分层归一化后，仅使用声明报告期合格产出质量进行汇总。报告家族份额，不得由狭义产品数据集推断未被代表的家族。 | `wsts-product-classification-2021`; `proske-et-al-2024-die-area` |
| `allocation_recovery` | recovered_materials_and_energy | 按声明的 LCA 方法一致报告回收材料、外供能源及外部回收；披露替代或截断约定，并防止避免负荷、废物处理和共产品收益之间重复计算。 | `iso-14044-2006`; `iec-63366-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fab_materials` | `wafer_fabrication` | 衬底、化学品和图形化材料 | 采购、仓库领用、配方和工具输送记录 | 材料身份；供应商；批次；质量或体积；密度与条件；晶圆材料、直径和数量；工艺分层 | 核对采购、库存变化、领用和退料；保留物质或混合物身份 | kg, m3, m2, item | 每月及批次级 | 覆盖完整报告期并包含期初与期末库存 | 每个纳入晶圆厂 | 按材料和生产分层求和，再通过阶段良率归一化 | 采购记录、经校准输送系统、库存核对和配方版本历史 |
| `cp_fab_utilities` | `wafer_fabrication` | 电力、燃料和水 | 公用工程仪表和设施平衡记录 | 仪表编号；时间间隔；电力；燃料；补充水；循环水；排水；分配驱动因素 | 可用时使用工具或区域分表；否则以有记录的洁净室和工艺驱动因素核对设施总量 | kWh, MJ, kg, m3 | 至少每月 | 完整报告期 | 每个纳入晶圆厂及公用工程系统 | 按公用工程和生产分层求和；未经披露不得以循环水抵减取水 | 仪表校准、发票、设施平衡和覆盖日志 |
| `cp_fab_gases_emissions` | `wafer_fabrication` | 工艺气体投入、副产物、直接排放和减排 | 气体输送、使用点、配方、烟道测试、减排与停机记录 | 气体身份；投入质量；工艺类型；利用率；副产物；减排连接；DRE；运行时间；烟道测量；排放方法 | 可用时按物质测量；否则对实测投入应用有记录的法规或设施工程模型 | kg per substance | 批次或每月；减排停机按事件 | 完整报告期 | 每个纳入晶圆厂、工艺类型和减排系统 | 分别计算每种气体与副产物，减排后求和；保留受控与未受控时段 | 经校准质量流量或采购核对、烟道测试报告、减排维护和停机日志 |
| `cp_fab_output_yield` | `wafer_fabrication` | 已制造晶圆产出与前段良率 | 制造执行与晶圆谱系记录 | 晶圆编号；直径；加工面积；路线；节点；理论裸片数；完工晶圆数；报废；转移去向 | 保留晶圆谱系，并把完工晶圆链接至下游合格裸片和产品 | wafer, m2, kg, item | 每个晶圆批次 | 完整报告期 | 每个纳入晶圆厂和生产分层 | 在参考流归一化前，按分层计算加工面积和可追溯产出 | MES 导出、批次流程卡、路线版本和良率核对 |
| `cp_fab_waste` | `wafer_fabrication` | 废水、废化学品、固体和不合格晶圆 | 废物联单、处理仪表和实验室记录 | 废物身份；危险属性；质量或体积；相关浓度；去向；处理；回收 | 核对现场处理投入产出、外运和废水排放 | kg, m3 | 每月及出运级 | 完整报告期 | 每个纳入晶圆厂和处理系统 | 按废物身份与去向分别求和；没有分配披露不得与回收产出净额处理 | 联单、地磅单、排水仪表、实验室分析和处理日志 |
| `cp_sort_inputs` | `wafer_sort_dicing` | 测试与切割公用工程和耗材 | 仪表、采购和领用记录 | 电力；水；刀片或切割线；胶带；载具；清洗材料；批次和路线 | 将仪表与领用数量核对到加工晶圆批次 | kWh, kg, item | 批次级或每月 | 完整报告期 | 每个纳入测试与切割场址 | 按路线求和并通过合格裸片良率归一化 | 仪表记录、领用日志、批次流程卡和库存核对 |
| `cp_sort_yield` | `wafer_sort_dicing` | 已制造晶圆投入、良品裸片和不合格品 | 晶圆图、探针测试、切割和裸片谱系记录 | 晶圆编号；理论裸片；测试裸片；良品裸片；裸片面积；合格裸片质量；不合格类别；切割损失与残留 | 将晶圆图和单粒化结果链接至转移给组装的裸片 | item, mm2, kg | 每个晶圆批次 | 完整报告期 | 每个纳入测试与切割场址 | 按分层计算良品裸片产出和不合格质量；与已制造晶圆投入核对 | 晶圆图、探针结果、经校准尺寸数据和不合格处置 |
| `cp_assembly_materials_yield` | `assembly_packaging` | 裸片投入、封装材料、产出和不合格品 | 物料清单、领用、谱系、设备和不合格记录 | 裸片数量与面积；封装路线；每种材料质量；组装件数；合格件数；不合格质量与原因 | 按路线将材料领用和裸片谱系核对到封装产出 | kg, item, mm2 | 每个组装批次 | 完整报告期 | 每个纳入组装场址与路线 | 在参考流归一化前计算封装路线的材料投入、产出和不合格平衡 | 批准 BOM、批次谱系、称量记录、MES 良率和不合格处置 |
| `cp_assembly_utilities` | `assembly_packaging` | 组装能源、水和耗材 | 仪表、配方、采购和领用记录 | 电力；燃料；水；工艺气体；化学品；设备时间；封装路线 | 可用时使用分表，共享公用工程应记录因果分配 | kWh, MJ, kg, m3, h | 批次级或每月 | 完整报告期 | 每个纳入组装场址 | 按路线求和，并使用实测设备时间或其他因果驱动因素分配 | 仪表校准、发票、配方历史和分配工作表 |
| `cp_final_test_output` | `final_test_delivery` | 测试投入、合格参考产品和不合格品 | 测试分选机、老化、出厂质量和质量记录 | 投入件数；测试路线与时长；合格件数；不合格类别；实测单位净质量；交付状态；家族限定信息 | 核对测试投入、合格与不合格产出；通过代表性测量确定合格净质量 | item, h, kg | 每个最终测试批次 | 完整报告期 | 每个纳入最终测试场址 | 按分层求和合格产品净质量；将所有分层归一至恰好 1 kg 合格产出 | 测试日志、校准、抽样方案、出厂放行和质量核对 |
| `cp_test_utilities_emissions` | `final_test_delivery` | 测试电力、冷却和传热流体排放 | 仪表、HTF 库存、采购、回收和处置记录 | 电力；燃料；冷却；HTF 身份；期初期末库存；采购；回收；处置；泄漏 | 计量能源，并由完整库存平衡计算物质特定 HTF 损失 | kWh, MJ, kg | 每月及泄漏事件级 | 完整报告期 | 每个纳入最终测试场址 | 按测试路线求和；分别报告每种排放 HTF | 仪表、库存台账、维护、泄漏和处置记录 |
| `cp_delivery_packaging` | `final_test_delivery` | 交付包装 | 包装 BOM、领用和出运记录 | 材料；部件；质量；每托盘、卷盘或纸箱件数；合格产品质量 | 将包装领用与合格出货核对；从参考产品净质量中排除包装 | kg, item | 出运级或每月 | 完整报告期 | 每个纳入交付场址 | 按材料求和并归一至合格产品质量 | 批准包装规范、领用和出运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 同一分层数量 / 同一分层合格参考产品净质量；生产组合结果 = 各分层归一化数量按合格分层质量份额加权求和 | 采集的分层数量；合格产品净质量；质量份额 | 每 1 kg 合格 IC 的数量 | `iso-14044-2006` |
| `calc_count_to_mass` | 合格与中间器件件数 | 质量 = 合格或转移器件数量乘以同一产品与交付状态分层的实测代表性单器件净质量 | 器件数量；单件净质量抽样结果 | 器件质量 kg |  |
| `calc_sequential_yield` | 晶圆、裸片、组装与测试谱系 | 分别保留前段完工、晶圆测试、组装和最终测试良率；每单位合格产出的所需投入由实际谱系计算，不得用一个通用总良率替代 | 晶圆投入；完工晶圆；理论与良品裸片；组装与测试件数；合格件数 | 每单位合格产出的可追溯投入、不合格品和中间转移 | `proske-et-al-2024-die-area` |
| `calc_direct_fgas` | 含氟温室气体与 N2O 排放 | 使用实测投入、工艺特定利用率与副产物形成、减排连接、破坏或去除效率及停机时间计算每种投入气体与副产物排放，或使用有效烟道测量；标识方法和因子版本 | 物质投入；利用率；副产物因子；DRE；运行时间；烟道测量 | 每种物质排放 kg | `us-epa-ghgrp-subpart-i`; `us-epa-semiconductor-industry` |
| `calc_htf_inventory` | 含氟传热流体排放 | 逸散排放 = 期初库存 + 采购 + 其他接收 - 期末库存 - 退回、回收再用、销毁或转出数量，并按有记录的库存修正调整 | 完整 HTF 库存与处置记录 | 每种 HTF 物质排放 kg | `us-epa-ghgrp-subpart-i` |
| `calc_mass_reconciliation` | 每个前景过程 | 核对产品与材料投入、产品产出、分别识别的废物、废水、排放及有记录库存变化；调查而不是静默平衡无法解释的差异 | 质量投入；产出；废物；排放；库存变化 | 核对差异与纠正说明 | `iso-14044-2006` |
| `calc_family_assignment` | IC 家族元数据 | 按上市功能与主导功能规则划分逻辑/微处理、存储、模拟或混合信号；对多功能器件记录判定 | 产品规格；主导功能；裸片面积或功能证据 | 声明的 IC 家族分层 | `wsts-product-classification-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留产品家族定义、主导功能、节点或工艺代际、衬底、晶圆直径、裸片面积与数量、封装路线、交付状态、测试准则和 TianGong 参考 UUID。 | 产品规格、路线记录、测试放行和参考流审查 |
| `dq_temporal` | 前景数据 | 覆盖一个代表性报告期，并识别停机、爬坡、认证、异常良率和减排停机时段；较短批次须说明理由。 | 带日期仪表、MES、库存和维护记录 |
| `dq_geography` | 多场址生产 | 识别晶圆厂、测试切割、组装和最终测试地理范围及各场址电力和上游市场；没有产量权重不得标记全球或国家平均。 | 场址清单、供应商记录、电力合同和合格产出质量份额 |
| `dq_completeness` | 材料与排放清单 | 核对所有主要衬底、化学品、气体、水、能源、封装材料、废物、废水和直接排放记录；记录缺失覆盖，不得以狭义芯片或晶圆代理填补。 | 采购到库存平衡、仪表、废物联单、排放模型和核对报告 |
| `dq_yield` | 阶段生产 | 保留晶圆、裸片、组装和最终测试谱系与良率，使不合格生产负荷仍分配给同一分层合格产出。 | 晶圆图、批次谱系、组装和测试良率报告 |
| `dq_direct_emissions` | 含氟气体、N2O、HAP 与 HTF | 记录物质身份、工艺类型、计算或测量方法、减排路由、DRE 证据、运行时间和副产物处理；披露任何法规默认因子与版本。 | 烟道测试、质量流量或采购记录、减排与方法记录 |
| `dq_technology` | 类别汇总 | 证明每个声称的 IC 家族及实质不同的节点、裸片面积、衬底、封装和地理分层均有代表性；未被代表的家族应从数据集声明中排除。 | 生产组合、产品主数据、路线矩阵和覆盖评估 |
| `dq_source_traceability` | 外部与上游数据 | 对每个上游数据集和外部方法保留来源版本、地理、技术、年限、访问日期和替代理由。 | 数据集注册表和来源日志 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 参考产出应恰为 1 kg 合格 `bc98e461-2434-4229-8788-7ffb5c4b9a2e`，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 |  |
| `validate_required_qualifiers` | dataset_metadata | 拒绝缺少任一必需家族、功能、节点、衬底、晶圆、裸片、封装或裸片状态、测试、地理、报告期、电力组合或减排限定信息的数据包。 | `wsts-product-classification-2021`; `proske-et-al-2024-die-area` |
| `validate_delivery_state` | reference_product | 核验参考产出是可销售且通过电气测试的 IC，并明确封装或通过测试的裸片交付状态；拒绝未测试晶圆、中间裸片、智能卡模块、引线框架、PCB 或完整设备代理。 | `us-epa-semiconductor-neshap`; `wsts-product-classification-2021` |
| `validate_no_narrow_proxy` | representativeness | 拒绝从单一芯片、单片晶圆、单一家族、单一封装、单一应用或单一路线得出类别平均声明，除非数据集声明明确缩小到该分层。 | `proske-et-al-2024-die-area`; `wsts-product-classification-2021` |
| `validate_process_coverage` | process_inventory | 核验晶圆制造、测试与切割、组装与封装或声明的测试裸片处理、最终测试、交付准备、废物、废水和直接排放的路线覆盖。 | `us-epa-semiconductor-neshap`; `epd-international-pcr-2024-06` |
| `validate_yield_and_mass` | calculation_results | 要求阶段良率核对和过程质量核对；调查无法解释的差异，并禁止没有实测证据的零损失假设。 | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `validate_direct_gases` | fab_and_test_emissions | 使用含氟气体、N2O 或 HTF 时，要求物质特定投入与排放记录、副产物处理、减排 DRE 和停机；拒绝“采购气体等于排放”的简化，除非引用方法明确要求该保守情形。 | `us-epa-semiconductor-industry`; `us-epa-ghgrp-subpart-i` |
| `validate_allocation` | shared_burdens | 对共享晶圆厂、组装和测试负荷要求细分或有记录的因果分配驱动因素，并要求最终汇总采用合格产出质量权重；拒绝无记录的质量、收入或单晶圆代理。 | `iso-14044-2006`; `proske-et-al-2024-die-area` |
| `validate_foreground_evidence` | quantitative_inventory | 本 PCR 所有数量均要求前景记录。不得用无引用通用值或暂定估计替代缺失的产品家族、节点、场址、良率、公用工程、材料或排放数据。 | `iso-14044-2006`; `iec-63366-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 摇篮到制造厂门前景数据包，经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布 |
| downstream_use | 构建计算、通信、电力电子、智能设备及其他消费电子集成电路系统的 process 与 lifecyclemodel 清单 |
| allowed_use | 用于声明的 IC 家族、节点或工艺代际范围、衬底、晶圆直径、裸片构造、封装或裸片交付状态、地理范围、报告期与生产组合；仅对兼容分层且有明确质量权重时允许汇总 |
| excluded_use | 不得作为半导体晶圆、分立器件、智能卡模块、印刷电路板或完整设备的代理；没有等效性审查不得支持跨实质不同性能、家族、节点、裸片面积、封装、地理或减排配置的比较声明 |
| required_metadata | 所有参考流限定信息；纳入场址与路线份额；前景和上游边界；阶段良率；分配驱动因素；电力组合；减排系统；数据集和来源版本；截断；数据缺口；不确定性和代表性评估 |
| required_quality_disclosure | 按家族和生产分层的覆盖；时间与地理覆盖；实测与计算份额；材料与良率核对；直接气体方法和因子版本；减排 DRE 与停机证据；未解决流 UUID；排除工序和缺失数据 |
| update_trigger | 家族组合、工艺节点、衬底或晶圆直径、裸片面积或芯粒构造、封装路线、场址或电力组合、工艺化学品、良率、减排配置、分配方法、法规排放方法发生实质变化，或证据超出声明代表期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, confirmed 2022, https://www.iso.org/standard/38498.html（检索于 2026-08-09） | LCI 范围、数据质量、分配、质量平衡、报告与审查规则 |
| `iec-63366-2025` | `standard` | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691（检索于 2026-08-09） | EEPS 横向 PCR、补充产品特定规则、情景与环境声明上下文 |
| `epd-international-pcr-2024-06` | `standard` | International EPD System PCR 2024:06, Electronic and electric equipment, and electronic components (non-construction), version 1.0.1, valid to 2029-10-28, https://www.environdec.com/pcr-library/pcr_23d2c7b4-04cd-4a57-8ca7-08d9b348866f（检索于 2026-08-09） | 电子行业范围、声明单位使用和制造厂门数据集画像 |
| `wsts-product-classification-2021` | `official_guidance` | World Semiconductor Trade Statistics, Product Classification 2021, Semiconductor Industry Association, https://www.semiconductors.org/wp-content/uploads/2021/02/Product_Classification_2021.pdf（检索于 2026-08-09） | 逻辑/微处理、存储、模拟及主导功能家族参数化与排除项 |
| `us-epa-semiconductor-neshap` | `official_guidance` | U.S. EPA, Semiconductor Manufacturing: National Emission Standards for Hazardous Air Pollutants, https://www.epa.gov/stationary-sources-air-pollution/semiconductor-manufacturing-national-emission-standards-hazardous（检索于 2026-08-09） | 从晶圆衬底到晶圆制造、测试与组装的制造边界，以及有害空气污染物纳入 |
| `us-epa-semiconductor-industry` | `official_guidance` | U.S. EPA, Semiconductor Industry, https://www.epa.gov/eps-partnership/semiconductor-industry（检索于 2026-08-09） | 含氟气体使用、刻蚀与腔室清洗过程、副产物及减排差异 |
| `us-epa-ghgrp-subpart-i` | `official_guidance` | U.S. EPA, Greenhouse Gas Reporting Program Subpart I Information Sheet, https://www.epa.gov/ghgreporting/subpart-i-information-sheet（检索于 2026-08-09） | 物质特定投入、副产物、HTF、N2O、减排、生产面积与计算数据要求 |
| `proske-et-al-2024-die-area` | `literature` | Proske, M. et al. (2024), Investigation of Semiconductor Die Area as a Reference Variable for LCA, DOI: 10.23919/EGG62010.2024.10631237, https://doi.org/10.23919/EGG62010.2024.10631237 | 将裸片面积与工艺节点用于代表性、分配和数据质量参数 |
