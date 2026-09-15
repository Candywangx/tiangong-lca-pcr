---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.nuclear-reactors
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 核反应堆

## 1. 范围与适用性

本 PCR 适用于作为制成设备的完整未装料核反应堆制造前景数据包。范围包括反应堆压力边界、堆内构件与堆芯支承结构、已安装的反应性控制驱动设备、最终装配、清洁、检验、工厂验收试验，以及在声明的制造商大门处交付。声明的产品配置必须说明反应堆技术、热功率或设计额定值、压力边界范围、纳入的控制与仪控设备、核安全质量等级、设计寿命、装配地点和交付状态。

本 PCR 不包括核燃料和燃料元件、未装入参考产品而单独供应的反应堆零部件、作为单独产品供应的蒸汽发生器和其他锅炉设备、汽轮机和发电机、建筑物和土建工程、制造商所声明大门之外的现场安装、装有核燃料的调试、运行和发电、维护、乏燃料管理及退役。仅当声明产品配置和路线特定交换时，本 PCR 才适用于水冷堆及其他反应堆技术；数据生产者不得以整座核电站替代制成的反应堆设备。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.nuclear-reactors |
| classification_refs | CPC 3.0：42310，核反应堆 |
| covered_products | 作为制成设备交付的完整未装料核反应堆，包括声明范围内的压力边界、堆内构件/堆芯支承结构及已安装的反应性控制驱动设备 |
| excluded_products | 核燃料和燃料元件；单独供应的反应堆零部件；单独供应的蒸汽发生器、锅炉、汽轮机或发电机；完整核电站建设；土建工程；运行、维护、乏燃料管理和退役 |
| representative_product | 一台依据制造配置及工厂验收文件通过验收的完整未装料核反应堆 |
| production_route | 合格材料接收；压力边界成形、机加工、焊接及热处理；堆内构件制造和清洁；最终装配、检验及工厂验收试验 |
| market_state | 在声明的制造商大门处通过验收的完整设备，未装料、未受辐照且尚未投入现场运行 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供满足声明的设计、压力边界、反应性控制及制造验收要求的完整未装料核反应堆 |
| How much | 一台通过验收的反应堆 |
| How well | 符合声明的技术、设计额定值、核安全质量等级、压力边界范围、产品配置和验收试验计划 |
| How long or cycle | 声明的反应堆设计寿命；制造负荷在制造商大门交付时一次性计入 |
| reference_flow_link | 参考流为通过验收的完整反应堆输出 `final_nuclear_reactor_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 Item(s) |
| 参考产品流 | 核反应堆（UUID 未解决） |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 反应堆技术；热功率或设计额定值；压力边界范围；纳入的堆内构件和控制驱动设备；核安全质量等级及适用制造规范；设计寿命；制造商及生产地理范围；装配地点；制造商大门定义；交付状态；验收产品总质量；无燃料且未受辐照状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_item` | 参考产品和验收输出 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计数符合声明产品配置并通过验收的完整未装料反应堆。须将验收产品总质量作为必需限定信息另行报告；不得把核电站、反应堆零部件或燃料元件换算为参考产品。 |
| `mu_mass` | 固体材料、液态水、液态废物、废钢及直接二氧化碳 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的质量记录或有记录的密度换算。将工艺用水或废水的体积换算为质量时，须说明密度、温度和组成，并避免重复计算内部中间产品转移。 |
| `mu_gas_volume` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积，并声明压力、温度和参照条件。将供应商或仪表单位换算到所声明的 m3 基准，且不得合并两种气体。 |
| `mu_electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按过程保留电能计量。采用 3.6 MJ/kWh 将 kWh 换算为 MJ；不得将上游电网排放作为前景基本流重复加入。 |
| `mu_component_count` | 控制棒驱动机构 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 计数通过验收并已安装的机构，并识别设计特定的机构类型。如有质量数据，应作为辅助前景数据保留，不得替代件数。 |

## 5. 系统边界

前景边界起于可追溯的外购材料、合格零部件和内部中间产品进入制造组织，止于一台完整未装料反应堆通过声明的制造验收大门。外购产品的上游生产通过背景数据集链接；前景仅包括制造商运营控制下的交换。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可追溯的外购钢板、不锈钢原料、设计特定合金、合格焊接材料、控制驱动设备及公用工程在首个纳入制造场址接收 |
| starting_condition_role | 上游数据向反应堆制造前景的交接点 |
| product_classification_scope | 完整核反应堆设备；不包括燃料、单独供应的反应堆零部件、单独的蒸汽发生设备及完整核电站建设 |
| recursive_input_rule | 部分装配的反应堆在纳入场址之间转移时，在两个过程边界以相同身份和数量记录一个内部中间产品流；不得递归套用本 PCR，也不得重复计入上游负荷 |
| upstream_dataset_requirement | 每项外购材料、零部件、燃料、化学品、水和电力投入均须链接到在地理和技术上具有代表性的上游数据集；核级生产存在实质差异时优先采用供应商特定数据 |
| disclosure | 声明纳入场址、所有权/运营控制边界、装配地点、制造商大门交付点、反应堆技术和配置、单独供应零部件的处理、排除的现场工作，以及任何数据缺口或代理数据 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_manufacturing_gate` | 前景制造 | 当相关活动服务于参考产品时，纳入材料接收、成形、机加工、焊接、热处理、清洁、无损检测、尺寸检验、装配、压力/密封/电气/功能试验及制造商大门交付。 | `iaea-np-t-3-21-2016`; `us-nrc-ap1000-ser-ch4` |
| `sb_product_exclusions` | 产品边界 | 排除燃料元件、单独供应的反应堆零部件、单独的锅炉或蒸汽发生器、完整核电站建设、土建工程、装料调试、运行和寿命终结；研究明确将其作为独立产品系统加入时除外。 | `un-cpc-3-0-2025`; `iaea-ssg-56-2020` |
| `sb_upstream_linkage` | 外购投入 | 在前景中记录外购投入数量，并通过上游数据集链接其生产负荷；不得将上游过程产生的基本流作为前景直接排放重复计入。 |  |
| `sb_direct_emissions` | 前景基本流 | 仅报告纳入制造设备直接排放的污染物。电力和材料生产的上游排放留在相应链接的上游数据集中。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pressure_boundary_fabrication` | 反应堆压力边界制造 | `required` | 完整反应堆必须纳入；零部件清单按声明的反应堆技术调整 | 前景成形、机加工、焊接、热处理、清洁和检验 | 每套装入一台参考反应堆并通过验收的压力边界组件 |
| `reactor_internals_fabrication` | 堆内构件和堆芯支承结构制造 | `required` | 必须纳入；材料和清洁流仅在声明的设计及路线使用时适用 | 堆内构件和堆芯支承结构的前景制造、焊接、清洁和检验 | 每套装入一台参考反应堆并通过验收的堆内构件组件 |
| `final_assembly_and_testing` | 反应堆最终装配及工厂验收试验 | `required` | 必须纳入；仅在场内发生燃烧时采用试验燃料相关行 | 前景装配、尺寸核验、清洁度检查、压力/密封/电气/功能试验及交付 | 一台通过验收的完整未装料核反应堆 |

### 过程：反应堆压力边界制造（`pressure_boundary_fabrication`）

#### 输入

##### 产品流

###### 压力边界零部件用合金钢板（`pressure_steel_plate`）

记录进入壳体、封头及其他承压零部件制造的合格钢板。核级牌号、炉批号、尺寸和供应路线为前景限定信息。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：分配给反应堆制造订单的净接收质量，并按有记录的库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`us-nrc-reactor-vessel-integrity`

###### 药芯焊丝（`pressure_flux_cored_wire`）

仅当压力边界制造或返修使用药芯焊丝时，记录合格的药芯焊丝；其他焊接工艺应设置各自的具体前景流。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：制造订单的领用质量减去有记录的未用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_consumables`
- 来源：`iaea-np-t-3-21-2016`

###### 外购电力（`pressure_electricity`）

记录本过程切割、成形、机加工、焊接、热处理辅助设备、检验及配套设备的计量电力消耗。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：过程仪表读数，或按制造订单分配的全厂仪表用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`

###### 热处理用气态天然气（`pressure_natural_gas`）

仅当纳入的炉窑或热工设备在压力边界制造路线中直接燃烧天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配给纳入压力边界工序的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`

###### 氧燃料工序用工业氧气（`pressure_industrial_oxygen`）

仅当切割、加热或其他纳入制造工序采用氧燃料工艺时记录工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：分配给纳入压力边界工序的供应商记录或气瓶库存记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_gases`

###### 制造和清洁用工艺用水（`pressure_process_water`）

记录为压力边界制造中的机加工、清洁、冲洗或水压作业而跨越边界的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配给本过程的计量或供应记录用水，扣除同一边界内有记录的循环水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 通过验收的反应堆压力边界组件（`pressure_boundary_assembly_output`）

将通过验收的压力边界组件记录为转入最终装配的内部中间产品。其输出数量须与最终装配的对应输入完全相同。

- 选定流：反应堆压力边界组件（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：内部转移时测得的验收组件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediates`
- 来源：`iaea-ssg-56-2020`

##### 废物流

###### 工业后钢废料（`pressure_steel_scrap`）

记录本过程产生并分类收集的含铁边角料、切屑及报废钢材。受污染或混合废物必须使用单独的具体废物流。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开过程边界的称重废钢，扣除有记录的内部重熔或再利用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_wastes`

##### 基本流

###### 天然气燃烧产生的化石源二氧化碳（`pressure_fossil_co2`）

仅计算纳入的天然气燃烧直接排放的化石源二氧化碳。不得计入天然气供应或外购电力的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据记录的天然气数量和有文件依据的场址或供应商特定碳含量/排放因子计算直接化石源 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`

### 过程：堆内构件和堆芯支承结构制造（`reactor_internals_fabrication`）

#### 输入

##### 产品流

###### 奥氏体不锈钢原料（`internals_austenitic_stainless_steel`）

记录装入堆内构件和堆芯支承结构的合格奥氏体不锈钢板、锻件或棒材质量；前景物料清单须逐项声明牌号和产品形态。

- 选定流：奥氏体不锈钢（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：分配给堆内构件制造的净接收质量，并按有记录的库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`us-nrc-ap1000-ser-ch4`

###### 镍基合金原料（`internals_nickel_based_alloy`）

仅当声明的堆内构件设计需要时记录镍基合金原料。前景记录须识别合金牌号、产品形态、钴含量限制及安装零部件。

- 选定流：镍基合金原料（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：分配给堆内构件制造的合金净接收质量，并按有记录的库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`us-nrc-ap1000-ser-ch4`

###### 药芯焊丝（`internals_flux_cored_wire`）

仅当声明的堆内构件制造路线使用药芯焊丝时记录合格的药芯焊丝。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：制造订单的领用质量减去有记录的未用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_consumables`
- 来源：`iaea-np-t-3-21-2016`

###### 外购电力（`internals_electricity`）

记录堆内构件成形、机加工、焊接、热处理、清洁、检验和配套设备的计量电力消耗。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：过程仪表读数，或按制造订单分配的全厂仪表用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`

###### 碱性清洗用氢氧化钠（`internals_sodium_hydroxide`）

仅当氢氧化钠作为堆内构件碱洗槽的产品投入跨越前景边界时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：交付溶液中加入纳入清洁工序的纯氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_chemicals`
- 来源：`us-nrc-ap1000-ser-ch4`

###### 堆内构件清洗用工艺用水（`internals_process_water`）

记录纳入堆内构件清洗、漂洗和冲洗工序的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或供应记录的用水投入，扣除同一边界内有记录的循环水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`us-nrc-ap1000-ser-ch4`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 通过验收的堆内构件组件（`reactor_internals_assembly_output`）

将通过验收的堆内构件和堆芯支承组件记录为转入最终装配的内部中间产品。输出数量与链接的输入数量须完全相同。

- 选定流：堆内构件组件（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：内部转移时测得的验收组件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediates`
- 来源：`us-nrc-ap1000-ser-ch4`

##### 废物流

###### 工业后钢废料（`internals_steel_scrap`）

记录堆内构件制造产生并分类收集的含铁边角料、切屑及报废钢材。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开本过程的称重废钢，扣除有记录的内部再利用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_wastes`

###### 废碱液（`internals_waste_alkaline_liquor`）

仅当进行碱洗且废液离开本过程送往处理时，记录废碱性清洗液。须声明组成、pH、金属污染物和处理去向。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass / kg
- 数量规则：送往处理的废碱液称重质量，或依据体积和密度换算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_wastes`
- 来源：`us-nrc-ap1000-ser-ch4`

##### 基本流

### 过程：反应堆最终装配及工厂验收试验（`final_assembly_and_testing`）

#### 输入

##### 产品流

###### 反应堆压力边界组件（`final_pressure_boundary_assembly_input`）

记录从 `pressure_boundary_fabrication` 接收的内部压力边界组件；其身份和质量须与 `pressure_boundary_assembly_output` 相同。

- 选定流：反应堆压力边界组件（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：与上游输出相匹配的内部转移实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediates`
- 来源：`iaea-ssg-56-2020`

###### 堆内构件组件（`final_reactor_internals_assembly_input`）

记录从 `reactor_internals_fabrication` 接收的内部堆内构件组件；其身份和质量须与 `reactor_internals_assembly_output` 相同。

- 选定流：堆内构件组件（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：与上游输出相匹配的内部转移实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediates`
- 来源：`us-nrc-ap1000-ser-ch4`

###### 控制棒驱动机构（`final_control_rod_drive_mechanism`）

记录安装在参考反应堆中并通过验收的控制棒驱动机构。须说明设计特定的机构类型；若机构已包含于另一验收组件中，则不得重复计算。

- 选定流：控制棒驱动机构（UUID 未解决）
- 流属性/单位：Number of items / Item(s)
- 数量规则：依据竣工产品配置计数已安装并通过验收的机构
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_acceptance`
- 来源：`iaea-ssg-56-2020`

###### 外购电力（`final_electricity`）

记录最终装配、清洁度控制、压力/密封/电气/功能试验及配套设备的计量电力消耗。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：过程仪表读数，或按制造订单分配的全厂仪表用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`iaea-np-t-3-21-2016`

###### 水压与清洁度试验用工艺用水（`final_process_water`）

记录制造商边界内为压力、泄漏、冲洗或清洁度试验引入的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或供应记录的试验用水，扣除同一试验回路内有记录的循环水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`iaea-np-t-3-21-2016`

###### 场内试验设备用柴油（`final_diesel_fuel`）

仅当临时发电机、泵或其他工厂试验设备在纳入边界内直接消耗柴油时记录。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：分配给纳入工厂试验的燃料领用、储罐液位或采购记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_fuel`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 通过验收的完整未装料核反应堆（`final_nuclear_reactor_output`）

仅当声明的产品配置和制造验收计划均已满足后，记录一台完整反应堆。产品流 UUID 尚未解决；不得以燃料棒或完整核电站替代。

- 选定流：核反应堆（UUID 未解决）
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 台通过验收的完整未装料核反应堆
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台参考反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-0-2025`; `iaea-ssg-56-2020`

##### 废物流

###### 水压试验废水（`final_test_wastewater`）

当用于压力、冲洗或清洁度试验的水未在内部循环而离开试验边界时，将其记录为废水。须声明组成、处理去向和排放路线。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：转出试验边界的废水称重质量，或依据体积和密度换算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_wastes`
- 来源：`iaea-np-t-3-21-2016`

##### 基本流

###### 试验柴油燃烧产生的化石源二氧化碳（`final_fossil_co2`）

仅计算纳入的试验设备燃烧柴油所直接排放的化石源二氧化碳。不得计入柴油供应的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据记录的柴油质量和有文件依据的场址或供应商特定碳含量/排放因子计算直接化石源 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每一台通过验收的完整反应堆
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_test_fuel`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivision` | 制造订单和场址 | 优先划分过程并采用订单特定计量，使负荷归属于实际引起负荷的反应堆和过程。 |  |
| `al_shared_utilities` | 共享电力、燃气、水和厂务服务 | 优先采用分表计量。无法分表时，使用有记录的因果驱动因素，例如机器小时、炉时、试验小时或占用生产时间；存在物理驱动因素时不得按反应堆价格分配。 |  |
| `al_scrap` | 工业后钢废料及可回收合金废料 | 应先记录废料质量和去向，再采用研究所选的再生方法。除非所选 LCA 方法明确要求，否则不得在前景中加入替代原生生产的避免负荷；须披露截断、替代或寿命终结方法。 |  |
| `al_rework` | 返工、报废和修理 | 将返工能源、耗材和报废材料分配给引起这些负荷的订单和过程。废料销售收入不使反应堆制造成为多功能过程。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `pressure_boundary_fabrication`; `reactor_internals_fabrication` | 钢板、不锈钢原料和设计特定合金投入 | 采购收货记录、物料清单和材料证明书 | 材料身份；牌号；产品形态；炉批号；接收质量；退回量；库存变化；订单 id；供应商；场址 | 将合格收货和材料领用与竣工物料清单核对 | kg | 每批收货和每个制造订单 | 参考反应堆的完整生产期 | 所有纳入制造场址及供应商控制的库存点 | 汇总分配给订单的净质量；保留牌号和形态属性 | 材料证明书；校准秤；收发存核对；供应商批准记录 |
| `cp_welding_consumables` | `pressure_boundary_fabrication`; `reactor_internals_fabrication` | 药芯焊丝 | 焊材领用和退回记录 | 焊丝身份；批次；资质；领用质量；退回质量；订单 id；过程 | 领用质量减去退回的未用焊丝质量 | kg | 每次领用/退回 | 完整制造期 | 所有纳入焊接地点 | 按过程和订单汇总净消耗质量 | 焊材批次记录；合格工艺；领退料日志 |
| `cp_process_energy` | 所有过程 | 外购电力和天然气 | 仪表、燃料发票和设备运行日志 | 仪表 id；期初/期末读数；单位；气体参照条件；过程；订单 id；分配驱动因素 | 读取过程仪表；共享时核对全厂总量，并采用声明的因果分配驱动因素 | 电力用 MJ；天然气用 m3 | 连续计量并按月核对，或每批次 | 完整生产和试验期 | 所有纳入场址 | 汇总直接读数；仅分配剩余共享总量；记录换算及损耗处理 | 校准仪表记录；发票核对；运行小时日志 |
| `cp_fabrication_gases` | `pressure_boundary_fabrication` | 工业氧气 | 气瓶、储罐或供应商记录 | 气体身份；纯度；供应数量；退回量；压力；温度；过程；订单 id | 核对交付量和退回量，并归一化到声明的参照条件 | m3 | 每次交付和每个订单 | 完整制造期 | 纳入的氧燃料工序 | 汇总分配给纳入工序的标准化体积 | 供应商证书；气瓶/储罐库存；换算记录 |
| `cp_process_water` | 所有过程 | 工艺用水投入 | 水表、批次表或供应商记录 | 水源；水质；仪表读数或体积；密度；温度；循环量；过程；订单 id | 测量投入，并仅扣除同一边界内有记录的循环量 | kg | 每批次，或连续计量并按月核对 | 完整生产和试验期 | 所有纳入用水点 | 按过程汇总跨越边界的净水质量 | 校准仪表；水质记录；密度换算；核对记录 |
| `cp_internal_intermediates` | 所有过程 | 压力边界和堆内构件组件 | 内部转移及验收记录 | 中间产品身份；配置修订；验收状态；质量；发送过程；接收过程；订单 id | 逐项匹配发送和接收记录 | kg | 每次转移 | 完整装配期 | 所有纳入的发送和接收场址 | 链接的输出和输入采用相同数量；跨越声明前景边界时才纳入转移运输 | 验收转移记录；校准秤；配置控制；差异记录 |
| `cp_solid_wastes` | `pressure_boundary_fabrication`; `reactor_internals_fabrication` | 工业后钢废料 | 废物称重单和回收商联单 | 废物身份；合金/污染类别；毛重/皮重/净重；内部再利用；去向；订单 id；过程 | 称量外运废料并核对内部退回或再利用 | kg | 每次装运或每个收集容器 | 完整制造期 | 所有纳入制造场址 | 按身份和去向汇总离开过程的净废料 | 校准秤；废物联单；回收商收据；质量平衡核对 |
| `cp_cleaning_chemicals` | `reactor_internals_fabrication` | 氢氧化钠 | 批次表和化学品收货记录 | 产品质量；浓度；溶液密度；槽液投加；补加；回收；订单 id | 依据交付溶液质量和经核实浓度计算纯氢氧化钠质量 | kg NaOH | 每次槽液投加 | 完整清洗期 | 纳入的碱洗工序 | 汇总纯 NaOH 投加量并扣除另有记录的回收产品 | 供应商证书；浓度分析；批次表；计算记录 |
| `cp_liquid_wastes` | `reactor_internals_fabrication`; `final_assembly_and_testing` | 废碱液和试验废水 | 储罐仪表、转移单和处理联单 | 废物身份；体积或质量；密度；组成；pH；金属含量；去向；订单 id；过程 | 直接测量质量，或以有记录的密度换算体积 | kg | 每次排放或转移 | 完整清洁和试验期 | 所有纳入液态废物出口 | 按具体废物身份、过程和去向汇总 | 校准储罐/秤；样品分析；联单；水量平衡 |
| `cp_component_acceptance` | `final_assembly_and_testing` | 控制棒驱动机构 | 竣工配置和验收记录 | 机构身份；类型；序列号；验收件数；安装位置；重复供应检查；订单 id | 计数通过验收并已安装的机构，并与竣工配置核对 | Item(s) | 每次安装和最终验收 | 完整装配期 | 最终装配场址及供应商控制的安装点 | 汇总通过验收的已安装件；排除报废件、备件和单独供应件 | 配置记录；序列号清单；验收证书；检验记录 |
| `cp_test_fuel` | `final_assembly_and_testing` | 柴油及其直接化石源 CO2 | 燃料领用、储罐记录和设备试验日志 | 燃料身份；质量或体积；密度；生物源比例；领用/退回；设备；试验 id；排放因子及出处 | 核对净燃料消耗，必要时将体积换算为质量，并用有记录的因子计算直接化石源 CO2 | kg | 每个试验活动 | 完整工厂试验期 | 制造商控制下的纳入试验设备 | 汇总净化石柴油质量和相应计算的直接化石源 CO2 | 校准储罐/秤；采购/领用记录；试验日志；因子证明及计算记录 |
| `cp_product_acceptance` | `final_assembly_and_testing` | 完整未装料核反应堆 | 制造验收和交付档案 | 产品配置；反应堆技术；设计额定值；核安全质量等级；压力边界范围；纳入组件；验收状态；总质量；序列 id；交付日期；大门 | 仅计数档案完整且声明无燃料、未受辐照状态的验收反应堆 | Item(s) | 每次最终验收 | 整个制造订单 | 声明的制造商大门 | 一份通过验收的完整档案等于一个参考产品 | 批准配置；材料追溯；无损检测、热处理、压力/密封/电气/功能试验、清洁度和最终尺寸记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_order_normalization` | 所有清单行 | 归一化数量 = 分配给制造订单的净数量 ÷ 该订单中通过验收的完整反应堆台数。本 PCR 的分母通常为一；须披露多台批次分配。 | 订单净数量；验收反应堆台数；分配记录 | 每一台通过验收的完整反应堆对应的清单数量 |  |
| `calc_electricity_conversion` | 电力行 | 电力（MJ）= 计量电力（kWh）× 3.6 MJ/kWh。保留原始仪表单位和换算记录。 | 计量 kWh | 以 MJ 表示的电力 |  |
| `calc_solution_active_mass` | `internals_sodium_hydroxide` | 纯 NaOH 质量 = 交付溶液质量 × 经核实的质量分数，并扣除另有记录的退回或回收产品。 | 溶液质量；核实浓度；退回/回收量 | kg 氢氧化钠 |  |
| `calc_direct_fossil_co2` | `pressure_fossil_co2`; `final_fossil_co2` | 直接化石源 CO2 = 记录的化石燃料数量 × 有记录的场址或供应商特定排放/碳含量因子，并列示单位和氧化基准换算。该因子不得包括上游供应链排放。 | 天然气或柴油记录；因子；化石比例；换算基准 | kg 直接化石源二氧化碳 |  |
| `calc_internal_transfer_check` | 内部中间产品行 | 每项上游中间产品输出的数量和身份在单位换算后须与最终装配输入相等；所有差异均须调查，不得静默分配。 | 发送记录；接收记录；单位换算 | 核对后的内部转移数量 |  |
| `calc_manufacturing_mass_balance` | 各制造过程和最终装配 | 核对可追溯材料投入、验收输出、实测废料/废物、直接质量排放及有记录的库存变化。报告排除的微量材料和未解决差额；不得仅凭差额推算缺失排放。 | 材料收货；中间产品和产品质量；废物记录；库存变化；直接排放 | 过程质量平衡核对 | `iaea-np-t-3-21-2016` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 必须明确配置、技术、设计额定值、压力边界范围、纳入设备、验收大门、总质量及未装料/未受辐照状态。 | 批准的产品配置和交付档案 |
| `dq_material_traceability` | 核级材料和焊接材料 | 保留供应商、牌号、炉批号、产品形态、数量、证书、材料代用及订单链接。 | 材料证明书、供应商批准及领用记录 |
| `dq_process_records` | 制造和装配 | 保留适用于交付配置的焊接工艺和焊材批次、热处理、无损检测、返修、压力/密封/电气/功能试验、校准、清洁度和最终尺寸记录。 | 制造质量档案；`iaea-np-t-3-21-2016` |
| `dq_temporal_coverage` | 所有前景行 | 覆盖从首次纳入收货到最终验收的完整制造订单，包括返工和报废批次。 | 订单日期、生产日志和完整性核对 |
| `dq_site_coverage` | 多场址制造 | 纳入声明的制造商边界内所有场址，并披露跨边界转移。 | 场址清单、转移记录及边界声明 |
| `dq_metering` | 能源、气体和水 | 可行时使用经校准的直接仪表；共享仪表须披露分配驱动因素、换算条件和核对差额。 | 校准证书、发票和核对记录 |
| `dq_waste_destination` | 废钢、废碱液和废水 | 记录具体废物身份、污染/组成、质量、去向和处理路线；不得合并不同废物流。 | 称重单、分析结果和联单 |
| `dq_uuid_resolution` | UUID 空缺流 | 保留具体流名称和未解决原因；不得替换为相近的燃料、核电站、原材料或零部件 UUID。 | 已最终确认的搜索回执及 manifest 未解决元数据 |
| `dq_uncertainty` | 所有建模值或分配值 | 披露测量不确定性、分配比例和数据缺口；本候选 PCR 不主张任何外部经验数量范围。 | 仪表/秤精度、计算记录和数据质量声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 确认输出为一台完整未装料核反应堆，而非燃料元件、单独零部件、完整核电站或锅炉产品，并确认所有必需限定信息齐全。 | `un-cpc-3-0-2025`; `iaea-ssg-56-2020` |
| `val_process_coverage` | 前景边界 | 核实压力边界制造、堆内构件制造、最终装配和适用工厂试验均有表示，并覆盖所有纳入场址和返工。 | `iaea-np-t-3-21-2016`; `us-nrc-ap1000-ser-ch4` |
| `val_atomic_flows` | 清单 | 确认每个清单卡仅含一个具体交换，且气体、燃料、电力、水、化学品、废物和直接排放未被合并。 |  |
| `val_internal_transfers` | 内部中间产品 | 确认压力边界组件和堆内构件组件的输出与输入在身份和数量上一一对应，且未重复计算上游负荷。 |  |
| `val_energy_and_emissions` | 能源和直接排放 | 将外购能源与仪表或分配记录核对；直接化石源 CO2 应等于前景天然气或柴油用量乘以有记录的因子，上游电力和燃料排放则留在链接的数据集中。 |  |
| `val_material_and_waste_balance` | 制造过程 | 核对材料投入、验收中间产品/产品质量、实测废料/废物、库存变化和报告的直接质量排放；调查并披露未解决差额。 | `iaea-np-t-3-21-2016` |
| `val_quality_dossier` | 发布数据集 | 核实可取得适用于交付配置的材料、焊接、热处理、无损检测、压力/密封/电气/功能试验、校准、清洁度和最终尺寸证据。 | `iaea-np-t-3-21-2016` |
| `val_unresolved_evidence` | 候选方法局限 | 在精确的公开 state-100 身份审计完成前，参考产品及其他 UUID 空缺行保持未解决；不得将缺少双来源支持的数量范围当作外部基准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据集；经审查并解决或披露已识别缺口后，可发布为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 完整未装料核反应堆制造及在声明的制造商大门处交付的产品系统建模 |
| allowed_use | 仅可比较或汇总在反应堆配置、设计额定值、纳入设备、核安全质量等级、制造商大门边界、地理范围以及分配/再生约定方面兼容的数据集 |
| excluded_use | 每 kWh 发电影响；完整核电站建设；燃料循环、现场安装、运行、维护、乏燃料或退役结果；代表单独反应堆零部件或燃料元件 |
| required_metadata | 规范 PCR id；反应堆技术；热功率/设计额定值；产品配置；压力边界范围；纳入设备；适用制造规范及核安全质量等级；设计寿命；验收总质量；制造地理范围；纳入场址；装配地点；交付大门；生产期；分配和再生方法；上游数据集选择；未解决 UUID 和证据需求 |
| required_quality_disclosure | 前景覆盖和完整性；材料追溯；仪表和秤校准；分配比例；返工和报废覆盖；内部转移核对；质量平衡；废物去向；直接排放因子；数据缺口、不确定性及任何代理数据 |
| update_trigger | 反应堆技术或配置、设计额定值、压力边界范围、材料牌号、制造路线/场址、能源来源、清洁/试验路线、分配或再生方法、供应商数据、精确 Tiangong UUID 解析发生变化，或获得两个独立且边界兼容的范围来源 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | CPC 42310 官方产品身份，以及与单独分类的反应堆零部件和蒸汽发生锅炉的区分 |
| `us-nrc-reactor-vessel-integrity` | `official_guidance` | 美国核管会，Reactor Vessel Integrity，https://www.nrc.gov/reactors/operating/ops-experience/reactor-vessel-integrity（检索于 2026-09-05） | 反应堆压力容器由厚钢板或环形锻件、焊接壳节和封头制造的过程依据 |
| `iaea-np-t-3-21-2016` | `official_guidance` | 国际原子能机构，Procurement Engineering and Supply Chain Guidelines in Support of Operation and Maintenance of Nuclear Facilities，IAEA Nuclear Energy Series No. NP-T-3.21，Vienna，2016，https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1725_web.pdf（检索于 2026-09-05） | 材料证明、焊接、热处理、无损检测、压力/密封/电气/功能试验、校准、清洁度和最终尺寸等制造与采购记录 |
| `us-nrc-ap1000-ser-ch4` | `official_guidance` | 美国核管会，Safety Evaluation Report Related to Certification of the AP1000 Standard Design，NUREG-1793，Chapter 4，Reactor，https://www.nrc.gov/reading-rm/doc-collections/nuregs/staff/sr1793/initial/chapter4.pdf（检索于 2026-09-05） | 堆内构件材料系列，以及材料选择、热处理、焊接、无损检测、制造、防污染和清洁的过程分解 |
| `iaea-ssg-56-2020` | `standard` | 国际原子能机构，Design of the Reactor Coolant System and Associated Systems for Nuclear Power Plants，IAEA Safety Standards Series No. SSG-56，Vienna，2020，https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1878_web.pdf（检索于 2026-09-05） | 反应堆冷却剂系统范围、压力边界、控制功能，以及零部件制造和试验相关边界限定信息 |
