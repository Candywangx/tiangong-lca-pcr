---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-refined
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 精炼棉籽油

## 1. 范围与适用性

本 PCR 适用于以栽培 `Gossypium` 属棉花种子的粗棉籽油为原料生产散装精炼棉籽油的前景数据包。前景边界从炼油厂接收粗棉籽油开始，到合格精炼油进入炼油厂门散装储存为止。化学精炼和物理精炼路线均可适用，但必须声明实际单元操作和投入。仅当产品为满足已声明的低温稳定性或色拉油规范而采用冬化时才纳入冬化。

棉花种植、轧花、棉籽预处理、压榨或溶剂萃取以及粗油生产属于上游，必须链接数据集。包装、配送、零售、烹饪或其他使用和生命末期属于下游。氢化、酯交换、分提、调和、配制或非食用棉籽油不在范围内，除非另建明确的下游过程。本 PCR 不规定缺乏依据的工厂默认性能；清单数量由炼油厂一手记录产生。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-refined |
| classification_refs | CPC 3.0：21682（Cottonseed oil, refined） |
| covered_products | 由栽培 `Gossypium` 属棉花种子制得的散装食用精炼棉籽油；化学或物理精炼；声明条件下的冬化或非冬化产品 |
| excluded_products | 粗棉籽油；棉籽粕；氢化、酯交换、分提、调和、配制或非食用油；未单独建模包装的消费者包装产品 |
| representative_product | 炼油厂门处适合人类食用的精炼棉籽油 |
| production_route | 粗棉籽油接收与储存；路线特定的脱胶与游离脂肪酸去除；脱色与过滤；脱臭；条件性冬化；最终过滤与散装储存 |
| market_state | 炼油厂门散装成品油，并声明精炼路线、冬化状态、添加剂、质量规范、地理位置和报告期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为散装食品配料提供食用植物油功能的精炼棉籽油 |
| How much | 1 kg 合格精炼棉籽油净质量 |
| How well | 源自栽培 `Gossypium` 属棉花种子，适合人类食用，并符合声明的适用产品规范与试验方法 |
| How long or cycle | 在一个已声明的批次、生产周期或连续报告期结束后于炼油厂门交付；货架期和使用不属于该参考功能 |
| reference_flow_link | 通过最终质量放行并转移至厂门储存的散装精炼棉籽油数量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Cottonseed oil, refined `5c448d72-c368-4fd2-a3d0-e1cc73572241` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | `Gossypium` 来源身份；炼油厂地理位置；粗油生产路线和上游数据集；化学或物理精炼路线；冬化状态；散装或包装状态；添加剂或抗氧化剂；声明的产品规范与试验方法；报告期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息时，数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 精炼棉籽油参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告油品净质量，不含运输和储存包装；所有前景数量归一化至 1 kg 或 1,000 kg 已放行参考产品。 |
| `material_mass_basis` | 粗油、水、化学品、残余物、废水和回收共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测质量；以体积为原始记录时，保留温度、密度来源、浓度和体积转质量计算。 |
| `electricity_energy_basis` | 炼油厂使用的外购或自发电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh 或 MJ | 保留电表单位并按 1 kWh = 3.6 MJ 换算；不得把能量属性 UUID 当作 Mass 属性。 |
| `steam_basis` | 加热、真空、汽提或冬化辅助所用蒸汽 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 蒸汽 | 记录蒸汽质量、压力、温度、凝结水回收和产生来源；计算热能时保留焓差方法，避免重复计算锅炉燃料。 |
| `solution_concentration_basis` | 碱、酸、抗氧化剂和其他配制助剂 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 溶液和 kg 活性物质 | 记录供货溶液质量及浓度；计算活性物质质量，但不替代外购溶液清单。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 炼油厂前景 | 纳入粗油接收和储存、实际脱胶/游离脂肪酸去除路线、适用时的水洗与干燥、脱色与过滤、脱臭、条件性冬化、最终过滤、质量控制以及至炼油厂门的散装储存。 | `epa-vegetable-oil-voc-1978`; `fsanz-cot102-2004` |
| `boundary_upstream_link` | 粗棉籽油投入 | 将粗棉籽油保留为可见产品投入，并链接覆盖棉籽生产和油脂提取的独立上游数据集；采用溶剂萃取时，上游数据集必须纳入溶剂补加、回收和排放。 | `us-epa-vegetable-oil-neshap`; `fsanz-cot102-2004` |
| `boundary_route_specific` | 化学和物理精炼 | 仅纳入实际运行路线；除非记录证明两者均发生，不得同时把烧碱中和与物理蒸汽汽提作为强制并行处理。 | `epa-vegetable-oil-voc-1978` |
| `boundary_environmental_exchanges` | 炼油厂运行 | 纳入归属于报告期的场址电力、燃料或蒸汽、工艺与清洗水、化学品与吸附剂、直接大气排放、废水、回收物料和固体残余物。 | `eu-fdm-bref-2019` |
| `boundary_exclusions` | 下游和改性产品 | 除非为研究目标明确添加独立过程，否则排除包装、配送、零售、使用、生命末期、氢化、酯交换、分提、调和和配制。 | `codex-cxs-210-1999` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 粗棉籽油进入炼油厂控制范围，并声明供应商、质量、水分/杂质状态、游离脂肪酸或酸价结果、批次或储罐以及上游数据集引用 |
| starting_condition_role | 外购中间产品和前景精炼原料 |
| product_classification_scope | 精炼棉籽油；CPC 3.0 21682 仅为分类语境，不拥有 canonical identity |
| recursive_input_rule | 前景中对精炼棉籽油返工或调和时，将其记录为独立同类产品投入，声明数量、来源、既有加工和原因；不得并入参考产出或静默递归。 |
| upstream_dataset_requirement | 使用在地理、时间和技术上具有代表性的粗棉籽油数据集，覆盖棉籽负荷、压榨和/或溶剂萃取、粗油得率、棉籽粕与其他共产品以及上游分配。 |
| disclosure | 声明炼油厂地理位置、报告期、粗油来源与上游数据集、精炼路线、冬化状态、公用工程、共产品处理、分配方法、包装排除或纳入、质量规范以及替代背景数据。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cottonseed_oil_refining` | Cottonseed oil refining；Tiangong process `921c799b-2836-454b-8d99-481b33bc504a` | required | 本 PCR 始终要求；各单元操作取决于路线，冬化取决于产品规范 | 将粗棉籽油转化为合格散装精炼棉籽油的前景过程 | 1,000 kg 已放行精炼棉籽油 |

### 过程：棉籽油精炼（`cottonseed_oil_refining`）

#### 输入

##### 产品流

###### 粗棉籽油原料（`crude_cottonseed_oil`）

粗棉籽油作为主要中间投入跨越炼油厂边界。数量来自经校准的接收或转移记录，并与储罐库存核对。

- 选定流：Crude cottonseed oil（精确 Tiangong UUID 未解析；不得替用 cottonseed seed flow `a60671ff-7325-4636-9fba-bcc5f6afaeeb`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至报告期的实测粗油净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fsanz-cot102-2004`
- 数量范围：暂定粗油质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1250
  - 单位：kg 粗油
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺与洗涤水（`process_water`）

脱胶、洗涤、蒸汽系统补水和产品接触清洗用水应记录，不得与废水或凝结水回收相抵消。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于前景过程的实测计量用水，可能时按用途拆分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg 水
  - 基准：每 1,000 kg 已放行精炼棉籽油；不含另计蒸汽质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱胶酸（`degumming_acid`）

仅在实际使用时记录磷酸或其他已声明脱胶助剂；供货浓度和活性酸质量必须保持可区分。

- 选定流：Orthophosphoric Acid `9102d985-3980-4e5d-a870-f5164ff2e977`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 供货产品和 kg 活性酸
- 数量规则：采用酸法脱胶批次的实测采购或投加质量与浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：适用路线每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`epa-vegetable-oil-voc-1978`
- 数量范围：暂定脱胶助剂筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg 供货产品
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 化学中和用氢氧化钠（`sodium_hydroxide`）

碱仅用于化学精炼。没有烧碱中和的物理精炼路线报告为零，并记录路线。

- 选定流：Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 供货溶液和 kg 活性 NaOH
- 数量规则：化学中和的实测溶液投加量与浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：化学精炼路线每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`epa-vegetable-oil-voc-1978`
- 数量范围：暂定用碱筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 供货溶液
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 漂白土（`bleaching_earth`）

脱色所用新鲜活化黏土或等效吸附剂与废吸附剂产出分开记录。

- 选定流：Bleaching earth `7c9494b2-6b2f-496b-b140-acc13c4c90d9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投加到脱色操作的实测吸附剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`epa-vegetable-oil-voc-1978`
- 数量范围：暂定吸附剂用量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 漂白土
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力（`electricity`）

计量电力覆盖泵、混合、离心、过滤、真空辅助、冷却、适用时的冬化以及分配的共享服务。

- 选定流：alternating current, electricity consumption mix, 1-35 kV `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：实测电表消耗量加上有记录的共享电力分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 蒸汽（`steam`）

加热、干燥、真空系统和脱臭用蒸汽按质量记录；仅在前景边界内产汽时链接锅炉燃料。

- 选定流：Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 蒸汽
- 数量规则：实测供应蒸汽；仅当所选蒸汽数据集要求净计量时扣除另行实测的返回凝结水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`epa-vegetable-oil-voc-1978`; `eu-fdm-bref-2019`
- 数量范围：暂定蒸汽用量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg 蒸汽
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

默认不要求废物投入。返工不合格油是同类产品投入，不是匿名废物投入。

##### 基本流

不规定固定数量的基本流投入。场址直接取水和场内燃料资源在直接跨越环境边界而非通过所选产品流数据集时表示。

#### 输出

##### 产品流

###### 精炼棉籽油（`refined_cottonseed_oil`）

放行的散装精炼油是定量参考，必须通过声明的产品规范。

- 选定流：Cottonseed oil, refined `5c448d72-c368-4fd2-a3d0-e1cc73572241`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：最终质量放行后的固定定量参考 1,000 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`codex-cxs-210-1999`
- 数量范围：固定定量参考
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg 已放行精炼棉籽油
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）

###### 回收炼油共产品（`recovered_refinery_coproducts`）

皂脚或酸化油、脱臭馏出物、回收油和冬化硬脂仅在有文件证明功能、数量、去向和正经济价值时作为独立产品输出；否则归入适用废物流。

- 选定流：路线特定的回收炼油共产品（每个声明产出均需精确 Tiangong UUID）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按具名产出和去向记录实测质量；未产生或归为废物时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_residue_records`
- 来源：`eu-pef-method-2021`
- 数量范围：暂定回收产出筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg 回收共产品总量
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废漂白土与过滤残渣（`spent_adsorbent_and_filter_residue`）

废吸附剂、滤饼和精滤残渣按质量、含油量、危险性分类和处理去向记录。

- 选定流：Spent bleaching earth and filter residues（炼油厂特定 Tiangong 废物流 UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测外运质量，仅按有记录的库存变化校正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_residue_records`
- 来源：`epa-vegetable-oil-voc-1978`; `eu-fdm-bref-2019`
- 数量范围：暂定固体残余物筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg 残余物
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 炼油废水（`refinery_wastewater`）

脱胶、中和、水洗、清洗和公用工程废水应声明是在处理前还是处理后记录。不得使用无关 Tiangong 候选 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`。

- 选定流：Edible-oil refinery wastewater（精确 Tiangong 废物流 UUID 未解析）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放质量，或用有记录的密度将计量体积换算为质量，并声明处理阶段与去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_residue_records`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定废水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg 废水
  - 基准：每 1,000 kg 已放行精炼棉籽油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接水气排放（`direct_emissions`）

当场内燃料燃烧、脱臭和真空系统、储罐呼吸、废水处理及制冷剂系统的实测或计算排放跨越环境边界时，应予记录。数据集构建时选择污染物特定 Tiangong 基本流；不得创建通用汇总排放。

- 选定流：根据经核实场址记录选择的污染物特定基本流
- 流属性/单位：污染物特定质量或能量属性 / 兼容单位
- 数量规则：实测连续或定期监测结果、许可清单，或根据采集活动数据和具名因子透明计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已放行精炼棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_records`
- 来源：`eu-fdm-bref-2019`; `us-epa-vegetable-oil-neshap`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 炼油单元操作和专用批次 | 优先通过单元操作、批次、储罐和仪表记录进行细分，将投入、产出、废物和排放直接归属于精炼油路线，从而避免分配。 | `eu-pef-method-2021` |
| `allocation_physical_relation` | 无法细分的共享前景负荷 | 仅按能够反映共享投入或排放成因且有记录的可量化物理关系分配；不得仅因所有产出都以 kg 计量而自动采用质量分配。 | `eu-pef-method-2021` |
| `allocation_economic_fallback` | 缺乏可辩护物理关系的可销售共产品 | 若细分和相关物理关系均不可行，按特定报告期同期厂门价值进行经济分配，并披露价格、币种、平均方法、零价值产出和敏感性。 | `eu-pef-method-2021` |
| `allocation_waste_classification` | 皂脚、酸化油、脱臭馏出物、冬化固体、废白土和残余物 | 仅当功能、正经济价值、质量和去向均有记录时才将产出视为共产品；否则作为废物产出保留处理负荷，在归因型前景数据包中不给予替代产品抵扣。 | `eu-pef-method-2021` |
| `allocation_upstream_separation` | 粗棉籽油投入 | 不在精炼前景中重新分配棉花种植、轧花、提取、棉籽粕或皮棉负荷；保留所链接粗油数据集声明的分配，并报告其方法。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `cottonseed_oil_refining` | 粗棉籽油投入 | 地磅、校准储罐转移、发票与实验室接收记录 | 时间戳；供应商；批次/储罐；毛/净质量；水分/杂质；酸价或 FFA；产地；上游数据集 | 核对接收、转入、转出、期初库存和期末库存 | kg | 每次接收或转移 | 报告期全部前景批次 | 所有纳入的炼油线和储罐 | 净投入 = 接收 + 转入 - 转出 + 期初库存 - 期末库存 | 校准证书；签署接收单；罐容表；实验室结果；库存核对 |
| `cp_additive_records` | `cottonseed_oil_refining` | 酸、碱、漂白土、抗氧化剂及其他助剂 | 批记录、投加仪表、领料记录、供应商规范 | 时间戳；批次；物料身份；Tiangong flow；供货质量；浓度；活性质量；操作 | 按单元操作核对投加和库存变动 | kg 供货产品；kg 活性物质 | 每批或连续投加间隔 | 报告期全部前景批次 | 所有纳入操作和路线 | 按物料与路线求和，再归一化至放行产品 | 校准投加装置；供应商证书；库存核对 |
| `cp_utility_records` | `cottonseed_oil_refining` | 水、电、蒸汽、燃料、冷却和制冷 | 公用工程仪表、锅炉日志、发票、凝结水与制冷剂日志 | 时间戳；仪表；起止读数；单位；生产线；运行时长；蒸汽条件；凝结水返回；分配动因 | 优先专用仪表；记录共享公用工程分配 | kg 水；kWh；kg 蒸汽；MJ 燃料；kg 制冷剂 | 班、日、批次或账单周期 | 有代表性的完整报告期 | 所有纳入操作和共享服务 | 仪表读数差，校正复位，扣除排除用途，归一化至放行产品 | 仪表校准；发票；锅炉日志；分配工作表 |
| `cp_output_and_residue_records` | `cottonseed_oil_refining` | 精炼油、回收产出、废水、废白土、滤饼及其他残余物 | 储罐转移、发运、地磅、废水仪表、联单和库存记录 | 时间戳；批次；产出身份；质量/体积；密度；库存变化；去向；经济价值；废物分类；处理 | 核对全部产出和库存变化，相关时保留湿基和干基 | kg；带密度的 m3；货币/kg | 每次转移或发运 | 报告期全部前景批次 | 所有纳入操作和共享处理 | 产出 = 发运 + 期末库存 - 期初库存；各产出分别保留 | 质量放行；地磅单；废物联单；仪表校准；销售单据 |
| `cp_emissions_records` | `cottonseed_oil_refining` | 直接水气排放 | 连续监测、烟道测试、废水分析、制冷剂日志、燃料记录、许可报告 | 污染物；介质；浓度；流量；时长；活动；因子；方法；检出限；处理状态 | 积分监测结果，或按采集活动数据和具名因子透明计算 | 污染物特定 kg 或 MJ | 监测或许可规定频次 | 报告期全部运行和异常时段 | 所有纳入排放源和处理系统 | 按污染物与介质汇总，再归一化至放行产品 | 认可实验室报告；仪器 QA；许可报送；因子引用 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference_output` | 所有前景行 | 归一化数量 = 报告期数量 / 已放行精炼油质量 × 1,000 kg | 经核对的行数量；已放行参考产品质量 | 每 1,000 kg 精炼棉籽油的数量 |  |
| `active_substance_mass` | 酸、碱、抗氧化剂和配制助剂 | 活性质量 = 供货溶液质量 × 质量分数浓度；同时保留供货质量和活性质量 | 供货质量；浓度证书或实测浓度 | kg 供货产品和 kg 活性物质 |  |
| `water_volume_to_mass` | 按体积记录的水和废水 | 质量 = 实测体积 × 声明温度下有记录的密度；盐度或含油量使假设显著时，不得假定 1,000 kg/m3 | 体积；密度；温度 | kg 水或废水 | `eu-fdm-bref-2019` |
| `electricity_conversion` | 电力记录 | MJ = kWh × 3.6；保留原始电表记录和换算方向 | kWh | MJ |  |
| `steam_thermal_energy` | 以能量报告的蒸汽 | 热能 = 蒸汽质量 ×（供应比焓 - 返回凝结水比焓），采用声明的压力和温度 | kg 蒸汽；供应/返回条件；焓值来源 | MJ 有用蒸汽热 |  |
| `foreground_mass_balance` | 炼油报告期 | 比较粗油、化学品和水投入与精炼油、回收产品、残余物、废水、直接排放和库存变化；调查而非强制闭合无法解释的差异。 | 全部带质量投入、产出和库存变化 | 有记录的质量平衡差异和解释 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 匹配产品名称、CPC 语境、`Gossypium` 来源、Tiangong 参考流 UUID、精炼路线、冬化状态和质量规范。 | 质量放行；供应商和产品规范；Tiangong 身份查询 |
| `dq_temporal` | 前景报告期 | 覆盖有代表性的连续期间或完整生产周期，包括正常运行、清洗、开停车和有记录的异常排除。 | 生产日历；批次登记；仪表覆盖；排除日志 |
| `dq_completeness` | 前景清单 | 核对粗油、放行油、回收产出、固体残余物、废水、公用工程、化学品、直接排放和库存变化；披露排除流及其重要性。 | 质量平衡；公用工程平衡；废物台账；完整性清单 |
| `dq_quality_specification` | 已放行精炼油 | 报告适用规范和方法。声明以 CXS 210-1999 为依据时，至少纳入适用的精炼油酸价、过氧化值、挥发性物质、不溶性杂质、皂、铁、铜检查及棉籽油身份试验。 | 实验室证书；`codex-cxs-210-1999` |
| `dq_geography_technology` | 背景链接和共享服务 | 使用地理和技术有代表性的数据集；记录粗油、电力、蒸汽、化学品、废水处理或废物处理的任何代理。 | 数据集元数据；供应商来源；替代声明 |
| `dq_uncertainty` | 估算、分配或换算值 | 标记实测、计算、分配和估算值；保留浓度、密度、分配和因子不确定性，并对重要选择进行敏感性测试。 | 计算工作簿；分配工作表；不确定性记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 前景数据包 | 定量参考严格为 1 kg 或其明确倍数的散装 Cottonseed oil, refined `5c448d72-c368-4fd2-a3d0-e1cc73572241`，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 中的 kg。 |  |
| `validate_product_scope` | 参考产品 | 产品是源自 `Gossypium` 的精炼棉籽油；不得以该参考流静默表示粗油、氢化、酯交换、分提、调和、配制、非食用或包装产品。 | `codex-cxs-210-1999` |
| `validate_route_logic` | 炼油过程 | 每个声明单元操作都有匹配投入/产出记录；化学和物理精炼不重复计算，冬化仅在声明时纳入。 | `epa-vegetable-oil-voc-1978`; `fsanz-cot102-2004` |
| `validate_upstream_link` | 粗油投入 | 链接独立的粗棉籽油上游数据集并披露提取路线和分配；拒绝以 cottonseed seed flow `a60671ff-7325-4636-9fba-bcc5f6afaeeb` 代替粗油。 | `us-epa-vegetable-oil-neshap` |
| `validate_quality_release` | 精炼油产出 | 产出具有按声明规范出具的实验室放行。使用 CXS 210-1999 时，按声明的采样和分析方法核验适用精炼油质量限值及棉籽油身份规定。 | `codex-cxs-210-1999` |
| `validate_inventory_completeness` | 前景报告期 | 运行路线要求的全部物料、公用工程、产品、共产品、废物、废水、直接排放和库存变化记录均存在，或有证据明确为零/不适用。 | `eu-fdm-bref-2019` |
| `validate_mass_balance` | 带质量清单 | 计算并解释前景质量平衡差异；不得为强制闭合而篡改数值，湿基/干基和库存变化保持一致。 |  |
| `validate_allocation` | 共享负荷和回收产出 | 先尝试细分；任何物理或经济分配均有理由、采用报告期证据、对被分配负荷合计为 100%，并披露敏感性。 | `eu-pef-method-2021` |
| `validate_uuid_specificity` | 清单身份 | 拒绝通用或语义错误 UUID；尤其不得以棉籽种子流表示粗油，也不得以电解锰渣废水流表示炼油废水。 |  |
| `validate_provisional_ranges` | 候选阶段 QA 范围 | 推理估算范围仅为筛查标志；前景值超出范围时触发复核而非自动拒绝，发布前须完成审查接受或替换为更强证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景炼油数据包，经审查后可支持发布单元过程 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 链接有代表性的粗棉籽油数据集，并在散装精炼棉籽油产品系统中使用该炼油过程 |
| allowed_use | 上游和任何新增下游模块均明确且兼容时的门到门炼油建模和从摇篮到厂门研究 |
| excluded_use | 在规范、路线、地理、时间、分配和包装边界不等同情况下的比较声明；直接表示粗油、改性、调和、配制、包装或非食用油 |
| required_metadata | PCR id/version；参考流 UUID；炼油厂地理位置和期间；粗油来源和上游数据集；路线；冬化；规范与试验；公用工程；共产品和废物；分配；背景替代；包装边界 |
| required_quality_disclosure | 测量覆盖、校准、质量平衡差异、数据缺口、估算、分配敏感性、代理数据集、质量试验结果和未解析 UUID |
| update_trigger | 粗油来源、精炼路线、冬化、公用工程系统、得率或损失、共产品市场、废物处理、地理、产品规范或报告期发生实质变化；或可获得未解析 Tiangong 身份的精确记录 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | standard | Codex Alimentarius，*Standard for Named Vegetable Oils*，CXS 210-1999，当前重排版本纳入截至 2024 年的修订，https://workspace.fao.org/sites/codex/Standards/CXS%20210-1999/CXS_210e.pdf（检索于 2026-08-10） | 棉籽油身份、食用产品范围、质量与组成检查、采样/分析链接 |
| `fsanz-cot102-2004` | official_guidance | Food Standards Australia New Zealand，*Final Assessment Report, Application A509: Food derived from insect-protected cotton line COT102*，2004-08-04，https://www.fao.org/fileadmin/user_upload/gmfp/docs/1_A509_GM_Cotton_FAR_Final.pdf（检索于 2026-08-10） | 棉籽特定精炼证据：去除棉酚，以及漂白/脱臭降低环丙烯脂肪酸 |
| `epa-vegetable-oil-voc-1978` | official_guidance | U.S. EPA，*Control of Volatile Organic Emissions from Manufacture of Vegetable Oils*，EPA-450/2-78-035，1978，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9102156N.TXT（检索于 2026-08-10） | 精炼工序分解、碱中和、吸附脱色、真空蒸汽脱臭和排放识别 |
| `us-epa-vegetable-oil-neshap` | official_guidance | U.S. EPA，*Solvent Extraction for Vegetable Oil Production: National Emission Standards for Hazardous Air Pollutants (NESHAP)*，https://www.epa.gov/stationary-sources-air-pollution/solvent-extraction-vegetable-oil-production-national-emission（检索于 2026-08-10） | 上游棉籽溶剂萃取边界、溶剂回收和己烷排放完整性 |
| `eu-fdm-bref-2019` | official_guidance | European Commission JRC，*Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries*，2019，DOI 10.2760/243911，https://doi.org/10.2760/243911（检索于 2026-08-10） | 植物油精炼环境范围；能源、水、废水、空气排放、资源效率、监测和数据质量重点 |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279，Environmental Footprint 方法，经勘误整合文本，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279R(01)（检索于 2026-08-10） | 分配层级：细分/系统扩展、相关物理关系、再到包括经济分配在内的有理由其他关系 |
