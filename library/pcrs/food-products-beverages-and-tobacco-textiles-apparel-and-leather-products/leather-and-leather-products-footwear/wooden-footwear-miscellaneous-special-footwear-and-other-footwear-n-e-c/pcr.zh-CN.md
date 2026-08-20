---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.wooden-footwear-miscellaneous-special-footwear-and-other-footwear-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 木制鞋类，特殊鞋类及其他未另列明的鞋类

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 29520 内的木制成鞋、木质鞋身或鞋底与皮革、纺织品或塑料鞋面/鞋带组合的鞋类、杂项特殊鞋类及其他未另列明的成鞋。它用于建立产品路线特定的工厂门前景数据包；不得假定所有路线均使用木材、鞋面、单独成型鞋底、胶黏剂、缝制或热处理。

本 PCR 不包括 CPC 293 或 294 鞋类、CPC 29510 带金属防护鞋头的鞋类、石棉鞋、矫形鞋、滑冰靴、CPC 29600 鞋类零件和可拆附件，以及修理、分销、使用或寿命终止服务。采用本 PCR 前，生产者应记录未另列明或特殊产品归入 CPC 29520 的理由。

前景边界从制造场址或受控分包商接收材料、部件和包装开始，到 1 kg 合格成鞋在工厂门交付结束。木材、皮革、纺织品、塑料、橡胶配混料、化学品、电力和热力以及包装的上游生产采用可追溯上游数据集表示，不在前景清单内重复建立。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.wooden-footwear-miscellaneous-special-footwear-and-other-footwear-n-e-c |
| classification_refs | CPC 3.0：29520，精确分类语境 |
| covered_products | 全木成鞋；木质鞋底或鞋身与皮革、纺织品或塑料鞋面/鞋带组合的成鞋；通过 CPC 29520 分类核查的杂项特殊鞋类及其他未另列明鞋类 |
| excluded_products | CPC 293 鞋类；CPC 294 运动鞋；CPC 29510 带金属防护鞋头鞋类；石棉鞋；矫形鞋；滑冰靴；CPC 29600 鞋类零件和可拆附件；修理及下游服务活动 |
| representative_product | 通过已记录的木制、木质混合或其他特殊鞋类路线制造的一个已声明型号合格成鞋 |
| production_route | 按产品实际情况组合部件接收、木质鞋身或鞋底加工、柔性鞋面/鞋带制备、非木质底部成型、部件组合/总装、整理、检验和包装 |
| market_state | 制造成品、工厂生产混合；净产品质量与包装质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 保护、支撑并容纳足部，为指定型号提供所声明的步行、职业、礼仪、室内或其他特殊鞋类功能 |
| How much | 工厂门 1 kg 合格成鞋，不含包装 |
| How well | 符合声明的型号、预期用途、尺码范围、材料结构、路线、适用性能规范和质量等级 |
| How long or cycle | 声明预期使用寿命或使用周期基准；没有产品特定证据时不设默认寿命 |
| reference_flow_link | 提供声明功能所需的 CPC 29520 合格成鞋净质量；工厂门声明单位为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 木制鞋类，特殊鞋类及其他未另列明的鞋类 `e377f482-0635-4972-8954-9279707bfd7e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 29520 纳入理由；鞋类型号和预期功能；结构路线；全木、木质混合或非木质特殊鞋类路线；使用木材时的树种和含水状态；鞋面/鞋带材料；外底、中底和内底材料；紧固和粘接路线；尺码范围及尺码组合；净产品质量；质量物料清单；适用耐久或安全规范；包装构成；工厂门地域；生产期间；纳入场址和分包商 |

构建前景数据包时，`必需限定信息` 中的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 恰好报告 1 kg 验收成鞋净输出，不含任何包装；如使用包装毛质量，应另行保存。 |
| `pair_to_mass` | 以双或件保存的生产记录 | Mass | kg | 使用同型号、基准尺码或已记录尺码组合及同一批次的实测净质量换算，并保留数量、抽样质量和抽样依据。 |
| `wood_moisture_basis` | 实木或层压木输入和输出 | Mass | kg | 记录接收质量和含水率或声明调湿状态；木材输入、产品含量、边角料和锯屑比较时使用同一含水基准。 |
| `bom_mass_consistency` | 材料和部件 | Mass | kg | 按材料分别核对报告批次的发出、退回、进入产品、返工、报废和库存质量。 |
| `energy_carrier_separation` | 电力、蒸汽和外购热力 | Energy | kWh 或 MJ | 保留仪表或发票单位及换算系数；电力、蒸汽和外购热力分别记录。 |
| `chemical_formulation_basis` | 胶黏剂、清洗剂和涂饰剂 | Mass | kg | 每种外购配方产品单独记录，并保存用于计算具体化学排放和残余物的供应商配方或 VOC 含量证据。 |
| `packaging_separation` | 包装 | Mass | kg | 瓦楞纸鞋盒、薄页纸、LDPE 薄膜、纸标签及其他实际包装部件分别计量，且与成鞋净输出分开。 |

## 5. 系统边界

前景系统包括把接收材料和部件转化为已包装合格鞋类的产品特定制造步骤：适用时的木材切割、雕刻或机械加工、钻孔、砂磨、调湿和涂饰；适用时柔性鞋面或鞋带的模切和缝制；适用时配混料成型、内底或鞋底生产；以及部件组合、机械紧固、粘接、整理、检验、返工和包装。每种材料、每项电力或热力、水、废物和直接基本流排放均作为单独交换跨越边界。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的木坯、皮革、纺织品、塑料片材、橡胶或聚合物配混料、缝线、紧固件、胶黏剂、清洗剂、涂饰剂和包装具有适用的供应商、组成、质量、含水率或配方及批次记录。 |
| starting_condition_role | 接收材料和部件为上游产品输入；前景系统实施鞋类部件转化和最终制造。 |
| product_classification_scope | 经针对其他鞋类子类和 CPC 29600 零件明确排除核查后归入 CPC 3.0 子类 29520 的成鞋。 |
| recursive_input_rule | 已属于 CPC 29520 的外购成鞋或半成鞋作为一个具有自身数据集的上游产品输入，不按报告场址自产情况递归拆解。 |
| upstream_dataset_requirement | 为每种接收材料、配混料、化学品、电力或热力、水和包装部件使用可追溯上游数据集；披露每个代理及其代表性。 |
| disclosure | 声明分类理由、型号、路线、完整物料清单、材料和化学品规格、木材含水状态、纳入设施和分包商、过程电力热力及用水、废物、直接排放、返工、包装、地域、期间和分配决定。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 纳入制造声明工厂门输出所需的所有受控和分包部件制造、部件合并、最终装配、整理、检验、返工和包装。 | `af-pefcr-v3-1-2025`; `eu-pef-2021` |
| `boundary_route_specificity` | 过程选择 | 只纳入声明型号实际采用的过程，同时完整覆盖适用的木质部件、柔性部件、非木质底部件、装配和包装路线。 | `af-pefcr-v3-1-2025`; `fao-forest-handicrafts-clogs` |
| `boundary_upstream_materials` | 外购产品 | 供应商生产保留在上游；前景记录产品特定 BOM、加工损失、电力和热力、化学品、水及包装数量。 | `af-pefcr-v3-1-2025`; `rusu-et-al-footwear-lca-2024` |
| `boundary_scope_exclusions` | 产品身份 | 若产品属于其他鞋类子类、仅为鞋类零件或可拆附件，或缺少 CPC 29520 纳入理由，则拒绝采用本 PCR。 | `un-cpc-v3-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `wood_component_manufacturing` | 木质鞋身或鞋底部件制造 | `conditional` | 使用实木或层压木进行切割、雕刻、加工、钻孔、砂磨、调湿或涂饰时纳入 | 前景木质部件转化 | kg 合格成型木质部件 |
| `flexible_component_preparation` | 柔性鞋面或鞋带部件制备 | `conditional` | 报告场址裁切或缝制皮革、纺织品、塑料片材或缝线时纳入 | 前景鞋面/鞋带制备 | kg 合格柔性部件 |
| `nonwood_bottom_forming` | 非木质外底、中底或内底成型 | `conditional` | 报告场址成型橡胶、EVA、聚氨酯或其他声明非木质底部部件时纳入 | 前景底部件转化 | kg 合格成型底部件 |
| `final_assembly_finishing` | 部件组合、最终装配、整理和检验 | `required` | 始终纳入；只有证据证明声明型号不使用某路线时，相关输入行才可标为不适用 | 前景成鞋完成 | kg 合格未包装成鞋 |
| `packaging` | 产品包装和工厂门放行 | `required` | 始终纳入 | 前景包装和参考产品放行 | 1 kg 合格成鞋净输出 |

### 过程：木质鞋身或鞋底部件制造（`wood_component_manufacturing`）

#### 输入

##### 产品流

###### 实木块（`solid_wood_block`）

按树种和批次记录用于木质鞋身、鞋底或鞋跟的实木。

- 选定流：鞋类部件用实木块
- 流属性/单位：Mass / kg
- 数量规则：实测批次接收并发出的湿基质量，同时记录含水状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 层压木坯（`laminated_wood_blank`）

仅在声明层压木路线时记录，并与实木分开。

- 选定流：鞋类部件用层压木坯
- 流属性/单位：Mass / kg
- 数量规则：实测发出质量减去已记录退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 木材机械加工用电（`wood_machining_electricity`）

单独记录切割、仿形、雕刻、铣削、钻孔、砂磨和除尘设备用电。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或设备功率乘经核验运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型木质部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`rusu-et-al-footwear-lca-2024`

###### 木材调湿用外购热力（`wood_drying_purchased_heat`）

仅在外部供应热力用于木质部件调湿或干燥时记录。

- 选定流：外购热力
- 流属性/单位：Energy / MJ
- 数量规则：可归属于木材调湿的计量或发票热力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格调湿木质部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`rusu-et-al-footwear-lca-2024`

###### 水性木器清漆（`waterborne_wood_varnish`）

实际使用时作为一个单独配方产品输入记录。

- 选定流：水性木器清漆
- 流属性/单位：Mass / kg
- 数量规则：配方产品发出质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格涂饰木质部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`fao-forest-handicrafts-clogs`; `eu-ecolabel-footwear-2016`

###### 溶剂型木器清漆（`solventborne_wood_varnish`）

仅在实际使用时单独记录，并保留供应商 VOC 组成。

- 选定流：溶剂型木器清漆
- 流属性/单位：Mass / kg
- 数量规则：配方产品发出质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格涂饰木质部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`fao-forest-handicrafts-clogs`; `eu-ecolabel-footwear-2016`

##### 废物流

##### 基本流


#### 输出

##### 产品流

###### 成型实木鞋类部件（`shaped_solid_wood_component`）

在加工及适用调湿或涂饰完成后称量合格实木部件。

- 选定流：成型实木鞋类部件
- 流属性/单位：Mass / kg
- 数量规则：转入总装的实测合格部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每木质部件批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 成型层压木鞋类部件（`shaped_laminated_wood_component`）

与实木部件分开记录合格层压木部件。

- 选定流：成型层压木鞋类部件
- 流属性/单位：Mass / kg
- 数量规则：转入总装的实测合格部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每木质部件批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`fao-forest-handicrafts-clogs`

##### 废物流

###### 实木切割边角料（`solid_wood_offcuts`）

保留库存的可用木片不是废物；仅记录离开过程并送往声明路线的边角料。

- 选定流：鞋类部件实木边角料
- 流属性/单位：Mass / kg
- 数量规则：送往已记录回收或处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型实木部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 层压木切割边角料（`laminated_wood_offcuts`）

含胶层压木边角料与实木分开计量。

- 选定流：鞋类部件层压木边角料
- 流属性/单位：Mass / kg
- 数量规则：送往已记录回收或处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型层压木部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 木材锯屑（`wood_sawdust`）

作为废物离开的收集锯屑和砂磨残渣与空气木尘分开称量。

- 选定流：鞋类部件机械加工木屑
- 流属性/单位：Mass / kg
- 数量规则：送往声明路线的收集锯屑和砂磨残渣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型木质部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 废水性木器清漆（`waste_waterborne_varnish`）

不可用水性清漆及捕集残渣作为独立废物流。

- 选定流：废水性木器清漆
- 流属性/单位：Mass / kg
- 数量规则：转往已记录处理路线的实测残渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格涂饰木质部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 废溶剂型木器清漆（`waste_solventborne_varnish`）

不可用溶剂型清漆及捕集残渣不得与水性清漆废物合并。

- 选定流：废溶剂型木器清漆
- 流属性/单位：Mass / kg
- 数量规则：转往已记录处理路线的实测残渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格涂饰木质部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood_component_records`
- 来源：`eu-ecolabel-footwear-2016`

##### 基本流

###### 排入空气的木尘（`wood_dust_to_air`）

未作为固体废物捕集的木尘采用测量或经批准的场址物料平衡量化。

- 选定流：排入空气的木尘
- 流属性/单位：Mass / kg
- 数量规则：实测未捕集木尘，或由收集木尘和捕集记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型木质部件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wood_component_records`
- 来源：`eu-sts-bref-2020`

### 过程：柔性鞋面或鞋带部件制备（`flexible_component_preparation`）

#### 输入

##### 产品流

###### 成品皮革部件材料（`finished_leather_component_material`）

用于鞋面或鞋带的成品皮革按物种、涂饰、厚度、面积、供应商批次和实测质量记录。

- 选定流：鞋类用成品皮革
- 流属性/单位：Mass / kg
- 数量规则：实测发出皮革质量减去已记录退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`fao-forest-handicrafts-clogs`; `af-pefcr-v3-1-2025`

###### 机织纺织部件材料（`woven_textile_component_material`）

机织鞋面材料与皮革和塑料分别记录。

- 选定流：鞋面用机织纺织材料
- 流属性/单位：Mass / kg
- 数量规则：实测发出纺织材料质量减去已记录退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`af-pefcr-v3-1-2025`

###### 塑料鞋带片材（`plastic_strap_sheet`）

用于裁制鞋带的塑料片材按聚合物类型和批次记录。

- 选定流：鞋带用塑料片材
- 流属性/单位：Mass / kg
- 数量规则：实测发出片材质量减去已记录退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 聚酯缝纫线（`polyester_sewing_thread`）

聚酯缝纫线与纺织鞋面材料分开记录。

- 选定流：鞋类用聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：实测发出线质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格缝制部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`af-pefcr-v3-1-2025`

###### 柔性部件制备用电（`flexible_component_electricity`）

模切、缝制和相关设备用电单独计量。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或设备功率乘经核验运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格柔性部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`rusu-et-al-footwear-lca-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备完成的皮革鞋面或鞋带部件（`prepared_leather_upper_or_strap`）

裁切和适用缝制后称量合格皮革部件并保持批次身份。

- 选定流：制备完成的皮革鞋类部件
- 流属性/单位：Mass / kg
- 数量规则：转入总装的实测合格皮革部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每柔性部件批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`fao-forest-handicrafts-clogs`; `af-pefcr-v3-1-2025`

###### 制备完成的纺织鞋面（`prepared_textile_upper`）

合格纺织鞋面与皮革或塑料部件分别称量。

- 选定流：制备完成的机织纺织鞋面
- 流属性/单位：Mass / kg
- 数量规则：转入总装的实测合格纺织鞋面质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每柔性部件批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`af-pefcr-v3-1-2025`

###### 制备完成的塑料鞋带（`prepared_plastic_strap`）

合格塑料鞋带与其他鞋面部件分别称量。

- 选定流：制备完成的塑料鞋带
- 流属性/单位：Mass / kg
- 数量规则：转入总装的实测合格塑料鞋带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每柔性部件批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`fao-forest-handicrafts-clogs`

##### 废物流

###### 皮革裁切边角料（`leather_cutting_offcuts`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类皮革裁切边角料
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测皮革边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格皮革部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`af-pefcr-v3-1-2025`

###### 纺织材料裁切边角料（`textile_cutting_offcuts`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类机织纺织材料裁切边角料
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测纺织边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格纺织部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`af-pefcr-v3-1-2025`

###### 塑料片材边角料（`plastic_sheet_offcuts`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：塑料鞋带片材边角料
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测塑料边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格塑料部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 缝纫线边角料（`sewing_thread_offcuts`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：聚酯缝纫线边角料
- 流属性/单位：Mass / kg
- 数量规则：送往声明路线的实测线头和不可用缝线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格缝制部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flexible_component_records`
- 来源：`af-pefcr-v3-1-2025`

##### 基本流

### 过程：非木质外底、中底或内底成型（`nonwood_bottom_forming`）

#### 输入

##### 产品流

###### 天然橡胶配混料（`natural_rubber_compound`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类用天然橡胶配混料
- 流属性/单位：Mass / kg
- 数量规则：实测发出配混料质量减去已记录退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`af-pefcr-v3-1-2025`

###### 乙烯-醋酸乙烯酯配混料（`eva_compound`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类用乙烯-醋酸乙烯酯配混料
- 流属性/单位：Mass / kg
- 数量规则：实测发出配混料质量减去已记录退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`af-pefcr-v3-1-2025`

###### 聚氨酯鞋底体系（`polyurethane_sole_system`）

按供应状态记录声明的双组分或已配方聚氨酯体系，并在支持记录中保留组分。

- 选定流：鞋类鞋底用聚氨酯体系
- 流属性/单位：Mass / kg
- 数量规则：实测加入的配方体系质量减去已记录退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`af-pefcr-v3-1-2025`; `rusu-et-al-footwear-lca-2024`

###### 底部件成型用电（`bottom_forming_electricity`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：成型过程分表电量，或设备功率乘经核验运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型底部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`rusu-et-al-footwear-lca-2024`

###### 底部件成型用外购蒸汽（`bottom_forming_steam`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：可归属于底部件成型和固化的计量或发票蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格成型底部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`rusu-et-al-footwear-lca-2024`

###### 底部件成型冷却水（`bottom_forming_cooling_water`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：工艺冷却水
- 流属性/单位：Mass / kg
- 数量规则：进入前景过程的实测补充水，不含内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型底部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`rusu-et-al-footwear-lca-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成型天然橡胶外底（`formed_rubber_outsole`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：成型天然橡胶鞋外底
- 流属性/单位：Mass / kg
- 数量规则：转入总装的实测合格外底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每底部件成型批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`af-pefcr-v3-1-2025`

###### 成型 EVA 中底（`formed_eva_midsole`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：成型乙烯-醋酸乙烯酯鞋中底
- 流属性/单位：Mass / kg
- 数量规则：转入总装的实测合格中底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每底部件成型批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`af-pefcr-v3-1-2025`

###### 成型聚氨酯鞋底（`formed_polyurethane_sole`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：成型聚氨酯鞋底
- 流属性/单位：Mass / kg
- 数量规则：转入总装的实测合格鞋底质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每底部件成型批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`af-pefcr-v3-1-2025`; `rusu-et-al-footwear-lca-2024`

##### 废物流

###### 天然橡胶成型废料（`rubber_forming_scrap`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类天然橡胶成型废料
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型天然橡胶外底
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`af-pefcr-v3-1-2025`

###### EVA 成型废料（`eva_forming_scrap`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类乙烯-醋酸乙烯酯成型废料
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型 EVA 中底
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`af-pefcr-v3-1-2025`

###### 聚氨酯成型废料（`polyurethane_forming_scrap`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：聚氨酯鞋底成型废料
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型聚氨酯鞋底
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`af-pefcr-v3-1-2025`

###### 底部件成型废水（`bottom_forming_wastewater`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类底部件成型废水
- 流属性/单位：Mass / kg
- 数量规则：排往声明处理路线的实测废水，不含内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成型底部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bottom_forming_records`
- 来源：`rusu-et-al-footwear-lca-2024`

##### 基本流

### 过程：部件组合、最终装配、整理和检验（`final_assembly_finishing`）

#### 输入

##### 产品流

###### 总装用成型实木部件（`assembly_shaped_solid_wood_component`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：成型实木鞋类部件
- 流属性/单位：Mass / kg
- 数量规则：从木质部件制造接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每总装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 总装用成型层压木部件（`assembly_shaped_laminated_wood_component`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：成型层压木鞋类部件
- 流属性/单位：Mass / kg
- 数量规则：从木质部件制造接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每总装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 总装用制备完成皮革部件（`assembly_prepared_leather_component`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：制备完成的皮革鞋类部件
- 流属性/单位：Mass / kg
- 数量规则：从柔性部件制备接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每总装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`fao-forest-handicrafts-clogs`; `af-pefcr-v3-1-2025`

###### 总装用制备完成纺织鞋面（`assembly_prepared_textile_upper`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：制备完成的机织纺织鞋面
- 流属性/单位：Mass / kg
- 数量规则：从柔性部件制备接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每总装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`af-pefcr-v3-1-2025`

###### 总装用制备完成塑料鞋带（`assembly_prepared_plastic_strap`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：制备完成的塑料鞋带
- 流属性/单位：Mass / kg
- 数量规则：从柔性部件制备接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每总装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 总装用成型天然橡胶外底（`assembly_formed_rubber_outsole`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：成型天然橡胶鞋外底
- 流属性/单位：Mass / kg
- 数量规则：从底部件成型接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每总装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`af-pefcr-v3-1-2025`

###### 总装用成型 EVA 中底（`assembly_formed_eva_midsole`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：成型乙烯-醋酸乙烯酯鞋中底
- 流属性/单位：Mass / kg
- 数量规则：从底部件成型接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每总装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`af-pefcr-v3-1-2025`

###### 总装用成型聚氨酯鞋底（`assembly_formed_polyurethane_sole`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：成型聚氨酯鞋底
- 流属性/单位：Mass / kg
- 数量规则：从底部件成型接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每总装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`af-pefcr-v3-1-2025`; `rusu-et-al-footwear-lca-2024`

###### 钢制鞋钉（`steel_footwear_nails`）

木底或鞋身的机械紧固实际使用时单独记录钢钉。

- 选定流：钢制鞋钉
- 流属性/单位：Mass / kg
- 数量规则：实测发出钢钉质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`fao-forest-handicrafts-clogs`

###### 水性聚氨酯胶黏剂（`waterborne_polyurethane_adhesive`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类用水性聚氨酯胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：配方产品发出质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 溶剂型聚氨酯胶黏剂（`solventborne_polyurethane_adhesive`）

与水性胶黏剂分开记录，并保存供应商 VOC 组成。

- 选定流：鞋类用溶剂型聚氨酯胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：配方产品发出质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 丙酮清洗剂（`acetone_cleaner`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：丙酮
- 流属性/单位：Mass / kg
- 数量规则：实测发出丙酮质量减去退回未用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 乙酸乙酯清洗剂（`ethyl_acetate_cleaner`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：乙酸乙酯
- 流属性/单位：Mass / kg
- 数量规则：实测发出乙酸乙酯质量减去退回未用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 总装用电（`assembly_electricity`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：总装、整理和检验分表电量，或设备功率乘经核验运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`rusu-et-al-footwear-lca-2024`

###### 总装用外购热力（`assembly_purchased_heat`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：外购热力
- 流属性/单位：Energy / MJ
- 数量规则：可归属于胶黏剂活化、固化或其他声明装配热工序的计量或发票热力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`rusu-et-al-footwear-lca-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未包装成鞋（`unboxed_finished_footwear`）

检验合格并转入包装的成鞋按净质量称量。

- 选定流：未包装合格成鞋
- 流属性/单位：Mass / kg
- 数量规则：转入包装的实测合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每总装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`af-pefcr-v3-1-2025`

##### 废物流

###### 废水性聚氨酯胶黏剂（`waste_waterborne_polyurethane_adhesive`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：废鞋类用水性聚氨酯胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：转往声明处理路线的实测残余胶黏剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 废溶剂型聚氨酯胶黏剂（`waste_solventborne_polyurethane_adhesive`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：废鞋类用溶剂型聚氨酯胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：转往声明处理路线的实测残余胶黏剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 废丙酮（`waste_acetone`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：废丙酮
- 流属性/单位：Mass / kg
- 数量规则：转往声明处理或回收路线的实测丙酮废液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 废乙酸乙酯（`waste_ethyl_acetate`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：废乙酸乙酯
- 流属性/单位：Mass / kg
- 数量规则：转往声明处理或回收路线的实测乙酸乙酯废液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 缺陷成鞋（`defective_finished_footwear`）

仅记录离开返工循环并送往声明处置路线的缺陷成鞋。

- 选定流：缺陷成鞋废物
- 流属性/单位：Mass / kg
- 数量规则：送往声明处理路线的实测不可返工成鞋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`af-pefcr-v3-1-2025`

##### 基本流

###### 排入空气的丙酮（`acetone_to_air`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：排入空气的丙酮
- 流属性/单位：Mass / kg
- 数量规则：由丙酮输入、退回、产品保留、捕集、回收和废物的物料平衡计算，并与测量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_voc_records`
- 来源：`eu-ecolabel-footwear-2016`; `eu-sts-bref-2020`

###### 排入空气的乙酸乙酯（`ethyl_acetate_to_air`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：排入空气的乙酸乙酯
- 流属性/单位：Mass / kg
- 数量规则：由乙酸乙酯输入、退回、产品保留、捕集、回收和废物的物料平衡计算，并与测量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格未包装成鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_voc_records`
- 来源：`eu-ecolabel-footwear-2016`; `eu-sts-bref-2020`


### 过程：产品包装和工厂门放行（`packaging`）

#### 输入

##### 产品流

###### 包装用未包装成鞋（`packaging_unboxed_finished_footwear`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：未包装合格成鞋
- 流属性/单位：Mass / kg
- 数量规则：从最终装配接收的实测合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-v3-1-2025`

###### 瓦楞纸鞋盒（`corrugated_cardboard_shoebox`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类包装用瓦楞纸板鞋盒
- 流属性/单位：Mass / kg
- 数量规则：实测发出鞋盒质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-v3-1-2025`

###### 纤维素薄页纸（`cellulose_tissue_paper`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类包装用纤维素薄页纸
- 流属性/单位：Mass / kg
- 数量规则：实测发出薄页纸质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-v3-1-2025`

###### LDPE 包装薄膜（`ldpe_packaging_film`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类包装用低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：实测发出 LDPE 薄膜质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-v3-1-2025`

###### 纸质产品标签（`paper_product_label`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类包装用纸标签
- 流属性/单位：Mass / kg
- 数量规则：实测发出纸标签质量减去未使用退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成鞋净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-v3-1-2025`

###### 包装用电（`packaging_electricity`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：包装设备分表电量，或设备功率乘经核验运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成鞋净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`rusu-et-al-footwear-lca-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考成鞋输出（`reference_finished_footwear`）

这是唯一带 UUID 的清单输出；尽管包装部件在同一前景数据包中建模，其质量仍不计入参考输出。

- 选定流：木制鞋类，特殊鞋类及其他未另列明的鞋类 `e377f482-0635-4972-8954-9279707bfd7e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 验收成鞋净质量，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份基准（`identity_reference`）
- 来源：`un-cpc-v3-2025`

##### 废物流

###### 瓦楞纸包装废物（`cardboard_packaging_waste`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：瓦楞纸板鞋盒包装废物
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成鞋净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-v3-1-2025`

###### 薄页纸废物（`tissue_paper_waste`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类包装薄页纸废物
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测薄页纸质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成鞋净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-v3-1-2025`

###### LDPE 薄膜废物（`ldpe_film_waste`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类包装低密度聚乙烯薄膜废物
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测 LDPE 薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成鞋净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-v3-1-2025`

###### 纸标签废物（`paper_label_waste`）

该流仅在声明路线实际发生时作为一个原子交换记录，并按所列数量规则计量。

- 选定流：鞋类包装纸标签废物
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处理路线的实测纸标签质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成鞋净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`af-pefcr-v3-1-2025`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多产品设施和共享过程 | 优先以分表、批次记录、设备时间、材料追踪或过程细分避免分配。 | `eu-pef-2021` |
| `allocation_physical` | 无法细分的共享过程 | 使用可证明因果关系的物理量分配，如机器时间、实际能量需求、处理质量或占用生产时间；不得仅因方便而采用输出质量。 | `eu-pef-2021` |
| `allocation_economic_fallback` | 无适当物理因果关系的剩余共享过程 | 仅在物理关系不能代表因果时使用同时期净收入或其他有文件依据的经济关系，并进行敏感性检查。 | `eu-pef-2021` |
| `allocation_internal_rework` | 内部返工和可复用边角料 | 保持材料在前景系统内，不把内部循环当作第二产品；只对实际离开系统的废物或共产品建模。 | `eu-pef-2021` |
| `allocation_recovery` | 离开系统的可回收材料 | 报告门前废物流的实测质量和目的地；只有明确的下游回收约定支持时才计入避免负荷或替代信用。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_wood_component_records` | `wood_component_manufacturing` | 木材、清漆、电力、热力、合格部件、材料特定废物和木尘 | 接收/领退料记录、秤、含水率测量、分表、废物转移记录和排放记录 | batch_id; species; construction; moisture_state; issued_mass; returned_mass; accepted_output_mass; electricity; heat; varnish_id; varnish_mass; waste_id; waste_mass; dust_mass | 按批次和相同含水基准进行质量及能源核对 | kg; kWh; MJ | 每批次和仪表期间 | 代表性生产期间 | 所有纳入木质部件场址和受控分包商 | 各材料、清漆、电力、热力、废物和排放分别汇总；按合格部件和参考输出归一化 | 校准记录；供应商规格；含水记录；仪表覆盖；废物凭证；排放方法 |
| `cp_flexible_component_records` | `flexible_component_preparation` | 皮革、纺织品、塑料片材、聚酯线、电力、合格部件和各边角料 | 物料清单、领退料记录、模切和缝制批次单、秤、分表和废物转移记录 | batch_id; material_id; issued_mass; returned_mass; accepted_component_mass; electricity; offcut_id; offcut_mass; destination | 对每种材料进行批次输入、输出和废物核对 | kg; kWh | 每批次 | 代表性生产期间 | 所有纳入柔性部件场址和受控分包商 | 不同材料不得合并；按合格部件和参考输出归一化 | 供应商规格；校准；仪表覆盖；批次单；废物凭证 |
| `cp_bottom_forming_records` | `nonwood_bottom_forming` | 橡胶、EVA、聚氨酯体系、电力、蒸汽、冷却水、合格部件、各废料和废水 | 配方与加料单、秤、仪表、水量平衡和废物/废水转移记录 | batch_id; formulation_id; charge_mass; returned_mass; accepted_output_mass; scrap_mass; electricity; steam; make_up_water; wastewater_mass; destination | 按批次核对加料和输出，采用校准的各项仪表 | kg; kWh; MJ | 每批次和仪表期间 | 代表性生产期间 | 所有纳入成型场址 | 每种配混料和载能项分别记录；按合格部件和参考输出归一化 | 配方证书；校准；仪表覆盖；废水和废物凭证 |
| `cp_final_assembly_records` | `final_assembly_finishing` | 中间部件、鞋钉、各胶黏剂、各清洗剂、电力、热力、合格输出、各残余物和废鞋 | 物料清单、领退料台账、秤、仪表、化学品清单、检验和返工日志 | batch_id; model; component_id; component_mass; fastener_mass; chemical_id; issued_mass; returned_mass; residue_mass; electricity; heat; accepted_output_mass; reject_mass | 基于受控记录的批次材料和能源核对 | kg; kWh; MJ | 每批次 | 代表性生产期间 | 所有纳入装配和整理场址 | 各原子交换分别求和；共享电力热力按有文件依据的因果驱动分配；按合格未包装输出归一化 | BOM；SDS 和 VOC 含量；校准；仪表覆盖；检验和废物记录 |
| `cp_voc_records` | `wood_component_manufacturing`; `final_assembly_finishing` | 清漆、清洗剂和胶黏剂的具体 VOC 排放 | 供应商配方、化学品台账、捕集/回收记录和排气测量 | chemical_id; chemical_mass; voc_species; voc_fraction; returned_mass; recovered_mass; waste_mass; retained_mass; captured_mass; emitted_mass; measurement_method | 按物种物料平衡并与测量核对；每种排放的具名 VOC 建一个原子基本流行，不得使用通用 VOC 或 NMVOC 行 | kg | 每化学品批次和报告期间 | 与化学品消耗相同期间 | 所有排放场址和受控分包商 | 每种具名 VOC 单独计算并防止化学特定排放重叠 | SDS；适用时与 EN 14602 一致的计算文件；仪器记录；捕集和废物凭证 |
| `cp_packaging_records` | `packaging` | 未包装成鞋、瓦楞纸鞋盒、薄页纸、LDPE 薄膜、纸标签、电力和每种包装废物 | 包装 BOM、领退料记录、秤、分表、包装批次单和废物转移记录 | batch_id; footwear_net_mass; packaging_id; issued_mass; returned_mass; packed_count; electricity; waste_id; waste_mass; destination | 按包装部件进行批次核对，并与成鞋净质量分开 | kg; kWh | 每包装批次 | 代表性生产期间 | 所有纳入包装场址 | 每种包装材料和废物分别汇总；按 1 kg 成鞋净输出归一化 | 包装规格；校准；仪表覆盖；批次和废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 验收参考输出 | 归一化输出 = 验收成鞋净质量 / 验收成鞋净质量；缩放所有清单行，使参考输出恰为 1 kg | 验收成鞋净质量；清单总量 | 每 1 kg 参考成鞋的各交换 | `eu-pef-2021` |
| `calc_pair_to_mass` | 以双或件计的记录 | 总净质量 = 各尺码数量 × 同型号同尺码实测平均净质量之和，或采用已记录尺码组合 | 数量；型号；尺码；抽样质量 | kg 成鞋净质量 |  |
| `calc_material_incorporation` | 材料和化学品输入 | 消耗质量 = 发出质量 − 退回未用质量；消耗质量与进入产品、排放、回收质量、捕集残余物和废物核对 | 发出；退回；输出；排放；回收；残余物；废物 | 各原子材料交换 kg | `af-pefcr-v3-1-2025`; `eu-ecolabel-footwear-2016` |
| `calc_processing_loss` | 每种制造材料 | 加工损失率 = 同一含水和配方基准的实测材料特定废物 / 实测接收材料输入；报告实测值，不采用外部默认值 | 接收输入；材料特定废物 | 实测损失率和废物质量 | `af-pefcr-v3-1-2025` |
| `calc_energy_attribution` | 共享电力或热力仪表 | 归属能源 = 同期计量能源 × 批次因果驱动量 / 同期总驱动量 | 仪表总量；机器时间、分表份额或处理质量 | 分配到过程和批次的 kWh 或 MJ | `eu-pef-2021` |
| `calc_voc_mass_balance` | 每种含 VOC 配方产品 | 具名 VOC 排放 = 化学品输入 × 供应商质量分数 − 未用退回、产品保留、捕集、回收和废物中的具名 VOC；与直接测量核对 | 化学品领退；配方；保留、捕集、回收、废物和实测排放质量 | 每种具名 VOC 单独原子行的排空气 kg | `eu-ecolabel-footwear-2016`; `eu-sts-bref-2020` |
| `calc_mass_balance` | 每过程和报告期间 | 输入质量 + 期初在制品 = 验收产品 + 退料 + 期末库存 + 各废物输出 + 各实测质量排放；发布前调查各材料差异 | 原子材料输入输出；库存；排放 | 核对差异和处理记录 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和参考流 | 保存 CPC 29520 理由、型号规格、路线、必需限定信息、参考 UUID、Mass 属性、Units of mass 单位组和 kg 单位。 | 产品规格；分类记录；Tiangong 身份字段 |
| `dq_bom` | 材料和部件 | 至少覆盖产品质量 95% 的 BOM，并 100% 覆盖主要鞋面、鞋身、鞋底、衬里和金属件；识别剩余份额但不得把它作为聚合清单流。 | 已签署 BOM；供应商规格；质量核对；`af-pefcr-v3-1-2025` |
| `dq_route` | 过程选择 | 证明哪些条件过程和路线特定行适用；零值或省略行必须有未使用证据。 | 工艺路线单；作业指导书；设备和分包商清单 |
| `dq_temporal` | 所有前景记录 | 使用一致生产期间，并记录对结果有实质影响的停机、启动、换型、季节调湿和异常事件。 | 生产日历；仪表期间；异常日志 |
| `dq_chemical` | 胶黏剂、清洗剂和涂饰剂 | 保存每种产品的配方身份、VOC 分数、发出和退回质量、捕集或回收质量、废物质量及排放计算。 | SDS；供应商配方；化学品台账；排放和捕集记录；`eu-ecolabel-footwear-2016` |
| `dq_waste_destination` | 所有废物流 | 记录实测质量、废物身份、转移日期、目的地和处理或回收路线；不得从容器标签推断回收。 | 废物转移联单；承包商凭证；质量记录 |
| `dq_proxy` | 上游数据集 | 披露每个代理的地域、技术、时间和材料不匹配，并说明其为最接近可用数据集的理由。 | 数据集元数据；代理登记；`eu-pef-2021` |
| `dq_range_evidence` | 数量范围 | 不得从一个产品或场址推断经验范围。来源支持的经验范围至少需要两项独立且边界可比的原文及明确综合；否则只保留前景采集要求而不设范围。 | 来源审查记录；适用时的范围综合 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 若输出不是恰好 1 kg 不含包装的成鞋净质量，或未使用产品流 `e377f482-0635-4972-8954-9279707bfd7e`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，则拒绝。 | `un-cpc-v3-2025` |
| `validate_classification` | 产品身份 | 若未记录型号归入 CPC 29520 的理由及针对 CPC 293、294、29510、29600 和父类排除项的核查，则拒绝。 | `un-cpc-v3-2025` |
| `validate_route_completeness` | 过程图 | 若适用的木质、柔性部件、非木质底部、装配、整理、检验、返工或包装操作被省略，或条件过程在无路线证据时标为不适用，则拒绝。 | `af-pefcr-v3-1-2025`; `fao-forest-handicrafts-clogs` |
| `validate_atomic_flows` | 过程清单 | 若任何选定流合并材料、电力与热力、替代燃料、包装部件、废物流或基本流排放，则拒绝；每行必须保持一个物理或化学特定交换。 |  |
| `validate_bom_coverage` | 物料清单 | 若 BOM 覆盖低于产品质量 95%、遗漏主要部件，或把未分类剩余质量作为复数或通用清单流，则拒绝。 | `af-pefcr-v3-1-2025` |
| `validate_mass_balance` | 材料转化 | 在一致含水率和配方基准上计入退回输入、验收输出、库存变化、每个废物流和实测质量排放后，若存在未解释的材料特定差异，则拒绝。 | `eu-pef-2021` |
| `validate_energy_separation` | 能源清单 | 若电力、蒸汽或外购热力被合并，或换算不能追溯至原始仪表、发票和换算系数，则拒绝。 | `eu-pef-2021`; `rusu-et-al-footwear-lca-2024` |
| `validate_voc_accounting` | 胶黏剂、清洗剂、清漆和空气排放 | 拒绝通用 VOC/NMVOC 排放行以及丙酮、乙酸乙酯与其他具名 VOC 的重复计量；要求逐一核对输入、退回、保留、捕集、回收、废物和排放。 | `eu-ecolabel-footwear-2016`; `eu-sts-bref-2020` |
| `validate_packaging` | 包装 | 若成鞋净质量包含包装，或瓦楞纸鞋盒、薄页纸、LDPE 薄膜、纸标签和其他实际包装部件被合并，则拒绝。 | `af-pefcr-v3-1-2025` |
| `validate_ranges` | 数量范围 | 拒绝下限等于上限的伪范围或从单一案例复制的经验范围；每个范围必须具有声明证据层级和来源综合。 |  |
| `validate_allocation` | 共享操作和回收 | 拒绝未记录分配、无因果依据的任意质量分配，以及与声明下游约定不一致的前景回收信用。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 29520 鞋类生产的产品特定工厂门前景数据包 |
| downstream_use | 当路线、地域、时间和材料组成具有充分代表性且已披露时，可作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 构建相同声明产品路线的 process 和 lifecyclemodel 数据集；经明确代表性审查的供应商特定或情景研究 |
| excluded_use | 自动用于其他 CPC 子类鞋类；比较功能、性能、寿命或路线不同的产品；本工厂门数据集未建模的使用或寿命终止声明；场址数据必需时替代原始记录 |
| required_metadata | 规范 PCR id；CPC 理由；型号和预期功能；路线；必需限定信息；场址和分包商；期间；地域；BOM 覆盖；木材树种和含水状态；化学品配方；分配；废物目的地；上游数据集版本及代理；包装构成 |
| required_quality_disclosure | 前景覆盖；仪表和秤覆盖；件数到质量抽样；BOM 剩余份额；条件过程决定；数据缺口；代理代表性；物料平衡残差；VOC 计算依据；未解决 UUID；范围证据缺口；审查状态 |
| update_trigger | 对清单或解释有实质影响的材料、供应商、配方、过程路线、设备、能源来源、分包商、包装、地域、法规、Tiangong 身份或证据变化 |

## 11. 数据源

| Source id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | `official_guidance` | 联合国统计司，Central Product Classification Version 3.0，结构和解释性说明，CPC 29520，https://unstats.un.org/unsd/classifications/Econ/cpc（检索于 2026-08-20） | 精确产品类别身份、层级、范围排除和参考产品校验 |
| `af-pefcr-v3-1-2025` | `standard` | Technical Secretariat, Product Environmental Footprint Category Rules (PEFCR): Apparel and Footwear, Version 3.1, 29 April 2025, https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/（检索于 2026-08-20） | 鞋类部件制造和装配分解、路线差异、BOM 和装配损耗数据、制造废物、包装拆分及数据质量 |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-20） | 系统边界、企业特定数据、数据质量、分配层级、截断纪律和回收约定 |
| `eu-ecolabel-footwear-2016` | `standard` | Commission Decision (EU) 2016/1349 establishing ecological criteria for the award of the EU Ecolabel for footwear, http://data.europa.eu/eli/dec/2016/1349/oj（检索于 2026-08-20） | 鞋类装配定义、外购皮革/胶黏剂/涂饰剂记录、化学配方证据、VOC 清单和核验 |
| `fao-forest-handicrafts-clogs` | `official_guidance` | FAO, Forest-based Small-scale Enterprises in Asia: Case Study Three, Forest-based Handicrafts in Indonesia, section 5.4.2.3 Umbrellas and Clogs, https://www.fao.org/4/x5860e/x5860e06.htm（检索于 2026-08-20） | 木屐过程分解：木块切割、雕刻、砂磨、涂清漆、皮革/塑料鞋带、钢钉、胶黏剂和最终装配 |
| `eu-sts-bref-2020` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document on Surface Treatment Using Organic Solvents including Preservation of Wood and Wood Products with Chemicals, 2020, https://eippcb.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation（检索于 2026-08-20） | 溶剂涂饰边界、空气排放、水和能源记录、捕集及物料平衡要求 |
| `rusu-et-al-footwear-lca-2024` | `literature` | Rusu et al., Environmental Impact of Footwear Using Life Cycle Assessment—Case Study of Professional Footwear, Sustainability 16(14), 6094, 2024, https://doi.org/10.3390/su16146094 | 同行评审全文支持材料制备、部件加工、装配、电力、热力、水、空气排放、废水、生产废物和包装过程分解；不用于数量范围 |
