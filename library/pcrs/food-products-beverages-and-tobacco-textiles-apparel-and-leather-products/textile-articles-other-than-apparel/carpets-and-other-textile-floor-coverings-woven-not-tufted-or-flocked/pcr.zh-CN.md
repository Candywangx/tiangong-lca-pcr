---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-woven-not-tufted-or-flocked
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 机织、非簇绒且非植绒的地毯及其他铺地织物

## 1. 范围与适用性

本 PCR 适用于表面或绒面结构由机织形成且既非簇绒也非植绒的地毯及其他铺地织物的工厂大门前景数据包。覆盖保持该产品身份的机织阔幅地毯、卷材、块毯和方块产品，也覆盖带整体背衬或后整理层的产品。

打结地毯、簇绒地毯、植绒铺地物、毡制铺地物、非纺织弹性地板以及安装、使用、维护和寿命终结阶段不在范围内。报告工厂之外的纤维、纱线、染料、背衬化合物、包装、电力、供水和废物处理生产应由上游数据集表示，不在前景清单内重复构建。

声明产品是在制造工厂大门处可销售的机织铺地织物。仅当湿法加工、背衬、涂层、层压或其他后整理步骤实际用于声明产品时才纳入，并作为路线限定信息披露。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-woven-not-tufted-or-flocked |
| classification_refs | CPC 3.0: 27220 (exact) |
| covered_products | 既非簇绒也非植绒的机织地毯及机织铺地织物，包括阔幅地毯、卷材、块毯和方块产品 |
| excluded_products | 打结、簇绒、植绒、毡制和非纺织铺地物；安装、使用、维护和寿命终结服务 |
| representative_product | 制造工厂大门处可销售的机织地毯或铺地织物 |
| production_route | 纱线准备与机织；条件性湿法加工；条件性背衬或涂层；裁切、检验和包装 |
| market_state | 已制造成品；工厂生产混合 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供成品铺地功能的机织地毯或其他机织铺地织物 |
| How much | 制造工厂大门处 1 kg 净可销售产品 |
| How well | 符合声明的构造、纤维组成、尺寸、单位面积质量、背衬或涂层状态和质量等级 |
| How long or cycle | 一个完整制造批次；使用寿命不属于本工厂大门参考范围 |
| reference_flow_link | 功能单位由恰好 1 kg 声明参考产品输出实现 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Carpets and other textile floor coverings, woven, not tufted or flocked `d54c5255-fc7f-4613-86da-08cf2afe8632` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 质量计纤维组成；机织构造；产品形态；尺寸；单位面积质量；背衬或涂层状态及组成；染色或印花状态；质量等级；制造地域；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录修边后、发运前的净可销售产品质量；参考质量不包括托盘和运输包装。 |
| `area_to_mass` | 以面积表示的生产或销售记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用声明构造和批次实测的产品特定单位面积质量换算；保留面积原始记录和实测换算因子。 |
| `moisture_basis` | 纱线、纺织中间品和成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 当水分或调湿基准对质量平衡有实质影响时必须声明；没有文件化换算时不得混用调湿质量和接收状态质量。 |
| `energy_conversion` | 电力和热能记录 | Energy | kWh or MJ | 保留发票或计量单位及换算因子；需要换算时使用 1 kWh = 3.6 MJ，且不得把电力和热能合并为一个交换。 |

## 5. 系统边界

前景边界始于纱线以及另行采购的染料、助剂、背衬化合物、包装、水和能源进入报告工厂之时。包括厂内纱线准备、机织、条件性湿法加工、条件性背衬或涂层、干燥或固化、裁切、检验、包装、内部废料处理、直接排放和离厂废水。边界终止于工厂大门处净可销售的机织铺地物。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告工厂大门接收的纱线及其他采购材料，并带有供应商身份、质量、组成和上游数据集引用 |
| starting_condition_role | 前景制造投入边界 |
| product_classification_scope | 既非簇绒也非植绒的机织地毯及铺地织物 |
| recursive_input_rule | 已属于本产品类别的采购投入作为一个带上游数据集的产品投入记录，不在接收方前景过程中递归分解 |
| upstream_dataset_requirement | 纱线、化学品、背衬化合物、包装、电力、燃料、供水以及废物或废水处理应使用地域、技术和时间上具有代表性的上游数据集 |
| disclosure | 声明纤维组成、机织构造、内部与外包作业、湿法加工路线、背衬或涂层路线、再生成分主张依据、工厂地域、报告期、截断决定和上游数据替代 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统边界 | 纳入从接收纱线和辅助材料到制造工厂大门处净可销售包装产品的全部厂内作业和交换。 | `jrc-textiles-bref-2023`; `epd-cpcr004-2025` |
| `boundary_conditional_routes` | 湿法加工和背衬或涂层 | 声明产品实际采用时纳入各条件性作业，并明确披露该作业是厂内进行、通过上游数据集表示的外包作业，还是不适用。 | `jrc-textiles-bref-2023` |
| `boundary_no_recursive_duplication` | 同类别采购投入 | 将采购的同类别投入建模为一个上游产品交换，不得在接收过程中重复其生产清单。 | `ec-environmental-footprint-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_weaving` | 纱线准备与机织 | required | 始终纳入 | 形成机织地毯坯布的前景过程 | kg 机织地毯坯布输出 |
| `wet_processing` | 湿法预处理、染色、印花、水洗和干燥 | conditional | 声明产品实施任何湿法作业时纳入 | 着色与湿法后整理前景过程 | kg 湿法后整理机织地毯输出 |
| `finishing_and_packaging` | 背衬或涂层、固化、裁切、检验和包装 | required | 始终纳入裁切、检验和包装；仅在实施时纳入背衬、涂层和固化 | 转化为工厂大门可销售产品的前景过程 | kg 净可销售参考产品 |

### 过程：纱线准备与机织（`yarn_preparation_and_weaving`）

#### 输入

##### 产品流

###### 羊毛地毯纱线投入（`wool_carpet_yarn_input`）

仅当跨入本过程的具体纱线为羊毛地毯纱线时记录本交换。其他纤维组成以及不同经纱、纬纱、绒纱或绑纱身份应在前景数据集中使用独立交换。

- 选定流：Wool carpet yarn
- 流属性/单位：Mass / kg
- 数量规则：扣除退回未用纱线后的实测领用纱线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 机织地毯坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 机织用电网电力（`grid_electricity_weaving`）

记录纱线准备、织机运行、除尘和直接归属辅助设备消耗的计量电网电力。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：分配至机织批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 机织地毯坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机织地毯坯布输出（`greige_woven_carpet_output`）

记录验收后送往湿法加工或最终后整理的机织地毯坯布实测质量。

- 选定流：Greige woven carpet
- 流属性/单位：Mass / kg
- 数量规则：验收合格的机织地毯坯布实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：湿法加工或后整理前的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

###### 机织纺织边角料（`weaving_textile_offcuts`）

本交换仅记录送往一个声明处理路线的机织地毯开机织片和缺陷织片边角料。纱头和其他废物身份需要使用独立前景交换。

- 选定流：Woven carpet loom-start offcuts
- 流属性/单位：Mass / kg
- 数量规则：送往声明处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 机织地毯坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

### 过程：湿法预处理、染色、印花、水洗和干燥（`wet_processing`）

#### 输入

##### 产品流

###### 机织地毯坯布投入（`greige_woven_carpet_input`）

记录进入湿法加工路线的机织地毯坯布实测质量。

- 选定流：Greige woven carpet
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿法后整理机织地毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 湿法后整理过程用水（`process_water_wet_finishing`）

记录进入预处理、染色、印花、水洗或漂洗作业的计量淡水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：供应至湿法加工批次的计量用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿法后整理机织地毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 酸性染料投入（`acid_dyestuff_input`）

适用时记录羊毛或聚酰胺纤维使用的一种声明酸性染料配方。活性染料、分散染料、颜料和其他配方应在前景数据集中使用独立交换。

- 选定流：Acid dyestuff formulation
- 流属性/单位：Mass / kg
- 数量规则：投入批次的称量或发票计配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿法后整理机织地毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 湿法后整理用电网电力（`grid_electricity_wet_finishing`）

记录湿法加工设备、泵、通风和干燥设备使用的计量电网电力；使用的热能应在具体数据集中作为另一交换记录。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：分配至湿法加工批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿法后整理机织地毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法后整理机织地毯输出（`wet_finished_woven_carpet_output`）

记录湿法加工后验收合格并送往最终后整理的机织地毯实测质量。

- 选定流：Wet-finished woven carpet
- 流属性/单位：Mass / kg
- 数量规则：验收合格输出的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：湿法加工输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

###### 湿法后整理废水（`wet_finishing_wastewater`）

按离开湿法加工时的实际处理状态记录进入厂内或厂外处理前的废水。

- 选定流：Textile wet-finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：批次或报告期排出的计量废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿法后整理机织地毯输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_batch_records`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

### 过程：背衬或涂层、固化、裁切、检验和包装（`finishing_and_packaging`）

#### 输入

##### 产品流

###### 最终后整理机织地毯坯布投入（`greige_woven_carpet_finishing_input`）

仅当不采用湿法加工路线时，记录进入最终后整理的机织地毯坯布。

- 选定流：Greige woven carpet
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量；湿法后整理机织地毯进入本过程时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 最终后整理湿法后整理机织地毯投入（`wet_finished_woven_carpet_finishing_input`）

仅当采用湿法加工路线时，记录进入最终后整理的湿法后整理机织地毯。

- 选定流：Wet-finished woven carpet
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量；机织地毯坯布直接进入本过程时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 丁苯胶乳背衬投入（`styrene_butadiene_latex_input`）

仅在施加丁苯胶乳背衬配方时记录本交换。天然胶乳、聚氨酯、热熔胶、填料和其他不同配方应在前景数据集中使用独立交换。

- 选定流：Styrene-butadiene latex backing formulation
- 流属性/单位：Mass / kg
- 数量规则：批次消耗的称量或计量化合物质量；未施加背衬或涂层时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 后整理用电网电力（`grid_electricity_finishing`）

记录背衬或涂层设备、固化辅助设备、裁切、检验和包装使用的计量电网电力。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：分配至后整理批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`jrc-textiles-bref-2023`

###### 聚乙烯包装膜投入（`polyethylene_packaging_film_input`）

记录作为产品包装跨越系统边界的聚乙烯薄膜质量；其他包装组件需使用独立交换。

- 选定流：Polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：批次消耗的实测或采购核算薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`epd-cpcr004-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净可销售机织地毯参考产品（`reference_woven_carpet_output`）

这是为 CPC 27220 精确选定的公开 Tiangong 参考产品，归一化为 1 kg。

- 选定流：Carpets and other textile floor coverings, woven, not tufted or flocked `d54c5255-fc7f-4613-86da-08cf2afe8632`
- 流属性/单位：Mass / kg
- 数量规则：净验收产品质量除以同一净验收产品质量，得到恰好 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`unsd-cpc-3-2025`

##### 废物流

###### 地毯修边废料输出（`carpet_trim_waste_output`）

记录送往一个声明处理路线的机织地毯边条和不合格裁片实测质量。

- 选定流：Woven carpet trim waste
- 流属性/单位：Mass / kg
- 数量规则：送往声明处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch_records`
- 来源：`epd-cpcr004-2025`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用作业和公用工程 | 应先细分产品线或批次或进行计量，再考虑分配；记录所用计量表、生产时间或批次键。 | `ec-environmental-footprint-2021` |
| `allocation_physical_relation` | 无法避免的共用前景负荷 | 使用机器时间、计量能源、加工质量或占用生产时间等文件化物理因果关系进行分配；仅在没有更具代表性的因果关系时采用质量分配。 | `ec-environmental-footprint-2021` |
| `allocation_scrap_disclosure` | 出售、回收或内部回用废料 | 单独记录废料数量和去向，并披露负荷或抵扣处理；不得在不展示投入和废料输出的情况下直接用废料扣减总材料投入。 | `ec-environmental-footprint-2021`; `epd-pcr2019-14-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving_batch_records` | `yarn_preparation_and_weaving` | 纱线、电力、坯布输出和边角料记录 | 批次生产记录和公用工程计量分配 | batch_id; product_id; yarn_material_id; yarn_mass_kg; electricity_kwh; accepted_output_kg; offcut_kg; treatment_route | 核对仓库领退料、批次秤、织机计数器以及分表或文件化计量分配 | kg; kWh | 每批采集，按月汇总 | 至少 12 个代表性月份，或覆盖更短生产活动的全部期间 | 生产声明产品的报告场址全部机织生产线 | 按批次汇总各流特定记录，再除以合格坯布输出；分配上游数据集前不得合并不同纱线身份 | 校准秤记录、计量记录、库存核对、批次放行记录和处理接收单 |
| `cp_wet_processing_batch_records` | `wet_processing` | 坯布投入、水、染料、电力、后整理输出和废水记录 | 配方、批次记录、计量记录和排放记录 | batch_id; product_id; input_kg; chemical_id; chemical_mass_kg; water_m3; electricity_kwh; output_kg; wastewater_m3; treatment_state | 将配方投料和称量加料与进料、公用工程、输出及排放计量核对 | kg; m3; kWh | 每个湿法加工批次采集，按月汇总 | 至少 12 个代表性月份，或覆盖更短生产活动的全部期间 | 声明产品使用的报告场址全部湿法加工线 | 分别汇总每种化学特定流和公用工程，再除以合格湿法后整理输出 | 校准仪表和秤、批准配方、批次记录、实验室放行记录和废水日志 |
| `cp_finishing_batch_records` | `finishing_and_packaging` | 机织坯料、背衬化合物、电力、包装膜、可销售产品和修边废料记录 | 批次记录、配方领料、计量分配、包装记录和质量放行 | batch_id; product_id; input_web_kg; compound_id; compound_kg; electricity_kwh; packaging_film_kg; accepted_product_kg; trim_waste_kg; treatment_route | 核对材料领用、生产线计量、秤、包装记录和最终质量放行 | kg; kWh | 每个后整理批次采集，按月汇总 | 至少 12 个代表性月份，或覆盖更短生产活动的全部期间 | 生产声明产品的报告场址全部后整理线 | 按批次分别汇总每项具体交换并归一化至净合格产品；参考质量不含发运托盘 | 校准秤和计量记录、配方领用记录、包装核对、质量放行和废物接收单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 全部清单行 | 归一化数量 = 记录的交换量 / 净合格产品质量 kg | flow-specific recorded amount; accepted_product_kg | amount per kg reference product | `ec-environmental-footprint-2021` |
| `calc_area_to_mass` | 面积计生产和销售记录 | 产品质量 = 产品面积乘以实测批次特定单位面积质量 | product_area_m2; measured_mass_per_area_kg_per_m2 | product_mass_kg | `epd-cpcr004-2025` |
| `calc_energy_unit` | 电力或热能记录 | 需要统一能源单位时 MJ = kWh × 3.6；电力和热能仍保持为不同交换 | recorded_energy_kwh | energy_MJ | `ec-environmental-footprint-2021` |
| `calc_mass_balance` | 每个过程和报告期 | 质量平衡差 = 总质量投入减去可销售及中间产品、单独记录的废物和已量化直接质量排放 | mass input records; product output records; waste records; direct emission records | disclosed unexplained mass-balance difference | `jrc-textiles-bref-2023` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 全部产品和材料交换 | 保留为每个交换选择唯一上游流所需的产品、纤维、化学配方、供应商、批次和处理路线身份。 | 采购规格、配方、批次记录和供应商声明 |
| `dq_measurement` | 质量、水和能源记录 | 可行时使用经校准或法定控制的计量设备；一个计量表服务多个产品时保留分配方法。 | 校准证书、计量记录和分配工作表 |
| `dq_temporal` | 前景报告期 | 除非生产活动更短，否则覆盖至少 12 个代表性月份；记录停机、异常批次和季节性。 | 带日期的批次和公用工程记录及覆盖声明 |
| `dq_completeness` | 过程清单 | 核对采购和领用材料、生产输出、包装、废物、废水和直接测量排放；解释缺失或估算交换。 | 质量平衡、公用工程核对、废物接收单和异常日志 |
| `dq_upstream` | 上游数据集 | 为每个材料、能源、水、包装和处理数据集记录地域、技术、参考年份、替代和数据质量。 | 上游数据集登记表和替代日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 要求精确使用 CPC 27220 公开产品流 UUID、Mass 属性 UUID、Units of mass UUID、kg 单位和全部必需限定信息。 | `unsd-cpc-3-2025` |
| `validation_process_coverage` | 前景过程图 | 要求机织和后整理记录；声明路线包含湿法加工和背衬或涂层时，要求相应过程记录。 | `jrc-textiles-bref-2023`; `epd-cpcr004-2025` |
| `validation_atomic_exchanges` | 清单行 | 拒绝合并多种材料、公用工程、燃料、废物或排放的行；每个交换只能有一个身份、数量规则、属性、单位以及适用时的处理路线。 | `ec-environmental-footprint-2021` |
| `validation_collection_trace` | 前景数量 | 要求每个采集或计算数量可追溯至声明协议、报告期、场址范围、原始记录和归一化计算。 | `ec-environmental-footprint-2021` |
| `validation_mass_balance` | 每个前景过程 | 在一致的水分基准上报告投入、产品、废物和已量化排放，并解释任何实质性未解释平衡差。 | `jrc-textiles-bref-2023` |
| `validation_unresolved_uuid` | 非参考清单流身份 | 发布前将 manifest 列出的每个 row_id 解析到一个经核验的 Tiangong 流 UUID，或记录其明确的逐行拒绝；不得替换为语义更宽泛或相邻类别的流。 | `unsd-cpc-3-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定或产品系列前景制造数据集，经审查后可作为 secondary_dataset 或 background_dataset 发布 |
| downstream_use | 工厂大门处机织地毯及铺地织物的前景过程数据集和 lifecyclemodel 投影 |
| allowed_use | 与声明的机织构造、纤维组成、后整理路线、背衬或涂层状态、地域、技术和报告期匹配的研究 |
| excluded_use | 打结、簇绒、植绒、毡制或非纺织铺地物；没有增加其他模块的安装、使用、维护或寿命终结阶段；构造或配方实质不同的产品 |
| required_metadata | PCR id 和版本；参考流 UUID；必需限定信息；场址和地域；报告期；技术；产品系列加权；过程覆盖；分配；截断；上游数据集登记表 |
| required_quality_disclosure | 一手数据占比；时间覆盖；计量表和秤依据；质量平衡结果；数据缺口；估算；分配；上游替代；未解决身份决定；核查状态 |
| update_trigger | 纤维组成、机织构造、湿法加工路线、背衬或涂层配方、工厂技术、能源供应、产品单位面积质量、分配、报告期或上游数据集发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0 explanatory notes，代码 27220，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-13） | 产品边界和分类身份 |
| `jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Textiles Industry，2023 年 1 月发布。https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry（检索于 2026-08-13） | 过程分解、湿法加工、后整理、地毯背衬、采集和质量平衡检查 |
| `epd-cpcr004-2025` | 标准（`standard`） | International EPD System，c-PCR-004 Resilient, textile and laminate floor coverings (EN 16810)，2025 年有效期更新。https://www.environdec.com/pcr-library/pcr2019-14-c-pcr-004（检索于 2026-08-13） | 铺地产品限定信息、面积质量换算语境、包装和路线覆盖 |
| `epd-pcr2019-14-2025` | 标准（`standard`） | International EPD System，PCR 2019:14 Construction products (EN 15804+A2)，version 2.0.1，2025。https://www.environdec.com/pcr-library/pcr_6b99d07c-4b75-4763-4485-08dd775d2e49（检索于 2026-08-13） | 数据集画像、废料披露、上游数据集和建筑产品语境 |
| `ec-environmental-footprint-2021` | 官方指南（`official_guidance`） | 欧盟委员会 Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，2021-12-15。https://green-forum.ec.europa.eu/publications/commission-recommendation-eu-20212279-15-december-2021-use-environmental-footprint-methods-measure_en（检索于 2026-08-13） | 前景采集、归一化、分配层级、可追溯性和原子交换校验 |
