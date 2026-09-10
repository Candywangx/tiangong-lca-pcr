---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.insulated-winding-wire
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 绝缘绕组线

## 1. 范围与适用性

本 PCR 适用于绝缘绕组线制造的门到门前景数据包。范围包括用于电磁绕组的金属导体，可为圆形或矩形，并采用漆膜、纸或其他带材、玻璃纤维或其他已声明的绝缘体系。导体可为铜、铝、铜包铝、黄铜或其他明确声明的金属，但所得产品必须仍属于 CPC 46310。

产品边界按语义确定，不限于某种材料或电压。范围不包括裸线、同轴电缆、点火布线组、非绕组用途的一般绝缘电导体、光缆、已绕制线圈、变压器或电机装配、绕线作业、最终设备制造和使用阶段。产品规范与试验方法可采用适用的 IEC 60317、IEC 60851 分册或已声明的等效规范。

默认报告边界始于前景工厂接收裸导体杆、线、带，或接收已定尺寸的外购导体；止于合格绝缘绕组线完成试验、绕盘并可供发运。包装纳入清单，但不计入 1 kg 参考产品质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.insulated-winding-wire |
| classification_refs | CPC 3.0: 46310 Insulated winding wire |
| covered_products | 绝缘金属绕组导体，包括圆形或矩形漆包线、纸包或带包线、纤维包覆线及采用其他已声明绝缘体系的绕组线 |
| excluded_products | 裸导体；同轴电缆；点火布线组；非绕组用途的其他绝缘导体；光缆；已绕制线圈；电机；变压器；绕线、浸渍、装配和使用阶段作业 |
| representative_product | 满足所声明导体、几何形状、绝缘体系、热级、尺寸和电气要求的可销售绝缘绕组线 |
| production_route | 场内进行时的导体制备；绝缘施加及固化或定型；路线适用时的废气处理；后处理、试验、绕盘和包装 |
| market_state | 制造厂门口的合格净绕组线，尚未进入下游绕线或部件装配 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造完成并验收、用于绕组的绝缘金属导体 |
| How much | 1 kg 合格净绕组线，不含线轴、线盘、托盘及其他包装 |
| How well | 符合所声明产品规范、导体材料与几何形状、绝缘体系与等级、热级、尺寸公差、电气试验和验收准则 |
| How long or cycle | 一个已声明生产批次或其他有记录的代表性期间，并按合格产出归一化 |
| reference_flow_link | 功能单位由已核验的天工 Product flow Magnet wire / 电磁线表示 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Magnet wire / 电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 导体材料；导体形状和公称尺寸；适用时的平均直径类别；绝缘体系和材料；绝缘等级或漆膜厚度等级；热级；适用产品规范和试验方法；生产路线；生产地理范围；生产期间；合格净质量与成品率基准；适用时的涂覆和润滑技术；包装排除 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有前景交换均归一化至 1 kg 合格净绝缘绕组线；线盘、线轴、托盘、包裹物及其他包装质量不计入参考产品。 |
| `accepted_output_mass` | 合格产品与成品率 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用校准称量，或根据实测导体尺寸、密度及绝缘厚度进行有记录的长度—质量换算；换算结果须定期以质量核查校准。 |
| `conductor_and_insulation_mass` | 导体、绝缘材料、溶剂、润滑剂、废料和涂覆废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留原始质量记录并声明湿基、干基、固体分或到货基准；不得混用配方质量与涂层固体质量。 |
| `energy_measurement` | 电力与燃料 | Energy | kWh 或 MJ | 保留计量的能源载体及原单位；仅采用有记录的物理换算，并分别报告电力与燃料。 |
| `area_based_lubricant` | 按表面积计的润滑剂施加量 | Mass per surface area | mg/m2 | 由实测几何尺寸和生产长度计算线材表面积，再换算至参考产品；矩形线不得假定为圆截面。 |
| `voc_measurement` | 挥发性有机物总量 | Mass 或 mass concentration | g/kg product 或 mg C/Nm3 | 声明数值来自溶剂质量平衡、直接质量排放还是废气浓度，并记录干湿基、适用的基准氧、平均期间和处理状态。 |

## 5. 系统边界

前景系统包括把已声明的进厂导体状态转化为合格绝缘绕组线所需的全部场内活动：材料接收与储存；场内进行时的拉拔或轧制、退火或清洗；绝缘材料制备、施加、干燥、固化、浸渍、绕包或定型；润滑剂施加；路线适用时的 VOC 捕集与处理；试验；绕盘；内部搬运及包装。纳入场内电力、燃料、工艺气体、水、直接排放、废物、废品及处理耗材。

外购导体、绝缘材料、溶剂、燃料、电力、水、包装和外部废物处理服务作为关联产品或服务输入跨越边界，其上游生产不得在前景边界内重复建模。下游绕线、由部件生产者实施的浸渍、线圈或设备装配、分销、使用和报废阶段均在本门到门 PCR 之外。

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | 前景制造边界 | 纳入已声明产品路线实际需要的全部场内导体制备、绝缘施加或包覆、固化或定型、后处理、试验、绕盘、内部处理和包装活动。 | `jrc-sts-bref-2020` |
| `system_boundary_rule_2` | 外购投入和服务 | 采用与所声明材料、技术、地理范围和期间匹配的关联数据集表示上游生产与外部处理，不得将其重复作为前景作业。 | `eu-environmental-footprint-2021` |
| `system_boundary_rule_3` | 下游作业 | 排除绕线、下游线圈浸渍、部件或最终设备装配、分销、使用和报废；更广研究可在本前景数据包之外另行纳入。 | `un-cpc-3-2023` |
| `system_boundary_rule_4` | 路线特定作业 | 仅纳入所声明产品和场址实际发生的拉拔、退火、涂覆、绕包、浸渍、润滑及废气处理步骤，并明确标识不适用步骤。 | `jrc-sts-bref-2020` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 前景工厂接收的裸导体杆、线或带；若定尺寸工序在上游完成，则为外购的已定尺寸导体 |
| starting_condition_role | 作为导体制备的产品输入，或直接作为绝缘施加工序的产品输入 |
| product_classification_scope | CPC 46310 绝缘绕组线；只要产品仍为绕组线，不因导体金属、几何形状、绝缘技术、电压应用或终端设备子类型而改变类别 |
| recursive_input_rule | 用于返工或进一步涂覆的绝缘绕组线仍作为显式产品输入，须关联其自身上游数据集并声明进厂绝缘状态，不得重新标为裸导体 |
| upstream_dataset_requirement | 每项外购导体、绝缘材料、溶剂、润滑剂、能源载体、包装材料和外部处理服务均须关联在材料、路线、地理范围和期间上最具体的可用数据集 |
| disclosure | 声明进厂导体状态、定尺寸及退火为外购还是场内实施、产品路线、生产线技术、处理配置、排除作业、截断以及全部上游代理选择 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `conductor_preparation` | 导体制备 | `required` | 记录接收及实际定尺寸、拉拔、轧制、清洗和退火；若外购已定尺寸导体，则保留接收与核查步骤并关联其上游制备。 | 确立进入绝缘施加的金属导体状态。 | 转入绝缘施加的合格制备导体实测质量 |
| `insulation_application_and_curing` | 绝缘施加及固化或定型 | `required` | 选择所声明的漆膜、纸或带、纤维、复合或其他绝缘路线，并记录全部重复施加及热或化学定型步骤。 | 形成所声明绝缘体系并产出可试验绝缘线。 | 转入后处理的绝缘中间产品实测质量 |
| `voc_capture_and_treatment` | VOC 捕集与处理 | `conditional` | 当含溶剂漆、润滑剂、清洗或其他作业产生被捕集废气，或使用一体化催化/热处理时纳入。 | 分项记录捕集、去除、残余排放、处理能源、催化剂和余热。 | 所声明生产批次的处理废气及配套记录 |
| `finishing_testing_and_packing` | 后处理、试验与包装 | `required` | 纳入适用的润滑、尺寸和电气试验、判废、绕盘、内部搬运与包装。 | 确立合格可销售产出及其包装排除。 | 1 kg 合格净绝缘绕组线 |

### 过程：导体制备（`conductor_preparation`）

#### 输入

##### 产品流

###### 接收的金属导体（`received_metallic_conductor`）

记录跨越工厂边界的实际铜、铝、铜包铝、黄铜或其他已声明金属导体，并保留形态、尺寸、状态和表面状况。

- 选定流：已声明裸金属导体
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conductor_and_yield`
- 来源：

###### 拉拔和成形耗材（`drawing_and_forming_consumables`）

仅在前景导体制备路线实际消耗时记录拉拔润滑剂、清洗剂、模具或其他耗材。

- 选定流：已声明拉拔、成形和清洗耗材
- 流属性/单位：Mass / kg
- 数量规则：实测领用量减有记录的退回或回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conductor_and_yield`
- 来源：`jrc-sts-bref-2020`

###### 导体制备用电（`conductor_preparation_electricity`）

记录拉拔、轧制、退火、清洗、通风和可直接归属辅助设备的用电。

- 选定流：电力，已声明供应组合
- 流属性/单位：Energy / kWh
- 数量规则：直接计量，或由计量的生产线总量按规则分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

###### 导体制备燃料（`conductor_preparation_fuel`）

退火、清洗或加热采用直接燃烧时，分别记录每种燃料或热能载体。

- 选定流：已声明燃料或热能载体
- 流属性/单位：Energy / MJ
- 数量规则：计量或与发票核对的消耗量，按能源分配规则分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

###### 导体制备冷却和工艺用水（`conductor_preparation_water`）

补充水和排放水分别记录，循环水总量不得作为取水量。

- 选定流：已声明工艺供水
- 流属性/单位：Volume / m3
- 数量规则：分配至导体制备的实测补充水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cooling`
- 来源：`jrc-sts-bref-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后导体中间产品（`prepared_conductor_intermediate`）

记录转入绝缘施加的合格导体，并保留材料、形状、尺寸和表面状态。

- 选定流：制备后绕组线导体中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或由合格长度和实测线密度核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位转入绝缘施加的过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conductor_and_yield`
- 来源：

##### 废物流

###### 导体废料与切头（`conductor_scrap_and_offcuts`）

按材料和去向记录开机线、断线、切头及其他金属废料；不得在本门到门清单内计入回收替代信用。

- 选定流：已声明金属导体废料
- 流属性/单位：Mass / kg
- 数量规则：实测废料质量，并与转移量和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_recycling`
- 来源：`jrc-sts-bref-2020`

###### 废拉丝乳化液和过滤介质（`used_drawing_emulsion_and_filter_media`）

按实测质量和实际处理路线记录排放乳化液、过滤器、污泥及受污染清洗材料。

- 选定流：已声明拉丝过程废物
- 流属性/单位：Mass / kg
- 数量规则：实测外运废物质量加有记录的库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_recycling`
- 来源：`jrc-sts-bref-2020`

###### 导体制备废水（`conductor_preparation_wastewater`）

仅当排污水、清洗水或其他废水跨越前景边界时记录；闭路循环不能在缺少水量平衡证据时支持零值。

- 选定流：已声明导体制备废水
- 流属性/单位：Volume / m3
- 数量规则：分配至生产批次的实测排放水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cooling`
- 来源：

##### 基本流

###### 退火直接燃烧排放（`direct_annealing_combustion_emissions`）

使用燃料时，按物质分别记录场内退火燃烧的实测或依法报告的直接大气排放。

- 选定流：已声明直接大气排放物质
- 流属性/单位：Mass / kg
- 数量规则：监测质量排放，或由实测燃料和经批准因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：

### 过程：绝缘施加及固化或定型（`insulation_application_and_curing`）

#### 输入

##### 产品流

###### 制备后导体输入（`prepared_conductor_input`）

沿用 `conductor_preparation` 的导体身份和质量，不得替换为通用电缆导体。

- 选定流：制备后绕组线导体中间产品
- 流属性/单位：Mass / kg
- 数量规则：导体制备环节的关联转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conductor_and_yield`
- 来源：

###### 绝缘材料（`insulation_material`）

按实际到货基准和固体基准分别记录每种漆树脂或清漆、纸或带、玻璃纤维、浸渍剂、胶黏剂、添加剂及其他绝缘成分。

- 选定流：已声明绕组线绝缘材料
- 流属性/单位：Mass / kg
- 数量规则：实测领用量减有记录的退回量和回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_insulation_and_solvent`
- 来源：`jrc-sts-bref-2020`

###### 有机溶剂和清洗剂（`organic_solvent_and_cleaning_agent`）

对于含溶剂路线，分别记录新鲜与回收溶剂，包括配方溶剂、黏度调节和清洗用途。BREF 报告传统漆包线漆配方含 55–80 % 质量分数有机溶剂；该值仅用于配方语境核查，不是数据集默认值。

- 选定流：已声明有机溶剂或清洗剂
- 流属性/单位：Mass / kg
- 数量规则：依据采购、期初期末库存、回收溶剂、产品留存、废物和实测排放建立场址溶剂平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_insulation_and_solvent`
- 来源：`jrc-sts-bref-2020`

###### 绝缘生产线用电（`insulation_line_electricity`）

记录涂覆或包覆设备、驱动、炉体、通风、控制、冷却及可直接归属辅助设备的用电。

- 选定流：电力，已声明供应组合
- 流属性/单位：Energy / kWh
- 数量规则：直接计量，或由计量的生产线总量按规则分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`jrc-sts-bref-2020`

###### 绝缘生产线燃料（`insulation_line_fuel`）

分别记录用于干燥、固化、定型或一体化废气处理的直接燃料或热能载体。

- 选定流：已声明燃料或热能载体
- 流属性/单位：Energy / MJ
- 数量规则：计量或与发票核对的消耗量，按能源分配规则分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`jrc-sts-bref-2020`

###### 绝缘生产线冷却水（`insulation_line_cooling_water`）

补充水和排放水分别记录，闭路循环量不得计为取水。

- 选定流：已声明工艺供水
- 流属性/单位：Volume / m3
- 数量规则：分配至绝缘施加的实测补充水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cooling`
- 来源：`jrc-sts-bref-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 绝缘线中间产品（`insulated_wire_intermediate`）

记录转入后处理的线材，并声明绝缘体系、施加次数或包覆厚度、几何形状和试验状态。

- 选定流：绝缘绕组线中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或由合格长度和线密度核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_mass_and_quality`
- 来源：

##### 废物流

###### 残余涂料、废溶剂和受污染材料（`residual_coating_spent_solvent_and_contaminated_materials`）

按废物类型和处理路线分别记录残余漆、废溶剂、擦拭物、毛毡、过滤器及相关污泥。

- 选定流：已声明涂覆和溶剂废物
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量加有记录的库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_recycling`
- 来源：`jrc-sts-bref-2020`
- 数量范围：废漆、清漆和污泥筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：13
  - 上限：30
  - 单位：g
  - 基准：每 kg 溶剂投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`jrc-sts-bref-2020`

###### 绝缘阶段不合格线（`insulation_stage_off_specification_wire`）

按导体金属、绝缘状态、返工状态和实际去向记录判废或剥除绝缘的线材。

- 选定流：已声明不合格绝缘线
- 流属性/单位：Mass / kg
- 数量规则：实测废品质量减有记录的内部返工量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_recycling`
- 来源：`jrc-sts-bref-2020`

###### 绝缘阶段废水（`insulation_stage_wastewater`）

仅在废水产生并跨越边界时记录。报告正常漆包工艺无排水，必须有场址水量平衡和运行证据。

- 选定流：已声明绝缘阶段废水
- 流属性/单位：Volume / m3
- 数量规则：分配至生产批次的实测排放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cooling`
- 来源：`jrc-sts-bref-2020`

##### 基本流

###### 外部处理边界前的挥发性有机物（`volatile_organic_compounds_before_treatment`）

对含溶剂绝缘和清洗作业采用核对后的溶剂质量平衡计算 VOC 总量。若另列下述处理过程，本行表示转入处理的捕集负荷与未捕集直接排放，须避免重复计数。

- 选定流：已声明挥发性有机物物质或总 VOC
- 流属性/单位：Mass / kg
- 数量规则：与产品留存、回收溶剂、废物、捕集负荷和直接排放核对的溶剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020`

###### 固化和燃烧大气排放（`curing_and_combustion_air_emissions`）

在已监测、依法报告，或可由实测燃料和批准因子计算时，按物质记录氮氧化物、一氧化碳等直接排放。

- 选定流：已声明直接大气排放物质
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或由监测浓度和标准化气量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-sts-bref-2020`

### 过程：VOC 捕集与处理（`voc_capture_and_treatment`）

#### 输入

##### 产品流

###### 捕集的含溶剂废气（`captured_solvent_bearing_off_gas`）

记录从绝缘、清洗或润滑剂施加环节送入实际处理系统的 VOC 负荷。

- 选定流：待处理的含溶剂工艺废气
- 流属性/单位：Mass / kg VOC
- 数量规则：处理入口实测或由质量平衡得到的 VOC 负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020`

###### VOC 处理用电和燃料（`voc_treatment_energy`）

处理系统的电力与补充燃料须分别记录，不得混入生产线能源总量。

- 选定流：已声明电力和燃料输入
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：处理系统实测消耗量，不扣除未经核验的余热信用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 场内利用的回收热（`recovered_heat_used_on_site`）

仅当有计量且能证明在同一核算期间替代了实测场内能源输入时，单独记录回收热。

- 选定流：回收工艺热
- 流属性/单位：Energy / MJ
- 数量规则：送达用热过程的实测有用热
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020`

##### 废物流

###### 废处理催化剂和残余物（`spent_treatment_catalyst_and_residues`）

在移除期间记录催化剂更换和处理残余物；更换周期较长时，按其服务期间处理的产量进行代表性多年分配。

- 选定流：已声明废催化剂和处理残余物
- 流属性/单位：Mass / kg
- 数量规则：实测更换或处置质量，按催化剂服务期间处理的产量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_recycling`
- 来源：`jrc-sts-bref-2020`

##### 基本流

###### 处理后残余 VOC 大气排放（`residual_voc_to_air_after_treatment`）

记录处理后的残余总 VOC，并在需要时记录物质特定排放。只有满足所引 BAT 结论规定的法律和技术条件时，才能采用下列范围。

- 选定流：已声明挥发性有机物物质或总 VOC
- 流属性/单位：Mass / kg
- 数量规则：监测质量排放，或由标准化浓度和废气流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-bat-conclusions-sts-2020`
- 数量范围：平均直径大于 0.1 mm 绕组线的 BAT-AEL 总 VOC 溶剂质量平衡范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：3.3
  - 单位：g
  - 基准：每 kg 涂覆绕组线，仅适用于所声明 BAT 条件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-bat-conclusions-sts-2020`
- 数量范围：BAT-AEL 废气 TVOC 浓度范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：40
  - 单位：mg C/Nm3
  - 基准：在所声明 BAT 监测及适用条件下的处理废气浓度
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-bat-conclusions-sts-2020`

###### 处理燃烧排放（`treatment_combustion_emissions`）

在已监测或依法要求时，记录催化或热处理产生的氮氧化物、一氧化碳和其他直接排放。

- 选定流：已声明处理大气排放物质
- 流属性/单位：Mass / kg
- 数量规则：监测质量排放，或由标准化浓度和废气流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-sts-bref-2020`

### 过程：后处理、试验与包装（`finishing_testing_and_packing`）

#### 输入

##### 产品流

###### 进入后处理的绝缘线（`insulated_wire_input_to_finishing`）

沿用绝缘过程的绝缘和几何身份及关联转移质量。

- 选定流：绝缘绕组线中间产品
- 流属性/单位：Mass / kg
- 数量规则：绝缘施加环节的关联转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_mass_and_quality`
- 来源：

###### 后处理润滑剂（`finishing_lubricant`）

记录实际润滑剂或自润滑涂层路线。不得把圆线润滑剂范围用于矩形线；BREF 对其所述矩形线工艺报告为不润滑。

- 选定流：已声明绕组线后处理润滑剂
- 流属性/单位：Mass / kg
- 数量规则：实测领用减退回，或由经验证的表面积和施加率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_and_packaging`
- 来源：`jrc-sts-bref-2020`
- 数量范围：细线和超细圆线润滑剂施加量
  - 范围角色：典型范围（`typical_range`）
  - 下限：5
  - 上限：10
  - 单位：mg/m2
  - 基准：直径小于 0.10 mm 圆线的线材表面积
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`jrc-sts-bref-2020`
- 数量范围：中等和粗圆线润滑剂施加量
  - 范围角色：典型范围（`typical_range`）
  - 下限：30
  - 上限：60
  - 单位：mg/m2
  - 基准：中等和粗圆线的线材表面积
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`jrc-sts-bref-2020`

###### 包装材料（`packaging_materials`）

按材料和重复使用状态记录线轴、线盘、卷筒、包裹物、标签、托盘及其他包装；包装不计入参考产品质量。

- 选定流：已声明包装材料
- 流属性/单位：Mass or item / kg or item
- 数量规则：分配至合格产品的实测包装领用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_and_packaging`
- 来源：

###### 后处理和试验用电（`finishing_and_test_electricity`）

记录试验设备、驱动、搬运、通风和包装的直接计量或分配用电。

- 选定流：电力，已声明供应组合
- 流属性/单位：Energy / kWh
- 数量规则：直接计量，或由计量的生产线总量按规则分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格绝缘绕组线（`accepted_insulated_winding_wire`）

本行为定量参考输出，必须携带全部必需限定信息及已核验的产品流、Mass 流属性和单位组身份。

- 选定流：Magnet wire / 电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 合格净产品，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 最终试验废品线（`final_test_rejected_wire`）

按实际返工、剥除、回收或处置路线记录电气、尺寸、机械或外观试验不合格产出。

- 选定流：已声明不合格绝缘绕组线
- 流属性/单位：Mass / kg
- 数量规则：实测废品质量减同一生产批次有记录的重新投入量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_recycling`
- 来源：

###### 场内产生的包装废物（`packaging_waste_generated_on_site`）

按材料和去向记录进厂材料包装废物及报废或损坏的出厂包装。

- 选定流：已声明包装废物
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量加有记录的库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净绝缘绕组线
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_recycling`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_rule_1` | 可分离产品、生产线和批次 | 记录允许时，通过细分独立计量的生产线、产品族、导体金属、绝缘路线和生产批次避免分配。 | `eu-environmental-footprint-2021` |
| `allocation_rule_2` | 共享电力、燃料、水、通风和处理 | 共享公用工程优先按直接分表计量，其次按机器时间、炉体负荷、标准化气量或处理溶剂负荷等有记录的因果驱动量分配。 | `eu-environmental-footprint-2021` |
| `allocation_rule_3` | 剩余非因果共享负荷 | 仅在不存在可辩护的因果驱动量时采用合格净产品质量；披露受影响流、期间、分子、分母和敏感性。 |  |
| `allocation_rule_4` | 内部返工 | 同一批次有记录的返工返回原过程，不计为新的外部输入或合格产出；相关能源、材料损失和排放须保留。 |  |
| `allocation_rule_5` | 金属废料和回收溶剂 | 记录废料总量、回收溶剂及外部处理或回收产出。本门到门清单内不得扣除避免生产信用；更广研究的替代或报废方法须另行披露。 | `jrc-sts-bref-2020` |
| `allocation_rule_6` | 回收热 | 只有在同一核算期间对有用热交付和被替代场内能源均计量时，才可抵扣场内能源输入；否则单独报告回收热而不计信用。 | `eu-bat-conclusions-sts-2020` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_mass_and_quality` | insulation_application_and_curing; finishing_testing_and_packing | 转移中间产品和合格参考产品 | 生产、试验和处置记录 | 产品代码；导体材料；形状；公称尺寸；平均直径类别；绝缘体系；等级；热级；规范；生产长度；线密度；毛重；包装质量；合格质量；废品质量；试验结果；时间戳 | 校准秤及经验证的长度—质量换算，并关联质量记录 | kg; m; kg/m | 每线盘或生产批次 | 所声明代表性批次及完整平均期间 | 所声明生产线和工厂 | 汇总扣除包装后的合格净质量，保留批次级限定和处置关联 | 秤校准；线密度核查；试验证书；批次核对 |
| `cp_conductor_and_yield` | conductor_preparation | 接收导体、耗材、制备后导体和成品率 | 接收、库存、领用、转移和废料记录 | 材料 id；供应商批次；材料；形态；尺寸；期初库存；接收；领用；退回；期末库存；转移质量；废料质量；时间戳 | 校准称量并按材料和批次进行库存核对 | kg | 每次接收、领用、转移和批次结算 | 与参考产品数据相同期间 | 所声明工厂和生产线 | 期初库存加接收减期末库存、退回及有记录转移，并按合格产出归一化 | 秤校准；供应商证书；库存台账；质量平衡闭合 |
| `cp_insulation_and_solvent` | insulation_application_and_curing | 绝缘成分、溶剂和涂覆平衡 | 配方、采购、库存、领用、回收、清洗和废物记录 | 材料 id；配方；固体分；溶剂分；期初库存；采购；领用；退回；回收溶剂；期末库存；废物；留存涂层；时间戳 | 配料单、校准称量、供应商成分和溶剂质量平衡 | kg; % by mass | 每配方批次和生产批次结算 | 与参考产品及排放数据相同期间 | 所声明生产线、配料区和溶剂系统 | 在平均期间核对各成分和溶剂并按合格产出归一化 | 供应商规范；配料单；秤校准；溶剂平衡闭合 |
| `cp_energy_and_fuel` | conductor_preparation; insulation_application_and_curing; voc_capture_and_treatment; finishing_testing_and_packing | 电力、燃料、热能和回收热 | 仪表、发票、运行时间和余热记录 | 仪表 id；载体；期初读数；期末读数；能源；运行时间；产品族；处理状态；回收热；时间戳 | 校准分表，或与工厂总表核对并采用有记录的因果分配 | kWh; MJ | 连续或每班，并按月和批次汇总 | 与生产相同代表性期间 | 所声明仪表、生产线、炉体和处理装置 | 优先直接计量，否则采用声明的因果驱动量并按合格产出归一化 | 校准；发票核对；仪表覆盖图；分配工作表 |
| `cp_water_and_cooling` | conductor_preparation; insulation_application_and_curing | 取水、补充水、循环水和排水 | 水表、储罐、排放和运行记录 | 来源；仪表 id；补充量；循环量；排放量；蒸发估算；库存变化；去向；时间戳 | 校准仪表和场址水量平衡 | m3 | 连续或每班，并按批次汇总 | 与生产相同代表性期间 | 所声明生产线、冷却回路和排放口 | 报告补充和排放量，循环量分列，并按合格产出归一化 | 校准；水量平衡闭合；排放记录 |
| `cp_direct_air_emissions` | conductor_preparation; insulation_application_and_curing; voc_capture_and_treatment | VOC 及其他直接大气排放 | 溶剂平衡、烟道试验、连续监测、标准化气量和燃料记录 | 物质；浓度；碳基准；气量；温度；压力；湿基；氧基准；运行状态；处理状态；时长；捕集负荷；溶剂平衡输入；时间戳 | 与生产运行对齐的批准监测方法或核对质量平衡 | kg; g/kg; mg C/Nm3; Nm3 | 法规要求频率及每代表性批次 | 与生产及溶剂记录相同平均期间 | 每个声明排放源、捕集点、旁路和烟囱 | 由浓度乘标准化气量或闭合溶剂平衡计算，避免捕集量与残余量重复 | 方法报告；仪器校准；实验室 QA；溶剂平衡闭合；运行日志 |
| `cp_wastes_and_recycling` | conductor_preparation; insulation_application_and_curing; voc_capture_and_treatment; finishing_testing_and_packing | 废料、废品、涂覆废物、废溶剂、催化剂、废水和包装废物 | 称量、联单、库存、返工和去向记录 | 废物 id；材料；危险属性；毛重和皮重；内部返工；回收量；期初库存；期末库存；承运人；去向；处理；日期 | 校准称量、废物联单、返工日志和库存核对 | kg; m3 | 每次转移和批次结算 | 与生产相同代表性期间 | 所声明工厂及各储存或外运点 | 产生总量减同一批次有记录的重新投入，保留去向且不计避免生产信用 | 秤校准；联单；回收方收据；返工记录；库存平衡闭合 |
| `cp_finishing_and_packaging` | finishing_testing_and_packing | 润滑剂、表面积、包装和最终处置 | 配方、领用、几何、长度、件数、重复使用和包装记录 | 润滑剂 id；领用；退回；线形；尺寸；生产长度；计算表面积；包装材料；包装质量或件数；重复使用状态；合格产出；时间戳 | 校准称量、尺寸测量、生产计数器和包装物料清单 | kg; mg/m2; m2; item | 每批次或包装批 | 与合格产出相同代表性期间 | 所声明后处理和包装线 | 按几何形状计算表面积，核对润滑剂和包装领用，并按合格净产出归一化 | 秤校准；尺寸量具；计数器核验；包装规范 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 全部前景交换 | 归一化交换量 = 期间交换量 / 期间合格净产品质量 | 采集的期间交换量；cp_product_mass_and_quality 合格净质量 | 每 1 kg 合格净绝缘绕组线的交换量 |  |
| `conductor_mass_balance` | 导体制备和产品成品率 | 期初导体库存 + 接收 = 期末库存 + 制备后转移 + 实测废料 + 其他有记录去向；归一化前调查未闭合差异 | cp_conductor_and_yield 记录 | 核对后的导体输入、转移、废料和闭合差 |  |
| `insulation_solvent_balance` | 绝缘和 VOC 清单 | 期初库存 + 采购 + 回收流入 = 期末库存 + 产品留存 + 回收流出 + 废物 + 实测或计算排放；保留各物质或声明的溶剂组 | cp_insulation_and_solvent; cp_direct_air_emissions; cp_wastes_and_recycling | 核对后的溶剂和涂覆清单及残差 | `jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020` |
| `surface_area_lubricant_conversion` | 后处理润滑剂 | 每参考质量润滑剂 = 施加率 × 每生产长度的实测几何表面积 × 合格长度 / 合格净产品质量 | cp_finishing_and_packaging 的几何、长度、施加率和合格质量 | kg 润滑剂/kg 合格产品 | `jrc-sts-bref-2020` |
| `stack_mass_emission` | 监测废气排放 | 质量排放 = 声明基准下的浓度 × 对齐运行期间的标准化干或湿气量；显式应用单位及碳—物质换算 | cp_direct_air_emissions 的浓度、标准化气量、时长、基准和物质身份 | kg 排放/kg 合格产品 | `eu-bat-conclusions-sts-2020` |
| `shared_energy_allocation` | 共享能源仪表 | 分配能源 = 期间实测能源 × 声明的因果驱动量份额；仅在 allocation_rule_3 下允许质量份额 | cp_energy_and_fuel 仪表和驱动量记录 | 各过程、各载体的 kWh 或 MJ/kg 合格产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 对每个代表性产品族保留导体材料、几何和尺寸、绝缘体系和等级、热级、适用规范、试验方法和验收结果。 | 产品规范、批次记录和试验证书 |
| `dq_temporal_alignment` | 全部前景记录 | 产品、材料、能源、水、排放、废物及库存变化使用同一代表性期间，并说明停机、试产、旁路和异常运行。 | 期间覆盖矩阵和运行日志 |
| `dq_mass_closure` | 导体、涂层、溶剂、产品、废料和废物 | 核对导体及溶剂平衡并报告残差；未解决材料差异须纠正或作为数据质量限制明确披露。 | 签署的质量平衡工作表和库存核对 |
| `dq_meter_and_test_quality` | 质量、能源、水、尺寸、电气试验和排放 | 使用校准仪器，并保留校准状态、方法、适用时的检出限以及采样或平均期间。 | 校准证书、方法报告和实验室 QA |
| `dq_technology_representativeness` | 生产路线 | 匹配场内拉拔或外购导体起始状态、导体金属和形状、绝缘技术、涂覆或包覆次数、固化技术、润滑路线、线速和处理系统。 | 生产线说明、配方、生产设定和设备记录 |
| `dq_geographic_representativeness` | 能源、水、上游材料和处理 | 匹配所声明场址和供应地理范围，或记录每项代理及预期影响。 | 供应商地理、电网和燃料记录、代理登记表 |
| `dq_completeness` | 过程图和清单 | 覆盖全部必需及适用的条件过程，以及跨越边界的材料、能源、水、排放、废物、废品和包装，并列出有理由的排除项。 | 工艺流程图、仪表覆盖图、清单检查表和截断日志 |
| `dq_source_provenance` | 关联上游及二手数据 | 记录数据集身份、版本、地理范围、技术、参考年、访问日期、映射理由及任何替代或聚合。 | 数据集登记表和经复核的映射记录 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR 与产品身份 | 前景数据包标识 CPC 46310 绝缘绕组线，不得以裸线、同轴电缆、点火布线组、一般电缆、线圈、电机、变压器或其他更窄或不同产品替代。 | `un-cpc-3-2023` |
| `validation_rule_2` | 参考流身份 | 定量参考使用 Product flow `2bf8a4db-b29e-404a-ae6c-402adbb77af4`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 及 kg。 | `ilcd-units-of-mass` |
| `validation_rule_3` | 参考数量与限定信息 | 定量参考恰为 1 kg 不含包装的合格净绝缘绕组线，且全部必需限定信息均已填写。 | `iec-60317-0-1-2013-amd1-2019`; `iec-60317-0-3-2024`; `iec-60851-1-2021-amd1-2025` |
| `validation_rule_4` | 过程完整性 | 导体制备、绝缘施加及固化或定型、后处理试验与包装均存在；满足纳入条件时须包含 VOC 捕集与处理。 | `jrc-sts-bref-2020` |
| `validation_rule_5` | 路线适用性 | 纳入的每项涂覆、包覆、浸渍、固化、润滑或处理步骤均匹配声明路线；不适用的条件步骤明确标识，不得凭假设填零。 | `jrc-sts-bref-2020` |
| `validation_rule_6` | 材料和产品质量平衡 | 报告期间的导体接收、转移、合格产出、废料、废品、涂层留存、涂覆废物和库存变化已核对，并披露残差及修正。 |  |
| `validation_rule_7` | 溶剂与 VOC 平衡 | 含溶剂路线具有闭合溶剂平衡，覆盖新鲜及回收溶剂、库存、产品留存、废物、捕集负荷、处理、旁路和残余排放，且无重复计数。 | `jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020` |
| `validation_rule_8` | BAT 范围适用性 | 1–3.3 g VOC/kg 涂覆线范围仅用于平均直径大于 0.1 mm 且符合所声明 BAT 适用及平均条件的绕组线；5–40 mg C/Nm3 仅用于相应处理废气条件。 | `eu-bat-conclusions-sts-2020` |
| `validation_rule_9` | 润滑剂范围适用性 | 5–10 mg/m2 仅用于直径小于 0.10 mm 的细及超细圆线，30–60 mg/m2 仅用于中等和粗圆线；无产品特定证据时两者均不得用于矩形线。 | `jrc-sts-bref-2020` |
| `validation_rule_10` | 用水报告 | 补充水、循环水和排放水相互区分；只有具备场址水量平衡且证明无废水跨越前景边界时，才接受零废水值。 | `jrc-sts-bref-2020` |
| `validation_rule_11` | 分配 | 数据包按照第 7 节记录过程细分、直接计量、因果驱动量、任何质量回退、内部返工，以及废料、回收溶剂和回收热的处理。 |  |
| `validation_rule_12` | 外部数据集匹配 | 每项关联投入和处理数据集均记录身份、地理范围、技术、期间和映射理由，并披露已知不匹配。 | `eu-environmental-footprint-2021` |
| `validation_rule_13` | 证据与 UUID 纪律 | 不得把未经核验的 UUID、虚构数值、搜索摘要、私有命令记录或编写笔记作为来源证据；未解决的清单流身份在另行核验前仅作描述。 |  |
| `validation_rule_14` | 双语及投影一致性 | 中英文的规则 id、过程 id、行 id、受控词元、UUID、来源 id 和数量保持一致，structured.yaml 从规范英文 Markdown 重新生成。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 绝缘绕组线前景单元过程或聚合门到门制造数据集 |
| downstream_use | 用于线圈、电机、变压器、电抗器及其他消耗已声明绕组线产品的前景数据包，以及下游 process 或 lifecyclemodel 投影 |
| allowed_use | 导体材料、几何形状、绝缘体系、热级、产品规范、路线、地理范围、期间和工厂边界相匹配，或进行了透明适配的制造研究 |
| excluded_use | 裸线、一般电缆、同轴电缆、点火布线组、已绕制线圈、最终电气设备、使用阶段性能、未经更广方法复核的比较声明，或缺失必需限定信息的产品 |
| required_metadata | PCR id；已核验参考流；全部必需限定信息；起始状态；过程图；地理范围；期间；技术；分配；截断；关联数据集；采集覆盖；数据质量评价 |
| required_quality_disclosure | 一手数据份额和期间；仪表和试验覆盖；导体及溶剂平衡残差；路线特定排除；代理数据集；处理和旁路状态；不确定性及未解决限制 |
| update_trigger | 导体金属或几何、绝缘化学或等级、热级、产品规范、生产或固化技术、润滑路线、VOC 处理、地理范围、能源供应、分配或代表性期间发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2023` | standard | https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf | CPC 3.0 官方身份及 46310 与相邻线缆类别的区分 |
| `iec-60317-0-1-2013-amd1-2019` | standard | IEC 60317-0-1:2013 with AMD1:2019, https://webstore.iec.ch/en/publication/1346 | 漆包圆铜绕组线的一般要求和产品规范语境 |
| `iec-60317-0-3-2024` | standard | IEC 60317-0-3:2024, https://webstore.iec.ch/en/publication/82305 | 漆包圆铝绕组线的一般要求和产品规范语境 |
| `iec-60317-32-2015` | standard | IEC 60317-32:2015, https://webstore.iec.ch/en/publication/23564 | 玻璃纤维绕包并浸渍矩形铜绕组线的范围证据 |
| `iec-60317-27-3-2019-amd1-2024` | standard | IEC 60317-27-3:2019 with AMD1:2024, https://webstore.iec.ch/en/publication/95842 | 纸带包覆矩形铜绕组线的范围证据 |
| `iec-60317-27-4-2020-amd1-2024` | standard | IEC 60317-27-4:2020 with AMD1:2024, https://webstore.iec.ch/en/publication/95843 | 纸带包覆矩形铝绕组线的范围证据 |
| `iec-60851-1-2021-amd1-2025` | standard | IEC 60851-1:2021 with AMD1:2025, https://webstore.iec.ch/en/publication/104694 | 通用试验方法身份及产品质量记录要求 |
| `iec-60851-5-2008-amd1-2011-amd2-2019` | standard | IEC 60851-5:2008 with AMD1:2011 and AMD2:2019, https://webstore.iec.ch/en/publication/3699 | 绕组线电气试验方法身份 |
| `jrc-sts-bref-2020` | official_guidance | European Commission Joint Research Centre, Surface Treatment Using Organic Solvents including Preservation of Wood and Wood Products with Chemicals, 2020, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf | 绕组线制造路线、涂覆与溶剂语境、能源和水语境、废物类型、润滑剂范围、VOC 控制及前景采集设计 |
| `eu-bat-conclusions-sts-2020` | standard | Commission Implementing Decision (EU) 2020/2009, https://eur-lex.europa.eu/eli/dec_impl/2020/2009/oj/eng | BAT 27 适用性、VOC 质量平衡和废气浓度范围、处理及余热回收控制 |
| `eu-environmental-footprint-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, https://environment.ec.europa.eu/document/download/cb899bd7-bb06-491d-9989-c856a401fcd0_en?filename=CommissionRecommendationontheuseoftheEnvironmentalFootprintmethods_0.pdf | 生命周期数据质量、供应链数据集匹配、可追溯性和核验语境 |
| `ilcd-units-of-mass` | dataset | European Commission ILCD Unit Group data set, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, https://eplca.jrc.ec.europa.eu/EF-node/showUnitgroup.xhtml?stock=EF3_1_background_processes&uuid=93a60a57-a4c8-11da-a746-0800200c9a66&version=03.00.003 | 质量单位组身份及 kg 参考单位 |
