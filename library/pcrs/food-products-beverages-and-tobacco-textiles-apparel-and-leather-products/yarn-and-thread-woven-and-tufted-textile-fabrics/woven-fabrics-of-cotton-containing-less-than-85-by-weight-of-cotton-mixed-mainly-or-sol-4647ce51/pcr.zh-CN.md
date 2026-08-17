---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-less-than-85-by-weight-of-cotton-mixed-mainly-or-sol-4647ce51
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 含棉低于 85%、主要或仅与人造纤维混纺的棉机织物

## 1. 范围与适用性

本 PCR 适用于棉占干态纺织品质量低于 85%，且非棉组分主要或全部为人造纤维的机织物。边界从棉纱和人造纤维纱线进厂开始，包括纱线准备、织造、检验与修补；当这些工序用于所声明的可售织物时，还包括湿法前处理、染色或印花、整理、干燥或热定形，以及厂内废水处理。具体数据集必须声明参考产品是坯布、漂白、染色、印花还是其他整理状态。

本 PCR 不包括含棉质量分数达到或超过 85% 的织物；CPC 声明范围外的针织、簇绒、非织造、狭幅、起绒、毛巾、纱罗、轮胎帘子布及其他特殊织物；作为上游数据集以外的纤维和纱线生产；服装或制成品制造；制造厂门之外的配送；使用和寿命终结。涂层或层压不属于默认路线；若其改变产品身份或功能，须另行声明扩展边界。

本规则用于代表明确工厂、生产线、产品族或生产混合的前景数据包。必须披露纤维组成、织物组织、单位面积质量、幅宽、着色状态、整理方式、生产地域、参考期和纳入工序，以便使用者判断代表性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-less-than-85-by-weight-of-cotton-mixed-mainly-or-sol-4647ce51 |
| classification_refs | CPC 3.0: 26630 |
| covered_products | 棉低于干态纺织品质量 85%、且非棉组分主要或全部为人造纤维的机织物；实际状态及纳入工序已声明时，包括坯布和湿法加工状态。 |
| excluded_products | 含棉达到或超过 85% 的织物；非棉组分并非主要为人造纤维的织物；针织、簇绒、非织造、狭幅、起绒、毛巾、纱罗、轮胎帘子、涂层、层压或其他特殊织物；纱线、服装及纺织制成品。 |
| representative_product | 在工厂生产、满足所声明组成和结构规格的棉/人造纤维混纺机织物生产混合。 |
| production_route | 纱线接收和组成核验；整经或络筒及条件性上浆；织造；检验和修补；条件性湿法前处理、着色和整理；条件性厂内废水处理。 |
| market_state | 制造厂门处可售干态织物，按声明以坯布、漂白、染色、印花或其他整理状态供应。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所声明组成、结构和整理规格的可售棉/人造纤维混纺机织物。 |
| How much | 制造厂门处按所声明干态或调湿质量基准计的 1 kg 可售织物。 |
| How well | 棉低于干态纺织品质量的 85%；其余纤维主要或全部为人造纤维；织物满足所声明幅宽、单位面积质量、组织、颜色和整理验收要求。 |
| How long or cycle | 在工厂门交付的一个完整制造批次或报告期生产混合；不指定使用阶段寿命。 |
| reference_flow_link | 参考流是实现功能单位所需的合格可售织物质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 干态或调湿质量基准及参考含湿率；棉质量分数；每种人造纤维的类型和质量分数；任何其他纤维分数；机织组织；单位面积质量；有效幅宽；坯布、漂白、染色、印花或整理状态；颜色或印花路线；功能整理；工厂地域；报告期；纳入的生产工序 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品和纺织材料流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按一个已声明的干态或调湿基准报告质量。记录调湿方法或含湿率，并在归一化前将全部纺织品投入和产出转换至同一基准。 |
| `fibre_composition_balance` | 参考产品组成 | 质量分数 | kg/kg | 纤维分数应由产品规格并以测试、物料清单或批次记录支撑；各分数在声明的舍入容差内合计为 1，棉低于 0.85，非棉部分主要或全部为人造纤维。 |
| `area_mass_conversion` | 以长度或面积报告的记录 | 单位面积质量和有效幅宽 | kg、m2、kg/m2 | 使用同一批次的实测卷长、有效幅宽和单位面积质量换算，并保留原始值与换算值。 |
| `net_water_use` | 湿法纺织过程 | 体积 | m3 | 分别记录供水与内部回用/循环水。净耗水量等于供水量减去返回同一过程的内部回用水量；不得扣除排放废水。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽和购入热量 | 能量或载能体质量/体积 | kWh、MJ、kg 或 m3 | 分别保留购电、各类燃料、外购蒸汽和外购热量；用有记录的换算因子转换，不得把现场燃料燃烧与外购能源合并。 |
| `normalization_to_reference` | 全部清单行 | 行特定属性 | 行特定单位/kg | 在计入期初期末库存、返工、废品和中间转移后，将报告期数量归一化为 1 kg 合格可售参考织物。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 棉纱和人造纤维纱线进入织物制造场址，须声明供应商、纤维组成、纱支、含湿或调湿基准及上游数据集引用。 |
| starting_condition_role | 织物制造的门到门前景起点；上游纤维和纱线生产作为链接的背景或次级数据集。 |
| product_classification_scope | 棉低于干态质量 85%、非棉部分主要或全部为人造纤维的棉机织物，对应 CPC 3.0 代码 26630。 |
| recursive_input_rule | 同类别机织物作为厂内返工或整理投入时，按独立投入记录其来源、状态、数量及上游数据集，不得在同一前景过程中递归重建其先前制造。 |
| upstream_dataset_requirement | 为棉纱、每种人造纤维纱、购入化学品、供水、电力、燃料、热量、纳入时的运输及场外处理链接组成和地域具有代表性的数据集。 |
| disclosure | 声明产品状态、纳入和排除工序、外包工序、共享公用工程、废水路线、直接排放、内部循环、分配选择及任何数据缺口或截断。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景织物制造 | 纳入把进厂纱线转化为所声明可售织物的全部现场工序，以及其纺织材料、过程化学品、水、能源、废物、废水和直接空气或水排放。 | eu-textiles-bat-2022 |
| `boundary_rule_2` | 条件性湿法加工 | 仅在相应工序用于所声明产品时纳入退浆、煮练、漂白、丝光、染色、印花、整理、干燥和热定形；披露每个纳入或外包工序，并为每个外包工序链接上游数据集。 | eu-textiles-bat-2022 |
| `boundary_rule_3` | 上游纱线和纤维生产 | 前景边界排除纤维和纱线生产，但必须使用与棉/人造纤维组成、纱线规格、地域和供应路线匹配的独立上游数据集。 | eu-pef-2021 |
| `boundary_rule_4` | 首个前景清单 | 首个数据集应避免未报告截断。记录全部已识别物质和能量流；无法获得的次要流应作为数据缺口明确披露，不得静默省略。 | eu-pef-2021 |
| `boundary_rule_5` | 包装和下游阶段 | 默认排除包装、配送、服装加工、使用和寿命终结；研究明确扩展边界时，扩展结果必须与厂门织物数据集保持可分离。 | eu-pef-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | 纱线接收、整经或络筒及上浆 | required | 仅在实施上浆或残留浆料可归属于产品路线时记录上浆流。 | 核验组成并为织造准备经纬纱。 | kg 准备后纱线 |
| `weaving` | 织造 | required | 始终纳入。 | 用准备后的纱线生产坯布。 | kg 坯布 |
| `inspection_mending` | 检验、修补和裁边 | required | 始终纳入。 | 区分合格织物、返工和废品。 | kg 合格织物 |
| `wet_pretreatment` | 退浆、煮练、漂白或丝光 | conditional | 所声明织物实施任一列明工序时纳入。 | 为销售或着色准备机织物。 | kg 前处理织物 |
| `coloration` | 染色或印花 | conditional | 所声明织物在报告场址染色或印花时纳入。 | 赋予所声明颜色或印花。 | kg 着色织物 |
| `finishing` | 物理或化学整理、干燥或热定形 | conditional | 报告场址施加整理或热处理时纳入。 | 达到所声明外观、手感、尺寸或功能性能。 | kg 整理织物 |
| `wastewater_treatment` | 厂内废水处理 | conditional | 纳入湿法工序产生的废水在现场处理时纳入。 | 排放或转移前处理水性废物。 | m3 已处理废水 |

### 过程：纱线接收、整经或络筒及上浆（`yarn_preparation`）

#### 输入

##### 产品流

###### 棉纱投入（`cotton_yarn_input`）

记录归属于所声明产品路线的干基棉纱质量，包括可归属的期初库存并排除无关产品。

- 选定流：Cotton yarn
- 流属性/单位：Mass / kg
- 数量规则：由批次领料和库存变化计算棉纱消耗并按参考织物产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_balance`

###### 聚酯短纤纱投入（`man_made_yarn_input`）

使用聚酯短纤纱时，将其干基质量与棉纱及其他纱线产品分开记录。所声明产品使用的其他人造纤维纱须增加独立的原子流行。

- 选定流：Polyester staple-fibre yarn
- 流属性/单位：Mass / kg
- 数量规则：由批次领料和库存变化计算人造纤维纱消耗并按参考织物产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_material_balance`

###### 天然淀粉浆料（`sizing_chemicals`）

使用天然淀粉对经纱上浆时，本卡仅记录该供应产品并保留固含量。合成浆料或助剂须增加独立的原子流行。

- 选定流：Native starch sizing agent
- 流属性/单位：Mass / kg
- 数量规则：产品路线化学品领用量减退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_preparation_records`
- 来源：`eu-textiles-bat-2022`

###### 纱线准备电力（`yarn_preparation_electricity`）

记录络筒、整经、上浆、泵、控制和可归属车间调湿的计量或分配电力。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或按物理关系分配的分表总量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_preparation_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备后的经纬纱（`prepared_yarn_output`）

按与纱线投入相同的质量基准记录转入织造的准备后纱线。

- 选定流：Prepared cotton/man-made-fibre yarn blend
- 流属性/单位：Mass / kg
- 数量规则：转入织造的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后纱线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_preparation_records`

##### 废物流

###### 废弃混纺纱废物（`yarn_preparation_waste`）

记录所声明产品批次废弃棉/聚酯混纺纱的实测质量。淀粉残余、扫集物及组成不同的纱线废物须增加独立的原子流行。

- 选定流：Discarded cotton/polyester blended yarn
- 流属性/单位：Mass / kg
- 数量规则：按处理或回收路线实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_preparation_records`

##### 基本流

### 过程：织造（`weaving`）

#### 输入

##### 产品流

###### 供给织机的准备后纱线（`weaving_yarn_input`）

记录进入织机区域的经纬纱，并与织物、可回收边纱、纱线废物和库存变化核对。

- 选定流：Prepared cotton/man-made-fibre yarn blend
- 流属性/单位：Mass / kg
- 数量规则：由转移和库存记录计算织机纱线投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_records`

###### 织造电力（`weaving_electricity`）

记录织机、压缩空气、控制、物料搬运和可归属调湿用电。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或按物理关系分配的分表总量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 棉混纺坯布（`greige_fabric_output`）

记录转入检验或湿法加工的实测坯布质量。

- 选定流：Greige woven cotton/man-made-fibre blend fabric
- 流属性/单位：Mass / kg
- 数量规则：实测合格和可返工坯布产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_records`

##### 废物流

###### 废弃机织布边（`weaving_textile_waste`）

记录所声明产品批次废弃机织布边的实测质量。开机废料及组成不同的纺织废物须增加独立的原子流行。

- 选定流：Discarded cotton/polyester woven-fabric selvage
- 流属性/单位：Mass / kg
- 数量规则：按路线实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_records`

##### 基本流

###### 纺织粉尘排入空气（`weaving_dust_air`）

织机车间存在可报告直接排放时，记录末端治理后的实测或技术估算粉尘。

- 选定流：Particulate matter, unspecified, to air
- 流属性/单位：Mass / kg
- 数量规则：实测出口质量流量或有记录的排放因子估算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_records`
- 来源：`eu-textiles-bat-2022`

### 过程：检验、修补和裁边（`inspection_mending`）

#### 输入

##### 产品流

###### 待检织物（`inspection_fabric_input`）

记录进入终检的织物，并与合格产出、返工和废品核对。

- 选定流：Woven cotton/man-made-fibre blend fabric, intermediate state
- 流属性/单位：Mass / kg
- 数量规则：进入检验的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格检验织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格检验织物（`inspected_fabric_output`）

记录通过所声明结构和外观验收要求的织物。

- 选定流：Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测验收织物产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格检验织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_records`

##### 废物流

###### 被拒收的检验织物（`inspection_reject_waste`）

记录所声明产品批次中未返工的被拒收织物。若裁边和取样废物独立计量，须增加独立的原子流行。

- 选定流：Rejected cotton/polyester woven fabric
- 流属性/单位：Mass / kg
- 数量规则：实测被拒收织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格检验织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_records`

##### 基本流

### 过程：退浆、煮练、漂白或丝光（`wet_pretreatment`）

#### 输入

##### 产品流

###### 进入湿法前处理的织物（`pretreatment_fabric_input`）

对每条纳入的前处理路线记录织物实测质量和进料状态。

- 选定流：Woven cotton/man-made-fibre blend fabric, before pre-treatment
- 流属性/单位：Mass / kg
- 数量规则：统一纺织质量基准下的实测批次投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 前处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_pretreatment_records`

###### 前处理用水（`pretreatment_water`）

分别记录洗涤、退浆、煮练、漂白、丝光、漂洗和设备清洗的供水、回用水和循环水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：实测供水减去返回同一过程的实测内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 前处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_pretreatment_records`
- 来源：`eu-textiles-bat-2022`

###### 前处理用氢氧化钠（`pretreatment_chemicals`）

使用氢氧化钠进行煮练或丝光时，本卡仅记录该供应产品并保留其浓度。过氧化氢、酸、酶、表面活性剂及其他产品须增加独立的原子流行。

- 选定流：Sodium hydroxide solution
- 流属性/单位：Mass / kg
- 数量规则：按产品计的化学品领用量减退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 前处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_pretreatment_records`
- 来源：`eu-textiles-bat-2022`

###### 前处理用外购蒸汽（`pretreatment_energy`）

将前处理路线使用的外购蒸汽与电力、外购热量和现场燃料分开记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：计量蒸汽能量，或按有记录的供应状态将蒸汽质量换算为能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 前处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_pretreatment_records`
- 来源：`eu-textiles-bat-2022`

###### 前处理用电力（`pretreatment_electricity`）

将前处理路线使用的外购电力作为一个独立交换记录。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或按物理关系分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 前处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_pretreatment_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 前处理机织物（`pretreated_fabric_output`）

记录转入着色、整理或销售的织物，并声明已完成的前处理工序。

- 选定流：Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测验收产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 前处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_pretreatment_records`

##### 废物流

###### 前处理废水（`pretreatment_wastewater`）

记录废水体积和路线；保留已测 pH、温度、电导率、COD 或 TOC、悬浮物及相关化学品特定参数。

- 选定流：Textile pre-treatment wastewater
- 流属性/单位：Volume / m3
- 数量规则：转入厂内处理、场外处理或排放的实测废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 前处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_pretreatment_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：染色或印花（`coloration`）

#### 输入

##### 产品流

###### 进入着色的织物（`coloration_fabric_input`）

记录进入每条染色或印花路线的干态或调湿基准织物质量。

- 选定流：Woven cotton/man-made-fibre blend fabric, before coloration
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 着色织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`

###### C.I. 活性蓝 19 染料（`coloration_chemicals`）

所声明配方含 C.I. 活性蓝 19 时，本卡仅记录该供应染料配方。其他染料、颜料、盐、碱、粘合剂或助剂须增加独立的原子流行。

- 选定流：C.I. Reactive Blue 19 dye formulation
- 流属性/单位：Mass / kg
- 数量规则：按配方计的化学品领用量减退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 着色织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022`

###### 着色用水（`coloration_water`）

分别记录配液、洗涤、漂洗、浆料制备和设备清洗的供水、回用水和循环水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：实测供水减去返回同一过程的实测内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 着色织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022`

###### 着色用外购蒸汽（`coloration_energy`）

将着色路线使用的外购蒸汽与电力、外购热量和现场燃料分开记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：计量蒸汽能量，或按有记录的供应状态将蒸汽质量换算为能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 着色织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022`

###### 着色用电力（`coloration_electricity`）

将着色路线使用的外购电力作为一个独立交换记录。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或按物理关系分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 着色织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 着色机织物（`coloured_fabric_output`）

记录满足所声明颜色或印花验收规格的织物。

- 选定流：Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测验收着色织物产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 着色织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`

##### 废物流

###### 着色废水（`coloration_wastewater`）

记录废水体积和路线；保留已测色度、COD 或 TOC、pH、电导率及相关金属或化学品特定参数。

- 选定流：Untreated coloration wastewater
- 流属性/单位：Volume / m3
- 数量规则：转入处理或排放的实测废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 着色织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coloration_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：物理或化学整理、干燥或热定形（`finishing`）

#### 输入

##### 产品流

###### 进入整理的织物（`finishing_fabric_input`）

记录进入每条整理线的织物质量和进料状态。

- 选定流：Woven cotton/man-made-fibre blend fabric, before finishing
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`

###### 氨基改性硅柔软剂（`finishing_chemicals`）

使用氨基改性硅柔软剂时，本卡仅记录该供应配方。树脂、交联剂、拒水拒油剂、阻燃剂、粘合剂或其他整理剂须增加独立的原子流行。

- 选定流：Amino-functional silicone softener formulation
- 流属性/单位：Mass / kg
- 数量规则：按配方计的化学品领用量减退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022`

###### 整理用外购蒸汽（`finishing_energy`）

将整理、干燥、焙烘或热定形使用的外购蒸汽与电力、外购热量和现场燃料分开记录。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：计量蒸汽能量，或按有记录的供应状态将蒸汽质量换算为能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022`

###### 整理用电力（`finishing_electricity`）

将整理、干燥、焙烘或热定形使用的外购电力作为一个独立交换记录。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或按物理关系分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理后参考织物（`finished_fabric_output`）

记录满足所声明组成、结构、颜色和整理验收规格的可售织物。

- 选定流：Woven fabrics of cotton, containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres `a8f7d2d4-e619-4ae6-8f76-0557229851b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 归一化参考产品产出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 kg 可售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

###### 总挥发性有机碳排入空气（`finishing_air_emissions`）

本卡仅记录治理后排入空气的总挥发性有机碳。粉尘、甲醛、氨及其他物质须增加独立的原子基本流行。

- 选定流：Total volatile organic carbon, to air
- 流属性/单位：Mass / kg
- 数量规则：治理后总挥发性有机碳的实测质量流量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022`

### 过程：厂内废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 接收的纺织废水（`wwt_wastewater_input`）

记录各纳入工序送入的废水体积和污染负荷，并区分内部转移与直接环境排放。

- 选定流：Textile process wastewater
- 流属性/单位：Volume / m3
- 数量规则：实测进水体积和污染物质量负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可归属于厂内处理的参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022`

###### 废水处理电力（`wwt_treatment_inputs`）

将厂内废水处理使用的电力作为一个独立交换记录，共享处理仅按可归属的纺织废水负荷分配。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：计量电力按物理关系分配至处理废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 已处理废水及每 1 kg 参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022`

###### 三氯化铁混凝剂（`wwt_ferric_chloride`）

投加三氯化铁时，本卡仅记录该供应溶液并保留其浓度。其他处理试剂须增加独立的原子流行。

- 选定流：Ferric chloride solution
- 流属性/单位：Mass / kg
- 数量规则：实测试剂领用量减退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 已处理废水及每 1 kg 参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理污泥（`wwt_sludge`）

记录污泥湿质量、干固体、危险属性和处理去向。

- 选定流：Textile wastewater-treatment sludge
- 流属性/单位：Mass / kg dry solids and kg wet sludge
- 数量规则：实测污泥质量并采用实测或抽样干固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 已处理废水及每 1 kg 参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 处理后排水（`wwt_effluent_to_water`）

本卡仅记录处理后的排水体积。每项实测污染物负荷须增加独立的原子基本流行；内部回用水应作为产品流而非环境排放记录。

- 选定流：Water, to river
- 流属性/单位：Volume / m3
- 数量规则：实测排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可归属于厂内处理的参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-textiles-bat-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 可分别计量的产品和过程 | 尽可能通过划分生产线、批次、计量表和过程记录避免分配，使投入、废物和排放直接归属于所声明织物。 | eu-pef-2021 |
| `allocation_rule_2` | 共享电力和设备 | 使用有因果关系的物理驱动量分配共享电力和设备服务，如计量机器小时、织机小时、压缩空气需求或处理纺织品质量；披露驱动量和分母。 | eu-pef-2021 |
| `allocation_rule_3` | 共享湿法过程和公用工程 | 按适用情况使用实测浴液体积、浴比、处理织物质量、热需求或污染负荷分配共享水、蒸汽、热量、化学品、废水和处理；仅当质量代表物理关系时方可使用纯质量分配。 | eu-pef-2021; eu-textiles-bat-2022 |
| `allocation_rule_4` | 返工和内部循环 | 返工负荷留在引起返工的产品路线。内部回用纱线、织物、浆料、水或热量不得作为避免产品抵扣；从总消耗中扣除经核验的内部返回量并披露循环。 | eu-textiles-bat-2022 |
| `allocation_rule_5` | 可售共产品或回收材料 | 无法划分或系统扩展时使用可量化物理关系；仅在不存在可辩护物理关系时使用经济分配，并披露价格、期间、敏感性及纺织废料处理。 | eu-pef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_material_balance` | `yarn_preparation` | 棉和人造纤维纱消耗与组成 | 采购、领料、库存、物料清单和组成记录 | yarn_id; fibre_type; cotton_fraction; man_made_fraction_by_type; dry_or_conditioned_mass; moisture_basis; opening_stock; receipts; issues; returns; closing_stock; product_lot | 将领料和库存与产品批次核对；用证书或测试核验组成 | kg 和质量分数 | 每批，按月汇总 | 至少连续 12 个代表性月份，较短生产活动覆盖完整活动 | 服务该产品的全部纱库和准备线 | 消耗=期初+收料-退回-期末；按可追溯领料或物料清单分配到批次 | 校准秤；供应商证书；组成测试；库存核对；异常记录 |
| `cp_yarn_preparation_records` | `yarn_preparation` | 上浆化学品、电力、准备后纱线和废物 | 仪表、批记录、化学品领料、转移称重和废物票据 | line_id; lot_id; prepared_yarn_mass; chemical_product; chemical_mass; electricity; waste_mass; waste_route; operating_hours | 按生产线或活动采集并核对准备后纱线转移和废物 | kg 和 kWh | 每批或每班，按月汇总 | 与参考产品相同 | 全部准备设备及可归属车间调湿 | 按产品路线汇总；共享用量按实测运行小时或吞吐量分配 | 仪表校准；化学品库存核对；废物票据；生产日志 |
| `cp_weaving_records` | `weaving` | 纱线投入、电力、坯布、纺织废物和粉尘 | 织机计数、转移称重、分表、废物称重和排放测量 | loom_id; lot_id; yarn_input; greige_output; electricity; compressed_air_driver; humidification_driver; waste_mass; dust_flow; dust_concentration | 按织机或织机组采集并核对纺织质量 | kg、kWh、Nm3 和 kg 污染物 | 每班或每批，按月汇总 | 与参考产品相同 | 服务该产品的全部织机和辅助系统 | 直接记录求和；共享公用工程按织机小时或因果需求分配；测量时计算粉尘质量流 | 校准仪表和秤；织机日志；治理检查；质量平衡异常记录 |
| `cp_inspection_records` | `inspection_mending` | 检验投入、合格产出、返工和废品 | 卷票、检验记录和废物称重 | roll_id; incoming_mass; accepted_mass; rework_mass; reject_mass; trimming_mass; disposition | 称重或由经核验卷长、幅宽和单位面积质量计算并记录去向 | kg、m、m2 和 kg/m2 | 每卷或每批 | 与参考产品相同 | 服务该产品的全部检验修补线 | 将进料与验收、返工、废品、裁边和库存变化核对 | 校准秤；检验规格；卷级追溯；核对结果 |
| `cp_wet_pretreatment_records` | `wet_pretreatment` | 织物、水、化学品、能源、产出和废水 | 批记录、流量计、分表、化学品领料和废水记录 | route; lot_id; fabric_in; fabric_out; water_supplied; water_reused; chemical_product_and_mass; electricity; steam; heat; fuel; wastewater_volume; pH; conductivity; COD_or_TOC; solids | 按设备批次或连续活动采集并保留工序顺序 | kg、m3、kWh、MJ 和参数特定单位 | 每批或活动；水和能源至少每月 | 与参考产品相同 | 全部纳入前处理线及可归属公用工程 | 按路线汇总；扣除内部回用；按验收产出归一化；损失和废水分开 | 仪表校准；配方和库存核对；实验室 QA；水与能源平衡 |
| `cp_coloration_records` | `coloration` | 织物、染料助剂、水、能源、产出和废水 | 配方、批记录、仪表、化学品领料和实验室记录 | route; lot_id; fabric_in; fabric_out; dye_or_pigment; auxiliary; supplied_mass; water_supplied; water_reused; electricity; steam; heat; wastewater_volume; colour; COD_or_TOC; pH; conductivity; relevant_metals | 按染色批次或印花活动采集并把配方链接至验收产出 | kg、m3、kWh、MJ 和参数特定单位 | 每批或活动；排放按要求频次 | 与参考产品相同 | 全部纳入染色和印花线 | 配方和仪表值求和；按验收产出归一化；返工和清洗须归属 | 仪表校准；配方审批；库存核对；颜色 QA；实验室 QA |
| `cp_finishing_records` | `finishing` | 织物、整理剂、能源、产出和直接空气排放 | 配方、批记录、仪表、生产及烟道或排放因子记录 | finish_type; lot_id; fabric_in; fabric_out; formulation_and_mass; electricity; steam; heat; fuel; exhaust_flow; temperature; dust; TVOC; formaldehyde; ammonia | 采集每个整理和热处理活动；测量排放或保留因子与运行数据 | kg、kWh、MJ、Nm3 和 kg 污染物 | 每批或活动；排放按要求频次 | 与参考产品相同 | 全部纳入整理、干燥、焙烘和热定形设备 | 按整理路线汇总；由代表性浓度和排气流量计算污染物质量流 | 仪表校准；配方和库存核对；烟道测试；运行日志；验收测试 |
| `cp_wastewater_treatment_records` | `wastewater_treatment` | 进水、试剂、电力、出水、污染负荷和污泥 | 流量计、试剂领料、分表、实验室结果和污泥票据 | source_process; influent_volume; influent_concentration; effluent_volume; effluent_concentration; sample_basis; electricity; reagent_mass; sludge_wet_mass; dry_solids_fraction; destination | 适当时使用流量比例混合采样，并将代表性样品链接至排放体积 | m3、kg、kWh、mg/L 和 kg 干固体 | 可用时连续流量；参数按许可或 BAT 频次；按月汇总 | 与参考产品相同 | 接收纳入纺织废水的厂内处理 | 污染负荷=代表性浓度×对应体积；共享处理按体积和污染负荷分配 | 校准；样品监管链；认可实验室结果；采样计划；污泥票据；流量平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | 按纤维计的纱线消耗 | 干基纱线消耗=期初库存+收料-退回-期末库存；各纱线量乘经核验纤维分数并按可售参考织物归一化 | 库存和领料质量；含湿基准；纤维组成；参考产出 | 每 kg 参考织物的棉纱当量和各人造纤维纱当量 | un-cpc-3-2025 |
| `calc_rule_2` | 卷记录转质量 | 织物质量=卷长×有效幅宽×单位面积实测质量；使用匹配批次值并在可用时与称重核对 | 长度；有效幅宽；单位面积质量 | kg 织物 | eu-pef-2021 |
| `calc_rule_3` | 过程归一化 | 归一化量=可归属报告期流量÷合格过程产出；再用实测成品率把中间过程结果链接至最终 1 kg 参考流 | 可归属流；过程产出；返工；库存变化；成品率 | 每过程产出及每 kg 参考织物的行特定量 | eu-pef-2021 |
| `calc_rule_4` | 耗水 | 过程净用水=供水-经核验返回过程的内部回用/循环水；废水排放和产品/废物含水另报 | 供水；内部回用；废水体积 | m3/kg 过程产出 | eu-textiles-bat-2022 |
| `calc_rule_5` | 能源 | 仅为附加汇总指标把各载能体换算成 MJ；保留原始电力、燃料、蒸汽、热量和换算因子 | kWh 电力；燃料质量/体积和热值；蒸汽或热量 | 各载能体量及 MJ/kg 过程产出 | eu-textiles-bat-2022 |
| `calc_rule_6` | 废水污染负荷 | 污染负荷=代表性浓度×对应排放体积并换算单位；在匹配采样期计算进出水负荷 | 浓度；体积；采样期 | kg 污染物/kg 参考织物 | eu-textiles-bat-2022 |
| `calc_rule_7` | 纺织质量平衡 | 闭合差=纱线和织物投入+可归属整理增重-可售织物-纺织废物-样品-库存增加；报告相对总纺织投入的未解释差异 | 纺织品投入产出；整理增重；废物；样品；库存变化 | kg 差异及闭合率 | eu-textiles-bat-2022 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity` | 产品身份 | 保留批次证据，证明棉低于干态纺织品质量 85%、非棉部分主要或全部为人造纤维；识别每种纤维和产品状态。 | 物料清单；供应商证书；组成测试；产品规格 |
| `dqr_completeness` | 工序和流覆盖 | 覆盖全部必需工序和该产品实际实施的条件性工序；清查材料、化学品、水、能源、废物、废水和直接排放且不得静默截断。 | 工艺流程图；投入产出清单；数据缺口清单；边界核对 |
| `dqr_temporal` | 参考期 | 可用时采用至少连续 12 个代表性月份；较短活动覆盖完整活动，并披露季节性、启停和异常生产。 | 生产日历；仪表导出；活动记录；代表性声明 |
| `dqr_technology` | 路线和设备 | 识别织机技术、上浆路线、湿法模式、适用时的浴比或带液率、干燥或热定形技术、废水路线和治理。 | 设备清单；路线单；运行参数；场址图 |
| `dqr_geography` | 场址和上游数据集 | 声明制造地域，以及电力、水、燃料、纱线、化学品和处理数据集地域；论证代理数据。 | 场址元数据；供应商位置；数据集元数据；代理论证 |
| `dqr_precision` | 实测和计算数量 | 报告仪表和秤校准、采样设计、分配份额、缺失数据处理以及重要流的不确定性或变异。 | 校准证书；实验室 QA；分配工作簿；不确定性记录 |
| `dqr_consistency` | 双语和机器投影 | 双语使用相同 process id、row id、rule id、受控 token、source id 和规范含义；英文 Markdown 变更后重新生成 `structured.yaml`。 | 双语对齐评审；确定性投影检查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR 和参考流身份 | 参考产品 UUID、Mass 流属性 UUID、质量单位组 UUID 和 kg 单位必须与所声明参考对象完全一致。 |  |
| `validation_rule_2` | 纤维组成 | 棉质量分数必须低于 0.85，各纤维分数须在声明舍入容差内合计为 1，非棉部分须主要或全部为人造纤维；缺少纤维类型分数为错误。 | un-cpc-3-2025 |
| `validation_rule_3` | 必需限定信息 | 必须提供干态或调湿基准、参考含湿率、纤维分数、组织、单位面积质量、有效幅宽、产品状态、颜色或印花路线、整理、地域、期间和纳入工序。 | un-cpc-3-2025 |
| `validation_rule_4` | 过程图完整性 | 必须存在 `yarn_preparation`、`weaving` 和 `inspection_mending`；必须纳入为所声明产品实际实施的各条件性过程；每个排除或外包工序须披露并链接数据集。 | eu-textiles-bat-2022 |
| `validation_rule_5` | 纺织质量平衡 | 纱线和织物投入、整理增重、可售产出、废物、样品、返工和库存变化须在一个质量基准上核对；超出生产者记录容差的未解释差异为错误。 | eu-textiles-bat-2022 |
| `validation_rule_6` | 水、能源、化学品和排放 | 每个纳入过程须提供水、各载能体、过程化学品、废物、废水和直接排放，或以证据明确确认不适用。 | eu-textiles-bat-2022 |
| `validation_rule_7` | 湿法过程废水 | 湿法前处理、着色或湿整理须识别废水路线、体积和可得污染物参数；厂内处理须区分进水转移、处理后排放、回用和污泥。 | eu-textiles-bat-2022 |
| `validation_rule_8` | 分配 | 共享流须识别分配驱动量和分母；优先划分过程；无书面理由和敏感性披露的经济分配为错误。 | eu-pef-2021 |
| `validation_rule_9` | 证据和前景数量 | 每项受外部约束的规则须引用已列 source id；没有可靠来源数值时，清单数量须保持为 `foreground_record` 要求，不得填写 AI 生成范围。 | eu-pef-2021 |
| `validation_rule_10` | 完整性和代表性 | 数据集须披露时间、技术、地域和精度证据，以及全部数据缺口、代理、截断和排除过程。 | eu-pef-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 棉/人造纤维混纺机织物生产的前景厂门数据集。 |
| downstream_use | 当组成、结构、整理、地域、技术和期间具有代表性时，可作为服装、纺织制成品、工业纺织产品和生命周期模型的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 对所报告厂门边界内声明的可售织物状态建模；仅在对齐纤维组成、质量基准、产品状态、纳入湿法过程、分配、地域、技术和数据质量后比较。 |
| excluded_use | 纤维或纱线生产；针织、非织造、涂层、层压或特殊织物；服装制造；使用和寿命终结；或含棉达到/超过 85% 的任何产品，除非另有经评审规则明确适用。 |
| required_metadata | PCR id；参考 UUID；各纤维组成；干态或调湿质量基准；含湿率；组织；单位面积质量；幅宽；坯布/漂白/染色/印花/整理状态；颜色和整理；工厂和上游地域；技术；报告期；纳入及外包工序；用水和废水路线；分配；保留在数据集元数据中的来源和数据集版本。 |
| required_quality_disclosure | 完整性；时间、技术和地域代表性；精度；仪表和实验室 QA；分配份额；质量平衡闭合；代理数据集；数据缺口；截断；暂定范围；不确定性。 |
| update_trigger | 纤维组成或供应路线、产品状态、织机或湿法技术、整理化学、能源或水系统、废水处理、分配驱动量、地域或代表性绩效超出记录变异时更新；否则至少每三年复核。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司《Central Product Classification Version 3.0》，CPC 结构和分类资源，https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期 2026-08-11）。 | 产品类别身份及 CPC 26630 的组成边界。 |
| `eu-textiles-bat-2022` | official_guidance | 欧盟委员会 2022 年 12 月 9 日实施决定 (EU) 2022/2508，纺织工业 BAT 结论，CELEX 32022D2508，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508（检索日期 2026-08-11）。 | 织物生产和织造路线；上浆和前处理；染色和整理；投入产出清单；水、能源、化学品、废物、废水、空气排放和监测规则。 |
| `eu-pef-2021` | official_guidance | 欧盟委员会 2021 年 12 月 15 日关于环境足迹方法的建议 (EU) 2021/2279，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11）。 | 功能单位与归一化；系统边界披露；分配层级；完整性；代表性；精度和数据集质量。 |
