---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-copper
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铜线

## 1. 范围与适用性

本 PCR 用于铜或铜合金杆经拉制并视需要进行中间或最终退火而制得的非绝缘单体线材前景数据包。生产者必须声明铜或铜合金牌号及纯度或成分、标称线径或截面积、线形、单线或绞合前状态、硬态或退火态、表面状态、铜杆来源、拉丝与退火能耗、润滑剂及清洗或酸洗用量、生产良率和内部铜废料回用。

代表产品为工厂门口的无镀层裸线。金属表面处理只有在单独声明并编制清单且产品仍未绝缘时才可作为变体表示。本 PCR 不代表绞线或束线导体、绝缘电线电缆、漆包绕组线、绕组组件、电缆线芯、光伏电缆、充电电缆、下游线束或其他电气成品组件。不得在没有形成文件的代表性评估时，将单一牌号、线径、状态或路线结果外推到整个类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-copper |
| classification_refs | CPC 3.0 `41513`，铜线 |
| covered_products | 铜或铜合金制非绝缘圆形或异形单体线材，包含硬态、中间状态、退火态或软态，处于绞合或装入下游组件之前；金属表面处理仅在明确声明并编制清单时纳入 |
| excluded_products | 铜线杆；绞合、束合、捻合或成缆导体；绝缘或漆包电线电缆；绕组、电缆线芯、线束、母排、光伏电缆、充电电缆及其他下游组件 |
| representative_product | 铜线杆经拉制制得的无镀层裸铜单线；声明状态需要时纳入退火 |
| production_route | 外购或内部转移的铜/铜合金线杆；条件性表面准备；大拉及中拉或细拉；条件性退火；清洁、检验、收线和包装 |
| market_state | 制造工厂门口的盘、卷或轴装裸单线，尚未绞合、绝缘或组装为组件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合规定的非绝缘铜或铜合金单线，具有声明的牌号、尺寸、状态、表面状态和制造路线 |
| How much | 工厂门口 1,000 kg 合格线材净重，不含线盘、线轴和包装质量 |
| How well | 符合声明产品规范中的成分或纯度、尺寸及公差、状态、表面状况，以及适用的电气和力学性能 |
| How long or cycle | 声明报告期内的生产；不包括使用阶段服务 |
| reference_flow_link | `finishing_inspection_and_packaging` 的工厂门口输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 铜线材 `4f197beb-7b3b-11dd-ad8b-0800200c9a66` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铜或铜合金牌号及所依据规范；纯度或成分；标称线径或截面积及公差；圆形或异形；单线或绞合前状态；声明的材料状态（硬态 / 中间状态 / 退火态 / 软态）；裸线表面及任何金属处理；线杆来源及生产路线；提出主张时的原生与再生含量口径；生产地域和参考期；有规定时声明的电导率或电阻率及力学性能口径 |

构建前景数据包时，每项必需限定信息都应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1,000 kg 合格线材净重；不含线盘、线轴、托盘和包装质量。 |
| `metal_mass_balance` | 含铜输入和输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一干基金属质量口径记录线杆总投入、合格线材、内部回用、外运废料、不合格线材、残渣和未解释差额。 |
| `diameter_area_basis` | 产品尺寸 | 声明的几何口径 | mm 或 mm2 | 圆线声明标称线径，异形线声明截面尺寸和面积，并注明适用公差和测量方法。 |
| `electricity_measurement` | 拉丝、退火、准备和整理用电 | Energy | kWh | 有条件时使用分表电量；否则按实测运行时间、设备负荷或质量吞吐量对产线或设备公表进行有文件依据的分配。 |
| `fuel_energy_measurement` | 直接热能 | Energy | MJ | 使用声明的低位热值换算实测燃料量，并保留原始燃料数量和换算来源。 |
| `auxiliary_net_use` | 润滑剂、乳化液、清洗剂、酸洗剂、工艺气体和水 | 与记录相适应的质量或体积 | kg、L 或 m3 | 根据收料、期初期末库存、回收、循环和处置记录报告前景净消耗；不得把循环槽液装载量报告为消耗量。 |

## 5. 系统边界

规则：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_wire_rod` | 前景起始条件 | 从铜或铜合金线杆接收或内部转移开始，并声明牌号、来源工厂或供应商、生产路线，以及可获得时的原生/再生含量口径。 | `astm-b250-2026`; `asm-copper-wire-cable-1998` |
| `boundary_include_foreground_operations` | 前景制造 | 纳入实际使用的表面准备、数据集所表示的全部拉丝道次、条件性退火、清洁、冷却、检验、收线、包装、公用工程、辅料、良率损失、废物及归属于线材的场内处理。 | `bechem-wire-drawing`; `asm-copper-wire-cable-1998` |
| `boundary_recursive_wire_input` | 同类别输入 | 若投入为已归入 CPC 41513 的外购或转移拉制线材，应把它记录为已声明的产品输入，不在接收前景过程中递归重建其拉丝工序。 | `unsd-cpc-3-0-2025` |
| `boundary_upstream_wire_rod` | 上游供应 | 线杆应连接到与牌号或成分、地域、技术及声明的原生/再生路线相匹配的上游数据集；不得仅为取得 UUID 而替换为范围狭窄或描述矛盾的对象。 | `ica-copper-environmental-profile-2023`; `aoyama-copper-wire-annealing-1989` |
| `boundary_exclude_downstream_products` | 产品类别终点 | 边界结束于绞合、束合、成缆、绝缘、绕组组件制造、电缆线芯制造或线束组装之前的非绝缘单线。不得把裸线数据集外推到这些下游产品。 | `unsd-cpc-3-0-2025`; `astm-b8-2023`; `iec-60228-2023` |
| `boundary_surface_variant` | 表面处理 | 以无镀层裸线为代表。金属表面处理仅在明确声明并编制清单时纳入；排除聚合物、漆层或其他电气绝缘层。 | `astm-b1-2018`; `astm-b3-2024` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | copper_or_copper_alloy_wire_rod_at_receipt_or_internal_transfer |
| starting_condition_role | disclosed_foreground_input_and_upstream_link |
| product_classification_scope | CPC 3.0 `41513` 铜单线；终止于 CPC `42942` 铜绞合制品和 CPC 第 `463` 组绝缘电线电缆之前 |
| recursive_input_rule | 同类别拉制线材输入以带供应商和产品限定信息的已声明产品输入记录；此前拉丝仅由所链接的上游数据集表示。 |
| upstream_dataset_requirement | 匹配线杆牌号或成分、来源地域、技术、原生/再生路线和参考期；记录任何代理及其预期偏差方向。 |
| disclosure | 声明线杆供应商或内部来源、线杆牌号和尺寸、可获得时的阴极铜/再生路线信息、表面准备、拉丝顺序、退火状态、表面处理和精确工厂门口。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| rod_receipt_and_preparation | 线杆接收和表面准备 | required | 实施表面清洗、机械除鳞或酸洗时记录相应流 | foreground | 转移至拉丝的已准备线杆 |
| wire_drawing | 大拉和线材拉制 | required | 以线杆制线时始终纳入 | foreground | 转移至下一阶段的拉制单线 |
| annealing | 中间或最终退火 | conditional | 为满足可拉性或声明状态而实施退火时纳入 | foreground | 转移至整理的退火线材 |
| finishing_inspection_and_packaging | 整理、检验和包装 | required | 始终纳入至声明的工厂门口 | foreground | 1,000 kg 合格铜线输出 |

### 过程：线杆接收和表面准备（`rod_receipt_and_preparation`）

#### 输入

##### 产品流

###### 铜或铜合金线杆（`copper_wire_rod_input`）

记录跨越前景边界的含金属线杆总量。在确认与声明牌号、路线、尺寸和定量参考相匹配的身份之前，不指定默认 UUID。

- 选定流：Copper or copper-alloy wire rod
- 流属性/单位：Mass / kg
- 数量规则：按声明金属质量口径实测线杆总投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rod_input_records`
- 来源：`astm-b250-2026`; `asm-copper-wire-cable-1998`

###### 表面准备化学品（`surface_preparation_chemicals`）

仅在声明路线实际消耗时记录清洗、除鳞或酸洗药剂，并按物质或配方分开。

- 选定流：Surface-preparation chemical by substance or formulation
- 流属性/单位：Mass / kg
- 数量规则：根据领用、库存、退回和处置记录计算净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation_records`
- 来源：`bechem-wire-drawing`

###### 表面准备用水（`surface_preparation_water`）

记录清洗、漂洗或酸洗使用的新水或外供工艺水，并区分循环总量与净取水量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：实测或平衡计算的净取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation_records`
- 来源：`bechem-wire-drawing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备线杆（`prepared_wire_rod_output`）

记录经任何表面准备后转移到第一道拉丝的金属质量。

- 选定流：Prepared copper or copper-alloy wire rod
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或根据线杆投入和准备损失计算质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程参考
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stage_mass_balance_records`
- 来源：`asm-copper-wire-cable-1998`

##### 废物流

###### 准备残渣和去除氧化皮（`preparation_residue_output`）

按处理去向记录收集的氧化物、氧化皮、污泥和含铜清洗残渣。

- 选定流：Copper-bearing preparation residue
- 流属性/单位：Mass / kg
- 数量规则：实测收集废物质量，水分口径有实质影响时予以声明
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery_records`
- 来源：`bechem-wire-drawing`

###### 废准备槽液或漂洗液（`spent_preparation_bath_output`）

清洗或酸洗槽液和漂洗水排放或送处理时予以记录。

- 选定流：Spent preparation bath or rinse
- 流属性/单位：Mass / kg
- 数量规则：实测或平衡计算送场内或场外处理的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery_records`
- 来源：`bechem-wire-drawing`

##### 基本流

### 过程：大拉和线材拉制（`wire_drawing`）

#### 输入

##### 产品流

###### 已准备线杆或上一道线材（`prepared_rod_to_drawing`）

记录进入所表示拉丝序列的含铜转移量。

- 选定流：Prepared copper or copper-alloy rod or prior-pass wire
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或计算阶段平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程参考
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stage_mass_balance_records`
- 来源：`asm-copper-wire-cable-1998`

###### 拉丝用电（`drawing_electricity`）

纳入计量边界所表示的大拉、中拉和细拉、卷筒、泵、冷却、过滤及产线辅机。

- 选定流：Electricity supplied to drawing
- 流属性/单位：Energy / kWh
- 数量规则：分表用电或依据文件从公表分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drawing_energy_records`
- 来源：`bechem-wire-drawing`

###### 拉丝润滑剂或乳化液（`drawing_lubricant`）

分别记录各润滑剂、乳化液浓缩物、添加剂和补加组分；不得把循环槽液装载量计为消耗物料。

- 选定流：Drawing lubricant or emulsion component
- 流属性/单位：Mass / kg
- 数量规则：根据领用、库存、回收和处置记录计算净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drawing_auxiliary_records`
- 来源：`bechem-wire-drawing`

###### 拉丝冷却和工艺用水（`drawing_process_water`）

记录拉丝冷却、乳化液配制和清洗的补加水及排水，不计闭路循环量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：实测或平衡计算的净取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drawing_auxiliary_records`
- 来源：`bechem-wire-drawing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 拉制铜线（`drawn_wire_output`）

记录在条件性退火或整理之前离开所表示拉丝序列的线材。

- 选定流：Drawn copper or copper-alloy wire
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或计算阶段平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程参考
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stage_mass_balance_records`
- 来源：`astm-b1-2018`; `bechem-wire-drawing`

##### 废物流

###### 断线和铜废料（`drawing_copper_scrap`）

记录断线、端头、开机线及其他含铜拉丝废料，并区分内部回用和场外回收。

- 选定流：Copper-bearing drawing scrap
- 流属性/单位：Mass / kg
- 数量规则：按去向和内部回用状态实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery_records`
- 来源：`iso-14044-2006`

###### 废拉丝乳化液和废水（`spent_drawing_fluid`）

按场内或场外处理路线记录废拉丝液、过滤残渣和废水。

- 选定流：Spent drawing fluid and wastewater
- 流属性/单位：Mass / kg
- 数量规则：实测或平衡计算离开拉丝循环送处理的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery_records`
- 来源：`bechem-wire-drawing`

##### 基本流

### 过程：中间或最终退火（`annealing`）

#### 输入

##### 产品流

###### 进入退火的硬态拉制线（`hard_drawn_wire_to_annealing`）

记录进入批式、连续、阻抗、感应或其他声明退火设备的线材质量。

- 选定流：Hard-drawn copper or copper-alloy wire
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或计算阶段平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程参考
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stage_mass_balance_records`
- 来源：`astm-b3-2024`; `aoyama-copper-wire-annealing-1989`

###### 退火用电（`annealing_electricity`）

记录加热、传动、保护气设备、冷却、干燥和纳入辅机的用电。

- 选定流：Electricity supplied to annealing
- 流属性/单位：Energy / kWh
- 数量规则：分表用电或依据文件从公表分配的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_energy_records`
- 来源：`bechem-wire-drawing`

###### 退火燃料和工艺辅料（`annealing_fuel_and_auxiliaries`）

使用时把直接燃料、保护气体、冷却或退火液和补加水分别记录。

- 选定流：Annealing fuel or process auxiliary by substance
- 流属性/单位：Mass or energy / kg or MJ
- 数量规则：按燃料、气体、液体或水类型实测净消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_auxiliary_records`
- 来源：`bechem-wire-drawing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 退火铜线（`annealed_wire_output`）

记录从退火转移至整理的线材，并声明达到的状态和表面状态。

- 选定流：Annealed copper or copper-alloy wire
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或计算阶段平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程参考
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stage_mass_balance_records`
- 来源：`astm-b3-2024`; `aoyama-copper-wire-annealing-1989`

##### 废物流

###### 退火废料和废液（`annealing_waste_output`）

按材料和去向分别记录退火不合格品、铜废料、废液和废水。

- 选定流：Annealing scrap or spent fluid by material
- 流属性/单位：Mass / kg
- 数量规则：按材料、处理去向和内部回用状态实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery_records`
- 来源：`bechem-wire-drawing`

##### 基本流

### 过程：整理、检验和包装（`finishing_inspection_and_packaging`）

#### 输入

##### 产品流

###### 进入整理的拉制或退火线材（`wire_to_finishing`）

记录进入清洁、干燥、尺寸及性能检验、收线和包装的线材质量。

- 选定流：Drawn or annealed copper or copper-alloy wire
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或计算阶段平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程参考
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stage_mass_balance_records`
- 来源：`astm-b1-2018`; `astm-b3-2024`; `astm-b250-2026`

###### 包装材料（`packaging_materials`）

线盘、线轴、卷芯、衬垫、包材、托盘和其他包装应与参考产品质量分开记录。

- 选定流：Packaging material by material and item type
- 流属性/单位：Mass / kg
- 数量规则：实测或采购记录中供给合格产品的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口合格铜线（`conforming_copper_wire_output`）

这是参考产品。仅记录符合声明牌号、尺寸、状态、表面状态和质量规范的非绝缘单线。

- 选定流：铜线材 `4f197beb-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：实测合格产品净重，不含线盘、线轴、托盘和包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_output_and_quality_records`
- 来源：`unsd-cpc-3-0-2025`; `astm-b1-2018`; `astm-b3-2024`; `astm-b250-2026`

##### 废物流

###### 不合格线材和端头（`finishing_copper_scrap`）

不合格线材和端头应与合格输出分开记录，并区分返工、内部回用和场外回收。

- 选定流：Off-specification copper wire and end cuts
- 流属性/单位：Mass / kg
- 数量规则：按处置方式实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格铜线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery_records`
- 来源：`iso-14044-2006`

##### 基本流

## 7. 分配与共产品处理

规则：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多产品产线 | 在实施分配之前，优先按拉丝产线、线径族、合金和状态进行分表、批次记录及细分。 | `iso-14044-2006` |
| `allocation_shared_utilities_physical` | 共用电力、燃料、水和辅料 | 剩余共用投入按能反映消耗的有文件物理驱动因素分配，例如设备运行时间与负荷、产线计量需求或质量吞吐量；不得默认按收入分配。 | `iso-14044-2006` |
| `allocation_internal_scrap_closed_loop` | 内部铜回用 | 单独追踪内部回用铜，不得同时把它计为外部废物输出和新的外部原料输入。边界内发生重熔或再加工时，应纳入其公用工程和损失。 | `iso-14044-2006` |
| `allocation_exported_scrap_no_avoided_burden` | 离开边界的铜废料 | 按质量、成分、状态和去向报告外运废料。默认不采用避免负担抵扣；任何替代分配都应单独声明并进行敏感性分析。 | `iso-14044-2006` |
| `allocation_rework` | 返工不合格线材 | 使用记录的返工质量和操作，把额外的拉丝、退火、整理和搬运投入归给产生返工的产品系统。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rod_input_records` | rod_receipt_and_preparation | Copper or copper-alloy wire rod | 收货或内部转移记录 | 批号；供应商或来源；牌号；成分或纯度；直径；质量；日期；提出主张时的原生/再生含量口径 | 校准秤或地磅，并与库存核对 | kg | 每批或每次转移 | 完整报告期 | 所有被表示的线材生产场址 | 汇总匹配批次；保留牌号和路线分层；按合格输出归一化 | 秤校准；批次证书；供应商声明；库存核对 |
| `cp_surface_preparation_records` | rod_receipt_and_preparation | Surface-preparation chemicals and water | 化学品领用、槽液和仪表记录 | 物质；相关时的浓度；期初库存；收料；期末库存；回收；处置；取水；批次或产线 | 库存平衡和校准仪表 | kg; m3 | 每批并每月核对 | 完整报告期 | 每条被表示的准备产线 | 计算净消耗；区分循环、补加和排放 | 库存核对；仪表校准；槽液日志；废物联单 |
| `cp_drawing_energy_records` | wire_drawing | Drawing electricity | 电表和生产日志 | 仪表编号；起止读数；产线；设备状态；运行时间；线材质量；产品族 | 产线分表或有文件的公表分配 | kWh | 连续或每班 | 完整报告期，含有代表性的运行状态 | 每条被表示的拉丝产线 | 扣除排除负荷；按产品分层汇总；按合格输出归一化 | 仪表校准；电费账单核对；分配工作表 |
| `cp_drawing_auxiliary_records` | wire_drawing | Drawing lubricant, emulsion, and process water | 领用、库存、槽液和水表记录 | 配方；浓缩物；添加剂；期初库存；收料；期末库存；回收量；处置；取水 | 库存平衡、采购/领用记录和仪表 | kg; m3 | 每次领用或每批并每月核对 | 完整报告期 | 每条被表示的拉丝产线 | 报告净消耗；排除循环装载量；按合格输出归一化 | 库存核对；配方资料；仪表校准；处理记录 |
| `cp_annealing_energy_records` | annealing | Annealing electricity and fuel | 仪表、燃料和生产日志 | 设备；批次或运行；电量；燃料量；热值；运行时间；线材质量；状态 | 设备分表、燃料表或有文件的公表分配 | kWh; MJ | 每批或连续运行 | 完整报告期，含开机和正常运行 | 每台被表示的退火设备 | 按退火路线和状态汇总；按合格输出归一化 | 仪表校准；燃料发票；热值来源；分配工作表 |
| `cp_annealing_auxiliary_records` | annealing | Protective gas, fluid, and water | 领用、库存、流量计和处理记录 | 物质；数量；期初期末库存；回收；排放；批次或运行 | 库存平衡和校准流量计 | kg; m3 | 每批或每班并每月核对 | 完整报告期 | 每台被表示的退火设备 | 按物质报告净消耗和排放；按合格输出归一化 | 库存核对；仪表校准；处理记录 |
| `cp_stage_mass_balance_records` | rod_receipt_and_preparation; wire_drawing; annealing; finishing_inspection_and_packaging | Interstage copper-bearing transfers | 生产、盘卷、线轴和秤量记录 | 批号或卷号；投入质量；输出质量；断线；端头；不合格品；内部回用；外运废料；日期 | 校准秤和生产追踪 | kg | 每批、每卷或每炉 | 完整报告期 | 所有被表示的前景阶段 | 核对各阶段和总金属平衡；保留返工和内部回用回路 | 秤校准；批次谱系；生产核对 |
| `cp_waste_and_recovery_records` | rod_receipt_and_preparation; wire_drawing; annealing; finishing_inspection_and_packaging | Copper scrap, residues, spent fluid, and wastewater | 废物、回收和处理记录 | 材料；质量；相关时的水分口径；成分；内部回用；返工；承运方；去向；处理 | 校准秤、槽罐平衡、联单和内部回用台账 | kg | 每次转移并每月核对 | 完整报告期 | 所有被表示的前景阶段和场内处理 | 按材料和去向汇总；不得以内部回用冲减外运废物 | 秤校准；联单；处理发票；内部回用核对 |
| `cp_packaging_records` | finishing_inspection_and_packaging | Packaging materials | 物料清单、领用和采购记录 | 材料；物品类型；单件质量；数量；复用状态；产品批次 | 实测单件质量或供应商规范，并与领用核对 | kg | 每产品批次并每月核对 | 完整报告期 | 被表示的包装作业 | 按材料汇总包装；不计入参考产品质量 | 物料清单；供应商规范；领用核对 |
| `cp_final_output_and_quality_records` | finishing_inspection_and_packaging | Conforming copper wire | 最终秤量、试验和放行记录 | 批号或卷号；线材净重；牌号；成分或纯度证据；线径或面积；公差；形状；状态；表面状态；有规定时的电导率或电阻率；有规定时的力学试验；处置 | 校准秤和适用产品试验方法 | kg | 每个放行批次或卷 | 完整报告期 | 所有被表示的产品族和场址 | 仅汇总匹配声明限定信息的合格放行质量；保留分层 | 秤及试验设备校准；分析证书；放行记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_output` | 所有清单流 | 归一化数量 = 报告期流数量 / 报告期合格线材质量 × 1,000 kg | 相关采集协议；`cp_final_output_and_quality_records` | 每 1,000 kg 合格线材的清单数量 | `iso-14044-2006` |
| `calculate_total_metal_yield` | 前景总金属平衡 | 总良率 = 合格线材质量 / 含铜线杆及同类别线材总投入质量 | `cp_rod_input_records`; `cp_stage_mass_balance_records`; `cp_final_output_and_quality_records` | 带报告期口径的无量纲良率 | `iso-14044-2006` |
| `reconcile_copper_mass` | 各阶段及前景总系统 | 含铜输入质量 = 合格及中间输出 + 外运废料 + 处理残渣 + 库存变化 + 已记录内部回路调整 + 未解释差额 | `cp_rod_input_records`; `cp_stage_mass_balance_records`; `cp_waste_and_recovery_records`; `cp_final_output_and_quality_records` | 已核对质量平衡表和差额 | `iso-14044-2006` |
| `calculate_net_auxiliary_use` | 循环润滑剂、乳化液、槽液、气体和水系统 | 净用量 = 期初库存 + 收料 - 期末库存 - 转出的回收量；排放单独报告并记录平衡边界 | `cp_surface_preparation_records`; `cp_drawing_auxiliary_records`; `cp_annealing_auxiliary_records` | 净辅料投入和单独报告的排放 | `bechem-wire-drawing` |
| `allocate_shared_energy` | 共用能源仪表 | 分配能源 = 公表净能源 × 产品分层的有文件物理驱动量 / 同一计量期驱动量总和 | `cp_drawing_energy_records`; `cp_annealing_energy_records` | 按产品分层分配的 kWh 或 MJ | `iso-14044-2006` |
| `separate_internal_copper_return` | 内部铜废料回路 | 内部回用质量及相关场内再加工仅记录一次；从外部废物和外部原料总量中排除同一质量 | `cp_stage_mass_balance_records`; `cp_waste_and_recovery_records` | 内部回路披露和无重复计算的清单 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和所表示分层 | 牌号、纯度或成分、尺寸、形状、单线状态、材料状态、表面状态和所依据规范应可追溯至放行批次。 | 证书、批次谱系、试验记录和放行记录；`astm-b1-2018`; `astm-b3-2024`; `astm-b250-2026` |
| `dq_rod_provenance` | 线杆投入 | 应记录供应商或内部来源、牌号、尺寸、地域、技术路线，以及提出主张时的原生/再生含量口径；披露代理缺口。 | 收货记录、证书、供应商声明和上游数据集元数据；`ica-copper-environmental-profile-2023` |
| `dq_energy_separation` | 拉丝和退火 | 拉丝与退火能源应分别报告。公表分配应保留仪表覆盖范围、驱动因素和核对证据。 | 仪表记录、校准、生产日志和分配工作表 |
| `dq_auxiliary_coverage` | 润滑、清洗、酸洗、水和工艺气体 | 净消耗和排放应由库存或仪表平衡支持，并区分循环装载量和消耗。 | 库存、领用、槽液、仪表、回收和处理记录；`bechem-wire-drawing` |
| `dq_yield_and_scrap` | 铜质量平衡 | 合格输出、返工、内部回用、外运废料、残渣和未解释差额应按去向报告且不重复计算。 | 阶段平衡、秤校准、联单和内部回用台账 |
| `dq_temporal_site_coverage` | 数据集报告期 | 数据应覆盖声明期间和所有被表示场址、产品族、开机及实质运行状态；披露排除项和异常事件。 | 覆盖矩阵、生产记录、维护和事件日志 |
| `dq_no_category_extrapolation` | 代表性主张 | 单一合金、牌号、线径族、状态或路线的数据集应注明其代表份额；没有形成文件的覆盖评估时不得声称代表整个 CPC 类别。 | 生产结构和代表性评估 |

## 9. 校验规则

规则：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认天工产品流、Mass 属性、Units of mass 单位组和 kg 单位；核实所有必需产品限定信息及非绝缘单线状态均已声明。 | `unsd-cpc-3-0-2025`; `astm-b1-2018`; `astm-b3-2024`; `astm-b250-2026` |
| `validate_reference_mass` | 参考数量 | 确认参考输出恰为 1,000 kg 合格线材净重，且不含线盘、线轴、托盘和包装质量。 | `iso-14044-2006` |
| `validate_process_energy` | 拉丝及条件性退火 | 确认存在拉丝能耗，实施退火时存在退火能耗；检查仪表范围、分配驱动因素及与生产记录的一致性。 | `bechem-wire-drawing` |
| `validate_yield_and_scrap` | 金属质量平衡 | 重新计算阶段和总良率；确认内部回用、返工、外运废料、残渣和未解释差额分别可见且不重复计算。 | `iso-14044-2006` |
| `validate_auxiliary_and_waste` | 润滑、准备、冷却和退火系统 | 确认按净消耗或排放口径记录润滑剂或乳化液、使用时的清洗或酸洗药剂、水、使用时的工艺气体、废液、废水及处理路线。 | `bechem-wire-drawing` |
| `validate_boundary_exclusions` | 产品范围 | 拒绝把本数据集作为绞线或束线导体、绝缘或漆包电线电缆、绕组组件、电缆线芯、光伏或充电电缆、线束及其他下游组件的类别级默认数据。 | `unsd-cpc-3-0-2025`; `astm-b8-2023`; `iec-60228-2023` |
| `validate_upstream_rod` | 线杆数据集 | 确认上游线杆数据集匹配声明的牌号/成分、来源、地域、技术及原生/再生路线，或已披露每项代理局限。 | `ica-copper-environmental-profile-2023`; `aoyama-copper-wire-annealing-1989` |
| `validate_temporal_completeness` | 前景证据 | 确认数据覆盖声明期间、被表示场址和产品分层及实质运行状态；标记无法解释的遗漏或无代表性抽样。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 牌号、成分、尺寸、形状、状态、表面状态、线杆路线、地域、期间和工厂门口与声明画像相匹配的非绝缘铜或铜合金单线数据集 |
| excluded_use | 无代表性证据的类别级默认；绞线或束线导体；绝缘或漆包电线电缆；绕组；电缆线芯；光伏或充电电缆；线束；下游组件 |
| required_metadata | 参考流 UUID 和数量；牌号及所依据规范；纯度或成分；线径或面积及公差；形状；单线状态；材料状态；表面状态；线杆来源和路线；原生/再生含量主张口径；地域；参考期；过程覆盖；分配；良率；内部废料处理 |
| required_quality_disclosure | 采集覆盖；仪表和秤校准；共用资源分配；铜质量平衡差额；良率；返工和内部回用；上游线杆代理局限；产品分层代表性；遗漏和异常作业 |
| update_trigger | 牌号或合金族、线杆来源或路线、产品尺寸、状态、表面处理、拉丝或退火技术、能源供应、润滑或清洗系统、良率、废料处理、场址地域、报告期或数据质量发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | 联合国统计司，*Central Product Classification Version 3.0 Explanatory Notes*，2025，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-08） | CPC 41513 身份，以及与铜绞合制品和绝缘电线电缆的区分 |
| `astm-b1-2018` | standard | ASTM International，ASTM B1-13(2018)，*Standard Specification for Hard-Drawn Copper Wire*，https://doi.org/10.1520/B0001-13R18（检索日期 2026-08-08） | 硬拉圆形裸铜线产品身份、尺寸、力学性能和电阻率背景 |
| `astm-b3-2024` | standard | ASTM International，ASTM B3-13(2024)，*Standard Specification for Soft or Annealed Copper Wire*，https://doi.org/10.1520/B0003-13R24（检索日期 2026-08-08） | 软态或退火圆形裸铜线身份、纯度、尺寸、表面、力学性能和电阻率背景 |
| `astm-b250-2026` | standard | ASTM International，ASTM B250/B250M-26，*Standard Specification for General Requirements for Wrought Copper-Alloy Wire*，https://doi.org/10.1520/B0250_B0250M-26（检索日期 2026-08-08） | 铜合金线输入、加工和退火路线，以及成分、尺寸、力学和电气性能背景 |
| `astm-b8-2023` | standard | ASTM International，ASTM B8-23，*Standard Specification for Concentric-Lay-Stranded Copper Conductors, Hard, Medium-Hard, or Soft*，https://doi.org/10.1520/B0008-23（检索日期 2026-08-08） | 将绞线导体识别为代表性线材边界之外的下游产品 |
| `iec-60228-2023` | standard | IEC，IEC 60228:2023，*Conductors of insulated cables*，https://webstore.iec.ch/en/publication/71891（检索日期 2026-08-08） | 成品电缆导体背景及其不能用于裸单线产品主张的排除依据 |
| `iso-14044-2006` | standard | ISO，ISO 14044:2006，*Environmental management — Life cycle assessment — Requirements and guidelines*，https://www.iso.org/standard/38498.html（已确认现行版本；检索日期 2026-08-08） | LCI 边界、分配、质量平衡、数据质量和校验方法依据 |
| `asm-copper-wire-cable-1998` | handbook | ASM International，*Copper Wire and Cable*，DOI 10.31399/asm.hb.mhde2.a0003133，https://dl.asminternational.org/handbooks/edited-volume/49/chapter-abstract/594856/Copper-Wire-and-Cable（检索日期 2026-08-08） | 线杆制造、表面准备、拉丝、退火和下游绝缘过程分解 |
| `bechem-wire-drawing` | extension_guidance | CARL BECHEM GmbH，*Lubrication solutions for wire drawing*，https://www.bechem.de/_Resources/Persistent/d/d/8/a/dd8ab883aa680d193e272b78e3dc7d0ca77920c0/BECHEM_Wire_Drawing_en.pdf（检索日期 2026-08-08） | 大拉、拉丝润滑与冷却、清洗、在线退火、干燥和收线的流识别；未采用定量默认值 |
| `aoyama-copper-wire-annealing-1989` | literature | Aoyama 等，“Effect of Heat Treatment on Mechanical Properties of Cold Drawn Copper Wire”，*Journal of the Japan Institute of Metals and Materials* 53(4)，1989，https://doi.org/10.2320/jinstmet1952.53.4_452（检索日期 2026-08-08） | 线杆杂质、冷拉、退火、微观组织、电导率和力学性能之间的关系；未采用定量默认值 |
| `ica-copper-environmental-profile-2023` | dataset | International Copper Association，*Copper Environmental Profile*，2023，https://copperalliance.org/wp-content/uploads/2023/05/ICA-LCI-GlobalSummary-202305-F.pdf（检索日期 2026-08-08） | 上游铜供应及原生/再生路线元数据背景；未复制数值清单 |
