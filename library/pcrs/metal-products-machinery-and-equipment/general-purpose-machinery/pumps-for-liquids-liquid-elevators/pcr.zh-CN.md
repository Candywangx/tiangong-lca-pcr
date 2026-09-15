---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pumps-for-liquids-liquid-elevators
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 液体泵；液体提升机

## 1. 范围与适用性

本 PCR 适用于以机械作用或物理作用输送液体的完整泵，以及投放市场的完整液体提升机。所涵盖产品包括叶轮式泵、容积式泵、手动泵或动力驱动泵、计量泵或分配泵和液体提升机，前提是前景数据包明确声明泵送原理、被输送液体的相容性、驱动装置配置、工况点、结构材料和交付市场状态。

核心数据集边界为成品泵从摇篮到制造商工厂大门的生产，涵盖采购组件的上游生产、报告制造商实施的准备或机加工、装配、生产测试、包装及制造废物处理。工厂大门后的安装和配送、维护、运行电力、使用阶段泵送液体损失及产品生命末期均不在核心边界内，须另建情景。欧盟水泵法规表明，对其覆盖的清水叶轮泵子类，运行能源可能主导全生命周期影响。因此，不得根据制造参考流推断使用阶段模型，而应采用声明的工况、效率、负载曲线及运行小时数建模。

单独供应的泵或液体提升机零件、空气泵或真空泵、压缩机、水力或气动动力装置、阀门，以及不输送液体的起重或输送设备均不属于本 PCR。集成在其他产品中的泵仅在泵本身是声明的前景输出，且其质量和制造交换能够与主机产品分离时纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pumps-for-liquids-liquid-elevators |
| classification_refs | CPC 3.0: 43220, Pumps for liquids; liquid elevators |
| covered_products | 完整液体泵和完整液体提升机，包括叶轮式、容积式、计量式、分配式、手动及动力驱动设计 |
| excluded_products | 单独供应的零件；空气泵或真空泵；气体压缩机；水力或气动动力装置；阀门；泵无法与主机分离的含泵主机产品 |
| representative_product | 适用于所声明液体及额定工况点的成品泵，是否随泵供应驱动装置须明确声明 |
| production_route | 供应商组件生产，随后进行场址特定的组件准备、装配、生产测试、包装及工厂大门交付 |
| market_state | 制造商工厂大门处已完成、经测试且可销售的泵；运输包装与泵净质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能在声明额定工况点输送声明液体的成品泵 |
| How much | 制造商工厂大门处 1 kg 成品泵净质量，不含运输包装 |
| How well | 声明泵送原理、液体相容性、是否包含驱动装置、额定流量和扬程或压力、效率或性能测试依据及结构材料 |
| How long or cycle | 一台交付泵；使用寿命和运行循环不属于制造参考流，任何使用阶段情景均须另行声明 |
| reference_flow_link | `pump_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品泵净质量 |
| 参考产品流 | 泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 泵送原理；被输送液体及相容性限值；是否包含驱动装置；额定流量；额定扬程或排出压力；额定转速；效率或测试依据；过流部件材料；密封配置；生产地域；报告期；泵净质量；运输包装质量 |

构建前景数据包时，所有必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息的数据包视为参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 成品泵参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在完成生产测试后、加装运输包装前测量成品泵净质量；所有清单交换均归一化到 1 kg 泵净质量。 |
| `component_mass_conversion` | 按件数记录的组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅依据产品特定的 BOM 或称量记录将件数换算为质量；保留件数、实测或规定的单件质量及换算证据。 |
| `electrical_energy_conversion` | 前景过程使用的外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表记录的 kWh，并按 1 kWh = 3.6 MJ 换算；电表同时服务其他产品时披露分配方法。 |
| `test_water_mass_conversion` | 生产测试用水及产生的废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先测量质量；按体积计量时，使用声明条件下的实测密度换算，并保留体积、密度、温度及换算过程。无证据时不得假设 1 kg/L。 |
| `performance_test_basis` | 受法规或标准测试约束的泵 | 声明的测试属性 | 声明的测试单位 | 测试介质、工况点、扬程或压力、流量、转速、叶轮或排量设置、测试时长及适用标准须成组保留。对欧盟委员会第 547/2012 号法规覆盖的子类，保留清洁冷水及 BEP/PL/OL 测试依据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂大门处采购的泵专用组件和半成品零件；仅当工厂在前景边界内实施制造时，才以相应原材料取代这些组件 |
| starting_condition_role | 在保留真实首个前景边界交叉点的同时，避免采购组件数据集与场内制造重复计入 |
| product_classification_scope | CPC 43220 内的完整产品；单独供应的泵零件属于上游投入或本 PCR 身份之外的产品 |
| recursive_input_rule | 为纳入泵系统而采购的完整泵，作为具有自身数据集的上游产品投入记录一次，不在接收过程中再次拆分；零件按其实际跨界状态记录为具体零件或材料 |
| upstream_dataset_requirement | 每项采购组件、材料、电力、水、润滑剂和包装流均须配置地域和技术相适配的上游数据集；高质量占比或高影响投入优先采用供应商特定数据 |
| disclosure | 声明垂直一体化程度、采购与自制状态、所含驱动装置和控制装置、测试回路配置、包装边界、截断、废物去向、报告期、场址地域及分配选择 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 核心前景数据包 | 纳入上游组件或材料供应、在所选上游数据集未包含时的入厂运输、场内准备、装配、生产测试、包装及制造废物处理，直至工厂大门。 | `grundfos-magna3-epd-2024` |
| `boundary_no_component_double_count` | 采购零件和场内制造零件 | 每个物理零件按其首个前景边界交叉点记录。不得同时记录采购的完整组件和已包含在该组件中的原材料。 |  |
| `boundary_use_stage_separate` | 下游使用阶段建模 | 核心制造清单不包括运行电力和泵送服务。单独的使用阶段情景须声明工况、效率、负载曲线、运行小时、电力结构、控制方式及使用寿命。 | `eu-water-pump-regulation-547-2012` |
| `boundary_test_applicability` | 生产性能测试 | 纳入实际跨越工厂边界的生产测试能源和水。清洁冷水及 BEP/PL/OL 方法仅适用于欧盟委员会第 547/2012 号法规适用的泵；其他泵采用声明的适用测试方法。 | `eu-water-pump-regulation-547-2012` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | 组件接收与准备 | required | 所有成品泵均须识别入厂零件；仅记录报告场址实际实施的机加工、清洗或准备 | 前景组件准备 | 每 kg 泵净质量对应的合格组件质量和场内交换 |
| `pump_assembly` | 泵装配 | required | 始终纳入；仅当所售泵包含驱动装置时适用电动机行 | 前景装配 | 每 kg 泵净质量对应的测试前装配泵质量 |
| `production_testing` | 生产性能和泄漏测试 | required | 记录实际放行测试路线；仅当水作为测试介质跨界时适用水相关行 | 前景质量测试 | 每 kg 泵净质量对应的合格受试泵质量 |
| `packaging_release` | 包装和工厂大门放行 | required | 始终纳入放行；仅在使用瓦楞纸板时记录该行 | 前景包装和参考输出 | 1 kg 泵净质量，加上单独测量的运输包装 |

### 过程：组件接收与准备（`component_preparation`）

#### 输入

##### 产品流

###### 泵壳组件（`pump_casing`）

按泵壳首次进入前景过程时的采购或转移状态记录。材料牌号、铸造或制造路线、表面状态及过流表面规范均为产品特定限定信息。

- 选定流：泵壳组件
- 流属性/单位：Mass / kg
- 数量规则：计量用于最终通过工厂大门放行泵的合格泵壳投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receiving`
- 来源：`grundfos-magna3-epd-2024`

###### 泵叶轮组件（`pump_impeller`）

将交付泵内所有叶轮作为声明产品配置的一项汇总质量交换记录，不按级数扩展为笛卡尔组合。

- 选定流：泵叶轮组件
- 流属性/单位：Mass / kg
- 数量规则：交付泵内合格叶轮的实测质量或产品特定 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receiving`

###### 泵轴组件（`pump_shaft`）

记录交付泵内的泵轴；未经语义审查，不得以风力发电机轴或通用传动轴数据集替代。

- 选定流：泵轴组件
- 流属性/单位：Mass / kg
- 数量规则：交付泵内合格泵轴的实测质量或产品特定 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receiving`

###### 组件准备用电（`component_preparation_electricity`）

仅记录本过程边界内机加工、清洗设备、物料搬运及其他准备作业的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配给已放行泵产品的组件准备计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foreground_electricity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往回收的废钢（`steel_scrap_for_recycling`）

仅记录已分类且送往回收路线的黑色金属切屑、边角料和不合格黑色金属零件。其他金属或混合废物须在形成的数据集中另设原子行。

- 选定流：废钢 `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- 流属性/单位：Mass / kg
- 数量规则：称量并转移至经核实回收路线的黑色金属废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_records`

##### 基本流

### 过程：泵装配（`pump_assembly`）

#### 输入

##### 产品流

###### 随泵提供的电动机（`electric_motor`）

仅在电动机属于可销售泵组成部分时记录本行。裸轴泵或采用其他驱动方式的泵省略本行，并披露驱动装置边界。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：交付泵内电动机的实测质量或产品特定 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receiving`
- 来源：`grundfos-magna3-epd-2024`

###### 泵用轴承（`pump_bearing`）

记录泵内完整的滚珠轴承、滚柱轴承或滑动轴承；不得以轴承保持架代表完整轴承。

- 选定流：泵用轴承
- 流属性/单位：Mass / kg
- 数量规则：交付泵内轴承的实测质量或产品特定 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receiving`

###### 机械轴封（`mechanical_shaft_seal`）

存在机械轴封时记录完整密封组件。填料密封、磁力联轴器、隔膜和无轴封结构须使用各自具体行，不得归入本密封身份。

- 选定流：机械轴封
- 流属性/单位：Mass / kg
- 数量规则：交付泵内机械轴封的实测质量或产品特定 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receiving`

###### 装配时加入的润滑剂（`lubricant`）

仅记录留在交付泵内或由装配操作消耗的润滑剂。金属加工液或测试介质跨越前景边界时须另行识别。

- 选定流：润滑剂 `959f4657-43de-4558-988f-804bbb8c62a9`
- 流属性/单位：Mass / kg
- 数量规则：采购和领用记录与期末库存及泵产量核对，留在产品内的润滑剂另保留实测充注量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumable_records`

###### 泵装配用电（`assembly_electricity`）

记录分配至本过程的装配工具、连接作业、搬运及装配线辅助设备计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配给已放行泵产品的泵装配计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foreground_electricity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：生产性能和泄漏测试（`production_testing`）

#### 输入

##### 产品流

###### 用作测试介质的工艺用水（`test_process_water`）

记录用于水压、泄漏或性能测试而跨越场址边界的补充水。循环水不得重复计入；仅补充水和最终排水跨越过程边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配给通过测试泵的测试回路计量补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_water_balance`
- 来源：`eu-water-pump-regulation-547-2012`

###### 生产测试用电（`test_electricity`）

记录生产放行测试期间向试验台、泵驱动装置、仪器及测试回路辅助设备供应的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配给通过测试泵的计量测试电力；如存在单独计量的回收电力，则予以扣除
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foreground_electricity`
- 来源：`eu-water-pump-regulation-547-2012`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 测试排放废水（`test_wastewater`）

测试用水离开前景边界并进入排水或处理路线时记录。声明污染物和处理路线；无分析证据或法规证据时，不得将排水归类为危险废物。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：计量或按水量平衡计算并排至声明处理路线的测试用水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_test_water_balance`

##### 基本流

### 过程：包装和工厂大门放行（`packaging_release`）

#### 输入

##### 产品流

###### 瓦楞纸板运输包装（`corrugated_cardboard`）

记录作为运输包装跨界的瓦楞纸板。使用木托盘、聚合物薄膜、泡沫、捆扎带或其他包装时，须另设原子行。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：将采购和包装记录与已包装并放行的泵发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`grundfos-magna3-epd-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂大门成品泵（`pump_product`）

参考输出为通过声明放行测试的可销售泵净质量。运输包装不计入本输出质量，而作为单独投入流报告。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：Mass / kg
- 数量规则：对合格生产量归一化后恰为 1 kg 成品泵净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 成品泵净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finished_pump_mass`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享前景作业 | 在能够分别计量泵相关数据时，先细分电表、工作中心、试验台和生产线，再实施分配。 |  |
| `allocation_physical_driver` | 其余共享能源和耗材 | 采用反映因果关系且有记录的物理驱动因素，例如机器时间、测试时长、处理质量或计量工况；存在因果物理驱动因素时不得采用收入分配。 |  |
| `allocation_scrap_no_avoided_burden` | 送往回收的废钢 | 报告废钢离开前景边界时的质量和处理路线。核心清单内不得扣除所避免的原生材料负担；任何回收信用均须置于明确分离的下游方法中。 | `grundfos-magna3-epd-2024` |
| `allocation_rejects` | 不合格泵和返工组件 | 将返工能源和材料损失分配至产生该损失的生产批次。未成为可销售参考输出的泵保留为不合格品或在制品，不计入输出分母。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_receiving` | `component_preparation`; `pump_assembly` | 泵壳、叶轮、轴、电动机、轴承和密封 | BOM、收货记录、称量记录、生产完工记录 | 零件号；版本；供应商；数量；单件质量；合格质量；不合格质量；泵型号；是否含驱动装置 | 将受控 BOM 与合格收货量及放行泵型号核对；高质量占比零件由秤量复核 | kg 和 item | 每次 BOM 变更并按月核对 | 与输出相同的代表性报告期 | 声明数据集内全部生产场址 | 汇总放行泵内的合格组件质量，再除以放行泵净质量 | BOM 批准记录、校准记录、收货台账、差异调查 |
| `cp_foreground_electricity` | `component_preparation`; `pump_assembly`; `production_testing` | 过程电力 | 结算电表、分表、机器或试验台日志 | 期初和期末读数；kWh；过程；机器时间；测试时长；分配对象；回收电力 | 优先采用分表；否则采用因果物理驱动因素分配已核对的场址总表 | kWh，换算为 MJ | 连续或每班；按月汇总 | 至少连续 12 个代表性月份，或有理由说明的生产活动期 | 仅报告工厂 | 扣除单独计量的非生产负荷和回收电力，按过程分配，换算为 MJ，再除以放行泵净质量 | 电表校准、发票核对、分配工作表 |
| `cp_scrap_records` | `component_preparation` | 送往回收的黑色金属废料 | 校准秤单和回收商转移单 | 废物代码；合金类别；毛重和皮重；污染情况；去向；转移日期 | 称量每批出厂废料，并根据转移文件核实去向 | kg | 每批发运 | 与输出相同的代表性报告期 | 仅报告工厂 | 汇总符合条件且送往回收的黑色金属废料，再除以放行泵净质量 | 秤校准、转移单、回收商接收证明 |
| `cp_consumable_records` | `pump_assembly` | 润滑剂 | 采购、领用、库存和充注记录 | 产品代码；配方；期初库存；采购；期末库存；其他用途；实测充注；泄漏 | 对采购和库存实施质量平衡；剥离其他产品及非泵用途 | kg | 每月及每次充注设置变化 | 与输出相同的代表性报告期 | 仅报告工厂 | 期初库存加采购减期末库存和核实的其他用途，再除以放行泵净质量 | 库存核对、充注设备校准、差异复核 |
| `cp_test_water_balance` | `production_testing` | 测试用水投入和废水输出 | 水表、储罐液位、排水表、实验室和维护记录 | 补充水体积或质量；排水体积或质量；密度；温度；回路库存变化；泄漏；处理路线；污染物 | 计量补充水和排水；核对循环回路库存变化；污染物影响处理身份时进行取样 | kg；换算时保留体积和密度 | 每个测试活动期或连续；按月汇总 | 与输出相同的代表性报告期 | 声明数据集内全部生产测试回路 | 投入等于排水加库存变化、蒸发或其他单独有证据的损失；按因果测试时长或工况分配至合格泵 | 仪表校准、水量平衡闭合、样品结果、处理接收证明 |
| `cp_packaging_records` | `packaging_release` | 瓦楞纸板 | 包装规范、采购领用、包装和发运记录 | 包装代码；纸板等级；单件质量；使用数量；返回包装；损坏包装；泵型号 | 将包装领用量与已包装并放行的泵发运核对，并验证单件质量 | kg 和 item | 每次包装设计变更并按月核对 | 与输出相同的代表性报告期 | 报告包装场址 | 已发运泵的纸板净消耗量除以放行泵净质量 | 受控包装规范、秤量检查、库存核对 |
| `cp_finished_pump_mass` | `packaging_release` | 可销售泵净输出 | 校准秤、序列号记录、完工和放行记录 | 序列号或批次；型号；是否含驱动装置；泵净质量；包装质量；合格状态；放行日期 | 按适用性称量代表性单元或每台泵；将放行数量和净质量与生产台账核对 | kg 和 item | 每台放行泵或有统计依据的型号批次 | 与投入相同的代表性报告期 | 声明数据集内所有放行点 | 汇总通过放行测试的泵净质量；排除包装、不合格品和在制品 | 秤校准、放行证明、生产台账核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 组件、润滑剂、废料、废水和包装行 | 归一化数量 = 符合条件的行质量 / 放行泵净质量 | 采集的行质量；放行泵净质量 | kg/kg 成品泵净质量 |  |
| `calc_normalize_electricity` | 三个前景电力行 | 归一化电力 = 分配后的计量 kWh × 3.6 / 放行泵净质量 | 计量 kWh；分配驱动因素；放行泵净质量 | MJ/kg 成品泵净质量 |  |
| `calc_test_water_discharge` | `test_wastewater` | 排水质量 = 实测排水质量；无法取得时，为补充水质量减去经核实的回路库存增加、蒸发、泄漏及其他单独计量去向 | 补充水；回路库存变化；蒸发或损失证据；排水计量 | kg 废水/kg 成品泵净质量 |  |
| `calc_item_to_mass` | 按件数记录的 BOM 组件 | 组件质量 = 合格件数 × 经核实的产品特定单件质量 | 合格件数；受控单件质量 | kg 组件/kg 成品泵净质量 |  |
| `calc_reference_output` | `pump_product` | 所有符合条件的交换均除以放行泵净质量，使参考输出恰为 1 kg | 通过放行的泵净质量 | 1 kg 泵 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和 BOM | 识别泵型号系列、泵送原理、被输送液体相容性、驱动装置边界、工况点、过流材料、密封配置及市场状态；未经披露加权方法，不得平均边界有重大差异的配置。 | 产品规范、受控 BOM、放行记录、加权工作表 |
| `dq_temporal_representativeness` | 所有前景行 | 除非采用活动期生产方式，否则至少使用连续 12 个代表性月份；说明停机、异常测试、产品结构变化及外推。 | 报告期台账和代表性说明 |
| `dq_mass_balance` | 组件、输出、废料和包装 | 核对入厂组件和包装质量、可销售泵质量、在制品、不合格品、废料及有记录的库存变化；调查材料残差。 | 签署的质量平衡工作表和库存记录 |
| `dq_meter_quality` | 电力和水 | 使用经校准或法定控制的仪表；声明读数频率、缺失数据处理、共享仪表分配、换算因子及不确定性。 | 校准证书、发票、仪表日志、缺失值填补记录 |
| `dq_upstream_matching` | 采购产品和废物处理 | 匹配地域、技术、产品状态、再生含量及交付边界。高质量占比组件优先采用供应商特定数据；代理数据须披露并开展敏感性审查。 | 数据集选择日志和供应商证据 |
| `dq_completeness` | 前景清单 | 对跨越声明边界的其他每种材料、组件、化学品、能源载体、包装项、废物流和基本流排放分别添加原子行；不得将其隐藏在本 PCR 的现有行中。 | 签署的完整性清单、采购台账、废物登记、排放许可核对 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认参考输出恰为 1 kg 泵净质量，运输包装不计入泵质量，且所有必需限定信息均已提供。 |  |
| `validate_atomic_inventory` | 所有清单交换 | 拒绝集合标签及材料、公用工程、废物和排放的组合项。每项额外边界交叉均须以自身具体流行表示。 |  |
| `validate_uuid_semantics` | 含 UUID 的行 | 确认公开状态、英文和中文基准名称、流类型、分类、属性、单位组及产品状态与前景行保持语义相容。 |  |
| `validate_mass_balance` | 组件准备至放行 | 核实组件、废料、不合格品、在制品、泵净质量及包装的平衡在场址记录的测量不确定性内闭合；未解决的残差须纠正或披露。 |  |
| `validate_test_basis` | 生产测试 | 核实已声明测试介质、测试工况、时长、驱动能源、水循环及合格输出分母。对受法规约束的清水叶轮泵子类，核实适用的欧盟委员会第 547/2012 号法规测试依据。 | `eu-water-pump-regulation-547-2012` |
| `validate_use_stage_separation` | 下游生命周期模型 | 拒绝仅按泵质量推算运行电力的使用阶段结果。须提供声明的效率或实测功率、工况或负载曲线、年度运行小时、电力结构、控制方式和使用寿命。 | `eu-water-pump-regulation-547-2012`; `grundfos-magna3-epd-2024` |
| `validate_unresolved_ranges` | 重要前景流 | 缺乏独立且边界相容的经验范围时，将其作为审查需求，不得据此虚构上下限；在取得证据前保留前景采集要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明成品泵配置的从摇篮到制造商工厂大门前景生产数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当产品边界、工况、驱动装置是否包含、地域、技术及数据质量相容时，用于产品和项目 LCA、供应链模型、环境声明、采购研究及比较研究 |
| excluded_use | 根据质量制造数据直接比较泵送服务效率；根据泵质量自动估算使用阶段电力；将单独供应的零件表示为完整泵；未经披露混合裸轴泵和电机集成泵 |
| required_metadata | PCR id 和版本语境；泵型号系列；泵送原理；被输送液体；额定流量和扬程或压力；额定转速；效率或测试依据；是否含驱动和控制装置；过流材料；密封配置；泵净质量；包装质量；工厂地域；报告期；垂直一体化程度；上游数据集选择；分配及截断决定 |
| required_quality_disclosure | 一手数据占比；时间覆盖；仪表和秤质量；BOM 核对；质量平衡闭合；供应商数据覆盖；代理数据使用；测试回路水量平衡；废物去向；未解决 UUID；未解决范围证据需求；不确定性和数据缺口 |
| update_trigger | 产品结构、驱动装置边界、供应商路线、制造或测试技术、包装、工厂能源结构、分配方法、报告期、法规测试依据发生重大变化，或获得新核实的 UUID 或范围证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | CPC 3.0 代码和英文产品类别身份的官方依据 |
| `un-cpc-1-1-chinese-2008` | `official_guidance` | 联合国统计司，《产品总分类版本 1.1》中文版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期：2026-09-05） | 官方中文类别术语，以及单独供应零件另行分类的确认 |
| `cn-nbs-product-classification-2010` | `official_guidance` | 中华人民共和国国家统计局，《统计用产品分类目录》351801—351803，https://www.stats.gov.cn/sj/tjbz/tjypflml/2010/35/3518.html（检索日期：2026-09-05） | 区分泵、液体提升机及其零件的专业中文术语 |
| `eu-water-pump-regulation-547-2012` | `standard` | 欧盟委员会 2012 年 6 月 25 日第 547/2012 号法规，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012R0547（检索日期：2026-09-05） | 范围受限的清水叶轮泵定义、性能测试依据、可重复性、产品信息、使用阶段重要性及拆解信息 |
| `grundfos-magna3-epd-2024` | `dataset` | Grundfos Holding A/S 与 Institut Bauen und Umwelt e.V.，环境产品声明 EPD-GRU-20240273-CBA1-EN，2024 年 8 月 1 日，https://www.rskdatabasen.se/infodocs/EPD/EPD_0000534.pdf（检索日期：2026-09-05） | 经核实的泵组成、制造、装配、包装、工厂数据采集、参考单位换算、使用阶段电力建模及生命末期分离示例；不用于推断跨类别数值范围 |
