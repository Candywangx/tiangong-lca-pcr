---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.doors-windows-and-their-frames-and-thresholds-for-doors-of-iron-steel-or-aluminium
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁、钢或铝制的门、窗、门窗框及门槛

## 1. 范围与适用性

本 PCR 适用于以铁、钢、铝或其合金为承力或框架材料的成品门、窗、门窗框和门槛的从摇篮到工厂大门前景数据包。适用对象可以是完整产品，也可以是单独销售的框架或门槛。若玻璃、密封件、五金件、隔热条和工厂施加的表面处理属于交付产品配置，则可计入申报产品。

本 PCR 不包括木框或塑料框产品、幕墙系统、车辆门窗、大门、百叶窗和遮阳帘、单独销售的玻璃或五金件、建筑现场安装、使用阶段运行与维护以及报废阶段。生产者应明确产品形态和材料路线；若对门、窗、仅框架或仅门槛等差异显著的配置求平均，必须披露平均规则和按产量加权的份额。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.doors-windows-and-their-frames-and-thresholds-for-doors-of-iron-steel-or-aluminium |
| classification_refs | CPC 3.0: 42120（精确语境参考） |
| covered_products | 铁、钢或铝制成品人行门和窗；单独销售的相应框架；门槛；工厂交付的有玻璃或无玻璃配置 |
| excluded_products | 木框或塑料框产品；幕墙；车辆门窗；大门、百叶窗和遮阳帘；单独玻璃或五金件；安装、使用和报废服务 |
| representative_product | 工厂完成表面处理的金属框人行窗或门组，产品物料清单包含申报的玻璃、密封件、五金件和表面处理 |
| production_route | 采购金属型材或成型构件后进行切割、机械加工、连接、按需表面处理，并与申报组件装配；不同金属和表面处理路线分别限定 |
| market_state | 工厂大门处经质量检验、未安装、未包装的成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合申报产品配置和预定用途的铁框、钢框或铝框成品门、窗、框架或门槛 |
| How much | 1 kg 工厂大门处合格产品净质量 |
| How well | 满足申报的尺寸、主金属及合金、产品形态、表面处理、玻璃、密封件、五金件、隔热构造和适用性能规范 |
| How long or cycle | 一个生产批次；本从摇篮到工厂大门参考流不计入使用寿命或使用阶段性能收益 |
| reference_flow_link | 参考流为最终检验后的合格产品净质量，不含可重复使用的生产工装和运输包装 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 铁、钢或铝制的门、窗、门窗框及门槛 `9001a0d2-880c-41ca-9e98-18d421dfc46f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态（门、窗、框架或门槛）；主金属和合金/牌号；产品净质量；尺寸；开启形式；表面处理和涂装路线；有玻璃时的玻璃构造和充气；有密封件或隔热条时的材料；所含五金件；防火、防盗、热工、声学或其他申报性能；生产场址和地理范围；报告期；工厂大门状态 |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和以质量计的清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用工厂大门处净干质量。参考数量不含可重复使用的料架、工装和运输包装；若将一次性包装纳入边界，应单独披露。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始数据，并按 kWh 乘以 3.6 换算为 MJ；披露电网组合、电压等级、地理范围、损耗和交付边界。 |
| `gas_volume_conditions` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积及参考温度、压力和干/湿基；不得合并不同气体，也不得在没有成分和密度依据时由质量换算。 |
| `water_mass_basis` | 工艺用水和水性废物 | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` | kg | 优先采用质量计量。体积换算质量时必须采用实测或供应商声明的密度及适用温度，并保留原始表计值。 |
| `treated_area_driver` | 表面处理 | 清单交换采用质量；m2 作为辅助驱动量 | kg；m2 | 涂料和化学品投入按交换质量记录，并另行保留处理金属面积、生产线、槽液化学组成、涂层厚度和返工率。 |

## 5. 系统边界

前景边界始于采购的金属型材或成型构件、整体组件、能源载体和工艺化学品进入生产场址。边界包括切割、钻孔、冲压、成型、机械加工、连接、厂内搬运、按需表面预处理和精饰、固化或干燥、玻璃和五金装配、最终检验、返工、厂内废物分类，以及废物或排放跨越场址边界前的厂内处理。采购投入的上游生产通过供应商特定或适当的背景数据集连接。边界终点为合格、未安装、未包装产品的工厂大门。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购型材、成型构件、玻璃单元、密封件、五金件、化学品和能源载体到达生产场址收货边界 |
| starting_condition_role | 具有单独上游供应数据集的产品投入，不是无负荷起始材料 |
| product_classification_scope | 经审查语义边界内铁、钢或铝框成品门、窗、框架和门槛的工厂制造 |
| recursive_input_rule | 若采购投入本身已经属于同一成品类别，则将其作为具有自身数据集的上游产品投入记录，不在当前前景制造中再次展开 |
| upstream_dataset_requirement | 金属合金/牌号、再生含量、涂层状态、玻璃、密封件和五金件优先采用供应商特定数据；否则使用地理和技术具有代表性的数据集并披露替代项 |
| disclosure | 声明产品形态、合金/牌号、已知再生含量、组件物料清单、表面处理路线、处理面积、玻璃和五金配置、场址、地理范围、报告期、分配、废金属去向、废水处理和工厂大门状态 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有数据集 | 纳入从采购投入收货到合格产品检验的全部厂内制造操作；除非另建并声明扩展系统，否则排除安装、使用和报废阶段。 | `epd-international-windows-doors-cpcr-2026` |
| `boundary_product_scope` | 产品身份 | 将门、窗、仅框架和仅门槛配置限定在铁/钢/铝制品边界内，并披露所代表的准确配置。 | `un-cpc-3-0-structure-2025` |
| `boundary_surface_treatment` | 条件性表面处理 | 场址内实施时，纳入水性预处理、涂装或阳极氧化、漂洗、干燥/固化、废水处理、污泥和直接排放；若为外购预处理型材或外协处理，则连接相应上游数据集。 | `eu-jrc-stm-bref-2006` |
| `boundary_additional_components` | 产品特定物料清单 | 任何额外材料或组件跨越前景边界时，都应作为单独原子交换记录；不得使用集合式五金、包装、化学品或材料行替代。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_fabrication_assembly` | 集成组件加工与最终装配 | required | 所申报工厂大门产品始终纳入 | 前景切割、机械加工、连接、玻璃/五金装配、检验和废金属分类 | 1 kg 工厂大门处合格产品 |
| `surface_finishing` | 场址内水性预处理与涂装/固化 | conditional | 仅当报告场址内进行清洗、转化处理、阳极氧化、粉末涂装、湿法涂装、镀锌、固化或干燥时纳入 | 前景表面预处理、精饰及相关废水/废物管理 | 1 kg 合格产品及申报的处理金属面积 |

### 过程：集成组件加工与最终装配（`integrated_fabrication_assembly`）

#### 输入

##### 产品流

###### 铝挤压型材（`aluminium_extrusion_profile`）

仅对含铝配置记录采购铝挤压型材；声明合金、状态、已知再生含量、供应商、涂层状态和收货质量。

- 选定流：铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：合格产品消耗的净收货质量加实测过程损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 冷弯型材（`cold_formed_steel_profile`）

仅对含铁或非合金钢的配置记录冷弯型材；声明钢种、截面几何、涂层状态、供应商和收货质量。

- 选定流：冷弯型材 `f2eb1e33-3d42-40ef-a0da-2532cf491ddf`
- 流属性/单位：Mass / kg
- 数量规则：合格产品消耗的净收货质量加实测过程损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 中空玻璃单元（`insulating_glass_unit`）

申报产品集成工厂生产的中空玻璃单元时记录本项；注明玻璃片构造、镀膜、间隔条、充气和供应商。准确的 Tiangong 流 UUID 尚未解决。

- 选定流：中空玻璃单元
- 流属性/单位：Mass / kg
- 数量规则：安装玻璃净质量加实测破损和不合格单元损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 三元乙丙橡胶密封条（`epdm_gasket`）

安装该密封件时，记录一个三元乙丙橡胶密封条交换；本行不得用于其他弹性体。准确的 Tiangong 流 UUID 尚未解决。

- 选定流：三元乙丙橡胶密封条
- 流属性/单位：Mass / kg
- 数量规则：安装的密封条净质量加实测切割损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 加工电力（`fabrication_electricity`）

记录切割、机械加工、成型、连接、装配、检验、抽排和已分配辅助设备所用外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量用量，或依据场址电表记录进行有文件支持的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_gases`
- 来源：

###### 工业氧气（`industrial_oxygen`）

仅在工业氧气用于氧燃料切割或其他已声明加工操作时记录；声明纯度、压力和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：归属于所代表产品的供应商交付或计量氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_gases`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂大门处合格产品（`finished_metal_door_window`）

记录满足申报配置和质量要求的检验合格产品净质量。

- 选定流：铁、钢或铝制的门、窗、门窗框及门槛 `9001a0d2-880c-41ca-9e98-18d421dfc46f`
- 流属性/单位：Mass / kg
- 数量规则：根据参考流定义，为 1 kg 合格产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：

##### 废物流

###### 分类收集的铝边角废料（`aluminium_scrap`）

将离开前景边界的铝边角料和不合格铝组件作为分类废物输出记录；声明合金/涂层污染和去向。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：称量离开过程边界的分类铝废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_mass`
- 来源：

###### 分类收集的钢边角废料（`steel_scrap`）

将离开前景边界的铁质边角料和不合格钢组件作为分类废物输出记录；声明钢种/涂层污染和去向。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass / kg
- 数量规则：称量离开过程边界的分类钢废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_waste_mass`
- 来源：

##### 基本流

### 过程：场址内水性预处理与涂装/固化（`surface_finishing`）

#### 输入

##### 产品流

###### 工艺用水（`process_water`）

记录供应给场址内清洗、槽液补充、漂洗、表面处理线相关冷却和废水处理的水；排除生活用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于所代表产品的工艺用水表计量或槽体衡算投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 氢氧化钠（`sodium_hydroxide`）

仅在碱性清洗、蚀刻、槽液维护或废水处理步骤使用氢氧化钠时记录；保留溶液浓度和有效产品换算。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据采购、领用、浓度和库存变动记录计算有效氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_chemicals`
- 来源：`eu-jrc-stm-bref-2006`

###### 涂料（粉末）（`powder_coating`）

仅对申报的场址内粉末涂装路线记录粉末涂料；注明树脂体系、颜色、供应商、涂层厚度、回收过喷粉末和固化制度。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass / kg
- 数量规则：发放粉末减去退回可用粉末和期末库存，并分配至合格产出和实测不合格品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_chemicals`
- 来源：`eu-jrc-stm-bref-2006`

###### 表面处理电力（`finishing_electricity`）

记录槽体、泵、通风、废水处理、涂料施加、固化、干燥和已分配表面处理线辅助设备所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：表面处理线分表计量，或依据场址电表记录进行有文件支持的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_gases`
- 来源：`eu-jrc-stm-bref-2006`

###### 用于固化或干燥的天然气（`natural_gas`）

仅在场址内燃烧气态天然气用于槽液加热、固化或干燥时记录；声明成分、供应商、参考条件和燃烧设备。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配至表面处理线的表计量或供应商发票体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_gases`
- 来源：`eu-jrc-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 金属氢氧化物废水处理污泥（`metal_hydroxide_sludge`）

含金属表面处理废水经沉淀和分离产生脱水污泥时记录本项；声明干固体、主要金属、危险废物分类和去向。准确的 Tiangong 流 UUID 尚未解决。

- 选定流：金属氢氧化物废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：称量离开场址的湿污泥，并将干固体分数保留为质量字段
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`eu-jrc-stm-bref-2006`

###### 含金属表面处理漂洗废水（`metal_bearing_rinse_wastewater`）

仅当含金属或表面处理化学品的水性漂洗废水跨越场址边界排入下水道或外送处理时记录；声明 pH、主要金属/离子、处理状态和去向。准确的 Tiangong 流 UUID 尚未解决。

- 选定流：含金属表面处理漂洗废水
- 流属性/单位：Mass / kg
- 数量规则：表计排放质量，或用有文件支持的密度由体积换算，并扣除单独计量的非工艺水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`eu-jrc-stm-bref-2006`

##### 基本流

###### 场址内天然气燃烧产生的化石源二氧化碳（`fossil_carbon_dioxide`）

仅记录分配给表面处理线的场址内燃烧直接化石源二氧化碳；上游电力和燃料供应排放留在相连的上游数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟道实测，或依据计量天然气及有文件支持的碳含量、氧化率和设备分配进行燃料碳衡算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-stm-bref-2006`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共享生产线和表面处理线 | 优先采用分表计量、批次记录和物理细分。不得将场址内无关产品的负荷分配给申报产品。 |  |
| `allocation_shared_utilities` | 服务于多种产品的公用工程 | 仅对剩余共享公用工程采用有文件支持的因果驱动量分配，例如机器时间、处理面积、炉内占用或合格质量；报告驱动量和份额。 |  |
| `allocation_scrap` | 铝废料和钢废料输出 | 以废物输出记录废料总质量和去向。不得从前景投入中扣除避免负荷收益；任何回收收益或负荷应属于明确申报的下游模型。 |  |
| `allocation_rework` | 返工和不合格产品 | 将返工能源和材料计入产生返工的批次；内部循环材料只返回一次，并保留防止重复计算的质量衡算记录。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `integrated_fabrication_assembly` | 金属型材、玻璃、密封条和额外原子 BOM 投入 | 采购收货、领退料、BOM、盘点和不合格品记录 | 材料身份；供应商；合金/成分；期初库存；收货；领用；退回；期末库存；合格和不合格产品归属 | 将采购和仓储台账与产品级 BOM、生产订单核对 | kg | 每批；每月核对 | 具有代表性的报告期，通常至少连续 12 个月 | 服务申报产品的全部生产线和仓库 | （期初 + 收货 - 退回 - 期末）/ 合格参考产品质量 | 校准秤；供应商证书；库存核对；产品 BOM 版本 |
| `cp_energy_gases` | 两个过程 | 电力、天然气和工业氧气 | 分表、发票和运行时间记录 | 表计始末值；发票数量；参考条件；生产线；机器时间；炉内占用；合格产出 | 优先分表计量；与场址发票核对，仅对剩余共享用量采用因果驱动量分配 | 电力为 MJ；气体为 m3 | 连续或每批；每月核对 | 与生产相同期间 | 服务申报边界的全部表计和设备 | 合格计量量 / 合格产品质量 | 表计校准；发票核对；分配工作表；电网和燃料元数据 |
| `cp_water_records` | `surface_finishing` | 工艺用水 | 水分表、槽液补水和排放记录 | 表计读数；槽液添加；漂洗流量；换算密度；生产归属 | 对表面处理线分表计量，或核对槽体和场址水量衡算 | kg 和原始 m3 | 连续或每日；每月核对 | 与表面处理生产相同期间 | 仅表面处理和相关厂内处理 | 净合格用水投入 / 合格产品质量 | 表计校准；衡算闭合；排除生活用水 |
| `cp_finishing_chemicals` | `surface_finishing` | 氢氧化钠、粉末涂料和每项额外原子化学品 | 采购、领退料、槽液分析、库存和回收记录 | 产品身份；浓度；期初/期末库存；发放；退回；回收过喷粉末；槽液添加；处理面积；合格产出 | 依据可审计的库存和浓度记录计算有效化学品或净涂料消耗 | kg | 每批或每班；每月核对 | 与表面处理生产相同期间 | 申报产品使用的每条表面处理线 | 净有效投入或净发放涂料 / 合格产品质量 | 供应商 SDS/TDS；浓度检测；秤校准；库存核对 |
| `cp_output_waste_mass` | `integrated_fabrication_assembly` | 合格产品和分类金属废料 | 称量单、质量放行和废物转移记录 | 毛重/皮重/净重；合金或钢种；涂层状态；合格/不合格状态；去向 | 分别称量合格产出和每项分类废料 | kg | 每批或每次发运 | 与生产相同期间 | 所有申报产品线和废物区域 | 各流合计 / 合格产品质量 | 校准秤；签署的转移单；批次质量衡算 |
| `cp_finishing_wastes` | `surface_finishing` | 金属氢氧化物污泥和含金属漂洗废水 | 排放表、实验室结果、污泥称量单和转移联单 | 质量或体积；密度；干固体；pH；主要金属和离子；处理状态；去向 | 计量液体排放并称量污泥；按场址许可或运行计划采样 | kg 加保留的成分字段 | 每次排放或废物发运 | 与表面处理生产相同期间 | 场址内表面处理和处理边界 | 每项化学性质不同的流合计 / 合格产品质量 | 表计/秤校准；实验室样品流转；废物分类和转移记录 |
| `cp_direct_air_emissions` | `surface_finishing` | 直接化石源二氧化碳 | 烟道实测或燃料碳衡算记录 | 天然气用量；碳含量；氧化依据；烟道结果；设备和产品分配 | 使用直接排放实测或透明的场址特定碳衡算，不纳入上游能源排放 | kg | 每次检测和每月计算 | 与燃料使用相同期间 | 申报场址边界内燃烧设备 | 合格直接化石源 CO2 / 合格产品质量 | 检测报告或燃料证书；计算表；表计核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 所有清单行 | 归一化数量 = 合格行数量 / 合格参考产品净质量 | 采集的行数量；合格产品质量 | 每 1 kg 参考产品的数量 |  |
| `calc_electricity` | 电表 | 电力（MJ）= 电力（kWh）× 3.6 | 原始 kWh 读数 | MJ |  |
| `calc_active_naoh` | 氢氧化钠溶液 | 有效 NaOH 质量 = 溶液质量 × 实测或供应商声明的 NaOH 质量分数 | 溶液质量；浓度 | kg 有效 NaOH |  |
| `calc_powder_net` | 粉末涂料 | 净粉末投入 = 期初库存 + 收货 - 退回 - 回收可用粉末 - 期末库存 | 库存、收货、退回和回收记录 | kg 粉末消耗 |  |
| `calc_mass_balance` | 每项产品配置和报告期 | 比较实测材料投入与合格产品、分类废料、实测废物、库存变动和有文件支持的排放；发布前调查无法解释的差额 | 材料和产出记录 | 已披露的质量衡算闭合 |  |
| `calc_direct_co2` | 场址内天然气燃烧 | 使用烟道实测，或依据计量燃料、有文件支持的碳含量和氧化率计算化石源 CO2，并排除上游燃料和电力排放 | 燃料和碳记录 | kg 化石源 CO2 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 产品形态、合金/牌号、尺寸、表面处理、玻璃、密封件、五金件、性能规范和工厂大门状态必须识别一个可复现配置或已披露按产量加权的组。 | 产品图纸；BOM；订单代码；性能声明或等效规范 |
| `dq_temporal` | 全部前景数据 | 使用一个一致且具有代表性的期间，并解释停产、异常返工、缺失月份和外推。 | 生产日历；表计和台账覆盖矩阵 |
| `dq_completeness` | 材料、公用工程、废物和排放行 | 核对申报边界内全部表计、采购/库存记录、合格产出、不合格品、废料、废水、污泥和直接排放；对确实不存在的条件行记录不适用。 | 完整性检查表以及质量/能源核对 |
| `dq_supplier` | 上游投入 | 每个相连上游数据集保留供应商、地理范围、技术、已知再生含量和产品状态；记录所有代理项。 | 供应商证书、发票和数据集选择记录 |
| `dq_measurement` | 实测数量 | 适用时使用经校准或法定检定的表计和秤；保留单位、参考条件、换算输入以及不确定度或分辨率。 | 校准证书；原始读数；换算工作表 |
| `dq_unresolved_uuid` | 未解决流身份 | 四个 UUID 空缺行保持语义具体；在准确的公开 state-100 身份完成直接审计前，不得赋予代理 UUID。 | UUID 审查记录和 manifest 未解决条目 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | 参考流 | 确认定量参考恰为 1 kg 合格产品净质量，并确认选定产品 UUID、质量属性、单位组和工厂大门状态一致。 |  |
| `validation_configuration` | 产品身份 | 数据集若缺失产品形态、合金/牌号、尺寸、表面处理、玻璃/密封件/五金配置、预定性能规范、场址、地理范围或报告期，则拒绝。 | `epd-international-windows-doors-cpcr-2026` |
| `validation_boundary` | 系统边界 | 确认纳入实际发生的全部场址内加工、装配、表面处理、返工、废物处理和直接排放操作；确认未静默纳入排除的生命周期阶段。 | `eu-jrc-stm-bref-2006` |
| `validation_atomicity` | 清单 | 拒绝金属、组件、公用工程、燃料、化学品、包装、废物、废水或排放的集合行；每项交换必须具有一个具体身份和一个属性/单位。 |  |
| `validation_conditional` | 条件行 | 路线适用时要求实测/计算数据；路线不适用时要求有文件支持的不适用声明。 |  |
| `validation_mass_balance` | 生产期间 | 要求经过调查的材料衡算，将收货投入、库存变动、合格产出、返工、废料、污泥、废水固体和其他损失关联；不得接受无法解释的重复计算或回收收益。 |  |
| `validation_uuid` | 含 UUID 的行 | 通过公开 state-code-100 身份、相容的流类型、分类、属性、单位组、产品状态、地理/技术限定和一般说明确认每个 UUID；未解决行保持空白。 |  |
| `validation_ranges` | QA 范围 | 不得从一个来源或不相容案例推断外部范围。在具备两个独立且边界相容的原始来源前，必须采集前景数据并保留 manifest 范围证据需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 申报工厂大门配置的产品特定或按产量加权 secondary_dataset/background_dataset |
| downstream_use | 在材料、配置、地理、技术和工厂大门边界准确相容时，用于建筑产品制造的前景过程和 lifecyclemodel 构建 |
| allowed_use | 在核查合金/牌号、再生含量、尺寸、表面处理路线、玻璃/五金组成、性能声明、场址、地理范围、期间和分配后，进行从摇篮到工厂大门比较或下游建模 |
| excluded_use | 已安装门窗服务、使用阶段能效、维护、更换、报废、幕墙系统、车辆门窗，或未经明确扩展的其他材料/配置 |
| required_metadata | PCR id 和版本；产品 UUID；产品形态；产品代码；合金/牌号和已知再生含量；净质量和尺寸；表面处理和处理面积；玻璃、密封件、隔热条和五金件；性能规范；场址和地理范围；报告期；分配；上游数据集；未解决 UUID |
| required_quality_disclosure | 数据覆盖和完整性；表计和秤质量；供应商代表性；质量衡算闭合；返工和不合格品；废料去向；废水/污泥成分和处理；直接排放方法；所有代理项和排除项 |
| update_trigger | 合金/牌号或再生含量、BOM 或产品形态、玻璃/隔热条/五金系统、表面处理路线、供应商地理或技术、工厂/场址、能源组合、废物处理、分配、性能规范或报告期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05） | CPC 42120 正式产品身份以及铁/钢/铝材料范围 |
| `epd-international-windows-doors-cpcr-2026` | official_guidance | EPD International，Windows and doors (EN 17213)，c-PCR 2019:14-c-PCR-007，1.0.1 版，https://www.environdec.com/pcr-library/pcr2019-14-c-pcr-007（检索日期 2026-09-05） | 门窗建筑产品 EPD 语境和配置披露 |
| `eu-jrc-stm-bref-2006` | official_guidance | 欧盟委员会联合研究中心，《Surface Treatment of Metals and Plastics 最佳可行技术参考文件》，2006 年 8 月，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索日期 2026-09-05） | 条件性表面处理过程分解，以及水、能源、化学品、废水、污泥和直接排放的数据采集 |
| `china-nbs-metal-doors-windows-2017` | official_guidance | 中国国家统计局，《2017 国民经济行业分类注释》金属门窗制造，https://www.stats.gov.cn/xxgk/tjbz/gjtjbz/202008/P020200811608157848094.pdf（检索日期 2026-09-05） | 专业中文术语和建筑用金属门窗解释 |
