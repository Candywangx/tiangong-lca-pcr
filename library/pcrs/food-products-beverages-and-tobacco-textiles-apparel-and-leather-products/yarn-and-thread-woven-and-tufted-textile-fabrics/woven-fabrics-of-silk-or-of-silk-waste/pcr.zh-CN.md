---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-silk-or-of-silk-waste
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 丝或废丝机织织物

## 1. 范围与适用性

本 PCR 支持由天然蚕丝长丝纱、废丝纺成的纱或两者已声明组合制成的机织织物前景数据包。范围包括织物工厂接收纱线、整经、条件性上浆、织造、检验，以及在报告场址内进行时，已声明的丝绸前处理、染色、印花或整理，直至工厂门口的成品织物。

除非实际一体化并单独建立清单，否则不包括蚕茧生产、缫丝和纱线制造；也不包括针织、簇绒、非织造、起绒、绳绒、窄幅和特种织物，主要纤维不是丝或废丝的织物，服装制造，分销，使用和报废阶段。数据包应说明产品是坯绸、未精练绸、半脱胶绸、脱胶绸、染色绸、印花绸、增重绸或其他整理状态。最低代表路线是将丝纱整经和织造成可销售机织物；湿法处理是否纳入取决于已声明的产品状态和场址操作。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-silk-or-of-silk-waste |
| classification_refs | CPC 3.0: 26510 - Woven fabrics of silk or of silk waste |
| covered_products | 纺织材料为天然蚕丝长丝纱、废丝纺成的纱或两者已声明组合的机织织物 |
| excluded_products | 丝纱；主要由其他纤维构成的织物；针织、簇绒、非织造、起绒、绳绒、窄幅或其他特种织物；地毯；服装和制成品 |
| representative_product | 已声明纱线来源、组织、平方米质量、整理状态和水分状态的可销售丝绸机织物 |
| production_route | 纱线接收、整经、条件性上浆、织造、检验和条件性场内丝绸湿法处理 |
| market_state | 工厂门口生产混合，明确声明坯绸或成品状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足已声明组织和整理规格的丝绸机织物 |
| How much | 1 kg |
| How well | 满足已声明纱线组成、织法、平方米质量、幅宽、整理、质量等级和水分状态的可销售产出 |
| How long or cycle | 工厂门口一个生产批次或一个报告期的产出；不表示使用阶段持续时间 |
| reference_flow_link | 按已声明的最终前景过程，链接 `woven_silk_fabric_output` 或 `finished_woven_silk_fabric_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 丝或废丝机织织物 `f7cf0661-025b-47cc-b5e2-d44b43e07e6b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 天然蚕丝长丝纱占比；废丝纱占比；织法和组织；平方米质量；可用幅宽；坯绸或整理状态；染色、印花、增重和整理状态；质量等级；水分状态；地理；技术；报告期 |

构建前景数据包时，`必需限定信息` 中的每项信息都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和丝材料质量流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 干基或调湿质量应保持一致。声明水分状态；没有记录转换时，不得混用湿质量和调湿质量。 |
| `batch_mass_balance` | 每个前景过程和报告期 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以相同时间和水分基准记录投入、可销售产出、丝废料、库存留存和其他单独识别的产出，并披露无法解释的不平衡。 |
| `water_mass_conversion` | 工艺水和废水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仪表报告体积时，只能使用记录的仪表体积以及适用于该流和温度的实测或有据可查密度转换为质量。 |
| `electricity_energy_conversion` | 电力投入 | Net calorific value | MJ | 原始记录保留计量的 kWh，并按精确物理换算 1 kWh = 3.6 MJ 转为 MJ；不得把电力与蒸汽或燃料合并。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告工厂门口接收蚕丝长丝纱和/或废丝纱，并声明供应商、纱线状态、组成、水分状态和上游数据集引用 |
| starting_condition_role | 前景织物生产的上游产品投入 |
| product_classification_scope | CPC 3.0 代码 26510 涵盖的丝绸机织织物；分类引用不能替代语义产品和整理状态声明 |
| recursive_input_rule | 购买后进入场内湿法处理的丝绸机织物应引用独立上游数据集。一体化场址内织造的织物是内部转移，不得再次计作外购投入。 |
| upstream_dataset_requirement | 优先使用供应商或区域特定的丝纱数据。通用上游数据应披露地理、技术、时间、纱线来源和是否含废丝。 |
| disclosure | 声明工厂门口、一体化或外购起始材料、纱线占比、上浆状态、湿法处理操作、内部转移处理方式以及全部排除的生命周期阶段。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_fabric_production | 纳入从纱线接收至工厂门口已声明可销售织物的材料和能源交换；仅当湿法处理在报告场址进行或属于声称的产品系统时纳入。 | `jrc-textiles-bref-2023` |
| `boundary_route_disclosure` | process_route | 区分整经、上浆、织造、丝绸前处理、染色、印花和整理；不得仅凭产品名称推断未报告的湿法过程。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_atomic_chemicals` | chemicals_and_auxiliaries | 将每种实际消耗的化学品分别记录为有身份和数量的产品流交换；化学品合计或配方类别不是一个交换。 | `eu-textiles-bat-2022` |
| `boundary_waste_and_emissions` | outputs | 每项废物、废水、回收材料和直接排放均在跨越前景边界的位置单独记录；不得用回收量抵减消耗量。 | `eu-textiles-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `warp_weave` | 整经、条件性上浆和织造 | `required` | 前景工厂以纱线制造织物时始终纳入 | 前景织物生产 | 离开本过程的可销售丝绸机织物 kg |
| `wet_processing` | 丝绸前处理、染色、印花和整理 | `conditional` | 仅纳入报告场址内进行或产品系统明确声称的操作 | 前景湿法处理 | 离开本过程的可销售成品丝绸机织物 kg |

### 过程：整经、条件性上浆和织造（`warp_weave`）

#### 输入

##### 产品流

###### 天然蚕丝长丝纱投入（`natural_silk_yarn_input`）

将本批次接收的天然蚕丝纱记录为独立产品投入。不得与废丝纱合并。

- 选定流：蚕丝、印染丝织物 `eea5e113-2fbc-4fde-ac38-b938654f382c`
- 流属性/单位：Mass / kg
- 数量规则：发放至前景批次的实测调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg `warp_weave` 可销售丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_weave_materials`
- 来源：`jrc-textiles-bref-2023`

###### 废丝纺成的纱投入（`spun_silk_waste_yarn_input`）

批次使用废丝纱时，应单独记录。不得与天然蚕丝长丝纱合并。

- 选定流：绢纺丝 `6c639604-29e8-44b6-be18-4e0ad97fdef8`
- 流属性/单位：Mass / kg
- 数量规则：发放至前景批次的实测调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg `warp_weave` 可销售丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_weave_materials`
- 来源：`jrc-textiles-bref-2023`

###### 织造电力投入（`weaving_electricity_input`）

记录整经、存在时的上浆设备、织机、检验和本过程直接相关物料搬运所消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或使用已记录机器运行小时和额定或实测功率从已核对场址电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg `warp_weave` 可销售丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_weave_energy`
- 来源：`jrc-textiles-bref-2023`

###### 聚乙烯醇浆料投入（`pva_sizing_agent_input`）

只有报告工厂实际将聚乙烯醇施加到经纱时才记录。其他浆料物质应在前景数据包中作为额外、单独识别的原子产品流行记录。

- 选定流：聚乙烯醇 `cea707dd-98a3-451d-bc43-2dcc145091e9`
- 流属性/单位：Mass / kg
- 数量规则：本批次称量发放量，或供应交付量减去已核对期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg `warp_weave` 可销售丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_weave_chemicals`
- 来源：`jrc-textiles-bref-2023`

###### 浆液工艺水投入（`sizing_process_water_input`）

只有本过程配制浆液或清洗上浆设备时才记录工艺水。

- 选定流：工艺用水 `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- 流属性/单位：Mass / kg
- 数量规则：可归因于上浆及相关清洗的计量水质量或批槽水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg `warp_weave` 可销售丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_weave_water`
- 来源：`jrc-textiles-bref-2023`

###### 织机润滑油投入（`loom_lubricating_oil_input`）

记录添加至织机及直接相关设备的新润滑油。回收油和废油跨越边界时应作为单独产出记录。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：报告期内实测添加量并按期初和期末库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg `warp_weave` 可销售丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_weave_chemicals`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 丝绸机织物产出（`woven_silk_fabric_output`）

当 `warp_weave` 是最后一个前景过程时，记录实测可销售织物产出。一体化湿法处理随后进行时，将本流作为内部转移，并以 `finished_woven_silk_fabric_output` 链接参考流。

- 选定流：丝或废丝机织织物 `f7cf0661-025b-47cc-b5e2-d44b43e07e6b`
- 流属性/单位：Mass / kg
- 数量规则：检验后接收为可销售产出的实测调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_weave_outputs`
- 来源：`unsd-cpc-3-0`

##### 废物流

###### 丝纱和丝织物废料产出（`silk_waste_output`）

只有织机废料、损坏纱线和废次丝织物共用同一物理流及去向记录时，才将其记录为一个丝废料流。

- 选定流：丝绸废料 `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- 流属性/单位：Mass / kg
- 数量规则：转移至有记录的回收、处理或处置去向的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg `warp_weave` 可销售丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_weave_outputs`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：丝绸前处理、染色、印花和整理（`wet_processing`）

#### 输入

##### 产品流

###### 进入湿法处理的丝绸机织物（`woven_silk_fabric_wet_input`）

外购丝绸机织物应记录为投入；一体化场址应将同一数量标识为来自 `warp_weave` 的内部转移，不得再次计作外购上游负荷。

- 选定流：丝或废丝机织织物 `f7cf0661-025b-47cc-b5e2-d44b43e07e6b`
- 流属性/单位：Mass / kg
- 数量规则：投入湿法处理的实测调湿织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg `wet_processing` 可销售成品丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_materials`
- 来源：`jrc-textiles-bref-2023`

###### 湿法工艺水投入（`wet_process_water_input`）

场内进行丝绸前处理、染色、印花、整理、水洗、漂洗和设备清洗时，记录进入这些操作的工艺水。

- 选定流：工艺用水 `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- 流属性/单位：Mass / kg
- 数量规则：计量的水质量；测量允许时分配至湿法处理过程
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg `wet_processing` 可销售成品丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_water_wastewater`
- 来源：`eu-textiles-bat-2022`

###### 湿法处理电力投入（`wet_process_electricity_input`）

记录湿法处理设备、泵、控制、机械脱水、干燥和直接相关处理设备所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或使用有记录的设备活动从已核对场址电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg `wet_processing` 可销售成品丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_energy`
- 来源：`eu-textiles-bat-2022`

###### 湿法处理蒸汽投入（`wet_process_steam_input`）

记录供应至丝绸湿法处理的外购或单独计量蒸汽。不得把蒸汽与电力、直接燃料或外购热合并。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass / kg
- 数量规则：计量蒸汽质量，或与湿法处理报告期核对的供应商发票
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg `wet_processing` 可销售成品丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_energy`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品丝绸机织物产出（`finished_woven_silk_fabric_output`）

记录已声明湿法处理路线和最终检验后的实测可销售产出。

- 选定流：丝或废丝机织织物 `f7cf0661-025b-47cc-b5e2-d44b43e07e6b`
- 流属性/单位：Mass / kg
- 数量规则：接收为可销售成品的实测调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_outputs`
- 来源：`unsd-cpc-3-0`

##### 废物流

###### 纺织湿法处理废水产出（`textile_wet_processing_wastewater_output`）

记录离开湿法处理边界并进入场内处理、场外处理或直接排放的废水。去向和处理状态是必需限定信息。

- 选定流：废水，纺织品湿法加工，至水体 `a60031a7-ea29-49ef-b578-90de910fcf8e`
- 流属性/单位：Mass / kg
- 数量规则：在转移或排放点计量的废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg `wet_processing` 可销售成品丝绸机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_water_wastewater`
- 来源：`eu-textiles-bat-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground_processes | 通过分别计量整经/织造和湿法处理操作，并将一体化中间织物作为内部转移，避免分配。 | `iso-14044-2006` |
| `allocation_shared_utilities` | shared_site_utilities | 共享仪表仅可按有据可查的因果参数分配，例如实测运行时间和功率、蒸汽焓和质量或计量用水；披露参数和核对过程。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_recovered_material` | recovered_silk_and_sizing_material | 单独报告回收丝、回收浆料和其他回收产出。除非下游研究声明并论证分配方法，否则不得从总投入中扣减或赋予避免负荷。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_unavoidable` | residual_multioutput_process | 若无法细分或建立物理因果关系，应披露所选分配基准、受影响的流和敏感性；本 PCR 不提供默认经济因子。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_warp_weave_materials` | `warp_weave` | 丝纱投入 | 秤量、领料和库存记录 | batch_id; yarn_type; supplier; yarn_lot; opening_stock; issued_mass; return_mass; closing_stock; moisture_condition | 已核对的校准秤量和库存记录 | kg | 每批，按月核对 | 与产出同一期间 | 全部范围内纱线库和织机 | 按纱线类型和批次汇总净领用质量，再对可销售产出归一化 | 秤校准；批次追溯；库存核对 |
| `cp_warp_weave_energy` | `warp_weave` | 电力投入 | 仪表和设备活动记录 | meter_id; start_reading; end_reading; machine_id; operating_hours; measured_or_rated_demand; batch_id | 过程分表；否则使用已记录因果分配的已核对场址电表 | kWh | 每批或每个仪表区间 | 与产出同一期间 | 整经、上浆、织机、检验和相关搬运 | 汇总计量或分配并核对的 kWh，再转换为 MJ | 仪表校准；场址电表核对；分配工作表 |
| `cp_warp_weave_chemicals` | `warp_weave` | PVA 浆料和润滑油投入 | 称量、领料、采购和库存记录 | product_name; supplier; product_id; CAS_when_available; lot; issued_mass; returned_mass; opening_stock; closing_stock; process_step | 已核对的领料和库存记录；每种化学品保持独立行 | kg | 每次领用，按月核对 | 与产出同一期间 | 上浆和织造设备 | 汇总每个已识别产品的净消耗质量；不得聚合不同化学品 | 发票或批次单；产品规格；库存核对 |
| `cp_warp_weave_water` | `warp_weave` | 浆液工艺水 | 仪表或批槽记录 | meter_id; volume; density; temperature; batch_id; use_step | 计量体积按流特定密度转换，或直接质量测量 | kg | 每批或每个仪表区间 | 与产出同一期间 | 上浆配制和设备清洗 | 汇总可归因于该过程的水质量 | 仪表校准；槽容检查；密度记录 |
| `cp_warp_weave_outputs` | `warp_weave` | 可销售织物和丝废料产出 | 秤量、检验和转移记录 | batch_id; output_mass; rejected_mass; waste_mass; moisture_condition; grade; destination | 校准秤量并链接检验和去向记录 | kg | 每批 | 与投入同一期间 | 全部范围内织机和检验点 | 汇总可销售产出和每个单独转移的废物流 | 秤校准；检验记录；废物转移单 |
| `cp_wet_materials` | `wet_processing` | 丝绸机织物投入 | 投料和批次记录 | batch_id; source_process_or_supplier; fabric_mass; moisture_condition; finish_state_in; internal_transfer_flag | 校准秤量和批次投料记录 | kg | 每批 | 与湿法产出同一期间 | 全部范围内湿法处理线 | 汇总投料织物质量，区分外购和内部转移 | 秤校准；批次追溯；供应商或内部转移记录 |
| `cp_wet_energy` | `wet_processing` | 电力和蒸汽投入 | 公用工程仪表和供应商记录 | utility_type; meter_id; start_reading; end_reading; steam_mass; electricity_kWh; batch_id; allocation_parameter | 过程仪表；否则使用有据可查因果分配的已核对供应商/场址仪表 | kg steam; kWh electricity | 每批或每个仪表区间 | 与湿法产出同一期间 | 前处理、染色、印花、整理、干燥和相关处理 | 分别汇总各项公用工程并对可销售产出归一化 | 仪表校准；发票核对；分配工作表 |
| `cp_wet_water_wastewater` | `wet_processing` | 工艺水投入和废水产出 | 水和废水仪表、排放日志和实验室记录 | inlet_volume; inlet_density; effluent_volume; effluent_density; pH; temperature; destination; treatment_status; sampling_time; batch_id | 关键位置仪表和相关废水监测 | kg | 每批或每个仪表区间；废水参数按许可或 BAT 相关频率 | 与湿法产出同一期间 | 全部范围内湿法线和排放或转移点 | 按有据可查密度将每股流转换为质量；分别报告进水和每股出水 | 仪表校准；采样记录；实验室 QA/QC；水平衡 |
| `cp_wet_outputs` | `wet_processing` | 成品织物产出 | 秤量和最终检验记录 | batch_id; finished_mass; moisture_condition; finish_state; dye_or_print_status; quality_grade; rejected_mass | 校准秤量并链接最终检验 | kg | 每批 | 与湿法投入同一期间 | 最终湿法过程和检验点 | 按已声明产品规格汇总可销售成品质量 | 秤校准；最终检验记录；批次放行 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | 每个报告期交换量除以与所选参考流产出链接的可销售质量；内部转移仅在同一一体化数据包内抵消。 | 交换量；可销售产出质量；路线标识 | 每 1 kg 参考产品的交换量 | `iso-14044-2006` |
| `calc_electricity_mj` | electricity rows | electricity_MJ = metered_electricity_kWh x 3.6 | 已核对的计量 kWh | MJ electricity |  |
| `calc_process_mass_balance` | each foreground process | imbalance = mass inputs - saleable product - separately identified waste and other outputs - closing inventory change；保留带符号结果和解释。 | 调湿投入质量；产出质量；库存变化 | 过程质量平衡记录 | `eu-textiles-bat-2022` |
| `calc_route_yield` | warp_weave and wet_processing | route_yield = saleable conditioned output mass / conditioned material input mass；按过程和已声明水分基准分别计算。 | 调湿材料投入；调湿可销售产出 | 过程收率 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product, yarn, chemical, waste, and utility flows | 保留供应商名称、产品或流身份、批次或仪表引用，以及解析后准确的 Tiangong UUID；不得用集合标签替代单一交换。 | 供应商规格；批次记录；仪表或废物转移记录；Tiangong 身份引用 |
| `dq_route` | foreground package | 识别每个纳入的单元操作，以及湿法处理是一体化、外购还是不存在。 | 过程流程图；批次路线；场址边界图 |
| `dq_temporal` | all foreground records | 使用一个已声明代表期间的记录，并披露停机、异常生产、返工和库存变化。 | 带日期的仪表、生产、库存和维护记录 |
| `dq_completeness` | chemicals, water, energy, wastes, wastewater, and emissions | 核对年度和过程级投入/产出清单。即使本最低清单没有列举，也应将每种实际消耗的化学品、燃料、包装组件、废物和直接排放添加为单独原子交换。 | 投入/产出清单；发票；化学品总账；废物日志；排放和废水监测 |
| `dq_mass_balance` | warp_weave and wet_processing | 核对调湿材料投入、可销售产出、废物、库存留存和实测损失，并记录每个材料残差。 | 经签署质量平衡工作表和调查说明 |
| `dq_wastewater` | wet_processing | 在实际转移或排放点记录废水流量、去向、处理状态和相关监测参数。 | 仪表和采样日志；实验室 QA/QC；处理或排放记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 参考产品 UUID、CPC 26510 身份、Mass 属性、Units of mass 单位组、kg 单位和全部必需限定信息应存在且相互一致。 | `unsd-cpc-3-0` |
| `validate_bilingual_inventory` | bilingual_markdown | 中英文 process id、direction、flow type、row id、行顺序、选定 UUID、受控 token 和 rule-id 顺序应完全一致。 |  |
| `validate_route_completeness` | foreground_processes | `warp_weave` 为必需过程。仅在执行或声称时纳入 `wet_processing`，随后分别纳入使用的水、电、蒸汽、每种实际化学品、废水、废物和直接排放交换。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_atomic_flows` | process_inventory | 若卡片选定流是集合、选择器、组合公用工程、组合化学品、组合废物或未解析占位符，而不是一个原子交换，应拒绝。 |  |
| `validate_internal_transfer` | integrated_route | `warp_weave` 与 `wet_processing` 之间的织物转移应为内部转移且仅计一次；外购织物投入应带独立上游数据集。 | `iso-14044-2006` |
| `validate_mass_and_utility_reconciliation` | reporting_period | 将材料质量、电力、水、蒸汽、化学品领用、废物和废水核对到同一生产期间，并解释残差或共享仪表分配。 | `eu-textiles-bat-2022` |
| `validate_no_unlabelled_estimates` | amounts | 拒绝 AI 生成或无文档依据的数值范围。数量应来自前景记录、基于这些记录的明确计算或引用的外部证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 丝绸机织物门到门前景生产数据集 |
| downstream_use | `secondary_dataset`；当地理、技术、纱线路线、整理状态和质量披露适合下游研究时可作 `background_dataset` |
| allowed_use | 针对已声明织物、路线、场址和期间构建前景数据包，以及投影下游 process 或 lifecyclemodel |
| excluded_use | 服装、针织或特种织物、未披露纤维混纺、没有上游纱线数据的摇篮到大门声称、省略湿法处理却声称湿法成品，或无论证的地理/技术外推 |
| required_metadata | PCR id；CPC 引用；产品 UUID；纱线来源和占比；组织和平方米质量；整理状态；水分状态；地理；技术；场址边界；报告期；分配；上游数据集引用；数据质量声明 |
| required_quality_disclosure | 仪表和秤量覆盖；质量平衡残差；共享公用工程分配；化学品总账完整性；废水去向和监测；未解析身份；缺失上游数据；异常运行 |
| update_trigger | 纱线路线、纤维占比、织机或上浆技术、湿法处理配方、能源或供水、废水处理、分配、场址边界或产品规格发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | 联合国统计司，《Central Product Classification Version 3.0 Explanatory Notes》，子类 26510，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-12） | 产品类别范围和分类身份 |
| `jrc-textiles-bref-2023` | `official_guidance` | 欧盟委员会联合研究中心，《Best Available Techniques (BAT) Reference Document for the Textiles Industry》，2023。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf（检索于 2026-08-12） | 丝绸特性；整经、上浆、织造、丝绸前处理和染色过程分解；公用工程和污染路径 |
| `eu-textiles-bat-2022` | `official_guidance` | 欧盟委员会实施决定 (EU) 2022/2508，确立纺织工业 BAT 结论，2022。https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-12） | 投入/产出清单，水和能源监测，化学品、废物、废水和过程级数据要求 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management - Life cycle assessment - Requirements and guidelines，2022 年确认。https://www.iso.org/standard/38498.html（检索于 2026-08-12） | LCI 一致性、分配、报告和解释框架 |
