---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43143
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 燃气轮机零件（涡轮喷气发动机和涡轮螺旋桨发动机除外）

## 1. 范围与适用性

本 PCR 适用于专用于或主要用于燃气轮机（涡轮喷气发动机和涡轮螺旋桨发动机除外）的独立成品零件，包括工业、船舶、车辆和发电用燃气轮机零件。产品边界为经适用的铸造、锻造、机加工、热处理、清洗或涂层工序后，在制造场地门口完成质量验收且尚未进行运输包装的新零件。

完整燃气轮机、涡轮喷气发动机、涡轮螺旋桨发动机及其零件、维修或大修服务，以及按自身用途分类的通用轴承、标准紧固件、阀门、电气控制装置和通用传动轴不在范围内。运输包装、安装、使用、维护、再制造和报废阶段亦不在范围内。数据集必须申明具体零件或零件族、图样或技术规范版本、材料牌号、制造路线、涂层状态和验收状态。

CPC 条目仅用于分类参照；规范产品边界以本节的工程语义为准。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43143 |
| classification_refs | CPC 3.0：43156，子类 43143 商品的零件 |
| covered_products | 专用于或主要用于非涡轮喷气、非涡轮螺旋桨燃气轮机的独立成品零件，例如经检验合格的叶片、导向叶片、燃烧室零件、机匣、护环、转子、定子和专用结构件 |
| excluded_products | 完整燃气轮机；涡轮喷气和涡轮螺旋桨发动机及其零件；反作用式发动机；自行分类的通用件；维修服务；运输包装 |
| representative_product | 采用成形、机加工、热处理、可选表面工程和最终检验制造的一个镍基高温合金或不锈钢燃气轮机零件 |
| production_route | 外购或内部制造的铸锻坯料准备、精密机加工、热处理、可选清洗或热障涂层及最终检验的路线特定组合 |
| market_state | 制造场地门口、运输包装和安装之前的全新、加工完成并质量验收合格的零件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在非涡轮喷气、非涡轮螺旋桨燃气轮机中执行申明机械、热端、包容、支承或导流功能的成品零件 |
| How much | 1 kg 验收合格成品零件净质量 |
| How well | 符合申明的图样或规范版本、合金牌号、热处理状态、涂层状态、尺寸公差、无损检测等级和验收准则 |
| How long or cycle | 一个完整制造和验收周期，不代表服役寿命等效关系 |
| reference_flow_link | 制造场地门口 1 kg 验收合格燃气轮机成品零件，不含运输包装 |

| 字段 | 值 |
| --- | --- |
| 参考量 | 1 kg |
| 参考产品流 | 燃气轮机成品零件（涡轮喷气发动机和涡轮螺旋桨发动机零件除外） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件名称和功能；图样或规范版本；材料牌号和产品状态；铸造、锻造、增材或外购坯料路线；热处理状态；涂层类型和状态；验收净质量；检验与验收等级；制造场地和地域；基准年；再生含量声明；处理和回收去向；运输包装排除项 |

参考产品的准确 UUID 仍在清单行 `output_finished_gas_turbine_part` 下标记为未解决。构建前景数据包时，必须在数据集元数据、过程说明、参考流注释、产品描述或等效字段中申明全部必需限定信息，否则参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所有纳入制造工序完成后测量验收合格零件净质量，排除可拆卸运输防护和运输包装。 |
| `material_mass_basis` | 金属、化学品、涂层、切屑、废切削液和废槽液 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用称量值或库存平衡质量，并申明含水率、溶液浓度、残留切削液和涂层粉末回收约定。 |
| `electricity_energy_basis` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电能，并按 1 kWh = 3.6 MJ 换算；不得把电网供应链排放重复作为直接基本流。 |
| `gas_volume_basis` | 气态天然气和工业氧气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 申明压力、温度、干湿基、组成和仪表位置；只有在记录参考条件和因子后方可换算质量或能量。 |
| `water_mass_basis` | 工艺用水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用计量质量，或以记录的密度和温度将体积换算为质量，并区分补充水与内部循环水。 |
| `metal_balance_check` | 金属坯料、合格产品和分类收集的金属切屑 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对期初库存、入库、合格产出、切屑、不合格品、转移和期末库存进行平衡。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格合金坯料或合格近净成形毛坯进入报告制造边界，并识别其牌号、形态、质量、供应商和上游数据集。 |
| starting_condition_role | 门到门前景起始条件；所有外购材料、能源载体和外部加工毛坯均连接摇篮到大门上游数据集。 |
| product_classification_scope | 专用于或主要用于非涡轮喷气、非涡轮螺旋桨燃气轮机的独立零件；CPC 3.0 43156 仅为映射语境。 |
| recursive_input_rule | 已属于本 PCR 类别的外购零件作为一个供应商产品输入及其上游数据集记录，不在接收过程中递归展开。 |
| upstream_dataset_requirement | 每项外购坯料、化学品、气体、电力供应和场外处理使用地域、技术、时间和产品状态具有代表性的上游数据集。 |
| disclosure | 申明成形、热处理、机加工、表面工程、检验和废物处理是在场内、受控分包、由供应商数据表示或排除，并披露截断和包装排除。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_start | 从合格坯料接收开始，纳入在场地门口获得验收合格成品零件所需的全部受控制造工序。 | `eu-jrc-sf-bref-2024`; `eu-pef-recommendation-2021` |
| `boundary_rule_2` | external_operations | 为达到申明市场状态所必需的分包成形、热处理、机加工、清洗、涂层和检验，须以供应商特定活动数据或代表性上游数据集纳入。 | `eu-pef-recommendation-2021` |
| `boundary_rule_3` | direct_emissions | 仅将前景燃烧、处理或释放点的排放报告为直接基本流，不重复报告外购电力或上游材料已包含的排放。 | `eu-pef-recommendation-2021`; `eu-jrc-stm-bref-2006` |
| `boundary_rule_4` | excluded_stages | 本制造场地门口参考流排除运输包装、配送、安装、燃气轮机运行、维护、维修、再制造和报废。 | `eu-pef-recommendation-2021` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| primary_shaping_heat_treatment | 一次成形与热处理 | conditional | 当铸造、锻造、热成形或热处理位于报告边界内时纳入；否则用上游数据表示外购毛坯。 | 前景成形与热加工 | 每 kg 验收合格成品零件所加工的合格坯料 kg |
| precision_machining | 精密机加工与精整 | required | 始终纳入报告制造商控制的全部机加工、磨削、去毛刺和零件清洗。 | 前景尺寸加工与精整 | 验收合格成品零件 kg |
| surface_engineering | 表面准备与热障涂层 | conditional | 纳入实际实施的清洗、化学处理、喷砂准备、粘结层或陶瓷层工序；仅当合格零件无此处理时省略。 | 前景表面功能形成 | 处理表面积 m2 和验收合格成品零件 kg |
| inspection_release | 最终检验与放行 | required | 始终纳入最终尺寸和无损检验、验收与产品放行。 | 前景质量放行 | 验收合格成品零件 kg |

### 过程：一次成形与热处理（`primary_shaping_heat_treatment`）

#### 输入

##### 产品流

###### 镍基高温合金坯料（`input_nickel_superalloy_stock`）

记录进入前景边界的合格镍基高温合金锭、钢坯、锻造坯、铸造炉料或外购近净成形毛坯，并保留准确牌号和供货形态。

- 选定流：镍基高温合金坯料
- 流属性/单位：质量 / kg
- 数量规则：称量入库量，并按期初库存、期末库存和转移量进行调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-sf-bref-2024`

###### 不锈钢坯料（`input_stainless_steel_stock`）

仅对申明不锈钢路线记录合格坯料或近净成形毛坯，并保留牌号和供货形态。

- 选定流：不锈钢坯料或棒材
- 流属性/单位：质量 / kg
- 数量规则：称量入库量，并按期初库存、期末库存和转移量进行调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-sf-bref-2024`

###### 成形与热处理电力（`input_primary_electricity`）

记录所纳入成形和热处理单元中炉窑、压力机、搬运设备和辅助设备所用外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：对申明零件或批次分配的单元计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 热工序用天然气（`input_natural_gas`）

记录纳入炉窑或加热器燃烧的气态天然气；仅当申明路线确实不用天然气时省略。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：在申明参考条件下计量的交付体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-sf-bref-2024`

###### 富氧燃烧或熔炼用工业氧气（`input_process_oxygen`）

仅当纳入的富氧燃烧加热、切割或熔炼步骤采购并消耗工业氧气时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：在申明参考条件下计量或供应商开票的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-sf-bref-2024`

#### 输出

##### 基本流

###### 场内天然气燃烧的化石二氧化碳（`output_fossil_co2`）

仅报告纳入天然气燃烧产生的直接化石二氧化碳，上游供应链排放保留在天然气数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：烟气实测质量，或依据采集的天然气组成和氧化数据计算燃料碳平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

###### 场内热工设备氮氧化物（`output_nitrogen_oxides`）

按申明实测物种基准报告纳入炉窑和加热器排入空气的氮氧化物，不得以氧化亚氮替代。

- 选定流：排入未指定空气环境的氮氧化物
- 流属性/单位：质量 / kg
- 数量规则：烟气测量或经场地批准的计算，并关联运行时间、燃料用量、控制状态和申明的氮氧化物物种基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_combustion_emissions`
- 来源：

### 过程：精密机加工与精整（`precision_machining`）

#### 输入

##### 产品流

###### 机加工电力（`input_machining_electricity`）

记录机加工、磨削、切削液循环、抽排、清洗和局部辅助设备所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：按申明零件或批次分配的机床或单元计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`us-epa-mpm-effluent-guidelines-2003`

###### 机加工和零件清洗用工艺水（`input_machining_water`）

记录加入切削液系统或用于清洗零件的外购或取用工艺水，内部循环水不得重复跨边界计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量的补充水与清洗水质量，扣除单独计量的内部循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`us-epa-mpm-effluent-guidelines-2003`

###### 水混溶性金属加工液浓缩液（`input_water_miscible_mwf`）

记录加入机加工切削液系统的具体配方浓缩液，并保留产品名、供应商、配方类别和浓度。

- 选定流：水混溶性金属加工液浓缩液
- 流属性/单位：质量 / kg
- 数量规则：采购添加量加期初库存，减期末库存和有记录的转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`us-epa-mpm-effluent-guidelines-2003`

#### 输出

##### 废物流

###### 镍基高温合金机加工切屑（`output_nickel_superalloy_chips`）

对适用镍基高温合金路线单独记录切屑，并保留合金牌号、切削液污染和回收去向。

- 选定流：镍基高温合金机加工切屑
- 流属性/单位：质量 / kg
- 数量规则：分类收集切屑的称量质量，并在影响显著时校正残留切削液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-mpm-effluent-guidelines-2003`

###### 钢机加工切屑（`output_steel_chips`）

对不锈钢路线单独记录钢屑，并保留钢材牌号、切削液污染、分类状态和回收去向。

- 选定流：钢屑 `bcb2604e-4735-4b7d-88ab-03de8ff5930b`
- 流属性/单位：质量 / kg
- 数量规则：分类收集切屑的称量质量，并在影响显著时校正残留切削液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-mpm-effluent-guidelines-2003`

###### 废机加工切削液（`output_spent_coolant`）

水混溶性切削液离开前景边界送处理或处置时记录，并保留水分、油污染和去向。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：质量 / kg
- 数量规则：离场废切削液的运输称量质量或储罐液位库存平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-mpm-effluent-guidelines-2003`

### 过程：表面准备与热障涂层（`surface_engineering`）

#### 输入

##### 产品流

###### 表面工程电力（`input_surface_electricity`）

记录纳入表面路线中清洗、泵送、抽排、干燥、喷砂准备和等离子喷涂设备所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：按验收合格涂层产出分配的设备或单元计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-stm-bref-2006`; `nasa-tp-1425-1979`

###### 水系表面准备工艺水（`input_surface_water`）

记录进入纳入水洗或化学处理阶段的补充水和漂洗水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：进入系统的工艺水计量质量，扣除内部循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 水系清洗用氢氧化钠（`input_sodium_hydroxide`）

仅当纳入碱性清洗槽添加氢氧化钠时按供货状态记录，并保留溶液浓度和活性质量约定。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：投加到槽液的供应商物料质量，同时申明供货质量和活性质量基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 氧化钇稳定氧化锆涂层粉末（`input_ysz_powder`）

仅当施加陶瓷热障涂层时记录申明粉末，并保留氧化钇含量、粉末牌号、送粉质量、回收粉末和涂层规范。

- 选定流：氧化钇稳定氧化锆陶瓷粉末
- 流属性/单位：质量 / kg
- 数量规则：涂层单元领用粉末减去称量后退回库存的可重复使用回收粉末
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_route_records`
- 来源：`nasa-tp-1425-1979`

#### 输出

##### 废物流

###### 废氢氧化钠清洗液（`output_spent_caustic_solution`）

将离场的废氢氧化钠清洗液作为独立废物记录，并保留槽液组成、溶解金属、稀释程度和处理去向。

- 选定流：废氢氧化钠清洗液
- 流属性/单位：质量 / kg
- 数量规则：转移至处理或处置的称量质量或储罐液位平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-stm-bref-2006`

### 过程：最终检验与放行（`inspection_release`）

#### 输入

##### 产品流

###### 最终检验电力（`input_inspection_electricity`）

记录纳入尺寸检验、无损检测、清洁和放行设备所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：按验收合格产出分配的检验单元计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

#### 输出

##### 产品流

###### 验收合格燃气轮机成品零件（`output_finished_gas_turbine_part`）

仅记录通过申明最终验收准则的零件；返工和不合格品留在前景平衡中，直至合格或通过特定流离开。

- 选定流：燃气轮机成品零件（涡轮喷气发动机和涡轮螺旋桨发动机零件除外）
- 流属性/单位：质量 / kg
- 数量规则：将验收合格净质量归一化为恰好 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_release`
- 来源：`un-cpc-3-0-structure-2025`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | foreground_processes | 在技术可行时，将仪表、物料领用、设备日志、槽液、批次和废物记录细分到具体零件或零件族，以避免分配。 | `eu-pef-recommendation-2021` |
| `allocation_rule_2` | shared_resources | 无法细分时使用与负荷有因果关系且有记录的物理驱动量，例如设备时间、实测能量、处理表面积、槽液装载量或加工质量，不得默认按收入分配。 | `eu-pef-recommendation-2021` |
| `allocation_rule_3` | rejects_and_rework | 将返工能耗、材料和损失归属到产生不合格品的生产，直至其成为合格产出或通过申明流离开。 | `eu-jrc-stm-bref-2006` |
| `allocation_rule_4` | metal_scrap | 在前景边界将分类收集的切屑和废料报告为废物输出，并披露收入、回收路线、再生含量核算和下游抵扣方法。 | `eu-pef-recommendation-2021` |
| `allocation_rule_5` | sensitivity | 报告每个共享过程的分配驱动量和系数；当分配会改变结果或比较声明时，检验一个实质合理的替代方案。 | `eu-pef-recommendation-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | primary_shaping_heat_treatment | 合格坯料和工艺气体输入 | 收货、领用、库存和供应商记录 | 物料标识；牌号；形态；质量或体积；库存；转移；供应商；批次；参考条件 | 校准秤、储罐仪表、气体流量计和 ERP 核对 | kg 或 m3 | 每次收货和领用；每月核对 | 代表性生产期，通常至少连续 12 个月或完整批期 | 所有受控场地和纳入分包商 | 收货加期初库存减期末库存和转移量，并分配至合格批次 | 校准记录、材质证明、发票、库存核对 |
| `cp_energy_records` | all listed processes | 电力和天然气 | 仪表和发票记录 | 仪表标识；读数；单位；时间；工艺单元；运行时间；分配驱动量；参考条件 | 优先专用仪表，否则核对分表和发票 | MJ、kWh 或 m3 | 连续或每个结算期 | 与产品产出相同期间 | 所有纳入前景工序 | 换算单位、扣除排除负荷、按物理驱动量分配并归一化 | 仪表校准、发票、负荷图、核对记录 |
| `cp_combustion_emissions` | primary_shaping_heat_treatment | 直接化石二氧化碳和氮氧化物 | 烟气测试、连续监测、燃料和控制记录 | 物种基准；浓度；流量；运行时间；燃料；碳组成；氧化因子；控制状态 | 校准连续监测或烟气测试；必要时采用燃料碳计算 | kg | 连续、批期测试或每计算期 | 覆盖产品期间全部燃烧小时 | 每台纳入燃烧设备 | 积分实测质量或由燃料数据计算，按热需求分配并归一化 | 校准、实验室报告、计算表、控制日志 |
| `cp_water_chemical_records` | precision_machining; surface_engineering | 水、切削液和氢氧化钠 | 仪表、采购、批次和槽液记录 | 物料；浓度；总质量；活性质量；水表；槽液添加；库存；转移 | 校准仪表、秤、ERP 领用和槽液日志 | kg | 每次添加和每月平衡 | 与处理产出相同期间 | 每条纳入生产线 | 外部净输入，不含内部循环，并分配至合格产出 | 材质证明、校准、采购记录、槽液日志 |
| `cp_waste_records` | precision_machining; surface_engineering | 切屑、废切削液和废碱液 | 容器秤、联单、储罐和运输记录 | 废物标识；组成；牌号；污染；干湿基；皮重；去向；处理；库存 | 校准秤或储罐平衡并与转移文件核对 | kg | 每容器或运输批；每月核对 | 与产品产出相同期间 | 所有纳入废物点 | 离开边界净量加储存变化，并分配至产生过程 | 秤校准、废物联单、回收商收据、实验室分析 |
| `cp_surface_route_records` | surface_engineering | 涂层材料输入 | 粉末领用、回收和涂层随行记录 | 粉末；氧化钇含量；批次；领用和回收质量；面积；涂层规范；验收状态 | 校准秤和工艺随行单 | kg 和 m2 | 每涂层批次 | 完整申明涂层批期 | 每个纳入涂层单元和分包商 | 领用减退回库存的可用粉末，并分配至合格产出 | 材质证明、秤校准、随行单、检验结果 |
| `cp_product_release` | inspection_release | 验收合格成品 | 随行单、秤、检验和放行记录 | 零件；图样；材料；路线；涂层；净质量；状态；返工；日期 | 校准秤和受控验收记录 | kg | 每个零件或合格批次 | 与全部输入和废物相同期间 | 所有纳入场地合格产出 | 仅汇总合格净质量，将清单归一化至 1 kg | 校准、检验报告、不合格和放行记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | inventory_normalization | 归一化量 = 分配后期间量 / 验收合格产品净质量 | 分配后行数量；`cp_product_release` 合格净质量 | 每 1 kg 合格成品的行数量 | `eu-pef-recommendation-2021` |
| `calc_rule_2` | electricity_conversion | MJ = kWh × 3.6 | 计量 kWh | MJ 电能 |  |
| `calc_rule_3` | metal_yield | 差额 = 期初库存 + 收货 - 期末库存 - 转移 - 合格产出 - 分类切屑 - 不合格品 | `cp_material_balance`; `cp_waste_records`; `cp_product_release` | 未核对金属质量和收率披露 |  |
| `calc_rule_4` | fossil_co2 | 直接化石 CO2 = 实测烟气质量，或燃料体积 × 参考条件换算 × 碳分数 × 氧化分数 × 44/12 | `cp_combustion_emissions` 字段 | kg 化石 CO2 |  |
| `calc_rule_5` | shared_process_allocation | 分配行数量 = 共享实测量 × 申明因果物理份额 | 共享记录；驱动量总量；目标驱动量 | 分配至零件的前景量 | `eu-pef-recommendation-2021` |
| `calc_rule_6` | coating_powder | 涂层粉末净输入 = 领用粉末 - 退回库存的可重复使用粉末 | `cp_surface_route_records` | 每单位合格产出的 YSZ 粉末 kg | `nasa-tp-1425-1979` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料输入 | 保留零件标识、图样、功能、材料牌号、供货状态、热处理、涂层和验收等级；不同零件不得无模型汇总。 | 随行单、物料清单、材质证明、放行记录 |
| `dq_temporal` | 前景记录 | 输入、输出、排放和合格质量采用共同代表期间，并解释停产、批期、异常生产和不完整月份。 | 期间核对与生产日历 |
| `dq_metering` | 能源、气体、水和质量 | 使用校准仪表或经核对记录，并记录仪表边界、单位换算、参考条件、估算比例和分配驱动量。 | 校准证书、发票、仪表图、计算表 |
| `dq_completeness` | 过程清单 | 核算每个纳入过程、外购毛坯、主要材料、能源、直接排放、切屑、废液和废槽液，并记录零值与不适用。 | 签署的过程图审查和完整性核对 |
| `dq_mass_balance` | 金属和涂层材料 | 调查无法解释的平衡差异，并保留修正、不合格批次、返工、内部回收和库存变化。 | 平衡表和纠正措施记录 |
| `dq_representativeness` | 上游数据集 | 记录每个上游数据集的地域、技术、时间和产品状态代表性，并披露代理数据。 | 数据集元数据和代表性评估 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | 确认输出为非涡轮喷气、非涡轮螺旋桨燃气轮机的独立零件，具备必需限定信息并采用 1 kg 合格净质量基准。 | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | process_coverage | 确认每个必需过程均有表示，每个条件过程均有证据支持的纳入或不适用判定。 | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006` |
| `validation_rule_3` | inventory_atomicity | 确认每个清单行为一个具体交换，不合并燃料、公用工程、化学品、废物、包装或排放组。 |  |
| `validation_rule_4` | uuid_identity | 确认每个已填 UUID 为公开状态 100，并在名称、类型、分类、属性和单位上语义匹配；未解决项须显式。 |  |
| `validation_rule_5` | evidence_traceability | 确认每个采集或计算行连接到已实施协议，外部来源仅支持所述方法或边界作用。 | `eu-pef-recommendation-2021` |
| `validation_rule_6` | energy_emissions | 核对天然气与直接化石 CO2 和氮氧化物，并确认未重复计算外购电力上游排放。 |  |
| `validation_rule_7` | material_balance | 核对金属坯料、合格产出、切屑、不合格品、转移和库存变化，并调查所有无法解释的差额。 | `us-epa-mpm-effluent-guidelines-2003` |
| `validation_rule_8` | allocation_and_disclosure | 确认共享过程使用因果物理驱动量，并披露分包、回收、抵扣、截断和运输包装排除。 | `eu-pef-recommendation-2021` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 已识别燃气轮机成品零件的制造场地门口前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当零件、功能、材料、路线、涂层、地域、时间、验收、分配和包装排除兼容时，用于产品特定供应链建模 |
| excluded_use | 完整燃气轮机；涡轮喷气或涡轮螺旋桨发动机及其零件；维修；使用阶段；未限定类别平均；跨实质不同产品的比较声明 |
| required_metadata | PCR 和版本；零件和图样；功能；材料；路线和分包；热处理；涂层；净质量；场地；基准期；仪表和分配；上游数据；排放；废物；截断；未解决 UUID |
| required_quality_disclosure | 一手数据覆盖；估算比例；校准和核对；金属平衡；上游数据代表性；分配敏感性；不合格和返工；不确定性；范围证据和 UUID 缺口 |
| update_trigger | 图样、材料、毛坯状态、路线、涂层、检验、供应商、场地、能源、排放控制、分配或前景数据的实质变化 |

## 11. 数据来源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《产品总分类 3.0 版》结构与解释性说明，2025。https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf（检索日期：2026-09-05） | CPC 43143/43156 官方标识及涡轮喷气、涡轮螺旋桨排除范围 |
| `eu-jrc-sf-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，《锻造与铸造行业最佳可行技术参考文件》，2024。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry（检索日期：2026-09-05） | 成形、锻造、铸造、机加工、精整和热处理过程分解 |
| `us-epa-mpm-effluent-guidelines-2003` | `official_guidance` | 美国环境保护署，《金属产品与机械点源类别最终排放限值指南与标准制定文件》，2003。https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf（检索日期：2026-09-05） | 机加工液、切屑与废液、用水记录和监测字段 |
| `eu-jrc-stm-bref-2006` | `official_guidance` | 欧盟委员会，《金属与塑料表面处理最佳可行技术参考文件》，2006 年 8 月。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索日期：2026-09-05） | 表面准备、用水、能源、化学品、废水、废物和过程控制 |
| `eu-pef-recommendation-2021` | `standard` | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279，2021 年 12 月 15 日。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期：2026-09-05） | 功能单位、系统边界、分配、数据质量、验证和报告 |
| `nasa-tp-1425-1979` | `literature` | C. H. Liebert、F. S. Stepka，《NASA 陶瓷热障涂层的工业试验》，NASA Technical Paper 1425，1979 年 6 月。https://ntrs.nasa.gov/api/citations/19790016852/downloads/19790016852.pdf?attachment=true（检索日期：2026-09-05） | 燃气轮机零件用氧化钇稳定氧化锆和 NiCrAlY 热障涂层路线 |
