---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-filament-or-discharge-lamps-arc-lamps
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电灯丝灯或放电灯；弧光灯

## 1. 范围与适用性

本 PCR 适用于以白炽灯丝、荧光低压放电、其他气体放电或电弧产生光的完整电光源产品的工厂门生产。若光源本身是所报告的产品，则可替换灯和自镇流灯均在范围内。前景数据包须在数据采集阶段分别保留灯丝、荧光、其他气体放电和弧光路线；仅可用已披露的质量加权生产组合进行汇总。

涵盖示例包括普通白炽灯和卤素白炽灯；直管、紧凑型、感应式、冷阴极及其他荧光灯；汞蒸气灯、金属卤化物灯、高压钠灯、低压放电灯、氙灯及其他气体放电灯或弧光灯；以及已声明路线和用途的类似专用灯。

本 PCR 不包括 LED 或 OLED 光源、LED 模组、灯具及照明装置、自带电源的便携灯、发光标志、单独销售的灯部件、单独销售的镇流器或控制装置、蜡烛，以及作为产品销售的钨丝或其他中间材料。不得用灯具、狭义灯型号、部件或单一灯技术代表整个类别。

参考数据集是从摇篮到工厂门的前景生产数据包。分销、安装、使用电力、维护和报废阶段不在本参考数据集内，须采用另行声明的下游情景。本 PCR 可作为更广泛从摇篮到坟墓研究的制造阶段输入，但本身不构成照明服务比较声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-filament-or-discharge-lamps-arc-lamps |
| classification_refs | CPC 3.0：46510 — 电灯丝灯或放电灯；弧光灯（范围完全匹配的参考） |
| covered_products | 完整灯丝灯；荧光灯；其他气体放电灯；弧光灯；已声明路线的专用变体 |
| excluded_products | LED/OLED 光源及模组；灯具及照明装置；自带电源的便携灯；发光标志；单独灯部件；单独控制装置；蜡烛；灯丝及其他中间品 |
| representative_product | 制造商工厂门合格完整灯的质量加权生产组合，各技术路线均作为单独计量层保留 |
| production_route | `filament_incandescent`；`filament_halogen`；`fluorescent_low_pressure`；`gas_discharge_non_fluorescent`；或 `arc_lamp`；如集成控制装置则须声明 |
| market_state | 已制造、完成测试并可销售的完整灯；随附包装作为单独制造输出报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门制造完整电灯丝灯、荧光灯、其他气体放电灯或弧光灯 |
| How much | 1 kg 可销售完整灯净质量，不含包装质量 |
| How well | 灯具备所声明路线对应的产品规格和出厂测试；记录额定光通量、功率、寿命依据、颜色特性、灯头/接口、用途及集成控制装置状态 |
| How long or cycle | 一个具有代表性的生产报告期；产品寿命和照明服务是限定信息，不属于 1 kg 制造参考数量 |
| reference_flow_link | `saleable_complete_lamps` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 白炽灯或放电灯，弧光灯 `73b0a95f-d108-410a-ba2e-fac299a73970` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 技术路线及子类型；完整灯而非灯具或部件；集成控制装置是/否及其计入质量；产品质量及件数转质量因子；外壳和弧管材料；灯丝/电极类型；填充气体、金属蒸气、卤化物、钠和汞是否存在及剂量；适用时的荧光粉/涂层类型；灯头或电气接口；额定输入功率；有效光通量；CRI；CCT 或声明光谱；额定寿命及测试依据；专门用途；生产地域；报告期；生产组合权重 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 可销售完整灯输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有制造投入和产出归一化为 1 kg 可销售灯净质量。包装单独计量，不计入 1 kg 分母。 |
| `count_to_mass` | 以灯件数报告的生产记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同路线、同型号、同报告期实测的每盏灯净质量将件数换算为质量，并保留抽样及称量记录。 |
| `energy_preservation` | 电力、燃料和热能 | Energy | kWh 或 MJ | 保留实测能源载体和单位，仅用有记录的因子换算；若老炼/测试能耗有分表数据或计算值，应单独报告。 |
| `mercury_and_fill_dose` | 汞、金属卤化物、钠、稀有气体及其他填充材料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按路线记录真实批次投入和产品剂量；不得根据其他路线或监管阈值推断为零。将 mg 或 g 记录换算为 kg 时不得通过舍入消除痕量。 |
| `performance_qualifiers` | 产品放行和路线识别 | 路线特定的声明属性 | 声明的测试单位 | 保留额定功率、有效光通量、CRI、CCT 或光谱、额定寿命及测试依据作为限定信息；如无单独声明的比较使用模型，不得将 1 kg 制造参考转换为流明小时。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购原材料、部件、子组件、填充材料、工艺化学品、公用工程和包装进入前景制造边界，同时声明路线和供应商数据集身份 |
| starting_condition_role | 完整灯制造的从摇篮到工厂门上游投入 |
| product_classification_scope | 电灯丝灯或放电灯及弧光灯语义范围内的完整产品；不采用 LED、灯具、部件或单一路线代理 |
| recursive_input_rule | 外购的同类别完整灯作为上游产品投入记录，使用其自身路线特定数据集，不在接收的前景过程中再次展开 |
| upstream_dataset_requirement | 有供应商特定数据时优先采用；否则采用技术、地域和时间代表性适当的次级数据集并披露替代 |
| disclosure | 声明纳入的生产场址、路线份额、上游数据集选择、截断、分配、包装处理、汞及有害物质管理和所有排除的生命周期阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_stage` | 前景制造边界 | 纳入材料和部件的生产及入厂运输、外壳准备、路线特定制灯、装配、作为灯一部分随附的集成控制装置、精整、老炼与出厂测试、初级和次级包装、工厂公用工程、排放、废水、不合格品以及到声明交接点的制造废物处理。 | pep-ecopassport-pcr-ed4-2021; us-epa-electrical-components-effluent-guidelines |
| `boundary_route_separation` | 技术覆盖 | 将灯丝、荧光、其他气体放电和弧光灯操作建模为不同层。混合数据集须保留各路线结果，并按实测生产质量汇总。不得用 LED 或灯具数据填补缺失路线。 | eu-ecodesign-light-sources-2019-2020; welz-et-al-2011-lighting-lca |
| `boundary_hazardous_materials` | 汞及其他有害或稀缺成分 | 无论普通质量截断如何，只要痕量填充物、荧光粉、电极涂层、清洗剂、汞损失和捕集残渣可能具有危害性或显著环境影响，均须纳入。 | pep-ecopassport-pcr-ed4-2021; eu-mercury-regulation-2017-852-consolidated; eu-mercury-products-inventory-2019 |
| `boundary_downstream_exclusion` | 分销、安装、使用及报废 | 本制造参考数据集不纳入下游阶段；如在生命周期模型中增加，应使用路线和地域特定的独立情景，不得并入工厂门清单。 | pep-ecopassport-pcr-ed4-2021; us-epa-universal-waste-lamps |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_supply` | 材料、部件及入厂物流接收 | required | 始终 | 上游部件和材料进入前景边界 | 每 kg 验收交付材料或部件 |
| `envelope_preparation` | 玻璃或陶瓷外壳及弧管准备 | required | 始终；操作随路线及外购部件状态而异 | 清洗、成形、涂层准备和合格外壳输出 | 每 kg 已准备外壳或弧管 |
| `filament_lamp_assembly` | 灯丝灯装配、抽空、充填与封接 | conditional | `technology_route` 为 `filament_incandescent` 或 `filament_halogen` | 灯丝路线前景生产 | 每 kg 已封接灯丝灯组件 |
| `fluorescent_lamp_assembly` | 荧光涂层、装架、充填与封接 | conditional | `technology_route` 为 `fluorescent_low_pressure` | 荧光路线前景生产 | 每 kg 已封接荧光灯组件 |
| `discharge_arc_lamp_assembly` | 非荧光放电或弧管装配、配料与封接 | conditional | `technology_route` 为 `gas_discharge_non_fluorescent` 或 `arc_lamp` | 放电及弧光路线前景生产 | 每 kg 已封接放电灯或弧光灯组件 |
| `control_gear_integration` | 集成镇流器或控制装置装配 | conditional | 控制装置实际集成在完整灯内 | 集成电子件和外壳装配 | 每 kg 集成灯组件 |
| `finishing_testing_packaging` | 灯头连接、精整、老炼、出厂测试及包装 | required | 始终 | 最终制造和可销售产品放行 | 每 kg 可销售完整灯净质量 |

### 过程：材料、部件及入厂物流接收（`component_supply`）

#### 输入

##### 产品流

###### 外购灯材料和部件（`purchased_materials_components`）

按路线和供应商记录外壳玻璃或石英、陶瓷弧管、灯丝、电极、引线、装架、灯头、胶泥、荧光粉、填充材料、电子部件、外壳及包装的验收数量。

- 选定流：路线特定的外购灯材料和部件
- 流属性/单位：Mass / kg
- 数量规则：采购、仓储及批次领料记录中的验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售完整灯净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_batch`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `us-epa-electrical-components-effluent-guidelines`

###### 入厂运输服务（`inbound_transport`）

记录材料、部件、子组件、填充材料和包装从供应商到场址的距离、方式、载重和交付质量。

- 选定流：货物运输服务
- 流属性/单位：Transport service / tkm
- 数量规则：各运输方式和批次的交付吨数乘以供应商至场址距离
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售完整灯净质量
- 基准类型：运输服务（`transport_service`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收的路线特定材料和部件（`accepted_materials_components`）

验收材料和部件转入相应准备或装配过程，不合并路线身份。

- 选定流：验收的灯材料和部件
- 流属性/单位：Mass / kg
- 数量规则：验收投入质量扣除接收不合格品和库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收材料或部件
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_component_batch`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

###### 接收不合格品和损坏部件（`receipt_rejects`）

按处理路线记录接收时损坏的外壳、不合格部件、洒漏残渣及废弃包装。

- 选定流：路线特定的接收废物
- 流属性/单位：Mass / kg
- 数量规则：按废物代码和去向称量的不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售完整灯净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_log`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 基本流

### 过程：玻璃或陶瓷外壳及弧管准备（`envelope_preparation`）

#### 输入

##### 产品流

###### 外壳和弧管坯料（`envelope_stock`）

记录进入准备阶段的玻璃泡壳、玻璃管、石英外壳、陶瓷弧管及相关部件，并声明材料和路线。

- 选定流：玻璃或陶瓷灯外壳坯料
- 流属性/单位：Mass / kg
- 数量规则：生产记录中的批次领料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已准备外壳或弧管
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_batch`
- 来源：`us-epa-electrical-components-effluent-guidelines`; `ams-osram-xbo-short-arc-lca`

###### 清洗、涂层和成形材料（`envelope_process_materials`）

记录工艺水、去离子水、洗涤剂、酸、溶剂、粘结剂、漆、锡化合物、二氧化硅涂层及其他消耗的工艺材料；不适用材料报告“未使用”，不得推断为零。

- 选定流：外壳准备用水和工艺化学品
- 流属性/单位：Mass / kg
- 数量规则：按材料和路线计量或批次领用的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已准备外壳或弧管
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_batch`
- 来源：`us-epa-electrical-components-effluent-guidelines`

###### 外壳准备能耗（`envelope_energy`）

记录成形、冲洗、干燥、烘烤、退火、涂层、清洗及通风所用电力和燃料。

- 选定流：电力及热能载体
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分表计量能耗或有记录的设备能耗计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已准备外壳或弧管
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `us-epa-electrical-components-effluent-guidelines`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备外壳或弧管（`prepared_envelope`）

记录按路线完成准备、清洗并在适用时完成涂层且放行至装配的外壳质量。

- 选定流：已准备灯外壳或弧管
- 流属性/单位：Mass / kg
- 数量规则：放行至装配的实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已准备外壳或弧管
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`us-epa-electrical-components-effluent-guidelines`

##### 废物流

###### 外壳不合格品和废水（`envelope_waste`）

按处理去向分别记录破损或不合格玻璃/陶瓷、废涂层或清洗液、过滤残渣和废水。

- 选定流：外壳准备废物和废水
- 流属性/单位：Mass / kg
- 数量规则：称量固体废物及计量废水，浓度记录另行保留
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已准备外壳或弧管
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_log`
- 来源：`us-epa-electrical-components-effluent-guidelines`

##### 基本流

###### 外壳准备排放（`envelope_releases`）

记录涂层、干燥、清洗、酸处理、燃烧及通风产生的实测或按许可方法计算的空气或水体排放。

- 选定流：按物质区分的空气或水体排放
- 流属性/单位：Mass / kg
- 数量规则：按物质和环境区室的监测排放或有记录的质量平衡/许可计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已准备外壳或弧管
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_release_monitoring`
- 来源：`us-epa-electrical-components-effluent-guidelines`

### 过程：灯丝灯装配、抽空、充填与封接（`filament_lamp_assembly`）

#### 输入

##### 产品流

###### 灯丝路线装配部件（`filament_components`）

记录已准备外壳、钨丝或卤素灯丝组件、电极、引线、装架、灯头、吸气剂、胶泥及路线特定辅助材料。

- 选定流：灯丝灯装配部件
- 流属性/单位：Mass / kg
- 数量规则：按材料和产品型号记录的批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已封接灯丝灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_batch`
- 来源：`us-epa-electrical-components-effluent-guidelines`; `welz-et-al-2011-lighting-lca`

###### 灯丝路线填充材料（`filament_fill`）

记录真实充入的惰性气体和卤素化合物；配方和剂量须与产品路线及批次关联。

- 选定流：灯丝灯填充气体和卤素化合物
- 流属性/单位：Mass / kg
- 数量规则：钢瓶、配料及批次记录的充入质量扣除库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已封接灯丝灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_fill_dose`
- 来源：`us-epa-electrical-components-effluent-guidelines`

###### 灯丝路线工艺能耗（`filament_energy`）

记录装架、抽空、充气、火焰封接、退火、通风及过程检查所用电力和燃料。

- 选定流：电力及热能载体
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分表计量能耗或有记录的设备能耗计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已封接灯丝灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`us-epa-electrical-components-effluent-guidelines`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已封接灯丝灯组件（`sealed_filament_lamp`）

按子类型记录合格的已封接白炽灯或卤素灯组件，不与放电路线合并。

- 选定流：已封接灯丝灯组件
- 流属性/单位：Mass / kg
- 数量规则：共同精整和包装前的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已封接灯丝灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`us-epa-electrical-components-effluent-guidelines`

##### 废物流

###### 灯丝路线不合格品（`filament_rejects`）

按处理路线记录不合格灯丝、装架、已封接灯、玻璃、金属、吸气剂、胶泥及捕集残渣。

- 选定流：灯丝路线制造废物
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向称量的废物及不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已封接灯丝灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_log`
- 来源：`us-epa-electrical-components-effluent-guidelines`

##### 基本流

### 过程：荧光涂层、装架、充填与封接（`fluorescent_lamp_assembly`）

#### 输入

##### 产品流

###### 荧光路线装配部件（`fluorescent_components`）

按产品子类型记录已准备玻璃管、荧光粉及粘结剂、电极装架、引线、排气管、启动装置、灯头、胶泥、硅酮或其他涂层和集成部件。

- 选定流：荧光灯装配部件和涂层材料
- 流属性/单位：Mass / kg
- 数量规则：按材料、配方及产品型号记录的批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已封接荧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_batch`
- 来源：`us-epa-electrical-components-effluent-guidelines`; `us-doe-critical-materials-strategy-2011`; `welz-et-al-2011-lighting-lca`

###### 荧光灯填充物和汞剂量（`fluorescent_fill_mercury`）

从真实配料记录中记录惰性气体充入量和汞投入；分别保留产品含汞量、回收汞、废物中的汞和未解释损失等平衡项。

- 选定流：荧光灯填充气体和汞
- 流属性/单位：Mass / kg
- 数量规则：批次投入扣除库存变化，并结合实测产品剂量、回收材料和废物记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已封接荧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_mercury_fill_balance`
- 来源：`eu-ecodesign-light-sources-2019-2020`; `eu-mercury-regulation-2017-852-consolidated`; `us-epa-electrical-components-effluent-guidelines`

###### 荧光路线工艺能耗（`fluorescent_energy`）

记录涂层循环、干燥、烘烤、装架、抽空、充填、封接、通风及过程检查所用电力和燃料。

- 选定流：电力及热能载体
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分表计量能耗或有记录的设备能耗计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已封接荧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`us-epa-electrical-components-effluent-guidelines`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已封接荧光灯组件（`sealed_fluorescent_lamp`）

按子类型和集成控制装置状态记录合格的已封接荧光灯组件。

- 选定流：已封接荧光灯组件
- 流属性/单位：Mass / kg
- 数量规则：共同精整和包装前的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已封接荧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`us-epa-electrical-components-effluent-guidelines`

##### 废物流

###### 荧光路线有害废物及不合格品（`fluorescent_waste`）

按危害分类和去向记录不合格灯、荧光粉残渣、汞污染过滤器和清洁材料、涂层废物、玻璃、金属、电子件和废水。

- 选定流：荧光灯制造废物
- 流属性/单位：Mass / kg
- 数量规则：按材料、危害状态和处理去向称量的废物及不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已封接荧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_log`
- 来源：`us-epa-electrical-components-effluent-guidelines`; `us-epa-universal-waste-lamps`

##### 基本流

###### 荧光路线排放（`fluorescent_releases`）

按物质和环境区室记录汞、溶剂、燃烧、涂层和废水排放；汞排放须与批次平衡核对。

- 选定流：按物质区分的空气或水体排放
- 流属性/单位：Mass / kg
- 数量规则：监测排放或与填充材料和废物平衡核对的有记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已封接荧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_release_monitoring`
- 来源：`us-epa-mercury-emissions-lamp-manufacture`; `us-epa-electrical-components-effluent-guidelines`

### 过程：非荧光放电或弧管装配、配料与封接（`discharge_arc_lamp_assembly`）

#### 输入

##### 产品流

###### 放电或弧光路线装配部件（`discharge_arc_components`）

记录已准备的玻璃、石英或陶瓷外壳/弧管、电极、装架、引线、灯头、胶泥、吸气剂、外泡壳、作为灯组成部分供应的反射器以及路线特定部件。

- 选定流：非荧光放电灯或弧光灯装配部件
- 流属性/单位：Mass / kg
- 数量规则：按材料、路线及产品型号记录的批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已封接放电灯或弧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_batch`
- 来源：`us-epa-electrical-components-effluent-guidelines`; `eu-mercury-products-inventory-2019`; `ams-osram-xbo-short-arc-lca`

###### 放电或弧光填充材料（`discharge_arc_fill`）

按路线记录稀有气体、钠、汞、金属卤化物及其他蒸气或添加剂的真实充入量。无汞氙灯或其他灯应报告实测配方证据，不得从其他弧光路线继承汞值。

- 选定流：路线特定的放电或弧光填充材料
- 流属性/单位：Mass / kg
- 数量规则：批次投入扣除库存变化、实测产品剂量、回收、废物及有记录的损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已封接放电灯或弧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_mercury_fill_balance`
- 来源：`eu-ecodesign-light-sources-2019-2020`; `eu-mercury-products-inventory-2019`; `eu-mercury-regulation-2017-852-consolidated`; `ams-osram-xbo-short-arc-lca`

###### 放电或弧光路线工艺能耗（`discharge_arc_energy`）

记录前景电极生产、弧管装配、抽空、配料、封接、退火、清洗、通风及过程测试所用电力和燃料。

- 选定流：电力及热能载体
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分表计量能耗或有记录的设备能耗计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已封接放电灯或弧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`us-epa-electrical-components-effluent-guidelines`; `ams-osram-xbo-short-arc-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已封接放电灯或弧光灯组件（`sealed_discharge_arc_lamp`）

分别记录汞蒸气、金属卤化物、钠、氙、其他放电及其他弧光子类型的合格组件。

- 选定流：已封接非荧光放电灯或弧光灯组件
- 流属性/单位：Mass / kg
- 数量规则：共同精整和包装前的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已封接放电灯或弧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`us-epa-electrical-components-effluent-guidelines`

##### 废物流

###### 放电或弧光路线有害废物及不合格品（`discharge_arc_waste`）

按危害分类和处理去向记录不合格弧管和灯、填充材料残渣、污染清洗介质和过滤器、玻璃/石英/陶瓷、金属及其他废物。

- 选定流：放电灯或弧光灯制造废物
- 流属性/单位：Mass / kg
- 数量规则：按材料、危害状态和处理去向称量的废物及不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已封接放电灯或弧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_log`
- 来源：`us-epa-electrical-components-effluent-guidelines`; `us-epa-universal-waste-lamps`

##### 基本流

###### 放电或弧光路线排放（`discharge_arc_releases`）

按物质和环境区室记录填充材料、清洗、燃烧、酸处理及通风排放；含汞路线须与批次平衡核对。

- 选定流：按物质区分的空气或水体排放
- 流属性/单位：Mass / kg
- 数量规则：监测排放或与填充材料和废物平衡核对的有记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已封接放电灯或弧光灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_release_monitoring`
- 来源：`us-epa-mercury-emissions-lamp-manufacture`; `us-epa-electrical-components-effluent-guidelines`

### 过程：集成镇流器或控制装置装配（`control_gear_integration`）

#### 输入

##### 产品流

###### 集成控制装置部件（`integrated_control_components`）

仅当控制装置实际集成在完整灯内时，记录镇流器或控制电子件、磁性元件、印刷电路板、布线、外壳、灌封材料及其他部件。

- 选定流：集成灯控制装置部件
- 流属性/单位：Mass / kg
- 数量规则：集成灯型号的批次领用部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 集成灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_batch`
- 来源：`eu-ecodesign-light-sources-2019-2020`; `welz-et-al-2011-lighting-lca`

###### 控制装置集成能耗（`control_integration_energy`）

记录电子装配、焊接、灌封、外壳装配及过程电气检查所用电力和热能。

- 选定流：电力及热能载体
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分表计量能耗或有记录的设备能耗计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 集成灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 集成灯组件（`integrated_lamp_assembly`）

记录包含实际集成控制装置及其质量的精整前完整灯组件。

- 选定流：精整前集成完整灯组件
- 流属性/单位：Mass / kg
- 数量规则：包含集成控制装置的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 集成灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`eu-ecodesign-light-sources-2019-2020`

##### 废物流

###### 电子件及装配废物（`control_gear_waste`）

按处理去向记录不合格部件、焊接残渣、边角料、灌封废物和失败的集成组件。

- 选定流：集成控制装置制造废物
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向称量的废物及不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 集成灯组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_log`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 基本流

### 过程：灯头连接、精整、老炼、出厂测试及包装（`finishing_testing_packaging`）

#### 输入

##### 产品流

###### 待精整的路线特定灯组件（`lamp_assemblies_for_finishing`）

记录来自适用路线过程的合格组件，并在精整过程中保留路线和子类型身份。

- 选定流：精整前路线特定灯组件
- 流属性/单位：Mass / kg
- 数量规则：按路线和产品型号记录的合格转入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售完整灯净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`us-epa-electrical-components-effluent-guidelines`

###### 精整、测试和包装投入（`finishing_packaging_inputs`）

记录此前未连接的灯头或接口、胶泥及精整材料、测试电力、标签、说明书、初级包装和次级包装。

- 选定流：精整材料、测试能源和包装
- 流属性/单位：Mass / kg 和 Energy / kWh 或 MJ
- 数量规则：批次领用的材料和包装，加上计量或计算的测试能耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售完整灯净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_test_packaging`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `us-epa-electrical-components-effluent-guidelines`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售完整灯（`saleable_complete_lamps`）

这是 PCR 参考产品。灯净质量与随附包装分开报告，并保留按路线分层的质量和件数。

- 选定流：白炽灯或放电灯，弧光灯 `73b0a95f-d108-410a-ba2e-fac299a73970`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按参考流归一化定义的 1 kg 可销售完整灯净输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 可销售完整灯净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

###### 随附包装（`supplied_packaging`）

将随 1 kg 灯净输出供应的初级和次级包装作为单独的产品关联流报告。

- 选定流：按材料区分的随附包装
- 流属性/单位：Mass / kg
- 数量规则：随参考输出供应的实测包装质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售完整灯净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_test_packaging`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

###### 测试失败品和精整废物（`finishing_test_waste`）

按路线、危害状态和去向记录失败灯、破损外壳、废测试件、精整残渣和包装废物。

- 选定流：精整、测试及包装废物
- 流属性/单位：Mass / kg
- 数量规则：按材料、路线和去向称量的废物及不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售完整灯净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_log`
- 来源：`pep-ecopassport-pcr-ed4-2021`; `us-epa-universal-waste-lamps`

##### 基本流

###### 老炼和测试排放（`test_releases`）

仅当灯破损、点亮老炼、测试通风以及相关燃烧或发电产生的排放直接跨越前景环境边界时，记录其实测值。

- 选定流：按物质区分的空气或水体排放
- 流属性/单位：Mass / kg
- 数量规则：按物质和环境区室的监测排放或有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售完整灯净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_release_monitoring`
- 来源：`us-epa-mercury-emissions-lamp-manufacture`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 路线特定及多产品制造 | 首先按灯丝、荧光、其他放电、弧光及集成控制装置路线细分计量过程和生产记录。将专用涂层、配料、电极、弧管、老炼及废物处理线与其实测产品保持关联。 | pep-ecopassport-pcr-ed4-2021 |
| `allocation_physical_relationship` | 无法避免的共用公用工程和过程 | 无法细分时，采用最能反映因果关系的物理参数：能源采用计量运行时间或设备负荷，搬运采用处理质量；有记录的路线特定湿法处理可采用处理表面积；仅当产品尺寸和质量足够同质时才采用件数。 | pep-ecopassport-pcr-ed4-2021; us-epa-electrical-components-effluent-guidelines |
| `allocation_mass_weighted_mix` | 类别生产组合 | 仅按同一报告期合格可销售输出净质量汇总路线特定结果。保留每条路线结果及其权重；不得将市场份额、销售收入、灯件数、LED 产量或单一产品作为未披露代理。 | pep-ecopassport-pcr-ed4-2021; welz-et-al-2011-lighting-lca |
| `allocation_recycling_no_credit` | 制造边角料和回收材料 | 报告制造废物链至声明交接点的处理投入和产出。不得从工厂门清单中扣除避免负荷的回收收益；任何边界外收益应放入另行声明的生命周期情景。 | pep-ecopassport-pcr-ed4-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_batch` | `component_supply`; `envelope_preparation`; 路线装配过程；`control_gear_integration` | 材料和部件投入/产出 | 采购、仓储、物料清单及批次领料记录 | 物料 id；路线；供应商；期初/期末库存；采购量；领用量；退回量；不合格量；实测质量；批次 | 将仓储和批次记录与生产订单核对；以件数记录时称量具有代表性的部件 | kg 和 item | 每批，报告期汇总 | 与参考输出相同报告期 | 每个纳入的生产场址及外包前景操作 | 按材料、路线、型号和场址汇总净验收或领用质量；按路线输出质量归一化 | 校准秤记录；库存核对；供应商规格；生产订单 |
| `cp_transport_records` | `component_supply` | 入厂运输 | 运输及货运记录 | 起点；终点；方式；距离；交付质量；载重；空返规则 | 使用运输单据和路线距离证据，分别记录方式和供应商 | tkm | 每批运输，报告期汇总 | 与材料接收相同报告期 | 前景边界内全部入厂流 | 各方式交付吨数乘以距离并求和 | 运费发票；提单；路线证据 |
| `cp_water_chemical_batch` | `envelope_preparation` | 工艺水和化学品 | 仪表、采购、储罐及批次记录 | 物质；浓度；期初/期末库存；采购量；投料量；回收量；废弃量；仪表读数 | 将仪表和物料平衡与准备批次核对 | kg、m3 或 L，并记录密度/浓度 | 每批或仪表区间 | 覆盖所纳入路线的代表性运行期 | 各准备生产线和场址 | 换算为物质质量；按路线汇总并按准备输出质量归一化 | 校准仪表；批次单；实验室浓度；库存核对 |
| `cp_energy_meter` | 全部前景过程 | 电力、燃料和热能 | 分表、公用工程、燃料及设备运行记录 | 载体；仪表起止读数；燃料数量；运行时间；负荷；分配驱动；场址 | 优先分表计量；否则用有记录的额定负荷及实测运行时间计算，并按因果驱动分配共用负荷 | kWh 或 MJ | 仪表区间或生产批次 | 覆盖生产波动的代表性运行期 | 每个纳入场址和生产线 | 按载体、过程、路线和场址汇总；按相应输出归一化 | 仪表校准；公用工程账单核对；设备日志 |
| `cp_fill_dose` | `filament_lamp_assembly` | 惰性气体及卤素充入 | 钢瓶、配料及批次记录 | 物质；钢瓶/储罐质量；期初/期末库存；充入量；回收量；批次；型号 | 重量法或经验证的配料系统平衡 | kg、g 或 mg，换算为 kg | 每批 | 与路线输出相同报告期 | 各配料生产线和场址 | 净充入质量除以合格路线输出质量 | 配料校准；钢瓶称量单；批次核对 |
| `cp_mercury_fill_balance` | `fluorescent_lamp_assembly`; `discharge_arc_lamp_assembly` | 汞及其他填充材料投入、产品含量、回收、废物和损失 | 安全库存、配料、产品测试、回收、废物及排放记录 | 物质；期初/期末库存；采购量；充入量；产品含量；回收量；废物；空气排放；水体排放；未解释平衡；批次；路线 | 使用校准配料系统和独立废物/排放记录建立闭合物料平衡 | kg、g 或 mg，换算为 kg | 每批并进行期间核对 | 与路线输出相同报告期 | 每个纳入的汞或金属蒸气配料操作 | 投入加期初库存减期末库存等于产品含量、回收、废物及环境排放之和；调查残差 | 配料校准；安全库存；产品化验或工程剂量验证；废物联单；排放监测 |
| `cp_production_output` | 全部前景过程 | 合格中间品和可销售输出 | 生产订单、件数、质量、质量放行及转移记录 | 路线；子类型；型号；件数；毛/净质量；包装质量；合格量；不合格量；转移量；放行状态 | 称量输出，或采用已验证的路线/型号件数转质量因子并定期复称 | kg 和 item | 每批或每班 | 与清单投入相同报告期 | 每个纳入场址和路线 | 按路线/型号汇总合格净质量；保留不合格质量并核对转移 | 校准秤；放行记录；件数转质量抽样 |
| `cp_waste_log` | 全部前景过程 | 废物和不合格品 | 废物台账、地磅单、有害废物联单和处理回执 | 过程；路线；物质/材料；危废代码；质量；去向；回收/处理；日期 | 交接时称量，并将内部不合格记录与外部回执核对 | kg | 每次废物转移，报告期汇总 | 与生产相同报告期 | 每个纳入场址和承包商交接点 | 按过程、路线、材料、危害类别和去向汇总 | 地磅单；联单；承包商回执；内部不合格记录 |
| `cp_release_monitoring` | `envelope_preparation`; 荧光/放电/弧光装配；`finishing_testing_packaging` | 空气和水体排放 | 烟道、工作场所捕集、废水、许可、事故及质量平衡记录 | 物质；区室；浓度；流量；持续时间；方法；检出限；事故数量；计算输入 | 要求时使用直接监测；否则对采集的活动记录应用有文件支持的计算，并核对含汞排放 | kg 物质 | 监测事件、批次或许可区间 | 与生产相同报告期 | 每个纳入的直接排放点和事故 | 按物质、区室、过程、路线和场址汇总质量 | 实验室报告；校准监测仪；许可报告；事故记录；计算审计 |
| `cp_finishing_test_packaging` | `finishing_testing_packaging` | 精整材料、测试能源、包装及放行性能 | 物料清单、包装规格、仪表、测试、老炼和质量放行记录 | 型号；路线；精整材料；包装材料/质量；测试电力；点亮时间；额定功率；光通量；CRI；CCT/光谱；额定寿命；灯头/接口；合格/不合格 | 将精整和测试记录关联到放行生产批次，并单独称量随附包装 | kg、kWh、W、lm、h、K 及声明测试单位 | 每批次，报告期汇总 | 与可销售输出相同报告期 | 每个精整和出厂测试操作 | 按批次汇总清单流；仅在明确报告组合时按质量加权性能限定信息 | 测试设备校准；包装称量记录；放行证书；产品规格 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每条清单记录 | 归一化数量 = 报告期过程数量 / 可归因于该过程和路线的报告期合格可销售完整灯净质量。 | 过程数量；合格路线输出质量；转移及不合格核对 | 每 1 kg 可销售完整灯净质量的数量 | pep-ecopassport-pcr-ed4-2021 |
| `calc_count_to_mass` | 以件数记录的灯和部件 | 质量 = 合格件数 × 同路线、型号、场址和报告期实测的每件平均净质量；设计或供应商变更后更新因子。 | 件数；抽样单件质量；型号及路线标识 | kg 及有记录的换算因子 | pep-ecopassport-pcr-ed4-2021 |
| `calc_material_balance` | 材料和部件 | 净消耗质量 = 期初库存 + 接收量 − 期末库存 − 退回量 − 转出的回收材料；与产品、废物和实测排放项核对。 | 库存、采购、退回、回收、产品、废物及排放记录 | 净材料投入及平衡残差 | pep-ecopassport-pcr-ed4-2021 |
| `calc_mercury_balance` | 含汞路线 | 汞投入 + 期初库存 − 期末库存 = 产品含汞量 + 回收汞 + 废物中的汞 + 空气排放 + 水体排放 + 有记录残差。负值或无法解释的残差校验失败。 | 安全汞库存；剂量；产品含量；回收；废物；排放记录 | 路线特定汞清单及残差 | eu-mercury-regulation-2017-852-consolidated; us-epa-mercury-emissions-lamp-manufacture |
| `calc_route_mix` | 混合类别数据集 | 混合数量 = sum（路线归一化数量 × 路线可销售净质量）/ sum（路线可销售净质量）。与汇总值一并发布路线权重及分路线结果。 | 路线特定归一化结果；路线可销售净质量 | 质量加权类别生产组合 | pep-ecopassport-pcr-ed4-2021; welz-et-al-2011-lighting-lca |
| `calc_transport_service` | 入厂运输 | 每种方式、每批运输服务 = 交付质量（吨）× 路线距离（km）；按方式求和。 | 批次质量；距离；方式 | 各运输方式的 tkm | pep-ecopassport-pcr-ed4-2021 |
| `calc_emission_from_monitoring` | 监测排放 | 排放质量 = 实测浓度 × 实测流量 × 持续时间，并进行单位换算和声明低于检出限的处理；事故数量另行相加。 | 浓度；流量；持续时间；检出限；事故记录 | 按区室的 kg 物质 | us-epa-mercury-emissions-lamp-manufacture; us-epa-electrical-components-effluent-guidelines |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_scope` | 参考产品和路线 | 证明输出是完整的灯丝灯、荧光灯、其他放电灯或弧光灯，而不是 LED/OLED 光源、灯具、部件、单独控制装置、蜡烛或灯丝中间品。 | 产品规格、CPC 范围记录、物料清单、路线声明、产品照片或图纸 |
| `dq_temporal` | 前景记录 | 使用一致且具有代表性的报告期；声明日期、停产、缺失区间、异常批次及任何调整。 | 仪表覆盖报告、生产日历、核对说明 |
| `dq_geographic` | 前景和次级数据 | 识别每个生产场址和供应商地域；记录上游数据集及能源组合的地域替代。 | 场址清单、供应商记录、数据集元数据、电力来源记录 |
| `dq_technology` | 全部路线特定数据 | 保留技术路线、子类型、外壳/弧管材料、填充配方、集成控制装置状态及相关工艺配置。不同路线之间的数据转用须有工程等效性审查记录。 | 路线矩阵、工艺流程图、物料清单、设备清单、等效性审查 |
| `dq_completeness` | 质量、能源、水、废物和排放 | 核对采购/领用材料、产品、不合格品、废物、回收、排放及库存变化；记录截断，且不得用截断遗漏有害或环境显著成分。 | 物料平衡、公用工程核对、废物联单、排放报告、截断清单 |
| `dq_hazardous_materials` | 汞、荧光粉、金属卤化物、钠、电极涂层、酸和溶剂 | 保留物质身份、浓度或剂量、批次关联、回收、废物去向和环境排放。监管阈值可用作 QA 检查，但不得替代实测前景数量。 | 安全数据表、配料记录、实验室结果、安全库存、废物联单、许可报告 |
| `dq_performance` | 必需限定信息 | 将额定功率、光通量、CRI、CCT/光谱、额定寿命/测试依据、灯头/接口和用途关联到清单所代表的同一产品型号和生产批次。 | 产品规格、校准的放行测试结果、批次关联 |
| `dq_secondary_data` | 上游数据集 | 选择可得的最具代表性的已验证数据集，并评价时间、地域和技术代表性、完整性、一致性、可再现性、来源和不确定性。 | 数据集质量评价及替代记录 |
| `dq_uncertainty` | 计算值和分配值 | 记录仪表准确度、抽样变异、件数转质量变异、分配驱动、低于检出限处理和平衡残差；识别对不确定性有实质贡献的因素。 | 校准证书、抽样统计、计算工作簿、不确定性说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求流 UUID `73b0a95f-d108-410a-ba2e-fac299a73970`、Product flow、state 100 身份证据、CPC 46510 范围、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及单位 kg。 |  |
| `validate_product_exclusions` | 产品身份 | 若参考输出是 LED/OLED 光源或模组、灯具、照明装置、自带电源的便携灯、发光标志、灯部件、单独控制装置、蜡烛、钨丝或其他中间品，则失败。 | eu-ecodesign-light-sources-2019-2020 |
| `validate_route_declared` | 每个前景数据包 | 路线特定数据包须且仅须声明一条路线；混合数据包须声明完整路线清单及质量权重。至少存在一个匹配的条件路线过程。 | eu-ecodesign-light-sources-2019-2020; us-epa-electrical-components-effluent-guidelines |
| `validate_no_single_route_proxy` | 混合类别数据集 | 若范围内任一灯丝、荧光、其他放电或弧光路线被 LED、灯具、部件或其他灯路线代表，而没有单独实测数据和明确审查决定，则类别整体声明失败。 | welz-et-al-2011-lighting-lca |
| `validate_reference_amount` | 可销售输出 | 归一化后须正好为 1 kg 可销售完整灯净质量；随附包装质量须另行报告。 | pep-ecopassport-pcr-ed4-2021 |
| `validate_process_transfer_balance` | 过程图 | 每个纳入过程转移到下一过程的输出须与下一过程投入、不合格品、库存变化及任何外部转移核对。 | pep-ecopassport-pcr-ed4-2021 |
| `validate_material_completeness` | 制造清单 | 要求主要材料/部件、能源、适用时的水和化学品、填充材料、包装、可销售输出、不合格品、废物及直接排放的路线特定记录。缺失项须有合理的“不适用”或有记录的截断决定。 | pep-ecopassport-pcr-ed4-2021; us-epa-electrical-components-effluent-guidelines |
| `validate_mercury_balance` | 荧光及含汞放电或弧光路线 | 要求非负且核对完成的汞平衡，以及按物质区分的空气、水体、产品、回收和废物项。监管最大值不得作为前景数量。 | eu-mercury-regulation-2017-852-consolidated; us-epa-mercury-emissions-lamp-manufacture |
| `validate_integrated_control_gear` | 自镇流或集成产品 | 存在集成控制装置时须记录其质量和装配清单；若参考产品包含单独控制装置或整个灯具则失败。 | eu-ecodesign-light-sources-2019-2020 |
| `validate_data_quality` | 前景和次级证据 | 要求报告期、场址、路线、校准、完整性、来源、代表性、分配及不确定性证据足以独立再现。 | pep-ecopassport-pcr-ed4-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 审查和发布后作为 `secondary_dataset`；`background_dataset` |
| downstream_use | 产品 LCA、EPD/PEP 研究、采购足迹、建筑或公共照明生命周期模型及技术特定情景分析的制造阶段输入 |
| allowed_use | 路线特定工厂门建模；已披露的质量加权生产组合；连接独立的分销、使用、维护及报废情景 |
| excluded_use | 没有独立流明/寿命/使用模型的直接照明服务比较；代表 LED 或灯具；用单一路线或型号代表整个类别；未披露的法规合规声明；将监管阈值作为实测清单 |
| required_metadata | PCR id 和版本；参考流 UUID/属性/单位组；路线及子类型；产品和包装质量；件数转质量因子；集成控制装置状态；外壳/弧管、电极、填充和荧光粉描述；额定功率、光通量、CRI、CCT/光谱及寿命/测试依据；场址；地域；报告期；路线权重；上游数据集；截断；分配；直接排放；废物去向 |
| required_quality_disclosure | 前景记录覆盖率；仪表和秤校准；物料及汞平衡残差；路线代表性；供应商和次级数据替代；低于检出限处理；不确定性；缺失的支持流 UUID；排除的下游阶段 |
| update_trigger | 产品配方或路线变化；汞/添加剂变化；外壳、电极、荧光粉、填充物、灯头或控制装置重新设计；材料或能源变化；供应商/场址/地域变化；工艺或治理设施变化；监管限制变化；路线组合、数据质量或参考流身份发生实质变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `pep-ecopassport-pcr-ed4-2021` | `standard` | PEP ecopassport® Program, Product Category Rules for Electrical, Electronic and HVAC-R Products, PCR-ed4-EN-2021 09 06, https://register.pep-ecopassport.org/documents（检索于 2026-08-09） | 制造边界、参考流、组成材料及包装、截断、分配、次级数据层级和数据质量规则 |
| `eu-ecodesign-light-sources-2019-2020` | `standard` | Commission Regulation (EU) 2019/2020 of 1 October 2019, ELI: http://data.europa.eu/eli/reg/2019/2020/oj（检索于 2026-08-09） | 光源范围、技术定义、集成/单独控制装置区分及性能限定信息 |
| `eu-mercury-regulation-2017-852-consolidated` | `standard` | Regulation (EU) 2017/852 on mercury, consolidated text including 2024 amendments, CELEX 02017R0852-20240730, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02017R0852-20240730（检索于 2026-08-09） | 路线特定含汞产品识别、法规变化更新触发及汞清单 QA 语境 |
| `eu-mercury-products-inventory-2019` | `official_guidance` | European Commission, Indicative Non-Exhaustive List of Existing Mercury-Added Products and Relevant EU Instruments, Revision 1, 29 April 2019, https://circabc.europa.eu/sd/a/d198684c-0834-4f20-9682-dc66553ed066/Inventory%20art%208%287%29%20Mercury%20Reg%2020190429.pdf（检索于 2026-08-09） | 识别荧光、金属卤化物、钠、汞蒸气、短弧、UV 及其他含汞放电路线和部件 |
| `us-epa-electrical-components-effluent-guidelines` | `official_guidance` | U.S. EPA, Development Document for Effluent Limitations Guidelines and Standards for the Electrical and Electronic Components Point Source Category, EPA 440/1-83/075, Phase II, 1983, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=00003AAW.TXT（检索于 2026-08-09） | 白炽灯、荧光灯、其他放电灯、灯丝和灯头的过程分解；用水、化学品、废物和排放采集点 |
| `us-epa-mercury-emissions-lamp-manufacture` | `official_guidance` | U.S. EPA, Locating and Estimating Air Emissions from Sources of Mercury and Mercury Compounds, EPA-454/R-97-012, 1997, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000D3YR.TXT（检索于 2026-08-09） | 制灯过程中汞配料、密闭、排放点、监测及质量平衡要求 |
| `us-epa-universal-waste-lamps` | `official_guidance` | U.S. EPA, Universal Waste — Lamps, 40 CFR part 273 context, https://www.epa.gov/hw/universal-waste（检索于 2026-08-09） | 灯与灯具区分及荧光灯、HID、汞蒸气灯、高压钠灯和金属卤化物灯的下游废物披露 |
| `us-doe-critical-materials-strategy-2011` | `official_guidance` | U.S. Department of Energy, Critical Materials Strategy, December 2011, https://www.energy.gov/sites/prod/files/piprod/documents/cms_dec_17_full_web.pdf（检索于 2026-08-09） | 荧光玻璃管、荧光粉涂层及部件装配供应链和荧光粉材料披露 |
| `welz-et-al-2011-lighting-lca` | `literature` | Welz, Hischier and Hilty, Environmental impacts of lighting technologies — Life cycle assessment and sensitivity analysis, Environmental Impact Assessment Review 31 (2011) 334–343, DOI: 10.1016/j.eiar.2010.08.004 | 灯丝和荧光技术具有不同材料、制造、控制装置和报废清单，须按路线建模的证据 |
| `ams-osram-xbo-short-arc-lca` | `literature` | ams OSRAM, Product Life Cycle Assessment — XBO DHP Xenon Short-Arc Lamp, https://look.ams-osram.com/m/5e0a01102baae38b/original/LCA_XBO_aO.pdf（检索于 2026-08-09） | 弧光路线石英、电极、装配、包装和制造能耗过程证据；不作为其他路线的数值代理 |
