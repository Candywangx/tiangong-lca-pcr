---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-o-b5487362
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 机织人造纤维绒头织物及绳绒织物（毛巾织物和狭幅毛圈织物除外）

## 1. 范围与适用性

本 PCR 适用于以人造纤维制成、以工厂门口已制造成品状态交付的机织绒头织物和绳绒织物。报告场址控制的绒头形成或绳绒织造、路线特定湿法加工、物理或化学整理、检验和包装均在范围内。

本类别不包括毛巾织物、狭幅织物、全棉产品、非织造织物、针织绒头织物、地毯、服装，以及人造聚合物、纤维或纱线生产。含天然纤维混纺的织物仅在其申报产品分类和商业身份仍为 CPC 26820 时属于本范围；必须披露组成及混纺比例。

不得用通用纺织品 UUID 替代精确类别参考流。只有在 hybrid 检索和 Tiangong direct read 确认名称、分类、Product flow 类型、公开状态和 Mass 参考属性后，方可使用公开 CPC 26820 产品流身份。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-o-b5487362 |
| classification_refs | CPC 3.0: 26820, exact |
| covered_products | 合成或人造纤维制机织绒头织物和绳绒织物，不包括毛巾织物和狭幅织物；混纺产品仅在分类为 CPC 26820 时纳入 |
| excluded_products | 毛巾织物；狭幅织物；全棉绒头或绳绒织物；其他纤维制 CPC 26830 产品；针织、簇绒、非织造、地毯、服装、纤维和纱线产品 |
| representative_product | 工厂门口已制造成品状态的人造纤维制机织绒头或绳绒织物 |
| production_route | 纱线接收与准备；绒头或绳绒织造；条件性预处理、染色、水洗、干燥、热定型或化学整理；检验与包装 |
| market_state | 卷装或等效发运形态的干燥已检验成品织物，可供销售或后续转换加工 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足申报结构、组成、颜色、整理和质量等级的人造纤维制机织绒头或绳绒成品织物 |
| How much | 1 kg 合格成品织物净干质量 |
| How well | 满足申报的绒头或绳绒结构、纤维组成、可用幅宽、单位面积质量、颜色/整理规格和验收等级 |
| How long or cycle | 一个以工厂门口放行为终点的生产批次或生产期；不计入使用寿命性能 |
| reference_flow_link | 一千克已确认的 Tiangong CPC 26820 产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 机织人造纤维绒头织物及绳绒织物（毛巾织物和狭幅毛圈织物除外） `cb5fb579-ee14-4546-9d47-0a088d4dda76` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | fibre polymer and blend fractions; filament or staple route; pile or chenille construction; greige, dyed, printed, coated, or otherwise finished state; usable width; mass per area; dyeing and finishing route; colour and finish specification; moisture basis; recycled content; quality grade; geography; reporting period |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在按场址申报的销售或测试含湿基准调湿后测量成品织物净质量；不含卷芯、包膜、托盘和不合格织物。 |
| `area_to_mass_conversion` | 以面积记录的生产数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅使用批次特定的可用幅宽和实测单位面积质量将米或平方米换算为 kg；保留原始测量值和换算过程。 |
| `wet_to_dry_conversion` | 湿态纺织品和浴液记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别保留湿质量、干质量、含水量和采样时间；不得把带液率当作产品质量。 |
| `chemical_active_mass` | 配制型工艺化学品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录供应制剂质量和申报活性成分；不得静默将产品质量换算为活性物质质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景工厂操作 | 纳入工厂门口放行前由场址控制的全部纱线准备、绒头或绳绒织造、湿法加工、整理、检验、返工、公用工程、废水处理、废物产生和包装。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_upstream_inputs` | 外购产品与服务 | 将每项外购纱线、化学品、能源载体、供水、包装组件和外部处理废物保留为连接上下游数据集的输入或输出；不得并入无说明截断。 | `eu-textiles-bat-2022` |
| `boundary_route_disclosure` | 路线特定操作 | 仅在申报产品路线实际执行时纳入预处理、染色、水洗、干燥、热定型、涂层、印花或其他整理，并将未执行操作明确标记为不适用。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_excluded_stages` | 从摇篮到工厂门口的前景数据包 | 从前景边界排除聚合物和人造纤维制造、纱线制造、服装转换、工厂门口后分销、使用和报废；将纳入的外购纱线连接至上游数据集。 | `unsd-cpc-26820`; `eu-textiles-bat-2022` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 人造纤维纱线进入报告工厂，并已申报聚合物、长丝/短纤形态、纱支、混纺、供应商、含湿基准和上游数据集 |
| starting_condition_role | 前景织物生产路线的外购产品输入 |
| product_classification_scope | CPC 26820 人造纤维制机织绒头和绳绒成品织物，不包括毛巾织物和狭幅织物 |
| recursive_input_rule | 若输入本身为 CPC 26820 织物，则作为带独立上游数据集的外购产品输入记录，不在同一前景过程中递归重建其制造。 |
| upstream_dataset_requirement | 每项纱线、工艺化学品、能源载体、供水、包装材料和外包处理必须连接地域与技术相宜的数据集，否则披露为未解决。 |
| disclosure | 申报纤维组成、结构、湿法加工路线、整理路线、纳入操作、外包操作、截断、返工、废物去向，以及直接排放是实测还是计算。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pile_or_chenille_weaving` | 纱线准备与绒头或绳绒织造 | required | 人造纤维制机织类别产品的前景制造始终纳入 | 前景织物成形 | 离开织造的未整理机织绒头或绳绒织物 kg |
| `wet_processing_and_chemical_finishing` | 预处理、染色、水洗、干燥、热定型和化学整理 | conditional | 纳入报告场址自行或委托实际执行的每项操作 | 前景湿法加工与性能形成 | 离开条件性路线的干织物 kg |
| `inspection_and_packing` | 机械整理、检验、修剪、卷装与包装 | required | 始终纳入直至工厂门口放行；单项包装组件仅在实际使用时适用 | 前景完工与参考产品放行 | 合格成品 kg |

### 过程：纱线准备与绒头或绳绒织造（`pile_or_chenille_weaving`）

#### 输入

##### 产品流

###### 聚酯长丝纱输入（`polyester_filament_yarn_input`）

仅在批次使用申报的聚酯长丝纱时，该纱线才跨越织造边界。其质量取自扣除退料后的合格领料记录。

- 选定流：Polyester filament yarn
- 流属性/单位：Mass / kg
- 数量规则：合格领料质量减去有凭证的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`jrc-textiles-bref-2023`
- UUID status：unresolved；精确品级、长丝结构和再生成分状态因批次而异

###### 聚酯短纤纱输入（`polyester_staple_yarn_input`）

采用短纤纱而非长丝纱的路线将聚酯短纤纱作为独立交换。批次质量来自领退料记录。

- 选定流：Polyester staple-fibre yarn
- 流属性/单位：Mass / kg
- 数量规则：合格领料质量减去有凭证的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`jrc-textiles-bref-2023`
- UUID status：unresolved；精确品级、混纺、纱支和再生成分状态因批次而异

###### 粘胶长丝纱输入（`viscose_filament_yarn_input`）

仅在申报的人造纤维路线使用粘胶长丝时记录该输入，不与合成纱输入合并。

- 选定流：Viscose filament yarn
- 流属性/单位：Mass / kg
- 数量规则：合格领料质量减去有凭证的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`jrc-textiles-bref-2023`
- UUID status：unresolved；精确品级和长丝结构因批次而异

###### 粘胶短纤纱输入（`viscose_staple_yarn_input`）

采用人造短纤路线时单独记录粘胶短纤纱。本卡不代表其他人造纤维纱线。

- 选定流：Viscose staple-fibre yarn
- 流属性/单位：Mass / kg
- 数量规则：合格领料质量减去有凭证的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`jrc-textiles-bref-2023`
- UUID status：unresolved；精确品级、混纺和纱支因批次而异

###### 织造用电网电力（`weaving_electricity_input`）

记录供纱线准备、织机运行、局部抽风和织造辅助设备使用且处于定义电表边界内的电力。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：分表读数或生产批次有凭证的电表平衡分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_electricity`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；必须申报市场、电压、地域和供应合同

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未整理机织绒头织物（`unfinished_pile_fabric_output`）

该中间品为绒头形成后、任何条件性湿法加工路线之前离开过程的已检验干态机织绒头织物，仅适用于绒头织物路线。

- 选定流：Unfinished woven pile fabric of man-made fibres
- 流属性/单位：Mass / kg
- 数量规则：实测中间卷质量，或批次面积乘以实测单位面积质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个织造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：`jrc-textiles-bref-2023`
- UUID status：unresolved；尚未确认精确的机织绒头坯布中间状态身份

###### 未整理绳绒织物（`unfinished_chenille_fabric_output`）

该中间品为织造后、任何条件性湿法加工路线之前离开过程的已检验干态绳绒织物，仅适用于绳绒织物路线。

- 选定流：Unfinished chenille fabric of man-made fibres
- 流属性/单位：Mass / kg
- 数量规则：实测中间卷质量，或批次面积乘以实测单位面积质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个织造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：`jrc-textiles-bref-2023`
- UUID status：unresolved；尚未确认精确的绳绒坯布中间状态身份

##### 废物流

###### 聚酯纱线废物（`polyester_yarn_waste_output`）

离开前景过程的聚酯纱线废物与粘胶废物及混合织物边角料分开计量。

- 选定流：Polyester yarn waste
- 流属性/单位：Mass / kg
- 数量规则：按去向称量的聚酯纱线废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；纯度、污染和处理路线因前景而异

###### 粘胶纱线废物（`viscose_yarn_waste_output`）

使用并废弃人造纤维素纱线时，将粘胶纱线废物作为独立废物交换称量。

- 选定流：Viscose yarn waste
- 流属性/单位：Mass / kg
- 数量规则：按去向称量的粘胶纱线废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；纯度、污染和处理路线因前景而异

##### 基本流

###### 织造颗粒物排入空气（`weaving_dust_output`）

仅依据申报的监测或工程计算基础，记录织造或局部抽风越过场址边界排放的颗粒物。

- 选定流：Particulate matter, PM10, to air
- 流属性/单位：Mass / kg
- 数量规则：申报空气区室的实测排放或有凭证的工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；颗粒物定义和接收空气区室需要精确前景映射

### 过程：预处理、染色、水洗、干燥、热定型和化学整理（`wet_processing_and_chemical_finishing`）

#### 输入

##### 产品流

###### 工艺水（`process_water_input`）

在工艺边界记录进入湿法加工的水，并与产品路线以外的冷却水和生活用水分开。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：纳入纺织操作的计量供水或储罐平衡水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；水源和处理等级因场址而异

###### 湿法加工用电网电力（`wet_processing_electricity_input`）

记录纳入路线和电表边界内泵送、加药、水洗、干燥、热定型、通风和减排所用电力。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：纳入湿法操作的分表读数或有凭证的电表平衡分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_electricity`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；必须申报市场、电压、地域和供应合同

###### 外购蒸汽（`steam_input`）

外购蒸汽越过场址或过程边界时作为独立能源载体交换；若为现场燃烧，则应改为实际燃料及直接排放。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：按申报核算方法对凝结水回收修正后的计量蒸汽消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_energy`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；压力、生产路线、地域和供应边界因场址而异

###### 氢氧化钠（`sodium_hydroxide_input`）

仅在批次配方用于申报的预处理、染色或 pH 调节步骤时记录氢氧化钠。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：领用制剂质量，浓度另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_chemical`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；浓度和供应产品状态因配方而异

###### 过氧化氢（`hydrogen_peroxide_input`）

对有凭证预处理配方包含过氧化氢的批次，将其作为独立条件性交换。

- 选定流：过氧化氢
- 流属性/单位：Mass / kg
- 数量规则：领用制剂质量，浓度另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_chemical`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；浓度和供应产品状态因配方而异

###### 乙酸（`acetic_acid_input`）

仅在申报浴液或中和步骤实际投加时记录乙酸，且不与其他酸合并。

- 选定流：乙酸
- 流属性/单位：Mass / kg
- 数量规则：领用制剂质量，浓度另行记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_chemical`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；浓度和供应产品状态因配方而异

###### 分散染料制剂（`disperse_dye_formulation_input`）

合成纤维染色路线按每个配方行和卡片记录一种商业分散染料制剂；不同制剂需在前景数据包增加原子行。

- 选定流：Disperse dye formulation
- 流属性/单位：Mass / kg
- 数量规则：批准批次配方中的商业产品领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_chemical`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；商业制剂及活性组成因配方而异

###### 活性染料制剂（`reactive_dye_formulation_input`）

人造纤维素路线使用活性染料时，每个配方行和卡片记录一种商业活性染料制剂；不得与分散染料互换。

- 选定流：Reactive dye formulation
- 流属性/单位：Mass / kg
- 数量规则：批准批次配方中的商业产品领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_chemical`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；商业制剂及活性组成因配方而异

###### 有机硅纺织柔软剂（`silicone_softener_input`）

整理配方为实现申报手感而施用该产品时，将有机硅纺织柔软剂作为独立条件性交换。

- 选定流：Silicone textile softener
- 流属性/单位：Mass / kg
- 数量规则：批准批次配方中的商业产品领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_chemical`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；商业制剂及活性组成因配方而异

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法加工机织绒头织物（`wet_processed_pile_fabric_output`）

该中间品为离开纳入的湿法加工和化学整理路线、进入最终检验包装前的合格干态机织绒头织物。

- 选定流：Wet-processed woven pile fabric of man-made fibres
- 流属性/单位：Mass / kg
- 数量规则：实测干卷质量，或批次面积乘以实测单位面积质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个湿法加工批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：`jrc-textiles-bref-2023`
- UUID status：unresolved；已确认类别 UUID 仅用于最终参考产品

###### 湿法加工绳绒织物（`wet_processed_chenille_fabric_output`）

该中间品为离开纳入的湿法加工和化学整理路线、进入最终检验包装前的合格干态绳绒织物。

- 选定流：Wet-processed chenille fabric of man-made fibres
- 流属性/单位：Mass / kg
- 数量规则：实测干卷质量，或批次面积乘以实测单位面积质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个湿法加工批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：`jrc-textiles-bref-2023`
- UUID status：unresolved；已确认类别 UUID 仅用于最终参考产品

##### 废物流

###### 纺织废水（`textile_wastewater_output`）

越过边界进入场内或场外处理的废水与清洁冷却水和雨水分开计量，并分配至实际处理路线。

- 选定流：Textile wastewater
- 流属性/单位：Volume / m3
- 数量规则：纳入路线的计量排放量或经核验的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_discharge`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；组成、排放路线和处理去向因场址而异

###### 废水处理污泥（`wastewater_sludge_output`）

纳入的场内纺织废水处理产生的污泥按湿质量、干固体质量及去向记录。

- 选定流：废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：称量湿污泥并测定或化验干固体比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；干固体含量、危险属性和去向因场址而异

##### 基本流

###### 乙酸排入空气（`acetic_acid_air_output`）

批次使用乙酸且经测量或有凭证的化学品特定计算识别时，单独报告干燥、热定型或整理排入空气的乙酸。

- 选定流：Acetic acid to air
- 流属性/单位：Mass / kg
- 数量规则：申报空气区室的实测乙酸排放或化学品特定质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 离开湿法加工的干织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；精确乙酸身份和接收空气区室需要前景确认

### 过程：机械整理、检验、修剪、卷装与包装（`inspection_and_packing`）

#### 输入

##### 产品流

###### 整理与包装用电网电力（`finishing_electricity_input`）

记录适用设备及电表边界内刷毛、起绒、剪毛、检验、卷装、抽风和包装所用电力。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：整理与包装的分表读数或有凭证的电表平衡分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_electricity`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；必须申报市场、电压、地域和供应合同

###### 聚乙烯包装膜（`polyethylene_film_input`）

用于包裹放行织物的聚乙烯膜通过称重或件数乘以经核验单件质量计算。

- 选定流：Polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：领用膜质量，或数量乘以经核验单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`
- 来源：
- UUID status：unresolved；聚合物品级、再生成分和供应产品状态因前景而异

###### 纸板卷芯（`cardboard_core_input`）

纸板卷芯为独立包装组件，仅在随织物卷发运时记录。

- 选定流：Cardboard roll core
- 流属性/单位：Mass / kg
- 数量规则：卷芯数量乘以经核验单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`
- 来源：
- UUID status：unresolved；纸板品级、再生成分和供应产品状态因前景而异

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格 CPC 26820 成品织物（`final_product_output`）

最终产品为工厂门口放行的合格织物净干质量。本交换不含包装和不合格材料。

- 选定流：机织人造纤维绒头织物及绳绒织物（毛巾织物和狭幅毛圈织物除外） `cb5fb579-ee14-4546-9d47-0a088d4dda76`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：申报含湿基准下合格成品织物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`unsd-cpc-26820`
- UUID status：confirmed；经 flow-hybrid-search 和 Tiangong CLI direct read 证实为公开 Product flow、精确 CPC 26820、Mass

##### 废物流

###### 织物边角料（`fabric_offcuts_output`）

最终修剪和检验产生的边角料及不合格裁片与纱线废物分开称量，并按实际纤维组成和去向分类。

- 选定流：Fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：按去向称量的边角料和不合格裁片
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；纤维组成、污染和处理路线因前景而异

##### 基本流

###### 整理颗粒物排入空气（`finishing_dust_output`）

报告起绒、刷毛、剪毛或抽风越过场址边界排放至申报空气区室的颗粒物。

- 选定流：Particulate matter, PM10, to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放或有凭证的工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring`
- 来源：`eu-textiles-bat-2022`
- UUID status：unresolved；颗粒物定义和接收空气区室需要精确前景映射

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可独立计量的产品、路线或批次 | 在底层记录允许时，通过分开计量仪表、配方、批次、返工、废物处理和路线特定操作避免分配。 | `iso-14044-2006` |
| `allocation_reuse_closed_loop` | 返回同一产品路线的内部返工 | 将内部返工织物保留在批次质量平衡内，不得同时计为废物输出和新产品输入。 | `iso-14044-2006` |
| `allocation_physical_fallback` | 无法避免的共用前景负荷 | 若过程细分不可行，使用反映共用操作的有凭证物理关系；仅在不存在更具因果性的物理参数时使用产品干质量，并披露敏感性。 | `iso-14044-2006` |
| `allocation_recycling_no_avoided_burden` | 送往回收的织物、纱线、污泥或包装废物 | 报告废物输出和处理去向，不计避免产品信用，除非下游研究另行申报回收方法。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `pile_or_chenille_weaving` | 纱线输入 | 采购收货、领料、退料、库存调整 | material_id; polymer; filament_or_staple; blend; yarn_count; recycled_content; issued_mass; returned_mass; batch_id | 将仓库领退料与生产批次核对 | kg | 每次领料和退料 | 完整批次或生产期 | 服务该路线的全部纱线仓库 | 按材料身份汇总合格领料减未用退料 | 签署的领退料记录与库存核对 |
| `cp_metered_electricity` | 所有适用过程 | 电网电力 | 电表或分表 | meter_id; start; end; multiplier; timestamp; process_scope; downtime | 读取校准电表，仅分摊有凭证的共用负荷 | kWh | 至少每批次班次或账单周期 | 覆盖全部申报路线的代表性报告期 | 全部纳入生产与减排设备 | 净读数减排除负荷后按合格产出归一化 | 校准状态、电表照片或导出、分摊工作表 |
| `cp_product_output` | 所有适用过程 | 中间与最终织物输出 | 秤、卷布票、面积及单位面积质量测试 | roll_id; batch_id; gross_mass; tare_mass; usable_width; length; mass_per_area; moisture_basis; quality_status | 称量合格卷；仅用批次特定测试结果进行面积换算 | kg | 每卷或每批 | 完整批次或生产期 | 全部纳入产线与检验站 | 按过程输出和最终质量状态汇总合格净干质量 | 秤校准、卷布票、测试报告、不合格日志 |
| `cp_waste_mass` | 所有适用过程 | 纱线废物、边角料和污泥 | 秤票与废物联单 | waste_id; material; wet_mass; dry_solids; container_tare; destination; date; batch_id | 称量每项废物流并保留去向证据 | kg | 每次发运或每批 | 完整报告期 | 全部纳入操作和场内处理 | 按原子废物身份和去向汇总净质量 | 校准秤记录、联单、相关时的实验室固体测试 |
| `cp_emission_monitoring` | 所有适用过程 | 空气排放 | 烟道或作业抽风测试及运行日志 | pollutant; method; concentration; gas_flow; duration; compartment; operating_state; batch_output | 应用申报的批准测量或工程方法 | kg | 许可证频率和代表性生产期 | 覆盖正常及相关非正常操作 | 每个纳入排放点 | 浓度乘流量乘时间后按产出归一化 | 实验室报告、采样计划、校准、运行日志 |
| `cp_process_water` | `wet_processing_and_chemical_finishing` | 工艺水 | 水表、储罐或经核验水平衡 | source; meter_id; start; end; tank_change; operation; batch_id | 按操作计量用水，仅在无法直接计量时平衡 | m3 | 每批或每日 | 完整湿法加工路线 | 全部纳入湿法操作 | 扣除单独计量非工艺用水后的净工艺水 | 水表校准和水平衡闭合 |
| `cp_thermal_energy` | `wet_processing_and_chemical_finishing` | 外购蒸汽 | 蒸汽表和凝结水记录 | steam_mass_or_energy; pressure; enthalpy_basis; condensate_return; meter_id; operation | 读取校准蒸汽表并应用申报凝结水核算 | MJ | 每批或每日 | 完整湿法加工路线 | 全部纳入热操作 | 按干过程产出归一化净交付能量 | 电表校准和能量平衡工作表 |
| `cp_recipe_chemical` | `wet_processing_and_chemical_finishing` | 每行一种配方化学品 | 批准配方、加药日志、库存领料、供应商规格 | product_id; supplier; batch; concentration; active_content; issued_mass; returned_mass; operation | 核对批准配方与实际加药和退料 | kg supplied product | 每批 | 全部纳入配方变体 | 全部纳入的湿法加工和整理设备 | 汇总每个商业产品身份的净投加质量 | 配方批准、加药记录、SDS 或技术数据表 |
| `cp_wastewater_discharge` | `wet_processing_and_chemical_finishing` | 纺织废水 | 排放表与处理转移记录 | meter_id; volume; date; route; destination; batch_or_period | 在每个申报处理边界测量废水 | m3 | 连续或每日 | 完整报告期 | 全部纳入湿法加工排放 | 按排放路线汇总，不混入清洁水 | 电表校准、转移记录、水平衡闭合 |
| `cp_packaging_mass` | `inspection_and_packing` | 每行一种包装组件 | 领用记录、件数、单件质量测试 | component_id; material; recycled_content; count; unit_mass; returned_quantity; batch_id | 称量领用包装，或件数乘经核验单件质量 | kg | 每批 | 完整发运批次 | 产品全部包装站 | 按组件身份汇总净领用质量 | 秤校准、单件质量测试、领退料记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 所有清单行 | 归一化数量 = 纳入批次数量 / 合格参考成品净 kg | 原子交换数量; 合格产品质量 | 每 1 kg 参考产品数量 |  |
| `calc_area_to_mass` | 按面积记录的织物 | 织物质量 = 可用长度 × 可用幅宽 × 批次实测单位面积质量；不得使用名义目录单位面积质量 | 可用长度; 可用幅宽; 实测单位面积质量 | kg 织物 |  |
| `calc_active_content_disclosure` | 配制型化学品 | 活性物质质量 = 净供应制剂质量 × 供应商申报活性比例；除非选定流明确代表活性物质，否则仍以供应产品质量作为清单交换 | 制剂质量; 活性比例 | 补充披露的 kg 活性物质 | `eu-textiles-bat-2022` |
| `calc_air_emission_mass` | 实测有组织空气排放 | 排放质量 = 实测浓度 × 干标气流量 × 运行时间，并记录单位和湿度修正 | 浓度; 气流量; 时间; 修正因子 | 排至申报空气区室的 kg 污染物 | `eu-textiles-bat-2022` |
| `calc_mass_balance_check` | 每批次和过程 | 输入 + 期初在制品 = 合格输出 + 废物 + 期末在制品 + 有凭证质量变化；调查无法解释残差，不得静默分配 | 材料领用; 退料; 输出; 废物; 在制品; 水分变化 | 披露的质量平衡残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明精确 CPC 26820 范围，并披露纤维聚合物、混纺、结构、整理、幅宽、单位面积质量、含湿基准和质量等级。 | 产品规格、物料清单、卷布票、分类审查 |
| `dq_temporal_representativeness` | 全部前景记录 | 覆盖包含每条申报路线的代表性时期，并说明停机、试制批、返工和异常操作。 | 带日期电表导出、批次清单、生产日历、异常日志 |
| `dq_recipe_completeness` | 湿法加工 | 按单项商业化学品核对实际加药与批准配方；不得报告集合型 chemicals 行。 | 配方、加药日志、库存核对、供应商规格 |
| `dq_meter_quality` | 水与能源 | 识别电表边界、校准状态、共用负荷分摊和排除用途。 | 校准证书、电表图、分摊工作表 |
| `dq_waste_and_emission_destination` | 废物、废水与排放 | 保留适用的物理身份、区室或去向、处理路线、测量方法和干湿基准。 | 联单、排放记录、实验室报告、监测计划 |
| `dq_uuid_resolution` | 每个 UUID 行 | 仅在 hybrid search 和 direct row read 确认精确语义、流类型、参考属性/单位及必要限定后使用 Tiangong UUID；否则保留原子名称和未解决状态。 | manifest 元数据中的身份审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 确认 UUID `cb5fb579-ee14-4546-9d47-0a088d4dda76`、Product flow 类型、公开状态、精确 CPC 26820 分类、Mass 属性、kg 单位和全部必要产品限定。 | `unsd-cpc-26820` |
| `validate_atomic_inventory` | 过程清单 | 拒绝组合或选择器交换；每项纱线、化学制剂、能源载体、水流、包装组件、废物、废水和基本排放必须独占一行。 | `eu-textiles-bat-2022` |
| `validate_route_completeness` | 系统边界与过程图 | 将申报路线与生产记录核对，纳入所有实际执行的预处理、染色、水洗、干燥、热定型、整理、返工、减排、废水和包装操作。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_foreground_amounts` | 全部定量清单行 | 拒绝 AI 估计和无凭证默认范围；数量必须来自前景记录或按申报采集协议计算。 |  |
| `validate_mass_balance` | 每个生产批次 | 核对纱线与化学品载体质量、中间及最终产品质量、废物、在制品和有凭证水分变化；披露并调查残差。 |  |
| `validate_allocation` | 共用操作与返工 | 核实已优先尝试细分、内部返工未重复计数、所选物理关系有合理依据、任何回收方法均另行披露。 | `iso-14044-2006` |
| `validate_uuid_evidence` | UUID 交换 | 拒绝缺少 hybrid-search 候选证据和 Tiangong direct row read 精确语义及参考属性/单位复核的任何 UUID。 |  |
| `validate_bilingual_alignment` | PCR 渲染 | 确认中英文的有序 process ID、row ID、rule ID、source ID、已确认 UUID、机器 token 和行序完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门口 CPC 26820 成品织物的前景生产数据包 |
| downstream_use | 完成方法、身份、来源和质量审查后可投影为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 需要具有相容地域、技术、结构和整理路线的人造纤维制机织绒头或绳绒织物的产品足迹与生命周期模型 |
| excluded_use | 毛巾织物、狭幅织物、全棉产品、其他纤维制 CPC 26830 织物、针织或非织造纺织品、通用纺织品代理，或湿法加工和整理路线未知的产品 |
| required_metadata | CPC code; product UUID; fibre polymer and blend; filament/staple form; construction; width; mass per area; moisture basis; colour and finish; recycled content; route; included and outsourced operations; site and geography; period; allocation; waste destinations; resolved and unresolved identities |
| required_quality_disclosure | 前景记录覆盖与校准；配方核对；质量平衡残差；电表分摊；排放方法；路线代表性；未解决 UUID；截断；返工；偏离本 PCR 的事项 |
| update_trigger | 纤维或混纺、结构、染料或整理配方、湿法加工路线、能源或水系统、减排、废物去向、包装、场址、地域、供应商数据集、分配或生产效率发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-26820` | 官方指导（`official_guidance`） | United Nations Statistics Division, CPC Version 3.0 classification structure and explanatory material for subclass 26820, https://unstats.un.org/unsd/classifications/; retrieved 2026-08-12 | 产品类别范围、排除项和精确分类身份 |
| `jrc-textiles-bref-2023` | 官方指导（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, published January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry; retrieved 2026-08-12 | 过程分解、路线披露、湿法加工、整理、排放和监测背景 |
| `eu-textiles-bat-2022` | 标准（`standard`） | Commission Implementing Decision (EU) 2022/2508 of 9 December 2022 establishing BAT conclusions for the textiles industry, OJ L 325, pp. 112-161, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj; retrieved 2026-08-12 | 系统边界、化学品与资源清单、监测、排放、废水、废物和数据质量规则 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including applicable amendments, https://www.iso.org/standard/38498.html; retrieved 2026-08-12 | 分配层级、过程细分、物理关系和透明方法披露 |
