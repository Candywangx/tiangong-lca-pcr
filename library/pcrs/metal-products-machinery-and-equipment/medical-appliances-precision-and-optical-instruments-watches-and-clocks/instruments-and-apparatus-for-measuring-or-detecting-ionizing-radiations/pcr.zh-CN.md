---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-detecting-ionizing-radiations
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 测量或探测电离辐射用仪器及器械

## 1. 范围与适用性

本 PCR 适用于主要功能为测量或探测电离辐射的完整仪器及器械的生产。涵盖产品包括作为完整仪器供应的便携式和固定式辐射监测仪、巡测仪、剂量或剂量率仪、污染监测仪、计数器、谱仪、剂量计和放射性核素活度计。具体探测器原理、辐射类型、被测量、应用等级和适用性能标准属于产品限定信息，而不是独立 PCR 身份。

前景边界涵盖外购材料、部件、探测器组件和分总成的接收；如在场址内实施，则包括探测器或传感器制造、印制电路板制造或组装、外壳制造和表面处理；还包括最终装配、作为运行整体组成部分的软件或固件加载、校准和性能验证，以及制造场址内包装。外购物料的上游生产通过所链接的上游数据集表示。

探测器模块、传感器模块、裸探测器、单独销售的替换零件、单独销售的附件、作为产品销售的电离辐射源、产生辐射的医疗或工业治疗/检测设备，以及主要功能为测量非电离辐射的仪器，不得作为本 PCR 的参考产品。使用、维护、出厂门后的运输及寿命终止处理不属于制造前景边界；在生命周期模型中纳入这些阶段时，必须使用单独的情景数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-detecting-ionizing-radiations |
| classification_refs | CPC 3.0：48241 — 测量或探测电离辐射用仪器及器械 |
| covered_products | 主要功能为测量或探测电离辐射的完整仪器，包括便携式和固定式监测仪、巡测仪、剂量或剂量率仪、污染监测仪、计数器、谱仪、剂量计和放射性核素活度计 |
| excluded_products | 探测器或传感器模块及裸探测器；单独供应的零件和附件；作为产品供应的放射性源；产生辐射的治疗或检测设备；非电离辐射仪器 |
| representative_product | 在制造场址门口交付的、经过校准、功能验证并验收合格的完整电离辐射测量或探测仪器 |
| production_route | 外购部件和分总成、按条件纳入的场内探测器/电子/外壳生产、最终装配、作为整体组成部分的软件或固件加载、校准和性能验证及包装 |
| market_state | 在制造场址门口供应的、经过校准和功能验证的新制成品仪器；包装与仪器净质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 经校准和性能验证后验收合格的完整电离辐射测量或探测仪器净质量 |
| How much | 1 kg 成品仪器净质量，不含运输和销售包装 |
| How well | 按所声明配置完整且可运行；依据制造商试验计划及所声明的应用特定校准和性能要求验收合格 |
| How long or cycle | 所声明报告期或生产批次内生产的产出 |
| reference_flow_link | 过程 `calibration_and_performance_verification` 中的 `finished_instrument_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 测量或探测电离辐射用仪器及器械 `0144e43c-eb28-46f2-be33-804023379cf1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品型号或产品族；探测器原理；辐射类型；被测量；额定测量或探测范围；便携式、固定式或集成式配置；应用或性能等级；随附探头、附件、电池和软件；生产地域和场址；采用的校准和性能标准；校准配置和参考辐射或辐射源；仪器净质量；作为整体组成部分的固件或软件版本 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在校准和性能验证后、包装前测量验收合格完整仪器的净质量；将清单准确归一化到 1 kg。 |
| `packaging_mass_separation` | 销售和运输包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料分别测量包装，不得将其计入参考产品质量。 |
| `item_to_mass_conversion` | 以仪器件数记录的生产数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一报告期同一产品型号的实测净质量换算件数；采用产品族时可使用有文件记录的、按产量加权的产品族平均质量，并保留件数和称量记录。 |
| `bom_mass_consistency` | 产品材料、部件、探测器组件、电池、线缆、探头及随产品交付的附件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在一致的装机基准上记录质量，核对物料清单、生产损失与验收产出，不得静默计入包装。 |
| `energy_carrier_preservation` | 电力、燃料、压缩空气和外购热能 | 能源载体特定属性 | 能源载体特定参考单位 | 保留计量的能源载体与单位；记录向报告单位的每项换算，共享消耗仅按所声明分配规则进行分配。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate_inputs` | 外购材料、零件、部件、分总成、公用工程和服务 | 为跨越前景边界的所有材料和能源投入纳入上游数据集，并纳入所声明目标和范围要求的全部环境相关前景流。 | `eu-pef-2021-2279` |
| `boundary_foreground_operations` | 制造场址作业 | 纳入适用的探测器制造、电子及印制电路板作业、外壳制造和表面处理、最终装配、作为整体组成部分的软件或固件加载、校准和性能验证、返工、清洁及包装；披露外包步骤。 | `iec-61010-1-2010-amd1-2016`; `us-epa-pcb-pollution-prevention-1990` |
| `boundary_calibration_testing` | 校准和性能验证 | 纳入电力、耗材、参考源或参考辐射场服务、试验失败、复测及可归属的设施运行。声明适用的仪器标准并保留试验和校准记录；不得把一个性能判据用于所有仪器类型。 | `iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023` |
| `boundary_packaging` | 制造场址内包装 | 将包装材料和包装过程能源作为单独清单流纳入；包装质量不得计入 1 kg 仪器净质量参考流。 | `eu-pef-2021-2279` |
| `boundary_downstream_exclusion` | 使用、维护和寿命终止 | 从制造前景数据集中排除下游阶段。生命周期模型纳入这些阶段时，必须采用所声明的使用寿命、耗电、维护、再校准、收集和处理情景，并识别适用的电气电子设备义务。 | `eu-weee-2012-19-consolidated-2024` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址门口接收的外购原材料、电子零件、探测器或传感器组件、机械零件、电池或电源零件、线缆、显示器、紧固件、包装材料、公用工程及外包服务 |
| starting_condition_role | 制造作业明确的前景进入条件 |
| product_classification_scope | CPC 3.0 子类 48241 的完整仪器及器械；模块和单独供应的部件属于投入或其他产品，不是本 PCR 参考产品 |
| recursive_input_rule | 外购同类别完整仪器作为产品投入记录，链接上游数据集，并声明其再使用、集成或配置角色；不得在接收过程中递归重建其生产 |
| upstream_dataset_requirement | 将每项外购材料、部件、分总成、公用工程、校准服务和外包制造步骤链接至可获得的最具代表性的上游数据集；披露代理数据在地域、技术和时间方面的缺口 |
| disclosure | 声明探测器技术、辐射类型、被测量、产品配置、随附附件、场内及外包作业、校准依据、报告期、生产场址、净质量、包装基准、分配选择、数据缺口及排除的生命周期阶段 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `detector_subassembly_production` | 探测器或传感器分总成生产 | conditional | 报告组织实施探测器或传感器制造、填充、封装或集成时纳入 | 前景探测器生产 | 转移至最终装配的合格探测器或传感器分总成 kg |
| `electronics_and_pcb_production` | 电子组件及印制电路板生产或组装 | conditional | 报告边界内实施印制电路板制造、贴装、焊接、清洗或电子测试时纳入 | 前景电子组件生产 | 转移至最终装配的合格电子组件 kg |
| `enclosure_and_mechanical_parts` | 外壳和机械零件制造及表面处理 | conditional | 报告边界内实施成形、机加工、注塑、涂覆、镀覆或其他表面处理时纳入 | 前景机械生产 | 转移至最终装配的合格外壳和机械零件 kg |
| `final_instrument_assembly` | 最终仪器装配和配置 | required | 对完整仪器始终纳入 | 前景集成探测器、电子组件、外壳、电源系统、探头、线缆、显示器、附件及作为整体组成部分的软件或固件 | 转移至校准和性能验证的组装仪器 kg |
| `calibration_and_performance_verification` | 校准和性能验证 | required | 对验收合格的完整仪器始终纳入 | 前景校准、功能和安全检查、性能验证、试验失败处理及返工路径 | 验收合格仪器净质量 kg |
| `packaging` | 包装 | required | 产品离开制造场址前实施包装时始终纳入 | 前景包装，包装质量与仪器净质量分开 | 包装后的验收仪器 kg 及按材料分列的包装 kg |

### 过程：探测器或传感器分总成生产（`detector_subassembly_production`）

#### 输入

##### 产品流

###### 探测器材料、零件和外购传感元件（`detector_materials_parts`）

记录成为场内制造探测器或传感器分总成一部分的每项材料、零件、气体、闪烁体、半导体元件、光学部件、电极、壳体、密封件和外购传感元件。构建前景数据包时选择精确的天工产品流。

- 选定流：场址和技术特定的探测器材料及零件
- 流属性/单位：Mass / kg；必要时进行件数到质量换算
- 数量规则：按材料或零件测量的领用量减去有记录的未使用退料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格探测器或传感器分总成
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`

###### 探测器生产过程电力和公用工程（`detector_process_energy`）

记录用于探测器制造、填充、封装、清洁及过程内测试的计量或按技术依据分配的电力和其他公用工程。

- 选定流：场址特定电力和公用工程产品流
- 流属性/单位：能源载体特定属性 / 计量单位
- 数量规则：计量的过程消耗或分配的共享表计消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至最终装配的合格探测器或传感器分总成
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utility_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格探测器或传感器分总成（`detector_subassembly_output`）

记录放行至最终装配的探测器或传感器分总成实测质量。该中间产出不是完整仪器参考产品。

- 选定流：技术特定探测器或传感器分总成产品流
- 流属性/单位：Mass / kg
- 数量规则：放行至最终装配的合格分总成实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格探测器或传感器分总成
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`

##### 废物流

###### 探测器生产不合格品和危险残余物（`detector_reject_waste`）

按处理路径和监管分类分别记录被拒收的传感元件、不合格探测器材料、受污染擦拭物、废过程化学品及其他废物。

- 选定流：按材料和处理路径区分的场址特定废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移联单、容器或生产日志数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格探测器或传感器分总成
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`

##### 基本流

###### 探测器生产直接排放（`detector_direct_emissions`）

记录场内探测器生产向空气、水或土壤的实测或按许可方法计算的排放，包括与技术特定气体或化学品相关的任何受控排放；不得仅凭外购材料质量推断排放。

- 选定流：场址特定基本流
- 流属性/单位：流特定属性 / 报告单位
- 数量规则：实测排放或采用有文件记录的方法按监测活动计算的排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格探测器或传感器分总成
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`

### 过程：电子组件及印制电路板生产或组装（`electronics_and_pcb_production`）

#### 输入

##### 产品流

###### 印制板、电子元器件、焊料、助焊剂和过程材料（`electronics_materials`）

记录外购印制板、半导体、无源元件、连接器、显示器、焊料、助焊剂、涂层、清洗剂及其他电子材料。场内制造裸印制电路板时，分别记录清洁、表面准备、镀覆、掩膜和蚀刻投入及废物。

- 选定流：场址特定电子元器件和过程材料产品流
- 流属性/单位：Mass / kg，或以实测部件质量换算的件数
- 数量规则：实测领用量减去有记录的未使用退料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格电子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：`us-epa-pcb-pollution-prevention-1990`

###### 电子生产电力和公用工程（`electronics_process_energy`）

记录用于电路板制造或贴装、焊接、清洗、涂覆及电子测试的计量或按技术依据分配的能源。

- 选定流：场址特定电力和公用工程产品流
- 流属性/单位：能源载体特定属性 / 计量单位
- 数量规则：计量的过程消耗或分配的共享表计消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至最终装配的合格电子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utility_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格电子组件（`electronics_output`）

记录放行至最终仪器装配的电子组件实测质量。

- 选定流：产品特定电子组件流
- 流属性/单位：Mass / kg
- 数量规则：放行至最终装配的合格电子组件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至最终装配的合格电子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`

##### 废物流

###### 电子不合格品、废溶液和废水（`electronics_waste`）

记录前景边界内作业产生的不合格电路板和元件、焊料和助焊剂残余、废镀液或蚀刻液、漂洗水及其他废物。

- 选定流：按处理路径区分的场址特定废物和废水流
- 流属性/单位：Mass / kg；废水体积换算质量时采用实测密度
- 数量规则：实测废物转移量、槽液更换量、废水表计或生产日志数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格电子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`
- 来源：`us-epa-pcb-pollution-prevention-1990`

##### 基本流

###### 电子生产直接排放（`electronics_direct_emissions`）

记录场内电路板制造、焊接、清洗、涂覆及相关处理系统向空气、水和土壤的实测或按许可方法计算的排放。

- 选定流：场址特定基本流
- 流属性/单位：流特定属性 / 报告单位
- 数量规则：实测排放或根据监测活动形成的有文件记录的计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格电子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`
- 来源：`us-epa-pcb-pollution-prevention-1990`

### 过程：外壳和机械零件制造及表面处理（`enclosure_and_mechanical_parts`）

#### 输入

##### 产品流

###### 外壳和机械材料（`enclosure_materials`）

记录用于场内成形、机加工、注塑和表面处理的金属、聚合物、玻璃、屏蔽材料、紧固件、涂料、镀覆化学品、清洗剂及外购机械零件。

- 选定流：场址特定材料和过程化学品产品流
- 流属性/单位：Mass / kg
- 数量规则：实测领用量减去有记录的未使用退料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格外壳和机械零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`

###### 机械生产能源和公用工程（`enclosure_process_energy`）

记录场内机械生产和表面处理所用的计量或按技术依据分配的电力、燃料、压缩空气、水和其他公用工程。

- 选定流：场址特定能源和公用工程产品流
- 流属性/单位：能源载体特定属性 / 计量单位
- 数量规则：计量的过程消耗或分配的共享表计消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至最终装配的合格外壳和机械零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utility_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格外壳和机械零件（`enclosure_output`）

记录放行至最终装配的外壳和机械零件实测质量。

- 选定流：产品特定外壳和机械零件流
- 流属性/单位：Mass / kg
- 数量规则：放行至最终装配的合格零件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至最终装配的合格外壳和机械零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`

##### 废物流

###### 机械加工废料、废表面处理材料和废水（`enclosure_waste`）

按材料和处理路径分别记录金属和聚合物废料、废磨料和表面处理介质、废槽液、污泥、漂洗水及其他废物。

- 选定流：按处理路径区分的场址特定废物和废水流
- 流属性/单位：Mass / kg；废水体积换算质量时采用实测密度
- 数量规则：实测废物转移量、槽液更换量、废水表计或生产日志数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格外壳和机械零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`

##### 基本流

###### 机械生产直接排放（`enclosure_direct_emissions`）

记录机加工、注塑、涂覆、镀覆、清洁及场内处理的实测或按许可方法计算的排放。

- 选定流：场址特定基本流
- 流属性/单位：流特定属性 / 报告单位
- 数量规则：实测排放或根据监测活动形成的有文件记录的计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至最终装配的合格外壳和机械零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`

### 过程：最终仪器装配和配置（`final_instrument_assembly`）

#### 输入

##### 产品流

###### 探测器、电子组件、外壳、电源系统、探头、线缆和附件投入（`assembly_components`）

记录交付配置中包含的全部外购和场内分总成及部件，包括探测器组件、电子组件、外壳、显示器、电池或电源、探头、线缆、紧固件和随附附件。外购 Radiation detector module 是投入，而不是完整仪器参考流。

- 选定流：产品特定部件和分总成产品流
- 流属性/单位：Mass / kg，或以实测部件质量换算的件数
- 数量规则：实测领用量减去未使用退料量，并与实际装机物料清单核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至校准和性能验证的组装仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：`eu-rohs-2011-65-consolidated-2021`; `iec-61010-1-2010-amd1-2016`

###### 装配电力和公用工程（`assembly_energy`）

记录用于装配、清洁、软件或固件加载、配置及过程内检查的计量或按技术依据分配的能源。

- 选定流：场址特定电力和公用工程产品流
- 流属性/单位：能源载体特定属性 / 计量单位
- 数量规则：计量的过程消耗或分配的共享表计消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至校准和性能验证的组装仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utility_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待校准的组装仪器（`assembled_instrument_output`）

记录转移至校准和性能验证的组装仪器净质量。

- 选定流：产品特定组装仪器中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至校准和性能验证的组装仪器实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至校准和性能验证的组装仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`

##### 废物流

###### 装配不合格品和部件包装废物（`assembly_waste`）

按材料和处理路径分别记录不合格部件、损坏组件、耗材和来料部件包装。留在场址内的返工不得同时作为废物和新投入重复计算。

- 选定流：按材料和处理路径区分的场址特定废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移量或生产日志数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至校准和性能验证的组装仪器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`

##### 基本流

### 过程：校准和性能验证（`calibration_and_performance_verification`）

#### 输入

##### 产品流

###### 进入校准和验证的组装仪器（`instrument_for_test`）

记录进入校准和性能验证的组装仪器，并保留产品型号、探测器、配置和固件身份。

- 选定流：产品特定组装仪器中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入校准和验证的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_calibration_records`

###### 校准、试验和设施能源（`calibration_energy`）

记录可归属于辐射源预热或辐射场生成、仪器运行、环境调节、安全检查、性能试验、复测及校准设施运行的电力和其他公用工程。

- 选定流：场址特定电力和公用工程产品流
- 流属性/单位：能源载体特定属性 / 计量单位
- 数量规则：计量的试验消耗，或按试验时间和设备负荷进行技术分配的设施消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_calibration_records`
- 来源：`iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023`

###### 校准耗材和参考辐射服务（`calibration_consumables_service`）

记录发生消耗或可归属的可更换夹具、模体或源架、气体、清洁材料、剂量测量耗材、外包校准和参考辐射或辐射源服务。可重复使用的密封校准源属于资本设备，除非研究的基础设施规则要求纳入；不得把其活度作为消耗的质量流记录。

- 选定流：场址特定耗材和校准服务产品流
- 流属性/单位：流特定属性 / 采购或消耗单位
- 数量规则：可归属于受试生产批次的实测消耗量或有文件记录的服务数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_calibration_records`
- 来源：`iec-63465-2026`; `iaea-ssg-85-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的电离辐射成品仪器（`finished_instrument_output`）

本流为定量参考。只有完成所声明的校准、功能、安全和应用特定性能检查后，才记录验收合格仪器。

- 选定流：测量或探测电离辐射用仪器及器械 `0144e43c-eb28-46f2-be33-804023379cf1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg（Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：验收合格仪器实测净质量，准确归一化到 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：准确的 1 kg 验收合格成品仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_production_output_records`
- 来源：`iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023`

###### 转入返工的试验失败仪器（`failed_instrument_rework`）

跟踪返回返工的试验失败仪器，不得把内部转移视为共产品。复测和额外投入继续归属于验收合格产出。

- 选定流：产品特定返工仪器中间流
- 流属性/单位：Mass / kg
- 数量规则：实测质量，或使用型号特定实测质量换算的件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_calibration_records`

##### 废物流

###### 试验不合格品和校准耗材废物（`test_reject_waste`）

按处理路径分别记录报废仪器、不合格零件、废电池、作为受监管废物处理的损坏源或源相关物品，以及校准耗材废物。内部返工不得归类为废物。

- 选定流：按材料和处理路径区分的场址特定废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物转移量或试验日志数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`

##### 基本流

###### 校准或试验期间的直接排放（`calibration_direct_releases`）

仅记录跨越环境边界、向空气、水或土壤的实测或按许可方法计算的物质排放。暴露于受控辐射场本身不作为物质基本流录入；任何须报告的放射性物质排放必须使用适用的放射性核素基本流和实测活度或质量基准。

- 选定流：排放跨越环境边界时采用场址特定基本流
- 流属性/单位：流特定属性 / 报告单位
- 数量规则：实测排放或有文件记录的监管计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emission_records`

### 过程：包装（`packaging`）

#### 输入

##### 产品流

###### 进入包装的验收合格仪器（`accepted_instrument_for_packaging`）

记录验收合格仪器净质量，不得把包装质量加入参考产品。

- 选定流：测量或探测电离辐射用仪器及器械 `0144e43c-eb28-46f2-be33-804023379cf1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入包装的验收合格仪器实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 包装材料（`packaging_materials`）

按材料和重复使用状态分别记录纸箱、包装箱、缓冲材料、薄膜、托盘、标签、说明书、干燥剂及其他包装。

- 选定流：材料特定包装产品流
- 流属性/单位：Mass / kg
- 数量规则：用于验收合格产品的包装材料实测领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`

###### 包装能源（`packaging_energy`）

记录包装所用的计量或分配电力和燃料。

- 选定流：场址特定电力和燃料产品流
- 流属性/单位：能源载体特定属性 / 计量单位
- 数量规则：计量的包装消耗或分配的共享表计消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utility_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制造场址门口的包装仪器（`packaged_instrument_output`）

将验收合格仪器和包装记录为不同数量。参考数量仍为 1 kg 仪器净质量，而不是装运毛质量。

- 选定流：测量或探测电离辐射用仪器及器械 `0144e43c-eb28-46f2-be33-804023379cf1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：准确的 1 kg 验收合格仪器净质量，加上单独报告的包装质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：准确的 1 kg 验收合格成品仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

##### 废物流

###### 包装过程废物（`packaging_waste`）

按材料和处理路径记录边角料、损坏包装、离型纸及其他包装过程废物。

- 选定流：场址特定包装废物流
- 流属性/单位：Mass / kg
- 数量规则：包装废物实测数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收合格仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共享的探测器、电子组件、外壳、装配、试验和包装作业 | 分配前优先按产品型号、探测器技术、生产线和试验路径直接计量并细分过程。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | 仍然共享的材料、能源、设施和试验负荷 | 使用有文件记录的因果物理驱动因素：可获得时用实测消耗；能源采用机器或试验时间乘以可归属负荷；材料处理采用处理质量；只有真正共享的设施服务才使用占用面积与时间。 | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | 不存在可辩护物理关系的共享负荷 | 经济分配只可作为最后手段。声明产品、价格基准、地域、时期、价格来源及对价格变化的敏感性。 | `eu-pef-2021-2279` |
| `allocation_rework_rejects` | 内部返工、试验失败、不合格品、废料和回收材料 | 将返工、复测和不合格品负荷归属于验收合格产出。在边界处记录废物；除非下游建模方法明确要求并记录，否则不得在前景清单内扣除回收收益。 | `eu-pef-2021-2279`; `eu-weee-2012-19-consolidated-2024` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `detector_subassembly_production`; `electronics_and_pcb_production`; `enclosure_and_mechanical_parts`; `final_instrument_assembly` | 材料、部件、探测器组件、电子组件、外壳零件、电源系统、探头、线缆和附件 | ERP 领退料记录、物料清单、采购记录、批次表、称量记录 | product_model; part_id; material_or_component; supplier; quantity_issued; quantity_returned; unit; measured_mass; included_configuration; lot; process_id | 将领用减退料量与实际装机物料清单核对，并用实测零件质量换算件数 | 原始采购单位和 kg | 每批次或生产订单 | 与验收产出相同的报告期 | 每个纳入的制造场址及作为前景表示的外包步骤 | 按流和过程汇总净消耗量，再用 `calc_reference_normalization` 归一化 | 批准的物料清单、秤校准、批次追溯、供应商声明及核对记录 |
| `cp_energy_utility_records` | 全部前景过程 | 电力、燃料、压缩空气、水和外购热能 | 表计、分表、账单、设备功率及运行时间日志 | meter_id; carrier; opening_reading; closing_reading; unit; process_id; equipment_id; operating_time; rated_or_measured_load; allocation_driver | 优先使用过程表计；否则以有文件记录的因果驱动因素分配共享表计 | 能源载体特定计量单位 | 至少每月；间歇性高负荷试验按批次 | 完整的所声明报告期 | 每个纳入场址 | 按能源载体和过程汇总，扣除有记录的非生产用途，实施分配后用 `calc_reference_normalization` 归一化 | 表计校准或账单、覆盖核对、分配工作表及设备负荷证据 |
| `cp_production_output_records` | 全部前景过程 | 合格中间产出和验收合格成品产出 | 生产放行、质量放行、计数记录及经校准的称量记录 | product_model; process_id; lot; quantity_count; gross_mass; tare; net_mass; acceptance_status; release_time | 称量放行产出；只有同型号或有文件记录的按产量加权实测质量才可换算件数 | kg 和件数 | 每批次 | 完整的所声明报告期 | 每个纳入场址 | 仅汇总验收合格净产出；不合格和返工数量分开 | 经校准的秤记录、质量放行、批次谱系及件数到质量工作表 |
| `cp_test_calibration_records` | `calibration_and_performance_verification` | 校准、功能、安全、环境、电磁、机械、辐射、固件、试验失败和复测活动 | 校准证书、试验日志、设备日志、辐射源或辐射场证书、服务记录 | product_model; serial_or_lot; detector; firmware; test_standard; test_method; measured_quantity; radiation_type; reference_source_or_field; source_certificate; test_equipment; result; acceptance_limit; pass_fail; test_time; energy; consumables; rework; retest | 采集每项必需试验和校准事件及其可归属资源；保留应用特定判据 | 试验特定单位、hour、kWh、kg 和件数 | 按所声明标准和试验计划，对每台仪器或有统计依据的生产批次 | 完整的所声明报告期 | 每个纳入的校准和试验设施 | 按产品型号汇总可归属资源及失败情况；归一化到验收合格净产出 | 可追溯校准或源证书、受控程序、试验设备校准、原始结果、验收记录及复测历史 |
| `cp_waste_emission_records` | 全部前景过程 | 固体和液体废物、废水及直接排放 | 废物联单、地磅单、废水表、实验室分析、烟道或排口监测、许可计算 | process_id; waste_or_emission; quantity; unit; date; treatment_route; destination; measurement_method; calculation_factor; regulated_classification | 尽可能在源头测量；否则核对设施总量并采用因果驱动因素分配 | 流特定单位 | 每次转移或监测间隔 | 完整的所声明报告期 | 每个纳入场址 | 按流、环境区室和处理路径汇总；仅扣除有文件记录的范围外数量；归一化到过程产出或参考流 | 联单、表计校准、实验室报告、许可方法、因子来源和质量平衡核对 |
| `cp_packaging_records` | `packaging` | 包装材料、包装废物及装运毛质量与净质量 | 包装规范、领用记录、称量记录和废物记录 | product_model; packaging_material; reusable_status; quantity; unit; packaging_mass; net_instrument_mass; gross_shipped_mass; waste_mass | 称量或采用受控包装规范，并将仪器净质量加包装与装运毛质量核对 | kg 和件数 | 每项包装规范及生产批次 | 与验收产出相同的报告期 | 每个纳入的包装场址 | 汇总每件验收产品按材料分列的包装，并归一化到 1 kg 仪器净质量 | 批准的包装规范、经校准的称量记录、重复使用证据及毛净质量核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景投入、产出、废物和基本流 | 归一化数量 = 报告期归属于产品族的流数量 / 报告期验收合格成品仪器净质量（kg） | 可归属流数量；来自 `cp_production_output_records` 的验收合格成品仪器净质量 | 每 1 kg 验收合格成品仪器净质量的流数量 | `eu-pef-2021-2279` |
| `calc_count_to_mass` | 仅以件数记录的数据 | 质量 = 件数 × 同型号、同配置、同报告期的实测平均净质量；产品族采用所声明的按生产件数加权平均值 | 件数；型号特定实测净质量；生产组合 | kg |  |
| `calc_shared_energy` | 共享电力和公用工程表计 | 可归属能源 = 共享消耗总量 × 有文件记录的因果驱动因素份额；无法直接分表时使用设备试验或运行时间乘以可归属负荷 | 计量的共享消耗；设备负荷；运行或试验时间；生产记录 | 分配至产品的能源载体特定能源 | `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | 物料清单、中间产出、验收产品、不合格品、废物和未使用退料 | 核对投入质量与产品组成质量、未使用退料、转移的中间产出、废物及实测库存变化；报告残差及调查，不得采用虚构验收容差 | 物料领退记录；中间和成品产出质量；废物质量；库存变化 | 材料特定质量平衡表及未解释残差 |  |
| `calc_packaging_separation` | 包装产出 | 装运毛质量 = 验收合格仪器净质量 + 已计入产品配置的随附附件质量 + 包装质量；分别报告仪器净质量和包装 | 仪器净质量；配置记录；按材料分列的包装质量；装运毛质量 | 1 kg 净参考产品加单独的 kg 包装流 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_configuration` | 参考流和产品族 | 保留精确的天工参考流 UUID，并声明所有必需限定信息，包括探测器、辐射类型、被测量、量程、应用等级、随附探头或附件、校准依据及作为整体组成部分的软件或固件。 | 产品规范、配置记录、物料清单、校准/试验计划及 UUID readback |
| `dq_material_completeness` | 物料清单和外购投入 | 覆盖交付配置中包含的全部部件和材料，以及跨越前景边界的全部生产耗材。保留供应商材料声明和适用的有害物质合规证据；披露缺失的供应商质量或代理流。 | 经核对的物料清单、采购和领用记录、供应商声明及适用 RoHS 文件（`eu-rohs-2011-65-consolidated-2021`） |
| `dq_calibration_traceability` | 校准和性能验证 | 识别适用仪器标准，并保留原始结果、验收判据、校准配置、参考辐射或辐射源身份、辐射源或设施证书、设备校准状态、试验失败、返工和复测。 | 受控试验程序、原始试验日志、校准证书、参考源或辐射场证书及放行记录（`iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023`） |
| `dq_temporal_coverage` | 全部前景记录 | 使用一个完整且具有代表性的报告期，或有文件记录且涵盖日常生产、失败、返工、维护和校准活动的生产批次。说明排除项、停产和外推。 | 表计覆盖、生产日历、维护日志、校准计划及核对工作表 |
| `dq_technology_geography` | 前景和上游数据 | 在重要时匹配探测器技术、电子路线、外壳路线、校准设施、电力地域、生产场址及供应商地域。披露每项代理及其预期偏差方向。 | 场址过程图、供应商身份、数据集元数据及代理评估 |
| `dq_mass_energy_closure` | 材料、包装、废物和能源 | 将材料和能源记录与场址及过程总量核对。报告未解释残差和纠正行动；不得通过无记录的平衡流强行闭合。 | 质量平衡表、表计核对、包装毛净质量检查及审查签字 |
| `dq_regulated_waste` | 放射性、危险性、电子及电池相关废物 | 保留受监管分类、适用时的活度或浓度、处理路径、接收方及法律范围。下游 WEEE 处理不纳入制造前景数据集，除非明确增加为独立情景。 | 废物联单、实验室或活度测量、处理证书及适用 WEEE 记录（`eu-weee-2012-19-consolidated-2024`） |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 定量参考 | 除非产品流为 `0144e43c-eb28-46f2-be33-804023379cf1`、流属性为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、单位为 kg，且归一化产出准确为 1 kg 验收合格仪器净质量，否则校验失败。 |  |
| `validate_scope_identity` | 涵盖产品 | 参考产品仅为探测器模块、传感器模块、裸探测器、单独供应的零件或附件、放射性源、产生辐射的治疗或检测设备，或非电离辐射仪器时，校验失败。 |  |
| `validate_required_qualifiers` | 产品元数据 | 缺少任何必需参考流限定信息，或交付配置与记录配置不一致时，校验失败。 | `iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023` |
| `validate_process_coverage` | 过程图和清单 | 缺少最终装配、校准和性能验证或包装时，校验失败；适用的场内探测器、电子、印制电路板、外壳、表面处理或外包作业既未纳入也未披露并链接上游数据集时，校验失败。 | `us-epa-pcb-pollution-prevention-1990`; `eu-pef-2021-2279` |
| `validate_calibration_release` | 验收产出 | 除非所声明的校准和应用特定性能检查可追溯至受控记录，并且每台验收仪器或有依据的生产批次具有通过的放行决定，否则校验失败；不得以通用辐射仪器判据替代所声明产品标准。 | `iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023` |
| `validate_collection_links` | 前景采集和计算行 | 使用 `collected_record` 或 `calculated_from_collection` 的行缺少所声明采集协议，或协议缺少时间、场址、方法、单位、聚合或质量证据时，校验失败。 |  |
| `validate_mass_packaging` | 物料清单、产出、废物和包装 | 仪器净质量包含包装、未按材料单独报告包装，或质量核对没有披露残差和调查时，校验失败。 | `eu-pef-2021-2279` |
| `validate_allocation` | 共享过程 | 共享负荷分配缺少细分评估、有文件记录的因果驱动因素、源数据、计算及敏感性或回退披露时，校验失败。 | `eu-pef-2021-2279` |
| `validate_regulated_flows` | 有害物质、放射性材料和废物 | 适用的受监管材料、活度、有害物质或废物处理信息被静默省略或与产品清单抵销时，校验失败。 | `eu-rohs-2011-65-consolidated-2021`; `eu-weee-2012-19-consolidated-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；只有在产品配置、探测器技术、校准依据、地域和数据质量与使用研究匹配时，方可选作 `background_dataset` |
| downstream_use | 用于过程和 lifecyclemodel 构建的前景数据包；仅在证明功能、性能等级、随附附件、校准依据和边界等效后，方可比较制造路线或配置 |
| allowed_use | 完整 CPC 48241 仪器从摇篮到制造场址门口的建模；供应商和场址改进；贡献分析；匹配技术和配置的背景使用 |
| excluded_use | 无限定信息的单件声明；模块或部件生产；非电离辐射仪器；缺少明确使用、维护、再校准、运输和寿命终止情景的完整生命周期结果；跨不等效测量功能或性能等级的比较 |
| required_metadata | 规范 PCR id；CPC 参考；精确流/流属性/单位组 UUID；全部必需限定信息；产品及随附附件配置；参考净质量；生产和校准场址；报告期；场内和外包过程图；标准和校准依据；分配；上游数据集及代理；包装；受监管材料和废物 |
| required_quality_disclosure | 前景覆盖；验收产出分母；物料清单和质量平衡完整性；表计及分配覆盖；校准和试验可追溯性；试验失败和返工处理；代理数据的时间、地域和技术；包装分离；受监管材料和废物处理；不确定性和未解决缺口 |
| update_trigger | 探测器原理、辐射类型、被测量或量程、性能或应用等级、产品配置、随附探头/附件/电池、材料组成、电子或外壳路线、校准/试验标准、影响测量的固件、生产或校准场址、供应商组合、分配方法、报告期代表性或受监管物质/废物要求发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-48241` | `official_guidance` | 联合国统计司，CPC 子类 48241，“Instruments and apparatus for measuring or detecting ionising radiations”，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/3/48241（检索于 2026-08-10） | 官方产品类别身份及排除仅部件参考产品 |
| `iec-61010-1-2010-amd1-2016` | `standard` | IEC 61010-1:2010+AMD1:2016，Safety requirements for electrical equipment for measurement, control, and laboratory use — Part 1: General requirements，https://webstore.iec.ch/en/publication/4279（检索于 2026-08-10） | 电气测量设备的一般范围及安全相关装配和验证语境 |
| `iec-62244-2019` | `standard` | IEC 62244:2019，Radiation protection instrumentation — Installed radiation portal monitors for the detection of illicit trafficking of radioactive and nuclear materials，https://webstore.iec.ch/en/publication/32885（检索于 2026-08-10） | 表明产品特定的辐射、气候、机械、电气、电磁、文件和试验要求随仪器应用变化 |
| `iec-63465-2026` | `standard` | IEC 63465:2026，Calibration and quality control in the use of radionuclide calibrators，https://webstore.iec.ch/en/publication/74730（检索于 2026-08-10） | 所涵盖仪器族的校准、质量控制、试验记录、应用特定验收以及作为整体组成部分的软件和附件处理 |
| `iaea-ssg-85-2023` | `official_guidance` | 国际原子能机构，Radiation Protection and Radioactive Waste Management in the Design and Operation of Research Reactors，Specific Safety Guide No. SSG-85，2023，https://www-pub.iaea.org/MTCD/Publications/PDF/PUB2049_web.pdf（检索于 2026-08-10） | 仪器技术限定信息、校准可追溯性、经认证的辐射源、校准周期、维护及再校准证据 |
| `us-epa-pcb-pollution-prevention-1990` | `official_guidance` | 美国环境保护署，Guides to Pollution Prevention: The Printed Circuit Board Manufacturing Industry，EPA/625/7-90/007，1990，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30004DTH.TXT（检索于 2026-08-10） | 条件性印制电路板过程分解及相关废槽液、漂洗水、颗粒物和其他废物记录 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations，http://data.europa.eu/eli/reco/2021/2279/2021-12-30（检索于 2026-08-10） | 功能单位、系统边界、材料和能源流完整性、包装、分配层级、前景数据质量及披露 |
| `eu-rohs-2011-65-consolidated-2021` | `standard` | Directive 2011/65/EU on the restriction of the use of certain hazardous substances in electrical and electronic equipment，consolidated text 2021-11-01，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011L0065-20211101（检索于 2026-08-10） | 电气监测和控制仪器适用的有害物质及供应商材料声明证据 |
| `eu-weee-2012-19-consolidated-2024` | `standard` | Directive 2012/19/EU on waste electrical and electronic equipment，consolidated text 2024-04-08，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02012L0019-20240408（检索于 2026-08-10） | 分开记录电气电子设备废物、部件和耗材处理、下游边界披露及寿命终止情景要求 |
