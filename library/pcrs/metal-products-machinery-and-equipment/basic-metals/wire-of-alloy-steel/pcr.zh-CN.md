---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-alloy-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 合金钢丝

## 1. 范围与适用性

本 PCR 适用于以模具拉拔方式减小合金钢盘条或已部分拉拔的合金钢丝截面尺寸的前景生产。边界包括必需的表面预处理、拉丝、精整和出厂准备，以及在相关工序构成申报市场状态时纳入的电加热或天然气加热退火和钢丝连续镀锌。仅在声明合金牌号、直径、力学状态和表面状态时，本 PCR 才适用于不锈钢丝、硅锰钢丝及其他合金钢丝。铅浴索氏体化处理、油淬火、非锌金属镀层、电镀和有机涂层必须先完成经评审的方法扩展方可使用。

前景边界始于合金钢盘条或已部分拉拔的合金钢丝进入报告设施，终于合格钢丝完成称重并在设施发运门处具备交付条件。上游炼钢和盘条生产、进出厂运输、客户加工、使用、维护和寿命终结均不在前景边界内，需要单独的数据集。钢丝绳、绞合钢丝、绝缘电线、焊接耗材、刺钢丝、丝网和成品弹簧因产品功能不同或需要额外加工而不在本 PCR 范围内。

本候选 PCR 不提供由外部资料推断的默认清单范围。重要交换仍须通过前景数据采集确定；在至少两项相互独立且边界兼容的原始来源足以支撑范围之前，相关证据需求记录在 manifest 中。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-alloy-steel |
| classification_refs | CPC 3.0：41267，合金钢丝 |
| covered_products | 以钢丝形式销售的不锈钢、硅锰钢或其他合金钢冷拉丝，包括拉拔态、热处理态、涂油态或连续镀锌态，但须声明合金牌号、直径、力学状态和表面状态 |
| excluded_products | 铁丝或非合金钢丝；未经拉拔即销售的热轧盘条；绞合钢丝和钢丝绳；绝缘电线；配制为耗材的焊丝产品；丝网、紧固件、弹簧及其他金属制品 |
| representative_product | 盘卷或卷绕在线轴上交付、符合所声明牌号、公称直径、力学状态和表面状态的合金钢丝 |
| production_route | 表面预处理后进行干式或湿式模具拉拔；按条件纳入热处理；按条件纳入钢丝连续镀锌；随后精整、检验、卷绕和发运包装 |
| market_state | 位于生产设施发运门处的成品合金钢丝；包装单独列入清单，不计入参考产品质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产设施发运门处提供满足所声明化学牌号、尺寸公差、力学状态和表面规范的合金钢丝 |
| How much | 1,000 kg 合格合金钢丝净质量 |
| How well | 符合所声明的买方或产品规范，包括合金牌号、公称直径和公差、抗拉或热处理状态、表面或镀层状态，以及盘卷或线轴形式 |
| How long or cycle | 一个通过最终检验的生产批次；不建模使用寿命 |
| reference_flow_link | 行 `reference_product_alloy_steel_wire` 中的净称量输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 合金钢丝 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金牌号及适用规范；不锈钢、硅锰钢或其他合金钢类别；公称直径和公差；抗拉或热处理状态；未镀层、涂油或连续镀锌表面状态；适用时的锌镀层质量；干式或湿式拉丝路线；设施地理位置；生产期间；盘卷、线轴或直条形式；包装配置 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明全部必需限定信息。信息缺失时，参考流不完整。TianGong 中的精确参考产品 UUID 尚未解决，不得以通用钢丝代理流替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和金属质量平衡 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 最终检验后用经校准秤确定产品净干质量；线轴、托盘、捆扎带和薄膜不计入参考产品质量，并须单独报告。 |
| `metal_mass_balance` | 合金钢投入、内部转移、可销售钢丝和含金属废物 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对批次期初和期末在制品进行核算，使金属投入等于可销售钢丝、含金属废物和库存变化之和；镀层金属单独核算。 |
| `electricity_conversion` | 交流电投入 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表 kWh 原始值，并按 1 kWh = 3.6 MJ 换算；除非供应商、地理范围、电压和交付边界均与场址一致，否则不得替换为消费组合 UUID。 |
| `natural_gas_volume` | 气态天然气投入 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按所声明的参考温度、压力和含湿状态报告计量气体体积；保留能量和 CO2 计算所用的供应商净热值。 |
| `coating_mass` | 镀锌钢丝 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 根据实测钢丝质量和镀层试验记录，或有记录的镀层面积计算确定沉积锌；不得将锌计入合金钢参考质量平衡。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告设施接收的合金钢盘条或已部分拉拔的合金钢丝，并声明牌号、质量、直径、表面氧化皮或镀层状态以及上游数据集身份 |
| starting_condition_role | 前景转换系统的上游产品投入 |
| product_classification_scope | 以钢丝形式销售的合金钢丝，包括不锈钢、硅锰钢及其他合金牌号；不包括非合金钢丝和下游钢丝制品 |
| recursive_input_rule | 若同一产品类别中已部分拉拔的合金钢丝进入设施，则将其作为带有独立上游数据集的上游产品投入记录一次，仅建模场内新增的拉拔和精整，不得在本前景系统内递归重建其先前生产。 |
| upstream_dataset_requirement | 盘条或已部分拉拔钢丝应使用在供应商、牌号、地理和技术方面具有代表性的数据集；披露再生料含量和炼钢路线假设。 |
| disclosure | 声明初始直径、最终直径、总截面减缩率、拉丝介质、热处理路线、镀层路线和质量、设施地理位置、生产期间、成材率、包装以及所有排除工序。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景转换边界 | 纳入从接收所声明钢丝原料到最终称重和发运准备之间的全部场内材料和能源投入、直接排放、废物及内部转移。 | `eu-jrc-fmp-bref-2022` |
| `boundary_route_conditionals` | 热处理和连续镀锌 | 仅当报告设施为形成所声明产品状态而实施热处理或钢丝连续镀锌时才纳入；否则将过程及其原子交换标记为不适用。 | `eu-jrc-fmp-bref-2022`; `eu-bat-ferrous-2022-2110` |
| `boundary_upstream_downstream` | 前景设施外工序 | 炼钢、盘条生产、运输、客户加工、使用和寿命终结均不纳入本前景系统；研究范围需要时，通过单独的代表性数据集连接。 | `eu-jrc-fmp-bref-2022` |
| `boundary_actual_chemicals_and_streams` | 工艺化学品、废水和废气 | 识别并清单化实际存在的每种工艺化学品以及每股相关废水或废气；不得使用汇总的化学品、公用工程、废物或排放占位项。 | `eu-bat-ferrous-2022-2110` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `surface_preparation` | 盘条接收与表面预处理 | required | 始终纳入接收和预处理；酸、水和氧化皮交换仅适用于所声明的机械除鳞或盐酸酸洗路线。 | 前景进料预处理 | 转移至拉丝工序的预处理盘条质量 |
| `wire_drawing` | 干式或湿式拉丝 | required | 纳入实际的干式或湿式模具拉拔路线；润滑剂行按路线适用。 | 前景截面减缩 | 从拉丝工序转出的拉拔钢丝质量 |
| `thermal_treatment` | 钢丝热处理 | conditional | 拉丝后实施电加热或天然气加热退火时纳入；铅浴索氏体化处理和油淬火需要方法扩展。 | 前景冶金状态调节 | 热处理钢丝输出质量 |
| `continuous_galvanising` | 钢丝连续镀锌 | conditional | 仅当报告设施对所声明钢丝实施连续镀锌时纳入；其他金属镀层、电镀或有机涂层需要扩展方法。 | 前景表面镀层 | 镀锌钢丝输出质量 |
| `finishing_and_dispatch` | 精整、检验、卷绕和发运包装 | required | 纳入唯一适用的来料钢丝状态行以及实际发生的全部精整和包装交换。 | 前景最终产品准备 | 合格合金钢丝净质量 |

### 过程：盘条接收与表面预处理（`surface_preparation`）

#### 输入

##### 产品流

###### 合金钢盘条原料（`alloy_steel_wire_rod`）

记录进入设施的合金钢盘条或已部分拉拔钢丝的称量值，并注明牌号和上游数据集。

- 选定流：合金钢盘条
- 流属性/单位：质量 / kg
- 数量规则：批次投入实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：`un-cpc-3-structure-2025`

###### 表面预处理用水（`surface_prep_water`）

纳入进入酸洗、漂洗或湿式机械除鳞的新水；内部循环水不计入总投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：表面预处理消耗的补充水实测质量；仅计量体积时，采用该批次实测密度换算，并保留体积参考条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 预处理盘条
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-bat-ferrous-2022-2110`

###### 酸洗用盐酸（`hydrochloric_acid_pickling`）

仅在采用盐酸酸洗时纳入；记录交付溶液质量和浓度。

- 选定流：盐酸溶液
- 流属性/单位：质量 / kg
- 数量规则：实测消耗的交付溶液，并附 HCl 质量分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 酸洗盘条
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-bat-ferrous-2022-2110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理合金钢盘条（`prepared_alloy_steel_wire_rod`）

记录除鳞和漂洗后、进入模具拉拔前的内部转移实测质量。

- 选定流：预处理合金钢盘条
- 流属性/单位：质量 / kg
- 数量规则：内部转移实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个表面预处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 氧化铁皮（`iron_oxide_scale`）

将机械除鳞收集或浴液清理去除的氧化皮作为单独称量废物纳入。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：质量 / kg
- 数量规则：实测湿基或干基废物质量，并声明含水基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 预处理盘条
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-jrc-fmp-bref-2022`

###### 废盐酸酸洗液（`spent_hydrochloric_pickling_liquor`）

仅适用于盐酸酸洗，并报告废液质量、酸浓度、溶解金属和去向。

- 选定流：废盐酸酸洗液
- 流属性/单位：质量 / kg
- 数量规则：送往回收或处理的实测废液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 酸洗盘条
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_preparation`
- 来源：`eu-bat-ferrous-2022-2110`

##### 基本流

### 过程：干式或湿式拉丝（`wire_drawing`）

#### 输入

##### 产品流

###### 预处理盘条投入（`prepared_wire_rod_input`）

记录进入拉丝机的内部预处理盘条质量。

- 选定流：预处理合金钢盘条
- 流属性/单位：质量 / kg
- 数量规则：内部投入实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个拉丝批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：`eu-jrc-fmp-bref-2022`

###### 拉丝用电（`drawing_electricity`）

记录拉丝机以及直接相关抽风和润滑剂循环装置的计量交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：分表计量电量由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 拉拔钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-bat-ferrous-2022-2110`

###### 硬脂酸钙干拉润滑剂（`calcium_stearate_lubricant`）

仅在干式拉丝消耗硬脂酸钙润滑剂时纳入。

- 选定流：硬脂酸钙
- 流属性/单位：质量 / kg
- 数量规则：新加入润滑剂减去单独回收的未用润滑剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干拉钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drawing_lubricant`
- 来源：`eu-jrc-fmp-bref-2022`

###### 水包油拉丝乳化液（`wire_drawing_emulsion`）

仅在湿式拉丝使用水包油乳化液时纳入；统一报告浓缩液和补充水。

- 选定流：水包油拉丝乳化液
- 流属性/单位：质量 / kg
- 数量规则：进入拉丝循环的新乳化液浓缩物和补充液实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 湿拉钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drawing_lubricant`
- 来源：`eu-bat-ferrous-2022-2110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 拉拔合金钢丝（`drawn_alloy_steel_wire`）

记录进行按条件适用的热处理、镀层或精整前的内部拉拔钢丝质量。

- 选定流：拉拔合金钢丝
- 流属性/单位：质量 / kg
- 数量规则：内部转移实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个拉丝批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 合金钢拉丝废料（`wire_drawing_scrap`）

记录拉丝产生的切头、断丝及其他单独收集的合金钢废料。

- 选定流：合金钢拉丝废料
- 流属性/单位：质量 / kg
- 数量规则：按批次实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 拉拔钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：

###### 废拉丝乳化液（`spent_wire_drawing_emulsion`）

仅在湿式拉丝乳化液排出循环时纳入；内部净化回用部分不计入。

- 选定流：废水包油拉丝乳化液
- 流属性/单位：质量 / kg
- 数量规则：送往场外回收或处理的实测排放液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 湿拉钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drawing_lubricant`
- 来源：`eu-bat-ferrous-2022-2110`

##### 基本流

### 过程：钢丝热处理（`thermal_treatment`）

#### 输入

##### 产品流

###### 进入热处理的拉拔钢丝（`drawn_wire_heat_input`）

所声明产品在拉丝后接受范围内热处理时纳入。

- 选定流：拉拔合金钢丝
- 流属性/单位：质量 / kg
- 数量规则：进入炉窑的内部实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个热处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：`eu-jrc-fmp-bref-2022`

###### 钢丝加热用天然气（`thermal_natural_gas`）

仅用于天然气加热炉，并声明供气地理范围和参考体积条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：炉窑天然气计量消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 热处理钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_energy`
- 来源：`eu-bat-ferrous-2022-2110`

###### 钢丝加热用电（`thermal_electricity`）

仅在采用电加热及其配套处理设备时纳入。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：热处理分表电量由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 热处理钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-bat-ferrous-2022-2110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热处理合金钢丝（`heat_treated_alloy_steel_wire`）

记录所声明热处理后、镀层或精整前的内部转移质量。

- 选定流：热处理合金钢丝
- 流属性/单位：质量 / kg
- 数量规则：内部转移实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个热处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

###### 钢丝加热产生的化石二氧化碳（`thermal_fossil_co2_air`）

仅用于天然气燃烧；采用场址测量或有记录的燃料能量和化石碳计算。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实测烟气质量，或根据计量燃料能量和有记录的因子计算化石 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 热处理钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_co2`
- 来源：`ipcc-2006-stationary-combustion`

### 过程：钢丝连续镀锌（`continuous_galvanising`）

#### 输入

##### 产品流

###### 进入连续镀锌的钢丝（`wire_for_galvanising`）

记录进入镀层线的、按路线限定的拉拔或热处理内部钢丝流。

- 选定流：连续镀锌用合金钢丝
- 流属性/单位：质量 / kg
- 数量规则：内部投入实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个镀锌生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：`eu-jrc-fmp-bref-2022`

###### 镀锌线酸洗用盐酸（`galvanising_hydrochloric_acid`）

连续镀锌线实施盐酸酸洗时纳入。

- 选定流：盐酸溶液
- 流属性/单位：质量 / kg
- 数量规则：实测消耗的交付溶液，并附 HCl 质量分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 镀锌钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_galvanising_materials`
- 来源：`eu-bat-ferrous-2022-2110`

###### 镀层浴用精炼锌（`zinc_metal_input`）

记录加入连续镀层浴的锌，并注明纯度、供应商和再生料含量。

- 选定流：精炼锌
- 流属性/单位：质量 / kg
- 数量规则：锌实测加入量，并按镀浴期初和期末库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 镀锌钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_galvanising_materials`
- 来源：`eu-jrc-fmp-bref-2022`

###### 锌铵氯化物助镀剂（`zinc_ammonium_chloride_flux`）

仅在浸锌前使用所声明的该助镀剂配方时纳入。

- 选定流：锌铵氯化物镀锌助剂
- 流属性/单位：质量 / kg
- 数量规则：实测新鲜助镀剂消耗量，并声明配方
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 镀锌钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_galvanising_materials`
- 来源：`eu-jrc-fmp-bref-2022`

###### 镀锌线加热用天然气（`galvanising_natural_gas`）

仅在镀层浴或直接相关原料加热使用天然气时纳入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：镀锌线天然气计量消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 镀锌钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_energy`
- 来源：`eu-bat-ferrous-2022-2110`

###### 连续镀锌用电（`galvanising_electricity`）

记录镀层线、镀浴设备、抽风和精整设备的计量电力。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：镀锌分表电量由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 镀锌钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-bat-ferrous-2022-2110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 镀锌合金钢丝（`galvanised_alloy_steel_wire`）

记录锌浴后、最终精整前的镀层钢丝质量。

- 选定流：连续镀锌合金钢丝
- 流属性/单位：质量 / kg
- 数量规则：内部转移实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个镀锌生产期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 废镀锌酸洗液（`galvanising_spent_pickling_liquor`）

纳入镀层线排出的酸洗液，并报告酸和溶解金属组成。

- 选定流：废镀锌盐酸酸洗液
- 流属性/单位：质量 / kg
- 数量规则：送往回收或处理的实测废液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 镀锌钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_galvanising_wastes`
- 来源：`eu-bat-ferrous-2022-2110`

###### 锌渣（`zinc_dross`）

将从锌浴去除的锌渣与可销售镀层钢丝分开记录。

- 选定流：钢丝连续镀锌锌渣
- 流属性/单位：质量 / kg
- 数量规则：实测锌渣质量和锌含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 镀锌钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_galvanising_wastes`
- 来源：`eu-bat-ferrous-2022-2110`

###### 酸性镀锌废水（`acidic_galvanising_wastewater`）

记录内部回用后排出的酸性废水，并注明处理去向和组成。

- 选定流：钢丝连续镀锌酸性废水
- 流属性/单位：体积 / m3
- 数量规则：内部循环后实测排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 镀锌钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_galvanising_wastes`
- 来源：`eu-bat-ferrous-2022-2110`

##### 基本流

###### 镀锌加热产生的化石二氧化碳（`galvanising_fossil_co2_air`）

仅纳入为连续镀锌线服务的场内天然气燃烧。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实测烟气质量，或根据计量燃料能量和有记录的因子计算化石 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 镀锌钢丝
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_co2`
- 来源：`ipcc-2006-stationary-combustion`

### 过程：精整、检验、卷绕和发运包装（`finishing_and_dispatch`）

#### 输入

##### 产品流

###### 未热处理未镀层拉拔钢丝投入（`drawn_wire_finishing_input`）

仅在成品为未经范围内热处理或连续镀锌的拉拔钢丝时使用。

- 选定流：拉拔合金钢丝
- 流属性/单位：质量 / kg
- 数量规则：内部投入实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个精整批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：

###### 热处理未镀层钢丝投入（`heat_treated_wire_finishing_input`）

仅在纳入热处理且不纳入连续镀锌时使用。

- 选定流：热处理合金钢丝
- 流属性/单位：质量 / kg
- 数量规则：内部投入实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个精整批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：

###### 镀锌钢丝投入（`galvanised_wire_finishing_input`）

仅在纳入连续镀锌时使用。

- 选定流：连续镀锌合金钢丝
- 流属性/单位：质量 / kg
- 数量规则：内部投入实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个精整批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metal_mass_balance`
- 来源：

###### 精整用电（`finishing_electricity`）

记录适用时的矫直、卷绕、检验和包装设备用电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：精整分表电量由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：

###### 防锈矿物油（`rust_preventive_mineral_oil`）

仅在有意施用矿物油且矿物油留在销售钢丝表面时纳入。

- 选定流：防锈矿物油
- 流属性/单位：质量 / kg
- 数量规则：实测新油施用量减去收集回流量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 涂油钢丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：

###### 钢质捆扎带（`steel_strapping`）

纳入随参考产品离开设施的实测钢质捆扎带。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：质量 / kg
- 数量规则：随产品发运的捆扎带实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 木托盘（`wood_pallet`）

仅在托盘随产品离开设施时纳入，并声明重复使用状态。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 / kg
- 数量规则：托盘数量乘以实测或供应商声明的单位质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 低密度聚乙烯缠绕膜（`ldpe_stretch_film`）

仅在低密度聚乙烯薄膜随产品离开设施时纳入。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：随产品发运的薄膜实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格合金钢丝（`reference_product_alloy_steel_wire`）

这是最终检验和称重后的参考产品；不包括包装质量。

- 选定流：合金钢丝
- 流属性/单位：质量 / kg
- 数量规则：1,000 kg 合格产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_final_product`
- 来源：`un-cpc-3-structure-2025`

##### 废物流

###### 钢质捆扎带边角料（`steel_strapping_offcuts`）

将场内捆扎带边角料与随产品发运的捆扎带分开记录。

- 选定流：钢质包装捆扎带边角料
- 流属性/单位：质量 / kg
- 数量规则：边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 低密度聚乙烯薄膜边角料（`ldpe_film_offcuts`）

将场内薄膜边角料与随产品发运的薄膜分开记录。

- 选定流：低密度聚乙烯薄膜边角料
- 流属性/单位：质量 / kg
- 数量规则：边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用设备和服务 | 首先细分仪表、批次记录和过程时间，使所分配负荷仅属于所声明的合金钢丝。 | `ec-pef-2021-2279` |
| `allocation_physical_relation` | 剩余共用负荷 | 无法细分时，采用设备时间、计量能量或加工质量等有记录的因果物理关系进行分配，并披露理由、输入数据和敏感性。 | `ec-pef-2021-2279` |
| `allocation_no_avoided_burden` | 废料、氧化皮、废酸洗液、锌渣和包装边角料 | 在前景边界处报告废物和回收材料，不计入避免负荷收益；任何回收或替代模型均属于接收方下游系统，必须单独报告。 | `ec-pef-2021-2279` |
| `allocation_mass_reconciliation` | 含金属输出 | 物理金属核算与环境负荷分配相互独立，并核对合金钢投入、可销售钢丝、含金属废物和库存变化。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_metal_mass_balance` | `surface_preparation`; `wire_drawing`; `thermal_treatment`; `continuous_galvanising`; `finishing_and_dispatch` | 合金钢投入、内部转移、产品和金属废物 | 磅单、批次流转单和库存日志 | 批次编号；合金牌号；期初和期末在制品；投入质量；转移质量；产品质量；废料质量；含水基准 | 读取经校准秤数据，并逐生产批次核对各过程边界。 | kg | 每批，按月核对 | 具有代表性的连续 12 个月；按生产期生产时覆盖每个生产期 | 前景设施内全部设备和储存地点 | 汇总合格流和库存变化，再归一化至 1,000 kg 合格产品。 | 校准证书、签字批次记录和有记录的核对结果 |
| `cp_surface_preparation` | `surface_preparation` | 水、酸、氧化皮和废酸洗液 | 仪表、领料单、槽液日志和废物联单 | 路线；水表；溶液质量；HCl 分数；槽液期初和期末库存；氧化皮质量；废酸液质量；含水量；去向 | 使用工序分表、储罐或称量记录；扣除内部回用和库存变化。 | m3；kg | 每批或每日抄表 | 与参考产品相同的生产期间 | 仅表面预处理线 | 仅在缺少因果分表时按加工质量分配共用日总量，并披露分配。 | 仪表检查、供应商证书、槽液分析和废物联单 |
| `cp_electricity` | `wire_drawing`; `thermal_treatment`; `continuous_galvanising`; `finishing_and_dispatch` | 交流电 | 结算电表和工序分表 | 电表编号；电压；供应商；地理范围；期初和期末 kWh；生产质量；停机时间 | 读取经校准电表差值；除非有因果分配并披露，否则排除非生产负荷。 | kWh 和 MJ | 每班或每批 | 与参考产品相同的生产期间 | 每个纳入工序及其直接相关控制设备 | 将 kWh 换算为 MJ，并按适用过程输出归一化。 | 电表校准、账单核对和负荷分配记录 |
| `cp_drawing_lubricant` | `wire_drawing` | 硬脂酸钙、新乳化液和废乳化液 | 领料、储罐平衡和废物联单 | 配方；新加入量；退回未用质量；循环期初和期末库存；排放液质量；回收去向 | 对每条路线完成干式润滑剂或湿式乳化液物料平衡。 | kg | 每批，按月核对 | 与参考产品相同的生产期间 | 拉丝机和润滑剂处理回路 | 新投入减去退回量和库存增加量；净化后内部回用的润滑剂作为内部循环报告。 | 供应商配方、储罐测量和回收记录 |
| `cp_thermal_energy` | `thermal_treatment`; `continuous_galvanising` | 天然气 | 燃气表和供应商证书 | 仪表编号；体积；温度；压力；含湿基准；净热值；炉窑分配；生产质量 | 读取经校准燃气表差值，仅分配给纳入的炉窑或镀层浴加热。 | m3 和 MJ | 每班或每个生产期 | 与参考产品相同的生产期间 | 仅纳入的热工设备 | 将参考条件体积和能量归一化至适用过程输出。 | 仪表校准和供应商燃气质量证书 |
| `cp_combustion_co2` | `thermal_treatment`; `continuous_galvanising` | 化石二氧化碳 | 烟道试验或燃料碳计算表 | 燃料能量；碳或 CO2 因子；氧化因子；适用时的烟道测量；炉窑分配 | 优先使用有代表性的实测质量；否则根据采集的燃料活动数据和有记录的场址特定或符合 IPCC 的因子计算。 | kg CO2 | 每个报告期及燃料变化后 | 与燃料投入相同的生产期间 | 纳入的天然气燃烧源 | 汇总各源 CO2 并归一化至适用过程输出，不得重复计入供应商上游排放。 | 烟道报告或附因子来源的签字计算 |
| `cp_galvanising_materials` | `continuous_galvanising` | 酸、锌和助镀剂 | 领料、储罐平衡和镀层试验 | 溶液质量和浓度；锌加入量；镀浴库存；助镀剂配方和加入量；镀层质量 | 完成连续镀层线的化学品和金属平衡。 | kg | 每个生产期，按月核对 | 与镀锌输出相同的生产期间 | 仅钢丝连续镀锌线 | 扣除期末库存增加和内部退回；核对沉积锌和锌渣。 | 供应商证书、镀浴分析和镀层试验记录 |
| `cp_galvanising_wastes` | `continuous_galvanising` | 废酸洗液、锌渣和酸性废水 | 废物联单、储罐记录和排水表 | 流身份；质量或体积；pH；酸；悬浮物；锌及相关合金金属；去向 | 在内部回用后、跨越设施边界前测量每股流。 | kg；m3 | 每次外运及连续或每日排放读数 | 与镀锌输出相同的生产期间 | 钢丝连续镀锌线及其处理设备 | 按流和去向分别汇总；不得合并危险和非危险流。 | 认可实验室分析、仪表检查和废物转移记录 |
| `cp_finishing_materials` | `finishing_and_dispatch` | 防锈油 | 领料和施用平衡 | 油品身份；新领用量；回收回流量；期初和期末库存；产品质量 | 对涂油产品完成施用系统物料平衡。 | kg | 每批，按月核对 | 与涂油输出相同的生产期间 | 仅精整线 | 新领用量减去回流和库存增加，再按涂油钢丝质量归一化。 | 供应商安全数据、领料记录和储罐测量 |
| `cp_packaging` | `finishing_and_dispatch` | 钢质捆扎带、托盘、低密度聚乙烯薄膜和边角料 | 材料清单、计数记录和称量记录 | 材料身份；单位质量；使用数量；发运质量；边角料质量；托盘重复使用状态 | 对代表性包装组件称重，并记录每种发运配置的数量。 | kg；件 | 每种发运配置 | 与参考产品相同的生产期间 | 发运包装区 | 以核实的单位质量计算按件计量质量；分开发运材料和场内边角料。 | 供应商规范、称量记录和包装材料清单 |
| `cp_final_product` | `finishing_and_dispatch` | 合格参考产品 | 最终磅单和检验记录 | 批次编号；合金牌号；直径；公差；力学状态；表面状态；镀层质量；钢丝净质量；包装皮重；处置 | 合格钢丝检验后称重，并扣除经核实的包装皮重。 | kg | 每批 | 与全部前景投入相同的生产期间 | 设施发运门 | 仅汇总合格钢丝净质量，并将清单归一化至 1,000 kg。 | 经校准秤记录、检验证书和皮重记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | 每项前景交换 | 归一化数量 = 报告期交换量 / 合格钢丝质量 × 1,000 kg | 采集的交换量；合格参考产品质量 | 每 1,000 kg 合格钢丝的交换量 |  |
| `calc_electricity_mj` | 用电行 | 电力 MJ = 计量 kWh × 3.6 | 计量 kWh | MJ 电力 |  |
| `calc_metal_balance` | 合金钢质量核对 | 平衡差 = 合金钢投入 + 期初在制品 - 合格产品 - 含金属废物 - 期末在制品 | 金属投入、产品、废物和在制品质量记录 | 绝对值和百分比平衡差 |  |
| `calc_zinc_deposition` | 连续镀锌 | 沉积锌 = 镀层钢丝质量 - 进入的未镀层钢丝质量，并校正其他实测材料变化；使用表面积和镀层试验记录交叉检查 | 进入钢丝质量；镀层钢丝质量；镀层试验；钢丝几何尺寸 | 沉积锌质量 | `eu-jrc-fmp-bref-2022` |
| `calc_fossil_co2` | 天然气燃烧 | 化石 CO2 = 燃料能量 × 有记录的 CO2 排放因子；可获得时使用场址特定碳含量和氧化数据，并保留因子基准 | 归一化燃料能量；CO2 因子；氧化基准 | kg 化石 CO2 | `ipcc-2006-stationary-combustion` |
| `calc_packaging_mass` | 按件计量包装 | 包装质量 = 核实的单位质量 × 发运数量；仅当领料和边角料测量边界一致时，才从领料中扣除单独称量的边角料 | 组件数量；核实的单位质量；边角料质量 | kg 发运包装和 kg 边角料 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和钢丝投入 | 声明合金类别和牌号、适用规范、直径和公差、力学或热处理状态、表面或镀层状态以及产品形式。 | 质保书、采购规范和最终检验证书 |
| `dq_representativeness` | 前景清单 | 覆盖具有代表性的连续 12 个月；按生产期生产时覆盖报告年度所有生产期，并披露按产量加权方法。 | 生产计划、仪表覆盖和生产期核对 |
| `dq_metering` | 质量、电力、天然气和水 | 使用经校准或核实的仪表，将工序分表与设施总量核对，并披露共用总量的任何分配。 | 校准记录、账单和核对工作表 |
| `dq_completeness` | 化学品、废物和排放 | 保持工艺流程、化学品、废水和废气清单；以路线证据说明每个为零或不适用的原子交换。 | 工艺流程图、化学品登记表、废物联单和排放清单 |
| `dq_upstream_inputs` | 盘条、电力、天然气、锌和包装 | 选择在供应商和地理方面有代表性的上游数据集，并披露替代或代理。 | 供应商记录和数据集选择日志 |
| `dq_uncertainty` | 尚无获批外部范围的重要流 | 报告前景记录的实测变异、缺失数据处理和不确定性；不得将 BAT 符合性水平表述为通用经验默认值。 | 批次统计和不确定性工作表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | 参考流 | 确认净合格合金钢丝恰为 1,000 kg，并从参考产品质量中排除全部包装皮重。 |  |
| `validation_identity_qualifiers` | 产品身份 | 前景数据包缺少合金牌号、直径、力学状态、表面状态、生产路线、设施地理位置或生产期间时予以拒绝。 | `un-cpc-3-structure-2025`; `china-state-council-tariff-list-2019` |
| `validation_process_alignment` | 过程图和清单 | 强制纳入表面预处理、拉丝和精整；仅在声明相应路线时纳入热处理和镀锌行，并拒绝没有对应过程的路线交换。 | `eu-jrc-fmp-bref-2022` |
| `validation_atomic_inventory` | 所有清单行 | 拒绝汇总的电力、燃料、化学品、包装、废物、废水或排放标签；每项交换必须识别一个物理产品、废物或基本流。 | `eu-bat-ferrous-2022-2110` |
| `validation_metal_balance` | 合金钢和锌平衡 | 要求有记录的合金钢质量平衡；镀层钢丝还需单独的锌平衡；发布前调查并披露材料差异。 |  |
| `validation_energy_identity` | 电力和天然气 | 电力必须声明实际供应商、地理范围、电压和交付边界；天然气必须声明参考体积、供应商和净热值；不得仅以 UUID 作为代表性证据。 | `eu-bat-ferrous-2022-2110` |
| `validation_no_unapproved_ranges` | 定量检查 | 获得经独立验证的兼容范围证据并完成批准前，使用前景变异进行 QA；不得将单一来源的 BAT 水平、限值或案例值转化为经验默认范围。 | `eu-bat-ferrous-2022-2110` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 合金钢丝从设施入口到发运门的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当合金类别、牌号、直径、力学状态、表面状态、拉拔和处理路线、地理范围、期间及发运边界均与建模钢丝匹配时，用于产品和供应链 LCA |
| excluded_use | 通用粗钢或盘条生产；非合金钢丝；钢丝制品；未限定的全球平均值；未连接上游和下游数据集的全生命周期声明 |
| required_metadata | 规范 PCR id；产品和流标识；合金规范；直径；力学状态；表面和镀层状态；工艺路线；设施地理位置；技术；生产期间；数据所有者角色；上游数据集身份；分配方法；包装配置 |
| required_quality_disclosure | 时间、地理和技术代表性；仪表覆盖；金属和锌平衡差；共用负荷分配；缺失数据；前景变异；未解决 UUID；来源版本；排除项和偏离 |
| update_trigger | 合金类别、拉拔减缩率、拉丝介质、炉窑或镀层技术、主要能源供应商、上游炼钢路线、包装配置、设施边界、分配方法发生变化，或年度能源、水、化学品、成材率、废物或排放强度发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41267 的正式身份和英文名称 |
| `china-state-council-tariff-list-2019` | 官方指南（`official_guidance`） | 中华人民共和国国务院，官方税则商品清单，https://www.gov.cn/xinwen/2019-05/13/5391208/files/6d352f9e9ae6449ca6ba2c73947b6e35.pdf | “合金钢丝”专业中文术语，以及不锈钢丝、硅锰钢丝和其他合金钢丝名称示例 |
| `eu-jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《黑色金属加工工业最佳可行技术参考文件》，2022 年 12 月采纳，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry | 拉丝定义、过程分解和按条件适用的钢丝连续镀锌 |
| `eu-bat-ferrous-2022-2110` | 官方指南（`official_guidance`） | 欧盟委员会 2022 年 10 月 11 日实施决定 (EU) 2022/2110，CELEX 32022D2110，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110 | 化学品、水、能源、废水和废气清单规则；润滑剂回用；按条件适用的加热、酸洗和镀层控制 |
| `ec-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会 2021 年 12 月 15 日关于使用环境足迹方法的建议 (EU) 2021/2279，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 分配层级和披露 |
| `ipcc-2006-stationary-combustion` | 方法因子（`method_factor`） | IPCC，《2006 年国家温室气体清单指南》第 2 卷第 2 章“固定源燃烧”，https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | 根据采集的固定燃烧燃料活动数据计算化石 CO2 |
