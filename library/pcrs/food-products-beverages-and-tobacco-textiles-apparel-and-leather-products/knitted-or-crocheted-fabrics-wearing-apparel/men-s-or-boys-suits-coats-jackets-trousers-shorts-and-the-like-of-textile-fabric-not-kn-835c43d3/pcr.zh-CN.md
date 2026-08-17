---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-suits-coats-jackets-trousers-shorts-and-the-like-of-textile-fabric-not-kn-835c43d3
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非针织或钩编纺织物制男式或男童套装、大衣、夹克、裤、短裤及类似品

## 1. 范围与适用性

本 PCR 适用于非针织或钩编纺织物制男式或男童套装、大衣、夹克、裤、短裤及类似外衣或裁制服装成品的前景生产。边界从接收机织面料和已声明的服装组件开始，覆盖裁剪、缝制、条件性成衣湿处理、整烫、检验及销售包装，止于制造工厂大门。

数据包应区分服装类型、适用人群、参考尺码或尺码组合、各纺织组件纤维组成、面料结构与整理、里料和衬料、辅件组合、成衣湿处理路线、生产地域以及是否纳入销售包装。上游纤维、纱线、织造、面料染色和面料整理应作为上游数据集，除非这些作业在报告工厂内完成；分销、零售、消费者护理、维修、再使用及寿命终结不属于本前景制造数据集。

针织或钩编服装、毛皮服装、女式或女童服装、衬衫和内衣、服饰附件、鞋类以及单独销售的纺织面料不在范围内。防护服仅可在补充产品特定防护性能及合规规则后使用本 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-suits-coats-jackets-trousers-shorts-and-the-like-of-textile-fabric-not-kn-835c43d3 |
| classification_refs | CPC 3.0: 28231 |
| covered_products | 非针织或钩编纺织物制男式或男童套装、大衣、夹克、裤、短裤及类似服装 |
| excluded_products | 针织或钩编服装；毛皮服装；女式或女童服装；衬衫、内衣、睡衣、服饰附件、鞋类以及作为材料销售的纺织面料 |
| representative_product | 经裁剪、缝制、整理、检验和包装后可销售的男式或男童机织面料服装成品 |
| production_route | 接收机织面料与组件；面料准备和裁剪；缝制和装配；条件性成衣湿处理；整烫、检验和销售包装 |
| market_state | 制造完成的成品；工厂生产混合 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造工厂大门提供非针织或钩编纺织物制男式或男童服装成品 |
| How much | 1 kg 合格服装成品净质量 |
| How well | 可销售并符合已声明款式、尺码规格、物料清单、结构、整理、性能要求及最终质量控制准则 |
| How long or cycle | 一个完整制造批次；本前景生产参考不包括消费者使用寿命和护理循环 |
| reference_flow_link | 功能单位由下列单一参考产品流实现，并归一化为 1 kg 服装成品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Men's or boys' suits, coats, jackets, trousers, shorts and the like, of textile fabric, not knitted or crocheted `039191b4-8865-4c2e-83b4-afd3f17435c3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装类型；男式或男童属性；参考尺码或生产尺码组合；成品净质量；面料纤维组成；面料结构与整理；里料、衬料、袋布和辅件组成；颜色；成衣湿处理路线；工厂和国家；生产期间；销售包装纳入情况 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在全部已声明整理和调湿完成后、销售包装前确定净质量，除非研究产品明确包含包装；全部前景交换归一化到 1 kg 合格产品。 |
| `bom_mass_basis` | 面料、里料、衬料、袋布、缝纫线、紧固件、标签和粘合材料投入 | Mass | kg | 按原子 BOM 项采用领料、退料和库存变化记录。纤维或材料组成应分别报告；没有可追溯的面积—质量换算时不得用名义面料面积代替 BOM 质量。 |
| `packaging_mass_basis` | 各销售包装组件 | Mass | kg | 每种包装材料分别称量或按包装成品计算；不得把塑料袋、纸箱、吊牌或胶带合并为一个包装流。 |
| `energy_measurement` | 电力 | Energy | kWh | 优先采用过程分表；没有分表时，使用报告期内有记录的设备运行时间和额定或实测负荷分配工厂表计用电。 |
| `thermal_measurement` | 外购蒸汽和热水 | Energy | MJ | 保留供应商计量单位，并依据有记录的焓值、温度、压力或仪表系数换算为 MJ；蒸汽与热水保持为两个独立交换。 |
| `fuel_measurement` | 天然气和柴油 | Energy or mass | MJ or kg | 根据发票、储罐或仪表记录及库存变化分别记录每种燃料；不得合并为能源载体总量。 |
| `water_measurement` | 工艺水 | Mass | kg | 采用进水表或批次记录，并披露水源和处理等级。 |
| `refrigerant_balance` | Refrigerant R-410A | Mass | kg | 按期初库存加采购减期末库存及回收量计算补充或排放制冷剂；不得用设备额定充注量代替实测年度损失。 |
| `production_period` | 全部前景交换 | Time | 报告期 | 使用一个内部一致的生产期间，先核对产出、返工、废品及库存变化，再归一化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 机织面料以及各项已声明里料、衬料、袋布、缝纫线、紧固件、标签、粘合材料、化学品、公用工程和包装投入抵达服装制造工厂，且可获得供应商和 BOM 身份。 |
| starting_condition_role | 裁剪缝制服装制造的门到门前景起点；上游负荷通过相连产品数据集进入。 |
| product_classification_scope | 非针织或钩编纺织物制男式或男童套装、大衣、夹克、裤、短裤及类似服装成品。 |
| recursive_input_rule | 若投入本身属于本类别服装成品，应作为具有独立上游数据集的投入记录并披露所执行作业；不得递归地把它作为新制造的参考产出。 |
| upstream_dataset_requirement | 为每种材料、化学品、燃料、电力、蒸汽、热水、制冷剂和包装投入提供可追溯的上游数据集，并尽量匹配组成、地域、技术和时间。 |
| disclosure | 披露一体化及外包作业、湿处理配方、燃料和公用工程来源、分配方法、废品和返工、废物去向、直接排放、包装纳入情况及全部数据缺口或代理。 |

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | foreground_start_and_end | 从接收机织面料和已声明组件开始，到合格可销售产品抵达制造工厂大门结束；纳入全部现场裁剪、缝制、整理、检验、返工、废物处理、公用工程、包装和直接排放。 | `afw-pefcr-2025`; `lindkvist-2024-circular-garment-lca` |
| `boundary_02` | integrated_operations | 只有织造、染色、印花、刺绣、洗涤、涂层或其他处理在报告工厂和期间内完成时才纳入本数据集；否则连接独立上游或外包过程数据集。 | `afw-pefcr-2025` |
| `boundary_03` | excluded_life_cycle_stages | 本制造数据集排除出厂后分销、零售、消费者运输、使用、维修、再使用和寿命终结，但保留下游完整生命周期模型所需元数据。 | `ec-pef-method-2021`; `afw-pefcr-2025` |
| `boundary_04` | capital_goods | 除非研究目标明确要求，否则排除建筑和生产设备；比较数据集应一致披露该排除。 | `daystar-2024-cotton-apparel-dlca` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabric_preparation_cutting` | 面料准备、排料、铺布和裁剪 | required | 始终纳入 | 将接收的机织面料转化为裁片的前景过程 | kg 裁片产出 |
| `sewing_assembly` | 缝制和服装装配 | required | 始终纳入 | 装配裁片、缝纫线、紧固件、辅件和粘合件的前景过程 | kg 未整理装配服装 |
| `garment_wet_processing` | 成衣湿处理 | conditional | 报告工厂自行或委托对装配服装进行洗涤、染色、漂白、柔软、漂洗或其他湿处理时纳入 | 成衣湿处理前景过程 | kg 湿处理服装 |
| `pressing_inspection_packaging` | 整烫、最终检验、返工和销售包装 | required | 始终纳入；蒸汽、热水、柴油、制冷剂和各包装行仅在实际使用时适用 | 最终前景转化与参考产品放行 | 1 kg 合格服装成品 |

### 过程：面料准备、排料、铺布和裁剪（`fabric_preparation_cutting`）

#### 输入

##### 产品流

###### 机织面料（`shell_fabric_input`）

记录已声明款式、纤维组成、结构、颜色和整理的机织面料领用量。

- 选定流：Woven outer-shell textile fabric
- 流属性/单位：Mass / kg
- 数量规则：报告批次领用量减退料量和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_batch_records`
- 来源：`afw-pefcr-2025`

###### 机织里料（`lining_fabric_input`）

仅在 BOM 包含里料时记录，并保留其纤维组成和整理信息。

- 选定流：Woven lining textile fabric
- 流属性/单位：Mass / kg
- 数量规则：报告批次领用量减退料量和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_batch_records`
- 来源：`afw-pefcr-2025`

###### 粘合衬料片（`interlining_input`）

使用粘合衬时将其作为独立 BOM 交换记录。

- 选定流：Fusible interlining textile sheet
- 流属性/单位：Mass / kg
- 数量规则：报告批次领用量减退料量和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_batch_records`
- 来源：`afw-pefcr-2025`

###### 机织袋布（`pocketing_fabric_input`）

服装含口袋时单独记录袋布。

- 选定流：Woven pocketing textile fabric
- 流属性/单位：Mass / kg
- 数量规则：报告批次领用量减退料量和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_batch_records`
- 来源：`afw-pefcr-2025`

###### 牛皮纸排料纸（`marker_paper_input`）

使用实体排料纸时记录；无纸化数字裁剪不适用本行。

- 选定流：Kraft paper marker sheet
- 流属性/单位：Mass / kg
- 数量规则：已完成排料使用的实测纸张质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_batch_records`
- 来源：`afw-pefcr-2025`

###### 裁剪用电（`cutting_electricity_input`）

记录面料松布、铺布、裁剪、抽风和本地搬运设备用电。

- 选定流：Electricity, low voltage, at facility
- 流属性/单位：Energy / kWh
- 数量规则：本过程分表读数或有记录的设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_batch_records`
- 来源：`afw-pefcr-2025`

##### 废物流

本过程不规定废物投入。回用于生产的退回材料应以具有自身身份的新原子产品流或废物流记录。

##### 基本流

本过程不规定常规基本流投入。

#### 输出

##### 产品流

###### 服装裁片（`cut_panel_output`）

记录转入装配的合格裁片质量。

- 选定流：Cut garment panel
- 流属性/单位：Mass / kg
- 数量规则：合格裁片实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_batch_records`
- 来源：`lindkvist-2024-circular-garment-lca`

##### 废物流

###### 机织纺织裁剪边角料（`textile_cutting_offcut_output`）

按实际纤维组成和去向记录裁剪边角料；本行不是抵扣。

- 选定流：Woven textile cutting offcut
- 流属性/单位：Mass / kg
- 数量规则：称量边角料加经核对未退回的余料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_batch_records`
- 来源：`afw-pefcr-2025`; `lindkvist-2024-circular-garment-lca`

###### 废牛皮纸（`waste_marker_paper_output`）

废弃排料纸与纺织边角料分开记录。

- 选定流：Waste kraft paper
- 流属性/单位：Mass / kg
- 数量规则：称量废弃排料纸
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_batch_records`
- 来源：`afw-pefcr-2025`

##### 基本流

本过程不规定常规直接基本流输出；存在粉尘抽排或直接排放时，应新增单独实测原子行。

### 过程：缝制和服装装配（`sewing_assembly`）

#### 输入

##### 产品流

###### 服装裁片（`cut_panel_input`）

记录从裁剪工序转入的合格裁片。

- 选定流：Cut garment panel
- 流属性/单位：Mass / kg
- 数量规则：转入缝制装配的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`lindkvist-2024-circular-garment-lca`

###### 缝纫线（`sewing_thread_input`）

按已声明纤维组成和线密度记录缝纫线。

- 选定流：Sewing thread
- 流属性/单位：Mass / kg
- 数量规则：报告批次线轴领用量减退回量和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`lindkvist-2024-circular-garment-lca`

###### 服装纽扣（`button_input`）

存在纽扣时单独记录其质量。

- 选定流：Garment button
- 流属性/单位：Mass / kg
- 数量规则：使用数量乘实测或供应商声明的单件质量，并与领退料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`afw-pefcr-2025`

###### 拉链（`zipper_input`）

存在拉链时单独记录其质量。

- 选定流：Slide fastener
- 流属性/单位：Mass / kg
- 数量规则：使用数量乘实测或供应商声明的单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`afw-pefcr-2025`

###### 钩眼扣（`hook_eye_input`）

存在钩眼扣时单独记录其质量。

- 选定流：Hook-and-eye fastener
- 流属性/单位：Mass / kg
- 数量规则：使用数量乘实测或供应商声明的单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`afw-pefcr-2025`

###### 热塑性粘合带（`fusible_tape_input`）

接缝或加固使用粘合带时单独记录。

- 选定流：Thermoplastic fusible bonding tape
- 流属性/单位：Mass / kg
- 数量规则：报告批次卷材领用量减退回量和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`afw-pefcr-2025`

###### 缝制用电（`sewing_electricity_input`）

记录分配给本过程的缝纫机、粘合压机、本地照明及装配搬运用电。

- 选定流：Electricity, low voltage, at facility
- 流属性/单位：Energy / kWh
- 数量规则：本过程分表读数或有记录的设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`afw-pefcr-2025`; `daystar-2024-cotton-apparel-dlca`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定常规基本流投入。

#### 输出

##### 产品流

###### 未整理装配服装（`assembled_garment_output`）

记录转入湿处理或最终整理的装配服装。

- 选定流：Assembled unfinished garment
- 流属性/单位：Mass / kg
- 数量规则：合格装配服装实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`lindkvist-2024-circular-garment-lca`

##### 废物流

###### 废缝纫线（`thread_offcut_output`）

缝纫线头和不可用缝纫线与面料裁片废物分开记录。

- 选定流：Waste sewing thread
- 流属性/单位：Mass / kg
- 数量规则：称量收集的线废物或按领用减使用的平衡量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`afw-pefcr-2025`

###### 报废缝制服装组件（`rejected_component_output`）

不可修复报废缝制组件与返回生产的返工品分开记录。

- 选定流：Rejected sewn garment component
- 流属性/单位：Mass / kg
- 数量规则：不可修复报废组件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理装配服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_batch_records`
- 来源：`afw-pefcr-2025`

##### 基本流

本过程不规定常规直接基本流输出；存在粘合剂或溶剂排放时，应按具体化学物质新增独立行。

### 过程：成衣湿处理（`garment_wet_processing`）

#### 输入

##### 产品流

###### 未整理装配服装（`assembled_garment_wet_input`）

记录进入已声明湿处理配方的装配服装。

- 选定流：Assembled unfinished garment
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

###### 工艺水（`process_water_input`）

记录进入湿处理的新鲜水或处理水总量。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：进水表或配方批次记录，并核对循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

###### 热水（`hot_water_input`）

外购或独立供应热水时，将其与冷工艺水和蒸汽分开记录。

- 选定流：Hot water
- 流属性/单位：Energy / MJ
- 数量规则：热量表读数，或水质量乘有记录的进水与参考状态焓差
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

###### 湿处理用电（`wet_electricity_input`）

记录洗涤机、泵、水分离机、干燥机和控制系统用电。

- 选定流：Electricity, low voltage, at facility
- 流属性/单位：Energy / kWh
- 数量规则：分表读数或有记录的设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

###### 天然气（`natural_gas_input`）

湿处理现场供热使用天然气时，与电力、蒸汽和其他燃料分开记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：过程表计，或报告期发票与锅炉负荷分配的核对值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

###### 非离子表面活性剂（`nonionic_surfactant_input`）

批准配方含非离子表面活性剂时，将其作为单一化学品投入记录。

- 选定流：Non-ionic surfactant
- 流属性/单位：Mass / kg
- 数量规则：批次记录中的实际配方产品投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

###### 碳酸钠（`sodium_carbonate_input`）

配方使用碳酸钠时单独记录。

- 选定流：Sodium carbonate
- 流属性/单位：Mass / kg
- 数量规则：批次记录中的实际化学品投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

###### 乙酸（`acetic_acid_input`）

配方使用乙酸时单独记录并保留溶液浓度。

- 选定流：Acetic acid
- 流属性/单位：Mass / kg
- 数量规则：批次记录中的实际溶液投加质量和声明浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

###### 外购蒸汽（`wet_steam_input`）

蒸汽跨越过程边界供应时单独记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：蒸汽表读数按有记录的压力和焓值换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定常规基本流投入。

#### 输出

##### 产品流

###### 湿处理服装（`wet_processed_garment_output`）

记录湿处理及规定调湿后合格服装。

- 选定流：Wet-processed garment
- 流属性/单位：Mass / kg
- 数量规则：转入最终整理的调湿后批次产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

##### 废物流

###### 成衣湿处理工业废水（`industrial_wastewater_output`）

记录送往现场或场外处理的废水，并保留去向和实测水质数据。

- 选定流：Industrial wastewater from garment wet processing
- 流属性/单位：Mass / kg
- 数量规则：湿处理批次排水表或经核对的水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

###### 成衣湿处理废水污泥（`wastewater_sludge_output`）

现场处理产生脱水污泥时单独记录。

- 选定流：Wastewater-treatment sludge from garment wet processing
- 流属性/单位：Mass / kg
- 数量规则：外运污泥称量值，并记录实测干固体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`afw-pefcr-2025`

##### 基本流

###### 湿处理供热化石二氧化碳（`wet_co2_fossil_output`）

记录现场天然气燃烧的化石二氧化碳；全部使用外购热时不适用。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：烟气实测值，或燃料数量乘已披露的适用辖区因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`ec-pef-method-2021`

###### 湿处理供热化石甲烷（`wet_methane_fossil_output`）

现场天然气燃烧的化石甲烷作为独立基本交换记录。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：烟气实测值，或燃料数量乘已披露的适用辖区因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`ec-pef-method-2021`

###### 湿处理供热一氧化二氮（`wet_n2o_output`）

现场燃烧的一氧化二氮作为独立基本交换记录。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：烟气实测值，或燃料数量乘已披露的适用辖区因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`ec-pef-method-2021`

###### 湿处理供热氮氧化物（`wet_nox_output`）

现场燃烧实测或许可排放的氮氧化物与温室气体分开记录。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：烟气实测值，或燃料数量乘已披露的适用辖区因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`ec-pef-method-2021`

### 过程：整烫、最终检验、返工和销售包装（`pressing_inspection_packaging`）

#### 输入

##### 产品流

###### 进入最终整理的服装（`finish_garment_input`）

记录进入整烫和最终检验的服装中间品。

- 选定流：Garment entering final finishing
- 流属性/单位：Mass / kg
- 数量规则：转入最终整理的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`lindkvist-2024-circular-garment-lca`

###### 整烫和包装用电（`pressing_electricity_input`）

记录分配给本过程的整烫、检验、返工设备、输送和包装用电。

- 选定流：Electricity, low voltage, at facility
- 流属性/单位：Energy / kWh
- 数量规则：分表读数或有记录的设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`afw-pefcr-2025`; `daystar-2024-cotton-apparel-dlca`

###### 整烫外购蒸汽（`pressing_steam_input`）

整烫外购蒸汽与电力和热水分开记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：蒸汽表读数按有记录的压力和焓值换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`afw-pefcr-2025`

###### 备用发电柴油（`diesel_input`）

只有报告期内备用发电或专用设备实际消耗柴油时才记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：储罐期初库存加采购减期末库存，并按发电机运行记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`ec-pef-method-2021`

###### Refrigerant R-410A 补充量（`r410a_refrigerant_input`）

记录服务前景过程的冷却设备所补充的 R-410A；其他制冷剂应另设原子行。

- 选定流：Refrigerant R-410A
- 流属性/单位：Mass / kg
- 数量规则：期初库存加采购减期末库存和回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`ec-pef-method-2021`

###### 低密度聚乙烯服装袋（`ldpe_polybag_input`）

每个 LDPE 服装袋作为独立包装材料交换记录。

- 选定流：Low-density polyethylene garment polybag
- 流属性/单位：Mass / kg
- 数量规则：包装件数乘实测袋质量，并与领退料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`afw-pefcr-2025`

###### 瓦楞纤维板运输纸箱（`corrugated_carton_input`）

瓦楞纸箱与袋、吊牌和胶带分开记录。

- 选定流：Corrugated fibreboard shipping carton
- 流属性/单位：Mass / kg
- 数量规则：纸箱数量乘实测纸箱质量，并按实际装箱内容分配到服装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`afw-pefcr-2025`

###### 纸质服装吊牌（`paper_hangtag_input`）

服装附带纸质吊牌时单独记录。

- 选定流：Paper garment hangtag
- 流属性/单位：Mass / kg
- 数量规则：吊牌数量乘实测单件质量，并与领退料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`afw-pefcr-2025`

###### 聚丙烯压敏包装胶带（`polypropylene_tape_input`）

聚丙烯包装胶带与纸箱分开记录。

- 选定流：Polypropylene pressure-sensitive packaging tape
- 流属性/单位：Mass / kg
- 数量规则：包装产出的卷材领用量减退回量和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`afw-pefcr-2025`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定常规基本流投入。

#### 输出

##### 产品流

###### 合格服装成品（`finished_garment_output`）

本行为最终质量控制和净质量确定后放行的参考产品。

- 选定流：Men's or boys' suits, coats, jackets, trousers, shorts and the like, of textile fabric, not knitted or crocheted `039191b4-8865-4c2e-83b4-afd3f17435c3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格服装成品实测净质量，并归一化为 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`unsd-cpc-3-28231`

##### 废物流

###### 报废服装成品（`rejected_garment_output`）

不可修复的报废服装成品与返工品分开记录。

- 选定流：Rejected finished garment
- 流属性/单位：Mass / kg
- 数量规则：送往已声明去向的不可修复报废服装实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`afw-pefcr-2025`

###### 废瓦楞纤维板（`waste_corrugated_board_output`）

破损或未使用的瓦楞纤维板单独记录。

- 选定流：Waste corrugated fibreboard
- 流属性/单位：Mass / kg
- 数量规则：包装区瓦楞纸板废物称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`afw-pefcr-2025`

###### 废低密度聚乙烯薄膜（`waste_ldpe_film_output`）

破损或未使用的 LDPE 薄膜与纸质包装废物分开记录。

- 选定流：Waste low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：包装区 LDPE 薄膜废物称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`afw-pefcr-2025`

##### 基本流

###### 柴油燃烧化石二氧化碳（`finish_co2_fossil_output`）

记录前景边界内柴油燃烧的直接化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：烟气实测值，或采集柴油量乘已披露的适用辖区因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`ec-pef-method-2021`

###### 柴油燃烧氮氧化物（`finish_nox_output`）

柴油燃烧氮氧化物与二氧化碳分开记录。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：烟气实测值，或采集柴油量乘已披露的适用辖区因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`ec-pef-method-2021`

###### 柴油燃烧 2.5 微米以下颗粒物（`finish_pm25_output`）

柴油燃烧细颗粒物作为独立基本交换记录。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：烟气实测值，或采集柴油量乘已披露的适用辖区因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`ec-pef-method-2021`

###### 整理过程非甲烷挥发性有机物（`finish_nmvoc_output`）

记录本过程粘合、去渍、印花或整理产品产生的实测 NMVOC。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：烟道或工作场所排风实测值，或按已披露挥发分和捕集效率进行化学品质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`ec-pef-method-2021`

###### Refrigerant R-410A 向空气排放（`r410a_emission_output`）

按库存平衡记录 R-410A 向空气的损失；其他制冷剂应另设原子行。

- 选定流：Refrigerant R-410A to air
- 流属性/单位：Mass / kg
- 数量规则：R-410A 补充量减回收或转入量，并与设备服务记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格服装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finish_pack_batch_records`
- 来源：`ec-pef-method-2021`

## 7. 分配与共产品处理

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | independently_meterable_processes | 在可获得独立材料或公用工程记录时，通过细分裁剪、缝制、湿处理、整烫、检验、返工和包装避免分配。 | `ec-pef-method-2021`; `afw-pefcr-2025` |
| `allocation_02` | shared_materials | 使用款式特定领料、退料和库存变化记录分配面料、里料、衬料、袋布、缝纫线、紧固件、标签、粘合介质、化学品和包装；不得分配合并材料总量。 | `afw-pefcr-2025` |
| `allocation_03` | shared_electricity | 使用分表 kWh；没有分表时，仅按有记录的设备运行时间乘额定或实测负荷分配共享电量余项，并披露未分表份额。 | `afw-pefcr-2025` |
| `allocation_04` | shared_thermal_energy | 按过程热量表或实测批次需求分配蒸汽或热水；没有表计时采用有记录的设备时间和热负荷，并保持蒸汽与热水分开。 | `afw-pefcr-2025` |
| `allocation_05` | rework_and_rejects | 报告期保留返工和不可修复废品的负荷，并归一化到合格产出；废品质量和去向单独报告，不作为共产品。 | `afw-pefcr-2025` |
| `allocation_06` | cutting_offcuts | 按组成和去向报告纺织裁剪边角料废物。本前景数据集内不得给予替代产品抵扣；任何回收收益或负荷属于已声明下游处理模型。 | `ec-pef-method-2021`; `afw-pefcr-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_batch_records` | `fabric_preparation_cutting` | 面料、排料纸、电力、裁片、裁剪边角料 | BOM 领退料、称量单、裁剪计划、仪表或设备日志 | style_id; batch_id; component_id; material_specification; opening_stock; issued_mass; returned_mass; closing_stock; cut_panel_mass; offcut_mass; marker_paper_mass; kWh; operating_time | 将仓库、裁剪间、称量和仪表记录核对到同一批次 | kg; kWh; h | 逐批采集，按月汇总 | 至少连续 12 个月；较短生产活动采用完整活动期 | 生产已声明产品的全部裁剪线 | 按 row_id 汇总原子交换并除以合格裁片质量，保留批次差异 | 校准有效的衡器和仪表证书；签署的领退料记录；排料方案；批次平衡 |
| `cp_sewing_batch_records` | `sewing_assembly` | 裁片、线、紧固件、粘合带、电力、装配产出、缝制废物 | BOM 领退料、件数、称量单、仪表或设备日志、报废日志 | style_id; batch_id; component_id; count; mass_per_item; issued_mass; returned_mass; closing_stock; assembled_mass; rejected_mass; kWh; operating_time | 将每个 BOM 项和公用工程记录核对到合格装配产出 | kg; count; kWh; h | 逐批采集，按月汇总 | 至少连续 12 个月；较短生产活动采用完整活动期 | 生产已声明产品的全部缝制装配线 | 使用实测或供应商单件质量把计数换算为质量；按 row_id 汇总并除以合格装配质量 | BOM 版本；校准衡器；组件规格；仪表记录；废品和返工日志 |
| `cp_wet_processing_batch_records` | `garment_wet_processing` | 服装投入、水、热水、电力、天然气、化学品、蒸汽、服装产出、废水、污泥、燃烧排放 | 配方、投加日志、进排水表、公用工程表、燃料发票、批次称量、废水检测、污泥联单 | recipe_id; batch_id; input_mass; output_mass; water_mass; hot_water_energy; kWh; gas_MJ; chemical_name; concentration; dosed_mass; steam_mass; steam_pressure; wastewater_mass; sludge_mass; dry_solids; emission_factor_reference | 逐配方批次采集并核对水、材料、燃料和能源；仅从采集活动数据和已披露因子计算排放 | kg; kWh; MJ | 逐批采集；排放和污泥至少按月 | 至少连续 12 个月；较短生产活动采用完整活动期 | 全部现场湿处理及相关处理设备 | 按原子 row_id 汇总、扣除内部循环，并除以调湿后合格产出质量 | 校准仪表；批准配方；安全数据表；实验室报告；燃料发票；因子来源；处理联单 |
| `cp_finish_pack_batch_records` | `pressing_inspection_packaging` | 服装投入、电力、蒸汽、柴油、制冷剂、包装、成品、废品、包装废物、直接排放 | 转移记录、仪表、燃料和制冷剂库存、包装 BOM、计数、称量单、检验和废物日志 | style_id; batch_id; input_mass; conforming_output_mass; reject_mass; rework_mass; kWh; steam_energy; diesel_mass; refrigerant_opening; refrigerant_purchase; refrigerant_closing; refrigerant_recovered; packaging_component; component_count; mass_per_component; packaging_waste_mass; emission_factor_reference | 将投入、合格产出、废品、返工、包装、燃料和制冷剂服务记录核对到同一生产期间 | kg; count; kWh; MJ | 逐批采集，按月汇总 | 至少连续 12 个月；较短生产活动采用完整活动期 | 服务已声明产品的全部最终整理、检验、返工和包装作业 | 按 row_id 汇总每项原子交换并除以合格成品净质量；除非明确纳入，否则销售包装不计入产品净质量 | 校准衡器和仪表；检验记录；包装规格；燃料发票；制冷剂服务日志；废物联单；因子来源 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | reference normalisation | 归一化交换量 = 核对后的交换量 / 合格服装成品净质量。 | 原子交换量；合格产出质量 | 每 1 kg 参考产品的交换量 | `afw-pefcr-2025` |
| `calc_02` | material mass balance | 对每项材料身份：期初库存 + 接收量 - 期末库存 = 合格产品含量 + 可回收退回量 + 废物 + 已记录库存调整。未解释残差必须调查，不得隐藏。 | 按材料的库存、接收、退回、产品和废物质量 | 核对后的原子材料投入和残差 | `afw-pefcr-2025` |
| `calc_03` | counted component mass | 组件质量 = 安装数量 × 实测或供应商声明的单件质量，并与领退料核对。 | 数量；单件质量；领料；退料 | 某一种紧固件、标签或包装组件的 kg 数 | `afw-pefcr-2025` |
| `calc_04` | shared electricity | 分配 kWh = 共享表计 kWh × 过程设备负荷加权运行时间 / 全部设备负荷加权运行时间；报告共享表计份额。 | 表计 kWh；设备时间；额定或实测负荷 | 按原子行分配的过程电力 | `afw-pefcr-2025` |
| `calc_05` | purchased steam or hot water | 根据计量质量或体积及有记录的供回焓计算热能；蒸汽和热水保持为两个独立计算输出。 | 仪表读数；温度；压力；焓系数 | 外购蒸汽或热水 MJ | `afw-pefcr-2025` |
| `calc_06` | refrigerant loss | 制冷剂排放 = 期初库存 + 采购 - 期末库存 - 回收量 - 转入经验证设备库存的数量。 | 制冷剂库存和服务记录 | R-410A 排放 kg | `ec-pef-method-2021` |
| `calc_07` | direct combustion emission | 排放 = 采集燃料量 × 适用于具体燃料、燃烧技术、污染物和辖区的已披露因子；每种污染物单独建输出行。 | 燃料记录；因子引用；控制效率 | 某一种基本排放的 kg 数 | `ec-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01` | product identity | 数据集应识别服装类型、人群、款式、参考尺码或尺码组合、净质量、BOM 版本、纺织品组成和结构、整理、颜色、辅件组合、湿处理路线及包装纳入情况。 | 批准的产品规格、BOM、护理标签和批次记录 |
| `dq_02` | completeness | 覆盖全部必需过程以及构成核对批次的每项材料或能源交换；适用时明确计入废品、返工、裁剪边角料、包装废物、废水、污泥和直接排放。 | 过程图、物料与能源平衡、废物联单和例外日志 |
| `dq_03` | temporal representativeness | 除生产活动按季节开展外，至少使用连续 12 个月数据；较短生产活动采用完整活动期并披露季节性和停机期处理。 | 仪表日期、发票、生产日历和汇总工作簿 |
| `dq_04` | geographical and technological representativeness | 识别每个制造和外包地点、设备路线、电力基准、供热、处理路线及上游数据集地域。 | 工厂清单、供应商声明、仪表合同和数据集元数据 |
| `dq_05` | measurement quality | 衡器和仪表应在校准或检定有效期内；计算值应保留原始记录、公式、因子来源和审核人。 | 校准证书、原始日志、计算文件和批准记录 |
| `dq_06` | uncertainty and gaps | 报告数据覆盖、代理使用、分配份额、缺失 UUID、缺失表计、估算因子和敏感性相关选择；不得用无引用 AI 范围替代缺失前景量。 | 数据质量登记表和未解决事项清单 |

## 9. 校验规则

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference_flow | 参考产出应使用 UUID `039191b4-8865-4c2e-83b4-afd3f17435c3`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，并声明全部必需限定信息。 | `unsd-cpc-3-28231` |
| `validation_02` | product_scope | 拒绝针织或钩编服装、毛皮服装、女式或女童服装、衬衫或内衣、服饰附件、鞋类以及作为材料销售的面料数据集。 | `unsd-cpc-3-28231` |
| `validation_03` | atomic_inventory | 每张清单卡只能包含一个选定交换。拒绝合并的公用工程、燃料、化学品、包装、废物或排放标签，并要求每个实际交换单独成行。 | `afw-pefcr-2025` |
| `validation_04` | mass_balance | 要求款式和批次特定物料平衡。调查未解释残差，并验证合格产出、返工、废品、裁剪边角料和库存变化未重复计算。 | `afw-pefcr-2025` |
| `validation_05` | conditional_processes | 若发生成衣洗涤、染色、漂白、柔软、漂洗、印花、刺绣、涂层或干处理，要求对应过程、原子投入、废物和排放记录，或明确连接外包数据集。 | `afw-pefcr-2025`; `lindkvist-2024-circular-garment-lca` |
| `validation_06` | energy_and_fuels | 要求电力、外购蒸汽、热水、天然气和柴油相互独立，披露地点和供应基准，且不重复计算现场燃料与外购热。 | `ec-pef-method-2021`; `afw-pefcr-2025` |
| `validation_07` | packaging | 要求实际使用的 LDPE 袋、瓦楞纸箱、纸吊牌、聚丙烯胶带及其他包装分别作为原子行记录；验证包装是否排除在产品净质量之外。 | `afw-pefcr-2025` |
| `validation_08` | direct_emissions | 存在燃料燃烧、挥发性化学品、废水处理或制冷剂维护时，要求从采集活动数据计算或直接测量污染物特定排放，并披露因子来源和环境区室。 | `ec-pef-method-2021` |
| `validation_09` | data_quality | 缺失时间覆盖、工厂覆盖、校准证据、BOM 覆盖、分配基准、代理披露或废物去向时，完整性校验失败。 | `afw-pefcr-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 非针织或钩编男式或男童服装制造的门到门前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 产品类型、BOM、地域、技术、时间、边界和包装约定相容时，用于构建产品系统清单和生命周期模型 |
| excluded_use | 未补充规则时直接用于消费者服务比较、使用阶段声明、耐久性声明、针织服装、毛皮服装、其他人群或产品类别，以及作为面料生产代理 |
| required_metadata | PCR id 和版本；参考 UUID；服装类型；款式和尺码基准；净质量；完整 BOM；组件组成；路线；工厂地域；报告期；一体化和外包步骤；公用工程基准；分配；废物去向；包装约定 |
| required_quality_disclosure | 一手数据覆盖；仪表和衡器质量；时间、地域和技术代表性；分配份额；代理数据集；缺失 UUID；排放因子来源；质量平衡残差；不确定性和排除项 |
| update_trigger | 服装结构或 BOM、生产或湿处理路线、工厂或国家、公用工程供应、制冷剂、包装系统、分配方法、废物去向、参考流身份或治理证据发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-28231` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 28231, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/28231（检索日期 2026-08-13） | 产品类别边界和分类身份 |
| `afw-pefcr-2025` | standard | Technical Secretariat of the PEFCR for Apparel and Footwear, Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025, https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/（检索日期 2026-08-13） | 功能单位概念、BOM 和一手数据要求、制造过程分解、损耗、包装、电力、分配及数据质量 |
| `ec-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, http://data.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-13） | 系统边界、分配、电力、直接排放、数据集质量及下游生命周期建模规则 |
| `lindkvist-2024-circular-garment-lca` | literature | Lindkvist et al., Life cycle assessment of a circular textile value chain: the case of a garment made from chemically recycled cotton, The International Journal of Life Cycle Assessment, 2024, https://doi.org/10.1007/s11367-024-02346-2 | 包括裁剪、缝制、辅件安装、熨烫、印花/干燥、质量控制、包装及废物处理的服装生产顺序 |
| `daystar-2024-cotton-apparel-dlca` | literature | Daystar et al., Evaluating cotton apparel with dynamic life cycle assessment: the climate benefits of temporary biogenic carbon storage, BioResources 19(3), 2024, https://doi.org/10.15376/biores.19.3.5074-5095 | 机织裤制造边界、裁剪缝制过程、运输背景、消费者护理和寿命终结分离 |
