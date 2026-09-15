---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.luminaires-and-lighting-fittings-designed-for-use-solely-with-light-emitting-diode-led-a0afd2c0
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 专为发光二极管（LED）光源设计的灯具和照明配件

## 1. 范围与适用性

本 PCR 适用于专为 LED 光源运行而设计的完整灯具和照明配件。所覆盖的产品用于分配、过滤或转换光线，并包含支撑、固定、保护、连接、热管理及运行 LED 光源所需的结构和部件。声明配置正常工作所必需的集成式或制造商指定控制装置、LED 模组、光学部件、布线、密封件、安装部件及随产品供应的照明控制附件均在范围内。

当声明产品为完整且可销售的灯具时，本 PCR 覆盖室内、室外、建筑、公共空间以及道路照明灯具。本 PCR 不覆盖单独的 LED 芯片、封装、模组、灯、驱动器、电源、光学件、外壳、灯具零件、替换部件、非 LED 或多光源技术灯具、发光标志、自带电源的便携灯具、车辆灯具以及独立销售的特定型号附件。应急照明功能需要采用额外适用规则，不得在未披露的情况下作为普通照明表示。

主要前景结果是制造商门口生产数据集，以 1 kg 完整、经测试且不含包装质量的灯具产品归一化。必须声明每参考 kg 的产品数量、灯具输出光通量、开启模式功率、指定寿命、可更换性、控制配置和预期应用，以便把生产数据集转换为照明服务功能单位，并与分销、安装、使用、维护和报废情景组合。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.luminaires-and-lighting-fittings-designed-for-use-solely-with-light-emitting-diode-led-a0afd2c0 |
| classification_refs | CPC 3.0 `46533`，exact |
| covered_products | 专为 LED 光源设计的完整灯具和照明配件，包括固定式室内灯具、室外灯具、建筑灯具、街道和道路灯具，以及采用可更换或不可更换 LED 光源的完整灯具 |
| excluded_products | 单独销售的 LED 芯片、封装、模组、灯、驱动器或控制装置；灯具零件；不完整的外壳或光学件；非 LED 或混合光源灯具；发光标志；自带电源的便携灯具；车辆灯具；以特定商业型号代表未声明整个类别的情形 |
| representative_product | 完整的电网供电 LED 灯具，包括结构或外壳、热管理、光学系统、LED 光源或模组、驱动器或控制装置、布线和连接器、密封件和紧固件，以及随产品供应的控制或安装附件 |
| production_route | 部件和子组件供应或制造；灯具装配与布线；功能、安全、电气和光度测试；制造商门口前的最终检验与包装 |
| market_state | 制造商门口的完整、功能正常且经测试的灯具；包装单独列入清单，不计入 1 kg 参考产品质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造商门口生产完整、功能正常且专为 LED 光源设计的灯具或照明配件 |
| How much | 1 kg 完整成品灯具，不含包装 |
| How well | 声明配置通过适用的灯具安全和功能检查，并有文件记录灯具输出光通量、开启模式总功率、指定寿命、LED 可更换性、驱动器或控制装置配置以及参考控制设置 |
| How long or cycle | 一个有代表性的生产期；保留把结果转换为 35,000 运行小时内提供 1,000 lm 灯具输出人工光通量所需的产品数据 |
| reference_flow_link | `led_luminaire_finished_mass` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 专为发光二极管（LED）光源设计的灯具和照明配件 `3253c9d6-cf81-41e6-8997-f59f437c3f2d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 完整灯具配置；每参考 kg 的产品数量；不含包装的产品净质量；室内、室外、建筑或道路应用；集成式或可更换 LED 光源状态；LED 模组身份；驱动器或控制装置身份及其集成状态；以 lm 表示的灯具输出光通量；参考控制设置下以 W 表示的开启模式总功率；以 h 表示的指定寿命及支持方法；相关色温；控制与调光功能；供电电压；适用时的 IP 和 IK 等级；制造地域；制造商门口；生产期 |

构建前景数据包时，每一项必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。裸 LED、LED 模组、驱动器、外壳、光学部件或未明确的照明产品不能作为本 PCR 的合格参考产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 完整成品灯具参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含包装的完整功能灯具净质量。该数值必须由校准称量或经核对的部件质量支持，并保留 1 kg 所代表的产品数量。 |
| `component_and_waste_mass` | 材料、部件、包装和废物记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料或部件类别记录质量，并把全部生产期总量转换为每 1 kg 灯具成品的 kg。不得把包装质量并入产品质量。 |
| `outgoing_luminous_flux` | 声明的光度性能 | outgoing luminous flux | lm | 使用灯具输出光通量，不得使用 LED 封装或 LED 模组光通量代替。记录测试方法、被测配置、环境与控制设置以及测试报告标识。 |
| `luminaire_power` | 开启模式下的完整灯具 | electrical power | W | 记录声明参考控制设置下完整照明电路的总功率，包括集成或必需的 LED 光源、驱动器或控制装置以及运行中的控制部件。 |
| `assigned_lifetime` | 声明的完整灯具配置 | operating time | h | 记录指定寿命及其支持测试、寿命推算、质保或技术声明。区分完整灯具寿命、LED 模组寿命和驱动器寿命，并声明可更换性。 |
| `energy_records` | 制造和测试的电力或燃料投入 | energy | kWh; MJ | 使用计量能源或经核对的账单与换算因子。归一化前分别保留电力、热能和燃料。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | accepted_material_component_and_subassembly_lots |
| starting_condition_role | 可追溯供应商的完整 LED 灯具生产投入 |
| product_classification_scope | 完整 LED 专用灯具和照明配件；CPC 3.0 `46533` 仅为分类上下文，不包括 LED 模组、驱动器、灯具零件或非 LED 灯具 |
| recursive_input_rule | 如果外购投入本身就是完整 CPC 46533 灯具，必须将其记录为上游完整灯具数据集并予以披露；不得将其改标为普通部件，也不得重复计为新制造产品 |
| upstream_dataset_requirement | 材料和部件生产、入厂运输以及外购子组件需要供应商特定或有代表性的上游数据集；必须保留数据集身份、地域、技术、再生含量声明和数据期 |
| disclosure | 声明哪些部件在场内制造或外购、完整物料清单、随产品供应的附件、集成和可更换部件、生产场址、截断、分配、包装、测试废品以及纳入或排除的下游情景 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_complete_product` | 参考产品和制造边界 | 纳入结构或外壳、热管理和光学部件、LED 光源或模组、驱动器或控制装置、布线、连接器、密封件、紧固件以及声明完整配置所供应或必需的所有附件。只有部件的系统不能符合要求。 | `pep-ecopassport-psr-0014-2023`; `iec-60598-1-2024` |
| `sb_cradle_to_gate` | 制造商门口前景数据集 | 纳入材料、部件和子组件的上游生产与入厂运输；场内零件制备；装配；布线；表面处理；测试；返工；生产废物处理；以及一级和二级包装生产。 | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `sb_supplier_components` | 外购 LED 模组、驱动器、控制装置、PCB、光学件、外壳或其他子组件 | 对外购部件采用上游数据集，不得仅以交付质量替代部件清单。可获得时记录供应商、技术、地域和再生含量证据。 | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `sb_downstream_projection` | 生命周期模型或从摇篮到坟墓结果 | 声明下游阶段时，纳入分销、安装物项、声明功率和控制设置下的电力、光源和控制装置的维护与更换，以及报废收集和处理。制造、使用和报废应分别报告。 | `pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources`; `eu-2012-19-weee` |
| `sb_cutoff_disclosure` | 全部前景和上游清单 | 当某材料、部件、危险物质、能源投入、直接排放或废物流可能对结果、安全、毒性、稀缺性或报废处理具有实质影响时，不得仅因其质量小而省略。必须披露每项已采用的截断及其影响。 | `pep-ecopassport-pcr-ed4-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_and_subassembly_supply` | 部件与子组件供应或制造 | required | 外购物项采用供应商数据集；场内制造采用场址记录 | 上游和前景部件生产 | 合格部件与子组件输出 |
| `luminaire_assembly` | 灯具装配、布线与表面处理 | required | 完整灯具始终必需 | 前景制造 | 已装配灯具输出 |
| `functional_safety_photometric_testing` | 功能、安全、电气和光度测试 | required | 始终必需；适用测试取决于产品和市场 | 前景质量保证 | 合格经测灯具输出 |
| `final_packaging` | 最终检验与包装 | required | 制造商门口数据集始终必需 | 前景包装 | 离开制造商门口的完整灯具 |
| `distribution_installation_use_maintenance` | 分销、安装、使用与维护情景 | conditional | 生成生命周期模型、照明服务结果或下游声明时必需 | 下游情景 | 情景期内声明的完整灯具配置 |
| `end_of_life_treatment` | 报废收集与处理 | conditional | 生成从摇篮到坟墓或报废结果时必需 | 下游情景 | 进入处理的废完整灯具和更换部件 |

### 过程：部件与子组件供应或制造（`component_and_subassembly_supply`）

#### 输入

##### 产品流

###### 可追溯供应商的物料清单与部件批次（`bom_component_inputs`）

分别记录各材料和部件类别，包括结构与外壳材料、散热器、光学玻璃或聚合物、反射器与扩散器、LED 模组或光源、印制电路组件、驱动器或控制装置、布线、连接器、密封件、紧固件、传感器、控制器、涂层、标签和随产品供应的安装附件。

- 选定流：与记录物项匹配的供应商特定材料、部件或子组件流
- 流属性/单位：Mass / kg
- 数量规则：合格生产所消耗的收货质量，扣除退货和库存变化；无法取得质量发票时，部件数量必须用实测单件质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每合格部件与子组件输出，并最终归一到每 1 kg 灯具成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_component_receipts`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023`

###### 部件制造能源（`component_fabrication_energy`）

记录铸造、成形、机加工、注塑、涂覆、印制电路装配、焊接、固化及其他场内部件工序的计量电力、燃料和外购热能。已由完整上游数据集表示的供应商工序不得重复计入。

- 选定流：场址和载能体特定的电力、燃料或热能流
- 流属性/单位：Energy / kWh or MJ
- 数量规则：计量过程能源，或按工程方法把经核对的设施能源分配至声明生产线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每合格部件与子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`pep-ecopassport-pcr-ed4-2021`

#### 输出

##### 产品流

###### 合格部件与子组件集合（`accepted_component_set`）

记录转入灯具装配的合格部件与子组件质量，并按物料清单所用相同类别分别记录。

- 选定流：合格灯具部件与子组件集合
- 流属性/单位：Mass / kg
- 数量规则：实测或经核对的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_output`
- 来源：`pep-ecopassport-psr-0014-2023`

##### 废物流

###### 部件制造废料与废品（`component_scrap_rejects`）

按处理路线分别记录金属、聚合物、玻璃、电子、涂层、溶剂、污泥和混合废料，包括未退回供应商的不合格外购件。

- 选定流：材料和处理路线特定的制造废物流
- 流属性/单位：Mass / kg
- 数量规则：离开过程的称量废物，并与库存变化和供应商退货核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每合格部件与子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023`

##### 基本流

###### 部件制造直接排放（`component_direct_releases`）

记录场内制造、表面处理、涂覆、焊接、清洗或废水处理产生的空气和水体实测或许可报告直接排放。不得重复计入已包含于外购能源或供应商数据集的排放。

- 选定流：物质和环境介质特定的基本流
- 流属性/单位：Mass / kg
- 数量规则：可归属于声明过程的烟气、排放、溶剂平衡或许可记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每合格部件与子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_releases`
- 来源：`pep-ecopassport-pcr-ed4-2021`

### 过程：灯具装配、布线与表面处理（`luminaire_assembly`）

#### 输入

##### 产品流

###### 合格结构、光学、LED 和控制部件（`assembly_component_inputs`）

记录进入装配的合格部件集合，包括使声明灯具按销售或指定方式正常工作的全部必要物项。

- 选定流：合格灯具部件与子组件集合
- 流属性/单位：Mass / kg
- 数量规则：按发料质量和数量记录，并与合格装配输出及退料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每已装配灯具输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_material_issue`
- 来源：`pep-ecopassport-psr-0014-2023`

###### 装配辅料与消耗品（`assembly_auxiliaries`）

记录跨越装配边界的焊料、电线、连接器、热界面材料、胶粘剂、密封剂、润滑剂、清洗剂、涂层、标签和其他消耗品。

- 选定流：产品特定的辅助材料流
- 流属性/单位：Mass / kg
- 数量规则：采购或发放数量，扣除库存变化、退料和单独记录的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已装配灯具输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_auxiliary_materials`
- 来源：`pep-ecopassport-pcr-ed4-2021`

###### 装配与表面处理能源（`assembly_energy`）

记录装配、布线、紧固、密封、固化、清洗和表面处理所用电力、燃料及热能。

- 选定流：场址和载能体特定的电力、燃料或热能流
- 流属性/单位：Energy / kWh or MJ
- 数量规则：计量生产线能源，或按有文件记录的方法分配经核对的设施能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已装配灯具输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`pep-ecopassport-pcr-ed4-2021`

#### 输出

##### 产品流

###### 最终测试前的完整已装配 LED 灯具（`assembled_luminaire`）

记录转入测试的完整已装配灯具的质量和数量，包括集成或指定的 LED 光源与控制装置。

- 选定流：专为发光二极管（LED）光源设计的灯具和照明配件 `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- 流属性/单位：Mass / kg
- 数量规则：实测或经核对的装配质量和合格件数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_output`
- 来源：`pep-ecopassport-psr-0014-2023`

##### 废物流

###### 装配废料、废品与清洗废物（`assembly_waste`）

分别记录离开过程的电子、金属、聚合物、玻璃、电缆、焊料、胶粘剂、溶剂、擦拭物和混合废物，包括返工损失。

- 选定流：材料和处理路线特定的装配废物流
- 流属性/单位：Mass / kg
- 数量规则：离开过程的称量废物和不合格件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已装配灯具输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`pep-ecopassport-pcr-ed4-2021`

### 过程：功能、安全、电气和光度测试（`functional_safety_photometric_testing`）

#### 输入

##### 产品流

###### 进入测试的已装配灯具（`luminaire_entering_test`）

记录提交功能、安全、电气和光度验收的完整已装配灯具质量和数量。

- 选定流：专为发光二极管（LED）光源设计的灯具和照明配件 `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- 流属性/单位：Mass / kg
- 数量规则：测试批次记录中的受测质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每合格经测灯具输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_performance`
- 来源：`iec-60598-1-2024`; `pep-ecopassport-psr-0014-2023`

###### 测试电力（`test_electricity`）

记录老化、安全、电气、控制功能和光度测试消耗且未计入设施分配的电力。

- 选定流：场址特定的电力供应流
- 流属性/单位：Energy / kWh
- 数量规则：计量测试台电力，或受测功率乘以记录的测试时长
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每合格经测灯具输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_performance`
- 来源：`iec-60598-1-2024`

#### 输出

##### 产品流

###### 合格经测完整 LED 灯具（`conforming_tested_luminaire`）

针对准确的声明配置，记录产品净质量、合格数量、灯具输出光通量、开启模式总功率、控制设置、指定寿命证据以及适用的安全或合规报告标识。

- 选定流：专为发光二极管（LED）光源设计的灯具和照明配件 `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- 流属性/单位：Mass / kg
- 数量规则：不含包装的合格经测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_performance`
- 来源：`iec-60598-1-2024`; `pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources`

##### 废物流

###### 测试废品与失效部件（`test_rejects`）

按质量和处理路线记录不合格灯具以及失效的 LED 模组、驱动器、控制装置和其他更换部件；成功返工的灯具仍保留在产品平衡中，并记录增加的材料和能源。

- 选定流：产品和处理路线特定的电子设备废物流
- 流属性/单位：Mass / kg
- 数量规则：离开测试或返工系统的失效整机和部件称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每合格经测灯具输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`pep-ecopassport-pcr-ed4-2021`

### 过程：最终检验与包装（`final_packaging`）

#### 输入

##### 产品流

###### 进入包装的合格经测灯具（`tested_luminaire_for_packaging`）

记录转入最终检验和包装的完整合格灯具质量和数量。

- 选定流：专为发光二极管（LED）光源设计的灯具和照明配件 `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- 流属性/单位：Mass / kg
- 数量规则：转入的产品净质量和数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每制造商门口成品灯具
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`pep-ecopassport-psr-0014-2023`

###### 一级和二级包装（`packaging_materials`）

按材料和质量记录包装箱、纸和塑料防护、薄膜、泡沫、托盘、标签与说明书；可重复使用包装的循环次数应单独记录。

- 选定流：材料特定的包装流
- 流属性/单位：Mass / kg
- 数量规则：每个包装产品的包装发放量，按重复使用次数和包装废料校正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每制造商门口成品灯具
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023`

#### 输出

##### 产品流

###### 制造商门口完整 LED 灯具成品（`finished_led_luminaire`）

该输出是参考产品。包装计入产品系统清单，但不计入 1 kg 产品质量。

- 选定流：专为发光二极管（LED）光源设计的灯具和照明配件 `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- 流属性/单位：Mass / kg
- 数量规则：固定参考输出为 1 kg 完整灯具净质量，并保留产品数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

###### 包装作业废物（`packaging_waste`）

按质量和处理路线记录损坏或裁切产生的纸板、纸、薄膜、泡沫、木材和其他包装废物。

- 选定流：材料和处理路线特定的包装废物流
- 流属性/单位：Mass / kg
- 数量规则：声明包装作业产生的包装废物称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每制造商门口成品灯具
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`
- 来源：`pep-ecopassport-pcr-ed4-2021`

### 过程：分销、安装、使用与维护情景（`distribution_installation_use_maintenance`）

#### 输入

##### 产品流

###### 灯具成品与安装物项（`installed_luminaire_inputs`）

对于生命周期投影，记录灯具成品、实际分销、远置电源、固定件、连接器、安装附件以及制造商要求但未随产品供应的其他安装物项。

- 选定流：LED 灯具成品及物项特定的安装流
- 流属性/单位：Mass / kg
- 数量规则：由产品质量、发运和安装记录得到的情景数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每声明完整灯具配置或服务参考
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distribution_installation`
- 来源：`pep-ecopassport-psr-0014-2023`

###### 使用电力与更换部件（`use_electricity_replacements`）

记录完整灯具在声明参考控制设置和实际运行日程下的电力，以及声明情景内更换的 LED 光源、驱动器、控制装置和其他必要维护物项。

- 选定流：地域和电压特定的电力流以及准确的更换部件流
- 流属性/单位：Energy / kWh; Mass / kg
- 数量规则：根据记录的功率、运行和待机小时、控制日程及部件更换记录计算；不得把通用节能假设作为前景事实
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每声明完整灯具配置或服务参考
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_maintenance`
- 来源：`pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources`

#### 输出

##### 产品流

###### 有文件记录的照明服务与废旧灯具（`lighting_service_and_used_luminaire`）

保留交付的灯具输出光通量、运行时间、功率和控制情景，同时保留转入报废的废旧灯具质量。该项是情景输出，不替代完整灯具产品身份。

- 选定流：有文件记录的照明服务记录和废旧完整灯具
- 流属性/单位：luminous flux / lm; operating time / h; Mass / kg
- 数量规则：声明情景的实测或计算服务性能及废旧产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每声明完整灯具配置或服务参考
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_maintenance`
- 来源：`pep-ecopassport-psr-0014-2023`

##### 废物流

###### 安装与维护废物（`installation_maintenance_waste`）

按质量和实际处理路线记录安装包装、被更换的 LED 光源或模组、驱动器、控制装置以及其他维护废物。

- 选定流：材料和处理路线特定的包装或 WEEE 流
- 流属性/单位：Mass / kg
- 数量规则：由安装和维护记录得到的称量废物或按部件质量换算的废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每声明完整灯具配置或服务参考
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_use_maintenance`
- 来源：`pep-ecopassport-psr-0014-2023`; `eu-2012-19-weee`

### 过程：报废收集与处理（`end_of_life_treatment`）

#### 输入

##### 废物流

###### 废旧完整灯具与更换的电气部件（`used_luminaire_weee_input`）

记录进入实际收集与处理系统的废旧完整灯具，并分别记录积累的 LED 光源或模组、驱动器、控制装置和其他电气部件。

- 选定流：灯具和部件的处理路线特定废弃电气电子设备流
- 流属性/单位：Mass / kg
- 数量规则：与安装产品和维护更换相核对的情景质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每声明完整灯具配置或服务参考
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life`
- 来源：`pep-ecopassport-psr-0014-2023`; `eu-2012-19-weee`

#### 输出

##### 产品流

###### 回收材料输出（`recovered_material_outputs`）

仅记录达到声明废物终止边界的材料输出，按材料分开并由处理记录支持。可选的替代收益应保持在产品系统清单之外并单独报告。

- 选定流：材料特定的回收产品流
- 流属性/单位：Mass / kg
- 数量规则：处理后实测或由运营方报告的回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每处理废旧灯具质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `eu-2012-19-weee`

##### 废物流

###### 最终处理残余物（`end_of_life_residues`）

记录送往再循环、能源回收、焚烧和填埋的残余物，不得用未经核实的通用比例代替实际情景证据。

- 选定流：材料和处理路线特定的最终残余物流
- 流属性/单位：Mass / kg
- 数量规则：处理运营方按路线提供的质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每处理废旧灯具质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life`
- 来源：`pep-ecopassport-psr-0014-2023`; `eu-2012-19-weee`

##### 基本流

###### 处理过程直接排放（`end_of_life_direct_releases`）

当所选处理数据集尚未表示时，记录处理设施向空气、水体和土壤的直接排放。

- 选定流：物质和环境介质特定的基本流
- 流属性/单位：Mass / kg
- 数量规则：处理运营方测量、许可报告或经核实的设施清单
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每处理废旧灯具质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_end_of_life`
- 来源：`eu-2012-19-weee`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_where_possible` | 多输出前景工序 | 应先进行过程细分，或使用直接计量和物理追踪，然后再采用分配。记录未分配清单以及无法细分的原因。 | `pep-ecopassport-pcr-ed4-2021` |
| `alloc_coproduct_mass` | 产生一种以上有价值共产品的过程 | 无法直接归属或细分时，按输出共产品质量分配剩余共享负担，并披露输出质量与计算过程。 | `pep-ecopassport-psr-0014-2023` |
| `alloc_recycling_boundary` | 生产废料和报废回收 | 把收集和处理负担归于产生废物的阶段，直至声明的废物终止点。不得从前景清单中扣除避免的原生材料或能源负担；边界外的可选收益应单独报告。 | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `alloc_rework_and_rejects` | 返工和不合格灯具或部件 | 把增加的材料、能源和处理负担归于产生返工或废品的生产。供应商退货必须核对，不得同时计为已消耗投入和场内废物。 | `pep-ecopassport-pcr-ed4-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_receipts` | `component_and_subassembly_supply` | 材料、部件和子组件投入 | ERP 采购、收货、BOM 与供应商记录 | 物项 id；供应商；场址；数量；单位；单件质量；材料类别；再生含量；退货数量；期初和期末库存；上游数据集引用 | 核对 BOM 发料、收货、退货和库存变化；核实有代表性的单件质量 | kg; item | 每批次或每次收货 | 有代表性的生产期，通常至少连续 12 个月 | 范围内所有生产与分包场址 | 按物项和场址汇总，再归一到合格部件输出和 1 kg 成品 | 批准的 BOM；发票或收货记录；校准称量记录；供应商声明；上游数据集身份 |
| `cp_process_energy` | `component_and_subassembly_supply`; `luminaire_assembly` | 制造、装配和表面处理能源 | 仪表、燃料交付和公用事业账单 | 仪表 id；载能体；起止读数；燃料量；换算因子；生产线运行时间；设施总量；分配因子 | 优先采用分表计量；否则核对账单并采用有文件记录的因果驱动因素分配 | kWh; MJ | 每月，可获得时按生产批次 | 与生产输出相同期间 | 每个纳入的场址和生产线 | 按载能体和场址求和，扣除排除负荷，分配并归一到过程输出 | 仪表校准；账单核对；分配工作表 |
| `cp_component_output` | `component_and_subassembly_supply` | 合格部件与子组件 | 生产与质量记录 | 物项 id；合格质量；合格数量；废品质量；日期；去向 | 校准称量，或合格数量乘以经核实的单件质量 | kg; item | 每批次 | 有代表性的生产期 | 每个纳入的制造或供应场址 | 按类别汇总合格输出，并与投入和废物核对 | 秤校准；质量放行记录；单件质量研究 |
| `cp_waste_and_rejects` | `component_and_subassembly_supply`; `luminaire_assembly`; `functional_safety_photometric_testing`; `final_packaging` | 废料、废品和过程废物 | 废物联单、废品日志和库存记录 | 废物类型；材料；质量；处理路线；运输方；接收方；不合格物项数量；退回供应商数量；期初和期末库存 | 称量外运废物，并核对废品日志、退货和库存变化 | kg | 每次外运和每月 | 与生产输出相同期间 | 所有纳入场址 | 按过程、材料和处理路线汇总；归一到合格输出 | 校准地磅；废物转移联单；接收证明；废品处置记录 |
| `cp_direct_releases` | `component_and_subassembly_supply` | 向空气、水体和土壤的直接排放 | 烟气、排水、溶剂平衡和许可记录 | 物质；环境介质；实测浓度；流量；时长；计算质量；方法；检出限 | 使用设施监测或有文件记录的质量平衡，并分离声明过程的贡献 | kg | 按监测频率且至少每年 | 与生产输出相同期间 | 范围内每个排放场址 | 按物质计算质量，仅采用有文件记录的因果驱动因素分配 | 实验室报告；许可报告；监测校准；质量平衡工作表 |
| `cp_assembly_material_issue` | `luminaire_assembly` | 发料部件与已装配产品 | 工单、材料发放与退料记录 | 工单；产品配置；物项 id；发放数量；退料数量；合格件数；产品质量 | 核对发放和退回物项与合格装配输出 | kg; item | 每工单 | 有代表性的生产期 | 每个装配场址 | 按配置和场址汇总，再归一到装配输出 | 受控 BOM；工单完结记录；称量记录 |
| `cp_auxiliary_materials` | `luminaire_assembly` | 焊料、胶粘剂、密封剂、清洗剂及其他辅料 | 采购、发放和库存记录 | 材料 id；数量；单位；库存变化；退料量；废物量 | 核对采购或发放与库存变化和废物 | kg | 每月或每生产批次 | 有代表性的生产期 | 每个装配场址 | 按材料汇总并归一到装配输出 | 发票；材料发放；库存核对；安全数据表 |
| `cp_assembly_output` | `luminaire_assembly` | 完整已装配灯具 | 生产完工记录 | 配置；合格数量；单件净质量；返工数量；日期 | 合格数量乘以经核实的单件质量，或总量校准称量 | kg; item | 每批次 | 有代表性的生产期 | 每个装配场址 | 汇总合格质量和数量；与部件投入和废物核对 | 秤校准；最终装配记录；BOM 核对 |
| `cp_test_performance` | `functional_safety_photometric_testing` | 受测产品、测试电力和声明性能 | 测试批次记录以及认可或受控测试报告 | 配置；序列号或批次 id；测试数量；合格/不合格；测试时长；功率；灯具输出光通量；控制设置；供电电压；CCT；适用时 IP/IK；寿命证据；报告 id | 对完整声明配置采用相关灯具测试方法；把结果与生产批次关联 | kg; item; h; W; kWh; lm; K | 每次定型和常规测试计划 | 当前产品设计和生产期 | 每个受测配置和责任实验室 | 汇总常规测试能源和废品；保留配置特定性能，不平均不兼容变型 | 实验室认可或能力证据；测试方法；设备校准；签署报告；合规记录 |
| `cp_packaging_records` | `final_packaging` | 制造商门口的产品与包装 | 包装 BOM、发放、重复使用和发运记录 | 包装物项；材料；质量；每产品用量；重复使用次数；产品数量；产品净质量；发运日期 | 称量有代表性的包装物项，并核对发放与包装输出 | kg; item; reuse cycle | 每种包装设计和发运期 | 有代表性的生产期 | 每个包装场址 | 按材料汇总，可重复使用包装按有文件记录的使用次数分摊，并归一到 1 kg 产品净质量 | 包装规范；称量记录；发放记录；重复使用日志 |
| `cp_distribution_installation` | `distribution_installation_use_maintenance` | 分销与安装情景 | 发运与安装记录 | 起点；终点；运输方式；距离；装载率；产品和包装质量；远置电源；固定件和连接器；安装废物 | 使用实际物流和安装记录，或单独标识且有理由支持的情景 | kg; km; tkm | 每路线或项目 | 声明情景期 | 声明市场与安装场址 | 计算每声明配置的运输工作量和安装物项清单 | 提单；路线证据；安装规范；项目记录 |
| `cp_use_maintenance` | `distribution_installation_use_maintenance` | 使用电力、服务与更换 | 功率测试、运行日程、控制日志与维护记录 | 开启模式功率；待机功率；控制设置；运行小时；灯具输出光通量；指定寿命；部件寿命；更换日期和质量；电力地域 | 把参考设置下完整灯具功率与记录或明确情景定义的运行小时结合；可获得时使用实际维护记录 | W; kWh; h; lm; kg | 连续记录或每次运行和维护事件 | 声明服务情景 | 声明应用与地域 | 按配置和服务参考计算能源与更换；实测事实与情景假设分开 | 功率和光度测试报告；控制系统日志；维护工单；部件声明 |
| `cp_end_of_life` | `end_of_life_treatment` | 收集、分选、回收与最终残余物 | 回收、再生和处理记录 | 收集质量；部件或材料类别；运输；处理路线；回收输出；残余物；去向；运营方与许可 | 使用实际体系或运营方质量平衡；识别任何单独建模的情景 | kg; km; tkm | 每批次或每报告年度 | 声明报废情景 | 声明市场与处理体系 | 核对投入质量、回收输出和残余物，并归一到处理产品 | 转移联单；处理证明；运营方质量平衡；许可；生产者责任证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_inventory_to_kg_product` | 制造清单行 | 归一化数量 = 生产期内可归属数量 / 同期合格完整灯具净质量 | 投入、输出、废物或排放的协议记录；`cp_assembly_output`；`cp_packaging_records` | 每 1 kg 完整灯具成品的流量 | `pep-ecopassport-pcr-ed4-2021` |
| `reconcile_product_mass` | 完整产品与包装 | 核对部件和辅料投入与产品净质量、生产废物、直接质量排放、退货和库存变化；包装单独核对并从产品质量中排除 | `cp_bom_component_receipts`; `cp_auxiliary_materials`; `cp_waste_and_rejects`; `cp_direct_releases`; `cp_packaging_records` | 有文件记录的产品和包装质量平衡 | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `calculate_test_electricity` | 测试过程 | 测试电力（kWh）= 完整灯具电功率（kW）x 通电测试时长（h），加上单独计量的测试台辅助电力 | `cp_test_performance` | 每合格输出的测试电力 kWh | `iec-60598-1-2024` |
| `convert_to_lighting_service_reference` | 下游可比服务结果 | 服务等效产品质量 = 每声明配置产品质量 x（1,000 lm / 灯具输出光通量 lm）x（35,000 h / 灯具指定寿命 h）；采用阶段特定清单，不混合制造、使用与报废 | `cp_test_performance`; `cp_packaging_records`; `cp_use_maintenance` | 每 1,000 lm、35,000 h 的产品数量和各阶段清单 | `pep-ecopassport-psr-0014-2023` |
| `calculate_use_electricity` | 下游使用情景 | 使用电力 = 各运行模式下完整灯具功率（kW）x 该模式记录或声明小时数之和；纳入必需驱动器、控制装置和控制部件，并声明参考控制设置 | `cp_test_performance`; `cp_use_maintenance` | 每声明配置或服务参考的 kWh | `pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources` |
| `calculate_replacements` | 下游维护情景 | 根据有文件记录的部件寿命、可更换性和情景时长计算更换数量；把实际更换次数取整为完整事件；完整产品先报废时不计后续更换 | `cp_test_performance`; `cp_use_maintenance` | 更换部件数量、质量及相关清单 | `pep-ecopassport-psr-0014-2023` |
| `reconcile_end_of_life` | 报废过程 | 收集投入质量 = 回收产品输出 + 处理残余物 + 实测直接质量排放，仅按有文件记录的库存变化调整 | `cp_end_of_life` | 质量平衡的处理清单 | `pep-ecopassport-pcr-ed4-2021`; `eu-2012-19-weee` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证据必须表明数据集代表完整 LED 专用灯具，而不是光源、模组、驱动器、零件、非 LED 灯具，也不是用单一型号代表未声明产品系列。 | 受控产品规范；配置 BOM；CPC 范围核查；TianGong 参考流 UUID |
| `dq_bom_completeness` | 物料清单 | BOM 必须覆盖完整结构、光学、热管理、LED、电子、布线、紧固、密封、控制和随产品供应的附件配置，并与产品净质量和废物核对。 | 批准的 BOM；部件收货；单件质量研究；质量平衡工作表 |
| `dq_primary_data` | 前景制造 | 使用实际生产声明产品的场址记录。报告时间覆盖、生产量覆盖、缺失记录、分配和分包工序。 | 场址清单；计量覆盖；ERP 提取；生产台账；供应商记录 |
| `dq_performance_configuration` | 光度、功率和寿命数据 | 测试和技术证据必须对应完整声明配置及参考控制设置。LED 封装数值不能替代灯具输出或功率。 | 签署测试报告；测试方法；校准；配置交叉引用；寿命证据 |
| `dq_upstream_data` | 材料和外购部件 | 数据集应匹配材料或部件技术、供应商或地域、生产路线和时期。披露代理数据，不得把未核实的再生含量或供应商声明作为实测事实。 | 上游数据集元数据；供应商声明；数据质量评估；代理登记表 |
| `dq_mass_energy_waste_balance` | 每个前景过程 | 对同一期间的投入、合格输出、废物、退货、库存变化、能源和直接排放进行核对。发布前调查并披露材料残差或仪表不一致。 | 签署核对表；校准证据；账单交叉核对；废物转移记录 |
| `dq_downstream_scenarios` | 生命周期投影 | 识别地域、运输、安装物项、运行日程、电网数据集、控制、维护、部件更换和报废体系。情景假设与前景观察应分开。 | 情景登记表；发运与项目记录；功率与控制日志；再生处理证据 |
| `dq_no_unsupported_estimates` | 全部定量清单 | 没有可靠的类别通用数量时，必须进行前景采集。任何临时模型估计都必须明确标注、可替换、开展敏感性测试，且不得用于声称实测或已评审性能。 | 估计登记表；敏感性结果；替换计划；评审处置 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 参考产品流 UUID 必须为 `3253c9d6-cf81-41e6-8997-f59f437c3f2d`，流类型为 Product flow，CPC 为 46533，state code 为 100，并使用 Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `val_complete_luminaire` | 产品身份与 BOM | 拒绝单个 LED 芯片、封装、模组、灯、驱动器、电源、光学部件、外壳、通用灯具零件、非 LED 灯具或不完整配置的数据集。 | `pep-ecopassport-psr-0014-2023`; `eu-2019-2020-light-sources` |
| `val_reference_amount` | 参考输出 | 归一化输出必须等于不含包装的 1 kg 完整灯具净质量，并声明相应产品数量。 | `pep-ecopassport-pcr-ed4-2021` |
| `val_required_qualifiers` | 数据集元数据 | 参考流表中的所有必需限定信息都必须存在，并可追溯至声明产品配置和生产期。 | `pep-ecopassport-psr-0014-2023` |
| `val_process_coverage` | 制造商门口数据集 | 必须覆盖部件与子组件供应或制造、装配与表面处理、测试与返工、最终包装、生产废物、直接排放和上游数据集，或者明确记录为不适用且不隐藏随产品供应的部件。 | `pep-ecopassport-pcr-ed4-2021`; `pep-ecopassport-psr-0014-2023` |
| `val_performance_evidence` | 灯具输出光通量、功率和寿命 | 灯具输出光通量和功率必须对应记录参考控制设置下的完整灯具；寿命和可更换性必须有支持证据，并区分灯具、LED 光源和控制装置。 | `pep-ecopassport-psr-0014-2023`; `iec-60598-1-2024`; `eu-2019-2020-light-sources` |
| `val_mass_balance` | 产品、部件、包装和废物记录 | 产品和包装质量平衡必须针对一致期间核对。包装不得计入产品参考质量，供应商退货或返工不得重复计数。 | `pep-ecopassport-pcr-ed4-2021` |
| `val_allocation` | 共享设施与共产品 | 每项已分配流必须识别未分配总量、分配驱动因素和接受分配的输出。除非有经评审的直接归属或细分记录，剩余共产品分配必须按输出质量进行。 | `pep-ecopassport-psr-0014-2023` |
| `val_lifecycle_claim` | 生命周期模型或照明服务结果 | 涵盖照明服务或从摇篮到坟墓的声明必须包括分销、安装、使用电力、维护与更换以及报废；不得把 1 kg 制造商门口数据集单独作为完整生命周期结果。 | `pep-ecopassport-psr-0014-2023`; `eu-2012-19-weee` |
| `val_evidence_and_estimates` | 定量与来源记录 | 拒绝无支持的固定值、未标注估计、外部规则缺失来源引用，或把推理估计作为最终证据。 | `pep-ecopassport-pcr-ed4-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整 LED 专用灯具的制造商门口前景单元过程；可作为声明生命周期模型的输入 |
| downstream_use | `secondary_dataset`; `background_dataset`；建筑、道路、公共空间及其他声明照明应用的生命周期模型组成 |
| allowed_use | 对具有匹配配置、地域、技术、性能、控制、寿命和数据质量披露的完整 CPC 46533 LED 专用灯具，用于生产数据集和下游情景 |
| excluded_use | 单独的 LED 光源、模组、驱动器、零件或非 LED 灯具；在不兼容灯具配置或应用之间自动替代；仅依据制造商门口数据集作出使用阶段能源或完整生命周期声明 |
| required_metadata | 规范 PCR id；参考流 UUID 和质量属性；每 kg 产品数量；产品净质量与包装质量；完整 BOM；随产品供应和集成的部件；生产场址和时期；地域；灯具输出光通量；总功率和参考控制设置；寿命和可更换性；CCT；供电电压；适用时的 IP 和 IK；过程覆盖；上游数据集；分配与截断 |
| required_quality_disclosure | 原始数据的时间和场址覆盖；BOM 与质量平衡完整性；仪表与测试校准；光度和寿命证据；上游数据质量与代理；分配；废物路线；排除过程；模型估计；不确定性与敏感性；适用时的下游情景假设 |
| update_trigger | 产品边界、LED 或驱动器技术、BOM 或材料份额、供应商或制造地域、生产路线、功率或灯具输出光通量、控制设置、寿命或可更换性、包装、分配、上游数据集、能源结构、废物路线、法规、测试方法或重大数据质量发现发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `pep-ecopassport-pcr-ed4-2021` | standard | PEP Ecopassport, Product Category Rules for Electrical, Electronic and HVAC-R Products, PCR-ed4-EN-2021 09 06, https://register.pep-ecopassport.org/documents（检索于 2026-08-09） | 从摇篮到制造商门口和生命周期边界；部件、运输、装配、包装和废物覆盖；功能单位与声明单位；数据质量与分配框架 |
| `pep-ecopassport-psr-0014-2023` | standard | PEP Ecopassport, PSR-0014-ed2.0-EN-2023 07 13, Specific Rules for Luminaires, https://register.pep-ecopassport.org/documents/public/PSR-0014-EN（检索于 2026-08-09） | 灯具定义与排除；完整部件配置；35,000 h 提供 1,000 lm 的服务参考；系统边界；测试和性能元数据；使用、维护与报废规则；质量分配 |
| `iec-60598-1-2024` | standard | IEC 60598-1:2024, Luminaires - Part 1: General requirements and tests, https://webstore.iec.ch/en/publication/66620（检索于 2026-08-09） | 完整灯具的安全、标识、机械与电气结构以及测试证据边界 |
| `eu-2019-2020-light-sources` | standard | Commission Regulation (EU) 2019/2020 on ecodesign requirements for light sources and separate control gears, consolidated text, https://eur-lex.europa.eu/eli/reg/2019/2020/2021-09-01/eng（检索于 2026-08-09） | 区分作为包含产品的灯具、LED 光源与控制装置；完整产品参考控制设置、功率和可更换性上下文 |
| `eu-2012-19-weee` | standard | Directive 2012/19/EU on waste electrical and electronic equipment (WEEE), https://eur-lex.europa.eu/eli/dir/2012/19/oj/eng（检索于 2026-08-09） | 照明设备报废情景的单独收集、回收、再循环、处理和证据要求 |
