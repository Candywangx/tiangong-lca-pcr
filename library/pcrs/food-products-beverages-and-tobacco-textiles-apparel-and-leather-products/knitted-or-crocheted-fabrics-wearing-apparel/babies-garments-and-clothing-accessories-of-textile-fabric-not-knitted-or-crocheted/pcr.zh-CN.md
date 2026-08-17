---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-of-textile-fabric-not-knitted-or-crocheted
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非针织或钩编纺织面料制婴儿服装及服装附件

## 1. 范围与适用性

本 PCR 规定以机织或其他非针织、非钩编纺织面料制造婴儿服装及服装附件的工厂前景数据包规则。涵盖婴儿衬衫、裤子、连衣裙、睡衣、外衣、围兜及类似纺织服装附件，前提是其主体结构并非针织或钩编。前景路线从服装厂接收成品面料、衬布和辅料开始，到合格、可销售的服装或附件在工厂大门交付为止。

本 PCR 涵盖排料与裁剪、缝制与装配、有条件的成衣水洗或其他后整理、检验、返工和销售包装。纤维、纱线、面料、辅料和包装的上游生产应连接供应商特定或具有代表性的上游数据集。工厂大门之后的配送、零售、消费者使用、使用阶段洗涤、维修、再使用和生命末期不在本前景边界内。针织或钩编婴儿服装、鞋类、玩具、尿布、防护服、以毡或非织造布为主体材料的服装，以及皮革、塑料或毛皮制品均不适用。

这是生产数据规则，并不意味着所有产品都使用下列每一种交换。每项适用的材料、辅料、公用工程、废物和排放均应作为独立原子交换记录。仅当数据集声明路线条件并保留该交换未发生的证据时，才可省略路线特定交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-of-textile-fabric-not-knitted-or-crocheted |
| classification_refs | CPC 3.0：28235，exact |
| covered_products | 主体材料为机织或其他非针织、非钩编纺织面料的婴儿服装及服装附件 |
| excluded_products | 针织或钩编婴儿服装；鞋类；玩具；尿布；防护服；毡或非织造布服装；皮革、塑料或毛皮服装；作为面料销售的上游织物 |
| representative_product | 用成品机织面料经裁剪与缝制生产，并声明辅料、后整理路线和包装的可销售婴儿服装 |
| production_route | 接收成品面料和辅料；排料与裁剪；缝制与装配；有条件的水洗、熨烫或干式后整理；检验；包装 |
| market_state | 服装厂大门处完成、合格且可销售的产品；包装与服装净质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应非针织或钩编纺织面料制成的婴儿服装或服装附件 |
| How much | 1 kg 合格产品净质量，不含销售和运输包装质量 |
| How well | 可销售且经质量检验，符合所声明款式、婴儿尺码、纤维组成、结构、后整理、辅料和法规要求的产品 |
| How long or cycle | 在工厂大门结束的一个完整生产批次或其他声明的代表性生产期 |
| reference_flow_link | reference_baby_garment_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Babies' garments and clothing accessories, of textile fabric, not knitted or crocheted `be638ef7-ac8c-4fde-a338-0535d81d5242` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装或附件类型；婴儿年龄和声明尺码，并在使用 68 cm 参考尺码时予以说明；单件净质量；1 kg 所代表的件数；纤维组成和质量份额；机织结构；里料、填充物和衬布；辅料和紧固件规格；染色和后整理状态；成衣水洗、印花或装饰路线；工厂地理位置；生产期；包装配置及各材料质量 |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景交换归一化至恰好 1 kg 合格服装或附件净产出；参考质量不含包装、废品和在制返工品。 |
| `material_mass` | 面料、衬布、缝纫线、辅料、洗涤剂、包装和固体废物 | Mass | kg | 使用经校准的秤、发票、领料或 BOM 记录，并核对同一生产期的发出、退回、成品纳入、拒收和废弃质量。 |
| `product_count` | 装配与缝制分配 | Number of items | item | 保留产出件数和单件净质量，以便将按件分配的装配负荷透明换算至 1 kg 参考流。 |
| `electricity_use` | 裁剪、装配、后整理和包装用电 | Energy | kWh | 优先采用过程分表；否则以有记录的设备功率和运行时间计算，并披露分配依据。 |
| `thermal_input` | 熨烫或湿式后整理所用外购蒸汽 | Mass | kg | 记录供应商计量或发票质量及蒸汽状态；不得将蒸汽与电力或燃料合并。 |
| `water_use` | 成衣水洗或湿式后整理 | Mass | kg | 计量供给的工艺用水；若测量体积，应采用有记录的密度和温度换算。 |
| `transported_packaging` | 销售和运输包装 | Mass | kg | 按每 1 kg 产品净质量分别报告各包装材料，不得将包装质量计入参考产品。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_operations` | 服装前景生产 | 纳入成品面料和辅料的接收与厂内搬运、裁剪、缝制、装配、适用的后整理、检验、返工、包装、直接公用工程、过程废物及工厂大门前的直接排放。 | `afw-pefcr-3-1` |
| `boundary_upstream_linkage` | 外购产品输入 | 保持每种外购面料、辅料、化学品、公用工程和包装材料可见，并连接组成、技术和地理位置适宜的上游数据集；不得将上游负荷吸收到无记录的汇总项。 | `ec-pef-2021-2279`; `afw-pefcr-3-1` |
| `boundary_conditional_finishing` | 水洗、印花、装饰和后整理 | 仅纳入报告工厂实际执行的后整理操作；明确声明未执行的操作，并为适用路线使用的每种附加化学品、载体、废物或直接排放增加独立原子交换。 | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `boundary_downstream_exclusion` | 配送与使用 | 本前景数据包不含工厂大门后的配送、零售、消费者护理、维修、再使用和生命末期；从摇篮到坟墓的研究应在本工厂生产数据集之外增加这些阶段。 | `afw-pefcr-3-1` |
| `boundary_same_category_recursion` | 同类别服装输入 | 作为输入的外购或转移婴儿服装应记录为显式产品交换并连接上游数据集；除非该单元过程由报告运营者控制，否则不得在本前景数据包中递归重建其生产。 | `ec-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品机织面料、衬布、缝制材料、辅料和包装材料以已声明组成、数量、供应商和上游数据集连接的状态到达报告服装厂。 |
| starting_condition_role | factory-gate foreground input |
| product_classification_scope | CPC 3.0 类别 28235 的婴儿服装及服装附件；分类是范围证据，不能替代产品限定信息。 |
| recursive_input_rule | 穿越边界的同类别服装或附件仍为带上游数据集的产品输入，除非由受控前景单元过程生产，否则不得递归展开。 |
| upstream_dataset_requirement | 优先采用供应商特定数据集；否则采用与材料形态、纤维组成、制造技术、地理位置和参考期相匹配且有记录的代表性数据集。 |
| disclosure | 声明 BOM 覆盖率、排除操作、分包步骤、路线特定后整理、工厂地理位置、分配依据、数据缺口、包装配置以及所有因等待精确天工身份确认而暂不填写的 UUID。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p1_cutting` | 排料与裁剪 | required | 将成品纺织面料裁成服装或附件部件。 | 将成品面料和衬布转化为受控裁片，同时记录材料特定的边角料。 | 每 1 kg 产品净质量对应的裁片 kg 和边角料 kg |
| `p2_assembly` | 缝制与装配 | required | 将裁片和适用辅料连接为装配制品。 | 连接部件和辅料，并记录按件的装配活动、线头损失和废品。 | 每 1 kg 产品净质量对应的装配件数和装配产品 kg |
| `p3_finishing_qc` | 有条件的后整理与质量控制 | conditional | 仅在报告场址实施时纳入成衣水洗、熨烫、印花、装饰、干燥或其他后整理；检验和质量控制始终纳入。 | 生产合格未包装产品并记录公用工程、废水、废品和返工。 | 每 1 kg 产品净质量对应的合格未包装产品 kg |
| `p4_packaging` | 销售包装与工厂大门交付 | required | 对合格产品贴标、包装并在工厂大门交付。 | 采用声明包装并产生参考流，同时保持包装质量独立。 | 1 kg 参考产品净质量 |

### 过程：排料与裁剪（`p1_cutting`）

#### 输入

##### 产品流

###### 机织棉布（`woven_cotton_fabric_input`）

存在时，记录用于主体、里料或袋布的实际机织棉布铺料质量。

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

###### 机织涤纶布（`woven_polyester_fabric_input`）

仅对已声明的机织涤纶面料部分记录本交换。

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

###### 机织粘胶纤维布（`woven_viscose_fabric_input`）

仅对所选流能够代表的粘胶、莫代尔或莱赛尔机织面料部分记录本交换。

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

###### 机织毛织物（`woven_wool_fabric_input`）

仅对已声明的机织毛织物部分记录本交换。

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

###### 机织亚麻布（`woven_flax_fabric_input`）

仅对所选流能够代表的亚麻纤维机织面料部分记录本交换。

- 选定流：Woven flax fabric
- 流属性/单位：Mass / kg
- 数量规则：计量的领用质量减去有记录的未用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 涤纶非织造热熔衬布（`polyester_nonwoven_interlining_input`）

记录用于所声明部件的涤纶热熔衬布质量；其他衬布组成应使用独立原子行。

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

记录供给排料、铺料、裁剪及直接相关抽风设备的电力。

- 选定流：Electricity supplied to cutting equipment
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程用电，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`ec-pef-2021-2279`; `afw-pefcr-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 服装裁片（`cut_components_output`）

转移至缝制与装配的内部裁片，依据部件质量记录计算。

- 选定流：Cut woven baby-garment components
- 流属性/单位：Mass / kg
- 数量规则：面料和衬布输入减去材料特定边角料及有记录的裁剪废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

##### 废物流

###### 棉布边角料（`cotton_offcuts_output`）

棉布边角料应与其他纤维组成分开，并记录去向。

- 选定流：Cotton woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的棉布边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 涤纶布边角料（`polyester_offcuts_output`）

涤纶布边角料应单独记录，并记录去向。

- 选定流：Polyester woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的涤纶布边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 粘胶纤维布边角料（`viscose_offcuts_output`）

使用粘胶纤维类材料时应单独记录其边角料。

- 选定流：Viscose woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的粘胶纤维布边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 毛织物边角料（`wool_offcuts_output`）

使用毛织物时应单独记录其边角料。

- 选定流：Wool woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的毛织物边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 亚麻布边角料（`flax_offcuts_output`）

使用亚麻布时应单独记录其边角料。

- 选定流：Flax woven fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的亚麻布边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`afw-pefcr-3-1`

###### 衬布边角料（`interlining_offcuts_output`）

热熔衬布边角料应与机织面料边角料分开。

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
### 过程：缝制与装配（`p2_assembly`）

#### 输入

##### 产品流

###### 服装裁片（`cut_components_input`）

由 `p1_cutting` 产生的裁片内部转移。

- 选定流：Cut woven baby-garment components
- 流属性/单位：Mass / kg
- 数量规则：等于转入装配的 `cut_components_output` 记录值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：`afw-pefcr-3-1`

###### 涤纶缝纫线（`polyester_sewing_thread_input`）

BOM 中存在时，记录发出并消耗的涤纶缝纫线。

- 选定流：Polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：计量的发出量减去未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 棉缝纫线（`cotton_sewing_thread_input`）

BOM 中存在时，单独记录棉缝纫线。

- 选定流：Cotton sewing thread
- 流属性/单位：Mass / kg
- 数量规则：计量的发出量减去未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 塑料按扣（`plastic_snap_fastener_input`）

使用时将塑料按扣作为独立部件记录。

- 选定流：Plastic snap fastener
- 流属性/单位：Mass / kg
- 数量规则：按扣计数乘以经核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 金属按扣（`metal_snap_fastener_input`）

金属按扣应与塑料按扣分开记录。

- 选定流：Metal snap fastener
- 流属性/单位：Mass / kg
- 数量规则：按扣计数乘以经核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 弹性窄幅织物（`elastic_narrow_fabric_input`）

使用时将松紧带或弹性窄幅织物作为一个已声明部件记录。

- 选定流：Elastic narrow fabric
- 流属性/单位：Mass / kg
- 数量规则：计量的发出长度乘以经核实的线质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 机织纺织标签（`woven_textile_label_input`）

缝入式纺织标签应与纸质吊牌及包装分开记录。

- 选定流：Woven textile label
- 流属性/单位：Mass / kg
- 数量规则：标签计数乘以经核实的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-3-1`

###### 装配用电（`assembly_electricity_input`）

记录缝纫、包缝、装扣、粘合及直接相关装配设备的用电。

- 选定流：Electricity supplied to garment assembly equipment
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程用电，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每装配件，并换算至 1 kg 产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`ec-pef-2021-2279`; `afw-pefcr-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已装配婴儿服装（`assembled_garment_output`）

最终后整理和质量放行前的缝制服装内部转移。

- 选定流：Assembled woven baby garment
- 流属性/单位：Mass / kg
- 数量规则：计量的合格装配产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`afw-pefcr-3-1`

##### 废物流

###### 缝纫线头（`thread_offcuts_output`）

线头和不可用缝纫线应与面料边角料分开记录。

- 选定流：Textile sewing thread offcuts
- 流属性/单位：Mass / kg
- 数量规则：计量的缝纫线废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`afw-pefcr-3-1`

###### 装配废品（`rejected_assembly_output`）

记录无法修复的装配废品；可修复制品仍为在制返工品，不属于废物。

- 选定流：Rejected woven baby garments
- 流属性/单位：Mass / kg
- 数量规则：计量的离开装配环节的不可修复废品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配服装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_and_rework`
- 来源：`afw-pefcr-3-1`

##### 基本流

### 过程：有条件的后整理与质量控制（`p3_finishing_qc`）

#### 输入

##### 产品流

###### 已装配婴儿服装（`assembled_garment_input`）

来自缝制与装配过程的内部转移。

- 选定流：Assembled woven baby garment
- 流属性/单位：Mass / kg
- 数量规则：等于转入后整理和检验的合格 `assembled_garment_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格未包装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_and_qc`
- 来源：`afw-pefcr-3-1`

###### 后整理用电（`finishing_electricity_input`）

记录实际运行的检验、熨烫、干燥及其他现场后整理设备用电。

- 选定流：Electricity supplied to garment finishing equipment
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程用电，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`ec-pef-2021-2279`; `afw-pefcr-3-1`

###### 外购蒸汽（`purchased_steam_input`）

用于熨烫、干燥或后整理时单独记录外购蒸汽；现场制汽应另建支持过程。

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

仅在现场实施成衣水洗或其他湿式后整理时记录供水。

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

仅在确实使用时记录该准确洗涤剂交换；其他湿式后整理化学品均需单独的原子行。

- 选定流：Non-ionic textile detergent
- 流属性/单位：Mass / kg
- 数量规则：计量的投入所声明成衣水洗操作的化学品量
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

###### 后整理完成的未包装婴儿服装（`finished_unpacked_garment_output`）

适用后整理、检验和已记录返工后，进入销售包装前的合格服装或附件。

- 选定流：Finished unpackaged woven baby garment
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

仅对现场湿式路线记录废水，并与固体残余物和废品分开。

- 选定流：Textile garment finishing wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量的排放废水质量或有记录的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 湿式后整理产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_and_qc`
- 来源：`eu-textiles-bat-2022-2508`

###### 后整理废品（`rejected_finishing_output`）

后整理或终检产生的不可修复废品应与返回过程的返工品分开记录。

- 选定流：Rejected finished woven baby garments
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

### 过程：销售包装与工厂大门交付（`p4_packaging`）

#### 输入

##### 产品流

###### 后整理完成的未包装婴儿服装（`finished_unpacked_garment_input`）

来自 `p3_finishing_qc` 的合格产品内部转移。

- 选定流：Finished unpackaged woven baby garment
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

使用时记录单件塑料袋或包裹膜的质量。

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
- 数量规则：纸箱数量乘以经核实的空箱质量，再按包装产品件数分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_release`
- 来源：`afw-pefcr-3-1`

###### 包装用电（`packaging_electricity_input`）

记录贴标、封口、折叠和包装设备用电。

- 选定流：Electricity supplied to garment packaging equipment
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程用电，或有记录的设备功率乘以运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`ec-pef-2021-2279`; `afw-pefcr-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考婴儿服装或附件（`reference_baby_garment_output`）

这是唯一参考产品输出，不含包装质量。

- 选定流：Babies' garments and clothing accessories, of textile fabric, not knitted or crocheted `be638ef7-ac8c-4fde-a338-0535d81d5242`
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

记录包装过程产生的薄膜裁边和废袋。

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

记录废弃或裁切的纸板吊牌材料。

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

记录纸箱准备过程产生的不可用瓦楞纸板。

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

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有前景过程 | 首先通过批次分离、分表计量、独立领料和直接称量废物避免分配。 | `iso-14044-2006`; `ec-pef-2021-2279` |
| `allocation_cutting_mass` | 裁剪与材料损失 | 按声明款式和生产批次的实测质量分配面料、衬布和裁剪损失；各废物输出保留材料组成。 | `afw-pefcr-3-1` |
| `allocation_assembly_unit` | 缝制与装配 | 按处理件数分配共享缝制和装配活动，再用实测件数和单件净质量换算至 1 kg 参考流。 | `afw-pefcr-3-1` |
| `allocation_finishing_mass` | 后整理 | 接受相同路线时按实测产品质量分配共享后整理负荷；水洗、印花、装饰或熨烫路线不同时应先分离产品。 | `afw-pefcr-3-1` |
| `allocation_shared_energy` | 共享设备和服务 | 优先采用过程分表；否则用有记录的设备运行时间乘以额定功率。只有在产品加工强度可证明等同时才采用质量吞吐量。 | `ec-pef-2021-2279` |
| `allocation_waste` | 边角料、废品和包装废料 | 在废物产生过程中报告其组成、质量和处理去向。除非下游研究方法明确要求并披露，不得在本前景清单中扣减避免产品信用。 | `iso-14044-2006`; `afw-pefcr-3-1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `p1_cutting`, `p2_assembly` | 面料、衬布、缝纫线和辅料 | BOM、领料、退料和采购记录 | 材料身份；组成；供应商；批次；发出质量或数量；未用退回；单件质量或线质量 | 将产品 BOM 与仓库领退料记录核对 | kg, item, m | 每批 | 代表性生产期 | 报告工厂全部相关材料库和生产线 | 按原子材料汇总净发出量，并按合格净产出归一化 | 批准的 BOM；供应商规格；经校准秤记录；库存核对 |
| `cp_cutting_mass_balance` | `p1_cutting` | 裁片和材料特定边角料 | 铺料、排料、裁片产出和废物记录 | 各材料输入质量；排料效率；合格裁片质量；边角料质量；裁剪废品质量 | 对同批次输入、合格裁片和分选边角料称量 | kg | 每批 | 代表性生产期 | 范围内全部裁剪线 | 将各材料输入与合格裁片、退料、边角料和废品核对 | 排料报告；经校准秤记录；废物票据；签署的批次核对表 |
| `cp_assembly_records` | `p2_assembly` | 装配产品、辅料和装配损失 | 生产线产出和材料消耗记录 | 件数；单件净质量；合格产出质量；线料发出与退回；紧固件数量；标签数量；废品 | 将生产线产出与部件和辅料记录核对 | kg, item | 每批或每班 | 代表性生产期 | 范围内全部装配线 | 按款式和路线汇总，再将按件活动换算为 1 kg 净产出 | 生产线日志；BOM；质量处置；经校准秤记录 |
| `cp_process_electricity` | `p1_cutting`, `p2_assembly`, `p3_finishing_qc`, `p4_packaging` | 过程用电 | 电表、设备和运行时间记录 | 电表起止读数；设备标识；额定功率；运行时间；处理产品；停机时间 | 直接分表计量或以功率乘运行时间计算 | kWh | 批次、班次或月度计量周期 | 代表性生产期 | 全部纳入设备和共享服务 | 扣除有记录的非生产负荷，并按获批过程规则分配 | 电表证书；账单核对；设备铭牌；运行日志 |
| `cp_finishing_and_qc` | `p3_finishing_qc` | 后整理输入、输出和废水 | 配方、计量、批次、质量和排放记录 | 路线；输入质量；电力；蒸汽；水；每种化学品；产出质量；废水；返工；废品 | 仅对实际执行的操作采集，并核对各湿式批次 | kg, kWh | 每个后整理批次 | 代表性生产期 | 全部纳入的后整理和检验操作 | 按后整理路线分别汇总后再归一化 | 批次配方；计量记录；化学品领用；排放记录；检验报告 |
| `cp_quality_and_rework` | `p2_assembly`, `p3_finishing_qc` | 废品和返工 | 缺陷和处置记录 | 缺陷代码；件数；质量；修复动作；重新进入的过程；最终处置 | 跟踪每件不合格品至返工完成或作为废物离开 | item, kg | 每批 | 代表性生产期 | 全部纳入的装配和后整理线 | 返工只计一次，只有已恢复返工品不计入废物 | 质量报告；返工流转单；废物转移票据 |
| `cp_packaging_and_release` | `p4_packaging` | 包装和参考产出 | 包装规格、领用、计数、质量和放行记录 | 产品件数；净质量；包装类型；件数；单件质量；包装废料；放行质量 | 核对包装材料领用与包装产品放行 | kg, item | 每批 | 代表性生产期 | 全部包装线和工厂大门交付 | 组合纸箱按内装产品件数分配，包装与 1 kg 产品净质量分别归一化 | 包装规格；秤记录；仓库放行；废料记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景交换 | 归一化交换量 = 生产期交换量 / 合格产品净质量；将参考输出设为恰好 1 kg。 | 生产期交换量；放行的合格产品净质量 | 每 1 kg 产品净质量的交换量 | `ec-pef-2021-2279` |
| `calc_cutting_mass_balance` | 每种面料和衬布 | 净发出输入 = 裁片质量 + 材料特定边角料 + 裁剪废品；调查任何残差，不得隐藏于汇总项。 | 发出质量；退回质量；裁片质量；边角料质量；废品质量 | 经核对的材料流和残差 | `afw-pefcr-3-1` |
| `calc_assembly_loss` | 完整产品 BOM | 装配损失质量 = 单件产品 BOM 材料发出质量 − 合格产品净质量，并针对有记录的未用退回和已恢复返工品调整。 | BOM 质量；退回质量；净产出质量；已恢复返工品 | 各材料装配损失 | `afw-pefcr-3-1` |
| `calc_unit_to_mass` | 缝制与装配 | 每 kg 负荷 = 装配总负荷 / 合格件数 / 每件合格产品实测净质量。 | 装配负荷；合格件数；单件净质量 | 每 1 kg 参考流的装配负荷 | `afw-pefcr-3-1` |
| `calc_shared_electricity` | 共享用电设备 | 分配电量 = 总计量电量 × 产品特定设备运行时间 × 额定功率 / 各运行时间与额定功率乘积之和。 | 电表总量；设备时间；额定功率 | 分配至产品的 kWh | `ec-pef-2021-2279` |
| `calc_packaging_mass` | 组合包装 | 每 kg 包装量 = 包装件数 × 经核实的单件质量 / 内装产品净质量。 | 件数；单件质量；内装产品净质量 | 每 kg 产品净质量对应的包装 kg | `afw-pefcr-3-1` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dqr_identity` | 参考产品 | 匹配准确的 CPC 28235 产品身份，并保留已核实的天工产品流、Mass 和 Units of mass UUID，不记录数据集版本。 | 天工 state-100 回读；产品规格；`un-cpc-3-2025` |
| `dqr_bom_coverage` | 材料清单 | 至少为 BOM 质量的 95% 提供原始数据，并在存在时覆盖 100% 的主要面料、里料、填充物、金属件和电子件；披露每项省略余量。 | 批准的 BOM；供应商规格；`afw-pefcr-3-1` |
| `dqr_route` | 过程覆盖 | 识别每项受控的裁剪、装配、后整理、检验、返工和包装操作及每项分包操作；不得将单一步骤数据集视为覆盖未记录步骤。 | 过程图；供应商声明；`afw-pefcr-3-1` |
| `dqr_temporal` | 所有前景记录 | 采用具有代表性的当前生产期；说明季节、款式、尺码和生产线组合的代表性以及任何外推。 | 带日期的生产、计量、库存和质量记录；`ec-pef-2021-2279` |
| `dqr_measurement` | 质量、件数、电力、蒸汽和水 | 对每个测量量保留校准状态、读数周期、单位换算和核对证据。 | 校准证书；电表日志；秤记录；发票核对 |
| `dqr_waste_destination` | 所有废物输出 | 分别记录每种原子废物的组成、质量、适用时的危险属性、处理去向和转移证据。 | 废物票据；承包商收据；内部处置记录；`afw-pefcr-3-1` |
| `dqr_wet_finishing` | 有条件的湿式操作 | 保留配方、水平衡、每种化学品领用、废水量、排放路线和监测依据；未进行湿式后整理时声明不适用。 | 批次配方；计量记录；排放记录；`eu-textiles-bat-2022-2508` |
| `dqr_uuid` | 非参考交换 | 在确认一个与确切材料、地理位置、技术、处理路线或基本流环境舱相符的真实天工流之前，UUID 保持为空；不得借用相近身份。 | manifest 身份审查；解析后直接 state-100 回读 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 输出 UUID 应解析为公开 Product flow，其名称和 CPC 路径与 28235 完全匹配，定量参考为 Mass；参考输出应等于 1 kg 产品净质量。 | `un-cpc-3-2025` |
| `validate_scope` | 产品和边界 | 产品应为非针织或钩编纺织面料制婴儿服装或服装附件，且数据集止于声明的服装厂大门。 | `un-cpc-3-2025`; `afw-pefcr-3-1` |
| `validate_qualifiers` | 参考元数据 | 应声明服装类型、婴儿尺码或年龄、单件净质量、件数、纤维组成、结构、辅料、后整理路线、地理位置、生产期和包装。 | `afw-pefcr-3-1` |
| `validate_bom` | 材料清单 | BOM 覆盖率应达到声明阈值，每项纳入部件应有一个原子材料行，省略质量应量化并披露。 | `ec-pef-2021-2279`; `afw-pefcr-3-1` |
| `validate_mass_balance` | 裁剪、装配、后整理和包装 | 同一生产期的输入、合格产出、退料、返工、边角料、废品和废料质量应在声明的测量容差内核对一致。 | `afw-pefcr-3-1` |
| `validate_energy` | 过程公用工程 | 各过程用电应分开或从共享计量透明分配；蒸汽、水及任何燃料均应保持独立原子交换。 | `ec-pef-2021-2279`; `afw-pefcr-3-1` |
| `validate_conditional_finishing` | 后整理 | 湿式或干式后整理应具有完整的原子输入、废物和排放记录，或明确声明未发生并提供路线证据。 | `afw-pefcr-3-1`; `eu-textiles-bat-2022-2508` |
| `validate_atomic_flows` | 过程清单 | 选定流不得为集合、载体清单、选择说明或组合废物；任何额外 BOM 材料、化学品、包装部件、废物或排放均应增加为独立行。 | `ec-pef-2021-2279` |
| `validate_allocation` | 共享过程 | 分配应遵循声明的层级和依据；按件分配的缝制和装配应使用实测件数和单件净质量换算。 | `iso-14044-2006`; `afw-pefcr-3-1` |
| `validate_data_quality` | 前景记录 | 记录应当前、具有代表性、可追溯，并由校准、库存、计量、质量和废物证据支持；应披露每项缺口和暂不填写的 UUID。 | `ec-pef-2021-2279`; `afw-pefcr-3-1` |

## 10. 发布数据集规范

| 字段 | 值 |
| --- | --- |
| dataset_role | 非针织、非钩编婴儿服装及服装附件的产品特定或代表性前景生产数据集 |
| downstream_use | 当身份、地理位置、技术、时间和后整理路线相匹配时，可作为服装产品系统的次级或背景数据集 |
| allowed_use | 工厂大门清单构建、供应商数据交换、热点分析，以及在声明限制条件下向下游 process 或 lifecyclemodel 投影 |
| excluded_use | 直接替代针织婴儿服装、面料制造、防护服、消费者使用、洗涤、维修或生命末期；无支持的比较声明；静默使用未解析 UUID |
| required_metadata | canonical PCR id；产品流 UUID；服装类型；尺码或年龄；单件净质量和件数；完整纤维与部件 BOM；结构和后整理；过程地理位置和生产期；分包步骤；分配；包装；废物去向 |
| required_quality_disclosure | BOM 覆盖率；过程覆盖率；来源和计量出处；校准；代表性；分配方法；质量平衡残差；数据缺口；UUID 审查状态；湿式后整理适用性 |
| update_trigger | 产品范围、BOM、结构、后整理路线、工厂技术、地理位置、分配、参考身份、证据或适用服装环境足迹规则发生重大变化 |

## 11. 数据来源

| 来源编号 | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Explanatory Notes》，2025 年 6 月 30 日，类别 28235。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品类别范围和准确分类身份 |
| `ec-pef-2021-2279` | official_guidance | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279。http://data.europa.eu/eli/reco/2021/2279/oj | 产品特定 BOM 和制造数据、完整性、一致性、分配及数据质量原则 |
| `afw-pefcr-3-1` | standard | 技术秘书处，《Product Environmental Footprint Category Rules: Apparel and Footwear》，Version 3.1，2025 年 4 月 29 日。https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ | 服装边界和过程分解、BOM 覆盖、裁剪与装配损失、制造废物、按件与按质量分配、原始数据要求 |
| `eu-textiles-bat-2022-2508` | official_guidance | 欧盟委员会实施决定（EU）2022/2508，纺织工业 BAT 结论。http://data.europa.eu/eli/dec_impl/2022/2508/oj | 有条件的湿式后整理、化学品、水、废水和监测要求 |
| `iso-14044-2006` | standard | ISO 14044:2006，《环境管理 生命周期评价 要求与指南》。https://www.iso.org/standard/38498.html | 目标与范围、清单、分配、报告和评审原则 |
