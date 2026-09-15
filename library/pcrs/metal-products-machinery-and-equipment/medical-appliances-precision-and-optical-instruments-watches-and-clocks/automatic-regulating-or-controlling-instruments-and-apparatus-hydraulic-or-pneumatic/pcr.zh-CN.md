---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.automatic-regulating-or-controlling-instruments-and-apparatus-hydraulic-or-pneumatic
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 液压或气动自动调节或控制仪器及装置

## 1. 范围与适用性

本 PCR 规定控制输出或执行方式为液压或气动的自动调节或控制仪器及装置在制造、工厂测试及工厂门交付阶段的前景数据生产规则。覆盖产品包括作为制成品交付的完整液压或气动调节器、控制器、控制阀定位器、压力或流量控制器以及功能等同的自动控制装置。

当产品所声明的主要功能是通过液压或气动输出或机构实施自动调节或控制时，本 PCR 覆盖可配置的模拟式、电子式、电液式、电气动式及流体逻辑式产品。具体产品的结构、受控变量、输入信号、输出信号、压力或流量范围、材料和测试规范均为必需限定信息。

本 PCR 不包括没有自动控制动作的传感器或仅测量仪器；液压或气动缸、马达、泵、压缩机及动力传动设备；手动阀；没有液压或气动控制输出的纯电控制器；单独销售的零部件和附件；以及控制器不作为独立声明产品的集成机器。分销、安装、使用、维护及生命终期不在默认工厂门前景边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.automatic-regulating-or-controlling-instruments-and-apparatus-hydraulic-or-pneumatic |
| classification_refs | CPC 3.0: 48266 — Automatic regulating or controlling instruments and apparatus, hydraulic or pneumatic |
| covered_products | 具有液压或气动输出或机构的制成液压或气动自动调节器、控制器、控制阀定位器及等同自动控制装置 |
| excluded_products | 仅测量仪器；缸、马达、泵和压缩机；手动阀；纯电控制器；单独销售的零部件；与大型机器不可分离的控制器 |
| representative_product | 作为液压、气动、电液或电气动制成仪器交付且已通过工厂测试的自动调节器或控制器 |
| production_route | 外购和/或内部制备部件 → 装配 → 功能校准及压力/流量/泄漏测试 → 最终精整、标识与包装 |
| market_state | 工厂门制成品；产品净质量与包装分别报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一件实现所声明液压或气动控制功能的制成自动调节或控制仪器 |
| How much | 工厂门 1 kg 合格制成仪器净质量 |
| How well | 满足所声明控制功能、信号接口、压力或流量范围、准确度或性能等级及适用工厂验收测试规范 |
| How long or cycle | 一次完成的工厂门生产输出；该质量参考流不表示使用寿命或使用阶段性能 |
| reference_flow_link | 为交付 1 kg 合格制成品净输出所需的选定制成品流数量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 液压或气动自动调节或控制仪器和设备 `2e112504-677d-408e-817c-751e1746af52` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 液压或气动路线；控制器或调节器类型；受控变量；输入信号；输出或执行原理；额定压力或流量范围；准确度或性能等级；主要材料和电子元件含量；制造地理；生产路线；工厂测试规范；包装纳入情况 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单数量均归一化到 1 kg 合格制成仪器净质量。纳入永久安装部件、内置填充流体及工厂施加的润滑剂；运输包装及单独供应的安装附件不计入参考质量，并作为独立投入报告。 |
| `packaging_mass_separation` | 包装 | Mass | kg | 按材料计量一级、二级和三级包装，并将其排除在产品净质量参考值之外。 |
| `energy_carrier_preservation` | 电力、燃料和压缩空气供应 | Energy 或载能体特定属性 | 按计量记录使用 kWh、MJ、kg 或 m3 | 保留仪表或发票单位及换算因子；除非有压缩机能耗和分配记录，不得将压缩空气消耗换算为电力。 |
| `test_medium_balance` | 液压流体、水、气体及其他工厂测试介质 | Mass 或 volume | kg 或 m3 | 以一致方式记录充注、补充、回收/再用、排放和期末库存，使测试介质净消耗与释放可审计。 |
| `production_mass_reconciliation` | 材料投入、产品、不合格品和废物 | Mass | kg | 在声明生产期间内核对产品和材料质量，并在相关时计入库存变化、水分或流体增加；记录设施核算容差及每个未解释差异。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收的外购材料和子组件，以及进入首个纳入前景操作的内部转移部件 |
| starting_condition_role | 产品制造的工厂门前景起点 |
| product_classification_scope | 与液压或气动自动调节或控制仪器及装置语义范围相符的制成品；CPC 3.0 代码 48266 为分类参考，而非规范身份 |
| recursive_input_rule | 当同一产品类别的未完成或完整控制器进入纳入过程时，将其作为产品投入记录一次并使用单独识别的上游数据集；不得在接收过程中递归复制其制造清单 |
| upstream_dataset_requirement | 每项外购材料、部件、载能体、包装材料、处理服务及同类别投入均应链接适当的上游数据集，或带有已记录的数据缺口 |
| disclosure | 声明制造场址和期间、液压或气动路线、内部与外包操作、纳入测试、工厂基础设施处理、包装边界及对默认过程图的全部偏离 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate_manufacture` | 所有纳入的前景操作 | 当相关活动发生在所声明工厂门生产路线内时，纳入材料接收与内部转移、内部部件制备、装配、调整、校准、压力/流量/功能/泄漏测试、最终清洁或精整、标识、包装、内部运输、公用工程、耗材、制造不合格品、废物及直接释放。 | `eu-pef-2021`; `iso-4413-2010`; `iso-4414-2010` |
| `boundary_purchased_inputs` | 外购材料、部件和服务 | 在工厂门量化外购投入并连接上游数据集。供应商生产不在前景过程图内，但不得从下游生命周期建模中遗漏。 | `eu-pef-2021` |
| `boundary_test_and_calibration` | 工厂验收测试 | 纳入实际工厂测试方案，并记录电力、压缩空气、液压流体、水或其他测试介质、回收回路、不合格单元、更换部件及直接释放。说明产品是单独测试还是与执行器或试验台组合测试，并引用适用测试规范。 | `iso-10770-hydraulic-control-valves`; `iec-61514-2026` |
| `boundary_no_unreviewed_cutoff` | 前景投入和产出 | 不得仅因质量或成本较小而遗漏必需前景过程或材料、能源、废物或直接排放流。任何排除均应识别、说明理由并评估潜在显著性。 | `eu-pef-2021` |
| `boundary_default_exclusions` | 下游和资本活动 | 默认排除工厂门后的分销、安装、使用、维护及生命终期。除非研究目标明确纳入，否则排除资本设备和建筑；任何纳入均须披露。 | `eu-pef-2021` |
| `boundary_recursive_product_input` | 同类别投入 | 应用边界概化中的递归投入规则，并保留每项同类别投入的上游数据集身份、数量和产品状态限定信息。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | 部件制造、清洁与制备 | conditional | 当报告场址进行机加工、成形、清洁、涂覆、电路制备、密封件制备或同类部件作业时纳入 | 前景部件制备 | 转移至装配的制备部件 kg |
| `product_assembly` | 产品装配与调整 | required | 始终纳入 | 前景生产 | 送往工厂测试的装配仪器 kg |
| `functional_test_and_calibration` | 功能校准、压力/流量与泄漏测试 | required | 始终纳入合格输出实际采用的验收测试路线 | 前景质量保证 | 合格测试仪器 kg |
| `finishing_and_packaging` | 最终精整、标识与包装 | required | 始终纳入 | 前景工厂门完成 | 1 kg 制成参考产品净质量 |

### 过程：部件制造、清洁与制备（`component_preparation`）

#### 输入

##### 产品流

###### 用于内部制备的材料和外购部件（`prep_materials_components`）

记录进入内部部件制备的、按 BOM 分解的金属、聚合物、弹性体、电子零件、液压或气动零件、紧固件、外壳及其他外购物项。

- 选定流：产品特定材料或部件流；不规定通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：采购、仓储和 BOM 记录中的接收或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_and_materials`

###### 制备耗材（`prep_consumables`）

记录部件制备中实际使用的清洗剂、加工液、表面处理化学品、涂料、焊料、胶黏剂及其他过程耗材。

- 选定流：物质或产品特定耗材流
- 流属性/单位：Mass / kg
- 数量规则：采购或领用量经库存变化和退料调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_consumables_and_inventory`

###### 部件制备用电力和燃料（`prep_energy`）

记录纳入的机加工、成形、清洁、干燥、涂覆和局部抽排设备消耗的计量电力及任何燃料或热量。

- 选定流：场址特定电力、燃料或热载体
- 流属性/单位：Energy / kWh 或 MJ；按发票记录的载能体质量或体积
- 数量规则：纳入操作的分表消耗或经分配的设施仪表平衡量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`

##### 废物流

本过程默认没有废物投入。仅当接受并在声明前景操作内处理外部产生的废物时记录废物投入。

##### 基本流

不规定基本流投入。当直接从环境取用且未由供应产品流表示时，应记录该取用。

#### 输出

##### 产品流

###### 转移至装配的制备部件（`prepared_components`）

记录转移至产品装配的合格内部制备部件质量。

- 选定流：产品特定制备部件或子组件
- 流属性/单位：Mass / kg
- 数量规则：生产和仓储转移记录中的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备部件输出，并核对到每 1 kg 制成品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_and_quality`

##### 废物流

###### 制备废料和废过程材料（`prep_waste`）

按处理路线和危险属性记录金属及聚合物废料、废液、污泥、规格外部件、废过滤器及其他制备废物。

- 选定流：按材料和处理路线划分的废物特定流
- 流属性/单位：Mass / kg
- 数量规则：实测废物出运、容器或生产不合格数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`

##### 基本流

###### 制备过程直接排放（`prep_direct_emissions`）

记录制备、清洁、涂覆或场内处理向空气、水或土壤的实测或许可直接释放，不得重复记录已由上游能源或处理数据集表示的排放。

- 选定流：物质特定基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放量，或由采集活动数据和已识别方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：产品装配与调整（`product_assembly`）

#### 输入

##### 产品流

###### 用于装配的制备和外购部件（`assembly_components`）

记录进入最终装配的每项内部制备或外购外壳、阀体、隔膜、波纹管、弹簧、密封件、喷嘴、继动器、执行器接口、传感器、电路、连接器、紧固件及其他 BOM 物项。

- 选定流：产品特定部件或子组件流
- 流属性/单位：Mass / kg
- 数量规则：BOM 数量与领用、退料和库存记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_bom_and_materials`

###### 装配耗材和内置流体（`assembly_consumables`）

记录焊料、胶黏剂、螺纹密封剂、润滑剂、液压填充液、润滑脂、清洁材料及其他耗材，并识别留在制成品中的比例。

- 选定流：物质或产品特定装配耗材
- 流属性/单位：Mass / kg
- 数量规则：领用量经退料、库存变化和回收材料调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_consumables_and_inventory`

###### 装配电力和公用工程（`assembly_energy`）

记录装配、连接、调整、清洁及局部环境控制所用电力、压缩空气和其他公用工程。

- 选定流：场址特定电力或公用工程载体
- 流属性/单位：Energy / kWh 或 MJ；计量时压缩空气 volume / m3
- 数量规则：装配线分表用量或经分配的设施仪表平衡量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`

##### 废物流

普通装配不规定废物投入。

##### 基本流

普通装配不规定基本流投入。

#### 输出

##### 产品流

###### 送往测试的装配仪器（`assembled_instrument`）

记录进入功能测试和校准的装配仪器质量和件数。

- 选定流：产品特定、尚未验收的装配仪器
- 流属性/单位：Mass / kg，并补充 item count
- 数量规则：生产转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配仪器输出，并核对到每 1 kg 制成品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_and_quality`

##### 废物流

###### 装配不合格品和废弃耗材（`assembly_waste`）

按处理路线记录不合格部件、焊料或胶黏剂残余、废擦拭物、更换密封件及其他装配废物。

- 选定流：按材料和处理路线划分的废物特定流
- 流属性/单位：Mass / kg
- 数量规则：实测不合格品和废物处置记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`

##### 基本流

###### 装配直接排放（`assembly_direct_emissions`）

当场址测量或有记录的计算确认其跨越环境边界时，记录焊接、粘接、清洁或其他装配操作的物质直接释放。

- 选定流：物质特定基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放量，或由采集活动数据和已识别方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：功能校准、压力/流量与泄漏测试（`functional_test_and_calibration`）

#### 输入

##### 产品流

###### 进入工厂验收测试的装配仪器（`test_instruments`）

记录进入所声明测试和校准方案的装配仪器质量和件数。

- 选定流：产品特定装配仪器
- 流属性/单位：Mass / kg，并补充 item count
- 数量规则：测试批次进入记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_and_calibration`

###### 测试能源与压缩空气供应（`test_energy`）

记录生产验收路线所纳入压力、流量、响应、校准、泄漏及耐久测试消耗的电力和压缩空气。

- 选定流：场址特定电力和压缩空气供应
- 流属性/单位：Energy / kWh 或压缩空气 volume / m3；直接计量时单独保留压缩机电力
- 数量规则：与测试循环关联的试验台仪表读数或经分配的公用工程平衡量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`iso-10770-hydraulic-control-valves`; `iec-61514-2026`

###### 液压流体、水、气体及其他测试介质（`test_media`）

记录试验台充注的每种测试介质，包括补充量及留在制成品中的介质；区分回收和循环介质。

- 选定流：介质特定产品流
- 流属性/单位：Mass / kg 或 volume / m3
- 数量规则：期初库存加充注和补充量，减可用回收期末库存；排放量另行报告
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_and_calibration`
- 来源：`iso-10770-hydraulic-control-valves`; `iec-61514-2026`

##### 废物流

工厂验收测试默认没有废物投入。

##### 基本流

不规定基本流投入。仅当直接环境取用的测试介质未由供应产品流表示时记录该取用。

#### 输出

##### 产品流

###### 合格测试仪器（`tested_instrument`）

记录通过所声明验收准则并进入最终精整和包装的仪器质量和件数。

- 选定流：产品特定合格测试仪器
- 流属性/单位：Mass / kg，并补充 item count
- 数量规则：签署测试或校准记录中的通过数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格测试输出，并核对到每 1 kg 制成品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_and_calibration`
- 来源：`iso-10770-hydraulic-control-valves`; `iec-61514-2026`

###### 返回回路的回收测试介质（`recovered_test_medium`）

记录返回储存或后续测试循环的回收液压流体、水或其他介质，避免将总循环量作为净消耗报告。

- 选定流：介质特定回收产品流
- 流属性/单位：Mass / kg 或 volume / m3
- 数量规则：返回可用库存的实测回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_and_calibration`

##### 废物流

###### 不合格单元、更换部件和废测试介质（`test_waste`）

按处理路线记录未返回生产的不合格仪器或部件、废液压流体、过滤器、污染吸附物及其他测试废物。

- 选定流：按材料和处理路线划分的废物特定流
- 流属性/单位：Mass / kg
- 数量规则：不合格单元处置和废物出运记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`

##### 基本流

###### 测试期间直接释放（`test_direct_releases`）

记录直接释放到空气、水或土壤的测试流体、气溶胶或其他物质。除非存在物质特定环境流，否则不得将普通排放压缩空气表示为污染物。

- 选定流：物质特定基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或由测试介质平衡核算的直接释放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：最终精整、标识与包装（`finishing_and_packaging`）

#### 输入

##### 产品流

###### 用于最终完成的合格测试仪器（`finish_tested_instrument`）

记录进入最终清洁、标识和包装的合格测试仪器。

- 选定流：产品特定合格测试仪器
- 流属性/单位：Mass / kg
- 数量规则：生产转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_and_quality`

###### 包装、标签和最终精整材料（`packaging_materials`）

按材料和层级记录包装以及标签、防护帽、干燥剂、最终清洗剂和防护材料；识别单独供应的附件。

- 选定流：材料特定包装或精整流
- 流属性/单位：Mass / kg
- 数量规则：包装 BOM 或装箱单数量与领用和库存记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`

###### 精整与包装能源（`packaging_energy`）

记录最终清洁、标记、防护和包装所用电力及其他公用工程。

- 选定流：场址特定电力或公用工程载体
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：纳入精整和包装操作的分表用量或经分配的仪表平衡量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`

##### 废物流

最终精整与包装不规定废物投入。

##### 基本流

最终精整与包装不规定基本流投入。

#### 输出

##### 产品流

###### 工厂门参考产品（`reference_product`）

该输出为合格制成液压或气动自动调节或控制仪器，不包含单独报告的运输包装。

- 选定流：液压或气动自动调节或控制仪器和设备 `2e112504-677d-408e-817c-751e1746af52`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：正好 1 kg 合格制成仪器净输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装废料、最终不合格品和废弃精整材料（`packaging_waste`）

按处理路线记录包装边角料、破损包装、最终不合格产品、废清洁材料及其他精整废物。

- 选定流：按材料和处理路线划分的废物特定流
- 流属性/单位：Mass / kg
- 数量规则：实测废物和最终不合格品记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_rejects`

##### 基本流

###### 精整直接排放（`finishing_direct_emissions`）

记录最终清洁、标记、防护或涂覆中跨越环境边界的物质特定直接释放。

- 选定流：物质特定基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放量，或由采集活动数据和已识别方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成仪器净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多产品生产线和共享过程 | 优先利用产品或生产线特定 BOM、生产、测试、能源、废物和排放记录进行细分。已单独计量的操作保持独立，不进行分配。 | `eu-pef-2021` |
| `allocation_causal_driver` | 无法避免的共享公用工程和操作 | 无法细分时，采用有记录的因果物理驱动因子：公用工程使用实测能源、机器或试验台时间和额定功率；搬运使用处理质量或件数；测试设备使用占用测试循环；处理使用实测废物质量。 | `eu-pef-2021` |
| `allocation_other_relationship` | 剩余多功能性 | 仅在细分和可辩护物理关系均不可行时采用其他关系（包括经济价值）。记录原因、期间、产品、因子值及结果敏感性。 | `eu-pef-2021` |
| `allocation_scrap_and_recovery` | 可回收废料和回收测试介质 | 返回前景回路的回收测试介质作为内部返回记录，只报告净补充消耗。离开系统的废料按废物类型和处理路线记录；除非下游建模方法明确要求并记录，否则不得在该工厂门数据集中应用避免负担抵扣。 | `eu-pef-2021` |
| `allocation_rework` | 返工仪器和部件 | 将返工材料、能源、测试和废物保留在合格输出的前景清单中。返工不得作为共产品处理。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_materials` | `component_preparation`; `product_assembly` | 材料和部件投入 | BOM、采购、仓储领退料和库存记录 | item_id; description; supplier; material; quantity; unit_mass; issued_quantity; returned_quantity; opening_inventory; closing_inventory; lot; product_variant | 导出受控 BOM，并与仓储流转及实物库存核对 | kg 和 item | 每批或每月核对 | 完整声明生产期间 | 所有纳入生产线及场址接收的外包投入 | 净消耗量 = 期初库存 + 接收/领用 − 退料 − 期末库存；映射至产品型号并归一化到合格净输出 | 批准的 BOM 版本、供应商记录、库存核对、秤校准 |
| `cp_consumables_and_inventory` | `component_preparation`; `product_assembly` | 化学品、流体、润滑剂和耗材 | 采购、领用、退料、储罐或容器库存记录 | substance_id; composition_or_grade; quantity; unit; opening_inventory; closing_inventory; returned_or_recovered_quantity; process; retained_in_product_fraction | 核对仓储和过程库存；保留物质或牌号身份 | kg、L 或 m3 | 每月及生产期结束 | 完整声明生产期间 | 所有纳入前景过程 | 按过程计算净用量，并识别留在产品、排放、回收或废弃的数量 | 发票、SDS 或规范、库存日志、经校准储罐/容器测量 |
| `cp_energy_and_utilities` | 所有 process_id | 电力、燃料、热和压缩空气供应 | 分表、设施仪表、发票和设备运行日志 | meter_id; carrier; opening_reading; closing_reading; unit; timestamp; line; machine_time; test_cycles; rated_power; compressor_output | 优先分表计量；否则核对设施平衡量并按有记录的因果驱动分配 | kWh、MJ、kg、L 或 m3 | 连续或至少每月 | 完整声明生产期间 | 报告场址及纳入生产线 | 仪表差值减去排除负荷，仅分配尚未解决的共享平衡量并归一化到合格输出 | 仪表校准、发票核对、分配工作表 |
| `cp_production_and_quality` | 所有 process_id | 转移、收率、不合格品和合格输出 | 生产订单、转移记录、件数和质量记录、不合格及返工日志 | product_variant; started_count; started_mass; transfer_count; transfer_mass; passed_count; passed_mass; rejected_count; rejected_mass; reworked_count; timestamp | 按产品型号核对各过程转移和质量处置 | kg 和 item | 每批或生产订单 | 完整声明生产期间 | 所有纳入生产线 | 汇总合格及不合格数量，将返工保留在相关操作中，并按制成品净输出质量归一化 | 签署的批次记录、校准秤、质量放行和不合格记录 |
| `cp_test_and_calibration` | `functional_test_and_calibration` | 测试路线、测试介质、结果和回收 | 试验台日志、校准证书、介质库存和失效记录 | unit_id; test_standard; test_configuration; controlled_variable; setpoint_range; pressure_or_flow_range; input_signal; output_signal; start_time; end_time; pass_fail; medium_charge; make_up; recovered; discharged; retained | 采集机器可读测试记录，并核对每种测试配置的介质平衡 | 测试特定单位、kg 或 m3 | 每个测试单元或有统计依据的批次 | 完整声明生产期间 | 每个纳入试验台及外包验收测试 | 按产品型号汇总测试循环、通过、失效和介质净用量；保留测试规范及配置 | 校准的参考仪器、可追溯校准证书、签署测试记录、介质库存核对 |
| `cp_packaging_and_dispatch` | `finishing_and_packaging` | 包装和单独供应附件 | 包装 BOM、装箱单、材料领用和发运记录 | packaging_item; material; level; unit_mass; quantity; returned_quantity; accessory_id; included_in_reference_mass; dispatch_lot | 核对包装 BOM、领用量、包装和发运单元 | kg 和 item | 每包装批或每月 | 完整声明生产期间 | 所有纳入包装线 | 按材料和层级计算每 kg 产品净质量的包装量；附件和包装不计入参考质量，除非永久安装 | 批准包装规范、装箱单、秤记录、发运核对 |
| `cp_waste_and_rejects` | 所有 process_id | 废物、废料、不合格部件和废介质 | 废物联单、容器质量、处理发票和不合格处置记录 | waste_type; material; hazardous_status; source_process; gross_weight; tare; net_weight; treatment_route; destination; date; rejected_product_link | 称量或以其他方式量化每次废物出运，并与生产不合格品核对 | kg | 每次出运及每月核对 | 完整声明生产期间 | 所有纳入前景过程 | 扣除皮重，按来源过程和处理路线汇总，核对不合格产品质量并归一化到合格输出 | 校准秤、废物联单、处理证明、不合格记录 |
| `cp_direct_emissions` | 所有 process_id | 向空气、水和土壤的直接释放 | 连续监测、采样、许可报告或活动因子计算 | substance; compartment; concentration; flow_rate; duration; activity_data; factor; method; uncertainty; control_efficiency | 优先直接测量；否则使用已识别方法根据采集活动数据计算，且不得重复上游排放 | kg 或方法特定单位 | 按监测计划及每次异常事件 | 完整声明生产期间 | 所有场内纳入排放点 | 积分实测浓度和流量，或应用有记录的计算；仅扣除实测回收量并归一化到合格输出 | 实验室报告、监测仪校准、许可申报、计算方法和不确定性记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单数量 | 归一化数量 = 期间数量 / 期间合格制成仪器净质量 × 1 kg | 期间流数量；合格净输出质量 | 每 1 kg 参考产品数量 | `eu-pef-2021` |
| `calc_material_consumption` | BOM 材料和耗材 | 净消耗 = 期初库存 + 接收或领用 − 退料 − 回收可用材料 − 期末库存；与产品、废物、排放和库存变化质量核对 | 库存和流转记录 | 按物项和过程计算的材料净消耗 |  |
| `calc_energy_utility` | 电力、燃料、热和压缩空气 | 纳入公用工程量 = 仪表期末 − 期初 − 排除负荷；仅用选定因果驱动分配尚未解决的共享用量 | 仪表、发票、排除负荷、驱动值 | 按过程和产品计算的公用工程消耗 | `eu-pef-2021` |
| `calc_test_medium_balance` | 液压流体、水、气体及其他测试介质 | 介质净消耗 = 期初库存 + 充注 + 补充 − 可用回收期末库存 − 单独核算排放；分别报告产品保留填充、废物和直接释放 | 测试和库存记录 | 介质净投入及核对后的输出路径 | `iso-10770-hydraulic-control-valves`; `iec-61514-2026` |
| `calc_process_yield` | 每个制造过程 | 收率 = 合格转移质量或件数 / 投入质量或件数；将返工投入和最终处置保留在清单中 | 生产、转移、通过、不合格和返工记录 | 过程收率和不合格比例 |  |
| `calc_mass_reconciliation` | 完整前景系统 | 投入质量 = 产品质量 + 废物质量 + 直接质量释放 + 期末库存增加 − 期初库存增加，并识别水分和流体增加；按声明核算容差调查残差 | 所有质量记录 | 质量平衡残差及说明 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和产品型号 | 使用精确参考产品 UUID，并声明数据集所表示的全部必需限定信息、BOM 版本、产品型号及液压或气动路线。 | Tiangong 身份回读、受控产品规范、发布 BOM 和数据集元数据 |
| `dq_technology_representativeness` | 过程图和测试 | 纳入的部件制备、装配和测试路线应代表声明产品实际采用的技术；识别外包操作和省略的条件过程。 | 过程图、作业指导、供应商范围和测试计划 |
| `dq_time_representativeness` | 所有前景记录 | 使用一个完整、内部一致且能够覆盖正常生产、返工和测试活动的生产期间或生产期；披露起止日期、停产、异常事件及任何混合期间来源。 | 带日期的仪表、生产、库存、废物和质量记录 |
| `dq_geographical_representativeness` | 场址和上游链接 | 声明每个制造场址以及能源和主要上游数据集的地理；不得静默合并路线存在实质差异的场址。 | 场址元数据、供应商记录和数据集地理 |
| `dq_precision_and_uncertainty` | 测量和计算 | 保留材料流、公用工程、测试介质、废物及直接排放的仪表分辨率、校准状态、采样依据、分配驱动和已知不确定性。 | 校准证书、采样计划、仪表台账和计算工作表 |
| `dq_completeness` | 必需及适用过程 | 核算每个必需过程、每个适用条件过程、全部 BOM 材料、公用工程、测试介质、包装、不合格品、废物及直接释放；识别并说明每个数据缺口或排除。 | 完整性矩阵、BOM 至清单核对、过程图和排除日志 |
| `dq_test_traceability` | 功能测试和校准 | 保留适用测试规范、测试配置、参考仪器校准、通过/失败准则及测试记录与产品型号或批次的链接。 | 试验台记录、校准证书和质量放行 |
| `dq_quality_rating_disclosure` | 发布数据集 | 评估并披露技术、地理和时间代表性及精度，并说明影响复用的限制。 | 与 PEF 数据质量维度对齐的数据质量评估 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品应为 `2e112504-677d-408e-817c-751e1746af52`，flow type 为 Product、CPC 为 48266、`state_code=100`，并使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和参考单位 kg。 |  |
| `validate_required_qualifiers` | 参考产品元数据 | 缺少任一必需限定信息时完整性失败；声明产品若为仅测量、手动、纯电、动力执行器、单独销售部件或本 PCR 范围外的不可分离机器部件，也应失败。 | `unsd-cpc-3-0` |
| `validate_process_coverage` | 过程清单 | 应存在产品装配、功能测试与校准、精整与包装。场址实施部件制备时应纳入该过程，否则应明确标记为不适用并识别外包上游数据集。 | `eu-pef-2021`; `iso-4413-2010`; `iso-4414-2010` |
| `validate_test_route` | 工厂验收测试 | 数据集应识别受测配置、适用规范、测试条件和验收结果；实际路线的测试能源、介质、失效和释放均应进入清单。 | `iso-10770-hydraulic-control-valves`; `iec-61514-2026` |
| `validate_reference_mass` | 归一化 | 参考输出应等于 1 kg 合格制成仪器净质量。包装和单独供应附件不得计入该净质量。 |  |
| `validate_mass_reconciliation` | 前景质量流 | 产品、废物、直接释放及库存变化质量应在声明设施核算容差内与材料投入核对。超出容差的每项残差均应调查并披露。 |  |
| `validate_energy_and_test_media` | 公用工程和测试 | 载能体及测试介质应保留实测单位和换算因子。不得将回收测试介质的总循环量报告为净消耗；没有压缩机能耗和分配记录时不得将压缩空气体积换算为电力。 | `iso-10770-hydraulic-control-valves`; `iec-61514-2026` |
| `validate_no_unreviewed_cutoff` | 前景完整性 | 每项排除均应指明受影响过程或流并说明潜在显著性；未经评审、仅按质量或成本执行的截断导致完整性失败。 | `eu-pef-2021` |
| `validate_allocation` | 共享和多功能操作 | 核验先尝试细分、物理驱动具有因果性且期间一致，并披露每项剩余分配因子及敏感性。 | `eu-pef-2021` |
| `validate_data_quality` | 前景证据 | 核验记录期间一致性、场址和技术代表性、校准或质量证据、测试可追溯性、上游数据集链接及数据缺口和限制的明确披露。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_product_manufacturing_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当产品限定信息、生产路线、地理、技术和期间与研究兼容时，用于所声明液压或气动自动控制器或调节器的工厂门建模 |
| excluded_use | 仅测量仪器、手动阀、液压或气动动力执行器、纯电控制器、单独销售部件、使用阶段能源或泄漏、寿命比较，以及功能或性能限定信息不同产品之间的比较性声明 |
| required_metadata | 规范 PCR id；参考流 UUID 和单位链；产品名称与型号；液压或气动路线；受控变量；输入和输出信号；额定压力或流量范围；性能或准确度等级；主要材料和电子元件含量；场址和地理；生产期间；纳入与外包过程；测试规范和配置；分配方法；包装边界 |
| required_quality_disclosure | 数据源和采集协议；计量和分配覆盖；BOM 和质量平衡核对；测试可追溯性；技术、地理和时间代表性；精度和不确定性；数据缺口、排除及未解决残差 |
| update_trigger | 产品功能或限定信息、BOM 或内置流体、制造或测试技术、供应商或场址路线、能源或公用工程系统、分配方法、废物或排放控制、适用测试标准发生实质变化，或证据表明数据集不再代表当前生产 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | 联合国统计司，Central Product Classification Version 3.0 structure and explanatory notes，https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期：2026-08-09） | CPC 48266 分类范围及产品类别身份 |
| `eu-pef-2021` | official_guidance | 欧盟委员会，Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索日期：2026-08-09） | 功能单位结构、参考流归一化、制造边界、前景完整性、分配层级和数据质量维度 |
| `iso-4413-2010` | standard | ISO 4413:2010，Hydraulic fluid power — General rules and safety requirements for systems and their components，https://www.iso.org/standard/44781.html（检索日期：2026-08-09） | 液压产品路线范围，以及装配、调整、清洁、可靠运行、能源和环境考虑的纳入 |
| `iso-4414-2010` | standard | ISO 4414:2010，Pneumatic fluid power — General rules and safety requirements for systems and their components，https://www.iso.org/standard/44790.html（检索日期：2026-08-09） | 气动产品路线范围，以及装配、调整、清洁、可靠运行、能源和环境考虑的纳入 |
| `iso-10770-hydraulic-control-valves` | standard | ISO 10770-2:2012，Hydraulic fluid power — Electrically modulated hydraulic control valves — Part 2: Test methods for three-port directional flow-control valves，https://www.iso.org/standard/55084.html；ISO 10770-3:2020，Part 3: Test methods for pressure control valves，https://www.iso.org/standard/73619.html（检索日期：2026-08-09） | 液压控制器性能测试范围、测试路线声明及前景测试介质/能源采集 |
| `iec-61514-2026` | standard | IEC 61514:2026，Industrial-process control systems — Methods of evaluating the performance of valve positioners with pneumatic outputs，https://webstore.iec.ch/en/publication/69949（检索日期：2026-08-09） | 气动定位器测试配置、性能测试、测试报告和验收记录可追溯性 |
