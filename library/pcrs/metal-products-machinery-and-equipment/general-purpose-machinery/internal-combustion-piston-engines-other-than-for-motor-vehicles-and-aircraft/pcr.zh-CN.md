---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.internal-combustion-piston-engines-other-than-for-motor-vehicles-and-aircraft
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 机动车辆和航空器用以外的内燃活塞发动机

## 1. 范围与适用性

本 PCR 适用于完整往复式或旋转式内燃活塞发动机从摇篮到工厂大门的生产，且该发动机并非供机动车辆或航空器使用。当发动机本身为参考产品时，涵盖固定设备、发电设备、船舶或轨道交通设备、便携设备以及非道路机械等应用，同时涵盖压燃式和点燃式配置。

前景边界始于符合技术规格的外购金属、铸件、零部件、耗材和能源到达制造场址，涵盖零部件机加工、采用时的水基清洗、装配、加注、最终检验、出厂试验以及场址直接产生的废物和排放。外购投入的上游生产必须由关联数据集表示。发动机的配送、安装、运行、维护、再制造和寿命终止均不在范围内。机动车辆或航空器用发动机、燃气轮机、完整发电机组以及未随完整发动机出售的发动机零部件均排除在外。

本类别有意设置得比任何单一燃料、功率范围、气缸排列、冷却系统或用途更宽。数据包必须声明这些属性，不得以范围较窄的天工发动机流替代尚未解决的通用参考产品身份。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.internal-combustion-piston-engines-other-than-for-motor-vehicles-and-aircraft |
| classification_refs | CPC 3.0：43110，精确分类语境 |
| covered_products | 用于固定式、船舶、轨道交通、便携式、农业、建筑施工和其他非道路用途的完整压燃式或点燃式活塞发动机，但不包括机动车辆或航空器用发动机 |
| excluded_products | 机动车辆用发动机；航空器用发动机；燃气轮机；完整发电机组；发动机未单独计量的推进系统；未随完整发动机出售的备件和分总成 |
| representative_product | 在发动机工厂大门交付的完整、经出厂试验的内燃活塞发动机，并声明用途、点火原理、燃料、额定功率、排量、后处理装置、冷却方式和供应状态 |
| production_route | 外购材料和零部件接收；机加工；清洗和装配；加注；最终检验和出厂试验；工厂大门放行 |
| market_state | 发动机工厂交付状态的完整新发动机，参考数量不含运输包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 将燃料化学能转化为轴端机械能、且不供机动车辆或航空器使用的完整内燃活塞发动机 |
| How much | 工厂大门处完整发动机产品净质量 1,000 kg |
| How well | 符合所声明发动机族或型号的技术规格、额定净功率、点火原理、燃料、排放配置、后处理装置及出厂验收准则 |
| How long or cycle | 一次工厂大门交付；运行寿命和全寿命交付机械功不在本从摇篮到工厂大门功能单位内 |
| reference_flow_link | `reference_engine_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 机动车辆和航空器用以外的内燃活塞发动机 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 发动机用途；点火原理；燃料规格；额定净功率（kW）；排量；气缸数量和排列；转速等级；冷却系统；排放阶段或所声明的不受监管状态；随发动机供应的后处理装置；所含附件；净质量；出厂试验路线；生产地域；生产时期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和所有按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的计量器具确定完整发动机的交付净质量，包括随发动机供应的液体和附件，但不包括运输包装、可重复使用的试验夹具和单独出售的设备；所有清单均归一化至 1,000 kg。 |
| `component_mass_basis` | 外购材料和内部转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对干基或接收状态质量采用一致记录方式；涂层或夹带液体具有重要性时予以声明；使领用质量与产品、切屑、液体及库存变动相协调。 |
| `electricity_energy_basis` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留以 kWh 表示的电表读数，并按 1 kWh = 3.6 MJ 换算；披露电压等级、电网地域、场内发电、输入电力以及单独计量的试验输出或回收电力。 |
| `gas_volume_basis` | 气态天然气试验燃料 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积并声明温度、压力、干湿基、组成和参考条件；没有经记录的密度或组成信息时不得换算为质量。 |
| `test_emission_basis` | 出厂试验尾气排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在实际试验区间内积分每种实测或计算组分，并归一化至 1,000 kg 合格发动机输出；不得以法规规定的 g/kWh 限值替代出厂试验实测清单。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 符合技术规格的外购金属、铸件、外购零部件、工艺耗材、燃料、水和电力已交付至发动机制造场址 |
| starting_condition_role | 机加工、装配、加注、检验和试验的前景起始条件；上游生产仍须通过供应商或背景数据集关联纳入 |
| product_classification_scope | 经审查语义边界内的完整内燃活塞发动机；分类引用仅提供映射语境，不收窄或扩大规范 PCR |
| recursive_input_rule | 为再制造或装配而接收的同类别完整发动机，不作为本新发动机 PCR 的原材料建模；应予披露并采用单独管理的再制造或装配模型，而不得递归应用本 PCR |
| upstream_dataset_requirement | 将每项外购材料、零部件、耗材、燃料、水和电力投入关联至地域与技术具有代表性的上游数据集；披露未解决的供应商特定投入 |
| disclosure | 声明外购与场内制造零部件范围、所含附件和后处理装置、机加工及清洗路线、试验覆盖、燃料与试验循环、场址公用工程、废物去向、分配依据、生产地域和参考期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 所有前景过程 | 纳入制造场址内的机加工、清洗、装配、加注、检验、试验、直接排放和废物，直至完整发动机在工厂大门放行；排除配送、使用、维护和寿命终止。 | `un-cpc-3-0-structure-2025` |
| `boundary_purchased_inputs` | 外购材料和零部件 | 不得仅因外购铸件、金属、零部件、耗材、能源或燃料在发动机工厂外生产而遗漏其上游生产；应使用关联的上游数据集表示。 |  |
| `boundary_route_condition` | 条件适用行 | 仅当记录表明相应路线实际发生时，才纳入各项条件适用的材料、清洗剂、燃料、废物或排放；应记录有依据的零值或不适用判定，不得以其他交换替代。 |  |
| `boundary_test_scope` | 最终检验和试验 | 对工厂放行前进行的试验，纳入试验台燃料、输入电力、直接尾气、报废产品和处理流；识别受试发动机族和实际试验循环。 | `eu-regulation-2016-1628`; `us-epa-40-cfr-1065-15` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_machining` | 零部件准备与机加工 | required | 始终纳入所声明发动机型号在场址控制下发生的切削、镗削、钻削、车削、磨削、珩磨、清洗及相关内部转移。 | 前景生产 | 转移至装配过程的已机加工发动机零部件质量（kg） |
| `assembly_finishing` | 清洗、装配、加注与精整 | required | 始终纳入发动机装配和加注；仅在场址实际采用时纳入水基清洗和氢氧化钠。 | 前景生产 | 转移至最终检验和试验的已装配未试验发动机质量（kg） |
| `final_inspection_testing` | 最终检验、试验与工厂大门放行 | required | 始终纳入最终检验和放行；仅在进行热试验或燃料验收试验时适用燃料和尾气行。 | 前景试验和参考产品放行 | 1,000 kg 合格完整发动机输出 |

### 过程：零部件准备与机加工（`component_machining`）

#### 输入

##### 产品流

###### 发动机用合金钢材料（`alloy_steel_input`）

记录进入场址控制制造、用于轴、齿轮、紧固件、气门或其他已声明发动机零件的合金钢质量。钢号、产品形态、再生含量声明、供应商地域和上游路线为必需限定信息。

- 选定流：合金钢 `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- 流属性/单位：Mass / kg
- 数量规则：参考期内领用于所声明发动机生产的合金钢净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 发动机用灰铸铁材料（`gray_cast_iron_input`）

记录进入场址控制制造、用于缸体、缸盖、缸套、壳体或其他已声明零件的灰铸铁。天工 UUID 尚未解决，不得以生铁替代。

- 选定流：灰铸铁
- 流属性/单位：Mass / kg
- 数量规则：参考期内领用于所声明发动机生产的灰铸铁净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 发动机用铝合金材料（`aluminium_alloy_input`）

当所声明发动机采用铝制缸体、缸盖、活塞、壳体或其他场址控制制造的零件时，记录铝合金投入。合金牌号、产品形态、供应商地域和上游路线为必需限定信息。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：Mass / kg
- 数量规则：领用于所声明发动机生产的铝合金净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 切削液（`cutting_fluid_input`）

记录为机加工跨越场址边界的切削液浓缩液或即用型切削液净量。声明配方类别、稀释基准、补加量、回收量和期末库存。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：外购和期初库存切削液加补加量，减回收期末库存及退回场外的液体
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_machining_consumables`
- 来源：`niosh-metalworking-fluids-2013`

###### 机加工工艺用水（`machining_process_water`）

记录本过程中加入水溶性切削液、零件清洗或机加工系统的工艺用水。分配至机加工系统以外的冷却塔补水不在此行记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分表计量或槽体平衡并分配至零部件机加工的工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_consumables`
- 来源：

###### 机加工电力（`machining_electricity`）

记录分配至机加工的机床、泵、油雾收集、清洗及过程局部辅助设备的输入电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：机加工分表电力，或依据机时形成书面记录的场址电力分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定基本流输入；仅当某项具体基本资源跨越实测前景边界时增加相应原子行。

#### 输出

##### 产品流

###### 转移至装配的已机加工发动机零部件（`machined_engine_parts_output`）

将转移至装配的合格已机加工零件实测质量记录为前景内部中间产品。创建数据包局部内部流，并与 `machined_engine_parts_input` 配对。

- 选定流：已机加工发动机零部件，内部中间产品
- 流属性/单位：Mass / kg
- 数量规则：机加工放行时记录的合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfers`
- 来源：

##### 废物流

###### 钢制机加工切屑（`steel_machining_chips`）

记录离开机加工过程、送往回收、处理或处置的分类收集钢切屑和切削屑；声明夹带液体的处理方式和去向。

- 选定流：钢废料，机加工切屑 `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- 流属性/单位：Mass / kg
- 数量规则：参考期内经校准的出场质量加期末库存减期初库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_outputs`
- 来源：`niosh-metalworking-fluids-2013`

###### 铝合金机加工切屑（`aluminium_machining_chips`）

发生铝材机加工时，单独记录铝合金切屑和切削屑。候选流未提供所需的材料特定质量身份，因此 UUID 尚未解决。

- 选定流：铝合金机加工切屑
- 流属性/单位：Mass / kg
- 数量规则：参考期内经校准的出场质量加期末库存减期初库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_outputs`
- 来源：`niosh-metalworking-fluids-2013`

###### 废金属加工液（`spent_metalworking_fluid`）

记录离开场址的废金属加工液，不含单独称量的游离金属切屑。声明该废物为油基还是水溶性，并声明其场外去向。

- 选定流：废金属加工液
- 流属性/单位：Mass / kg
- 数量规则：送往场外的废金属加工液联单质量或槽体平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`niosh-metalworking-fluids-2013`

##### 基本流

本 PCR 不规定默认基本流输出；若实测机加工气溶胶对所声明边界具有重要性，应按其具体化学组成或粒径增加原子流。

### 过程：清洗、装配、加注与精整（`assembly_finishing`）

#### 输入

##### 产品流

###### 从机加工过程接收的已机加工发动机零部件（`machined_engine_parts_input`）

使用与 `machined_engine_parts_output` 相同的数据包局部流和数量，记录该前景内部转移的接收侧。

- 选定流：已机加工发动机零部件，内部中间产品
- 流属性/单位：Mass / kg
- 数量规则：装配过程接收的合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfers`
- 来源：

###### 初装润滑油（`lubricating_oil_fill`）

记录加注并随发动机交付的润滑油。试验油若被回收并留在试验系统内，不得计入；仅记录跨越过程边界的净消耗。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：随合格发动机交付的经校准加注质量，加分配至产品的试验系统未回收损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_consumables`
- 来源：

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner`）

仅在向水基零件清洗槽添加氢氧化钠时记录。声明产品浓度；记录为溶液质量时，应一致地换算有效产品质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：加入清洗槽的外购氢氧化钠产品质量；原始记录为溶液质量时按浓度调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_consumables`
- 来源：`eu-jrc-surface-treatment-metals-plastics-2006`

###### 装配工艺用水（`assembly_process_water`）

记录装配过程中用于水基清洗、漂洗、泄漏试验或产品加注的工艺用水；发动机内部随产品交付的水应在流备注中单独声明。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分表计量或槽体平衡并分配至装配和清洗的工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_consumables`
- 来源：`eu-jrc-surface-treatment-metals-plastics-2006`

###### 装配电力（`assembly_electricity`）

记录分配至本过程的清洗、装配工具、加注、通风和过程局部辅助设备的输入电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：装配分表电力，或依据生产时间形成书面记录的场址电力分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 转移至最终检验的已装配未试验发动机（`untested_engine_output`）

将转移至最终检验和试验的已装配发动机实测质量记录为前景内部中间产品。创建数据包局部流，并与 `untested_engine_input` 配对。

- 选定流：已装配未试验内燃活塞发动机，内部中间产品
- 流属性/单位：Mass / kg
- 数量规则：装配放行时记录的合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfers`
- 来源：

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

进行水基清洗、漂洗或泄漏试验时，记录跨越装配过程边界流向下水道或处理设施的废水。声明去向以及质量中是否包含夹带油或清洗剂。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：送往处理设施的废水排放表读数或槽体平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`eu-jrc-surface-treatment-metals-plastics-2006`

##### 基本流

不假定直接排放至环境。若废水未经处理直接排放，应分别增加每种实测基本流，而不得把本废物流作为环境排放。

### 过程：最终检验、试验与工厂大门放行（`final_inspection_testing`）

#### 输入

##### 产品流

###### 接收用于最终检验的已装配未试验发动机（`untested_engine_input`）

使用与 `untested_engine_output` 相同的数据包局部流和数量，记录该前景内部转移的接收侧。

- 选定流：已装配未试验内燃活塞发动机，内部中间产品
- 流属性/单位：Mass / kg
- 数量规则：最终检验和试验过程接收的合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfers`
- 来源：

###### 柴油试验燃料（`diesel_test_fuel`）

仅记录压燃式发动机热试验或燃油系统验收试验消耗的柴油。牌号、生物燃料比例、供应商和试验路线为必需限定信息。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：期初库存加接收量，减期末库存、退回量和单独计量的所声明试验之外的燃料用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_fuels`
- 来源：`us-epa-40-cfr-1065-15`

###### 气态天然气试验燃料（`natural_gas_test_fuel`）

仅对使用该燃料受试的发动机记录气态天然气。声明组成、供应压力和体积参考条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按所声明参考条件计量的试验台用气体积，减非试验消耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_fuels`
- 来源：`us-epa-40-cfr-1065-15`

###### 汽油试验燃料（`gasoline_test_fuel`）

仅记录点燃式发动机热试验或燃油系统验收试验消耗的汽油。牌号、含氧组分和生物燃料比例、供应商及试验路线为必需限定信息。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：Mass / kg
- 数量规则：期初库存加接收量，减期末库存、退回量和单独计量的非试验消耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_fuels`
- 来源：`us-epa-40-cfr-1065-15`

###### 试验电力（`testing_electricity`）

记录测功机、泵、控制系统、通风和试验台辅助设备的输入电力。输出或回收的测功机电力应单独记录，未披露时不得净扣除。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量的试验台输入电力；输出或回收电力不得从本投入中扣除
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`us-epa-40-cfr-1065-15`

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定默认基本流输入。仅在研究需要完整元素质量平衡且已获得精确流身份时，才需增加进气。

#### 输出

##### 产品流

###### 工厂大门处合格完整发动机（`reference_engine_output`）

这是参考产品。通用天工产品流 UUID 尚未解决；不得以排除在范围外的航空发动机流或范围较窄的柴油或小型汽油发动机身份替代。

- 选定流：机动车辆和航空器用以外的内燃活塞发动机
- 流属性/单位：Mass / kg
- 数量规则：依据经校准的产品净质量，将合格完整发动机输出归一化至 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_product`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

本 PCR 不规定通用的报废发动机废物流。报废产品若作为废物离开产品系统，应记录其实际具体废物身份和质量；返工产品仍留在过程清单内。

##### 基本流

###### 出厂试验产生的化石源二氧化碳（`carbon_dioxide_fossil_to_air`）

记录燃料出厂试验期间释放的化石源二氧化碳，不包括上游电力排放和下游使用阶段排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：参考期内试验的尾气积分实测质量或燃料碳平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_emissions`
- 来源：`us-epa-40-cfr-1065-15`

###### 出厂试验产生的化石源一氧化碳（`carbon_monoxide_fossil_to_air`）

记录燃料出厂试验期间向未特指空气环境释放的化石源一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：尾气浓度乘以尾气流量，并在每个适用试验区间内积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_emissions`
- 来源：`us-epa-40-cfr-1065-15`

###### 出厂试验产生的氮氧化物（`nitrogen_oxides_to_air`）

依据适用试验方法声明的报告约定，记录燃料出厂试验期间释放的氮氧化物。不得以一氧化二氮替代本 UUID 未解决的流。

- 选定流：排放至未特指空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：尾气浓度乘以尾气流量，并在每个适用试验区间内积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_emissions`
- 来源：`eu-regulation-2016-1628`; `us-epa-40-cfr-1065-15`

###### 出厂试验产生的颗粒物（`particulate_matter_to_air`）

适用试验方法测量 PM 时，记录燃料出厂试验期间释放的粒径未特指颗粒物。实测粒径组分应作为额外的独立流保留；未披露时不得替代本身份。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：根据适用试验区间内的滤膜或仪器结果及尾气流量计算颗粒物总质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_emissions`
- 来源：`eu-regulation-2016-1628`; `us-epa-40-cfr-1065-15`

###### 出厂试验产生的甲烷（`methane_to_air`）

当所声明试验方法测量或要求报告甲烷时，记录燃料出厂试验期间释放的甲烷。精确天工基本流 UUID 尚未解决。

- 选定流：排放至未特指空气的甲烷
- 流属性/单位：Mass / kg
- 数量规则：尾气浓度乘以尾气流量，并在每个适用试验区间内积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格完整发动机输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_emissions`
- 来源：`us-epa-40-cfr-1065-15`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有前景过程 | 优先采用过程细分、分表计量、发动机族生产记录和直接质量跟踪，以避免分配。 |  |
| `allocation_shared_operations` | 共用机加工、装配和公用工程 | 无法直接计量时，共用机床电力按记录的机时及额定或实测负荷分配，清洗按槽体处理量或被处理质量分配，装配公用工程按生产时间分配；披露所选驱动因素及敏感性。 |  |
| `allocation_scrap` | 金属切屑和其他废物 | 在废物离开前景系统的节点报告废物输出。不得从前景清单中扣除废料销售收入或所避免的原生材料负担；任何回收收益均属于单独声明的下游建模约定。 |  |
| `allocation_test_power` | 测功机能量 | 将输入电力、回收轴功和输出电力分别作为独立交换保留。不得将回收或输出能量与试验台输入电力静默净额处理。 | `us-epa-40-cfr-1065-15` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `component_machining` | 外购金属投入 | 经批准的 BOM、收货、领用和库存记录 | engine_model; material_grade; product_form; supplier; received_mass; issued_mass; opening_stock; closing_stock; rejects | 将采购和仓储记录与经批准的发动机族 BOM 进行协调 | kg | 每次收货并按月协调 | 至少连续 12 个有代表性的月份，或完整的较短生产活动 | 所声明场址内所有供应仓库和机加工区域 | 按材料身份汇总净领用质量，并除以合格参考产品质量 | 经校准的秤；供应商证书；BOM 版本；库存协调记录 |
| `cp_machining_consumables` | `component_machining` | 切削液和工艺用水 | 采购、补加、回收、槽位和分表记录 | fluid_product; concentration; opening_stock; receipts; make_up; recovered_return; closing_stock; water_meter | 对切削液进行物料平衡，对水采用直接计量或槽体平衡 | kg | 每次添加；按月平衡 | 与生产相同的参考期 | 范围内所有机加工系统 | 计算净投入；仅使用有记录的机时或处理质量分配共用系统；按合格输出归一化 | 槽体标定；采购发票；仪表检查；浓度测试 |
| `cp_process_energy` | 所有过程 | 输入电力 | 收益计量表、过程分表、设备运行时间和生产记录 | meter_start; meter_end; process_id; runtime; rated_or_metered_load; imported_kWh; exported_kWh; accepted_output_mass | 优先使用过程分表；否则按记录的运行时间和负荷分配场址电力 | kWh 和 MJ | 连续或每班；按月协调 | 与生产相同的参考期 | 范围内所有生产和试验区域 | 输入 kWh × 3.6 MJ/kWh；输出或回收电力单独保留；按合格输出归一化 | 仪表校准；区间数据；分配工作表；电网合同 |
| `cp_internal_transfers` | `component_machining`; `assembly_finishing`; `final_inspection_testing` | 内部产品转移 | 转移单、生产执行记录和校准秤记录 | source_process; destination_process; engine_model; quantity; net_mass; timestamp; acceptance_status | 在各转移关口称量，或依据件数和经验证的型号质量推导 | kg | 每批或每班 | 完整参考期 | 范围内所有内部转移点 | 配对每项输出和输入；汇总前调查非零转移差异 | 秤校准；匹配的转移 ID；报废与返工日志 |
| `cp_assembly_consumables` | `assembly_finishing` | 油品、清洗剂和工艺用水 | 加注规格、领用记录、槽液日志、浓度测试、水表和库存记录 | engine_model; oil_fill_mass; cleaner_product_mass; concentration; bath_make_up; water_input; opening_stock; closing_stock | 直接测量加注量，并对产品或槽液进行物料平衡 | kg | 每批或每班；按月协调 | 与生产相同的参考期 | 范围内所有清洗、加注和装配线 | 按具体流汇总产品净消耗量，并按合格输出归一化 | 经校准的加注器；浓度测试；仪表检查；批准的加注规格 |
| `cp_waste_outputs` | `component_machining`; `assembly_finishing` | 切屑、废液和废水 | 地磅单、废物联单、料箱或槽位、排放表和库存记录 | waste_identity; origin_process; opening_stock; generated_or_shipped_mass; closing_stock; destination; treatment_route | 分类收集后经校准称重，或采用槽体/排放平衡 | kg | 每次出运并按月协调 | 与生产相同的参考期 | 范围内所有废物储存和排放点 | 出场质量加期末库存减期初库存；避免重复计算夹带液体和游离切屑 | 秤或仪表校准；联单；去向接收证明；库存协调记录 |
| `cp_test_fuels` | `final_inspection_testing` | 燃料出厂试验投入 | 试验台燃料表、批次证书、库存记录和试验日志 | engine_family; engine_id; fuel_grade; biofraction; density; gas_composition; reference_conditions; opening_stock; receipts; closing_stock; non_test_use; test_cycle | 优先直接计量试验台燃料；否则将燃料库存平衡与试验日志协调 | kg 或 m3 | 每次试验；每日或按月平衡 | 完整参考期 | 范围内所有试验台 | 分别汇总每种具体燃料，扣除有记录的非试验使用量，并按合格输出归一化 | 仪表校准；燃料证书；匹配的发动机与试验 ID；库存协调记录 |
| `cp_test_emissions` | `final_inspection_testing` | 直接尾气组分 | 分析仪、尾气流量、滤膜、燃料碳、试验循环和试验验收记录 | engine_id; test_interval; constituent; concentration; exhaust_flow; sample_flow; filter_mass; fuel_carbon; work; result_status | 对每个实际试验区间采用所声明的实验室或验收试验方法 | kg | 每次燃料试验 | 完整参考期或有统计依据的抽样方案 | 范围内所有热试验台及所代表发动机族 | 在各区间内积分组分质量，汇总分配至生产的合格与失败试验负担，并按合格输出归一化 | 分析仪校准；零点/量程检查；流量校准；滤膜操作日志；试验方法标识 |
| `cp_final_product` | `final_inspection_testing` | 合格参考产品 | 经校准的最终质量、序列号放行和生产记录 | engine_id; model; net_mass; included_fluids; included_accessories; packaging_mass; release_status; release_date | 称量完整产品，或使用经验证并定期通过秤确认的型号特定质量 | kg | 每台或同质批次 | 完整参考期 | 范围内所有工厂大门放行产品 | 汇总不含运输包装的合格净质量，并将清单归一化至恰好 1,000 kg | 秤校准；序列号放行日志；型号规格；包装皮重检查 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 参考期交换量 ÷ 合格发动机净质量 × 1,000 kg | 具体交换量；合格发动机净质量 | 每 1,000 kg 合格发动机的交换量 |  |
| `calc_material_balance` | 材料、液体和废物 | 净消耗或产生量 = 期初库存 + 接收或产生量 − 退回量 − 期末库存，同时协调转移和重复计算的夹带物料 | 库存、接收、退回、转移和出运记录 | 前景净交换量 |  |
| `calc_electricity` | 电力行 | 输入电力（MJ）= 输入电表 kWh × 3.6；输出或回收能量仍为独立输出 | 输入 kWh；输出 kWh；过程分配驱动因素 | 输入电力（MJ）及单独披露的输出 |  |
| `calc_test_emission_mass` | 直接试验排放 | 组分质量 = 在试验区间内对组分浓度 × 对应原始或稀释尾气流量进行积分，并采用所声明方法要求的单位与稀释修正 | 浓度；尾气流量；区间持续时间；稀释和湿度修正 | 每次试验及每参考流的各组分质量（kg） | `us-epa-40-cfr-1065-15` |
| `calc_fossil_co2_balance` | 未直接测量时的化石源二氧化碳 | 化石源 CO2 = 试验燃料中已氧化的化石碳 × 44/12，并计入其他实测尾气组分和残留燃料中的碳 | 燃料质量或体积；组成；化石碳比例；实测含碳组分 | 化石源二氧化碳质量（kg） | `us-epa-40-cfr-1065-15` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和外购投入 | 保留发动机型号/族、用途、点火原理、燃料、额定功率、排量、所含附件、材料牌号、供应商和产品形态，以区分建模产品与投入。 | 经批准的规格、BOM、供应商证书和产品放行记录 |
| `dq_temporal` | 所有前景记录 | 使用一个共同参考期，通常为至少连续 12 个有代表性的月份；披露更短的生产活动、停产、异常试验和发动机组合变化。 | 带日期的计量、生产、采购、库存、废物和试验记录 |
| `dq_measurement` | 质量、能量、体积和尾气记录 | 使用经校准的仪器并保留单位与参考条件；保留换算公式、分配驱动因素以及零点/量程或仪表检查记录。 | 校准证书、原始文件和计算工作簿 |
| `dq_completeness` | 所有过程 | 协调 BOM 投入、内部转移、合格与报废输出、废物、燃料和试验记录；说明每个缺失的条件适用行及每项残余物料不平衡。 | 经签署的协调记录和适用性矩阵 |
| `dq_representativeness` | 上游数据集 | 尽可能匹配供应商地域、材料路线、电网、燃料牌号和技术；披露代理数据集及其贡献。 | 供应商声明、合同、数据集元数据和代理日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_product_identity` | 参考流 | 若产品为机动车辆用发动机、航空器用发动机、燃气轮机、完整发电机组或仅零部件输出，或缺少必需发动机限定信息，则数据包校验失败。 | `un-cpc-3-0-structure-2025` |
| `validation_reference_amount` | 参考产品 | 确认归一化后的合格完整发动机净质量恰好为 1,000 kg，且不含运输包装。 |  |
| `validation_internal_transfers` | 内部中间产品 | 对每项转移身份，在记录报废、返工和库存调整后，要求配对的内部输出与输入数量一致。 |  |
| `validation_material_reconciliation` | 材料和废物行 | 使主要金属投入与产品、切屑、报废零件和库存变动相协调；调查并披露残余不平衡，不得强行闭合。 |  |
| `validation_test_applicability` | 试验燃料和排放 | 对每个进行热试验的发动机族，要求记录其具体燃料行、试验循环/方法标识、试验负担及所声明方法要求或实测的每种组分；不进行热试验的路线必须提供有依据的不适用证据。 | `eu-regulation-2016-1628`; `us-epa-40-cfr-1065-15` |
| `validation_uuid_semantics` | 带 UUID 的行 | 发布前确认公开 state-100 流身份、流类型、分类、属性、单位组、产品状态、地域、技术和一般性评论；未解决的通用流和内部流仍是发布阻塞项，不构成使用代理流的许可。 |  |
| `validation_ranges` | 重要流 | 将缺少外部范围的情况作为已声明证据需求处理，并使用采集的前景值；不得依据单一案例、摘要片段或边界不兼容来源虚构数值范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完成的前景数据包经审查和发布后可作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 发动机从摇篮到工厂大门生产建模，以及作为设备、船舶、轨道交通、固定动力、农业、建筑施工或其他非道路产品系统的上游供应 |
| allowed_use | 用于所声明发动机族、制造路线、生产地域、时期、燃料与试验配置以及所含附件或后处理装置；仅当按生产质量加权并披露产品组合时，才允许跨型号汇总 |
| excluded_use | 机动车辆或航空器用发动机；发动机运行或寿命性能；再制造发动机；完整发电机组；仅零部件产品；未经明确代理评估的未代表地域、技术或发动机族 |
| required_metadata | PCR id 和版本；发动机用途及族/型号；点火原理；燃料；额定净功率；排量；转速和冷却等级；排放阶段或不受监管状态；后处理装置和附件；净质量；出厂试验路线和循环；外购与场内制造零部件范围；地域；参考期；分配；上游数据集清单；未解决流日志 |
| required_quality_disclosure | 前景覆盖；时间覆盖；初级数据比例；仪表与秤校准；BOM 和质量平衡协调；试验抽样覆盖；燃料和尾气方法；条件适用行适用性；代理数据集；不确定性和未解决范围证据 |
| update_trigger | 发动机族或产品组合、材料或供应商路线、机加工技术、清洗化学品、装配范围、试验方法或时长、试验燃料、后处理装置、排放阶段、场址电力组合、地域或分配驱动因素发生变化，或距代表性参考期超过三年 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | CPC 43110 官方分类身份和排除性表述 |
| `niosh-metalworking-fluids-2013` | `official_guidance` | 美国国家职业安全卫生研究所，《Metalworking Fluids》，最后审查于 2013-08-16，https://archive.cdc.gov/www_cdc_gov/niosh/topics/metalworking/default.html（检索日期：2026-09-05） | 机加工和磨削过程分解；切削液使用；金属颗粒和受污染废液清单 |
| `eu-jrc-surface-treatment-metals-plastics-2006` | `official_guidance` | 欧盟委员会联合研究中心，《Surface Treatment of Metals and Plastics BREF》，2006-08 采纳，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics（检索日期：2026-09-05） | 条件适用的水基化学清洗及相关工艺用水和废水边界 |
| `eu-regulation-2016-1628` | `standard` | 欧洲议会和欧盟理事会第 (EU) 2016/1628 号条例，ELI http://data.europa.eu/eli/reg/2016/1628/oj（检索日期：2026-09-05） | 适用发动机的非道路发动机型式/发动机族披露以及气态与颗粒污染物覆盖 |
| `us-epa-40-cfr-1065-15` | `standard` | 美国环境保护署，40 CFR 1065.15，《Overview of procedures for laboratory and field testing》，https://www.ecfr.gov/current/title-40/chapter-I/subchapter-U/part-1065/subpart-A/section-1065.15（检索日期：2026-09-05） | 出厂试验燃料/功记录及尾气组分质量测量或计算方法 |
