---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-man-made-filament-yarn-containing-85-or-more-by-weight-of-such-filaments
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含人造长丝重量达85%或以上的其他人造长丝机织织物

## 1. 范围与适用性

本 PCR 适用于在纺织纤维质量中人造长丝纱含量至少为 85%、且产品身份符合下述语义范围的机织织物工厂大门生产。它支持生产坯布、匹染、印花或其他整理状态织物的前景数据包，前提是声明交付市场状态以及实际采用的每项处理。

前景边界始于人造长丝纱及其他外购投入进入织物生产场址。边界包括纱线准备、织造、检验和包装；当浆纱、退浆、洗涤、精练、漂白、染色、印花、涂层、功能整理、热处理以及场内废气或废水处理属于所声明生产路线时，也必须纳入。上游纤维及长丝纱制造以供应商特定数据集或适当的次级数据集表示，不在本前景系统内重复构建。

本 PCR 不包括针织或簇绒织物、人造长丝比例低于 85% 的织物、短纤维占主要成分的织物，以及由更具体类别管理的帘子布、高强力纱织物、绒类织物、窄幅织物或特殊涂层/层压织物，也不包括制成品、服装以及下游裁剪和缝制。产品分类必须依据成分、织物结构和交付市场状态确认，不得仅从目录路径推断。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-man-made-filament-yarn-containing-85-or-more-by-weight-of-such-filaments |
| classification_refs | CPC 3.0：26720（精确分类语境；映射接受状态另行治理） |
| covered_products | 纺织纤维质量中人造长丝含量至少为 85% 的机织织物，包括仍属于本产品类别、且已声明的坯布、染色、印花或整理状态 |
| excluded_products | 针织或簇绒织物；低于 85% 阈值的织物；短纤维占主要成分的织物；帘子布、高强力纱、绒类、窄幅或另行分类的特殊织物；制成品及服装 |
| representative_product | 满足所声明成分、织法、单位面积质量、幅宽、颜色和整理规格的可销售人造长丝机织织物卷装产品 |
| production_route | 人造长丝纱接收 -> 纱线准备及可选浆纱 -> 织造 -> 条件性湿法前处理、着色、印花、整理及热处理 -> 检验和包装 |
| market_state | 声明交付状态的工厂大门织物，通常成卷包装；必须说明含湿/调湿状态、涂层或整理、有效幅宽以及是否包括包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为后续转换为纺织产品提供以人造长丝纱为主要原料的机织织物 |
| How much | 工厂大门处 1 kg 净合格织物 |
| How well | 满足所声明纤维成分（人造长丝至少 85%）、织物结构、单位面积质量、有效幅宽、颜色/印花和整理规格 |
| How long or cycle | 完成一个制造批次或生产周期直至工厂大门放行；不声明使用寿命性能 |
| reference_flow_link | 参考流是实现功能单位所需的合格可销售织物净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格织物输出 |
| 参考产品流 | 含人造长丝重量达85%或85%以上的其他人造长丝机织织物 `6604db91-24a3-43c8-aeec-8384210e643f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 人造长丝聚合物或聚合物组合；按质量计的纺织纤维成分；织物组织；单位面积质量；有效幅宽；坯布/染色/印花状态；整理和热处理路线；涂层或层压状态；调湿基准；生产地域和期间；是否包括包装 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按所声明调湿程序报告 1 kg 净合格织物；卷芯、托盘、包膜及其他包装不得计入参考产品质量，应单独编制清单。 |
| `composition_threshold` | 纤维成分 | 质量分数 | 纺织纤维质量百分比 | 证明人造长丝至少占纺织纤维质量的 85%；分母不包括可移除包装、非纺织五金件和过程水分。 |
| `area_mass_conversion` | 织物长度或面积记录 | 质量和面积 | kg、m2、g/m2 | 仅使用批次特定的有效幅宽、长度和经调湿的单位面积质量测量值，将面积生产记录换算为质量；保留测量值及公式。 |
| `resource_normalisation` | 材料、能源、水、废物和排放记录 | 相关实测属性 | kg、m3、kWh、MJ 或实测排放单位 | 从同一生产期间的数据将每项数量归一化到 1 kg 合格织物；扣除有记录的内部再用或回收，但不得形成负的外购量。 |
| `wet_process_basis` | 水和处理液 | 体积和纺织品质量 | m3 和 kg | 分别记录总取水、单独计量的内部再用/回用和净外部取水；将批次处理液测量与被处理纺织品质量关联。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 人造长丝纱及其他外购投入进入织物生产场址，并声明供应商、成分、质量、含湿/调湿基准和上游数据集引用 |
| starting_condition_role | 进入前景织物制造系统的上游产品投入 |
| product_classification_scope | 按纺织纤维质量计人造长丝至少占 85%、且仍属于所述语义类别的机织织物 |
| recursive_input_rule | 如果本类别织物作为投入跨越前景边界，应仅作为一个产品投入记录并关联上游数据集；不得在当前前景包内递归复制其内含织物制造清单 |
| upstream_dataset_requirement | 优先使用供应商特定数据集；否则为长丝纱、化学品、电力、燃料、供水、运输、包装和场外处理使用地域、技术和时间上具有代表性的次级数据集 |
| disclosure | 声明起点、场址配置、产品状态、纳入和省略的条件性过程、上游数据集选择、内部再用、排放控制配置、废水去向、分配方法和包装处理 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 前景过程边界 | 纳入从纱线接收到合格织物放行的全部场内操作；当可选的湿法、着色、印花、整理、涂层或热处理用于所声明产品时，必须纳入。 | eu-textiles-bat-2022-2508 |
| `sb_inputs_outputs` | 前景清单 | 在可计量处按过程核算纺织材料、过程化学品、水、能源、废水、废气、回收材料、废物和直接排放。 | eu-textiles-bat-2022-2508 |
| `sb_upstream` | 外购投入 | 通过关联上游数据集表示所声明起始条件之前的负荷；不得仅因某项材料的制造发生在前景场址外而省略该投入。 | eu-pef-2021-2279 |
| `sb_treatment` | 废水、废气和固体废物 | 场内处理应纳入其实际发生的过程；否则记录进入外部处理数据集的未经处理或预处理废物流，并防止同一处理重复计算。 | eu-textiles-bat-2022-2508 |
| `sb_capital_goods` | 基础设施和设备 | 默认工厂大门前景清单不包括资本品，除非研究目标、管理方案或重要性评估要求纳入；必须披露该选择。 | eu-pef-2021-2279 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p01_yarn_preparation_weaving` | 纱线准备和织造 | required | 始终纳入纱线处理、整经、织造，以及用于所声明织物的任何浆纱操作 | 将外购长丝纱转换为机织坯布 | 离开织造过程的坯布 kg |
| `p02_wet_pretreatment` | 湿法前处理 | conditional | 实施退浆、洗涤、精练、漂白或其他湿法前处理时纳入 | 为销售或后续着色/整理准备织物 | 前处理织物输出 kg |
| `p03_coloration_finishing` | 着色、印花和整理 | conditional | 实际采用的每项染色、印花、涂层、功能整理、烘干、焙烘、热定型或热处理均须纳入 | 赋予所声明的颜色、外观、手感或功能属性 | 处理后织物输出 kg |
| `p04_inspection_packing` | 最终检验和包装 | required | 始终纳入最终质量分级、卷装、净质量确定和包装 | 放行所声明的工厂大门参考产品 | 1 kg 合格织物输出 |

### 过程：纱线准备和织造（`p01_yarn_preparation_weaving`）

#### 输入

##### 产品流

###### 聚酯长丝纱（`polyester_filament_yarn_input`）

将外购聚酯经纱或纬纱作为一个聚合物特定投入记录，不得与其他纱线聚合物合并质量。

- 选定流：聚酯长丝纱
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：每个含聚酯产品批次均纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：经库存变化和所声明调湿基准修正的实测收货量或生产领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：eu-textiles-bat-2022-2508

###### 聚酰胺长丝纱（`polyamide_filament_yarn_input`）

将外购聚酰胺长丝纱与聚酯及再生纤维素纱线分别记录。

- 选定流：聚酰胺长丝纱
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：每个含聚酰胺产品批次均纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：经库存变化和所声明调湿基准修正的实测收货量或生产领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：eu-textiles-bat-2022-2508

###### 粘胶人造丝长丝纱（`viscose_filament_yarn_input`）

将外购粘胶人造丝长丝纱与合成长丝纱分别记录。

- 选定流：粘胶人造丝长丝纱
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：每个含粘胶产品批次均纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：经库存变化和所声明调湿基准修正的实测收货量或生产领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：eu-textiles-bat-2022-2508

所声明织物含有任何其他人造长丝聚合物时，应为其新增单独的原子投入行和单独的废物流行；不得把不同聚合物身份合并为一个交换。

###### 聚乙烯醇经纱浆料（`polyvinyl_alcohol_size_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：聚乙烯醇经纱浆料
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅在场内投加时纳入；其他浆料化学品须各设原子行
- 流属性/单位：质量 / kg 商品
- 数量规则：领用质量减退库质量，并保留固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_use`
- 来源：eu-textiles-bat-2022-2508

###### 浆纱或加湿用水（`sizing_water_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：浆纱和加湿用过程水
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：水跨越该过程边界时纳入，否则省略
- 流属性/单位：体积 / m3
- 数量规则：外部总进水计量值减去单独计量的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：eu-textiles-bat-2022-2508

###### 纱线准备和织造用电（`weaving_electricity_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：场址供电
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：使用电驱设备时必需
- 流属性/单位：能量 / kWh
- 数量规则：过程分表合计，或按实测功率和运行时间形成的设备级计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：eu-textiles-bat-2022-2508

###### 浆纱外购蒸汽（`sizing_steam_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织浆纱用外购蒸汽
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅使用外购蒸汽时纳入，否则省略
- 流属性/单位：能量 / MJ
- 数量规则：按声明的压力和凝结水回收基准计量供应蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：eu-textiles-bat-2022-2508

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机织坯布（`greige_fabric_output`）

记录后续湿法或整理操作之前，经织造验收的织物调湿质量。

- 选定流：人造长丝机织坯布
- 流属性/单位：质量 / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass_quality`
- 来源：eu-textiles-bat-2022-2508

##### 废物流

###### 废聚酯长丝纱（`polyester_yarn_waste`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：废聚酯长丝纱
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：产生时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：按处理去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 废聚酰胺长丝纱（`polyamide_yarn_waste`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：废聚酰胺长丝纱
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：产生时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：按处理去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 废粘胶人造丝长丝纱（`viscose_yarn_waste`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：废粘胶人造丝长丝纱
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：产生时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：按处理去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 机织织物切边（`fabric_edge_offcuts`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：人造长丝机织织物切边
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：产生时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：按处理去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：eu-textiles-bat-2022-2508

##### 基本流

###### 织造颗粒物排放（`weaving_particulate_air`）

仅当直接颗粒物跨越场址边界时记录；被捕集粉尘应记录为废物流。

- 选定流：排放至空气的颗粒物，实测粒径级别
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅在场址直接排放经测量时纳入；被捕集粉尘作为单独废物流
- 流属性/单位：质量 / kg
- 数量规则：实测排放量，或排气流量乘以实测浓度及运行时间的计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开织造过程的坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_measurements`
- 来源：eu-textiles-bat-2022-2508

### 过程：湿法前处理（`p02_wet_pretreatment`）

#### 输入

##### 产品流

###### 进入湿法前处理的坯布（`pretreatment_fabric_input`）

记录进入每个湿法操作的坯布或部分处理织物，并保留与前一过程的关联。

- 选定流：人造长丝机织坯布
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 流属性/单位：质量 / kg
- 数量规则：实测调湿投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：eu-textiles-bat-2022-2508

###### 湿法前处理用水（`pretreatment_water_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织湿法前处理用过程水
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：使用外部供水时纳入，否则省略
- 流属性/单位：体积 / m3
- 数量规则：外部总进水计量值减去单独计量的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：eu-textiles-bat-2022-2508

###### 精练用氢氧化钠（`sodium_hydroxide_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织精练用氢氧化钠溶液
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅投加时纳入，否则省略
- 流属性/单位：质量 / kg 溶液
- 数量规则：实测配方领用量，并保留溶液浓度和活性质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：eu-textiles-bat-2022-2508

###### 漂白用过氧化氢（`hydrogen_peroxide_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织漂白用过氧化氢溶液
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅投加时纳入，否则省略
- 流属性/单位：质量 / kg 溶液
- 数量规则：实测配方领用量，并保留溶液浓度和活性质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：eu-textiles-bat-2022-2508

###### 非离子纺织洗涤剂（`pretreatment_detergent_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：非离子纺织洗涤剂
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅投加时纳入；其他商品化学品各设原子行
- 流属性/单位：质量 / kg 商品
- 数量规则：实测配方领用量，并保留活性成分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：eu-textiles-bat-2022-2508

###### 湿法前处理用电（`pretreatment_electricity_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：场址供电
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：使用电驱设备时纳入
- 流属性/单位：能量 / kWh
- 数量规则：过程分表合计或有记录的设备级计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：eu-textiles-bat-2022-2508

###### 湿法前处理外购蒸汽（`pretreatment_steam_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织湿法前处理用外购蒸汽
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅使用外购蒸汽时纳入，否则省略
- 流属性/单位：能量 / MJ
- 数量规则：按声明的压力和凝结水回收基准计量供应蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：eu-textiles-bat-2022-2508

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 前处理织物（`pretreated_fabric_output`）

记录经前处理验收的织物调湿质量和处理状态。

- 选定流：前处理后人造长丝机织织物
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 流属性/单位：质量 / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass_quality`
- 来源：eu-textiles-bat-2022-2508

##### 废物流

###### 前处理废水（`pretreatment_wastewater`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织前处理废水
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：废水离开过程进入场内或外部处理时纳入
- 流属性/单位：体积 / m3
- 数量规则：进入下一处理边界前的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 前处理污泥（`pretreatment_sludge`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：按报告含水率计的纺织前处理污泥
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：污泥离开过程边界时纳入
- 流属性/单位：质量 / kg 湿污泥
- 数量规则：按处理去向实测质量并保留含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste_records`
- 来源：eu-textiles-bat-2022-2508

##### 基本流

###### 排放至水体的化学需氧量（`pretreatment_cod_water`）

当处理后废水或有组织废气离开场址时，用实测流量和浓度计算相关污染物质量；不得重复计入已包含于送往外部处理废水中的污染物。

- 选定流：排放至水体的化学需氧量
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅在处理后废水由场址直接排放时纳入；送外部处理废水中所含污染物不得重复记录
- 流属性/单位：质量 / kg
- 数量规则：对应运行期间的实测流量乘以代表性实测浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 前处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_measurements`
- 来源：eu-textiles-bat-2022-2508

### 过程：着色、印花和整理（`p03_coloration_finishing`）

#### 输入

##### 产品流

###### 进入着色和整理的织物（`finishing_fabric_input`）

记录进入每项适用着色、印花、涂层、整理或热处理序列的织物质量和先前处理状态。

- 选定流：进入着色和整理的人造长丝机织织物
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 流属性/单位：质量 / kg
- 数量规则：实测调湿投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：eu-textiles-bat-2022-2508

###### 着色和整理用水（`finishing_water_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织着色和整理用过程水
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：使用外部供水时纳入，否则省略
- 流属性/单位：体积 / m3
- 数量规则：外部总进水计量值减去单独计量的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_recipe_energy`
- 来源：eu-textiles-bat-2022-2508

###### 分散染料配方（`disperse_dye_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：所声明的商品分散染料配方
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅使用该配方的批次纳入；每种配方各设原子行
- 流属性/单位：质量 / kg 商品
- 数量规则：实测配方领用量，并保留活性成分和染料索引号
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_recipe_energy`
- 来源：eu-textiles-bat-2022-2508

###### 酸性染料配方（`acid_dye_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：所声明的商品酸性染料配方
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅使用该配方的批次纳入；每种配方各设原子行
- 流属性/单位：质量 / kg 商品
- 数量规则：实测配方领用量，并保留活性成分和染料索引号
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_recipe_energy`
- 来源：eu-textiles-bat-2022-2508

###### 活性染料配方（`reactive_dye_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：所声明的商品活性染料配方
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅使用该配方的批次纳入；每种配方各设原子行
- 流属性/单位：质量 / kg 商品
- 数量规则：实测配方领用量，并保留活性成分和染料索引号
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_recipe_energy`
- 来源：eu-textiles-bat-2022-2508

###### 纺织颜料配方（`pigment_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：所声明的商品纺织颜料配方
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅颜料印花或颜料整理批次纳入；每种配方各设原子行
- 流属性/单位：质量 / kg 商品
- 数量规则：实测配方领用量，并保留活性成分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_recipe_energy`
- 来源：eu-textiles-bat-2022-2508

###### 丙烯酸纺织黏合剂（`acrylic_binder_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织印花用丙烯酸黏合剂
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅投加时纳入，否则省略
- 流属性/单位：质量 / kg 商品
- 数量规则：实测配方领用量，并保留固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_recipe_energy`
- 来源：eu-textiles-bat-2022-2508

###### 有机硅纺织柔软剂（`silicone_softener_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织整理用有机硅柔软剂
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅投加时纳入，否则省略
- 流属性/单位：质量 / kg 商品
- 数量规则：实测配方领用量，并保留活性成分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_recipe_energy`
- 来源：eu-textiles-bat-2022-2508

###### 着色和整理用电（`finishing_electricity_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：场址供电
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：使用电驱设备时纳入
- 流属性/单位：能量 / kWh
- 数量规则：过程分表合计或有记录的设备级计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：eu-textiles-bat-2022-2508

###### 着色和整理外购蒸汽（`finishing_steam_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织着色和整理用外购蒸汽
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅使用外购蒸汽时纳入，否则省略
- 流属性/单位：能量 / MJ
- 数量规则：按声明的压力和凝结水回收基准计量供应蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：eu-textiles-bat-2022-2508

###### 直接热处理用天然气（`finishing_natural_gas_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：场内纺织整理设备燃烧的天然气
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅在边界内燃烧天然气时纳入，否则省略
- 流属性/单位：能量 / MJ 低位热值
- 数量规则：实测耗气量按供应商低位热值记录换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_recipe_energy`
- 来源：eu-textiles-bat-2022-2508

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 处理后织物（`treated_fabric_output`）

记录合格输出质量以及达到的颜色、印花、整理、涂层和热定型状态。

- 选定流：处理后人造长丝机织织物
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 流属性/单位：质量 / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass_quality`
- 来源：eu-textiles-bat-2022-2508

##### 废物流

###### 整理废水（`finishing_wastewater`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织着色和整理废水
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：废水离开过程进入场内或外部处理时纳入
- 流属性/单位：体积 / m3
- 数量规则：进入下一处理边界前的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 整理污泥（`finishing_sludge`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：按报告含水率计的纺织着色和整理污泥
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：污泥离开过程边界时纳入
- 流属性/单位：质量 / kg 湿污泥
- 数量规则：按处理去向实测质量并保留含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 废印花色浆（`spent_printing_paste`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：废纺织印花色浆
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：印花色浆被废弃时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：按处理去向实测废弃色浆质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_waste_records`
- 来源：eu-textiles-bat-2022-2508

##### 基本流

###### 甲醛排放至空气（`formaldehyde_air`）

表征相关废水污染物和有组织空气排放；当工艺路线和化学品清单表明相关时，包括 TVOC、甲醛、氨、粉尘或燃烧污染物。

- 选定流：排放至空气的甲醛
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅在场址直接排放经测量时纳入
- 流属性/单位：质量 / kg
- 数量规则：实测质量排放量，或排气/废水流量乘以实测浓度及相应运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_measurements`
- 来源：eu-textiles-bat-2022-2508

###### 氨排放至空气（`ammonia_air`）

当所声明配方和实测排放点相关时，将氨作为单独基本交换记录。

- 选定流：排放至空气的氨
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：仅在场址直接排放经测量时纳入
- 流属性/单位：质量 / kg
- 数量规则：实测排气流量乘以氨浓度和相应运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_measurements`
- 来源：eu-textiles-bat-2022-2508

### 过程：最终检验和包装（`p04_inspection_packing`）

#### 输入

##### 产品流

###### 进入最终检验的织物（`inspection_fabric_input`）

记录从实际最后上游步骤进入最终检验的织物调湿质量。

- 选定流：处于所声明交付状态的人造长丝机织织物
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 流属性/单位：质量 / kg
- 数量规则：实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass_quality`
- 来源：eu-textiles-bat-2022-2508

###### 纸板卷芯（`paperboard_core_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织卷装用纸板卷芯
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：使用时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：归属于放行织物的实测物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物，包装质量不计入参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：eu-textiles-bat-2022-2508

###### 聚乙烯卷装包膜（`polyethylene_wrap_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织卷装用聚乙烯薄膜
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：使用时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：归属于放行织物的实测物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物，包装质量不计入参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：eu-textiles-bat-2022-2508

###### 聚丙烯包装带（`polypropylene_strapping_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织卷装用聚丙烯包装带
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：使用时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：归属于放行织物的实测物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物，包装质量不计入参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：eu-textiles-bat-2022-2508

###### 木托盘（`wooden_pallet_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：纺织卷装发运用木托盘
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：纳入一次性托盘或按使用次数分摊的可重复使用托盘，否则省略
- 流属性/单位：质量 / kg
- 数量规则：实测托盘质量乘以有记录的归属使用份额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物，包装质量不计入参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：eu-textiles-bat-2022-2508

###### 检验和包装用电（`packing_electricity_input`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：场址供电
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：使用电驱检验或包装设备时纳入
- 流属性/单位：能量 / kWh
- 数量规则：分表计量值或有记录的设备级计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：eu-textiles-bat-2022-2508

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格工厂大门机织织物（`reference_fabric_output`）

这是最终质量验收后的定量参考输出。

- 选定流：含人造长丝重量达85%或85%以上的其他人造长丝机织织物 `6604db91-24a3-43c8-aeec-8384210e643f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净合格织物
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 不合格机织织物（`rejected_fabric_waste`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：不合格 CPC 26720 机织织物
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：不合格织物作为废物离开过程时纳入
- 流属性/单位：质量 / kg
- 数量规则：按去向实测不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 废纸板卷芯（`waste_paperboard_core`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：废纺织卷装纸板卷芯
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：废弃时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 废聚乙烯卷装包膜（`waste_polyethylene_wrap`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：废纺织卷装聚乙烯包膜
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：废弃时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 废聚丙烯包装带（`waste_polypropylene_strapping`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：废纺织卷装聚丙烯包装带
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：废弃时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：eu-textiles-bat-2022-2508

###### 废木托盘（`waste_wooden_pallet`）

将该交换作为独立的原子清单行记录，并遵循下列逐行适用性、数量、身份与去向规则。

- 选定流：废纺织卷装木托盘
- UUID 状态：未解决——见 manifest 中对应 row_id 的拒绝原因
- 适用性：托盘在边界内废弃时纳入，否则省略
- 流属性/单位：质量 / kg
- 数量规则：按去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：eu-textiles-bat-2022-2508

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | 多输出和共享过程 | 优先通过单独计量或其他方式细分可归属于所声明织物的操作以避免分配；仅在纳入并一致报告额外功能时，评估有依据的系统扩展。 | eu-pef-2021-2279 |
| `alloc_physical_relation` | 不可分离的共享投入和输出 | 如果无法细分或进行有依据的系统扩展，则采用反映因果关系且有记录的物理关系进行分配，例如调湿质量、机器时间或实测能量需求。 | eu-pef-2021-2279 |
| `alloc_other_relation_last` | 缺乏可辩护物理关系的共享负荷 | 仅在最后手段下使用相对经济价值等其他关系；披露产品、价格、期间、币种、因子计算和敏感性。 | eu-pef-2021-2279 |
| `alloc_internal_reuse` | 内部再用的水、热、浆料或织物 | 分别记录总产生量或总投入量及内部再用量；仅核算净外部投入和最终输出，不在同一前景系统内给予避免产品信用。 | eu-textiles-bat-2022-2508 |
| `alloc_waste_and_recovery` | 外运残余物和回收材料 | 将废物处理与任何回收材料输出分开。仅在主管研究方法要求时应用信用或生命周期末端公式，并披露方法和参数。 | eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | p01_yarn_preparation_weaving; p02_wet_pretreatment; p03_coloration_finishing | 纱线和中间织物投入 | 地磅、秤、ERP 领退料、供应商记录 | batch_id; material_id; polymer; filament_share; gross_mass; tare; conditioned_mass; moisture_basis; return_mass | 经校准称量，并与领用和退回数量核对 | kg | 每次收货和批次转移 | 具有代表性的生产期间，通常至少连续 12 个月，或有依据的生产周期 | 生产所声明产品的所有场址和生产线 | 按过程和产品路线合计净调湿质量，再除以合格输出质量 | 校准证书；供应商成分声明；批次核对 |
| `cp_chemical_use` | p01_yarn_preparation_weaving | 浆料和织造助剂 | 配方、加料记录、库存领退料 | batch_id; chemical_name; supplier; active_content; issued_mass; returned_mass; recovered_mass | 对每项领用和退回化学品进行称量或计量 | kg | 每批或连续生产周期 | 与参考输出相同期间 | 范围内所有浆纱和织造生产线 | 净外部化学品使用量等于领用量减退库量和经核实的内部回收量 | 秤/计量器校准；安全数据表；配方批准 |
| `cp_energy_records` | all processes | 电力、燃料、蒸汽、压缩空气 | 分表、燃料发票、锅炉或公用工程日志 | meter_id; process_id; opening; closing; unit; allocation_driver; operating_hours; recovered_energy | 优先直接过程计量；共享仪表仅使用有记录的工程分配 | kWh 或 MJ | 连续或按批次，按月汇总 | 与参考输出相同期间 | 所有纳入的生产和支持设备 | 按过程合计净外购能源；单独保留回收能源 | 仪表校准；发票；分配工作表；能源审计 |
| `cp_wet_process_records` | p02_wet_pretreatment | 水、处理液、化学品和能源 | 批次控制器、流量计、配方和仪表日志 | batch_id; textile_mass; water_intake; reused_water; liquor_volume; pH; temperature; chemical_dose; electricity; steam; fuel | 与每个过程步骤关联的自动记录或经校准仪表 | m3、kg、kWh、MJ | 每批或连续生产周期 | 与参考输出相同期间 | 每条纳入的湿法处理生产线 | 分别汇总总量和再用量，再将净外部使用量归一化到合格输出 | 流量计校准；配方日志；水平衡；过程控制导出 |
| `cp_finishing_recipe_energy` | p03_coloration_finishing | 染料、整理剂、水和热能 | 配方、加料、流量计、能源表、机器日志 | batch_id; chemical_id; active_content; dose; water; electricity; steam; fuel; line_speed; temperature; residence_time; recovered_heat | 与处理路线关联的实测配方领用量和公用工程计量 | kg、m3、kWh、MJ | 每批或生产周期 | 与参考输出相同期间 | 每条纳入的着色、印花、涂层、整理和热处理生产线 | 按所声明路线汇总并归一化到合格处理后织物 | 校准；配方批准；机器日志；能源审计 |
| `cp_output_mass_quality` | all processes | 中间产品和合格产品输出 | 经校准秤和质量放行记录 | batch_id; input_mass; output_mass; width; length; mass_per_area; moisture_basis; defect_grade; accepted_mass; rejected_mass | 称量输出，并使用实测幅宽和单位面积质量核对面积记录 | kg、m、m2、g/m2 | 每批或每卷 | 与参考输出相同期间 | 所有产品线和检验工位 | 按状态合计合格调湿质量；分离不合格品和库存变化 | 秤校准；实验室测试；检验放行；质量核对 |
| `cp_wastewater_waste_records` | p02_wet_pretreatment; p03_coloration_finishing | 废水、污泥、废处理液和固体废物 | 流量计、转移单、废物联单、秤 | process_id; stream_id; volume; mass; destination; hazardous_status; reused_amount; treatment_route | 按物流计量废水，并称量废物转移或记录转移凭证 | m3 或 kg | 每批排放；连续排放时按月汇总 | 与参考输出相同期间 | 所有纳入的过程和处理区域 | 按去向汇总每股物流；不得将内部再用与最终排放合并 | 流量计校准；实验室报告；废物联单；处理发票 |
| `cp_emission_measurements` | p01_yarn_preparation_weaving; p02_wet_pretreatment; p03_coloration_finishing | 直接空气或水体排放 | 烟道/废水测量和运行日志 | source_id; pollutant; concentration; flow_rate; sampling_time; operating_time; method; detection_limit; abatement_state | 采用适用的公认标准方法和代表性运行工况 | mg/Nm3、mg/L、Nm3/h、m3、h，最终换算为 kg | 按许可证和污染源相关性；至少在过程或配方发生重大变化时 | 与参考输出相同期间 | 每个相关场内排放点 | 计算匹配运行期间的污染物质量并归一化到过程输出 | 认可实验室报告；采样计划；仪器校准；样品流转记录 |
| `cp_packing_records` | p04_inspection_packing | 包装和检验公用工程 | 物料清单、领用记录、电力分表 | roll_id; material_id; packaging_mass; returnable_flag; pallet_share; electricity | 实测物料清单和计量或有记录的共享电力 | kg 或 kWh | 每个包装批次，按月汇总 | 与参考输出相同期间 | 所有最终检验和包装工位 | 合计可归属投入并除以合格织物质量 | 物料清单；库存核对；仪表记录 |
| `cp_waste_records` | p01_yarn_preparation_weaving; p04_inspection_packing | 纺织和包装废物 | 秤、废物联单、内部回收日志 | date; process_id; waste_type; mass; destination; internal_reuse; external_recovery; disposal | 称量每类废物并核对内部再用和外部转移 | kg | 每次转移，按月汇总 | 与参考输出相同期间 | 所有纳入生产线 | 按过程、材料和去向合计；防止与产品输出重复计算 | 秤校准；联单；回收商收据；质量平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 所有清单行 | 归一化数量 = 可归属于产品路线的数量 / 同期净合格参考产品质量 | 可归属数量；净合格织物质量 | 每 1 kg 参考产品的数量 | eu-textiles-bat-2022-2508 |
| `calc_composition_share` | 产品类别阈值 | 人造长丝比例（%）= 人造长丝质量 / 纺织纤维总质量 x 100；结果必须 >= 85 | 供应商成分及经核实的纺织纤维质量 | 人造长丝质量百分比 | unsd-cpc-3-0-2025 |
| `calc_area_to_mass` | 长度或面积生产记录 | 织物质量（kg）= 有效面积（m2）x 实测单位面积质量（g/m2）/ 1000；与秤测质量核对并调查重大偏差 | 有效长度；有效幅宽；实测单位面积质量；秤测质量 | 调湿织物质量 | eu-pef-2021-2279 |
| `calc_water_net_use` | 湿法过程 | 净外部用水 = 总外部取水 - 在前景系统内回用的计量水量；总取水和回用量应与净用量同时报告 | 取水量；内部再用量；处理纺织品质量 | 每 kg 过程输出的水 m3 | eu-textiles-bat-2022-2508 |
| `calc_emission_mass` | 直接空气或水体排放 | 污染物质量 = 代表性浓度 x 实测排放或排气体积，并进行单位换算且匹配运行期间 | 浓度；流量或排放体积；运行时间 | 每 kg 过程输出的污染物 kg | eu-textiles-bat-2022-2508 |
| `calc_mass_balance` | 每个过程及完整前景系统 | 用产品输出、外运废物、直接质量排放和有记录的库存变化核对调湿材料投入；解释残差，不得强行配平 | 投入质量；产品质量；废物质量；排放质量；库存变化 | 质量平衡残差和核对说明 | eu-textiles-bat-2022-2508 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料投入 | 保留聚合物类型、长丝比例、织法、单位面积质量、有效幅宽、整理和调湿质量的供应商声明及批次试验；证明所代表产品组合满足 >=85% 阈值。 | 供应商证书；实验室报告；卷装和批次记录 |
| `dq_process_coverage` | 过程图 | 将每项实际操作和排放控制步骤映射到一个过程 ID；说明纳入或省略每项条件性过程的理由，并核对过程间转移。 | 过程流程图；路线单；设备清单；质量核对 |
| `dq_measurement` | 前景数量 | 优先采用经校准的直接测量。对于共享公用工程，记录分配驱动因素、计量覆盖、计算和不确定性；计算必须可从保留的原始字段复现。 | 校准证书；仪表；发票；计算工作簿；审计轨迹 |
| `dq_temporal` | 前景数据集 | 使用有代表性的生产期间，通常至少连续 12 个月；较短生产周期必须说明理由、评估季节性并披露异常运行工况。 | 有日期的生产、计量、采购和排放记录 |
| `dq_representativeness` | 前景和上游数据 | 对重要活动数据及直接基本流评估并披露技术、地域、时间和精度代表性；记录替代数据和数据缺口。 | 数据质量评估；供应商/场址元数据；不确定性说明；eu-pef-2021-2279 |
| `dq_emissions` | 废水和废气 | 根据化学品清单和过程路线表征相关物流，采用公认测量方法，保留检出限，并将样品与代表性运行工况匹配。 | 认可实验室结果；采样计划；方法引用；eu-textiles-bat-2022-2508 |
| `dq_completeness` | 完整清单 | 将年度或生产周期的材料、水、能源、废水、回收材料和废物总量与过程级记录核对；明确报告缺失数据和截断。 | 投入产出清单；水和能源平衡；废物联单；eu-textiles-bat-2022-2508 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_category_identity` | 产品身份 | 如果产品不是机织织物、人造长丝低于纺织纤维质量的 85%，或产品应由某个更具体的排除类别管理，则校验失败。 | unsd-cpc-3-0-2025 |
| `val_reference_flow` | 定量参考 | 要求正好 1 kg 净合格织物，并关联产品流 `6604db91-24a3-43c8-aeec-8384210e643f`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；不得包括包装质量。 |  |
| `val_qualifiers` | 参考流元数据 | 要求全部所列限定信息，包括聚合物/成分、织法、单位面积质量、幅宽、处理状态、整理、调湿基准、地域、期间和包装纳入状态。 | eu-pef-2021-2279 |
| `val_route_boundary` | 过程覆盖 | 要求纳入纱线准备、织造、检验和包装；要求纳入实际采用的每项条件性湿法或整理过程，并说明省略每项条件性过程的理由。 | eu-textiles-bat-2022-2508 |
| `val_input_output_inventory` | 前景清单 | 要求提供与所声明路线相关的过程级材料、化学品、水、能源、产品、废水、直接排放、回收材料和废物记录，并防止废物流与基本流排放重复计算。 | eu-textiles-bat-2022-2508 |
| `val_mass_balance` | 材料一致性 | 要求可复现的过程级和完整系统质量平衡；将无法解释的残差标记为待复核，不得静默调整投入或输出。 | eu-textiles-bat-2022-2508 |
| `val_allocation` | 共享和多输出过程 | 要求证明首先尝试了细分，并校验所选物理关系或最后手段的其他分配关系、因子、期间和敏感性。 | eu-pef-2021-2279 |
| `val_data_quality` | 数据集适用性 | 要求可追溯原始记录、校准或等效质量证据、时间覆盖、场址及技术代表性、上游数据集引用和明确的数据缺口披露。 | eu-pef-2021-2279; eu-textiles-bat-2022-2508 |
| `val_source_traceability` | 含证据规则 | 要求每个引用来源 ID 均可在数据源中解析，禁止将搜索摘要、创作日志和 Tiangong 查询轨迹当作外部证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明人造长丝机织织物的工厂大门前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当产品类别、地域、技术、期间和交付状态具有代表性时，可用于下游纺织转换、服装、家居织物、产业用纺织品、采购比较和供应链建模的 LCA |
| excluded_use | 直接比较功能或耐久性不同的织物；仅归因于纤维或纱线生产；用于低于 85% 阈值或属于排除特殊织物类别的产品；用于本工厂大门数据集未建模的使用阶段或生命周期末端声明 |
| required_metadata | canonical PCR id；产品流 UUID；成分和聚合物组合；织法；单位面积质量和幅宽；交付处理状态；过程路线；场址地域；参考期间；调湿基准；包装纳入状态；上游数据集；分配方法 |
| required_quality_disclosure | 过程覆盖；原始数据比例；仪表和实验室覆盖；时间、技术、地域和精度代表性；质量平衡残差；共享公用工程分配；相关排放测量；数据缺口；截断；不确定性和敏感性 |
| update_trigger | 聚合物或成分类别、织法或单位面积质量规格、交付状态、过程路线、化学品、能源或供水系统、排放控制、分配基准、场址组合、上游数据集或参考期间发生可能实质改变清单的变化 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | 联合国统计司，Central Product Classification Version 3.0 资源及解释性说明，https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-10） | 分类语境和产品范围阈值 |
| `eu-textiles-bat-2022-2508` | standard | Commission Implementing Decision (EU) 2022/2508，纺织工业 BAT 结论，ELI：http://data.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-10） | 过程分解；投入产出清单；过程监测；水、能源、废水、空气排放、化学品、废物和质量证据 |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279，环境足迹方法（含 2022 年 5 月 23 日勘误），ELI：http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-10） | 功能单位结构；生命周期边界；多功能性层级；代表性、核查和数据质量披露 |
