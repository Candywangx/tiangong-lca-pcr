---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-silicon-electrical-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 硅电工钢平轧产品

## 1. 范围与适用性

本 PCR 适用于钢厂门口交付的卷、带或片状可销售硅电工钢平轧产品。范围涵盖取向电工钢（GOES）和无取向电工钢（NOES），包括全工艺和半工艺交付状态，但必须声明取向类别、交付状态、牌号或适用规范、公称厚度与宽度、涂层状态和生产路线。数据集可代表一个场址和牌号族，也可代表组成均在本范围内且按产量加权的生产组合。

产品边界终止于平轧电工钢产品发运。普通非合金钢、其他合金钢、不锈钢和高速钢平轧产品，作为废物出售的电工钢废料，剪切或冲压叠片、组装铁芯、变压器、电动机、发电机及其他电气设备均不在范围内。客户实施的下游分条或落料不在范围内；若由报告生产者在声明工厂门之前实施，且一致计入产品规格和质量，则可纳入。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-silicon-electrical-steel |
| classification_refs | CPC 3.0：41233，硅电工钢平轧产品（精确范围语境；映射接受决定在本 PCR 之外管理） |
| covered_products | 卷、带或片状 GOES 和 NOES 平轧产品；全工艺或半工艺材料；在声明实际交付状态时包括涂层或无涂层材料 |
| excluded_products | 普通非合金钢、其他合金钢、不锈钢和高速钢平轧产品；电工钢废料；加工后的叠片和铁芯；完整电气设备 |
| representative_product | 生产者门口 1 kg 可销售硅电工钢平轧产品，包括随产品交付的任何整体涂层 |
| production_route | 从金属炉料或外购电工钢半成品基材开始，涵盖所有适用的现场炼钢、铸造、轧制、退火、织构控制、涂层、精整和内部回收步骤的已声明场址特定路线；不得在没有产量权重时合并 BOF、EAF、外购板坯/热轧带、薄带、GOES 和 NOES 路线 |
| market_state | 生产者门口处于已声明半工艺或全工艺状态的干燥可销售卷、带或片；若报告门口包含包装则包括包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产者门口的可销售硅电工钢平轧产品 |
| How much | 1 kg 产品净质量，包括整体表面涂层，不包括可重复使用运输器具 |
| How well | 符合已声明牌号或规范及其磁性能、几何、容差、工艺和涂层要求 |
| How long or cycle | 一个完成的生产和发运批次；该从摇篮到大门声明单位不主张使用寿命功能 |
| reference_flow_link | `electrical_steel_finishing` 的参考输出应等于用于归一化所有纳入过程的可销售质量 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 硅电工钢平轧产品 `8863bbb7-7bc4-4ff1-ab21-4a01addf2ad4` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 取向类别（GOES 或 NOES）；半工艺或全工艺交付状态；牌号和适用规范；公称厚度与宽度；卷、带或片形态；涂层类型和涂层质量或无涂层声明；适用时的磁性测试依据及保证损耗/磁感等级；炼钢路线；铸造与轧制路线；最终退火和脱碳路线；GOES 的磁畴细化状态；生产场址与地理范围；报告期；工厂门定义 |

构建前景数据包时，必须在数据集元数据、过程注释、参考流注释、产品说明或等效数据包字段中声明 `Required qualifiers` 所列项目。缺少任何必需限定符都会使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和所有归一化清单结果 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测可销售产品净质量。包括随电工钢交付的整体绝缘或表面涂层；排除托盘、卷筒和可重复使用运输器具，并单独披露报告的任何一次性包装。 |
| `mass_conversion` | 以吨或兆克记录的源数据 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化前将 1 t 或 1 Mg 换算为 1,000 kg，并保留原单位和换算记录。 |
| `magnetic_quality_not_mass_conversion` | 牌号特定磁性声明 | 已声明测试结果和测试条件 | 已声明源单位 | 磁损耗、磁感、磁导率、频率以及极化或磁场强度属于必需产品限定符和质量证据；不得将其换算成参考质量或代替参考质量。 |
| `coating_mass_consistency` | 涂层参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考产品质量与成材率计算应采用相同的整体涂层质量约定；应披露约定和涂层测量依据。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 识别最早的前景受控材料状态：进入炼钢的金属炉料、外购铸造板坯、外购热轧带，或另一种经核实的电工钢半成品基材。 |
| starting_condition_role | 前景数据收集起点；这不免除为外购物料、能源、燃料、合金、涂料和运输关联从摇篮到大门上游数据集的要求。 |
| product_classification_scope | 仅限硅电工钢平轧产品；只有明确必需限定符时，路线和牌号变体才保留在本类别内。 |
| recursive_input_rule | 已属本产品类别的外购输入应作为带有自身不重叠边界和数据集标识符的上游产品输入记录；不得在本前景链中展开并重复计算其生产。 |
| upstream_dataset_requirement | 对全部外购金属炉料、铁合金、板坯或热轧带、能源载体、工艺化学品、涂层材料、供水、运输和处理服务关联地理与技术上具有代表性的上游数据集。 |
| disclosure | 声明起始状态、排除的现场步骤、供应商边界、BOF/EAF 或其他路线、外购基材份额、GOES/NOES 份额、半工艺/全工艺份额、涂层和磁畴细化步骤、内部废钢循环，以及是否单独报告寿命终止回收。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_cradle_to_gate` | 产品系统 | 包括原材料和能源供应、进厂运输、每项适用的现场炼钢与精整操作、辅助公用工程、内部运输、回收、废水和废物处理，以及直至生产者门口的排放。 | `worldsteel-lci-methodology`; `iso-20915-2018` |
| `sb_route_specificity` | 路线选择 | 仅包括实际使用的操作，但不得遗漏构成声明产品路线的铸造、热轧、冷轧、脱碳、退火、织构控制、涂层或磁畴细化步骤。组合数据集应采用有文件依据的产量权重。 | `ec-fmp-bref-2022`; `doe-grid-supply-chain-2022`; `mehdi-et-al-2024` |
| `sb_recursive_product_input` | 外购同类别输入 | 保留不重叠的供应商门并关联上游产品数据集；拒绝同时将同一电工钢生产作为外购输入和前景生产计算的模型。 | `worldsteel-lci-methodology` |
| `sb_downstream_exclusion` | 下游制造和使用 | 排除客户分条、落料、叠片堆叠、铁芯组装、设备制造、使用和寿命终止，除非在本从摇篮到大门结果之外另行声明扩展系统边界。 | `worldsteel-lci-methodology`; `iec-60404-8-4-2022`; `iec-60404-8-7-2020` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `steelmaking_and_casting` | 电工钢熔炼准备与铸造 | conditional | 报告场址控制这些操作时必需；否则外购板坯、薄带或热轧带应带关联上游数据集进入。 | 生产成分受控电工钢半成品的前景过程 | 离开过程的铸造板坯、带或热轧带 kg |
| `hot_rolling_and_surface_preparation` | 热轧与表面准备 | conditional | 常规板坯或热轧带路线必需；直接铸带或薄带路线应记录被替代操作。 | 减薄、除鳞和热轧带准备 | 离开过程的已准备热轧带 kg |
| `cold_rolling_and_annealing` | 冷轧、脱碳与退火 | conditional | 声明 GOES/NOES 牌号或交付状态使用这些操作时必需；仅在记录替代路线或产品在这些步骤前出售时可省略。 | 减薄和磁性显微组织形成 | 离开过程的冷轧或退火电工钢 kg |
| `electrical_steel_finishing` | 牌号特定精整、涂层、检验与发运 | required | 始终必需；不适用的涂层或磁畴细化操作应声明为不适用而非静默省略。 | 建立已声明市场状态和参考输出 | 1 kg 可销售参考产品 |

### 过程：电工钢熔炼准备与铸造（`steelmaking_and_casting`）

#### 输入

##### 产品流

###### 金属炉料、含硅合金添加料和精炼材料（`metallic_charge_and_alloys`）

记录穿越所选起始边界的全部外购矿基铁源、DRI/HBI、生铁、废钢、铁合金、含硅添加料、石灰和精炼材料。保持同一系统内返回的内部废钢可识别，并与外购废钢分开。

- Selected flow: 已声明金属炉料、铁合金和精炼材料
- Flow property / unit: 质量 / kg
- Amount rule: 按合格铸造电工钢产出分配的实测收货或批次加料记录
- Value mode: 前景记录（`foreground_record`）
- Specificity: 路线特定（`route_specific`）
- Normalization basis: 每 kg 铸造电工钢板坯、带或热轧带产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `worldsteel-lci-methodology`

###### 外购能源载体与公用工程（`steelmaking_energy_utilities`）

记录纳入的炼钢、二次冶金、铸造和辅助服务所用计量电力、燃料、氧气、氮气、氩气、蒸汽及其他外部供应公用工程。

- Selected flow: 已声明电力、燃料、气体、蒸汽和公用工程产品
- Flow property / unit: 能量或质量或体积 / 保留源单位并按有文件依据的因子换算
- Amount rule: 计量用量加上向合格铸造产出分配的有文件依据共享公用工程
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 kg 铸造电工钢板坯、带或热轧带产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `worldsteel-lci-methodology`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成分受控电工钢板坯、带或热轧带（`cast_electrical_steel_intermediate`）

记录转入轧制的实测合格产出，并保持炉次或铸次标识与成分及路线记录关联。

- Selected flow: 成分受控电工钢板坯、薄带或热轧带
- Flow property / unit: 质量 / kg
- Amount rule: 实测合格转移质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每过程输出批次
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `doe-grid-supply-chain-2022`; `mehdi-et-al-2024`

##### 废物流

###### 炉渣、粉尘、污泥和不合格金属产出（`steelmaking_residues`）

按实测质量、去向和内部返回状态分别记录每项回收共产品和废物；不得把可销售炉渣、返回金属、危险粉尘和处置污泥合并为一个未限定数量。

- Selected flow: 按去向声明的炉渣、粉尘、污泥或不合格金属流
- Flow property / unit: 质量 / kg
- Amount rule: 按残余物类型和去向实测的产出
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 kg 铸造电工钢产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `worldsteel-lci-methodology`

##### 基本流

###### 炼钢与铸造直接排放（`steelmaking_direct_emissions`）

在可得的最细过程层级记录实测或按许可方法计算的空气、水体和土壤排放，包括场址相关的受监测温室气体、酸化、颗粒物、金属和废水参数。

- Selected flow: 按物质和环境介质声明的基本排放
- Flow property / unit: 质量 / kg
- Amount rule: 分配给纳入生产的监测或计算规程结果
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 kg 铸造电工钢产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 根据收集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `worldsteel-lci-methodology`

### 过程：热轧与表面准备（`hot_rolling_and_surface_preparation`）

#### 输入

##### 产品流

###### 电工钢板坯或直接铸带输入（`hot_rolling_substrate`）

记录进入再加热、轧制、除鳞和表面准备的成分受控基材实测质量和身份。

- Selected flow: 电工钢板坯、直接铸带或已声明热轧带基材
- Flow property / unit: 质量 / kg
- Amount rule: 扣除未进入本过程材料后的实测装料质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 路线特定（`route_specific`）
- Normalization basis: 每 kg 已准备热轧带产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_hot_rolling_records`
- Sources: `ec-fmp-bref-2022`; `mehdi-et-al-2024`

###### 热轧能源、水与表面处理输入（`hot_rolling_operating_inputs`）

记录声明过程边界内使用的计量再加热燃料、电力、冷却与除鳞水，以及任何酸洗或表面准备化学品。

- Selected flow: 已声明燃料、电力、水和表面处理产品
- Flow property / unit: 能量或质量或体积 / 保留源单位并按有文件依据的因子换算
- Amount rule: 分配给已准备热轧带产出的计量或发票支持消耗
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 kg 已准备热轧带产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_hot_rolling_records`
- Sources: `ec-fmp-bref-2022`; `worldsteel-lci-methodology`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备电工钢热轧带（`prepared_hot_band`）

记录转入冷加工或按声明中间交付状态出售的合格热轧带质量。

- Selected flow: 已准备电工钢热轧带
- Flow property / unit: 质量 / kg
- Amount rule: 实测合格转移或销售质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每过程输出批次
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_hot_rolling_records`
- Sources: `ec-fmp-bref-2022`; `mehdi-et-al-2024`

##### 废物流

###### 氧化铁皮、切边、酸洗残余物和不合格热轧带（`hot_rolling_residues`）

分别记录氧化铁皮、切边、废处理残余物和不合格热轧带，包括内部循环和外部处理去向。

- Selected flow: 按类型和去向声明的热轧残余物流
- Flow property / unit: 质量 / kg
- Amount rule: 按处置方式实测的残余物质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 kg 已准备热轧带产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_hot_rolling_records`
- Sources: `ec-fmp-bref-2022`

##### 基本流

### 过程：冷轧、脱碳与退火（`cold_rolling_and_annealing`）

#### 输入

##### 产品流

###### 已准备热轧带输入（`cold_processing_substrate`）

记录进入各冷减薄和退火路线的已识别热轧带质量，保留炉次、钢卷、取向类别和牌号族关联。

- Selected flow: 已准备电工钢热轧带
- Flow property / unit: 质量 / kg
- Amount rule: 实测输入钢卷质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 冷加工电工钢产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_cold_processing_records`
- Sources: `mehdi-et-al-2024`

###### 冷加工能源、水、气体与化学品（`cold_processing_operating_inputs`）

记录声明路线实际使用的计量电力、退火和脱碳燃料或气体、冷却水、轧制润滑剂、清洗剂、酸洗剂和退火隔离剂。

- Selected flow: 已声明电力、燃料、工艺气体、水、润滑、清洗和退火产品
- Flow property / unit: 能量或质量或体积 / 保留源单位并按有文件依据的因子换算
- Amount rule: 分配给合格产出的计量、批次领用或发票支持用量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 kg 冷加工电工钢产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-fmp-bref-2022`; `mehdi-et-al-2024`; `doe-grid-supply-chain-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷轧或退火电工钢（`cold_processed_electrical_steel`）

记录已声明冷减薄、脱碳、初次/中间/最终退火和织构形成序列后的合格产出，并将省略步骤明确标记为不适用。

- Selected flow: 处于已声明交付状态的冷轧或退火电工钢
- Flow property / unit: 质量 / kg
- Amount rule: 实测合格产出质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每过程输出批次
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_cold_processing_records`
- Sources: `iec-60404-8-4-2022`; `iec-60404-8-7-2020`; `mehdi-et-al-2024`

##### 废物流

###### 冷轧切边、不合格品、废液和处理残余物（`cold_processing_residues`）

将金属切边和不合格品与废酸洗液、润滑剂、污泥及其他处理残余物分开记录，包括回收或处置去向。

- Selected flow: 按类型和去向声明的冷加工残余物
- Flow property / unit: 质量或体积 / 源单位
- Amount rule: 按处置方式实测的残余物数量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 kg 冷加工电工钢产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-fmp-bref-2022`

##### 基本流

###### 冷加工与退火直接排放（`cold_processing_direct_emissions`）

按物质和环境介质记录受监测或按规程计算的炉窑、酸处理、涂层准备、废水及其他直接排放。

- Selected flow: 按物质和环境介质声明的基本排放
- Flow property / unit: 质量 / kg
- Amount rule: 分配给纳入生产的监测或计算规程结果
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 kg 冷加工电工钢产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 根据收集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-fmp-bref-2022`; `worldsteel-lci-methodology`

### 过程：牌号特定精整、涂层、检验与发运（`electrical_steel_finishing`）

#### 输入

##### 产品流

###### 进入最终精整的电工钢基材（`finishing_substrate`）

记录进入适用的牌号特定最终退火、绝缘涂层、磁畴细化、平整、分条、检验和包装的已识别基材。

- Selected flow: 处于已声明精整前状态的电工钢
- Flow property / unit: 质量 / kg
- Amount rule: 实测输入卷、带或片质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 可销售参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_finishing_dispatch_records`
- Sources: `iec-60404-8-4-2022`; `iec-60404-8-7-2020`; `doe-grid-supply-chain-2022`

###### 涂层、磁畴细化、精整能源与包装输入（`finishing_operating_inputs`）

记录实际绝缘涂层组分、退火或固化能源、磁畴细化能源和消耗品、精整剂及一次性包装。每个不适用路线要素应明确标记，不得无解释地赋零。

- Selected flow: 已声明涂层、能源、精整消耗品和包装产品
- Flow property / unit: 能量、质量、面积或体积 / 保留源单位并按有文件依据的因子换算
- Amount rule: 分配给可销售产品的计量或批次领用数量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 可销售参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_finishing_dispatch_records`
- Sources: `iec-60404-8-4-2022`; `iec-60404-8-7-2020`; `doe-grid-supply-chain-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售硅电工钢平轧产品（`reference_product`）

记录经必需磁性、几何、涂层和表面质量验收后的声明工厂门可销售净质量。

- Selected flow: 硅电工钢平轧产品 `8863bbb7-7bc4-4ff1-ab21-4a01addf2ad4`
- Flow property / unit: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 从实测可销售产出归一化后的固定参考量 1 kg
- Value mode: 固定值（`fixed_value`）
- Specificity: 不适用（`not_applicable`）
- Normalization basis: 1 kg 可销售参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 身份引用（`identity_reference`）
- Sources: `worldsteel-lci-methodology`; `iec-60404-8-4-2022`; `iec-60404-8-7-2020`

##### 废物流

###### 精整切边、涂层废物、不合格品和包装废物（`finishing_residues`）

将金属切边和不合格产品与涂层废物、处理残余物和包装废物分开记录，并注明内部返回、回收和处置去向。

- Selected flow: 按类型和去向声明的精整残余物
- Flow property / unit: 质量 / kg
- Amount rule: 按处置方式实测的残余物质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 kg 可销售参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_finishing_dispatch_records`
- Sources: `doe-grid-supply-chain-2022`

##### 基本流

###### 精整与涂层直接排放（`finishing_direct_emissions`）

按物质和环境介质记录受监测或按规程计算的炉窑、涂层线、废水及其他直接排放。

- Selected flow: 按物质和环境介质声明的基本排放
- Flow property / unit: 质量 / kg
- Amount rule: 分配给可销售产出的监测或计算规程结果
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 kg 可销售参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据收集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_finishing_dispatch_records`
- Sources: `ec-fmp-bref-2022`; `worldsteel-lci-methodology`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | 所有多输出前景操作 | 首先在有独立过程记录时，通过计量和细分炼钢、轧制、退火、涂层及回收操作避免分配。 | `iso-20915-2018`; `worldsteel-lci-methodology` |
| `alloc_recovered_coproducts` | 有用炉渣、工艺气体、回收化学品及其他共产品 | 当回收共产品替代外部功能时，采用与所选钢铁 LCI 方法一致且透明的系统扩展，并报告被替代产品、数量、替代比和敏感性；不得使用无文件依据的抵扣。 | `worldsteel-lci-methodology` |
| `alloc_residual_multioutput` | 不可分割的剩余多输出操作 | 若细分和有依据的系统扩展不可行，选择反映因果生产过程的物理关系；否则采用另一种有依据的关系，并披露方法、因子、受影响流和敏感性。 | `iso-20915-2018` |
| `alloc_scrap_transparency` | 内部、消费前和消费后钢铁废料 | 区分内部返回料与外购消费前和消费后废料。将任何寿命终止回收负担或抵扣与从摇篮到大门结果分开报告，并防止与下游模型重复计算。 | `worldsteel-lci-methodology`; `iso-20915-2018` |

## 8. 前景数据收集、计算与质量规则

### 数据收集规程

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steelmaking_casting_records` | `steelmaking_and_casting` | 全部输入、输出、残余物和直接排放行 | 地磅、批次/炉次、仪表、实验室、排放监测和去向记录 | heat_id; route; charge and alloy quantities; utility meter values; cast output; composition; residue type/mass/destination; emission substance/value/method | 将生产、采购、仪表、实验室和环境记录协调至炉次/铸造生产活动 | 源单位，归一化至 kg 参考产品 | 每炉/批或连续仪表；每月协调 | 代表性报告年；短于一年但至少六个月的时段须说明理由 | 全部纳入的炼钢、铸造、辅助、回收和处理单元 | 按路线和牌号族求和，协调质量，再除以向下游关联的合格可销售质量 | 校准仪器；发票；实验室证书；仪表覆盖；环境计算规程；协调签署 |
| `cp_hot_rolling_records` | `hot_rolling_and_surface_preparation` | 基材、操作输入、已准备热轧带和残余物 | 钢卷/板坯跟踪、炉窑和公用工程仪表、化学品领用、水、地磅和废物记录 | heat_id; slab_id; input_mass; fuel; electricity; water; chemical; hot_band_mass; scale; trim; reject; residue_destination | 贯通再加热、轧制、除鳞、酸洗和转移关联板坯/热轧带标识 | 源单位，归一化至 kg 已准备热轧带和参考产品 | 每卷/生产活动；每月协调 | 代表性报告年；更短时段须说明理由 | 全部纳入的热轧和表面准备线 | 按路线汇总匹配输入/输出并除以合格产出质量 | 校准秤/仪表；钢卷谱系；物料平衡；废物转移记录 |
| `cp_cold_processing_records` | `cold_rolling_and_annealing` | 基材、操作输入、冷加工产出、残余物和排放 | 钢卷谱系、轧制/退火日志、公用工程仪表、工艺气体和化学品领用、质量测试及环境记录 | coil_id; orientation_class; grade; input/output_mass; pass_sequence; anneal/decarburize route; electricity; fuel; gas; water; lubricant; chemical; residue; emission | 将每次冷减薄和热处理生产活动关联至合格产品及受监测排放 | 源单位，归一化至 kg 冷加工产出和参考产品 | 每卷/生产活动；连续仪表每月协调 | 代表性报告年；路线特定生产活动应覆盖正常运行 | 全部纳入的冷轧机、退火/脱碳、清洗和处理单元 | 在任何加权组合前按 GOES/NOES、交付状态和实质不同路线分别汇总 | 钢卷可追溯性；校准仪表；实验室/磁性测试记录；处理记录；物料平衡 |
| `cp_finishing_dispatch_records` | `electrical_steel_finishing` | 精整基材、涂层/磁畴细化/包装输入、参考产品、残余物和排放 | 卷/片跟踪、涂层和炉窑记录、磁畴细化日志、质量证书、秤、仪表、包装和废物记录 | coil_id; grade/specification; thickness; width; orientation_class; supply_condition; coating_type/mass; domain_refined; magnetic_test_basis/result; input_mass; saleable_mass; utility/consumable; reject/residue/destination | 将最终操作和验收测试与声明门口发票所示可销售质量协调 | 源单位，归一化至 kg 可销售参考产品 | 每卷/批；每月协调 | 代表性报告年及全部声明产品族 | 全部纳入的最终退火、涂层、磁畴细化、检验、分条、包装和发运操作 | 按限定产品族汇总验收可销售质量和关联负担；仅对相容产品族按产量加权 | 校准秤/仪表；涂层和磁性测试证书；批次谱系；发票和发运协调 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每一纳入清单行 | 归一化数量 = 分配给纳入生产的数量 / 声明门口可销售参考产品净质量 | 分配的前景数量；采用第 4 节约定的可销售质量 | 每 1 kg 参考产品的数量 | `worldsteel-lci-methodology` |
| `calc_production_weighted_mix` | 多路线、多场址或多牌号族数据集 | 组合数量 = sum(amount_i × saleable_mass_i) / sum(saleable_mass_i)；保留每个组成及权重 | 路线/场址/产品族结果和可销售净质量 | 披露覆盖度的产量加权结果 | `worldsteel-lci-methodology` |
| `calc_process_mass_balance` | 每个前景过程和关联链 | 协调已识别质量输入 = 产品 + 共产品 + 废物 + 排放输出 + 有文件依据的库存变化；调查而非强制闭合物料差异 | 实测材料输入/输出、排放和期初/期末库存 | 过程物料平衡说明和未解决差异 | `worldsteel-lci-methodology` |
| `calc_coating_mass` | 涂层产品 | 整体涂层质量应实测，或根据经核实的涂覆面积和单位面积涂层质量计算；结果应采用与参考产品质量相同的约定 | 涂覆面积；单位面积涂层质量或直接质量测量；可销售产品质量 | 涂层质量和涂层质量分数 | `iec-60404-8-4-2022`; `iec-60404-8-7-2020` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留与每个所代表产品族关联的牌号/规范、取向类别、交付状态、尺寸、涂层、磁性测试依据和验收证书。 | 卷/批谱系及合格或检验证书；`iec-60404-8-4-2022`; `iec-60404-8-7-2020` |
| `dq_route_coverage` | 过程链 | 证明每个适用的炼钢、铸造、轧制、退火、织构控制、涂层、回收、公用工程和处理步骤已纳入，或以关联上游数据集明确置于前景门外。 | 路线图、过程清单、供应商边界记录及 `worldsteel-lci-methodology` |
| `dq_temporal_geographic` | 前景和上游数据 | 优先采用一个代表年份的场址数据；至少六个月的较短时段须说明理由，并采用地理和技术上具有代表性的能源与材料数据集。 | 报告期协调和数据集元数据；`worldsteel-lci-methodology` |
| `dq_meter_and_allocation` | 共享公用工程和多输出过程 | 记录仪表覆盖、校准、细分、分配或替代因子，以及实质共享负担的敏感性。 | 校准记录、仪表图、计算工作簿和分配证据 |
| `dq_completeness` | 全部清单行 | 覆盖已知材料、能源、水、排放、废物、共产品、辅助公用工程、内部运输和处理流；记录截断和未解决物料平衡差异。 | 完整性核查表、环境报告、物料平衡及 `worldsteel-lci-methodology` |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 要求产品流 `8863bbb7-7bc4-4ff1-ab21-4a01addf2ad4`、质量 `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`、参考单位 kg 和归一化数量 1。 | `worldsteel-lci-methodology` |
| `val_required_qualifiers` | 数据集元数据和参考产品 | 当第 3 节任何必需限定符缺失、内部不一致或未与所代表生产质量关联时，判定完整性失败。 | `iec-60404-8-4-2022`; `iec-60404-8-7-2020` |
| `val_boundary_route` | 过程清单 | 要求第 6 节每个路线适用过程或有文件依据的替代/外购输入门；拒绝静默省略牌号特定退火、织构控制、涂层或磁畴细化。 | `ec-fmp-bref-2022`; `doe-grid-supply-chain-2022`; `mehdi-et-al-2024` |
| `val_mass_and_yield` | 每个过程和完整链 | 要求协调输入/输出/库存变化，为切边、氧化铁皮、废钢、不合格品、涂层残余物和污泥记录去向，并说明未解决差异。 | `worldsteel-lci-methodology` |
| `val_route_aggregation` | 组合数据集 | 对实质不同炼钢路线、GOES/NOES 产品族、半工艺/全工艺状态和精整路线，要求明确产量权重及独立组成结果。 | `worldsteel-lci-methodology` |
| `val_allocation_recycling` | 共产品和废钢 | 要求披露所选分配/系统扩展方法、替代事实、废钢类别和寿命终止负担或抵扣；拒绝在从摇篮到大门结果与下游回收之间重复计算。 | `iso-20915-2018`; `worldsteel-lci-methodology` |
| `val_data_period_quality` | 前景数据包 | 要求报告期覆盖、场址范围、仪表/校准证据、产品谱系、源单位保留、换算记录，以及数据缺口和估算披露。 | `worldsteel-lci-methodology` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 代表已声明硅电工钢平轧产品族从摇篮到大门生产的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 当必需产品和路线限定符匹配时，可作为变压器、电动机、发电机、磁性部件、电气设备和材料供应链 LCA 过程及生命周期模型输入 |
| allowed_use | 质量基准从摇篮到大门清单、供应商或生产组合建模、热点分析，以及地理、时间、牌号、交付状态和分配约定相容的下游产品研究 |
| excluded_use | 在功能、磁性能、系统边界、数据质量和关键性评审不等同的情况下直接比较电工钢牌号或路线；在未增加下游过程时作为加工叠片、铁芯或完整设备的数据集 |
| required_metadata | PCR id 和版本；产品流 UUID；牌号/规范；GOES/NOES 类别；半工艺/全工艺状态；尺寸；涂层和磁畴细化状态；磁性测试依据；炼钢/铸造/轧制/退火路线；场址/地理范围；报告期；工厂门；上游数据集身份；分配与回收方法；可销售净产量 |
| required_quality_disclosure | 一手数据份额；仪表和卷/炉次谱系覆盖；时间与地理代表性；物料平衡状态；产品族与路线权重；截断；估算；分配/替代因子；上游数据年龄；评审状态 |
| update_trigger | 牌号或交付范围、生产路线、外购基材份额、退火/涂层/磁畴细化技术、场址或能源组合、分配/回收方法、来源标准或代表性数据期发生实质变化；否则至少在场址数据超过所选数据年龄政策时评审 |

## 11. 数据来源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `iso-20915-2018` | standard | ISO 20915:2018，钢铁产品生命周期清单计算方法。https://www.iso.org/standard/69447.html（检索于 2026-08-09） | 钢铁产品功能/声明单位、边界、废钢、共产品和报告原则 |
| `worldsteel-lci-methodology` | method_factor | 世界钢铁协会，Life Cycle Inventory Methodology Report。https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf（检索于 2026-08-09） | 1 kg 工厂门声明单位、从摇篮到大门边界、路线加权、数据收集、共产品系统扩展、废钢、排放和质量规则 |
| `ec-fmp-bref-2022` | official_guidance | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Ferrous Metals Processing Industry，2022。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf（检索于 2026-08-09） | 热轧、除鳞、酸洗、冷轧、退火、精整、表面处理、排放和残余物过程拆分 |
| `iec-60404-8-4-2022` | standard | IEC 60404-8-4:2022，全工艺状态交付的冷轧无取向电工钢带和钢片。https://webstore.iec.ch/en/publication/65821（检索于 2026-08-09） | NOES 范围、全工艺/最终退火交付状态、牌号、磁性/几何/工艺要求和检验限定符 |
| `iec-60404-8-7-2020` | standard | IEC 60404-8-7:2020，全工艺状态交付的冷轧取向电工钢带和钢片。https://webstore.iec.ch/en/publication/63884（检索于 2026-08-09） | GOES 范围、最终退火交付状态、普通/高磁导率/磁畴细化类别、尺寸和检验限定符 |
| `doe-grid-supply-chain-2022` | official_guidance | 美国能源部，Electric Grid Supply Chain Deep Dive Assessment，2022。https://www.energy.gov/sites/default/files/2024-12/Electric%2520Grid%2520Supply%2520Chain%2520Report%2520-%2520Final%5B1%5D.pdf（检索于 2026-08-09） | GOES 特定熔炼/铸造、热轧、切边、退火/酸洗、冷轧、取向、涂层和磁畴细化过程差异 |
| `mehdi-et-al-2024` | literature | Mehdi, M. 等，Manufacturing of non-grain-oriented electrical steels: review，International Journal of Advanced Manufacturing Technology（2024）。https://doi.org/10.1007/s00170-024-13837-9 | GOES/NOES 身份区分及路线依赖的铸造、热轧、冷轧、脱碳、退火、织构和平整过程结构 |
