---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.handkerchiefs-shawls-scarves-veils-ties-cravats-gloves-and-other-made-up-clothing-acces-e3e3c0c4
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非针织或钩编纺织面料制手帕、披肩、围巾、面纱、领带、领结、手套及其他制成服装附件；未另分类的非针织或钩编纺织面料制服装或服装附件零件

## 1. 范围与适用性

本 PCR 规定 CPC 3.0 子类 28238 范围内制成服装附件以及服装或服装附件零件的工厂前景数据包规则。涵盖的成品附件包括手帕、披肩、围巾、面纱、领带、领结、非针织纺织手套和类似制成附件。涵盖的中间产品是由非针织或钩编纺织面料制成、可识别且未在其他类别中更具体列明的服装或服装附件零件。

共同前景路线从报告工厂接收成品机织或其他非针织、非钩编纺织面料、衬布、缝制材料和辅料开始。路线包括纸样或形状裁剪、边缘加工、缝制与装配、有条件的水洗或其他后整理、检验、返工、贴标和包装，并以合格附件或零件在工厂大门放行为终点。上游纤维、纱线、面料、衬布、辅料和包装生产通过供应商特定或代表性上游数据集连接。

针织或钩编附件和零件、皮革或塑料附件、运动手套、帽类和头饰、归入其他类别的成品服装，以及按匹销售而非制成附件或可识别服装零件的面料不适用。工厂大门之后的配送、零售、消费者使用与护理、维修、再使用和生命末期不在本前景边界内。

每项适用材料、公用工程、废物和直接排放均应作为独立原子交换表示。只有数据集声明路线条件并保留该交换未发生的证据时，才可省略路线特定交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.handkerchiefs-shawls-scarves-veils-ties-cravats-gloves-and-other-made-up-clothing-acces-e3e3c0c4 |
| classification_refs | CPC 3.0：28238，exact |
| covered_products | 手帕、披肩、围巾、面纱、领带、领结、非针织纺织手套及其他制成服装附件；未另分类的非针织、非钩编纺织面料制服装或服装附件零件 |
| excluded_products | 针织或钩编附件或零件；皮革或塑料附件；运动手套；帽类和头饰；归入其他类别的完整服装；按匹销售的未制成面料 |
| representative_product | 以成品机织面料经裁剪、边缘加工或缝制生产，并声明部件结构、后整理路线和包装的可销售制成纺织附件 |
| production_route | 接收成品面料、衬布和辅料；纸样或形状裁剪；边缘加工、缝制与装配；有条件的水洗、熨烫、印花或其他后整理；检验；贴标和包装 |
| market_state | 报告工厂大门处完成、合格且可销售的附件或可识别服装零件；包装与产品净质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应以非针织或钩编纺织面料制成的合格服装附件或可识别服装/服装附件零件 |
| How much | 1 kg 合格产品净质量，不含销售和运输包装质量 |
| How well | 工厂大门产品符合声明的附件或零件类型、尺寸或尺码、纤维组成、纺织结构、部件设计、后整理、辅料和质量规格 |
| How long or cycle | 以工厂大门放行为终点的一个完整生产批次或声明的代表性生产期 |
| reference_flow_link | reference_accessory_or_part_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Handkerchiefs, shawls, scarves, veils, ties, cravats, gloves and other made-up clothing accessories, of textile fabric, not knitted or crocheted; parts of garments or of clothing accessories, of textile fabric, not knitted or crocheted n.e.c. `4cbb1b61-4222-4c6b-8eb2-3e6622e784c7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型以及属于成品附件还是服装零件；预期最终用途；尺寸或尺码；单件净质量；1 kg 所代表的件数；纤维组成和质量份额；机织或其他非针织结构；层次、里料、衬布和填充结构；边缘、缝口和装配方法；辅料、紧固件和标签；染色、印花和后整理状态；湿式或干式后整理路线；工厂地理位置；生产期；包装配置和各材料质量 |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景交换归一化至恰好 1 kg 合格附件或服装零件净产出；参考质量不含包装、不可修复废品和在制返工品。 |
| `material_mass` | 面料、衬布、缝纫线、辅料、洗涤剂、包装和固体废物 | Mass | kg | 使用经校准的秤、发票、领料或 BOM 记录，并核对同一生产期的发出、退回、成品纳入、拒收和废弃质量。 |
| `product_count` | 装配与缝制分配 | Number of items | item | 保留合格件数和单件净质量，以便将按件分配的缝制与装配负荷透明换算至 1 kg 参考流。 |
| `electricity_use` | 裁剪、装配、后整理和包装用电 | Energy | kWh | 优先采用过程分表；否则以有记录的设备功率和运行时间计算，并披露分配依据。 |
| `steam_use` | 熨烫、干燥或湿式后整理所用外购蒸汽 | Mass | kg | 依据供应商计量或发票记录蒸汽交付质量和状态；不得将蒸汽与电力、天然气、柴油或 LPG 合并。 |
| `water_use` | 水洗或湿式后整理 | Mass | kg | 计量供给每项适用湿式操作的水；若测量体积，应记录密度和温度换算。 |
| `packaging_mass` | 销售和运输包装 | Mass | kg | 按每 1 kg 产品净质量分别报告各包装材料，不得将包装质量计入参考产品。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_operations` | 附件或服装零件前景生产 | 纳入成品面料和部件的接收与厂内搬运、裁剪、边缘加工、缝制、装配、适用的后整理、检验、返工、贴标、包装、直接公用工程、过程废物以及工厂大门放行前的直接排放。 | `afw-pefcr-3-1` |
| `boundary_upstream_linkage` | 外购输入 | 保持每种外购面料、衬布、辅料、化学品、公用工程和包装材料可见，并连接组成、技术、地理位置和生产期适宜的上游数据集。 | `ec-pef-2021-2279`; `afw-pefcr-3-1` |
| `boundary_conditional_finishing` | 水洗、印花、装饰和后整理 | 仅纳入报告工厂实际执行的操作；明确声明未执行的操作，并为适用路线使用的每种附加化学品、燃料、制冷剂、废物或直接排放增加独立原子交换。 | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `boundary_downstream_exclusion` | 下游生命周期阶段 | 本前景数据包不含工厂大门后的配送、零售、消费者使用与护理、维修、再使用和生命末期；下游研究应另行增加这些阶段。 | `afw-pefcr-3-1` |
| `boundary_same_category_recursion` | 同类别附件或零件输入 | 穿越边界的外购或转移 CPC 28238 附件或零件应记录为连接上游数据集的显式产品输入；不得递归重建不受报告运营者控制的生产。 | `ec-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品非针织、非钩编纺织面料、衬布、缝制材料、辅料和包装以已声明身份、组成、数量、供应商和上游数据集连接的状态到达报告工厂。 |
| starting_condition_role | factory-gate foreground input |
| product_classification_scope | CPC 3.0 子类 28238；分类支持范围，但不能替代产品子类型、结构和后整理限定信息。 |
| recursive_input_rule | 穿越边界的同类别附件或零件仍为带上游数据集的产品输入，除非由报告运营者控制的前景单元过程生产，否则不得递归展开。 |
| upstream_dataset_requirement | 优先采用供应商特定数据集；否则采用与材料形态、纤维组成、制造技术、地理位置和参考期相匹配且有记录的代表性数据集。 |
| disclosure | 声明 BOM 覆盖率、产品子类型、服装零件状态、排除和分包操作、路线特定后整理、工厂地理位置、分配依据、质量平衡残差、包装配置、数据缺口以及因等待精确天工身份确认而暂不填写的 UUID。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p1_cutting` | 纸样或形状裁剪 | required | 将成品纺织面料和适用衬布裁成附件或服装零件部件。 | 将声明材料转化为受控部件，同时记录组成特定的裁剪损失。 | 每 1 kg 产品净质量对应的裁片 kg 和边角料 kg |
| `p2_assembly` | 边缘加工、缝制与装配 | required | 对裁片进行卷边、缝制、粘合或其他连接，并安装适用辅料。 | 生产已装配附件或零件并记录按件活动、线头损失和废品。 | 每 1 kg 产品净质量对应的装配件数和装配产出 kg |
| `p3_finishing_qc` | 有条件的后整理与质量控制 | conditional | 仅在报告场址实施时纳入水洗、熨烫、印花、装饰、干燥或其他后整理；检验和质量控制始终纳入。 | 生产合格未包装产品并记录公用工程、废水、废品和返工。 | 每 1 kg 产品净质量对应的合格未包装产出 kg |
| `p4_packaging` | 贴标、包装和工厂大门放行 | required | 对合格产品贴标、包装并在工厂大门放行。 | 采用声明包装并产生参考流，同时保持包装质量独立。 | 1 kg 参考产品净质量 |

### 过程：纸样或形状裁剪（`p1_cutting`）

#### 输入

##### 产品流

###### 机织棉布（`woven_cotton_fabric_input`）

存在时，记录用于手帕、围巾、手套、零件或其他声明部件的机织棉布领用量。

- 选定流：Woven cotton fabric
- 流属性/单位：Mass / kg
- 数量规则：计量的领用质量减去有记录的未用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 机织丝织物（`woven_silk_fabric_input`）

记录用于声明的披肩、围巾、领带、面纱或其他附件部件的实际机织丝织物领用量。

- 选定流：Woven silk fabric
- 流属性/单位：Mass / kg
- 数量规则：计量的领用质量减去有记录的未用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 机织涤纶布（`woven_polyester_fabric_input`）

仅对产品 BOM 中已声明的涤纶部分记录机织涤纶布。

- 选定流：Woven polyester fabric
- 流属性/单位：Mass / kg
- 数量规则：计量的领用质量减去有记录的未用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 机织毛织物（`woven_wool_fabric_input`）

当机织毛织物构成声明的披肩、围巾、手套或其他部件时记录。

- 选定流：Woven wool fabric
- 流属性/单位：Mass / kg
- 数量规则：计量的领用质量减去有记录的未用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 机织粘胶纤维布（`woven_viscose_fabric_input`）

记录本具体选定流所代表的声明粘胶、莫代尔或莱赛尔机织部分。

- 选定流：Woven viscose fabric
- 流属性/单位：Mass / kg
- 数量规则：计量的领用质量减去有记录的未用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 涤纶非织造衬布（`polyester_nonwoven_interlining_input`）

记录用于领带、领结、领子、袖口或其他声明结构零件的涤纶非织造衬布；其他组成应另设行。

- 选定流：Polyester nonwoven fusible interlining
- 流属性/单位：Mass / kg
- 数量规则：计量的领用质量减去有记录的未用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 裁剪用电（`cutting_electricity_input`）

记录供给排料、铺料、模切、刀具裁剪及直接相关抽风设备的电力。

- 选定流：Electricity supplied to textile cutting equipment
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程用电，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`afw-pefcr-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 附件或服装零件裁片（`cut_accessory_components_output`）

记录转入边缘加工、缝制与装配的合格裁片内部转移。

- 选定流：Cut woven clothing-accessory components
- 流属性/单位：Mass / kg
- 数量规则：面料和衬布输入减去未用退回、材料特定边角料和裁剪废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

##### 废物流

###### 棉布边角料（`cotton_fabric_offcuts_output`）

机织棉布边角料应与其他纤维组成分开，并记录处理去向。

- 选定流：Cotton woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的机织棉布边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 丝织物边角料（`silk_fabric_offcuts_output`）

使用丝织物时应单独记录机织丝织物边角料及其处理去向。

- 选定流：Silk woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的机织丝织物边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 涤纶布边角料（`polyester_fabric_offcuts_output`）

机织涤纶布边角料应与棉、丝、毛和粘胶边角料分开。

- 选定流：Polyester woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的机织涤纶布边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 毛织物边角料（`wool_fabric_offcuts_output`）

使用毛织物时应单独记录机织毛织物边角料及其去向。

- 选定流：Wool woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的机织毛织物边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 粘胶纤维布边角料（`viscose_fabric_offcuts_output`）

使用该材料时应单独记录粘胶纤维类机织边角料。

- 选定流：Viscose woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的机织粘胶纤维布边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 衬布边角料（`interlining_offcuts_output`）

涤纶非织造衬布边角料应与机织面料边角料分开。

- 选定流：Polyester nonwoven interlining offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的涤纶衬布边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

##### 基本流

### 过程：边缘加工、缝制与装配（`p2_assembly`）

#### 输入

##### 产品流

###### 附件或服装零件裁片（`cut_accessory_components_input`）

记录由 `p1_cutting` 内部转入装配的合格裁片质量。

- 选定流：Cut woven clothing-accessory components
- 流属性/单位：Mass / kg
- 数量规则：等于转入装配的 `cut_accessory_components_output` 记录值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：`afw-pefcr-3-1`

###### 涤纶缝纫线（`polyester_sewing_thread_input`）

BOM 中存在时，记录用于卷边、缝合、边缘加工或部件安装的涤纶线发出和消耗量。

- 选定流：Polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：计量的发出量减去有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 棉缝纫线（`cotton_sewing_thread_input`）

产品 BOM 中存在棉缝纫线时，应与涤纶线分开记录。

- 选定流：Cotton sewing thread
- 流属性/单位：Mass / kg
- 数量规则：计量的发出量减去有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 金属紧固件（`metal_fastener_input`）

使用时记录金属按扣；其他金属扣件、钩或搭扣均需设置自己的原子行。

- 选定流：Metal press fastener
- 流属性/单位：Mass / kg
- 数量规则：紧固件计数乘以经核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 塑料紧固件（`plastic_fastener_input`）

声明产品使用塑料按扣时，应与金属按扣分开记录；其他塑料紧固件类型需设置自己的行。

- 选定流：Plastic snap fastener
- 流属性/单位：Mass / kg
- 数量规则：紧固件计数乘以经核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 弹性窄幅织物（`elastic_narrow_fabric_input`）

记录手套或其他声明附件或服装零件中使用的松紧带或弹性窄幅织物。

- 选定流：Elastic narrow fabric
- 流属性/单位：Mass / kg
- 数量规则：计量的发出长度乘以经核实的线质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 机织纺织标签（`woven_textile_label_input`）

缝入式机织纺织标签应与纸板吊牌和包装分开记录。

- 选定流：Woven textile label
- 流属性/单位：Mass / kg
- 数量规则：标签计数乘以经核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 装配用电（`assembly_electricity_input`）

记录缝纫、包缝、卷边、粘合、安装及直接相关装配设备的用电。

- 选定流：Electricity supplied to textile accessory assembly equipment
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程用电，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每装配件，并换算至 1 kg 产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`afw-pefcr-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已装配附件或服装零件（`assembled_accessory_or_part_output`）

记录最终后整理和质量放行前，合格缝制或以其他方式装配产品的内部转移。

- 选定流：Assembled woven clothing accessory or garment part
- 流属性/单位：Mass / kg
- 数量规则：计量的合格装配产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`afw-pefcr-3-1`

##### 废物流

###### 涤纶缝纫线头（`polyester_thread_offcuts_output`）

涤纶线头和不可用涤纶缝纫线应与棉线和面料边角料分开记录。

- 选定流：Polyester sewing thread offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的涤纶缝纫线废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`afw-pefcr-3-1`

###### 棉缝纫线头（`cotton_thread_offcuts_output`）

使用棉缝纫线时，应单独记录棉线头和不可用棉缝纫线。

- 选定流：Cotton sewing thread offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的棉缝纫线废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`afw-pefcr-3-1`

###### 装配废弃附件或零件（`rejected_assembly_output`）

记录不可修复的装配废品；可修复制品仍为在制返工品，不属于废物。

- 选定流：Rejected woven clothing accessories or garment parts
- 流属性/单位：Mass / kg
- 数量规则：计量的离开装配环节的不可修复废品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配附件或零件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_and_rework`
- 来源：`afw-pefcr-3-1`

##### 基本流

### 过程：有条件的后整理与质量控制（`p3_finishing_qc`）

#### 输入

##### 产品流

###### 已装配附件或服装零件（`assembled_accessory_or_part_input`）

记录从 `p2_assembly` 转入适用后整理和检验的合格装配产品。

- 选定流：Assembled woven clothing accessory or garment part
- 流属性/单位：Mass / kg
- 数量规则：等于转入后整理和检验的合格 `assembled_accessory_or_part_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格未包装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_and_qc`
- 来源：`afw-pefcr-3-1`

###### 后整理用电（`finishing_electricity_input`）

记录报告场址实际运行的检验、熨烫、干燥和其他后整理设备用电。

- 选定流：Electricity supplied to textile accessory finishing equipment
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程用电，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`afw-pefcr-3-1`

###### 外购蒸汽（`purchased_steam_input`）

用于熨烫、干燥或后整理时单独记录外购蒸汽；现场制汽需要含原子燃料和排放交换的独立支持过程。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：计量的供应商蒸汽送达适用后整理设备的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_and_qc`
- 来源：`afw-pefcr-3-1`; `eu-textiles-bat-2022-2508`

###### 工艺用水（`process_water_input`）

仅在现场实施产品水洗或其他湿式后整理路线时记录供给的工艺用水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量的供给所声明湿式后整理操作的用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 湿式后整理产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_and_qc`
- 来源：`afw-pefcr-3-1`; `eu-textiles-bat-2022-2508`

###### 非离子洗涤剂（`nonionic_detergent_input`）

仅在产品水洗实际使用时记录这一具体洗涤剂；其他每种化学品均应设置独立原子行。

- 选定流：Non-ionic textile detergent
- 流属性/单位：Mass / kg
- 数量规则：计量的投入所声明水洗操作的化学品量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 湿式后整理产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_and_qc`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 后整理完成的未包装附件或服装零件（`finished_unpacked_accessory_or_part_output`）

记录适用后整理、检验和已记录返工后、进入销售包装前的合格产品。

- 选定流：Finished unpackaged woven clothing accessory or garment part
- 流属性/单位：Mass / kg
- 数量规则：计量的放行至包装的合格净产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格未包装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_and_qc`
- 来源：`afw-pefcr-3-1`

##### 废物流

###### 后整理废水（`finishing_wastewater_output`）

仅对现场湿式路线记录废水，并与固体残余物和废弃产品分开。

- 选定流：Textile accessory finishing wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量的排放废水质量或有记录的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 湿式后整理产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_and_qc`
- 来源：`eu-textiles-bat-2022-2508`

###### 后整理废弃附件或零件（`rejected_finishing_output`）

后整理或终检产生的不可修复废品应与返回过程的返工品分开记录。

- 选定流：Rejected finished woven clothing accessories or garment parts
- 流属性/单位：Mass / kg
- 数量规则：计量的不可修复废品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格未包装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_and_rework`
- 来源：`afw-pefcr-3-1`

##### 基本流

### 过程：贴标、包装和工厂大门放行（`p4_packaging`）

#### 输入

##### 产品流

###### 后整理完成的未包装附件或服装零件（`finished_unpacked_accessory_or_part_input`）

记录由 `p3_finishing_qc` 内部转入的合格未包装产品。

- 选定流：Finished unpackaged woven clothing accessory or garment part
- 流属性/单位：Mass / kg
- 数量规则：等于放行至包装的合格产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_release`
- 来源：`afw-pefcr-3-1`

###### 低密度聚乙烯包装膜（`ldpe_packaging_film_input`）

使用时记录施加于产品的单件 LDPE 袋或包裹膜质量。

- 选定流：Low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：包装件数乘以经核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_release`
- 来源：`afw-pefcr-3-1`

###### 纸板吊牌（`paperboard_hangtag_input`）

纸板吊牌应与缝入式纺织标签分开记录。

- 选定流：Paperboard hangtag
- 流属性/单位：Mass / kg
- 数量规则：吊牌计数乘以经核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_release`
- 来源：`afw-pefcr-3-1`

###### 瓦楞运输纸箱（`corrugated_shipping_carton_input`）

记录随产品离厂的瓦楞纸板运输纸箱分配质量。

- 选定流：Corrugated board shipping carton
- 流属性/单位：Mass / kg
- 数量规则：纸箱数量乘以经核实的空箱质量，再按内装产品净质量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_release`
- 来源：`afw-pefcr-3-1`

###### 包装用电（`packaging_electricity_input`）

记录声明产品使用的贴标、封口、折叠和包装设备用电。

- 选定流：Electricity supplied to textile accessory packaging equipment
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程用电，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`afw-pefcr-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考附件或服装零件（`reference_accessory_or_part_output`）

这是唯一参考产品输出，其数量不含任何包装部件。

- 选定流：Handkerchiefs, shawls, scarves, veils, ties, cravats, gloves and other made-up clothing accessories, of textile fabric, not knitted or crocheted; parts of garments or of clothing accessories, of textile fabric, not knitted or crocheted n.e.c. `4cbb1b61-4222-4c6b-8eb2-3e6622e784c7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 合格产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_packaging_and_release`
- 来源：`un-cpc-3-2025`

##### 废物流

###### LDPE 包装废料（`ldpe_packaging_scrap_output`）

将包装过程产生的废袋和薄膜裁边记录为一种具体聚合物废物。

- 选定流：Low-density polyethylene packaging film scrap
- 流属性/单位：Mass / kg
- 数量规则：计量的 LDPE 包装废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_release`
- 来源：`afw-pefcr-3-1`

###### 纸板废料（`paperboard_scrap_output`）

废弃或裁切的纸板吊牌材料应与瓦楞纸板分开记录。

- 选定流：Paperboard hangtag scrap
- 流属性/单位：Mass / kg
- 数量规则：计量的纸板废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_release`
- 来源：`afw-pefcr-3-1`

###### 瓦楞纸板废料（`corrugated_board_scrap_output`）

将纸箱准备过程产生的不可用瓦楞纸板记录为独立废物。

- 选定流：Corrugated board packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：计量的瓦楞纸板废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_release`
- 来源：`afw-pefcr-3-1`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有前景过程 | 首先通过批次或款式分离、过程分表、独立领料和直接称量废物避免分配。 | `iso-14044-2006`; `ec-pef-2021-2279` |
| `allocation_cutting_mass` | 裁剪与组成特定损失 | 按声明产品和批次的实测材料质量分配面料、衬布和裁剪损失；各废物输出保留材料组成。 | `afw-pefcr-3-1` |
| `allocation_assembly_unit` | 缝制与装配 | 按处理的合格件数分配共享缝制和装配活动，再用合格件数和单件实测净质量换算至 1 kg 参考流。 | `afw-pefcr-3-1` |
| `allocation_finishing_mass` | 后整理 | 仅当产品接受相同路线时按实测产品质量分配共享后整理负荷；水洗、印花、装饰、熨烫或干燥路线不同时应先分离产品。 | `afw-pefcr-3-1` |
| `allocation_shared_electricity` | 共享设备 | 优先采用过程分表；否则用有记录的运行时间乘以设备功率。只有在产品加工强度可证明等同时才采用质量吞吐量。 | `afw-pefcr-3-1` |
| `allocation_waste` | 边角料、废品和包装废料 | 在废物产生过程中报告每种废物的实测组成、质量和处理去向；不得将其隐藏于全局损失率或混合废物交换。 | `iso-14044-2006`; `afw-pefcr-3-1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `p1_cutting`, `p2_assembly` | 面料、衬布、缝纫线和辅料 | BOM、领料、退料、计数和采购记录 | 产品子类型；材料身份；组成；供应商；批次；发出质量、长度或数量；未用退回；单件质量或线质量 | 将批准的产品 BOM 与仓库领退料记录核对 | kg, item, m | 每批 | 当前代表性生产期 | 范围内报告工厂全部材料库和生产线 | 按原子材料汇总净发出量，并按合格净产出归一化 | 批准的 BOM；供应商规格；经校准秤记录；库存核对 |
| `cp_cutting_mass_balance` | `p1_cutting` | 裁片和组成特定边角料 | 铺料、排料、纸样、裁片产出和废物记录 | 各材料输入和退回质量；合格部件质量；边角料质量；裁剪废品质量 | 对同批次材料输入、合格部件和分选边角料称量 | kg | 每批 | 当前代表性生产期 | 范围内全部裁剪操作 | 将各材料输入与未用退回、合格部件、边角料和废品核对 | 排料或纸样记录；经校准秤记录；废物票据；签署的批次核对表 |
| `cp_assembly_records` | `p2_assembly` | 装配产品、辅料和装配损失 | 生产线和材料消耗记录 | 件数；单件净质量；合格产出质量；线料发出与退回；辅料数量；废品 | 将生产线产出与部件和辅料记录核对 | kg, item | 每批或每班 | 当前代表性生产期 | 范围内全部装配线 | 按子类型和路线汇总，再将按件活动换算为 1 kg 净产出 | 生产日志；BOM；质量处置；经校准秤记录 |
| `cp_process_electricity` | `p1_cutting`, `p2_assembly`, `p3_finishing_qc`, `p4_packaging` | 过程用电 | 电表、设备和运行时间记录 | 电表起止读数；设备标识；额定或实测功率；运行时间；处理产品；停机时间 | 直接分表计量或以功率乘运行时间计算 | kWh | 批次、班次或计量周期 | 当前代表性生产期 | 全部纳入设备和共享服务 | 扣除有记录的非生产负荷，并按获批过程规则分配 | 电表证书；账单核对；设备铭牌；运行日志 |
| `cp_finishing_and_qc` | `p3_finishing_qc` | 后整理输入、输出和废水 | 路线、配方、计量、批次、质量和排放记录 | 后整理路线；输入质量；电力；蒸汽；水；每种化学品；产出质量；废水；返工；废品 | 仅对实际执行的操作采集，并分别核对每个湿式批次 | kg, kWh | 每个后整理批次 | 当前代表性生产期 | 全部纳入的后整理和检验操作 | 按后整理路线分别汇总后再归一化 | 路线单；批次配方；计量记录；化学品领用；排放记录；检验报告 |
| `cp_quality_and_rework` | `p2_assembly`, `p3_finishing_qc` | 废品和返工 | 缺陷和处置记录 | 缺陷代码；件数；质量；修复动作；重新进入的过程；最终处置 | 跟踪每件不合格品至返工完成或作为废物离开 | item, kg | 每批 | 当前代表性生产期 | 全部纳入的装配和后整理线 | 返工只计一次，已恢复返工品不计入废物 | 质量报告；返工流转单；废物转移票据 |
| `cp_packaging_and_release` | `p4_packaging` | 包装和参考产出 | 包装规格、领用、计数、质量和放行记录 | 产品件数；产品净质量；包装类型；件数；单件质量；包装废料；放行质量 | 核对包装材料领用与包装产品放行 | kg, item | 每批 | 当前代表性生产期 | 全部包装线和工厂大门放行 | 组合纸箱按内装产品净质量分配，包装与 1 kg 产品分别归一化 | 包装规格；秤记录；仓库放行；废料记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景交换 | 归一化交换量 = 生产期交换量 / 合格产品净质量；将参考输出设为恰好 1 kg。 | 生产期交换量；放行的合格产品净质量 | 每 1 kg 产品净质量的交换量 | `ec-pef-2021-2279` |
| `calc_cutting_mass_balance` | 每种面料和衬布 | 净发出输入 = 合格裁片质量 + 组成特定边角料 + 裁剪废品；调查任何残差，不得汇总隐藏。 | 发出质量；退回质量；合格部件质量；边角料质量；废品质量 | 经核对的材料流和披露残差 | `afw-pefcr-3-1` |
| `calc_assembly_loss` | 完整产品 BOM | 装配损失质量 = BOM 材料净发出质量 − 合格产品质量，并针对未用退回和已恢复返工品调整；保留组成特定损失。 | BOM 发出；未用退回；合格产出；已恢复返工品 | 各材料装配损失 | `afw-pefcr-3-1` |
| `calc_unit_to_mass` | 缝制与装配 | 每 kg 负荷 = 装配总负荷 / 合格件数 / 每件合格产品实测净质量。 | 装配负荷；合格件数；单件净质量 | 每 1 kg 参考流的装配负荷 | `afw-pefcr-3-1` |
| `calc_shared_electricity` | 共享用电设备 | 分配电量 = 总计量电量 × 产品特定运行时间 × 设备功率项 / 各运行时间与设备功率乘积之和。 | 电表总量；设备时间；设备功率 | 分配至产品的 kWh | `afw-pefcr-3-1` |
| `calc_packaging_mass` | 组合包装 | 每 kg 包装量 = 包装件数 × 经核实的单件质量 / 内装产品净质量。 | 件数；单件质量；内装产品净质量 | 每 kg 产品净质量对应的包装 kg | `afw-pefcr-3-1` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dqr_identity` | 参考产品 | 匹配准确的 CPC 28238 Product-flow 身份，并保留已核实的产品流、Mass 和 Units of mass UUID，不记录数据集版本。 | 天工 hybrid 结果和公开 state-code-100 直读；`un-cpc-3-2025` |
| `dqr_bom_coverage` | 材料清单 | 至少为 BOM 质量的 95% 提供原始数据，并在存在时覆盖 100% 的主要面料、里料、填充物、金属件和电子件；量化并披露每项省略余量。 | 批准的 BOM；供应商规格；`afw-pefcr-3-1` |
| `dqr_product_subtype` | 类别代表性 | 声明产品属于手帕、披肩、围巾、面纱、领带、领结、手套、其他附件还是服装零件；没有按产量加权的数据时不得汇总实质不同的子类型。 | 产品规格；生产组合；`un-cpc-3-2025` |
| `dqr_route` | 过程覆盖 | 识别每项受控的裁剪、边缘加工、装配、后整理、检验、返工和包装操作及每项分包操作；一个步骤的文档不得被视为覆盖另一步骤。 | 过程图；路线单；供应商声明；`afw-pefcr-3-1` |
| `dqr_temporal` | 前景记录 | 采用当前且具有生产代表性的数据，并说明产品组合、季节性、场址组合和任何外推。 | 带日期的生产、计量、库存和质量记录；`afw-pefcr-3-1` |
| `dqr_measurement` | 测量量 | 对质量、件数、电力、蒸汽和水保留校准状态、读数周期、单位换算和核对证据。 | 校准证书；电表日志；秤记录；发票核对 |
| `dqr_waste_destination` | 废物输出 | 分别记录每种原子废物的组成、质量、适用时的危险属性、处理去向和转移证据。 | 废物票据；承包商收据；内部处置记录；`afw-pefcr-3-1` |
| `dqr_wet_finishing` | 有条件的湿式操作 | 保留路线、配方、水平衡、每种化学品领用、废水量、排放路线和监测依据；未进行湿式后整理时声明不适用。 | 配方；计量和排放记录；`eu-textiles-bat-2022-2508` |
| `dqr_uuid` | 非参考交换 | 在一个与相关组成、技术、地理位置、处理路线或基本流环境舱相符的准确天工流经 hybrid 搜索和公开 state-code-100 直读确认前，UUID 保持为空。 | manifest 身份审查和未来 state-code-100 回读 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 输出 UUID 应解析为一个公开 Product flow，其完整名称和 CPC 末级与 28238 完全匹配，定量参考为 Mass；参考输出应等于 1 kg 产品净质量。 | `un-cpc-3-2025` |
| `validate_scope` | 产品和边界 | 产品应为所涵盖的非针织、非钩编纺织附件或服装/附件零件，且前景数据集止于报告工厂大门。 | `un-cpc-3-2025`; `afw-pefcr-3-1` |
| `validate_qualifiers` | 参考元数据 | 应声明产品子类型、成品附件或零件状态、最终用途、尺寸或尺码、单件净质量、件数、BOM、结构、辅料、后整理路线、地理位置、生产期和包装。 | `afw-pefcr-3-1` |
| `validate_bom` | 材料清单 | BOM 覆盖率应达到声明阈值，每项纳入部件应有一个原子材料行，省略质量应量化并披露。 | `afw-pefcr-3-1` |
| `validate_mass_balance` | 裁剪、装配、后整理和包装 | 同一生产期的输入、未用退回、合格产出、返工、边角料、废品和废料应在声明的测量容差内核对一致。 | `afw-pefcr-3-1` |
| `validate_energy` | 过程公用工程 | 各过程用电应分开或从共享计量透明分配；蒸汽、水和每种燃料均应保持独立原子交换。 | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `validate_conditional_finishing` | 后整理 | 每种湿式或干式后整理路线应有完整的原子输入、废物和排放记录，或明确声明未发生并提供路线证据。 | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `validate_atomic_flows` | 过程清单 | 选定流不得为集合、选择说明、载体清单或组合废物；每项额外材料、化学品、燃料、制冷剂、包装部件、废物或排放均应有独立行。 | `afw-pefcr-3-1` |
| `validate_allocation` | 共享过程 | 分配应遵循声明的层级和依据；按件分配的装配与缝制应使用合格件数和单件实测净质量换算。 | `iso-14044-2006`; `afw-pefcr-3-1` |
| `validate_data_quality` | 前景记录 | 记录应当前、具有代表性且可追溯，并有校准、库存、计量、质量和废物证据；应披露每项数据缺口和暂不填写的 UUID。 | `ec-pef-2021-2279`; `afw-pefcr-3-1` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 28238 纺织附件或服装/附件零件的产品特定或按产量加权的工厂大门前景数据集 |
| downstream_use | 当产品子类型、组成、结构、技术、地理位置、生产期和后整理路线相匹配时，可作为次级或背景数据集 |
| allowed_use | 工厂大门清单构建、供应商数据交换、热点分析，以及在声明限制条件下向下游 process 或 lifecyclemodel 投影 |
| excluded_use | 直接替代针织附件、皮革或塑料附件、运动手套、帽类、完整服装或面料生产；无支持的比较声明；静默使用未解析 UUID |
| required_metadata | canonical PCR id；产品流 UUID；产品子类型；成品附件或零件状态；尺寸或尺码；单件净质量和件数；完整部件 BOM；结构和后整理；工厂地理位置和生产期；分包步骤；分配；包装；废物去向 |
| required_quality_disclosure | BOM 和过程覆盖率；来源和计量出处；校准；代表性；分配；质量平衡残差；数据缺口；湿式后整理适用性；UUID 审查状态 |
| update_trigger | 类别范围、产品组合、BOM、结构、后整理路线、工厂技术、地理位置、分配、参考身份、证据或适用服装环境足迹规则发生重大变化 |

## 11. 数据源

| 来源编号 | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Explanatory Notes》，2025 年 6 月 30 日，子类 28238。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 准确产品类别范围和分类身份 |
| `ec-pef-2021-2279` | official_guidance | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279，2021 年 12 月 16 日。http://data.europa.eu/eli/reco/2021/2279/oj | 可靠、可核实、可比较的产品足迹数据和一般建模质量原则 |
| `afw-pefcr-3-1` | standard | 技术秘书处，《Product Environmental Footprint Category Rules: Apparel and Footwear》，Version 3.1，2025 年 4 月 29 日。https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf | 附件制造过程分解、BOM 覆盖率、过程特定损失与废物、原始数据、能源建模以及按质量/件数分配 |
| `eu-textiles-bat-2022-2508` | official_guidance | 欧盟委员会实施决定（EU）2022/2508，纺织工业 BAT 结论。http://data.europa.eu/eli/dec_impl/2022/2508/oj | 有条件的湿式后整理、工艺化学品、水、废水和过程级监测 |
| `iso-14044-2006` | standard | ISO 14044:2006，《环境管理 生命周期评价 要求与指南》。https://www.iso.org/standard/38498.html | 目标与范围、清单、分配、报告和评审原则 |
