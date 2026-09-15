---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.parts-of-the-goods-of-subclasses-42320-and-42330
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类42320和42330所列货物的零件

## 1. 范围与适用性

本PCR适用于蒸汽或其他蒸汽发生锅炉、过热水锅炉、锅炉辅助设备或蒸汽及其他蒸汽动力机组用冷凝器专用成品零件的工厂大门生产。适用对象包括作为完整设备之外的商品单独供应的可更换零件和整体制造的零部件总成。

本PCR不包括完整锅炉、完整辅助设备、完整冷凝器、核反应堆零件、集中供热锅炉零件，以及未证明专用于上述设备的通用管材、阀门、紧固件和结构件。安装、使用、维护和寿命终止阶段不属于默认前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.parts-of-the-goods-of-subclasses-42320-and-42330 |
| classification_refs | CPC 3.0：42342，精确分类身份（`un-cpc-3-0-structure-2025`） |
| covered_products | CPC 42320或42330所列货物用锅炉承压部件、锅炉辅助设备零件、冷凝器零件和专用制造总成 |
| excluded_products | CPC 42320或42330完整设备；CPC 42341核反应堆零件；集中供热锅炉零件；非专用通用管材、阀门、紧固件、结构型材和安装服务 |
| representative_product | 经检验合格、单独供应的锅炉或蒸汽动力冷凝器成品零件 |
| production_route | 对外购金属坯料进行切割、成形、机加工、焊接和装配；仅在申报零件实际采用时纳入热处理、清洗、涂覆和水压试验 |
| market_state | 制造场址大门处的成品零件；声明涂覆状态、承压功能、材料牌号、尺寸和检验状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供尺寸和功能均适合装入所覆盖锅炉、锅炉辅助设备或蒸汽及其他蒸汽动力冷凝器的成品零件 |
| How much | 1 kg合格成品零件净质量 |
| How well | 符合经采购方批准的图样、材料规范、焊接或连接规范、表面状态要求及检验或试验验收准则 |
| How long or cycle | 在工厂大门放行的一个制造批次；不包含使用寿命声明 |
| reference_flow_link | 参考流为`finished_boiler_condenser_part`的合格成品净输出质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 锅炉或冷凝器成品零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 母设备类型（CPC 42320或42330）；零件名称及图号或零件号；承压功能；主要材料及牌号；净质量；尺寸；涂覆或表面状态；连接路线；热处理状态；水压试验状态；制造场址和地理范围；报告期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少任何限定信息的数据包，其参考流定义均不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品以及按质量归一化的材料、废物和排放行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以合格成品零件净质量为分母。参考产品质量不包括可拆卸运输工装和单独报告的包装。 |
| `gas_volume_basis` | 工业氧气和气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量体积，并声明温度、绝对压力、干湿基以及向供方或仪表基准状态的换算；不得合并不同气体。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始计量基准，按1 kWh = 3.6 MJ换算；声明电压等级、电网地理范围、损耗边界及是否扣减场内发电。 |
| `solution_mass_basis` | 工艺用水和氢氧化钠溶液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录交付或计量质量。氢氧化钠溶液须声明浓度并报告溶液质量；如换算为干基NaOH，应单独计算并披露。 |

## 5. 系统边界

前景边界始于外购金属坯料、焊接耗材、工艺化学品和公用工程跨入制造场址。边界包括场内切割、成形、机加工、焊接或连接、装配、适用的热处理、适用的清洗或表面预处理、水压试验（如实施）、检验、返工和出厂放行。上游生产通过供方或背景数据集连接。默认排除资本设备、厂房建设、员工通勤、下游安装、使用、维护和寿命终止。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址大门接收的外购金属坯料、耗材、工艺化学品和公用工程 |
| starting_condition_role | 前景制造输入边界 |
| product_classification_scope | CPC 42320或CPC 42330设备专用成品零件；分类范围不延伸至完整设备或通用多用途金属制品 |
| recursive_input_rule | 外购未成品或已制造件若自身属于本产品类别，则按其供货状态、质量和上游数据集作为独立的同类别产品输入记录；不得在接收过程中重复构建其上游制造 |
| upstream_dataset_requirement | 每种外购材料、耗材、燃料、电力供应、水供应和同类别输入均需采用地理及技术代表性上游数据集，或明确记录数据缺口 |
| disclosure | 声明起始坯料形态和牌号、外购与场内工序划分、实际路线步骤、涂覆和热处理状态、废品或返工质量、公用工程交付条件以及采用的所有默认边界排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_operations | 纳入所有改变所覆盖零件或使其达到合格放行要求的场内工序，包括经计量的返工和试验。 |  |
| `boundary_rule_2` | purchased_inputs | 为每种外购输入连接上游生产；不得将含再生料金属、回收废钢或同类别未成品零件的负荷替换为零。 |  |
| `boundary_rule_3` | route_exclusions | 只有当路线声明和生产记录证明未使用时，方可省略条件性热处理、表面处理、水压试验、柴油、天然气、氧气、水或氢氧化钠行。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_part_manufacturing` | 一体化制造、处理、试验和出厂放行 | `required` | 始终纳入；路线条件性交换仅在申报零件实际使用时记录 | 前景生产 | 1 kg合格成品零件净质量 |

### 过程：一体化制造、处理、试验和出厂放行（`integrated_part_manufacturing`）

#### 输入

##### 产品流

###### 碳钢板（`carbon_steel_plate`）

碳钢板为申报零件跨入场址边界时记录。材料清单须保存钢板牌号、供货状态、尺寸、再生料声明、供方和产地。

- 选定流：碳钢板
- 流属性/单位：Mass / kg
- 数量规则：依据批次领料和退料记录分配的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 不锈钢板（`stainless_steel_plate`）

仅在零件批准材料规范要求不锈钢时记录。材料清单须保存牌号、供货状态、尺寸、供方和产地。

- 选定流：不锈钢板
- 流属性/单位：Mass / kg
- 数量规则：依据批次领料和退料记录分配的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 铜管材（`copper_tubing`）

仅在冷凝器零件路线消耗铜管时记录。声明合金、状态、尺寸、供方和产地。

- 选定流：铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位：Mass / kg
- 数量规则：依据批次领料和退料记录分配的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 药芯焊丝（`flux_cored_wire`）

经批准焊接工艺采用该耗材时记录。声明焊丝分类、直径、批次、供方和适用焊接工艺。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：生产批次期初库存加接收量，减去期末库存和有记录的退料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_bom`
- 来源：

###### 工业氧气（`industrial_oxygen`）

在切割、钎焊、焊接或其他申报制造工序消耗工业氧气时记录。须限定纯度、供气压力、仪表基准状态、供方和场址地理范围。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：分配至生产批次的计量体积或供方交付体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 电力（`electricity`）

记录为制造、处理、试验、检验和直接归属辅助设备跨入场址边界的外购电能。声明电网结构、电压、地理范围、损耗边界及共用电表分配方法。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至生产批次并换算为MJ的计量外购电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：

###### 气态天然气（`natural_gas`）

仅在场内热处理、干燥或其他申报生产工序消耗气态天然气时记录。必须声明供气组成、基准状态、技术和交付边界。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配至生产批次的计量交付体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 柴油（`diesel_fuel`）

仅在边界内应急发电或出厂验收试验消耗柴油时记录。必须声明牌号、供方、生物源比例、设备和试验使用边界。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次的油罐领用质量或试验日志质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 工艺用水（`process_water`）

仅在清洗、冷却、水压试验或其他申报工序供应并跨越边界消耗或排放时记录工艺用水。声明水源、水质、交付边界和任何密度换算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次的计量或批次记录用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 氢氧化钠（`sodium_hydroxide`）

仅在碱洗或表面处理路线消耗氢氧化钠时记录。声明溶液浓度、交付状态、供方，以及报告的是溶液质量还是干基NaOH质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次的批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

##### 废物流

本PCR不预设废物输入。只有在明确其来源和处理作用后，方可把返回废物作为一个具体废物流另行添加。

##### 基本流

本PCR不预设基本流输入。若场址特定的基本资源输入跨越环境边界，必须作为独立流添加。

#### 输出

##### 产品流

###### 锅炉或冷凝器成品零件（`finished_boiler_condenser_part`）

只记录经检验放行、用于装入CPC 42320或CPC 42330设备的合格成品输出。产品UUID仍未解决，不得以范围更窄的未涂覆锅炉部件子总成流替代。

- 选定流：锅炉或冷凝器成品零件
- 流属性/单位：Mass / kg
- 数量规则：根据经校准的称量记录计算合格成品净输出质量，并归一化为恰好1 kg参考流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_records`
- 来源：

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录离开前景过程并送往回收或处理的分类收集含铁边角料、切屑和钢制废品。声明合金族、污染情况、接收方和去向路线。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：分配至生产批次的经校准容器净质量或外运单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

###### 排放到空气的化石源二氧化碳（`carbon_dioxide_fossil`）

记录边界内天然气或柴油燃烧直接排放到空气的化石源二氧化碳。本行不包括电力上游排放或生物源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟道实测质量，或根据采集燃料用量、有记录的燃料碳含量和氧化基准计算的化石源CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared_operations | 在可行时通过分表计量、批次追踪、设备工时和独立质量记录避免分配。 |  |
| `allocation_rule_2` | unavoidable_shared_burdens | 无法细分时，采用因果关系最具代表性的实测动因分配共用材料和公用工程负荷；仅在没有更合适物理动因时使用产品净质量，并披露选择和敏感性。 |  |
| `allocation_rule_3` | steel_scrap | 将工业后钢废料按实测质量和去向记录为废物输出。除非下游研究明确建模并披露，否则不得在本前景过程中应用避免负荷或替代信用。 |  |
| `allocation_rule_4` | rework_and_rejects | 将内部返工投入和未回收废品归于同批合格输出；单独记录跨越场址边界的废钢或其他输出。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `integrated_part_manufacturing` | 板材、管材、焊丝和清洗化学品输入 | 采购、仓库领料、退料和材料清单记录 | 材料身份；牌号；批次；期初库存；接收；领用；退料；期末库存；质量；供方；产地 | 将批次仓库和生产记录与放行输出批次核对 | kg | 每个生产批次 | 与输出相同报告期 | 申报场址所有边界内生产区域 | 汇总扣除有记录退料后的净领用量；排除分配给其他产品的材料 | 经校准衡器；可追溯材料证书；库存核对；批准材料清单 |
| `cp_utility_records` | `integrated_part_manufacturing` | 电力、天然气、柴油、氧气和工艺用水输入 | 仪表、发票、交付单、油罐领用和试验日志 | 仪表起止读数；交付量；单位；基准状态；设备；运行时间；分配动因 | 读取专用仪表，或将共用仪表和交付记录与批次活动核对 | MJ；m3；kg | 仪表周期及每个批次 | 覆盖生产批次的代表性连续期间 | 申报制造场址 | 扣除经核实的非生产及其他产品用量，再按有记录的因果动因分配剩余共用量 | 仪表校准；发票核对；基准状态记录；分配工作表 |
| `cp_output_records` | `integrated_part_manufacturing` | 合格成品输出 | 放行、称量、图样、材料、检验和试验记录 | 零件号；母设备；净质量；数量；材料；涂覆状态；热处理状态；检验状态；放行日期 | 将经校准称量记录与验收生产批次放行记录关联 | kg | 每个生产批次 | 完整报告期 | 申报制造场址 | 汇总验收净质量；排除废品、尚未放行的返工品、包装和工装 | 衡器校准；检验放行；批准图样；材料追溯；试验验收记录 |
| `cp_waste_records` | `integrated_part_manufacturing` | 工业后钢废料输出 | 废钢容器称量和外运记录 | 废物身份；合金族；毛重和皮重；污染；接收方；去向；日期 | 称量每次外运或每个容器，并按批次收集或有记录的生产分配进行归属 | kg | 每次外运和每个生产批次 | 与输出相同报告期 | 边界内所有生产区域 | 按废物身份和去向汇总外运净质量，不扣除回收信用 | 经校准衡器；皮重记录；外运单；接收方文件 |
| `cp_emission_records` | `integrated_part_manufacturing` | 排放到空气的化石源二氧化碳 | 烟道监测或燃料碳计算记录 | 燃料质量或体积；基准状态；化石碳含量；氧化基准；实测CO2；运行期；设备 | 优先使用经校准烟道数据；否则按采集燃料用量和有记录的场址特定碳及氧化输入计算 | kg | 每次监测事件或报告周期 | 与燃料及输出相同代表期 | 边界内燃烧设备 | 汇总直接化石CO2并按合格输出归一化；电力链排放不计入本行 | 监测仪校准或燃料证书；计算表；燃料记录核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | 材料和耗材行 | 净投入 = 期初库存 + 接收 - 期末库存 - 有记录退料 - 分配至其他产品的数量 | 批次库存和领用记录 | 每kg合格成品的kg投入 |  |
| `calc_electricity_mj` | 电力行 | 在完成有记录的扣除和分配后，电力（MJ）= 外购电力（kWh）× 3.6 | 计量kWh；分配记录；合格输出质量 | 每kg合格成品的MJ |  |
| `calc_gas_volume` | 天然气和氧气行 | 仅在需要时将实测体积换算至声明的基准温度、绝对压力和干湿基；保留原始读数和换算输入 | 仪表体积；温度；压力；干湿基；采用时的压缩因子方法 | 每kg合格成品在声明基准状态下的m3 |  |
| `calc_fossil_co2` | 化石源二氧化碳行 | 使用烟道直接实测化石源CO2，或按采集燃料用量 × 有记录化石碳含量 × 有记录氧化基准 × 44/12计算 | 燃料记录；碳含量；氧化基准；合格输出质量 | 每kg合格成品的kg化石源CO2 |  |
| `calc_reference_output` | 参考产品 | 归一化数量 = 验收成品净质量 / 验收成品净质量 | 放行记录中的验收净质量 | 恰好1 kg参考产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料行 | 保留零件号、母设备类型、图样版本、材料牌号、热处理状态、涂覆状态和检验状态；不得在未披露产量加权组成的情况下汇总存在实质差异的产品。 | 图样、材料证书、工艺流转卡、检验放行、汇总工作表 |
| `dq_temporal` | 所有前景行 | 采用覆盖正常生产和全部报告输出的同一代表期；披露停机、启动、异常返工和不完整仪表周期。 | 生产日历、仪表覆盖日志、异常登记 |
| `dq_completeness` | 所有前景交换 | 核对材料输入、合格输出、返工、废钢、公用工程和直接排放记录；明确记录每个条件性缺失行及实际路线新增的每个具体交换。 | 质量核对、仪表核对、废物外运日志、路线声明 |
| `dq_measurement` | 实测数量 | 使用经校准或核验的计量设备，并保留原始读数、单位、基准状态、换算因子和分配计算。 | 校准证书、原始日志、发票、计算表 |
| `dq_geography_technology` | 上游连接 | 尽可能匹配材料牌号和生产路线、公用工程地理范围及电压或压力、燃料供应状态和废物去向；披露代理数据。 | 供方数据集、合同、技术说明、代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | product_identity | 确认输出是CPC 42320或42330设备专用并单独供应的成品零件，而非完整设备、集中供热锅炉零件、核反应堆零件或通用金属商品。 | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | reference_flow | 确认恰好1 kg合格成品净输出及全部必需限定信息；包装或可拆卸工装质量计入参考数量的数据集不合格。 |  |
| `validation_rule_3` | inventory_completeness | 确认每种实际材料、耗材、公用工程、废物和直接基本交换均由一个原子行表示，且每个条件性缺失行均有路线记录支持。 |  |
| `validation_rule_4` | mass_reconciliation | 核查报告期领用金属和耗材是否与合格输出、在制品、有记录退料、废钢及其他具体输出相平衡；调查并披露残差。 |  |
| `validation_rule_5` | uuid_and_units | 确认每个带UUID的行保留其准确天工流类型、属性、单位组和官方中文显示名；类别参考产品、碳钢板和不锈钢板UUID在精确公共state-100身份核验前保持空白。 |  |
| `validation_rule_6` | direct_emissions | 确认化石源二氧化碳行只含边界内化石燃料直接燃烧排放，且不重复电力链排放或生物源二氧化碳。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经方法学和数据集审查后作为`secondary_dataset`或`background_dataset` |
| downstream_use | 用于锅炉、锅炉辅助设备和冷凝器成品零件的前景过程数据集及下游`process`或`lifecyclemodel`投影 |
| allowed_use | 当申报母设备、零件身份、材料组成、路线、场址、期间和数据质量证据兼容时，用于产品特定工厂大门建模 |
| excluded_use | 完整设备生产；集中供热锅炉或核反应堆零件；通用金属制品；未增加过程的安装、使用、维护或寿命终止；未披露地替代实质不同的合金或路线 |
| required_metadata | PCR id和版本；零件号和图号；母设备类型；净质量；材料牌号及份额；路线步骤；热处理和涂覆状态；检验状态；场址地理范围；报告期；分配方法；上游数据集选择 |
| required_quality_disclosure | 仪表和质量覆盖；校准；材料和输出核对；条件行决定；代理数据集；未解决UUID；排除工序；不确定性和数据缺口 |
| update_trigger | 图样、材料、质量、路线、焊接工艺、涂覆、热处理、供方、公用工程结构、场址、分配方法或报告期发生足以实质改变清单的变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC第3.0版结构》，2025年6月30日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（已核验SHA-256：`5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | CPC 42342官方分类身份及其与CPC 42320、42330和42341的区别 |
