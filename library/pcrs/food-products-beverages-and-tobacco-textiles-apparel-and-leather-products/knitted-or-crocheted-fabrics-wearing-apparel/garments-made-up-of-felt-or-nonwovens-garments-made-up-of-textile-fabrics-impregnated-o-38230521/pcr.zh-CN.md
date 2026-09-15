---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.garments-made-up-of-felt-or-nonwovens-garments-made-up-of-textile-fabrics-impregnated-o-38230521
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 毡或非织造布制服装；塑料、橡胶或其他材料浸渍或涂覆的纺织物制服装

## 1. 范围与适用性

本 PCR 适用于以毡、非织造布，或经聚合物或橡胶材料浸渍、涂覆、覆盖或层压的纺织基材作为主体外壳或功能面板的服装前景数据包。边界覆盖制造工厂门口的合格服装，包括服装材料裁剪、产品装配、条件性接缝屏障处理、最终检验和运输包装。

申报产品可以是可重复使用或有限次使用产品，也可以具有防护、工业、职业或普通服装用途。数据包应申报服装设计、预期用途、使用寿命类别、主要材料构造、基材纤维、涂层或膜层化学组成、面密度、连接方法、接缝处理、闭合件、尺码基准、制造场址及包装配置。CPC 身份本身不构成防护性能声明；此类声明还须有适用的产品规范和试验证据。

纤维、毡、非织造布卷材、纺织基材、涂层、浸渍层、膜、层压树脂及外购部件的生产由上游产品数据集表示。分销、使用、清洗、维修和寿命终止阶段不属于本门到门前景边界。若报告场址实施涂覆、浸渍、层压、湿整理或溶剂处理，应另设材料转化过程，分别记录其化学品、公用工程、废物和排放；不得将这些操作隐含在服装装配清单中。

## 2. 产品类别标识

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.garments-made-up-of-felt-or-nonwovens-garments-made-up-of-textile-fabrics-impregnated-o-38230521 |
| classification_refs | CPC 3.0: 28250 (exact) |
| covered_products | 毡制服装；非织造布制服装；经塑料、橡胶或另一种已申报材料浸渍、涂覆、覆盖或层压的纺织物制服装 |
| excluded_products | 未转化的毡、非织造布或涂层纺织物卷材或片材；归入其他类别的普通机织或针织服装；不具备合格纺织构造的纯塑料服装；帽类；鞋类；非服装技术纺织制品 |
| representative_product | 采用一套已申报 CPC 28250 材料系统制造的一件合格包装服装 |
| production_route | 接收已转化材料与部件 → 检验/裁剪 → 缝制、超声焊接或胶黏装配 → 条件性接缝屏障处理 → 最终检验 → 包装 |
| market_state | 制造工厂门口的合格包装成品服装 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供一件主体材料构造属于 CPC 28250 且符合已申报设计和性能要求的合格服装 |
| How much | 1 kg 合格包装成品服装 |
| How well | 符合已申报 BOM、材料构造、尺寸、连接路线、接缝/闭合件规范、预期用途要求和最终检验准则 |
| How long or cycle | 工厂门口一个制造产出周期；申报使用寿命或有限次使用状态，但下游使用不属于本前景数据包 |
| reference_flow_link | `finished_packaged_garment_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Garments made up of felt or nonwovens; garments made up of textile fabrics impregnated or coated with plastics, rubber or other materials `3c972aa8-6aa5-4724-8a61-694aef1b09fe` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 服装类型与尺码基准；可重复使用或有限次使用状态；毡/非织造布/涂层或层压材料类别；基材纤维与构造；涂层/膜/橡胶化学组成；面密度；适用时的涂层或膜层质量；连接技术；接缝配置与接缝带身份；闭合件与附件；预期用途与性能声明；制造场址；合格产出和包装质量基准 |

构建前景数据包时，`Required qualifiers` 中列出的项目必须在数据集元数据、过程说明、参考流注释、产品描述或等效数据包字段中申报。缺少任何必需限定条件，均使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景交换归一化为在工厂门口实测的恰好 1 kg 合格包装成品服装。 |
| `accepted_output_basis` | 合格服装产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 从分母中排除不合格服装，并在归一化前将其记录为单独废物产出。 |
| `area_to_mass_conversion` | 按面积领用或记录的材料 | Mass | kg | 用批次特定的实测面密度将面积换算为质量；保留面积、面密度测量、批次身份和换算计算。 |
| `component_mass_conversion` | 按件计数的紧固件、标签及其他部件 | Mass | kg | 使用同一部件规格和批次的实测单件平均质量将数量换算为质量，并保留样本数、秤量记录和部件身份。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 已转化的毡、非织造布或化学组成明确的涂层/层压纺织物，以及外购服装部件，连同供应商身份、批次、质量和 BOM 记录进入服装制造场址。 |
| starting_condition_role | 服装制造的上游产品输入 |
| product_classification_scope | 成品产出必须符合 CPC 28250 的语义范围；材料卷材、片材及不属于服装的技术纺织制品不属于参考产品。 |
| recursive_input_rule | 外购未完成 CPC 28250 服装进入委托整理或包装时，将其记录为一个单独识别的产品输入；其上游服装制造由不重叠的上游数据集表示，不在接收过程中重复创建。 |
| upstream_dataset_requirement | 对每种毡、非织造布、涂层/层压纺织物、部件、胶黏剂、接缝带和包装材料，使用成分和技术特定的上游数据集。 |
| disclosure | 申报每个制造场址、外包步骤、材料构造、涂层化学组成、连接路线、不合格产出、废物去向、公用工程仪表分配，以及任何场内涂覆、层压、湿处理或溶剂工序。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_received_converted_material` | foreground_start | 当前景系统在服装制造场址接收已转化片材或卷材以及外购部件时开始。 | `afw-pefcr-3-1-2025`; `eu-textile-bat-2022` |
| `boundary_separate_upstream_material_conversion` | upstream_materials | 用与已申报材料构造匹配的独立上游数据集表示纤维生产、毡/非织造布成形、纺织物涂覆、浸渍和层压。 | `iso-9092-2026`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025` |
| `boundary_add_on_site_converting_process` | on_site_material_conversion | 报告场址实施涂覆、层压、湿整理或溶剂处理时，为每项操作及其具体输入、废物和排放增加独立过程清单；不得将其负荷隐含分配给服装装配。 | `eu-textile-bat-2022` |
| `boundary_end_at_packaged_factory_gate` | foreground_end | 当前景系统在制造工厂门口计量并放行合格包装服装时结束。 | `afw-pefcr-3-1-2025` |
| `boundary_exclude_downstream_stages` | downstream_stages | 从本门到门数据包中排除分销、使用、清洗、维修和寿命终止阶段，并披露下游模型需要其他数据集。 | `afw-pefcr-3-1-2025` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | 材料检验与裁剪 | required | 纳入所有领用至裁剪的主要服装材料及每种单独计量的边角料产出。 | 用接收的已转化材料制备合格服装裁片。 | 每 1 kg 合格包装成品服装 |
| `garment_assembly` | 服装连接与部件装配 | required | 纳入已申报的缝制、超声焊接、热熔黏合及部件安装活动；实际路线不存在的行，只有在 BOM 和工艺包提供证据时才记零。 | 将裁片和部件连接成一件已装配服装。 | 每 1 kg 合格包装成品服装 |
| `seam_barrier_treatment` | 接缝屏障处理 | conditional | 使用接缝带或等效装配后屏障处理时纳入；没有独立贴带步骤的超声焊接仍归入 `garment_assembly`。 | 应用已申报的接缝屏障构造。 | 每 1 kg 合格包装成品服装 |
| `final_inspection` | 最终检验与接收 | required | 纳入产品规定的尺寸、外观、闭合件、接缝和声明性能接收检查。 | 将合格未包装服装与不合格产出分开。 | 每 1 kg 合格包装成品服装 |
| `packaging` | 产品包装 | required | 纳入离厂运输包装，以及分配给该货运批次的可重复使用运输资产。 | 在工厂门口交付合格 CPC 28250 参考产品。 | 每 1 kg 合格包装成品服装 |

### 过程：材料检验与裁剪（`material_cutting`）

#### 输入

##### 产品流

###### 羊毛毡片材输入（`wool_felt_input`）

本卡单独记录“羊毛毡片材”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Wool felt sheet
- 流属性 / 单位：Mass / kg
- 数量规则：实测投入裁剪批次的材料质量，减去退回受控库存的未用材料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`un-cpc-3-0-2025`; `afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### 针刺聚酯毡片材输入（`polyester_felt_input`）

本卡单独记录“针刺聚酯毡片材”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Needle-punched polyester felt sheet
- 流属性 / 单位：Mass / kg
- 数量规则：实测投入裁剪批次的材料质量，减去退回受控库存的未用材料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`un-cpc-3-0-2025`; `afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### 聚丙烯纺粘非织造布输入（`pp_spunbond_nonwoven_input`）

本卡单独记录“聚丙烯纺粘非织造布”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Polypropylene spunbond nonwoven fabric
- 流属性 / 单位：Mass / kg
- 数量规则：实测投入裁剪批次的材料质量，减去退回受控库存的未用材料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`iso-9092-2026`; `afw-pefcr-3-1-2025`

###### 聚丙烯纺粘-熔喷-纺粘非织造布输入（`pp_sms_nonwoven_input`）

本卡单独记录“聚丙烯纺粘-熔喷-纺粘非织造布”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Polypropylene spunbond-meltblown-spunbond nonwoven fabric
- 流属性 / 单位：Mass / kg
- 数量规则：实测投入裁剪批次的材料质量，减去退回受控库存的未用材料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`iso-9092-2026`; `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

###### 高密度聚乙烯闪蒸纺非织造布输入（`pe_flashspun_nonwoven_input`）

本卡单独记录“高密度聚乙烯闪蒸纺非织造布”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：High-density polyethylene flash-spun nonwoven fabric
- 流属性 / 单位：Mass / kg
- 数量规则：实测投入裁剪批次的材料质量，减去退回受控库存的未用材料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`iso-9092-2026`; `afw-pefcr-3-1-2025`

###### 聚氨酯涂层聚酯纺织物输入（`pu_coated_polyester_fabric_input`）

本卡单独记录“聚氨酯涂层聚酯纺织物”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Polyurethane-coated polyester textile fabric
- 流属性 / 单位：Mass / kg
- 数量规则：实测投入裁剪批次的材料质量，减去退回受控库存的未用材料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`un-cpc-3-0-2025`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025`

###### 聚氯乙烯涂层聚酯纺织物输入（`pvc_coated_polyester_fabric_input`）

本卡单独记录“聚氯乙烯涂层聚酯纺织物”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Polyvinyl-chloride-coated polyester textile fabric
- 流属性 / 单位：Mass / kg
- 数量规则：实测投入裁剪批次的材料质量，减去退回受控库存的未用材料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`un-cpc-3-0-2025`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025`

###### 聚四氟乙烯层压聚酯纺织物输入（`ptfe_laminated_polyester_fabric_input`）

本卡单独记录“聚四氟乙烯层压聚酯纺织物”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Polytetrafluoroethylene-laminated polyester textile fabric
- 流属性 / 单位：Mass / kg
- 数量规则：实测投入裁剪批次的材料质量，减去退回受控库存的未用材料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`un-cpc-3-0-2025`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025`

###### 丁腈橡胶涂层聚酯纺织物输入（`nitrile_rubber_coated_polyester_fabric_input`）

本卡单独记录“丁腈橡胶涂层聚酯纺织物”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Nitrile-rubber-coated polyester textile fabric
- 流属性 / 单位：Mass / kg
- 数量规则：实测投入裁剪批次的材料质量，减去退回受控库存的未用材料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`un-cpc-3-0-2025`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025`

###### 中压电力输入（`cutting_electricity_input`）

本卡单独记录“中压电力”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：中压电力
- 流属性 / 单位：Energy / kWh
- 数量规则：计量或按物理因子分配裁剪批次消耗的电力
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_electricity`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已裁剪 CPC 28250 服装裁片输出（`cut_garment_panels_output`）

本卡单独记录“已裁剪 CPC 28250 服装裁片”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Cut CPC 28250 garment panels
- 流属性 / 单位：Mass / kg
- 数量规则：实测转移至服装装配的合格裁片质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

###### 废羊毛毡边角料输出（`wool_felt_offcuts_output`）

本卡单独记录“废羊毛毡边角料”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste wool felt offcuts
- 流属性 / 单位：Mass / kg
- 数量规则：实测该材料在裁剪批次产生的边角料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 废针刺聚酯毡边角料输出（`polyester_felt_offcuts_output`）

本卡单独记录“废针刺聚酯毡边角料”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste needle-punched polyester felt offcuts
- 流属性 / 单位：Mass / kg
- 数量规则：实测该材料在裁剪批次产生的边角料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 废聚丙烯纺粘非织造布边角料输出（`pp_spunbond_offcuts_output`）

本卡单独记录“废聚丙烯纺粘非织造布边角料”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste polypropylene spunbond nonwoven offcuts
- 流属性 / 单位：Mass / kg
- 数量规则：实测该材料在裁剪批次产生的边角料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 废聚丙烯 SMS 非织造布边角料输出（`pp_sms_offcuts_output`）

本卡单独记录“废聚丙烯 SMS 非织造布边角料”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste polypropylene spunbond-meltblown-spunbond nonwoven offcuts
- 流属性 / 单位：Mass / kg
- 数量规则：实测该材料在裁剪批次产生的边角料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 废高密度聚乙烯闪蒸纺非织造布边角料输出（`pe_flashspun_offcuts_output`）

本卡单独记录“废高密度聚乙烯闪蒸纺非织造布边角料”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste high-density polyethylene flash-spun nonwoven offcuts
- 流属性 / 单位：Mass / kg
- 数量规则：实测该材料在裁剪批次产生的边角料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 废聚氨酯涂层聚酯纺织物边角料输出（`pu_coated_fabric_offcuts_output`）

本卡单独记录“废聚氨酯涂层聚酯纺织物边角料”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste polyurethane-coated polyester textile offcuts
- 流属性 / 单位：Mass / kg
- 数量规则：实测该材料在裁剪批次产生的边角料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`; `eu-textile-bat-2022`

###### 废聚氯乙烯涂层聚酯纺织物边角料输出（`pvc_coated_fabric_offcuts_output`）

本卡单独记录“废聚氯乙烯涂层聚酯纺织物边角料”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste polyvinyl-chloride-coated polyester textile offcuts
- 流属性 / 单位：Mass / kg
- 数量规则：实测该材料在裁剪批次产生的边角料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`; `eu-textile-bat-2022`

###### 废聚四氟乙烯层压聚酯纺织物边角料输出（`ptfe_laminated_fabric_offcuts_output`）

本卡单独记录“废聚四氟乙烯层压聚酯纺织物边角料”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste polytetrafluoroethylene-laminated polyester textile offcuts
- 流属性 / 单位：Mass / kg
- 数量规则：实测该材料在裁剪批次产生的边角料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`; `eu-textile-bat-2022`

###### 废丁腈橡胶涂层聚酯纺织物边角料输出（`nitrile_rubber_coated_fabric_offcuts_output`）

本卡单独记录“废丁腈橡胶涂层聚酯纺织物边角料”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste nitrile-rubber-coated polyester textile offcuts
- 流属性 / 单位：Mass / kg
- 数量规则：实测该材料在裁剪批次产生的边角料质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_materials`
- 来源：`afw-pefcr-3-1-2025`; `eu-textile-bat-2022`

##### 基本流

### 过程：服装连接与部件装配（`garment_assembly`）

#### 输入

##### 产品流

###### 已裁剪 CPC 28250 服装裁片输入（`cut_garment_panels_input`）

本卡单独记录“已裁剪 CPC 28250 服装裁片”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Cut CPC 28250 garment panels
- 流属性 / 单位：Mass / kg
- 数量规则：实测从材料裁剪接收的合格裁片质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 聚酯缝纫线输入（`sewing_thread_input`）

本卡单独记录“聚酯缝纫线”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：聚酯缝纫线
- 流属性 / 单位：Mass / kg
- 数量规则：实测装配批次领用缝纫线质量，减去退回受控库存的未用缝纫线质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

###### 聚酯带尼龙链牙服装拉链输入（`zipper_input`）

本卡单独记录“聚酯带尼龙链牙服装拉链”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Polyester-tape nylon-coil garment zipper
- 流属性 / 单位：Mass / kg
- 数量规则：依据部件领用与退回记录实测已安装尼龙链牙拉链质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

###### 聚酯-氨纶服装松紧带输入（`elastic_tape_input`）

本卡单独记录“聚酯-氨纶服装松紧带”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Polyester-elastane garment elastic tape
- 流属性 / 单位：Mass / kg
- 数量规则：实测已安装聚酯-氨纶松紧带质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 聚酰胺服装钩环扣输入（`hook_loop_fastener_input`）

本卡单独记录“聚酰胺服装钩环扣”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Polyamide hook-and-loop garment fastener
- 流属性 / 单位：Mass / kg
- 数量规则：实测已安装聚酰胺钩环扣质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

###### 不锈钢服装揿扣输入（`snap_fastener_input`）

本卡单独记录“不锈钢服装揿扣”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Stainless-steel garment snap fastener
- 流属性 / 单位：Mass / kg
- 数量规则：已安装揿扣数量乘以同一部件批次实测的单件平均质量
- 数值模式：计算值（`calculated_value`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_assembly_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 印刷聚酯服装洗护标签输入（`care_label_input`）

本卡单独记录“印刷聚酯服装洗护标签”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Printed polyester garment care label
- 流属性 / 单位：Mass / kg
- 数量规则：已安装标签数量乘以同一规格批次实测的标签平均质量
- 数值模式：计算值（`calculated_value`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_assembly_materials`
- 来源：`eu-textile-fibre-regulation-1007-2011`; `afw-pefcr-3-1-2025`

###### 乙烯-醋酸乙烯热熔服装胶黏剂输入（`eva_hot_melt_adhesive_input`）

本卡单独记录“乙烯-醋酸乙烯热熔服装胶黏剂”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Ethylene-vinyl-acetate hot-melt garment adhesive
- 流属性 / 单位：Mass / kg
- 数量规则：实测批次领用 EVA 热熔胶质量，减去退回受控库存的未用胶黏剂质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 中压电力输入（`assembly_electricity_input`）

本卡单独记录“中压电力”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：中压电力
- 流属性 / 单位：Energy / kWh
- 数量规则：计量或按物理因子分配服装装配消耗的电力
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_electricity`
- 来源：`afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 接缝屏障处理前已装配 CPC 28250 服装输出（`assembled_garment_output`）

本卡单独记录“接缝屏障处理前已装配 CPC 28250 服装”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Assembled CPC 28250 garment before seam barrier treatment
- 流属性 / 单位：Mass / kg
- 数量规则：实测转移至接缝处理或最终检验的已装配服装质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

##### 废物流

###### 废聚酯缝纫线输出（`waste_sewing_thread_output`）

本卡单独记录“废聚酯缝纫线”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste polyester sewing thread
- 流属性 / 单位：Mass / kg
- 数量规则：实测装配批次产生的废聚酯缝纫线质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`afw-pefcr-3-1-2025`

##### 基本流

### 过程：接缝屏障处理（`seam_barrier_treatment`）

#### 输入

##### 产品流

###### 接缝屏障处理前已装配 CPC 28250 服装输入（`assembled_garment_sealing_input`）

本卡单独记录“接缝屏障处理前已装配 CPC 28250 服装”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Assembled CPC 28250 garment before seam barrier treatment
- 流属性 / 单位：Mass / kg
- 数量规则：实测进入接缝处理批次的已装配服装质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seam_treatment`
- 来源：`cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

###### 聚氨酯热塑性服装接缝密封带输入（`thermoplastic_seam_tape_input`）

本卡单独记录“聚氨酯热塑性服装接缝密封带”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Polyurethane thermoplastic garment seam-sealing tape
- 流属性 / 单位：Mass / kg
- 数量规则：实测处理批次领用接缝带质量，减去退回受控库存的未用接缝带质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seam_treatment`
- 来源：`cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

###### 中压电力输入（`sealing_electricity_input`）

本卡单独记录“中压电力”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：中压电力
- 流属性 / 单位：Energy / kWh
- 数量规则：计量或按物理因子分配接缝屏障处理消耗的电力
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seam_treatment`
- 来源：`afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已封缝 CPC 28250 服装输出（`seam_sealed_garment_output`）

本卡单独记录“已封缝 CPC 28250 服装”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Seam-sealed CPC 28250 garment
- 流属性 / 单位：Mass / kg
- 数量规则：实测转移至最终检验的封缝服装质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seam_treatment`
- 来源：`cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

##### 废物流

###### 废聚氨酯热塑性接缝密封带输出（`waste_seam_tape_output`）

本卡单独记录“废聚氨酯热塑性接缝密封带”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste polyurethane thermoplastic seam-sealing tape
- 流属性 / 单位：Mass / kg
- 数量规则：实测处理批次产生的废 PU 接缝密封带质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seam_treatment`
- 来源：`afw-pefcr-3-1-2025`

##### 基本流

### 过程：最终检验与接收（`final_inspection`）

#### 输入

##### 产品流

###### 接缝屏障处理前已装配 CPC 28250 服装输入（`assembled_garment_inspection_input`）

本卡单独记录“接缝屏障处理前已装配 CPC 28250 服装”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Assembled CPC 28250 garment before seam barrier treatment
- 流属性 / 单位：Mass / kg
- 数量规则：实测未经过独立接缝带工序而进入最终检验的已装配服装质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_inspection`
- 来源：`cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

###### 已封缝 CPC 28250 服装输入（`seam_sealed_garment_inspection_input`）

本卡单独记录“已封缝 CPC 28250 服装”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Seam-sealed CPC 28250 garment
- 流属性 / 单位：Mass / kg
- 数量规则：实测进入最终检验的封缝服装质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_inspection`
- 来源：`cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

###### 中压电力输入（`inspection_electricity_input`）

本卡单独记录“中压电力”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：中压电力
- 流属性 / 单位：Energy / kWh
- 数量规则：计量或按物理因子分配最终检验和接收测试消耗的电力
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_inspection`
- 来源：`afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格未包装 CPC 28250 服装输出（`accepted_unpacked_garment_output`）

本卡单独记录“合格未包装 CPC 28250 服装”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Accepted unpackaged CPC 28250 garment
- 流属性 / 单位：Mass / kg
- 数量规则：实测放行至包装的合格未包装服装质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_inspection`
- 来源：`cdc-niosh-protective-clothing-selection`; `afw-pefcr-3-1-2025`

##### 废物流

###### 废不合格 CPC 28250 服装输出（`nonconforming_garment_output`）

本卡单独记录“废不合格 CPC 28250 服装”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste nonconforming CPC 28250 garment
- 流属性 / 单位：Mass / kg
- 数量规则：实测离开合格产品路线的不合格服装质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_inspection`
- 来源：`afw-pefcr-3-1-2025`

##### 基本流

### 过程：产品包装（`packaging`）

#### 输入

##### 产品流

###### 合格未包装 CPC 28250 服装输入（`accepted_unpacked_garment_input`）

本卡单独记录“合格未包装 CPC 28250 服装”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Accepted unpackaged CPC 28250 garment
- 流属性 / 单位：Mass / kg
- 数量规则：实测从最终检验接收的合格未包装服装质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

###### 低密度聚乙烯服装塑料袋输入（`ldpe_polybag_input`）

本卡单独记录“低密度聚乙烯服装塑料袋”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Low-density polyethylene garment polybag
- 流属性 / 单位：Mass / kg
- 数量规则：实测合格包装产出消耗的 LDPE 服装袋质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

###### 印刷纸质服装吊牌输入（`paper_hangtag_input`）

本卡单独记录“印刷纸质服装吊牌”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Printed paper garment hangtag
- 流属性 / 单位：Mass / kg
- 数量规则：已挂纸质吊牌数量乘以同一规格批次实测的吊牌平均质量
- 数值模式：计算值（`calculated_value`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

###### 瓦楞纸板服装运输箱输入（`corrugated_carton_input`）

本卡单独记录“瓦楞纸板服装运输箱”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Corrugated cardboard garment shipping carton
- 流属性 / 单位：Mass / kg
- 数量规则：实测合格货运批次消耗的瓦楞纸箱质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

###### 可重复使用木制运输托盘输入（`wood_pallet_input`）

本卡单独记录“可重复使用木制运输托盘”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Reusable wood shipping pallet
- 流属性 / 单位：Mass / kg
- 数量规则：托盘质量除以有文件证明的已完成重复使用次数，再按该货运批次合格包装产品质量分配
- 数值模式：计算值（`calculated_value`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

###### 低密度聚乙烯托盘缠绕膜输入（`ldpe_stretch_film_input`）

本卡单独记录“低密度聚乙烯托盘缠绕膜”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Low-density polyethylene pallet stretch film
- 流属性 / 单位：Mass / kg
- 数量规则：实测合格货运批次消耗的 LDPE 托盘缠绕膜质量
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

###### 中压电力输入（`packaging_electricity_input`）

本卡单独记录“中压电力”这一具体输入，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：中压电力
- 流属性 / 单位：Energy / kWh
- 数量规则：计量或按物理因子分配包装合格服装所消耗的电力
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 毡或非织造布制服装；塑料、橡胶或其他材料浸渍或涂覆的纺织物制服装输出（`finished_packaged_garment_output`）

本卡单独记录“毡或非织造布制服装；塑料、橡胶或其他材料浸渍或涂覆的纺织物制服装”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：用毛毡或非织造物制成的服装，用浸渍或涂覆塑料、橡胶或其他材料的纺织品制成的服装 `3c972aa8-6aa5-4724-8a61-694aef1b09fe`
- 流属性 / 单位：Mass / kg
- 数量规则：实测合格包装产出质量；归一化后恰为 1 kg
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：制造工厂门口 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_output`
- 来源：`un-cpc-3-0-2025`; `afw-pefcr-3-1-2025`

##### 废物流

###### 废低密度聚乙烯服装袋薄膜输出（`waste_ldpe_polybag_output`）

本卡单独记录“废低密度聚乙烯服装袋薄膜”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste low-density polyethylene garment-polybag film
- 流属性 / 单位：Mass / kg
- 数量规则：实测包装期间产生的废 LDPE 服装袋薄膜质量
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

###### 废印刷纸质服装吊牌输出（`waste_paper_hangtag_output`）

本卡单独记录“废印刷纸质服装吊牌”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste printed paper garment hangtag
- 流属性 / 单位：Mass / kg
- 数量规则：实测包装期间产生的废印刷纸质吊牌质量
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

###### 废瓦楞纸板服装箱输出（`waste_corrugated_cardboard_output`）

本卡单独记录“废瓦楞纸板服装箱”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste corrugated cardboard garment carton
- 流属性 / 单位：Mass / kg
- 数量规则：实测包装期间产生的废瓦楞纸板质量
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

###### 废低密度聚乙烯托盘缠绕膜输出（`waste_ldpe_stretch_film_output`）

本卡单独记录“废低密度聚乙烯托盘缠绕膜”这一具体输出，依所列采集协议按批次计量并保留材料、工序与去向证据，不得与其他交换合并。

- 选定流：Waste low-density polyethylene pallet stretch film
- 流属性 / 单位：Mass / kg
- 数量规则：实测包装期间产生的废 LDPE 托盘缠绕膜质量
- 数值模式：前景记录（`foreground_record`）
- Specificity: Site-specific (`site_specific`)
- 归一化基准：每 1 kg 合格包装成品服装
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`afw-pefcr-3-1-2025`

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_processes_first` | foreground_processes | 将裁剪、装配、接缝处理、检验和包装保留为独立过程记录，并分开实质不同的生产路线和场址，以避免分配。 | `afw-pefcr-3-1-2025` |
| `allocation_use_direct_records` | materials_and_components | 在采用任何共享场址分配前，先依据批次领用、受控退料、已安装数量到质量换算和实测废物记录归属材料与部件输入。 | `afw-pefcr-3-1-2025` |
| `allocation_shared_electricity` | shared_electricity | 有条件时采用过程分表计量；否则按有文件证明的设备运行时间乘以实测功率分配共享电表，并披露分配因子及与电表总量的核对。 | `afw-pefcr-3-1-2025` |
| `allocation_multi_site_electricity_mix` | multi_site_manufacturing | 汇总多个制造场址时，按生产质量加权平均计算电力组合，并保留各场址能源记录。 | `afw-pefcr-3-1-2025` |
| `allocation_waste_no_avoided_burden` | manufacturing_wastes | 在本门到门数据包中报告每种废物产出及其去向且不计避免产品信用；任何下游回收收益归入明确链接的下游模型。 | `afw-pefcr-3-1-2025` |
| `allocation_reusable_pallet` | reusable_pallet | 按托盘实际质量及有文件证明的已完成重复使用次数分配可重复使用托盘生产，再按合格包装产品质量分配货运份额。 | `afw-pefcr-3-1-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_materials` | `material_cutting` | converted material inputs, accepted panels and material-specific offcuts | BOM, purchase lot, issue/return ticket, scale record, cutting batch and waste destination record | garment_style; size_mix; material_id; substrate_fibre; construction; coating_chemistry; areal_density; issued_mass; returned_mass; accepted_panel_mass; offcut_mass; destination | Reconcile calibrated mass records for each material identity and cutting batch. | kg | each batch | representative production period, normally at least 12 months | every cutting site and controlled contractor | Sum each atomic material exchange by batch and divide by accepted packaged output mass. | calibration record; BOM revision; lot trace; issue/return reconciliation; waste receipt |
| `cp_cutting_electricity` | `material_cutting` | cutting electricity | submeter or shared meter plus equipment log | meter_start; meter_end; equipment_id; operating_time; measured_demand; batch_id; site | Read a dedicated submeter or apply the documented physical driver and reconcile to the site meter. | kWh | each batch or meter interval | same period as production | every cutting site | Allocate to cutting batches, sum and normalize to accepted packaged output mass. | meter record; equipment log; allocation worksheet |
| `cp_assembly_materials` | `garment_assembly` | panels, thread, closures, elastic, label, adhesive, assembled garment and thread waste | BOM, technology pack, component issue/return record, installed count, sample mass, scale record and production log | garment_style; joining_method; component_id; issued_mass; returned_mass; installed_count; mean_piece_mass; assembled_mass; thread_waste_mass | Measure issued and returned materials; convert counts only under the component-mass rule. | kg | each batch | same period as production | every assembly site and controlled contractor | Calculate net consumption by atomic component and normalize to accepted packaged output mass. | approved technology pack; component lot; scale calibration; batch reconciliation |
| `cp_assembly_electricity` | `garment_assembly` | assembly electricity | submeter or shared meter plus equipment log | meter_start; meter_end; sewing_hours; ultrasonic_welder_hours; adhesive_applicator_hours; measured_demand; batch_id | Meter assembly electricity or allocate by auditable equipment time and measured demand. | kWh | each batch or meter interval | same period as production | every assembly site | Allocate to assembly batches, reconcile to meter total and normalize. | meter record; equipment log; allocation worksheet |
| `cp_seam_treatment` | `seam_barrier_treatment` | garment input/output, PU seam tape, tape waste and electricity | seam specification, tape issue/return, treated-length record, scale record, meter and acceptance log | seam_configuration; tape_id; issued_mass; returned_mass; tape_waste_mass; garment_input_mass; garment_output_mass; treated_length; electricity | Collect material and energy records only for batches receiving a separate seam treatment. | kg; m; kWh | each treated batch | same period as production | every seam-treatment site | Reconcile tape and garment mass, allocate electricity and normalize to accepted packaged output mass. | technology pack; tape certificate; meter record; seam acceptance record |
| `cp_final_inspection` | `final_inspection` | garment inputs, accepted output, rejects and inspection electricity | inspection lot, scale record, defect/rework log, test report and meter record | garment_style; input_mass; accepted_mass; rejected_mass; defect_code; rework_status; test_method; result; electricity | Weigh accepted and rejected outputs separately and retain evidence for each claimed performance check. | kg; kWh | each inspection lot | same period as production | every final-inspection site | Sum accepted and rejected mass and normalize exchanges to packaged accepted output. | inspection report; test report; scale calibration; nonconformance disposition |
| `cp_packaging` | `packaging` | unpackaged garment, each packaging input, packaging wastes and electricity | packaging BOM, issue/return record, item count, sample mass, pallet register, scale and meter record | garment_mass; packaging_id; packaging_mass; item_count; sample_mean_mass; pallet_mass; completed_reuse_cycles; shipment_product_mass; waste_mass; electricity | Measure each packaging material independently and calculate counted or reusable items from collected records. | kg; kWh | each shipment batch | same period as production | every packaging site | Sum each material and waste exchange, apply documented pallet reuse, allocate electricity and normalize. | packaging specification; scale calibration; pallet register; meter record; shipment record |
| `cp_reference_output` | `packaging` | accepted finished packaged garment | calibrated factory-gate scale and release record | product_id; CPC_code; lot_id; packaged_mass; accepted_quantity; release_status; timestamp | Weigh only accepted packaged CPC 28250 output at release. | kg | each release lot | same period as all foreground data | final manufacturing gate | Sum accepted mass and set the normalized reference output to exactly 1 kg. | scale calibration; release certificate; CPC identity review |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | every foreground exchange | normalized exchange = batch exchange amount / accepted packaged output mass for the same reconciled production scope | atomic exchange amount; accepted packaged output mass | exchange per 1 kg reference product | `afw-pefcr-3-1-2025` |
| `calc_net_material_consumption` | issued materials and components | net consumption = issued mass − mass returned to controlled stock; do not subtract offcuts that leave as waste outputs | issued mass; controlled return mass | net material input | `afw-pefcr-3-1-2025` |
| `calc_count_to_component_mass` | counted snaps, labels or equivalent specified pieces | installed mass = installed count × measured mean mass per item from the same specification lot | installed count; sample item masses; sample count | installed component mass | `afw-pefcr-3-1-2025` |
| `calc_material_specific_cutting_balance` | each cutting material | input mass = returned unused mass + accepted panel mass attributable to the material + material-specific offcut mass + documented inventory change; investigate any residual | issue, return, panel, offcut and inventory-change mass | material-balance residual | `afw-pefcr-3-1-2025` |
| `calc_shared_electricity` | shared process meter | process electricity = shared meter total × process physical driver / sum of drivers, where driver = equipment operating time × measured demand | meter total; equipment time; measured demand | allocated process electricity | `afw-pefcr-3-1-2025` |
| `calc_reusable_pallet_mass` | reusable wood pallet | allocated pallet mass = pallet mass / documented completed reuse cycles × shipment share of accepted packaged product mass | pallet mass; completed reuse cycles; shipment accepted product mass | pallet mass assigned to reference output | `afw-pefcr-3-1-2025` |
| `calc_bom_completeness` | product BOM | completeness = sum of explicitly identified component masses / finished unpackaged garment mass; main fabrics, lining, padding, electronic parts and metals are checked independently for full identity coverage | component masses; finished unpackaged garment mass; component roles | BOM completeness and mandatory-component coverage | `afw-pefcr-3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留 CPC 范围审查、服装款式、预期用途、使用寿命类别、尺码基准、材料类别、准确基材/涂层身份、连接路线、接缝规范和包装配置。 | 产品规范；BOM；工艺包；分类审查 |
| `dq_bom_coverage` | 材料与部件 | 主要 BOM 数据应至少覆盖产品质量的 95%，并在存在时 100% 识别主体面料、里料、填料、电子部件和金属；披露每项遗漏份额。 | BOM 完整度计算及供应商记录 |
| `dq_material_specificity` | 毡、非织造布及涂层/层压纺织物 | 不得以通用材料类别行表示实际输入。当纤维、聚合物、涂层、膜、橡胶或层压身份不同于列示候选项时，新增单独原子交换。 | 供应商规范；安全/技术资料；批次证书 |
| `dq_temporal_representativeness` | 所有前景记录 | 使用一致的代表性生产期，通常至少连续 12 个月；新产品或季节性产品采用更短生产期时，应披露并说明理由。 | 带日期的生产、采购、仪表和废物记录 |
| `dq_site_completeness` | 制造网络 | 纳入为申报产出实施裁剪、装配、接缝处理、最终检验或包装的每个自有或签约场址。 | 供应商/场址清单；生产订单；承包商记录 |
| `dq_measurement_traceability` | 实测质量与能源 | 对每项材料、废物、产出和仪表记录保留校准状态、测量时间、批次身份、单位换算和核对。 | 校准证书；原始读数；核对工作表 |
| `dq_protective_claims` | 有防护或屏障声明的服装 | 保留适用试验方法、试样身份、接缝/闭合件配置、结果、实验室身份，以及受试构造与生产批次之间的链接。 | 经认可或另行申报的实验室报告；质量放行记录 |
| `dq_waste_destination` | 每项废物产出 | 记录废物组成、污染状态、实测质量、去向、处理合同和收据；不得合并涂层、层压、橡胶涂层与无涂层材料废物。 | 废物日志；转移单；处理收据 |
| `dq_electricity_identity` | 电力输入 | 仅在有可靠合同证据时使用供应商特定电力；否则使用场址所在国剩余消费组合并披露仪表分配。 | 发票或合同；仪表记录；剩余组合来源；分配工作表 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 要求 Product 流 UUID `3c972aa8-6aa5-4724-8a61-694aef1b09fe`、精确 CPC 28250、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 | `un-cpc-3-0-2025` |
| `validate_required_qualifiers` | product_metadata | Reject a data package missing garment type, service-life class, primary material construction, substrate fibre, coating/membrane chemistry where applicable, joining method, seam configuration, intended use, site or packaging basis. | `un-cpc-3-0-2025`; `iso-9092-2026`; `cdc-niosh-protective-clothing-selection` |
| `validate_cpc_scope` | reference_product | Confirm the output is a garment made from felt, nonwoven or a textile impregnated/coated/laminated with a declared material; reject material rollstock, headgear, footwear and technical textile articles. | `un-cpc-3-0-2025` |
| `validate_atomic_material_identity` | material_inputs_and_wastes | Require one chemically and physically specific exchange for every actual primary material and its offcut waste; an unlisted material must be added as a new row and must not be assigned to a nearest generic candidate. | `iso-9092-2026`; `eu-textile-bat-2022`; `afw-pefcr-3-1-2025` |
| `validate_process_route` | process_inventory | Require `material_cutting`, `garment_assembly`, `final_inspection` and `packaging`; require `seam_barrier_treatment` when a separate seam-tape operation occurs and document non-applicability otherwise. | `afw-pefcr-3-1-2025`; `cdc-niosh-protective-clothing-selection` |
| `validate_on_site_converting` | system_boundary | Reject use of this garment-only inventory as complete when on-site coating, impregnation, lamination, wet finishing or solvent treatment lacks a separate process with specific inputs, wastes and emissions. | `eu-textile-bat-2022` |
| `validate_bom_completeness` | product_BOM | Require the BOM coverage calculation and at least 95% mass coverage plus complete identity for all main fabrics, lining, padding, electronic parts and metals present. | `afw-pefcr-3-1-2025` |
| `validate_mass_balance` | cutting_assembly_and_acceptance | Reconcile each primary material from issue through controlled return, accepted intermediate, material-specific waste and inventory change; reconcile garment inputs to accepted and nonconforming outputs. | `afw-pefcr-3-1-2025` |
| `validate_seam_and_closure_claims` | claimed_protective_performance | When barrier or protective performance is claimed, require evidence tied to the exact material, seam, tape, zipper/closure and garment construction; material-only results are insufficient for an overall garment claim. | `cdc-niosh-protective-clothing-selection` |
| `validate_electricity_records` | electricity_inputs | Require site, meter interval, kWh, process allocation and electricity-product identity for each process electricity row. | `afw-pefcr-3-1-2025` |
| `validate_packaging_separation` | packaging | Require individual mass records for LDPE garment polybags, paper hangtags, corrugated cartons, reusable wood pallets and LDPE stretch film when present; do not accept one aggregate packaging amount. | `afw-pefcr-3-1-2025` |
| `validate_waste_separation` | waste_outputs | Require each offcut, thread, seam-tape, rejected-garment and packaging waste to retain its own material identity, mass and destination. | `afw-pefcr-3-1-2025`; `eu-textile-bat-2022` |
| `validate_no_unverified_uuid` | tiangong_identity | 除非混合检索与 state-100 直接检索均确认准确的公开流身份、流类型、分类和定量属性，否则拒绝任何非参考 UUID。 |  |
| `validate_foreground_amounts` | inventory_amounts | 每项纳入交换都须有前景记录或已申报计算；不得用 AI 编写数值或单件默认值替代一千克基准下的产品特定记录。 | `afw-pefcr-3-1-2025` |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 针对一种已申报 CPC 28250 服装构造的产品和场址特定前景制造数据包 |
| downstream_use | 经审查后可发布为 `secondary_dataset` 或 `background_dataset`，并与准确上游材料数据集及下游分销/使用/寿命终止模型链接 |
| allowed_use | 对已申报 BOM、连接路线、场址和期间，从接收已转化材料至工厂门口包装产出的合格服装制造建模 |
| excluded_use | 未明确毡/非织造布/涂层材料的通用代理；防护性能证明；未纳入场内清单的材料涂覆或层压；分销、使用或寿命终止建模 |
| required_metadata | PCR id；CPC 28250；参考 UUID；服装设计与尺码基准；可重复/有限次使用状态；准确 BOM；基材/涂层/膜身份；连接与接缝路线；场址清单；时间覆盖；分配方法；包装配置；废物去向 |
| required_quality_disclosure | BOM 覆盖率；未解决材料或 UUID 身份；缺失场址记录；测量与分配不确定性；不合格产出处理；声明的试验证据；上游数据集选择；任何被排除的场内操作 |
| update_trigger | 主要材料或涂层化学组成、服装设计、连接或接缝技术、声明性能、供应商/场址、包装系统、废物处理、仪表分配、生产期或参考流身份发生变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | Exact CPC 28250 product scope, covered material families and exclusions from neighbouring product classes |
| `afw-pefcr-3-1-2025` | `official_guidance` | Technical Secretariat for Apparel and Footwear, *Product Environmental Footprint Category Rules: Apparel and Footwear*, version 3.1, 29 April 2025. https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf (retrieved 2026-08-13); European Commission announcement: https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en | BOM coverage, company-specific manufacturing data, cutting/assembly/packaging process decomposition, step-specific losses, electricity hierarchy, allocation, packaging types and data quality |
| `iso-9092-2026` | `standard` | ISO 9092:2026, *Nonwovens — Vocabulary*. https://www.iso.org/standard/90537.html (retrieved 2026-08-13) | Nonwoven terminology and required distinction between nonwovens and other material constructions |
| `eu-textile-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-13) | Separation and disclosure of coating, lamination, finishing and thermal treatment; input/output inventories; material, chemical, energy, water, waste and emission records |
| `eu-textile-fibre-regulation-1007-2011` | `official_guidance` | Regulation (EU) No 1007/2011 on textile fibre names and related labelling and marking of fibre composition. http://data.europa.eu/eli/reg/2011/1007/oj (retrieved 2026-08-13) | Fibre and multi-component identity, lining/component declarations, label traceability and finished-product composition checks |
| `cdc-niosh-protective-clothing-selection` | `official_guidance` | US CDC/NIOSH, *Selecting Protective Clothing*, updated 2024. https://www.cdc.gov/niosh/healthcare/protective-clothing/selection.html (retrieved 2026-08-13) | Conditional protective-garment design qualifiers; sewn, bound, taped and ultrasonic-welded seam routes; seam/closure barrier and strength evidence |
