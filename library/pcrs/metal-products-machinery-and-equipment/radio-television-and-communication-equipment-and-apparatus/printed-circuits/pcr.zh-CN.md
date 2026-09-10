---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.printed-circuits
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 印制电路

## 1. 范围与适用性

本 PCR 适用于以刚性、柔性或刚挠结合板或电路形式供应的成品、未装配印制电路。它覆盖单面、双面和多层结构，以及加成法、半加成法、减成法或混合导体形成路线。产品在绝缘基材表面或内部承载规定的导电图形，并在完成所声明的阻焊层、字符、表面处理、外形加工、检验和电气测试后可供元器件装联。

本 PCR 覆盖从外购或内部生产的基材、层压板、铜箔、粘结材料、过程化学品及其他已声明投入开始，直至生产厂门口可销售印制电路产出的未装配印制电路制造。它不覆盖电子元器件的安装或焊接、印制电路板组件（PCBA）、半导体制造、独立电子元器件、未形成电路的裸层压板、废印制电路，以及下游设备装配和使用。

层数、刚性或柔性结构、基材与树脂体系、卤素与阻燃状态、板厚、铜重与导体密度、孔与互连技术、表面处理、阻焊层、拼板格式与利用率、质量等级、生产地域、制造路线和应用等级均可能显著改变清单结果。每个符合要求的前景数据包均应声明这些事实，不得将某一种狭义板设计视为所有印制电路的代表。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.printed-circuits |
| classification_refs | CPC 3.0：47130，精确分类语境 |
| covered_products | 成品未装配刚性、柔性和刚挠结合印制电路；单面、双面和多层印制电路；采用加成法、半加成法、减成法或混合路线制造的板 |
| excluded_products | 已装配 PCBA 和印制线路组件；已安装电子元器件；半导体；未形成电路的未加工层压板和覆铜板；电子设备；废或报废印制电路；废板处理服务 |
| representative_product | 生产厂门口 1 kg 可销售成品未装配印制电路净重 |
| production_route | 基材与拼板准备；适用时的层压；钻孔或其他互连形成；清洗和表面准备；成像和掩膜；适用时的催化与化学沉积；电镀或其他导体增厚；适用时的蚀刻与退膜；阻焊与字符；最终表面处理；外形加工、电气测试、检验和包装 |
| market_state | 已完成、经测试且未装配的印制电路，可用于所声明的元器件装联工序；参考产品质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供承载所声明导电图形、可进入所声明元器件装联过程的成品未装配印制电路 |
| How much | 生产厂门口 1 kg 验收合格成品印制电路净重 |
| How well | 符合所声明的图纸、材料体系、叠层、导体与孔规范、表面处理、阻焊、尺寸公差、电气测试、验收准则和质量等级 |
| How long or cycle | 一个已声明生产批次或报告期；使用寿命属于下游组件或设备系统，本 PCR 不作假设 |
| reference_flow_link | 定量参考恰为 1 kg 验收合格成品未装配印制电路；不合格品、测试附连板、工艺边、工具条和运输包装不计入参考产出，并应单独记录 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 印刷电路 `b230e7cd-7afd-4398-84bd-71beab1f6626` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 刚性、柔性或刚挠结合结构；基材与树脂体系；层数与叠层；成品板厚；铜重或导体厚度；拼板尺寸与利用率；导体密度或已声明设计系列；通孔、盲孔、埋孔、微孔或其他互连技术；加成法、半加成法、减成法或混合路线；阻焊与字符体系；表面处理；卤素与阻燃声明；验收与质量等级；生产地域；批次与报告期；纳入边界；净重约定 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

天工参考产品流在 CPC 47130 范围内具有通用语义，并以质量作为定量参考。不得以 PCBA 或电子元器件组合流、特定层数或特定应用的板流，或以面积为参考的裸板中间流替代这一通用参考流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 验收合格成品未装配印制电路。运输包装、不合格板、测试附连板、工艺边、工具条和可回收生产废料不得计入参考产品质量。 |
| `panel_to_product_conversion` | 以拼板、面积或件数记录的生产数据 | 质量及实测面积或件数 | kg；m2；item(s) | 使用所声明产品系列和批次的实测合格产品质量及实际拼板图，将拼板、面积和件数记录换算到质量参考。能够取得产品特定测量值时，不得采用通用面密度或板重。 |
| `material_mass_separation` | 基材与成品 | 质量 | kg | 分别保留基材或层压板、铜与其他导体、粘结材料、阻焊层、字符油墨、表面处理金属或涂层及其他有意并入材料的干质量。 |
| `chemical_solution_basis` | 过程化学品与槽液 | 质量、体积与浓度 | kg；m3；kg 物质/kg 溶液或等效单位 | 记录购入配方、配槽、补加、倒槽、带出、槽液寿命、活性组分浓度和处理路线；不得将溶液质量视为活性物质质量。 |
| `water_source_and_reuse` | 过程水、漂洗水和冷却水 | 体积 | m3 | 按水源区分补充水与内部循环水，并区分工艺接触水与非接触冷却或公用工程水，以避免重复计数。 |
| `energy_carrier_preservation` | 电力、热力和燃料 | 能量及载能体数量 | kWh；MJ；载能体特定单位 | 保留载能体、电压或供应类型、热值约定和计量单位。不得把电力、外供热和燃料合并为无差别能耗值。 |
| `metal_and_waste_mass_balance` | 铜与其他金属、不合格品、废槽液、污泥和回收材料 | 质量 | kg | 在同一报告期内核对金属购入及期初库存、补加、产品并入、回收、期末库存、向废水或污泥转移及其他损失；披露未解释的不平衡。 |

## 5. 系统边界

默认数据集边界为可销售未装配印制电路的从摇篮到厂门。上游材料、能源、化学品、供水、运输和处理负荷通过关联数据集表示；前景边界覆盖生产者控制下的制造操作与现场管理。仅当起始状态及所有省略的上游阶段均得到明确说明时，才可生产厂门到厂门数据集。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入所声明印制电路制造系统的外购或内部生产覆铜层压板、柔性基材、陶瓷或其他已声明绝缘基材、铜箔、半固化片或粘结材料及过程化学品 |
| starting_condition_role | 第一项前景拼板准备或层压操作的上游产品投入 |
| product_classification_scope | 符合 CPC 3.0 代码 47130 语义边界的成品未装配印制电路；分类仅为映射语境，不定义规范 PCR 身份 |
| recursive_input_rule | 已代表范围内成品印制电路的投入应作为上游产品流记录，不得在接收前景过程中再次展开。同一前景系统内制造的中间拼板应在各过程阶段之间关联，不得重复上游负荷。 |
| upstream_dataset_requirement | 对基材、层压板、铜箔与其他金属、树脂与粘结材料、过程化学品、电力、热力、燃料、供水、包装、入厂运输和场外废物或废水处理使用单独记录的数据集；披露代理数据与数据质量。 |
| disclosure | 声明产品结构、叠层、材料体系、制造路线、场址与地域、报告期、拼板利用率、良率、内部循环、废水与废气控制、场外处理、分配和准确终止边界。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_product_scope` | 产品身份 | 纳入刚性、柔性与刚挠结合印制电路及其所声明的单面、双面或多层路线；从印制电路前景边界排除元器件安装与 PCBA 操作。 | `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `boundary_required_manufacturing` | 前景生产 | 纳入适用的基材准备、层压、钻孔或其他互连形成、清洗、成像与掩膜、催化与化学沉积、导体增厚、电镀、蚀刻与退膜、阻焊与字符、最终表面处理、外形加工、测试、检验和包装。对不适用的路线步骤作明确标记。 | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `boundary_material_energy_water` | 所有前景阶段 | 纳入所有外购和内部转移材料、过程化学品、槽液配制与补加、按水源和用途区分的水、电力、热力、燃料、压缩空气或其他物质性公用工程，以及实际内部循环，并避免重复计数。 | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `boundary_waste_emissions` | 所有前景阶段 | 纳入不合格品、铣边和钻孔残余物、废掩膜与抗蚀剂、废槽液与蚀刻液、带出液、漂洗废水、废水处理污泥、回收金属、其他危险与非危险废物，以及对空气、水和土壤的实测或计算排放。 | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `boundary_cutoff_disclosure` | 完整性 | 不得仅因缺少首选数据集而省略已知的材料、化学品、能源、水、运输、废物或排放流。应将其记录为未解决项、采用已披露代理，或依据所声明研究规则说明排除理由。 | `iso-14044-2006` |
| `boundary_downstream_exclusion` | 默认从摇篮到厂门数据集 | 排除元器件制造与安装、PCBA 焊接与清洗、下游设备装配、已装配设备分销、使用和寿命终止；除非生命周期模型明确添加这些阶段且不重复计数。 | `ifc-electronics-ehs-2007`; `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | 基材准备与层压 | required | 始终纳入；仅在所声明结构采用层压时使用层压特定投入 | 绝缘与导体叠层的前景准备 | 生产 1 kg 验收合格成品印制电路所需的准备后拼板质量 |
| `hole_and_surface_preparation` | 钻孔、互连形成与表面准备 | required | 始终纳入；仅对明确不使用孔或其他成形互连的路线将孔形成步骤标为不适用 | 前景机械与化学准备 | 生产 1 kg 验收合格产品所需、进入成像的准备后板面积与质量 |
| `conductor_formation` | 成像、掩膜、电镀、蚀刻与退膜 | required | 始终纳入；具体加成、半加成、减成、催化、电镀和蚀刻步骤遵循所声明路线 | 导电图形的前景形成 | 生产 1 kg 验收合格产品所需的图形化板产出 |
| `finishing_and_release` | 阻焊、字符、表面处理、外形加工、测试、检验与包装 | required | 始终纳入；所选表面处理顺序遵循所声明产品规范 | 可销售印制电路的前景完成与放行 | 1 kg 验收合格成品印制电路 |
| `wastewater_and_waste_management` | 过程废水、槽液、残余物与污泥管理 | required | 始终纳入；现场处理直接建模，场外处理通过关联服务数据集建模 | 制造残余物的前景分类、处理、回收与转移 | 生产 1 kg 验收合格产品产生的残余物 |

### 过程：基材准备与层压（`material_preparation`）

#### 输入

##### 产品流

###### 基材、铜箔与覆铜层压板（`base_materials`）

按供应商规范和批次记录每种绝缘基材、铜箔、覆铜层压板、柔性薄膜、陶瓷基材、金属芯基材及其他结构材料。

- 选定流：选择材料和供应商特定的天工产品流
- 流属性/单位：质量 / kg；面积 / m2 作为辅助活动数据保留
- 数量规则：外购与库存核对或向所声明产品系列的实测发料量，经退库调整后按合格产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_material_bom_and_stock`
- 来源：`us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`

###### 半固化片、粘结膜、树脂与层压辅助材料（`lamination_materials`）

使用时记录半固化片、胶粘剂或粘结膜、覆盖膜、树脂、离型膜、隔离材料和其他层压材料。

- 选定流：选择配方特定的天工产品流
- 流属性/单位：质量 / kg；按面积采购时为面积 / m2
- 数量规则：实测批次发料量减去有记录的未用退料，按实际拼板图和合格产出分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：采用层压路线时每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_material_bom_and_stock`
- 来源：`us-epa-pwb-surface-finishes`

###### 准备与层压的电力和热能（`material_preparation_energy`）

记录开料、叠板、压合、固化、通风及路线特定准备所用电力、外供热和燃料。

- 选定流：选择载能体、电压、技术和地域特定的天工产品流
- 流属性/单位：能量 / kWh 或 MJ；燃料采用其计量载能体单位
- 数量规则：分表计量消耗或有记录的设备负荷计算，并按第 7 节分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`ifc-electronics-ehs-2007`

##### 废物流

#### 输出

##### 产品流

###### 准备后或层压后拼板（`prepared_panel`）

记录转移到下一前景过程的准备后拼板干质量、面积、拼板数、叠层和材料组成。

- 选定流：产品特定的准备后印制电路拼板中间流
- 流属性/单位：质量 / kg；面积 / m2；件数 / item(s)
- 数量规则：实测转移数量，并与材料发料、留存库存、边角料和不合格品核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的准备后拼板
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_batch_route_yield`
- 来源：`us-epa-pwb-surface-finishes`

##### 废物流

###### 边角料、隔离材料废物与层压不合格品（`preparation_scrap`）

按材料组成和实际回收、再生或处置路线记录每种残余物。

- 选定流：选择材料和处理方式特定的天工废物流
- 流属性/单位：质量 / kg
- 数量规则：实测分类废物与不合格拼板质量，并与发料和准备后产出核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery`
- 来源：`us-epa-pcb-p2-1990`

##### 基本流

###### 层压与准备过程的大气排放（`preparation_air_releases`）

按物质和环境区室记录开料、加热、固化、清洗与通风产生的实测或许可方法计算排放。

- 选定流：选择物质和环境区室特定的天工基本流
- 流属性/单位：质量 / kg
- 数量规则：所声明报告期的连续或定期测量、物料平衡或有记录许可方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

### 过程：钻孔、互连形成与表面准备（`hole_and_surface_preparation`）

#### 输入

##### 产品流

###### 进入孔与表面准备的准备后拼板（`prepared_panel_input`）

转移准备后拼板，不重复其上游负荷。

- 选定流：产品特定的准备后印制电路拼板中间流
- 流属性/单位：质量 / kg；面积 / m2；件数 / item(s)
- 数量规则：来自 `material_preparation` 的实测转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的准备后拼板
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_batch_route_yield`
- 来源：`us-epa-pwb-surface-finishes`

###### 钻孔、铣边、除胶渣、清洗与调理材料（`hole_preparation_materials`）

记录所声明互连路线使用的钻孔与铣边耗材、磨料、清洗剂、除胶渣与调理化学品、催化剂及全部槽液配制和补加。

- 选定流：选择设备和配方特定的天工产品流
- 流属性/单位：质量 / kg；体积 / m3；工具采用件数
- 数量规则：实测发料、配槽与补加、工具更换记录及外购与库存核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的准备后拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_process_chemicals_and_baths`
- 来源：`us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

###### 孔与表面准备的过程水和漂洗水（`hole_preparation_water`）

按水源和用途记录补充水，并与循环水和非接触水分开。

- 选定流：选择水源和地域特定的天工水产品流
- 流属性/单位：体积 / m3
- 数量规则：计量补充水或核对后的槽体与漂洗线水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的准备后拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

###### 钻孔与表面准备的电力和公用工程（`hole_preparation_energy`）

记录钻孔、铣边、清洗、泵送、通风和槽温控制的电力与物质性公用工程。

- 选定流：选择载能体、电压和地域特定的天工产品流
- 流属性/单位：能量 / kWh 或 MJ；公用工程采用其计量单位
- 数量规则：分表计量消耗或有记录设备负荷计算，并按第 7 节分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的准备后拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`ifc-electronics-ehs-2007`

##### 废物流

#### 输出

##### 产品流

###### 钻孔并调理后的拼板（`conditioned_panel`）

记录转移拼板的质量、面积、数量、孔技术和合格数量。

- 选定流：产品特定的钻孔并调理后拼板中间流
- 流属性/单位：质量 / kg；面积 / m2；件数 / item(s)
- 数量规则：进入导体形成的实测合格转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的调理后拼板
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_route_yield`
- 来源：`us-epa-pwb-surface-finishes`

##### 废物流

###### 钻孔与铣边残余物及废旧工具（`mechanical_preparation_waste`）

按组成和路线记录收集粉尘、切屑、垫板或盖板材料、废旧工具、过滤材料和不合格拼板。

- 选定流：选择材料和处理方式特定的天工废物流
- 流属性/单位：质量 / kg；工具采用件数并保留辅助质量
- 数量规则：实测废物容器与工具更换记录，并与生产核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的调理后拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_recovery`
- 来源：`us-epa-pcb-p2-1990`

###### 废准备槽液与接触废水（`hole_preparation_wastewater`）

记录转移至回收或处理的废槽液、带出液、漂洗液、过滤介质和废水。

- 选定流：选择组成和处理方式特定的天工废物流
- 流属性/单位：体积 / m3 及已识别组分质量 / kg
- 数量规则：计量转移与槽液处置记录，并配套实测浓度或可靠组成数据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的调理后拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_effluent`
- 来源：`us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

##### 基本流

###### 粉尘、酸雾与挥发性排放（`hole_preparation_air_releases`）

按物质和环境区室记录机械准备、清洗和通风经控制后的排放。

- 选定流：选择物质和环境区室特定的天工基本流
- 流属性/单位：质量 / kg
- 数量规则：报告期实测或按有记录方法计算的受控排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的调理后拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

### 过程：成像、掩膜、电镀、蚀刻与退膜（`conductor_formation`）

#### 输入

##### 产品流

###### 进入导体形成的调理后拼板（`conditioned_panel_input`）

转移调理后拼板，不重复前序前景阶段的负荷。

- 选定流：产品特定的钻孔并调理后拼板中间流
- 流属性/单位：质量 / kg；面积 / m2；件数 / item(s)
- 数量规则：来自 `hole_and_surface_preparation` 的实测转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的调理后拼板
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_batch_route_yield`
- 来源：`us-epa-pwb-surface-finishes`

###### 成像、抗蚀剂、显影与退膜材料（`imaging_materials`）

记录实际路线使用的底片、光致抗蚀剂、丝印油墨、显影剂、退膜剂、清洗剂及相关配方特定投入。

- 选定流：选择配方特定的天工产品流
- 流属性/单位：质量 / kg；体积 / m3；以薄膜供应时为面积 / m2
- 数量规则：实测批次发料、配槽与补加及外购与库存核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的图形化拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_process_chemicals_and_baths`
- 来源：`us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

###### 铜、催化剂、镀盐与蚀刻剂（`conductor_chemicals`）

记录催化剂、化学铜和电解铜、其他导体或抗蚀金属、蚀刻剂、添加剂、还原剂、络合剂、酸、碱及每次配槽、补加、倒槽与更换。

- 选定流：选择物质和配方特定的天工产品流
- 流属性/单位：质量 / kg；体积 / m3；保留每种配方的浓度
- 数量规则：外购与库存核对加槽液日志，并通过实测图形化拼板产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的图形化拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_process_chemicals_and_baths`
- 来源：`us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

###### 导体形成的过程水与漂洗水（`conductor_formation_water`）

按工艺线和水源记录补充水，并与循环水分开。

- 选定流：选择水源和地域特定的天工水产品流
- 流属性/单位：体积 / m3
- 数量规则：计量补充水或核对后的生产线水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的图形化拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

###### 导体形成的电力与公用工程（`conductor_formation_energy`）

按生产线记录电力、热力、冷却、通风、泵送、压缩空气和其他物质性公用工程。

- 选定流：选择载能体、电压和地域特定的天工产品流
- 流属性/单位：能量 / kWh 或 MJ；公用工程采用其计量单位
- 数量规则：分表计量消耗或有记录设备负荷计算，并按第 7 节分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的图形化拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`ifc-electronics-ehs-2007`

##### 废物流

#### 输出

##### 产品流

###### 图形化印制电路拼板（`patterned_panel`）

记录合格图形化拼板的质量、面积、数量、路线、导体增厚和向表面处理的转移。

- 选定流：产品特定的图形化印制电路拼板中间流
- 流属性/单位：质量 / kg；面积 / m2；件数 / item(s)
- 数量规则：所声明导体形成路线的实测合格转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的图形化拼板
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_route_yield`
- 来源：`us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### 废物流

###### 废抗蚀剂、掩膜、底片与受污染固体（`imaging_waste`）

按组成和路线记录废底片、掩膜、抗蚀剂、过滤材料、擦拭物、容器和不合格拼板。

- 选定流：选择材料和处理方式特定的天工废物流
- 流属性/单位：质量 / kg
- 数量规则：实测分类废物与不合格拼板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的图形化拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery`
- 来源：`us-epa-pcb-p2-1990`

###### 废镀槽液、蚀刻液、带出液与废水（`conductor_wastewater`）

记录每股分类废槽液、蚀刻液、漂洗流、带出回收流和废水转移，并保留金属及相关组分浓度。

- 选定流：选择组成和处理方式特定的天工废物流
- 流属性/单位：体积 / m3；已识别组分质量 / kg
- 数量规则：报告期内计量转移、槽液日志和浓度分析
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的图形化拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_effluent`
- 来源：`us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### 基本流

###### 成像、电镀与蚀刻的受控排放（`conductor_air_releases`）

记录控制后的酸雾、挥发性有机物、颗粒物和其他实测或计算排放。

- 选定流：选择物质和环境区室特定的天工基本流
- 流属性/单位：质量 / kg
- 数量规则：烟道或作业排风测量、物料平衡或有记录许可计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的图形化拼板产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

### 过程：阻焊、表面处理、测试与放行（`finishing_and_release`）

#### 输入

##### 产品流

###### 进入表面处理的图形化拼板（`patterned_panel_input`）

转移图形化拼板，不重复上游负荷。

- 选定流：产品特定的图形化印制电路拼板中间流
- 流属性/单位：质量 / kg；面积 / m2；件数 / item(s)
- 数量规则：来自 `conductor_formation` 的实测转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路所需的图形化拼板
- 基准类型：过程输出（`process_output`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_batch_route_yield`
- 来源：`us-epa-pwb-surface-finishes`

###### 阻焊、字符与最终表面处理材料（`finishing_materials`）

记录阻焊与字符配方、清洗剂、微蚀剂、催化剂、助焊剂、焊料或替代涂层、镍、金、钯、银、锡、有机保护剂及全部路线特定槽液材料。

- 选定流：选择配方和金属特定的天工产品流
- 流属性/单位：质量 / kg；体积 / m3；保留每种槽液或配方浓度
- 数量规则：外购与库存核对，加槽液配制、补加、倒槽和更换日志
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_process_chemicals_and_baths`
- 来源：`us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

###### 表面处理水、电力与物质性公用工程（`finishing_utilities`）

记录表面处理、外形加工、测试和包装所用补充水、电力、热力、冷却、通风、压缩空气、测试能耗和其他物质性公用工程。

- 选定流：选择水源、载能体、电压、技术和地域特定的天工产品流
- 流属性/单位：体积 / m3；能量 / kWh 或 MJ；公用工程采用其计量单位
- 数量规则：分表计量消耗或生产线与设施记录的有文件分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy_water_finishing`
- 来源：`us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

###### 运输包装材料（`transport_packaging`）

记录袋、干燥剂、隔离材料、标签、纸箱、托盘、卷盘、货盘和可重复使用包装，并与产品质量分开。

- 选定流：选择材料和供应商特定的天工产品流
- 流属性/单位：质量 / kg；件数并配套实测质量
- 数量规则：发给合格出货的实测包装量减去有记录可重复使用包装退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_product_packaging_and_release`

##### 废物流

#### 输出

##### 产品流

###### 验收合格成品印制电路（`finished_printed_circuits`）

记录最终外形加工、电气测试、尺寸与外观检验后的验收合格产品净重，不含运输包装。

- 选定流：印刷电路 `b230e7cd-7afd-4398-84bd-71beab1f6626`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg（Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66`）
- 数量规则：恰好 1 kg 验收合格产品净产出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 外形加工残余物、测试不合格品与表面处理固体（`finishing_scrap`）

按材料和路线记录铣边残余物、测试附连板、工艺边、不合格板、废过滤材料、受污染包装及其他表面处理固体。

- 选定流：选择材料和处理方式特定的天工废物流
- 流属性/单位：质量 / kg
- 数量规则：实测分类废物与不合格品质量，并与图形化拼板投入和合格产品产出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_recovery`
- 来源：`us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

###### 废表面处理槽液与废水（`finishing_wastewater`）

按化学组成和去向记录废表面处理槽液、漂洗液、带出液、清洗液和废水转移。

- 选定流：选择组成和处理方式特定的天工废物流
- 流属性/单位：体积 / m3；已识别组分质量 / kg
- 数量规则：计量转移、槽液记录与浓度分析
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_effluent`
- 来源：`us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### 基本流

###### 表面处理的受控大气排放（`finishing_air_releases`）

记录阻焊固化、字符印刷、表面处理槽、适用时的热风整平、外形加工与通风经控制后的排放。

- 选定流：选择物质和环境区室特定的天工基本流
- 流属性/单位：质量 / kg
- 数量规则：报告期实测或按有记录方法计算的排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

### 过程：过程废水、槽液、残余物与污泥管理（`wastewater_and_waste_management`）

#### 输入

##### 产品流

###### 处理化学品、水、能源与服务（`treatment_inputs`）

记录实际污染物特定处理系统所用处理药剂、过滤介质、水、电力、燃料和外部回收或处理服务。

- 选定流：选择化学品、载能体和服务特定的天工产品流
- 流属性/单位：质量 / kg；体积 / m3；能量 / kWh 或 MJ；服务特定单位
- 数量规则：实测处理系统记录和发票，并分配至所报告制造流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路产生的残余物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_effluent`
- 来源：`us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### 废物流

###### 进入管理的分类废槽液、废水与残余物（`residuals_to_treatment`）

每项内部残余物转移仅记录一次，并保留来源过程、化学组成、体积、质量、浓度和危险分类。

- 选定流：选择组成和处理方式特定的天工废物流
- 流属性/单位：体积 / m3；总流及已识别组分质量 / kg
- 数量规则：对前景生产阶段的已核实转移求和，扣除有记录的内部工艺回用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：生产 1 kg 验收合格成品印制电路产生的残余物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_effluent`
- 来源：`us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

#### 输出

##### 产品流

###### 回收铜与其他材料（`recovered_materials`）

记录符合所声明回收产出规范、去向和分配处理的材料；不得将未经核实的废物转移归为回收产品。

- 选定流：选择回收材料特定的天工产品流
- 流属性/单位：质量 / kg
- 数量规则：实测合格回收产出或经核实场外回收凭证
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery`
- 来源：`us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

##### 废物流

###### 废水处理污泥与浓缩残余物（`treatment_sludge`）

按组成和去向记录脱水污泥、滤饼、废介质、浓缩液和其他处理残余物。

- 选定流：选择组成和处理方式特定的天工废物流
- 流属性/单位：质量 / kg；适用时同时保留干物质和湿质量
- 数量规则：实测外运质量和含水率或固含量，并与处理投入和出水核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_recovery`
- 来源：`us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### 基本流

###### 排放至水体的处理后出水（`treated_effluent`）

在实际受纳环境区室记录处理后出水体积及每项报告污染物。

- 选定流：为受纳环境区室选择水量和污染物特定的天工基本流
- 流属性/单位：水量为体积 / m3；每种污染物为质量 / kg
- 数量规则：排放流量乘以有代表性的实测浓度；可取得直接负荷测量时优先使用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品印制电路
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_effluent`
- 来源：`us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 多产品设施与共用生产线 | 首先拆分过程、生产线、计量表、批次和产品系列记录，使直接投入、产出、废物和排放保持分配给导致它们的产品。 | `iso-14044-2006` |
| `allocation_shared_operations` | 共用能源、水、通风、槽液、测试和公用工程 | 使用分表计量消耗、设备运行时间、加工拼板面积、槽液负载、测试循环次数或污染物负荷等实测因果驱动量。仅当证明共用操作随产品质量变化时才允许仅按质量分配。 | `iso-14044-2006`; `us-epa-pwb-surface-finishes` |
| `allocation_yield_and_rejects` | 生产损失与不合格板 | 将正常废料、附连板、工艺边、测试失败和返工负荷计入验收合格可销售产出。不得从分母中移除不合格生产的负荷。 | `iso-14044-2006` |
| `allocation_wastewater_treatment` | 混合废水与污泥处理 | 按实测水流体积与污染物负荷或其他处理驱动特征分配。当污染物负荷显著不同时，不得仅按体积对化学性质不同的流分配。 | `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `allocation_recovered_materials` | 铜与其他回收材料 | 优先拆分过程并直接进行质量核算。若将回收材料视为共产品或给予再生信用，应声明方法、替代点、质量调整和敏感性；不得对同一回收数量同时使用分配与替代信用。 | `iso-14044-2006` |
| `allocation_internal_recycling` | 内部槽液、漂洗水、金属、拼板或材料循环 | 明确记录内部回用，但仅计入跨越前景边界的补充投入和净排放。内部循环不得产生避免负荷信用。 | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_output` | `finishing_and_release` | 产品身份与合格产出 | 规范、工艺流转单、测试记录、称量记录、放行记录 | 产品代码；图纸版本；结构；叠层；材料体系；厚度；铜重；拼板图；互连技术；表面处理；阻焊；验收等级；合格净重；包装质量；批次 | 受控生产与放行记录关联校准称量 | kg；m2；item(s) | 每批，按月汇总 | 至少连续 12 个有代表性月份；季节性或批次生产则覆盖完整生产周期 | 每个纳入场址和外包操作 | 按已声明产品系列汇总合格净重；保留批次限定信息并排除包装 | 校准记录；已放行规范；批次追溯；电气与尺寸验收证据 |
| `cp_material_bom_and_stock` | `material_preparation` | 材料投入 | BOM、采购、仓库发料、退料和库存记录 | 材料 id；供应商；批次；组成；发料量；退料量；期初与期末库存；拼板归属 | 采购与库存核对，并按产品 BOM 和实际拼板图检查 | kg；m2；item(s) | 每次发料并按月核对 | 与合格产出相同期间 | 每个纳入场址 | 期初库存 + 采购 - 期末库存 - 有记录退料，分配到产品系列并按合格产出归一化 | 供应商规范；库存台账；BOM 版本；材料批次追溯 |
| `cp_batch_route_yield` | 所有生产过程 | 中间转移、路线与良率 | 批次流转单与生产执行记录 | 过程步骤；路线；拼板 id；投入与产出数量；投入与产出质量或面积；返工；不合格代码；转移时间 | 批次级过程追踪，核对连续阶段之间的转移 | kg；m2；item(s) | 每批 | 与合格产出相同期间 | 每个纳入场址与外包阶段 | 按路线汇总合格转移和损失；通过合格产出归一化 | 工艺流转单；生产系统审计轨迹；不合格处置 |
| `cp_process_chemicals_and_baths` | `hole_and_surface_preparation`; `conductor_formation`; `finishing_and_release` | 过程化学品与槽液 | 采购、库存、配槽、补加、分析、倒槽和处置记录 | 配方；组分浓度；槽体积；补加；取样；倒槽；带出回收；更换；去向 | 批次和生产线日志与采购及库存记录核对 | kg；m3；浓度特定单位 | 每次补加或处置；按月核对 | 与合格产出相同期间 | 每条湿法生产线 | 期初库存 + 采购 + 内部回用 - 期末库存 - 处置 - 有记录损失，分配到生产线和产品系列 | 供应商 SDS 或规范；槽液分析；校准加药记录；库存核对 |
| `cp_energy_and_utilities` | `material_preparation`; `hole_and_surface_preparation`; `conductor_formation` | 电力、热力、燃料和公用工程 | 计量表、燃料、设备运行时间和公用工程发票记录 | 载能体；计量表 id；起止读数；运行时间；负荷；热值；分配驱动量 | 优先分表计量；否则采用与设施总量核对的有记录设备计算 | kWh；MJ；载能体特定单位 | 连续或每班；按月核对 | 与合格产出相同期间 | 每个纳入场址 | 按载能体与生产线汇总，扣除无关使用，按第 7 节分配并按合格产出归一化 | 计量表校准或发票；运行日志；与场址总量核对 |
| `cp_water_balance` | `hole_and_surface_preparation`; `conductor_formation` | 过程水、漂洗水与冷却水 | 计量表、槽体、漂洗线、循环与排放记录 | 水源；用途；补充体积；循环体积；排放体积；换槽；适用时浓度 | 水源与生产线分表计量或核对后的水平衡 | m3 | 连续或每日；按月核对 | 与合格产出相同期间 | 每个纳入场址 | 补充水只计一次；循环量单独报告；核对供水、产品滞留、蒸发、转移与排放 | 计量表校准；水费发票；生产线日志；水平衡闭合 |
| `cp_energy_water_finishing` | `finishing_and_release` | 表面处理水、能源与公用工程 | 计量表、槽液、设备运行时间和测试系统记录 | 水源或载能体；计量表；用途；运行时间；槽液或测试线；分配驱动量 | 分表记录或有记录生产线计算 | m3；kWh；MJ；公用工程特定单位 | 连续或每班；按月核对 | 与合格产出相同期间 | 每条表面处理和测试线 | 按生产线汇总并依据第 7 节分配到合格产出 | 计量表或发票；运行日志；生产线核对 |
| `cp_product_packaging_and_release` | `finishing_and_release` | 产品放行与包装 | 包装清单、材料发料、发运和重复使用退回记录 | 包装材料；发料质量与数量；退回重复使用件；发运批次；合格产品质量 | 实测发料与发运核对 | kg；item(s) | 每次发运；按月核对 | 与合格产出相同期间 | 每个发运场址 | 包装净发料量除以合格产品净重 | 包装规范；称量记录；重复使用包装台账 |
| `cp_wastewater_and_effluent` | `hole_and_surface_preparation`; `conductor_formation`; `finishing_and_release`; `wastewater_and_waste_management` | 废水、槽液转移、处理与出水 | 流量计、批次处置、实验室分析、处理日志和排放记录 | 来源生产线；水流 id；体积；pH；组分浓度；处理步骤；污泥转移；排放区室 | 计量流量与有代表性的认可或合格实验室分析 | m3；kg 组分；浓度特定单位 | 可行时连续计量；取样频率足以反映许可与过程变化 | 与合格产出相同期间 | 每个纳入场址和接收处理系统 | 由匹配流量与浓度计算负荷；保留分类水流；核对处理投入、出水、污泥、回收和库存 | 取样计划；样品交接链；实验室 QA；计量校准；处理核对 |
| `cp_waste_and_recovery` | 所有过程 | 固体、液体、危险及回收残余物 | 容器称量、废物联单、回收方凭证、污泥分析和内部转移记录 | 来源；材料；危险分类；毛重与皮重；含水率或固含量；去向；回收产出；证明 | 称量外运与经核实去向记录 | kg；item(s) 并配套质量 | 每次转移；按月核对 | 与合格产出相同期间 | 每个纳入场址与承包商 | 按组成和去向汇总净质量；区分废物转移与合格回收产品 | 校准秤；联单；分析；回收或处理凭证 |
| `cp_air_emissions` | 所有生产过程 | 控制后的大气排放 | 烟道测试、连续监测、物料平衡、运行小时与许可计算 | 来源；物质；流量；浓度；控制效率；运行小时；方法 | 优先测量；否则采用以前景活动数据为基础的有记录方法 | kg 物质；浓度特定单位 | 按法规要求且具有过程代表性的频率 | 与合格产出相同期间 | 每个物质性排放源 | 计算控制后排放质量，并按因果操作分配 | 测试报告；监测 QA；方法引用；控制设备运行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output` | 合格产品 | 汇总最终测试与检验后合格成品印制电路净重，排除包装、附连板、工艺边和不合格品。 | 批次放行与校准称量记录 | kg 合格产品净重 |  |
| `calc_material_consumption` | 每种外购材料 | 期初库存 + 采购 + 内部接收 - 期末库存 - 有记录退回；按追踪批次或第 7 节分配规则归属。 | 库存、采购、发料、退料和批次记录 | 每 kg 合格产品的 kg 或 m2 材料 |  |
| `calc_chemical_consumption` | 每种过程配方或组分 | 核对期初槽液与库存、配槽、补加、内部回收、倒槽、期末库存、转移和处置；用有记录浓度将溶液换算为组分质量。 | 槽液、加药、库存和分析记录 | 每 kg 合格产品的 kg 配方和 kg 组分 | `us-epa-pwb-surface-finishes` |
| `calc_makeup_water` | 用水 | 各水源供应的补充水；循环水单独报告，不得将内部循环计入净取水。 | 水源计量、生产线计量、槽体和循环记录 | 每 kg 合格产品的 m3 补充水 | `ifc-electronics-ehs-2007` |
| `calc_energy` | 每种载能体 | 汇总纳入操作的计量载能体用量，扣除有记录无关用量，并应用第 7 节分配驱动量。 | 计量表、发票、运行时间和生产记录 | 每 kg 合格产品的 kWh、MJ 或载能体单位 |  |
| `calc_stage_yield` | 每个生产阶段 | 在一致的质量、面积或件数基础上以合格产出量除以投入量；保留返工与不合格处置。 | 批次路线、转移和不合格记录 | 所声明路线各阶段良率与损失 |  |
| `calc_wastewater_load` | 每种废水组分 | 匹配的排放或转移体积乘以有代表性的实测浓度；先按水流和报告期汇总再归一化。 | 流量与实验室记录 | 每 kg 合格产品的 kg 组分 | `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `calc_material_balance` | 产品、金属与处理系统 | 对每个选定平衡范围：投入 + 期初库存 = 合格产品 + 回收 + 废物 + 排放 + 期末库存；报告绝对与相对未解释差异。 | 材料、产品、库存、废物、回收、废水和排放记录 | 按材料的核对与未解释平衡差异 | `us-epa-pwb-surface-finishes` |
| `calc_normalization` | 所有清单行 | 将报告期分配后数量除以 `calc_reference_output` 的合格产品净重。 | 分配后数量；合格产品净重 | 每 1 kg 验收合格成品印制电路的清单数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 产品与参考流 | 对每个代表产品系列保留图纸版本、结构、叠层、基材、层数、导体与互连规范、表面处理、验收等级和净重约定。 | 已放行规范、工艺流转单、BOM 和批次追溯 |
| `dq_technological` | 过程路线 | 数据应代表所声明的加成法、半加成法、减成法或混合路线及实际孔加工、电镀、蚀刻、掩膜、表面处理、测试与控制技术。 | 过程图、设备清单、槽液清单和生产记录 |
| `dq_temporal` | 前景活动数据 | 连续生产时至少使用连续 12 个有代表性月份；批次或新产品生产应覆盖完整批次并披露局限。 | 带日期记录与覆盖说明 |
| `dq_geographical` | 场址与上游数据 | 识别每个生产与外包场址，并尽可能使电力、水、运输、处理和材料数据集与所代表地域匹配。 | 场址清单、供应商与承包商记录、数据集元数据 |
| `dq_measurement` | 质量、水、能源、浓度与排放记录 | 使用校准或经核实仪器，并保留取样、检出限、换算因子和实验室 QA 信息。 | 校准证书、取样计划、实验室 QA、计量核对 |
| `dq_completeness` | 清单 | 覆盖所有必需过程阶段及全部已知材料、化学品、能源、水、运输、废物、回收和排放流；未解决项应披露，不得静默省略。 | 完整性清单及材料、水和金属平衡 |
| `dq_allocation` | 共用操作 | 记录每项共用操作或混合处理系统的因果分配驱动量、覆盖范围、分子、分母和敏感性。 | 分配工作簿与敏感性记录 |
| `dq_upstream_proxies` | 关联数据集 | 对每个关联上游或处理数据集记录提供方、地域、技术、时间、版本、代表性和代理理由。 | 数据集登记表与代理日志 |
| `dq_outsourced_operations` | 外包制造或处理 | 对物质性外包阶段取得一次活动记录或供应商特定数据集；否则披露代理与不确定性。 | 供应商数据、处理凭证、审计或有记录代理 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 除非产品为未装配印制电路且声明了必需结构、材料、层数、路线、表面处理、质量、地域、期间与边界限定信息，否则失败；拒绝以 PCBA、元器件、仅层压板、设备和废板替代。 | `ifc-electronics-ehs-2007`; `us-epa-pwb-surface-finishes` |
| `validate_reference_flow` | 定量参考 | 要求恰好 1 kg 验收合格净产出，使用 Printed circuits `b230e7cd-7afd-4398-84bd-71beab1f6626`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg；包装与生产残余物应分开。 |  |
| `validate_route_boundary` | 过程图与边界 | 要求 `boundary_required_manufacturing` 中每项适用操作、对未使用路线步骤的明确不适用声明，以及对 PCBA 和下游设备阶段的单独排除。 | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `validate_intermediate_links` | 前景阶段转移 | 要求准备后、调理后和图形化拼板在相邻前景阶段之间的转移核对一致，且不重复上游负荷。 |  |
| `validate_material_and_yield` | 物料平衡与产出 | 要求合格产品质量、阶段良率、材料投入、不合格品、残余物、回收及未解释物料平衡差异采用同一报告期和已声明归一化基准。 | `us-epa-pwb-surface-finishes` |
| `validate_chemicals_and_metals` | 湿法过程清单 | 要求每条适用成像、电镀、蚀刻和表面处理线均提供配方、浓度、配槽、补加、倒槽或处置、金属并入、回收和处理记录。 | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes` |
| `validate_water_and_wastewater` | 水与出水 | 要求按水源区分补充水、披露内部循环、区分接触与非接触水、提供废水体积、相关组分负荷、处理路线、出水与污泥核对。 | `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `validate_energy` | 能源与公用工程 | 要求按载能体区分电力、热力、燃料与物质性公用工程记录，并为共用系统提供有记录分配驱动量。 | `ifc-electronics-ehs-2007` |
| `validate_waste_recovery_emissions` | 残余物与排放 | 要求按组成和去向记录废物、核实回收产出、污泥与废槽液，并在适用时按物质与环境区室记录对空气、水和土壤的排放。 | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `validate_allocation` | 多产品与共用操作 | 要求在可行时避免分配、对每项共用操作采用因果驱动量、把正常不合格负荷计入合格产出，并且不得对同一回收数量同时使用分配与替代信用。 | `iso-14044-2006` |
| `validate_data_quality` | 数据包 | 要求采集协议覆盖、时间与场址覆盖、校准与实验室证据、上游数据集与代理披露、分配记录及未解决完整性事项清单。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按 1 kg 验收合格未装配印制电路净重归一化的产品特定前景印制电路制造数据集 |
| downstream_use | `secondary_dataset`；`background_dataset`；作为 PCB 装联、电子元器件、设备或其他产品下游 `process` 或 `lifecyclemodel` 记录的投入 |
| allowed_use | 当结构、路线、地域、时间、质量和边界与预期用途匹配时，用于产品足迹、LCA、供应链清单、生态设计、采购和热点分析 |
| excluded_use | 不得作为 PCBA、已安装元器件、半导体制造、无视结构与路线的所有印制电路、废物处理的通用代表；当参考流限定信息、边界和数据质量不等价时不得用于比较性论断 |
| required_metadata | 规范 PCR id 与版本；产品图纸系列；刚性、柔性或刚挠结合结构；基材与树脂体系；叠层与层数；厚度；铜重与导体密度；互连技术；表面处理；阻焊；卤素与阻燃声明；验收等级；场址与地域；报告期；拼板利用率与良率；路线；纳入过程；分配；关联数据集；净重约定 |
| required_quality_disclosure | 一次数据占比；时间与场址覆盖；校准与实验室 QA；阶段良率与物料平衡闭合；水与废水核对；化学品与槽液覆盖；大气排放方法；废物与回收去向；分配驱动量；外包阶段覆盖；代理与缺失流清单；不确定性局限 |
| update_trigger | 结构、基材、叠层、层数、导体密度、孔技术、加成或减成路线、电镀或蚀刻化学、表面处理、阻焊、场址、电力或供水、废水或废气控制、拼板利用率、良率、分配、供应商数据集或报告期发生物质性变化；或引用的天工身份被纠正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `us-epa-pcb-p2-1990` | 官方指南（`official_guidance`） | U.S. Environmental Protection Agency, *Guides to Pollution Prevention: The Printed Circuit Board Manufacturing Industry*, EPA/625/7-90/007, June 1990, https://archive.epa.gov/sectors/web/pdf/01050.pdf（检索于 2026-08-09） | 印制电路过程分解；原材料；清洗、表面准备、化学镀、成像、电镀与蚀刻；废物、槽液、漂洗、大气排放与回收清单覆盖 |
| `us-epa-pwb-surface-finishes` | 官方指南（`official_guidance`） | U.S. Environmental Protection Agency Design for the Environment, *Printed Wiring Board Surface Finishes: Cleaner Technologies Substitutes Assessment, Volume 1*, https://www.epa.gov/sites/default/files/2013-12/documents/pwb_surface_finishes_ctsa_vol1_0.pdf（检索于 2026-08-09） | 刚性、柔性与刚挠结合范围；层类型；多层生产顺序；表面处理替代方案；过程物料平衡；水、废水、废槽液、污泥、固体废物与回收核算 |
| `ifc-electronics-ehs-2007` | 官方指南（`official_guidance`） | International Finance Corporation / World Bank Group, *Environmental, Health, and Safety Guidelines for Semiconductors & Other Electronics Manufacturing*, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-semiconductors-electronic-ehs-guidelines-en.pdf（检索于 2026-08-09） | PCB 与 PCBA 边界区分；加成、半加成与减成路线；板准备、成像、电镀、表面处理与测试；危险材料、废物、大气排放、能源、废水分类、处理与回收 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*，含已发布修订，https://www.iso.org/standard/38498.html（检索于 2026-08-09） | 目标与范围、生命周期清单、分配、报告、评审、完整性与数据质量框架 |
