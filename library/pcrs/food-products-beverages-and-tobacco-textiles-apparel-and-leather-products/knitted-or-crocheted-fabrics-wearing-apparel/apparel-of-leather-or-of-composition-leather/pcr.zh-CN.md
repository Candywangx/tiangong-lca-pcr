---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-of-leather-or-of-composition-leather
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 皮革或再生皮革制服装

## 1. 范围与适用性

本 PCR 适用于以皮革或再生皮革为主体面料且属于 CPC 3.0 类别 28241 的成品服装之工厂门前景生产。覆盖材料接收、检验、排料和裁剪，皮革边缘与部件准备，缝制与装配，报告场址实施的服装级清洁或整理，熨压、检验，以及初级或运输包装。

购入的成品皮革、再生皮革、纺织衬里、衬布、缝线、闭合件、标签、胶粘剂、涂层、包装、电力、蒸汽、燃料及其他供应品作为产品投入，并连接上游数据集。皮张保存、鞣制、复鞣、染色、制革厂皮革整理、再生皮革制造、纺织品制造、使用、维修、零售和生命末期不属于前景边界。毛皮服装、皮革附件、鞋类、箱包、归入 CPC 28241 以外的防护用品，以及以纺织品或塑料为主体面料的服装不适用。

前景数据包应代表一个明确的产品规格、生产场址或场址组、技术路线和报告期。每种皮革动物种类、再生皮革路线、衬里、衬布、胶粘剂、涂层、闭合件、直接燃料、蒸汽和制冷剂交换均须声明产品特定适用性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-of-leather-or-of-composition-leather |
| classification_refs | CPC 3.0: 28241, Apparel of leather or of composition leather（精确） |
| covered_products | 主体面料为皮革或再生皮革且属于 CPC 28241 的成品夹克、大衣、长裤、裙装、连衣裙、背心及其他服装 |
| excluded_products | 毛皮服装；鞋类；手套、腰带、帽子、袋包、箱包及 CPC 28241 以外的其他皮革附件；以纺织品或塑料为主体面料的服装；作为材料销售的皮张和成品皮革 |
| representative_product | 一件合格的皮革或再生皮革制服装成品，以工厂门净质量表示 |
| production_route | 接收成品主体材料和部件；检验与排料；裁剪；边缘与部件准备；缝制与装配；条件适用的服装整理与熨压；检验与包装 |
| market_state | 制造场址门口、进入配送和使用前的质量合格成品服装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一件以皮革或再生皮革为主体面料的成品服装 |
| How much | 制造场址门口 1 kg 质量合格成品服装净质量 |
| How well | 符合已声明的款式、尺码、主体材料身份、适用时的再生皮革含量、衬里、闭合件、表面整理和工厂质量规格 |
| How long or cycle | 一个完成的生产批次及其声明报告期；不表示使用寿命主张 |
| reference_flow_link | 参考数量为声明的合格服装包装前或包装后净质量；单独供应的包装不计入 1 kg 产品质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Apparel of leather or of composition leather `971103ee-8ef5-4165-853c-6a3e98a692d8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 精确 CPC 3.0 代码 28241；服装类型与款式标识；皮革动物种类或再生皮革身份；主体材料质量分数；衬里和衬布身份；闭合件与装饰件身份；表面整理或涂层；尺码或尺码范围；包装计入约定；制造场址或场址组；生产技术；报告期；合格产品净质量 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有交换归一化至 1 kg 放行合格服装净质量；单独供应的包装不计入参考质量，并披露称量约定。 |
| `material_mass` | 皮革、再生皮革、纺织品、缝线、胶粘剂、涂层、包装、废物和制冷剂 | Mass | kg | 使用经校准的接收、领用、退回、废物和成品质量记录；面积、长度或件数记录仅可采用产品或批次特定的实测换算因子。 |
| `electricity_energy` | 电力 | Energy | kWh | 使用报告期场址电表、分表或设备电表记录，并与适用过程及共享服务分配核对。 |
| `steam_energy` | 购入饱和蒸汽 | Energy | MJ | 依据供应方压力/焓值数据和实测冷凝水回流，将计量蒸汽质量换算为交付能量；不得把蒸汽标为泛化的 Heat。 |
| `fuel_mass_or_energy` | 天然气、液化石油气和柴油 | Mass or net calorific energy | kg, m3, or MJ | 每种燃料保持为单独交换，记录密度和低位热值换算，并保留供应方或场址特定换算证据。 |
| `air_emission_mass` | 二氧化碳、氮氧化物、非甲烷挥发性有机物和 R-410A | Mass | kg | 优先使用直接监测；否则基于已采集活动数据和有记录的组成、碳、VOC 或制冷剂库存字段计算。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate_to_gate` | 前景制造 | 纳入生产参考产品所需的场内材料接收、裁剪、准备、装配、条件适用的服装整理、熨压、检验、包装、直接控制的公用工程、废物和直接排放。 | `unido-leather-garment-15189`; `unido-leather-garment-08631`; `ec-pef-method-2021` |
| `sb_upstream_leather` | 购入皮革与再生皮革 | 通过上游产品数据集建模鞣制、复鞣、染色、制革厂整理和再生皮革制造；除非这些操作确实发生于报告场址，否则不得在服装前景中重复。 | `jrc-tan-bref-2013`; `ec-pef-method-2021` |
| `sb_same_category_input` | 进入的部分完工 CPC 28241 服装 | 按接收质量和状态将进入的制品保留为可见产品投入，连接上游数据集，并仅采集报告场址追加的操作。 | `ec-pef-method-2021` |
| `sb_direct_emissions` | 场内燃烧、涂层、清洁和制冷 | 相应活动发生时，每种直接释放的基本流分别纳入；不得以购入能源负荷代替场址直接排放。 | `ec-pef-method-2021` |
| `sb_packaging` | 报告场址施加的包装 | 分别纳入施加于出厂产品的每种包装材料，并披露可重复使用运输包装按趟次还是按使用次数分配。 | `afw-pefcr-2025`; `ec-pef-method-2021` |
| `sb_exclusions` | 下游及资本活动 | 前景数据集排除配送、零售、消费者使用、护理、维修和生命末期；披露研究特定纳入的资本设备或基础设施。 | `afw-pefcr-2025`; `ec-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品皮革或再生皮革、衬里、衬布、闭合件、装饰件和工艺供应品已接收至服装制造场址 |
| starting_condition_role | 其先前生产由上游数据集表示的购入产品投入 |
| product_classification_scope | 仅限精确 CPC 3.0 代码 28241 的成品服装 |
| recursive_input_rule | 如接收部分完工的 CPC 28241 制品，按接收质量和状态保留为显式产品投入，连接其先前生产的上游数据集，并仅建模场址追加操作 |
| upstream_dataset_requirement | 成品皮革、再生皮革、纺织部件、化学品、公用工程、包装和废物处理应使用材料、动物种类、表面整理、技术、地理和时期具有代表性的上游数据集 |
| disclosure | 声明主体材料和动物种类、再生皮革比例、接收材料状态与表面整理、场址操作、外包操作、直接燃料、购入蒸汽、制冷剂、废物去向、包装约定、分配选择和排除阶段 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p1_material_cutting` | 材料检验、排料和裁剪 | required | 所有生产路线 | 将接收的主体材料和纺织材料转化为配套裁片组 | 1 kg 裁片输出 |
| `p2_component_preparation` | 皮革边缘与部件准备 | required | 仅当声明结构可证明不存在准备操作时记录为零 | 对裁片削薄、折边、粘合衬布、涂胶及其他装配前准备 | 1 kg 已准备部件输出 |
| `p3_garment_assembly` | 缝制、闭合件安装和服装装配 | required | 所有生产路线 | 装配主体、衬里、衬布、闭合件、标签和装饰件 | 1 kg 已装配服装输出 |
| `p4_finishing_pressing` | 服装清洁、整理和熨压 | conditional | 纳入场址实际实施或分配的每项清洁、涂层、直接燃料、蒸汽或制冷活动 | 生产具有声明表面整理的已检验未包装服装 | 1 kg 未包装成品服装输出 |
| `p5_packaging_release` | 最终检验、包装和放行 | required | 所有生产路线；包装行仅适用于实际供应的包装 | 放行参考产品并记录出厂包装 | 1 kg 合格参考产品 |

### 过程：材料检验、排料和裁剪（`p1_material_cutting`）

#### 输入

##### 产品流

###### 成品牛皮革片材（`p1_finished_bovine_leather`）

声明服装使用牛皮革时，该成品主体材料跨越边界；记录扣除有凭证退料后的领用质量。

- 选定流：Finished bovine leather sheet
- 流属性/单位：Mass / kg
- 数量规则：报告批次的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`jrc-tan-bref-2013`; `ec-pef-method-2021`

###### 成品绵羊皮革片材（`p1_finished_sheep_leather`）

绵羊皮革出现在产品物料清单时作为单独主体材料交换，记录批次特定领用质量。

- 选定流：Finished sheep leather sheet
- 流属性/单位：Mass / kg
- 数量规则：报告批次的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`jrc-tan-bref-2013`; `ec-pef-method-2021`

###### 成品山羊皮革片材（`p1_finished_goat_leather`）

山羊皮革构成声明主体的任何部分时单独记录，使用已识别材料批次的接收与领用记录。

- 选定流：Finished goat leather sheet
- 流属性/单位：Mass / kg
- 数量规则：报告批次的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`jrc-tan-bref-2013`; `ec-pef-method-2021`

###### 再生皮革片材（`p1_composition_leather`）

再生皮革作为独立的接收主体材料交换，不得与天然皮革合并，并保留供应方组成及粘结剂信息。

- 选定流：Composition leather sheet
- 流属性/单位：Mass / kg
- 数量规则：报告批次的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`ec-pef-method-2021`

###### 聚酯机织衬里织物（`p1_polyester_lining`）

用作服装衬里时，聚酯机织衬里织物跨越裁剪边界，使用实测卷材或裁剪批次换算证据记录领用质量。

- 选定流：Woven polyester lining fabric
- 流属性/单位：Mass / kg
- 数量规则：报告批次的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`unido-leather-garment-15189`; `ec-pef-method-2021`

###### 聚酯粘合衬布（`p1_polyester_interlining`）

聚酯粘合衬布在被裁剪或粘合进服装时作为单独材料交换，保留供应方材料身份及领用质量。

- 选定流：Polyester fusible interlining fabric
- 流属性/单位：Mass / kg
- 数量规则：报告批次的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`unido-leather-garment-15189`; `ec-pef-method-2021`

###### 裁剪用中压电网电力（`p1_cutting_electricity`）

排料、裁剪、粘合衬布、抽风、照明及已分配共享服务的电力跨越本过程边界，由电表或可审计设备分配取得数量。

- 选定流：Electricity, medium voltage, at grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或可审计分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_energy`
- 来源：`ec-pef-method-2021`

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 裁剪皮革主体部件组（`p1_cut_shell_components`）

配套的皮革或再生皮革主体裁片作为转入准备工序的实体输出，以批次称量或已核对物料平衡确定质量。

- 选定流：Cut leather shell component set
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量或物料平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_outputs`
- 来源：`unido-leather-garment-15189`

###### 裁剪聚酯衬里部件组（`p1_cut_lining_components`）

配套的聚酯衬里与衬布裁片作为一个已识别中间产品转移，记录实测或核对所得质量。

- 选定流：Cut polyester lining component set
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量或物料平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_outputs`
- 来源：`unido-leather-garment-15189`

##### 废物流

###### 牛皮革裁剪边角料（`p1_bovine_offcuts`）

裁剪牛皮革时，排料方案外的牛皮革片为单独废物输出，按材料批次和去向称量或核对。

- 选定流：Waste bovine leather cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_outputs`
- 来源：`unido-leather-garment-15189`; `ec-pef-method-2021`

###### 绵羊皮革裁剪边角料（`p1_sheep_offcuts`）

排料方案外的绵羊皮革片与其他皮革废物分开记录，并保留材料批次与处理去向联系。

- 选定流：Waste sheep leather cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_outputs`
- 来源：`unido-leather-garment-15189`; `ec-pef-method-2021`

###### 山羊皮革裁剪边角料（`p1_goat_offcuts`）

使用山羊皮革时，排料方案外的山羊皮革片为独立废物交换，记录实测质量和处理去向。

- 选定流：Waste goat leather cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_outputs`
- 来源：`unido-leather-garment-15189`; `ec-pef-method-2021`

###### 再生皮革裁剪边角料（`p1_composition_offcuts`）

排料方案外的再生皮革片因材料组成和处理路线不同而与天然皮革分开，记录实测质量。

- 选定流：Waste composition leather cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_outputs`
- 来源：`ec-pef-method-2021`

###### 聚酯纺织裁剪边角料（`p1_polyester_offcuts`）

衬里和衬布裁剪产生的聚酯废料作为一种具体聚合物纺织废物输出，与皮革残余物分别称量。

- 选定流：Waste polyester textile cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_outputs`
- 来源：`unido-leather-garment-15189`; `ec-pef-method-2021`

##### 基本流

本过程不规定直接基本流输出。

### 过程：皮革边缘与部件准备（`p2_component_preparation`）

#### 输入

##### 产品流

###### 准备用裁剪皮革主体部件组（`p2_cut_shell_input`）

配套主体裁片进入削薄、折边、粘合衬布和涂胶操作，记录裁剪工序转移质量。

- 选定流：Cut leather shell component set
- 流属性/单位：Mass / kg
- 数量规则：转移的中间产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已准备部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- 来源：`unido-leather-garment-08631`

###### 水性聚氨酯装配胶粘剂（`p2_waterborne_pu_adhesive`）

用于缝份翻折、折边或临时装配时，水性聚氨酯胶粘剂跨越边界，记录准确产品身份、固含量、VOC 分数和领用质量。

- 选定流：Waterborne polyurethane assembly adhesive
- 流属性/单位：Mass / kg
- 数量规则：扣除退回材料的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已准备部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- 来源：`unido-leather-garment-08631`; `ec-pef-method-2021`

###### 准备用中压电网电力（`p2_preparation_electricity`）

电力驱动削薄、粘合、折边、抽风和准备设备，采用分表用量或可审计设备分配。

- 选定流：Electricity, medium voltage, at grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或可审计分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已准备部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- 来源：`ec-pef-method-2021`

###### 部件准备用压缩空气（`p2_compressed_air`）

准备设备使用购入或集中产生的压缩空气时，该流跨越过程边界，记录计量体积与声明供气压力。

- 选定流：Compressed air at 7 bar
- 流属性/单位：Volume / m3
- 数量规则：计量体积或可审计设备计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已准备部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- 来源：`ec-pef-method-2021`

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 已准备皮革主体部件组（`p2_prepared_shell_output`）

经削薄、折边、粘合衬布或涂胶的主体部件组转入服装装配，其质量来自转移记录和准备工序物料平衡。

- 选定流：Prepared leather shell component set
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或物料平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已准备部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- 来源：`unido-leather-garment-08631`

##### 废物流

###### 皮革削薄碎屑（`p2_skiving_waste`）

边缘减薄产生的薄皮革碎屑作为独立皮革废物，以受控收集容器称量或核对。

- 选定流：Waste leather skiving shavings
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已准备部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- 来源：`unido-leather-garment-08631`; `ec-pef-method-2021`

###### 固化聚氨酯胶粘剂废物（`p2_cured_adhesive_waste`）

从设备或不合格部件移除的固化水性聚氨酯胶为单独化学废物，记录收集质量和处理去向。

- 选定流：Waste cured polyurethane adhesive
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已准备部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- 来源：`ec-pef-method-2021`

##### 基本流

###### 准备工序非甲烷挥发性有机物排放（`p2_nmvoc_air`）

已识别胶粘剂释放的 NMVOC 作为一种直接空气排放，基于领用量、VOC 分数、产品留存、回收废物和已验证治理计算。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：按 `cr_nmvoc_balance` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已准备部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- 来源：`ec-pef-method-2021`

### 过程：缝制、闭合件安装和服装装配（`p3_garment_assembly`）

#### 输入

##### 产品流

###### 装配用已准备皮革主体部件组（`p3_prepared_shell_input`）

已准备主体部件组进入缝制和最终服装装配，使用生产包转移记录确定质量。

- 选定流：Prepared leather shell component set
- 流属性/单位：Mass / kg
- 数量规则：转移的中间产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`unido-leather-garment-08631`

###### 装配用裁剪聚酯衬里部件组（`p3_cut_lining_input`）

配套衬里裁片作为一个已识别中间产品进入装配，按生产包记录转移质量。

- 选定流：Cut polyester lining component set
- 流属性/单位：Mass / kg
- 数量规则：转移的中间产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`unido-leather-garment-08631`

###### 聚酯缝纫线（`p3_polyester_thread`）

聚酯缝纫线作为声明的接缝材料跨越边界，由线轴领退质量或产品特定长度质量实测确定用量。

- 选定流：Polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：扣除退料的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`unido-leather-garment-08631`; `ec-pef-method-2021`

###### 黄铜服装拉链（`p3_brass_zipper`）

声明款式含黄铜拉链时，将其作为单独闭合件交换，使用与物料清单关联的采购或领用质量。

- 选定流：Brass garment zipper
- 流属性/单位：Mass / kg
- 数量规则：物料清单数量乘以实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_inputs`
- 来源：`afw-pefcr-2025`; `ec-pef-method-2021`

###### 黄铜按扣（`p3_brass_snap`）

使用黄铜按扣时与拉链及其他装饰件分开，记录件数和款式特定实测单件质量。

- 选定流：Brass snap fastener
- 流属性/单位：Mass / kg
- 数量规则：物料清单数量乘以实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_inputs`
- 来源：`afw-pefcr-2025`; `ec-pef-method-2021`

###### 聚酯机织服装标签（`p3_polyester_label`）

聚酯机织标签是随服装供应时记录的一种具体装饰投入，以标签件数和实测标签质量换算。

- 选定流：Woven polyester garment label
- 流属性/单位：Mass / kg
- 数量规则：物料清单数量乘以实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_inputs`
- 来源：`afw-pefcr-2025`; `ec-pef-method-2021`

###### 装配用中压电网电力（`p3_assembly_electricity`）

缝纫、包缝、附件安装、照明、抽风及已分配共享服务用电跨越装配边界，采用分表或可审计设备分配。

- 选定流：Electricity, medium voltage, at grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或可审计分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_inputs`
- 来源：`ec-pef-method-2021`

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 已装配皮革服装（`p3_assembled_garment`）

缝制主体、衬里、闭合件和标签形成转入整理与检验的服装，记录实测转移质量或按装配物料平衡计算。

- 选定流：Assembled leather garment
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或物料平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_outputs`
- 来源：`unido-leather-garment-08631`

##### 废物流

###### 聚酯缝纫线废物（`p3_thread_waste`）

线头、损坏缝线和不可回收线轴余料作为具体聚酯废物，由收集容器或线轴核对确定质量。

- 选定流：Waste polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或核对的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_outputs`
- 来源：`ec-pef-method-2021`

###### 不合格已装配皮革服装（`p3_rejected_assembly`）

整理前不合格且未在报告期内完全返工的服装为单独废物输出，记录质量、原因、返工状态和去向。

- 选定流：Waste rejected assembled leather garment
- 流属性/单位：Mass / kg
- 数量规则：离开过程的不合格品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已装配服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_outputs`
- 来源：`unido-leather-garment-15189`; `ec-pef-method-2021`

##### 基本流

本过程不规定直接基本流输出。

### 过程：服装清洁、整理和熨压（`p4_finishing_pressing`）

#### 输入

##### 产品流

###### 整理用已装配皮革服装（`p4_assembled_garment_input`）

已装配服装进入服装级清洁、可选涂层、熨压和最终检验，使用生产包转移实测质量。

- 选定流：Assembled leather garment
- 流属性/单位：Mass / kg
- 数量规则：转移的中间产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inputs`
- 来源：`unido-leather-garment-08631`

###### 整理用中压电网电力（`p4_finishing_electricity`）

电力用于熨压、通风、清洁设备、检验照明及已分配场址制冷，由电表或可审计分配取得数量。

- 选定流：Electricity, medium voltage, at grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或可审计分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utilities`
- 来源：`ec-pef-method-2021`

###### 熨压用购入饱和蒸汽（`p4_purchased_steam`）

向熨压或整理设备交付购入饱和蒸汽时单独记录，按计量蒸汽质量及供应方压力和焓值计算。

- 选定流：Purchased saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：由计量和供应方字段计算交付蒸汽能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_utilities`
- 来源：`ec-pef-method-2021`

###### 场内产汽用天然气（`p4_natural_gas`）

天然气在场内燃烧用于蒸汽或整理热时作为独立产品投入，记录供应方计量体积及场址特定能量换算。

- 选定流：Natural gas
- 流属性/单位：Net calorific energy / MJ
- 数量规则：由计量体积和有记录低位热值计算能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_utilities`
- 来源：`ec-pef-method-2021`

###### 场内熨压用液化石油气（`p4_lpg`）

熨压或整理设备燃烧液化石油气时单独记录，按实际 LPG 品级的交付和罐存记录取得数量。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：前景交付与库存核算消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utilities`
- 来源：`ec-pef-method-2021`

###### 场内产汽用柴油（`p4_diesel`）

柴油用于服务本过程的场内锅炉时作为单独产品投入，由校准储罐、交付和期初期末库存记录确定消耗。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：前景交付与库存核算消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utilities`
- 来源：`ec-pef-method-2021`

###### 水性聚氨酯服装面涂（`p4_waterborne_pu_topcoat`）

仅在已装配服装上施加时，将水性聚氨酯面涂作为具体化学投入，并保留产品身份、固含量、VOC 分数及领退质量。

- 选定流：Waterborne polyurethane garment topcoat
- 流属性/单位：Mass / kg
- 数量规则：扣除有凭证退料的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_chemicals`
- 来源：`ec-pef-method-2021`

###### 异丙醇清洁溶剂（`p4_isopropanol`）

异丙醇用于服装清洁或分配至产品的设备清洁时作为单独化学投入，记录采购、领用、退回和回收质量。

- 选定流：Isopropanol
- 流属性/单位：Mass / kg
- 数量规则：扣除退料的前景领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_chemicals`
- 来源：`ec-pef-method-2021`

###### R-410A 制冷剂补充量（`p4_r410a_makeup`）

向已分配制冷设备补充泄漏损失时，R-410A 作为产品投入跨越边界，采用维修和钢瓶库存记录。

- 选定流：Refrigerant R-410A
- 流属性/单位：Mass / kg
- 数量规则：分配至本过程的前景制冷剂补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utilities`
- 来源：`ec-pef-method-2021`

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 未包装皮革服装成品（`p4_finished_unpacked_output`）

经清洁、熨压和检验的服装作为未包装成品转入包装，按剔除不合格品后的实测质量记录。

- 选定流：Finished unpackaged leather apparel
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：`unido-leather-garment-08631`; `ec-pef-method-2021`

##### 废物流

###### 液态水性聚氨酯面涂废物（`p4_topcoat_waste`）

送往处理的未用或受污染水性聚氨酯面涂作为单独液态化学废物，记录实测质量和去向。

- 选定流：Waste liquid waterborne polyurethane topcoat
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：`ec-pef-method-2021`

###### 废异丙醇清洁溶剂（`p4_spent_isopropanol`）

回收后送往场外的异丙醇清洁液为独立废物交换，由容器和转移联单确定质量。

- 选定流：Waste spent isopropanol cleaning solvent
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：`ec-pef-method-2021`

##### 基本流

###### 场址燃烧化石二氧化碳（`p4_co2_fossil_air`）

声明的天然气、LPG 或柴油燃烧产生的化石二氧化碳作为一种直接空气排放，各燃料分别计算后才汇总同一物质流。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：按 `cr_fossil_co2` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_emissions`
- 来源：`ec-pef-method-2021`

###### 场址燃烧氮氧化物（`p4_nox_air`）

场址锅炉或熨压燃烧器的氮氧化物作为一种直接空气排放，使用烟道监测、现行许可测试或设备特定因子证据。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：实测或设备特定计算的排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_emissions`
- 来源：`ec-pef-method-2021`

###### 整理工序非甲烷挥发性有机物排放（`p4_nmvoc_air`）

声明面涂和异丙醇释放的 NMVOC 作为单一物质流，各化学品分别执行物料平衡，仅汇总所得 NMVOC 质量。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：按 `cr_nmvoc_balance` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_emissions`
- 来源：`ec-pef-method-2021`

###### R-410A 制冷剂空气排放（`p4_r410a_air`）

已分配制冷设备损失的 R-410A 作为一种直接空气排放，并与制冷剂产品投入分开，按库存核对计算泄漏。

- 选定流：Refrigerant R-410A to air
- 流属性/单位：Mass / kg
- 数量规则：按 `cr_refrigerant_loss` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装成品服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_emissions`
- 来源：`ec-pef-method-2021`

### 过程：最终检验、包装和放行（`p5_packaging_release`）

#### 输入

##### 产品流

###### 包装用未包装皮革服装成品（`p5_finished_unpacked_input`）

合格未包装服装进入最终放行与包装，使用整理工序的转移质量。

- 选定流：Finished unpackaged leather apparel
- 流属性/单位：Mass / kg
- 数量规则：转移的合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inputs`
- 来源：`ec-pef-method-2021`

###### 包装用中压电网电力（`p5_packaging_electricity`）

最终检验、标签打印、封箱及已分配包装区服务用电跨越本过程边界，采用计量或可审计分配用量。

- 选定流：Electricity, medium voltage, at grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或可审计分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inputs`
- 来源：`ec-pef-method-2021`

###### 纸制服装吊牌（`p5_paper_hangtag`）

纸制吊牌是随产品供应的一种包装或信息部件，记录件数和产品特定实测单件质量。

- 选定流：Paper garment hangtag
- 流属性/单位：Mass / kg
- 数量规则：件数乘以实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-2025`; `ec-pef-method-2021`

###### 低密度聚乙烯服装袋（`p5_ldpe_bag`）

供应服装袋时，将 LDPE 袋作为独立包装部件，采用采购规格和实测袋质量。

- 选定流：Low-density polyethylene garment bag
- 流属性/单位：Mass / kg
- 数量规则：袋数乘以实测袋质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-2025`; `ec-pef-method-2021`

###### 瓦楞纤维板运输箱（`p5_corrugated_box`）

瓦楞纤维板箱是独立运输包装投入，按实际装箱记录将实测箱质量分配至所装服装。

- 选定流：Corrugated fibreboard shipping box
- 流属性/单位：Mass / kg
- 数量规则：实测箱质量按实际装箱产品质量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-2025`; `ec-pef-method-2021`

###### 聚丙烯封箱胶带（`p5_pp_tape`）

封装出厂箱所用聚丙烯胶带与纸箱分开，由卷材领退记录或实测长度质量换算确定质量。

- 选定流：Polypropylene carton-sealing tape
- 流属性/单位：Mass / kg
- 数量规则：扣除退回量的胶带领用质量分配至包装产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-2025`; `ec-pef-method-2021`

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 放行的皮革或再生皮革制服装（`p5_reference_product`）

质量放行成品服装是跨越制造场址门口的参考产品，其净服装质量固定为 PCR 参考数量并排除单独供应包装。

- 选定流：Apparel of leather or of composition leather `971103ee-8ef5-4165-853c-6a3e98a692d8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格服装净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_reference_product_mass`
- 来源：

##### 废物流

###### 废纸制服装吊牌（`p5_paper_tag_waste`）

包装时废弃的错印或损坏纸吊牌为一种纸废物输出，记录实测或件数换算质量和去向。

- 选定流：Waste paper garment hangtags
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_outputs`
- 来源：`ec-pef-method-2021`

###### 废 LDPE 服装袋（`p5_ldpe_bag_waste`）

场址废弃的损坏或未用 LDPE 服装袋与其他塑料分开，按称量或袋数与实测质量核对。

- 选定流：Waste low-density polyethylene garment bags
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或件数换算的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_outputs`
- 来源：`ec-pef-method-2021`

###### 废瓦楞纤维板箱（`p5_corrugated_box_waste`）

装箱时废弃的损坏瓦楞纤维板箱为独立纸板废物交换，记录质量和去向。

- 选定流：Waste corrugated fibreboard shipping boxes
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_outputs`
- 来源：`ec-pef-method-2021`

###### 废聚丙烯封箱胶带（`p5_pp_tape_waste`）

废弃聚丙烯胶带和卷材余料作为一种聚合物特定废物输出，由收集或卷材核对确定质量。

- 选定流：Waste polypropylene carton-sealing tape
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或核对的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_outputs`
- 来源：`ec-pef-method-2021`

##### 基本流

本过程不规定直接基本流输出。

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | 可分离款式、批次、生产线和过程 | 分配前优先采用物理细分和直接计量；记录允许时保留款式和批次特定的材料、不合格品及包装。 | `ec-pef-method-2021`; `afw-pefcr-2025` |
| `al_shared_services` | 共享电力、蒸汽、压缩空气、制冷和设施服务 | 采用表示因果使用的有记录物理驱动因子，如计量设备能耗、机器小时、熨压时间或空调面积小时；存在物理驱动因子时不得按收入分配。 | `ec-pef-method-2021` |
| `al_mass_fallback` | 不可分离多产品操作 | 如无法细分及因果物理分配，则按合格产品净质量分配，并披露受影响交换、期间、产品和敏感性。 | `ec-pef-method-2021` |
| `al_rework_rejects` | 返工与不合格服装 | 场内返工的材料和能源保留在原产品批次；离开过程的不合格品作为废物，并在任何处理抵扣前将其生产负荷归于原产品。 | `ec-pef-method-2021` |
| `al_recycling` | 出售或回收的边角料和包装废物 | 分别报告废物输出及处理去向；除非明确声明下游建模约定，否则不得在前景单元过程中扣减假设回收抵扣。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_materials` | `p1_material_cutting` | 接收的主体、衬里和衬布投入 | 采购、接收、领用、退回和物料清单记录 | 供应方物料；批次；材料身份；动物种类；表面整理；组成；领用质量；退回质量；面积或长度；实测换算因子 | 将仓库领退与生产批次核对；按批次抽样验证换算 | kg | 每批，月度核对 | 有代表性的报告期，通常至少连续 12 个月或完整生产季 | 每个场址及声明场址组 | 按准确材料和批次合计净领用质量，再按 `cr_normalize` 归一化 | 采购发票；供应方规格；校准秤记录；批次核对 |
| `cp_cutting_energy` | `p1_material_cutting` | 裁剪电力 | 电表和设备运行记录 | 电表起止值；kWh；设备功率；运行时间；共享服务驱动因子；输出质量 | 读取分表或计算可审计设备分配 | kWh | 每月或更细 | 与产品输出同期 | 每个场址 | 合计适用 kWh，扣除有凭证非生产用量，按 `al_shared_services` 分配后归一化 | 电表校准；电费单；设备日志；分配表 |
| `cp_cutting_outputs` | `p1_material_cutting` | 裁片和具体裁剪废物 | 秤、生产包、废物容器和转移联单记录 | 输出质量；材料身份；废物质量；容器皮重；去向；批次 | 称量转移产品和每种分流废物，并核对投入产出 | kg | 每批并月度核对 | 与裁剪投入同期 | 每个场址 | 按准确输出或废物身份和去向合计，再归一化 | 校准秤；生产包票；废物票；物料平衡表 |
| `cp_preparation_inputs` | `p2_component_preparation` | 部件、胶粘剂、电力和压缩空气投入 | 转移、化学品领用、SDS、电表和运行记录 | 部件质量；胶粘剂产品；领退质量；固含量；VOC 分数；kWh；压缩空气 m3；压力 | 核对转移和化学品领用；计量或可审计分配公用工程 | kg, kWh, m3 | 每批及月度公用工程 | 与已准备输出同期 | 每个场址 | 各原子交换分别合计，分配共享公用工程后归一化 | 转移票；SDS；领用记录；电表日志；分配表 |
| `cp_preparation_outputs` | `p2_component_preparation` | 已准备部件、削薄废物、胶粘剂废物和 NMVOC | 转移、废物、化学品平衡和治理记录 | 已准备质量；废物质量；领用化学品；VOC 分数；留存质量；回收质量；治理捕集 | 称量输出，并从采集字段应用 `cr_nmvoc_balance` | kg | 每批并月度核对 | 与准备投入同期 | 每个场址 | 各具体输出分别合计并归一化 | 校准秤；废物票；SDS；治理记录；计算表 |
| `cp_assembly_inputs` | `p3_garment_assembly` | 已准备部件、缝线、闭合件、标签和电力 | 转移、物料清单、领退、件数、实测单件质量和电表记录 | 部件质量；物料身份；件数；单件质量；领退质量；kWh | 核对生产包和物料清单领用；计量或分配电力 | kg, item, kWh | 每批及月度公用工程 | 与装配输出同期 | 每个场址 | 用实测单件质量换算件数，保留每项交换后归一化 | 生产包票；物料清单；校准秤；电表日志 |
| `cp_assembly_outputs` | `p3_garment_assembly` | 已装配服装、缝线废物和不合格装配 | 转移、秤、不合格、返工和废物记录 | 输出质量；不合格质量；返工状态；缝线废物质量；去向 | 称量输出及分流废物，在报告期内闭合返工 | kg | 每批 | 与装配投入同期 | 每个场址 | 完成场内返工不计废物；按去向合计外排废物并归一化 | 转移票；不合格日志；校准秤；废物票 |
| `cp_finishing_inputs` | `p4_finishing_pressing` | 已装配服装投入 | 生产包转移记录 | 款式；批次；转移质量；时间 | 称量或核对生产包转移 | kg | 每批 | 与整理输出同期 | 每个场址 | 合计合格转移质量并归一化 | 生产包票；校准秤 |
| `cp_finishing_utilities` | `p4_finishing_pressing` | 电力、蒸汽、天然气、LPG、柴油和 R-410A 投入 | 电表、发票、储罐、钢瓶、维修、压力、焓值、密度和热值记录 | kWh；蒸汽质量；压力；冷凝水；燃气体积；LPG 质量；柴油质量；低位热值；制冷剂充注和补充 | 读取电表和库存，每项公用工程保持独立交换 | kWh, MJ, kg, m3 | 每月及每次维修事件 | 与整理输出同期 | 每个场址 | 执行适用换算，按 `al_shared_services` 分配后归一化 | 校准记录；发票；储罐日志；锅炉日志；制冷剂维修记录 |
| `cp_finishing_chemicals` | `p4_finishing_pressing` | 面涂和异丙醇投入 | 采购、领退、SDS、产品规格和回收记录 | 化学品身份；领退质量；固含量；VOC 分数；回收质量 | 将准确化学产品与生产批次核对 | kg | 每批并月度核对 | 与整理输出同期 | 每个场址 | 按化学品身份计算净领用量，再归一化 | SDS；供应方规格；领用记录；回收记录 |
| `cp_finishing_outputs` | `p4_finishing_pressing` | 成品和化学废物 | 秤、转移、废物容器和联单记录 | 合格质量；废物身份；废物质量；皮重；去向 | 称量成品输出和每种分流废物 | kg | 每批并月度核对 | 与整理投入同期 | 每个场址 | 各输出及废物去向分别合计后归一化 | 校准秤；转移票；废物联单 |
| `cp_finishing_emissions` | `p4_finishing_pressing` | CO2、NOx、NMVOC 和 R-410A 排放 | 燃料组成、烟道测试、SDS、化学品平衡、制冷剂库存和治理记录 | 燃料用量；碳分数；氧化分数；NOx 结果；化学品质量；VOC 分数；回收 VOC；制冷剂期初、补充、移出和期末量 | 可用时采用直接监测，否则将命名计算规则用于采集字段 | kg | 每月、每次烟道测试和每次制冷剂维修 | 与整理输出同期 | 每个场址每个排放源 | 各物质分别计算，仅汇总相同基本流后归一化 | 实验室/许可报告；供应方证书；SDS；制冷剂维修日志；签字计算表 |
| `cp_packaging_inputs` | `p5_packaging_release` | 成品、电力、吊牌、袋、箱和胶带投入 | 转移、装箱单、物料清单、领退、单件质量和电表记录 | 产品质量；包装身份；件数；单件质量；领退质量；kWh；每箱装载质量 | 将包装领用与实际装箱记录核对，并计量或分配电力 | kg, item, kWh | 每包装批并月度核对 | 与放行产品同期 | 每个场址 | 各包装部件分别保留，纸箱按实际所装产品质量分配后归一化 | 装箱单；采购规格；校准秤；电表日志 |
| `cp_packaging_outputs` | `p5_packaging_release` | 包装废物 | 废物、不合格件和联单记录 | 准确材料；件数；实测单件质量；废物质量；去向 | 称量或按件数换算每种分流包装废物 | kg | 每包装批并月度核对 | 与包装投入同期 | 每个场址 | 按材料和去向分别合计后归一化 | 校准秤；不合格日志；废物票 |
| `cp_reference_product_mass` | `p5_packaging_release` | 参考产品 | 最终检验、生产放行和校准秤记录 | 款式；批次；CPC；合格件数；服装净质量；包装质量；放行状态 | 服装与供应包装分别称量，并与生产放行核对 | kg | 每批 | 与全部前景记录同期 | 每个场址及声明场址组 | 仅合计合格放行服装净质量，归一化至准确 1 kg | 校准秤证书；放行记录；检验记录；质量核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_normalize` | 每项非参考清单交换 | 归一化量 = 报告期交换量 / 报告期合格放行服装净质量；保留原单位和换算证据 | 交换量；合格产品净质量 | 每 1 kg 参考产品的交换 | `ec-pef-method-2021` |
| `cr_material_balance` | 每个前景过程 | 投入质量 = 产品输出质量 + 各废物输出质量 + 实测质量损失或存量变化；调查未解决差额，不得塞入未指明废物流 | 实测材料投入、输出、废物、库存变化 | 过程物料平衡核对 | `ec-pef-method-2021` |
| `cr_item_to_mass` | 按件数记录的闭合件、标签和包装 | 质量 = 件数 × 产品或批次特定实测单件质量 | 件数；实测单件质量 | 已识别单一部件的 kg 数 | `afw-pefcr-2025`; `ec-pef-method-2021` |
| `cr_nmvoc_balance` | 一种已识别胶粘剂、面涂或溶剂 | 排放 NMVOC = 领用挥发物质量 − 退回挥发物质量 − 收集废物中的挥发物质量 − 已验证捕集或销毁的挥发物质量；每种化学品分别计算后才汇总相同 NMVOC | 领退化学品质量；供应方 VOC 分数；废物回收；治理 | 排入空气的 kg NMVOC | `ec-pef-method-2021` |
| `cr_fossil_co2` | 每种场内化石燃料 | 化石 CO2 = 燃料量 × 有记录碳含量 × 有记录氧化分数 × 44/12；按燃料计算后才汇总相同化石 CO2 | 燃料量；碳含量；氧化分数 | 排入空气的 kg 化石 CO2 | `ec-pef-method-2021` |
| `cr_refrigerant_loss` | R-410A 制冷系统 | R-410A 损失 = 期初库存 + 补充 − 移出 − 期末库存，并调整有记录库存转移；仅分配服务声明场址过程的设备 | 钢瓶和设备库存；维修补充和移出；分配驱动因子 | 排入空气的 kg R-410A | `ec-pef-method-2021` |
| `cr_steam_energy` | 购入饱和蒸汽 | 交付能量 = 计量蒸汽质量 ×（供应条件蒸汽焓 − 返回冷凝水焓）；保留供应方热力学依据 | 蒸汽质量；压力或温度；冷凝水回流及状态 | MJ 交付蒸汽 | `ec-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和主体投入 | 精确 CPC 28241、款式、服装类型、皮革动物种类或再生皮革身份、主体分数、表面整理、衬里、闭合件和包装约定须可追溯至物料清单和放行记录。 | 批准物料清单；供应方规格；生产放行记录；`un-cpc3-2023` |
| `dq_primary_data` | 前景制造 | 所有前景制造过程使用公司或供应方特定原始记录，并记录替代、估算和分配驱动因子。 | 电表、领用、转移、废物和生产记录；`afw-pefcr-2025`; `ec-pef-method-2021` |
| `dq_temporal` | 全部前景记录 | 使用一个一致报告期，通常至少连续 12 个月或完整生产季，并披露停产、启动、异常批次和覆盖缺口。 | 期间台账；生产日历；缺口记录 |
| `dq_mass_balance` | 材料与废物 | 核对皮革、再生皮革、纺织品、化学品、中间产品、最终产品及每种具体废物；调查而非掩盖无法解释的差额。 | 签字物料平衡表；库存记录；废物票 |
| `dq_meter_quality` | 电力、蒸汽、燃料、压缩空气和秤 | 记录仪表身份、校准或核查状态、读数频率、覆盖范围及共享仪表分配。 | 校准证书；仪表图；公用工程发票；分配表 |
| `dq_upstream_match` | 购入成品皮革与再生皮革 | 选择与材料类型、适用时的动物种类、表面整理、化学体系或粘结剂、地理、技术和时间相匹配的上游数据，并披露每项不匹配。 | 供应方声明；数据集元数据；不匹配记录；`jrc-tan-bref-2013` |
| `dq_completeness` | 过程清单 | 检查每个过程图行和每个原子交换的适用性；零值须有物料清单、仪表边界、维修记录或明确不存在声明支持。 | 适用性矩阵；源记录；完整性审查；`ec-pef-method-2021` |
| `dq_traceability` | 计算值 | 每项计算值保留原始字段、公式版本、单位换算、中间结果、审查人及源记录标识。 | 签字计算工作簿或可复现计算导出 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_identity` | 参考流 | 参考产品 UUID 应为 `971103ee-8ef5-4165-853c-6a3e98a692d8`，精确 CPC 应为 28241，流类型应为 Product，流属性应为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组应为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，单位应为 kg。 | `un-cpc3-2023` |
| `vr_reference_amount` | 参考产品 | 归一化后放行产品输出应准确等于 1 kg 合格服装净质量，排除并核对单独供应包装。 | `ec-pef-method-2021` |
| `vr_scope` | 产品适用性 | 数据集应证明主体面料为皮革或再生皮革且产品属于精确 CPC 28241；被排除服装或附件不得通过符合性检查。 | `un-cpc3-2023` |
| `vr_process_coverage` | 前景过程图 | 每个必需过程均应声明适用路线和记录；条件适用的整理、燃料、蒸汽、化学品、制冷剂和包装行应填报或由明确不适用证据支持。 | `unido-leather-garment-15189`; `unido-leather-garment-08631`; `ec-pef-method-2021` |
| `vr_atomic_flows` | 清单行 | 每行只含一个具体产品、废物或基本流；电力、蒸汽、每种燃料、R-410A、每种化学品、每个包装部件、每项废物和每种排放均保持分离。 | `ec-pef-method-2021` |
| `vr_uuid_policy` | 天工流身份 | 参考流 UUID 为强制项；任何非参考 UUID 仅在 hybrid 检索和 state-code-100 直读同时确认精确流、属性与单位身份后方可填写，否则保持为空。 |  |
| `vr_mass_balance` | 过程清单 | 每个过程物料平衡应在场址有记录测量不确定度内核对；无法解释的差额应形成发现项而不是未命名交换。 | `ec-pef-method-2021` |
| `vr_allocation` | 共享操作与废物 | 分配应遵循声明层级、使用可审计物理驱动因子，并披露所有后备质量分配和废物抵扣约定。 | `ec-pef-method-2021` |
| `vr_source_traceability` | 采集和计算数量 | 每项前景或计算数量应连接采集协议及留存原始证据；本候选 PCR 不允许无支持的推理估算范围。 | `afw-pefcr-2025`; `ec-pef-method-2021` |
| `vr_translation_alignment` | 双语 PCR | 英文和中文的 process id、row id、流名称、UUID、受控值、rule id、source id 及顺序应完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 产品、场址、路线、时期、材料和包装限定信息匹配时，用于精确 CPC 28241 的门到门皮革或再生皮革服装制造；可在更广生命周期模型中连接代表性上游与下游数据集 |
| excluded_use | 鞣制或成品皮革生产；毛皮服装；鞋类；皮革附件；以纺织品或塑料为主体面料的服装；忽略规格、耐用性或使用情景差异的产品比较 |
| required_metadata | 规范 PCR id；精确 CPC；参考流 UUID；服装类型与款式；主体材料与动物种类或再生皮革身份；材料分数；衬里、闭合件、装饰件、胶粘剂和表面整理身份；场址地理；技术路线；报告期；包装约定；分配方法；上游数据集身份 |
| required_quality_disclosure | 原始数据覆盖；仪表与秤质量；时间与场址代表性；物料平衡结果；条件流适用性；直接排放方法；上游不匹配；分配驱动因子；废物去向；未解决非参考 UUID |
| update_trigger | 材料或结构变化；新增表面整理、胶粘剂、燃料、制冷剂、包装或废物路线；过程迁址；供应方或上游数据集变化；分配变化；生产量或效率发生实质变化；报告期早于研究代表性要求 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2023` | official_guidance | United Nations Statistics Division, Classification of Individual Consumption According to Purpose and Central Product Classification, CPC Version 3.0 structure, exact class 28241, 2023, https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf（检索日期 2026-08-13） | 外部分类精确范围及 CPC 28241 身份校验 |
| `unido-leather-garment-15189` | extension_guidance | UNIDO, Pakistan: Leather Garment Design and Production, Technical Report 15189.en, https://downloads.unido.org/ot/48/09/4809768/15001-20000_15189.pdf（检索日期 2026-08-13） | 皮革服装直接工序拆分，包括裁剪、粘合衬布、制造、衬里裁剪、整理和熨压 |
| `unido-leather-garment-08631` | extension_guidance | UNIDO, Leather Research and Training Institute, Turkey: Design and Manufacture of Leather and Fur Garments, Technical Report 08631.en, https://downloads.unido.org/ot/46/90/4690567/00001-10000_08631.pdf（检索日期 2026-08-13） | 皮革服装直接操作，包括涂胶、折边、缝制、衬里装配、清洁和熨压 |
| `ec-pef-method-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期 2026-08-13） | 产品特定物料清单、公司特定制造数据、清单完整性、分配、计算、数据质量和透明度规则 |
| `afw-pefcr-2025` | standard | Technical Secretariat for Apparel and Footwear, Product Environmental Footprint Category Rules: Apparel and Footwear, version 3.1, 29 April 2025, https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/（检索日期 2026-08-13） | 服装产品规格、制造阶段原始数据要求、包装和下游使用语境 |
| `jrc-tan-bref-2013` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Tanning of Hides and Skins, EUR 26130, 2013, DOI 10.2788/13548, https://publications.jrc.ec.europa.eu/repository/handle/JRC83005（检索日期 2026-08-13） | 购入成品皮革与上游制革之间的边界；上游材料、水、能源、排放和废物数据集匹配 |
