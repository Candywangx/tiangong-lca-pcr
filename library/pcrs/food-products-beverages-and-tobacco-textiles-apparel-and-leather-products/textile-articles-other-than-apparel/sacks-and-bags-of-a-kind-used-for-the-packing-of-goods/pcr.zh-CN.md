---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.sacks-and-bags-of-a-kind-used-for-the-packing-of-goods
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 货物包装用袋

## 1. 范围与适用性

本 PCR 适用于主要功能为包装、储存或运输货物且属于 CPC 27150 的成品纺织袋之门到门前景数据包。其涵盖聚丙烯或高密度聚乙烯扁丝编织袋、黄麻或其他韧皮纤维麻袋、棉纺织包装袋、网眼袋，以及在所声明产品属于制成的纺织包装制品时的柔性中型散装容器（FIBC）。报告产品可以无涂层，也可以带涂层、层压层、内衬或印刷，但必须声明材料构造与实际制造路线。

前景边界从制造商声明的材料接收状态开始。边界始终包括为该产品实施的裁切、成形、缝纫或其他连接、部件装配、检验和工厂大门包装。聚合物扁丝挤出与圆织、黄麻准备与织造、涂层、层压、内衬装配和印刷，只有在报告设施控制这些工序时才纳入。外购织物、纱线、薄膜、内衬、缝线、油墨、胶黏剂及其他部件必须采用上游数据集，不得在前景模型内重复构建。

零售购物袋、手提包、钱包、托特包等个人消费用袋不在范围内；纸袋、非纺织制品的热塑性柔性薄膜袋、刚性容器、货物装袋、运输服务、使用、销售后重复使用和清洗以及寿命终止同样不在范围内。适用危险货物规则的产品还必须符合相应法规的合格规范；仅使用本 PCR 不构成危险货物包装批准。

除非前景证据证明汇总结果仍具有代表性，不得平均不同材料族和制造路线。实际使用的每一种聚合物、纤维、填料、色母料、批油、缝线、油墨、胶黏剂、内衬、包装组件、公用工程、燃料、制冷剂损失、废物和直接排放均须作为独立原子交换记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.sacks-and-bags-of-a-kind-used-for-the-packing-of-goods |
| classification_refs | CPC 3.0: 27150 - 货物包装用袋 |
| covered_products | 用于包装货物的纺织袋，包括聚丙烯或高密度聚乙烯扁丝编织袋、黄麻或其他韧皮纤维麻袋、棉布袋、网眼袋，以及属于 CPC 27150 的纺织 FIBC |
| excluded_products | 零售购物袋、手提包、钱包、托特包和个人用袋；纸袋；非纺织柔性薄膜袋；刚性容器；已装货物；运输、使用和寿命终止服务 |
| representative_product | 制造设施大门处一件合格的货物包装用纺织袋 |
| production_route | 外购纺织基材，或有条件纳入的扁丝/纤维准备与织造；随后按路线进行涂层或层压、印刷、裁切、缝纫或热连接、组件装配、检验和出厂包装 |
| market_state | 工厂大门处空置且验收合格的成品包装袋，处于干燥或声明的调湿状态，不含可拆卸出厂包装和所包装货物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 能容纳、保护或便于搬运所声明货物类别的货物包装用成品纺织袋 |
| How much | 验收合格的成品包装袋净质量 1 kg |
| How well | 满足该产品子类所声明的材料、构造、容量、尺寸、缝口、强度、内衬、涂层、印刷、起吊装置和合格规范 |
| How long or cycle | 工厂大门处一个验收合格的生产批次；使用寿命和重复使用次数供下游使用时声明，但不改变质量参考量 |
| reference_flow_link | `finished_goods_packing_sack` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 货物包装用纺织袋 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类与拟包装货物；额定容量及适用时的安全工作载荷；尺寸；聚合物或纤维种类及质量分数；原生或再生含量口径；扁丝、纱线和织造构造；织物单位面积质量；涂层、层压与内衬构造；缝口和连接系统；FIBC 的起吊及卸料组件；印刷与油墨系统；验收试验和合格标准；产品净质量；调湿或含水状态；生产地域；纳入的现场工序；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息的数据包，其参考流定义不完整。

本 PCR 不分配参考产品 UUID。经核验的 state-100 候选 `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f` 是 **缝制袋**，其描述面向消费者市场的棉布消费袋、托特包和钱包；该路线并非本 PCR 表示的货物包装类别，因此予以拒绝。质量与质量单位仍是有效的定量支持对象。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 恰好报告 1 kg 验收合格包装袋净质量。计入永久连接的内衬、吊带、封口和配件；排除所包装货物、可拆卸出厂包装和托盘。 |
| `conditioned_textile_mass` | 纤维、纱线、织物、产品和纺织废物 | 质量 | kg | 声明每一纺织流的含水或调湿口径。没有实测或有文件依据的换算，不得合并干基、调湿和接收状态质量。 |
| `component_mass_reconciliation` | 产品构造 | 质量分数 | kg/kg | 分别记录每一种聚合物、纤维、涂层、内衬、缝线和永久连接组件，并将其在验收产品中的质量分数与声明的产品构造核对。 |
| `fabric_area_to_mass` | 织物记录 | 质量和面积 | kg 和 m2 | 织物按面积采购或发料时，采用同批实测单位面积质量换算为质量；保留原始面积和实测换算值。 |
| `item_count_to_mass` | 包装袋生产数量 | 数量和质量 | 件和 kg | 使用同批、同子类的代表性袋单件质量，将合格品和废品件数换算为质量；保留取样质量、样本数和生产批次。 |
| `electricity_measurement` | 电力 | 能量 | kWh | 保留电表或账单值、电压等级、地域和供电组合。共享电力只能采用有文件依据的物理驱动因素分配。 |
| `fuel_and_steam_measurement` | 天然气和外购蒸汽 | 能量或交付质量 | MJ、Nm3 或 kg | 每种燃料与外购蒸汽分别记录。记录燃料热值口径，以及蒸汽压力、温度和凝结水回收条件；保留全部换算因子。 |
| `water_measurement` | 工艺水和废水 | 质量或体积 | kg 或 m3 | 保留实测单位。仅在声明密度和温度口径时进行体积—质量换算，并核对进水、回用、蒸发、产品带出和排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告设施接收的 PP 或 HDPE 树脂、黄麻纤维、纱线、机织纺织基材、内衬、涂层材料、缝线、油墨、胶黏剂、组件和包装；声明材料牌号、再生含量、构造、调湿状态、供应商门点和已含上游加工 |
| starting_condition_role | 上游生产由独立数据集表示的外购或设施间产品投入；只有报告设施控制一体化基材制造时，该过程才成为前景过程 |
| product_classification_scope | CPC 27150 货物包装用制成纺织袋；个人消费用袋、纸袋、非纺织薄膜袋和刚性容器须使用其他 PCR |
| recursive_input_rule | 外购包装袋或已属于 CPC 27150 的中间产品仅作为带上游数据集的供应产品投入记录一次；接收设施只清单化其增量转换 |
| upstream_dataset_requirement | 对每种接收的树脂、纤维、纱线、织物、内衬、涂层材料、缝线、油墨、胶黏剂、组件、公用工程和包装材料，采用与材料、牌号、再生含量、地域和路线相符的上游数据集 |
| disclosure | 声明投入门点、现场与外包工序、材料路线、产品子类、容量、织物和缝口构造、涂层/内衬/印刷系统、FIBC 组件、调湿状态、排除项、截断、共享设施分配及全部上游数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景产品系统 | 纳入从声明的材料接收状态到空置合格成品及其工厂大门出厂准备的全部制造商控制工序。 | `un-cpc-v3-structure-2023`; `eu-pef-2021` |
| `boundary_route_specificity` | 产品路线 | 只有在相应工序为声明批次执行或受控时，才纳入聚合物扁丝挤出与织造、黄麻准备与织造、涂层、层压、印刷和内衬制造；否则使用供应产品的上游数据集。 | `unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`; `eu-textiles-bref-2023` |
| `boundary_product_conformity` | PP 编织袋和 FIBC | 保留适用的材料、构造、设计、型式试验、标识、容量和拟包装货物规范；本 PCR 不替代产品合格评定。 | `iso-23560-2015`; `iso-21898-2024`; `bis-is-14887-2014` |
| `boundary_atomic_completeness` | 投入与产出 | 将每种实际材料、化学品、包装组件、公用工程、燃料、制冷剂损失、废物流和直接排放作为独立原子交换添加；不得使用聚合的能源载体、化学品、包装、废物或排放标签。 | `eu-textiles-bref-2023`; `eu-pef-2021` |
| `boundary_exclusions` | 下游阶段 | 排除货物装袋、配送、使用、重复使用、销售后清洗和寿命终止；只有单独声明的研究范围可在不改变本工厂大门参考流的前提下增加这些阶段。 | `un-cpc-v3-structure-2023`; `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_textile_substrate` | 一体化纺织基材制造 | `conditional` | 仅当报告设施控制聚合物扁丝挤出与织造，或黄麻准备、纺纱与织造时纳入。 | 前景中间产品生产 | 每 kg 转入制袋的机织基材，并与 1 kg 合格产品核对 |
| `bag_conversion_finishing` | 制袋转换、整理、检验与包装 | `required` | 始终纳入制造商控制的纺织基材及组件向合格包装袋的转换。 | 前景最终产品生产 | 恰好 1 kg 合格货物包装用纺织袋净质量 |

### 过程：一体化纺织基材制造（`integrated_textile_substrate`）

#### 输入

##### 产品流

###### 聚丙烯拉丝级树脂（`substrate_pp_resin`）

仅在一体化 PP 扁丝挤出路线中记录聚丙烯树脂。

- 选定流：拉丝级聚丙烯树脂
- 流属性/单位：质量 / kg
- 数量规则：实测投入扁丝挤出线的树脂，并调整库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入的聚烯烃机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：`sharma-alagh-pp-packaging-2021`

###### 高密度聚乙烯扁丝级树脂（`substrate_hdpe_resin`）

一体化 HDPE 包装袋路线须将 HDPE 扁丝级树脂与 PP 分开记录。

- 选定流：扁丝级高密度聚乙烯树脂
- 流属性/单位：质量 / kg
- 数量规则：实测投入扁丝挤出线的树脂，并调整库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入的聚烯烃机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：`bis-is-14887-2014`

###### 碳酸钙填料（`substrate_calcium_carbonate`）

仅当碳酸钙有意配混进扁丝配方时记录。

- 选定流：碳酸钙填料
- 流属性/单位：质量 / kg
- 数量规则：称量投入声明树脂批次的填料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入的聚烯烃机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`sharma-alagh-pp-packaging-2021`

###### 色母料（`substrate_colour_masterbatch`）

实际使用的色母料须与基础树脂和填料分开记录。

- 选定流：聚烯烃色母料
- 流属性/单位：质量 / kg
- 数量规则：称量投入声明树脂批次的色母料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入的聚烯烃机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`sharma-alagh-pp-packaging-2021`

###### 原黄麻纤维（`substrate_raw_jute_fibre`）

只有一体化黄麻准备、纺纱和织造路线记录原黄麻纤维。

- 选定流：麻袋用原黄麻纤维
- 流属性/单位：质量 / kg
- 数量规则：称量为声明生产批次开包的纤维，并调整库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入的黄麻袋布，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：`unido-jute-bag-factory-1990`

###### 黄麻批油（`substrate_batching_oil`）

用于软化黄麻纤维的实际油剂作为一种配方产品投入单独记录。

- 选定流：黄麻纤维批油
- 流属性/单位：质量 / kg
- 数量规则：实测加入批处理乳液的油剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入的黄麻袋布，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`unido-jute-bag-factory-1990`

###### 工艺水（`substrate_process_water`）

扁丝冷却、黄麻乳化配批、加湿或其他现场基材工序使用的水须分别计量。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：计量或按批次记录供应水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_steam_records`
- 来源：`unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`

###### 电力（`substrate_electricity`）

挤出、拉伸、卷绕、梳理、纺纱、织造、通风和控制使用的电力按适用电表记录。

- 选定流：设施供应的交流电力
- 流属性/单位：能量 / kWh
- 数量规则：计量归属于一体化基材制造的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`

###### 天然气（`substrate_natural_gas`）

仅在声明路线消耗天然气进行扁丝直接或间接加热、退火、干燥或轧光时记录。

- 选定流：天然气
- 流属性/单位：低位热值能量 / MJ
- 数量规则：计量或开票气量按供应商低位热值换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bref-2023`

###### 外购蒸汽（`substrate_purchased_steam`）

黄麻调湿或纺织整理使用的外购蒸汽须与燃料和电力分开记录。

- 选定流：外购工艺蒸汽
- 流属性/单位：质量 / kg
- 数量规则：计量所交付蒸汽，并声明压力和凝结水回收条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_steam_records`
- 来源：`eu-textiles-bref-2023`

##### 废物流

不预设通用废物投入。进入本过程的特定回收材料必须使用独立材料身份并保留来源。

##### 基本流

不预设通用基本流投入。直接从环境取用的水或其他资源须添加为具有环境区室的原子交换。

#### 输出

##### 产品流

###### 聚烯烃机织袋布（`substrate_woven_polyolefin_fabric`）

在转入制袋时计量声明的 PP 或 HDPE 机织织物。

- 选定流：包装袋用聚烯烃扁丝机织织物
- 流属性/单位：质量 / kg
- 数量规则：实测转入制袋的调湿织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入的聚烯烃机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_records`
- 来源：`sharma-alagh-pp-packaging-2021`; `iso-23560-2015`

###### 黄麻袋布（`substrate_jute_sacking_fabric`）

在所声明的调湿和轧光工序后计量机织黄麻袋布。

- 选定流：机织黄麻袋布
- 流属性/单位：质量 / kg
- 数量规则：实测转入制袋的调湿织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入的黄麻袋布，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_records`
- 来源：`unido-jute-bag-factory-1990`

##### 废物流

###### 聚烯烃扁丝边角废料（`substrate_polyolefin_tape_waste`）

离开扁丝制造的洁净或受污染 PP/HDPE 扁丝边角废料须称重，且不得从树脂投入中净扣除。存在机织织物废品时须另建具体废物卡。

- 选定流：聚烯烃扁丝边角废料
- 流属性/单位：质量 / kg
- 数量规则：计量转往声明回用、回收或处理路线的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的聚烯烃机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`sharma-alagh-pp-packaging-2021`; `patti-cicala-acierno-2020`

###### 黄麻纤维及纱线废料（`substrate_jute_fibre_waste`）

离开过程的黄麻纤维、纱线和织造废物作为独立废物流称重。

- 选定流：黄麻纤维及纱线生产废料
- 流属性/单位：质量 / kg
- 数量规则：计量转往声明回用、回收或处理路线的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的黄麻袋布，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`unido-jute-bag-factory-1990`; `patti-cicala-acierno-2020`

###### 纺织基材工艺废水（`substrate_process_wastewater`）

扁丝冷却、黄麻配批、加湿、清洗或整理产生的废水在处理移交点计量。

- 选定流：纺织基材工艺废水
- 流属性/单位：体积 / m3
- 数量规则：在声明的内部或外部处理边界计量排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的机织基材，并与 1 kg 合格产品核对
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bref-2023`

##### 基本流

###### 化石二氧化碳排放到空气（`substrate_fossil_co2_to_air`）

现场燃料燃烧产生的直接化石二氧化碳按实测燃料清单和有文件依据的因子计算。

- 选定流：二氧化碳，化石，排放到空气
- 流属性/单位：质量 / kg
- 数量规则：按每种现场燃料记录计算直接化石 CO2；不计入燃料上游排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的机织基材，并与 1 kg 合格产品核对
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-textiles-bref-2023`

###### 二氧化氮排放到空气（`substrate_nitrogen_dioxide_to_air`）

现场燃烧的实测或按许可证计算的二氧化氮作为物质特定交换记录。其他氮氧化物须分别建卡。

- 选定流：二氧化氮，排放到空气
- 流属性/单位：质量 / kg
- 数量规则：实测排放，或按记录燃料和批准的场址因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的机织基材，并与 1 kg 合格产品核对
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-textiles-bref-2023`

### 过程：制袋转换、整理、检验与包装（`bag_conversion_finishing`）

#### 输入

##### 产品流

###### 聚烯烃机织袋布（`conversion_woven_polyolefin_fabric`）

仅在声明的聚烯烃包装袋路线记录 PP 或 HDPE 机织基材。

- 选定流：包装袋用聚烯烃扁丝机织织物
- 流属性/单位：质量 / kg
- 数量规则：实测投入裁切和制袋的织物，并调整库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：`sharma-alagh-pp-packaging-2021`; `iso-23560-2015`

###### 黄麻袋布（`conversion_jute_sacking_fabric`）

仅在声明的黄麻或韧皮纤维包装袋路线记录黄麻袋布。

- 选定流：机织黄麻袋布
- 流属性/单位：质量 / kg
- 数量规则：实测投入裁切和制袋的织物，并调整库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：`unido-jute-bag-factory-1990`

###### 棉质袋布（`conversion_cotton_sacking_fabric`）

只有在包装袋明确属于棉纺织包装制品而非消费用袋时记录棉织物。

- 选定流：机织棉质袋布
- 流属性/单位：质量 / kg
- 数量规则：实测投入裁切和制袋的织物，并调整库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：`un-cpc-v3-structure-2023`

###### 聚丙烯缝纫线（`conversion_pp_sewing_thread`）

缝制聚烯烃袋和 FIBC 使用的 PP 缝纫线须独立记录。

- 选定流：聚丙烯缝纫线
- 流属性/单位：质量 / kg
- 数量规则：实测发放缝线量减去期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：`iso-21898-2024`; `sharma-alagh-pp-packaging-2021`

###### 黄麻缝合捻线（`conversion_jute_sewing_twine`）

仅在适用的黄麻袋缝口路线记录黄麻缝合捻线。

- 选定流：黄麻缝合捻线
- 流属性/单位：质量 / kg
- 数量规则：实测发放捻线量减去期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：`unido-jute-bag-factory-1990`

###### 水性柔版印刷油墨（`conversion_water_based_flexo_ink`）

包装袋在现场印刷时记录实际水性柔版油墨配方；物质上不同的油墨配方须分别建卡。

- 选定流：水性柔版印刷油墨
- 流属性/单位：质量 / kg
- 数量规则：称量发放油墨量减去回收的可复用油墨
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`sharma-alagh-pp-packaging-2021`; `eu-textiles-bref-2023`

###### 低密度聚乙烯内衬薄膜（`conversion_ldpe_liner_film`）

仅在 LDPE 薄膜成为永久供应的内衬或层压层时记录。

- 选定流：低密度聚乙烯内衬薄膜
- 流属性/单位：质量 / kg
- 数量规则：计量进入合格产品的薄膜质量加实测过程损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_records`
- 来源：`sharma-alagh-pp-packaging-2021`

###### 聚氨酯层压胶黏剂（`conversion_polyurethane_adhesive`）

声明使用胶黏剂的层压路线才记录该聚氨酯胶黏剂，且不得与油墨或溶剂合并。

- 选定流：聚氨酯层压胶黏剂
- 流属性/单位：质量 / kg
- 数量规则：称量发放的原始配方胶黏剂减去回收的可复用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`sharma-alagh-pp-packaging-2021`; `eu-textiles-bref-2023`

###### 工艺水（`conversion_process_water`）

油墨调配、清洗或路线特定整理使用的水须与外购化学品分开记录。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：计量或按批次记录供应水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_steam_records`
- 来源：`eu-textiles-bref-2023`

###### 电力（`conversion_electricity`）

裁切、缝纫、连接、印刷、层压、检验、通风和打包使用的电力按适用电表记录。

- 选定流：设施供应的交流电力
- 流属性/单位：能量 / kWh
- 数量规则：计量归属于制袋转换与整理的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`

###### 天然气（`conversion_natural_gas`）

仅在现场使用天然气进行涂层、层压、印刷或干燥时记录。

- 选定流：天然气
- 流属性/单位：低位热值能量 / MJ
- 数量规则：计量或开票气量按供应商低位热值换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bref-2023`

###### 外购蒸汽（`conversion_purchased_steam`）

路线特定的整理或干燥所用外购蒸汽须与天然气和电力分开记录。

- 选定流：外购工艺蒸汽
- 流属性/单位：质量 / kg
- 数量规则：计量所交付蒸汽，并声明压力和凝结水回收条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_steam_records`
- 来源：`eu-textiles-bref-2023`

###### 瓦楞纸板箱（`packaging_corrugated_box`）

用于成品袋出厂运输的瓦楞纸箱须单独记录，并排除在参考产品质量之外。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：实测用于工厂大门出厂的纸箱消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

###### 低密度聚乙烯缠绕膜（`packaging_ldpe_stretch_film`）

出厂缠绕使用的 LDPE 缠绕膜须与产品内永久装入的内衬分开记录。

- 选定流：低密度聚乙烯缠绕膜
- 流属性/单位：质量 / kg
- 数量规则：实测用于工厂大门出厂的薄膜消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

###### 聚丙烯打包带（`packaging_pp_strapping_band`）

用于固定捆包或纸箱的 PP 打包带须与产品中的 PP 材料分别计量。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 / kg
- 数量规则：实测用于工厂大门出厂的打包带消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`sharma-alagh-pp-packaging-2021`; `eu-pef-2021`

##### 废物流

不预设通用废物投入。进入转换过程的特定退回或回收材料须使用独立材料卡并保留来源。

##### 基本流

不预设通用基本流投入。适用时，直接资源取用须添加为具有环境区室的原子交换。

#### 输出

##### 产品流

###### 货物包装用成品纺织袋（`finished_goods_packing_sack`）

在增加可拆卸出厂包装前，按声明调湿状态称量验收合格的空置成品包装袋。

- 选定流：货物包装用纺织袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 合格成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-v3-structure-2023`; `iso-23560-2015`; `iso-21898-2024`

##### 废物流

###### 聚烯烃织物边角废料（`conversion_polyolefin_offcut_waste`）

PP 或 HDPE 织物边角料及不合格聚烯烃袋须与天然纤维废物分开称量。

- 选定流：聚烯烃袋布边角废料
- 流属性/单位：质量 / kg
- 数量规则：计量转往声明回用、回收或处理路线的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`sharma-alagh-pp-packaging-2021`; `patti-cicala-acierno-2020`

###### 黄麻织物边角废料（`conversion_jute_offcut_waste`）

黄麻织物边角料及不合格黄麻袋作为独立废物流记录。

- 选定流：黄麻袋布边角废料
- 流属性/单位：质量 / kg
- 数量规则：计量转往声明回用、回收或处理路线的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`unido-jute-bag-factory-1990`; `patti-cicala-acierno-2020`

###### 棉织物边角废料（`conversion_cotton_offcut_waste`）

棉织物边角料及不合格棉质包装袋须与黄麻和聚烯烃废物分开记录。

- 选定流：棉质袋布边角废料
- 流属性/单位：质量 / kg
- 数量规则：计量转往声明回用、回收或处理路线的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`patti-cicala-acierno-2020`

###### 废印刷油墨（`conversion_waste_ink`）

不可用油墨及作为废物移交的含油墨液体须与清洗废水分开记录。

- 选定流：废水性柔版印刷油墨
- 流属性/单位：质量 / kg
- 数量规则：计量转往声明处理路线的废油墨质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bref-2023`

###### 废层压胶黏剂（`conversion_waste_adhesive`）

不可用层压胶黏剂须按其固化状态和处理去向记录。

- 选定流：废聚氨酯层压胶黏剂
- 流属性/单位：质量 / kg
- 数量规则：计量转往声明处理路线的废胶黏剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bref-2023`

###### 印刷及设备清洗废水（`conversion_cleaning_wastewater`）

印刷、油墨调配或设备清洗废水在处理移交点计量。

- 选定流：印刷及设备清洗废水
- 流属性/单位：体积 / m3
- 数量规则：在声明处理边界计量或按批次估算排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bref-2023`

##### 基本流

###### 化石二氧化碳排放到空气（`conversion_fossil_co2_to_air`）

现场燃料燃烧产生的直接化石二氧化碳按实测燃料记录计算。

- 选定流：二氧化碳，化石，排放到空气
- 流属性/单位：质量 / kg
- 数量规则：按每种现场燃料记录计算直接化石 CO2；不计入燃料上游排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-textiles-bref-2023`

###### 乙酸乙酯排放到空气（`conversion_ethyl_acetate_to_air`）

适用的含溶剂印刷或层压路线所排放乙酸乙酯，作为一种物质特定交换记录。其他每种受监测有机物须分别建卡。

- 选定流：乙酸乙酯，排放到空气
- 流属性/单位：质量 / kg
- 数量规则：实测适用路线的乙酸乙酯排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-textiles-bref-2023`

###### 制冷剂 R-134a 排放到空气（`conversion_r134a_to_air`）

只有工艺冷却或生产空间调温确实使用 R-134a 时才记录其损失；其他实际制冷剂须分别建卡。

- 选定流：1,1,1,2-四氟乙烷（R-134a），排放到空气
- 流属性/单位：质量 / kg
- 数量规则：根据制冷剂采购、充注、回收和期末库存记录计算库存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格货物包装用纺织袋
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 前景过程 | 通过拆分独立计量的基材、转换、整理和包装工序，并保留路线特定材料与废物记录来避免分配。 | `eu-pef-2021` |
| `allocation_shared_utilities` | 共享计量和服务 | 按有文件依据的物理驱动因素分配共享电力、蒸汽、燃料、压缩空气、水和治理设施，例如计量机器时间、加工质量或实测运行小时；披露驱动因素和未分配总量。 | `eu-pef-2021` |
| `allocation_multiple_products` | 多种包装袋产品 | 产品共同使用过程时采用因果物理关系。若不存在可辩护的物理关系，则采用经济关系并报告敏感性结果；没有代表性证据不得平均物质上不同的产品。 | `eu-pef-2021` |
| `allocation_scrap_treatment` | 可回用或可回收生产废料 | 记录废料全部质量及处理去向。不得从材料投入中净扣除废料，也不得在门到门前景清单内给予避免产品抵扣，除非下游方法明确要求并记录该处理。 | `eu-pef-2021` |
| `allocation_rework` | 内部返工 | 将内部返工保留在过程质量平衡中，并计入返工所需能量和材料；只有跨越系统边界的材料才作为废物或共产品输出报告。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | 树脂、纤维、织物、缝线、薄膜和组件投入 | 地磅、收货、发料和库存记录 | 材料身份；供应商；批次；期初库存；收货；发料；期末库存；退回量；含水/调湿状态 | 通过库存移动和经校验秤核对发料质量 | kg | 每批次，按月核对 | 至少连续 12 个有代表性的月份，或完整生产活动期 | 声明数据集内所有受控生产线 | 按精确材料身份汇总净消耗；合格产品核对后归一化 | 校准记录；供应商规范；批次追溯；库存核对 |
| `cp_chemical_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | 填料、色母料、批油、油墨和胶黏剂投入 | 批单、配方和发料记录 | 产品身份；配方；固含量；发料质量；回收可复用质量；期初和期末库存 | 称量或计量每种具体化学品产品 | kg | 每批次，按月核对 | 与产品输出相同期间 | 使用该化学品的每条受控生产线 | 净消耗等于发料减回收可复用材料和库存变化 | 秤校准；安全/技术数据表；批次签核 |
| `cp_energy_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | 电力和每种燃料 | 电表、账单和设备小时记录 | 电表编号；期初/期末读数；燃料量；单位；热值；生产线小时；分配驱动因素 | 优先专用计量；否则核对账单总量和物理分配驱动因素 | kWh；MJ；Nm3 | 连续或按账单，按月核对 | 与产品输出相同期间 | 全部纳入设备和共享服务 | 采用有文件依据的因子换算；各载能体分别保留；分配总量须等于设施记录 | 电表校准；账单；燃料证书；分配核对 |
| `cp_water_steam_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | 工艺水和外购蒸汽 | 计量、批次和供应商记录 | 水量；蒸汽质量；压力；温度；凝结水回收；回用；蒸发估算 | 专用计量，或以有文件依据的批配方与场址总量核对 | m3；kg | 每批次或连续，按月核对 | 与产品输出相同期间 | 全部纳入湿法、冷却和用汽工序 | 水与蒸汽分别保留；核对进水与排水 | 仪表校准；供应商声明；水量平衡 |
| `cp_output_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | 中间产品和合格产品输出 | 生产及质量放行记录 | 产品 id；批次；毛质量；可拆卸包装质量；净质量；件数；废品质量；调湿状态 | 使用校准秤称量转移和合格输出 | kg；件 | 每批次 | 与投入记录相同期间 | 全部纳入生产线和检验点 | 按精确产品规范汇总合格净质量；排除可拆卸包装 | 秤校准；放行证书；件数转质量样本 |
| `cp_waste_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | 除废水外的每项固体或液体废物 | 废物日志、容器称重和移交联单 | 废物身份；来源过程；毛重/皮重/净重；污染状态；去向；回收或处理路线 | 移交时称量每项废物流 | kg | 每次移交，按月核对 | 与产品输出相同期间 | 全部纳入过程和储存点 | 按一种材料、污染状态和去向汇总；不得从投入净扣除 | 秤校准；移交联单；承包商收据 |
| `cp_wastewater_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | 每项废水流 | 流量计、批次排放和处理记录 | 来源过程；体积；适用密度；处理移交；监测组成 | 在处理边界计量排放或记录批次体积 | m3；kg | 连续或按批次，按月核对 | 与产品输出相同期间 | 全部纳入湿法和清洗工序 | 按组成和接收处理方式汇总；与水量平衡核对 | 仪表校准；采样记录；处理收据 |
| `cp_direct_emission_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | 每项直接空气排放 | 烟道测试、连续监测、许可证计算和燃料记录 | 物质；区室；浓度；气体流量；时长；燃料量；因子来源 | 优先实测排放；否则采用与采集活动数据关联的批准计算 | kg | 按监测计划和月度计算 | 与产品输出相同期间 | 每个现场燃烧、印刷、涂层及治理源 | 分物质计算并核对运行小时 | 实验室报告；监测仪校准；许可因子；计算表 |
| `cp_refrigerant_records` | `bag_conversion_finishing` | 每种制冷剂损失 | 制冷剂维护和库存记录 | 制冷剂身份；期初充注；采购；添加；回收；期末充注 | 对每种制冷剂作年度或活动期库存平衡 | kg | 每次维护事件，年度核对 | 与产品输出相同期间 | 全部纳入冷却系统 | 损失等于期初库存加采购减回收和期末库存，并与维护记录核对 | 技师记录；钢瓶称重；设备台账 |
| `cp_packaging_records` | `bag_conversion_finishing` | 每种可拆卸出厂包装投入 | 装箱单和材料发料记录 | 包装身份；发料质量；退回质量；所包装产品质量；装运 id | 称量，或由经核验的单件质量和数量计算 | kg | 每批装运，按月核对 | 与产品输出相同期间 | 全部工厂大门出厂包装 | 分包装材料汇总并按产品净质量归一化 | 供应商规范；单件质量样本；装运核对 |
| `cp_quality_test_records` | `bag_conversion_finishing` | 产品合格性和限定信息 | 规范、测试及检验记录 | 子类；容量；尺寸；质量；织法；缝口；强度；涂层；内衬；起吊组件；标识；结果 | 采用声明的产品特定标准和抽样方案 | 声明的试验单位 | 每个生产批次 | 与产品输出相同期间 | 全部放行产品 | 将每项合格质量链接至通过或已处置的批次 | 试验报告；设备校准；放行授权 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 所有清单行 | 归一化数量 = 报告期交换量 / 报告期合格产品净质量。 | 采集的交换量；合格产品净质量 | 每 1 kg 参考产品的交换量 | `eu-pef-2021` |
| `calc_inventory_consumption` | 材料和化学品 | 净消耗 = 期初库存 + 收货 - 期末库存 - 有文件依据的退回供应商或可复用回收量。 | 库存和发料记录 | 按原子材料身份划分的净消耗质量 | `eu-pef-2021` |
| `calc_item_to_mass` | 按件记录 | 产品或废品质量 = 件数 × 同批同子类实测代表性单件质量。 | 件数；样本质量；样本数 | 批次特定产品或废品质量 | `iso-23560-2015`; `iso-21898-2024` |
| `calc_material_balance` | 每个过程 | 在一致的质量和含水口径下核对投入 = 转移产品 + 合格产品 + 废物 + 排放 + 有文件依据的库存变化；调查并披露残差。 | 材料投入；产出；废物；排放；库存变化 | 过程物料平衡残差 | `eu-pef-2021` |
| `calc_shared_utility` | 共享公用工程 | 分配公用工程 = 经核对设施总量 × 有文件依据的物理驱动因素份额；各份额之和须等于源总量。 | 设施总量；各过程/产品驱动因素值 | 分配给每种产品的公用工程量 | `eu-pef-2021` |
| `calc_fuel_emissions` | 现场燃烧 | 直接排放 = 采集的燃料活动量 × 有文件依据的场址、供应商或权威排放因子；每种物质和燃料分别计算。 | 燃料量；热值换算；排放因子 | 直接物质排放 | `eu-textiles-bref-2023` |
| `calc_refrigerant_loss` | 冷却系统 | 制冷剂损失 = 期初充注 + 采购/添加 - 回收量 - 期末充注，并与维护事件核对。 | 制冷剂库存和维护记录 | 一种制冷剂排放到空气的损失 | `eu-pef-2021` |
| `calc_net_product_mass` | 参考产品 | 产品净质量 = 放行毛质量 - 可拆卸出厂包装质量；永久连接的内衬和配件保留在产品质量中。 | 毛质量；包装质量；构造记录 | 合格参考产品净质量 | `iso-23560-2015`; `iso-21898-2024` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和全部交换 | 保留精确的产品子类、材料化学组成、牌号、构造、调湿状态、供应商门点和路线；不得合并语义不同的流。 | 规范、供应商记录、批单和流映射审查 |
| `dq_temporal` | 前景数据集 | 至少覆盖连续 12 个有代表性的月份或更短生产活动的完整周期，并说明停产、启动、异常生产和季节性。 | 报告期日历和生产日志 |
| `dq_completeness` | 投入与产出 | 核对采购、发料、库存、合格输出、废品、废物、废水和直接排放；披露每个排除项及未量化流。 | 经签核缺口审查的物料、水和能量平衡 |
| `dq_measurement` | 仪表和秤 | 使用适合测量范围的经校准仪器，并保留换算或分配前的原始读数。 | 校准证书、仪表台账和原始记录 |
| `dq_representativeness` | 汇总数据集 | 合并不同纤维/聚合物种类、容量、涂层与无涂层产品、FIBC 与小袋、一体化与仅转换路线前，须证明代表性。 | 生产份额分析和路线特定敏感性 |
| `dq_source_traceability` | 方法与外部证据 | 保留稳定来源身份，并将每项由外部约束的规则链接到来源 id；搜索摘要不是证据。 | 来源登记表和原文审查 |
| `dq_range_status` | 重要流 | 不得从单个案例推断 range，也不得把同一个值重复作为上下限。在至少两份独立、边界兼容的原文支持 range 前，保留场址特定采集要求和 manifest 中未解决 range 记录。 | range 证据审查和前景记录 |
| `dq_conformity` | 放行产品 | 将合格产品质量链接到适用包装袋或 FIBC 子类所声明的材料、构造、性能、试验和标识要求。 | 产品试验报告和放行授权 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | 数据集身份 | 确认参考产品为 CPC 27150 范围内用于包装货物的空置纺织袋，而不是消费用袋、纸袋、非纺织薄膜袋或刚性容器。 | `un-cpc-v3-structure-2023` |
| `validation_reference_flow` | 定量参考 | 确认恰好 1 kg 合格成品净质量；排除所包装货物和可拆卸出厂包装，但计入永久连接的内衬、吊环和配件。 | `iso-23560-2015`; `iso-21898-2024` |
| `validation_route_boundary` | 过程覆盖 | 核验每项受控的扁丝/纤维准备、织造、涂层、层压、印刷、裁切、缝纫、连接、装配、检验和包装工序均已纳入，且每个外购中间产品均有上游数据集。 | `unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`; `eu-textiles-bref-2023` |
| `validation_atomic_inventory` | 清单行 | 拒绝聚合流标签。电力、蒸汽、每种燃料、每种制冷剂、水、每种化学品、每个包装组件、每项废物流和每种直接排放均须表示为独立原子交换。 | `eu-textiles-bref-2023`; `eu-pef-2021` |
| `validation_mass_balance` | 材料和产出 | 在一致调湿口径下检查过程物料平衡，要求调查并披露残差；废物和可复用废料不得从投入中静默净扣除。 | `eu-pef-2021` |
| `validation_allocation` | 共享过程 | 确认首先尝试细分，每项共享分配均使用有文件依据的物理或合理经济驱动因素，且分配总量与源记录一致。 | `eu-pef-2021` |
| `validation_product_conformity` | PP 编织袋和 FIBC | 核验声明的适用标准、容量、构造、试验和标识证据；标记任何声称本 PCR 本身授予合格性的内容。 | `iso-23560-2015`; `iso-21898-2024`; `bis-is-14887-2014` |
| `validation_ranges` | 定量范围 | 拒绝来自单一工厂、单个案例、搜索摘要或上下限相同值的 range。只有记录了两份独立、边界兼容的原文后，方可接受外部经验 range。 | `eu-pef-2021` |
| `validation_uuid_status` | Tiangong 身份 | 参考产品不得使用“缝制袋”UUID。所有未解决的语义流须保持无 UUID，直至确认语义精确的 state-100 Tiangong 身份。 |  |
| `validation_bilingual_alignment` | 中英文 PCR | 确认有相同顺序的 rule id、process id、row id、source id 和受控词元，并为每个具体但未解析 UUID 的流提供准确中文名称。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 路线特定货物包装用纺织袋的前景生产数据包；经审查后可支持 `secondary_dataset` 或 `background_dataset` 投影 |
| downstream_use | 需要具有声明构造和地域的空置包装袋投入的工厂大门过程数据集和生命周期模型 |
| allowed_use | 用于声明的材料种类、产品子类、容量、构造、整理系统、设施技术、地域和报告期；汇总使用须证明代表性 |
| excluded_use | 消费用袋；纸质或非纺织薄膜袋；刚性容器；已装货物；没有适用法律规范的危险货物合格性；未单独提供的使用、重复使用或寿命终止建模 |
| required_metadata | PCR id 和版本；产品子类；拟包装货物；容量或安全工作载荷；尺寸；完整材料组成；织物构造和单位面积质量；内衬/涂层/印刷/缝口/FIBC 组件规范；净质量和调湿状态；纳入的现场工序；供应商门点；地域；技术；报告期；分配；截断；UUID 缺口；source id |
| required_quality_disclosure | 初级数据占比；仪表和秤覆盖；校准；物料/水/能量核对；路线代表性；上游数据集质量；分配敏感性；产品合格证据；未解决流身份和未解决 range 证据 |
| update_trigger | 材料种类、再生含量口径、容量等级、织物或缝口构造、内衬/涂层/印刷系统、FIBC 设计、供应商门点、技术、能源或燃料系统、水/废物处理、分配驱动因素、地域、适用标准、产品 UUID 可用性或代表性生产组合发生变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2023` | `official_guidance` | 联合国统计司，《Central Product Classification Version 3.0 structure》，代码 27150。https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf | 官方类别身份及相邻产品类别排除 |
| `iso-23560-2015` | `standard` | ISO 23560:2015，《Woven polypropylene sacks for bulk packaging of foodstuffs》。https://www.iso.org/standard/65221.html | PP 编织袋范围、容量、构造、试验及产品限定信息 |
| `iso-21898-2024` | `standard` | ISO 21898:2024，《Packaging — Flexible intermediate bulk containers (FIBCs) for non-dangerous goods》。https://www.iso.org/standard/83014.html | FIBC 材料、构造、设计、型式试验、标识和安全使用限定信息 |
| `bis-is-14887-2014` | `standard` | 印度标准局 IS 14887:2014，《Textiles — HDPE/PP woven sacks for packaging of 50 kg food grains — Specification》。https://www.bis.gov.in/is-14887-2014/?lang=en | 官方确认 HDPE/PP 机织纺织袋材料及粮食包装范围 |
| `unido-jute-bag-factory-1990` | `official_guidance` | 联合国工业发展组织，《Reactivation of the Jute Bag Factory: Economic Viability of a Bagging Factory》，报告 18352，1990。https://downloads.unido.org/ot/48/40/4840782/15001-20000_18352.pdf | 黄麻路线分解：配批、梳理、并条、纺纱、织造、加湿、轧光、裁切、折边、缝合、印刷和打包；识别电力和水需求，但不将单一案例用作 range 证据 |
| `eu-textiles-bref-2023` | `official_guidance` | 欧盟委员会联合研究中心，《Best Available Techniques (BAT) Reference Document for the Textiles Industry》，EUR 31392 EN，JRC131874，DOI 10.2760/355887，2023。https://publications.jrc.ec.europa.eu/repository/handle/JRC131874 | 条件性织物生产、涂层、层压、印刷、整理、废水及直接排放清单覆盖 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会关于使用环境足迹方法的建议 (EU) 2021/2279。https://eur-lex.europa.eu/eli/reco/2021/2279/oj | 系统边界披露、企业特定制造数据、分配层级、数据质量、可追溯性和校验逻辑 |
| `sharma-alagh-pp-packaging-2021` | `literature` | Sharma, T.; Alagh, P.，《Process and factor analysis in the manufacturing of woven polypropylene packaging textiles》，International Journal of Home Science 7(2)，109-115。DOI 10.22271/23957476.2021.v7.i2b.1155。https://www.homesciencejournal.com/archives/2021/vol7issue2/PartB/7-2-25-519.pdf | 已核验原文对 PP 树脂/填料扁丝挤出、拉伸、织造、印刷、裁切、缝纫、可选层压、检验、捆扎和打包的证据；不将案例值写成 PCR range |
| `patti-cicala-acierno-2020` | `literature` | Patti, A.; Cicala, G.; Acierno, D.，《Eco-Sustainability of the Textile Production: Waste Recovery and Current Recycling in the Composites World》，Polymers 13(1)，134。DOI 10.3390/polym13010134。https://www.mdpi.com/2073-4360/13/1/134 | 仅用于已核验的一般纺织生产和固体废物背景；明确不用于类别特定定量 range |
