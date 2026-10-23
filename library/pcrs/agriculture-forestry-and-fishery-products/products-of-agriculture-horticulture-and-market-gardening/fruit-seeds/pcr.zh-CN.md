---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 播种用水果种子产品类别规则

## 1. 范围与适用性

本 PCR 指导播种用水果种子的前景数据包构建，覆盖种子生产或繁殖、含种果实或干果结构的收获、依物种确定的取种、初级调理、分级和质量放行，以及到达声明种子交付门前的可选处理、包装和储存。路线允许依实际情况选择：种子可来自肉质果、干果、荚果、果核或类似繁殖结构，生产单元可为一年生露地作物、保护地、果园或采种园。

仅当产出为具有已声明作物或植物身份及播种用途的可识别种子批次时，本 PCR 才适用。不规定统一品种、种子等级、取种技术、储存温度、目标含水率、质量阈值、施肥方案或排放因子；这些值须来自前景记录，或已声明且有来源支持的选择。

排除种子并非预期播种产品、仅用于食品、饲料、加工或制油的水果；排除幼苗、移栽苗、嫁接植株、砧木、插条及其他活体种植材料；排除留作内部投入而非参考产出的育种或亲本材料；排除肥料、农药、处理产品、包装和设备的制造；排除使用种子的下游栽培、零售和消费者使用。声明交付门之后的配送也不纳入，除非明确核算送达门点。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds |
| classification_refs | CPC 3.0 `01360`，Fruit seeds；映射关系：exact |
| covered_products | 用于播种、可识别的水果作物或果树种子批次，包括从肉质果、干果、荚果、果核或类似繁殖结构中提取的种子；身份和质量基准已声明时，可包括开放授粉、杂交、认证、商业、自留及类似批次 |
| excluded_products | 仅附带种子的食用或饲用水果；不作为播种种子的水果加工残余物；幼苗、移栽苗、嫁接植株、砧木、插条及其他活体种植材料；不作为种子出售的内部育种存量；下游栽培和交付门后配送 |
| representative_product | 在声明交付门放行用于播种、可识别的净合格水果种子批次，声明作物或植物身份、种子等级、含水率或活力状态、物理纯度、发芽率或活力结果、处理状态及包装状态 |
| production_route | 受管理的露地、保护地、果园或采种园生产，随后为收获、适用的湿法／肉质果或干果取种、干燥和初级调理、分级／检验、可选处理、包装及储存 |
| market_state | 声明调理设施、种子库或其他具名交付门处的合格种子批次；包装、储存、含水率、质量及交接限定信息已声明时，允许散装及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明种子交付门处用于播种的净合格水果种子 |
| How much | 1 kg |
| How well | 作物或植物身份；品种、品系或杂交状态；种子等级；生产地理范围；一年生或多年生路线；肉质果或干果路线；取种和处理状态；含水率或活力基准；物理纯度；发芽率或活力结果；包装状态；纳入时的储存时长；声明交付门 |
| How long or cycle | 一个声明的种子生产周期和采收活动期。多年生果园或母株须记录相关建植、生产、更新和终止期间，以及将这些负荷归属种子批次的分配基准。 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 水果种子，生产组合，农场门，已清选达到播种等级 |
| 参考流属性 | 质量（`93a60a56-a3c8-11da-a746-0800200b9a66`） |
| 参考单位组 | 质量单位组（`93a60a57-a4c8-11da-a746-0800200c9a66`） |
| 参考单位 | kg |
| Reference identity status | 实际交接状态的 UUID 未解析；既有 UUID 证据仅适用于其原有明确状态。 |
| 必需限定信息 | 作物或植物物种；品种、品系或杂交状态；种子等级；生产地理范围；生产单元类型；一年生或多年生周期；肉质果、干果、荚果、果核或其他繁殖结构；湿法或干法取种路线；含水率基准或顽拗性种子状态；物理纯度；发芽率或活力结果及检验方法；处理状态；包装状态；储存时长；声明交付门；预期共产品；残余物、拒收物和返工物去向 |

构建前景数据包时，全部必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少这些限定信息的参考流不完整。实际参考产品流 UUID 尚未解析，须在最终 TIDAS 过程发布前核实。上表质量属性和单位组 UUID 仍为计量支持身份，不能据此确认参考产品身份。

计量基准限定：1 kg 净合格种子。

每份前景数据集须明确选择一种实际路线、声明交付门、产品状态及产出行。将所选终端路线与 `reference_product_at_declared_handoff` 对账；以该交接产出归一化到参考数量，前序阶段产出保留为实测转移量。原始称量、质量核对及批次追溯要求继续适用。

唯一参考输出为 `reference_product_at_declared_handoff`，接收所选实际路线在声明交付门处的产品。既有路线产出 ID 用于标识来源和物理状态，不再各自固定为参考数量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_seed_mass` | 参考产品及最终批次对账 | 质量（`93a60a56-a3c8-11da-a746-0800200b9a66`） | kg | 参考量为声明交付门处的净合格种子。毛重、皮重、含水率基准、合格、降级、拒收、样品、残余物和未解释损失质量分别保留。 |
| `seed_count_conversion` | 按粒数记录的种子 | 质量（`93a60a56-a3c8-11da-a746-0800200b9a66`） | kg；种子粒数或件数作为支持数据 | 只有采用实测千粒重、平均粒重或其他透明的批次特定换算时，才能将粒数转为质量。不得用未经限定的种子粒数替代质量参考量。 |
| `seed_moisture_basis` | 收获、取种、调理、储存和交付 | 质量和含水率 | kg；湿基百分比或已声明干基 | 声明每个质量是接收态、湿基、干基还是顽拗性种子基准。仅按已记录质量和含水率换算，不得跨物种套用统一目标含水率。 |
| `nutrient_product_and_element_basis` | 肥料和土壤调理剂投入 | 产品质量和养分质量 | kg 产品；声明的 kg N、P 或 K | 仅记录实际使用的产品。保留产品质量及标签、供应商规格、养分计划或实验室结果所声明的养分基准，不得推定肥料类型或浓度。 |
| `water_separation` | 灌溉、源头取水、取种、清洗和排水 | 体积或质量 | m3 或 kg | 区分源头取水、输送灌溉水、取种或清洗水、循环水、蒸发、滞留水和排水。同一水量不得同时作为产品投入和基本流取水重复计入。 |
| `energy_carrier_conversion` | 田间、收获、取种、调理、检验、处理、包装和储存 | 能量或载能体数量 | kWh、MJ、L、kg 或已声明载能体单位 | 保留实测载能体、作业、设备或服务、期间及因子来源。仅凭已声明因子换算载能体，并保留原始活动数据。 |
| `quality_attribute_reporting` | 放行种子批次 | 质量属性 | 百分比、检验方法对应结果或已声明分类状态 | 报告物理纯度、发芽率或活力、健康或处理状态、含水率或顽拗性状态，并保留检验方法、取样日期、批次 ID 及验收决定。这些属性限定参考流，不得静默换算为质量。 |
| `packaging_reuse_basis` | 包装及可复用容器 | 质量或件数 | kg、件或已声明包装单位 | 包装位于声明边界内时，记录包装质量或件数、容量、材料角色、批次归属、复用次数、返还率及终止使用时的交接。 |

本类别的种子质量范围不是通用默认值。作为筛查提示，可常规储存的正常型种子批次可使用暂定的 4–14% 湿基含水率 QA 区间，但应以物种特定的放行规格替代；顽拗性或中间型种子须采用物种特定的含水率和活力协议。FAO 指南区分肉质果浸泡与清洗、干果干燥与分离，以及不宜干燥后长期储存的物种（`fao-tree-seed-handling`；`fao-local-vegetable-seed-production`）。

## 5. 系统边界

默认前景边界从已声明的种源或亲本材料及准备好的生产单元开始，在合格种子批次通过声明的种子交付门时结束。包括受管理的种子生产、收获、适用的取种、初级干燥与清选、分级、检验及批次放行，以及到达交付门所需的可选种子处理、包装和储存。纳入实际养分产品和土壤调理剂、植保产品、灌溉和取水、田间与加工能源、土地占用、核算时的管理土壤直接排放、包装、处理产品、质量检验及有记录的拒收物和残余物。运输默认在边界外；仅在到达数据包所选送达门点确有需要时纳入。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | `source_seed_or_parental_material_and_prepared_production_unit` |
| starting_condition_role | identity_and_reproduction_condition |
| product_classification_scope | 当前 CPC 3.0 `01360`，Fruit seeds；PCR 身份保持语义定义，不仅凭分类叶节点创建 |
| recursive_input_rule | 对会递归追溯产品系统的同类别种子投入，作为已声明种源或亲本材料起始条件记录，披露批次身份、质量、处理及来源，不另建第二个递归种子过程。 |
| upstream_dataset_requirement | 披露种源批次或亲本材料身份、批次或田块来源、质量、种子等级、处理状态、含水率基准及上游边界证据。纳入上游负荷时须显式关联上游数据集，不得又将同一种源批次作为零负荷起始条件。 |
| disclosure | 声明起始生产单元状态、土地利用和基础设施排除项、一年生或多年生期间、路线变体、预期产出、质量放行状态、交付门，以及全部种源批次和拒收物流去向。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_seed_gate` | 全部默认数据集 | 纳入种源或亲本种子、受管理种子生产、收获、适用取种、干燥和调理、分级／检验、可选处理、包装及到达声明种子交付门所需的储存。排除下游作物栽培及交付门后配送。 | `fao-seed-production-manual`; `fao-seed-systems` |
| `boundary_route_variants` | 一年生、保护地、果园、采种园、肉质果和干果路线 | 选择一种或多种有证据的路线变体，披露其拓扑、清单类别、计算要求或验证要求的变化。没有过程记录时，不得将同一批次互斥的湿法和干法取种操作合并。 | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling` |
| `boundary_recursive_seed_input` | 种源及亲本材料 | 对会递归的同类别投入采用已声明起始条件概化。保留批次身份并披露上游数据集要求，不得静默赋予种源批次通用零负荷。 | `fao-seed-systems`; `mass-balance-identity` |
| `boundary_input_completeness` | 生产、取种、调理和交付准备 | 范围内实际养分及调理剂、植保、灌溉、取水、田间能源、土地、取种和调理能源、处理、包装、储存、直接排放及残余物，均须有采集值、有依据的零值或有记录的排除。 | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o`; `fao-seed-production-manual` |
| `boundary_output_fate` | 全部产品、废物及残余物产出 | 区分合格种子、含种果实或荚果、果肉或果浆、降级种子、筛下物、空籽或损伤种子、作物残体、洗涤残余物、粉尘、包装废物、储存损失及未解释损失，逐项记录去向或有证据的边界出口。 | `fao-seed-production-manual`; `mass-balance-identity` |
| `boundary_quality_gate` | 合格参考流 | 只有在已具备声明身份、种子等级、含水率或活力状态、物理纯度、发芽率或活力结果、处理状态、包装状态和批次放行决定后，产品才通过交付边界。 | `oecd-seed-schemes`; `ista-international-rules` |

依据产品或物质、物理状态、属性和单位核实每项实际交换身份；未确认身份保持未解析。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fruit_seed_multiplication` | 受管理水果种子繁殖 | required | 纳入产生含种繁殖材料的生产单元及管理作业。 | 前景生物生产 | 作物周期投入及成熟含种材料 |
| `fruit_seed_harvest_capture` | 含种材料收获与采集 | required | 从生产单元移出材料有单独记录时，将收获或采集作为独立节点纳入。 | 前景收获／采集 | 采收含种材料及田间损失 |
| `fleshy_seed_extraction` | 肉质果取种 | conditional | 肉质果在种子干燥或调理前需要浸渍、浸泡、发酵、打浆、清洗或浮选时纳入。 | 替代取种和生化处理 | 湿种子中间物及果浆／残余物流 |
| `dry_seed_extraction` | 干果或荚果取种 | conditional | 荚果、干果、果核或类似结构需要干燥、脱粒、去壳或机械分离时纳入。 | 替代取种和材料处理 | 干法提取种子中间物及外壳／残余物流 |
| `seed_drying_primary_conditioning` | 种子干燥与初级调理 | required | 纳入形成准备好种子批次所需的干燥、清选、清洗、风选、筛分、分离或稳定化。 | 前景调理 | 调理后种子、筛下物及调理损失 |
| `seed_grading_testing_lot_release` | 分级、检验与批次放行 | required | 纳入按声明质量或去向状态分类，以及检验／放行决定。 | 前景分级和质量放行 | 合格、降级、拒收及样品物流 |
| `seed_treatment_packaging_storage` | 处理、交付准备与储存 | conditional | 仅当处理、分装、包装或储存在声明交付门以内时纳入。 | 前景交付准备和稳定化 | 包装参考种子及储存损失 |
| declared_reference_handoff | 声明交接点的产品计量 | required | | 前景 | reference_product_at_declared_handoff |

一年生露地、保护地、果园和采种园路线可在记录分开的前提下共存。保护地或受控授粉仅在改变过程拓扑、清单类别、计算、数据要求或验证时才构成替代生产或技术路线，只有名称差异不足以成立。同一批次的肉质果取种与干果取种互斥；分别处理的批次须独立对账。

### 过程：受管理的水果种子繁殖 (`fruit_seed_multiplication`)

#### 输入
##### 产品流

###### `source_seed_material`

声明的种源批次或亲本材料作为繁殖起始条件进入繁殖过程。若其属于同一产品类别，不再递归展开。

- 选定流：水果种子或亲本繁殖材料（未绑定；前景数据生成时核实实际批次身份）
- 流属性/单位: 质量 / kg
- 数量规则: 在声明起始条件下实测批次质量，记录含水率和处理基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_seed_lot`
- 来源: `fao-seed-systems`
- 数量范围：默认估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 种源批次/kg 合格参考种子
  - 基准：覆盖低产种子繁育路线的宽泛初筛区间；用批次记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 尿素肥料（`fruit_seed_multiplication_agricultural_nutrient_inputs_urea`）

**fruit_seed_multiplication_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：1 kg 放行合格种子.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`fruit_seed_multiplication_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`fruit_seed_multiplication_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fertilizer-identities`

###### 氯化钾肥料（`fruit_seed_multiplication_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`fruit_seed_multiplication_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`fruit_seed_multiplication_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-organic-nutrients`

##### 废物流

#### 输出
##### 产品流

###### `mature_seed_bearing_material`

繁殖过程将成熟的含种材料交给收获／采集节点。材料可以是肉质果、干果、荚果、核果或其他已声明的繁殖结构，此时尚不是参考种子批次。

- 选定流：成熟含种果实材料（未绑定；须核实物种和状态特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 按生产单元和批次实测可收获成熟含种物料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot`
- 来源: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

##### 废物流


###### `crop_residues`

记录从生产单元移出或在单元内还田的叶、茎、果皮、未收集繁殖材料及其他非种子生物量。去向须区分还田、堆肥、饲料或其他预期用途、焚烧、处理及处置。

- 选定流：作物残体或非种子生物量（未绑定；须核实去向特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 按声明含水率基准实测或对账残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `ipcc-2019-cropland`; `mass-balance-identity`


###### `field_harvest_loss`

已成熟但未作为预期产出收集的材料记为田间损失或残余物，并记录去向和含水率基准。

- 选定流：田间损失的含水果种子生物量
- 流属性/单位: 质量 / kg
- 数量规则: 实测或对账田间损失物料质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_lot`
- 来源: `mass-balance-identity`

##### 基本流

###### `field_nitrous_oxide`

仅在声明的数据包核算管理土壤排放时纳入土壤直接 N2O。使用本过程的养分和残体记录，以及一个已声明且适用于当地的方法层级。

- 选定流：向空气排放的氧化亚氮，接收介质和报告物质待核实（适用排放功能内未绑定）
- 流属性/单位: Mass / kg N2O
- 数量规则：对实际矿质及有机养分投入、残体还田、挥发、淋失、土壤、气候和管理背景，采用一个选定的 IPCC 或地区认可方法层级；所报告的 N2O-N、NH3-N 或硝酸盐氮仅换算一次，并保留原始基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_context`
- 来源：`ipcc-2019-managed-soils-n2o`

最终交换为 kg N2O。该物种的元素氮活动量以及按氮计的因子／范围保留在独立计算台账。归一化前将该物种的氮质量乘 44/28，仅换算一次；化合物质量不得再次换算，按氮计的范围不得直接校验化合物质量。未经有据拆分，不得将总氮损失作为该物种。保留实际接收环境与方法边界；未知身份或活动量不等于零。

###### `field_ammonia_to_air`

仅在所选方法纳入氨挥发，且实际养分、土壤、气候和施用记录支持时记录氨挥发。

- 选定流：向空气排放的氨（适用排放功能内未绑定）
- 流属性/单位: Mass / kg NH3
- 数量规则：按声明的养分投入及所选方法因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_context`
- 来源：`ipcc-2019-managed-soils-n2o`

最终交换质量为 kg NH3；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 17/14，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### `field_nitrate_loss`

仅在所选方法和田间记录支持时记录硝酸盐淋失或径流，并保留实际接收区室和所报告物质。

- 选定流：向水体或土壤排放的硝酸盐（适用排放功能内未绑定）
- 流属性/单位: Mass / kg NO3-
- 数量规则：依据所选方法，按实际养分、灌溉、土壤、气候、排水或径流记录计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_context`
- 来源：`ipcc-2019-managed-soils-n2o`

最终交换为 kg NO3-。该物种的元素氮活动量以及按氮计的因子／范围保留在独立计算台账。归一化前将该物种的氮质量乘 62/14，仅换算一次；化合物质量不得再次换算，按氮计的范围不得直接校验化合物质量。未经有据拆分，不得将总氮损失作为该物种。保留实际接收环境与方法边界；未知身份或活动量不等于零。

### 过程：种子承载材料的收获与捕获 (`fruit_seed_harvest_capture`)

#### 输入
##### 产品流

###### `mature_seed_bearing_material_for_harvest`

这是生产过程向独立收获／采集节点的交接。批次 ID 和接收质量须与繁殖过程的产出记录一致。

- 选定流：成熟含种果实材料（未绑定；须与繁殖产出核实为同一批次身份）
- 流属性/单位: 质量 / kg
- 数量规则: 将接收质量关联到生产单元及收获批次记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_lot`
- 来源: `mass-balance-identity`

###### 柴油 (`harvest_machinery_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`harvest_machinery_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_field_energy`采集`fruit_seed_harvest_capture`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_energy`
- 来源：`route-energy-fao`

###### `harvest_electricity`

记录属于本过程的动力采收、采集时分选、提升机、风机或现场转运用电。

- 选定流：供电功能（具体电力身份未解析）
- 流属性/单位: 能量 / kWh
- 数量规则: 按收获批次记录表计或供应方记录的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy`
- 来源: `ipcc-2019-cropland`

#### 输出
##### 产品流

###### `harvested_seed_bearing_material`

将采收材料交给适用的肉质果或干果取种路线；不需要独立取种时，可直接交给初级调理。

- 选定流：已采收含种果实材料（未绑定；须核实物种和状态特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 按地磅、料箱、筐或批次记录扣除皮重后的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot`
- 来源: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### 有记录的产品交接点的完整含籽果实（`harvested_whole_fruit_coproduct`）

仅在本具体材料被独立预期、并确实在原有过程边界内交接时适用。记录实际物种或材料、物理形态、等级、必要时的水分或组成、批次、接收方、数量及交接点。列举名称不证明实际生产，也不是默认配方。每一物理批次及去向分别记录；内部转移或已计入所选参考产出的批次不得再次作为共产品。对于确实混合的筛下物或边角料物流，保留实测物理组成，不编造分离，也不重复计入组分。

采集与交接范围：含种果实有意出售或转交用于食品、饲料、加工或其他有记录的功能时，作为预期共产品记录，不作为废物。没有接收方或功能证据时，应归为残余物或废物。 原始活动或阶段基准：1 kg 放行合格种子.

- 选定流：有记录的产品交接点的完整含籽果实
- 流属性/单位：Mass / kg
- 数量规则：在唯一实际交接点计量本具体产品质量；保留原过程、批次和期间基准，恰好一次执行原有产量关联与归一化规则。未分配的物理数量台账与第 7 节共享负担分配分开。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-local-vegetable-seed-production`; `iso-14044-2006`

不继承已退役集合卡片的数值范围。使用相容的实测数量及本身份专属证据；证据缺失仍是完整性缺口，不代表零数量。在确认兼容确切身份前，UUID 保持未解析。

###### 有记录的产品交接点的分离果肉（`harvested_fruit_pulp_coproduct`）

仅在本具体材料被独立预期、并确实在原有过程边界内交接时适用。记录实际物种或材料、物理形态、等级、必要时的水分或组成、批次、接收方、数量及交接点。列举名称不证明实际生产，也不是默认配方。每一物理批次及去向分别记录；内部转移或已计入所选参考产出的批次不得再次作为共产品。对于确实混合的筛下物或边角料物流，保留实测物理组成，不编造分离，也不重复计入组分。

采集与交接范围：含种果实有意出售或转交用于食品、饲料、加工或其他有记录的功能时，作为预期共产品记录，不作为废物。没有接收方或功能证据时，应归为残余物或废物。 原始活动或阶段基准：1 kg 放行合格种子.

- 选定流：有记录的产品交接点的分离果肉
- 流属性/单位：Mass / kg
- 数量规则：在唯一实际交接点计量本具体产品质量；保留原过程、批次和期间基准，恰好一次执行原有产量关联与归一化规则。未分配的物理数量台账与第 7 节共享负担分配分开。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-local-vegetable-seed-production`; `iso-14044-2006`

不继承已退役集合卡片的数值范围。使用相容的实测数量及本身份专属证据；证据缺失仍是完整性缺口，不代表零数量。在确认兼容确切身份前，UUID 保持未解析。

##### 废物流

###### `harvested_material_loss`

将采收中掉落、损伤、染病、过熟或因其他原因拒收的材料与预期采收材料分开，记录处理、还田、回收或处置。

- 选定流：受损的已采收含种果实生物量
- 流属性/单位: 质量 / kg
- 数量规则: 实测或对账收获损失质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `mass-balance-identity`

###### `harvest_removed_residue`

茎、叶、荚、果实外壳及其他随采收批次移除的非种子材料离开生产边界时，须记录。

- 选定流：移除的田间残体（未绑定；须核实去向特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 实测残余物质量，或采用有记录支持的作物残余物平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `ipcc-2019-cropland`; `mass-balance-identity`

### 过程：多汁果实取种 (`fleshy_seed_extraction`)

#### 输入
##### 产品流

###### `harvested_fleshy_seed_material`

肉质果在种子干燥或调理前需要软化、浸渍、发酵、清洗或以其他方式分离果肉时，使用此条件路线。

- 选定流：已采收含种肉质果（未绑定；须核实实际物种和批次身份）
- 流属性/单位: 质量 / kg
- 数量规则: 接收批次质量，记录含水率及接收日期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### `extraction_process_water`

浸泡、浸渍、发酵、清洗、浮选或漂洗用水仅在跨越前景边界时记录。源头取水与排水分别记录。

- 选定流：工艺供水功能（具体水身份未解析）
- 流属性/单位: 质量 / kg 或 体积 / m3
- 数量规则: 按提取批次记录表计、批次或供应方记录的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`
- 数量范围：默认估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：m3/kg 合格参考种子
  - 基准：覆盖肉质果实种子提取路线的宽泛初筛区间；用批次记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### `fleshy_extraction_electricity`

记录湿法取种批次实际使用的打浆、搅拌、泵送、分离、风机及转运用电。

- 选定流：供电功能（具体电力身份未解析）
- 流属性/单位: 能量 / kWh
- 数量规则: 按提取批次记录表计或设备日志用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`technology_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `mass-balance-identity`

#### 输出
##### 产品流

###### `wet_seed_intermediate`

将果肉分离后组成和物理状态已改变的种子记为湿种子中间物，交给干燥或初级调理。使用发酵时，采集停留时间、接种或自然发酵条件、温度及终止判据；不规定默认发酵得率。

- 选定流：湿法提取水果种子中间物（未绑定；须核实物种和状态特定身份）
- 流属性/单位: 质量 / kg，另记含水率百分数
- 数量规则: 分离后、干燥前的批次种子质量及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### `fleshy_pulp_co_product`

仅在有预期用途、接收方、质量基准和交接记录时，将果浆或果肉记为共产品；否则归入残余物或废水记录，不给予共产品抵扣。

- 选定流：果浆或可食果肉共产品（未绑定；须核实接收方特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 实测分离质量并记录接收方或用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `fao-local-vegetable-seed-production`; `iso-14044-2006`

##### 废物流

###### `fleshy_extraction_rejects`

记录浮籽、空籽、明显损伤种子、异物及浮选或人工分离时丢弃的材料，说明其返工、降级、回收、堆肥、处理或废弃去向。

- 选定流：水果种子取种残余物
- 流属性/单位: 质量 / kg
- 数量规则: 称量拒收物流，或采用有证据支持的批次平衡差额；未解释差额不自动视为废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

###### `fleshy_extraction_residual`

没有共产品功能证据的残余果浆和洗涤固体作为废物记录，并声明所选处理方式或离开边界的去向。

- 选定流：果浆、洗涤或发酵残余物（未绑定；须核实废物身份及去向）
- 流属性/单位: 质量 / kg
- 数量规则: 实测包含所含水分的残余物质量，有记录时将废水和固体分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

### 过程：干果或荚果取种 (`dry_seed_extraction`)

#### 输入
##### 产品流

###### `harvested_dry_seed_material`

荚果、干果、果核或类似结构在初级调理前需要干燥、开裂、脱粒、去壳或机械分离时，使用此条件路线。

- 选定流：已采收干果、荚果、果核或种子结构（未绑定；须核实实际物种和批次身份）
- 流属性/单位: 质量 / kg
- 数量规则: 接收批次质量，附含水率或干燥状态记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `fao-local-vegetable-seed-production`

###### `dry_extraction_electricity`

记录去壳、脱粒、脱皮、滚筒处理、风选、输送或其他独立干法取种作业用电。

- 选定流：供电功能（具体电力身份未解析）
- 流属性/单位: 能量 / kWh
- 数量规则: 按干法提取批次记录表计或设备日志用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`technology_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

#### 输出
##### 产品流

###### `dry_extracted_seed_intermediate`

分离后的干种子中间物交给初级调理。其质量、含水率及批次身份须与接收的繁殖结构和残余物流核对。

- 选定流：干法提取水果种子中间物（未绑定；须核实物种和状态特定身份）
- 流属性/单位: 质量 / kg，另记含水率百分数
- 数量规则: 实测批次产出质量及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

##### 废物流

###### `dry_extraction_residue`

记录与种子分离的结构性残余物，以及有记录的还田、共产品、处理或处置去向。

- 选定流：荚、外壳、果壳或果实外被残余物（未绑定；须核实去向特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 称量残余物流，或采用有证据支持的干法提取平衡；未解释差额不自动视为废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

###### `dry_extraction_rejects`

将空籽、裂籽、损伤或其他拒收种子与外壳和结构性残余物分开记录。返工或降级须关联后续过程。

- 选定流：空籽、裂籽或损伤种子（未绑定；须核实去向特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 称量拒收物流并记录质量处置决定
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

### 过程：种子干燥与初级调制 (`seed_drying_primary_conditioning`)

#### 输入
##### 产品流

###### `raw_seed_for_conditioning`

本节点接收湿法提取种子、干法提取种子，或未单独设取种过程时的原始含种材料。须明确所选状态、含水率及批次身份。

- 选定流：原始或已提取水果种子（未绑定；须核实上游批次及状态）
- 流属性/单位: 质量 / kg，另记含水率百分数
- 数量规则: 按调理批次记录接收质量及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-tree-seed-handling`; `fao-seed-production-manual`

###### `conditioning_process_water`

清洗、漂洗、浮选或调理用水仅在跨越本过程边界时记录。

- 选定流：工艺供水功能（具体水身份未解析）
- 流属性/单位: 质量 / kg 或 体积 / m3
- 数量规则: 实测或按批次记录用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-tree-seed-handling`

###### `conditioning_electricity`

记录调理节点中干燥机、风机、筛分机、吸风分选机、分级机、泵和输送机用电。

- 选定流：供电功能（具体电力身份未解析）
- 流属性/单位: 能量 / kWh
- 数量规则: 按调理批次记录表计或设备记录的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`technology_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-seed-drying-storage-2024`; `mass-balance-identity`
- 数量范围：默认估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 合格参考种子
  - 基准：覆盖干燥和清选技术的宽泛初筛区间；用批次计量记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出
##### 产品流

###### `conditioned_seed_lot`

准备好的种子批次以已声明的含水率或顽拗性种子状态、清洁度及批次身份离开初级调理，进入分级／检验。

- 选定流：调理后水果种子批次（未绑定；须核实物种和状态特定身份）
- 流属性/单位: 质量 / kg，另记含水率百分数
- 数量规则: 实测产出质量及与质量相关的含水率结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`

##### 废物流

###### `conditioning_screenings`

记录筛分、风选、吸风分选或清选分离出的杂草种子、土壤、果实碎片、空籽及其他材料。有用途的预期产出须有去向和功能证据；否则作为废物。

- 选定流：种子筛下物及异物（未绑定；须核实去向特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 称量筛下部分并记录处置去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-seed-production-manual`; `mass-balance-identity`

###### `conditioning_dust_residue`

记录从产品流中移除的粉尘及细残余物，包括其封闭控制、收集方式和下游去向。

- 选定流：种子粉尘及细调理残余物（未绑定；须核实去向特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 实测收集质量或采用有记录支持的对账结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`technology_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-seed-production-manual`; `mass-balance-identity`

##### 基本流

### 过程：分级、检验与批次放行 (`seed_grading_testing_lot_release`)

#### 输入
##### 产品流

###### `conditioned_seed_for_grading`

调理后的批次进入分级和检验时，须保留批次 ID、质量、含水率基准及前一过程的放行记录。

- 选定流：调理后水果种子批次（未绑定；须核实为同一上游批次身份）
- 流属性/单位: 质量 / kg
- 数量规则: 将接收质量关联到调理批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_quality_testing`
- 来源: `ista-international-rules`; `mass-balance-identity`

###### `quality_testing_electricity`

记录声明边界内末道清选、分级、取样、实验室检验及批次放行活动的用电。

- 选定流：供电功能（具体电力身份未解析）
- 流属性/单位: 能量 / kWh
- 数量规则: 按受检批次或报告期间分配表计或设备日志用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_testing`
- 来源: `ista-international-rules`

#### 输出
##### 产品流

###### `accepted_seed_lot_before_presentation`

这是分级和批次放行后的合格播种种子状态。声明边界不含处理、包装或储存时，该交接点为等效参考产品交付门。

- 选定流：合格播种用水果种子批次（未绑定；须核实最终物种和批次特定身份）
- 流属性/单位：质量 / kg

原参考状态单位说明：kg

原始产出计量与核对要求：按放行证书对应的净质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_quality_testing`
- 来源：`oecd-seed-schemes`; `ista-international-rules`; `mass-balance-identity`
- 数量范围：QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：4
  - 上限：14
  - 单位：湿基百分比
  - 基准：仅适用于正常型可储藏种子的暂定筛查区间；用物种特定放行规范替代，不适用于顽拗型种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### `downgraded_seed_lot`

仅在有声明的播种用途、接收方、质量状态和交接记录时，将较低等级或未经认证的种子批次作为预期产品；否则归为拒收种子或废物。

- 选定流：用于声明播种用途的降级水果种子批次（未绑定；须核实去向特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 实测质量并记录降级决定
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_testing`
- 来源: `oecd-seed-schemes`; `iso-14044-2006`

##### 废物流

###### `rejected_seed_and_test_samples`

记录拒收种子、留样及不可返回的检验材料及其下游路径。返回批次的样品不是新增产出，须仅核对一次。

- 选定流：拒收水果种子
- 流属性/单位: 质量 / kg
- 数量规则: 按批次称量拒收种子和取样质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_testing`
- 来源: `ista-international-rules`; `mass-balance-identity`

### 过程：处理、包装与储存 (`seed_treatment_packaging_storage`)

#### 输入
##### 产品流

###### `accepted_seed_for_presentation`

仅在处理、分装、包装和储存位于声明交付门以内时，合格种子批次才进入这些活动。

- 选定流：合格播种用水果种子批次（未绑定；须与质量放行产出核实为同一批次身份）
- 流属性/单位: 质量 / kg
- 数量规则: 按批次记录接收的合格净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_storage`
- 来源: `mass-balance-identity`

###### `presentation_storage_electricity`

记录交付门以内灌装、封口、贴标、通风、温湿度控制及储存搬运用电。

- 选定流：供电功能（具体电力身份未解析）
- 流属性/单位: 能量 / kWh
- 数量规则: 将表计用电量分配到相应批次或储存期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_packaging_storage`
- 来源: `fao-seed-drying-storage-2024`; `fao-seed-production-manual`

#### 输出
##### 产品流

###### `fruit_seed_reference_flow`

纳入处理、分装、包装或储存时，这是参考产品产出。省略本过程时，`accepted_seed_lot_before_presentation` 是等效的交付门产出。

- 选定流：声明交付门处播种用水果种子（未绑定；须核实最终参考产品身份）
- 流属性/单位：质量 / kg

原参考状态单位说明：kg 净质量

原始产出计量与核对要求：放行批次净质量减皮重、样品、拒收和交付前损失

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`fao-seed-production-manual`; `ista-international-rules`; `mass-balance-identity`

##### 废物流

###### `storage_loss`

记录纳入的储存期间发生的失重、变质、虫害、水分损伤或拒收质量。退回上游重新调理的批次是返工回路，不是最终废物产出。

- 选定流：储存损失或因活力不合格拒收的种子（未绑定；须核实去向特定身份）
- 流属性/单位: 质量 / kg
- 数量规则: 按批次和去向计量实际受损、拒收或损失物流，物料数量互不重叠。在相同水分和组分基准下核对：期初库存＋接收量＝合格发运＋其他外部转移＋拒收移出＋独立有据物理损失＋期末库存。返工回流为一对对应转移，仍持有时计入期末库存，不另计最终产出。未解释差额须调查，不自动作为物理废物或排放。不得将移出批次加到接收量、漏计期末库存，或重复扣除已包含于本物流的损失。每项有据外部数量按合格最终产出仅归属和归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_storage`
- 来源: `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`; `mass-balance-identity`


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：水果种子，生产混合，农场门，已清理至播种种子等级
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：水果种子，生产混合，农场门，已清理至播种种子等级
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_process_subdivision` | 共享生产、收获、取种、调理和储存负荷 | 优先过程细分和直接批次记录；记录允许时，将作业特定投入和产出直接归属种子批次。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_fruit_co_product` | 可食果实、果浆、果肉或其他预期共产品 | 先凭接收方、功能、质量和交接证据，将物流分类为预期共产品、残余物或废物。必须进行共产品分配时，使用数据包选定并声明的物理或经济关系，记录依据和敏感性；不得为无证据用途给予抵扣。 | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `allocation_seed_grade_outputs` | 合格及降级种子批次 | 只有两者均有声明的播种功能和交接时，才将合格和降级种子作为独立预期产出。按声明的物理、质量或经济基准分配共享负荷，拒收种子不计入合格参考产出。 | `iso-14044-2006`; `oecd-seed-schemes` |
| `allocation_cross_period_mother_plants` | 果园、多年生母株及多年采种园 | 将建植、生产、更新和终止事件关联报告期间。按有记录的期间基准，将共享多年生投入归属同一声明期间的种子产出；建植或终止负荷不得在多个期间重复计入。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_rejected_and_rework` | 拒收、退回、重新调理和储存损失 | 将拒收和返工关联其产生节点。保留退回返工材料的既有负荷，仅增加一次返工作业，不得将返工材料计为第二次合格产出。废弃材料不给予产品抵扣。 | `fao-seed-production-manual`; `mass-balance-identity` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_products_specific_input` | `cp_field_management_inputs` | 作业 fruit_seed_multiplication：- 流：实际使用的植保产品/有效成分 - 单位：kg 产品或 kg 有效成分 - 数量规则：按产品、有效成分、施用次数和批次记录 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：实际使用时填 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_field_management_inputs` - 来源：`ipcc-2019-cropland` 原数量方法：按产品、有效成分、施用次数和批次记录 |
| `harvest_machinery_fuel_specific_input` | `cp_field_energy` | 作业 fruit_seed_harvest_capture：- 流：收获机械的柴油、汽油或其他燃料 - 单位：L 或 kg；附低位热值 - 数量规则：按加油、设备小时或燃料计量器记录 - 数值来源模式：前景记录（`foreground_record`） 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_field_energy` - 来源：`fao-seed-production-manual` 原数量方法：按加油、设备小时或燃料计量器记录 |
| `seed_treatment_product_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：实际使用的种子处理剂、包衣剂、载体或消毒剂 - 单位：kg 产品；另报有效成分质量 - 数量规则：按产品、批次、剂量和有效成分基础 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：实际处理时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-tree-seed-handling`, `ista-international-rules` 原数量方法：按产品、批次、剂量和有效成分基础 |
| `flexible_package_material_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：袋、膜、内衬等软包装材料 - 单位：kg 材料 - 数量规则：按包装规格、实际用量和复用/回收比例 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：使用软包装时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-seed-drying-storage-2024` - 数量范围：默认估计 - 范围角色：默认估计（`default_estimate`） - 下限：0 - 上限：2 - 单位：kg 包装材料/kg 合格参考种子 - 基准：覆盖小包装和散装容器的宽泛初筛区间；用包装记录替代 - 基准类型：参考流（`reference_flow`） - 证据类型：推理估计（`reasoned_estimate`） 原数量方法：按包装规格、实际用量和复用/回收比例 |
| `rigid_container_material_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：瓶、罐、桶等刚性容器 - 单位：kg 材料 - 数量规则：按容器质量、数量和实际复用/回收记录 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：使用刚性容器时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-seed-drying-storage-2024` 原数量方法：按容器质量、数量和实际复用/回收记录 |
| `carton_box_material_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：纸箱、瓦楞箱和其他外箱 - 单位：kg 材料 - 数量规则：按箱体规格、数量和实际损耗 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：使用纸箱/外箱时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-seed-drying-storage-2024` 原数量方法：按箱体规格、数量和实际损耗 |
| `pallet_crate_material_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：托盘、周转箱和运输承载包装 - 单位：kg 材料 - 数量规则：按实际质量、周转次数、返还率和损耗分摊 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：使用托盘/周转箱时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-seed-drying-storage-2024` 原数量方法：按实际质量、周转次数、返还率和损耗分摊 |


### 按实际路线确认能源身份

按实际产品状态、作业、设备及供能记录选择能源交换。下列条件式卡片不是必用或穷尽的燃料清单。逐项记录适用性、所用载能体、供应商、服务期间、原生数量及分配；对于尚未表示的实际投入，须另建物理身份具体的卡片并核验UUID。未识别投入仍是明确的完整性缺口，不得记为零或笼统能源交换。人工、环境干燥或绕过某节点的证据，仅能支持相应作业的未使用结论。即使未列示例卡，也须保留全部必需作业的调查。

区分外购供能与现场转换。自产电力通过内部连接衔接前景发电过程，其实际燃料及排放只在发电节点计入一次；同一内部转移不得再计外购电力供应。外购热亦不得重复计入供应商侧燃料。将共用电表、承包服务已含能耗与现有卡片对账，同一物理数量仅归属一次。保留原始量、输出吞吐、共用服务分配及出口后活动排除要求。逐载能体仅进行一次期间与输出归属，以相同产品单位下匹配的最终合格产出缩放至声明参考数量，不再次归一化已归一化数量。过程原生强度须通过实测吞吐衔接最终产出。这些要求不设用量默认值，也不证明数据集完整。

| requirement_id | collection_protocol_id | 必需作业及证据 |
| --- | --- | --- |
| `conditioning_stationary_fuel_identification` | `cp_conditioning_batch` | 实际固定式调理或干燥加热器：先确认直接燃烧燃料还是外购热及交付规格，再选身份；不重复已有电力。 原始活动或阶段基准：1 kg 放行合格种子. (`route-energy-fao`) |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| `protocol_id` | `process_id` | `flow_role` | `record_type` | `raw_fields` | `collection_method` | `unit` | `frequency` | `temporal_coverage` | `site_scope` | `aggregation_rule` | `quality_evidence` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source_seed_lot | fruit_seed_multiplication | 种源种子或亲本材料 | 批次登记、发票、种子证书或内部转移记录 | 批次编号；物种；品种或品系；等级；供应商或来源；质量；含水率；处理；日期 | 抄录主要批次记录并与收货记录核对；每个来源批次单独保留记录，完成身份核对后再汇总 | kg；百分比；声明的分类字段 | 每个种源批次 | 每个生产周期 | 每个生产单元和种源批次 | 每声明的参考流 | 批次记录、标签、证书、收货检查 |
| cp_field_management_inputs | fruit_seed_multiplication | 养分、改良剂和植保投入 | 采购、施用和农场管理记录 | 产品；配方；养分或有效成分基础；数量；日期；面积；方法；批次；去向 | 将采购和施用记录核对至生产单元；按生产单元和期间汇总实际施用量 `crop_protection_products_specific_input`: 作业 fruit_seed_multiplication：- 流：实际使用的植保产品/有效成分 - 单位：kg 产品或 kg 有效成分 - 数量规则：按产品、有效成分、施用次数和批次记录 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：实际使用时填 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_field_management_inputs` - 来源：`ipcc-2019-cropland` 原数量方法：按产品、有效成分、施用次数和批次记录 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg 产品；kg 养分或有效成分；ha | 每次施用 | 完整作物周期或多年生报告期 | 每个地块、温室、果园区块或种子园 | 每声明的参考流 | 发票、标签、养分计划、施用日志 |
| cp_irrigation_and_withdrawal | fruit_seed_multiplication | 灌溉和取水 | 水表、泵运行日志、水源记录、排水或排放记录 | 水源；水表起止读数；输送体积；循环用水；排水；降雨或其他声明用水；日期 | 读取水表并核对水源取水、输送和排放；按水源和生产单元汇总，取水与输送分开保留 | m3 或 kg | 每次灌溉或每月水表读数 | 完整作物周期或报告期 | 每个水源和生产单元 | 每声明的参考流 | 校准水表、泵运行日志、用水记录 |
| cp_field_energy | fruit_seed_multiplication | 田间能源 | 燃料领用、机械日志、电表、承包商发票 | 作业；能源载体；数量；机械；面积或批次；日期；因子引用 | 采集主要能源载体记录和承包商活动数据；只将有记录的作业分配至种子路线 `harvest_machinery_fuel_specific_input`: 作业 fruit_seed_harvest_capture：- 流：收获机械的柴油、汽油或其他燃料 - 单位：L 或 kg；附低位热值 - 数量规则：按加油、设备小时或燃料计量器记录 - 数值来源模式：前景记录（`foreground_record`） 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_field_energy` - 来源：`fao-seed-production-manual` 原数量方法：按加油、设备小时或燃料计量器记录 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | L、kg、MJ 或 kWh | 每次作业或每月 | 完整作物周期或报告期 | 每个生产单元和作业 | 每声明的参考流 | 仪表、燃料领用、承包商记录 |
| cp_land_and_period | fruit_seed_multiplication | 土地占用和期间 | 地块登记、地图、租约、种植和移除记录 | 面积；生产单元编号；土地利用类别；种植和终止日期；生产期；更新事件 | 与地块或果园登记核对面积和日期；按声明期间及产出基础计算面积时间 | ha；m2；ha a；日期 | 每次种植、更新或终止事件 | 多年生单元完整生产寿命 | 每个地块、果园区块、温室或种子园 | 每声明的参考流 | 地图、登记、注明日期的田间记录 |
| cp_harvest_lot | fruit_seed_harvest_capture | 收获、田间损失、残体和交接 | 收获表、地磅、料箱或周转箱记录、田间损失日志 | 批次编号；生产单元；收获日期；毛重和皮重；成熟材料；损失；残体；共产品；目的地 | 收获时称量，或使用有记录的方法估算；完成批次和含水率核对后再汇总 | kg；含水率百分比 | 每次收获或采集 | 完整收获季 | 每个生产单元和批次 | 每声明的参考流 | 地磅、皮重记录、收获日志 |
| cp_extraction_batch | fleshy_seed_extraction_or_dry_seed_extraction | 提取投入、中间品、拒收品和能源 | 批次表、设备日志、仪表、含水率和停留时间记录 | 投入批次；路线；方法；水；能源；时间；相关时的温度；投入与产出质量；含水率；拒收品；残留物；交接 | 逐批记录提取作业并关联批次编号；先核对各批次，再汇总整个作业季 | kg；m3；kWh；MJ；百分比；小时或天 | 每批 | 完整提取季 | 每条提取线和批次 | 每声明的参考流 | 批次表、仪表、含水率测试、设备日志 |
| cp_conditioning_batch | seed_drying_primary_conditioning | 干燥、清洗、清理、能源、产出和拒收品 | 调制批次表、干燥机或清理机日志、仪表、含水率记录 | 投入批次；方法；投入与产出质量；含水率；水；电力；燃料或热；筛下物；粉尘；去向 | 逐批记录调制并核实产出状态；按批次和声明含水率基础汇总 按路线确认要求：`conditioning_stationary_fuel_identification`: 实际固定式调理或干燥加热器：先确认直接燃烧燃料还是外购热及交付规格，再选身份；不重复已有电力。 原始活动或阶段基准：1 kg 放行合格种子. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | kg；m3；kWh；MJ；百分比 | 每批 | 完整调制季 | 每条生产线、设施和批次 | 每声明的参考流 | 批次表、仪表、含水率测试、废物单据 |
| cp_quality_testing | seed_grading_testing_lot_release | 等级、样品、检验和放行 | 实验室报告、抽样记录、分级表、放行决定 | 批次编号；样品编号；样品质量；纯度；发芽率或活力；健康；含水率；方法；日期；等级；去向 | 使用有记录的抽样和测试方法，保留放行决定；只有测试方法及批次身份相符时，才对批次加权或核对 | kg；百分比；分类结果 | 每批及每次必要复检 | 每个批次和放行期间 | 每个设施和实验室 | 每声明的参考流 | 实验室报告、抽样员记录、证书、放行签字 |
| cp_treatment_packaging_storage | seed_treatment_packaging_storage | 处理、包装、储存和交付形态 | 处理日志、包装规格、领用记录、库存台账、储存日志 | 批次编号；处理产品和剂量；包装类型和质量；装填数量；复用；期初和期末库存；相关时的温度或湿度；损失；发运; 每股物流的材料或产品身份；组成及污染状态；原生数量与单位；件重或密度换算依据；批次；产品与包装净质量；复用或返工；接收方；处理路线；匹配参考产出 ；期初期末库存；接收；发运；其他外部转出；实测拒收；独立有据损失；配对返工；水分/组分基准；未解释平衡差| 计量各实际物流并按匹配水分/组分基准核对：期初库存+接收=合格发运+其他外部转出+拒收移出+独立有据物理损失+期末库存。返工/返回配对，留存材料纳入库存。未解释差额为证据缺口，不能自动成为废物或排放。保留归属并按匹配最终合格产出归一化一次。 | kg；件；kWh；百分比；日期；储存时长; 每股物流的 kg 分别记录；液体原生体积另列；件数与质量分开 | 每次处理、包装作业、库存变动或每月储存记录 | 纳入边界的处理和储存期间 | 每个设施、储存室和批次 | 每声明的参考流 | 处理记录、包装规格、仪表、库存台账 |
| cp_co_product_and_residue_fate | fruit_seed_harvest_capture_or_extraction_conditioning_process | 共产品、残体、拒收品和废物去向 | 销售或转移记录、接收方确认、堆肥或处置单据 | 物流；质量；含水率；预定用途；接收方；质量状况；交接；处理；日期 |将产出物流关联至可长期追溯的去向记录；不得汇总不同去向而不保留各物流身份 harvested_fruit_co_product_specific_output：保留原 harvested_fruit_co_product 所采集的每一实际预期产出，包括条件示例尚未表示的产品。这是必需的身份确认要求，不是交换。完成数据集前，每一实际产品须分别建立物理身份明确的卡片，记录材料或物种、物理状态、原生属性和单位、实测数量、接收方、交接点，以及兼容 UUID 或确切未解析身份。保留原批次、期间、产量关联及第 7 节分配义务；物理销售恰计一次，已计入所选参考产出分母的产品不得重复计入。不得从缺失记录推定产品配方、材料分离、数值范围或零数量。 | kg；百分比；分类去向 | 每个产出物流 | 完整生产和加工季 | 每个生产单元及接收目的地 | 每声明的参考流 | 发票、转移单、废物单据、接收方记录 |
| cp_emission_context | fruit_seed_multiplication_or_seed_drying_primary_conditioning | 基本流排放和方法背景 | 土壤、气候、养分、排水、排放、粉尘和因子记录 | 物质；接收介质；土壤；气候；养分投入；残体去向；灌溉；排水；方法层级；因子；测量；日期 | 采集方法输入和计算结果并保留来源及单位；按声明方法计算一次，并与活动数据核对 `conditioning_particulate_to_air_specific_emission`: - 流：清选、输送和干燥逸散至空气的颗粒物 - 单位：kg PM（注明粒径类别） - 数量规则：按除尘监测或适用排放因子 - 数值来源模式：计算值（`calculated_value`） 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：根据采集计算（`calculated_from_collection`） - 采集协议：`cp_emission_context` - 来源：`fao-seed-drying-storage-2024` 按除尘监测或适用排放因子 这是必需的排放身份确认要求，不是集合式基本交换。每种适用物质及其实际接收介质须分别识别，保留兼容单位、实测活动量或有依据的计算方法、参数适用性及不确定性。保留原作业、期间、分配及最终参考流归一化规则。直接、间接路径及上游覆盖仅核算一次，不用总氮、燃烧总排放或泛称污染物替代具体化合物。适用时另行记录实际归还环境的材料及去向。完成数据集前须为每项必需交换建立具体卡片，并核验兼容UUID或明确保留未解析身份。缺少记录不等于零排放或不适用。 `fao-seed-drying-storage-2024` | kg 物质；kg N；ha；m3；因子单位 | 每次施用、事件或报告期 | 完整作物周期、批次或期间 | 每个生产单元和排放源 | 每声明的参考流 | 方法表、实验室或仪表记录、因子引用 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground rows | 归一化量=原始记录/计算量×1 kg÷同一交接点和声明水分基准的合格参考种子净质量；仅归一化一次。 | process amount; net accepted reference seed; moisture basis | amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_seed_dry_matter_conversion` | harvest, extraction, conditioning, storage, and delivery | 干物质=收到态质量×（1−湿基水分比例）；目标水分基准质量=干物质÷（1−目标水分比例）。顽拗性种子采用物种适用规则或保留收到态质量，不强制无据干燥。 | as-received mass; measured moisture; declared target basis; recalcitrant status | comparable mass and moisture-basis conversion | `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_managed_soil_emissions` | field nutrient and residue emissions | 按实际矿质/有机养分、还田残余、挥发、淋失、土壤、气候和管理记录选择一个适用IPCC或地区认可层级。保留原报告基准，N2O-N、NH3-N和硝酸盐氮仅在需要时各换算一次。 | nutrient records; residue fate; soil and climate; method tier and factors | declared elementary emissions by substance and receiving medium | `ipcc-2019-managed-soils-n2o` |
| `calc_land_occupation` | productive land | 面积时间=生产单元面积×声明实际占用时间，按calc_reference_normalization归一化；多年生单元使用声明的生产、替换和终止期间。 | area; dates; production period; accepted seed output | ha a or m2 a per reference flow | `ipcc-2019-cropland`; `mass-balance-identity` |
| `calc_water_balance` | irrigation, extraction, conditioning, and discharge | 在分别定义的水源输水网及过程边界核对源取水、交付水、内部循环、蒸发、材料含水、外排和期初期末库存。内部循环相消，不从已测外部供水或外排量重复扣回用；源取水和外购过程水不能作为同一数量重复交换。 | source and process-water records; meter readings; discharge and recirculation | water inputs, withdrawal, and discharge by process | `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_extraction_yield` | fleshy and dry extraction | 取种回收率=声明基准的中间种子质量÷同基准接收的含种子材料质量；共同产物、残余、拒收和未解释差额分别保留。 | input/output masses; moisture; co-product and reject records | recovery ratio and reconciled extraction outputs | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_conditioning_yield` | primary conditioning | 整理回收率=整理种子质量÷水分基准一致的原始或提取种子进入量；核对合格种子、筛下物、粉尘、拒收、水分损失及未解释差额。 | conditioning input/output; moisture; screening and loss records | conditioning recovery and mass balance | `fao-seed-production-manual`; `mass-balance-identity` |
| `calc_quality_lot_aggregation` | lot release and campaign aggregation | 仅汇总身份、路线、水分基准、试验方法和声明质量等级匹配的批次。仅在试验方法允许时按质量加权品质指标，否则保留逐批结果。 | lot mass; quality results; test method; lot identity | accepted lot set and quality disclosure | `ista-international-rules`; `oecd-seed-schemes` |
| `calc_co_product_attribution` | fruit, pulp, flesh, or other intended co-products | 优先分割过程。仍有共享负荷时，按已声明的物理或经济主方法及已有分配优先级对有据预期产出分配并披露敏感性；残余和废物不获共同产物信用。 | shared process burdens; output masses or values; intended-use evidence | attributed seed burden and co-product burden | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `calc_period_attribution` | perennial orchards, mother plants, seed gardens, and multi-period storage | 将每项投入、资产、产出、替换、终止及储存事件关联至一个期间；共享负荷向该期间声明产出归属一次，并核对期初期末记录。 | period records; output; establishment/replacement/termination; storage records | period-attributed inventory and no-double-counting check | `iso-14044-2006`; `mass-balance-identity` |
| `calc_reusable_packaging_mass` | reusable packaging | 批次包装质量=分配给该批的包装实物质量÷有据服务周转次数，仅按已记录退回或损失率调整；周转次数未知时报告全部分配质量和不确定性。 | package mass; capacity; service cycles; return/loss rate; lot assignment | packaging mass per reference flow | `fao-seed-production-manual`; `mass-balance-identity` |
| `calc_storage_reconciliation` | included storage | 按批次和去向计量实际受损、拒收或损失物流，各数量互斥。按匹配水分/组分基准核对：期初库存+接收=合格发运+其他外部转出+拒收移出+独立有据物理损失+期末库存。返工作为配对转移或留存库存，不计额外最终产出；未解释差额为调查项，不能自动作废物或排放。不将移出批次加到接收，不漏期末库存，不重复扣损失，最终归一化一次。 | opening/closing inventory; receipts; dispatch; loss; rework records | storage loss and delivered reference amount | `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`; `mass-balance-identity` |
| `packaging_rejects_specific_output` | seed_treatment_packaging_storage | 对果实种子的处理、包装及展示活动，将不合格包装袋、封口失效件、标签、薄膜、损坏容器及其他实际废弃物按有据材料与污染状态识别。称量每股实际物流，或使用有记录的单件质量及其不确定性将件数换算为质量；件数本身不是质量。返回使用的可复用物品保留在复用台账中，不自动作为报废废物。保留种子批次污染控制、原合格参考种子基准、库存变动、去向及处理责任。 这是必须完成的采集与计算要求，不是一项库存交换。完成数据集前，应对每股实际外运物流建立物理身份具体的卡片，记录组成、状态、原生数量与流属性、去向以及有依据的产品或废物角色。仅使用兼容且已验证的 UUID，或明确登记具体未解析身份。不得编造包装配方、假定已分选、根据缺证据推断零或省略必需物流。真实的一股混合物流只有在存在收集与交付证据、明确组成且处理路线兼容时，才可保留为一个身份；不得同时重复计入其组分外运量。分别处理的液体与固体物流分开记录。保留原归属、期间、质量与水量平衡、参考分母及处理服务边界；已有匹配交换时建立关联而不重复计数。原集合范围不作为单股物流默认量或限制。 | cp_treatment_packaging_storage | actual stream-specific exchanges, destinations and nonduplicated mass balance | `fao-seed-production-manual`; `mass-balance-identity` |
| `chemical_species_mass_accounting` | elementary_nutrient_emissions | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_emission_context`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | Identity-specific exchanges and reconciled activity records |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_lot_traceability` | 参考流及全部产品行 | 每个产品状态均保留物种或植物身份、品种／品系或杂交状态、种子等级、批次 ID、生产单元、路线及交接。最终过程发布前解析全部固定 UUID。 | `fao-seed-systems`; `ista-international-rules` |
| `dq_measurement_and_tare` | 质量、水、能源、包装及排放 | 保留仪器、发票、计量表、皮重、换算因子、含水率方法、单位及不确定性或估计依据。区分实测、计算、建模和暂定值。 | `mass-balance-identity`; `ista-international-rules` |
| `dq_temporal_and_period_coverage` | 一年生、多年生、储存及作业批次记录 | 覆盖完整种子生产周期或声明报告期间、全部采收轮次、库存流转、更新、终止及复检。每项记录关联一个期间。 | `iso-14044-2006`; `mass-balance-identity` |
| `dq_input_completeness` | 生产及加工投入 | 每种实际养分／调理剂、植保产品、水、载能体、土地、处理、包装及储存服务，均须有采集值、有依据的零值或有记录的排除。 | `ipcc-2019-cropland`; `fao-seed-production-manual` |
| `dq_quality_release_evidence` | 合格、降级、拒收及参考种子 | 保留取样计划、检验方法、取样日期、物理纯度、发芽率或活力、含水率、健康／处理状态、等级及放行决定。 | `ista-international-rules`; `oecd-seed-schemes` |
| `dq_co_product_and_fate_evidence` | 预期共产品、残余物、拒收物和废物 | 保留接收方、功能、质量状态、质量、交接和去向证据。不得将没有证据的残余或拒收物流作为共产品。 | `iso-14044-2006`; `fao-seed-production-manual` |
| `dq_flow_binding_coordinates` | 全部参数化及未绑定流 | 依据具体流 UUID、物理状态、属性和单位核实每项实际交换；无法确认时明确保留未解析身份。 | `mass-balance-identity` |
| `dq_method_and_factor_provenance` | 基本排放及换算 | 排放、能源、水和质量换算因子须保留来源、版本、适用地理范围、年份及方法。依据具体流 UUID、物理状态、属性和单位核实每项实际交换；无法确认时明确保留未解析身份。 | `ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland` |
| `dq_mass_balance_and_uncertainty` | 田间、取种、调理、分级、包装及储存 | 核对进入量、合格、降级、共产品、废物、样品、水分及未解释物流。报告差额及不确定性，不得静默强制差额为零。 | `mass-balance-identity`; `fao-tree-seed-handling` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 确认最终物种或植物身份、播种用途、批次限定信息、质量属性、单位、含水率或活力基准及声明交付门。最终 TIDAS 过程须以核实的 UUID 替代未解析参考身份。 | `fao-seed-systems`; `ista-international-rules` |
| `validation_scope` | 数据集边界 | 确认数据集为播种用水果种子，不得静默纳入食用水果、大宗水果、幼苗、移栽苗、嫁接植株、下游栽培或交付门后配送。 | `fao-seed-production-manual`; `fao-seed-systems` |
| `validation_route_choice` | 过程图 | 确认所选一年生／多年生及露地／保护地／果园路线，仅凭当前批次证据选择肉质果或干果取种。路线差异须改变拓扑、清单、计算、数据或验证要求，不能只有名称差异。 | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling` |
| `validation_process_map` | 全部过程 | 确认繁殖、收获／采集、适用取种、调理、分级／检验及已纳入的交付准备／储存为独立节点，并有明确产品交接。 | `fao-seed-production-manual`; `fao-tree-seed-handling` |
| `validation_flow_binding` | 全部清单行 | 依据具体流 UUID、物理状态、属性和单位核实每项实际交换；无法确认时明确保留未解析身份。 | `mass-balance-identity` |
| `validation_nutrient_basis` | 养分及土壤排放行 | 确认仅列实际使用产品，保留产品质量、养分基准、施用记录、土壤背景及一个声明的排放方法。不得强制使用所有肥料类型。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_land` | 水和土地行 | 区分灌溉产品投入、自然水取水、工艺水、排水和土地占用，核实水表或面积时间记录并防止重复计算。 | `ipcc-2019-cropland`; `mass-balance-identity` |
| `validation_quality_release` | 合格及参考种子 | 确认身份、等级、物理纯度、发芽率或活力、含水率或顽拗性状态、健康／处理状态、取样方法、检验日期、质量等级及批次放行。 | `ista-international-rules`; `oecd-seed-schemes` |
| `validation_co_product_outputs` | 果实、果浆、果肉及降级种子 | 列举每个预期产出及交接。只有产出功能和接收方有证据时才分配，并区分共产品、残余物和废物。 | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `validation_period_attribution` | 多年生或跨期间路线 | 要求明确期间／阶段边界，将投入和产出关联一个期间，记录建植／更新／终止处理，防止重复归属。 | `iso-14044-2006`; `mass-balance-identity` |
| `validation_reject_rework_paths` | 拒收、降级种子、退回和损失 | 每种拒收状态须有已声明的返工、降级、回收、处理或废弃路径。返工须关联上游节点，不得将其作为合格产出计两次。 | `fao-seed-production-manual`; `mass-balance-identity` |
| `validation_mass_balance` | 全部过程产出 | 按声明含水率基准核对生产、收获、取种、调理、分级、包装及储存平衡，报告未解释差额。 | `mass-balance-identity`; `fao-tree-seed-handling` |
| `validation_storage_and_gate` | 纳入的储存及最终交付门 | 核实期初期末库存、储存时长、损失或返工、最终含水率／活力状态、包装状态和交付门交接。 | `fao-tree-seed-handling`; `fao-seed-drying-storage-2024` |
| `validation_dataset_disclosure` | 发布数据集画像 | 核实地点、期间、路线、质量属性、证据等级、估计、因子及未解析身份的披露。依据具体流 UUID、物理状态、属性和单位核实每项实际交换；无法确认时明确保留未解析身份。 | `ista-international-rules`; `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 水果种子生产和调理的前景次级数据集；全部身份及交换解析后，可投影为 TIDAS `flow`、`process`、`lifecyclemodel` 及数据集包。 |
| downstream_use | 种子批次和交付门限定信息匹配时，可作为农业、园艺、林业、苗圃及产品系统模型中的种子生产和种子交付门数据集。 |
| allowed_use | 保留声明功能单位、路线、交付门、质量属性、含水率基准、期间、分配及有记录的共产品和拒收物处理的比较或归因建模。 |
| excluded_use | 不得作为通用水果作物、水果加工、移栽苗、苗圃植物或下游栽培数据集；无证据时不得将路线特定因子或质量阈值用于其他物种。 |
| required_metadata | 参考流；CPC 范围；作物或植物身份；品种／品系或杂交状态；种子等级；地理范围；生产单元类型；一年生／多年生期间；取种路线；含水率或顽拗性状态；纯度；发芽率／活力及检验方法；处理；包装；储存；交付门；具体流身份核验；UUID 状态；采集覆盖；分配；DQR |
| required_quality_disclosure | 批次和生产单元覆盖、时间及期间覆盖、计量器具和测量方法、质量放行证据、计算和排放方法、具体流身份核验、未解析身份、固定 UUID 解析状态、排除项、质量平衡、共产品决定、拒收物去向、不确定性及数据质量限制 |
| update_trigger | 作物或植物范围、种子等级、生产路线、取种技术、处理、包装、储存、交付门或具体流身份核验发生重大变化 |

## 11. 数据来源
### 外部来源

| `source_id` | 用途与参考 |
| --- | --- |
| `fao-seed-production-manual` | 种子企业、收获、批次和生产数据方法；FAO, *Seed enterprises enhancement and development project in Sierra Leone*。 https://coin.fao.org/coin-static/cms/media/16/13666518481740/seed_enterprises_enhacement_and_development_project_in_sierra_leone_mission_1_report_.pdf |
| `fao-seed-systems` | 种子系统、种源和供应链边界；FAO, *What are seed systems?* https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/tools-guidelines/what-are-seed-systems/en/ |
| `fao-local-vegetable-seed-production` | 多汁果实种子采集、清洗和家庭/地方生产实例；FAO, *Home Garden Technology Leaflet 17*。 https://www.fao.org/4/X3996E/x3996e41.htm |
| `fao-tree-seed-handling` | 果树/树木种子的收集、处理、干燥和储存；FAO, *Collection, storage and treatment of tree seeds*。 https://www.fao.org/4/ad226e/AD226E05.htm |
| `fao-seed-drying-storage-2024` | 种子干燥、含水率、储存和能耗采集；LiveSeeding, *Handbook on Seed Drying and Storage* (2024)。 https://orgprints.org/id/eprint/52128/2/LiveSeeding_HandBook_SeedDryingAndStorage_050524_final-EN.pdf |
| `oecd-seed-schemes` | 品种身份、种子等级和认证/批次控制背景；OECD Seed Schemes。 https://www.oecd.org/en/topics/seeds.html |
| `ista-international-rules` | 种子抽样、检验、纯度和发芽率报告背景；ISTA, *International Rules for Seed Testing*。 https://www.seedtest.org/en/publications/international-rules-seed-testing.html |
| `iso-14044-2006` | 生命周期清单、功能单位、分配和质量要求的方法背景；ISO 14044:2006。 https://www.iso.org/standard/38498.html |
| `ipcc-2019-cropland` | 农田管理、作物残体和土地相关排放因子背景；IPCC 2019 Refinement, Volume 4, Chapter 5。 https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf |
| `ipcc-2019-managed-soils-n2o` | 管理土壤 N₂O、氨和硝酸盐损失因子背景；IPCC 2019 Refinement, Volume 4, Chapter 11。 https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf |
| `mass-balance-identity` | 过程入口、输出、损失和共产品的质量守恒检查；内部方法恒等式，不代表外部数据库身份。 |

本中文文件是 `pcr.en-US.md` 的对齐翻译。

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
