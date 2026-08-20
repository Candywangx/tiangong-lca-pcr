---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.animal-fats-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-ester-b1928cc5
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 部分或全部氢化、酯交换、再酯化或反油酸化的动物脂肪及其馏分，不论是否精炼，但未经进一步加工

## 1. 范围与适用性

本 PCR 适用于大宗动物脂肪或动物脂肪馏分的前景数据包，其甘油三酯或脂肪酸结构已通过部分或完全氢化、化学或酶法酯交换、再酯化、反油酸化，或这些路线的已声明组合而改变。产品可在改性后精炼，但不得属于进一步配制的制剂。

仅当明确声明等级、动物种属或来源脂肪系列、改性路线、适用时的氢化程度、精炼状态、产品规格和司法辖区时，本 PCR 才适用于食品级、饲料级或工业级产品。边界覆盖从合格的已炼制或已精炼动物脂肪投入开始，经路线特定改性、催化剂或试剂分离、可选脱色或脱臭，直至工厂门口大宗产品发运。

本 PCR 不涵盖未改性的已炼制动物脂肪、植物或微生物脂肪、复配起酥油、人造黄油、涂抹脂、乳液、成品食品、肥皂、表面活性剂、润滑剂、水解制脂肪酸、生物柴油或加氢燃料，也不涵盖包装制造、分销、使用或寿命终止。屠宰、炼制及此前精炼属于上游；仅当这些活动位于同一受控设施且作为独立单元过程明确列入清单时，方可纳入前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.animal-fats-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-ester-b1928cc5` |
| classification_refs | CPC 3.0：21590（精确映射语境；分类不拥有 PCR 身份） |
| covered_products | 经部分或完全氢化、化学或酶法酯交换、再酯化、反油酸化，或上述路线已声明组合改性的散装动物脂肪及其馏分；未经进一步配制的精炼形态仍在范围内。 |
| excluded_products | 未改性的已炼制脂肪；植物或微生物脂肪；混合或复配起酥油、人造黄油、涂抹脂、乳液、成品食品、肥皂、表面活性剂、润滑剂、脂肪酸产品、生物柴油、加氢燃料，以及动物来源或改性路线无证据支持的产品。 |
| representative_product | 生产设施门口的散装改性动物脂肪，以符合已声明规格的氢化或酯交换已炼制动物脂肪为代表。 |
| production_route | 接收并调理合格的已炼制或已精炼动物脂肪；实施一种或多种已声明的氢化、酯交换、再酯化或反油酸化步骤；分离催化剂或试剂；可选脱色、脱臭、精滤和散装发运。 |
| market_state | 工厂门口的大宗液态、半固态、固态、片状或块状产品；声明食品级、饲料级或工业级及交付温度。除非明确列入清单，否则不含包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采用已声明范围内路线改性并在生产设施门口交付的成品散装动物脂肪或馏分。 |
| How much | 1 kg 合格产品净质量，不含包装。 |
| How well | 满足已声明的来源动物、改性路线与程度、精炼状态、等级、水分和杂质、适用时的脂肪酸或固体脂肪特征，以及适用法规或客户限值。 |
| How long or cycle | 一个具有代表性的生产批次或已声明报告期，归一化至 1 kg 合格产出。 |
| reference_flow_link | `finishing_and_dispatch` 的参考产品输出；内部中间流不构成额外功能单位。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 部分或全部氢化、酯间化、再酯化或氨化的动物脂肪及其馏分，不论是否精制，但未经进一步制备 `d4cec444-0873-445d-b0ef-04e9c796eced` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 来源动物种属或来源脂肪系列；来源脂肪的炼制和精炼状态；改性路线或路线顺序；适用时部分或完全氢化及其程度；化学或酶法酯交换；适用时再酯化或反油酸化细节；食品级、饲料级或工业级；适用时脂肪酸、反式脂肪酸、碘值、固体脂肪、熔融、水分、杂质及残余催化剂规格；地理、技术、报告期、交付形态和温度、分配方法、所含后处理及包装纳入状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。不适用的限定信息必须说明“不适用”并给出理由；静默遗漏会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 最终参考产品及基于质量的物料流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明交付状态报告净质量。投影至 1 kg 参考流前，将所有前景数量归一化至 1,000 kg；除非包装明确在范围内，否则排除包装质量。 |
| `energy_conversion` | 电力和过程热 | 所选 Tiangong 流携带的 Energy 属性 | MJ | 保留计量的 kWh 及燃料或蒸汽记录。电力按 1 kWh = 3.6 MJ 换算；蒸汽须保留压力、温度、冷凝水回流和所用焓值方法，不得把蒸汽质量直接视为能量。 |
| `water_state` | 工艺水和废水 | 所选 Tiangong 流携带的 Mass 或 Volume | kg 或 m3 | 无记录的密度和状态时，不得混合质量与体积。区分一次通过、循环、蒸发、进入产品及排放的水。 |
| `chemical_basis` | 催化剂、酶、试剂、助滤剂和脱色土 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录到货产品质量及活性含量或负载型催化剂组成。分别报告新鲜补充量、回收量、再用次数和最终去向。 |
| `product_quality_basis` | 最终产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品数量为合格净产出。规格外物料、返工、库存变化及内部循环保持可见，不得重复计入参考产品。 |

## 5. 系统边界

前景边界始于改性设施接收合格的已炼制或已精炼动物脂肪，终止于同一设施门口可发运的合格散装改性动物脂肪。边界包括接收、必要时的加热储存、调理、已声明的改性反应、催化剂或试剂回收、过滤、可选脱色或脱臭、产品整理、直接受控公用工程、工艺水、废水、残余物、尾气和无组织排放。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_included_operations` | 前景设施 | 纳入从合格动物脂肪原料接收到合格散装产品的所有直接受控操作，包括路线特定反应、分离、过滤、可选脱色或脱臭，以及直接受控的废物和废水处理。 | `ec-jrc-fdm-bref-2019` |
| `boundary_upstream_inputs` | 外购投入 | 将已炼制或已精炼来源脂肪、电力、蒸汽或热、氢、催化剂、酶、试剂、水、助滤剂及处理服务连接至具有代表性的上游数据集；不得因其为外购而赋予零上游负荷。 | `eu-environmental-footprint-2021-2279` |
| `boundary_recursive_inputs` | 同类别返工料或外购改性脂肪 | 将同类别返工料或外购改性动物脂肪记录为明确的产品投入。内部循环留在前景质量平衡内；外购同类别物料必须关联上游数据集，且不得无终止条件地递归调用本 PCR。 | `eu-environmental-footprint-2021-2279` |
| `boundary_source_fat` | 屠宰和炼制 | 除非处于同一数据控制边界并单独列清单，否则屠宰、炼制和此前精炼为上游。食品级来源脂肪应保留合格动物来源及卫生原料处理证据。 | `codex-cxs-211-1999`；`eu-regulation-853-2004` |
| `boundary_exclusions` | 下游生命周期 | 除非研究明确扩展边界并将新增部分与门到门 PCR 结果分开报告，否则排除包装、分销、使用、进一步配制及寿命终止。 | `eu-environmental-footprint-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格的已炼制或已精炼动物脂肪在改性设施门口接收，并声明来源种属或脂肪系列、此前炼制与精炼状态、等级、数量、质量规格及供应商批次。 |
| starting_condition_role | 前景改性系统的上游产品投入；默认不是无负荷废物。 |
| product_classification_scope | 经覆盖路线改性的动物脂肪及其馏分语义类别；CPC 3.0 代码 21590 仅为映射语境。 |
| recursive_input_rule | 内部返工在前景平衡内跟踪。外购改性动物脂肪作为明确同类别产品投入，仅连接一次上游数据集；不得静默递归或无负荷替代。 |
| upstream_dataset_requirement | 来源动物脂肪、外购能源、氢、催化剂、酶、试剂、水、助滤剂、研究纳入的运输及场外处理均采用具有代表性的上游数据集，并记录地理、技术、时期、等级和分配兼容性。 |
| disclosure | 声明来源动物、原料路线、等级、改性路线顺序、反应和后处理技术、上游边界、分配决定、内部循环、共产品、废物去向、所含公用工程、包装状态、司法辖区、报告期及数据缺口。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt_conditioning` | 原料接收与调理 | required | 从接收合格来源脂肪起始终纳入；零活动调理须明确声明。 | 前景原料接收、储存、澄清、干燥和制备 | 1,000 kg 合格最终产品 |
| `hydrogenation` | 催化氢化 | conditional | 产品任何部分经部分或完全氢化时纳入。 | 前景路线特定反应和催化剂分离 | 1,000 kg 氢化中间体 |
| `non_hydrogenation_modification` | 酯交换、再酯化或反油酸化 | conditional | 纳入每一适用的化学、酶法、再酯化或反油酸化路线；重大差异路线拆为子单元过程。 | 前景路线特定改性 | 1,000 kg 路线改性中间体 |
| `finishing_and_dispatch` | 后处理与散装发运 | required | 始终纳入产品回收和合格放行；声明可选过滤、脱色、脱臭或精滤。 | 前景催化剂或试剂去除、精炼、整理及参考产品放行 | 1,000 kg 合格最终产品 |

下列清单卡片的 Tiangong 流名称、UUID、机器枚举、过程 ID、行 ID、来源 ID、数量和范围与规范英文稿一致。每项均按所列采集协议获得；`reasoned_estimate` 范围只用于临时编制或 QA 筛查，不构成数据证据。

### 过程：原料接收与调理（`feedstock_receipt_conditioning`）

#### 输入

##### 产品流

###### 合格的已炼制或已精炼动物脂肪原料（`source_animal_fat`）

按动物种属、炼制路线、精炼状态、等级、供应商或分配差异分别记录批次；有更具体身份时应替换通用候选流。

- 选定流：其他动物脂肪，渲染 `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测接收净质量加期初库存减期末库存，排除转出产品系统的拒收批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 来源：`codex-cxs-211-1999`；`eu-regulation-853-2004`
- 数量范围：临时来源脂肪需求量
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1000
  - 上限：1150
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 调理电力（`conditioning_electricity`）

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分表电量或基于设施电表的有依据分配；保留原始 kWh 并换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 数量范围：临时调理电力筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 调理工艺水（`conditioning_water`）

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进水或罐体液位平衡，扣除有记录的循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 数量范围：临时调理用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

不规定默认基本流。所有实测或依法应报告的直接排放必须使用正确受纳环境和已确认的 Tiangong 基本流 UUID。

#### 输出

##### 产品流

###### 调理后动物脂肪中间体（`conditioned_animal_fat`）

- 选定流：其他动物脂肪，渲染 `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：至下一前景过程的实测转移量，并与投入、残余物、废水及库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feedstock_records`
- 数量范围：临时调理中间体筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：850
  - 上限：1150
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 调理残余物（`conditioning_residues`）

- 选定流：路线特定调理残余物；Tiangong UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测发运量、容器质量差或有记录支持的质量平衡残差
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 数量范围：临时调理残余物筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 调理废水（`conditioning_wastewater`）

- 选定流：废水 `bc2cd1d5-69d5-42d7-818f-38a69ebb18ef`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量排放或有记录的水量平衡，按场内和场外处理路线区分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 数量范围：临时调理废水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：m3
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：催化氢化（`hydrogenation`）

#### 输入

##### 产品流

###### 调理后动物脂肪进料（`hydrogenation_fat_feed`）

- 选定流：其他动物脂肪，渲染 `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经罐体库存变化调整的实测批次投料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 氢化中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogenation_records`

###### 外购氢（`hydrogen_input`）

按气表或钢瓶和储罐库存记录氢供应；选择与实际生产路线和交付状态一致的 Tiangong 产品流 UUID，不得将已确认的煤制甲醇制乙烯路线 Hydrogen 流当作通用默认值。

- 选定流：Hydrogen；路线适配的 Tiangong 产品流 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：期初库存加采购量，减期末库存、回收氢和有记录的转出量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 氢化中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogenation_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时氢耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg
  - 基准：每 1,000 kg 氢化中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 氢化催化剂（`hydrogenation_catalyst`）

- 选定流：镍加氢催化剂 `33ee71d1-f1f9-4a85-857e-d3e009330523`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：新鲜催化剂投料减回收未用催化剂，并单独报告重复使用次数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 氢化中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogenation_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：官方技术催化剂 QA 上限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：来源所述镍催化技术每 1,000 kg 氢化脂肪产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ec-jrc-fdm-bref-2019`

###### 氢化电力（`hydrogenation_electricity`）

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分表 kWh 或基于设施电表的有依据分配，换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 氢化中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogenation_records`
- 数量范围：临时氢化电力筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kWh
  - 基准：每 1,000 kg 氢化中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 氢化蒸汽（`hydrogenation_steam`）

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量蒸汽质量并修正冷凝水回流；同时按已声明蒸汽状态计算有用热
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 氢化中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogenation_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时氢化蒸汽筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 氢化中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 氢化动物脂肪中间体（`hydrogenated_intermediate`）

- 选定流：部分或全部氢化、酯间化、再酯化或氨化的动物脂肪及其馏分，不论是否精制，但未经进一步制备 `d4cec444-0873-445d-b0ef-04e9c796eced`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转至后处理的实测中间体，扣除滞留催化剂、过滤残余物、排放物和库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 氢化中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hydrogenation_records`
- 数量范围：临时氢化收率筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：900
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 调理后动物脂肪进料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 废氢化催化剂（`spent_hydrogenation_catalyst`）

- 选定流：催化剂废料 `234379c3-585e-479e-8512-d647e4be69a2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测回收或废弃催化剂加过滤介质中滞留催化剂，并与新鲜及复用催化剂核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 氢化中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogenation_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：催化剂回收与损失 QA 上限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：来源所述镍催化技术每 1,000 kg 氢化中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ec-jrc-fdm-bref-2019`

##### 基本流

###### 排入空气的无组织或放空氢（`hydrogen_to_air`）

- 选定流：氢 `08a91e70-3ddc-11dd-949c-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测放空量，或扣除消耗、回收、库存变化和转移后的氢平衡残差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 氢化中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hydrogenation_records`
- 数量范围：临时氢释放筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg
  - 基准：每 1,000 kg 氢化中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：酯交换、再酯化或反油酸化（`non_hydrogenation_modification`）

#### 输入

##### 产品流

###### 动物脂肪进料及相容共进料（`non_hydrogenation_fat_feed`）

- 选定流：主动物脂肪进料使用 其他动物脂肪，渲染 `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`；共进料 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经库存和内部循环调整的实测批次投料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 路线改性中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_non_hydrogenation_records`
- 数量范围：临时脂肪总进料需求量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1150
  - 单位：kg
  - 基准：每 1,000 kg 路线改性中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 路线催化剂、酶或试剂（`route_reagent`）

- 选定流：路线特定催化剂、酶或试剂；Tiangong UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测新鲜投料减回收可复用物料，并报告活性含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 路线改性中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_non_hydrogenation_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时路线试剂筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 路线改性中间体；不含另行记录的脂肪或脂肪酸共进料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 改性电力（`non_hydrogenation_electricity`）

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分表 kWh 或基于设施电表的有依据分配，换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 路线改性中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_non_hydrogenation_records`
- 数量范围：临时改性电力筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 路线改性中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 改性蒸汽（`non_hydrogenation_steam`）

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量蒸汽质量并修正冷凝水回流，使用已声明方法换算有用热
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 路线改性中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_non_hydrogenation_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时改性蒸汽筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 路线改性中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 改性工艺水（`non_hydrogenation_water`）

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进水或批次投水减有记录的循环及回收水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 路线改性中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_non_hydrogenation_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时改性用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1700
  - 单位：kg
  - 基准：每 1,000 kg 路线改性中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 路线改性动物脂肪中间体（`non_hydrogenation_intermediate`）

- 选定流：部分或全部氢化、酯间化、再酯化或氨化的动物脂肪及其馏分，不论是否精制，但未经进一步制备 `d4cec444-0873-445d-b0ef-04e9c796eced`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转至后处理的实测中间体，并与残余物、废水、回收物料及库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 路线改性中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_non_hydrogenation_records`
- 数量范围：临时改性收率筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：900
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 脂肪及脂肪酸总进料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 废路线催化剂或残余物（`spent_route_material`）

- 选定流：路线特定废物料；Tiangong UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测发运量或容器平衡，并与新鲜及回收路线物料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 路线改性中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_non_hydrogenation_records`
- 数量范围：临时废路线物料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每 1,000 kg 路线改性中间体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 改性废水（`non_hydrogenation_wastewater`）

- 选定流：废水 `bc2cd1d5-69d5-42d7-818f-38a69ebb18ef`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量排放或有记录的水量平衡，并记录处理路线和关键污染物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 路线改性中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_non_hydrogenation_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：水环真空废水 QA 上限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.7
  - 单位：m3
  - 基准：仅在有记录的水环真空技术可比时，每 1,000 kg 未精炼油脂
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ec-jrc-fdm-bref-2019`

##### 基本流

### 过程：后处理与散装发运（`finishing_and_dispatch`）

#### 输入

##### 产品流

###### 改性动物脂肪中间体（`finishing_intermediate`）

- 选定流：部分或全部氢化、酯间化、再酯化或氨化的动物脂肪及其馏分，不论是否精制，但未经进一步制备 `d4cec444-0873-445d-b0ef-04e9c796eced`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经内部循环和罐体库存变化调整的实测后处理转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 数量范围：临时后处理投入需求量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1150
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 脱色土（`bleaching_earth`）

- 选定流：脱色土 `68d5c9c4-5b4b-419d-a1ca-245d8673eda0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发至批次的新鲜物料减未使用退回物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时脱色土筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 后处理电力（`finishing_electricity`）

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分表 kWh 或基于设施电表的有依据分配，换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 数量范围：临时后处理电力筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kWh
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 后处理蒸汽（`finishing_steam`）

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量蒸汽质量并修正冷凝水回流，使用已声明方法换算有用热
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时后处理蒸汽筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格改性动物脂肪（`reference_product`）

- 选定流：部分或全部氢化、酯间化、再酯化或氨化的动物脂肪及其馏分，不论是否精制，但未经进一步制备 `d4cec444-0873-445d-b0ef-04e9c796eced`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次归一化后恰为 1,000 kg 合格净产品，再投影至 PCR 的 1 kg 参考流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`unsd-cpc-3-0-21590`
- 数量范围：参考流归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集数据计算（`calculated_from_collection`）

###### 回收脂肪馏出物或其他共产品（`recovered_fat_coproduct`）

- 选定流：路线特定回收共产品；Tiangong UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经库存变化调整的实测转移或发运量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 数量范围：临时回收共产品筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 废过滤介质和脱色土（`spent_filter_media`）

- 选定流：废过滤介质或脱色土；Tiangong UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测发运量或容器平衡，包含经分析或运行确定的滞留油和催化剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：临时废过滤介质筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg
  - 基准：每 1,000 kg 合格最终产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 后处理废水（`finishing_wastewater`）

- 选定流：废水 `bc2cd1d5-69d5-42d7-818f-38a69ebb18ef`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量排放或有记录的水量平衡，按处理路线区分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格最终产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`ec-jrc-fdm-bref-2019`
- 数量范围：水环真空废水 QA 上限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.7
  - 单位：m3
  - 基准：仅在有记录的水环真空技术可比时，每 1,000 kg 未精炼油脂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ec-jrc-fdm-bref-2019`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 可分过程、批次、仪表和产品线 | 通过拆分单元过程并采集可直接归属本产品的物料、能量、排放和废物记录来避免分配。 | `eu-environmental-footprint-2021-2279` |
| `allocation_system_expansion` | 具有可论证替代功能的多功能输出 | 无法拆分时，在分摊负荷前评估系统扩展，并记录被替代功能和数据集。 | `eu-environmental-footprint-2021-2279` |
| `allocation_physical` | 其余共享投入和产出 | 无法避免分配时，采用反映所提供功能的相关可量化物理关系；仅在质量确实相关时使用简单质量分配。 | `eu-environmental-footprint-2021-2279` |
| `allocation_other_relationship` | 无可论证物理关系的情形 | 仅在说明拆分、系统扩展和物理分配均不适用后，才采用经济价值等其他关系；价格必须对应过程阶段和报告期。 | `eu-environmental-footprint-2021-2279` |
| `allocation_internal_recycle` | 内部返工、回收催化剂、回收脂肪及溶剂或水循环 | 内部循环留在前景平衡内，仅计算跨边界的净外购投入和净输出；不得为内部循环分配避免负荷。 | `eu-environmental-footprint-2021-2279` |
| `allocation_residue_status` | 回收脂肪、馏出物、废催化剂、过滤介质及其他残余物 | 根据有记录的去向和市场功能，将输出分类为共产品、可回收物或废物；披露所用分配或处理方法，并在选择重大时进行敏感性测试。 | `eu-environmental-footprint-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_records` | `feedstock_receipt_conditioning` | 来源脂肪、公用工程、调理中间体、残余物、废水 | 地磅、罐体、仪表、批次、供应商、实验室和废物发运记录 | 批次 ID；种属/来源脂肪系列；供应商；炼制/精炼状态；等级；期初/期末库存；毛重/皮重/净重；水分；杂质；电力；水；调理产出；残余物；废水；时间戳 | 校准秤和罐体、公用工程仪表、供应商文件、实验室结果及签字废物记录 | kg；kWh；MJ；m3 | 每批原料和生产批；公用工程至少每月或每生产周期 | 完整代表性生产周期及已声明报告期 | 前景设施全部接收、储存和调理设备 | 核对库存和批次转移；按合格最终产品质量归一化；不同种属、等级或路线保持分开 | 校准状态；仪表覆盖；供应商追溯；实验室方法；库存核对；缺失数据日志 |
| `cp_hydrogenation_records` | `hydrogenation` | 脂肪进料、氢、催化剂、电力、蒸汽、中间体、废催化剂和放空氢 | 批次表、气表、钢瓶或储罐库存、催化剂领用/退回、公用工程仪表、产品检测、回收和废物记录 | 批次 ID；进料质量和品质；氢期初/采购/期末/回收/放空；催化剂组成和活性含量；新鲜/复用/回收质量；kWh；蒸汽状态和质量；产出质量和品质；废催化剂；时间戳 | 校准质量和气体计量、库存核对、批次控制系统、公用工程仪表、实验室结果及发运记录 | kg；kWh；MJ | 每批，并按月或生产周期核对 | 完整代表性氢化生产周期及报告期 | 全部氢化反应器、气体系统、分离及直接受控公用工程 | 计算净氢耗和催化剂用量；核对质量与氢平衡；按氢化中间体及最终产品归一化 | 仪表校准；气体纯度；催化剂证书；批次谱系；产品分析；平衡残差和调查 |
| `cp_non_hydrogenation_records` | `non_hydrogenation_modification` | 脂肪和共进料、路线试剂、酶或催化剂、公用工程、中间体、残余物、废水 | 批次表、物料领用/退回、公用工程仪表、酶床或反应器日志、实验室、回收及废物记录 | 路线 ID；进料及共进料质量；催化剂/酶/试剂身份、浓度和质量；复用和回收；kWh；蒸汽；水；产出质量和品质；残余物；废水；时间戳 | 校准秤和仪表、批次控制记录、供应商证书、实验室检测及发运记录 | kg；kWh；MJ；m3 | 每批，并按月或生产周期核对 | 完整代表性路线生产周期及报告期 | 前景设施内每条化学或酶法显著不同的路线 | 路线分开；计算净试剂用量和路线收率；按路线产出和最终产品归一化 | 校准；供应商证书；路线条件；适用时酶活；实验室方法；质量平衡残差 |
| `cp_finishing_records` | `finishing_and_dispatch` | 中间体、脱色土、公用工程、参考产品、共产品、过滤介质、废水和品质 | 罐体及批次记录、过滤器和脱臭器日志、物料领用、公用工程仪表、实验室放行、发运及废物记录 | 中间体质量；库存；脱色土或助滤剂质量；kWh；蒸汽状态和质量；废水；冷凝水；过滤残余物；回收馏分；最终产品净质量；等级；路线；品质结果；交付状态；时间戳 | 校准秤、罐体和仪表、过程日志、实验室放行记录、发运文件及签字废物记录 | kg；kWh；MJ；m3 | 每批和每次发运，并按月或生产周期核对 | 完整代表性后处理生产周期及报告期 | 边界内全部后处理、储存、成型和散装发运设备 | 仅合格产出计作参考产品；核对投入、产出、循环、残余物、库存和废水；归一化至 1,000 kg | 校准；批次谱系；实验室放行；发运质量；处理去向；平衡残差和纠正措施 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_batch_normalization` | 所有前景数量 | 每 1,000 kg 归一化数量 = 记录量 ÷ 同一一致期间合格最终产品质量 × 1,000 | 记录量；合格最终产品质量；对齐的时间和批次范围 | 归一化清单量 |  |
| `calc_inventory_change` | 罐体、钢瓶、仓库、催化剂和可复用物料 | 净消耗 = 期初库存 + 采购或接收 - 期末库存 - 已核实转出；边界内内部转移相互抵消 | 期初库存；接收；期末库存；转移 | 跨边界净投入 |  |
| `calc_route_yield` | 每个调理、改性和后处理过程 | 收率 = 合格过程产出 ÷ 相关总进料；返工、共产品、废物、蒸发和库存变化分别报告 | 过程进料；过程产出；返工；共产品；废物；库存变化 | 路线收率和核对质量表 |  |
| `calc_hydrogen_balance` | 氢化 | 消耗或未核算氢 = 期初库存 + 采购 - 期末库存 - 回收氢 - 实测转移 - 实测放空；调查无法解释的残差 | 氢库存；采购；回收；转移；放空测量 | 氢用量、释放和平衡残差 | `ec-jrc-fdm-bref-2019` |
| `calc_shared_utility` | 共享电力、蒸汽、热、水、真空和处理 | 优先直接计量；无法计量时仅按有记录的相关物理驱动因素分配，并报告依据和敏感性 | 设施公用工程总量；直接仪表；运行时间；产量；设备负荷 | 产品归属公用工程量 | `eu-environmental-footprint-2021-2279` |
| `calc_steam_energy` | 蒸汽投入 | 按已声明压力和温度下蒸汽及冷凝水焓计算有用热；不得以蒸汽质量代替能量 | 蒸汽质量；压力；温度；冷凝水状态和回流 | MJ 有用热及保留的蒸汽质量记录 |  |
| `calc_water_balance` | 每个用水过程 | 进水 = 排放废水 + 蒸发 + 产品和残余物含水 + 库存变化 + 有记录损失；循环水单独保留 | 进水；排放；蒸发；产品/残余物含水；库存；循环 | 水量平衡和未解释残差 | `ec-jrc-fdm-bref-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 来源和参考产品 | 保留批次级来源动物或来源脂肪系列、产地、炼制/精炼状态、等级、改性路线顺序及最终产品规格；不得合并重大差异路线而不分别报告。 | 供应商记录；批次谱系；最终证书；`codex-cxs-211-1999`；`unsd-cpc-3-0-21590` |
| `dq_measurement` | 质量、气体、能量、水和品质数据 | 使用经校准或核实的测量系统；记录方法、单位、分辨率、校准状态、缺失值、替代和不确定性。 | 校准证书；仪表台账；实验室方法；`eu-environmental-footprint-2021-2279` |
| `dq_temporal` | 报告期 | 覆盖完整代表性生产周期和已声明报告期；声称年度代表性时，纳入相关运行和停机期或说明排除理由。 | 生产日历；批次清单；仪表覆盖；停机日志 |
| `dq_completeness` | 清单 | 纳入边界内所有环境相关物料、能量、水、废物和基本流；列明每项遗漏及理由，初筛不得使用未披露截断。 | 完整性检查表；质量、氢、能量和水量平衡；`eu-environmental-footprint-2021-2279` |
| `dq_representativeness` | 前景和关联上游数据集 | 评价技术、地理和时间代表性及精度；记录数据集替代及其作为最佳可用匹配的理由。 | 数据质量评价；数据集元数据；`eu-environmental-footprint-2021-2279` |
| `dq_allocation` | 多功能操作 | 保留直接仪表和过程拆分证据，记录完整分配层级、因子、价格或物理关系，并在重大时进行敏感性分析。 | 分配工作表；仪表图；产品和共产品记录；`eu-environmental-footprint-2021-2279` |
| `dq_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 临时范围只作 QA 或编制筛查；落在范围内不等于有证据。发布关键范围须以经审查的前景或外部证据替换。 | 清单审查元数据；前景记录；审查决定 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别和参考流 | 规范 PCR id、参考流 UUID、质量属性 UUID、单位组 UUID、CPC 语境、产品名称和必需限定信息均存在且相互一致。 | `unsd-cpc-3-0-21590` |
| `validate_reference_mass` | 最终数据集 | 恰有一个参考产品归一化为 1 kg 合格净产出；包装、规格外物料、返工和共产品不得计作参考产品。 | `eu-environmental-footprint-2021-2279` |
| `validate_route_processes` | 过程图 | `feedstock_receipt_conditioning` 和 `finishing_and_dispatch` 均存在；每条已声明氢化、酯交换、再酯化或反油酸化路线均有对应过程清单和采集协议。 | `ec-jrc-fdm-bref-2019` |
| `validate_uuid_integrity` | 所有含 UUID 的行 | 每个存储 UUID 均须在不带数据集版本号的情况下确认，且流类型、属性、单位、路线和环境介质与该行匹配。未解析路线特定身份保留为显式阻断项，绝不以语义错误代理替换。 |  |
| `validate_mass_balance` | 每个过程及完整前景 | 投入、产出、废物、基本流释放、循环和库存变化相互核对；每个无法解释残差均量化、调查并披露。 | `eu-environmental-footprint-2021-2279` |
| `validate_hydrogenation` | 氢化路线 | 报告氢供应路线、净用量、放空或无组织释放、催化剂身份、活性含量、复用、回收、废催化剂去向及实际产品改性程度。 | `ec-jrc-fdm-bref-2019` |
| `validate_water_and_waste` | 水、废水、催化剂、过滤介质及残余物 | 进水、循环、排放、处理去向、污染物数据、回收物料及废物状态与水量和质量平衡一致。 | `ec-jrc-fdm-bref-2019` |
| `validate_allocation` | 共享和多功能操作 | 尽可能通过拆分或系统扩展避免分配；任何物理或其他分配均有依据、可复现并披露，重大时包含敏感性分析。 | `eu-environmental-footprint-2021-2279` |
| `validate_grade_and_law` | 食品级、饲料级或工业级产出 | 当前记录支持已声明等级、司法辖区、来源脂肪合格性、品质规格及适用法规或客户限值；本 PCR 不把 Codex 或欧盟示例转为普适限值。 | `codex-cxs-211-1999`；`eu-regulation-853-2004` |
| `validate_data_quality` | 前景和上游数据 | 报告覆盖、校准、技术/地理/时间代表性、精度、替代、缺失数据及所有临时估计。 | `eu-environmental-footprint-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 由经审查前景数据包生成的 `secondary_dataset` 或 `background_dataset`；须声明角色。 |
| downstream_use | 构建与已声明来源、路线、等级、地理、技术和时期匹配的改性动物脂肪前景 `process` 数据集及下游 `lifecyclemodel` 投影。 |
| allowed_use | 当参考流限定信息、边界、分配、上游数据集和数据质量披露与预期研究匹配时，用于范围内散装改性动物脂肪的门到门建模。 |
| excluded_use | 未改性动物脂肪；植物或微生物脂肪；未增加单元过程的屠宰或炼制；进一步配制制剂或食品；生物柴油或燃料；未经代表性审查的另一种属、路线、等级、司法辖区、地理、技术或时期；仅凭本门到门数据集提出从摇篮到坟墓声明。 |
| required_metadata | 规范 PCR id 及发布后的版本；来源种属或来源脂肪系列；来源脂肪路线；改性路线顺序和程度；催化剂、酶或试剂身份；精炼和后处理；等级；产品规格；参考数量和 UUID；地理；技术；报告期；边界；分配；上游数据集；共产品；废物；水；数据源；采集协议；未解析身份；推理估计。 |
| required_quality_disclosure | 测量和校准覆盖；批次及时间覆盖；质量、氢、能量和水量平衡残差；缺失数据；替代；分配因子和敏感性；上游数据集代表性；不确定性；临时范围；法规和产品规格适用性。 |
| update_trigger | 来源种属或原料路线、改性化学或程度、催化剂或酶、过程设备、产品等级或规格、能源或水供应、回收或废物路线、分配、司法辖区要求、报告期代表性、Tiangong 身份或权威证据发生重大变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21590` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0，类别 21590，https://unstats.un.org/unsd/classifications/cpc/version3（检索日期 2026-08-07）；官方结构证据取自 https://unstats.un.org/UNSDWebsite/statcom/session_55/documents/BG-4e-draft-CPC-structure-E.pdf | 分类语境和用于检验、但不拥有语义产品边界的外部类别措辞。 |
| `codex-cxs-211-1999` | 标准（`standard`） | Codex Alimentarius，Standard for Named Animal Fats，CXS 211-1999，https://www.fao.org/input/download/standards/337/CXS_211e_2015.pdf（检索日期 2026-08-07） | 食品级动物脂肪来源身份、合格已炼制脂肪、加工与标签语境及投入品质披露。 |
| `eu-regulation-853-2004` | 标准（`standard`） | Regulation (EC) No 853/2004，Annex III，Section XII，rendered animal fats and greaves，官方合并文本 https://eur-lex.europa.eu/eli/reg/2004/853/2023-02-15/eng（检索日期 2026-08-07） | 食品级原料合格性、卫生运输和储存、炼制与精炼语境及上游证据要求。 |
| `ec-jrc-fdm-bref-2019` | 官方指南（`official_guidance`） | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，JRC118627，2019，https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索日期 2026-08-07） | 油脂过程拆分：氢、镍催化剂、过滤、轻度脱色、脱臭、真空、与酯交换相关的用水、催化剂回收、废水及技术特定 QA 上限。 |
| `eu-environmental-footprint-2021-2279` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods，官方合并文本 https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30（检索日期 2026-08-07） | 功能单位完整性、前景和次级数据、数据质量、截断披露、系统边界及分配层级。 |
