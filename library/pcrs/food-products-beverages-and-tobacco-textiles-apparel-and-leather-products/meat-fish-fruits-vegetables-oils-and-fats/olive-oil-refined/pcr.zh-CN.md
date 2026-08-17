---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.olive-oil-refined
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 精炼橄榄油

## 1. 范围与适用性

本 PCR 规定通过不改变初始甘油酯结构的精炼方法，以初榨橄榄油为原料生产精炼橄榄油时的前景数据生产要求。范围包括待精炼油的接收、已声明的化学或物理精炼路线、脱色与过滤、脱臭、成品油储存，以及由报告设施运营时对直接产生的废物和废水进行的场内处理。

默认报告边界为门到门：从待精炼油在精炼厂经计量接收开始，到散装精炼橄榄油在厂门处达到可发运状态结束。橄榄种植、采收、初榨油提取和运至精炼厂的运输由已披露的上游数据集表示。除非研究明确扩展边界并单独报告，否则不包括消费包装、出厂配送、零售、使用和生命周期末端。

本类别不包括初榨和特级初榨橄榄油、橄榄果渣油、精炼橄榄果渣油、精炼橄榄油与初榨橄榄油的调和油、与其他植物油混合的油以及通过再酯化获得的油。产品身份和质量声明应遵循已声明适用司法辖区的要求；Codex CXS 33-1981 是默认国际规格来源。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.olive-oil-refined |
| classification_refs | CPC 3.0：21672，Olive oil, refined（仅作映射背景） |
| covered_products | 以初榨橄榄油为原料，经已声明的化学或物理精炼路线生产且不改变初始甘油酯结构的散装精炼橄榄油 |
| excluded_products | 初榨或特级初榨橄榄油；粗制、精炼或调和橄榄果渣油；精炼与初榨橄榄油调和油；混合植物油；再酯化油；除非将包装作为明确下游模块纳入，否则不含零售包装产品 |
| representative_product | 满足已声明 Codex 或司法辖区规格的精炼橄榄油 |
| production_route | 待精炼油接收与储存；路线特定的脱酸与洗涤或物理精炼；脱色与过滤；脱臭；精滤和散装储存 |
| market_state | 成品、散装、工厂门口生产混合 |
| tiangong_process_identity | Olive oil, refined `23640aac-454b-481e-a599-60f29b6d1b86`（仅作公开身份候选；其清单估算不构成本 PCR 证据） |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 适用于已声明下游市场和规格的精炼橄榄油 |
| How much | 1 kg 净精炼橄榄油 |
| How well | 满足已声明的精炼橄榄油身份和质量规格，包括已声明的游离酸度结果，且不存在橄榄果渣油或其他植物油替代 |
| How long or cycle | 报告期所代表的一个精炼生产周期 |
| reference_flow_link | 从成品储存环节离开并到达工厂门口的净合格精炼橄榄油 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Olive oil, refined `4637b050-f60f-4ebb-af43-5128ebf416bf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 原料油身份与等级；化学或物理精炼路线；设施地理位置；报告期；产品质量规格与检测结果；散装或包装状态；分配方法；废物与废水处理地点 |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和含油产品流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测物料状态报告净油质量；所有清单结果归一化为从成品储存发运的 1 kg 合格精炼橄榄油。 |
| `stock_adjusted_mass` | 原料、中间油、产品、副产品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每个报告期使用接收量加期初库存减期末库存；不得把内部转移视为外部输入或输出。 |
| `water_measurement` | 工艺水和清洗水 | Mass 或带实测密度的体积 | kg 或 m3 | 保留仪表原始单位和换算依据；仅在声明实测或合理密度及温度依据时将体积换算为质量。 |
| `energy_measurement` | 电力、蒸汽、燃料和外购热 | Energy 或载能体特定属性 | kWh、MJ、kg steam 或燃料原始单位 | 保留仪表和发票原始单位；仅为明确能量换算使用 1 kWh = 3.6 MJ，并保留蒸汽压力或焓值及燃料热值基础。 |
| `chemical_active_basis` | 碱、酸、脱色助剂和处理化学品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别报告购入溶液质量与浓度并计算活性物质量；每条交换须说明采用的基础。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 待精炼原料油经称量进入精炼厂管控范围，并声明身份、等级、来源、供应商、批次、适用时的水分或杂质信息以及期初库存处理。 |
| starting_condition_role | 精炼厂前景系统的门到门起始条件 |
| product_classification_scope | 仅限精炼橄榄油；CPC 3.0 编码 21672 仅作映射背景，不扩展规范产品边界。 |
| recursive_input_rule | 进入同一类别的退回或返工精炼橄榄油应作为独立产品输入记录一次，并披露来源、质量和既有负荷处理；不得递归展开同一 PCR。 |
| upstream_dataset_requirement | 对待精炼初榨橄榄油及每项外购公用工程、化学品、纳入时的包装材料和场外处理服务使用单独识别的上游数据集。 |
| disclosure | 声明精炼路线、纳入单元操作、原料等级、副产品回收、内部循环处理、废物处理地点、包装状态、时间覆盖范围以及所有偏离默认门到门边界的情况。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | 精炼厂前景系统 | 纳入实测原料接收、路线特定精炼、脱色或过滤、脱臭、成品储存、直接公用工程、直接排放、废物、副产品以及可归属于报告设施的场内处理。 | `ifc-vegetable-oil-ehs-2015` |
| `boundary_upstream_separation` | 外购原料与供应品 | 精炼厂前景清单不含橄榄种植和初榨油提取，并将其作为上游数据集链接；外购能源、水、化学品和场外处理亦分别链接。 | `eu-ef-recommendation-2021-2279` |
| `boundary_product_separation` | 产品身份 | 不得在本参考产品中合并精炼橄榄果渣油、橄榄果渣油、初榨油或精炼与初榨调和油。 | `codex-cxs-33-1981-2024` |
| `boundary_packaging` | 包装与配送 | 默认散装工厂门口参考流不含包装与出厂配送；研究纳入时，应将其作为独立下游过程建模并披露。 | `eu-ef-recommendation-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feed_reception` | 原料油接收与储存 | 必需（`required`） | 始终 | 建立精炼厂管控、身份和库存调整后的原料质量 | 转入精炼的合格原料油 kg |
| `refining_train` | 脱酸、脱色、过滤和脱臭 | 必需（`required`） | 始终；具体化学或物理路线单元按已声明路线执行 | 将待精炼原料油转化为合格精炼油 | 精炼油中间品 kg |
| `finished_storage` | 精滤与成品油储存 | 必需（`required`） | 始终 | 建立工厂门口合格散装产品 | 净发运合格精炼橄榄油 kg |
| `wastewater_treatment` | 场内废水处理 | 条件纳入（`conditional`） | 工艺废水由报告设施处理时纳入 | 处理精炼直接废水并记录残余物与排放 | 处理废水 kg |

### 过程：原料油接收与储存（`feed_reception`）

#### 输入

##### 产品流

###### 精炼厂接收的待精炼初榨橄榄油（`feed_oil_received`）

记录进入精炼厂管控并符合精炼橄榄油原料身份的油。供应商文件以及地磅或经校准罐体记录用于确定身份和质量。

- 选定流：Virgin olive oil requiring refining
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告期内接收合格原料油的库存调整实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运合格精炼橄榄油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_ledger`
- 来源：`codex-cxs-33-1981-2024`
- 数量范围：暂定原料与产品质量 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.00
  - 上限：1.20
  - 单位：kg/kg refined olive oil
  - 基准：每 kg 发运合格精炼橄榄油的接收原料油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入精炼的合格原料油（`accepted_feed_oil`）

记录从接收与储存转入精炼线的库存调整质量。保留该内部转移用于过程细分，但在汇总门到门结果中抵消。

- 选定流：Accepted olive oil feed for refining
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：剔除拒收或不合格批次后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入的合格原料油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_ledger`
- 来源：`codex-cxs-33-1981-2024`
- 数量范围：暂定接收收率 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.90
  - 上限：1.00
  - 单位：kg/kg received feed oil
  - 基准：每 kg 接收原料油的合格转入油
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：脱酸、脱色、过滤和脱臭（`refining_train`）

#### 输入

##### 产品流

###### 合格橄榄油精炼原料（`refining_feed_oil`）

记录进入已声明精炼线的内部原料。路线声明决定表示化学中和与洗涤还是物理脱酸。

- 选定流：Accepted olive oil feed for refining
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：来自原料接收环节的实测内部转移
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_ledger`
- 来源：`ifc-vegetable-oil-ehs-2015`

###### 工艺水与清洗水（`refining_water`）

记录化学中和与洗涤用水、单独按水计量的蒸汽或真空系统补水以及可归属清洗用水。没有文件化分配基础时不得分配共用水。

- 选定流：Process water
- 流属性/单位：Mass 或 volume / kg 或 m3
- 数量规则：可归属于精炼线的计量净用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定用水 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg refined-oil intermediate
  - 基准：每 kg 精炼油中间品的可归属净用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 精炼用电（`refining_electricity`）

记录泵、真空系统、过滤、搅拌和其他精炼设备的计量电力。

- 选定流：Electricity, refinery supply mix
- 流属性/单位：Energy / kWh
- 数量规则：可归属于精炼线的计量或发票核对电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定用电 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：1.0
  - 单位：kWh/kg refined-oil intermediate
  - 基准：每 kg 精炼油中间品的精炼用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 蒸汽、燃料或外购工艺热（`refining_heat`）

记录加热、范围内的皂脚酸化、干燥、真空支持和脱臭所用能源。换算前保留载能体和实测基础。

- 选定流：Refinery process heat or steam
- 流属性/单位：Energy 或载能体特定属性 / MJ、kg steam 或燃料原始单位
- 数量规则：可归属于精炼线的计量或发票核对热能使用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定热能 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：10
  - 单位：MJ/kg refined-oil intermediate
  - 基准：每 kg 精炼油中间品的可归属工艺热
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路线特定精炼化学品（`refining_chemicals`）

仅在实际使用时记录碱、酸、脱胶剂或其他路线特定化学品。分别报告溶液和活性物质量。

- 选定流：Refining chemical, declared substance and concentration
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归属于生产周期的采购和库存调整化学品质量，并计算活性物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_ledger`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定化学品使用 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg active substance/kg refined-oil intermediate
  - 基准：每 kg 精炼油中间品的活性精炼化学品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱色土与过滤助剂（`bleaching_aids`）

记录脱色和精滤中消耗的脱色土及过滤助剂库存调整质量。

- 选定流：Bleaching earth or declared filtration aid
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采购质量加期初库存减期末库存，并与生产周期领用核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_ledger`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定脱色助剂 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg refined-oil intermediate
  - 基准：每 kg 精炼油中间品的脱色和过滤助剂
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入成品储存的精炼油中间品（`refined_oil_intermediate`）

记录经路线特定脱酸、脱色、过滤和脱臭后离开精炼线的合格油。

- 选定流：Refined olive oil intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：通过已声明质量放行检测的库存调整实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼原料油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_ledger`
- 来源：`codex-cxs-33-1981-2024`
- 数量范围：暂定精炼收率 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.80
  - 上限：1.00
  - 单位：kg/kg refining-feed oil
  - 基准：每 kg 精炼原料油的精炼油中间品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 皂脚、酸化油、胶质和脱臭馏出物（`refining_byproducts`）

按实际去向和经济属性分别记录每种回收物。不得将销售副产品与处置废物合并。

- 选定流：Route-specific refinery by-product, separately identified
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按命名物流和去向实测或库存调整质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_byproduct_records`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定回收物 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg refined-oil intermediate
  - 基准：分流前每 kg 精炼油中间品的精炼回收物合计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废脱色土和过滤残渣（`spent_bleaching_media`）

记录包含残油、水分和处理去向的废介质；如进行残油回收，应单独报告。

- 选定流：Spent bleaching earth or filtration residue
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量废物，或使用经核验净质量将容器数量换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_byproduct_records`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定废介质 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg refined-oil intermediate
  - 基准：每 kg 精炼油中间品的湿废介质
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 精炼工艺废水（`refinery_wastewater`）

记录化学中和、洗涤、冷凝水管理和可归属清洗产生、在场内或场外处理前的废水。

- 选定流：Vegetable-oil refinery wastewater
- 流属性/单位：Mass 或 volume / kg 或 m3
- 数量规则：计量排水，或采用水量平衡估算并单独声明不确定性
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定废水 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg refined-oil intermediate
  - 基准：每 kg 精炼油中间品处理前的工艺废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 精炼厂直接大气排放（`refinery_air_emissions`）

测量或计算精炼线可归属的应报告 VOC、异味控制、燃烧和工艺排放；各污染物作为独立基本流报告。

- 选定流：Declared air pollutant, substance-specific
- 流属性/单位：Mass / kg
- 数量规则：监测值，或由实测活动数据与已接受因子计算的来源特定值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼油中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定大气排放合计 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg refined-oil intermediate
  - 基准：每 kg 精炼油中间品的直接应报告大气排放合计；物质行仍保持分开
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：精滤与成品油储存（`finished_storage`）

#### 输入

##### 产品流

###### 进入成品储存的精炼油中间品（`storage_oil_input`）

记录放行精炼油向成品储存的内部转移。

- 选定流：Refined olive oil intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入成品罐的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发运合格精炼橄榄油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_ledger`
- 来源：`codex-cxs-33-1981-2024`

###### 精滤与储存用电（`storage_electricity`）

记录可归属于成品油的终滤、泵送、惰化支持、温控和罐区运行用电。

- 选定流：Electricity, refinery supply mix
- 流属性/单位：Energy / kWh
- 数量规则：成品储存与精滤的计量或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发运合格精炼橄榄油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定储存用电 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kWh/kg conforming refined olive oil
  - 基准：每 kg 发运产品的精滤与储存用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口合格精炼橄榄油（`refined_olive_oil`）

本行为定量参考输出。只记录按已声明规格放行的净产品；隔离或返工油不属于合格输出。

- 选定流：Olive oil, refined `4637b050-f60f-4ebb-af43-5128ebf416bf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将实测发运合格产品净质量精确归一化为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_mass_ledger`
- 来源：`codex-cxs-33-1981-2024`；`mass-balance-identity`
- 数量范围：参考输出归一化检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：归一化参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

##### 基本流

### 过程：场内废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 送往场内处理的精炼废水（`wastewater_to_treatment`）

记录从精炼和清洗操作转入场内处理系统的实测废水流。

- 选定流：Vegetable-oil refinery wastewater
- 流属性/单位：Mass 或 volume / kg 或 m3
- 数量规则：转入场内处理的计量流量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ifc-vegetable-oil-ehs-2015`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理污泥与分离油（`treatment_residuals`）

按去向以及实测湿基或干基分别记录脱水污泥、分离油和其他处理残余物。

- 选定流：Wastewater-treatment residual, separately identified
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明水分或干固体基础的实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ifc-vegetable-oil-ehs-2015`
- 数量范围：暂定处理残余物 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg wastewater treated
  - 基准：每 kg 处理废水的湿处理残余物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 处理后废水排放（`treated_wastewater_discharge`）

分别记录处理后的水量和各监测污染物；不得将转移至场外下水道表示为基本流排放。

- 选定流：Water and substance-specific emissions to water
- 流属性/单位：Mass 或 volume / kg、m3 或污染物特定质量
- 数量规则：实测排放体积与实验室浓度换算为污染物负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ifc-vegetable-oil-ehs-2015`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用精炼过程和公用工程 | 在应用分配前，优先直接计量并细分精炼线、储存和处理过程。 | `eu-ef-recommendation-2021-2279` |
| `allocation_internal_recycle` | 场内回收油和返工油 | 内部循环保留在前景系统内；记录回收质量和能源，不产生第二次产品抵扣或重复上游负荷。 | `mass-balance-identity` |
| `allocation_co_products` | 销售的皂脚、酸化油、馏出物或回收油 | 无法合理细分或系统扩展时，采用相关物理关系；仅在不存在合理物理关系时使用经济分配，并披露价格、期间、币种和敏感性。 | `eu-ef-recommendation-2021-2279` |
| `allocation_waste_treatment` | 废物和处理残余物 | 除非回收物按已声明研究方法构成副产品，否则收集与处理负荷归属于精炼产品；披露任何负荷转移或抵扣。 | `eu-ef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_ledger` | `feed_reception`; `refining_train`; `finished_storage` | 原料、中间品、参考产品、拒收品、库存变化 | 地磅票、经校准罐体计量、批次转移记录、发运记录 | 时间戳；批次；物料身份；毛重、皮重、净重；期初库存；期末库存；去向；质量放行 | 按生产周期和报告期核对交接计量与罐体记录 | kg | 每次接收、转移和发运 | 包含期初与期末库存的完整代表性报告期 | 范围内所有精炼罐和转移点 | 接收量 + 期初库存 - 期末库存 - 单独记录的非产品外流；按合格发运质量归一化 | 校准证书、核对签字、异常日志 |
| `cp_utility_meters` | `refining_train`; `finished_storage` | 水、电力、蒸汽、燃料、外购热 | 仪表读数、发票、锅炉日志、蒸汽条件、分配动因 | 仪表编号；时间戳；期初与期末读数；单位；压力；温度；热值；共用动因 | 优先直接分表计量；与场址总量核对 | 仪表原始单位、kWh、MJ、kg steam 或 m3 | 连续或批次读数，按月核对 | 与产品质量台账相同期间 | 所有范围内公用工程仪表和合理共用系统 | 读数差减有文件记录的外送量；无法直接计量时按因果动因分配 | 仪表校准、发票核对、缺失数据日志 |
| `cp_chemical_ledger` | `refining_train` | 酸、碱、脱色土、过滤助剂、处理化学品 | 采购、库存、领用、退回和浓度记录 | 物质；供应商；批次；溶液质量；浓度；期初库存；期末库存；过程领用 | 库存平衡与批次领用核对 | kg solution 和 kg active substance | 每次领用并按月核对 | 与产品质量台账相同期间 | 所有范围内化学品库和投加点 | 采购 + 期初库存 - 期末库存 - 已记录退回；活性质量 = 溶液质量 × 质量分数 | 供应商证书、秤校准、使用时的浓度检测 |
| `cp_waste_and_byproduct_records` | `refining_train` | 皂脚、酸化油、胶质、馏出物、废脱色土、过滤残渣 | 称量票、罐体或容器记录、销售与处置联单 | 物流身份；质量；水分或干固体基础；实测时的含油量；去向；经济属性 | 测量每种命名物流并与质量平衡核对 | kg | 每次转移 | 与产品质量台账相同期间 | 所有精炼残余物收集点 | 按物流和去向求和；不得合并销售副产品和处置废物 | 联单、发票、实验室结果、去向收据 |
| `cp_wastewater_monitoring` | `refining_train`; `wastewater_treatment` | 废水、处理后排放、污染物、污泥 | 流量计、采样日志、实验室结果、下水道或排放记录 | 体积；采样时间；浓度；方法；检出限；处理状态；污泥质量；水分 | 代表性混合采样或法规要求采样，加连续或批次流量测量 | m3、kg 和实测 mg/L | 按许可和运行周期 | 与产品质量台账相同期间 | 所有范围内废水出口和场内处理 | 污染物负荷 = 实测体积 × 浓度并换算单位；披露未检出值处理 | 校准、样品流转、认可或文件化实验室方法 |
| `cp_air_emissions` | `refining_train` | 直接工艺和燃烧排放 | 烟道测试、连续监测、燃料记录、活动记录、已接受因子 | 污染物；浓度或因子；烟气流量或活动量；时间；方法；不确定性 | 优先直接监测；否则由实测活动量和有引用因子计算 | 物质特定质量 | 按许可和代表性运行 | 与产品质量台账相同期间 | 所有范围内工艺排口和燃烧源 | 每种物质单独计算；保留物质行后再汇总 | 校准、测试报告、因子来源、不确定性记录 |
| `cp_quality_release` | `finished_storage` | 精炼橄榄油身份与放行 | 批次证书、实验室结果、放行或隔离决定 | 批次；采样日期；方法；游离酸度；必需理化字段；去向 | 按已声明产品规格和司法辖区进行采样检测 | 规格特定 | 每个放行批次或质量计划定义的代表批次 | 构成参考输出的所有批次 | 所有成品罐与放行点 | 参考产品仅含已放行合格质量；隔离和返工质量单独报告 | 签字证书、方法标识、实验室能力证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期数量 / 发运合格精炼橄榄油净质量 | 实测行数量；合格发运质量 | 每 1 kg 参考流的数量 | `mass-balance-identity` |
| `calc_stock_adjustment` | 原料、产品、化学品、废物和中间品 | 期间消耗或产出 = 接收或转移 + 期初库存 - 期末库存 - 单独记录退回或外送 | 接收；转移；期初与期末库存；退回；外送 | 库存调整期间数量 | `mass-balance-identity` |
| `calc_mass_balance` | 精炼厂前景系统 | 含质量输入油和辅助材料 = 产品 + 单独实测副产品与废物 + 排放 + 在制品期末减期初变化，并考虑已声明测量不确定性 | 库存调整物料行；库存变化；实测排放 | 质量平衡残差及相对残差 | `mass-balance-identity` |
| `calc_active_chemical` | 化学品输入 | 活性物质量 = 溶液质量 × 实测或供应商声明质量分数 | 溶液质量；浓度 | kg active substance | `ifc-vegetable-oil-ehs-2015` |
| `calc_energy_conversion` | 电力和热能 | 仅在需要统一能量单位时按 1 kWh = 3.6 MJ 换算；保留原始载能体数量及已声明蒸汽或燃料基础 | 原始能源记录；换算因子；蒸汽或燃料基础 | 带可追溯原始值的换算能量 | `mass-balance-identity` |
| `calc_pollutant_load` | 废水和大气排放 | 污染物负荷 = 实测流量或活动量 × 实测浓度或已接受因子，并明确单位换算和未检出规则 | 流量或活动量；浓度或因子；采样覆盖 | 物质特定排放质量 | `ifc-vegetable-oil-ehs-2015` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 原料与参考产品 | 保留供应商身份、批次追溯、已声明精炼路线、产品规格和放行结果；排除橄榄果渣油及精炼与初榨调和类别。 | 供应商文件、批次谱系、质量放行证书、`codex-cxs-33-1981-2024` |
| `dq_temporal` | 所有前景记录 | 使用覆盖正常路线运行、期初/期末库存、停机、返工和季节变化的完整代表性报告期；披露排除和异常生产周期。 | 期间覆盖报告和生产日志 |
| `dq_measurement` | 质量、公用工程、化学品、废物和排放 | 可行时采用经校准直接测量；记录仪表覆盖、分配动因、换算、检出限和不确定性。 | 校准证书、仪表图、实验室方法、核对报告 |
| `dq_completeness` | 过程清单 | 核算所有命名主要输入、输出、废物、废水流和直接排放；每项未测量物流应量化或明确标记，不得视为零。 | 签字质量与公用工程平衡、缺失数据清单、废物联单 |
| `dq_representativeness` | 发布数据集 | 报告地理、技术、原料等级、化学或物理路线、产能利用、产品状态和时间覆盖，以便用户判断代表性。 | 数据集元数据和设施声明、`eu-ef-recommendation-2021-2279` |
| `dq_estimate_replacement` | 推理估算范围 | 所有 `reasoned_estimate` 仅作可替换 QA 校验；数据集值由前景记录决定，在关键发布用途前方法学评审必须接受或替换估算。 | 评审记录和前景证据清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 必须使用产品流 UUID `4637b050-f60f-4ebb-af43-5128ebf416bf`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg 参考单位。 | `codex-cxs-33-1981-2024` |
| `validate_product_quality` | 已放行精炼橄榄油 | 必须提供已声明司法辖区或 Codex 规格、检测方法、批次结果和放行决定；采用 Codex 默认时，精炼橄榄油须由允许方法精炼初榨橄榄油获得，游离酸度不超过每 100 g 油 0.3 g 油酸。 | `codex-cxs-33-1981-2024` |
| `validate_route_boundary` | 过程图与清单 | 必须声明一种化学或物理精炼路线，并覆盖适用脱酸、脱色或过滤、脱臭、直接公用工程、残余物、储存和处理地点。 | `ifc-vegetable-oil-ehs-2015` |
| `validate_mass_reconciliation` | 精炼厂前景系统 | 计算并报告质量平衡残差；非零残差不得静默分配或置零，必须调查或明确披露不确定性。 | `mass-balance-identity` |
| `validate_internal_transfers` | 汇总数据集 | 内部产品流输出必须与相应输入匹配，并在汇总门到门结果中精确抵消。 | `mass-balance-identity` |
| `validate_allocation` | 多功能输出 | 要求细分证据或文件化物理分配基础；使用经济分配时，须提供价格、期间、币种和敏感性披露。 | `eu-ef-recommendation-2021-2279` |
| `validate_data_package` | 前景数据包 | 要求采集或计算行引用的全部采集协议、完整必需限定信息、来源引用、质量证据，以及对未测量物流和临时估算的明确披露。 | `eu-ef-recommendation-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以工厂门口散装精炼橄榄油为基准的门到门精炼厂前景数据集 |
| downstream_use | `secondary_dataset`；完成方法学评审和发布后可作 `background_dataset` |
| allowed_use | 当原料等级、路线、地理、产品状态、分配和边界兼容时，用于精炼橄榄油的精炼阶段 LCI 与生命周期模型投影 |
| excluded_use | 初榨或特级初榨橄榄油；橄榄果渣油；精炼与初榨调和油；未增加包装模块的消费包装产品；未经完整兼容生命周期建模与评审的公开比较声明 |
| required_metadata | 设施地理；报告期；原料身份与来源；精炼路线及单元操作；散装或包装状态；产品规格与放行方法；分配方法；上游数据集引用；处理地点；数据所有权与评审状态 |
| required_quality_disclosure | 仪表与采样覆盖；校准；质量平衡残差；缺失或估算数据；推理估算使用；副产品去向；数据年龄；技术与地理代表性；核证状态 |
| update_trigger | 原料等级、精炼路线、能源系统、污染控制、分配、产品规格、工厂配置、数据所有权或代表性报告期发生实质变化 |

## 11. 数据源

| 来源标识 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-33-1981-2024` | standard | Codex Alimentarius Commission. CXS 33-1981, Standard for Olive Oils and Olive-Pomace Oils, revised 2024. https://workspace.fao.org/sites/codex/Standards/CXS%2033-1981/CXS_033e.pdf（检索于 2026-08-10） | 精炼橄榄油身份、排除项、质量规格和放行校验 |
| `ifc-vegetable-oil-ehs-2015` | official_guidance | World Bank Group/IFC. Environmental, Health, and Safety Guidelines for Vegetable Oil Production and Processing, 12 February 2015. https://www.ifc.org/content/dam/ifc/doc/2010/2015-vegetable-oil-processing-ehs-guidelines-en.pdf（检索于 2026-08-10） | 精炼过程分解、水与能源角色、废物、副产品、废水、排放和监测 |
| `eu-ef-recommendation-2021-2279` | official_guidance | European Commission. Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, 15 December 2021. https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-10） | 生命周期边界、高质量数据、多功能与分配层级以及下游数据集使用 |
| `mass-balance-identity` | method_factor | 应用于实测前景记录的质量守恒和精确单位换算恒等关系 | 库存调整、参考归一化、质量核对、内部转移抵消和 kWh 至 MJ 换算 |
